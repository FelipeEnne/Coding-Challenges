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
 * Complete the 'poisonousPlants' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

function poisonousPlants(p) {
   var maxDaysAlive = 0;
    var stack = [];
     for (let i = 0; i < p.length; i++){
        let daysAlive = 0;
         
        while(stack.length > 0 && p[i] <= stack[stack.length - 1].plant)
            daysAlive = Math.max(daysAlive, stack.pop().days); 
        
         if (stack.length === 0) 
            daysAlive = 0;
          else 
            daysAlive += 1;
         
         maxDaysAlive = Math.max(maxDaysAlive, daysAlive);
         stack.push({ 
            plant: p[i],
            days : daysAlive
        });
     }
    
    return maxDaysAlive;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = readLine().replace(/\s+$/g, '').split(' ').map(pTemp => parseInt(pTemp, 10));

    const result = poisonousPlants(p);

    ws.write(result + '\n');

    ws.end();
}
