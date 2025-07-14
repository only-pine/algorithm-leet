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
var sumEvenGrandparent = function(root) {
    function checkEvenNode(root, isEvenParent, isEvenGrandParent) {
        if (root === null) return sum;

        if (isEvenGrandParent) {
            sum += root.val;
        }

        isEvenGrandParent = isEvenParent;
        isEvenParent = root.val % 2 === 0;

        checkEvenNode(root.left, isEvenParent, isEvenGrandParent);
        checkEvenNode(root.right, isEvenParent, isEvenGrandParent);
    }

    let sum = 0;
    checkEvenNode(root, false, false);
    return sum;
};