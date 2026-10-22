# Contributing

Thanks for wanting to help. Régie is a small project, so keep changes focused.

- **Bugs and ideas:** open an issue with what you did, what you expected and what happened. Add a screenshot if it is about the interface.
- **Pull requests:** one topic per pull request. Run `npm test` before you send it, and describe what you checked by hand.
- **Style:** the code, the prompts sent to Claude and the Bible are written in French. Every text shown in the interface goes through `t('…')` (web) or `tr('…')` (server) with its English line in `web/src/i18n/en.js` or `server/i18n-en.js`; `npm test` checks none is missing. Match the tone and the comment density of the file you touch.
- **The Bible:** corrections are welcome. New rules need a source link, and must be your own words: never paste someone else's prompt or video into the repository. Link to it.
- **Security:** if you find a way for a web page or a film folder to make Régie run commands it should not, do not open a public issue. Write to the maintainer through GitHub first.
