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
    countValue.classList.add("countValue");
    incrementButton.classList.add("buttons");
    incrementButton.classList.add("increment");
    decrementButton.classList.add("buttons");
    decrementButton.classList.add("decrement");
    buttonContainer.classList.add("buttonContainer");

    incrementButton.innerText = "+";
    decrementButton.innerText = "-";
    counterHeader.innerText = "Counter";
    countValue.innerHTML = `<p>Count is <b>${count}</b></p>`;

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
}
