var entry = ['10:00','13:00']
var exit  = ['12:00','17:00']
var workDay = 8
var missTime
let initialTime = 0

function transformTime(time) {
    let minutes = time.split(":")
    
    let firstHour = parseInt(minutes[0]) * 60
    let secondHour = parseInt(minutes[1])
    totalHour = firstHour + secondHour

    return totalHour
}


for(let n = 0 ; n < entry.length; n++ ) {
   let nTime = transformTime(exit[n]) - transformTime(entry[n]) // sendo n o numero de vezes que meu codigo ira rodar.
   initialTime+=nTime 
}

function reverseTime(initialTime) {
    totalHour = Math.floor(initialTime / 60)
    totalMinute = initialTime % 60
    return `${totalHour}:${totalMinute}`
}

totalTime = initialTime / 60

function whatTime () {
    
    if(totalTime >= workDay ) {
        console.log(`You did ${reverseTime(initialTime)} and now you can go home.`)
    } else {
        missTime = workDay*60 - initialTime
        console.log(`You work just ${reverseTime(initialTime)}. You need to do ${reverseTime(missTime)} hour to go home.`)
    }

    return
}

whatTime()