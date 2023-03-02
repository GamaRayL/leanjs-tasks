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

// 1. Решение с циклом
// const printList = (list) => {
//   while (list) {
//     console.log(list.value);
//     list = list.next;
//   }
// };

// printList(list);

// 2. Решение с рекурсией
const printList = (list) => {
  console.log(list.value);

  if (list.next) printList(list.next);
};

printList(list);
