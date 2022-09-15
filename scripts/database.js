const database = {
    values: {}
}

export const setLegs = (legs) => {
    database.values.legs = legs
}

export const setPercent = (percent) => {
    database.values.percent = percent
}

export const setTotal = (total) => {
    database.values.total = total
}

export const getValues = () => {
    return database.values
}