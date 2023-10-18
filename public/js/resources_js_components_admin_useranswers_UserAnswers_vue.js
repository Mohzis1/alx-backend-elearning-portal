"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_useranswers_UserAnswers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswers.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswers.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserAnswersTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAnswersTable */ "./resources/js/components/admin/useranswers/UserAnswersTable.vue");
/* harmony import */ var laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! laravel-vue-pagination */ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.es.js");
/* harmony import */ var vue_content_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-content-loader */ "./node_modules/vue-content-loader/dist/vue-content-loader.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




// import {ref, reactive, onMounted} from 'vue';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    UserAnswersTable: _UserAnswersTable__WEBPACK_IMPORTED_MODULE_0__["default"],
    LaravelVuePagination: laravel_vue_pagination__WEBPACK_IMPORTED_MODULE_1__["default"],
    ContentLoader: vue_content_loader__WEBPACK_IMPORTED_MODULE_3__.ContentLoader,
    BulletListLoader: vue_content_loader__WEBPACK_IMPORTED_MODULE_3__.BulletListLoader,
    ListLoader: vue_content_loader__WEBPACK_IMPORTED_MODULE_3__.ListLoader
  },
  data: function data() {
    return {
      userAnswers: [],
      dataLoaded: false,
      userId: null
    };
  },
  methods: {
    getAnswers: function getAnswers(id) {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://brace.afchub.org/api/user-answer_byid/".concat(id), {
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                }
              });
            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.data;
            case 6:
              _this.userAnswers = _context.sent;
              console.log(_this.userAnswers);
              _this.dataLoaded = true;
              _context.next = 13;
              break;
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 11]]);
      }))();
    }
  },
  created: function created() {
    console.log(this.$route.params.id);
    this.getAnswers(this.$route.params.id);
    this.userId = this.$route.params.id;
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/sweet-alert-service */ "./resources/js/services/sweet-alert-service.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    userAnswer: Object
  },
  methods: {
    answereOptions: function answereOptions(value) {
      return value;
    },
    getItemClass: function getItemClass(item) {
      return item === "" ? "noanswer" : "ansgiven";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswers.vue?vue&type=template&id=82c54b6c":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswers.vue?vue&type=template&id=82c54b6c ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "content-header"
}, "Arthur Orduh", -1 /* HOISTED */);
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-md-12"
};
var _hoisted_4 = {
  "class": "card"
};
var _hoisted_5 = {
  "class": "card-body"
};
var _hoisted_6 = {
  "class": "card-block"
};
var _hoisted_7 = {
  "class": "table-responsive"
};
var _hoisted_8 = {
  "class": "table table-striped table-bordered small table-hover table-responsive-sm mb-0"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border-top-0"
}, "Question No"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border-top-0"
}, "Option Answers"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "border-top-0"
}, "Other Answers")])], -1 /* HOISTED */);
var _hoisted_10 = {
  key: 1
};
var _hoisted_11 = {
  colspan: "3"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "27",
  y: "139",
  rx: "4",
  ry: "4",
  width: "20",
  height: "20"
}, null, -1 /* HOISTED */);
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "67",
  y: "140",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "188",
  y: "141",
  rx: "10",
  ry: "10",
  width: "169",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "402",
  y: "140",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "523",
  y: "141",
  rx: "10",
  ry: "10",
  width: "169",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "731",
  y: "139",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "852",
  y: "138",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "1424",
  y: "137",
  rx: "10",
  ry: "10",
  width: "68",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "26",
  y: "196",
  rx: "4",
  ry: "4",
  width: "20",
  height: "20"
}, null, -1 /* HOISTED */);
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "66",
  y: "197",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "187",
  y: "198",
  rx: "10",
  ry: "10",
  width: "169",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "401",
  y: "197",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "522",
  y: "198",
  rx: "10",
  ry: "10",
  width: "169",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "730",
  y: "196",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "851",
  y: "195",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "1456",
  cy: "203",
  r: "12"
}, null, -1 /* HOISTED */);
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "26",
  y: "258",
  rx: "4",
  ry: "4",
  width: "20",
  height: "20"
}, null, -1 /* HOISTED */);
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "66",
  y: "259",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "187",
  y: "260",
  rx: "10",
  ry: "10",
  width: "169",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "401",
  y: "259",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "522",
  y: "260",
  rx: "10",
  ry: "10",
  width: "169",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "730",
  y: "258",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "851",
  y: "257",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "1456",
  cy: "265",
  r: "12"
}, null, -1 /* HOISTED */);
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "26",
  y: "316",
  rx: "4",
  ry: "4",
  width: "20",
  height: "20"
}, null, -1 /* HOISTED */);
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "66",
  y: "317",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "187",
  y: "318",
  rx: "10",
  ry: "10",
  width: "169",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "401",
  y: "317",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "522",
  y: "318",
  rx: "10",
  ry: "10",
  width: "169",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "730",
  y: "316",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "851",
  y: "315",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "1456",
  cy: "323",
  r: "12"
}, null, -1 /* HOISTED */);
var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "26",
  y: "379",
  rx: "4",
  ry: "4",
  width: "20",
  height: "20"
}, null, -1 /* HOISTED */);
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "66",
  y: "380",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "187",
  y: "381",
  rx: "10",
  ry: "10",
  width: "169",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "401",
  y: "380",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "522",
  y: "381",
  rx: "10",
  ry: "10",
  width: "169",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "730",
  y: "379",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "851",
  y: "378",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "1456",
  cy: "386",
  r: "12"
}, null, -1 /* HOISTED */);
var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "978",
  y: "138",
  rx: "10",
  ry: "10",
  width: "169",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "977",
  y: "195",
  rx: "10",
  ry: "10",
  width: "169",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "977",
  y: "257",
  rx: "10",
  ry: "10",
  width: "169",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "977",
  y: "315",
  rx: "10",
  ry: "10",
  width: "169",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "977",
  y: "378",
  rx: "10",
  ry: "10",
  width: "169",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "1183",
  y: "139",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "1182",
  y: "196",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "1182",
  y: "258",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "1182",
  y: "316",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "1182",
  y: "379",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "1305",
  y: "137",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_63 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "1304",
  y: "194",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "1304",
  y: "256",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_65 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "1304",
  y: "314",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "1304",
  y: "377",
  rx: "10",
  ry: "10",
  width: "85",
  height: "19"
}, null, -1 /* HOISTED */);
var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "37",
  cy: "97",
  r: "11"
}, null, -1 /* HOISTED */);
var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "26",
  y: "23",
  rx: "5",
  ry: "5",
  width: "153",
  height: "30"
}, null, -1 /* HOISTED */);
var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "1316",
  cy: "88",
  r: "11"
}, null, -1 /* HOISTED */);
var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "1337",
  y: "94",
  rx: "0",
  ry: "0",
  width: "134",
  height: "3"
}, null, -1 /* HOISTED */);
var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "77",
  cy: "96",
  r: "11"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_user_answers_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("user-answers-table");
  var _component_content_loader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("content-loader");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <form @submit.prevent=\"searchApplications\" style=\"margin-bottom: 4px;\">\r\n                    <div class=\"row p-3\">\r\n                        <div class=\"col-12\">\r\n                            <h5 class=\"text-left\">Search and filter</h5>\r\n                        </div>\r\n                        <div class=\"col-md-4\" style=\"margin-bottom: 10px;\">\r\n                            <label>Name/Email</label>\r\n                            <input class=\"form-control\" type=\"text\" v-model=\"form.term\">\r\n                        </div>\r\n                        <div class=\"col-md-4\" style=\"margin-bottom: 10px;\">\r\n                            <label>Country</label>\r\n                            <select v-model=\"form.country_id\" class=\"form-control\">\r\n                                <option value=\"\">Select</option>\r\n                                <option v-for=\"country in countries\"\r\n                                        :key=\"country.id\"\r\n                                        :value=\"country.id\">{{ country.country_name }}</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-4\" style=\"margin-bottom: 10px;\">\r\n                            <label>Selected</label>\r\n                            <select v-model=\"form.selected\" class=\"form-control\">\r\n                                <option value=\"\">Select</option>\r\n                                <option value=\"selected\">Selected applicants</option>\r\n                                <option value=\"all\">All applicants</option>\r\n                            </select>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-3\" style=\"margin-bottom: 10px;\">\r\n                            <label>Date of Birth (Start)</label>\r\n                            <input v-model=\"form.dob_start\" class=\"form-control\" type=\"date\">\r\n                        </div>\r\n\r\n                        <div class=\"col-md-3\" style=\"margin-bottom: 10px;\">\r\n                            <label>Date of Birth (End)</label>\r\n                            <input v-model=\"form.dob_end\" class=\"form-control\" type=\"date\">\r\n                        </div>\r\n\r\n                        <div class=\"col-md-3\" style=\"margin-bottom: 10px;\">\r\n                            <label>Application Date (Start)</label>\r\n                            <input v-model=\"form.application_date_start\" class=\"form-control\" type=\"date\">\r\n                        </div>\r\n\r\n                        <div class=\"col-md-3\" style=\"margin-bottom: 10px;\">\r\n                            <label>Application Date (End)</label>\r\n                            <input v-model=\"form.application_date_end\" class=\"form-control\" type=\"date\">\r\n                        </div>\r\n\r\n                        <div class=\"col-md-12 d-flex justify-content-center\"\r\n                             style=\"margin-bottom: 10px;\">\r\n                            <button type=\"submit\" class=\"btn btn-info btn-md mr-2\">\r\n                                Search <i class=\"fa fa-search\"></i></button>\r\n\r\n                            <a :href=\"'/admin/applications/export/' + JSON.stringify(form)\"\r\n                               :download=\"'/admin/applications/export/' + JSON.stringify(form)\">\r\n                                <button type=\"button\" class=\"btn btn-warning btn-md\">\r\n                                    Export <i class=\"fa fa-download\"></i>\r\n                                </button>\r\n                            </a>\r\n                        </div>\r\n\r\n                    </div>\r\n                </form> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [$data.dataLoaded ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.userAnswers, function (userAnswer) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_user_answers_table, {
      key: userAnswer.id,
      userAnswer: userAnswer
    }, null, 8 /* PROPS */, ["userAnswer"]);
  }), 128 /* KEYED_FRAGMENT */)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_content_loader, {
    animate: true,
    speed: 2,
    width: "{1500}",
    height: "{400}",
    viewBox: "0 0 1500 400",
    backgroundColor: "#f3f3f3",
    foregroundColor: "#ecebeb"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12, _hoisted_13, _hoisted_14, _hoisted_15, _hoisted_16, _hoisted_17, _hoisted_18, _hoisted_19, _hoisted_20, _hoisted_21, _hoisted_22, _hoisted_23, _hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27, _hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39, _hoisted_40, _hoisted_41, _hoisted_42, _hoisted_43, _hoisted_44, _hoisted_45, _hoisted_46, _hoisted_47, _hoisted_48, _hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52, _hoisted_53, _hoisted_54, _hoisted_55, _hoisted_56, _hoisted_57, _hoisted_58, _hoisted_59, _hoisted_60, _hoisted_61, _hoisted_62, _hoisted_63, _hoisted_64, _hoisted_65, _hoisted_66, _hoisted_67, _hoisted_68, _hoisted_69, _hoisted_70, _hoisted_71];
    }),
    _: 1 /* STABLE */
  })])]))])])])])])])])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=template&id=e1ba6258&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=template&id=e1ba6258&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-e1ba6258"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  width: "10%"
};
var _hoisted_2 = {
  width: "45%"
};
var _hoisted_3 = {
  width: "45%"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'bg-selected': _ctx.selectedApplicant
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.userAnswer.question_id), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.answereOptions($props.userAnswer.option_answer), function (answer_option, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.getItemClass(answer_option))
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(answer_option === "" ? "No answer" : answer_option), 1 /* TEXT */)], 2 /* CLASS */);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_3, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.answereOptions($props.userAnswer.other_answer), function (answer_option, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", {
      key: index,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($options.getItemClass(answer_option))
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(answer_option === "" ? "No answer" : answer_option), 1 /* TEXT */)], 2 /* CLASS */);
  }), 128 /* KEYED_FRAGMENT */))])], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Transition name=\"fade\">\r\n        <tr v-if=\"isOpen\">\r\n            <th colSpan=\"3\">\r\n\r\n                <div className=\"row\">\r\n                    <div className=\"col-md-12 mt-2\">\r\n                        <div className=\"card\">\r\n                            <div className=\"bg-white\">\r\n                                <div className=\"mb-1 text-center\">\r\n                                    <h6 className=\"card-title text-primary\">More Responses from\r\n                                        {{ application.name }}</h6>\r\n                                    <span className=\"card-text\">\r\n                                        <strong>\r\n                                            Business Description\r\n                                        </strong><br>{{ application.business_description }}<br>\r\n\r\n                                        <strong>\r\n                                            Current Number of Staffs\r\n                                        </strong><br>{{ application.number_of_employees }}<br>\r\n\r\n                                        <strong>\r\n                                            Have you participated in any ALX Backend Elearning Portal / Nourishing Africa / Changing Narrative programs before?\r\n                                        </strong><br>\r\n                                        {{ application.participated_previous_program }}<br>\r\n\r\n                                        <strong>\r\n                                            Have you participated in any climate-related training/programs?\r\n                                        </strong><br>{{ application.participated_climate_program }}<br>\r\n\r\n                                        <strong>\r\n                                            What are your expectations from the program?\r\n                                        </strong><br>{{ application.expectations_from_program }}<br>\r\n\r\n                                        <strong>\r\n                                            How would the program impact your business?\r\n                                        </strong><br>\r\n                                        <p v-html=\"application.impact_on_business\"></p>\r\n\r\n                                        <strong>\r\n                                            How did you hear about this program\r\n                                        </strong><br>\r\n                                        <p v-html=\"application.how_did_you_hear\"></p>\r\n\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </th>\r\n        </tr>\r\n    </Transition> ")], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=style&index=0&id=e1ba6258&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=style&index=0&id=e1ba6258&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.noanswer[data-v-e1ba6258] {\r\n  color: red;\n}\n.ansgiven[data-v-e1ba6258] {\r\n  color: green;\n}\nbutton[data-v-e1ba6258] {\r\n    outline: none;\r\n    border: none;\r\n    padding: 5px 20px;\r\n    color: #ddd;\r\n    background-color: #006600;\r\n    border-radius: 4px;\n}\n.bg-selected[data-v-e1ba6258]{\r\n    background-color: #BAF9E2 !important;\r\n    color: #685858;\n}\n.fade-enter-active[data-v-e1ba6258],\r\n.fade-leave-active[data-v-e1ba6258] {\r\n    transition: opacity 0.5s;\n}\n.fade-enter-from[data-v-e1ba6258],\r\n.fade-leave-to[data-v-e1ba6258] {\r\n    opacity: 0;\n}\n.drop-in-enter-active[data-v-e1ba6258],\r\n.drop-in-leave-active[data-v-e1ba6258] {\r\n    transition: all 0.3s ease-out;\n}\n.drop-in-enter-from[data-v-e1ba6258],\r\n.drop-in-leave-to[data-v-e1ba6258] {\r\n    opacity: 0;\r\n    transform: translateY(-50px);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.es.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.es.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LaravelVuePagination)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

const _sfc_main$1 = {
  emits: ["pagination-change-page"],
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 0
    },
    showDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator: (value) => {
        return ["small", "default", "large"].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      default: "left",
      validator: (value) => {
        return ["left", "center", "right"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    isApiResource() {
      return !!this.data.meta;
    },
    currentPage() {
      return this.isApiResource ? this.data.meta.current_page : this.data.current_page;
    },
    firstPageUrl() {
      return this.isApiResource ? this.data.links.first : null;
    },
    from() {
      return this.isApiResource ? this.data.meta.from : this.data.from;
    },
    lastPage() {
      return this.isApiResource ? this.data.meta.last_page : this.data.last_page;
    },
    lastPageUrl() {
      return this.isApiResource ? this.data.links.last : null;
    },
    nextPageUrl() {
      return this.isApiResource ? this.data.links.next : this.data.next_page_url;
    },
    perPage() {
      return this.isApiResource ? this.data.meta.per_page : this.data.per_page;
    },
    prevPageUrl() {
      return this.isApiResource ? this.data.links.prev : this.data.prev_page_url;
    },
    to() {
      return this.isApiResource ? this.data.meta.to : this.data.to;
    },
    total() {
      return this.isApiResource ? this.data.meta.total : this.data.total;
    },
    pageRange() {
      if (this.limit === -1) {
        return 0;
      }
      if (this.limit === 0) {
        return this.lastPage;
      }
      var current = this.currentPage;
      var last = this.lastPage;
      var delta = this.limit;
      var left = current - delta;
      var right = current + delta + 1;
      var range = [];
      var pages = [];
      var l;
      for (var i = 1; i <= last; i++) {
        if (i === 1 || i === last || i >= left && i < right) {
          range.push(i);
        }
      }
      range.forEach(function(i2) {
        if (l) {
          if (i2 - l === 2) {
            pages.push(l + 1);
          } else if (i2 - l !== 1) {
            pages.push("...");
          }
        }
        pages.push(i2);
        l = i2;
      });
      return pages;
    }
  },
  methods: {
    previousPage() {
      this.selectPage(this.currentPage - 1);
    },
    nextPage() {
      this.selectPage(this.currentPage + 1);
    },
    selectPage(page) {
      if (page === "...") {
        return;
      }
      this.$emit("pagination-change-page", page);
    }
  },
  render() {
    return this.$slots.default({
      data: this.data,
      limit: this.limit,
      showDisabled: this.showDisabled,
      size: this.size,
      align: this.align,
      computed: {
        isApiResource: this.isApiResource,
        currentPage: this.currentPage,
        firstPageUrl: this.firstPageUrl,
        from: this.from,
        lastPage: this.lastPage,
        lastPageUrl: this.lastPageUrl,
        nextPageUrl: this.nextPageUrl,
        perPage: this.perPage,
        prevPageUrl: this.prevPageUrl,
        to: this.to,
        total: this.total,
        pageRange: this.pageRange
      },
      prevButtonEvents: {
        click: (e) => {
          e.preventDefault();
          this.previousPage();
        }
      },
      nextButtonEvents: {
        click: (e) => {
          e.preventDefault();
          this.nextPage();
        }
      },
      pageButtonEvents: (page) => ({
        click: (e) => {
          e.preventDefault();
          this.selectPage(page);
        }
      })
    });
  }
};
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  inheritAttrs: false,
  emits: ["pagination-change-page"],
  components: {
    RenderlessLaravelVuePagination: _sfc_main$1
  },
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    limit: {
      type: Number,
      default: 0
    },
    showDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator: (value) => {
        return ["small", "default", "large"].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      default: "left",
      validator: (value) => {
        return ["left", "center", "right"].indexOf(value) !== -1;
      }
    }
  },
  methods: {
    onPaginationChangePage(page) {
      this.$emit("pagination-change-page", page);
    }
  }
};
const _hoisted_1 = ["tabindex"];
const _hoisted_2 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { "aria-hidden": "true" }, "\xAB", -1);
const _hoisted_3 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Previous", -1);
const _hoisted_4 = {
  key: 0,
  class: "sr-only"
};
const _hoisted_5 = ["tabindex"];
const _hoisted_6 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { "aria-hidden": "true" }, "\xBB", -1);
const _hoisted_7 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", { class: "sr-only" }, "Next", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RenderlessLaravelVuePagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RenderlessLaravelVuePagination");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_RenderlessLaravelVuePagination, {
    data: $props.data,
    limit: $props.limit,
    "show-disabled": $props.showDisabled,
    size: $props.size,
    align: $props.align,
    onPaginationChangePage: $options.onPaginationChangePage
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)((slotProps) => [
      slotProps.computed.total > slotProps.computed.perPage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ key: 0 }, _ctx.$attrs, {
        class: ["pagination", {
          "pagination-sm": slotProps.size == "small",
          "pagination-lg": slotProps.size == "large",
          "justify-content-center": slotProps.align == "center",
          "justify-content-end": slotProps.align == "right"
        }]
      }), [
        slotProps.computed.prevPageUrl || slotProps.showDisabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: 0,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item pagination-prev-nav", { "disabled": !slotProps.computed.prevPageUrl }])
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            class: "page-link",
            href: "#",
            "aria-label": "Previous",
            tabindex: !slotProps.computed.prevPageUrl && -1
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(slotProps.prevButtonEvents)), [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "prev-nav", {}, () => [
              _hoisted_2,
              _hoisted_3
            ])
          ], 16, _hoisted_1)
        ], 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true),
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(slotProps.computed.pageRange, (page, key) => {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
            class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item pagination-page-nav", { "active": page == slotProps.computed.currentPage }]),
            key
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
              class: "page-link",
              href: "#"
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(slotProps.pageButtonEvents(page))), [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(page) + " ", 1),
              page == slotProps.computed.currentPage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_4, "(current)")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
            ], 16)
          ], 2);
        }), 128)),
        slotProps.computed.nextPageUrl || slotProps.showDisabled ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
          key: 1,
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item pagination-next-nav", { "disabled": !slotProps.computed.nextPageUrl }])
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            class: "page-link",
            href: "#",
            "aria-label": "Next",
            tabindex: !slotProps.computed.nextPageUrl && -1
          }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(slotProps.nextButtonEvents)), [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "next-nav", {}, () => [
              _hoisted_6,
              _hoisted_7
            ])
          ], 16, _hoisted_5)
        ], 2)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
      ], 16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("", true)
    ]),
    _: 3
  }, 8, ["data", "limit", "show-disabled", "size", "align", "onPaginationChangePage"]);
}
var LaravelVuePagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);



/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=style&index=0&id=e1ba6258&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=style&index=0&id=e1ba6258&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserAnswersTable_vue_vue_type_style_index_0_id_e1ba6258_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserAnswersTable.vue?vue&type=style&index=0&id=e1ba6258&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=style&index=0&id=e1ba6258&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserAnswersTable_vue_vue_type_style_index_0_id_e1ba6258_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserAnswersTable_vue_vue_type_style_index_0_id_e1ba6258_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-content-loader/dist/vue-content-loader.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-content-loader/dist/vue-content-loader.es.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BulletListLoader": () => (/* binding */ BulletListLoader),
/* harmony export */   "CodeLoader": () => (/* binding */ CodeLoader),
/* harmony export */   "ContentLoader": () => (/* binding */ ContentLoader),
/* harmony export */   "FacebookLoader": () => (/* binding */ FacebookLoader),
/* harmony export */   "InstagramLoader": () => (/* binding */ InstagramLoader),
/* harmony export */   "ListLoader": () => (/* binding */ ListLoader)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var uid = (function () {
  return Math.random().toString(36).substring(2);
});

var ContentLoader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'ContentLoader',
  props: {
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
    viewBox: {
      type: String
    },
    preserveAspectRatio: {
      type: String,
      "default": 'xMidYMid meet'
    },
    speed: {
      type: Number,
      "default": 2
    },
    baseUrl: {
      type: String,
      "default": ''
    },
    primaryColor: {
      type: String,
      "default": '#f9f9f9'
    },
    secondaryColor: {
      type: String,
      "default": '#ecebeb'
    },
    primaryOpacity: {
      type: Number,
      "default": 1
    },
    secondaryOpacity: {
      type: Number,
      "default": 1
    },
    uniqueKey: {
      type: String
    },
    animate: {
      type: Boolean,
      "default": true
    }
  },
  setup: function setup(props) {
    var idClip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.uniqueKey ? "".concat(props.uniqueKey, "-idClip") : uid();
    });
    var idGradient = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.uniqueKey ? "".concat(props.uniqueKey, "-idGradient") : uid();
    });
    var width = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _a;

      return (_a = props.width) !== null && _a !== void 0 ? _a : 400;
    });
    var height = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _a;

      return (_a = props.height) !== null && _a !== void 0 ? _a : 130;
    });
    var computedViewBox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _a;

      return (_a = props.viewBox) !== null && _a !== void 0 ? _a : "0 0 ".concat(width.value, " ").concat(height.value);
    });
    return {
      idClip: idClip,
      idGradient: idGradient,
      computedViewBox: computedViewBox
    };
  },
  render: function render() {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("svg", {
      "width": this.width,
      "height": this.height,
      "viewBox": this.computedViewBox,
      "version": "1.1",
      "preserveAspectRatio": this.preserveAspectRatio
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
      "style": {
        fill: "url(".concat(this.baseUrl, "#").concat(this.idGradient, ")")
      },
      "clip-path": "url(".concat(this.baseUrl, "#").concat(this.idClip, ")"),
      "x": "0",
      "y": "0",
      "width": "100%",
      "height": "100%"
    }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("defs", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("clipPath", {
      "id": this.idClip
    }, [this.$slots["default"] ? this.$slots["default"]() : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
      "x": "0",
      "y": "0",
      "rx": "5",
      "ry": "5",
      "width": "100%",
      "height": "100%"
    }, null)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("linearGradient", {
      "id": this.idGradient
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("stop", {
      "offset": "0%",
      "stop-color": this.primaryColor,
      "stop-opacity": this.primaryOpacity
    }, [this.animate ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("animate", {
      "attributeName": "offset",
      "values": "-2; 1",
      "dur": "".concat(this.speed, "s"),
      "repeatCount": "indefinite"
    }, null) : null]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("stop", {
      "offset": "50%",
      "stop-color": this.secondaryColor,
      "stop-opacity": this.secondaryOpacity
    }, [this.animate ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("animate", {
      "attributeName": "offset",
      "values": "-1.5; 1.5",
      "dur": "".concat(this.speed, "s"),
      "repeatCount": "indefinite"
    }, null) : null]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("stop", {
      "offset": "100%",
      "stop-color": this.primaryColor,
      "stop-opacity": this.primaryOpacity
    }, [this.animate ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("animate", {
      "attributeName": "offset",
      "values": "-1; 2",
      "dur": "".concat(this.speed, "s"),
      "repeatCount": "indefinite"
    }, null) : null])])])]);
  }
});

var BulletListLoader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(function (props, _a) {
  var attrs = _a.attrs;
  return function () {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(ContentLoader, attrs, {
      "default": function _default() {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("circle", {
          "cx": "10",
          "cy": "20",
          "r": "8"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "25",
          "y": "15",
          "rx": "5",
          "ry": "5",
          "width": "220",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("circle", {
          "cx": "10",
          "cy": "50",
          "r": "8"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "25",
          "y": "45",
          "rx": "5",
          "ry": "5",
          "width": "220",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("circle", {
          "cx": "10",
          "cy": "80",
          "r": "8"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "25",
          "y": "75",
          "rx": "5",
          "ry": "5",
          "width": "220",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("circle", {
          "cx": "10",
          "cy": "110",
          "r": "8"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "25",
          "y": "105",
          "rx": "5",
          "ry": "5",
          "width": "220",
          "height": "10"
        }, null)];
      }
    });
  };
});

var CodeLoader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(function (props, _a) {
  var attrs = _a.attrs;
  return function () {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(ContentLoader, attrs, {
      "default": function _default() {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "0",
          "y": "0",
          "rx": "3",
          "ry": "3",
          "width": "70",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "80",
          "y": "0",
          "rx": "3",
          "ry": "3",
          "width": "100",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "190",
          "y": "0",
          "rx": "3",
          "ry": "3",
          "width": "10",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "15",
          "y": "20",
          "rx": "3",
          "ry": "3",
          "width": "130",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "155",
          "y": "20",
          "rx": "3",
          "ry": "3",
          "width": "130",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "15",
          "y": "40",
          "rx": "3",
          "ry": "3",
          "width": "90",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "115",
          "y": "40",
          "rx": "3",
          "ry": "3",
          "width": "60",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "185",
          "y": "40",
          "rx": "3",
          "ry": "3",
          "width": "60",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "0",
          "y": "60",
          "rx": "3",
          "ry": "3",
          "width": "30",
          "height": "10"
        }, null)];
      }
    });
  };
});

var FacebookLoader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(function (props, _a) {
  var attrs = _a.attrs;
  return function () {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(ContentLoader, attrs, {
      "default": function _default() {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "70",
          "y": "15",
          "rx": "4",
          "ry": "4",
          "width": "117",
          "height": "6.4"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "70",
          "y": "35",
          "rx": "3",
          "ry": "3",
          "width": "85",
          "height": "6.4"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "0",
          "y": "80",
          "rx": "3",
          "ry": "3",
          "width": "350",
          "height": "6.4"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "0",
          "y": "100",
          "rx": "3",
          "ry": "3",
          "width": "380",
          "height": "6.4"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "0",
          "y": "120",
          "rx": "3",
          "ry": "3",
          "width": "201",
          "height": "6.4"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("circle", {
          "cx": "30",
          "cy": "30",
          "r": "30"
        }, null)];
      }
    });
  };
});

var ListLoader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(function (props, _a) {
  var attrs = _a.attrs;
  return function () {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(ContentLoader, attrs, {
      "default": function _default() {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "0",
          "y": "0",
          "rx": "3",
          "ry": "3",
          "width": "250",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "20",
          "y": "20",
          "rx": "3",
          "ry": "3",
          "width": "220",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "20",
          "y": "40",
          "rx": "3",
          "ry": "3",
          "width": "170",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "0",
          "y": "60",
          "rx": "3",
          "ry": "3",
          "width": "250",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "20",
          "y": "80",
          "rx": "3",
          "ry": "3",
          "width": "200",
          "height": "10"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "20",
          "y": "100",
          "rx": "3",
          "ry": "3",
          "width": "80",
          "height": "10"
        }, null)];
      }
    });
  };
});

var InstagramLoader = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)(function (props, _a) {
  var attrs = _a.attrs;
  return function () {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(ContentLoader, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(attrs, {
      "viewBox": "0 0 400 480"
    }), {
      "default": function _default() {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("circle", {
          "cx": "30",
          "cy": "30",
          "r": "30"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "75",
          "y": "13",
          "rx": "4",
          "ry": "4",
          "width": "100",
          "height": "13"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "75",
          "y": "37",
          "rx": "4",
          "ry": "4",
          "width": "50",
          "height": "8"
        }, null), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("rect", {
          "x": "0",
          "y": "70",
          "rx": "5",
          "ry": "5",
          "width": "400",
          "height": "400"
        }, null)];
      }
    });
  };
});




/***/ }),

/***/ "./resources/js/components/admin/useranswers/UserAnswers.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/admin/useranswers/UserAnswers.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserAnswers_vue_vue_type_template_id_82c54b6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAnswers.vue?vue&type=template&id=82c54b6c */ "./resources/js/components/admin/useranswers/UserAnswers.vue?vue&type=template&id=82c54b6c");
/* harmony import */ var _UserAnswers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAnswers.vue?vue&type=script&lang=js */ "./resources/js/components/admin/useranswers/UserAnswers.vue?vue&type=script&lang=js");
/* harmony import */ var C_wamp64_www_alx_backend_elearning_portal_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_wamp64_www_alx_backend_elearning_portal_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UserAnswers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UserAnswers_vue_vue_type_template_id_82c54b6c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/admin/useranswers/UserAnswers.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/admin/useranswers/UserAnswersTable.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/admin/useranswers/UserAnswersTable.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserAnswersTable_vue_vue_type_template_id_e1ba6258_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAnswersTable.vue?vue&type=template&id=e1ba6258&scoped=true */ "./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=template&id=e1ba6258&scoped=true");
/* harmony import */ var _UserAnswersTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAnswersTable.vue?vue&type=script&lang=js */ "./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=script&lang=js");
/* harmony import */ var _UserAnswersTable_vue_vue_type_style_index_0_id_e1ba6258_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserAnswersTable.vue?vue&type=style&index=0&id=e1ba6258&scoped=true&lang=css */ "./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=style&index=0&id=e1ba6258&scoped=true&lang=css");
/* harmony import */ var C_wamp64_www_alx_backend_elearning_portal_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_wamp64_www_alx_backend_elearning_portal_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_UserAnswersTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UserAnswersTable_vue_vue_type_template_id_e1ba6258_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-e1ba6258"],['__file',"resources/js/components/admin/useranswers/UserAnswersTable.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/admin/useranswers/UserAnswers.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/useranswers/UserAnswers.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserAnswers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserAnswers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserAnswers.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswers.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserAnswersTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserAnswersTable_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserAnswersTable.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/admin/useranswers/UserAnswers.vue?vue&type=template&id=82c54b6c":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/admin/useranswers/UserAnswers.vue?vue&type=template&id=82c54b6c ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserAnswers_vue_vue_type_template_id_82c54b6c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserAnswers_vue_vue_type_template_id_82c54b6c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserAnswers.vue?vue&type=template&id=82c54b6c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswers.vue?vue&type=template&id=82c54b6c");


/***/ }),

/***/ "./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=template&id=e1ba6258&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=template&id=e1ba6258&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserAnswersTable_vue_vue_type_template_id_e1ba6258_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserAnswersTable_vue_vue_type_template_id_e1ba6258_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserAnswersTable.vue?vue&type=template&id=e1ba6258&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=template&id=e1ba6258&scoped=true");


/***/ }),

/***/ "./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=style&index=0&id=e1ba6258&scoped=true&lang=css":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=style&index=0&id=e1ba6258&scoped=true&lang=css ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserAnswersTable_vue_vue_type_style_index_0_id_e1ba6258_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserAnswersTable.vue?vue&type=style&index=0&id=e1ba6258&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/admin/useranswers/UserAnswersTable.vue?vue&type=style&index=0&id=e1ba6258&scoped=true&lang=css");


/***/ })

}]);