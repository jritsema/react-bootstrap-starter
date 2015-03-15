var React = require('react');
var Navigator = require('./Navigator.jsx');

var Page1 = require('./Page1/index.jsx');
var Page2 = require('./Page2/index.jsx');

//this navigation is used for configuring both the menu and the routing
var navigation = [
  { id: 1, route: 'Page1', path: 'Page1', display: 'Page 1', component: Page1 },
  { id: 2, route: 'Page2', path: 'Page2', display: 'Page 2', component: Page2 },
  { id: 3, route: 'Page3/:id', path: 'Page3', display: 'Page 3', component: Page2 }
];

Navigator.setNavigation(navigation);