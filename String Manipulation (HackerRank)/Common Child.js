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

function commonChild(s1, s2) {
    let arr = [Array(s2.length + 1).fill(0)];
    [...s1].forEach((v1, i) => {
        arr[i + 1] = [0];
        [...s2].forEach((v2, j) => {
            arr[i + 1][j + 1] = v1 === v2 ?
                arr[i][j] + 1 : Math.max(arr[i + 1][j], arr[i][j + 1]);
        });
    });
    return arr[s2.length][s1.length];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    const result = commonChild(s1, s2);

    ws.write(result + '\n');

    ws.end();
}
