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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const nodes = [];
    const result = [];

    function checkNodes(level, root) {
        if (!root) {
            return;
        }

        nodes[level] = root.val;

        checkNodes(level + 1, root.left);
        checkNodes(level + 1, root.right);
    }

    checkNodes(0, root);

    for (let index = 0; index < nodes.length; index++) {
        result.push(nodes[index]);
    }
    
    return result;
};