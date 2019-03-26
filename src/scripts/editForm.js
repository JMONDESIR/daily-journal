const entryEditForm = (entryObject) => {
        let editFormFragment = document.createDocumentFragment()

        const dateLabel = document.createElement("label")
        dateLabel.textContent = "Edit Date"
        const editDate = document.createElement("input")
        editDate.value = entryObject.date
        editDate.id = `editDate--${entryObject.id}`
        console.log(editDate.id)

        const conceptLabel = document.createElement("label")
        conceptLabel.textContent = "Edit Concept"
        const editConcept = document.createElement("input")
        editConcept.value = entryObject.concept
        editConcept.id = `editConcept--${entryObject.id}`
        console.log(editConcept.id)

        const updateButton = document.createElement("button")
        updateButton.classList = "updateButton"
        updateButton.textContent = "Save Changes"
        updateButton.addEventListener("click", EntryUpdate)

        editFormFragment.appendChild(dateLabel)
        editFormFragment.appendChild(editDate)
        editFormFragment.appendChild(conceptLabel)
        editFormFragment.appendChild(editConcept)
        editFormFragment.appendChild(updateButton)

        return editFormFragment
}