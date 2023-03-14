let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (a, b) => {
  return function (i) {
    return i >= a && i <= b;
  };
};

const inArray = (arr) => {
  return function (i) {
    return arr.includes(i);
  };
};

console.log(arr.filter(inBetween(3, 6))); // 3, 4, 5, 6
console.log(arr.filter(inArray([1, 2, 10]))); // 1, 2
