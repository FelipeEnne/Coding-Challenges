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
 * Complete the 'maxRegion' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY grid as parameter.
 */

function maxRegion(grid) {
  // Write your code here
  let max = 0;

  const memo = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; i++) {
      if(grid[i][j] > 0){
        const size = explore(grid, i, j, memo);
        if(size > max) max = size;
      }
    }
  }

 return max;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const m = parseInt(readLine().trim(), 10);

  let grid = Array(n);

  for (let i = 0; i < n; i++) {
    grid[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((gridTemp) => parseInt(gridTemp, 10));
  }

  const res = maxRegion(grid);

  ws.write(res + "\n");

  ws.end();
}
