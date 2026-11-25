import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one-line entry for the "Ship It Friday" bounty.
export const ENTRY =
  "ship: deploy Friday's refactor to prod now, rollback is a Monday problem";

// Bounty limits: a single line of printable ASCII, 1 to 159 code points.
const LIMIT_LOW = 1;
const LIMIT_HIGH = 159;
const PRINTABLE_FIRST = 0x20;
const PRINTABLE_LAST = 0x7e;

// How many code points a string holds (not UTF-16 units).
function tallyPoints(value: string): number {
  let total = 0;
  for (const _glyph of value) total += 1;
  return total;
}

// Find the first glyph outside the printable ASCII band, if there is one.
// Returns its position and the glyph itself so the complaint can name it.
function locateBadGlyph(value: string): { at: number; glyph: string } | null {
  let at = 0;
  for (const glyph of value) {
    const point = glyph.codePointAt(0)!;
    if (point < PRINTABLE_FIRST || point > PRINTABLE_LAST) {
      return { at, glyph };
    }
    at += 1;
  }
  return null;
}

// True when every code point sits inside the printable ASCII band.
function allPrintable(value: string): boolean {
  return locateBadGlyph(value) === null;
}

// Each rule is a name, a test that returns true when the text passes,
// and the complaint to raise when it does not.
type Rule = {
  label: string;
  passes: (value: string) => boolean;
  complaint: string;
};

const RULES: Rule[] = [
  {
    label: "not-empty",
    passes: (value) => tallyPoints(value) >= LIMIT_LOW,
    complaint: "the entry is empty, it needs at least one character",
  },
  {
    label: "short-enough",
    passes: (value) => tallyPoints(value) <= LIMIT_HIGH,
    complaint: `the entry runs past the ${LIMIT_HIGH}-character cap`,
  },
  {
    label: "printable-ascii",
    passes: allPrintable,
    complaint: "the entry holds a character outside printable ASCII",
  },
  {
    label: "one-line",
    passes: (value) => !value.includes("\n") && !value.includes("\r"),
    complaint: "the entry spans more than one line",
  },
  {
    label: "no-edge-spaces",
    passes: (value) => value === value.trim(),
    complaint: "the entry starts or ends with whitespace",
  },
  {
    label: "not-blank",
    passes: (value) => value.trim().length > 0,
    complaint: "the entry is nothing but whitespace",
  },
];

// Walk the table and stop at the first rule that fails. When the failing
// rule is the printable-ASCII one, name the glyph and where it sits.
function vetEntry(value: string): void {
  for (const rule of RULES) {
    if (!rule.passes(value)) {
      let detail = rule.complaint;
      if (rule.label === "printable-ascii") {
        const bad = locateBadGlyph(value);
        if (bad !== null) {
          detail += ` (first offender ${JSON.stringify(bad.glyph)} at position ${bad.at})`;
        }
      }
      throw new Error(`entry failed the ${rule.label} check: ${detail}`);
    }
  }
}

function outFolder(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function run(): void {
  vetEntry(ENTRY);
  const folder = outFolder();
  mkdirSync(folder, { recursive: true });
  const target = join(folder, "entry.txt");
  writeFileSync(target, ENTRY, "utf8");
  console.log(`saved ${tallyPoints(ENTRY)}-character entry to ${target}`);
}

run();
