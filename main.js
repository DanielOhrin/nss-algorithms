// Define a function that checks if a string is a palindrome.
    // Find the midway point
    // Slice
    // Splice
    // Compare the two halves
    // Return only a boolean

const isPalindrome = (string) => {
    let wordArr = [...string]

    let secondHalf

    if (wordArr.length % 2 === 0) {
        secondHalf = wordArr.slice(Math.floor(wordArr.length / 2))
        wordArr.splice(Math.floor(wordArr.length / 2))
    } else {
        secondHalf = wordArr.slice(Math.floor(wordArr.length / 2) + 1)
        wordArr.splice(Math.floor(wordArr.length / 2))
    }

    return wordArr.join("") === secondHalf.reverse().join("") ? true : false
}

console.log(isPalindrome('awoieh')) // False
console.log(isPalindrome('tattarrattat')) // True
console.log(isPalindrome('racecar')) // True
console.log(isPalindrome('marshmallow')) // False
console.log(isPalindrome('rotator')) // True

