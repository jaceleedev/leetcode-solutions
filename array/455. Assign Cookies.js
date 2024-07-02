/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let children = 0;
  let cookie = 0;

  while (cookie < s.length && children < g.length) {
    if (s[cookie] >= g[children]) {
      ++children;
    }
    ++cookie;
  }

  return children;
};
