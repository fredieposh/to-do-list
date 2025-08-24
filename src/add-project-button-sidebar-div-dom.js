import {createElementWithAttribute} from "./utils.js"
import {appendToSidebar} from "./sidebar.js";
import {addEventListenerToCancelButton, addEventListenerToForm, getAddProjectMenuDiv, clearProjectNameInputValue, focusProjectNameInputValue} from "./add-project-menu.js";
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

function handleButtonClick() {
        addProjectButtonDiv.remove();
        addProjectButtonDiv.removeEventListener("click", handleButtonClick);
        const addProjectMenuDiv = getAddProjectMenuDiv();
        clearProjectNameInputValue(); 
        focusProjectNameInputValue();
        appendToSidebar(addProjectMenuDiv);
        addEventListenerToCancelButton();
        addEventListenerToForm();
}

function addEventListenerToAddProjectButtonDiv() {
    addProjectButtonDiv.addEventListener("click",handleButtonClick);
};
