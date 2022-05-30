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

// void decode(String S , Node root) {
//   decode(S, root, root);
// }

// void decode(String S, Node mainRoot, Node currRoot) {

// if (mainRoot != null && S != null) {
//   if (isLeaf(currRoot)) {
//     System.out.print(currRoot.data);
//     decode(S, mainRoot, mainRoot);
//   } else if (S.length() > 0) {
//     switch (S.charAt(0)) {
//       case '0': decode(S.substring(1), mainRoot, currRoot.left);
//       break;
//       case '1': decode(S.substring(1), mainRoot, currRoot.right);
//       break;
//       default : System.out.println("Fatal error.");
//                 System.exit(-1);
//     }
//   }
// }}

// boolean isLeaf(Node n) {
//   return n != null && n.left == null && n.right == null;
// }

function main() {
  console.log(inputLines[0]);
}
