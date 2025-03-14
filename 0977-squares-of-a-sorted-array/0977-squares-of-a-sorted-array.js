/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // for (let index = 0; index < nums.length; index++) {
    //     nums[index] = Math.abs(nums[index] ** 2);
    // }

    // return nums.sort((a, b) => a - b);

    return nums.map((num) => Math.abs(num ** 2)).sort((a, b) => a - b);
};