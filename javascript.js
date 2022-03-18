// Global variables and constants

const questionCardButtonElements = document.querySelectorAll(
  'button[data-js="toggle-answer"]'
);
const bookmarkElement = document.querySelectorAll('.question-card-svg path');
const inputContainerElement = document.querySelectorAll('.input-container');
const footerMenuElements = document.querySelectorAll('.quiz-footer-list-item');
const questionCardElement = document.querySelectorAll('.question-card')


// Functions

// function toggleAnswer(event) {
//   event.target.nextElementSibling.classList.toggle('hidden');
//   if (event.target.textContent === 'Show answer') {
//     event.target.textContent = 'Hide answer';
//   } else {
//     event.target.textContent = 'Show answer';
//   }
// }

function toggleBookmark(event) {
  event.target.parentElement.classList.toggle('bookmarked');
  // event.target.parentElement.parentElement.classList.toggle('bookmarked-question'); ---> Just tried here to give the whole card item a class when bookmarked
}


function changePageContent(event) {
    const allSectionElements = document.querySelectorAll('section')
    const sectionIndexElement = document.querySelector('.index');
    const sectionBookmarksElement = document.querySelector('.bookmarks');
    const sectionCreateElement = document.querySelector('.create');
    const sectionProfileElement = document.querySelector('.profile');
    
    allSectionElements.forEach(element => {
    element.classList.add('hidden')})
    const eventTargetAttribut = event.target.getAttribute("data-js");
    
    if (eventTargetAttribut==='home') {
        sectionIndexElement.classList.remove('hidden') 
    }
    if (eventTargetAttribut==='bookmarks') {
        sectionBookmarksElement.classList.remove('hidden');
    } 
    if (eventTargetAttribut==='create') {
        sectionCreateElement.classList.remove('hidden');  
    } 
    if (eventTargetAttribut==='profile') {
        sectionProfileElement.classList.remove('hidden');
    }
}

// Event Listener and function for input count
inputContainerElement.forEach(element => {
  const inputFieldElement = element.querySelector('.create-form-input');
  const createFormCounterElement = element.querySelector(
    '.create-form-counter'
  );

  inputFieldElement.addEventListener('input', () => {
    inputFieldElement.value.length > 0
      ? (createFormCounterElement.textContent = inputFieldElement.value.length)
      : (createFormCounterElement.textContent = '');
  });
});

// Event Listener Show-Hide Answer
// questionCardButtonElements.forEach(element =>
//   element.addEventListener('click', toggleAnswer)
// );

// Event Listener Bookmark
bookmarkElement.forEach(element =>
  element.addEventListener('click', toggleBookmark)
);

// Event Listener for menu
footerMenuElements.forEach(element => 
    element.addEventListener('click', changePageContent)
    );

// Event Listener Question Card
questionCardElement.forEach(element => {
    const buttonElement = element.querySelector('button')
    buttonElement.addEventListener('click', () => {
        element.querySelector('.question-card-answer').classList.toggle('hidden');
        if (buttonElement.textContent==='Show answer') {
            buttonElement.textContent = 'Hide answer'
        } else {buttonElement.textContent = 'Show answer'}
        }
    )
})
