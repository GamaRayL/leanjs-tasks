// Результат вызова на последней строке будет undefined.
// Потому что функцию к которой хотят получить доступ находится в блоке if {}.

let phrase = 'Hello';

if (true) {
  let user = 'John';

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

console.log(sayHi());
