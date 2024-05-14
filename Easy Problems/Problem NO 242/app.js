// Problem NO: 242 => Valid Anagram
// Link => https://leetcode.com/problems/valid-anagram/

// Solved Link => https://leetcode.com/problems/valid-anagram/submissions/1257930382
    

const isAnagram = (s, t) => {
    if (s.length === t.length) {
        let result = s.split("").sort().join("") == t.split("").sort().join("")
        return result
    }
    return false
};


// 2nd Method || Solved Link => https://leetcode.com/problems/valid-anagram/submissions/1257932940

const isAnagram1 = (s, t) => {
    let result = s.length === t.length ? s.split("").sort().join("") == t.split("").sort().join("") : false;
    return result;
};