/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // Boyer-Moore Voting Algorithm
  let count = 0;
  let element = 0;

  for (const num of nums) {
    if (count === 0) {
      element = num;
      count = 1;
    } else if (num === element) {
      ++count;
    } else {
      --count;
    }
  }

  return element;
};
