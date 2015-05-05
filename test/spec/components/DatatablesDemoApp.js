'use strict';

describe('DatatablesDemoApp', function () {
  var React = require('react/addons');
  var DatatablesDemoApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    DatatablesDemoApp = require('components/DatatablesDemoApp.js');
    component = React.createElement(DatatablesDemoApp);
  });

  it('should create a new instance of DatatablesDemoApp', function () {
    expect(component).toBeDefined();
  });
});
