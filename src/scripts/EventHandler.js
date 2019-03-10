const recordButton = document.createElement("button")
recordButton.textContent = "RECORD"
form.appendChild(recordButton)

recordButton.addEventListener("click", () => {
        console.log("Clicked")
})