setInterval(function () {
    const date = new Date();
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let week = weekday[date.getDay("y")]
    let days = date.toLocaleDateString();
    let time = date.toLocaleTimeString()
    const item = document.getElementsByClassName("item");
    const timeClock = document.querySelector(".clock");
    timeClock.innerHTML = `${time}`
    item[0].innerHTML = `${week}`
    item[1].innerHTML = `${days}`

}, 1000)

const stopwatch = document.querySelector(".stopwatch");
stopwatch.onclick = (e) => {
    stopwatch.style.color = "rgb(93, 240, 208)"
    timer.style.color = ""
    document.querySelector(".stopwatch-div").style.display = `block`
    document.querySelector(".timer-div").style.display = `none`
}
const timer = document.querySelector(".timer");
timer.onclick = (e) => {
    timer.style.color = "rgb(93, 240, 208)"
    stopwatch.style.color = ""
    document.querySelector(".stopwatch-div").style.display = `none`
    document.querySelector(".timer-div").style.display = `block`
}

//   timer code
let hour = "0";
let minute = "0";
let second = "0";
let count = "0";
let timer_check = "";
const timer_btn = document.getElementById("start-stopwatch");
const timer_stop = document.getElementById("stop");
const reset_timer = document.getElementById("reset-stopwatch");
timer_btn.onclick = () => {
    timer_check = true;
    stopWatch();
}
timer_stop.onclick = () => {
    timer_check = false;
}
reset_timer.onclick = () => {
    timer_check = false;
    hour = "0";
    minute = "0";
    second = "0";
    document.getElementById("s-print").innerHTML = `${hour}` + ":" + `${minute}` + ":" + `${second}`;
}
function stopWatch() {
    if (timer_check) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;

        if (hour < 10) {
            hrString = "0" + hrString;
        }

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('s-print').innerHTML = hrString + ":" + minString + ":" + secString + ":" + countString;
        
        setTimeout(stopWatch, 10);
    }
}


// ***************** 5 min timer******************
const start_timer = document.getElementById("start-timer")
const reset_timer1 = document.getElementById("reset-timer")
let timer_check1 = "";
start_timer.addEventListener("click",()=>{
    timer_check1 = true;
    stopTimer();
})
reset_timer1.addEventListener("click", () => {
    timer_check1 = false;
    document.getElementById('t-print').innerHTML = "05<small>min</small>:00<small>sec</small>";
})
let minute1 = "4";
let second1 = "59";
let count1 = "99";
function stopTimer() {
    if (timer_check1) {
      //  console.log("clik")
        count1--;

        if (count1 == 0) {
            second1--;
            count1 = 99;
        }

        if (second1 == 0) {
            minute1--;
            second1 = 59;
        }

        if (minute1 == 0) {
            minute1 = 0;
            second1 = 0;
            clearInterval(stopit)
        }

      
        let minString = minute1;
        let secString = second1;
        let countString = count1;

        

        if (minute1 < 10) {
            minString = "0" + minString;
        }

        if (second1 < 10) {
            secString = "0" + secString;
        }

        if (count1 < 10) {
            countString = "0" + countString;
        }

        document.getElementById('t-print').innerHTML = minString + "<small>min</small>:" + secString + "<small>sec</small>";

       let stopit =  setTimeout(stopTimer, 10);
    }
}
