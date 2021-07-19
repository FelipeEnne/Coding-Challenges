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
    a = [...a1]
    b = [...b1]
    c = [...c1]
    // console.log({a1,b1,c1});
    
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            // console.log({a: a[i],b: b[j], f:a[i] <= b[j]});
            if(a[i] <= b[j]) {
                for(let k = 0; k < c.length; k++){
                    // console.log({b: b[j],c: c[k], f:c[k] <= b[j]});
                    if(c[k] <= b[j]) result ++;
                }
            }
        }
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
