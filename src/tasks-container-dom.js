export {createTaskContainerDiv, appendTaskToaskContainerDiv};

import {createElementWithAttribute} from "./utils.js";
const tasksContainer = createElementWithAttribute("div", "id" ,"tasks-container");

function createTaskContainerDiv(){
    return tasksContainer;
}

function appendTaskToaskContainerDiv(task) {
    tasksContainer.appendChild(task);
}

function clearTaskContainerDiv(){
    return tasksContainer.innerHTML = "";
}