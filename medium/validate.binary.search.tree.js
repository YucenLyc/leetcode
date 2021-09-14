// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

const isValidBST = function(root) {
  let prev = -Infinity;
  const inOrder = (root) => {
      if(!root) {
          return true
      }
     if(!inOrder(root.left) || root.val <= prev) {
          return false; 
     }
     prev = root.val;
     return inOrder(root.right);
  }
  return inOrder(root);
};

// test case:
root = [2,1,3]
isValidBST(root);