const headerContainer = document.querySelector("#headerContainer")
headerContainer.id = "headerContainer"
const header = document.createElement("header")
const headerTitle = document.createElement("h1")
headerTitle.innerHTML = "Daily Journal"

headerContainer.appendChild(header)
header.appendChild(headerTitle)