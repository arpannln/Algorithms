//Given a bnary tree, design algorithm which creates list of all nodes
//at each depth
//         1
//      2     3
//    4  5  6   7
//linked lists -> 1, 2 -> 3, 4 -> 5 -> 6 -> 7


// BST
//      4
//   2    6
// 1  3  5  7
class Node {
  constructor (value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

var node1 = new Node(1, null, null);
var node3 = new Node(3, null, null);
var node5 = new Node(5, null, null);
var node7 = new Node(7, null, null);

var node2 = new Node(2, node1, node3);
var node6 = new Node(6, node5, node7);

var node4 = new Node(4, node2, node6);



function createLists(head) {
  if (head === null) return null;

  var stack = [head];
  var lists = [];

  while (stack.length !== 0) {

  }

}

function isValidBST(head) {
  if (head === null) return;
  if (head.left) {
    if (head.left.value > head.value) {
      return false;
    }
    return isValidBST(head.left);
  }
  if (head.right) {
    if (head.right.value <= head.value) {
      return false;
    }
    return isValidBST(head.right);
  }


  return true;
}

console.log(isValidBST(node1));
