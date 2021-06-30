setInterval(setClock, 1000)

//analog
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
//digital
const hourDig = document.querySelector('[data-hour-dig]');
const minuteDig = document.querySelector('[data-minute-dig]');
const secondDig = document.querySelector('[data-second-dig]');

function setClock(){


    const currentDate = new Date();
    //analog
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

    secondDig.innerHTML = currentDate.getSeconds();
    minuteDig.innerHTML = currentDate.getMinutes();
    hourDig.innerHTML = currentDate.getHours();
    
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();