// Iteration #8.2: Product of diagonals

const matrix = [
  [1, 2, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 20, 3, 4, 5],
  [1, 4, 3, 4, 5],
];

function calculateDiagonalProduct(matrix, initialRow, initialCol) {
  let product = 1;

  for (let i = 0; i < 4; i++) {
    product *= matrix[initialRow + i][initialCol + i];
  }

  return product;
}

function calculateDiagonalProductReverse(
  matrix,
  initialRowReverse,
  initialColReverse
) {
  let product = 1;

  for (let i = 0; i < 4; i++) {
    product *= matrix[initialRowReverse + i][initialColReverse - i];
  }

  return product;
}

function greatestProductOfDiagonals(matrix) {
  let max = 0;

  for (let i = 0; i <= matrix.length - 4; i++) {
    const row = matrix[i];

    for (let j = 0; j <= row.length - 4; j++) {
      max = Math.max(max, calculateDiagonalProduct(matrix, i, j));
    }
  }

  for (let i = 0; i <= matrix.length - 4; i++) {
    const row = matrix[i];

    for (let k = row.length - 1; k > row.length - 3; k--) {
      max = Math.max(max, calculateDiagonalProductReverse(matrix, i, k));
    }
  }

  return max;
}

greatestProductOfDiagonals(matrix);
