const daysEl =document.getElementById("days");
const hoursEl =document.getElementById("hours");
const minutesEl =document.getElementById("minutes");
const secondsEl =document.getElementById("seconds");



const fourthofJuly = "4 Jul 2024";

function countdown() {
    const fourthofjulydate = new Date(fourthofJuly);
    const currentdate = new Date();

    const totalseconds = (fourthofjulydate - currentdate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) %60;
    const seconds = Math.floor(totalseconds) %60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;


    console.log(days, hours, minutes, seconds);
}

setInterval(countdown, 1000);

countdown();