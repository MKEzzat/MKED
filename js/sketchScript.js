// Webpage 16x16 square divs
// divs created with JS
// 16 divs inside a div
// flexbox
// Adjust borders & margins
// link CSS
// Browser Dev
// errors inJS console
// elements pane check
// console.log tests

// Hover effects: change color
// leaving a pixelated trail through the grid like a pen
// set up listeners for hover
// Add clear button
// Clear button asks for new grid x/y
// new grid have same total size as old
// Max input 100
// use button in HTML
// use prompt in JS
// 64 = 64x64 grid

//Optional:Instead of just changing the color of a square from black to white 
//(for example), have each pass through with the mouse change it to a completely 
//random RGB value. Then try having each pass just add another 10% of black to 
//it so that only after 10 passes is the square completely black.

// CODE

const canvas = document.querySelector('.canvas');
const draw = document.querySelector('.sketchButton');
const clear= document.querySelector('.clearButton');
const count = document.querySelector('.divCount');
let num = parseFloat(count.value);

draw.addEventListener('click',() => {
for (let i=1; i<=count.value; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.toggle('sketchCard')
    canvas.appendChild(newDiv);
}
    
});

clear.addEventListener('click',() => {
    let num = 0
    count.value = "";
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
})