/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const length = nums.length;
  let answer = (length * (length + 1)) / 2;

  for (const num of nums) {
    answer -= num;
  }

  return answer;
};
