"use strict";

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'balancedForest' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY c
 *  2. 2D_INTEGER_ARRAY edges
 */

function balancedForest(c: number[], edges: number[][]): number {
  // Write your code here

  console.log({ c, edges });

  return 1;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const q: number = parseInt(readLine().trim(), 10);

  for (let qItr: number = 0; qItr < q; qItr++) {
    const n: number = parseInt(readLine().trim(), 10);

    const c: number[] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((cTemp) => parseInt(cTemp, 10));

    let edges: number[][] = Array(n - 1);

    for (let i: number = 0; i < n - 1; i++) {
      edges[i] = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map((edgesTemp) => parseInt(edgesTemp, 10));
    }

    const result: number = balancedForest(c, edges);

    ws.write(result + "\n");
  }

  ws.end();
}
