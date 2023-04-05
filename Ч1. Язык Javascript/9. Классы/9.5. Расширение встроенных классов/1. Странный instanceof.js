function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert(a instanceof B); // true

// instanceof не учитывает саму функцию при проверке
