//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.




// two pointers solution:
const removeDuplicates = function(nums) {
  let i = 0;
  for(let j = 1; j < nums.length; j++){
      if(nums[i] != nums[j]){
        
          i++;
          nums[i]=nums[j];
          //console.log(nums)
      }
  }
  console.log("this is the one I want to see", nums)
  return i+1;
  
};

nums = [1, 1,2, 2, 2, 3, 4]
removeDuplicates(nums);


//ES6 Set solution: 
// const removeDuplicates = function (nums) {
//   //nums is an array of numbers
//   const result = Array.from(new Set(nums));
//   console.log(result);
//   //return result;
// };

// nums = [1, 1, 2, 3, 3, 4, 4, 5, 6]
// removeDuplicates(nums);
//expected output: 1, 2, 3, 4, 5, 6
