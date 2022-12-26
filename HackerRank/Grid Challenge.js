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
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
  const gridSort = grid.map((g) => g.split("").sort());
  let gridTranspose = JSON.parse(JSON.stringify(gridSort));
  // console.log(gridSort[0].length)
  for (let i = 0; i < gridSort.length; i++) {
    for (let j = 0; j < gridSort.length; j++) {
      gridTranspose[i][j] = gridSort[j][i];
    }
  }

  let gridTransposeSort = JSON.parse(JSON.stringify(gridTranspose)).map((g) =>
    g.sort()
  );

  for (let i = 0; i < gridSort.length; i++) {
    for (let j = 0; j < gridSort[i].length; j++) {
      if (gridTranspose[i][j] != gridTransposeSort[i][j]) return "NO";
    }
  }
  // console.log(gridSort)
  // console.log(gridTranspose)
  return "YES";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine().trim(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
      const gridItem = readLine();
      grid.push(gridItem);
    }

    const result = gridChallenge(grid);

    ws.write(result + "\n");
  }

  ws.end();
}
