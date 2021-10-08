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

// Complete the solve function below.
function solve(arr) {
    // solve here
    arr.push(0)
    const n = arr.length
    const windowSizes = new Array(arr.length).fill(0)
    const positions = []
    let i = 0
    while (i < n) {
        if (!positions.length || arr[positions[positions.length-1]] <= arr[i]) {
            positions.push(i++)
        } else {
            const top = positions.pop()
            const range = positions.length ? (i - positions[positions.length-1] - 1) : i
            if (range < 1 || range > arr.length || arr[top] === 0) continue
            windowSizes[range-1] = Math.max(windowSizes[range-1], arr[top])
        }
    }
    for (let i = n - 2; i >= 0; i--) {
        windowSizes[i] = Math.max(windowSizes[i], windowSizes[i+1])
    }
    windowSizes.pop()
    return windowSizes
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = solve(arr);

    ws.write(res.join(' ') + '\n');

    ws.end();
}
