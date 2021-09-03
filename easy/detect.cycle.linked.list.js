// create a single linked list: 

const hasCycle = function(head) {
  if (head === null) {
      return false;
  };

  let fast = head.next;
  let slow = head;


  while (fast != null && slow != null && fast.next != null) {
      // check it there's an end: 
      if (fast === slow) {
          return true;
      }
      fast = fast.next.next;
      slow = slow.next;
  }
  return false;
};