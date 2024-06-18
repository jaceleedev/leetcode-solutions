/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; ++right) {
    if (map[s[right]] !== undefined) {
      left = Math.max(left, map[s[right]] + 1);
    }
    map[s[right]] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
