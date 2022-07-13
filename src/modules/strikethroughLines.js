import { setLocalStorage } from "./setLocalStorage.js";
import DataClass from "./variables.js";

export const strikethroughLines = (labelItem, inputCheckbox, index) => {
    if (inputCheckbox.checked) {
        labelItem.style.backgroundColor = 'rgb(190, 255, 199)';
        DataClass.dataStructure[index].completed = true;
        setLocalStorage();
      } else {
        labelItem.style.backgroundColor = 'rgba(202, 189, 74, 0.305)';
        DataClass.dataStructure[index].completed = false;
        setLocalStorage();
      }
}
