// Define a function that accepts an array of numbers
    // Compare each value in the function to find the highest number
    // Then, return the amount of buildings that are at that "height" in the array
const buildings = [100, 4000, 6000, 1250, 1000, 10, 4000, 3200, 500, 6000, 200, 300, 6000]

const buildingsTwo = [500, 125, 750, 100, 27, 83, 582, 105, 285, 835, 900, 716, 900]
const amountMaxHeight = (numArray) => {
    let highest = 0
    let amountHighest = 0

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > highest) {
            highest = numArray[i]
        }
    }

    numArray.reduce((total, currentValue) => {
        if (currentValue === highest) {
            amountHighest += 1
        }
    })


    return amountHighest
}

console.log(amountMaxHeight(buildings))
console.log(amountMaxHeight(buildingsTwo))