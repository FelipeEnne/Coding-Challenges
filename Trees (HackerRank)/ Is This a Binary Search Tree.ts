class TreeNode {
  private left: any;
  private right: any;
  private data: any;

  constructor(value?: any) {
    this.data = value;
    this.left = null;
    this.right = null;
  }

  insert(newData: any) {
    let node = this;
    if (!node.data) {
      node.data = newData;
    } else if (node.left && newData < node.data) {
      node.left.insert(newData);
    } else if (newData < node.data && !node.left) {
      const newNode = new TreeNode(newData);
      node.left = newNode;
    } else if (node.right && newData > node.data) {
      node.right.insert(newData);
    } else if (newData > node.data && !node.right) {
      const newNode = new TreeNode(newData);
      node.right = newNode;
    }
  }
}

function checkBST(root: any): boolean {
  return check(root, -10000, 100000);
}

function check(n: any, min: any, max: any): boolean {
  if (n == null) return true;
  if (n.data <= min || n.data >= max) return false;

  return check(n.left, min, n.data) && check(n.right, n.data, max);
}

function main() {
  const nodeValues = inputLines[1].split(" ").map((e: any) => parseInt(e));

  const tree = new TreeNode();

  const nodeLenght = nodeValues.length;
  let i = 0;
  while(nodeLenght > i) {
    if(i == 0) {
        tree.insert(nodeValues[Math.round(nodeLenght/2)-1])
        console.log(nodeValues[Math.round(nodeLenght/2)-1])
        i++;
    }else{
        tree.insert(nodeValues[Math.round(nodeLenght/2)-1-i]);
        console.log(nodeValues[Math.round(nodeLenght/2)-1-i])

        tree.insert(nodeValues[Math.round(nodeLenght/2)-1+i]);
        console.log(nodeValues[Math.round(nodeLenght/2)-1+i]);
        
        i += 1
    }
  }

  console.log(checkBST(tree) ? "Yes" : "No");
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});
