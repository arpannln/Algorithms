// Input:
// A = [ 1, 2]
// B = [-2,-1]
// C = [-1, 2]
// D = [ 0, 2]
//
// Output:
// 2
//
// Explanation:
// The two tuples are:
// 1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let count = 0;
    let hash1 = {};


    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
           hash1[A[i] + B[j]] ? hash1[A[i] + B[j]] += 1 : hash1[A[i] + B[j]] = 1;
        }
    }



    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
           let comp = - (C[i] + D[j]);
           if (hash1[comp]) {
               count += hash1[comp];
           }
        }
    }

    return count;
};
