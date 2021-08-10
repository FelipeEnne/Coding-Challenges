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
 * Complete the 'minimumPasses' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. LONG_INTEGER m
 *  2. LONG_INTEGER w
 *  3. LONG_INTEGER p
 *  4. LONG_INTEGER n
 */

function minimumPasses(m, w, p, n) {
    let pass=0, min = Math.ceil(n/(m*w)), points=0;
    while(pass < min) {
        let dPass = Math.ceil((p-points)/(m*w));
        pass+=dPass;
        points+=m*w*dPass;
        if (Math.floor(points/p) >= Math.abs(m-w)) {
            points -= Math.abs(m-w) * p;
            m > w ? w = m : m = w;
            let upgrades = Math.floor(points/p);
            if (upgrades > 0) {
                if (upgrades % 2 === 0) {
                    m=w=m+(upgrades/2);
                } else {
                    m=w=m+Math.floor(upgrades/2);
                    m++;
                }
                points -= upgrades * p;
            }
        } else {
            let upgrades = Math.floor(points/p);
            m > w ? w+=upgrades : m+=upgrades;
            points -= upgrades * p;
        }
        let minPass = Math.ceil((n-points)/(m*w));
        if (min > minPass+pass) min = minPass+pass;
    }
    return min;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(firstMultipleInput[0], 10);

    const w = parseInt(firstMultipleInput[1], 10);

    const p = parseInt(firstMultipleInput[2], 10);

    const n = parseInt(firstMultipleInput[3], 10);

    const result = minimumPasses(m, w, p, n);

    ws.write(result + '\n');

    ws.end();
}
