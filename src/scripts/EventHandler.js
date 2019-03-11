const recordButton = document.createElement("button")
recordButton.textContent = "RECORD"
formWrapper.appendChild(recordButton)

let newJournalEntry = {
        date: dateInput.value,
        concept: conceptInput.value,
        text: textInput.value,
        mood: moodInput.value
}

recordButton.addEventListener("click", () => {
        return Data.addNewEntry(newJournalEntry).then(response => {
                console.log(newJournalEntry.date)
                console.log(date)
                entryWrapper.innerHTML = `<p> ${newJournalEntry.date} </p>`

        })
})