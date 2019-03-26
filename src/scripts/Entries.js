const showAllEntries = {
        buildit() {
                Data.allEntries()
                        .then(journalEntry => {
                                journalEntry.forEach((entry) => {
                                        console.log("entries")
                                        const entryContainer = document.querySelector("#entryContainer")

                                        const entryCard = document.createElement("div")
                                        entryCard.classList = "entryCard"
                                        entryCard.id = `entryCard--${entry.id}`

                                        const entryDate = document.createElement("p")
                                        entryDate.textContent = entry.date
                                        entryCard.appendChild(entryDate)

                                        const entryConcept = document.createElement("h2")
                                        entryConcept.textContent = entry.concept
                                        entryCard.appendChild(entryConcept)

                                        const entryText = document.createElement("p")
                                        entryText.textContent = entry.text
                                        entryCard.appendChild(entryText)

                                        const entryMood = document.createElement("h4")
                                        entryMood.textContent = entry.mood
                                        entryCard.appendChild(entryMood)

                                        const editButton = document.createElement("button")
                                        editButton.id = "editButton"
                                        editButton.textContent = "EDIT"
                                        entryCard.appendChild(editButton)
                                        editButton.addEventListener("click", editEntry)

                                        const deleteButton = document.createElement("button")
                                        deleteButton.textContent = "DELETE"
                                        entryCard.appendChild(deleteButton)
                                        deleteButton.addEventListener("click", deleteEntry)

                                        const hr = document.createElement("hr")
                                        entryCard.appendChild(hr)

                                        entryContainer.appendChild(entryCard)

                                })
                        })
        }
}