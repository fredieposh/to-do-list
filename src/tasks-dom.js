import {createElementWithAttribute} from "./utils.js"
// import {Task} from "./tasks-logic.js";
export {createProjectTasksDomList, createNewTaskDom, addTaskDomToProjectTasksDomList};


const projectTasksDom = {};

function createProjectTasksDomList(projectName) {
    projectTasksDom[projectName] = [];
};

function addTaskDomToProjectTasksDomList(projectName, task) {
    projectTasksDom[projectName].push(task);
}

function createNewTaskDom(taskObj) {
    const taskContainer = createElementWithAttribute("div", "class", "task-container");

    const taskContainerHeaderDiv = createElementWithAttribute("div", "class", "task-container-header-div");
    const taskContainerHeaderCheckboxDiv = createElementWithAttribute("div", "class", "task-container-header-checkbox-div");
    const taskContainerHeaderCheckbox = createElementWithAttribute("input");
    const taskContainerHeaderTextDiv = createElementWithAttribute("div", "class", "task-container-header-text-div");
    const taskContainerHeaderText = createElementWithAttribute("div", "class", "task-container-header-text");
    const taskContainerHeaderButtonDiv = createElementWithAttribute("div", "class", "task-container-header-button-div");
    const taskContainerHeaderButton = createElementWithAttribute("button", "class", "task-container-header-button");

    const taskContainerContentDiv = createElementWithAttribute("div", "class", "task-container-content-div");
    const taskContainerContentUl = createElementWithAttribute("ul", "class", "task-container-content-ul");

    taskContainerHeaderButton.innerHTML = "X";
    taskContainerHeaderText.innerHTML = taskObj.getTaskTitle();
    setCheckboxInputProperties(taskContainerHeaderCheckbox);
    console.log(taskObj);
    loadListElementToUlElement(taskContainerContentUl,"taskTitle", taskObj.getTaskTitle());
    loadListElementToUlElement(taskContainerContentUl,"taskDesc", taskObj.getTaskDesc());
    loadListElementToUlElement(taskContainerContentUl,"taskDueDate", taskObj.getTaskDueDate());
    loadListElementToUlElement(taskContainerContentUl,"taskPrior", taskObj.getTaskPrior());

    taskContainerHeaderCheckboxDiv.appendChild(taskContainerHeaderCheckbox);

    taskContainerContentDiv.appendChild(taskContainerContentUl);

    taskContainerHeaderButtonDiv.appendChild(taskContainerHeaderButton);

    taskContainerHeaderTextDiv.appendChild(taskContainerHeaderText);

    taskContainerHeaderDiv.appendChild(taskContainerHeaderCheckboxDiv);
    taskContainerHeaderDiv.appendChild(taskContainerHeaderTextDiv);
    taskContainerHeaderDiv.appendChild(taskContainerHeaderButtonDiv);

    taskContainer.appendChild(taskContainerHeaderDiv);
    taskContainer.appendChild(taskContainerContentDiv);

    taskContainerHeaderCheckbox.addEventListener("click", handleCheckBoxClick);
    taskContainerHeaderButton.addEventListener("click", handleXClick);
    taskContainerHeaderDiv.addEventListener("click", handleTaskHeaderClick);
    return taskContainer;
};

function createUnorderedListElement(key, value) {
    const liElement = createElementWithAttribute("li");
    if (!value) {
        return;
    };

    if (key === 'taskTitle') {
        liElement.classList.add("li-task-title");
        liElement.innerHTML = `Task Title : ${value}`;
        return liElement;
    }

    if (key === 'taskDesc') {
        liElement.classList.add("li-task-desc");
        liElement.innerHTML = `Task Description : ${value}`;
        return liElement;
    }

    if (key === 'taskDueDate') {
        liElement.classList.add("li-task-date");
        liElement.innerHTML = `Task Due Date : ${value}`;
        return liElement;
    }

    if (key === 'taskPrior') {
        liElement.classList.add("li-task-prior");
        liElement.innerHTML = `Task Priority : ${value}`;
        return liElement;
    }
};

function loadListElementToUlElement(ulElement, key, value) {
    const listElement = createUnorderedListElement(key, value);
    if (listElement) {
        ulElement.appendChild(listElement);
    }
};

function setCheckboxInputProperties(checkboxInputElement) {
    checkboxInputElement.setAttribute("type", "checkbox");
}

function handleTaskHeaderClick(e) {
    console.log(e.target);
    this.nextSibling.classList.toggle("clicked");
}

function handleCheckBoxClick(e) {
    e.stopPropagation();
    console.log(e.target);
}

function handleXClick(e) {
    e.stopPropagation();
    console.log(e.target);
}