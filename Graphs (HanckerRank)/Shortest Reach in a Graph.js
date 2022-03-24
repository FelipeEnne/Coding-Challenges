function processData(input) {
    input = input.split("\n");
    const numberOfQueries = parseInt(input.shift());
    
    let arrIdx = 0;
    
    for (let i = 0; i < numberOfQueries; i++) {
        let arrNodesEdges = input[arrIdx++].split(" ").map(Number);

        const numberOfNodes = arrNodesEdges[0];
        const numberOfEdges = arrNodesEdges[1];
        
        const nodesArr = [];
        for (let w = 0; w < numberOfEdges; w++) {
            let node = input[arrIdx++].split(" ").map(Number);
            const fromNode = node[0];
            const toNode = node[1];

            if (!nodesArr[fromNode]) {
                nodesArr[fromNode] = [];
            }
            if (!nodesArr[toNode]) {
                nodesArr[toNode] = [];
            }
            if (fromNode > numberOfNodes || toNode > numberOfNodes) {
                continue;
            }
            nodesArr[fromNode].push(toNode);
            nodesArr[toNode].push(fromNode);
        }


        const root = parseInt(input[arrIdx++]);
        
        const passedOver = [];
        processGraph(nodesArr, root, passedOver);
        //console.log(passedOver)
        
        const res = [];
        for (let j = 1; j <= numberOfNodes; j++) {
            if (j == root) {
                continue;
            }

            if (!passedOver[j]) {
                res.push(-1);
                continue;
            }

            res.push(passedOver[j]);
        }
        console.log(res.join(" "));
    }
}

function processGraph(nodesArr, root, passedOver) {
    const queue = [];
    queue.push(root);
    passedOver[root] = 0;

    while (queue.length > 0) {
        const nodeIdx = queue.shift();

        const nodeConnections = nodesArr[nodeIdx];
        if (!nodeConnections) {
            continue;
        }

        const distanceFromRoot = passedOver[nodeIdx];
        for (let i = 0; i < nodeConnections.length; i++) {
            const connIdx = nodeConnections[i];
            if (passedOver[connIdx]) {
                continue;
            }

            passedOver[connIdx] = distanceFromRoot + 6;
            queue.push(connIdx);
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
