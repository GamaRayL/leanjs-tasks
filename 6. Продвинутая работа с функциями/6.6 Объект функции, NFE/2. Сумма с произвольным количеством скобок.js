function sum(a) {
  let currSum = a;

  function someFunc(b) {
    currSum += b;
    return someFunc;
  }

  someFunc.valueOf = function () {
    return currSum;
  };

  return someFunc;
}

console.log(sum(1)(4) == 5);
console.log(sum(1)(2)(3) == 6);
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);
