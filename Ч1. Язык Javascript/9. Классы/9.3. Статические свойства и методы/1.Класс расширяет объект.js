class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit('Кроль');

console.log(rabbit.hasOwnProperty('name'));

// "class Rabbit extends Object" - наследует не только методы function, но и свойства класса Object
// "class Rabbit" - наследует только методы function