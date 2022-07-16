// ***************************
// VARIABLE DECLARATIONS
// ***************************
let bigBox = document.querySelector('.big-box');
let div = document.createElement('div');
let currentlyDrawing = false;
let eraseButton = document.getElementsByClassName("button eraser");
let clearButton = document.getElementsByClassName("button clear");
let slider = document.getElementById('slider');
let pSlider = document.getElementById('slidervalue');
let eraserOn = false;
let colorPicker = document.getElementsByClassName('color-picker');

// ***************************
// INITIAL GRID SETUP
// ***************************
pSlider.innerHTML = "Grid size: " + slider.value + " x " + slider.value;
pSlider.style.fontSize = "18px";
populate(slider.value);
let smallBoxColor = colorPicker[0].value;
colorPicker[1].value = "#ffffff";
// ***************************
// POPULATE FUNCTION TO FILL UP GRID
// ***************************
function populate(num) {
    bigBox.innerHTML = "";
    for (let row = 0; row < num; row++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        bigBox.appendChild(rowDiv);
        for (let col = 0; col < num; col++) {
            let smallBox = document.createElement('div');
            smallBox.classList.add('small-box');
            rowDiv.appendChild(smallBox);
        }
    }
}
function populateWithColor(num) {
    bigBox.innerHTML = "";
    for (let row = 0; row < num; row++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        bigBox.appendChild(rowDiv);
        for (let col = 0; col < num; col++) {
            let smallBox = document.createElement('div');
            smallBox.classList.add('small-box');
            smallBox.style.backgroundColor = colorPicker[1].value;
            console.log(colorPicker[1].value);
            rowDiv.appendChild(smallBox);
        }
    }
}

// ***************************
// EVENT LISTENERS FOR THE GRID
// ***************************
bigBox.addEventListener('mousedown', (e) => {
    currentlyDrawing = true;
    e.target.style.backgroundColor = smallBoxColor;
});
bigBox.addEventListener('mousemove', (e) => {
    if (currentlyDrawing) {
        e.target.style.backgroundColor = smallBoxColor;
    }
});
bigBox.addEventListener('mouseup', (e) => {
    currentlyDrawing = false;
});

// ***************************
// BUTTON EVENT LISTENERS 
// ***************************
eraseButton[0].addEventListener('click', erase); // Eraser button
function erase() { // Eraser Button
    eraserOn = !eraserOn;
    if (eraserOn) {
        smallBoxColor = colorPicker[1].value;
    } else {
        smallBoxColor = colorPicker[0].value;
    }
    eraseButton[0].classList.toggle('eraser-on');
}
slider.addEventListener('mouseup', () => { // Slider
    populate(slider.value);
    if (eraseButton[0].classList.contains('eraser-on')) {
        eraseButton[0].classList.remove('eraser-on');
        smallBoxColor = colorPicker[0].value;
        if (eraserOn) {
            eraserOn = false;
        }
    }
});
slider.addEventListener('mousemove', () => { // Slider
    pSlider.innerHTML = "Grid size: " + slider.value + " x " + slider.value;
});
colorPicker[0].addEventListener('input', () => { // Color Picker
    smallBoxColor = colorPicker[0].value;
});
clearButton[0].addEventListener('mousedown', () => { // Clear Button
    clearButton[0].classList.toggle('eraser-on');
    smallBoxColor = "white";
    populateWithColor(slider.value);
    smallBoxColor = colorPicker[0].value;
    if (eraseButton[0].classList.contains('eraser-on')) {
        eraseButton[0].classList.remove('eraser-on');
        if (eraserOn) {
            eraserOn = false;
        }
        smallBoxColor = colorPicker.value;
    }
});
clearButton[0].addEventListener('mouseup', () => {
    clearButton[0].classList.toggle('eraser-on');
});
colorPicker[1].addEventListener('input', () => {
    //smallBoxColor = colorPicker[1].value;
    populateWithColor(slider.value);
});


