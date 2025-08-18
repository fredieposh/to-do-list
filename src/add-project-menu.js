import {createElementWithAttribute} from "./utils.js"

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

function createaddProjectMenuDiv() {
    loadTextToButtons();
    loadButtonsToDiv();
    addPropertiesToInput();
    addPropertiesToLabel();
    createProjectNameInputDiv();
    createAddProjectForm();
    loadFormToAddProjectMenuDiv();
}