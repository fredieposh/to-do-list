import {createElementWithAttribute} from "./utils.js"
import {getTaskButtonDiv, createTaskButtonDiv, addEventListenerToAddTasktButton} from "./add-tasks-button-dom.js";
import {createAddTaskMenuDiv} from "./add-tasks-menu-dom.js"
import {getTaskContainerDiv} from "./tasks-container-dom.js";

export{setChosenProject, populateContentDiv, getContentDiv, getChosenProject, setContentHeaderText};

const contentDiv = document.querySelector("#content");
let chosenProject;

const contentHeaderDiv = createElementWithAttribute("div", "id", "content-header-div");
const contentHeaderText = createElementWithAttribute("h3");
const contentTasksContainerDiv = createElementWithAttribute("div", "id", "content-tasks-container");

function setChosenProject(projectName) {
    chosenProject = projectName;
};

function getChosenProject() {
    return chosenProject;
};

function setContentHeaderText() {
    contentHeaderText.innerHTML = chosenProject;
};

function loadHeaderTextToHeaderDiv() {
    contentHeaderDiv.appendChild(contentHeaderText);
};

function loadATasksContainerDivToTasksContainer() {
    const tasksDiv = getTaskContainerDiv();
    contentTasksContainerDiv.appendChild(tasksDiv);
}

function loadAddTasksButtonDivToTasksContainer() {
    const addTasksButtonDiv = createTaskButtonDiv();
    contentTasksContainerDiv.appendChild(addTasksButtonDiv);
    addEventListenerToAddTasktButton();
}

function populateContentDiv() {
    setContentHeaderText();
    loadHeaderTextToHeaderDiv();
    loadATasksContainerDivToTasksContainer();
    loadAddTasksButtonDivToTasksContainer();
    createAddTaskMenuDiv();
    
    contentDiv.appendChild(contentHeaderDiv);
    contentDiv.appendChild(contentTasksContainerDiv);
    

};

function getContentDiv() {
    return contentDiv;
};
