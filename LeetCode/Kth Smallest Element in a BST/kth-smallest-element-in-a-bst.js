/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const sortedArray = [];

  if (root === null) {
    return sortedArray;
  }

  const inorder = (node, arr) => {
    if (node == null) {
      return;
    }

    inorder(node.left, arr);
    arr.push(node.val);
    inorder(node.right, arr);
  };
  inorder(root, sortedArray);

  return sortedArray[k - 1];
};
