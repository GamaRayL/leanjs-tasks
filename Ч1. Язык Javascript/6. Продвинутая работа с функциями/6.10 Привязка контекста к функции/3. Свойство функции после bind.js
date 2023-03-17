function sayHi() {
  console.log(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: 'Вася',
});

console.log(bound.test); // Выведет: undefined.
// Результатом работы bind является другой объект. У него уже нет свойства test.
