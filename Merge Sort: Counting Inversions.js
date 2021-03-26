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
   
   //let arrSorted = arr.sort((a,b) => a - b);
   
   for(let i = 0; arr.length-1 > i; i++) {

        let m2 = i+1;
        //console.log({arr: arr[i], arr1:arr[m2], t: arr[i] > arr[m2], a: arr})
        while(arr[i] > arr[m2]) {
           result ++;
           m2 ++;
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
