/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let share = Math.floor(n / 2);
    let ways = 0;

    for (let count2 = 0; count2 <= share; count2++) {
        let count1 = n - (count2 * 2);

        let count1Array = Array(count1).fill().map((_, index) => index + 1);
        let count2Array = Array(count2).fill().map((_, index) => index + 1);
        let countArray = Array(count1 + count2).fill().map((_, index) => index + 1);

        let count1Sum = count1Array.length > 0 ? count1Array.reduce((acc, cur) => acc * cur) : 1;
        let count2Sum = count2Array.length > 0 ? count2Array.reduce((acc, cur) => acc * cur) : 1;
        let countSum = countArray.reduce((acc, cur) => acc * cur);

        ways += (countSum / (count1Sum * count2Sum));
    }

    return ways;
};