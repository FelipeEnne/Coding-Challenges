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

// Complete the triplets function below.
function triplets(a, b, c) {
    // console.log({a,b,c});
    let result = 0;
    let a1 = new Set(a)
    let b1 = new Set(b)
    let c1 = new Set(c)
    a = [...a1].sort((a,b) => a - b)
    b = [...b1].sort((a,b) => a - b)
    c = [...c1].sort((a,b) => a - b)
    // console.log({a1,b1,c1});
    let j = 0;
    let k = 0;
    for(let i = 0; i < b.length; i++){
        while(j < a.length && a[j] <= b[i]) {
            j++;
        }
        while(k < c.length && c[k] <= b[i]) {
            k++;
        }
        result += j * k
    }

    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const lenaLenbLenc = readLine().split(' ');

    const lena = parseInt(lenaLenbLenc[0], 10);

    const lenb = parseInt(lenaLenbLenc[1], 10);

    const lenc = parseInt(lenaLenbLenc[2], 10);

    const arra = readLine().split(' ').map(arraTemp => parseInt(arraTemp, 10));

    const arrb = readLine().split(' ').map(arrbTemp => parseInt(arrbTemp, 10));

    const arrc = readLine().split(' ').map(arrcTemp => parseInt(arrcTemp, 10));

    const ans = triplets(arra, arrb, arrc);

    ws.write(ans + '\n');

    ws.end();
}
