/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mapIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
        mapIndex.set(nums[i], i);
    }
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        // console.log(mapIndex)
        if (mapIndex.has(complement) && mapIndex.get(complement) != i) {
            return [i, mapIndex.get(complement)];
        }
    }
    return false;
};


console.log(twoSum([2, 7, 11, 15],9))
