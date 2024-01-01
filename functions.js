function multiples(multipleOf, max) {
    let multiplesOfArray =[]
    for (let i=1; i<=max; i++) {
        if (i % multipleOf === 0) {
        multiplesOfArray.push(i)
        }
    }
    return multiplesOfArray
}


function addArray(theArray) {

}