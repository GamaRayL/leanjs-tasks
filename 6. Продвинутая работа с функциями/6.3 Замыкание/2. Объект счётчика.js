// Да, будет работать.
// Так как обе вложенные функции ссылаются на внешнее лексическое окуржение.
// Покажет: 1/2/1;

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1
