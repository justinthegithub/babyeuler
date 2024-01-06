function multiples(multipleOf, max) {
    let multiplesOfArray =[]
    for (let i=1; i<=max; i++) {
        if (i % multipleOf === 0) {
        multiplesOfArray.push(i)
        }
    }
    return multiplesOfArray
}

export function smallerNumber(firstNumber, secondNumber){
    let thesmallerNumber=0;
    if (firstNumber < secondNumber) {
        thesmallerNumber= firstNumber;
    }
    else{
        thesmallerNumber = secondNumber;
    }
    return thesmallerNumber;
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
export function test(){
    console.log("working");
}

