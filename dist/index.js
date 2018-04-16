(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["InfiniteScroll"] = factory();
	else
		root["InfiniteScroll"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var win = window;
      var easingEquations = {
        easeOutSine: function easeOutSine(pos) {
          return Math.sin(pos * (Math.PI / 2));
        },
        easeInOutSine: function easeInOutSine(pos) {
          return -0.5 * (Math.cos(Math.PI * pos) - 1);
        },
        easeInOutQuint: function easeInOutQuint(pos) {
          if ((pos /= 0.5) < 1) {
            return 0.5 * Math.pow(pos, 5);
          }

          return 0.5 * (Math.pow(pos - 2, 5) + 2);
        }
      };

      var requestAnimFrame = function () {
        return win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || function (callback) {
          win.setTimeout(callback, 1000 / 60);
        };
      }();

      var animateTopOffset = function animateTopOffset() {
        var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : win;
        var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;
        var easing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'easeOutSine';
        var currentTime = 0;
        var scrollY = container.scrollY || document.documentElement.scrollTop;
        var time = Math.max(0.1, Math.min(Math.abs(scrollY - offset) / speed, 0.8));

        var tick = function tick() {
          currentTime += 1 / 60;
          var p = currentTime / time;
          var t = easingEquations[easing](p);
          var pos = p < 1 ? scrollY + (offset - scrollY) * t : offset;

          if (p < 1) {
            requestAnimFrame(tick);
          }

          container.scrollTo(0, pos);
        };

        tick();
      };

      var _default = animateTopOffset;
      exports.default = _default;
      /***/
    }]
    /******/
    )["default"]
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _animateTopOffset = __webpack_require__(1);

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * ScrollSpy
 */
var ScrollSpy =
/*#__PURE__*/
function () {
  /**
   * Create an instance
   *
   * @param  {Object} settings
   * @return {Object} ScrollSpy instance
   */
  function ScrollSpy() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ScrollSpy);

    var options = _objectSpread({
      linkCurrentClass: 'current',
      linksContainerSelector: '.js-scroll-spy-nav',
      sectionSelector: '.js-scroll-spy-section',
      headerOffset: true,
      headerClass: '.c-header'
    }, settings);

    this.init(options);
    window.addEventListener('load', this.refreshPositions.bind(this));
    window.addEventListener('resize', this.refreshPositions.bind(this));
    return this;
  }
  /**
   * Initialize the plugin
   *
   * @param  {Object} options
   * @return {Void}
   */


  _createClass(ScrollSpy, [{
    key: "init",
    value: function init(options) {
      // Prepare properties
      this.setProperties(options); // Fire up plugin

      this.getSectionData();
      this.getCurrentSectionIndex();
      this.setCurrentState();
      this.bindEvents();
    }
    /**
     * Set plugins properties
     *
     * @param {Void}
     */

  }, {
    key: "setProperties",
    value: function setProperties(options) {
      var doc = document;
      this.linksContainerSelector = options.linksContainerSelector;
      this.sectionSelector = options.sectionSelector;
      this.linksContainer = doc.querySelector(this.linksContainerSelector);
      this.links = _toConsumableArray(this.linksContainer.querySelectorAll('a'));
      this.sections = _toConsumableArray(doc.querySelectorAll(this.sectionSelector));
      this.headerOffset = options.headerOffset;
      this.headerClass = options.headerClass;
      this.linkCurrentClass = options.linkCurrentClass;
      this.currentIdx = 0;
      this.data = {
        offsets: [],
        ids: []
      };
    }
    /**
     * Prepare the data for the sections
     *
     * @return {Void}
     */

  }, {
    key: "getSectionData",
    value: function getSectionData() {
      var _this = this;

      this.sections.forEach(function (section) {
        _this.data.ids.push(section.getAttribute('id'));

        _this.data.offsets.push(_this.getSectionOffset(section));
      });
    }
    /**
     * Update the data for the sections
     *
     * @return {Void}
     */

  }, {
    key: "refreshPositions",
    value: function refreshPositions() {
      var _this2 = this;

      this.data.offsets = this.data.offsets.map(function (offset, index) {
        return _this2.getSectionOffset(_this2.sections[index]);
      });
    }
    /**
     * Get the top offset of a section
     *
     * @param  {<DOM Element>Object} sectio
     * @return {Number}
     */

  }, {
    key: "getSectionOffset",
    value: function getSectionOffset(section) {
      if (!this.headerOffset) {
        return section.offsetTop;
      }

      return section.offsetTop - document.querySelector(this.headerClass).offsetHeight;
    }
    /**
     * Find the index of the current section
     *
     * @return {Void}
     */

  }, {
    key: "getCurrentSectionIndex",
    value: function getCurrentSectionIndex() {
      var _this3 = this;

      var scrollTop = window.pageYOffset;
      this.data.offsets.forEach(function (offset, index) {
        var nextOffset = _this3.data.offsets[index + 1];

        if (scrollTop >= offset && scrollTop < nextOffset || scrollTop >= offset && typeof nextOffset === 'undefined') {
          _this3.currentIdx = index;
        }
      });
      this.setCurrentState();
    }
    /**
     * Set classes to the appropriate nav item
     *
     * @return {Void}
     */

  }, {
    key: "setCurrentState",
    value: function setCurrentState() {
      var _this4 = this;

      document.querySelector(this.linksContainerSelector).querySelectorAll(".".concat(this.linkCurrentClass)).forEach(function (item) {
        return item.classList.remove(_this4.linkCurrentClass);
      });
      this.links[this.currentIdx].parentNode.classList.add(this.linkCurrentClass);
    }
    /**
     * Scroll to the current secction
     *
     * @return {Void}
     */

  }, {
    key: "scrollToCurrentSection",
    value: function scrollToCurrentSection() {
      (0, _animateTopOffset.animateTopOffset)(this.data.offsets[this.currentIdx]);
    }
    /**
     * Bind the events
     *
     * @return {Void}
     */

  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this5 = this;

      var win = window;
      this.links.forEach(function (link, index) {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          _this5.currentIdx = index;

          _this5.scrollToCurrentSection();
        });
      });
      win.addEventListener('scroll', function (event) {
        _this5.getCurrentSectionIndex();
      });
    }
  }]);

  return ScrollSpy;
}();

exports.default = ScrollSpy;

/***/ })
/******/ ])["default"];
});