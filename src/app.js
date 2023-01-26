let count = 0;
const countValue = document.getElementById("countValue");
const incbutton = document.getElementById("increment");
const decbutton = document.getElementById("decrement");

let incrementCounter = () => {
    count++;
    displayCount();
};

let decrementCounter = () => {
    count--;
    displayCount();
};

incbutton.onclick = incrementCounter;
decbutton.onclick = decrementCounter;

let displayCount = () => (countValue.innerText = `Count : ${count}`);

let createCounter = () => {
    const containerClass = document.createElement("div");
    const counterHeading = document.createElement("h1");
    const para = document.createElement('p')
    const incButton = document.createElement('button')
    const decButton = document.createElement('button')
    container.classList.add('counterContainer')
    counterHeading.classList.add('counterHeading')
    
    incButton.id = "increment";
    decButton.id = "decrement";
    incButton.innerText = "+";
    decButton.innerText = "-";
    incbutton.onclick = incrementCounter;
    decButton.onclick = decrementCounter;
    const container = document.querySelector(".counterContainer");
    container.appendChild(incButton);
    container.appendChild(decButton);
};

createCounter();
