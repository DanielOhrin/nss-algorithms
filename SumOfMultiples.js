// Use the reaminder operator to check for all numbers up to 1,000 that are divisible by 3 & 5
//return their sums 

//* Define a function 
    // *Define empty array to store nums divisible by 3 & 5
    // *Use for loop to push each value to that array
    // *Use an array method to return the sum of every value in the array

export const sumOfMultiples = (numOne, numTwo) => {
    const numsDivisible = []

    for (let i = 0; i < 1000; i++) {
        if (i % numOne === 0 || i % numTwo === 0) {
            numsDivisible.push(i)
        }
    }

    return numsDivisible.reduce((total, nextValue) => {
        return total + nextValue
    })
}


    // Although not a requirement, I made it so you could give the function any two numbers to define the divisibility rule