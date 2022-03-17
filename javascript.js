// Global variables and constants

const questionCardButtonElements = document.querySelectorAll('button[data-js="toggle-answer"]');
const bookmarkElement = document.querySelectorAll('.question-card-svg path');

// Functions

function toggleAnswer(event) {
    event.target.nextElementSibling.classList.toggle('hidden');
    if (event.target.textContent==='Show answer') {
        event.target.textContent='Hide answer'
    } else {
        event.target.textContent='Show answer'
        }
    }

function toggleBookmark(event) {
    event.target.parentElement.classList.toggle('bookmarked');
    // event.target.parentElement.parentElement.classList.toggle('bookmarked-question'); ---> Just tried here to give the whole card item a class when bookmarked
}

// Event Listeners

questionCardButtonElements.forEach((element) => element.addEventListener('click', toggleAnswer));
bookmarkElement.forEach((element) => element.addEventListener('click', toggleBookmark));
