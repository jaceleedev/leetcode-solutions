/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let answer = 0;

  for (const num of nums) {
    answer ^= num;
  }

  return answer;
};
