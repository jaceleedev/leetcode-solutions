/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const m = nums1.length;
  const n = nums2.length;
  let left = 0;
  let right = m;
  const half = Math.floor((m + n + 1) / 2);

  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = half - i;

    if (i > 0 && nums1[i - 1] > nums2[j]) {
      right = i - 1;
    } else if (i < m && nums1[i] < nums2[j - 1]) {
      left = i + 1;
    } else {
      let leftMax;

      if (i === 0) {
        leftMax = nums2[j - 1];
      } else if (j === 0) {
        leftMax = nums1[i - 1];
      } else {
        leftMax = Math.max(nums1[i - 1], nums2[j - 1]);
      }

      if ((m + n) % 2 === 1) {
        return leftMax;
      }

      let rightMin;

      if (i === m) {
        rightMin = nums2[j];
      } else if (j === n) {
        rightMin = nums1[i];
      } else {
        rightMin = Math.min(nums1[i], nums2[j]);
      }

      return (leftMax + rightMin) / 2;
    }
  }
};
