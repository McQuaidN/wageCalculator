// create a list for every input
var inputList = []
// to keep track of how many weeks
var weeks = 1;

// add all inputs to a list so I can work with them more easily
for(i = 0; i < 7; i++){
    inputList.push(document.getElementById("day" + i + "week0"))
}

// gets add week button
weeksCheck = document.getElementById("twoWeek")

// adds subsequent weeks every time you click the button
weeksCheck.addEventListener('click', function(){
    newWeekList = []
    newWeekList.push(document.getElementById('row1'))
    newWeekList.push(document.getElementById('row2'))
    newWeekList.push(document.getElementById('row3'))
    newWeekList.push(document.getElementById('row4'))
    newWeekList.push(document.getElementById('row5'))
    newWeekList.push(document.getElementById('row6'))
    newWeekList.push(document.getElementById('row7'))
    newWeekList.forEach((element) => element.addEventListener('input', inputHandler))

    for(i = 0; i < newWeekList.length; i++){
        newCell = document.createElement('td')

        newCell.innerHTML = '<input type="text" id="day' + i + 'week' + weeks +'" value="0"/>'

        newWeekList[i].appendChild(newCell)
        inputList.push(document.getElementById("day" + i + "week" + weeks))
    }
    weeks++
})

subtractWeek = document.getElementById("subWeek")

subtractWeek.addEventListener('click', function(){
    weekIndex = weeks - 1
    inputList.splice(inputList.length - 7, 7)

    for(i = 6; i > -1; i--){
        elementid = 'day' + i + 'week' + weekIndex
        document.getElementById(elementid).remove()
    }
    weeks--
})


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
    overtimeThreshold = weeks * 44
    if(hours > overtimeThreshold){
        totalEarned.value = overtimeThreshold * parseFloat(wage.value) + ((hours - overtimeThreshold) * wage.value * 1.5)
    } else{
        totalEarned.value = hours * parseFloat(wage.value)
    }
    console.log(totalHours, totalHours.value, totalEarned, totalEarned.value, earnedAfterTax, earnedAfterTax.value)

    // calculates tax. I just assume they take 15%.
    earnedAfterTax.value = (parseFloat(totalEarned.value)) * 0.85
}

// code that runs the script that runs every time you type in a text box
inputList.forEach((element) => element.addEventListener('input', inputHandler))
// add it to wage box as well cause it's a bitch to work with if I put the wage thing in with the other inputs lol
wage.addEventListener('input', inputHandler)


weeksCheck.addEventListener('click', inputHandler)

subtractWeek.addEventListener('click', inputHandler)