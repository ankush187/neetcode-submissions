/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let one = null;
        let two = head;

        while(two != null) {
            let next = two.next;
            two.next = one;
            one  = two;
            two = next;
        }

        return one;
    }
}
