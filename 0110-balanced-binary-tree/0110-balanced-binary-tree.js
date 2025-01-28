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
var isBalanced = function(root) {
    var checkHeight = function(node) {
        if (node === null) return 0;

        let leftHeight = 1 + checkHeight(node.left);
        let rightHeight = 1 + checkHeight(node.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return Infinity;
        return Math.max(leftHeight, rightHeight);
    }

    return checkHeight(root) === Infinity ? false : true;
};