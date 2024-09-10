/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    if (head.next === null) {
        return head;
    }

    function getGCD(A, B) {
        while (A % B !== 0) {
            var C = A % B;
            A = B;
            B = C;
        }
        return B;
    }

    const listNode = head;
    let currentNode = head;

    while (currentNode.next !== null) {
        currentNode.next = new ListNode(getGCD(currentNode.val, currentNode.next.val), currentNode.next);
        currentNode = currentNode.next.next;
    }

    return listNode;
};