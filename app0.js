/*
* Component view + Mount
*
*
*/

var App = {};

App.view = function view() {
  var self = this;
  
  return m('div.list', [
    m('div.list__header', 'TODO'),
  ]);

}

m.mount(document.getElementById('app'), App);