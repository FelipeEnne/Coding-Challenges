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

// Complete the twoStrings function below.
function twoStrings(s1, s2) {

    const s1Array = s1.split('');
    const s2Array = s2.split('');
    const s1Object = s1Array.reduce((acc, cur) => {
        if(acc[cur])  acc[cur] += 1;
        else  acc[cur] = 1;
        return acc
    },{});
    
    for(let i = 0; i <= s2Array.length-1; i++) {
        if(s1Object[s2Array[i]]) return 'YES';
    };
    
    return 'NO';

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        let result = twoStrings(s1, s2);

        ws.write(result + "\n");
    }

    ws.end();
}
