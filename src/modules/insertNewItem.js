import DataClass from './variables.js';

export const insertNewItem = (text) => {
    DataClass.dataStructure.push(
        {
          description: text,
          completed: false,
          index: DataClass.dataStructure.length,
        },
    );
};
