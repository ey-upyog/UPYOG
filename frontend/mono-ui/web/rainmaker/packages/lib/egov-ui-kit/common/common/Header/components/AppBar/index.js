"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _components = require("components");

var _translationNode = require("egov-ui-kit/utils/translationNode");

var _translationNode2 = _interopRequireDefault(_translationNode);

var _UserSettings = require("../UserSettings");

var _UserSettings2 = _interopRequireDefault(_UserSettings);

var _Toolbar = require("material-ui/Toolbar");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Badge = require("@material-ui/core/Badge");

var _Badge2 = _interopRequireDefault(_Badge);

var _Digit_logo = require("egov-ui-kit/assets/images/Digit_logo.png");

var _Digit_logo2 = _interopRequireDefault(_Digit_logo);

var _pblogo = require("egov-ui-kit/assets/images/pblogo.png");

var _pblogo2 = _interopRequireDefault(_pblogo);

var _IconButton = require("material-ui/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _commons = require("egov-ui-kit/utils/commons");

require("./index.css");

var _reactRedux = require("react-redux");

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  titleStyle: { fontSize: "20px", fontWeight: 500 }
};

var iconButtonStyle = {
  paddingLeft: 0,
  paddingRight: 0,
  width: 35
};

// handle listners
var EgovAppBar = function EgovAppBar(_ref) {
  var className = _ref.className,
      ulbName = _ref.ulbName,
      defaultTitle = _ref.defaultTitle,
      ulbLogo = _ref.ulbLogo,
      title = _ref.title,
      titleAddon = _ref.titleAddon,
      isHomeScreen = _ref.isHomeScreen,
      role = _ref.role,
      fetchLocalizationLabel = _ref.fetchLocalizationLabel,
      _ref$userInfo = _ref.userInfo,
      userInfo = _ref$userInfo === undefined ? {} : _ref$userInfo,
      onToolBarIconClick = _ref.onToolBarIconClick,
      refreshButton = _ref.refreshButton,
      sortButton = _ref.sortButton,
      searchButton = _ref.searchButton,
      helpButton = _ref.helpButton,
      notificationButton = _ref.notificationButton,
      sortDialogOpen = _ref.sortDialogOpen,
      history = _ref.history,
      handleItemClick = _ref.handleItemClick,
      hasLocalisation = _ref.hasLocalisation,
      notificationsCount = _ref.notificationsCount,
      isUserSetting = _ref.isUserSetting,
      logoImage = _ref.logoImage,
      rest = (0, _objectWithoutProperties3.default)(_ref, ["className", "ulbName", "defaultTitle", "ulbLogo", "title", "titleAddon", "isHomeScreen", "role", "fetchLocalizationLabel", "userInfo", "onToolBarIconClick", "refreshButton", "sortButton", "searchButton", "helpButton", "notificationButton", "sortDialogOpen", "history", "handleItemClick", "hasLocalisation", "notificationsCount", "isUserSetting", "logoImage"]);

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _components.AppBar
      // className={isHomeScreen && role === "citizen" ? "home-screen-appbar" : className || "header-with-drawer"}
      ,
      (0, _extends3.default)({ className: className || "header-with-drawer",
        title: _react2.default.createElement(
          "div",
          { className: "citizen-header-logo-label" },
          _react2.default.createElement(
            "div",
            { className: "citizen-header-logo" },
            _react2.default.createElement("img", { src: ulbLogo ? ulbLogo : _pblogo2.default, onError: function onError(event) {
                return event.target.setAttribute("src", _pblogo2.default);
              } })
          ),
          _react2.default.createElement(_translationNode2.default, { containerStyle: { marginLeft: "0px" }, className: "screenHeaderLabelStyle appbar-title-label", label: title }),
          titleAddon && _react2.default.createElement(_translationNode2.default, {
            containerStyle: { display: "inline-block", marginLeft: 5 },
            className: "screenHeaderLabelStyle appbar-title-label",
            label: titleAddon
          }),
          isUserSetting && _react2.default.createElement(
            "div",
            { className: "rainmaker-displayInline" },
            _react2.default.createElement(_translationNode2.default, {
              containerStyle: { marginLeft: "10px" },
              className: "screenHeaderLabelStyle appbar-municipal-label",
              label: ulbName && "TENANT_TENANTS_" + ulbName.toUpperCase().replace(/[.]/g, "_")
            }),
            _react2.default.createElement(_translationNode2.default, { containerStyle: { marginLeft: "4px" }, className: "screenHeaderLabelStyle appbar-municipal-label", label: defaultTitle })
          )
        ),
        titleStyle: styles.titleStyle
      }, rest),
      _react2.default.createElement(
        _Toolbar2.default,
        { className: "app-toolbar", style: { padding: "0px", height: "64px", background: "#ffffff" } },
        _react2.default.createElement(_UserSettings2.default, {
          hasLocalisation: hasLocalisation,
          fetchLocalizationLabel: fetchLocalizationLabel,
          onIconClick: onToolBarIconClick,
          userInfo: userInfo,
          handleItemClick: handleItemClick,
          isUserSetting: isUserSetting
        })
      ),
      notificationButton && role === "citizen" && _react2.default.createElement(
        "div",
        { className: "notification-icon-web notification-icon", onClick: function onClick(e) {
            return (0, _commons.onNotificationClick)(history);
          } },
        notificationsCount ? _react2.default.createElement(
          _IconButton2.default,
          { "aria-label": "4 pending messages" },
          _react2.default.createElement(
            _Badge2.default,
            { badgeContent: notificationsCount, color: "primary" },
            _react2.default.createElement(_components.Icon, { action: "social", name: "notifications-none", color: "#000000", fill: "#000000" })
          )
        ) : _react2.default.createElement(_components.Icon, { action: "social", name: "notifications-none", color: "#000000", fill: "#000000" })
      ),
      _react2.default.createElement(
        "div",
        { className: "appbar-right-logo" },
        _react2.default.createElement("img", { src: logoImage ? logoImage : _Digit_logo2.default })
      ),
      _react2.default.createElement(
        "div",
        { className: "icon-button" },
        refreshButton && _react2.default.createElement(
          _IconButton2.default,
          { style: iconButtonStyle, onClick: function onClick(e) {
              return location.reload();
            } },
          _react2.default.createElement(_components.Icon, { action: "navigation", name: "refresh", color: "#fff" })
        ),
        sortButton && _react2.default.createElement(
          _IconButton2.default,
          { style: iconButtonStyle, onClick: sortDialogOpen },
          _react2.default.createElement(_components.Icon, { action: "action", name: "swap-vert", color: "#fff" })
        ),
        searchButton && role === "ao" && _react2.default.createElement(
          _IconButton2.default,
          { style: iconButtonStyle, onClick: function onClick(e) {
              return onSearchClick(history);
            } },
          _react2.default.createElement(_components.Icon, { action: "action", name: "search", color: "#fff" })
        ),
        helpButton && role === "citizen" && _react2.default.createElement(
          _IconButton2.default,
          { style: iconButtonStyle },
          _react2.default.createElement(_components.Icon, { action: "action", name: "help", color: "#fff" })
        )
      ),
      notificationButton && role === "citizen" && _react2.default.createElement(
        "div",
        { className: "notification-icon-mobile notification-icon", onClick: function onClick(e) {
            return (0, _commons.onNotificationClick)(history);
          } },
        notificationsCount ? _react2.default.createElement(
          _IconButton2.default,
          { "aria-label": "4 pending messages" },
          _react2.default.createElement(
            _Badge2.default,
            { badgeContent: notificationsCount, color: "primary" },
            _react2.default.createElement(_components.Icon, { action: "social", name: "notifications-none", color: "#fff" })
          )
        ) : _react2.default.createElement(_components.Icon, { action: "social", name: "notifications-none", color: "#fff" })
      )
    )
  );
};

var onSearchClick = function onSearchClick(history) {
  history.push("search-complaint");
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var common = _ref2.common;
  var stateInfoById = common.stateInfoById;

  var logoImage = (0, _get2.default)(stateInfoById, "0.logoUrl");
  return { logoImage: logoImage };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(EgovAppBar);