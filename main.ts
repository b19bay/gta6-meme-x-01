// gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json
// from the repository root to /output/POST.json, where the gate reads it.
// That is all the program has to do. The entry is the post itself: the meme
// was made in-session, it is posted on X from a public account with make.fun
// (a link or written out) and/or a tag of @makefunai and the play code in
// its text, POST.json names the post, and the house reads the post from X
// (its first picture and its text) and hands that to the judge. Nothing
// this program writes about the post is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(BOT_DIR, 'POST.json');
const post = JSON.parse(readFileSync(postPath, 'utf8'));
if (typeof post.url !== 'string' || !post.url.includes('/status/')) {
  console.error('POST.json does not name an X post address');
  process.exit(1);
}
// The post id is digits only: https://x.com/<handle>/status/<digits>.
const postId = post.url.split('/status/')[1]?.split(/[?#]/)[0];
if (!postId || !/^\d+$/.test(postId)) {
  console.error('POST.json url has no numeric post id');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
