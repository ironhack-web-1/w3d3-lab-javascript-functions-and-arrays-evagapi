// Bonus - Iteration #4.1
function avg(array) {
  let sum = 0;

  if (array.length === 0) {
    return null;
  }

  for (let element of array) {
    if (typeof element === "string") {
      sum += element.length;
    } else {
      sum += element;
    }
  }
  return sum / array.length;
}
