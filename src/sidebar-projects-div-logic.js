import {createProjectTasksList} from "./tasks-logic.js"
export {projectList, addProject, removeProject};

const projectList =[];

function addProject(projectName) {
    projectList.push(projectName);
    createProjectTasksList(projectName);
}

function removeProject(projectName) {
    const projectIndexToRemove = projectList.indexOf(projectName);
    projectList.splice(projectIndexToRemove, 1);
}
