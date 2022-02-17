function countChars(obj) {
  document.getElementById('charNum').textContent =
    obj.value.length + ' characters';
}

countChars();

const btn = document.querySelector('[data-js=answerButton1]');
const btn2 = document.querySelector('[data-js=answerButton2]');
const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');

btn.addEventListener('click', () => {
  answer1.classList.toggle('hide');
});

btn2.addEventListener('click', () => {
  answer2.classList.toggle('hide');
});
