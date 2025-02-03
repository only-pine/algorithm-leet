/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const map = new Map();

    for (const char of magazine) {
        map.set(char, map.get(char) === undefined ? 1 : map.get(char) + 1);
    }

    for (const char of ransomNote) {
        if (map.get(char) !== undefined && map.get(char) > 0) {
            map.set(char, map.get(char) - 1);
        } else {
            return false;
        }
    }

    return true;
};