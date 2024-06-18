/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  const jobs = difficulty.map((d, i) => [d, profit[i]]);
  jobs.sort((a, b) => a[0] - b[0]);

  worker.sort((a, b) => a - b);

  let maxProfit = 0;
  let totalProfit = 0;
  let jobIndex = 0;

  for (const ability of worker) {
    while (jobIndex < jobs.length && jobs[jobIndex][0] <= ability) {
      maxProfit = Math.max(maxProfit, jobs[jobIndex][1]);
      ++jobIndex;
    }
    totalProfit += maxProfit;
  }

  return totalProfit;
};
