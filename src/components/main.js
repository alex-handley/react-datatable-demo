'use strict';

var DatatablesDemoApp = require('./DatatablesDemoApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={DatatablesDemoApp}>
    <Route name="/" handler={DatatablesDemoApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
