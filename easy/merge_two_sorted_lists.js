// recursive solution: 

const mergeTwoLists = function(l1, l2) {
  //if list1 is empty:
  if (!l1) return l2;

  //if list 2 is empty:
  if (!l2) return l1;

  //when the value in list1 is smaller:
  if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);

      return l1;
  }
  //otherwise:
  l2.next = mergeTwoLists(l2.next, l1);

  return l2;
};
l1 = [1, 2, 2, 3]
l2 = [3, 4, 5, 6, 3, 1]
mergeTwoLists(l1, l2)