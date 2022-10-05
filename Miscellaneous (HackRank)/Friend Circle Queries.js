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

// Complete the maxCircle function below.
function maxCircle(queries) {
  let resp = [2];
  let arr = queries[0];

  for (let x = 1; queries.length > x; x++) {
    if (arr.indexOf(queries[x][0]) > -1) {
      arr.push(queries[x][1]);
    } else if (arr.indexOf(queries[x][1]) > -1) {
      arr.push(queries[x][0]);
    } else {
      arr.push(queries[x]);
    }
  }
  console.log(arr);
  return arr[0];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  let queries = Array(q);

  for (let i = 0; i < q; i++) {
    queries[i] = readLine()
      .split(" ")
      .map((queriesTemp) => parseInt(queriesTemp, 10));
  }

  const ans = maxCircle(queries);

  ws.write(ans.join("\n") + "\n");

  ws.end();
}
