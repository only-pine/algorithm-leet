/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = new Map();

    for (const num of nums) {
        if (map.get(num)) {
            return true;
        }
        map.set(num, 1);
    }

    return false;
};