/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map();

    for (const num of nums) {
        if (map.has(num)) {
            map.delete(num)
        } else {
            map.set(num, 1);
        }
    }

    return map.keys().next().value;
};