"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the maxXor function below.
function maxXor(arr, queries) {
  let res = [];
  let max = 0;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const m = parseInt(readLine(), 10);

  let queries = [];

  for (let i = 0; i < m; i++) {
    const queriesItem = parseInt(readLine(), 10);
    queries.push(queriesItem);
  }

  const result = maxXor(arr, queries);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
