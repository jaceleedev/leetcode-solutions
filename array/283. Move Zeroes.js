/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let notZeroIndex = 0;

  for (const num of nums) {
    if (num !== 0) {
      nums[notZeroIndex] = num;
      ++notZeroIndex;
    }
  }

  for (let i = notZeroIndex; i < nums.length; ++i) {
    nums[i] = 0;
  }

  return nums;
};
