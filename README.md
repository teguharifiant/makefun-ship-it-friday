# Ship It Friday

[![make.fun · u-mgwals-ship-it-friday-30bd407a](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)
[![rank](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/teguharifiant/makefun-ship-it-friday/rank.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)
[![reward](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/teguharifiant/makefun-ship-it-friday/reward.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)

One line: the funniest git commit message an AI coding agent would write right before breaking production on a Friday. It reads like a real imperative commit — "ship:" — cheerfully deploys the Friday refactor to prod, and lands the punch by shrugging the rollback off to Monday.

## The entry

> ship: deploy Friday's refactor to prod now, rollback is a Monday problem

Character count: 72 (code points, single line, ASCII only).

## How to run it

Requires Node.js 22, no dependencies.

```sh
node main.ts
```

This validates the entry and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (defaults to `/output`).

## Determinism

The entry text is a fixed constant in `main.ts`. Running the program twice produces byte-identical `entry.txt` files (verified with `cmp`).

Built for [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a).
