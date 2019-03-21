const Data = {
        allEntries() {
                return fetch("http://localhost:8088/entries")
                        .then(entries => entries.json())
        },
        addNewEntry(newJournalEntry) {
                return fetch("http://localhost:8088/entries", {
                        method: "POST",
                        body: JSON.stringify(newJournalEntry),
                        headers: {
                                "Content-Type": "application/json"
                        }
                })
                        .then(entries => entries.json())
        }
}