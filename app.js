/*
* Component View + Mount + initData + input 
* + Items as components + deletion
* + model management
*/

// ----------- MODEL --------------

var TaskModel = {
  list: [],
  addTask: function addTask(newTask) {
    var self = this;
    self.list.push(newTask);
  },
  deleteTask: function deleteTask(index) {
    var self = this;
    self.list.splice(index, 1);
  },
};


// ------------ APP COMPONENT --------------

var App = {};

App.oninit = function oninit() {
  var self = this;
  
  self.newTask = '';
};

App.setNewTask = function setNewTask(value) {
  var self = this;
  self.newTask = value;
};


App.onkeydown = function onkeydown(e) {
  var self = this;
  
  if (e.keyCode !== 13)
    return;
  TaskModel.addTask(self.newTask);
  self.newTask = '';
}

App.view = function view() {
  var self = this;
  
  return m('div.list', [
    m('div.list__header', 'TODO'),
    TaskModel.list.map(displayTask),
    m('input.task.task--new', {
      type       : 'text',
      placeholder: 'Add a task',
      value      : self.newTask,
      oninput    : m.withAttr('value', self.setNewTask.bind(self)),
      onkeydown  : self.onkeydown.bind(self),
    })
  ]);

  function displayTask(taskLabel, key) {
    return m(Task, {
      label: taskLabel,
      delete: TaskModel.deleteTask.bind(TaskModel, key),
      
    });
  }
}

m.mount(document.getElementById('app'), App);


// ----------- TASK COMPONENT --------------

var Task = {};

Task.controller = function controller() {};

Task.view = function view(vnode) {
  return m('.task.task--existing',[
    vnode.attrs.label,
    m('.task__delete', {
      onclick: vnode.attrs.delete,
    }, 'Delete')
  ]);
};

