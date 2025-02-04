/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const newIntervalArray = [];
    for (let index = newInterval[0]; index <= newInterval[1]; index++) {
        newIntervalArray.push(index);
    }

    let startInterval = null;
    let endInterval = null;
    const newArray = [];

    for (const interval of intervals) {
        let isIncluded = false;
        for (const element of newIntervalArray) {
            if (element >= interval[0] && element <= interval[1]) {
                if (startInterval === null) {
                    startInterval = interval[0];
                }
                isIncluded = true;
            } else {
                if (!(newInterval[0] < interval[0]
                    && newInterval[0] < interval[1]
                    && newInterval[1] < interval[0]
                    && newInterval[1] < interval[1]) &&
                    !(newInterval[0] > interval[0]
                    && newInterval[0] > interval[1]
                    && newInterval[1] > interval[0]
                    && newInterval[1] > interval[1])
                    ) {
                    if (startInterval === null) {
                        startInterval = Math.min(interval[0], newInterval[0]);
                    }
                    isIncluded = true;
                }
            }
        }

        if (startInterval !== null && isIncluded) {
            endInterval = Math.max(newInterval[1], interval[1]);
        }
        if (!isIncluded) {
            newArray.push(interval);
        }
    }

    if (startInterval !== null && endInterval !== null) {
        newArray.push([startInterval, endInterval]);
    } else {
        newArray.push(newInterval);
    }

    return newArray.sort((a, b) => a[0] - b[0]);
}; 