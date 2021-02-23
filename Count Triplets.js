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
    
    const arrR = [... new Set(arr)];
    const objR = {};
    let moreThenTwo  = [];
    let result = (arrR.length - 3) + 1 ;
    // console.log({arr, r, result}) 
    for(let i = 0; i <= arr.length - 1 ; i++ ){
        if(objR[arr[i]]){
            moreThenTwo.push(arr[i]);
            result ++;
            objR[arr[i]] += 1
        }
        else objR[arr[i]] = 1;
    }
    // console.log({arr, r, result})
    let index = arrR.findIndex(e => e === moreThenTwo[0])
    for(let i = 0; i <= moreThenTwo.length - 1 ; i++ ){
        
        // console.log({index, a: index-1, b: arr.length - index - 3})
        
        if(index > 1) result += index-1;
        if (index + 3 < arr.length) result += arr.length - index - 3;
        
        index++;
    }
    
    
    // console.log({arrR, objR, result, moreThenTwo})
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
