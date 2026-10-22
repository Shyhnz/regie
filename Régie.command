#!/bin/zsh
# Double-clic : lance la Régie et l'ouvre dans le navigateur.
cd "${0:A:h}"
URL="http://localhost:4317"
if curl -s -o /dev/null "$URL/api/meta"; then
  open "$URL"
  exit 0
fi
[ -d node_modules ] || npm install
npx vite build > /dev/null || exit 1
( sleep 1.5; open "$URL" ) &
exec node server/index.js
