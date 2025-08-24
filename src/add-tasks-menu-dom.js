import {createElementWithAttribute} from "./utils.js";
import {Task, addTaskToProjectTasksList} from "./tasks-logic.js"
import {appendTaskToaskContainerDiv} from "./tasks-container-dom.js"
import {createNewTaskDom, addTaskDomToProjectTasksDomList} from "./tasks-dom.js";
import {getSelectedProjectName} from "./sidebar-projects-div-dom.js"
import {getTaskButtonDiv, appendToAddTaskButtonDiv, getTaskButton, addEventListenerToAddTasktButton} from "./add-tasks-button-dom.js";

export {getAddTaskMenuDiv, createAddTaskMenuDiv, focusTaskNameInputValue, addEventListenerToCancelButton, addEventListenerToForm};

const addTaskMenuDiv = createElementWithAttribute("div","id", "add-tasks-menu-div");
const addTaskForm = createElementWithAttribute("form","id", "add-task-form");

const taskNameInputDiv = createElementWithAttribute("div","id", "task-name-input-div");
const taskNameInputLabel = createElementWithAttribute("label");
const taskNameInput = createElementWithAttribute("input"); 

const taskDescDiv = createElementWithAttribute("div","id", "task-desc-div");
const taskDescInputLabel = createElementWithAttribute("label");
const taskDescInput = createElementWithAttribute("textarea");

const taskDateDiv = createElementWithAttribute("div","id", "task-date-div");
const taskDateInputLabel = createElementWithAttribute("label");
const taskDateInput = createElementWithAttribute("input");

const taskPriorDiv = createElementWithAttribute("div","id", "task-prior-div");
const taskPriorFieldset = createElementWithAttribute("fieldset");
const taskPriorLegend = createElementWithAttribute("legend");
const taskLowPriorInput = createElementWithAttribute("input"); 
const taskLowPriorInputLabel = createElementWithAttribute("label");
const taskMedPriorInput = createElementWithAttribute("input");
const taskMedPriorInputLabel = createElementWithAttribute("label");
const taskHighPriorInput = createElementWithAttribute("input");
const taskHighPriorInputLabel = createElementWithAttribute("label");

const addTaskMenuButtonsDiv = createElementWithAttribute("div","id", "add-task-menu-buttons-div");
const addTaskMenuAddButton = createElementWithAttribute("button","id", "add-task-menu-add-button");
const addTaskMenuCancelButton = createElementWithAttribute("button","id", "add-task-menu-cancel-button");

function loadTextToButtons() {
    addTaskMenuAddButton.innerHTML = "Add";
    addTaskMenuCancelButton.innerHTML = "Cancel";
};

function addClassButtons() {
    addTaskMenuAddButton.classList.add("add-project-menu-button");
    addTaskMenuCancelButton.classList.add("add-project-menu-button");
};

function loadButtonsToDiv() {
  addTaskMenuButtonsDiv.appendChild(addTaskMenuAddButton);
  addTaskMenuButtonsDiv.appendChild(addTaskMenuCancelButton);
};

function addPropertiesToLabel(label, text) {
    label.setAttribute("for", "task-name-input");

    if(text) {
        label.innerHTML = text;
    }
};

function addPropertiesToInput() {
    taskNameInput.setAttribute("type", "text");
    taskNameInput.setAttribute("name", "task-name-input");
    taskNameInput.setAttribute("id", "task-name-input");
    taskNameInput.setAttribute("min-length","4");
    taskNameInput.required = true;
    taskNameInput.placeholder = "Your task name...";
    taskNameInput.autofocus = true;
};

function addPropertiesToRadioInput(radioInput,priority) {
    radioInput.setAttribute("type", "radio");
    radioInput.setAttribute("name", 'task-name-priority');
    radioInput.setAttribute("id", `task-name-${priority}`);
    if (priority === "low") {
        radioInput.checked = true;
    };
};

function getRadioValue() {
    const checkedRadioElement = document.querySelector('#add-task-form input[type="radio"]:checked');
    const checkedRadioElementParent = checkedRadioElement.parentElement;
    const checkedRadioElementLabelText = checkedRadioElementParent.querySelector("label").innerHTML;
    return checkedRadioElementLabelText;
}

function createRadioInputDiv() {
    createRadioInputFieldSet();
    taskPriorDiv.appendChild(taskPriorFieldset);
};

function createRadioInputFieldSet() {
    taskPriorFieldset.appendChild(taskPriorLegend);

    const lowPriorDiv = document.createElement("div");
    lowPriorDiv.appendChild(taskLowPriorInput);
    lowPriorDiv.appendChild(taskLowPriorInputLabel);
    taskPriorFieldset.appendChild(lowPriorDiv);

    const medPriorDiv = document.createElement("div");
    medPriorDiv.appendChild(taskMedPriorInput);
    medPriorDiv.appendChild(taskMedPriorInputLabel);
    taskPriorFieldset.appendChild(medPriorDiv);

    const highPriorDiv = document.createElement("div");
    highPriorDiv.appendChild(taskHighPriorInput);
    highPriorDiv.appendChild(taskHighPriorInputLabel);
    taskPriorFieldset.appendChild(highPriorDiv);
};

function addPropertiesToTextArea() {
    taskDescInput.setAttribute("name", "task-desc-input");
    taskDescInput.setAttribute("id", "task-desc-input");
    taskDescInput.placeholder = "Your task description...";
};

function setLegentText(){
    taskPriorLegend.innerHTML = "Task Priority";
};

function addPropertiesToDateInput() {
    taskDateInput.setAttribute("type", "date");
    taskDateInput.setAttribute("name", "task-date-input");
    taskDateInput.setAttribute("id", "task-date-input");
};

function createTasktNameInputDiv() {
    taskNameInputDiv.appendChild(taskNameInputLabel);
    taskNameInputDiv.appendChild(taskNameInput);
};

function createTaskDescDiv() {
    taskDescDiv.appendChild(taskDescInputLabel);
    taskDescDiv.appendChild(taskDescInput);
};

function createTaskDateInputDiv() {
    taskDateDiv.appendChild(taskDateInputLabel);
    taskDateDiv.appendChild(taskDateInput);
};

function createAddTaskForm() {
    addTaskForm.appendChild(taskNameInputDiv);
    addTaskForm.appendChild(taskDescDiv);
    addTaskForm.appendChild(taskDateDiv);
    addTaskForm.appendChild(taskPriorDiv);
    addTaskForm.appendChild(addTaskMenuButtonsDiv);
};

function loadFormToaddTaskMenuDiv() {
    addTaskMenuDiv.appendChild(addTaskForm);
};

function createAddTaskMenuDiv() {
    loadTextToButtons();
    addClassButtons();
    loadButtonsToDiv();

    addPropertiesToInput();
    addPropertiesToLabel(taskNameInputLabel);
    createTasktNameInputDiv();

    addPropertiesToTextArea();
    addPropertiesToLabel(taskDescInputLabel);
    createTaskDescDiv();

    addPropertiesToDateInput();
    addPropertiesToLabel(taskDateInputLabel, "Due Date:");
    createTaskDateInputDiv();

    setLegentText();
    addPropertiesToRadioInput(taskLowPriorInput, "low");
    addPropertiesToLabel(taskLowPriorInputLabel, "Low");
    addPropertiesToRadioInput(taskMedPriorInput, "medium");
    addPropertiesToLabel(taskMedPriorInputLabel, "Medium");
    addPropertiesToRadioInput(taskHighPriorInput, "high");
    addPropertiesToLabel(taskHighPriorInputLabel, "High");
    createRadioInputDiv();

    focusTaskNameInputValue();
    
    createAddTaskForm();
    loadFormToaddTaskMenuDiv();

    return addTaskMenuDiv;
};

function getAddTaskMenuDiv() {
    return addTaskMenuDiv;
};

function getValue(inputElement) {
    return inputElement.value;
};

function clearInputValue(inputElement) {
    inputElement.value = null;
};

function focusTaskNameInputValue() {
    taskNameInput.autofocus = true;
};

function handleCancelButtonClick(e) {
        e.preventDefault();
        addTaskMenuCancelButton.removeEventListener("click", handleCancelButtonClick);
        addTaskMenuDiv.remove();
        const addTaskButton = getTaskButton();
        appendToAddTaskButtonDiv(addTaskButton);
        addEventListenerToAddTasktButton();
};

function handleFormSubmmition(e) {
        e.preventDefault();
        addTaskForm.removeEventListener("submit", handleFormSubmmition);
        const selectedProjectName = getSelectedProjectName();

        const taskName = getValue(taskNameInput);
        const taskDesc = getValue(taskDescInput);
        const taskDate = getValue(taskDateInput);
        const taskRadio = getRadioValue();
        const task = new Task(selectedProjectName,taskName);
        task.setTaskDesc(taskDesc);
        task.setTaskDueDate(taskDate);
        task.setTaskPrior(taskRadio);        
        addTaskToProjectTasksList(selectedProjectName, task);

        const taskDom = createNewTaskDom(task);
        addTaskDomToProjectTasksDomList(selectedProjectName, taskDom);
        appendTaskToaskContainerDiv(taskDom);

        addTaskMenuDiv.remove();
        clearInputValue(taskNameInput);
        clearInputValue(taskDescInput);
        clearInputValue(taskDateInput);
        const addTaskButton = getTaskButton();
        appendToAddTaskButtonDiv(addTaskButton);
        addEventListenerToAddTasktButton();
};

function addEventListenerToCancelButton() {
    addTaskMenuCancelButton.addEventListener("click", handleCancelButtonClick);
};

function addEventListenerToForm() {
        addTaskForm.addEventListener("submit", handleFormSubmmition);
};