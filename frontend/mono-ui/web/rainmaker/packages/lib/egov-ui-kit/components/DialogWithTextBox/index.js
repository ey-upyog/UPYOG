"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _components = require("egov-ui-kit/components");

var _reactRedux = require("react-redux");

var _translationNode = require("egov-ui-kit/utils/translationNode");

var _translationNode2 = _interopRequireDefault(_translationNode);

var _actions = require("egov-ui-kit/redux/complaints/actions");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  logoutContentStyle: { textAlign: "center", padding: "24px 20px" },

  labelStyle: {
    fontSize: "16px",
    fontWeight: "normal",
    color: "#767676",
    letterSpacing: "0.3px",
    marginBottom: "26px"
  },

  radioButtonItemStyle: {
    marginBottom: "18px",
    paddingLeft: "2px",
    height: "16px"
  },
  selectedLabelStyle: {
    color: "#fe7a51"
  },
  radioButtonLabelStyle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#767676",
    letterSpacing: "0.3px"
  }
};

var DialogWithTextField = function (_Component) {
  (0, _inherits3.default)(DialogWithTextField, _Component);

  function DialogWithTextField() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DialogWithTextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DialogWithTextField.__proto__ || Object.getPrototypeOf(DialogWithTextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      valueTyped: ""
    }, _this.textFieldHandleChange = function (event, value) {
      _this.setState({ valueTyped: value });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DialogWithTextField, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          lableText = _props.lableText,
          closeDialog = _props.closeDialog,
          popOpen = _props.popOpen,
          onSend = _props.onSend;
      var textFieldHandleChange = this.textFieldHandleChange,
          onConfirmClick = this.onConfirmClick;


      return _react2.default.createElement(_components.Dialog, {
        open: popOpen,
        title: _react2.default.createElement(_translationNode2.default, { label: "", bold: true, color: "rgba(0, 0, 0, 0.8700000047683716)", fontSize: "20px", labelStyle: { padding: "16px 0px 0px 24px" } }),
        children: [_react2.default.createElement(
          "div",
          { style: { paddingTop: "22px", paddingLeft: "8px" } },
          _react2.default.createElement(_translationNode2.default, {
            label: lableText,
            bold: true,
            color: "rgba(0, 0, 0, 0.8700000047683716)",
            fontSize: "20px",
            labelStyle: { padding: "16px 0px 0px 24px" }
          }),
          _react2.default.createElement(_.TextField, { id: "asda", value: this.state.valueTyped, onChange: textFieldHandleChange })
        )],
        handleClose: closeDialog,
        actions: [_react2.default.createElement(_components.Button, {
          id: "logout-no-button",
          className: "logout-no-button",
          label: _react2.default.createElement(_translationNode2.default, { buttonLabel: true, label: "CORE_LOGOUTPOPUP_CANCEL", color: "#FE7A51" }),
          backgroundColor: "#fff",
          onClick: closeDialog,
          style: { boxShadow: "none" }
        }), _react2.default.createElement(_components.Button, {
          id: "logout-yes-button",
          className: "logout-yes-button",
          label: _react2.default.createElement(_translationNode2.default, { buttonLabel: true, label: "CORE_POPUP_SEND", color: "#FE7A51" }),
          backgroundColor: "#fff",
          onClick: function onClick() {
            onSend(_this2.state.valueTyped);
            closeDialog();
          },
          style: { boxShadow: "none" }
        })],
        contentClassName: "logout-popup",
        contentStyle: { width: "90%" },
        isClose: true
      });
    }
  }]);
  return DialogWithTextField;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getComplaintDisplayOrder: function getComplaintDisplayOrder(order) {
      return dispatch((0, _actions.getComplaintDisplayOrder)(order));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(DialogWithTextField);