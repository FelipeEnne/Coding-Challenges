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
    let count = 0;
    
    function swap(arr1, arr2) {
        let i = 0;
        let j = 0;
        let mergedArr = [];
        let remainder;
        while (i !== arr1.length && j !== arr2.length) {
            if (arr1[i] < arr2[j] || arr1[i] === arr2[j]) {
                mergedArr.push(arr1[i]);
                i++;
            } else {
                mergedArr.push(arr2[j]);
                count += (arr1.length - i);
                j++;
            }
        }
        remainder = i >= j ? arr2.slice(j) : arr1.slice(i);
        return mergedArr.concat(remainder);
    }

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        let middle = Math.floor(arr.length / 2);

        let left = mergeSort(arr.slice(0, middle))
        let right = mergeSort(arr.slice(middle, arr.length))

        return swap(left, right);
    }
    
    mergeSort(arr);
    
    return count;
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
