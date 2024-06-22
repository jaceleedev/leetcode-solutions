/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const result = [];

  for (let row = 0; row < numRows; ++row) {
    const currentRow = Array.from({ length: row + 1 }).fill(1);

    for (let col = 1; col < row; ++col) {
      currentRow[col] = result[row - 1][col - 1] + result[row - 1][col];
    }

    result.push(currentRow);
  }

  return result;
};
