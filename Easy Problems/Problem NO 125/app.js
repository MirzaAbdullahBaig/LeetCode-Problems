// Problem NO: 125 => Valid Palindrome
// Link => https://leetcode.com/problems/valid-palindrome/description/

// Solved Link => https://leetcode.com/problems/valid-palindrome/submissions/1250211973


// 1st Method

const isPalindrome1 = (s) => {
    let regex = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let len = regex.length;

    for (let i = 0; i < len / 2; i++) {
        if (regex[i] !== regex[len - 1 - i]) {
            return false
        }
    }
    return true;
};


// 2nd Method

const isPalindrome2 = (s) => {
    
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let palindrome = s.split("").reverse().join("");
    let check_palindrome = s === palindrome

    return check_palindrome;
};