// Problem NO: 258 => Add Digits
// Link => https://leetcode.com/problems/add-digits/description/

// Solved Link => https://leetcode.com/problems/add-digits/submissions/1250664829

const addDigits = (num) => {
    let sum = num;

    while (sum >= 10) {
        let tempSum = 0;
        let strSum = sum.toString(); // Convert sum to string to iterate over each digit
        for (let i = 0; i < strSum.length; i++) {
            tempSum += parseInt(strSum[i]); // Convert each character to an integer and sum them up
        }
        sum = tempSum; // Update sum with the new sum of digits
    }
    return sum
}