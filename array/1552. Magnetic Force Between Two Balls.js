/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
  position.sort((a, b) => a - b);
  let left = 1;
  let right = position[position.length - 1] - position[0];

  function canPlaceBalls(minForce) {
    let count = 1;
    let lastPosition = position[0];

    for (let i = 1; i < position.length; ++i) {
      if (position[i] - lastPosition >= minForce) {
        ++count;
        lastPosition = position[i];

        if (count >= m) {
          return true;
        }
      }
    }

    return false;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canPlaceBalls(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};
