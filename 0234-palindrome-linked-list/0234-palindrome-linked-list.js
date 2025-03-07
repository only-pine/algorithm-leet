/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const array = [];
    while (head !== null) {
        array.push(head.val);
        head = head.next;
    }

    let left = 0, right = array.length - 1;
    while (left < right && array[left] === array[right]) {
        left++;
        right--;
    }

    return array[left] === array[right];
};