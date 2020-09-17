/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0);
    // console.log(dummyHead);
    dummyHead.next = head;
    // console.log(dummyHead);
    let currentPositionsOfList = dummyHead;
    let pointer = dummyHead;
    let counter = 0;

    while(currentPositionsOfList) {
        if (n < counter) pointer = pointer.next;

        counter ++;
        currentPositionsOfList = currentPositionsOfList.next;
        // console.log(pointer)
    }

    pointer.next = pointer.next.next;

    return dummyHead.next;
};


///console.log(removeNthFromEnd([1,2,3,4,5],2));