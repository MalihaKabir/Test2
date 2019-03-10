let date, hour, minute, second, clock, color;

const clockyFunction = () => {
  date = new Date() // built-in object.
  hour = date.getHours() // built-in object.
  minute = date.getMinutes()
  second = date.getSeconds()

if (hour <= 9) {
  hour = `0${hour}`
}
if (minute <= 9) {
  minute = `0${minute}`
}
if (second <= 9) {
  second = `0${second}`
}

clock = `${hour} : ${minute} : ${second}`
color = `#${hour}${minute}${second}` // color value will change as time(digit) changes.

// document.getElementById('clock').innerHTML = clock
document.querySelector('#clock').textContent = clock
document.querySelector('#colorCode').textContent = color
document.querySelector('body').style.background = color

// Calls a function or executes a code snippet after specified delay: fn(f: fn(), ms:number):number
// it means, write setTimeout(f, ms)
setTimeout(clockyFunction, 1000) // bcz 1000ms(miliseconds) = 1s.
}

clockyFunction()
