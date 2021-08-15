const contentDay = document.getElementById('counter-day')
const contentHour = document.getElementById('counter-hour')
const contentMin = document.getElementById('counter-minute')
const number = document.querySelector('.main__date--number').innerHTML
const month = document.querySelector('.main__date--other--month').innerHTML
const year = document.querySelector('.main__date--year').innerHTML

const months = {
    0: 'jan',
    1: 'feb',
    2: 'mar',
    3: 'apr',
    4: 'may',
    5: 'june',
    6: 'july',
    7: 'aug',
    8: 'sept',
    9: 'oct',
    10: 'nov',
    11: 'dec',
}

let numberOfMonth = findMonth(month)

let day_1 = new Date(),
sec = day_1.getSeconds(),
day_2 = new Date(year, numberOfMonth, number);

setInterval(function () {
    let d = new Date();
    let hours = 23 - d.getHours();
    let minutes = 60 - d.getMinutes();
    if(hours == 23){
        minutes -= 1 
    }

    contentDay.innerText = Math.trunc(date)
    contentHour.innerText = hours
    contentMin.innerText = minutes
    
},60 - sec)



function findMonth(month) {
    for (let number in months){
        if(months[number] == month){
            return number
        }
    }
}


function diffDates(day_one, day_two) {
    return (day_one - day_two) / (60 * 60 * 24 * 1000);
};

let date = diffDates(day_2, day_1);

function timer() {
    let hours = 23 - day_1.getHours();
    let minutes = 60 - day_1.getMinutes();

    contentDay.innerText = Math.trunc(date)
    contentHour.innerText = hours
    contentMin.innerText = minutes

}

timer()

