/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    const map = new Map();

    function checkNode (node) {
        if (!node) return;

        if (!map.has(node.val)) {
            map.set(node.val, new Node(node.val));
            map.get(node.val).neighbors = node.neighbors.map((neighbor) => checkNode(neighbor));
        }

        return map.get(node.val);
    }

    return checkNode(node);
};