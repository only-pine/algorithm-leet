/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let index = m; index < nums1.length; index++) {
        nums1[index] = nums2[index - m];

        let a = index - 1, b = index;
        while (nums1[a] > nums1[b]) {
            [nums1[a], nums1[b]] = [nums1[b], nums1[a]];
            a -= 1, b -=1;
        }
    }
};