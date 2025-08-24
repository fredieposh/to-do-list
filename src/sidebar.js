const sidebar = document.querySelector("#sidebar");

import {addProjectToList, getProjectsDiv, addProjectsHeaderDivToProjectsDiv, addProjectsContainerDivToProjectsDiv} from "./sidebar-projects-div-dom";
import {createAddProjectButtonDiv, addEventListenerToAddProjectButtonDiv} from "./add-project-button-sidebar-div-dom";
import {createAddProjectMenuDiv} from "./add-project-menu";
import {setChosenProject} from "./content-dom";


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
    addProjectToList("Today");
    setChosenProject("Today");
    createAddProjectMenuDiv();
    appendToSidebar(AddProjectButtonDiv);
    addEventListenerToAddProjectButtonDiv();
};
