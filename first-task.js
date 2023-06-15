function countCharacters(text) {
  const charCount = {};
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

const text = "Hello, world!";
console.log(countCharacters(text));