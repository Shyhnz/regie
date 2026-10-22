// Dessine l'icône de Régie (1024 px) : une frise de plans et sa tête de lecture orange, sur le noir chaud de l'app.
import AppKit

let size: CGFloat = 1024
let out = CommandLine.arguments.count > 1 ? CommandLine.arguments[1] : "icon-1024.png"
let rep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: 1024, pixelsHigh: 1024, bitsPerSample: 8, samplesPerPixel: 4,
                           hasAlpha: true, isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: rep)

func color(_ hex: UInt32, _ alpha: CGFloat = 1) -> NSColor {
    NSColor(srgbRed: CGFloat((hex >> 16) & 0xff) / 255, green: CGFloat((hex >> 8) & 0xff) / 255, blue: CGFloat(hex & 0xff) / 255, alpha: alpha)
}
// Les coordonnées se lisent depuis le haut, comme sur une maquette.
func rect(_ x: CGFloat, _ top: CGFloat, _ w: CGFloat, _ h: CGFloat) -> NSRect { NSRect(x: x, y: size - top - h, width: w, height: h) }

// Tuile aux proportions des icônes macOS (824 px, rayon 185), avec une ombre douce.
let tile = rect(100, 100, 824, 824)
let shape = NSBezierPath(roundedRect: tile, xRadius: 185, yRadius: 185)
NSGraphicsContext.saveGraphicsState()
let shadow = NSShadow()
shadow.shadowColor = color(0x000000, 0.35)
shadow.shadowBlurRadius = 24
shadow.shadowOffset = NSSize(width: 0, height: -10)
shadow.set()
color(0x0F0E0D).setFill()
shape.fill()
NSGraphicsContext.restoreGraphicsState()
NSGradient(starting: color(0x26221F), ending: color(0x0F0E0D))!.draw(in: shape, angle: -90)
let rim = NSBezierPath(roundedRect: tile.insetBy(dx: 2, dy: 2), xRadius: 183, yRadius: 183)
rim.lineWidth = 4
color(0xFFFFFF, 0.07).setStroke()
rim.stroke()

// La frise : trois pistes de plans.
let tracks: [(top: CGFloat, alpha: CGFloat, clips: [(CGFloat, CGFloat)])] = [
    (372, 0.92, [(212, 452), (476, 812)]),
    (477, 0.55, [(212, 332), (356, 640), (664, 812)]),
    (582, 0.30, [(212, 548), (572, 812)]),
]
for track in tracks {
    color(0xEDE8E3, track.alpha).setFill()
    for (x0, x1) in track.clips { NSBezierPath(roundedRect: rect(x0, track.top, x1 - x0, 70), xRadius: 18, yRadius: 18).fill() }
}

// La tête de lecture, détourée de noir pour se détacher des plans.
let x: CGFloat = 590
let head = NSBezierPath()
head.move(to: NSPoint(x: x - 40, y: size - 262))
head.line(to: NSPoint(x: x + 40, y: size - 262))
head.line(to: NSPoint(x: x + 40, y: size - 308))
head.line(to: NSPoint(x: x, y: size - 348))
head.line(to: NSPoint(x: x - 40, y: size - 308))
head.close()
head.lineJoinStyle = .round
let line = NSBezierPath(roundedRect: rect(x - 8, 300, 16, 420), xRadius: 8, yRadius: 8)
color(0x0F0E0D).setStroke()
for p in [line, head] { p.lineWidth = 16; p.stroke() }
color(0xF44800).setFill()
line.fill()
head.fill()

NSGraphicsContext.restoreGraphicsState()
try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: out))
