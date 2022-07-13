import DataClass from "./variables";

export const closingBtn = (index) => {
    DataClass.dataStructure.splice(index, 1);
    for (let i = 0; i < DataClass.dataStructure.length; i += 1) {
      DataClass.dataStructure[i].index = i;
    }
}
