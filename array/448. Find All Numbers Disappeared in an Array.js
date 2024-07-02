/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const counts = Array.from({ length: nums.length }).fill(0);

  for (const num of nums) {
    ++counts[num - 1];
  }

  const missingNumbers = [];

  for (let i = 0; i < counts.length; ++i) {
    if (counts[i] === 0) {
      missingNumbers.push(i + 1);
    }
  }

  return missingNumbers;
};
