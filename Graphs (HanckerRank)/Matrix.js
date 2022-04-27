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
 * Complete the 'minTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY roads
 *  2. INTEGER_ARRAY machines
 */

const findParent = (parent, u) => {
    console.log({parent, u})
    if(parent[u] == u)return u;
    return findParent(parent, parent[u]);
}

const joinParents = (parent, u, v) => {
    let a = findParent(parent, u);
    let b = findParent(parent, v);
    parent[b] = a;
}

const calculateCost = (n, roads, m) => {
    let cost = 0;
    let parent = {};
    
    for(let i = 0; i < n; i++) parent[i] = i;
    
    for(let i = 0; i < roads.length; i++) {
        let u = findParent(parent, roads[i][0]);
        let v = findParent(parent, roads[i][1]);
        console.log({u, v})

        if(m[u] && m[v]) {
            cost += roads[i][2];
        } else if(m[u] && !m[v]) {
            joinParents(parent, roads[i][0], roads[i][1])
        } else {
            joinParents(parent, roads[i][1], roads[i][0])
        }
    }

    return cost;
} 

function minTime(roads, machines) {
    // Write your code here
    console.log({roads, machines})
    let n = roads.length;

    let m = {};

    for(let i = 0; i < n; i++) {
        m[i] = false;
    }

    for(let i = 0; i < machines.length; i++) {
        m[machines[i]] = true;
    }
    
    roads = roads.sort((a, b) => b[2] - a[2])
    

    return calculateCost(n, roads, m)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    let roads = Array(n - 1);

    for (let i = 0; i < n - 1; i++) {
        roads[i] = readLine().replace(/\s+$/g, '').split(' ').map(roadsTemp => parseInt(roadsTemp, 10));
    }

    let machines = [];

    for (let i = 0; i < k; i++) {
        const machinesItem = parseInt(readLine().trim(), 10);
        machines.push(machinesItem);
    }

    const result = minTime(roads, machines);

    ws.write(result + '\n');

    ws.end();
}
