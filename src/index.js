import './style.css';
import Dynamic from './modules/creatingItems.js';
import DataClass, {
  cleanList, clearAll, selectAll, clickPlus, newItem,
} from './modules/variables.js';

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
///
const insertNewItem = (event) => {
  const tecla = event.key;
  const text = event.target.value;
  if (tecla === 'Enter') {
    DataClass.dataStructure.push(
      {
        description: text,
        completed: false,
        index: DataClass.dataStructure.length,
      },
    );
    newItem.value = '';
    Dynamic.render();
    localStorage.setItem('listItem', JSON.stringify(DataClass.dataStructure));
  }
};

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
