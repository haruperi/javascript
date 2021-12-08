//1. Write a JavaScript function that reverse a number. 

const reverseNum = (num) => {
    let stringNum = num.toString()
    stringNum = stringNum.split('').reverse().join('')
    return parseInt(stringNum)
}

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

const isPalindrome = (sWord) => {
    if (sWord === sWord.split('').reverse().join('')) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome("madam"))