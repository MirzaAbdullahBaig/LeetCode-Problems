// Problem NO: 1160 => Finds Words That Can Be Formed By Characters
// Link => https://leetcode.com/problems/find-words-that-can-be-formed-by-characters

// First Solved Link => https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/submissions/1304740411


const countCharacters = (words, chars) => {
  let result = 0;
  const counts = new Array(26).fill(0)

  const getCharIndex = (ch) => {
    const charCodeOfa = "a".charCodeAt(0)
    return ch.charCodeAt(0) - charCodeOfa;
  }

  const canForm = (word, counts) => {
    const wordsChrCount = new Array(26).fill(0)

    for (const ch of word) {
      const chrIndex = getCharIndex(ch)
      wordsChrCount[chrIndex]++

      if (wordsChrCount[chrIndex] > counts[chrIndex]) return false;
    }
    return true;
  }

  for (const ch of chars) {
    counts[getCharIndex(ch)]++
  }

  for (const word of words) {
    if (canForm(word, counts)) {
      result += word.length;
    }
  }

  return result;
};