/*
* Component View + Mount + initData
*
*/

var App = {};

App.oninit = function oninit() {
  var self = this;
  
  self.newTask = '';
  self.tasks = [];
};

App.view = function view() {
  var self = this;
  
  return m('div.list', [
    m('div.list__header', 'TODO'),
  ]);
}

m.mount(document.getElementById('app'), App);