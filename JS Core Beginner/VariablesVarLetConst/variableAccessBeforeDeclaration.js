// variant 3
console.log(variable1); // undefined
var variable1 = 'Переменная с использованием var';
console.log(variable1); // Печатает значение 'Переменная с использованием var'

let variable2 = 'Переменная с использованием let';
console.log(variable2); // console.log(variable2); // ReferenceError: Cannot access 'variable2' before initialization

const variable3 = 'Переменная с использованием const';
console.log(variable3); // ReferenceError: Cannot access 'variable3' before initialization
