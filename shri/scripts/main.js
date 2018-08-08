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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/card/card.js":
/*!*************************************!*\
  !*** ./src/components/card/card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cards; });
/* harmony import */ var _termostat_termostat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../termostat/termostat */ "./src/components/termostat/termostat.js");
/* harmony import */ var _popup_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../popup/popup */ "./src/components/popup/popup.js");
/* harmony import */ var _layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/layout */ "./src/layout/layout.js");




class Cards {
  constructor() {
    this.termostatInited = false;

    this.cards = document.querySelectorAll(".card");

    this.initEventListeners();
  }

  initEventListeners() {
    this.cards.forEach(card => {
      card.addEventListener("click", event => {
        const element = event.target.getBoundingClientRect();

        const { cardType } = event.target.dataset;

        switch (cardType) {
          case "temperature_active":
            this.showTermostatPopup(element);
            break;

          case "temperature":
            this.showTemperatureControllerPopup(element);
            break;

          case "sun":
          case "sun_active":
            this.showLightControllerPopup(element);
        }
      });
    });
  }

  showTermostatPopup(element) {
    const initTermostat = () => {
      if (this.termostatInited) return;

      const termostatInstance = new _termostat_termostat__WEBPACK_IMPORTED_MODULE_0__["default"]({
        min: 10,
        max: 30,
        defaultValue: 20
      });

      this.termostatInited = true;
    };

    const termostatSettingsPopup = new _popup_popup__WEBPACK_IMPORTED_MODULE_1__["default"]({
      selector: "#popup-card-termostat",
      preview: {
        width: element.width,
        height: element.height,
        position: {
          top: element.top,
          left: element.left
        }
      },
      openCallback: initTermostat,
      layout: _layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"]
    });

    termostatSettingsPopup.open();
  }

  showTemperatureControllerPopup(element) {
    const temperatureSettingsPopup = new _popup_popup__WEBPACK_IMPORTED_MODULE_1__["default"]({
      selector: "#popup-controller-temperature",
      preview: {
        width: element.width,
        height: element.height,
        position: {
          top: element.top,
          left: element.left
        }
      },
      layout: _layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"]
    });

    temperatureSettingsPopup.open();
  }

  showLightControllerPopup(element) {
    const lightSettingsPopup = new _popup_popup__WEBPACK_IMPORTED_MODULE_1__["default"]({
      selector: "#popup-controller-light",
      preview: {
        width: element.width,
        height: element.height,
        position: {
          top: element.top,
          left: element.left
        }
      },
      layout: _layout_layout__WEBPACK_IMPORTED_MODULE_2__["default"]
    });

    lightSettingsPopup.open();
  }
}

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
const domUtils = {
  doesNodeContainClick: (node, e) => {
    if (!node || !e) return false;

    if (node.contains(e.target)) return true;
  }
};

class Navigation {
  constructor({ selector }) {
    this.menuOpened = false;
    this.headerMenu = document.querySelector(selector);
    this.headerBurgerMenu = document.querySelector("#header-burger");

    if (this.isMobile()) {
      this.initNavigation();
    }
  }

  isMobile() {
    const maxMobileWidth = 768;

    return window.innerWidth < maxMobileWidth;
  }

  initNavigation() {
    this.headerMenu.classList.add("header-menu-list_state-mobile");

    this.headerBurgerMenu.addEventListener("click", () => {
      if (!this.menuOpened) {
        this.openNavigation();
      } else {
        this.closeNavigation();
      }
    });
  }

  openNavigation() {
    this.headerMenu.classList.add("header-menu-list_state-mobile-opened");

    this.menuOpened = true;
  }

  closeNavigation() {
    this.headerMenu.classList.remove("header-menu-list_state-mobile-opened");

    this.menuOpened = false;
  }
}

/***/ }),

/***/ "./src/components/pager/pager.js":
/*!***************************************!*\
  !*** ./src/components/pager/pager.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pager; });
/**
 * Pager class organaze logic of working pagination in any module of app,
 * it holds information about currentPage, changes, when somebody interacts with it,
 * and calls side-effects in outer modules
 */

class Pager {
  /**
   * {
   *  @param {String} selectorId - how to find pager in app
   *  @param {Function} nextPageCallback - sideEffect function
   *  @param {Function} prevPageCallback - sideEffect function
   *  @param {number} countPages - pages amount
   * }
   */

  constructor({ selectorId, nextPageCallback, prevPageCallback, countPages }) {
    this.pager = document.querySelector(selectorId);

    this.params = {
      countPages: countPages - 1,
      currentPage: 0
    };

    this.controls = {
      prevButton: this.pager.querySelector(".pager__page_back"),
      nextButton: this.pager.querySelector(".pager__page_next")
    };

    this.effects = {
      nextPage: nextPageCallback,
      prevPage: prevPageCallback
    };

    this.initEvents();
    this.updateControls();
  }

  /**
   * @returns {Number} currentId
   */
  getCurrentPage() {
    return this.params.currentPage;
  }

  /**
   *  Init events for created pager
   */
  initEvents() {
    this.controls.prevButton.addEventListener("click", () => {
      this.goToPrevPage();
    });
    this.controls.nextButton.addEventListener("click", () => {
      this.goToNextPage();
    });
  }

  /**
   *  Update controls of pages after changes in pager,
   *  it add disabled attributes to Button elements,
   *  so user couldn't interact with controls
   */
  updateControls() {
    const { countPages, currentPage } = this.params;

    if (currentPage < countPages) {
      this.controls.nextButton.removeAttribute("disabled");
    } else {
      this.controls.nextButton.setAttribute("disabled", "disabled");
    }

    if (currentPage === 0) {
      this.controls.prevButton.setAttribute("disabled", "disabled");
    } else {
      this.controls.prevButton.removeAttribute("disabled");
    }
  }

  goToNextPage() {
    this.params.currentPage++;

    this.effects.nextPage();
    this.updateControls();
  }

  goToPrevPage() {
    this.params.currentPage--;

    this.effects.prevPage();
    this.updateControls();
  }
}

/***/ }),

/***/ "./src/components/popup/popup.js":
/*!***************************************!*\
  !*** ./src/components/popup/popup.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
/**
 *  This class holds logic for working with system Popups.
 *  It can animate block with a defined selector.
 */
class Popup {
  constructor({
    preview: {
      width,
      height,
      position: { top, left }
    },
    selector,
    openCallback,
    layout
  }) {
    this.openCallback = openCallback;
    this.previewOptions = {
      width,
      height,
      top: `${top}px`,
      left: `${left}px`
    };

    this.popup = document.querySelector(selector);
    this.closeButton = this.popup.querySelector(".popup-close");
    this.popupLayout = document.querySelector("#popup-layout");
    this.layout = layout;

    this.popupOptions = this.initPopupOptions();

    this.closePopup = this.closePopup.bind(this);

    this.initEvents();
  }

  initPopupOptions() {
    const popupBox = this.popup.getBoundingClientRect();

    return {
      width: popupBox.width,
      height: popupBox.height
    };
  }

  initEvents() {
    this.closeButton.addEventListener("click", this.closePopup);
    this.popup.addEventListener("transitionend", this.openCallback);
  }

  removeEvents() {
    this.closeButton.removeEventListener("click", this.closePopup);
    this.popup.removeEventListener("transitionend", this.openCallback);
  }

  /**
   * Positions element before animation
   * creates miniature of popup in place, when it was opened.
   */
  positionPopupInBeginAnimationPosition() {
    this.popup.style.top = this.previewOptions.top;
    this.popup.style.left = this.previewOptions.left;

    this.popup.style.transform = `
      scaleX(${this.previewOptions.width / this.popupOptions.width}) 
      scaleY(${this.previewOptions.height / this.popupOptions.height})
    `;

    this.popup.style.visibility = "visible";
    this.popup.style.transitionProperty = "";
    this.popup.style.transitionDuration = "";
  }

  /**
   * Positions element before animation,
   * its run animation of popup from miniature to its full size.
   */
  runOpenPopupAnimation() {
    window.requestAnimationFrame(() => {
      this.popup.style.transitionProperty = "transform, top, left";
      this.popup.style.transitionDuration = "0.3s";
      this.popup.style.top = "50%";
      this.popup.style.left = "50%";
      this.popup.style.transform = "translate(-50%, -50%) scaleX(1) scaleY(1)";
    });
  }

  open() {
    this.positionPopupInBeginAnimationPosition();
    this.showPopupLayout();
    this.runOpenPopupAnimation();
  }

  closePopup() {
    this.removePopupLayout();
    this.popup.style.visibility = "hidden";

    this.removeEvents();
  }

  showPopupLayout() {
    this.layout.block();
    this.popupLayout.classList.add("popup-layout_state-opened");
  }

  removePopupLayout() {
    this.layout.unblock();
    this.popupLayout.classList.remove("popup-layout_state-opened");
  }
}

/***/ }),

/***/ "./src/components/termostat/termostat.js":
/*!***********************************************!*\
  !*** ./src/components/termostat/termostat.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Termostat; });
class Termostat {
  constructor({ min, max, defaultValue }) {
    this.isDragging = false;

    this.elem = document.getElementById("termostat");
    this.value = document.getElementById("termostat-value");
    this.termostatInput = document.getElementById("termostat-input");

    this.options = {
      min,
      max,
      fromAngle: 30,
      toAngle: 330,
      angle: 330 - 30,
      divisionSize: 300 / (max - min)
    };

    this.marksSize = {
      lineLength: 21.5
    };

    this.elementOptions = {
      height: this.elem.clientHeight,
      width: this.elem.clientWidth,
      radius: (this.elem.clientHeight - this.marksSize.lineLength * 2) / 2
    };

    const elementBox = this.elem.getBoundingClientRect();

    this.elementCenterCoords = {
      x: elementBox.left + this.elementOptions.radius + this.marksSize.lineLength,
      y: elementBox.top + this.elementOptions.radius + this.marksSize.lineLength
    };

    this.arrow = new TermostatArrow({
      circleFromAngle: this.options.fromAngle
    });

    this.markers = new TermostatMarkers({
      circleRadius: this.elementOptions.radius,
      markLength: this.marksSize.lineLength,
      circleAngle: this.options.angle
    });

    this.setInitValue(defaultValue);
    this.addEventListeners();
  }

  /**
   *
   * @param {Number} defaultTemperature
   */
  setInitValue(defaultTemperature) {
    const mapTemperatureToRadians = temperature => {
      const radians = this.options.divisionSize * (temperature - this.options.min);

      return radians;
    };

    const cssInitRadiansAngle = mapTemperatureToRadians(defaultTemperature);

    this.updateTermostatValue(cssInitRadiansAngle);
  }

  /**
   *
   * @param {Number} newRadianValue
   */
  renderTermostatValue(newRadianValue) {
    const mapRadiansToTemperature = radians => {
      const temperature = this.options.min + radians / this.options.divisionSize;

      return Math.round(temperature);
    };

    const newValue = mapRadiansToTemperature(newRadianValue);

    this.value.innerHTML = `+${newValue}`;
  }

  /**
   * Render termostat value tranformed in the interface of termostat
   * @param {Number} cssNewRadiansAngle
   */
  updateTermostatValue(cssNewRadiansAngle) {
    this.arrow.updateValue(cssNewRadiansAngle);
    this.markers.updateMarkersValue(cssNewRadiansAngle);

    this.renderTermostatValue(cssNewRadiansAngle);
  }

  /**
   * Calculate what value user wants to the termostat
   * @param {Event} e
   */
  processUserGesture(e) {
    const eventCoords = {
      x: e.pageX,
      y: e.pageY
    };

    const deltaX = this.elementCenterCoords.x - eventCoords.x;
    const deltaY = this.elementCenterCoords.y - eventCoords.y;

    const newAngle = Math.atan2(-deltaY, -deltaX); // -, because we need to flip circle (2pi -> pi, pi -> 2pi)
    const newAngleInRadians = newAngle * (180 / Math.PI);

    // shifting radians for convenient working with min-range of termostat
    let cssNewRadiansAngle = newAngleInRadians - 120 < 0 ? newAngleInRadians + 360 - 120 : newAngleInRadians - 120;

    if (cssNewRadiansAngle > 300 && cssNewRadiansAngle < 330) {
      cssNewRadiansAngle = 300;
    }

    if (cssNewRadiansAngle < 360 && cssNewRadiansAngle > 330) {
      cssNewRadiansAngle = 0;
    }

    this.updateTermostatValue(cssNewRadiansAngle);
  }

  addEventListeners() {
    // begin dragging
    this.elem.addEventListener("mousedown", e => {
      this.isDragging = true;
    });

    this.elem.addEventListener("touchstart", e => {
      this.isDragging = true;
    });

    // dragging
    window.addEventListener("mousemove", e => {
      if (this.isDragging) {
        this.processUserGesture(e);
      }
    });

    window.addEventListener("touchmove", e => {
      if (this.isDragging) {
        this.processUserGesture(e);
      }
    });

    // end dragging
    window.addEventListener("mouseup", e => {
      this.isDragging = false;
    });

    window.addEventListener("touchend", e => {
      this.isDragging = false;
    });
  }
}

/**
 * Class responds for working markers.
 * Creates needed amount of lines and appends it to termostat.
 */
class TermostatMarkers {
  constructor({ markLength, circleRadius, circleAngle }) {
    this.options = {
      circleRadius,
      circleAngle
    };

    this.line = {
      length: markLength,
      breadth: 1,
      offset: 1.4
    };

    this.markersGroupElem = document.getElementById("termostat-marks");
    this.markersStylesBlock = document.getElementById("termostat-styles");

    this.initMarks();
  }

  initMarks() {
    const lines = [];

    const amountLines = this.options.circleAngle / (this.line.breadth + this.line.offset);

    for (let i = 0; i < amountLines; i++) {
      const defaultLine = document.createElementNS("http://www.w3.org/2000/svg", "line");

      defaultLine.setAttribute("x1", "0");
      defaultLine.setAttribute("y1", "0");
      defaultLine.setAttribute("x2", this.line.length);
      defaultLine.setAttribute("y2", "0");
      defaultLine.setAttribute("class", "termostat-marks__line");

      defaultLine.setAttribute("transform", `rotate(${(this.line.breadth + this.line.offset) * i}) 
         translate(${this.options.circleRadius}, 0)`);

      lines.push(defaultLine);
    }

    if (!this.markersGroupElem.append) {
      lines.map(line => {
        this.markersGroupElem.appendChild(line);
      });
    } else {
      this.markersGroupElem.append(...lines);
    }
  }

  updateMarkersValue(cssNewRadiansAngle) {
    // we calculate how much lines matches to currents radians angle
    const filledMarkersAmount = Math.round(cssNewRadiansAngle / (this.line.breadth + this.line.offset));

    // Animation of marks works with inline css mechanism
    this.markersStylesBlock.innerHTML = `
       #termostat-marks line:nth-child(-n + ${filledMarkersAmount}){
            stroke: #F5A623;
       }
    }`;
  }
}

class TermostatArrow {
  constructor({ circleFromAngle }) {
    this.arrowElement = document.getElementById("termostat-arrow");

    this.options = {
      circleFromAngle
    };
  }

  /**
   *
   * @param {Number} cssNewRadiansAngle
   */
  updateValue(cssNewRadiansAngle) {
    this.arrowElement.style.transform = `rotate(${Math.round(cssNewRadiansAngle + this.options.circleFromAngle)}deg)`;
  }
}

/***/ }),

/***/ "./src/features/dashboardDevices/devicesList.js":
/*!******************************************************!*\
  !*** ./src/features/dashboardDevices/devicesList.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DevicesList; });
/* harmony import */ var _components_pager_pager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/pager/pager */ "./src/components/pager/pager.js");


class DevicesList {
  constructor() {
    this.devicesList = document.querySelector(".widget-devices-list");
    this.deviceItemWidth;

    this.pager = this.initPager();
  }

  getDeviceItemWidth(devicesItem) {
    return devicesItem.getBoundingClientRect().width;
  }

  /**
   * It inits list pager, when it needed,
   * when items aren't fit to width of device,
   * it will display pager, which will shift items to the view area
   */
  initPager() {
    const devicesItems = this.devicesList.querySelectorAll(".widget-devices-item");

    const countItems = devicesItems.length;

    if (countItems) {
      this.devicesListWidth = this.devicesList.getBoundingClientRect().width;
      this.deviceItemWidth = this.getDeviceItemWidth(devicesItems[0]);

      const itemFitsInListWidth = this.deviceItemWidth * countItems < this.devicesListWidth;

      if (!itemFitsInListWidth) {
        const itemsToViewCount = Math.ceil(countItems - Math.round(this.devicesListWidth / this.deviceItemWidth));

        const devicesPager = new _components_pager_pager__WEBPACK_IMPORTED_MODULE_0__["default"]({
          selectorId: "#devices-list-pager",
          countPages: itemsToViewCount,
          nextPageCallback: () => {
            this.shiftPage();
          },
          prevPageCallback: () => {
            this.shiftPage();
          }
        });

        return devicesPager;
      }

      return null;
    }
  }

  shiftPage() {
    const currentPage = this.pager.getCurrentPage();

    this.devicesList.style.marginLeft = `-${this.deviceItemWidth * currentPage}px`;
  }
}

/***/ }),

/***/ "./src/features/dashboardMain/sliderVertical.js":
/*!******************************************************!*\
  !*** ./src/features/dashboardMain/sliderVertical.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VerticalSlider; });
const MOBILE_MAX_WIDTH = 768;

class VerticalSlider {
  /**
   * @param {string} elementSelector
   */
  constructor(elementSelector) {
    if (!this.hasSupport()) {
      return;
    }

    this.config = {
      visibleSliderItems: 2
    };

    this.slider = document.querySelector(`${elementSelector}`);

    if (!this.slider) {
      throw new Error(`Couldn't init VerticalSlider, page hasn't element with selector ${elementSelector}`);
    }

    this.initSlider();
  }

  hasSupport() {
    return window.innerWidth > MOBILE_MAX_WIDTH;
  }

  getNextSlideHeight() {
    return this.controlNextElem.getBoundingClientRect().height;
  }

  initSlider() {
    this.controlNextElem = this.slider.querySelector("#slider-vertical-next");
    this.listWrapper = this.slider.querySelector(".widget-actions-list");
    this.sliders = this.slider.querySelectorAll(".widget-actions-item");

    this.eventsAmount = this.sliders.length;
    this.nextSlideHeight = this.getNextSlideHeight();

    if (this.eventsAmount > this.config.visibleSliderItems) {
      this.controlNextElem.classList.add("widget-actions__next_visible");
    }

    this.initEventListeners();
  }

  initEventListeners() {
    this.slider.querySelector(".widget-actions-list").addEventListener("scroll", e => {
      if (e.target.scrollTop > this.nextSlideHeight) {
        this.controlNextElem.classList.remove("widget-actions__next_visible");
      } else {
        this.controlNextElem.classList.add("widget-actions__next_visible");
      }
    });
  }
}

/***/ }),

/***/ "./src/features/dashboardScripts/scriptsList.js":
/*!******************************************************!*\
  !*** ./src/features/dashboardScripts/scriptsList.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScriptsList; });
/* harmony import */ var _components_pager_pager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/pager/pager */ "./src/components/pager/pager.js");


class ScriptsList {
  constructor() {
    this.scriptsList = document.querySelector(".widget-scripts-list");
    this.pager = this.initPager();
  }

  initPager() {
    const scriptsPages = this.scriptsList.querySelectorAll(".widget-scripts__page");

    const scriptsPager = new _components_pager_pager__WEBPACK_IMPORTED_MODULE_0__["default"]({
      selectorId: "#scripts-pager",
      countPages: scriptsPages.length,
      nextPageCallback: () => {
        this.shiftPage();
      },
      prevPageCallback: () => {
        this.shiftPage();
      }
    });

    return scriptsPager;
  }

  shiftPage() {
    const currentPage = this.pager.getCurrentPage();

    this.scriptsList.style.marginLeft = `-${100 * currentPage}%`;
  }
}

/***/ }),

/***/ "./src/layout/layout.js":
/*!******************************!*\
  !*** ./src/layout/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ApplicationLayout {
  constructor(selector) {
    this.layout = document.querySelector(selector);
  }

  block() {
    this.layout.classList.add("application_state-frozen");
    this.layout.classList.add("application_state-blured");
  }

  unblock() {
    this.layout.classList.remove("application_state-frozen");
    this.layout.classList.remove("application_state-blured");
  }
}

const Layout = new ApplicationLayout("#application");

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/layout */ "./src/layout/layout.js");
/* harmony import */ var _components_card_card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card/card.js */ "./src/components/card/card.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _features_dashboardDevices_devicesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/dashboardDevices/devicesList */ "./src/features/dashboardDevices/devicesList.js");
/* harmony import */ var _features_dashboardMain_sliderVertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/dashboardMain/sliderVertical */ "./src/features/dashboardMain/sliderVertical.js");
/* harmony import */ var _features_dashboardScripts_scriptsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../features/dashboardScripts/scriptsList */ "./src/features/dashboardScripts/scriptsList.js");








// init features
const cards = new _components_card_card_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
const devicesList = new _features_dashboardDevices_devicesList__WEBPACK_IMPORTED_MODULE_3__["default"]();
const scriptsList = new _features_dashboardScripts_scriptsList__WEBPACK_IMPORTED_MODULE_5__["default"]();
const nextEventSliders = new _features_dashboardMain_sliderVertical__WEBPACK_IMPORTED_MODULE_4__["default"]("#slider-vertical");
const headerNavigation = new _components_header_header__WEBPACK_IMPORTED_MODULE_2__["default"]({
  selector: "#header-menu",
  layout: _layout_layout__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map