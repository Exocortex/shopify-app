webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ThreekitForm.js":
/*!************************************!*\
  !*** ./components/ThreekitForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var _components_SnippetGen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SnippetGen */ "./components/SnippetGen.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation($input: ProductInput!) {\n      productUpdate(input: $input) {\n        product {\n          metafields(first: 100) {\n            edges {\n              node {\n                id\n                namespace\n                key\n                value\n              }\n            }\n          }\n        }\n      }\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query($id: ID!) {\n      product(id: $id) {\n        metafield(namespace: \"threekit\", key: \"ARen\") {\n          value\n          id\n        }\n      }\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query($id: ID!) {\n      product(id: $id) {\n        metafield(namespace: \"threekit\", key: \"pdp\") {\n          value\n          id\n        }\n      }\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query($id: ID!) {\n      product(id: $id) {\n        metafield(namespace: \"threekit\", key: \"assetid\") {\n          value\n          id\n        }\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    mutation($input: ProductInput!) {\n      productUpdate(input: $input) {\n        product {\n          metafields(first: 100) {\n            edges {\n              node {\n                id\n                namespace\n                key\n                value\n              }\n            }\n          }\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








function ThreekitForm(props) {
  // Declare a new state variable, which we'll call "count"
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      tkMetaId = _useState2[0],
      setTkMetaId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isSaved = _useState3[0],
      setIsSaved = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      isPdp = _useState4[0],
      setIsPdp = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isChecked = _useState5[0],
      setIsChecked = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      isAr = _useState6[0],
      setIsAr = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      arChecked = _useState7[0],
      setArChecked = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      modalActive = _useState8[0],
      setModalActive = _useState8[1];

  var handleModalChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return setModalActive(!modalActive);
  }, [modalActive]);
  var UPDATE_TK_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());
  var GET_META_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject2());
  var IS_PLAYER_PDP = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject3());
  var IS_AR_ENABLED = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject4());
  var UPDATE_TK_ATTR = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject5());
  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (newValue) {
    return setValue(newValue);
  }, []);

  var setCheck = function setCheck(val) {
    return setIsChecked(val);
  };

  var setArCheck = function setArCheck(val) {
    return setArChecked(val);
  };

  var updateMeta = function updateMeta(data, bool, namespace, key, obj, action) {
    var productVariableInput;

    if (!data.product.metafield) {
      bool ? productVariableInput = {
        id: props.id.id,
        metafields: [{
          namespace: namespace,
          key: key,
          value: "false",
          valueType: "STRING"
        }]
      } : productVariableInput = {
        id: props.id.id,
        metafields: [{
          namespace: namespace,
          key: key,
          value: "true",
          valueType: "STRING"
        }]
      };
    } else {
      bool ? productVariableInput = {
        id: props.id.id,
        metafields: [{
          namespace: namespace,
          key: key,
          value: "false",
          valueType: "STRING",
          id: obj.product.metafield.id
        }]
      } : productVariableInput = {
        id: props.id.id,
        metafields: [{
          namespace: namespace,
          key: key,
          value: "true",
          valueType: "STRING",
          id: obj.product.metafield.id
        }]
      };
    }

    action({
      variables: {
        input: productVariableInput
      }
    });
  };

  return __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
    distribution: "fill"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["FormLayout"], null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: props.query,
    variables: props.id
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        data = _ref.data,
        refetch = _ref.refetch;
    if (loading) return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_5__["LoadingText"], null);
    if (error) return "Error! ".concat(error);
    return __jsx("div", null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: GET_META_ID,
      variables: props.id,
      onCompleted: function onCompleted(data) {
        return setTkMetaId(data);
      }
    }, function (_ref2) {
      var loading = _ref2.loading,
          error = _ref2.error,
          data = _ref2.data,
          refetch = _ref2.refetch;
      if (loading) return null;
      if (error) return "Error! ".concat(error);
      return null;
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"].Item, null, __jsx("h3", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextStyle"], {
      variation: "strong"
    }, props.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"].Item, null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: UPDATE_TK_ID,
      onCompleted: function onCompleted() {
        return setIsSaved(true);
      }
    }, function (handleSubmit, _ref3) {
      var err = _ref3.err,
          res = _ref3.res;

      var showError = err && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Banner"], {
        status: "critical"
      }, err.message);

      return __jsx("div", null, !isSaved ? __jsx("div", null) : __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Toast"], {
        content: "Saved",
        onDismiss: function onDismiss() {
          return setIsSaved(false);
        }
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Layout"].Section, null, showError), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
        value: value,
        onFocus: function onFocus() {
          return setValue(!data.product.metafield ? "No Threekit ID" : data.product.metafield.value);
        },
        onChange: handleChange,
        id: data.product.id,
        ariaControls: data.product.id,
        placeholder: !data.product.metafield ? "No Threekit ID" : data.product.metafield.value,
        connectedRight: __jsx("div", null, __jsx(_components_SnippetGen__WEBPACK_IMPORTED_MODULE_6__["default"], {
          handleChange: handleModalChange,
          active: modalActive,
          title: "".concat(props.title),
          assetid: !data.product.metafield ? "No Threekit ID" : data.product.metafield.value,
          ar: "true",
          env: "preview"
        }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          primary: true,
          onClick: function onClick() {
            var productVariableInput;

            if (!data.product.metafield) {
              productVariableInput = {
                id: props.id.id,
                metafields: [{
                  namespace: "threekit",
                  key: "assetid",
                  value: value,
                  valueType: "STRING"
                }]
              };
            } else {
              productVariableInput = {
                id: props.id.id,
                metafields: [{
                  namespace: "threekit",
                  key: "assetid",
                  value: value,
                  valueType: "STRING",
                  id: tkMetaId.product.metafield.id
                }]
              };
            }

            handleSubmit({
              variables: {
                input: productVariableInput
              }
            });
          }
        }, "Save"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: handleModalChange
        }, "Embed this product"))
      }));
    })));
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"].Item, null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: IS_PLAYER_PDP,
    variables: props.id,
    onCompleted: function onCompleted(data) {
      return setIsPdp(data);
    }
  }, function (_ref4) {
    var loading = _ref4.loading,
        error = _ref4.error,
        data = _ref4.data,
        refetch = _ref4.refetch;
    if (loading) return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_5__["LoadingText"], null);
    if (error) return "Error! ".concat(error);
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: UPDATE_TK_ATTR,
      onCompleted: function onCompleted() {
        return setIsSaved(true);
      }
    }, function (handleSubmit, _ref5) {
      var err = _ref5.err,
          res = _ref5.res;

      var showError = err && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Banner"], {
        status: "critical"
      }, err.message);

      if (!data.product.metafield || data.product.metafield.value == "false") {
        Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
          setIsChecked(false);
        }, [setIsChecked]);
      } else {
        Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
          setIsChecked(true);
        }, [setIsChecked]);
      }

      return __jsx("div", null, __jsx("p", null, "PDP Controls"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
        label: "Display on PDP",
        checked: isChecked,
        onChange: function onChange() {
          return updateMeta(data, isChecked, "threekit", "pdp", isPdp, handleSubmit);
        },
        onFocus: function onFocus() {
          return isChecked ? setCheck(false) : setCheck(true);
        }
      }));
    });
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Stack"].Item, null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: IS_AR_ENABLED,
    variables: props.id,
    onCompleted: function onCompleted(data) {
      return setIsAr(data);
    }
  }, function (_ref6) {
    var loading = _ref6.loading,
        error = _ref6.error,
        data = _ref6.data,
        refetch = _ref6.refetch;
    if (loading) return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_5__["LoadingText"], null);
    if (error) return "Error! ".concat(error);
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      mutation: UPDATE_TK_ATTR,
      onCompleted: function onCompleted() {
        return setIsSaved(true);
      }
    }, function (handleArSubmit, _ref7) {
      var err = _ref7.err,
          res = _ref7.res;

      var showError = err && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Banner"], {
        status: "critical"
      }, err.message);

      if (!data.product.metafield || data.product.metafield.value == "false") {
        Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
          setArChecked(false);
        }, [setArChecked]);
      } else {
        Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
          setArChecked(true);
        }, [setArChecked]);
      }

      return __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
        label: "AR Enabled",
        checked: arChecked,
        onChange: function onChange() {
          return updateMeta(data, arChecked, "threekit", "ARen", isAr, handleArSubmit);
        },
        onFocus: function onFocus() {
          return arChecked ? setArCheck(false) : setArCheck(true);
        }
      }));
    });
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ThreekitForm);

/***/ })

})
//# sourceMappingURL=index.js.4f04fea62c3636eca64b.hot-update.js.map