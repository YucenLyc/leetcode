// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e: from left to right, level by level)

const levelOrder = function (root) {
  let result = [];

  if (root === null) {
    return result;
  };

  // need to make a queue: 
  let queue = [];
  queue.push(root); // first, we add root to the queue

  while (queue.length > 0) {
    let row = [];
    let rowSize = queue.length;

    while (rowSize > 0) {
      let currentNode = queue.shift();

      if (currentNode.left !== null) { // add the left child to the queue if there is one
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) { // add the right child to the queue if there is one
        queue.push(currentNode.right)
      }

      row.push(currentNode.val)
      rowSize--;
    }
    result.push(row);
  }
  return result;
};

// test case: 
root = [3, 9, 20, null, null, 15, 7] // [[3], [9,20],[15,7]]
levelOrder(root);