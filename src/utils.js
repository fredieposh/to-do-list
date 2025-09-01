export {createElementWithAttribute, GetTaskExplicitObject, addTaskExplicitObjectToList};


function createElementWithAttribute(element, attribute, attributeVal) {
    const newElemnt = document.createElement(element);
    if(attribute) {
        newElemnt.setAttribute(attribute, attributeVal);
    }
    return newElemnt;
}

function GetTaskExplicitObject(selectedProjectName, taskName, taskDesc, taskDate, taskRadio) {
    
    const taskObject = {
        selectedProjectName: selectedProjectName,
        taskName: taskName,
        taskDesc: taskDesc,
        taskDate: taskDate,
        taskRadio: taskRadio,
    };

    return taskObject;
}

function addTaskExplicitObjectToList(projectName, taskExplicitObj) {
    let tasksStorageArrayString = localStorage.getItem(projectName);
    const tasksStorageArray = JSON.parse(tasksStorageArrayString);
    tasksStorageArray.push(taskExplicitObj);
    
    tasksStorageArrayString = JSON.stringify(tasksStorageArray);
    return tasksStorageArrayString;
}


