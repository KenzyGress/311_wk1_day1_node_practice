const isEven = function(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const sum = arr => arr.reduce((x, y) => x + y);
console.log(sum);

const comboSum = (arr, sum) => {
  if (arr == 0 && sum == 0) return false;
  else if (arr == 0) return true;
  else if (arr != 0 && sum == 0) return false;

  sum--;

  return comboSum(arr, sum) || comboSum(arr, sum);
};

module.exports = {
  isEven,
  sum,
  comboSum
};
