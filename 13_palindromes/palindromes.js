const palindromes = function (str) {
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedStr = normalizedStr.split("").reverse().join("");

  return normalizedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
