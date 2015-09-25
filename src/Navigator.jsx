import React from 'react'
import Router from './router.jsx'

export default (function () {

  var navigation;
  //var router = new Router();
  var router = Router;

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
    router.addRoute('', getRouteHandler(0));
    for (var i in navigation)
      router.addRoute(navigation[i].route, getRouteHandler(i));

    router.start();    
  }

  return {
    setNavigation: setNavigation  
  }

}());