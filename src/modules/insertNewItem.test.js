import { insertNewItem } from './insertNewItem.js';
import DataClass from './creatingItems.js';
const { dataStructure } = DataClass;

test('Return and obj with 3 properties', () => {
  expect(insertNewItem('karla')).toBe({description: 'karla', completed: false, index: dataStructure.length});
});
