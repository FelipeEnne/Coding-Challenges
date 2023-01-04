/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const memo = new Map();

  const permute = (left) => {
    if (memo.has(left)) return memo.get(left);

    if (left == 0) return 0;

    let min = 100000;
    //console.log(min)

    for (let coin of coins) {
      //console.log(memo)
      if (left - coin >= 0) {
        min = Math.min(min, permute(left - coin));
      }
    }
    memo.set(left, min + 1);
    return min + 1;
  };
  const result = permute(amount);
  return result >= 100000 ? -1 : result;
};
