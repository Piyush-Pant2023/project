function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  
  
  const numbers = [5, 2, 9, 1, 5, 6];
  const sortedNumbers = sortArray(numbers);
  console.log("Sorted Numbers:", sortedNumbers);