import {createElementWithAttribute} from "./utils.js"
import {createAddProjectMenuDiv, getAddProjectMenuDiv} from "./add-project-menu";
import {appendToSidebar} from "./sidebar.js";
import {addEventListenerToCancelButton} from "./add-project-menu.js";
export {createAddProjectButtonDiv, getAddProjectButtonDiv, addEventListenerToAddProjectButtonDiv};

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

function getAddProjectButtonDiv() {
    return addProjectButtonDiv;
};

function addEventListenerToAddProjectButtonDiv() {
    addProjectButtonDiv.addEventListener("click",() => {
        addProjectButtonDiv.remove();
        const addProjectMenuDiv = getAddProjectMenuDiv();
        appendToSidebar(addProjectMenuDiv);
        addEventListenerToCancelButton();
    });
};
