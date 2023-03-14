function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  counter.set = (val) => (counter.count = val);
  counter.descrease = () => --counter.count;

  return counter;
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter.set(5));
console.log(counter.descrease());

// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return count++;
//   }

//   counter.set = (val) => (count = val);
//   counter.descrease = () => --count;

//   return counter;
// }

// const counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter.set(5));
// console.log(counter.descrease());
