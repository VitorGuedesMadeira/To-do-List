import DataClass from "./variables";

export const setLocalStorage = () => {
    localStorage.setItem('listItem', JSON.stringify(DataClass.dataStructure));
}

