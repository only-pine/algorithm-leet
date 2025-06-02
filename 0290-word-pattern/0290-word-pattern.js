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
        if (!map.get(pattern[index])) { //map에 해당 키가 없는 경우, map에 키-쌍 저장함
            map.set(pattern[index], sArray[index]);
        } else if (map.get(pattern[index]) !== sArray[index]) { //map에 저장된 값과 배열의 값이 다른 경우
            return false;
        } 
    }

    return true;
};