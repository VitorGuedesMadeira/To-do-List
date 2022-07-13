import DataClass, { cleanList } from './variables.js';
import Dynamic from './creatingItems.js'

export const render = () => {
    cleanList();
    const { dataStructure } = DataClass;
    for (let i = 0; i < dataStructure.length; i += 1) {
      Dynamic.creatingNewItem(dataStructure[i].description, dataStructure[i].completed, i);
    }
  };
