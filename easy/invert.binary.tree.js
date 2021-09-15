// Given the root of a binary tree, invert the tree, and return its root.

const invertTree = function(root) {
  if (!root || !root.left && !root.right) {
      return root;
  };
  const oldLeft = root.left;
  root.left = root.right;
  root.right = oldLeft;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};
// test case:
 root = [4, 2, 7, 1, 3, 6, 9];
 invertTree(root);  //output = [4, 7, 2, 9, 6, 3, 1]