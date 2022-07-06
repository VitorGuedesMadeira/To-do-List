import './style.css';
import Dynamic from './modules/creatingItems.js';
// ------ DATA STRUCTURE ------- //
export let dataStructure = [
];

const clearAll = document.querySelector('.todo-clear-all-completed');
clearAll.addEventListener('click', () => {
    dataStructure = dataStructure.filter(item => !item.completed)
    render();
    localStorage.setItem('listItem', JSON.stringify(dataStructure));
})

const cleanList = () => {
  const toDoList = document.querySelector('.todo-list');
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.lastChild);
  }
};

const render = () => {
  cleanList();
  for(let i=0; i<dataStructure.length; i += 1){
    Dynamic.creatingNewItem(dataStructure[i].description, i) 
  }
};

//------------- delete ALL ----------------//
const selectAll = document.querySelector('.select-all');
selectAll.addEventListener('click', () => {
    dataStructure = [];
    localStorage.setItem('listItem', JSON.stringify(dataStructure));
    render();
})

//------------- Add new item --------------//
const clickPlus = document.querySelector('.image-plus');
const newItem = document.getElementById('newItem');
const insertNewItem = (event) => {
  const tecla = event.key;
  const text = event.target.value;
  if (tecla === 'Enter') {
    dataStructure.push(
    {
      description: text,
      completed: false,
      index: dataStructure.length,
    });
    newItem.value = '';
    render();
    localStorage.setItem('listItem', JSON.stringify(dataStructure));
  }
};
newItem.addEventListener('keypress', insertNewItem);

clickPlus.addEventListener('click', () => {
    const value = newItem.value;
    dataStructure.push(
        {
          description: value,
          completed: false,
          index: dataStructure.length,
        });
        newItem.value = '';
        render();
        localStorage.setItem('listItem', JSON.stringify(dataStructure));
})
//------------- Local Storage --------------//
window.addEventListener('load', () => {
    if (localStorage.getItem('listItem')) {
      dataStructure.push(...JSON.parse(localStorage.getItem('listItem')));
    }
    for (let i = 0; i < dataStructure.length; i += 1) {
        let newObj = dataStructure[i];
        Dynamic.creatingNewItem(newObj.description, i);
    }
  });

render();
