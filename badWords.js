import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

function getBadWords() {
  const file = resolve(
    `${dirname(fileURLToPath(import.meta.url))}/ListOfBadWords.txt`
  );
  return readFileSync(file, { encoding: "utf8" }).split("\n");
}

const badWords = getBadWords();

export default badWords;
