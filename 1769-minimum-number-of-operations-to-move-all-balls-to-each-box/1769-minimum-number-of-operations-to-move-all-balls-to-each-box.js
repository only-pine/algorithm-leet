/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const length = boxes.length;
    const result = new Array(length).fill(0);
    
    for (let index = 0; index < length; index++) {
        for (let subIndex = 0; subIndex < length; subIndex++) {
            if (index !== subIndex && boxes[subIndex] === "1") {
                result[index] += Math.abs(index - subIndex);
            }
        }
    }

    return result;
};