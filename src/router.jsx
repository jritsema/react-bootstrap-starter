module.exports = (function () {

  'use strict';

  var routes = [];

  function addRoute(route, handler) {
    routes.push({parts: route.split('/'), handler: handler});
  }

  function load(route) {
    window.location.hash = route;
  }

  function start() {

    var path = window.location.hash.substr(1),
        parts = path.split('/'),
        partsLength = parts.length;

    //iterate configured routes
    for (var i = 0; i < routes.length; i++) {
      var route = routes[i];
      //does this route's part count (e.g., Foo/:Bar) match what's in the URL?
      if (route.parts.length === partsLength) {
        //if the matching configured route has a ':', then pass the right side as a parameter
        var params = [];
        for (var j = 0; j < partsLength; j++) {
          if (route.parts[j].substr(0, 1) === ':') {
            params.push(parts[j]);
          } else if (route.parts[j] !== parts[j]) {
            break;
          }
        }
        if (j === partsLength) {
          route.handler.apply(undefined, params);
          return;
        }
      }
    }
  }

  window.onhashchange = start;

  return {
    addRoute: addRoute,
    load: load,
    start: start
  };

}());