import { setLocalStorage } from "./setLocalStorage.js";
import DataClass from "./variables.js";

export const strikethroughLines = (labelItem, inputCheckbox) => {
    if (inputCheckbox.checked) {
        labelItem.style.backgroundColor = 'rgb(190, 255, 199)';
        DataClass.dataStructure[index].completed = true;
      } else {
        labelItem.style.backgroundColor = 'rgba(202, 189, 74, 0.305)';
        DataClass.dataStructure[index].completed = false;
      }
}
