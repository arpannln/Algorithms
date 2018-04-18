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

var nodeCheck = new Node(6.5, null, null);

var node1 = new Node(1, null, null);
var node3 = new Node(3, null, null);
var node5 = new Node(5, null, null);
var node7 = new Node(7, nodeCheck, null);

var node2 = new Node(2, node1, node3);
var node6 = new Node(6, node5, node7);

var node4 = new Node(4, node2, node6);

const secondLargest = (head) => {
  if (head.right === null) return false;

  var parent = head;
  var curr = head.right;

  const largest = (node) => {
    if (node.right === null) return node;
    parent = node;
    curr = node.right;
    return largest(curr);
  };

  var first = largest(curr);

  if (first.left === null) {
    return parent.value;
  }
  else {
    return largest(first.left).value;
  }


};

console.log(secondLargest(node4)); //should return 6.5
