"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["learning-module-assessment"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/base-service */ "./resources/js/services/base-service.js");
/* harmony import */ var _services_route_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/route-service */ "./resources/js/services/route-service.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup: function setup() {
    // For routing with params, especially when changing
    var module_id = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_3__.useRoute)();
    module_id.value = route.params.id;
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(function () {
      return route.params.id;
    }, function () {
      module_id.value = route.params.id;
    });
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      answers: []
    });
    var module = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({});
    var questions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var errors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var introView = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var questionsView = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var completionView = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var percent = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var passed = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var assessment_status = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var retake = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    var completion_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var questions_message = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var assessmentStatus = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var token;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // Get token from local storage
              token = localStorage.getItem('brace-learning-tk');
              _context.next = 3;
              return axios.get('/api/learning/module/assessment/status', {
                headers: {
                  "Authorization": "Bearer " + token,
                  'Accept': 'application/json'
                },
                params: {
                  module_id: module_id.value
                }
              }).then(function (response) {
                if (response.data.success) {
                  passed.value = response.data.passed;
                  retake.value = response.data.retake;
                  assessment_status.value = response.data.status;
                  console.log(assessment_status.value);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function assessmentStatus() {
        return _ref.apply(this, arguments);
      };
    }();
    var nextSection = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(next) {
        var _i, _Object$entries, _Object$entries$_i, key, value;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              loading.value = true;
              if (!(next === 'questions')) {
                _context2.next = 11;
                break;
              }
              // Get questions from db and push to form.answers array
              form.answers = []; // Empty current questions array
              _context2.next = 5;
              return getQuestions();
            case 5:
              for (_i = 0, _Object$entries = Object.entries(questions.value); _i < _Object$entries.length; _i++) {
                _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                form.answers.push({
                  question_id: value.id,
                  answer: '',
                  question: value.question,
                  option_one: value.option_one,
                  option_two: value.option_two,
                  option_three: value.option_three,
                  option_four: value.option_four,
                  option_five: value.option_five
                });
              }
              console.log(form.answers);
              questionsView.value = true;
              completionView.value = false;
              introView.value = false;
              loading.value = false;
            case 11:
              if (!(next === 'completed')) {
                _context2.next = 16;
                break;
              }
              loading.value = true;
              console.log(form.answers);
              _context2.next = 16;
              return submitAnswers();
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function nextSection(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    var getModule = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var token;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              // Get token from local storage
              token = localStorage.getItem('brace-learning-tk');
              _context3.next = 3;
              return axios.get('/api/learning/module', {
                headers: {
                  "Authorization": "Bearer " + token,
                  'Accept': 'application/json'
                },
                params: {
                  module_id: module_id.value
                }
              }).then(function (response) {
                if (response.data.success) {
                  module.value = response.data.module;
                  console.log(response.data.module);
                }
              })["catch"](function (error) {
                console.log(error);
              });
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function getModule() {
        return _ref3.apply(this, arguments);
      };
    }();
    var getQuestions = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var token;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              // Get token from local storage
              token = localStorage.getItem('brace-learning-tk');
              _context4.next = 3;
              return axios.get('/api/learning/module/assessment/questions', {
                headers: {
                  "Authorization": "Bearer " + token,
                  'Accept': 'application/json'
                },
                params: {
                  module_id: module_id.value
                }
              }).then(function (response) {
                if (response.data.success) {
                  questions.value = response.data.questions;
                  console.log(response.data.questions);
                } else {
                  questions_message.value = response.data.questions_message;
                }
              })["catch"](function (error) {
                console.log(error);
              });
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function getQuestions() {
        return _ref4.apply(this, arguments);
      };
    }();
    var submitAnswers = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var countEmpty, formData, token;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              console.log("All answers", form.answers);
              errors.value = [];
              countEmpty = 0;
              formData = new FormData(); // iterate and add form data
              Object.keys(form.answers).forEach(function (key, name) {
                console.log(key); // key
                console.log(form.answers[key]['answer']); // value
                if (form.answers[key]['answer'] !== "") {
                  formData.append('inputs[' + key + '][answer]', form.answers[key]['answer']);
                  formData.append('inputs[' + key + '][question_id]', form.answers[key]['question_id']);
                } else {
                  countEmpty++;
                  errors.value.push(form.answers[key]['question'] + ' is missing an answer');
                }
              });
              if (!(countEmpty > 0)) {
                _context5.next = 7;
                break;
              }
              return _context5.abrupt("return", false);
            case 7:
              // Get token from local storage
              token = localStorage.getItem('brace-learning-tk');
              axios.post('/api/learning/module/assessment/store', formData, {
                headers: {
                  "Authorization": "Bearer " + token,
                  'Accept': 'application/json'
                },
                params: {
                  module_id: module_id.value
                }
              }).then(function (response) {
                loading.value = true;
                if (response.data.success) {
                  completionView.value = true;
                  questionsView.value = false;
                  introView.value = false;
                  percent.value = response.data.percent;
                  passed.value = response.data.passed;
                  retake.value = response.data.retake;
                  completion_message.value = response.data.message;
                }
                if (response.data.errors) {
                  errors.value = response.data.errors;
                  console.log(response.data.questions);
                }
                if (response.data.error_message) {
                  console.log(response.data.error_message);
                }
                loading.value = false;
              })["catch"](function (error) {
                console.log(error);
              });
              _services_base_service__WEBPACK_IMPORTED_MODULE_1__["default"].deleteCookies();
            case 10:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function submitAnswers() {
        return _ref5.apply(this, arguments);
      };
    }();
    var roundToTwoDecimals = function roundToTwoDecimals(num) {
      return _services_base_service__WEBPACK_IMPORTED_MODULE_1__["default"].roundToTwoDecimal(num);
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(function () {
      _services_route_service__WEBPACK_IMPORTED_MODULE_2__["default"].completedDiagnosticTool(localStorage.getItem('brace-learning-tk'));
      assessmentStatus();
      getModule();
    });
    return {
      introView: introView,
      questionsView: questionsView,
      completionView: completionView,
      loading: loading,
      percent: percent,
      passed: passed,
      retake: retake,
      questions_message: questions_message,
      form: form,
      errors: errors,
      questions: questions,
      module: module,
      module_id: module_id,
      route: route,
      assessmentStatus: assessmentStatus,
      getModule: getModule,
      getQuestions: getQuestions,
      submitAnswers: submitAnswers,
      nextSection: nextSection,
      roundToTwoDecimals: roundToTwoDecimals
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=template&id=5045826d&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=template&id=5045826d&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-5045826d"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "container"
};
var _hoisted_2 = {
  "class": "row"
};
var _hoisted_3 = {
  "class": "col-12"
};
var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-light-grey"
  }, "Dashboard", -1 /* HOISTED */);
});
var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "text-light-grey"
  }, "Courses", -1 /* HOISTED */);
});
var _hoisted_6 = {
  "class": "text-dark"
};
var _hoisted_7 = {
  "class": "text-orange float-left"
};
var _hoisted_8 = {
  "class": "row"
};
var _hoisted_9 = {
  "class": "col-12"
};
var _hoisted_10 = {
  "class": "row p-3 justify-content-center d-flex"
};
var _hoisted_11 = {
  key: 0,
  "class": "col-8 text-center"
};
var _hoisted_12 = ["src"];
var _hoisted_13 = {
  key: 0
};
var _hoisted_14 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-center tx-16"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", {
    "class": "na-text-dark-green"
  }, "Well-done"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" on passing this module assessment"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Please proceed to the next module"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1 /* HOISTED */);
});
var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "start-assessment-btn bg-light-brown mt-2"
  }, " Next Module", -1 /* HOISTED */);
});
var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-center tx-16"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", {
    "class": "na-text-dark-green"
  }, "Well-done"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" on passing this module assessment"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "You are currently on the last module, feel free to review other modules"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br")], -1 /* HOISTED */);
});
var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "start-assessment-btn bg-light-brown mt-2"
  }, " Modules", -1 /* HOISTED */);
});
var _hoisted_18 = {
  key: 1,
  "class": "col-8 text-center"
};
var _hoisted_19 = ["src"];
var _hoisted_20 = {
  key: 0
};
var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-center tx-16"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", {
    "class": "na-text-dark-green"
  }, "Well-done"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" on completing all courses for this module"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" You are required to complete this assessment before proceeding to the next module."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Note that your performance in each assessment counts towards your overall performance; you need an overall grade of 65% or higher to successfully complete this module."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "You have only 3 attempts for this assessment."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" We recommend that you take this assessment if you are confident in your ability to score a high mark. All scores for each module will be accumulated and determine your final score for the program."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Click on ‘Begin’ to proceed. ")], -1 /* HOISTED */);
});
var _hoisted_22 = {
  key: 1
};
var _hoisted_23 = {
  key: 0
};
var _hoisted_24 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-center tx-16"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", {
    "class": "na-text-dark-green"
  }, "Unfortunately,"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" you are out of retakes"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Please proceed to the next module and try to do better on your next assessment. ")], -1 /* HOISTED */);
});
var _hoisted_25 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "start-assessment-btn bg-light-brown mt-2"
  }, " Next Module", -1 /* HOISTED */);
});
var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-center tx-16"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", {
    "class": "na-text-dark-green"
  }, "Unfortunately,"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" you are out of retakes"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Retake other modules to improve your scores. ")], -1 /* HOISTED */);
});
var _hoisted_27 = {
  "class": "justify-content-center d-flex"
};
var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "start-assessment-btn bg-light-brown mt-2"
  }, " Modules", -1 /* HOISTED */);
});
var _hoisted_29 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "start-assessment-btn bg-light-brown mt-2 ml-1"
  }, " Assessment History", -1 /* HOISTED */);
});
var _hoisted_30 = {
  key: 2,
  "class": "col-12 col-md-8"
};
var _hoisted_31 = {
  key: 0,
  "class": "bg-white-radius-shadow border-light-green"
};
var _hoisted_32 = {
  "class": "text-inter text-dark"
};
var _hoisted_33 = {
  "class": "na-text-dark-green font-weight-bolder"
};
var _hoisted_34 = {
  "class": "form-check"
};
var _hoisted_35 = ["onUpdate:modelValue", "value", "id"];
var _hoisted_36 = {
  "class": "form-check-label text-dark",
  "for": "flexRadioDefault1"
};
var _hoisted_37 = {
  "class": "form-check"
};
var _hoisted_38 = ["onUpdate:modelValue", "value", "id"];
var _hoisted_39 = ["for"];
var _hoisted_40 = {
  key: 0,
  "class": "form-check"
};
var _hoisted_41 = ["onUpdate:modelValue", "value", "id"];
var _hoisted_42 = ["for"];
var _hoisted_43 = {
  key: 1,
  "class": "form-check"
};
var _hoisted_44 = ["onUpdate:modelValue", "value", "id"];
var _hoisted_45 = ["for"];
var _hoisted_46 = {
  key: 2,
  "class": "form-check"
};
var _hoisted_47 = ["onUpdate:modelValue", "value", "id"];
var _hoisted_48 = ["for"];
var _hoisted_49 = {
  key: 0,
  "class": "col-12 text-center text-danger"
};
var _hoisted_50 = {
  key: 1,
  "class": "bg-white-radius-shadow border-light-green"
};
var _hoisted_51 = {
  "class": "text-inter text-center"
};
var _hoisted_52 = {
  key: 3,
  "class": "col-12 text-center"
};
var _hoisted_53 = ["src"];
var _hoisted_54 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
    "class": "text-center"
  }, "Submitted", -1 /* HOISTED */);
});
var _hoisted_55 = {
  key: 0
};
var _hoisted_56 = {
  "class": "text-center tx-16"
};
var _hoisted_57 = {
  "class": "text-orange"
};
var _hoisted_58 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_59 = {
  "class": "na-text-dark-green"
};
var _hoisted_60 = {
  key: 0
};
var _hoisted_61 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "tx-16"
  }, "Click on ‘Next Module’ to proceed to the next module.", -1 /* HOISTED */);
});
var _hoisted_62 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "start-assessment-btn na-bg-dark-green text-white mt-2"
  }, " Next Module", -1 /* HOISTED */);
});
var _hoisted_63 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
    "class": "text-center tx-16"
  }, " You have successfully completed all modules, feel free to retake some assessments to get a higher score or look at your assessment history ", -1 /* HOISTED */);
});
var _hoisted_64 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "start-assessment-btn bg-light-brown mt-2"
  }, " Modules", -1 /* HOISTED */);
});
var _hoisted_65 = {
  key: 1
};
var _hoisted_66 = {
  "class": "text-center tx-16"
};
var _hoisted_67 = {
  "class": "text-orange"
};
var _hoisted_68 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_69 = {
  "class": "na-text-dark-green"
};
var _hoisted_70 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
});
var _hoisted_71 = {
  "class": "justify-content-center d-flex"
};
var _hoisted_72 = {
  key: 1,
  disabled: "",
  "class": "start-assessment-btn bg-gray text-white mt-2 mr-1"
};
var _hoisted_73 = {
  key: 2
};
var _hoisted_74 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "start-assessment-btn na-bg-dark-green text-white mt-2"
  }, " Next Module", -1 /* HOISTED */);
});
var _hoisted_75 = {
  key: 3,
  "class": ""
};
var _hoisted_76 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "start-assessment-btn bg-light-brown mt-2 mr-1"
  }, " Modules", -1 /* HOISTED */);
});
var _hoisted_77 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "start-assessment-btn bg-light-brown mt-2 ml-1"
  }, " Assessment History", -1 /* HOISTED */);
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Breadcrumbs"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    exact: "",
    to: {
      name: 'LearningDashboardView'
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" / "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    exact: "",
    to: {
      name: 'LearningCourseView',
      params: {
        id: $setup.module.id
      }
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_5];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["to"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" / "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.module.title), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_7, "Assessment | " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.module.title), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup, {
    name: "slide-fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("If user has passed module and on introView Component, show proceed to next module"), $setup.introView && $setup.passed ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: '/images/icons/no-certificates.png',
        width: "150",
        "class": "mb-4"
      }, null, 8 /* PROPS */, _hoisted_12), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("If next module exists"), $setup.module.next_module ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        exact: "",
        to: {
          name: 'LearningCourseView',
          params: {
            id: $setup.module.next_module.id
          }
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_15];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["to"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("If next module does not exist"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        exact: "",
        to: {
          name: 'LearningModuleView'
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_17];
        }),
        _: 1 /* STABLE */
      })])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("If user has not passed component on the introView component, commence with assessment"), $setup.introView && !$setup.passed ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: '/images/icons/no-certificates.png',
        width: "150",
        "class": "mb-4"
      }, null, 8 /* PROPS */, _hoisted_19), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("If user has not passed the assessment but still has retakes"), $setup.retake < 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("If none of the 2 conditions are true, show disabled button"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $setup.nextSection('questions');
        }, ["prevent"])),
        "class": "start-assessment-btn bg-light-brown mt-2"
      }, " Begin (Retakes: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(3 - $setup.retake) + ") ", 1 /* TEXT */)])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("If next module exists"), $setup.module.next_module ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("If none of the 2 conditions are true, show disabled button"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        exact: "",
        to: {
          name: 'LearningCourseView',
          params: {
            id: $setup.module.next_module.id
          }
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_25];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["to"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("If next module does not exists"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        exact: "",
        to: {
          name: 'LearningModuleView'
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_28];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        "class": "justify-content-center d-flex",
        exact: "",
        to: {
          name: 'LearningModuleAssessmentHistoryView'
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_29];
        }),
        _: 1 /* STABLE */
      })])])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))]))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Questions"), $setup.questionsView ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_30, [!$setup.questions_message ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("loop form.answers array"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.form.answers, function (question, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
          key: index,
          "class": "col-md-12 text-left ml-2 mb-2 mt-2"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index + 1) + ". ", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(question.question), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "class": "form-check-input",
          type: "radio",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return question.answer = $event;
          },
          value: question.option_one,
          id: 'flexRadioDefault' + index,
          required: ""
        }, null, 8 /* PROPS */, _hoisted_35), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, question.answer]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(question.option_one), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "class": "form-check-input",
          type: "radio",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return question.answer = $event;
          },
          value: question.option_two,
          id: 'flexRadioDefault' + index,
          required: ""
        }, null, 8 /* PROPS */, _hoisted_38), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, question.answer]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
          "class": "form-check-label text-dark",
          "for": 'flexRadioDefault' + index
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(question.option_two), 9 /* TEXT, PROPS */, _hoisted_39)]), question.option_three ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "class": "form-check-input",
          type: "radio",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return question.answer = $event;
          },
          value: question.option_three,
          id: 'flexRadioDefault' + index
        }, null, 8 /* PROPS */, _hoisted_41), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, question.answer]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
          "class": "form-check-label text-dark",
          "for": 'flexRadioDefault' + index
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(question.option_three), 9 /* TEXT, PROPS */, _hoisted_42)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), question.option_four ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "class": "form-check-input",
          type: "radio",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return question.answer = $event;
          },
          value: question.option_four,
          id: 'flexRadioDefault' + index
        }, null, 8 /* PROPS */, _hoisted_44), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, question.answer]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
          "class": "form-check-label text-dark",
          "for": 'flexRadioDefault' + index
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(question.option_four), 9 /* TEXT, PROPS */, _hoisted_45)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), question.option_five ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          "class": "form-check-input",
          type: "radio",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return question.answer = $event;
          },
          value: question.option_five,
          id: 'flexRadioDefault' + index
        }, null, 8 /* PROPS */, _hoisted_47), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelRadio, question.answer]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
          "class": "form-check-label text-dark",
          "for": 'flexRadioDefault' + index
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(question.option_five), 9 /* TEXT, PROPS */, _hoisted_48)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
      }), 128 /* KEYED_FRAGMENT */)), $setup.errors.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_49, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.errors, function (error, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(error), 1 /* TEXT */);
      }), 256 /* UNKEYED_FRAGMENT */))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $setup.nextSection('completed');
        }, ["prevent"])),
        "class": "start-assessment-btn bg-light-brown mt-2 justify-content-center d-flex"
      }, "Submit")])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.questions_message), 1 /* TEXT */)]))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Completed"), $setup.completionView ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: '/images/icons/checklist.png',
        width: "150",
        "class": "mb-4"
      }, null, 8 /* PROPS */, _hoisted_53), _hoisted_54, $setup.passed === true ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Congratulations on passing the "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.module.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" assessment."), _hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Your Score: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.roundToTwoDecimals($setup.percent)) + "%", 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("If next module exists"), $setup.module.next_module ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_60, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        exact: "",
        to: {
          name: 'LearningCourseView',
          params: {
            id: $setup.module.next_module.id
          }
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_62];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["to"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: 1
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("If next module does not exists"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        exact: "",
        to: {
          name: 'LearningModuleView'
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_64];
        }),
        _: 1 /* STABLE */
      })])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Unfortunately you didn't pass the "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", _hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.module.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" assessment."), _hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Your Score: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.roundToTwoDecimals($setup.percent)) + "%", 1 /* TEXT */)]), _hoisted_70, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Click on ‘Retake’ to try again or 'Next Module' to continue next module. ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [$setup.retake < 3 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        onClick: _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
          return $setup.nextSection('questions');
        }, ["prevent"])),
        "class": "start-assessment-btn bg-danger text-white mt-2 mr-1"
      }, " Retake")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", _hoisted_72, " No retakes")), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("If next module"), $setup.module.next_module ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        exact: "",
        to: {
          name: 'LearningCourseView',
          params: {
            id: $setup.module.next_module.id
          }
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_74];
        }),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["to"])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        exact: "",
        to: {
          name: 'LearningModuleView'
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_76];
        }),
        _: 1 /* STABLE */
      })]))])])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("Assessment history"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        "class": "text-center",
        exact: "",
        to: {
          name: 'LearningModuleAssessmentHistoryView'
        }
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_77];
        }),
        _: 1 /* STABLE */
      })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1 /* STABLE */
  })])])])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=style&index=0&id=5045826d&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=style&index=0&id=5045826d&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n/*\r\n  Enter and leave animations can use different\r\n  durations and timing functions.\r\n*/\n.slide-fade-enter-active[data-v-5045826d] {\r\n    transition: all 0.4s ease-out;\n}\n.slide-fade-leave-active[data-v-5045826d] {\r\n    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.slide-fade-enter-from[data-v-5045826d],\r\n.slide-fade-leave-to[data-v-5045826d] {\r\n    transform: translateX(20px);\r\n    opacity: 0;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=style&index=0&id=5045826d&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=style&index=0&id=5045826d&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LearningModuleAssessmentView_vue_vue_type_style_index_0_id_5045826d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LearningModuleAssessmentView.vue?vue&type=style&index=0&id=5045826d&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=style&index=0&id=5045826d&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LearningModuleAssessmentView_vue_vue_type_style_index_0_id_5045826d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LearningModuleAssessmentView_vue_vue_type_style_index_0_id_5045826d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LearningModuleAssessmentView_vue_vue_type_template_id_5045826d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LearningModuleAssessmentView.vue?vue&type=template&id=5045826d&scoped=true */ "./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=template&id=5045826d&scoped=true");
/* harmony import */ var _LearningModuleAssessmentView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LearningModuleAssessmentView.vue?vue&type=script&lang=js */ "./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=script&lang=js");
/* harmony import */ var _LearningModuleAssessmentView_vue_vue_type_style_index_0_id_5045826d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LearningModuleAssessmentView.vue?vue&type=style&index=0&id=5045826d&scoped=true&lang=css */ "./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=style&index=0&id=5045826d&scoped=true&lang=css");
/* harmony import */ var C_wamp64_www_alx_backend_elearning_portal_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_wamp64_www_alx_backend_elearning_portal_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_LearningModuleAssessmentView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LearningModuleAssessmentView_vue_vue_type_template_id_5045826d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5045826d"],['__file',"resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LearningModuleAssessmentView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LearningModuleAssessmentView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LearningModuleAssessmentView.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=template&id=5045826d&scoped=true":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=template&id=5045826d&scoped=true ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LearningModuleAssessmentView_vue_vue_type_template_id_5045826d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LearningModuleAssessmentView_vue_vue_type_template_id_5045826d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LearningModuleAssessmentView.vue?vue&type=template&id=5045826d&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=template&id=5045826d&scoped=true");


/***/ }),

/***/ "./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=style&index=0&id=5045826d&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=style&index=0&id=5045826d&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LearningModuleAssessmentView_vue_vue_type_style_index_0_id_5045826d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LearningModuleAssessmentView.vue?vue&type=style&index=0&id=5045826d&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/learning/modules/assessments/LearningModuleAssessmentView.vue?vue&type=style&index=0&id=5045826d&scoped=true&lang=css");


/***/ })

}]);