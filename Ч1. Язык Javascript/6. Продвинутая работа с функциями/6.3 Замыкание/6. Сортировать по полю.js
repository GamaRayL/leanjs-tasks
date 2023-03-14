let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

const byField = (cat) => {
  return (a, b) => (a[cat] > b[cat] ? 1 : -1);
};

const newUsers = users.sort(byField('name'));
console.log(newUsers);

const newUsers2 = users.sort(byField('age'));
console.log(newUsers2);