function multiples(multipleOf, max) {
    let multiplesOfArray =[]
    for (let i=1; i<=max; i++) {
        if (i % multipleOf === 0) {
        multiplesOfArray.push(i)
        }
    }
    return multiplesOfArray
}

function smallerNumber(firstNumber, secondNumber){
    let smallerNumber=0;
    if (firstNumber < secondNumber) {
        smallerNumber = firstNumber;
    }
    else{
        smallerNumber = secondNumber;
    }
    return smallerNumber;
}

function commonDivisor(firstNumber, secondNumber) {
    let commonDivisor=[];


}


function reduceDuplicates (firstArray, secondArray) {
  

}

function addArray(theArray) {
    let total=0
    for (let i=0; i<theArray.length;i++){
        total +=i;
    }
    return total;

}


