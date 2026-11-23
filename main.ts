import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "He invented time travel. Arrived late.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
