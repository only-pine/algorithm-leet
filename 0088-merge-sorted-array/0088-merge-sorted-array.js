/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index = 0, subIndex = 0;

    while (index < nums1.length) {
        if (nums1[index] > nums2[subIndex] || index >= m + subIndex) {
            nums1.splice(index, 0, nums2[subIndex]);
            nums1.pop();
            console.log(nums1);
            subIndex++;
        }
        index++;
    }
};