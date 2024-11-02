
const monthName = document.getElementById("month-name")

const dayName = document.getElementById("day-name")
const dayNo = document.getElementById("day-no")
const yearNp = document.getElementById("year-no")

const date = new Date()

// const month=date.getMonth()

monthName.innerText=date.toLocaleString("en",{month:"long"})
dayName.innerText=date.toLocaleString("en",{weekday:"long"})
dayNo.innerText=date.getDate()
yearNp.innerText=date.getFullYear()

// console.log(date.getVarDate())
