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
 * Complete the 'commonChild' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function commonChild(s1, s2) {
    // Write your code here
    let result = 0;
    const s1Map = {};
    
    for(let i = 0; s1.length > i; i ++) {
        if(s1Map[s1[i]]) {
            s1Map[s1[i]] += 1;
        } else {
            s1Map[s1[i]] = 1;
        }
    }
    
    for(let i = 0; s2.length > i; i ++) {
        console.log({s1: s1Map[s2[i]], s2: s1Map[s2[i]] > 0})
        if(s1Map[s2[i]] && s1Map[s2[i]] > 0) {
            result ++;
            s1Map[s1[i]] -= 1;
        }
    }
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    const result = commonChild(s1, s2);

    ws.write(result + '\n');

    ws.end();
}
