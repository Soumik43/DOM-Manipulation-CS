function createTimer() {
    const timerContainer = document.createElement("div");
    const timerHeader = document.createElement("h1");
    const timerValue = document.createElement("p");
    const buttonContainer = document.createElement("div");
    const startButton = document.createElement("button");
    const stopButton = document.createElement("button");

    timerContainer.classList.add("timerContainer");
    timerHeader.classList.add("timerHeader");
    timerValue.classList.add("timerValue");
    buttonContainer.classList.add("timerButtons");
    startButton.classList.add("buttons");
    startButton.classList.add("startButton");
    stopButton.classList.add("buttons");
    stopButton.classList.add("stopButton");

    timerHeader.innerText = "Timer";
    startButton.innerText = "Start";
    stopButton.innerText = "Reset";

    let timer = undefined;

    let hr = 0;
    let min = 0;
    let sec = 0;

    timerValue.innerText = `0${hr}:0${min}:0${sec}`;

    function updateTimer() {
        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
            if (min == 60) {
                hr++;
                min = 0;
            }
        }
        const formattedHr = hr < 10 ? `0${hr}` : `${hr}`;
        const formattedMin = min < 10 ? `0${min}` : `${min}`;
        const formattedSec = sec < 10 ? `0${sec}` : `${sec}`;
        timerValue.innerText = `${formattedHr}:${formattedMin}:${formattedSec}`;
    }

    startButton.onclick = function () {
        if (startButton.innerText === "Pause") {
            startButton.innerText = "Start";
            clearInterval(timer);
        } else {
            startButton.innerText = "Pause";
            timer = setInterval(updateTimer, 1000);
        }
    };

    stopButton.onclick = function () {
        startButton.innerText = "Start";
        clearInterval(timer);
        hr = 0;
        min = 0;
        sec = 0;
        timerValue.innerText = `0${hr}:0${min}:0${sec}`;
    };

    buttonContainer.appendChild(startButton);
    buttonContainer.appendChild(stopButton);

    timerContainer.appendChild(timerHeader);
    timerContainer.appendChild(timerValue);
    timerContainer.appendChild(buttonContainer);

    container.appendChild(timerContainer);
}
