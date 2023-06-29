// Create JavaScript code that loops through a string of lowercase letters. Print the word followed by how many consonants and vowels it has.
// "a", "e", "i", "o", and "u" are considered vowels. 
// Every other letter is considered a consonant.
// Hint: Define two variables that keep track of the number of consonants and vowels.

// variable containing string of lowercase letters
// const word = `hello`;
// const word = `ukelele`;
// const word = `awesome`;
// const word = `onomonopia`;
const word = `textbook`;
// variable containing consonant count starting at 0
let consCount = 0;
// variable continaing the vowel count starting at 0
let vowelCount = 0;
// variable containing all vowels for reference
const vowelList = ["a", "e", "i", "o", "u"];
// loop through variable with string of lowercase letters
for (let i = 0; i < word.length; i ++) {
// if letter is in vowel reference
  if (vowelList.includes(word[i])) {
  // vowel count increases by 1
    vowelCount ++;
  } else {
  // else consonant count increases by 1
  consCount ++;
  }
}

console.log(`${word} has ${consCount} consonants and ${vowelCount} vowels.`);