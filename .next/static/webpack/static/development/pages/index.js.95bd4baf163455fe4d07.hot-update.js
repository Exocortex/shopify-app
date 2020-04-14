webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SnippetGen.js":
/*!**********************************!*\
  !*** ./components/SnippetGen.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query {\n      shop {\n        metafield(namespace: \"threekit\", key: \"token\") {\n          id\n          value\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






function SnippetGen(props) {
  var GET_TK_TOKEN = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject()); // function copyToClip(el){
  //   el.execCommand('copy');
  // }

  var createSnippet = function createSnippet(token) {
    var newTitle = props.title.replace(/\s/g, "");

    __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
      query: GET_TK_TOKEN,
      onCompleted: function onCompleted(data) {
        return setValue(createSnippet(!data.shop.metafield ? "no token" : data.shop.metafield.value));
      }
    }, function (_ref) {
      var loading = _ref.loading,
          error = _ref.error,
          data = _ref.data,
          refetch = _ref.refetch;
      if (loading) return null;
      if (error) return "Error! ".concat(error);
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        open: props.active,
        onClose: props.handleChange,
        title: props.title,
        primaryAction: {
          content: "Close",
          onAction: props.handleChange
        }
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Modal"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextContainer"], null, __jsx("p", null, "Copy and paste the HTML to embed a Threekit player with the selected product. Use it on blog posts, home pages, or anywhere HTML input is supported."))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Modal"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextContainer"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
        multiline: true,
        value: value
      }))));
    });

    return "<div id=\"tkplayer-".concat(newTitle, "\" style=\"height: 500px; width: 500px;\">\n        <script>\n                window.threekitPlayer({\n                authToken: \"").concat(token, "\",\n                el: document.getElementById(\"tkplayer-").concat(newTitle, "\"),\n                assetId: '").concat(props.assetid, "',\n                showConfigurator: false,\n                showAR: ").concat(props.ar, "\n              })\n              .then(async api => {\n                 window.player = api;\n                 window.configurator = await api.getConfigurator();\n          });\n        </script>");
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      value = _useState[0],
      setValue = _useState[1];

  return __jsx("div", null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: GET_TK_TOKEN,
    onCompleted: function onCompleted(data) {
      return setValue(createSnippet(!data.shop.metafield ? "no token" : data.shop.metafield.value));
    }
  }, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data,
        refetch = _ref2.refetch;
    if (loading) return null;
    if (error) return "Error! ".concat(error);
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
      open: props.active,
      onClose: props.handleChange,
      title: props.title,
      primaryAction: {
        content: "Close",
        onAction: props.handleChange
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Modal"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextContainer"], null, __jsx("p", null, "Copy and paste the HTML to embed a Threekit player with the selected product. Use it on blog posts, home pages, or anywhere HTML input is supported."))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Modal"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextContainer"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
      multiline: true,
      value: value,
      id: "textBox"
    }))));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SnippetGen);

/***/ })

})
//# sourceMappingURL=index.js.95bd4baf163455fe4d07.hot-update.js.map