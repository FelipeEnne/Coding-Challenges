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

// Complete the solve function below.
function solve(arr) {
    // solve here
    let result = [];
    
    for(let i = 0;arr.length > i;i++){
        let line = []
        
        for(let j = 0;arr.length-i > j;j++){
            let x = arr.slice(j,i+1+j)
            if(x.length>0){
                line.push(Math.min(...x))
            }
            //console.log({line, x, i , j})
        }
        
        result.push(Math.max(...line))
        //console.log({line, result})
    }
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = solve(arr);

    ws.write(res.join(' ') + '\n');

    ws.end();
}
