/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 /*
 .val : 포인터가 현재 위치한 노드의 값 
 .next : 다음 노드를 가리키는 포인터
 .next로 이동하면 노드를 앞으로 이동하고, 한 번 이동한 노드로는 다시 돌아갈 수 없다.

 1) currentNode.next = list.val; 를 하지 않고,
 2) currentNodex.next = list;를 하는 이유
 -> 1)의 경우는 단순 값만 할당하는 것으로, 
 2)으로 해야, 노드 전체를 연결하여 노드 간의 연결이 이루어지고 포인터도 함께 유지할 수 있다.
 
currentNode.next = list1 || list2; 를 해야하는 이유는 list1과 list2의 길이가 동일하지 않을 수 있기 때문에,
하나의 list가 null이 된다면, 그 이후엔 다른 list의 노드들을 전체 할당해줘야 하기 때문이다. 

반환값을 newList 아닌 newList.next로 해줘야 처음 ListNode 선언한 0이 포함되지 않는다.
 */

var mergeTwoLists = function(list1, list2) {
    let currentNode = new ListNode(0, null);
    let newList = currentNode;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }

        currentNode = currentNode.next;
    }

    currentNode.next = list1 || list2;

    return newList.next;
};