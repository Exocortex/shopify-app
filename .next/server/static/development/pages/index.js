module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AllProductResource.js":
/*!******************************************!*\
  !*** ./components/AllProductResource.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThreekitForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThreekitForm */ "./components/ThreekitForm.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const GET_ALL_PRODCUTS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
query {
  products(first: 50) {
    edges {
      cursor
      node {
        id
        title
        handle
        descriptionHtml
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
      }
    }
  }
}
`;
const GET_TK_ASSET_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query($id: ID!) {
    product(id: $id) {
      metafield(namespace: "threekit", key: "assetid") {
        value
        id
      }
    }
  }
`;

class AllProductResource extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      ids: [],
      tkId: {},
      field: "",
      active: false,
      checked: false,
      tkMetaFieldId: ""
    });

    _defineProperty(this, "_queryMe", data => {
      if (data.shop.metafield == null) {
        return null;
      } else {
        const str = JSON.parse(data.shop.metafield.value);
        let arr;
        arr = str.ids.split(",");
        this.setState({
          ids: arr.map(id => "gid://shopify/Product/" + id)
        });
      }
    });

    _defineProperty(this, "_setTkID", data => {
      this.setState({
        tkId: data
      });
    });

    _defineProperty(this, "_setTkMetafieldId", data => {
      this.setState({
        tkMetaFieldId: JSON.stringify(data)
      });
    });

    _defineProperty(this, "getTkAsset", () => {
      return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: GET_TK_ASSET_ID,
        onCompleted: data => this._setTkID(data)
      }, () => {
        return null;
      });
    });

    _defineProperty(this, "handleTKChange", e => {
      this.setState({
        field: e
      });
    });

    _defineProperty(this, "handleCheck", () => {
      !this.state.checked ? this.setState({
        checked: true
      }) : this.setState({
        checked: false
      });
    });

    _defineProperty(this, "handleToggle", () => !this.state.active ? this.setState({
      active: true
    }) : this.setState({
      active: false
    }));
  }

  render() {
    return __jsx("div", {
      style: {
        margin: 'auto',
        width: '95%'
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Frame"], null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: GET_ALL_PRODCUTS
    }, ({
      data,
      loading,
      error
    }) => {
      if (loading) return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_7__["LoadingScreen"], null);
      if (error) return __jsx("div", null, error.message);
      console.log(data);
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"], {
        showHeader: true,
        resourceName: {
          singular: "Product",
          plural: "Products"
        },
        items: data.products.edges,
        renderItem: item => {
          const media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Thumbnail"], {
            source: item.node.images.edges[0] ? item.node.images.edges[0].node.originalSrc : "",
            alt: item.node.images.edges[0] ? item.node.images.edges[0].node.altText : ""
          }); //   const price = item.variants.edges[0].node.price;


          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"].Item, {
            id: item.node.id,
            media: media,
            accessibilityLabel: `View details for ${item.node.title}`
          }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, {
            fill: true
          }, __jsx(_ThreekitForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
            query: GET_TK_ASSET_ID,
            title: item.node.title,
            id: {
              id: item.node.id
            },
            field: this.state.field,
            handleTKChange: this.handleTKChange,
            handleCheckChange: this.handleCheck,
            checked: this.state.checked,
            tkMetafieldId: this.state.tkMetaFieldId
          }))));
        }
      }));
    })));
  }

}

_defineProperty(AllProductResource, "contextType", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_6__["Context"]);

/* harmony default export */ __webpack_exports__["default"] = (AllProductResource);

/***/ }),

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: LoadingScreen, LoadingText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingScreen", function() { return LoadingScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingText", function() { return LoadingText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const LoadingScreen = () => {
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SkeletonPage"], {
    primaryAction: true
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SkeletonBodyText"], null));
};
const LoadingText = () => {
  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SkeletonDisplayText"], {
    size: "medium"
  });
};

/***/ }),

/***/ "./components/ResourceList.js":
/*!************************************!*\
  !*** ./components/ResourceList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ThreekitForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThreekitForm */ "./components/ThreekitForm.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "@shopify/app-bridge/actions");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_10__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const link = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_10__["createHttpLink"])({
  uri: '/graphql',
  fetch: node_fetch__WEBPACK_IMPORTED_MODULE_9___default.a
});
const GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;
const GET_TK_PRODUCT_IDS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query {
    shop {
      metafield(namespace: "threekit", key: "items") {
        id
        value
      }
    }
  }
`;
const GET_ALL_PRODCUTS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
query {
  products(first: 50) {
    edges {
      cursor
      node {
        id
        title
        handle
        descriptionHtml
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
      }
    }
  }
}

`;
const GET_TK_ASSET_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query($id: ID!) {
    product(id: $id) {
      metafield(namespace: "threekit", key: "assetid") {
        value
        id
      }
    }
  }
`;
const GET_META_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query($id: ID!) {
    product(id: $id) {
      metafield(namespace: "threekit", key: "assetid") {
        value
        id
      }
    }
  }
`;

class ResourceListWithProducts extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      ids: [],
      tkId: {},
      field: "",
      active: false,
      checked: false,
      tkMetaFieldId: ""
    });

    _defineProperty(this, "_queryMe", data => {
      if (data.shop.metafield == null) {
        return null;
      } else {
        const str = JSON.parse(data.shop.metafield.value);
        let arr;
        arr = str.ids.split(",");
        this.setState({
          ids: arr.map(id => "gid://shopify/Product/" + id)
        });
      }
    });

    _defineProperty(this, "_setTkID", data => {
      this.setState({
        tkId: data
      });
    });

    _defineProperty(this, "_setTkMetafieldId", data => {
      this.setState({
        tkMetaFieldId: JSON.stringify(data)
      });
    });

    _defineProperty(this, "getTkAsset", () => {
      return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: GET_TK_ASSET_ID,
        onCompleted: data => this._setTkID(data)
      }, () => {
        return null;
      });
    });

    _defineProperty(this, "handleTKChange", e => {
      this.setState({
        field: e
      });
    });

    _defineProperty(this, "handleCheck", () => {
      !this.state.checked ? this.setState({
        checked: true
      }) : this.setState({
        checked: false
      });
    });

    _defineProperty(this, "handleToggle", () => !this.state.active ? this.setState({
      active: true
    }) : this.setState({
      active: false
    }));
  }

  render() {
    const app = this.context; // const redirectToProduct = () => {
    //   const redirect = Redirect.create(app);
    //   redirect.dispatch(Redirect.Action.APP, "/edit-products");
    // };

    return __jsx("div", {
      style: {
        margin: 'auto'
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Frame"], null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: GET_META_ID,
      onCompleted: data => this._setTkMetafieldId(data)
    }, () => {
      return __jsx("div", null, "");
    }), " ", __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: GET_PRODUCTS_BY_ID,
      variables: {
        ids: store_js__WEBPACK_IMPORTED_MODULE_4___default.a.get("ids")
      }
    }, ({
      data,
      loading,
      error
    }) => {
      if (loading) return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_8__["LoadingScreen"], null);
      if (error) return __jsx("div", null, error.message);
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"], {
        showHeader: true,
        resourceName: {
          singular: "Product",
          plural: "Products"
        },
        items: data.nodes,
        renderItem: item => {
          const media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Thumbnail"], {
            source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : "",
            alt: item.images.edges[0] ? item.images.edges[0].node.altText : ""
          });

          const price = item.variants.edges[0].node.price;
          return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["ResourceList"].Item, {
            id: item.id,
            media: media,
            accessibilityLabel: `View details for ${item.title}`
          }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, {
            fill: true
          }, __jsx(_ThreekitForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
            query: GET_TK_ASSET_ID,
            title: item.title,
            id: {
              id: item.id
            },
            field: this.state.field,
            handleTKChange: this.handleTKChange,
            handleCheckChange: this.handleCheck,
            checked: this.state.checked,
            tkMetafieldId: this.state.tkMetaFieldId
          }))));
        }
      }));
    })));
  }

}

_defineProperty(ResourceListWithProducts, "contextType", _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_7__["Context"]);

/* harmony default export */ __webpack_exports__["default"] = (ResourceListWithProducts);

/***/ }),

/***/ "./components/SnippetGen.js":
/*!**********************************!*\
  !*** ./components/SnippetGen.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function SnippetGen(props) {
  const GET_TK_TOKEN = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
    query {
      shop {
        metafield(namespace: "threekit", key: "token") {
          id
          value
        }
      }
    }
  `;

  const createSnippet = function (token) {
    let newTitle = props.title.replace(/\s/g, "");

    __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: GET_TK_TOKEN,
      onCompleted: data => setValue(createSnippet(!data.shop.metafield ? "no token" : data.shop.metafield.value))
    }, ({
      loading,
      error,
      data,
      refetch
    }) => {
      if (loading) return null;
      if (error) return `Error! ${error}`;
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
        open: props.active,
        onClose: props.handleChange,
        title: props.title,
        primaryAction: {
          content: "Close",
          onAction: props.handleChange
        }
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Modal"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx("p", null, "Copy and paste the HTML to embed a Threekit player with the selected product. Use it on blog posts, home pages, or anywhere HTML input is supported."))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Modal"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
        multiline: true,
        value: value
      }))));
    });

    return `<div id="tkplayer-${newTitle}" style="height: 500px; width: 500px;">
        <script>
                window.threekitPlayer({
                authToken: "${token}",
                el: document.getElementById("tkplayer-${newTitle}"),
                assetId: '${props.assetid}',
                showConfigurator: false,
                showAR: ${props.ar}
              })
              .then(async api => {
                 window.player = api;
                 window.configurator = await api.getConfigurator();
          });
        </script>`;
  };

  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  return __jsx("div", null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
    query: GET_TK_TOKEN,
    onCompleted: data => setValue(createSnippet(!data.shop.metafield ? "no token" : data.shop.metafield.value))
  }, ({
    loading,
    error,
    data,
    refetch
  }) => {
    if (loading) return null;
    if (error) return `Error! ${error}`;
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      open: props.active,
      onClose: props.handleChange,
      title: props.title,
      primaryAction: {
        content: "Close",
        onAction: props.handleChange
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Modal"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx("p", null, "Copy and paste the HTML to embed a Threekit player with the selected product. Use it on blog posts, home pages, or anywhere HTML input is supported."))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Modal"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      multiline: true,
      value: value,
      id: "textBox"
    }))));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SnippetGen);

/***/ }),

/***/ "./components/ThreekitForm.js":
/*!************************************!*\
  !*** ./components/ThreekitForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var _components_SnippetGen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SnippetGen */ "./components/SnippetGen.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function ThreekitForm(props) {
  // Declare a new state variable, which we'll call "count"
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: tkMetaId,
    1: setTkMetaId
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: isSaved,
    1: setIsSaved
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isPdp,
    1: setIsPdp
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: isChecked,
    1: setIsChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: isAr,
    1: setIsAr
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: arChecked,
    1: setArChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: modalActive,
    1: setModalActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const handleModalChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setModalActive(!modalActive), [modalActive]);
  const UPDATE_TK_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    mutation($input: ProductInput!) {
      productUpdate(input: $input) {
        product {
          metafields(first: 100) {
            edges {
              node {
                id
                namespace
                key
                value
              }
            }
          }
        }
      }
    }
  `;
  const GET_META_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    query($id: ID!) {
      product(id: $id) {
        metafield(namespace: "threekit", key: "assetid") {
          value
          id
        }
      }
    }
  `;
  const IS_PLAYER_PDP = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    query($id: ID!) {
      product(id: $id) {
        metafield(namespace: "threekit", key: "pdp") {
          value
          id
        }
      }
    }
  `;
  const IS_AR_ENABLED = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    query($id: ID!) {
      product(id: $id) {
        metafield(namespace: "threekit", key: "ARen") {
          value
          id
        }
      }
    }
  `;
  const UPDATE_TK_ATTR = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    mutation($input: ProductInput!) {
      productUpdate(input: $input) {
        product {
          metafields(first: 100) {
            edges {
              node {
                id
                namespace
                key
                value
              }
            }
          }
        }
      }
    }
  `;
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newValue => setValue(newValue), []);

  const setCheck = val => setIsChecked(val);

  const setArCheck = val => setArChecked(val);

  const updateMeta = (data, bool, namespace, key, obj, action) => {
    let productVariableInput;

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

  return __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
    distribution: "fill"
  }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["FormLayout"], null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: props.query,
    variables: props.id
  }, ({
    loading,
    error,
    data,
    refetch
  }) => {
    if (loading) return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["LoadingText"], null);
    if (error) return `Error! ${error}`;
    return __jsx("div", null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
      query: GET_META_ID,
      variables: props.id,
      onCompleted: data => setTkMetaId(data)
    }, ({
      loading,
      error,
      data,
      refetch
    }) => {
      if (loading) return null;
      if (error) return `Error! ${error}`;
      return null;
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, null, __jsx("h3", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextStyle"], {
      variation: "strong"
    }, props.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
      mutation: UPDATE_TK_ID,
      onCompleted: () => setIsSaved(true)
    }, (handleSubmit, {
      err,
      res
    }) => {
      const showError = err && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Banner"], {
        status: "critical"
      }, err.message);

      return __jsx("div", null, !isSaved ? __jsx("div", null) : __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Toast"], {
        content: "Saved",
        onDismiss: () => setIsSaved(false)
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Layout"].Section, null, showError), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
        value: value,
        onFocus: () => setValue(!data.product.metafield ? "No Threekit ID" : data.product.metafield.value),
        onChange: handleChange,
        id: data.product.id,
        ariaControls: data.product.id,
        placeholder: !data.product.metafield ? "No Threekit ID" : data.product.metafield.value,
        connectedRight: __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          primary: true,
          onClick: () => {
            let productVariableInput;

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
        }, "Save"))
      }));
    })));
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: IS_PLAYER_PDP,
    variables: props.id,
    onCompleted: data => setIsPdp(data)
  }, ({
    loading,
    error,
    data,
    refetch
  }) => {
    if (loading) return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["LoadingText"], null);
    if (error) return `Error! ${error}`;
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
      mutation: UPDATE_TK_ATTR,
      onCompleted: () => setIsSaved(true)
    }, (handleSubmit, {
      err,
      res
    }) => {
      const showError = err && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Banner"], {
        status: "critical"
      }, err.message);

      if (!data.product.metafield || data.product.metafield.value == "false") {
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
          setIsChecked(false);
        }, [setIsChecked]);
      } else {
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
          setIsChecked(true);
        }, [setIsChecked]);
      }

      return __jsx("div", null, __jsx("p", null, "PDP Controls"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        label: "Display on PDP",
        checked: isChecked,
        onChange: () => updateMeta(data, isChecked, "threekit", "pdp", isPdp, handleSubmit),
        onFocus: () => isChecked ? setCheck(false) : setCheck(true)
      }));
    });
  })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Stack"].Item, null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: IS_AR_ENABLED,
    variables: props.id,
    onCompleted: data => setIsAr(data)
  }, ({
    loading,
    error,
    data,
    refetch
  }) => {
    if (loading) return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["LoadingText"], null);
    if (error) return `Error! ${error}`;
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
      mutation: UPDATE_TK_ATTR,
      onCompleted: () => setIsSaved(true)
    }, (handleArSubmit, {
      err,
      res
    }) => {
      const showError = err && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Banner"], {
        status: "critical"
      }, err.message);

      if (!data.product.metafield || data.product.metafield.value == "false") {
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
          setArChecked(false);
        }, [setArChecked]);
      } else {
        Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
          setArChecked(true);
        }, [setArChecked]);
      }

      return __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        label: "AR Enabled",
        checked: arChecked,
        onChange: () => updateMeta(data, arChecked, "threekit", "ARen", isAr, handleArSubmit),
        onFocus: () => arChecked ? setArCheck(false) : setArCheck(true)
      }));
    });
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ThreekitForm);

/***/ }),

/***/ "./components/TokenForm.js":
/*!*********************************!*\
  !*** ./components/TokenForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function TokenForm(props) {
  const {
    0: tkToken,
    1: setTkToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("No Threekit ID");
  const {
    0: isSaved,
    1: setIsSaved
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const makeShopMetafield = val => {
    var fetchUrl = "/api/makeMeta/" + val;
    var method = "GET";
    node_fetch__WEBPACK_IMPORTED_MODULE_5___default()(fetchUrl, {
      method: method
    }).then(response => response.json()).then(json => {
      setTkToken(json.data.metafield.value.replace(`'`, ""));
      setIsSaved(true);
    });
  };

  const updateShopMetafield = (id, val) => {
    var fetchUrl = `/api/insertMeta/${id}/${val}`;
    var method = "GET";
    node_fetch__WEBPACK_IMPORTED_MODULE_5___default()(fetchUrl, {
      method: method
    }).then(response => response.json()).then(json => {
      setTkToken(json.data.metafield.value.replace(`'`, ""));
      setIsSaved(true);
    });
  };

  const GET_TK_TOKEN = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
    query {
      shop {
        metafield(namespace: "threekit", key: "token") {
          id
          value
        }
      }
    }
  `;
  const handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(newValue => setTkToken(newValue), []);
  return __jsx("div", {
    style: {
      margin: "30px"
    }
  }, !isSaved ? __jsx("div", null) : __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Frame"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Toast"], {
    content: "Saved",
    onDismiss: () => setIsSaved(false)
  })), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: GET_TK_TOKEN,
    onCompleted: data => setTkToken(data)
  }, ({
    loading,
    error,
    data,
    refetch
  }) => {
    if (loading) return __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_4__["LoadingText"], null);
    if (error) return `Error! ${error}`;

    const submitForm = () => {
      !data.shop.metafield ? makeShopMetafield(tkToken) : updateShopMetafield(data.shop.metafield.id.split("Metafield/")[1], tkToken);
    };

    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
      label: "Threekit Token",
      value: tkToken,
      minLength: 5,
      onChange: handleChange,
      placeholder: !data.shop.metafield ? "No Threekit Token" : JSON.stringify(data.shop.metafield.value),
      connectedRight: __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        primary: true,
        onClick: submitForm
      }, "Save"))
    }));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TokenForm);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ResourceList */ "./components/ResourceList.js");
/* harmony import */ var _components_AllProductResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AllProductResource */ "./components/AllProductResource.js");
/* harmony import */ var _components_TokenForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TokenForm */ "./components/TokenForm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_9__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // Get the shop's threekit metafield

const GET_TK_METAFIELD = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default.a`
  query {
    shop {
      metafield(namespace: "threekit", key: "token") {
        id
        value
      }
    }
  }
`;

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: false,
      hasSrc: false,
      shop: "",
      tkMetaId: {},
      metaID: ""
    });

    _defineProperty(this, "_queryMe", data => {
      if (data.shop.metafield == null) {
        return null;
      } else {
        this.setState({
          tkMetaId: data,
          metaID: data.shop.metafield.id.split("Metafield/")[1]
        });
      }
    });

    _defineProperty(this, "_checkIfTK", () => {
      if (this.state.tkMetaId.shop.metafield == null) {
        console.log("no TK id");
      } else {
        console.log("Yes this is TK");
      }
    });

    _defineProperty(this, "_formatProductID", arr => {
      arr.map(x => x.split("Product/")[1]);
    });

    _defineProperty(this, "getShopMetafield", () => {
      var fetchUrl = "/api/shopMeta";
      var method = "GET";
      node_fetch__WEBPACK_IMPORTED_MODULE_9___default()(fetchUrl, {
        method: method
      }).then(response => response.json()).then(json => {
        return json.data;
      });
    });

    _defineProperty(this, "updateShopMetafield", (id, val) => {
      var fetchUrl = `/api/insertMeta/${id}/${val}`;
      var method = "GET";
      node_fetch__WEBPACK_IMPORTED_MODULE_9___default()(fetchUrl, {
        method: method
      }).then(response => response.json()).then(json => {
        return json.data;
      });
    });

    _defineProperty(this, "makeScript", () => {
      var fetchUrl = `/make/script_tags`;
      var method = "GET";
      node_fetch__WEBPACK_IMPORTED_MODULE_9___default()(fetchUrl, {
        method: method
      }).then(response => response.json()).then(json => {
        return json.data;
      });
    });

    _defineProperty(this, "makeShopMetafield", val => {
      var fetchUrl;

      if (val == "undefined") {
        fetchUrl = "/api/makeMeta/";
      } else {
        fetchUrl = "/api/makeMeta/" + val;
      }

      var method = "GET";
      node_fetch__WEBPACK_IMPORTED_MODULE_9___default()(fetchUrl, {
        method: method
      }).then(response => response.json()).then(json => {});
    });

    _defineProperty(this, "handleSelection", resources => {
      const idsFromResources = resources.selection.map(product => product.id);
      console.log(resources.selection.map(product => product.id));
      this.setState({
        open: false
      });
      store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set("ids", idsFromResources);
    });
  }

  componentDidMount() {
    // console.log(this.state)
    store_js__WEBPACK_IMPORTED_MODULE_3___default.a.remove("ids");
    console.log(store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get("ids"));
    store_js__WEBPACK_IMPORTED_MODULE_3___default.a.each(function (value, key) {
      console.log(key, "==", value);
    });
  }

  componentWillUnmount() {
    store_js__WEBPACK_IMPORTED_MODULE_3___default.a.remove("ids");
  }

  render() {
    const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get("ids");
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["TitleBar"], {
      primaryAction: {
        content: "Narrow Product List",
        onAction: () => this.setState({
          open: true
        })
      }
    }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["ResourcePicker"], {
      resourceType: "Product",
      showVariants: false,
      open: this.state.open,
      onSelection: resources => this.handleSelection(resources),
      onCancel: () => this.setState({
        open: false
      })
    }), __jsx("div", null, __jsx("div", {
      style: {
        marginBottom: "30px"
      }
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Welcome to Threekit's Shopify Connector.",
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextContainer"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
      variation: "subdued"
    }, "All of your Shopify products are listed below unless you have selected otherwise. To manage individual or several products, please narrow your product list.", " "), __jsx("br", null), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
      variation: "negative"
    }, "If you do not see a 3D player on your product page, please visit the ", __jsx("a", {
      href: "/help"
    }, "help"), " page to troubleshoot."))))), emptyState ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_components_AllProductResource__WEBPACK_IMPORTED_MODULE_5__["default"], null)) : __jsx("div", null, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_8__["Query"], {
      query: GET_TK_METAFIELD,
      onCompleted: data => this._queryMe(data)
    }, () => {
      return __jsx("div", null, "");
    }), __jsx(_components_ResourceList__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/willthompson/Documents/ThreeKit/Shopify/shopify-connector/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/app-bridge/actions":
/*!**********************************************!*\
  !*** external "@shopify/app-bridge/actions" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge/actions");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map