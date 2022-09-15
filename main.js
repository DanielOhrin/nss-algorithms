// Define a function that finds the largest three-digit palindrome
    // algorithm that tries every possibly combination up to 3 digits, and compares the two halves of the product

const palindromeThree = () => {
    const factors = []

    for (let x = 100; x < 1000; x++) {
        for (let y = 100; y < 1000; y++) { // Loops x and y through every possible iteration of three digit factors
            let productArr = []

            for (const value of (x * y).toString()) { // Makes each product into an array
                productArr.push(parseInt(value))
            }

            let firstHalf
            let secondHalf // Defining these variables now so their scope is wider

            if (productArr.length % 2 === 0) { //! Splits the number into two halves -- middle number is ignored if number is odd
                secondHalf = productArr.slice(Math.floor(productArr.length / 2))
                productArr.splice(Math.floor(productArr.length / 2))
                firstHalf = productArr
            } else {
                secondHalf = productArr.slice(Math.floor(productArr.length / 2) + 1)
                productArr.splice(Math.floor(productArr.length / 2))
                firstHalf = productArr
            }

            if (firstHalf.join("") === secondHalf.reverse().join("")) { // Tests if the product is a palindrome
                factors.push([x, y, x * y]) // Pushes the general information of each palindrome to the factors array
            }
            
            if (factors.length > 1) { // Compares each palindrome to the last until one remains
                factors[0][2] > factors[1][2] ? factors.splice(1, 1) : factors.splice(0, 1)
            }
        }
    }
    return `The highest palindrome that can be made with two 3-digit numbers is ${factors[0][0]} * ${factors[0][1]} = ${factors[0][2]}`
}

console.log(palindromeThree())



