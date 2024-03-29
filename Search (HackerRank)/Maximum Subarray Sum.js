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
 * Complete the 'maximumSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. LONG_INTEGER_ARRAY a
 *  2. LONG_INTEGER m
 */

function maximumSum(data, modulo) {

    var sums = [[-1, 0]];
    var maxSum = 0;
    
    for (var i=0; i<data.length; i++) {
        sums.push([i, (sums[i][1] + data[i]) % modulo]);
        maxSum = Math.max(sums[sums.length-1][1], maxSum);
    }
    
    sums.sort(function(a,b){return a[1]-b[1];});
    
    for (var i=1; i<sums.length; i++) {
        var origIndex = sums[i][0],
            curSum = sums[i][1];

        var j = i+1;
        while (j<sums.length && (sums[j][0] >= origIndex || sums[j][1] == curSum)) {
            j++;
        }

        if (j<sums.length) {
            maxSum = Math.max(curSum - sums[j][1] + modulo, maxSum);
        }
    }
    return maxSum;
    
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const m = parseInt(firstMultipleInput[1], 10);

        const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

        const result = maximumSum(a, m);

        ws.write(result + '\n');
    }

    ws.end();
}
