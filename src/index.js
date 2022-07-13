import './style.css';
import Dynamic from './modules/creatingItems.js';
import { insertNewItem } from './modules/insertNewItem.js';
import { setLocalStorage } from './modules/setLocalStorage';
import { clearAllSelected } from './modules/clearAllSelected';
import { deleteAll } from './modules/deleteAll';
import { render } from './modules/render';
import DataClass, {
  cleanList, clearAll, selectAll, clickPlus, newItem,
} from './modules/variables.js';

cleanList();

clearAll.addEventListener('click', () => {
  clearAllSelected();
  render();
  setLocalStorage();
});

selectAll.addEventListener('click', () => {
  deleteAll();
  setLocalStorage();
  render();
});

clickPlus.addEventListener('click', () => {
  const { value } = newItem;
  insertNewItem(value);
  newItem.value = '';
  render();
  setLocalStorage();
});

newItem.addEventListener('keypress', (event) => {
  const tecla = event.key;
  const text = event.target.value;
  if (tecla === 'Enter') {
    insertNewItem(text);
    newItem.value = '';
  }
  render();
  setLocalStorage();
});

window.addEventListener('load', () => { // LOCAL STORAGE
  if (localStorage.getItem('listItem')) {
    DataClass.dataStructure.push(...JSON.parse(localStorage.getItem('listItem')));
  }
  for (let i = 0; i < DataClass.dataStructure.length; i += 1) {
    const newObj = DataClass.dataStructure[i];
    Dynamic.creatingNewItem(newObj.description, newObj.completed, i);
  }
});

render();
