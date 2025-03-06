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
 * @return {number}
 */
var maxDepth = function(root) {
    function checkDepth(root, depth) {
        return Math.max(root.left ? checkDepth(root.left, depth + 1) : depth, root.right ? checkDepth(root.right, depth + 1) : depth);
    }

    if (!root) {
        return 0;
    }

    return checkDepth(root, 1);
};