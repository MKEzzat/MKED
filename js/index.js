// Buttons
const runRPS = document.querySelector('#runRPS')
const quitRPS = document.querySelector('#quitRPS')


const welcome = document.querySelector('.welcome_container');
const projects = document.querySelector('.projects');
const canvas = document.querySelector('.project_canvas');


// Open Close 

runRPS.addEventListener('click',() => {
    welcome.setAttribute ('id', 'hidden');
    projects.setAttribute('id', 'hidden');
    canvas.setAttribute('id', 'active');
})

quitRPS.addEventListener('click',() => {
    welcome.setAttribute('id', 'active');
    projects.setAttribute('id', 'active');
    canvas.setAttribute('id', 'hidden');
})