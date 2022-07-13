import './style.css';
import Dynamic from './modules/creatingItems.js';
import { insertNewItem } from './modules/insertNewItem.js';
import DataClass, {
  cleanList, clearAll, selectAll, clickPlus, newItem,
} from './modules/variables.js';
import { render } from './modules/render';
import { setLocalStorage } from './modules/setLocalStorage';

cleanList();

clearAll.addEventListener('click', () => {
  DataClass.dataStructure = DataClass.dataStructure.filter((item) => !item.completed);
  render();
  setLocalStorage();
});

selectAll.addEventListener('click', () => {
  DataClass.dataStructure = [];
  setLocalStorage();
  render();
});

clickPlus.addEventListener('click', () => {
  const { value } = newItem;
  DataClass.dataStructure.push(
    {
      description: value,
      completed: false,
      index: DataClass.dataStructure.length,
    },
  );
  newItem.value = '';
  render();
  setLocalStorage();
});

newItem.addEventListener('keypress', () => {
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
