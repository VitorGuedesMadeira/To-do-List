/* eslint-disable import/no-cycle */
import './style.css';
import Dynamic from './modules/creatingItems.js';
import AddItem, { newItem } from './modules/statusupdate.js';

export let dataStructure = []; // eslint-disable-line import/no-mutable-exports
// I need this one to be LET and not a CONST. It's a different approach.

const cleanList = () => {
  const toDoList = document.querySelector('.todo-list');
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.lastChild);
  }
};

export const render = () => {
  cleanList();
  for (let i = 0; i < dataStructure.length; i += 1) {
    Dynamic.creatingNewItem(dataStructure[i].description, i);
  }
};

const clearAll = document.querySelector('.todo-clear-all-completed');
clearAll.addEventListener('click', () => {
  dataStructure = dataStructure.filter((item) => !item.completed);
  render();
  localStorage.setItem('listItem', JSON.stringify(dataStructure));
});

const selectAll = document.querySelector('.select-all');
selectAll.addEventListener('click', () => {
  dataStructure = [];
  localStorage.setItem('listItem', JSON.stringify(dataStructure));
  render();
});

newItem.addEventListener('keypress', AddItem.insertNewItem);
const clickPlus = document.querySelector('.image-plus');
clickPlus.addEventListener('click', () => {
  const { value } = newItem;
  dataStructure.push(
    {
      description: value,
      completed: false,
      index: dataStructure.length,
    },
  );
  newItem.value = '';
  render();
  localStorage.setItem('listItem', JSON.stringify(dataStructure));
});
// ------------- Local Storage --------------//
window.addEventListener('load', () => {
  if (localStorage.getItem('listItem')) {
    dataStructure.push(...JSON.parse(localStorage.getItem('listItem')));
  }
  for (let i = 0; i < dataStructure.length; i += 1) {
    const newObj = dataStructure[i];
    Dynamic.creatingNewItem(newObj.description, i);
  }
});

render();
