'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countInversions function below.
function countInversions(arr) {
   let result = 0;
   
   for(let i = 0; arr.length-1 > i; i++) {
        let m1 = i;
        let m2 = i+1;
        while(arr[m1] > arr[m2]) {
           //console.log({q:1,arr, arr1: arr[m1], arr2: arr[m1+1], m1,m2})
           let temp = arr[m1];
           arr[m1] = arr[m2];
           arr[m2] = temp;
           result ++;
           m1 --;
           m2 --;
           //console.log({q:2,arr})
       }
   }
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = countInversions(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
