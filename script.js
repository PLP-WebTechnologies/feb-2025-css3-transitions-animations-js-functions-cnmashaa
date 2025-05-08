const button = document.getElementById('animateBtn');
const box = document.getElementById('box');

console.log('Button:', button); // should log the button element
console.log('Box:', box); // should log the box element

function applyAnimation() {
    const isAnimated = localStorage.getItem('isAnimated');
    if (isAnimated === 'true') {
        box.classList.add('animate');
    } else {
        box.classList.remove('animate');
    }
}

function toggleAnimation() {
    console.log('Button clicked');
    if (box.classList.contains('animate')) {
        box.classList.remove('animate');
        localStorage.setItem('isAnimated', 'false');
    } else {
        box.classList.add('animate');
        localStorage.setItem('isAnimated', 'true');
    }
}

button.addEventListener('click', toggleAnimation);

applyAnimation();
