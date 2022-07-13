import { render } from './render';
import { setLocalStorage } from './setLocalStorage';
import { toDoList } from './variables.js';
import { editingText } from './editingText';
import { strikethroughLines } from './strikethroughLines';
import { closingBtn } from './closingBtn';
import trashIcon from './icons/trash-regular-24.png';

export default class Dynamic {
static creatingNewItem = (text, completed, index) => {
  const labelItem = document.createElement('label');
  labelItem.classList.add('todo-list-label');
  labelItem.id = index;
  if (completed) {
    labelItem.style.backgroundColor = 'rgb(190, 255, 199)';
  }
  const inputCheckbox = document.createElement('input');
  inputCheckbox.setAttribute('type', 'checkbox');
  inputCheckbox.checked = completed;
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
    closingBtn(index);
    render();
    setLocalStorage();
  });
  // Strikethrough lines in texts
  labelItem.addEventListener('click', () => {
    strikethroughLines(labelItem, inputCheckbox, index);
  });
  // Editing input of list item
  window.addEventListener('input', (e) => {
    if (e.target.classList.contains('input-text')) {
      const inputText = e.target;
      const inputId = Number(inputText.id.split('_')[1]);
      editingText(inputText, inputId);
      setLocalStorage();
    }
  });
};

}
