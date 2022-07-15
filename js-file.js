// ***************************
// VARIABLE DECLARATIONS
// ***************************
let bigBox = document.querySelector('.big-box');
let div = document.createElement('div');
let currentlyDrawing = false;
let eraseButton = document.getElementsByClassName("button eraser");
let clearButton = document.getElementsByClassName("button clear");
let slider = document.getElementById('slider');
let sliderValue = slider.value;
let pSlider = document.getElementById('slidervalue');
let eraserOn = false;
let colorPicker = document.querySelector('#color-picker');

// ***************************
// INITIAL GRID SETUP
// ***************************
pSlider.innerHTML = "Grid size: " + slider.value + " x " + slider.value;
populate(slider.value);
let smallBoxColor = colorPicker.value;

// ***************************
// POPULATE FUNCTION TO FILL UP GRID
// ***************************
function populate(num) {
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

// ***************************
// EVENT LISTENERS FOR THE GRID
// ***************************
bigBox.addEventListener('mousedown', (e) => {
    //smallBoxColor = colorPicker.value;
    currentlyDrawing = true;
    e.target.style.backgroundColor = smallBoxColor;
});
bigBox.addEventListener('mousemove', (e) => {
    //smallBoxColor = colorPicker.value;
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
        smallBoxColor = "white";
    } else {
        smallBoxColor = colorPicker.value;
    }
    eraseButton[0].classList.toggle('eraser-on');
}
slider.addEventListener('mouseup', () => { // Slider
    bigBox.innerHTML = "";
    sliderValue = slider.value;
    populate(slider.value);
});
slider.addEventListener('mousemove', () => { // Slider
    pSlider.innerHTML = "Grid size: " + slider.value + " x " + slider.value;
});
colorPicker.addEventListener('input', () => { // Color Picker
    smallBoxColor = colorPicker.value;
});
clearButton[0].addEventListener('click', () => { // Clear Button
    bigBox.innerHTML = "";
    smallBoxColor = "white";
    populate(slider.value);
    smallBoxColor = colorPicker.value;
});


