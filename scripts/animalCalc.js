import { setLegs, setPercent, setTotal } from "./database.js"

// Define a function that accepts three parameters -- totalLegs, percentAnimals with certain num of legs, numOfLegs for each animal in that group

//! percentAnimals are assumed to be the ones with less than 4 legs
//! Only allowing user to specify one oddity in the group of animals
export const animalCalc = (totalLegs, percentAnimals, amountLegs) => {
    const percent = percentAnimals / Math.pow(10, 2)
    let animals = 0

    // Go one at a time, first subtracting the oddity
    // Then the four legged animals
    // Multiply their legs by the percent they occupy

    for (let x = 1; x < totalLegs / amountLegs; x++) {
        for (let y = 1; y < totalLegs / amountLegs; y++) {
            if (((4 * x) + (amountLegs * y)) === totalLegs) {
                animals = x + y
                if (animals * percent !== y) {
                    animals = 0
                    continue
                } else {
                    break
                }
            }
        }
        if (animals !== 0) {
            break
        }
    }
    return animals
}

document.addEventListener(
    "change",
    event => {
        if (event.target.id === "amountLegs") {
            setLegs(parseInt(event.target.value))
        }
        if (event.target.id === "percentAnimals") {
            setPercent(parseInt(event.target.value))
        }
        if (event.target.id === "totalLegs") {
            setTotal(parseInt(event.target.value))
        }
    }
)