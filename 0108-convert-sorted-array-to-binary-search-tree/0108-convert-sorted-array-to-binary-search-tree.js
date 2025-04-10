/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const treeNode = new TreeNode();

    function convertTreeNode(array) {
        const tree = new TreeNode();

        if (array.length === 0) return null;

        // if (array.length === 1) {
        //     tree.val = array[0];
        //     return tree;
        // }

        let middle = Math.floor(array.length / 2);

        tree.val = array[middle];
        tree.left = convertTreeNode(array.slice(0, middle));
        tree.right = convertTreeNode(array.slice(middle + 1));

        return tree;
    }

    return convertTreeNode(nums);
};