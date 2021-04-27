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

// Complete the substrCount function below.
function substrCount(n, s) {

    let stringAnagramMap = {};
    let result = s.length;
    
    for(let i = 0; i < s.length; i++) {
        if(stringAnagramMap[s[i]])  stringAnagramMap[s[i]] += 1;
        else stringAnagramMap[s[i]] = 1;
        for(let j = 0; j < i; j++) {
            console.log(s[j]);
        }
    }
    
    console.log(stringAnagramMap);
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    const result = substrCount(n, s);

    ws.write(result + '\n');

    ws.end();
}
