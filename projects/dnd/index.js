/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

function randomNum(from, to) {
  return parseInt(from + Math.random() * to - from);
}

let currentDrag;
let startY = 0;
let startX = 0;

document.addEventListener('mousemove', (e) => {
  if (currentDrag) {
    currentDrag.style.top = e.clientX - startX + 'px';
    currentDrag.style.top = e.clientY - startY + 'px';
  }
});

export function createDiv() {
  const newDiv = document.createElement('div');
  const minSize = 10;
  const maxSize = 250;
  const maxColor = 0xffffff;

  newDiv.className = 'draggable-div';
  newDiv.style.background = '#' + randomNum(0, maxColor).toString(16);
  newDiv.style.top = randomNum(0, window.innerHeight) + 'px';
  newDiv.style.left = randomNum(0, window.innerWidth) + 'px';
  newDiv.style.width = randomNum(minSize, maxSize) + 'px';
  newDiv.style.height = randomNum(minSize, maxSize) + 'px';

  newDiv.addEventListener('mousedown', (e) => {
    currentDrag = newDiv;
    startX = e.offsetX;
    startY = e.offsetY;
  });
  newDiv.addEventListener('mouseup', () => (currentDrag = false));
  return newDiv;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const newDiv = createDiv();
  homeworkContainer.appendChild(newDiv);
});
