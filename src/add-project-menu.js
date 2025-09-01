import {createElementWithAttribute} from "./utils.js";
import {getAddProjectButtonDiv, addEventListenerToAddProjectButtonDiv} from "./add-project-button-sidebar-div-dom";
import {addNewProjectToList} from "./sidebar-projects-div-dom.js";
import {createProjectTasksList} from "./tasks-logic.js";
import {appendToSidebar} from "./sidebar.js";
export {createAddProjectMenuDiv, getAddProjectMenuDiv, addEventListenerToCancelButton, addEventListenerToForm, clearProjectNameInputValue, focusProjectNameInputValue};

const addProjectMenuDiv = createElementWithAttribute("div","id", "add-project-menu-div");
const addProjectForm = createElementWithAttribute("form","id", "add-project-form");
const projectNameInputDiv = createElementWithAttribute("div","id", "project-name-input-div");
const projectNameInputLabel = createElementWithAttribute("label");
const projectNameInput = createElementWithAttribute("input");
const addProjectMenuButtonsDiv = createElementWithAttribute("div","id", "add-project-menu-buttons-div");
const addProjectMenuAddButton = createElementWithAttribute("button","id", "add-project-menu-add-button");
const addProjectMenuCancelButton = createElementWithAttribute("button","id", "add-project-menu-cancel-button");

function loadTextToButtons() {
    addProjectMenuAddButton.innerHTML = "Add";
    addProjectMenuCancelButton.innerHTML = "Cancel";
};

function addClassButtons() {
    addProjectMenuAddButton.classList.add("add-project-menu-button");
    addProjectMenuCancelButton.classList.add("add-project-menu-button");
};

function loadButtonsToDiv() {
  addProjectMenuButtonsDiv.appendChild(addProjectMenuAddButton);
  addProjectMenuButtonsDiv.appendChild(addProjectMenuCancelButton);
};

function addPropertiesToInput() {
    projectNameInput.setAttribute("type", "text");
    projectNameInput.setAttribute("name", "project-name-input");
    projectNameInput.setAttribute("id", "project-name-input");
    projectNameInput.setAttribute("min-length","4");
    projectNameInput.required = true;
    projectNameInput.placeholder = "Your project name...";
    projectNameInput.autofocus = true;
};

function addPropertiesToLabel() {
    projectNameInputLabel.setAttribute("for", "project-name-input");
};

function createProjectNameInputDiv() {
    projectNameInputDiv.appendChild(projectNameInputLabel);
    projectNameInputDiv.appendChild(projectNameInput);
}

function createAddProjectForm() {
    addProjectForm.appendChild(projectNameInputDiv);
    addProjectForm.appendChild(addProjectMenuButtonsDiv);
}

function loadFormToAddProjectMenuDiv() {
    addProjectMenuDiv.appendChild(addProjectForm);
}

function createAddProjectMenuDiv() {
    loadTextToButtons();
    addClassButtons();
    loadButtonsToDiv();
    addPropertiesToInput();
    addPropertiesToLabel();
    createProjectNameInputDiv();
    createAddProjectForm();
    loadFormToAddProjectMenuDiv();

    return addProjectMenuDiv;
}

function getAddProjectMenuDiv() {
    return addProjectMenuDiv;
}

function getProjectNameInputValue() {
    return projectNameInput.value;
}

function clearProjectNameInputValue() {
    projectNameInput.value = null;
}

function focusProjectNameInputValue() {
    projectNameInput.autofocus = true;
}

function handleCancelButtonClick(e) {
        e.preventDefault();
        addProjectMenuCancelButton.removeEventListener("click", handleCancelButtonClick);
        addProjectMenuDiv.remove();
        const addProjectButtonDiv = getAddProjectButtonDiv();
        focusProjectNameInputValue();
        appendToSidebar(addProjectButtonDiv);
        addEventListenerToAddProjectButtonDiv();
}

function handleFormSubmition(e) {
        e.preventDefault();
        const formInputValue = getProjectNameInputValue();
        addNewProjectToList(formInputValue);
        addProjectForm.removeEventListener("submit", handleFormSubmition);
        addProjectMenuDiv.remove();
        const addProjectButtonDiv = getAddProjectButtonDiv();
        focusProjectNameInputValue();
        appendToSidebar(addProjectButtonDiv);
        addEventListenerToAddProjectButtonDiv();
}

function addEventListenerToCancelButton() {
    addProjectMenuCancelButton.addEventListener("click", handleCancelButtonClick);
}

function addEventListenerToForm() {
    addProjectForm.addEventListener("submit", handleFormSubmition);
}