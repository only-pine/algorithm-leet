/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const resultArr = [];

    for (let index = 0; index < arr.length; index++) {
        if (fn(arr[index], index)) {
            resultArr.push(arr[index]);
        }
    }

    return resultArr;
};