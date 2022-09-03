"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'crosswordPuzzle' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY crossword
 *  2. STRING words
 */

function crosswordPuzzle(crossword, hints) {
  const blankWords = findBlankWords(crossword);
  console.log(blankWords);
}

const getKey = (i, j) => `${i}_${j}`;

function findBlankWords(crossword) {
  const words = [];
  const visited = {};
  for (let i = 0; i < crossword.length; i++) {
    const row = crossword[i];
    for (let j = 0; j < row.length; j++) {
      const char = row[j];
      const key = getKey(i, j);
      if (char !== "-") continue;
      // DOWN
      if (
        crossword[i + 1] &&
        crossword[i + 1][j] === "-" &&
        !visited["DOWN_" + key]
      ) {
        const word = [];
        for (let c = i; c < crossword.length; c++) {
          if (crossword[c][j] !== "-") break;
          const cKey = getKey(c, j);
          visited["DOWN_" + cKey] = true;
          word.push(cKey);
        }
        words.push(word);
      }
      // RIGHT
      if (row[j + 1] === "-" && !visited["RIGHT_" + key]) {
        const word = [];
        for (let c = j; c < row.length; c++) {
          if (row[c] !== "-") break;
          const cKey = getKey(i, c);
          visited["RIGHT_" + cKey] = true;
          word.push(cKey);
        }
        words.push(word);
      }
    }
  }
  return words;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let crossword = [];

  for (let i = 0; i < 10; i++) {
    const crosswordItem = readLine();
    crossword.push(crosswordItem);
  }

  const words = readLine();

  const result = crosswordPuzzle(crossword, words);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
