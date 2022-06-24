
setInterval(setClock, 1000);

function setClock() {
    const time = new Date();
    const secondRatio = time.getSeconds() / 60;
    const minuteRatio = (secondRatio + time.getMinutes()) / 60;
    const hourRatio = (minuteRatio + time.getHours()) / 12;
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');
    displayTimeInit(time);
    setRotation(secondHand,secondRatio);
    setRotation(minuteHand,minuteRatio);
    setRotation(hourHand,hourRatio);
}

function setRotation(handElement, ratio) {
    handElement.style.setProperty('--rotation', ratio * 360);
}

function displayTimeInit (time) {
    const timeDisplay = document.querySelector('.time-display');
    let h = time.getHours(),m = time.getMinutes(), s = time.getSeconds();

    if (h > 12) {
        h -= 12;
    }
    if (h < 10) {
        h = '0' + h;
    }
    if (m <10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    timeDisplay.innerHTML = `<span class="digit-box">${h}</span>` + ':' + `<span class="digit-box">${m}</span>` + ':' + 
    `<span class="digit-box">${s}</span>`;
}