/*
You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m-1][n-1]). The robot can only move either down or right at any point in time.

An obstacle and space are marked as 1 or 0 respectively in grid. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to 2 * 109.

Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
*/

var obstacleGrid = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
];

// var obstacleGrid = [[0, 0]];
// var obstacleGrid = [[1, 0]];
// var obstacleGrid = [
//   [0, 0, 0, 0],
//   [0, 1, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 1, 0],
//   [0, 0, 0, 0]
// ];

// var obstacleGrid = [
//   [0, 0],
//   [1, 1],
//   [0, 0]
// ];

// var obstacleGrid = [
//   [0],
//   [1],
//   [0],
//   [0],
//   [0],
//   [0],
//   [0],
//   [0],
//   [0],
//   [0],
//   [0],
//   [0],
//   [1],
//   [0],
//   [0],
//   [0],
//   [0],
//   [1],
//   [0],
//   [0],
//   [0],
//   [0],
//   [0],
//   [0],
//   [0],
//   [0],
//   [0],
//   [0],
//   [1],
//   [1],
//   [0],
//   [1],
//   [0],
//   [0],
//   [1],
//   [0],
//   [0],
//   [0],
//   [0],
//   [1]
// ];

var uniquePathsWithObstacles = function (obstacleGrid) {
  var width = obstacleGrid[0].length;
  var height = obstacleGrid.length;

  if (
    obstacleGrid === null ||
    obstacleGrid.length === 0 ||
    obstacleGrid[0].length === 0 ||
    obstacleGrid[0][0] === 1
  ) {
    return 0;
  }

  if (obstacleGrid[0][0] === 0) {
    obstacleGrid[0][0] = 1;
  }

  // Traverse thru columns to find the path
  for (var i = 1; i < width; i++) {
    if (obstacleGrid[0][i] === 1) {
      obstacleGrid[0][i] = 0;
    } else {
      obstacleGrid[0][i] = obstacleGrid[0][i - 1];
    }
  }

  // Traverse thru rows to find the path
  for (var j = 1; j < height; j++) {
    if (obstacleGrid[j][0] === 1) {
      obstacleGrid[j][0] = 0;
    } else {
      obstacleGrid[j][0] = obstacleGrid[j - 1][0];
    }
  }

  // Traverse thru other grids to find path
  for (var a = 1; a < height; a++) {
    for (var b = 1; b < width; b++) {
      if (obstacleGrid[a][b] === 1) {
        obstacleGrid[a][b] = 0;
      } else {
        obstacleGrid[a][b] = obstacleGrid[a - 1][b] + obstacleGrid[a][b - 1];
      }
    }
  }

  return obstacleGrid[height - 1][width - 1];
};

console.log(uniquePathsWithObstacles(obstacleGrid));
