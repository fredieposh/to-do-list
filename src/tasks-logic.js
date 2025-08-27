export {createProjectTasksList, addTaskToProjectTasksList, removeTaskFromProjectTasksList, Task};

const projectsTasks = {};

function createProjectTasksList(projectName) {
    projectsTasks[projectName] = [];
}

function addTaskToProjectTasksList(projectName,task) {
    projectsTasks[projectName].push(task);
}

function removeTaskFromProjectTasksList(projectName, taskIndex) {
    projectsTasks[projectName].splice(taskIndex,1);
    orderTasksIndex(projectName);
}

function orderTasksIndex(projectName) {
    projectsTasks[projectName].forEach((task, index) => task.setTaskId(index));
}

class Task {
    #projectName;
    #taskId;
    #taskTitle;
    #taskDesc;
    #taskDueDate;
    #taskPrior;

    constructor(projectName, taskTitle) {
        this.#projectName = projectName;
        this.#taskId =  projectsTasks[projectName].length;
        this.#taskTitle = taskTitle;
    };

    getTaskProjectName(){
        return this.#projectName;
    };

    setTaskId(newId) {
        this.#taskId = newId;
    };

    getTaskId() {
        return this.#taskId;
    };

    setTaskTitle(taskTitle) {
        this.#taskTitle = taskTitle;
    };

    getTaskTitle() {
        return this.#taskTitle;
    };

    setTaskDesc(TaskDesc) {
        this.#taskDesc = TaskDesc;
    };

    getTaskDesc() {
        return this.#taskDesc;
    };

    setTaskDueDate(TaskDueDate) {
        this.#taskDueDate = TaskDueDate;
    };

    getTaskDueDate() {
        return this.#taskDueDate;
    };

    setTaskPrior(TaskPrior) {
        this.#taskPrior = TaskPrior;
    };

    getTaskPrior() {
        return this.#taskPrior;
    };

}