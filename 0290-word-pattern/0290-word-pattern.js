/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const map = new Map();
    const sArray = s.split(" ");
    const patternSet = new Set(pattern);
    const sSet = new Set(sArray);

    if (patternSet.size !== sSet.size || pattern.length !== sArray.length) {
        return false;
    }

    for (let index = 0; index < sArray.length; index++) {
        if (!map.get(pattern[index])) { 
            map.set(pattern[index], sArray[index]);
        } else if (map.get(pattern[index]) !== sArray[index]) {
            return false;
        } 
    }

    return true;
};