/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  let answer = [];

  for (let i = 0; i < nums.length; ++i) {
    const diff = target - nums[i];

    if (diff in map) {
      answer = [map[diff], i];
      break;
    }

    map[nums[i]] = i;
  }

  return answer;
};
