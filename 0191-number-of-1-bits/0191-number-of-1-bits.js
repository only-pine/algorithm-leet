/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let binaryString = n.toString(2);
    let setBits = 0;

    for (const char of binaryString) {
        if (char === "1") setBits++;
    }
    
    return setBits;
};