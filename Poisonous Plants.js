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
 * Complete the 'poisonousPlants' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function poisonousPlants(p) {
    // Write your code here
    let days = 0;
    let stop = true;
    
    while(stop) {
        stop = false;
        
        let r = [p[0]]
        for(let i = 1; p.length > i; i++){
            if(p[i] > p[i-1]) {
                stop = true;
            } else {
                r.push(p[i])
            }
        }
        

        p=r
        //console.log({p, r})
        if(stop) days++;
    }
    
    return days;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = readLine().replace(/\s+$/g, '').split(' ').map(pTemp => parseInt(pTemp, 10));

    const result = poisonousPlants(p);

    ws.write(result + '\n');

    ws.end();
}
