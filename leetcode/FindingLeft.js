//Given a binary tree, find the leftmost value in the last row of the tree.
//thinking we could do breadth first and keep putting left most children in an array
//return the last one that shows up?

//jk gotta check from right to left
var findBottomLeftValue = function(root) {
    let queue = [root];
    let leftMost = root.val;

    while (queue.length !== 0) {
        let current = queue.shift();
        if (current.right) {
            leftMost = current.right.val;
            queue.push(current.right);
        }
        if (current.left) {
            leftMost = current.left.val;
            queue.push(current.left);
        }
    }

    return leftMost;
};
