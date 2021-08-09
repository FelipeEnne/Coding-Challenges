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
    // Write your code here
    let prod = m*w;
    
    let maxDays = Math.ceil(n/prod);
    if(maxDays <= 2) return maxDays; 
    
    let day = 1;
    
    let res = maxDays;
    
    
    let pr = 0;
    
    while( day < maxDays ) {
        pr += m*w;
        
        //console.log({m, w, pr, buy:Math.floor(pr/p)});
        
        if(pr >= p){
            let buy = Math.floor(pr/p);
            pr -= buy*p;

            if(m > w){
                if(m-w >= buy) {
                    w += buy
                } else {
                    let tmp = Math.round((m+w+buy)/2)
                    m = Math.floor((m+w+buy)/2)
                    w = tmp
                }  
            } else {
                if(w-m >= buy) {
                    m += buy
                } else {
                    let tmp = Math.round((m+w+buy)/2)
                    m = Math.floor((m+w+buy)/2)
                    w = tmp
                }
            }
            
        }
        
        //console.log({m, w, pr});
        //console.log({mathCeil:Math.ceil(n/(m*w)), res, day});
        if(Math.ceil(n/(m*w))+day <  res) {
            res = Math.ceil(n/(m*w))+day
            maxDays = Math.ceil(n/(m*w))+day
        }
        
        day++;
    };
    
    
    return res;
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
