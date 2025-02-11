/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const array = new Array(amount + 1).fill(Infinity);
    array[0] = 0;

    for (const coin of coins) {
        for (let num = coin; num < array.length; num++) {
            array[num] = Math.min(array[num], array[num - coin] + 1);
        }
    }

    return array[amount] === Infinity ? -1 : array[amount];
};