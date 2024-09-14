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
var mergeNodes = function(head) {
    let newListNode = head.next;

    let sumListNode = new ListNode(0);
    let resultNode = sumListNode;

    while (newListNode !== null) {
        let sum = 0;

        while (newListNode.val !== 0) {
            sum += newListNode.val;
            newListNode = newListNode.next;
        } 

        newListNode = newListNode.next;

        sumListNode.next = new ListNode(sum);
        sumListNode = sumListNode.next;
    }

    return resultNode.next;
};