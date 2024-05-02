function removeDuplicateWords(input) {
    const words = input.split(" ");
    const uniqueWords = new Set();
  
    // Iterate through the array of words
    for (let word of words) {
        uniqueWords.add(word);
    }

    return Array.from(uniqueWords).join(" ");
}

// Example:
const input = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
console.log(removeDuplicateWords(input)); // Output: 'alpha beta gamma delta'
