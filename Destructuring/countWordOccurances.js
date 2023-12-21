//1. You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.

function wordCountGenerator(text) {
  // Spliting the text into words
  const words = text.toLowerCase().split(/\s+/);

  // Using Map to store word counts
  const wordCounts = new Map();

  // Counting the occurrences of each word
  words.forEach(word => {
      // Incrementing the count for the word in the Map
      const currentCount = wordCounts.get(word) || 0;
      wordCounts.set(word, currentCount + 1);
  });

  return wordCounts;
}

// Example
const inputText = "This is a simple text , This is to check the word occurances of text .";
const result = wordCountGenerator(inputText);


console.log(result);
