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
    if (!head || !head.next) return false
    // create a slow pointer
    let slow = head
    // create a fast pointer
    let fast = head.next
    // while fast and fast.next exist
    while (fast && fast.next) {
        // move slow by 1 step
        slow = slow.next
        // move fast by 2 steps
        fast = fast.next.next
        // return true if slow === fast
        if (slow === fast) return true
    }
    return false
};