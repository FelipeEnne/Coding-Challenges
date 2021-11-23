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

// Complete the countTriplets function below.
function countTriplets(arr, r) {
    const objR = {};
    const objL = {};
    let result = 0;

    arr.forEach(a => objR[a] = objR[a] ? objR[a] + 1 : 1);

    for(let i = 0 ; i < arr.length; i++){
        const curr = arr[i];
        objR[curr] -= 1;
        
        if(objR[curr*r] && objL[curr/r] && curr%r === 0) {
            result += objR[curr*r] * objL[curr/r];
        }
        
        objL[curr] = objL[curr] ? objL[curr] += 1 : 1;
     }

    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nr = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nr[0], 10);

    const r = parseInt(nr[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const ans = countTriplets(arr, r);

    ws.write(ans + '\n');

    ws.end();
}
