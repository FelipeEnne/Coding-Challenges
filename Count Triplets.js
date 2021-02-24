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

// Complete the countTriplets function below.
function countTriplets(arr, r) {
    arr.sort((a, b) => a - b )
    const arrWithoutRepetition = [... new Set(arr)]
    const arrIsProgression = arrWithoutRepetition.map((e,i) => e === Math.pow(r,i));
    const arrClean  = arrWithoutRepetition
    .filter((e,i) =>  arrIsProgression[i])
    const objA = {};
    const objB = {};
    let moreThenTwo  = [];
    let result = (arrClean.length - 2);
    // console.log({arr, r, result})
    for(let i = 0; i <= arrClean.length - 1 ; i++ ){
        objA[arrClean[i]] = 1;
    }
    
    for(let i = 0; i <= arr.length - 1 ; i++ ){
        if(objA[arr[i]]){
            if(objB[arr[i]]) {
                moreThenTwo.push(arr[i]);
                result ++;
                objB[arr[i]] += 1;
            }
            else objB[arr[i]] = 1;
        }
    }
    
    console.log({arr, r, result, arrIsProgression})
    let index = arrClean.findIndex(e => e === moreThenTwo[0])
 
    
    for(let i = 0; i <= moreThenTwo.length - 1 ; i++ ){
        
        // console.log({index, a: index-1, b: arr.length - index - 3})
        
        if(index > 1) result += index-1;
        if (index + 3 < arr.length) result += arr.length - index - 3;
        
        index++;
    }
    
    
    console.log({arrClean, objB, result, moreThenTwo})
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nr = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nr[0], 10);

    const r = parseInt(nr[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const ans = countTriplets(arr, r);

    ws.write(ans + '\n');

    ws.end();
}
