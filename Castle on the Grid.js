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
 * Complete the 'minimumMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY grid
 *  2. INTEGER startX
 *  3. INTEGER startY
 *  4. INTEGER goalX
 *  5. INTEGER goalY
 */

function minimumMoves(grid, startX, startY, goalX, goalY) {
    if (grid[startX][startY] === 'X' || grid[goalX][goalY] === 'X') return 0;
    
    const queue = [];
    
    const startCell = {
        position: { x: startX, y: startY },
        moves: 0
    };
   
   queue.push(startCell)
    // HASH MAP X_Y
    const visited = {}
    visited[`${startX}_${startY}`] = true
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const startX = parseInt(firstMultipleInput[0], 10);

    const startY = parseInt(firstMultipleInput[1], 10);

    const goalX = parseInt(firstMultipleInput[2], 10);

    const goalY = parseInt(firstMultipleInput[3], 10);

    const result = minimumMoves(grid, startX, startY, goalX, goalY);

    ws.write(result + '\n');

    ws.end();
}
