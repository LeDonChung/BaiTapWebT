var btnStart = document.querySelector('.clock-start');
var btnStop = document.querySelector('.clock-stop');
var btnRestart = document.querySelector('.clock-restart');
var timeElement = document.querySelector('.time');
var timeCurrent = 300;
var stt = 0; // 0 Stop 1 Start
var interval = null;



var stopFunction = function() {
    if(stt != 0) {
        stt = 0;
        clearInterval(interval);
        var hrs = Math.floor(timeCurrent / 3600);
        var mins = Math.floor((timeCurrent % 3600) / 60);
        var secs = Math.floor(timeCurrent % 60);
        timeElement.innerHTML = `${hrs}h ${mins}p ${secs}s`;
    } else {
        stt = 1;
        interval = setInterval(function() {
            timeCurrent++;
            var hrs = Math.floor(timeCurrent / 3600);
            var mins = Math.floor((timeCurrent % 3600) / 60);
            var secs = Math.floor(timeCurrent % 60);
            timeElement.innerHTML = `${hrs}h ${mins}p ${secs}s`;
        }, 1000);
    }
} 



var restartFunction = function() {
    clearInterval(interval);
    timeCurrent = 0;
    var hrs = Math.floor(timeCurrent / 3600);
    var mins = Math.floor((timeCurrent % 3600) / 60);
    var secs = Math.floor(timeCurrent % 60);
    timeElement.innerHTML = `${hrs}h ${mins}p ${secs}s`;
}

btnRestart.onclick = function() {
    stt = 0;
    restartFunction();
}

btnStop.onclick = function() {
    stopFunction();
}

btnStart.onclick = function() {
    stt = 1;
    clearInterval(interval);
    interval = setInterval(function() {
        timeCurrent++;
        var hrs = Math.floor(timeCurrent / 3600);
        var mins = Math.floor((timeCurrent % 3600) / 60);
        var secs = Math.floor(timeCurrent % 60);
        timeElement.innerHTML = `${hrs}h ${mins}p ${secs}s`;
    }, 1000);
}