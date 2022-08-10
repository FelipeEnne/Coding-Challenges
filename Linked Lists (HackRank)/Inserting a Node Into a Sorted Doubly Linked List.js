

/*
 * Complete the 'sortedInsert' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_DOUBLY_LINKED_LIST llist
 *  2. INTEGER data
 */

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function sortedInsert(llist, data) {
  const llObj = new DoublyLinkedListNode(data);
  let node = llist;
  if(!node) return llObj; // empty list
  
  if(data < node.data){ // new data to bre prepended
      llObj.next = llist;
      llist = llObj
      return llist;
  }
  
  while(data > node.data){ // keep iterating till we find the new data's place
      
      if(!node.next){ // new data to be appended
          if(data>node.data){
              llObj.prev = node;
              node.next = llObj;
              return llist
          }
      }
      
      
      node = node.next;
  }
  // break the list and insert the new data
  const prev = node.prev;
  llObj.prev = prev;
  prev.next = llObj;
  llObj.next = node;
        
      
  return llist
}

