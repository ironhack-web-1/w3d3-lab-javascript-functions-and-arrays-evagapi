// Iteration #5: Unique arrays

const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(arrayOfWords) {
  if (!arrayOfWords.length) return null;

  let filteredArray = arrayOfWords.filter(
    (word, index) => arrayOfWords.indexOf(word) === index
  );

  return filteredArray;
}

uniquifyArray(wordsUnique);
