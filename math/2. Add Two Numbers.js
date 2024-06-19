/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode();
  let current = head;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {
    const a = l1?.val ? l1.val : 0;
    const b = l2?.val ? l2.val : 0;
    const sum = a + b + carry;

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return head.next;
};
