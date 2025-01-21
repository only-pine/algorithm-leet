/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let max = 0;
    let diff = 0;

    prices.forEach((price, index) => {
        if (min > price) {
            if (max - min > 0 ) {
                diff = Math.max(max - min, diff);
            }

            min = price;
            max = 0;
        } else {
            if (price > max) {
                max = price;
            }
        }
    });

    if (diff > (max - min)) {
        return diff;
    }

    return max - min;
};