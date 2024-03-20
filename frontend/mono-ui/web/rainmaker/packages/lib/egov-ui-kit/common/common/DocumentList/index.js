"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends4 = require("babel-runtime/helpers/extends");

var _extends5 = _interopRequireDefault(_extends4);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _Grid = require("@material-ui/core/Grid");

var _Grid2 = _interopRequireDefault(_Grid);

var _Icon = require("@material-ui/core/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _styles = require("@material-ui/core/styles");

var _uiContainers = require("egov-ui-framework/ui-containers");

var _LoadingIndicator = require("egov-ui-framework/ui-molecules/LoadingIndicator");

var _LoadingIndicator2 = _interopRequireDefault(_LoadingIndicator);

var _actions = require("egov-ui-framework/ui-redux/screen-configuration/actions");

var _commons = require("egov-ui-framework/ui-utils/commons");

var _translationNode = require("egov-ui-kit/utils/translationNode");

var _translationNode2 = _interopRequireDefault(_translationNode);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _UploadSingleFile = require("../UploadSingleFile");

var _UploadSingleFile2 = _interopRequireDefault(_UploadSingleFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var themeStyles = function themeStyles(theme) {
  return {
    documentContainer: {
      backgroundColor: "#F2F2F2",
      padding: "16px",
      marginTop: "10px",
      marginBottom: "16px"
    },
    documentCard: {
      backgroundColor: "#F2F2F2",
      padding: "16px",
      marginTop: "10px",
      marginBottom: "16px"
    },
    documentSubCard: {
      backgroundColor: "#F2F2F2",
      padding: "16px",
      marginTop: "10px",
      marginBottom: "10px",
      border: "#d6d6d6",
      borderStyle: "solid",
      borderWidth: "1px"
    },
    documentIcon: {
      backgroundColor: "#FFFFFF",
      borderRadius: "100%",
      width: "36px",
      height: "36px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "rgba(0, 0, 0, 0.8700000047683716)",
      fontFamily: "Roboto",
      fontSize: "20px",
      fontWeight: 400,
      letterSpacing: "0.83px",
      lineHeight: "24px"
    },
    documentSuccess: {
      borderRadius: "100%",
      width: "36px",
      height: "36px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#39CB74",
      color: "white"
    },
    button: {
      margin: theme.spacing.unit,
      padding: "8px 38px"
    },
    input: {
      display: "none"
    },
    iconDiv: {
      display: "flex",
      alignItems: "center"
    },
    descriptionDiv: {
      display: "flex",
      alignItems: "center"
    },
    formControl: {
      minWidth: 250,
      padding: "0px"
    },
    fileUploadDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingTop: "5px"
    }
  };
};

var styles = {
  documentTitle: {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: 500,
    letterSpacing: "0.67px",
    lineHeight: "19px",
    paddingBottom: "5px"
  },
  documentName: {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: 400,
    letterSpacing: "0.67px",
    lineHeight: "19px"
  },
  dropdownLabel: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "12px"
  },
  containerTitle: {
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "Roboto",
    fontWeight: 500,
    letterSpacing: "0.83px",
    lineHeight: "24px",
    textAlign: "left"
  },
  containerSubTitle: {
    color: "rgb(0, 0, 0, 0.6)",
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: "20px",
    textAlign: "left"
  }
};

var requiredIcon = _react2.default.createElement(
  "sup",
  { style: { color: "#E54D42", paddingLeft: "5px" } },
  "*"
);

var DocumentList = function (_Component) {
  (0, _inherits3.default)(DocumentList, _Component);

  function DocumentList() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DocumentList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DocumentList.__proto__ || Object.getPrototypeOf(DocumentList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      uploadedDocIndex: 0,
      docUploaded: false,
      fileUploadingStatus: null
    }, _this.showLoading = function () {
      _this.setState({ fileUploadingStatus: "uploading" });
    }, _this.hideLoading = function () {
      _this.setState({ fileUploadingStatus: null });
    }, _this.getDocumentsUploaded = function (documentsUploadRedux, docsUploaded) {
      var docObj = {};
      docObj = (0, _extends5.default)({}, documentsUploadRedux, docsUploaded);
      if (Object.keys(docsUploaded).length > 0) {
        Object.keys(docObj).map(function (key) {
          Object.keys(documentsUploadRedux).map(function (docKey) {
            if (docObj[key] && docObj[key].documentCode && documentsUploadRedux[docKey] && documentsUploadRedux[docKey].dropdown && documentsUploadRedux[docKey].dropdown.value && documentsUploadRedux[docKey].dropdown.value.indexOf(docObj[key].documentCode) > -1) {
              docObj[key].documents = documentsUploadRedux[docKey].documents;
              docObj[key].dropdown = documentsUploadRedux[docKey].dropdown;
            }
          });
        });
        return docObj;
      }
      return docObj;
    }, _this.componentDidMount = function () {
      _this.initDocumentData();
    }, _this.onUploadClick = function (uploadedDocIndex) {
      _this.setState({ uploadedDocIndex: uploadedDocIndex });
    }, _this.handleDocument = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(file, fileStoreId) {
        var uploadedDocIndex, _this$props, prepareFinalObject, documentsUploadRedux, fileUrl;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                uploadedDocIndex = _this.state.uploadedDocIndex;
                _this$props = _this.props, prepareFinalObject = _this$props.prepareFinalObject, documentsUploadRedux = _this$props.documentsUploadRedux;
                _context.next = 4;
                return (0, _commons.getFileUrlFromAPI)(fileStoreId);

              case 4:
                fileUrl = _context.sent;


                prepareFinalObject("documentsUploadRedux", (0, _extends5.default)({}, documentsUploadRedux, (0, _defineProperty3.default)({}, uploadedDocIndex, (0, _extends5.default)({}, documentsUploadRedux[uploadedDocIndex], {
                  documents: [{
                    fileName: file.name,
                    fileStoreId: fileStoreId,
                    fileUrl: Object.values(fileUrl)[0]
                  }]
                }))));
                _this.hideLoading();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.removeDocument = function (remDocIndex) {
      var prepareFinalObject = _this.props.prepareFinalObject;

      prepareFinalObject("documentsUploadRedux." + remDocIndex + ".documents", undefined);
      _this.forceUpdate();
    }, _this.handleChange = function (key, event) {
      var _this$props2 = _this.props,
          documentsUploadRedux = _this$props2.documentsUploadRedux,
          prepareFinalObject = _this$props2.prepareFinalObject;

      prepareFinalObject("documentsUploadRedux", (0, _extends5.default)({}, documentsUploadRedux, (0, _defineProperty3.default)({}, key, (0, _extends5.default)({}, documentsUploadRedux[key], {
        dropdown: { value: event.target.value }
      }))));
    }, _this.getUploadCard = function (card, key) {
      var _this$props3 = _this.props,
          classes = _this$props3.classes,
          documentsUploadRedux = _this$props3.documentsUploadRedux;

      var jsonPath = "documentsUploadRedux[" + key + "].dropdown.value";
      return _react2.default.createElement(
        _Grid2.default,
        { container: true },
        _react2.default.createElement(
          _Grid2.default,
          { item: true, xs: 2, sm: 1, className: classes.iconDiv },
          documentsUploadRedux[key] && documentsUploadRedux[key].documents ? _react2.default.createElement(
            "div",
            { className: classes.documentSuccess },
            _react2.default.createElement(
              _Icon2.default,
              null,
              _react2.default.createElement(
                "i",
                { "class": "material-icons" },
                "done"
              )
            )
          ) : _react2.default.createElement(
            "div",
            { className: classes.documentIcon },
            _react2.default.createElement(
              "span",
              null,
              key + 1
            )
          )
        ),
        _react2.default.createElement(
          _Grid2.default,
          {
            item: true,
            xs: 10,
            sm: 5,
            md: 4,
            align: "left",
            className: classes.descriptionDiv
          },
          _react2.default.createElement(_uiContainers.LabelContainer, {
            labelKey: (0, _commons.getTransformedLocale)(card.name),
            style: styles.documentName
          }),
          card.required && requiredIcon
        ),
        _react2.default.createElement(
          _Grid2.default,
          { item: true, xs: 12, sm: 6, md: 4 },
          card.dropdown && _react2.default.createElement(_uiContainers.AutosuggestContainer, {
            select: true,
            label: { labelKey: (0, _commons.getTransformedLocale)(card.dropdown.label) },
            placeholder: { labelKey: card.dropdown.label },
            data: card.dropdown.menu,
            disabled: card.dropdown.disabled && documentsUploadRedux[key] && documentsUploadRedux[key].documents ? true : false,
            optionValue: "code",
            optionLabel: "label",
            required: card.required,
            onChange: function onChange(event) {
              return _this.handleChange(key, event);
            },
            jsonPath: jsonPath,
            className: "autocomplete-dropdown",
            labelsFromLocalisation: true
          })
        ),
        _react2.default.createElement(
          _Grid2.default,
          {
            item: true,
            xs: 12,
            sm: 12,
            md: 3,
            className: classes.fileUploadDiv
          },
          _react2.default.createElement(_UploadSingleFile2.default, {
            id: "jk-document-id-" + key,
            classes: _this.props.classes,
            handleFileUpload: function handleFileUpload(e) {
              return (0, _commons.handleFileUpload)(e, _this.handleDocument, _this.props, _this.showLoading, _this.hideLoading);
            },
            uploaded: documentsUploadRedux[key] && documentsUploadRedux[key].documents ? true : false,
            removeDocument: function removeDocument() {
              return _this.removeDocument(key);
            },
            documents: documentsUploadRedux[key] && documentsUploadRedux[key].documents,
            onButtonClick: function onButtonClick() {
              return _this.onUploadClick(key);
            },
            inputProps: _this.props.inputProps,
            buttonLabel: _this.props.buttonLabel,
            disabled: card.disabled && documentsUploadRedux[key] && documentsUploadRedux[key].documents ? true : false
          })
        )
      );
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DocumentList, [{
    key: "initDocumentData",
    value: function initDocumentData() {
      var _props = this.props,
          ptDocumentsList = _props.ptDocumentsList,
          _props$documentsUploa = _props.documentsUploadRedux,
          documentsUploadRedux = _props$documentsUploa === undefined ? {} : _props$documentsUploa,
          prepareFinalObject = _props.prepareFinalObject;

      var index = 0;
      var docsUploaded = {};
      ptDocumentsList.forEach(function (docType) {
        docType.cards && docType.cards.forEach(function (card) {
          if (card.subCards) {
            card.subCards.forEach(function (subCard) {
              var oldDocType = (0, _get2.default)(documentsUploadRedux, "[" + index + "].documentType");
              var oldDocCode = (0, _get2.default)(documentsUploadRedux, "[" + index + "].documentCode");
              var oldDocSubCode = (0, _get2.default)(documentsUploadRedux, "[" + index + "].documentSubCode");
              if (oldDocType != docType.code || oldDocCode != card.name || oldDocSubCode != subCard.name) {
                docsUploaded[index] = {
                  documentType: docType.code,
                  documentCode: card.name,
                  documentSubCode: subCard.name
                };
              }
              index++;
            });
          } else {
            var oldDocType = (0, _get2.default)(documentsUploadRedux, "[" + index + "].documentType");
            var oldDocCode = (0, _get2.default)(documentsUploadRedux, "[" + index + "].documentCode");
            if (oldDocType != docType.code || oldDocCode != card.name) {
              docsUploaded[index] = {
                documentType: docType.code,
                documentCode: card.name,
                isDocumentRequired: card.required,
                isDocumentTypeRequired: card.dropdown ? card.dropdown.required : false
              };
              if (card.dropdown && card.dropdown.value) {
                docsUploaded[index]['dropdown'] = {};
                docsUploaded[index]['dropdown']['value'] = card.dropdown.value;
              }
            }
            if (card.dropdown && card.dropdown.value) {
              docsUploaded[index] = docsUploaded[index] ? docsUploaded[index] : {};
              docsUploaded[index]['dropdown'] = docsUploaded[index]['dropdown'] ? docsUploaded[index]['dropdown'] : {};
              docsUploaded[index]['dropdown']['value'] = card.dropdown.value;
              docsUploaded[index]['documentType'] = docType.code;
              docsUploaded[index]['documentCode'] = card.name;
              docsUploaded[index]['isDocumentRequired'] = card.required;
              docsUploaded[index]['isDocumentTypeRequired'] = card.dropdown ? card.dropdown.required : false;
            }
            index++;
          }
        });
      });
      if (documentsUploadRedux && Object.keys(documentsUploadRedux) && Object.keys(documentsUploadRedux).length) {
        if (!this.state.docUploaded) {
          prepareFinalObject("documentsUploadRedux", this.getDocumentsUploaded(documentsUploadRedux, docsUploaded));
          this.setState({ docUploaded: true });
        }
      } else {
        prepareFinalObject("documentsUploadRedux", docsUploaded);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.ptDocumentsList !== prevProps.ptDocumentsList) {
        this.initDocumentData();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          classes = _props2.classes,
          ptDocumentsList = _props2.ptDocumentsList;

      var index = 0;
      var fileUploadingStatus = this.state.fileUploadingStatus;

      return _react2.default.createElement(
        "div",
        null,
        fileUploadingStatus == "uploading" && _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(_LoadingIndicator2.default, null)
        ),
        ptDocumentsList && ptDocumentsList.map(function (container) {
          return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(_translationNode2.default, { fontSize: "20px",
              label: "PT_REQUIRED_DOCUMENTS",
              labelStyle: styles.containerTitle
            }),
            _react2.default.createElement(_translationNode2.default, { fontSize: "14px",
              label: "PT_REQUIRED_DOC_SUB_HEADING",
              labelStyle: styles.containerSubTitle
            }),
            container.cards.map(function (card) {
              return _react2.default.createElement(
                "div",
                { className: classes.documentContainer },
                card.hasSubCards && _react2.default.createElement(_uiContainers.LabelContainer, {
                  labelKey: card.name,
                  style: styles.documentTitle
                }),
                card.hasSubCards && card.subCards.map(function (subCard) {
                  return _react2.default.createElement(
                    "div",
                    { className: classes.documentSubCard },
                    _this3.getUploadCard(subCard, index++)
                  );
                }),
                !card.hasSubCards && _react2.default.createElement(
                  "div",
                  null,
                  _this3.getUploadCard(card, index++)
                )
              );
            })
          );
        })
      );
    }
  }]);
  return DocumentList;
}(_react.Component);

DocumentList.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  var screenConfiguration = state.screenConfiguration;
  var moduleName = screenConfiguration.moduleName;

  var documentsUploadRedux = (0, _get2.default)(screenConfiguration.preparedFinalObject, "documentsUploadRedux", {});
  Object.keys(documentsUploadRedux).map(function (key) {
    var documentCode = documentsUploadRedux[key] && documentsUploadRedux[key].dropdown && documentsUploadRedux[key].dropdown.value || '';
    var codes = documentCode && documentCode.split('.');
    if (codes && codes.length == 1 && codes[0].length > 0) {
      documentsUploadRedux[key].dropdown.value = "OWNER.REGISTRATIONPROOF." + documentCode;
    }
  });
  return { documentsUploadRedux: documentsUploadRedux, moduleName: moduleName };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    prepareFinalObject: function prepareFinalObject(jsonPath, value) {
      return dispatch((0, _actions.prepareFinalObject)(jsonPath, value));
    }
  };
};

exports.default = (0, _styles.withStyles)(themeStyles)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DocumentList));