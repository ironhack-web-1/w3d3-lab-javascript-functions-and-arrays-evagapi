// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
  let result = 0;
  for (let number of arrayOfNumbers) {
    result += number;
  }
  return result;
}
