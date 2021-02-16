'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function reverse(s){
    return s.split("").reverse().join("");
}
// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
   
    let stringAnagramMap = {};
    let result = 0;
    
    for(let i = 0; i <= s.length; i++) {
        for(let j = 0; j <= i; j++) {
            //console.log(stringAnagramMap);
            //console.log(s.slice(j,i))
            if(i !== j && !!stringAnagramMap[s.slice(j,i)]) {
                stringAnagramMap[s.slice(j,i)] += 1;
                result ++;
            }
            if(i !== j && !stringAnagramMap[s.slice(j,i)]){
                stringAnagramMap[reverse(s.slice(j,i))] = 1;
            }
        }
        
    }
    
    //console.log(stringAnagramMap);
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        ws.write(result + "\n");
    }

    ws.end();
}
