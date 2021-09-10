// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


const numIslands = function (grid) {
  if(grid === null || grid.length === 0) {
    return 0;
  }; 

  let numOfIslands = 0;

  for (let i = 0; i < grid.length; i++){
    for (let k = 0 ; k < grid[i].length; k++){
      if (grid[i][k] === '1') {
        numOfIslands += getIslandCount(grid, i, k);
      }
    }
  }
  return numOfIslands;
};

let getIslandCount = function (grid, i, k) {
  // keep track of connected islands ('1'):
  if (i < 0 || i >= grid.length || k < 0 || k >= grid[i].length || grid[i][k] === '0') {
    return 0;
  };

  // marking the visited node:
  grid[i][k] = '0';

  // finding sibling/connected islands:
   getIslandCount(grid, i+1, k);
   getIslandCount(grid, i-1, k);
   getIslandCount(grid, i, k+1);
   getIslandCount(grid, i, k-1);

   return 1;
};

