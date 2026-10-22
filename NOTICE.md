# Notice

Régie is released under the [MIT license](LICENSE), copyright 2026 NUOPS. The license covers the code and everything we wrote: the Bible's chapters, method, shot recipes, style guides, tools, video analyses, the open-source rules as we rephrased them, and the studio template.

## What Régie links to but does not include

Régie's library is built on other people's public work. We studied it, wrote our own analysis, and link back to every source. We do not copy their files into this repository.

- **prompt-motion.com.** The 233 reference videos were made with Claude by their authors and published on [prompt-motion.com](https://prompt-motion.com), each with its prompt. The Bible analyses them in our own words. In the app, each video and each illustrated passage plays from its original address on prompt-motion.com, and each fiche links to its page. The videos, their frames and their prompts belong to their authors.
- **Open-source video skills.** The rules under `bible/awesome-video-skills/` come from the 199 repositories listed by [awesome-claude-video-skills](https://github.com/zhuyansen/awesome-claude-video-skills). Each rule is a short rephrasing in French with a link to the exact file it comes from. Prompts are indexed by title, summary and link only: read them at their source, under each repository's own license.
- **Method sources.** The method cites articles and a prompt pack by @flxrnc, @0xwhrrari and @beamnxw (marked F, W, B and P in the text). We quote short passages only.

## Tools Régie works with

None of these are bundled in the installer except the npm packages.

- [Claude Code](https://docs.claude.com/en/docs/claude-code/overview) by Anthropic, which does the work. It runs on your own Claude account.
- [HyperFrames](https://www.npmjs.com/package/hyperframes), the renderer used by the studio (run with `npx`).
- [ffmpeg](https://ffmpeg.org) for probing, contact sheets and encoding.
- [Blender](https://www.blender.org) (GPL), optional, for heavy 3D shots.
- npm packages: Express, ws, node-pty, marked (server); React, xterm.js, DOMPurify, Vite (interface). Each keeps its own license, listed in `package-lock.json`.

NUOPS, Claude, Anthropic, Blender and other names are trademarks of their owners.
