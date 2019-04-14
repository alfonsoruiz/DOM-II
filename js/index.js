// Code goes here
const navLinks = document.querySelectorAll('.nav-link');
const signUpBtn = document.querySelectorAll('.btn');
const header = document.querySelector('h1');
const contestHeader = document.querySelector('.contest h2');
const body = document.querySelector('body');
const dropZone = document.querySelector('.drop-zone');
const destinationDiv = document.querySelectorAll('.destination');
let dropItem;

navLinks.forEach(element => {
    element.addEventListener('click', event => event.preventDefault());
    element.addEventListener('mouseover', event => event.target.style.fontSize = '2rem');
    element.addEventListener('mouseleave', event => event.target.style.fontSize = '1.6rem');
});

body.addEventListener('keydown', event => alert('To proceed click the sign up buttons!'));
body.addEventListener('wheel', event => console.log('wheel event detected'));

signUpBtn.forEach(element => {
    element.addEventListener('dragstart', event => {
        dropItem = event.target;
        setTimeout(() => event.target.style.display = 'none', 0);
    });
    element.addEventListener('dragend', event => event.target.style.display = 'flex');
    element.addEventListener('dblclick', event => {
        event.target.style.background = '#FFEBCD'
        event.target.style.color = 'black';
    });
    element.addEventListener('mouseup', event => {
        event.target.style.background = '#17A2B8';
        event.target.style.color = 'white';
    });
    element.addEventListener('click', event => {
        event.target.style.border = '5px solid red';
        event.stopPropagation();
    });
});

dropZone.addEventListener('dragover', event => event.preventDefault());
dropZone.addEventListener('dragenter', event => event.preventDefault());
dropZone.addEventListener('drop', function(event) {
    dropZone.appendChild(dropItem);
    if(dropItem.className === 'btn sun') {
        contestHeader.textContent = 'You chose fun in the sun!';
    } else if(dropItem.className === 'btn mtn') {
        contestHeader.textContent = 'You chose Mountain Excursion';
    } else if(dropItem.className === 'btn isle') {
        contestHeader.textContent = 'You chose Island Getaway';
    }
});

destinationDiv.forEach(element => {
    element.addEventListener('click', event => {
        element.style.border = '5px solid red';
        console.log('destination div has been clicked');
    });
});
window.addEventListener('resize', event => console.log('Window has been resized'));
window.addEventListener('scroll', event => console.log('Scrolling has taken place'));
window.addEventListener('load', event => console.log('page has loaded'));