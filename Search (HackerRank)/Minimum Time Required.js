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

// Complete the minTime function below.
function minTime(machines, goal) {
    
    let faster = Math.min(...machines)
    let slower = Math.max(...machines)

    let lowerBound = Math.ceil((goal / machines.length) * faster)
    let upperBound = Math.ceil((goal / machines.length) * slower)

    
    while(lowerBound < upperBound){
        
        let day = Math.floor((upperBound + lowerBound) / 2)
        let sum = machines.reduce((xs, x) => xs + Math.floor(day / x), 0)
        
        if (sum < goal) {
            lowerBound = day+1
        } else if (sum >= goal) {
            upperBound = day
        }
        
    }

    return lowerBound
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nGoal = readLine().split(' ');

    const n = parseInt(nGoal[0], 10);

    const goal = parseInt(nGoal[1], 10);

    const machines = readLine().split(' ').map(machinesTemp => parseInt(machinesTemp, 10));

    const ans = minTime(machines, goal);

    ws.write(ans + '\n');

    ws.end();
}
