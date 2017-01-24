'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TodoButton = require('./todo/TodoButton');

var _TodoButton2 = _interopRequireDefault(_TodoButton);

var _TodoBlock = require('./todo/TodoBlock');

var _TodoBlock2 = _interopRequireDefault(_TodoBlock);

var _TodoWrapper = require('./todo/TodoWrapper');

var _TodoWrapper2 = _interopRequireDefault(_TodoWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: 'todo',
  button: _TodoButton2.default,
  block: _TodoBlock2.default,
  wrapper: _TodoWrapper2.default
}; /*
    * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
    *
    * License: MIT
    */