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


// BST
//      4
//   2    6
// 1  3  5  7
//            8


var node8 = new Node(1, null, null);
var node9 = new Node(3, null, null);
var node10 = new Node(5, null, null);
var node11 = new Node(7, null, null);

var node12 = new Node(2, node1, node3);
var node13 = new Node(6, node5, node7);

var node14 = new Node(4, node2, node6);

const findCommonAncestor = (head, A, B) => {
  //one approach I could put all children of every element in the hash and then
  //traverse backwards until I find where both elements are included
  // this is shit come up with something

  // if it is a BST
  // do in order traversal pick first node that falls between the two
  // but hey its not a BST


};
