const toDoList = document.querySelector('.todo-list');
while (toDoList.firstChild) {
  toDoList.removeChild(toDoList.lastChild);
}
};