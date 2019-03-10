const entryWrapper = document.createElement("div")
entryWrapper.setAttribute("id", "entryWrapper")
container.appendChild(entryWrapper)

Data.allEntries()
        .then(journalEntry => {
                journalEntry.forEach((entry) => {
                        const date = document.createElement("p")
                        const concept = document.createElement("h2")
                        const textEntry = document.createElement("p")
                        const mood = document.createElement("h4")
                        const spacer = document.createElement("br")

                        concept.textContent = entry.concept
                        date.textContent = entry.date
                        textEntry.textContent = entry.text
                        mood.textContent = `Today, I felt ${entry.mood}.`

                        entryWrapper.appendChild(date)
                        entryWrapper.appendChild(concept)
                        entryWrapper.appendChild(textEntry)
                        entryWrapper.appendChild(mood)
                        entryWrapper.appendChild(spacer)
                })
        })