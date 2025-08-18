const sidebar = document.querySelector("#sidebar");

import {addProjectToList, getProjectsDiv, addProjectsHeaderDivToProjectsDiv, addProjectsContainerDivToProjectsDiv} from "./sidebar-projects-div-dom";
import {createAddProjectButtonDiv, addEventListenerToAddProjectButtonDiv} from "./add-project-button-sidebar-div-dom";
import {createAddProjectMenuDiv, getAddProjectMenuDiv} from "./add-project-menu";
import {createaddProjectMenuDiv} from "./add-project-menu";

export {loadSidebar, appendToSidebar};

function appendToSidebar(element) {
    sidebar.appendChild(element);
}

function loadSidebar() {
    const projectsDiv = getProjectsDiv();
    addProjectsHeaderDivToProjectsDiv();
    addProjectsContainerDivToProjectsDiv();
    addProjectToList("test");
    const AddProjectButtonDiv = createAddProjectButtonDiv();
    createAddProjectMenuDiv();

    sidebar.appendChild(projectsDiv);
    sidebar.appendChild(AddProjectButtonDiv);
    addEventListenerToAddProjectButtonDiv();
};
