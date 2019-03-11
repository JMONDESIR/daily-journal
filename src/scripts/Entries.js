const entryWrapper = document.createElement("div")
entryWrapper.setAttribute("id", "entryWrapper")
container.appendChild(entryWrapper)

Data.allEntries()
        .then(journalEntry => {
                journalEntry.forEach((entry) => {
                        const entryCard = `
                        <div class = "entry">
                        <p>${entry.date}</p>
                        <h2>${entry.concept}</h2>
                        </br>
                        <p>${entry.text}</p>
                        </br>
                        <h4>Today, I felt ${entry.mood}.</h4>
                        `
                        entryWrapper.innerHTML += entryCard
                })
        })