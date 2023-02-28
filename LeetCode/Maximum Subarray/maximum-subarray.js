/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function (nums) {
  let result = Number.NEGATIVE_INFINITY;
  let last = 0;

  for (let i = 0; nums.length > i; i++) {
    last = nums[i];
    let j = i + 1;
    if (nums[i] > result) {
      result = nums[i];
    }
    while (j < nums.length) {
      let adding = last + nums[j];
      last += nums[j];
      if (adding > result) {
        result = adding;
      }
      j++;
    }
  }
  return result;
};

// -------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  for (let i = 1; nums.length > i; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }

  return Math.max(...nums);
};
