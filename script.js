export function countChars(obj) {
  document.getElementById('charNum').textContent =
    obj.value.length + ' characters';
}

const collapseList = document.querySelectorAll('[data-js="collapse"]');

collapseList.forEach(collapseElement => {
  console.log(collapseList, 'list');
  const collapseTrigger = collapseElement.querySelector(
    '[data-js="collapse-trigger"]'
  );
  console.log(collapseTrigger, 'trigger');
  const collapseContent = collapseElement.querySelector(
    '[data-js="collapse-content"]'
  );
  console.log(collapseContent, 'content');
  collapseTrigger.addEventListener('click', () => {
    collapseContent.classList.toggle('hide');
  });
});

const changeColor = document.querySelectorAll('[data-js="changeColor"]');

changeColor.forEach(changeColorElement => {
  console.log(changeColor);
  const colorTrigger = changeColorElement.querySelector('[data-js="bookmark"]');
  console.log(colorTrigger);
  colorTrigger.addEventListener('click', () => {
    colorTrigger.classList.toggle('button2');
  });
});

const start = document.querySelector('[data-js="start"]');
const addQuiz = document.querySelector('[data-js="addQuiz"]');
const profile = document.querySelector('[data-js="profile-page"]');

//Button to different sites
const backToStart = document.querySelector('[data-js="backToStart"]');
const addQuizPage = document.querySelector('[data-js="add-quiz"]');
const toProfile = document.querySelector('[data-hs="profilePage"]');

backToStart.addEventListener('click', () => {
  profile.classList.add('hide');
  addQuiz.classList.add('hide');
  start.classList.remove('hide');
});

addQuizPage.addEventListener('click', () => {
  addQuiz.classList.remove('hide');
  start.classList.add('hide');
  profile.classList.add('hide');
});

toProfile.addEventListener('click', () => {
  addQuiz.classList.add('hide');
  start.classList.add('hide');
  profile.classList.remove('hide');
});
