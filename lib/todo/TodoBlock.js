'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  padding: 10px 20px;\n  border: 1px solid #f7f7f7;\n  margin-bottom: 10px;\n  border-radius: 4px;\n'], ['\n  position: relative;\n  padding: 10px 20px;\n  border: 1px solid #f7f7f7;\n  margin-bottom: 10px;\n  border-radius: 4px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-left: 10px;\n'], ['\n  margin-left: 10px;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  cursor: pointer;\n'], ['\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  cursor: pointer;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var updateDataOfBlock = function updateDataOfBlock(editorState, block, newData) {
  var contentState = editorState.getCurrentContent();
  var newBlock = block.merge({ data: newData });
  var newContentState = contentState.merge({
    blockMap: contentState.getBlockMap().set(block.getKey(), newBlock)
  });
  return EditorState.push(editorState, newContentState, 'change-block-type');
};

var _default = function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));

    _this.updateData = _this.updateData.bind(_this);
    return _this;
  }

  _createClass(_default, [{
    key: 'updateData',
    value: function updateData() {
      var _props = this.props,
          block = _props.block,
          blockProps = _props.blockProps;
      var onChange = blockProps.onChange,
          editorState = blockProps.editorState;

      var data = block.getData();
      var checked = data.has('checked') && data.get('checked') === true;
      var newData = data.set('checked', !checked);
      onChange(updateDataOfBlock(editorState, block, newData));
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.block.getData();
      var checked = data.get('checked') === true;
      return _react2.default.createElement(
        TodoWrapper,
        { 'data-plugin-type': 'todo' },
        _react2.default.createElement(TodoInput, { type: 'checkbox', checked: checked, onChange: this.updateData }),
        _react2.default.createElement(
          TodoBlock,
          null,
          _react2.default.createElement(_draftJs.EditorBlock, this.props)
        )
      );
    }
  }]);

  return _default;
}(_react2.default.Component);

exports.default = _default;


var TodoWrapper = _styledComponents2.default.div(_templateObject);

var TodoBlock = _styledComponents2.default.div(_templateObject2);

var TodoInput = _styledComponents2.default.input(_templateObject3);