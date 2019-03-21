// MENU CONTAINER
const menuContainer = document.querySelector("#menuContainer")
const formWrapper = document.createElement("div")
formWrapper.id = "formWrapper"
menuContainer.appendChild(formWrapper)
const form = document.createElement("form")
form.id = "form"
formWrapper.appendChild(form)
const split = document.createElement("br")

// DATE FIELDSET
const dateField = document.createElement("fieldset")
const dateLabel = document.createElement("label")
dateLabel.textContent = "Date of Entry"
const dateInput = document.createElement("input")
dateInput.id = "journalDate"
dateInput.setAttribute("type", "date")

// CONCEPT FIELDSET
const conceptField = document.createElement("fieldset")
const conceptLabel = document.createElement("label")
conceptLabel.textContent = "Concept"
const conceptInput = document.createElement("input")
conceptInput.id = "journalConcept"

// TEXT FIELDSET
const textField = document.createElement("fieldset")
textField.id = "textField"
const textLabel = document.createElement("label")
textLabel.textContent = "Journal Entry"
const textInput = document.createElement("textarea")
textInput.id = "journalText"

// MOOD FIELDSET
const moodArr = ["great", "good", "ok", "doubtful"]
const moodField = document.createElement("fieldset")
const moodLabel = document.createElement("label")
moodLabel.textContent = "Mood for the day"
const moodInput = document.createElement("select")
moodArr.forEach(mood => {
        const moodSelect = document.createElement("option")
        moodSelect.setAttribute("value", mood)
        moodSelect.textContent = mood
        moodInput.appendChild(moodSelect)
})

const hr = document.createElement("hr")

// RADIO FIELDSET
const radioField = document.createElement("fieldset")
const radioLegend = document.createElement("legend")
radioLegend.textContent = "Filter Entries by Mood"
                //         <legend>Filter Entries by Mood</legend>
const greatInput = document.createElement("input")
greatInput.type = "radio"
const greatLabel = document.createElement("label")
greatLabel.textContent = "great"
radioField.appendChild(greatLabel)

const goodInput = document.createElement("input")
goodInput.type = "radio"
const goodLabel = document.createElement("label")
goodLabel.textContent = "good"
radioField.appendChild(goodLabel)


                //                 <input type="radio">
                //                         <label>good</label>
                //                 </input>
                //                 <input type="radio">
                //                         <label>ok</label>
                //                 </input>
                //                 <input type="radio">
                //                         <label>doubtful</label>
                //                 </input>

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

form.appendChild(hr)

form.appendChild(radioField)
radioField.appendChild(radioLegend)
radioField.appendChild(greatInput)
radioField.appendChild(goodInput)