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
var mergeTwoLists = function(list1, list2) {
    // create a dummy list
    let resultList = new ListNode(0)
    // create a tail
    let tail = resultList

    // check if  the list1.val and list2.val are defined
    while (list1 !== null && list2 !== null) {
        // check if  the list1.val < list2.val
        if (list1.val <= list2.val) {
        // if it is set resultList.next as listX.val?
            tail.next = list1
                // move list1 and list2 pointers
            list1 = list1.next
        } else {
            tail.next = list2
                // move list1 and list2 pointers
            list2 = list2.next
        }
        tail = tail.next
    }

    // append the list that is not over
    tail.next = list1 || list2

    // return resultList.next which will be our new merged list
    return resultList.next
};
