'use strict';

const fs = require('fs');

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

// Complete the findShortest function below.

/*
 * For the unweighted graph, <name>:
 *
 * 1. The number of nodes is <name>Nodes.
 * 2. The number of edges is <name>Edges.
 * 3. An edge exists between <name>From[i] to <name>To[i].
 *
 */
function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
    // solve here
    if(ids.filter(e =>  e == val ).length <= 1) return -1
    
    let resp = Infinity

    let mapGraph = new Map(Array.from(new Array(graphNodes),(_,i)=>[i+1,[]]))
    for (let i = 0; i < graphFrom.length; i++) {
        mapGraph.get(graphFrom[i]).push(graphTo[i])
        mapGraph.get(graphTo[i]).push(graphFrom[i])
    }
    
    const chk = (node, last, dist) => {
        if (dist >= resp || resp === 1) return
        if (ids[node-1] === val && dist) resp = dist
        else for (let el of mapGraph.get(node)) if (el !== last) chk(el, node, dist + 1)
    }
    
    for (let i = 0; i < ids.length; i++) if (ids[i] === val) chk(i+1, null, 0)
    
    return resp
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const graphNodesEdges = readLine().split(' ');
    const graphNodes = parseInt(graphNodesEdges[0], 10);
    const graphEdges = parseInt(graphNodesEdges[1], 10);

    let graphFrom = [];
    let graphTo = [];

    for (let i = 0; i < graphEdges; i++) {
        const graphFromTo = readLine().split(' ');

        graphFrom.push(parseInt(graphFromTo[0], 10));
        graphTo.push(parseInt(graphFromTo[1], 10));
    }

    const ids = readLine().split(' ').map(idsTemp => parseInt(idsTemp, 10));

    const val = parseInt(readLine(), 10);

    const ans = findShortest(graphNodes, graphFrom, graphTo, ids, val);

    ws.write(ans + '\n');

    ws.end();
}
