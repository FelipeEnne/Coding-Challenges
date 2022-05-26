"use strict";
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
function readLine(): string {
  return inputLines[currentLine++];
}
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
  getHeight(node: any = this): any {
    if (!node) return -1;
    const left = this.getHeight(node.left);
    const right = this.getHeight(node.right);
    return Math.max(left, right) + 1;
  }
}

const findDecendent = (tree: any, v1: any, v2: any): any => {

  if (tree.data < v1 && tree.data < v2) {
    return findDecendent(tree.right, v1, v2);
  }

  if (tree.data > v1 && tree.data > v2) {
    return findDecendent(tree.left, v1, v2);
  }

  return tree;
};

function main() {
  const nodeValues = inputLines[1].split(" ").map((e) => parseInt(e));
  const nodeValuesDecendent = inputLines[2].split(" ").map((e) => parseInt(e));

  const tree = new TreeNode();

  for (let nodeValue of nodeValues) {
    tree.insert(nodeValue);
  }

  console.log(
    findDecendent(tree, nodeValuesDecendent[0], nodeValuesDecendent[1]).data
  );
}
