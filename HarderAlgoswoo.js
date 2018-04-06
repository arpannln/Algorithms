//find if two linked lists intersect or not
//store the first linked list in a hash then run through the next list
//return the first match
//if no match return null
function intersectingLists(head1, head2) {
  let firstList = {};
  let runner1 = head1;
  if (!head1) return null;
  while (runner1) {
    firstList[runner1.value] = true;
    runner1 = runner1.next;
  }
  console.log(firstList);
  let runner2 = head2;
  if (!head2) return null;

  while (runner2) {
    if (firstList[runner2.value]) return runner2.value;
    runner2 = runner2.next;
  }

  return null;
}
var node7 = {value: 7, next: null};
var node6 = {value: 6, next: node7};
var node5 = {value: 5, next: node6};
var node4 = {value: 4, next: node5};
var node3 = {value: 3, next: node4};
var node2 = {value: 2, next: node3};
var node1 = {value: 1, next: node2};


var node11 = {value: 11, next: node4};
var node10 = {value: 10, next: node11};
var node9 = {value: 9, next: node10};
var node8 = {value: 8, next: node9};

//test cases
intersectingLists(node1, node8); // should produce value 4

intersectingLists(node1, node2); // should produce value 2

intersectingLists(node1, node10); // should produce null
