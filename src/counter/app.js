let count = 0;

function createCounter() {
    const counterContainer = document.createElement("div");
    const incrementButton = document.createElement("button");
    const decrementButton = document.createElement("button");
    const buttonContainer = document.createElement("div");
    const countValue = document.createElement("p");
    const counterHeader = document.createElement("h1");

    counterContainer.classList.add("counterContainer");
    counterHeader.classList.add("counterHeader");
    countValue.classList.add("CountValue");
    incrementButton.classList.add("increment");
    decrementButton.classList.add("decrement");
    buttonContainer.classList.add("buttonContainer");

    incrementButton.innerText = "+";
    decrementButton.innerText = "-";
    counterHeader.innerText = "Counter";
    countValue.innerText = `Count is ${count}`;

    function incrementCount() {
        count++;
        updateCount();
    }
    function decrementCount() {
        count--;
        updateCount();
    }
    function updateCount() {
        countValue.innerText = `Count is ${count}`;
    }

    incrementButton.onclick = incrementCount;
    decrementButton.onclick = decrementCount;

    buttonContainer.appendChild(incrementButton);
    buttonContainer.appendChild(decrementButton);

    counterContainer.appendChild(counterHeader);
    counterContainer.appendChild(countValue);
    counterContainer.appendChild(buttonContainer);

    container.appendChild(counterContainer);
};
