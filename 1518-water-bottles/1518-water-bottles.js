/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let rest = 0;
    let share = 0;
    let total = numBottles;

    while (numBottles >= numExchange) {
        rest = numBottles % numExchange;
        share = Math.floor(numBottles / numExchange);

        total += share;
        numBottles = share + rest;
    }

    return total;
};