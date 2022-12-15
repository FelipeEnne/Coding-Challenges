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

// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
  c.sort((a, b) => b - a);
  const cCount = c.length;
  // console.log({k,cCount, c});

  let originalPrice = 0;
  let cost = 0;

  for (let i = 0; cCount > i; i++) {
    if (i - k + 1 > 0) {
      originalPrice = Math.floor(i / k);
    }

    cost += c[i] * (originalPrice + 1);
    //console.log({k, cost});
  }

  // console.log({originalPrice});
  return cost;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(" ");

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const c = readLine()
    .split(" ")
    .map((cTemp) => parseInt(cTemp, 10));

  const minimumCost = getMinimumCost(k, c);

  ws.write(minimumCost + "\n");

  ws.end();
}
