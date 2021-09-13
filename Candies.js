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
 * Complete the 'decibinaryNumbers' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER x as parameter.
 */
const N = 285133;
const D = 20;

function createDuplicateArr(N, D) {
    let duplicates = new Array(N);
    for(let i=0; i<N; i++) {
        duplicates[i] = new Array(D);
    }
    for(let i=0; i<N; i++) {
        duplicates[i][0] = i < 10 ? 1 : 0
    }
    for(let i=0; i<N; i++) {
        for(let j=1; j<D; j++) {
            duplicates[i][j] = duplicates[i][j-1];
            let m = 1 << j;
            for(let k=1; k<=9; k++) {
                let remN = i - k*m;
                if(remN >= 0) {
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
    for(let i=1; i<duplicates.length; i++) {
        lessThanCounts[i] = lessThanCounts[i - 1] + BigInt(duplicates[i - 1][D - 1]);
    }
    return lessThanCounts;
}

function lowerBoundBig(arr, val) {
    let l = 0;
    let h = arr.length;
    while(l < h) {
        let mid = Math.floor((l + h) / 2);
        if(BigInt(arr[mid]) < BigInt(val)) {
            l = mid + 1;
        } else {
            h = mid;
        }
    }
    return l;
}

function lowerBound(arr, val) {
    let l = 0;
    let h = arr.length;
    while(l < h) {
        let mid = Math.floor((l + h) / 2);
        if(val > arr[mid]) {
            l = mid + 1;
        } else {
            h = mid;
        }
    }
    return l;
}

function decibinaryNumbers(x) {


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const x = parseInt(readLine().trim(), 10);

        const result = decibinaryNumbers(x);

        ws.write(result + '\n');
    }

    ws.end();
}
