/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/*! exports provided: createColorScale, lineWeights, lineDashArrays, externalLink, remove, convertType, formatWidgets, capitalize, load, makeDropdownOptions */
/*! exports used: capitalize, convertType, createColorScale, externalLink, lineDashArrays, lineWeights, load, makeDropdownOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return lineWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lineDashArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return externalLink; });
/* unused harmony export remove */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return convertType; });
/* unused harmony export formatWidgets */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return makeDropdownOptions; });
/* harmony import */ var _styleKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleKey.js */ 1);

function createColorScale(count, index) {
  var scaleOne = chroma.cubehelix().hue(0.5).lightness([0.4, 0.6]).scale().colors(count * 2);
  var scaleTwo = chroma.cubehelix().hue(1).gamma(0.5).scale().colors(count * 2).reverse();
  var scale = [];

  for (var i = 0; i < count; i++) {
    var color = i % 2 === 0 ? scaleOne[i * 2] : scaleTwo[i * 2];
    color = chroma(color).saturate().hex();
    scale.push(color);
  }

  return scale;
}
var lineWeights = [[3, 3], [5, 2], [4, 3.5], [7, 3], [4, 4]];
var lineDashArrays = [[null, '6,9'], [null, null], [null, '6,12'], [null, null], ['18,24', '18,24']];
var externalLink = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path d="M7.49,0V1.67H1.68V13.32H13.32V7.52H15v5.72a1.76,1.76,0,0,1-.42,1.19,1.64,1.64,0,0,1-1.13.56H1.74a1.67,1.67,0,0,1-1.16-.41A1.61,1.61,0,0,1,0,13.48v-.27C0,9.4,0,5.6,0,1.8A1.83,1.83,0,0,1,.58.4a1.53,1.53,0,0,1,1-.39h6Z" transform="translate(0 0)"/><path d="M9.17,1.67V0H15V5.84H13.34v-3h0c-.05.05-.11.1-.16.16l-.45.46-1.3,1.29-.84.84-.89.9-.88.87-.89.9c-.28.29-.57.57-.86.86L6.16,10l-.88.87a1.83,1.83,0,0,1-.13.16L4,9.86l0,0L5.36,8.47l.95-1,.75-.75,1-1L8.87,5l1-.94.85-.86.92-.91.56-.58Z" transform="translate(0 0)"/></svg>';
var remove = '<svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M2.592.044l18.364 18.364-2.548 2.548L.044 2.592z"/><path d="M0 18.364L18.364 0l2.548 2.548L2.548 20.912z"/></g></svg>';
function convertType(value) {
  var v = Number(value);
  return !isNaN(v) ? v : value.toLowerCase() === 'undefined' ? undefined : value.toLowerCase() === 'null' ? null : value.toLowerCase() === 'true' ? true : value.toLowerCase() === 'false' ? false : value;
}
function formatWidgets() {
  console.log('yo');
}
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function load(url, element) {
  var req = new XMLHttpRequest();
  req.open('GET', url, false);
  req.send(null);
  element.innerHTML = req.responseText;
}
function makeDropdownOptions(options, x) {
  var groups = options.widgets[x].keys.groupBy('group');
  var choices = Object.keys(groups).map(function (g, z) {
    console.log(Object.keys(groups));
    return {
      id: z,
      label: g.trim() && Number.isNaN(parseInt(g, 10)) ? g : '',
      disabled: false,
      choices: groups[g]
    };
  });
  return {
    choices: choices,
    removeItemButton: true,
    maxItemCount: options.widgets[x].maximum,
    callbackOnCreateTemplates: function callbackOnCreateTemplates(template) {
      var _this = this;

      return {
        item: function item(classNames, data) {
          var key = options.widgets[x].keys.find(function (v) {
            return v.value.toLowerCase() === data.value.toLowerCase();
          });
          var keyStyle;

          switch (options.widgets[x].type) {
            case 'form':
              var forms = options.widgets[x].keys.map(function (k) {
                return k.value.toLowerCase();
              });
              var i = forms.indexOf(key.value.toLowerCase());
              var styleOptions = {
                key: key,
                index: i,
                forms: forms,
                map: options
              };
              keyStyle = Object(_styleKey_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(styleOptions);
              break;

            case 'color':
              var styleOptions = {
                key: key,
                map: options
              };
              keyStyle = Object(_styleKey_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(styleOptions);
              break;
          }

          var markup = '<div style="border-color:' + key.color + '" class="' + classNames.item + '" data-item data-id="' + data.id + '" data-value="' + data.value + '" ' + (data.active ? 'aria-selected="true"' : '') + ' ' + (data.disabled ? 'aria-disabled="true"' : '') + '><span class="' + keyStyle.class + 'Key" ' + 'style="background-image: url(\'' + keyStyle.svg + '")></span> ' + capitalize(data.label) + '<button style="border-left: 1px solid ' + key.color + '; background-image: url(\'data:image/svg+xml;base64,' + window.btoa(remove) + '\')" type="button" class="choices__button" data-button="" aria-label="Remove item">Remove item</button></div>';
          return template(markup);
        },
        choice: function choice(classNames, data) {
          var key = options.widgets[x].keys.find(function (v) {
            return v.value.toLowerCase() === data.value.toLowerCase();
          });
          var keyStyle;

          switch (options.widgets[x].type) {
            case 'form':
              var forms = options.widgets[x].keys.map(function (k) {
                return k.value.toLowerCase();
              });
              var styleOptions = {
                key: key,
                index: i,
                forms: forms,
                map: options
              };
              keyStyle = Object(_styleKey_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(styleOptions);
              break;

            case 'color':
              var styleOptions = {
                key: key,
                map: options
              };
              keyStyle = Object(_styleKey_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(styleOptions);
              break;
          }

          var markup = ' <div class="' + classNames.item + ' ' + classNames.itemChoice + ' ' + (data.disabled ? classNames.itemDisabled : classNames.itemSelectable) + '" data-select-text="' + _this.config.itemSelectText + '" data-choice ' + (data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable') + ' data-id="' + data.id + '" data-value="' + data.value + '" ' + (data.groupId > 0 ? 'role="treeitem"' : 'role="option"') + '> <span class="' + keyStyle.class + 'Key" ' + 'style="background-image: url(\'' + keyStyle.svg + '")></span> ' + capitalize(data.label) + ' </div> ';
          return template(markup);
        }
      };
    }
  };
}

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/js/styleKey.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styleKey; });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ 0);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function styleKey(options) {
  var map = options.map,
      feature = options.feature,
      group = options.group,
      key = options.key,
      index = options.index,
      forms = options.forms,
      iconSize = map.iconsize,
      dividers = iconSize.map(function (size) {
    return size / 12;
  });
  var colors, keyColor;
  var key = group ? group[0] : key;

  var _iterator = _createForOfIteratorHelper(map.widgets),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var w = _step.value;
      var formKeyWidget = w.type === 'form' ? w : null;
      var colorKeyWidget = w.type === 'color' ? w : null;

      if (feature) {
        var colorKey = colorKeyWidget ? colorKeyWidget.keys.find(function (k) {
          return !k.value ? true : k.value.toLowerCase() === feature.properties[colorKeyWidget.field].toLowerCase();
        }) : null;
        var formKey = formKeyWidget ? formKeyWidget.keys.find(function (k) {
          return !k.value ? true : k.value.toLowerCase() === feature.properties[formKeyWidget.field].toLowerCase();
        }) : null;
        keyColor = colorKey ? colorKey.color : formKey ? formKey.color : null;
        iconSize = iconSize.map(function (size) {
          return size / 1;
        });
      } else {
        iconSize = iconSize.map(function (size, i) {
          return size / dividers[i];
        });
      }

      key.color = group && group.every(function (g) {
        return g.color;
      }) ? chroma.average(group.map(function (g) {
        return g.color;
      })) : key.color;

      switch (key.form) {
        case 'line':
          keyColor = key.color ? key.color : options.map.oceancolor ? options.map.oceancolor : null;

          if (forms && forms.length) {
            var svg;

            switch (index) {
              case 0:
                colors = [keyColor ? keyColor : chroma(defaultColor).darken(), keyColor ? keyColor : chroma(defaultColor).darken()];
                break;

              case 1:
                colors = [keyColor ? keyColor : chroma(defaultColor).darken(), '#ffffff'];
                break;

              case 2:
                colors = ['#000000', keyColor ? keyColor : defaultColor];
                break;

              case 3:
                colors = ['#ffffff', keyColor ? keyColor : chroma(defaultColor).darken()];
                break;

              default:
                colors = [keyColor ? keyColor : chroma(defaultColor).darken(), keyColor ? keyColor : chroma(defaultColor).darken()];
                break;
            }

            svg = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 48 12\'><line x1=\'0\' x2=\'48\' y1=\'50%\' y2=\'50%\' stroke=\'' + colors[0] + '\' stroke-width=\'' + _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineWeights */ "f"][index][0] + '\' stroke-linecap=\'square\' stroke-dasharray=\'' + (index === 4 ? '18,12' : _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineDashArrays */ "e"][index][0]) + '\'/><line x1=\'0\' x2=\'48\' y1=\'50%\' y2=\'50%\' stroke=\'' + colors[1] + '\' stroke-width=\'' + _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineWeights */ "f"][index][1] + '\' stroke-linecap=\'square\' stroke-dasharray=\'' + (index === 4 ? '18,12' : _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineDashArrays */ "e"][index][1]) + '\'/></svg>';
          } else {
            svg = '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 48 12\'><line x1=\'0\' x2=\'48\' y1=\'50%\' y2=\'50%\' stroke=\'' + keyColor + '\' stroke-width=\'' + 3 + '\' stroke-linecap=\'square\' stroke-dasharray=\'' + '3,7' + '\'/></svg>';
          }

          return {
            svg: 'data:image/svg+xml;base64,' + window.btoa(svg),
            class: 'line'
          };

        case 'icon':
          if (key.icon) {
            var slug = key.value.replace(/ /g, '-');
            Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* load */ "g"])(key.icon, document.querySelector('.hidden'));
            var svgContent = document.querySelector('.hidden').innerHTML;

            if (colorKeyWidget && keyColor) {
              svgContent = svgContent.replace(/((\bfill="#)(([0-a-fA-F]{2}){3}|([0-9a-fA-F]){3})")/gi, '');
              svgContent = svgContent.replace(/(<circle |<rectangle |<ellipse |<polygon |<path )/g, function (match, p1, p2, p3) {
                return match.replace(match, match + 'fill="' + keyColor + '" ');
              });
            }

            svg = 'data:image/svg+xml;base64,' + window.btoa(svgContent);
          } else {
            svg = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg"><circle cx="' + iconSize[0] / 2 + '" cy="' + iconSize[1] / 2 + '" r="' + (iconSize[0] + iconSize[1]) / 4 + '" fill="' + (keyColor || key.color) + '"/></svg>');
          }

          return {
            svg: svg,
            class: key.icon ? 'icon' : 'color'
          };

        case 'pattern':
          keyColor = key.color;
          var svg;

          switch (true) {
            case key.pattern[0].indexOf('stripe') > -1:
              var colorTwo = key.pattern[1];
              var colorOne = key.pattern[key.pattern.length - 1];
              svg = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polygon points="5.73 0 4.67 0 0 4.66 0 5.71 5.73 0" fill="' + colorOne + '"/><polygon points="2.28 0 1.22 0 0 1.22 0 2.27 2.28 0" fill="' + colorTwo + '"/><polygon points="8.85 0 7.79 0 0 7.77 0 8.82 8.85 0" fill="' + colorTwo + '"/><polygon points="12 0 11.24 0 0 11.2 0 12 0.26 12 12 0.3 12 0" fill="' + colorOne + '"/><polygon points="12 10.12 12 9.06 9.05 12 10.11 12 12 10.12" fill="' + colorTwo + '"/><polygon points="12 3.52 12 2.46 2.43 12 3.49 12 12 3.52" fill="' + colorTwo + '"/><polygon points="12 6.96 12 5.9 5.88 12 6.94 12 12 6.96" fill="' + colorOne + '"/></svg>');
              break;

            case key.pattern[0].indexOf('dot') > -1:
              svg = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg" width="13.06" height="15.1" viewBox="0 0 12 12"><title>stripes</title><path d="M5.49,1A1.16,1.16,0,1,1,4.33-.16,1.16,1.16,0,0,1,5.49,1ZM4.33,3.77A1.16,1.16,0,1,0,5.49,4.93,1.15,1.15,0,0,0,4.33,3.77Zm0,3.93A1.16,1.16,0,1,0,5.49,8.86,1.15,1.15,0,0,0,4.33,7.7Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.15,1.15,0,0,0,4.33,11.63ZM11.5-.16A1.16,1.16,0,1,0,12.66,1,1.16,1.16,0,0,0,11.5-.16Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,11.5,3.77Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,11.5,7.7Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,11.5,11.63ZM7.92-1.16A1.16,1.16,0,0,0,6.76,0,1.16,1.16,0,0,0,7.92,1.16,1.16,1.16,0,0,0,9.07,0,1.16,1.16,0,0,0,7.92-1.16Zm0,3.93A1.16,1.16,0,1,0,9.07,3.93,1.16,1.16,0,0,0,7.92,2.77Zm0,3.93A1.16,1.16,0,1,0,9.07,7.86,1.16,1.16,0,0,0,7.92,6.7Zm0,3.93a1.16,1.16,0,1,0,1.15,1.16A1.16,1.16,0,0,0,7.92,10.63ZM.75-1.16A1.16,1.16,0,0,0-.41,0,1.16,1.16,0,0,0,.75,1.16,1.16,1.16,0,0,0,1.91,0,1.16,1.16,0,0,0,.75-1.16Zm0,3.93A1.16,1.16,0,1,0,1.91,3.93,1.16,1.16,0,0,0,.75,2.77Zm0,3.93A1.16,1.16,0,0,0-.41,7.86,1.15,1.15,0,0,0,.75,9,1.15,1.15,0,0,0,1.91,7.86,1.16,1.16,0,0,0,.75,6.7Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,.75,10.63Z" transform="translate(0.7 2)" fill="' + colorOne + '"/></svg>');
              break;

            default:
              svg = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5" fill="' + keyColor + '"/></svg>');
          }

          return {
            svg: svg,
            class: key.pattern ? 'pattern' : 'color'
          };

        case 'shape':
          if (feature) {
            var colorKeyWidget = map.widgets.find(function (w) {
              return w.type === 'color';
            });
            var colorKey = colorKeyWidget.keys.find(function (k) {
              return k.value.toLowerCase() === feature.properties[colorKeyWidget.field].toLowerCase();
            });
            keyColor = colorKey ? colorKey.color : keyColor ? keyColor : null;
          }

          var svg;

          switch (index) {
            case 0:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow"  y1="4.5" x2="9" y2="4.5" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.5 -4.5) rotate(135)"><stop offset="0" stop-color="#7f3c8d"/><stop offset="0.325" stop-color="#e73f74"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.675" stop-color="#11a579"/><stop offset="1" stop-color="#3969ac"/></linearGradient></defs><rect x="3.25" y="1.75" width="9" height="9" transform="translate(4.5 -4.5) rotate(45)" ' + (keyColor ? 'paint-order="stroke" stroke="#ffffff"' : '') + ' fill="' + (keyColor ? keyColor : 'url(#rainbow)') + '" /></svg>';
              break;

            case 1:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow" y1="5" x2="10" y2="5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3969ac"/><stop offset="0.25" stop-color="#11a579"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.75" stop-color="#e73f74"/><stop offset="1" stop-color="#7f3c8d"/></linearGradient></defs><rect width="10" height="10" ' + (keyColor ? 'stroke="#ffffff"' : '') + ' fill="' + (keyColor ? keyColor : 'url(#rainbow)') + '"/></svg>';
              break;

            case 2:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow" y1="5" x2="10" y2="5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3969ac"/><stop offset="0.325" stop-color="#11a579"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.675" stop-color="#e73f74"/><stop offset="1" stop-color="#7f3c8d"/></linearGradient></defs><polygon points="6 10.39 0 10.39 3 5.2 6 0 9 5.2 12 10.39 6 10.39" ' + (keyColor ? 'paint-order="stroke" stroke="#ffffff"' : '') + ' fill="' + (keyColor ? keyColor : 'url(#rainbow)') + '" /></svg>';
              break;

            default:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow" y1="5" x2="10" y2="5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3969ac"/><stop offset="0.25" stop-color="#11a579"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.75" stop-color="#e73f74"/><stop offset="1" stop-color="#7f3c8d"/></linearGradient></defs><circle cx="6" cy="6" r="5" ' + (keyColor ? 'stroke="#ffffff"' : '') + ' fill="' + (keyColor ? keyColor : 'url(#rainbow)') + '"/></svg>';
          }

          return {
            svg: 'data:image/svg+xml;base64,' + window.btoa(svg),
            class: 'shape'
          };

        default:
          keyColor = key.color;
          svg = 'data:image/svg+xml;base64,' + window.btoa('<svg xmlns="http://www.w3.org/2000/svg"><circle cx="' + iconSize[0] / 2 + '" cy="' + iconSize[1] / 2 + '" r="' + (iconSize[0] + iconSize[1]) / 4 + '" fill="' + (keyColor || key.color) + '"/></svg>');
          return {
            svg: svg,
            class: 'color'
          };
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),
/* 2 */
/*!******************************************!*\
  !*** ./src/js/makeLayers.js + 4 modules ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/helpers.js because of ./src/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/styleKey.js because of ./src/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ makeLayers; });

// EXTERNAL MODULE: ./src/js/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/handleFeatureEvents.js

function handleFeatureEvents(feature, layer, map) {
  var eventOptions = map.oneachfeature ? map.oneachfeature : {
    click: function click() {
      handleLayerClick(feature, layer, map.leaflet);
    }
  };
  Object.keys(eventOptions).forEach(function (listener) {
    layer.on(listener, eventOptions[listener]);
  });
  var popupContent = typeof map.formatpopupcontent === 'function' ? map.formatpopupcontent(feature, map) : formatPopupContent(feature, map);
  layer.bindPopup(popupContent);
}

function formatPopupContent(feature, map) {
  var content;
  content = Object.keys(feature.properties).map(function (p) {
    if (feature.properties[p]) {
      if (map.popupheaders.length && map.popupcontent.length) {
        return map.popupheaders.indexOf(p) > -1 && map.popupcontent.indexOf(p) > -1 ? '<div class="popupHeaderStyle">' + p.toUpperCase().replace(/_/g, ' ') + '</div><div class="popupEntryStyle">' + feature.properties[p] + '</div>' : map.popupcontent.indexOf(p) > -1 ? '<div class="popupEntryStyle">' + feature.properties[p] + '</div>' : '';
      } else if (map.popupheaders.length) {
        return map.popupheaders.indexOf(p) > -1 ? '<div class="popupHeaderStyle">' + p.toUpperCase().replace(/_/g, ' ') + '</div><div class="popupEntryStyle">' + feature.properties[p] + '</div>' : '';
      } else if (map.popupcontent.length) {
        return map.popupcontent.indexOf(p) > -1 ? '<div class="popupEntryStyle">' + feature.properties[p] + '</div>' : '';
      } else {
        return '<div class="popupHeaderStyle">' + p.toUpperCase().replace(/_/g, ' ') + '</div><div class="popupEntryStyle">' + feature.properties[p] + '</div>';
      }
    }
  }).filter(function (p) {
    return p;
  }).join('');
  var link = feature.properties.hyperlink || feature.properties.link;
  var externalLinkContent = link && link.trim() ? '<div class="separator"></div><div class="hyperlink popupEntryStyle"><a class="translate" href=' + link.trim() + ' target="_blank">' + map.externallinktext + '</a>' + helpers["d" /* externalLink */] + '</div>' : '';
  content += externalLinkContent;

  if (lang) {
    var translatableStrings = Object.keys(map.translations).sort(function (a, b) {
      return b.length - a.length;
    });
    translatableStrings.forEach(function (t) {
      var re = new RegExp('\\b(' + RegExp.escape(t) + ')', 'gi');
      content = content.replace(re, map.translations[t]);
    });
  }

  return content;
}

function handleLayerClick(feature, layer, leaflet) {
  var isSpiderfied = false;

  if (!layer._preSpiderfyLatlng) {
    Object.keys(leaflet._layers).forEach(function (l, i) {
      if (leaflet._layers[l].unspiderfy) leaflet._layers[l].unspiderfy();
    });

    if (layer.__parent) {
      Object.values(layer.__parent._group._featureGroup._layers).forEach(function (v) {
        if (v._group && v._group._spiderfied) isSpiderfied = true;
      });
      Array.from(document.querySelectorAll('div.leaflet-marker-icon')).forEach(function (d) {
        return d.style.opacity = isSpiderfied ? 0.33 : 1;
      });
      Array.from(document.querySelectorAll('img.leaflet-marker-icon')).forEach(function (d) {
        return d.style.opacity = isSpiderfied ? 0.33 : 1;
      });
    }
  }
}

window.handleLayerClick = handleLayerClick;
// EXTERNAL MODULE: ./src/js/styleKey.js
var styleKey = __webpack_require__(1);

// CONCATENATED MODULE: ./src/js/stylePoint.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function stylePoint(feature, latlng, map) {
  var pointStyle, key, styleOptions;
  var CustomIcon = L.Icon.extend({
    options: {
      iconSize: map.iconsize || [20, 20],
      iconAnchor: map.iconsize ? map.iconsize / 4 : map.iconanchor ? map.iconanchor : [5, 5]
    }
  });
  var nonPointStyle, key, divIcon;
  var colorKeyWidget = map.widgets.find(function (w) {
    if (!w.keys) return;
    var key = w.keys.find(function (k) {
      return !k.value ? true : k.value.toLowerCase() === feature.properties[w.field].toLowerCase();
    });
    return key && w.type === 'color';
  });
  var formKeyWidget = map.widgets.find(function (w) {
    if (!w.keys) return;
    var key = w.keys.find(function (k) {
      return !k.value ? true : k.value.toLowerCase() === feature.properties[w.field].toLowerCase();
    });
    return key && w.type === 'form';
  });

  var _iterator = _createForOfIteratorHelper(map.widgets),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var w = _step.value;
      var thisFormKeyWidget = w.type === 'form' ? w : formKeyWidget;
      var thisColorKeyWidget = w.type === 'color' ? w : null;
      var colorKey = thisColorKeyWidget ? thisColorKeyWidget.keys.find(function (k) {
        return !k.value ? true : k.value.toLowerCase() === feature.properties[thisColorKeyWidget.field].toLowerCase();
      }) : null;
      var formKey = thisFormKeyWidget ? thisFormKeyWidget.keys.find(function (k) {
        return !k.value ? true : k.value.toLowerCase() === feature.properties[thisFormKeyWidget.field].toLowerCase();
      }) : null;
      var color = colorKey ? colorKey.color : formKey ? formKey.color : null;

      if (thisFormKeyWidget && feature.properties[thisFormKeyWidget.field]) {
        var forms = thisFormKeyWidget.keys.map(function (k) {
          return k.value.toLowerCase();
        });
        var i = forms.indexOf(feature.properties[thisFormKeyWidget.field].toLowerCase());
        key = thisFormKeyWidget.keys.find(function (k) {
          return !k.value ? true : k.value.toLowerCase() === feature.properties[thisFormKeyWidget.field].toLowerCase();
        });
        if (!key) break;
        var styleOptions = {
          key: formKey,
          index: i,
          forms: forms,
          color: color,
          map: map,
          feature: feature
        };

        if (key.form === 'div') {
          var value = feature.properties[thisFormKeyWidget.field];
          var count = value ? value.split('~').length : 0;
          divIcon = L.divIcon({
            className: 'icon-div',
            html: '<span class="text" style="background-color:' + color + '">' + count + '</span>'
          });
        }

        pointStyle = divIcon ? divIcon : Object(styleKey["a" /* default */])(styleOptions);
      } else if (thisColorKeyWidget && feature.properties[thisColorKeyWidget.field]) {
        key = thisColorKeyWidget.keys.find(function (k) {
          return !k.value ? true : k.value.toLowerCase() === feature.properties[thisColorKeyWidget.field].toLowerCase();
        });
        if (!key) break;
        var styleOptions = {
          key: colorKey,
          color: colorKey.color,
          map: map,
          feature: feature
        };
        pointStyle = Object(styleKey["a" /* default */])(styleOptions);
      } else {
        var svg = '<svg xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5" fill="' + color + '"/></svg>';
        pointStyle = {
          class: 'default',
          svg: encodeURI('data:image/svg+xml;base64,' + window.btoa(svg))
        };
      }

      var iconUrl = pointStyle.svg;
      var icon = new CustomIcon({
        iconUrl: iconUrl
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return L.marker(latlng, {
    icon: divIcon ? divIcon : icon
  });
}
// CONCATENATED MODULE: ./src/js/styleNonPoint.js
function styleNonPoint_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = styleNonPoint_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function styleNonPoint_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return styleNonPoint_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return styleNonPoint_arrayLikeToArray(o, minLen); }

function styleNonPoint_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function styleNonPoint(feature, map, index) {
  var nonPointStyle,
      colors = [],
      forms = [],
      sort = ['form', 'color'];
  var colorKeyWidget = map.widgets.find(function (w) {
    if (!w.keys) return;
    var key = w.keys.find(function (k) {
      return !k.value ? true : k.value.toLowerCase() === feature.properties[w.field].toLowerCase();
    });
    return key && w.type === 'color';
  });
  var formKeyWidget = map.widgets.find(function (w) {
    if (!w.keys) return;
    var key = w.keys.find(function (k) {
      return !k.value ? true : k.value.toLowerCase() === feature.properties[w.field].toLowerCase();
    });
    return key && w.type === 'form';
  });

  var _iterator = styleNonPoint_createForOfIteratorHelper(map.widgets),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var w = _step.value;
      var colorKey = colorKeyWidget ? colorKeyWidget.keys.find(function (k) {
        return !k.value ? true : k.value.toLowerCase() === feature.properties[colorKeyWidget.field].toLowerCase();
      }) : null;
      var formKey = formKeyWidget ? formKeyWidget.keys.find(function (k) {
        return !k.value ? true : k.value.toLowerCase() === feature.properties[formKeyWidget.field].toLowerCase();
      }) : null;
      var color = colorKey ? colorKey.color : formKey ? formKey.color : null;
      var formKeyForm = formKeyWidget ? formKeyWidget.keys.reduce(function (a, c) {
        return c.form;
      }) : null;
      var colorKeyForm = colorKeyWidget ? colorKeyWidget.keys.reduce(function (a, c) {
        return c.form;
      }) : null;
      var form = formKeyWidget ? formKeyWidget.keys.reduce(function (a, c) {
        return c.form;
      }) : null;

      if (formKeyWidget && form === 'line') {
        forms = formKeyWidget.keys.map(function (f) {
          return f.value;
        });
        forms.forEach(function (f, i) {
          switch (i) {
            case 0:
              colors.push(['transparent', null]);
              break;

            case 1:
              colors.push([null, defaultColor]);
              break;

            case 2:
              colors.push(['#000000', null]);
              break;

            case 3:
              colors.push(['#ffffff', null]);
              break;

            default:
              colors.push([null, null]);
              break;
          }
        });
      }

      if (forms.length && formKeyForm === 'line' || forms.length && colorKeyForm === 'line') {
        if (formKeyWidget) {
          var i = forms.indexOf(feature.properties[formKeyWidget.field]);

          if (i > -1) {
            nonPointStyle = {
              color: colors[i][index] === undefined ? '#cad2d3' : colors[i][index] !== null ? colors[i][index] : color,
              weight: helpers["f" /* lineWeights */][i][index],
              lineCap: 'square',
              dashArray: helpers["e" /* lineDashArrays */][i] ? helpers["e" /* lineDashArrays */][i][index] : null
            };
          }
        }
      } else if (formKeyForm === 'line' || colorKeyForm === 'line') {
        nonPointStyle = {
          color: color,
          weight: 2,
          lineCap: 'square',
          dashArray: '3,7'
        };
      } else if (colorKey && colorKey.form === 'pattern') {
        var pattern;

        switch (true) {
          case colorKey.pattern[0].indexOf('stripe') > -1:
            var patternOptions = {
              weight: 3,
              spaceWeight: 3,
              color: colorKey.pattern[1],
              spaceColor: colorKey.pattern[colorKey.pattern.length - 1],
              spaceOpacity: 1,
              angle: 45
            };
            pattern = new L.StripePattern(patternOptions);
            break;

          case colorKey.pattern[0].indexOf('dot') > -1:
            var shapeOptions = {
              x: 4,
              y: 4,
              radius: 2,
              fill: true,
              stroke: false,
              fillColor: colorKey.pattern[colorKey.pattern.length - 1],
              fillOpacity: 1
            };
            var shape = new L.PatternCircle(shapeOptions);
            var patternOptions = {
              width: 8,
              height: 8
            };
            pattern = new L.Pattern(patternOptions);
            pattern.addShape(shape);
            break;
        }

        pattern.addTo(map.leaflet);
        nonPointStyle = {
          fillPattern: pattern ? pattern : null,
          fillColor: color,
          color: defaultColor,
          fillOpacity: 0.7,
          opacity: 0.5,
          weight: 2,
          lineCap: 'square'
        };
      } else {
        var lineColor;
        var lineWeight;
        var lineOpacity;

        switch (true) {
          case feature.geometry.type.toLowerCase().indexOf('line') > -1:
            lineColor = color ? chroma(color).brighten().hex() : null;
            lineOpacity = 1;
            lineWeight = 4;
            break;

          case feature.geometry.type.toLowerCase().indexOf('polygon') > -1:
            lineColor = defaultColor;
            lineOpacity = 0.5;
            lineWeight = 2;
            break;
        }

        nonPointStyle = {
          fillPattern: pattern,
          fillColor: color,
          color: lineColor,
          fillOpacity: 0.7,
          opacity: lineOpacity,
          weight: lineWeight
        };
      }

      if (nonPointStyle) return nonPointStyle;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
// CONCATENATED MODULE: ./src/js/makeGeoJsonOptions.js



window.handleFeatureEvents = handleFeatureEvents;
window.stylePoint = stylePoint;
window.styleNonPoint = styleNonPoint;
function makeGeoJsonOptions(map, colorKeyWidgets, formKeyWidgets) {
  function filter(feature) {
    return map.filters.map(function (f) {
      return f(feature);
    }).every(function (f) {
      return f !== false;
    });
  }

  function onEachFeature(feature, layer) {
    handleFeatureEvents(feature, layer, map);
  }

  var backgroundOptions = {
    filter: filter,
    onEachFeature: onEachFeature,
    pointToLayer: map.pointStyle || function (feature, latlng) {
      return stylePoint(feature, latlng, map);
    },
    style: map.nonPointStyle || function (feature) {
      return styleNonPoint(feature, map, 0);
    }
  };
  var foregroundOptions = {
    filter: filter,
    onEachFeature: onEachFeature,
    pointToLayer: map.pointStyle || function (feature, latlng) {
      return stylePoint(feature, latlng, map);
    },
    style: map.nonPointStyle || function (feature) {
      return styleNonPoint(feature, map, 1);
    }
  };
  return [backgroundOptions, foregroundOptions];
}
// CONCATENATED MODULE: ./src/js/makeLayers.js

function makeLayers(map) {
  var colorKeyWidgets = [],
      formKeyWidgets = [];

  if (map.widgets) {
    colorKeyWidgets = map.widgets.filter(function (w) {
      return w.type === 'color';
    });
    formKeyWidgets = map.widgets.filter(function (w) {
      return w.type === 'form';
    });
  }

  var geoJsonOptions = map.geojsonoptions ? map.geojsonoptions(map) : makeGeoJsonOptions(map);
  map.json.forEach(function (json, i) {
    var clusterColor, colorKeyWidget;

    if (colorKeyWidgets.length) {
      var colorKeys = colorKeyWidgets.map(function (widget) {
        var collectionName = json.features[0].properties[widget.field];
        var key = widget.keys.find(function (key) {
          return key.value.toLowerCase() === collectionName.toLowerCase();
        });

        if (key) {
          colorKeyWidget = widget;
        }

        return key;
      }).filter(function (colorKey) {
        return colorKey;
      });
      clusterColor = colorKeys[0] ? colorKeys[0].color : '#000000';
    } else {
      clusterColor = '#000000';
    }

    var allPoints = json.features.every(function (feature) {
      return feature.geometry && feature.geometry.type.toLowerCase() === 'point';
    });
    map.groups.push(new L.MarkerClusterGroup({
      showCoverageOnHover: false,
      zoomToBoundsOnClick: false,
      maxClusterRadius: allPoints && map.clusterdistance ? map.clusterdistance : NaN,
      iconCreateFunction: function iconCreateFunction(cluster) {
        return L.divIcon({
          className: 'icon-group',
          html: '<span class="text" style="border: 2px solid' + clusterColor + '; color:' + clusterColor + '">' + cluster.getChildCount() + '</span>'
        });
      }
    }));
    var hasLineFeatures = json.features.some(function (feature) {
      return feature.geometry && feature.geometry.type.toLowerCase().indexOf('line') > -1;
    });
    geoJsonOptions.forEach(function (option, index) {
      if (colorKeyWidget) {
        json.features = json.features.sort(function (a, b) {
          return b.properties[colorKeyWidget.field].localeCompare(a.properties[colorKeyWidget.field]);
        });
      }

      var geoJson = L.geoJson(json, option);

      if (!hasLineFeatures && index % 2 === 0 || hasLineFeatures || map.geojsonoptions) {
        map.groups[i].addLayer(geoJson);
      }
    });

    if (map.groups[i].getLayers().length) {
      map.leaflet.addLayer(map.groups[i]);
      map.groups[i].on('clusterclick', function (e) {
        handleClusterClick(e, map, i);
      });
    }
  });
}

function handleClusterClick(e, map, i) {
  map.leaflet._layers[e.layer._leaflet_id].spiderfy();

  Object.keys(map.leaflet._layers).forEach(function (layer, i) {
    if (parseInt(layer, 10) !== e.layer._leaflet_id) {
      if (map.leaflet._layers[layer].unspiderfy) map.leaflet._layers[layer].unspiderfy();
    }
  });
  var isSpiderfied = false;
  Object.values(map.groups[i]._featureGroup._layers).forEach(function (v) {
    if (v._group && v._group._spiderfied) isSpiderfied = true;
  });
  Array.from(document.querySelectorAll('div.leaflet-marker-icon')).forEach(function (d) {
    return d.style.opacity = isSpiderfied ? 0.33 : 1;
  });
  Array.from(document.querySelectorAll('img.leaflet-marker-icon')).forEach(function (d) {
    return d.style.opacity = isSpiderfied ? 0.33 : 1;
  });
  Object.values(map.groups[i]._featureGroup._layers).filter(function (v) {
    e.layer.getAllChildMarkers().map(function (m) {
      return m.getElement();
    }).filter(function (m) {
      return m;
    }).forEach(function (m) {
      return m.style.opacity = 1;
    });
  });
}

/***/ }),
/* 3 */
/*!***************************!*\
  !*** ./src/js/parsers.js ***!
  \***************************/
/*! exports provided: parseLanguageData, parseLegendData, parseMetaData, parseWidgetData */
/*! exports used: parseLanguageData, parseLegendData, parseMetaData, parseWidgetData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseLanguageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return parseLegendData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return parseMetaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parseWidgetData; });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ 0);

function parseLanguageData(data) {
  var languageData = {};
  data.forEach(function (row) {
    var key;
    Object.keys(row).forEach(function (column, i) {
      if (column.indexOf('gsx$') > -1) {
        var columnName = column.replace('gsx$', '');

        if (columnName === 'en') {
          key = row[column]['$t'];
          languageData[key] = {};
        }

        if (columnName === lang) {
          languageData[key] = row[column]['$t'];
        }
      }
    });
  });
  return languageData;
}
function parseLegendData(options, json, style) {
  var colorScale = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* createColorScale */ "c"])(json.length);
  var legendItems = [];
  json.forEach(function (row, x) {
    var data = {};
    Object.keys(row).forEach(function (column, y) {
      if (column.indexOf('gsx$') > -1) {
        var columnName = column.replace('gsx$', '');

        if (columnName === 'label') {
          var key = row[column]['$t'].toLowerCase();
          data.key = key;
          data.label = row[Object.keys(row)[y + 0]]['$t'];
          data.value = row[Object.keys(row)[y + 1]]['$t'];
          data.group = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* convertType */ "b"])(row[Object.keys(row)[y + 2]]['$t']);
          data.selected = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* convertType */ "b"])(row[Object.keys(row)[y + 3]]['$t']);
          var colorVal = row[Object.keys(row)[y + 4]]['$t'];
          data.form = row[Object.keys(row)[y + 5]]['$t'];
          data.color = colorVal ? colorVal : data.form === 'line' ? defaultColor : colorScale[x];
          data.icon = row[Object.keys(row)[y + 6]]['$t'];
          data.pattern = row[Object.keys(row)[y + 7]]['$t'].split(',');

          if (options.translations) {
            data.label = options.translations[data.label];
            data.group = options.translations[data.group];
          }

          legendItems.push(data);
        }
      }
    });
  });
  return legendItems;
}
function parseMetaData(json) {
  var data = {};
  json.forEach(function (row, x) {
    Object.keys(row).forEach(function (column, y) {
      if (column.indexOf('gsx$') > -1) {
        var columnName = column.replace('gsx$', '');

        if (columnName === 'property') {
          var key = row[column]['$t'].toLowerCase().replace(/ /g, '');
          data[key] = data[key] || {};
          data[key] = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* convertType */ "b"])(row[Object.keys(row)[y + 1]]['$t']);
        }
      }
    });
  });
  return data;
}
function parseWidgetData(metaData) {
  var widgets = [];

  function process(k, index, property) {
    if (k.toLowerCase().indexOf(property) > -1) widgets[index - 1][property] = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* convertType */ "b"])(metaData[k]);
  }

  var properties = ['input', 'field', 'grouping', 'instructions', 'maximum', 'type', 'reference', 'style'];
  Object.keys(metaData).filter(function (k) {
    return k.toLowerCase().indexOf('widget') > -1;
  }).forEach(function (k) {
    var index = k.match(/\d+/)[0];
    widgets[index - 1] = widgets[index - 1] || {};
    properties.forEach(function (property) {
      process(k, index, property);
    });
  });
  widgets.forEach(function (w, i) {
    w.field = w.field.replace(/ /g, '_');
    w.id = i;
  });
  return widgets;
}

/***/ }),
/* 4 */
/*!*****************************!*\
  !*** ./src/js/CustomMap.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomMap; });
var mapId = 0;
function CustomMap(container, properties) {
  this.id = mapId++;
  this.filters = [];
  this.groups = [];
  this.json = [];
  this.leaflet;

  var _this = this;

  Object.keys(properties).forEach(function (property) {
    _this[property.toLowerCase().replace(/ /g, '')] = properties[property];
  });

  if (_this.translations) {
    window.translations = _this.translations;
  }

  _this.popupcontent = _this.popupcontent && typeof _this.popupcontent === 'string' ? _this.popupcontent.split(',') : _this.popupcontent && this.popupcontent === 'object' ? _this.popupcontent : [];
  _this.popupheaders = _this.popupheaders && typeof _this.popupheaders === 'string' ? _this.popupheaders.split(',') : _this.popupheaders && _this.popupheaders === 'object' ? _this.popupheaders : [];
  CustomMap.all = CustomMap.all || [];
  CustomMap.all.push(this);

  _this.resetFilters = function () {
    _this.filters = [];
  };

  _this.removeGroups = function () {
    _this.groups.forEach(function (group) {
      _this.leaflet.removeLayer(group);
    });

    _this.groups = [];
  };

  this.render = function () {
    _this.leaflet = L.map(container, {
      minZoom: _this.minzoom || null,
      maxZoom: _this.maxzoom || 20,
      maxBounds: _this.maxbounds || [_this.swbounds, _this.nebounds],
      scrollWheelZoom: window.innerWidth < 768 ? false : true,
      zoomControl: !_this.hasOwnProperty('zoomslider') || _this.zoomslider ? false : true,
      attributionControl: false
    });
    if (_this.loadevent) _this.leaflet.on('load', _this.loadevent);
    if (_this.addevent) _this.leaflet.on('layeradd', _this.addevent);
    this.leaflet.setView(_this.center, _this.zoom || 2);
    L.tileLayer('https://api.mapbox.com/styles/v1/ilabmedia/' + _this.mapboxstyle + '/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw', {}).addTo(_this.leaflet);

    if (!_this.hasOwnProperty('zoomslider') || _this.zoomslider) {
      L.control.zoomslider().addTo(_this.leaflet);
    }

    if (_this.fullscreen) {
      window.fullscreen = new L.Control.Fullscreen();

      _this.leaflet.addControl(window.fullscreen);
    }

    L.control.attribution({
      position: 'bottomleft'
    }).setPrefix(_this.attribution).addTo(_this.leaflet);

    _this.resetFilters();

    return _this;
  };
}

/***/ }),
/* 5 */
/*!*************************************!*\
  !*** ./src/js/makeDocumentNodes.js ***!
  \*************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeDocumentNodes; });
function makeDocumentNodes(options) {
  var newSectionHTML = '';
  newSectionHTML += '<section id="' + options.slug + '">';
  newSectionHTML += '<div id="' + options.slug + '__map" class="map"></div>';
  newSectionHTML += '<aside class="toolbox">';
  newSectionHTML += options.title ? '<input type="checkbox" checked class="ui mobile-only"><div class="hamburger mobile-only"><div class="icon"> <span></span> <span></span> <span></span></div><div class="menu translate"></div></div>' : '';
  newSectionHTML += '<div class="box">';
  newSectionHTML += options.title || options.logo || options.description ? '<header  class="translate"> <h1><a target="_blank" id="logo"><img src="https://raw.githubusercontent.com/CSIS-iLab/amti-viz/master/logo.jpeg" alt="AMTI logo"/></a></h1>  <p class="translate"></p></header>' : '';
  newSectionHTML += (options.instructions ? '<p class="translate">' + options.instructions + '</p>' : '') + '<div id="controls"><div class="loader"></div></div><footer><div class="hidden"></div></footer></div></aside>';
  newSectionHTML += options.titlecardcontent ? '<button id="' + options.slug + '__about" class="about-trigger translate">ABOUT THIS MAP</button>' : '';
  newSectionHTML += '</section>';
  document.body.innerHTML += newSectionHTML;
  var translatableStrings;

  if (lang) {
    translatableStrings = Object.keys(options.translations).sort(function (a, b) {
      return b.length - a.length;
    });
  }

  if (options.titlecardcontent) {
    var newDialogHTML = '';
    newDialogHTML += '<div class="dialog" id="' + options.slug + '__dialog">';
    newDialogHTML += '<div class="dialog-overlay" tabindex="-1" data-a11y-dialog-hide></div>';
    newDialogHTML += '<dialog class="dialog-content" aria-labelledby="dialogTitle" aria-describedby="dialogContent">';
    newDialogHTML += '<button data-a11y-dialog-hide class="dialog-close" aria-label="Close this dialog window">&times;</button>';
    newDialogHTML += options.titlecardtitle ? '<h1 id="dialogTitle">' + options.titlecardtitle + '</h1>' : '';
    newDialogHTML += '<div id="dialogContent">' + options.titlecardcontent + '</div>';
    newDialogHTML += '</dialog>';
    newDialogHTML += '</div>';

    if (lang) {
      translatableStrings.forEach(function (t) {
        var re = new RegExp('\\b(' + RegExp.escape(t) + ')', 'gi');
        newDialogHTML = newDialogHTML.replace(re, options.translations[t]);
      });
    }

    document.body.innerHTML += newDialogHTML;
    document.body.style.overflow = 'hidden';
    var dialogEl = document.getElementById(options.slug + '__dialog');
    var mainEl = document.getElementById('options.slug');
    var dialogTrigger = document.getElementById(options.slug + '__about');
    var dialogBox = new A11yDialog(dialogEl, mainEl);
    var dialog = dialogBox.dialog;
    dialogBox.show();
    dialogBox.on('hide', function (dialogEl) {
      dialogTrigger.style.display = 'block';
    });
    dialogBox.on('show', function (dialogEl) {
      dialogTrigger.style.display = 'none';
    });
    dialogTrigger.addEventListener('click', function () {
      dialogBox.show();
    });
  }

  document.title = options.title + ' | CSIS ' + options.program;
  var metaLocaleOG = document.createElement('meta');
  metaLocaleOG.setAttribute('property', 'og:locale');
  metaLocaleOG.setAttribute('content', 'en_US');
  document.head.appendChild(metaLocaleOG);
  var metaTypeOG = document.createElement('meta');
  metaTypeOG.setAttribute('property', 'og:type');
  metaTypeOG.setAttribute('content', 'article');
  document.head.appendChild(metaTypeOG);
  var metaWidthOG = document.createElement('meta');
  metaWidthOG.setAttribute('property', 'og:image:width');
  metaWidthOG.setAttribute('content', '2000');
  document.head.appendChild(metaWidthOG);
  var metaHeightOG = document.createElement('meta');
  metaHeightOG.setAttribute('property', 'og:image:height');
  metaHeightOG.setAttribute('content', '1333');
  document.head.appendChild(metaHeightOG);
  var metaTwitterCardOG = document.createElement('meta');
  metaTwitterCardOG.setAttribute('property', 'twitter:card');
  metaTwitterCardOG.setAttribute('content', 'summary');
  document.head.appendChild(metaTwitterCardOG);
  var metaTitleOG = document.createElement('meta');
  metaTitleOG.setAttribute('property', 'og:title');
  metaTitleOG.setAttribute('content', options.title + ' | CSIS ' + options.program);
  document.head.appendChild(metaTitleOG);
  var metaTitleTwitter = document.createElement('meta');
  metaTitleTwitter.setAttribute('property', 'twitter:title');
  metaTitleTwitter.setAttribute('content', options.title + ' | CSIS ' + options.program);
  document.head.appendChild(metaTitleTwitter);
  var metaDescriptionOG = document.createElement('meta');
  metaDescriptionOG.setAttribute('property', 'og:description');
  metaDescriptionOG.setAttribute('content', options.description);
  document.head.appendChild(metaDescriptionOG);
  var metaDescriptionTwitter = document.createElement('meta');
  metaDescriptionTwitter.setAttribute('property', 'twitter:description');
  metaDescriptionTwitter.setAttribute('content', options.description);
  document.head.appendChild(metaDescriptionTwitter);
  var metaImageOG = document.createElement('meta');
  metaImageOG.setAttribute('property', 'og:image');
  metaImageOG.setAttribute('content', options.screenshot);
  document.head.appendChild(metaImageOG);
  var metaImageTwitter = document.createElement('meta');
  metaImageTwitter.setAttribute('property', 'twitter:image');
  metaImageTwitter.setAttribute('content', options.screenshot);
  document.head.appendChild(metaImageTwitter);

  if (document.querySelector('#' + options.slug + ' header')) {
    document.querySelector('#' + options.slug + ' .menu').innerText = options.title;
    document.querySelector('#' + options.slug + ' header h1').innerHTML += options.title;
    document.querySelector('#' + options.slug + ' header a').style.backgroundImage = options.logo ? 'url(' + options.logo + ')' : '';
    document.querySelector('#' + options.slug + ' header a').href = options.website ? options.website : '';
    document.querySelector('#' + options.slug + ' header p').innerText = options.description ? options.description : '';
  }
}

/***/ }),
/* 6 */
/*!*******************************************!*\
  !*** ./src/js/makeWidgets.js + 1 modules ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/CustomMap.js because of ./src/js/initWithoutSpreadsheet.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/helpers.js because of ./src/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/makeLayers.js because of ./src/js/initWithoutSpreadsheet.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/parsers.js because of ./src/index.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/styleKey.js because of ./src/index.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ makeWidgets; });

// EXTERNAL MODULE: ./src/js/styleKey.js
var styleKey = __webpack_require__(1);

// EXTERNAL MODULE: ./src/js/CustomMap.js
var CustomMap = __webpack_require__(4);

// EXTERNAL MODULE: ./src/js/makeLayers.js + 4 modules
var makeLayers = __webpack_require__(2);

// EXTERNAL MODULE: ./src/js/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/mapWidgetsToState.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function mapWidgetsToState(_x, _x2) {
  return _mapWidgetsToState.apply(this, arguments);
}

function _mapWidgetsToState() {
  _mapWidgetsToState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options, widgetContent) {
    var container, map;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            container = document.querySelector('#' + options.slug + ' .map');
            map = new CustomMap["a" /* default */](container, options).render();
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              var tables = Object.keys(options).filter(function (k) {
                return k.toLowerCase().indexOf('table') > -1;
              });
              Promise.all(tables.map(function (table) {
                return fetch('https://csis.carto.com/api/v2/sql?api_key=' + map.apikey + '&format=geojson&q=SELECT%20*%20FROM%20' + options[table]);
              })).then(function (responses) {
                return Promise.all(responses.map(function (response) {
                  return response.json();
                }));
              }).then(function (jsons) {
                var json = jsons.reduce(function (a, b) {
                  return {
                    type: 'FeatureCollection',
                    features: a.features.concat(b.features)
                  };
                });
                var colorKeyWidget = map.widgets.find(function (w) {
                  return w.type === 'color';
                });
                map.json = [json];

                if (colorKeyWidget) {
                  map.json = [];
                  var featureGroups = json.features.groupBy(colorKeyWidget.field, 'properties');
                  Object.keys(featureGroups).sort(function (a, b) {
                    return featureGroups[b][0].properties[colorKeyWidget.field].localeCompare(featureGroups[a][0].properties[colorKeyWidget.field]);
                  }).map(function (feature) {
                    map.json.push({
                      type: 'FeatureCollection',
                      features: featureGroups[feature]
                    });
                  });
                }

                if (!options.widgets.length) {
                  Object(makeLayers["a" /* default */])(map);
                  var box = document.querySelector('#' + options.slug + ' #controls');
                  box.innerHTML = '';
                }

                var initialized = 0;
                options.widgets.forEach(function (w, x) {
                  var element = document.querySelector('#' + options.slug + ' .widget.' + options.widgets[x].field);

                  if (!document.querySelector('#reset-btn')) {
                    element.innerHTML += '<button type="button" id="reset-btn">Clear Claimants</button>';
                  }

                  var c;

                  if (element.querySelector('select') && widgetContent[x].options) {
                    c = new Choices(element.querySelector('select'), widgetContent[x].options);
                    var reset = element.querySelector('#reset-btn');
                    reset.addEventListener('mouseup', function () {
                      c.removeActiveItems();
                      if (map.groups.length) map.removeGroups();
                    });
                  }

                  if (element.querySelector('input[id^=\'search\']')) {
                    element.querySelector('#resetButton').addEventListener('click', function () {
                      handleReset(element, map, x);
                    });
                  }

                  var reset = Array.from(element.querySelectorAll('button'));
                  var selects = Array.from(element.querySelectorAll('select'));
                  var checks = Array.from(element.querySelectorAll('input[type=\'checkbox\']'));
                  var search = Array.from(element.querySelectorAll('input[type=\'text\']:not(.choices__input)'));
                  var toggle = Array.from(element.querySelectorAll('input[type=\'radio\']'));
                  var inputs = selects.concat(checks).concat(search).concat(toggle).concat(reset);

                  if (!inputs.length) {
                    if (!initialized) {
                      Object(makeLayers["a" /* default */])(map);
                    }

                    initialized++;
                  }

                  var count = inputs.length;
                  inputs.forEach(function (input) {
                    if (input.type === 'text') {
                      input.addEventListener('keyup', function () {
                        handleChange(map, element, options.widgets, x, count, ++initialized);
                      });
                    } else {
                      input.addEventListener('change', function () {
                        handleChange(map, element, options.widgets, x, count, ++initialized);
                      });
                    }

                    if ('createEvent' in document) {
                      var evt = document.createEvent('HTMLEvents');
                      evt.initEvent('change', false, true);
                      input.dispatchEvent(evt);
                    } else {
                      input.fireEvent('onchange');
                    }

                    w.map_id = map.id;
                  });
                });

                if (map.translations) {
                  var translatableNodes = Array.from(document.querySelectorAll('.translate'));
                  var translatableStrings = Object.keys(map.translations).sort(function (a, b) {
                    return b.length - a.length;
                  });
                  translatableNodes.forEach(function (el, i) {
                    translatableStrings.forEach(function (t) {
                      if (Object.keys(map.translations[t]).length) {
                        var re = new RegExp('\\b(' + RegExp.escape(t) + ')', 'gi');
                        el.innerHTML = el.innerHTML.replace(re, map.translations[t]);
                      }
                    });
                  });
                }

                resolve(map);
              });
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _mapWidgetsToState.apply(this, arguments);
}

function handleReset(element, map, x) {
  element.querySelector('input[type=\'text\']').value = '';
  if (map.groups.length) map.removeGroups();

  map.filters[x] = function () {
    return true;
  };

  Object(makeLayers["a" /* default */])(map);
}

function handleChange(map, element, widgets, x, count, initialized) {
  var keylessWidgets = ['toggle', 'search'];
  var options = element.querySelector('select') ? Array.from(element.querySelector('select').options) : element.querySelector('input[type=\'text\']') ? Array.from(element.querySelectorAll('input[type=\'text\']')) : Array.from(element.querySelectorAll('input'));
  var selections = element.querySelector('select') ? Array.from(element.querySelector('select').options) : element.querySelector('input[type=\'text\']') ? Array.from(element.querySelectorAll('input[type=\'text\']')) : Array.from(element.querySelectorAll('input:checked'));
  var possibleChecks = Array.from(element.querySelectorAll('input')).map(function (o) {
    return o.name.toLowerCase();
  });
  var possibleOptions, possibleQueries;

  if (keylessWidgets.indexOf(widgets[x].input) < 0) {
    possibleOptions = widgets[x].keys.map(function (key) {
      return key.value.toLowerCase();
    });
    possibleQueries = possibleChecks.concat(possibleOptions);
  }

  var query = Array.from(selections).map(function (o) {
    return element.querySelector('input[type=\'checkbox\']') ? o.name.toLowerCase() : o.value.toLowerCase();
  });
  map.filters[widgets[x].id] = widgets[x].input === 'toggle' ? function (feature) {
    var bool = true;

    if (feature.properties.toggle) {
      bool = Object(helpers["b" /* convertType */])(query[0]) ? true : false;
    } else {
      bool = true;
    }

    return bool;
  } : widgets[x].field === 'all' ? function (feature) {
    var bool = true;
    var withDiacritics = Object.values(feature.properties).join('').toLowerCase();
    var withoutDiacritics = Object.values(feature.properties).join('').toLowerCase().latinise();

    if (withDiacritics.indexOf(query[0]) < 0 && withoutDiacritics.indexOf(query[0]) < 0) {
      bool = false;
    }

    return bool;
  } : function (feature, layers) {
    var bool = true;
    var field = widgets[x].grouping ? widgets[x].grouping : widgets[x].field;

    if (possibleQueries.indexOf(feature.properties[field].toLowerCase()) > -1 && query.indexOf(feature.properties[field].toLowerCase()) < 0) {
      bool = false;
    }

    return bool;
  };
  if (initialized >= count) map.removeGroups();
  if (widgets.length >= x + 1 && initialized >= count) Object(makeLayers["a" /* default */])(map);
}
// EXTERNAL MODULE: ./src/js/parsers.js
var parsers = __webpack_require__(3);

// CONCATENATED MODULE: ./src/js/makeWidgets.js
function makeWidgets_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function makeWidgets_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { makeWidgets_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { makeWidgets_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





window.styleKey = styleKey["a" /* default */];
function makeWidgets(_x, _x2, _x3) {
  return _makeWidgets.apply(this, arguments);
}

function _makeWidgets() {
  _makeWidgets = makeWidgets_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(jsons, options, boxContent) {
    var widgetContent;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            widgetContent = [];
            options.widgets.forEach(function (w, x) {
              if (!w.hasOwnProperty('id')) w.id = x;
              var legendData = w.reference ? Object(parsers["b" /* parseLegendData */])(options, jsons[x].feed.entry, w.type) : w.keys;
              options.widgets[x].keys = legendData;
              widgetContent.push(formatWidgets(options, x));
              boxContent += '<section class="widget ' + options.widgets[x].field + '"><h3 class="translate">' + widgetContent[x].title + '</h3>';
              boxContent += widgetContent[x].nodes;
              boxContent += '</section>';
              var box = document.querySelector('#' + options.slug + ' #controls');
              box.innerHTML = boxContent;
              var labelText = document.querySelectorAll('#' + options.slug + ' .itemText');
              Array.from(labelText).forEach(function (itemText) {
                var height = itemText.offsetHeight;
                var fontSize = window.getComputedStyle(itemText)['font-size'];
                var offset = height / parseInt(fontSize.replace('px', ''), 10);
                itemText.style.transform = 'translateY(' + offset * 10 + '%)';
              });
            });
            _context.next = 4;
            return mapWidgetsToState(options, widgetContent);

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _makeWidgets.apply(this, arguments);
}

function formatWidgets(options, x) {
  var widgetNodes = '';
  var dropdownOptions;
  console.log(options, x);

  switch (options.widgets[x].input) {
    case 'toggle':
      widgetNodes += '<label for="toggle_' + options.widgets[x].field + '" class="translate"><input type="radio" name="' + options.widgets[x].field + '" id="toggle_' + options.widgets[x].field + '"  value="1" checked>Show</label>';
      widgetNodes += '<label for="$toggle_' + options.widgets[x].field + '" class="translate"><input type="radio" name="' + options.widgets[x].field + '" id="toggle_' + options.widgets[x].field + '" value="0" >Hide</label>';
      break;

    case 'search':
      widgetNodes += '<input type="text" id="search_' + options.widgets[x].field + '" placeholder="' + options.widgets[x].instructions + '" size="10" />';
      widgetNodes += '<button type="button" id="resetButton" class="translate">Reset</button>';
      break;

    case 'dropdown':
      widgetNodes += '<select id="dropdown_' + options.widgets[x].field + '" placeholder="' + 'Search and add up to 6 Claimants' + '" multiple=""></select>';
      dropdownOptions = Object(helpers["h" /* makeDropdownOptions */])(options, x);
      break;

    case 'checkbox':
      widgetNodes += '<ul>';
      var keyStyle;
      var legendItems = options.widgets[x].grouping ? options.widgets[x].keys.groupBy('group') : options.widgets[x].keys.groupBy('label');
      Object.keys(legendItems).forEach(function (group, i) {
        switch (options.widgets[x].type) {
          case 'form':
            var forms = options.widgets[x].keys.map(function (f) {
              return f.value;
            });
            var styleOptions = {
              group: legendItems[group],
              index: i,
              forms: forms,
              map: options
            };
            keyStyle = Object(styleKey["a" /* default */])(styleOptions);
            break;

          case 'color':
            var styleOptions = {
              map: options,
              group: legendItems[group]
            };
            keyStyle = Object(styleKey["a" /* default */])(styleOptions);
            break;
        }

        widgetNodes += '<li><label for="' + group + '"><input class="widget ' + options.widgets[x].input + '" type="checkbox" name="' + (options.widgets[x].grouping ? group : legendItems[group][0].value) + '" id="' + group + '" ' + (legendItems[group][0].selected ? 'checked' : '') + ' ><span class="' + keyStyle.class + 'Key" ' + 'style="background-image: url(\'' + keyStyle.svg + '")></span><span class="itemText">' + Object(helpers["a" /* capitalize */])(group) + '</span></label></li>';
      });
      widgetNodes += '</ul>';
      break;

    default:
      widgetNodes += '<ul>';
      var keyStyle;
      var legendItems = options.widgets[x].grouping ? options.widgets[x].keys.groupBy('group') : options.widgets[x].keys.groupBy('label');
      Object.keys(legendItems).forEach(function (group, i) {
        switch (options.widgets[x].type) {
          case 'form':
            var forms = options.widgets[x].keys.map(function (f) {
              return f.value;
            });
            var styleOptions = {
              group: legendItems[group],
              index: i,
              forms: forms,
              map: options
            };
            keyStyle = Object(styleKey["a" /* default */])(styleOptions);
            break;

          case 'color':
            var styleOptions = {
              map: options,
              group: legendItems[group]
            };
            keyStyle = Object(styleKey["a" /* default */])(styleOptions);
            break;
        }

        widgetNodes += '<li><span class="' + keyStyle.class + 'Key" ' + 'style="background-image: url(\'' + keyStyle.svg + '")></span><span class="itemText">' + Object(helpers["a" /* capitalize */])(group) + '</span></li>';
      });
      widgetNodes += '</ul>';
      break;
  }

  var widgetTitle = options.widgets[x].field === 'all' ? 'Search' : options.widgets[x].field.replace(/_/g, ' ');
  return {
    nodes: widgetNodes,
    title: widgetTitle,
    options: dropdownOptions
  };
}

/***/ }),
/* 7 */
/*!***************************************!*\
  !*** ./src/js/initWithSpreadsheet.js ***!
  \***************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/js/makeMap.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initWithSpreadsheet; });
/* harmony import */ var _parsers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers.js */ 3);
/* harmony import */ var _makeWidgets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeWidgets.js */ 6);
/* harmony import */ var _makeDocumentNodes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeDocumentNodes.js */ 5);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function initWithSpreadsheet(_x, _x2, _x3) {
  return _initWithSpreadsheet.apply(this, arguments);
}

function _initWithSpreadsheet() {
  _initWithSpreadsheet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dataURL, options, translations) {
    var map;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              return fetch(dataURL + options.googleSheet + '/' + 2 + '/public/values?alt=json').then(function (response) {
                return response.json();
              }).then(function (json) {
                var metaData = Object(_parsers_js__WEBPACK_IMPORTED_MODULE_0__[/* parseMetaData */ "c"])(json.feed.entry);
                var widgets = Object(_parsers_js__WEBPACK_IMPORTED_MODULE_0__[/* parseWidgetData */ "d"])(metaData);
                var properties = {};
                Object.keys(metaData).forEach(function (data) {
                  properties[data] = metaData[data];
                });
                Object.keys(options).forEach(function (data) {
                  properties[data] = options[data];
                });
                var twoD_properites = [{
                  name: 'center',
                  default: [0, 0]
                }, {
                  name: 'iconsize',
                  default: [20, 20]
                }, {
                  name: 'iconanchor',
                  default: [5, 5]
                }, {
                  name: 'swbounds',
                  default: [-90, -180]
                }, {
                  name: 'nebounds',
                  default: [90, 180]
                }];
                twoD_properites.forEach(function (property) {
                  properties[property.name] = typeof properties[property.name] === 'string' ? properties[property.name].split(',').map(function (v) {
                    return parseInt(v, 10);
                  }) : properties[property.name] ? properties[property.name] : property.default;
                });
                properties.slug = properties.mapID.toLowerCase().replace(/ /g, '-');
                properties.translations = translations;
                properties.widgets = widgets;
                Object(_makeDocumentNodes_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(properties);
                var referenceSheets = widgets.filter(function (w) {
                  return w.reference;
                });

                if (referenceSheets) {
                  var boxContent = '';
                  var referenceSheetURLS = widgets.map(function (w) {
                    if (w.reference) {
                      return dataURL + options.googleSheet + '/' + w.reference + '/public/values?alt=json';
                    }
                  }).filter(function (u) {
                    return u;
                  });
                  Promise.all(referenceSheetURLS.map(function (url) {
                    return fetch(url);
                  })).then(function (responses) {
                    return Promise.all(responses.map(function (response) {
                      return response.json();
                    }));
                  }).then( /*#__PURE__*/function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(jsons) {
                      var footerNode, penUltimateNode;
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.next = 2;
                              return Object(_makeWidgets_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(jsons, properties, boxContent);

                            case 2:
                              map = _context.sent;

                              if (properties.footer && properties.footer.trim()) {
                                footerNode = document.createElement('footer');
                                footerNode.innerHTML = properties.footer + '  <div class="hidden"></div>';
                                penUltimateNode = document.querySelector('#' + properties.slug + ' #controls') || document.querySelector('#' + properties.slug + 'header');
                                penUltimateNode.parentNode.insertBefore(footerNode, penUltimateNode.nextSibling);
                              }

                              resolve(map);

                            case 5:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }, _callee);
                    }));

                    return function (_x4) {
                      return _ref.apply(this, arguments);
                    };
                  }());
                } else {
                  var map = new CustomMap(container, options).render();
                  makeLayers(map);
                  var box = document.querySelector('#' + options.slug + ' #controls');
                }

                if (properties.footer && properties.footer.trim()) {
                  var footerNode = document.createElement('footer');
                  footerNode.innerHTML = properties.footer + '  <div class="hidden"></div>';
                  var penUltimateNode = document.querySelector('#' + properties.slug + ' #controls') || document.querySelector('#' + properties.slug + 'header');
                  penUltimateNode.parentNode.insertBefore(footerNode, penUltimateNode.nextSibling);
                }
              });
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _initWithSpreadsheet.apply(this, arguments);
}

/***/ }),
/* 8 */
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader??ref--5-2!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/dist/cjs.js??ref--5-4!./main.scss */ 9);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ 10)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 9 */
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader??ref--5-2!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/dist/cjs.js??ref--5-4!./src/scss/main.scss ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ 11);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 11 */
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 12 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),
/* 13 */
/*!******************************************!*\
  !*** ./src/js/initWithoutSpreadsheet.js ***!
  \******************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/js/makeMap.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initWithoutSpreadsheet; });
/* harmony import */ var _makeDocumentNodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeDocumentNodes.js */ 5);
/* harmony import */ var _makeLayers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeLayers.js */ 2);
/* harmony import */ var _makeWidgets_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeWidgets.js */ 6);
/* harmony import */ var _CustomMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomMap.js */ 4);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





window.makeLayers = _makeLayers_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"];
function initWithoutSpreadsheet(_x, _x2) {
  return _initWithoutSpreadsheet.apply(this, arguments);
}

function _initWithoutSpreadsheet() {
  _initWithoutSpreadsheet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options, translations) {
    var twoD_properites, container, map;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            twoD_properites = [{
              name: 'center',
              default: [0, 0]
            }, {
              name: 'iconsize',
              default: [20, 20]
            }, {
              name: 'iconanchor',
              default: [5, 5]
            }, {
              name: 'swbounds',
              default: [-90, -180]
            }, {
              name: 'nebounds',
              default: [90, 180]
            }];
            twoD_properites.forEach(function (property) {
              options[property.name] = typeof options[property.name] === 'string' ? options[property.name].split(',').map(function (v) {
                return parseInt(v, 10);
              }) : options[property.name] ? options[property.name] : property.default;
            });
            options.slug = options.mapID.toLowerCase().replace(/ /g, '-');
            options.translations = translations;
            Object(_makeDocumentNodes_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(options);
            container = document.querySelector('#' + options.slug + '__map.map');

            if (!options.formatToolbox) {
              _context2.next = 11;
              break;
            }

            map = new _CustomMap_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](container, options).render();
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              return fetch('https://csis.carto.com/api/v2/sql?api_key=' + map.apikey + '&format=geojson&q=SELECT%20*%20FROM%20' + map.table).then(function (resp) {
                return resp.json();
              }).then(function (json) {
                map.json = [json];
                var box = document.querySelector('#' + options.slug + ' #controls');
                map.formattoolbox(box);
                Object(_makeLayers_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(map);
                resolve(map);
              });
            }));

          case 11:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              return fetch('https://csis.carto.com/api/v2/sql?api_key=' + (options.apikey || options.apiKey || options['api key']) + '&format=geojson&q=SELECT%20*%20FROM%20' + options.table).then(function (resp) {
                return resp.json();
              }).then( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(json) {
                  var box, boxContent, map, footerNode, penUltimateNode;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          options.json = [json];
                          box = document.querySelector('#' + options.slug + ' #controls');
                          boxContent = '';

                          if (!options.widgets) {
                            _context.next = 9;
                            break;
                          }

                          _context.next = 6;
                          return Object(_makeWidgets_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(options.json, options, boxContent);

                        case 6:
                          map = _context.sent;
                          _context.next = 12;
                          break;

                        case 9:
                          map = new _CustomMap_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"](container, options).render();
                          Object(_makeLayers_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(map);
                          box = document.querySelector('#' + options.slug + ' #controls');

                        case 12:
                          if (options.footer && options.footer.trim()) {
                            footerNode = document.createElement('footer');
                            footerNode.innerHTML = options.footer + '  <div class="hidden"></div>';
                            penUltimateNode = document.querySelector('#' + options.slug + ' #controls') || document.querySelector('#' + options.slug + 'header');
                            penUltimateNode.parentNode.insertBefore(footerNode, penUltimateNode.nextSibling);
                          }

                          resolve(map);

                        case 14:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x3) {
                  return _ref.apply(this, arguments);
                };
              }());
            }));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _initWithoutSpreadsheet.apply(this, arguments);
}

/***/ }),
/* 14 */
/*!**********************************!*\
  !*** ./src/index.js + 2 modules ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/helpers.js because of ./src/js/initWithoutSpreadsheet.js */
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/parsers.js because of ./src/js/initWithSpreadsheet.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/scss/main.scss
var main = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(12);

// EXTERNAL MODULE: ./src/js/parsers.js
var parsers = __webpack_require__(3);

// CONCATENATED MODULE: ./src/js/makeMap.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var url = window.location != window.parent.location ? document.referrer : document.location.href;
var href = /lang=([^&]+)/.exec(url);
window.lang = href ? href[1] : null;
var leafletLoaded = 0;
var primaryJsFiles = ['https://unpkg.com/leaflet@1.3.1/dist/leaflet.js', 'https://unpkg.com/whatwg-fetch@3.0.0/dist/fetch.umd.js'];
var secondaryJsFiles = ['https://unpkg.com/leaflet.zoomslider@0.7.1/src/L.Control.Zoomslider.js', 'https://unpkg.com/leaflet-fullscreen@1.0.2/dist/Leaflet.fullscreen.min.js', 'https://unpkg.com/chroma-js@2.0.3/chroma.min.js', 'https://csis-ilab.github.io/map-templates/dist/js/vendor/A11y-Dialog.js', 'https://unpkg.com/choices.js@7.0.0/public/assets/scripts/choices.min.js', 'https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js', 'https://csis-ilab.github.io/map-templates/dist/js/vendor/patterns.js', 'https://csis-ilab.github.io/map-templates/dist/js/vendor/latinize.js'];

function handleLoadLeaflet() {
  return new Promise(function (resolve, reject) {
    secondaryJsFiles.forEach(function (file) {
      var head = document.head;
      var jsLink = document.createElement('script');
      jsLink.src = file;
      head.appendChild(jsLink);

      jsLink.onload = function () {
        leafletLoaded++;

        if (leafletLoaded === secondaryJsFiles.length + primaryJsFiles.length) {
          resolve(leafletLoaded);
          return leafletLoaded;
        }
      };
    });
  });
}

function importFiles() {
  return _importFiles.apply(this, arguments);
}

function _importFiles() {
  _importFiles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              primaryJsFiles.forEach(function (file) {
                var head = document.head;
                var jsLink = document.createElement('script');
                jsLink.src = file;

                jsLink.onload = function () {
                  leafletLoaded++;

                  if (leafletLoaded === primaryJsFiles.length) {
                    handleLoadLeaflet();
                    resolve(leafletLoaded);
                    return leafletLoaded;
                  }
                };

                head.appendChild(jsLink);
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _importFiles.apply(this, arguments);
}

function makeMap_makeMap(_x) {
  return _makeMap.apply(this, arguments);
}

function _makeMap() {
  _makeMap = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(options) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (leafletLoaded) {
              _context3.next = 6;
              break;
            }

            _context3.next = 3;
            return importFiles().then( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(scriptsLoaded) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return init(options);

                      case 2:
                        return _context2.abrupt("return", _context2.sent);

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x3) {
                return _ref.apply(this, arguments);
              };
            }());

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 6:
            _context3.next = 8;
            return init(options);

          case 8:
            return _context3.abrupt("return", _context3.sent);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _makeMap.apply(this, arguments);
}

function init(_x2) {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(options) {
    var dataURL, translations, initWithSpreadsheet, initWithoutSpreadsheet;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            dataURL = 'https://spreadsheets.google.com/feeds/list/';
            window.defaultColor = options.oceancolor || options.oceanColor || options['ocean color'];

            if (!lang) {
              _context5.next = 6;
              break;
            }

            fetch(dataURL + options.googleSheet + '/' + 3 + '/public/values?alt=json').then(function (response) {
              return response.json();
            }).then( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(json) {
                var initWithSpreadsheet;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        translations = Object(parsers["a" /* parseLanguageData */])(json.feed.entry);
                        initWithSpreadsheet = __webpack_require__(/*! ./initWithSpreadsheet.js */ 7).default;
                        _context4.next = 4;
                        return initWithSpreadsheet(dataURL, options, translations);

                      case 4:
                        return _context4.abrupt("return", _context4.sent);

                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x4) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context5.next = 17;
            break;

          case 6:
            if (!options.googleSheet) {
              _context5.next = 13;
              break;
            }

            initWithSpreadsheet = __webpack_require__(/*! ./initWithSpreadsheet.js */ 7).default;
            _context5.next = 10;
            return initWithSpreadsheet(dataURL, options);

          case 10:
            return _context5.abrupt("return", _context5.sent);

          case 13:
            initWithoutSpreadsheet = __webpack_require__(/*! ./initWithoutSpreadsheet.js */ 13).default;
            _context5.next = 16;
            return initWithoutSpreadsheet(options);

          case 16:
            return _context5.abrupt("return", _context5.sent);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _init.apply(this, arguments);
}
// EXTERNAL MODULE: ./src/js/helpers.js
var helpers = __webpack_require__(0);

// CONCATENATED MODULE: ./src/china.js
function china_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function china_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { china_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { china_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function china() {
  return _china.apply(this, arguments);
}

function _china() {
  _china = china_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var map;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return makeMap({
              mapID: 'chinapower',
              center: [0, 152.58],
              fullscreen: true,
              zoom: 3.5,
              maxZoom: 6,
              minZoom: 0,
              clusterDistance: 15,
              Attribution: 'Data by <a href="https://amti.csis.org" target="_blank">CSIS AMTI</a>, © OpenStreetMap, Leaflet contributors, © CARTO',
              table: 'claims_1',
              apiKey: '-WVcqNSmPGpl4TdVLJE5LQ',
              program: 'Asia Maritime Transparency Initiative',
              website: 'https://amti.csis.org/',
              title: 'Maritime Claims of the Indo-Pacific',
              description: 'Search claimants by name or click the search bar to see the full list. Up to six can be selected at once. Use the boxes below to toggle different claim types. Zoom in or out using the mouse scroll wheel or the buttons on the side of the map. Click and drag to move across the map.',
              mapboxStyle: lang && lang.indexOf("zh-") > -1 ? "citui3waw00162jo1zcsf1urj" : "cj84s9bet10f52ro2lrna50yg",
              'ocean color': '#b7c7d1',
              formatPopupContent: function formatPopupContent(feature, map) {
                var suffix = lang ? '_' + lang.replace(/-/, '_') : '';
                var name = feature.properties['name' + suffix];
                var description = feature.properties['description' + suffix].replace(/<a href=/gi, '<a target="_blank" href=').replace(/<\/a>/gi, externalLink + '</a>');
                return '<div class="popupHeaderStyle">' + name + '</div><div class="popupEntryStyle">' + description + '</div>';
              },
              zoomSlider: false,
              widgets: [{
                id: '0',
                field: "claimant",
                input: "dropdown",
                type: "color",
                keys: [{
                  color: '#367D98',
                  value: "Niue",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#367D98',
                  value: "Malaysia",
                  group: 'east asia',
                  selected: false
                }, {
                  color: '#4F8963',
                  value: "Myanmar",
                  group: 'east asia',
                  selected: false
                }, {
                  color: '#855080',
                  value: "India",
                  group: 'east asia',
                  selected: true
                }, {
                  color: '#888048',
                  value: "Australia",
                  group: 'pacific',
                  selected: true
                }, {
                  color: '#DAAD74',
                  value: "United States",
                  group: 'pacific',
                  selected: true
                }, {
                  color: '#4F8963',
                  value: "Vietnam",
                  group: 'pacific',
                  selected: true
                }, {
                  color: '#A17754',
                  value: "Fiji",
                  group: 'pacific',
                  selected: true
                }, {
                  color: '#367D98',
                  value: "vanuatu",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#367D98',
                  value: "papua new guinea",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#888048',
                  value: "solomon islands",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#367D98',
                  value: "palau",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#888048',
                  value: "Federated States of Micronesia",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#4F8963',
                  value: "Nauru",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#888048',
                  value: "Timor Leste",
                  group: 'east asia',
                  selected: false
                }, {
                  color: '#888048',
                  value: "Cook Islands",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#DAAD74',
                  value: "France",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#367D98',
                  value: "Thailand",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#DAAD74',
                  value: "New Zealand",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#4F8963',
                  value: "Samoa",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#DAAD74',
                  value: "Cambodia",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#A17754',
                  value: "Kiribati",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#A17754',
                  value: "United Kingdom",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#A17754',
                  value: "Russia",
                  group: 'east asia',
                  selected: false
                }, {
                  color: '#A17754',
                  value: "Philippines",
                  group: 'east asia',
                  selected: false
                }, {
                  color: '#A17754',
                  value: "Marshall Islands",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#A17754',
                  value: "Sri Lanka",
                  group: 'east asia',
                  selected: false
                }, {
                  color: '#855080',
                  value: "Tuvalu",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#855080',
                  value: "Tonga",
                  group: 'pacific',
                  selected: false
                }, {
                  color: '#367D98',
                  value: "People's Republic of China",
                  group: 'east asia',
                  selected: true
                }, {
                  color: '#4F8963',
                  value: "Maldives",
                  group: 'east asia',
                  selected: false
                }, {
                  color: '#367D98',
                  value: "Republic of China (Taiwan)",
                  group: 'east asia',
                  selected: false
                }, {
                  color: '#367D98',
                  value: "South Korea",
                  group: 'east asia',
                  selected: false
                }, {
                  color: '#367D98',
                  value: "Democratic People's Republic of Korea (North Korea)",
                  group: 'east asia',
                  selected: false
                }, {
                  color: '#855080',
                  value: "Japan",
                  group: 'east asia',
                  selected: false
                }, {
                  color: '#855080',
                  value: "Bangladesh",
                  group: 'east asia',
                  selected: false
                }, {
                  color: '#4F8963',
                  value: "Indonesia",
                  group: 'east asia',
                  selected: false
                }, {
                  color: '#855080',
                  value: "Singapore",
                  group: 'east asia',
                  selected: false
                }, {
                  color: '#855080',
                  value: "Brunei",
                  group: 'east asia',
                  selected: false
                }]
              }, {
                id: '1',
                field: "type",
                type: "form",
                input: "checkbox",
                keys: [{
                  color: '#c5c5c5',
                  label: "Territorial Baselines",
                  value: "Territorial Baselines",
                  form: "line",
                  selected: false
                }, {
                  color: '#c5c5c5',
                  label: "Territorial Sea",
                  value: "Territorial Sea",
                  form: "line",
                  icon: '',
                  selected: true
                }, {
                  color: '#c5c5c5',
                  label: "Exclusive Economic Zone",
                  value: "Exclusive Economic Zone",
                  form: "line",
                  icon: '',
                  selected: true
                }, {
                  color: '#c5c5c5',
                  label: "Continental Shelf",
                  value: "Continental Shelf",
                  form: "line",
                  icon: '',
                  selected: false
                }, {
                  color: '#c5c5c5',
                  label: "Nine-Dash/U-Shaped Line",
                  value: "Nine-Dash/U-Shaped Line",
                  form: "line",
                  icon: '',
                  selected: true
                }]
              }]
            });

          case 2:
            map = _context.sent;

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _china.apply(this, arguments);
}
// CONCATENATED MODULE: ./src/index.js





window.makeMap = makeMap_makeMap;
window.externalLink = helpers["d" /* externalLink */];
window.capitalize = helpers["a" /* capitalize */]; // import { examples, arcticJamming } from './examples.js'
// arcticJamming()
// examples()


china();

window.convertType = function (value) {
  var v = Number(value);
  return !isNaN(v) ? v : value.toLowerCase() === 'undefined' ? undefined : value.toLowerCase() === 'null' ? null : value.toLowerCase() === 'true' ? true : value.toLowerCase() === 'false' ? false : value;
};

if (typeof window.CustomEvent !== 'function') {
  var CustomEvent = function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
}

Array.prototype.groupBy = function (property1, property2) {
  return property2 ? this.reduce(function (groups, item) {
    var val = item[property2][property1];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {}) : this.reduce(function (groups, item) {
    var val = item[property1];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
};

RegExp.escape = function (s) {
  return s.replace(/[\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0eWxlS2V5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oYW5kbGVGZWF0dXJlRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdHlsZVBvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdHlsZU5vblBvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWtlR2VvSnNvbk9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21ha2VMYXllcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhcnNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0N1c3RvbU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFrZURvY3VtZW50Tm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hcFdpZGdldHNUb1N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWtlV2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5pdFdpdGhTcHJlYWRzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/N2VlNSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5pdFdpdGhvdXRTcHJlYWRzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFrZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hpbmEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbG9yU2NhbGUiLCJjb3VudCIsImluZGV4Iiwic2NhbGVPbmUiLCJjaHJvbWEiLCJjdWJlaGVsaXgiLCJodWUiLCJsaWdodG5lc3MiLCJzY2FsZSIsImNvbG9ycyIsInNjYWxlVHdvIiwiZ2FtbWEiLCJyZXZlcnNlIiwiaSIsImNvbG9yIiwic2F0dXJhdGUiLCJoZXgiLCJwdXNoIiwibGluZVdlaWdodHMiLCJsaW5lRGFzaEFycmF5cyIsImV4dGVybmFsTGluayIsInJlbW92ZSIsImNvbnZlcnRUeXBlIiwidmFsdWUiLCJ2IiwiTnVtYmVyIiwiaXNOYU4iLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsImZvcm1hdFdpZGdldHMiLCJjb25zb2xlIiwibG9nIiwiY2FwaXRhbGl6ZSIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJsb2FkIiwidXJsIiwiZWxlbWVudCIsInJlcSIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNlbmQiLCJpbm5lckhUTUwiLCJyZXNwb25zZVRleHQiLCJtYWtlRHJvcGRvd25PcHRpb25zIiwib3B0aW9ucyIsIngiLCJncm91cHMiLCJ3aWRnZXRzIiwia2V5cyIsImdyb3VwQnkiLCJjaG9pY2VzIiwiT2JqZWN0IiwibWFwIiwiZyIsInoiLCJpZCIsImxhYmVsIiwidHJpbSIsInBhcnNlSW50IiwiZGlzYWJsZWQiLCJyZW1vdmVJdGVtQnV0dG9uIiwibWF4SXRlbUNvdW50IiwibWF4aW11bSIsImNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXMiLCJ0ZW1wbGF0ZSIsIl90aGlzIiwiaXRlbSIsImNsYXNzTmFtZXMiLCJkYXRhIiwia2V5IiwiZmluZCIsImtleVN0eWxlIiwidHlwZSIsImZvcm1zIiwiayIsImluZGV4T2YiLCJzdHlsZU9wdGlvbnMiLCJzdHlsZUtleSIsIm1hcmt1cCIsImFjdGl2ZSIsImNsYXNzIiwic3ZnIiwid2luZG93IiwiYnRvYSIsImNob2ljZSIsIml0ZW1DaG9pY2UiLCJpdGVtRGlzYWJsZWQiLCJpdGVtU2VsZWN0YWJsZSIsImNvbmZpZyIsIml0ZW1TZWxlY3RUZXh0IiwiZ3JvdXBJZCIsImZlYXR1cmUiLCJncm91cCIsImljb25TaXplIiwiaWNvbnNpemUiLCJkaXZpZGVycyIsInNpemUiLCJrZXlDb2xvciIsInciLCJmb3JtS2V5V2lkZ2V0IiwiY29sb3JLZXlXaWRnZXQiLCJjb2xvcktleSIsInByb3BlcnRpZXMiLCJmaWVsZCIsImZvcm1LZXkiLCJldmVyeSIsImF2ZXJhZ2UiLCJmb3JtIiwib2NlYW5jb2xvciIsImxlbmd0aCIsImRlZmF1bHRDb2xvciIsImRhcmtlbiIsImljb24iLCJzbHVnIiwicmVwbGFjZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN2Z0NvbnRlbnQiLCJtYXRjaCIsInAxIiwicDIiLCJwMyIsInBhdHRlcm4iLCJjb2xvclR3byIsImNvbG9yT25lIiwiaGFuZGxlRmVhdHVyZUV2ZW50cyIsImxheWVyIiwiZXZlbnRPcHRpb25zIiwib25lYWNoZmVhdHVyZSIsImNsaWNrIiwiaGFuZGxlTGF5ZXJDbGljayIsImxlYWZsZXQiLCJmb3JFYWNoIiwibGlzdGVuZXIiLCJvbiIsInBvcHVwQ29udGVudCIsImZvcm1hdHBvcHVwY29udGVudCIsImZvcm1hdFBvcHVwQ29udGVudCIsImJpbmRQb3B1cCIsImNvbnRlbnQiLCJwIiwicG9wdXBoZWFkZXJzIiwicG9wdXBjb250ZW50IiwiZmlsdGVyIiwiam9pbiIsImxpbmsiLCJoeXBlcmxpbmsiLCJleHRlcm5hbExpbmtDb250ZW50IiwiZXh0ZXJuYWxsaW5rdGV4dCIsImxhbmciLCJ0cmFuc2xhdGFibGVTdHJpbmdzIiwidHJhbnNsYXRpb25zIiwic29ydCIsImEiLCJiIiwidCIsInJlIiwiUmVnRXhwIiwiZXNjYXBlIiwiaXNTcGlkZXJmaWVkIiwiX3ByZVNwaWRlcmZ5TGF0bG5nIiwiX2xheWVycyIsImwiLCJ1bnNwaWRlcmZ5IiwiX19wYXJlbnQiLCJ2YWx1ZXMiLCJfZ3JvdXAiLCJfZmVhdHVyZUdyb3VwIiwiX3NwaWRlcmZpZWQiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZCIsInN0eWxlIiwib3BhY2l0eSIsInN0eWxlUG9pbnQiLCJsYXRsbmciLCJwb2ludFN0eWxlIiwiQ3VzdG9tSWNvbiIsIkwiLCJJY29uIiwiZXh0ZW5kIiwiaWNvbkFuY2hvciIsImljb25hbmNob3IiLCJub25Qb2ludFN0eWxlIiwiZGl2SWNvbiIsInRoaXNGb3JtS2V5V2lkZ2V0IiwidGhpc0NvbG9yS2V5V2lkZ2V0Iiwic3BsaXQiLCJjbGFzc05hbWUiLCJodG1sIiwiZW5jb2RlVVJJIiwiaWNvblVybCIsIm1hcmtlciIsInN0eWxlTm9uUG9pbnQiLCJmb3JtS2V5Rm9ybSIsInJlZHVjZSIsImMiLCJjb2xvcktleUZvcm0iLCJmIiwid2VpZ2h0IiwibGluZUNhcCIsImRhc2hBcnJheSIsInBhdHRlcm5PcHRpb25zIiwic3BhY2VXZWlnaHQiLCJzcGFjZUNvbG9yIiwic3BhY2VPcGFjaXR5IiwiYW5nbGUiLCJTdHJpcGVQYXR0ZXJuIiwic2hhcGVPcHRpb25zIiwieSIsInJhZGl1cyIsImZpbGwiLCJzdHJva2UiLCJmaWxsQ29sb3IiLCJmaWxsT3BhY2l0eSIsInNoYXBlIiwiUGF0dGVybkNpcmNsZSIsIndpZHRoIiwiaGVpZ2h0IiwiUGF0dGVybiIsImFkZFNoYXBlIiwiYWRkVG8iLCJmaWxsUGF0dGVybiIsImxpbmVDb2xvciIsImxpbmVXZWlnaHQiLCJsaW5lT3BhY2l0eSIsImdlb21ldHJ5IiwiYnJpZ2h0ZW4iLCJtYWtlR2VvSnNvbk9wdGlvbnMiLCJjb2xvcktleVdpZGdldHMiLCJmb3JtS2V5V2lkZ2V0cyIsImZpbHRlcnMiLCJvbkVhY2hGZWF0dXJlIiwiYmFja2dyb3VuZE9wdGlvbnMiLCJwb2ludFRvTGF5ZXIiLCJmb3JlZ3JvdW5kT3B0aW9ucyIsIm1ha2VMYXllcnMiLCJnZW9Kc29uT3B0aW9ucyIsImdlb2pzb25vcHRpb25zIiwianNvbiIsImNsdXN0ZXJDb2xvciIsImNvbG9yS2V5cyIsIndpZGdldCIsImNvbGxlY3Rpb25OYW1lIiwiZmVhdHVyZXMiLCJhbGxQb2ludHMiLCJNYXJrZXJDbHVzdGVyR3JvdXAiLCJzaG93Q292ZXJhZ2VPbkhvdmVyIiwiem9vbVRvQm91bmRzT25DbGljayIsIm1heENsdXN0ZXJSYWRpdXMiLCJjbHVzdGVyZGlzdGFuY2UiLCJOYU4iLCJpY29uQ3JlYXRlRnVuY3Rpb24iLCJjbHVzdGVyIiwiZ2V0Q2hpbGRDb3VudCIsImhhc0xpbmVGZWF0dXJlcyIsInNvbWUiLCJvcHRpb24iLCJsb2NhbGVDb21wYXJlIiwiZ2VvSnNvbiIsImFkZExheWVyIiwiZ2V0TGF5ZXJzIiwiZSIsImhhbmRsZUNsdXN0ZXJDbGljayIsIl9sZWFmbGV0X2lkIiwic3BpZGVyZnkiLCJnZXRBbGxDaGlsZE1hcmtlcnMiLCJtIiwiZ2V0RWxlbWVudCIsInBhcnNlTGFuZ3VhZ2VEYXRhIiwibGFuZ3VhZ2VEYXRhIiwicm93IiwiY29sdW1uIiwiY29sdW1uTmFtZSIsInBhcnNlTGVnZW5kRGF0YSIsImNvbG9yU2NhbGUiLCJsZWdlbmRJdGVtcyIsInNlbGVjdGVkIiwiY29sb3JWYWwiLCJwYXJzZU1ldGFEYXRhIiwicGFyc2VXaWRnZXREYXRhIiwibWV0YURhdGEiLCJwcm9jZXNzIiwicHJvcGVydHkiLCJtYXBJZCIsIkN1c3RvbU1hcCIsImNvbnRhaW5lciIsImFsbCIsInJlc2V0RmlsdGVycyIsInJlbW92ZUdyb3VwcyIsInJlbW92ZUxheWVyIiwicmVuZGVyIiwibWluWm9vbSIsIm1pbnpvb20iLCJtYXhab29tIiwibWF4em9vbSIsIm1heEJvdW5kcyIsIm1heGJvdW5kcyIsInN3Ym91bmRzIiwibmVib3VuZHMiLCJzY3JvbGxXaGVlbFpvb20iLCJpbm5lcldpZHRoIiwiem9vbUNvbnRyb2wiLCJoYXNPd25Qcm9wZXJ0eSIsInpvb21zbGlkZXIiLCJhdHRyaWJ1dGlvbkNvbnRyb2wiLCJsb2FkZXZlbnQiLCJhZGRldmVudCIsInNldFZpZXciLCJjZW50ZXIiLCJ6b29tIiwidGlsZUxheWVyIiwibWFwYm94c3R5bGUiLCJjb250cm9sIiwiZnVsbHNjcmVlbiIsIkNvbnRyb2wiLCJGdWxsc2NyZWVuIiwiYWRkQ29udHJvbCIsImF0dHJpYnV0aW9uIiwicG9zaXRpb24iLCJzZXRQcmVmaXgiLCJtYWtlRG9jdW1lbnROb2RlcyIsIm5ld1NlY3Rpb25IVE1MIiwidGl0bGUiLCJsb2dvIiwiZGVzY3JpcHRpb24iLCJpbnN0cnVjdGlvbnMiLCJ0aXRsZWNhcmRjb250ZW50IiwiYm9keSIsIm5ld0RpYWxvZ0hUTUwiLCJ0aXRsZWNhcmR0aXRsZSIsIm92ZXJmbG93IiwiZGlhbG9nRWwiLCJnZXRFbGVtZW50QnlJZCIsIm1haW5FbCIsImRpYWxvZ1RyaWdnZXIiLCJkaWFsb2dCb3giLCJBMTF5RGlhbG9nIiwiZGlhbG9nIiwic2hvdyIsImRpc3BsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvZ3JhbSIsIm1ldGFMb2NhbGVPRyIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJtZXRhVHlwZU9HIiwibWV0YVdpZHRoT0ciLCJtZXRhSGVpZ2h0T0ciLCJtZXRhVHdpdHRlckNhcmRPRyIsIm1ldGFUaXRsZU9HIiwibWV0YVRpdGxlVHdpdHRlciIsIm1ldGFEZXNjcmlwdGlvbk9HIiwibWV0YURlc2NyaXB0aW9uVHdpdHRlciIsIm1ldGFJbWFnZU9HIiwic2NyZWVuc2hvdCIsIm1ldGFJbWFnZVR3aXR0ZXIiLCJpbm5lclRleHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJocmVmIiwid2Vic2l0ZSIsIm1hcFdpZGdldHNUb1N0YXRlIiwid2lkZ2V0Q29udGVudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGFibGVzIiwidGFibGUiLCJmZXRjaCIsImFwaWtleSIsInRoZW4iLCJyZXNwb25zZXMiLCJyZXNwb25zZSIsImpzb25zIiwiY29uY2F0IiwiZmVhdHVyZUdyb3VwcyIsImJveCIsImluaXRpYWxpemVkIiwiQ2hvaWNlcyIsInJlc2V0IiwicmVtb3ZlQWN0aXZlSXRlbXMiLCJoYW5kbGVSZXNldCIsInNlbGVjdHMiLCJjaGVja3MiLCJzZWFyY2giLCJ0b2dnbGUiLCJpbnB1dHMiLCJpbnB1dCIsImhhbmRsZUNoYW5nZSIsImV2dCIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImZpcmVFdmVudCIsIm1hcF9pZCIsInRyYW5zbGF0YWJsZU5vZGVzIiwiZWwiLCJrZXlsZXNzV2lkZ2V0cyIsInNlbGVjdGlvbnMiLCJwb3NzaWJsZUNoZWNrcyIsIm8iLCJuYW1lIiwicG9zc2libGVPcHRpb25zIiwicG9zc2libGVRdWVyaWVzIiwicXVlcnkiLCJib29sIiwid2l0aERpYWNyaXRpY3MiLCJ3aXRob3V0RGlhY3JpdGljcyIsImxhdGluaXNlIiwibGF5ZXJzIiwiZ3JvdXBpbmciLCJtYWtlV2lkZ2V0cyIsImJveENvbnRlbnQiLCJsZWdlbmREYXRhIiwicmVmZXJlbmNlIiwiZmVlZCIsImVudHJ5Iiwibm9kZXMiLCJsYWJlbFRleHQiLCJpdGVtVGV4dCIsIm9mZnNldEhlaWdodCIsImZvbnRTaXplIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9mZnNldCIsInRyYW5zZm9ybSIsIndpZGdldE5vZGVzIiwiZHJvcGRvd25PcHRpb25zIiwid2lkZ2V0VGl0bGUiLCJpbml0V2l0aFNwcmVhZHNoZWV0IiwiZGF0YVVSTCIsImdvb2dsZVNoZWV0IiwidHdvRF9wcm9wZXJpdGVzIiwiZGVmYXVsdCIsIm1hcElEIiwicmVmZXJlbmNlU2hlZXRzIiwicmVmZXJlbmNlU2hlZXRVUkxTIiwidSIsImZvb3RlciIsImZvb3Rlck5vZGUiLCJwZW5VbHRpbWF0ZU5vZGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJpbml0V2l0aG91dFNwcmVhZHNoZWV0IiwiZm9ybWF0VG9vbGJveCIsInJlc3AiLCJmb3JtYXR0b29sYm94IiwiYXBpS2V5IiwibG9jYXRpb24iLCJwYXJlbnQiLCJyZWZlcnJlciIsImV4ZWMiLCJsZWFmbGV0TG9hZGVkIiwicHJpbWFyeUpzRmlsZXMiLCJzZWNvbmRhcnlKc0ZpbGVzIiwiaGFuZGxlTG9hZExlYWZsZXQiLCJmaWxlIiwianNMaW5rIiwic3JjIiwib25sb2FkIiwiaW1wb3J0RmlsZXMiLCJtYWtlTWFwIiwic2NyaXB0c0xvYWRlZCIsImluaXQiLCJvY2VhbkNvbG9yIiwicmVxdWlyZSIsImNoaW5hIiwiY2x1c3RlckRpc3RhbmNlIiwiQXR0cmlidXRpb24iLCJtYXBib3hTdHlsZSIsInN1ZmZpeCIsInpvb21TbGlkZXIiLCJDdXN0b21FdmVudCIsImV2ZW50IiwicGFyYW1zIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkZXRhaWwiLCJpbml0Q3VzdG9tRXZlbnQiLCJwcm90b3R5cGUiLCJFdmVudCIsInByb3BlcnR5MSIsInByb3BlcnR5MiIsInZhbCIsInMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7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Q0FBVSx1QkFBVixFQUFtQyxNQUFuQyxDQUFQO0FBQ0QsQ0FGRCxDIiwiZmlsZSI6Im1ha2VNYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQpO1xuIiwiaW1wb3J0IHN0eWxlS2V5IGZyb20gJy4vc3R5bGVLZXkuanMnXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29sb3JTY2FsZShjb3VudCwgaW5kZXgpIHtcbiAgdmFyIHNjYWxlT25lID0gY2hyb21hXG4gICAgLmN1YmVoZWxpeCgpXG4gICAgLmh1ZSgwLjUpXG4gICAgLmxpZ2h0bmVzcyhbMC40LCAwLjZdKVxuICAgIC5zY2FsZSgpXG4gICAgLmNvbG9ycyhjb3VudCAqIDIpXG4gIHZhciBzY2FsZVR3byA9IGNocm9tYVxuICAgIC5jdWJlaGVsaXgoKVxuICAgIC5odWUoMSlcbiAgICAuZ2FtbWEoMC41KVxuICAgIC5zY2FsZSgpXG4gICAgLmNvbG9ycyhjb3VudCAqIDIpXG4gICAgLnJldmVyc2UoKVxuICB2YXIgc2NhbGUgPSBbXVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgIHZhciBjb2xvciA9IGkgJSAyID09PSAwID8gc2NhbGVPbmVbaSAqIDJdIDogc2NhbGVUd29baSAqIDJdXG4gICAgY29sb3IgPSBjaHJvbWEoY29sb3IpXG4gICAgICAuc2F0dXJhdGUoKVxuICAgICAgLmhleCgpXG4gICAgc2NhbGUucHVzaChjb2xvcilcbiAgfVxuXG4gIHJldHVybiBzY2FsZVxufVxuXG5leHBvcnQgdmFyIGxpbmVXZWlnaHRzID0gW1szLCAzXSwgWzUsIDJdLCBbNCwgMy41XSwgWzcsIDNdLCBbNCwgNF1dXG5leHBvcnQgdmFyIGxpbmVEYXNoQXJyYXlzID0gW1xuICBbbnVsbCwgJzYsOSddLFxuICBbbnVsbCwgbnVsbF0sXG4gIFtudWxsLCAnNiwxMiddLFxuICBbbnVsbCwgbnVsbF0sXG4gIFsnMTgsMjQnLCAnMTgsMjQnXVxuXVxuZXhwb3J0IHZhciBleHRlcm5hbExpbmsgPVxuICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE1XCIgdmlld0JveD1cIjAgMCAxNSAxNVwiPjxwYXRoIGQ9XCJNNy40OSwwVjEuNjdIMS42OFYxMy4zMkgxMy4zMlY3LjUySDE1djUuNzJhMS43NiwxLjc2LDAsMCwxLS40MiwxLjE5LDEuNjQsMS42NCwwLDAsMS0xLjEzLjU2SDEuNzRhMS42NywxLjY3LDAsMCwxLTEuMTYtLjQxQTEuNjEsMS42MSwwLDAsMSwwLDEzLjQ4di0uMjdDMCw5LjQsMCw1LjYsMCwxLjhBMS44MywxLjgzLDAsMCwxLC41OC40YTEuNTMsMS41MywwLDAsMSwxLS4zOWg2WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDApXCIvPjxwYXRoIGQ9XCJNOS4xNywxLjY3VjBIMTVWNS44NEgxMy4zNHYtM2gwYy0uMDUuMDUtLjExLjEtLjE2LjE2bC0uNDUuNDYtMS4zLDEuMjktLjg0Ljg0LS44OS45LS44OC44Ny0uODkuOWMtLjI4LjI5LS41Ny41Ny0uODYuODZMNi4xNiwxMGwtLjg4Ljg3YTEuODMsMS44MywwLDAsMS0uMTMuMTZMNCw5Ljg2bDAsMEw1LjM2LDguNDdsLjk1LTEsLjc1LS43NSwxLTFMOC44Nyw1bDEtLjk0Ljg1LS44Ni45Mi0uOTEuNTYtLjU4WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDApXCIvPjwvc3ZnPidcbmV4cG9ydCB2YXIgcmVtb3ZlID1cbiAgJzxzdmcgdmlld0JveD1cIjAgMCAyMSAyMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZyBmaWxsPVwiIzAwMFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj48cGF0aCBkPVwiTTIuNTkyLjA0NGwxOC4zNjQgMTguMzY0LTIuNTQ4IDIuNTQ4TC4wNDQgMi41OTJ6XCIvPjxwYXRoIGQ9XCJNMCAxOC4zNjRMMTguMzY0IDBsMi41NDggMi41NDhMMi41NDggMjAuOTEyelwiLz48L2c+PC9zdmc+J1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFR5cGUodmFsdWUpIHtcbiAgdmFyIHYgPSBOdW1iZXIodmFsdWUpXG4gIHJldHVybiAhaXNOYU4odilcbiAgICA/IHZcbiAgICA6IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd1bmRlZmluZWQnXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnbnVsbCdcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnZmFsc2UnXG4gICAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgICA6IHZhbHVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaWRnZXRzKCkge1xuICBjb25zb2xlLmxvZygneW8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZCh1cmwsIGVsZW1lbnQpIHtcbiAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gIHJlcS5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKVxuICByZXEuc2VuZChudWxsKVxuICBlbGVtZW50LmlubmVySFRNTCA9IHJlcS5yZXNwb25zZVRleHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEcm9wZG93bk9wdGlvbnMob3B0aW9ucywgeCkge1xuICB2YXIgZ3JvdXBzID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZ3JvdXBCeSgnZ3JvdXAnKVxuICB2YXIgY2hvaWNlcyA9IE9iamVjdC5rZXlzKGdyb3VwcykubWFwKGZ1bmN0aW9uKGcsIHopIHtcbiAgICBjb25zb2xlLmxvZyhPYmplY3Qua2V5cyhncm91cHMpKVxuICAgIHJldHVybiB7XG4gICAgICBpZDogeixcbiAgICAgIGxhYmVsOiBnLnRyaW0oKSAmJiBOdW1iZXIuaXNOYU4ocGFyc2VJbnQoZywgMTApKSA/IGcgOiAnJyxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIGNob2ljZXM6IGdyb3Vwc1tnXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHtcbiAgICBjaG9pY2VzOiBjaG9pY2VzLFxuICAgIHJlbW92ZUl0ZW1CdXR0b246IHRydWUsXG4gICAgbWF4SXRlbUNvdW50OiBvcHRpb25zLndpZGdldHNbeF0ubWF4aW11bSxcbiAgICBjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzOiBmdW5jdGlvbiBjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzKHRlbXBsYXRlKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGl0ZW06IGZ1bmN0aW9uIGl0ZW0oY2xhc3NOYW1lcywgZGF0YSkge1xuICAgICAgICAgIHZhciBrZXkgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5maW5kKGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHJldHVybiB2LnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGRhdGEudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdmFyIGtleVN0eWxlXG5cbiAgICAgICAgICBzd2l0Y2ggKG9wdGlvbnMud2lkZ2V0c1t4XS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnZm9ybSc6XG4gICAgICAgICAgICB2YXIgZm9ybXMgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgICByZXR1cm4gay52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB2YXIgaSA9IGZvcm1zLmluZGV4T2Yoa2V5LnZhbHVlLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgZm9ybXM6IGZvcm1zLFxuICAgICAgICAgICAgICBtYXA6IG9wdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICBtYXA6IG9wdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbWFya3VwID1cbiAgICAgICAgICAgICc8ZGl2IHN0eWxlPVwiYm9yZGVyLWNvbG9yOicgK1xuICAgICAgICAgICAga2V5LmNvbG9yICtcbiAgICAgICAgICAgICdcIiBjbGFzcz1cIicgK1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5pdGVtICtcbiAgICAgICAgICAgICdcIiBkYXRhLWl0ZW0gZGF0YS1pZD1cIicgK1xuICAgICAgICAgICAgZGF0YS5pZCArXG4gICAgICAgICAgICAnXCIgZGF0YS12YWx1ZT1cIicgK1xuICAgICAgICAgICAgZGF0YS52YWx1ZSArXG4gICAgICAgICAgICAnXCIgJyArXG4gICAgICAgICAgICAoZGF0YS5hY3RpdmUgPyAnYXJpYS1zZWxlY3RlZD1cInRydWVcIicgOiAnJykgK1xuICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgIChkYXRhLmRpc2FibGVkID8gJ2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCInIDogJycpICtcbiAgICAgICAgICAgICc+PHNwYW4gY2xhc3M9XCInICtcbiAgICAgICAgICAgIGtleVN0eWxlLmNsYXNzICtcbiAgICAgICAgICAgICdLZXlcIiAnICtcbiAgICAgICAgICAgICdzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybChcXCcnICtcbiAgICAgICAgICAgIGtleVN0eWxlLnN2ZyArXG4gICAgICAgICAgICAnXCIpPjwvc3Bhbj4gJyArXG4gICAgICAgICAgICBjYXBpdGFsaXplKGRhdGEubGFiZWwpICtcbiAgICAgICAgICAgICc8YnV0dG9uIHN0eWxlPVwiYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAnICtcbiAgICAgICAgICAgIGtleS5jb2xvciArXG4gICAgICAgICAgICAnOyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICAgIHdpbmRvdy5idG9hKHJlbW92ZSkgK1xuICAgICAgICAgICAgJ1xcJylcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjaG9pY2VzX19idXR0b25cIiBkYXRhLWJ1dHRvbj1cIlwiIGFyaWEtbGFiZWw9XCJSZW1vdmUgaXRlbVwiPlJlbW92ZSBpdGVtPC9idXR0b24+PC9kaXY+J1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZShtYXJrdXApXG4gICAgICAgIH0sXG4gICAgICAgIGNob2ljZTogZnVuY3Rpb24gY2hvaWNlKGNsYXNzTmFtZXMsIGRhdGEpIHtcbiAgICAgICAgICB2YXIga2V5ID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZmluZChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICByZXR1cm4gdi52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBkYXRhLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHZhciBrZXlTdHlsZVxuXG4gICAgICAgICAgc3dpdGNoIChvcHRpb25zLndpZGdldHNbeF0udHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgICAgICAgdmFyIGZvcm1zID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMubWFwKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGsudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgZm9ybXM6IGZvcm1zLFxuICAgICAgICAgICAgICBtYXA6IG9wdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICBtYXA6IG9wdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbWFya3VwID1cbiAgICAgICAgICAgICcgPGRpdiBjbGFzcz1cIicgK1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5pdGVtICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICBjbGFzc05hbWVzLml0ZW1DaG9pY2UgK1xuICAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgIChkYXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgID8gY2xhc3NOYW1lcy5pdGVtRGlzYWJsZWRcbiAgICAgICAgICAgICAgOiBjbGFzc05hbWVzLml0ZW1TZWxlY3RhYmxlKSArXG4gICAgICAgICAgICAnXCIgZGF0YS1zZWxlY3QtdGV4dD1cIicgK1xuICAgICAgICAgICAgX3RoaXMuY29uZmlnLml0ZW1TZWxlY3RUZXh0ICtcbiAgICAgICAgICAgICdcIiBkYXRhLWNob2ljZSAnICtcbiAgICAgICAgICAgIChkYXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgID8gJ2RhdGEtY2hvaWNlLWRpc2FibGVkIGFyaWEtZGlzYWJsZWQ9XCJ0cnVlXCInXG4gICAgICAgICAgICAgIDogJ2RhdGEtY2hvaWNlLXNlbGVjdGFibGUnKSArXG4gICAgICAgICAgICAnIGRhdGEtaWQ9XCInICtcbiAgICAgICAgICAgIGRhdGEuaWQgK1xuICAgICAgICAgICAgJ1wiIGRhdGEtdmFsdWU9XCInICtcbiAgICAgICAgICAgIGRhdGEudmFsdWUgK1xuICAgICAgICAgICAgJ1wiICcgK1xuICAgICAgICAgICAgKGRhdGEuZ3JvdXBJZCA+IDAgPyAncm9sZT1cInRyZWVpdGVtXCInIDogJ3JvbGU9XCJvcHRpb25cIicpICtcbiAgICAgICAgICAgICc+IDxzcGFuIGNsYXNzPVwiJyArXG4gICAgICAgICAgICBrZXlTdHlsZS5jbGFzcyArXG4gICAgICAgICAgICAnS2V5XCIgJyArXG4gICAgICAgICAgICAnc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnJyArXG4gICAgICAgICAgICBrZXlTdHlsZS5zdmcgK1xuICAgICAgICAgICAgJ1wiKT48L3NwYW4+ICcgK1xuICAgICAgICAgICAgY2FwaXRhbGl6ZShkYXRhLmxhYmVsKSArXG4gICAgICAgICAgICAnIDwvZGl2PiAnXG4gICAgICAgICAgcmV0dXJuIHRlbXBsYXRlKG1hcmt1cClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgY2FwaXRhbGl6ZSwgbG9hZCwgbGluZVdlaWdodHMsIGxpbmVEYXNoQXJyYXlzIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHlsZUtleShvcHRpb25zKSB7XG4gIHZhciBtYXAgPSBvcHRpb25zLm1hcCxcbiAgICBmZWF0dXJlID0gb3B0aW9ucy5mZWF0dXJlLFxuICAgIGdyb3VwID0gb3B0aW9ucy5ncm91cCxcbiAgICBrZXkgPSBvcHRpb25zLmtleSxcbiAgICBpbmRleCA9IG9wdGlvbnMuaW5kZXgsXG4gICAgZm9ybXMgPSBvcHRpb25zLmZvcm1zLFxuICAgIGljb25TaXplID0gbWFwLmljb25zaXplLFxuICAgIGRpdmlkZXJzID0gaWNvblNpemUubWFwKHNpemUgPT4gc2l6ZSAvIDEyKVxuXG4gIHZhciBjb2xvcnMsIGtleUNvbG9yXG4gIHZhciBrZXkgPSBncm91cCA/IGdyb3VwWzBdIDoga2V5XG5cbiAgZm9yIChsZXQgdyBvZiBtYXAud2lkZ2V0cykge1xuICAgIHZhciBmb3JtS2V5V2lkZ2V0ID0gdy50eXBlID09PSAnZm9ybScgPyB3IDogbnVsbFxuICAgIHZhciBjb2xvcktleVdpZGdldCA9IHcudHlwZSA9PT0gJ2NvbG9yJyA/IHcgOiBudWxsXG5cbiAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgdmFyIGNvbG9yS2V5ID0gY29sb3JLZXlXaWRnZXRcbiAgICAgICAgPyBjb2xvcktleVdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1tjb2xvcktleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgICB9KVxuICAgICAgICA6IG51bGxcblxuICAgICAgdmFyIGZvcm1LZXkgPSBmb3JtS2V5V2lkZ2V0XG4gICAgICAgID8gZm9ybUtleVdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1tmb3JtS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIH0pXG4gICAgICAgIDogbnVsbFxuXG4gICAgICBrZXlDb2xvciA9IGNvbG9yS2V5ID8gY29sb3JLZXkuY29sb3IgOiBmb3JtS2V5ID8gZm9ybUtleS5jb2xvciA6IG51bGxcblxuICAgICAgaWNvblNpemUgPSBpY29uU2l6ZS5tYXAoc2l6ZSA9PiBzaXplIC8gMSlcbiAgICB9IGVsc2Uge1xuICAgICAgaWNvblNpemUgPSBpY29uU2l6ZS5tYXAoKHNpemUsIGkpID0+IHNpemUgLyBkaXZpZGVyc1tpXSlcbiAgICB9XG5cbiAgICBrZXkuY29sb3IgPVxuICAgICAgZ3JvdXAgJiZcbiAgICAgIGdyb3VwLmV2ZXJ5KGZ1bmN0aW9uKGcpIHtcbiAgICAgICAgcmV0dXJuIGcuY29sb3JcbiAgICAgIH0pXG4gICAgICAgID8gY2hyb21hLmF2ZXJhZ2UoXG4gICAgICAgICAgZ3JvdXAubWFwKGZ1bmN0aW9uKGcpIHtcbiAgICAgICAgICAgIHJldHVybiBnLmNvbG9yXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICA6IGtleS5jb2xvclxuXG4gICAgc3dpdGNoIChrZXkuZm9ybSkge1xuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAga2V5Q29sb3IgPSBrZXkuY29sb3JcbiAgICAgICAgPyBrZXkuY29sb3JcbiAgICAgICAgOiBvcHRpb25zLm1hcC5vY2VhbmNvbG9yXG4gICAgICAgICAgPyBvcHRpb25zLm1hcC5vY2VhbmNvbG9yXG4gICAgICAgICAgOiBudWxsXG5cbiAgICAgIGlmIChmb3JtcyAmJiBmb3Jtcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHN2Z1xuICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBjb2xvcnMgPSBbXG4gICAgICAgICAgICBrZXlDb2xvciA/IGtleUNvbG9yIDogY2hyb21hKGRlZmF1bHRDb2xvcikuZGFya2VuKCksXG4gICAgICAgICAgICBrZXlDb2xvciA/IGtleUNvbG9yIDogY2hyb21hKGRlZmF1bHRDb2xvcikuZGFya2VuKClcbiAgICAgICAgICBdXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY29sb3JzID0gW1xuICAgICAgICAgICAga2V5Q29sb3IgPyBrZXlDb2xvciA6IGNocm9tYShkZWZhdWx0Q29sb3IpLmRhcmtlbigpLFxuICAgICAgICAgICAgJyNmZmZmZmYnXG4gICAgICAgICAgXVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNvbG9ycyA9IFsnIzAwMDAwMCcsIGtleUNvbG9yID8ga2V5Q29sb3IgOiBkZWZhdWx0Q29sb3JdXG4gICAgICAgICAgYnJlYWtcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgY29sb3JzID0gW1xuICAgICAgICAgICAgJyNmZmZmZmYnLFxuICAgICAgICAgICAga2V5Q29sb3IgPyBrZXlDb2xvciA6IGNocm9tYShkZWZhdWx0Q29sb3IpLmRhcmtlbigpXG4gICAgICAgICAgXVxuICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb2xvcnMgPSBbXG4gICAgICAgICAgICBrZXlDb2xvciA/IGtleUNvbG9yIDogY2hyb21hKGRlZmF1bHRDb2xvcikuZGFya2VuKCksXG4gICAgICAgICAgICBrZXlDb2xvciA/IGtleUNvbG9yIDogY2hyb21hKGRlZmF1bHRDb2xvcikuZGFya2VuKClcbiAgICAgICAgICBdXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAnPHN2ZyB4bWxucz1cXCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcJyB2aWV3Qm94PVxcJzAgMCA0OCAxMlxcJz48bGluZSB4MT1cXCcwXFwnIHgyPVxcJzQ4XFwnIHkxPVxcJzUwJVxcJyB5Mj1cXCc1MCVcXCcgc3Ryb2tlPVxcJycgK1xuICAgICAgICAgICAgY29sb3JzWzBdICtcbiAgICAgICAgICAgICdcXCcgc3Ryb2tlLXdpZHRoPVxcJycgK1xuICAgICAgICAgICAgbGluZVdlaWdodHNbaW5kZXhdWzBdICtcbiAgICAgICAgICAgICdcXCcgc3Ryb2tlLWxpbmVjYXA9XFwnc3F1YXJlXFwnIHN0cm9rZS1kYXNoYXJyYXk9XFwnJyArXG4gICAgICAgICAgICAoaW5kZXggPT09IDQgPyAnMTgsMTInIDogbGluZURhc2hBcnJheXNbaW5kZXhdWzBdKSArXG4gICAgICAgICAgICAnXFwnLz48bGluZSB4MT1cXCcwXFwnIHgyPVxcJzQ4XFwnIHkxPVxcJzUwJVxcJyB5Mj1cXCc1MCVcXCcgc3Ryb2tlPVxcJycgK1xuICAgICAgICAgICAgY29sb3JzWzFdICtcbiAgICAgICAgICAgICdcXCcgc3Ryb2tlLXdpZHRoPVxcJycgK1xuICAgICAgICAgICAgbGluZVdlaWdodHNbaW5kZXhdWzFdICtcbiAgICAgICAgICAgICdcXCcgc3Ryb2tlLWxpbmVjYXA9XFwnc3F1YXJlXFwnIHN0cm9rZS1kYXNoYXJyYXk9XFwnJyArXG4gICAgICAgICAgICAoaW5kZXggPT09IDQgPyAnMTgsMTInIDogbGluZURhc2hBcnJheXNbaW5kZXhdWzFdKSArXG4gICAgICAgICAgICAnXFwnLz48L3N2Zz4nXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgJzxzdmcgeG1sbnM9XFwnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXCcgdmlld0JveD1cXCcwIDAgNDggMTJcXCc+PGxpbmUgeDE9XFwnMFxcJyB4Mj1cXCc0OFxcJyB5MT1cXCc1MCVcXCcgeTI9XFwnNTAlXFwnIHN0cm9rZT1cXCcnICtcbiAgICAgICAgICAgIGtleUNvbG9yICtcbiAgICAgICAgICAgICdcXCcgc3Ryb2tlLXdpZHRoPVxcJycgK1xuICAgICAgICAgICAgMyArXG4gICAgICAgICAgICAnXFwnIHN0cm9rZS1saW5lY2FwPVxcJ3NxdWFyZVxcJyBzdHJva2UtZGFzaGFycmF5PVxcJycgK1xuICAgICAgICAgICAgJzMsNycgK1xuICAgICAgICAgICAgJ1xcJy8+PC9zdmc+J1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdmc6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShzdmcpLFxuICAgICAgICBjbGFzczogJ2xpbmUnXG4gICAgICB9XG5cbiAgICBjYXNlICdpY29uJzpcbiAgICAgIGlmIChrZXkuaWNvbikge1xuICAgICAgICB2YXIgc2x1ZyA9IGtleS52YWx1ZS5yZXBsYWNlKC8gL2csICctJylcbiAgICAgICAgbG9hZChrZXkuaWNvbiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZGRlbicpKVxuICAgICAgICB2YXIgc3ZnQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWRkZW4nKS5pbm5lckhUTUxcblxuICAgICAgICBpZiAoY29sb3JLZXlXaWRnZXQgJiYga2V5Q29sb3IpIHtcbiAgICAgICAgICBzdmdDb250ZW50ID0gc3ZnQ29udGVudC5yZXBsYWNlKFxuICAgICAgICAgICAgLygoXFxiZmlsbD1cIiMpKChbMC1hLWZBLUZdezJ9KXszfXwoWzAtOWEtZkEtRl0pezN9KVwiKS9naSxcbiAgICAgICAgICAgICcnXG4gICAgICAgICAgKVxuICAgICAgICAgIHN2Z0NvbnRlbnQgPSBzdmdDb250ZW50LnJlcGxhY2UoXG4gICAgICAgICAgICAvKDxjaXJjbGUgfDxyZWN0YW5nbGUgfDxlbGxpcHNlIHw8cG9seWdvbiB8PHBhdGggKS9nLFxuICAgICAgICAgICAgZnVuY3Rpb24obWF0Y2gsIHAxLCBwMiwgcDMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoLnJlcGxhY2UobWF0Y2gsIG1hdGNoICsgJ2ZpbGw9XCInICsga2V5Q29sb3IgKyAnXCIgJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBzdmcgPSAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICsgd2luZG93LmJ0b2Eoc3ZnQ29udGVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICtcbiAgICAgICAgICAgIHdpbmRvdy5idG9hKFxuICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIicgK1xuICAgICAgICAgICAgICAgIGljb25TaXplWzBdIC8gMiArXG4gICAgICAgICAgICAgICAgJ1wiIGN5PVwiJyArXG4gICAgICAgICAgICAgICAgaWNvblNpemVbMV0gLyAyICtcbiAgICAgICAgICAgICAgICAnXCIgcj1cIicgK1xuICAgICAgICAgICAgICAgIChpY29uU2l6ZVswXSArIGljb25TaXplWzFdKSAvIDQgK1xuICAgICAgICAgICAgICAgICdcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgKGtleUNvbG9yIHx8IGtleS5jb2xvcikgK1xuICAgICAgICAgICAgICAgICdcIi8+PC9zdmc+J1xuICAgICAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgY2xhc3M6IGtleS5pY29uID8gJ2ljb24nIDogJ2NvbG9yJ1xuICAgICAgfVxuXG4gICAgY2FzZSAncGF0dGVybic6XG4gICAgICBrZXlDb2xvciA9IGtleS5jb2xvclxuICAgICAgdmFyIHN2Z1xuXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2Uga2V5LnBhdHRlcm5bMF0uaW5kZXhPZignc3RyaXBlJykgPiAtMTpcbiAgICAgICAgdmFyIGNvbG9yVHdvID0ga2V5LnBhdHRlcm5bMV1cbiAgICAgICAgdmFyIGNvbG9yT25lID0ga2V5LnBhdHRlcm5ba2V5LnBhdHRlcm4ubGVuZ3RoIC0gMV1cbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICAgJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArXG4gICAgICAgICAgICAgIHdpbmRvdy5idG9hKFxuICAgICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDEyIDEyXCI+PHBvbHlnb24gcG9pbnRzPVwiNS43MyAwIDQuNjcgMCAwIDQuNjYgMCA1LjcxIDUuNzMgMFwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yT25lICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PHBvbHlnb24gcG9pbnRzPVwiMi4yOCAwIDEuMjIgMCAwIDEuMjIgMCAyLjI3IDIuMjggMFwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yVHdvICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PHBvbHlnb24gcG9pbnRzPVwiOC44NSAwIDcuNzkgMCAwIDcuNzcgMCA4LjgyIDguODUgMFwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yVHdvICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PHBvbHlnb24gcG9pbnRzPVwiMTIgMCAxMS4yNCAwIDAgMTEuMiAwIDEyIDAuMjYgMTIgMTIgMC4zIDEyIDBcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvck9uZSArXG4gICAgICAgICAgICAgICAgICAnXCIvPjxwb2x5Z29uIHBvaW50cz1cIjEyIDEwLjEyIDEyIDkuMDYgOS4wNSAxMiAxMC4xMSAxMiAxMiAxMC4xMlwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yVHdvICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PHBvbHlnb24gcG9pbnRzPVwiMTIgMy41MiAxMiAyLjQ2IDIuNDMgMTIgMy40OSAxMiAxMiAzLjUyXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JUd28gK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCIxMiA2Ljk2IDEyIDUuOSA1Ljg4IDEyIDYuOTQgMTIgMTIgNi45NlwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yT25lICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PC9zdmc+J1xuICAgICAgICAgICAgICApXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2Uga2V5LnBhdHRlcm5bMF0uaW5kZXhPZignZG90JykgPiAtMTpcbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICAgJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArXG4gICAgICAgICAgICAgIHdpbmRvdy5idG9hKFxuICAgICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjEzLjA2XCIgaGVpZ2h0PVwiMTUuMVwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIj48dGl0bGU+c3RyaXBlczwvdGl0bGU+PHBhdGggZD1cIk01LjQ5LDFBMS4xNiwxLjE2LDAsMSwxLDQuMzMtLjE2LDEuMTYsMS4xNiwwLDAsMSw1LjQ5LDFaTTQuMzMsMy43N0ExLjE2LDEuMTYsMCwxLDAsNS40OSw0LjkzLDEuMTUsMS4xNSwwLDAsMCw0LjMzLDMuNzdabTAsMy45M0ExLjE2LDEuMTYsMCwxLDAsNS40OSw4Ljg2LDEuMTUsMS4xNSwwLDAsMCw0LjMzLDcuN1ptMCwzLjkzYTEuMTYsMS4xNiwwLDEsMCwxLjE2LDEuMTZBMS4xNSwxLjE1LDAsMCwwLDQuMzMsMTEuNjNaTTExLjUtLjE2QTEuMTYsMS4xNiwwLDEsMCwxMi42NiwxLDEuMTYsMS4xNiwwLDAsMCwxMS41LS4xNlptMCwzLjkzYTEuMTYsMS4xNiwwLDEsMCwxLjE2LDEuMTZBMS4xNiwxLjE2LDAsMCwwLDExLjUsMy43N1ptMCwzLjkzYTEuMTYsMS4xNiwwLDEsMCwxLjE2LDEuMTZBMS4xNiwxLjE2LDAsMCwwLDExLjUsNy43Wm0wLDMuOTNhMS4xNiwxLjE2LDAsMSwwLDEuMTYsMS4xNkExLjE2LDEuMTYsMCwwLDAsMTEuNSwxMS42M1pNNy45Mi0xLjE2QTEuMTYsMS4xNiwwLDAsMCw2Ljc2LDAsMS4xNiwxLjE2LDAsMCwwLDcuOTIsMS4xNiwxLjE2LDEuMTYsMCwwLDAsOS4wNywwLDEuMTYsMS4xNiwwLDAsMCw3LjkyLTEuMTZabTAsMy45M0ExLjE2LDEuMTYsMCwxLDAsOS4wNywzLjkzLDEuMTYsMS4xNiwwLDAsMCw3LjkyLDIuNzdabTAsMy45M0ExLjE2LDEuMTYsMCwxLDAsOS4wNyw3Ljg2LDEuMTYsMS4xNiwwLDAsMCw3LjkyLDYuN1ptMCwzLjkzYTEuMTYsMS4xNiwwLDEsMCwxLjE1LDEuMTZBMS4xNiwxLjE2LDAsMCwwLDcuOTIsMTAuNjNaTS43NS0xLjE2QTEuMTYsMS4xNiwwLDAsMC0uNDEsMCwxLjE2LDEuMTYsMCwwLDAsLjc1LDEuMTYsMS4xNiwxLjE2LDAsMCwwLDEuOTEsMCwxLjE2LDEuMTYsMCwwLDAsLjc1LTEuMTZabTAsMy45M0ExLjE2LDEuMTYsMCwxLDAsMS45MSwzLjkzLDEuMTYsMS4xNiwwLDAsMCwuNzUsMi43N1ptMCwzLjkzQTEuMTYsMS4xNiwwLDAsMC0uNDEsNy44NiwxLjE1LDEuMTUsMCwwLDAsLjc1LDksMS4xNSwxLjE1LDAsMCwwLDEuOTEsNy44NiwxLjE2LDEuMTYsMCwwLDAsLjc1LDYuN1ptMCwzLjkzYTEuMTYsMS4xNiwwLDEsMCwxLjE2LDEuMTZBMS4xNiwxLjE2LDAsMCwwLC43NSwxMC42M1pcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC43IDIpXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JPbmUgK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICAgICAgICAgIClcbiAgICAgICAgYnJlYWtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICAgJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArXG4gICAgICAgICAgICAgIHdpbmRvdy5idG9hKFxuICAgICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiNlwiIGN5PVwiNlwiIHI9XCI1XCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAga2V5Q29sb3IgK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICAgICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3ZnOiBzdmcsXG4gICAgICAgIGNsYXNzOiBrZXkucGF0dGVybiA/ICdwYXR0ZXJuJyA6ICdjb2xvcidcbiAgICAgIH1cblxuICAgIGNhc2UgJ3NoYXBlJzpcbiAgICAgIGlmIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBjb2xvcktleVdpZGdldCA9IG1hcC53aWRnZXRzLmZpbmQoZnVuY3Rpb24odykge1xuICAgICAgICAgIHJldHVybiB3LnR5cGUgPT09ICdjb2xvcidcbiAgICAgICAgfSlcbiAgICAgICAgdmFyIGNvbG9yS2V5ID0gY29sb3JLZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbY29sb3JLZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICAgIGtleUNvbG9yID0gY29sb3JLZXkgPyBjb2xvcktleS5jb2xvciA6IGtleUNvbG9yID8ga2V5Q29sb3IgOiBudWxsXG4gICAgICB9XG5cbiAgICAgIHZhciBzdmdcblxuICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwicmFpbmJvd1wiICB5MT1cIjQuNVwiIHgyPVwiOVwiIHkyPVwiNC41XCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoNC41IC00LjUpIHJvdGF0ZSgxMzUpXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjN2YzYzhkXCIvPjxzdG9wIG9mZnNldD1cIjAuMzI1XCIgc3RvcC1jb2xvcj1cIiNlNzNmNzRcIi8+PHN0b3Agb2Zmc2V0PVwiMC41XCIgc3RvcC1jb2xvcj1cIiNmMmI3MDFcIi8+PHN0b3Agb2Zmc2V0PVwiMC42NzVcIiBzdG9wLWNvbG9yPVwiIzExYTU3OVwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiMzOTY5YWNcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD1cIjMuMjVcIiB5PVwiMS43NVwiIHdpZHRoPVwiOVwiIGhlaWdodD1cIjlcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNC41IC00LjUpIHJvdGF0ZSg0NSlcIiAnICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8gJ3BhaW50LW9yZGVyPVwic3Ryb2tlXCIgc3Ryb2tlPVwiI2ZmZmZmZlwiJyA6ICcnKSArXG4gICAgICAgICAgICAgICcgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyBrZXlDb2xvciA6ICd1cmwoI3JhaW5ib3cpJykgK1xuICAgICAgICAgICAgICAnXCIgLz48L3N2Zz4nXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgMTpcbiAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cInJhaW5ib3dcIiB5MT1cIjVcIiB4Mj1cIjEwXCIgeTI9XCI1XCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjMzk2OWFjXCIvPjxzdG9wIG9mZnNldD1cIjAuMjVcIiBzdG9wLWNvbG9yPVwiIzExYTU3OVwiLz48c3RvcCBvZmZzZXQ9XCIwLjVcIiBzdG9wLWNvbG9yPVwiI2YyYjcwMVwiLz48c3RvcCBvZmZzZXQ9XCIwLjc1XCIgc3RvcC1jb2xvcj1cIiNlNzNmNzRcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjN2YzYzhkXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiICcgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyAnc3Ryb2tlPVwiI2ZmZmZmZlwiJyA6ICcnKSArXG4gICAgICAgICAgICAgICcgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyBrZXlDb2xvciA6ICd1cmwoI3JhaW5ib3cpJykgK1xuICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAyOlxuICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwicmFpbmJvd1wiIHkxPVwiNVwiIHgyPVwiMTBcIiB5Mj1cIjVcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiMzOTY5YWNcIi8+PHN0b3Agb2Zmc2V0PVwiMC4zMjVcIiBzdG9wLWNvbG9yPVwiIzExYTU3OVwiLz48c3RvcCBvZmZzZXQ9XCIwLjVcIiBzdG9wLWNvbG9yPVwiI2YyYjcwMVwiLz48c3RvcCBvZmZzZXQ9XCIwLjY3NVwiIHN0b3AtY29sb3I9XCIjZTczZjc0XCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzdmM2M4ZFwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cG9seWdvbiBwb2ludHM9XCI2IDEwLjM5IDAgMTAuMzkgMyA1LjIgNiAwIDkgNS4yIDEyIDEwLjM5IDYgMTAuMzlcIiAnICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8gJ3BhaW50LW9yZGVyPVwic3Ryb2tlXCIgc3Ryb2tlPVwiI2ZmZmZmZlwiJyA6ICcnKSArXG4gICAgICAgICAgICAgICcgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyBrZXlDb2xvciA6ICd1cmwoI3JhaW5ib3cpJykgK1xuICAgICAgICAgICAgICAnXCIgLz48L3N2Zz4nXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJyYWluYm93XCIgeTE9XCI1XCIgeDI9XCIxMFwiIHkyPVwiNVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiIzM5NjlhY1wiLz48c3RvcCBvZmZzZXQ9XCIwLjI1XCIgc3RvcC1jb2xvcj1cIiMxMWE1NzlcIi8+PHN0b3Agb2Zmc2V0PVwiMC41XCIgc3RvcC1jb2xvcj1cIiNmMmI3MDFcIi8+PHN0b3Agb2Zmc2V0PVwiMC43NVwiIHN0b3AtY29sb3I9XCIjZTczZjc0XCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzdmM2M4ZFwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PVwiNlwiIGN5PVwiNlwiIHI9XCI1XCIgJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/ICdzdHJva2U9XCIjZmZmZmZmXCInIDogJycpICtcbiAgICAgICAgICAgICAgJyBmaWxsPVwiJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/IGtleUNvbG9yIDogJ3VybCgjcmFpbmJvdyknKSArXG4gICAgICAgICAgICAgICdcIi8+PC9zdmc+J1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdmc6ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCcgKyB3aW5kb3cuYnRvYShzdmcpLFxuICAgICAgICBjbGFzczogJ3NoYXBlJ1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIGtleUNvbG9yID0ga2V5LmNvbG9yXG5cbiAgICAgIHN2ZyA9XG4gICAgICAgICAgJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArXG4gICAgICAgICAgd2luZG93LmJ0b2EoXG4gICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGNpcmNsZSBjeD1cIicgK1xuICAgICAgICAgICAgICBpY29uU2l6ZVswXSAvIDIgK1xuICAgICAgICAgICAgICAnXCIgY3k9XCInICtcbiAgICAgICAgICAgICAgaWNvblNpemVbMV0gLyAyICtcbiAgICAgICAgICAgICAgJ1wiIHI9XCInICtcbiAgICAgICAgICAgICAgKGljb25TaXplWzBdICsgaWNvblNpemVbMV0pIC8gNCArXG4gICAgICAgICAgICAgICdcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciB8fCBrZXkuY29sb3IpICtcbiAgICAgICAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICAgICAgKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3ZnOiBzdmcsXG4gICAgICAgIGNsYXNzOiAnY29sb3InXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBleHRlcm5hbExpbmsgfSBmcm9tICcuL2hlbHBlcnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZUZlYXR1cmVFdmVudHMoZmVhdHVyZSwgbGF5ZXIsIG1hcCkge1xuICB2YXIgZXZlbnRPcHRpb25zID0gbWFwLm9uZWFjaGZlYXR1cmVcbiAgICA/IG1hcC5vbmVhY2hmZWF0dXJlXG4gICAgOiB7XG4gICAgICBjbGljazogZnVuY3Rpb24gY2xpY2soKSB7XG4gICAgICAgIGhhbmRsZUxheWVyQ2xpY2soZmVhdHVyZSwgbGF5ZXIsIG1hcC5sZWFmbGV0KVxuICAgICAgfVxuICAgIH1cblxuICBPYmplY3Qua2V5cyhldmVudE9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICBsYXllci5vbihsaXN0ZW5lciwgZXZlbnRPcHRpb25zW2xpc3RlbmVyXSlcbiAgfSlcbiAgdmFyIHBvcHVwQ29udGVudCA9XG4gICAgdHlwZW9mIG1hcC5mb3JtYXRwb3B1cGNvbnRlbnQgPT09ICdmdW5jdGlvbidcbiAgICAgID8gbWFwLmZvcm1hdHBvcHVwY29udGVudChmZWF0dXJlLCBtYXApXG4gICAgICA6IGZvcm1hdFBvcHVwQ29udGVudChmZWF0dXJlLCBtYXApXG4gIGxheWVyLmJpbmRQb3B1cChwb3B1cENvbnRlbnQpXG59XG5cbmZ1bmN0aW9uIGZvcm1hdFBvcHVwQ29udGVudChmZWF0dXJlLCBtYXApIHtcbiAgdmFyIGNvbnRlbnRcbiAgY29udGVudCA9IE9iamVjdC5rZXlzKGZlYXR1cmUucHJvcGVydGllcylcbiAgICAubWFwKGZ1bmN0aW9uKHApIHtcbiAgICAgIGlmIChmZWF0dXJlLnByb3BlcnRpZXNbcF0pIHtcbiAgICAgICAgaWYgKG1hcC5wb3B1cGhlYWRlcnMubGVuZ3RoICYmIG1hcC5wb3B1cGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcC5wb3B1cGhlYWRlcnMuaW5kZXhPZihwKSA+IC0xICYmXG4gICAgICAgICAgICBtYXAucG9wdXBjb250ZW50LmluZGV4T2YocCkgPiAtMVxuICAgICAgICAgICAgPyAnPGRpdiBjbGFzcz1cInBvcHVwSGVhZGVyU3R5bGVcIj4nICtcbiAgICAgICAgICAgICAgICBwLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvXy9nLCAnICcpICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1twXSArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgIDogbWFwLnBvcHVwY29udGVudC5pbmRleE9mKHApID4gLTFcbiAgICAgICAgICAgICAgPyAnPGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1twXSArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9IGVsc2UgaWYgKG1hcC5wb3B1cGhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcC5wb3B1cGhlYWRlcnMuaW5kZXhPZihwKSA+IC0xXG4gICAgICAgICAgICA/ICc8ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPicgK1xuICAgICAgICAgICAgICAgIHAudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fL2csICcgJykgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3BdICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9IGVsc2UgaWYgKG1hcC5wb3B1cGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcC5wb3B1cGNvbnRlbnQuaW5kZXhPZihwKSA+IC0xXG4gICAgICAgICAgICA/ICc8ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArIGZlYXR1cmUucHJvcGVydGllc1twXSArICc8L2Rpdj4nXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPicgK1xuICAgICAgICAgICAgcC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL18vZywgJyAnKSArXG4gICAgICAgICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3BdICtcbiAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuZmlsdGVyKGZ1bmN0aW9uKHApIHtcbiAgICAgIHJldHVybiBwXG4gICAgfSlcbiAgICAuam9pbignJylcbiAgdmFyIGxpbmsgPSBmZWF0dXJlLnByb3BlcnRpZXMuaHlwZXJsaW5rIHx8IGZlYXR1cmUucHJvcGVydGllcy5saW5rXG4gIHZhciBleHRlcm5hbExpbmtDb250ZW50ID1cbiAgICBsaW5rICYmIGxpbmsudHJpbSgpXG4gICAgICA/ICc8ZGl2IGNsYXNzPVwic2VwYXJhdG9yXCI+PC9kaXY+PGRpdiBjbGFzcz1cImh5cGVybGluayBwb3B1cEVudHJ5U3R5bGVcIj48YSBjbGFzcz1cInRyYW5zbGF0ZVwiIGhyZWY9JyArXG4gICAgICAgIGxpbmsudHJpbSgpICtcbiAgICAgICAgJyB0YXJnZXQ9XCJfYmxhbmtcIj4nICtcbiAgICAgICAgbWFwLmV4dGVybmFsbGlua3RleHQgK1xuICAgICAgICAnPC9hPicgK1xuICAgICAgICBleHRlcm5hbExpbmsgK1xuICAgICAgICAnPC9kaXY+J1xuICAgICAgOiAnJ1xuICBjb250ZW50ICs9IGV4dGVybmFsTGlua0NvbnRlbnRcblxuICBpZiAobGFuZykge1xuICAgIHZhciB0cmFuc2xhdGFibGVTdHJpbmdzID0gT2JqZWN0LmtleXMobWFwLnRyYW5zbGF0aW9ucykuc29ydChmdW5jdGlvbihcbiAgICAgIGEsXG4gICAgICBiXG4gICAgKSB7XG4gICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aFxuICAgIH0pXG4gICAgdHJhbnNsYXRhYmxlU3RyaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoJ1xcXFxiKCcgKyBSZWdFeHAuZXNjYXBlKHQpICsgJyknLCAnZ2knKVxuICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShyZSwgbWFwLnRyYW5zbGF0aW9uc1t0XSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnRcbn1cblxuZnVuY3Rpb24gaGFuZGxlTGF5ZXJDbGljayhmZWF0dXJlLCBsYXllciwgbGVhZmxldCkge1xuICB2YXIgaXNTcGlkZXJmaWVkID0gZmFsc2VcblxuICBpZiAoIWxheWVyLl9wcmVTcGlkZXJmeUxhdGxuZykge1xuICAgIE9iamVjdC5rZXlzKGxlYWZsZXQuX2xheWVycykuZm9yRWFjaChmdW5jdGlvbihsLCBpKSB7XG4gICAgICBpZiAobGVhZmxldC5fbGF5ZXJzW2xdLnVuc3BpZGVyZnkpIGxlYWZsZXQuX2xheWVyc1tsXS51bnNwaWRlcmZ5KClcbiAgICB9KVxuXG4gICAgaWYgKGxheWVyLl9fcGFyZW50KSB7XG4gICAgICBPYmplY3QudmFsdWVzKGxheWVyLl9fcGFyZW50Ll9ncm91cC5fZmVhdHVyZUdyb3VwLl9sYXllcnMpLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICBpZiAodi5fZ3JvdXAgJiYgdi5fZ3JvdXAuX3NwaWRlcmZpZWQpIGlzU3BpZGVyZmllZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYubGVhZmxldC1tYXJrZXItaWNvbicpKS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIChkLnN0eWxlLm9wYWNpdHkgPSBpc1NwaWRlcmZpZWQgPyAwLjMzIDogMSlcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcubGVhZmxldC1tYXJrZXItaWNvbicpKS5mb3JFYWNoKFxuICAgICAgICBmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIChkLnN0eWxlLm9wYWNpdHkgPSBpc1NwaWRlcmZpZWQgPyAwLjMzIDogMSlcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG53aW5kb3cuaGFuZGxlTGF5ZXJDbGljayA9IGhhbmRsZUxheWVyQ2xpY2tcbiIsImltcG9ydCBzdHlsZUtleSBmcm9tICcuL3N0eWxlS2V5LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHlsZVBvaW50KGZlYXR1cmUsIGxhdGxuZywgbWFwKSB7XG4gIHZhciBwb2ludFN0eWxlLCBrZXksIHN0eWxlT3B0aW9uc1xuXG4gIHZhciBDdXN0b21JY29uID0gTC5JY29uLmV4dGVuZCh7XG4gICAgb3B0aW9uczoge1xuICAgICAgaWNvblNpemU6IG1hcC5pY29uc2l6ZSB8fCBbMjAsIDIwXSxcbiAgICAgIGljb25BbmNob3I6IG1hcC5pY29uc2l6ZVxuICAgICAgICA/IG1hcC5pY29uc2l6ZSAvIDRcbiAgICAgICAgOiBtYXAuaWNvbmFuY2hvclxuICAgICAgICAgID8gbWFwLmljb25hbmNob3JcbiAgICAgICAgICA6IFs1LCA1XVxuICAgIH1cbiAgfSlcblxuICB2YXIgbm9uUG9pbnRTdHlsZSwga2V5LCBkaXZJY29uXG5cbiAgdmFyIGNvbG9yS2V5V2lkZ2V0ID0gbWFwLndpZGdldHMuZmluZChmdW5jdGlvbih3KSB7XG4gICAgaWYgKCF3LmtleXMpIHJldHVyblxuICAgIHZhciBrZXkgPSB3LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBmZWF0dXJlLnByb3BlcnRpZXNbdy5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgIH0pXG4gICAgcmV0dXJuIGtleSAmJiB3LnR5cGUgPT09ICdjb2xvcidcbiAgfSlcblxuICB2YXIgZm9ybUtleVdpZGdldCA9IG1hcC53aWRnZXRzLmZpbmQoZnVuY3Rpb24odykge1xuICAgIGlmICghdy5rZXlzKSByZXR1cm5cbiAgICB2YXIga2V5ID0gdy5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZmVhdHVyZS5wcm9wZXJ0aWVzW3cuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGtleSAmJiB3LnR5cGUgPT09ICdmb3JtJ1xuICB9KVxuXG4gIGZvciAobGV0IHcgb2YgbWFwLndpZGdldHMpIHtcbiAgICB2YXIgdGhpc0Zvcm1LZXlXaWRnZXQgPSB3LnR5cGUgPT09ICdmb3JtJyA/IHcgOiBmb3JtS2V5V2lkZ2V0XG4gICAgdmFyIHRoaXNDb2xvcktleVdpZGdldCA9IHcudHlwZSA9PT0gJ2NvbG9yJyA/IHcgOiBudWxsXG5cbiAgICB2YXIgY29sb3JLZXkgPSB0aGlzQ29sb3JLZXlXaWRnZXRcbiAgICAgID8gdGhpc0NvbG9yS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1t0aGlzQ29sb3JLZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG4gICAgICA6IG51bGxcblxuICAgIHZhciBmb3JtS2V5ID0gdGhpc0Zvcm1LZXlXaWRnZXRcbiAgICAgID8gdGhpc0Zvcm1LZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3RoaXNGb3JtS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuICAgICAgOiBudWxsXG5cbiAgICB2YXIgY29sb3IgPSBjb2xvcktleSA/IGNvbG9yS2V5LmNvbG9yIDogZm9ybUtleSA/IGZvcm1LZXkuY29sb3IgOiBudWxsXG5cbiAgICBpZiAodGhpc0Zvcm1LZXlXaWRnZXQgJiYgZmVhdHVyZS5wcm9wZXJ0aWVzW3RoaXNGb3JtS2V5V2lkZ2V0LmZpZWxkXSkge1xuICAgICAgdmFyIGZvcm1zID0gdGhpc0Zvcm1LZXlXaWRnZXQua2V5cy5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgICByZXR1cm4gay52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuICAgICAgdmFyIGkgPSBmb3Jtcy5pbmRleE9mKFxuICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIClcbiAgICAgIGtleSA9IHRoaXNGb3JtS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG5cbiAgICAgIGlmICgha2V5KSBicmVha1xuXG4gICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICBrZXk6IGZvcm1LZXksXG4gICAgICAgIGluZGV4OiBpLFxuICAgICAgICBmb3JtczogZm9ybXMsXG4gICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgIGZlYXR1cmU6IGZlYXR1cmVcbiAgICAgIH1cblxuICAgICAgaWYgKGtleS5mb3JtID09PSAnZGl2Jykge1xuICAgICAgICB2YXIgdmFsdWUgPSBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdXG4gICAgICAgIHZhciBjb3VudCA9IHZhbHVlID8gdmFsdWUuc3BsaXQoJ34nKS5sZW5ndGggOiAwXG5cbiAgICAgICAgZGl2SWNvbiA9IEwuZGl2SWNvbih7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnaWNvbi1kaXYnLFxuICAgICAgICAgIGh0bWw6XG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicgK1xuICAgICAgICAgICAgY29sb3IgK1xuICAgICAgICAgICAgJ1wiPicgK1xuICAgICAgICAgICAgY291bnQgK1xuICAgICAgICAgICAgJzwvc3Bhbj4nXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHBvaW50U3R5bGUgPSBkaXZJY29uID8gZGl2SWNvbiA6IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpc0NvbG9yS2V5V2lkZ2V0ICYmXG4gICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0NvbG9yS2V5V2lkZ2V0LmZpZWxkXVxuICAgICkge1xuICAgICAga2V5ID0gdGhpc0NvbG9yS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0NvbG9yS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuXG4gICAgICBpZiAoIWtleSkgYnJlYWtcblxuICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAga2V5OiBjb2xvcktleSxcbiAgICAgICAgY29sb3I6IGNvbG9yS2V5LmNvbG9yLFxuICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgZmVhdHVyZTogZmVhdHVyZVxuICAgICAgfVxuXG4gICAgICBwb2ludFN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3ZnID1cbiAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjVcIiBmaWxsPVwiJyArXG4gICAgICAgIGNvbG9yICtcbiAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICBwb2ludFN0eWxlID0ge1xuICAgICAgICBjbGFzczogJ2RlZmF1bHQnLFxuICAgICAgICBzdmc6IGVuY29kZVVSSSgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICsgd2luZG93LmJ0b2Eoc3ZnKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaWNvblVybCA9IHBvaW50U3R5bGUuc3ZnXG4gICAgdmFyIGljb24gPSBuZXcgQ3VzdG9tSWNvbih7XG4gICAgICBpY29uVXJsOiBpY29uVXJsXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBMLm1hcmtlcihsYXRsbmcsIHtcbiAgICBpY29uOiBkaXZJY29uID8gZGl2SWNvbiA6IGljb25cbiAgfSlcbn1cbiIsImltcG9ydCBzdHlsZUtleSBmcm9tICcuL3N0eWxlS2V5LmpzJ1xuaW1wb3J0IHsgbGluZVdlaWdodHMsIGxpbmVEYXNoQXJyYXlzIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdHlsZU5vblBvaW50KGZlYXR1cmUsIG1hcCwgaW5kZXgpIHtcbiAgdmFyIG5vblBvaW50U3R5bGUsXG4gICAgY29sb3JzID0gW10sXG4gICAgZm9ybXMgPSBbXSxcbiAgICBzb3J0ID0gWydmb3JtJywgJ2NvbG9yJ11cblxuICB2YXIgY29sb3JLZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICBpZiAoIXcua2V5cykgcmV0dXJuXG4gICAgdmFyIGtleSA9IHcua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGZlYXR1cmUucHJvcGVydGllc1t3LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgfSlcbiAgICByZXR1cm4ga2V5ICYmIHcudHlwZSA9PT0gJ2NvbG9yJ1xuICB9KVxuXG4gIHZhciBmb3JtS2V5V2lkZ2V0ID0gbWFwLndpZGdldHMuZmluZChmdW5jdGlvbih3KSB7XG4gICAgaWYgKCF3LmtleXMpIHJldHVyblxuICAgIHZhciBrZXkgPSB3LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBmZWF0dXJlLnByb3BlcnRpZXNbdy5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgIH0pXG5cbiAgICByZXR1cm4ga2V5ICYmIHcudHlwZSA9PT0gJ2Zvcm0nXG4gIH0pXG5cbiAgZm9yIChsZXQgdyBvZiBtYXAud2lkZ2V0cykge1xuICAgIHZhciBjb2xvcktleSA9IGNvbG9yS2V5V2lkZ2V0XG4gICAgICA/IGNvbG9yS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1tjb2xvcktleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgdmFyIGZvcm1LZXkgPSBmb3JtS2V5V2lkZ2V0XG4gICAgICA/IGZvcm1LZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW2Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG4gICAgICA6IG51bGxcblxuICAgIHZhciBjb2xvciA9IGNvbG9yS2V5ID8gY29sb3JLZXkuY29sb3IgOiBmb3JtS2V5ID8gZm9ybUtleS5jb2xvciA6IG51bGxcblxuICAgIHZhciBmb3JtS2V5Rm9ybSA9IGZvcm1LZXlXaWRnZXRcbiAgICAgID8gZm9ybUtleVdpZGdldC5rZXlzLnJlZHVjZShmdW5jdGlvbihhLCBjKSB7XG4gICAgICAgIHJldHVybiBjLmZvcm1cbiAgICAgIH0pXG4gICAgICA6IG51bGxcblxuICAgIHZhciBjb2xvcktleUZvcm0gPSBjb2xvcktleVdpZGdldFxuICAgICAgPyBjb2xvcktleVdpZGdldC5rZXlzLnJlZHVjZShmdW5jdGlvbihhLCBjKSB7XG4gICAgICAgIHJldHVybiBjLmZvcm1cbiAgICAgIH0pXG4gICAgICA6IG51bGxcblxuICAgIHZhciBmb3JtID0gZm9ybUtleVdpZGdldFxuICAgICAgPyBmb3JtS2V5V2lkZ2V0LmtleXMucmVkdWNlKGZ1bmN0aW9uKGEsIGMpIHtcbiAgICAgICAgcmV0dXJuIGMuZm9ybVxuICAgICAgfSlcbiAgICAgIDogbnVsbFxuXG4gICAgaWYgKGZvcm1LZXlXaWRnZXQgJiYgZm9ybSA9PT0gJ2xpbmUnKSB7XG4gICAgICBmb3JtcyA9IGZvcm1LZXlXaWRnZXQua2V5cy5tYXAoZnVuY3Rpb24oZikge1xuICAgICAgICByZXR1cm4gZi52YWx1ZVxuICAgICAgfSlcbiAgICAgIGZvcm1zLmZvckVhY2goZnVuY3Rpb24oZiwgaSkge1xuICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIGNvbG9ycy5wdXNoKFsndHJhbnNwYXJlbnQnLCBudWxsXSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBjb2xvcnMucHVzaChbbnVsbCwgZGVmYXVsdENvbG9yXSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb2xvcnMucHVzaChbJyMwMDAwMDAnLCBudWxsXSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBjb2xvcnMucHVzaChbJyNmZmZmZmYnLCBudWxsXSlcbiAgICAgICAgICBicmVha1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29sb3JzLnB1c2goW251bGwsIG51bGxdKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgKGZvcm1zLmxlbmd0aCAmJiBmb3JtS2V5Rm9ybSA9PT0gJ2xpbmUnKSB8fFxuICAgICAgKGZvcm1zLmxlbmd0aCAmJiBjb2xvcktleUZvcm0gPT09ICdsaW5lJylcbiAgICApIHtcbiAgICAgIGlmIChmb3JtS2V5V2lkZ2V0KSB7XG4gICAgICAgIHZhciBpID0gZm9ybXMuaW5kZXhPZihmZWF0dXJlLnByb3BlcnRpZXNbZm9ybUtleVdpZGdldC5maWVsZF0pXG4gICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICBub25Qb2ludFN0eWxlID0ge1xuICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgIGNvbG9yc1tpXVtpbmRleF0gPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gJyNjYWQyZDMnXG4gICAgICAgICAgICAgICAgOiBjb2xvcnNbaV1baW5kZXhdICE9PSBudWxsXG4gICAgICAgICAgICAgICAgICA/IGNvbG9yc1tpXVtpbmRleF1cbiAgICAgICAgICAgICAgICAgIDogY29sb3IsXG4gICAgICAgICAgICB3ZWlnaHQ6IGxpbmVXZWlnaHRzW2ldW2luZGV4XSxcbiAgICAgICAgICAgIGxpbmVDYXA6ICdzcXVhcmUnLFxuICAgICAgICAgICAgZGFzaEFycmF5OiBsaW5lRGFzaEFycmF5c1tpXSA/IGxpbmVEYXNoQXJyYXlzW2ldW2luZGV4XSA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZvcm1LZXlGb3JtID09PSAnbGluZScgfHwgY29sb3JLZXlGb3JtID09PSAnbGluZScpIHtcbiAgICAgIG5vblBvaW50U3R5bGUgPSB7XG4gICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgd2VpZ2h0OiAyLFxuICAgICAgICBsaW5lQ2FwOiAnc3F1YXJlJyxcbiAgICAgICAgZGFzaEFycmF5OiAnMyw3J1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29sb3JLZXkgJiYgY29sb3JLZXkuZm9ybSA9PT0gJ3BhdHRlcm4nKSB7XG4gICAgICB2YXIgcGF0dGVyblxuXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2UgY29sb3JLZXkucGF0dGVyblswXS5pbmRleE9mKCdzdHJpcGUnKSA+IC0xOlxuICAgICAgICB2YXIgcGF0dGVybk9wdGlvbnMgPSB7XG4gICAgICAgICAgd2VpZ2h0OiAzLFxuICAgICAgICAgIHNwYWNlV2VpZ2h0OiAzLFxuICAgICAgICAgIGNvbG9yOiBjb2xvcktleS5wYXR0ZXJuWzFdLFxuICAgICAgICAgIHNwYWNlQ29sb3I6IGNvbG9yS2V5LnBhdHRlcm5bY29sb3JLZXkucGF0dGVybi5sZW5ndGggLSAxXSxcbiAgICAgICAgICBzcGFjZU9wYWNpdHk6IDEsXG4gICAgICAgICAgYW5nbGU6IDQ1XG4gICAgICAgIH1cbiAgICAgICAgcGF0dGVybiA9IG5ldyBMLlN0cmlwZVBhdHRlcm4ocGF0dGVybk9wdGlvbnMpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgY29sb3JLZXkucGF0dGVyblswXS5pbmRleE9mKCdkb3QnKSA+IC0xOlxuICAgICAgICB2YXIgc2hhcGVPcHRpb25zID0ge1xuICAgICAgICAgIHg6IDQsXG4gICAgICAgICAgeTogNCxcbiAgICAgICAgICByYWRpdXM6IDIsXG4gICAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgICBzdHJva2U6IGZhbHNlLFxuICAgICAgICAgIGZpbGxDb2xvcjogY29sb3JLZXkucGF0dGVybltjb2xvcktleS5wYXR0ZXJuLmxlbmd0aCAtIDFdLFxuICAgICAgICAgIGZpbGxPcGFjaXR5OiAxXG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNoYXBlID0gbmV3IEwuUGF0dGVybkNpcmNsZShzaGFwZU9wdGlvbnMpXG4gICAgICAgIHZhciBwYXR0ZXJuT3B0aW9ucyA9IHtcbiAgICAgICAgICB3aWR0aDogOCxcbiAgICAgICAgICBoZWlnaHQ6IDhcbiAgICAgICAgfVxuICAgICAgICBwYXR0ZXJuID0gbmV3IEwuUGF0dGVybihwYXR0ZXJuT3B0aW9ucylcbiAgICAgICAgcGF0dGVybi5hZGRTaGFwZShzaGFwZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcGF0dGVybi5hZGRUbyhtYXAubGVhZmxldClcbiAgICAgIG5vblBvaW50U3R5bGUgPSB7XG4gICAgICAgIGZpbGxQYXR0ZXJuOiBwYXR0ZXJuID8gcGF0dGVybiA6IG51bGwsXG4gICAgICAgIGZpbGxDb2xvcjogY29sb3IsXG4gICAgICAgIGNvbG9yOiBkZWZhdWx0Q29sb3IsXG4gICAgICAgIGZpbGxPcGFjaXR5OiAwLjcsXG4gICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgd2VpZ2h0OiAyLFxuICAgICAgICBsaW5lQ2FwOiAnc3F1YXJlJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbGluZUNvbG9yXG4gICAgICB2YXIgbGluZVdlaWdodFxuICAgICAgdmFyIGxpbmVPcGFjaXR5XG5cbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgY2FzZSBmZWF0dXJlLmdlb21ldHJ5LnR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdsaW5lJykgPiAtMTpcbiAgICAgICAgbGluZUNvbG9yID0gY29sb3JcbiAgICAgICAgICA/IGNocm9tYShjb2xvcilcbiAgICAgICAgICAgIC5icmlnaHRlbigpXG4gICAgICAgICAgICAuaGV4KClcbiAgICAgICAgICA6IG51bGxcbiAgICAgICAgbGluZU9wYWNpdHkgPSAxXG4gICAgICAgIGxpbmVXZWlnaHQgPSA0XG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgZmVhdHVyZS5nZW9tZXRyeS50eXBlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigncG9seWdvbicpID4gLTE6XG4gICAgICAgIGxpbmVDb2xvciA9IGRlZmF1bHRDb2xvclxuICAgICAgICBsaW5lT3BhY2l0eSA9IDAuNVxuICAgICAgICBsaW5lV2VpZ2h0ID0gMlxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBub25Qb2ludFN0eWxlID0ge1xuICAgICAgICBmaWxsUGF0dGVybjogcGF0dGVybixcbiAgICAgICAgZmlsbENvbG9yOiBjb2xvcixcbiAgICAgICAgY29sb3I6IGxpbmVDb2xvcixcbiAgICAgICAgZmlsbE9wYWNpdHk6IDAuNyxcbiAgICAgICAgb3BhY2l0eTogbGluZU9wYWNpdHksXG4gICAgICAgIHdlaWdodDogbGluZVdlaWdodFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub25Qb2ludFN0eWxlKSByZXR1cm4gbm9uUG9pbnRTdHlsZVxuICB9XG59XG4iLCJpbXBvcnQgaGFuZGxlRmVhdHVyZUV2ZW50cyBmcm9tICcuL2hhbmRsZUZlYXR1cmVFdmVudHMuanMnXG5pbXBvcnQgc3R5bGVQb2ludCBmcm9tICcuL3N0eWxlUG9pbnQuanMnXG5pbXBvcnQgc3R5bGVOb25Qb2ludCBmcm9tICcuL3N0eWxlTm9uUG9pbnQuanMnXG53aW5kb3cuaGFuZGxlRmVhdHVyZUV2ZW50cyA9IGhhbmRsZUZlYXR1cmVFdmVudHNcbndpbmRvdy5zdHlsZVBvaW50ID0gc3R5bGVQb2ludFxud2luZG93LnN0eWxlTm9uUG9pbnQgPSBzdHlsZU5vblBvaW50XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VHZW9Kc29uT3B0aW9ucyhcbiAgbWFwLFxuICBjb2xvcktleVdpZGdldHMsXG4gIGZvcm1LZXlXaWRnZXRzXG4pIHtcbiAgZnVuY3Rpb24gZmlsdGVyKGZlYXR1cmUpIHtcbiAgICByZXR1cm4gbWFwLmZpbHRlcnNcbiAgICAgIC5tYXAoZnVuY3Rpb24oZikge1xuICAgICAgICByZXR1cm4gZihmZWF0dXJlKVxuICAgICAgfSlcbiAgICAgIC5ldmVyeShmdW5jdGlvbihmKSB7XG4gICAgICAgIHJldHVybiBmICE9PSBmYWxzZVxuICAgICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRWFjaEZlYXR1cmUoZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICBoYW5kbGVGZWF0dXJlRXZlbnRzKGZlYXR1cmUsIGxheWVyLCBtYXApXG4gIH1cblxuICB2YXIgYmFja2dyb3VuZE9wdGlvbnMgPSB7XG4gICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgb25FYWNoRmVhdHVyZTogb25FYWNoRmVhdHVyZSxcbiAgICBwb2ludFRvTGF5ZXI6XG4gICAgICBtYXAucG9pbnRTdHlsZSB8fFxuICAgICAgZnVuY3Rpb24oZmVhdHVyZSwgbGF0bG5nKSB7XG4gICAgICAgIHJldHVybiBzdHlsZVBvaW50KGZlYXR1cmUsIGxhdGxuZywgbWFwKVxuICAgICAgfSxcbiAgICBzdHlsZTpcbiAgICAgIG1hcC5ub25Qb2ludFN0eWxlIHx8XG4gICAgICBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiBzdHlsZU5vblBvaW50KGZlYXR1cmUsIG1hcCwgMClcbiAgICAgIH1cbiAgfVxuICB2YXIgZm9yZWdyb3VuZE9wdGlvbnMgPSB7XG4gICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgb25FYWNoRmVhdHVyZTogb25FYWNoRmVhdHVyZSxcbiAgICBwb2ludFRvTGF5ZXI6XG4gICAgICBtYXAucG9pbnRTdHlsZSB8fFxuICAgICAgZnVuY3Rpb24oZmVhdHVyZSwgbGF0bG5nKSB7XG4gICAgICAgIHJldHVybiBzdHlsZVBvaW50KGZlYXR1cmUsIGxhdGxuZywgbWFwKVxuICAgICAgfSxcbiAgICBzdHlsZTpcbiAgICAgIG1hcC5ub25Qb2ludFN0eWxlIHx8XG4gICAgICBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgIHJldHVybiBzdHlsZU5vblBvaW50KGZlYXR1cmUsIG1hcCwgMSlcbiAgICAgIH1cbiAgfVxuXG4gIHJldHVybiBbYmFja2dyb3VuZE9wdGlvbnMsIGZvcmVncm91bmRPcHRpb25zXVxufVxuIiwiaW1wb3J0IG1ha2VHZW9Kc29uT3B0aW9ucyBmcm9tICcuL21ha2VHZW9Kc29uT3B0aW9ucy5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZUxheWVycyhtYXApIHtcbiAgdmFyIGNvbG9yS2V5V2lkZ2V0cyA9IFtdLFxuICAgIGZvcm1LZXlXaWRnZXRzID0gW11cblxuICBpZiAobWFwLndpZGdldHMpIHtcbiAgICBjb2xvcktleVdpZGdldHMgPSBtYXAud2lkZ2V0cy5maWx0ZXIoZnVuY3Rpb24odykge1xuICAgICAgcmV0dXJuIHcudHlwZSA9PT0gJ2NvbG9yJ1xuICAgIH0pXG4gICAgZm9ybUtleVdpZGdldHMgPSBtYXAud2lkZ2V0cy5maWx0ZXIoZnVuY3Rpb24odykge1xuICAgICAgcmV0dXJuIHcudHlwZSA9PT0gJ2Zvcm0nXG4gICAgfSlcbiAgfVxuXG4gIHZhciBnZW9Kc29uT3B0aW9ucyA9IG1hcC5nZW9qc29ub3B0aW9uc1xuICAgID8gbWFwLmdlb2pzb25vcHRpb25zKG1hcClcbiAgICA6IG1ha2VHZW9Kc29uT3B0aW9ucyhtYXApXG4gIG1hcC5qc29uLmZvckVhY2goZnVuY3Rpb24oanNvbiwgaSkge1xuICAgIHZhciBjbHVzdGVyQ29sb3IsIGNvbG9yS2V5V2lkZ2V0XG5cbiAgICBpZiAoY29sb3JLZXlXaWRnZXRzLmxlbmd0aCkge1xuICAgICAgdmFyIGNvbG9yS2V5cyA9IGNvbG9yS2V5V2lkZ2V0c1xuICAgICAgICAubWFwKGZ1bmN0aW9uKHdpZGdldCkge1xuICAgICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IGpzb24uZmVhdHVyZXNbMF0ucHJvcGVydGllc1t3aWRnZXQuZmllbGRdXG5cbiAgICAgICAgICB2YXIga2V5ID0gd2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gY29sbGVjdGlvbk5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICBjb2xvcktleVdpZGdldCA9IHdpZGdldFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ga2V5XG4gICAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oY29sb3JLZXkpIHtcbiAgICAgICAgICByZXR1cm4gY29sb3JLZXlcbiAgICAgICAgfSlcblxuICAgICAgY2x1c3RlckNvbG9yID0gY29sb3JLZXlzWzBdID8gY29sb3JLZXlzWzBdLmNvbG9yIDogJyMwMDAwMDAnXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsdXN0ZXJDb2xvciA9ICcjMDAwMDAwJ1xuICAgIH1cblxuICAgIHZhciBhbGxQb2ludHMgPSBqc29uLmZlYXR1cmVzLmV2ZXJ5KGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgIHJldHVybiBmZWF0dXJlLmdlb21ldHJ5ICYmIGZlYXR1cmUuZ2VvbWV0cnkudHlwZS50b0xvd2VyQ2FzZSgpID09PSAncG9pbnQnXG4gICAgfSlcblxuICAgIG1hcC5ncm91cHMucHVzaChcbiAgICAgIG5ldyBMLk1hcmtlckNsdXN0ZXJHcm91cCh7XG4gICAgICAgIHNob3dDb3ZlcmFnZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICB6b29tVG9Cb3VuZHNPbkNsaWNrOiBmYWxzZSxcbiAgICAgICAgbWF4Q2x1c3RlclJhZGl1czpcbiAgICAgICAgICBhbGxQb2ludHMgJiYgbWFwLmNsdXN0ZXJkaXN0YW5jZSA/IG1hcC5jbHVzdGVyZGlzdGFuY2UgOiBOYU4sXG4gICAgICAgIGljb25DcmVhdGVGdW5jdGlvbjogZnVuY3Rpb24gaWNvbkNyZWF0ZUZ1bmN0aW9uKGNsdXN0ZXIpIHtcbiAgICAgICAgICByZXR1cm4gTC5kaXZJY29uKHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2ljb24tZ3JvdXAnLFxuICAgICAgICAgICAgaHRtbDpcbiAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwidGV4dFwiIHN0eWxlPVwiYm9yZGVyOiAycHggc29saWQnICtcbiAgICAgICAgICAgICAgY2x1c3RlckNvbG9yICtcbiAgICAgICAgICAgICAgJzsgY29sb3I6JyArXG4gICAgICAgICAgICAgIGNsdXN0ZXJDb2xvciArXG4gICAgICAgICAgICAgICdcIj4nICtcbiAgICAgICAgICAgICAgY2x1c3Rlci5nZXRDaGlsZENvdW50KCkgK1xuICAgICAgICAgICAgICAnPC9zcGFuPidcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIClcblxuICAgIHZhciBoYXNMaW5lRmVhdHVyZXMgPSBqc29uLmZlYXR1cmVzLnNvbWUoZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZmVhdHVyZS5nZW9tZXRyeSAmJlxuICAgICAgICBmZWF0dXJlLmdlb21ldHJ5LnR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdsaW5lJykgPiAtMVxuICAgICAgKVxuICAgIH0pXG5cbiAgICBnZW9Kc29uT3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG9wdGlvbiwgaW5kZXgpIHtcbiAgICAgIGlmIChjb2xvcktleVdpZGdldCkge1xuICAgICAgICBqc29uLmZlYXR1cmVzID0ganNvbi5mZWF0dXJlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYi5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXS5sb2NhbGVDb21wYXJlKFxuICAgICAgICAgICAgYS5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgdmFyIGdlb0pzb24gPSBMLmdlb0pzb24oanNvbiwgb3B0aW9uKVxuXG4gICAgICBpZiAoXG4gICAgICAgICghaGFzTGluZUZlYXR1cmVzICYmIGluZGV4ICUgMiA9PT0gMCkgfHxcbiAgICAgICAgaGFzTGluZUZlYXR1cmVzIHx8XG4gICAgICAgIG1hcC5nZW9qc29ub3B0aW9uc1xuICAgICAgKSB7XG4gICAgICAgIG1hcC5ncm91cHNbaV0uYWRkTGF5ZXIoZ2VvSnNvbilcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKG1hcC5ncm91cHNbaV0uZ2V0TGF5ZXJzKCkubGVuZ3RoKSB7XG4gICAgICBtYXAubGVhZmxldC5hZGRMYXllcihtYXAuZ3JvdXBzW2ldKVxuICAgICAgbWFwLmdyb3Vwc1tpXS5vbignY2x1c3RlcmNsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBoYW5kbGVDbHVzdGVyQ2xpY2soZSwgbWFwLCBpKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNsdXN0ZXJDbGljayhlLCBtYXAsIGkpIHtcbiAgbWFwLmxlYWZsZXQuX2xheWVyc1tlLmxheWVyLl9sZWFmbGV0X2lkXS5zcGlkZXJmeSgpXG5cbiAgT2JqZWN0LmtleXMobWFwLmxlYWZsZXQuX2xheWVycykuZm9yRWFjaChmdW5jdGlvbihsYXllciwgaSkge1xuICAgIGlmIChwYXJzZUludChsYXllciwgMTApICE9PSBlLmxheWVyLl9sZWFmbGV0X2lkKSB7XG4gICAgICBpZiAobWFwLmxlYWZsZXQuX2xheWVyc1tsYXllcl0udW5zcGlkZXJmeSlcbiAgICAgICAgbWFwLmxlYWZsZXQuX2xheWVyc1tsYXllcl0udW5zcGlkZXJmeSgpXG4gICAgfVxuICB9KVxuICB2YXIgaXNTcGlkZXJmaWVkID0gZmFsc2VcbiAgT2JqZWN0LnZhbHVlcyhtYXAuZ3JvdXBzW2ldLl9mZWF0dXJlR3JvdXAuX2xheWVycykuZm9yRWFjaChmdW5jdGlvbih2KSB7XG4gICAgaWYgKHYuX2dyb3VwICYmIHYuX2dyb3VwLl9zcGlkZXJmaWVkKSBpc1NwaWRlcmZpZWQgPSB0cnVlXG4gIH0pXG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmxlYWZsZXQtbWFya2VyLWljb24nKSkuZm9yRWFjaChcbiAgICBmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gKGQuc3R5bGUub3BhY2l0eSA9IGlzU3BpZGVyZmllZCA/IDAuMzMgOiAxKVxuICAgIH1cbiAgKVxuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5sZWFmbGV0LW1hcmtlci1pY29uJykpLmZvckVhY2goXG4gICAgZnVuY3Rpb24oZCkge1xuICAgICAgcmV0dXJuIChkLnN0eWxlLm9wYWNpdHkgPSBpc1NwaWRlcmZpZWQgPyAwLjMzIDogMSlcbiAgICB9XG4gIClcbiAgT2JqZWN0LnZhbHVlcyhtYXAuZ3JvdXBzW2ldLl9mZWF0dXJlR3JvdXAuX2xheWVycykuZmlsdGVyKGZ1bmN0aW9uKHYpIHtcbiAgICBlLmxheWVyXG4gICAgICAuZ2V0QWxsQ2hpbGRNYXJrZXJzKClcbiAgICAgIC5tYXAoZnVuY3Rpb24obSkge1xuICAgICAgICByZXR1cm4gbS5nZXRFbGVtZW50KClcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgcmV0dXJuIG1cbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbihtKSB7XG4gICAgICAgIHJldHVybiAobS5zdHlsZS5vcGFjaXR5ID0gMSlcbiAgICAgIH0pXG4gIH0pXG59XG4iLCJpbXBvcnQgeyBjb252ZXJ0VHlwZSwgY3JlYXRlQ29sb3JTY2FsZSB9IGZyb20gJy4vaGVscGVycy5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGFuZ3VhZ2VEYXRhKGRhdGEpIHtcbiAgdmFyIGxhbmd1YWdlRGF0YSA9IHt9XG4gIGRhdGEuZm9yRWFjaChmdW5jdGlvbihyb3cpIHtcbiAgICB2YXIga2V5XG4gICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbHVtbiwgaSkge1xuICAgICAgaWYgKGNvbHVtbi5pbmRleE9mKCdnc3gkJykgPiAtMSkge1xuICAgICAgICB2YXIgY29sdW1uTmFtZSA9IGNvbHVtbi5yZXBsYWNlKCdnc3gkJywgJycpXG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgPT09ICdlbicpIHtcbiAgICAgICAgICBrZXkgPSByb3dbY29sdW1uXVsnJHQnXVxuICAgICAgICAgIGxhbmd1YWdlRGF0YVtrZXldID0ge31cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2x1bW5OYW1lID09PSBsYW5nKSB7XG4gICAgICAgICAgbGFuZ3VhZ2VEYXRhW2tleV0gPSByb3dbY29sdW1uXVsnJHQnXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbiAgcmV0dXJuIGxhbmd1YWdlRGF0YVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMZWdlbmREYXRhKG9wdGlvbnMsIGpzb24sIHN0eWxlKSB7XG4gIHZhciBjb2xvclNjYWxlID0gY3JlYXRlQ29sb3JTY2FsZShqc29uLmxlbmd0aClcbiAgdmFyIGxlZ2VuZEl0ZW1zID0gW11cbiAganNvbi5mb3JFYWNoKGZ1bmN0aW9uKHJvdywgeCkge1xuICAgIHZhciBkYXRhID0ge31cbiAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sdW1uLCB5KSB7XG4gICAgICBpZiAoY29sdW1uLmluZGV4T2YoJ2dzeCQnKSA+IC0xKSB7XG4gICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnJlcGxhY2UoJ2dzeCQnLCAnJylcblxuICAgICAgICBpZiAoY29sdW1uTmFtZSA9PT0gJ2xhYmVsJykge1xuICAgICAgICAgIHZhciBrZXkgPSByb3dbY29sdW1uXVsnJHQnXS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgZGF0YS5rZXkgPSBrZXlcbiAgICAgICAgICBkYXRhLmxhYmVsID0gcm93W09iamVjdC5rZXlzKHJvdylbeSArIDBdXVsnJHQnXVxuICAgICAgICAgIGRhdGEudmFsdWUgPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgMV1dWyckdCddXG4gICAgICAgICAgZGF0YS5ncm91cCA9IGNvbnZlcnRUeXBlKHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyAyXV1bJyR0J10pXG4gICAgICAgICAgZGF0YS5zZWxlY3RlZCA9IGNvbnZlcnRUeXBlKHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyAzXV1bJyR0J10pXG4gICAgICAgICAgdmFyIGNvbG9yVmFsID0gcm93W09iamVjdC5rZXlzKHJvdylbeSArIDRdXVsnJHQnXVxuICAgICAgICAgIGRhdGEuZm9ybSA9IHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyA1XV1bJyR0J11cbiAgICAgICAgICBkYXRhLmNvbG9yID0gY29sb3JWYWxcbiAgICAgICAgICAgID8gY29sb3JWYWxcbiAgICAgICAgICAgIDogZGF0YS5mb3JtID09PSAnbGluZSdcbiAgICAgICAgICAgICAgPyBkZWZhdWx0Q29sb3JcbiAgICAgICAgICAgICAgOiBjb2xvclNjYWxlW3hdXG4gICAgICAgICAgZGF0YS5pY29uID0gcm93W09iamVjdC5rZXlzKHJvdylbeSArIDZdXVsnJHQnXVxuICAgICAgICAgIGRhdGEucGF0dGVybiA9IHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyA3XV1bJyR0J10uc3BsaXQoJywnKVxuXG4gICAgICAgICAgaWYgKG9wdGlvbnMudHJhbnNsYXRpb25zKSB7XG4gICAgICAgICAgICBkYXRhLmxhYmVsID0gb3B0aW9ucy50cmFuc2xhdGlvbnNbZGF0YS5sYWJlbF1cbiAgICAgICAgICAgIGRhdGEuZ3JvdXAgPSBvcHRpb25zLnRyYW5zbGF0aW9uc1tkYXRhLmdyb3VwXVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGxlZ2VuZEl0ZW1zLnB1c2goZGF0YSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG4gIHJldHVybiBsZWdlbmRJdGVtc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNZXRhRGF0YShqc29uKSB7XG4gIHZhciBkYXRhID0ge31cbiAganNvbi5mb3JFYWNoKGZ1bmN0aW9uKHJvdywgeCkge1xuICAgIE9iamVjdC5rZXlzKHJvdykuZm9yRWFjaChmdW5jdGlvbihjb2x1bW4sIHkpIHtcbiAgICAgIGlmIChjb2x1bW4uaW5kZXhPZignZ3N4JCcpID4gLTEpIHtcbiAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4ucmVwbGFjZSgnZ3N4JCcsICcnKVxuXG4gICAgICAgIGlmIChjb2x1bW5OYW1lID09PSAncHJvcGVydHknKSB7XG4gICAgICAgICAgdmFyIGtleSA9IHJvd1tjb2x1bW5dWyckdCddLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnJylcbiAgICAgICAgICBkYXRhW2tleV0gPSBkYXRhW2tleV0gfHwge31cbiAgICAgICAgICBkYXRhW2tleV0gPSBjb252ZXJ0VHlwZShyb3dbT2JqZWN0LmtleXMocm93KVt5ICsgMV1dWyckdCddKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbiAgcmV0dXJuIGRhdGFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlV2lkZ2V0RGF0YShtZXRhRGF0YSkge1xuICB2YXIgd2lkZ2V0cyA9IFtdXG5cbiAgZnVuY3Rpb24gcHJvY2VzcyhrLCBpbmRleCwgcHJvcGVydHkpIHtcbiAgICBpZiAoay50b0xvd2VyQ2FzZSgpLmluZGV4T2YocHJvcGVydHkpID4gLTEpXG4gICAgICB3aWRnZXRzW2luZGV4IC0gMV1bcHJvcGVydHldID0gY29udmVydFR5cGUobWV0YURhdGFba10pXG4gIH1cblxuICB2YXIgcHJvcGVydGllcyA9IFtcbiAgICAnaW5wdXQnLFxuICAgICdmaWVsZCcsXG4gICAgJ2dyb3VwaW5nJyxcbiAgICAnaW5zdHJ1Y3Rpb25zJyxcbiAgICAnbWF4aW11bScsXG4gICAgJ3R5cGUnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdzdHlsZSdcbiAgXVxuICBPYmplY3Qua2V5cyhtZXRhRGF0YSlcbiAgICAuZmlsdGVyKGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiBrLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignd2lkZ2V0JykgPiAtMVxuICAgIH0pXG4gICAgLmZvckVhY2goZnVuY3Rpb24oaykge1xuICAgICAgdmFyIGluZGV4ID0gay5tYXRjaCgvXFxkKy8pWzBdXG4gICAgICB3aWRnZXRzW2luZGV4IC0gMV0gPSB3aWRnZXRzW2luZGV4IC0gMV0gfHwge31cbiAgICAgIHByb3BlcnRpZXMuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgICBwcm9jZXNzKGssIGluZGV4LCBwcm9wZXJ0eSlcbiAgICAgIH0pXG4gICAgfSlcbiAgd2lkZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHcsIGkpIHtcbiAgICB3LmZpZWxkID0gdy5maWVsZC5yZXBsYWNlKC8gL2csICdfJylcbiAgICB3LmlkID0gaVxuICB9KVxuICByZXR1cm4gd2lkZ2V0c1xufVxuIiwidmFyIG1hcElkID0gMFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21NYXAoY29udGFpbmVyLCBwcm9wZXJ0aWVzKSB7XG4gIHRoaXMuaWQgPSBtYXBJZCsrXG4gIHRoaXMuZmlsdGVycyA9IFtdXG4gIHRoaXMuZ3JvdXBzID0gW11cbiAgdGhpcy5qc29uID0gW11cbiAgdGhpcy5sZWFmbGV0XG5cbiAgdmFyIF90aGlzID0gdGhpc1xuXG4gIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICBfdGhpc1twcm9wZXJ0eS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJycpXSA9IHByb3BlcnRpZXNbcHJvcGVydHldXG4gIH0pXG5cbiAgaWYgKF90aGlzLnRyYW5zbGF0aW9ucykge1xuICAgIHdpbmRvdy50cmFuc2xhdGlvbnMgPSBfdGhpcy50cmFuc2xhdGlvbnNcbiAgfVxuXG4gIF90aGlzLnBvcHVwY29udGVudCA9XG4gICAgX3RoaXMucG9wdXBjb250ZW50ICYmIHR5cGVvZiBfdGhpcy5wb3B1cGNvbnRlbnQgPT09ICdzdHJpbmcnXG4gICAgICA/IF90aGlzLnBvcHVwY29udGVudC5zcGxpdCgnLCcpXG4gICAgICA6IF90aGlzLnBvcHVwY29udGVudCAmJiB0aGlzLnBvcHVwY29udGVudCA9PT0gJ29iamVjdCdcbiAgICAgICAgPyBfdGhpcy5wb3B1cGNvbnRlbnRcbiAgICAgICAgOiBbXVxuICBfdGhpcy5wb3B1cGhlYWRlcnMgPVxuICAgIF90aGlzLnBvcHVwaGVhZGVycyAmJiB0eXBlb2YgX3RoaXMucG9wdXBoZWFkZXJzID09PSAnc3RyaW5nJ1xuICAgICAgPyBfdGhpcy5wb3B1cGhlYWRlcnMuc3BsaXQoJywnKVxuICAgICAgOiBfdGhpcy5wb3B1cGhlYWRlcnMgJiYgX3RoaXMucG9wdXBoZWFkZXJzID09PSAnb2JqZWN0J1xuICAgICAgICA/IF90aGlzLnBvcHVwaGVhZGVyc1xuICAgICAgICA6IFtdXG4gIEN1c3RvbU1hcC5hbGwgPSBDdXN0b21NYXAuYWxsIHx8IFtdXG4gIEN1c3RvbU1hcC5hbGwucHVzaCh0aGlzKVxuXG4gIF90aGlzLnJlc2V0RmlsdGVycyA9IGZ1bmN0aW9uKCkge1xuICAgIF90aGlzLmZpbHRlcnMgPSBbXVxuICB9XG5cbiAgX3RoaXMucmVtb3ZlR3JvdXBzID0gZnVuY3Rpb24oKSB7XG4gICAgX3RoaXMuZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgIF90aGlzLmxlYWZsZXQucmVtb3ZlTGF5ZXIoZ3JvdXApXG4gICAgfSlcblxuICAgIF90aGlzLmdyb3VwcyA9IFtdXG4gIH1cblxuICB0aGlzLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIF90aGlzLmxlYWZsZXQgPSBMLm1hcChjb250YWluZXIsIHtcbiAgICAgIG1pblpvb206IF90aGlzLm1pbnpvb20gfHwgbnVsbCxcbiAgICAgIG1heFpvb206IF90aGlzLm1heHpvb20gfHwgMjAsXG4gICAgICBtYXhCb3VuZHM6IF90aGlzLm1heGJvdW5kcyB8fCBbX3RoaXMuc3dib3VuZHMsIF90aGlzLm5lYm91bmRzXSxcbiAgICAgIHNjcm9sbFdoZWVsWm9vbTogd2luZG93LmlubmVyV2lkdGggPCA3NjggPyBmYWxzZSA6IHRydWUsXG4gICAgICB6b29tQ29udHJvbDpcbiAgICAgICAgIV90aGlzLmhhc093blByb3BlcnR5KCd6b29tc2xpZGVyJykgfHwgX3RoaXMuem9vbXNsaWRlciA/IGZhbHNlIDogdHJ1ZSxcbiAgICAgIGF0dHJpYnV0aW9uQ29udHJvbDogZmFsc2VcbiAgICB9KVxuXG4gICAgaWYgKF90aGlzLmxvYWRldmVudCkgX3RoaXMubGVhZmxldC5vbignbG9hZCcsIF90aGlzLmxvYWRldmVudClcbiAgICBpZiAoX3RoaXMuYWRkZXZlbnQpIF90aGlzLmxlYWZsZXQub24oJ2xheWVyYWRkJywgX3RoaXMuYWRkZXZlbnQpXG4gICAgdGhpcy5sZWFmbGV0LnNldFZpZXcoX3RoaXMuY2VudGVyLCBfdGhpcy56b29tIHx8IDIpXG4gICAgTC50aWxlTGF5ZXIoXG4gICAgICAnaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEvaWxhYm1lZGlhLycgK1xuICAgICAgICBfdGhpcy5tYXBib3hzdHlsZSArXG4gICAgICAgICcvdGlsZXMvMjU2L3t6fS97eH0ve3l9P2FjY2Vzc190b2tlbj1way5leUoxSWpvaWFXeGhZbTFsWkdsaElpd2lZU0k2SW1OcGJIWXljWFoyYlRBeGFqWjFjMnR6ZFdVMWIzZ3lkbllpZlEuQUh4bDhwUFpzanNxb3o5NS02MDRudycsXG4gICAgICB7fVxuICAgICkuYWRkVG8oX3RoaXMubGVhZmxldClcblxuICAgIGlmICghX3RoaXMuaGFzT3duUHJvcGVydHkoJ3pvb21zbGlkZXInKSB8fCBfdGhpcy56b29tc2xpZGVyKSB7XG4gICAgICBMLmNvbnRyb2wuem9vbXNsaWRlcigpLmFkZFRvKF90aGlzLmxlYWZsZXQpXG4gICAgfVxuXG4gICAgaWYgKF90aGlzLmZ1bGxzY3JlZW4pIHtcbiAgICAgIHdpbmRvdy5mdWxsc2NyZWVuID0gbmV3IEwuQ29udHJvbC5GdWxsc2NyZWVuKClcblxuICAgICAgX3RoaXMubGVhZmxldC5hZGRDb250cm9sKHdpbmRvdy5mdWxsc2NyZWVuKVxuICAgIH1cblxuICAgIEwuY29udHJvbFxuICAgICAgLmF0dHJpYnV0aW9uKHtcbiAgICAgICAgcG9zaXRpb246ICdib3R0b21sZWZ0J1xuICAgICAgfSlcbiAgICAgIC5zZXRQcmVmaXgoX3RoaXMuYXR0cmlidXRpb24pXG4gICAgICAuYWRkVG8oX3RoaXMubGVhZmxldClcblxuICAgIF90aGlzLnJlc2V0RmlsdGVycygpXG5cbiAgICByZXR1cm4gX3RoaXNcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZURvY3VtZW50Tm9kZXMob3B0aW9ucykge1xuICB2YXIgbmV3U2VjdGlvbkhUTUwgPSAnJ1xuICBuZXdTZWN0aW9uSFRNTCArPSAnPHNlY3Rpb24gaWQ9XCInICsgb3B0aW9ucy5zbHVnICsgJ1wiPidcbiAgbmV3U2VjdGlvbkhUTUwgKz0gJzxkaXYgaWQ9XCInICsgb3B0aW9ucy5zbHVnICsgJ19fbWFwXCIgY2xhc3M9XCJtYXBcIj48L2Rpdj4nXG4gIG5ld1NlY3Rpb25IVE1MICs9ICc8YXNpZGUgY2xhc3M9XCJ0b29sYm94XCI+J1xuICBuZXdTZWN0aW9uSFRNTCArPSBvcHRpb25zLnRpdGxlXG4gICAgPyAnPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQgY2xhc3M9XCJ1aSBtb2JpbGUtb25seVwiPjxkaXYgY2xhc3M9XCJoYW1idXJnZXIgbW9iaWxlLW9ubHlcIj48ZGl2IGNsYXNzPVwiaWNvblwiPiA8c3Bhbj48L3NwYW4+IDxzcGFuPjwvc3Bhbj4gPHNwYW4+PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9XCJtZW51IHRyYW5zbGF0ZVwiPjwvZGl2PjwvZGl2PidcbiAgICA6ICcnXG4gIG5ld1NlY3Rpb25IVE1MICs9ICc8ZGl2IGNsYXNzPVwiYm94XCI+J1xuICBuZXdTZWN0aW9uSFRNTCArPVxuICAgIG9wdGlvbnMudGl0bGUgfHwgb3B0aW9ucy5sb2dvIHx8IG9wdGlvbnMuZGVzY3JpcHRpb25cbiAgICAgID8gJzxoZWFkZXIgIGNsYXNzPVwidHJhbnNsYXRlXCI+IDxoMT48YSB0YXJnZXQ9XCJfYmxhbmtcIiBpZD1cImxvZ29cIj48aW1nIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9DU0lTLWlMYWIvYW10aS12aXovbWFzdGVyL2xvZ28uanBlZ1wiIGFsdD1cIkFNVEkgbG9nb1wiLz48L2E+PC9oMT4gIDxwIGNsYXNzPVwidHJhbnNsYXRlXCI+PC9wPjwvaGVhZGVyPidcbiAgICAgIDogJydcbiAgbmV3U2VjdGlvbkhUTUwgKz1cbiAgICAob3B0aW9ucy5pbnN0cnVjdGlvbnNcbiAgICAgID8gJzxwIGNsYXNzPVwidHJhbnNsYXRlXCI+JyArIG9wdGlvbnMuaW5zdHJ1Y3Rpb25zICsgJzwvcD4nXG4gICAgICA6ICcnKSArXG4gICAgJzxkaXYgaWQ9XCJjb250cm9sc1wiPjxkaXYgY2xhc3M9XCJsb2FkZXJcIj48L2Rpdj48L2Rpdj48Zm9vdGVyPjxkaXYgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj48L2Zvb3Rlcj48L2Rpdj48L2FzaWRlPidcbiAgbmV3U2VjdGlvbkhUTUwgKz0gb3B0aW9ucy50aXRsZWNhcmRjb250ZW50XG4gICAgPyAnPGJ1dHRvbiBpZD1cIicgK1xuICAgICAgb3B0aW9ucy5zbHVnICtcbiAgICAgICdfX2Fib3V0XCIgY2xhc3M9XCJhYm91dC10cmlnZ2VyIHRyYW5zbGF0ZVwiPkFCT1VUIFRISVMgTUFQPC9idXR0b24+J1xuICAgIDogJydcbiAgbmV3U2VjdGlvbkhUTUwgKz0gJzwvc2VjdGlvbj4nXG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IG5ld1NlY3Rpb25IVE1MXG5cbiAgdmFyIHRyYW5zbGF0YWJsZVN0cmluZ3NcblxuICBpZiAobGFuZykge1xuICAgIHRyYW5zbGF0YWJsZVN0cmluZ3MgPSBPYmplY3Qua2V5cyhvcHRpb25zLnRyYW5zbGF0aW9ucykuc29ydChmdW5jdGlvbihcbiAgICAgIGEsXG4gICAgICBiXG4gICAgKSB7XG4gICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aFxuICAgIH0pXG4gIH1cbiAgaWYgKG9wdGlvbnMudGl0bGVjYXJkY29udGVudCkge1xuICAgIHZhciBuZXdEaWFsb2dIVE1MID0gJydcbiAgICBuZXdEaWFsb2dIVE1MICs9ICc8ZGl2IGNsYXNzPVwiZGlhbG9nXCIgaWQ9XCInICsgb3B0aW9ucy5zbHVnICsgJ19fZGlhbG9nXCI+J1xuICAgIG5ld0RpYWxvZ0hUTUwgKz1cbiAgICAgICc8ZGl2IGNsYXNzPVwiZGlhbG9nLW92ZXJsYXlcIiB0YWJpbmRleD1cIi0xXCIgZGF0YS1hMTF5LWRpYWxvZy1oaWRlPjwvZGl2PidcbiAgICBuZXdEaWFsb2dIVE1MICs9XG4gICAgICAnPGRpYWxvZyBjbGFzcz1cImRpYWxvZy1jb250ZW50XCIgYXJpYS1sYWJlbGxlZGJ5PVwiZGlhbG9nVGl0bGVcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZGlhbG9nQ29udGVudFwiPidcbiAgICBuZXdEaWFsb2dIVE1MICs9XG4gICAgICAnPGJ1dHRvbiBkYXRhLWExMXktZGlhbG9nLWhpZGUgY2xhc3M9XCJkaWFsb2ctY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2UgdGhpcyBkaWFsb2cgd2luZG93XCI+JnRpbWVzOzwvYnV0dG9uPidcbiAgICBuZXdEaWFsb2dIVE1MICs9IG9wdGlvbnMudGl0bGVjYXJkdGl0bGVcbiAgICAgID8gJzxoMSBpZD1cImRpYWxvZ1RpdGxlXCI+JyArIG9wdGlvbnMudGl0bGVjYXJkdGl0bGUgKyAnPC9oMT4nXG4gICAgICA6ICcnXG4gICAgbmV3RGlhbG9nSFRNTCArPVxuICAgICAgJzxkaXYgaWQ9XCJkaWFsb2dDb250ZW50XCI+JyArIG9wdGlvbnMudGl0bGVjYXJkY29udGVudCArICc8L2Rpdj4nXG4gICAgbmV3RGlhbG9nSFRNTCArPSAnPC9kaWFsb2c+J1xuICAgIG5ld0RpYWxvZ0hUTUwgKz0gJzwvZGl2PidcblxuICAgIGlmIChsYW5nKSB7XG4gICAgICB0cmFuc2xhdGFibGVTdHJpbmdzLmZvckVhY2goZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKCdcXFxcYignICsgUmVnRXhwLmVzY2FwZSh0KSArICcpJywgJ2dpJylcbiAgICAgICAgbmV3RGlhbG9nSFRNTCA9IG5ld0RpYWxvZ0hUTUwucmVwbGFjZShyZSwgb3B0aW9ucy50cmFuc2xhdGlvbnNbdF0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IG5ld0RpYWxvZ0hUTUxcblxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgIHZhciBkaWFsb2dFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9wdGlvbnMuc2x1ZyArICdfX2RpYWxvZycpXG4gICAgdmFyIG1haW5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zLnNsdWcnKVxuICAgIHZhciBkaWFsb2dUcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5zbHVnICsgJ19fYWJvdXQnKVxuXG4gICAgdmFyIGRpYWxvZ0JveCA9IG5ldyBBMTF5RGlhbG9nKGRpYWxvZ0VsLCBtYWluRWwpXG4gICAgdmFyIGRpYWxvZyA9IGRpYWxvZ0JveC5kaWFsb2dcbiAgICBkaWFsb2dCb3guc2hvdygpXG4gICAgZGlhbG9nQm94Lm9uKCdoaWRlJywgZnVuY3Rpb24oZGlhbG9nRWwpIHtcbiAgICAgIGRpYWxvZ1RyaWdnZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9KVxuICAgIGRpYWxvZ0JveC5vbignc2hvdycsIGZ1bmN0aW9uKGRpYWxvZ0VsKSB7XG4gICAgICBkaWFsb2dUcmlnZ2VyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9KVxuICAgIGRpYWxvZ1RyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGRpYWxvZ0JveC5zaG93KClcbiAgICB9KVxuICB9XG5cbiAgZG9jdW1lbnQudGl0bGUgPSBvcHRpb25zLnRpdGxlICsgJyB8IENTSVMgJyArIG9wdGlvbnMucHJvZ3JhbVxuICB2YXIgbWV0YUxvY2FsZU9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFMb2NhbGVPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOmxvY2FsZScpXG4gIG1ldGFMb2NhbGVPRy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCAnZW5fVVMnKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFMb2NhbGVPRylcbiAgdmFyIG1ldGFUeXBlT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YVR5cGVPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOnR5cGUnKVxuICBtZXRhVHlwZU9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICdhcnRpY2xlJylcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhVHlwZU9HKVxuICB2YXIgbWV0YVdpZHRoT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YVdpZHRoT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzppbWFnZTp3aWR0aCcpXG4gIG1ldGFXaWR0aE9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICcyMDAwJylcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhV2lkdGhPRylcbiAgdmFyIG1ldGFIZWlnaHRPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhSGVpZ2h0T0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzppbWFnZTpoZWlnaHQnKVxuICBtZXRhSGVpZ2h0T0cuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJzEzMzMnKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFIZWlnaHRPRylcbiAgdmFyIG1ldGFUd2l0dGVyQ2FyZE9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFUd2l0dGVyQ2FyZE9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAndHdpdHRlcjpjYXJkJylcbiAgbWV0YVR3aXR0ZXJDYXJkT0cuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJ3N1bW1hcnknKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFUd2l0dGVyQ2FyZE9HKVxuICB2YXIgbWV0YVRpdGxlT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YVRpdGxlT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzp0aXRsZScpXG4gIG1ldGFUaXRsZU9HLnNldEF0dHJpYnV0ZShcbiAgICAnY29udGVudCcsXG4gICAgb3B0aW9ucy50aXRsZSArICcgfCBDU0lTICcgKyBvcHRpb25zLnByb2dyYW1cbiAgKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFUaXRsZU9HKVxuICB2YXIgbWV0YVRpdGxlVHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhVGl0bGVUd2l0dGVyLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAndHdpdHRlcjp0aXRsZScpXG4gIG1ldGFUaXRsZVR3aXR0ZXIuc2V0QXR0cmlidXRlKFxuICAgICdjb250ZW50JyxcbiAgICBvcHRpb25zLnRpdGxlICsgJyB8IENTSVMgJyArIG9wdGlvbnMucHJvZ3JhbVxuICApXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YVRpdGxlVHdpdHRlcilcbiAgdmFyIG1ldGFEZXNjcmlwdGlvbk9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFEZXNjcmlwdGlvbk9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAnb2c6ZGVzY3JpcHRpb24nKVxuICBtZXRhRGVzY3JpcHRpb25PRy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBvcHRpb25zLmRlc2NyaXB0aW9uKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFEZXNjcmlwdGlvbk9HKVxuICB2YXIgbWV0YURlc2NyaXB0aW9uVHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhRGVzY3JpcHRpb25Ud2l0dGVyLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAndHdpdHRlcjpkZXNjcmlwdGlvbicpXG4gIG1ldGFEZXNjcmlwdGlvblR3aXR0ZXIuc2V0QXR0cmlidXRlKCdjb250ZW50Jywgb3B0aW9ucy5kZXNjcmlwdGlvbilcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhRGVzY3JpcHRpb25Ud2l0dGVyKVxuICB2YXIgbWV0YUltYWdlT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YUltYWdlT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzppbWFnZScpXG4gIG1ldGFJbWFnZU9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIG9wdGlvbnMuc2NyZWVuc2hvdClcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhSW1hZ2VPRylcbiAgdmFyIG1ldGFJbWFnZVR3aXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YUltYWdlVHdpdHRlci5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ3R3aXR0ZXI6aW1hZ2UnKVxuICBtZXRhSW1hZ2VUd2l0dGVyLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIG9wdGlvbnMuc2NyZWVuc2hvdClcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhSW1hZ2VUd2l0dGVyKVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgaGVhZGVyJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgLm1lbnUnKS5pbm5lclRleHQgPVxuICAgICAgb3B0aW9ucy50aXRsZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyBoZWFkZXIgaDEnKS5pbm5lckhUTUwgKz1cbiAgICAgIG9wdGlvbnMudGl0bGVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyMnICsgb3B0aW9ucy5zbHVnICsgJyBoZWFkZXIgYSdcbiAgICApLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IG9wdGlvbnMubG9nbyA/ICd1cmwoJyArIG9wdGlvbnMubG9nbyArICcpJyA6ICcnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjJyArIG9wdGlvbnMuc2x1ZyArICcgaGVhZGVyIGEnXG4gICAgKS5ocmVmID0gb3B0aW9ucy53ZWJzaXRlID8gb3B0aW9ucy53ZWJzaXRlIDogJydcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyMnICsgb3B0aW9ucy5zbHVnICsgJyBoZWFkZXIgcCdcbiAgICApLmlubmVyVGV4dCA9IG9wdGlvbnMuZGVzY3JpcHRpb24gPyBvcHRpb25zLmRlc2NyaXB0aW9uIDogJydcbiAgfVxufVxuIiwiaW1wb3J0IEN1c3RvbU1hcCBmcm9tICcuL0N1c3RvbU1hcC5qcydcbmltcG9ydCBtYWtlTGF5ZXJzIGZyb20gJy4vbWFrZUxheWVycy5qcydcbmltcG9ydCB7IGNvbnZlcnRUeXBlIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBtYXBXaWRnZXRzVG9TdGF0ZShvcHRpb25zLCB3aWRnZXRDb250ZW50KSB7XG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgLm1hcCcpXG5cbiAgdmFyIG1hcCA9IG5ldyBDdXN0b21NYXAoY29udGFpbmVyLCBvcHRpb25zKS5yZW5kZXIoKVxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHRhYmxlcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMpLmZpbHRlcihmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gay50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3RhYmxlJykgPiAtMVxuICAgIH0pXG5cbiAgICBQcm9taXNlLmFsbChcbiAgICAgIHRhYmxlcy5tYXAoZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFxuICAgICAgICAgICdodHRwczovL2NzaXMuY2FydG8uY29tL2FwaS92Mi9zcWw/YXBpX2tleT0nICtcbiAgICAgICAgICAgIG1hcC5hcGlrZXkgK1xuICAgICAgICAgICAgJyZmb3JtYXQ9Z2VvanNvbiZxPVNFTEVDVCUyMColMjBGUk9NJTIwJyArXG4gICAgICAgICAgICBvcHRpb25zW3RhYmxlXVxuICAgICAgICApXG4gICAgICB9KVxuICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlcykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXG4gICAgICAgICAgcmVzcG9uc2VzLm1hcChmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICAgIC50aGVuKGZ1bmN0aW9uKGpzb25zKSB7XG4gICAgICAgIHZhciBqc29uID0ganNvbnMucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBhLmZlYXR1cmVzLmNvbmNhdChiLmZlYXR1cmVzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB2YXIgY29sb3JLZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICAgICAgICByZXR1cm4gdy50eXBlID09PSAnY29sb3InXG4gICAgICAgIH0pXG4gICAgICAgIG1hcC5qc29uID0gW2pzb25dXG5cbiAgICAgICAgaWYgKGNvbG9yS2V5V2lkZ2V0KSB7XG4gICAgICAgICAgbWFwLmpzb24gPSBbXVxuICAgICAgICAgIHZhciBmZWF0dXJlR3JvdXBzID0ganNvbi5mZWF0dXJlcy5ncm91cEJ5KFxuICAgICAgICAgICAgY29sb3JLZXlXaWRnZXQuZmllbGQsXG4gICAgICAgICAgICAncHJvcGVydGllcydcbiAgICAgICAgICApXG4gICAgICAgICAgT2JqZWN0LmtleXMoZmVhdHVyZUdyb3VwcylcbiAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZlYXR1cmVHcm91cHNbYl1bMF0ucHJvcGVydGllc1tcbiAgICAgICAgICAgICAgICBjb2xvcktleVdpZGdldC5maWVsZFxuICAgICAgICAgICAgICBdLmxvY2FsZUNvbXBhcmUoXG4gICAgICAgICAgICAgICAgZmVhdHVyZUdyb3Vwc1thXVswXS5wcm9wZXJ0aWVzW2NvbG9yS2V5V2lkZ2V0LmZpZWxkXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgICAgICAgIG1hcC5qc29uLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVHcm91cHNbZmVhdHVyZV1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMud2lkZ2V0cy5sZW5ndGgpIHtcbiAgICAgICAgICBtYWtlTGF5ZXJzKG1hcClcbiAgICAgICAgICB2YXIgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpXG4gICAgICAgICAgYm94LmlubmVySFRNTCA9ICcnXG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluaXRpYWxpemVkID0gMFxuXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHcsIHgpIHtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnIycgKyBvcHRpb25zLnNsdWcgKyAnIC53aWRnZXQuJyArIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZFxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNldC1idG4nKSkge1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwicmVzZXQtYnRuXCI+Q2xlYXIgQ2xhaW1hbnRzPC9idXR0b24+J1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgY1xuICAgICAgICAgIGlmIChlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpICYmIHdpZGdldENvbnRlbnRbeF0ub3B0aW9ucykge1xuICAgICAgICAgICAgYyA9IG5ldyBDaG9pY2VzKFxuICAgICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLFxuICAgICAgICAgICAgICB3aWRnZXRDb250ZW50W3hdLm9wdGlvbnNcbiAgICAgICAgICAgIClcblxuICAgICAgICAgICAgdmFyIHJlc2V0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXQtYnRuJylcblxuICAgICAgICAgICAgcmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgYy5yZW1vdmVBY3RpdmVJdGVtcygpXG4gICAgICAgICAgICAgIGlmIChtYXAuZ3JvdXBzLmxlbmd0aCkgbWFwLnJlbW92ZUdyb3VwcygpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkXj1cXCdzZWFyY2hcXCddJykpIHtcbiAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJyNyZXNldEJ1dHRvbicpXG4gICAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZVJlc2V0KGVsZW1lbnQsIG1hcCwgeClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVzZXQgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykpXG4gICAgICAgICAgdmFyIHNlbGVjdHMgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpXG4gICAgICAgICAgdmFyIGNoZWNrcyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XFwnY2hlY2tib3hcXCddJylcbiAgICAgICAgICApXG4gICAgICAgICAgdmFyIHNlYXJjaCA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ106bm90KC5jaG9pY2VzX19pbnB1dCknKVxuICAgICAgICAgIClcbiAgICAgICAgICB2YXIgdG9nZ2xlID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cXCdyYWRpb1xcJ10nKVxuICAgICAgICAgIClcblxuICAgICAgICAgIHZhciBpbnB1dHMgPSBzZWxlY3RzXG4gICAgICAgICAgICAuY29uY2F0KGNoZWNrcylcbiAgICAgICAgICAgIC5jb25jYXQoc2VhcmNoKVxuICAgICAgICAgICAgLmNvbmNhdCh0b2dnbGUpXG4gICAgICAgICAgICAuY29uY2F0KHJlc2V0KVxuXG4gICAgICAgICAgaWYgKCFpbnB1dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIWluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgIG1ha2VMYXllcnMobWFwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5pdGlhbGl6ZWQrK1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjb3VudCA9IGlucHV0cy5sZW5ndGhcbiAgICAgICAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShcbiAgICAgICAgICAgICAgICAgIG1hcCxcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICBvcHRpb25zLndpZGdldHMsXG4gICAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgICAgICArK2luaXRpYWxpemVkXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgbWFwLFxuICAgICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMud2lkZ2V0cyxcbiAgICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICAgICsraW5pdGlhbGl6ZWRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgnY3JlYXRlRXZlbnQnIGluIGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpXG4gICAgICAgICAgICAgIGV2dC5pbml0RXZlbnQoJ2NoYW5nZScsIGZhbHNlLCB0cnVlKVxuICAgICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlucHV0LmZpcmVFdmVudCgnb25jaGFuZ2UnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3Lm1hcF9pZCA9IG1hcC5pZFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKG1hcC50cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICB2YXIgdHJhbnNsYXRhYmxlTm9kZXMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYW5zbGF0ZScpXG4gICAgICAgICAgKVxuICAgICAgICAgIHZhciB0cmFuc2xhdGFibGVTdHJpbmdzID0gT2JqZWN0LmtleXMobWFwLnRyYW5zbGF0aW9ucykuc29ydChmdW5jdGlvbihcbiAgICAgICAgICAgIGEsXG4gICAgICAgICAgICBiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdHJhbnNsYXRhYmxlTm9kZXMuZm9yRWFjaChmdW5jdGlvbihlbCwgaSkge1xuICAgICAgICAgICAgdHJhbnNsYXRhYmxlU3RyaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1hcC50cmFuc2xhdGlvbnNbdF0pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoJ1xcXFxiKCcgKyBSZWdFeHAuZXNjYXBlKHQpICsgJyknLCAnZ2knKVxuICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IGVsLmlubmVySFRNTC5yZXBsYWNlKHJlLCBtYXAudHJhbnNsYXRpb25zW3RdKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKG1hcClcbiAgICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJlc2V0KGVsZW1lbnQsIG1hcCwgeCkge1xuICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ10nKS52YWx1ZSA9ICcnXG4gIGlmIChtYXAuZ3JvdXBzLmxlbmd0aCkgbWFwLnJlbW92ZUdyb3VwcygpXG5cbiAgbWFwLmZpbHRlcnNbeF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbWFrZUxheWVycyhtYXApXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZShtYXAsIGVsZW1lbnQsIHdpZGdldHMsIHgsIGNvdW50LCBpbml0aWFsaXplZCkge1xuICB2YXIga2V5bGVzc1dpZGdldHMgPSBbJ3RvZ2dsZScsICdzZWFyY2gnXVxuICB2YXIgb3B0aW9ucyA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JylcbiAgICA/IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5vcHRpb25zKVxuICAgIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVxcJ3RleHRcXCddJylcbiAgICAgID8gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ10nKSlcbiAgICAgIDogQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpXG4gIHZhciBzZWxlY3Rpb25zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKVxuICAgID8gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLm9wdGlvbnMpXG4gICAgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ10nKVxuICAgICAgPyBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cXCd0ZXh0XFwnXScpKVxuICAgICAgOiBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6Y2hlY2tlZCcpKVxuICB2YXIgcG9zc2libGVDaGVja3MgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSkubWFwKFxuICAgIGZ1bmN0aW9uKG8pIHtcbiAgICAgIHJldHVybiBvLm5hbWUudG9Mb3dlckNhc2UoKVxuICAgIH1cbiAgKVxuXG4gIHZhciBwb3NzaWJsZU9wdGlvbnMsIHBvc3NpYmxlUXVlcmllc1xuICBpZiAoa2V5bGVzc1dpZGdldHMuaW5kZXhPZih3aWRnZXRzW3hdLmlucHV0KSA8IDApIHtcbiAgICBwb3NzaWJsZU9wdGlvbnMgPSB3aWRnZXRzW3hdLmtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGtleS52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgfSlcblxuICAgIHBvc3NpYmxlUXVlcmllcyA9IHBvc3NpYmxlQ2hlY2tzLmNvbmNhdChwb3NzaWJsZU9wdGlvbnMpXG4gIH1cblxuICB2YXIgcXVlcnkgPSBBcnJheS5mcm9tKHNlbGVjdGlvbnMpLm1hcChmdW5jdGlvbihvKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cXCdjaGVja2JveFxcJ10nKVxuICAgICAgPyBvLm5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgOiBvLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgfSlcblxuICBtYXAuZmlsdGVyc1t3aWRnZXRzW3hdLmlkXSA9XG4gICAgd2lkZ2V0c1t4XS5pbnB1dCA9PT0gJ3RvZ2dsZSdcbiAgICAgID8gZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICB2YXIgYm9vbCA9IHRydWVcblxuICAgICAgICBpZiAoZmVhdHVyZS5wcm9wZXJ0aWVzLnRvZ2dsZSkge1xuICAgICAgICAgIGJvb2wgPSBjb252ZXJ0VHlwZShxdWVyeVswXSkgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib29sID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvb2xcbiAgICAgIH1cbiAgICAgIDogd2lkZ2V0c1t4XS5maWVsZCA9PT0gJ2FsbCdcbiAgICAgICAgPyBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgICAgdmFyIGJvb2wgPSB0cnVlXG4gICAgICAgICAgdmFyIHdpdGhEaWFjcml0aWNzID0gT2JqZWN0LnZhbHVlcyhmZWF0dXJlLnByb3BlcnRpZXMpXG4gICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgdmFyIHdpdGhvdXREaWFjcml0aWNzID0gT2JqZWN0LnZhbHVlcyhmZWF0dXJlLnByb3BlcnRpZXMpXG4gICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAubGF0aW5pc2UoKVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgd2l0aERpYWNyaXRpY3MuaW5kZXhPZihxdWVyeVswXSkgPCAwICYmXG4gICAgICAgICAgICAgIHdpdGhvdXREaWFjcml0aWNzLmluZGV4T2YocXVlcnlbMF0pIDwgMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYm9vbCA9IGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGJvb2xcbiAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uKGZlYXR1cmUsIGxheWVycykge1xuICAgICAgICAgIHZhciBib29sID0gdHJ1ZVxuICAgICAgICAgIHZhciBmaWVsZCA9IHdpZGdldHNbeF0uZ3JvdXBpbmdcbiAgICAgICAgICAgID8gd2lkZ2V0c1t4XS5ncm91cGluZ1xuICAgICAgICAgICAgOiB3aWRnZXRzW3hdLmZpZWxkXG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwb3NzaWJsZVF1ZXJpZXMuaW5kZXhPZihmZWF0dXJlLnByb3BlcnRpZXNbZmllbGRdLnRvTG93ZXJDYXNlKCkpID5cbiAgICAgICAgICAgICAgICAtMSAmJlxuICAgICAgICAgICAgICBxdWVyeS5pbmRleE9mKGZlYXR1cmUucHJvcGVydGllc1tmaWVsZF0udG9Mb3dlckNhc2UoKSkgPCAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBib29sID0gZmFsc2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYm9vbFxuICAgICAgICB9XG5cbiAgaWYgKGluaXRpYWxpemVkID49IGNvdW50KSBtYXAucmVtb3ZlR3JvdXBzKClcbiAgaWYgKHdpZGdldHMubGVuZ3RoID49IHggKyAxICYmIGluaXRpYWxpemVkID49IGNvdW50KSBtYWtlTGF5ZXJzKG1hcClcbn1cbiIsImltcG9ydCBzdHlsZUtleSBmcm9tICcuL3N0eWxlS2V5LmpzJ1xuaW1wb3J0IG1hcFdpZGdldHNUb1N0YXRlIGZyb20gJy4vbWFwV2lkZ2V0c1RvU3RhdGUuanMnXG5pbXBvcnQgeyBjYXBpdGFsaXplLCBtYWtlRHJvcGRvd25PcHRpb25zIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuaW1wb3J0IHsgcGFyc2VMZWdlbmREYXRhIH0gZnJvbSAnLi9wYXJzZXJzLmpzJ1xud2luZG93LnN0eWxlS2V5ID0gc3R5bGVLZXlcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWFrZVdpZGdldHMoanNvbnMsIG9wdGlvbnMsIGJveENvbnRlbnQpIHtcbiAgdmFyIHdpZGdldENvbnRlbnQgPSBbXVxuICBvcHRpb25zLndpZGdldHMuZm9yRWFjaChmdW5jdGlvbih3LCB4KSB7XG4gICAgaWYgKCF3Lmhhc093blByb3BlcnR5KCdpZCcpKSB3LmlkID0geFxuICAgIHZhciBsZWdlbmREYXRhID0gdy5yZWZlcmVuY2VcbiAgICAgID8gcGFyc2VMZWdlbmREYXRhKG9wdGlvbnMsIGpzb25zW3hdLmZlZWQuZW50cnksIHcudHlwZSlcbiAgICAgIDogdy5rZXlzXG4gICAgb3B0aW9ucy53aWRnZXRzW3hdLmtleXMgPSBsZWdlbmREYXRhXG4gICAgd2lkZ2V0Q29udGVudC5wdXNoKGZvcm1hdFdpZGdldHMob3B0aW9ucywgeCkpXG4gICAgYm94Q29udGVudCArPVxuICAgICAgJzxzZWN0aW9uIGNsYXNzPVwid2lkZ2V0ICcgK1xuICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICdcIj48aDMgY2xhc3M9XCJ0cmFuc2xhdGVcIj4nICtcbiAgICAgIHdpZGdldENvbnRlbnRbeF0udGl0bGUgK1xuICAgICAgJzwvaDM+J1xuICAgIGJveENvbnRlbnQgKz0gd2lkZ2V0Q29udGVudFt4XS5ub2Rlc1xuICAgIGJveENvbnRlbnQgKz0gJzwvc2VjdGlvbj4nXG4gICAgdmFyIGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAjY29udHJvbHMnKVxuICAgIGJveC5pbm5lckhUTUwgPSBib3hDb250ZW50XG4gICAgdmFyIGxhYmVsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAuaXRlbVRleHQnKVxuICAgIEFycmF5LmZyb20obGFiZWxUZXh0KS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW1UZXh0KSB7XG4gICAgICB2YXIgaGVpZ2h0ID0gaXRlbVRleHQub2Zmc2V0SGVpZ2h0XG4gICAgICB2YXIgZm9udFNpemUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpdGVtVGV4dClbJ2ZvbnQtc2l6ZSddXG4gICAgICB2YXIgb2Zmc2V0ID0gaGVpZ2h0IC8gcGFyc2VJbnQoZm9udFNpemUucmVwbGFjZSgncHgnLCAnJyksIDEwKVxuICAgICAgaXRlbVRleHQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoJyArIG9mZnNldCAqIDEwICsgJyUpJ1xuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuIGF3YWl0IG1hcFdpZGdldHNUb1N0YXRlKG9wdGlvbnMsIHdpZGdldENvbnRlbnQpXG59XG5cbmZ1bmN0aW9uIGZvcm1hdFdpZGdldHMob3B0aW9ucywgeCkge1xuICB2YXIgd2lkZ2V0Tm9kZXMgPSAnJ1xuICB2YXIgZHJvcGRvd25PcHRpb25zXG4gIGNvbnNvbGUubG9nKG9wdGlvbnMsIHgpXG4gIHN3aXRjaCAob3B0aW9ucy53aWRnZXRzW3hdLmlucHV0KSB7XG4gIGNhc2UgJ3RvZ2dsZSc6XG4gICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgJzxsYWJlbCBmb3I9XCJ0b2dnbGVfJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBjbGFzcz1cInRyYW5zbGF0ZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBpZD1cInRvZ2dsZV8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiICB2YWx1ZT1cIjFcIiBjaGVja2VkPlNob3c8L2xhYmVsPidcbiAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAnPGxhYmVsIGZvcj1cIiR0b2dnbGVfJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBjbGFzcz1cInRyYW5zbGF0ZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBpZD1cInRvZ2dsZV8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIHZhbHVlPVwiMFwiID5IaWRlPC9sYWJlbD4nXG4gICAgYnJlYWtcblxuICBjYXNlICdzZWFyY2gnOlxuICAgIHdpZGdldE5vZGVzICs9XG4gICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaF8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIHBsYWNlaG9sZGVyPVwiJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5pbnN0cnVjdGlvbnMgK1xuICAgICAgICAnXCIgc2l6ZT1cIjEwXCIgLz4nXG4gICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwicmVzZXRCdXR0b25cIiBjbGFzcz1cInRyYW5zbGF0ZVwiPlJlc2V0PC9idXR0b24+J1xuICAgIGJyZWFrXG5cbiAgY2FzZSAnZHJvcGRvd24nOlxuICAgIHdpZGdldE5vZGVzICs9XG4gICAgICAgICc8c2VsZWN0IGlkPVwiZHJvcGRvd25fJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBwbGFjZWhvbGRlcj1cIicgK1xuICAgICAgICAnU2VhcmNoIGFuZCBhZGQgdXAgdG8gNiBDbGFpbWFudHMnICtcbiAgICAgICAgJ1wiIG11bHRpcGxlPVwiXCI+PC9zZWxlY3Q+J1xuICAgIGRyb3Bkb3duT3B0aW9ucyA9IG1ha2VEcm9wZG93bk9wdGlvbnMob3B0aW9ucywgeClcbiAgICBicmVha1xuXG4gIGNhc2UgJ2NoZWNrYm94JzpcbiAgICB3aWRnZXROb2RlcyArPSAnPHVsPidcbiAgICB2YXIga2V5U3R5bGVcbiAgICB2YXIgbGVnZW5kSXRlbXMgPSBvcHRpb25zLndpZGdldHNbeF0uZ3JvdXBpbmdcbiAgICAgID8gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZ3JvdXBCeSgnZ3JvdXAnKVxuICAgICAgOiBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5ncm91cEJ5KCdsYWJlbCcpXG4gICAgT2JqZWN0LmtleXMobGVnZW5kSXRlbXMpLmZvckVhY2goZnVuY3Rpb24oZ3JvdXAsIGkpIHtcbiAgICAgIHN3aXRjaCAob3B0aW9ucy53aWRnZXRzW3hdLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgICB2YXIgZm9ybXMgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5tYXAoZnVuY3Rpb24oZikge1xuICAgICAgICAgIHJldHVybiBmLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgZ3JvdXA6IGxlZ2VuZEl0ZW1zW2dyb3VwXSxcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICBmb3JtczogZm9ybXMsXG4gICAgICAgICAgbWFwOiBvcHRpb25zXG4gICAgICAgIH1cbiAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICBtYXA6IG9wdGlvbnMsXG4gICAgICAgICAgZ3JvdXA6IGxlZ2VuZEl0ZW1zW2dyb3VwXVxuICAgICAgICB9XG4gICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAgICc8bGk+PGxhYmVsIGZvcj1cIicgK1xuICAgICAgICAgIGdyb3VwICtcbiAgICAgICAgICAnXCI+PGlucHV0IGNsYXNzPVwid2lkZ2V0ICcgK1xuICAgICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5pbnB1dCArXG4gICAgICAgICAgJ1wiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCInICtcbiAgICAgICAgICAob3B0aW9ucy53aWRnZXRzW3hdLmdyb3VwaW5nID8gZ3JvdXAgOiBsZWdlbmRJdGVtc1tncm91cF1bMF0udmFsdWUpICtcbiAgICAgICAgICAnXCIgaWQ9XCInICtcbiAgICAgICAgICBncm91cCArXG4gICAgICAgICAgJ1wiICcgK1xuICAgICAgICAgIChsZWdlbmRJdGVtc1tncm91cF1bMF0uc2VsZWN0ZWQgPyAnY2hlY2tlZCcgOiAnJykgK1xuICAgICAgICAgICcgPjxzcGFuIGNsYXNzPVwiJyArXG4gICAgICAgICAga2V5U3R5bGUuY2xhc3MgK1xuICAgICAgICAgICdLZXlcIiAnICtcbiAgICAgICAgICAnc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnJyArXG4gICAgICAgICAga2V5U3R5bGUuc3ZnICtcbiAgICAgICAgICAnXCIpPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW1UZXh0XCI+JyArXG4gICAgICAgICAgY2FwaXRhbGl6ZShncm91cCkgK1xuICAgICAgICAgICc8L3NwYW4+PC9sYWJlbD48L2xpPidcbiAgICB9KVxuICAgIHdpZGdldE5vZGVzICs9ICc8L3VsPidcbiAgICBicmVha1xuXG4gIGRlZmF1bHQ6XG4gICAgd2lkZ2V0Tm9kZXMgKz0gJzx1bD4nXG4gICAgdmFyIGtleVN0eWxlXG4gICAgdmFyIGxlZ2VuZEl0ZW1zID0gb3B0aW9ucy53aWRnZXRzW3hdLmdyb3VwaW5nXG4gICAgICA/IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLmdyb3VwQnkoJ2dyb3VwJylcbiAgICAgIDogb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZ3JvdXBCeSgnbGFiZWwnKVxuICAgIE9iamVjdC5rZXlzKGxlZ2VuZEl0ZW1zKS5mb3JFYWNoKGZ1bmN0aW9uKGdyb3VwLCBpKSB7XG4gICAgICBzd2l0Y2ggKG9wdGlvbnMud2lkZ2V0c1t4XS50eXBlKSB7XG4gICAgICBjYXNlICdmb3JtJzpcbiAgICAgICAgdmFyIGZvcm1zID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMubWFwKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICByZXR1cm4gZi52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgIGdyb3VwOiBsZWdlbmRJdGVtc1tncm91cF0sXG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgZm9ybXM6IGZvcm1zLFxuICAgICAgICAgIG1hcDogb3B0aW9uc1xuICAgICAgICB9XG4gICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgbWFwOiBvcHRpb25zLFxuICAgICAgICAgIGdyb3VwOiBsZWdlbmRJdGVtc1tncm91cF1cbiAgICAgICAgfVxuICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgICAnPGxpPjxzcGFuIGNsYXNzPVwiJyArXG4gICAgICAgICAga2V5U3R5bGUuY2xhc3MgK1xuICAgICAgICAgICdLZXlcIiAnICtcbiAgICAgICAgICAnc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnJyArXG4gICAgICAgICAga2V5U3R5bGUuc3ZnICtcbiAgICAgICAgICAnXCIpPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW1UZXh0XCI+JyArXG4gICAgICAgICAgY2FwaXRhbGl6ZShncm91cCkgK1xuICAgICAgICAgICc8L3NwYW4+PC9saT4nXG4gICAgfSlcbiAgICB3aWRnZXROb2RlcyArPSAnPC91bD4nXG4gICAgYnJlYWtcbiAgfVxuXG4gIHZhciB3aWRnZXRUaXRsZSA9XG4gICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkID09PSAnYWxsJ1xuICAgICAgPyAnU2VhcmNoJ1xuICAgICAgOiBvcHRpb25zLndpZGdldHNbeF0uZmllbGQucmVwbGFjZSgvXy9nLCAnICcpXG4gIHJldHVybiB7XG4gICAgbm9kZXM6IHdpZGdldE5vZGVzLFxuICAgIHRpdGxlOiB3aWRnZXRUaXRsZSxcbiAgICBvcHRpb25zOiBkcm9wZG93bk9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgcGFyc2VNZXRhRGF0YSwgcGFyc2VXaWRnZXREYXRhIH0gZnJvbSAnLi9wYXJzZXJzLmpzJ1xuaW1wb3J0IG1ha2VXaWRnZXRzIGZyb20gJy4vbWFrZVdpZGdldHMuanMnXG5pbXBvcnQgbWFrZURvY3VtZW50Tm9kZXMgZnJvbSAnLi9tYWtlRG9jdW1lbnROb2Rlcy5qcydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaW5pdFdpdGhTcHJlYWRzaGVldChcbiAgZGF0YVVSTCxcbiAgb3B0aW9ucyxcbiAgdHJhbnNsYXRpb25zXG4pIHtcbiAgdmFyIG1hcFxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZGF0YVVSTCArIG9wdGlvbnMuZ29vZ2xlU2hlZXQgKyAnLycgKyAyICsgJy9wdWJsaWMvdmFsdWVzP2FsdD1qc29uJ1xuICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIHZhciBtZXRhRGF0YSA9IHBhcnNlTWV0YURhdGEoanNvbi5mZWVkLmVudHJ5KVxuICAgICAgICB2YXIgd2lkZ2V0cyA9IHBhcnNlV2lkZ2V0RGF0YShtZXRhRGF0YSlcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB7fVxuICAgICAgICBPYmplY3Qua2V5cyhtZXRhRGF0YSkuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgcHJvcGVydGllc1tkYXRhXSA9IG1ldGFEYXRhW2RhdGFdXG4gICAgICAgIH0pXG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIHByb3BlcnRpZXNbZGF0YV0gPSBvcHRpb25zW2RhdGFdXG4gICAgICAgIH0pXG5cbiAgICAgICAgdmFyIHR3b0RfcHJvcGVyaXRlcyA9IFtcbiAgICAgICAgICB7IG5hbWU6ICdjZW50ZXInLCBkZWZhdWx0OiBbMCwgMF0gfSxcbiAgICAgICAgICB7IG5hbWU6ICdpY29uc2l6ZScsIGRlZmF1bHQ6IFsyMCwgMjBdIH0sXG4gICAgICAgICAgeyBuYW1lOiAnaWNvbmFuY2hvcicsIGRlZmF1bHQ6IFs1LCA1XSB9LFxuICAgICAgICAgIHsgbmFtZTogJ3N3Ym91bmRzJywgZGVmYXVsdDogWy05MCwgLTE4MF0gfSxcbiAgICAgICAgICB7IG5hbWU6ICduZWJvdW5kcycsIGRlZmF1bHQ6IFs5MCwgMTgwXSB9XG4gICAgICAgIF1cblxuICAgICAgICB0d29EX3Byb3Blcml0ZXMuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgICAgIHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV0gPVxuICAgICAgICAgICAgdHlwZW9mIHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV0gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gcHJvcGVydGllc1twcm9wZXJ0eS5uYW1lXS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHYsIDEwKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV1cbiAgICAgICAgICAgICAgICA/IHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV1cbiAgICAgICAgICAgICAgICA6IHByb3BlcnR5LmRlZmF1bHRcbiAgICAgICAgfSlcbiAgICAgICAgcHJvcGVydGllcy5zbHVnID0gcHJvcGVydGllcy5tYXBJRC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJy0nKVxuICAgICAgICBwcm9wZXJ0aWVzLnRyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9uc1xuICAgICAgICBwcm9wZXJ0aWVzLndpZGdldHMgPSB3aWRnZXRzXG4gICAgICAgIG1ha2VEb2N1bWVudE5vZGVzKHByb3BlcnRpZXMpXG4gICAgICAgIHZhciByZWZlcmVuY2VTaGVldHMgPSB3aWRnZXRzLmZpbHRlcihmdW5jdGlvbih3KSB7XG4gICAgICAgICAgcmV0dXJuIHcucmVmZXJlbmNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVNoZWV0cykge1xuICAgICAgICAgIHZhciBib3hDb250ZW50ID0gJydcbiAgICAgICAgICB2YXIgcmVmZXJlbmNlU2hlZXRVUkxTID0gd2lkZ2V0c1xuICAgICAgICAgICAgLm1hcChmdW5jdGlvbih3KSB7XG4gICAgICAgICAgICAgIGlmICh3LnJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICBkYXRhVVJMICtcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZ29vZ2xlU2hlZXQgK1xuICAgICAgICAgICAgICAgICAgJy8nICtcbiAgICAgICAgICAgICAgICAgIHcucmVmZXJlbmNlICtcbiAgICAgICAgICAgICAgICAgICcvcHVibGljL3ZhbHVlcz9hbHQ9anNvbidcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKHUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICByZWZlcmVuY2VTaGVldFVSTFMubWFwKGZ1bmN0aW9uKHVybCkge1xuICAgICAgICAgICAgICByZXR1cm4gZmV0Y2godXJsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlcy5tYXAoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgZnVuY3Rpb24oanNvbnMpIHtcbiAgICAgICAgICAgICAgbWFwID0gYXdhaXQgbWFrZVdpZGdldHMoanNvbnMsIHByb3BlcnRpZXMsIGJveENvbnRlbnQpXG5cbiAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuZm9vdGVyICYmIHByb3BlcnRpZXMuZm9vdGVyLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIHZhciBmb290ZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICAgICAgICAgICAgICBmb290ZXJOb2RlLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmZvb3RlciArICcgIDxkaXYgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj4nXG4gICAgICAgICAgICAgICAgdmFyIHBlblVsdGltYXRlTm9kZSA9XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnIycgKyBwcm9wZXJ0aWVzLnNsdWcgKyAnICNjb250cm9scydcbiAgICAgICAgICAgICAgICAgICkgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9wZXJ0aWVzLnNsdWcgKyAnaGVhZGVyJylcbiAgICAgICAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICBmb290ZXJOb2RlLFxuICAgICAgICAgICAgICAgICAgcGVuVWx0aW1hdGVOb2RlLm5leHRTaWJsaW5nXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZShtYXApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBtYXAgPSBuZXcgQ3VzdG9tTWFwKGNvbnRhaW5lciwgb3B0aW9ucykucmVuZGVyKClcbiAgICAgICAgICBtYWtlTGF5ZXJzKG1hcClcbiAgICAgICAgICB2YXIgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcGVydGllcy5mb290ZXIgJiYgcHJvcGVydGllcy5mb290ZXIudHJpbSgpKSB7XG4gICAgICAgICAgdmFyIGZvb3Rlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgICAgICAgIGZvb3Rlck5vZGUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIHByb3BlcnRpZXMuZm9vdGVyICsgJyAgPGRpdiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PidcbiAgICAgICAgICB2YXIgcGVuVWx0aW1hdGVOb2RlID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgcHJvcGVydGllcy5zbHVnICsgJyAjY29udHJvbHMnKSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9wZXJ0aWVzLnNsdWcgKyAnaGVhZGVyJylcbiAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICBmb290ZXJOb2RlLFxuICAgICAgICAgICAgcGVuVWx0aW1hdGVOb2RlLm5leHRTaWJsaW5nXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9KVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS00IS4vbWFpbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtNCEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS00IS4vbWFpbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiaW1wb3J0IG1ha2VEb2N1bWVudE5vZGVzIGZyb20gJy4vbWFrZURvY3VtZW50Tm9kZXMuanMnXG5pbXBvcnQgbWFrZUxheWVycyBmcm9tICcuL21ha2VMYXllcnMuanMnXG5pbXBvcnQgbWFrZVdpZGdldHMgZnJvbSAnLi9tYWtlV2lkZ2V0cy5qcydcbmltcG9ydCBDdXN0b21NYXAgZnJvbSAnLi9DdXN0b21NYXAuanMnXG53aW5kb3cubWFrZUxheWVycyA9IG1ha2VMYXllcnNcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGluaXRXaXRob3V0U3ByZWFkc2hlZXQob3B0aW9ucywgdHJhbnNsYXRpb25zKSB7XG4gIHZhciB0d29EX3Byb3Blcml0ZXMgPSBbXG4gICAgeyBuYW1lOiAnY2VudGVyJywgZGVmYXVsdDogWzAsIDBdIH0sXG4gICAgeyBuYW1lOiAnaWNvbnNpemUnLCBkZWZhdWx0OiBbMjAsIDIwXSB9LFxuICAgIHsgbmFtZTogJ2ljb25hbmNob3InLCBkZWZhdWx0OiBbNSwgNV0gfSxcbiAgICB7IG5hbWU6ICdzd2JvdW5kcycsIGRlZmF1bHQ6IFstOTAsIC0xODBdIH0sXG4gICAgeyBuYW1lOiAnbmVib3VuZHMnLCBkZWZhdWx0OiBbOTAsIDE4MF0gfVxuICBdXG5cbiAgdHdvRF9wcm9wZXJpdGVzLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICBvcHRpb25zW3Byb3BlcnR5Lm5hbWVdID1cbiAgICAgIHR5cGVvZiBvcHRpb25zW3Byb3BlcnR5Lm5hbWVdID09PSAnc3RyaW5nJ1xuICAgICAgICA/IG9wdGlvbnNbcHJvcGVydHkubmFtZV0uc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBwYXJzZUludCh2LCAxMClcbiAgICAgICAgfSlcbiAgICAgICAgOiBvcHRpb25zW3Byb3BlcnR5Lm5hbWVdXG4gICAgICAgICAgPyBvcHRpb25zW3Byb3BlcnR5Lm5hbWVdXG4gICAgICAgICAgOiBwcm9wZXJ0eS5kZWZhdWx0XG4gIH0pXG5cbiAgb3B0aW9ucy5zbHVnID0gb3B0aW9ucy5tYXBJRC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJy0nKVxuICBvcHRpb25zLnRyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9uc1xuICBtYWtlRG9jdW1lbnROb2RlcyhvcHRpb25zKVxuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnX19tYXAubWFwJylcblxuICBpZiAob3B0aW9ucy5mb3JtYXRUb29sYm94KSB7XG4gICAgdmFyIG1hcCA9IG5ldyBDdXN0b21NYXAoY29udGFpbmVyLCBvcHRpb25zKS5yZW5kZXIoKVxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJldHVybiBmZXRjaChcbiAgICAgICAgJ2h0dHBzOi8vY3Npcy5jYXJ0by5jb20vYXBpL3YyL3NxbD9hcGlfa2V5PScgK1xuICAgICAgICAgIG1hcC5hcGlrZXkgK1xuICAgICAgICAgICcmZm9ybWF0PWdlb2pzb24mcT1TRUxFQ1QlMjAqJTIwRlJPTSUyMCcgK1xuICAgICAgICAgIG1hcC50YWJsZVxuICAgICAgKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgICBtYXAuanNvbiA9IFtqc29uXVxuICAgICAgICAgIHZhciBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgI2NvbnRyb2xzJylcbiAgICAgICAgICBtYXAuZm9ybWF0dG9vbGJveChib3gpXG4gICAgICAgICAgbWFrZUxheWVycyhtYXApXG4gICAgICAgICAgcmVzb2x2ZShtYXApXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZXR1cm4gZmV0Y2goXG4gICAgICAgICdodHRwczovL2NzaXMuY2FydG8uY29tL2FwaS92Mi9zcWw/YXBpX2tleT0nICtcbiAgICAgICAgICAob3B0aW9ucy5hcGlrZXkgfHwgb3B0aW9ucy5hcGlLZXkgfHwgb3B0aW9uc1snYXBpIGtleSddKSArXG4gICAgICAgICAgJyZmb3JtYXQ9Z2VvanNvbiZxPVNFTEVDVCUyMColMjBGUk9NJTIwJyArXG4gICAgICAgICAgb3B0aW9ucy50YWJsZVxuICAgICAgKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGFzeW5jIGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgICBvcHRpb25zLmpzb24gPSBbanNvbl1cbiAgICAgICAgICB2YXIgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpXG4gICAgICAgICAgdmFyIGJveENvbnRlbnQgPSAnJ1xuICAgICAgICAgIHZhciBtYXBcbiAgICAgICAgICBpZiAob3B0aW9ucy53aWRnZXRzKSB7XG4gICAgICAgICAgICBtYXAgPSBhd2FpdCBtYWtlV2lkZ2V0cyhvcHRpb25zLmpzb24sIG9wdGlvbnMsIGJveENvbnRlbnQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtYXAgPSBuZXcgQ3VzdG9tTWFwKGNvbnRhaW5lciwgb3B0aW9ucykucmVuZGVyKClcbiAgICAgICAgICAgIG1ha2VMYXllcnMobWFwKVxuICAgICAgICAgICAgdmFyIGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAjY29udHJvbHMnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcHRpb25zLmZvb3RlciAmJiBvcHRpb25zLmZvb3Rlci50cmltKCkpIHtcbiAgICAgICAgICAgIHZhciBmb290ZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICAgICAgICAgIGZvb3Rlck5vZGUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgb3B0aW9ucy5mb290ZXIgKyAnICA8ZGl2IGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+J1xuICAgICAgICAgICAgdmFyIHBlblVsdGltYXRlTm9kZSA9XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAjY29udHJvbHMnKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICdoZWFkZXInKVxuICAgICAgICAgICAgcGVuVWx0aW1hdGVOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICBmb290ZXJOb2RlLFxuICAgICAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUubmV4dFNpYmxpbmdcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNvbHZlKG1hcClcbiAgICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZUxhbmd1YWdlRGF0YSB9IGZyb20gJy4vcGFyc2Vycy5qcydcblxudmFyIHVybCA9XG4gIHdpbmRvdy5sb2NhdGlvbiAhPSB3aW5kb3cucGFyZW50LmxvY2F0aW9uXG4gICAgPyBkb2N1bWVudC5yZWZlcnJlclxuICAgIDogZG9jdW1lbnQubG9jYXRpb24uaHJlZlxudmFyIGhyZWYgPSAvbGFuZz0oW14mXSspLy5leGVjKHVybClcbndpbmRvdy5sYW5nID0gaHJlZiA/IGhyZWZbMV0gOiBudWxsXG5cbnZhciBsZWFmbGV0TG9hZGVkID0gMFxuXG52YXIgcHJpbWFyeUpzRmlsZXMgPSBbXG4gICdodHRwczovL3VucGtnLmNvbS9sZWFmbGV0QDEuMy4xL2Rpc3QvbGVhZmxldC5qcycsXG4gICdodHRwczovL3VucGtnLmNvbS93aGF0d2ctZmV0Y2hAMy4wLjAvZGlzdC9mZXRjaC51bWQuanMnXG5dXG5cbnZhciBzZWNvbmRhcnlKc0ZpbGVzID0gW1xuICAnaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldC56b29tc2xpZGVyQDAuNy4xL3NyYy9MLkNvbnRyb2wuWm9vbXNsaWRlci5qcycsXG4gICdodHRwczovL3VucGtnLmNvbS9sZWFmbGV0LWZ1bGxzY3JlZW5AMS4wLjIvZGlzdC9MZWFmbGV0LmZ1bGxzY3JlZW4ubWluLmpzJyxcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2Nocm9tYS1qc0AyLjAuMy9jaHJvbWEubWluLmpzJyxcbiAgJ2h0dHBzOi8vY3Npcy1pbGFiLmdpdGh1Yi5pby9tYXAtdGVtcGxhdGVzL2Rpc3QvanMvdmVuZG9yL0ExMXktRGlhbG9nLmpzJyxcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2Nob2ljZXMuanNANy4wLjAvcHVibGljL2Fzc2V0cy9zY3JpcHRzL2Nob2ljZXMubWluLmpzJyxcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2xlYWZsZXQubWFya2VyY2x1c3RlckAxLjQuMS9kaXN0L2xlYWZsZXQubWFya2VyY2x1c3Rlci5qcycsXG4gICdodHRwczovL2NzaXMtaWxhYi5naXRodWIuaW8vbWFwLXRlbXBsYXRlcy9kaXN0L2pzL3ZlbmRvci9wYXR0ZXJucy5qcycsXG4gICdodHRwczovL2NzaXMtaWxhYi5naXRodWIuaW8vbWFwLXRlbXBsYXRlcy9kaXN0L2pzL3ZlbmRvci9sYXRpbml6ZS5qcydcbl1cblxuZnVuY3Rpb24gaGFuZGxlTG9hZExlYWZsZXQoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBzZWNvbmRhcnlKc0ZpbGVzLmZvckVhY2goZnVuY3Rpb24oZmlsZSkge1xuICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkXG4gICAgICB2YXIganNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICAgIGpzTGluay5zcmMgPSBmaWxlXG4gICAgICBoZWFkLmFwcGVuZENoaWxkKGpzTGluaylcblxuICAgICAganNMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZWFmbGV0TG9hZGVkKytcblxuICAgICAgICBpZiAobGVhZmxldExvYWRlZCA9PT0gc2Vjb25kYXJ5SnNGaWxlcy5sZW5ndGggKyBwcmltYXJ5SnNGaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXNvbHZlKGxlYWZsZXRMb2FkZWQpXG4gICAgICAgICAgcmV0dXJuIGxlYWZsZXRMb2FkZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGltcG9ydEZpbGVzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcHJpbWFyeUpzRmlsZXMuZm9yRWFjaChmdW5jdGlvbihmaWxlKSB7XG4gICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWRcbiAgICAgIHZhciBqc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAganNMaW5rLnNyYyA9IGZpbGVcbiAgICAgIGpzTGluay5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGVhZmxldExvYWRlZCsrXG5cbiAgICAgICAgaWYgKGxlYWZsZXRMb2FkZWQgPT09IHByaW1hcnlKc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgIGhhbmRsZUxvYWRMZWFmbGV0KClcbiAgICAgICAgICByZXNvbHZlKGxlYWZsZXRMb2FkZWQpXG4gICAgICAgICAgcmV0dXJuIGxlYWZsZXRMb2FkZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaGVhZC5hcHBlbmRDaGlsZChqc0xpbmspXG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1ha2VNYXAob3B0aW9ucykge1xuICBpZiAoIWxlYWZsZXRMb2FkZWQpIHtcbiAgICByZXR1cm4gYXdhaXQgaW1wb3J0RmlsZXMoKS50aGVuKGFzeW5jIGZ1bmN0aW9uKHNjcmlwdHNMb2FkZWQpIHtcbiAgICAgIHJldHVybiBhd2FpdCBpbml0KG9wdGlvbnMpXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXdhaXQgaW5pdChvcHRpb25zKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQob3B0aW9ucykge1xuICB2YXIgZGF0YVVSTCA9ICdodHRwczovL3NwcmVhZHNoZWV0cy5nb29nbGUuY29tL2ZlZWRzL2xpc3QvJ1xuICB3aW5kb3cuZGVmYXVsdENvbG9yID1cbiAgICBvcHRpb25zLm9jZWFuY29sb3IgfHwgb3B0aW9ucy5vY2VhbkNvbG9yIHx8IG9wdGlvbnNbJ29jZWFuIGNvbG9yJ11cbiAgdmFyIHRyYW5zbGF0aW9uc1xuXG4gIGlmIChsYW5nKSB7XG4gICAgZmV0Y2goZGF0YVVSTCArIG9wdGlvbnMuZ29vZ2xlU2hlZXQgKyAnLycgKyAzICsgJy9wdWJsaWMvdmFsdWVzP2FsdD1qc29uJylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbihhc3luYyBmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIHRyYW5zbGF0aW9ucyA9IHBhcnNlTGFuZ3VhZ2VEYXRhKGpzb24uZmVlZC5lbnRyeSlcblxuICAgICAgICBjb25zdCBpbml0V2l0aFNwcmVhZHNoZWV0ID0gcmVxdWlyZSgnLi9pbml0V2l0aFNwcmVhZHNoZWV0LmpzJykuZGVmYXVsdFxuICAgICAgICByZXR1cm4gYXdhaXQgaW5pdFdpdGhTcHJlYWRzaGVldChkYXRhVVJMLCBvcHRpb25zLCB0cmFuc2xhdGlvbnMpXG4gICAgICB9KVxuICB9IGVsc2UgaWYgKG9wdGlvbnMuZ29vZ2xlU2hlZXQpIHtcbiAgICBjb25zdCBpbml0V2l0aFNwcmVhZHNoZWV0ID0gcmVxdWlyZSgnLi9pbml0V2l0aFNwcmVhZHNoZWV0LmpzJykuZGVmYXVsdFxuICAgIHJldHVybiBhd2FpdCBpbml0V2l0aFNwcmVhZHNoZWV0KGRhdGFVUkwsIG9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaW5pdFdpdGhvdXRTcHJlYWRzaGVldCA9IHJlcXVpcmUoJy4vaW5pdFdpdGhvdXRTcHJlYWRzaGVldC5qcycpXG4gICAgICAuZGVmYXVsdFxuICAgIHJldHVybiBhd2FpdCBpbml0V2l0aG91dFNwcmVhZHNoZWV0KG9wdGlvbnMpXG4gIH1cbn1cbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGluYSgpIHtcbiAgdmFyIG1hcCA9IGF3YWl0IG1ha2VNYXAoe1xuICAgIG1hcElEOiAnY2hpbmFwb3dlcicsXG4gICAgY2VudGVyOiBbMCwgMTUyLjU4XSxcbiAgICBmdWxsc2NyZWVuOiB0cnVlLFxuICAgIHpvb206IDMuNSxcbiAgICBtYXhab29tOiA2LFxuICAgIG1pblpvb206IDAsXG4gICAgY2x1c3RlckRpc3RhbmNlOiAxNSxcbiAgICBBdHRyaWJ1dGlvbjpcbiAgICAgICdEYXRhIGJ5IDxhIGhyZWY9XCJodHRwczovL2FtdGkuY3Npcy5vcmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5DU0lTIEFNVEk8L2E+LCDCqSBPcGVuU3RyZWV0TWFwLCBMZWFmbGV0IGNvbnRyaWJ1dG9ycywgwqkgQ0FSVE8nLFxuICAgIHRhYmxlOiAnY2xhaW1zXzEnLFxuICAgIGFwaUtleTogJy1XVmNxTlNtUEdwbDRUZFZMSkU1TFEnLFxuICAgIHByb2dyYW06ICdBc2lhIE1hcml0aW1lIFRyYW5zcGFyZW5jeSBJbml0aWF0aXZlJyxcbiAgICB3ZWJzaXRlOiAnaHR0cHM6Ly9hbXRpLmNzaXMub3JnLycsXG4gICAgdGl0bGU6ICdNYXJpdGltZSBDbGFpbXMgb2YgdGhlIEluZG8tUGFjaWZpYycsXG4gICAgZGVzY3JpcHRpb246ICAnU2VhcmNoIGNsYWltYW50cyBieSBuYW1lIG9yIGNsaWNrIHRoZSBzZWFyY2ggYmFyIHRvIHNlZSB0aGUgZnVsbCBsaXN0LiBVcCB0byBzaXggY2FuIGJlIHNlbGVjdGVkIGF0IG9uY2UuIFVzZSB0aGUgYm94ZXMgYmVsb3cgdG8gdG9nZ2xlIGRpZmZlcmVudCBjbGFpbSB0eXBlcy4gWm9vbSBpbiBvciBvdXQgdXNpbmcgdGhlIG1vdXNlIHNjcm9sbCB3aGVlbCBvciB0aGUgYnV0dG9ucyBvbiB0aGUgc2lkZSBvZiB0aGUgbWFwLiBDbGljayBhbmQgZHJhZyB0byBtb3ZlIGFjcm9zcyB0aGUgbWFwLicsXG4gICAgbWFwYm94U3R5bGU6ICAgbGFuZyAmJiBsYW5nLmluZGV4T2YoXCJ6aC1cIikgPiAtMVxuICAgID8gXCJjaXR1aTN3YXcwMDE2MmpvMXpjc2YxdXJqXCJcbiAgICA6IFwiY2o4NHM5YmV0MTBmNTJybzJscm5hNTB5Z1wiLFxuICAgICdvY2VhbiBjb2xvcic6ICcjYjdjN2QxJyxcbiAgICBmb3JtYXRQb3B1cENvbnRlbnQ6IGZ1bmN0aW9uIChmZWF0dXJlLCBtYXApIHtcbiAgICAgIHZhciBzdWZmaXggPSBsYW5nID8gJ18nICsgbGFuZy5yZXBsYWNlKC8tLywgJ18nKSA6ICcnXG4gIFxuICAgICAgdmFyIG5hbWUgPSBmZWF0dXJlLnByb3BlcnRpZXNbJ25hbWUnICsgc3VmZml4XVxuICBcbiAgICAgIHZhciBkZXNjcmlwdGlvbiA9IGZlYXR1cmUucHJvcGVydGllc1snZGVzY3JpcHRpb24nICsgc3VmZml4XVxuICAgICAgICAucmVwbGFjZSgvPGEgaHJlZj0vZ2ksICc8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPScpXG4gICAgICAgIC5yZXBsYWNlKC88XFwvYT4vZ2ksIGV4dGVybmFsTGluayArICc8L2E+JylcbiAgXG4gICAgICByZXR1cm4gKFxuICAgICAgICAnPGRpdiBjbGFzcz1cInBvcHVwSGVhZGVyU3R5bGVcIj4nICtcbiAgICAgICAgbmFtZSArXG4gICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgIGRlc2NyaXB0aW9uICtcbiAgICAgICAgJzwvZGl2PidcbiAgICAgIClcbiAgICB9LFxuXG4gICAgem9vbVNsaWRlcjogZmFsc2UsXG5cbiAgICB3aWRnZXRzOiBbe1xuICAgICAgaWQ6ICcwJyxcbiAgICAgIGZpZWxkOiBcImNsYWltYW50XCIsXG4gICAgICBpbnB1dDogXCJkcm9wZG93blwiLFxuICAgICAgdHlwZTogXCJjb2xvclwiLFxuICAgICAga2V5czogW1xuICAgICAge1xuICAgICAgICBjb2xvcjogJyMzNjdEOTgnLFxuICAgICAgICB2YWx1ZTogXCJOaXVlXCIsXG4gICAgICAgIGdyb3VwOiAncGFjaWZpYycsXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjMzY3RDk4JyxcbiAgICAgICAgdmFsdWU6IFwiTWFsYXlzaWFcIixcbiAgICAgICAgZ3JvdXA6ICdlYXN0IGFzaWEnLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnIzRGODk2MycsXG4gICAgICAgIHZhbHVlOiBcIk15YW5tYXJcIixcbiAgICAgICAgZ3JvdXA6ICdlYXN0IGFzaWEnLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnIzg1NTA4MCcsXG4gICAgICAgIHZhbHVlOiBcIkluZGlhXCIsXG4gICAgICAgIGdyb3VwOiAnZWFzdCBhc2lhJyxcbiAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnIzg4ODA0OCcsXG4gICAgICAgIHZhbHVlOiBcIkF1c3RyYWxpYVwiLFxuICAgICAgICBncm91cDogJ3BhY2lmaWMnLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjREFBRDc0JyxcbiAgICAgICAgdmFsdWU6IFwiVW5pdGVkIFN0YXRlc1wiLFxuICAgICAgICBncm91cDogJ3BhY2lmaWMnLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjNEY4OTYzJyxcbiAgICAgICAgdmFsdWU6IFwiVmlldG5hbVwiLFxuICAgICAgICBncm91cDogJ3BhY2lmaWMnLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjQTE3NzU0JyxcbiAgICAgICAgdmFsdWU6IFwiRmlqaVwiLFxuICAgICAgICBncm91cDogJ3BhY2lmaWMnLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjMzY3RDk4JyxcbiAgICAgICAgdmFsdWU6IFwidmFudWF0dVwiLFxuICAgICAgICBncm91cDogJ3BhY2lmaWMnLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnIzM2N0Q5OCcsXG4gICAgICAgIHZhbHVlOiBcInBhcHVhIG5ldyBndWluZWFcIixcbiAgICAgICAgZ3JvdXA6ICdwYWNpZmljJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2xvcjogJyM4ODgwNDgnLFxuICAgICAgICB2YWx1ZTogXCJzb2xvbW9uIGlzbGFuZHNcIixcbiAgICAgICAgZ3JvdXA6ICdwYWNpZmljJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2xvcjogJyMzNjdEOTgnLFxuICAgICAgICB2YWx1ZTogXCJwYWxhdVwiLFxuICAgICAgICBncm91cDogJ3BhY2lmaWMnLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnIzg4ODA0OCcsXG4gICAgICAgIHZhbHVlOiBcIkZlZGVyYXRlZCBTdGF0ZXMgb2YgTWljcm9uZXNpYVwiLFxuICAgICAgICBncm91cDogJ3BhY2lmaWMnLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnIzRGODk2MycsXG4gICAgICAgIHZhbHVlOiBcIk5hdXJ1XCIsXG4gICAgICAgIGdyb3VwOiAncGFjaWZpYycsXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjODg4MDQ4JyxcbiAgICAgICAgdmFsdWU6IFwiVGltb3IgTGVzdGVcIixcbiAgICAgICAgZ3JvdXA6ICdlYXN0IGFzaWEnLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnIzg4ODA0OCcsXG4gICAgICAgIHZhbHVlOiBcIkNvb2sgSXNsYW5kc1wiLFxuICAgICAgICBncm91cDogJ3BhY2lmaWMnLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnI0RBQUQ3NCcsXG4gICAgICAgIHZhbHVlOiBcIkZyYW5jZVwiLFxuICAgICAgICBncm91cDogJ3BhY2lmaWMnLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnIzM2N0Q5OCcsXG4gICAgICAgIHZhbHVlOiBcIlRoYWlsYW5kXCIsXG4gICAgICAgIGdyb3VwOiAncGFjaWZpYycsXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjREFBRDc0JyxcbiAgICAgICAgdmFsdWU6IFwiTmV3IFplYWxhbmRcIixcbiAgICAgICAgZ3JvdXA6ICdwYWNpZmljJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2xvcjogJyM0Rjg5NjMnLFxuICAgICAgICB2YWx1ZTogXCJTYW1vYVwiLFxuICAgICAgICBncm91cDogJ3BhY2lmaWMnLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnI0RBQUQ3NCcsXG4gICAgICAgIHZhbHVlOiBcIkNhbWJvZGlhXCIsXG4gICAgICAgIGdyb3VwOiAncGFjaWZpYycsXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjQTE3NzU0JyxcbiAgICAgICAgdmFsdWU6IFwiS2lyaWJhdGlcIixcbiAgICAgICAgZ3JvdXA6ICdwYWNpZmljJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2xvcjogJyNBMTc3NTQnLFxuICAgICAgICB2YWx1ZTogXCJVbml0ZWQgS2luZ2RvbVwiLFxuICAgICAgICBncm91cDogJ3BhY2lmaWMnLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnI0ExNzc1NCcsXG4gICAgICAgIHZhbHVlOiBcIlJ1c3NpYVwiLFxuICAgICAgICBncm91cDogJ2Vhc3QgYXNpYScsXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjQTE3NzU0JyxcbiAgICAgICAgdmFsdWU6IFwiUGhpbGlwcGluZXNcIixcbiAgICAgICAgZ3JvdXA6ICdlYXN0IGFzaWEnLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnI0ExNzc1NCcsXG4gICAgICAgIHZhbHVlOiBcIk1hcnNoYWxsIElzbGFuZHNcIixcbiAgICAgICAgZ3JvdXA6ICdwYWNpZmljJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2xvcjogJyNBMTc3NTQnLFxuICAgICAgICB2YWx1ZTogXCJTcmkgTGFua2FcIixcbiAgICAgICAgZ3JvdXA6ICdlYXN0IGFzaWEnLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnIzg1NTA4MCcsXG4gICAgICAgIHZhbHVlOiBcIlR1dmFsdVwiLFxuICAgICAgICBncm91cDogJ3BhY2lmaWMnLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnIzg1NTA4MCcsXG4gICAgICAgIHZhbHVlOiBcIlRvbmdhXCIsXG4gICAgICAgIGdyb3VwOiAncGFjaWZpYycsXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjMzY3RDk4JyxcbiAgICAgICAgdmFsdWU6IFwiUGVvcGxlJ3MgUmVwdWJsaWMgb2YgQ2hpbmFcIixcbiAgICAgICAgZ3JvdXA6ICdlYXN0IGFzaWEnLFxuICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjNEY4OTYzJyxcbiAgICAgICAgdmFsdWU6IFwiTWFsZGl2ZXNcIixcbiAgICAgICAgZ3JvdXA6ICdlYXN0IGFzaWEnLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnIzM2N0Q5OCcsXG4gICAgICAgIHZhbHVlOiBcIlJlcHVibGljIG9mIENoaW5hIChUYWl3YW4pXCIsXG4gICAgICAgIGdyb3VwOiAnZWFzdCBhc2lhJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2xvcjogJyMzNjdEOTgnLFxuICAgICAgICB2YWx1ZTogXCJTb3V0aCBLb3JlYVwiLFxuICAgICAgICBncm91cDogJ2Vhc3QgYXNpYScsXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjMzY3RDk4JyxcbiAgICAgICAgdmFsdWU6IFwiRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZiBLb3JlYSAoTm9ydGggS29yZWEpXCIsXG4gICAgICAgIGdyb3VwOiAnZWFzdCBhc2lhJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2xvcjogJyM4NTUwODAnLFxuICAgICAgICB2YWx1ZTogXCJKYXBhblwiLFxuICAgICAgICBncm91cDogJ2Vhc3QgYXNpYScsXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjODU1MDgwJyxcbiAgICAgICAgdmFsdWU6IFwiQmFuZ2xhZGVzaFwiLFxuICAgICAgICBncm91cDogJ2Vhc3QgYXNpYScsXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICcjNEY4OTYzJyxcbiAgICAgICAgdmFsdWU6IFwiSW5kb25lc2lhXCIsXG4gICAgICAgIGdyb3VwOiAnZWFzdCBhc2lhJyxcbiAgICAgICAgc2VsZWN0ZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjb2xvcjogJyM4NTUwODAnLFxuICAgICAgICB2YWx1ZTogXCJTaW5nYXBvcmVcIixcbiAgICAgICAgZ3JvdXA6ICdlYXN0IGFzaWEnLFxuICAgICAgICBzZWxlY3RlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAnIzg1NTA4MCcsXG4gICAgICAgIHZhbHVlOiBcIkJydW5laVwiLFxuICAgICAgICBncm91cDogJ2Vhc3QgYXNpYScsXG4gICAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnMScsXG4gICAgICBmaWVsZDogXCJ0eXBlXCIsXG4gICAgICB0eXBlOiBcImZvcm1cIixcbiAgICAgIGlucHV0OiBcImNoZWNrYm94XCIsXG4gICAgICBrZXlzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjb2xvcjogJyNjNWM1YzUnLFxuICAgICAgICAgIGxhYmVsOiBcIlRlcnJpdG9yaWFsIEJhc2VsaW5lc1wiLFxuICAgICAgICAgIHZhbHVlOiBcIlRlcnJpdG9yaWFsIEJhc2VsaW5lc1wiLFxuICAgICAgICAgIGZvcm06IFwibGluZVwiLFxuICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29sb3I6ICcjYzVjNWM1JyxcbiAgICAgICAgICBsYWJlbDogXCJUZXJyaXRvcmlhbCBTZWFcIixcbiAgICAgICAgICB2YWx1ZTogXCJUZXJyaXRvcmlhbCBTZWFcIixcbiAgICAgICAgICBmb3JtOiBcImxpbmVcIixcbiAgICAgICAgICBpY29uOiAnJyxcbiAgICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29sb3I6ICcjYzVjNWM1JyxcbiAgICAgICAgICBsYWJlbDogXCJFeGNsdXNpdmUgRWNvbm9taWMgWm9uZVwiLFxuICAgICAgICAgIHZhbHVlOiBcIkV4Y2x1c2l2ZSBFY29ub21pYyBab25lXCIsXG4gICAgICAgICAgZm9ybTogXCJsaW5lXCIsXG4gICAgICAgICAgaWNvbjogJycsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbG9yOiAnI2M1YzVjNScsXG4gICAgICAgICAgbGFiZWw6IFwiQ29udGluZW50YWwgU2hlbGZcIixcbiAgICAgICAgICB2YWx1ZTogXCJDb250aW5lbnRhbCBTaGVsZlwiLFxuICAgICAgICAgIGZvcm06IFwibGluZVwiLFxuICAgICAgICAgIGljb246ICcnLFxuICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29sb3I6ICcjYzVjNWM1JyxcbiAgICAgICAgICBsYWJlbDogXCJOaW5lLURhc2gvVS1TaGFwZWQgTGluZVwiLFxuICAgICAgICAgIHZhbHVlOiBcIk5pbmUtRGFzaC9VLVNoYXBlZCBMaW5lXCIsXG4gICAgICAgICAgZm9ybTogXCJsaW5lXCIsXG4gICAgICAgICAgaWNvbjogJycsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0pXG59XG4iLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSdcbmltcG9ydCB7IG1ha2VNYXAgfSBmcm9tICcuL2pzL21ha2VNYXAnXG5pbXBvcnQgeyBleHRlcm5hbExpbmsgfSBmcm9tICcuL2pzL2hlbHBlcnMuanMnXG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi9qcy9oZWxwZXJzLmpzJ1xud2luZG93Lm1ha2VNYXAgPSBtYWtlTWFwXG53aW5kb3cuZXh0ZXJuYWxMaW5rID0gZXh0ZXJuYWxMaW5rXG53aW5kb3cuY2FwaXRhbGl6ZSA9IGNhcGl0YWxpemVcblxuLy8gaW1wb3J0IHsgZXhhbXBsZXMsIGFyY3RpY0phbW1pbmcgfSBmcm9tICcuL2V4YW1wbGVzLmpzJ1xuLy8gYXJjdGljSmFtbWluZygpXG4vLyBleGFtcGxlcygpXG5pbXBvcnQgeyBjaGluYSB9IGZyb20gXCIuL2NoaW5hLmpzXCI7XG5jaGluYSgpXG5cbndpbmRvdy5jb252ZXJ0VHlwZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciB2ID0gTnVtYmVyKHZhbHVlKVxuICByZXR1cm4gIWlzTmFOKHYpXG4gICAgPyB2XG4gICAgOiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndW5kZWZpbmVkJ1xuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ251bGwnXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJ1xuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbHNlJ1xuICAgICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgICAgOiB2YWx1ZVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICBmdW5jdGlvbiBDdXN0b21FdmVudChldmVudCwgcGFyYW1zKSB7XG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IHVuZGVmaW5lZCB9XG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKVxuICAgIHJldHVybiBldnRcbiAgfVxuXG4gIEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGVcblxuICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudFxufVxuXG5BcnJheS5wcm90b3R5cGUuZ3JvdXBCeSA9IGZ1bmN0aW9uKHByb3BlcnR5MSwgcHJvcGVydHkyKSB7XG4gIHJldHVybiBwcm9wZXJ0eTJcbiAgICA/IHRoaXMucmVkdWNlKGZ1bmN0aW9uKGdyb3VwcywgaXRlbSkge1xuICAgICAgdmFyIHZhbCA9IGl0ZW1bcHJvcGVydHkyXVtwcm9wZXJ0eTFdXG4gICAgICBncm91cHNbdmFsXSA9IGdyb3Vwc1t2YWxdIHx8IFtdXG4gICAgICBncm91cHNbdmFsXS5wdXNoKGl0ZW0pXG4gICAgICByZXR1cm4gZ3JvdXBzXG4gICAgfSwge30pXG4gICAgOiB0aGlzLnJlZHVjZShmdW5jdGlvbihncm91cHMsIGl0ZW0pIHtcbiAgICAgIHZhciB2YWwgPSBpdGVtW3Byb3BlcnR5MV1cbiAgICAgIGdyb3Vwc1t2YWxdID0gZ3JvdXBzW3ZhbF0gfHwgW11cbiAgICAgIGdyb3Vwc1t2YWxdLnB1c2goaXRlbSlcbiAgICAgIHJldHVybiBncm91cHNcbiAgICB9LCB7fSlcbn1cblxuUmVnRXhwLmVzY2FwZSA9IGZ1bmN0aW9uKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZSgvW1xcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==