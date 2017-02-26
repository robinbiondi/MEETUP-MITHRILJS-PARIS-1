
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
  
  console.log('keyCode', e.keyCode);
  
  if (e.keyCode !== 13)
    return;
  self.tasks.push(self.newTask);
  self.newTask = '';
}

App.view = function view() {
  var self = this;
  
  return m('.list', [
    m('.list__header', 'TODO'),
    self.tasks.map(displayTask),
    m('input.task.task--new', {
      type       : 'text',
      placeholder: 'Add a task',
      value      : self.newTask,
      oninput    : m.withAttr('value', self.setNewTask.bind(self)),
      onkeydown  : self.addTask.bind(self),
    })
  ]);
};


m.mount(document.getElementById('app'), App);


function displayTask(task) {
  return m('.task.task--existing', task);
}