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
 * Complete the 'luckBalance' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. 2D_INTEGER_ARRAY contests
 */

function luckBalance(k, contests) {
    let result = 0;
    let failArray = [];
    
    for(let i = 0; contests.length > i; i++){
        if(contests[i][1] === 0) {
            result += contests[i][0];
        } else {
            failArray.push(contests[i][0]) ;  
        }
    }
    
    let failArraySort = failArray.sort((a,b) => b-a);
    
    for(let i = 0; failArraySort.length > i; i++){
        if( k > i){
            result += failArraySort[i];
        }
        else {
            result -= failArraySort[i];
        }
         // console.log({result,failArraySort: failArraySort[i]});
    }
    
    // console.log({result,failArraySort});
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    let contests = Array(n);

    for (let i = 0; i < n; i++) {
        contests[i] = readLine().replace(/\s+$/g, '').split(' ').map(contestsTemp => parseInt(contestsTemp, 10));
    }

    const result = luckBalance(k, contests);

    ws.write(result + '\n');

    ws.end();
}
