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
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
    // Write your code here
    let result = 1000000000000;
    
    for(let i = 0; arr.length > i; i ++){
        for(let j = i+1; arr.length > j; j ++) {
            
            if(Math.abs(arr[i] - arr[j]) < result)
                result = Math.abs(arr[i] - arr[j]);
                
        }
    }
    
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = minimumAbsoluteDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
