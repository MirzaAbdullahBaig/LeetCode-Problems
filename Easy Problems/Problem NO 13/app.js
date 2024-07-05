// Problem NO: 13 => Roman to Integer
// Link => https://leetcode.com/problems/roman-to-integer/description/


// 1st Method => Solved Link => https://leetcode.com/problems/roman-to-integer/submissions/1310333962

const romanToInt = (s) => {
    const symbol = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    let intIs = 0;

    for (let i = 0; i < s.length; i++) {
        let currSymbol = s[i];
        let nextSymbol = s[i + 1];

        if (symbol[currSymbol] < symbol[nextSymbol]) {
            intIs -= symbol[currSymbol];
        } else {
            intIs += symbol[currSymbol];
        }
    }

    return intIs;
};

console.log(romanToInt("MCMXCIV")); // Output 1994
