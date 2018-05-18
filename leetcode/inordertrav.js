// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:
//
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
//
// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?

/* hi
wow
 */

 //inorder -> left, yourself, then right;


const recursiveInOrder = (root) => {
  if (root === null) return;

  recursiveInOrder(root.left);
  console.log(root.value);
  recursiveInOrder(root.right);

};
