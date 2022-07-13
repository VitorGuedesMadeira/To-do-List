import DataClass from "./variables";

export const editingText = (text, id) => {
    DataClass.dataStructure[id].description = text.value;
}
