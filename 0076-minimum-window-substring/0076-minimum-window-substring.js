/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) return "";

    const tMap = new Map();
    for (const char of t) {
        tMap.set(char, tMap.get(char) + 1 || 1);
    }
    let tMapLength = tMap.size;

    let minWord = "";
    let left = 0, right = 0;

    while (right < s.length && left <= right) {
        if (tMap.has(s[right])) {
            tMap.set(s[right], tMap.get(s[right]) - 1);

            if (tMap.get(s[right]) === 0) tMapLength--;
        }

        while (tMapLength === 0) {
            let word = s.substring(left, right + 1);

            if (minWord === "" || (minWord.length && minWord.length > word.length)) {
                minWord = word;
            }

            if (tMap.has(s[left])) {
                if (tMap.get(s[left]) === 0) tMapLength++;
                tMap.set(s[left], tMap.get(s[left]) + 1);
            }

            left++;
        }

        right++;
    }  

    return minWord;
};