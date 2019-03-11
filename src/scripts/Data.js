const Data = {
        allEntries() {
                return fetch("http://localhost:8088/entries")
                        .then(entries => entries.json())
        },
        addNewEntry(newJournalEntry) {
                return fetch("http://localhost:8088/entries", {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newJournalEntry)
                })
        }
}