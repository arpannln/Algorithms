var pathCounter = [[1]];
var uniquePaths = function(m, n) {
    if (pathCounter[m-1][n-1]) {
        return pathCounter[m-1][n-1];
    }

    //need to create difference of spots

    for (let i = pathCounter.length - 1; i < m; i++) {
      pathCounter.push([]);
    }

    for (let i = pathCounter.length - 1; i < m; i++) {
      for (let j = pathCounter[0].length; j < n; j++) {
        pathCounter[i][j] = pathCounter[i-1][j] + pathCounter[i][j-1];
      }
    }


    return pathCounter[m-1][n-1];
};

// def uniquePathsWithObstacles(A):
//
//     # create a 2D-matrix and initializing with value 0
//     paths = [[0]*len(A[0]) for i in A]
//
//     # initializing the left corner if no obstacle there
//     if A[0][0] == 0:
//         paths[0][0] = 1
//
//     # initializing first column of the 2D matrix
//     for i in range(1, len(A)):
//         if A[i][0] == 0:  // If not obstacle
//             paths[i][0] = paths[i-1][0]
//
//     # initializing first row of the 2D matrix
//     for j in range(1, len(A[0])):
//         if A[0][j] == 0:  // If not obstacle
//             paths[0][j] = paths[0][j-1]
//
//     for i in range(1, len(A)):
//       for j in range(1, len(A[0])):
//
//         # If current cell is not obstacle
//         if A[i][j] == 0:
//           paths[i][j] = paths[i-1][j] + paths[i][j-1]
//
//     # returning the corner value of the matrix
//     return paths[-1][-1]
//
//
// # Driver Code
// A = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]
// print(uniquePathsWithObstacles(A))
