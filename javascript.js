// Global variables

const questionCardButtonElements = document.querySelectorAll("button[data-js='toggle-answer']");


// Functions

function toggleAnswer(event) {
    event.target.nextElementSibling.classList.toggle('hidden');
    console.log(event.target.textContent);

    if (event.target.textContent==='Show answer') {
        event.target.textContent='Hide answer'
    } else {
        event.target.textContent='Show answer'
        }
    };


// Event Listeners

questionCardButtonElements.forEach((element) => element.addEventListener('click', toggleAnswer));
