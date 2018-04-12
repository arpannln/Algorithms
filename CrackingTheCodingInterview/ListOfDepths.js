//Given a bnary tree, design algorithm which creates list of all nodes
//at each depth
//         1
//      2     3
//    4  5  6   7
//linked lists -> 1, 2 -> 3, 4 -> 5 -> 6 -> 7

class Node {
  constructor (value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

var node4 = new Node(4, null, null);
var node5 = new Node(5, null, null);
var node6 = new Node(6, null, null);
var node7 = new Node(7, null, null);

var node2 = new Node(2, node4, node5);
var node3 = new Node(3, node6, node7);

var node1 = new Node(1, node2, node3);


function createLists(head) {
  if (head === null) return null;

  var stack = [head];
  var lists = [];

  while (stack.length !== 0) {

  }

}
