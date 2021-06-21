'use strict';

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
 * Complete the 'whatFlavors' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY cost
 *  2. INTEGER money
 */

function whatFlavors(cost, money) {
    // Write your code here
    // console.log({cost, money})
    let sum = 10000;
    let value1 = 1000;
    let value2 = 1000;
    let position1 = 0;
    let position2 = 1;
    
    for(let i = 0; cost.length > i ; i++) {
        console.log({i})
        if(value1 > cost[i] || value2 > cost[i]){
            
            if(value1 - value2 > 0){
                position1 = i;
                value1 = cost[i];
            } else {
                position2 = i;
                value2 = cost[i];
            }
            
        }
    }
    
    // console.log({sum, f1, f2})
    if(position1 < position2) {
        console.log(`${position1} ${position2}`)
    } else {
        console.log(`${position2} ${position1}`)
    }
    
}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const money = parseInt(readLine().trim(), 10);

        const n = parseInt(readLine().trim(), 10);

        const cost = readLine().replace(/\s+$/g, '').split(' ').map(costTemp => parseInt(costTemp, 10));

        whatFlavors(cost, money);
    }
}
