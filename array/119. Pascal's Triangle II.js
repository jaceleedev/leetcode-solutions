/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const result = [1];

  for (let row = 1; row <= rowIndex; ++row) {
    for (let col = row - 1; col > 0; --col) {
      result[col] = result[col] + result[col - 1];
    }
    result.push(1);
  }

  return result;
};
