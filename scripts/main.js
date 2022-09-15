import { animalCalc } from "./animalCalc.js"
import { getValues } from "./database.js"

const values = getValues()

document.addEventListener(
    "click",
    event => {
        if (event.target.id === "calculate") {            
            document.getElementById("animals-h2").innerHTML = `There are ${animalCalc(values.total, values.percent, values.legs)} animals!`
            console.log("test")
        }
        console.log(values.total, values.percent, values.legs)
    }
)
