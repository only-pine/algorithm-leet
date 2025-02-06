/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let startVersion = 1;
        let endVersion = n;
        let memory;

        while (startVersion <= endVersion) {
            let version = Math.ceil((startVersion + endVersion) / 2);

            if (isBadVersion(version)) {
                memory = version;
                endVersion = version - 1;
            } else {
                startVersion = version + 1;
            }
        }

        return memory;
    };
};