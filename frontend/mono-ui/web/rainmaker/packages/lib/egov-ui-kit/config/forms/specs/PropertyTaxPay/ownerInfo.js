"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _utils = require("egov-ui-framework/ui-config/screens/specs/utils");

var _commons = require("egov-ui-framework/ui-utils/commons.js");

var _actions = require("egov-ui-kit/redux/form/actions");

var _PTCommon = require("egov-ui-kit/utils/PTCommon");

var _get2 = require("lodash/get");

var _get3 = _interopRequireDefault(_get2);

var _set = require("lodash/set");

var _set2 = _interopRequireDefault(_set);

var _enableDependentFields = require("./utils/enableDependentFields");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formConfig = {
  name: "ownerInfo",
  fields: {
    ownerName: {
      id: "ownerName",
      jsonPath: "Properties[0].propertyDetails[0].owners[0].name",
      type: "textfield",
      floatingLabelText: "PT_OWNER_NAME",
      hintText: "PT_FORM3_OWNER_NAME_PLACEHOLDER",
      required: true,
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      pattern: (0, _utils.getPattern)("Name"),
      errorMessage: "PT_NAME_ERROR_MESSAGE"
    },
    ownerMobile: {
      id: "ownerMobile",
      jsonPath: "Properties[0].propertyDetails[0].owners[0].mobileNumber",
      type: "textfield",
      floatingLabelText: "PT_FORM3_MOBILE_NO",
      hintText: "PT_FORM3_MOBILE_NO_PLACEHOLDER",
      required: true,
      pattern: (0, _utils.getPattern)("MobileNo"),
      errorMessage: "PT_MOBILE_NUMBER_ERROR_MESSAGE",
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 }
    }, ownerAlterMobile: {
      id: "ownerAlterMobile",
      jsonPath: "Properties[0].propertyDetails[0].owners[0].alternatemobilenumber",
      type: "textfield",
      floatingLabelText: "PT_FORM3_ALT_MOBILE_NO",
      hintText: "PT_FORM3_ALT_MOBILE_NO_PLACEHOLDER",
      required: false,
      pattern: (0, _utils.getPattern)("MobileNo"),
      errorMessage: "PT_MOBILE_NUMBER_ERROR_MESSAGE",
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 }
    },
    ownerGuardian: {
      id: "ownerGuardian",
      jsonPath: "Properties[0].propertyDetails[0].owners[0].fatherOrHusbandName",
      type: "textfield",
      floatingLabelText: "PT_SEARCHPROPERTY_TABEL_GUARDIANNAME",
      hintText: "PT_FORM3_GUARDIAN_PLACEHOLDER",
      pattern: (0, _utils.getPattern)("Name"),
      required: true,
      errorMessage: "PT_NAME_ERROR_MESSAGE",
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 }
    },
    ownerEmail: {
      id: "ownerEmail",
      jsonPath: "Properties[0].propertyDetails[0].owners[0].emailId",
      type: "textfield",
      floatingLabelText: "PT_FORM3_EMAIL_ID",
      hintText: "PT_FORM3_EMAIL_ID_PLACEHOLDER",
      errorMessage: "PT_EMAIL_ID_ERROR_MESSAGE",
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      pattern: (0, _utils.getPattern)("Email")
    },
    ownerAddress: {
      id: "ownerAddress",
      jsonPath: "Properties[0].propertyDetails[0].owners[0].permanentAddress",
      type: "textfield",
      floatingLabelText: "PT_FORM3_CORRESPONDENCE_ADDRESS",
      hintText: "PT_FORM3_CORRESPONDENCE_ADDRESS_PLACEHOLDER",
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      pattern: (0, _utils.getPattern)("Address"),
      errorMessage: "PT_ADDRESS_ERROR_MESSAGE"
    },
    ownerRelationship: {
      id: "ownerRelationship",
      required: true,
      jsonPath: "Properties[0].propertyDetails[0].owners[0].relationship",
      type: "AutocompleteDropdown",
      localePrefix: "PT_RELATION",
      labelsFromLocalisation: false,
      floatingLabelText: "PT_FORM3_RELATIONSHIP",
      hintText: "",
      gridDefination: {
        xs: 12,
        sm: 6
      },
      dropDownData: [{ label: (0, _commons.getLocaleLabels)("Father's Name", "PT_ACK_LOCALIZATION_FATHERS_NAME"), value: "FATHER" }, { label: (0, _commons.getLocaleLabels)("Husband's Name", "PT_ACK_LOCALIZATION_HUSBAND_NAME"), value: "HUSBAND" }],
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      formName: "ownerInfo"
    },
    ownerCategory: {
      id: "ownerCategory",
      required: true,
      localePrefix: { moduleName: "PropertyTax", masterName: "OwnerType" },
      jsonPath: "Properties[0].propertyDetails[0].owners[0].ownerType",
      type: "AutocompleteDropdown",
      defaultSort: false,
      floatingLabelText: "PT_FORM3_SPECIAL_CATEGORY",
      hintText: "PT_COMMONS_SELECT_PLACEHOLDER",
      dropDownData: [],
      gridDefination: {
        xs: 12,
        sm: 6
      },
      fullWidth: true,
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      formName: "ownerInfo",
      updateDependentFields: function updateDependentFields(_ref) {
        var formKey = _ref.formKey,
            sourceField = _ref.field,
            dispatch = _ref.dispatch,
            state = _ref.state;
        var value = sourceField.value;

        var dependentFields = ["ownerCategoryId", "ownerCategoryIdType"];
        var documentTypes = (0, _get3.default)(state, (process.env.REACT_APP_NAME === "Citizen" ? "citizen" : "employee") + ".mdms.document.MdmsRes.PropertyTax.OwnerTypeDocument", []).filter(function (docu) {
          return docu.ownerTypeCode === value;
        }).reduce(function (acc, curr) {
          var currAcc = [].concat((0, _toConsumableArray3.default)(acc));
          var dropDownData = {
            label: curr.name,
            value: curr.code
          };
          currAcc.push(dropDownData);
          return currAcc;
        }, []);
        documentTypes && documentTypes.length > 0 && documentTypes.forEach(function (data) {
          data.label = (0, _commons.getLocaleLabels)("PROPERTYTAX_OWNERTYPEDOCUMENT_" + data.value, "PROPERTYTAX_OWNERTYPEDOCUMENT_" + data.value);
        });
        dispatch((0, _actions.setFieldProperty)(formKey, "ownerCategoryIdType", "dropDownData", documentTypes));
        dispatch((0, _actions.handleFieldChange)(formKey, "ownerCategoryIdType", (0, _get3.default)(documentTypes, "[0].value", "")));
        dispatch((0, _actions.setFieldProperty)(formKey, "ownerCategoryIdType", "value", (0, _get3.default)(documentTypes, "[0].value", "")));
        switch (value) {
          case "NONE":
            dispatch((0, _actions.handleFieldChange)(formKey, "ownerCategoryId", null));
            (0, _enableDependentFields.setDependentFields)(dependentFields, dispatch, formKey, true);
            break;
          case "WIDOW":
            dispatch((0, _actions.setFieldProperty)(formKey, "ownerGender", "value", "Female"));
            (0, _enableDependentFields.setDependentFields)(dependentFields, dispatch, formKey, false);
            break;
          default:
            (0, _enableDependentFields.setDependentFields)(dependentFields, dispatch, formKey, false);
            break;
        }
      },
      updateOnSetField: function updateOnSetField(store, action) {
        var dispatch = store.dispatch;
        var state = store.getState();
        var fieldKey = action.fieldKey,
            formKey = action.formKey,
            propertyValue = action.propertyValue;

        var dependentFields = ["ownerCategoryId", "ownerCategoryIdType"];
        var currentCategory = (0, _get3.default)(state, "form." + formKey + ".fields." + fieldKey + ".value", "NONE");
        var documentTypes = (0, _get3.default)(state, (process.env.REACT_APP_NAME === "Citizen" ? "citizen" : "employee") + ".mdms.document.MdmsRes.PropertyTax.OwnerTypeDocument", []).filter(function (docu) {
          return docu.ownerTypeCode === currentCategory;
        }).reduce(function (acc, curr) {
          var currAcc = [].concat((0, _toConsumableArray3.default)(acc));
          var dropDownData = {
            label: curr.name,
            value: curr.code
          };
          currAcc.push(dropDownData);
          return currAcc;
        }, []);
        documentTypes && documentTypes.length > 0 && documentTypes.forEach(function (data) {
          data.label = (0, _commons.getLocaleLabels)("PROPERTYTAX_OWNERTYPEDOCUMENT_" + data.value, "PROPERTYTAX_OWNERTYPEDOCUMENT_" + data.value);
        });
        dispatch((0, _actions.setFieldProperty)(formKey, "ownerCategoryIdType", "dropDownData", documentTypes));
        dispatch((0, _actions.setFieldProperty)(formKey, "ownerCategoryIdType", "value", (0, _get3.default)(documentTypes, "[0].value", "")));
        if (propertyValue.length > 0) {
          if (currentCategory === "NONE") {
            (0, _enableDependentFields.setDependentFields)(dependentFields, dispatch, formKey, true);
          } else {
            (0, _enableDependentFields.setDependentFields)(dependentFields, dispatch, formKey, false);
          }
        }
        return action;
      }
    },
    ownerCategoryId: {
      id: "ownerCategoryId",
      jsonPath: "Properties[0].propertyDetails[0].owners[0].document.documentUid",
      required: true,
      type: "textfield",
      floatingLabelText: "PT_FORM3_DOCUMENT_ID_NO",
      hintText: "PT_FORM3_DOCUMENT_ID_NO_PLACEHOLDER",
      toolTip: true,
      toolTipMessage: "PT_DOCUMENT_ID_TOOLTIP_MESSAGE",
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      hideField: true
    },
    ownerCategoryIdType: {
      id: "ownerCategoryIdType",
      jsonPath: "Properties[0].propertyDetails[0].owners[0].document.documentType",
      required: true,
      localePrefix: { moduleName: "PropertyTax", masterName: "OwnerTypeDocument" },
      type: "AutocompleteDropdown",
      floatingLabelText: "PT_FORM3_DOCUMENT_ID_TYPE",
      fullWidth: true,
      hintText: "PT_COMMONS_SELECT_PLACEHOLDER",
      toolTip: true,
      toolTipMessage: "PT_DOCUMENT_ID_TYPE_TOOLTIP_MESSAGE",
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      dropDownData: [],
      hideField: true,
      gridDefination: {
        xs: 12,
        sm: 6
      },
      formName: "ownerInfo",
      updateDependentFields: function updateDependentFields(_ref2) {
        var formKey = _ref2.formKey,
            sourceField = _ref2.field,
            dispatch = _ref2.dispatch,
            state = _ref2.state;
        var value = sourceField.value;

        if (value === "Aadhar") {
          dispatch((0, _actions.setFieldProperty)(formKey, "ownerCategoryId", "pattern", /^[0-9]{12}$/i));
          dispatch((0, _actions.setFieldProperty)(formKey, "ownerCategoryId", "errorMessage", "Enter valid 12 digits aadhar no"));
        } else {
          dispatch((0, _actions.setFieldProperty)(formKey, "ownerCategoryId", "pattern", ""));
          dispatch((0, _actions.setFieldProperty)(formKey, "ownerCategoryId", "errorMessage", ""));
        }
      }
    },
    ownerGender: {
      id: "ownerGender",
      jsonPath: "Properties[0].propertyDetails[0].owners[0].gender"
    },
    isSameAsPropertyAddress: {
      id: "rcpt",
      type: "checkbox",
      jsonPath: "Properties[0].propertyDetails[0].owners[0].isCorrespondenceAddress",
      errorMessage: "",
      floatingLabelText: "PT_FORM3_ADDRESS_CHECKBOX",
      value: "",
      updateDependentFields: function updateDependentFields(_ref3) {
        var formKey = _ref3.formKey,
            sourceField = _ref3.field,
            dispatch = _ref3.dispatch,
            state = _ref3.state;
        var iscorrAddrSameProp = sourceField.value;

        var _get = (0, _get3.default)(state, "form.propertyAddress.fields", {}),
            _get$city = _get.city,
            city = _get$city === undefined ? "" : _get$city,
            _get$colony = _get.colony,
            colony = _get$colony === undefined ? "" : _get$colony,
            _get$houseNumber = _get.houseNumber,
            houseNumber = _get$houseNumber === undefined ? "" : _get$houseNumber,
            _get$mohalla = _get.mohalla,
            mohalla = _get$mohalla === undefined ? "" : _get$mohalla,
            _get$pincode = _get.pincode,
            pincode = _get$pincode === undefined ? "" : _get$pincode,
            _get$street = _get.street,
            street = _get$street === undefined ? "" : _get$street;

        var mohallaDetails = mohalla && mohalla.dropDownData && mohalla.dropDownData.find(function (mohallaData) {
          return mohallaData.value === (0, _get3.default)(mohalla, "value", "");
        });
        if (iscorrAddrSameProp) {
          var correspondingAddress = ["" + (0, _get3.default)(houseNumber, "value", ""), "" + (0, _get3.default)(colony, "value", ""), "" + (0, _get3.default)(street, "value", ""), "" + (0, _get3.default)(mohallaDetails, "label", ""), "" + (0, _get3.default)(city, "value", "").split(".").pop(), "" + (0, _get3.default)(pincode, "value", "")].join(", ").replace(/^(,\s)+|(,\s)+$/g, "").replace(/(,\s){2,}/g, ", ").replace(":", "");
          dispatch((0, _actions.setFieldProperty)(formKey, "ownerAddress", "value", correspondingAddress));
          dispatch((0, _actions.handleFieldChange)(formKey, "ownerAddress", correspondingAddress));
        } else {
          dispatch((0, _actions.setFieldProperty)(formKey, "ownerAddress", "value", ""));
        }
      }
    }
  },
  beforeInitForm: function beforeInitForm(action, store, dispatch) {
    try {
      var state = store.getState();
      var OwnerTypes = (0, _get3.default)(state, "common.generalMDMSDataById.OwnerType");
      // let financialYearFromQuery = window.location.search.split("FY=")[1];
      // financialYearFromQuery = financialYearFromQuery.split("&")[0];
      // const dropdownData = getOwnerCategoryByYear(Object.values(OwnerTypes), financialYearFromQuery);
      var dropdownData = (0, _PTCommon.getOwnerCategory)(Object.values(OwnerTypes));
      dropdownData && dropdownData.length > 0 && dropdownData.forEach(function (data) {
        data.label = (0, _commons.getLocaleLabels)("COMMON_MASTERS_OWNERTYPE_" + data.value, "COMMON_MASTERS_OWNERTYPE_" + data.value);
      });
      (0, _set2.default)(action, "form.fields.ownerCategory.dropDownData", dropdownData);
      var ownerShipType = (0, _get3.default)(state, "form.ownershipType.fields.typeOfOwnership.value", "");
      if (ownerShipType === "SINGLEOWNER") {
        (0, _set2.default)(action, "form.fields.ownerGender.value", (0, _get3.default)(state, "form.ownerInfo.fields.ownerGender.value", "Male"));
      }
      return action;
    } catch (e) {
      return action;
    }
  },
  afterInitForm: function afterInitForm(action, store, dispatch) {
    try {
      var formKey = (0, _get3.default)(action, "form.name", "");
      var state = store.getState();
      if ((0, _get3.default)(state, "form." + formKey + ".fields.ownerRelationship.value", "NONE") === "NONE") {
        dispatch((0, _actions.handleFieldChange)(formKey, "ownerRelationship", "FATHER"));
      }

      if ((0, _get3.default)(state, "form." + formKey + ".fields.ownerCategory.value", "NONE") === "NONE") {
        dispatch((0, _actions.setFieldProperty)(formKey, "ownerCategoryId", "hideField", true));
        dispatch((0, _actions.setFieldProperty)(formKey, "ownerCategoryIdType", "hideField", true));
      } else {
        dispatch((0, _actions.setFieldProperty)(formKey, "ownerCategoryId", "hideField", false));
        dispatch((0, _actions.setFieldProperty)(formKey, "ownerCategoryIdType", "hideField", false));
      }
      var currentCategory = (0, _get3.default)(state, "form." + action.form.name + ".fields.ownerCategory.value", "NONE");
      var documentTypes = (0, _get3.default)(state, (process.env.REACT_APP_NAME === "Citizen" ? "citizen" : "employee") + ".mdms.document.MdmsRes.PropertyTax.OwnerTypeDocument", []).filter(function (docu) {
        return docu.ownerTypeCode === currentCategory;
      }).reduce(function (acc, curr) {
        var currAcc = [].concat((0, _toConsumableArray3.default)(acc));
        var dropDownData = {
          label: curr.name,
          value: curr.code
        };
        currAcc.push(dropDownData);
        return currAcc;
      }, []);
      documentTypes && documentTypes.length > 0 && documentTypes.forEach(function (data) {
        data.label = (0, _commons.getLocaleLabels)("PROPERTYTAX_OWNERTYPEDOCUMENT_" + data.value, "PROPERTYTAX_OWNERTYPEDOCUMENT_" + data.value);
      });
      dispatch((0, _actions.setFieldProperty)(action.form.name, "ownerCategoryIdType", "dropDownData", documentTypes));
      return action;
    } catch (e) {
      return action;
    }
  },
  action: "",
  redirectionRoute: "",
  saveUrl: "",
  isFormValid: false
};

exports.default = formConfig;