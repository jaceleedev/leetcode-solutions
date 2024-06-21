/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; --i) {
    digits[i] += carry;
    if (digits[i] < 10) {
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1);

  return digits;
};
