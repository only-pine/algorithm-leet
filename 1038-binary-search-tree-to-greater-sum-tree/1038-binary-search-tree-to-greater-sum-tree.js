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
 * @return {TreeNode}
 */
var bstToGst = function(root, acc = 0) {
    function plusNode (root) {
        if (root === null) return 0;
        return root.val + plusNode(root.left) + plusNode(root.right);
    }

    if (root === null) return null;

    let sum = root.val + plusNode(root.right) + acc;
    
    const tree = new TreeNode(sum);
    tree.left = bstToGst(root.left, sum);
    tree.right = bstToGst(root.right, acc);

    return tree;
};