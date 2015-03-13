var React = require('react');
var Page1 = require('./Page1/index.jsx');
var Page2 = require('./Page2/index.jsx');
var Router = require('./router.jsx');

//this navigation is used for configuring both the menu and the routing
var navigation = [
  { id: 1, route: 'Page1', path: 'Page1', display: 'Page 1', component: Page1 },
  { id: 2, route: 'Page2', path: 'Page2', display: 'Page 2', component: Page2 },
  { id: 3, route: 'Page3/:id', path: 'Page3', display: 'Page 3', component: Page2 }
];

function renderNav(item, params) {
  React.render(
    React.createElement(item.component, { 
      navigation: navigation,
      selected: item.path,
      parameters: params
    }),
    document.body
  );  
}

function getRouteHandler(i) {
  return function(params) { renderNav(navigation[i], params); }
}

//hook up route handlers
Router.addRoute('', getRouteHandler(0));
for (var i in navigation)
  Router.addRoute(navigation[i].route, getRouteHandler(i));

Router.start();