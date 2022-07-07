import './style.css';
import Dynamic from './modules/creatingItems.js';
import {
  cleanList, clearAll, selectAll, clickPlus, newItem, dataStructure
} from './modules/variables.js';

// ------ DATA STRUCTURE ------- //

cleanList();

clearAll.addEventListener('click', () => {
  dataStructure = dataStructure.filter((item) => !item.completed);
  Dynamic.render();
  localStorage.setItem('listItem', JSON.stringify(dataStructure));
});

selectAll.addEventListener('click', () => {
  dataStructure = [];
  localStorage.setItem('listItem', JSON.stringify(dataStructure));
  Dynamic.render();
});

const insertNewItem = (event) => {
  const tecla = event.key;
  const text = event.target.value;
  if (tecla === 'Enter') {
    dataStructure.push(
      {
        description: text,
        completed: false,
        index: dataStructure.length,
      },
    );
    newItem.value = '';
    Dynamic.render();
    localStorage.setItem('listItem', JSON.stringify(dataStructure));
  }
};

newItem.addEventListener('keypress', insertNewItem);

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
  Dynamic.render();
  localStorage.setItem('listItem', JSON.stringify(dataStructure));
});

window.addEventListener('load', () => { // LOCAL STORAGE
  if (localStorage.getItem('listItem')) {
    dataStructure.push(...JSON.parse(localStorage.getItem('listItem')));
  }
  for (let i = 0; i < dataStructure.length; i += 1) {
    const newObj = dataStructure[i];
    Dynamic.creatingNewItem(newObj.description, i);
  }
});

Dynamic.render();
