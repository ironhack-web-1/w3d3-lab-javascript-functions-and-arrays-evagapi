// Iteration #4: Calculate the average
// Level 1: Array of numbers

const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) {
    return null;
  }

  if (arrayOfNumbers.length === 1) {
    return arrayOfNumbers[0];
  }

  return sumNumbers(arrayOfNumbers) / arrayOfNumbers.length;
}

function sumNumbers(arrayOfNumbers) {
  let result = 0;
  for (let number of arrayOfNumbers) {
    result += number;
  }
  return result;
}
