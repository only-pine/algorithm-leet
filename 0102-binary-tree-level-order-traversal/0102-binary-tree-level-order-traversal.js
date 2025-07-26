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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];

    if (!root) {
        return result;
    }

    result.push([root.val]);

    function checkNode(root, level) {
        if (root === null) return;

        if (result[level]) {
            result[level].push(root.val);
        } else {
            result[level] = [root.val];
        }

        checkNode(root.left, level + 1);
        checkNode(root.right, level + 1);
    }

    checkNode(root.left, 1);
    checkNode(root.right, 1);

    return result;
};