/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }

  const root = new TreeNode(null);
  const stack = [{ node: root, left: 0, right: nums.length - 1 }];

  while (stack.length) {
    const { node, left, right } = stack.pop();
    const mid = Math.floor((left + right) / 2);

    node.val = nums[mid];

    if (left <= mid - 1) {
      node.left = new TreeNode(null);
      stack.push({ node: node.left, left: left, right: mid - 1 });
    }

    if (mid + 1 <= right) {
      node.right = new TreeNode(null);
      stack.push({ node: node.right, left: mid + 1, right: right });
    }
  }

  return root;
};
