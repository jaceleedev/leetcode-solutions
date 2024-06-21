/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  const length = nums.length;

  for (let i = 0; i < length; ++i) {
    nums[i] += length * (nums[nums[i]] % length);
  }

  for (let i = 0; i < length; ++i) {
    nums[i] = Math.floor(nums[i] / length);
  }

  return nums;
};
