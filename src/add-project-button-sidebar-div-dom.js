import {createElementWithAttribute} from "./utils.js"
export {createAddProjectButtonDiv};

const addProjectButtonDiv = createElementWithAttribute("div", "id", "add-project-button-div");
const addProjectButtonTextDiv = createElementWithAttribute("div", "id", "add-project-button-text-div");
const addProjectButtonText = createElementWithAttribute("p");
const addProjectButtonPlusSpan = createElementWithAttribute("span", "id", "add-project-button-plus-div");

function addTextToPara() {
    addProjectButtonText.innerHTML = "Add Project";
    addProjectButtonPlusSpan.innerHTML = "+";
};

function loadParaToDiv() {
    addProjectButtonTextDiv.appendChild(addProjectButtonPlusSpan);
    addProjectButtonTextDiv.appendChild(addProjectButtonText);
};

function createAddProjectButtonDiv() {
    addTextToPara();
    loadParaToDiv();
    addProjectButtonDiv.appendChild(addProjectButtonTextDiv);

    return addProjectButtonDiv;
};
