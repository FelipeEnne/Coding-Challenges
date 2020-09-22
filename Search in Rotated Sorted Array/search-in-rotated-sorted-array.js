/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums.length) return -1;
    
    let [l, r] = [0, nums.length-1];
    
    while (l < r) {
        
        let m = Math.trunc((l + r) / 2);
        if (nums[l] < nums[m]) {
            
            if (nums[l] <= target && target <= nums[m]) r = m;
            else l = m + 1;
            
        }
        else {
            
            if (nums[m+1] <= target && target <= nums[r]) l = m +1;
            else r = m;
        
        }
    }
    return (nums[l] == target)? l: -1;
};
