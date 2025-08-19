const sidebar = document.querySelector("#sidebar");

import {addProjectToList, getProjectsDiv, addProjectsHeaderDivToProjectsDiv, addProjectsContainerDivToProjectsDiv} from "./sidebar-projects-div-dom";
import {createAddProjectButtonDiv, addEventListenerToAddProjectButtonDiv} from "./add-project-button-sidebar-div-dom";
import {createAddProjectMenuDiv} from "./add-project-menu";


export {loadSidebar, appendToSidebar};

function appendToSidebar(element) {
    sidebar.appendChild(element);
}

function loadSidebar() {
    const projectsDiv = getProjectsDiv();
    const AddProjectButtonDiv = createAddProjectButtonDiv();
    
    addProjectsHeaderDivToProjectsDiv();
    addProjectsContainerDivToProjectsDiv();
    addProjectToList("Today");
    createAddProjectMenuDiv();
    appendToSidebar(projectsDiv);
    appendToSidebar(AddProjectButtonDiv);
    addEventListenerToAddProjectButtonDiv();
};
