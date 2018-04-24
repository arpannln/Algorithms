/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    //find tranvserse
    for (var i = 0; i < matrix.length; i++) {
        for (var j = i + 1; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    //reverse transverse
    matrix = matrix.map( (el) => el.reverse() );

};
