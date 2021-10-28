var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(vegetables);
// ["Капуста", "Репа", "Редиска", "Морковка"]

var pos = 2, n = 2;

var removedItems = vegetables.splice(pos, n);
// так можно удалить элементы, n определяет количество элементов для удаления,
// начиная с позиции(pos) и далее в направлении конца массива.

console.log(vegetables);
// ["Капуста", "Морковка"] (исходный массив изменён)

console.log(removedItems);
// ["Репа", "Редиска"]

// ___________________________________________________________________________________

var array = [2, 5, 9];
console.log(array.indexOf(2));     // 0
console.log(array.indexOf(7));     // -1
console.log(array.indexOf(9, 2));  // 2
console.log(array.indexOf(2, -1)); // -1
console.log(array.indexOf(2, -3)); // 0
console.log(array.indexOf(2, -2));

// ___________________________________________________________________________________

var fruit = ['арбузы', 'бананы', 'Вишня'];
console.log(fruit.sort()); // ['Вишня', 'арбузы', 'бананы']
console.log(fruit);

var scores = [1, 2, 10, 21];
console.log(scores.sort()); // [1, 10, 2, 21]

// ___________________________________________________________________________________

var stringArray = ['Голубая', 'Горбатая', 'Белуга'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

// снова предполагаем, что функция печати определена
console.log('stringArray:', stringArray.join());
console.log('Сортировка:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Сортировка без функции сравнения:', numberArray.sort());
console.log('Сортировка с функцией compareNumbers:', numberArray.sort(compareNumbers));

console.log('numericStringArray:', numericStringArray.join());
console.log('Сортировка без функции сравнения:', numericStringArray.sort());
console.log('Сортировка с функцией compareNumbers:', numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Сортировка без функции сравнения:', mixedNumericArray.sort());
console.log('Сортировка с функцией compareNumbers:', mixedNumericArray.sort(compareNumbers));

var temperatures = [76.3, 44.9, 56, 89.8, 100.2];

console.log(temperatures.indexOf(89.8));