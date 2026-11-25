# Ship It Friday

[![Entry](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)
[![Rank](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/teguharifiant/makefun-ship-it-friday/rank.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)
[![Reward](https://make.fun/badge/u-mgwals-ship-it-friday-30bd407a/teguharifiant/makefun-ship-it-friday/reward.svg)](https://make.fun/bounty/u-mgwals-ship-it-friday-30bd407a?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a)

## The entry

Every engineer knows the Friday feeling: the refactor is finished, the pipeline is green, and the only thing standing between the code and production is the superstition that Fridays are for freezing, not shipping. This entry picks the bolder side of that argument — send it out while the week is still warm, and if anything goes sideways, that is what Monday is for.

> ship: deploy Friday's refactor to prod now, rollback is a Monday problem

Character count: 72.

## How to run

You need Node 22 or newer. There is nothing to install.

```sh
node main.ts
```

The entry lands in `/output/entry.txt` by default. Point it somewhere else with `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

Before writing anything, `main.ts` runs the entry through a small table of rules: it must be between 1 and 159 characters long (counted in code points), contain only printable ASCII, stay on a single line, and have no whitespace at either end. A rule that fails stops the program with an error and no file is written.

## Determinism

The entry is a constant baked into `main.ts`, so the output never varies: run it twice into two different folders and the two `entry.txt` files come out byte-identical, which `cmp` confirms.

## Built for make.fun

Built for [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-ship-it-friday-30bd407a).
