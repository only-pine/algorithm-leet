/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const map = new Map();
    const result = [];

    for (let index = 0; index < groupSizes.length; index++) {
        let size = groupSizes[index];

        if (map.has(size)) {
            map.get(size).push(index);
        } else {
            map.set(size, [index]);
        }

        if (size === map.get(size).length) {
            result.push(map.get(size));
            map.set(size, []);
        }
    }

    return result;
};