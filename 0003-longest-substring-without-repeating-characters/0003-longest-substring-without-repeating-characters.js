/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    const set = new Set();

    for (let index = 0; index < s.length; index++) {
        set.clear();
        let subIndex = index + 1;
        set.add(s[index]);
        let length = set.size;
        
        while (s[subIndex] && length === set.size) {
            set.add(s[subIndex]);
            length++;
            subIndex++;
        }

        max = Math.max(max, set.size);
    }

    return max;
};