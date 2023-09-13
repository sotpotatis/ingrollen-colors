/* script.js
Defines the colors used on the main page as well as handles
some animations etc. */
const COLORS = { // Information about colors
    red: {
        name: "röd",
        colorCode: "#ff0000"
    },
    yellow: {
        name: "gul",
        colorCode: "#ffff00"
    },
    green: {
        name: "grön",
        colorCode: "#00b050"
    },
    blue: {
        name: "blå",
        colorCode: "#00ccff"
    },

}
// Elements in the website
const colorChoicesContainer = document.getElementById("colorChoicesContainer")
const chosenColorContainer = document.getElementById("chosenColorContainer")
const fullScreenCloseButton = document.getElementById("fullScreenCloseButton")
// Hide stuff that should be hidden by default
chosenColorContainer.classList.add("hidden")
fullScreenCloseButton.classList.add("hidden")
// Add colors
for (const [colorId, colorInformation] of Object.entries(COLORS)){
    const newNode = document.createElement("button")
    newNode.style = `background: ${colorInformation.colorCode};`
    newNode.textContent = colorInformation.name
    newNode.classList.add("colorChoice")
    newNode.id = `${colorId}`
    // Add function to set color on fullscreen on click.
    newNode.onclick = () => {
        console.log(`Chosen color ${colorId}.`)
        chosenColorContainer.style = `background: ${colorInformation.colorCode};`
        colorChoicesContainer.classList.add("hidden")
        chosenColorContainer.classList.remove("hidden")
        fullScreenCloseButton.classList.remove("hidden")
    }
    colorChoicesContainer.appendChild(newNode)
}
// Add function on close
onColorViewClose = () => {
    console.log("Closing...")
    chosenColorContainer.classList.add("hidden")
    fullScreenCloseButton.classList.add("hidden")
    colorChoicesContainer.classList.remove("hidden")
}
fullScreenCloseButton.onclick = onColorViewClose
chosenColorContainer.onclick = onColorViewClose