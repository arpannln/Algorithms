// Given a linked list, remove the n-th node from the end of list and return its head.
//
// Example:
//
// Given linked list: 1->2->3->4->5, and n = 2.
//
// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
//
// Given n will always be valid.
//
// Follow up:
//
// Could you do this in one pass?
//
var removeNthFromEnd = function(head, n) {
    if (head.next === null) {
        return null;
    }


    let runner = head;
    let current = head;


    for (let i = 0; i < n + 1; i++) {
      //they want the very first element deleted
        if (runner === null) {
            return head.next;
        }
        runner = runner.next;
    }


    while (runner !== null) {
        current = current.next;
        runner = runner.next;
    }


    if (current.next) {
        current.next = current.next.next;
    } else {
        current.next = null;
    }



    return head;
};
