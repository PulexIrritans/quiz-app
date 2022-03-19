// Global variables and constants

const questionCardButtonElements = document.querySelectorAll(
  'button[data-js="toggle-answer"]'
);
const bookmarkElements = document.querySelectorAll('.question-card-svg path');
const inputContainerElements = document.querySelectorAll('.input-container');
const footerMenuElements = document.querySelectorAll('.quiz-footer-list-item');


// Functions
/// Question card functions

function toggleAnswer(event) {
  event.target.nextElementSibling.classList.toggle('hidden');
  const buttonText = event.target.textContent.trim();
  buttonText === 'Show answer' ? event.target.textContent = 'Hide answer' : event.target.textContent = 'Show answer';
}

function toggleBookmark(event) {
  event.target.parentElement.classList.toggle('bookmarked');
  event.target.parentElement.parentElement.classList.toggle('bookmarked-question');  
  const activeFooterMenuElement = Array.from(footerMenuElements).find(element => element.classList.contains('item-active'));
  const activeFooterMenuElementAttribut = activeFooterMenuElement.getAttribute('data-js');
  if (activeFooterMenuElementAttribut==='bookmarks') event.target.parentElement.parentElement.classList.add('hidden');
}


/// Function that adjust page content depending on clicked list menu item
function changePageContent(event) {
    
    const allSectionElements = document.querySelectorAll('section')
    const sectionIndexElement = document.querySelector('.index');
    const sectionBookmarksElement = document.querySelector('.bookmarks');
    const sectionCreateElement = document.querySelector('.create');
    const sectionProfileElement = document.querySelector('.profile');
    const pageHeaderElement = document.querySelector('.quiz-header-h1');
    
    //// Changes highlighting for active menu element
    footerMenuElements.forEach(element => {
    element.classList.remove('item-active')})
    event.target.classList.add('item-active') 

    //// Changes visible section and header depending on clicked menu element,
    //// including display of only bookmarked question cards in bookmarks section
    allSectionElements.forEach(element => {
    element.classList.add('hidden')})
    const eventTargetAttribut = event.target.getAttribute('data-js');

    if (eventTargetAttribut==='home') {
        sectionIndexElement.classList.remove('hidden');
        pageHeaderElement.textContent = 'Quizzly';
        sectionIndexElement.querySelectorAll('.question-card').forEach(element => {
            element.classList.remove('hidden');
        })
    }
    if (eventTargetAttribut==='bookmarks') {
        sectionIndexElement.classList.remove('hidden');
        pageHeaderElement.textContent = 'Bookmarks';
        sectionIndexElement.querySelectorAll('.question-card').forEach(element => {
            element.classList.add('hidden');
            if (element.classList.contains('bookmarked-question')) {
                element.classList.remove('hidden');
            }
        })

    } 
    if (eventTargetAttribut==='create') {
        sectionCreateElement.classList.remove('hidden');
        pageHeaderElement.textContent = 'Create';
  
    } 
    if (eventTargetAttribut==='profile') {
        sectionProfileElement.classList.remove('hidden');
        pageHeaderElement.textContent = 'Profile';

    }
}

// Event Listener

/// Event Listener and function for input count
inputContainerElements.forEach(element => {
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

/// Event Listener Show-Hide Answer Button
questionCardButtonElements.forEach(element =>
  element.addEventListener('click', toggleAnswer)
);

/// Event Listener Bookmark
bookmarkElements.forEach(element =>
  element.addEventListener('click', toggleBookmark)
);

/// Event Listener for Menu items
footerMenuElements.forEach(item => {
    item.addEventListener('click', changePageContent);
});