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
