/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const dp = [1];

  for (let i = 1; i <= s.length; i++) {
    dp.push(0);
    const oneChar = s.slice(i - 1, i);
    const twoChar = s.slice(i - 2, i);

    if (oneChar > 0) dp[i] = dp[i - 1];
    if (twoChar >= 10 && twoChar <= 26) dp[i] += dp[i - 2];
  }
  return dp[s.length];
};
