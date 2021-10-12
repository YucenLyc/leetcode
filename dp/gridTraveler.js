// You're a traveler on a 2D grid. You begin in the top left corner and your goal is to travel to the bottom right corner. 
// You may ONLY move down or right 


const gridTraveler = (m, n, memo={}) => {
  // make sure m and n are separated:
  const key = m + ',' + n;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
}; 

// test case: 
console.log(gridTraveler(18,18))