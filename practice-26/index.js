// Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.

// let number = 1000;
// let count = 0;

// do {
//   number /= 2;
//   count++;
// } while (number >= 50);

// console.log('Кількість ділень: ' + count);
// console.log('Сума після всіх ділень (перша < 50): ' + number);


// sum for both: numbers and strings

const sum = (numberArr) => {
  console.log('-----');
  return Array.isArray(numberArr)
    ? (() => {
      // Варіант, щоб строка була пуста і для строкових і для числових масивів
      let sum = (numberArr.every(element => (typeof element === 'number'))) ? 0 : '';
      // let sum = numberArr.indexOf(' ') > -1 ? '' : 0;

      for (let index = 0; index < numberArr.length; index++) {
        sum += numberArr[index];
      }

      return sum;
    })()
    : alert('Передайте масив');
};


