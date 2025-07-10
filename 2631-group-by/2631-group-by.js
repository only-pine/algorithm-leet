/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, cur) => {
        let result = fn(cur);

        if (acc[result] === undefined) {
            acc[result] = [];
        }

        acc[result].push(cur);

        return acc;
    }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */