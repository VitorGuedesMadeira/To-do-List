import trashIcon from './trash-regular-24.png';
import { dataStructure, render } from '../index.js';

export const toDoList = document.querySelector('.todo-list');
export default class Dynamic {
static creatingNewItem = (text, index) => {
  const labelItem = document.createElement('label');
  labelItem.classList.add('todo-list-label');
  labelItem.id = index;
  const inputCheckbox = document.createElement('input');
  inputCheckbox.setAttribute('type', 'checkbox');

  const textItem = document.createElement('input');
  textItem.setAttribute('class', 'input-text');
  textItem.value = text;
  textItem.id = `id_${index}`;
  const inputClosure = document.createElement('img');
  inputClosure.setAttribute('class', 'closure-button');
  inputClosure.setAttribute('src', trashIcon);
  // appendingChild
  toDoList.appendChild(labelItem);
  labelItem.appendChild(inputCheckbox);
  labelItem.appendChild(textItem);
  labelItem.appendChild(inputClosure);
  // inputClosureButton
  inputClosure.addEventListener('click', () => {
    dataStructure.splice(index, 1);
    render();
    for (let i = 0; i < dataStructure.length; i += 1) {
      dataStructure[i].index = i;
    }
    localStorage.setItem('listItem', JSON.stringify(dataStructure));
  });

  // line in p texts
  labelItem.addEventListener('click', () => {
    const itemId = index;
    if (inputCheckbox.checked) {
      labelItem.classList.add('show');
      dataStructure[itemId].completed = true;
      localStorage.setItem('listItem', JSON.stringify(dataStructure));
    } else {
      labelItem.classList.remove('show');
      dataStructure[itemId].completed = false;
      localStorage.setItem('listItem', JSON.stringify(dataStructure));
    }
  });
  // input editing
  window.addEventListener('input', (e) => {
    if (e.target.classList.contains('input-text')) {
      const something = e.target;
      const thisId = Number(something.id.split('_')[1]);
      dataStructure[thisId].description = e.target.value;
      localStorage.setItem('listItem', JSON.stringify(dataStructure));
    }
  });
};
}