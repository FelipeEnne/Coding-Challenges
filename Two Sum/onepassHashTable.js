/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mapIndex = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (mapIndex.has(nums[i])) {
            return [mapIndex.get(nums[i]), i];
        }
        
        mapIndex.set(target - nums[i], i);

    }
    return false;
};

console.log(twoSum([2, 7, 11, 15],9))