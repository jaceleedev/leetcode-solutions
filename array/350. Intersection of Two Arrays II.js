/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const map = {};

  for (const num of nums1) {
    map[num] = (map[num] || 0) + 1;
  }

  const answer = [];

  for (const num of nums2) {
    if (map[num] > 0) {
      answer.push(num);
      --map[num];
    }
  }

  return answer;
};
