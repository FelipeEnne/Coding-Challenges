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
 * Complete the 'reverseShuffleMerge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function reverseShuffleMerge(s) {
    // Write your code here
    let s1 = reverseString(s.slice(0, s.length/2));
    let s2 = s.slice(s.length/2, s.length);
    
    let mapFreq = {};
    let required = {};
    let char;
    
    for(let i = 0; s.length > i; i++){
        if(mapFreq[s[i]]) {
            mapFreq[s[i]] += 1;
        } else {
            mapFreq[s[i]] = 1;
        }
    }
    for(const v in mapFreq) {
        required[v] = mapFreq[v]/2
    }
    
    let solution = [];
    let i=0;
    
    while (solution.length < s.length/2){
        let min_char_pos = -1
        
        while(true){
            let c = s[i];
            if(required[c] > 0&& (min_char_pos < 0 || c < s[min_char_pos])){
                min_char_pos = i;
            }
            mapFreq[c] -= 1;
            if(mapFreq[c] < required[c]){
                break
            }
            i += 1
        }
        
        for(let j=min_char_pos+1;j<i+1;j++){
            mapFreq[s[j]]+=1
        }

        required[s[min_char_pos]]-=1
        solution.push(s[min_char_pos]);
        i= min_char_pos+1
    }
    return solution.join('');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = reverseShuffleMerge(s);

    ws.write(result + '\n');

    ws.end();
}
