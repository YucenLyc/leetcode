// Given the head of a linked list, remove the nth node from the end of the list and return its head.

const removeNthFromEnd = function(head, n) {
  if (head === null) {
      return null;
  };
  // creating a dummy node to take care of the case when the first node is the node we want to delete:
  let dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let count = 0;
  let tail = head;

  while (count < n) {
      tail = tail.next;
      count++;
  }
  let removeNode = head;
  let prevNode = dummyHead;

  while (tail) {
      tail = tail.next;
      removeNode = removeNode.next;
      preNode = preNode.next;
  }
  // when tail gets to null:
  // delete the removeNode 
  prevNode.next = removeNode.next;
  return dummyHead.next;
};