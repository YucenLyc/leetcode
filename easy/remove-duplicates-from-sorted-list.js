// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.


//Definition for singly-linked list 
// function listNode(val, next) {
//   this.val = (val === undefined? 0:val)
//   this.next = (next === undefined? 0:next)
// }

function deleteDuplicates(head) {
  let current = head; 

  while (current) {
    while (current.next && current.val === current.next) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return head;
};

head = [1,1,2]
console.log(deleteDuplicates(head));

