/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let startIndex = 0;
    let endIndex = startIndex + 1;

    while (endIndex <= nums.length - 1) {
        if (nums[startIndex] === 0) {
            if(nums[endIndex] !== 0) {
                [nums[startIndex], nums[endIndex]] = [nums[endIndex], 0];
                startIndex++;
            }
            endIndex++;
        } else {
            startIndex++;
            endIndex++;
        }
    }

    return nums;
};
