/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let result =  nums.length;
    
    for(const num in nums){
        result = result ^ num ^ nums[num]
    }
    return result
};