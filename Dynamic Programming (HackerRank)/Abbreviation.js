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
 * Complete the 'abbreviation' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING a
 *  2. STRING b
 */

function abbreviation(a, b) {
    let dp=Array(a.length+1).fill(0);
    
    for(let i=0;i<=a.length;i++){
        dp[i]=Array(b.length+1).fill(0);
    }
    
    dp[0][0]=1;
    
    // console.log(dp)
    
     for(let i=0;i<a.length;i++){
       for(let j=0;j<=b.length;j++){
             if(dp[i][j]===0) continue;
             if(j<b.length && a[i].toUpperCase()===b[j]){dp[i+1][j+1]=1;}
             if(a[i]!==a[i].toUpperCase()){dp[i+1][j]=1;}
          }
      }
    
    console.log(dp)
    
    return dp[a.length][b.length]?"YES":"NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const a = readLine();

        const b = readLine();

        const result = abbreviation(a, b);

        ws.write(result + '\n');
    }

    ws.end();
}
