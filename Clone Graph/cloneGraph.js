/**
 * @param {Node} node
 * @return {Node}
 */


function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

var cloneGraph = function(node) {
    if (node === null) {
      return null;
    }
    const map = new Map();
      
    const clone = root => {
      if (!map.has(root.val)) {

        map.set(root.val, new Node(root.val));

        map.get(root.val).neighbors = root.neighbors.map((n) => {clone(n)});
      }

      return map.get(root.val);
      
    }

    return clone(node);
  };
