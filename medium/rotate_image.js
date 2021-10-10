// You are given an n x n 2D matrix representing an image, 
//rotate the image by 90 degrees (clockwise).

//You have to rotate the image in-place, 
//which means you have to modify the input 2D matrix directly. 
// DO NOT allocate another 2D matrix and do the rotation.

const rotate = function (matrix) {
  // turning the rows into columns: 
  let n = matrix.length;
  //console.log(n)
  for (let i = 0; i < n; i++) {
    for (let k = i; k < n; k++) {
      let temp = matrix[i][k];
      matrix[i][k] = matrix[k][i];
      matrix[k][i] = temp;
    }
  }
  for (let i = 0; i < n; i++) {
    for (let k = 0; k <(n/2); k++) {
      let temp = matrix[i][k];
      matrix[i][k] = matrix[i][n-1-k];
      matrix[i][n-1-k] = temp;
    }
  }
};

// test case:
matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix)
// expected output: [[7,4,1],[8,5,2],[9,6,3]]