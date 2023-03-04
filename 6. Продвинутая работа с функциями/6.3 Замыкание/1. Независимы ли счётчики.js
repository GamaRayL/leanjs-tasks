// Счётчики независимы. Они имеют независимое лексическое окружение.
// Как для counter - 0, 1; так и для counter2 - 0, 1.

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // 0
console.log(counter2()); // 1
