/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderPage */ "./src/renderPage.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var createForms = function () {
  var resetForm = function resetForm(id) {
    document.getElementById(id).reset();
  };

  var formContainer = function formContainer(fields, id, cancel, submit) {
    var form = document.createElement('form');
    form.classList.add('form'); // TODO remove after done testing

    form.classList.add('hidden');

    if (id) {
      form.id = id;
    }

    var _iterator = _createForOfIteratorHelper(fields),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var field = _step.value;
        form.appendChild(field);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var buttonContainer = document.createElement('div');
    var submitButton = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createButton)('submit', 'sm', 'submit', submit);
    var cancelButton = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createButton)('cancel', 'sm', 'button', cancel);
    buttonContainer.appendChild(submitButton);
    buttonContainer.appendChild(cancelButton);
    form.appendChild(buttonContainer);
    return form;
  };

  var projectFields = function projectFields() {
    var formFields = [];
    var title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('name', 'title');
    title.setAttribute('placeholder', 'Project Name');
    title.setAttribute('required', true);
    formFields.push(title);
    return formFields;
  };

  var taskFields = function taskFields() {
    var fields = [];
    var title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('title', 'Task Name');
    title.setAttribute('name', 'title');
    title.setAttribute('placeholder', 'Task Name');
    title.setAttribute('required', true);
    fields.push(title);
    var description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('title', 'Task Description');
    description.setAttribute('name', 'description');
    description.setAttribute('placeholder', 'Description');
    description.setAttribute('required', false);
    fields.push(description);
    var dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('title', 'Due Date');
    dueDate.setAttribute('name', 'dueDate'); // dueDate.setAttribute('placeholder', 'dueDate');

    dueDate.setAttribute('required', false);
    fields.push(dueDate);
    return fields;
  };

  var toggleProjectForm = function toggleProjectForm() {
    (0,_util__WEBPACK_IMPORTED_MODULE_0__.toggleHidden)(['newProjectForm', 'addProjectButton']);
  };

  var newProject = function newProject() {
    var submitNewProject = function submitNewProject(event) {
      event.preventDefault();
      var form = event.target.form;
      (0,_project__WEBPACK_IMPORTED_MODULE_1__.createProject)((0,_util__WEBPACK_IMPORTED_MODULE_0__.formToObject)(form));
      _renderPage__WEBPACK_IMPORTED_MODULE_3__.render.updateProjectsList((0,_storage__WEBPACK_IMPORTED_MODULE_4__.getProjects)());
      resetForm(form.id);
    };

    var newProjectForm = formContainer(projectFields(), 'newProjectForm', toggleProjectForm, submitNewProject);
    return newProjectForm;
  };

  var toggleTaskForm = function toggleTaskForm() {
    (0,_util__WEBPACK_IMPORTED_MODULE_0__.toggleHidden)(['newTaskForm', 'addTaskButton']);
  };

  var newTask = function newTask() {
    var submitNewTask = function submitNewTask(event) {
      event.preventDefault();
      var form = event.target.form;
      var formObject = (0,_util__WEBPACK_IMPORTED_MODULE_0__.formToObject)(form);
      var id = event.target.parentElement.parentElement.parentElement.id;
      console.log('THIS IS THE PROJECT ID & TASK FORM', id, form);
      (0,_task__WEBPACK_IMPORTED_MODULE_2__.createTask)(id, formObject);
      _renderPage__WEBPACK_IMPORTED_MODULE_3__.render.updateTasksList((0,_storage__WEBPACK_IMPORTED_MODULE_4__.getProject)(id).tasks);
      resetForm(form.id);
    };

    var newTaskForm = formContainer(taskFields(), 'newTaskForm', toggleTaskForm, submitNewTask);
    return newTaskForm;
  };

  return {
    newProject: newProject,
    newTask: newTask,
    toggleProjectForm: toggleProjectForm,
    toggleTaskForm: toggleTaskForm
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForms);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "getDefaultProject": () => (/* binding */ getDefaultProject)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Project = function Project(id) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'New Project';
  var tasks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  _classCallCheck(this, Project);

  this.id = id;
  this.title = title;
  this.tasks = tasks;
}; // Object for default project


var getDefaultProject = function getDefaultProject() {
  // Load default project for testing and new users
  console.log('Loading default project');
  var defaultProjectsList = [{
    id: 0,
    title: 'Default Project',
    tasks: [{
      id: 0,
      title: 'My First Task',
      description: 'This is the first task for this project',
      dueDate: '2021-08-17',
      priority: 1,
      complete: false,
      notes: 'This is a note'
    }]
  }];
  var defaultProjects = []; // Create function to populate default projects for testing & new users

  for (var _i = 0, _defaultProjectsList = defaultProjectsList; _i < _defaultProjectsList.length; _i++) {
    var project = _defaultProjectsList[_i];
    var defaultProject = new Project(project.id, project.title, project.tasks);
    defaultProjects.push(defaultProject);
  }

  return defaultProjects;
};

var createProject = function createProject(project) {
  // Create a project here, add to storage
  var newProjectsList = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.getProjects)();
  var id = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getId)(newProjectsList);
  var projectObject = new Project(id, project.title);
  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.addProject)(projectObject);
  return newProjectsList;
};

var deleteProject = function deleteProject(event) {
  var id = event.target.parentElement.id;
  var shouldDelete = window.confirm('Are you sure you want to delete this project?');
  var newProjectsList = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.getProjects)();

  if (shouldDelete) {
    // Go ahead and delete it
    newProjectsList = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.removeProject)(id);
    return newProjectsList;
  }

  return newProjectsList;
};



/***/ }),

/***/ "./src/renderPage.js":
/*!***************************!*\
  !*** ./src/renderPage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/task.js");






 //  Create button function with option for large and small buttons
// Create different ui function components
// * Render the projects and task components

var render = function () {
  // const projectsListContainer = document.createElement('div');
  // const tasksListContainer = document.createElement('div');
  // const currentProjectTitle = document.createElement('h1');
  var projectContainer = function projectContainer(project) {
    // Create individual project container
    var container = document.createElement('div');
    container.classList.add('project');
    container.id = project.id;
    var deleteButton = (0,_util__WEBPACK_IMPORTED_MODULE_2__.createButton)('X', 'sm', 'button');
    deleteButton.title = 'Delete project';
    deleteButton.classList.add('deleteBtn');

    deleteButton.onclick = function (event) {
      var newProjectList = (0,_project__WEBPACK_IMPORTED_MODULE_3__.deleteProject)(event);
      render.updateProjectsList(newProjectList);
    };

    var projectButton = (0,_util__WEBPACK_IMPORTED_MODULE_2__.createButton)(project.title);

    projectButton.onclick = function (event) {
      var id = event.target.parentElement.id;
      changeCurrentProject(id);
    };

    container.appendChild(projectButton);
    container.appendChild(deleteButton);
    return container;
  };

  var projectsLayout = function projectsLayout(parent) {
    // Create the projects list container layout
    var projectsContainer = document.createElement('div');
    projectsContainer.classList.add('projectsContainer');
    projectsContainer.id = 'projectsContainer';
    var projectsTitle = document.createElement('h2');
    projectsTitle.innerHTML = 'Projects';
    projectsContainer.appendChild(projectsTitle);
    var projectsListContainer = document.createElement('div');
    projectsListContainer.id = 'projectsListContainer';
    projectsContainer.appendChild(projectsListContainer);
    var addProjectButton = (0,_util__WEBPACK_IMPORTED_MODULE_2__.createButton)('+', 'lg', 'button', _forms__WEBPACK_IMPORTED_MODULE_1__.default.toggleProjectForm, 'addProjectButton');
    addProjectButton.title = 'Add project';
    addProjectButton.classList.add('addBtn');
    projectsContainer.appendChild(addProjectButton);
    projectsContainer.appendChild(_forms__WEBPACK_IMPORTED_MODULE_1__.default.newProject());
    parent.appendChild(projectsContainer);
  };

  var projectsList = function projectsList(projects) {
    // Populate the projects list
    var projectsListContainer = document.getElementById('projectsListContainer');
    projects === null || projects === void 0 ? void 0 : projects.forEach(function (project) {
      projectsListContainer.appendChild(projectContainer(project));
    });
  };

  var deleteProjectsList = function deleteProjectsList() {
    //  Delete projects list from dom
    var projectsListContainer = document.getElementById('projectsListContainer');
    console.log('Cleaning up old projects...');
    var oldList = projectsListContainer.querySelectorAll('div');
    oldList.forEach(function (project) {
      project.remove();
    });
    console.log('Bye bye old projects...');
  };

  var updateProjectsList = function updateProjectsList(array) {
    // Update the projects list by deleting and then repopulating
    deleteProjectsList();
    projectsList(array);
  };

  var taskContainer = function taskContainer(task) {
    var container = document.createElement('div');
    container.classList.add('task');
    container.id = task.id;
    var completeButton = (0,_util__WEBPACK_IMPORTED_MODULE_2__.createButton)(task.complete ? '✓' : '', 'sm', 'button');
    completeButton.title = "Toggle ".concat(task.title, " Complete");
    completeButton.classList.add('taskComplete');

    completeButton.onclick = function (event) {
      var newTaskList = (0,_task__WEBPACK_IMPORTED_MODULE_4__.toggleTaskComplete)(event);
      render.updateTasksList(newTaskList);
    };

    container.appendChild(completeButton);
    var title = document.createElement('div');
    title.title = task.title;
    title.innerText = task.title;
    title.classList.add('taskTitle');
    container.appendChild(title);
    var description = document.createElement('div');
    description.title = "".concat(task.title, " Description");
    description.innerText = task.description;
    description.classList.add('taskDescription');
    container.appendChild(description);
    var dueDate = document.createElement('div');
    dueDate.title = "".concat(task.title, " Due Date");
    dueDate.innerText = task.dueDate;
    dueDate.classList.add('taskDueDate');
    container.appendChild(dueDate);
    var deleteButton = (0,_util__WEBPACK_IMPORTED_MODULE_2__.createButton)('X', 'sm', 'button');
    deleteButton.title = "Delete ".concat(task.title);
    deleteButton.classList.add('deleteBtn');

    deleteButton.onclick = function (event) {
      var newTaskList = (0,_task__WEBPACK_IMPORTED_MODULE_4__.deleteTask)(event);
      render.updateTasksList(newTaskList);
    };

    container.appendChild(deleteButton);
    return container;
  };

  var tasksLayout = function tasksLayout(parent) {
    // Do some stuff
    var currentProject = document.createElement('div');
    currentProject.classList.add('currentProject');
    currentProject.title = 'Current Project';
    var currentProjectTitle = document.createElement('div');
    currentProjectTitle.innerHTML = 'Current Project';
    currentProjectTitle.classList.add = 'title';
    currentProjectTitle.id = 'currentProjectTitle';
    currentProject.appendChild(currentProjectTitle);
    var tasksListContainer = document.createElement('div');
    tasksListContainer.id = 'tasksListContainer';
    currentProject.appendChild(tasksListContainer);
    var addTaskButton = (0,_util__WEBPACK_IMPORTED_MODULE_2__.createButton)('+', 'lg', 'button', _forms__WEBPACK_IMPORTED_MODULE_1__.default.toggleTaskForm, 'addTaskButton');
    addTaskButton.title = 'Add Task';
    addTaskButton.classList.add('addBtn');
    currentProject.appendChild(addTaskButton); // TODO Put in tasks form

    currentProject.appendChild(_forms__WEBPACK_IMPORTED_MODULE_1__.default.newTask());
    parent.appendChild(currentProject);
  };

  var tasksList = function tasksList(tasks) {
    var tasksListContainer = document.getElementById('tasksListContainer');
    tasks === null || tasks === void 0 ? void 0 : tasks.forEach(function (task) {
      tasksListContainer.appendChild(taskContainer(task));
    });
  };

  var deleteTasksList = function deleteTasksList() {
    //  Delete tasks list from dom
    var tasksListContainer = document.getElementById('tasksListContainer');
    console.log('Cleaning up old tasks...');
    var oldList = tasksListContainer.querySelectorAll('div');
    oldList.forEach(function (task) {
      task.remove();
    });
    console.log('Bye bye old tasks...');
  };

  var updateTasksList = function updateTasksList(array) {
    // Update the tasks list by deleting and then repopulating
    deleteTasksList();
    tasksList(array);
  };

  var changeCurrentProject = function changeCurrentProject(id) {
    var currentProject = (0,_storage__WEBPACK_IMPORTED_MODULE_0__.getProject)(id);
    var currentProjectContainer = document.querySelectorAll('.currentProject');
    currentProjectContainer.forEach(function (element) {
      element.id = id;
    });
    var currentProjectTitle = document.getElementById('currentProjectTitle');
    currentProjectTitle.innerHTML = currentProject.title;
    updateTasksList(currentProject.tasks);
  };

  return {
    projectsLayout: projectsLayout,
    tasksLayout: tasksLayout,
    projectsList: projectsList,
    updateProjectsList: updateProjectsList,
    updateTasksList: updateTasksList,
    changeCurrentProject: changeCurrentProject
  };
}(); // * Render the main page component


function renderPage() {
  // Main container elements
  var main = document.createElement('div');
  main.classList.add('main');
  render.projectsLayout(main);
  render.tasksLayout(main);
  document.body.appendChild(main); // Populate main container elements

  render.updateProjectsList((0,_storage__WEBPACK_IMPORTED_MODULE_0__.getProjects)());
  render.changeCurrentProject((0,_storage__WEBPACK_IMPORTED_MODULE_0__.getProjects)()[0].id);
  return main;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPage);


/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "getProject": () => (/* binding */ getProject),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "getTasks": () => (/* binding */ getTasks),
/* harmony export */   "getTask": () => (/* binding */ getTask),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "removeTask": () => (/* binding */ removeTask),
/* harmony export */   "updateTask": () => (/* binding */ updateTask)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 //  TODO Create function that decides whether to save to local storage
// TODO Create function that saves project info and returns new myProjects array
// Look for projects in local storage
// Create default project if none exist in local storage
//  * Function that updates myProjects array

var updateMyProjects = function updateMyProjects(object) {
  console.log('Storage upated...');
  localStorage.setItem('myProjects', JSON.stringify(object));
};

var getIndexFromId = function getIndexFromId(id, array) {
  // TODO Create function that finds index from id
  var index = array.findIndex(function (item) {
    return item.id === parseInt(id);
  });
  return index;
}; // * Project CRUD functions


var getProjects = function getProjects() {
  var projects = [];
  var localStoredProjects = localStorage.getItem('myProjects'); // TODO Remove once finished testing
  // check local storage for projects
  // If no projects exist use default project

  if (!localStoredProjects) {
    projects.push.apply(projects, _toConsumableArray((0,_project__WEBPACK_IMPORTED_MODULE_0__.getDefaultProject)()));
    updateMyProjects(projects);
    console.log('No projects in local storage, using default project');
  } // If myProjects exists, if they do return myProjects projects exists


  if (localStoredProjects) {
    var storedProjects = JSON.parse(localStoredProjects);
    projects.push.apply(projects, _toConsumableArray(storedProjects));
  }

  console.log('PROJECTS LOADED...', projects);
  return projects;
};

var getProject = function getProject(id) {
  return getProjects().find(function (project) {
    return project.id === parseInt(id);
  });
};

var addProject = function addProject(object) {
  //   Add projects to storage
  var projects = getProjects();
  projects.push(object);
  console.log('Storage upated...');
  updateMyProjects(projects);
  return getProjects();
}; // Delete a project from projects array


var removeProject = function removeProject(id) {
  var projects = getProjects();
  var index = getIndexFromId(id, projects);
  console.log('Delete project in index:', index);
  projects.splice(index, 1);
  updateMyProjects(projects);
  return getProjects();
}; // * Task CRUD functions


var getTasks = function getTasks(projectId) {
  return getProject(projectId).tasks;
};

var getTask = function getTask(projectId, taskId) {
  return getTasks(projectId).find(function (ProjectTask) {
    return ProjectTask.id === parseInt(taskId);
  });
};

var addTask = function addTask(projectId, object) {
  //   Add tasks to storage
  var projects = getProjects();
  var projectIndex = projects.findIndex(function (project) {
    return project.id === parseInt(projectId);
  });
  projects[projectIndex].tasks.push(object);
  console.log('Updated Projects', projects);
  updateMyProjects(projects);
  console.log('Storage upated...');
  return getTasks(projectId);
};

var updateTask = function updateTask(projectId, updatedTask) {
  var projects = getProjects();
  projects.forEach(function (project) {
    if (project.id === parseInt(projectId)) {
      project.tasks.forEach(function (task) {
        if (task.id === parseInt(updatedTask.id)) {
          task.title = updatedTask.title;
          task.description = updatedTask.description;
          task.dueDate = updatedTask.dueDate;
          task.complete = updatedTask.complete;
          task.priority = updatedTask.priority;
          task.notes = updatedTask.notes;
        }
      });
    }
  });
  updateMyProjects(projects);
  return getTasks(projectId);
};

var removeTask = function removeTask(projectId, taskId) {
  // delete task from project
  var projects = getProjects();
  var projectIndex = getIndexFromId(projectId, projects);
  var project = projects[projectIndex];
  var tasks = project.tasks;
  var taskIndex = getIndexFromId(taskId, tasks);
  tasks.splice(taskIndex, 1);
  projects.splice(projectIndex, 1, project);
  updateMyProjects(projects);
  console.log('Projects!!!!', getProjects());
  return getTasks(projectId);
};



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "toggleTaskComplete": () => (/* binding */ toggleTaskComplete)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


 // Make functions with ability to create and delete todos in a project

var Task = function Task(id) {
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'New Task';
  var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'This is a new task';
  var dueDate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
  var priority = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var complete = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var notes = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '';

  _classCallCheck(this, Task);

  this.id = id;
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.complete = complete;
  this.notes = notes;
};

var createTask = function createTask(projectId, task) {
  // Create a project here, add to storage
  var project = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.getProject)(projectId);
  console.log('PROJECT FOR THIS TASK', project);
  var id = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getId)(project.tasks);
  var taskObject = new Task(id, task.title, task.description, task.dueDate);
  console.log('Sending task to storage', taskObject);
  var newTaskList = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.addTask)(projectId, taskObject);
  return newTaskList;
};

var deleteTask = function deleteTask(event) {
  var taskId = event.target.parentElement.id;
  var projectId = event.target.parentElement.parentElement.parentElement.id;
  var shouldDelete = window.confirm('Are you sure you want to delete this project?');
  var newTaskList = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.getTasks)(projectId);

  if (shouldDelete) {
    // Go ahead and delete it
    newTaskList = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.removeTask)(projectId, taskId);
    return newTaskList;
  }

  return newTaskList;
};

var toggleTaskComplete = function toggleTaskComplete(event) {
  // Toggle task complete status
  var taskId = event.target.parentElement.id;
  var projectId = event.target.parentElement.parentElement.parentElement.id;
  var task = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.getTask)(projectId, taskId);
  task.complete = !task.complete;
  var newTaskList = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.updateTask)(projectId, task);
  return newTaskList;
};



/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getId": () => (/* binding */ getId),
/* harmony export */   "formToObject": () => (/* binding */ formToObject),
/* harmony export */   "toggleHidden": () => (/* binding */ toggleHidden),
/* harmony export */   "createButton": () => (/* binding */ createButton)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// * Silly function that can be removed
var printMe = function printMe(event) {
  console.log('This is the default printMe() onClick function!', event);
};

function getId(array) {
  // Create function that checks if id exists and assigns next availabe value
  var arr = array;
  console.log('Searching', arr, 'for id');
  var id = 0;

  while (arr.some(function (e) {
    return e.id === id;
  })) {
    id += 1;
  }

  return id;
}

function formToObject(form) {
  var newObject = {};

  var _iterator = _createForOfIteratorHelper(form),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var eachInput = _step.value;
      var name = eachInput.name,
          value = eachInput.value,
          type = eachInput.type;

      if (type === 'number') {
        value = parseInt(value);
      }

      if (type === 'checkbox') {
        value = eachInput.checked;
      }

      if (value !== undefined && type !== 'submit' && type !== 'fieldset') {
        newObject[name] = value;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return newObject;
}

function toggleHidden(ids) {
  // if (ids.length < 1) {
  //   return;
  // }
  console.log('toggleHidden ids', ids);

  var _iterator2 = _createForOfIteratorHelper(ids),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var id = _step2.value;
      var element = document.getElementById(id);

      if (element) {
        element.classList.toggle('hidden');
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function createButton(text, size, type, onClick, id) {
  var btn = document.createElement('button');
  var buttonText = text || '';
  btn.innerHTML = buttonText;
  btn.onclick = onClick || printMe;
  btn.classList.add('btn');
  btn.setAttribute('title', buttonText);

  if (id) {
    btn.id = id;
  }

  if (type === 'submit') {
    btn.setAttribute('type', 'submit');
  }

  if (!type || type === 'button') {
    btn.setAttribute('type', 'button');
  }

  if (size === 'sm') {
    btn.classList.add('btn-sm');
  }

  return btn;
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"utf-8\";\r\n/*\r\n\tAuthor\t\tCrystalCommerce.com // Ross Dallaire\r\n\r\n\tColors\r\n*/\r\n\r\n/* RESET */\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nq,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-weight: inherit;\r\n  font-style: inherit;\r\n  font-size: 100%;\r\n  font-family: inherit;\r\n}\r\n\r\nem {\r\n  font-style: italic;\r\n}\r\n\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n/* /END RESET */\r\nbody {\r\n  background: whitesmoke;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\r\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n  font-size: 100%;\r\n}\r\n\r\np {\r\n  line-height: 150%;\r\n  margin: 0 0 10px;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: Roboto, Arial, Helvetica, sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.25rem;\r\n  margin: 0 0 15px;\r\n  font-weight: normal;\r\n}\r\n\r\nh2 {\r\n  font-size: 1.62671rem;\r\n  margin: 0 0 12px;\r\n  font-weight: normal;\r\n}\r\n\r\nh3 {\r\n  font-size: 1.38316rem;\r\n  margin: 0 0 12px;\r\n  font-weight: normal;\r\n}\r\n\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 5px 0 5px;\r\n  font-weight: bold;\r\n}\r\n\r\nh1 a,\r\nh2 a,\r\nh3 a,\r\nh4 a,\r\nh5 a,\r\nh6 a {\r\n}\r\n\r\na img {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\na {\r\n  color: #363636;\r\n  outline: none;\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  color: #999;\r\n}\r\n\r\n/* remove dotted lines on some links in FF browser */\r\n\r\na,\r\na:active,\r\na:visited,\r\na img {\r\n  outline: none;\r\n}\r\n\r\n/* / */\r\n\r\n/* CLEARFIX */\r\n.clearfix:after {\r\n  content: \".\";\r\n  display: block;\r\n  clear: both;\r\n  visibility: hidden;\r\n  line-height: 0;\r\n  height: 0;\r\n}\r\n\r\n.clearfix {\r\n  display: inline-block;\r\n}\r\n\r\nhtml[xmlns] .clearfix {\r\n  display: block;\r\n}\r\n\r\n* html .clearfix {\r\n  height: 1%;\r\n}\r\n/* /END CLEARFIX */\r\n\r\n/*\r\n=====================================================\r\n\tLayout & Framework\r\n===================================================== */\r\n\r\n:root {\r\n  --color-50: #f2f2f2;\r\n  --color-100: #d9d9d9;\r\n  --color-200: #bfbfbf;\r\n  --color-300: #a6a6a6;\r\n  --color-400: #8c8c8c;\r\n  --color-500: #737373;\r\n  --color-600: #595959;\r\n  --color-700: #404040;\r\n  --color-800: #262626;\r\n  --color-900: #0d0d0d;\r\n\r\n  /* CSS HSL */\r\n  --blue: #007bff;\r\n  --indigo: #6610f2;\r\n  --purple: #6f42c1;\r\n  --pink: #e83e8c;\r\n  --red: #dc3545;\r\n  --orange: #fd7e14;\r\n  --yellow: #ffc107;\r\n  --green: #28a745;\r\n  --teal: #20c997;\r\n  --cyan: #17a2b8;\r\n  --white: #fff;\r\n  --gray: #6c757d;\r\n  --gray-dark: #343a40;\r\n  --primary: #007bff;\r\n  --secondary: #6c757d;\r\n  --success: #28a745;\r\n  --info: #17a2b8;\r\n  --warning: #ffc107;\r\n  --danger: #dc3545;\r\n  --light: #f8f9fa;\r\n  --dark: #343a40;\r\n  --breakpoint-xs: 0;\r\n  --breakpoint-sm: 576px;\r\n  --breakpoint-md: 768px;\r\n  --breakpoint-lg: 992px;\r\n  --breakpoint-xl: 1200px;\r\n\r\n  --box-shadow: rgba(196, 166, 166, 0.16) 0px 3px 6px,\r\n    rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n\r\n  --radius: 3px;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n  opacity: 0;\r\n}\r\n\r\n.btn {\r\n  font-size: 1.25rem;\r\n  border: none;\r\n  border-radius: var(--radius);\r\n  cursor: pointer;\r\n  min-width: 42px;\r\n  min-height: 42px;\r\n  /* margin: 1rem; */\r\n  /* aspect-ratio: 1; */\r\n  padding: 0.25rem;\r\n  margin: 0.5rem 0.5rem 0.5rem 0;\r\n  background: none;\r\n  color: var(black);\r\n  /* transition: all 100ms ease-in-out; */\r\n  /* border: 0.125rem solid var(var(--cyan)); */\r\n  /* box-shadow: var(--box-shadow); */\r\n  opacity: 1;\r\n}\r\n\r\n.btn:hover {\r\n  opacity: 0.8;\r\n  /* background-color: var(--color-200); */\r\n  outline: 2px solid var(--indigo);\r\n  /* color: yellow; */\r\n}\r\n\r\n.btn:active,\r\n.btn:focus {\r\n  opacity: 0.6;\r\n  /* margin: 1.5rem; */\r\n  /* outline: 0.25rem solid var(--indigo); */\r\n  /* color: var(--color-500); */\r\n}\r\n\r\n.deleteBtn {\r\n  transition: opacity 300ms linear;\r\n  opacity: 0;\r\n}\r\n\r\n.title {\r\n  margin: 0;\r\n  font-weight: 600;\r\n  /* font-size: 3rem; */\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 1rem 0;\r\n  background: var(--color-700);\r\n  color: var(--yellow);\r\n  border: 2px solid black;\r\n}\r\n\r\n.main {\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--color-50);\r\n  color: black;\r\n  transition: all 300ms ease-in-out;\r\n  /* padding: 1rem; */\r\n  /* margin: 1rem; */\r\n}\r\n\r\n.projectsContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  width: 25%;\r\n  height: 100%;\r\n  min-height: 100vh;\r\n  padding: 1rem;\r\n  background: var(--color-100);\r\n}\r\n\r\n.project {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  border-radius: 0.25rem;\r\n  padding: 0.5rem;\r\n  width: 100%;\r\n  height: auto;\r\n  transition: all 300ms ease-in-out;\r\n}\r\n\r\n.project:hover {\r\n  /* background: var(--color-200); */\r\n}\r\n\r\n.currentProject {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  width: 75%;\r\n  height: 100%;\r\n  min-height: 100vh;\r\n  padding: 1rem;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  /* background: var(--color-100); */\r\n  border-radius: 0.5rem;\r\n  padding: 0.5rem;\r\n  margin: 0.5rem;\r\n  width: 100%;\r\n  height: auto;\r\n  transition: all 300ms ease-in-out;\r\n}\r\n\r\n.taskComplete {\r\n  border: 1px solid var(--indigo);\r\n  /* border-radius: 1.5rem; */\r\n}\r\n\r\n.task:hover {\r\n  /* background: var(--color-100); */\r\n}\r\n\r\n.task:hover .deleteBtn,\r\n.project:hover .deleteBtn {\r\n  opacity: 1;\r\n}\r\n\r\n.taskTitle {\r\n  font-size: 1rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.taskDescription {\r\n  font-size: 1rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.taskDueDate {\r\n  font-size: 1rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n/* Form styles */\r\nform {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  transition: all 300ms ease-in-out;\r\n  opacity: 1;\r\n}\r\n\r\nlabel {\r\n  margin: 0.5rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\ninput {\r\n  margin: 0.5rem 0.5rem 0.5rem 0;\r\n  padding: 0.5rem;\r\n  width: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: start;\r\n}\r\n\r\nlabel[type=\"checkbox\"] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  height: 100%;\r\n  width: auto;\r\n  position: relative;\r\n}\r\n\r\n/*\r\n=====================================================\r\n\tDynamic Displays\r\n===================================================== */\r\n\r\n/*\r\n=====================================================\r\n\tCurrently Unused Styles\r\n===================================================== */\r\n/* The Modal (background) */\r\n.modal {\r\n  /* Hidden by default */\r\n  display: none;\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  border-radius: var(--radius);\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0, 0, 0); /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  color: black;\r\n  margin: 15% auto; /* 15% from the top and centered */\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  border-radius: var(--radius);\r\n  width: 80vw; /* Could be more or less, depending on screen size */\r\n  max-width: 666px;\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;;;;CAIC;;AAED,UAAU;AACV;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA2CE,SAAS;EACT,UAAU;EACV,SAAS;EACT,oBAAoB;EACpB,mBAAmB;EACnB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,SAAS;EACT,UAAU;AACZ;AACA,eAAe;AACf;EACE,sBAAsB;EACtB;gEAC8D;EAC9D,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;;;;;;EAME,iDAAiD;AACnD;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;;;EAGE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;;;;;AAMA;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,cAAc;EACd,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,WAAW;AACb;;AAEA,oDAAoD;;AAEpD;;;;EAIE,aAAa;AACf;;AAEA,MAAM;;AAEN,aAAa;AACb;EACE,YAAY;EACZ,cAAc;EACd,WAAW;EACX,kBAAkB;EAClB,cAAc;EACd,SAAS;AACX;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,UAAU;AACZ;AACA,kBAAkB;;AAElB;;;uDAGuD;;AAEvD;EACE,mBAAmB;EACnB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;EACpB,oBAAoB;;EAEpB,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,aAAa;EACb,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,uBAAuB;;EAEvB;mCACiC;;EAEjC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,4BAA4B;EAC5B,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,qBAAqB;EACrB,gBAAgB;EAChB,8BAA8B;EAC9B,gBAAgB;EAChB,iBAAiB;EACjB,uCAAuC;EACvC,6CAA6C;EAC7C,mCAAmC;EACnC,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,wCAAwC;EACxC,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;EACZ,oBAAoB;EACpB,0CAA0C;EAC1C,6BAA6B;AAC/B;;AAEA;EACE,gCAAgC;EAChC,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,gBAAgB;EAChB,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,4BAA4B;EAC5B,oBAAoB;EACpB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,uBAAuB;EACvB,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,YAAY;EACZ,iCAAiC;EACjC,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,uBAAuB;EACvB,sBAAsB;EACtB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,kCAAkC;EAClC,qBAAqB;EACrB,eAAe;EACf,cAAc;EACd,WAAW;EACX,YAAY;EACZ,iCAAiC;AACnC;;AAEA;EACE,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA;EACE,kCAAkC;AACpC;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,iCAAiC;EACjC,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,eAAe;EACf,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;;;uDAGuD;;AAEvD;;;uDAGuD;AACvD,2BAA2B;AAC3B;EACE,sBAAsB;EACtB,aAAa;EACb,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,4BAA4B;EAC5B,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;EAC9B,cAAc,EAAE,4BAA4B;EAC5C,8BAA8B,EAAE,mBAAmB;EACnD,oCAAoC,EAAE,qBAAqB;AAC7D;;AAEA,sBAAsB;AACtB;EACE,yBAAyB;EACzB,YAAY;EACZ,gBAAgB,EAAE,kCAAkC;EACpD,aAAa;EACb,sBAAsB;EACtB,4BAA4B;EAC5B,WAAW,EAAE,oDAAoD;EACjE,gBAAgB;AAClB;;AAEA,qBAAqB;AACrB;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB","sourcesContent":["@charset \"utf-8\";\r\n/*\r\n\tAuthor\t\tCrystalCommerce.com // Ross Dallaire\r\n\r\n\tColors\r\n*/\r\n\r\n/* RESET */\r\nhtml,\r\nbody,\r\ndiv,\r\nspan,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nq,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-weight: inherit;\r\n  font-style: inherit;\r\n  font-size: 100%;\r\n  font-family: inherit;\r\n}\r\n\r\nem {\r\n  font-style: italic;\r\n}\r\n\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n/* /END RESET */\r\nbody {\r\n  background: whitesmoke;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen,\r\n    Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n  font-size: 100%;\r\n}\r\n\r\np {\r\n  line-height: 150%;\r\n  margin: 0 0 10px;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: Roboto, Arial, Helvetica, sans-serif;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.25rem;\r\n  margin: 0 0 15px;\r\n  font-weight: normal;\r\n}\r\n\r\nh2 {\r\n  font-size: 1.62671rem;\r\n  margin: 0 0 12px;\r\n  font-weight: normal;\r\n}\r\n\r\nh3 {\r\n  font-size: 1.38316rem;\r\n  margin: 0 0 12px;\r\n  font-weight: normal;\r\n}\r\n\r\nh4,\r\nh5,\r\nh6 {\r\n  margin: 5px 0 5px;\r\n  font-weight: bold;\r\n}\r\n\r\nh1 a,\r\nh2 a,\r\nh3 a,\r\nh4 a,\r\nh5 a,\r\nh6 a {\r\n}\r\n\r\na img {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\na {\r\n  color: #363636;\r\n  outline: none;\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  color: #999;\r\n}\r\n\r\n/* remove dotted lines on some links in FF browser */\r\n\r\na,\r\na:active,\r\na:visited,\r\na img {\r\n  outline: none;\r\n}\r\n\r\n/* / */\r\n\r\n/* CLEARFIX */\r\n.clearfix:after {\r\n  content: \".\";\r\n  display: block;\r\n  clear: both;\r\n  visibility: hidden;\r\n  line-height: 0;\r\n  height: 0;\r\n}\r\n\r\n.clearfix {\r\n  display: inline-block;\r\n}\r\n\r\nhtml[xmlns] .clearfix {\r\n  display: block;\r\n}\r\n\r\n* html .clearfix {\r\n  height: 1%;\r\n}\r\n/* /END CLEARFIX */\r\n\r\n/*\r\n=====================================================\r\n\tLayout & Framework\r\n===================================================== */\r\n\r\n:root {\r\n  --color-50: #f2f2f2;\r\n  --color-100: #d9d9d9;\r\n  --color-200: #bfbfbf;\r\n  --color-300: #a6a6a6;\r\n  --color-400: #8c8c8c;\r\n  --color-500: #737373;\r\n  --color-600: #595959;\r\n  --color-700: #404040;\r\n  --color-800: #262626;\r\n  --color-900: #0d0d0d;\r\n\r\n  /* CSS HSL */\r\n  --blue: #007bff;\r\n  --indigo: #6610f2;\r\n  --purple: #6f42c1;\r\n  --pink: #e83e8c;\r\n  --red: #dc3545;\r\n  --orange: #fd7e14;\r\n  --yellow: #ffc107;\r\n  --green: #28a745;\r\n  --teal: #20c997;\r\n  --cyan: #17a2b8;\r\n  --white: #fff;\r\n  --gray: #6c757d;\r\n  --gray-dark: #343a40;\r\n  --primary: #007bff;\r\n  --secondary: #6c757d;\r\n  --success: #28a745;\r\n  --info: #17a2b8;\r\n  --warning: #ffc107;\r\n  --danger: #dc3545;\r\n  --light: #f8f9fa;\r\n  --dark: #343a40;\r\n  --breakpoint-xs: 0;\r\n  --breakpoint-sm: 576px;\r\n  --breakpoint-md: 768px;\r\n  --breakpoint-lg: 992px;\r\n  --breakpoint-xl: 1200px;\r\n\r\n  --box-shadow: rgba(196, 166, 166, 0.16) 0px 3px 6px,\r\n    rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n\r\n  --radius: 3px;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n  opacity: 0;\r\n}\r\n\r\n.btn {\r\n  font-size: 1.25rem;\r\n  border: none;\r\n  border-radius: var(--radius);\r\n  cursor: pointer;\r\n  min-width: 42px;\r\n  min-height: 42px;\r\n  /* margin: 1rem; */\r\n  /* aspect-ratio: 1; */\r\n  padding: 0.25rem;\r\n  margin: 0.5rem 0.5rem 0.5rem 0;\r\n  background: none;\r\n  color: var(black);\r\n  /* transition: all 100ms ease-in-out; */\r\n  /* border: 0.125rem solid var(var(--cyan)); */\r\n  /* box-shadow: var(--box-shadow); */\r\n  opacity: 1;\r\n}\r\n\r\n.btn:hover {\r\n  opacity: 0.8;\r\n  /* background-color: var(--color-200); */\r\n  outline: 2px solid var(--indigo);\r\n  /* color: yellow; */\r\n}\r\n\r\n.btn:active,\r\n.btn:focus {\r\n  opacity: 0.6;\r\n  /* margin: 1.5rem; */\r\n  /* outline: 0.25rem solid var(--indigo); */\r\n  /* color: var(--color-500); */\r\n}\r\n\r\n.deleteBtn {\r\n  transition: opacity 300ms linear;\r\n  opacity: 0;\r\n}\r\n\r\n.title {\r\n  margin: 0;\r\n  font-weight: 600;\r\n  /* font-size: 3rem; */\r\n  width: 100%;\r\n  height: auto;\r\n  padding: 1rem 0;\r\n  background: var(--color-700);\r\n  color: var(--yellow);\r\n  border: 2px solid black;\r\n}\r\n\r\n.main {\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  min-height: 100vh;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: var(--color-50);\r\n  color: black;\r\n  transition: all 300ms ease-in-out;\r\n  /* padding: 1rem; */\r\n  /* margin: 1rem; */\r\n}\r\n\r\n.projectsContainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  width: 25%;\r\n  height: 100%;\r\n  min-height: 100vh;\r\n  padding: 1rem;\r\n  background: var(--color-100);\r\n}\r\n\r\n.project {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  border-radius: 0.25rem;\r\n  padding: 0.5rem;\r\n  width: 100%;\r\n  height: auto;\r\n  transition: all 300ms ease-in-out;\r\n}\r\n\r\n.project:hover {\r\n  /* background: var(--color-200); */\r\n}\r\n\r\n.currentProject {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  width: 75%;\r\n  height: 100%;\r\n  min-height: 100vh;\r\n  padding: 1rem;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  /* background: var(--color-100); */\r\n  border-radius: 0.5rem;\r\n  padding: 0.5rem;\r\n  margin: 0.5rem;\r\n  width: 100%;\r\n  height: auto;\r\n  transition: all 300ms ease-in-out;\r\n}\r\n\r\n.taskComplete {\r\n  border: 1px solid var(--indigo);\r\n  /* border-radius: 1.5rem; */\r\n}\r\n\r\n.task:hover {\r\n  /* background: var(--color-100); */\r\n}\r\n\r\n.task:hover .deleteBtn,\r\n.project:hover .deleteBtn {\r\n  opacity: 1;\r\n}\r\n\r\n.taskTitle {\r\n  font-size: 1rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.taskDescription {\r\n  font-size: 1rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.taskDueDate {\r\n  font-size: 1rem;\r\n  padding: 0.5rem;\r\n}\r\n\r\n/* Form styles */\r\nform {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  transition: all 300ms ease-in-out;\r\n  opacity: 1;\r\n}\r\n\r\nlabel {\r\n  margin: 0.5rem;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\ninput {\r\n  margin: 0.5rem 0.5rem 0.5rem 0;\r\n  padding: 0.5rem;\r\n  width: auto;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: start;\r\n}\r\n\r\nlabel[type=\"checkbox\"] {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n}\r\ninput[type=\"checkbox\"] {\r\n  height: 100%;\r\n  width: auto;\r\n  position: relative;\r\n}\r\n\r\n/*\r\n=====================================================\r\n\tDynamic Displays\r\n===================================================== */\r\n\r\n/*\r\n=====================================================\r\n\tCurrently Unused Styles\r\n===================================================== */\r\n/* The Modal (background) */\r\n.modal {\r\n  /* Hidden by default */\r\n  display: none;\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  border-radius: var(--radius);\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0, 0, 0); /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  color: black;\r\n  margin: 15% auto; /* 15% from the top and centered */\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  border-radius: var(--radius);\r\n  width: 80vw; /* Could be more or less, depending on screen size */\r\n  max-width: 666px;\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _renderPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderPage */ "./src/renderPage.js");



function appPage() {
  return (0,_renderPage__WEBPACK_IMPORTED_MODULE_1__.default)();
}

appPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxTQUFTLFVBQVUsTUFBTSxXQUFXLFVBQVUsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLGFBQWEsUUFBUSxRQUFRLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFFBQVEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVks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R0FBbUI7QUFDakIsU0FBT2xELG9EQUFVLEVBQWpCO0FBQ0Q7O0FBRURrRCxPQUFPLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtdG9kby1saXN0Ly4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RoZS10b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90aGUtdG9kby1saXN0Ly4vc3JjL3JlbmRlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vdGhlLXRvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RoZS10b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90aGUtdG9kby1saXN0Ly4vc3JjL3V0aWwuanMiLCJ3ZWJwYWNrOi8vdGhlLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGhlLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGhlLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3RoZS10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGhlLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aGUtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90aGUtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RoZS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGhlLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RoZS10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90aGUtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGhlLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aGUtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiwgZm9ybVRvT2JqZWN0LCB0b2dnbGVIaWRkZW4gfSBmcm9tICcuL3V0aWwnO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vdGFzayc7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4vcmVuZGVyUGFnZSc7XHJcbmltcG9ydCB7IGdldFByb2plY3QsIGdldFByb2plY3RzIH0gZnJvbSAnLi9zdG9yYWdlJztcclxuXHJcbmNvbnN0IGNyZWF0ZUZvcm1zID0gKCgpID0+IHtcclxuICBjb25zdCByZXNldEZvcm0gPSAoaWQpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5yZXNldCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1Db250YWluZXIgPSAoZmllbGRzLCBpZCwgY2FuY2VsLCBzdWJtaXQpID0+IHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcclxuICAgIC8vIFRPRE8gcmVtb3ZlIGFmdGVyIGRvbmUgdGVzdGluZ1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgZm9ybS5pZCA9IGlkO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiBmaWVsZHMpIHtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBjcmVhdGVCdXR0b24oJ3N1Ym1pdCcsICdzbScsICdzdWJtaXQnLCBzdWJtaXQpO1xyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdjYW5jZWwnLCAnc20nLCAnYnV0dG9uJywgY2FuY2VsKTtcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJvamVjdEZpZWxkcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZvcm1GaWVsZHMgPSBbXTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKTtcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUHJvamVjdCBOYW1lJyk7XHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XHJcbiAgICBmb3JtRmllbGRzLnB1c2godGl0bGUpO1xyXG5cclxuICAgIHJldHVybiBmb3JtRmllbGRzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRhc2tGaWVsZHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWVsZHMgPSBbXTtcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0aXRsZScsICdUYXNrIE5hbWUnKTtcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpO1xyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUYXNrIE5hbWUnKTtcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcclxuICAgIGZpZWxkcy5wdXNoKHRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0aXRsZScsICdUYXNrIERlc2NyaXB0aW9uJyk7XHJcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKTtcclxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKTtcclxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCBmYWxzZSk7XHJcbiAgICBmaWVsZHMucHVzaChkZXNjcmlwdGlvbik7XHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnRHVlIERhdGUnKTtcclxuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2R1ZURhdGUnKTtcclxuICAgIC8vIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdkdWVEYXRlJyk7XHJcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCBmYWxzZSk7XHJcbiAgICBmaWVsZHMucHVzaChkdWVEYXRlKTtcclxuXHJcbiAgICByZXR1cm4gZmllbGRzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVByb2plY3RGb3JtID0gKCkgPT4ge1xyXG4gICAgdG9nZ2xlSGlkZGVuKFsnbmV3UHJvamVjdEZvcm0nLCAnYWRkUHJvamVjdEJ1dHRvbiddKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBuZXdQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3VibWl0TmV3UHJvamVjdCA9IChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCB7IGZvcm0gfSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgY3JlYXRlUHJvamVjdChmb3JtVG9PYmplY3QoZm9ybSkpO1xyXG4gICAgICByZW5kZXIudXBkYXRlUHJvamVjdHNMaXN0KGdldFByb2plY3RzKCkpO1xyXG4gICAgICByZXNldEZvcm0oZm9ybS5pZCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSBmb3JtQ29udGFpbmVyKFxyXG4gICAgICBwcm9qZWN0RmllbGRzKCksXHJcbiAgICAgICduZXdQcm9qZWN0Rm9ybScsXHJcbiAgICAgIHRvZ2dsZVByb2plY3RGb3JtLFxyXG4gICAgICBzdWJtaXROZXdQcm9qZWN0XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG5ld1Byb2plY3RGb3JtO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVRhc2tGb3JtID0gKCkgPT4ge1xyXG4gICAgdG9nZ2xlSGlkZGVuKFsnbmV3VGFza0Zvcm0nLCAnYWRkVGFza0J1dHRvbiddKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBuZXdUYXNrID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3VibWl0TmV3VGFzayA9IChldmVudCkgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCB7IGZvcm0gfSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgY29uc3QgZm9ybU9iamVjdCA9IGZvcm1Ub09iamVjdChmb3JtKTtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBjb25zb2xlLmxvZygnVEhJUyBJUyBUSEUgUFJPSkVDVCBJRCAmIFRBU0sgRk9STScsIGlkLCBmb3JtKTtcclxuICAgICAgY3JlYXRlVGFzayhpZCwgZm9ybU9iamVjdCk7XHJcbiAgICAgIHJlbmRlci51cGRhdGVUYXNrc0xpc3QoZ2V0UHJvamVjdChpZCkudGFza3MpO1xyXG4gICAgICByZXNldEZvcm0oZm9ybS5pZCk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgbmV3VGFza0Zvcm0gPSBmb3JtQ29udGFpbmVyKFxyXG4gICAgICB0YXNrRmllbGRzKCksXHJcbiAgICAgICduZXdUYXNrRm9ybScsXHJcbiAgICAgIHRvZ2dsZVRhc2tGb3JtLFxyXG4gICAgICBzdWJtaXROZXdUYXNrXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIG5ld1Rhc2tGb3JtO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuZXdQcm9qZWN0LFxyXG4gICAgbmV3VGFzayxcclxuICAgIHRvZ2dsZVByb2plY3RGb3JtLFxyXG4gICAgdG9nZ2xlVGFza0Zvcm0sXHJcbiAgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvcm1zO1xyXG4iLCJpbXBvcnQgeyBnZXRJZCB9IGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCB7IGFkZFByb2plY3QsIGdldFByb2plY3RzLCByZW1vdmVQcm9qZWN0IH0gZnJvbSAnLi9zdG9yYWdlJztcclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSA9ICdOZXcgUHJvamVjdCcsIHRhc2tzID0gW10pIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICB9XHJcbn1cclxuXHJcbi8vIE9iamVjdCBmb3IgZGVmYXVsdCBwcm9qZWN0XHJcbmNvbnN0IGdldERlZmF1bHRQcm9qZWN0ID0gKCkgPT4ge1xyXG4gIC8vIExvYWQgZGVmYXVsdCBwcm9qZWN0IGZvciB0ZXN0aW5nIGFuZCBuZXcgdXNlcnNcclxuICBjb25zb2xlLmxvZygnTG9hZGluZyBkZWZhdWx0IHByb2plY3QnKTtcclxuICBjb25zdCBkZWZhdWx0UHJvamVjdHNMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICBpZDogMCxcclxuICAgICAgdGl0bGU6ICdEZWZhdWx0IFByb2plY3QnLFxyXG4gICAgICB0YXNrczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgdGl0bGU6ICdNeSBGaXJzdCBUYXNrJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgZmlyc3QgdGFzayBmb3IgdGhpcyBwcm9qZWN0JyxcclxuICAgICAgICAgIGR1ZURhdGU6ICcyMDIxLTA4LTE3JyxcclxuICAgICAgICAgIHByaW9yaXR5OiAxLFxyXG4gICAgICAgICAgY29tcGxldGU6IGZhbHNlLFxyXG4gICAgICAgICAgbm90ZXM6ICdUaGlzIGlzIGEgbm90ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgZGVmYXVsdFByb2plY3RzID0gW107XHJcblxyXG4gIC8vIENyZWF0ZSBmdW5jdGlvbiB0byBwb3B1bGF0ZSBkZWZhdWx0IHByb2plY3RzIGZvciB0ZXN0aW5nICYgbmV3IHVzZXJzXHJcbiAgZm9yIChjb25zdCBwcm9qZWN0IG9mIGRlZmF1bHRQcm9qZWN0c0xpc3QpIHtcclxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgIHByb2plY3QuaWQsXHJcbiAgICAgIHByb2plY3QudGl0bGUsXHJcbiAgICAgIHByb2plY3QudGFza3NcclxuICAgICk7XHJcbiAgICBkZWZhdWx0UHJvamVjdHMucHVzaChkZWZhdWx0UHJvamVjdCk7XHJcbiAgfVxyXG4gIHJldHVybiBkZWZhdWx0UHJvamVjdHM7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICAvLyBDcmVhdGUgYSBwcm9qZWN0IGhlcmUsIGFkZCB0byBzdG9yYWdlXHJcbiAgY29uc3QgbmV3UHJvamVjdHNMaXN0ID0gZ2V0UHJvamVjdHMoKTtcclxuICBjb25zdCBpZCA9IGdldElkKG5ld1Byb2plY3RzTGlzdCk7XHJcbiAgY29uc3QgcHJvamVjdE9iamVjdCA9IG5ldyBQcm9qZWN0KGlkLCBwcm9qZWN0LnRpdGxlKTtcclxuICBhZGRQcm9qZWN0KHByb2plY3RPYmplY3QpO1xyXG4gIHJldHVybiBuZXdQcm9qZWN0c0xpc3Q7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgeyBpZCB9ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgY29uc3Qgc2hvdWxkRGVsZXRlID0gd2luZG93LmNvbmZpcm0oXHJcbiAgICAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHByb2plY3Q/J1xyXG4gICk7XHJcbiAgbGV0IG5ld1Byb2plY3RzTGlzdCA9IGdldFByb2plY3RzKCk7XHJcblxyXG4gIGlmIChzaG91bGREZWxldGUpIHtcclxuICAgIC8vIEdvIGFoZWFkIGFuZCBkZWxldGUgaXRcclxuICAgIG5ld1Byb2plY3RzTGlzdCA9IHJlbW92ZVByb2plY3QoaWQpO1xyXG4gICAgcmV0dXJuIG5ld1Byb2plY3RzTGlzdDtcclxuICB9XHJcbiAgcmV0dXJuIG5ld1Byb2plY3RzTGlzdDtcclxufTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QsIGRlbGV0ZVByb2plY3QsIFByb2plY3QsIGdldERlZmF1bHRQcm9qZWN0IH07XHJcbiIsImltcG9ydCB7IGRlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcclxuaW1wb3J0IHsgYWRkIH0gZnJvbSAnZGF0ZS1mbnMvZXNtJztcclxuaW1wb3J0IHsgZ2V0UHJvamVjdHMsIGdldFByb2plY3QsIGFkZFByb2plY3QsIGFkZFRhc2sgfSBmcm9tICcuL3N0b3JhZ2UnO1xyXG5pbXBvcnQgY3JlYXRlRm9ybXMgZnJvbSAnLi9mb3Jtcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xyXG5pbXBvcnQgeyBkZWxldGVUYXNrLCB0b2dnbGVUYXNrQ29tcGxldGUgfSBmcm9tICcuL3Rhc2snO1xyXG5cclxuLy8gIENyZWF0ZSBidXR0b24gZnVuY3Rpb24gd2l0aCBvcHRpb24gZm9yIGxhcmdlIGFuZCBzbWFsbCBidXR0b25zXHJcbi8vIENyZWF0ZSBkaWZmZXJlbnQgdWkgZnVuY3Rpb24gY29tcG9uZW50c1xyXG5cclxuLy8gKiBSZW5kZXIgdGhlIHByb2plY3RzIGFuZCB0YXNrIGNvbXBvbmVudHNcclxuY29uc3QgcmVuZGVyID0gKCgpID0+IHtcclxuICAvLyBjb25zdCBwcm9qZWN0c0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAvLyBjb25zdCB0YXNrc0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAvLyBjb25zdCBjdXJyZW50UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gKHByb2plY3QpID0+IHtcclxuICAgIC8vIENyZWF0ZSBpbmRpdmlkdWFsIHByb2plY3QgY29udGFpbmVyXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcbiAgICBjb250YWluZXIuaWQgPSBwcm9qZWN0LmlkO1xyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdYJywgJ3NtJywgJ2J1dHRvbicpO1xyXG4gICAgZGVsZXRlQnV0dG9uLnRpdGxlID0gJ0RlbGV0ZSBwcm9qZWN0JztcclxuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdG4nKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IG5ld1Byb2plY3RMaXN0ID0gZGVsZXRlUHJvamVjdChldmVudCk7XHJcbiAgICAgIHJlbmRlci51cGRhdGVQcm9qZWN0c0xpc3QobmV3UHJvamVjdExpc3QpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBjcmVhdGVCdXR0b24ocHJvamVjdC50aXRsZSk7XHJcbiAgICBwcm9qZWN0QnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgeyBpZCB9ID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIGNoYW5nZUN1cnJlbnRQcm9qZWN0KGlkKTtcclxuICAgIH07XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH07XHJcbiAgY29uc3QgcHJvamVjdHNMYXlvdXQgPSAocGFyZW50KSA9PiB7XHJcbiAgICAvLyBDcmVhdGUgdGhlIHByb2plY3RzIGxpc3QgY29udGFpbmVyIGxheW91dFxyXG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzQ29udGFpbmVyJyk7XHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5pZCA9ICdwcm9qZWN0c0NvbnRhaW5lcic7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBwcm9qZWN0c1RpdGxlLmlubmVySFRNTCA9ICdQcm9qZWN0cyc7XHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0c0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RzTGlzdENvbnRhaW5lci5pZCA9ICdwcm9qZWN0c0xpc3RDb250YWluZXInO1xyXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0Q29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAnKycsXHJcbiAgICAgICdsZycsXHJcbiAgICAgICdidXR0b24nLFxyXG4gICAgICBjcmVhdGVGb3Jtcy50b2dnbGVQcm9qZWN0Rm9ybSxcclxuICAgICAgJ2FkZFByb2plY3RCdXR0b24nXHJcbiAgICApO1xyXG4gICAgYWRkUHJvamVjdEJ1dHRvbi50aXRsZSA9ICdBZGQgcHJvamVjdCc7XHJcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZEJ0bicpO1xyXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XHJcblxyXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybXMubmV3UHJvamVjdCgpKTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XHJcbiAgfTtcclxuICBjb25zdCBwcm9qZWN0c0xpc3QgPSAocHJvamVjdHMpID0+IHtcclxuICAgIC8vIFBvcHVsYXRlIHRoZSBwcm9qZWN0cyBsaXN0XHJcbiAgICBjb25zdCBwcm9qZWN0c0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgJ3Byb2plY3RzTGlzdENvbnRhaW5lcidcclxuICAgICk7XHJcbiAgICBwcm9qZWN0cz8uZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBwcm9qZWN0c0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcihwcm9qZWN0KSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGRlbGV0ZVByb2plY3RzTGlzdCA9ICgpID0+IHtcclxuICAgIC8vICBEZWxldGUgcHJvamVjdHMgbGlzdCBmcm9tIGRvbVxyXG4gICAgY29uc3QgcHJvamVjdHNMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICdwcm9qZWN0c0xpc3RDb250YWluZXInXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coJ0NsZWFuaW5nIHVwIG9sZCBwcm9qZWN0cy4uLicpO1xyXG4gICAgY29uc3Qgb2xkTGlzdCA9IHByb2plY3RzTGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcclxuICAgIG9sZExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBwcm9qZWN0LnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnQnllIGJ5ZSBvbGQgcHJvamVjdHMuLi4nKTtcclxuICB9O1xyXG4gIGNvbnN0IHVwZGF0ZVByb2plY3RzTGlzdCA9IChhcnJheSkgPT4ge1xyXG4gICAgLy8gVXBkYXRlIHRoZSBwcm9qZWN0cyBsaXN0IGJ5IGRlbGV0aW5nIGFuZCB0aGVuIHJlcG9wdWxhdGluZ1xyXG4gICAgZGVsZXRlUHJvamVjdHNMaXN0KCk7XHJcbiAgICBwcm9qZWN0c0xpc3QoYXJyYXkpO1xyXG4gIH07XHJcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9ICh0YXNrKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICBjb250YWluZXIuaWQgPSB0YXNrLmlkO1xyXG5cclxuICAgIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICB0YXNrLmNvbXBsZXRlID8gJ+KckycgOiAnJyxcclxuICAgICAgJ3NtJyxcclxuICAgICAgJ2J1dHRvbidcclxuICAgICk7XHJcbiAgICBjb21wbGV0ZUJ1dHRvbi50aXRsZSA9IGBUb2dnbGUgJHt0YXNrLnRpdGxlfSBDb21wbGV0ZWA7XHJcbiAgICBjb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0YXNrQ29tcGxldGUnKTtcclxuICAgIGNvbXBsZXRlQnV0dG9uLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgY29uc3QgbmV3VGFza0xpc3QgPSB0b2dnbGVUYXNrQ29tcGxldGUoZXZlbnQpO1xyXG4gICAgICByZW5kZXIudXBkYXRlVGFza3NMaXN0KG5ld1Rhc2tMaXN0KTtcclxuICAgIH07XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZS50aXRsZSA9IHRhc2sudGl0bGU7XHJcbiAgICB0aXRsZS5pbm5lclRleHQgPSB0YXNrLnRpdGxlO1xyXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza1RpdGxlJyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXNjcmlwdGlvbi50aXRsZSA9IGAke3Rhc2sudGl0bGV9IERlc2NyaXB0aW9uYDtcclxuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrRGVzY3JpcHRpb24nKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcblxyXG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZHVlRGF0ZS50aXRsZSA9IGAke3Rhc2sudGl0bGV9IER1ZSBEYXRlYDtcclxuICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlO1xyXG4gICAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrRHVlRGF0ZScpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignWCcsICdzbScsICdidXR0b24nKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi50aXRsZSA9IGBEZWxldGUgJHt0YXNrLnRpdGxlfWA7XHJcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlQnRuJyk7XHJcbiAgICBkZWxldGVCdXR0b24ub25jbGljayA9IChldmVudCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdUYXNrTGlzdCA9IGRlbGV0ZVRhc2soZXZlbnQpO1xyXG4gICAgICByZW5kZXIudXBkYXRlVGFza3NMaXN0KG5ld1Rhc2tMaXN0KTtcclxuICAgIH07XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICAgIHJldHVybiBjb250YWluZXI7XHJcbiAgfTtcclxuICBjb25zdCB0YXNrc0xheW91dCA9IChwYXJlbnQpID0+IHtcclxuICAgIC8vIERvIHNvbWUgc3R1ZmZcclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjdXJyZW50UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50UHJvamVjdCcpO1xyXG4gICAgY3VycmVudFByb2plY3QudGl0bGUgPSAnQ3VycmVudCBQcm9qZWN0JztcclxuXHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjdXJyZW50UHJvamVjdFRpdGxlLmlubmVySFRNTCA9ICdDdXJyZW50IFByb2plY3QnO1xyXG4gICAgY3VycmVudFByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkID0gJ3RpdGxlJztcclxuICAgIGN1cnJlbnRQcm9qZWN0VGl0bGUuaWQgPSAnY3VycmVudFByb2plY3RUaXRsZSc7XHJcbiAgICBjdXJyZW50UHJvamVjdC5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdFRpdGxlKTtcclxuXHJcbiAgICBjb25zdCB0YXNrc0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRhc2tzTGlzdENvbnRhaW5lci5pZCA9ICd0YXNrc0xpc3RDb250YWluZXInO1xyXG4gICAgY3VycmVudFByb2plY3QuYXBwZW5kQ2hpbGQodGFza3NMaXN0Q29udGFpbmVyKTtcclxuXHJcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gY3JlYXRlQnV0dG9uKFxyXG4gICAgICAnKycsXHJcbiAgICAgICdsZycsXHJcbiAgICAgICdidXR0b24nLFxyXG4gICAgICBjcmVhdGVGb3Jtcy50b2dnbGVUYXNrRm9ybSxcclxuICAgICAgJ2FkZFRhc2tCdXR0b24nXHJcbiAgICApO1xyXG4gICAgYWRkVGFza0J1dHRvbi50aXRsZSA9ICdBZGQgVGFzayc7XHJcbiAgICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZEJ0bicpO1xyXG4gICAgY3VycmVudFByb2plY3QuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XHJcblxyXG4gICAgLy8gVE9ETyBQdXQgaW4gdGFza3MgZm9ybVxyXG4gICAgY3VycmVudFByb2plY3QuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybXMubmV3VGFzaygpKTtcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdCk7XHJcbiAgfTtcclxuICBjb25zdCB0YXNrc0xpc3QgPSAodGFza3MpID0+IHtcclxuICAgIGNvbnN0IHRhc2tzTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrc0xpc3RDb250YWluZXInKTtcclxuICAgIHRhc2tzPy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIHRhc2tzTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKHRhc2spKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgZGVsZXRlVGFza3NMaXN0ID0gKCkgPT4ge1xyXG4gICAgLy8gIERlbGV0ZSB0YXNrcyBsaXN0IGZyb20gZG9tXHJcbiAgICBjb25zdCB0YXNrc0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3NMaXN0Q29udGFpbmVyJyk7XHJcbiAgICBjb25zb2xlLmxvZygnQ2xlYW5pbmcgdXAgb2xkIHRhc2tzLi4uJyk7XHJcbiAgICBjb25zdCBvbGRMaXN0ID0gdGFza3NMaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xyXG4gICAgb2xkTGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgIHRhc2sucmVtb3ZlKCk7XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKCdCeWUgYnllIG9sZCB0YXNrcy4uLicpO1xyXG4gIH07XHJcbiAgY29uc3QgdXBkYXRlVGFza3NMaXN0ID0gKGFycmF5KSA9PiB7XHJcbiAgICAvLyBVcGRhdGUgdGhlIHRhc2tzIGxpc3QgYnkgZGVsZXRpbmcgYW5kIHRoZW4gcmVwb3B1bGF0aW5nXHJcbiAgICBkZWxldGVUYXNrc0xpc3QoKTtcclxuICAgIHRhc2tzTGlzdChhcnJheSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlQ3VycmVudFByb2plY3QgPSAoaWQpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0UHJvamVjdChpZCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFByb2plY3RDb250YWluZXIgPVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VycmVudFByb2plY3QnKTtcclxuICAgIGN1cnJlbnRQcm9qZWN0Q29udGFpbmVyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgZWxlbWVudC5pZCA9IGlkO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50UHJvamVjdFRpdGxlJyk7XHJcbiAgICBjdXJyZW50UHJvamVjdFRpdGxlLmlubmVySFRNTCA9IGN1cnJlbnRQcm9qZWN0LnRpdGxlO1xyXG4gICAgdXBkYXRlVGFza3NMaXN0KGN1cnJlbnRQcm9qZWN0LnRhc2tzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvamVjdHNMYXlvdXQsXHJcbiAgICB0YXNrc0xheW91dCxcclxuICAgIHByb2plY3RzTGlzdCxcclxuICAgIHVwZGF0ZVByb2plY3RzTGlzdCxcclxuICAgIHVwZGF0ZVRhc2tzTGlzdCxcclxuICAgIGNoYW5nZUN1cnJlbnRQcm9qZWN0LFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG4vLyAqIFJlbmRlciB0aGUgbWFpbiBwYWdlIGNvbXBvbmVudFxyXG5mdW5jdGlvbiByZW5kZXJQYWdlKCkge1xyXG4gIC8vIE1haW4gY29udGFpbmVyIGVsZW1lbnRzXHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xyXG4gIHJlbmRlci5wcm9qZWN0c0xheW91dChtYWluKTtcclxuICByZW5kZXIudGFza3NMYXlvdXQobWFpbik7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbiAgLy8gUG9wdWxhdGUgbWFpbiBjb250YWluZXIgZWxlbWVudHNcclxuICByZW5kZXIudXBkYXRlUHJvamVjdHNMaXN0KGdldFByb2plY3RzKCkpO1xyXG4gIHJlbmRlci5jaGFuZ2VDdXJyZW50UHJvamVjdChnZXRQcm9qZWN0cygpWzBdLmlkKTtcclxuICByZXR1cm4gbWFpbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUGFnZTtcclxuXHJcbmV4cG9ydCB7IHJlbmRlciB9O1xyXG4iLCJpbXBvcnQgeyBnZXREZWZhdWx0UHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XHJcblxyXG4vLyAgVE9ETyBDcmVhdGUgZnVuY3Rpb24gdGhhdCBkZWNpZGVzIHdoZXRoZXIgdG8gc2F2ZSB0byBsb2NhbCBzdG9yYWdlXHJcblxyXG4vLyBUT0RPIENyZWF0ZSBmdW5jdGlvbiB0aGF0IHNhdmVzIHByb2plY3QgaW5mbyBhbmQgcmV0dXJucyBuZXcgbXlQcm9qZWN0cyBhcnJheVxyXG5cclxuLy8gTG9vayBmb3IgcHJvamVjdHMgaW4gbG9jYWwgc3RvcmFnZVxyXG4vLyBDcmVhdGUgZGVmYXVsdCBwcm9qZWN0IGlmIG5vbmUgZXhpc3QgaW4gbG9jYWwgc3RvcmFnZVxyXG4vLyAgKiBGdW5jdGlvbiB0aGF0IHVwZGF0ZXMgbXlQcm9qZWN0cyBhcnJheVxyXG5jb25zdCB1cGRhdGVNeVByb2plY3RzID0gKG9iamVjdCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdTdG9yYWdlIHVwYXRlZC4uLicpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRJbmRleEZyb21JZCA9IChpZCwgYXJyYXkpID0+IHtcclxuICAvLyBUT0RPIENyZWF0ZSBmdW5jdGlvbiB0aGF0IGZpbmRzIGluZGV4IGZyb20gaWRcclxuICBjb25zdCBpbmRleCA9IGFycmF5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKTtcclxuICByZXR1cm4gaW5kZXg7XHJcbn07XHJcblxyXG4vLyAqIFByb2plY3QgQ1JVRCBmdW5jdGlvbnNcclxuY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBbXTtcclxuICBjb25zdCBsb2NhbFN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215UHJvamVjdHMnKTtcclxuICAvLyBUT0RPIFJlbW92ZSBvbmNlIGZpbmlzaGVkIHRlc3RpbmdcclxuXHJcbiAgLy8gY2hlY2sgbG9jYWwgc3RvcmFnZSBmb3IgcHJvamVjdHNcclxuICAvLyBJZiBubyBwcm9qZWN0cyBleGlzdCB1c2UgZGVmYXVsdCBwcm9qZWN0XHJcbiAgaWYgKCFsb2NhbFN0b3JlZFByb2plY3RzKSB7XHJcbiAgICBwcm9qZWN0cy5wdXNoKC4uLmdldERlZmF1bHRQcm9qZWN0KCkpO1xyXG4gICAgdXBkYXRlTXlQcm9qZWN0cyhwcm9qZWN0cyk7XHJcbiAgICBjb25zb2xlLmxvZygnTm8gcHJvamVjdHMgaW4gbG9jYWwgc3RvcmFnZSwgdXNpbmcgZGVmYXVsdCBwcm9qZWN0Jyk7XHJcbiAgfVxyXG4gIC8vIElmIG15UHJvamVjdHMgZXhpc3RzLCBpZiB0aGV5IGRvIHJldHVybiBteVByb2plY3RzIHByb2plY3RzIGV4aXN0c1xyXG4gIGlmIChsb2NhbFN0b3JlZFByb2plY3RzKSB7XHJcbiAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yZWRQcm9qZWN0cyk7XHJcbiAgICBwcm9qZWN0cy5wdXNoKC4uLnN0b3JlZFByb2plY3RzKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coJ1BST0pFQ1RTIExPQURFRC4uLicsIHByb2plY3RzKTtcclxuICByZXR1cm4gcHJvamVjdHM7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQcm9qZWN0ID0gKGlkKSA9PlxyXG4gIGdldFByb2plY3RzKCkuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcGFyc2VJbnQoaWQpKTtcclxuXHJcbmNvbnN0IGFkZFByb2plY3QgPSAob2JqZWN0KSA9PiB7XHJcbiAgLy8gICBBZGQgcHJvamVjdHMgdG8gc3RvcmFnZVxyXG4gIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHMoKTtcclxuICBwcm9qZWN0cy5wdXNoKG9iamVjdCk7XHJcbiAgY29uc29sZS5sb2coJ1N0b3JhZ2UgdXBhdGVkLi4uJyk7XHJcbiAgdXBkYXRlTXlQcm9qZWN0cyhwcm9qZWN0cyk7XHJcbiAgcmV0dXJuIGdldFByb2plY3RzKCk7XHJcbn07XHJcblxyXG4vLyBEZWxldGUgYSBwcm9qZWN0IGZyb20gcHJvamVjdHMgYXJyYXlcclxuY29uc3QgcmVtb3ZlUHJvamVjdCA9IChpZCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHMoKTtcclxuICBjb25zdCBpbmRleCA9IGdldEluZGV4RnJvbUlkKGlkLCBwcm9qZWN0cyk7XHJcbiAgY29uc29sZS5sb2coJ0RlbGV0ZSBwcm9qZWN0IGluIGluZGV4OicsIGluZGV4KTtcclxuICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIHVwZGF0ZU15UHJvamVjdHMocHJvamVjdHMpO1xyXG4gIHJldHVybiBnZXRQcm9qZWN0cygpO1xyXG59O1xyXG5cclxuLy8gKiBUYXNrIENSVUQgZnVuY3Rpb25zXHJcblxyXG5jb25zdCBnZXRUYXNrcyA9IChwcm9qZWN0SWQpID0+IGdldFByb2plY3QocHJvamVjdElkKS50YXNrcztcclxuXHJcbmNvbnN0IGdldFRhc2sgPSAocHJvamVjdElkLCB0YXNrSWQpID0+XHJcbiAgZ2V0VGFza3MocHJvamVjdElkKS5maW5kKFxyXG4gICAgKFByb2plY3RUYXNrKSA9PiBQcm9qZWN0VGFzay5pZCA9PT0gcGFyc2VJbnQodGFza0lkKVxyXG4gICk7XHJcblxyXG5jb25zdCBhZGRUYXNrID0gKHByb2plY3RJZCwgb2JqZWN0KSA9PiB7XHJcbiAgLy8gICBBZGQgdGFza3MgdG8gc3RvcmFnZVxyXG4gIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHMoKTtcclxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXHJcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcGFyc2VJbnQocHJvamVjdElkKVxyXG4gICk7XHJcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5wdXNoKG9iamVjdCk7XHJcbiAgY29uc29sZS5sb2coJ1VwZGF0ZWQgUHJvamVjdHMnLCBwcm9qZWN0cyk7XHJcbiAgdXBkYXRlTXlQcm9qZWN0cyhwcm9qZWN0cyk7XHJcbiAgY29uc29sZS5sb2coJ1N0b3JhZ2UgdXBhdGVkLi4uJyk7XHJcbiAgcmV0dXJuIGdldFRhc2tzKHByb2plY3RJZCk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVUYXNrID0gKHByb2plY3RJZCwgdXBkYXRlZFRhc2spID0+IHtcclxuICBjb25zdCBwcm9qZWN0cyA9IGdldFByb2plY3RzKCk7XHJcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgaWYgKHByb2plY3QuaWQgPT09IHBhcnNlSW50KHByb2plY3RJZCkpIHtcclxuICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgaWYgKHRhc2suaWQgPT09IHBhcnNlSW50KHVwZGF0ZWRUYXNrLmlkKSkge1xyXG4gICAgICAgICAgdGFzay50aXRsZSA9IHVwZGF0ZWRUYXNrLnRpdGxlO1xyXG4gICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IHVwZGF0ZWRUYXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgdGFzay5kdWVEYXRlID0gdXBkYXRlZFRhc2suZHVlRGF0ZTtcclxuICAgICAgICAgIHRhc2suY29tcGxldGUgPSB1cGRhdGVkVGFzay5jb21wbGV0ZTtcclxuICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSB1cGRhdGVkVGFzay5wcmlvcml0eTtcclxuICAgICAgICAgIHRhc2subm90ZXMgPSB1cGRhdGVkVGFzay5ub3RlcztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHVwZGF0ZU15UHJvamVjdHMocHJvamVjdHMpO1xyXG4gIHJldHVybiBnZXRUYXNrcyhwcm9qZWN0SWQpO1xyXG59O1xyXG5cclxuY29uc3QgcmVtb3ZlVGFzayA9IChwcm9qZWN0SWQsIHRhc2tJZCkgPT4ge1xyXG4gIC8vIGRlbGV0ZSB0YXNrIGZyb20gcHJvamVjdFxyXG4gIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHMoKTtcclxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBnZXRJbmRleEZyb21JZChwcm9qZWN0SWQsIHByb2plY3RzKTtcclxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdEluZGV4XTtcclxuICBjb25zdCB7IHRhc2tzIH0gPSBwcm9qZWN0O1xyXG4gIGNvbnN0IHRhc2tJbmRleCA9IGdldEluZGV4RnJvbUlkKHRhc2tJZCwgdGFza3MpO1xyXG4gIHRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xyXG4gIHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEsIHByb2plY3QpO1xyXG4gIHVwZGF0ZU15UHJvamVjdHMocHJvamVjdHMpO1xyXG4gIGNvbnNvbGUubG9nKCdQcm9qZWN0cyEhISEnLCBnZXRQcm9qZWN0cygpKTtcclxuICByZXR1cm4gZ2V0VGFza3MocHJvamVjdElkKTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0UHJvamVjdHMsXHJcbiAgZ2V0UHJvamVjdCxcclxuICBhZGRQcm9qZWN0LFxyXG4gIHJlbW92ZVByb2plY3QsXHJcbiAgZ2V0VGFza3MsXHJcbiAgZ2V0VGFzayxcclxuICBhZGRUYXNrLFxyXG4gIHJlbW92ZVRhc2ssXHJcbiAgdXBkYXRlVGFzayxcclxufTtcclxuIiwiaW1wb3J0IHsgZ2V0SWQgfSBmcm9tICcuL3V0aWwnO1xyXG5pbXBvcnQge1xyXG4gIGdldFByb2plY3QsXHJcbiAgYWRkVGFzayxcclxuICByZW1vdmVUYXNrLFxyXG4gIGdldFRhc2tzLFxyXG4gIGdldFRhc2ssXHJcbiAgdXBkYXRlVGFzayxcclxufSBmcm9tICcuL3N0b3JhZ2UnO1xyXG4vLyBNYWtlIGZ1bmN0aW9ucyB3aXRoIGFiaWxpdHkgdG8gY3JlYXRlIGFuZCBkZWxldGUgdG9kb3MgaW4gYSBwcm9qZWN0XHJcblxyXG5jbGFzcyBUYXNrIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGlkLFxyXG4gICAgdGl0bGUgPSAnTmV3IFRhc2snLFxyXG4gICAgZGVzY3JpcHRpb24gPSAnVGhpcyBpcyBhIG5ldyB0YXNrJyxcclxuICAgIGR1ZURhdGUgPSAyLFxyXG4gICAgcHJpb3JpdHkgPSAxLFxyXG4gICAgY29tcGxldGUgPSBmYWxzZSxcclxuICAgIG5vdGVzID0gJydcclxuICApIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XHJcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVUYXNrID0gKHByb2plY3RJZCwgdGFzaykgPT4ge1xyXG4gIC8vIENyZWF0ZSBhIHByb2plY3QgaGVyZSwgYWRkIHRvIHN0b3JhZ2VcclxuICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xyXG4gIGNvbnNvbGUubG9nKCdQUk9KRUNUIEZPUiBUSElTIFRBU0snLCBwcm9qZWN0KTtcclxuICBjb25zdCBpZCA9IGdldElkKHByb2plY3QudGFza3MpO1xyXG4gIGNvbnN0IHRhc2tPYmplY3QgPSBuZXcgVGFzayhpZCwgdGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kdWVEYXRlKTtcclxuICBjb25zb2xlLmxvZygnU2VuZGluZyB0YXNrIHRvIHN0b3JhZ2UnLCB0YXNrT2JqZWN0KTtcclxuICBjb25zdCBuZXdUYXNrTGlzdCA9IGFkZFRhc2socHJvamVjdElkLCB0YXNrT2JqZWN0KTtcclxuICByZXR1cm4gbmV3VGFza0xpc3Q7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVUYXNrID0gKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgeyBpZDogdGFza0lkIH0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICBjb25zdCB7IGlkOiBwcm9qZWN0SWQgfSA9XHJcbiAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgY29uc3Qgc2hvdWxkRGVsZXRlID0gd2luZG93LmNvbmZpcm0oXHJcbiAgICAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHByb2plY3Q/J1xyXG4gICk7XHJcbiAgbGV0IG5ld1Rhc2tMaXN0ID0gZ2V0VGFza3MocHJvamVjdElkKTtcclxuXHJcbiAgaWYgKHNob3VsZERlbGV0ZSkge1xyXG4gICAgLy8gR28gYWhlYWQgYW5kIGRlbGV0ZSBpdFxyXG4gICAgbmV3VGFza0xpc3QgPSByZW1vdmVUYXNrKHByb2plY3RJZCwgdGFza0lkKTtcclxuICAgIHJldHVybiBuZXdUYXNrTGlzdDtcclxuICB9XHJcbiAgcmV0dXJuIG5ld1Rhc2tMaXN0O1xyXG59O1xyXG5cclxuY29uc3QgdG9nZ2xlVGFza0NvbXBsZXRlID0gKGV2ZW50KSA9PiB7XHJcbiAgLy8gVG9nZ2xlIHRhc2sgY29tcGxldGUgc3RhdHVzXHJcbiAgY29uc3QgeyBpZDogdGFza0lkIH0gPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICBjb25zdCB7IGlkOiBwcm9qZWN0SWQgfSA9XHJcbiAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgY29uc3QgdGFzayA9IGdldFRhc2socHJvamVjdElkLCB0YXNrSWQpO1xyXG4gIHRhc2suY29tcGxldGUgPSAhdGFzay5jb21wbGV0ZTtcclxuICBjb25zdCBuZXdUYXNrTGlzdCA9IHVwZGF0ZVRhc2socHJvamVjdElkLCB0YXNrKTtcclxuXHJcbiAgcmV0dXJuIG5ld1Rhc2tMaXN0O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgVGFzaywgY3JlYXRlVGFzaywgZGVsZXRlVGFzaywgdG9nZ2xlVGFza0NvbXBsZXRlIH07XHJcbiIsIi8vICogU2lsbHkgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcmVtb3ZlZFxyXG5jb25zdCBwcmludE1lID0gKGV2ZW50KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ1RoaXMgaXMgdGhlIGRlZmF1bHQgcHJpbnRNZSgpIG9uQ2xpY2sgZnVuY3Rpb24hJywgZXZlbnQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0SWQoYXJyYXkpIHtcclxuICAvLyBDcmVhdGUgZnVuY3Rpb24gdGhhdCBjaGVja3MgaWYgaWQgZXhpc3RzIGFuZCBhc3NpZ25zIG5leHQgYXZhaWxhYmUgdmFsdWVcclxuICBjb25zdCBhcnIgPSBhcnJheTtcclxuICBjb25zb2xlLmxvZygnU2VhcmNoaW5nJywgYXJyLCAnZm9yIGlkJyk7XHJcbiAgbGV0IGlkID0gMDtcclxuICB3aGlsZSAoYXJyLnNvbWUoKGUpID0+IGUuaWQgPT09IGlkKSkge1xyXG4gICAgaWQgKz0gMTtcclxuICB9XHJcbiAgcmV0dXJuIGlkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtVG9PYmplY3QoZm9ybSkge1xyXG4gIGNvbnN0IG5ld09iamVjdCA9IHt9O1xyXG4gIGZvciAoY29uc3QgZWFjaElucHV0IG9mIGZvcm0pIHtcclxuICAgIGxldCB7IG5hbWUsIHZhbHVlLCB0eXBlIH0gPSBlYWNoSW5wdXQ7XHJcbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICB2YWx1ZSA9IGVhY2hJbnB1dC5jaGVja2VkO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZSAhPT0gJ3N1Ym1pdCcgJiYgdHlwZSAhPT0gJ2ZpZWxkc2V0Jykge1xyXG4gICAgICBuZXdPYmplY3RbbmFtZV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG5ld09iamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlSGlkZGVuKGlkcykge1xyXG4gIC8vIGlmIChpZHMubGVuZ3RoIDwgMSkge1xyXG4gIC8vICAgcmV0dXJuO1xyXG4gIC8vIH1cclxuICBjb25zb2xlLmxvZygndG9nZ2xlSGlkZGVuIGlkcycsIGlkcyk7XHJcbiAgZm9yIChjb25zdCBpZCBvZiBpZHMpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQsIHNpemUsIHR5cGUsIG9uQ2xpY2ssIGlkKSB7XHJcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgY29uc3QgYnV0dG9uVGV4dCA9IHRleHQgfHwgJyc7XHJcbiAgYnRuLmlubmVySFRNTCA9IGJ1dHRvblRleHQ7XHJcbiAgYnRuLm9uY2xpY2sgPSBvbkNsaWNrIHx8IHByaW50TWU7XHJcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xyXG4gIGJ0bi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgYnV0dG9uVGV4dCk7XHJcbiAgaWYgKGlkKSB7XHJcbiAgICBidG4uaWQgPSBpZDtcclxuICB9XHJcbiAgaWYgKHR5cGUgPT09ICdzdWJtaXQnKSB7XHJcbiAgICBidG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gIH1cclxuICBpZiAoIXR5cGUgfHwgdHlwZSA9PT0gJ2J1dHRvbicpIHtcclxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgfVxyXG4gIGlmIChzaXplID09PSAnc20nKSB7XHJcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuLXNtJyk7XHJcbiAgfVxyXG4gIHJldHVybiBidG47XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldElkLCBmb3JtVG9PYmplY3QsIHRvZ2dsZUhpZGRlbiwgY3JlYXRlQnV0dG9uIH07XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcInV0Zi04XFxcIjtcXHJcXG4vKlxcclxcblxcdEF1dGhvclxcdFxcdENyeXN0YWxDb21tZXJjZS5jb20gLy8gUm9zcyBEYWxsYWlyZVxcclxcblxcclxcblxcdENvbG9yc1xcclxcbiovXFxyXFxuXFxyXFxuLyogUkVTRVQgKi9cXHJcXG5odG1sLFxcclxcbmJvZHksXFxyXFxuZGl2LFxcclxcbnNwYW4sXFxyXFxub2JqZWN0LFxcclxcbmlmcmFtZSxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNixcXHJcXG5wLFxcclxcbmJsb2NrcXVvdGUsXFxyXFxucHJlLFxcclxcbmEsXFxyXFxuYWJicixcXHJcXG5hY3JvbnltLFxcclxcbmFkZHJlc3MsXFxyXFxuY29kZSxcXHJcXG5kZWwsXFxyXFxuZGZuLFxcclxcbmVtLFxcclxcbmltZyxcXHJcXG5xLFxcclxcbmRsLFxcclxcbmR0LFxcclxcbmRkLFxcclxcbm9sLFxcclxcbnVsLFxcclxcbmxpLFxcclxcbmZpZWxkc2V0LFxcclxcbmZvcm0sXFxyXFxubGFiZWwsXFxyXFxubGVnZW5kLFxcclxcbnRhYmxlLFxcclxcbmNhcHRpb24sXFxyXFxudGJvZHksXFxyXFxudGZvb3QsXFxyXFxudGhlYWQsXFxyXFxudHIsXFxyXFxudGgsXFxyXFxudGQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5lbSB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi8qIC9FTkQgUkVTRVQgKi9cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxyXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbixcXHJcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xcclxcbiAgbWFyZ2luOiAwIDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcclxcbiAgbWFyZ2luOiAwIDAgMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42MjY3MXJlbTtcXHJcXG4gIG1hcmdpbjogMCAwIDEycHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBmb250LXNpemU6IDEuMzgzMTZyZW07XFxyXFxuICBtYXJnaW46IDAgMCAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgbWFyZ2luOiA1cHggMCA1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuaDEgYSxcXHJcXG5oMiBhLFxcclxcbmgzIGEsXFxyXFxuaDQgYSxcXHJcXG5oNSBhLFxcclxcbmg2IGEge1xcclxcbn1cXHJcXG5cXHJcXG5hIGltZyB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiAjMzYzNjM2O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLyogcmVtb3ZlIGRvdHRlZCBsaW5lcyBvbiBzb21lIGxpbmtzIGluIEZGIGJyb3dzZXIgKi9cXHJcXG5cXHJcXG5hLFxcclxcbmE6YWN0aXZlLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hIGltZyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvICovXFxyXFxuXFxyXFxuLyogQ0xFQVJGSVggKi9cXHJcXG4uY2xlYXJmaXg6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIi5cXFwiO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXJmaXgge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW3htbG5zXSAuY2xlYXJmaXgge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiogaHRtbCAuY2xlYXJmaXgge1xcclxcbiAgaGVpZ2h0OiAxJTtcXHJcXG59XFxyXFxuLyogL0VORCBDTEVBUkZJWCAqL1xcclxcblxcclxcbi8qXFxyXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHRMYXlvdXQgJiBGcmFtZXdvcmtcXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tY29sb3ItNTA6ICNmMmYyZjI7XFxyXFxuICAtLWNvbG9yLTEwMDogI2Q5ZDlkOTtcXHJcXG4gIC0tY29sb3ItMjAwOiAjYmZiZmJmO1xcclxcbiAgLS1jb2xvci0zMDA6ICNhNmE2YTY7XFxyXFxuICAtLWNvbG9yLTQwMDogIzhjOGM4YztcXHJcXG4gIC0tY29sb3ItNTAwOiAjNzM3MzczO1xcclxcbiAgLS1jb2xvci02MDA6ICM1OTU5NTk7XFxyXFxuICAtLWNvbG9yLTcwMDogIzQwNDA0MDtcXHJcXG4gIC0tY29sb3ItODAwOiAjMjYyNjI2O1xcclxcbiAgLS1jb2xvci05MDA6ICMwZDBkMGQ7XFxyXFxuXFxyXFxuICAvKiBDU1MgSFNMICovXFxyXFxuICAtLWJsdWU6ICMwMDdiZmY7XFxyXFxuICAtLWluZGlnbzogIzY2MTBmMjtcXHJcXG4gIC0tcHVycGxlOiAjNmY0MmMxO1xcclxcbiAgLS1waW5rOiAjZTgzZThjO1xcclxcbiAgLS1yZWQ6ICNkYzM1NDU7XFxyXFxuICAtLW9yYW5nZTogI2ZkN2UxNDtcXHJcXG4gIC0teWVsbG93OiAjZmZjMTA3O1xcclxcbiAgLS1ncmVlbjogIzI4YTc0NTtcXHJcXG4gIC0tdGVhbDogIzIwYzk5NztcXHJcXG4gIC0tY3lhbjogIzE3YTJiODtcXHJcXG4gIC0td2hpdGU6ICNmZmY7XFxyXFxuICAtLWdyYXk6ICM2Yzc1N2Q7XFxyXFxuICAtLWdyYXktZGFyazogIzM0M2E0MDtcXHJcXG4gIC0tcHJpbWFyeTogIzAwN2JmZjtcXHJcXG4gIC0tc2Vjb25kYXJ5OiAjNmM3NTdkO1xcclxcbiAgLS1zdWNjZXNzOiAjMjhhNzQ1O1xcclxcbiAgLS1pbmZvOiAjMTdhMmI4O1xcclxcbiAgLS13YXJuaW5nOiAjZmZjMTA3O1xcclxcbiAgLS1kYW5nZXI6ICNkYzM1NDU7XFxyXFxuICAtLWxpZ2h0OiAjZjhmOWZhO1xcclxcbiAgLS1kYXJrOiAjMzQzYTQwO1xcclxcbiAgLS1icmVha3BvaW50LXhzOiAwO1xcclxcbiAgLS1icmVha3BvaW50LXNtOiA1NzZweDtcXHJcXG4gIC0tYnJlYWtwb2ludC1tZDogNzY4cHg7XFxyXFxuICAtLWJyZWFrcG9pbnQtbGc6IDk5MnB4O1xcclxcbiAgLS1icmVha3BvaW50LXhsOiAxMjAwcHg7XFxyXFxuXFxyXFxuICAtLWJveC1zaGFkb3c6IHJnYmEoMTk2LCAxNjYsIDE2NiwgMC4xNikgMHB4IDNweCA2cHgsXFxyXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxyXFxuXFxyXFxuICAtLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtaW4td2lkdGg6IDQycHg7XFxyXFxuICBtaW4taGVpZ2h0OiA0MnB4O1xcclxcbiAgLyogbWFyZ2luOiAxcmVtOyAqL1xcclxcbiAgLyogYXNwZWN0LXJhdGlvOiAxOyAqL1xcclxcbiAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbSAwLjVyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKGJsYWNrKTtcXHJcXG4gIC8qIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDsgKi9cXHJcXG4gIC8qIGJvcmRlcjogMC4xMjVyZW0gc29saWQgdmFyKHZhcigtLWN5YW4pKTsgKi9cXHJcXG4gIC8qIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpOyAqL1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yMDApOyAqL1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWluZGlnbyk7XFxyXFxuICAvKiBjb2xvcjogeWVsbG93OyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmFjdGl2ZSxcXHJcXG4uYnRuOmZvY3VzIHtcXHJcXG4gIG9wYWNpdHk6IDAuNjtcXHJcXG4gIC8qIG1hcmdpbjogMS41cmVtOyAqL1xcclxcbiAgLyogb3V0bGluZTogMC4yNXJlbSBzb2xpZCB2YXIoLS1pbmRpZ28pOyAqL1xcclxcbiAgLyogY29sb3I6IHZhcigtLWNvbG9yLTUwMCk7ICovXFxyXFxufVxcclxcblxcclxcbi5kZWxldGVCdG4ge1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBsaW5lYXI7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIC8qIGZvbnQtc2l6ZTogM3JlbTsgKi9cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItNzAwKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItNTApO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgLyogcGFkZGluZzogMXJlbTsgKi9cXHJcXG4gIC8qIG1hcmdpbjogMXJlbTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMTAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6aG92ZXIge1xcclxcbiAgLyogYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMjAwKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnRQcm9qZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAvKiBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xMDApOyAqL1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgbWFyZ2luOiAwLjVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb21wbGV0ZSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbmRpZ28pO1xcclxcbiAgLyogYm9yZGVyLXJhZGl1czogMS41cmVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpob3ZlciB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xMDApOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpob3ZlciAuZGVsZXRlQnRuLFxcclxcbi5wcm9qZWN0OmhvdmVyIC5kZWxldGVCdG4ge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tUaXRsZSB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrRGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0R1ZURhdGUge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3JtIHN0eWxlcyAqL1xcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICBtYXJnaW46IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbmxhYmVsW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFx0RHluYW1pYyBEaXNwbGF5c1xcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLypcXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcdEN1cnJlbnRseSBVbnVzZWQgU3R5bGVzXFxyXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxyXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXHJcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcclxcbiAgd2lkdGg6IDgwdnc7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxyXFxuICBtYXgtd2lkdGg6IDY2NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxyXFxuLmNsb3NlIHtcXHJcXG4gIGNvbG9yOiAjYWFhO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTpob3ZlcixcXHJcXG4uY2xvc2U6Zm9jdXMge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQUNoQjs7OztDQUlDOztBQUVELFVBQVU7QUFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTJDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBLGVBQWU7QUFDZjtFQUNFLHNCQUFzQjtFQUN0QjtnRUFDOEQ7RUFDOUQsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7OztFQU1FLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FB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a0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLE9BQU87RUFDUCxNQUFNO0VBQ04sNEJBQTRCO0VBQzVCLFdBQVcsRUFBRSxlQUFlO0VBQzVCLFlBQVksRUFBRSxnQkFBZ0I7RUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtFQUM1Qyw4QkFBOEIsRUFBRSxtQkFBbUI7RUFDbkQsb0NBQW9DLEVBQUUscUJBQXFCO0FBQzdEOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCLEVBQUUsa0NBQWtDO0VBQ3BELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFdBQVcsRUFBRSxvREFBb0Q7RUFDakUsZ0JBQWdCO0FBQ2xCOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGNoYXJzZXQgXFxcInV0Zi04XFxcIjtcXHJcXG4vKlxcclxcblxcdEF1dGhvclxcdFxcdENyeXN0YWxDb21tZXJjZS5jb20gLy8gUm9zcyBEYWxsYWlyZVxcclxcblxcclxcblxcdENvbG9yc1xcclxcbiovXFxyXFxuXFxyXFxuLyogUkVTRVQgKi9cXHJcXG5odG1sLFxcclxcbmJvZHksXFxyXFxuZGl2LFxcclxcbnNwYW4sXFxyXFxub2JqZWN0LFxcclxcbmlmcmFtZSxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNixcXHJcXG5wLFxcclxcbmJsb2NrcXVvdGUsXFxyXFxucHJlLFxcclxcbmEsXFxyXFxuYWJicixcXHJcXG5hY3JvbnltLFxcclxcbmFkZHJlc3MsXFxyXFxuY29kZSxcXHJcXG5kZWwsXFxyXFxuZGZuLFxcclxcbmVtLFxcclxcbmltZyxcXHJcXG5xLFxcclxcbmRsLFxcclxcbmR0LFxcclxcbmRkLFxcclxcbm9sLFxcclxcbnVsLFxcclxcbmxpLFxcclxcbmZpZWxkc2V0LFxcclxcbmZvcm0sXFxyXFxubGFiZWwsXFxyXFxubGVnZW5kLFxcclxcbnRhYmxlLFxcclxcbmNhcHRpb24sXFxyXFxudGJvZHksXFxyXFxudGZvb3QsXFxyXFxudGhlYWQsXFxyXFxudHIsXFxyXFxudGgsXFxyXFxudGQge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcclxcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5lbSB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbnN0cm9uZyB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi8qIC9FTkQgUkVTRVQgKi9cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XFxyXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbixcXHJcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xcclxcbiAgbWFyZ2luOiAwIDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcclxcbiAgbWFyZ2luOiAwIDAgMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42MjY3MXJlbTtcXHJcXG4gIG1hcmdpbjogMCAwIDEycHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBmb250LXNpemU6IDEuMzgzMTZyZW07XFxyXFxuICBtYXJnaW46IDAgMCAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgbWFyZ2luOiA1cHggMCA1cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuaDEgYSxcXHJcXG5oMiBhLFxcclxcbmgzIGEsXFxyXFxuaDQgYSxcXHJcXG5oNSBhLFxcclxcbmg2IGEge1xcclxcbn1cXHJcXG5cXHJcXG5hIGltZyB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiAjMzYzNjM2O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzk5OTtcXHJcXG59XFxyXFxuXFxyXFxuLyogcmVtb3ZlIGRvdHRlZCBsaW5lcyBvbiBzb21lIGxpbmtzIGluIEZGIGJyb3dzZXIgKi9cXHJcXG5cXHJcXG5hLFxcclxcbmE6YWN0aXZlLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hIGltZyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAvICovXFxyXFxuXFxyXFxuLyogQ0xFQVJGSVggKi9cXHJcXG4uY2xlYXJmaXg6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIi5cXFwiO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXJmaXgge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sW3htbG5zXSAuY2xlYXJmaXgge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbiogaHRtbCAuY2xlYXJmaXgge1xcclxcbiAgaGVpZ2h0OiAxJTtcXHJcXG59XFxyXFxuLyogL0VORCBDTEVBUkZJWCAqL1xcclxcblxcclxcbi8qXFxyXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHRMYXlvdXQgJiBGcmFtZXdvcmtcXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tY29sb3ItNTA6ICNmMmYyZjI7XFxyXFxuICAtLWNvbG9yLTEwMDogI2Q5ZDlkOTtcXHJcXG4gIC0tY29sb3ItMjAwOiAjYmZiZmJmO1xcclxcbiAgLS1jb2xvci0zMDA6ICNhNmE2YTY7XFxyXFxuICAtLWNvbG9yLTQwMDogIzhjOGM4YztcXHJcXG4gIC0tY29sb3ItNTAwOiAjNzM3MzczO1xcclxcbiAgLS1jb2xvci02MDA6ICM1OTU5NTk7XFxyXFxuICAtLWNvbG9yLTcwMDogIzQwNDA0MDtcXHJcXG4gIC0tY29sb3ItODAwOiAjMjYyNjI2O1xcclxcbiAgLS1jb2xvci05MDA6ICMwZDBkMGQ7XFxyXFxuXFxyXFxuICAvKiBDU1MgSFNMICovXFxyXFxuICAtLWJsdWU6ICMwMDdiZmY7XFxyXFxuICAtLWluZGlnbzogIzY2MTBmMjtcXHJcXG4gIC0tcHVycGxlOiAjNmY0MmMxO1xcclxcbiAgLS1waW5rOiAjZTgzZThjO1xcclxcbiAgLS1yZWQ6ICNkYzM1NDU7XFxyXFxuICAtLW9yYW5nZTogI2ZkN2UxNDtcXHJcXG4gIC0teWVsbG93OiAjZmZjMTA3O1xcclxcbiAgLS1ncmVlbjogIzI4YTc0NTtcXHJcXG4gIC0tdGVhbDogIzIwYzk5NztcXHJcXG4gIC0tY3lhbjogIzE3YTJiODtcXHJcXG4gIC0td2hpdGU6ICNmZmY7XFxyXFxuICAtLWdyYXk6ICM2Yzc1N2Q7XFxyXFxuICAtLWdyYXktZGFyazogIzM0M2E0MDtcXHJcXG4gIC0tcHJpbWFyeTogIzAwN2JmZjtcXHJcXG4gIC0tc2Vjb25kYXJ5OiAjNmM3NTdkO1xcclxcbiAgLS1zdWNjZXNzOiAjMjhhNzQ1O1xcclxcbiAgLS1pbmZvOiAjMTdhMmI4O1xcclxcbiAgLS13YXJuaW5nOiAjZmZjMTA3O1xcclxcbiAgLS1kYW5nZXI6ICNkYzM1NDU7XFxyXFxuICAtLWxpZ2h0OiAjZjhmOWZhO1xcclxcbiAgLS1kYXJrOiAjMzQzYTQwO1xcclxcbiAgLS1icmVha3BvaW50LXhzOiAwO1xcclxcbiAgLS1icmVha3BvaW50LXNtOiA1NzZweDtcXHJcXG4gIC0tYnJlYWtwb2ludC1tZDogNzY4cHg7XFxyXFxuICAtLWJyZWFrcG9pbnQtbGc6IDk5MnB4O1xcclxcbiAgLS1icmVha3BvaW50LXhsOiAxMjAwcHg7XFxyXFxuXFxyXFxuICAtLWJveC1zaGFkb3c6IHJnYmEoMTk2LCAxNjYsIDE2NiwgMC4xNikgMHB4IDNweCA2cHgsXFxyXFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxyXFxuXFxyXFxuICAtLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtaW4td2lkdGg6IDQycHg7XFxyXFxuICBtaW4taGVpZ2h0OiA0MnB4O1xcclxcbiAgLyogbWFyZ2luOiAxcmVtOyAqL1xcclxcbiAgLyogYXNwZWN0LXJhdGlvOiAxOyAqL1xcclxcbiAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG4gIG1hcmdpbjogMC41cmVtIDAuNXJlbSAwLjVyZW0gMDtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKGJsYWNrKTtcXHJcXG4gIC8qIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluLW91dDsgKi9cXHJcXG4gIC8qIGJvcmRlcjogMC4xMjVyZW0gc29saWQgdmFyKHZhcigtLWN5YW4pKTsgKi9cXHJcXG4gIC8qIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpOyAqL1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci0yMDApOyAqL1xcclxcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWluZGlnbyk7XFxyXFxuICAvKiBjb2xvcjogeWVsbG93OyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmFjdGl2ZSxcXHJcXG4uYnRuOmZvY3VzIHtcXHJcXG4gIG9wYWNpdHk6IDAuNjtcXHJcXG4gIC8qIG1hcmdpbjogMS41cmVtOyAqL1xcclxcbiAgLyogb3V0bGluZTogMC4yNXJlbSBzb2xpZCB2YXIoLS1pbmRpZ28pOyAqL1xcclxcbiAgLyogY29sb3I6IHZhcigtLWNvbG9yLTUwMCk7ICovXFxyXFxufVxcclxcblxcclxcbi5kZWxldGVCdG4ge1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBsaW5lYXI7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIC8qIGZvbnQtc2l6ZTogM3JlbTsgKi9cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItNzAwKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItNTApO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgLyogcGFkZGluZzogMXJlbTsgKi9cXHJcXG4gIC8qIG1hcmdpbjogMXJlbTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzQ29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMTAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6aG92ZXIge1xcclxcbiAgLyogYmFja2dyb3VuZDogdmFyKC0tY29sb3ItMjAwKTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnRQcm9qZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAvKiBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xMDApOyAqL1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgbWFyZ2luOiAwLjVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tDb21wbGV0ZSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbmRpZ28pO1xcclxcbiAgLyogYm9yZGVyLXJhZGl1czogMS41cmVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpob3ZlciB7XFxyXFxuICAvKiBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci0xMDApOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpob3ZlciAuZGVsZXRlQnRuLFxcclxcbi5wcm9qZWN0OmhvdmVyIC5kZWxldGVCdG4ge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tUaXRsZSB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrRGVzY3JpcHRpb24ge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza0R1ZURhdGUge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3JtIHN0eWxlcyAqL1xcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICBtYXJnaW46IDAuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgbWFyZ2luOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwO1xcclxcbiAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbmxhYmVsW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFx0RHluYW1pYyBEaXNwbGF5c1xcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLypcXHJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcdEN1cnJlbnRseSBVbnVzZWQgU3R5bGVzXFxyXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4vKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxyXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXHJcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxyXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxyXFxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcclxcbiAgd2lkdGg6IDgwdnc7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxyXFxuICBtYXgtd2lkdGg6IDY2NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxyXFxuLmNsb3NlIHtcXHJcXG4gIGNvbG9yOiAjYWFhO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZTpob3ZlcixcXHJcXG4uY2xvc2U6Zm9jdXMge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgcmVuZGVyUGFnZSwgeyByZW5kZXIgfSBmcm9tICcuL3JlbmRlclBhZ2UnO1xyXG5cclxuZnVuY3Rpb24gYXBwUGFnZSgpIHtcclxuICByZXR1cm4gcmVuZGVyUGFnZSgpO1xyXG59XHJcblxyXG5hcHBQYWdlKCk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVCdXR0b24iLCJmb3JtVG9PYmplY3QiLCJ0b2dnbGVIaWRkZW4iLCJjcmVhdGVQcm9qZWN0IiwiY3JlYXRlVGFzayIsInJlbmRlciIsImdldFByb2plY3QiLCJnZXRQcm9qZWN0cyIsImNyZWF0ZUZvcm1zIiwicmVzZXRGb3JtIiwiaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzZXQiLCJmb3JtQ29udGFpbmVyIiwiZmllbGRzIiwiY2FuY2VsIiwic3VibWl0IiwiZm9ybSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJmaWVsZCIsImFwcGVuZENoaWxkIiwiYnV0dG9uQ29udGFpbmVyIiwic3VibWl0QnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwicHJvamVjdEZpZWxkcyIsImZvcm1GaWVsZHMiLCJ0aXRsZSIsInNldEF0dHJpYnV0ZSIsInB1c2giLCJ0YXNrRmllbGRzIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwidG9nZ2xlUHJvamVjdEZvcm0iLCJuZXdQcm9qZWN0Iiwic3VibWl0TmV3UHJvamVjdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ1cGRhdGVQcm9qZWN0c0xpc3QiLCJuZXdQcm9qZWN0Rm9ybSIsInRvZ2dsZVRhc2tGb3JtIiwibmV3VGFzayIsInN1Ym1pdE5ld1Rhc2siLCJmb3JtT2JqZWN0IiwicGFyZW50RWxlbWVudCIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVUYXNrc0xpc3QiLCJ0YXNrcyIsIm5ld1Rhc2tGb3JtIiwiZ2V0SWQiLCJhZGRQcm9qZWN0IiwicmVtb3ZlUHJvamVjdCIsIlByb2plY3QiLCJnZXREZWZhdWx0UHJvamVjdCIsImRlZmF1bHRQcm9qZWN0c0xpc3QiLCJwcmlvcml0eSIsImNvbXBsZXRlIiwibm90ZXMiLCJkZWZhdWx0UHJvamVjdHMiLCJwcm9qZWN0IiwiZGVmYXVsdFByb2plY3QiLCJuZXdQcm9qZWN0c0xpc3QiLCJwcm9qZWN0T2JqZWN0IiwiZGVsZXRlUHJvamVjdCIsInNob3VsZERlbGV0ZSIsIndpbmRvdyIsImNvbmZpcm0iLCJkZSIsImFkZFRhc2siLCJkZWxldGVUYXNrIiwidG9nZ2xlVGFza0NvbXBsZXRlIiwicHJvamVjdENvbnRhaW5lciIsImNvbnRhaW5lciIsImRlbGV0ZUJ1dHRvbiIsIm9uY2xpY2siLCJuZXdQcm9qZWN0TGlzdCIsInByb2plY3RCdXR0b24iLCJjaGFuZ2VDdXJyZW50UHJvamVjdCIsInByb2plY3RzTGF5b3V0IiwicGFyZW50IiwicHJvamVjdHNDb250YWluZXIiLCJwcm9qZWN0c1RpdGxlIiwiaW5uZXJIVE1MIiwicHJvamVjdHNMaXN0Q29udGFpbmVyIiwiYWRkUHJvamVjdEJ1dHRvbiIsInByb2plY3RzTGlzdCIsInByb2plY3RzIiwiZm9yRWFjaCIsImRlbGV0ZVByb2plY3RzTGlzdCIsIm9sZExpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlIiwiYXJyYXkiLCJ0YXNrQ29udGFpbmVyIiwidGFzayIsImNvbXBsZXRlQnV0dG9uIiwibmV3VGFza0xpc3QiLCJpbm5lclRleHQiLCJ0YXNrc0xheW91dCIsImN1cnJlbnRQcm9qZWN0IiwiY3VycmVudFByb2plY3RUaXRsZSIsInRhc2tzTGlzdENvbnRhaW5lciIsImFkZFRhc2tCdXR0b24iLCJ0YXNrc0xpc3QiLCJkZWxldGVUYXNrc0xpc3QiLCJjdXJyZW50UHJvamVjdENvbnRhaW5lciIsImVsZW1lbnQiLCJyZW5kZXJQYWdlIiwibWFpbiIsImJvZHkiLCJ1cGRhdGVNeVByb2plY3RzIiwib2JqZWN0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRJbmRleEZyb21JZCIsImluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsInBhcnNlSW50IiwibG9jYWxTdG9yZWRQcm9qZWN0cyIsImdldEl0ZW0iLCJzdG9yZWRQcm9qZWN0cyIsInBhcnNlIiwiZmluZCIsInNwbGljZSIsImdldFRhc2tzIiwicHJvamVjdElkIiwiZ2V0VGFzayIsInRhc2tJZCIsIlByb2plY3RUYXNrIiwicHJvamVjdEluZGV4IiwidXBkYXRlVGFzayIsInVwZGF0ZWRUYXNrIiwicmVtb3ZlVGFzayIsInRhc2tJbmRleCIsIlRhc2siLCJ0YXNrT2JqZWN0IiwicHJpbnRNZSIsImFyciIsInNvbWUiLCJlIiwibmV3T2JqZWN0IiwiZWFjaElucHV0IiwibmFtZSIsInZhbHVlIiwidHlwZSIsImNoZWNrZWQiLCJ1bmRlZmluZWQiLCJpZHMiLCJ0b2dnbGUiLCJ0ZXh0Iiwic2l6ZSIsIm9uQ2xpY2siLCJidG4iLCJidXR0b25UZXh0IiwiYXBwUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=