startTimes = []
endTimes = []

hourlyWage = document.getElementById("wage")
calcButton = document.getElementById("calcButton")
totalHours = document.getElementById("totalHours")
totalEarned = document.getElementById("totalEarned")
earnedAfterTax = document.getElementById("earnedAfterTax")

for(i = 0; i < 7; i++){
    inputHandler(document.getElementById('day' + i + "Start"))
    inputHandler(document.getElementById('day' + i + "Fin"))
}

function inputHandler(element){
    element.addEventListener('input', function(){
        hours = 0
        checkbox = document.getElementById('day' + i + "off")
        for(i = 0; i < 7; i++){

            checkbox.addEventListener('change', function() {
                if (this.checked){
                    console.log("day " + i + " off")
                }
                else{
                    time = new Date().toDateString("yyyy-MM-dd") + " " + document.getElementById('day' + i + 'Start').value
                    console.log(time)
                    startTimes.push(time)
                }
            })
        }
    
        for(i = 0; i < 7; i++){
            
            if (this.checked){
                console.log("day " + i + " off")
            } else{
                time = new Date().toDateString("yyyy-MM-dd") + " " + document.getElementById('day' + i + 'Fin').value
                console.log(time)
                endTimes.push(time)
            }
        }
    
        for(i = 0; i < startTimes.length; i++){
            console.log(new Date(endTimes[i]).getTime() - new Date(startTimes[i]).getTime())
            hours += ((new Date(endTimes[i]) - new Date(startTimes[i])) / 60 / 60 / 1000)
            console.log(hours)
        }
    
        overtimeThreshold = 44
        if(hours > overtimeThreshold){
            totalEarned.value = overtimeThreshold * parseFloat(hourlyWage.value) + ((hours - overtimeThreshold) * hourlyWage.value * 1.5)
        } else{
            totalEarned.value = hours * parseFloat(hourlyWage.value)
        }
        console.log(totalHours.value, totalEarned.value, earnedAfterTax.value)
    
        totalHours.value = hours
    })
}
    

