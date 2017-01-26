var timer = document.getElementById("timer");

var countDown = 2;
timer.textContent = countDown;
var intervalId;

function updateTime() {
    timer.textContent = countDown;
    countDown--;
    if (countDown < 0) {
        clearInterval(intervalId);
        document.body.style.background = "url(https://i.ytimg.com/vi/ToBVj4Ee-SQ/maxresdefault.jpg) no-repeat center";
        "Hide yo kids, hide yo wife, the world is endin'"
    }
}

intervalId = setInterval(updateTime, 1000);