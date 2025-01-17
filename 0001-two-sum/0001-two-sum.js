/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map  = new Map();

    for (let index = 0; index < nums.length; index++) {
        const rest = target - nums[index];

        if (map.has(rest) && map.get(rest) !== index) {
            return [map.get(rest), index];
        }

        map.set(nums[index], index);
    }
};