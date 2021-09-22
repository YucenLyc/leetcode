// Given a binary tree, determine if it is height-balanced. 
// for this problem, a height-balanced binary tree is defined as: a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

const isBalanced = function (root){
  if (root === null) {
    return true; 
  };
  // if unbalanced, return -1:
  return getHeight(root) !== -1;
};
// each node is itself a binary tree:
let getHeight = function (node) {
  if (node === null) {
    return 0;
  }
  // it will start checking from the "bottom" of the entire BT:
  let left = getHeight(node.left);
  let right = getHeight(node.right);
  
  //checking if any of the children is unbalanced:
  // we also return -1 when the difference btw the height is greater than 1 => unbalanced
  if (left === -1 || right === -1 || Math.abs(left - right) > 1){
    return -1;
  };
  // +1 is calculating the height of the tree
  return Math.max(left, right) + 1;
};

root = [2,3,4,null,null,2,6];

