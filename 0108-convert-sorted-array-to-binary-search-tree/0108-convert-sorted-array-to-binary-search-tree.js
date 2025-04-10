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
    if (nums.length === 0) return null;

    const tree = new TreeNode();
    let middle = Math.floor(nums.length / 2);

    tree.val = nums[middle];
    tree.left = sortedArrayToBST(nums.slice(0, middle));
    tree.right = sortedArrayToBST(nums.slice(middle + 1));

    return tree;
};