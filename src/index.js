import './style.css';
import Dynamic from './modules/creatingItems.js';
import DataClass, {
  cleanList, clearAll, selectAll, clickPlus, newItem,
} from './modules/variables.js';
import { insertNewItem } from './modules/insertNewItem.js';

cleanList();

clearAll.addEventListener('click', () => {
  DataClass.dataStructure = DataClass.dataStructure.filter((item) => !item.completed);
  Dynamic.render();
  localStorage.setItem('listItem', JSON.stringify(DataClass.dataStructure));
});

selectAll.addEventListener('click', () => {
  DataClass.dataStructure = [];
  localStorage.setItem('listItem', JSON.stringify(DataClass.dataStructure));
  Dynamic.render();
});

newItem.addEventListener('keypress', insertNewItem);

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
  Dynamic.render();
  localStorage.setItem('listItem', JSON.stringify(DataClass.dataStructure));
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

Dynamic.render();
