/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  ///*
  let jump = 0;

  for (let i = 0; nums.length > i; i++) {
    if (jump < i) return false;
    if (jump < i + nums[i]) {
      jump = i + nums[i];
    }
  }

  return true;
  //*/
};
