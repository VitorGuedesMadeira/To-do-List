"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! pexels-felix-mittermeier-957040.jpg */ \"./src/pexels-felix-mittermeier-957040.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  min-height: 100vh;\\r\\n  max-height: 100%;\\r\\n  background-image:\\r\\n    radial-gradient(transparent, black),\\r\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  background-size: cover, 100%;\\r\\n  background-position: center, center;\\r\\n  background-repeat: no-repeat, no-repeat;\\r\\n  background-attachment: fixed;\\r\\n}\\r\\n\\r\\n.todo {\\r\\n  border: 1px solid rgba(255, 255, 255, 0.2);\\r\\n  width: 500px;\\r\\n  min-width: 375px;\\r\\n  background-image: radial-gradient(rgba(98, 22, 68, 0.301), rgba(168, 152, 223, 0.6));\\r\\n  box-shadow:\\r\\n    0 0 5px white,\\r\\n    0 0 12px white,\\r\\n    0 0 20px rgb(99, 11, 140),\\r\\n    0 0 29px rgb(99, 11, 140);\\r\\n  border-radius: 15px;\\r\\n  overflow: hidden;\\r\\n  padding: 25px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  animation: toDoList 1s;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.todo-title {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  background-color: rgba(36, 5, 122, 0.8);\\r\\n  padding: 15px;\\r\\n  border-radius: 15px;\\r\\n  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.3);\\r\\n  font-family: 'Rubik Moonrocks', sans-serif;\\r\\n}\\r\\n\\r\\n.todo-title a {\\r\\n  text-decoration: none;\\r\\n  color: white;\\r\\n  font-family: 'Rubik Moonrocks', sans-serif;\\r\\n}\\r\\n\\r\\n.todo-new-item {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  border: 1px solid grey;\\r\\n  border-radius: 15px;\\r\\n  overflow: hidden;\\r\\n  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.3);\\r\\n}\\r\\n\\r\\n.todo-new-item input {\\r\\n  padding: 15px;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  border: none;\\r\\n  background-color: rgb(202, 195, 218);\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.todo-new-item input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.todo-list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.todo-list-label {\\r\\n  display: flex;\\r\\n  padding: 15px;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  border-top: 1px solid grey;\\r\\n  border-radius: 50px;\\r\\n  background-image: linear-gradient(to top, rgb(111, 51, 149, 0.3), rgb(69, 9, 138, 0.5));\\r\\n  gap: 10px;\\r\\n  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.3);\\r\\n}\\r\\n\\r\\n.todo-list-label p {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todo-list-label:hover {\\r\\n  background-color: rgb(221, 221, 221);\\r\\n}\\r\\n\\r\\n.input-text {\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  text-align: left;\\r\\n  outline: none;\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  font-family: sans-serif;\\r\\n  font-weight: 900;\\r\\n}\\r\\n\\r\\ninput[type='checkbox']:checked + .input-text {\\r\\n  text-decoration: line-through;\\r\\n}\\r\\n\\r\\n.todo-clear-all-completed {\\r\\n  background-color: rgba(105, 29, 110, 0.8);\\r\\n  padding: 15px;\\r\\n  text-align: center;\\r\\n  border-top: 1px solid grey;\\r\\n  cursor: pointer;\\r\\n  border-radius: 15px;\\r\\n  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.3);\\r\\n  color: white;\\r\\n  font-family: 'Rubik Moonrocks', sans-serif;\\r\\n  font-size: 1.5em;\\r\\n}\\r\\n\\r\\n.todo-clear-all-completed:hover {\\r\\n  background-color: rgb(156, 156, 156);\\r\\n}\\r\\n\\r\\n.closure-button {\\r\\n  cursor: pointer;\\r\\n  filter: invert(100%);\\r\\n}\\r\\n\\r\\n.closure-button:hover {\\r\\n  filter: invert(0%);\\r\\n}\\r\\n\\r\\n.enter-icon {\\r\\n  height: 20px;\\r\\n  width: 20px;\\r\\n}\\r\\n\\r\\n.select-all {\\r\\n  cursor: pointer;\\r\\n  filter: invert(100%);\\r\\n  font-family: sans-serif;\\r\\n  font-weight: 900;\\r\\n}\\r\\n\\r\\n.select-all:hover {\\r\\n  filter: invert(0%);\\r\\n}\\r\\n\\r\\n.image-plus {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  font-size: 2em;\\r\\n  width: 60px;\\r\\n  cursor: pointer;\\r\\n  border-radius: 15px;\\r\\n  filter: invert(100%);\\r\\n  font-family: 'Rubik Moonrocks', sans-serif;\\r\\n}\\r\\n\\r\\n.image-plus:hover {\\r\\n  filter: invert(0%);\\r\\n}\\r\\n\\r\\n@keyframes toDoList {\\r\\n  from {\\r\\n    opacity: 0;\\r\\n    transform: translate3d(0, -60px, 0);\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    opacity: 1;\\r\\n    transform: translate3d(0, 0, 0);\\r\\n  }\\r\\n}\\r\\n\\r\\n@media all and (max-width: 768px) {\\r\\n  body {\\r\\n    background-size: cover, cover;\\r\\n  }\\r\\n  \\r\\n  .todo {\\r\\n    min-width: 324px;\\r\\n    width: 324px;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_creatingItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/creatingItems.js */ \"./src/modules/creatingItems.js\");\n/* harmony import */ var _modules_insertNewItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/insertNewItem.js */ \"./src/modules/insertNewItem.js\");\n/* harmony import */ var _modules_setLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/setLocalStorage */ \"./src/modules/setLocalStorage.js\");\n/* harmony import */ var _modules_clearAllSelected__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/clearAllSelected */ \"./src/modules/clearAllSelected.js\");\n/* harmony import */ var _modules_deleteAll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/deleteAll */ \"./src/modules/deleteAll.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/variables.js */ \"./src/modules/variables.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.cleanList)();\r\n\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.clearAll.addEventListener('click', () => {\r\n  (0,_modules_clearAllSelected__WEBPACK_IMPORTED_MODULE_4__.clearAllSelected)();\r\n  (0,_modules_render__WEBPACK_IMPORTED_MODULE_6__.render)();\r\n  (0,_modules_setLocalStorage__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage)();\r\n});\r\n\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.selectAll.addEventListener('click', () => {\r\n  (0,_modules_deleteAll__WEBPACK_IMPORTED_MODULE_5__.deleteAll)();\r\n  (0,_modules_setLocalStorage__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage)();\r\n  (0,_modules_render__WEBPACK_IMPORTED_MODULE_6__.render)();\r\n});\r\n\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.clickPlus.addEventListener('click', () => {\r\n  const { value } = _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.newItem;\r\n  (0,_modules_insertNewItem_js__WEBPACK_IMPORTED_MODULE_2__.insertNewItem)(value);\r\n  _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.newItem.value = '';\r\n  (0,_modules_render__WEBPACK_IMPORTED_MODULE_6__.render)();\r\n  (0,_modules_setLocalStorage__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage)();\r\n});\r\n\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.newItem.addEventListener('keypress', (event) => {\r\n  const tecla = event.key;\r\n  const text = event.target.value;\r\n  if (tecla === 'Enter') {\r\n    (0,_modules_insertNewItem_js__WEBPACK_IMPORTED_MODULE_2__.insertNewItem)(text);\r\n    _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__.newItem.value = '';\r\n  }\r\n  (0,_modules_render__WEBPACK_IMPORTED_MODULE_6__.render)();\r\n  (0,_modules_setLocalStorage__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage)();\r\n});\r\n\r\nwindow.addEventListener('load', () => { // LOCAL STORAGE\r\n  if (localStorage.getItem('listItem')) {\r\n    _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dataStructure.push(...JSON.parse(localStorage.getItem('listItem')));\r\n  }\r\n  for (let i = 0; i < _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dataStructure.length; i += 1) {\r\n    const newObj = _modules_variables_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].dataStructure[i];\r\n    _modules_creatingItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].creatingNewItem(newObj.description, newObj.completed, i);\r\n  }\r\n});\r\n\r\n(0,_modules_render__WEBPACK_IMPORTED_MODULE_6__.render)();\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/clearAllSelected.js":
/*!*****************************************!*\
  !*** ./src/modules/clearAllSelected.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearAllSelected\": () => (/* binding */ clearAllSelected)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/modules/variables.js\");\n\r\n\r\nconst clearAllSelected = () => {\r\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure = _variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure.filter((item) => !item.completed);\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/clearAllSelected.js?");

/***/ }),

/***/ "./src/modules/closingBtn.js":
/*!***********************************!*\
  !*** ./src/modules/closingBtn.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closingBtn\": () => (/* binding */ closingBtn)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/modules/variables.js\");\n\r\n\r\nconst closingBtn = (index) => {\r\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure.splice(index, 1);\r\n    for (let i = 0; i < _variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure.length; i += 1) {\r\n      _variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure[i].index = i;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/closingBtn.js?");

/***/ }),

/***/ "./src/modules/creatingItems.js":
/*!**************************************!*\
  !*** ./src/modules/creatingItems.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dynamic)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n/* harmony import */ var _setLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setLocalStorage */ \"./src/modules/setLocalStorage.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* harmony import */ var _editingText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editingText */ \"./src/modules/editingText.js\");\n/* harmony import */ var _strikethroughLines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./strikethroughLines */ \"./src/modules/strikethroughLines.js\");\n/* harmony import */ var _closingBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./closingBtn */ \"./src/modules/closingBtn.js\");\n/* harmony import */ var _icons_trash_regular_24_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/trash-regular-24.png */ \"./src/modules/icons/trash-regular-24.png\");\n\n\n\n\n\n\n\n\nclass Dynamic {\nstatic creatingNewItem = (text, completed, index) => {\n  const labelItem = document.createElement('label');\n  labelItem.classList.add('todo-list-label');\n  labelItem.id = index;\n  if (completed) {\n    labelItem.style.backgroundColor = 'rgb(190, 255, 199)';\n  }\n  const inputCheckbox = document.createElement('input');\n  inputCheckbox.setAttribute('type', 'checkbox');\n  inputCheckbox.checked = completed;\n  const textItem = document.createElement('input');\n  textItem.setAttribute('class', 'input-text');\n  textItem.value = text;\n  textItem.id = `id_${index}`;\n  const inputClosure = document.createElement('img');\n  inputClosure.setAttribute('class', 'closure-button');\n  inputClosure.setAttribute('src', _icons_trash_regular_24_png__WEBPACK_IMPORTED_MODULE_6__);\n  // appendingChild\n  _variables_js__WEBPACK_IMPORTED_MODULE_2__.toDoList.appendChild(labelItem);\n  labelItem.appendChild(inputCheckbox);\n  labelItem.appendChild(textItem);\n  labelItem.appendChild(inputClosure);\n  // inputClosureButton\n  inputClosure.addEventListener('click', () => {\n    (0,_closingBtn__WEBPACK_IMPORTED_MODULE_5__.closingBtn)(index);\n    (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)();\n    (0,_setLocalStorage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();\n  });\n  // Strikethrough lines in texts\n  labelItem.addEventListener('click', () => {\n    (0,_strikethroughLines__WEBPACK_IMPORTED_MODULE_4__.strikethroughLines)(labelItem, inputCheckbox, index);\n  });\n  // Editing input of list item\n  window.addEventListener('input', (e) => {\n    if (e.target.classList.contains('input-text')) {\n      const inputText = e.target;\n      const inputId = Number(inputText.id.split('_')[1]);\n      (0,_editingText__WEBPACK_IMPORTED_MODULE_3__.editingText)(inputText, inputId);\n      (0,_setLocalStorage__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();\n    }\n  });\n};\n\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/creatingItems.js?");

/***/ }),

/***/ "./src/modules/deleteAll.js":
/*!**********************************!*\
  !*** ./src/modules/deleteAll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteAll\": () => (/* binding */ deleteAll)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/modules/variables.js\");\n\r\n\r\nconst deleteAll = () => {\r\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure = [];\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/deleteAll.js?");

/***/ }),

/***/ "./src/modules/editingText.js":
/*!************************************!*\
  !*** ./src/modules/editingText.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"editingText\": () => (/* binding */ editingText)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/modules/variables.js\");\n\r\n\r\nconst editingText = (text, id) => {\r\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure[id].description = text.value;\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/editingText.js?");

/***/ }),

/***/ "./src/modules/insertNewItem.js":
/*!**************************************!*\
  !*** ./src/modules/insertNewItem.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"insertNewItem\": () => (/* binding */ insertNewItem)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\r\n\r\nconst insertNewItem = (text) => {\r\n    _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure.push(\r\n        {\r\n          description: text,\r\n          completed: false,\r\n          index: _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure.length,\r\n        },\r\n    );\r\n};\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/insertNewItem.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n/* harmony import */ var _creatingItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creatingItems.js */ \"./src/modules/creatingItems.js\");\n\r\n\r\n\r\nconst render = () => {\r\n    (0,_variables_js__WEBPACK_IMPORTED_MODULE_0__.cleanList)();\r\n    const { dataStructure } = _variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n    for (let i = 0; i < dataStructure.length; i += 1) {\r\n      _creatingItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].creatingNewItem(dataStructure[i].description, dataStructure[i].completed, i);\r\n    }\r\n  };\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/setLocalStorage.js":
/*!****************************************!*\
  !*** ./src/modules/setLocalStorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/modules/variables.js\");\n\r\n\r\nconst setLocalStorage = () => {\r\n    localStorage.setItem('listItem', JSON.stringify(_variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dataStructure));\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/setLocalStorage.js?");

/***/ }),

/***/ "./src/modules/strikethroughLines.js":
/*!*******************************************!*\
  !*** ./src/modules/strikethroughLines.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"strikethroughLines\": () => (/* binding */ strikethroughLines)\n/* harmony export */ });\n/* harmony import */ var _setLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setLocalStorage.js */ \"./src/modules/setLocalStorage.js\");\n/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.js */ \"./src/modules/variables.js\");\n\r\n\r\n\r\nconst strikethroughLines = (labelItem, inputCheckbox, index) => {\r\n    if (inputCheckbox.checked) {\r\n        labelItem.style.backgroundColor = 'rgb(190, 255, 199)';\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dataStructure[index].completed = true;\r\n        (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();\r\n      } else {\r\n        labelItem.style.backgroundColor = 'rgba(202, 189, 74, 0.305)';\r\n        _variables_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dataStructure[index].completed = false;\r\n        (0,_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__.setLocalStorage)();\r\n      }\r\n}\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/strikethroughLines.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleanList\": () => (/* binding */ cleanList),\n/* harmony export */   \"clearAll\": () => (/* binding */ clearAll),\n/* harmony export */   \"clickPlus\": () => (/* binding */ clickPlus),\n/* harmony export */   \"default\": () => (/* binding */ DataClass),\n/* harmony export */   \"newItem\": () => (/* binding */ newItem),\n/* harmony export */   \"selectAll\": () => (/* binding */ selectAll),\n/* harmony export */   \"toDoList\": () => (/* binding */ toDoList)\n/* harmony export */ });\nconst cleanList = () => {\n  const toDoList = document.querySelector('.todo-list');\n  while (toDoList.firstChild) {\n    toDoList.removeChild(toDoList.lastChild);\n  }\n};\n\nconst clearAll = document.querySelector('.todo-clear-all-completed');\n\nconst selectAll = document.querySelector('.select-all');\n\nconst clickPlus = document.querySelector('.image-plus');\n\nconst newItem = document.getElementById('newItem');\n\nconst toDoList = document.querySelector('.todo-list');\n\nclass DataClass {\n    static dataStructure = []\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/variables.js?");

/***/ }),

/***/ "./src/modules/icons/trash-regular-24.png":
/*!************************************************!*\
  !*** ./src/modules/icons/trash-regular-24.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d357d8ff9202efa4d7a1.png\";\n\n//# sourceURL=webpack://to-do-list/./src/modules/icons/trash-regular-24.png?");

/***/ }),

/***/ "./src/pexels-felix-mittermeier-957040.jpg":
/*!*************************************************!*\
  !*** ./src/pexels-felix-mittermeier-957040.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7afe0c9501e2e1e67026.jpg\";\n\n//# sourceURL=webpack://to-do-list/./src/pexels-felix-mittermeier-957040.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);