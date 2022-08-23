/*
Detect a cycle in a linked list. Note that the head pointer may be 'null' if the list is empty.

A Node is defined as: 
    class Node {
        int data;
        Node next;
    }
*/

boolean hasCycle(Node head) {
    Set<Node> set = new HashSet<>();
    while(head!=null){
        set.add(head);
        if(set.contains(head.next)){
            return true;
        }
        head = head.next;
    }
    return false;
}