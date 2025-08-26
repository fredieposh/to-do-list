export {getTaskContainerDiv, appendTaskToaskContainerDiv, clearTaskContainerDiv};

import {createElementWithAttribute} from "./utils.js";
const tasksContainer = createElementWithAttribute("div", "id" ,"tasks-container");

function getTaskContainerDiv(){
    return tasksContainer;
}

function appendTaskToaskContainerDiv(task) {
    tasksContainer.appendChild(task);
}

function clearTaskContainerDiv(){
    return tasksContainer.innerHTML = "";
}