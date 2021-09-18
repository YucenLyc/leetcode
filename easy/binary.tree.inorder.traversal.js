// Given the root of a binary tree, return the inorder traversal of its nodes' values:

const inorderTraversal = function (root) {
  let result = [];
  let stack = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left
    } else {
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    }

  }
  return result;
};

//test case: 
root = [1, null, 2, 3]
inorderTraversal(root); //[1, 3, 2]