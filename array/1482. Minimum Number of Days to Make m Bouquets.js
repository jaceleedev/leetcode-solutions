/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
  if (m * k > bloomDay.length) {
    return -1;
  }

  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (canMakeBouquets(bloomDay, mid, m, k)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return high;
};

function canMakeBouquets(bloomDay, day, m, k) {
  let bouquets = 0;
  let flowers = 0;

  for (const bloom of bloomDay) {
    if (bloom <= day) {
      ++flowers;

      if (flowers === k) {
        ++bouquets;
        flowers = 0;
      }
    } else {
      flowers = 0;
    }

    if (bouquets >= m) {
      return true;
    }
  }

  return false;
}
