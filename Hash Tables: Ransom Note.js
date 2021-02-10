'use strict';

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

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    function checkMagazine(magazine, note) {
    const magazineObject = magazine.reduce(function(acc, cur, i) {
        if(!!acc[cur]) acc[cur] = acc[cur] + 1;
        else  acc[cur] = 1;
        return acc;
    }, {});
    
    for(let i = 0; i < note.length; i++) {
        if(!magazineObject[note[i]] || magazineObject[note[i]] <= 0) {
            return console.log('No')
        }
        
        magazineObject[note[i]] = magazineObject[note[i]]-1
    }
    
    return console.log('Yes')
}
}   

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}
