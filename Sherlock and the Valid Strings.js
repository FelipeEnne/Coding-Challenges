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

// Complete the isValid function below.
function isValid(s) {

    const cache = {};

    for (let i = 0; i < s.length; i++) {
        cache[s[i]] = (cache[s[i]]||0) + 1;
    }

    const frequency = Object.entries(cache).reduce((acc, curVal) => {
        const [char, freq] = curVal;
        if (!acc[freq]) acc[freq] = 0;
        acc[freq]++;
        return acc;
    }, {});
    
    const freqEntries = Object.entries(frequency);

    if (freqEntries.length > 2) return 'NO';
    if (freqEntries.length <= 1) return 'YES';


    let minFreq = Math.min(+freqEntries[0][0], +freqEntries[1][0]);
    let maxFreq = Math.max(+freqEntries[0][0], +freqEntries[1][0]);

    if (minFreq === maxFreq - 1 && frequency[maxFreq] === 1) return 'YES';

    if (frequency[minFreq] > frequency[maxFreq]) {
        minFreq = maxFreq;
    }
    
    if (+minFreq > 2) return 'NO';
    if (frequency[minFreq] > 1) return 'NO';

    return 'YES';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = isValid(s);

    ws.write(result + "\n");

    ws.end();
}
