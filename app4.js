/*
* Component View + Mount + initData + input 
* + Items as components 
*/

// ------------ APP COMPONENT --------------

var App = {};

App.oninit = function oninit() {
  var self = this;
  
  self.newTask = '';
  self.tasks = [];
};

App.setNewTask = function setNewTask(value) {
  var self = this;
  self.newTask = value;
};


App.addTask = function addTask(e) {
  var self = this;
  
  if (e.keyCode !== 13)
    return;
  self.tasks.push(self.newTask);
  self.newTask = '';
}

App.view = function view() {
  var self = this;
  
  return m('div.list', [
    m('div.list__header', 'TODO'),
    self.tasks.map(displayTask),
    m('input.task.task--new', {
      type       : 'text',
      placeholder: 'Add a task',
      value      : self.newTask,
      oninput    : m.withAttr('value', self.setNewTask.bind(self)),
      onkeydown  : self.addTask.bind(self),
    })
  ]);

  function displayTask(taskLabel, key) {
    return m(task, {
      label: taskLabel,
    });
  }
}

m.mount(document.getElementById('app'), App);


// ----------- TASK COMPONENT --------------

var task = {};

task.controller = function controller() {};

task.view = function view(vnode) {
  return m('.task.task--existing',[
    vnode.attrs.label,
  ]);
};