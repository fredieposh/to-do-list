export {projectList, addProject, removeProject};

const projectList =[];

function addProject(projectName) {
    projectList.push(projectName);
}

function removeProject(projectName) {
    const projectIndexToRemove = projectList.indexOf(projectName);
    projectList.splice(projectIndexToRemove, 1);
}
