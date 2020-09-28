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
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    if(!root) return true;
    
    return checkBST(root, -1000000000000, 1000000000000)
    
};

const checkBST = (root, min, max) => {
    if(!root) return true;
    
    
    if(root.val <= min || root.val >= max) {
        return false;
    }
    
    return checkBST(root.left, min, root.val) && checkBST(root.right, root.val, max);
}