const recordButton = document.createElement("button")

recordButton.textContent = "RECORD"
formWrapper.appendChild(recordButton)

recordButton.addEventListener("click", () => {

        let newJournalEntry = {
                date: dateInput.value,
                concept: conceptInput.value,
                text: textInput.value,
                mood: moodInput.value
        }

        Data.addNewEntry(newJournalEntry).then(showAllEntries.buildit)
        })

const deleteEntry = () => {
        console.log(deleteButton.id)
}