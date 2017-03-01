var Menu = {};

Menu.view = function view() {
  return m('nav.nav', [
    m('a.tab[href=/]', {
      oncreate: m.route.link,
      class   : m.route.get() === '/' ? 'tab--active' : '',
    }, 'Home'),
    m('a.tab[href=/page1]', {
      oncreate: m.route.link,
      class   : m.route.get() === '/page1' ?  'tab--active' : '',
    }, 'Page 1'),
  ]);
};

var Home = {};

Home.view = function view() {
  return [
    m(Menu),
    m('h1.title', 'This is the home'),
  ];
};

var Page1 = {};

Page1.view = function view() {
  return [
    m(Menu),
    m('h1.title', 'This is page 1'),
  ];
};
