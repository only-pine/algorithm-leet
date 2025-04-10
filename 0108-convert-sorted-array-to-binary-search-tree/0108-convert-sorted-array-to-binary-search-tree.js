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

    let middle = Math.floor(nums.length / 2);
    const tree = new TreeNode(nums[middle], sortedArrayToBST(nums.slice(0, middle)), sortedArrayToBST(nums.slice(middle + 1)));

    return tree;
};