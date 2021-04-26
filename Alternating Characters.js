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

const sortString = (string)  => string.split('').sort().join('');

// Complete the substrCount function below.
function substrCount(n, s) {

    let stringAnagramMap = {};
    let result = 0;
    
    for(let i = 0; i <= s.length; i++) {
        for(let j = 0; j < i; j++) {
            const sliceIJ = sortString(s.slice(j,i));
            if(i!== j && sliceIJ !== '') {
                if(!!stringAnagramMap[sliceIJ]) { 
                    stringAnagramMap[sliceIJ] += 1;
                    result += stringAnagramMap[sliceIJ] - 1;
                    //console.log(result)
                } else if(i!== j){
                    stringAnagramMap[sliceIJ] = 1;
                }
            }
            
            //console.log(stringAnagramMap);
        }
    }
    
    // console.log(stringAnagramMap);
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
