// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayOfNumbers) {
  let result = 0;
  for (let number of arrayOfNumbers) {
    result += number;
  }
  return result;
}

// Iteration #3.1 Bonus: Sum numbers, strings and booleans

const mixedArr = [6, 12, "miami", 1, true, "barca", "200", "lisboa", 8, 10];

function sum(array) {
  let sumResult = 0;

  if (array.length === 0) {
    return 0;
  }
  for (let element of array) {
    if (
      typeof element !== "number" &&
      typeof element !== "string" &&
      typeof element !== "boolean"
    ) {
      throw new Error("Unsupported data type sir or ma'am");
    }

    if (typeof element === "string") {
      sumResult += element.length;
    } else {
      sumResult += element;
    }
  }
  return sumResult;
}
