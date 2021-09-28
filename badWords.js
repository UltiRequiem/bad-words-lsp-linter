const fs = require("node:fs");

function getBadWords() {
  return fs
    .readFileSync(`${__dirname}/ListOfBadWords.txt`, { encoding: "utf8" })
    .split("\n");
}

const badWords = getBadWords();

module.exports = badWords;
