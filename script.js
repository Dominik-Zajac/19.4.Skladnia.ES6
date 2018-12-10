/* Zadanie pierwsze */
const stringFirst = 'Hello';
const stringSecond = 'World!';

console.log(`Zadanie 1. ${stringFirst} ${stringSecond}`);

/* Zadanie drugie */
const multiply = (x, y = 1) => x * y;

const multiplyResult = multiply(8, 7);
console.log(`Zadanie 2. ${multiplyResult}`);

/* Zadanie trzecie */
const average = (...args) => {
  let sum = 0;
  args.forEach(argument => sum += argument);
  const result = sum /= args.length;
  return result;
}

console.log(`Zadanie 3. ${average(1)}`);
console.log(`Zadanie 3. ${average(1, 3)}`);
console.log(`Zadanie 3. ${average(1, 3, 6, 6)}`);

/* Zadanie czwarte */
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(`Zadanie 4. ${average(...grades)}`);

/* Zadanie piate */
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = array;
console.log(`Zadanie 5. '${lastname}' oraz '${firstname}'`);