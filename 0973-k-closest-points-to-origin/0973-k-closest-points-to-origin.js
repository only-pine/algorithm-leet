/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    if (points.length === k) {
        return points;
    }

    const map = new Map();
    const distanceResult = [];
    const result = [];

    for (const point of points) {
        let distance = Math.sqrt(point[0] ** 2 + point[1] ** 2);
        map.set(point, distance);
        distanceResult.push(distance);
    }

    distanceResult.sort((a, b) => a - b).slice(0, k);

    map.forEach((value, key) => {
        if (value >= distanceResult[0] && value <= distanceResult[k - 1]) {
            result.push(key);
        }
    })

    return result;
};