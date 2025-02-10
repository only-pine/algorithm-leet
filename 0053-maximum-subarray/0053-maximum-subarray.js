/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    const sums = [];

    for (const num of nums) {
        if (sum + num > 0) {
            sum += num;
            sums.push(sum);
        } else {
            if (num > 0) {
                sum = num;
                sums.push(sum);
            } else {
                sums.push(num);
                sum = 0;
            }
        }
    }

    return Math.max(...sums);
};