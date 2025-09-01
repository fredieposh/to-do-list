import {createElementWithAttribute} from "./utils.js";
import {createProjectTasksDomList, getDomTasksList, addTaskDomToProjectTasksDomList} from "./tasks-dom.js"
import {getTaskContainerDiv, appendTaskToaskContainerDiv, clearTaskContainerDiv} from "./tasks-container-dom.js"
import {setChosenProject, setContentHeaderText, getChosenProject} from "./content-dom.js"
import * as SidebarProjectsDivLogic from "./sidebar-projects-div-logic.js";

export {addNewProjectToList, getProjectsDiv, addProjectsHeaderDivToProjectsDiv, addProjectsContainerDivToProjectsDiv, getSelectedProjectName, loadProjectToListFromMemory, handleProjectChoose};

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

    return {newProjectElement, newProjectElementRemoveButton};
};

function addEventListenerToRemoveButtonDiv(RemoveButtonDiv, projectName) {
    RemoveButtonDiv.addEventListener("click", (e) => {
        e.stopPropagation();
        SidebarProjectsDivLogic.removeProject(projectName);
        e.target.parentNode.parentNode.remove()
        if(SidebarProjectsDivLogic.projectList.length > 0) {
            document.querySelector("#projects-container-div .project-div:first-child").classList.add("project-div-selected");
            handleProjectChoose();
        } else {
            handleProjectChoose();
        };

        localStorage.removeItem(projectName);
    });
};

function addEventListenerToProjectDiv(projectDiv) {
    projectDiv.addEventListener("click", () => {
        removeSelectedClassFromProjectDiv();
        projectDiv.classList.add("project-div-selected");
        handleProjectChoose();
    });
};

function handleProjectChoose() {
    const selectedProjectName = getSelectedProjectName();
    setChosenProject(selectedProjectName);
    setContentHeaderText(selectedProjectName);
    clearTaskContainerDiv();
    if(getDomTasksList(selectedProjectName)) {
        getDomTasksList(selectedProjectName).forEach((task) => {
            appendTaskToaskContainerDiv(task);
        });
    };
}
function getSelectedProjectName() {
    let selectedProjectName = document.querySelector(".project-div-selected .project-name");
    if (selectedProjectName) {
        return selectedProjectName.innerHTML;
    }

    selectedProjectName = "No Project"
    return selectedProjectName;
}

function removeSelectedClassFromProjectDiv() {
    const projectDivList = document.querySelectorAll(".project-div");
    projectDivList.forEach((div) => {
        if (div.classList.contains("project-div-selected")) {
            div.classList.remove("project-div-selected");
        };
    });
};

function addNewProjectToList(projectName) {
    
    if (SidebarProjectsDivLogic.projectList.length > 0 || localStorage.length > 0) {
        for (const project of SidebarProjectsDivLogic.projectList) {
            if (projectName === project) {
                return;
            };
        };
        for (let i = 0; i < localStorage.length; i++) {
            const storageProjectName = localStorage.key(i);
            if (storageProjectName === projectName) {
                console.log(`function stuck here because ${localStorage.key(i)} === ${projectName}`);
                return;
            };
        };
    };


    const {newProjectElement, newProjectElementRemoveButton} = createProjectEntry(projectName);
    localStorage.setItem(projectName, JSON.stringify(new Array()));
    removeSelectedClassFromProjectDiv();
    newProjectElement.classList.add("project-div-selected");
    projectsContainerDiv.appendChild(newProjectElement);
    SidebarProjectsDivLogic.addProject(projectName);
    createProjectTasksDomList(projectName);
    addEventListenerToRemoveButtonDiv(newProjectElementRemoveButton, projectName);
    addEventListenerToProjectDiv(newProjectElement);

    handleProjectChoose();
};

function loadProjectToListFromMemory(projectName) {
    const {newProjectElement, newProjectElementRemoveButton} = createProjectEntry(projectName);
    projectsContainerDiv.appendChild(newProjectElement);
    SidebarProjectsDivLogic.addProject(projectName);
    createProjectTasksDomList(projectName);
    addEventListenerToRemoveButtonDiv(newProjectElementRemoveButton, projectName);
    addEventListenerToProjectDiv(newProjectElement);
}