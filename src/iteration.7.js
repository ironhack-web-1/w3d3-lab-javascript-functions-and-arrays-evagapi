// Iteration #7: Count repetition

const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(arrayOfWords, match) {
  if (!arrayOfWords.length) return 0;

  let counter = 0;

  arrayOfWords.map(function (word) {
    if (word === match) {
      counter += 1;
    }
  });

  return counter;
}
