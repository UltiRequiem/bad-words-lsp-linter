const fs = require("node:fs");
const path = require("node:path");

function getBadWords() {
  const file = path.resolve(`${__dirname}/ListOfBadWords.txt`);
  return fs.readFileSync(file, { encoding: "utf8" }).split("\n");
}

const badWords = getBadWords();

module.exports = badWords;
