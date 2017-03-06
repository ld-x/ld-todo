'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  padding: 10px 20px;\n  margin-bottom: 10px;\n  border-radius: 4px;\n'], ['\n  position: relative;\n  padding: 10px 20px;\n  margin-bottom: 10px;\n  border-radius: 4px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-left: 15px;\n  border-bottom: 1px solid black;\n  text-decoration: ', ';\n'], ['\n  margin-left: 15px;\n  border-bottom: 1px solid black;\n  text-decoration: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  left: 0;\n  top: 20px;\n  cursor: pointer;\n\n  &:before {\n    content: \'\';\n    display: block;\n    border: solid 9px #272727;\n    border-radius: 9px;\n    height: 0;\n    width: 0;\n    position: absolute;\n    left: 7px;\n    top: 40%;\n    margin-top: -8px;\n  }\n\n  &:after {\n    content: \'\';\n    display:block;\n    width: 4px;\n    height: 6px;\n    border: ', ';\n    border-width: 0 2px 2px 0;\n    position:absolute;\n    left: 14px;\n    top: 2px;\n    margin-top: -4px;\n    transform: rotate(45deg);\n  }\n\n'], ['\n  position: absolute;\n  left: 0;\n  top: 20px;\n  cursor: pointer;\n\n  &:before {\n    content: \'\';\n    display: block;\n    border: solid 9px #272727;\n    border-radius: 9px;\n    height: 0;\n    width: 0;\n    position: absolute;\n    left: 7px;\n    top: 40%;\n    margin-top: -8px;\n  }\n\n  &:after {\n    content: \'\';\n    display:block;\n    width: 4px;\n    height: 6px;\n    border: ', ';\n    border-width: 0 2px 2px 0;\n    position:absolute;\n    left: 14px;\n    top: 2px;\n    margin-top: -4px;\n    transform: rotate(45deg);\n  }\n\n']);

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
  return _draftJs.EditorState.push(editorState, newContentState, 'change-block-type');
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
        { 'data-plugin-type': 'todo', className: 'ld-todo-wrapper' },
        _react2.default.createElement(TodoInput, { className: 'ld-todo-input', type: 'checkbox', checked: checked, onClick: this.updateData }),
        _react2.default.createElement(
          TodoBlock,
          { className: 'ld-todo', checked: checked },
          _react2.default.createElement(_draftJs.EditorBlock, this.props)
        )
      );
    }
  }]);

  return _default;
}(_react2.default.Component);

exports.default = _default;


var TodoWrapper = _styledComponents2.default.div(_templateObject);

var TodoBlock = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.checked ? 'line-through' : 'initial';
});

var TodoInput = _styledComponents2.default.span(_templateObject3, function (props) {
  return props.checked ? 'solid #ff4136' : 'solid white';
});