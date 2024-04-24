// create a list for every input
var inputList = []

// add all inputs to a list so I can work with them more easily
inputList.push(document.getElementById("mo1S"))
inputList.push(document.getElementById("tu1S"))
inputList.push(document.getElementById("we1S"))
inputList.push(document.getElementById("th1S"))
inputList.push(document.getElementById("fr1S"))
inputList.push(document.getElementById("sa1S"))
inputList.push(document.getElementById("su1S"))

// set empty values to 0
inputList.forEach((element) => {
    if(element.value === null || element.value === ""){
        element.value = 0;
    }
})

// script that runs every time you type into a text box
// it just runs a simple calculation
const inputHandler = function(){
    hours = 0;
    
    // adds every input together
    for(i=0;i<inputList.length;i++){
        hours += parseFloat(inputList[i].value)
    }

    // puts the total into the text box at the bottom
    totalHours.value = hours

    // calculates overtime if applicable
    if(hours > 44){
        totalEarned.value = 44 * parseFloat(wage.value) + ((hours - 44) * wage.value * 1.5)
    } else{
        totalEarned.value = hours * parseFloat(wage.value)
    }

    // calculates tax. I just assume they take 15%.
    earnedAfterTax.value = (parseFloat(totalEarned.value)) * 0.85
}



// code that runs the script that runs every time you type in a text box
inputList.forEach((element) => element.addEventListener('input', inputHandler))
// add it to wage box as well cause it's a bitch to work with if I put the wage thing in with the other inputs lol
wage.addEventListener('input', inputHandler)