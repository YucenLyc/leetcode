// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

const maxDepth = function (root) {
  if (root === null) {
    return 0;
  };
  let leftDepth = maxDepth(root.left)
  let rightDepth = maxDepth(root.right)

  if (leftDepth > rightDepth) {
    return leftDepth + 1;
  } else {
    return rightDepth + 1;
  }
};

// test case:
root = [1, null, 2];
maxDepth(root);