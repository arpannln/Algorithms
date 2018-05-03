// # Returns the maximum value that can be put in a knapsack of
// # capacity W
// def knapSack(W , wt , val , n):
//
//     # Base Case
//     if n == 0 or W == 0 :
//         return 0
//
//     # If weight of the nth item is more than Knapsack of capacity
//     # W, then this item cannot be included in the optimal solution
//     if (wt[n-1] > W):
//         return knapSack(W , wt , val , n-1)
//
//     # return the maximum of two cases:
//     # (1) nth item included
//     # (2) not included
//     else:
//         return max(val[n-1] + knapSack(W-wt[n-1] , wt , val , n-1),
//                    knapSack(W , wt , val , n-1))
//To consider all subsets of items, there can be two cases for every item: (1) the item is included in the optimal subset, (2) not included in the optimal set.
// Therefore, the maximum value that can be obtained from n items is max of following two values.
// 1) Maximum value obtained by n-1 items and W weight (excluding nth item).
// 2) Value of nth item plus maximum value obtained by n-1 items and W minus weight of the nth item (including nth item).
//
// If weight of nth item is greater than W, then the nth item cannot be included and case 1 is the only possibility.
