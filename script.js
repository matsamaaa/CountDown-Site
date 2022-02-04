const countdown = () => {
    const countDate = new Date("Februar 4, 2022 14:00:00").getTime();
    const nowDate = new Date().getTime();
    let gap = countDate - nowDate;

    //date dépassée
    if(gap < 0) gap = 0

    //counts
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    //update
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;

};

setInterval(countdown, 1000);