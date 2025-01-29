/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let subHead = head;

    while (subHead && subHead.next && subHead.next.next) {
        head = head.next;
        subHead = subHead.next.next;
        
        if (head === subHead) {
            return true;
        }
    }
    
    return false;
};