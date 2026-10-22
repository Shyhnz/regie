// Régie.app : la Régie dans sa propre fenêtre, sans navigateur.
// Au lancement, elle réutilise le serveur s'il tourne déjà, sinon elle le démarre (mac/serve.sh).
// En quittant (⌘Q ou fermeture de la fenêtre), elle arrête le serveur et tout ce qu'il a lancé : actions Claude, rendus, aperçus.
import Cocoa
import WebKit

let env = ProcessInfo.processInfo.environment
let info = Bundle.main.infoDictionary ?? [:]
// Régie publiée (.dmg) : le serveur, la Bible et le studio de base sont rangés dans le paquet lui-même.
let configuredDir = env["REGIE_DIR"] ?? (info["RegieDirectory"] as? String) ?? ""
let regieDir = configuredDir.isEmpty ? (Bundle.main.resourceURL?.appendingPathComponent("regie").path ?? "") : configuredDir
let port = Int(env["REGIE_PORT"] ?? "") ?? (info["RegiePort"] as? Int) ?? 4317
let appURL = URL(string: "http://127.0.0.1:\(port)/")!
let logURL = FileManager.default.homeDirectoryForCurrentUser.appendingPathComponent("Library/Logs/Régie.log")
// Test sans écran : REGIE_SNAPSHOT=fichier.png capture la page chargée, REGIE_SNAPSHOT_QUIT=1 quitte ensuite,
// REGIE_SNAPSHOT_RESTART=1 redémarre d'abord le serveur une fois (sans boîte de dialogue) avant la capture suivante.
let snapshotPath = env["REGIE_SNAPSHOT"]
let ink = NSColor(srgbRed: 15 / 255, green: 14 / 255, blue: 13 / 255, alpha: 1)

// MARK: - Processus

struct Proc { let pid: pid_t; let ppid: pid_t; let command: String }

func capture(_ tool: String, _ args: [String]) -> String {
    let p = Process()
    p.executableURL = URL(fileURLWithPath: tool)
    p.arguments = args
    let pipe = Pipe()
    p.standardOutput = pipe
    p.standardError = FileHandle.nullDevice
    do { try p.run() } catch { return "" }
    let data = pipe.fileHandleForReading.readDataToEndOfFile()
    p.waitUntilExit()
    return String(decoding: data, as: UTF8.self)
}

func processTable() -> [Proc] {
    capture("/bin/ps", ["-axww", "-o", "pid=,ppid=,command="]).split(separator: "\n").compactMap { line in
        let f = line.split(separator: " ", maxSplits: 2, omittingEmptySubsequences: true)
        guard f.count >= 2, let pid = pid_t(f[0]), let ppid = pid_t(f[1]) else { return nil }
        return Proc(pid: pid, ppid: ppid, command: f.count > 2 ? String(f[2]) : "")
    }
}

func descendants(of root: pid_t) -> [Proc] {
    let table = processTable()
    var found: [Proc] = []
    var frontier: Set<pid_t> = [root]
    while !frontier.isEmpty {
        let next = table.filter { frontier.contains($0.ppid) }
        found += next
        frontier = Set(next.map(\.pid))
    }
    return found
}

func listeningPID() -> pid_t? {
    capture("/usr/sbin/lsof", ["-nP", "-tiTCP:\(port)", "-sTCP:LISTEN"]).split(separator: "\n").compactMap { pid_t($0) }.first
}

func isRegieServer(_ pid: pid_t) -> Bool {
    let c = capture("/bin/ps", ["-ww", "-o", "command=", "-p", String(pid)])
    return c.contains("server/index.js") || c.contains("mac/serve.sh")
}

/// Les actions Claude en cours, par leur nom de session (« Régie · film · étape »).
func claudeRuns(in tree: [Proc]) -> [String] {
    tree.filter { $0.command.contains("claude") && $0.command.contains(" -p ") && $0.command.contains("stream-json") }.map { p in
        let c = p.command
        if let r = c.range(of: "--name "), let end = c.range(of: " --", range: r.upperBound..<c.endIndex) {
            return String(c[r.upperBound..<end.lowerBound])
        }
        return "Une action Claude"
    }
}

/// Ce que Claude fait en ce moment, demandé au serveur : les sessions Claude Code restent ouvertes au repos, seul le serveur
/// sait si l'une travaille. nil si le serveur ne répond pas (ou s'il est d'une version d'avant les sessions).
func busyFromServer() -> [String]? {
    var req = URLRequest(url: appURL.appendingPathComponent("api/claude/busy"))
    req.timeoutInterval = 1.5
    let done = DispatchSemaphore(value: 0)
    var labels: [String]?
    URLSession(configuration: .ephemeral).dataTask(with: req) { data, response, _ in
        if (response as? HTTPURLResponse)?.statusCode == 200, let data, let list = try? JSONSerialization.jsonObject(with: data) as? [String] { labels = list }
        done.signal()
    }.resume()
    _ = done.wait(timeout: .now() + 2)
    return labels
}

/// Les actions qu'arrêterait un départ : celles du serveur, plus d'éventuels « claude -p » d'une version précédente.
func claudeBusy(in tree: [Proc]) -> [String] {
    (busyFromServer() ?? []) + claudeRuns(in: tree)
}

func waitUntil(_ seconds: TimeInterval, _ done: () -> Bool) -> Bool {
    let end = Date().addingTimeInterval(seconds)
    while Date() < end {
        if done() { return true }
        usleep(100_000)
    }
    return done()
}

/// Arrête le serveur (qui arrête lui-même ses actions Claude), puis tout ce qu'il avait lancé et qui traînerait encore.
func stopServer(_ pid: pid_t, tree: [Proc], own: Process?) {
    let running = { own?.processIdentifier == pid ? own!.isRunning : kill(pid, 0) == 0 }
    kill(pid, SIGTERM)
    if !waitUntil(8, { !running() }) {
        kill(pid, SIGKILL)
        _ = waitUntil(1, { !running() })
    }
    let left = tree.filter { kill($0.pid, 0) == 0 }
    left.forEach { kill($0.pid, SIGTERM) }
    if !waitUntil(2, { left.allSatisfy { kill($0.pid, 0) != 0 } }) {
        left.forEach { kill($0.pid, SIGKILL) }
    }
}

func esc(_ s: String) -> String {
    s.replacingOccurrences(of: "&", with: "&amp;").replacingOccurrences(of: "<", with: "&lt;").replacingOccurrences(of: ">", with: "&gt;")
}

// MARK: - Application

@MainActor
final class AppDelegate: NSObject, NSApplicationDelegate, NSWindowDelegate, WKNavigationDelegate, WKUIDelegate, WKDownloadDelegate, WKScriptMessageHandler {
    var window: NSWindow!
    var web: WKWebView!
    var server: Process?       // le serveur lancé par l'app
    var serverPID: pid_t?      // celui qu'on arrête en quittant : lancé par l'app ou retrouvé au démarrage
    var loaded = false
    var quitting = false
    var restarting = false
    var restartedForTest = false
    var slowNotice = false
    var downloads: [ObjectIdentifier: URL] = [:]
    let session = URLSession(configuration: .ephemeral)

    func applicationDidFinishLaunching(_ notification: Notification) {
        buildMenu()
        buildWindow()
        start()
    }

    func applicationShouldTerminateAfterLastWindowClosed(_ sender: NSApplication) -> Bool { true }

    // Fermer la fenêtre, c'est quitter : on passe par la même vérification que ⌘Q.
    func windowShouldClose(_ sender: NSWindow) -> Bool {
        NSApp.terminate(nil)
        return false
    }

    func applicationShouldTerminate(_ sender: NSApplication) -> NSApplication.TerminateReply {
        if quitting { return .terminateNow }
        rememberRoute()
        guard let pid = serverPID, server?.isRunning ?? (kill(pid, 0) == 0) else { return .terminateNow }
        let tree = descendants(of: pid)
        let runs = claudeBusy(in: tree)
        if !runs.isEmpty && snapshotPath == nil {
            let a = NSAlert()
            a.alertStyle = .warning
            a.messageText = runs.count == 1 ? "Claude travaille encore" : "\(runs.count) actions Claude sont en cours"
            a.informativeText = "\(runs.joined(separator: "\n"))\n\nQuitter la Régie arrête Claude. Tu pourras relancer l'action depuis son étape."
            a.addButton(withTitle: "Annuler")
            a.addButton(withTitle: "Quitter et arrêter Claude").hasDestructiveAction = true
            if a.runModal() == .alertFirstButtonReturn { return .terminateCancel }
        }
        quitting = true
        splash("Arrêt de la Régie…")
        let own = server
        DispatchQueue.global(qos: .userInitiated).async {
            stopServer(pid, tree: tree, own: own)
            DispatchQueue.main.async { NSApp.reply(toApplicationShouldTerminate: true) }
        }
        return .terminateLater
    }

    // MARK: Serveur

    func ping(_ done: @escaping (Bool) -> Void) {
        var req = URLRequest(url: appURL.appendingPathComponent("api/meta"))
        req.timeoutInterval = 1.5
        session.dataTask(with: req) { _, response, _ in
            let up = (response as? HTTPURLResponse)?.statusCode == 200
            DispatchQueue.main.async { done(up) }
        }.resume()
    }

    func start() {
        loaded = false
        slowNotice = false
        splash("Démarrage de la Régie…")
        ping { up in
            guard up else { return self.launchServer() }
            if let pid = listeningPID(), isRegieServer(pid) { self.serverPID = pid }
            self.open()
        }
    }

    func launchServer() {
        let script = regieDir + "/mac/serve.sh"
        guard FileManager.default.fileExists(atPath: script) else {
            return failure("Dossier de la Régie introuvable", detail: "\(regieDir)\nReconstruis l'app avec mac/build-app.sh.")
        }
        try? FileManager.default.createDirectory(at: logURL.deletingLastPathComponent(), withIntermediateDirectories: true)
        FileManager.default.createFile(atPath: logURL.path, contents: nil)
        let log = try? FileHandle(forWritingTo: logURL)
        let p = Process()
        p.executableURL = URL(fileURLWithPath: "/bin/zsh")
        p.arguments = [script]
        p.currentDirectoryURL = URL(fileURLWithPath: regieDir)
        var e = env
        e["REGIE_PORT"] = String(port)
        p.environment = e
        p.standardInput = FileHandle.nullDevice
        p.standardOutput = log
        p.standardError = log
        p.terminationHandler = { _ in
            DispatchQueue.main.async {
                // Un redémarrage remplace le serveur : l'arrêt de l'ancien n'est pas une panne.
                guard !self.quitting, self.server === p else { return }
                self.serverPID = nil
                self.failure(self.loaded ? "Le serveur de la Régie s'est arrêté" : "La Régie n'a pas pu démarrer")
            }
        }
        do { try p.run() } catch {
            return failure("Impossible de lancer le serveur", detail: error.localizedDescription)
        }
        server = p
        serverPID = p.processIdentifier
        waitForServer(since: Date())
    }

    func waitForServer(since: Date) {
        ping { up in
            guard !self.quitting, self.server?.isRunning == true else { return }
            if up { return self.open() }
            let elapsed = Date().timeIntervalSince(since)
            if elapsed > 240 { return self.failure("La Régie met trop de temps à démarrer") }
            if elapsed > 6 && !self.slowNotice {
                self.slowNotice = true
                self.splash("Démarrage de la Régie…", detail: "Première ouverture après une mise à jour : l'interface se reconstruit, ça prend quelques secondes.")
            }
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.4) { self.waitForServer(since: since) }
        }
    }

    func open() {
        loaded = true
        let route = env["REGIE_ROUTE"] ?? UserDefaults.standard.string(forKey: "route") ?? "/"
        web.load(URLRequest(url: URL(string: "\(appURL.absoluteString)#\(route)") ?? appURL))
    }

    func rememberRoute() {
        guard snapshotPath == nil, loaded, let url = web.url, isApp(url) else { return }
        UserDefaults.standard.set(url.fragment ?? "/", forKey: "route")
    }

    // MARK: Pages d'attente et d'erreur

    func page(_ body: String) -> String {
        """
        <!doctype html><html lang="fr"><meta charset="utf-8"><style>
        html,body{margin:0;height:100%;background:#0F0E0D;color:#EDE8E3;font:15px/1.5 -apple-system,system-ui,sans-serif;-webkit-user-select:none;cursor:default}
        main{box-sizing:border-box;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:0 32px;text-align:center}
        h1{font-size:17px;font-weight:600;margin:0}
        p{margin:0;color:#A8A29C;max-width:46ch;white-space:pre-line}
        .dot{width:10px;height:10px;border-radius:50%;background:#F44800;animation:pulse 1.2s ease-in-out infinite}
        @keyframes pulse{50%{opacity:.2}}
        pre{box-sizing:border-box;max-width:min(720px,100%);max-height:32vh;overflow:auto;margin:0;text-align:left;background:#191715;border:1px solid #2A2724;border-radius:6px;padding:10px 12px;font:12px/1.5 ui-monospace,Menlo,monospace;color:#BDB7B0;-webkit-user-select:text;white-space:pre-wrap}
        .row{display:flex;flex-wrap:wrap;justify-content:center;gap:8px}
        button{font:inherit;font-size:14px;border-radius:6px;padding:7px 14px;border:1px solid #3A3531;background:transparent;color:#EDE8E3;cursor:pointer}
        button.primary{background:#F44800;border-color:#F44800;color:#0F0E0D;font-weight:600}
        button:focus-visible{outline:2px solid #EDE8E3;outline-offset:2px}
        </style><main>\(body)</main></html>
        """
    }

    func splash(_ title: String, detail: String? = nil) {
        web.loadHTMLString(page("<div class=dot></div><h1>\(esc(title))</h1>" + (detail.map { "<p>\(esc($0))</p>" } ?? "")), baseURL: nil)
    }

    func failure(_ title: String, detail: String? = nil) {
        loaded = false
        let tail = (try? String(contentsOf: logURL, encoding: .utf8))
            .map { $0.split(separator: "\n").suffix(14).joined(separator: "\n") } ?? ""
        web.loadHTMLString(page("""
        <h1>\(esc(title))</h1>
        <p>\(esc(detail ?? "Le détail est dans le journal du serveur."))</p>
        \(tail.isEmpty ? "" : "<pre>\(esc(tail))</pre>")
        <div class=row>
          <button class=primary onclick="webkit.messageHandlers.regie.postMessage('retry')">Réessayer</button>
          <button onclick="webkit.messageHandlers.regie.postMessage('log')">Ouvrir le journal</button>
        </div>
        """), baseURL: nil)
        NSApp.requestUserAttention(.informationalRequest)
    }

    func userContentController(_ controller: WKUserContentController, didReceive message: WKScriptMessage) {
        switch message.body as? String {
        case "retry": start()
        case "log": openLog()
        default: break
        }
    }

    // MARK: Fenêtre

    func buildWindow() {
        let config = WKWebViewConfiguration()
        config.websiteDataStore = .default()
        config.mediaTypesRequiringUserActionForPlayback = []
        config.preferences.isElementFullscreenEnabled = true
        config.userContentController.add(self, name: "regie")
        web = WKWebView(frame: .zero, configuration: config)
        web.navigationDelegate = self
        web.uiDelegate = self
        web.allowsBackForwardNavigationGestures = true
        web.allowsMagnification = true
        web.setValue(false, forKey: "drawsBackground")
        web.underPageBackgroundColor = ink
        if #available(macOS 13.3, *) { web.isInspectable = true }
        let zoom = UserDefaults.standard.double(forKey: "zoom")
        web.pageZoom = zoom > 0 ? zoom : 1

        let visible = NSScreen.main?.visibleFrame ?? NSRect(x: 0, y: 0, width: 1440, height: 900)
        let size = NSSize(width: min(1480, visible.width - 80), height: min(940, visible.height - 60))
        window = NSWindow(contentRect: NSRect(origin: .zero, size: size), styleMask: [.titled, .closable, .miniaturizable, .resizable], backing: .buffered, defer: false)
        window.title = "Régie"
        window.titlebarAppearsTransparent = true
        window.backgroundColor = ink
        window.appearance = NSAppearance(named: .darkAqua)
        window.minSize = NSSize(width: 480, height: 520)
        window.isReleasedWhenClosed = false
        window.tabbingMode = .disallowed
        window.contentView = web
        window.delegate = self
        window.center()
        window.setFrameAutosaveName("Régie")
        if snapshotPath == nil {
            window.makeKeyAndOrderFront(nil)
            NSApp.activate(ignoringOtherApps: true)
        } else {
            window.orderBack(nil)
        }
    }

    func isApp(_ url: URL) -> Bool {
        url.port == port && (url.host == "127.0.0.1" || url.host == "localhost")
    }

    // Tout ce qui sort de la Régie (aperçus HyperFrames, pages sources, nouveaux onglets) s'ouvre dans le navigateur.
    func webView(_ webView: WKWebView, decidePolicyFor action: WKNavigationAction, decisionHandler: @escaping @MainActor (WKNavigationActionPolicy) -> Void) {
        if action.shouldPerformDownload { return decisionHandler(.download) }
        guard let url = action.request.url, action.targetFrame?.isMainFrame == true else { return decisionHandler(.allow) }
        if isApp(url) || ["about", "data", "blob"].contains(url.scheme ?? "") { return decisionHandler(.allow) }
        NSWorkspace.shared.open(url)
        decisionHandler(.cancel)
    }

    func webView(_ webView: WKWebView, decidePolicyFor response: WKNavigationResponse, decisionHandler: @escaping @MainActor (WKNavigationResponsePolicy) -> Void) {
        decisionHandler(response.canShowMIMEType ? .allow : .download)
    }

    func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration, for action: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
        if let url = action.request.url { NSWorkspace.shared.open(url) }
        return nil
    }

    func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
        let e = error as NSError
        let unreachable = e.domain == NSURLErrorDomain && [NSURLErrorCannotConnectToHost, NSURLErrorNetworkConnectionLost, NSURLErrorTimedOut].contains(e.code)
        if loaded && !quitting && unreachable { failure("La Régie ne répond pas") }
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        guard let path = snapshotPath, let url = webView.url, isApp(url) else { return }
        DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
            webView.takeSnapshot(with: nil) { image, _ in
                if let tiff = image?.tiffRepresentation, let png = NSBitmapImageRep(data: tiff)?.representation(using: .png, properties: [:]) {
                    try? png.write(to: URL(fileURLWithPath: path))
                }
                if env["REGIE_SNAPSHOT_RESTART"] != nil && !self.restartedForTest {
                    self.restartedForTest = true
                    return self.restartServer()
                }
                if env["REGIE_SNAPSHOT_QUIT"] != nil { NSApp.terminate(nil) }
            }
        }
    }

    // MARK: Dialogues et fichiers

    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping @MainActor () -> Void) {
        let a = NSAlert()
        a.messageText = message
        a.addButton(withTitle: "OK")
        a.beginSheetModal(for: window) { _ in completionHandler() }
    }

    func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping @MainActor (Bool) -> Void) {
        let a = NSAlert()
        a.messageText = message
        a.addButton(withTitle: "OK")
        a.addButton(withTitle: "Annuler")
        a.beginSheetModal(for: window) { completionHandler($0 == .alertFirstButtonReturn) }
    }

    func webView(_ webView: WKWebView, runJavaScriptTextInputPanelWithPrompt prompt: String, defaultText: String?, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping @MainActor (String?) -> Void) {
        let a = NSAlert()
        a.messageText = prompt
        let field = NSTextField(string: defaultText ?? "")
        field.frame = NSRect(x: 0, y: 0, width: 300, height: 24)
        a.accessoryView = field
        a.addButton(withTitle: "OK")
        a.addButton(withTitle: "Annuler")
        a.window.initialFirstResponder = field
        a.beginSheetModal(for: window) { completionHandler($0 == .alertFirstButtonReturn ? field.stringValue : nil) }
    }

    func webView(_ webView: WKWebView, runOpenPanelWith parameters: WKOpenPanelParameters, initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping @MainActor ([URL]?) -> Void) {
        let panel = NSOpenPanel()
        panel.allowsMultipleSelection = parameters.allowsMultipleSelection
        panel.canChooseDirectories = parameters.allowsDirectories
        panel.canChooseFiles = true
        panel.beginSheetModal(for: window) { completionHandler($0 == .OK ? panel.urls : nil) }
    }

    func webView(_ webView: WKWebView, navigationAction: WKNavigationAction, didBecome download: WKDownload) { download.delegate = self }
    func webView(_ webView: WKWebView, navigationResponse: WKNavigationResponse, didBecome download: WKDownload) { download.delegate = self }

    func download(_ download: WKDownload, decideDestinationUsing response: URLResponse, suggestedFilename: String, completionHandler: @escaping @MainActor (URL?) -> Void) {
        let dir = FileManager.default.urls(for: .downloadsDirectory, in: .userDomainMask)[0]
        let name = suggestedFilename as NSString
        var url = dir.appendingPathComponent(suggestedFilename)
        var n = 2
        while FileManager.default.fileExists(atPath: url.path) {
            let ext = name.pathExtension
            url = dir.appendingPathComponent(ext.isEmpty ? "\(name) \(n)" : "\(name.deletingPathExtension) \(n).\(ext)")
            n += 1
        }
        downloads[ObjectIdentifier(download)] = url
        completionHandler(url)
    }

    func downloadDidFinish(_ download: WKDownload) {
        guard let url = downloads.removeValue(forKey: ObjectIdentifier(download)) else { return }
        // Fait rebondir la pile Téléchargements du Dock, comme un navigateur.
        DistributedNotificationCenter.default().post(name: .init("com.apple.DownloadFileFinished"), object: url.path)
    }

    func download(_ download: WKDownload, didFailWithError error: Error, resumeData: Data?) {
        downloads.removeValue(forKey: ObjectIdentifier(download))
        let a = NSAlert()
        a.messageText = "Le téléchargement a échoué"
        a.informativeText = error.localizedDescription
        a.beginSheetModal(for: window)
    }

    // MARK: Menus

    func buildMenu() {
        let main = NSMenu()
        @discardableResult
        func menu(_ title: String, _ items: [NSMenuItem]) -> NSMenu {
            let m = NSMenu(title: title)
            items.forEach(m.addItem)
            let holder = NSMenuItem()
            holder.submenu = m
            main.addItem(holder)
            return m
        }
        func item(_ title: String, _ action: Selector, _ key: String = "", _ mods: NSEvent.ModifierFlags = .command, mine: Bool = false) -> NSMenuItem {
            let i = NSMenuItem(title: title, action: action, keyEquivalent: key)
            i.keyEquivalentModifierMask = mods
            if mine { i.target = self }
            return i
        }
        menu("Régie", [
            item("À propos de Régie", #selector(NSApplication.orderFrontStandardAboutPanel(_:))),
            .separator(),
            item("Masquer Régie", #selector(NSApplication.hide(_:)), "h"),
            item("Masquer les autres", #selector(NSApplication.hideOtherApplications(_:)), "h", [.command, .option]),
            item("Tout afficher", #selector(NSApplication.unhideAllApplications(_:))),
            .separator(),
            item("Quitter Régie", #selector(NSApplication.terminate(_:)), "q"),
        ])
        menu("Édition", [
            item("Annuler", Selector(("undo:")), "z"),
            item("Rétablir", Selector(("redo:")), "z", [.command, .shift]),
            .separator(),
            item("Couper", #selector(NSText.cut(_:)), "x"),
            item("Copier", #selector(NSText.copy(_:)), "c"),
            item("Coller", #selector(NSText.paste(_:)), "v"),
            item("Tout sélectionner", #selector(NSText.selectAll(_:)), "a"),
        ])
        menu("Présentation", [
            item("Recharger", #selector(reload), "r", mine: true),
            item("Redémarrer le serveur", #selector(restartServer), "r", [.command, .option], mine: true),
            .separator(),
            item("Taille réelle", #selector(zoomReset), "0", mine: true),
            item("Agrandir", #selector(zoomIn), "+", mine: true),
            item("Réduire", #selector(zoomOut), "-", mine: true),
            .separator(),
            item("Ouvrir dans le navigateur", #selector(openInBrowser), "o", [.command, .shift], mine: true),
            item("Journal du serveur", #selector(openLog), "l", [.command, .shift], mine: true),
            .separator(),
            item("Plein écran", #selector(NSWindow.toggleFullScreen(_:)), "f", [.command, .control]),
        ])
        menu("Aller", [
            item("Films", #selector(goFilms), "1", mine: true),
            item("Bibliothèque", #selector(goLibrary), "2", mine: true),
            item("Mes goûts", #selector(goGouts), "3", mine: true),
            .separator(),
            item("Précédent", #selector(goBack), "[", mine: true),
            item("Suivant", #selector(goForward), "]", mine: true),
        ])
        let windows = menu("Fenêtre", [
            item("Placer dans le Dock", #selector(NSWindow.performMiniaturize(_:)), "m"),
            item("Réduire/agrandir", #selector(NSWindow.performZoom(_:))),
        ])
        NSApp.mainMenu = main
        NSApp.windowsMenu = windows
    }

    @objc func reload() {
        if loaded { web.reload() } else { start() }
    }
    // Charge la dernière version de la Régie : arrête le serveur (après avertissement si Claude travaille) puis le relance ;
    // serve.sh reconstruit l'interface si ses sources ont changé.
    @objc func restartServer() {
        guard !quitting, !restarting else { return }
        guard let pid = serverPID ?? listeningPID().flatMap({ isRegieServer($0) ? $0 : nil }) else { return start() }
        let tree = descendants(of: pid)
        let runs = claudeBusy(in: tree)
        if snapshotPath == nil {
            let a = NSAlert()
            a.alertStyle = runs.isEmpty ? .informational : .warning
            a.messageText = "Redémarrer le serveur de la Régie ?"
            a.informativeText = runs.isEmpty
                ? "La Régie se recharge avec sa dernière version. Une page ouverte dans ton navigateur se reconnecte toute seule au nouveau serveur."
                : "\(runs.joined(separator: "\n"))\n\nRedémarrer arrête Claude. Tu pourras relancer l'action depuis son étape."
            a.addButton(withTitle: "Annuler")
            a.addButton(withTitle: runs.isEmpty ? "Redémarrer" : "Redémarrer et arrêter Claude").hasDestructiveAction = !runs.isEmpty
            guard a.runModal() == .alertSecondButtonReturn else { return }
        }
        rememberRoute()
        restarting = true
        splash("Redémarrage de la Régie…")
        let own = server
        DispatchQueue.global(qos: .userInitiated).async {
            stopServer(pid, tree: tree, own: own)
            DispatchQueue.main.async {
                self.server = nil
                self.serverPID = nil
                self.restarting = false
                self.start()
            }
        }
    }
    @objc func zoomReset() { setZoom(1) }
    @objc func zoomIn() { setZoom(web.pageZoom + 0.1) }
    @objc func zoomOut() { setZoom(web.pageZoom - 0.1) }
    func setZoom(_ z: CGFloat) {
        web.pageZoom = min(2, max(0.5, (z * 10).rounded() / 10))
        UserDefaults.standard.set(Double(web.pageZoom), forKey: "zoom")
    }
    @objc func openInBrowser() { NSWorkspace.shared.open(web.url.flatMap { isApp($0) ? $0 : nil } ?? appURL) }
    @objc func openLog() {
        if FileManager.default.fileExists(atPath: logURL.path) { NSWorkspace.shared.open(logURL); return }
        let a = NSAlert()
        a.messageText = "Pas de journal pour l'instant"
        a.informativeText = "Le serveur a été lancé en dehors de l'app (Régie.command ou un terminal) : son journal est là où il a été lancé."
        a.beginSheetModal(for: window)
    }
    func route(_ hash: String) { if loaded { web.evaluateJavaScript("location.hash = '\(hash)'") } }
    @objc func goFilms() { route("#/") }
    @objc func goLibrary() { route("#/bibliotheque") }
    @objc func goGouts() { route("#/gouts") }
    @objc func goBack() { web.goBack() }
    @objc func goForward() { web.goForward() }
}

MainActor.assumeIsolated {
    let app = NSApplication.shared
    let delegate = AppDelegate()
    app.delegate = delegate
    app.setActivationPolicy(.regular)
    app.run()
}
