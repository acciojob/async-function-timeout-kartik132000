document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", async function () {
        const textInput = document.getElementById("text").value.trim();
        const delayInput = document.getElementById("delay").value;
        const outputDiv = document.getElementById("output");

        const delay = parseInt(delayInput, 10);

        // Validate text input
        if (!textInput) {
            outputDiv.innerText = "Please enter a message.";
            return;
        }

        // Validate delay input
        if (isNaN(delay) || delay < 0) {
            outputDiv.innerText = "Please enter a valid delay in milliseconds.";
            return;
        }

        // Function to introduce delay
        const delayMessage = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        outputDiv.innerText = "Waiting...";

        await delayMessage(delay);

        outputDiv.innerText = textInput;
    });
});
