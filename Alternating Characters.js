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

    let stringAnagramMap = {};
    let result = 0;
    
    for(let i = 0; i <= s.length; i++) {
        for(let j = i; j+1 > 0; j--) {
            if(i !== j) {
                if(stringAnagramMap[s.substring(j,i)])  
                    stringAnagramMap[s.substring(j,i)] += 1;
                else stringAnagramMap[s.substring(j,i)] = 1;
            }
        }
    }
    
    const keysFromString = Object.keys(stringAnagramMap);
    
    for(let i = 0; i < keysFromString.length; i++) {
        if(keysFromString[i].length === 1)
            result += stringAnagramMap[keysFromString[i]];
        else {
            if(keysFromString[i].length % 2 === 0) {
                const keysSubstringA = keysFromString[i].substring(0,keysFromString[i].length/2);
                const keysSubstringB = keysFromString[i].substring(keysFromString[i].length/2,keysFromString[i].length).split("").reverse().join("");
                if(keysSubstringA == keysSubstringB)
                    result += stringAnagramMap[keysFromString[i]];
             
            } else {

                const keysSubstringA = keysFromString[i].substring(0,(keysFromString[i].length-1)/2);
                const keysSubstringB = keysFromString[i].substring((keysFromString[i].length+1)/2,keysFromString[i].length).split("").reverse().join("");
                // console.log({keysSubstringA, keysSubstringB})
                if(keysSubstringA == keysSubstringB)
                    result += stringAnagramMap[keysFromString[i]];
                    
            }
        }
    }
    // console.log(Object.keys(stringAnagramMap));
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
