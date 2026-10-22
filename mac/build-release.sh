#!/bin/zsh
# Construit la Régie publiée : un Régie.app autonome (serveur, interface, Bible et studio de base rangés dans le paquet,
# Apple silicon et Intel) et son installeur .dmg. À lancer depuis le dépôt public (dossiers bible/ et studio/ présents).
# Usage : mac/build-release.sh [dossier de sortie, par défaut release/]
set -euo pipefail
here="${0:A:h}"
repo="${here:h}"
out="${1:-$repo/release}"
version=$(node -p "require('$repo/package.json').version")
[[ -d "$repo/bible" && -d "$repo/studio" ]] || { echo "bible/ ou studio/ manquant : lance ce script depuis le dépôt public." >&2; exit 1; }

work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
bundle="$work/Régie.app"
res="$bundle/Contents/Resources/regie"
mkdir -p "$bundle/Contents/MacOS" "$res" "$work/Regie.iconset"

echo "Interface…"
(cd "$repo" && npm ci --no-audit --no-fund > /dev/null && npx vite build > /dev/null)

echo "Serveur et Bible…"
for item in server dist bible studio templates package.json package-lock.json LICENSE; do cp -R "$repo/$item" "$res/"; done
mkdir -p "$res/mac" && cp "$here/serve.sh" "$res/mac/" && chmod +x "$res/mac/serve.sh"
(cd "$res" && npm ci --omit=dev --no-audit --no-fund > /dev/null)
# node-pty : seulement ses binaires précompilés macOS (les deux processeurs), exécutables d'avance.
pty="$res/node_modules/node-pty"
rm -rf "$pty/build" "$pty/prebuilds/win32-"* "$pty/deps" "$pty/src" "$pty/third_party"
chmod 755 "$pty"/prebuilds/darwin-*/spawn-helper

echo "App (arm64 + x86_64)…"
for arch in arm64 x86_64; do
  xcrun swiftc -O -swift-version 5 -target "$arch-apple-macos13.0" "$here/RegieApp.swift" -o "$work/Regie-$arch"
done
lipo -create "$work/Regie-arm64" "$work/Regie-x86_64" -output "$bundle/Contents/MacOS/Regie"

xcrun swift "$here/icon.swift" "$work/icon.png"
for s in 16 32 128 256 512; do
  sips -z $s $s "$work/icon.png" --out "$work/Regie.iconset/icon_${s}x${s}.png" > /dev/null
  sips -z $((s * 2)) $((s * 2)) "$work/icon.png" --out "$work/Regie.iconset/icon_${s}x${s}@2x.png" > /dev/null
done
iconutil -c icns "$work/Regie.iconset" -o "$bundle/Contents/Resources/Regie.icns"

# Paquet publié : aucun dossier de travail codé en dur, identifiant propre, numéro de version du package.json.
sed -e "s|__REGIE_DIR__||" -e "s|local.exploration.regie|com.nuops.regie|" \
    -e "s|<string>1.0</string>|<string>$version</string>|" "$here/Info.plist" > "$bundle/Contents/Info.plist"
codesign --force --deep --sign - "$bundle"

echo "Image disque…"
mkdir -p "$out" "$work/dmg"
ditto "$bundle" "$work/dmg/Régie.app"
ln -s /Applications "$work/dmg/Applications"
dmg="$out/Regie_${version}_universal.dmg"
rm -f "$dmg"
hdiutil create -volname "Régie $version" -srcfolder "$work/dmg" -fs HFS+ -format UDZO -ov "$dmg" > /dev/null
ditto "$bundle" "$out/Régie.app"
echo "Prêt : $dmg ($(du -h "$dmg" | cut -f1))"
