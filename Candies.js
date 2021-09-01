'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'candies' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function candies(n, arr) {

  let a = 1;
  let c = [a];
  
  let a1 = 1;
  let c1 = [a1];
  
  let cost = 0
  
  for (let i = 0; i + 1 < arr.length; i++) {
    if (arr[i + 1] > arr[i]) {
      a++
    } else {
      a = 1
    }
    c.push(a)
  }
  
  for (let i = arr.length - 1; i >= 0; i--) {
    if (a1 > c[i]) {
      c.splice(i, 1, a1)
    }
    if (arr[i] < arr[i - 1]) {
      a1++
    } else {
      a1 = 1
    }
  }
  
  // console.log(c)
  return c.reduce((ac, n) => ac + n)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const result = candies(n, arr);

    ws.write(result + '\n');

    ws.end();
}
