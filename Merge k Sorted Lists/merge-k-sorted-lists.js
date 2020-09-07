/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function(lists) {
    const merge = (l1, l2) => {
      if (!l1 || !l2) return l1 || l2;
      let node = new ListNode(0);
      const root = node;

      while (l1 && l2) {
        if (l1.val <= l2.val) {
          node.next = l1;
          l1 = l1.next;
        } else {
          node.next = l2;
          l2 = l2.next;
        }
        node = node.next;
      }
      if (l1) node.next = l1;
      if (l2) node.next = l2;
      return root.next;
    }
    
    let root = lists[0];
    for (let i = 1; i < lists.length; i++) {
      root = merge(root, lists[i]);
    }
    
    return root || null;
};








function mergeTwoLists(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
  
    const curr = new ListNode(0);
    let t = curr;
  
    while (l1 && l2) {
      if (l1.val < l2.val) {
        t.next = l1;
        l1 = l1.next;
      } else {
        t.next = l2;
        l2 = l2.next;
      }
  
      t = t.next;
    }
  
    t.next = l1 || l2;
  
    return curr.next;
}