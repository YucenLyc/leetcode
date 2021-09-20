// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

const isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  } else if (!p || !q) {
    return false;
  }
  return (p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
};

// test case: 
p = [1, 2, 3]
q = [1, 2, 3]
isSameTree(p, q);