const clearElement = domElement => {
        while (domElement.firstChild) {
                domElement.removeChild(domElement.firstChild);
        }
};

const saveEntry = () => {
        console.log("button clicked")
        let newJournalEntry = {
                date: dateInput.value,
                concept: conceptInput.value,
                text: textInput.value,
                mood: moodInput.value
        }
        Data.addNewEntry(newJournalEntry).then(showAllEntries.buildit)
}

const deleteEntry = () => {
        const entryContainer = document.querySelector("#entryContainer")
        console.log(event.target.parentNode.id)
        let entryID = event.target.parentNode.id.split("--")[1];
        Data.deleteEntry(entryID)
                // .then(entryContainer.innerHTML = "")
                .then(clearElement(entryContainer))
                .then(showAllEntries.buildit)
}

const editEntry = () => {
        let entryID = event.target.parentNode.id.split("--")[1]
        const entry = document.querySelector(`#entryCard--${entryID}`)
        console.log(entry)
        clearElement(entry)

        Data.getEntry(entryID).then(entryToEdit => {
                console.log(entryToEdit)
                const entryFormForEntry = entryEditForm(entryToEdit)
                entry.appendChild(entryFormForEntry)
        })
}

const EntryUpdate = () => {
        let entryID = event.target.parentNode.id.split("--")[1]
        const editedDate = document.querySelector(`#editDate--${entryID}`)
        const editedConcept = document.querySelector(`#editConcept--${entryID}`)

        let updatedEntry= {
                date: editedDate.value,
                concept: editedConcept.value
        };
        Data.patchEntry(entryID, updatedEntry)
        .then(clearElement(entryContainer))
        .then(showAllEntries.buildit)
}