//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    const textInput = document.getElementById("text").value;
    const delayInput = document.getElementById("delay").value;
    const outputDiv = document.getElementById("output");

    const delay = parseInt(delayInput, 10);

    if (!textInput) {
        outputDiv.innerText = "Please enter a message.";
        return;
    }
    
    if (isNaN(delay) || delay < 0) {
        outputDiv.innerText = "Please enter a valid delay in milliseconds.";
        return;
    }

    const delayMessage = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    outputDiv.innerText = "Waiting...";
    
    await delayMessage(delay);

    outputDiv.innerText = textInput;
});
