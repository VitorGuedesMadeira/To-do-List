import _ from 'lodash';
import { getDocumentTypeNodeSystemId } from 'parse5/lib/tree-adapters/default';
import './style.css';
//import Icon from './icon.png';
/*
function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    //myIcon.src = Icon;

    element.appendChild(myIcon);
  
    //return element;
  }
  
  document.body.appendChild(component());*/

/*
  <label class="todo-list-label">
  <input type="checkbox">
  <p>NEW ITEM</p>
  <input type="button" value="X">
</label>*/

let dataStructure = [
    {
        description: 'Vitor',
        completed: false,
        index: 0,
    },
    {
        description: 'Karla',
        completed: false,
        index: 1,
    },
    {
        description: 'Nunes',
        completed: false,
        index: 2,
    },
    {
        description: 'Alejandro',
        completed: false,
        index: 3,
    },
]

const toDoList = document.querySelector('.todo-list');
const creatingNewItem = (text) => {
    const labelItem = document.createElement('label');
    labelItem.classList.add('todo-list-label');
    const inputCheckbox = document.createElement('input');
    inputCheckbox.setAttribute('type', 'checkbox');
    const textItem = document.createElement('p');
    textItem.textContent = text;
    const inputClosure = document.createElement('input');
    inputClosure.setAttribute('type', 'button');
    inputClosure.setAttribute('value', 'X');

    toDoList.appendChild(labelItem);
    labelItem.appendChild(inputCheckbox);
    labelItem.appendChild(textItem);
    labelItem.appendChild(inputClosure);
}

const cleanList = () => {
    const toDoList = document.querySelector('.todo-list');
    while(toDoList.firstChild){
        toDoList.removeChild(toDoList.lastChild);
    }
}

const render = () => {
    cleanList();
    dataStructure.forEach(item => creatingNewItem(item.description))
}

const newItem = document.getElementById('newItem');

const insertNewItem = (event) => {
    const tecla = event.key;
    const text = event.target.value;
    if(tecla === 'Enter') {
        dataStructure.push(    {
            description: text,
            completed: false,
            index: dataStructure.length,
        },)
        newItem.value = '';
        render();
    }
}

newItem.addEventListener('keypress', insertNewItem);

render();

