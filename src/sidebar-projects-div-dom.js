import {createElementWithAttribute} from "./utils.js";
import * as SidebarProjectsDivLogic from "./sidebar-projects-div-logic.js";

export {addProjectToList, getProjectsDiv, addProjectsHeaderDivToProjectsDiv, addProjectsContainerDivToProjectsDiv};

const projectsDiv = createElementWithAttribute("div", "id", "projects-div");
const projectsHeaderDiv = createElementWithAttribute("div", "id", "projects-header-div");
const projectsHeaderText = createElementWithAttribute("h3");
const projectsContainerDiv = createElementWithAttribute("div", "id", "projects-container-div");

function setProjectsHeaderText() {
    projectsHeaderText.innerHTML = "Projects";
}

function setProjectsHeaderDiv() {
    projectsHeaderDiv.appendChild(projectsHeaderText);
}

function addProjectsHeaderDivToProjectsDiv() {
    setProjectsHeaderText();
    setProjectsHeaderDiv();
    projectsDiv.appendChild(projectsHeaderDiv);
}

function addProjectsContainerDivToProjectsDiv() {
    projectsDiv.appendChild(projectsContainerDiv);
}

function getProjectsDiv() {
    return projectsDiv;
}

function createProjectEntry(projectName) {

    const newProjectElement = createElementWithAttribute("div", "class", "project-div");
    
    const newProjectElementNameDiv = createElementWithAttribute("div", "class", "project-name-div");
    const newProjectElementName = createElementWithAttribute("div", "class", "project-name");
    newProjectElementName.innerHTML = projectName;
    
    const newProjectElementRemoveButtonDiv = createElementWithAttribute("div", "class", "project-remove-button-div");
    const newProjectElementRemoveButton = createElementWithAttribute("button", "class", "project-remove-button");
    newProjectElementRemoveButton.innerHTML = "X";

    newProjectElementNameDiv.appendChild(newProjectElementName);
    newProjectElementRemoveButtonDiv.appendChild(newProjectElementRemoveButton);
    
    newProjectElement.appendChild(newProjectElementNameDiv);
    newProjectElement.appendChild(newProjectElementRemoveButtonDiv);

    return newProjectElement;
};

function addProjectToList(projectName) {
    if (SidebarProjectsDivLogic.projectList.length > 0) {
        for (const project of SidebarProjectsDivLogic.projectList) {
        if (projectName === project) {
            return;
        };
    };
    };

    const newProject = createProjectEntry(projectName);
    projectsContainerDiv.appendChild(newProject);
    SidebarProjectsDivLogic.addProject(newProject);
};
