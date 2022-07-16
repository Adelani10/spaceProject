const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const mins = document.querySelector(".minutes")
const secs = document.querySelector(".seconds")


const futureDate = new Date(2022, 9, 15, 21, 30, 0)
// console.log(futureDate.getFullYear())
let futureMs = futureDate.getTime()
// console.log(futureMs)




function calcInt() {
    const date = new Date()
    let currMs = date.getTime()
    // console.log(currMs)

    let t = futureMs - currMs
    // console.log(t)
    let oneSec = 1000
    let oneMin = 60 * 1000
    let oneHour = 60 * 1000 * 60
    let oneDay = 60 * 1000 * 60 * 24
    // console.log(oneDay)

    let day = Math.floor(t/oneDay)
    // console.log(day)
    let hour = Math.floor((t % oneDay)/ oneHour) 
    // console.log(hour)
    let min = Math.floor((t % oneHour)/ oneMin)
    // console.log(min)
    let sec = Math.floor((t % oneMin)/ oneSec)
    // console.log(sec)

function addItem(item) {
    if (item < 10){
        return `0${item}`
    }
    else{
        return item
    }
    }

    // days.innerHTML = `<h1>${day}</h1>`
    days.textContent = addItem(day)
    hours.textContent = addItem(hour)
    mins.textContent = addItem(min)
    secs.textContent = addItem(sec)

}
// setInterval(calcInt, 1000)

calcInt()

setInterval(calcInt, 1000)

