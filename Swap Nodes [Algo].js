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
 * Complete the 'swapNodes' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY indexes
 *  2. INTEGER_ARRAY queries
 */

function swapNodes(indexes, queries) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let indexes = Array(n);

    for (let i = 0; i < n; i++) {
        indexes[i] = readLine().replace(/\s+$/g, '').split(' ').map(indexesTemp => parseInt(indexesTemp, 10));
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = parseInt(readLine().trim(), 10);
        queries.push(queriesItem);
    }

    const result = swapNodes(indexes, queries);

    ws.write(result.map(x => x.join(' ')).join('\n') + '\n');

    ws.end();
}
