export {createProjectTasksList, addTaskToProjectTasksList, Task};

const projectsTasks = {};

function createProjectTasksList(projectName) {
    projectsTasks[projectName] = [];
}

function addTaskToProjectTasksList(projectName,task) {
    projectsTasks[projectName].push(task);
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