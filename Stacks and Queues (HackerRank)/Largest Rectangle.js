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
 * Complete the 'largestRectangle' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY h as parameter.
 */

function largestRectangle(h) {
    const heights = [...h, 0]
    let area = 0
    let i = 0
    let positions = []
    
    while (i < heights.length) {
        if (!positions.length || heights[positions[positions.length-1]] <= heights[i]) {
            positions.push(i++)
        } else {
            const top = positions.pop()
            const lastPosition = positions[positions.length-1]
            const buildingHeight = heights[top]
            const numberOfBuildings = positions.length ? (i - lastPosition - 1) : i
            area = Math.max(area, buildingHeight * numberOfBuildings)
        }
    }
    return area
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const result = largestRectangle(h);

    ws.write(result + '\n');

    ws.end();
}
