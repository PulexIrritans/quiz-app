// Global variables and constants

const questionCardElements = document.querySelectorAll('.question-card');
const inputContainerElements = document.querySelectorAll('.input-container');
const footerMenuElements = document.querySelectorAll('.quiz-footer-list-item');

// Functions

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

/// Event Listeners and functions for question card
questionCardElements.forEach(element => {
  const buttonElement = element.querySelector(
    'button[data-js="toggle-answer"]'
  );
  const answerElement = element.querySelector('.question-card-answer');
  const bookmarkElement = element.querySelector('.question-card-svg');

  //// Bookmark
  bookmarkElement.addEventListener('click', () => {
    element.classList.toggle('bookmarked-question');
    bookmarkElement.classList.toggle('bookmarked');
    const activeFooterMenuElement = Array.from(footerMenuElements).find(
      element => element.classList.contains('item-active')
    );
    const activeFooterMenuElementAttribut =
      activeFooterMenuElement.getAttribute('data-js');
    if (activeFooterMenuElementAttribut === 'bookmarks')
      element.classList.add('hidden-question');
  });

  //// Toggle answer button
  buttonElement.addEventListener('click', () => {
    answerElement.classList.toggle('hidden');
    buttonElement.textContent.trim() === 'Show answer'
      ? (buttonElement.textContent = 'Hide answer')
      : (buttonElement.textContent = 'Show answer');
  });
});

/// Event Listener and function for Menu items
footerMenuElements.forEach((item, index) => {
  const allSectionElements = document.querySelectorAll('section');
  const pageHeaderElement = document.querySelector('.quiz-header-h1');

  item.addEventListener('click', () => {
    footerMenuElements.forEach(element => {
      element.classList.remove('item-active');
    });
    item.classList.add('item-active');

    if (index === 0) pageHeaderElement.textContent = 'Quizzly';
    if (index === 1) pageHeaderElement.textContent = 'Bookmarks';
    if (index === 2) pageHeaderElement.textContent = 'Create';
    if (index === 3) pageHeaderElement.textContent = 'Profile';

    allSectionElements.forEach(element => {
      element.classList.add('hidden');
    });
    if (index === 2 || index === 3)
      allSectionElements[index - 1].classList.remove('hidden');

    if (index === 0) {
      allSectionElements[0].classList.remove('hidden');
      allSectionElements[0]
        .querySelectorAll('.question-card')
        .forEach(questioncard => {
          questioncard.classList.remove('hidden-question');
        });
    }
    if (index === 1) {
      allSectionElements[0].classList.remove('hidden');
      allSectionElements[0]
        .querySelectorAll('.question-card')
        .forEach(questioncard => {
          questioncard.classList.add('hidden-question');
          if (questioncard.classList.contains('bookmarked-question')) {
            questioncard.classList.remove('hidden-question');
          }
        });
    }
  });
});
