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
    // Write your code here
    let isNext = {
        ')':0,
        ']':0,
        '}':0
    };
    
    let arr = [];
    
    for(let i=0; s.length > i; i++) {
        //console.log({arr, s})
        if(s[i] == '('){
            arr.push('(');
            isNext = {
                ')':1,
                ']':0,
                '}':0
            };
        };
        
        if(s[i] ==  '['){
            arr.push('[');
            isNext = {
                ')':0,
                ']':1,
                '}':0
            };
        };
        
        if(s[i] == '{'){
            arr.push('{')
            isNext = {
                ')':0,
                ']':0,
                '}':1
            };
        };
        
        if(s[i] == ')' ) {
            if(isNext[')'] != 1) return 'NO';
            arr.pop();
            if(arr[arr.length - 1] == '('){
                isNext = {
                    ')':1,
                    ']':0,
                    '}':0
                };
            };
            
            if(arr[arr.length - 1] ==  '['){
                isNext = {
                    ')':0,
                    ']':1,
                    '}':0
                };
            };
            
            if(arr[arr.length - 1] == '{'){
                isNext = {
                    ')':0,
                    ']':0,
                    '}':1
                };
            };
        }
        
        if(s[i] == ']' ) {
            if(isNext[']'] != 1) return  'NO';
            arr.pop();
            if(arr[arr.length - 1] == '('){
                isNext = {
                    ')':1,
                    ']':0,
                    '}':0
                };
            };
            
            if(arr[arr.length - 1] ==  '['){
                isNext = {
                    ')':0,
                    ']':1,
                    '}':0
                };
            };
            
            if(arr[arr.length - 1] == '{'){
                isNext = {
                    ')':0,
                    ']':0,
                    '}':1
                };
            };
        }
        
        if(s[i] == '}' ) {
            if(isNext['}'] != 1) return  'NO';
            arr.pop();
            if(arr[arr.length - 1] == '('){
                isNext = {
                    ')':1,
                    ']':0,
                    '}':0
                };
            };
            
            if(arr[arr.length - 1] ==  '['){
                isNext = {
                    ')':0,
                    ']':1,
                    '}':0
                };
            };
            
            if(arr[arr.length - 1] == '{'){
                isNext = {
                    ')':0,
                    ']':0,
                    '}':1
                };
            };
        }
        
    }
    
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
