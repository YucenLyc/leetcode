// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// lowest common ancestor: is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself)

const lowestCommonAncestor = function (root, p, q) {
  if (root.val > p.val && root.val > q.val) {
    // checking the left side:
    return lowestCommonAncestor(root.left, p, q);
  } else if (root.val < p.val && root.val < q.val) {
    // checking the right side:
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};

// test case:
root = [6,2,8,0,4,7,9,null,null,3,5]
p = 2
q = 8
lowestCommonAncestor(root, p, q);
z