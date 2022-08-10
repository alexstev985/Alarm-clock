let interval
let alarmHrs
let alarmMins
let alarmSound = new Audio('alarm.mp3')

function clock ()  {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const today = date.getDay()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const divHrs = document.getElementById('hours')
    divHrs.innerHTML = hours

    const divMins = document.getElementById('mins')
    divMins.innerHTML = minutes

    const divSecs = document.getElementById('secs')
    divSecs.innerHTML = seconds

    if (seconds < 10) {
        const divSecs = document.getElementById('secs')
        divSecs.innerHTML = '0' + seconds
    }

    if (minutes < 10) {
        const divMins = document.getElementById('mins')
        divMins.innerHTML = '0' + minutes
    }

    if (hours < 10) {
        const divHrs = document.getElementById('hours')
        divHrs.innerHTML = '0' + hours
    }

    if (today == 1) {
        document.getElementById('day').innerHTML = 'Monday'
    }
    if (today == 2) {
        document.getElementById('day').innerHTML = 'Tuesday'
    }
    if (today == 3) {
        document.getElementById('day').innerHTML = 'Wednesday'
    }
    if (today == 4) {
        document.getElementById('day').innerHTML = 'Thursday'
    }
    if (today == 5) {
        document.getElementById('day').innerHTML = 'Friday'
    }
    if (today == 6) {
        document.getElementById('day').innerHTML = 'Saturday'
    }
    if (today == 7) {
        document.getElementById('day').innerHTML = 'Sunday'
    }

    const divDate = document.getElementById('date')
    divDate.innerHTML = `${day}. ${month}. ${year}.`

    if (Number(alarmHrs) == hours && Number(alarmMins) == minutes && seconds == 0) {
        alarmSound.play()
        alarmSound.loop = true
    }
}

interval = setInterval(clock, 1000)

let selectHrs = document.getElementById('set-hours')
for (let i = 23; i >= 0; i--) {
    let h = document.createElement('option')
    h.value = i
    h.innerHTML = i
    selectHrs.appendChild(h)
}

let selectMins = document.getElementById('set-minutes')
for (let j = 59; j >= 0; j--) {
    let m = document.createElement('option')
    m.value = j
    m.innerHTML = j
    selectMins.appendChild(m)
}

let btnSetAlarm = document.getElementById('set-alarm')
btnSetAlarm.addEventListener('click', function () {
    alarmHrs = selectHrs.value
    alarmMins = selectMins.value
    alert(`Alarm has been set to ${alarmHrs} : ${alarmMins}`)
})

let btnClearAlarm = document.getElementById('clear-alarm')
btnClearAlarm.addEventListener('click', function () {
    alarmSound.pause()
})

