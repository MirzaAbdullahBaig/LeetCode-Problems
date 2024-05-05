// Problem NO: 125 => Valid Palindrome
// Link => https://leetcode.com/problems/valid-palindrome/description/

// Solved Link => https://leetcode.com/problems/valid-palindrome/submissions/1250211973


const isPalindrome = (s) => {
    let regex = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let len = regex.length;

    for (let i = 0; i < len / 2; i++) {
        if (regex[i] !== regex[len - 1 - i]) {
            return false
        }
    }
    return true;
};