const sidebar = document.querySelector("#sidebar");

import {addNewProjectToList, getProjectsDiv, addProjectsHeaderDivToProjectsDiv, addProjectsContainerDivToProjectsDiv, loadProjectToListFromMemory, handleProjectChoose} from "./sidebar-projects-div-dom";
import {createAddProjectButtonDiv, addEventListenerToAddProjectButtonDiv} from "./add-project-button-sidebar-div-dom";
import {createAddProjectMenuDiv} from "./add-project-menu";
import {setChosenProject} from "./content-dom";
import {loadTasksToProjectFromMemory} from "./add-tasks-menu-dom";


export {loadSidebar, appendToSidebar};

function appendToSidebar(element) {
    sidebar.appendChild(element);
}

function loadSidebar() {
    const projectsDiv = getProjectsDiv();
    const AddProjectButtonDiv = createAddProjectButtonDiv();
    appendToSidebar(projectsDiv);
    
    addProjectsHeaderDivToProjectsDiv();
    addProjectsContainerDivToProjectsDiv();
    if(localStorage.length < 1) {
        addNewProjectToList("Today");
        setChosenProject("Today");
    } else {
        for(let i = localStorage.length - 1; i > -1; i--) {
            const projectNameToLoad = localStorage.key(i);
            loadProjectToListFromMemory(projectNameToLoad);
            loadTasksToProjectFromMemory(projectNameToLoad, localStorage.getItem(projectNameToLoad));
            if(i === 0) {
                document.querySelector("#projects-container-div .project-div:first-child").classList.add("project-div-selected");
            }
        }
        setChosenProject(localStorage.key(0));
        handleProjectChoose();
    };
    createAddProjectMenuDiv();
    appendToSidebar(AddProjectButtonDiv);
    addEventListenerToAddProjectButtonDiv();
};
