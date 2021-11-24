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
 * Complete the 'roadsAndLibraries' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER c_lib
 *  3. INTEGER c_road
 *  4. 2D_INTEGER_ARRAY cities
 */
// Create Adjacency List
function adjacencyList(cities) {
    const map = new Map();
    cities.forEach(c => {
        const [c1, c2] = c;
        if (map.has(c1)) map.get(c1).cities.push(c2);
        else map.set(c1, {cities: [c2], visited: false});
        if (map.has(c2)) map.get(c2).cities.push(c1);
        else map.set(c2, {cities: [c1], visited: false});
    });
    return map;
}

// Depth-First Search
function dfs(vals, map, roads = 0) {
    if (vals.visited) return roads;
    vals.visited = true;
    vals.cities.forEach(v => {
        roads += dfs(map.get(v), map);
    });
    return roads + 1;
}

function roadsAndLibraries(n, c_lib, c_road, cities) {
    if(c_road >= c_lib) return c_lib*n;
    const map = adjacencyList(cities);
    
    let libs = 0;
    let roads = 0;

    for (const vals of map.values()) {
        if (vals.visited) continue;
        roads += dfs(vals, map)-1;
        libs++;
    }
    
    libs += n - map.size;
    return c_lib * libs + c_road * roads;
   
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const n = parseInt(firstMultipleInput[0], 10);

        const m = parseInt(firstMultipleInput[1], 10);

        const c_lib = parseInt(firstMultipleInput[2], 10);

        const c_road = parseInt(firstMultipleInput[3], 10);

        let cities = Array(m);

        for (let i = 0; i < m; i++) {
            cities[i] = readLine().replace(/\s+$/g, '').split(' ').map(citiesTemp => parseInt(citiesTemp, 10));
        }

        const result = roadsAndLibraries(n, c_lib, c_road, cities);

        ws.write(result + '\n');
    }

    ws.end();
}
