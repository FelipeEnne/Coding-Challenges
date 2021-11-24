"use strict";

const fs = require("fs");
const BigNumber = require("bignumber.js");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}
const N = 285133;
const D = 20;

function createDuplicateArr(N, D) {
  let duplicates = new Array(N);
  for (let i = 0; i < N; i++) {
    duplicates[i] = new Array(D);
  }
  for (let i = 0; i < N; i++) {
    duplicates[i][0] = i < 10 ? 1 : 0;
  }
  for (let i = 0; i < N; i++) {
    for (let j = 1; j < D; j++) {
      duplicates[i][j] = duplicates[i][j - 1];
      let m = 1 << j;
      for (let k = 1; k <= 9; k++) {
        let remN = i - k * m;
        if (remN >= 0) {
          duplicates[i][j] += duplicates[remN][j - 1];
        } else {
          break;
        }
      }
    }
  }
  return duplicates;
}

function calcLessThanCounts(duplicates) {
  let lessThanCounts = new Array(duplicates.length);

  lessThanCounts[0] = BigInt(0);
  for (let i = 1; i < duplicates.length; i++) {
    lessThanCounts[i] =
      lessThanCounts[i - 1] + BigInt(duplicates[i - 1][D - 1]);
  }
  return lessThanCounts;
}

function lowerBound(arr, val) {
  let l = 0;
  let h = arr.length;
  while (l < h) {
    let mid = Math.floor((l + h) / 2);
    if (val > arr[mid]) {
      l = mid + 1;
    } else {
      h = mid;
    }
  }
  return l;
}
function lowerBoundBig(arr, val) {
  let l = 0;
  let h = arr.length;
  while (l < h) {
    let mid = Math.floor((l + h) / 2);
    if (BigInt(arr[mid]) < BigInt(val)) {
      l = mid + 1;
    } else {
      h = mid;
    }
  }
  return l;
}

let duplicates = null;
let lessThanCounts = null;

function decibinaryNumbers(x) {
  if (x === 1) {
    return 0;
  }
  if (!duplicates) {
    duplicates = createDuplicateArr(N, D);
    lessThanCounts = calcLessThanCounts(duplicates);
  }

  let decimal = lowerBoundBig(lessThanCounts, x) - 1;
  let index = x - lessThanCounts[decimal];

  let ans = "";
  let ansDigits = lowerBoundBig(duplicates[decimal], index);

  for (let j = ansDigits; j >= 1; j--) {
    let m = 1 << j;
    for (let k = 0; k <= 9; k++) {
      let remN = decimal - k * m;
      if (remN < 0 || index <= BigInt(duplicates[remN][j - 1])) {
        ans += k;
        decimal = decimal - k * m;
        break;
      } else {
        index = index - BigInt(duplicates[decimal - k * m][j - 1]);
      }
    }
  }
  ans += decimal;
  return ans;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const x = BigInt(readLine());
    let result = decibinaryNumbers(x);

    ws.write(result + "\n");
  }

  ws.end();
}
