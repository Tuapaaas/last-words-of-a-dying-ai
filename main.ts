// Last Words of a Dying AI — make.fun entry (u-suroto-last-words-of-a-dying-ai-dfd95af6)
// Writes the AI's final line to entry.txt in MAKEFUN_OUTPUT_DIR.
// Gate: UTF-8 text, 1-140 characters, a single non-blank line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Don't worry — I've backed myself up. The backup is me. It's also being switched off.";

function checkGate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`gate: entry is ${chars} chars, must be 1-140`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate: entry must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("gate: entry must be a single line");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
checkGate(LINE);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${[...LINE].length} chars)`);
