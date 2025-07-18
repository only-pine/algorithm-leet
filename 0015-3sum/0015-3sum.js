/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        let start = i + 1, end = nums.length - 1, sum = 0;

        while (start < end) {
            sum = nums[i] + nums[start] + nums[end];

            if (sum === 0) {
                result.push([nums[i], nums[start], nums[end]]);

                while (nums[start] === nums[start + 1]) {
                    start++;
                }
                while (nums[end] === nums[end - 1]) {
                    end--;
                }

                start++;
                end--;
            } else if (sum < 0) {
                start++;
            } else {
                end--;
            }
        }

        while (nums[i] === nums[i + 1]) {
            i++;
        }
    }

    return result;
};