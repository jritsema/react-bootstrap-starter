module.exports = (function () {
  'use strict';

  var React = require('react');
  var Router = require('./router.jsx');

  var navigation;

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

  function setNavigation (nav) {
    navigation = nav;

    //hook up route handlers
    Router.addRoute('', getRouteHandler(0));
    for (var i in navigation)
      Router.addRoute(navigation[i].route, getRouteHandler(i));

    Router.start();    
  }

  return {
    setNavigation: setNavigation  
  }

}());