import {createElementWithAttribute} from "./utils.js"
import {Task} from "./tasks-logic.js";
export {createProjectTasksDomList};

const someTask = new Task('try', 'harder');
someTask.getTaskTitle

const projectTasksDom = {};

function createProjectTasksDomList(projectName) {
    projectTasksDom[projectName] = [];
};

function createNewTaskDom(taskObj) {
    const taskContainer = createElementWithAttribute("div", "class", "task-container");

    const taskContainerHeaderDiv = createElementWithAttribute("div", "class", "task-container-header-div");
    const taskContainerHeaderCheckboxDiv = createElementWithAttribute("div", "class", "task-container-header-checkbox-div");
    const taskContainerHeaderCheckbox = createElementWithAttribute("input");
    const taskContainerHeaderTextDiv = createElementWithAttribute("div", "class", "task-container-header-text-div");
    const taskContainerHeaderText = createElementWithAttribute("div", "class", "task-container-header-text");
    const taskContainerHeaderButtonDiv = createElementWithAttribute("div", "class", "task-container-header-button-div");
    const taskContainerHeaderButton = createElementWithAttribute("div", "class", "task-container-header-button");

    const taskContainerContentDiv = createElementWithAttribute("div", "class", "task-container-content-div");
    const taskContainerContentUl = createElementWithAttribute("div", "class", "task-container-content-ul");

    taskContainerHeaderButton.innerHTML = "X";
    taskContainerHeaderText.innerHTML = taskObj.getTaskTitle();
    setCheckboxInputProperties(taskContainerHeaderCheckbox);

    loadListElementToUlElement(taskContainerContentUl,"taskTitle", taskObj["taskTitle"]);
    loadListElementToUlElement(taskContainerContentUl,"taskDesc", taskObj["taskDesc"]);
    loadListElementToUlElement(taskContainerContentUl,"taskDueDate", taskObj["taskDueDate"]);
    loadListElementToUlElement(taskContainerContentUl,"taskPrior", taskObj["taskPrior"]);

    taskContainerHeaderCheckboxDiv.appendChild(taskContainerHeaderCheckbox);

    taskContainerContentDiv.appendChild(taskContainerContentUl);

    taskContainerHeaderButtonDiv.appendChild(taskContainerHeaderButton);

    taskContainerHeaderTextDiv.appendChild(taskContainerHeaderText);

    taskContainerHeaderDiv.appendChild(taskContainerHeaderCheckboxDiv);
    taskContainerHeaderDiv.appendChild(taskContainerHeaderTextDiv);
    taskContainerHeaderDiv.appendChild(taskContainerHeaderButtonDiv);

    taskContainer.appendChild(taskContainerHeaderDiv);
    taskContainer.appendChild(taskContainerContentDiv);

    return taskContainer;
};

function createUnorderedListElement(key, value) {
    const liElement = createElementWithAttribute("li");
    if (!value) {
        return;
    };

    if (key === 'taskTitle') {
        liElement.classList.add("li-task-title");
        liElement.innerHTML = `Task Title : ${value}`;
        return liElement;
    }

    if (key === 'taskDesc') {
        liElement.classList.add("li-task-desc");
        liElement.innerHTML = `Task Description : ${value}`;
        return liElement;
    }

    if (key === 'taskDueDate') {
        liElement.classList.add("li-task-date");
        liElement.innerHTML = `Task Due Date : ${value}`;
        return liElement;
    }

    if (key === 'taskPrior') {
        liElement.classList.add("li-task-prior");
        liElement.innerHTML = `Task Priority : ${value}`;
        return liElement;
    }
};

function loadListElementToUlElement(ulElement, key, value) {
    const listElement = createUnorderedListElement(key, value);
    if (listElement) {
        ulElement.appendChild(listElement);
    }
};

function setCheckboxInputProperties(checkboxInputElement) {
    checkboxInputElement.setAttribute("type", "checkbox");
}