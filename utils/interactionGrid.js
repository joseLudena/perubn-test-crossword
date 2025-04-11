// Check if the entered word matches the original word
export const isWordCorrect = (word, values) => {
   return word.split("").every((letter, i) => values[i] === letter.toUpperCase());
}

// Removes previous color styles from cells
export const clearStyles = (cells) => {
   cells.forEach(cell => {
      if (cell) cell.classList.remove("bg-green-600", "bg-red-800", "text-white");
   });
};

// Apply styles to cells based on whether the word is correct or not
export const applyStyles = (cells, isCorrect) => {
   cells.forEach(cell => {
      if (cell) {
         clearStyles([cell]);
         cell.classList.add(isCorrect ? "bg-green-600" : "bg-red-800", "text-white");
      }
   });
};

// Update the status of each cell as correct or incorrect in the global state
export const updateStatuses = (cells, direction, row, col, isCorrect, setStatus) => {
   const updated = {};
   cells.forEach((_, i) => {
      const key = direction === "H" ? `${row}-${col + i}` : `${row + i}-${col}`;
      updated[key] = isCorrect ? "correct" : "incorrect";
   });
   setStatus(prev => ({ ...prev, ...updated }));
};
