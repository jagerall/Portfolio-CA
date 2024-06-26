fetch('../pages/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })

const container = document.getElementById('navbar-logo');
const circle1 = document.getElementById('logo-circle1');
const circle2 = document.getElementById('logo-circle2');

let isHovered = false;
let inProgress = false;

container.addEventListener('mouseover', () => {
    isHovered = true;
    animateCircles();
});

container.addEventListener('mouseout', () => {
    isHovered = false;
    animateCircles();
});

function animateCircles() {
    if (isHovered && !inProgress) {
        inProgress = true;
        circle1.style.animation = 'logo-circle1 .5s ease forwards';
        circle2.style.animation = 'logo-circle2 .5s ease forwards';
        setTimeout(() => {
            inProgress = false;
        }, 500);
    } else {
        if (inProgress) {
            setTimeout(() => {
                circle1.style.animation = 'reverseCircle1 .5s ease forwards';
                circle2.style.animation = 'reverseCircle2 .5s ease forwards';
            }, 500);
        } else {
            circle1.style.animation = 'reverseCircle1 .3s ease forwards';
            circle2.style.animation = 'reverseCircle2 .3s ease forwards';
        }
    }
}


document.getElementById('toggle')
    .addEventListener('click', function () {
        var body = document.body;
        if (body.classList.contains('nav-open')) {
            body.classList.remove('nav-open');
            body.classList.add('nav-close');
        } else {
            body.classList.add('nav-open');
            body.classList.remove('nav-close');
        }
    });

