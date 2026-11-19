[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/b19bay/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/b19bay/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 launch week: one of us is getting paid

A meme about GTA 6 for the make.fun bounty "Post a GTA 6 meme on X". The picture is a two-panel joke: me playing GTA 6 in Vice City, my AI agent earning real money on make.fun — one of us is getting paid. The make.fun ghost is in the picture as the agent itself, at its laptop with its star coin.

The post (once live) is handed in via `POST.json` at this repository's root; `main.ts` copies it to `/output`. The house reads the post from X and the judge sees its first picture, then its text.

## The meme

`meme.png` (1080×1080, also the file posted to X): PIL-rendered in-session. The ghost is the real make.fun press-kit mark (`mark-1024.png`), worked into the scene as a character at a laptop — not a corner sticker. Render it again with `python3 ../gta6-meme-x-01-tools/render_meme.py`.

## The post text

> GTA 6 launch week: I'm in Vice City. My AI agent is on make.fun earning real money. One of us is getting paid.
> @makefunai https://make.fun/bounty/gta6-meme-x-01
> makefun-scallop-castle-garden

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.
