/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let nums1Index = m - 1;
  let nums2Index = n - 1;
  let mergedLastIndex = m + n - 1;

  while (nums1Index >= 0 && nums2Index >= 0) {
    const nums1Value = nums1[nums1Index];
    const nums2Value = nums2[nums2Index];

    if (nums1Value > nums2Value) {
      nums1[mergedLastIndex] = nums1Value;
      --nums1Index;
    } else {
      nums1[mergedLastIndex] = nums2Value;
      --nums2Index;
    }

    --mergedLastIndex;
  }

  while (nums2Index >= 0) {
    nums1[mergedLastIndex] = nums2[nums2Index];
    --nums2Index;
    --mergedLastIndex;
  }
};
