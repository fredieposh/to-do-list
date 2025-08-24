export {createTaskContainerDiv};

import {createElementWithAttribute} from "./utils.js";
const tasksContainer = createElementWithAttribute("div", "id" ,"tasks-container");

function createTaskContainerDiv(){
    return tasksContainer;
}

function clearTaskContainerDiv(){
    return tasksContainer.innerHTML = "";
}