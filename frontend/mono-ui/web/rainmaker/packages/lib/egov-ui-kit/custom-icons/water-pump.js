"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require("material-ui/SvgIcon");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WaterPump = function WaterPump(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    (0, _extends3.default)({ className: "custom-icon", viewBox: "0 -8 35 42" }, props),
    _react2.default.createElement("path", {
      d: "M25.5,18.75 C25.5,18.75 28.5,22.005 28.5,24 C28.5,25.6568542 27.1568542,27 25.5,27 C23.8431458,27 22.5,25.6568542 22.5,24 C22.5,22.005 25.5,18.75 25.5,18.75 L25.5,18.75 Z M4.5,24 L4.5,10.5 C2.84314575,10.5 1.5,9.15685425 1.5,7.5 C1.5,5.84314575 2.84314575,4.5 4.5,4.5 L4.5,3 C4.5,1.34314575 5.84314575,0 7.5,0 L10.5,0 C12.1568542,0 13.5,1.34314575 13.5,3 L13.5,4.5 L25.5,4.5 C27.1568542,4.5 28.5,5.84314575 28.5,7.5 L28.5,10.5 L28.5,13.5 C29.3284271,13.5 30,14.1715729 30,15 C30,15.8284271 29.3284271,16.5 28.5,16.5 L22.5,16.5 C21.6715729,16.5 21,15.8284271 21,15 C21,14.1715729 21.6715729,13.5 22.5,13.5 L22.5,10.5 L13.5,10.5 L13.5,24 L15,24 C16.6568542,24 18,25.3431458 18,27 L18,30 L0,30 L0,27 C-3.33066907e-16,25.3431458 1.34314575,24 3,24 L4.5,24 Z",
      id: "Shape"
    })
  );
};

exports.default = WaterPump;