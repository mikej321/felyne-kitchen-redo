/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/about.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/about.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Dekko.ttf */ "./src/Dekko.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./JosefinSlabRegular.ttf */ "./src/JosefinSlabRegular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Dekko font */
@font-face {
    font-family: 'Dekko';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: 400;
    font-style: normal;
}

/* Josefin Slab Regular Normal Font */
@font-face {
    font-family: 'Josefin Slab Normal';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Josefin Slab Bold';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-weight: 700;
    font-style: normal;
}

:root {
    /* Oranges */
    --peach: #FFE4AD;
    --jasmine: #FFD685;
    --sunglow: #FFC95C;
    --selective-yellow: #FFBB33;
    --orange-web: #FFAD05;
    --harvest-gold: #E09600;
    --dark-goldenrod: #BB7A00;
    --golden-brown: #8F5F00;
    --field-drab: #664400;
    /* Greens */
    --mint-green: #DFF7F3;
    --celeste: #AEEAE2;
    --turquoise: #4BD2BE;
    --Keppel: #31C4AE;
    --persian-green: #269987;
    --pine-green: #1D7264;
    --brunswick-green: #196155;
    --darker-brunswick-green: #155147;
    --dark-green: #0D312B;
    /* Platinum for links */
    --platinum: #E7EAE8;
    /* Reds */
    --lavender-blush: #FEEBEB;
    --tea-rose: #FDC4C4;
    --light-red: #F97676;
    --imperial-red: #F84F4F;
    --turkey-red: #b00707;
    --dark-red: #890606;
    --blood-red: #620404;
    --black-bean: #3B0202;
    /* Neutrals */
    --white-smoke: #F5F5F5;
    --timberwolf: #D6D6D6;
    --silver: #C2C2C2;
    --battleship-gray-light: #999999;
    --battleship-gray-dark: #858585;
    --outer-space: #474747;
    --jet: #333333;
    --eerie-black: #1F1F1F;
}

/* Default Styling */

*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
}

.content {
    display: grid;
    background-color: var(--eerie-black);
    max-width: 375px;
    grid-template-columns: minmax(250px, 375px);
    grid-template-areas: "navbar"
                         "information";
    justify-content: center;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    grid-area: navbar;
}

.logo {
    width: 7.5rem;
    height: 3.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo > img {
    width: 4.6rem;
    height: 3.1rem;
}

.linkbar {
    font-family: 'Josefin Slab Bold';
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: black;
    padding: 2rem;
}

.linkbar > a {
    text-decoration: none;
    color: var(--sunglow);
    cursor: pointer;
    transition: color 0.3s ease-in;
    display: inline-block;
    position: relative;
    
}

.linkbar > a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    opacity: 0;
    bottom: 0;
    left: 0;
    background-color: var(--dark-goldenrod);
    transition: opacity 0.3s ease-in,
                transform 0.3s ease-in;
}

.linkbar > a:hover::after {
    opacity: 1;
    transform: translate3d(0, 0.4rem, 0);
}

.linkbar > a:hover {
    color: var(--celeste);
}

/* About page styling */

.aboutContent {
    display: grid;
    justify-content: center;
    justify-items: center;
    font-family: 'Dekko';
    margin-top: 72px;
    gap: 2rem;
}

.title {
    text-decoration: underline;
    text-underline-offset: 6px;
    text-decoration-thickness: 4px;
    color: var(--sunglow);
}

.portion {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}


.portion > img {
    width: 100%;
    max-width: 187px;
    height: 175px;
    object-fit: cover;
    object-position: top;
}


.textInformation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.textInformation > h2 {
    color: var(--selective-yellow);
    text-decoration: underline;
    text-underline-offset: 6px;
    text-decoration-thickness: 3px;
}

.textInformation > p {
    color: var(--dark-goldenrod);
    max-width: 240px;
    text-align: center;
}

@media screen and (min-width: 780px) {

    .content {
        width: 100%;
        max-width: 1440px;
        grid-template-columns: minmax(375px, 1440px);
    }

    .logo {
        width: 100%;
        max-width: 25.5rem;
        height: 3.8rem;
    }

    .logo > img {
        width: 100%;
        max-width: 25.6rem;
        height: 5rem;
    }

    .linkbar > a {
        font-size: 1.8rem;
    }

    .aboutContent {
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas: "title title"
                             "img1 text1"
                             "text2 img2"
                             "outro outro";
    }

    .title {
        grid-area: title;
        font-size: 5rem;
    }

    .portion {
        margin-top: 5rem;
    }

    .portion1 > img {
        grid-area: img1;
    }

    .portion1 > .textInformation {
        grid-area: text1;
    }

    .portion2 > img {
        grid-area: img2;
    }

    .portion2 > .textInformation {
        grid-area: text2;
    }

    .portion > img {
        max-width: 300px;
        height: 250px;
        margin-bottom: 2rem;
    }

    .textInformation {
        margin-bottom: 2rem;
    }

    .textInformation > h2 {
        font-size: 3rem;
    }

    .textInformation > p {
        font-size: 2rem;
    }

    .outro {
        grid-area: outro;
    }
}`, "",{"version":3,"sources":["webpack://./src/about.css"],"names":[],"mappings":"AAAA,eAAe;AACf;IACI,oBAAoB;IACpB,4CAAuB;IACvB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA,qCAAqC;AACrC;IACI,kCAAkC;IAClC,4CAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,4CAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,2BAA2B;IAC3B,qBAAqB;IACrB,uBAAuB;IACvB,yBAAyB;IACzB,uBAAuB;IACvB,qBAAqB;IACrB,WAAW;IACX,qBAAqB;IACrB,kBAAkB;IAClB,oBAAoB;IACpB,iBAAiB;IACjB,wBAAwB;IACxB,qBAAqB;IACrB,0BAA0B;IAC1B,iCAAiC;IACjC,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,yBAAyB;IACzB,mBAAmB;IACnB,oBAAoB;IACpB,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,oBAAoB;IACpB,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,gCAAgC;IAChC,+BAA+B;IAC/B,sBAAsB;IACtB,cAAc;IACd,sBAAsB;AAC1B;;AAEA,oBAAoB;;AAEpB;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,gBAAgB;IAChB,2CAA2C;IAC3C;sCACkC;IAClC,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,gCAAgC;IAChC,aAAa;IACb,6BAA6B;IAC7B,WAAW;IACX,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;IACf,8BAA8B;IAC9B,qBAAqB;IACrB,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,UAAU;IACV,SAAS;IACT,OAAO;IACP,uCAAuC;IACvC;sCACkC;AACtC;;AAEA;IACI,UAAU;IACV,oCAAoC;AACxC;;AAEA;IACI,qBAAqB;AACzB;;AAEA,uBAAuB;;AAEvB;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,oBAAoB;IACpB,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,0BAA0B;IAC1B,0BAA0B;IAC1B,8BAA8B;IAC9B,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;;;AAGA;IACI,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,iBAAiB;IACjB,oBAAoB;AACxB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;IAC9B,0BAA0B;IAC1B,0BAA0B;IAC1B,8BAA8B;AAClC;;AAEA;IACI,4BAA4B;IAC5B,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;;IAEI;QACI,WAAW;QACX,iBAAiB;QACjB,4CAA4C;IAChD;;IAEA;QACI,WAAW;QACX,kBAAkB;QAClB,cAAc;IAClB;;IAEA;QACI,WAAW;QACX,kBAAkB;QAClB,YAAY;IAChB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,qCAAqC;QACrC;;;0CAGkC;IACtC;;IAEA;QACI,gBAAgB;QAChB,eAAe;IACnB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;QAChB,aAAa;QACb,mBAAmB;IACvB;;IAEA;QACI,mBAAmB;IACvB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,gBAAgB;IACpB;AACJ","sourcesContent":["/* Dekko font */\n@font-face {\n    font-family: 'Dekko';\n    src: url('./Dekko.ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\n/* Josefin Slab Regular Normal Font */\n@font-face {\n    font-family: 'Josefin Slab Normal';\n    src: url('./JosefinSlabRegular.ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Josefin Slab Bold';\n    src: url('./JosefinSlabRegular.ttf');\n    font-weight: 700;\n    font-style: normal;\n}\n\n:root {\n    /* Oranges */\n    --peach: #FFE4AD;\n    --jasmine: #FFD685;\n    --sunglow: #FFC95C;\n    --selective-yellow: #FFBB33;\n    --orange-web: #FFAD05;\n    --harvest-gold: #E09600;\n    --dark-goldenrod: #BB7A00;\n    --golden-brown: #8F5F00;\n    --field-drab: #664400;\n    /* Greens */\n    --mint-green: #DFF7F3;\n    --celeste: #AEEAE2;\n    --turquoise: #4BD2BE;\n    --Keppel: #31C4AE;\n    --persian-green: #269987;\n    --pine-green: #1D7264;\n    --brunswick-green: #196155;\n    --darker-brunswick-green: #155147;\n    --dark-green: #0D312B;\n    /* Platinum for links */\n    --platinum: #E7EAE8;\n    /* Reds */\n    --lavender-blush: #FEEBEB;\n    --tea-rose: #FDC4C4;\n    --light-red: #F97676;\n    --imperial-red: #F84F4F;\n    --turkey-red: #b00707;\n    --dark-red: #890606;\n    --blood-red: #620404;\n    --black-bean: #3B0202;\n    /* Neutrals */\n    --white-smoke: #F5F5F5;\n    --timberwolf: #D6D6D6;\n    --silver: #C2C2C2;\n    --battleship-gray-light: #999999;\n    --battleship-gray-dark: #858585;\n    --outer-space: #474747;\n    --jet: #333333;\n    --eerie-black: #1F1F1F;\n}\n\n/* Default Styling */\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    scroll-behavior: smooth;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nbody {\n    font-size: 1.6rem;\n    display: flex;\n    justify-content: center;\n}\n\n.content {\n    display: grid;\n    background-color: var(--eerie-black);\n    max-width: 375px;\n    grid-template-columns: minmax(250px, 375px);\n    grid-template-areas: \"navbar\"\n                         \"information\";\n    justify-content: center;\n}\n\n.navbar {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    position: relative;\n    grid-area: navbar;\n}\n\n.logo {\n    width: 7.5rem;\n    height: 3.8rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.logo > img {\n    width: 4.6rem;\n    height: 3.1rem;\n}\n\n.linkbar {\n    font-family: 'Josefin Slab Bold';\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    background-color: black;\n    padding: 2rem;\n}\n\n.linkbar > a {\n    text-decoration: none;\n    color: var(--sunglow);\n    cursor: pointer;\n    transition: color 0.3s ease-in;\n    display: inline-block;\n    position: relative;\n    \n}\n\n.linkbar > a::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    opacity: 0;\n    bottom: 0;\n    left: 0;\n    background-color: var(--dark-goldenrod);\n    transition: opacity 0.3s ease-in,\n                transform 0.3s ease-in;\n}\n\n.linkbar > a:hover::after {\n    opacity: 1;\n    transform: translate3d(0, 0.4rem, 0);\n}\n\n.linkbar > a:hover {\n    color: var(--celeste);\n}\n\n/* About page styling */\n\n.aboutContent {\n    display: grid;\n    justify-content: center;\n    justify-items: center;\n    font-family: 'Dekko';\n    margin-top: 72px;\n    gap: 2rem;\n}\n\n.title {\n    text-decoration: underline;\n    text-underline-offset: 6px;\n    text-decoration-thickness: 4px;\n    color: var(--sunglow);\n}\n\n.portion {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 2rem;\n}\n\n\n.portion > img {\n    width: 100%;\n    max-width: 187px;\n    height: 175px;\n    object-fit: cover;\n    object-position: top;\n}\n\n\n.textInformation {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    margin-bottom: 2rem;\n}\n\n.textInformation > h2 {\n    color: var(--selective-yellow);\n    text-decoration: underline;\n    text-underline-offset: 6px;\n    text-decoration-thickness: 3px;\n}\n\n.textInformation > p {\n    color: var(--dark-goldenrod);\n    max-width: 240px;\n    text-align: center;\n}\n\n@media screen and (min-width: 780px) {\n\n    .content {\n        width: 100%;\n        max-width: 1440px;\n        grid-template-columns: minmax(375px, 1440px);\n    }\n\n    .logo {\n        width: 100%;\n        max-width: 25.5rem;\n        height: 3.8rem;\n    }\n\n    .logo > img {\n        width: 100%;\n        max-width: 25.6rem;\n        height: 5rem;\n    }\n\n    .linkbar > a {\n        font-size: 1.8rem;\n    }\n\n    .aboutContent {\n        grid-template-columns: repeat(2, 1fr);\n        grid-template-areas: \"title title\"\n                             \"img1 text1\"\n                             \"text2 img2\"\n                             \"outro outro\";\n    }\n\n    .title {\n        grid-area: title;\n        font-size: 5rem;\n    }\n\n    .portion {\n        margin-top: 5rem;\n    }\n\n    .portion1 > img {\n        grid-area: img1;\n    }\n\n    .portion1 > .textInformation {\n        grid-area: text1;\n    }\n\n    .portion2 > img {\n        grid-area: img2;\n    }\n\n    .portion2 > .textInformation {\n        grid-area: text2;\n    }\n\n    .portion > img {\n        max-width: 300px;\n        height: 250px;\n        margin-bottom: 2rem;\n    }\n\n    .textInformation {\n        margin-bottom: 2rem;\n    }\n\n    .textInformation > h2 {\n        font-size: 3rem;\n    }\n\n    .textInformation > p {\n        font-size: 2rem;\n    }\n\n    .outro {\n        grid-area: outro;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Styles for the home page */

.information > h1 {
    font-size: 2.8rem;
    color: var(--harvest-gold);
    animation-name: flicker;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-delay: 1s;
    animation-iteration-count: 2;
    animation-fill-mode: both;
    animation-direction: alternate;
}

@keyframes flicker {
    0%, 18%, 22%, 25%, 53%, 57%, 99% {
        color: #fff;
        text-shadow: 0 0 4px #fff,
        0 0 10px #fff,
        0 0 18px #fff,
        0 0 28px var(--harvest-gold),
        0 0 42px var(--harvest-gold),
        0 0 52px var(--harvest-gold),
        0 0 62px var(--harvest-gold),
        0 0 72px var(--harvest-gold);
    }
    20%, 24%, 55% {
        text-shadow: none;
    }

}


.banner {
    justify-self: center;
    margin-block: 2rem;
    width: 255px;
    height: 135px;
}

.information {
    color: var(--harvest-gold);
    font-family: 'Dekko';
    display: grid;
    justify-items: center;
    grid-area: information;
}

.choose {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    text-align: center;
    max-width: 30ch;
}

.choose > h2,
.location > h2 {
    color: var(--imperial-red);
}

.choose > p,
.street > p {
    color: var(--jasmine);
}

.location {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.street {
    
}

.telephone > a {
    color: var(--imperial-red);
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: color 0.3s ease-in;
    position: relative;
}

.telephone > a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: right;
    background-color: var(--Keppel);
    transition: transform 0.3s ease-in-out;
}

.telephone > a:hover::after {
    transform: scale(1);
    transform-origin: left;
}

.telephone {
    margin-bottom: 2rem;
}

.bookUs {
    background-color: var(--persian-green);
    color: var(--timberwolf);
    border: none;
    width: 11rem;
    height: 4rem;
    border-radius: 12px;
    margin-bottom: 3rem;
    font-family: 'Josefin Slab Regular';
    cursor: pointer;
    transition: width 300ms ease-in-out,
                background-color 300ms ease-in;
}

.bookUs:hover {
    width: 13rem;
    background-color: var(--brunswick-green);
}

@media screen and (min-width: 780px) {
    
    .content {
        display: grid;
        background-color: var(--eerie-black);
        width: 100%;
        max-width: 1440px;
        grid-template-columns: minmax(375px, 1440px);
        justify-content: center;
    }

    .logo {
        width: 25.5rem;
        height: 3.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo > img {
        width: 25.6rem;
        height: 5rem;
    }

    .linkbar > a {
        font-size: 1.8rem;
    }

    .linkbar > a::after {
        height: 2px;
        
    }
    
    .information {
        min-height: 100vh;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 235px 125px 300px 120px;
        justify-content: center;
        align-items: center;
        grid-template-areas: "banner banner"
                             "headline headline"
                             "choose location"
                             "reservation reservation";
        margin-top: 3rem;
        margin-left: 5rem;
        row-gap: 5rem;
        position: relative;
    }

    .information > h1 {
        font-size: 9rem;
        text-align: center;
        line-height: 10rem;
        grid-area: headline;
    }
    
    .banner {
        transform: scale(1.4);
        grid-area: banner;
        overflow: hidden;
        margin-top: 5rem;
    }

    .choose {
        grid-area: choose;
        margin-top: -3rem;
        align-self: baseline;
    }

    .choose > h2,
    .location > h2 {
        font-size: 3rem;
        
    }

    .choose > p,
    .street > p {
        font-size: 1.8rem;
    }

    .location {
        grid-area: location;
        font-size: 1.8rem;
        margin-top: -3rem;
        align-self: baseline;
    }

    .choose,
    .location {
        position: relative;
        top: 5rem;
    }

    .bookUs {
        grid-area: reservation;
        margin-top: -5rem;
        width: 14rem;
        height: 5rem;
    }

    .bookUs:hover {
        width: 15rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/home.css"],"names":[],"mappings":"AAAA,6BAA6B;;AAE7B;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,uBAAuB;IACvB,sBAAsB;IACtB,sCAAsC;IACtC,mBAAmB;IACnB,4BAA4B;IAC5B,yBAAyB;IACzB,8BAA8B;AAClC;;AAEA;IACI;QACI,WAAW;QACX;;;;;;;oCAO4B;IAChC;IACA;QACI,iBAAiB;IACrB;;AAEJ;;;AAGA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,0BAA0B;IAC1B,oBAAoB;IACpB,aAAa;IACb,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;IAEI,0BAA0B;AAC9B;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;;AAEA;;AAEA;IACI,0BAA0B;IAC1B,eAAe;IACf,qBAAqB;IACrB,qBAAqB;IACrB,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,WAAW;IACX,WAAW;IACX,oBAAoB;IACpB,uBAAuB;IACvB,+BAA+B;IAC/B,sCAAsC;AAC1C;;AAEA;IACI,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,sCAAsC;IACtC,wBAAwB;IACxB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,mCAAmC;IACnC,eAAe;IACf;8CAC0C;AAC9C;;AAEA;IACI,YAAY;IACZ,wCAAwC;AAC5C;;AAEA;;IAEI;QACI,aAAa;QACb,oCAAoC;QACpC,WAAW;QACX,iBAAiB;QACjB,4CAA4C;QAC5C,uBAAuB;IAC3B;;IAEA;QACI,cAAc;QACd,cAAc;QACd,aAAa;QACb,uBAAuB;QACvB,mBAAmB;IACvB;;IAEA;QACI,cAAc;QACd,YAAY;IAChB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,WAAW;;IAEf;;IAEA;QACI,iBAAiB;QACjB,aAAa;QACb,qCAAqC;QACrC,2CAA2C;QAC3C,uBAAuB;QACvB,mBAAmB;QACnB;;;sDAG8C;QAC9C,gBAAgB;QAChB,iBAAiB;QACjB,aAAa;QACb,kBAAkB;IACtB;;IAEA;QACI,eAAe;QACf,kBAAkB;QAClB,kBAAkB;QAClB,mBAAmB;IACvB;;IAEA;QACI,qBAAqB;QACrB,iBAAiB;QACjB,gBAAgB;QAChB,gBAAgB;IACpB;;IAEA;QACI,iBAAiB;QACjB,iBAAiB;QACjB,oBAAoB;IACxB;;IAEA;;QAEI,eAAe;;IAEnB;;IAEA;;QAEI,iBAAiB;IACrB;;IAEA;QACI,mBAAmB;QACnB,iBAAiB;QACjB,iBAAiB;QACjB,oBAAoB;IACxB;;IAEA;;QAEI,kBAAkB;QAClB,SAAS;IACb;;IAEA;QACI,sBAAsB;QACtB,iBAAiB;QACjB,YAAY;QACZ,YAAY;IAChB;;IAEA;QACI,YAAY;IAChB;AACJ","sourcesContent":["/* Styles for the home page */\n\n.information > h1 {\n    font-size: 2.8rem;\n    color: var(--harvest-gold);\n    animation-name: flicker;\n    animation-duration: 1s;\n    animation-timing-function: ease-in-out;\n    animation-delay: 1s;\n    animation-iteration-count: 2;\n    animation-fill-mode: both;\n    animation-direction: alternate;\n}\n\n@keyframes flicker {\n    0%, 18%, 22%, 25%, 53%, 57%, 99% {\n        color: #fff;\n        text-shadow: 0 0 4px #fff,\n        0 0 10px #fff,\n        0 0 18px #fff,\n        0 0 28px var(--harvest-gold),\n        0 0 42px var(--harvest-gold),\n        0 0 52px var(--harvest-gold),\n        0 0 62px var(--harvest-gold),\n        0 0 72px var(--harvest-gold);\n    }\n    20%, 24%, 55% {\n        text-shadow: none;\n    }\n\n}\n\n\n.banner {\n    justify-self: center;\n    margin-block: 2rem;\n    width: 255px;\n    height: 135px;\n}\n\n.information {\n    color: var(--harvest-gold);\n    font-family: 'Dekko';\n    display: grid;\n    justify-items: center;\n    grid-area: information;\n}\n\n.choose {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 2rem;\n    text-align: center;\n    max-width: 30ch;\n}\n\n.choose > h2,\n.location > h2 {\n    color: var(--imperial-red);\n}\n\n.choose > p,\n.street > p {\n    color: var(--jasmine);\n}\n\n.location {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n}\n\n.street {\n    \n}\n\n.telephone > a {\n    color: var(--imperial-red);\n    cursor: pointer;\n    text-decoration: none;\n    display: inline-block;\n    transition: color 0.3s ease-in;\n    position: relative;\n}\n\n.telephone > a::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    transform: scaleX(0);\n    transform-origin: right;\n    background-color: var(--Keppel);\n    transition: transform 0.3s ease-in-out;\n}\n\n.telephone > a:hover::after {\n    transform: scale(1);\n    transform-origin: left;\n}\n\n.telephone {\n    margin-bottom: 2rem;\n}\n\n.bookUs {\n    background-color: var(--persian-green);\n    color: var(--timberwolf);\n    border: none;\n    width: 11rem;\n    height: 4rem;\n    border-radius: 12px;\n    margin-bottom: 3rem;\n    font-family: 'Josefin Slab Regular';\n    cursor: pointer;\n    transition: width 300ms ease-in-out,\n                background-color 300ms ease-in;\n}\n\n.bookUs:hover {\n    width: 13rem;\n    background-color: var(--brunswick-green);\n}\n\n@media screen and (min-width: 780px) {\n    \n    .content {\n        display: grid;\n        background-color: var(--eerie-black);\n        width: 100%;\n        max-width: 1440px;\n        grid-template-columns: minmax(375px, 1440px);\n        justify-content: center;\n    }\n\n    .logo {\n        width: 25.5rem;\n        height: 3.8rem;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .logo > img {\n        width: 25.6rem;\n        height: 5rem;\n    }\n\n    .linkbar > a {\n        font-size: 1.8rem;\n    }\n\n    .linkbar > a::after {\n        height: 2px;\n        \n    }\n    \n    .information {\n        min-height: 100vh;\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-template-rows: 235px 125px 300px 120px;\n        justify-content: center;\n        align-items: center;\n        grid-template-areas: \"banner banner\"\n                             \"headline headline\"\n                             \"choose location\"\n                             \"reservation reservation\";\n        margin-top: 3rem;\n        margin-left: 5rem;\n        row-gap: 5rem;\n        position: relative;\n    }\n\n    .information > h1 {\n        font-size: 9rem;\n        text-align: center;\n        line-height: 10rem;\n        grid-area: headline;\n    }\n    \n    .banner {\n        transform: scale(1.4);\n        grid-area: banner;\n        overflow: hidden;\n        margin-top: 5rem;\n    }\n\n    .choose {\n        grid-area: choose;\n        margin-top: -3rem;\n        align-self: baseline;\n    }\n\n    .choose > h2,\n    .location > h2 {\n        font-size: 3rem;\n        \n    }\n\n    .choose > p,\n    .street > p {\n        font-size: 1.8rem;\n    }\n\n    .location {\n        grid-area: location;\n        font-size: 1.8rem;\n        margin-top: -3rem;\n        align-self: baseline;\n    }\n\n    .choose,\n    .location {\n        position: relative;\n        top: 5rem;\n    }\n\n    .bookUs {\n        grid-area: reservation;\n        margin-top: -5rem;\n        width: 14rem;\n        height: 5rem;\n    }\n\n    .bookUs:hover {\n        width: 15rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/menu.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menu.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Dekko.ttf */ "./src/Dekko.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./JosefinSlabRegular.ttf */ "./src/JosefinSlabRegular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Default Styling */

/* Dekko font */
@font-face {
    font-family: 'Dekko';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: 400;
    font-style: normal;
}

/* Josefin Slab Regular Normal Font */
@font-face {
    font-family: 'Josefin Slab Normal';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Josefin Slab Bold';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-weight: 700;
    font-style: normal;
}

:root {
    /* Oranges */
    --peach: #FFE4AD;
    --jasmine: #FFD685;
    --sunglow: #FFC95C;
    --selective-yellow: #FFBB33;
    --orange-web: #FFAD05;
    --harvest-gold: #E09600;
    --dark-goldenrod: #BB7A00;
    --golden-brown: #8F5F00;
    --field-drab: #664400;
    /* Greens */
    --mint-green: #DFF7F3;
    --celeste: #AEEAE2;
    --turquoise: #4BD2BE;
    --Keppel: #31C4AE;
    --persian-green: #269987;
    --pine-green: #1D7264;
    --brunswick-green: #196155;
    --darker-brunswick-green: #155147;
    --dark-green: #0D312B;
    /* Platinum for links */
    --platinum: #E7EAE8;
    /* Reds */
    --lavender-blush: #FEEBEB;
    --tea-rose: #FDC4C4;
    --light-red: #F97676;
    --imperial-red: #F84F4F;
    --turkey-red: #b00707;
    --dark-red: #890606;
    --blood-red: #620404;
    --black-bean: #3B0202;
    /* Neutrals */
    --white-smoke: #F5F5F5;
    --timberwolf: #D6D6D6;
    --silver: #C2C2C2;
    --battleship-gray-light: #999999;
    --battleship-gray-dark: #858585;
    --outer-space: #474747;
    --jet: #333333;
    --eerie-black: #1F1F1F;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
}

.content {
    display: grid;
    background-color: var(--eerie-black);
    width: 100%;
    max-width: 375px;
    grid-template-columns: minmax(250px, 375px);
    justify-content: center;
    gap: 1.5rem;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
}

.logo {
    width: 100%;
    max-width: 7.5rem;
    height: 3.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo > img {
    width: 4.6rem;
    height: 3.1rem;
}

.linkbar {
    font-family: 'Josefin Slab Bold';
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: black;
    padding: 2rem;
}

.linkbar > a {
    text-decoration: none;
    color: var(--sunglow);
    cursor: pointer;
    transition: color 0.3s ease-in;
    display: inline-block;
    position: relative;
    
}

.linkbar > a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    opacity: 0;
    bottom: 0;
    left: 0;
    background-color: var(--dark-goldenrod);
    transition: opacity 0.3s ease-in,
                transform 0.3s ease-in;
}

.linkbar > a:hover::after {
    opacity: 1;
    transform: translate3d(0, 0.4rem, 0);
}

.linkbar > a:hover {
    color: var(--celeste);
}

/* Menu styling */

.menuFrame {
    font-family: 'Dekko';
    width: 100%;
    max-width: 347px;
    min-height: 600px;
    justify-self: center;
    background-color: var(--jet);
    border: 1px solid var(--black-bean);
    margin-bottom: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menuBoard {
    width: 100%;
    max-width: 323px;
    min-height: 576px;
    border: 2px solid var(--black-bean);
    background-color: var(--peach);
    display: grid;
    grid-template-rows: 80px auto;
    justify-content: center;
    grid-template-areas: "menuTitle"
                         "menuItems";
    
}

.menuTitle {
    font-size: 2.4rem;
    margin-top: 2.1rem;
    text-decoration: underline;
    justify-self: center;
    grid-area: menuTitle;
}

.menuItems {
    grid-area: menuItems;
    display: grid;
    margin-bottom: 2rem;
    margin-right: 4rem;
}

.menuItem {
    display: grid;
    gap: 2rem;
    width: 100%;
    max-width: 300px;
    grid-template-columns: repeat(2, 1fr);
    justify-items: end;
    justify-content: center;
    align-items: center;
}

.menuItem > p:first-child {
    justify-self: start;
}

@media screen and (min-width: 780px) {
    .content {
        width: 100%;
        max-width: 1440px;
        grid-template-columns: minmax(375px, 1440px);
    }

    .logo {
        width: 100%;
        max-width: 25.5rem;
        height: 3.8rem;
    }

    .logo > img {
        width: 100%;
        max-width: 25.6rem;
        height: 5rem;
    }

    .linkbar > a {
        font-size: 1.8rem;
    }

    .menuFrame {
        width: 100%;
        max-width: 1422px;
        height: 935px;
    }

    .menuBoard {
        width: 100%;
        max-width: 1400px;
        height: 100%;
        max-height: 910px;
    }

    .menuTitle {
        font-size: 5rem;
    }

    .menuItems {
        font-size: 4rem;
        width: 100%;
        max-width: 1000px;
        margin-top: 3rem;
    }

    .menuItem {
        width: 100%;
        max-width: 1000px;
        gap: 30rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/menu.css"],"names":[],"mappings":"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","sourcesContent":["/* Default Styling */\n\n/* Dekko font */\n@font-face {\n    font-family: 'Dekko';\n    src: url('./Dekko.ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\n/* Josefin Slab Regular Normal Font */\n@font-face {\n    font-family: 'Josefin Slab Normal';\n    src: url('./JosefinSlabRegular.ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Josefin Slab Bold';\n    src: url('./JosefinSlabRegular.ttf');\n    font-weight: 700;\n    font-style: normal;\n}\n\n:root {\n    /* Oranges */\n    --peach: #FFE4AD;\n    --jasmine: #FFD685;\n    --sunglow: #FFC95C;\n    --selective-yellow: #FFBB33;\n    --orange-web: #FFAD05;\n    --harvest-gold: #E09600;\n    --dark-goldenrod: #BB7A00;\n    --golden-brown: #8F5F00;\n    --field-drab: #664400;\n    /* Greens */\n    --mint-green: #DFF7F3;\n    --celeste: #AEEAE2;\n    --turquoise: #4BD2BE;\n    --Keppel: #31C4AE;\n    --persian-green: #269987;\n    --pine-green: #1D7264;\n    --brunswick-green: #196155;\n    --darker-brunswick-green: #155147;\n    --dark-green: #0D312B;\n    /* Platinum for links */\n    --platinum: #E7EAE8;\n    /* Reds */\n    --lavender-blush: #FEEBEB;\n    --tea-rose: #FDC4C4;\n    --light-red: #F97676;\n    --imperial-red: #F84F4F;\n    --turkey-red: #b00707;\n    --dark-red: #890606;\n    --blood-red: #620404;\n    --black-bean: #3B0202;\n    /* Neutrals */\n    --white-smoke: #F5F5F5;\n    --timberwolf: #D6D6D6;\n    --silver: #C2C2C2;\n    --battleship-gray-light: #999999;\n    --battleship-gray-dark: #858585;\n    --outer-space: #474747;\n    --jet: #333333;\n    --eerie-black: #1F1F1F;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    scroll-behavior: smooth;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nbody {\n    font-size: 1.6rem;\n    display: flex;\n    justify-content: center;\n}\n\n.content {\n    display: grid;\n    background-color: var(--eerie-black);\n    width: 100%;\n    max-width: 375px;\n    grid-template-columns: minmax(250px, 375px);\n    justify-content: center;\n    gap: 1.5rem;\n}\n\n.navbar {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    position: relative;\n}\n\n.logo {\n    width: 100%;\n    max-width: 7.5rem;\n    height: 3.8rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.logo > img {\n    width: 4.6rem;\n    height: 3.1rem;\n}\n\n.linkbar {\n    font-family: 'Josefin Slab Bold';\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    background-color: black;\n    padding: 2rem;\n}\n\n.linkbar > a {\n    text-decoration: none;\n    color: var(--sunglow);\n    cursor: pointer;\n    transition: color 0.3s ease-in;\n    display: inline-block;\n    position: relative;\n    \n}\n\n.linkbar > a::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    opacity: 0;\n    bottom: 0;\n    left: 0;\n    background-color: var(--dark-goldenrod);\n    transition: opacity 0.3s ease-in,\n                transform 0.3s ease-in;\n}\n\n.linkbar > a:hover::after {\n    opacity: 1;\n    transform: translate3d(0, 0.4rem, 0);\n}\n\n.linkbar > a:hover {\n    color: var(--celeste);\n}\n\n/* Menu styling */\n\n.menuFrame {\n    font-family: 'Dekko';\n    width: 100%;\n    max-width: 347px;\n    min-height: 600px;\n    justify-self: center;\n    background-color: var(--jet);\n    border: 1px solid var(--black-bean);\n    margin-bottom: 1.2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.menuBoard {\n    width: 100%;\n    max-width: 323px;\n    min-height: 576px;\n    border: 2px solid var(--black-bean);\n    background-color: var(--peach);\n    display: grid;\n    grid-template-rows: 80px auto;\n    justify-content: center;\n    grid-template-areas: \"menuTitle\"\n                         \"menuItems\";\n    \n}\n\n.menuTitle {\n    font-size: 2.4rem;\n    margin-top: 2.1rem;\n    text-decoration: underline;\n    justify-self: center;\n    grid-area: menuTitle;\n}\n\n.menuItems {\n    grid-area: menuItems;\n    display: grid;\n    margin-bottom: 2rem;\n    margin-right: 4rem;\n}\n\n.menuItem {\n    display: grid;\n    gap: 2rem;\n    width: 100%;\n    max-width: 300px;\n    grid-template-columns: repeat(2, 1fr);\n    justify-items: end;\n    justify-content: center;\n    align-items: center;\n}\n\n.menuItem > p:first-child {\n    justify-self: start;\n}\n\n@media screen and (min-width: 780px) {\n    .content {\n        width: 100%;\n        max-width: 1440px;\n        grid-template-columns: minmax(375px, 1440px);\n    }\n\n    .logo {\n        width: 100%;\n        max-width: 25.5rem;\n        height: 3.8rem;\n    }\n\n    .logo > img {\n        width: 100%;\n        max-width: 25.6rem;\n        height: 5rem;\n    }\n\n    .linkbar > a {\n        font-size: 1.8rem;\n    }\n\n    .menuFrame {\n        width: 100%;\n        max-width: 1422px;\n        height: 935px;\n    }\n\n    .menuBoard {\n        width: 100%;\n        max-width: 1400px;\n        height: 100%;\n        max-height: 910px;\n    }\n\n    .menuTitle {\n        font-size: 5rem;\n    }\n\n    .menuItems {\n        font-size: 4rem;\n        width: 100%;\n        max-width: 1000px;\n        margin-top: 3rem;\n    }\n\n    .menuItem {\n        width: 100%;\n        max-width: 1000px;\n        gap: 30rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Dekko.ttf */ "./src/Dekko.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./JosefinSlabRegular.ttf */ "./src/JosefinSlabRegular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Dekko font */
@font-face {
    font-family: 'Dekko';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: 400;
    font-style: normal;
}

/* Josefin Slab Regular Normal Font */
@font-face {
    font-family: 'Josefin Slab Normal';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Josefin Slab Bold';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-weight: 700;
    font-style: normal;
}

:root {
    /* Oranges */
    --peach: #FFE4AD;
    --jasmine: #FFD685;
    --sunglow: #FFC95C;
    --selective-yellow: #FFBB33;
    --orange-web: #FFAD05;
    --harvest-gold: #E09600;
    --dark-goldenrod: #BB7A00;
    --golden-brown: #8F5F00;
    --field-drab: #664400;
    /* Greens */
    --mint-green: #DFF7F3;
    --celeste: #AEEAE2;
    --turquoise: #4BD2BE;
    --Keppel: #31C4AE;
    --persian-green: #269987;
    --pine-green: #1D7264;
    --brunswick-green: #196155;
    --darker-brunswick-green: #155147;
    --dark-green: #0D312B;
    /* Platinum for links */
    --platinum: #E7EAE8;
    /* Reds */
    --lavender-blush: #FEEBEB;
    --tea-rose: #FDC4C4;
    --light-red: #F97676;
    --imperial-red: #F84F4F;
    --turkey-red: #b00707;
    --dark-red: #890606;
    --blood-red: #620404;
    --black-bean: #3B0202;
    /* Neutrals */
    --white-smoke: #F5F5F5;
    --timberwolf: #D6D6D6;
    --silver: #C2C2C2;
    --battleship-gray-light: #999999;
    --battleship-gray-dark: #858585;
    --outer-space: #474747;
    --jet: #333333;
    --eerie-black: #1F1F1F;
}

/* Default Styling */

*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
}

.content {
    display: grid;
    background-color: var(--eerie-black);
    max-width: 375px;
    grid-template-columns: minmax(250px, 375px);
    grid-template-areas: "navbar"
                         "information";
    justify-content: center;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    grid-area: navbar;
}

.logo {
    width: 7.5rem;
    height: 3.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo > img {
    width: 4.6rem;
    height: 3.1rem;
}

.linkbar {
    font-family: 'Josefin Slab Bold';
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: black;
    padding: 2rem;
}

.linkbar > a {
    text-decoration: none;
    color: var(--sunglow);
    cursor: pointer;
    transition: color 0.3s ease-in;
    display: inline-block;
    position: relative;
    
}

.linkbar > a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    opacity: 0;
    bottom: 0;
    left: 0;
    background-color: var(--dark-goldenrod);
    transition: opacity 0.3s ease-in,
                transform 0.3s ease-in;
}

.linkbar > a:hover::after {
    opacity: 1;
    transform: translate3d(0, 0.4rem, 0);
}

.linkbar > a:hover {
    color: var(--celeste);
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,eAAe;AACf;IACI,oBAAoB;IACpB,4CAAuB;IACvB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA,qCAAqC;AACrC;IACI,kCAAkC;IAClC,4CAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gCAAgC;IAChC,4CAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,2BAA2B;IAC3B,qBAAqB;IACrB,uBAAuB;IACvB,yBAAyB;IACzB,uBAAuB;IACvB,qBAAqB;IACrB,WAAW;IACX,qBAAqB;IACrB,kBAAkB;IAClB,oBAAoB;IACpB,iBAAiB;IACjB,wBAAwB;IACxB,qBAAqB;IACrB,0BAA0B;IAC1B,iCAAiC;IACjC,qBAAqB;IACrB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,yBAAyB;IACzB,mBAAmB;IACnB,oBAAoB;IACpB,uBAAuB;IACvB,qBAAqB;IACrB,mBAAmB;IACnB,oBAAoB;IACpB,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,gCAAgC;IAChC,+BAA+B;IAC/B,sBAAsB;IACtB,cAAc;IACd,sBAAsB;AAC1B;;AAEA,oBAAoB;;AAEpB;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,gBAAgB;IAChB,2CAA2C;IAC3C;sCACkC;IAClC,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,gCAAgC;IAChC,aAAa;IACb,6BAA6B;IAC7B,WAAW;IACX,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;IACf,8BAA8B;IAC9B,qBAAqB;IACrB,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,UAAU;IACV,SAAS;IACT,OAAO;IACP,uCAAuC;IACvC;sCACkC;AACtC;;AAEA;IACI,UAAU;IACV,oCAAoC;AACxC;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["/* Dekko font */\n@font-face {\n    font-family: 'Dekko';\n    src: url('./Dekko.ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\n/* Josefin Slab Regular Normal Font */\n@font-face {\n    font-family: 'Josefin Slab Normal';\n    src: url('./JosefinSlabRegular.ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Josefin Slab Bold';\n    src: url('./JosefinSlabRegular.ttf');\n    font-weight: 700;\n    font-style: normal;\n}\n\n:root {\n    /* Oranges */\n    --peach: #FFE4AD;\n    --jasmine: #FFD685;\n    --sunglow: #FFC95C;\n    --selective-yellow: #FFBB33;\n    --orange-web: #FFAD05;\n    --harvest-gold: #E09600;\n    --dark-goldenrod: #BB7A00;\n    --golden-brown: #8F5F00;\n    --field-drab: #664400;\n    /* Greens */\n    --mint-green: #DFF7F3;\n    --celeste: #AEEAE2;\n    --turquoise: #4BD2BE;\n    --Keppel: #31C4AE;\n    --persian-green: #269987;\n    --pine-green: #1D7264;\n    --brunswick-green: #196155;\n    --darker-brunswick-green: #155147;\n    --dark-green: #0D312B;\n    /* Platinum for links */\n    --platinum: #E7EAE8;\n    /* Reds */\n    --lavender-blush: #FEEBEB;\n    --tea-rose: #FDC4C4;\n    --light-red: #F97676;\n    --imperial-red: #F84F4F;\n    --turkey-red: #b00707;\n    --dark-red: #890606;\n    --blood-red: #620404;\n    --black-bean: #3B0202;\n    /* Neutrals */\n    --white-smoke: #F5F5F5;\n    --timberwolf: #D6D6D6;\n    --silver: #C2C2C2;\n    --battleship-gray-light: #999999;\n    --battleship-gray-dark: #858585;\n    --outer-space: #474747;\n    --jet: #333333;\n    --eerie-black: #1F1F1F;\n}\n\n/* Default Styling */\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    scroll-behavior: smooth;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nbody {\n    font-size: 1.6rem;\n    display: flex;\n    justify-content: center;\n}\n\n.content {\n    display: grid;\n    background-color: var(--eerie-black);\n    max-width: 375px;\n    grid-template-columns: minmax(250px, 375px);\n    grid-template-areas: \"navbar\"\n                         \"information\";\n    justify-content: center;\n}\n\n.navbar {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    position: relative;\n    grid-area: navbar;\n}\n\n.logo {\n    width: 7.5rem;\n    height: 3.8rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.logo > img {\n    width: 4.6rem;\n    height: 3.1rem;\n}\n\n.linkbar {\n    font-family: 'Josefin Slab Bold';\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    background-color: black;\n    padding: 2rem;\n}\n\n.linkbar > a {\n    text-decoration: none;\n    color: var(--sunglow);\n    cursor: pointer;\n    transition: color 0.3s ease-in;\n    display: inline-block;\n    position: relative;\n    \n}\n\n.linkbar > a::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 1px;\n    opacity: 0;\n    bottom: 0;\n    left: 0;\n    background-color: var(--dark-goldenrod);\n    transition: opacity 0.3s ease-in,\n                transform 0.3s ease-in;\n}\n\n.linkbar > a:hover::after {\n    opacity: 1;\n    transform: translate3d(0, 0.4rem, 0);\n}\n\n.linkbar > a:hover {\n    color: var(--celeste);\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/about.css":
/*!***********************!*\
  !*** ./src/about.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./about.css */ "./node_modules/css-loader/dist/cjs.js!./src/about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/home.css":
/*!**********************!*\
  !*** ./src/home.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/menu.css":
/*!**********************!*\
  !*** ./src/menu.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutComponent: () => (/* binding */ aboutComponent)
/* harmony export */ });
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.css */ "./src/about.css");
/* harmony import */ var _Fatalis_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fatalis.jpg */ "./src/Fatalis.jpg");
/* harmony import */ var _Hunter_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hunter.jpg */ "./src/Hunter.jpg");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ "./src/index.js");





function aboutComponent() {
    // Create the container div that holds the about page
    const aboutContent = document.createElement('div');
    aboutContent.classList.add('aboutContent');

    // create the title for the page and appends it to the div
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Me & Monster Hunter';
    aboutContent.append(title);

    // creates the next 3 sections with the information and images inside of them
    const portion1 = document.createElement('div');
    portion1.classList.add('portion');
    portion1.classList.add('portion1');
    aboutContent.append(portion1);

    // image for first portion
    const img1 = document.createElement('img');
    img1.src = _Hunter_jpg__WEBPACK_IMPORTED_MODULE_2__;
    portion1.append(img1);

    // container div for the first text information segment
    const textInfo1 = document.createElement('div');
    textInfo1.classList.add('textInformation');
    portion1.append(textInfo1);

    // text information for the container div
    const textTitle1 = document.createElement('h2');
    textTitle1.textContent = 'Who am I?';
    textInfo1.append(textTitle1);

    const textDescription1 = document.createElement('p');
    textDescription1.textContent = `My name is Michael. I am a web developer who
                                    also happens to love Monster Hunter. It is a franchise that
                                    has helped me through some tough times and, im my opinion, one
                                    of the greatest franchises of all time.`;
    textInfo1.append(textDescription1);

    // container div for the second segment
    const portion2 = document.createElement('div');
    portion2.classList.add('portion');
    portion2.classList.add('portion2');
    aboutContent.append(portion2);

    // image for the second portion
    const img2 = document.createElement('img');
    img2.src = _Fatalis_jpg__WEBPACK_IMPORTED_MODULE_1__;
    portion2.append(img2);

    // text information container for second segment
    const textInfo2 = document.createElement('div');
    textInfo2.classList.add('textInformation');
    portion2.append(textInfo2);

    // text information for the container div
    const whatIs = document.createElement('h2');
    whatIs.textContent = 'What is Monster Hunter?';
    textInfo2.append(whatIs);

    const textDescription2 = document.createElement('p');
    textDescription2.textContent = `A game about hunting monsters, of course!
                                    It is an action RPG where the core gameplay
                                    loop resides in hunting monster for their parts
                                    and using the parts to create weapons and armors
                                    that will help you defeat stronger monsters.`;
    textInfo2.append(textDescription2);

    // container div for the outro
    const outro = document.createElement('div');
    outro.classList.add('portion');
    outro.classList.add('outro');
    aboutContent.append(outro);

    // text information container for the outro div
    const textInfoOutro = document.createElement('div');
    textInfoOutro.classList.add('textInformation');
    outro.append(textInfoOutro);

    // text information for the outro div
    const outroTitle = document.createElement('h2');
    outroTitle.textContent = 'Felyne Kitchen?';
    textInfoOutro.append(outroTitle);

    const outroDescription = document.createElement('p');
    outroDescription.textContent = `In the world of Monster Hunter, we eat meals
                                    prepared in restaurants that are managed by cats referred
                                    to as Felynes. Felynes use ingredients from slain monsters as
                                    well as items procured from the hunters to create specialized
                                    meals.`;
    textInfoOutro.append(outroDescription);

    return aboutContent;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBanner: () => (/* binding */ createBanner),
/* harmony export */   homeComponent: () => (/* binding */ homeComponent)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.css */ "./src/home.css");
/* harmony import */ var _sign_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign.svg */ "./src/sign.svg");




function createBanner() {
    // creates the hero image for the restaurant
    const banner = document.createElement('div');
    banner.classList.add('banner');

    // creates the image and appends it
    const bannerImage = new Image();
    bannerImage.src = _sign_svg__WEBPACK_IMPORTED_MODULE_2__;
    banner.append(bannerImage);

    return banner;
}

function homeComponent() {

    
    
    // creates div for holding all of the home page info
    const information = document.createElement('div');
    information.classList.add('information');
    information.append(createBanner());

    // creates the headline and appends it
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Felyne Kitchen!';
    information.append(headline);

    // creates the second section container
    const choose = document.createElement('div');
    choose.classList.add('choose');

    // creates the information to be placed into the second section container
    const chooseHeader = document.createElement('h2');
    chooseHeader.textContent = 'Why choose us?';
    choose.append(chooseHeader);

    const chooseInfo = document.createElement('p');
    chooseInfo.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing 
    elit. Illo ducimus facere cumque soluta praesentium nemo earum debitis,
    ad provident maiores repellendus? Nulla esse consequatur ratione vitae, 
    iure impedit! Delectus, vero!`;
    choose.append(chooseInfo);
    information.append(choose);

    // creates the third section container holding location information
    const location = document.createElement('div');
    location.classList.add('location');

    // creates the headline for the location container and appends it
    const locationTitle = document.createElement('h2');
    locationTitle.textContent = 'Where are we located?';
    location.append(locationTitle);

    // creates the street container that will hold the address
    const street = document.createElement('div');

    // creates the two elements that will be appended to street container
    const streetName = document.createElement('p');
    streetName.textContent = 'Downtown Main St.';
    street.append(streetName);

    const address = document.createElement('p');
    address.textContent = 'Somewhere, SC 22222';
    street.append(address);
    
    // appends street to location container
    location.append(street);

    // appends location to information container
    information.append(location);

    // creates telephone container that holds telephone number and appends it to information container
    const telephone = document.createElement('div');
    telephone.classList.add('telephone');

    const telephoneNumber = document.createElement('a');
    telephoneNumber.textContent = '1-999-999-9999';
    telephone.append(telephoneNumber);

    location.append(telephone);

    // adds a booking button to the end of the page
    const bookUs = document.createElement('button');
    bookUs.classList.add('bookUs');
    bookUs.textContent = 'Reservations';

    information.append(bookUs);

    // returns the main content div for this page
    
    return information;

}






/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
const content = document.querySelector('.content');








function createNav() {
    // Creates the navbar that will be shared across pages
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    // creates the logo box to be added to the navbar
    const logo = document.createElement('logo');
    logo.classList.add('logo');

    // creates the image to be added to the logo container
    const logoImage = new Image();
    logoImage.src = _logo_svg__WEBPACK_IMPORTED_MODULE_1__;

    // adds the logo to the container
    logo.append(logoImage);

    // adds the logo container to the navbar
    nav.append(logo);

    // creates the linkbar that will be placed next to the logo
    const linkbar = document.createElement('div');
    linkbar.classList.add('linkbar');

    // creates the links that will be added to the linkbar
    const home = document.createElement('a');
    home.id = 'home';
    home.textContent = 'Home';

    const menu = document.createElement('a');
    menu.id = 'menu';
    menu.textContent = 'Menu';

    const about = document.createElement('a');
    about.id = 'about';
    about.textContent = 'About';

    // adds the links to the linkbar container
    linkbar.append(home);
    linkbar.append(menu);
    linkbar.append(about);

    // adds the linkbar to the navbar
    nav.append(linkbar);

    return nav;
}

// Initial page load

content.append(createNav());
content.append((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.homeComponent)());

// Event listener for the home page
document.addEventListener('click', function(event) {
    let tarElement = event.target;
    if (tarElement.tagName == 'A' && tarElement.id == 'home') {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        content.append(createNav());
        content.append((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.homeComponent)());
    }
})

// Event listener for the menu page
document.addEventListener('click', function(event) {
    let tarElement = event.target;
    if (tarElement.tagName == 'A' && tarElement.id == 'menu') {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        content.append(createNav());
        content.append((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menuComponent)());
    }
})

// Event listener for about page
document.addEventListener('click', function(event) {
    let tarElement = event.target;
    if (tarElement.tagName == 'A' && tarElement.id == 'about') {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        content.append(createNav());
        content.append((0,_about_js__WEBPACK_IMPORTED_MODULE_4__.aboutComponent)());
    }
})











/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuComponent: () => (/* binding */ menuComponent)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.css */ "./src/menu.css");



const ingredients = ['Wyvern Filet', 'Peon Turkey', 'Shogun Tuna', 'Millenary Crab', 'Wild Chicken', 'Giga Steak', 'Queen Shrimp', 'Soulful Caviar', 'Stonecorn', 'Cudgel Onion', 'Elysian Fruit', 'Heaven Berry'];
const prices = [12.99, 11.99, 9.99, 15.99, 12.99, 14.99, 12.99, 16.99, 7.99, 7.99, 9.99, 10.99]

function menuComponent() {
    // Div that holds the menu
    const menuFrame = document.createElement('div');
    menuFrame.classList.add('menuFrame');

    // Div that holds all of the contents of the menu 
    const menuBoard = document.createElement('div');
    menuBoard.classList.add('menuBoard');
    
    // appends menu to board
    menuFrame.append(menuBoard);

    // contents for the menu
    const menuTitle = document.createElement('p');
    menuTitle.classList.add('menuTitle');
    menuTitle.textContent = `Our Menu`;
    
    // appends title to board
    menuBoard.append(menuTitle);

    // div that holds all of the menu items
    const menuItems = document.createElement('div');
    menuItems.classList.add('menuItems');

    // appends menuItems div to the menuBoard
    menuBoard.append(menuItems);

    // creates every item div and appends it to the menuItem div
    for (let i = 1; i < 13; i++) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');
        menuItem.id = `menuItem${i}`;
        menuItems.append(menuItem);
        for (let j = 1; j < 2; j++) {
            const itemP = document.createElement('p');
            itemP.classList.add(`item${i}`);
            // adds the array element that corresponds to its place in the menu
            itemP.textContent = ingredients[i - 1];
            menuItem.append(itemP);
            const priceP = document.createElement('p');
            priceP.classList.add(`price${i}`);
            // adds the array element that corresponds to its place in the menu
            priceP.textContent = prices[i - 1];
            menuItem.append(priceP);
        }
    }

    return menuFrame;
}




/***/ }),

/***/ "./src/Dekko.ttf":
/*!***********************!*\
  !*** ./src/Dekko.ttf ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb8283c7611ec71fdbc4.ttf";

/***/ }),

/***/ "./src/Fatalis.jpg":
/*!*************************!*\
  !*** ./src/Fatalis.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6a8da971924a5ab6668.jpg";

/***/ }),

/***/ "./src/Hunter.jpg":
/*!************************!*\
  !*** ./src/Hunter.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8814b63114419955ca1b.jpg";

/***/ }),

/***/ "./src/JosefinSlabRegular.ttf":
/*!************************************!*\
  !*** ./src/JosefinSlabRegular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a4e168263c2ebe1d56c.ttf";

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "082ad4ef6d4ecf2a1070.svg";

/***/ }),

/***/ "./src/sign.svg":
/*!**********************!*\
  !*** ./src/sign.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be0e26dc81a439e2ac9f.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1HQUE4QjtBQUMxRSw0Q0FBNEMsNkhBQTJDO0FBQ3ZGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8scUZBQXFGLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sYUFBYSxRQUFRLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFdBQVcsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLE9BQU8sYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxh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QUFDQSxlQUFlLHlDQUFRO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR3FDO0FBQ2pCO0FBQ1U7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0Isc0NBQUk7QUFDMUI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUV1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHdkM7O0FBRXFCO0FBQ1M7QUFDWDtBQUNxQztBQUNkO0FBQ0U7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHNDQUFJOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZUFBZSx1REFBYTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1REFBYTtBQUNwQztBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1REFBYTtBQUNwQztBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix5REFBYztBQUNyQztBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZpQztBQUNkOztBQUVwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0EsdUNBQXVDLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3REQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVseW5lLWtpdGNoZW4tcmVkby8uL3NyYy9hYm91dC5jc3MiLCJ3ZWJwYWNrOi8vZmVseW5lLWtpdGNoZW4tcmVkby8uL3NyYy9ob21lLmNzcyIsIndlYnBhY2s6Ly9mZWx5bmUta2l0Y2hlbi1yZWRvLy4vc3JjL21lbnUuY3NzIiwid2VicGFjazovL2ZlbHluZS1raXRjaGVuLXJlZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2ZlbHluZS1raXRjaGVuLXJlZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZlbHluZS1raXRjaGVuLXJlZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2ZlbHluZS1raXRjaGVuLXJlZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mZWx5bmUta2l0Y2hlbi1yZWRvLy4vc3JjL2Fib3V0LmNzcz80ODQ4Iiwid2VicGFjazovL2ZlbHluZS1raXRjaGVuLXJlZG8vLi9zcmMvaG9tZS5jc3M/N2Y5YyIsIndlYnBhY2s6Ly9mZWx5bmUta2l0Y2hlbi1yZWRvLy4vc3JjL21lbnUuY3NzPzExMGIiLCJ3ZWJwYWNrOi8vZmVseW5lLWtpdGNoZW4tcmVkby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9mZWx5bmUta2l0Y2hlbi1yZWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZlbHluZS1raXRjaGVuLXJlZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ZlbHluZS1raXRjaGVuLXJlZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmVseW5lLWtpdGNoZW4tcmVkby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mZWx5bmUta2l0Y2hlbi1yZWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmVseW5lLWtpdGNoZW4tcmVkby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ZlbHluZS1raXRjaGVuLXJlZG8vLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vZmVseW5lLWtpdGNoZW4tcmVkby8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2ZlbHluZS1raXRjaGVuLXJlZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmVseW5lLWtpdGNoZW4tcmVkby8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL2ZlbHluZS1raXRjaGVuLXJlZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmVseW5lLWtpdGNoZW4tcmVkby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mZWx5bmUta2l0Y2hlbi1yZWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mZWx5bmUta2l0Y2hlbi1yZWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZmVseW5lLWtpdGNoZW4tcmVkby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZlbHluZS1raXRjaGVuLXJlZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mZWx5bmUta2l0Y2hlbi1yZWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ZlbHluZS1raXRjaGVuLXJlZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZmVseW5lLWtpdGNoZW4tcmVkby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZmVseW5lLWtpdGNoZW4tcmVkby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2ZlbHluZS1raXRjaGVuLXJlZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2ZlbHluZS1raXRjaGVuLXJlZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0Rla2tvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vSm9zZWZpblNsYWJSZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIERla2tvIGZvbnQgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnRGVra28nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4vKiBKb3NlZmluIFNsYWIgUmVndWxhciBOb3JtYWwgRm9udCAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNsYWIgTm9ybWFsJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNsYWIgQm9sZCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpyb290IHtcbiAgICAvKiBPcmFuZ2VzICovXG4gICAgLS1wZWFjaDogI0ZGRTRBRDtcbiAgICAtLWphc21pbmU6ICNGRkQ2ODU7XG4gICAgLS1zdW5nbG93OiAjRkZDOTVDO1xuICAgIC0tc2VsZWN0aXZlLXllbGxvdzogI0ZGQkIzMztcbiAgICAtLW9yYW5nZS13ZWI6ICNGRkFEMDU7XG4gICAgLS1oYXJ2ZXN0LWdvbGQ6ICNFMDk2MDA7XG4gICAgLS1kYXJrLWdvbGRlbnJvZDogI0JCN0EwMDtcbiAgICAtLWdvbGRlbi1icm93bjogIzhGNUYwMDtcbiAgICAtLWZpZWxkLWRyYWI6ICM2NjQ0MDA7XG4gICAgLyogR3JlZW5zICovXG4gICAgLS1taW50LWdyZWVuOiAjREZGN0YzO1xuICAgIC0tY2VsZXN0ZTogI0FFRUFFMjtcbiAgICAtLXR1cnF1b2lzZTogIzRCRDJCRTtcbiAgICAtLUtlcHBlbDogIzMxQzRBRTtcbiAgICAtLXBlcnNpYW4tZ3JlZW46ICMyNjk5ODc7XG4gICAgLS1waW5lLWdyZWVuOiAjMUQ3MjY0O1xuICAgIC0tYnJ1bnN3aWNrLWdyZWVuOiAjMTk2MTU1O1xuICAgIC0tZGFya2VyLWJydW5zd2ljay1ncmVlbjogIzE1NTE0NztcbiAgICAtLWRhcmstZ3JlZW46ICMwRDMxMkI7XG4gICAgLyogUGxhdGludW0gZm9yIGxpbmtzICovXG4gICAgLS1wbGF0aW51bTogI0U3RUFFODtcbiAgICAvKiBSZWRzICovXG4gICAgLS1sYXZlbmRlci1ibHVzaDogI0ZFRUJFQjtcbiAgICAtLXRlYS1yb3NlOiAjRkRDNEM0O1xuICAgIC0tbGlnaHQtcmVkOiAjRjk3Njc2O1xuICAgIC0taW1wZXJpYWwtcmVkOiAjRjg0RjRGO1xuICAgIC0tdHVya2V5LXJlZDogI2IwMDcwNztcbiAgICAtLWRhcmstcmVkOiAjODkwNjA2O1xuICAgIC0tYmxvb2QtcmVkOiAjNjIwNDA0O1xuICAgIC0tYmxhY2stYmVhbjogIzNCMDIwMjtcbiAgICAvKiBOZXV0cmFscyAqL1xuICAgIC0td2hpdGUtc21va2U6ICNGNUY1RjU7XG4gICAgLS10aW1iZXJ3b2xmOiAjRDZENkQ2O1xuICAgIC0tc2lsdmVyOiAjQzJDMkMyO1xuICAgIC0tYmF0dGxlc2hpcC1ncmF5LWxpZ2h0OiAjOTk5OTk5O1xuICAgIC0tYmF0dGxlc2hpcC1ncmF5LWRhcms6ICM4NTg1ODU7XG4gICAgLS1vdXRlci1zcGFjZTogIzQ3NDc0NztcbiAgICAtLWpldDogIzMzMzMzMztcbiAgICAtLWVlcmllLWJsYWNrOiAjMUYxRjFGO1xufVxuXG4vKiBEZWZhdWx0IFN0eWxpbmcgKi9cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWVyaWUtYmxhY2spO1xuICAgIG1heC13aWR0aDogMzc1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjUwcHgsIDM3NXB4KTtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm5hdmJhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmZvcm1hdGlvblwiO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubmF2YmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBncmlkLWFyZWE6IG5hdmJhcjtcbn1cblxuLmxvZ28ge1xuICAgIHdpZHRoOiA3LjVyZW07XG4gICAgaGVpZ2h0OiAzLjhyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nbyA+IGltZyB7XG4gICAgd2lkdGg6IDQuNnJlbTtcbiAgICBoZWlnaHQ6IDMuMXJlbTtcbn1cblxuLmxpbmtiYXIge1xuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTbGFiIEJvbGQnO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuLmxpbmtiYXIgPiBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXN1bmdsb3cpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW47XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbn1cblxuLmxpbmtiYXIgPiBhOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1nb2xkZW5yb2QpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XG59XG5cbi5saW5rYmFyID4gYTpob3Zlcjo6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLjRyZW0sIDApO1xufVxuXG4ubGlua2JhciA+IGE6aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1jZWxlc3RlKTtcbn1cblxuLyogQWJvdXQgcGFnZSBzdHlsaW5nICovXG5cbi5hYm91dENvbnRlbnQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnRGVra28nO1xuICAgIG1hcmdpbi10b3A6IDcycHg7XG4gICAgZ2FwOiAycmVtO1xufVxuXG4udGl0bGUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDRweDtcbiAgICBjb2xvcjogdmFyKC0tc3VuZ2xvdyk7XG59XG5cbi5wb3J0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG59XG5cblxuLnBvcnRpb24gPiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTg3cHg7XG4gICAgaGVpZ2h0OiAxNzVweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IHRvcDtcbn1cblxuXG4udGV4dEluZm9ybWF0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnRleHRJbmZvcm1hdGlvbiA+IGgyIHtcbiAgICBjb2xvcjogdmFyKC0tc2VsZWN0aXZlLXllbGxvdyk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogM3B4O1xufVxuXG4udGV4dEluZm9ybWF0aW9uID4gcCB7XG4gICAgY29sb3I6IHZhcigtLWRhcmstZ29sZGVucm9kKTtcbiAgICBtYXgtd2lkdGg6IDI0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpIHtcblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTQ0MHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzNzVweCwgMTQ0MHB4KTtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDI1LjVyZW07XG4gICAgICAgIGhlaWdodDogMy44cmVtO1xuICAgIH1cblxuICAgIC5sb2dvID4gaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMjUuNnJlbTtcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xuICAgIH1cblxuICAgIC5saW5rYmFyID4gYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIH1cblxuICAgIC5hYm91dENvbnRlbnQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInRpdGxlIHRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWcxIHRleHQxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0MiBpbWcyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRybyBvdXRyb1wiO1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICAgIGdyaWQtYXJlYTogdGl0bGU7XG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICB9XG5cbiAgICAucG9ydGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgfVxuXG4gICAgLnBvcnRpb24xID4gaW1nIHtcbiAgICAgICAgZ3JpZC1hcmVhOiBpbWcxO1xuICAgIH1cblxuICAgIC5wb3J0aW9uMSA+IC50ZXh0SW5mb3JtYXRpb24ge1xuICAgICAgICBncmlkLWFyZWE6IHRleHQxO1xuICAgIH1cblxuICAgIC5wb3J0aW9uMiA+IGltZyB7XG4gICAgICAgIGdyaWQtYXJlYTogaW1nMjtcbiAgICB9XG5cbiAgICAucG9ydGlvbjIgPiAudGV4dEluZm9ybWF0aW9uIHtcbiAgICAgICAgZ3JpZC1hcmVhOiB0ZXh0MjtcbiAgICB9XG5cbiAgICAucG9ydGlvbiA+IGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxuXG4gICAgLnRleHRJbmZvcm1hdGlvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxuXG4gICAgLnRleHRJbmZvcm1hdGlvbiA+IGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cblxuICAgIC50ZXh0SW5mb3JtYXRpb24gPiBwIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cblxuICAgIC5vdXRybyB7XG4gICAgICAgIGdyaWQtYXJlYTogb3V0cm87XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fib3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxlQUFlO0FBQ2Y7SUFDSSxvQkFBb0I7SUFDcEIsNENBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUEscUNBQXFDO0FBQ3JDO0lBQ0ksa0NBQWtDO0lBQ2xDLDRDQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDRDQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFC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QUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIERla2tvIGZvbnQgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdEZWtrbyc7XFxuICAgIHNyYzogdXJsKCcuL0Rla2tvLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIEpvc2VmaW4gU2xhYiBSZWd1bGFyIE5vcm1hbCBGb250ICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTbGFiIE5vcm1hbCc7XFxuICAgIHNyYzogdXJsKCcuL0pvc2VmaW5TbGFiUmVndWxhci50dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNsYWIgQm9sZCc7XFxuICAgIHNyYzogdXJsKCcuL0pvc2VmaW5TbGFiUmVndWxhci50dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC8qIE9yYW5nZXMgKi9cXG4gICAgLS1wZWFjaDogI0ZGRTRBRDtcXG4gICAgLS1qYXNtaW5lOiAjRkZENjg1O1xcbiAgICAtLXN1bmdsb3c6ICNGRkM5NUM7XFxuICAgIC0tc2VsZWN0aXZlLXllbGxvdzogI0ZGQkIzMztcXG4gICAgLS1vcmFuZ2Utd2ViOiAjRkZBRDA1O1xcbiAgICAtLWhhcnZlc3QtZ29sZDogI0UwOTYwMDtcXG4gICAgLS1kYXJrLWdvbGRlbnJvZDogI0JCN0EwMDtcXG4gICAgLS1nb2xkZW4tYnJvd246ICM4RjVGMDA7XFxuICAgIC0tZmllbGQtZHJhYjogIzY2NDQwMDtcXG4gICAgLyogR3JlZW5zICovXFxuICAgIC0tbWludC1ncmVlbjogI0RGRjdGMztcXG4gICAgLS1jZWxlc3RlOiAjQUVFQUUyO1xcbiAgICAtLXR1cnF1b2lzZTogIzRCRDJCRTtcXG4gICAgLS1LZXBwZWw6ICMzMUM0QUU7XFxuICAgIC0tcGVyc2lhbi1ncmVlbjogIzI2OTk4NztcXG4gICAgLS1waW5lLWdyZWVuOiAjMUQ3MjY0O1xcbiAgICAtLWJydW5zd2ljay1ncmVlbjogIzE5NjE1NTtcXG4gICAgLS1kYXJrZXItYnJ1bnN3aWNrLWdyZWVuOiAjMTU1MTQ3O1xcbiAgICAtLWRhcmstZ3JlZW46ICMwRDMxMkI7XFxuICAgIC8qIFBsYXRpbnVtIGZvciBsaW5rcyAqL1xcbiAgICAtLXBsYXRpbnVtOiAjRTdFQUU4O1xcbiAgICAvKiBSZWRzICovXFxuICAgIC0tbGF2ZW5kZXItYmx1c2g6ICNGRUVCRUI7XFxuICAgIC0tdGVhLXJvc2U6ICNGREM0QzQ7XFxuICAgIC0tbGlnaHQtcmVkOiAjRjk3Njc2O1xcbiAgICAtLWltcGVyaWFsLXJlZDogI0Y4NEY0RjtcXG4gICAgLS10dXJrZXktcmVkOiAjYjAwNzA3O1xcbiAgICAtLWRhcmstcmVkOiAjODkwNjA2O1xcbiAgICAtLWJsb29kLXJlZDogIzYyMDQwNDtcXG4gICAgLS1ibGFjay1iZWFuOiAjM0IwMjAyO1xcbiAgICAvKiBOZXV0cmFscyAqL1xcbiAgICAtLXdoaXRlLXNtb2tlOiAjRjVGNUY1O1xcbiAgICAtLXRpbWJlcndvbGY6ICNENkQ2RDY7XFxuICAgIC0tc2lsdmVyOiAjQzJDMkMyO1xcbiAgICAtLWJhdHRsZXNoaXAtZ3JheS1saWdodDogIzk5OTk5OTtcXG4gICAgLS1iYXR0bGVzaGlwLWdyYXktZGFyazogIzg1ODU4NTtcXG4gICAgLS1vdXRlci1zcGFjZTogIzQ3NDc0NztcXG4gICAgLS1qZXQ6ICMzMzMzMzM7XFxuICAgIC0tZWVyaWUtYmxhY2s6ICMxRjFGMUY7XFxufVxcblxcbi8qIERlZmF1bHQgU3R5bGluZyAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmh0bWwge1xcbiAgICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVlcmllLWJsYWNrKTtcXG4gICAgbWF4LXdpZHRoOiAzNzVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjUwcHgsIDM3NXB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIm5hdmJhclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgXFxcImluZm9ybWF0aW9uXFxcIjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZ3JpZC1hcmVhOiBuYXZiYXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDcuNXJlbTtcXG4gICAgaGVpZ2h0OiAzLjhyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubG9nbyA+IGltZyB7XFxuICAgIHdpZHRoOiA0LjZyZW07XFxuICAgIGhlaWdodDogMy4xcmVtO1xcbn1cXG5cXG4ubGlua2JhciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTbGFiIEJvbGQnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbn1cXG5cXG4ubGlua2JhciA+IGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1zdW5nbG93KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW47XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBcXG59XFxuXFxuLmxpbmtiYXIgPiBhOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdvbGRlbnJvZCk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLFxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluO1xcbn1cXG5cXG4ubGlua2JhciA+IGE6aG92ZXI6OmFmdGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLjRyZW0sIDApO1xcbn1cXG5cXG4ubGlua2JhciA+IGE6aG92ZXIge1xcbiAgICBjb2xvcjogdmFyKC0tY2VsZXN0ZSk7XFxufVxcblxcbi8qIEFib3V0IHBhZ2Ugc3R5bGluZyAqL1xcblxcbi5hYm91dENvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0Rla2tvJztcXG4gICAgbWFyZ2luLXRvcDogNzJweDtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiA2cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDRweDtcXG4gICAgY29sb3I6IHZhcigtLXN1bmdsb3cpO1xcbn1cXG5cXG4ucG9ydGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuXFxuLnBvcnRpb24gPiBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAxODdweDtcXG4gICAgaGVpZ2h0OiAxNzVweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogdG9wO1xcbn1cXG5cXG5cXG4udGV4dEluZm9ybWF0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4udGV4dEluZm9ybWF0aW9uID4gaDIge1xcbiAgICBjb2xvcjogdmFyKC0tc2VsZWN0aXZlLXllbGxvdyk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDZweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogM3B4O1xcbn1cXG5cXG4udGV4dEluZm9ybWF0aW9uID4gcCB7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdvbGRlbnJvZCk7XFxuICAgIG1heC13aWR0aDogMjQwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpIHtcXG5cXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDE0NDBweDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDM3NXB4LCAxNDQwcHgpO1xcbiAgICB9XFxuXFxuICAgIC5sb2dvIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNS41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiAzLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmxvZ28gPiBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDI1LjZyZW07XFxuICAgICAgICBoZWlnaHQ6IDVyZW07XFxuICAgIH1cXG5cXG4gICAgLmxpbmtiYXIgPiBhIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICB9XFxuXFxuICAgIC5hYm91dENvbnRlbnQge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ0aXRsZSB0aXRsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJpbWcxIHRleHQxXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxcInRleHQyIGltZzJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwib3V0cm8gb3V0cm9cXFwiO1xcbiAgICB9XFxuXFxuICAgIC50aXRsZSB7XFxuICAgICAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICB9XFxuXFxuICAgIC5wb3J0aW9uIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XFxuICAgIH1cXG5cXG4gICAgLnBvcnRpb24xID4gaW1nIHtcXG4gICAgICAgIGdyaWQtYXJlYTogaW1nMTtcXG4gICAgfVxcblxcbiAgICAucG9ydGlvbjEgPiAudGV4dEluZm9ybWF0aW9uIHtcXG4gICAgICAgIGdyaWQtYXJlYTogdGV4dDE7XFxuICAgIH1cXG5cXG4gICAgLnBvcnRpb24yID4gaW1nIHtcXG4gICAgICAgIGdyaWQtYXJlYTogaW1nMjtcXG4gICAgfVxcblxcbiAgICAucG9ydGlvbjIgPiAudGV4dEluZm9ybWF0aW9uIHtcXG4gICAgICAgIGdyaWQtYXJlYTogdGV4dDI7XFxuICAgIH1cXG5cXG4gICAgLnBvcnRpb24gPiBpbWcge1xcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgICAgIGhlaWdodDogMjUwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIC50ZXh0SW5mb3JtYXRpb24ge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgfVxcblxcbiAgICAudGV4dEluZm9ybWF0aW9uID4gaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB9XFxuXFxuICAgIC50ZXh0SW5mb3JtYXRpb24gPiBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcblxcbiAgICAub3V0cm8ge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBvdXRybztcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFN0eWxlcyBmb3IgdGhlIGhvbWUgcGFnZSAqL1xuXG4uaW5mb3JtYXRpb24gPiBoMSB7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gICAgY29sb3I6IHZhcigtLWhhcnZlc3QtZ29sZCk7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZsaWNrZXI7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgZmxpY2tlciB7XG4gICAgMCUsIDE4JSwgMjIlLCAyNSUsIDUzJSwgNTclLCA5OSUge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA0cHggI2ZmZixcbiAgICAgICAgMCAwIDEwcHggI2ZmZixcbiAgICAgICAgMCAwIDE4cHggI2ZmZixcbiAgICAgICAgMCAwIDI4cHggdmFyKC0taGFydmVzdC1nb2xkKSxcbiAgICAgICAgMCAwIDQycHggdmFyKC0taGFydmVzdC1nb2xkKSxcbiAgICAgICAgMCAwIDUycHggdmFyKC0taGFydmVzdC1nb2xkKSxcbiAgICAgICAgMCAwIDYycHggdmFyKC0taGFydmVzdC1nb2xkKSxcbiAgICAgICAgMCAwIDcycHggdmFyKC0taGFydmVzdC1nb2xkKTtcbiAgICB9XG4gICAgMjAlLCAyNCUsIDU1JSB7XG4gICAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIH1cblxufVxuXG5cbi5iYW5uZXIge1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1ibG9jazogMnJlbTtcbiAgICB3aWR0aDogMjU1cHg7XG4gICAgaGVpZ2h0OiAxMzVweDtcbn1cblxuLmluZm9ybWF0aW9uIHtcbiAgICBjb2xvcjogdmFyKC0taGFydmVzdC1nb2xkKTtcbiAgICBmb250LWZhbWlseTogJ0Rla2tvJztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWFyZWE6IGluZm9ybWF0aW9uO1xufVxuXG4uY2hvb3NlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDMwY2g7XG59XG5cbi5jaG9vc2UgPiBoMixcbi5sb2NhdGlvbiA+IGgyIHtcbiAgICBjb2xvcjogdmFyKC0taW1wZXJpYWwtcmVkKTtcbn1cblxuLmNob29zZSA+IHAsXG4uc3RyZWV0ID4gcCB7XG4gICAgY29sb3I6IHZhcigtLWphc21pbmUpO1xufVxuXG4ubG9jYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0cmVldCB7XG4gICAgXG59XG5cbi50ZWxlcGhvbmUgPiBhIHtcbiAgICBjb2xvcjogdmFyKC0taW1wZXJpYWwtcmVkKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGVsZXBob25lID4gYTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1LZXBwZWwpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4udGVsZXBob25lID4gYTpob3Zlcjo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbn1cblxuLnRlbGVwaG9uZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmJvb2tVcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVyc2lhbi1ncmVlbik7XG4gICAgY29sb3I6IHZhcigtLXRpbWJlcndvbGYpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTFyZW07XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2xhYiBSZWd1bGFyJztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlLWluO1xufVxuXG4uYm9va1VzOmhvdmVyIHtcbiAgICB3aWR0aDogMTNyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJ1bnN3aWNrLWdyZWVuKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpIHtcbiAgICBcbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVlcmllLWJsYWNrKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTQ0MHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzNzVweCwgMTQ0MHB4KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgICB3aWR0aDogMjUuNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAzLjhyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5sb2dvID4gaW1nIHtcbiAgICAgICAgd2lkdGg6IDI1LjZyZW07XG4gICAgICAgIGhlaWdodDogNXJlbTtcbiAgICB9XG5cbiAgICAubGlua2JhciA+IGEge1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB9XG5cbiAgICAubGlua2JhciA+IGE6OmFmdGVyIHtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAuaW5mb3JtYXRpb24ge1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMzVweCAxMjVweCAzMDBweCAxMjBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYmFubmVyIGJhbm5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVhZGxpbmUgaGVhZGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNob29zZSBsb2NhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVzZXJ2YXRpb24gcmVzZXJ2YXRpb25cIjtcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVyZW07XG4gICAgICAgIHJvdy1nYXA6IDVyZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAuaW5mb3JtYXRpb24gPiBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogOXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMTByZW07XG4gICAgICAgIGdyaWQtYXJlYTogaGVhZGxpbmU7XG4gICAgfVxuICAgIFxuICAgIC5iYW5uZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG4gICAgICAgIGdyaWQtYXJlYTogYmFubmVyO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIH1cblxuICAgIC5jaG9vc2Uge1xuICAgICAgICBncmlkLWFyZWE6IGNob29zZTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTNyZW07XG4gICAgICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgIH1cblxuICAgIC5jaG9vc2UgPiBoMixcbiAgICAubG9jYXRpb24gPiBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmNob29zZSA+IHAsXG4gICAgLnN0cmVldCA+IHAge1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB9XG5cbiAgICAubG9jYXRpb24ge1xuICAgICAgICBncmlkLWFyZWE6IGxvY2F0aW9uO1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTNyZW07XG4gICAgICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgIH1cblxuICAgIC5jaG9vc2UsXG4gICAgLmxvY2F0aW9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDVyZW07XG4gICAgfVxuXG4gICAgLmJvb2tVcyB7XG4gICAgICAgIGdyaWQtYXJlYTogcmVzZXJ2YXRpb247XG4gICAgICAgIG1hcmdpbi10b3A6IC01cmVtO1xuICAgICAgICB3aWR0aDogMTRyZW07XG4gICAgICAgIGhlaWdodDogNXJlbTtcbiAgICB9XG5cbiAgICAuYm9va1VzOmhvdmVyIHtcbiAgICAgICAgd2lkdGg6IDE1cmVtO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ob21lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw2QkFBNkI7O0FBRTdCO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0QyxtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWDs7Ozs7OztvQ0FPNEI7SUFDaEM7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFFSjs7O0FBR0E7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSwwQkFBMEI7QUFDOUI7O0FBRUE7O0lBRUkscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLCtCQUErQjtJQUMvQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2Y7OENBQzBDO0FBQzlDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdDQUF3QztBQUM1Qzs7QUFFQTs7SUFFSTtRQUNJLGFBQWE7UUFDYixvQ0FBb0M7UUFDcEMsV0FBVztRQUNYLGlCQUFpQjtRQUNqQiw0Q0FBNEM7UUFDNUMsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGNBQWM7UUFDZCxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksV0FBVzs7SUFFZjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IscUNBQXFDO1FBQ3JDLDJDQUEyQztRQUMzQyx1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25COzs7c0RBRzhDO1FBQzlDLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBOztRQUVJLGVBQWU7O0lBRW5COztJQUVBOztRQUVJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7SUFFQTs7UUFFSSxrQkFBa0I7UUFDbEIsU0FBUztJQUNiOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTdHlsZXMgZm9yIHRoZSBob21lIHBhZ2UgKi9cXG5cXG4uaW5mb3JtYXRpb24gPiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMi44cmVtO1xcbiAgICBjb2xvcjogdmFyKC0taGFydmVzdC1nb2xkKTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZsaWNrZXI7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAyO1xcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgZmxpY2tlciB7XFxuICAgIDAlLCAxOCUsIDIyJSwgMjUlLCA1MyUsIDU3JSwgOTklIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA0cHggI2ZmZixcXG4gICAgICAgIDAgMCAxMHB4ICNmZmYsXFxuICAgICAgICAwIDAgMThweCAjZmZmLFxcbiAgICAgICAgMCAwIDI4cHggdmFyKC0taGFydmVzdC1nb2xkKSxcXG4gICAgICAgIDAgMCA0MnB4IHZhcigtLWhhcnZlc3QtZ29sZCksXFxuICAgICAgICAwIDAgNTJweCB2YXIoLS1oYXJ2ZXN0LWdvbGQpLFxcbiAgICAgICAgMCAwIDYycHggdmFyKC0taGFydmVzdC1nb2xkKSxcXG4gICAgICAgIDAgMCA3MnB4IHZhcigtLWhhcnZlc3QtZ29sZCk7XFxuICAgIH1cXG4gICAgMjAlLCAyNCUsIDU1JSB7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICAgfVxcblxcbn1cXG5cXG5cXG4uYmFubmVyIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ibG9jazogMnJlbTtcXG4gICAgd2lkdGg6IDI1NXB4O1xcbiAgICBoZWlnaHQ6IDEzNXB4O1xcbn1cXG5cXG4uaW5mb3JtYXRpb24ge1xcbiAgICBjb2xvcjogdmFyKC0taGFydmVzdC1nb2xkKTtcXG4gICAgZm9udC1mYW1pbHk6ICdEZWtrbyc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1hcmVhOiBpbmZvcm1hdGlvbjtcXG59XFxuXFxuLmNob29zZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAzMGNoO1xcbn1cXG5cXG4uY2hvb3NlID4gaDIsXFxuLmxvY2F0aW9uID4gaDIge1xcbiAgICBjb2xvcjogdmFyKC0taW1wZXJpYWwtcmVkKTtcXG59XFxuXFxuLmNob29zZSA+IHAsXFxuLnN0cmVldCA+IHAge1xcbiAgICBjb2xvcjogdmFyKC0tamFzbWluZSk7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnN0cmVldCB7XFxuICAgIFxcbn1cXG5cXG4udGVsZXBob25lID4gYSB7XFxuICAgIGNvbG9yOiB2YXIoLS1pbXBlcmlhbC1yZWQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UtaW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRlbGVwaG9uZSA+IGE6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tS2VwcGVsKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50ZWxlcGhvbmUgPiBhOmhvdmVyOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxufVxcblxcbi50ZWxlcGhvbmUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uYm9va1VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGVyc2lhbi1ncmVlbik7XFxuICAgIGNvbG9yOiB2YXIoLS10aW1iZXJ3b2xmKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTFyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNsYWIgUmVndWxhcic7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZS1pbjtcXG59XFxuXFxuLmJvb2tVczpob3ZlciB7XFxuICAgIHdpZHRoOiAxM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJ1bnN3aWNrLWdyZWVuKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpIHtcXG4gICAgXFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lZXJpZS1ibGFjayk7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogMTQ0MHB4O1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzc1cHgsIDE0NDBweCk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAubG9nbyB7XFxuICAgICAgICB3aWR0aDogMjUuNXJlbTtcXG4gICAgICAgIGhlaWdodDogMy44cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAubG9nbyA+IGltZyB7XFxuICAgICAgICB3aWR0aDogMjUuNnJlbTtcXG4gICAgICAgIGhlaWdodDogNXJlbTtcXG4gICAgfVxcblxcbiAgICAubGlua2JhciA+IGEge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmxpbmtiYXIgPiBhOjphZnRlciB7XFxuICAgICAgICBoZWlnaHQ6IDJweDtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIFxcbiAgICAuaW5mb3JtYXRpb24ge1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjM1cHggMTI1cHggMzAwcHggMTIwcHg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiYmFubmVyIGJhbm5lclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJoZWFkbGluZSBoZWFkbGluZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXCJjaG9vc2UgbG9jYXRpb25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXFwicmVzZXJ2YXRpb24gcmVzZXJ2YXRpb25cXFwiO1xcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cmVtO1xcbiAgICAgICAgcm93LWdhcDogNXJlbTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgfVxcblxcbiAgICAuaW5mb3JtYXRpb24gPiBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDlyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBsaW5lLWhlaWdodDogMTByZW07XFxuICAgICAgICBncmlkLWFyZWE6IGhlYWRsaW5lO1xcbiAgICB9XFxuICAgIFxcbiAgICAuYmFubmVyIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KTtcXG4gICAgICAgIGdyaWQtYXJlYTogYmFubmVyO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDVyZW07XFxuICAgIH1cXG5cXG4gICAgLmNob29zZSB7XFxuICAgICAgICBncmlkLWFyZWE6IGNob29zZTtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0zcmVtO1xcbiAgICAgICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxuICAgIH1cXG5cXG4gICAgLmNob29zZSA+IGgyLFxcbiAgICAubG9jYXRpb24gPiBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAuY2hvb3NlID4gcCxcXG4gICAgLnN0cmVldCA+IHAge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIH1cXG5cXG4gICAgLmxvY2F0aW9uIHtcXG4gICAgICAgIGdyaWQtYXJlYTogbG9jYXRpb247XFxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IC0zcmVtO1xcbiAgICAgICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxuICAgIH1cXG5cXG4gICAgLmNob29zZSxcXG4gICAgLmxvY2F0aW9uIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHRvcDogNXJlbTtcXG4gICAgfVxcblxcbiAgICAuYm9va1VzIHtcXG4gICAgICAgIGdyaWQtYXJlYTogcmVzZXJ2YXRpb247XFxuICAgICAgICBtYXJnaW4tdG9wOiAtNXJlbTtcXG4gICAgICAgIHdpZHRoOiAxNHJlbTtcXG4gICAgICAgIGhlaWdodDogNXJlbTtcXG4gICAgfVxcblxcbiAgICAuYm9va1VzOmhvdmVyIHtcXG4gICAgICAgIHdpZHRoOiAxNXJlbTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vRGVra28udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Kb3NlZmluU2xhYlJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogRGVmYXVsdCBTdHlsaW5nICovXG5cbi8qIERla2tvIGZvbnQgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnRGVra28nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4vKiBKb3NlZmluIFNsYWIgUmVndWxhciBOb3JtYWwgRm9udCAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNsYWIgTm9ybWFsJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNsYWIgQm9sZCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpyb290IHtcbiAgICAvKiBPcmFuZ2VzICovXG4gICAgLS1wZWFjaDogI0ZGRTRBRDtcbiAgICAtLWphc21pbmU6ICNGRkQ2ODU7XG4gICAgLS1zdW5nbG93OiAjRkZDOTVDO1xuICAgIC0tc2VsZWN0aXZlLXllbGxvdzogI0ZGQkIzMztcbiAgICAtLW9yYW5nZS13ZWI6ICNGRkFEMDU7XG4gICAgLS1oYXJ2ZXN0LWdvbGQ6ICNFMDk2MDA7XG4gICAgLS1kYXJrLWdvbGRlbnJvZDogI0JCN0EwMDtcbiAgICAtLWdvbGRlbi1icm93bjogIzhGNUYwMDtcbiAgICAtLWZpZWxkLWRyYWI6ICM2NjQ0MDA7XG4gICAgLyogR3JlZW5zICovXG4gICAgLS1taW50LWdyZWVuOiAjREZGN0YzO1xuICAgIC0tY2VsZXN0ZTogI0FFRUFFMjtcbiAgICAtLXR1cnF1b2lzZTogIzRCRDJCRTtcbiAgICAtLUtlcHBlbDogIzMxQzRBRTtcbiAgICAtLXBlcnNpYW4tZ3JlZW46ICMyNjk5ODc7XG4gICAgLS1waW5lLWdyZWVuOiAjMUQ3MjY0O1xuICAgIC0tYnJ1bnN3aWNrLWdyZWVuOiAjMTk2MTU1O1xuICAgIC0tZGFya2VyLWJydW5zd2ljay1ncmVlbjogIzE1NTE0NztcbiAgICAtLWRhcmstZ3JlZW46ICMwRDMxMkI7XG4gICAgLyogUGxhdGludW0gZm9yIGxpbmtzICovXG4gICAgLS1wbGF0aW51bTogI0U3RUFFODtcbiAgICAvKiBSZWRzICovXG4gICAgLS1sYXZlbmRlci1ibHVzaDogI0ZFRUJFQjtcbiAgICAtLXRlYS1yb3NlOiAjRkRDNEM0O1xuICAgIC0tbGlnaHQtcmVkOiAjRjk3Njc2O1xuICAgIC0taW1wZXJpYWwtcmVkOiAjRjg0RjRGO1xuICAgIC0tdHVya2V5LXJlZDogI2IwMDcwNztcbiAgICAtLWRhcmstcmVkOiAjODkwNjA2O1xuICAgIC0tYmxvb2QtcmVkOiAjNjIwNDA0O1xuICAgIC0tYmxhY2stYmVhbjogIzNCMDIwMjtcbiAgICAvKiBOZXV0cmFscyAqL1xuICAgIC0td2hpdGUtc21va2U6ICNGNUY1RjU7XG4gICAgLS10aW1iZXJ3b2xmOiAjRDZENkQ2O1xuICAgIC0tc2lsdmVyOiAjQzJDMkMyO1xuICAgIC0tYmF0dGxlc2hpcC1ncmF5LWxpZ2h0OiAjOTk5OTk5O1xuICAgIC0tYmF0dGxlc2hpcC1ncmF5LWRhcms6ICM4NTg1ODU7XG4gICAgLS1vdXRlci1zcGFjZTogIzQ3NDc0NztcbiAgICAtLWpldDogIzMzMzMzMztcbiAgICAtLWVlcmllLWJsYWNrOiAjMUYxRjFGO1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5odG1sIHtcbiAgICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5ib2R5IHtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lZXJpZS1ibGFjayk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzNzVweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyNTBweCwgMzc1cHgpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMS41cmVtO1xufVxuXG4ubmF2YmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ28ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNy41cmVtO1xuICAgIGhlaWdodDogMy44cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28gPiBpbWcge1xuICAgIHdpZHRoOiA0LjZyZW07XG4gICAgaGVpZ2h0OiAzLjFyZW07XG59XG5cbi5saW5rYmFyIHtcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2xhYiBCb2xkJztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG5cbi5saW5rYmFyID4gYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1zdW5nbG93KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG59XG5cbi5saW5rYmFyID4gYTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZGVucm9kKTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbixcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluO1xufVxuXG4ubGlua2JhciA+IGE6aG92ZXI6OmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMC40cmVtLCAwKTtcbn1cblxuLmxpbmtiYXIgPiBhOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tY2VsZXN0ZSk7XG59XG5cbi8qIE1lbnUgc3R5bGluZyAqL1xuXG4ubWVudUZyYW1lIHtcbiAgICBmb250LWZhbWlseTogJ0Rla2tvJztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDM0N3B4O1xuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWpldCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmxhY2stYmVhbik7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnVCb2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAzMjNweDtcbiAgICBtaW4taGVpZ2h0OiA1NzZweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibGFjay1iZWFuKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wZWFjaCk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm1lbnVUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJtZW51SXRlbXNcIjtcbiAgICBcbn1cblxuLm1lbnVUaXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgbWFyZ2luLXRvcDogMi4xcmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGdyaWQtYXJlYTogbWVudVRpdGxlO1xufVxuXG4ubWVudUl0ZW1zIHtcbiAgICBncmlkLWFyZWE6IG1lbnVJdGVtcztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xufVxuXG4ubWVudUl0ZW0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbnVJdGVtID4gcDpmaXJzdC1jaGlsZCB7XG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpIHtcbiAgICAuY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMzc1cHgsIDE0NDBweCk7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAyNS41cmVtO1xuICAgICAgICBoZWlnaHQ6IDMuOHJlbTtcbiAgICB9XG5cbiAgICAubG9nbyA+IGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDI1LjZyZW07XG4gICAgICAgIGhlaWdodDogNXJlbTtcbiAgICB9XG5cbiAgICAubGlua2JhciA+IGEge1xuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICB9XG5cbiAgICAubWVudUZyYW1lIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTQyMnB4O1xuICAgICAgICBoZWlnaHQ6IDkzNXB4O1xuICAgIH1cblxuICAgIC5tZW51Qm9hcmQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogOTEwcHg7XG4gICAgfVxuXG4gICAgLm1lbnVUaXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICB9XG5cbiAgICAubWVudUl0ZW1zIHtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgfVxuXG4gICAgLm1lbnVJdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICBnYXA6IDMwcmVtO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxvQkFBb0I7O0FBRXBCLGVBQWU7QUFDZjtJQUNJLG9CQUFvQjtJQUNwQiw0Q0FBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQSxxQ0FBcUM7QUFDckM7SUFDSSxrQ0FBa0M7SUFDbEMsNENBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsNENBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixpQ0FBaUM7SUFDakMscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFD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QUNJLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsVUFBVTtJQUNkO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRGVmYXVsdCBTdHlsaW5nICovXFxuXFxuLyogRGVra28gZm9udCAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0Rla2tvJztcXG4gICAgc3JjOiB1cmwoJy4vRGVra28udHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyogSm9zZWZpbiBTbGFiIFJlZ3VsYXIgTm9ybWFsIEZvbnQgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNsYWIgTm9ybWFsJztcXG4gICAgc3JjOiB1cmwoJy4vSm9zZWZpblNsYWJSZWd1bGFyLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2xhYiBCb2xkJztcXG4gICAgc3JjOiB1cmwoJy4vSm9zZWZpblNsYWJSZWd1bGFyLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gICAgLyogT3JhbmdlcyAqL1xcbiAgICAtLXBlYWNoOiAjRkZFNEFEO1xcbiAgICAtLWphc21pbmU6ICNGRkQ2ODU7XFxuICAgIC0tc3VuZ2xvdzogI0ZGQzk1QztcXG4gICAgLS1zZWxlY3RpdmUteWVsbG93OiAjRkZCQjMzO1xcbiAgICAtLW9yYW5nZS13ZWI6ICNGRkFEMDU7XFxuICAgIC0taGFydmVzdC1nb2xkOiAjRTA5NjAwO1xcbiAgICAtLWRhcmstZ29sZGVucm9kOiAjQkI3QTAwO1xcbiAgICAtLWdvbGRlbi1icm93bjogIzhGNUYwMDtcXG4gICAgLS1maWVsZC1kcmFiOiAjNjY0NDAwO1xcbiAgICAvKiBHcmVlbnMgKi9cXG4gICAgLS1taW50LWdyZWVuOiAjREZGN0YzO1xcbiAgICAtLWNlbGVzdGU6ICNBRUVBRTI7XFxuICAgIC0tdHVycXVvaXNlOiAjNEJEMkJFO1xcbiAgICAtLUtlcHBlbDogIzMxQzRBRTtcXG4gICAgLS1wZXJzaWFuLWdyZWVuOiAjMjY5OTg3O1xcbiAgICAtLXBpbmUtZ3JlZW46ICMxRDcyNjQ7XFxuICAgIC0tYnJ1bnN3aWNrLWdyZWVuOiAjMTk2MTU1O1xcbiAgICAtLWRhcmtlci1icnVuc3dpY2stZ3JlZW46ICMxNTUxNDc7XFxuICAgIC0tZGFyay1ncmVlbjogIzBEMzEyQjtcXG4gICAgLyogUGxhdGludW0gZm9yIGxpbmtzICovXFxuICAgIC0tcGxhdGludW06ICNFN0VBRTg7XFxuICAgIC8qIFJlZHMgKi9cXG4gICAgLS1sYXZlbmRlci1ibHVzaDogI0ZFRUJFQjtcXG4gICAgLS10ZWEtcm9zZTogI0ZEQzRDNDtcXG4gICAgLS1saWdodC1yZWQ6ICNGOTc2NzY7XFxuICAgIC0taW1wZXJpYWwtcmVkOiAjRjg0RjRGO1xcbiAgICAtLXR1cmtleS1yZWQ6ICNiMDA3MDc7XFxuICAgIC0tZGFyay1yZWQ6ICM4OTA2MDY7XFxuICAgIC0tYmxvb2QtcmVkOiAjNjIwNDA0O1xcbiAgICAtLWJsYWNrLWJlYW46ICMzQjAyMDI7XFxuICAgIC8qIE5ldXRyYWxzICovXFxuICAgIC0td2hpdGUtc21va2U6ICNGNUY1RjU7XFxuICAgIC0tdGltYmVyd29sZjogI0Q2RDZENjtcXG4gICAgLS1zaWx2ZXI6ICNDMkMyQzI7XFxuICAgIC0tYmF0dGxlc2hpcC1ncmF5LWxpZ2h0OiAjOTk5OTk5O1xcbiAgICAtLWJhdHRsZXNoaXAtZ3JheS1kYXJrOiAjODU4NTg1O1xcbiAgICAtLW91dGVyLXNwYWNlOiAjNDc0NzQ3O1xcbiAgICAtLWpldDogIzMzMzMzMztcXG4gICAgLS1lZXJpZS1ibGFjazogIzFGMUYxRjtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWVyaWUtYmxhY2spO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAzNzVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjUwcHgsIDM3NXB4KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMS41cmVtO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNy41cmVtO1xcbiAgICBoZWlnaHQ6IDMuOHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvID4gaW1nIHtcXG4gICAgd2lkdGg6IDQuNnJlbTtcXG4gICAgaGVpZ2h0OiAzLjFyZW07XFxufVxcblxcbi5saW5rYmFyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNsYWIgQm9sZCc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5saW5rYmFyID4gYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXN1bmdsb3cpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbn1cXG5cXG4ubGlua2JhciA+IGE6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZGVucm9kKTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4sXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5saW5rYmFyID4gYTpob3Zlcjo6YWZ0ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAuNHJlbSwgMCk7XFxufVxcblxcbi5saW5rYmFyID4gYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jZWxlc3RlKTtcXG59XFxuXFxuLyogTWVudSBzdHlsaW5nICovXFxuXFxuLm1lbnVGcmFtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRGVra28nO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAzNDdweDtcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1qZXQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ibGFjay1iZWFuKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVCb2FyZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDMyM3B4O1xcbiAgICBtaW4taGVpZ2h0OiA1NzZweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmxhY2stYmVhbik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBlYWNoKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IGF1dG87XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibWVudVRpdGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwibWVudUl0ZW1zXFxcIjtcXG4gICAgXFxufVxcblxcbi5tZW51VGl0bGUge1xcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXG4gICAgbWFyZ2luLXRvcDogMi4xcmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtYXJlYTogbWVudVRpdGxlO1xcbn1cXG5cXG4ubWVudUl0ZW1zIHtcXG4gICAgZ3JpZC1hcmVhOiBtZW51SXRlbXM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcXG59XFxuXFxuLm1lbnVJdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVJdGVtID4gcDpmaXJzdC1jaGlsZCB7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc4MHB4KSB7XFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgzNzVweCwgMTQ0MHB4KTtcXG4gICAgfVxcblxcbiAgICAubG9nbyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC13aWR0aDogMjUuNXJlbTtcXG4gICAgICAgIGhlaWdodDogMy44cmVtO1xcbiAgICB9XFxuXFxuICAgIC5sb2dvID4gaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAyNS42cmVtO1xcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xcbiAgICB9XFxuXFxuICAgIC5saW5rYmFyID4gYSB7XFxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgfVxcblxcbiAgICAubWVudUZyYW1lIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxNDIycHg7XFxuICAgICAgICBoZWlnaHQ6IDkzNXB4O1xcbiAgICB9XFxuXFxuICAgIC5tZW51Qm9hcmQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDkxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5tZW51VGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICB9XFxuXFxuICAgIC5tZW51SXRlbXMge1xcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIH1cXG5cXG4gICAgLm1lbnVJdGVtIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgICAgICBnYXA6IDMwcmVtO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9EZWtrby50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0pvc2VmaW5TbGFiUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBEZWtrbyBmb250ICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0Rla2tvJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLyogSm9zZWZpbiBTbGFiIFJlZ3VsYXIgTm9ybWFsIEZvbnQgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTbGFiIE5vcm1hbCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTbGFiIEJvbGQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG46cm9vdCB7XG4gICAgLyogT3JhbmdlcyAqL1xuICAgIC0tcGVhY2g6ICNGRkU0QUQ7XG4gICAgLS1qYXNtaW5lOiAjRkZENjg1O1xuICAgIC0tc3VuZ2xvdzogI0ZGQzk1QztcbiAgICAtLXNlbGVjdGl2ZS15ZWxsb3c6ICNGRkJCMzM7XG4gICAgLS1vcmFuZ2Utd2ViOiAjRkZBRDA1O1xuICAgIC0taGFydmVzdC1nb2xkOiAjRTA5NjAwO1xuICAgIC0tZGFyay1nb2xkZW5yb2Q6ICNCQjdBMDA7XG4gICAgLS1nb2xkZW4tYnJvd246ICM4RjVGMDA7XG4gICAgLS1maWVsZC1kcmFiOiAjNjY0NDAwO1xuICAgIC8qIEdyZWVucyAqL1xuICAgIC0tbWludC1ncmVlbjogI0RGRjdGMztcbiAgICAtLWNlbGVzdGU6ICNBRUVBRTI7XG4gICAgLS10dXJxdW9pc2U6ICM0QkQyQkU7XG4gICAgLS1LZXBwZWw6ICMzMUM0QUU7XG4gICAgLS1wZXJzaWFuLWdyZWVuOiAjMjY5OTg3O1xuICAgIC0tcGluZS1ncmVlbjogIzFENzI2NDtcbiAgICAtLWJydW5zd2ljay1ncmVlbjogIzE5NjE1NTtcbiAgICAtLWRhcmtlci1icnVuc3dpY2stZ3JlZW46ICMxNTUxNDc7XG4gICAgLS1kYXJrLWdyZWVuOiAjMEQzMTJCO1xuICAgIC8qIFBsYXRpbnVtIGZvciBsaW5rcyAqL1xuICAgIC0tcGxhdGludW06ICNFN0VBRTg7XG4gICAgLyogUmVkcyAqL1xuICAgIC0tbGF2ZW5kZXItYmx1c2g6ICNGRUVCRUI7XG4gICAgLS10ZWEtcm9zZTogI0ZEQzRDNDtcbiAgICAtLWxpZ2h0LXJlZDogI0Y5NzY3NjtcbiAgICAtLWltcGVyaWFsLXJlZDogI0Y4NEY0RjtcbiAgICAtLXR1cmtleS1yZWQ6ICNiMDA3MDc7XG4gICAgLS1kYXJrLXJlZDogIzg5MDYwNjtcbiAgICAtLWJsb29kLXJlZDogIzYyMDQwNDtcbiAgICAtLWJsYWNrLWJlYW46ICMzQjAyMDI7XG4gICAgLyogTmV1dHJhbHMgKi9cbiAgICAtLXdoaXRlLXNtb2tlOiAjRjVGNUY1O1xuICAgIC0tdGltYmVyd29sZjogI0Q2RDZENjtcbiAgICAtLXNpbHZlcjogI0MyQzJDMjtcbiAgICAtLWJhdHRsZXNoaXAtZ3JheS1saWdodDogIzk5OTk5OTtcbiAgICAtLWJhdHRsZXNoaXAtZ3JheS1kYXJrOiAjODU4NTg1O1xuICAgIC0tb3V0ZXItc3BhY2U6ICM0NzQ3NDc7XG4gICAgLS1qZXQ6ICMzMzMzMzM7XG4gICAgLS1lZXJpZS1ibGFjazogIzFGMUYxRjtcbn1cblxuLyogRGVmYXVsdCBTdHlsaW5nICovXG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVlcmllLWJsYWNrKTtcbiAgICBtYXgtd2lkdGg6IDM3NXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI1MHB4LCAzNzVweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJuYXZiYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5mb3JtYXRpb25cIjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5hdmJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZ3JpZC1hcmVhOiBuYXZiYXI7XG59XG5cbi5sb2dvIHtcbiAgICB3aWR0aDogNy41cmVtO1xuICAgIGhlaWdodDogMy44cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ28gPiBpbWcge1xuICAgIHdpZHRoOiA0LjZyZW07XG4gICAgaGVpZ2h0OiAzLjFyZW07XG59XG5cbi5saW5rYmFyIHtcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2xhYiBCb2xkJztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG5cbi5saW5rYmFyID4gYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1zdW5nbG93KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG59XG5cbi5saW5rYmFyID4gYTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZGVucm9kKTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbixcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluO1xufVxuXG4ubGlua2JhciA+IGE6aG92ZXI6OmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMC40cmVtLCAwKTtcbn1cblxuLmxpbmtiYXIgPiBhOmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tY2VsZXN0ZSk7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxlQUFlO0FBQ2Y7SUFDSSxvQkFBb0I7SUFDcEIsNENBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUEscUNBQXFDO0FBQ3JDO0lBQ0ksa0NBQWtDO0lBQ2xDLDRDQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDRDQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCOztBQUVBLG9CQUFvQjs7QUFFcEI7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQiwyQ0FBMkM7SUFDM0M7c0NBQ2tDO0lBQ2xDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIscUJBQXFCO0lBQ3JCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCxPQUFPO0lBQ1AsdUNBQXVDO0lBQ3ZDO3NDQUNrQztBQUN0Qzs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRGVra28gZm9udCAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0Rla2tvJztcXG4gICAgc3JjOiB1cmwoJy4vRGVra28udHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyogSm9zZWZpbiBTbGFiIFJlZ3VsYXIgTm9ybWFsIEZvbnQgKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNsYWIgTm9ybWFsJztcXG4gICAgc3JjOiB1cmwoJy4vSm9zZWZpblNsYWJSZWd1bGFyLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2xhYiBCb2xkJztcXG4gICAgc3JjOiB1cmwoJy4vSm9zZWZpblNsYWJSZWd1bGFyLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gICAgLyogT3JhbmdlcyAqL1xcbiAgICAtLXBlYWNoOiAjRkZFNEFEO1xcbiAgICAtLWphc21pbmU6ICNGRkQ2ODU7XFxuICAgIC0tc3VuZ2xvdzogI0ZGQzk1QztcXG4gICAgLS1zZWxlY3RpdmUteWVsbG93OiAjRkZCQjMzO1xcbiAgICAtLW9yYW5nZS13ZWI6ICNGRkFEMDU7XFxuICAgIC0taGFydmVzdC1nb2xkOiAjRTA5NjAwO1xcbiAgICAtLWRhcmstZ29sZGVucm9kOiAjQkI3QTAwO1xcbiAgICAtLWdvbGRlbi1icm93bjogIzhGNUYwMDtcXG4gICAgLS1maWVsZC1kcmFiOiAjNjY0NDAwO1xcbiAgICAvKiBHcmVlbnMgKi9cXG4gICAgLS1taW50LWdyZWVuOiAjREZGN0YzO1xcbiAgICAtLWNlbGVzdGU6ICNBRUVBRTI7XFxuICAgIC0tdHVycXVvaXNlOiAjNEJEMkJFO1xcbiAgICAtLUtlcHBlbDogIzMxQzRBRTtcXG4gICAgLS1wZXJzaWFuLWdyZWVuOiAjMjY5OTg3O1xcbiAgICAtLXBpbmUtZ3JlZW46ICMxRDcyNjQ7XFxuICAgIC0tYnJ1bnN3aWNrLWdyZWVuOiAjMTk2MTU1O1xcbiAgICAtLWRhcmtlci1icnVuc3dpY2stZ3JlZW46ICMxNTUxNDc7XFxuICAgIC0tZGFyay1ncmVlbjogIzBEMzEyQjtcXG4gICAgLyogUGxhdGludW0gZm9yIGxpbmtzICovXFxuICAgIC0tcGxhdGludW06ICNFN0VBRTg7XFxuICAgIC8qIFJlZHMgKi9cXG4gICAgLS1sYXZlbmRlci1ibHVzaDogI0ZFRUJFQjtcXG4gICAgLS10ZWEtcm9zZTogI0ZEQzRDNDtcXG4gICAgLS1saWdodC1yZWQ6ICNGOTc2NzY7XFxuICAgIC0taW1wZXJpYWwtcmVkOiAjRjg0RjRGO1xcbiAgICAtLXR1cmtleS1yZWQ6ICNiMDA3MDc7XFxuICAgIC0tZGFyay1yZWQ6ICM4OTA2MDY7XFxuICAgIC0tYmxvb2QtcmVkOiAjNjIwNDA0O1xcbiAgICAtLWJsYWNrLWJlYW46ICMzQjAyMDI7XFxuICAgIC8qIE5ldXRyYWxzICovXFxuICAgIC0td2hpdGUtc21va2U6ICNGNUY1RjU7XFxuICAgIC0tdGltYmVyd29sZjogI0Q2RDZENjtcXG4gICAgLS1zaWx2ZXI6ICNDMkMyQzI7XFxuICAgIC0tYmF0dGxlc2hpcC1ncmF5LWxpZ2h0OiAjOTk5OTk5O1xcbiAgICAtLWJhdHRsZXNoaXAtZ3JheS1kYXJrOiAjODU4NTg1O1xcbiAgICAtLW91dGVyLXNwYWNlOiAjNDc0NzQ3O1xcbiAgICAtLWpldDogIzMzMzMzMztcXG4gICAgLS1lZXJpZS1ibGFjazogIzFGMUYxRjtcXG59XFxuXFxuLyogRGVmYXVsdCBTdHlsaW5nICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWVyaWUtYmxhY2spO1xcbiAgICBtYXgtd2lkdGg6IDM3NXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyNTBweCwgMzc1cHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwibmF2YmFyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICBcXFwiaW5mb3JtYXRpb25cXFwiO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm5hdmJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBncmlkLWFyZWE6IG5hdmJhcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICB3aWR0aDogNy41cmVtO1xcbiAgICBoZWlnaHQ6IDMuOHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvID4gaW1nIHtcXG4gICAgd2lkdGg6IDQuNnJlbTtcXG4gICAgaGVpZ2h0OiAzLjFyZW07XFxufVxcblxcbi5saW5rYmFyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNsYWIgQm9sZCc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5saW5rYmFyID4gYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXN1bmdsb3cpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIFxcbn1cXG5cXG4ubGlua2JhciA+IGE6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ29sZGVucm9kKTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4sXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XFxufVxcblxcbi5saW5rYmFyID4gYTpob3Zlcjo6YWZ0ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAuNHJlbSwgMCk7XFxufVxcblxcbi5saW5rYmFyID4gYTpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1jZWxlc3RlKTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWJvdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9hYm91dC5jc3MnO1xuaW1wb3J0IHBpY3R1cmUxIGZyb20gJy4vRmF0YWxpcy5qcGcnO1xuaW1wb3J0IHBpY3R1cmUyIGZyb20gJy4vSHVudGVyLmpwZyc7XG5pbXBvcnQgeyBjb250ZW50IH0gZnJvbSAnLi9pbmRleCc7XG5cbmZ1bmN0aW9uIGFib3V0Q29tcG9uZW50KCkge1xuICAgIC8vIENyZWF0ZSB0aGUgY29udGFpbmVyIGRpdiB0aGF0IGhvbGRzIHRoZSBhYm91dCBwYWdlXG4gICAgY29uc3QgYWJvdXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Q29udGVudCcpO1xuXG4gICAgLy8gY3JlYXRlIHRoZSB0aXRsZSBmb3IgdGhlIHBhZ2UgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGRpdlxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ01lICYgTW9uc3RlciBIdW50ZXInO1xuICAgIGFib3V0Q29udGVudC5hcHBlbmQodGl0bGUpO1xuXG4gICAgLy8gY3JlYXRlcyB0aGUgbmV4dCAzIHNlY3Rpb25zIHdpdGggdGhlIGluZm9ybWF0aW9uIGFuZCBpbWFnZXMgaW5zaWRlIG9mIHRoZW1cbiAgICBjb25zdCBwb3J0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcnRpb24xLmNsYXNzTGlzdC5hZGQoJ3BvcnRpb24nKTtcbiAgICBwb3J0aW9uMS5jbGFzc0xpc3QuYWRkKCdwb3J0aW9uMScpO1xuICAgIGFib3V0Q29udGVudC5hcHBlbmQocG9ydGlvbjEpO1xuXG4gICAgLy8gaW1hZ2UgZm9yIGZpcnN0IHBvcnRpb25cbiAgICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nMS5zcmMgPSBwaWN0dXJlMjtcbiAgICBwb3J0aW9uMS5hcHBlbmQoaW1nMSk7XG5cbiAgICAvLyBjb250YWluZXIgZGl2IGZvciB0aGUgZmlyc3QgdGV4dCBpbmZvcm1hdGlvbiBzZWdtZW50XG4gICAgY29uc3QgdGV4dEluZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dEluZm8xLmNsYXNzTGlzdC5hZGQoJ3RleHRJbmZvcm1hdGlvbicpO1xuICAgIHBvcnRpb24xLmFwcGVuZCh0ZXh0SW5mbzEpO1xuXG4gICAgLy8gdGV4dCBpbmZvcm1hdGlvbiBmb3IgdGhlIGNvbnRhaW5lciBkaXZcbiAgICBjb25zdCB0ZXh0VGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0ZXh0VGl0bGUxLnRleHRDb250ZW50ID0gJ1dobyBhbSBJPyc7XG4gICAgdGV4dEluZm8xLmFwcGVuZCh0ZXh0VGl0bGUxKTtcblxuICAgIGNvbnN0IHRleHREZXNjcmlwdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dERlc2NyaXB0aW9uMS50ZXh0Q29udGVudCA9IGBNeSBuYW1lIGlzIE1pY2hhZWwuIEkgYW0gYSB3ZWIgZGV2ZWxvcGVyIHdob1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxzbyBoYXBwZW5zIHRvIGxvdmUgTW9uc3RlciBIdW50ZXIuIEl0IGlzIGEgZnJhbmNoaXNlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhcyBoZWxwZWQgbWUgdGhyb3VnaCBzb21lIHRvdWdoIHRpbWVzIGFuZCwgaW0gbXkgb3Bpbmlvbiwgb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiB0aGUgZ3JlYXRlc3QgZnJhbmNoaXNlcyBvZiBhbGwgdGltZS5gO1xuICAgIHRleHRJbmZvMS5hcHBlbmQodGV4dERlc2NyaXB0aW9uMSk7XG5cbiAgICAvLyBjb250YWluZXIgZGl2IGZvciB0aGUgc2Vjb25kIHNlZ21lbnRcbiAgICBjb25zdCBwb3J0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcnRpb24yLmNsYXNzTGlzdC5hZGQoJ3BvcnRpb24nKTtcbiAgICBwb3J0aW9uMi5jbGFzc0xpc3QuYWRkKCdwb3J0aW9uMicpO1xuICAgIGFib3V0Q29udGVudC5hcHBlbmQocG9ydGlvbjIpO1xuXG4gICAgLy8gaW1hZ2UgZm9yIHRoZSBzZWNvbmQgcG9ydGlvblxuICAgIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcyLnNyYyA9IHBpY3R1cmUxO1xuICAgIHBvcnRpb24yLmFwcGVuZChpbWcyKTtcblxuICAgIC8vIHRleHQgaW5mb3JtYXRpb24gY29udGFpbmVyIGZvciBzZWNvbmQgc2VnbWVudFxuICAgIGNvbnN0IHRleHRJbmZvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRJbmZvMi5jbGFzc0xpc3QuYWRkKCd0ZXh0SW5mb3JtYXRpb24nKTtcbiAgICBwb3J0aW9uMi5hcHBlbmQodGV4dEluZm8yKTtcblxuICAgIC8vIHRleHQgaW5mb3JtYXRpb24gZm9yIHRoZSBjb250YWluZXIgZGl2XG4gICAgY29uc3Qgd2hhdElzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB3aGF0SXMudGV4dENvbnRlbnQgPSAnV2hhdCBpcyBNb25zdGVyIEh1bnRlcj8nO1xuICAgIHRleHRJbmZvMi5hcHBlbmQod2hhdElzKTtcblxuICAgIGNvbnN0IHRleHREZXNjcmlwdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGV4dERlc2NyaXB0aW9uMi50ZXh0Q29udGVudCA9IGBBIGdhbWUgYWJvdXQgaHVudGluZyBtb25zdGVycywgb2YgY291cnNlIVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXQgaXMgYW4gYWN0aW9uIFJQRyB3aGVyZSB0aGUgY29yZSBnYW1lcGxheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9vcCByZXNpZGVzIGluIGh1bnRpbmcgbW9uc3RlciBmb3IgdGhlaXIgcGFydHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB1c2luZyB0aGUgcGFydHMgdG8gY3JlYXRlIHdlYXBvbnMgYW5kIGFybW9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdCB3aWxsIGhlbHAgeW91IGRlZmVhdCBzdHJvbmdlciBtb25zdGVycy5gO1xuICAgIHRleHRJbmZvMi5hcHBlbmQodGV4dERlc2NyaXB0aW9uMik7XG5cbiAgICAvLyBjb250YWluZXIgZGl2IGZvciB0aGUgb3V0cm9cbiAgICBjb25zdCBvdXRybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG91dHJvLmNsYXNzTGlzdC5hZGQoJ3BvcnRpb24nKTtcbiAgICBvdXRyby5jbGFzc0xpc3QuYWRkKCdvdXRybycpO1xuICAgIGFib3V0Q29udGVudC5hcHBlbmQob3V0cm8pO1xuXG4gICAgLy8gdGV4dCBpbmZvcm1hdGlvbiBjb250YWluZXIgZm9yIHRoZSBvdXRybyBkaXZcbiAgICBjb25zdCB0ZXh0SW5mb091dHJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dEluZm9PdXRyby5jbGFzc0xpc3QuYWRkKCd0ZXh0SW5mb3JtYXRpb24nKTtcbiAgICBvdXRyby5hcHBlbmQodGV4dEluZm9PdXRybyk7XG5cbiAgICAvLyB0ZXh0IGluZm9ybWF0aW9uIGZvciB0aGUgb3V0cm8gZGl2XG4gICAgY29uc3Qgb3V0cm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgb3V0cm9UaXRsZS50ZXh0Q29udGVudCA9ICdGZWx5bmUgS2l0Y2hlbj8nO1xuICAgIHRleHRJbmZvT3V0cm8uYXBwZW5kKG91dHJvVGl0bGUpO1xuXG4gICAgY29uc3Qgb3V0cm9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBvdXRyb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYEluIHRoZSB3b3JsZCBvZiBNb25zdGVyIEh1bnRlciwgd2UgZWF0IG1lYWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwYXJlZCBpbiByZXN0YXVyYW50cyB0aGF0IGFyZSBtYW5hZ2VkIGJ5IGNhdHMgcmVmZXJyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGFzIEZlbHluZXMuIEZlbHluZXMgdXNlIGluZ3JlZGllbnRzIGZyb20gc2xhaW4gbW9uc3RlcnMgYXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlbGwgYXMgaXRlbXMgcHJvY3VyZWQgZnJvbSB0aGUgaHVudGVycyB0byBjcmVhdGUgc3BlY2lhbGl6ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYWxzLmA7XG4gICAgdGV4dEluZm9PdXRyby5hcHBlbmQob3V0cm9EZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gYWJvdXRDb250ZW50O1xufVxuXG5leHBvcnQgeyBhYm91dENvbXBvbmVudCB9OyIsImltcG9ydCB7IGNvbnRlbnQgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCAnLi9ob21lLmNzcyc7XG5pbXBvcnQgU2lnbiBmcm9tICcuL3NpZ24uc3ZnJztcblxuZnVuY3Rpb24gY3JlYXRlQmFubmVyKCkge1xuICAgIC8vIGNyZWF0ZXMgdGhlIGhlcm8gaW1hZ2UgZm9yIHRoZSByZXN0YXVyYW50XG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcicpO1xuXG4gICAgLy8gY3JlYXRlcyB0aGUgaW1hZ2UgYW5kIGFwcGVuZHMgaXRcbiAgICBjb25zdCBiYW5uZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGJhbm5lckltYWdlLnNyYyA9IFNpZ247XG4gICAgYmFubmVyLmFwcGVuZChiYW5uZXJJbWFnZSk7XG5cbiAgICByZXR1cm4gYmFubmVyO1xufVxuXG5mdW5jdGlvbiBob21lQ29tcG9uZW50KCkge1xuXG4gICAgXG4gICAgXG4gICAgLy8gY3JlYXRlcyBkaXYgZm9yIGhvbGRpbmcgYWxsIG9mIHRoZSBob21lIHBhZ2UgaW5mb1xuICAgIGNvbnN0IGluZm9ybWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mb3JtYXRpb24uY2xhc3NMaXN0LmFkZCgnaW5mb3JtYXRpb24nKTtcbiAgICBpbmZvcm1hdGlvbi5hcHBlbmQoY3JlYXRlQmFubmVyKCkpO1xuXG4gICAgLy8gY3JlYXRlcyB0aGUgaGVhZGxpbmUgYW5kIGFwcGVuZHMgaXRcbiAgICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGxpbmUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBGZWx5bmUgS2l0Y2hlbiEnO1xuICAgIGluZm9ybWF0aW9uLmFwcGVuZChoZWFkbGluZSk7XG5cbiAgICAvLyBjcmVhdGVzIHRoZSBzZWNvbmQgc2VjdGlvbiBjb250YWluZXJcbiAgICBjb25zdCBjaG9vc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaG9vc2UuY2xhc3NMaXN0LmFkZCgnY2hvb3NlJyk7XG5cbiAgICAvLyBjcmVhdGVzIHRoZSBpbmZvcm1hdGlvbiB0byBiZSBwbGFjZWQgaW50byB0aGUgc2Vjb25kIHNlY3Rpb24gY29udGFpbmVyXG4gICAgY29uc3QgY2hvb3NlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjaG9vc2VIZWFkZXIudGV4dENvbnRlbnQgPSAnV2h5IGNob29zZSB1cz8nO1xuICAgIGNob29zZS5hcHBlbmQoY2hvb3NlSGVhZGVyKTtcblxuICAgIGNvbnN0IGNob29zZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2hvb3NlSW5mby50ZXh0Q29udGVudCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBcbiAgICBlbGl0LiBJbGxvIGR1Y2ltdXMgZmFjZXJlIGN1bXF1ZSBzb2x1dGEgcHJhZXNlbnRpdW0gbmVtbyBlYXJ1bSBkZWJpdGlzLFxuICAgIGFkIHByb3ZpZGVudCBtYWlvcmVzIHJlcGVsbGVuZHVzPyBOdWxsYSBlc3NlIGNvbnNlcXVhdHVyIHJhdGlvbmUgdml0YWUsIFxuICAgIGl1cmUgaW1wZWRpdCEgRGVsZWN0dXMsIHZlcm8hYDtcbiAgICBjaG9vc2UuYXBwZW5kKGNob29zZUluZm8pO1xuICAgIGluZm9ybWF0aW9uLmFwcGVuZChjaG9vc2UpO1xuXG4gICAgLy8gY3JlYXRlcyB0aGUgdGhpcmQgc2VjdGlvbiBjb250YWluZXIgaG9sZGluZyBsb2NhdGlvbiBpbmZvcm1hdGlvblxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcblxuICAgIC8vIGNyZWF0ZXMgdGhlIGhlYWRsaW5lIGZvciB0aGUgbG9jYXRpb24gY29udGFpbmVyIGFuZCBhcHBlbmRzIGl0XG4gICAgY29uc3QgbG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbG9jYXRpb25UaXRsZS50ZXh0Q29udGVudCA9ICdXaGVyZSBhcmUgd2UgbG9jYXRlZD8nO1xuICAgIGxvY2F0aW9uLmFwcGVuZChsb2NhdGlvblRpdGxlKTtcblxuICAgIC8vIGNyZWF0ZXMgdGhlIHN0cmVldCBjb250YWluZXIgdGhhdCB3aWxsIGhvbGQgdGhlIGFkZHJlc3NcbiAgICBjb25zdCBzdHJlZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vIGNyZWF0ZXMgdGhlIHR3byBlbGVtZW50cyB0aGF0IHdpbGwgYmUgYXBwZW5kZWQgdG8gc3RyZWV0IGNvbnRhaW5lclxuICAgIGNvbnN0IHN0cmVldE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3RyZWV0TmFtZS50ZXh0Q29udGVudCA9ICdEb3dudG93biBNYWluIFN0Lic7XG4gICAgc3RyZWV0LmFwcGVuZChzdHJlZXROYW1lKTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICdTb21ld2hlcmUsIFNDIDIyMjIyJztcbiAgICBzdHJlZXQuYXBwZW5kKGFkZHJlc3MpO1xuICAgIFxuICAgIC8vIGFwcGVuZHMgc3RyZWV0IHRvIGxvY2F0aW9uIGNvbnRhaW5lclxuICAgIGxvY2F0aW9uLmFwcGVuZChzdHJlZXQpO1xuXG4gICAgLy8gYXBwZW5kcyBsb2NhdGlvbiB0byBpbmZvcm1hdGlvbiBjb250YWluZXJcbiAgICBpbmZvcm1hdGlvbi5hcHBlbmQobG9jYXRpb24pO1xuXG4gICAgLy8gY3JlYXRlcyB0ZWxlcGhvbmUgY29udGFpbmVyIHRoYXQgaG9sZHMgdGVsZXBob25lIG51bWJlciBhbmQgYXBwZW5kcyBpdCB0byBpbmZvcm1hdGlvbiBjb250YWluZXJcbiAgICBjb25zdCB0ZWxlcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZWxlcGhvbmUuY2xhc3NMaXN0LmFkZCgndGVsZXBob25lJyk7XG5cbiAgICBjb25zdCB0ZWxlcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdGVsZXBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJzEtOTk5LTk5OS05OTk5JztcbiAgICB0ZWxlcGhvbmUuYXBwZW5kKHRlbGVwaG9uZU51bWJlcik7XG5cbiAgICBsb2NhdGlvbi5hcHBlbmQodGVsZXBob25lKTtcblxuICAgIC8vIGFkZHMgYSBib29raW5nIGJ1dHRvbiB0byB0aGUgZW5kIG9mIHRoZSBwYWdlXG4gICAgY29uc3QgYm9va1VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYm9va1VzLmNsYXNzTGlzdC5hZGQoJ2Jvb2tVcycpO1xuICAgIGJvb2tVcy50ZXh0Q29udGVudCA9ICdSZXNlcnZhdGlvbnMnO1xuXG4gICAgaW5mb3JtYXRpb24uYXBwZW5kKGJvb2tVcyk7XG5cbiAgICAvLyByZXR1cm5zIHRoZSBtYWluIGNvbnRlbnQgZGl2IGZvciB0aGlzIHBhZ2VcbiAgICBcbiAgICByZXR1cm4gaW5mb3JtYXRpb247XG5cbn1cblxuZXhwb3J0IHsgaG9tZUNvbXBvbmVudCwgY3JlYXRlQmFubmVyIH07XG5cblxuIiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvLnN2Zyc7XG5leHBvcnQgeyBjb250ZW50IH07XG5pbXBvcnQgeyBob21lQ29tcG9uZW50LCBjcmVhdGVCYW5uZXIgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHsgbWVudUNvbXBvbmVudCB9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgeyBhYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQuanMnO1xuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gICAgLy8gQ3JlYXRlcyB0aGUgbmF2YmFyIHRoYXQgd2lsbCBiZSBzaGFyZWQgYWNyb3NzIHBhZ2VzXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuXG4gICAgLy8gY3JlYXRlcyB0aGUgbG9nbyBib3ggdG8gYmUgYWRkZWQgdG8gdGhlIG5hdmJhclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsb2dvJyk7XG4gICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG5cbiAgICAvLyBjcmVhdGVzIHRoZSBpbWFnZSB0byBiZSBhZGRlZCB0byB0aGUgbG9nbyBjb250YWluZXJcbiAgICBjb25zdCBsb2dvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvSW1hZ2Uuc3JjID0gTG9nbztcblxuICAgIC8vIGFkZHMgdGhlIGxvZ28gdG8gdGhlIGNvbnRhaW5lclxuICAgIGxvZ28uYXBwZW5kKGxvZ29JbWFnZSk7XG5cbiAgICAvLyBhZGRzIHRoZSBsb2dvIGNvbnRhaW5lciB0byB0aGUgbmF2YmFyXG4gICAgbmF2LmFwcGVuZChsb2dvKTtcblxuICAgIC8vIGNyZWF0ZXMgdGhlIGxpbmtiYXIgdGhhdCB3aWxsIGJlIHBsYWNlZCBuZXh0IHRvIHRoZSBsb2dvXG4gICAgY29uc3QgbGlua2JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpbmtiYXIuY2xhc3NMaXN0LmFkZCgnbGlua2JhcicpO1xuXG4gICAgLy8gY3JlYXRlcyB0aGUgbGlua3MgdGhhdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBsaW5rYmFyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBob21lLmlkID0gJ2hvbWUnO1xuICAgIGhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIG1lbnUuaWQgPSAnbWVudSc7XG4gICAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFib3V0LmlkID0gJ2Fib3V0JztcbiAgICBhYm91dC50ZXh0Q29udGVudCA9ICdBYm91dCc7XG5cbiAgICAvLyBhZGRzIHRoZSBsaW5rcyB0byB0aGUgbGlua2JhciBjb250YWluZXJcbiAgICBsaW5rYmFyLmFwcGVuZChob21lKTtcbiAgICBsaW5rYmFyLmFwcGVuZChtZW51KTtcbiAgICBsaW5rYmFyLmFwcGVuZChhYm91dCk7XG5cbiAgICAvLyBhZGRzIHRoZSBsaW5rYmFyIHRvIHRoZSBuYXZiYXJcbiAgICBuYXYuYXBwZW5kKGxpbmtiYXIpO1xuXG4gICAgcmV0dXJuIG5hdjtcbn1cblxuLy8gSW5pdGlhbCBwYWdlIGxvYWRcblxuY29udGVudC5hcHBlbmQoY3JlYXRlTmF2KCkpO1xuY29udGVudC5hcHBlbmQoaG9tZUNvbXBvbmVudCgpKTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBob21lIHBhZ2VcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBsZXQgdGFyRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAodGFyRWxlbWVudC50YWdOYW1lID09ICdBJyAmJiB0YXJFbGVtZW50LmlkID09ICdob21lJykge1xuICAgICAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmQoY3JlYXRlTmF2KCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZChob21lQ29tcG9uZW50KCkpO1xuICAgIH1cbn0pXG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZvciB0aGUgbWVudSBwYWdlXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgbGV0IHRhckVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhckVsZW1lbnQudGFnTmFtZSA9PSAnQScgJiYgdGFyRWxlbWVudC5pZCA9PSAnbWVudScpIHtcbiAgICAgICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGNyZWF0ZU5hdigpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmQobWVudUNvbXBvbmVudCgpKTtcbiAgICB9XG59KVxuXG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgYWJvdXQgcGFnZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGxldCB0YXJFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmICh0YXJFbGVtZW50LnRhZ05hbWUgPT0gJ0EnICYmIHRhckVsZW1lbnQuaWQgPT0gJ2Fib3V0Jykge1xuICAgICAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudC5hcHBlbmQoY3JlYXRlTmF2KCkpO1xuICAgICAgICBjb250ZW50LmFwcGVuZChhYm91dENvbXBvbmVudCgpKTtcbiAgICB9XG59KVxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgY29udGVudCB9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0ICcuL21lbnUuY3NzJztcblxuY29uc3QgaW5ncmVkaWVudHMgPSBbJ1d5dmVybiBGaWxldCcsICdQZW9uIFR1cmtleScsICdTaG9ndW4gVHVuYScsICdNaWxsZW5hcnkgQ3JhYicsICdXaWxkIENoaWNrZW4nLCAnR2lnYSBTdGVhaycsICdRdWVlbiBTaHJpbXAnLCAnU291bGZ1bCBDYXZpYXInLCAnU3RvbmVjb3JuJywgJ0N1ZGdlbCBPbmlvbicsICdFbHlzaWFuIEZydWl0JywgJ0hlYXZlbiBCZXJyeSddO1xuY29uc3QgcHJpY2VzID0gWzEyLjk5LCAxMS45OSwgOS45OSwgMTUuOTksIDEyLjk5LCAxNC45OSwgMTIuOTksIDE2Ljk5LCA3Ljk5LCA3Ljk5LCA5Ljk5LCAxMC45OV1cblxuZnVuY3Rpb24gbWVudUNvbXBvbmVudCgpIHtcbiAgICAvLyBEaXYgdGhhdCBob2xkcyB0aGUgbWVudVxuICAgIGNvbnN0IG1lbnVGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVGcmFtZS5jbGFzc0xpc3QuYWRkKCdtZW51RnJhbWUnKTtcblxuICAgIC8vIERpdiB0aGF0IGhvbGRzIGFsbCBvZiB0aGUgY29udGVudHMgb2YgdGhlIG1lbnUgXG4gICAgY29uc3QgbWVudUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUJvYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnVCb2FyZCcpO1xuICAgIFxuICAgIC8vIGFwcGVuZHMgbWVudSB0byBib2FyZFxuICAgIG1lbnVGcmFtZS5hcHBlbmQobWVudUJvYXJkKTtcblxuICAgIC8vIGNvbnRlbnRzIGZvciB0aGUgbWVudVxuICAgIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudVRpdGxlJyk7XG4gICAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gYE91ciBNZW51YDtcbiAgICBcbiAgICAvLyBhcHBlbmRzIHRpdGxlIHRvIGJvYXJkXG4gICAgbWVudUJvYXJkLmFwcGVuZChtZW51VGl0bGUpO1xuXG4gICAgLy8gZGl2IHRoYXQgaG9sZHMgYWxsIG9mIHRoZSBtZW51IGl0ZW1zXG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW1zLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtcycpO1xuXG4gICAgLy8gYXBwZW5kcyBtZW51SXRlbXMgZGl2IHRvIHRoZSBtZW51Qm9hcmRcbiAgICBtZW51Qm9hcmQuYXBwZW5kKG1lbnVJdGVtcyk7XG5cbiAgICAvLyBjcmVhdGVzIGV2ZXJ5IGl0ZW0gZGl2IGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBtZW51SXRlbSBkaXZcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcbiAgICAgICAgbWVudUl0ZW0uaWQgPSBgbWVudUl0ZW0ke2l9YDtcbiAgICAgICAgbWVudUl0ZW1zLmFwcGVuZChtZW51SXRlbSk7XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMjsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGl0ZW1QLmNsYXNzTGlzdC5hZGQoYGl0ZW0ke2l9YCk7XG4gICAgICAgICAgICAvLyBhZGRzIHRoZSBhcnJheSBlbGVtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gaXRzIHBsYWNlIGluIHRoZSBtZW51XG4gICAgICAgICAgICBpdGVtUC50ZXh0Q29udGVudCA9IGluZ3JlZGllbnRzW2kgLSAxXTtcbiAgICAgICAgICAgIG1lbnVJdGVtLmFwcGVuZChpdGVtUCk7XG4gICAgICAgICAgICBjb25zdCBwcmljZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBwcmljZVAuY2xhc3NMaXN0LmFkZChgcHJpY2Uke2l9YCk7XG4gICAgICAgICAgICAvLyBhZGRzIHRoZSBhcnJheSBlbGVtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gaXRzIHBsYWNlIGluIHRoZSBtZW51XG4gICAgICAgICAgICBwcmljZVAudGV4dENvbnRlbnQgPSBwcmljZXNbaSAtIDFdO1xuICAgICAgICAgICAgbWVudUl0ZW0uYXBwZW5kKHByaWNlUCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWVudUZyYW1lO1xufVxuXG5cbmV4cG9ydCB7IG1lbnVDb21wb25lbnQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9