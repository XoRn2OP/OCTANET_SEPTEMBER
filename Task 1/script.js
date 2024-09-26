
AOS.init({
    duration: 800, 
    easing: 'ease-in-out', 
    once: true, 
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const form = document.querySelector('#contact-form');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const emailValue = emailInput.value.trim();
    if (emailValue === '') {
        showError(emailInput, 'Email is required.');
    } else if (!isValidEmail(emailValue)) {
        showError(emailInput, 'Please enter a valid email.');
    } else {
        showSuccess(emailInput);
        alert('Form submitted successfully!');
        form.reset();
    }
}

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});
