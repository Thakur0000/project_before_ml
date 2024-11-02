
const hourel = document.getElementById("hour")
const minutel = document.getElementById("minute")
const seccondl = document.getElementById("second")
// const mili=document.getElementById("mili")


function updatime() {
    const date = new Date()
    hourel.innerText = date.getHours()
    minutel.innerText = date.getMinutes()
    seccondl.innerText = date.getSeconds()

// mili.innerText=date.getMilliseconds()
}
setInterval(updatime, 1000)
updatime();

