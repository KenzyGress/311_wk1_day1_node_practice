const split = (str, delim) => {
  let test = str.split(delim);
  return test;
};

const pairs = str => {
  let pairs = [];
  let arrayed = str.split("");
  for (let i = 0; i < arrayed.length; i = i + 2) {
    pairs.push(arrayed[i].concat(arrayed[i + 1]));
  }
  return pairs;
};

const reverse = str => {
  return str
    .split("")
    .reverse()
    .join("");
};
reverse("a blue dog");

module.exports = {
  split,
  pairs,
  reverse
};
