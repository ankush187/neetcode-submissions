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
     * @return {void}
     */
    reorderList(head) {
        if(head === null || head.next == null) return head;

        // middle of linked list;

        let p1 = head;
        let p2 = head;

        while(p2.next != null && p2.next.next != null) {
            p1 = p1.next;
            p2 = p2.next.next
        }

        // reverse from half
        let middle = p1;

        let prev = null;
        let current = middle.next;
        middle.next = null;

        while(current) {
            let nextNode = current.next; // Store the next node safely
            current.next = prev;         // Reverse the pointer
            prev = current;              // Move prev forward
            current = nextNode;          // Move current forward
        }

        // merge the 2 parts start to mid and mid.next to end


        let list1 = head;
        let list2 = prev;

        while(list2 != null) {
            let temp1 = list1.next;
            let temp2 = list2.next;

            list1.next = list2;
            list2.next = temp1;

            list1 = temp1;
            list2 = temp2
            
        }
    }


}
