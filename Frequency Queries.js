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

// Complete the freqQuery function below.
function freqQuery(queries) {
    const result = [];
    let object = {};
    let objectValue = {};

    queries.forEach(e => {
        if(e[0] === 1) {
            if(!!object[e[1]]) {
                objectValue[object[e[1]]] -= 1;
                object[e[1]] += 1;

                if(objectValue[object[e[1]]]) {
                    objectValue[object[e[1]]] += 1;
                } else {
                    objectValue[object[e[1]]] = 1
                }
            } else {
                object[e[1]] = 1;
                if(objectValue[1]) {
                    objectValue[1] += 1;
                } else {
                    objectValue[1] = 1
                }
            }
        }
        if(e[0] === 2) {
            if(!!object[e[1]]) {
                objectValue[object[e[1]]] -= 1;
                object[e[1]] -= 1;
                
                if(objectValue[object[e[1]]]) {
                    objectValue[object[e[1]]] += 1;
                } else {
                    objectValue[object[e[1]]] = 1
                }
            } else {
                object[e[1]] = 0;
            }
        }
        if(e[0] === 3) {
            if(objectValue[e[1]]) result.push(1);
            else result.push(0);
        }
        
    })
    
    //console.log(object);
    //console.log(objectValue);
    return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const ans = freqQuery(queries);

    ws.write(ans.join('\n') + '\n');

    ws.end();
}
