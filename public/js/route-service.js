"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["route-service"],{

/***/ "./resources/js/services/route-service.js":
/*!************************************************!*\
  !*** ./resources/js/services/route-service.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router */ "./resources/js/router/index.js");

var RouteService = {
  // Authenticate each api request
  authenticateUser: function authenticateUser(url, token, next, logout) {
    // Get token from local storage
    axios.get(url, {
      withCredentials: false,
      headers: {
        "Authorization": "Bearer " + token,
        'Accept': 'application/json'
      },
      params: {
        token: token
      }
    }).then(function (response) {
      if (response.data.success) {
        next();
      } else {
        window.location.href = logout;
      }
    })["catch"](function () {
      window.location.href = logout;
    });
  },
  // check if diagnostic tool has been completed
  // If not redirect to diagnostic tool
  completedDiagnosticTool: function completedDiagnosticTool(token) {
    // Get token from local storage
    axios.get('/api/learning/diagnostic-tool/completed', {
      headers: {
        "Authorization": "Bearer " + token,
        'Accept': 'application/json'
      }
    }).then(function (response) {
      if (response.data.completed === false) {
        // router.push({ path: '/diagnostic/user-details' });
        window.location.href = '/diagnostic/user-details';
      }
    })["catch"](function (error) {
      console.log(error);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RouteService);

/***/ })

}]);