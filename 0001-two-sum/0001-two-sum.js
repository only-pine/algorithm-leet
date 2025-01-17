/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let index = 0; index < nums.length; index++) {
        let subIndex = index + 1;

        while (subIndex < nums.length) {
            if (nums[index] + nums[subIndex] === target) {
                return [index, subIndex];
            }
            subIndex ++;
        }
    }
};