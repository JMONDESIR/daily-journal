// MAIN CONTAINER
const container = document.querySelector("#container")
const formWrapper = document.createElement("div")
formWrapper.setAttribute("id", "formWrapper")
container.appendChild(formWrapper)
const form = document.createElement("form")
formWrapper.appendChild(form)
const split = document.createElement("br")

// DATE FIELDSET
const dateField = document.createElement("fieldset")
const dateLabel = document.createElement("label")
dateLabel.innerHTML = "Date of Entry"
const dateInput = document.createElement("input")
dateInput.setAttribute("id", "journalDate")
dateInput.setAttribute("type", "date")

// CONCEPT FIELDSET
const conceptField = document.createElement("fieldset")
const conceptLabel = document.createElement("label")
conceptLabel.innerHTML = "Concept"
const conceptInput = document.createElement("input")
conceptInput.setAttribute("id", "journalConcept")

// TEXT FIELDSET
const textField = document.createElement("fieldset")
textField.setAttribute("id", "textField")
const textLabel = document.createElement("label")
textLabel.innerHTML = "Journal Entry"
const textInput = document.createElement("textarea")
textInput.setAttribute("id", "journalText")

// MOOD FIELDSET
const moodArr = ["great", "good", "ok", "doubtful"]
const moodField = document.createElement("fieldset")
const moodLabel = document.createElement("label")
moodLabel.innerHTML = "Mood for the day"
const moodInput = document.createElement("select")
moodArr.forEach(mood => {
        const moodSelect = document.createElement("option")
        moodSelect.setAttribute("value", mood)
        moodSelect.textContent = mood
        moodInput.appendChild(moodSelect)
})

// APPEND ELEMENTS
form.appendChild(dateField)
dateField.appendChild(dateLabel)
dateField.appendChild(dateInput)

form.appendChild(conceptField)
conceptField.appendChild(conceptLabel)
conceptField.appendChild(conceptInput)

form.appendChild(textField)
textField.appendChild(textLabel)
textField.appendChild(textInput)

form.appendChild(moodField)
moodField.appendChild(moodLabel)
moodField.appendChild(moodInput)
