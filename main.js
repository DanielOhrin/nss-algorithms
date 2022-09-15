// Define a function that takes in an array of grades (integers)
    //If the difference between the grade and next multiple of 5 is less than 3, round up to the multiple of 5
    //If the grade is less than 38, do not round.
const grades = [17, 94, 83, 75, 37, 49, 19, 84, 81] // should return [17, 95, 85, 75, 37, 50, 19, 85, 81]

const roundGrades = (numArray) => {
    const roundedNumArray = []

    numArray.forEach(num => {
        if (num > 37) {
            if (num % 5 !== 0) {
                let amountToFive = 0

                while (amountToFive < 6) {
                    if ((num + amountToFive).toString().at(-1) !== "5" && (num + amountToFive).toString().at(-1) !== "0") {
                        amountToFive++
                    } else {
                        break
                    }
                }

                if (amountToFive < 3) {
                    num += amountToFive
                }
            }
        }
        roundedNumArray.push(num)
    })
    return roundedNumArray
}

console.log(roundGrades(grades))