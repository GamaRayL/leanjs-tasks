// const printNumbers = (from, to) => {
//   let current = from;

//   let timeId = setInterval(() => {
//     console.log(current);
//     if (current == to) {
//       clearInterval(timeId);
//     }
//     current++;
//   }, 1000);
// };

// printNumbers(1, 5);

const printNumbers = (from, to) => {
  let current = from;

  setTimeout(function next() {
    console.log(current);
    if (current < to) {
      setTimeout(next, 1000);
    }
    current++;
  }, 0);
};

printNumbers(1, 5);