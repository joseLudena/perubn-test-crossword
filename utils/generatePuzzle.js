// Check if a word can be placed horizontally starting at (row, col)
function canPlaceHorizontally(word, row, col, grid, cols) {
  if (col + word.length > cols) return false;
  return word.split("").every((_, i) => grid[row][col + i].letter === '.');
}

// Check if a word can be placed vertically starting at (row, col)
function canPlaceVertically(word, row, col, grid, rows) {
  if (row + word.length > rows) return false;
  return word.split("").every((_, i) => grid[row + i][col].letter === '.');
}

// Place a word horizontally in the grid
function placeHorizontally(word, row, col, grid) {
  [...word].forEach((letter, i) => {
    grid[row][col + i] = {
      letter,
      word,
      direction: 'H',
      length: word.length,
      row,
      col: col + i
    };
  });
}

// Place a word vertically in the grid
function placeVertically(word, row, col, grid) {
  [...word].forEach((letter, i) => {
    grid[row + i][col] = {
      letter,
      word,
      direction: 'V',
      length: word.length,
      row: row + i,
      col
    };
  });
}

// Fisher–Yates shuffle
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Try to place a word randomly on the grid (100 attempts)
function placeWordRandomly(word, grid, rows, cols) {
  for (let i = 0; i < 100; i++) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    const direction = Math.random() > 0.5 ? 'H' : 'V';

    if (direction === 'H' && canPlaceHorizontally(word, row, col, grid, cols)) {
      placeHorizontally(word, row, col, grid);
      return { placed: true, row, col, direction };
    }
    if (direction === 'V' && canPlaceVertically(word, row, col, grid, rows)) {
      placeVertically(word, row, col, grid);
      return { placed: true, row, col, direction };
    }
  }
  return { placed: false };
}

// Generate crossword grid with random valid word placement
function generateCrosswordGrid(crosswordData) {
  const rows = 5;
  const cols = 6;
  const minWords = 4;
  const maxWords = 7;

  const grid = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => ({
      letter: '.',
      word: '',
      direction: '',
      length: 0,
      row: r,
      col: c
    }))
  );

  shuffleArray(crosswordData);

  const hints = [];
  let placedCount = 0;

  for (const { word, clue } of crosswordData) {
    if (placedCount >= maxWords) break;

    const upperWord = word.toUpperCase();
    const result = placeWordRandomly(upperWord, grid, rows, cols);

    if (result.placed) {
      hints.push({
        word: upperWord,
        clue,
        ...result,
        length: upperWord.length
      });
      placedCount++;
    }
  }

  return { grid, hints };
}


export default generateCrosswordGrid;