import DataClass from "./variables";

export const clearAllSelected = () => {
    DataClass.dataStructure = DataClass.dataStructure.filter((item) => !item.completed);
}
