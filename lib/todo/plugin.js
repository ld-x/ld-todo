'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TodoButton = require('./TodoButton');

var _TodoButton2 = _interopRequireDefault(_TodoButton);

var _TodoBlock = require('./TodoBlock');

var _TodoBlock2 = _interopRequireDefault(_TodoBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
 *
 * License: MIT
 */

exports.default = {
  type: 'todo',
  button: _TodoButton2.default,
  block: _TodoBlock2.default
};