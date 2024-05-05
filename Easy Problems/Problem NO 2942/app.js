// Problem NO: 2942 => Finds Words Containing Character
// Link => https://leetcode.com/problems/find-words-containing-character/

// Solved Link => https://leetcode.com/problems/find-words-containing-character/submissions/1249784416


const findWordsContaining = (words, x) => {
    let result = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x) {
                result.push(i)
                break;
            }
        }
    }

    return result;
};