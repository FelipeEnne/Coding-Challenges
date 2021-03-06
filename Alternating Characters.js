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
    // console.log({n,s})
    let result = n;
    
    for (let i = 0; i < s.length; i++) {
        let nextIndex = i;
        
        while (s[i] === s[nextIndex + 1]) nextIndex++;

        if (i !== nextIndex) {
            const length = nextIndex - i;
            result = result + (length * (length + 1)) / 2;
            i = nextIndex;
            // console.log({length, result, nextIndex})
        } else {
            let step = 1;
            // console.log({
            //     s1: s[i + step] === s[i - step], 
            //     s2: s[i + step] === s[i + 1]
            // })
            while (s[i + step] === s[i - step] && s[i + step] === s[i + 1]) {
                step++;
                result++;
            }
            // console.log({step, result})
        }
    }
    
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
