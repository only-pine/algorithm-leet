/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let medium = nums.length / 2;
    const map = new Map();
    
    for (const num of nums) {
        map.set(num, map.get(num) + 1 || 1);
    }

    let maxElement = 0;

    for (const element of map.keys()) {
        if (map.get(element) >= medium) {
            maxElement = element;
        }
    }

    return maxElement;
};