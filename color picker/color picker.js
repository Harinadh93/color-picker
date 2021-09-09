let colorPickerElement = document.getElementById("colorPickerContainer");
let selectedColorHexElement = document.getElementById("selectedColorHexCode");

function changeBgToGreyAndUpdateText() {
    colorPickerElement.style.backgroundColor = "#e0e0e0";
    selectedColorHexElement.textContent = "#e0e0e0";
}

function changeBgToGreenAndUpdateText() {
    colorPickerElement.style.backgroundColor = "#6fcf97";
    selectedColorHexElement.textContent = "#6fcf97";
}

function changeBgToBlueAndUpdateText() {
    colorPickerElement.style.backgroundColor = "#56ccf2";
    selectedColorHexElement.textContent = "#56ccf2";
}

function changeBgToPurpleAndUpdateText() {
    colorPickerElement.style.backgroundColor = "#bb6bd9";
    selectedColorHexElement.textContent = "#bb6bd9";
}
