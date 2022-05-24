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

function sortValues(arr: any): any {
  if (arr.length > 0) {

  }
}

function main() {
  const nodeValues = inputLines[1].split(" ").map((e: any) => parseInt(e));

  const tree = new TreeNode();

  for (let nodeValue of nodeValues) {
    tree.insert(nodeValue);
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
