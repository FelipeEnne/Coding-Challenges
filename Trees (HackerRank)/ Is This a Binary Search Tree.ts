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

function processData(input: any) {
  //   const nodeValues = input[1].split(" ").map((e) => parseInt(e));

  //   const tree = new TreeNode();

  //   for (let nodeValue of nodeValues) {
  //     tree.insert(nodeValue);
  //   }
  console.log(input);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
