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
var hasCycle = function(head,pos) {

    while(head) {
        if(head.val == "check"){
            return true;
        }
        head.val = "check";
        head = head.next;
    }
    return false
};


var hasCycleO = function(head,pos) {
    let mySet = new Set();
    
    while(head) {
        if(mySet.has(head)){
            return true;
        }
        mySet.add(head);
        head = head.next;
    }
    return false
};