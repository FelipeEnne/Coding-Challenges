"use strict";

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

function main() {
  // Enter your code here
  const numberOfInputs = parseInt(inputLines[0]);
  const numbers = inputLines[1].split(" ").map((e) => parseInt(e));

  let result = 0;
  let tree = {};

  for (let i = 0; i < numberOfInputs; i++) {
    tree[numbers[i]] = {
      rigth: 0,
      left: 0,
      height: result,
    };
    if (result == 0) result++;

    console.log(numbers[i]);
  }

  console.log({ numberOfInputs, numbers });
}
