// Write a function that accepts one parameter, and prints a staircase of the same width and height
    // The number should be between 0-100
    // Must use the pound symbol for the staircase

const staircase = (size) => {
    let staircase = ""

    if (size < 100 && size > 0) {
        for (let i = 1; i <= size; i++) {
            let poundCount = i
            staircase = ""
            while (poundCount > 0) {
                staircase += "#"
                poundCount--
            }
            console.log(staircase)
        }
    } else {console.log("Size must be BETWEEN 0 & 100")}
}

staircase(4)