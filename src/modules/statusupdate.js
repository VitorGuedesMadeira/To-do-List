import { dataStructure, render } from '../index.js';

export const newItem = document.getElementById('newItem');
export default class AddItem {
static insertNewItem = (event) => {
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
    render();
    localStorage.setItem('listItem', JSON.stringify(dataStructure));
  }
};
}
