import {createElementWithAttribute} from "./utils.js"
import {createAddTaskMenuDiv, focusTaskNameInputValue, addEventListenerToCancelButton, addEventListenerToForm, getAddTaskMenuDiv} from "./add-tasks-menu-dom.js"
export {getTaskButtonDiv, createTaskButtonDiv, appendToAddTaskButtonDiv, getTaskButton, addEventListenerToAddTasktButton};

const addTaskButtonDiv = createElementWithAttribute("div", "id", "add-task-button-div");
const addTaskButton = createElementWithAttribute("button", "id", "add-task-button");

function addTextToAddTaskButton(){
    addTaskButton.innerHTML = "+ Add Task";
};

function addButtonToAddTaskButtonDiv() {
    addTextToAddTaskButton();
    addTaskButtonDiv.appendChild(addTaskButton);
};

function createTaskButtonDiv() {
    addButtonToAddTaskButtonDiv();
     return addTaskButtonDiv;
};


function getTaskButtonDiv() {
    return addTaskButtonDiv;
};

function getTaskButton() {
    return addTaskButton;
};

function appendToAddTaskButtonDiv(elementToAppend) {
    addTaskButtonDiv.appendChild(elementToAppend);
};

function handleButtonClick() {
        addTaskButton.remove();
        addTaskButton.removeEventListener("click", handleButtonClick);
        const addTaskMenuDiv = getAddTaskMenuDiv();
        // clearTaskNameInputValue(); 
        focusTaskNameInputValue();
        appendToAddTaskButtonDiv(addTaskMenuDiv);
        addEventListenerToCancelButton();
        addEventListenerToForm();
}

function addEventListenerToAddTasktButton() {
    addTaskButton.addEventListener("click",handleButtonClick);
};
