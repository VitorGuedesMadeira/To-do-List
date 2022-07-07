export const cleanList = () => {
  const toDoList = document.querySelector('.todo-list');
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.lastChild);
  }
};

export const clearAll = document.querySelector('.todo-clear-all-completed');

export const selectAll = document.querySelector('.select-all');

export const clickPlus = document.querySelector('.image-plus');

export const newItem = document.getElementById('newItem');

export const toDoList = document.querySelector('.todo-list');

//export let dataStructure = JSON.parse(localStorage.getItem('listItem')) || []; // eslint-disable-line import/no-mutable-exports

export let  dataStructure = [];

