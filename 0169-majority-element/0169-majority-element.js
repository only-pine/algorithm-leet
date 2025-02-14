/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let medium = nums.length / 2;
    const map = new Map();
    
    for (const num of nums) {
        map.set(num, map.get(num) + 1 || 1);

        if (map.get(num) > medium) return num;
    }
};