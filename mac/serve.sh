#!/bin/zsh
# Lancé par Régie.app : reconstruit l'interface si ses sources ont changé, puis garde le serveur au premier plan.
cd "${0:A:h}/.."
# Une app ouverte depuis le Finder n'a pas le PATH du terminal : on reprend celui du shell de connexion (nvm, Homebrew, ~/.local/bin).
login_path=$(/bin/zsh -lic 'print -r -- "$PATH"' 2>/dev/null </dev/null | tail -1)
export PATH="${login_path:+$login_path:}/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:$HOME/.local/bin:$PATH"
if ! command -v node > /dev/null; then
  echo "Node.js est introuvable. Installe Node.js 20 ou plus (https://nodejs.org), puis relance la Régie." >&2
  exit 1
fi
if ! node -e 'process.exit(Number(process.versions.node.split(".")[0]) >= 20 ? 0 : 1)'; then
  echo "Node.js $(node -v) est trop ancien : la Régie demande Node.js 20 ou plus (https://nodejs.org)." >&2
  exit 1
fi
[ -d node_modules ] || npm install || exit 1
# La Régie publiée arrive avec son interface déjà construite (pas de dossier web/).
if [ -d web ] && { [ ! -f dist/index.html ] || [ -n "$(find web vite.config.js -newer dist/index.html -type f -print -quit)" ]; }; then
  echo "Construction de l'interface…"
  npx vite build || exit 1
fi
exec node server/index.js
