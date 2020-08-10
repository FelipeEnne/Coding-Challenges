/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let overTen = false;
    let runner1 = l1;
    let runner2 = l2;
    let head;
    let mainRunner;
      
    while (runner1 || runner2 || overTen){
      // console.log(runner1 || runner2 || overTen)
      let sum = overTen ? 1 : 0;
        
      if (runner1){
        sum += runner1.val;
        runner1 = runner1.next;
      }
        
      if (runner2){
        sum += runner2.val;
        runner2 = runner2.next;
      }
        
      let newNode = new ListNode(sum%10)
      
      if (!head){
        head = newNode;
        mainRunner = head;
      } else {
        mainRunner.next = newNode;
        mainRunner = newNode;
      }
      overTen = sum >= 10 ? true : false;
      
    }
    return head;
  };