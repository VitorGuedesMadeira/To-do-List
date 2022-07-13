import { render } from './render';
import { setLocalStorage } from './setLocalStorage';
import trashIcon from './icons/trash-regular-24.png';
import DataClass, { toDoList } from './variables.js';
import { editingText } from './editingText';

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
    DataClass.dataStructure.splice(index, 1);
    render();
    for (let i = 0; i < DataClass.dataStructure.length; i += 1) {
      DataClass.dataStructure[i].index = i;
    }
    setLocalStorage();
  });
  // Strikethrough lines in texts
  labelItem.addEventListener('click', () => {
    if (inputCheckbox.checked) {
      labelItem.style.backgroundColor = 'rgb(190, 255, 199)';
      DataClass.dataStructure[index].completed = true;
      setLocalStorage();
    } else {
      labelItem.style.backgroundColor = 'rgba(202, 189, 74, 0.305)';
      DataClass.dataStructure[index].completed = false;
      setLocalStorage();
    }
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
