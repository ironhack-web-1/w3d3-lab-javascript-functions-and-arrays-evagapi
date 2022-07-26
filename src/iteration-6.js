// Iteration #6: Find elements

const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arrayOfWords, word) {
  if (!arrayOfWords.length) return null;

  return arrayOfWords.includes(word);
}
