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
 * Complete the 'swapNodes' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. 2D_INTEGER_ARRAY indexes
 *  2. INTEGER_ARRAY queries
 */

function swapNodes(indexes, queries) {
    class Node {
    constructor(data, depth) {
      this.data = data;
      this.left = null;
      this.right = null;
      this.depth = depth;
    }
  }

  let response = [];
    
  const queriesLen = queries.length;
  const indexesLen = indexes.length;
  const nodes = [new Node(1, 1)];

  function createNode(value, root, position) {
    if (value > -1) {
      const depth = root.depth + 1;
      const node = new Node(value, depth);
      root[position] = node;
      nodes.push(node);
    }
  }
  
   function swapNode(k) {
    const temp = nodes[k].left;
    nodes[k].left = nodes[k].right;
    nodes[k].right = temp;
  }
  
  function inOrder(_root) {
    const result = [];
    const action = root => {
      if (root !== null) {
        action(root.left);
        result.push(root.data);
        action(root.right);
      }
    };
    action(_root);
    return result;
  }
 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let indexes = Array(n);

    for (let i = 0; i < n; i++) {
        indexes[i] = readLine().replace(/\s+$/g, '').split(' ').map(indexesTemp => parseInt(indexesTemp, 10));
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = parseInt(readLine().trim(), 10);
        queries.push(queriesItem);
    }

    const result = swapNodes(indexes, queries);

    ws.write(result.map(x => x.join(' ')).join('\n') + '\n');

    ws.end();
}
