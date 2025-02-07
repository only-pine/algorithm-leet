/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let share = Math.floor(n / 2);
    let ways = 0;

    function multiply(num) {
        let total = 1;
        for (let index = 1; index <= num; index++) {
            total *= index;
        }

        return total;
    }

    for (let count2 = 0; count2 <= share; count2++) {
        let count1 = n - (count2 * 2);

        let count1Sum = multiply(count1);
        let count2Sum = multiply(count2);
        let countSum = multiply(count1 + count2);

        ways += (countSum / (count1Sum * count2Sum));
    }

    return ways;
};