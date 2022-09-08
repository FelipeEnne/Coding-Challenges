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
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
  // Write your code here
  let number = n.toString();

  let first = true;
  let resp = 0;
  const getSuperDigit = (number) => {
    let sum = number.split("").reduce((acc, cur) => {
      return acc + parseInt(cur);
    }, 0);

    if (first) {
      sum = sum * k;
      first = false;
    }

    const sumToSring = sum.toString();
    if (sumToSring.length != 1) getSuperDigit(sumToSring);
    else resp = sum;
  };

  getSuperDigit(number);
  return resp;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const n = firstMultipleInput[0];

  const k = parseInt(firstMultipleInput[1], 10);

  const result = superDigit(n, k);

  ws.write(result + "\n");

  ws.end();
}
