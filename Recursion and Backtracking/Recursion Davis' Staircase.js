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
 * Complete the 'stepPerms' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function stepPerms(n) {
  // Write your code here
  console.log(n);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = parseInt(readLine().trim(), 10);

  for (let sItr = 0; sItr < s; sItr++) {
    const n = parseInt(readLine().trim(), 10);

    const res = stepPerms(n);

    ws.write(res + "\n");
  }

  ws.end();
}
