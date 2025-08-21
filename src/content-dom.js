import {createElementWithAttribute} from "./utils.js"
export{setChosenProject, populateContentDiv, getContentDiv, getChosenProject};

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

function populateContentDiv() {
    setContentHeaderText();
    loadHeaderTextToHeaderDiv();
    contentDiv.appendChild(contentHeaderDiv);
    contentDiv.appendChild(contentTasksContainerDiv);
};

function getContentDiv() {
    return contentDiv;
};
