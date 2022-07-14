let bigBox = document.querySelector('.big-box');
let div = document.createElement('div');
let currentlyDrawing = false;
let eraseButton = document.getElementsByClassName("button eraser");
let clearButton = document.getElementsByClassName("button clear");
let smallBoxColor = "blue";
console.log(eraseButton);
populate(16);
function populate(num) {
    for (let row = 0; row < num; row++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.toggle('row');
        bigBox.appendChild(rowDiv);
        for (let col = 0; col < num; col++) {
            let smallBox = document.createElement('div');
            smallBox.classList.toggle('small-box');
            rowDiv.appendChild(smallBox);
        }
    }
}

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

function erase() {
    smallBoxColor = "white";
}
eraseButton[0].addEventListener('click', erase);
/*function clear() {

}
clearButton.addEventListener('click', )*/

