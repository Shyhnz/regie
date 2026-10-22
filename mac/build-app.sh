#!/bin/zsh
# Construit Régie.app (la Régie dans sa propre fenêtre) dans ~/Applications. « --dock » l'ajoute aussi au Dock.
set -euo pipefail
here="${0:A:h}"
regie="${here:h}"
app="$HOME/Applications/Régie.app"

if pgrep -f "Régie.app/Contents/MacOS/Regie" > /dev/null; then
  echo "Régie.app est ouverte : quitte-la avant de la reconstruire." >&2
  exit 1
fi

work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
bundle="$work/Régie.app"
mkdir -p "$bundle/Contents/MacOS" "$bundle/Contents/Resources" "$work/Regie.iconset"

xcrun swiftc -O -swift-version 5 -target arm64-apple-macos13.0 "$here/RegieApp.swift" -o "$bundle/Contents/MacOS/Regie"

xcrun swift "$here/icon.swift" "$work/icon.png"
for s in 16 32 128 256 512; do
  sips -z $s $s "$work/icon.png" --out "$work/Regie.iconset/icon_${s}x${s}.png" > /dev/null
  sips -z $((s * 2)) $((s * 2)) "$work/icon.png" --out "$work/Regie.iconset/icon_${s}x${s}@2x.png" > /dev/null
done
iconutil -c icns "$work/Regie.iconset" -o "$bundle/Contents/Resources/Regie.icns"

sed "s|__REGIE_DIR__|$regie|" "$here/Info.plist" > "$bundle/Contents/Info.plist"
chmod +x "$here/serve.sh"
codesign --force --sign - "$bundle"

mkdir -p "$HOME/Applications"
rm -rf "$app"
mv "$bundle" "$app"
echo "Installée : $app"

if [[ "${1:-}" == "--dock" ]]; then
  # Le paquet vient d'être remplacé : on remet une tuile neuve à la place de l'ancienne (une seule, même position).
  # Le Dock réécrit le « é » en forme décomposée (Re%CC%81gie) : on reconnaît les deux écritures.
  /usr/bin/python3 - "$app" <<'PY'
import plistlib, re, subprocess, sys
from urllib.parse import quote
app = sys.argv[1]
dock = plistlib.loads(subprocess.run(['defaults', 'export', 'com.apple.dock', '-'], capture_output=True, check=True).stdout)
apps = dock.get('persistent-apps', [])
is_regie = lambda t: re.search(r'R(%C3%A9|e%CC%81)gie\.app', t.get('tile-data', {}).get('file-data', {}).get('_CFURLString', ''))
found = [i for i, t in enumerate(apps) if is_regie(t)]
tile = {'tile-type': 'file-tile', 'tile-data': {'file-label': 'Régie', 'bundle-identifier': 'local.exploration.regie',
        'file-data': {'_CFURLString': 'file://' + quote(app) + '/', '_CFURLStringType': 15}}}
apps = [t for t in apps if not is_regie(t)]
apps.insert(found[0] if found else len(apps), tile)
dock['persistent-apps'] = apps
subprocess.run(['defaults', 'import', 'com.apple.dock', '-'], input=plistlib.dumps(dock), check=True)
print('Tuile du Dock remise à neuf.' if found else 'Ajoutée au Dock.')
PY
  killall Dock
fi
