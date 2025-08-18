const sidebar = document.querySelector("#sidebar");

import {addProjectToList, getProjectsDiv, addProjectsHeaderDivToProjectsDiv, addProjectsContainerDivToProjectsDiv} from "./sidebar-projects-div-dom";
import {createAddProjectButtonDiv} from "./add-project-button-sidebar-div-dom";
import {createaddProjectMenuDiv} from "./add-project-menu";

export {loadSidebar};

function loadSidebar() {
    const projectsDiv = getProjectsDiv();
    addProjectsHeaderDivToProjectsDiv();
    addProjectsContainerDivToProjectsDiv();
    addProjectToList("test");
    const AddProjectButtonDiv = createAddProjectButtonDiv();

    sidebar.appendChild(projectsDiv);
    sidebar.appendChild(AddProjectButtonDiv);
};