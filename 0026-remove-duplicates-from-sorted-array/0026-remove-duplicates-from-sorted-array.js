/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const map = new Map();
    const arrayLength = nums.length;
    let k = 0;

    for (let index = 0; index < arrayLength; index++) {
        if (nums[index] !== "_" && map.get(nums[index]) === undefined) {
            map.set(nums[index], k);
            k++;
        } else if (map.get(nums[index]) !== undefined) {
            nums[index] = "_";
        }
    }

    for (let subIndex = 0; subIndex < arrayLength; subIndex++) {
        if (nums[subIndex] !== "_") {
            let element = nums[subIndex];
            nums[map.get(element)] = element;
        }
    }

    return k;
};