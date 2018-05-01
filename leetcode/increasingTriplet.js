// public boolean increasingTriplet(int[] nums) {
// 	int x = Integer.MAX_VALUE;
// 	int y = Integer.MAX_VALUE;
//
// 	for (int i = 0; i < nums.length; i++) {
// 		int z = nums[i];
//
// 		if (x >= z) {
// 			x = z;// update x to be a smaller value
// 		} else if (y >= z) {
// 			y = z; // update y to be a smaller value
// 		} else {
// 			return true;
// 		}
// 	}
//
// 	return false;
// }

var increasingTriplet = function(nums) {
    let x = Number.MAX_SAFE_INTEGER;
    let y = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        let z = nums[i];

        if (x >= z) {
            x = z;
        } else if (y >= z) {
            y = z;
        } else {
            return true;
        }
    }

    return false;
};
