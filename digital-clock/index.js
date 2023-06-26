const hourEl = document.querySelector(".hour")
const minutesEl = document.querySelector(".minutes")
const secondsEl = document.querySelector(".seconds")
const monthsEl = document.querySelector(".month-name")
const daysEl = document.querySelector(".day-name")
const dayNumbersEl = document.querySelector(".day-number")
const yearsEl = document.querySelector(".years")
const periodEl = document.querySelector(".period")
const period = "AM"

const clock = () => {
  const today = new Date()
  const hour = today.getHours()
  const minutes = today.getMinutes()
  const seconds = today.getSeconds()
  const month = today.getMonth()
  hourEl.innerHTML = hour
  minutesEl.innerHTML = minutes
  secondsEl.innerHTML = seconds
  monthsEl.innerHTML = month
  periodEl.innerHTML = setTimePeriod(hour)
}
clock()

function setTimePeriod(time) {
  let ampm = ""
  if (time > 12) {
    console.log("Less then 12 hours")
    ampm = "AM"
  } else {
    console.log("Greater then 12 hours")
    ampm = "PM"
  }
  return ampm
}
function addZero(time) {}
const updateTime = setInterval(clock, 1000)
