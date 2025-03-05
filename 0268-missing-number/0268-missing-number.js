/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let sum = (n * (n + 1)) / 2;
    let arraySum = nums.reduce((acc, cur) => acc + cur);

    return sum - arraySum;
};