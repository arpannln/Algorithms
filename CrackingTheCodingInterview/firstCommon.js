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

const findCommonAncestor = () => {
  
}
