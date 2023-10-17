"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["base-service"],{

/***/ "./resources/js/services/base-service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/base-service.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var baseService = {
  // Install moment.js to work
  fullDate: function fullDate(value) {
    return moment(value).format('MMMM Do YYYY, h:mm:ss a');
  },
  roundDecimal: function roundDecimal(num) {
    return Math.round(num * 100) / 100;
  },
  deleteCookies: function deleteCookies() {
    var cookies = document.cookie.split("; ");
    console.log(cookies);
    for (var c = 0; c < cookies.length; c++) {
      var d = window.location.hostname.split(".");
      while (d.length > 0) {
        var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
        var p = location.pathname.split('/');
        document.cookie = cookieBase + '/';
        while (p.length > 0) {
          document.cookie = cookieBase + p.join('/');
          p.pop();
        }
        d.shift();
      }
    }
    console.log("Cookie deleted");

    // const cookies = document.cookie.split(";");
    // console.log(cookies);
    // for (let i = 0; i < cookies.length; i++) {
    //     const cookie = cookies[i];
    //     const eqPos = cookie.indexOf("=");
    //     const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    //     document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    // }
    // console.log("deleted cookie");
  },
  downloadAnyFile: function downloadAnyFile(file_url, title) {
    axios.get(file_url, {
      responseType: 'blob'
    }).then(function (response) {
      var ext = file_url.split(/[#?]/)[0].split('.').pop().trim();
      var blob = new Blob([response.data], {
        type: 'application/' + ext
      });
      var link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = title + '.' + ext;
      link.click();
      URL.revokeObjectURL(link.href);
    })["catch"](console.error);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseService);

/***/ })

}]);