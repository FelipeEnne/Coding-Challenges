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
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {

    
    let arr = [];
    
    for(let i=0; s.length > i; i++) {
        //console.log({arr, s})
        if(s[i] == '(' || s[i] ==  '[' || s[i] == '{'){
            arr.push(s[i]);
        };

        if(s[i] == ')' ) {
            if(arr[arr.length - 1] != '(') return 'NO';
            arr.pop();
        }
        
        if(s[i] == ']' ) {
            if(arr[arr.length - 1] !=  '[') return  'NO';
            arr.pop();
        }
        
        if(s[i] == '}' ) {
            if(arr[arr.length - 1] != '{') return  'NO';
            arr.pop();
        }
        
    }
    
    if(arr.length != 0) return  'NO';
    return 'YES';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const s = readLine();

        const result = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}
