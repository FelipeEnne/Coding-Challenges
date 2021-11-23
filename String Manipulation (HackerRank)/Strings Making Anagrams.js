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

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let result = 0
    const aS = a.split('')
    const bS  = b.split('')
    
    const objB = {}
    
    for(let i = 0; b.length > i; i++){
        if(objB[bS[i]]) {
            objB[bS[i]] += 1;
        } else {
            objB[bS[i]] = 1;
        }
    }
    
    for(let i = 0; a.length > i; i++){
        if(objB[aS[i]] && objB[aS[i]] > 0) {
            objB[aS[i]] -= 1;
            result += 1;
        } 
    }
    
    return a.length+b.length-result*2;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
