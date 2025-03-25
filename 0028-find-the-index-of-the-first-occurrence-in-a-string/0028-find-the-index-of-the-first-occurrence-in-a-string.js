/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack.length < needle.length) {
        return -1;
    }

    for (let index = 0; index < haystack.length; index++) {
        if (haystack[index] === needle[0]) {
            let subIndex = 0;

            while (subIndex < needle.length) {
                if (haystack[index + subIndex] === needle[subIndex]) {
                    subIndex++;

                    if (subIndex === needle.length) return index;
                } else {
                    subIndex = needle.length;
                }
            }
        }
    }

    return -1;
};