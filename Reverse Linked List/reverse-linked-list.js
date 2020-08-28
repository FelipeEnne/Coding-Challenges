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
var reverseList = function(head) {
    let curr = head;
    let prev = null;
    let next = null;
    
    
    while(curr != null){
        next = curr.next;
        curr.next = prev;
        
        prev = curr
        curr = next
    }
        
    return prev 
};

var reverseList = function(head) {
    const reverseLL = (head) => {
        if(head === null || head.next === null) return head;
        const reversed = reverseLL(head.next);

        head.next.next = head;
        head.next = null;
        return reversed;
    }
    return reverseLL(head)
};