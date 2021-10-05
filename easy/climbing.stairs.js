// you're climbing a staircase. It takes N steps to reach the top
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? 

const climbStairs = function(n) {
  //saveReuslts is the map that holds all the valid path
 let countingFunc = function(starsRemainig, savedResults) {
    if (starsRemainig < 0) {
      return 0;
    }
    if (starsRemainig === 0) {
      return 1;
    }
    if (savedResults[starsRemainig]) {
      return savedResults[starsRemainig];
    }
    savedResults[starsRemainig] = countingFunc(starsRemainig - 1, savedResults) + countingFunc(starsRemainig - 2, savedResults);

    return savedResults[starsRemainig];
 }
 return countingFunc(n, {})
};

//test case: 
n = 3;
climbStairs(n); // expect output: 3