/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let number = 0;

    while (number * number < x) {
        number++;
    }

    if (number * number === x) {
        return number;
    }

    return number - 1;
};