//animate on scroll

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//Form 
const submitButton = document.querySelector('.submit');
const thaksMessage = document.querySelector('.thank-you');
const errorMessage = document.querySelector('.error-message');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputTextarea = document.querySelector('#textarea');
const formSelect = document.querySelector('.form-select');

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    if(inputName.value != "" && inputEmail.value != "" && inputTextarea.value != "") {
        errorMessage.classList.add('d-none')
        thaksMessage.classList.remove('fade-away')
        thaksMessage.classList.remove('d-none')
        inputName.value = "";
        inputEmail.value = "";
        inputTextarea.value = "";
        formSelect.value = 0;
        setTimeout(() => {
            thaksMessage.classList.add('fade-away')
            thaksMessage.addEventListener('transitionend', () => {
                thaksMessage.classList.add('d-none')
                
            })
        }, 5000)
    } else {
        thaksMessage.classList.add('d-none')
        errorMessage.classList.remove('fade-away')
        errorMessage.classList.remove('d-none')
        setTimeout(() => {
            errorMessage.classList.add('fade-away')
            errorMessage.addEventListener('transitionend', () => {
                errorMessage.classList.add('d-none')
            })
        }, 5000)
    }
});

//Timetable
const timetableBtn = document.querySelector('#timetable-btn');
const modal = document.querySelector('#modal');
const home = document.querySelector('#home');
const modalClose = document.querySelector('#modal-close');

timetableBtn.addEventListener('click', () => {
    modal.classList.remove('d-none');
    home.classList.add('modal-open')
})

modalClose.addEventListener('click', () => {
    modal.classList.add('d-none')
    home.classList.remove('modal-open')
})
