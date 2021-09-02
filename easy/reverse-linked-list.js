/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

const reverseList = function(head) {
  // this is the new tail:
  let prev = null;
  let next = null;

  //keep updating head to be the next node in the chain:
  while (head != null) {
      // before mutating the next node, we need to store a reference to the original next node, which was 2 in the test case: 
      next = head.next;
      // 1 was originally pointing to 2, now it's pointing to null:
      head.next = prev;
      prev = head;
      head = next;
  }
  //console.log(prev)
  return prev;

};

// test case: 
head = [1, 2, 3, 4];
reverseList(head);