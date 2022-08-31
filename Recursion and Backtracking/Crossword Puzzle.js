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
 * Complete the 'crosswordPuzzle' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY crossword
 *  2. STRING words
 */

function crosswordPuzzle(crossword, words) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let crossword = [];

    for (let i = 0; i < 10; i++) {
        const crosswordItem = readLine();
        crossword.push(crosswordItem);
    }

    const words = readLine();

    const result = crosswordPuzzle(crossword, words);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
