// function ListNode(val,next) {
//   this.val = (val === undefined ? 0 : val)
//   this.next = (next === undefined ? null : next)
// }


const mergeTwoLists = function(l1, l2) {

  if (!l1 && !l2) {
    return null;
  } else if (!l1 && l2){
    return l2;
  } else if (l1 && !l2) {
    return l1;
  } else if (l1.val < l2.val){
    let currentVal = l1;
    //console.log(currentVal)
    currentVal.next = mergeTwoLists(l1.next, l2);
    console.log(currentVal)
    return currentVal;

  } else {
    let currentVal = l2;
    currentVal.next = mergeTwoLists(l1, l2.next);
    console.log(currentVal)
    return currentVal;
  }
  
}
l1 = [1, 3, 9]
l2 = [1, 3, 10]
mergeTwoLists(l1,l2)

 //check if both lists have numbers:

//  if (!l1){
//   return l2;
// }
// if (!l2) {
//   return l1;
// }
// if(!l1 && !l2){
//   return null;
// }

// //compare two lists:
// let result = [];
// for (let i = 0; i < l1.length; i++){
//  for (let j = 0; j < l2.length; j++) {
//    if (l1[i] < l2[j]){
//      //console.log(l1[i], l2[j])
//      result.push(l1[i]);
//      //console.log("this is the result inside the first if:", result);
//      i++;
//      if (l1[i] > l2[j]){
//        result.push(l2[j]);
//      }
//    } else if  (l1[i] === l2[j]){
//     //console.log(l1[i], l2[j])
//      result.push(l1[i], l2[j])
//      i++;
//     } else {
//      result.push(l2[j]);
//      console.log("this is the case l2 is bigger:", result);
//      j++;
//    }
//  }
// }
// console.log(result);

//compare two lists:
let result = [];
if (l1.val <= l2.val){
  console.log
  let currentEle = l1;
  currentEle.next = mergeTwoLists(l1.next, l2);
  //console.log("this is the console inside the first if:", currentEle);
  return currentEle;
} else {
  console.log(l1.val); 
  console.log(l2.val);
  let currentEle = l2;
  currentEle.next = mergeTwoLists(l2, l1.next);
  //console.log("this is the console inside the second if:",currentEle);
  return currentEle;
}

