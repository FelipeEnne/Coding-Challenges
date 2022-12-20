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
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
  // Write your code here
  let result = 1000000000000;

  const arrSort = arr.sort((a, b) => a - b);

  console.log(arrSort);

  for (let i = 0; arrSort.length - 1 > i; i++) {
    if (Math.abs(arrSort[i] - arrSort[i + 1]) < result)
      result = Math.abs(arrSort[i] - arrSort[i + 1]);
  }

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = minimumAbsoluteDifference(arr);

  ws.write(result + "\n");

  ws.end();
}
