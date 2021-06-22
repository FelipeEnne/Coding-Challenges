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
    let sum = 100000000;
    let f1 = 0;
    let f2 = 1;
    
    for(let i = 0; cost.length > i ; i++) {
        for(let j = i+1; cost.length > j ; j++) {
            if(cost[i] + cost[j] == money){
                f1 = i;
                f2 = j;
                sum = cost[i] + cost[j];
                break;
            }
        }
        if(sum == money)break;
    }
    
    // console.log({sum, f1, f2})
    if(f1 < f2) {
        console.log(`${f1+1} ${f2+1}`)
    } else {
        console.log(`${f2+1} ${f1+1}`)
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
