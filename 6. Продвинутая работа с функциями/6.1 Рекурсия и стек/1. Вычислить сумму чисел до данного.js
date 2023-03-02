// Самый быстрый вариант - арифмитическая прогрессия.
// Так как использует только три операции. В цикле и рекурсии - O(n) операций.
// Самый медленный - рекурсия. Так как есть вложенный вызов sumTo.
// sumTo(10000) у меня не считает:). Превышен максимальный размер стека вызовов.

// 1. С использованием цикла.
// const sumTo = (n) => {
//   let sum = n;
//   for (let i = 0; i < n; n--) sum += n - 1;
//   return sum;
// };
// console.log(sumTo(4));

// 2. Через рекурсию.
const sumTo = (n) => {
  return n > 1 ? n + sumTo(n - 1) : n;
};
console.log(sumTo(4));

// 3. С использованием формулы арифметической прогрессии.
// const sumTo = (n) => {
//   return (n * (n + 1)) / 2;
// };
// console.log(sumTo(4));
