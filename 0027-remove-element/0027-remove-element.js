/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === val) {
            nums[index] = -1;
        } else {
            k++;
        }
    }

    nums.sort((a, b) => b - a);

    return k;
};