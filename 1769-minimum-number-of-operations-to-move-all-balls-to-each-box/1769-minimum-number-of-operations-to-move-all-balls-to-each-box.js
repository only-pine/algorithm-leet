/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const result = new Array(boxes.length).fill(0);
    let index = 0, subIndex = 0;

    while (boxes[index] !== undefined) {
        while (boxes[subIndex] !== undefined) {
            if (boxes[subIndex] === "1" && index !== subIndex) {
                result[index] += Math.abs(index - subIndex);
            }
            subIndex++;
        }

        index += 1;
        subIndex = 0;
    }

    return result;
};