import DataClass, { newItem } from './variables.js';
import Dynamic from './creatingItems.js';

export const insertNewItem = (event) => {
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