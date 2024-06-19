/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    XC: 90,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  let prev = 0;

  for (const ch of s) {
    const current = map[ch];

    if (current > prev) {
      sum += current - prev * 2;
    } else {
      sum += current;
    }

    prev = current;
  }

  return sum;
};
