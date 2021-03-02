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

    queries.forEach(e => {
        if(e[0] === 1) {
            if(!!object[e[1]]) {
                object[e[1]] += 1;
            } else {
                object[e[1]] = 1;
            }
        }
        if(e[0] === 2) {
            if(!!object[e[1]]) {
                object[e[1]] -= 1;
            } else {
                object[e[1]] = 0;
            }
        }
        if(e[0] === 3) {
            let isTrue = false;
            const objectValues = [...new Set(Object.values(object))];
            // console.log(objectValues);
            for(let i = 0; i < objectValues.length ; i++ ) {
               if(objectValues[i] === e[1]) {
                    result.push(1);
                    isTrue = true;
                    break;
               }
            }
            if(!isTrue) result.push(0);
            object = {};
        }
        
    })
    
    // console.log(object);
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
