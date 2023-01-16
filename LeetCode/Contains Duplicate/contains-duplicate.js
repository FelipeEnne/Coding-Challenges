/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let map = new Map();

  for (let i = 0; nums.length > i; ++i) {
    if (!map.has(nums[i])) {
      map.set(nums[i], nums[i]);
    } else {
      return true;
    }
  }
  return false;
};
