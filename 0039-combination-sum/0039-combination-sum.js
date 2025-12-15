/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const len = candidates.length;
    const result = [];

    function check(index, sum, path) {
        if (sum > target) return;
        if (sum === target) {
            result.push(path.slice());
            return;
        }

        for (let i = index; i < len; i++) {
            let value = candidates[i];

            path.push(value);
            check(i, sum + value, path);
            path.pop();
        }
    }

    check(0, 0, []);

    return result;
};