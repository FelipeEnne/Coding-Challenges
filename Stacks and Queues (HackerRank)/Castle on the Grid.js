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
    
    
    const markCellAsVisited = (x, y, moves, parent) => {
        const cellKey = `${x}_${y}`
        if (grid[x][y] === 'X' || visited[cellKey]) return null
        visited[cellKey] = true
        const newCell = {
            position: { x, y },
            moves,
            parent
        }
        queue.push(newCell)
        return newCell
    }
    
    while (queue.length > 0) {
        const currentCell = queue.shift()
        if (
            currentCell.position.x === goalX &&
            currentCell.position.y === goalY
        ) {
            return currentCell.moves
        }
        const { position } = currentCell
        const moves = currentCell.moves + 1
        // LEFT
        for (let y = position.y - 1; y >= 0; y--) {
            if (!markCellAsVisited(position.x, y, moves, currentCell)) break
        }
        // TOP
        for (let x = position.x - 1; x >= 0; x--) {
            if (!markCellAsVisited(x, position.y, moves, currentCell)) break
        }
        // RIGHT
        for (let y = position.y + 1; y < grid.length; y++) {
            if (!markCellAsVisited(position.x, y, moves, currentCell)) break
        }
        // BOTTOM
        for (let x = position.x + 1; x < grid.length; x++) {
            if (!markCellAsVisited(x, position.y, moves, currentCell)) break
        }
    }
    return 0
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
