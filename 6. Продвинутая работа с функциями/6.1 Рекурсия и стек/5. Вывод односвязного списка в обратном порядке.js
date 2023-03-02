let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

// Рекурсия лучше, ибо: нет большой глубины + легче читается.

// 1. Решение с циклом.
const printList = (list) => {
  let arr = [];

  while (list) {
    arr.push(list.value);
    list = list.next;
  }

  console.log(arr.reverse());
};

printList(list);

// 2. Решение с рекурсией.
// const printList = (list) => {
//   if (list.next) printList(list.next);

//   console.log(list.value);
// };

// printList(list);
