/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = [];

    let pre = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] = pre;
        pre *= nums[i];
    }
    
    let post = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        answer[j] *= post;
        post *= nums[j];
    }

    return answer;
};