/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head == null || k == 0) {return head};
    
    let leng = 0;
    let cur = head;
    
    while(cur != null){
        leng++;
        cur = cur.next;
    }
    
    k = k % leng;
    
    
    if (k == 0) {return head};
    
    let dummy = new ListNode();
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;
    
    while(k != 0){
        fast = fast.next;
        k--;
    }
    
    while(fast.next != null){
        fast = fast.next;
        slow = slow.next;
    }
    
    
    
    let newHead = slow.next;
    //console.log(newHead)
    fast.next = dummy.next;
    //console.log(newHead)
    slow.next = null;
    //console.log(newHead)
    //console.log(fast.next)
    
    return newHead;
    
};