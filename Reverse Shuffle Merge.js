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

function reverseShuffleMerge(s) {
    
    let map = {};
    s = s.split('').reverse('').join('');
    
    for(let item of s.split('')){
        map[item] = map[item] ? map[item]+1 : 1;
    }
    
    let ref = {}
    
    for(let key in map){
        ref[key] = map[key]/2
    }
    
    let solution = [];
    let i=0;
    
    while (solution.length < s.length/2){
        let min_char_pos = -1
        
        while(true){
            let c=s[i];
            
            if(ref[c] > 0 && (min_char_pos < 0 || c < s[min_char_pos])){
                min_char_pos = i;
            }
            
            map[c] -= 1;
            
            if(map[c] < ref[c]){
                break
            }
            i+=1
        }
        //found the one, restore the count of other
        for(let j=min_char_pos+1; j<i+1; j++){
            map[s[j]]+=1
        }
        
        ref[s[min_char_pos]]-=1
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
