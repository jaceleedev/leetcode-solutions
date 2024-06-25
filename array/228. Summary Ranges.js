/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) {
    return nums;
  }

  const answer = [];
  let start = nums[0];

  for (let i = 1; i <= nums.length; ++i) {
    if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
      if (start === nums[i - 1]) {
        answer.push(`${start}`);
      } else {
        answer.push(`${start}->${nums[i - 1]}`);
      }

      if (i < nums.length) {
        start = nums[i];
      }
    }
  }

  return answer;
};
