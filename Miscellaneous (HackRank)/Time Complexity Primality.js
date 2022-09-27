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
 * Complete the 'primality' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER n as parameter.
 */

function primality(n) {
  console.log(n);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const p = parseInt(readLine().trim(), 10);

  for (let pItr = 0; pItr < p; pItr++) {
    const n = parseInt(readLine().trim(), 10);

    const result = primality(n);

    ws.write(result + "\n");
  }

  ws.end();
}
