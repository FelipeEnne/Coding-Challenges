/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    dfs(head);
};

const dfs = node => {
    if(!node || !node.next || !node.next.next) return;
    
    let end = node;
    let next = node.next;
    let prev;
    
    while (end.next) {
        prev = end;
        end = end.next;
    }

    node.next = end;
    end.next = next;
    prev.next = null

    dfs(next);
}