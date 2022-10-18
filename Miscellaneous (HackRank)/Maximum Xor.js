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
  // solve here
  let res = [];
  let max = 0;
  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let Xor = queries[i] ^ arr[j];
      //console.log(queries[i], arr[j], queries[i]^arr[j])
      if (Xor > max) {
        max = Xor;
      }
    }
    res.push(max);
    max = 0;
  }
  return res;
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
