/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    for (let index = 0; index <= nums.length; index++) {
        sum += index;
    }

    let arraySum = nums.reduce((acc, cur)=> acc + cur);

    return sum - arraySum;
};