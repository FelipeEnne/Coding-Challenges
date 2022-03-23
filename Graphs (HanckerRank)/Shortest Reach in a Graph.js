function processData(input) {
  input = input.split("\n");
  var q = parseInt(input.shift());

  var arrIdx = 0;
  for (var i = 0; i < q; i++) {
      var arr = input[arrIdx++].split(" ").map(Number);
      var n = arr[0];
      var m = arr[1];
      
      var nodesArr = [];
      for (var w = 0; w < m; w++) {
          var node = input[arrIdx++].split(" ").map(Number);
          var from = node[0];
          var to = node[1];

          if (!nodesArr[from]) {
              nodesArr[from] = [];
          }
          if (!nodesArr[to]) {
              nodesArr[to] = [];
          }
          if (from > n || to > n) {
              continue;
          }
          nodesArr[from].push(to);
          nodesArr[to].push(from);
      }


      var root = parseInt(input[arrIdx++]);
      
      var passedOver = [];
      processGraph(nodesArr, root, passedOver);
      
      var res = [];
      for (var j = 1; j <= n; j++) {
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
  var queue = [];
  queue.push(root);
  passedOver[root] = 0;

  while (queue.length > 0) {
      var nodeIdx = queue.shift();

      var nodeConnections = nodesArr[nodeIdx];
      if (!nodeConnections) {
          continue;
      }

      var distanceFromRoot = passedOver[nodeIdx];
      for (var i = 0; i < nodeConnections.length; i++) {
          var connIdx = nodeConnections[i];
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
