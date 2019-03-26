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
        },
        deleteEntry(entryID) {
                return fetch(`http://localhost:8088/entries/${entryID}`, {
                        method: "DELETE"
                })
        },
        getEntry(entryID) {
                return fetch(`http://localhost:8088/entries/${entryID}`)
                        .then(entries => entries.json())
        },
        patchEntry(entryID, updatedEntry) {
                return fetch(`http://localhost:8088/entries/${entryID}`, {
                        method: "PATCH",
                        body: JSON.stringify(updatedEntry),
                        headers: {
                                "content-type": "application/json"
                        }
                })
        }
}