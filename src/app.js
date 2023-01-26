const rootBody = document.getElementById("root");

const buttonRow = document.createElement("div");
const container = document.createElement("div");
const toggleSwitch = document.createElement("button");

toggleSwitch.classList.add("toggleSwitch");

// False -> Timer mode is on
// True -> Counter mode is on
let mode = true;
function toggleMode() {
    mode = !mode;
    if (mode) {
        toggleSwitch.innerText = "Timer";
        container.innerHTML = "";
        createCounter();
    } else {
        toggleSwitch.innerText = "Counter";
        container.innerHTML = "";
        createTimer();
    }
}

toggleSwitch.onclick = toggleMode;

rootBody.appendChild(toggleSwitch);
rootBody.appendChild(container);
toggleMode();
