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
/*! exports provided: createColorScale, lineWeights, lineDashArrays, externalLink, remove, convertType, capitalize, load, makeDropdownOptions */
/*! exports used: capitalize, convertType, createColorScale, externalLink, lineDashArrays, lineWeights, load, makeDropdownOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return lineWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lineDashArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return externalLink; });
/* unused harmony export remove */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return convertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return makeDropdownOptions; });
// import styleKey from './styleKey.js'
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
              keyStyle = styleKey(styleOptions);
              break;

            case 'color':
              var styleOptions = {
                key: key,
                map: options
              };
              keyStyle = styleKey(styleOptions);
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
              keyStyle = styleKey(styleOptions);
              break;

            case 'color':
              var styleOptions = {
                key: key,
                map: options
              };
              keyStyle = styleKey(styleOptions);
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
      var formKeyWidget = w.type === "form" ? w : null;
      var colorKeyWidget = w.type === "color" ? w : null;

      if (feature) {
        var colorKey = colorKeyWidget ? colorKeyWidget.keys.find(function (k) {
          return !k.value ? true : k.value.toLowerCase() === feature.properties[colorKeyWidget.field].toLowerCase();
        }) : null;
        var formKey = formKeyWidget ? formKeyWidget.keys.find(function (k) {
          return !k.value ? true : k.value.toLowerCase() === feature.properties[formKeyWidget.field].toLowerCase();
        }) : null;
        keyColor = colorKey ? colorKey.color : formKey ? formKey.color : null;
        iconSize = iconSize.map(function (size) {
          return size / 2;
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
        case "line":
          keyColor = key.color ? key.color : options.map.oceancolor ? options.map.oceancolor : null;

          if (forms && forms.length) {
            var svg;

            switch (index) {
              case 0:
                colors = [keyColor ? keyColor : chroma(defaultColor).darken(), keyColor ? keyColor : chroma(defaultColor).darken()];
                break;

              case 1:
                colors = [keyColor ? keyColor : chroma(defaultColor).darken(), "#ffffff"];
                break;

              case 2:
                colors = ["#000000", keyColor ? keyColor : defaultColor];
                break;

              case 3:
                colors = ["#ffffff", keyColor ? keyColor : chroma(defaultColor).darken()];
                break;

              default:
                colors = [keyColor ? keyColor : chroma(defaultColor).darken(), keyColor ? keyColor : chroma(defaultColor).darken()];
                break;
            }

            svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 12'><line x1='0' x2='48' y1='50%' y2='50%' stroke='" + colors[0] + "' stroke-width='" + _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineWeights */ "f"][index][0] + "' stroke-linecap='square' stroke-dasharray='" + (index === 0 ? "18,12" : _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineDashArrays */ "e"][index][0]) + "'/><line x1='0' x2='48' y1='50%' y2='50%' stroke='" + colors[1] + "' stroke-width='" + _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineWeights */ "f"][index][1] + "' stroke-linecap='square' stroke-dasharray='" + (index === 4 ? "18,12" : _helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* lineDashArrays */ "e"][index][1]) + "'/></svg>";
          } else {
            svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 12'><line x1='0' x2='48' y1='50%' y2='50%' stroke='" + keyColor + "' stroke-width='" + 3 + "' stroke-linecap='square' stroke-dasharray='" + "3,7" + "'/></svg>";
          }

          return {
            svg: "data:image/svg+xml;base64," + window.btoa(svg),
            class: "line"
          };

        case "icon":
          if (key.icon) {
            var slug = key.value.replace(/ /g, "-");
            Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* load */ "g"])(key.icon, document.querySelector(".hidden"));
            var svgContent = document.querySelector(".hidden").innerHTML;

            if (colorKeyWidget && keyColor) {
              svgContent = svgContent.replace(/((\bfill="#)(([0-a-fA-F]{2}){3}|([0-9a-fA-F]){3})")/gi, "");
              svgContent = svgContent.replace(/(<circle |<rectangle |<ellipse |<polygon |<path )/g, function (match, p1, p2, p3) {
                return match.replace(match, match + 'fill="' + keyColor + '" ');
              });
            }

            svg = "data:image/svg+xml;base64," + window.btoa(svgContent);
          } else {
            svg = "data:image/svg+xml;base64," + window.btoa('<svg xmlns="http://www.w3.org/2000/svg"><circle cx="' + iconSize[0] / 2 + '" cy="' + iconSize[1] / 2 + '" r="' + (iconSize[0] + iconSize[1]) / 4 + '" fill="' + (keyColor || key.color) + '"/></svg>');
          }

          return {
            svg: svg,
            class: key.icon ? "icon" : "color"
          };

        case "pattern":
          keyColor = key.color;
          var svg;

          switch (true) {
            case key.pattern[0].indexOf("stripe") > -1:
              var colorTwo = key.pattern[1];
              var colorOne = key.pattern[key.pattern.length - 1];
              svg = "data:image/svg+xml;base64," + window.btoa('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><polygon points="5.73 0 4.67 0 0 4.66 0 5.71 5.73 0" fill="' + colorOne + '"/><polygon points="2.28 0 1.22 0 0 1.22 0 2.27 2.28 0" fill="' + colorTwo + '"/><polygon points="8.85 0 7.79 0 0 7.77 0 8.82 8.85 0" fill="' + colorTwo + '"/><polygon points="12 0 11.24 0 0 11.2 0 12 0.26 12 12 0.3 12 0" fill="' + colorOne + '"/><polygon points="12 10.12 12 9.06 9.05 12 10.11 12 12 10.12" fill="' + colorTwo + '"/><polygon points="12 3.52 12 2.46 2.43 12 3.49 12 12 3.52" fill="' + colorTwo + '"/><polygon points="12 6.96 12 5.9 5.88 12 6.94 12 12 6.96" fill="' + colorOne + '"/></svg>');
              break;

            case key.pattern[0].indexOf("dot") > -1:
              svg = "data:image/svg+xml;base64," + window.btoa('<svg xmlns="http://www.w3.org/2000/svg" width="13.06" height="15.1" viewBox="0 0 12 12"><title>stripes</title><path d="M5.49,1A1.16,1.16,0,1,1,4.33-.16,1.16,1.16,0,0,1,5.49,1ZM4.33,3.77A1.16,1.16,0,1,0,5.49,4.93,1.15,1.15,0,0,0,4.33,3.77Zm0,3.93A1.16,1.16,0,1,0,5.49,8.86,1.15,1.15,0,0,0,4.33,7.7Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.15,1.15,0,0,0,4.33,11.63ZM11.5-.16A1.16,1.16,0,1,0,12.66,1,1.16,1.16,0,0,0,11.5-.16Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,11.5,3.77Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,11.5,7.7Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,11.5,11.63ZM7.92-1.16A1.16,1.16,0,0,0,6.76,0,1.16,1.16,0,0,0,7.92,1.16,1.16,1.16,0,0,0,9.07,0,1.16,1.16,0,0,0,7.92-1.16Zm0,3.93A1.16,1.16,0,1,0,9.07,3.93,1.16,1.16,0,0,0,7.92,2.77Zm0,3.93A1.16,1.16,0,1,0,9.07,7.86,1.16,1.16,0,0,0,7.92,6.7Zm0,3.93a1.16,1.16,0,1,0,1.15,1.16A1.16,1.16,0,0,0,7.92,10.63ZM.75-1.16A1.16,1.16,0,0,0-.41,0,1.16,1.16,0,0,0,.75,1.16,1.16,1.16,0,0,0,1.91,0,1.16,1.16,0,0,0,.75-1.16Zm0,3.93A1.16,1.16,0,1,0,1.91,3.93,1.16,1.16,0,0,0,.75,2.77Zm0,3.93A1.16,1.16,0,0,0-.41,7.86,1.15,1.15,0,0,0,.75,9,1.15,1.15,0,0,0,1.91,7.86,1.16,1.16,0,0,0,.75,6.7Zm0,3.93a1.16,1.16,0,1,0,1.16,1.16A1.16,1.16,0,0,0,.75,10.63Z" transform="translate(0.7 2)" fill="' + colorOne + '"/></svg>');
              break;

            default:
              svg = "data:image/svg+xml;base64," + window.btoa('<svg xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5" fill="' + keyColor + '"/></svg>');
          }

          return {
            svg: svg,
            class: key.pattern ? "pattern" : "color"
          };

        case "shape":
          if (feature) {
            var colorKeyWidget = map.widgets.find(function (w) {
              return w.type === "color";
            });
            var colorKey = colorKeyWidget.keys.find(function (k) {
              return k.value.toLowerCase() === feature.properties[colorKeyWidget.field].toLowerCase();
            });
            keyColor = colorKey ? colorKey.color : keyColor ? keyColor : null;
          }

          var svg;

          switch (index) {
            case 0:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow"  y1="4.5" x2="9" y2="4.5" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.5 -4.5) rotate(135)"><stop offset="0" stop-color="#7f3c8d"/><stop offset="0.325" stop-color="#e73f74"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.675" stop-color="#11a579"/><stop offset="1" stop-color="#3969ac"/></linearGradient></defs><rect x="3.25" y="1.75" width="9" height="9" transform="translate(4.5 -4.5) rotate(45)" ' + (keyColor ? 'paint-order="stroke" stroke="#ffffff"' : "") + ' fill="' + (keyColor ? keyColor : "url(#rainbow)") + '" /></svg>';
              break;

            case 1:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow" y1="5" x2="10" y2="5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3969ac"/><stop offset="0.25" stop-color="#11a579"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.75" stop-color="#e73f74"/><stop offset="1" stop-color="#7f3c8d"/></linearGradient></defs><rect width="10" height="10" ' + (keyColor ? 'stroke="#ffffff"' : "") + ' fill="' + (keyColor ? keyColor : "url(#rainbow)") + '"/></svg>';
              break;

            case 2:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow" y1="5" x2="10" y2="5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3969ac"/><stop offset="0.325" stop-color="#11a579"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.675" stop-color="#e73f74"/><stop offset="1" stop-color="#7f3c8d"/></linearGradient></defs><polygon points="6 10.39 0 10.39 3 5.2 6 0 9 5.2 12 10.39 6 10.39" ' + (keyColor ? 'paint-order="stroke" stroke="#ffffff"' : "") + ' fill="' + (keyColor ? keyColor : "url(#rainbow)") + '" /></svg>';
              break;

            default:
              svg = '<svg xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rainbow" y1="5" x2="10" y2="5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3969ac"/><stop offset="0.25" stop-color="#11a579"/><stop offset="0.5" stop-color="#f2b701"/><stop offset="0.75" stop-color="#e73f74"/><stop offset="1" stop-color="#7f3c8d"/></linearGradient></defs><circle cx="6" cy="6" r="5" ' + (keyColor ? 'stroke="#ffffff"' : "") + ' fill="' + (keyColor ? keyColor : "url(#rainbow)") + '"/></svg>';
          }

          return {
            svg: "data:image/svg+xml;base64," + window.btoa(svg),
            class: "shape"
          };

        default:
          keyColor = key.color;
          svg = "data:image/svg+xml;base64," + window.btoa('<svg xmlns="http://www.w3.org/2000/svg"><circle cx="' + iconSize[0] / 2 + '" cy="' + iconSize[1] / 2 + '" r="' + (iconSize[0] + iconSize[1]) / 4 + '" fill="' + (keyColor || key.color) + '"/></svg>');
          return {
            svg: svg,
            class: "color"
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
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/styleKey.js because of ./src/js/initWithSpreadsheet.js */
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
      sort = ["form", "color"];
  var colorKeyWidget = map.widgets.find(function (w) {
    if (!w.keys) return;
    var key = w.keys.find(function (k) {
      return !k.value ? true : k.value.toLowerCase() === feature.properties[w.field].toLowerCase();
    });
    return key && w.type === "color";
  });
  var formKeyWidget = map.widgets.find(function (w) {
    if (!w.keys) return;
    var key = w.keys.find(function (k) {
      return !k.value ? true : k.value.toLowerCase() === feature.properties[w.field].toLowerCase();
    });
    return key && w.type === "form";
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

      if (formKeyWidget && form === "line") {
        forms = formKeyWidget.keys.map(function (f) {
          return f.value;
        });
        forms.forEach(function (f, i) {
          switch (i) {
            case 0:
              colors.push(["transparent", null]);
              break;

            case 1:
              colors.push([null, defaultColor]);
              break;

            case 2:
              colors.push(["#000000", null]);
              break;

            case 3:
              colors.push(["#ffffff", null]);
              break;

            default:
              colors.push([null, null]);
              break;
          }
        });
      }

      if (forms.length && formKeyForm === "line" || forms.length && colorKeyForm === "line") {
        if (formKeyWidget) {
          var i = forms.indexOf(feature.properties[formKeyWidget.field]);

          if (i > -1) {
            nonPointStyle = {
              color: colors[i][index] === undefined ? "#cad2d3" : colors[i][index] !== null ? colors[i][index] : color,
              weight: helpers["f" /* lineWeights */][i][index],
              lineCap: "square",
              dashArray: helpers["e" /* lineDashArrays */][i] ? helpers["e" /* lineDashArrays */][i][index] : null
            };
          }
        }
      } else if (formKeyForm === "line" || colorKeyForm === "line") {
        nonPointStyle = {
          color: color,
          weight: 3,
          lineCap: "square",
          dashArray: "3,7",
          fillRule: 'nonzero',
          lineJoin: 'butt'
        };
      } else if (colorKey && colorKey.form === "pattern") {
        var pattern;

        switch (true) {
          case colorKey.pattern[0].indexOf("stripe") > -1:
            var patternOptions = {
              weight: 2,
              spaceWeight: 3,
              color: colorKey.pattern[1],
              spaceColor: colorKey.pattern[colorKey.pattern.length - 1],
              spaceOpacity: 1,
              angle: 45,
              fillRule: 'nonzero',
              lineJoin: 'butt'
            };
            pattern = new L.StripePattern(patternOptions);
            break;

          case colorKey.pattern[0].indexOf("dot") > -1:
            var shapeOptions = {
              x: 4,
              y: 4,
              radius: 2,
              fill: true,
              stroke: false,
              fillColor: colorKey.pattern[colorKey.pattern.length - 1],
              fillOpacity: 1,
              fillRule: 'nonzero',
              className: 'yo',
              lineJoin: 'butt'
            };
            var shape = new L.PatternCircle(shapeOptions);
            var patternOptions = {
              width: 5,
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
          lineCap: "square",
          fillRule: 'nonzero'
        };
      } else {
        var lineColor;
        var lineWeight;
        var lineOpacity;

        switch (true) {
          // nine dash line
          case feature.geometry.type.toLowerCase().indexOf("line") > -1:
            lineColor = color ? chroma(color).brighten().hex() : null;
            lineOpacity = 1;
            lineWeight = 3;
            break;

          case feature.geometry.type.toLowerCase().indexOf("polygon") > -1:
            lineColor = 'defaultColor';
            lineOpacity = 0.5;
            lineWeight = 2;
            break;
        }

        nonPointStyle = {
          fillPattern: pattern,
          fillColor: color,
          // color: lineColor,
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

      var geoJson = L.geoJson(json, option); // console.log(geoJson)

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
      if (column.indexOf("gsx$") > -1) {
        var columnName = column.replace("gsx$", "");

        if (columnName === "en") {
          key = row[column]["$t"];
          languageData[key] = {};
        }

        if (columnName === lang) {
          languageData[key] = row[column]["$t"];
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
      if (column.indexOf("gsx$") > -1) {
        var columnName = column.replace("gsx$", "");

        if (columnName === "label") {
          var key = row[column]["$t"].toLowerCase();
          data.key = key;
          data.label = row[Object.keys(row)[y + 0]]["$t"];
          data.value = row[Object.keys(row)[y + 1]]["$t"];
          data.group = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* convertType */ "b"])(row[Object.keys(row)[y + 2]]["$t"]);
          data.selected = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* convertType */ "b"])(row[Object.keys(row)[y + 3]]["$t"]);
          var colorVal = row[Object.keys(row)[y + 4]]["$t"];
          data.form = row[Object.keys(row)[y + 5]]["$t"];
          data.color = colorVal ? colorVal : data.form === "line" ? defaultColor : colorScale[x];
          data.icon = row[Object.keys(row)[y + 6]]["$t"];
          data.pattern = row[Object.keys(row)[y + 7]]["$t"].split(",");

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
      if (column.indexOf("gsx$") > -1) {
        var columnName = column.replace("gsx$", "");

        if (columnName === "property") {
          var key = row[column]["$t"].toLowerCase().replace(/ /g, "");
          data[key] = data[key] || {};
          data[key] = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_0__[/* convertType */ "b"])(row[Object.keys(row)[y + 1]]["$t"]);
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

  var properties = ["input", "field", "grouping", "instructions", "maximum", "type", "reference", "style"];
  Object.keys(metaData).filter(function (k) {
    return k.toLowerCase().indexOf("widget") > -1;
  }).forEach(function (k) {
    var index = k.match(/\d+/)[0];
    widgets[index - 1] = widgets[index - 1] || {};
    properties.forEach(function (property) {
      process(k, index, property);
    });
  });
  widgets.forEach(function (w, i) {
    w.field = w.field.replace(/ /g, "_");
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
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/styleKey.js because of ./src/js/initWithoutSpreadsheet.js */
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
                  console.log(w);
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
                } // console.log(options.widgets)


                // console.log(options.widgets)
                if (!options.widgets.length) {
                  Object(makeLayers["a" /* default */])(map);
                  var box = document.querySelector('#' + options.slug + ' #controls');
                  box.innerHTML = '';
                }

                var initialized = 0;
                options.widgets.forEach(function (w, x) {
                  var element = document.querySelector('#' + options.slug + ' .widget.' + options.widgets[x].field);

                  if (element.querySelector('select') && widgetContent[x].options) {
                    new Choices(element.querySelector('select'), widgetContent[x].options);
                  }

                  if (element.querySelector('input[id^=\'search\']')) {
                    element.querySelector('#resetButton').addEventListener('click', function () {
                      handleReset(element, map, x);
                    });
                  }

                  var selects = Array.from(element.querySelectorAll('select'));
                  var checks = Array.from(element.querySelectorAll('input[type=\'checkbox\']'));
                  var search = Array.from(element.querySelectorAll('input[type=\'text\']:not(.choices__input)'));
                  var toggle = Array.from(element.querySelectorAll('input[type=\'radio\']'));
                  var inputs = selects.concat(checks).concat(search).concat(toggle);

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
  console.log(styleKey["a" /* default */]);
  var widgetNodes = '';
  var dropdownOptions;

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
      widgetNodes += '<select id="dropdown_' + options.widgets[x].field + '" placeholder="' + options.widgets[x].instructions + '" multiple=""></select>';
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
/*! ModuleConcatenation bailout: Cannot concat with ./src/js/helpers.js because of ./src/js/initWithSpreadsheet.js */
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
              center: [13.7237264, 110.6814572],
              fullscreen: true,
              zoom: 4,
              maxZoom: 6,
              minZoom: 0,
              clusterDistance: 15,
              Attribution: 'Data by <a href="https://amti.csis.org" target="_blank">CSIS AMTI</a>, © OpenStreetMap, Leaflet contributors, © CARTO',
              table: 'range_rings_map',
              apiKey: 'jlLXUHUYItbaht_u6RIX0A',
              program: 'Asia Maritime Transparency Initiative',
              website: 'https://amti.csis.org/',
              Logo: 'https://raw.githubusercontent.com/CSIS-iLab/amti-viz/master/logo.jpeg',
              title: 'Chinese Power Projection Capabilities in the South China Sea',
              description: 'To toggle each layer on and off, check and uncheck the corresponding box on the key in the upper-right of the graphic. For identifying information on the individual outposts and range rings, hover the cursor over them on the map.',
              mapboxStyle: lang && lang.indexOf("zh-") > -1 ? "citui3waw00162jo1zcsf1urj" : "cj84s9bet10f52ro2lrna50yg",
              'ocean color': '#b7c7d1',
              onEachFeature: {
                mouseover: function mouseover(e) {
                  this.openPopup(e.latlng);
                }
              },
              formatPopupContent: function formatPopupContent(feature, map) {
                var getPageLang = function getPageLang() {
                  var url = window.location != window.parent.location ? document.referrer : document.location.href;
                  var queryString = '?' + url.split('?')[1];
                  var urlParams = new URLSearchParams(queryString);
                  var lang = urlParams.get('lang');
                  return lang;
                };

                lang = getPageLang();
                document.documentElement.setAttribute('lang', lang);
                var suffix = lang ? "_" + lang : "";
                suffix = suffix.replace("-", "_");
                var name = feature.properties["name" + suffix];
                var description = feature.properties["description" + suffix];
                var outpost = feature.properties.chinese_outposts;
                return '<div class="popupEntryStyle">' + (!lang ? outpost : "") + (name && outpost && !lang ? "" : "") + (name !== outpost ? name : "") + "</div>" + '<div class="popupEntryStyle">' + description + "</div>";
              },
              zoomSlider: false,
              widgets: [{
                id: '0',
                field: "combat_aircraft",
                input: "checkbox",
                type: "form",
                keys: [{
                  color: '#00B29E',
                  label: "Bomber Aircraft",
                  value: "Bomber Aircraft",
                  form: "line",
                  selected: true
                }, {
                  color: '#00B29E',
                  label: "Fighter Aircraft",
                  value: "Fighter Aircraft",
                  form: "line",
                  selected: true
                }]
              }, {
                id: '1',
                field: "missile_platforms",
                type: "form",
                input: "checkbox",
                keys: [{
                  color: '#a77db2',
                  patter: 'stripe',
                  label: "Anti-Ship Cruise Missiles",
                  value: "Anti-Ship Cruise Missiles",
                  form: "line",
                  selected: true
                }, {
                  color: '#a77db2',
                  label: "SAM Sites",
                  value: "SAM Sites",
                  form: "line",
                  selected: true
                }]
              }, {
                id: '3',
                field: "radar",
                type: "form",
                input: "checkbox",
                keys: [{
                  color: '#2e8ebc',
                  label: "Radar Range (targets at 25,000 feet)",
                  value: "Radar Range (targets at 25,000 feet)",
                  form: "line",
                  selected: true
                }, {
                  color: '#2e8ebc',
                  label: "Radar Range (targets at sea level)",
                  value: "Radar Range (targets at sea level)",
                  form: "line",
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
window.capitalize = helpers["a" /* capitalize */]; // import { examples, arcticJamming } from "./examples.js";
// arcticJamming();
// examples()


china();

window.convertType = function (value) {
  var v = Number(value);
  return !isNaN(v) ? v : value.toLowerCase() === "undefined" ? undefined : value.toLowerCase() === "null" ? null : value.toLowerCase() === "true" ? true : value.toLowerCase() === "false" ? false : value;
};

if (typeof window.CustomEvent !== "function") {
  var CustomEvent = function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };
    var evt = document.createEvent("CustomEvent");
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
  return s.replace(/[\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3N0eWxlS2V5LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9oYW5kbGVGZWF0dXJlRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdHlsZVBvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9zdHlsZU5vblBvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWtlR2VvSnNvbk9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21ha2VMYXllcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BhcnNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0N1c3RvbU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFrZURvY3VtZW50Tm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hcFdpZGdldHNUb1N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWtlV2lkZ2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5pdFdpdGhTcHJlYWRzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/N2VlNSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5pdFdpdGhvdXRTcHJlYWRzaGVldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFrZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hpbmEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNvbG9yU2NhbGUiLCJjb3VudCIsImluZGV4Iiwic2NhbGVPbmUiLCJjaHJvbWEiLCJjdWJlaGVsaXgiLCJodWUiLCJsaWdodG5lc3MiLCJzY2FsZSIsImNvbG9ycyIsInNjYWxlVHdvIiwiZ2FtbWEiLCJyZXZlcnNlIiwiaSIsImNvbG9yIiwic2F0dXJhdGUiLCJoZXgiLCJwdXNoIiwibGluZVdlaWdodHMiLCJsaW5lRGFzaEFycmF5cyIsImV4dGVybmFsTGluayIsInJlbW92ZSIsImNvbnZlcnRUeXBlIiwidmFsdWUiLCJ2IiwiTnVtYmVyIiwiaXNOYU4iLCJ0b0xvd2VyQ2FzZSIsInVuZGVmaW5lZCIsImNhcGl0YWxpemUiLCJzdHJpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwibG9hZCIsInVybCIsImVsZW1lbnQiLCJyZXEiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZW5kIiwiaW5uZXJIVE1MIiwicmVzcG9uc2VUZXh0IiwibWFrZURyb3Bkb3duT3B0aW9ucyIsIm9wdGlvbnMiLCJ4IiwiZ3JvdXBzIiwid2lkZ2V0cyIsImtleXMiLCJncm91cEJ5IiwiY2hvaWNlcyIsIk9iamVjdCIsIm1hcCIsImciLCJ6IiwiaWQiLCJsYWJlbCIsInRyaW0iLCJwYXJzZUludCIsImRpc2FibGVkIiwicmVtb3ZlSXRlbUJ1dHRvbiIsIm1heEl0ZW1Db3VudCIsIm1heGltdW0iLCJjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzIiwidGVtcGxhdGUiLCJfdGhpcyIsIml0ZW0iLCJjbGFzc05hbWVzIiwiZGF0YSIsImtleSIsImZpbmQiLCJrZXlTdHlsZSIsInR5cGUiLCJmb3JtcyIsImsiLCJpbmRleE9mIiwic3R5bGVPcHRpb25zIiwic3R5bGVLZXkiLCJtYXJrdXAiLCJhY3RpdmUiLCJjbGFzcyIsInN2ZyIsIndpbmRvdyIsImJ0b2EiLCJjaG9pY2UiLCJpdGVtQ2hvaWNlIiwiaXRlbURpc2FibGVkIiwiaXRlbVNlbGVjdGFibGUiLCJjb25maWciLCJpdGVtU2VsZWN0VGV4dCIsImdyb3VwSWQiLCJmZWF0dXJlIiwiZ3JvdXAiLCJpY29uU2l6ZSIsImljb25zaXplIiwiZGl2aWRlcnMiLCJzaXplIiwia2V5Q29sb3IiLCJ3IiwiZm9ybUtleVdpZGdldCIsImNvbG9yS2V5V2lkZ2V0IiwiY29sb3JLZXkiLCJwcm9wZXJ0aWVzIiwiZmllbGQiLCJmb3JtS2V5IiwiZXZlcnkiLCJhdmVyYWdlIiwiZm9ybSIsIm9jZWFuY29sb3IiLCJsZW5ndGgiLCJkZWZhdWx0Q29sb3IiLCJkYXJrZW4iLCJpY29uIiwic2x1ZyIsInJlcGxhY2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdmdDb250ZW50IiwibWF0Y2giLCJwMSIsInAyIiwicDMiLCJwYXR0ZXJuIiwiY29sb3JUd28iLCJjb2xvck9uZSIsImhhbmRsZUZlYXR1cmVFdmVudHMiLCJsYXllciIsImV2ZW50T3B0aW9ucyIsIm9uZWFjaGZlYXR1cmUiLCJjbGljayIsImhhbmRsZUxheWVyQ2xpY2siLCJsZWFmbGV0IiwiZm9yRWFjaCIsImxpc3RlbmVyIiwib24iLCJwb3B1cENvbnRlbnQiLCJmb3JtYXRwb3B1cGNvbnRlbnQiLCJmb3JtYXRQb3B1cENvbnRlbnQiLCJiaW5kUG9wdXAiLCJjb250ZW50IiwicCIsInBvcHVwaGVhZGVycyIsInBvcHVwY29udGVudCIsImZpbHRlciIsImpvaW4iLCJsaW5rIiwiaHlwZXJsaW5rIiwiZXh0ZXJuYWxMaW5rQ29udGVudCIsImV4dGVybmFsbGlua3RleHQiLCJsYW5nIiwidHJhbnNsYXRhYmxlU3RyaW5ncyIsInRyYW5zbGF0aW9ucyIsInNvcnQiLCJhIiwiYiIsInQiLCJyZSIsIlJlZ0V4cCIsImVzY2FwZSIsImlzU3BpZGVyZmllZCIsIl9wcmVTcGlkZXJmeUxhdGxuZyIsIl9sYXllcnMiLCJsIiwidW5zcGlkZXJmeSIsIl9fcGFyZW50IiwidmFsdWVzIiwiX2dyb3VwIiwiX2ZlYXR1cmVHcm91cCIsIl9zcGlkZXJmaWVkIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImQiLCJzdHlsZSIsIm9wYWNpdHkiLCJzdHlsZVBvaW50IiwibGF0bG5nIiwicG9pbnRTdHlsZSIsIkN1c3RvbUljb24iLCJMIiwiSWNvbiIsImV4dGVuZCIsImljb25BbmNob3IiLCJpY29uYW5jaG9yIiwibm9uUG9pbnRTdHlsZSIsImRpdkljb24iLCJ0aGlzRm9ybUtleVdpZGdldCIsInRoaXNDb2xvcktleVdpZGdldCIsInNwbGl0IiwiY2xhc3NOYW1lIiwiaHRtbCIsImVuY29kZVVSSSIsImljb25VcmwiLCJtYXJrZXIiLCJzdHlsZU5vblBvaW50IiwiZm9ybUtleUZvcm0iLCJyZWR1Y2UiLCJjIiwiY29sb3JLZXlGb3JtIiwiZiIsIndlaWdodCIsImxpbmVDYXAiLCJkYXNoQXJyYXkiLCJmaWxsUnVsZSIsImxpbmVKb2luIiwicGF0dGVybk9wdGlvbnMiLCJzcGFjZVdlaWdodCIsInNwYWNlQ29sb3IiLCJzcGFjZU9wYWNpdHkiLCJhbmdsZSIsIlN0cmlwZVBhdHRlcm4iLCJzaGFwZU9wdGlvbnMiLCJ5IiwicmFkaXVzIiwiZmlsbCIsInN0cm9rZSIsImZpbGxDb2xvciIsImZpbGxPcGFjaXR5Iiwic2hhcGUiLCJQYXR0ZXJuQ2lyY2xlIiwid2lkdGgiLCJoZWlnaHQiLCJQYXR0ZXJuIiwiYWRkU2hhcGUiLCJhZGRUbyIsImZpbGxQYXR0ZXJuIiwibGluZUNvbG9yIiwibGluZVdlaWdodCIsImxpbmVPcGFjaXR5IiwiZ2VvbWV0cnkiLCJicmlnaHRlbiIsIm1ha2VHZW9Kc29uT3B0aW9ucyIsImNvbG9yS2V5V2lkZ2V0cyIsImZvcm1LZXlXaWRnZXRzIiwiZmlsdGVycyIsIm9uRWFjaEZlYXR1cmUiLCJiYWNrZ3JvdW5kT3B0aW9ucyIsInBvaW50VG9MYXllciIsImZvcmVncm91bmRPcHRpb25zIiwibWFrZUxheWVycyIsImdlb0pzb25PcHRpb25zIiwiZ2VvanNvbm9wdGlvbnMiLCJqc29uIiwiY2x1c3RlckNvbG9yIiwiY29sb3JLZXlzIiwid2lkZ2V0IiwiY29sbGVjdGlvbk5hbWUiLCJmZWF0dXJlcyIsImFsbFBvaW50cyIsIk1hcmtlckNsdXN0ZXJHcm91cCIsInNob3dDb3ZlcmFnZU9uSG92ZXIiLCJ6b29tVG9Cb3VuZHNPbkNsaWNrIiwibWF4Q2x1c3RlclJhZGl1cyIsImNsdXN0ZXJkaXN0YW5jZSIsIk5hTiIsImljb25DcmVhdGVGdW5jdGlvbiIsImNsdXN0ZXIiLCJnZXRDaGlsZENvdW50IiwiaGFzTGluZUZlYXR1cmVzIiwic29tZSIsIm9wdGlvbiIsImxvY2FsZUNvbXBhcmUiLCJnZW9Kc29uIiwiYWRkTGF5ZXIiLCJnZXRMYXllcnMiLCJlIiwiaGFuZGxlQ2x1c3RlckNsaWNrIiwiX2xlYWZsZXRfaWQiLCJzcGlkZXJmeSIsImdldEFsbENoaWxkTWFya2VycyIsIm0iLCJnZXRFbGVtZW50IiwicGFyc2VMYW5ndWFnZURhdGEiLCJsYW5ndWFnZURhdGEiLCJyb3ciLCJjb2x1bW4iLCJjb2x1bW5OYW1lIiwicGFyc2VMZWdlbmREYXRhIiwiY29sb3JTY2FsZSIsImxlZ2VuZEl0ZW1zIiwic2VsZWN0ZWQiLCJjb2xvclZhbCIsInBhcnNlTWV0YURhdGEiLCJwYXJzZVdpZGdldERhdGEiLCJtZXRhRGF0YSIsInByb2Nlc3MiLCJwcm9wZXJ0eSIsIm1hcElkIiwiQ3VzdG9tTWFwIiwiY29udGFpbmVyIiwiYWxsIiwicmVzZXRGaWx0ZXJzIiwicmVtb3ZlR3JvdXBzIiwicmVtb3ZlTGF5ZXIiLCJyZW5kZXIiLCJtaW5ab29tIiwibWluem9vbSIsIm1heFpvb20iLCJtYXh6b29tIiwibWF4Qm91bmRzIiwibWF4Ym91bmRzIiwic3dib3VuZHMiLCJuZWJvdW5kcyIsInNjcm9sbFdoZWVsWm9vbSIsImlubmVyV2lkdGgiLCJ6b29tQ29udHJvbCIsImhhc093blByb3BlcnR5Iiwiem9vbXNsaWRlciIsImF0dHJpYnV0aW9uQ29udHJvbCIsImxvYWRldmVudCIsImFkZGV2ZW50Iiwic2V0VmlldyIsImNlbnRlciIsInpvb20iLCJ0aWxlTGF5ZXIiLCJtYXBib3hzdHlsZSIsImNvbnRyb2wiLCJmdWxsc2NyZWVuIiwiQ29udHJvbCIsIkZ1bGxzY3JlZW4iLCJhZGRDb250cm9sIiwiYXR0cmlidXRpb24iLCJwb3NpdGlvbiIsInNldFByZWZpeCIsIm1ha2VEb2N1bWVudE5vZGVzIiwibmV3U2VjdGlvbkhUTUwiLCJ0aXRsZSIsImxvZ28iLCJkZXNjcmlwdGlvbiIsImluc3RydWN0aW9ucyIsInRpdGxlY2FyZGNvbnRlbnQiLCJib2R5IiwibmV3RGlhbG9nSFRNTCIsInRpdGxlY2FyZHRpdGxlIiwib3ZlcmZsb3ciLCJkaWFsb2dFbCIsImdldEVsZW1lbnRCeUlkIiwibWFpbkVsIiwiZGlhbG9nVHJpZ2dlciIsImRpYWxvZ0JveCIsIkExMXlEaWFsb2ciLCJkaWFsb2ciLCJzaG93IiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9ncmFtIiwibWV0YUxvY2FsZU9HIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIm1ldGFUeXBlT0ciLCJtZXRhV2lkdGhPRyIsIm1ldGFIZWlnaHRPRyIsIm1ldGFUd2l0dGVyQ2FyZE9HIiwibWV0YVRpdGxlT0ciLCJtZXRhVGl0bGVUd2l0dGVyIiwibWV0YURlc2NyaXB0aW9uT0ciLCJtZXRhRGVzY3JpcHRpb25Ud2l0dGVyIiwibWV0YUltYWdlT0ciLCJzY3JlZW5zaG90IiwibWV0YUltYWdlVHdpdHRlciIsImlubmVyVGV4dCIsImJhY2tncm91bmRJbWFnZSIsImhyZWYiLCJ3ZWJzaXRlIiwibWFwV2lkZ2V0c1RvU3RhdGUiLCJ3aWRnZXRDb250ZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ0YWJsZXMiLCJ0YWJsZSIsImZldGNoIiwiYXBpa2V5IiwidGhlbiIsInJlc3BvbnNlcyIsInJlc3BvbnNlIiwianNvbnMiLCJjb25jYXQiLCJjb25zb2xlIiwibG9nIiwiZmVhdHVyZUdyb3VwcyIsImJveCIsImluaXRpYWxpemVkIiwiQ2hvaWNlcyIsImhhbmRsZVJlc2V0Iiwic2VsZWN0cyIsImNoZWNrcyIsInNlYXJjaCIsInRvZ2dsZSIsImlucHV0cyIsImlucHV0IiwiaGFuZGxlQ2hhbmdlIiwiZXZ0IiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiZmlyZUV2ZW50IiwibWFwX2lkIiwidHJhbnNsYXRhYmxlTm9kZXMiLCJlbCIsImtleWxlc3NXaWRnZXRzIiwic2VsZWN0aW9ucyIsInBvc3NpYmxlQ2hlY2tzIiwibyIsIm5hbWUiLCJwb3NzaWJsZU9wdGlvbnMiLCJwb3NzaWJsZVF1ZXJpZXMiLCJxdWVyeSIsImJvb2wiLCJ3aXRoRGlhY3JpdGljcyIsIndpdGhvdXREaWFjcml0aWNzIiwibGF0aW5pc2UiLCJsYXllcnMiLCJncm91cGluZyIsIm1ha2VXaWRnZXRzIiwiYm94Q29udGVudCIsImxlZ2VuZERhdGEiLCJyZWZlcmVuY2UiLCJmZWVkIiwiZW50cnkiLCJmb3JtYXRXaWRnZXRzIiwibm9kZXMiLCJsYWJlbFRleHQiLCJpdGVtVGV4dCIsIm9mZnNldEhlaWdodCIsImZvbnRTaXplIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9mZnNldCIsInRyYW5zZm9ybSIsIndpZGdldE5vZGVzIiwiZHJvcGRvd25PcHRpb25zIiwid2lkZ2V0VGl0bGUiLCJpbml0V2l0aFNwcmVhZHNoZWV0IiwiZGF0YVVSTCIsImdvb2dsZVNoZWV0IiwidHdvRF9wcm9wZXJpdGVzIiwiZGVmYXVsdCIsIm1hcElEIiwicmVmZXJlbmNlU2hlZXRzIiwicmVmZXJlbmNlU2hlZXRVUkxTIiwidSIsImZvb3RlciIsImZvb3Rlck5vZGUiLCJwZW5VbHRpbWF0ZU5vZGUiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJpbml0V2l0aG91dFNwcmVhZHNoZWV0IiwiZm9ybWF0VG9vbGJveCIsInJlc3AiLCJmb3JtYXR0b29sYm94IiwiYXBpS2V5IiwibG9jYXRpb24iLCJwYXJlbnQiLCJyZWZlcnJlciIsImV4ZWMiLCJsZWFmbGV0TG9hZGVkIiwicHJpbWFyeUpzRmlsZXMiLCJzZWNvbmRhcnlKc0ZpbGVzIiwiaGFuZGxlTG9hZExlYWZsZXQiLCJmaWxlIiwianNMaW5rIiwic3JjIiwib25sb2FkIiwiaW1wb3J0RmlsZXMiLCJtYWtlTWFwIiwic2NyaXB0c0xvYWRlZCIsImluaXQiLCJvY2VhbkNvbG9yIiwicmVxdWlyZSIsImNoaW5hIiwiY2x1c3RlckRpc3RhbmNlIiwiQXR0cmlidXRpb24iLCJMb2dvIiwibWFwYm94U3R5bGUiLCJtb3VzZW92ZXIiLCJvcGVuUG9wdXAiLCJnZXRQYWdlTGFuZyIsInF1ZXJ5U3RyaW5nIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ2V0IiwiZG9jdW1lbnRFbGVtZW50Iiwic3VmZml4Iiwib3V0cG9zdCIsImNoaW5lc2Vfb3V0cG9zdHMiLCJ6b29tU2xpZGVyIiwicGF0dGVyIiwiQ3VzdG9tRXZlbnQiLCJldmVudCIsInBhcmFtcyIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiZGV0YWlsIiwiaW5pdEN1c3RvbUV2ZW50IiwicHJvdG90eXBlIiwiRXZlbnQiLCJwcm9wZXJ0eTEiLCJwcm9wZXJ0eTIiLCJ2YWwiLCJzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FB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Q0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7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QUwsQ0FBWSxVQUFTdEosTUFBVCxFQUFpQm9CLElBQWpCLEVBQXVCO0FBQ2pDLFFBQUltYixHQUFHLEdBQUduYixJQUFJLENBQUNpYixTQUFELENBQWQ7QUFDQXJjLFVBQU0sQ0FBQ3VjLEdBQUQsQ0FBTixHQUFjdmMsTUFBTSxDQUFDdWMsR0FBRCxDQUFOLElBQWUsRUFBN0I7QUFDQXZjLFVBQU0sQ0FBQ3VjLEdBQUQsQ0FBTixDQUFZcGUsSUFBWixDQUFpQmlELElBQWpCO0FBQ0EsV0FBT3BCLE1BQVA7QUFDRCxHQUxELEVBS0csRUFMSCxDQVBKO0FBYUQsQ0FkRDs7QUFnQkErRyxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsVUFBU3dWLENBQVQsRUFBWTtBQUMxQixTQUFPQSxDQUFDLENBQUNwWSxPQUFGLENBQVUsdUJBQVYsRUFBbUMsTUFBbkMsQ0FBUDtBQUNELENBRkQsQyIsImZpbGUiOiJtYWtlTWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcbiIsIi8vIGltcG9ydCBzdHlsZUtleSBmcm9tICcuL3N0eWxlS2V5LmpzJ1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbG9yU2NhbGUoY291bnQsIGluZGV4KSB7XG4gIHZhciBzY2FsZU9uZSA9IGNocm9tYVxuICAgIC5jdWJlaGVsaXgoKVxuICAgIC5odWUoMC41KVxuICAgIC5saWdodG5lc3MoWzAuNCwgMC42XSlcbiAgICAuc2NhbGUoKVxuICAgIC5jb2xvcnMoY291bnQgKiAyKVxuICB2YXIgc2NhbGVUd28gPSBjaHJvbWFcbiAgICAuY3ViZWhlbGl4KClcbiAgICAuaHVlKDEpXG4gICAgLmdhbW1hKDAuNSlcbiAgICAuc2NhbGUoKVxuICAgIC5jb2xvcnMoY291bnQgKiAyKVxuICAgIC5yZXZlcnNlKClcbiAgdmFyIHNjYWxlID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICB2YXIgY29sb3IgPSBpICUgMiA9PT0gMCA/IHNjYWxlT25lW2kgKiAyXSA6IHNjYWxlVHdvW2kgKiAyXVxuICAgIGNvbG9yID0gY2hyb21hKGNvbG9yKVxuICAgICAgLnNhdHVyYXRlKClcbiAgICAgIC5oZXgoKVxuICAgIHNjYWxlLnB1c2goY29sb3IpXG4gIH1cblxuICByZXR1cm4gc2NhbGVcbn1cblxuZXhwb3J0IHZhciBsaW5lV2VpZ2h0cyA9IFtbMywgM10sIFs1LCAyXSwgWzQsIDMuNV0sIFs3LCAzXSwgWzQsIDRdXVxuZXhwb3J0IHZhciBsaW5lRGFzaEFycmF5cyA9IFtcbiAgW251bGwsICc2LDknXSxcbiAgW251bGwsIG51bGxdLFxuICBbbnVsbCwgJzYsMTInXSxcbiAgW251bGwsIG51bGxdLFxuICBbJzE4LDI0JywgJzE4LDI0J11cbl1cbmV4cG9ydCB2YXIgZXh0ZXJuYWxMaW5rID1cbiAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxNVwiIHZpZXdCb3g9XCIwIDAgMTUgMTVcIj48cGF0aCBkPVwiTTcuNDksMFYxLjY3SDEuNjhWMTMuMzJIMTMuMzJWNy41MkgxNXY1LjcyYTEuNzYsMS43NiwwLDAsMS0uNDIsMS4xOSwxLjY0LDEuNjQsMCwwLDEtMS4xMy41NkgxLjc0YTEuNjcsMS42NywwLDAsMS0xLjE2LS40MUExLjYxLDEuNjEsMCwwLDEsMCwxMy40OHYtLjI3QzAsOS40LDAsNS42LDAsMS44QTEuODMsMS44MywwLDAsMSwuNTguNGExLjUzLDEuNTMsMCwwLDEsMS0uMzloNlpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAwKVwiLz48cGF0aCBkPVwiTTkuMTcsMS42N1YwSDE1VjUuODRIMTMuMzR2LTNoMGMtLjA1LjA1LS4xMS4xLS4xNi4xNmwtLjQ1LjQ2LTEuMywxLjI5LS44NC44NC0uODkuOS0uODguODctLjg5LjljLS4yOC4yOS0uNTcuNTctLjg2Ljg2TDYuMTYsMTBsLS44OC44N2ExLjgzLDEuODMsMCwwLDEtLjEzLjE2TDQsOS44NmwwLDBMNS4zNiw4LjQ3bC45NS0xLC43NS0uNzUsMS0xTDguODcsNWwxLS45NC44NS0uODYuOTItLjkxLjU2LS41OFpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAwKVwiLz48L3N2Zz4nXG5leHBvcnQgdmFyIHJlbW92ZSA9XG4gICc8c3ZnIHZpZXdCb3g9XCIwIDAgMjEgMjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGcgZmlsbD1cIiMwMDBcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+PHBhdGggZD1cIk0yLjU5Mi4wNDRsMTguMzY0IDE4LjM2NC0yLjU0OCAyLjU0OEwuMDQ0IDIuNTkyelwiLz48cGF0aCBkPVwiTTAgMTguMzY0TDE4LjM2NCAwbDIuNTQ4IDIuNTQ4TDIuNTQ4IDIwLjkxMnpcIi8+PC9nPjwvc3ZnPidcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUeXBlKHZhbHVlKSB7XG4gIHZhciB2ID0gTnVtYmVyKHZhbHVlKVxuICByZXR1cm4gIWlzTmFOKHYpXG4gICAgPyB2XG4gICAgOiB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAndW5kZWZpbmVkJ1xuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ251bGwnXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJ1xuICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ2ZhbHNlJ1xuICAgICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgICAgOiB2YWx1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZCh1cmwsIGVsZW1lbnQpIHtcbiAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gIHJlcS5vcGVuKCdHRVQnLCB1cmwsIGZhbHNlKVxuICByZXEuc2VuZChudWxsKVxuICBlbGVtZW50LmlubmVySFRNTCA9IHJlcS5yZXNwb25zZVRleHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VEcm9wZG93bk9wdGlvbnMob3B0aW9ucywgeCkge1xuICB2YXIgZ3JvdXBzID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZ3JvdXBCeSgnZ3JvdXAnKVxuICB2YXIgY2hvaWNlcyA9IE9iamVjdC5rZXlzKGdyb3VwcykubWFwKGZ1bmN0aW9uKGcsIHopIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHosXG4gICAgICBsYWJlbDogZy50cmltKCkgJiYgTnVtYmVyLmlzTmFOKHBhcnNlSW50KGcsIDEwKSkgPyBnIDogJycsXG4gICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICBjaG9pY2VzOiBncm91cHNbZ11cbiAgICB9XG4gIH0pXG4gIHJldHVybiB7XG4gICAgY2hvaWNlczogY2hvaWNlcyxcbiAgICByZW1vdmVJdGVtQnV0dG9uOiB0cnVlLFxuICAgIG1heEl0ZW1Db3VudDogb3B0aW9ucy53aWRnZXRzW3hdLm1heGltdW0sXG4gICAgY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlczogZnVuY3Rpb24gY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlcyh0ZW1wbGF0ZSkge1xuICAgICAgdmFyIF90aGlzID0gdGhpc1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpdGVtOiBmdW5jdGlvbiBpdGVtKGNsYXNzTmFtZXMsIGRhdGEpIHtcbiAgICAgICAgICB2YXIga2V5ID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZmluZChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICByZXR1cm4gdi52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBkYXRhLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICB9KVxuICAgICAgICAgIHZhciBrZXlTdHlsZVxuXG4gICAgICAgICAgc3dpdGNoIChvcHRpb25zLndpZGdldHNbeF0udHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgICAgICAgdmFyIGZvcm1zID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMubWFwKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGsudmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdmFyIGkgPSBmb3Jtcy5pbmRleE9mKGtleS52YWx1ZS50b0xvd2VyQ2FzZSgpKVxuXG4gICAgICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgIGZvcm1zOiBmb3JtcyxcbiAgICAgICAgICAgICAgbWFwOiBvcHRpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgbWFwOiBvcHRpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG1hcmt1cCA9XG4gICAgICAgICAgICAnPGRpdiBzdHlsZT1cImJvcmRlci1jb2xvcjonICtcbiAgICAgICAgICAgIGtleS5jb2xvciArXG4gICAgICAgICAgICAnXCIgY2xhc3M9XCInICtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuaXRlbSArXG4gICAgICAgICAgICAnXCIgZGF0YS1pdGVtIGRhdGEtaWQ9XCInICtcbiAgICAgICAgICAgIGRhdGEuaWQgK1xuICAgICAgICAgICAgJ1wiIGRhdGEtdmFsdWU9XCInICtcbiAgICAgICAgICAgIGRhdGEudmFsdWUgK1xuICAgICAgICAgICAgJ1wiICcgK1xuICAgICAgICAgICAgKGRhdGEuYWN0aXZlID8gJ2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCInIDogJycpICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAoZGF0YS5kaXNhYmxlZCA/ICdhcmlhLWRpc2FibGVkPVwidHJ1ZVwiJyA6ICcnKSArXG4gICAgICAgICAgICAnPjxzcGFuIGNsYXNzPVwiJyArXG4gICAgICAgICAgICBrZXlTdHlsZS5jbGFzcyArXG4gICAgICAgICAgICAnS2V5XCIgJyArXG4gICAgICAgICAgICAnc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnJyArXG4gICAgICAgICAgICBrZXlTdHlsZS5zdmcgK1xuICAgICAgICAgICAgJ1wiKT48L3NwYW4+ICcgK1xuICAgICAgICAgICAgY2FwaXRhbGl6ZShkYXRhLmxhYmVsKSArXG4gICAgICAgICAgICAnPGJ1dHRvbiBzdHlsZT1cImJvcmRlci1sZWZ0OiAxcHggc29saWQgJyArXG4gICAgICAgICAgICBrZXkuY29sb3IgK1xuICAgICAgICAgICAgJzsgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJyArXG4gICAgICAgICAgICB3aW5kb3cuYnRvYShyZW1vdmUpICtcbiAgICAgICAgICAgICdcXCcpXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2hvaWNlc19fYnV0dG9uXCIgZGF0YS1idXR0b249XCJcIiBhcmlhLWxhYmVsPVwiUmVtb3ZlIGl0ZW1cIj5SZW1vdmUgaXRlbTwvYnV0dG9uPjwvZGl2PidcbiAgICAgICAgICByZXR1cm4gdGVtcGxhdGUobWFya3VwKVxuICAgICAgICB9LFxuICAgICAgICBjaG9pY2U6IGZ1bmN0aW9uIGNob2ljZShjbGFzc05hbWVzLCBkYXRhKSB7XG4gICAgICAgICAgdmFyIGtleSA9IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLmZpbmQoZnVuY3Rpb24odikge1xuICAgICAgICAgICAgcmV0dXJuIHYudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZGF0YS52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgICB2YXIga2V5U3R5bGVcblxuICAgICAgICAgIHN3aXRjaCAob3B0aW9ucy53aWRnZXRzW3hdLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdmb3JtJzpcbiAgICAgICAgICAgIHZhciBmb3JtcyA9IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgICAgIHJldHVybiBrLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICAgIGZvcm1zOiBmb3JtcyxcbiAgICAgICAgICAgICAgbWFwOiBvcHRpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgICAgIGJyZWFrXG5cbiAgICAgICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgbWFwOiBvcHRpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG1hcmt1cCA9XG4gICAgICAgICAgICAnIDxkaXYgY2xhc3M9XCInICtcbiAgICAgICAgICAgIGNsYXNzTmFtZXMuaXRlbSArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgY2xhc3NOYW1lcy5pdGVtQ2hvaWNlICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICAoZGF0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICA/IGNsYXNzTmFtZXMuaXRlbURpc2FibGVkXG4gICAgICAgICAgICAgIDogY2xhc3NOYW1lcy5pdGVtU2VsZWN0YWJsZSkgK1xuICAgICAgICAgICAgJ1wiIGRhdGEtc2VsZWN0LXRleHQ9XCInICtcbiAgICAgICAgICAgIF90aGlzLmNvbmZpZy5pdGVtU2VsZWN0VGV4dCArXG4gICAgICAgICAgICAnXCIgZGF0YS1jaG9pY2UgJyArXG4gICAgICAgICAgICAoZGF0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICA/ICdkYXRhLWNob2ljZS1kaXNhYmxlZCBhcmlhLWRpc2FibGVkPVwidHJ1ZVwiJ1xuICAgICAgICAgICAgICA6ICdkYXRhLWNob2ljZS1zZWxlY3RhYmxlJykgK1xuICAgICAgICAgICAgJyBkYXRhLWlkPVwiJyArXG4gICAgICAgICAgICBkYXRhLmlkICtcbiAgICAgICAgICAgICdcIiBkYXRhLXZhbHVlPVwiJyArXG4gICAgICAgICAgICBkYXRhLnZhbHVlICtcbiAgICAgICAgICAgICdcIiAnICtcbiAgICAgICAgICAgIChkYXRhLmdyb3VwSWQgPiAwID8gJ3JvbGU9XCJ0cmVlaXRlbVwiJyA6ICdyb2xlPVwib3B0aW9uXCInKSArXG4gICAgICAgICAgICAnPiA8c3BhbiBjbGFzcz1cIicgK1xuICAgICAgICAgICAga2V5U3R5bGUuY2xhc3MgK1xuICAgICAgICAgICAgJ0tleVwiICcgK1xuICAgICAgICAgICAgJ3N0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcJycgK1xuICAgICAgICAgICAga2V5U3R5bGUuc3ZnICtcbiAgICAgICAgICAgICdcIik+PC9zcGFuPiAnICtcbiAgICAgICAgICAgIGNhcGl0YWxpemUoZGF0YS5sYWJlbCkgK1xuICAgICAgICAgICAgJyA8L2Rpdj4gJ1xuICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZShtYXJrdXApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGNhcGl0YWxpemUsIGxvYWQsIGxpbmVXZWlnaHRzLCBsaW5lRGFzaEFycmF5cyB9IGZyb20gXCIuL2hlbHBlcnMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3R5bGVLZXkob3B0aW9ucykge1xuICB2YXIgbWFwID0gb3B0aW9ucy5tYXAsXG4gICAgZmVhdHVyZSA9IG9wdGlvbnMuZmVhdHVyZSxcbiAgICBncm91cCA9IG9wdGlvbnMuZ3JvdXAsXG4gICAga2V5ID0gb3B0aW9ucy5rZXksXG4gICAgaW5kZXggPSBvcHRpb25zLmluZGV4LFxuICAgIGZvcm1zID0gb3B0aW9ucy5mb3JtcyxcbiAgICBpY29uU2l6ZSA9IG1hcC5pY29uc2l6ZSxcbiAgICBkaXZpZGVycyA9IGljb25TaXplLm1hcCgoc2l6ZSkgPT4gc2l6ZSAvIDEyKTtcblxuICB2YXIgY29sb3JzLCBrZXlDb2xvcjtcbiAgdmFyIGtleSA9IGdyb3VwID8gZ3JvdXBbMF0gOiBrZXk7XG5cbiAgZm9yIChsZXQgdyBvZiBtYXAud2lkZ2V0cykge1xuICAgIHZhciBmb3JtS2V5V2lkZ2V0ID0gdy50eXBlID09PSBcImZvcm1cIiA/IHcgOiBudWxsO1xuICAgIHZhciBjb2xvcktleVdpZGdldCA9IHcudHlwZSA9PT0gXCJjb2xvclwiID8gdyA6IG51bGw7XG5cbiAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgdmFyIGNvbG9yS2V5ID0gY29sb3JLZXlXaWRnZXRcbiAgICAgICAgPyBjb2xvcktleVdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1tjb2xvcktleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICB9KVxuICAgICAgICA6IG51bGw7XG5cbiAgICAgIHZhciBmb3JtS2V5ID0gZm9ybUtleVdpZGdldFxuICAgICAgICA/IGZvcm1LZXlXaWRnZXQua2V5cy5maW5kKGZ1bmN0aW9uKGspIHtcbiAgICAgICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgICAgOiBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbZm9ybUtleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICB9KVxuICAgICAgICA6IG51bGw7XG5cbiAgICAgIGtleUNvbG9yID0gY29sb3JLZXkgPyBjb2xvcktleS5jb2xvciA6IGZvcm1LZXkgPyBmb3JtS2V5LmNvbG9yIDogbnVsbDtcblxuICAgICAgaWNvblNpemUgPSBpY29uU2l6ZS5tYXAoKHNpemUpID0+IHNpemUgLyAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWNvblNpemUgPSBpY29uU2l6ZS5tYXAoKHNpemUsIGkpID0+IHNpemUgLyBkaXZpZGVyc1tpXSk7XG4gICAgfVxuXG4gICAga2V5LmNvbG9yID1cbiAgICAgIGdyb3VwICYmXG4gICAgICBncm91cC5ldmVyeShmdW5jdGlvbihnKSB7XG4gICAgICAgIHJldHVybiBnLmNvbG9yO1xuICAgICAgfSlcbiAgICAgICAgPyBjaHJvbWEuYXZlcmFnZShcbiAgICAgICAgICAgIGdyb3VwLm1hcChmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICAgIHJldHVybiBnLmNvbG9yO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIDoga2V5LmNvbG9yO1xuXG4gICAgc3dpdGNoIChrZXkuZm9ybSkge1xuICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAga2V5Q29sb3IgPSBrZXkuY29sb3JcbiAgICAgICAgICA/IGtleS5jb2xvclxuICAgICAgICAgIDogb3B0aW9ucy5tYXAub2NlYW5jb2xvclxuICAgICAgICAgICAgPyBvcHRpb25zLm1hcC5vY2VhbmNvbG9yXG4gICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgaWYgKGZvcm1zICYmIGZvcm1zLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBzdmc7XG4gICAgICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICBjb2xvcnMgPSBbXG4gICAgICAgICAgICAgICAga2V5Q29sb3IgPyBrZXlDb2xvciA6IGNocm9tYShkZWZhdWx0Q29sb3IpLmRhcmtlbigpLFxuICAgICAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgY29sb3JzID0gW1xuICAgICAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKSxcbiAgICAgICAgICAgICAgICBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgY29sb3JzID0gW1wiIzAwMDAwMFwiLCBrZXlDb2xvciA/IGtleUNvbG9yIDogZGVmYXVsdENvbG9yXTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgY29sb3JzID0gW1xuICAgICAgICAgICAgICAgIFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgICAgIGtleUNvbG9yID8ga2V5Q29sb3IgOiBjaHJvbWEoZGVmYXVsdENvbG9yKS5kYXJrZW4oKSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIGNvbG9ycyA9IFtcbiAgICAgICAgICAgICAgICBrZXlDb2xvciA/IGtleUNvbG9yIDogY2hyb21hKGRlZmF1bHRDb2xvcikuZGFya2VuKCksXG4gICAgICAgICAgICAgICAga2V5Q29sb3IgPyBrZXlDb2xvciA6IGNocm9tYShkZWZhdWx0Q29sb3IpLmRhcmtlbigpLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgc3ZnID1cbiAgICAgICAgICAgIFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0OCAxMic+PGxpbmUgeDE9JzAnIHgyPSc0OCcgeTE9JzUwJScgeTI9JzUwJScgc3Ryb2tlPSdcIiArXG4gICAgICAgICAgICBjb2xvcnNbMF0gK1xuICAgICAgICAgICAgXCInIHN0cm9rZS13aWR0aD0nXCIgK1xuICAgICAgICAgICAgbGluZVdlaWdodHNbaW5kZXhdWzBdICtcbiAgICAgICAgICAgIFwiJyBzdHJva2UtbGluZWNhcD0nc3F1YXJlJyBzdHJva2UtZGFzaGFycmF5PSdcIiArXG4gICAgICAgICAgICAoaW5kZXggPT09IDAgPyBcIjE4LDEyXCIgOiBsaW5lRGFzaEFycmF5c1tpbmRleF1bMF0pICtcbiAgICAgICAgICAgIFwiJy8+PGxpbmUgeDE9JzAnIHgyPSc0OCcgeTE9JzUwJScgeTI9JzUwJScgc3Ryb2tlPSdcIiArXG4gICAgICAgICAgICBjb2xvcnNbMV0gK1xuICAgICAgICAgICAgXCInIHN0cm9rZS13aWR0aD0nXCIgK1xuICAgICAgICAgICAgbGluZVdlaWdodHNbaW5kZXhdWzFdICtcbiAgICAgICAgICAgIFwiJyBzdHJva2UtbGluZWNhcD0nc3F1YXJlJyBzdHJva2UtZGFzaGFycmF5PSdcIiArXG4gICAgICAgICAgICAoaW5kZXggPT09IDQgPyBcIjE4LDEyXCIgOiBsaW5lRGFzaEFycmF5c1tpbmRleF1bMV0pICtcbiAgICAgICAgICAgIFwiJy8+PC9zdmc+XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3ZnID1cbiAgICAgICAgICAgIFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0OCAxMic+PGxpbmUgeDE9JzAnIHgyPSc0OCcgeTE9JzUwJScgeTI9JzUwJScgc3Ryb2tlPSdcIiArXG4gICAgICAgICAgICBrZXlDb2xvciArXG4gICAgICAgICAgICBcIicgc3Ryb2tlLXdpZHRoPSdcIiArXG4gICAgICAgICAgICAzICtcbiAgICAgICAgICAgIFwiJyBzdHJva2UtbGluZWNhcD0nc3F1YXJlJyBzdHJva2UtZGFzaGFycmF5PSdcIiArXG4gICAgICAgICAgICBcIjMsN1wiICtcbiAgICAgICAgICAgIFwiJy8+PC9zdmc+XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN2ZzogXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiICsgd2luZG93LmJ0b2Eoc3ZnKSxcbiAgICAgICAgICBjbGFzczogXCJsaW5lXCIsXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgXCJpY29uXCI6XG4gICAgICAgIGlmIChrZXkuaWNvbikge1xuICAgICAgICAgIHZhciBzbHVnID0ga2V5LnZhbHVlLnJlcGxhY2UoLyAvZywgXCItXCIpO1xuICAgICAgICAgIGxvYWQoa2V5Lmljb24sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlkZGVuXCIpKTtcbiAgICAgICAgICB2YXIgc3ZnQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlkZGVuXCIpLmlubmVySFRNTDtcblxuICAgICAgICAgIGlmIChjb2xvcktleVdpZGdldCAmJiBrZXlDb2xvcikge1xuICAgICAgICAgICAgc3ZnQ29udGVudCA9IHN2Z0NvbnRlbnQucmVwbGFjZShcbiAgICAgICAgICAgICAgLygoXFxiZmlsbD1cIiMpKChbMC1hLWZBLUZdezJ9KXszfXwoWzAtOWEtZkEtRl0pezN9KVwiKS9naSxcbiAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHN2Z0NvbnRlbnQgPSBzdmdDb250ZW50LnJlcGxhY2UoXG4gICAgICAgICAgICAgIC8oPGNpcmNsZSB8PHJlY3RhbmdsZSB8PGVsbGlwc2UgfDxwb2x5Z29uIHw8cGF0aCApL2csXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKG1hdGNoLCBwMSwgcDIsIHAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoLnJlcGxhY2UobWF0Y2gsIG1hdGNoICsgJ2ZpbGw9XCInICsga2V5Q29sb3IgKyAnXCIgJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc3ZnID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiICsgd2luZG93LmJ0b2Eoc3ZnQ29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3ZnID1cbiAgICAgICAgICAgIFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxcIiArXG4gICAgICAgICAgICB3aW5kb3cuYnRvYShcbiAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCInICtcbiAgICAgICAgICAgICAgICBpY29uU2l6ZVswXSAvIDIgK1xuICAgICAgICAgICAgICAgICdcIiBjeT1cIicgK1xuICAgICAgICAgICAgICAgIGljb25TaXplWzFdIC8gMiArXG4gICAgICAgICAgICAgICAgJ1wiIHI9XCInICtcbiAgICAgICAgICAgICAgICAoaWNvblNpemVbMF0gKyBpY29uU2l6ZVsxXSkgLyA0ICtcbiAgICAgICAgICAgICAgICAnXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgIChrZXlDb2xvciB8fCBrZXkuY29sb3IpICtcbiAgICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgIGNsYXNzOiBrZXkuaWNvbiA/IFwiaWNvblwiIDogXCJjb2xvclwiLFxuICAgICAgICB9O1xuXG4gICAgICBjYXNlIFwicGF0dGVyblwiOlxuICAgICAgICBrZXlDb2xvciA9IGtleS5jb2xvcjtcbiAgICAgICAgdmFyIHN2ZztcblxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICBjYXNlIGtleS5wYXR0ZXJuWzBdLmluZGV4T2YoXCJzdHJpcGVcIikgPiAtMTpcbiAgICAgICAgICAgIHZhciBjb2xvclR3byA9IGtleS5wYXR0ZXJuWzFdO1xuICAgICAgICAgICAgdmFyIGNvbG9yT25lID0ga2V5LnBhdHRlcm5ba2V5LnBhdHRlcm4ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCIgK1xuICAgICAgICAgICAgICB3aW5kb3cuYnRvYShcbiAgICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMiAxMlwiPjxwb2x5Z29uIHBvaW50cz1cIjUuNzMgMCA0LjY3IDAgMCA0LjY2IDAgNS43MSA1LjczIDBcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvck9uZSArXG4gICAgICAgICAgICAgICAgICAnXCIvPjxwb2x5Z29uIHBvaW50cz1cIjIuMjggMCAxLjIyIDAgMCAxLjIyIDAgMi4yNyAyLjI4IDBcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvclR3byArXG4gICAgICAgICAgICAgICAgICAnXCIvPjxwb2x5Z29uIHBvaW50cz1cIjguODUgMCA3Ljc5IDAgMCA3Ljc3IDAgOC44MiA4Ljg1IDBcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvclR3byArXG4gICAgICAgICAgICAgICAgICAnXCIvPjxwb2x5Z29uIHBvaW50cz1cIjEyIDAgMTEuMjQgMCAwIDExLjIgMCAxMiAwLjI2IDEyIDEyIDAuMyAxMiAwXCIgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAgICAgY29sb3JPbmUgK1xuICAgICAgICAgICAgICAgICAgJ1wiLz48cG9seWdvbiBwb2ludHM9XCIxMiAxMC4xMiAxMiA5LjA2IDkuMDUgMTIgMTAuMTEgMTIgMTIgMTAuMTJcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvclR3byArXG4gICAgICAgICAgICAgICAgICAnXCIvPjxwb2x5Z29uIHBvaW50cz1cIjEyIDMuNTIgMTIgMi40NiAyLjQzIDEyIDMuNDkgMTIgMTIgMy41MlwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yVHdvICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PHBvbHlnb24gcG9pbnRzPVwiMTIgNi45NiAxMiA1LjkgNS44OCAxMiA2Ljk0IDEyIDEyIDYuOTZcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBjb2xvck9uZSArXG4gICAgICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBrZXkucGF0dGVyblswXS5pbmRleE9mKFwiZG90XCIpID4gLTE6XG4gICAgICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCIgK1xuICAgICAgICAgICAgICB3aW5kb3cuYnRvYShcbiAgICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMy4wNlwiIGhlaWdodD1cIjE1LjFcIiB2aWV3Qm94PVwiMCAwIDEyIDEyXCI+PHRpdGxlPnN0cmlwZXM8L3RpdGxlPjxwYXRoIGQ9XCJNNS40OSwxQTEuMTYsMS4xNiwwLDEsMSw0LjMzLS4xNiwxLjE2LDEuMTYsMCwwLDEsNS40OSwxWk00LjMzLDMuNzdBMS4xNiwxLjE2LDAsMSwwLDUuNDksNC45MywxLjE1LDEuMTUsMCwwLDAsNC4zMywzLjc3Wm0wLDMuOTNBMS4xNiwxLjE2LDAsMSwwLDUuNDksOC44NiwxLjE1LDEuMTUsMCwwLDAsNC4zMyw3LjdabTAsMy45M2ExLjE2LDEuMTYsMCwxLDAsMS4xNiwxLjE2QTEuMTUsMS4xNSwwLDAsMCw0LjMzLDExLjYzWk0xMS41LS4xNkExLjE2LDEuMTYsMCwxLDAsMTIuNjYsMSwxLjE2LDEuMTYsMCwwLDAsMTEuNS0uMTZabTAsMy45M2ExLjE2LDEuMTYsMCwxLDAsMS4xNiwxLjE2QTEuMTYsMS4xNiwwLDAsMCwxMS41LDMuNzdabTAsMy45M2ExLjE2LDEuMTYsMCwxLDAsMS4xNiwxLjE2QTEuMTYsMS4xNiwwLDAsMCwxMS41LDcuN1ptMCwzLjkzYTEuMTYsMS4xNiwwLDEsMCwxLjE2LDEuMTZBMS4xNiwxLjE2LDAsMCwwLDExLjUsMTEuNjNaTTcuOTItMS4xNkExLjE2LDEuMTYsMCwwLDAsNi43NiwwLDEuMTYsMS4xNiwwLDAsMCw3LjkyLDEuMTYsMS4xNiwxLjE2LDAsMCwwLDkuMDcsMCwxLjE2LDEuMTYsMCwwLDAsNy45Mi0xLjE2Wm0wLDMuOTNBMS4xNiwxLjE2LDAsMSwwLDkuMDcsMy45MywxLjE2LDEuMTYsMCwwLDAsNy45MiwyLjc3Wm0wLDMuOTNBMS4xNiwxLjE2LDAsMSwwLDkuMDcsNy44NiwxLjE2LDEuMTYsMCwwLDAsNy45Miw2LjdabTAsMy45M2ExLjE2LDEuMTYsMCwxLDAsMS4xNSwxLjE2QTEuMTYsMS4xNiwwLDAsMCw3LjkyLDEwLjYzWk0uNzUtMS4xNkExLjE2LDEuMTYsMCwwLDAtLjQxLDAsMS4xNiwxLjE2LDAsMCwwLC43NSwxLjE2LDEuMTYsMS4xNiwwLDAsMCwxLjkxLDAsMS4xNiwxLjE2LDAsMCwwLC43NS0xLjE2Wm0wLDMuOTNBMS4xNiwxLjE2LDAsMSwwLDEuOTEsMy45MywxLjE2LDEuMTYsMCwwLDAsLjc1LDIuNzdabTAsMy45M0ExLjE2LDEuMTYsMCwwLDAtLjQxLDcuODYsMS4xNSwxLjE1LDAsMCwwLC43NSw5LDEuMTUsMS4xNSwwLDAsMCwxLjkxLDcuODYsMS4xNiwxLjE2LDAsMCwwLC43NSw2LjdabTAsMy45M2ExLjE2LDEuMTYsMCwxLDAsMS4xNiwxLjE2QTEuMTYsMS4xNiwwLDAsMCwuNzUsMTAuNjNaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuNyAyKVwiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgICAgIGNvbG9yT25lICtcbiAgICAgICAgICAgICAgICAgICdcIi8+PC9zdmc+J1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICAgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiICtcbiAgICAgICAgICAgICAgd2luZG93LmJ0b2EoXG4gICAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjVcIiBmaWxsPVwiJyArXG4gICAgICAgICAgICAgICAgICBrZXlDb2xvciArXG4gICAgICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3ZnOiBzdmcsXG4gICAgICAgICAgY2xhc3M6IGtleS5wYXR0ZXJuID8gXCJwYXR0ZXJuXCIgOiBcImNvbG9yXCIsXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgXCJzaGFwZVwiOlxuICAgICAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgICAgIHZhciBjb2xvcktleVdpZGdldCA9IG1hcC53aWRnZXRzLmZpbmQoZnVuY3Rpb24odykge1xuICAgICAgICAgICAgcmV0dXJuIHcudHlwZSA9PT0gXCJjb2xvclwiO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBjb2xvcktleSA9IGNvbG9yS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICBrLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1tjb2xvcktleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBrZXlDb2xvciA9IGNvbG9yS2V5ID8gY29sb3JLZXkuY29sb3IgOiBrZXlDb2xvciA/IGtleUNvbG9yIDogbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzdmc7XG5cbiAgICAgICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJyYWluYm93XCIgIHkxPVwiNC41XCIgeDI9XCI5XCIgeTI9XCI0LjVcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBncmFkaWVudFRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0LjUgLTQuNSkgcm90YXRlKDEzNSlcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiM3ZjNjOGRcIi8+PHN0b3Agb2Zmc2V0PVwiMC4zMjVcIiBzdG9wLWNvbG9yPVwiI2U3M2Y3NFwiLz48c3RvcCBvZmZzZXQ9XCIwLjVcIiBzdG9wLWNvbG9yPVwiI2YyYjcwMVwiLz48c3RvcCBvZmZzZXQ9XCIwLjY3NVwiIHN0b3AtY29sb3I9XCIjMTFhNTc5XCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiIzM5NjlhY1wiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB4PVwiMy4yNVwiIHk9XCIxLjc1XCIgd2lkdGg9XCI5XCIgaGVpZ2h0PVwiOVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0LjUgLTQuNSkgcm90YXRlKDQ1KVwiICcgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyAncGFpbnQtb3JkZXI9XCJzdHJva2VcIiBzdHJva2U9XCIjZmZmZmZmXCInIDogXCJcIikgK1xuICAgICAgICAgICAgICAnIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8ga2V5Q29sb3IgOiBcInVybCgjcmFpbmJvdylcIikgK1xuICAgICAgICAgICAgICAnXCIgLz48L3N2Zz4nO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBzdmcgPVxuICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPVwicmFpbmJvd1wiIHkxPVwiNVwiIHgyPVwiMTBcIiB5Mj1cIjVcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj48c3RvcCBvZmZzZXQ9XCIwXCIgc3RvcC1jb2xvcj1cIiMzOTY5YWNcIi8+PHN0b3Agb2Zmc2V0PVwiMC4yNVwiIHN0b3AtY29sb3I9XCIjMTFhNTc5XCIvPjxzdG9wIG9mZnNldD1cIjAuNVwiIHN0b3AtY29sb3I9XCIjZjJiNzAxXCIvPjxzdG9wIG9mZnNldD1cIjAuNzVcIiBzdG9wLWNvbG9yPVwiI2U3M2Y3NFwiLz48c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcC1jb2xvcj1cIiM3ZjNjOGRcIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgJyArXG4gICAgICAgICAgICAgIChrZXlDb2xvciA/ICdzdHJva2U9XCIjZmZmZmZmXCInIDogXCJcIikgK1xuICAgICAgICAgICAgICAnIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8ga2V5Q29sb3IgOiBcInVybCgjcmFpbmJvdylcIikgK1xuICAgICAgICAgICAgICAnXCIvPjwvc3ZnPic7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHN2ZyA9XG4gICAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9XCJyYWluYm93XCIgeTE9XCI1XCIgeDI9XCIxMFwiIHkyPVwiNVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxzdG9wIG9mZnNldD1cIjBcIiBzdG9wLWNvbG9yPVwiIzM5NjlhY1wiLz48c3RvcCBvZmZzZXQ9XCIwLjMyNVwiIHN0b3AtY29sb3I9XCIjMTFhNTc5XCIvPjxzdG9wIG9mZnNldD1cIjAuNVwiIHN0b3AtY29sb3I9XCIjZjJiNzAxXCIvPjxzdG9wIG9mZnNldD1cIjAuNjc1XCIgc3RvcC1jb2xvcj1cIiNlNzNmNzRcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjN2YzYzhkXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwb2x5Z29uIHBvaW50cz1cIjYgMTAuMzkgMCAxMC4zOSAzIDUuMiA2IDAgOSA1LjIgMTIgMTAuMzkgNiAxMC4zOVwiICcgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyAncGFpbnQtb3JkZXI9XCJzdHJva2VcIiBzdHJva2U9XCIjZmZmZmZmXCInIDogXCJcIikgK1xuICAgICAgICAgICAgICAnIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8ga2V5Q29sb3IgOiBcInVybCgjcmFpbmJvdylcIikgK1xuICAgICAgICAgICAgICAnXCIgLz48L3N2Zz4nO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3ZnID1cbiAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cInJhaW5ib3dcIiB5MT1cIjVcIiB4Mj1cIjEwXCIgeTI9XCI1XCIgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PHN0b3Agb2Zmc2V0PVwiMFwiIHN0b3AtY29sb3I9XCIjMzk2OWFjXCIvPjxzdG9wIG9mZnNldD1cIjAuMjVcIiBzdG9wLWNvbG9yPVwiIzExYTU3OVwiLz48c3RvcCBvZmZzZXQ9XCIwLjVcIiBzdG9wLWNvbG9yPVwiI2YyYjcwMVwiLz48c3RvcCBvZmZzZXQ9XCIwLjc1XCIgc3RvcC1jb2xvcj1cIiNlNzNmNzRcIi8+PHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3AtY29sb3I9XCIjN2YzYzhkXCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjVcIiAnICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yID8gJ3N0cm9rZT1cIiNmZmZmZmZcIicgOiBcIlwiKSArXG4gICAgICAgICAgICAgICcgZmlsbD1cIicgK1xuICAgICAgICAgICAgICAoa2V5Q29sb3IgPyBrZXlDb2xvciA6IFwidXJsKCNyYWluYm93KVwiKSArXG4gICAgICAgICAgICAgICdcIi8+PC9zdmc+JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3ZnOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCIgKyB3aW5kb3cuYnRvYShzdmcpLFxuICAgICAgICAgIGNsYXNzOiBcInNoYXBlXCIsXG4gICAgICAgIH07XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGtleUNvbG9yID0ga2V5LmNvbG9yO1xuXG4gICAgICAgIHN2ZyA9XG4gICAgICAgICAgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiICtcbiAgICAgICAgICB3aW5kb3cuYnRvYShcbiAgICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Y2lyY2xlIGN4PVwiJyArXG4gICAgICAgICAgICAgIGljb25TaXplWzBdIC8gMiArXG4gICAgICAgICAgICAgICdcIiBjeT1cIicgK1xuICAgICAgICAgICAgICBpY29uU2l6ZVsxXSAvIDIgK1xuICAgICAgICAgICAgICAnXCIgcj1cIicgK1xuICAgICAgICAgICAgICAoaWNvblNpemVbMF0gKyBpY29uU2l6ZVsxXSkgLyA0ICtcbiAgICAgICAgICAgICAgJ1wiIGZpbGw9XCInICtcbiAgICAgICAgICAgICAgKGtleUNvbG9yIHx8IGtleS5jb2xvcikgK1xuICAgICAgICAgICAgICAnXCIvPjwvc3ZnPidcbiAgICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgIGNsYXNzOiBcImNvbG9yXCIsXG4gICAgICAgIH07XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBleHRlcm5hbExpbmsgfSBmcm9tICcuL2hlbHBlcnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZUZlYXR1cmVFdmVudHMoZmVhdHVyZSwgbGF5ZXIsIG1hcCkge1xuICB2YXIgZXZlbnRPcHRpb25zID0gbWFwLm9uZWFjaGZlYXR1cmVcbiAgICA/IG1hcC5vbmVhY2hmZWF0dXJlXG4gICAgOiB7XG4gICAgICBjbGljazogZnVuY3Rpb24gY2xpY2soKSB7XG4gICAgICAgIGhhbmRsZUxheWVyQ2xpY2soZmVhdHVyZSwgbGF5ZXIsIG1hcC5sZWFmbGV0KVxuICAgICAgfVxuICAgIH1cblxuICBPYmplY3Qua2V5cyhldmVudE9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgICBsYXllci5vbihsaXN0ZW5lciwgZXZlbnRPcHRpb25zW2xpc3RlbmVyXSlcbiAgfSlcbiAgdmFyIHBvcHVwQ29udGVudCA9XG4gICAgdHlwZW9mIG1hcC5mb3JtYXRwb3B1cGNvbnRlbnQgPT09ICdmdW5jdGlvbidcbiAgICAgID8gbWFwLmZvcm1hdHBvcHVwY29udGVudChmZWF0dXJlLCBtYXApXG4gICAgICA6IGZvcm1hdFBvcHVwQ29udGVudChmZWF0dXJlLCBtYXApXG4gIGxheWVyLmJpbmRQb3B1cChwb3B1cENvbnRlbnQpXG59XG5cbmZ1bmN0aW9uIGZvcm1hdFBvcHVwQ29udGVudChmZWF0dXJlLCBtYXApIHtcbiAgdmFyIGNvbnRlbnRcbiAgY29udGVudCA9IE9iamVjdC5rZXlzKGZlYXR1cmUucHJvcGVydGllcylcbiAgICAubWFwKGZ1bmN0aW9uKHApIHtcbiAgICAgIGlmIChmZWF0dXJlLnByb3BlcnRpZXNbcF0pIHtcbiAgICAgICAgaWYgKG1hcC5wb3B1cGhlYWRlcnMubGVuZ3RoICYmIG1hcC5wb3B1cGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcC5wb3B1cGhlYWRlcnMuaW5kZXhPZihwKSA+IC0xICYmXG4gICAgICAgICAgICBtYXAucG9wdXBjb250ZW50LmluZGV4T2YocCkgPiAtMVxuICAgICAgICAgICAgPyAnPGRpdiBjbGFzcz1cInBvcHVwSGVhZGVyU3R5bGVcIj4nICtcbiAgICAgICAgICAgICAgICBwLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvXy9nLCAnICcpICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1twXSArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgIDogbWFwLnBvcHVwY29udGVudC5pbmRleE9mKHApID4gLTFcbiAgICAgICAgICAgICAgPyAnPGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuICAgICAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1twXSArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9IGVsc2UgaWYgKG1hcC5wb3B1cGhlYWRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcC5wb3B1cGhlYWRlcnMuaW5kZXhPZihwKSA+IC0xXG4gICAgICAgICAgICA/ICc8ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPicgK1xuICAgICAgICAgICAgICAgIHAudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9fL2csICcgJykgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj48ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArXG4gICAgICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3BdICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICAgICAgOiAnJ1xuICAgICAgICB9IGVsc2UgaWYgKG1hcC5wb3B1cGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIG1hcC5wb3B1cGNvbnRlbnQuaW5kZXhPZihwKSA+IC0xXG4gICAgICAgICAgICA/ICc8ZGl2IGNsYXNzPVwicG9wdXBFbnRyeVN0eWxlXCI+JyArIGZlYXR1cmUucHJvcGVydGllc1twXSArICc8L2Rpdj4nXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wdXBIZWFkZXJTdHlsZVwiPicgK1xuICAgICAgICAgICAgcC50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL18vZywgJyAnKSArXG4gICAgICAgICAgICAnPC9kaXY+PGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW3BdICtcbiAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuZmlsdGVyKGZ1bmN0aW9uKHApIHtcbiAgICAgIHJldHVybiBwXG4gICAgfSlcbiAgICAuam9pbignJylcbiAgdmFyIGxpbmsgPSBmZWF0dXJlLnByb3BlcnRpZXMuaHlwZXJsaW5rIHx8IGZlYXR1cmUucHJvcGVydGllcy5saW5rXG4gIHZhciBleHRlcm5hbExpbmtDb250ZW50ID1cbiAgICBsaW5rICYmIGxpbmsudHJpbSgpXG4gICAgICA/ICc8ZGl2IGNsYXNzPVwic2VwYXJhdG9yXCI+PC9kaXY+PGRpdiBjbGFzcz1cImh5cGVybGluayBwb3B1cEVudHJ5U3R5bGVcIj48YSBjbGFzcz1cInRyYW5zbGF0ZVwiIGhyZWY9JyArXG4gICAgICAgIGxpbmsudHJpbSgpICtcbiAgICAgICAgJyB0YXJnZXQ9XCJfYmxhbmtcIj4nICtcbiAgICAgICAgbWFwLmV4dGVybmFsbGlua3RleHQgK1xuICAgICAgICAnPC9hPicgK1xuICAgICAgICBleHRlcm5hbExpbmsgK1xuICAgICAgICAnPC9kaXY+J1xuICAgICAgOiAnJ1xuICBjb250ZW50ICs9IGV4dGVybmFsTGlua0NvbnRlbnRcblxuICBpZiAobGFuZykge1xuICAgIHZhciB0cmFuc2xhdGFibGVTdHJpbmdzID0gT2JqZWN0LmtleXMobWFwLnRyYW5zbGF0aW9ucykuc29ydChmdW5jdGlvbihcbiAgICAgIGEsXG4gICAgICBiXG4gICAgKSB7XG4gICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aFxuICAgIH0pXG4gICAgdHJhbnNsYXRhYmxlU3RyaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoJ1xcXFxiKCcgKyBSZWdFeHAuZXNjYXBlKHQpICsgJyknLCAnZ2knKVxuICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShyZSwgbWFwLnRyYW5zbGF0aW9uc1t0XSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnRcbn1cblxuXG5mdW5jdGlvbiBoYW5kbGVMYXllckNsaWNrKGZlYXR1cmUsIGxheWVyLCBsZWFmbGV0KSB7XG4gIHZhciBpc1NwaWRlcmZpZWQgPSBmYWxzZVxuXG4gIGlmICghbGF5ZXIuX3ByZVNwaWRlcmZ5TGF0bG5nKSB7XG4gICAgT2JqZWN0LmtleXMobGVhZmxldC5fbGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKGwsIGkpIHtcbiAgICAgIGlmIChsZWFmbGV0Ll9sYXllcnNbbF0udW5zcGlkZXJmeSkgbGVhZmxldC5fbGF5ZXJzW2xdLnVuc3BpZGVyZnkoKVxuICAgIH0pXG5cbiAgICBpZiAobGF5ZXIuX19wYXJlbnQpIHtcbiAgICAgIE9iamVjdC52YWx1ZXMobGF5ZXIuX19wYXJlbnQuX2dyb3VwLl9mZWF0dXJlR3JvdXAuX2xheWVycykuZm9yRWFjaChcbiAgICAgICAgZnVuY3Rpb24odikge1xuICAgICAgICAgIGlmICh2Ll9ncm91cCAmJiB2Ll9ncm91cC5fc3BpZGVyZmllZCkgaXNTcGlkZXJmaWVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICApXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5sZWFmbGV0LW1hcmtlci1pY29uJykpLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gKGQuc3R5bGUub3BhY2l0eSA9IGlzU3BpZGVyZmllZCA/IDAuMzMgOiAxKVxuICAgICAgICB9XG4gICAgICApXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZy5sZWFmbGV0LW1hcmtlci1pY29uJykpLmZvckVhY2goXG4gICAgICAgIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICByZXR1cm4gKGQuc3R5bGUub3BhY2l0eSA9IGlzU3BpZGVyZmllZCA/IDAuMzMgOiAxKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbndpbmRvdy5oYW5kbGVMYXllckNsaWNrID0gaGFuZGxlTGF5ZXJDbGlja1xuIiwiaW1wb3J0IHN0eWxlS2V5IGZyb20gJy4vc3R5bGVLZXkuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlUG9pbnQoZmVhdHVyZSwgbGF0bG5nLCBtYXApIHtcbiAgdmFyIHBvaW50U3R5bGUsIGtleSwgc3R5bGVPcHRpb25zXG5cbiAgdmFyIEN1c3RvbUljb24gPSBMLkljb24uZXh0ZW5kKHtcbiAgICBvcHRpb25zOiB7XG4gICAgICBpY29uU2l6ZTogbWFwLmljb25zaXplIHx8IFsyMCwgMjBdLFxuICAgICAgaWNvbkFuY2hvcjogbWFwLmljb25zaXplXG4gICAgICAgID8gbWFwLmljb25zaXplIC8gNFxuICAgICAgICA6IG1hcC5pY29uYW5jaG9yXG4gICAgICAgICAgPyBtYXAuaWNvbmFuY2hvclxuICAgICAgICAgIDogWzUsIDVdXG4gICAgfVxuICB9KVxuXG4gIHZhciBub25Qb2ludFN0eWxlLCBrZXksIGRpdkljb25cblxuICB2YXIgY29sb3JLZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uICh3KSB7XG4gICAgaWYgKCF3LmtleXMpIHJldHVyblxuICAgIHZhciBrZXkgPSB3LmtleXMuZmluZChmdW5jdGlvbiAoaykge1xuICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZmVhdHVyZS5wcm9wZXJ0aWVzW3cuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICB9KVxuICAgIHJldHVybiBrZXkgJiYgdy50eXBlID09PSAnY29sb3InXG4gIH0pXG5cbiAgdmFyIGZvcm1LZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uICh3KSB7XG4gICAgaWYgKCF3LmtleXMpIHJldHVyblxuICAgIHZhciBrZXkgPSB3LmtleXMuZmluZChmdW5jdGlvbiAoaykge1xuICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZmVhdHVyZS5wcm9wZXJ0aWVzW3cuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICB9KVxuXG4gICAgcmV0dXJuIGtleSAmJiB3LnR5cGUgPT09ICdmb3JtJ1xuICB9KVxuXG4gIGZvciAobGV0IHcgb2YgbWFwLndpZGdldHMpIHtcbiAgICB2YXIgdGhpc0Zvcm1LZXlXaWRnZXQgPSB3LnR5cGUgPT09ICdmb3JtJyA/IHcgOiBmb3JtS2V5V2lkZ2V0XG4gICAgdmFyIHRoaXNDb2xvcktleVdpZGdldCA9IHcudHlwZSA9PT0gJ2NvbG9yJyA/IHcgOiBudWxsXG5cbiAgICB2YXIgY29sb3JLZXkgPSB0aGlzQ29sb3JLZXlXaWRnZXRcbiAgICAgID8gdGhpc0NvbG9yS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbiAoaykge1xuICAgICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0NvbG9yS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuICAgICAgOiBudWxsXG5cbiAgICB2YXIgZm9ybUtleSA9IHRoaXNGb3JtS2V5V2lkZ2V0XG4gICAgICA/IHRoaXNGb3JtS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbiAoaykge1xuICAgICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG4gICAgICA6IG51bGxcblxuICAgIHZhciBjb2xvciA9IGNvbG9yS2V5ID8gY29sb3JLZXkuY29sb3IgOiBmb3JtS2V5ID8gZm9ybUtleS5jb2xvciA6IG51bGxcblxuICAgIGlmICh0aGlzRm9ybUtleVdpZGdldCAmJiBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdKSB7XG4gICAgICB2YXIgZm9ybXMgPSB0aGlzRm9ybUtleVdpZGdldC5rZXlzLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgICByZXR1cm4gay52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuICAgICAgdmFyIGkgPSBmb3Jtcy5pbmRleE9mKFxuICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIClcbiAgICAgIGtleSA9IHRoaXNGb3JtS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbiAoaykge1xuICAgICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pXG5cbiAgICAgIGlmICgha2V5KSBicmVha1xuXG4gICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICBrZXk6IGZvcm1LZXksXG4gICAgICAgIGluZGV4OiBpLFxuICAgICAgICBmb3JtczogZm9ybXMsXG4gICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgICAgbWFwOiBtYXAsXG4gICAgICAgIGZlYXR1cmU6IGZlYXR1cmVcbiAgICAgIH1cblxuICAgICAgaWYgKGtleS5mb3JtID09PSAnZGl2Jykge1xuICAgICAgICB2YXIgdmFsdWUgPSBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0Zvcm1LZXlXaWRnZXQuZmllbGRdXG4gICAgICAgIHZhciBjb3VudCA9IHZhbHVlID8gdmFsdWUuc3BsaXQoJ34nKS5sZW5ndGggOiAwXG5cbiAgICAgICAgZGl2SWNvbiA9IEwuZGl2SWNvbih7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnaWNvbi1kaXYnLFxuICAgICAgICAgIGh0bWw6XG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJ0ZXh0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicgK1xuICAgICAgICAgICAgY29sb3IgK1xuICAgICAgICAgICAgJ1wiPicgK1xuICAgICAgICAgICAgY291bnQgK1xuICAgICAgICAgICAgJzwvc3Bhbj4nXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHBvaW50U3R5bGUgPSBkaXZJY29uID8gZGl2SWNvbiA6IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpc0NvbG9yS2V5V2lkZ2V0ICYmXG4gICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0NvbG9yS2V5V2lkZ2V0LmZpZWxkXVxuICAgICkge1xuICAgICAga2V5ID0gdGhpc0NvbG9yS2V5V2lkZ2V0LmtleXMuZmluZChmdW5jdGlvbiAoaykge1xuICAgICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbdGhpc0NvbG9yS2V5V2lkZ2V0LmZpZWxkXS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KVxuXG4gICAgICBpZiAoIWtleSkgYnJlYWtcblxuICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAga2V5OiBjb2xvcktleSxcbiAgICAgICAgY29sb3I6IGNvbG9yS2V5LmNvbG9yLFxuICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgZmVhdHVyZTogZmVhdHVyZVxuICAgICAgfVxuXG4gICAgICBwb2ludFN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3ZnID1cbiAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxjaXJjbGUgY3g9XCI2XCIgY3k9XCI2XCIgcj1cIjVcIiBmaWxsPVwiJyArXG4gICAgICAgIGNvbG9yICtcbiAgICAgICAgJ1wiLz48L3N2Zz4nXG4gICAgICBwb2ludFN0eWxlID0ge1xuICAgICAgICBjbGFzczogJ2RlZmF1bHQnLFxuICAgICAgICBzdmc6IGVuY29kZVVSSSgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwnICsgd2luZG93LmJ0b2Eoc3ZnKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaWNvblVybCA9IHBvaW50U3R5bGUuc3ZnXG4gICAgdmFyIGljb24gPSBuZXcgQ3VzdG9tSWNvbih7XG4gICAgICBpY29uVXJsOiBpY29uVXJsXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBMLm1hcmtlcihsYXRsbmcsIHtcbiAgICBpY29uOiBkaXZJY29uID8gZGl2SWNvbiA6IGljb25cbiAgfSlcbn1cbiIsImltcG9ydCB7IGxpbmVXZWlnaHRzLCBsaW5lRGFzaEFycmF5cyB9IGZyb20gXCIuL2hlbHBlcnMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3R5bGVOb25Qb2ludChmZWF0dXJlLCBtYXAsIGluZGV4KSB7XG4gIHZhciBub25Qb2ludFN0eWxlLFxuICAgIGNvbG9ycyA9IFtdLFxuICAgIGZvcm1zID0gW10sXG4gICAgc29ydCA9IFtcImZvcm1cIiwgXCJjb2xvclwiXTtcblxuICB2YXIgY29sb3JLZXlXaWRnZXQgPSBtYXAud2lkZ2V0cy5maW5kKGZ1bmN0aW9uKHcpIHtcbiAgICBpZiAoIXcua2V5cykgcmV0dXJuO1xuICAgIHZhciBrZXkgPSB3LmtleXMuZmluZChmdW5jdGlvbihrKSB7XG4gICAgICByZXR1cm4gIWsudmFsdWVcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogay52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBmZWF0dXJlLnByb3BlcnRpZXNbdy5maWVsZF0udG9Mb3dlckNhc2UoKVxuICAgIH0pO1xuICAgIHJldHVybiBrZXkgJiYgdy50eXBlID09PSBcImNvbG9yXCI7XG4gIH0pO1xuXG4gIHZhciBmb3JtS2V5V2lkZ2V0ID0gbWFwLndpZGdldHMuZmluZChmdW5jdGlvbih3KSB7XG4gICAgaWYgKCF3LmtleXMpIHJldHVybjtcbiAgICB2YXIga2V5ID0gdy5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgcmV0dXJuICFrLnZhbHVlXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gZmVhdHVyZS5wcm9wZXJ0aWVzW3cuZmllbGRdLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ga2V5ICYmIHcudHlwZSA9PT0gXCJmb3JtXCI7XG4gIH0pO1xuXG4gIGZvciAobGV0IHcgb2YgbWFwLndpZGdldHMpIHtcbiAgICB2YXIgY29sb3JLZXkgPSBjb2xvcktleVdpZGdldFxuICAgICAgPyBjb2xvcktleVdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbY29sb3JLZXlXaWRnZXQuZmllbGRdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pXG4gICAgICA6IG51bGw7XG5cbiAgICB2YXIgZm9ybUtleSA9IGZvcm1LZXlXaWRnZXRcbiAgICAgID8gZm9ybUtleVdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24oaykge1xuICAgICAgICAgIHJldHVybiAhay52YWx1ZVxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IGsudmFsdWUudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbZm9ybUtleVdpZGdldC5maWVsZF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSlcbiAgICAgIDogbnVsbDtcblxuICAgIHZhciBjb2xvciA9IGNvbG9yS2V5ID8gY29sb3JLZXkuY29sb3IgOiBmb3JtS2V5ID8gZm9ybUtleS5jb2xvciA6IG51bGw7XG5cbiAgICB2YXIgZm9ybUtleUZvcm0gPSBmb3JtS2V5V2lkZ2V0XG4gICAgICA/IGZvcm1LZXlXaWRnZXQua2V5cy5yZWR1Y2UoZnVuY3Rpb24oYSwgYykge1xuICAgICAgICAgIHJldHVybiBjLmZvcm07XG4gICAgICAgIH0pXG4gICAgICA6IG51bGw7XG5cbiAgICB2YXIgY29sb3JLZXlGb3JtID0gY29sb3JLZXlXaWRnZXRcbiAgICAgID8gY29sb3JLZXlXaWRnZXQua2V5cy5yZWR1Y2UoZnVuY3Rpb24oYSwgYykge1xuICAgICAgICAgIHJldHVybiBjLmZvcm07XG4gICAgICAgIH0pXG4gICAgICA6IG51bGw7XG5cbiAgICB2YXIgZm9ybSA9IGZvcm1LZXlXaWRnZXRcbiAgICAgID8gZm9ybUtleVdpZGdldC5rZXlzLnJlZHVjZShmdW5jdGlvbihhLCBjKSB7XG4gICAgICAgICAgcmV0dXJuIGMuZm9ybTtcbiAgICAgICAgfSlcbiAgICAgIDogbnVsbDtcblxuICAgIGlmIChmb3JtS2V5V2lkZ2V0ICYmIGZvcm0gPT09IFwibGluZVwiKSB7XG4gICAgICBmb3JtcyA9IGZvcm1LZXlXaWRnZXQua2V5cy5tYXAoZnVuY3Rpb24oZikge1xuICAgICAgICByZXR1cm4gZi52YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgZm9ybXMuZm9yRWFjaChmdW5jdGlvbihmLCBpKSB7XG4gICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNvbG9ycy5wdXNoKFtcInRyYW5zcGFyZW50XCIsIG51bGxdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY29sb3JzLnB1c2goW251bGwsIGRlZmF1bHRDb2xvcl0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjb2xvcnMucHVzaChbXCIjMDAwMDAwXCIsIG51bGxdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY29sb3JzLnB1c2goW1wiI2ZmZmZmZlwiLCBudWxsXSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb2xvcnMucHVzaChbbnVsbCwgbnVsbF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIChmb3Jtcy5sZW5ndGggJiYgZm9ybUtleUZvcm0gPT09IFwibGluZVwiKSB8fFxuICAgICAgKGZvcm1zLmxlbmd0aCAmJiBjb2xvcktleUZvcm0gPT09IFwibGluZVwiKVxuICAgICkge1xuICAgICAgaWYgKGZvcm1LZXlXaWRnZXQpIHtcbiAgICAgICAgdmFyIGkgPSBmb3Jtcy5pbmRleE9mKGZlYXR1cmUucHJvcGVydGllc1tmb3JtS2V5V2lkZ2V0LmZpZWxkXSk7XG4gICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICBub25Qb2ludFN0eWxlID0ge1xuICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgIGNvbG9yc1tpXVtpbmRleF0gPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gXCIjY2FkMmQzXCJcbiAgICAgICAgICAgICAgICA6IGNvbG9yc1tpXVtpbmRleF0gIT09IG51bGxcbiAgICAgICAgICAgICAgICAgID8gY29sb3JzW2ldW2luZGV4XVxuICAgICAgICAgICAgICAgICAgOiBjb2xvcixcbiAgICAgICAgICAgIHdlaWdodDogbGluZVdlaWdodHNbaV1baW5kZXhdLFxuICAgICAgICAgICAgbGluZUNhcDogXCJzcXVhcmVcIixcbiAgICAgICAgICAgIGRhc2hBcnJheTogbGluZURhc2hBcnJheXNbaV0gPyBsaW5lRGFzaEFycmF5c1tpXVtpbmRleF0gOiBudWxsLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZvcm1LZXlGb3JtID09PSBcImxpbmVcIiB8fCBjb2xvcktleUZvcm0gPT09IFwibGluZVwiKSB7XG4gICAgICBub25Qb2ludFN0eWxlID0ge1xuICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgIHdlaWdodDogMyxcbiAgICAgICAgbGluZUNhcDogXCJzcXVhcmVcIixcbiAgICAgICAgZGFzaEFycmF5OiBcIjMsN1wiLFxuICAgICAgICBmaWxsUnVsZTogJ25vbnplcm8nLFxuICAgICAgICBsaW5lSm9pbjogJ2J1dHQnLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGNvbG9yS2V5ICYmIGNvbG9yS2V5LmZvcm0gPT09IFwicGF0dGVyblwiKSB7XG4gICAgICB2YXIgcGF0dGVybjtcblxuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgY29sb3JLZXkucGF0dGVyblswXS5pbmRleE9mKFwic3RyaXBlXCIpID4gLTE6XG4gICAgICAgICAgdmFyIHBhdHRlcm5PcHRpb25zID0ge1xuICAgICAgICAgICAgd2VpZ2h0OiAyLFxuICAgICAgICAgICAgc3BhY2VXZWlnaHQ6IDMsXG4gICAgICAgICAgICBjb2xvcjogY29sb3JLZXkucGF0dGVyblsxXSxcbiAgICAgICAgICAgIHNwYWNlQ29sb3I6IGNvbG9yS2V5LnBhdHRlcm5bY29sb3JLZXkucGF0dGVybi5sZW5ndGggLSAxXSxcbiAgICAgICAgICAgIHNwYWNlT3BhY2l0eTogMSxcbiAgICAgICAgICAgIGFuZ2xlOiA0NSxcbiAgICAgICAgICAgIGZpbGxSdWxlOiAnbm9uemVybycsXG4gICAgICAgICAgICBsaW5lSm9pbjogJ2J1dHQnLFxuICAgICAgICAgIH1cbiAgICAgICAgICBwYXR0ZXJuID0gbmV3IEwuU3RyaXBlUGF0dGVybihwYXR0ZXJuT3B0aW9ucyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBjb2xvcktleS5wYXR0ZXJuWzBdLmluZGV4T2YoXCJkb3RcIikgPiAtMTpcbiAgICAgICAgICB2YXIgc2hhcGVPcHRpb25zID0ge1xuICAgICAgICAgICAgeDogNCxcbiAgICAgICAgICAgIHk6IDQsXG4gICAgICAgICAgICByYWRpdXM6IDIsXG4gICAgICAgICAgICBmaWxsOiB0cnVlLFxuICAgICAgICAgICAgc3Ryb2tlOiBmYWxzZSxcbiAgICAgICAgICAgIGZpbGxDb2xvcjogY29sb3JLZXkucGF0dGVybltjb2xvcktleS5wYXR0ZXJuLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDEsXG4gICAgICAgICAgICBmaWxsUnVsZTogJ25vbnplcm8nLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAneW8nLFxuICAgICAgICAgICAgbGluZUpvaW46ICdidXR0JyxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHZhciBzaGFwZSA9IG5ldyBMLlBhdHRlcm5DaXJjbGUoc2hhcGVPcHRpb25zKTtcbiAgICAgICAgICB2YXIgcGF0dGVybk9wdGlvbnMgPSB7XG4gICAgICAgICAgICB3aWR0aDogNSxcbiAgICAgICAgICAgIGhlaWdodDogOCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHBhdHRlcm4gPSBuZXcgTC5QYXR0ZXJuKHBhdHRlcm5PcHRpb25zKVxuICAgICAgICAgIHBhdHRlcm4uYWRkU2hhcGUoc2hhcGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBwYXR0ZXJuLmFkZFRvKG1hcC5sZWFmbGV0KTtcbiAgICAgIG5vblBvaW50U3R5bGUgPSB7XG4gICAgICAgIGZpbGxQYXR0ZXJuOiBwYXR0ZXJuID8gcGF0dGVybiA6IG51bGwsXG4gICAgICAgIGZpbGxDb2xvcjogY29sb3IsXG4gICAgICAgIGNvbG9yOiBkZWZhdWx0Q29sb3IsXG4gICAgICAgIGZpbGxPcGFjaXR5OiAwLjcsXG4gICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgd2VpZ2h0OiAyLFxuICAgICAgICBsaW5lQ2FwOiBcInNxdWFyZVwiLFxuICAgICAgICBmaWxsUnVsZTogJ25vbnplcm8nLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGxpbmVDb2xvcjtcbiAgICAgIHZhciBsaW5lV2VpZ2h0O1xuICAgICAgdmFyIGxpbmVPcGFjaXR5O1xuXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgLy8gbmluZSBkYXNoIGxpbmVcbiAgICAgICAgY2FzZSBmZWF0dXJlLmdlb21ldHJ5LnR5cGUudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwibGluZVwiKSA+IC0xOlxuICAgICAgICAgIGxpbmVDb2xvciA9IGNvbG9yXG4gICAgICAgICAgICA/IGNocm9tYShjb2xvcilcbiAgICAgICAgICAgICAgICAuYnJpZ2h0ZW4oKVxuICAgICAgICAgICAgICAgIC5oZXgoKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgIGxpbmVPcGFjaXR5ID0gMTtcbiAgICAgICAgICBsaW5lV2VpZ2h0ID0gMztcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGZlYXR1cmUuZ2VvbWV0cnkudHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJwb2x5Z29uXCIpID4gLTE6XG4gICAgICAgICAgbGluZUNvbG9yID0gJ2RlZmF1bHRDb2xvcic7XG4gICAgICAgICAgbGluZU9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgbGluZVdlaWdodCA9IDI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIG5vblBvaW50U3R5bGUgPSB7XG4gICAgICAgIGZpbGxQYXR0ZXJuOiBwYXR0ZXJuLFxuICAgICAgICBmaWxsQ29sb3I6IGNvbG9yLFxuICAgICAgICAvLyBjb2xvcjogbGluZUNvbG9yLFxuICAgICAgICBmaWxsT3BhY2l0eTogMC43LFxuICAgICAgICBvcGFjaXR5OiBsaW5lT3BhY2l0eSxcbiAgICAgICAgd2VpZ2h0OiBsaW5lV2VpZ2h0LFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub25Qb2ludFN0eWxlKSByZXR1cm4gbm9uUG9pbnRTdHlsZTtcbiAgfVxufVxuIiwiaW1wb3J0IGhhbmRsZUZlYXR1cmVFdmVudHMgZnJvbSAnLi9oYW5kbGVGZWF0dXJlRXZlbnRzLmpzJ1xuaW1wb3J0IHN0eWxlUG9pbnQgZnJvbSAnLi9zdHlsZVBvaW50LmpzJ1xuaW1wb3J0IHN0eWxlTm9uUG9pbnQgZnJvbSAnLi9zdHlsZU5vblBvaW50LmpzJ1xud2luZG93LmhhbmRsZUZlYXR1cmVFdmVudHMgPSBoYW5kbGVGZWF0dXJlRXZlbnRzXG53aW5kb3cuc3R5bGVQb2ludCA9IHN0eWxlUG9pbnRcbndpbmRvdy5zdHlsZU5vblBvaW50ID0gc3R5bGVOb25Qb2ludFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlR2VvSnNvbk9wdGlvbnMoXG4gIG1hcCxcbiAgY29sb3JLZXlXaWRnZXRzLFxuICBmb3JtS2V5V2lkZ2V0c1xuKSB7XG4gIGZ1bmN0aW9uIGZpbHRlcihmZWF0dXJlKSB7XG4gICAgcmV0dXJuIG1hcC5maWx0ZXJzXG4gICAgICAubWFwKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgcmV0dXJuIGYoZmVhdHVyZSlcbiAgICAgIH0pXG4gICAgICAuZXZlcnkoZnVuY3Rpb24oZikge1xuICAgICAgICByZXR1cm4gZiAhPT0gZmFsc2VcbiAgICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBvbkVhY2hGZWF0dXJlKGZlYXR1cmUsIGxheWVyKSB7XG4gICAgaGFuZGxlRmVhdHVyZUV2ZW50cyhmZWF0dXJlLCBsYXllciwgbWFwKVxuICB9XG5cbiAgdmFyIGJhY2tncm91bmRPcHRpb25zID0ge1xuICAgIGZpbHRlcjogZmlsdGVyLFxuICAgIG9uRWFjaEZlYXR1cmU6IG9uRWFjaEZlYXR1cmUsXG4gICAgcG9pbnRUb0xheWVyOlxuICAgICAgbWFwLnBvaW50U3R5bGUgfHxcbiAgICAgIGZ1bmN0aW9uKGZlYXR1cmUsIGxhdGxuZykge1xuICAgICAgICByZXR1cm4gc3R5bGVQb2ludChmZWF0dXJlLCBsYXRsbmcsIG1hcClcbiAgICAgIH0sXG4gICAgc3R5bGU6XG4gICAgICBtYXAubm9uUG9pbnRTdHlsZSB8fFxuICAgICAgZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICByZXR1cm4gc3R5bGVOb25Qb2ludChmZWF0dXJlLCBtYXAsIDApXG4gICAgICB9XG4gIH1cbiAgdmFyIGZvcmVncm91bmRPcHRpb25zID0ge1xuICAgIGZpbHRlcjogZmlsdGVyLFxuICAgIG9uRWFjaEZlYXR1cmU6IG9uRWFjaEZlYXR1cmUsXG4gICAgcG9pbnRUb0xheWVyOlxuICAgICAgbWFwLnBvaW50U3R5bGUgfHxcbiAgICAgIGZ1bmN0aW9uKGZlYXR1cmUsIGxhdGxuZykge1xuICAgICAgICByZXR1cm4gc3R5bGVQb2ludChmZWF0dXJlLCBsYXRsbmcsIG1hcClcbiAgICAgIH0sXG4gICAgc3R5bGU6XG4gICAgICBtYXAubm9uUG9pbnRTdHlsZSB8fFxuICAgICAgZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICByZXR1cm4gc3R5bGVOb25Qb2ludChmZWF0dXJlLCBtYXAsIDEpXG4gICAgICB9XG4gIH1cblxuICByZXR1cm4gW2JhY2tncm91bmRPcHRpb25zLCBmb3JlZ3JvdW5kT3B0aW9uc11cbn1cbiIsImltcG9ydCBtYWtlR2VvSnNvbk9wdGlvbnMgZnJvbSAnLi9tYWtlR2VvSnNvbk9wdGlvbnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VMYXllcnMobWFwKSB7XG4gIHZhciBjb2xvcktleVdpZGdldHMgPSBbXSxcbiAgICBmb3JtS2V5V2lkZ2V0cyA9IFtdXG5cbiAgaWYgKG1hcC53aWRnZXRzKSB7XG4gICAgY29sb3JLZXlXaWRnZXRzID0gbWFwLndpZGdldHMuZmlsdGVyKGZ1bmN0aW9uICh3KSB7XG4gICAgICByZXR1cm4gdy50eXBlID09PSAnY29sb3InXG4gICAgfSlcbiAgICBmb3JtS2V5V2lkZ2V0cyA9IG1hcC53aWRnZXRzLmZpbHRlcihmdW5jdGlvbiAodykge1xuICAgICAgcmV0dXJuIHcudHlwZSA9PT0gJ2Zvcm0nXG4gICAgfSlcblxuICB9XG5cbiAgdmFyIGdlb0pzb25PcHRpb25zID0gbWFwLmdlb2pzb25vcHRpb25zXG4gICAgPyBtYXAuZ2VvanNvbm9wdGlvbnMobWFwKVxuICAgIDogbWFrZUdlb0pzb25PcHRpb25zKG1hcClcbiAgbWFwLmpzb24uZm9yRWFjaChmdW5jdGlvbiAoanNvbiwgaSkge1xuICAgIHZhciBjbHVzdGVyQ29sb3IsIGNvbG9yS2V5V2lkZ2V0XG5cbiAgICBpZiAoY29sb3JLZXlXaWRnZXRzLmxlbmd0aCkge1xuICAgICAgdmFyIGNvbG9yS2V5cyA9IGNvbG9yS2V5V2lkZ2V0c1xuICAgICAgICAubWFwKGZ1bmN0aW9uICh3aWRnZXQpIHtcbiAgICAgICAgICB2YXIgY29sbGVjdGlvbk5hbWUgPSBqc29uLmZlYXR1cmVzWzBdLnByb3BlcnRpZXNbd2lkZ2V0LmZpZWxkXVxuXG4gICAgICAgICAgdmFyIGtleSA9IHdpZGdldC5rZXlzLmZpbmQoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleS52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSBjb2xsZWN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIGNvbG9yS2V5V2lkZ2V0ID0gd2lkZ2V0XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBrZXlcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoY29sb3JLZXkpIHtcbiAgICAgICAgICByZXR1cm4gY29sb3JLZXlcbiAgICAgICAgfSlcblxuICAgICAgY2x1c3RlckNvbG9yID0gY29sb3JLZXlzWzBdID8gY29sb3JLZXlzWzBdLmNvbG9yIDogJyMwMDAwMDAnXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsdXN0ZXJDb2xvciA9ICcjMDAwMDAwJ1xuICAgIH1cblxuICAgIHZhciBhbGxQb2ludHMgPSBqc29uLmZlYXR1cmVzLmV2ZXJ5KGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICByZXR1cm4gZmVhdHVyZS5nZW9tZXRyeSAmJiBmZWF0dXJlLmdlb21ldHJ5LnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3BvaW50J1xuICAgIH0pXG5cbiAgICBtYXAuZ3JvdXBzLnB1c2goXG4gICAgICBuZXcgTC5NYXJrZXJDbHVzdGVyR3JvdXAoe1xuICAgICAgICBzaG93Q292ZXJhZ2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgem9vbVRvQm91bmRzT25DbGljazogZmFsc2UsXG4gICAgICAgIG1heENsdXN0ZXJSYWRpdXM6XG4gICAgICAgICAgYWxsUG9pbnRzICYmIG1hcC5jbHVzdGVyZGlzdGFuY2UgPyBtYXAuY2x1c3RlcmRpc3RhbmNlIDogTmFOLFxuICAgICAgICBpY29uQ3JlYXRlRnVuY3Rpb246IGZ1bmN0aW9uIGljb25DcmVhdGVGdW5jdGlvbihjbHVzdGVyKSB7XG4gICAgICAgICAgcmV0dXJuIEwuZGl2SWNvbih7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdpY29uLWdyb3VwJyxcbiAgICAgICAgICAgIGh0bWw6XG4gICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInRleHRcIiBzdHlsZT1cImJvcmRlcjogMnB4IHNvbGlkJyArXG4gICAgICAgICAgICAgIGNsdXN0ZXJDb2xvciArXG4gICAgICAgICAgICAgICc7IGNvbG9yOicgK1xuICAgICAgICAgICAgICBjbHVzdGVyQ29sb3IgK1xuICAgICAgICAgICAgICAnXCI+JyArXG4gICAgICAgICAgICAgIGNsdXN0ZXIuZ2V0Q2hpbGRDb3VudCgpICtcbiAgICAgICAgICAgICAgJzwvc3Bhbj4nXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApXG5cbiAgICB2YXIgaGFzTGluZUZlYXR1cmVzID0ganNvbi5mZWF0dXJlcy5zb21lKGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBmZWF0dXJlLmdlb21ldHJ5ICYmXG4gICAgICAgIGZlYXR1cmUuZ2VvbWV0cnkudHlwZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2xpbmUnKSA+IC0xXG4gICAgICApXG4gICAgfSlcblxuICAgIGdlb0pzb25PcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbiwgaW5kZXgpIHtcbiAgICAgIGlmIChjb2xvcktleVdpZGdldCkge1xuICAgICAgICBqc29uLmZlYXR1cmVzID0ganNvbi5mZWF0dXJlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIGIucHJvcGVydGllc1tjb2xvcktleVdpZGdldC5maWVsZF0ubG9jYWxlQ29tcGFyZShcbiAgICAgICAgICAgIGEucHJvcGVydGllc1tjb2xvcktleVdpZGdldC5maWVsZF1cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHZhciBnZW9Kc29uID0gTC5nZW9Kc29uKGpzb24sIG9wdGlvbilcbiAgICAgIC8vIGNvbnNvbGUubG9nKGdlb0pzb24pXG5cbiAgICAgIGlmIChcbiAgICAgICAgKCFoYXNMaW5lRmVhdHVyZXMgJiYgaW5kZXggJSAyID09PSAwKSB8fFxuICAgICAgICBoYXNMaW5lRmVhdHVyZXMgfHxcbiAgICAgICAgbWFwLmdlb2pzb25vcHRpb25zXG4gICAgICApIHtcbiAgICAgICAgbWFwLmdyb3Vwc1tpXS5hZGRMYXllcihnZW9Kc29uKVxuXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChtYXAuZ3JvdXBzW2ldLmdldExheWVycygpLmxlbmd0aCkge1xuICAgICAgbWFwLmxlYWZsZXQuYWRkTGF5ZXIobWFwLmdyb3Vwc1tpXSlcbiAgICAgIG1hcC5ncm91cHNbaV0ub24oJ2NsdXN0ZXJjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGhhbmRsZUNsdXN0ZXJDbGljayhlLCBtYXAsIGkpXG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2x1c3RlckNsaWNrKGUsIG1hcCwgaSkge1xuICBtYXAubGVhZmxldC5fbGF5ZXJzW2UubGF5ZXIuX2xlYWZsZXRfaWRdLnNwaWRlcmZ5KClcblxuICBPYmplY3Qua2V5cyhtYXAubGVhZmxldC5fbGF5ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChsYXllciwgaSkge1xuICAgIGlmIChwYXJzZUludChsYXllciwgMTApICE9PSBlLmxheWVyLl9sZWFmbGV0X2lkKSB7XG4gICAgICBpZiAobWFwLmxlYWZsZXQuX2xheWVyc1tsYXllcl0udW5zcGlkZXJmeSlcbiAgICAgICAgbWFwLmxlYWZsZXQuX2xheWVyc1tsYXllcl0udW5zcGlkZXJmeSgpXG4gICAgfVxuICB9KVxuICB2YXIgaXNTcGlkZXJmaWVkID0gZmFsc2VcbiAgT2JqZWN0LnZhbHVlcyhtYXAuZ3JvdXBzW2ldLl9mZWF0dXJlR3JvdXAuX2xheWVycykuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgIGlmICh2Ll9ncm91cCAmJiB2Ll9ncm91cC5fc3BpZGVyZmllZCkgaXNTcGlkZXJmaWVkID0gdHJ1ZVxuICB9KVxuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5sZWFmbGV0LW1hcmtlci1pY29uJykpLmZvckVhY2goXG4gICAgZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiAoZC5zdHlsZS5vcGFjaXR5ID0gaXNTcGlkZXJmaWVkID8gMC4zMyA6IDEpXG4gICAgfVxuICApXG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nLmxlYWZsZXQtbWFya2VyLWljb24nKSkuZm9yRWFjaChcbiAgICBmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIChkLnN0eWxlLm9wYWNpdHkgPSBpc1NwaWRlcmZpZWQgPyAwLjMzIDogMSlcbiAgICB9XG4gIClcbiAgT2JqZWN0LnZhbHVlcyhtYXAuZ3JvdXBzW2ldLl9mZWF0dXJlR3JvdXAuX2xheWVycykuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgZS5sYXllclxuICAgICAgLmdldEFsbENoaWxkTWFya2VycygpXG4gICAgICAubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHJldHVybiBtLmdldEVsZW1lbnQoKVxuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgcmV0dXJuIG1cbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICByZXR1cm4gKG0uc3R5bGUub3BhY2l0eSA9IDEpXG4gICAgICB9KVxuICB9KVxufVxuIiwiaW1wb3J0IHsgY29udmVydFR5cGUsIGNyZWF0ZUNvbG9yU2NhbGUgfSBmcm9tIFwiLi9oZWxwZXJzLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUxhbmd1YWdlRGF0YShkYXRhKSB7XG4gIHZhciBsYW5ndWFnZURhdGEgPSB7fTtcbiAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgIHZhciBrZXk7XG4gICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbHVtbiwgaSkge1xuICAgICAgaWYgKGNvbHVtbi5pbmRleE9mKFwiZ3N4JFwiKSA+IC0xKSB7XG4gICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnJlcGxhY2UoXCJnc3gkXCIsIFwiXCIpO1xuXG4gICAgICAgIGlmIChjb2x1bW5OYW1lID09PSBcImVuXCIpIHtcbiAgICAgICAgICBrZXkgPSByb3dbY29sdW1uXVtcIiR0XCJdO1xuICAgICAgICAgIGxhbmd1YWdlRGF0YVtrZXldID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sdW1uTmFtZSA9PT0gbGFuZykge1xuICAgICAgICAgIGxhbmd1YWdlRGF0YVtrZXldID0gcm93W2NvbHVtbl1bXCIkdFwiXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGxhbmd1YWdlRGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGVnZW5kRGF0YShvcHRpb25zLCBqc29uLCBzdHlsZSkge1xuICB2YXIgY29sb3JTY2FsZSA9IGNyZWF0ZUNvbG9yU2NhbGUoanNvbi5sZW5ndGgpO1xuICB2YXIgbGVnZW5kSXRlbXMgPSBbXTtcbiAganNvbi5mb3JFYWNoKGZ1bmN0aW9uKHJvdywgeCkge1xuICAgIHZhciBkYXRhID0ge307XG4gICAgT2JqZWN0LmtleXMocm93KS5mb3JFYWNoKGZ1bmN0aW9uKGNvbHVtbiwgeSkge1xuICAgICAgaWYgKGNvbHVtbi5pbmRleE9mKFwiZ3N4JFwiKSA+IC0xKSB7XG4gICAgICAgIHZhciBjb2x1bW5OYW1lID0gY29sdW1uLnJlcGxhY2UoXCJnc3gkXCIsIFwiXCIpO1xuXG4gICAgICAgIGlmIChjb2x1bW5OYW1lID09PSBcImxhYmVsXCIpIHtcbiAgICAgICAgICB2YXIga2V5ID0gcm93W2NvbHVtbl1bXCIkdFwiXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGRhdGEua2V5ID0ga2V5O1xuICAgICAgICAgIGRhdGEubGFiZWwgPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgMF1dW1wiJHRcIl07XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IHJvd1tPYmplY3Qua2V5cyhyb3cpW3kgKyAxXV1bXCIkdFwiXTtcbiAgICAgICAgICBkYXRhLmdyb3VwID0gY29udmVydFR5cGUocm93W09iamVjdC5rZXlzKHJvdylbeSArIDJdXVtcIiR0XCJdKTtcbiAgICAgICAgICBkYXRhLnNlbGVjdGVkID0gY29udmVydFR5cGUocm93W09iamVjdC5rZXlzKHJvdylbeSArIDNdXVtcIiR0XCJdKTtcbiAgICAgICAgICB2YXIgY29sb3JWYWwgPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgNF1dW1wiJHRcIl07XG4gICAgICAgICAgZGF0YS5mb3JtID0gcm93W09iamVjdC5rZXlzKHJvdylbeSArIDVdXVtcIiR0XCJdO1xuICAgICAgICAgIGRhdGEuY29sb3IgPSBjb2xvclZhbFxuICAgICAgICAgICAgPyBjb2xvclZhbFxuICAgICAgICAgICAgOiBkYXRhLmZvcm0gPT09IFwibGluZVwiXG4gICAgICAgICAgICAgID8gZGVmYXVsdENvbG9yXG4gICAgICAgICAgICAgIDogY29sb3JTY2FsZVt4XTtcbiAgICAgICAgICBkYXRhLmljb24gPSByb3dbT2JqZWN0LmtleXMocm93KVt5ICsgNl1dW1wiJHRcIl07XG4gICAgICAgICAgZGF0YS5wYXR0ZXJuID0gcm93W09iamVjdC5rZXlzKHJvdylbeSArIDddXVtcIiR0XCJdLnNwbGl0KFwiLFwiKTtcblxuICAgICAgICAgIGlmIChvcHRpb25zLnRyYW5zbGF0aW9ucykge1xuICAgICAgICAgICAgZGF0YS5sYWJlbCA9IG9wdGlvbnMudHJhbnNsYXRpb25zW2RhdGEubGFiZWxdO1xuICAgICAgICAgICAgZGF0YS5ncm91cCA9IG9wdGlvbnMudHJhbnNsYXRpb25zW2RhdGEuZ3JvdXBdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxlZ2VuZEl0ZW1zLnB1c2goZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGxlZ2VuZEl0ZW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNZXRhRGF0YShqc29uKSB7XG4gIHZhciBkYXRhID0ge307XG4gIGpzb24uZm9yRWFjaChmdW5jdGlvbihyb3csIHgpIHtcbiAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goZnVuY3Rpb24oY29sdW1uLCB5KSB7XG4gICAgICBpZiAoY29sdW1uLmluZGV4T2YoXCJnc3gkXCIpID4gLTEpIHtcbiAgICAgICAgdmFyIGNvbHVtbk5hbWUgPSBjb2x1bW4ucmVwbGFjZShcImdzeCRcIiwgXCJcIik7XG5cbiAgICAgICAgaWYgKGNvbHVtbk5hbWUgPT09IFwicHJvcGVydHlcIikge1xuICAgICAgICAgIHZhciBrZXkgPSByb3dbY29sdW1uXVtcIiR0XCJdLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCBcIlwiKTtcbiAgICAgICAgICBkYXRhW2tleV0gPSBkYXRhW2tleV0gfHwge307XG4gICAgICAgICAgZGF0YVtrZXldID0gY29udmVydFR5cGUocm93W09iamVjdC5rZXlzKHJvdylbeSArIDFdXVtcIiR0XCJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlV2lkZ2V0RGF0YShtZXRhRGF0YSkge1xuICB2YXIgd2lkZ2V0cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoaywgaW5kZXgsIHByb3BlcnR5KSB7XG4gICAgaWYgKGsudG9Mb3dlckNhc2UoKS5pbmRleE9mKHByb3BlcnR5KSA+IC0xKVxuICAgICAgd2lkZ2V0c1tpbmRleCAtIDFdW3Byb3BlcnR5XSA9IGNvbnZlcnRUeXBlKG1ldGFEYXRhW2tdKTtcbiAgfVxuXG4gIHZhciBwcm9wZXJ0aWVzID0gW1xuICAgIFwiaW5wdXRcIixcbiAgICBcImZpZWxkXCIsXG4gICAgXCJncm91cGluZ1wiLFxuICAgIFwiaW5zdHJ1Y3Rpb25zXCIsXG4gICAgXCJtYXhpbXVtXCIsXG4gICAgXCJ0eXBlXCIsXG4gICAgXCJyZWZlcmVuY2VcIixcbiAgICBcInN0eWxlXCIsXG4gIF07XG4gIE9iamVjdC5rZXlzKG1ldGFEYXRhKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24oaykge1xuICAgICAgcmV0dXJuIGsudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwid2lkZ2V0XCIpID4gLTE7XG4gICAgfSlcbiAgICAuZm9yRWFjaChmdW5jdGlvbihrKSB7XG4gICAgICB2YXIgaW5kZXggPSBrLm1hdGNoKC9cXGQrLylbMF07XG4gICAgICB3aWRnZXRzW2luZGV4IC0gMV0gPSB3aWRnZXRzW2luZGV4IC0gMV0gfHwge307XG4gICAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICAgICAgcHJvY2VzcyhrLCBpbmRleCwgcHJvcGVydHkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIHdpZGdldHMuZm9yRWFjaChmdW5jdGlvbih3LCBpKSB7XG4gICAgdy5maWVsZCA9IHcuZmllbGQucmVwbGFjZSgvIC9nLCBcIl9cIik7XG4gICAgdy5pZCA9IGk7XG4gIH0pO1xuICByZXR1cm4gd2lkZ2V0cztcbn1cbiIsInZhciBtYXBJZCA9IDBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tTWFwKGNvbnRhaW5lciwgcHJvcGVydGllcykge1xuICB0aGlzLmlkID0gbWFwSWQrK1xuICB0aGlzLmZpbHRlcnMgPSBbXVxuICB0aGlzLmdyb3VwcyA9IFtdXG4gIHRoaXMuanNvbiA9IFtdXG4gIHRoaXMubGVhZmxldFxuXG4gIHZhciBfdGhpcyA9IHRoaXNcblxuICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5KSB7XG4gICAgX3RoaXNbcHJvcGVydHkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8gL2csICcnKV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XVxuICB9KVxuXG4gIGlmIChfdGhpcy50cmFuc2xhdGlvbnMpIHtcbiAgICB3aW5kb3cudHJhbnNsYXRpb25zID0gX3RoaXMudHJhbnNsYXRpb25zXG4gIH1cblxuICBfdGhpcy5wb3B1cGNvbnRlbnQgPVxuICAgIF90aGlzLnBvcHVwY29udGVudCAmJiB0eXBlb2YgX3RoaXMucG9wdXBjb250ZW50ID09PSAnc3RyaW5nJ1xuICAgICAgPyBfdGhpcy5wb3B1cGNvbnRlbnQuc3BsaXQoJywnKVxuICAgICAgOiBfdGhpcy5wb3B1cGNvbnRlbnQgJiYgdGhpcy5wb3B1cGNvbnRlbnQgPT09ICdvYmplY3QnXG4gICAgICAgID8gX3RoaXMucG9wdXBjb250ZW50XG4gICAgICAgIDogW11cbiAgX3RoaXMucG9wdXBoZWFkZXJzID1cbiAgICBfdGhpcy5wb3B1cGhlYWRlcnMgJiYgdHlwZW9mIF90aGlzLnBvcHVwaGVhZGVycyA9PT0gJ3N0cmluZydcbiAgICAgID8gX3RoaXMucG9wdXBoZWFkZXJzLnNwbGl0KCcsJylcbiAgICAgIDogX3RoaXMucG9wdXBoZWFkZXJzICYmIF90aGlzLnBvcHVwaGVhZGVycyA9PT0gJ29iamVjdCdcbiAgICAgICAgPyBfdGhpcy5wb3B1cGhlYWRlcnNcbiAgICAgICAgOiBbXVxuICBDdXN0b21NYXAuYWxsID0gQ3VzdG9tTWFwLmFsbCB8fCBbXVxuICBDdXN0b21NYXAuYWxsLnB1c2godGhpcylcblxuICBfdGhpcy5yZXNldEZpbHRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICBfdGhpcy5maWx0ZXJzID0gW11cbiAgfVxuXG4gIF90aGlzLnJlbW92ZUdyb3VwcyA9IGZ1bmN0aW9uKCkge1xuICAgIF90aGlzLmdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICBfdGhpcy5sZWFmbGV0LnJlbW92ZUxheWVyKGdyb3VwKVxuICAgIH0pXG5cbiAgICBfdGhpcy5ncm91cHMgPSBbXVxuICB9XG5cbiAgdGhpcy5yZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgICBfdGhpcy5sZWFmbGV0ID0gTC5tYXAoY29udGFpbmVyLCB7XG4gICAgICBtaW5ab29tOiBfdGhpcy5taW56b29tIHx8IG51bGwsXG4gICAgICBtYXhab29tOiBfdGhpcy5tYXh6b29tIHx8IDIwLFxuICAgICAgbWF4Qm91bmRzOiBfdGhpcy5tYXhib3VuZHMgfHwgW190aGlzLnN3Ym91bmRzLCBfdGhpcy5uZWJvdW5kc10sXG4gICAgICBzY3JvbGxXaGVlbFpvb206IHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4ID8gZmFsc2UgOiB0cnVlLFxuICAgICAgem9vbUNvbnRyb2w6XG4gICAgICAgICFfdGhpcy5oYXNPd25Qcm9wZXJ0eSgnem9vbXNsaWRlcicpIHx8IF90aGlzLnpvb21zbGlkZXIgPyBmYWxzZSA6IHRydWUsXG4gICAgICBhdHRyaWJ1dGlvbkNvbnRyb2w6IGZhbHNlXG4gICAgfSlcblxuICAgIGlmIChfdGhpcy5sb2FkZXZlbnQpIF90aGlzLmxlYWZsZXQub24oJ2xvYWQnLCBfdGhpcy5sb2FkZXZlbnQpXG4gICAgaWYgKF90aGlzLmFkZGV2ZW50KSBfdGhpcy5sZWFmbGV0Lm9uKCdsYXllcmFkZCcsIF90aGlzLmFkZGV2ZW50KVxuICAgIHRoaXMubGVhZmxldC5zZXRWaWV3KF90aGlzLmNlbnRlciwgX3RoaXMuem9vbSB8fCAyKVxuICAgIEwudGlsZUxheWVyKFxuICAgICAgJ2h0dHBzOi8vYXBpLm1hcGJveC5jb20vc3R5bGVzL3YxL2lsYWJtZWRpYS8nICtcbiAgICAgICAgX3RoaXMubWFwYm94c3R5bGUgK1xuICAgICAgICAnL3RpbGVzLzI1Ni97en0ve3h9L3t5fT9hY2Nlc3NfdG9rZW49cGsuZXlKMUlqb2lhV3hoWW0xbFpHbGhJaXdpWVNJNkltTnBiSFl5Y1haMmJUQXhhaloxYzJ0emRXVTFiM2d5ZG5ZaWZRLkFIeGw4cFBac2pzcW96OTUtNjA0bncnLFxuICAgICAge31cbiAgICApLmFkZFRvKF90aGlzLmxlYWZsZXQpXG5cbiAgICBpZiAoIV90aGlzLmhhc093blByb3BlcnR5KCd6b29tc2xpZGVyJykgfHwgX3RoaXMuem9vbXNsaWRlcikge1xuICAgICAgTC5jb250cm9sLnpvb21zbGlkZXIoKS5hZGRUbyhfdGhpcy5sZWFmbGV0KVxuICAgIH1cblxuICAgIGlmIChfdGhpcy5mdWxsc2NyZWVuKSB7XG4gICAgICB3aW5kb3cuZnVsbHNjcmVlbiA9IG5ldyBMLkNvbnRyb2wuRnVsbHNjcmVlbigpXG5cbiAgICAgIF90aGlzLmxlYWZsZXQuYWRkQ29udHJvbCh3aW5kb3cuZnVsbHNjcmVlbilcbiAgICB9XG5cbiAgICBMLmNvbnRyb2xcbiAgICAgIC5hdHRyaWJ1dGlvbih7XG4gICAgICAgIHBvc2l0aW9uOiAnYm90dG9tbGVmdCdcbiAgICAgIH0pXG4gICAgICAuc2V0UHJlZml4KF90aGlzLmF0dHJpYnV0aW9uKVxuICAgICAgLmFkZFRvKF90aGlzLmxlYWZsZXQpXG5cbiAgICBfdGhpcy5yZXNldEZpbHRlcnMoKVxuXG4gICAgcmV0dXJuIF90aGlzXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VEb2N1bWVudE5vZGVzKG9wdGlvbnMpIHtcbiAgdmFyIG5ld1NlY3Rpb25IVE1MID0gJydcbiAgbmV3U2VjdGlvbkhUTUwgKz0gJzxzZWN0aW9uIGlkPVwiJyArIG9wdGlvbnMuc2x1ZyArICdcIj4nXG4gIG5ld1NlY3Rpb25IVE1MICs9ICc8ZGl2IGlkPVwiJyArIG9wdGlvbnMuc2x1ZyArICdfX21hcFwiIGNsYXNzPVwibWFwXCI+PC9kaXY+J1xuICBuZXdTZWN0aW9uSFRNTCArPSAnPGFzaWRlIGNsYXNzPVwidG9vbGJveFwiPidcbiAgbmV3U2VjdGlvbkhUTUwgKz0gb3B0aW9ucy50aXRsZVxuICAgID8gJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkIGNsYXNzPVwidWkgbW9iaWxlLW9ubHlcIj48ZGl2IGNsYXNzPVwiaGFtYnVyZ2VyIG1vYmlsZS1vbmx5XCI+PGRpdiBjbGFzcz1cImljb25cIj4gPHNwYW4+PC9zcGFuPiA8c3Bhbj48L3NwYW4+IDxzcGFuPjwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPVwibWVudSB0cmFuc2xhdGVcIj48L2Rpdj48L2Rpdj4nXG4gICAgOiAnJ1xuICBuZXdTZWN0aW9uSFRNTCArPSAnPGRpdiBjbGFzcz1cImJveFwiPidcbiAgbmV3U2VjdGlvbkhUTUwgKz1cbiAgICBvcHRpb25zLnRpdGxlIHx8IG9wdGlvbnMubG9nbyB8fCBvcHRpb25zLmRlc2NyaXB0aW9uXG4gICAgICA/ICc8aGVhZGVyICBjbGFzcz1cInRyYW5zbGF0ZVwiPiA8aDE+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaWQ9XCJsb2dvXCI+PGltZyBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQ1NJUy1pTGFiL2FtdGktdml6L21hc3Rlci9sb2dvLmpwZWdcIiBhbHQ9XCJBTVRJIGxvZ29cIi8+PC9hPjwvaDE+ICA8cCBjbGFzcz1cInRyYW5zbGF0ZVwiPjwvcD48L2hlYWRlcj4nXG4gICAgICA6ICcnXG4gIG5ld1NlY3Rpb25IVE1MICs9XG4gICAgKG9wdGlvbnMuaW5zdHJ1Y3Rpb25zXG4gICAgICA/ICc8cCBjbGFzcz1cInRyYW5zbGF0ZVwiPicgKyBvcHRpb25zLmluc3RydWN0aW9ucyArICc8L3A+J1xuICAgICAgOiAnJykgK1xuICAgICc8ZGl2IGlkPVwiY29udHJvbHNcIj48ZGl2IGNsYXNzPVwibG9hZGVyXCI+PC9kaXY+PC9kaXY+PGZvb3Rlcj48ZGl2IGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+PC9mb290ZXI+PC9kaXY+PC9hc2lkZT4nXG4gIG5ld1NlY3Rpb25IVE1MICs9IG9wdGlvbnMudGl0bGVjYXJkY29udGVudFxuICAgID8gJzxidXR0b24gaWQ9XCInICtcbiAgICBvcHRpb25zLnNsdWcgK1xuICAgICdfX2Fib3V0XCIgY2xhc3M9XCJhYm91dC10cmlnZ2VyIHRyYW5zbGF0ZVwiPkFCT1VUIFRISVMgTUFQPC9idXR0b24+J1xuICAgIDogJydcbiAgbmV3U2VjdGlvbkhUTUwgKz0gJzwvc2VjdGlvbj4nXG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IG5ld1NlY3Rpb25IVE1MXG5cbiAgdmFyIHRyYW5zbGF0YWJsZVN0cmluZ3NcblxuICBpZiAobGFuZykge1xuICAgIHRyYW5zbGF0YWJsZVN0cmluZ3MgPSBPYmplY3Qua2V5cyhvcHRpb25zLnRyYW5zbGF0aW9ucykuc29ydChmdW5jdGlvbiAoXG4gICAgICBhLFxuICAgICAgYlxuICAgICkge1xuICAgICAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGhcbiAgICB9KVxuICB9XG4gIGlmIChvcHRpb25zLnRpdGxlY2FyZGNvbnRlbnQpIHtcbiAgICB2YXIgbmV3RGlhbG9nSFRNTCA9ICcnXG4gICAgbmV3RGlhbG9nSFRNTCArPSAnPGRpdiBjbGFzcz1cImRpYWxvZ1wiIGlkPVwiJyArIG9wdGlvbnMuc2x1ZyArICdfX2RpYWxvZ1wiPidcbiAgICBuZXdEaWFsb2dIVE1MICs9XG4gICAgICAnPGRpdiBjbGFzcz1cImRpYWxvZy1vdmVybGF5XCIgdGFiaW5kZXg9XCItMVwiIGRhdGEtYTExeS1kaWFsb2ctaGlkZT48L2Rpdj4nXG4gICAgbmV3RGlhbG9nSFRNTCArPVxuICAgICAgJzxkaWFsb2cgY2xhc3M9XCJkaWFsb2ctY29udGVudFwiIGFyaWEtbGFiZWxsZWRieT1cImRpYWxvZ1RpdGxlXCIgYXJpYS1kZXNjcmliZWRieT1cImRpYWxvZ0NvbnRlbnRcIj4nXG4gICAgbmV3RGlhbG9nSFRNTCArPVxuICAgICAgJzxidXR0b24gZGF0YS1hMTF5LWRpYWxvZy1oaWRlIGNsYXNzPVwiZGlhbG9nLWNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlIHRoaXMgZGlhbG9nIHdpbmRvd1wiPiZ0aW1lczs8L2J1dHRvbj4nXG4gICAgbmV3RGlhbG9nSFRNTCArPSBvcHRpb25zLnRpdGxlY2FyZHRpdGxlXG4gICAgICA/ICc8aDEgaWQ9XCJkaWFsb2dUaXRsZVwiPicgKyBvcHRpb25zLnRpdGxlY2FyZHRpdGxlICsgJzwvaDE+J1xuICAgICAgOiAnJ1xuICAgIG5ld0RpYWxvZ0hUTUwgKz1cbiAgICAgICc8ZGl2IGlkPVwiZGlhbG9nQ29udGVudFwiPicgKyBvcHRpb25zLnRpdGxlY2FyZGNvbnRlbnQgKyAnPC9kaXY+J1xuICAgIG5ld0RpYWxvZ0hUTUwgKz0gJzwvZGlhbG9nPidcbiAgICBuZXdEaWFsb2dIVE1MICs9ICc8L2Rpdj4nXG5cbiAgICBpZiAobGFuZykge1xuICAgICAgdHJhbnNsYXRhYmxlU3RyaW5ncy5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoJ1xcXFxiKCcgKyBSZWdFeHAuZXNjYXBlKHQpICsgJyknLCAnZ2knKVxuICAgICAgICBuZXdEaWFsb2dIVE1MID0gbmV3RGlhbG9nSFRNTC5yZXBsYWNlKHJlLCBvcHRpb25zLnRyYW5zbGF0aW9uc1t0XSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gbmV3RGlhbG9nSFRNTFxuXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgdmFyIGRpYWxvZ0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5zbHVnICsgJ19fZGlhbG9nJylcbiAgICB2YXIgbWFpbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wdGlvbnMuc2x1ZycpXG4gICAgdmFyIGRpYWxvZ1RyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcHRpb25zLnNsdWcgKyAnX19hYm91dCcpXG5cbiAgICB2YXIgZGlhbG9nQm94ID0gbmV3IEExMXlEaWFsb2coZGlhbG9nRWwsIG1haW5FbClcbiAgICB2YXIgZGlhbG9nID0gZGlhbG9nQm94LmRpYWxvZ1xuICAgIGRpYWxvZ0JveC5zaG93KClcbiAgICBkaWFsb2dCb3gub24oJ2hpZGUnLCBmdW5jdGlvbiAoZGlhbG9nRWwpIHtcbiAgICAgIGRpYWxvZ1RyaWdnZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB9KVxuICAgIGRpYWxvZ0JveC5vbignc2hvdycsIGZ1bmN0aW9uIChkaWFsb2dFbCkge1xuICAgICAgZGlhbG9nVHJpZ2dlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgfSlcbiAgICBkaWFsb2dUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgZGlhbG9nQm94LnNob3coKVxuICAgIH0pXG4gIH1cblxuICBkb2N1bWVudC50aXRsZSA9IG9wdGlvbnMudGl0bGUgKyAnIHwgQ1NJUyAnICsgb3B0aW9ucy5wcm9ncmFtXG4gIHZhciBtZXRhTG9jYWxlT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YUxvY2FsZU9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAnb2c6bG9jYWxlJylcbiAgbWV0YUxvY2FsZU9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsICdlbl9VUycpXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YUxvY2FsZU9HKVxuICB2YXIgbWV0YVR5cGVPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhVHlwZU9HLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAnb2c6dHlwZScpXG4gIG1ldGFUeXBlT0cuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJ2FydGljbGUnKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFUeXBlT0cpXG4gIHZhciBtZXRhV2lkdGhPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhV2lkdGhPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOmltYWdlOndpZHRoJylcbiAgbWV0YVdpZHRoT0cuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJzIwMDAnKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFXaWR0aE9HKVxuICB2YXIgbWV0YUhlaWdodE9HID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFIZWlnaHRPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOmltYWdlOmhlaWdodCcpXG4gIG1ldGFIZWlnaHRPRy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCAnMTMzMycpXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YUhlaWdodE9HKVxuICB2YXIgbWV0YVR3aXR0ZXJDYXJkT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YVR3aXR0ZXJDYXJkT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICd0d2l0dGVyOmNhcmQnKVxuICBtZXRhVHdpdHRlckNhcmRPRy5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCAnc3VtbWFyeScpXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YVR3aXR0ZXJDYXJkT0cpXG4gIHZhciBtZXRhVGl0bGVPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhVGl0bGVPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOnRpdGxlJylcbiAgbWV0YVRpdGxlT0cuc2V0QXR0cmlidXRlKFxuICAgICdjb250ZW50JyxcbiAgICBvcHRpb25zLnRpdGxlICsgJyB8IENTSVMgJyArIG9wdGlvbnMucHJvZ3JhbVxuICApXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YVRpdGxlT0cpXG4gIHZhciBtZXRhVGl0bGVUd2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFUaXRsZVR3aXR0ZXIuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICd0d2l0dGVyOnRpdGxlJylcbiAgbWV0YVRpdGxlVHdpdHRlci5zZXRBdHRyaWJ1dGUoXG4gICAgJ2NvbnRlbnQnLFxuICAgIG9wdGlvbnMudGl0bGUgKyAnIHwgQ1NJUyAnICsgb3B0aW9ucy5wcm9ncmFtXG4gIClcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhVGl0bGVUd2l0dGVyKVxuICB2YXIgbWV0YURlc2NyaXB0aW9uT0cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgbWV0YURlc2NyaXB0aW9uT0cuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICdvZzpkZXNjcmlwdGlvbicpXG4gIG1ldGFEZXNjcmlwdGlvbk9HLnNldEF0dHJpYnV0ZSgnY29udGVudCcsIG9wdGlvbnMuZGVzY3JpcHRpb24pXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWV0YURlc2NyaXB0aW9uT0cpXG4gIHZhciBtZXRhRGVzY3JpcHRpb25Ud2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpXG4gIG1ldGFEZXNjcmlwdGlvblR3aXR0ZXIuc2V0QXR0cmlidXRlKCdwcm9wZXJ0eScsICd0d2l0dGVyOmRlc2NyaXB0aW9uJylcbiAgbWV0YURlc2NyaXB0aW9uVHdpdHRlci5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCBvcHRpb25zLmRlc2NyaXB0aW9uKVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFEZXNjcmlwdGlvblR3aXR0ZXIpXG4gIHZhciBtZXRhSW1hZ2VPRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhSW1hZ2VPRy5zZXRBdHRyaWJ1dGUoJ3Byb3BlcnR5JywgJ29nOmltYWdlJylcbiAgbWV0YUltYWdlT0cuc2V0QXR0cmlidXRlKCdjb250ZW50Jywgb3B0aW9ucy5zY3JlZW5zaG90KVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFJbWFnZU9HKVxuICB2YXIgbWV0YUltYWdlVHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKVxuICBtZXRhSW1hZ2VUd2l0dGVyLnNldEF0dHJpYnV0ZSgncHJvcGVydHknLCAndHdpdHRlcjppbWFnZScpXG4gIG1ldGFJbWFnZVR3aXR0ZXIuc2V0QXR0cmlidXRlKCdjb250ZW50Jywgb3B0aW9ucy5zY3JlZW5zaG90KVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKG1ldGFJbWFnZVR3aXR0ZXIpXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyBoZWFkZXInKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAubWVudScpLmlubmVyVGV4dCA9XG4gICAgICBvcHRpb25zLnRpdGxlXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnIGhlYWRlciBoMScpLmlubmVySFRNTCArPVxuICAgICAgb3B0aW9ucy50aXRsZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnIycgKyBvcHRpb25zLnNsdWcgKyAnIGhlYWRlciBhJ1xuICAgICkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gb3B0aW9ucy5sb2dvID8gJ3VybCgnICsgb3B0aW9ucy5sb2dvICsgJyknIDogJydcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyMnICsgb3B0aW9ucy5zbHVnICsgJyBoZWFkZXIgYSdcbiAgICApLmhyZWYgPSBvcHRpb25zLndlYnNpdGUgPyBvcHRpb25zLndlYnNpdGUgOiAnJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnIycgKyBvcHRpb25zLnNsdWcgKyAnIGhlYWRlciBwJ1xuICAgICkuaW5uZXJUZXh0ID0gb3B0aW9ucy5kZXNjcmlwdGlvbiA/IG9wdGlvbnMuZGVzY3JpcHRpb24gOiAnJ1xuICB9XG59XG4iLCJpbXBvcnQgQ3VzdG9tTWFwIGZyb20gJy4vQ3VzdG9tTWFwLmpzJ1xuaW1wb3J0IG1ha2VMYXllcnMgZnJvbSAnLi9tYWtlTGF5ZXJzLmpzJ1xuaW1wb3J0IHsgY29udmVydFR5cGUgfSBmcm9tICcuL2hlbHBlcnMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG1hcFdpZGdldHNUb1N0YXRlKG9wdGlvbnMsIHdpZGdldENvbnRlbnQpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAubWFwJylcblxuICB2YXIgbWFwID0gbmV3IEN1c3RvbU1hcChjb250YWluZXIsIG9wdGlvbnMpLnJlbmRlcigpXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgdGFibGVzID0gT2JqZWN0LmtleXMob3B0aW9ucykuZmlsdGVyKGZ1bmN0aW9uKGspIHtcbiAgICAgIHJldHVybiBrLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigndGFibGUnKSA+IC0xXG4gICAgfSlcblxuICAgIFByb21pc2UuYWxsKFxuICAgICAgdGFibGVzLm1hcChmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICByZXR1cm4gZmV0Y2goXG4gICAgICAgICAgJ2h0dHBzOi8vY3Npcy5jYXJ0by5jb20vYXBpL3YyL3NxbD9hcGlfa2V5PScgK1xuICAgICAgICAgICAgbWFwLmFwaWtleSArXG4gICAgICAgICAgICAnJmZvcm1hdD1nZW9qc29uJnE9U0VMRUNUJTIwKiUyMEZST00lMjAnICtcbiAgICAgICAgICAgIG9wdGlvbnNbdGFibGVdXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgKVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2VzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChcbiAgICAgICAgICByZXNwb25zZXMubWFwKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSlcblxuICAgICAgLnRoZW4oZnVuY3Rpb24oanNvbnMpIHtcbiAgICAgICAgdmFyIGpzb24gPSBqc29ucy5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgZmVhdHVyZXM6IGEuZmVhdHVyZXMuY29uY2F0KGIuZmVhdHVyZXMpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHZhciBjb2xvcktleVdpZGdldCA9IG1hcC53aWRnZXRzLmZpbmQoZnVuY3Rpb24odykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHcpXG4gICAgICAgICAgcmV0dXJuIHcudHlwZSA9PT0gJ2NvbG9yJ1xuICAgICAgICB9KVxuICAgICAgICBtYXAuanNvbiA9IFtqc29uXVxuXG4gICAgICAgIFxuICAgICAgICBpZiAoY29sb3JLZXlXaWRnZXQpIHtcbiAgICAgICAgICBtYXAuanNvbiA9IFtdXG4gICAgICAgICAgdmFyIGZlYXR1cmVHcm91cHMgPSBqc29uLmZlYXR1cmVzLmdyb3VwQnkoXG4gICAgICAgICAgICBjb2xvcktleVdpZGdldC5maWVsZCxcbiAgICAgICAgICAgICdwcm9wZXJ0aWVzJ1xuICAgICAgICAgIClcbiAgICAgICAgICBPYmplY3Qua2V5cyhmZWF0dXJlR3JvdXBzKVxuICAgICAgICAgICAgLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICByZXR1cm4gZmVhdHVyZUdyb3Vwc1tiXVswXS5wcm9wZXJ0aWVzW1xuICAgICAgICAgICAgICAgIGNvbG9yS2V5V2lkZ2V0LmZpZWxkXG4gICAgICAgICAgICAgIF0ubG9jYWxlQ29tcGFyZShcbiAgICAgICAgICAgICAgICBmZWF0dXJlR3JvdXBzW2FdWzBdLnByb3BlcnRpZXNbY29sb3JLZXlXaWRnZXQuZmllbGRdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgbWFwLmpzb24ucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICBmZWF0dXJlczogZmVhdHVyZUdyb3Vwc1tmZWF0dXJlXVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhvcHRpb25zLndpZGdldHMpXG4gICAgICAgIGlmICghb3B0aW9ucy53aWRnZXRzLmxlbmd0aCkge1xuICAgICAgICAgIFxuICAgICAgICAgIG1ha2VMYXllcnMobWFwKVxuICAgICAgICAgIHZhciBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgI2NvbnRyb2xzJylcbiAgICAgICAgICBib3guaW5uZXJIVE1MID0gJydcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5pdGlhbGl6ZWQgPSAwXG5cbiAgICAgICAgb3B0aW9ucy53aWRnZXRzLmZvckVhY2goZnVuY3Rpb24odywgeCkge1xuICAgICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjJyArIG9wdGlvbnMuc2x1ZyArICcgLndpZGdldC4nICsgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JykgJiYgd2lkZ2V0Q29udGVudFt4XS5vcHRpb25zKSB7XG4gICAgICAgICAgICBuZXcgQ2hvaWNlcyhcbiAgICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKSxcbiAgICAgICAgICAgICAgd2lkZ2V0Q29udGVudFt4XS5vcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWRePVxcJ3NlYXJjaFxcJ10nKSkge1xuICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI3Jlc2V0QnV0dG9uJylcbiAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlUmVzZXQoZWxlbWVudCwgbWFwLCB4KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzZWxlY3RzID0gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKVxuICAgICAgICAgIHZhciBjaGVja3MgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVxcJ2NoZWNrYm94XFwnXScpXG4gICAgICAgICAgKVxuICAgICAgICAgIHZhciBzZWFyY2ggPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVxcJ3RleHRcXCddOm5vdCguY2hvaWNlc19faW5wdXQpJylcbiAgICAgICAgICApXG4gICAgICAgICAgdmFyIHRvZ2dsZSA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XFwncmFkaW9cXCddJylcbiAgICAgICAgICApXG5cbiAgICAgICAgICB2YXIgaW5wdXRzID0gc2VsZWN0c1xuICAgICAgICAgICAgLmNvbmNhdChjaGVja3MpXG4gICAgICAgICAgICAuY29uY2F0KHNlYXJjaClcbiAgICAgICAgICAgIC5jb25jYXQodG9nZ2xlKVxuXG4gICAgICAgICAgaWYgKCFpbnB1dHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIWluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgIG1ha2VMYXllcnMobWFwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5pdGlhbGl6ZWQrK1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjb3VudCA9IGlucHV0cy5sZW5ndGhcbiAgICAgICAgICBpbnB1dHMuZm9yRWFjaChmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZShcbiAgICAgICAgICAgICAgICAgIG1hcCxcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICBvcHRpb25zLndpZGdldHMsXG4gICAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICAgICAgICArK2luaXRpYWxpemVkXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKFxuICAgICAgICAgICAgICAgICAgbWFwLFxuICAgICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMud2lkZ2V0cyxcbiAgICAgICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICAgICsraW5pdGlhbGl6ZWRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgnY3JlYXRlRXZlbnQnIGluIGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnSFRNTEV2ZW50cycpXG4gICAgICAgICAgICAgIGV2dC5pbml0RXZlbnQoJ2NoYW5nZScsIGZhbHNlLCB0cnVlKVxuICAgICAgICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlucHV0LmZpcmVFdmVudCgnb25jaGFuZ2UnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3Lm1hcF9pZCA9IG1hcC5pZFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKG1hcC50cmFuc2xhdGlvbnMpIHtcbiAgICAgICAgICB2YXIgdHJhbnNsYXRhYmxlTm9kZXMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYW5zbGF0ZScpXG4gICAgICAgICAgKVxuICAgICAgICAgIHZhciB0cmFuc2xhdGFibGVTdHJpbmdzID0gT2JqZWN0LmtleXMobWFwLnRyYW5zbGF0aW9ucykuc29ydChmdW5jdGlvbihcbiAgICAgICAgICAgIGEsXG4gICAgICAgICAgICBiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgICAgdHJhbnNsYXRhYmxlTm9kZXMuZm9yRWFjaChmdW5jdGlvbihlbCwgaSkge1xuICAgICAgICAgICAgdHJhbnNsYXRhYmxlU3RyaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1hcC50cmFuc2xhdGlvbnNbdF0pLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoJ1xcXFxiKCcgKyBSZWdFeHAuZXNjYXBlKHQpICsgJyknLCAnZ2knKVxuICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IGVsLmlubmVySFRNTC5yZXBsYWNlKHJlLCBtYXAudHJhbnNsYXRpb25zW3RdKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKG1hcClcbiAgICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJlc2V0KGVsZW1lbnQsIG1hcCwgeCkge1xuICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ10nKS52YWx1ZSA9ICcnXG4gIGlmIChtYXAuZ3JvdXBzLmxlbmd0aCkgbWFwLnJlbW92ZUdyb3VwcygpXG5cbiAgbWFwLmZpbHRlcnNbeF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbWFrZUxheWVycyhtYXApXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZShtYXAsIGVsZW1lbnQsIHdpZGdldHMsIHgsIGNvdW50LCBpbml0aWFsaXplZCkge1xuICB2YXIga2V5bGVzc1dpZGdldHMgPSBbJ3RvZ2dsZScsICdzZWFyY2gnXVxuICB2YXIgb3B0aW9ucyA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0JylcbiAgICA/IEFycmF5LmZyb20oZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5vcHRpb25zKVxuICAgIDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVxcJ3RleHRcXCddJylcbiAgICAgID8gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ10nKSlcbiAgICAgIDogQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpXG4gIHZhciBzZWxlY3Rpb25zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKVxuICAgID8gQXJyYXkuZnJvbShlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpLm9wdGlvbnMpXG4gICAgOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XFwndGV4dFxcJ10nKVxuICAgICAgPyBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cXCd0ZXh0XFwnXScpKVxuICAgICAgOiBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6Y2hlY2tlZCcpKVxuICB2YXIgcG9zc2libGVDaGVja3MgPSBBcnJheS5mcm9tKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSkubWFwKFxuICAgIGZ1bmN0aW9uKG8pIHtcbiAgICAgIHJldHVybiBvLm5hbWUudG9Mb3dlckNhc2UoKVxuICAgIH1cbiAgKVxuXG4gIHZhciBwb3NzaWJsZU9wdGlvbnMsIHBvc3NpYmxlUXVlcmllc1xuICBpZiAoa2V5bGVzc1dpZGdldHMuaW5kZXhPZih3aWRnZXRzW3hdLmlucHV0KSA8IDApIHtcbiAgICBwb3NzaWJsZU9wdGlvbnMgPSB3aWRnZXRzW3hdLmtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGtleS52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgfSlcblxuICAgIHBvc3NpYmxlUXVlcmllcyA9IHBvc3NpYmxlQ2hlY2tzLmNvbmNhdChwb3NzaWJsZU9wdGlvbnMpXG4gIH1cblxuICB2YXIgcXVlcnkgPSBBcnJheS5mcm9tKHNlbGVjdGlvbnMpLm1hcChmdW5jdGlvbihvKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cXCdjaGVja2JveFxcJ10nKVxuICAgICAgPyBvLm5hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgOiBvLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgfSlcblxuICBtYXAuZmlsdGVyc1t3aWRnZXRzW3hdLmlkXSA9XG4gICAgd2lkZ2V0c1t4XS5pbnB1dCA9PT0gJ3RvZ2dsZSdcbiAgICAgID8gZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgICB2YXIgYm9vbCA9IHRydWVcblxuICAgICAgICBpZiAoZmVhdHVyZS5wcm9wZXJ0aWVzLnRvZ2dsZSkge1xuICAgICAgICAgIGJvb2wgPSBjb252ZXJ0VHlwZShxdWVyeVswXSkgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBib29sID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvb2xcbiAgICAgIH1cbiAgICAgIDogd2lkZ2V0c1t4XS5maWVsZCA9PT0gJ2FsbCdcbiAgICAgICAgPyBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICAgICAgdmFyIGJvb2wgPSB0cnVlXG4gICAgICAgICAgdmFyIHdpdGhEaWFjcml0aWNzID0gT2JqZWN0LnZhbHVlcyhmZWF0dXJlLnByb3BlcnRpZXMpXG4gICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgdmFyIHdpdGhvdXREaWFjcml0aWNzID0gT2JqZWN0LnZhbHVlcyhmZWF0dXJlLnByb3BlcnRpZXMpXG4gICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAubGF0aW5pc2UoKVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgd2l0aERpYWNyaXRpY3MuaW5kZXhPZihxdWVyeVswXSkgPCAwICYmXG4gICAgICAgICAgICAgIHdpdGhvdXREaWFjcml0aWNzLmluZGV4T2YocXVlcnlbMF0pIDwgMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYm9vbCA9IGZhbHNlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGJvb2xcbiAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uKGZlYXR1cmUsIGxheWVycykge1xuICAgICAgICAgIHZhciBib29sID0gdHJ1ZVxuICAgICAgICAgIHZhciBmaWVsZCA9IHdpZGdldHNbeF0uZ3JvdXBpbmdcbiAgICAgICAgICAgID8gd2lkZ2V0c1t4XS5ncm91cGluZ1xuICAgICAgICAgICAgOiB3aWRnZXRzW3hdLmZpZWxkXG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwb3NzaWJsZVF1ZXJpZXMuaW5kZXhPZihmZWF0dXJlLnByb3BlcnRpZXNbZmllbGRdLnRvTG93ZXJDYXNlKCkpID5cbiAgICAgICAgICAgICAgICAtMSAmJlxuICAgICAgICAgICAgICBxdWVyeS5pbmRleE9mKGZlYXR1cmUucHJvcGVydGllc1tmaWVsZF0udG9Mb3dlckNhc2UoKSkgPCAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBib29sID0gZmFsc2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYm9vbFxuICAgICAgICB9XG5cbiAgaWYgKGluaXRpYWxpemVkID49IGNvdW50KSBtYXAucmVtb3ZlR3JvdXBzKClcbiAgaWYgKHdpZGdldHMubGVuZ3RoID49IHggKyAxICYmIGluaXRpYWxpemVkID49IGNvdW50KSBtYWtlTGF5ZXJzKG1hcClcbn1cbiIsImltcG9ydCBzdHlsZUtleSBmcm9tICcuL3N0eWxlS2V5LmpzJ1xuaW1wb3J0IG1hcFdpZGdldHNUb1N0YXRlIGZyb20gJy4vbWFwV2lkZ2V0c1RvU3RhdGUuanMnXG5pbXBvcnQgeyBjYXBpdGFsaXplLCBtYWtlRHJvcGRvd25PcHRpb25zIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xuaW1wb3J0IHsgcGFyc2VMZWdlbmREYXRhIH0gZnJvbSAnLi9wYXJzZXJzLmpzJ1xud2luZG93LnN0eWxlS2V5ID0gc3R5bGVLZXlcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWFrZVdpZGdldHMoanNvbnMsIG9wdGlvbnMsIGJveENvbnRlbnQpIHtcbiAgdmFyIHdpZGdldENvbnRlbnQgPSBbXVxuICBvcHRpb25zLndpZGdldHMuZm9yRWFjaChmdW5jdGlvbih3LCB4KSB7XG4gICAgaWYgKCF3Lmhhc093blByb3BlcnR5KCdpZCcpKSB3LmlkID0geFxuICAgIHZhciBsZWdlbmREYXRhID0gdy5yZWZlcmVuY2VcbiAgICAgID8gcGFyc2VMZWdlbmREYXRhKG9wdGlvbnMsIGpzb25zW3hdLmZlZWQuZW50cnksIHcudHlwZSlcbiAgICAgIDogdy5rZXlzXG4gICAgb3B0aW9ucy53aWRnZXRzW3hdLmtleXMgPSBsZWdlbmREYXRhXG4gICAgd2lkZ2V0Q29udGVudC5wdXNoKGZvcm1hdFdpZGdldHMob3B0aW9ucywgeCkpXG4gICAgYm94Q29udGVudCArPVxuICAgICAgJzxzZWN0aW9uIGNsYXNzPVwid2lkZ2V0ICcgK1xuICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICdcIj48aDMgY2xhc3M9XCJ0cmFuc2xhdGVcIj4nICtcbiAgICAgIHdpZGdldENvbnRlbnRbeF0udGl0bGUgK1xuICAgICAgJzwvaDM+J1xuICAgIGJveENvbnRlbnQgKz0gd2lkZ2V0Q29udGVudFt4XS5ub2Rlc1xuICAgIGJveENvbnRlbnQgKz0gJzwvc2VjdGlvbj4nXG4gICAgdmFyIGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAjY29udHJvbHMnKVxuICAgIGJveC5pbm5lckhUTUwgPSBib3hDb250ZW50XG4gICAgdmFyIGxhYmVsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAuaXRlbVRleHQnKVxuICAgIEFycmF5LmZyb20obGFiZWxUZXh0KS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW1UZXh0KSB7XG4gICAgICB2YXIgaGVpZ2h0ID0gaXRlbVRleHQub2Zmc2V0SGVpZ2h0XG4gICAgICB2YXIgZm9udFNpemUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpdGVtVGV4dClbJ2ZvbnQtc2l6ZSddXG4gICAgICB2YXIgb2Zmc2V0ID0gaGVpZ2h0IC8gcGFyc2VJbnQoZm9udFNpemUucmVwbGFjZSgncHgnLCAnJyksIDEwKVxuICAgICAgaXRlbVRleHQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoJyArIG9mZnNldCAqIDEwICsgJyUpJ1xuICAgIH0pXG4gIH0pXG5cbiAgcmV0dXJuIGF3YWl0IG1hcFdpZGdldHNUb1N0YXRlKG9wdGlvbnMsIHdpZGdldENvbnRlbnQpXG59XG5cbmZ1bmN0aW9uIGZvcm1hdFdpZGdldHMob3B0aW9ucywgeCkge1xuICBjb25zb2xlLmxvZyhzdHlsZUtleSlcbiAgdmFyIHdpZGdldE5vZGVzID0gJydcbiAgdmFyIGRyb3Bkb3duT3B0aW9uc1xuXG4gIHN3aXRjaCAob3B0aW9ucy53aWRnZXRzW3hdLmlucHV0KSB7XG4gIGNhc2UgJ3RvZ2dsZSc6XG4gICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgJzxsYWJlbCBmb3I9XCJ0b2dnbGVfJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBjbGFzcz1cInRyYW5zbGF0ZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBpZD1cInRvZ2dsZV8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiICB2YWx1ZT1cIjFcIiBjaGVja2VkPlNob3c8L2xhYmVsPidcbiAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAnPGxhYmVsIGZvcj1cIiR0b2dnbGVfJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBjbGFzcz1cInRyYW5zbGF0ZVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBpZD1cInRvZ2dsZV8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIHZhbHVlPVwiMFwiID5IaWRlPC9sYWJlbD4nXG4gICAgYnJlYWtcblxuICBjYXNlICdzZWFyY2gnOlxuICAgIHdpZGdldE5vZGVzICs9XG4gICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInNlYXJjaF8nICtcbiAgICAgICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkICtcbiAgICAgICAgJ1wiIHBsYWNlaG9sZGVyPVwiJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5pbnN0cnVjdGlvbnMgK1xuICAgICAgICAnXCIgc2l6ZT1cIjEwXCIgLz4nXG4gICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwicmVzZXRCdXR0b25cIiBjbGFzcz1cInRyYW5zbGF0ZVwiPlJlc2V0PC9idXR0b24+J1xuICAgIGJyZWFrXG5cbiAgY2FzZSAnZHJvcGRvd24nOlxuICAgIHdpZGdldE5vZGVzICs9XG4gICAgICAgICc8c2VsZWN0IGlkPVwiZHJvcGRvd25fJyArXG4gICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5maWVsZCArXG4gICAgICAgICdcIiBwbGFjZWhvbGRlcj1cIicgK1xuICAgICAgICBvcHRpb25zLndpZGdldHNbeF0uaW5zdHJ1Y3Rpb25zICtcbiAgICAgICAgJ1wiIG11bHRpcGxlPVwiXCI+PC9zZWxlY3Q+J1xuICAgIGRyb3Bkb3duT3B0aW9ucyA9IG1ha2VEcm9wZG93bk9wdGlvbnMob3B0aW9ucywgeClcbiAgICBicmVha1xuXG4gIGNhc2UgJ2NoZWNrYm94JzpcbiAgICB3aWRnZXROb2RlcyArPSAnPHVsPidcbiAgICB2YXIga2V5U3R5bGVcbiAgICB2YXIgbGVnZW5kSXRlbXMgPSBvcHRpb25zLndpZGdldHNbeF0uZ3JvdXBpbmdcbiAgICAgID8gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZ3JvdXBCeSgnZ3JvdXAnKVxuICAgICAgOiBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5ncm91cEJ5KCdsYWJlbCcpXG4gICAgT2JqZWN0LmtleXMobGVnZW5kSXRlbXMpLmZvckVhY2goZnVuY3Rpb24oZ3JvdXAsIGkpIHtcbiAgICAgIHN3aXRjaCAob3B0aW9ucy53aWRnZXRzW3hdLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2Zvcm0nOlxuICAgICAgICB2YXIgZm9ybXMgPSBvcHRpb25zLndpZGdldHNbeF0ua2V5cy5tYXAoZnVuY3Rpb24oZikge1xuICAgICAgICAgIHJldHVybiBmLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgZ3JvdXA6IGxlZ2VuZEl0ZW1zW2dyb3VwXSxcbiAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICBmb3JtczogZm9ybXMsXG4gICAgICAgICAgbWFwOiBvcHRpb25zXG4gICAgICAgIH1cbiAgICAgICAga2V5U3R5bGUgPSBzdHlsZUtleShzdHlsZU9wdGlvbnMpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgdmFyIHN0eWxlT3B0aW9ucyA9IHtcbiAgICAgICAgICBtYXA6IG9wdGlvbnMsXG4gICAgICAgICAgZ3JvdXA6IGxlZ2VuZEl0ZW1zW2dyb3VwXVxuICAgICAgICB9XG4gICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICB3aWRnZXROb2RlcyArPVxuICAgICAgICAgICc8bGk+PGxhYmVsIGZvcj1cIicgK1xuICAgICAgICAgIGdyb3VwICtcbiAgICAgICAgICAnXCI+PGlucHV0IGNsYXNzPVwid2lkZ2V0ICcgK1xuICAgICAgICAgIG9wdGlvbnMud2lkZ2V0c1t4XS5pbnB1dCArXG4gICAgICAgICAgJ1wiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCInICtcbiAgICAgICAgICAob3B0aW9ucy53aWRnZXRzW3hdLmdyb3VwaW5nID8gZ3JvdXAgOiBsZWdlbmRJdGVtc1tncm91cF1bMF0udmFsdWUpICtcbiAgICAgICAgICAnXCIgaWQ9XCInICtcbiAgICAgICAgICBncm91cCArXG4gICAgICAgICAgJ1wiICcgK1xuICAgICAgICAgIChsZWdlbmRJdGVtc1tncm91cF1bMF0uc2VsZWN0ZWQgPyAnY2hlY2tlZCcgOiAnJykgK1xuICAgICAgICAgICcgPjxzcGFuIGNsYXNzPVwiJyArXG4gICAgICAgICAga2V5U3R5bGUuY2xhc3MgK1xuICAgICAgICAgICdLZXlcIiAnICtcbiAgICAgICAgICAnc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnJyArXG4gICAgICAgICAga2V5U3R5bGUuc3ZnICtcbiAgICAgICAgICAnXCIpPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW1UZXh0XCI+JyArXG4gICAgICAgICAgY2FwaXRhbGl6ZShncm91cCkgK1xuICAgICAgICAgICc8L3NwYW4+PC9sYWJlbD48L2xpPidcbiAgICB9KVxuICAgIHdpZGdldE5vZGVzICs9ICc8L3VsPidcbiAgICBicmVha1xuXG4gIGRlZmF1bHQ6XG4gICAgd2lkZ2V0Tm9kZXMgKz0gJzx1bD4nXG4gICAgdmFyIGtleVN0eWxlXG4gICAgdmFyIGxlZ2VuZEl0ZW1zID0gb3B0aW9ucy53aWRnZXRzW3hdLmdyb3VwaW5nXG4gICAgICA/IG9wdGlvbnMud2lkZ2V0c1t4XS5rZXlzLmdyb3VwQnkoJ2dyb3VwJylcbiAgICAgIDogb3B0aW9ucy53aWRnZXRzW3hdLmtleXMuZ3JvdXBCeSgnbGFiZWwnKVxuICAgIE9iamVjdC5rZXlzKGxlZ2VuZEl0ZW1zKS5mb3JFYWNoKGZ1bmN0aW9uKGdyb3VwLCBpKSB7XG4gICAgICBzd2l0Y2ggKG9wdGlvbnMud2lkZ2V0c1t4XS50eXBlKSB7XG4gICAgICBjYXNlICdmb3JtJzpcbiAgICAgICAgdmFyIGZvcm1zID0gb3B0aW9ucy53aWRnZXRzW3hdLmtleXMubWFwKGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICByZXR1cm4gZi52YWx1ZVxuICAgICAgICB9KVxuICAgICAgICB2YXIgc3R5bGVPcHRpb25zID0ge1xuICAgICAgICAgIGdyb3VwOiBsZWdlbmRJdGVtc1tncm91cF0sXG4gICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgZm9ybXM6IGZvcm1zLFxuICAgICAgICAgIG1hcDogb3B0aW9uc1xuICAgICAgICB9XG4gICAgICAgIGtleVN0eWxlID0gc3R5bGVLZXkoc3R5bGVPcHRpb25zKVxuICAgICAgICBicmVha1xuXG4gICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgIHZhciBzdHlsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgbWFwOiBvcHRpb25zLFxuICAgICAgICAgIGdyb3VwOiBsZWdlbmRJdGVtc1tncm91cF1cbiAgICAgICAgfVxuICAgICAgICBrZXlTdHlsZSA9IHN0eWxlS2V5KHN0eWxlT3B0aW9ucylcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgd2lkZ2V0Tm9kZXMgKz1cbiAgICAgICAgICAnPGxpPjxzcGFuIGNsYXNzPVwiJyArXG4gICAgICAgICAga2V5U3R5bGUuY2xhc3MgK1xuICAgICAgICAgICdLZXlcIiAnICtcbiAgICAgICAgICAnc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnJyArXG4gICAgICAgICAga2V5U3R5bGUuc3ZnICtcbiAgICAgICAgICAnXCIpPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW1UZXh0XCI+JyArXG4gICAgICAgICAgY2FwaXRhbGl6ZShncm91cCkgK1xuICAgICAgICAgICc8L3NwYW4+PC9saT4nXG4gICAgfSlcbiAgICB3aWRnZXROb2RlcyArPSAnPC91bD4nXG4gICAgYnJlYWtcbiAgfVxuXG4gIHZhciB3aWRnZXRUaXRsZSA9XG4gICAgb3B0aW9ucy53aWRnZXRzW3hdLmZpZWxkID09PSAnYWxsJ1xuICAgICAgPyAnU2VhcmNoJ1xuICAgICAgOiBvcHRpb25zLndpZGdldHNbeF0uZmllbGQucmVwbGFjZSgvXy9nLCAnICcpXG4gIHJldHVybiB7XG4gICAgbm9kZXM6IHdpZGdldE5vZGVzLFxuICAgIHRpdGxlOiB3aWRnZXRUaXRsZSxcbiAgICBvcHRpb25zOiBkcm9wZG93bk9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgcGFyc2VNZXRhRGF0YSwgcGFyc2VXaWRnZXREYXRhIH0gZnJvbSAnLi9wYXJzZXJzLmpzJ1xuaW1wb3J0IG1ha2VXaWRnZXRzIGZyb20gJy4vbWFrZVdpZGdldHMuanMnXG5pbXBvcnQgbWFrZURvY3VtZW50Tm9kZXMgZnJvbSAnLi9tYWtlRG9jdW1lbnROb2Rlcy5qcydcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaW5pdFdpdGhTcHJlYWRzaGVldChcbiAgZGF0YVVSTCxcbiAgb3B0aW9ucyxcbiAgdHJhbnNsYXRpb25zXG4pIHtcbiAgdmFyIG1hcFxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZGF0YVVSTCArIG9wdGlvbnMuZ29vZ2xlU2hlZXQgKyAnLycgKyAyICsgJy9wdWJsaWMvdmFsdWVzP2FsdD1qc29uJ1xuICAgIClcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIHZhciBtZXRhRGF0YSA9IHBhcnNlTWV0YURhdGEoanNvbi5mZWVkLmVudHJ5KVxuICAgICAgICB2YXIgd2lkZ2V0cyA9IHBhcnNlV2lkZ2V0RGF0YShtZXRhRGF0YSlcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB7fVxuICAgICAgICBPYmplY3Qua2V5cyhtZXRhRGF0YSkuZm9yRWFjaChmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgcHJvcGVydGllc1tkYXRhXSA9IG1ldGFEYXRhW2RhdGFdXG4gICAgICAgIH0pXG4gICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIHByb3BlcnRpZXNbZGF0YV0gPSBvcHRpb25zW2RhdGFdXG4gICAgICAgIH0pXG5cbiAgICAgICAgdmFyIHR3b0RfcHJvcGVyaXRlcyA9IFtcbiAgICAgICAgICB7IG5hbWU6ICdjZW50ZXInLCBkZWZhdWx0OiBbMCwgMF0gfSxcbiAgICAgICAgICB7IG5hbWU6ICdpY29uc2l6ZScsIGRlZmF1bHQ6IFsyMCwgMjBdIH0sXG4gICAgICAgICAgeyBuYW1lOiAnaWNvbmFuY2hvcicsIGRlZmF1bHQ6IFs1LCA1XSB9LFxuICAgICAgICAgIHsgbmFtZTogJ3N3Ym91bmRzJywgZGVmYXVsdDogWy05MCwgLTE4MF0gfSxcbiAgICAgICAgICB7IG5hbWU6ICduZWJvdW5kcycsIGRlZmF1bHQ6IFs5MCwgMTgwXSB9XG4gICAgICAgIF1cblxuICAgICAgICB0d29EX3Byb3Blcml0ZXMuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eSkge1xuICAgICAgICAgIHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV0gPVxuICAgICAgICAgICAgdHlwZW9mIHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV0gPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgID8gcHJvcGVydGllc1twcm9wZXJ0eS5uYW1lXS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHYsIDEwKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV1cbiAgICAgICAgICAgICAgICA/IHByb3BlcnRpZXNbcHJvcGVydHkubmFtZV1cbiAgICAgICAgICAgICAgICA6IHByb3BlcnR5LmRlZmF1bHRcbiAgICAgICAgfSlcbiAgICAgICAgcHJvcGVydGllcy5zbHVnID0gcHJvcGVydGllcy5tYXBJRC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJy0nKVxuICAgICAgICBwcm9wZXJ0aWVzLnRyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9uc1xuICAgICAgICBwcm9wZXJ0aWVzLndpZGdldHMgPSB3aWRnZXRzXG4gICAgICAgIG1ha2VEb2N1bWVudE5vZGVzKHByb3BlcnRpZXMpXG4gICAgICAgIHZhciByZWZlcmVuY2VTaGVldHMgPSB3aWRnZXRzLmZpbHRlcihmdW5jdGlvbih3KSB7XG4gICAgICAgICAgcmV0dXJuIHcucmVmZXJlbmNlXG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVNoZWV0cykge1xuICAgICAgICAgIHZhciBib3hDb250ZW50ID0gJydcbiAgICAgICAgICB2YXIgcmVmZXJlbmNlU2hlZXRVUkxTID0gd2lkZ2V0c1xuICAgICAgICAgICAgLm1hcChmdW5jdGlvbih3KSB7XG4gICAgICAgICAgICAgIGlmICh3LnJlZmVyZW5jZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICBkYXRhVVJMICtcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZ29vZ2xlU2hlZXQgK1xuICAgICAgICAgICAgICAgICAgJy8nICtcbiAgICAgICAgICAgICAgICAgIHcucmVmZXJlbmNlICtcbiAgICAgICAgICAgICAgICAgICcvcHVibGljL3ZhbHVlcz9hbHQ9anNvbidcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKHUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICByZWZlcmVuY2VTaGVldFVSTFMubWFwKGZ1bmN0aW9uKHVybCkge1xuICAgICAgICAgICAgICByZXR1cm4gZmV0Y2godXJsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlcy5tYXAoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgZnVuY3Rpb24oanNvbnMpIHtcbiAgICAgICAgICAgICAgbWFwID0gYXdhaXQgbWFrZVdpZGdldHMoanNvbnMsIHByb3BlcnRpZXMsIGJveENvbnRlbnQpXG5cbiAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuZm9vdGVyICYmIHByb3BlcnRpZXMuZm9vdGVyLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIHZhciBmb290ZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICAgICAgICAgICAgICBmb290ZXJOb2RlLmlubmVySFRNTCA9XG4gICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmZvb3RlciArICcgIDxkaXYgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj4nXG4gICAgICAgICAgICAgICAgdmFyIHBlblVsdGltYXRlTm9kZSA9XG4gICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAnIycgKyBwcm9wZXJ0aWVzLnNsdWcgKyAnICNjb250cm9scydcbiAgICAgICAgICAgICAgICAgICkgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9wZXJ0aWVzLnNsdWcgKyAnaGVhZGVyJylcbiAgICAgICAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgICBmb290ZXJOb2RlLFxuICAgICAgICAgICAgICAgICAgcGVuVWx0aW1hdGVOb2RlLm5leHRTaWJsaW5nXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmVzb2x2ZShtYXApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBtYXAgPSBuZXcgQ3VzdG9tTWFwKGNvbnRhaW5lciwgb3B0aW9ucykucmVuZGVyKClcbiAgICAgICAgICBtYWtlTGF5ZXJzKG1hcClcbiAgICAgICAgICB2YXIgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcGVydGllcy5mb290ZXIgJiYgcHJvcGVydGllcy5mb290ZXIudHJpbSgpKSB7XG4gICAgICAgICAgdmFyIGZvb3Rlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgICAgICAgIGZvb3Rlck5vZGUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIHByb3BlcnRpZXMuZm9vdGVyICsgJyAgPGRpdiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PidcbiAgICAgICAgICB2YXIgcGVuVWx0aW1hdGVOb2RlID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgcHJvcGVydGllcy5zbHVnICsgJyAjY29udHJvbHMnKSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBwcm9wZXJ0aWVzLnNsdWcgKyAnaGVhZGVyJylcbiAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICBmb290ZXJOb2RlLFxuICAgICAgICAgICAgcGVuVWx0aW1hdGVOb2RlLm5leHRTaWJsaW5nXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9KVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS00IS4vbWFpbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3Bvc3Rjc3MhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtNCEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS00IS4vbWFpbi5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiaW1wb3J0IG1ha2VEb2N1bWVudE5vZGVzIGZyb20gJy4vbWFrZURvY3VtZW50Tm9kZXMuanMnXG5pbXBvcnQgbWFrZUxheWVycyBmcm9tICcuL21ha2VMYXllcnMuanMnXG5pbXBvcnQgbWFrZVdpZGdldHMgZnJvbSAnLi9tYWtlV2lkZ2V0cy5qcydcbmltcG9ydCBDdXN0b21NYXAgZnJvbSAnLi9DdXN0b21NYXAuanMnXG53aW5kb3cubWFrZUxheWVycyA9IG1ha2VMYXllcnNcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGluaXRXaXRob3V0U3ByZWFkc2hlZXQob3B0aW9ucywgdHJhbnNsYXRpb25zKSB7XG4gIHZhciB0d29EX3Byb3Blcml0ZXMgPSBbXG4gICAgeyBuYW1lOiAnY2VudGVyJywgZGVmYXVsdDogWzAsIDBdIH0sXG4gICAgeyBuYW1lOiAnaWNvbnNpemUnLCBkZWZhdWx0OiBbMjAsIDIwXSB9LFxuICAgIHsgbmFtZTogJ2ljb25hbmNob3InLCBkZWZhdWx0OiBbNSwgNV0gfSxcbiAgICB7IG5hbWU6ICdzd2JvdW5kcycsIGRlZmF1bHQ6IFstOTAsIC0xODBdIH0sXG4gICAgeyBuYW1lOiAnbmVib3VuZHMnLCBkZWZhdWx0OiBbOTAsIDE4MF0gfVxuICBdXG5cbiAgdHdvRF9wcm9wZXJpdGVzLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHkpIHtcbiAgICBvcHRpb25zW3Byb3BlcnR5Lm5hbWVdID1cbiAgICAgIHR5cGVvZiBvcHRpb25zW3Byb3BlcnR5Lm5hbWVdID09PSAnc3RyaW5nJ1xuICAgICAgICA/IG9wdGlvbnNbcHJvcGVydHkubmFtZV0uc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBwYXJzZUludCh2LCAxMClcbiAgICAgICAgfSlcbiAgICAgICAgOiBvcHRpb25zW3Byb3BlcnR5Lm5hbWVdXG4gICAgICAgICAgPyBvcHRpb25zW3Byb3BlcnR5Lm5hbWVdXG4gICAgICAgICAgOiBwcm9wZXJ0eS5kZWZhdWx0XG4gIH0pXG5cbiAgb3B0aW9ucy5zbHVnID0gb3B0aW9ucy5tYXBJRC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJy0nKVxuICBvcHRpb25zLnRyYW5zbGF0aW9ucyA9IHRyYW5zbGF0aW9uc1xuICBtYWtlRG9jdW1lbnROb2RlcyhvcHRpb25zKVxuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnX19tYXAubWFwJylcblxuICBpZiAob3B0aW9ucy5mb3JtYXRUb29sYm94KSB7XG4gICAgdmFyIG1hcCA9IG5ldyBDdXN0b21NYXAoY29udGFpbmVyLCBvcHRpb25zKS5yZW5kZXIoKVxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJldHVybiBmZXRjaChcbiAgICAgICAgJ2h0dHBzOi8vY3Npcy5jYXJ0by5jb20vYXBpL3YyL3NxbD9hcGlfa2V5PScgK1xuICAgICAgICAgIG1hcC5hcGlrZXkgK1xuICAgICAgICAgICcmZm9ybWF0PWdlb2pzb24mcT1TRUxFQ1QlMjAqJTIwRlJPTSUyMCcgK1xuICAgICAgICAgIG1hcC50YWJsZVxuICAgICAgKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgICBtYXAuanNvbiA9IFtqc29uXVxuICAgICAgICAgIHZhciBib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICcgI2NvbnRyb2xzJylcbiAgICAgICAgICBtYXAuZm9ybWF0dG9vbGJveChib3gpXG4gICAgICAgICAgbWFrZUxheWVycyhtYXApXG4gICAgICAgICAgcmVzb2x2ZShtYXApXG4gICAgICAgIH0pXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZXR1cm4gZmV0Y2goXG4gICAgICAgICdodHRwczovL2NzaXMuY2FydG8uY29tL2FwaS92Mi9zcWw/YXBpX2tleT0nICtcbiAgICAgICAgICAob3B0aW9ucy5hcGlrZXkgfHwgb3B0aW9ucy5hcGlLZXkgfHwgb3B0aW9uc1snYXBpIGtleSddKSArXG4gICAgICAgICAgJyZmb3JtYXQ9Z2VvanNvbiZxPVNFTEVDVCUyMColMjBGUk9NJTIwJyArXG4gICAgICAgICAgb3B0aW9ucy50YWJsZVxuICAgICAgKVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGFzeW5jIGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgICBvcHRpb25zLmpzb24gPSBbanNvbl1cbiAgICAgICAgICB2YXIgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBvcHRpb25zLnNsdWcgKyAnICNjb250cm9scycpXG4gICAgICAgICAgdmFyIGJveENvbnRlbnQgPSAnJ1xuICAgICAgICAgIHZhciBtYXBcbiAgICAgICAgICBpZiAob3B0aW9ucy53aWRnZXRzKSB7XG4gICAgICAgICAgICBtYXAgPSBhd2FpdCBtYWtlV2lkZ2V0cyhvcHRpb25zLmpzb24sIG9wdGlvbnMsIGJveENvbnRlbnQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtYXAgPSBuZXcgQ3VzdG9tTWFwKGNvbnRhaW5lciwgb3B0aW9ucykucmVuZGVyKClcbiAgICAgICAgICAgIG1ha2VMYXllcnMobWFwKVxuICAgICAgICAgICAgdmFyIGJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAjY29udHJvbHMnKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcHRpb25zLmZvb3RlciAmJiBvcHRpb25zLmZvb3Rlci50cmltKCkpIHtcbiAgICAgICAgICAgIHZhciBmb290ZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICAgICAgICAgIGZvb3Rlck5vZGUuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgb3B0aW9ucy5mb290ZXIgKyAnICA8ZGl2IGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+J1xuICAgICAgICAgICAgdmFyIHBlblVsdGltYXRlTm9kZSA9XG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyMnICsgb3B0aW9ucy5zbHVnICsgJyAjY29udHJvbHMnKSB8fFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIG9wdGlvbnMuc2x1ZyArICdoZWFkZXInKVxuICAgICAgICAgICAgcGVuVWx0aW1hdGVOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICBmb290ZXJOb2RlLFxuICAgICAgICAgICAgICBwZW5VbHRpbWF0ZU5vZGUubmV4dFNpYmxpbmdcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNvbHZlKG1hcClcbiAgICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZUxhbmd1YWdlRGF0YSB9IGZyb20gJy4vcGFyc2Vycy5qcydcblxudmFyIHVybCA9XG4gIHdpbmRvdy5sb2NhdGlvbiAhPSB3aW5kb3cucGFyZW50LmxvY2F0aW9uXG4gICAgPyBkb2N1bWVudC5yZWZlcnJlclxuICAgIDogZG9jdW1lbnQubG9jYXRpb24uaHJlZlxudmFyIGhyZWYgPSAvbGFuZz0oW14mXSspLy5leGVjKHVybClcbndpbmRvdy5sYW5nID0gaHJlZiA/IGhyZWZbMV0gOiBudWxsXG5cbnZhciBsZWFmbGV0TG9hZGVkID0gMFxuXG52YXIgcHJpbWFyeUpzRmlsZXMgPSBbXG4gICdodHRwczovL3VucGtnLmNvbS9sZWFmbGV0QDEuMy4xL2Rpc3QvbGVhZmxldC5qcycsXG4gICdodHRwczovL3VucGtnLmNvbS93aGF0d2ctZmV0Y2hAMy4wLjAvZGlzdC9mZXRjaC51bWQuanMnXG5dXG5cbnZhciBzZWNvbmRhcnlKc0ZpbGVzID0gW1xuICAnaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldC56b29tc2xpZGVyQDAuNy4xL3NyYy9MLkNvbnRyb2wuWm9vbXNsaWRlci5qcycsXG4gICdodHRwczovL3VucGtnLmNvbS9sZWFmbGV0LWZ1bGxzY3JlZW5AMS4wLjIvZGlzdC9MZWFmbGV0LmZ1bGxzY3JlZW4ubWluLmpzJyxcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2Nocm9tYS1qc0AyLjAuMy9jaHJvbWEubWluLmpzJyxcbiAgJ2h0dHBzOi8vY3Npcy1pbGFiLmdpdGh1Yi5pby9tYXAtdGVtcGxhdGVzL2Rpc3QvanMvdmVuZG9yL0ExMXktRGlhbG9nLmpzJyxcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2Nob2ljZXMuanNANy4wLjAvcHVibGljL2Fzc2V0cy9zY3JpcHRzL2Nob2ljZXMubWluLmpzJyxcbiAgJ2h0dHBzOi8vdW5wa2cuY29tL2xlYWZsZXQubWFya2VyY2x1c3RlckAxLjQuMS9kaXN0L2xlYWZsZXQubWFya2VyY2x1c3Rlci5qcycsXG4gICdodHRwczovL2NzaXMtaWxhYi5naXRodWIuaW8vbWFwLXRlbXBsYXRlcy9kaXN0L2pzL3ZlbmRvci9wYXR0ZXJucy5qcycsXG4gICdodHRwczovL2NzaXMtaWxhYi5naXRodWIuaW8vbWFwLXRlbXBsYXRlcy9kaXN0L2pzL3ZlbmRvci9sYXRpbml6ZS5qcydcbl1cblxuZnVuY3Rpb24gaGFuZGxlTG9hZExlYWZsZXQoKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBzZWNvbmRhcnlKc0ZpbGVzLmZvckVhY2goZnVuY3Rpb24oZmlsZSkge1xuICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkXG4gICAgICB2YXIganNMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICAgIGpzTGluay5zcmMgPSBmaWxlXG4gICAgICBoZWFkLmFwcGVuZENoaWxkKGpzTGluaylcblxuICAgICAganNMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZWFmbGV0TG9hZGVkKytcblxuICAgICAgICBpZiAobGVhZmxldExvYWRlZCA9PT0gc2Vjb25kYXJ5SnNGaWxlcy5sZW5ndGggKyBwcmltYXJ5SnNGaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXNvbHZlKGxlYWZsZXRMb2FkZWQpXG4gICAgICAgICAgcmV0dXJuIGxlYWZsZXRMb2FkZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGltcG9ydEZpbGVzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgcHJpbWFyeUpzRmlsZXMuZm9yRWFjaChmdW5jdGlvbihmaWxlKSB7XG4gICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWRcbiAgICAgIHZhciBqc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgICAganNMaW5rLnNyYyA9IGZpbGVcbiAgICAgIGpzTGluay5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGVhZmxldExvYWRlZCsrXG5cbiAgICAgICAgaWYgKGxlYWZsZXRMb2FkZWQgPT09IHByaW1hcnlKc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgIGhhbmRsZUxvYWRMZWFmbGV0KClcbiAgICAgICAgICByZXNvbHZlKGxlYWZsZXRMb2FkZWQpXG4gICAgICAgICAgcmV0dXJuIGxlYWZsZXRMb2FkZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaGVhZC5hcHBlbmRDaGlsZChqc0xpbmspXG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1ha2VNYXAob3B0aW9ucykge1xuICBpZiAoIWxlYWZsZXRMb2FkZWQpIHtcbiAgICByZXR1cm4gYXdhaXQgaW1wb3J0RmlsZXMoKS50aGVuKGFzeW5jIGZ1bmN0aW9uKHNjcmlwdHNMb2FkZWQpIHtcbiAgICAgIHJldHVybiBhd2FpdCBpbml0KG9wdGlvbnMpXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXdhaXQgaW5pdChvcHRpb25zKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQob3B0aW9ucykge1xuICB2YXIgZGF0YVVSTCA9ICdodHRwczovL3NwcmVhZHNoZWV0cy5nb29nbGUuY29tL2ZlZWRzL2xpc3QvJ1xuICB3aW5kb3cuZGVmYXVsdENvbG9yID1cbiAgICBvcHRpb25zLm9jZWFuY29sb3IgfHwgb3B0aW9ucy5vY2VhbkNvbG9yIHx8IG9wdGlvbnNbJ29jZWFuIGNvbG9yJ11cbiAgdmFyIHRyYW5zbGF0aW9uc1xuXG4gIGlmIChsYW5nKSB7XG4gICAgZmV0Y2goZGF0YVVSTCArIG9wdGlvbnMuZ29vZ2xlU2hlZXQgKyAnLycgKyAzICsgJy9wdWJsaWMvdmFsdWVzP2FsdD1qc29uJylcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgIH0pXG4gICAgICAudGhlbihhc3luYyBmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIHRyYW5zbGF0aW9ucyA9IHBhcnNlTGFuZ3VhZ2VEYXRhKGpzb24uZmVlZC5lbnRyeSlcblxuICAgICAgICBjb25zdCBpbml0V2l0aFNwcmVhZHNoZWV0ID0gcmVxdWlyZSgnLi9pbml0V2l0aFNwcmVhZHNoZWV0LmpzJykuZGVmYXVsdFxuICAgICAgICByZXR1cm4gYXdhaXQgaW5pdFdpdGhTcHJlYWRzaGVldChkYXRhVVJMLCBvcHRpb25zLCB0cmFuc2xhdGlvbnMpXG4gICAgICB9KVxuICB9IGVsc2UgaWYgKG9wdGlvbnMuZ29vZ2xlU2hlZXQpIHtcbiAgICBjb25zdCBpbml0V2l0aFNwcmVhZHNoZWV0ID0gcmVxdWlyZSgnLi9pbml0V2l0aFNwcmVhZHNoZWV0LmpzJykuZGVmYXVsdFxuICAgIHJldHVybiBhd2FpdCBpbml0V2l0aFNwcmVhZHNoZWV0KGRhdGFVUkwsIG9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaW5pdFdpdGhvdXRTcHJlYWRzaGVldCA9IHJlcXVpcmUoJy4vaW5pdFdpdGhvdXRTcHJlYWRzaGVldC5qcycpXG4gICAgICAuZGVmYXVsdFxuICAgIHJldHVybiBhd2FpdCBpbml0V2l0aG91dFNwcmVhZHNoZWV0KG9wdGlvbnMpXG4gIH1cbn1cbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGluYSgpIHtcbiAgdmFyIG1hcCA9IGF3YWl0IG1ha2VNYXAoe1xuICAgIG1hcElEOiAnY2hpbmFwb3dlcicsXG4gICAgY2VudGVyOiBbMTMuNzIzNzI2NCwgMTEwLjY4MTQ1NzJdLFxuICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgem9vbTogNCxcbiAgICBtYXhab29tOiA2LFxuICAgIG1pblpvb206IDAsXG4gICAgY2x1c3RlckRpc3RhbmNlOiAxNSxcbiAgICBBdHRyaWJ1dGlvbjpcbiAgICAgICdEYXRhIGJ5IDxhIGhyZWY9XCJodHRwczovL2FtdGkuY3Npcy5vcmdcIiB0YXJnZXQ9XCJfYmxhbmtcIj5DU0lTIEFNVEk8L2E+LCDCqSBPcGVuU3RyZWV0TWFwLCBMZWFmbGV0IGNvbnRyaWJ1dG9ycywgwqkgQ0FSVE8nLFxuICAgIHRhYmxlOiAncmFuZ2VfcmluZ3NfbWFwJyxcbiAgICBhcGlLZXk6ICdqbExYVUhVWUl0YmFodF91NlJJWDBBJyxcbiAgICBwcm9ncmFtOiAnQXNpYSBNYXJpdGltZSBUcmFuc3BhcmVuY3kgSW5pdGlhdGl2ZScsXG4gICAgd2Vic2l0ZTogJ2h0dHBzOi8vYW10aS5jc2lzLm9yZy8nLFxuICAgIExvZ286ICAgICAgXG4gICAgJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9DU0lTLWlMYWIvYW10aS12aXovbWFzdGVyL2xvZ28uanBlZycsXG4gICAgdGl0bGU6ICdDaGluZXNlIFBvd2VyIFByb2plY3Rpb24gQ2FwYWJpbGl0aWVzIGluIHRoZSBTb3V0aCBDaGluYSBTZWEnLFxuICAgIGRlc2NyaXB0aW9uOiAgJ1RvIHRvZ2dsZSBlYWNoIGxheWVyIG9uIGFuZCBvZmYsIGNoZWNrIGFuZCB1bmNoZWNrIHRoZSBjb3JyZXNwb25kaW5nIGJveCBvbiB0aGUga2V5IGluIHRoZSB1cHBlci1yaWdodCBvZiB0aGUgZ3JhcGhpYy4gRm9yIGlkZW50aWZ5aW5nIGluZm9ybWF0aW9uIG9uIHRoZSBpbmRpdmlkdWFsIG91dHBvc3RzIGFuZCByYW5nZSByaW5ncywgaG92ZXIgdGhlIGN1cnNvciBvdmVyIHRoZW0gb24gdGhlIG1hcC4nLFxuICAgIG1hcGJveFN0eWxlOiAgIGxhbmcgJiYgbGFuZy5pbmRleE9mKFwiemgtXCIpID4gLTFcbiAgICA/IFwiY2l0dWkzd2F3MDAxNjJqbzF6Y3NmMXVyalwiXG4gICAgOiBcImNqODRzOWJldDEwZjUycm8ybHJuYTUweWdcIixcbiAgICAnb2NlYW4gY29sb3InOiAnI2I3YzdkMScsXG4gICAgb25FYWNoRmVhdHVyZToge1xuICAgICAgbW91c2VvdmVyOiBmdW5jdGlvbiBtb3VzZW92ZXIoZSkge1xuICAgICAgICB0aGlzLm9wZW5Qb3B1cChlLmxhdGxuZylcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb3JtYXRQb3B1cENvbnRlbnQ6IGZ1bmN0aW9uKGZlYXR1cmUsIG1hcCkge1xuICAgIGNvbnN0IGdldFBhZ2VMYW5nID0gKCkgPT4ge1xuICAgICAgdmFyIHVybCA9ICh3aW5kb3cubG9jYXRpb24gIT0gd2luZG93LnBhcmVudC5sb2NhdGlvbilcbiAgICAgICAgPyBkb2N1bWVudC5yZWZlcnJlclxuICAgICAgICA6IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG5cbiAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gJz8nICsgdXJsLnNwbGl0KCc/JylbMV1cbiAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpXG4gICAgICBjb25zdCBsYW5nID0gdXJsUGFyYW1zLmdldCgnbGFuZycpXG4gICAgICByZXR1cm4gbGFuZ1xuICAgIH1cblxuICAgIGxhbmcgPSBnZXRQYWdlTGFuZygpXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFuZycsIGxhbmcpXG5cbiAgICB2YXIgc3VmZml4ID0gbGFuZyA/IFwiX1wiICsgbGFuZyA6IFwiXCI7XG4gICAgc3VmZml4ID0gc3VmZml4LnJlcGxhY2UoXCItXCIsIFwiX1wiKTtcbiAgICB2YXIgbmFtZSA9IGZlYXR1cmUucHJvcGVydGllc1tcIm5hbWVcIiArIHN1ZmZpeF07XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gZmVhdHVyZS5wcm9wZXJ0aWVzW1wiZGVzY3JpcHRpb25cIiArIHN1ZmZpeF07XG4gICAgdmFyIG91dHBvc3QgPSBmZWF0dXJlLnByb3BlcnRpZXMuY2hpbmVzZV9vdXRwb3N0cztcblxuICAgIHJldHVybiAoXG4gICAgICAnPGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuICAgICAgKCFsYW5nID8gb3V0cG9zdCA6IFwiXCIpICtcbiAgICAgIChuYW1lICYmIG91dHBvc3QgJiYgIWxhbmcgPyBcIlwiIDogXCJcIikgK1xuICAgICAgKG5hbWUgIT09IG91dHBvc3QgPyBuYW1lIDogXCJcIikgK1xuICAgICAgXCI8L2Rpdj5cIiArXG4gICAgICAnPGRpdiBjbGFzcz1cInBvcHVwRW50cnlTdHlsZVwiPicgK1xuICAgICAgZGVzY3JpcHRpb24gK1xuICAgICAgXCI8L2Rpdj5cIlxuICAgIClcbiAgfSxcblxuICAgIHpvb21TbGlkZXI6IGZhbHNlLFxuICAgIHdpZGdldHM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICcwJyxcbiAgICAgICAgZmllbGQ6IFwiY29tYmF0X2FpcmNyYWZ0XCIsXG4gICAgICAgIGlucHV0OiBcImNoZWNrYm94XCIsXG4gICAgICAgIHR5cGU6IFwiZm9ybVwiLFxuICAgICAgICBrZXlzOiBbe1xuICAgICAgICAgIGNvbG9yOiAnIzAwQjI5RScsXG4gICAgICAgICAgbGFiZWw6IFwiQm9tYmVyIEFpcmNyYWZ0XCIsXG4gICAgICAgICAgdmFsdWU6IFwiQm9tYmVyIEFpcmNyYWZ0XCIsXG4gICAgICAgICAgZm9ybTogXCJsaW5lXCIsXG4gICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbG9yOiAnIzAwQjI5RScsXG4gICAgICAgICAgbGFiZWw6IFwiRmlnaHRlciBBaXJjcmFmdFwiLFxuICAgICAgICAgIHZhbHVlOiBcIkZpZ2h0ZXIgQWlyY3JhZnRcIixcbiAgICAgICAgICBmb3JtOiBcImxpbmVcIixcbiAgICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIGZpZWxkOiBcIm1pc3NpbGVfcGxhdGZvcm1zXCIsXG4gICAgICAgIHR5cGU6IFwiZm9ybVwiLFxuICAgICAgICBpbnB1dDogXCJjaGVja2JveFwiLFxuICAgICAgICBrZXlzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6ICcjYTc3ZGIyJyxcbiAgICAgICAgICAgIHBhdHRlcjogJ3N0cmlwZScsXG4gICAgICAgICAgICBsYWJlbDogXCJBbnRpLVNoaXAgQ3J1aXNlIE1pc3NpbGVzXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJBbnRpLVNoaXAgQ3J1aXNlIE1pc3NpbGVzXCIsXG4gICAgICAgICAgICBmb3JtOiBcImxpbmVcIixcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2xvcjogJyNhNzdkYjInLFxuICAgICAgICAgICAgbGFiZWw6IFwiU0FNIFNpdGVzXCIsXG4gICAgICAgICAgICB2YWx1ZTogXCJTQU0gU2l0ZXNcIixcbiAgICAgICAgICAgIGZvcm06IFwibGluZVwiLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnMycsXG4gICAgICAgIGZpZWxkOiBcInJhZGFyXCIsXG4gICAgICAgIHR5cGU6IFwiZm9ybVwiLFxuICAgICAgICBpbnB1dDogXCJjaGVja2JveFwiLFxuICAgICAgICBrZXlzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29sb3I6ICcjMmU4ZWJjJyxcbiAgICAgICAgICAgIGxhYmVsOiBcIlJhZGFyIFJhbmdlICh0YXJnZXRzIGF0IDI1LDAwMCBmZWV0KVwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiUmFkYXIgUmFuZ2UgKHRhcmdldHMgYXQgMjUsMDAwIGZlZXQpXCIsXG4gICAgICAgICAgICBmb3JtOiBcImxpbmVcIixcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2xvcjogJyMyZThlYmMnLFxuICAgICAgICAgICAgbGFiZWw6IFwiUmFkYXIgUmFuZ2UgKHRhcmdldHMgYXQgc2VhIGxldmVsKVwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiUmFkYXIgUmFuZ2UgKHRhcmdldHMgYXQgc2VhIGxldmVsKVwiLFxuICAgICAgICAgICAgZm9ybTogXCJsaW5lXCIsXG4gICAgICAgICAgICBzZWxlY3RlZDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0pXG59XG5cblxuXG5cbiIsImltcG9ydCBcIi4vc2Nzcy9tYWluLnNjc3NcIjtcbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xuaW1wb3J0IHsgbWFrZU1hcCB9IGZyb20gXCIuL2pzL21ha2VNYXBcIjtcbmltcG9ydCB7IGV4dGVybmFsTGluayB9IGZyb20gXCIuL2pzL2hlbHBlcnMuanNcIjtcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tIFwiLi9qcy9oZWxwZXJzLmpzXCI7XG53aW5kb3cubWFrZU1hcCA9IG1ha2VNYXA7XG53aW5kb3cuZXh0ZXJuYWxMaW5rID0gZXh0ZXJuYWxMaW5rO1xud2luZG93LmNhcGl0YWxpemUgPSBjYXBpdGFsaXplO1xuXG4vLyBpbXBvcnQgeyBleGFtcGxlcywgYXJjdGljSmFtbWluZyB9IGZyb20gXCIuL2V4YW1wbGVzLmpzXCI7XG4vLyBhcmN0aWNKYW1taW5nKCk7XG4vLyBleGFtcGxlcygpXG5cbmltcG9ydCB7IGNoaW5hIH0gZnJvbSBcIi4vY2hpbmEuanNcIjtcbmNoaW5hKCk7XG5cbndpbmRvdy5jb252ZXJ0VHlwZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHZhciB2ID0gTnVtYmVyKHZhbHVlKTtcbiAgcmV0dXJuICFpc05hTih2KVxuICAgID8gdlxuICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ1bmRlZmluZWRcIlxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gXCJudWxsXCJcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0cnVlXCJcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IFwiZmFsc2VcIlxuICAgICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgICAgOiB2YWx1ZTtcbn07XG5cbmlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcykge1xuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfTtcbiAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICBldnQuaW5pdEN1c3RvbUV2ZW50KFxuICAgICAgZXZlbnQsXG4gICAgICBwYXJhbXMuYnViYmxlcyxcbiAgICAgIHBhcmFtcy5jYW5jZWxhYmxlLFxuICAgICAgcGFyYW1zLmRldGFpbFxuICAgICk7XG4gICAgcmV0dXJuIGV2dDtcbiAgfVxuXG4gIEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XG5cbiAgd2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XG59XG5cbkFycmF5LnByb3RvdHlwZS5ncm91cEJ5ID0gZnVuY3Rpb24ocHJvcGVydHkxLCBwcm9wZXJ0eTIpIHtcbiAgcmV0dXJuIHByb3BlcnR5MlxuICAgID8gdGhpcy5yZWR1Y2UoZnVuY3Rpb24oZ3JvdXBzLCBpdGVtKSB7XG4gICAgICAgIHZhciB2YWwgPSBpdGVtW3Byb3BlcnR5Ml1bcHJvcGVydHkxXTtcbiAgICAgICAgZ3JvdXBzW3ZhbF0gPSBncm91cHNbdmFsXSB8fCBbXTtcbiAgICAgICAgZ3JvdXBzW3ZhbF0ucHVzaChpdGVtKTtcbiAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICAgIH0sIHt9KVxuICAgIDogdGhpcy5yZWR1Y2UoZnVuY3Rpb24oZ3JvdXBzLCBpdGVtKSB7XG4gICAgICAgIHZhciB2YWwgPSBpdGVtW3Byb3BlcnR5MV07XG4gICAgICAgIGdyb3Vwc1t2YWxdID0gZ3JvdXBzW3ZhbF0gfHwgW107XG4gICAgICAgIGdyb3Vwc1t2YWxdLnB1c2goaXRlbSk7XG4gICAgICAgIHJldHVybiBncm91cHM7XG4gICAgICB9LCB7fSk7XG59O1xuXG5SZWdFeHAuZXNjYXBlID0gZnVuY3Rpb24ocykge1xuICByZXR1cm4gcy5yZXBsYWNlKC9bXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgXCJcXFxcJCZcIik7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==