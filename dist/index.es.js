import { warn, getCurrentScope, onScopeDispose, ref, watch, unref, inject, computed, getCurrentInstance, onMounted, onBeforeUnmount, onBeforeMount, provide, defineComponent, renderSlot, openBlock, createElementBlock, withDirectives, cloneVNode, Fragment, Text, Comment, h, resolveComponent, createBlock, mergeProps, withCtx, createCommentVNode, normalizeStyle, normalizeClass, Teleport, createVNode, Transition, createTextVNode, toDisplayString, vShow, toRef, readonly, renderList, createElementVNode, useCssVars } from "vue";
const radicals$2 = [{ name: "\u5F00\u5E73\u65B9", icon: "sqrt", formula: "\\sqrt{}" }, { name: "\u5F00n\u6B21\u65B9", icon: "sqrtn", formula: "\\sqrt[]{}" }], radicals$1 = [{ name: "\u6B63\u5F26", icon: "sin", formula: "\\sin" }, { name: "\u4F59\u5F26", icon: "cos", formula: "\\cos" }, { name: "\u6B63\u5207", icon: "tan", formula: "\\tan" }, { name: "\u4F59\u5207", icon: "cot", formula: "\\cot" }, { name: "\u6B63\u5207", icon: "sec", formula: "\\sec" }, { name: "csc", icon: "csc", formula: "\\csc" }, { name: "arcsin", icon: "arcsin", formula: "\\arcsin" }, { name: "arccos", icon: "arccos", formula: "\\arccos" }, { name: "arctan", icon: "arctan", formula: "\\arctan" }, { name: "arccot", icon: "arccot", formula: "\\arccot" }, { name: "arcsec", icon: "arcsec", formula: "\\arcsec" }, { name: "arccsc", icon: "arccsc", formula: "\\arccsc" }], fonts$8 = [{ name: "\u4E0B\u5212\u7EBF", icon: "underline", formula: "\\underline{}" }, { name: "\u659C\u4F53", icon: "textit", formula: "\\textit{}" }, { name: "\u7C97\u4F53", icon: "textbf", formula: "\\textbf{}" }, { name: "\u4E0A\u89D2\u6807", icon: "sub", formula: "^{}" }, { name: "\u4E0B\u89D2\u6807", icon: "sup", formula: "_{}" }], fonts$7 = [{ name: "\u56E0\u4E3A", icon: "because", formula: "\\because" }, { name: "\u6240\u4EE5", icon: "therefore", formula: "\\therefore" }], fonts$6 = [{ name: "\u89D2", icon: "angle", formula: "\\angle" }, { name: "\u5168\u7B49\u4E8E", icon: "cong", formula: "\\cong" }, { name: "\u76F8\u4F3C\u4E8E", icon: "sim", formula: "\\sim" }, { name: "\u5E73\u884C\u4E8E", icon: "parallel", formula: "\\parallel" }, { name: "\u5E73\u884C\u56DB\u8FB9\u5F62", icon: "parallelogram", formula: "\\parallelogram" }, { name: "\u5782\u76F4", icon: "perp", formula: "\\perp" }, { name: "\u5706\u5708", icon: "circ", formula: "\\circ" }, { name: "\u4E0D\u5E73\u884C\u4E8E", icon: "nparallel", formula: "\\nparallel" }], fonts$5 = [{ name: "wideparen", icon: "wideparen", formula: "\\wideparen{}" }], fonts$4 = [{ name: "\u6B63\u8D1F\u53F7", icon: "pm", formula: "\\pm" }, { name: "\u8D1F\u6B63\u53F7", icon: "mp", formula: "\\mp" }, { name: "\u70B9\u4E58\u53F7", icon: "cdot", formula: "\\cdot" }, { name: "\u53C9\u4E58\u53F7", icon: "times", formula: "\\times" }, { name: "\u9664\u53F7", icon: "div", formula: "\\div" }, { name: "\u7EDD\u5BF9\u503C", icon: "mid", formula: "\\mid" }, { name: "\u6C42\u79EF", icon: "prod", formula: "\\prod" }, { name: "\u6C42\u548C", icon: "sum", formula: "\\sum" }], fonts$3 = [{ name: "\u7EA6\u7B49\u4E8E", icon: "approx", formula: "\\approx" }, { name: "\u5C0F\u4E8E\u7B49\u4E8E", icon: "leq", formula: "\\leq" }, { name: "\u5927\u4E8E\u7B49\u4E8E", icon: "geq", formula: "\\geq" }, { name: "\u4E0D\u7B49\u4E8E", icon: "neq", formula: "\\neq" }, { name: "\u6052\u7B49\u4E8E", icon: "equiv", formula: "\\equiv" }, { name: "\u6BD4\u4F8B", icon: "propto", formula: "\\propto" }, { name: "\u4E0D\u7EA6\u7B49\u4E8E", icon: "napprox", formula: "\\napprox" }, { name: "\u4E0D\u5C0F\u4E8E", icon: "nl", formula: "\\nl" }, { name: "\u4E0D\u5927\u4E8E", icon: "ng", formula: "\\ng" }, { name: "\u4E0D\u5C0F\u4E8E\u7B49\u4E8E", icon: "nleq", formula: "\\nleq" }, { name: "\u4E0D\u5927\u4E8E\u7B49\u4E8E", icon: "ngeq", formula: "\\ngeq" }, { name: "\u4E0D\u6052\u7B49\u4E8E", icon: "nequiv", formula: "\\nequiv" }], fonts$2 = [{ name: "\u5708", icon: "odot", formula: "\\odot" }], fonts$1 = [{ name: "\u83F1\u5F62", icon: "diamond", formula: "\\diamond" }, { name: "\u6B63\u65B9\u5F62", icon: "square", formula: "\\square" }, { name: "\u77E9\u5F62", icon: "rectangle", formula: "\\rectangle" }, { name: "\u4E09\u89D2\u5F62", icon: "triangle", formula: "\\triangle" }], fonts = [{ name: "\u5206\u5F0F", icon: "frac", formula: "\\frac{}{}", exampleList: [{ content: "\u6B63\u786E\u5199\u6CD5\uFF1A\\frac{1}{2}", isLatex: false }, { content: "\\frac{1}{2}", isLatex: true }, { content: "\u9519\u8BEF\u5199\u6CD5\uFF1A\\frac{1}", isLatex: false }, { content: "\\frac{1}", isLatex: true }] }], radicals = [{ name: "alpha", icon: "alpha", formula: "\\alpha" }, { name: "beta", icon: "beta", formula: "\\beta" }, { name: "gamma", icon: "gamma", formula: "\\gamma" }, { name: "delta", icon: "delta", formula: "\\delta" }, { name: "epsilon", icon: "epsilon", formula: "\\epsilon" }, { name: "zeta", icon: "zeta", formula: "\\zeta" }, { name: "eta", icon: "eta", formula: "\\eta" }, { name: "theta", icon: "theta", formula: "\\theta" }, { name: "iota", icon: "iota", formula: "\\iota" }, { name: "kappa", icon: "kappa", formula: "\\kappa" }, { name: "lambda", icon: "lambda", formula: "\\lambda" }, { name: "mu", icon: "mu", formula: "\\mu" }, { name: "nu", icon: "nu", formula: "\\nu" }, { name: "xi", icon: "xi", formula: "\\xi" }, { name: "omicron", icon: "omicron", formula: "\\omicron" }, { name: "pi", icon: "pi", formula: "\\pi" }, { name: "rho", icon: "rho", formula: "\\rho" }, { name: "sigma", icon: "sigma", formula: "\\sigma" }, { name: "tau", icon: "tau", formula: "\\tau" }, { name: "upsilon", icon: "upsilon", formula: "\\upsilon" }, { name: "phi", icon: "phi", formula: "\\phi" }, { name: "chi", icon: "chi", formula: "\\chi" }, { name: "psi", icon: "psi", formula: "\\psi" }, { name: "omega", icon: "omega", formula: "\\omega" }, { name: "Alpha", icon: "Alpha", formula: "\\Alpha" }, { name: "Beta", icon: "Beta", formula: "\\Beta" }, { name: "Gamma", icon: "Gamma", formula: "\\Gamma" }, { name: "Delta", icon: "Delta", formula: "\\Delta" }, { name: "Epsilon", icon: "Epsilon", formula: "\\Epsilon" }, { name: "Zeta", icon: "Zeta", formula: "\\Zeta" }, { name: "Eta", icon: "Eta", formula: "\\Eta" }, { name: "Theta", icon: "Theta", formula: "\\Theta" }, { name: "Iota", icon: "Iota", formula: "\\Iota" }, { name: "Kappa", icon: "Kappa", formula: "\\Kappa" }, { name: "Lambda", icon: "Lambda", formula: "\\Lambda" }, { name: "Mu", icon: "Mu", formula: "\\Mu" }, { name: "Nu", icon: "Nu", formula: "\\Nu" }, { name: "Xi", icon: "Xi", formula: "\\Xi" }, { name: "Omicron", icon: "Omicron", formula: "\\Omicron" }, { name: "Pi", icon: "Pi", formula: "\\Pi" }, { name: "Rho", icon: "Rho", formula: "\\Rho" }, { name: "Sigma", icon: "Sigma", formula: "\\Sigma" }, { name: "Tau", icon: "Tau", formula: "\\Tau" }, { name: "Upsilon", icon: "Upsilon", formula: "\\Upsilon" }, { name: "Phi", icon: "Phi", formula: "\\Phi" }, { name: "Chi", icon: "v", formula: "\\Chi" }, { name: "Psi", icon: "Psi", formula: "\\Psi" }, { name: "Omega", icon: "Omega", formula: "\\Omega" }], baseIcon = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], transIcon = ["!", "'", '"', "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"], fontIconBaseUrl = "https://homework-webfront.oss-cn-beijing.aliyuncs.com/LatexIcon/", list = [{ id: 1, name: "\u76F4\u63A5\u4F7F\u7528", icon: "", data: baseIcon, isBase: true }, { id: 2, name: "\u9700\u8981\u8F6C\u4E49", icon: "", data: transIcon, isBase: true, desc: `escape\u5B57\u7B26\u8868\u793A\u539F\u4E49\u65F6\uFF0C\u524D\u9762\u52A0 \\\uFF0C\u4EE3\u8868\u7684\u662F\u8FD9\u4E2A\u7B26\u53F7\u672C\u8EAB
\u7531\u4E8E\u4EE5\u4E0B\u5B57\u7B26\u5728LaTeX\u4E2D\u6709\u7279\u6B8A\u542B\u4E49\uFF0C\u4F8B\u5982\uFF1A\\frac{1}{2} \u4E2D\u7684\u5927\u62EC\u53F7\u3002
\u4E3A\u4E86\u9632\u6B62\u6DF7\u6DC6\uFF0C\u5728\u4EE5\u4E0B\u5B57\u7B26\u8868\u793A\u81EA\u8EAB\u542B\u4E49\u65F6\uFF0C\u9700\u8981\u5728\u5176\u524D\u52A0 \\` }, { id: 3, name: "\u5E0C\u814A\u5B57\u6BCD", icon: "", data: radicals }, { id: 4, name: "\u8FD0\u7B97\u7B26\u53F7", icon: "", data: fonts$4 }, { id: 5, name: "\u6BD4\u8F83\u7B26\u53F7", icon: "", data: fonts$3, desc: "\u5927\u4E8E\u53F7\u53CA\u5C0F\u4E8E\u53F7\u76F4\u63A5\u4F7F\u7528 >, <" }, { id: 6, name: "\u51E0\u4F55\u7B26\u53F7", icon: "", data: fonts$6 }, { id: 7, name: "\u903B\u8F91\u7B26\u53F7", icon: "", data: fonts$7 }, { id: 8, name: "\u9876\u90E8\u7B26\u53F7", icon: "", data: fonts$5 }, { id: 9, name: "\u4E09\u89D2\u51FD\u6570", icon: "", data: radicals$1 }, { id: 11, name: "\u542B\u5708\u7B26\u53F7", icon: "", data: fonts$2 }, { id: 12, name: "\u5F62\u72B6\u7B26\u53F7", icon: "", data: fonts$1 }, { id: 13, name: "\u5206\u5F0F", icon: "", data: fonts }, { id: 14, name: "\u6839\u5F0F", icon: "", data: radicals$2 }, { id: 15, name: "\u5B57\u4F53", icon: "", data: fonts$8 }];
var commonjsGlobal$1 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function fromPairs(A2) {
  for (var e2 = -1, u2 = null == A2 ? 0 : A2.length, t = {}; ++e2 < u2; ) {
    var d = A2[e2];
    t[d[0]] = d[1];
  }
  return t;
}
var fromPairs_1 = fromPairs;
const configProviderContextKey = Symbol(), NOOP = () => {
}, hasOwnProperty$3 = Object.prototype.hasOwnProperty, hasOwn = (A2, e2) => hasOwnProperty$3.call(A2, e2), isArray = Array.isArray, isFunction$2 = (A2) => "function" == typeof A2, isString$1 = (A2) => "string" == typeof A2, isObject$3 = (A2) => null !== A2 && "object" == typeof A2, wrapperKey = Symbol(), propKey = "__elPropsReservedKey";
function buildProp(A2, d) {
  if (!isObject$3(A2) || A2[propKey])
    return A2;
  const { values: n, required: e2, default: r, type: u2, validator: a2 } = A2;
  A2 = n || a2 ? (A3) => {
    let e3 = false, u3 = [];
    var t;
    return n && (u3 = [...n, r], e3 = e3 || u3.includes(A3)), !(e3 = a2 ? e3 || a2(A3) : e3) && 0 < u3.length && (t = [...new Set(u3)].map((A4) => JSON.stringify(A4)).join(", "), warn(`Invalid prop: validation failed${d ? ` for prop "${d}"` : ""}. Expected one of [${t}], got value ${JSON.stringify(A3)}.`)), e3;
  } : void 0;
  return { type: "object" == typeof u2 && Object.getOwnPropertySymbols(u2).includes(wrapperKey) ? u2[wrapperKey] : u2, required: !!e2, default: r, validator: A2, [propKey]: true };
}
const buildProps = (A2) => fromPairs_1(Object.entries(A2).map(([A3, e2]) => [A3, buildProp(e2, A3)])), definePropType = (A2) => ({ [wrapperKey]: A2 });
var freeGlobal$1 = "object" == typeof commonjsGlobal$1 && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1, _freeGlobal = freeGlobal$1, freeGlobal = _freeGlobal, freeSelf = "object" == typeof self && self && self.Object === Object && self, root$8 = freeGlobal || freeSelf || Function("return this")(), _root = root$8, root$7 = _root, Symbol$4 = _root.Symbol, _Symbol = Symbol$4, Symbol$3 = _Symbol, objectProto$3 = Object.prototype, hasOwnProperty$2 = objectProto$3.hasOwnProperty, nativeObjectToString$1 = objectProto$3.toString, symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : void 0;
function getRawTag$1(A2) {
  var e2 = hasOwnProperty$2.call(A2, symToStringTag$1), u2 = A2[symToStringTag$1];
  try {
    var t = !(A2[symToStringTag$1] = void 0);
  } catch (A3) {
  }
  var d = nativeObjectToString$1.call(A2);
  return t && (e2 ? A2[symToStringTag$1] = u2 : delete A2[symToStringTag$1]), d;
}
var _getRawTag = getRawTag$1, objectProto$2 = Object.prototype, nativeObjectToString = objectProto$2.toString;
function objectToString$1(A2) {
  return nativeObjectToString.call(A2);
}
var _objectToString = objectToString$1, Symbol$2 = _Symbol, getRawTag = _getRawTag, objectToString = objectToString$1, nullTag = "[object Null]", undefinedTag = "[object Undefined]", symToStringTag = _Symbol ? _Symbol.toStringTag : void 0;
function baseGetTag$3(A2) {
  return null == A2 ? void 0 === A2 ? undefinedTag : nullTag : (symToStringTag && symToStringTag in Object(A2) ? getRawTag : objectToString)(A2);
}
var _baseGetTag = baseGetTag$3;
function isObject$2(A2) {
  var e2 = typeof A2;
  return null != A2 && ("object" == e2 || "function" == e2);
}
var isObject_1 = isObject$2, baseGetTag$2 = _baseGetTag, isObject$1 = isObject_1, asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$1(A2) {
  return !!isObject$1(A2) && ((A2 = baseGetTag$2(A2)) == funcTag || A2 == genTag || A2 == asyncTag || A2 == proxyTag);
}
var isFunction_1 = isFunction$1, root$6 = _root, coreJsData$1 = _root["__core-js_shared__"], _coreJsData = coreJsData$1, coreJsData = coreJsData$1, maskSrcKey = function() {
  var A2 = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return A2 ? "Symbol(src)_1." + A2 : "";
}();
function isMasked$1(A2) {
  return !!maskSrcKey && maskSrcKey in A2;
}
var _isMasked = isMasked$1, funcProto$1 = Function.prototype, funcToString$1 = funcProto$1.toString;
function toSource$2(A2) {
  if (null != A2) {
    try {
      return funcToString$1.call(A2);
    } catch (A3) {
    }
    try {
      return A2 + "";
    } catch (A3) {
    }
  }
  return "";
}
var _toSource = toSource$2, isFunction = isFunction_1, isMasked = _isMasked, isObject = isObject_1, toSource$1 = _toSource, reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, funcProto = Function.prototype, objectProto$1 = Object.prototype, funcToString = funcProto.toString, hasOwnProperty$1 = objectProto$1.hasOwnProperty, reIsNative = RegExp("^" + funcToString.call(hasOwnProperty$1).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$1(A2) {
  return !(!isObject(A2) || isMasked(A2)) && (isFunction(A2) ? reIsNative : reIsHostCtor).test(toSource$1(A2));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(A2, e2) {
  return null == A2 ? void 0 : A2[e2];
}
var _getValue = getValue$1, baseIsNative = baseIsNative$1, getValue = getValue$1;
function getNative$6(A2, e2) {
  A2 = getValue(A2, e2);
  return baseIsNative(A2) ? A2 : void 0;
}
var _getNative = getNative$6, getNative$5 = _getNative, root$5 = _root, Map$2 = _getNative(_root, "Map"), _Map = Map$2, getNative$4 = _getNative, root$4 = (_getNative(Object, "create"), _root), Symbol$1 = (_root.Uint8Array, _Symbol), symbolProto = _Symbol ? _Symbol.prototype : void 0;
function isObjectLike$2(A2) {
  return null != A2 && "object" == typeof A2;
}
symbolProto && symbolProto.valueOf;
var isObjectLike_1 = isObjectLike$2, baseGetTag$1 = _baseGetTag, isObjectLike$1 = isObjectLike$2, argsTag = "[object Arguments]";
function baseIsArguments$1(A2) {
  return isObjectLike$1(A2) && baseGetTag$1(A2) == argsTag;
}
var _baseIsArguments = baseIsArguments$1, baseIsArguments = baseIsArguments$1, isObjectLike = isObjectLike$2, objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, propertyIsEnumerable = objectProto.propertyIsEnumerable, isBuffer = (baseIsArguments(function() {
  return arguments;
}()), { exports: {} });
function stubFalse() {
  return false;
}
var _a, _b, stubFalse_1 = stubFalse, _nodeUtil = (!function(A2, e2) {
  var e2 = e2 && !e2.nodeType && e2, u2 = e2 && A2 && !A2.nodeType && A2, u2 = u2 && u2.exports === e2 ? _root.Buffer : void 0, e2 = u2 ? u2.isBuffer : void 0;
  A2.exports = e2 || stubFalse_1;
}(isBuffer, isBuffer.exports), { exports: {} }), nodeUtil = (!function(A2, e2) {
  var e2 = e2 && !e2.nodeType && e2, u2 = e2 && A2 && !A2.nodeType && A2, t = u2 && u2.exports === e2 && _freeGlobal.process, e2 = function() {
    try {
      var A3 = u2 && u2.require && u2.require("util").types;
      return A3 ? A3 : t && t.binding && t.binding("util");
    } catch (A4) {
    }
  }();
  A2.exports = e2;
}(_nodeUtil, _nodeUtil.exports), _nodeUtil.exports), getNative$3 = (nodeUtil && nodeUtil.isTypedArray, _getNative), root$3 = _root, DataView$1 = _getNative(_root, "DataView"), _DataView = DataView$1, getNative$2 = _getNative, root$2 = _root, Promise$2 = _getNative(_root, "Promise"), _Promise = Promise$2, getNative$1 = _getNative, root$1 = _root, Set$2 = _getNative(_root, "Set"), _Set = Set$2, getNative = _getNative, root = _root, WeakMap$1 = _getNative(_root, "WeakMap"), _WeakMap = WeakMap$1, DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap = WeakMap$1, baseGetTag = _baseGetTag, toSource = _toSource, mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]", dataViewTag = "[object DataView]", dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap), getTag = baseGetTag;
function tryOnScopeDispose(A2) {
  return !!getCurrentScope() && (onScopeDispose(A2), true);
}
(DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag(new Map$1()) != mapTag || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) && (getTag = function(A2) {
  var e2 = baseGetTag(A2), A2 = e2 == objectTag ? A2.constructor : void 0, A2 = A2 ? toSource(A2) : "";
  if (A2)
    switch (A2) {
      case dataViewCtorString:
        return dataViewTag;
      case mapCtorString:
        return mapTag;
      case promiseCtorString:
        return promiseTag;
      case setCtorString:
        return setTag;
      case weakMapCtorString:
        return weakMapTag;
    }
  return e2;
});
const isClient = "undefined" != typeof window, isString = (A2) => "string" == typeof A2, noop = () => {
};
function unrefElement(A2) {
  var e2, A2 = unref(A2);
  return null != (e2 = null == A2 ? void 0 : A2.$el) ? e2 : A2;
}
const defaultWindow = isClient ? window : void 0;
function useEventListener(...A2) {
  let e2, u2, t, d;
  if (isString(A2[0]) ? ([u2, t, d] = A2, e2 = defaultWindow) : [e2, u2, t, d] = A2, !e2)
    return noop;
  let n = noop;
  const r = watch(() => unref(e2), (A3) => {
    n(), A3 && (A3.addEventListener(u2, t, d), n = () => {
      A3.removeEventListener(u2, t, d), n = noop;
    });
  }, { immediate: true, flush: "post" });
  A2 = () => {
    r(), n();
  };
  return tryOnScopeDispose(A2), A2;
}
function onClickOutside(t, d, A2 = {}) {
  const { window: e2 = defaultWindow, ignore: n } = A2;
  if (e2) {
    const r = ref(true);
    const u2 = [useEventListener(e2, "click", (e3) => {
      var A3 = unrefElement(t);
      const u3 = e3.composedPath();
      !A3 || A3 === e3.target || u3.includes(A3) || !r.value || n && 0 < n.length && n.some((A4) => {
        A4 = unrefElement(A4);
        return A4 && (e3.target === A4 || u3.includes(A4));
      }) || d(e3);
    }, { passive: true, capture: true }), useEventListener(e2, "pointerdown", (A3) => {
      var e3 = unrefElement(t);
      r.value = !!e3 && !A3.composedPath().includes(e3);
    }, { passive: true })];
    return () => u2.forEach((A3) => A3());
  }
}
const _global = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {}, _global[globalKey], isClient && null != window && window.navigator && null != (_a = null == window ? void 0 : window.navigator) && _a.platform && /iP(ad|hone|od)/.test(null == (_b = null == window ? void 0 : window.navigator) ? void 0 : _b.platform);
var __defProp$3 = Object.defineProperty, __getOwnPropSymbols$3 = Object.getOwnPropertySymbols, __hasOwnProp$3 = Object.prototype.hasOwnProperty, __propIsEnum$3 = Object.prototype.propertyIsEnumerable, __defNormalProp$3 = (A2, e2, u2) => e2 in A2 ? __defProp$3(A2, e2, { enumerable: true, configurable: true, writable: true, value: u2 }) : A2[e2] = u2, __spreadValues$3 = (A2, e2) => {
  for (var u2 in e2 = e2 || {})
    __hasOwnProp$3.call(e2, u2) && __defNormalProp$3(A2, u2, e2[u2]);
  if (__getOwnPropSymbols$3)
    for (var u2 of __getOwnPropSymbols$3(e2))
      __propIsEnum$3.call(e2, u2) && __defNormalProp$3(A2, u2, e2[u2]);
  return A2;
};
const initialRect = { top: 0, left: 0, bottom: 0, right: 0, height: 0, width: 0 }, generateId = (__spreadValues$3({ text: "" }, initialRect), () => Math.floor(1e4 * Math.random())), isBool = (A2) => "boolean" == typeof A2;
function isUndefined(A2) {
  return void 0 === A2;
}
const cache = ref({});
function useGlobalConfig(A2) {
  const e2 = inject(configProviderContextKey, cache);
  return A2 ? isObject$3(e2.value) && hasOwn(e2.value, A2) ? computed(() => e2.value[A2]) : ref(void 0) : e2;
}
const trimArr = function(A2) {
  return (A2 || "").split(" ").filter((A3) => !!A3.trim());
}, on = function(A2, e2, u2, t = false) {
  A2 && e2 && u2 && null != A2 && A2.addEventListener(e2, u2, t);
}, off = function(A2, e2, u2, t = false) {
  A2 && e2 && u2 && null != A2 && A2.removeEventListener(e2, u2, t);
};
function addClass(A2, e2) {
  if (A2) {
    var u2 = A2.getAttribute("class") || "";
    const t = trimArr(u2);
    e2 = (e2 || "").split(" ").filter((A3) => !t.includes(A3) && !!A3.trim());
    A2.classList ? A2.classList.add(...e2) : (u2 += " " + e2.join(" "), A2.setAttribute("class", u2));
  }
}
function removeClass(A2, u2) {
  if (A2 && u2) {
    var u2 = trimArr(u2);
    let e2 = A2.getAttribute("class") || "";
    A2.classList ? A2.classList.remove(...u2) : (u2.forEach((A3) => {
      e2 = e2.replace(` ${A3} `, " ");
    }), u2 = trimArr(e2).join(" "), A2.setAttribute("class", u2));
  }
}
const composeEventHandlers = (u2, t, { checkForDefaultPrevented: d = true } = {}) => {
  return (A2) => {
    var e2 = null == u2 ? void 0 : u2(A2);
    return false !== d && e2 || null == t ? void 0 : t(A2);
  };
}, EVENT_CODE = { tab: "Tab", enter: "Enter", space: "Space", left: "ArrowLeft", up: "ArrowUp", right: "ArrowRight", down: "ArrowDown", esc: "Escape", delete: "Delete", backspace: "Backspace", numpadEnter: "NumpadEnter", pageUp: "PageUp", pageDown: "PageDown", home: "Home", end: "End" }, createModelToggleComposable = (p) => {
  return { useModelToggle: ({ indicator: e2, shouldHideWhenRouteChanges: A2, shouldProceed: u2, onShow: t, onHide: d }) => {
    const n = getCurrentInstance(), r = n.props, a2 = n["emit"], o = "update:" + p, c = computed(() => isFunction$2(r["onUpdate:" + p])), i = computed(() => null === r[p]), f2 = () => {
      true !== e2.value && (e2.value = true, isFunction$2(t)) && t();
    }, s = () => {
      false !== e2.value && (e2.value = false, isFunction$2(d)) && d();
    }, l = () => {
      var A3;
      true === r.disabled || isFunction$2(u2) && !u2() || ((A3 = c.value && isClient) && a2(o, true), !i.value && A3) || f2();
    }, B = () => {
      var A3;
      true !== r.disabled && isClient && ((A3 = c.value && isClient) && a2(o, false), !i.value && A3 || s());
    }, g = (A3) => {
      isBool(A3) && (r.disabled && A3 ? c.value && a2(o, false) : e2.value !== A3 && (A3 ? f2 : s)());
    };
    return watch(() => r[p], g), A2 && void 0 !== n.appContext.config.globalProperties.$route && watch(() => ({ ...n.proxy.$route }), () => {
      A2.value && e2.value && B();
    }), onMounted(() => {
      g(r[p]);
    }), { hide: B, show: l, toggle: () => {
      (e2.value ? B : l)();
    } };
  }, useModelToggleProps: { [p]: buildProp({ type: definePropType(Boolean), default: null }), ["onUpdate:" + p]: buildProp({ type: definePropType(Function) }) }, useModelToggleEmits: ["update:" + p] };
};
function useTimeout() {
  let u2;
  const t = () => window.clearTimeout(u2);
  return tryOnScopeDispose(() => t()), { registerTimeout: (A2, e2) => {
    t(), u2 = window.setTimeout(A2, e2);
  }, cancelTimeout: t };
}
createModelToggleComposable("modelValue");
const defaultIdInjection = { prefix: Math.floor(1e4 * Math.random()), current: 0 }, ID_INJECTION_KEY = Symbol("elIdInjection"), useId = (A2) => {
  const e2 = inject(ID_INJECTION_KEY, defaultIdInjection);
  return isClient || (e2, defaultIdInjection), computed(() => unref(A2) || `el-id-${e2.prefix}-` + e2.current++);
}, useEscapeKeydown = (e2) => {
  const A2 = (A3) => {
    A3.key === EVENT_CODE.esc && null != e2 && e2(A3);
  };
  onMounted(() => {
    on(document, "keydown", A2);
  }), onBeforeUnmount(() => {
    off(document, "keydown", A2);
  });
};
let cachedContainer;
const POPPER_CONTAINER_ID = "el-popper-container-" + generateId(), POPPER_CONTAINER_SELECTOR = "#" + POPPER_CONTAINER_ID, usePopperContainer = () => {
  onBeforeMount(() => {
    var A2;
    isClient && !cachedContainer && ((A2 = document.createElement("div")).id = POPPER_CONTAINER_ID, document.body.appendChild(A2), cachedContainer = A2);
  });
}, useDelayedToggleProps = buildProps({ showAfter: { type: Number, default: 0 }, hideAfter: { type: Number, default: 200 } }), useDelayedToggle = ({ showAfter: A2, hideAfter: e2, open: u2, close: t }) => {
  const d = useTimeout()["registerTimeout"];
  return { onOpen: () => {
    d(() => {
      u2();
    }, unref(A2));
  }, onClose: () => {
    d(() => {
      t();
    }, unref(e2));
  } };
}, FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef"), useForwardRef = (e2) => {
  provide(FORWARD_REF_INJECTION_KEY, { setForwardRef: (A2) => {
    e2.value = A2;
  } });
}, useForwardRefDirective = (e2) => ({ mounted(A2) {
  e2(A2);
}, updated(A2) {
  e2(A2);
}, unmounted() {
  e2(null);
} }), onTouchMove = (A2) => {
  A2.preventDefault(), A2.stopPropagation();
}, onModalClick = () => {
  null != PopupManager && PopupManager.doOnModalClick();
};
let hasModal = false;
const getModal = function() {
  if (isClient) {
    let A2 = PopupManager.modalDom;
    return A2 ? hasModal = true : (hasModal = false, A2 = document.createElement("div"), PopupManager.modalDom = A2, on(A2, "touchmove", onTouchMove), on(A2, "click", onModalClick)), A2;
  }
}, instances = {}, PopupManager = { modalFade: true, modalDom: void 0, globalInitialZIndex: 2e3, zIndex: 0, getInitialZIndex() {
  var A2;
  return getCurrentInstance() && null != (A2 = useGlobalConfig("zIndex").value) ? A2 : this.globalInitialZIndex;
}, getInstance(A2) {
  return instances[A2];
}, register(A2, e2) {
  A2 && e2 && (instances[A2] = e2);
}, deregister(A2) {
  A2 && (instances[A2] = null, delete instances[A2]);
}, nextZIndex() {
  return this.getInitialZIndex() + ++this.zIndex;
}, modalStack: [], doOnModalClick() {
  var A2 = PopupManager.modalStack[PopupManager.modalStack.length - 1];
  A2 && (A2 = PopupManager.getInstance(A2.id)) && A2.closeOnClickModal.value && A2.close();
}, openModal(u2, A2, e2, t, d) {
  if (isClient && u2 && void 0 !== A2) {
    this.modalFade = d;
    var n = this.modalStack;
    for (let A3 = 0, e3 = n.length; A3 < e3; A3++)
      if (n[A3].id === u2)
        return;
    const r = getModal();
    addClass(r, "v-modal"), this.modalFade && !hasModal && addClass(r, "v-modal-enter"), t && t.trim().split(/\s+/).forEach((A3) => addClass(r, A3)), setTimeout(() => {
      removeClass(r, "v-modal-enter");
    }, 200), (e2 && e2.parentNode && 11 !== e2.parentNode.nodeType ? e2.parentNode : document.body).appendChild(r), A2 && (r.style.zIndex = String(A2)), r.tabIndex = 0, r.style.display = "", this.modalStack.push({ id: u2, zIndex: A2, modalClass: t });
  }
}, closeModal(e2) {
  const u2 = this.modalStack, t = getModal();
  if (0 < u2.length) {
    var A2 = u2[u2.length - 1];
    if (A2.id === e2)
      A2.modalClass && A2.modalClass.trim().split(/\s+/).forEach((A3) => removeClass(t, A3)), u2.pop(), 0 < u2.length && (t.style.zIndex = "" + u2[u2.length - 1].zIndex);
    else
      for (let A3 = u2.length - 1; 0 <= A3; A3--)
        if (u2[A3].id === e2) {
          u2.splice(A3, 1);
          break;
        }
  }
  0 === u2.length && (this.modalFade && addClass(t, "v-modal-leave"), setTimeout(() => {
    0 === u2.length && (t.parentNode && t.parentNode.removeChild(t), t.style.display = "none", PopupManager.modalDom = void 0), removeClass(t, "v-modal-leave");
  }, 200));
} }, getTopPopup = function() {
  if (isClient && 0 < PopupManager.modalStack.length) {
    var A2 = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (A2)
      return PopupManager.getInstance(A2.id);
  }
}, withInstall = (isClient && window.addEventListener("keydown", function(A2) {
  A2.code === EVENT_CODE.esc && (A2 = getTopPopup()) && A2.closeOnPressEscape.value && (A2.handleClose ? A2.handleClose() : A2.handleAction ? A2.handleAction("cancel") : A2.close());
}), (u2, t) => {
  if (u2.install = (A3) => {
    for (const e3 of [u2, ...Object.values(null != t ? t : {})])
      A3.component(e3.name, e3);
  }, t)
    for (var [A2, e2] of Object.entries(t))
      u2[A2] = e2;
  return u2;
});
var _export_sfc$1 = (A2, e2) => {
  var u2, t, d = A2.__vccOpts || A2;
  for ([u2, t] of e2)
    d[u2] = t;
  return d;
};
const POPPER_INJECTION_KEY = Symbol("elPopper"), POPPER_CONTENT_INJECTION_KEY = Symbol("elPopperContent"), _sfc_main$b = defineComponent({ name: "ElPopperProvider", inheritAttrs: false, setup() {
  var A2 = { triggerRef: ref(null), popperInstanceRef: ref(null), contentRef: ref(null) };
  return provide(POPPER_INJECTION_KEY, A2), A2;
} });
function _sfc_render$8(A2, e2, u2, t, d, n) {
  return renderSlot(A2.$slots, "default");
}
var Popper = _export_sfc$1(_sfc_main$b, [["render", _sfc_render$8]]), top = "top", bottom = "bottom", right = "right", left = "left", auto = "auto", basePlacements = [top, bottom, right, left], start = "start", end = "end", clippingParents = "clippingParents", viewport = "viewport", popper = "popper", reference = "reference", variationPlacements = basePlacements.reduce(function(A2, e2) {
  return A2.concat([e2 + "-" + start, e2 + "-" + end]);
}, []), placements = [].concat(basePlacements, [auto]).reduce(function(A2, e2) {
  return A2.concat([e2, e2 + "-" + start, e2 + "-" + end]);
}, []), beforeRead = "beforeRead", read = "read", afterRead = "afterRead", beforeMain = "beforeMain", main = "main", afterMain = "afterMain", beforeWrite = "beforeWrite", write = "write", afterWrite = "afterWrite", modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(A2) {
  return A2 ? (A2.nodeName || "").toLowerCase() : null;
}
function getWindow(A2) {
  var e2;
  return null == A2 ? window : "[object Window]" !== A2.toString() ? (e2 = A2.ownerDocument) && e2.defaultView || window : A2;
}
function isElement(A2) {
  return A2 instanceof getWindow(A2).Element || A2 instanceof Element;
}
function isHTMLElement(A2) {
  return A2 instanceof getWindow(A2).HTMLElement || A2 instanceof HTMLElement;
}
function isShadowRoot(A2) {
  return "undefined" != typeof ShadowRoot && (A2 instanceof getWindow(A2).ShadowRoot || A2 instanceof ShadowRoot);
}
function applyStyles(A2) {
  var d = A2.state;
  Object.keys(d.elements).forEach(function(A3) {
    var e2 = d.styles[A3] || {}, u2 = d.attributes[A3] || {}, t = d.elements[A3];
    isHTMLElement(t) && getNodeName(t) && (Object.assign(t.style, e2), Object.keys(u2).forEach(function(A4) {
      var e3 = u2[A4];
      false === e3 ? t.removeAttribute(A4) : t.setAttribute(A4, true === e3 ? "" : e3);
    }));
  });
}
function effect$2(A2) {
  var t = A2.state, d = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, d.popper), t.styles = d, t.elements.arrow && Object.assign(t.elements.arrow.style, d.arrow), function() {
    Object.keys(t.elements).forEach(function(A3) {
      var e2 = t.elements[A3], u2 = t.attributes[A3] || {}, A3 = Object.keys((t.styles.hasOwnProperty(A3) ? t.styles : d)[A3]).reduce(function(A4, e3) {
        return A4[e3] = "", A4;
      }, {});
      isHTMLElement(e2) && getNodeName(e2) && (Object.assign(e2.style, A3), Object.keys(u2).forEach(function(A4) {
        e2.removeAttribute(A4);
      }));
    });
  };
}
var applyStyles$1 = { name: "applyStyles", enabled: true, phase: "write", fn: applyStyles, effect: effect$2, requires: ["computeStyles"] };
function getBasePlacement(A2) {
  return A2.split("-")[0];
}
var max = Math.max, min = Math.min, round = Math.round;
function getUAString() {
  var A2 = navigator.userAgentData;
  return null != A2 && A2.brands ? A2.brands.map(function(A3) {
    return A3.brand + "/" + A3.version;
  }).join(" ") : navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(A2, e2, u2) {
  void 0 === e2 && (e2 = false), void 0 === u2 && (u2 = false);
  var t = A2.getBoundingClientRect(), d = 1, n = 1;
  e2 && isHTMLElement(A2) && (d = 0 < A2.offsetWidth && round(t.width) / A2.offsetWidth || 1, n = 0 < A2.offsetHeight && round(t.height) / A2.offsetHeight || 1);
  e2 = (isElement(A2) ? getWindow(A2) : window).visualViewport, A2 = !isLayoutViewport() && u2, u2 = (t.left + (A2 && e2 ? e2.offsetLeft : 0)) / d, A2 = (t.top + (A2 && e2 ? e2.offsetTop : 0)) / n, e2 = t.width / d, d = t.height / n;
  return { width: e2, height: d, top: A2, right: u2 + e2, bottom: A2 + d, left: u2, x: u2, y: A2 };
}
function getLayoutRect(A2) {
  var e2 = getBoundingClientRect(A2), u2 = A2.offsetWidth, t = A2.offsetHeight;
  return Math.abs(e2.width - u2) <= 1 && (u2 = e2.width), Math.abs(e2.height - t) <= 1 && (t = e2.height), { x: A2.offsetLeft, y: A2.offsetTop, width: u2, height: t };
}
function contains$1(A2, e2) {
  var u2 = e2.getRootNode && e2.getRootNode();
  if (A2.contains(e2))
    return true;
  if (u2 && isShadowRoot(u2)) {
    var t = e2;
    do {
      if (t && A2.isSameNode(t))
        return true;
    } while (t = t.parentNode || t.host);
  }
  return false;
}
function getComputedStyle$1(A2) {
  return getWindow(A2).getComputedStyle(A2);
}
function isTableElement(A2) {
  return 0 <= ["table", "td", "th"].indexOf(getNodeName(A2));
}
function getDocumentElement(A2) {
  return ((isElement(A2) ? A2.ownerDocument : A2.document) || window.document).documentElement;
}
function getParentNode(A2) {
  return "html" === getNodeName(A2) ? A2 : A2.assignedSlot || A2.parentNode || (isShadowRoot(A2) ? A2.host : null) || getDocumentElement(A2);
}
function getTrueOffsetParent(A2) {
  return isHTMLElement(A2) && "fixed" !== getComputedStyle$1(A2).position ? A2.offsetParent : null;
}
function getContainingBlock(A2) {
  var e2 = /firefox/i.test(getUAString()), u2 = /Trident/i.test(getUAString());
  if (u2 && isHTMLElement(A2) && "fixed" === getComputedStyle$1(A2).position)
    return null;
  var t = getParentNode(A2);
  for (isShadowRoot(t) && (t = t.host); isHTMLElement(t) && ["html", "body"].indexOf(getNodeName(t)) < 0; ) {
    var d = getComputedStyle$1(t);
    if ("none" !== d.transform || "none" !== d.perspective || "paint" === d.contain || -1 !== ["transform", "perspective"].indexOf(d.willChange) || e2 && "filter" === d.willChange || e2 && d.filter && "none" !== d.filter)
      return t;
    t = t.parentNode;
  }
  return null;
}
function getOffsetParent(A2) {
  for (var e2 = getWindow(A2), u2 = getTrueOffsetParent(A2); u2 && isTableElement(u2) && "static" === getComputedStyle$1(u2).position; )
    u2 = getTrueOffsetParent(u2);
  return (!u2 || "html" !== getNodeName(u2) && ("body" !== getNodeName(u2) || "static" !== getComputedStyle$1(u2).position)) && (u2 || getContainingBlock(A2)) || e2;
}
function getMainAxisFromPlacement(A2) {
  return 0 <= ["top", "bottom"].indexOf(A2) ? "x" : "y";
}
function within(A2, e2, u2) {
  return max(A2, min(e2, u2));
}
function withinMaxClamp(A2, e2, u2) {
  A2 = within(A2, e2, u2);
  return u2 < A2 ? u2 : A2;
}
function getFreshSideObject() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function mergePaddingObject(A2) {
  return Object.assign({}, getFreshSideObject(), A2);
}
function expandToHashMap(u2, A2) {
  return A2.reduce(function(A3, e2) {
    return A3[e2] = u2, A3;
  }, {});
}
var toPaddingObject = function(A2, e2) {
  return mergePaddingObject("number" != typeof (A2 = "function" == typeof A2 ? A2(Object.assign({}, e2.rects, { placement: e2.placement })) : A2) ? A2 : expandToHashMap(A2, basePlacements));
};
function arrow(A2) {
  var e2, u2, t, d, n = A2.state, r = A2.name, A2 = A2.options, a2 = n.elements.arrow, o = n.modifiersData.popperOffsets, c = getBasePlacement(n.placement), i = getMainAxisFromPlacement(c), c = 0 <= [left, right].indexOf(c) ? "height" : "width";
  a2 && o && (A2 = toPaddingObject(A2.padding, n), e2 = getLayoutRect(a2), d = "y" === i ? top : left, t = "y" === i ? bottom : right, u2 = n.rects.reference[c] + n.rects.reference[i] - o[i] - n.rects.popper[c], o = o[i] - n.rects.reference[i], a2 = (a2 = getOffsetParent(a2)) ? "y" === i ? a2.clientHeight || 0 : a2.clientWidth || 0 : 0, d = A2[d], A2 = a2 - e2[c] - A2[t], d = within(d, t = a2 / 2 - e2[c] / 2 + (u2 / 2 - o / 2), A2), n.modifiersData[r] = ((a2 = {})[i] = d, a2.centerOffset = d - t, a2));
}
function effect$1(A2) {
  var e2 = A2.state, A2 = A2.options.element, A2 = void 0 === A2 ? "[data-popper-arrow]" : A2;
  null != A2 && ("string" != typeof A2 || (A2 = e2.elements.popper.querySelector(A2))) && contains$1(e2.elements.popper, A2) && (e2.elements.arrow = A2);
}
var arrow$1 = { name: "arrow", enabled: true, phase: "main", fn: arrow, effect: effect$1, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function getVariation(A2) {
  return A2.split("-")[1];
}
var unsetSides = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function roundOffsetsByDPR(A2) {
  var e2 = A2.x, A2 = A2.y, u2 = window.devicePixelRatio || 1;
  return { x: round(e2 * u2) / u2 || 0, y: round(A2 * u2) / u2 || 0 };
}
function mapToStyles(A2) {
  var e2, u2, t = A2.popper, d = A2.popperRect, n = A2.placement, r = A2.variation, a2 = A2.offsets, o = A2.position, c = A2.gpuAcceleration, i = A2.adaptive, f2 = A2.roundOffsets, A2 = A2.isFixed, s = a2.x, s = void 0 === s ? 0 : s, l = a2.y, l = void 0 === l ? 0 : l, B = "function" == typeof f2 ? f2({ x: s, y: l }) : { x: s, y: l }, B = (s = B.x, l = B.y, a2.hasOwnProperty("x")), a2 = a2.hasOwnProperty("y"), g = left, p = top, h2 = window, t = (i && (w = "clientHeight", u2 = "clientWidth", (e2 = getOffsetParent(t)) === getWindow(t) && "static" !== getComputedStyle$1(e2 = getDocumentElement(t)).position && "absolute" === o && (w = "scrollHeight", u2 = "scrollWidth"), n !== top && (n !== left && n !== right || r !== end) || (p = bottom, l = (l - ((A2 && e2 === h2 && h2.visualViewport ? h2.visualViewport.height : e2[w]) - d.height)) * (c ? 1 : -1)), n !== left && (n !== top && n !== bottom || r !== end) || (g = right, s = (s - ((A2 && e2 === h2 && h2.visualViewport ? h2.visualViewport.width : e2[u2]) - d.width)) * (c ? 1 : -1))), Object.assign({ position: o }, i && unsetSides)), w = true === f2 ? roundOffsetsByDPR({ x: s, y: l }) : { x: s, y: l };
  return s = w.x, l = w.y, c ? Object.assign({}, t, ((n = {})[p] = a2 ? "0" : "", n[g] = B ? "0" : "", n.transform = (h2.devicePixelRatio || 1) <= 1 ? "translate(" + s + "px, " + l + "px)" : "translate3d(" + s + "px, " + l + "px, 0)", n)) : Object.assign({}, t, ((r = {})[p] = a2 ? l + "px" : "", r[g] = B ? s + "px" : "", r.transform = "", r));
}
function computeStyles(A2) {
  var e2 = A2.state, A2 = A2.options, u2 = A2.gpuAcceleration, u2 = void 0 === u2 || u2, t = A2.adaptive, t = void 0 === t || t, A2 = A2.roundOffsets, A2 = void 0 === A2 || A2, u2 = { placement: getBasePlacement(e2.placement), variation: getVariation(e2.placement), popper: e2.elements.popper, popperRect: e2.rects.popper, gpuAcceleration: u2, isFixed: "fixed" === e2.options.strategy };
  null != e2.modifiersData.popperOffsets && (e2.styles.popper = Object.assign({}, e2.styles.popper, mapToStyles(Object.assign({}, u2, { offsets: e2.modifiersData.popperOffsets, position: e2.options.strategy, adaptive: t, roundOffsets: A2 })))), null != e2.modifiersData.arrow && (e2.styles.arrow = Object.assign({}, e2.styles.arrow, mapToStyles(Object.assign({}, u2, { offsets: e2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: A2 })))), e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-placement": e2.placement });
}
var computeStyles$1 = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: computeStyles, data: {} }, passive = { passive: true };
function effect(A2) {
  var e2 = A2.state, u2 = A2.instance, A2 = A2.options, t = A2.scroll, d = void 0 === t || t, t = A2.resize, n = void 0 === t || t, r = getWindow(e2.elements.popper), a2 = [].concat(e2.scrollParents.reference, e2.scrollParents.popper);
  return d && a2.forEach(function(A3) {
    A3.addEventListener("scroll", u2.update, passive);
  }), n && r.addEventListener("resize", u2.update, passive), function() {
    d && a2.forEach(function(A3) {
      A3.removeEventListener("scroll", u2.update, passive);
    }), n && r.removeEventListener("resize", u2.update, passive);
  };
}
var eventListeners = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect, data: {} }, hash$1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function getOppositePlacement(A2) {
  return A2.replace(/left|right|bottom|top/g, function(A3) {
    return hash$1[A3];
  });
}
var hash = { start: "end", end: "start" };
function getOppositeVariationPlacement(A2) {
  return A2.replace(/start|end/g, function(A3) {
    return hash[A3];
  });
}
function getWindowScroll(A2) {
  A2 = getWindow(A2);
  return { scrollLeft: A2.pageXOffset, scrollTop: A2.pageYOffset };
}
function getWindowScrollBarX(A2) {
  return getBoundingClientRect(getDocumentElement(A2)).left + getWindowScroll(A2).scrollLeft;
}
function getViewportRect(A2, e2) {
  var u2, t = getWindow(A2), d = getDocumentElement(A2), t = t.visualViewport, n = d.clientWidth, d = d.clientHeight, r = 0, a2 = 0;
  return t && (n = t.width, d = t.height, (u2 = isLayoutViewport()) || !u2 && "fixed" === e2) && (r = t.offsetLeft, a2 = t.offsetTop), { width: n, height: d, x: r + getWindowScrollBarX(A2), y: a2 };
}
function getDocumentRect(A2) {
  var e2 = getDocumentElement(A2), u2 = getWindowScroll(A2), t = null == (t = A2.ownerDocument) ? void 0 : t.body, d = max(e2.scrollWidth, e2.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), n = max(e2.scrollHeight, e2.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), A2 = -u2.scrollLeft + getWindowScrollBarX(A2), u2 = -u2.scrollTop;
  return "rtl" === getComputedStyle$1(t || e2).direction && (A2 += max(e2.clientWidth, t ? t.clientWidth : 0) - d), { width: d, height: n, x: A2, y: u2 };
}
function isScrollParent(A2) {
  var A2 = getComputedStyle$1(A2), e2 = A2.overflow, u2 = A2.overflowX, A2 = A2.overflowY;
  return /auto|scroll|overlay|hidden/.test(e2 + A2 + u2);
}
function getScrollParent(A2) {
  return 0 <= ["html", "body", "#document"].indexOf(getNodeName(A2)) ? A2.ownerDocument.body : isHTMLElement(A2) && isScrollParent(A2) ? A2 : getScrollParent(getParentNode(A2));
}
function listScrollParents(A2, e2) {
  void 0 === e2 && (e2 = []);
  var u2 = getScrollParent(A2), A2 = u2 === (null == (A2 = A2.ownerDocument) ? void 0 : A2.body), t = getWindow(u2), t = A2 ? [t].concat(t.visualViewport || [], isScrollParent(u2) ? u2 : []) : u2, u2 = e2.concat(t);
  return A2 ? u2 : u2.concat(listScrollParents(getParentNode(t)));
}
function rectToClientRect(A2) {
  return Object.assign({}, A2, { left: A2.x, top: A2.y, right: A2.x + A2.width, bottom: A2.y + A2.height });
}
function getInnerBoundingClientRect(A2, e2) {
  e2 = getBoundingClientRect(A2, false, "fixed" === e2);
  return e2.top = e2.top + A2.clientTop, e2.left = e2.left + A2.clientLeft, e2.bottom = e2.top + A2.clientHeight, e2.right = e2.left + A2.clientWidth, e2.width = A2.clientWidth, e2.height = A2.clientHeight, e2.x = e2.left, e2.y = e2.top, e2;
}
function getClientRectFromMixedType(A2, e2, u2) {
  return e2 === viewport ? rectToClientRect(getViewportRect(A2, u2)) : isElement(e2) ? getInnerBoundingClientRect(e2, u2) : rectToClientRect(getDocumentRect(getDocumentElement(A2)));
}
function getClippingParents(A2) {
  var e2 = listScrollParents(getParentNode(A2)), u2 = 0 <= ["absolute", "fixed"].indexOf(getComputedStyle$1(A2).position) && isHTMLElement(A2) ? getOffsetParent(A2) : A2;
  return isElement(u2) ? e2.filter(function(A3) {
    return isElement(A3) && contains$1(A3, u2) && "body" !== getNodeName(A3);
  }) : [];
}
function getClippingRect(u2, A2, e2, t) {
  A2 = "clippingParents" === A2 ? getClippingParents(u2) : [].concat(A2), A2 = [].concat(A2, [e2]), e2 = A2[0], A2 = A2.reduce(function(A3, e3) {
    e3 = getClientRectFromMixedType(u2, e3, t);
    return A3.top = max(e3.top, A3.top), A3.right = min(e3.right, A3.right), A3.bottom = min(e3.bottom, A3.bottom), A3.left = max(e3.left, A3.left), A3;
  }, getClientRectFromMixedType(u2, e2, t));
  return A2.width = A2.right - A2.left, A2.height = A2.bottom - A2.top, A2.x = A2.left, A2.y = A2.top, A2;
}
function computeOffsets(A2) {
  var e2, u2 = A2.reference, t = A2.element, A2 = A2.placement, d = A2 ? getBasePlacement(A2) : null, A2 = A2 ? getVariation(A2) : null, n = u2.x + u2.width / 2 - t.width / 2, r = u2.y + u2.height / 2 - t.height / 2;
  switch (d) {
    case top:
      e2 = { x: n, y: u2.y - t.height };
      break;
    case bottom:
      e2 = { x: n, y: u2.y + u2.height };
      break;
    case right:
      e2 = { x: u2.x + u2.width, y: r };
      break;
    case left:
      e2 = { x: u2.x - t.width, y: r };
      break;
    default:
      e2 = { x: u2.x, y: u2.y };
  }
  var a2 = d ? getMainAxisFromPlacement(d) : null;
  if (null != a2) {
    var o = "y" === a2 ? "height" : "width";
    switch (A2) {
      case start:
        e2[a2] = e2[a2] - (u2[o] / 2 - t[o] / 2);
        break;
      case end:
        e2[a2] = e2[a2] + (u2[o] / 2 - t[o] / 2);
    }
  }
  return e2;
}
function detectOverflow(A2, e2) {
  var t, e2 = e2 = void 0 === e2 ? {} : e2, u2 = e2.placement, u2 = void 0 === u2 ? A2.placement : u2, d = e2.strategy, d = void 0 === d ? A2.strategy : d, n = e2.boundary, n = void 0 === n ? clippingParents : n, r = e2.rootBoundary, r = void 0 === r ? viewport : r, a2 = e2.elementContext, a2 = void 0 === a2 ? popper : a2, o = e2.altBoundary, o = void 0 !== o && o, e2 = e2.padding, e2 = void 0 === e2 ? 0 : e2, e2 = mergePaddingObject("number" != typeof e2 ? e2 : expandToHashMap(e2, basePlacements)), c = A2.rects.popper, o = A2.elements[o ? a2 === popper ? reference : popper : a2], o = getClippingRect(isElement(o) ? o : o.contextElement || getDocumentElement(A2.elements.popper), n, r, d), n = getBoundingClientRect(A2.elements.reference), r = computeOffsets({ reference: n, element: c, strategy: "absolute", placement: u2 }), d = rectToClientRect(Object.assign({}, c, r)), c = a2 === popper ? d : n, i = { top: o.top - c.top + e2.top, bottom: c.bottom - o.bottom + e2.bottom, left: o.left - c.left + e2.left, right: c.right - o.right + e2.right }, r = A2.modifiersData.offset;
  return a2 === popper && r && (t = r[u2], Object.keys(i).forEach(function(A3) {
    var e3 = 0 <= [right, bottom].indexOf(A3) ? 1 : -1, u3 = 0 <= [top, bottom].indexOf(A3) ? "y" : "x";
    i[A3] += t[u3] * e3;
  })), i;
}
function computeAutoPlacement(u2, A2) {
  var A2 = A2 = void 0 === A2 ? {} : A2, e2 = A2.placement, t = A2.boundary, d = A2.rootBoundary, n = A2.padding, r = A2.flipVariations, A2 = A2.allowedAutoPlacements, a2 = void 0 === A2 ? placements : A2, o = getVariation(e2), A2 = o ? r ? variationPlacements : variationPlacements.filter(function(A3) {
    return getVariation(A3) === o;
  }) : basePlacements, e2 = A2.filter(function(A3) {
    return 0 <= a2.indexOf(A3);
  }), c = (e2 = 0 === e2.length ? A2 : e2).reduce(function(A3, e3) {
    return A3[e3] = detectOverflow(u2, { placement: e3, boundary: t, rootBoundary: d, padding: n })[getBasePlacement(e3)], A3;
  }, {});
  return Object.keys(c).sort(function(A3, e3) {
    return c[A3] - c[e3];
  });
}
function getExpandedFallbackPlacements(A2) {
  var e2;
  return getBasePlacement(A2) === auto ? [] : (e2 = getOppositePlacement(A2), [getOppositeVariationPlacement(A2), e2, getOppositeVariationPlacement(e2)]);
}
function flip(A2) {
  var u2 = A2.state, e2 = A2.options, A2 = A2.name;
  if (!u2.modifiersData[A2]._skip) {
    for (var t = e2.mainAxis, d = void 0 === t || t, t = e2.altAxis, n = void 0 === t || t, t = e2.fallbackPlacements, r = e2.padding, a2 = e2.boundary, o = e2.rootBoundary, c = e2.altBoundary, i = e2.flipVariations, f2 = void 0 === i || i, s = e2.allowedAutoPlacements, i = u2.options.placement, e2 = getBasePlacement(i), t = t || (e2 === i || !f2 ? [getOppositePlacement(i)] : getExpandedFallbackPlacements(i)), l = [i].concat(t).reduce(function(A3, e3) {
      return A3.concat(getBasePlacement(e3) === auto ? computeAutoPlacement(u2, { placement: e3, boundary: a2, rootBoundary: o, padding: r, flipVariations: f2, allowedAutoPlacements: s }) : e3);
    }, []), B = u2.rects.reference, g = u2.rects.popper, p = /* @__PURE__ */ new Map(), h2 = true, w = l[0], C = 0; C < l.length; C++) {
      var m = l[C], b = getBasePlacement(m), Q = getVariation(m) === start, E2 = 0 <= [top, bottom].indexOf(b), F2 = E2 ? "width" : "height", U2 = detectOverflow(u2, { placement: m, boundary: a2, rootBoundary: o, altBoundary: c, padding: r }), E2 = E2 ? Q ? right : left : Q ? bottom : top, Q = (B[F2] > g[F2] && (E2 = getOppositePlacement(E2)), getOppositePlacement(E2)), F2 = [];
      if (d && F2.push(U2[b] <= 0), n && F2.push(U2[E2] <= 0, U2[Q] <= 0), F2.every(function(A3) {
        return A3;
      })) {
        w = m, h2 = false;
        break;
      }
      p.set(m, F2);
    }
    if (h2) {
      for (var _2 = f2 ? 3 : 1; 0 < _2; _2--)
        if ("break" === function(e3) {
          var A3 = l.find(function(A4) {
            A4 = p.get(A4);
            if (A4)
              return A4.slice(0, e3).every(function(A5) {
                return A5;
              });
          });
          if (A3)
            return w = A3, "break";
        }(_2))
          break;
    }
    u2.placement !== w && (u2.modifiersData[A2]._skip = true, u2.placement = w, u2.reset = true);
  }
}
var flip$1 = { name: "flip", enabled: true, phase: "main", fn: flip, requiresIfExists: ["offset"], data: { _skip: false } };
function getSideOffsets(A2, e2, u2) {
  return { top: A2.top - e2.height - (u2 = void 0 === u2 ? { x: 0, y: 0 } : u2).y, right: A2.right - e2.width + u2.x, bottom: A2.bottom - e2.height + u2.y, left: A2.left - e2.width - u2.x };
}
function isAnySideFullyClipped(e2) {
  return [top, right, bottom, left].some(function(A2) {
    return 0 <= e2[A2];
  });
}
function hide(A2) {
  var e2 = A2.state, A2 = A2.name, u2 = e2.rects.reference, t = e2.rects.popper, d = e2.modifiersData.preventOverflow, n = detectOverflow(e2, { elementContext: "reference" }), r = detectOverflow(e2, { altBoundary: true }), n = getSideOffsets(n, u2), u2 = getSideOffsets(r, t, d), r = isAnySideFullyClipped(n), t = isAnySideFullyClipped(u2);
  e2.modifiersData[A2] = { referenceClippingOffsets: n, popperEscapeOffsets: u2, isReferenceHidden: r, hasPopperEscaped: t }, e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-reference-hidden": r, "data-popper-escaped": t });
}
var hide$1 = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: hide };
function distanceAndSkiddingToXY(A2, e2, u2) {
  var t = getBasePlacement(A2), d = 0 <= [left, top].indexOf(t) ? -1 : 1, e2 = "function" == typeof u2 ? u2(Object.assign({}, e2, { placement: A2 })) : u2, A2 = e2[0] || 0, u2 = (e2[1] || 0) * d;
  return 0 <= [left, right].indexOf(t) ? { x: u2, y: A2 } : { x: A2, y: u2 };
}
function offset(A2) {
  var u2 = A2.state, e2 = A2.options, A2 = A2.name, e2 = e2.offset, t = void 0 === e2 ? [0, 0] : e2, e2 = placements.reduce(function(A3, e3) {
    return A3[e3] = distanceAndSkiddingToXY(e3, u2.rects, t), A3;
  }, {}), d = e2[u2.placement], n = d.x, d = d.y;
  null != u2.modifiersData.popperOffsets && (u2.modifiersData.popperOffsets.x += n, u2.modifiersData.popperOffsets.y += d), u2.modifiersData[A2] = e2;
}
var offset$1 = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: offset };
function popperOffsets(A2) {
  var e2 = A2.state, A2 = A2.name;
  e2.modifiersData[A2] = computeOffsets({ reference: e2.rects.reference, element: e2.rects.popper, strategy: "absolute", placement: e2.placement });
}
var popperOffsets$1 = { name: "popperOffsets", enabled: true, phase: "read", fn: popperOffsets, data: {} };
function getAltAxis(A2) {
  return "x" === A2 ? "y" : "x";
}
function preventOverflow(A2) {
  var e2, u2, t, d, n, r, a2, o, c, i = A2.state, f2 = A2.options, A2 = A2.name, s = f2.mainAxis, s = void 0 === s || s, l = f2.altAxis, l = void 0 !== l && l, B = f2.boundary, g = f2.rootBoundary, p = f2.altBoundary, h2 = f2.padding, w = f2.tether, w = void 0 === w || w, f2 = f2.tetherOffset, f2 = void 0 === f2 ? 0 : f2, B = detectOverflow(i, { boundary: B, rootBoundary: g, padding: h2, altBoundary: p }), g = getBasePlacement(i.placement), h2 = getVariation(i.placement), p = !h2, C = getMainAxisFromPlacement(g), m = getAltAxis(C), b = i.modifiersData.popperOffsets, Q = i.rects.reference, E2 = i.rects.popper, f2 = "function" == typeof f2 ? f2(Object.assign({}, i.rects, { placement: i.placement })) : f2, f2 = "number" == typeof f2 ? { mainAxis: f2, altAxis: f2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, f2), F2 = i.modifiersData.offset ? i.modifiersData.offset[i.placement] : null, U2 = { x: 0, y: 0 };
  b && (s && (s = "y" === C ? "height" : "width", o = (e2 = b[C]) + B[d = "y" === C ? top : left], c = e2 - B[u2 = "y" === C ? bottom : right], t = w ? -E2[s] / 2 : 0, r = (h2 === start ? Q : E2)[s], h2 = h2 === start ? -E2[s] : -Q[s], a2 = i.elements.arrow, a2 = w && a2 ? getLayoutRect(a2) : { width: 0, height: 0 }, d = (n = i.modifiersData["arrow#persistent"] ? i.modifiersData["arrow#persistent"].padding : getFreshSideObject())[d], n = n[u2], u2 = within(0, Q[s], a2[s]), a2 = p ? Q[s] / 2 - t - u2 - d - f2.mainAxis : r - u2 - d - f2.mainAxis, r = p ? -Q[s] / 2 + t + u2 + n + f2.mainAxis : h2 + u2 + n + f2.mainAxis, p = (d = i.elements.arrow && getOffsetParent(i.elements.arrow)) ? "y" === C ? d.clientTop || 0 : d.clientLeft || 0 : 0, h2 = e2 + r - (t = null != (s = null == F2 ? void 0 : F2[C]) ? s : 0), u2 = within(w ? min(o, e2 + a2 - t - p) : o, e2, w ? max(c, h2) : c), b[C] = u2, U2[C] = u2 - e2), l && (n = "y" === m ? "height" : "width", r = (d = b[m]) + B["x" === C ? top : left], s = d - B["x" === C ? bottom : right], a2 = -1 !== [top, left].indexOf(g), p = null != (t = null == F2 ? void 0 : F2[m]) ? t : 0, o = a2 ? r : d - Q[n] - E2[n] - p + f2.altAxis, h2 = a2 ? d + Q[n] + E2[n] - p - f2.altAxis : s, c = w && a2 ? withinMaxClamp(o, d, h2) : within(w ? o : r, d, w ? h2 : s), b[m] = c, U2[m] = c - d), i.modifiersData[A2] = U2);
}
var preventOverflow$1 = { name: "preventOverflow", enabled: true, phase: "main", fn: preventOverflow, requiresIfExists: ["offset"] };
function getHTMLElementScroll(A2) {
  return { scrollLeft: A2.scrollLeft, scrollTop: A2.scrollTop };
}
function getNodeScroll(A2) {
  return (A2 !== getWindow(A2) && isHTMLElement(A2) ? getHTMLElementScroll : getWindowScroll)(A2);
}
function isElementScaled(A2) {
  var e2 = A2.getBoundingClientRect(), u2 = round(e2.width) / A2.offsetWidth || 1, e2 = round(e2.height) / A2.offsetHeight || 1;
  return 1 !== u2 || 1 !== e2;
}
function getCompositeRect(A2, e2, u2) {
  void 0 === u2 && (u2 = false);
  var t = isHTMLElement(e2), d = isHTMLElement(e2) && isElementScaled(e2), n = getDocumentElement(e2), A2 = getBoundingClientRect(A2, d, u2), d = { scrollLeft: 0, scrollTop: 0 }, r = { x: 0, y: 0 };
  return !t && u2 || ("body" === getNodeName(e2) && !isScrollParent(n) || (d = getNodeScroll(e2)), isHTMLElement(e2) ? ((r = getBoundingClientRect(e2, true)).x += e2.clientLeft, r.y += e2.clientTop) : n && (r.x = getWindowScrollBarX(n))), { x: A2.left + d.scrollLeft - r.x, y: A2.top + d.scrollTop - r.y, width: A2.width, height: A2.height };
}
function order(A2) {
  var u2 = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), d = [];
  return A2.forEach(function(A3) {
    u2.set(A3.name, A3);
  }), A2.forEach(function(A3) {
    t.has(A3.name) || !function e2(A4) {
      t.add(A4.name), [].concat(A4.requires || [], A4.requiresIfExists || []).forEach(function(A5) {
        t.has(A5) || (A5 = u2.get(A5)) && e2(A5);
      }), d.push(A4);
    }(A3);
  }), d;
}
function orderModifiers(A2) {
  var u2 = order(A2);
  return modifierPhases.reduce(function(A3, e2) {
    return A3.concat(u2.filter(function(A4) {
      return A4.phase === e2;
    }));
  }, []);
}
function debounce(e2) {
  var u2;
  return function() {
    return u2 = u2 || new Promise(function(A2) {
      Promise.resolve().then(function() {
        u2 = void 0, A2(e2());
      });
    });
  };
}
function mergeByName(A2) {
  var e2 = A2.reduce(function(A3, e3) {
    var u2 = A3[e3.name];
    return A3[e3.name] = u2 ? Object.assign({}, u2, e3, { options: Object.assign({}, u2.options, e3.options), data: Object.assign({}, u2.data, e3.data) }) : e3, A3;
  }, {});
  return Object.keys(e2).map(function(A3) {
    return e2[A3];
  });
}
var DEFAULT_OPTIONS = { placement: "bottom", modifiers: [], strategy: "absolute" };
function areValidElements() {
  for (var A2 = arguments.length, e2 = new Array(A2), u2 = 0; u2 < A2; u2++)
    e2[u2] = arguments[u2];
  return !e2.some(function(A3) {
    return !(A3 && "function" == typeof A3.getBoundingClientRect);
  });
}
function popperGenerator(A2) {
  var A2 = A2 = void 0 === A2 ? {} : A2, e2 = A2.defaultModifiers, c = void 0 === e2 ? [] : e2, e2 = A2.defaultOptions, i = void 0 === e2 ? DEFAULT_OPTIONS : e2;
  return function(e3, u2, t) {
    void 0 === t && (t = i);
    var r = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, DEFAULT_OPTIONS, i), modifiersData: {}, elements: { reference: e3, popper: u2 }, attributes: {}, styles: {} }, d = [], a2 = false, o = { state: r, setOptions: function(A3) {
      A3 = "function" == typeof A3 ? A3(r.options) : A3, n(), r.options = Object.assign({}, i, r.options, A3), r.scrollParents = { reference: isElement(e3) ? listScrollParents(e3) : e3.contextElement ? listScrollParents(e3.contextElement) : [], popper: listScrollParents(u2) }, A3 = orderModifiers(mergeByName([].concat(c, r.options.modifiers)));
      return r.orderedModifiers = A3.filter(function(A4) {
        return A4.enabled;
      }), r.orderedModifiers.forEach(function(A4) {
        var e4 = A4.name, u3 = A4.options, A4 = A4.effect;
        "function" == typeof A4 && (A4 = A4({ state: r, name: e4, instance: o, options: void 0 === u3 ? {} : u3 }), d.push(A4 || function() {
        }));
      }), o.update();
    }, forceUpdate: function() {
      if (!a2) {
        var A3 = r.elements, e4 = A3.reference, A3 = A3.popper;
        if (areValidElements(e4, A3)) {
          r.rects = { reference: getCompositeRect(e4, getOffsetParent(A3), "fixed" === r.options.strategy), popper: getLayoutRect(A3) }, r.reset = false, r.placement = r.options.placement, r.orderedModifiers.forEach(function(A4) {
            return r.modifiersData[A4.name] = Object.assign({}, A4.data);
          });
          for (var u3, t2, d2, n2 = 0; n2 < r.orderedModifiers.length; n2++)
            true === r.reset ? (r.reset = false, n2 = -1) : (u3 = (d2 = r.orderedModifiers[n2]).fn, t2 = d2.options, d2 = d2.name, "function" == typeof u3 && (r = u3({ state: r, options: void 0 === t2 ? {} : t2, name: d2, instance: o }) || r));
        }
      }
    }, update: debounce(function() {
      return new Promise(function(A3) {
        o.forceUpdate(), A3(r);
      });
    }), destroy: function() {
      n(), a2 = true;
    } };
    return areValidElements(e3, u2) && o.setOptions(t).then(function(A3) {
      !a2 && t.onFirstUpdate && t.onFirstUpdate(A3);
    }), o;
    function n() {
      d.forEach(function(A3) {
        return A3();
      }), d = [];
    }
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1], createPopper = popperGenerator({ defaultModifiers });
const usePopperArrowProps = buildProps({ arrowOffset: { type: Number, default: 5 } }), usePopperCoreConfigProps = buildProps({ boundariesPadding: { type: Number, default: 0 }, fallbackPlacements: { type: definePropType(Array), default: () => [] }, gpuAcceleration: { type: Boolean, default: true }, offset: { type: Number, default: 12 }, placement: { type: String, values: placements, default: "bottom" }, popperOptions: { type: definePropType(Object), default: () => ({}) }, strategy: { type: String, values: ["fixed", "absolute"], default: "absolute" } }), usePopperContentProps = (buildProps({ autoClose: { type: Number, default: 0 }, cutoff: { type: Boolean, default: false }, disabled: { type: Boolean, default: false } }), buildProps({ ...usePopperCoreConfigProps, style: { type: definePropType([String, Array, Object]) }, className: { type: definePropType([String, Array, Object]) }, effect: { type: String, default: "dark" }, enterable: { type: Boolean, default: true }, pure: { type: Boolean }, popperClass: { type: definePropType([String, Array, Object]) }, popperStyle: { type: definePropType([String, Array, Object]) }, referenceEl: { type: definePropType(Object) }, stopPopperMouseEvent: { type: Boolean, default: true }, zIndex: Number })), usePopperTriggerProps = buildProps({ virtualRef: { type: definePropType(Object) }, virtualTriggering: { type: Boolean } }), _sfc_main$a = defineComponent({ name: "ElPopperArrow", props: usePopperArrowProps, setup(A2) {
  const e2 = ref(null), u2 = inject(POPPER_CONTENT_INJECTION_KEY, void 0);
  return watch(() => A2.arrowOffset, (A3) => {
    u2.arrowOffset.value = A3;
  }), onMounted(() => {
    u2.arrowRef.value = unref(e2);
  }), onBeforeUnmount(() => {
    u2.arrowRef.value = null;
  }), { arrowRef: e2 };
} }), _hoisted_1$4 = { ref: "arrowRef", class: "el-popper__arrow", "data-popper-arrow": "" };
function _sfc_render$7(A2, e2, u2, t, d, n) {
  return openBlock(), createElementBlock("span", _hoisted_1$4, null, 512);
}
var ElPopperArrow = _export_sfc$1(_sfc_main$a, [["render", _sfc_render$7]]);
const NAME$1 = "ElOnlyChild", OnlyChild = defineComponent({ name: NAME$1, setup(A2, { slots: e2, attrs: u2 }) {
  var t = inject(FORWARD_REF_INJECTION_KEY, void 0);
  const d = useForwardRefDirective(null != (t = t.setForwardRef) ? t : NOOP);
  return () => {
    var A3 = null == (A3 = e2.default) ? void 0 : A3.call(e2, u2);
    return A3 && !(1 < A3.length) && (A3 = findFirstLegitChild(A3)) ? withDirectives(cloneVNode(A3, u2), [[d]]) : null;
  };
} });
function findFirstLegitChild(A2) {
  if (A2) {
    var e2 = A2;
    for (let A3 = 0; A3 < e2.length; A3++) {
      var u2 = e2[A3];
      if (isObject$3(u2))
        switch (u2.type) {
          case Comment:
            continue;
          case Text:
            return wrapTextContent(u2);
          case Fragment:
            return findFirstLegitChild(u2.children);
          default:
            return u2;
        }
      return wrapTextContent(u2);
    }
  }
  return null;
}
function wrapTextContent(A2) {
  return h("span", { class: "el-only-child__content" }, [A2]);
}
const buildPopperOptions = (A2, e2) => {
  var { placement: u2, strategy: t, popperOptions: d } = A2, u2 = { placement: u2, strategy: t, ...d, modifiers: genModifiers(A2) };
  return attachArrow(u2, e2), deriveExtraModifiers(u2, null == d ? void 0 : d.modifiers), u2;
}, unwrapMeasurableEl = (A2) => {
  let e2 = null;
  return A2 ? e2 = "getBoundingClientRect" in A2 || A2 instanceof HTMLElement ? A2 : A2.$el : null;
};
function genModifiers(A2) {
  var { offset: A2, gpuAcceleration: e2, fallbackPlacements: u2 } = A2;
  return [{ name: "offset", options: { offset: [0, null != A2 ? A2 : 12] } }, { name: "preventOverflow", options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } } }, { name: "flip", options: { padding: 5, fallbackPlacements: null != u2 ? u2 : [] } }, { name: "computeStyles", options: { gpuAcceleration: e2, adaptive: e2 } }];
}
function attachArrow(A2, { arrowEl: e2, arrowOffset: u2 }) {
  A2.modifiers.push({ name: "arrow", options: { element: e2, padding: null != u2 ? u2 : 5 } });
}
function deriveExtraModifiers(A2, e2) {
  e2 && (A2.modifiers = [...A2.modifiers, ...null != e2 ? e2 : []]);
}
const _sfc_main$9 = defineComponent({ name: "ElPopperTrigger", components: { ElOnlyChild: OnlyChild }, inheritAttrs: false, props: { ...usePopperTriggerProps, onMouseenter: Function, onMouseleave: Function, onClick: Function, onKeydown: Function, onFocus: Function, onBlur: Function, onContextmenu: Function, id: String, open: Boolean }, setup(d) {
  const e2 = inject(POPPER_INJECTION_KEY, void 0)["triggerRef"];
  return useForwardRef(e2), watch(() => d.virtualRef, (A2) => {
    A2 && (e2.value = unwrapMeasurableEl(A2));
  }, { immediate: true }), watch(() => e2.value, (u2, t) => {
    u2 && u2 instanceof HTMLElement && ["onMouseenter", "onMouseleave", "onClick", "onKeydown", "onFocus", "onBlur", "onContextmenu"].forEach((A2) => {
      var e3 = d[A2];
      e3 && (u2.addEventListener(A2.slice(2).toLowerCase(), e3), null != t) && t.removeEventListener(A2.slice(2).toLowerCase(), e3);
    });
  }, { immediate: true }), { triggerRef: e2 };
} });
function _sfc_render$6(A2, e2, u2, t, d, n) {
  var r = resolveComponent("el-only-child");
  return A2.virtualTriggering ? createCommentVNode("v-if", true) : (openBlock(), createBlock(r, mergeProps({ key: 0 }, A2.$attrs, { "aria-describedby": A2.open ? A2.id : void 0 }), { default: withCtx(() => [renderSlot(A2.$slots, "default")]), _: 3 }, 16, ["aria-describedby"]));
}
var ElPopperTrigger = _export_sfc$1(_sfc_main$9, [["render", _sfc_render$6]]);
const _sfc_main$8 = defineComponent({ name: "ElPopperContent", props: usePopperContentProps, emits: ["mouseenter", "mouseleave"], setup(t) {
  const { triggerRef: A2, popperInstanceRef: d, contentRef: n } = inject(POPPER_INJECTION_KEY, void 0), r = ref(null), a2 = ref(null), o = ref(), e2 = (provide(POPPER_CONTENT_INJECTION_KEY, { arrowRef: a2, arrowOffset: o }), ref(t.zIndex || PopupManager.nextZIndex()));
  var u2 = computed(() => [{ zIndex: unref(e2) }, t.popperStyle]), c = computed(() => [{ "el-popper": true, "is-pure": t.pure, ["is-" + t.effect]: !!t.effect }, t.popperClass]);
  const i = () => {
    var A3;
    null != (A3 = unref(d)) && A3.update(), e2.value = t.zIndex || PopupManager.nextZIndex();
  };
  return onMounted(() => {
    let u3;
    watch(() => unwrapMeasurableEl(t.referenceEl) || unref(A2), (A3) => {
      var e3;
      null != u3 && u3(), A3 ? (null != (e3 = d.value) && e3.destroy(), e3 = unref(r), n.value = e3, e3 = unref(a2), e3 = (({ referenceEl: A4, popperContentEl: e4, arrowEl: u4 }) => {
        u4 = buildPopperOptions(t, { arrowEl: u4, arrowOffset: unref(o) });
        return createPopper(A4, e4, u4);
      })({ referenceEl: A3, popperContentEl: unref(r), arrowEl: e3 }), d.value = e3, u3 = watch(() => A3.getBoundingClientRect(), () => {
        i();
      }, { immediate: true })) : d.value = null;
    }, { immediate: true });
  }), { popperContentRef: r, popperInstanceRef: d, contentStyle: u2, contentClass: c, updatePopper: i };
} });
function _sfc_render$5(e2, A2, u2, t, d, n) {
  return openBlock(), createElementBlock("div", { ref: "popperContentRef", style: normalizeStyle(e2.contentStyle), class: normalizeClass(e2.contentClass), role: "tooltip", onMouseenter: A2[0] || (A2[0] = (A3) => e2.$emit("mouseenter", A3)), onMouseleave: A2[1] || (A2[1] = (A3) => e2.$emit("mouseleave", A3)) }, [renderSlot(e2.$slots, "default")], 38);
}
var ElPopperContent = _export_sfc$1(_sfc_main$8, [["render", _sfc_render$5]]);
const ElPopper = withInstall(Popper), _sfc_main$7 = defineComponent({ name: "ElVisuallyHidden", props: { style: { type: [String, Object, Array] } }, setup(A2) {
  return { computedStyle: computed(() => [A2.style, { position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" }]) };
} });
function _sfc_render$4(A2, e2, u2, t, d, n) {
  return openBlock(), createElementBlock("span", mergeProps(A2.$attrs, { style: A2.computedStyle }), null, 16);
}
var ElVisuallyHidden = _export_sfc$1(_sfc_main$7, [["render", _sfc_render$4]]);
const useTooltipContentProps = { ...useDelayedToggleProps, ...usePopperContentProps, ...buildProps({ appendTo: { type: definePropType([String, Object]), default: POPPER_CONTAINER_SELECTOR }, content: { type: String, default: "" }, rawContent: { type: Boolean, default: false }, persistent: Boolean, ariaLabel: String, visible: { type: definePropType(Boolean), default: null }, transition: { type: String, default: "el-fade-in-linear" }, teleported: { type: Boolean, default: true }, disabled: { type: Boolean } }) }, useTooltipTriggerProps = { ...usePopperTriggerProps, disabled: Boolean, trigger: { type: [String, Array], default: "hover" } }, useTooltipProps = buildProps({ openDelay: { type: Number }, visibleArrow: { type: Boolean, default: void 0 }, hideAfter: { type: Number, default: 200 }, showArrow: { type: Boolean, default: true } }), TOOLTIP_INJECTION_KEY = Symbol("elTooltip"), _sfc_main$6 = defineComponent({ name: "ElTooltipContent", components: { ElPopperContent, ElVisuallyHidden }, inheritAttrs: false, props: useTooltipContentProps, setup(e2) {
  const u2 = ref(null);
  var A2 = ref(false), t = ref(false), d = ref(false);
  const { controlled: n, id: r, open: a2, trigger: o, onClose: c, onOpen: i, onShow: f2, onHide: s } = inject(TOOLTIP_INJECTION_KEY, void 0), l = computed(() => e2.persistent);
  var B = computed(() => !!unref(l) || unref(a2)), g = computed(() => !e2.disabled && unref(a2)), p = computed(() => {
    var A3;
    return null != (A3 = e2.style) ? A3 : {};
  }), h2 = computed(() => !unref(a2)), w = (useEscapeKeydown(c), () => {
    if (unref(n))
      return true;
  }), C = composeEventHandlers(w, () => {
    e2.enterable && "hover" === unref(o) && i();
  }), w = composeEventHandlers(w, () => {
    "hover" === unref(o) && c();
  });
  let m;
  return watch(() => unref(a2), (A3) => {
    A3 ? m = onClickOutside(computed(() => {
      var A4;
      return null == (A4 = u2.value) ? void 0 : A4.popperContentRef;
    }), () => {
      unref(n) || "hover" !== unref(o) && c();
    }) : null != m && m();
  }, { flush: "post" }), { ariaHidden: h2, entering: t, leaving: d, id: r, intermediateOpen: A2, contentStyle: p, contentRef: u2, shouldRender: B, shouldShow: g, open: a2, onAfterShow: () => {
    f2();
  }, onBeforeEnter: () => {
    var A3, e3;
    null != (e3 = null == (A3 = u2.value) ? void 0 : A3.updatePopper) && e3.call(A3);
  }, onContentEnter: C, onContentLeave: w, onTransitionLeave: () => {
    s();
  } };
} });
function _sfc_render$3(A2, e2, u2, t, d, n) {
  const r = resolveComponent("el-visually-hidden"), a2 = resolveComponent("el-popper-content");
  return openBlock(), createBlock(Teleport, { disabled: !A2.teleported, to: A2.appendTo }, [createVNode(Transition, { name: A2.transition, onAfterLeave: A2.onTransitionLeave, onBeforeEnter: A2.onBeforeEnter, onAfterEnter: A2.onAfterShow }, { default: withCtx(() => [A2.shouldRender ? withDirectives((openBlock(), createBlock(a2, mergeProps({ key: 0, ref: "contentRef" }, A2.$attrs, { "aria-hidden": A2.ariaHidden, "boundaries-padding": A2.boundariesPadding, "fallback-placements": A2.fallbackPlacements, "gpu-acceleration": A2.gpuAcceleration, offset: A2.offset, placement: A2.placement, "popper-options": A2.popperOptions, strategy: A2.strategy, effect: A2.effect, enterable: A2.enterable, pure: A2.pure, "popper-class": A2.popperClass, "popper-style": [A2.popperStyle, A2.contentStyle], "reference-el": A2.referenceEl, "z-index": A2.zIndex, onMouseenter: A2.onContentEnter, onMouseleave: A2.onContentLeave }), { default: withCtx(() => [renderSlot(A2.$slots, "default"), createVNode(r, { id: A2.id, role: "tooltip" }, { default: withCtx(() => [createTextVNode(toDisplayString(A2.ariaLabel), 1)]), _: 1 }, 8, ["id"])]), _: 3 }, 16, ["aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "z-index", "onMouseenter", "onMouseleave"])), [[vShow, A2.shouldShow]]) : createCommentVNode("v-if", true)]), _: 3 }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter"])], 8, ["disabled", "to"]);
}
var ElTooltipContent = _export_sfc$1(_sfc_main$6, [["render", _sfc_render$3]]);
const isTriggerType = (A2, e2) => isArray(A2) ? A2.includes(e2) : A2 === e2, whenTrigger = (e2, u2, t) => (A2) => {
  isTriggerType(unref(e2), u2) && t(A2);
}, _sfc_main$5 = defineComponent({ name: "ElTooltipTrigger", components: { ElPopperTrigger }, props: useTooltipTriggerProps, setup(A2) {
  const { controlled: e2, id: u2, open: t, onOpen: d, onClose: n, onToggle: r } = inject(TOOLTIP_INJECTION_KEY, void 0);
  var a2 = ref(null), o = () => {
    if (unref(e2) || A2.disabled)
      return true;
  }, c = toRef(A2, "trigger"), i = composeEventHandlers(o, whenTrigger(c, "hover", d)), f2 = composeEventHandlers(o, whenTrigger(c, "hover", n)), s = composeEventHandlers(o, whenTrigger(c, "click", (A3) => {
    0 === A3.button && r(A3);
  })), l = composeEventHandlers(o, whenTrigger(c, "focus", d));
  return { onBlur: composeEventHandlers(o, whenTrigger(c, "focus", n)), onContextMenu: composeEventHandlers(o, whenTrigger(c, "contextmenu", (A3) => {
    A3.preventDefault(), r(A3);
  })), onFocus: l, onMouseenter: i, onMouseleave: f2, onClick: s, onKeydown: composeEventHandlers(o, (A3) => {
    var e3 = A3["code"];
    e3 !== EVENT_CODE.enter && e3 !== EVENT_CODE.space || r(A3);
  }), open: t, id: u2, triggerRef: a2 };
} });
function _sfc_render$2(A2, e2, u2, t, d, n) {
  var r = resolveComponent("el-popper-trigger");
  return openBlock(), createBlock(r, { id: A2.id, "virtual-ref": A2.virtualRef, open: A2.open, "virtual-triggering": A2.virtualTriggering, class: "el-tooltip__trigger", onBlur: A2.onBlur, onClick: A2.onClick, onContextmenu: A2.onContextMenu, onFocus: A2.onFocus, onMouseenter: A2.onMouseenter, onMouseleave: A2.onMouseleave, onKeydown: A2.onKeydown }, { default: withCtx(() => [renderSlot(A2.$slots, "default")]), _: 3 }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}
var ElTooltipTrigger = _export_sfc$1(_sfc_main$5, [["render", _sfc_render$2]]);
const { useModelToggleProps, useModelToggle, useModelToggleEmits } = createModelToggleComposable("visible"), _sfc_main$4 = defineComponent({ name: "ElTooltip", components: { ElPopper, ElPopperArrow, ElTooltipContent, ElTooltipTrigger }, props: { ...useModelToggleProps, ...useTooltipContentProps, ...useTooltipTriggerProps, ...usePopperArrowProps, ...useTooltipProps }, emits: [...useModelToggleEmits, "show", "hide"], setup(A2, { emit: e2 }) {
  usePopperContainer();
  var u2 = computed(() => (isUndefined(A2.openDelay), A2.openDelay || A2.showAfter)), t = computed(() => (isUndefined(A2.visibleArrow), isBool(A2.visibleArrow) ? A2.visibleArrow : A2.showArrow)), d = useId();
  const n = ref(null);
  var r = () => {
    var A3 = unref(n);
    A3 && null != (A3 = A3.popperInstanceRef) && A3.update();
  };
  const a2 = ref(false);
  var { show: o, hide: c } = useModelToggle({ indicator: a2 });
  const { onOpen: i, onClose: f2 } = useDelayedToggle({ showAfter: u2, hideAfter: toRef(A2, "hideAfter"), open: o, close: c });
  o = computed(() => isBool(A2.visible));
  return provide(TOOLTIP_INJECTION_KEY, { controlled: o, id: d, open: readonly(a2), trigger: toRef(A2, "trigger"), onOpen: i, onClose: f2, onToggle: () => {
    (unref(a2) ? f2 : i)();
  }, onShow: () => {
    e2("show");
  }, onHide: () => {
    e2("hide");
  }, updatePopper: r }), { compatShowAfter: u2, compatShowArrow: t, popperRef: n, open: a2, hide: c, updatePopper: r, onOpen: i, onClose: f2 };
} }), _hoisted_1$3 = ["innerHTML"], _hoisted_2$1 = { key: 1 };
function _sfc_render$1(A2, e2, u2, t, d, n) {
  const r = resolveComponent("el-tooltip-trigger"), a2 = resolveComponent("el-popper-arrow"), o = resolveComponent("el-tooltip-content");
  var c = resolveComponent("el-popper");
  return openBlock(), createBlock(c, { ref: "popperRef" }, { default: withCtx(() => [createVNode(r, { disabled: A2.disabled, trigger: A2.trigger, "virtual-ref": A2.virtualRef, "virtual-triggering": A2.virtualTriggering }, { default: withCtx(() => [A2.$slots.default ? renderSlot(A2.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)]), _: 3 }, 8, ["disabled", "trigger", "virtual-ref", "virtual-triggering"]), createVNode(o, { "aria-label": A2.ariaLabel, "boundaries-padding": A2.boundariesPadding, content: A2.content, disabled: A2.disabled, effect: A2.effect, enterable: A2.enterable, "fallback-placements": A2.fallbackPlacements, "hide-after": A2.hideAfter, "gpu-acceleration": A2.gpuAcceleration, offset: A2.offset, persistent: A2.persistent, "popper-class": A2.popperClass, "popper-style": A2.popperStyle, placement: A2.placement, "popper-options": A2.popperOptions, pure: A2.pure, "raw-content": A2.rawContent, "reference-el": A2.referenceEl, "show-after": A2.compatShowAfter, strategy: A2.strategy, teleported: A2.teleported, transition: A2.transition, "z-index": A2.zIndex }, { default: withCtx(() => [renderSlot(A2.$slots, "content", {}, () => [A2.rawContent ? (openBlock(), createElementBlock("span", { key: 0, innerHTML: A2.content }, null, 8, _hoisted_1$3)) : (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(A2.content), 1))]), A2.compatShowArrow ? (openBlock(), createBlock(a2, { key: 0, "arrow-offset": A2.arrowOffset }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)]), _: 3 }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "show-after", "strategy", "teleported", "transition", "z-index"])]), _: 3 }, 512);
}
var Tooltip = _export_sfc$1(_sfc_main$4, [["render", _sfc_render$1]]);
const ElTooltip = withInstall(Tooltip), usePopoverProps = { content: useTooltipContentProps.content, popperStyle: useTooltipContentProps.popperStyle, popperClass: useTooltipContentProps.popperClass, enterable: { ...useTooltipContentProps.enterable, default: true }, effect: { ...useTooltipContentProps.effect, default: "light" }, ...buildProps({ title: String, width: { type: [String, Number], default: 150 } }) }, emits = ["update:visible", "after-enter", "after-leave"], NAME = "ElPopover", _sfc_main$3 = defineComponent({ name: NAME, components: { ElTooltip }, props: usePopoverProps, emits, setup(A2, { emit: e2 }) {
  const u2 = ref(null);
  var t = computed(() => {
    var A3;
    return null == (A3 = unref(u2)) ? void 0 : A3.popperRef;
  });
  const d = computed(() => isString$1(A2.width) ? A2.width : A2.width + "px");
  var n = computed(() => [{ width: d.value }, A2.popperStyle]);
  return { kls: computed(() => [{ "el-popover--plain": !!A2.content }, "el-popover", A2.popperClass]), style: n, tooltipRef: u2, popperRef: t, hide: () => {
    var A3;
    null != (A3 = u2.value) && A3.hide();
  }, afterEnter: () => {
    e2("after-enter");
  }, afterLeave: () => {
    e2("after-leave");
  } };
} }), _hoisted_1$2 = { key: 0, class: "el-popover__title", role: "title" };
function _sfc_render(A2, e2, u2, t, d, n) {
  var r = resolveComponent("el-tooltip");
  return openBlock(), createBlock(r, mergeProps({ ref: "tooltipRef" }, A2.$attrs, { "aria-label": A2.title, effect: A2.effect, enterable: A2.enterable, "popper-class": A2.kls, "popper-style": A2.style, persistent: "", onShow: A2.afterEnter, onHide: A2.afterLeave }), { content: withCtx(() => [A2.title ? (openBlock(), createElementBlock("div", _hoisted_1$2, toDisplayString(A2.title), 1)) : createCommentVNode("v-if", true), renderSlot(A2.$slots, "default", {}, () => [createTextVNode(toDisplayString(A2.content), 1)])]), default: withCtx(() => [A2.$slots.reference ? renderSlot(A2.$slots, "reference", { key: 0 }) : createCommentVNode("v-if", true)]), _: 3 }, 16, ["aria-label", "effect", "enterable", "popper-class", "popper-style", "onShow", "onHide"]);
}
var Popover = _export_sfc$1(_sfc_main$3, [["render", _sfc_render]]);
const attachEvents = (A2, e2) => {
  e2 = e2.arg || e2.value, e2 = null == e2 ? void 0 : e2.popperRef;
  e2 && (e2.triggerRef = A2);
};
var PopoverDirective = { mounted(A2, e2) {
  attachEvents(A2, e2);
}, updated(A2, e2) {
  attachEvents(A2, e2);
} };
const VPopover = "popover", _PopoverDirective = (Popover.install = (A2) => {
  A2.component(Popover.name, Popover);
}, PopoverDirective.install = (A2) => {
  A2.directive(VPopover, PopoverDirective);
}, PopoverDirective), _Popover = (Popover.directive = _PopoverDirective, Popover), ElPopover = _Popover;
var Tool_vue_vue_type_style_index_0_scoped_true_lang = "", _export_sfc = (A2, e2) => {
  var u2, t, d = A2.__vccOpts || A2;
  for ([u2, t] of e2)
    d[u2] = t;
  return d;
};
const _hoisted_1$1 = { class: "formula-list" }, _hoisted_2 = ["onClick"], _hoisted_3 = ["src"], _hoisted_4 = ["onClick"], _hoisted_5 = ["src"], _sfc_main$2 = defineComponent({ __name: "Tool", emits: ["handleClickFormula"], setup(A2, { emit: u2 }) {
  return (A3, e2) => (openBlock(), createElementBlock("div", _hoisted_1$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), (e3) => (openBlock(), createBlock(unref(ElPopover), { key: e3.name, placement: "bottom-start", visible: e3.visibleDataList, "onUpdate:visible": (A4) => e3.visibleDataList = A4 }, { reference: withCtx(() => [createElementVNode("div", { class: "type-btn", onClick: (A4) => e3.visibleDataList = true }, [createElementVNode("img", { src: "" + unref(fontIconBaseUrl) + e3.data[0].icon + ".svg" }, null, 8, _hoisted_3), createElementVNode("span", null, toDisplayString(e3.name), 1)], 8, _hoisted_2)]), default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(e3.data, (e4) => (openBlock(), createElementBlock("div", { key: e4.name, class: "formula-item", onClick: (A4) => async function(A5) {
    u2("handleClickFormula", A5);
  }(e4) }, [createElementVNode("img", { src: "" + unref(fontIconBaseUrl) + e4.icon + ".svg" }, null, 8, _hoisted_5)], 8, _hoisted_4))), 128))]), _: 2 }, 1032, ["visible", "onUpdate:visible"]))), 128))]));
} });
var Tool = _export_sfc(_sfc_main$2, [["__scopeId", "data-v-244511e6"]]);
const REGEX_DATA$1 = "xregexp", features$1 = { astral: false, namespacing: true }, fixed$1 = {};
let regexCache$1 = {}, patternCache$1 = {};
const tokens$1 = [], defaultScope$1 = "default", classScope$1 = "class", nativeTokens$1 = { default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/, class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/ }, replacementToken$1 = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g, correctExecNpcg$1 = void 0 === /()??/.exec("")[1], hasFlagsProp$1 = void 0 !== /x/.flags;
function hasNativeFlag$1(A2) {
  let e2 = true;
  try {
    new RegExp("", A2), "y" === A2 && ".." === ".a".replace(new RegExp("a", "gy"), ".") && (e2 = false);
  } catch (A3) {
    e2 = false;
  }
  return e2;
}
const hasNativeD$1 = hasNativeFlag$1("d"), hasNativeS$1 = hasNativeFlag$1("s"), hasNativeU$1 = hasNativeFlag$1("u"), hasNativeY$1 = hasNativeFlag$1("y"), registeredFlags$1 = { d: hasNativeD$1, g: true, i: true, m: true, s: hasNativeS$1, u: hasNativeU$1, y: hasNativeY$1 }, nonnativeFlags$1 = hasNativeS$1 ? /[^dgimsuy]+/g : /[^dgimuy]+/g;
function augment$1(A2, e2, u2, t, d) {
  if (A2[REGEX_DATA$1] = { captureNames: e2 }, !d) {
    if (A2.__proto__)
      A2.__proto__ = XRegExp$1.prototype;
    else
      for (const n in XRegExp$1.prototype)
        A2[n] = XRegExp$1.prototype[n];
    A2[REGEX_DATA$1].source = u2, A2[REGEX_DATA$1].flags = t && t.split("").sort().join("");
  }
  return A2;
}
function clipDuplicates$1(A2) {
  return A2.replace(/([\s\S])(?=[\s\S]*\1)/g, "");
}
function copyRegex$1(A2, e2) {
  if (!XRegExp$1.isRegExp(A2))
    throw new TypeError("Type RegExp expected");
  var u2 = A2[REGEX_DATA$1] || {};
  let t = getNativeFlags$1(A2), d = "", n = "", r = null, a2 = null;
  return (e2 = e2 || {}).removeG && (n += "g"), e2.removeY && (n += "y"), n && (t = t.replace(new RegExp(`[${n}]+`, "g"), "")), e2.addG && (d += "g"), e2.addY && (d += "y"), d && (t = clipDuplicates$1(t + d)), e2.isInternalOnly || (void 0 !== u2.source && (r = u2.source), null != u2.flags && (a2 = d ? clipDuplicates$1(u2.flags + d) : u2.flags)), A2 = augment$1(new RegExp(e2.source || A2.source, t), hasNamedCapture$1(A2) ? u2.captureNames.slice(0) : null, r, a2, e2.isInternalOnly);
}
function dec$1(A2) {
  return parseInt(A2, 16);
}
function getContextualTokenSeparator$1(A2, e2, u2) {
  var t = A2.index + A2[0].length, d = A2.input[A2.index - 1], n = A2.input[t];
  return /^[()|]$/.test(d) || /^[()|]$/.test(n) || 0 === A2.index || t === A2.input.length || /\(\?(?:[:=!]|<[=!])$/.test(A2.input.substring(A2.index - 4, A2.index)) || isQuantifierNext$1(A2.input, t, u2) ? "" : "(?:)";
}
function getNativeFlags$1(A2) {
  return hasFlagsProp$1 ? A2.flags : /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(A2))[1];
}
function hasNamedCapture$1(A2) {
  return !(!A2[REGEX_DATA$1] || !A2[REGEX_DATA$1].captureNames);
}
function hex$1(A2) {
  return parseInt(A2, 10).toString(16);
}
function isQuantifierNext$1(A2, e2, u2) {
  var t = "\\(\\?#[^)]*\\)", d = "[?*+]|{\\d+(?:,\\d*)?}";
  return (u2.includes("x") ? new RegExp(`^(?:\\s|#[^#\\n]*|${t})*(?:${d})`) : new RegExp(`^(?:${t})*(?:${d})`)).test(A2.slice(e2));
}
function isType$1(A2, e2) {
  return Object.prototype.toString.call(A2) === `[object ${e2}]`;
}
function nullThrows$1(A2) {
  if (null == A2)
    throw new TypeError("Cannot convert null or undefined to object");
  return A2;
}
function pad4$1(A2) {
  for (; A2.length < 4; )
    A2 = "0" + A2;
  return A2;
}
function prepareFlags$1(A2, u2) {
  if (clipDuplicates$1(u2) !== u2)
    throw new SyntaxError("Invalid duplicate regex flag " + u2);
  A2 = A2.replace(/^\(\?([\w$]+)\)/, (A3, e2) => {
    if (/[dgy]/.test(e2))
      throw new SyntaxError("Cannot use flags dgy in mode modifier " + A3);
    return u2 = clipDuplicates$1(u2 + e2), "";
  });
  for (const e2 of u2)
    if (!registeredFlags$1[e2])
      throw new SyntaxError("Unknown regex flag " + e2);
  return { pattern: A2, flags: u2 };
}
function prepareOptions$1(A2) {
  const e2 = {};
  return isType$1(A2, "String") ? (XRegExp$1.forEach(A2, /[^\s,]+/, (A3) => {
    e2[A3] = true;
  }), e2) : A2;
}
function registerFlag$1(A2) {
  if (!/^[\w$]$/.test(A2))
    throw new Error("Flag must be a single character A-Za-z0-9_$");
  registeredFlags$1[A2] = true;
}
function runTokens$1(A2, e2, u2, t, d) {
  let n = tokens$1.length;
  var r, a2, o = A2[u2];
  let c = null;
  for (; n--; )
    if (!((a2 = tokens$1[n]).leadChar && a2.leadChar !== o || a2.scope !== t && "all" !== a2.scope || a2.flag && !e2.includes(a2.flag)) && (r = XRegExp$1.exec(A2, a2.regex, u2, "sticky"))) {
      c = { matchLength: r[0].length, output: a2.handler.call(d, r, t, e2), reparse: a2.reparse };
      break;
    }
  return c;
}
function setAstral$1(A2) {
  features$1.astral = A2;
}
function setNamespacing$1(A2) {
  features$1.namespacing = A2;
}
function XRegExp$1(n, r) {
  if (XRegExp$1.isRegExp(n)) {
    if (void 0 !== r)
      throw new TypeError("Cannot supply flags when copying a RegExp");
    return copyRegex$1(n);
  }
  if (n = void 0 === n ? "" : String(n), r = void 0 === r ? "" : String(r), XRegExp$1.isInstalled("astral") && !r.includes("A") && (r += "A"), patternCache$1[n] || (patternCache$1[n] = {}), !patternCache$1[n][r]) {
    var a2 = { hasNamedCapture: false, captureNames: [] };
    let A2 = defaultScope$1, e2 = "", u2 = 0, t;
    var o = prepareFlags$1(n, r);
    let d = o.pattern;
    for (var c, i = o.flags; u2 < d.length; ) {
      for (; (t = runTokens$1(d, i, u2, A2, a2)) && t.reparse && (d = d.slice(0, u2) + t.output + d.slice(u2 + t.matchLength)), t && t.reparse; )
        ;
      t ? (e2 += t.output, u2 += t.matchLength || 1) : ([c] = XRegExp$1.exec(d, nativeTokens$1[A2], u2, "sticky"), e2 += c, u2 += c.length, "[" === c && A2 === defaultScope$1 ? A2 = classScope$1 : "]" === c && A2 === classScope$1 && (A2 = defaultScope$1));
    }
    patternCache$1[n][r] = { pattern: e2.replace(/(?:\(\?:\))+/g, "(?:)"), flags: i.replace(nonnativeFlags$1, ""), captures: a2.hasNamedCapture ? a2.captureNames : null };
  }
  o = patternCache$1[n][r];
  return augment$1(new RegExp(o.pattern, o.flags), o.captures, n, r);
}
XRegExp$1.prototype = new RegExp(), XRegExp$1.version = "5.1.1", XRegExp$1._clipDuplicates = clipDuplicates$1, XRegExp$1._hasNativeFlag = hasNativeFlag$1, XRegExp$1._dec = dec$1, XRegExp$1._hex = hex$1, XRegExp$1._pad4 = pad4$1, XRegExp$1.addToken = (A2, e2, u2) => {
  let t = (u2 = u2 || {})["optionalFlags"];
  if (u2.flag && registerFlag$1(u2.flag), t)
    for (const d of t = t.split(""))
      registerFlag$1(d);
  tokens$1.push({ regex: copyRegex$1(A2, { addG: true, addY: hasNativeY$1, isInternalOnly: true }), handler: e2, scope: u2.scope || defaultScope$1, flag: u2.flag, reparse: u2.reparse, leadChar: u2.leadChar }), XRegExp$1.cache.flush("patterns");
}, XRegExp$1.cache = (A2, e2) => (regexCache$1[A2] || (regexCache$1[A2] = {}), regexCache$1[A2][e2] || (regexCache$1[A2][e2] = XRegExp$1(A2, e2))), XRegExp$1.cache.flush = (A2) => {
  "patterns" === A2 ? patternCache$1 = {} : regexCache$1 = {};
}, XRegExp$1.escape = (A2) => String(nullThrows$1(A2)).replace(/[\\\[\]{}()*+?.^$|]/g, "\\$&").replace(/[\s#\-,]/g, (A3) => "\\u" + pad4$1(hex$1(A3.charCodeAt(0)))), XRegExp$1.exec = (A2, e2, u2, t) => {
  let d = "g";
  let n = false, r;
  (a2 = hasNativeY$1 && !!(t || e2.sticky && false !== t)) ? d += "y" : t && (n = true, d += "FakeY"), e2[REGEX_DATA$1] = e2[REGEX_DATA$1] || {};
  var a2 = e2[REGEX_DATA$1][d] || (e2[REGEX_DATA$1][d] = copyRegex$1(e2, { addG: true, addY: a2, source: n ? e2.source + "|()" : void 0, removeY: false === t, isInternalOnly: true }));
  return a2.lastIndex = u2 = u2 || 0, r = fixed$1.exec.call(a2, A2), n && r && "" === r.pop() && (r = null), e2.global && (e2.lastIndex = r ? a2.lastIndex : 0), r;
}, XRegExp$1.forEach = (A2, e2, u2) => {
  let t = 0, d = -1;
  for (var n; n = XRegExp$1.exec(A2, e2, t); )
    u2(n, ++d, A2, e2), t = n.index + (n[0].length || 1);
}, XRegExp$1.globalize = (A2) => copyRegex$1(A2, { addG: true }), XRegExp$1.install = (A2) => {
  A2 = prepareOptions$1(A2), !features$1.astral && A2.astral && setAstral$1(true), !features$1.namespacing && A2.namespacing && setNamespacing$1(true);
}, XRegExp$1.isInstalled = (A2) => !!features$1[A2], XRegExp$1.isRegExp = (A2) => "[object RegExp]" === Object.prototype.toString.call(A2), XRegExp$1.match = (A2, e2, u2) => {
  var t = e2.global && "one" !== u2 || "all" === u2, d = (t ? "g" : "") + (e2.sticky ? "y" : "") || "noGY", d = (e2[REGEX_DATA$1] = e2[REGEX_DATA$1] || {}, e2[REGEX_DATA$1][d] || (e2[REGEX_DATA$1][d] = copyRegex$1(e2, { addG: !!t, removeG: "one" === u2, isInternalOnly: true }))), A2 = String(nullThrows$1(A2)).match(d);
  return e2.global && (e2.lastIndex = "one" === u2 && A2 ? A2.index + A2[0].length : 0), t ? A2 || [] : A2 && A2[0];
}, XRegExp$1.matchChain = (A2, a2) => function A3(e2, u2) {
  const t = a2[u2].regex ? a2[u2] : { regex: a2[u2] }, d = [];
  function n(A4) {
    if (t.backref) {
      var e3 = "Backreference to undefined group: " + t.backref, u3 = isNaN(t.backref);
      if (u3 && XRegExp$1.isInstalled("namespacing")) {
        if (!(A4.groups && t.backref in A4.groups))
          throw new ReferenceError(e3);
      } else if (!A4.hasOwnProperty(t.backref))
        throw new ReferenceError(e3);
      e3 = (u3 && XRegExp$1.isInstalled("namespacing") ? A4.groups : A4)[t.backref];
      d.push(e3 || "");
    } else
      d.push(A4[0]);
  }
  for (const r of e2)
    XRegExp$1.forEach(r, t.regex, n);
  return u2 !== a2.length - 1 && d.length ? A3(d, u2 + 1) : d;
}([A2], 0), XRegExp$1.replace = (A2, e2, u2, t) => {
  var d = XRegExp$1.isRegExp(e2), n = e2.global && "one" !== t || "all" === t, r = (n ? "g" : "") + (e2.sticky ? "y" : "") || "noGY";
  let a2 = e2;
  d ? (e2[REGEX_DATA$1] = e2[REGEX_DATA$1] || {}, a2 = e2[REGEX_DATA$1][r] || (e2[REGEX_DATA$1][r] = copyRegex$1(e2, { addG: !!n, removeG: "one" === t, isInternalOnly: true }))) : n && (a2 = new RegExp(XRegExp$1.escape(String(e2)), "g"));
  r = fixed$1.replace.call(nullThrows$1(A2), a2, u2);
  return d && e2.global && (e2.lastIndex = 0), r;
}, XRegExp$1.replaceEach = (A2, e2) => {
  for (const u2 of e2)
    A2 = XRegExp$1.replace(A2, u2[0], u2[1], u2[2]);
  return A2;
}, XRegExp$1.split = (A2, e2, u2) => fixed$1.split.call(nullThrows$1(A2), e2, u2), XRegExp$1.test = (A2, e2, u2, t) => !!XRegExp$1.exec(A2, e2, u2, t), XRegExp$1.uninstall = (A2) => {
  A2 = prepareOptions$1(A2), features$1.astral && A2.astral && setAstral$1(false), features$1.namespacing && A2.namespacing && setNamespacing$1(false);
}, XRegExp$1.union = (A2, e2, u2) => {
  u2 = (u2 = u2 || {}).conjunction || "or";
  let d = 0, n, r;
  function t(A3, e3, u3) {
    var t2 = r[d - n];
    if (e3) {
      if (++d, t2)
        return `(?<${t2}>`;
    } else if (u3)
      return "\\" + (+u3 + n);
    return A3;
  }
  if (!isType$1(A2, "Array") || !A2.length)
    throw new TypeError("Must provide a nonempty array of patterns to merge");
  var a2 = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, o = [];
  for (const c of A2)
    XRegExp$1.isRegExp(c) ? (n = d, r = c[REGEX_DATA$1] && c[REGEX_DATA$1].captureNames || [], o.push(XRegExp$1(c.source).source.replace(a2, t))) : o.push(XRegExp$1.escape(c));
  return XRegExp$1(o.join("none" === u2 ? "" : "|"), e2);
}, fixed$1.exec = function(A2) {
  var e2, u2 = this.lastIndex;
  const t = RegExp.prototype.exec.apply(this, arguments);
  if (t) {
    if (!correctExecNpcg$1 && 1 < t.length && t.includes("") && (e2 = copyRegex$1(this, { removeG: true, isInternalOnly: true }), String(A2).slice(t.index).replace(e2, (...e3) => {
      var u3 = e3.length;
      for (let A3 = 1; A3 < u3 - 2; ++A3)
        void 0 === e3[A3] && (t[A3] = void 0);
    })), this[REGEX_DATA$1] && this[REGEX_DATA$1].captureNames) {
      let e3 = t;
      XRegExp$1.isInstalled("namespacing") && (t.groups = /* @__PURE__ */ Object.create(null), e3 = t.groups);
      for (let A3 = 1; A3 < t.length; ++A3) {
        var d = this[REGEX_DATA$1].captureNames[A3 - 1];
        d && (e3[d] = t[A3]);
      }
    } else
      !t.groups && XRegExp$1.isInstalled("namespacing") && (t.groups = void 0);
    this.global && !t[0].length && this.lastIndex > t.index && (this.lastIndex = t.index);
  }
  return this.global || (this.lastIndex = u2), t;
}, fixed$1.test = function(A2) {
  return !!fixed$1.exec.call(this, A2);
}, fixed$1.match = function(A2) {
  var e2;
  if (XRegExp$1.isRegExp(A2)) {
    if (A2.global)
      return e2 = String.prototype.match.apply(this, arguments), A2.lastIndex = 0, e2;
  } else
    A2 = new RegExp(A2);
  return fixed$1.exec.call(A2, nullThrows$1(this));
}, fixed$1.replace = function(A2, e2) {
  var u2 = XRegExp$1.isRegExp(A2);
  let t, r, d;
  return u2 ? (A2[REGEX_DATA$1] && ({ captureNames: r } = A2[REGEX_DATA$1]), t = A2.lastIndex) : A2 += "", d = isType$1(e2, "Function") ? String(this).replace(A2, (...u3) => {
    if (r) {
      let e3;
      XRegExp$1.isInstalled("namespacing") ? (e3 = /* @__PURE__ */ Object.create(null), u3.push(e3)) : (u3[0] = new String(u3[0]), [e3] = u3);
      for (let A3 = 0; A3 < r.length; ++A3)
        r[A3] && (e3[r[A3]] = u3[A3 + 1]);
    }
    return e2(...u3);
  }) : String(nullThrows$1(this)).replace(A2, (...n) => {
    return String(e2).replace(replacementToken$1, function(A3, e3, u3, t2) {
      e3 = e3 || u3;
      u3 = isType$1(n[n.length - 1], "Object") ? 4 : 3, u3 = n.length - u3;
      if (e3) {
        if (/^\d+$/.test(e3)) {
          var d2 = +e3;
          if (d2 <= u3)
            return n[d2] || "";
        }
        d2 = r ? r.indexOf(e3) : -1;
        if (d2 < 0)
          throw new SyntaxError("Backreference to undefined group " + A3);
        return n[d2 + 1] || "";
      }
      if ("" === t2 || " " === t2)
        throw new SyntaxError("Invalid token " + A3);
      if ("&" === t2 || 0 == +t2)
        return n[0];
      if ("$" === t2)
        return "$";
      if ("`" === t2)
        return n[n.length - 1].slice(0, n[n.length - 2]);
      if ("'" === t2)
        return n[n.length - 1].slice(n[n.length - 2] + n[0].length);
      if (t2 = +t2, isNaN(t2))
        throw new SyntaxError("Invalid token " + A3);
      if (u3 < t2)
        throw new SyntaxError("Backreference to undefined group " + A3);
      return n[t2] || "";
    });
  }), u2 && (A2.global ? A2.lastIndex = 0 : A2.lastIndex = t), d;
}, fixed$1.split = function(A2, e2) {
  if (!XRegExp$1.isRegExp(A2))
    return String.prototype.split.apply(this, arguments);
  const u2 = String(this), t = [];
  var d = A2.lastIndex;
  let n = 0, r;
  return e2 = (void 0 === e2 ? -1 : e2) >>> 0, XRegExp$1.forEach(u2, A2, (A3) => {
    A3.index + A3[0].length > n && (t.push(u2.slice(n, A3.index)), 1 < A3.length && A3.index < u2.length && Array.prototype.push.apply(t, A3.slice(1)), r = A3[0].length, n = A3.index + r);
  }), n === u2.length ? A2.test("") && !r || t.push("") : t.push(u2.slice(n)), A2.lastIndex = d, t.length > e2 ? t.slice(0, e2) : t;
}, XRegExp$1.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, (A2, e2) => {
  if ("B" === A2[1] && e2 === defaultScope$1)
    return A2[0];
  throw new SyntaxError("Invalid escape " + A2[0]);
}, { scope: "all", leadChar: "\\" }), XRegExp$1.addToken(/\\u{([\dA-Fa-f]+)}/, (A2, e2, u2) => {
  var t = dec$1(A2[1]);
  if (1114111 < t)
    throw new SyntaxError("Invalid Unicode code point " + A2[0]);
  if (t <= 65535)
    return "\\u" + pad4$1(hex$1(t));
  if (hasNativeU$1 && u2.includes("u"))
    return A2[0];
  throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
}, { scope: "all", leadChar: "\\" }), XRegExp$1.addToken(/\(\?#[^)]*\)/, getContextualTokenSeparator$1, { leadChar: "(" }), XRegExp$1.addToken(/\s+|#[^\n]*\n?/, getContextualTokenSeparator$1, { flag: "x" }), hasNativeS$1 || XRegExp$1.addToken(/\./, () => "[\\s\\S]", { flag: "s", leadChar: "." }), XRegExp$1.addToken(/\\k<([^>]+)>/, function(A2) {
  var e2 = isNaN(A2[1]) ? this.captureNames.indexOf(A2[1]) + 1 : +A2[1], u2 = A2.index + A2[0].length;
  if (!e2 || e2 > this.captureNames.length)
    throw new SyntaxError("Backreference to undefined group " + A2[0]);
  return "\\" + e2 + (u2 === A2.input.length || isNaN(A2.input[u2]) ? "" : "(?:)");
}, { leadChar: "\\" }), XRegExp$1.addToken(/\\(\d+)/, function(A2, e2) {
  if (e2 === defaultScope$1 && /^[1-9]/.test(A2[1]) && +A2[1] <= this.captureNames.length || "0" === A2[1])
    return A2[0];
  throw new SyntaxError("Cannot use octal escape or backreference to undefined group " + A2[0]);
}, { scope: "all", leadChar: "\\" }), XRegExp$1.addToken(/\(\?P?<([\p{ID_Start}$_][\p{ID_Continue}$_\u200C\u200D]*)>/u, function(A2) {
  if (!XRegExp$1.isInstalled("namespacing") && ("length" === A2[1] || "__proto__" === A2[1]))
    throw new SyntaxError("Cannot use reserved word as capture name " + A2[0]);
  if (this.captureNames.includes(A2[1]))
    throw new SyntaxError("Cannot use same name for multiple groups " + A2[0]);
  return this.captureNames.push(A2[1]), this.hasNamedCapture = true, "(";
}, { leadChar: "(" }), XRegExp$1.addToken(/\((?!\?)/, function(A2, e2, u2) {
  return u2.includes("n") ? "(?:" : (this.captureNames.push(null), "(");
}, { optionalFlags: "n", leadChar: "(" });
var build$1 = (p) => {
  const h2 = "xregexp", w = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, C = p.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, w], "g", { conjunction: "or" });
  function m(A2, e2) {
    e2 = e2 ? "x" : "";
    return p.isRegExp(A2) ? A2[h2] && A2[h2].captureNames ? A2 : p(A2.source, e2) : p(A2, e2);
  }
  function t(A2) {
    return A2 instanceof RegExp ? A2 : p.escape(A2);
  }
  function d(A2, e2, u2) {
    return A2["subpattern" + u2] = e2, A2;
  }
  function n(A2, e2, u2) {
    return A2 + (e2 < u2.length - 1 ? `{{subpattern${e2}}}` : "");
  }
  p.tag = (u2) => (A2, ...e2) => {
    e2 = e2.map(t).reduce(d, {}), A2 = A2.raw.map(n).join("");
    return p.build(A2, e2, u2);
  }, p.build = (A2, e2, u2) => {
    var t2, d2, n2, r, a2 = (u2 = u2 || "").includes("x"), o = /^\(\?([\w$]+)\)/.exec(A2);
    o && (u2 = p._clipDuplicates(u2 + o[1]));
    const c = {};
    for (const g in e2)
      e2.hasOwnProperty(g) && (t2 = m(e2[g], a2), c[g] = { pattern: (d2 = t2.source, r = n2 = void 0, r = /\$(?:\(\?:\))*$/, (n2 = /^(?:\(\?:\))*\^/).test(d2) && r.test(d2) && r.test(d2.replace(/\\[\s\S]/g, "")) ? d2.replace(n2, "").replace(r, "") : d2), names: t2[h2].captureNames || [] });
    o = m(A2, a2);
    let i = 0, f2, s = 0;
    const l = [0], B = o[h2].captureNames || [];
    A2 = o.source.replace(C, (A3, e3, u3, t3, d3) => {
      const n3 = e3 || u3;
      let r2, a3, o2;
      if (n3) {
        if (!c.hasOwnProperty(n3))
          throw new ReferenceError("Undefined property " + A3);
        a3 = e3 ? (r2 = B[s], l[++s] = ++i, `(?<${r2 || n3}>`) : "(?:", f2 = i;
        u3 = c[n3].pattern.replace(w, (A4, e4, u4) => {
          if (e4) {
            if (r2 = c[n3].names[i - f2], ++i, r2)
              return `(?<${r2}>`;
          } else if (u4)
            return o2 = +u4 - 1, c[n3].names[o2] ? `\\k<${c[n3].names[o2]}>` : "\\" + (+u4 + f2);
          return A4;
        });
        return "" + a3 + u3 + ")";
      }
      if (t3) {
        if (r2 = B[s], l[++s] = ++i, r2)
          return `(?<${r2}>`;
      } else if (d3)
        return o2 = +d3 - 1, B[o2] ? `\\k<${B[o2]}>` : "\\" + l[+d3];
      return A3;
    });
    return p(A2, u2);
  };
}, matchRecursive$1 = (E2) => {
  function F2(A2, e2, u2, t) {
    return { name: A2, value: e2, start: u2, end: t };
  }
  E2.matchRecursive = (A2, e2, u2, t, d) => {
    d = d || {};
    var n = (t = t || "").includes("g"), r = t.includes("y"), a2 = t.replace(/y/g, "");
    e2 = E2(e2, a2), u2 = E2(u2, a2);
    let o, c = d["escapeChar"];
    if (c) {
      if (1 < c.length)
        throw new Error("Cannot use more than one escape character");
      c = E2.escape(c), o = new RegExp(`(?:${c}[\\S\\s]|(?:(?!${E2.union([e2, u2], "", { conjunction: "or" }).source})[^${c}])+)+`, t.replace(E2._hasNativeFlag("s") ? /[^imsu]/g : /[^imu]/g, ""));
    }
    let i = 0, f2 = 0, s = 0, l = 0, B, g, p, h2;
    for (var w = d.valueNames, C = []; ; ) {
      if (c && (s += (E2.exec(A2, o, s, "sticky") || [""])[0].length), p = E2.exec(A2, e2, s), h2 = E2.exec(A2, u2, s), p && h2 && (p.index <= h2.index ? h2 = null : p = null), p || h2)
        f2 = (p || h2).index, s = f2 + (p || h2)[0].length;
      else if (!i)
        break;
      if (r && !i && f2 > l)
        break;
      if (p)
        i || (B = f2, g = s), i += 1;
      else if (h2 && i) {
        if (!--i && (w ? (w[0] && B > l && C.push(F2(w[0], A2.slice(l, B), l, B)), w[1] && C.push(F2(w[1], A2.slice(B, g), B, g)), w[2] && C.push(F2(w[2], A2.slice(g, f2), g, f2)), w[3] && C.push(F2(w[3], A2.slice(f2, s), f2, s))) : C.push(A2.slice(g, f2)), l = s, !n))
          break;
      } else {
        var m, b, Q = d.unbalanced || "error";
        if ("skip" !== Q && "skip-lazy" !== Q)
          throw "error" === Q ? (m = h2 ? "right" : "left", b = h2 ? f2 : B, new Error(`Unbalanced ${m} delimiter found in string at position ` + b)) : new Error("Unsupported value for unbalanced: " + Q);
        h2 ? h2 = null : (s = "skip" === Q ? (m = E2.exec(A2, e2, B, "sticky")[0].length, B + (m || 1)) : B + 1, i = 0);
      }
      f2 === s && (s += 1);
    }
    return n && 0 < C.length && !r && w && w[0] && A2.length > l && C.push(F2(w[0], A2.slice(l), l, A2.length)), C;
  };
}, unicodeBase$1 = (d) => {
  const s = {}, l = {}, u2 = d._dec, n = d._hex, r = d._pad4;
  function B(A2) {
    return A2.replace(/[- _]+/g, "").toLowerCase();
  }
  function a2(A2) {
    var e2 = /^\\[xu](.+)/.exec(A2);
    return e2 ? u2(e2[1]) : A2.charCodeAt("\\" === A2[0] ? 1 : 0);
  }
  function g(A2) {
    return s[A2]["b!"] || (s[A2]["b!"] = function(A3) {
      let u3 = "", t = -1;
      return d.forEach(A3, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, (A4) => {
        var e2 = a2(A4[1]);
        e2 > t + 1 && (u3 += "\\u" + r(n(t + 1)), e2 > t + 2) && (u3 += "-\\u" + r(n(e2 - 1))), t = a2(A4[2] || A4[1]);
      }), t < 65535 && (u3 += "\\u" + r(n(t + 1)), t < 65534) && (u3 += "-\\uFFFF"), u3;
    }(s[A2].bmp));
  }
  function p(A2, e2) {
    var u3 = e2 ? "a!" : "a=";
    return s[A2][u3] || (s[A2][u3] = function(A3, e3) {
      A3 = s[A3];
      let u4 = "";
      return A3.bmp && !A3.isBmpLast && (u4 = `[${A3.bmp}]` + (A3.astral ? "|" : "")), A3.astral && (u4 += A3.astral), A3.isBmpLast && A3.bmp && (u4 += `${A3.astral ? "|" : ""}[${A3.bmp}]`), e3 ? `(?:(?!${u4})(?:[\uFFFD-\uFFFD][\uFFFD-\uFFFD]|[\0-\uFFFF]))` : `(?:${u4})`;
    }(A2, e2));
  }
  d.addToken(/\\([pP])(?:{(\^?)(?:(\w+)=)?([^}]*)}|([A-Za-z]))/, (A2, e2, u3) => {
    var t = "Unknown Unicode token ", [A2, d2, n2, r2, a3, o] = A2;
    let c = "P" === d2 || !!n2;
    u3 = u3.includes("A");
    let i = B(o || a3), f2 = s[i];
    if ("P" === d2 && n2)
      throw new SyntaxError("Invalid double negation " + A2);
    if (!s.hasOwnProperty(i))
      throw new SyntaxError(t + A2);
    if (r2 && (!l[r2] || !l[r2][i]))
      throw new SyntaxError(t + A2);
    if (f2.inverseOf) {
      if (i = B(f2.inverseOf), !s.hasOwnProperty(i))
        throw new ReferenceError("Unicode token missing data " + A2 + " -> " + f2.inverseOf);
      f2 = s[i], c = !c;
    }
    if (!f2.bmp && !u3)
      throw new SyntaxError("Astral mode required for Unicode token " + A2);
    if (u3) {
      if ("class" === e2)
        throw new SyntaxError("Astral mode does not support Unicode tokens within character classes");
      return p(i, c);
    }
    return "class" === e2 ? c ? g(i) : f2.bmp : (c ? "[^" : "[") + f2.bmp + "]";
  }, { scope: "all", optionalFlags: "A", leadChar: "\\" }), d.addUnicodeData = (A2, e2) => {
    e2 && (l[e2] = {});
    for (const t of A2) {
      if (!t.name)
        throw new Error("Unicode token requires name");
      if (!(t.inverseOf || t.bmp || t.astral))
        throw new Error("Unicode token has no character data " + t.name);
      var u3 = B(t.name);
      s[u3] = t, e2 && (l[e2][u3] = true), t.alias && (u3 = B(t.alias), s[u3] = t, e2) && (l[e2][u3] = true);
    }
    d.cache.flush("patterns");
  }, d._getUnicodeProperty = (A2) => {
    A2 = B(A2);
    return s[A2];
  };
}, categories$1 = [{ name: "C", alias: "Other", isBmpLast: true, bmp: "\0-\x7F-\x9F\xAD\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EE\u05F5-\u0605\u061C\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB\u07FC\u082E\u082F\u083F\u085C\u085D\u085F\u086B-\u086F\u088F-\u0897\u08E2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A77-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C0D\u0C11\u0C29\u0C3A\u0C3B\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C64\u0C65\u0C70-\u0C76\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDC\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u1716-\u171E\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180E\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ACF-\u1AFF\u1B4D-\u1B4F\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1C8F\u1CBB\u1CBC\u1CC8-\u1CCF\u1CFB-\u1CFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20C1-\u20CF\u20F1-\u20FF\u218C-\u218F\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u3130\u318F\u31E4-\u31EF\u321F\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA82D-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB6C-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC3-\uFBD2\uFD90\uFD91\uFDC8-\uFDCE\uFDD0-\uFDEF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF", astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCBD\uDCC3-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]" }, { name: "Cc", alias: "Control", bmp: "\0-\x7F-\x9F" }, { name: "Cf", alias: "Format", bmp: "\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB", astral: "\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]" }, { name: "Cn", alias: "Unassigned", bmp: "\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EE\u05F5-\u05FF\u070E\u074B\u074C\u07B2-\u07BF\u07FB\u07FC\u082E\u082F\u083F\u085C\u085D\u085F\u086B-\u086F\u088F\u0892-\u0897\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A77-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C0D\u0C11\u0C29\u0C3A\u0C3B\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C64\u0C65\u0C70-\u0C76\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDC\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u1716-\u171E\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ACF-\u1AFF\u1B4D-\u1B4F\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1C8F\u1CBB\u1CBC\u1CC8-\u1CCF\u1CFB-\u1CFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u2065\u2072\u2073\u208F\u209D-\u209F\u20C1-\u20CF\u20F1-\u20FF\u218C-\u218F\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u3130\u318F\u31E4-\u31EF\u321F\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA82D-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB6C-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC3-\uFBD2\uFD90\uFD91\uFDC8-\uFDCE\uFDD0-\uFDEF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD\uFEFE\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFF8\uFFFE\uFFFF", astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCC3-\uDCCC\uDCCE\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F\uDC39-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]" }, { name: "Co", alias: "Private_Use", bmp: "\uE000-\uF8FF", astral: "[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]" }, { name: "Cs", alias: "Surrogate", bmp: "\uD800-\uDFFF" }, { name: "L", alias: "Letter", bmp: "A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "LC", alias: "Cased_Letter", bmp: "A-Za-z\xB5\xC0-\xD6\xD8-\xF6\xF8-\u01BA\u01BC-\u01BF\u01C4-\u0293\u0295-\u02AF\u0370-\u0373\u0376\u0377\u037B-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0560-\u0588\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FD-\u10FF\u13A0-\u13F5\u13F8-\u13FD\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2134\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C7B\u2C7E-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA640-\uA66D\uA680-\uA69B\uA722-\uA76F\uA771-\uA787\uA78B-\uA78E\uA790-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F5\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A\uFF41-\uFF5A", astral: "\uD801[\uDC00-\uDC4F\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD806[\uDCA0-\uDCDF]|\uD81B[\uDE40-\uDE7F]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD00-\uDD43]" }, { name: "Ll", alias: "Lowercase_Letter", bmp: "a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A", astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]" }, { name: "Lm", alias: "Modifier_Letter", bmp: "\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5\u06E6\u07F4\u07F5\u07FA\u081A\u0824\u0828\u08C9\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C\uA69D\uA717-\uA71F\uA770\uA788\uA7F2-\uA7F4\uA7F8\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3\uAAF4\uAB5C-\uAB5F\uAB69\uFF70\uFF9E\uFF9F", astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD838[\uDD37-\uDD3D]|\u{1E94B}" }, { name: "Lo", alias: "Other_Letter", bmp: "\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05EF-\u05F2\u0620-\u063F\u0641-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C8\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E45\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1100-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF4A\uDF50]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\u{1DF0A}|\uD838[\uDD00-\uDD2C\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Lt", alias: "Titlecase_Letter", bmp: "\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC" }, { name: "Lu", alias: "Uppercase_Letter", bmp: "A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7D0\uA7D6\uA7D8\uA7F5\uFF21-\uFF3A", astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]" }, { name: "M", alias: "Mark", bmp: "\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F", astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]" }, { name: "Mc", alias: "Spacing_Mark", bmp: "\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BE-\u09C0\u09C7\u09C8\u09CB\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0D02\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2\u0DF3\u0F3E\u0F3F\u0F7F\u102B\u102C\u1031\u1038\u103B\u103C\u1056\u1057\u1062-\u1064\u1067-\u106D\u1083\u1084\u1087-\u108C\u108F\u109A-\u109C\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\u302E\u302F\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAA7B\uAA7D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC", astral: "\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD30-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]" }, { name: "Me", alias: "Enclosing_Mark", bmp: "\u0488\u0489\u1ABE\u20DD-\u20E0\u20E2-\u20E4\uA670-\uA672" }, { name: "Mn", alias: "Nonspacing_Mark", bmp: "\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B55\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0D81\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F", astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]" }, { name: "N", alias: "Number", bmp: "0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19", astral: "\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]" }, { name: "Nd", alias: "Decimal_Number", bmp: "0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19", astral: "\uD801[\uDCA0-\uDCA9]|\uD803[\uDD30-\uDD39]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9\uDD50-\uDD59]|\uD807[\uDC50-\uDC59\uDD50-\uDD59\uDDA0-\uDDA9]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDD50-\uDD59]|\uD83E[\uDFF0-\uDFF9]" }, { name: "Nl", alias: "Letter_Number", bmp: "\u16EE-\u16F0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303A\uA6E6-\uA6EF", astral: "\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]" }, { name: "No", alias: "Other_Number", bmp: "\xB2\xB3\xB9\xBC-\xBE\u09F4-\u09F9\u0B72-\u0B77\u0BF0-\u0BF2\u0C78-\u0C7E\u0D58-\u0D5E\u0D70-\u0D78\u0F2A-\u0F33\u1369-\u137C\u17F0-\u17F9\u19DA\u2070\u2074-\u2079\u2080-\u2089\u2150-\u215F\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA830-\uA835", astral: "\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C\uDFC0-\uDFD4]|\uD81A[\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD83A[\uDCC7-\uDCCF]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]" }, { name: "P", alias: "Punctuation", bmp: "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65", astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\u{1056F}|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\u{1BC9F}|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]" }, { name: "Pc", alias: "Connector_Punctuation", bmp: "_\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F" }, { name: "Pd", alias: "Dash_Punctuation", bmp: "\\-\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u2E5D\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D", astral: "\u{10EAD}" }, { name: "Pe", alias: "Close_Punctuation", bmp: "\\)\\]\\}\u0F3B\u0F3D\u169C\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E23\u2E25\u2E27\u2E29\u2E56\u2E58\u2E5A\u2E5C\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63" }, { name: "Pf", alias: "Final_Punctuation", bmp: "\xBB\u2019\u201D\u203A\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21" }, { name: "Pi", alias: "Initial_Punctuation", bmp: "\xAB\u2018\u201B\u201C\u201F\u2039\u2E02\u2E04\u2E09\u2E0C\u2E1C\u2E20" }, { name: "Po", alias: "Other_Punctuation", bmp: "!-#%-'\\*,\\.\\/:;\\?@\\\xA1\xA7\xB6\xB7\xBF\u037E\u0387\u055A-\u055F\u0589\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u166E\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u1805\u1807-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2016\u2017\u2020-\u2027\u2030-\u2038\u203B-\u203E\u2041-\u2043\u2047-\u2051\u2053\u2055-\u205E\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00\u2E01\u2E06-\u2E08\u2E0B\u2E0E-\u2E16\u2E18\u2E19\u2E1B\u2E1E\u2E1F\u2E2A-\u2E2E\u2E30-\u2E39\u2E3C-\u2E3F\u2E41\u2E43-\u2E4F\u2E52-\u2E54\u3001-\u3003\u303D\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFE10-\uFE16\uFE19\uFE30\uFE45\uFE46\uFE49-\uFE4C\uFE50-\uFE52\uFE54-\uFE57\uFE5F-\uFE61\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF07\uFF0A\uFF0C\uFF0E\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3C\uFF61\uFF64\uFF65", astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\u{1056F}|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\u{1BC9F}|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]" }, { name: "Ps", alias: "Open_Punctuation", bmp: "\\(\\[\\{\u0F3A\u0F3C\u169B\u201A\u201E\u2045\u207D\u208D\u2308\u230A\u2329\u2768\u276A\u276C\u276E\u2770\u2772\u2774\u27C5\u27E6\u27E8\u27EA\u27EC\u27EE\u2983\u2985\u2987\u2989\u298B\u298D\u298F\u2991\u2993\u2995\u2997\u29D8\u29DA\u29FC\u2E22\u2E24\u2E26\u2E28\u2E42\u2E55\u2E57\u2E59\u2E5B\u3008\u300A\u300C\u300E\u3010\u3014\u3016\u3018\u301A\u301D\uFD3F\uFE17\uFE35\uFE37\uFE39\uFE3B\uFE3D\uFE3F\uFE41\uFE43\uFE47\uFE59\uFE5B\uFE5D\uFF08\uFF3B\uFF5B\uFF5F\uFF62" }, { name: "S", alias: "Symbol", bmp: "\\$\\+<->\\^`\\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD", astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\u{1173F}|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\u{1BC9C}|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]" }, { name: "Sc", alias: "Currency_Symbol", bmp: "\\$\xA2-\xA5\u058F\u060B\u07FE\u07FF\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20C0\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6", astral: "\uD807[\uDFDD-\uDFE0]|\u{1E2FF}|\u{1ECB0}" }, { name: "Sk", alias: "Modifier_Symbol", bmp: "\\^`\xA8\xAF\xB4\xB8\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u0888\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u309B\u309C\uA700-\uA716\uA720\uA721\uA789\uA78A\uAB5B\uAB6A\uAB6B\uFBB2-\uFBC2\uFF3E\uFF40\uFFE3", astral: "\uD83C[\uDFFB-\uDFFF]" }, { name: "Sm", alias: "Math_Symbol", bmp: "\\+<->\\|~\xAC\xB1\xD7\xF7\u03F6\u0606-\u0608\u2044\u2052\u207A-\u207C\u208A-\u208C\u2118\u2140-\u2144\u214B\u2190-\u2194\u219A\u219B\u21A0\u21A3\u21A6\u21AE\u21CE\u21CF\u21D2\u21D4\u21F4-\u22FF\u2320\u2321\u237C\u239B-\u23B3\u23DC-\u23E1\u25B7\u25C1\u25F8-\u25FF\u266F\u27C0-\u27C4\u27C7-\u27E5\u27F0-\u27FF\u2900-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C\uFB29\uFE62\uFE64-\uFE66\uFF0B\uFF1C-\uFF1E\uFF5C\uFF5E\uFFE2\uFFE9-\uFFEC", astral: "\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]" }, { name: "So", alias: "Other_Symbol", bmp: "\xA6\xA9\xAE\xB0\u0482\u058D\u058E\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u09FA\u0B70\u0BF3-\u0BF8\u0BFA\u0C7F\u0D4F\u0D79\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116\u2117\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u214A\u214C\u214D\u214F\u218A\u218B\u2195-\u2199\u219C-\u219F\u21A1\u21A2\u21A4\u21A5\u21A7-\u21AD\u21AF-\u21CD\u21D0\u21D1\u21D3\u21D5-\u21F3\u2300-\u2307\u230C-\u231F\u2322-\u2328\u232B-\u237B\u237D-\u239A\u23B4-\u23DB\u23E2-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u25B6\u25B8-\u25C0\u25C2-\u25F7\u2600-\u266E\u2670-\u2767\u2794-\u27BF\u2800-\u28FF\u2B00-\u2B2F\u2B45\u2B46\u2B4D-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA828-\uA82B\uA836\uA837\uA839\uAA77-\uAA79\uFD40-\uFD4F\uFDCF\uFDFD-\uFDFF\uFFE4\uFFE8\uFFED\uFFEE\uFFFC\uFFFD", astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\u{1173F}|\uD807[\uDFD5-\uDFDC\uDFE1-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\u{1BC9C}|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\u{1E14F}|\uD83B[\uDCAC\uDD2E]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]" }, { name: "Z", alias: "Separator", bmp: " \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000" }, { name: "Zl", alias: "Line_Separator", bmp: "\u2028" }, { name: "Zp", alias: "Paragraph_Separator", bmp: "\u2029" }, { name: "Zs", alias: "Space_Separator", bmp: " \xA0\u1680\u2000-\u200A\u202F\u205F\u3000" }], unicodeCategories$1 = (A2) => {
  if (!A2.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
  A2.addUnicodeData(categories$1);
}, properties$1 = [{ name: "ASCII", bmp: "\0-\x7F" }, { name: "Alphabetic", bmp: "A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u065F\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06EF\u06FA-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u08D4-\u08DF\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09F0\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A70-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AF9-\u0AFC\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u103F\u1050-\u108F\u109A-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1713\u171F-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1AA7\u1ABF\u1AC0\u1ACC-\u1ACE\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4C\u1B80-\u1BA9\u1BAC-\u1BAF\u1BBA-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C36\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u24B6-\u24E9\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA805\uA807-\uA827\uA840-\uA873\uA880-\uA8C3\uA8C5\uA8F2-\uA8F7\uA8FB\uA8FD-\uA8FF\uA90A-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF\uA9E0-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA60-\uAA76\uAA7A-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC71-\uDC75\uDC82-\uDCB8\uDCC2\uDCD0-\uDCE8\uDD00-\uDD32\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE\uDDCF\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDEB8\uDF00-\uDF1A\uDF1D-\uDF2A\uDF40-\uDF46]|\uD806[\uDC00-\uDC38\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD47\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Any", isBmpLast: true, bmp: "\0-\uFFFF", astral: "[\uD800-\uDBFF][\uDC00-\uDFFF]" }, { name: "Default_Ignorable_Code_Point", bmp: "\xAD\u034F\u061C\u115F\u1160\u17B4\u17B5\u180B-\u180F\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8", astral: "\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB43][\uDC00-\uDFFF]" }, { name: "Lowercase", bmp: "a-z\xAA\xB5\xBA\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02B8\u02C0\u02C1\u02E0-\u02E4\u0345\u0371\u0373\u0377\u037A-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1DBF\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u2071\u207F\u2090-\u209C\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2170-\u217F\u2184\u24D0-\u24E9\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7D\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B-\uA69D\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7F8-\uA7FA\uAB30-\uAB5A\uAB5C-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A", astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDF80\uDF83-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]" }, { name: "Noncharacter_Code_Point", bmp: "\uFDD0-\uFDEF\uFFFE\uFFFF", astral: "[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]" }, { name: "Uppercase", bmp: "A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2160-\u216F\u2183\u24B6-\u24CF\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7D0\uA7D6\uA7D8\uA7F5\uFF21-\uFF3A", astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]" }, { name: "White_Space", bmp: "	-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000" }], unicodeProperties$1 = (A2) => {
  if (!A2.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
  var e2 = properties$1;
  e2.push({ name: "Assigned", inverseOf: "Cn" }), A2.addUnicodeData(e2);
}, scripts$1 = [{ name: "Adlam", astral: "\uD83A[\uDD00-\uDD4B\uDD50-\uDD59\uDD5E\uDD5F]" }, { name: "Ahom", astral: "\uD805[\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF46]" }, { name: "Anatolian_Hieroglyphs", astral: "\uD811[\uDC00-\uDE46]" }, { name: "Arabic", bmp: "\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC", astral: "\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]" }, { name: "Armenian", bmp: "\u0531-\u0556\u0559-\u058A\u058D-\u058F\uFB13-\uFB17" }, { name: "Avestan", astral: "\uD802[\uDF00-\uDF35\uDF39-\uDF3F]" }, { name: "Balinese", bmp: "\u1B00-\u1B4C\u1B50-\u1B7E" }, { name: "Bamum", bmp: "\uA6A0-\uA6F7", astral: "\uD81A[\uDC00-\uDE38]" }, { name: "Bassa_Vah", astral: "\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]" }, { name: "Batak", bmp: "\u1BC0-\u1BF3\u1BFC-\u1BFF" }, { name: "Bengali", bmp: "\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE" }, { name: "Bhaiksuki", astral: "\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C]" }, { name: "Bopomofo", bmp: "\u02EA\u02EB\u3105-\u312F\u31A0-\u31BF" }, { name: "Brahmi", astral: "\uD804[\uDC00-\uDC4D\uDC52-\uDC75\uDC7F]" }, { name: "Braille", bmp: "\u2800-\u28FF" }, { name: "Buginese", bmp: "\u1A00-\u1A1B\u1A1E\u1A1F" }, { name: "Buhid", bmp: "\u1740-\u1753" }, { name: "Canadian_Aboriginal", bmp: "\u1400-\u167F\u18B0-\u18F5", astral: "\uD806[\uDEB0-\uDEBF]" }, { name: "Carian", astral: "\uD800[\uDEA0-\uDED0]" }, { name: "Caucasian_Albanian", astral: "\uD801[\uDD30-\uDD63\uDD6F]" }, { name: "Chakma", astral: "\uD804[\uDD00-\uDD34\uDD36-\uDD47]" }, { name: "Cham", bmp: "\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA5C-\uAA5F" }, { name: "Cherokee", bmp: "\u13A0-\u13F5\u13F8-\u13FD\uAB70-\uABBF" }, { name: "Chorasmian", astral: "\uD803[\uDFB0-\uDFCB]" }, { name: "Common", bmp: "\0-@\\[-`\\{-\xA9\xAB-\xB9\xBB-\xBF\xD7\xF7\u02B9-\u02DF\u02E5-\u02E9\u02EC-\u02FF\u0374\u037E\u0385\u0387\u0605\u060C\u061B\u061F\u0640\u06DD\u08E2\u0964\u0965\u0E3F\u0FD5-\u0FD8\u10FB\u16EB-\u16ED\u1735\u1736\u1802\u1803\u1805\u1CD3\u1CE1\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5-\u1CF7\u1CFA\u2000-\u200B\u200E-\u2064\u2066-\u2070\u2074-\u207E\u2080-\u208E\u20A0-\u20C0\u2100-\u2125\u2127-\u2129\u212C-\u2131\u2133-\u214D\u214F-\u215F\u2189-\u218B\u2190-\u2426\u2440-\u244A\u2460-\u27FF\u2900-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2E00-\u2E5D\u2FF0-\u2FFB\u3000-\u3004\u3006\u3008-\u3020\u3030-\u3037\u303C-\u303F\u309B\u309C\u30A0\u30FB\u30FC\u3190-\u319F\u31C0-\u31E3\u3220-\u325F\u327F-\u32CF\u32FF\u3358-\u33FF\u4DC0-\u4DFF\uA700-\uA721\uA788-\uA78A\uA830-\uA839\uA92E\uA9CF\uAB5B\uAB6A\uAB6B\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFF70\uFF9E\uFF9F\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFF9-\uFFFD", astral: "\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9C\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD82F[\uDCA0-\uDCA3]|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDEE0-\uDEF3\uDF00-\uDF56\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD83B[\uDC71-\uDCB4\uDD01-\uDD3D]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDDAD\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA\uDFF0-\uDFF9]|\uDB40[\uDC01\uDC20-\uDC7F]" }, { name: "Coptic", bmp: "\u03E2-\u03EF\u2C80-\u2CF3\u2CF9-\u2CFF" }, { name: "Cuneiform", astral: "\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]" }, { name: "Cypriot", astral: "\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]" }, { name: "Cypro_Minoan", astral: "\uD80B[\uDF90-\uDFF2]" }, { name: "Cyrillic", bmp: "\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F" }, { name: "Deseret", astral: "\uD801[\uDC00-\uDC4F]" }, { name: "Devanagari", bmp: "\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF" }, { name: "Dives_Akuru", astral: "\uD806[\uDD00-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD46\uDD50-\uDD59]" }, { name: "Dogra", astral: "\uD806[\uDC00-\uDC3B]" }, { name: "Duployan", astral: "\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]" }, { name: "Egyptian_Hieroglyphs", astral: "\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E\uDC30-\uDC38]" }, { name: "Elbasan", astral: "\uD801[\uDD00-\uDD27]" }, { name: "Elymaic", astral: "\uD803[\uDFE0-\uDFF6]" }, { name: "Ethiopic", bmp: "\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E", astral: "\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]" }, { name: "Georgian", bmp: "\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u10FF\u1C90-\u1CBA\u1CBD-\u1CBF\u2D00-\u2D25\u2D27\u2D2D" }, { name: "Glagolitic", bmp: "\u2C00-\u2C5F", astral: "\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]" }, { name: "Gothic", astral: "\uD800[\uDF30-\uDF4A]" }, { name: "Grantha", astral: "\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]" }, { name: "Greek", bmp: "\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65", astral: "\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]" }, { name: "Gujarati", bmp: "\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF" }, { name: "Gunjala_Gondi", astral: "\uD807[\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9]" }, { name: "Gurmukhi", bmp: "\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76" }, { name: "Han", bmp: "\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9", astral: "\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Hangul", bmp: "\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC" }, { name: "Hanifi_Rohingya", astral: "\uD803[\uDD00-\uDD27\uDD30-\uDD39]" }, { name: "Hanunoo", bmp: "\u1720-\u1734" }, { name: "Hatran", astral: "\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]" }, { name: "Hebrew", bmp: "\u0591-\u05C7\u05D0-\u05EA\u05EF-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F" }, { name: "Hiragana", bmp: "\u3041-\u3096\u309D-\u309F", astral: "\uD82C[\uDC01-\uDD1F\uDD50-\uDD52]|\u{1F200}" }, { name: "Imperial_Aramaic", astral: "\uD802[\uDC40-\uDC55\uDC57-\uDC5F]" }, { name: "Inherited", bmp: "\u0300-\u036F\u0485\u0486\u064B-\u0655\u0670\u0951-\u0954\u1AB0-\u1ACE\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u200D\u20D0-\u20F0\u302A-\u302D\u3099\u309A\uFE00-\uFE0F\uFE20-\uFE2D", astral: "\uD800[\uDDFD\uDEE0]|\u{1133B}|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uDB40[\uDD00-\uDDEF]" }, { name: "Inscriptional_Pahlavi", astral: "\uD802[\uDF60-\uDF72\uDF78-\uDF7F]" }, { name: "Inscriptional_Parthian", astral: "\uD802[\uDF40-\uDF55\uDF58-\uDF5F]" }, { name: "Javanese", bmp: "\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF" }, { name: "Kaithi", astral: "\uD804[\uDC80-\uDCC2\uDCCD]" }, { name: "Kannada", bmp: "\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2" }, { name: "Katakana", bmp: "\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D", astral: "\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD64-\uDD67]" }, { name: "Kayah_Li", bmp: "\uA900-\uA92D\uA92F" }, { name: "Kharoshthi", astral: "\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE50-\uDE58]" }, { name: "Khitan_Small_Script", astral: "\u{16FE4}|\uD822[\uDF00-\uDFFF]|\uD823[\uDC00-\uDCD5]" }, { name: "Khmer", bmp: "\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF" }, { name: "Khojki", astral: "\uD804[\uDE00-\uDE11\uDE13-\uDE3E]" }, { name: "Khudawadi", astral: "\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]" }, { name: "Lao", bmp: "\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF" }, { name: "Latin", bmp: "A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A", astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E]" }, { name: "Lepcha", bmp: "\u1C00-\u1C37\u1C3B-\u1C49\u1C4D-\u1C4F" }, { name: "Limbu", bmp: "\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1940\u1944-\u194F" }, { name: "Linear_A", astral: "\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]" }, { name: "Linear_B", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]" }, { name: "Lisu", bmp: "\uA4D0-\uA4FF", astral: "\u{11FB0}" }, { name: "Lycian", astral: "\uD800[\uDE80-\uDE9C]" }, { name: "Lydian", astral: "\uD802[\uDD20-\uDD39\uDD3F]" }, { name: "Mahajani", astral: "\uD804[\uDD50-\uDD76]" }, { name: "Makasar", astral: "\uD807[\uDEE0-\uDEF8]" }, { name: "Malayalam", bmp: "\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F" }, { name: "Mandaic", bmp: "\u0840-\u085B\u085E" }, { name: "Manichaean", astral: "\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]" }, { name: "Marchen", astral: "\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]" }, { name: "Masaram_Gondi", astral: "\uD807[\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]" }, { name: "Medefaidrin", astral: "\uD81B[\uDE40-\uDE9A]" }, { name: "Meetei_Mayek", bmp: "\uAAE0-\uAAF6\uABC0-\uABED\uABF0-\uABF9" }, { name: "Mende_Kikakui", astral: "\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]" }, { name: "Meroitic_Cursive", astral: "\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]" }, { name: "Meroitic_Hieroglyphs", astral: "\uD802[\uDD80-\uDD9F]" }, { name: "Miao", astral: "\uD81B[\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F]" }, { name: "Modi", astral: "\uD805[\uDE00-\uDE44\uDE50-\uDE59]" }, { name: "Mongolian", bmp: "\u1800\u1801\u1804\u1806-\u1819\u1820-\u1878\u1880-\u18AA", astral: "\uD805[\uDE60-\uDE6C]" }, { name: "Mro", astral: "\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]" }, { name: "Multani", astral: "\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]" }, { name: "Myanmar", bmp: "\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F" }, { name: "Nabataean", astral: "\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]" }, { name: "Nandinagari", astral: "\uD806[\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE4]" }, { name: "New_Tai_Lue", bmp: "\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u19DE\u19DF" }, { name: "Newa", astral: "\uD805[\uDC00-\uDC5B\uDC5D-\uDC61]" }, { name: "Nko", bmp: "\u07C0-\u07FA\u07FD-\u07FF" }, { name: "Nushu", astral: "\u{16FE1}|\uD82C[\uDD70-\uDEFB]" }, { name: "Nyiakeng_Puachue_Hmong", astral: "\uD838[\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDD4F]" }, { name: "Ogham", bmp: "\u1680-\u169C" }, { name: "Ol_Chiki", bmp: "\u1C50-\u1C7F" }, { name: "Old_Hungarian", astral: "\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]" }, { name: "Old_Italic", astral: "\uD800[\uDF00-\uDF23\uDF2D-\uDF2F]" }, { name: "Old_North_Arabian", astral: "\uD802[\uDE80-\uDE9F]" }, { name: "Old_Permic", astral: "\uD800[\uDF50-\uDF7A]" }, { name: "Old_Persian", astral: "\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]" }, { name: "Old_Sogdian", astral: "\uD803[\uDF00-\uDF27]" }, { name: "Old_South_Arabian", astral: "\uD802[\uDE60-\uDE7F]" }, { name: "Old_Turkic", astral: "\uD803[\uDC00-\uDC48]" }, { name: "Old_Uyghur", astral: "\uD803[\uDF70-\uDF89]" }, { name: "Oriya", bmp: "\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B77" }, { name: "Osage", astral: "\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB]" }, { name: "Osmanya", astral: "\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]" }, { name: "Pahawh_Hmong", astral: "\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]" }, { name: "Palmyrene", astral: "\uD802[\uDC60-\uDC7F]" }, { name: "Pau_Cin_Hau", astral: "\uD806[\uDEC0-\uDEF8]" }, { name: "Phags_Pa", bmp: "\uA840-\uA877" }, { name: "Phoenician", astral: "\uD802[\uDD00-\uDD1B\uDD1F]" }, { name: "Psalter_Pahlavi", astral: "\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]" }, { name: "Rejang", bmp: "\uA930-\uA953\uA95F" }, { name: "Runic", bmp: "\u16A0-\u16EA\u16EE-\u16F8" }, { name: "Samaritan", bmp: "\u0800-\u082D\u0830-\u083E" }, { name: "Saurashtra", bmp: "\uA880-\uA8C5\uA8CE-\uA8D9" }, { name: "Sharada", astral: "\uD804[\uDD80-\uDDDF]" }, { name: "Shavian", astral: "\uD801[\uDC50-\uDC7F]" }, { name: "Siddham", astral: "\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]" }, { name: "SignWriting", astral: "\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]" }, { name: "Sinhala", bmp: "\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4", astral: "\uD804[\uDDE1-\uDDF4]" }, { name: "Sogdian", astral: "\uD803[\uDF30-\uDF59]" }, { name: "Sora_Sompeng", astral: "\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]" }, { name: "Soyombo", astral: "\uD806[\uDE50-\uDEA2]" }, { name: "Sundanese", bmp: "\u1B80-\u1BBF\u1CC0-\u1CC7" }, { name: "Syloti_Nagri", bmp: "\uA800-\uA82C" }, { name: "Syriac", bmp: "\u0700-\u070D\u070F-\u074A\u074D-\u074F\u0860-\u086A" }, { name: "Tagalog", bmp: "\u1700-\u1715\u171F" }, { name: "Tagbanwa", bmp: "\u1760-\u176C\u176E-\u1770\u1772\u1773" }, { name: "Tai_Le", bmp: "\u1950-\u196D\u1970-\u1974" }, { name: "Tai_Tham", bmp: "\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD" }, { name: "Tai_Viet", bmp: "\uAA80-\uAAC2\uAADB-\uAADF" }, { name: "Takri", astral: "\uD805[\uDE80-\uDEB9\uDEC0-\uDEC9]" }, { name: "Tamil", bmp: "\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA", astral: "\uD807[\uDFC0-\uDFF1\uDFFF]" }, { name: "Tangsa", astral: "\uD81A[\uDE70-\uDEBE\uDEC0-\uDEC9]" }, { name: "Tangut", astral: "\u{16FE0}|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEFF]|\uD823[\uDD00-\uDD08]" }, { name: "Telugu", bmp: "\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F" }, { name: "Thaana", bmp: "\u0780-\u07B1" }, { name: "Thai", bmp: "\u0E01-\u0E3A\u0E40-\u0E5B" }, { name: "Tibetan", bmp: "\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA" }, { name: "Tifinagh", bmp: "\u2D30-\u2D67\u2D6F\u2D70\u2D7F" }, { name: "Tirhuta", astral: "\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]" }, { name: "Toto", astral: "\uD838[\uDE90-\uDEAE]" }, { name: "Ugaritic", astral: "\uD800[\uDF80-\uDF9D\uDF9F]" }, { name: "Vai", bmp: "\uA500-\uA62B" }, { name: "Vithkuqi", astral: "\uD801[\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]" }, { name: "Wancho", astral: "\uD838[\uDEC0-\uDEF9\uDEFF]" }, { name: "Warang_Citi", astral: "\uD806[\uDCA0-\uDCF2\uDCFF]" }, { name: "Yezidi", astral: "\uD803[\uDE80-\uDEA9\uDEAB-\uDEAD\uDEB0\uDEB1]" }, { name: "Yi", bmp: "\uA000-\uA48C\uA490-\uA4C6" }, { name: "Zanabazar_Square", astral: "\uD806[\uDE00-\uDE47]" }], unicodeScripts$1 = (A2) => {
  if (!A2.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
  A2.addUnicodeData(scripts$1, "Script");
}, independentSignList = (build$1(XRegExp$1), matchRecursive$1(XRegExp$1), unicodeBase$1(XRegExp$1), unicodeCategories$1(XRegExp$1), unicodeProperties$1(XRegExp$1), unicodeScripts$1(XRegExp$1), ["\n", "_", "tab", "%"].concat(["because", "therefore", "angle", "cong", "sim", "parallelogram", "parallel", "perp", "circ", "nparallel", "pm", "cdot", "times", "div", "approx", "leq", "geq", "neq", "equiv", "propto", "napprox", "nl", "ng", "nleq", "ngeq", "nequiv", "sin", "cos", "tan", "cot", "sec", "csc", "arcsin", "arccos", "arctan", "arccot", "arcsec", "arccsc", "odot", "diamond", "square", "rectangle", "triangle", "Alpha", "alpha", "Beta", "beta", "Gamma", "gamma", "Theta", "theta", "Delta", "delta", "Lambda", "lambda", "Pi", "pi"])), bracketSignList = ["^", "_", "underline", "textit", "textbf"].concat(["wideparen", "sqrt", "frac"]);
const noDoubleLines = ["\n", "^"], doubleBracketSignList = ["frac"];
var lodash$1 = { exports: {} }, _$1 = (!function(I, H) {
  !function() {
    var Pn, kn = "Expected a function", hr = "__lodash_hash_undefined__", wr = "__lodash_placeholder__", Mn = 128, $n = 9007199254740991, Cr = NaN, Gn = 4294967295, mr = [["ary", Mn], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]], Vn = "[object Arguments]", br = "[object Array]", Xn = "[object Boolean]", Wn = "[object Date]", Qr = "[object Error]", Er = "[object Function]", Fr = "[object GeneratorFunction]", Jn = "[object Map]", jn = "[object Number]", Yn = "[object Object]", Ur = "[object Promise]", Zn = "[object RegExp]", zn = "[object Set]", qn = "[object String]", _r = "[object Symbol]", Ar = "[object WeakMap]", yr = "[object ArrayBuffer]", er = "[object DataView]", vr = "[object Float32Array]", Ir = "[object Float64Array]", Hr = "[object Int8Array]", Tr = "[object Int16Array]", Sr = "[object Int32Array]", xr = "[object Uint8Array]", Lr = "[object Uint8ClampedArray]", Rr = "[object Uint16Array]", Or = "[object Uint32Array]", Nr = /\b__p \+= '';/g, Kr = /\b(__p \+=) '' \+/g, Dr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Pr = /&(?:amp|lt|gt|quot|#39);/g, kr = /[&<>"']/g, Mr = RegExp(Pr.source), $r = RegExp(kr.source), Gr = /<%-([\s\S]+?)%>/g, Vr = /<%([\s\S]+?)%>/g, Xr = /<%=([\s\S]+?)%>/g, Wr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Jr = /^\w*$/, jr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yr = /[\\^$.*+?()[\]{}|]/g, Zr = RegExp(Yr.source), zr = /^\s+/, n = /\s/, qr = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Aa = /\{\n\/\* \[wrapped with (.+)\] \*/, ea = /,? & /, ua = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ta = /[()=,{}\[\]\/\s]/, da = /\\(\\)?/g, na = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ra = /\w*$/, aa = /^[-+]0x[0-9a-f]+$/i, oa = /^0b[01]+$/i, ca = /^\[object .+?Constructor\]$/, ia = /^0o[0-7]+$/i, fa = /^(?:0|[1-9]\d*)$/, sa = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, la = /($^)/, Ba = /['\n\r\u2028\u2029\\]/g, r = "\\ud800-\\udfff", a2 = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", o = "\\u2700-\\u27bf", A2 = "a-z\\xdf-\\xf6\\xf8-\\xff", e2 = "A-Z\\xc0-\\xd6\\xd8-\\xde", c = "\\ufe0e\\ufe0f", i = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", f2 = "['\u2019]", u2 = "[" + r + "]", s = "[" + i + "]", l = "[" + a2 + "]", B = "[" + o + "]", g = "[" + A2 + "]", i = "[^" + r + i + "\\d+" + o + A2 + e2 + "]", o = "\\ud83c[\\udffb-\\udfff]", A2 = "[^" + r + "]", p = "(?:\\ud83c[\\udde6-\\uddff]){2}", t = "[\\ud800-\\udbff][\\udc00-\\udfff]", e2 = "[" + e2 + "]", h2 = "\\u200d", w = "(?:" + g + "|" + i + ")", i = "(?:" + e2 + "|" + i + ")", C = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?", m = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?", b = "(?:" + l + "|" + o + ")?", Q = "[" + c + "]?", Q = Q + b + ("(?:" + h2 + "(?:" + [A2, p, t].join("|") + ")" + Q + b + ")*"), b = "(?:" + [B, p, t].join("|") + ")" + Q, B = "(?:" + [A2 + l + "?", l, p, t, u2].join("|") + ")", ga = RegExp(f2, "g"), pa = RegExp(l, "g"), E2 = RegExp(o + "(?=" + o + ")|" + B + Q, "g"), ha = RegExp([e2 + "?" + g + "+" + C + "(?=" + [s, e2, "$"].join("|") + ")", i + "+" + m + "(?=" + [s, e2 + w, "$"].join("|") + ")", e2 + "?" + w + "+" + C, e2 + "+" + m, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", b].join("|"), "g"), F2 = RegExp("[" + h2 + r + a2 + c + "]"), wa = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ca = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], ma = -1, ur = {}, tr = (ur[vr] = ur[Ir] = ur[Hr] = ur[Tr] = ur[Sr] = ur[xr] = ur[Lr] = ur[Rr] = ur[Or] = true, ur[Vn] = ur[br] = ur[yr] = ur[Xn] = ur[er] = ur[Wn] = ur[Qr] = ur[Er] = ur[Jn] = ur[jn] = ur[Yn] = ur[Zn] = ur[zn] = ur[qn] = ur[Ar] = false, {}), U2 = (tr[Vn] = tr[br] = tr[yr] = tr[er] = tr[Xn] = tr[Wn] = tr[vr] = tr[Ir] = tr[Hr] = tr[Tr] = tr[Sr] = tr[Jn] = tr[jn] = tr[Yn] = tr[Zn] = tr[zn] = tr[qn] = tr[_r] = tr[xr] = tr[Lr] = tr[Rr] = tr[Or] = true, tr[Qr] = tr[Er] = tr[Ar] = false, { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }), ba = parseFloat, Qa = parseInt, A2 = "object" == typeof commonjsGlobal$1 && commonjsGlobal$1 && commonjsGlobal$1.Object === Object && commonjsGlobal$1, p = "object" == typeof self && self && self.Object === Object && self, dr = A2 || p || Function("return this")(), t = H && !H.nodeType && H, d = t && I && !I.nodeType && I, Ea = d && d.exports === t, _2 = Ea && A2.process, u2 = function() {
      try {
        var A3 = d && d.require && d.require("util").types;
        return A3 ? A3 : _2 && _2.binding && _2.binding("util");
      } catch (A4) {
      }
    }(), Fa = u2 && u2.isArrayBuffer, Ua = u2 && u2.isDate, _a2 = u2 && u2.isMap, ya = u2 && u2.isRegExp, va = u2 && u2.isSet, Ia = u2 && u2.isTypedArray;
    function nr(A3, e3, u3) {
      switch (u3.length) {
        case 0:
          return A3.call(e3);
        case 1:
          return A3.call(e3, u3[0]);
        case 2:
          return A3.call(e3, u3[0], u3[1]);
        case 3:
          return A3.call(e3, u3[0], u3[1], u3[2]);
      }
      return A3.apply(e3, u3);
    }
    function Ha(A3, e3, u3, t2) {
      for (var d2 = -1, n2 = null == A3 ? 0 : A3.length; ++d2 < n2; ) {
        var r2 = A3[d2];
        e3(t2, r2, u3(r2), A3);
      }
      return t2;
    }
    function rr(A3, e3) {
      for (var u3 = -1, t2 = null == A3 ? 0 : A3.length; ++u3 < t2 && false !== e3(A3[u3], u3, A3); )
        ;
      return A3;
    }
    function Ta(A3, e3) {
      for (var u3 = null == A3 ? 0 : A3.length; u3-- && false !== e3(A3[u3], u3, A3); )
        ;
      return A3;
    }
    function Sa(A3, e3) {
      for (var u3 = -1, t2 = null == A3 ? 0 : A3.length; ++u3 < t2; )
        if (!e3(A3[u3], u3, A3))
          return false;
      return true;
    }
    function ar(A3, e3) {
      for (var u3 = -1, t2 = null == A3 ? 0 : A3.length, d2 = 0, n2 = []; ++u3 < t2; ) {
        var r2 = A3[u3];
        e3(r2, u3, A3) && (n2[d2++] = r2);
      }
      return n2;
    }
    function xa(A3, e3) {
      return !!(null == A3 ? 0 : A3.length) && -1 < ir(A3, e3, 0);
    }
    function La(A3, e3, u3) {
      for (var t2 = -1, d2 = null == A3 ? 0 : A3.length; ++t2 < d2; )
        if (u3(e3, A3[t2]))
          return true;
      return false;
    }
    function or(A3, e3) {
      for (var u3 = -1, t2 = null == A3 ? 0 : A3.length, d2 = Array(t2); ++u3 < t2; )
        d2[u3] = e3(A3[u3], u3, A3);
      return d2;
    }
    function cr(A3, e3) {
      for (var u3 = -1, t2 = e3.length, d2 = A3.length; ++u3 < t2; )
        A3[d2 + u3] = e3[u3];
      return A3;
    }
    function Ra(A3, e3, u3, t2) {
      var d2 = -1, n2 = null == A3 ? 0 : A3.length;
      for (t2 && n2 && (u3 = A3[++d2]); ++d2 < n2; )
        u3 = e3(u3, A3[d2], d2, A3);
      return u3;
    }
    function Oa(A3, e3, u3, t2) {
      var d2 = null == A3 ? 0 : A3.length;
      for (t2 && d2 && (u3 = A3[--d2]); d2--; )
        u3 = e3(u3, A3[d2], d2, A3);
      return u3;
    }
    function Na(A3, e3) {
      for (var u3 = -1, t2 = null == A3 ? 0 : A3.length; ++u3 < t2; )
        if (e3(A3[u3], u3, A3))
          return true;
      return false;
    }
    var y = $a("length");
    function Ka(A3, t2, e3) {
      var d2;
      return e3(A3, function(A4, e4, u3) {
        if (t2(A4, e4, u3))
          return d2 = e4, false;
      }), d2;
    }
    function Da(A3, e3, u3, t2) {
      for (var d2 = A3.length, n2 = u3 + (t2 ? 1 : -1); t2 ? n2-- : ++n2 < d2; )
        if (e3(A3[n2], n2, A3))
          return n2;
      return -1;
    }
    function ir(A3, e3, u3) {
      if (e3 != e3)
        return Da(A3, ka, u3);
      for (var t2 = A3, d2 = e3, n2 = u3 - 1, r2 = t2.length; ++n2 < r2; )
        if (t2[n2] === d2)
          return n2;
      return -1;
    }
    function Pa(A3, e3, u3, t2) {
      for (var d2 = u3 - 1, n2 = A3.length; ++d2 < n2; )
        if (t2(A3[d2], e3))
          return d2;
      return -1;
    }
    function ka(A3) {
      return A3 != A3;
    }
    function Ma(A3, e3) {
      var u3 = null == A3 ? 0 : A3.length;
      return u3 ? Va(A3, e3) / u3 : Cr;
    }
    function $a(e3) {
      return function(A3) {
        return null == A3 ? Pn : A3[e3];
      };
    }
    function v(e3) {
      return function(A3) {
        return null == e3 ? Pn : e3[A3];
      };
    }
    function Ga(A3, t2, d2, n2, e3) {
      return e3(A3, function(A4, e4, u3) {
        d2 = n2 ? (n2 = false, A4) : t2(d2, A4, e4, u3);
      }), d2;
    }
    function Va(A3, e3) {
      for (var u3, t2 = -1, d2 = A3.length; ++t2 < d2; ) {
        var n2 = e3(A3[t2]);
        n2 !== Pn && (u3 = u3 === Pn ? n2 : u3 + n2);
      }
      return u3;
    }
    function Xa(A3, e3) {
      for (var u3 = -1, t2 = Array(A3); ++u3 < A3; )
        t2[u3] = e3(u3);
      return t2;
    }
    function Wa(A3) {
      return A3 && A3.slice(0, no(A3) + 1).replace(zr, "");
    }
    function fr(e3) {
      return function(A3) {
        return e3(A3);
      };
    }
    function Ja(e3, A3) {
      return or(A3, function(A4) {
        return e3[A4];
      });
    }
    function ja(A3, e3) {
      return A3.has(e3);
    }
    function Ya(A3, e3) {
      for (var u3 = -1, t2 = A3.length; ++u3 < t2 && -1 < ir(e3, A3[u3], 0); )
        ;
      return u3;
    }
    function Za(A3, e3) {
      for (var u3 = A3.length; u3-- && -1 < ir(e3, A3[u3], 0); )
        ;
      return u3;
    }
    var za = v({ "\xC0": "A", "\xC1": "A", "\xC2": "A", "\xC3": "A", "\xC4": "A", "\xC5": "A", "\xE0": "a", "\xE1": "a", "\xE2": "a", "\xE3": "a", "\xE4": "a", "\xE5": "a", "\xC7": "C", "\xE7": "c", "\xD0": "D", "\xF0": "d", "\xC8": "E", "\xC9": "E", "\xCA": "E", "\xCB": "E", "\xE8": "e", "\xE9": "e", "\xEA": "e", "\xEB": "e", "\xCC": "I", "\xCD": "I", "\xCE": "I", "\xCF": "I", "\xEC": "i", "\xED": "i", "\xEE": "i", "\xEF": "i", "\xD1": "N", "\xF1": "n", "\xD2": "O", "\xD3": "O", "\xD4": "O", "\xD5": "O", "\xD6": "O", "\xD8": "O", "\xF2": "o", "\xF3": "o", "\xF4": "o", "\xF5": "o", "\xF6": "o", "\xF8": "o", "\xD9": "U", "\xDA": "U", "\xDB": "U", "\xDC": "U", "\xF9": "u", "\xFA": "u", "\xFB": "u", "\xFC": "u", "\xDD": "Y", "\xFD": "y", "\xFF": "y", "\xC6": "Ae", "\xE6": "ae", "\xDE": "Th", "\xFE": "th", "\xDF": "ss", "\u0100": "A", "\u0102": "A", "\u0104": "A", "\u0101": "a", "\u0103": "a", "\u0105": "a", "\u0106": "C", "\u0108": "C", "\u010A": "C", "\u010C": "C", "\u0107": "c", "\u0109": "c", "\u010B": "c", "\u010D": "c", "\u010E": "D", "\u0110": "D", "\u010F": "d", "\u0111": "d", "\u0112": "E", "\u0114": "E", "\u0116": "E", "\u0118": "E", "\u011A": "E", "\u0113": "e", "\u0115": "e", "\u0117": "e", "\u0119": "e", "\u011B": "e", "\u011C": "G", "\u011E": "G", "\u0120": "G", "\u0122": "G", "\u011D": "g", "\u011F": "g", "\u0121": "g", "\u0123": "g", "\u0124": "H", "\u0126": "H", "\u0125": "h", "\u0127": "h", "\u0128": "I", "\u012A": "I", "\u012C": "I", "\u012E": "I", "\u0130": "I", "\u0129": "i", "\u012B": "i", "\u012D": "i", "\u012F": "i", "\u0131": "i", "\u0134": "J", "\u0135": "j", "\u0136": "K", "\u0137": "k", "\u0138": "k", "\u0139": "L", "\u013B": "L", "\u013D": "L", "\u013F": "L", "\u0141": "L", "\u013A": "l", "\u013C": "l", "\u013E": "l", "\u0140": "l", "\u0142": "l", "\u0143": "N", "\u0145": "N", "\u0147": "N", "\u014A": "N", "\u0144": "n", "\u0146": "n", "\u0148": "n", "\u014B": "n", "\u014C": "O", "\u014E": "O", "\u0150": "O", "\u014D": "o", "\u014F": "o", "\u0151": "o", "\u0154": "R", "\u0156": "R", "\u0158": "R", "\u0155": "r", "\u0157": "r", "\u0159": "r", "\u015A": "S", "\u015C": "S", "\u015E": "S", "\u0160": "S", "\u015B": "s", "\u015D": "s", "\u015F": "s", "\u0161": "s", "\u0162": "T", "\u0164": "T", "\u0166": "T", "\u0163": "t", "\u0165": "t", "\u0167": "t", "\u0168": "U", "\u016A": "U", "\u016C": "U", "\u016E": "U", "\u0170": "U", "\u0172": "U", "\u0169": "u", "\u016B": "u", "\u016D": "u", "\u016F": "u", "\u0171": "u", "\u0173": "u", "\u0174": "W", "\u0175": "w", "\u0176": "Y", "\u0177": "y", "\u0178": "Y", "\u0179": "Z", "\u017B": "Z", "\u017D": "Z", "\u017A": "z", "\u017C": "z", "\u017E": "z", "\u0132": "IJ", "\u0133": "ij", "\u0152": "Oe", "\u0153": "oe", "\u0149": "'n", "\u017F": "s" }), qa = v({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
    function Ao(A3) {
      return "\\" + U2[A3];
    }
    function sr(A3) {
      return F2.test(A3);
    }
    function eo(A3) {
      var u3 = -1, t2 = Array(A3.size);
      return A3.forEach(function(A4, e3) {
        t2[++u3] = [e3, A4];
      }), t2;
    }
    function uo(e3, u3) {
      return function(A3) {
        return e3(u3(A3));
      };
    }
    function lr(A3, e3) {
      for (var u3 = -1, t2 = A3.length, d2 = 0, n2 = []; ++u3 < t2; ) {
        var r2 = A3[u3];
        r2 !== e3 && r2 !== wr || (A3[u3] = wr, n2[d2++] = u3);
      }
      return n2;
    }
    function to(A3) {
      var e3 = -1, u3 = Array(A3.size);
      return A3.forEach(function(A4) {
        u3[++e3] = A4;
      }), u3;
    }
    function Br(A3) {
      return (sr(A3) ? function(A4) {
        var e3 = E2.lastIndex = 0;
        for (; E2.test(A4); )
          ++e3;
        return e3;
      } : y)(A3);
    }
    function gr(A3) {
      return sr(A3) ? A3.match(E2) || [] : A3.split("");
    }
    function no(A3) {
      for (var e3 = A3.length; e3-- && n.test(A3.charAt(e3)); )
        ;
      return e3;
    }
    var ro = v({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" });
    var pr = function d2(A3) {
      var Q2 = (A3 = null == A3 ? dr : pr.defaults(dr.Object(), A3, pr.pick(dr, Ca))).Array, n2 = A3.Date, S = A3.Error, x = A3.Function, L2 = A3.Math, g2 = A3.Object, R = A3.RegExp, M = A3.String, E3 = A3.TypeError, $ = Q2.prototype, G = x.prototype, V2 = g2.prototype, X = A3["__core-js_shared__"], W = G.toString, O = V2.hasOwnProperty, J = 0, j = (G = /[^.]+$/.exec(X && X.keys && X.keys.IE_PROTO || "")) ? "Symbol(src)_1." + G : "", Y = V2.toString, Z2 = W.call(g2), z2 = dr._, q = R("^" + W.call(O).replace(Yr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), G = Ea ? A3.Buffer : Pn, e3 = A3.Symbol, AA = A3.Uint8Array, eA = G ? G.allocUnsafe : Pn, uA = uo(g2.getPrototypeOf, g2), tA = g2.create, dA = V2.propertyIsEnumerable, nA = $.splice, rA = e3 ? e3.isConcatSpreadable : Pn, aA = e3 ? e3.iterator : Pn, oA = e3 ? e3.toStringTag : Pn, cA = function() {
        try {
          var A4 = Zu(g2, "defineProperty");
          return A4({}, "", {}), A4;
        } catch (A5) {
        }
      }(), iA = A3.clearTimeout !== dr.clearTimeout && A3.clearTimeout, fA = n2 && n2.now !== dr.Date.now && n2.now, sA = A3.setTimeout !== dr.setTimeout && A3.setTimeout, lA = L2.ceil, BA2 = L2.floor, gA = g2.getOwnPropertySymbols, G = G ? G.isBuffer : Pn, pA = A3.isFinite, hA = $.join, wA = uo(g2.keys, g2), F3 = L2.max, U3 = L2.min, CA = n2.now, mA = A3.parseInt, bA = L2.random, QA = $.reverse, n2 = Zu(A3, "DataView"), EA = Zu(A3, "Map"), FA = Zu(A3, "Promise"), UA = Zu(A3, "Set"), A3 = Zu(A3, "WeakMap"), _A = Zu(g2, "create"), yA = A3 && new A3(), vA = {}, IA = Qt(n2), HA = Qt(EA), TA = Qt(FA), SA2 = Qt(UA), xA = Qt(A3), e3 = e3 ? e3.prototype : Pn, LA = e3 ? e3.valueOf : Pn, RA = e3 ? e3.toString : Pn;
      function B3(A4) {
        if (k(A4) && !P(A4) && !(A4 instanceof h3)) {
          if (A4 instanceof p2)
            return A4;
          if (O.call(A4, "__wrapped__"))
            return Et(A4);
        }
        return new p2(A4);
      }
      var OA = function(A4) {
        if (!b2(A4))
          return {};
        if (tA)
          return tA(A4);
        NA.prototype = A4;
        A4 = new NA();
        return NA.prototype = Pn, A4;
      };
      function NA() {
      }
      function KA() {
      }
      function p2(A4, e4) {
        this.__wrapped__ = A4, this.__actions__ = [], this.__chain__ = !!e4, this.__index__ = 0, this.__values__ = Pn;
      }
      function h3(A4) {
        this.__wrapped__ = A4, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Gn, this.__views__ = [];
      }
      function DA(A4) {
        var e4 = -1, u4 = null == A4 ? 0 : A4.length;
        for (this.clear(); ++e4 < u4; ) {
          var t3 = A4[e4];
          this.set(t3[0], t3[1]);
        }
      }
      function PA(A4) {
        var e4 = -1, u4 = null == A4 ? 0 : A4.length;
        for (this.clear(); ++e4 < u4; ) {
          var t3 = A4[e4];
          this.set(t3[0], t3[1]);
        }
      }
      function kA(A4) {
        var e4 = -1, u4 = null == A4 ? 0 : A4.length;
        for (this.clear(); ++e4 < u4; ) {
          var t3 = A4[e4];
          this.set(t3[0], t3[1]);
        }
      }
      function MA(A4) {
        var e4 = -1, u4 = null == A4 ? 0 : A4.length;
        for (this.__data__ = new kA(); ++e4 < u4; )
          this.add(A4[e4]);
      }
      function N(A4) {
        A4 = this.__data__ = new PA(A4);
        this.size = A4.size;
      }
      function $A(A4, e4) {
        var u4, t3 = P(A4), d3 = !t3 && pd(A4), n3 = !t3 && !d3 && wd(A4), r3 = !t3 && !d3 && !n3 && Id(A4), a4 = t3 || d3 || n3 || r3, o3 = a4 ? Xa(A4.length, M) : [], c3 = o3.length;
        for (u4 in A4)
          !e4 && !O.call(A4, u4) || a4 && ("length" == u4 || n3 && ("offset" == u4 || "parent" == u4) || r3 && ("buffer" == u4 || "byteLength" == u4 || "byteOffset" == u4) || tt(u4, c3)) || o3.push(u4);
        return o3;
      }
      function GA(A4) {
        var e4 = A4.length;
        return e4 ? A4[Ke(0, e4 - 1)] : Pn;
      }
      function VA(A4, e4) {
        return wt(_3(A4), Ae(e4, 0, A4.length));
      }
      function XA(A4) {
        return wt(_3(A4));
      }
      function WA(A4, e4, u4) {
        (u4 === Pn || D(A4[e4], u4)) && (u4 !== Pn || e4 in A4) || zA(A4, e4, u4);
      }
      function JA(A4, e4, u4) {
        var t3 = A4[e4];
        O.call(A4, e4) && D(t3, u4) && (u4 !== Pn || e4 in A4) || zA(A4, e4, u4);
      }
      function jA(A4, e4) {
        for (var u4 = A4.length; u4--; )
          if (D(A4[u4][0], e4))
            return u4;
        return -1;
      }
      function YA(A4, t3, d3, n3) {
        return de(A4, function(A5, e4, u4) {
          t3(n3, A5, d3(A5), u4);
        }), n3;
      }
      function ZA(A4, e4) {
        return A4 && gu(e4, I2(e4), A4);
      }
      function zA(A4, e4, u4) {
        "__proto__" == e4 && cA ? cA(A4, e4, { configurable: true, enumerable: true, value: u4, writable: true }) : A4[e4] = u4;
      }
      function qA(A4, e4) {
        for (var u4 = -1, t3 = e4.length, d3 = Q2(t3), n3 = null == A4; ++u4 < t3; )
          d3[u4] = n3 ? Pn : $d(A4, e4[u4]);
        return d3;
      }
      function Ae(A4, e4, u4) {
        return A4 = A4 == A4 && (u4 !== Pn && (A4 = A4 <= u4 ? A4 : u4), e4 !== Pn) ? e4 <= A4 ? A4 : e4 : A4;
      }
      function w2(u4, t3, d3, A4, e4, n3) {
        var r3, a4 = 1 & t3, o3 = 2 & t3, c3 = 4 & t3;
        if ((r3 = d3 ? e4 ? d3(u4, A4, e4, n3) : d3(u4) : r3) === Pn) {
          if (!b2(u4))
            return u4;
          var i3, A4 = P(u4);
          if (A4) {
            if (r3 = function(A5) {
              var e5 = A5.length, u5 = new A5.constructor(e5);
              e5 && "string" == typeof A5[0] && O.call(A5, "index") && (u5.index = A5.index, u5.input = A5.input);
              return u5;
            }(u4), !a4)
              return _3(u4, r3);
          } else {
            var f4 = K(u4), s3 = f4 == Er || f4 == Fr;
            if (wd(u4))
              return cu(u4, a4);
            if (f4 == Yn || f4 == Vn || s3 && !e4) {
              if (r3 = o3 || s3 ? {} : et(u4), !a4)
                return o3 ? (l3 = s3 = u4, l3 = (i3 = r3) && gu(l3, H4(l3), i3), gu(s3, qu(s3), l3)) : (s3 = ZA(r3, i3 = u4), gu(i3, zu(i3), s3));
            } else {
              if (!tr[f4])
                return e4 ? u4 : {};
              r3 = function(A5, e5, u5) {
                var t4 = A5.constructor;
                switch (e5) {
                  case yr:
                    return iu(A5);
                  case Xn:
                  case Wn:
                    return new t4(+A5);
                  case er:
                    return function(A6, e6) {
                      e6 = e6 ? iu(A6.buffer) : A6.buffer;
                      return new A6.constructor(e6, A6.byteOffset, A6.byteLength);
                    }(A5, u5);
                  case vr:
                  case Ir:
                  case Hr:
                  case Tr:
                  case Sr:
                  case xr:
                  case Lr:
                  case Rr:
                  case Or:
                    return fu(A5, u5);
                  case Jn:
                    return new t4();
                  case jn:
                  case qn:
                    return new t4(A5);
                  case Zn:
                    return function(A6) {
                      var e6 = new A6.constructor(A6.source, ra.exec(A6));
                      return e6.lastIndex = A6.lastIndex, e6;
                    }(A5);
                  case zn:
                    return new t4();
                  case _r:
                    return function(A6) {
                      return LA ? g2(LA.call(A6)) : {};
                    }(A5);
                }
              }(u4, f4, a4);
            }
          }
          var l3 = (n3 = n3 || new N()).get(u4);
          if (l3)
            return l3;
          n3.set(u4, r3), yd(u4) ? u4.forEach(function(A5) {
            r3.add(w2(A5, t3, d3, A5, u4, n3));
          }) : Ed(u4) && u4.forEach(function(A5, e5) {
            r3.set(e5, w2(A5, t3, d3, e5, u4, n3));
          });
          var B4 = A4 ? Pn : (c3 ? o3 ? Vu : Gu : o3 ? H4 : I2)(u4);
          rr(B4 || u4, function(A5, e5) {
            B4 && (A5 = u4[e5 = A5]), JA(r3, e5, w2(A5, t3, d3, e5, u4, n3));
          });
        }
        return r3;
      }
      function ee(A4, e4, u4) {
        var t3 = u4.length;
        if (null == A4)
          return !t3;
        for (A4 = g2(A4); t3--; ) {
          var d3 = u4[t3], n3 = e4[d3], r3 = A4[d3];
          if (r3 === Pn && !(d3 in A4) || !n3(r3))
            return false;
        }
        return true;
      }
      function ue(A4, e4, u4) {
        if ("function" != typeof A4)
          throw new E3(kn);
        return Bt(function() {
          A4.apply(Pn, u4);
        }, e4);
      }
      function te(A4, e4, u4, t3) {
        var d3 = -1, n3 = xa, r3 = true, a4 = A4.length, o3 = [], c3 = e4.length;
        if (a4) {
          u4 && (e4 = or(e4, fr(u4))), t3 ? (n3 = La, r3 = false) : 200 <= e4.length && (n3 = ja, r3 = false, e4 = new MA(e4));
          A:
            for (; ++d3 < a4; ) {
              var i3 = A4[d3], f4 = null == u4 ? i3 : u4(i3), i3 = t3 || 0 !== i3 ? i3 : 0;
              if (r3 && f4 == f4) {
                for (var s3 = c3; s3--; )
                  if (e4[s3] === f4)
                    continue A;
                o3.push(i3);
              } else
                n3(e4, f4, t3) || o3.push(i3);
            }
        }
        return o3;
      }
      B3.templateSettings = { escape: Gr, evaluate: Vr, interpolate: Xr, variable: "", imports: { _: B3 } }, (B3.prototype = KA.prototype).constructor = B3, (p2.prototype = OA(KA.prototype)).constructor = p2, (h3.prototype = OA(KA.prototype)).constructor = h3, DA.prototype.clear = function() {
        this.__data__ = _A ? _A(null) : {}, this.size = 0;
      }, DA.prototype.delete = function(A4) {
        return A4 = this.has(A4) && delete this.__data__[A4], this.size -= A4 ? 1 : 0, A4;
      }, DA.prototype.get = function(A4) {
        var e4, u4 = this.__data__;
        return _A ? (e4 = u4[A4]) === hr ? Pn : e4 : O.call(u4, A4) ? u4[A4] : Pn;
      }, DA.prototype.has = function(A4) {
        var e4 = this.__data__;
        return _A ? e4[A4] !== Pn : O.call(e4, A4);
      }, DA.prototype.set = function(A4, e4) {
        var u4 = this.__data__;
        return this.size += this.has(A4) ? 0 : 1, u4[A4] = _A && e4 === Pn ? hr : e4, this;
      }, PA.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, PA.prototype.delete = function(A4) {
        var e4 = this.__data__;
        return !((A4 = jA(e4, A4)) < 0 || (A4 == e4.length - 1 ? e4.pop() : nA.call(e4, A4, 1), --this.size, 0));
      }, PA.prototype.get = function(A4) {
        var e4 = this.__data__;
        return (A4 = jA(e4, A4)) < 0 ? Pn : e4[A4][1];
      }, PA.prototype.has = function(A4) {
        return -1 < jA(this.__data__, A4);
      }, PA.prototype.set = function(A4, e4) {
        var u4 = this.__data__, t3 = jA(u4, A4);
        return t3 < 0 ? (++this.size, u4.push([A4, e4])) : u4[t3][1] = e4, this;
      }, kA.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new DA(), map: new (EA || PA)(), string: new DA() };
      }, kA.prototype.delete = function(A4) {
        return A4 = ju(this, A4).delete(A4), this.size -= A4 ? 1 : 0, A4;
      }, kA.prototype.get = function(A4) {
        return ju(this, A4).get(A4);
      }, kA.prototype.has = function(A4) {
        return ju(this, A4).has(A4);
      }, kA.prototype.set = function(A4, e4) {
        var u4 = ju(this, A4), t3 = u4.size;
        return u4.set(A4, e4), this.size += u4.size == t3 ? 0 : 1, this;
      }, MA.prototype.add = MA.prototype.push = function(A4) {
        return this.__data__.set(A4, hr), this;
      }, MA.prototype.has = function(A4) {
        return this.__data__.has(A4);
      }, N.prototype.clear = function() {
        this.__data__ = new PA(), this.size = 0;
      }, N.prototype.delete = function(A4) {
        var e4 = this.__data__, A4 = e4.delete(A4);
        return this.size = e4.size, A4;
      }, N.prototype.get = function(A4) {
        return this.__data__.get(A4);
      }, N.prototype.has = function(A4) {
        return this.__data__.has(A4);
      }, N.prototype.set = function(A4, e4) {
        var u4 = this.__data__;
        if (u4 instanceof PA) {
          var t3 = u4.__data__;
          if (!EA || t3.length < 199)
            return t3.push([A4, e4]), this.size = ++u4.size, this;
          u4 = this.__data__ = new kA(t3);
        }
        return u4.set(A4, e4), this.size = u4.size, this;
      };
      var de = wu(fe), ne = wu(se, true);
      function re(A4, t3) {
        var d3 = true;
        return de(A4, function(A5, e4, u4) {
          return d3 = !!t3(A5, e4, u4);
        }), d3;
      }
      function ae(A4, e4, u4) {
        for (var t3 = -1, d3 = A4.length; ++t3 < d3; ) {
          var n3, r3, a4 = A4[t3], o3 = e4(a4);
          null != o3 && (n3 === Pn ? o3 == o3 && !C2(o3) : u4(o3, n3)) && (n3 = o3, r3 = a4);
        }
        return r3;
      }
      function oe(A4, t3) {
        var d3 = [];
        return de(A4, function(A5, e4, u4) {
          t3(A5, e4, u4) && d3.push(A5);
        }), d3;
      }
      function o2(A4, e4, u4, t3, d3) {
        var n3 = -1, r3 = A4.length;
        for (u4 = u4 || ut, d3 = d3 || []; ++n3 < r3; ) {
          var a4 = A4[n3];
          0 < e4 && u4(a4) ? 1 < e4 ? o2(a4, e4 - 1, u4, t3, d3) : cr(d3, a4) : t3 || (d3[d3.length] = a4);
        }
        return d3;
      }
      var ce = Cu(), ie = Cu(true);
      function fe(A4, e4) {
        return A4 && ce(A4, e4, I2);
      }
      function se(A4, e4) {
        return A4 && ie(A4, e4, I2);
      }
      function le(e4, A4) {
        return ar(A4, function(A5) {
          return md(e4[A5]);
        });
      }
      function Be(A4, e4) {
        for (var u4 = 0, t3 = (e4 = nu(e4, A4)).length; null != A4 && u4 < t3; )
          A4 = A4[bt(e4[u4++])];
        return u4 && u4 == t3 ? A4 : Pn;
      }
      function ge(A4, e4, u4) {
        e4 = e4(A4);
        return P(A4) ? e4 : cr(e4, u4(A4));
      }
      function u3(A4) {
        if (null == A4)
          return A4 === Pn ? "[object Undefined]" : "[object Null]";
        if (oA && oA in g2(A4)) {
          var e4 = A4, u4 = O.call(e4, oA), t3 = e4[oA];
          try {
            e4[oA] = Pn;
            var d3 = true;
          } catch (A5) {
          }
          var n3 = Y.call(e4);
          return d3 && (u4 ? e4[oA] = t3 : delete e4[oA]), n3;
        }
        return Y.call(A4);
      }
      function pe(A4, e4) {
        return e4 < A4;
      }
      function he(A4, e4) {
        return null != A4 && O.call(A4, e4);
      }
      function we(A4, e4) {
        return null != A4 && e4 in g2(A4);
      }
      function Ce(A4, e4, u4) {
        for (var t3 = u4 ? La : xa, d3 = A4[0].length, n3 = A4.length, r3 = n3, a4 = Q2(n3), o3 = 1 / 0, c3 = []; r3--; ) {
          var i3 = A4[r3];
          r3 && e4 && (i3 = or(i3, fr(e4))), o3 = U3(i3.length, o3), a4[r3] = !u4 && (e4 || 120 <= d3 && 120 <= i3.length) ? new MA(r3 && i3) : Pn;
        }
        var i3 = A4[0], f4 = -1, s3 = a4[0];
        A:
          for (; ++f4 < d3 && c3.length < o3; ) {
            var l3 = i3[f4], B4 = e4 ? e4(l3) : l3, l3 = u4 || 0 !== l3 ? l3 : 0;
            if (!(s3 ? ja(s3, B4) : t3(c3, B4, u4))) {
              for (r3 = n3; --r3; ) {
                var g3 = a4[r3];
                if (!(g3 ? ja(g3, B4) : t3(A4[r3], B4, u4)))
                  continue A;
              }
              s3 && s3.push(B4), c3.push(l3);
            }
          }
        return c3;
      }
      function me(A4, e4, u4) {
        e4 = null == (A4 = ft(A4, e4 = nu(e4, A4))) ? A4 : A4[bt(t2(e4))];
        return null == e4 ? Pn : nr(e4, A4, u4);
      }
      function be(A4) {
        return k(A4) && u3(A4) == Vn;
      }
      function Qe(A4, e4, u4, t3, d3) {
        if (A4 === e4)
          return true;
        if (null == A4 || null == e4 || !k(A4) && !k(e4))
          return A4 != A4 && e4 != e4;
        var n3 = Qe, r3 = P(A4), a4 = P(e4), o3 = r3 ? br : K(A4), a4 = a4 ? br : K(e4), c3 = (o3 = o3 == Vn ? Yn : o3) == Yn, i3 = (a4 = a4 == Vn ? Yn : a4) == Yn;
        if ((a4 = o3 == a4) && wd(A4)) {
          if (!wd(e4))
            return false;
          c3 = !(r3 = true);
        }
        if (a4 && !c3) {
          d3 = d3 || new N();
          if (r3 || Id(A4))
            return Mu(A4, e4, u4, t3, n3, d3);
          else {
            var f4 = A4;
            var s3 = e4;
            var l3 = o3;
            var B4 = u4;
            var g3 = t3;
            var p3 = n3;
            var h4 = d3;
            switch (l3) {
              case er:
                if (f4.byteLength != s3.byteLength || f4.byteOffset != s3.byteOffset)
                  return false;
                f4 = f4.buffer, s3 = s3.buffer;
              case yr:
                return f4.byteLength == s3.byteLength && p3(new AA(f4), new AA(s3)) ? true : false;
              case Xn:
              case Wn:
              case jn:
                return D(+f4, +s3);
              case Qr:
                return f4.name == s3.name && f4.message == s3.message;
              case Zn:
              case qn:
                return f4 == s3 + "";
              case Jn:
                var w3 = eo;
              case zn:
                var C3 = 1 & B4;
                if (w3 = w3 || to, f4.size != s3.size && !C3)
                  return false;
                C3 = h4.get(f4);
                if (C3)
                  return C3 == s3;
                B4 |= 2, h4.set(f4, s3);
                C3 = Mu(w3(f4), w3(s3), B4, g3, p3, h4);
                return h4.delete(f4), C3;
              case _r:
                if (LA)
                  return LA.call(f4) == LA.call(s3);
            }
            return false;
            return;
          }
        }
        if (!(1 & u4)) {
          r3 = c3 && O.call(A4, "__wrapped__"), o3 = i3 && O.call(e4, "__wrapped__");
          if (r3 || o3)
            return c3 = r3 ? A4.value() : A4, i3 = o3 ? e4.value() : e4, d3 = d3 || new N(), n3(c3, i3, u4, t3, d3);
        }
        if (a4) {
          d3 = d3 || new N();
          var m3 = A4, b3 = e4, Q3 = u4, E4 = t3, F4 = n3, U4 = d3, _4 = 1 & Q3, y3 = Gu(m3), v3 = y3.length, r3 = Gu(b3).length;
          if (v3 != r3 && !_4)
            return false;
          for (var I3 = v3; I3--; ) {
            var H5 = y3[I3];
            if (!(_4 ? H5 in b3 : O.call(b3, H5)))
              return false;
          }
          r3 = U4.get(m3), o3 = U4.get(b3);
          if (r3 && o3)
            return r3 == b3 && o3 == m3;
          for (var T3 = true, S2 = (U4.set(m3, b3), U4.set(b3, m3), _4); ++I3 < v3; ) {
            H5 = y3[I3];
            var x2, L3 = m3[H5], R2 = b3[H5];
            if (!((x2 = E4 ? _4 ? E4(R2, L3, H5, b3, m3, U4) : E4(L3, R2, H5, m3, b3, U4) : x2) === Pn ? L3 === R2 || F4(L3, R2, Q3, E4, U4) : x2)) {
              T3 = false;
              break;
            }
            S2 = S2 || "constructor" == H5;
          }
          return T3 && !S2 && (r3 = m3.constructor, o3 = b3.constructor, r3 != o3) && "constructor" in m3 && "constructor" in b3 && !("function" == typeof r3 && r3 instanceof r3 && "function" == typeof o3 && o3 instanceof o3) && (T3 = false), U4.delete(m3), U4.delete(b3), T3;
        }
        return false;
      }
      function Ee(A4, e4, u4, t3) {
        var d3 = u4.length, n3 = d3, r3 = !t3;
        if (null == A4)
          return !n3;
        for (A4 = g2(A4); d3--; ) {
          var a4 = u4[d3];
          if (r3 && a4[2] ? a4[1] !== A4[a4[0]] : !(a4[0] in A4))
            return false;
        }
        for (; ++d3 < n3; ) {
          var o3 = (a4 = u4[d3])[0], c3 = A4[o3], i3 = a4[1];
          if (r3 && a4[2]) {
            if (c3 === Pn && !(o3 in A4))
              return false;
          } else {
            var f4, s3 = new N();
            if (!((f4 = t3 ? t3(c3, i3, o3, A4, e4, s3) : f4) === Pn ? Qe(i3, c3, 3, t3, s3) : f4))
              return false;
          }
        }
        return true;
      }
      function Fe(A4) {
        var e4;
        return !(!b2(A4) || (e4 = A4, j && j in e4)) && (md(A4) ? q : ca).test(Qt(A4));
      }
      function Ue(A4) {
        return "function" == typeof A4 ? A4 : null == A4 ? T2 : "object" == typeof A4 ? P(A4) ? Te(A4[0], A4[1]) : He(A4) : yn(A4);
      }
      function _e(A4) {
        if (!at(A4))
          return wA(A4);
        var e4, u4 = [];
        for (e4 in g2(A4))
          O.call(A4, e4) && "constructor" != e4 && u4.push(e4);
        return u4;
      }
      function ye(A4) {
        if (!b2(A4)) {
          var e4 = A4, u4 = [];
          if (null != e4)
            for (var t3 in g2(e4))
              u4.push(t3);
          return u4;
        }
        var d3, n3 = at(A4), r3 = [];
        for (d3 in A4)
          ("constructor" != d3 || !n3 && O.call(A4, d3)) && r3.push(d3);
        return r3;
      }
      function ve(A4, e4) {
        return A4 < e4;
      }
      function Ie(A4, t3) {
        var d3 = -1, n3 = i2(A4) ? Q2(A4.length) : [];
        return de(A4, function(A5, e4, u4) {
          n3[++d3] = t3(A5, e4, u4);
        }), n3;
      }
      function He(e4) {
        var u4 = Yu(e4);
        return 1 == u4.length && u4[0][2] ? ct(u4[0][0], u4[0][1]) : function(A4) {
          return A4 === e4 || Ee(A4, e4, u4);
        };
      }
      function Te(u4, t3) {
        return dt(u4) && ot(t3) ? ct(bt(u4), t3) : function(A4) {
          var e4 = $d(A4, u4);
          return e4 === Pn && e4 === t3 ? Gd(A4, u4) : Qe(t3, e4, 3);
        };
      }
      function Se(g3, p3, h4, w3, C3) {
        g3 !== p3 && ce(p3, function(A4, e4) {
          var u4, t3, d3, n3, r3, a4, o3, c3, i3, f4, s3, l3, B4;
          C3 = C3 || new N(), b2(A4) ? (t3 = p3, n3 = h4, r3 = Se, a4 = w3, o3 = C3, s3 = st(u4 = g3, d3 = e4), l3 = st(t3, d3), (B4 = o3.get(l3)) ? WA(u4, d3, B4) : (B4 = a4 ? a4(s3, l3, d3 + "", u4, t3, o3) : Pn, (t3 = B4 === Pn) && (c3 = P(l3), i3 = !c3 && wd(l3), f4 = !c3 && !i3 && Id(l3), B4 = l3, c3 || i3 || f4 ? B4 = P(s3) ? s3 : m2(s3) ? _3(s3) : i3 ? cu(l3, !(t3 = false)) : f4 ? fu(l3, !(t3 = false)) : [] : Ud(l3) || pd(l3) ? pd(B4 = s3) ? B4 = Rd(s3) : b2(s3) && !md(s3) || (B4 = et(l3)) : t3 = false), t3 && (o3.set(l3, B4), r3(B4, l3, n3, a4, o3), o3.delete(l3)), WA(u4, d3, B4))) : (c3 = w3 ? w3(st(g3, e4), A4, e4 + "", g3, p3, C3) : Pn, WA(g3, e4, c3 = c3 === Pn ? A4 : c3));
        }, H4);
      }
      function xe(A4, e4) {
        var u4 = A4.length;
        if (u4)
          return tt(e4 += e4 < 0 ? u4 : 0, u4) ? A4[e4] : Pn;
      }
      function Le(A4, t3, i3) {
        t3 = t3.length ? or(t3, function(e5) {
          return P(e5) ? function(A5) {
            return Be(A5, 1 === e5.length ? e5[0] : e5);
          } : e5;
        }) : [T2];
        var d3 = -1;
        t3 = or(t3, fr(f3()));
        var e4 = Ie(A4, function(e5, A5, u5) {
          return { criteria: or(t3, function(A6) {
            return A6(e5);
          }), index: ++d3, value: e5 };
        }), A4 = function(A5, e5) {
          for (var u5 = i3, t4 = -1, d4 = A5.criteria, n3 = e5.criteria, r3 = d4.length, a4 = u5.length; ++t4 < r3; ) {
            var o3, c3 = su(d4[t4], n3[t4]);
            if (c3)
              return a4 <= t4 ? c3 : (o3 = u5[t4], c3 * ("desc" == o3 ? -1 : 1));
          }
          return A5.index - e5.index;
        }, u4 = e4.length;
        for (e4.sort(A4); u4--; )
          e4[u4] = e4[u4].value;
        return e4;
      }
      function Re(A4, e4, u4) {
        for (var t3 = -1, d3 = e4.length, n3 = {}; ++t3 < d3; ) {
          var r3 = e4[t3], a4 = Be(A4, r3);
          u4(a4, r3) && Me(n3, nu(r3, A4), a4);
        }
        return n3;
      }
      function Oe(A4, e4, u4, t3) {
        var d3 = t3 ? Pa : ir, n3 = -1, r3 = e4.length, a4 = A4;
        for (A4 === e4 && (e4 = _3(e4)), u4 && (a4 = or(A4, fr(u4))); ++n3 < r3; )
          for (var o3 = 0, c3 = e4[n3], i3 = u4 ? u4(c3) : c3; -1 < (o3 = d3(a4, i3, o3, t3)); )
            a4 !== A4 && nA.call(a4, o3, 1), nA.call(A4, o3, 1);
        return A4;
      }
      function Ne(A4, e4) {
        for (var u4 = A4 ? e4.length : 0, t3 = u4 - 1; u4--; ) {
          var d3, n3 = e4[u4];
          u4 != t3 && n3 === d3 || (tt(d3 = n3) ? nA.call(A4, n3, 1) : Ze(A4, n3));
        }
      }
      function Ke(A4, e4) {
        return A4 + BA2(bA() * (e4 - A4 + 1));
      }
      function De(A4, e4) {
        var u4 = "";
        if (!(!A4 || e4 < 1 || $n < e4))
          for (; e4 % 2 && (u4 += A4), (e4 = BA2(e4 / 2)) && (A4 += A4), e4; )
            ;
        return u4;
      }
      function r2(A4, e4) {
        return gt(it(A4, e4, T2), A4 + "");
      }
      function Pe(A4) {
        return GA(en(A4));
      }
      function ke(A4, e4) {
        A4 = en(A4);
        return wt(A4, Ae(e4, 0, A4.length));
      }
      function Me(A4, e4, u4, t3) {
        if (b2(A4))
          for (var d3 = -1, n3 = (e4 = nu(e4, A4)).length, r3 = n3 - 1, a4 = A4; null != a4 && ++d3 < n3; ) {
            var o3, c3 = bt(e4[d3]), i3 = u4;
            if ("__proto__" === c3 || "constructor" === c3 || "prototype" === c3)
              return A4;
            JA(a4, c3, i3 = d3 != r3 && (o3 = a4[c3], (i3 = t3 ? t3(o3, c3, a4) : Pn) === Pn) ? b2(o3) ? o3 : tt(e4[d3 + 1]) ? [] : {} : i3), a4 = a4[c3];
          }
        return A4;
      }
      var $e = yA ? function(A4, e4) {
        return yA.set(A4, e4), A4;
      } : T2, e3 = cA ? function(A4, e4) {
        return cA(A4, "toString", { configurable: true, enumerable: false, value: pn(e4), writable: true });
      } : T2;
      function Ge(A4) {
        return wt(en(A4));
      }
      function a3(A4, e4, u4) {
        for (var t3 = -1, d3 = A4.length, n3 = ((u4 = d3 < u4 ? d3 : u4) < 0 && (u4 += d3), d3 = u4 < (e4 = e4 < 0 ? d3 < -e4 ? 0 : d3 + e4 : e4) ? 0 : u4 - e4 >>> 0, e4 >>>= 0, Q2(d3)); ++t3 < d3; )
          n3[t3] = A4[t3 + e4];
        return n3;
      }
      function Ve(A4, t3) {
        var d3;
        return de(A4, function(A5, e4, u4) {
          return !(d3 = t3(A5, e4, u4));
        }), !!d3;
      }
      function Xe(A4, e4, u4) {
        var t3 = 0, d3 = null == A4 ? t3 : A4.length;
        if ("number" == typeof e4 && e4 == e4 && d3 <= 2147483647) {
          for (; t3 < d3; ) {
            var n3 = t3 + d3 >>> 1, r3 = A4[n3];
            null !== r3 && !C2(r3) && (u4 ? r3 <= e4 : r3 < e4) ? t3 = 1 + n3 : d3 = n3;
          }
          return d3;
        }
        return We(A4, e4, T2, u4);
      }
      function We(A4, e4, u4, t3) {
        var d3 = 0, n3 = null == A4 ? 0 : A4.length;
        if (0 === n3)
          return 0;
        for (var r3 = (e4 = u4(e4)) != e4, a4 = null === e4, o3 = C2(e4), c3 = e4 === Pn; d3 < n3; ) {
          var i3 = BA2((d3 + n3) / 2), f4 = u4(A4[i3]), s3 = f4 !== Pn, l3 = null === f4, B4 = f4 == f4, g3 = C2(f4), B4 = r3 ? t3 || B4 : c3 ? B4 && (t3 || s3) : a4 ? B4 && s3 && (t3 || !l3) : o3 ? B4 && s3 && !l3 && (t3 || !g3) : !l3 && !g3 && (t3 ? f4 <= e4 : f4 < e4);
          B4 ? d3 = i3 + 1 : n3 = i3;
        }
        return U3(n3, 4294967294);
      }
      function Je(A4, e4) {
        for (var u4 = -1, t3 = A4.length, d3 = 0, n3 = []; ++u4 < t3; ) {
          var r3, a4 = A4[u4], o3 = e4 ? e4(a4) : a4;
          u4 && D(o3, r3) || (r3 = o3, n3[d3++] = 0 === a4 ? 0 : a4);
        }
        return n3;
      }
      function je(A4) {
        return "number" == typeof A4 ? A4 : C2(A4) ? Cr : +A4;
      }
      function c2(A4) {
        var e4;
        return "string" == typeof A4 ? A4 : P(A4) ? or(A4, c2) + "" : C2(A4) ? RA ? RA.call(A4) : "" : "0" == (e4 = A4 + "") && 1 / A4 == -1 / 0 ? "-0" : e4;
      }
      function Ye(A4, e4, u4) {
        var t3 = -1, d3 = xa, n3 = A4.length, r3 = true, a4 = [], o3 = a4;
        if (u4)
          r3 = false, d3 = La;
        else if (200 <= n3) {
          var c3 = e4 ? null : Ou(A4);
          if (c3)
            return to(c3);
          r3 = false, d3 = ja, o3 = new MA();
        } else
          o3 = e4 ? [] : a4;
        A:
          for (; ++t3 < n3; ) {
            var i3 = A4[t3], f4 = e4 ? e4(i3) : i3, i3 = u4 || 0 !== i3 ? i3 : 0;
            if (r3 && f4 == f4) {
              for (var s3 = o3.length; s3--; )
                if (o3[s3] === f4)
                  continue A;
              e4 && o3.push(f4), a4.push(i3);
            } else
              d3(o3, f4, u4) || (o3 !== a4 && o3.push(f4), a4.push(i3));
          }
        return a4;
      }
      function Ze(A4, e4) {
        return null == (A4 = ft(A4, e4 = nu(e4, A4))) || delete A4[bt(t2(e4))];
      }
      function ze(A4, e4, u4, t3) {
        return Me(A4, e4, u4(Be(A4, e4)), t3);
      }
      function qe(A4, e4, u4, t3) {
        for (var d3 = A4.length, n3 = t3 ? d3 : -1; (t3 ? n3-- : ++n3 < d3) && e4(A4[n3], n3, A4); )
          ;
        return u4 ? a3(A4, t3 ? 0 : n3, t3 ? n3 + 1 : d3) : a3(A4, t3 ? n3 + 1 : 0, t3 ? d3 : n3);
      }
      function Au(A4, e4) {
        var u4 = A4;
        return Ra(e4, function(A5, e5) {
          return e5.func.apply(e5.thisArg, cr([A5], e5.args));
        }, u4 = A4 instanceof h3 ? A4.value() : u4);
      }
      function eu(A4, e4, u4) {
        var t3 = A4.length;
        if (t3 < 2)
          return t3 ? Ye(A4[0]) : [];
        for (var d3 = -1, n3 = Q2(t3); ++d3 < t3; )
          for (var r3 = A4[d3], a4 = -1; ++a4 < t3; )
            a4 != d3 && (n3[d3] = te(n3[d3] || r3, A4[a4], e4, u4));
        return Ye(o2(n3, 1), e4, u4);
      }
      function uu(A4, e4, u4) {
        for (var t3 = -1, d3 = A4.length, n3 = e4.length, r3 = {}; ++t3 < d3; ) {
          var a4 = t3 < n3 ? e4[t3] : Pn;
          u4(r3, A4[t3], a4);
        }
        return r3;
      }
      function tu(A4) {
        return m2(A4) ? A4 : [];
      }
      function du(A4) {
        return "function" == typeof A4 ? A4 : T2;
      }
      function nu(A4, e4) {
        return P(A4) ? A4 : dt(A4, e4) ? [A4] : mt(l2(A4));
      }
      var ru = r2;
      function au(A4, e4, u4) {
        var t3 = A4.length;
        return u4 = u4 === Pn ? t3 : u4, !e4 && t3 <= u4 ? A4 : a3(A4, e4, u4);
      }
      var ou = iA || function(A4) {
        return dr.clearTimeout(A4);
      };
      function cu(A4, e4) {
        return e4 ? A4.slice() : (e4 = A4.length, e4 = eA ? eA(e4) : new A4.constructor(e4), A4.copy(e4), e4);
      }
      function iu(A4) {
        var e4 = new A4.constructor(A4.byteLength);
        return new AA(e4).set(new AA(A4)), e4;
      }
      function fu(A4, e4) {
        e4 = e4 ? iu(A4.buffer) : A4.buffer;
        return new A4.constructor(e4, A4.byteOffset, A4.length);
      }
      function su(A4, e4) {
        if (A4 !== e4) {
          var u4 = A4 !== Pn, t3 = null === A4, d3 = A4 == A4, n3 = C2(A4), r3 = e4 !== Pn, a4 = null === e4, o3 = e4 == e4, c3 = C2(e4);
          if (!a4 && !c3 && !n3 && e4 < A4 || n3 && r3 && o3 && !a4 && !c3 || t3 && r3 && o3 || !u4 && o3 || !d3)
            return 1;
          if (!t3 && !n3 && !c3 && A4 < e4 || c3 && u4 && d3 && !t3 && !n3 || a4 && u4 && d3 || !r3 && d3 || !o3)
            return -1;
        }
        return 0;
      }
      function lu(A4, e4, u4, t3) {
        for (var d3 = -1, n3 = A4.length, r3 = u4.length, a4 = -1, o3 = e4.length, c3 = F3(n3 - r3, 0), i3 = Q2(o3 + c3), f4 = !t3; ++a4 < o3; )
          i3[a4] = e4[a4];
        for (; ++d3 < r3; )
          (f4 || d3 < n3) && (i3[u4[d3]] = A4[d3]);
        for (; c3--; )
          i3[a4++] = A4[d3++];
        return i3;
      }
      function Bu(A4, e4, u4, t3) {
        for (var d3 = -1, n3 = A4.length, r3 = -1, a4 = u4.length, o3 = -1, c3 = e4.length, i3 = F3(n3 - a4, 0), f4 = Q2(i3 + c3), s3 = !t3; ++d3 < i3; )
          f4[d3] = A4[d3];
        for (var l3 = d3; ++o3 < c3; )
          f4[l3 + o3] = e4[o3];
        for (; ++r3 < a4; )
          (s3 || d3 < n3) && (f4[l3 + u4[r3]] = A4[d3++]);
        return f4;
      }
      function _3(A4, e4) {
        var u4 = -1, t3 = A4.length;
        for (e4 = e4 || Q2(t3); ++u4 < t3; )
          e4[u4] = A4[u4];
        return e4;
      }
      function gu(A4, e4, u4, t3) {
        for (var d3 = !u4, n3 = (u4 = u4 || {}, -1), r3 = e4.length; ++n3 < r3; ) {
          var a4 = e4[n3], o3 = t3 ? t3(u4[a4], A4[a4], a4, u4, A4) : Pn;
          (d3 ? zA : JA)(u4, a4, o3 = o3 === Pn ? A4[a4] : o3);
        }
        return u4;
      }
      function pu(d3, n3) {
        return function(A4, e4) {
          var u4 = P(A4) ? Ha : YA, t3 = n3 ? n3() : {};
          return u4(A4, d3, f3(e4, 2), t3);
        };
      }
      function hu(a4) {
        return r2(function(A4, e4) {
          var u4 = -1, t3 = e4.length, d3 = 1 < t3 ? e4[t3 - 1] : Pn, n3 = 2 < t3 ? e4[2] : Pn, d3 = 3 < a4.length && "function" == typeof d3 ? (t3--, d3) : Pn;
          for (n3 && s2(e4[0], e4[1], n3) && (d3 = t3 < 3 ? Pn : d3, t3 = 1), A4 = g2(A4); ++u4 < t3; ) {
            var r3 = e4[u4];
            r3 && a4(A4, r3, u4, d3);
          }
          return A4;
        });
      }
      function wu(n3, r3) {
        return function(A4, e4) {
          if (null != A4) {
            if (!i2(A4))
              return n3(A4, e4);
            for (var u4 = A4.length, t3 = r3 ? u4 : -1, d3 = g2(A4); (r3 ? t3-- : ++t3 < u4) && false !== e4(d3[t3], t3, d3); )
              ;
          }
          return A4;
        };
      }
      function Cu(o3) {
        return function(A4, e4, u4) {
          for (var t3 = -1, d3 = g2(A4), n3 = u4(A4), r3 = n3.length; r3--; ) {
            var a4 = n3[o3 ? r3 : ++t3];
            if (false === e4(d3[a4], a4, d3))
              break;
          }
          return A4;
        };
      }
      function mu(t3) {
        return function(A4) {
          var e4 = sr(A4 = l2(A4)) ? gr(A4) : Pn, u4 = e4 ? e4[0] : A4.charAt(0), e4 = e4 ? au(e4, 1).join("") : A4.slice(1);
          return u4[t3]() + e4;
        };
      }
      function bu(e4) {
        return function(A4) {
          return Ra(ln(dn(A4).replace(ga, "")), e4, "");
        };
      }
      function Qu(t3) {
        return function() {
          var A4 = arguments;
          switch (A4.length) {
            case 0:
              return new t3();
            case 1:
              return new t3(A4[0]);
            case 2:
              return new t3(A4[0], A4[1]);
            case 3:
              return new t3(A4[0], A4[1], A4[2]);
            case 4:
              return new t3(A4[0], A4[1], A4[2], A4[3]);
            case 5:
              return new t3(A4[0], A4[1], A4[2], A4[3], A4[4]);
            case 6:
              return new t3(A4[0], A4[1], A4[2], A4[3], A4[4], A4[5]);
            case 7:
              return new t3(A4[0], A4[1], A4[2], A4[3], A4[4], A4[5], A4[6]);
          }
          var e4 = OA(t3.prototype), u4 = t3.apply(e4, A4);
          return b2(u4) ? u4 : e4;
        };
      }
      function Eu(n3, r3, a4) {
        var o3 = Qu(n3);
        return function A4() {
          for (var e4 = arguments.length, u4 = Q2(e4), t3 = e4, d3 = Ju(A4); t3--; )
            u4[t3] = arguments[t3];
          d3 = e4 < 3 && u4[0] !== d3 && u4[e4 - 1] !== d3 ? [] : lr(u4, d3);
          return (e4 -= d3.length) < a4 ? Lu(n3, r3, _u, A4.placeholder, Pn, u4, d3, Pn, Pn, a4 - e4) : nr(this && this !== dr && this instanceof A4 ? o3 : n3, this, u4);
        };
      }
      function Fu(n3) {
        return function(A4, e4, u4) {
          var t3, d3 = g2(A4), e4 = (i2(A4) || (t3 = f3(e4, 3), A4 = I2(A4), e4 = function(A5) {
            return t3(d3[A5], A5, d3);
          }), n3(A4, e4, u4));
          return -1 < e4 ? d3[t3 ? A4[e4] : e4] : Pn;
        };
      }
      function Uu(o3) {
        return $u(function(d3) {
          var n3 = d3.length, A4 = n3, e4 = p2.prototype.thru;
          for (o3 && d3.reverse(); A4--; ) {
            var u4 = d3[A4];
            if ("function" != typeof u4)
              throw new E3(kn);
            e4 && !a4 && "wrapper" == Wu(u4) && (a4 = new p2([], true));
          }
          for (A4 = a4 ? A4 : n3; ++A4 < n3; )
            var t3 = Wu(u4 = d3[A4]), r3 = "wrapper" == t3 ? Xu(u4) : Pn, a4 = r3 && nt(r3[0]) && 424 == r3[1] && !r3[4].length && 1 == r3[9] ? a4[Wu(r3[0])].apply(a4, r3[3]) : 1 == u4.length && nt(u4) ? a4[t3]() : a4.thru(u4);
          return function() {
            var A5 = arguments, e5 = A5[0];
            if (a4 && 1 == A5.length && P(e5))
              return a4.plant(e5).value();
            for (var u5 = 0, t4 = n3 ? d3[u5].apply(this, A5) : e5; ++u5 < n3; )
              t4 = d3[u5].call(this, t4);
            return t4;
          };
        });
      }
      function _u(r3, a4, o3, c3, i3, f4, s3, l3, B4, g3) {
        var p3 = a4 & Mn, h4 = 1 & a4, w3 = 2 & a4, C3 = 24 & a4, m3 = 512 & a4, b3 = w3 ? Pn : Qu(r3);
        return function A4() {
          for (var e4, u4, t3, d3 = Q2(t3 = arguments.length), n3 = t3; n3--; )
            d3[n3] = arguments[n3];
          return C3 && (u4 = function(A5, e5) {
            for (var u5 = A5.length, t4 = 0; u5--; )
              A5[u5] === e5 && ++t4;
            return t4;
          }(d3, e4 = Ju(A4))), c3 && (d3 = lu(d3, c3, i3, C3)), f4 && (d3 = Bu(d3, f4, s3, C3)), t3 -= u4, C3 && t3 < g3 ? (u4 = lr(d3, e4), Lu(r3, a4, _u, A4.placeholder, o3, d3, u4, l3, B4, g3 - t3)) : (e4 = h4 ? o3 : this, u4 = w3 ? e4[r3] : r3, t3 = d3.length, l3 ? d3 = function(A5, e5) {
            for (var u5 = A5.length, t4 = U3(e5.length, u5), d4 = _3(A5); t4--; ) {
              var n4 = e5[t4];
              A5[t4] = tt(n4, u5) ? d4[n4] : Pn;
            }
            return A5;
          }(d3, l3) : m3 && 1 < t3 && d3.reverse(), p3 && B4 < t3 && (d3.length = B4), (u4 = this && this !== dr && this instanceof A4 ? b3 || Qu(u4) : u4).apply(e4, d3));
        };
      }
      function yu(u4, r3) {
        return function(A4, e4) {
          return A4 = A4, t3 = u4, d3 = r3(e4), n3 = {}, fe(A4, function(A5, e5, u5) {
            t3(n3, d3(A5), e5, u5);
          }), n3;
          var t3, d3, n3;
        };
      }
      function vu(t3, d3) {
        return function(A4, e4) {
          var u4;
          if (A4 === Pn && e4 === Pn)
            return d3;
          if (A4 !== Pn && (u4 = A4), e4 !== Pn) {
            if (u4 === Pn)
              return e4;
            e4 = ("string" == typeof A4 || "string" == typeof e4 ? (A4 = c2(A4), c2) : (A4 = je(A4), je))(e4), u4 = t3(A4, e4);
          }
          return u4;
        };
      }
      function Iu(t3) {
        return $u(function(A4) {
          return A4 = or(A4, fr(f3())), r2(function(e4) {
            var u4 = this;
            return t3(A4, function(A5) {
              return nr(A5, u4, e4);
            });
          });
        });
      }
      function Hu(A4, e4) {
        var u4 = (e4 = e4 === Pn ? " " : c2(e4)).length;
        return u4 < 2 ? u4 ? De(e4, A4) : e4 : (u4 = De(e4, lA(A4 / Br(e4))), sr(e4) ? au(gr(u4), 0, A4).join("") : u4.slice(0, A4));
      }
      function Tu(a4, A4, o3, c3) {
        var i3 = 1 & A4, f4 = Qu(a4);
        return function A5() {
          for (var e4 = -1, u4 = arguments.length, t3 = -1, d3 = c3.length, n3 = Q2(d3 + u4), r3 = this && this !== dr && this instanceof A5 ? f4 : a4; ++t3 < d3; )
            n3[t3] = c3[t3];
          for (; u4--; )
            n3[t3++] = arguments[++e4];
          return nr(r3, i3 ? o3 : this, n3);
        };
      }
      function Su(c3) {
        return function(A4, e4, u4) {
          u4 && "number" != typeof u4 && s2(A4, e4, u4) && (e4 = u4 = Pn), A4 = xd(A4), e4 === Pn ? (e4 = A4, A4 = 0) : e4 = xd(e4), u4 = u4 === Pn ? A4 < e4 ? 1 : -1 : xd(u4);
          for (var t3 = A4, d3 = u4, n3 = c3, r3 = -1, a4 = F3(lA((e4 - t3) / (d3 || 1)), 0), o3 = Q2(a4); a4--; )
            o3[n3 ? a4 : ++r3] = t3, t3 += d3;
          return o3;
        };
      }
      function xu(u4) {
        return function(A4, e4) {
          return "string" == typeof A4 && "string" == typeof e4 || (A4 = v2(A4), e4 = v2(e4)), u4(A4, e4);
        };
      }
      function Lu(A4, e4, u4, t3, d3, n3, r3, a4, o3, c3) {
        var i3 = 8 & e4, d3 = (4 & (e4 = (e4 | (i3 ? 32 : 64)) & ~(i3 ? 64 : 32)) || (e4 &= -4), [A4, e4, d3, i3 ? n3 : Pn, i3 ? r3 : Pn, i3 ? Pn : n3, i3 ? Pn : r3, a4, o3, c3]), n3 = u4.apply(Pn, d3);
        return nt(A4) && lt(n3, d3), n3.placeholder = t3, pt(n3, A4, e4);
      }
      function Ru(A4) {
        var t3 = L2[A4];
        return function(A5, e4) {
          var u4;
          return A5 = v2(A5), (e4 = null == e4 ? 0 : U3(y2(e4), 292)) && pA(A5) ? (u4 = (l2(A5) + "e").split("e"), +((u4 = (l2(t3(u4[0] + "e" + (+u4[1] + e4))) + "e").split("e"))[0] + "e" + (+u4[1] - e4))) : t3(A5);
        };
      }
      var Ou = UA && 1 / to(new UA([, -0]))[1] == 1 / 0 ? function(A4) {
        return new UA(A4);
      } : En;
      function Nu(n3) {
        return function(A4) {
          var e4, u4, t3, d3 = K(A4);
          return d3 == Jn ? eo(A4) : d3 == zn ? (d3 = A4, e4 = -1, u4 = Array(d3.size), d3.forEach(function(A5) {
            u4[++e4] = [A5, A5];
          }), u4) : or(n3(t3 = A4), function(A5) {
            return [A5, t3[A5]];
          });
        };
      }
      function Ku(A4, e4, u4, t3, d3, n3, r3, a4) {
        var o3, c3, i3, f4, s3, l3, B4, g3, p3, h4, w3, C3, m3, b3 = 2 & e4;
        if (b3 || "function" == typeof A4)
          return (o3 = t3 ? t3.length : 0) || (e4 &= -97, t3 = d3 = Pn), r3 = r3 === Pn ? r3 : F3(y2(r3), 0), a4 = a4 === Pn ? a4 : y2(a4), o3 -= d3 ? d3.length : 0, 64 & e4 && (i3 = t3, f4 = d3, t3 = d3 = Pn), c3 = b3 ? Pn : Xu(A4), i3 = [A4, e4, u4, t3, d3, i3, f4, n3, r3, a4], c3 && (f4 = c3, r3 = (n3 = i3)[1], l3 = f4[1], g3 = (B4 = r3 | l3) < 131, p3 = l3 == Mn && 8 == r3 || l3 == Mn && 256 == r3 && n3[7].length <= f4[8] || 384 == l3 && f4[7].length <= f4[8] && 8 == r3, g3 || p3) && (1 & l3 && (n3[2] = f4[2], B4 |= 1 & r3 ? 0 : 4), (g3 = f4[3]) && (s3 = n3[3], n3[3] = s3 ? lu(s3, g3, f4[4]) : g3, n3[4] = s3 ? lr(n3[3], wr) : f4[4]), (g3 = f4[5]) && (s3 = n3[5], n3[5] = s3 ? Bu(s3, g3, f4[6]) : g3, n3[6] = s3 ? lr(n3[5], wr) : f4[6]), (g3 = f4[7]) && (n3[7] = g3), l3 & Mn && (n3[8] = null == n3[8] ? f4[8] : U3(n3[8], f4[8])), null == n3[9] && (n3[9] = f4[9]), n3[0] = f4[0], n3[1] = B4), A4 = i3[0], e4 = i3[1], u4 = i3[2], t3 = i3[3], d3 = i3[4], !(a4 = i3[9] = i3[9] === Pn ? b3 ? 0 : A4.length : F3(i3[9] - o3, 0)) && 24 & e4 && (e4 &= -25), p3 = e4 && 1 != e4 ? 8 == e4 || 16 == e4 ? Eu(A4, e4, a4) : 32 != e4 && 33 != e4 || d3.length ? _u.apply(Pn, i3) : Tu(A4, e4, u4, t3) : (w3 = u4, C3 = 1 & e4, m3 = Qu(h4 = A4), function A5() {
            return (this && this !== dr && this instanceof A5 ? m3 : h4).apply(C3 ? w3 : this, arguments);
          }), pt((c3 ? $e : lt)(p3, i3), A4, e4);
        throw new E3(kn);
      }
      function Du(A4, e4, u4, t3) {
        return A4 === Pn || D(A4, V2[u4]) && !O.call(t3, u4) ? e4 : A4;
      }
      function Pu(A4, e4, u4, t3, d3, n3) {
        return b2(A4) && b2(e4) && (n3.set(e4, A4), Se(A4, e4, Pn, Pu, n3), n3.delete(e4)), A4;
      }
      function ku(A4) {
        return Ud(A4) ? Pn : A4;
      }
      function Mu(A4, e4, u4, t3, d3, n3) {
        var r3 = 1 & u4, a4 = A4.length, o3 = e4.length;
        if (a4 != o3 && !(r3 && a4 < o3))
          return false;
        var o3 = n3.get(A4), c3 = n3.get(e4);
        if (o3 && c3)
          return o3 == e4 && c3 == A4;
        var i3 = -1, f4 = true, s3 = 2 & u4 ? new MA() : Pn;
        for (n3.set(A4, e4), n3.set(e4, A4); ++i3 < a4; ) {
          var l3, B4 = A4[i3], g3 = e4[i3];
          if ((l3 = t3 ? r3 ? t3(g3, B4, i3, e4, A4, n3) : t3(B4, g3, i3, A4, e4, n3) : l3) !== Pn) {
            if (l3)
              continue;
            f4 = false;
            break;
          }
          if (s3) {
            if (!Na(e4, function(A5, e5) {
              return !ja(s3, e5) && (B4 === A5 || d3(B4, A5, u4, t3, n3)) && s3.push(e5);
            })) {
              f4 = false;
              break;
            }
          } else if (B4 !== g3 && !d3(B4, g3, u4, t3, n3)) {
            f4 = false;
            break;
          }
        }
        return n3.delete(A4), n3.delete(e4), f4;
      }
      function $u(A4) {
        return gt(it(A4, Pn, _t), A4 + "");
      }
      function Gu(A4) {
        return ge(A4, I2, zu);
      }
      function Vu(A4) {
        return ge(A4, H4, qu);
      }
      var Xu = yA ? function(A4) {
        return yA.get(A4);
      } : En;
      function Wu(A4) {
        for (var e4 = A4.name + "", u4 = vA[e4], t3 = O.call(vA, e4) ? u4.length : 0; t3--; ) {
          var d3 = u4[t3], n3 = d3.func;
          if (null == n3 || n3 == A4)
            return d3.name;
        }
        return e4;
      }
      function Ju(A4) {
        return (O.call(B3, "placeholder") ? B3 : A4).placeholder;
      }
      function f3() {
        var A4 = (A4 = B3.iteratee || Cn) === Cn ? Ue : A4;
        return arguments.length ? A4(arguments[0], arguments[1]) : A4;
      }
      function ju(A4, e4) {
        var u4, t3, A4 = A4.__data__;
        return ("string" == (t3 = typeof (u4 = e4)) || "number" == t3 || "symbol" == t3 || "boolean" == t3 ? "__proto__" !== u4 : null === u4) ? A4["string" == typeof e4 ? "string" : "hash"] : A4.map;
      }
      function Yu(A4) {
        for (var e4 = I2(A4), u4 = e4.length; u4--; ) {
          var t3 = e4[u4], d3 = A4[t3];
          e4[u4] = [t3, d3, ot(d3)];
        }
        return e4;
      }
      function Zu(A4, e4) {
        e4 = e4;
        A4 = null == (A4 = A4) ? Pn : A4[e4];
        return Fe(A4) ? A4 : Pn;
      }
      var zu = gA ? function(e4) {
        return null == e4 ? [] : (e4 = g2(e4), ar(gA(e4), function(A4) {
          return dA.call(e4, A4);
        }));
      } : Hn, qu = gA ? function(A4) {
        for (var e4 = []; A4; )
          cr(e4, zu(A4)), A4 = uA(A4);
        return e4;
      } : Hn, K = u3;
      function At(A4, e4, u4) {
        for (var t3 = -1, d3 = (e4 = nu(e4, A4)).length, n3 = false; ++t3 < d3; ) {
          var r3 = bt(e4[t3]);
          if (!(n3 = null != A4 && u4(A4, r3)))
            break;
          A4 = A4[r3];
        }
        return n3 || ++t3 != d3 ? n3 : !!(d3 = null == A4 ? 0 : A4.length) && Qd(d3) && tt(r3, d3) && (P(A4) || pd(A4));
      }
      function et(A4) {
        return "function" != typeof A4.constructor || at(A4) ? {} : OA(uA(A4));
      }
      function ut(A4) {
        return P(A4) || pd(A4) || !!(rA && A4 && A4[rA]);
      }
      function tt(A4, e4) {
        var u4 = typeof A4;
        return !!(e4 = null == e4 ? $n : e4) && ("number" == u4 || "symbol" != u4 && fa.test(A4)) && -1 < A4 && A4 % 1 == 0 && A4 < e4;
      }
      function s2(A4, e4, u4) {
        var t3;
        if (b2(u4))
          return ("number" == (t3 = typeof e4) ? i2(u4) && tt(e4, u4.length) : "string" == t3 && e4 in u4) && D(u4[e4], A4);
      }
      function dt(A4, e4) {
        var u4;
        if (!P(A4))
          return "number" == (u4 = typeof A4) || "symbol" == u4 || "boolean" == u4 || null == A4 || C2(A4) || Jr.test(A4) || !Wr.test(A4) || null != e4 && A4 in g2(e4);
      }
      function nt(A4) {
        var e4 = Wu(A4), u4 = B3[e4];
        return "function" == typeof u4 && e4 in h3.prototype && (A4 === u4 || (e4 = Xu(u4)) && A4 === e4[0]);
      }
      (n2 && K(new n2(new ArrayBuffer(1))) != er || EA && K(new EA()) != Jn || FA && K(FA.resolve()) != Ur || UA && K(new UA()) != zn || A3 && K(new A3()) != Ar) && (K = function(A4) {
        var e4 = u3(A4), A4 = e4 == Yn ? A4.constructor : Pn, A4 = A4 ? Qt(A4) : "";
        if (A4)
          switch (A4) {
            case IA:
              return er;
            case HA:
              return Jn;
            case TA:
              return Ur;
            case SA2:
              return zn;
            case xA:
              return Ar;
          }
        return e4;
      });
      var rt = X ? md : Tn;
      function at(A4) {
        var e4 = A4 && A4.constructor;
        return A4 === ("function" == typeof e4 && e4.prototype || V2);
      }
      function ot(A4) {
        return A4 == A4 && !b2(A4);
      }
      function ct(e4, u4) {
        return function(A4) {
          return null != A4 && A4[e4] === u4 && (u4 !== Pn || e4 in g2(A4));
        };
      }
      function it(n3, r3, a4) {
        return r3 = F3(r3 === Pn ? n3.length - 1 : r3, 0), function() {
          for (var A4 = arguments, e4 = -1, u4 = F3(A4.length - r3, 0), t3 = Q2(u4); ++e4 < u4; )
            t3[e4] = A4[r3 + e4];
          for (var e4 = -1, d3 = Q2(r3 + 1); ++e4 < r3; )
            d3[e4] = A4[e4];
          return d3[r3] = a4(t3), nr(n3, this, d3);
        };
      }
      function ft(A4, e4) {
        return e4.length < 2 ? A4 : Be(A4, a3(e4, 0, -1));
      }
      function st(A4, e4) {
        if (("constructor" !== e4 || "function" != typeof A4[e4]) && "__proto__" != e4)
          return A4[e4];
      }
      var lt = ht($e), Bt = sA || function(A4, e4) {
        return dr.setTimeout(A4, e4);
      }, gt = ht(e3);
      function pt(A4, e4, u4) {
        var t3, d3, n3, e4 = e4 + "";
        return gt(A4, (d3 = (e4 = (e4 = A4 = e4).match(Aa)) ? e4[1].split(ea) : [], n3 = u4, rr(mr, function(A5) {
          var e5 = "_." + A5[0];
          n3 & A5[1] && !xa(d3, e5) && d3.push(e5);
        }), e4 = d3.sort(), (u4 = e4.length) ? (e4[t3 = u4 - 1] = (1 < u4 ? "& " : "") + e4[t3], e4 = e4.join(2 < u4 ? ", " : " "), A4.replace(qr, "{\n/* [wrapped with " + e4 + "] */\n")) : A4));
      }
      function ht(u4) {
        var t3 = 0, d3 = 0;
        return function() {
          var A4 = CA(), e4 = 16 - (A4 - d3);
          if (d3 = A4, 0 < e4) {
            if (800 <= ++t3)
              return arguments[0];
          } else
            t3 = 0;
          return u4.apply(Pn, arguments);
        };
      }
      function wt(A4, e4) {
        var u4 = -1, t3 = A4.length, d3 = t3 - 1;
        for (e4 = e4 === Pn ? t3 : e4; ++u4 < e4; ) {
          var n3 = Ke(u4, d3), r3 = A4[n3];
          A4[n3] = A4[u4], A4[u4] = r3;
        }
        return A4.length = e4, A4;
      }
      Ct = (iA = cd(iA = function(A4) {
        var d3 = [];
        return 46 === A4.charCodeAt(0) && d3.push(""), A4.replace(jr, function(A5, e4, u4, t3) {
          d3.push(u4 ? t3.replace(da, "$1") : e4 || A5);
        }), d3;
      }, function(A4) {
        return 500 === Ct.size && Ct.clear(), A4;
      })).cache;
      var Ct, mt = iA;
      function bt(A4) {
        var e4;
        return "string" == typeof A4 || C2(A4) ? A4 : "0" == (e4 = A4 + "") && 1 / A4 == -1 / 0 ? "-0" : e4;
      }
      function Qt(A4) {
        if (null != A4) {
          try {
            return W.call(A4);
          } catch (A5) {
          }
          try {
            return A4 + "";
          } catch (A5) {
          }
        }
        return "";
      }
      function Et(A4) {
        var e4;
        return A4 instanceof h3 ? A4.clone() : ((e4 = new p2(A4.__wrapped__, A4.__chain__)).__actions__ = _3(A4.__actions__), e4.__index__ = A4.__index__, e4.__values__ = A4.__values__, e4);
      }
      n2 = r2(function(A4, e4) {
        return m2(A4) ? te(A4, o2(e4, 1, m2, true)) : [];
      }), FA = r2(function(A4, e4) {
        var u4 = t2(e4);
        return m2(u4) && (u4 = Pn), m2(A4) ? te(A4, o2(e4, 1, m2, true), f3(u4, 2)) : [];
      }), A3 = r2(function(A4, e4) {
        var u4 = t2(e4);
        return m2(u4) && (u4 = Pn), m2(A4) ? te(A4, o2(e4, 1, m2, true), Pn, u4) : [];
      });
      function Ft(A4, e4, u4) {
        var t3 = null == A4 ? 0 : A4.length;
        return t3 ? ((u4 = null == u4 ? 0 : y2(u4)) < 0 && (u4 = F3(t3 + u4, 0)), Da(A4, f3(e4, 3), u4)) : -1;
      }
      function Ut(A4, e4, u4) {
        var t3, d3 = null == A4 ? 0 : A4.length;
        return d3 ? (t3 = d3 - 1, u4 !== Pn && (t3 = y2(u4), t3 = u4 < 0 ? F3(d3 + t3, 0) : U3(t3, d3 - 1)), Da(A4, f3(e4, 3), t3, true)) : -1;
      }
      function _t(A4) {
        return (null == A4 ? 0 : A4.length) ? o2(A4, 1) : [];
      }
      function yt(A4) {
        return A4 && A4.length ? A4[0] : Pn;
      }
      X = r2(function(A4) {
        var e4 = or(A4, tu);
        return e4.length && e4[0] === A4[0] ? Ce(e4) : [];
      }), sA = r2(function(A4) {
        var e4 = t2(A4), u4 = or(A4, tu);
        return e4 === t2(u4) ? e4 = Pn : u4.pop(), u4.length && u4[0] === A4[0] ? Ce(u4, f3(e4, 2)) : [];
      }), e3 = r2(function(A4) {
        var e4 = t2(A4), u4 = or(A4, tu);
        return (e4 = "function" == typeof e4 ? e4 : Pn) && u4.pop(), u4.length && u4[0] === A4[0] ? Ce(u4, Pn, e4) : [];
      });
      function t2(A4) {
        var e4 = null == A4 ? 0 : A4.length;
        return e4 ? A4[e4 - 1] : Pn;
      }
      iA = r2(vt);
      function vt(A4, e4) {
        return A4 && A4.length && e4 && e4.length ? Oe(A4, e4) : A4;
      }
      var It = $u(function(A4, e4) {
        var u4 = null == A4 ? 0 : A4.length, t3 = qA(A4, e4);
        return Ne(A4, or(e4, function(A5) {
          return tt(A5, u4) ? +A5 : A5;
        }).sort(su)), t3;
      });
      function Ht(A4) {
        return null == A4 ? A4 : QA.call(A4);
      }
      var Tt = r2(function(A4) {
        return Ye(o2(A4, 1, m2, true));
      }), St = r2(function(A4) {
        var e4 = t2(A4);
        return m2(e4) && (e4 = Pn), Ye(o2(A4, 1, m2, true), f3(e4, 2));
      }), xt = r2(function(A4) {
        var e4 = "function" == typeof (e4 = t2(A4)) ? e4 : Pn;
        return Ye(o2(A4, 1, m2, true), Pn, e4);
      });
      function Lt(e4) {
        var u4;
        return e4 && e4.length ? (u4 = 0, e4 = ar(e4, function(A4) {
          return m2(A4) && (u4 = F3(A4.length, u4), 1);
        }), Xa(u4, function(A4) {
          return or(e4, $a(A4));
        })) : [];
      }
      function Rt(A4, e4) {
        return A4 && A4.length ? (A4 = Lt(A4), null == e4 ? A4 : or(A4, function(A5) {
          return nr(e4, Pn, A5);
        })) : [];
      }
      var Ot = r2(function(A4, e4) {
        return m2(A4) ? te(A4, e4) : [];
      }), Nt = r2(function(A4) {
        return eu(ar(A4, m2));
      }), Kt = r2(function(A4) {
        var e4 = t2(A4);
        return m2(e4) && (e4 = Pn), eu(ar(A4, m2), f3(e4, 2));
      }), Dt = r2(function(A4) {
        var e4 = "function" == typeof (e4 = t2(A4)) ? e4 : Pn;
        return eu(ar(A4, m2), Pn, e4);
      }), Pt = r2(Lt);
      var kt = r2(function(A4) {
        var e4 = A4.length, e4 = "function" == typeof (e4 = 1 < e4 ? A4[e4 - 1] : Pn) ? (A4.pop(), e4) : Pn;
        return Rt(A4, e4);
      });
      function Mt(A4) {
        A4 = B3(A4);
        return A4.__chain__ = true, A4;
      }
      function $t(A4, e4) {
        return e4(A4);
      }
      var Gt = $u(function(e4) {
        function A4(A5) {
          return qA(A5, e4);
        }
        var u4 = e4.length, t3 = u4 ? e4[0] : 0, d3 = this.__wrapped__;
        return !(1 < u4 || this.__actions__.length) && d3 instanceof h3 && tt(t3) ? ((d3 = d3.slice(t3, +t3 + (u4 ? 1 : 0))).__actions__.push({ func: $t, args: [A4], thisArg: Pn }), new p2(d3, this.__chain__).thru(function(A5) {
          return u4 && !A5.length && A5.push(Pn), A5;
        })) : this.thru(A4);
      });
      var Vt = pu(function(A4, e4, u4) {
        O.call(A4, u4) ? ++A4[u4] : zA(A4, u4, 1);
      });
      var Xt = Fu(Ft), Wt = Fu(Ut);
      function Jt(A4, e4) {
        return (P(A4) ? rr : de)(A4, f3(e4, 3));
      }
      function jt(A4, e4) {
        return (P(A4) ? Ta : ne)(A4, f3(e4, 3));
      }
      var Yt = pu(function(A4, e4, u4) {
        O.call(A4, u4) ? A4[u4].push(e4) : zA(A4, u4, [e4]);
      });
      var Zt = r2(function(A4, e4, u4) {
        var t3 = -1, d3 = "function" == typeof e4, n3 = i2(A4) ? Q2(A4.length) : [];
        return de(A4, function(A5) {
          n3[++t3] = d3 ? nr(e4, A5, u4) : me(A5, e4, u4);
        }), n3;
      }), zt = pu(function(A4, e4, u4) {
        zA(A4, u4, e4);
      });
      function qt(A4, e4) {
        return (P(A4) ? or : Ie)(A4, f3(e4, 3));
      }
      var Ad = pu(function(A4, e4, u4) {
        A4[u4 ? 0 : 1].push(e4);
      }, function() {
        return [[], []];
      });
      var ed = r2(function(A4, e4) {
        var u4;
        return null == A4 ? [] : (1 < (u4 = e4.length) && s2(A4, e4[0], e4[1]) ? e4 = [] : 2 < u4 && s2(e4[0], e4[1], e4[2]) && (e4 = [e4[0]]), Le(A4, o2(e4, 1), []));
      }), ud = fA || function() {
        return dr.Date.now();
      };
      function td(A4, e4, u4) {
        return e4 = u4 ? Pn : e4, e4 = A4 && null == e4 ? A4.length : e4, Ku(A4, Mn, Pn, Pn, Pn, Pn, e4);
      }
      function dd(A4, e4) {
        var u4;
        if ("function" != typeof e4)
          throw new E3(kn);
        return A4 = y2(A4), function() {
          return 0 < --A4 && (u4 = e4.apply(this, arguments)), A4 <= 1 && (e4 = Pn), u4;
        };
      }
      var nd = r2(function(A4, e4, u4) {
        var t3, d3 = 1;
        return u4.length && (t3 = lr(u4, Ju(nd)), d3 |= 32), Ku(A4, d3, e4, u4, t3);
      }), rd = r2(function(A4, e4, u4) {
        var t3, d3 = 3;
        return u4.length && (t3 = lr(u4, Ju(rd)), d3 |= 32), Ku(e4, d3, A4, u4, t3);
      });
      function ad(t3, u4, A4) {
        var d3, n3, r3, a4, o3, c3, i3 = 0, f4 = false, s3 = false, e4 = true;
        if ("function" != typeof t3)
          throw new E3(kn);
        function l3(A5) {
          var e5 = d3, u5 = n3;
          return d3 = n3 = Pn, i3 = A5, a4 = t3.apply(u5, e5);
        }
        function B4(A5) {
          var e5 = A5 - c3;
          return c3 === Pn || u4 <= e5 || e5 < 0 || s3 && r3 <= A5 - i3;
        }
        function g3() {
          var A5, e5 = ud();
          if (B4(e5))
            return p3(e5);
          o3 = Bt(g3, (A5 = u4 - ((e5 = e5) - c3), s3 ? U3(A5, r3 - (e5 - i3)) : A5));
        }
        function p3(A5) {
          return o3 = Pn, e4 && d3 ? l3(A5) : (d3 = n3 = Pn, a4);
        }
        function h4() {
          var A5 = ud(), e5 = B4(A5);
          if (d3 = arguments, n3 = this, c3 = A5, e5) {
            if (o3 === Pn)
              return i3 = A5 = c3, o3 = Bt(g3, u4), f4 ? l3(A5) : a4;
            if (s3)
              return ou(o3), o3 = Bt(g3, u4), l3(c3);
          }
          return o3 === Pn && (o3 = Bt(g3, u4)), a4;
        }
        return u4 = v2(u4) || 0, b2(A4) && (f4 = !!A4.leading, s3 = "maxWait" in A4, r3 = s3 ? F3(v2(A4.maxWait) || 0, u4) : r3, e4 = "trailing" in A4 ? !!A4.trailing : e4), h4.cancel = function() {
          o3 !== Pn && ou(o3), i3 = 0, d3 = c3 = n3 = o3 = Pn;
        }, h4.flush = function() {
          return o3 === Pn ? a4 : p3(ud());
        }, h4;
      }
      var fA = r2(function(A4, e4) {
        return ue(A4, 1, e4);
      }), od = r2(function(A4, e4, u4) {
        return ue(A4, v2(e4) || 0, u4);
      });
      function cd(t3, d3) {
        if ("function" != typeof t3 || null != d3 && "function" != typeof d3)
          throw new E3(kn);
        function n3() {
          var A4 = arguments, e4 = d3 ? d3.apply(this, A4) : A4[0], u4 = n3.cache;
          return u4.has(e4) ? u4.get(e4) : (A4 = t3.apply(this, A4), n3.cache = u4.set(e4, A4) || u4, A4);
        }
        return n3.cache = new (cd.Cache || kA)(), n3;
      }
      function id(e4) {
        if ("function" != typeof e4)
          throw new E3(kn);
        return function() {
          var A4 = arguments;
          switch (A4.length) {
            case 0:
              return !e4.call(this);
            case 1:
              return !e4.call(this, A4[0]);
            case 2:
              return !e4.call(this, A4[0], A4[1]);
            case 3:
              return !e4.call(this, A4[0], A4[1], A4[2]);
          }
          return !e4.apply(this, A4);
        };
      }
      cd.Cache = kA;
      var ru = ru(function(t3, d3) {
        var n3 = (d3 = 1 == d3.length && P(d3[0]) ? or(d3[0], fr(f3())) : or(o2(d3, 1), fr(f3()))).length;
        return r2(function(A4) {
          for (var e4 = -1, u4 = U3(A4.length, n3); ++e4 < u4; )
            A4[e4] = d3[e4].call(this, A4[e4]);
          return nr(t3, this, A4);
        });
      }), fd = r2(function(A4, e4) {
        var u4 = lr(e4, Ju(fd));
        return Ku(A4, 32, Pn, e4, u4);
      }), sd = r2(function(A4, e4) {
        var u4 = lr(e4, Ju(sd));
        return Ku(A4, 64, Pn, e4, u4);
      }), ld = $u(function(A4, e4) {
        return Ku(A4, 256, Pn, Pn, Pn, e4);
      });
      function D(A4, e4) {
        return A4 === e4 || A4 != A4 && e4 != e4;
      }
      var Bd = xu(pe), gd = xu(function(A4, e4) {
        return e4 <= A4;
      }), pd = be(function() {
        return arguments;
      }()) ? be : function(A4) {
        return k(A4) && O.call(A4, "callee") && !dA.call(A4, "callee");
      }, P = Q2.isArray, hd = Fa ? fr(Fa) : function(A4) {
        return k(A4) && u3(A4) == yr;
      };
      function i2(A4) {
        return null != A4 && Qd(A4.length) && !md(A4);
      }
      function m2(A4) {
        return k(A4) && i2(A4);
      }
      var wd = G || Tn, G = Ua ? fr(Ua) : function(A4) {
        return k(A4) && u3(A4) == Wn;
      };
      function Cd(A4) {
        var e4;
        return !!k(A4) && ((e4 = u3(A4)) == Qr || "[object DOMException]" == e4 || "string" == typeof A4.message && "string" == typeof A4.name && !Ud(A4));
      }
      function md(A4) {
        return !!b2(A4) && ((A4 = u3(A4)) == Er || A4 == Fr || "[object AsyncFunction]" == A4 || "[object Proxy]" == A4);
      }
      function bd(A4) {
        return "number" == typeof A4 && A4 == y2(A4);
      }
      function Qd(A4) {
        return "number" == typeof A4 && -1 < A4 && A4 % 1 == 0 && A4 <= $n;
      }
      function b2(A4) {
        var e4 = typeof A4;
        return null != A4 && ("object" == e4 || "function" == e4);
      }
      function k(A4) {
        return null != A4 && "object" == typeof A4;
      }
      var Ed = _a2 ? fr(_a2) : function(A4) {
        return k(A4) && K(A4) == Jn;
      };
      function Fd(A4) {
        return "number" == typeof A4 || k(A4) && u3(A4) == jn;
      }
      function Ud(A4) {
        return !(!k(A4) || u3(A4) != Yn) && (null === (A4 = uA(A4)) || "function" == typeof (A4 = O.call(A4, "constructor") && A4.constructor) && A4 instanceof A4 && W.call(A4) == Z2);
      }
      var _d = ya ? fr(ya) : function(A4) {
        return k(A4) && u3(A4) == Zn;
      };
      var yd = va ? fr(va) : function(A4) {
        return k(A4) && K(A4) == zn;
      };
      function vd(A4) {
        return "string" == typeof A4 || !P(A4) && k(A4) && u3(A4) == qn;
      }
      function C2(A4) {
        return "symbol" == typeof A4 || k(A4) && u3(A4) == _r;
      }
      var Id = Ia ? fr(Ia) : function(A4) {
        return k(A4) && Qd(A4.length) && !!ur[u3(A4)];
      };
      var Hd = xu(ve), Td = xu(function(A4, e4) {
        return A4 <= e4;
      });
      function Sd(A4) {
        if (!A4)
          return [];
        if (i2(A4))
          return (vd(A4) ? gr : _3)(A4);
        if (aA && A4[aA]) {
          for (var e4, u4 = A4[aA](), t3 = []; !(e4 = u4.next()).done; )
            t3.push(e4.value);
          return t3;
        }
        var d3 = K(A4);
        return (d3 == Jn ? eo : d3 == zn ? to : en)(A4);
      }
      function xd(A4) {
        return A4 ? (A4 = v2(A4)) === 1 / 0 || A4 === -1 / 0 ? 17976931348623157e292 * (A4 < 0 ? -1 : 1) : A4 == A4 ? A4 : 0 : 0 === A4 ? A4 : 0;
      }
      function y2(A4) {
        var A4 = xd(A4), e4 = A4 % 1;
        return A4 == A4 ? e4 ? A4 - e4 : A4 : 0;
      }
      function Ld(A4) {
        return A4 ? Ae(y2(A4), 0, Gn) : 0;
      }
      function v2(A4) {
        if ("number" == typeof A4)
          return A4;
        if (C2(A4))
          return Cr;
        if ("string" != typeof (A4 = b2(A4) ? b2(e4 = "function" == typeof A4.valueOf ? A4.valueOf() : A4) ? e4 + "" : e4 : A4))
          return 0 === A4 ? A4 : +A4;
        A4 = Wa(A4);
        var e4 = oa.test(A4);
        return e4 || ia.test(A4) ? Qa(A4.slice(2), e4 ? 2 : 8) : aa.test(A4) ? Cr : +A4;
      }
      function Rd(A4) {
        return gu(A4, H4(A4));
      }
      function l2(A4) {
        return null == A4 ? "" : c2(A4);
      }
      var Od = hu(function(A4, e4) {
        if (at(e4) || i2(e4))
          gu(e4, I2(e4), A4);
        else
          for (var u4 in e4)
            O.call(e4, u4) && JA(A4, u4, e4[u4]);
      }), Nd = hu(function(A4, e4) {
        gu(e4, H4(e4), A4);
      }), Kd = hu(function(A4, e4, u4, t3) {
        gu(e4, H4(e4), A4, t3);
      }), Dd = hu(function(A4, e4, u4, t3) {
        gu(e4, I2(e4), A4, t3);
      }), Pd = $u(qA);
      var kd = r2(function(A4, e4) {
        A4 = g2(A4);
        var u4 = -1, t3 = e4.length, d3 = 2 < t3 ? e4[2] : Pn;
        for (d3 && s2(e4[0], e4[1], d3) && (t3 = 1); ++u4 < t3; )
          for (var n3 = e4[u4], r3 = H4(n3), a4 = -1, o3 = r3.length; ++a4 < o3; ) {
            var c3 = r3[a4], i3 = A4[c3];
            (i3 === Pn || D(i3, V2[c3]) && !O.call(A4, c3)) && (A4[c3] = n3[c3]);
          }
        return A4;
      }), Md = r2(function(A4) {
        return A4.push(Pn, Pu), nr(jd, Pn, A4);
      });
      function $d(A4, e4, u4) {
        A4 = null == A4 ? Pn : Be(A4, e4);
        return A4 === Pn ? u4 : A4;
      }
      function Gd(A4, e4) {
        return null != A4 && At(A4, e4, we);
      }
      var Vd = yu(function(A4, e4, u4) {
        A4[e4 = null != e4 && "function" != typeof e4.toString ? Y.call(e4) : e4] = u4;
      }, pn(T2)), Xd = yu(function(A4, e4, u4) {
        null != e4 && "function" != typeof e4.toString && (e4 = Y.call(e4)), O.call(A4, e4) ? A4[e4].push(u4) : A4[e4] = [u4];
      }, f3), Wd = r2(me);
      function I2(A4) {
        return (i2(A4) ? $A : _e)(A4);
      }
      function H4(A4) {
        return i2(A4) ? $A(A4, true) : ye(A4);
      }
      var Jd = hu(function(A4, e4, u4) {
        Se(A4, e4, u4);
      }), jd = hu(function(A4, e4, u4, t3) {
        Se(A4, e4, u4, t3);
      }), Yd = $u(function(e4, A4) {
        var u4 = {};
        if (null != e4)
          for (var t3 = false, d3 = (A4 = or(A4, function(A5) {
            return A5 = nu(A5, e4), t3 = t3 || 1 < A5.length, A5;
          }), gu(e4, Vu(e4), u4), t3 && (u4 = w2(u4, 7, ku)), A4.length); d3--; )
            Ze(u4, A4[d3]);
        return u4;
      });
      var Zd = $u(function(A4, e4) {
        return null == A4 ? {} : Re(u4 = A4, e4, function(A5, e5) {
          return Gd(u4, e5);
        });
        var u4;
      });
      function zd(A4, u4) {
        var e4;
        return null == A4 ? {} : (e4 = or(Vu(A4), function(A5) {
          return [A5];
        }), u4 = f3(u4), Re(A4, e4, function(A5, e5) {
          return u4(A5, e5[0]);
        }));
      }
      var qd = Nu(I2), An = Nu(H4);
      function en(A4) {
        return null == A4 ? [] : Ja(A4, I2(A4));
      }
      var un = bu(function(A4, e4, u4) {
        return e4 = e4.toLowerCase(), A4 + (u4 ? tn(e4) : e4);
      });
      function tn(A4) {
        return sn(l2(A4).toLowerCase());
      }
      function dn(A4) {
        return (A4 = l2(A4)) && A4.replace(sa, za).replace(pa, "");
      }
      var nn = bu(function(A4, e4, u4) {
        return A4 + (u4 ? "-" : "") + e4.toLowerCase();
      }), rn = bu(function(A4, e4, u4) {
        return A4 + (u4 ? " " : "") + e4.toLowerCase();
      }), an = mu("toLowerCase");
      var on2 = bu(function(A4, e4, u4) {
        return A4 + (u4 ? "_" : "") + e4.toLowerCase();
      });
      var cn = bu(function(A4, e4, u4) {
        return A4 + (u4 ? " " : "") + sn(e4);
      });
      var fn = bu(function(A4, e4, u4) {
        return A4 + (u4 ? " " : "") + e4.toUpperCase();
      }), sn = mu("toUpperCase");
      function ln(A4, e4, u4) {
        return A4 = l2(A4), (e4 = u4 ? Pn : e4) === Pn ? (u4 = A4, wa.test(u4) ? A4.match(ha) || [] : A4.match(ua) || []) : A4.match(e4) || [];
      }
      var Bn = r2(function(A4, e4) {
        try {
          return nr(A4, Pn, e4);
        } catch (A5) {
          return Cd(A5) ? A5 : new S(A5);
        }
      }), gn = $u(function(e4, A4) {
        return rr(A4, function(A5) {
          A5 = bt(A5), zA(e4, A5, nd(e4[A5], e4));
        }), e4;
      });
      function pn(A4) {
        return function() {
          return A4;
        };
      }
      var hn = Uu(), wn = Uu(true);
      function T2(A4) {
        return A4;
      }
      function Cn(A4) {
        return Ue("function" == typeof A4 ? A4 : w2(A4, 1));
      }
      var mn = r2(function(e4, u4) {
        return function(A4) {
          return me(A4, e4, u4);
        };
      }), bn = r2(function(e4, u4) {
        return function(A4) {
          return me(e4, A4, u4);
        };
      });
      function Qn(t3, e4, A4) {
        var u4 = I2(e4), d3 = le(e4, u4), n3 = (null != A4 || b2(e4) && (d3.length || !u4.length) || (A4 = e4, e4 = t3, t3 = this, d3 = le(e4, I2(e4))), !(b2(A4) && "chain" in A4 && !A4.chain)), r3 = md(t3);
        return rr(d3, function(A5) {
          var u5 = e4[A5];
          t3[A5] = u5, r3 && (t3.prototype[A5] = function() {
            var A6, e5 = this.__chain__;
            return n3 || e5 ? (((A6 = t3(this.__wrapped__)).__actions__ = _3(this.__actions__)).push({ func: u5, args: arguments, thisArg: t3 }), A6.__chain__ = e5, A6) : u5.apply(t3, cr([this.value()], arguments));
          });
        }), t3;
      }
      function En() {
      }
      var Fn = Iu(or), Un = Iu(Sa), _n = Iu(Na);
      function yn(A4) {
        return dt(A4) ? $a(bt(A4)) : (e4 = A4, function(A5) {
          return Be(A5, e4);
        });
        var e4;
      }
      var vn = Su(), In = Su(true);
      function Hn() {
        return [];
      }
      function Tn() {
        return false;
      }
      var Sn = vu(function(A4, e4) {
        return A4 + e4;
      }, 0), xn = Ru("ceil"), Ln = vu(function(A4, e4) {
        return A4 / e4;
      }, 1), Rn = Ru("floor");
      var On, Nn = vu(function(A4, e4) {
        return A4 * e4;
      }, 1), Kn = Ru("round"), Dn = vu(function(A4, e4) {
        return A4 - e4;
      }, 0);
      return B3.after = function(A4, e4) {
        if ("function" != typeof e4)
          throw new E3(kn);
        return A4 = y2(A4), function() {
          if (--A4 < 1)
            return e4.apply(this, arguments);
        };
      }, B3.ary = td, B3.assign = Od, B3.assignIn = Nd, B3.assignInWith = Kd, B3.assignWith = Dd, B3.at = Pd, B3.before = dd, B3.bind = nd, B3.bindAll = gn, B3.bindKey = rd, B3.castArray = function() {
        var A4;
        return arguments.length ? P(A4 = arguments[0]) ? A4 : [A4] : [];
      }, B3.chain = Mt, B3.chunk = function(A4, e4, u4) {
        e4 = (u4 ? s2(A4, e4, u4) : e4 === Pn) ? 1 : F3(y2(e4), 0);
        var t3 = null == A4 ? 0 : A4.length;
        if (!t3 || e4 < 1)
          return [];
        for (var d3 = 0, n3 = 0, r3 = Q2(lA(t3 / e4)); d3 < t3; )
          r3[n3++] = a3(A4, d3, d3 += e4);
        return r3;
      }, B3.compact = function(A4) {
        for (var e4 = -1, u4 = null == A4 ? 0 : A4.length, t3 = 0, d3 = []; ++e4 < u4; ) {
          var n3 = A4[e4];
          n3 && (d3[t3++] = n3);
        }
        return d3;
      }, B3.concat = function() {
        var A4 = arguments.length;
        if (!A4)
          return [];
        for (var e4 = Q2(A4 - 1), u4 = arguments[0], t3 = A4; t3--; )
          e4[t3 - 1] = arguments[t3];
        return cr(P(u4) ? _3(u4) : [u4], o2(e4, 1));
      }, B3.cond = function(t3) {
        var d3 = null == t3 ? 0 : t3.length, e4 = f3();
        return t3 = d3 ? or(t3, function(A4) {
          if ("function" != typeof A4[1])
            throw new E3(kn);
          return [e4(A4[0]), A4[1]];
        }) : [], r2(function(A4) {
          for (var e5 = -1; ++e5 < d3; ) {
            var u4 = t3[e5];
            if (nr(u4[0], this, A4))
              return nr(u4[1], this, A4);
          }
        });
      }, B3.conforms = function(A4) {
        return e4 = w2(A4, 1), u4 = I2(e4), function(A5) {
          return ee(A5, e4, u4);
        };
        var e4, u4;
      }, B3.constant = pn, B3.countBy = Vt, B3.create = function(A4, e4) {
        return A4 = OA(A4), null == e4 ? A4 : ZA(A4, e4);
      }, B3.curry = function A4(e4, u4, t3) {
        e4 = Ku(e4, 8, Pn, Pn, Pn, Pn, Pn, u4 = t3 ? Pn : u4);
        return e4.placeholder = A4.placeholder, e4;
      }, B3.curryRight = function A4(e4, u4, t3) {
        e4 = Ku(e4, 16, Pn, Pn, Pn, Pn, Pn, u4 = t3 ? Pn : u4);
        return e4.placeholder = A4.placeholder, e4;
      }, B3.debounce = ad, B3.defaults = kd, B3.defaultsDeep = Md, B3.defer = fA, B3.delay = od, B3.difference = n2, B3.differenceBy = FA, B3.differenceWith = A3, B3.drop = function(A4, e4, u4) {
        var t3 = null == A4 ? 0 : A4.length;
        return t3 ? a3(A4, (e4 = u4 || e4 === Pn ? 1 : y2(e4)) < 0 ? 0 : e4, t3) : [];
      }, B3.dropRight = function(A4, e4, u4) {
        var t3 = null == A4 ? 0 : A4.length;
        return t3 ? a3(A4, 0, (e4 = t3 - (e4 = u4 || e4 === Pn ? 1 : y2(e4))) < 0 ? 0 : e4) : [];
      }, B3.dropRightWhile = function(A4, e4) {
        return A4 && A4.length ? qe(A4, f3(e4, 3), true, true) : [];
      }, B3.dropWhile = function(A4, e4) {
        return A4 && A4.length ? qe(A4, f3(e4, 3), true) : [];
      }, B3.fill = function(A4, e4, u4, t3) {
        if (!(o3 = null == A4 ? 0 : A4.length))
          return [];
        u4 && "number" != typeof u4 && s2(A4, e4, u4) && (u4 = 0, t3 = o3);
        var d3 = A4, n3 = e4, r3 = u4, a4 = t3, o3 = d3.length;
        for ((r3 = y2(r3)) < 0 && (r3 = o3 < -r3 ? 0 : o3 + r3), (a4 = a4 === Pn || o3 < a4 ? o3 : y2(a4)) < 0 && (a4 += o3), a4 = a4 < r3 ? 0 : Ld(a4); r3 < a4; )
          d3[r3++] = n3;
        return d3;
      }, B3.filter = function(A4, e4) {
        return (P(A4) ? ar : oe)(A4, f3(e4, 3));
      }, B3.flatMap = function(A4, e4) {
        return o2(qt(A4, e4), 1);
      }, B3.flatMapDeep = function(A4, e4) {
        return o2(qt(A4, e4), 1 / 0);
      }, B3.flatMapDepth = function(A4, e4, u4) {
        return u4 = u4 === Pn ? 1 : y2(u4), o2(qt(A4, e4), u4);
      }, B3.flatten = _t, B3.flattenDeep = function(A4) {
        return (null == A4 ? 0 : A4.length) ? o2(A4, 1 / 0) : [];
      }, B3.flattenDepth = function(A4, e4) {
        return (null == A4 ? 0 : A4.length) ? o2(A4, e4 = e4 === Pn ? 1 : y2(e4)) : [];
      }, B3.flip = function(A4) {
        return Ku(A4, 512);
      }, B3.flow = hn, B3.flowRight = wn, B3.fromPairs = function(A4) {
        for (var e4 = -1, u4 = null == A4 ? 0 : A4.length, t3 = {}; ++e4 < u4; ) {
          var d3 = A4[e4];
          t3[d3[0]] = d3[1];
        }
        return t3;
      }, B3.functions = function(A4) {
        return null == A4 ? [] : le(A4, I2(A4));
      }, B3.functionsIn = function(A4) {
        return null == A4 ? [] : le(A4, H4(A4));
      }, B3.groupBy = Yt, B3.initial = function(A4) {
        return (null == A4 ? 0 : A4.length) ? a3(A4, 0, -1) : [];
      }, B3.intersection = X, B3.intersectionBy = sA, B3.intersectionWith = e3, B3.invert = Vd, B3.invertBy = Xd, B3.invokeMap = Zt, B3.iteratee = Cn, B3.keyBy = zt, B3.keys = I2, B3.keysIn = H4, B3.map = qt, B3.mapKeys = function(A4, t3) {
        var d3 = {};
        return t3 = f3(t3, 3), fe(A4, function(A5, e4, u4) {
          zA(d3, t3(A5, e4, u4), A5);
        }), d3;
      }, B3.mapValues = function(A4, t3) {
        var d3 = {};
        return t3 = f3(t3, 3), fe(A4, function(A5, e4, u4) {
          zA(d3, e4, t3(A5, e4, u4));
        }), d3;
      }, B3.matches = function(A4) {
        return He(w2(A4, 1));
      }, B3.matchesProperty = function(A4, e4) {
        return Te(A4, w2(e4, 1));
      }, B3.memoize = cd, B3.merge = Jd, B3.mergeWith = jd, B3.method = mn, B3.methodOf = bn, B3.mixin = Qn, B3.negate = id, B3.nthArg = function(e4) {
        return e4 = y2(e4), r2(function(A4) {
          return xe(A4, e4);
        });
      }, B3.omit = Yd, B3.omitBy = function(A4, e4) {
        return zd(A4, id(f3(e4)));
      }, B3.once = function(A4) {
        return dd(2, A4);
      }, B3.orderBy = function(A4, e4, u4, t3) {
        return null == A4 ? [] : Le(A4, e4 = P(e4) ? e4 : null == e4 ? [] : [e4], u4 = P(u4 = t3 ? Pn : u4) ? u4 : null == u4 ? [] : [u4]);
      }, B3.over = Fn, B3.overArgs = ru, B3.overEvery = Un, B3.overSome = _n, B3.partial = fd, B3.partialRight = sd, B3.partition = Ad, B3.pick = Zd, B3.pickBy = zd, B3.property = yn, B3.propertyOf = function(e4) {
        return function(A4) {
          return null == e4 ? Pn : Be(e4, A4);
        };
      }, B3.pull = iA, B3.pullAll = vt, B3.pullAllBy = function(A4, e4, u4) {
        return A4 && A4.length && e4 && e4.length ? Oe(A4, e4, f3(u4, 2)) : A4;
      }, B3.pullAllWith = function(A4, e4, u4) {
        return A4 && A4.length && e4 && e4.length ? Oe(A4, e4, Pn, u4) : A4;
      }, B3.pullAt = It, B3.range = vn, B3.rangeRight = In, B3.rearg = ld, B3.reject = function(A4, e4) {
        return (P(A4) ? ar : oe)(A4, id(f3(e4, 3)));
      }, B3.remove = function(A4, e4) {
        var u4 = [];
        if (A4 && A4.length) {
          var t3 = -1, d3 = [], n3 = A4.length;
          for (e4 = f3(e4, 3); ++t3 < n3; ) {
            var r3 = A4[t3];
            e4(r3, t3, A4) && (u4.push(r3), d3.push(t3));
          }
          Ne(A4, d3);
        }
        return u4;
      }, B3.rest = function(A4, e4) {
        if ("function" != typeof A4)
          throw new E3(kn);
        return r2(A4, e4 = e4 === Pn ? e4 : y2(e4));
      }, B3.reverse = Ht, B3.sampleSize = function(A4, e4, u4) {
        return e4 = (u4 ? s2(A4, e4, u4) : e4 === Pn) ? 1 : y2(e4), (P(A4) ? VA : ke)(A4, e4);
      }, B3.set = function(A4, e4, u4) {
        return null == A4 ? A4 : Me(A4, e4, u4);
      }, B3.setWith = function(A4, e4, u4, t3) {
        return t3 = "function" == typeof t3 ? t3 : Pn, null == A4 ? A4 : Me(A4, e4, u4, t3);
      }, B3.shuffle = function(A4) {
        return (P(A4) ? XA : Ge)(A4);
      }, B3.slice = function(A4, e4, u4) {
        var t3 = null == A4 ? 0 : A4.length;
        return t3 ? (u4 = u4 && "number" != typeof u4 && s2(A4, e4, u4) ? (e4 = 0, t3) : (e4 = null == e4 ? 0 : y2(e4), u4 === Pn ? t3 : y2(u4)), a3(A4, e4, u4)) : [];
      }, B3.sortBy = ed, B3.sortedUniq = function(A4) {
        return A4 && A4.length ? Je(A4) : [];
      }, B3.sortedUniqBy = function(A4, e4) {
        return A4 && A4.length ? Je(A4, f3(e4, 2)) : [];
      }, B3.split = function(A4, e4, u4) {
        return u4 && "number" != typeof u4 && s2(A4, e4, u4) && (e4 = u4 = Pn), (u4 = u4 === Pn ? Gn : u4 >>> 0) ? (A4 = l2(A4)) && ("string" == typeof e4 || null != e4 && !_d(e4)) && !(e4 = c2(e4)) && sr(A4) ? au(gr(A4), 0, u4) : A4.split(e4, u4) : [];
      }, B3.spread = function(u4, t3) {
        if ("function" != typeof u4)
          throw new E3(kn);
        return t3 = null == t3 ? 0 : F3(y2(t3), 0), r2(function(A4) {
          var e4 = A4[t3], A4 = au(A4, 0, t3);
          return e4 && cr(A4, e4), nr(u4, this, A4);
        });
      }, B3.tail = function(A4) {
        var e4 = null == A4 ? 0 : A4.length;
        return e4 ? a3(A4, 1, e4) : [];
      }, B3.take = function(A4, e4, u4) {
        return A4 && A4.length ? a3(A4, 0, (e4 = u4 || e4 === Pn ? 1 : y2(e4)) < 0 ? 0 : e4) : [];
      }, B3.takeRight = function(A4, e4, u4) {
        var t3 = null == A4 ? 0 : A4.length;
        return t3 ? a3(A4, (e4 = t3 - (e4 = u4 || e4 === Pn ? 1 : y2(e4))) < 0 ? 0 : e4, t3) : [];
      }, B3.takeRightWhile = function(A4, e4) {
        return A4 && A4.length ? qe(A4, f3(e4, 3), false, true) : [];
      }, B3.takeWhile = function(A4, e4) {
        return A4 && A4.length ? qe(A4, f3(e4, 3)) : [];
      }, B3.tap = function(A4, e4) {
        return e4(A4), A4;
      }, B3.throttle = function(A4, e4, u4) {
        var t3 = true, d3 = true;
        if ("function" != typeof A4)
          throw new E3(kn);
        return b2(u4) && (t3 = "leading" in u4 ? !!u4.leading : t3, d3 = "trailing" in u4 ? !!u4.trailing : d3), ad(A4, e4, { leading: t3, maxWait: e4, trailing: d3 });
      }, B3.thru = $t, B3.toArray = Sd, B3.toPairs = qd, B3.toPairsIn = An, B3.toPath = function(A4) {
        return P(A4) ? or(A4, bt) : C2(A4) ? [A4] : _3(mt(l2(A4)));
      }, B3.toPlainObject = Rd, B3.transform = function(A4, t3, d3) {
        var e4, u4 = P(A4), n3 = u4 || wd(A4) || Id(A4);
        return t3 = f3(t3, 4), null == d3 && (e4 = A4 && A4.constructor, d3 = n3 ? u4 ? new e4() : [] : b2(A4) && md(e4) ? OA(uA(A4)) : {}), (n3 ? rr : fe)(A4, function(A5, e5, u5) {
          return t3(d3, A5, e5, u5);
        }), d3;
      }, B3.unary = function(A4) {
        return td(A4, 1);
      }, B3.union = Tt, B3.unionBy = St, B3.unionWith = xt, B3.uniq = function(A4) {
        return A4 && A4.length ? Ye(A4) : [];
      }, B3.uniqBy = function(A4, e4) {
        return A4 && A4.length ? Ye(A4, f3(e4, 2)) : [];
      }, B3.uniqWith = function(A4, e4) {
        return e4 = "function" == typeof e4 ? e4 : Pn, A4 && A4.length ? Ye(A4, Pn, e4) : [];
      }, B3.unset = function(A4, e4) {
        return null == A4 || Ze(A4, e4);
      }, B3.unzip = Lt, B3.unzipWith = Rt, B3.update = function(A4, e4, u4) {
        return null == A4 ? A4 : ze(A4, e4, du(u4));
      }, B3.updateWith = function(A4, e4, u4, t3) {
        return t3 = "function" == typeof t3 ? t3 : Pn, null == A4 ? A4 : ze(A4, e4, du(u4), t3);
      }, B3.values = en, B3.valuesIn = function(A4) {
        return null == A4 ? [] : Ja(A4, H4(A4));
      }, B3.without = Ot, B3.words = ln, B3.wrap = function(A4, e4) {
        return fd(du(e4), A4);
      }, B3.xor = Nt, B3.xorBy = Kt, B3.xorWith = Dt, B3.zip = Pt, B3.zipObject = function(A4, e4) {
        return uu(A4 || [], e4 || [], JA);
      }, B3.zipObjectDeep = function(A4, e4) {
        return uu(A4 || [], e4 || [], Me);
      }, B3.zipWith = kt, B3.entries = qd, B3.entriesIn = An, B3.extend = Nd, B3.extendWith = Kd, Qn(B3, B3), B3.add = Sn, B3.attempt = Bn, B3.camelCase = un, B3.capitalize = tn, B3.ceil = xn, B3.clamp = function(A4, e4, u4) {
        return u4 === Pn && (u4 = e4, e4 = Pn), u4 !== Pn && (u4 = (u4 = v2(u4)) == u4 ? u4 : 0), e4 !== Pn && (e4 = (e4 = v2(e4)) == e4 ? e4 : 0), Ae(v2(A4), e4, u4);
      }, B3.clone = function(A4) {
        return w2(A4, 4);
      }, B3.cloneDeep = function(A4) {
        return w2(A4, 5);
      }, B3.cloneDeepWith = function(A4, e4) {
        return w2(A4, 5, e4 = "function" == typeof e4 ? e4 : Pn);
      }, B3.cloneWith = function(A4, e4) {
        return w2(A4, 4, e4 = "function" == typeof e4 ? e4 : Pn);
      }, B3.conformsTo = function(A4, e4) {
        return null == e4 || ee(A4, e4, I2(e4));
      }, B3.deburr = dn, B3.defaultTo = function(A4, e4) {
        return null == A4 || A4 != A4 ? e4 : A4;
      }, B3.divide = Ln, B3.endsWith = function(A4, e4, u4) {
        A4 = l2(A4), e4 = c2(e4);
        var t3 = A4.length, t3 = u4 = u4 === Pn ? t3 : Ae(y2(u4), 0, t3);
        return 0 <= (u4 -= e4.length) && A4.slice(u4, t3) == e4;
      }, B3.eq = D, B3.escape = function(A4) {
        return (A4 = l2(A4)) && $r.test(A4) ? A4.replace(kr, qa) : A4;
      }, B3.escapeRegExp = function(A4) {
        return (A4 = l2(A4)) && Zr.test(A4) ? A4.replace(Yr, "\\$&") : A4;
      }, B3.every = function(A4, e4, u4) {
        return (P(A4) ? Sa : re)(A4, f3(e4 = u4 && s2(A4, e4, u4) ? Pn : e4, 3));
      }, B3.find = Xt, B3.findIndex = Ft, B3.findKey = function(A4, e4) {
        return Ka(A4, f3(e4, 3), fe);
      }, B3.findLast = Wt, B3.findLastIndex = Ut, B3.findLastKey = function(A4, e4) {
        return Ka(A4, f3(e4, 3), se);
      }, B3.floor = Rn, B3.forEach = Jt, B3.forEachRight = jt, B3.forIn = function(A4, e4) {
        return null == A4 ? A4 : ce(A4, f3(e4, 3), H4);
      }, B3.forInRight = function(A4, e4) {
        return null == A4 ? A4 : ie(A4, f3(e4, 3), H4);
      }, B3.forOwn = function(A4, e4) {
        return A4 && fe(A4, f3(e4, 3));
      }, B3.forOwnRight = function(A4, e4) {
        return A4 && se(A4, f3(e4, 3));
      }, B3.get = $d, B3.gt = Bd, B3.gte = gd, B3.has = function(A4, e4) {
        return null != A4 && At(A4, e4, he);
      }, B3.hasIn = Gd, B3.head = yt, B3.identity = T2, B3.includes = function(A4, e4, u4, t3) {
        return A4 = i2(A4) ? A4 : en(A4), u4 = u4 && !t3 ? y2(u4) : 0, t3 = A4.length, u4 < 0 && (u4 = F3(t3 + u4, 0)), vd(A4) ? u4 <= t3 && -1 < A4.indexOf(e4, u4) : !!t3 && -1 < ir(A4, e4, u4);
      }, B3.indexOf = function(A4, e4, u4) {
        var t3 = null == A4 ? 0 : A4.length;
        return t3 ? ir(A4, e4, A4 = (A4 = null == u4 ? 0 : y2(u4)) < 0 ? F3(t3 + A4, 0) : A4) : -1;
      }, B3.inRange = function(A4, e4, u4) {
        return e4 = xd(e4), u4 === Pn ? (u4 = e4, e4 = 0) : u4 = xd(u4), (A4 = A4 = v2(A4)) >= U3(e4 = e4, u4 = u4) && A4 < F3(e4, u4);
      }, B3.invoke = Wd, B3.isArguments = pd, B3.isArray = P, B3.isArrayBuffer = hd, B3.isArrayLike = i2, B3.isArrayLikeObject = m2, B3.isBoolean = function(A4) {
        return true === A4 || false === A4 || k(A4) && u3(A4) == Xn;
      }, B3.isBuffer = wd, B3.isDate = G, B3.isElement = function(A4) {
        return k(A4) && 1 === A4.nodeType && !Ud(A4);
      }, B3.isEmpty = function(A4) {
        if (null != A4) {
          if (i2(A4) && (P(A4) || "string" == typeof A4 || "function" == typeof A4.splice || wd(A4) || Id(A4) || pd(A4)))
            return !A4.length;
          var e4, u4 = K(A4);
          if (u4 == Jn || u4 == zn)
            return !A4.size;
          if (at(A4))
            return !_e(A4).length;
          for (e4 in A4)
            if (O.call(A4, e4))
              return false;
        }
        return true;
      }, B3.isEqual = function(A4, e4) {
        return Qe(A4, e4);
      }, B3.isEqualWith = function(A4, e4, u4) {
        var t3 = (u4 = "function" == typeof u4 ? u4 : Pn) ? u4(A4, e4) : Pn;
        return t3 === Pn ? Qe(A4, e4, Pn, u4) : !!t3;
      }, B3.isError = Cd, B3.isFinite = function(A4) {
        return "number" == typeof A4 && pA(A4);
      }, B3.isFunction = md, B3.isInteger = bd, B3.isLength = Qd, B3.isMap = Ed, B3.isMatch = function(A4, e4) {
        return A4 === e4 || Ee(A4, e4, Yu(e4));
      }, B3.isMatchWith = function(A4, e4, u4) {
        return u4 = "function" == typeof u4 ? u4 : Pn, Ee(A4, e4, Yu(e4), u4);
      }, B3.isNaN = function(A4) {
        return Fd(A4) && A4 != +A4;
      }, B3.isNative = function(A4) {
        if (rt(A4))
          throw new S("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
        return Fe(A4);
      }, B3.isNil = function(A4) {
        return null == A4;
      }, B3.isNull = function(A4) {
        return null === A4;
      }, B3.isNumber = Fd, B3.isObject = b2, B3.isObjectLike = k, B3.isPlainObject = Ud, B3.isRegExp = _d, B3.isSafeInteger = function(A4) {
        return bd(A4) && -$n <= A4 && A4 <= $n;
      }, B3.isSet = yd, B3.isString = vd, B3.isSymbol = C2, B3.isTypedArray = Id, B3.isUndefined = function(A4) {
        return A4 === Pn;
      }, B3.isWeakMap = function(A4) {
        return k(A4) && K(A4) == Ar;
      }, B3.isWeakSet = function(A4) {
        return k(A4) && "[object WeakSet]" == u3(A4);
      }, B3.join = function(A4, e4) {
        return null == A4 ? "" : hA.call(A4, e4);
      }, B3.kebabCase = nn, B3.last = t2, B3.lastIndexOf = function(A4, e4, u4) {
        var t3 = null == A4 ? 0 : A4.length;
        if (!t3)
          return -1;
        var d3 = t3;
        if (u4 !== Pn && (d3 = (d3 = y2(u4)) < 0 ? F3(t3 + d3, 0) : U3(d3, t3 - 1)), e4 != e4)
          return Da(A4, ka, d3, true);
        for (var n3 = A4, r3 = e4, a4 = d3 + 1; a4--; )
          if (n3[a4] === r3)
            return a4;
        return a4;
      }, B3.lowerCase = rn, B3.lowerFirst = an, B3.lt = Hd, B3.lte = Td, B3.max = function(A4) {
        return A4 && A4.length ? ae(A4, T2, pe) : Pn;
      }, B3.maxBy = function(A4, e4) {
        return A4 && A4.length ? ae(A4, f3(e4, 2), pe) : Pn;
      }, B3.mean = function(A4) {
        return Ma(A4, T2);
      }, B3.meanBy = function(A4, e4) {
        return Ma(A4, f3(e4, 2));
      }, B3.min = function(A4) {
        return A4 && A4.length ? ae(A4, T2, ve) : Pn;
      }, B3.minBy = function(A4, e4) {
        return A4 && A4.length ? ae(A4, f3(e4, 2), ve) : Pn;
      }, B3.stubArray = Hn, B3.stubFalse = Tn, B3.stubObject = function() {
        return {};
      }, B3.stubString = function() {
        return "";
      }, B3.stubTrue = function() {
        return true;
      }, B3.multiply = Nn, B3.nth = function(A4, e4) {
        return A4 && A4.length ? xe(A4, y2(e4)) : Pn;
      }, B3.noConflict = function() {
        return dr._ === this && (dr._ = z2), this;
      }, B3.noop = En, B3.now = ud, B3.pad = function(A4, e4, u4) {
        A4 = l2(A4);
        var t3 = (e4 = y2(e4)) ? Br(A4) : 0;
        return !e4 || e4 <= t3 ? A4 : Hu(BA2(e4 = (e4 - t3) / 2), u4) + A4 + Hu(lA(e4), u4);
      }, B3.padEnd = function(A4, e4, u4) {
        A4 = l2(A4);
        var t3 = (e4 = y2(e4)) ? Br(A4) : 0;
        return e4 && t3 < e4 ? A4 + Hu(e4 - t3, u4) : A4;
      }, B3.padStart = function(A4, e4, u4) {
        A4 = l2(A4);
        var t3 = (e4 = y2(e4)) ? Br(A4) : 0;
        return e4 && t3 < e4 ? Hu(e4 - t3, u4) + A4 : A4;
      }, B3.parseInt = function(A4, e4, u4) {
        return e4 = u4 || null == e4 ? 0 : e4 && +e4, mA(l2(A4).replace(zr, ""), e4 || 0);
      }, B3.random = function(A4, e4, u4) {
        var t3;
        return u4 && "boolean" != typeof u4 && s2(A4, e4, u4) && (e4 = u4 = Pn), u4 === Pn && ("boolean" == typeof e4 ? (u4 = e4, e4 = Pn) : "boolean" == typeof A4 && (u4 = A4, A4 = Pn)), A4 === Pn && e4 === Pn ? (A4 = 0, e4 = 1) : (A4 = xd(A4), e4 === Pn ? (e4 = A4, A4 = 0) : e4 = xd(e4)), e4 < A4 && (t3 = A4, A4 = e4, e4 = t3), u4 || A4 % 1 || e4 % 1 ? (t3 = bA(), U3(A4 + t3 * (e4 - A4 + ba("1e-" + ((t3 + "").length - 1))), e4)) : Ke(A4, e4);
      }, B3.reduce = function(A4, e4, u4) {
        var t3 = P(A4) ? Ra : Ga, d3 = arguments.length < 3;
        return t3(A4, f3(e4, 4), u4, d3, de);
      }, B3.reduceRight = function(A4, e4, u4) {
        var t3 = P(A4) ? Oa : Ga, d3 = arguments.length < 3;
        return t3(A4, f3(e4, 4), u4, d3, ne);
      }, B3.repeat = function(A4, e4, u4) {
        return e4 = (u4 ? s2(A4, e4, u4) : e4 === Pn) ? 1 : y2(e4), De(l2(A4), e4);
      }, B3.replace = function() {
        var A4 = arguments, e4 = l2(A4[0]);
        return A4.length < 3 ? e4 : e4.replace(A4[1], A4[2]);
      }, B3.result = function(A4, e4, u4) {
        var t3 = -1, d3 = (e4 = nu(e4, A4)).length;
        for (d3 || (d3 = 1, A4 = Pn); ++t3 < d3; ) {
          var n3 = null == A4 ? Pn : A4[bt(e4[t3])];
          n3 === Pn && (t3 = d3, n3 = u4), A4 = md(n3) ? n3.call(A4) : n3;
        }
        return A4;
      }, B3.round = Kn, B3.runInContext = d2, B3.sample = function(A4) {
        return (P(A4) ? GA : Pe)(A4);
      }, B3.size = function(A4) {
        var e4;
        return null == A4 ? 0 : i2(A4) ? vd(A4) ? Br(A4) : A4.length : (e4 = K(A4)) == Jn || e4 == zn ? A4.size : _e(A4).length;
      }, B3.snakeCase = on2, B3.some = function(A4, e4, u4) {
        return (P(A4) ? Na : Ve)(A4, f3(e4 = u4 && s2(A4, e4, u4) ? Pn : e4, 3));
      }, B3.sortedIndex = function(A4, e4) {
        return Xe(A4, e4);
      }, B3.sortedIndexBy = function(A4, e4, u4) {
        return We(A4, e4, f3(u4, 2));
      }, B3.sortedIndexOf = function(A4, e4) {
        var u4 = null == A4 ? 0 : A4.length;
        if (u4) {
          var t3 = Xe(A4, e4);
          if (t3 < u4 && D(A4[t3], e4))
            return t3;
        }
        return -1;
      }, B3.sortedLastIndex = function(A4, e4) {
        return Xe(A4, e4, true);
      }, B3.sortedLastIndexBy = function(A4, e4, u4) {
        return We(A4, e4, f3(u4, 2), true);
      }, B3.sortedLastIndexOf = function(A4, e4) {
        if (null == A4 ? 0 : A4.length) {
          var u4 = Xe(A4, e4, true) - 1;
          if (D(A4[u4], e4))
            return u4;
        }
        return -1;
      }, B3.startCase = cn, B3.startsWith = function(A4, e4, u4) {
        return A4 = l2(A4), u4 = null == u4 ? 0 : Ae(y2(u4), 0, A4.length), e4 = c2(e4), A4.slice(u4, u4 + e4.length) == e4;
      }, B3.subtract = Dn, B3.sum = function(A4) {
        return A4 && A4.length ? Va(A4, T2) : 0;
      }, B3.sumBy = function(A4, e4) {
        return A4 && A4.length ? Va(A4, f3(e4, 2)) : 0;
      }, B3.template = function(r3, A4, e4) {
        var a4, o3, u4 = B3.templateSettings;
        e4 && s2(r3, A4, e4) && (A4 = Pn), r3 = l2(r3), A4 = Kd({}, A4, u4, Du);
        var t3 = I2(e4 = Kd({}, A4.imports, u4.imports, Du)), d3 = Ja(e4, t3), c3 = 0, u4 = A4.interpolate || la, i3 = "__p += '", e4 = R((A4.escape || la).source + "|" + u4.source + "|" + (u4 === Xr ? na : la).source + "|" + (A4.evaluate || la).source + "|$", "g"), n3 = "//# sourceURL=" + (O.call(A4, "sourceURL") ? (A4.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ma + "]") + "\n";
        if (r3.replace(e4, function(A5, e5, u5, t4, d4, n4) {
          return u5 = u5 || t4, i3 += r3.slice(c3, n4).replace(Ba, Ao), e5 && (a4 = true, i3 += "' +\n__e(" + e5 + ") +\n'"), d4 && (o3 = true, i3 += "';\n" + d4 + ";\n__p += '"), u5 && (i3 += "' +\n((__t = (" + u5 + ")) == null ? '' : __t) +\n'"), c3 = n4 + A5.length, A5;
        }), i3 += "';\n", u4 = O.call(A4, "variable") && A4.variable) {
          if (ta.test(u4))
            throw new S("Invalid `variable` option passed into `_.template`");
        } else
          i3 = "with (obj) {\n" + i3 + "\n}\n";
        if (i3 = (o3 ? i3.replace(Nr, "") : i3).replace(Kr, "$1").replace(Dr, "$1;"), i3 = "function(" + (u4 || "obj") + ") {\n" + (u4 ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (a4 ? ", __e = _.escape" : "") + (o3 ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + i3 + "return __p\n}", (e4 = Bn(function() {
          return x(t3, n3 + "return " + i3).apply(Pn, d3);
        })).source = i3, Cd(e4))
          throw e4;
        return e4;
      }, B3.times = function(A4, e4) {
        if ((A4 = y2(A4)) < 1 || $n < A4)
          return [];
        for (var u4 = Gn, t3 = U3(A4, Gn), t3 = (e4 = f3(e4), A4 -= Gn, Xa(t3, e4)); ++u4 < A4; )
          e4(u4);
        return t3;
      }, B3.toFinite = xd, B3.toInteger = y2, B3.toLength = Ld, B3.toLower = function(A4) {
        return l2(A4).toLowerCase();
      }, B3.toNumber = v2, B3.toSafeInteger = function(A4) {
        return A4 ? Ae(y2(A4), -$n, $n) : 0 === A4 ? A4 : 0;
      }, B3.toString = l2, B3.toUpper = function(A4) {
        return l2(A4).toUpperCase();
      }, B3.trim = function(A4, e4, u4) {
        return (A4 = l2(A4)) && (u4 || e4 === Pn) ? Wa(A4) : A4 && (e4 = c2(e4)) ? au(u4 = gr(A4), Ya(u4, e4 = gr(e4)), Za(u4, e4) + 1).join("") : A4;
      }, B3.trimEnd = function(A4, e4, u4) {
        return (A4 = l2(A4)) && (u4 || e4 === Pn) ? A4.slice(0, no(A4) + 1) : A4 && (e4 = c2(e4)) ? au(u4 = gr(A4), 0, Za(u4, gr(e4)) + 1).join("") : A4;
      }, B3.trimStart = function(A4, e4, u4) {
        return (A4 = l2(A4)) && (u4 || e4 === Pn) ? A4.replace(zr, "") : A4 && (e4 = c2(e4)) ? au(u4 = gr(A4), Ya(u4, gr(e4))).join("") : A4;
      }, B3.truncate = function(A4, e4) {
        var u4, t3 = 30, d3 = "...", e4 = (b2(e4) && (u4 = "separator" in e4 ? e4.separator : u4, t3 = "length" in e4 ? y2(e4.length) : t3, d3 = "omission" in e4 ? c2(e4.omission) : d3), (A4 = l2(A4)).length);
        if ((e4 = sr(A4) ? (n3 = gr(A4)).length : e4) <= t3)
          return A4;
        if ((e4 = t3 - Br(d3)) < 1)
          return d3;
        var n3, t3 = n3 ? au(n3, 0, e4).join("") : A4.slice(0, e4);
        if (u4 !== Pn)
          if (n3 && (e4 += t3.length - e4), _d(u4)) {
            if (A4.slice(e4).search(u4)) {
              var r3, a4 = t3;
              for ((u4 = u4.global ? u4 : R(u4.source, l2(ra.exec(u4)) + "g")).lastIndex = 0; r3 = u4.exec(a4); )
                var o3 = r3.index;
              t3 = t3.slice(0, o3 === Pn ? e4 : o3);
            }
          } else
            A4.indexOf(c2(u4), e4) != e4 && -1 < (n3 = t3.lastIndexOf(u4)) && (t3 = t3.slice(0, n3));
        return t3 + d3;
      }, B3.unescape = function(A4) {
        return (A4 = l2(A4)) && Mr.test(A4) ? A4.replace(Pr, ro) : A4;
      }, B3.uniqueId = function(A4) {
        var e4 = ++J;
        return l2(A4) + e4;
      }, B3.upperCase = fn, B3.upperFirst = sn, B3.each = Jt, B3.eachRight = jt, B3.first = yt, Qn(B3, (On = {}, fe(B3, function(A4, e4) {
        O.call(B3.prototype, e4) || (On[e4] = A4);
      }), On), { chain: false }), B3.VERSION = "4.17.21", rr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(A4) {
        B3[A4].placeholder = B3;
      }), rr(["drop", "take"], function(u4, t3) {
        h3.prototype[u4] = function(A4) {
          A4 = A4 === Pn ? 1 : F3(y2(A4), 0);
          var e4 = this.__filtered__ && !t3 ? new h3(this) : this.clone();
          return e4.__filtered__ ? e4.__takeCount__ = U3(A4, e4.__takeCount__) : e4.__views__.push({ size: U3(A4, Gn), type: u4 + (e4.__dir__ < 0 ? "Right" : "") }), e4;
        }, h3.prototype[u4 + "Right"] = function(A4) {
          return this.reverse()[u4](A4).reverse();
        };
      }), rr(["filter", "map", "takeWhile"], function(A4, e4) {
        var u4 = e4 + 1, t3 = 1 == u4 || 3 == u4;
        h3.prototype[A4] = function(A5) {
          var e5 = this.clone();
          return e5.__iteratees__.push({ iteratee: f3(A5, 3), type: u4 }), e5.__filtered__ = e5.__filtered__ || t3, e5;
        };
      }), rr(["head", "last"], function(A4, e4) {
        var u4 = "take" + (e4 ? "Right" : "");
        h3.prototype[A4] = function() {
          return this[u4](1).value()[0];
        };
      }), rr(["initial", "tail"], function(A4, e4) {
        var u4 = "drop" + (e4 ? "" : "Right");
        h3.prototype[A4] = function() {
          return this.__filtered__ ? new h3(this) : this[u4](1);
        };
      }), h3.prototype.compact = function() {
        return this.filter(T2);
      }, h3.prototype.find = function(A4) {
        return this.filter(A4).head();
      }, h3.prototype.findLast = function(A4) {
        return this.reverse().find(A4);
      }, h3.prototype.invokeMap = r2(function(e4, u4) {
        return "function" == typeof e4 ? new h3(this) : this.map(function(A4) {
          return me(A4, e4, u4);
        });
      }), h3.prototype.reject = function(A4) {
        return this.filter(id(f3(A4)));
      }, h3.prototype.slice = function(A4, e4) {
        A4 = y2(A4);
        var u4 = this;
        return u4.__filtered__ && (0 < A4 || e4 < 0) ? new h3(u4) : (A4 < 0 ? u4 = u4.takeRight(-A4) : A4 && (u4 = u4.drop(A4)), e4 !== Pn ? (e4 = y2(e4)) < 0 ? u4.dropRight(-e4) : u4.take(e4 - A4) : u4);
      }, h3.prototype.takeRightWhile = function(A4) {
        return this.reverse().takeWhile(A4).reverse();
      }, h3.prototype.toArray = function() {
        return this.take(Gn);
      }, fe(h3.prototype, function(c3, A4) {
        var i3 = /^(?:filter|find|map|reject)|While$/.test(A4), f4 = /^(?:head|last)$/.test(A4), s3 = B3[f4 ? "take" + ("last" == A4 ? "Right" : "") : A4], l3 = f4 || /^find/.test(A4);
        s3 && (B3.prototype[A4] = function() {
          function A5(A6) {
            return A6 = s3.apply(B3, cr([A6], t3)), f4 && a4 ? A6[0] : A6;
          }
          var e4, u4 = this.__wrapped__, t3 = f4 ? [1] : arguments, d3 = u4 instanceof h3, n3 = t3[0], r3 = d3 || P(u4), a4 = (r3 && i3 && "function" == typeof n3 && 1 != n3.length && (d3 = r3 = false), this.__chain__), n3 = !!this.__actions__.length, o3 = l3 && !a4, d3 = d3 && !n3;
          return !l3 && r3 ? (u4 = d3 ? u4 : new h3(this), (e4 = c3.apply(u4, t3)).__actions__.push({ func: $t, args: [A5], thisArg: Pn }), new p2(e4, a4)) : o3 && d3 ? c3.apply(this, t3) : (e4 = this.thru(A5), o3 ? f4 ? e4.value()[0] : e4.value() : e4);
        });
      }), rr(["pop", "push", "shift", "sort", "splice", "unshift"], function(A4) {
        var u4 = $[A4], t3 = /^(?:push|sort|unshift)$/.test(A4) ? "tap" : "thru", d3 = /^(?:pop|shift)$/.test(A4);
        B3.prototype[A4] = function() {
          var A5, e4 = arguments;
          return d3 && !this.__chain__ ? (A5 = this.value(), u4.apply(P(A5) ? A5 : [], e4)) : this[t3](function(A6) {
            return u4.apply(P(A6) ? A6 : [], e4);
          });
        };
      }), fe(h3.prototype, function(A4, e4) {
        var u4, t3 = B3[e4];
        t3 && (u4 = t3.name + "", O.call(vA, u4) || (vA[u4] = []), vA[u4].push({ name: e4, func: t3 }));
      }), vA[_u(Pn, 2).name] = [{ name: "wrapper", func: Pn }], h3.prototype.clone = function() {
        var A4 = new h3(this.__wrapped__);
        return A4.__actions__ = _3(this.__actions__), A4.__dir__ = this.__dir__, A4.__filtered__ = this.__filtered__, A4.__iteratees__ = _3(this.__iteratees__), A4.__takeCount__ = this.__takeCount__, A4.__views__ = _3(this.__views__), A4;
      }, h3.prototype.reverse = function() {
        var A4;
        return this.__filtered__ ? ((A4 = new h3(this)).__dir__ = -1, A4.__filtered__ = true) : (A4 = this.clone()).__dir__ *= -1, A4;
      }, h3.prototype.value = function() {
        var A4 = this.__wrapped__.value(), e4 = this.__dir__, u4 = P(A4), t3 = e4 < 0, d3 = u4 ? A4.length : 0, n3 = function(A5, e5, u5) {
          var t4 = -1, d4 = u5.length;
          for (; ++t4 < d4; ) {
            var n4 = u5[t4], r4 = n4.size;
            switch (n4.type) {
              case "drop":
                A5 += r4;
                break;
              case "dropRight":
                e5 -= r4;
                break;
              case "take":
                e5 = U3(e5, A5 + r4);
                break;
              case "takeRight":
                A5 = F3(A5, e5 - r4);
            }
          }
          return { start: A5, end: e5 };
        }(0, d3, this.__views__), r3 = n3.start, a4 = (n3 = n3.end) - r3, o3 = t3 ? n3 : r3 - 1, c3 = this.__iteratees__, i3 = c3.length, f4 = 0, s3 = U3(a4, this.__takeCount__);
        if (!u4 || !t3 && d3 == a4 && s3 == a4)
          return Au(A4, this.__actions__);
        var l3 = [];
        A:
          for (; a4-- && f4 < s3; ) {
            for (var B4 = -1, g3 = A4[o3 += e4]; ++B4 < i3; ) {
              var p3 = c3[B4], h4 = p3.iteratee, p3 = p3.type, h4 = h4(g3);
              if (2 == p3)
                g3 = h4;
              else if (!h4) {
                if (1 == p3)
                  continue A;
                break A;
              }
            }
            l3[f4++] = g3;
          }
        return l3;
      }, B3.prototype.at = Gt, B3.prototype.chain = function() {
        return Mt(this);
      }, B3.prototype.commit = function() {
        return new p2(this.value(), this.__chain__);
      }, B3.prototype.next = function() {
        this.__values__ === Pn && (this.__values__ = Sd(this.value()));
        var A4 = this.__index__ >= this.__values__.length;
        return { done: A4, value: A4 ? Pn : this.__values__[this.__index__++] };
      }, B3.prototype.plant = function(A4) {
        for (var e4, u4 = this; u4 instanceof KA; )
          var t3 = Et(u4), d3 = (t3.__index__ = 0, t3.__values__ = Pn, e4 ? d3.__wrapped__ = t3 : e4 = t3, t3), u4 = u4.__wrapped__;
        return d3.__wrapped__ = A4, e4;
      }, B3.prototype.reverse = function() {
        var A4 = this.__wrapped__;
        return A4 instanceof h3 ? (A4 = A4, (A4 = (A4 = this.__actions__.length ? new h3(this) : A4).reverse()).__actions__.push({ func: $t, args: [Ht], thisArg: Pn }), new p2(A4, this.__chain__)) : this.thru(Ht);
      }, B3.prototype.toJSON = B3.prototype.valueOf = B3.prototype.value = function() {
        return Au(this.__wrapped__, this.__actions__);
      }, B3.prototype.first = B3.prototype.head, aA && (B3.prototype[aA] = function() {
        return this;
      }), B3;
    }();
    d ? ((d.exports = pr)._ = pr, t._ = pr) : dr._ = pr;
  }.call(commonjsGlobal$1);
}(lodash$1, lodash$1.exports), lodash$1.exports), NameType = ((A2) => (A2.txt = "txt", A2.latex = "latex", A2.latexText = "latexText", A2.special = "special", A2.between = "between", A2))(NameType || {});
let __uniqueId = 1;
function matchBackets(A2, e2, u2) {
  return XRegExp$1.matchRecursive(A2, e2 || "{", u2 || "}", "g", { valueNames: ["latex", null, "between", null], unbalanced: "skip-lazy" });
}
function calcIndex(A2, e2 = "") {
  return A2 + e2.length;
}
function signTypeValidate(A2, e2, u2 = false) {
  return u2 ? A2.includes(e2) : A2.some((A3) => e2.includes(A3));
}
function parseIndependentSign(r, a2, o) {
  var A2 = independentSignList.filter((A3) => {
    var e2 = r.__value.slice(r.value.indexOf(A3) - 1, r.__value.indexOf(A3));
    return r.__value.includes(A3) && ("\\" === e2 || "\n" === A3);
  });
  if (A2.length) {
    let d = _$1.flatten(A2.map((t) => Array.from(new Set(r.__value.matchAll(new RegExp(t, "g")))).map((A3, e2) => {
      var u2 = signTypeValidate(noDoubleLines, A3[0]) ? A3[0] : "\\" + A3[0];
      if (signTypeValidate(noDoubleLines, A3[0]) && u2 === t || !signTypeValidate(noDoubleLines, A3[0]) && "\\" === r.value.slice(A3.index - 1, A3.index))
        return { value: u2, start: A3 = signTypeValidate(noDoubleLines, A3[0]) ? A3.index || 0 : (A3.index || 1) - 1, end: calcIndex(A3, u2), name: NameType.latex };
    }))).filter((A3) => A3).sort((A3, e2) => A3.start - e2.start), n = r.start;
    return d.forEach((A3, e2) => {
      var u2, t;
      A3.start > n && (u2 = r.value.slice(n, A3.start), t = r.__start + r.start + (((o == null ? void 0 : o.end) || 0) + 1), u2) && a2.splice(e2, 0, { __id: __uniqueId++, name: NameType.txt, value: u2, __value: u2, start: n, end: calcIndex(n, u2), __start: t, __end: calcIndex(t, u2), parentNode: o }), a2.push({ __id: __uniqueId++, name: "\n" === A3.value ? NameType.special : NameType.latexText, value: A3.value, __value: A3.value, start: A3.start, end: A3.end, __start: calcIndex(r.__start + A3.start + (((o == null ? void 0 : o.end) || 0) + 1)), __end: calcIndex(r.__start + A3.start + (((o == null ? void 0 : o.end) || 0) + 1), A3.value), parentNode: o }), n = A3.end, (1 < d.length && e2 === d.length - 1 || 1 === d.length) && (t = r.value.slice(n)) && a2.push({ __id: __uniqueId++, name: NameType.txt, value: t, __value: t, start: n, end: calcIndex(n, t), __start: calcIndex(r.__start + n + (((o == null ? void 0 : o.end) || 0) + 1)), __end: calcIndex(r.__start + n, t), parentNode: o });
    }), true;
  }
  return false;
}
function parseStrRecursive(A2, o) {
  let c = [], i = matchBackets(A2);
  i.length ? i.forEach((A3, e3) => {
    var u2, t, d, n, r, a2 = A3.value;
    "between" === A3.name && (d = (t = (u2 = (n = Object.assign({}, i[e3 - 1])).value || "").split("\\")).pop() || "", e3 = i[e3 + 1], r = signTypeValidate(bracketSignList, d), "^" === u2.slice(-1) || r ? (A3.name = NameType.latex, o && (A3.parentNode = o), "^" === u2.slice(-1) ? (n.__value = n.value, n.value = u2.slice(0, -1), n.name = NameType.txt, A3.__value = `^{${A3.__value}}`, A3.value = "^") : (n.value = t.join("\\"), n.__value = n.value, n.name = NameType.txt, n.end = calcIndex(n.start, n.value), n.__start = calcIndex(n.start + ((o == null ? void 0 : o.start) || 0)), n.__end = calcIndex(n.__start, n.__value), A3.__value = `\\${d}{${A3.value}}`, A3.value = "\\" + d, A3.start = A3.start - A3.value.length - 1, A3.end = calcIndex(A3.start, A3.value), A3.__start = calcIndex((o ? o.end + 1 : 0) + A3.start), A3.__end = calcIndex(A3.__start, A3.__value), !parseIndependentSign(n, c, n.parentNode) && n.value && (n.end = calcIndex(n.start, n.value), n.__start = calcIndex(n.start + (o ? o.end + 1 : 0)), n.__end = calcIndex(n.__start, n.__value), n.parentNode = o, n.__id || (n.__id = __uniqueId++), c.push(n)), a2.includes("\\") || signTypeValidate(noDoubleLines, a2) ? (A3.brackets || (A3.brackets = {}), r = Object.keys((A3 == null ? void 0 : A3.brackets) || {}), A3.brackets[r.length] = parseStrRecursive(`{${a2}}`, Object.assign({}, A3))) : (t = calcIndex(((A3 == null ? void 0 : A3.end) || 0) + 1), A3.brackets || (A3.brackets = { 0: [{ name: NameType.txt, value: a2, __value: a2, __id: __uniqueId++, start: 0, end: calcIndex(((o == null ? void 0 : o.start) || 0) + 0, a2), __start: t, __end: calcIndex(t, a2), parentNode: A3 }] })), e3 && "between" === e3.name && signTypeValidate(doubleBracketSignList, u2) && (d = `{${e3.value}}`, A3.__value += d, e3.value = "", e3.__value = "", e3.name = NameType.txt, A3.brackets || (A3.brackets = {}), n = Object.keys((A3 == null ? void 0 : A3.brackets) || {}), A3.brackets[n.length] = parseStrRecursive(d, Object.assign({}, A3)))), A3.__end = calcIndex(A3.__start, A3.__value), A3.__id || (A3.__id = __uniqueId++), A3.value && c.push(A3)) : (A3.__value = A3.value, A3.start--, A3.end--, A3.parentNode = o, A3.name = NameType.latex, A3.__start = calcIndex(A3.start + ((o == null ? void 0 : o.__start) || 0)), A3.__end = calcIndex(A3.__start, A3.__value), A3.parentNode = A3, c.push(...parseStrRecursive(A3.value, o)))), A3.value.includes("\\") || signTypeValidate(noDoubleLines, A3.value) || !A3.value || (A3.name = NameType.txt, A3.__value = A3.value, A3.end = calcIndex(A3.start, A3.value), (A3.parentNode = o) ? (A3.start = 0, A3.end = calcIndex(-1, A3.value), o.brackets ? (r = o.brackets[Object.keys(o.brackets || {}).length - 1] || [], A3.__start = r[r.length - 1].__end + 2, A3.__end = calcIndex(A3.__start, A3.value)) : (A3.__start = 0, A3.__end = calcIndex(A3.__start, A3.__value))) : (A3.__start = A3.start, A3.__end = calcIndex(A3.__start, A3.__value)), A3.__id || (A3.__id = __uniqueId++), c.push(A3));
  }) : (e2 = o ? ((o == null ? void 0 : o.end) || 0) + 1 : 0, parseIndependentSign(e2 = { __id: -1, name: NameType.txt, value: A2, __value: A2, start: 0, end: A2.length, __start: e2, __end: calcIndex(e2, A2), parentNode: o }, c, o) || (e2.__id = __uniqueId++, c.push(e2)));
  var e2, A2 = c.sort((A3, e3) => A3.__id - e3.__id);
  return A2;
}
function resetData() {
  __uniqueId = 1;
}
function setSelectionRange(A2, e2, u2) {
  var t, d;
  A2 && ((t = window.getSelection()).removeAllRanges(), void 0 !== e2 && void 0 !== u2 ? ((d = document.createRange()).setStart(A2, e2), d.setEnd(A2, u2), t.addRange(d)) : (t.selectAllChildren(A2), t.collapseToEnd()));
}
function insertNode(A2, e2, u2) {
  var _a2;
  var { contentTree: A2, resultHtml: t } = contentToHtml(A2), t = (_a2 = new DOMParser().parseFromString(t, "text/html").querySelector("body")) == null ? void 0 : _a2.children[0];
  if (t) {
    e2 && e2.insertBefore(t, e2 == null ? void 0 : e2.childNodes[u2]);
    u2 = getNodeByDeep(t), t = getNodeIdByDeep(A2, (u2 == null ? void 0 : u2.className.split("-")[1]) || "");
    if ((t == null ? void 0 : t.name) === NameType.txt)
      return { cursorNode: u2, cursorIndex: 0 };
    if ((t == null ? void 0 : t.name) === NameType.latexText)
      return { cursorNode: u2, cursorIndex: 1 };
  }
  return { cursorNode: e2, cursorIndex: 0 };
}
function contentToHtml(A2) {
  resetData();
  A2 = parseStrRecursive(A2);
  return { contentTree: A2, resultHtml: getRecursiveHtml(A2) };
}
function getRecursiveHtml(A2) {
  let u2 = "";
  return A2.forEach((A3) => {
    if (A3.name === NameType.latex) {
      if (u2 += `<span class='${A3.brackets ? "bracket" : ""} lx-${A3.__id}' >` + A3.value, A3.brackets)
        for (const e2 in A3.brackets)
          u2 = (u2 += "<span>{</span>") + getRecursiveHtml(A3.brackets[e2]) + "<span>}</span>";
      u2 += "</span>";
    } else
      u2 += `<span class='tx-${A3.__id}' >${A3.value}</span>`;
  }), u2;
}
function getNodeIdByDeep(e2, u2, t = false) {
  let d = null;
  for (let A2 = 0; A2 < e2.length; A2++) {
    var n = e2[A2];
    if (n.brackets)
      for (const r in n.brackets)
        d = getNodeIdByDeep(n.brackets[r], u2, true);
    if (t) {
      if (n.__id.toString() === u2 && !n.brackets) {
        d = n;
        break;
      }
      if (n.__id.toString() !== u2 && !n.brackets && "txt" === n.name) {
        d = n;
        break;
      }
    } else if (!n.brackets && n.__id.toString() === u2) {
      d = n;
      break;
    }
  }
  return d;
}
function getNodeByDeep(A2) {
  var _a2, _b2;
  if ((_a2 = A2 == null ? void 0 : A2.children) == null ? void 0 : _a2.length) {
    var e2 = _$1.reverse(Array.from(A2 == null ? void 0 : A2.children));
    for (let A3 = 0; A3 < e2.length; A3++) {
      var u2 = getNodeByDeep(e2[A3]);
      if (u2)
        return u2;
    }
  }
  if (!((_b2 = A2 == null ? void 0 : A2.children) == null ? void 0 : _b2.length) && 1 === (A2 == null ? void 0 : A2.nodeType) && A2.className.length)
    return A2;
}
async function observerNode(A2, u2) {
  A2 && new MutationObserver(function(A3) {
    A3.forEach((A4) => {
      switch (A4.type) {
        case "characterData":
          var e2 = window.getSelection();
          u2(e2);
          break;
        case "childList":
          e2 = window.getSelection();
          u2(e2);
      }
    });
  }).observe(A2, { childList: true, characterData: true, subtree: true });
}
function getSelection(t) {
  var _a2, _b2;
  const d = window.getSelection();
  if ((d == null ? void 0 : d.isCollapsed) && d && d.anchorNode) {
    let u2 = { cursorNodeIndex: 0, cursorNode: void 0 };
    if (3 === (d == null ? void 0 : d.anchorNode.nodeType)) {
      const n = d["anchorOffset"];
      0 < n ? Array.from(((_a2 = d.anchorNode.parentNode) == null ? void 0 : _a2.childNodes) || []).forEach((A2, e2) => {
        d.containsNode(A2, true) && (t = false, A2.splitText(n), u2.cursorNodeIndex = e2 + 1, u2.cursorNode = d.anchorNode.parentNode);
      }) : Array.from(((_b2 = d.anchorNode.parentNode) == null ? void 0 : _b2.childNodes) || []).forEach((A2, e2) => {
        A2 === d.anchorNode && (u2.cursorNodeIndex = e2, u2.cursorNode = d.anchorNode.parentNode);
      });
    } else
      1 === (d == null ? void 0 : d.anchorNode.nodeType) && (u2.cursorNode = d == null ? void 0 : d.anchorNode, u2.cursorNodeIndex = d == null ? void 0 : d.anchorOffset);
    if (u2.cursorNode)
      return { ...u2, isChangeCursor: t };
  }
  return null;
}
var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, lodash = { exports: {} }, _ = (!function(y, v) {
  !function() {
    var Pn, kn = "Expected a function", hr = "__lodash_hash_undefined__", wr = "__lodash_placeholder__", Mn = 9007199254740991, Cr = NaN, $n = 4294967295, mr = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]], Gn = "[object Arguments]", br = "[object Array]", Vn = "[object Boolean]", Xn = "[object Date]", Qr = "[object Error]", Er = "[object Function]", Fr = "[object GeneratorFunction]", Wn = "[object Map]", Jn = "[object Number]", jn = "[object Object]", Ur = "[object Promise]", Yn = "[object RegExp]", Zn = "[object Set]", zn = "[object String]", _r = "[object Symbol]", qn = "[object WeakMap]", Ar = "[object ArrayBuffer]", er = "[object DataView]", yr = "[object Float32Array]", vr = "[object Float64Array]", Ir = "[object Int8Array]", Hr = "[object Int16Array]", Tr = "[object Int32Array]", Sr = "[object Uint8Array]", xr = "[object Uint8ClampedArray]", Lr = "[object Uint16Array]", Rr = "[object Uint32Array]", Or = /\b__p \+= '';/g, Nr = /\b(__p \+=) '' \+/g, Kr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Dr = /&(?:amp|lt|gt|quot|#39);/g, Pr = /[&<>"']/g, kr = RegExp(Dr.source), Mr = RegExp(Pr.source), $r = /<%-([\s\S]+?)%>/g, Gr = /<%([\s\S]+?)%>/g, Vr = /<%=([\s\S]+?)%>/g, Xr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Wr = /^\w*$/, Jr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, jr = /[\\^$.*+?()[\]{}|]/g, Yr = RegExp(jr.source), Zr = /^\s+/, n = /\s/, zr = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, qr = /\{\n\/\* \[wrapped with (.+)\] \*/, Aa = /,? & /, ea = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ua = /[()=,{}\[\]\/\s]/, ta = /\\(\\)?/g, da = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, na = /\w*$/, ra = /^[-+]0x[0-9a-f]+$/i, aa = /^0b[01]+$/i, oa = /^\[object .+?Constructor\]$/, ca = /^0o[0-7]+$/i, ia = /^(?:0|[1-9]\d*)$/, fa = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, sa = /($^)/, la = /['\n\r\u2028\u2029\\]/g, r = "\\ud800-\\udfff", a2 = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", o = "\\u2700-\\u27bf", A2 = "a-z\\xdf-\\xf6\\xf8-\\xff", e2 = "A-Z\\xc0-\\xd6\\xd8-\\xde", c = "\\ufe0e\\ufe0f", i = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", u2 = "[" + r + "]", f2 = "[" + i + "]", s = "[" + a2 + "]", l = "[" + o + "]", B = "[" + A2 + "]", i = "[^" + r + i + "\\d+" + o + A2 + e2 + "]", o = "\\ud83c[\\udffb-\\udfff]", A2 = "[^" + r + "]", g = "(?:\\ud83c[\\udde6-\\uddff]){2}", t = "[\\ud800-\\udbff][\\udc00-\\udfff]", e2 = "[" + e2 + "]", p = "(?:" + B + "|" + i + ")", i = "(?:" + e2 + "|" + i + ")", h2 = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?", w = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?", C = "(?:" + s + "|" + o + ")?", m = "[" + c + "]?", m = m + C + ("(?:\\u200d(?:" + [A2, g, t].join("|") + ")" + m + C + ")*"), C = "(?:" + [l, g, t].join("|") + ")" + m, l = "(?:" + [A2 + s + "?", s, g, t, u2].join("|") + ")", Ba = RegExp("['\u2019]", "g"), ga = RegExp(s, "g"), b = RegExp(o + "(?=" + o + ")|" + l + m, "g"), pa = RegExp([e2 + "?" + B + "+" + h2 + "(?=" + [f2, e2, "$"].join("|") + ")", i + "+" + w + "(?=" + [f2, e2 + p, "$"].join("|") + ")", e2 + "?" + p + "+" + h2, e2 + "+" + w, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", C].join("|"), "g"), Q = RegExp("[\\u200d" + r + a2 + c + "]"), ha = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, wa = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Ca = -1, ur = {}, tr = (ur[yr] = ur[vr] = ur[Ir] = ur[Hr] = ur[Tr] = ur[Sr] = ur[xr] = ur[Lr] = ur[Rr] = true, ur[Gn] = ur[br] = ur[Ar] = ur[Vn] = ur[er] = ur[Xn] = ur[Qr] = ur[Er] = ur[Wn] = ur[Jn] = ur[jn] = ur[Yn] = ur[Zn] = ur[zn] = ur[qn] = false, {}), E2 = (tr[Gn] = tr[br] = tr[Ar] = tr[er] = tr[Vn] = tr[Xn] = tr[yr] = tr[vr] = tr[Ir] = tr[Hr] = tr[Tr] = tr[Wn] = tr[Jn] = tr[jn] = tr[Yn] = tr[Zn] = tr[zn] = tr[_r] = tr[Sr] = tr[xr] = tr[Lr] = tr[Rr] = true, tr[Qr] = tr[Er] = tr[qn] = false, { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }), ma = parseFloat, ba = parseInt, A2 = "object" == typeof commonjsGlobal && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal, g = "object" == typeof self && self && self.Object === Object && self, dr = A2 || g || Function("return this")(), t = v && !v.nodeType && v, d = t && y && !y.nodeType && y, Qa = d && d.exports === t, F2 = Qa && A2.process, u2 = function() {
      try {
        var A3 = d && d.require && d.require("util").types;
        return A3 ? A3 : F2 && F2.binding && F2.binding("util");
      } catch (A4) {
      }
    }(), Ea = u2 && u2.isArrayBuffer, Fa = u2 && u2.isDate, Ua = u2 && u2.isMap, _a2 = u2 && u2.isRegExp, ya = u2 && u2.isSet, va = u2 && u2.isTypedArray;
    function nr(A3, e3, u3) {
      switch (u3.length) {
        case 0:
          return A3.call(e3);
        case 1:
          return A3.call(e3, u3[0]);
        case 2:
          return A3.call(e3, u3[0], u3[1]);
        case 3:
          return A3.call(e3, u3[0], u3[1], u3[2]);
      }
      return A3.apply(e3, u3);
    }
    function Ia(A3, e3, u3, t2) {
      for (var d2 = -1, n2 = null == A3 ? 0 : A3.length; ++d2 < n2; ) {
        var r2 = A3[d2];
        e3(t2, r2, u3(r2), A3);
      }
      return t2;
    }
    function rr(A3, e3) {
      for (var u3 = -1, t2 = null == A3 ? 0 : A3.length; ++u3 < t2 && false !== e3(A3[u3], u3, A3); )
        ;
      return A3;
    }
    function Ha(A3, e3) {
      for (var u3 = null == A3 ? 0 : A3.length; u3-- && false !== e3(A3[u3], u3, A3); )
        ;
      return A3;
    }
    function Ta(A3, e3) {
      for (var u3 = -1, t2 = null == A3 ? 0 : A3.length; ++u3 < t2; )
        if (!e3(A3[u3], u3, A3))
          return false;
      return true;
    }
    function ar(A3, e3) {
      for (var u3 = -1, t2 = null == A3 ? 0 : A3.length, d2 = 0, n2 = []; ++u3 < t2; ) {
        var r2 = A3[u3];
        e3(r2, u3, A3) && (n2[d2++] = r2);
      }
      return n2;
    }
    function Sa(A3, e3) {
      return !!(null == A3 ? 0 : A3.length) && -1 < ir(A3, e3, 0);
    }
    function xa(A3, e3, u3) {
      for (var t2 = -1, d2 = null == A3 ? 0 : A3.length; ++t2 < d2; )
        if (u3(e3, A3[t2]))
          return true;
      return false;
    }
    function or(A3, e3) {
      for (var u3 = -1, t2 = null == A3 ? 0 : A3.length, d2 = Array(t2); ++u3 < t2; )
        d2[u3] = e3(A3[u3], u3, A3);
      return d2;
    }
    function cr(A3, e3) {
      for (var u3 = -1, t2 = e3.length, d2 = A3.length; ++u3 < t2; )
        A3[d2 + u3] = e3[u3];
      return A3;
    }
    function La(A3, e3, u3, t2) {
      var d2 = -1, n2 = null == A3 ? 0 : A3.length;
      for (t2 && n2 && (u3 = A3[++d2]); ++d2 < n2; )
        u3 = e3(u3, A3[d2], d2, A3);
      return u3;
    }
    function Ra(A3, e3, u3, t2) {
      var d2 = null == A3 ? 0 : A3.length;
      for (t2 && d2 && (u3 = A3[--d2]); d2--; )
        u3 = e3(u3, A3[d2], d2, A3);
      return u3;
    }
    function Oa(A3, e3) {
      for (var u3 = -1, t2 = null == A3 ? 0 : A3.length; ++u3 < t2; )
        if (e3(A3[u3], u3, A3))
          return true;
      return false;
    }
    var U2 = Ma("length");
    function Na(A3, t2, e3) {
      var d2;
      return e3(A3, function(A4, e4, u3) {
        if (t2(A4, e4, u3))
          return d2 = e4, false;
      }), d2;
    }
    function Ka(A3, e3, u3, t2) {
      for (var d2 = A3.length, n2 = u3 + (t2 ? 1 : -1); t2 ? n2-- : ++n2 < d2; )
        if (e3(A3[n2], n2, A3))
          return n2;
      return -1;
    }
    function ir(A3, e3, u3) {
      if (e3 != e3)
        return Ka(A3, Pa, u3);
      for (var t2 = A3, d2 = e3, n2 = u3 - 1, r2 = t2.length; ++n2 < r2; )
        if (t2[n2] === d2)
          return n2;
      return -1;
    }
    function Da(A3, e3, u3, t2) {
      for (var d2 = u3 - 1, n2 = A3.length; ++d2 < n2; )
        if (t2(A3[d2], e3))
          return d2;
      return -1;
    }
    function Pa(A3) {
      return A3 != A3;
    }
    function ka(A3, e3) {
      var u3 = null == A3 ? 0 : A3.length;
      return u3 ? Ga(A3, e3) / u3 : Cr;
    }
    function Ma(e3) {
      return function(A3) {
        return null == A3 ? Pn : A3[e3];
      };
    }
    function _2(e3) {
      return function(A3) {
        return null == e3 ? Pn : e3[A3];
      };
    }
    function $a(A3, t2, d2, n2, e3) {
      return e3(A3, function(A4, e4, u3) {
        d2 = n2 ? (n2 = false, A4) : t2(d2, A4, e4, u3);
      }), d2;
    }
    function Ga(A3, e3) {
      for (var u3, t2 = -1, d2 = A3.length; ++t2 < d2; ) {
        var n2 = e3(A3[t2]);
        n2 !== Pn && (u3 = u3 === Pn ? n2 : u3 + n2);
      }
      return u3;
    }
    function Va(A3, e3) {
      for (var u3 = -1, t2 = Array(A3); ++u3 < A3; )
        t2[u3] = e3(u3);
      return t2;
    }
    function Xa(A3) {
      return A3 && A3.slice(0, to(A3) + 1).replace(Zr, "");
    }
    function fr(e3) {
      return function(A3) {
        return e3(A3);
      };
    }
    function Wa(e3, A3) {
      return or(A3, function(A4) {
        return e3[A4];
      });
    }
    function Ja(A3, e3) {
      return A3.has(e3);
    }
    function ja(A3, e3) {
      for (var u3 = -1, t2 = A3.length; ++u3 < t2 && -1 < ir(e3, A3[u3], 0); )
        ;
      return u3;
    }
    function Ya(A3, e3) {
      for (var u3 = A3.length; u3-- && -1 < ir(e3, A3[u3], 0); )
        ;
      return u3;
    }
    var Za = _2({ "\xC0": "A", "\xC1": "A", "\xC2": "A", "\xC3": "A", "\xC4": "A", "\xC5": "A", "\xE0": "a", "\xE1": "a", "\xE2": "a", "\xE3": "a", "\xE4": "a", "\xE5": "a", "\xC7": "C", "\xE7": "c", "\xD0": "D", "\xF0": "d", "\xC8": "E", "\xC9": "E", "\xCA": "E", "\xCB": "E", "\xE8": "e", "\xE9": "e", "\xEA": "e", "\xEB": "e", "\xCC": "I", "\xCD": "I", "\xCE": "I", "\xCF": "I", "\xEC": "i", "\xED": "i", "\xEE": "i", "\xEF": "i", "\xD1": "N", "\xF1": "n", "\xD2": "O", "\xD3": "O", "\xD4": "O", "\xD5": "O", "\xD6": "O", "\xD8": "O", "\xF2": "o", "\xF3": "o", "\xF4": "o", "\xF5": "o", "\xF6": "o", "\xF8": "o", "\xD9": "U", "\xDA": "U", "\xDB": "U", "\xDC": "U", "\xF9": "u", "\xFA": "u", "\xFB": "u", "\xFC": "u", "\xDD": "Y", "\xFD": "y", "\xFF": "y", "\xC6": "Ae", "\xE6": "ae", "\xDE": "Th", "\xFE": "th", "\xDF": "ss", "\u0100": "A", "\u0102": "A", "\u0104": "A", "\u0101": "a", "\u0103": "a", "\u0105": "a", "\u0106": "C", "\u0108": "C", "\u010A": "C", "\u010C": "C", "\u0107": "c", "\u0109": "c", "\u010B": "c", "\u010D": "c", "\u010E": "D", "\u0110": "D", "\u010F": "d", "\u0111": "d", "\u0112": "E", "\u0114": "E", "\u0116": "E", "\u0118": "E", "\u011A": "E", "\u0113": "e", "\u0115": "e", "\u0117": "e", "\u0119": "e", "\u011B": "e", "\u011C": "G", "\u011E": "G", "\u0120": "G", "\u0122": "G", "\u011D": "g", "\u011F": "g", "\u0121": "g", "\u0123": "g", "\u0124": "H", "\u0126": "H", "\u0125": "h", "\u0127": "h", "\u0128": "I", "\u012A": "I", "\u012C": "I", "\u012E": "I", "\u0130": "I", "\u0129": "i", "\u012B": "i", "\u012D": "i", "\u012F": "i", "\u0131": "i", "\u0134": "J", "\u0135": "j", "\u0136": "K", "\u0137": "k", "\u0138": "k", "\u0139": "L", "\u013B": "L", "\u013D": "L", "\u013F": "L", "\u0141": "L", "\u013A": "l", "\u013C": "l", "\u013E": "l", "\u0140": "l", "\u0142": "l", "\u0143": "N", "\u0145": "N", "\u0147": "N", "\u014A": "N", "\u0144": "n", "\u0146": "n", "\u0148": "n", "\u014B": "n", "\u014C": "O", "\u014E": "O", "\u0150": "O", "\u014D": "o", "\u014F": "o", "\u0151": "o", "\u0154": "R", "\u0156": "R", "\u0158": "R", "\u0155": "r", "\u0157": "r", "\u0159": "r", "\u015A": "S", "\u015C": "S", "\u015E": "S", "\u0160": "S", "\u015B": "s", "\u015D": "s", "\u015F": "s", "\u0161": "s", "\u0162": "T", "\u0164": "T", "\u0166": "T", "\u0163": "t", "\u0165": "t", "\u0167": "t", "\u0168": "U", "\u016A": "U", "\u016C": "U", "\u016E": "U", "\u0170": "U", "\u0172": "U", "\u0169": "u", "\u016B": "u", "\u016D": "u", "\u016F": "u", "\u0171": "u", "\u0173": "u", "\u0174": "W", "\u0175": "w", "\u0176": "Y", "\u0177": "y", "\u0178": "Y", "\u0179": "Z", "\u017B": "Z", "\u017D": "Z", "\u017A": "z", "\u017C": "z", "\u017E": "z", "\u0132": "IJ", "\u0133": "ij", "\u0152": "Oe", "\u0153": "oe", "\u0149": "'n", "\u017F": "s" }), za = _2({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
    function qa(A3) {
      return "\\" + E2[A3];
    }
    function sr(A3) {
      return Q.test(A3);
    }
    function Ao(A3) {
      var u3 = -1, t2 = Array(A3.size);
      return A3.forEach(function(A4, e3) {
        t2[++u3] = [e3, A4];
      }), t2;
    }
    function eo(e3, u3) {
      return function(A3) {
        return e3(u3(A3));
      };
    }
    function lr(A3, e3) {
      for (var u3 = -1, t2 = A3.length, d2 = 0, n2 = []; ++u3 < t2; ) {
        var r2 = A3[u3];
        r2 !== e3 && r2 !== wr || (A3[u3] = wr, n2[d2++] = u3);
      }
      return n2;
    }
    function uo(A3) {
      var e3 = -1, u3 = Array(A3.size);
      return A3.forEach(function(A4) {
        u3[++e3] = A4;
      }), u3;
    }
    function Br(A3) {
      return (sr(A3) ? function(A4) {
        var e3 = b.lastIndex = 0;
        for (; b.test(A4); )
          ++e3;
        return e3;
      } : U2)(A3);
    }
    function gr(A3) {
      return sr(A3) ? A3.match(b) || [] : A3.split("");
    }
    function to(A3) {
      for (var e3 = A3.length; e3-- && n.test(A3.charAt(e3)); )
        ;
      return e3;
    }
    var no = _2({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" });
    var pr = function d2(A3) {
      var Q2 = (A3 = null == A3 ? dr : pr.defaults(dr.Object(), A3, pr.pick(dr, wa))).Array, n2 = A3.Date, S = A3.Error, x = A3.Function, L2 = A3.Math, g2 = A3.Object, R = A3.RegExp, M = A3.String, E3 = A3.TypeError, $ = Q2.prototype, G = x.prototype, V2 = g2.prototype, X = A3["__core-js_shared__"], W = G.toString, O = V2.hasOwnProperty, J = 0, j = (G = /[^.]+$/.exec(X && X.keys && X.keys.IE_PROTO || "")) ? "Symbol(src)_1." + G : "", Y = V2.toString, Z2 = W.call(g2), z2 = dr._, q = R("^" + W.call(O).replace(jr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), G = Qa ? A3.Buffer : Pn, e3 = A3.Symbol, AA = A3.Uint8Array, eA = G ? G.allocUnsafe : Pn, uA = eo(g2.getPrototypeOf, g2), tA = g2.create, dA = V2.propertyIsEnumerable, nA = $.splice, rA = e3 ? e3.isConcatSpreadable : Pn, aA = e3 ? e3.iterator : Pn, oA = e3 ? e3.toStringTag : Pn, cA = function() {
        try {
          var A4 = Zu(g2, "defineProperty");
          return A4({}, "", {}), A4;
        } catch (A5) {
        }
      }(), iA = A3.clearTimeout !== dr.clearTimeout && A3.clearTimeout, fA = n2 && n2.now !== dr.Date.now && n2.now, sA = A3.setTimeout !== dr.setTimeout && A3.setTimeout, lA = L2.ceil, BA2 = L2.floor, gA = g2.getOwnPropertySymbols, G = G ? G.isBuffer : Pn, pA = A3.isFinite, hA = $.join, wA = eo(g2.keys, g2), F3 = L2.max, U3 = L2.min, CA = n2.now, mA = A3.parseInt, bA = L2.random, QA = $.reverse, n2 = Zu(A3, "DataView"), EA = Zu(A3, "Map"), FA = Zu(A3, "Promise"), UA = Zu(A3, "Set"), A3 = Zu(A3, "WeakMap"), _A = Zu(g2, "create"), yA = A3 && new A3(), vA = {}, IA = Qt(n2), HA = Qt(EA), TA = Qt(FA), SA2 = Qt(UA), xA = Qt(A3), e3 = e3 ? e3.prototype : Pn, LA = e3 ? e3.valueOf : Pn, RA = e3 ? e3.toString : Pn;
      function B3(A4) {
        if (k(A4) && !P(A4) && !(A4 instanceof h3)) {
          if (A4 instanceof p2)
            return A4;
          if (O.call(A4, "__wrapped__"))
            return Et(A4);
        }
        return new p2(A4);
      }
      var OA = function(A4) {
        if (!b2(A4))
          return {};
        if (tA)
          return tA(A4);
        NA.prototype = A4;
        A4 = new NA();
        return NA.prototype = Pn, A4;
      };
      function NA() {
      }
      function KA() {
      }
      function p2(A4, e4) {
        this.__wrapped__ = A4, this.__actions__ = [], this.__chain__ = !!e4, this.__index__ = 0, this.__values__ = Pn;
      }
      function h3(A4) {
        this.__wrapped__ = A4, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = $n, this.__views__ = [];
      }
      function DA(A4) {
        var e4 = -1, u4 = null == A4 ? 0 : A4.length;
        for (this.clear(); ++e4 < u4; ) {
          var t3 = A4[e4];
          this.set(t3[0], t3[1]);
        }
      }
      function PA(A4) {
        var e4 = -1, u4 = null == A4 ? 0 : A4.length;
        for (this.clear(); ++e4 < u4; ) {
          var t3 = A4[e4];
          this.set(t3[0], t3[1]);
        }
      }
      function kA(A4) {
        var e4 = -1, u4 = null == A4 ? 0 : A4.length;
        for (this.clear(); ++e4 < u4; ) {
          var t3 = A4[e4];
          this.set(t3[0], t3[1]);
        }
      }
      function MA(A4) {
        var e4 = -1, u4 = null == A4 ? 0 : A4.length;
        for (this.__data__ = new kA(); ++e4 < u4; )
          this.add(A4[e4]);
      }
      function N(A4) {
        A4 = this.__data__ = new PA(A4);
        this.size = A4.size;
      }
      function $A(A4, e4) {
        var u4, t3 = P(A4), d3 = !t3 && pd(A4), n3 = !t3 && !d3 && wd(A4), r3 = !t3 && !d3 && !n3 && Id(A4), a4 = t3 || d3 || n3 || r3, o3 = a4 ? Va(A4.length, M) : [], c3 = o3.length;
        for (u4 in A4)
          !e4 && !O.call(A4, u4) || a4 && ("length" == u4 || n3 && ("offset" == u4 || "parent" == u4) || r3 && ("buffer" == u4 || "byteLength" == u4 || "byteOffset" == u4) || tt(u4, c3)) || o3.push(u4);
        return o3;
      }
      function GA(A4) {
        var e4 = A4.length;
        return e4 ? A4[Ke(0, e4 - 1)] : Pn;
      }
      function VA(A4, e4) {
        return wt(_3(A4), Ae(e4, 0, A4.length));
      }
      function XA(A4) {
        return wt(_3(A4));
      }
      function WA(A4, e4, u4) {
        (u4 === Pn || D(A4[e4], u4)) && (u4 !== Pn || e4 in A4) || zA(A4, e4, u4);
      }
      function JA(A4, e4, u4) {
        var t3 = A4[e4];
        O.call(A4, e4) && D(t3, u4) && (u4 !== Pn || e4 in A4) || zA(A4, e4, u4);
      }
      function jA(A4, e4) {
        for (var u4 = A4.length; u4--; )
          if (D(A4[u4][0], e4))
            return u4;
        return -1;
      }
      function YA(A4, t3, d3, n3) {
        return de(A4, function(A5, e4, u4) {
          t3(n3, A5, d3(A5), u4);
        }), n3;
      }
      function ZA(A4, e4) {
        return A4 && gu(e4, I(e4), A4);
      }
      function zA(A4, e4, u4) {
        "__proto__" == e4 && cA ? cA(A4, e4, { configurable: true, enumerable: true, value: u4, writable: true }) : A4[e4] = u4;
      }
      function qA(A4, e4) {
        for (var u4 = -1, t3 = e4.length, d3 = Q2(t3), n3 = null == A4; ++u4 < t3; )
          d3[u4] = n3 ? Pn : $d(A4, e4[u4]);
        return d3;
      }
      function Ae(A4, e4, u4) {
        return A4 = A4 == A4 && (u4 !== Pn && (A4 = A4 <= u4 ? A4 : u4), e4 !== Pn) ? e4 <= A4 ? A4 : e4 : A4;
      }
      function w2(u4, t3, d3, A4, e4, n3) {
        var r3, a4 = 1 & t3, o3 = 2 & t3, c3 = 4 & t3;
        if ((r3 = d3 ? e4 ? d3(u4, A4, e4, n3) : d3(u4) : r3) === Pn) {
          if (!b2(u4))
            return u4;
          var i3, A4 = P(u4);
          if (A4) {
            if (r3 = function(A5) {
              var e5 = A5.length, u5 = new A5.constructor(e5);
              e5 && "string" == typeof A5[0] && O.call(A5, "index") && (u5.index = A5.index, u5.input = A5.input);
              return u5;
            }(u4), !a4)
              return _3(u4, r3);
          } else {
            var f4 = K(u4), s3 = f4 == Er || f4 == Fr;
            if (wd(u4))
              return cu(u4, a4);
            if (f4 == jn || f4 == Gn || s3 && !e4) {
              if (r3 = o3 || s3 ? {} : et(u4), !a4)
                return o3 ? (l3 = s3 = u4, l3 = (i3 = r3) && gu(l3, H(l3), i3), gu(s3, qu(s3), l3)) : (s3 = ZA(r3, i3 = u4), gu(i3, zu(i3), s3));
            } else {
              if (!tr[f4])
                return e4 ? u4 : {};
              r3 = function(A5, e5, u5) {
                var t4 = A5.constructor;
                switch (e5) {
                  case Ar:
                    return iu(A5);
                  case Vn:
                  case Xn:
                    return new t4(+A5);
                  case er:
                    return function(A6, e6) {
                      e6 = e6 ? iu(A6.buffer) : A6.buffer;
                      return new A6.constructor(e6, A6.byteOffset, A6.byteLength);
                    }(A5, u5);
                  case yr:
                  case vr:
                  case Ir:
                  case Hr:
                  case Tr:
                  case Sr:
                  case xr:
                  case Lr:
                  case Rr:
                    return fu(A5, u5);
                  case Wn:
                    return new t4();
                  case Jn:
                  case zn:
                    return new t4(A5);
                  case Yn:
                    return function(A6) {
                      var e6 = new A6.constructor(A6.source, na.exec(A6));
                      return e6.lastIndex = A6.lastIndex, e6;
                    }(A5);
                  case Zn:
                    return new t4();
                  case _r:
                    return function(A6) {
                      return LA ? g2(LA.call(A6)) : {};
                    }(A5);
                }
              }(u4, f4, a4);
            }
          }
          var l3 = (n3 = n3 || new N()).get(u4);
          if (l3)
            return l3;
          n3.set(u4, r3), yd(u4) ? u4.forEach(function(A5) {
            r3.add(w2(A5, t3, d3, A5, u4, n3));
          }) : Ed(u4) && u4.forEach(function(A5, e5) {
            r3.set(e5, w2(A5, t3, d3, e5, u4, n3));
          });
          var B4 = A4 ? Pn : (c3 ? o3 ? Vu : Gu : o3 ? H : I)(u4);
          rr(B4 || u4, function(A5, e5) {
            B4 && (A5 = u4[e5 = A5]), JA(r3, e5, w2(A5, t3, d3, e5, u4, n3));
          });
        }
        return r3;
      }
      function ee(A4, e4, u4) {
        var t3 = u4.length;
        if (null == A4)
          return !t3;
        for (A4 = g2(A4); t3--; ) {
          var d3 = u4[t3], n3 = e4[d3], r3 = A4[d3];
          if (r3 === Pn && !(d3 in A4) || !n3(r3))
            return false;
        }
        return true;
      }
      function ue(A4, e4, u4) {
        if ("function" != typeof A4)
          throw new E3(kn);
        return Bt(function() {
          A4.apply(Pn, u4);
        }, e4);
      }
      function te(A4, e4, u4, t3) {
        var d3 = -1, n3 = Sa, r3 = true, a4 = A4.length, o3 = [], c3 = e4.length;
        if (a4) {
          u4 && (e4 = or(e4, fr(u4))), t3 ? (n3 = xa, r3 = false) : 200 <= e4.length && (n3 = Ja, r3 = false, e4 = new MA(e4));
          A:
            for (; ++d3 < a4; ) {
              var i3 = A4[d3], f4 = null == u4 ? i3 : u4(i3), i3 = t3 || 0 !== i3 ? i3 : 0;
              if (r3 && f4 == f4) {
                for (var s3 = c3; s3--; )
                  if (e4[s3] === f4)
                    continue A;
                o3.push(i3);
              } else
                n3(e4, f4, t3) || o3.push(i3);
            }
        }
        return o3;
      }
      B3.templateSettings = { escape: $r, evaluate: Gr, interpolate: Vr, variable: "", imports: { _: B3 } }, (B3.prototype = KA.prototype).constructor = B3, (p2.prototype = OA(KA.prototype)).constructor = p2, (h3.prototype = OA(KA.prototype)).constructor = h3, DA.prototype.clear = function() {
        this.__data__ = _A ? _A(null) : {}, this.size = 0;
      }, DA.prototype.delete = function(A4) {
        return A4 = this.has(A4) && delete this.__data__[A4], this.size -= A4 ? 1 : 0, A4;
      }, DA.prototype.get = function(A4) {
        var e4, u4 = this.__data__;
        return _A ? (e4 = u4[A4]) === hr ? Pn : e4 : O.call(u4, A4) ? u4[A4] : Pn;
      }, DA.prototype.has = function(A4) {
        var e4 = this.__data__;
        return _A ? e4[A4] !== Pn : O.call(e4, A4);
      }, DA.prototype.set = function(A4, e4) {
        var u4 = this.__data__;
        return this.size += this.has(A4) ? 0 : 1, u4[A4] = _A && e4 === Pn ? hr : e4, this;
      }, PA.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, PA.prototype.delete = function(A4) {
        var e4 = this.__data__;
        return !((A4 = jA(e4, A4)) < 0 || (A4 == e4.length - 1 ? e4.pop() : nA.call(e4, A4, 1), --this.size, 0));
      }, PA.prototype.get = function(A4) {
        var e4 = this.__data__;
        return (A4 = jA(e4, A4)) < 0 ? Pn : e4[A4][1];
      }, PA.prototype.has = function(A4) {
        return -1 < jA(this.__data__, A4);
      }, PA.prototype.set = function(A4, e4) {
        var u4 = this.__data__, t3 = jA(u4, A4);
        return t3 < 0 ? (++this.size, u4.push([A4, e4])) : u4[t3][1] = e4, this;
      }, kA.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new DA(), map: new (EA || PA)(), string: new DA() };
      }, kA.prototype.delete = function(A4) {
        return A4 = ju(this, A4).delete(A4), this.size -= A4 ? 1 : 0, A4;
      }, kA.prototype.get = function(A4) {
        return ju(this, A4).get(A4);
      }, kA.prototype.has = function(A4) {
        return ju(this, A4).has(A4);
      }, kA.prototype.set = function(A4, e4) {
        var u4 = ju(this, A4), t3 = u4.size;
        return u4.set(A4, e4), this.size += u4.size == t3 ? 0 : 1, this;
      }, MA.prototype.add = MA.prototype.push = function(A4) {
        return this.__data__.set(A4, hr), this;
      }, MA.prototype.has = function(A4) {
        return this.__data__.has(A4);
      }, N.prototype.clear = function() {
        this.__data__ = new PA(), this.size = 0;
      }, N.prototype.delete = function(A4) {
        var e4 = this.__data__, A4 = e4.delete(A4);
        return this.size = e4.size, A4;
      }, N.prototype.get = function(A4) {
        return this.__data__.get(A4);
      }, N.prototype.has = function(A4) {
        return this.__data__.has(A4);
      }, N.prototype.set = function(A4, e4) {
        var u4 = this.__data__;
        if (u4 instanceof PA) {
          var t3 = u4.__data__;
          if (!EA || t3.length < 199)
            return t3.push([A4, e4]), this.size = ++u4.size, this;
          u4 = this.__data__ = new kA(t3);
        }
        return u4.set(A4, e4), this.size = u4.size, this;
      };
      var de = wu(fe), ne = wu(se, true);
      function re(A4, t3) {
        var d3 = true;
        return de(A4, function(A5, e4, u4) {
          return d3 = !!t3(A5, e4, u4);
        }), d3;
      }
      function ae(A4, e4, u4) {
        for (var t3 = -1, d3 = A4.length; ++t3 < d3; ) {
          var n3, r3, a4 = A4[t3], o3 = e4(a4);
          null != o3 && (n3 === Pn ? o3 == o3 && !C2(o3) : u4(o3, n3)) && (n3 = o3, r3 = a4);
        }
        return r3;
      }
      function oe(A4, t3) {
        var d3 = [];
        return de(A4, function(A5, e4, u4) {
          t3(A5, e4, u4) && d3.push(A5);
        }), d3;
      }
      function o2(A4, e4, u4, t3, d3) {
        var n3 = -1, r3 = A4.length;
        for (u4 = u4 || ut, d3 = d3 || []; ++n3 < r3; ) {
          var a4 = A4[n3];
          0 < e4 && u4(a4) ? 1 < e4 ? o2(a4, e4 - 1, u4, t3, d3) : cr(d3, a4) : t3 || (d3[d3.length] = a4);
        }
        return d3;
      }
      var ce = Cu(), ie = Cu(true);
      function fe(A4, e4) {
        return A4 && ce(A4, e4, I);
      }
      function se(A4, e4) {
        return A4 && ie(A4, e4, I);
      }
      function le(e4, A4) {
        return ar(A4, function(A5) {
          return md(e4[A5]);
        });
      }
      function Be(A4, e4) {
        for (var u4 = 0, t3 = (e4 = nu(e4, A4)).length; null != A4 && u4 < t3; )
          A4 = A4[bt(e4[u4++])];
        return u4 && u4 == t3 ? A4 : Pn;
      }
      function ge(A4, e4, u4) {
        e4 = e4(A4);
        return P(A4) ? e4 : cr(e4, u4(A4));
      }
      function u3(A4) {
        if (null == A4)
          return A4 === Pn ? "[object Undefined]" : "[object Null]";
        if (oA && oA in g2(A4)) {
          var e4 = A4, u4 = O.call(e4, oA), t3 = e4[oA];
          try {
            e4[oA] = Pn;
            var d3 = true;
          } catch (A5) {
          }
          var n3 = Y.call(e4);
          return d3 && (u4 ? e4[oA] = t3 : delete e4[oA]), n3;
        }
        return Y.call(A4);
      }
      function pe(A4, e4) {
        return e4 < A4;
      }
      function he(A4, e4) {
        return null != A4 && O.call(A4, e4);
      }
      function we(A4, e4) {
        return null != A4 && e4 in g2(A4);
      }
      function Ce(A4, e4, u4) {
        for (var t3 = u4 ? xa : Sa, d3 = A4[0].length, n3 = A4.length, r3 = n3, a4 = Q2(n3), o3 = 1 / 0, c3 = []; r3--; ) {
          var i3 = A4[r3];
          r3 && e4 && (i3 = or(i3, fr(e4))), o3 = U3(i3.length, o3), a4[r3] = !u4 && (e4 || 120 <= d3 && 120 <= i3.length) ? new MA(r3 && i3) : Pn;
        }
        var i3 = A4[0], f4 = -1, s3 = a4[0];
        A:
          for (; ++f4 < d3 && c3.length < o3; ) {
            var l3 = i3[f4], B4 = e4 ? e4(l3) : l3, l3 = u4 || 0 !== l3 ? l3 : 0;
            if (!(s3 ? Ja(s3, B4) : t3(c3, B4, u4))) {
              for (r3 = n3; --r3; ) {
                var g3 = a4[r3];
                if (!(g3 ? Ja(g3, B4) : t3(A4[r3], B4, u4)))
                  continue A;
              }
              s3 && s3.push(B4), c3.push(l3);
            }
          }
        return c3;
      }
      function me(A4, e4, u4) {
        e4 = null == (A4 = ft(A4, e4 = nu(e4, A4))) ? A4 : A4[bt(t2(e4))];
        return null == e4 ? Pn : nr(e4, A4, u4);
      }
      function be(A4) {
        return k(A4) && u3(A4) == Gn;
      }
      function Qe(A4, e4, u4, t3, d3) {
        if (A4 === e4)
          return true;
        if (null == A4 || null == e4 || !k(A4) && !k(e4))
          return A4 != A4 && e4 != e4;
        var n3 = Qe, r3 = P(A4), a4 = P(e4), o3 = r3 ? br : K(A4), a4 = a4 ? br : K(e4), c3 = (o3 = o3 == Gn ? jn : o3) == jn, i3 = (a4 = a4 == Gn ? jn : a4) == jn;
        if ((a4 = o3 == a4) && wd(A4)) {
          if (!wd(e4))
            return false;
          c3 = !(r3 = true);
        }
        if (a4 && !c3) {
          d3 = d3 || new N();
          if (r3 || Id(A4))
            return Mu(A4, e4, u4, t3, n3, d3);
          else {
            var f4 = A4;
            var s3 = e4;
            var l3 = o3;
            var B4 = u4;
            var g3 = t3;
            var p3 = n3;
            var h4 = d3;
            switch (l3) {
              case er:
                if (f4.byteLength != s3.byteLength || f4.byteOffset != s3.byteOffset)
                  return false;
                f4 = f4.buffer, s3 = s3.buffer;
              case Ar:
                return f4.byteLength == s3.byteLength && p3(new AA(f4), new AA(s3)) ? true : false;
              case Vn:
              case Xn:
              case Jn:
                return D(+f4, +s3);
              case Qr:
                return f4.name == s3.name && f4.message == s3.message;
              case Yn:
              case zn:
                return f4 == s3 + "";
              case Wn:
                var w3 = Ao;
              case Zn:
                var C3 = 1 & B4;
                if (w3 = w3 || uo, f4.size != s3.size && !C3)
                  return false;
                C3 = h4.get(f4);
                if (C3)
                  return C3 == s3;
                B4 |= 2, h4.set(f4, s3);
                C3 = Mu(w3(f4), w3(s3), B4, g3, p3, h4);
                return h4.delete(f4), C3;
              case _r:
                if (LA)
                  return LA.call(f4) == LA.call(s3);
            }
            return false;
            return;
          }
        }
        if (!(1 & u4)) {
          r3 = c3 && O.call(A4, "__wrapped__"), o3 = i3 && O.call(e4, "__wrapped__");
          if (r3 || o3)
            return c3 = r3 ? A4.value() : A4, i3 = o3 ? e4.value() : e4, d3 = d3 || new N(), n3(c3, i3, u4, t3, d3);
        }
        if (a4) {
          d3 = d3 || new N();
          var m3 = A4, b3 = e4, Q3 = u4, E4 = t3, F4 = n3, U4 = d3, _4 = 1 & Q3, y3 = Gu(m3), v3 = y3.length, r3 = Gu(b3).length;
          if (v3 != r3 && !_4)
            return false;
          for (var I2 = v3; I2--; ) {
            var H4 = y3[I2];
            if (!(_4 ? H4 in b3 : O.call(b3, H4)))
              return false;
          }
          r3 = U4.get(m3), o3 = U4.get(b3);
          if (r3 && o3)
            return r3 == b3 && o3 == m3;
          for (var T3 = true, S2 = (U4.set(m3, b3), U4.set(b3, m3), _4); ++I2 < v3; ) {
            H4 = y3[I2];
            var x2, L3 = m3[H4], R2 = b3[H4];
            if (!((x2 = E4 ? _4 ? E4(R2, L3, H4, b3, m3, U4) : E4(L3, R2, H4, m3, b3, U4) : x2) === Pn ? L3 === R2 || F4(L3, R2, Q3, E4, U4) : x2)) {
              T3 = false;
              break;
            }
            S2 = S2 || "constructor" == H4;
          }
          return T3 && !S2 && (r3 = m3.constructor, o3 = b3.constructor, r3 != o3) && "constructor" in m3 && "constructor" in b3 && !("function" == typeof r3 && r3 instanceof r3 && "function" == typeof o3 && o3 instanceof o3) && (T3 = false), U4.delete(m3), U4.delete(b3), T3;
        }
        return false;
      }
      function Ee(A4, e4, u4, t3) {
        var d3 = u4.length, n3 = d3, r3 = !t3;
        if (null == A4)
          return !n3;
        for (A4 = g2(A4); d3--; ) {
          var a4 = u4[d3];
          if (r3 && a4[2] ? a4[1] !== A4[a4[0]] : !(a4[0] in A4))
            return false;
        }
        for (; ++d3 < n3; ) {
          var o3 = (a4 = u4[d3])[0], c3 = A4[o3], i3 = a4[1];
          if (r3 && a4[2]) {
            if (c3 === Pn && !(o3 in A4))
              return false;
          } else {
            var f4, s3 = new N();
            if (!((f4 = t3 ? t3(c3, i3, o3, A4, e4, s3) : f4) === Pn ? Qe(i3, c3, 3, t3, s3) : f4))
              return false;
          }
        }
        return true;
      }
      function Fe(A4) {
        var e4;
        return !(!b2(A4) || (e4 = A4, j && j in e4)) && (md(A4) ? q : oa).test(Qt(A4));
      }
      function Ue(A4) {
        return "function" == typeof A4 ? A4 : null == A4 ? T2 : "object" == typeof A4 ? P(A4) ? Te(A4[0], A4[1]) : He(A4) : yn(A4);
      }
      function _e(A4) {
        if (!at(A4))
          return wA(A4);
        var e4, u4 = [];
        for (e4 in g2(A4))
          O.call(A4, e4) && "constructor" != e4 && u4.push(e4);
        return u4;
      }
      function ye(A4) {
        if (!b2(A4)) {
          var e4 = A4, u4 = [];
          if (null != e4)
            for (var t3 in g2(e4))
              u4.push(t3);
          return u4;
        }
        var d3, n3 = at(A4), r3 = [];
        for (d3 in A4)
          ("constructor" != d3 || !n3 && O.call(A4, d3)) && r3.push(d3);
        return r3;
      }
      function ve(A4, e4) {
        return A4 < e4;
      }
      function Ie(A4, t3) {
        var d3 = -1, n3 = i2(A4) ? Q2(A4.length) : [];
        return de(A4, function(A5, e4, u4) {
          n3[++d3] = t3(A5, e4, u4);
        }), n3;
      }
      function He(e4) {
        var u4 = Yu(e4);
        return 1 == u4.length && u4[0][2] ? ct(u4[0][0], u4[0][1]) : function(A4) {
          return A4 === e4 || Ee(A4, e4, u4);
        };
      }
      function Te(u4, t3) {
        return dt(u4) && ot(t3) ? ct(bt(u4), t3) : function(A4) {
          var e4 = $d(A4, u4);
          return e4 === Pn && e4 === t3 ? Gd(A4, u4) : Qe(t3, e4, 3);
        };
      }
      function Se(g3, p3, h4, w3, C3) {
        g3 !== p3 && ce(p3, function(A4, e4) {
          var u4, t3, d3, n3, r3, a4, o3, c3, i3, f4, s3, l3, B4;
          C3 = C3 || new N(), b2(A4) ? (t3 = p3, n3 = h4, r3 = Se, a4 = w3, o3 = C3, s3 = st(u4 = g3, d3 = e4), l3 = st(t3, d3), (B4 = o3.get(l3)) ? WA(u4, d3, B4) : (B4 = a4 ? a4(s3, l3, d3 + "", u4, t3, o3) : Pn, (t3 = B4 === Pn) && (c3 = P(l3), i3 = !c3 && wd(l3), f4 = !c3 && !i3 && Id(l3), B4 = l3, c3 || i3 || f4 ? B4 = P(s3) ? s3 : m2(s3) ? _3(s3) : i3 ? cu(l3, !(t3 = false)) : f4 ? fu(l3, !(t3 = false)) : [] : Ud(l3) || pd(l3) ? pd(B4 = s3) ? B4 = Rd(s3) : b2(s3) && !md(s3) || (B4 = et(l3)) : t3 = false), t3 && (o3.set(l3, B4), r3(B4, l3, n3, a4, o3), o3.delete(l3)), WA(u4, d3, B4))) : (c3 = w3 ? w3(st(g3, e4), A4, e4 + "", g3, p3, C3) : Pn, WA(g3, e4, c3 = c3 === Pn ? A4 : c3));
        }, H);
      }
      function xe(A4, e4) {
        var u4 = A4.length;
        if (u4)
          return tt(e4 += e4 < 0 ? u4 : 0, u4) ? A4[e4] : Pn;
      }
      function Le(A4, t3, i3) {
        t3 = t3.length ? or(t3, function(e5) {
          return P(e5) ? function(A5) {
            return Be(A5, 1 === e5.length ? e5[0] : e5);
          } : e5;
        }) : [T2];
        var d3 = -1;
        t3 = or(t3, fr(f3()));
        var e4 = Ie(A4, function(e5, A5, u5) {
          return { criteria: or(t3, function(A6) {
            return A6(e5);
          }), index: ++d3, value: e5 };
        }), A4 = function(A5, e5) {
          for (var u5 = i3, t4 = -1, d4 = A5.criteria, n3 = e5.criteria, r3 = d4.length, a4 = u5.length; ++t4 < r3; ) {
            var o3, c3 = su(d4[t4], n3[t4]);
            if (c3)
              return a4 <= t4 ? c3 : (o3 = u5[t4], c3 * ("desc" == o3 ? -1 : 1));
          }
          return A5.index - e5.index;
        }, u4 = e4.length;
        for (e4.sort(A4); u4--; )
          e4[u4] = e4[u4].value;
        return e4;
      }
      function Re(A4, e4, u4) {
        for (var t3 = -1, d3 = e4.length, n3 = {}; ++t3 < d3; ) {
          var r3 = e4[t3], a4 = Be(A4, r3);
          u4(a4, r3) && Me(n3, nu(r3, A4), a4);
        }
        return n3;
      }
      function Oe(A4, e4, u4, t3) {
        var d3 = t3 ? Da : ir, n3 = -1, r3 = e4.length, a4 = A4;
        for (A4 === e4 && (e4 = _3(e4)), u4 && (a4 = or(A4, fr(u4))); ++n3 < r3; )
          for (var o3 = 0, c3 = e4[n3], i3 = u4 ? u4(c3) : c3; -1 < (o3 = d3(a4, i3, o3, t3)); )
            a4 !== A4 && nA.call(a4, o3, 1), nA.call(A4, o3, 1);
        return A4;
      }
      function Ne(A4, e4) {
        for (var u4 = A4 ? e4.length : 0, t3 = u4 - 1; u4--; ) {
          var d3, n3 = e4[u4];
          u4 != t3 && n3 === d3 || (tt(d3 = n3) ? nA.call(A4, n3, 1) : Ze(A4, n3));
        }
      }
      function Ke(A4, e4) {
        return A4 + BA2(bA() * (e4 - A4 + 1));
      }
      function De(A4, e4) {
        var u4 = "";
        if (!(!A4 || e4 < 1 || Mn < e4))
          for (; e4 % 2 && (u4 += A4), (e4 = BA2(e4 / 2)) && (A4 += A4), e4; )
            ;
        return u4;
      }
      function r2(A4, e4) {
        return gt(it(A4, e4, T2), A4 + "");
      }
      function Pe(A4) {
        return GA(en(A4));
      }
      function ke(A4, e4) {
        A4 = en(A4);
        return wt(A4, Ae(e4, 0, A4.length));
      }
      function Me(A4, e4, u4, t3) {
        if (b2(A4))
          for (var d3 = -1, n3 = (e4 = nu(e4, A4)).length, r3 = n3 - 1, a4 = A4; null != a4 && ++d3 < n3; ) {
            var o3, c3 = bt(e4[d3]), i3 = u4;
            if ("__proto__" === c3 || "constructor" === c3 || "prototype" === c3)
              return A4;
            JA(a4, c3, i3 = d3 != r3 && (o3 = a4[c3], (i3 = t3 ? t3(o3, c3, a4) : Pn) === Pn) ? b2(o3) ? o3 : tt(e4[d3 + 1]) ? [] : {} : i3), a4 = a4[c3];
          }
        return A4;
      }
      var $e = yA ? function(A4, e4) {
        return yA.set(A4, e4), A4;
      } : T2, e3 = cA ? function(A4, e4) {
        return cA(A4, "toString", { configurable: true, enumerable: false, value: pn(e4), writable: true });
      } : T2;
      function Ge(A4) {
        return wt(en(A4));
      }
      function a3(A4, e4, u4) {
        for (var t3 = -1, d3 = A4.length, n3 = ((u4 = d3 < u4 ? d3 : u4) < 0 && (u4 += d3), d3 = u4 < (e4 = e4 < 0 ? d3 < -e4 ? 0 : d3 + e4 : e4) ? 0 : u4 - e4 >>> 0, e4 >>>= 0, Q2(d3)); ++t3 < d3; )
          n3[t3] = A4[t3 + e4];
        return n3;
      }
      function Ve(A4, t3) {
        var d3;
        return de(A4, function(A5, e4, u4) {
          return !(d3 = t3(A5, e4, u4));
        }), !!d3;
      }
      function Xe(A4, e4, u4) {
        var t3 = 0, d3 = null == A4 ? t3 : A4.length;
        if ("number" == typeof e4 && e4 == e4 && d3 <= 2147483647) {
          for (; t3 < d3; ) {
            var n3 = t3 + d3 >>> 1, r3 = A4[n3];
            null !== r3 && !C2(r3) && (u4 ? r3 <= e4 : r3 < e4) ? t3 = 1 + n3 : d3 = n3;
          }
          return d3;
        }
        return We(A4, e4, T2, u4);
      }
      function We(A4, e4, u4, t3) {
        var d3 = 0, n3 = null == A4 ? 0 : A4.length;
        if (0 === n3)
          return 0;
        for (var r3 = (e4 = u4(e4)) != e4, a4 = null === e4, o3 = C2(e4), c3 = e4 === Pn; d3 < n3; ) {
          var i3 = BA2((d3 + n3) / 2), f4 = u4(A4[i3]), s3 = f4 !== Pn, l3 = null === f4, B4 = f4 == f4, g3 = C2(f4), B4 = r3 ? t3 || B4 : c3 ? B4 && (t3 || s3) : a4 ? B4 && s3 && (t3 || !l3) : o3 ? B4 && s3 && !l3 && (t3 || !g3) : !l3 && !g3 && (t3 ? f4 <= e4 : f4 < e4);
          B4 ? d3 = i3 + 1 : n3 = i3;
        }
        return U3(n3, 4294967294);
      }
      function Je(A4, e4) {
        for (var u4 = -1, t3 = A4.length, d3 = 0, n3 = []; ++u4 < t3; ) {
          var r3, a4 = A4[u4], o3 = e4 ? e4(a4) : a4;
          u4 && D(o3, r3) || (r3 = o3, n3[d3++] = 0 === a4 ? 0 : a4);
        }
        return n3;
      }
      function je(A4) {
        return "number" == typeof A4 ? A4 : C2(A4) ? Cr : +A4;
      }
      function c2(A4) {
        var e4;
        return "string" == typeof A4 ? A4 : P(A4) ? or(A4, c2) + "" : C2(A4) ? RA ? RA.call(A4) : "" : "0" == (e4 = A4 + "") && 1 / A4 == -1 / 0 ? "-0" : e4;
      }
      function Ye(A4, e4, u4) {
        var t3 = -1, d3 = Sa, n3 = A4.length, r3 = true, a4 = [], o3 = a4;
        if (u4)
          r3 = false, d3 = xa;
        else if (200 <= n3) {
          var c3 = e4 ? null : Ou(A4);
          if (c3)
            return uo(c3);
          r3 = false, d3 = Ja, o3 = new MA();
        } else
          o3 = e4 ? [] : a4;
        A:
          for (; ++t3 < n3; ) {
            var i3 = A4[t3], f4 = e4 ? e4(i3) : i3, i3 = u4 || 0 !== i3 ? i3 : 0;
            if (r3 && f4 == f4) {
              for (var s3 = o3.length; s3--; )
                if (o3[s3] === f4)
                  continue A;
              e4 && o3.push(f4), a4.push(i3);
            } else
              d3(o3, f4, u4) || (o3 !== a4 && o3.push(f4), a4.push(i3));
          }
        return a4;
      }
      function Ze(A4, e4) {
        return null == (A4 = ft(A4, e4 = nu(e4, A4))) || delete A4[bt(t2(e4))];
      }
      function ze(A4, e4, u4, t3) {
        return Me(A4, e4, u4(Be(A4, e4)), t3);
      }
      function qe(A4, e4, u4, t3) {
        for (var d3 = A4.length, n3 = t3 ? d3 : -1; (t3 ? n3-- : ++n3 < d3) && e4(A4[n3], n3, A4); )
          ;
        return u4 ? a3(A4, t3 ? 0 : n3, t3 ? n3 + 1 : d3) : a3(A4, t3 ? n3 + 1 : 0, t3 ? d3 : n3);
      }
      function Au(A4, e4) {
        var u4 = A4;
        return La(e4, function(A5, e5) {
          return e5.func.apply(e5.thisArg, cr([A5], e5.args));
        }, u4 = A4 instanceof h3 ? A4.value() : u4);
      }
      function eu(A4, e4, u4) {
        var t3 = A4.length;
        if (t3 < 2)
          return t3 ? Ye(A4[0]) : [];
        for (var d3 = -1, n3 = Q2(t3); ++d3 < t3; )
          for (var r3 = A4[d3], a4 = -1; ++a4 < t3; )
            a4 != d3 && (n3[d3] = te(n3[d3] || r3, A4[a4], e4, u4));
        return Ye(o2(n3, 1), e4, u4);
      }
      function uu(A4, e4, u4) {
        for (var t3 = -1, d3 = A4.length, n3 = e4.length, r3 = {}; ++t3 < d3; ) {
          var a4 = t3 < n3 ? e4[t3] : Pn;
          u4(r3, A4[t3], a4);
        }
        return r3;
      }
      function tu(A4) {
        return m2(A4) ? A4 : [];
      }
      function du(A4) {
        return "function" == typeof A4 ? A4 : T2;
      }
      function nu(A4, e4) {
        return P(A4) ? A4 : dt(A4, e4) ? [A4] : mt(l2(A4));
      }
      var ru = r2;
      function au(A4, e4, u4) {
        var t3 = A4.length;
        return u4 = u4 === Pn ? t3 : u4, !e4 && t3 <= u4 ? A4 : a3(A4, e4, u4);
      }
      var ou = iA || function(A4) {
        return dr.clearTimeout(A4);
      };
      function cu(A4, e4) {
        return e4 ? A4.slice() : (e4 = A4.length, e4 = eA ? eA(e4) : new A4.constructor(e4), A4.copy(e4), e4);
      }
      function iu(A4) {
        var e4 = new A4.constructor(A4.byteLength);
        return new AA(e4).set(new AA(A4)), e4;
      }
      function fu(A4, e4) {
        e4 = e4 ? iu(A4.buffer) : A4.buffer;
        return new A4.constructor(e4, A4.byteOffset, A4.length);
      }
      function su(A4, e4) {
        if (A4 !== e4) {
          var u4 = A4 !== Pn, t3 = null === A4, d3 = A4 == A4, n3 = C2(A4), r3 = e4 !== Pn, a4 = null === e4, o3 = e4 == e4, c3 = C2(e4);
          if (!a4 && !c3 && !n3 && e4 < A4 || n3 && r3 && o3 && !a4 && !c3 || t3 && r3 && o3 || !u4 && o3 || !d3)
            return 1;
          if (!t3 && !n3 && !c3 && A4 < e4 || c3 && u4 && d3 && !t3 && !n3 || a4 && u4 && d3 || !r3 && d3 || !o3)
            return -1;
        }
        return 0;
      }
      function lu(A4, e4, u4, t3) {
        for (var d3 = -1, n3 = A4.length, r3 = u4.length, a4 = -1, o3 = e4.length, c3 = F3(n3 - r3, 0), i3 = Q2(o3 + c3), f4 = !t3; ++a4 < o3; )
          i3[a4] = e4[a4];
        for (; ++d3 < r3; )
          (f4 || d3 < n3) && (i3[u4[d3]] = A4[d3]);
        for (; c3--; )
          i3[a4++] = A4[d3++];
        return i3;
      }
      function Bu(A4, e4, u4, t3) {
        for (var d3 = -1, n3 = A4.length, r3 = -1, a4 = u4.length, o3 = -1, c3 = e4.length, i3 = F3(n3 - a4, 0), f4 = Q2(i3 + c3), s3 = !t3; ++d3 < i3; )
          f4[d3] = A4[d3];
        for (var l3 = d3; ++o3 < c3; )
          f4[l3 + o3] = e4[o3];
        for (; ++r3 < a4; )
          (s3 || d3 < n3) && (f4[l3 + u4[r3]] = A4[d3++]);
        return f4;
      }
      function _3(A4, e4) {
        var u4 = -1, t3 = A4.length;
        for (e4 = e4 || Q2(t3); ++u4 < t3; )
          e4[u4] = A4[u4];
        return e4;
      }
      function gu(A4, e4, u4, t3) {
        for (var d3 = !u4, n3 = (u4 = u4 || {}, -1), r3 = e4.length; ++n3 < r3; ) {
          var a4 = e4[n3], o3 = t3 ? t3(u4[a4], A4[a4], a4, u4, A4) : Pn;
          (d3 ? zA : JA)(u4, a4, o3 = o3 === Pn ? A4[a4] : o3);
        }
        return u4;
      }
      function pu(d3, n3) {
        return function(A4, e4) {
          var u4 = P(A4) ? Ia : YA, t3 = n3 ? n3() : {};
          return u4(A4, d3, f3(e4, 2), t3);
        };
      }
      function hu(a4) {
        return r2(function(A4, e4) {
          var u4 = -1, t3 = e4.length, d3 = 1 < t3 ? e4[t3 - 1] : Pn, n3 = 2 < t3 ? e4[2] : Pn, d3 = 3 < a4.length && "function" == typeof d3 ? (t3--, d3) : Pn;
          for (n3 && s2(e4[0], e4[1], n3) && (d3 = t3 < 3 ? Pn : d3, t3 = 1), A4 = g2(A4); ++u4 < t3; ) {
            var r3 = e4[u4];
            r3 && a4(A4, r3, u4, d3);
          }
          return A4;
        });
      }
      function wu(n3, r3) {
        return function(A4, e4) {
          if (null != A4) {
            if (!i2(A4))
              return n3(A4, e4);
            for (var u4 = A4.length, t3 = r3 ? u4 : -1, d3 = g2(A4); (r3 ? t3-- : ++t3 < u4) && false !== e4(d3[t3], t3, d3); )
              ;
          }
          return A4;
        };
      }
      function Cu(o3) {
        return function(A4, e4, u4) {
          for (var t3 = -1, d3 = g2(A4), n3 = u4(A4), r3 = n3.length; r3--; ) {
            var a4 = n3[o3 ? r3 : ++t3];
            if (false === e4(d3[a4], a4, d3))
              break;
          }
          return A4;
        };
      }
      function mu(t3) {
        return function(A4) {
          var e4 = sr(A4 = l2(A4)) ? gr(A4) : Pn, u4 = e4 ? e4[0] : A4.charAt(0), e4 = e4 ? au(e4, 1).join("") : A4.slice(1);
          return u4[t3]() + e4;
        };
      }
      function bu(e4) {
        return function(A4) {
          return La(ln(dn(A4).replace(Ba, "")), e4, "");
        };
      }
      function Qu(t3) {
        return function() {
          var A4 = arguments;
          switch (A4.length) {
            case 0:
              return new t3();
            case 1:
              return new t3(A4[0]);
            case 2:
              return new t3(A4[0], A4[1]);
            case 3:
              return new t3(A4[0], A4[1], A4[2]);
            case 4:
              return new t3(A4[0], A4[1], A4[2], A4[3]);
            case 5:
              return new t3(A4[0], A4[1], A4[2], A4[3], A4[4]);
            case 6:
              return new t3(A4[0], A4[1], A4[2], A4[3], A4[4], A4[5]);
            case 7:
              return new t3(A4[0], A4[1], A4[2], A4[3], A4[4], A4[5], A4[6]);
          }
          var e4 = OA(t3.prototype), u4 = t3.apply(e4, A4);
          return b2(u4) ? u4 : e4;
        };
      }
      function Eu(n3, r3, a4) {
        var o3 = Qu(n3);
        return function A4() {
          for (var e4 = arguments.length, u4 = Q2(e4), t3 = e4, d3 = Ju(A4); t3--; )
            u4[t3] = arguments[t3];
          d3 = e4 < 3 && u4[0] !== d3 && u4[e4 - 1] !== d3 ? [] : lr(u4, d3);
          return (e4 -= d3.length) < a4 ? Lu(n3, r3, _u, A4.placeholder, Pn, u4, d3, Pn, Pn, a4 - e4) : nr(this && this !== dr && this instanceof A4 ? o3 : n3, this, u4);
        };
      }
      function Fu(n3) {
        return function(A4, e4, u4) {
          var t3, d3 = g2(A4), e4 = (i2(A4) || (t3 = f3(e4, 3), A4 = I(A4), e4 = function(A5) {
            return t3(d3[A5], A5, d3);
          }), n3(A4, e4, u4));
          return -1 < e4 ? d3[t3 ? A4[e4] : e4] : Pn;
        };
      }
      function Uu(o3) {
        return $u(function(d3) {
          var n3 = d3.length, A4 = n3, e4 = p2.prototype.thru;
          for (o3 && d3.reverse(); A4--; ) {
            var u4 = d3[A4];
            if ("function" != typeof u4)
              throw new E3(kn);
            e4 && !a4 && "wrapper" == Wu(u4) && (a4 = new p2([], true));
          }
          for (A4 = a4 ? A4 : n3; ++A4 < n3; )
            var t3 = Wu(u4 = d3[A4]), r3 = "wrapper" == t3 ? Xu(u4) : Pn, a4 = r3 && nt(r3[0]) && 424 == r3[1] && !r3[4].length && 1 == r3[9] ? a4[Wu(r3[0])].apply(a4, r3[3]) : 1 == u4.length && nt(u4) ? a4[t3]() : a4.thru(u4);
          return function() {
            var A5 = arguments, e5 = A5[0];
            if (a4 && 1 == A5.length && P(e5))
              return a4.plant(e5).value();
            for (var u5 = 0, t4 = n3 ? d3[u5].apply(this, A5) : e5; ++u5 < n3; )
              t4 = d3[u5].call(this, t4);
            return t4;
          };
        });
      }
      function _u(r3, a4, o3, c3, i3, f4, s3, l3, B4, g3) {
        var p3 = 128 & a4, h4 = 1 & a4, w3 = 2 & a4, C3 = 24 & a4, m3 = 512 & a4, b3 = w3 ? Pn : Qu(r3);
        return function A4() {
          for (var e4, u4, t3, d3 = Q2(t3 = arguments.length), n3 = t3; n3--; )
            d3[n3] = arguments[n3];
          return C3 && (u4 = function(A5, e5) {
            for (var u5 = A5.length, t4 = 0; u5--; )
              A5[u5] === e5 && ++t4;
            return t4;
          }(d3, e4 = Ju(A4))), c3 && (d3 = lu(d3, c3, i3, C3)), f4 && (d3 = Bu(d3, f4, s3, C3)), t3 -= u4, C3 && t3 < g3 ? (u4 = lr(d3, e4), Lu(r3, a4, _u, A4.placeholder, o3, d3, u4, l3, B4, g3 - t3)) : (e4 = h4 ? o3 : this, u4 = w3 ? e4[r3] : r3, t3 = d3.length, l3 ? d3 = function(A5, e5) {
            for (var u5 = A5.length, t4 = U3(e5.length, u5), d4 = _3(A5); t4--; ) {
              var n4 = e5[t4];
              A5[t4] = tt(n4, u5) ? d4[n4] : Pn;
            }
            return A5;
          }(d3, l3) : m3 && 1 < t3 && d3.reverse(), p3 && B4 < t3 && (d3.length = B4), (u4 = this && this !== dr && this instanceof A4 ? b3 || Qu(u4) : u4).apply(e4, d3));
        };
      }
      function yu(u4, r3) {
        return function(A4, e4) {
          return A4 = A4, t3 = u4, d3 = r3(e4), n3 = {}, fe(A4, function(A5, e5, u5) {
            t3(n3, d3(A5), e5, u5);
          }), n3;
          var t3, d3, n3;
        };
      }
      function vu(t3, d3) {
        return function(A4, e4) {
          var u4;
          if (A4 === Pn && e4 === Pn)
            return d3;
          if (A4 !== Pn && (u4 = A4), e4 !== Pn) {
            if (u4 === Pn)
              return e4;
            e4 = ("string" == typeof A4 || "string" == typeof e4 ? (A4 = c2(A4), c2) : (A4 = je(A4), je))(e4), u4 = t3(A4, e4);
          }
          return u4;
        };
      }
      function Iu(t3) {
        return $u(function(A4) {
          return A4 = or(A4, fr(f3())), r2(function(e4) {
            var u4 = this;
            return t3(A4, function(A5) {
              return nr(A5, u4, e4);
            });
          });
        });
      }
      function Hu(A4, e4) {
        var u4 = (e4 = e4 === Pn ? " " : c2(e4)).length;
        return u4 < 2 ? u4 ? De(e4, A4) : e4 : (u4 = De(e4, lA(A4 / Br(e4))), sr(e4) ? au(gr(u4), 0, A4).join("") : u4.slice(0, A4));
      }
      function Tu(a4, A4, o3, c3) {
        var i3 = 1 & A4, f4 = Qu(a4);
        return function A5() {
          for (var e4 = -1, u4 = arguments.length, t3 = -1, d3 = c3.length, n3 = Q2(d3 + u4), r3 = this && this !== dr && this instanceof A5 ? f4 : a4; ++t3 < d3; )
            n3[t3] = c3[t3];
          for (; u4--; )
            n3[t3++] = arguments[++e4];
          return nr(r3, i3 ? o3 : this, n3);
        };
      }
      function Su(c3) {
        return function(A4, e4, u4) {
          u4 && "number" != typeof u4 && s2(A4, e4, u4) && (e4 = u4 = Pn), A4 = xd(A4), e4 === Pn ? (e4 = A4, A4 = 0) : e4 = xd(e4), u4 = u4 === Pn ? A4 < e4 ? 1 : -1 : xd(u4);
          for (var t3 = A4, d3 = u4, n3 = c3, r3 = -1, a4 = F3(lA((e4 - t3) / (d3 || 1)), 0), o3 = Q2(a4); a4--; )
            o3[n3 ? a4 : ++r3] = t3, t3 += d3;
          return o3;
        };
      }
      function xu(u4) {
        return function(A4, e4) {
          return "string" == typeof A4 && "string" == typeof e4 || (A4 = v2(A4), e4 = v2(e4)), u4(A4, e4);
        };
      }
      function Lu(A4, e4, u4, t3, d3, n3, r3, a4, o3, c3) {
        var i3 = 8 & e4, d3 = (4 & (e4 = (e4 | (i3 ? 32 : 64)) & ~(i3 ? 64 : 32)) || (e4 &= -4), [A4, e4, d3, i3 ? n3 : Pn, i3 ? r3 : Pn, i3 ? Pn : n3, i3 ? Pn : r3, a4, o3, c3]), n3 = u4.apply(Pn, d3);
        return nt(A4) && lt(n3, d3), n3.placeholder = t3, pt(n3, A4, e4);
      }
      function Ru(A4) {
        var t3 = L2[A4];
        return function(A5, e4) {
          var u4;
          return A5 = v2(A5), (e4 = null == e4 ? 0 : U3(y2(e4), 292)) && pA(A5) ? (u4 = (l2(A5) + "e").split("e"), +((u4 = (l2(t3(u4[0] + "e" + (+u4[1] + e4))) + "e").split("e"))[0] + "e" + (+u4[1] - e4))) : t3(A5);
        };
      }
      var Ou = UA && 1 / uo(new UA([, -0]))[1] == 1 / 0 ? function(A4) {
        return new UA(A4);
      } : En;
      function Nu(n3) {
        return function(A4) {
          var e4, u4, t3, d3 = K(A4);
          return d3 == Wn ? Ao(A4) : d3 == Zn ? (d3 = A4, e4 = -1, u4 = Array(d3.size), d3.forEach(function(A5) {
            u4[++e4] = [A5, A5];
          }), u4) : or(n3(t3 = A4), function(A5) {
            return [A5, t3[A5]];
          });
        };
      }
      function Ku(A4, e4, u4, t3, d3, n3, r3, a4) {
        var o3, c3, i3, f4, s3, l3, B4, g3, p3, h4, w3, C3, m3, b3 = 2 & e4;
        if (b3 || "function" == typeof A4)
          return (o3 = t3 ? t3.length : 0) || (e4 &= -97, t3 = d3 = Pn), r3 = r3 === Pn ? r3 : F3(y2(r3), 0), a4 = a4 === Pn ? a4 : y2(a4), o3 -= d3 ? d3.length : 0, 64 & e4 && (i3 = t3, f4 = d3, t3 = d3 = Pn), c3 = b3 ? Pn : Xu(A4), i3 = [A4, e4, u4, t3, d3, i3, f4, n3, r3, a4], c3 && (f4 = c3, r3 = (n3 = i3)[1], l3 = f4[1], g3 = (B4 = r3 | l3) < 131, p3 = 128 == l3 && 8 == r3 || 128 == l3 && 256 == r3 && n3[7].length <= f4[8] || 384 == l3 && f4[7].length <= f4[8] && 8 == r3, g3 || p3) && (1 & l3 && (n3[2] = f4[2], B4 |= 1 & r3 ? 0 : 4), (g3 = f4[3]) && (s3 = n3[3], n3[3] = s3 ? lu(s3, g3, f4[4]) : g3, n3[4] = s3 ? lr(n3[3], wr) : f4[4]), (g3 = f4[5]) && (s3 = n3[5], n3[5] = s3 ? Bu(s3, g3, f4[6]) : g3, n3[6] = s3 ? lr(n3[5], wr) : f4[6]), (g3 = f4[7]) && (n3[7] = g3), 128 & l3 && (n3[8] = null == n3[8] ? f4[8] : U3(n3[8], f4[8])), null == n3[9] && (n3[9] = f4[9]), n3[0] = f4[0], n3[1] = B4), A4 = i3[0], e4 = i3[1], u4 = i3[2], t3 = i3[3], d3 = i3[4], !(a4 = i3[9] = i3[9] === Pn ? b3 ? 0 : A4.length : F3(i3[9] - o3, 0)) && 24 & e4 && (e4 &= -25), p3 = e4 && 1 != e4 ? 8 == e4 || 16 == e4 ? Eu(A4, e4, a4) : 32 != e4 && 33 != e4 || d3.length ? _u.apply(Pn, i3) : Tu(A4, e4, u4, t3) : (w3 = u4, C3 = 1 & e4, m3 = Qu(h4 = A4), function A5() {
            return (this && this !== dr && this instanceof A5 ? m3 : h4).apply(C3 ? w3 : this, arguments);
          }), pt((c3 ? $e : lt)(p3, i3), A4, e4);
        throw new E3(kn);
      }
      function Du(A4, e4, u4, t3) {
        return A4 === Pn || D(A4, V2[u4]) && !O.call(t3, u4) ? e4 : A4;
      }
      function Pu(A4, e4, u4, t3, d3, n3) {
        return b2(A4) && b2(e4) && (n3.set(e4, A4), Se(A4, e4, Pn, Pu, n3), n3.delete(e4)), A4;
      }
      function ku(A4) {
        return Ud(A4) ? Pn : A4;
      }
      function Mu(A4, e4, u4, t3, d3, n3) {
        var r3 = 1 & u4, a4 = A4.length, o3 = e4.length;
        if (a4 != o3 && !(r3 && a4 < o3))
          return false;
        var o3 = n3.get(A4), c3 = n3.get(e4);
        if (o3 && c3)
          return o3 == e4 && c3 == A4;
        var i3 = -1, f4 = true, s3 = 2 & u4 ? new MA() : Pn;
        for (n3.set(A4, e4), n3.set(e4, A4); ++i3 < a4; ) {
          var l3, B4 = A4[i3], g3 = e4[i3];
          if ((l3 = t3 ? r3 ? t3(g3, B4, i3, e4, A4, n3) : t3(B4, g3, i3, A4, e4, n3) : l3) !== Pn) {
            if (l3)
              continue;
            f4 = false;
            break;
          }
          if (s3) {
            if (!Oa(e4, function(A5, e5) {
              return !Ja(s3, e5) && (B4 === A5 || d3(B4, A5, u4, t3, n3)) && s3.push(e5);
            })) {
              f4 = false;
              break;
            }
          } else if (B4 !== g3 && !d3(B4, g3, u4, t3, n3)) {
            f4 = false;
            break;
          }
        }
        return n3.delete(A4), n3.delete(e4), f4;
      }
      function $u(A4) {
        return gt(it(A4, Pn, _t), A4 + "");
      }
      function Gu(A4) {
        return ge(A4, I, zu);
      }
      function Vu(A4) {
        return ge(A4, H, qu);
      }
      var Xu = yA ? function(A4) {
        return yA.get(A4);
      } : En;
      function Wu(A4) {
        for (var e4 = A4.name + "", u4 = vA[e4], t3 = O.call(vA, e4) ? u4.length : 0; t3--; ) {
          var d3 = u4[t3], n3 = d3.func;
          if (null == n3 || n3 == A4)
            return d3.name;
        }
        return e4;
      }
      function Ju(A4) {
        return (O.call(B3, "placeholder") ? B3 : A4).placeholder;
      }
      function f3() {
        var A4 = (A4 = B3.iteratee || Cn) === Cn ? Ue : A4;
        return arguments.length ? A4(arguments[0], arguments[1]) : A4;
      }
      function ju(A4, e4) {
        var u4, t3, A4 = A4.__data__;
        return ("string" == (t3 = typeof (u4 = e4)) || "number" == t3 || "symbol" == t3 || "boolean" == t3 ? "__proto__" !== u4 : null === u4) ? A4["string" == typeof e4 ? "string" : "hash"] : A4.map;
      }
      function Yu(A4) {
        for (var e4 = I(A4), u4 = e4.length; u4--; ) {
          var t3 = e4[u4], d3 = A4[t3];
          e4[u4] = [t3, d3, ot(d3)];
        }
        return e4;
      }
      function Zu(A4, e4) {
        e4 = e4;
        A4 = null == (A4 = A4) ? Pn : A4[e4];
        return Fe(A4) ? A4 : Pn;
      }
      var zu = gA ? function(e4) {
        return null == e4 ? [] : (e4 = g2(e4), ar(gA(e4), function(A4) {
          return dA.call(e4, A4);
        }));
      } : Hn, qu = gA ? function(A4) {
        for (var e4 = []; A4; )
          cr(e4, zu(A4)), A4 = uA(A4);
        return e4;
      } : Hn, K = u3;
      function At(A4, e4, u4) {
        for (var t3 = -1, d3 = (e4 = nu(e4, A4)).length, n3 = false; ++t3 < d3; ) {
          var r3 = bt(e4[t3]);
          if (!(n3 = null != A4 && u4(A4, r3)))
            break;
          A4 = A4[r3];
        }
        return n3 || ++t3 != d3 ? n3 : !!(d3 = null == A4 ? 0 : A4.length) && Qd(d3) && tt(r3, d3) && (P(A4) || pd(A4));
      }
      function et(A4) {
        return "function" != typeof A4.constructor || at(A4) ? {} : OA(uA(A4));
      }
      function ut(A4) {
        return P(A4) || pd(A4) || !!(rA && A4 && A4[rA]);
      }
      function tt(A4, e4) {
        var u4 = typeof A4;
        return !!(e4 = null == e4 ? Mn : e4) && ("number" == u4 || "symbol" != u4 && ia.test(A4)) && -1 < A4 && A4 % 1 == 0 && A4 < e4;
      }
      function s2(A4, e4, u4) {
        var t3;
        if (b2(u4))
          return ("number" == (t3 = typeof e4) ? i2(u4) && tt(e4, u4.length) : "string" == t3 && e4 in u4) && D(u4[e4], A4);
      }
      function dt(A4, e4) {
        var u4;
        if (!P(A4))
          return "number" == (u4 = typeof A4) || "symbol" == u4 || "boolean" == u4 || null == A4 || C2(A4) || Wr.test(A4) || !Xr.test(A4) || null != e4 && A4 in g2(e4);
      }
      function nt(A4) {
        var e4 = Wu(A4), u4 = B3[e4];
        return "function" == typeof u4 && e4 in h3.prototype && (A4 === u4 || (e4 = Xu(u4)) && A4 === e4[0]);
      }
      (n2 && K(new n2(new ArrayBuffer(1))) != er || EA && K(new EA()) != Wn || FA && K(FA.resolve()) != Ur || UA && K(new UA()) != Zn || A3 && K(new A3()) != qn) && (K = function(A4) {
        var e4 = u3(A4), A4 = e4 == jn ? A4.constructor : Pn, A4 = A4 ? Qt(A4) : "";
        if (A4)
          switch (A4) {
            case IA:
              return er;
            case HA:
              return Wn;
            case TA:
              return Ur;
            case SA2:
              return Zn;
            case xA:
              return qn;
          }
        return e4;
      });
      var rt = X ? md : Tn;
      function at(A4) {
        var e4 = A4 && A4.constructor;
        return A4 === ("function" == typeof e4 && e4.prototype || V2);
      }
      function ot(A4) {
        return A4 == A4 && !b2(A4);
      }
      function ct(e4, u4) {
        return function(A4) {
          return null != A4 && A4[e4] === u4 && (u4 !== Pn || e4 in g2(A4));
        };
      }
      function it(n3, r3, a4) {
        return r3 = F3(r3 === Pn ? n3.length - 1 : r3, 0), function() {
          for (var A4 = arguments, e4 = -1, u4 = F3(A4.length - r3, 0), t3 = Q2(u4); ++e4 < u4; )
            t3[e4] = A4[r3 + e4];
          for (var e4 = -1, d3 = Q2(r3 + 1); ++e4 < r3; )
            d3[e4] = A4[e4];
          return d3[r3] = a4(t3), nr(n3, this, d3);
        };
      }
      function ft(A4, e4) {
        return e4.length < 2 ? A4 : Be(A4, a3(e4, 0, -1));
      }
      function st(A4, e4) {
        if (("constructor" !== e4 || "function" != typeof A4[e4]) && "__proto__" != e4)
          return A4[e4];
      }
      var lt = ht($e), Bt = sA || function(A4, e4) {
        return dr.setTimeout(A4, e4);
      }, gt = ht(e3);
      function pt(A4, e4, u4) {
        var t3, d3, n3, e4 = e4 + "";
        return gt(A4, (d3 = (e4 = (e4 = A4 = e4).match(qr)) ? e4[1].split(Aa) : [], n3 = u4, rr(mr, function(A5) {
          var e5 = "_." + A5[0];
          n3 & A5[1] && !Sa(d3, e5) && d3.push(e5);
        }), e4 = d3.sort(), (u4 = e4.length) ? (e4[t3 = u4 - 1] = (1 < u4 ? "& " : "") + e4[t3], e4 = e4.join(2 < u4 ? ", " : " "), A4.replace(zr, "{\n/* [wrapped with " + e4 + "] */\n")) : A4));
      }
      function ht(u4) {
        var t3 = 0, d3 = 0;
        return function() {
          var A4 = CA(), e4 = 16 - (A4 - d3);
          if (d3 = A4, 0 < e4) {
            if (800 <= ++t3)
              return arguments[0];
          } else
            t3 = 0;
          return u4.apply(Pn, arguments);
        };
      }
      function wt(A4, e4) {
        var u4 = -1, t3 = A4.length, d3 = t3 - 1;
        for (e4 = e4 === Pn ? t3 : e4; ++u4 < e4; ) {
          var n3 = Ke(u4, d3), r3 = A4[n3];
          A4[n3] = A4[u4], A4[u4] = r3;
        }
        return A4.length = e4, A4;
      }
      Ct = (iA = cd(iA = function(A4) {
        var d3 = [];
        return 46 === A4.charCodeAt(0) && d3.push(""), A4.replace(Jr, function(A5, e4, u4, t3) {
          d3.push(u4 ? t3.replace(ta, "$1") : e4 || A5);
        }), d3;
      }, function(A4) {
        return 500 === Ct.size && Ct.clear(), A4;
      })).cache;
      var Ct, mt = iA;
      function bt(A4) {
        var e4;
        return "string" == typeof A4 || C2(A4) ? A4 : "0" == (e4 = A4 + "") && 1 / A4 == -1 / 0 ? "-0" : e4;
      }
      function Qt(A4) {
        if (null != A4) {
          try {
            return W.call(A4);
          } catch (A5) {
          }
          try {
            return A4 + "";
          } catch (A5) {
          }
        }
        return "";
      }
      function Et(A4) {
        var e4;
        return A4 instanceof h3 ? A4.clone() : ((e4 = new p2(A4.__wrapped__, A4.__chain__)).__actions__ = _3(A4.__actions__), e4.__index__ = A4.__index__, e4.__values__ = A4.__values__, e4);
      }
      n2 = r2(function(A4, e4) {
        return m2(A4) ? te(A4, o2(e4, 1, m2, true)) : [];
      }), FA = r2(function(A4, e4) {
        var u4 = t2(e4);
        return m2(u4) && (u4 = Pn), m2(A4) ? te(A4, o2(e4, 1, m2, true), f3(u4, 2)) : [];
      }), A3 = r2(function(A4, e4) {
        var u4 = t2(e4);
        return m2(u4) && (u4 = Pn), m2(A4) ? te(A4, o2(e4, 1, m2, true), Pn, u4) : [];
      });
      function Ft(A4, e4, u4) {
        var t3 = null == A4 ? 0 : A4.length;
        return t3 ? ((u4 = null == u4 ? 0 : y2(u4)) < 0 && (u4 = F3(t3 + u4, 0)), Ka(A4, f3(e4, 3), u4)) : -1;
      }
      function Ut(A4, e4, u4) {
        var t3, d3 = null == A4 ? 0 : A4.length;
        return d3 ? (t3 = d3 - 1, u4 !== Pn && (t3 = y2(u4), t3 = u4 < 0 ? F3(d3 + t3, 0) : U3(t3, d3 - 1)), Ka(A4, f3(e4, 3), t3, true)) : -1;
      }
      function _t(A4) {
        return (null == A4 ? 0 : A4.length) ? o2(A4, 1) : [];
      }
      function yt(A4) {
        return A4 && A4.length ? A4[0] : Pn;
      }
      X = r2(function(A4) {
        var e4 = or(A4, tu);
        return e4.length && e4[0] === A4[0] ? Ce(e4) : [];
      }), sA = r2(function(A4) {
        var e4 = t2(A4), u4 = or(A4, tu);
        return e4 === t2(u4) ? e4 = Pn : u4.pop(), u4.length && u4[0] === A4[0] ? Ce(u4, f3(e4, 2)) : [];
      }), e3 = r2(function(A4) {
        var e4 = t2(A4), u4 = or(A4, tu);
        return (e4 = "function" == typeof e4 ? e4 : Pn) && u4.pop(), u4.length && u4[0] === A4[0] ? Ce(u4, Pn, e4) : [];
      });
      function t2(A4) {
        var e4 = null == A4 ? 0 : A4.length;
        return e4 ? A4[e4 - 1] : Pn;
      }
      iA = r2(vt);
      function vt(A4, e4) {
        return A4 && A4.length && e4 && e4.length ? Oe(A4, e4) : A4;
      }
      var It = $u(function(A4, e4) {
        var u4 = null == A4 ? 0 : A4.length, t3 = qA(A4, e4);
        return Ne(A4, or(e4, function(A5) {
          return tt(A5, u4) ? +A5 : A5;
        }).sort(su)), t3;
      });
      function Ht(A4) {
        return null == A4 ? A4 : QA.call(A4);
      }
      var Tt = r2(function(A4) {
        return Ye(o2(A4, 1, m2, true));
      }), St = r2(function(A4) {
        var e4 = t2(A4);
        return m2(e4) && (e4 = Pn), Ye(o2(A4, 1, m2, true), f3(e4, 2));
      }), xt = r2(function(A4) {
        var e4 = "function" == typeof (e4 = t2(A4)) ? e4 : Pn;
        return Ye(o2(A4, 1, m2, true), Pn, e4);
      });
      function Lt(e4) {
        var u4;
        return e4 && e4.length ? (u4 = 0, e4 = ar(e4, function(A4) {
          return m2(A4) && (u4 = F3(A4.length, u4), 1);
        }), Va(u4, function(A4) {
          return or(e4, Ma(A4));
        })) : [];
      }
      function Rt(A4, e4) {
        return A4 && A4.length ? (A4 = Lt(A4), null == e4 ? A4 : or(A4, function(A5) {
          return nr(e4, Pn, A5);
        })) : [];
      }
      var Ot = r2(function(A4, e4) {
        return m2(A4) ? te(A4, e4) : [];
      }), Nt = r2(function(A4) {
        return eu(ar(A4, m2));
      }), Kt = r2(function(A4) {
        var e4 = t2(A4);
        return m2(e4) && (e4 = Pn), eu(ar(A4, m2), f3(e4, 2));
      }), Dt = r2(function(A4) {
        var e4 = "function" == typeof (e4 = t2(A4)) ? e4 : Pn;
        return eu(ar(A4, m2), Pn, e4);
      }), Pt = r2(Lt);
      var kt = r2(function(A4) {
        var e4 = A4.length, e4 = "function" == typeof (e4 = 1 < e4 ? A4[e4 - 1] : Pn) ? (A4.pop(), e4) : Pn;
        return Rt(A4, e4);
      });
      function Mt(A4) {
        A4 = B3(A4);
        return A4.__chain__ = true, A4;
      }
      function $t(A4, e4) {
        return e4(A4);
      }
      var Gt = $u(function(e4) {
        function A4(A5) {
          return qA(A5, e4);
        }
        var u4 = e4.length, t3 = u4 ? e4[0] : 0, d3 = this.__wrapped__;
        return !(1 < u4 || this.__actions__.length) && d3 instanceof h3 && tt(t3) ? ((d3 = d3.slice(t3, +t3 + (u4 ? 1 : 0))).__actions__.push({ func: $t, args: [A4], thisArg: Pn }), new p2(d3, this.__chain__).thru(function(A5) {
          return u4 && !A5.length && A5.push(Pn), A5;
        })) : this.thru(A4);
      });
      var Vt = pu(function(A4, e4, u4) {
        O.call(A4, u4) ? ++A4[u4] : zA(A4, u4, 1);
      });
      var Xt = Fu(Ft), Wt = Fu(Ut);
      function Jt(A4, e4) {
        return (P(A4) ? rr : de)(A4, f3(e4, 3));
      }
      function jt(A4, e4) {
        return (P(A4) ? Ha : ne)(A4, f3(e4, 3));
      }
      var Yt = pu(function(A4, e4, u4) {
        O.call(A4, u4) ? A4[u4].push(e4) : zA(A4, u4, [e4]);
      });
      var Zt = r2(function(A4, e4, u4) {
        var t3 = -1, d3 = "function" == typeof e4, n3 = i2(A4) ? Q2(A4.length) : [];
        return de(A4, function(A5) {
          n3[++t3] = d3 ? nr(e4, A5, u4) : me(A5, e4, u4);
        }), n3;
      }), zt = pu(function(A4, e4, u4) {
        zA(A4, u4, e4);
      });
      function qt(A4, e4) {
        return (P(A4) ? or : Ie)(A4, f3(e4, 3));
      }
      var Ad = pu(function(A4, e4, u4) {
        A4[u4 ? 0 : 1].push(e4);
      }, function() {
        return [[], []];
      });
      var ed = r2(function(A4, e4) {
        var u4;
        return null == A4 ? [] : (1 < (u4 = e4.length) && s2(A4, e4[0], e4[1]) ? e4 = [] : 2 < u4 && s2(e4[0], e4[1], e4[2]) && (e4 = [e4[0]]), Le(A4, o2(e4, 1), []));
      }), ud = fA || function() {
        return dr.Date.now();
      };
      function td(A4, e4, u4) {
        return e4 = u4 ? Pn : e4, e4 = A4 && null == e4 ? A4.length : e4, Ku(A4, 128, Pn, Pn, Pn, Pn, e4);
      }
      function dd(A4, e4) {
        var u4;
        if ("function" != typeof e4)
          throw new E3(kn);
        return A4 = y2(A4), function() {
          return 0 < --A4 && (u4 = e4.apply(this, arguments)), A4 <= 1 && (e4 = Pn), u4;
        };
      }
      var nd = r2(function(A4, e4, u4) {
        var t3, d3 = 1;
        return u4.length && (t3 = lr(u4, Ju(nd)), d3 |= 32), Ku(A4, d3, e4, u4, t3);
      }), rd = r2(function(A4, e4, u4) {
        var t3, d3 = 3;
        return u4.length && (t3 = lr(u4, Ju(rd)), d3 |= 32), Ku(e4, d3, A4, u4, t3);
      });
      function ad(t3, u4, A4) {
        var d3, n3, r3, a4, o3, c3, i3 = 0, f4 = false, s3 = false, e4 = true;
        if ("function" != typeof t3)
          throw new E3(kn);
        function l3(A5) {
          var e5 = d3, u5 = n3;
          return d3 = n3 = Pn, i3 = A5, a4 = t3.apply(u5, e5);
        }
        function B4(A5) {
          var e5 = A5 - c3;
          return c3 === Pn || u4 <= e5 || e5 < 0 || s3 && r3 <= A5 - i3;
        }
        function g3() {
          var A5, e5 = ud();
          if (B4(e5))
            return p3(e5);
          o3 = Bt(g3, (A5 = u4 - ((e5 = e5) - c3), s3 ? U3(A5, r3 - (e5 - i3)) : A5));
        }
        function p3(A5) {
          return o3 = Pn, e4 && d3 ? l3(A5) : (d3 = n3 = Pn, a4);
        }
        function h4() {
          var A5 = ud(), e5 = B4(A5);
          if (d3 = arguments, n3 = this, c3 = A5, e5) {
            if (o3 === Pn)
              return i3 = A5 = c3, o3 = Bt(g3, u4), f4 ? l3(A5) : a4;
            if (s3)
              return ou(o3), o3 = Bt(g3, u4), l3(c3);
          }
          return o3 === Pn && (o3 = Bt(g3, u4)), a4;
        }
        return u4 = v2(u4) || 0, b2(A4) && (f4 = !!A4.leading, s3 = "maxWait" in A4, r3 = s3 ? F3(v2(A4.maxWait) || 0, u4) : r3, e4 = "trailing" in A4 ? !!A4.trailing : e4), h4.cancel = function() {
          o3 !== Pn && ou(o3), i3 = 0, d3 = c3 = n3 = o3 = Pn;
        }, h4.flush = function() {
          return o3 === Pn ? a4 : p3(ud());
        }, h4;
      }
      var fA = r2(function(A4, e4) {
        return ue(A4, 1, e4);
      }), od = r2(function(A4, e4, u4) {
        return ue(A4, v2(e4) || 0, u4);
      });
      function cd(t3, d3) {
        if ("function" != typeof t3 || null != d3 && "function" != typeof d3)
          throw new E3(kn);
        function n3() {
          var A4 = arguments, e4 = d3 ? d3.apply(this, A4) : A4[0], u4 = n3.cache;
          return u4.has(e4) ? u4.get(e4) : (A4 = t3.apply(this, A4), n3.cache = u4.set(e4, A4) || u4, A4);
        }
        return n3.cache = new (cd.Cache || kA)(), n3;
      }
      function id(e4) {
        if ("function" != typeof e4)
          throw new E3(kn);
        return function() {
          var A4 = arguments;
          switch (A4.length) {
            case 0:
              return !e4.call(this);
            case 1:
              return !e4.call(this, A4[0]);
            case 2:
              return !e4.call(this, A4[0], A4[1]);
            case 3:
              return !e4.call(this, A4[0], A4[1], A4[2]);
          }
          return !e4.apply(this, A4);
        };
      }
      cd.Cache = kA;
      var ru = ru(function(t3, d3) {
        var n3 = (d3 = 1 == d3.length && P(d3[0]) ? or(d3[0], fr(f3())) : or(o2(d3, 1), fr(f3()))).length;
        return r2(function(A4) {
          for (var e4 = -1, u4 = U3(A4.length, n3); ++e4 < u4; )
            A4[e4] = d3[e4].call(this, A4[e4]);
          return nr(t3, this, A4);
        });
      }), fd = r2(function(A4, e4) {
        var u4 = lr(e4, Ju(fd));
        return Ku(A4, 32, Pn, e4, u4);
      }), sd = r2(function(A4, e4) {
        var u4 = lr(e4, Ju(sd));
        return Ku(A4, 64, Pn, e4, u4);
      }), ld = $u(function(A4, e4) {
        return Ku(A4, 256, Pn, Pn, Pn, e4);
      });
      function D(A4, e4) {
        return A4 === e4 || A4 != A4 && e4 != e4;
      }
      var Bd = xu(pe), gd = xu(function(A4, e4) {
        return e4 <= A4;
      }), pd = be(function() {
        return arguments;
      }()) ? be : function(A4) {
        return k(A4) && O.call(A4, "callee") && !dA.call(A4, "callee");
      }, P = Q2.isArray, hd = Ea ? fr(Ea) : function(A4) {
        return k(A4) && u3(A4) == Ar;
      };
      function i2(A4) {
        return null != A4 && Qd(A4.length) && !md(A4);
      }
      function m2(A4) {
        return k(A4) && i2(A4);
      }
      var wd = G || Tn, G = Fa ? fr(Fa) : function(A4) {
        return k(A4) && u3(A4) == Xn;
      };
      function Cd(A4) {
        var e4;
        return !!k(A4) && ((e4 = u3(A4)) == Qr || "[object DOMException]" == e4 || "string" == typeof A4.message && "string" == typeof A4.name && !Ud(A4));
      }
      function md(A4) {
        return !!b2(A4) && ((A4 = u3(A4)) == Er || A4 == Fr || "[object AsyncFunction]" == A4 || "[object Proxy]" == A4);
      }
      function bd(A4) {
        return "number" == typeof A4 && A4 == y2(A4);
      }
      function Qd(A4) {
        return "number" == typeof A4 && -1 < A4 && A4 % 1 == 0 && A4 <= Mn;
      }
      function b2(A4) {
        var e4 = typeof A4;
        return null != A4 && ("object" == e4 || "function" == e4);
      }
      function k(A4) {
        return null != A4 && "object" == typeof A4;
      }
      var Ed = Ua ? fr(Ua) : function(A4) {
        return k(A4) && K(A4) == Wn;
      };
      function Fd(A4) {
        return "number" == typeof A4 || k(A4) && u3(A4) == Jn;
      }
      function Ud(A4) {
        return !(!k(A4) || u3(A4) != jn) && (null === (A4 = uA(A4)) || "function" == typeof (A4 = O.call(A4, "constructor") && A4.constructor) && A4 instanceof A4 && W.call(A4) == Z2);
      }
      var _d = _a2 ? fr(_a2) : function(A4) {
        return k(A4) && u3(A4) == Yn;
      };
      var yd = ya ? fr(ya) : function(A4) {
        return k(A4) && K(A4) == Zn;
      };
      function vd(A4) {
        return "string" == typeof A4 || !P(A4) && k(A4) && u3(A4) == zn;
      }
      function C2(A4) {
        return "symbol" == typeof A4 || k(A4) && u3(A4) == _r;
      }
      var Id = va ? fr(va) : function(A4) {
        return k(A4) && Qd(A4.length) && !!ur[u3(A4)];
      };
      var Hd = xu(ve), Td = xu(function(A4, e4) {
        return A4 <= e4;
      });
      function Sd(A4) {
        if (!A4)
          return [];
        if (i2(A4))
          return (vd(A4) ? gr : _3)(A4);
        if (aA && A4[aA]) {
          for (var e4, u4 = A4[aA](), t3 = []; !(e4 = u4.next()).done; )
            t3.push(e4.value);
          return t3;
        }
        var d3 = K(A4);
        return (d3 == Wn ? Ao : d3 == Zn ? uo : en)(A4);
      }
      function xd(A4) {
        return A4 ? (A4 = v2(A4)) === 1 / 0 || A4 === -1 / 0 ? 17976931348623157e292 * (A4 < 0 ? -1 : 1) : A4 == A4 ? A4 : 0 : 0 === A4 ? A4 : 0;
      }
      function y2(A4) {
        var A4 = xd(A4), e4 = A4 % 1;
        return A4 == A4 ? e4 ? A4 - e4 : A4 : 0;
      }
      function Ld(A4) {
        return A4 ? Ae(y2(A4), 0, $n) : 0;
      }
      function v2(A4) {
        if ("number" == typeof A4)
          return A4;
        if (C2(A4))
          return Cr;
        if ("string" != typeof (A4 = b2(A4) ? b2(e4 = "function" == typeof A4.valueOf ? A4.valueOf() : A4) ? e4 + "" : e4 : A4))
          return 0 === A4 ? A4 : +A4;
        A4 = Xa(A4);
        var e4 = aa.test(A4);
        return e4 || ca.test(A4) ? ba(A4.slice(2), e4 ? 2 : 8) : ra.test(A4) ? Cr : +A4;
      }
      function Rd(A4) {
        return gu(A4, H(A4));
      }
      function l2(A4) {
        return null == A4 ? "" : c2(A4);
      }
      var Od = hu(function(A4, e4) {
        if (at(e4) || i2(e4))
          gu(e4, I(e4), A4);
        else
          for (var u4 in e4)
            O.call(e4, u4) && JA(A4, u4, e4[u4]);
      }), Nd = hu(function(A4, e4) {
        gu(e4, H(e4), A4);
      }), Kd = hu(function(A4, e4, u4, t3) {
        gu(e4, H(e4), A4, t3);
      }), Dd = hu(function(A4, e4, u4, t3) {
        gu(e4, I(e4), A4, t3);
      }), Pd = $u(qA);
      var kd = r2(function(A4, e4) {
        A4 = g2(A4);
        var u4 = -1, t3 = e4.length, d3 = 2 < t3 ? e4[2] : Pn;
        for (d3 && s2(e4[0], e4[1], d3) && (t3 = 1); ++u4 < t3; )
          for (var n3 = e4[u4], r3 = H(n3), a4 = -1, o3 = r3.length; ++a4 < o3; ) {
            var c3 = r3[a4], i3 = A4[c3];
            (i3 === Pn || D(i3, V2[c3]) && !O.call(A4, c3)) && (A4[c3] = n3[c3]);
          }
        return A4;
      }), Md = r2(function(A4) {
        return A4.push(Pn, Pu), nr(jd, Pn, A4);
      });
      function $d(A4, e4, u4) {
        A4 = null == A4 ? Pn : Be(A4, e4);
        return A4 === Pn ? u4 : A4;
      }
      function Gd(A4, e4) {
        return null != A4 && At(A4, e4, we);
      }
      var Vd = yu(function(A4, e4, u4) {
        A4[e4 = null != e4 && "function" != typeof e4.toString ? Y.call(e4) : e4] = u4;
      }, pn(T2)), Xd = yu(function(A4, e4, u4) {
        null != e4 && "function" != typeof e4.toString && (e4 = Y.call(e4)), O.call(A4, e4) ? A4[e4].push(u4) : A4[e4] = [u4];
      }, f3), Wd = r2(me);
      function I(A4) {
        return (i2(A4) ? $A : _e)(A4);
      }
      function H(A4) {
        return i2(A4) ? $A(A4, true) : ye(A4);
      }
      var Jd = hu(function(A4, e4, u4) {
        Se(A4, e4, u4);
      }), jd = hu(function(A4, e4, u4, t3) {
        Se(A4, e4, u4, t3);
      }), Yd = $u(function(e4, A4) {
        var u4 = {};
        if (null != e4)
          for (var t3 = false, d3 = (A4 = or(A4, function(A5) {
            return A5 = nu(A5, e4), t3 = t3 || 1 < A5.length, A5;
          }), gu(e4, Vu(e4), u4), t3 && (u4 = w2(u4, 7, ku)), A4.length); d3--; )
            Ze(u4, A4[d3]);
        return u4;
      });
      var Zd = $u(function(A4, e4) {
        return null == A4 ? {} : Re(u4 = A4, e4, function(A5, e5) {
          return Gd(u4, e5);
        });
        var u4;
      });
      function zd(A4, u4) {
        var e4;
        return null == A4 ? {} : (e4 = or(Vu(A4), function(A5) {
          return [A5];
        }), u4 = f3(u4), Re(A4, e4, function(A5, e5) {
          return u4(A5, e5[0]);
        }));
      }
      var qd = Nu(I), An = Nu(H);
      function en(A4) {
        return null == A4 ? [] : Wa(A4, I(A4));
      }
      var un = bu(function(A4, e4, u4) {
        return e4 = e4.toLowerCase(), A4 + (u4 ? tn(e4) : e4);
      });
      function tn(A4) {
        return sn(l2(A4).toLowerCase());
      }
      function dn(A4) {
        return (A4 = l2(A4)) && A4.replace(fa, Za).replace(ga, "");
      }
      var nn = bu(function(A4, e4, u4) {
        return A4 + (u4 ? "-" : "") + e4.toLowerCase();
      }), rn = bu(function(A4, e4, u4) {
        return A4 + (u4 ? " " : "") + e4.toLowerCase();
      }), an = mu("toLowerCase");
      var on2 = bu(function(A4, e4, u4) {
        return A4 + (u4 ? "_" : "") + e4.toLowerCase();
      });
      var cn = bu(function(A4, e4, u4) {
        return A4 + (u4 ? " " : "") + sn(e4);
      });
      var fn = bu(function(A4, e4, u4) {
        return A4 + (u4 ? " " : "") + e4.toUpperCase();
      }), sn = mu("toUpperCase");
      function ln(A4, e4, u4) {
        return A4 = l2(A4), (e4 = u4 ? Pn : e4) === Pn ? (u4 = A4, ha.test(u4) ? A4.match(pa) || [] : A4.match(ea) || []) : A4.match(e4) || [];
      }
      var Bn = r2(function(A4, e4) {
        try {
          return nr(A4, Pn, e4);
        } catch (A5) {
          return Cd(A5) ? A5 : new S(A5);
        }
      }), gn = $u(function(e4, A4) {
        return rr(A4, function(A5) {
          A5 = bt(A5), zA(e4, A5, nd(e4[A5], e4));
        }), e4;
      });
      function pn(A4) {
        return function() {
          return A4;
        };
      }
      var hn = Uu(), wn = Uu(true);
      function T2(A4) {
        return A4;
      }
      function Cn(A4) {
        return Ue("function" == typeof A4 ? A4 : w2(A4, 1));
      }
      var mn = r2(function(e4, u4) {
        return function(A4) {
          return me(A4, e4, u4);
        };
      }), bn = r2(function(e4, u4) {
        return function(A4) {
          return me(e4, A4, u4);
        };
      });
      function Qn(t3, e4, A4) {
        var u4 = I(e4), d3 = le(e4, u4), n3 = (null != A4 || b2(e4) && (d3.length || !u4.length) || (A4 = e4, e4 = t3, t3 = this, d3 = le(e4, I(e4))), !(b2(A4) && "chain" in A4 && !A4.chain)), r3 = md(t3);
        return rr(d3, function(A5) {
          var u5 = e4[A5];
          t3[A5] = u5, r3 && (t3.prototype[A5] = function() {
            var A6, e5 = this.__chain__;
            return n3 || e5 ? (((A6 = t3(this.__wrapped__)).__actions__ = _3(this.__actions__)).push({ func: u5, args: arguments, thisArg: t3 }), A6.__chain__ = e5, A6) : u5.apply(t3, cr([this.value()], arguments));
          });
        }), t3;
      }
      function En() {
      }
      var Fn = Iu(or), Un = Iu(Ta), _n = Iu(Oa);
      function yn(A4) {
        return dt(A4) ? Ma(bt(A4)) : (e4 = A4, function(A5) {
          return Be(A5, e4);
        });
        var e4;
      }
      var vn = Su(), In = Su(true);
      function Hn() {
        return [];
      }
      function Tn() {
        return false;
      }
      var Sn = vu(function(A4, e4) {
        return A4 + e4;
      }, 0), xn = Ru("ceil"), Ln = vu(function(A4, e4) {
        return A4 / e4;
      }, 1), Rn = Ru("floor");
      var On, Nn = vu(function(A4, e4) {
        return A4 * e4;
      }, 1), Kn = Ru("round"), Dn = vu(function(A4, e4) {
        return A4 - e4;
      }, 0);
      return B3.after = function(A4, e4) {
        if ("function" != typeof e4)
          throw new E3(kn);
        return A4 = y2(A4), function() {
          if (--A4 < 1)
            return e4.apply(this, arguments);
        };
      }, B3.ary = td, B3.assign = Od, B3.assignIn = Nd, B3.assignInWith = Kd, B3.assignWith = Dd, B3.at = Pd, B3.before = dd, B3.bind = nd, B3.bindAll = gn, B3.bindKey = rd, B3.castArray = function() {
        var A4;
        return arguments.length ? P(A4 = arguments[0]) ? A4 : [A4] : [];
      }, B3.chain = Mt, B3.chunk = function(A4, e4, u4) {
        e4 = (u4 ? s2(A4, e4, u4) : e4 === Pn) ? 1 : F3(y2(e4), 0);
        var t3 = null == A4 ? 0 : A4.length;
        if (!t3 || e4 < 1)
          return [];
        for (var d3 = 0, n3 = 0, r3 = Q2(lA(t3 / e4)); d3 < t3; )
          r3[n3++] = a3(A4, d3, d3 += e4);
        return r3;
      }, B3.compact = function(A4) {
        for (var e4 = -1, u4 = null == A4 ? 0 : A4.length, t3 = 0, d3 = []; ++e4 < u4; ) {
          var n3 = A4[e4];
          n3 && (d3[t3++] = n3);
        }
        return d3;
      }, B3.concat = function() {
        var A4 = arguments.length;
        if (!A4)
          return [];
        for (var e4 = Q2(A4 - 1), u4 = arguments[0], t3 = A4; t3--; )
          e4[t3 - 1] = arguments[t3];
        return cr(P(u4) ? _3(u4) : [u4], o2(e4, 1));
      }, B3.cond = function(t3) {
        var d3 = null == t3 ? 0 : t3.length, e4 = f3();
        return t3 = d3 ? or(t3, function(A4) {
          if ("function" != typeof A4[1])
            throw new E3(kn);
          return [e4(A4[0]), A4[1]];
        }) : [], r2(function(A4) {
          for (var e5 = -1; ++e5 < d3; ) {
            var u4 = t3[e5];
            if (nr(u4[0], this, A4))
              return nr(u4[1], this, A4);
          }
        });
      }, B3.conforms = function(A4) {
        return e4 = w2(A4, 1), u4 = I(e4), function(A5) {
          return ee(A5, e4, u4);
        };
        var e4, u4;
      }, B3.constant = pn, B3.countBy = Vt, B3.create = function(A4, e4) {
        return A4 = OA(A4), null == e4 ? A4 : ZA(A4, e4);
      }, B3.curry = function A4(e4, u4, t3) {
        e4 = Ku(e4, 8, Pn, Pn, Pn, Pn, Pn, u4 = t3 ? Pn : u4);
        return e4.placeholder = A4.placeholder, e4;
      }, B3.curryRight = function A4(e4, u4, t3) {
        e4 = Ku(e4, 16, Pn, Pn, Pn, Pn, Pn, u4 = t3 ? Pn : u4);
        return e4.placeholder = A4.placeholder, e4;
      }, B3.debounce = ad, B3.defaults = kd, B3.defaultsDeep = Md, B3.defer = fA, B3.delay = od, B3.difference = n2, B3.differenceBy = FA, B3.differenceWith = A3, B3.drop = function(A4, e4, u4) {
        var t3 = null == A4 ? 0 : A4.length;
        return t3 ? a3(A4, (e4 = u4 || e4 === Pn ? 1 : y2(e4)) < 0 ? 0 : e4, t3) : [];
      }, B3.dropRight = function(A4, e4, u4) {
        var t3 = null == A4 ? 0 : A4.length;
        return t3 ? a3(A4, 0, (e4 = t3 - (e4 = u4 || e4 === Pn ? 1 : y2(e4))) < 0 ? 0 : e4) : [];
      }, B3.dropRightWhile = function(A4, e4) {
        return A4 && A4.length ? qe(A4, f3(e4, 3), true, true) : [];
      }, B3.dropWhile = function(A4, e4) {
        return A4 && A4.length ? qe(A4, f3(e4, 3), true) : [];
      }, B3.fill = function(A4, e4, u4, t3) {
        if (!(o3 = null == A4 ? 0 : A4.length))
          return [];
        u4 && "number" != typeof u4 && s2(A4, e4, u4) && (u4 = 0, t3 = o3);
        var d3 = A4, n3 = e4, r3 = u4, a4 = t3, o3 = d3.length;
        for ((r3 = y2(r3)) < 0 && (r3 = o3 < -r3 ? 0 : o3 + r3), (a4 = a4 === Pn || o3 < a4 ? o3 : y2(a4)) < 0 && (a4 += o3), a4 = a4 < r3 ? 0 : Ld(a4); r3 < a4; )
          d3[r3++] = n3;
        return d3;
      }, B3.filter = function(A4, e4) {
        return (P(A4) ? ar : oe)(A4, f3(e4, 3));
      }, B3.flatMap = function(A4, e4) {
        return o2(qt(A4, e4), 1);
      }, B3.flatMapDeep = function(A4, e4) {
        return o2(qt(A4, e4), 1 / 0);
      }, B3.flatMapDepth = function(A4, e4, u4) {
        return u4 = u4 === Pn ? 1 : y2(u4), o2(qt(A4, e4), u4);
      }, B3.flatten = _t, B3.flattenDeep = function(A4) {
        return (null == A4 ? 0 : A4.length) ? o2(A4, 1 / 0) : [];
      }, B3.flattenDepth = function(A4, e4) {
        return (null == A4 ? 0 : A4.length) ? o2(A4, e4 = e4 === Pn ? 1 : y2(e4)) : [];
      }, B3.flip = function(A4) {
        return Ku(A4, 512);
      }, B3.flow = hn, B3.flowRight = wn, B3.fromPairs = function(A4) {
        for (var e4 = -1, u4 = null == A4 ? 0 : A4.length, t3 = {}; ++e4 < u4; ) {
          var d3 = A4[e4];
          t3[d3[0]] = d3[1];
        }
        return t3;
      }, B3.functions = function(A4) {
        return null == A4 ? [] : le(A4, I(A4));
      }, B3.functionsIn = function(A4) {
        return null == A4 ? [] : le(A4, H(A4));
      }, B3.groupBy = Yt, B3.initial = function(A4) {
        return (null == A4 ? 0 : A4.length) ? a3(A4, 0, -1) : [];
      }, B3.intersection = X, B3.intersectionBy = sA, B3.intersectionWith = e3, B3.invert = Vd, B3.invertBy = Xd, B3.invokeMap = Zt, B3.iteratee = Cn, B3.keyBy = zt, B3.keys = I, B3.keysIn = H, B3.map = qt, B3.mapKeys = function(A4, t3) {
        var d3 = {};
        return t3 = f3(t3, 3), fe(A4, function(A5, e4, u4) {
          zA(d3, t3(A5, e4, u4), A5);
        }), d3;
      }, B3.mapValues = function(A4, t3) {
        var d3 = {};
        return t3 = f3(t3, 3), fe(A4, function(A5, e4, u4) {
          zA(d3, e4, t3(A5, e4, u4));
        }), d3;
      }, B3.matches = function(A4) {
        return He(w2(A4, 1));
      }, B3.matchesProperty = function(A4, e4) {
        return Te(A4, w2(e4, 1));
      }, B3.memoize = cd, B3.merge = Jd, B3.mergeWith = jd, B3.method = mn, B3.methodOf = bn, B3.mixin = Qn, B3.negate = id, B3.nthArg = function(e4) {
        return e4 = y2(e4), r2(function(A4) {
          return xe(A4, e4);
        });
      }, B3.omit = Yd, B3.omitBy = function(A4, e4) {
        return zd(A4, id(f3(e4)));
      }, B3.once = function(A4) {
        return dd(2, A4);
      }, B3.orderBy = function(A4, e4, u4, t3) {
        return null == A4 ? [] : Le(A4, e4 = P(e4) ? e4 : null == e4 ? [] : [e4], u4 = P(u4 = t3 ? Pn : u4) ? u4 : null == u4 ? [] : [u4]);
      }, B3.over = Fn, B3.overArgs = ru, B3.overEvery = Un, B3.overSome = _n, B3.partial = fd, B3.partialRight = sd, B3.partition = Ad, B3.pick = Zd, B3.pickBy = zd, B3.property = yn, B3.propertyOf = function(e4) {
        return function(A4) {
          return null == e4 ? Pn : Be(e4, A4);
        };
      }, B3.pull = iA, B3.pullAll = vt, B3.pullAllBy = function(A4, e4, u4) {
        return A4 && A4.length && e4 && e4.length ? Oe(A4, e4, f3(u4, 2)) : A4;
      }, B3.pullAllWith = function(A4, e4, u4) {
        return A4 && A4.length && e4 && e4.length ? Oe(A4, e4, Pn, u4) : A4;
      }, B3.pullAt = It, B3.range = vn, B3.rangeRight = In, B3.rearg = ld, B3.reject = function(A4, e4) {
        return (P(A4) ? ar : oe)(A4, id(f3(e4, 3)));
      }, B3.remove = function(A4, e4) {
        var u4 = [];
        if (A4 && A4.length) {
          var t3 = -1, d3 = [], n3 = A4.length;
          for (e4 = f3(e4, 3); ++t3 < n3; ) {
            var r3 = A4[t3];
            e4(r3, t3, A4) && (u4.push(r3), d3.push(t3));
          }
          Ne(A4, d3);
        }
        return u4;
      }, B3.rest = function(A4, e4) {
        if ("function" != typeof A4)
          throw new E3(kn);
        return r2(A4, e4 = e4 === Pn ? e4 : y2(e4));
      }, B3.reverse = Ht, B3.sampleSize = function(A4, e4, u4) {
        return e4 = (u4 ? s2(A4, e4, u4) : e4 === Pn) ? 1 : y2(e4), (P(A4) ? VA : ke)(A4, e4);
      }, B3.set = function(A4, e4, u4) {
        return null == A4 ? A4 : Me(A4, e4, u4);
      }, B3.setWith = function(A4, e4, u4, t3) {
        return t3 = "function" == typeof t3 ? t3 : Pn, null == A4 ? A4 : Me(A4, e4, u4, t3);
      }, B3.shuffle = function(A4) {
        return (P(A4) ? XA : Ge)(A4);
      }, B3.slice = function(A4, e4, u4) {
        var t3 = null == A4 ? 0 : A4.length;
        return t3 ? (u4 = u4 && "number" != typeof u4 && s2(A4, e4, u4) ? (e4 = 0, t3) : (e4 = null == e4 ? 0 : y2(e4), u4 === Pn ? t3 : y2(u4)), a3(A4, e4, u4)) : [];
      }, B3.sortBy = ed, B3.sortedUniq = function(A4) {
        return A4 && A4.length ? Je(A4) : [];
      }, B3.sortedUniqBy = function(A4, e4) {
        return A4 && A4.length ? Je(A4, f3(e4, 2)) : [];
      }, B3.split = function(A4, e4, u4) {
        return u4 && "number" != typeof u4 && s2(A4, e4, u4) && (e4 = u4 = Pn), (u4 = u4 === Pn ? $n : u4 >>> 0) ? (A4 = l2(A4)) && ("string" == typeof e4 || null != e4 && !_d(e4)) && !(e4 = c2(e4)) && sr(A4) ? au(gr(A4), 0, u4) : A4.split(e4, u4) : [];
      }, B3.spread = function(u4, t3) {
        if ("function" != typeof u4)
          throw new E3(kn);
        return t3 = null == t3 ? 0 : F3(y2(t3), 0), r2(function(A4) {
          var e4 = A4[t3], A4 = au(A4, 0, t3);
          return e4 && cr(A4, e4), nr(u4, this, A4);
        });
      }, B3.tail = function(A4) {
        var e4 = null == A4 ? 0 : A4.length;
        return e4 ? a3(A4, 1, e4) : [];
      }, B3.take = function(A4, e4, u4) {
        return A4 && A4.length ? a3(A4, 0, (e4 = u4 || e4 === Pn ? 1 : y2(e4)) < 0 ? 0 : e4) : [];
      }, B3.takeRight = function(A4, e4, u4) {
        var t3 = null == A4 ? 0 : A4.length;
        return t3 ? a3(A4, (e4 = t3 - (e4 = u4 || e4 === Pn ? 1 : y2(e4))) < 0 ? 0 : e4, t3) : [];
      }, B3.takeRightWhile = function(A4, e4) {
        return A4 && A4.length ? qe(A4, f3(e4, 3), false, true) : [];
      }, B3.takeWhile = function(A4, e4) {
        return A4 && A4.length ? qe(A4, f3(e4, 3)) : [];
      }, B3.tap = function(A4, e4) {
        return e4(A4), A4;
      }, B3.throttle = function(A4, e4, u4) {
        var t3 = true, d3 = true;
        if ("function" != typeof A4)
          throw new E3(kn);
        return b2(u4) && (t3 = "leading" in u4 ? !!u4.leading : t3, d3 = "trailing" in u4 ? !!u4.trailing : d3), ad(A4, e4, { leading: t3, maxWait: e4, trailing: d3 });
      }, B3.thru = $t, B3.toArray = Sd, B3.toPairs = qd, B3.toPairsIn = An, B3.toPath = function(A4) {
        return P(A4) ? or(A4, bt) : C2(A4) ? [A4] : _3(mt(l2(A4)));
      }, B3.toPlainObject = Rd, B3.transform = function(A4, t3, d3) {
        var e4, u4 = P(A4), n3 = u4 || wd(A4) || Id(A4);
        return t3 = f3(t3, 4), null == d3 && (e4 = A4 && A4.constructor, d3 = n3 ? u4 ? new e4() : [] : b2(A4) && md(e4) ? OA(uA(A4)) : {}), (n3 ? rr : fe)(A4, function(A5, e5, u5) {
          return t3(d3, A5, e5, u5);
        }), d3;
      }, B3.unary = function(A4) {
        return td(A4, 1);
      }, B3.union = Tt, B3.unionBy = St, B3.unionWith = xt, B3.uniq = function(A4) {
        return A4 && A4.length ? Ye(A4) : [];
      }, B3.uniqBy = function(A4, e4) {
        return A4 && A4.length ? Ye(A4, f3(e4, 2)) : [];
      }, B3.uniqWith = function(A4, e4) {
        return e4 = "function" == typeof e4 ? e4 : Pn, A4 && A4.length ? Ye(A4, Pn, e4) : [];
      }, B3.unset = function(A4, e4) {
        return null == A4 || Ze(A4, e4);
      }, B3.unzip = Lt, B3.unzipWith = Rt, B3.update = function(A4, e4, u4) {
        return null == A4 ? A4 : ze(A4, e4, du(u4));
      }, B3.updateWith = function(A4, e4, u4, t3) {
        return t3 = "function" == typeof t3 ? t3 : Pn, null == A4 ? A4 : ze(A4, e4, du(u4), t3);
      }, B3.values = en, B3.valuesIn = function(A4) {
        return null == A4 ? [] : Wa(A4, H(A4));
      }, B3.without = Ot, B3.words = ln, B3.wrap = function(A4, e4) {
        return fd(du(e4), A4);
      }, B3.xor = Nt, B3.xorBy = Kt, B3.xorWith = Dt, B3.zip = Pt, B3.zipObject = function(A4, e4) {
        return uu(A4 || [], e4 || [], JA);
      }, B3.zipObjectDeep = function(A4, e4) {
        return uu(A4 || [], e4 || [], Me);
      }, B3.zipWith = kt, B3.entries = qd, B3.entriesIn = An, B3.extend = Nd, B3.extendWith = Kd, Qn(B3, B3), B3.add = Sn, B3.attempt = Bn, B3.camelCase = un, B3.capitalize = tn, B3.ceil = xn, B3.clamp = function(A4, e4, u4) {
        return u4 === Pn && (u4 = e4, e4 = Pn), u4 !== Pn && (u4 = (u4 = v2(u4)) == u4 ? u4 : 0), e4 !== Pn && (e4 = (e4 = v2(e4)) == e4 ? e4 : 0), Ae(v2(A4), e4, u4);
      }, B3.clone = function(A4) {
        return w2(A4, 4);
      }, B3.cloneDeep = function(A4) {
        return w2(A4, 5);
      }, B3.cloneDeepWith = function(A4, e4) {
        return w2(A4, 5, e4 = "function" == typeof e4 ? e4 : Pn);
      }, B3.cloneWith = function(A4, e4) {
        return w2(A4, 4, e4 = "function" == typeof e4 ? e4 : Pn);
      }, B3.conformsTo = function(A4, e4) {
        return null == e4 || ee(A4, e4, I(e4));
      }, B3.deburr = dn, B3.defaultTo = function(A4, e4) {
        return null == A4 || A4 != A4 ? e4 : A4;
      }, B3.divide = Ln, B3.endsWith = function(A4, e4, u4) {
        A4 = l2(A4), e4 = c2(e4);
        var t3 = A4.length, t3 = u4 = u4 === Pn ? t3 : Ae(y2(u4), 0, t3);
        return 0 <= (u4 -= e4.length) && A4.slice(u4, t3) == e4;
      }, B3.eq = D, B3.escape = function(A4) {
        return (A4 = l2(A4)) && Mr.test(A4) ? A4.replace(Pr, za) : A4;
      }, B3.escapeRegExp = function(A4) {
        return (A4 = l2(A4)) && Yr.test(A4) ? A4.replace(jr, "\\$&") : A4;
      }, B3.every = function(A4, e4, u4) {
        return (P(A4) ? Ta : re)(A4, f3(e4 = u4 && s2(A4, e4, u4) ? Pn : e4, 3));
      }, B3.find = Xt, B3.findIndex = Ft, B3.findKey = function(A4, e4) {
        return Na(A4, f3(e4, 3), fe);
      }, B3.findLast = Wt, B3.findLastIndex = Ut, B3.findLastKey = function(A4, e4) {
        return Na(A4, f3(e4, 3), se);
      }, B3.floor = Rn, B3.forEach = Jt, B3.forEachRight = jt, B3.forIn = function(A4, e4) {
        return null == A4 ? A4 : ce(A4, f3(e4, 3), H);
      }, B3.forInRight = function(A4, e4) {
        return null == A4 ? A4 : ie(A4, f3(e4, 3), H);
      }, B3.forOwn = function(A4, e4) {
        return A4 && fe(A4, f3(e4, 3));
      }, B3.forOwnRight = function(A4, e4) {
        return A4 && se(A4, f3(e4, 3));
      }, B3.get = $d, B3.gt = Bd, B3.gte = gd, B3.has = function(A4, e4) {
        return null != A4 && At(A4, e4, he);
      }, B3.hasIn = Gd, B3.head = yt, B3.identity = T2, B3.includes = function(A4, e4, u4, t3) {
        return A4 = i2(A4) ? A4 : en(A4), u4 = u4 && !t3 ? y2(u4) : 0, t3 = A4.length, u4 < 0 && (u4 = F3(t3 + u4, 0)), vd(A4) ? u4 <= t3 && -1 < A4.indexOf(e4, u4) : !!t3 && -1 < ir(A4, e4, u4);
      }, B3.indexOf = function(A4, e4, u4) {
        var t3 = null == A4 ? 0 : A4.length;
        return t3 ? ir(A4, e4, A4 = (A4 = null == u4 ? 0 : y2(u4)) < 0 ? F3(t3 + A4, 0) : A4) : -1;
      }, B3.inRange = function(A4, e4, u4) {
        return e4 = xd(e4), u4 === Pn ? (u4 = e4, e4 = 0) : u4 = xd(u4), (A4 = A4 = v2(A4)) >= U3(e4 = e4, u4 = u4) && A4 < F3(e4, u4);
      }, B3.invoke = Wd, B3.isArguments = pd, B3.isArray = P, B3.isArrayBuffer = hd, B3.isArrayLike = i2, B3.isArrayLikeObject = m2, B3.isBoolean = function(A4) {
        return true === A4 || false === A4 || k(A4) && u3(A4) == Vn;
      }, B3.isBuffer = wd, B3.isDate = G, B3.isElement = function(A4) {
        return k(A4) && 1 === A4.nodeType && !Ud(A4);
      }, B3.isEmpty = function(A4) {
        if (null != A4) {
          if (i2(A4) && (P(A4) || "string" == typeof A4 || "function" == typeof A4.splice || wd(A4) || Id(A4) || pd(A4)))
            return !A4.length;
          var e4, u4 = K(A4);
          if (u4 == Wn || u4 == Zn)
            return !A4.size;
          if (at(A4))
            return !_e(A4).length;
          for (e4 in A4)
            if (O.call(A4, e4))
              return false;
        }
        return true;
      }, B3.isEqual = function(A4, e4) {
        return Qe(A4, e4);
      }, B3.isEqualWith = function(A4, e4, u4) {
        var t3 = (u4 = "function" == typeof u4 ? u4 : Pn) ? u4(A4, e4) : Pn;
        return t3 === Pn ? Qe(A4, e4, Pn, u4) : !!t3;
      }, B3.isError = Cd, B3.isFinite = function(A4) {
        return "number" == typeof A4 && pA(A4);
      }, B3.isFunction = md, B3.isInteger = bd, B3.isLength = Qd, B3.isMap = Ed, B3.isMatch = function(A4, e4) {
        return A4 === e4 || Ee(A4, e4, Yu(e4));
      }, B3.isMatchWith = function(A4, e4, u4) {
        return u4 = "function" == typeof u4 ? u4 : Pn, Ee(A4, e4, Yu(e4), u4);
      }, B3.isNaN = function(A4) {
        return Fd(A4) && A4 != +A4;
      }, B3.isNative = function(A4) {
        if (rt(A4))
          throw new S("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
        return Fe(A4);
      }, B3.isNil = function(A4) {
        return null == A4;
      }, B3.isNull = function(A4) {
        return null === A4;
      }, B3.isNumber = Fd, B3.isObject = b2, B3.isObjectLike = k, B3.isPlainObject = Ud, B3.isRegExp = _d, B3.isSafeInteger = function(A4) {
        return bd(A4) && -Mn <= A4 && A4 <= Mn;
      }, B3.isSet = yd, B3.isString = vd, B3.isSymbol = C2, B3.isTypedArray = Id, B3.isUndefined = function(A4) {
        return A4 === Pn;
      }, B3.isWeakMap = function(A4) {
        return k(A4) && K(A4) == qn;
      }, B3.isWeakSet = function(A4) {
        return k(A4) && "[object WeakSet]" == u3(A4);
      }, B3.join = function(A4, e4) {
        return null == A4 ? "" : hA.call(A4, e4);
      }, B3.kebabCase = nn, B3.last = t2, B3.lastIndexOf = function(A4, e4, u4) {
        var t3 = null == A4 ? 0 : A4.length;
        if (!t3)
          return -1;
        var d3 = t3;
        if (u4 !== Pn && (d3 = (d3 = y2(u4)) < 0 ? F3(t3 + d3, 0) : U3(d3, t3 - 1)), e4 != e4)
          return Ka(A4, Pa, d3, true);
        for (var n3 = A4, r3 = e4, a4 = d3 + 1; a4--; )
          if (n3[a4] === r3)
            return a4;
        return a4;
      }, B3.lowerCase = rn, B3.lowerFirst = an, B3.lt = Hd, B3.lte = Td, B3.max = function(A4) {
        return A4 && A4.length ? ae(A4, T2, pe) : Pn;
      }, B3.maxBy = function(A4, e4) {
        return A4 && A4.length ? ae(A4, f3(e4, 2), pe) : Pn;
      }, B3.mean = function(A4) {
        return ka(A4, T2);
      }, B3.meanBy = function(A4, e4) {
        return ka(A4, f3(e4, 2));
      }, B3.min = function(A4) {
        return A4 && A4.length ? ae(A4, T2, ve) : Pn;
      }, B3.minBy = function(A4, e4) {
        return A4 && A4.length ? ae(A4, f3(e4, 2), ve) : Pn;
      }, B3.stubArray = Hn, B3.stubFalse = Tn, B3.stubObject = function() {
        return {};
      }, B3.stubString = function() {
        return "";
      }, B3.stubTrue = function() {
        return true;
      }, B3.multiply = Nn, B3.nth = function(A4, e4) {
        return A4 && A4.length ? xe(A4, y2(e4)) : Pn;
      }, B3.noConflict = function() {
        return dr._ === this && (dr._ = z2), this;
      }, B3.noop = En, B3.now = ud, B3.pad = function(A4, e4, u4) {
        A4 = l2(A4);
        var t3 = (e4 = y2(e4)) ? Br(A4) : 0;
        return !e4 || e4 <= t3 ? A4 : Hu(BA2(e4 = (e4 - t3) / 2), u4) + A4 + Hu(lA(e4), u4);
      }, B3.padEnd = function(A4, e4, u4) {
        A4 = l2(A4);
        var t3 = (e4 = y2(e4)) ? Br(A4) : 0;
        return e4 && t3 < e4 ? A4 + Hu(e4 - t3, u4) : A4;
      }, B3.padStart = function(A4, e4, u4) {
        A4 = l2(A4);
        var t3 = (e4 = y2(e4)) ? Br(A4) : 0;
        return e4 && t3 < e4 ? Hu(e4 - t3, u4) + A4 : A4;
      }, B3.parseInt = function(A4, e4, u4) {
        return e4 = u4 || null == e4 ? 0 : e4 && +e4, mA(l2(A4).replace(Zr, ""), e4 || 0);
      }, B3.random = function(A4, e4, u4) {
        var t3;
        return u4 && "boolean" != typeof u4 && s2(A4, e4, u4) && (e4 = u4 = Pn), u4 === Pn && ("boolean" == typeof e4 ? (u4 = e4, e4 = Pn) : "boolean" == typeof A4 && (u4 = A4, A4 = Pn)), A4 === Pn && e4 === Pn ? (A4 = 0, e4 = 1) : (A4 = xd(A4), e4 === Pn ? (e4 = A4, A4 = 0) : e4 = xd(e4)), e4 < A4 && (t3 = A4, A4 = e4, e4 = t3), u4 || A4 % 1 || e4 % 1 ? (t3 = bA(), U3(A4 + t3 * (e4 - A4 + ma("1e-" + ((t3 + "").length - 1))), e4)) : Ke(A4, e4);
      }, B3.reduce = function(A4, e4, u4) {
        var t3 = P(A4) ? La : $a, d3 = arguments.length < 3;
        return t3(A4, f3(e4, 4), u4, d3, de);
      }, B3.reduceRight = function(A4, e4, u4) {
        var t3 = P(A4) ? Ra : $a, d3 = arguments.length < 3;
        return t3(A4, f3(e4, 4), u4, d3, ne);
      }, B3.repeat = function(A4, e4, u4) {
        return e4 = (u4 ? s2(A4, e4, u4) : e4 === Pn) ? 1 : y2(e4), De(l2(A4), e4);
      }, B3.replace = function() {
        var A4 = arguments, e4 = l2(A4[0]);
        return A4.length < 3 ? e4 : e4.replace(A4[1], A4[2]);
      }, B3.result = function(A4, e4, u4) {
        var t3 = -1, d3 = (e4 = nu(e4, A4)).length;
        for (d3 || (d3 = 1, A4 = Pn); ++t3 < d3; ) {
          var n3 = null == A4 ? Pn : A4[bt(e4[t3])];
          n3 === Pn && (t3 = d3, n3 = u4), A4 = md(n3) ? n3.call(A4) : n3;
        }
        return A4;
      }, B3.round = Kn, B3.runInContext = d2, B3.sample = function(A4) {
        return (P(A4) ? GA : Pe)(A4);
      }, B3.size = function(A4) {
        var e4;
        return null == A4 ? 0 : i2(A4) ? vd(A4) ? Br(A4) : A4.length : (e4 = K(A4)) == Wn || e4 == Zn ? A4.size : _e(A4).length;
      }, B3.snakeCase = on2, B3.some = function(A4, e4, u4) {
        return (P(A4) ? Oa : Ve)(A4, f3(e4 = u4 && s2(A4, e4, u4) ? Pn : e4, 3));
      }, B3.sortedIndex = function(A4, e4) {
        return Xe(A4, e4);
      }, B3.sortedIndexBy = function(A4, e4, u4) {
        return We(A4, e4, f3(u4, 2));
      }, B3.sortedIndexOf = function(A4, e4) {
        var u4 = null == A4 ? 0 : A4.length;
        if (u4) {
          var t3 = Xe(A4, e4);
          if (t3 < u4 && D(A4[t3], e4))
            return t3;
        }
        return -1;
      }, B3.sortedLastIndex = function(A4, e4) {
        return Xe(A4, e4, true);
      }, B3.sortedLastIndexBy = function(A4, e4, u4) {
        return We(A4, e4, f3(u4, 2), true);
      }, B3.sortedLastIndexOf = function(A4, e4) {
        if (null == A4 ? 0 : A4.length) {
          var u4 = Xe(A4, e4, true) - 1;
          if (D(A4[u4], e4))
            return u4;
        }
        return -1;
      }, B3.startCase = cn, B3.startsWith = function(A4, e4, u4) {
        return A4 = l2(A4), u4 = null == u4 ? 0 : Ae(y2(u4), 0, A4.length), e4 = c2(e4), A4.slice(u4, u4 + e4.length) == e4;
      }, B3.subtract = Dn, B3.sum = function(A4) {
        return A4 && A4.length ? Ga(A4, T2) : 0;
      }, B3.sumBy = function(A4, e4) {
        return A4 && A4.length ? Ga(A4, f3(e4, 2)) : 0;
      }, B3.template = function(r3, A4, e4) {
        var a4, o3, u4 = B3.templateSettings;
        e4 && s2(r3, A4, e4) && (A4 = Pn), r3 = l2(r3), A4 = Kd({}, A4, u4, Du);
        var t3 = I(e4 = Kd({}, A4.imports, u4.imports, Du)), d3 = Wa(e4, t3), c3 = 0, u4 = A4.interpolate || sa, i3 = "__p += '", e4 = R((A4.escape || sa).source + "|" + u4.source + "|" + (u4 === Vr ? da : sa).source + "|" + (A4.evaluate || sa).source + "|$", "g"), n3 = "//# sourceURL=" + (O.call(A4, "sourceURL") ? (A4.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ca + "]") + "\n";
        if (r3.replace(e4, function(A5, e5, u5, t4, d4, n4) {
          return u5 = u5 || t4, i3 += r3.slice(c3, n4).replace(la, qa), e5 && (a4 = true, i3 += "' +\n__e(" + e5 + ") +\n'"), d4 && (o3 = true, i3 += "';\n" + d4 + ";\n__p += '"), u5 && (i3 += "' +\n((__t = (" + u5 + ")) == null ? '' : __t) +\n'"), c3 = n4 + A5.length, A5;
        }), i3 += "';\n", u4 = O.call(A4, "variable") && A4.variable) {
          if (ua.test(u4))
            throw new S("Invalid `variable` option passed into `_.template`");
        } else
          i3 = "with (obj) {\n" + i3 + "\n}\n";
        if (i3 = (o3 ? i3.replace(Or, "") : i3).replace(Nr, "$1").replace(Kr, "$1;"), i3 = "function(" + (u4 || "obj") + ") {\n" + (u4 ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (a4 ? ", __e = _.escape" : "") + (o3 ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + i3 + "return __p\n}", (e4 = Bn(function() {
          return x(t3, n3 + "return " + i3).apply(Pn, d3);
        })).source = i3, Cd(e4))
          throw e4;
        return e4;
      }, B3.times = function(A4, e4) {
        if ((A4 = y2(A4)) < 1 || Mn < A4)
          return [];
        for (var u4 = $n, t3 = U3(A4, $n), t3 = (e4 = f3(e4), A4 -= $n, Va(t3, e4)); ++u4 < A4; )
          e4(u4);
        return t3;
      }, B3.toFinite = xd, B3.toInteger = y2, B3.toLength = Ld, B3.toLower = function(A4) {
        return l2(A4).toLowerCase();
      }, B3.toNumber = v2, B3.toSafeInteger = function(A4) {
        return A4 ? Ae(y2(A4), -Mn, Mn) : 0 === A4 ? A4 : 0;
      }, B3.toString = l2, B3.toUpper = function(A4) {
        return l2(A4).toUpperCase();
      }, B3.trim = function(A4, e4, u4) {
        return (A4 = l2(A4)) && (u4 || e4 === Pn) ? Xa(A4) : A4 && (e4 = c2(e4)) ? au(u4 = gr(A4), ja(u4, e4 = gr(e4)), Ya(u4, e4) + 1).join("") : A4;
      }, B3.trimEnd = function(A4, e4, u4) {
        return (A4 = l2(A4)) && (u4 || e4 === Pn) ? A4.slice(0, to(A4) + 1) : A4 && (e4 = c2(e4)) ? au(u4 = gr(A4), 0, Ya(u4, gr(e4)) + 1).join("") : A4;
      }, B3.trimStart = function(A4, e4, u4) {
        return (A4 = l2(A4)) && (u4 || e4 === Pn) ? A4.replace(Zr, "") : A4 && (e4 = c2(e4)) ? au(u4 = gr(A4), ja(u4, gr(e4))).join("") : A4;
      }, B3.truncate = function(A4, e4) {
        var u4, t3 = 30, d3 = "...", e4 = (b2(e4) && (u4 = "separator" in e4 ? e4.separator : u4, t3 = "length" in e4 ? y2(e4.length) : t3, d3 = "omission" in e4 ? c2(e4.omission) : d3), (A4 = l2(A4)).length);
        if ((e4 = sr(A4) ? (n3 = gr(A4)).length : e4) <= t3)
          return A4;
        if ((e4 = t3 - Br(d3)) < 1)
          return d3;
        var n3, t3 = n3 ? au(n3, 0, e4).join("") : A4.slice(0, e4);
        if (u4 !== Pn)
          if (n3 && (e4 += t3.length - e4), _d(u4)) {
            if (A4.slice(e4).search(u4)) {
              var r3, a4 = t3;
              for ((u4 = u4.global ? u4 : R(u4.source, l2(na.exec(u4)) + "g")).lastIndex = 0; r3 = u4.exec(a4); )
                var o3 = r3.index;
              t3 = t3.slice(0, o3 === Pn ? e4 : o3);
            }
          } else
            A4.indexOf(c2(u4), e4) != e4 && -1 < (n3 = t3.lastIndexOf(u4)) && (t3 = t3.slice(0, n3));
        return t3 + d3;
      }, B3.unescape = function(A4) {
        return (A4 = l2(A4)) && kr.test(A4) ? A4.replace(Dr, no) : A4;
      }, B3.uniqueId = function(A4) {
        var e4 = ++J;
        return l2(A4) + e4;
      }, B3.upperCase = fn, B3.upperFirst = sn, B3.each = Jt, B3.eachRight = jt, B3.first = yt, Qn(B3, (On = {}, fe(B3, function(A4, e4) {
        O.call(B3.prototype, e4) || (On[e4] = A4);
      }), On), { chain: false }), B3.VERSION = "4.17.21", rr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(A4) {
        B3[A4].placeholder = B3;
      }), rr(["drop", "take"], function(u4, t3) {
        h3.prototype[u4] = function(A4) {
          A4 = A4 === Pn ? 1 : F3(y2(A4), 0);
          var e4 = this.__filtered__ && !t3 ? new h3(this) : this.clone();
          return e4.__filtered__ ? e4.__takeCount__ = U3(A4, e4.__takeCount__) : e4.__views__.push({ size: U3(A4, $n), type: u4 + (e4.__dir__ < 0 ? "Right" : "") }), e4;
        }, h3.prototype[u4 + "Right"] = function(A4) {
          return this.reverse()[u4](A4).reverse();
        };
      }), rr(["filter", "map", "takeWhile"], function(A4, e4) {
        var u4 = e4 + 1, t3 = 1 == u4 || 3 == u4;
        h3.prototype[A4] = function(A5) {
          var e5 = this.clone();
          return e5.__iteratees__.push({ iteratee: f3(A5, 3), type: u4 }), e5.__filtered__ = e5.__filtered__ || t3, e5;
        };
      }), rr(["head", "last"], function(A4, e4) {
        var u4 = "take" + (e4 ? "Right" : "");
        h3.prototype[A4] = function() {
          return this[u4](1).value()[0];
        };
      }), rr(["initial", "tail"], function(A4, e4) {
        var u4 = "drop" + (e4 ? "" : "Right");
        h3.prototype[A4] = function() {
          return this.__filtered__ ? new h3(this) : this[u4](1);
        };
      }), h3.prototype.compact = function() {
        return this.filter(T2);
      }, h3.prototype.find = function(A4) {
        return this.filter(A4).head();
      }, h3.prototype.findLast = function(A4) {
        return this.reverse().find(A4);
      }, h3.prototype.invokeMap = r2(function(e4, u4) {
        return "function" == typeof e4 ? new h3(this) : this.map(function(A4) {
          return me(A4, e4, u4);
        });
      }), h3.prototype.reject = function(A4) {
        return this.filter(id(f3(A4)));
      }, h3.prototype.slice = function(A4, e4) {
        A4 = y2(A4);
        var u4 = this;
        return u4.__filtered__ && (0 < A4 || e4 < 0) ? new h3(u4) : (A4 < 0 ? u4 = u4.takeRight(-A4) : A4 && (u4 = u4.drop(A4)), e4 !== Pn ? (e4 = y2(e4)) < 0 ? u4.dropRight(-e4) : u4.take(e4 - A4) : u4);
      }, h3.prototype.takeRightWhile = function(A4) {
        return this.reverse().takeWhile(A4).reverse();
      }, h3.prototype.toArray = function() {
        return this.take($n);
      }, fe(h3.prototype, function(c3, A4) {
        var i3 = /^(?:filter|find|map|reject)|While$/.test(A4), f4 = /^(?:head|last)$/.test(A4), s3 = B3[f4 ? "take" + ("last" == A4 ? "Right" : "") : A4], l3 = f4 || /^find/.test(A4);
        s3 && (B3.prototype[A4] = function() {
          function A5(A6) {
            return A6 = s3.apply(B3, cr([A6], t3)), f4 && a4 ? A6[0] : A6;
          }
          var e4, u4 = this.__wrapped__, t3 = f4 ? [1] : arguments, d3 = u4 instanceof h3, n3 = t3[0], r3 = d3 || P(u4), a4 = (r3 && i3 && "function" == typeof n3 && 1 != n3.length && (d3 = r3 = false), this.__chain__), n3 = !!this.__actions__.length, o3 = l3 && !a4, d3 = d3 && !n3;
          return !l3 && r3 ? (u4 = d3 ? u4 : new h3(this), (e4 = c3.apply(u4, t3)).__actions__.push({ func: $t, args: [A5], thisArg: Pn }), new p2(e4, a4)) : o3 && d3 ? c3.apply(this, t3) : (e4 = this.thru(A5), o3 ? f4 ? e4.value()[0] : e4.value() : e4);
        });
      }), rr(["pop", "push", "shift", "sort", "splice", "unshift"], function(A4) {
        var u4 = $[A4], t3 = /^(?:push|sort|unshift)$/.test(A4) ? "tap" : "thru", d3 = /^(?:pop|shift)$/.test(A4);
        B3.prototype[A4] = function() {
          var A5, e4 = arguments;
          return d3 && !this.__chain__ ? (A5 = this.value(), u4.apply(P(A5) ? A5 : [], e4)) : this[t3](function(A6) {
            return u4.apply(P(A6) ? A6 : [], e4);
          });
        };
      }), fe(h3.prototype, function(A4, e4) {
        var u4, t3 = B3[e4];
        t3 && (u4 = t3.name + "", O.call(vA, u4) || (vA[u4] = []), vA[u4].push({ name: e4, func: t3 }));
      }), vA[_u(Pn, 2).name] = [{ name: "wrapper", func: Pn }], h3.prototype.clone = function() {
        var A4 = new h3(this.__wrapped__);
        return A4.__actions__ = _3(this.__actions__), A4.__dir__ = this.__dir__, A4.__filtered__ = this.__filtered__, A4.__iteratees__ = _3(this.__iteratees__), A4.__takeCount__ = this.__takeCount__, A4.__views__ = _3(this.__views__), A4;
      }, h3.prototype.reverse = function() {
        var A4;
        return this.__filtered__ ? ((A4 = new h3(this)).__dir__ = -1, A4.__filtered__ = true) : (A4 = this.clone()).__dir__ *= -1, A4;
      }, h3.prototype.value = function() {
        var A4 = this.__wrapped__.value(), e4 = this.__dir__, u4 = P(A4), t3 = e4 < 0, d3 = u4 ? A4.length : 0, n3 = function(A5, e5, u5) {
          var t4 = -1, d4 = u5.length;
          for (; ++t4 < d4; ) {
            var n4 = u5[t4], r4 = n4.size;
            switch (n4.type) {
              case "drop":
                A5 += r4;
                break;
              case "dropRight":
                e5 -= r4;
                break;
              case "take":
                e5 = U3(e5, A5 + r4);
                break;
              case "takeRight":
                A5 = F3(A5, e5 - r4);
            }
          }
          return { start: A5, end: e5 };
        }(0, d3, this.__views__), r3 = n3.start, a4 = (n3 = n3.end) - r3, o3 = t3 ? n3 : r3 - 1, c3 = this.__iteratees__, i3 = c3.length, f4 = 0, s3 = U3(a4, this.__takeCount__);
        if (!u4 || !t3 && d3 == a4 && s3 == a4)
          return Au(A4, this.__actions__);
        var l3 = [];
        A:
          for (; a4-- && f4 < s3; ) {
            for (var B4 = -1, g3 = A4[o3 += e4]; ++B4 < i3; ) {
              var p3 = c3[B4], h4 = p3.iteratee, p3 = p3.type, h4 = h4(g3);
              if (2 == p3)
                g3 = h4;
              else if (!h4) {
                if (1 == p3)
                  continue A;
                break A;
              }
            }
            l3[f4++] = g3;
          }
        return l3;
      }, B3.prototype.at = Gt, B3.prototype.chain = function() {
        return Mt(this);
      }, B3.prototype.commit = function() {
        return new p2(this.value(), this.__chain__);
      }, B3.prototype.next = function() {
        this.__values__ === Pn && (this.__values__ = Sd(this.value()));
        var A4 = this.__index__ >= this.__values__.length;
        return { done: A4, value: A4 ? Pn : this.__values__[this.__index__++] };
      }, B3.prototype.plant = function(A4) {
        for (var e4, u4 = this; u4 instanceof KA; )
          var t3 = Et(u4), d3 = (t3.__index__ = 0, t3.__values__ = Pn, e4 ? d3.__wrapped__ = t3 : e4 = t3, t3), u4 = u4.__wrapped__;
        return d3.__wrapped__ = A4, e4;
      }, B3.prototype.reverse = function() {
        var A4 = this.__wrapped__;
        return A4 instanceof h3 ? (A4 = A4, (A4 = (A4 = this.__actions__.length ? new h3(this) : A4).reverse()).__actions__.push({ func: $t, args: [Ht], thisArg: Pn }), new p2(A4, this.__chain__)) : this.thru(Ht);
      }, B3.prototype.toJSON = B3.prototype.valueOf = B3.prototype.value = function() {
        return Au(this.__wrapped__, this.__actions__);
      }, B3.prototype.first = B3.prototype.head, aA && (B3.prototype[aA] = function() {
        return this;
      }), B3;
    }();
    d ? ((d.exports = pr)._ = pr, t._ = pr) : dr._ = pr;
  }.call(commonjsGlobal);
}(lodash, lodash.exports), lodash.exports);
function addClassForLine(A2) {
  let t = 0;
  return A2.replace(/(\\_)+/g, (A3) => {
    var e2 = A3.split("\\").length - 1;
    let u2 = "";
    for (let A4 = 0; A4 < Number(e2); A4++)
      u2 += `\\class{_u i_${t}}{\\_}`;
    return t++, u2;
  });
}
function transFormatLimits(A2, e2) {
  var u2, t, d, n = { "\\rightarrow": "->", "\\leftarrow": "<-", "\\rightleftarrow": "<=>", "\\leftrightarrow": "<->" }, A2 = A2.split("\\limits^");
  return 2 === e2 ? (t = A2[0], d = A2[1].split("}_{")[0].slice(1), u2 = A2[1].split("}_{")[1].slice(0, A2[1].split("}_{")[1].length - 1), "=" === t ? `\\ce{\\xlongequal[{${u2}}]{${u2}}}` : `\\ce{${n[t]}[{${d}}][{${u2}}]}`) : 3 === e2 ? (t = A2[0], d = A2[1].split("{")[1].split("}")[0], "=" === t ? `\\ce{\\xlongequal{${d}}}` : `\\ce{${n[t]}[{${d}}]}`) : "";
}
function formatLimits(A2) {
  return A2.replace(/((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}_\{[^}]+\}/g, (A3) => transFormatLimits(A3, 2)).replace(/((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}/g, (A3) => transFormatLimits(A3, 3));
}
const englishMap = { "@": "\xE6", "u\\.\\.\\(r\\)": "{\u028A\u0259}^{r}", "\\.\\.": "\u0259", oi: "\u0254\u026A", ai: "a\u026A", ei: "e\u026A", "e(?!:)": "e", "e:": "\u025C\u02D0", "\\(r\\)": "^{r}", "(?!pr)i(?![:|me])": "\u026A", "i:": "i\u02D0", "o(?!:)": "\u0252", "o:": "\u0254\u02D0", au: "a\u028A", Ou: "\u0259\u028A", "u(?!:)": "\u028A", "u:": "u\u02D0", ":": "\u02D0", N: "\u014B", tS: "t\u0283", S: "\u0283", th: "\u03B8", TH: "\xF0", dZ: "d\u0292", Z: "\u0292", prime: "prime " };
function formatPhonetic(A2) {
  return A2.replace(/\\\[\\phonetic\{.*?\}\\\]/g, (A3) => {
    let u2 = A3.split("\\phonetic").join("");
    for (let e2 in englishMap)
      u2 = u2.replace(new RegExp(e2, "g"), (A4) => englishMap[e2]);
    return u2.replaceAll("\\^", "\\wedge");
  });
}
function formatFourlineRuled(A2) {
  return A2.replace(/\\fourlineruled\{\d+\}/g, (A3) => {
    var e2 = Number(A3.split("}")[0].split("{")[1]);
    let u2 = "\\class{fourlineruled}{";
    for (let A4 = 0; A4 < e2; A4++)
      u2 += "\\begin{array}{l}\\hline\\text{ }\\\\\\hline\\text{ }\\\\\\hline\\text{ }\\\\\\hline\\end{array}";
    return u2 += "}";
  });
}
function transFormatRomanNum(A2, e2 = "romannumeral") {
  var A2 = Number(A2.split(e2 + "{")[1].split("}")[0]) / 10, u2 = Math.floor(A2), t = Number((A2 + "").split(".")[1]);
  let d = "";
  if (0 < u2)
    for (let A3 = 0; A3 < u2; A3++)
      d += "x";
  if (t < 4)
    for (let A3 = 0; A3 < t; A3++)
      d += "i";
  if (4 === t && (d += "iv"), 5 === t && (d += "v"), 5 < t && t < 9) {
    d += "v";
    for (let A3 = 5; A3 < t; A3++)
      d += "i";
  }
  return 9 === t && (d += "ix"), 10 === t && (d += "x"), d = "RomanNumeralCaps" === e2 ? (d = (d = d.replace(/i/g, "I")).replace(/v/g, "V")).replace(/x/g, "X") : d;
}
function formatOrder(A2) {
  return A2.replace(/\\romannumeral\{\d+\}/g, (A3) => `\\mathsf{${transFormatRomanNum(A3)}}`).replace(/\\RomanNumeralCaps\{\d+\}/g, (A3) => `\\mathsf{${transFormatRomanNum(A3, "RomanNumeralCaps")}}`);
}
function formatPunctuation(i) {
  const f2 = Array.from(i.matchAll(/[.,'"!\*\/\?、。;:]/g)), s = /\\style\{([\w-]+:[\w\d-]+;*)+\}/g, l = /((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}_\{[^}]+\}/g, B = /\\underline\{.*?\}/g, g = /\_\{.*?\}/g, p = /\^\{.*?\}/g, h2 = /\}[.,'"!\*\/\?、。;:]/g, w = /\\\[\\phonetic\{.*?\}\\\]/g, C = /\\fourlineruled\{\d+\}/g;
  return f2.forEach((u2, t) => {
    let A2 = true;
    "\n" === i.charAt(u2.index - 1) && (A2 = false), "^" !== i.charAt(u2.index + 1) && "_" !== i.charAt(u2.index + 1) || (A2 = false);
    var e2 = Array.from(i.matchAll(s)).concat(Array.from(i.matchAll(l))), d = Array.from(i.matchAll(B)).map((A3) => [A3.index, A3.index + A3[0].length]), n = Array.from(i.matchAll(g)).map((A3) => [A3.index, A3.index + A3[0].length]), r = Array.from(i.matchAll(p)).map((A3) => [A3.index, A3.index + A3[0].length]), a2 = Array.from(i.matchAll(h2)).map((A3) => [A3.index, A3.index + A3[0].length]), o = Array.from(i.matchAll(w)).map((A3) => [A3.index, A3.index + A3[0].length]), e2 = (Array.from(i.matchAll(C)).map((A3) => [A3.index, A3.index + A3[0].length]), e2.map((A3) => [A3.index, A3.index + A3[0].length]).concat(d).concat(n).concat(r).concat(a2).concat(o)), d = ((t < f2.length - 1 && u2.index + 1 === f2[t + 1].index || 1 < t && u2.index - 1 === f2[t - 1].index) && (A2 = false), e2.findIndex((A3) => u2.index >= A3[0] && u2.index <= A3[1]));
    if (A2 = -1 < d ? false : A2) {
      var c = u2[0];
      let e3 = `_\\class{mjx-kz-sub}{${c}}`;
      ["'", '"'].includes(c) && (e3 = `^\\class{mjx-kz-sup}{${c}}`), i = i.substring(0, u2.index) + e3 + i.substring(u2.index + 1);
      for (let A3 = t + 1; A3 < f2.length; A3++)
        f2[A3].index += e3.length - c.length;
    }
  }), i;
}
function formatQuotes(A2) {
  return A2.replace(/\'/g, "\\textasciiacute{}").replace(/\"/g, "\\textacutedbl{}").replace(/\“/g, "\\textquotedblleft{}").replace(/\”/g, "\\textquotedblright{}");
}
function formatDeleteBySign(A2) {
  return A2.replace(/(\\hand(?![a-zA-Z]))|(\\mix)|(\\deletion)|(\\insert)|(\\wrong)|(\\chnfield)|(\\engfield)|(<s>)|(<\/s>)|(<unk>)/g, (A3) => " ");
}
function formatMultipleTab(A2) {
  return A2.replace(/\\tab\{\d+\}/g, (A3) => {
    var e2 = Number(A3.split("\\tab{")[1].split("}")[0]);
    let u2 = "";
    for (let A4 = 0; A4 < e2; A4++)
      u2 += "\\;\\;";
    return u2;
  }).replace(/\\tab(?!le)/g, "\\;\\;");
}
function formatSpace(A2) {
  return A2.replace(/[^\S\r]+/g, "\\;\\;");
}
function formatAloneSign(A2) {
  return A2.replace(/(\<)|(\\prime)|(\\alpha)|(\\Alpha)|(\\beta)|(\\Beta)|(\\gamma)|(\\Gamma)|(\\delta)|(\\Delta)|(\\epsilon)|(\\Epsilon)|(\\zeta)|(\\Zeta)|(\\eta)|(\\Eta)|(\\theta)|(\\Theta)|(\\iota)|(\\Iota)|(\\kappa)|(\\Kappa)|(\\lambda)|(\\Lambda)|(\\mu)|(\\Mu)|(\\nu)|(\\Nu)|(\\xi)|(\\Xi)|(\\omicron)|(\\Omicron)|(\\pi)|(\\Pi)|(\\rho)|(\\Rho)|(\\sigma)|(\\Sigma)|(\\tau)|(\\Tau)|(\\upsilon)|(\\Upsilon)|(\\phi)|(\\Phi)|(\\chi)|(\\Chi)|(\\psi)|(\\Psi)|(\\omega)|(\\Omega)|(\\pm(?!od))|(\\mp)|(\\times)|(\\div)|(\\mid)|(\\prod)|(\\sum(?!\_))|(\\approx(?!eq))|(\\leq)|(\\geq)|(\\neq(?!uiv))|(\\equiv)|(\\propto)|(\\napprox)|(\\nleq)|(\\ngeq)|(\\nequiv)|(\\angle)|(\\cong)|(\\sim)|(\\parallel(?!ogram)(?!equal))|(\\parallelogram)|(\\parallelequal)|(\\perp)|(\\nparallel)|(\\cdots)|(\\ddots)|(\\vdots)|(\\lor)|(\\land)|(\\lnot)|(\\forall)|(\\exists)|(\\top)|(\\bot)|(\\cup)|(\\cap)|(\\subset(?!(neq|eq)))|(\\supset(?!neq|eq))|(\\notin)|(\\ni)|(\\notni)|(\\emptyset)|(\\complement)|(\\subseteq)|(\\supseteq(?!eq))|(\\nsubset(?!eq))|(\\nsupset(?!eq))|(\\subsetneq)|(\\supsetneq)|(\\nsubseteq)|(\\nsupseteq)|(\\infty)|(\\partial)|(\\Re)|(\\lg)|(\\lim(?!its))|(\\ln)|(\\max)|(\\min)|(\\sin)|(\\cos)|(\\tan)|(\\sec)|(\\cot)|(\\csc)|(\\arcsin)|(\\arccos)|(\\arctan)|(\\arccot(?!angent))|(\\arcsec)|(\\arccsc)|(\\Leftarrow(?!\\limits))|(\\leftarrow(?!\\limits))|(\\Rightarrow(?!\\limits))|(\\rightarrow(?!\\limits))|(\\Uparrow)|(\\uparrow)|(\\Downarrow)|(\\downarrow)|(\\Leftrightarrow(?!\\limits))|(\\leftrightarrow(?!\\limits))|(\\Updownarrow)|(\\updownarrow)|(\\NEarrow)|(\\nearrow)|(\\NWarrow)|(\\nwarrow)|(\\SEarrow)|(\\searrow)|(\\SWarrow)|(\\swarrow)|(\\hookleftarrow)|(\\odot)|(\\ominus)|(\\oplus)|(\\otimes)|(\\oiiint)|(\\oiint)|(\\oint)|(\\diamond)|(\\square)|(\\rectangle)|(\\star)|(\\bigstar)|(\\triangle(?!down))|(\\triangledown)|(\\heart(?!suit))|(\\bullet)|(\\female)|(\\male)|(\\smiley)|(\\spadesuit)|(\\clubsuit)|(\\blackdiamond)|(\\blacksquare)|(\\blackrectangle)|(\\blackstar)|(\\blacktriangle(?!down))|(\\blacktriangledown)|(\\blackheart)|(\\textperthousand)|(\\textreferencemark)|(\\textregistered)|(\\textsection)|(\\texttrademark)|(\\cdot)|(\\because)|(\\therefore)|(\\chi)|(\\circ)|(\\xmark)|(\\cmark)|(\\in(?!(t|sert)))|(\\omitted)/g, (A3) => A3 + "\\,");
}
function formatMiddleBrackets(A2) {
  return A2.replace(/\n\[/g, (A3) => "\\\\\\[");
}
function formatLineBreak(A2) {
  return A2.replace(/[\n]/g, "\\\\");
}
function formatSimultaneous(A2) {
  return A2.replace(/\\left\\{/g, (A3) => {
    return "\\left\\{\\begin{array}{l}" + A3.split("\\left\\{")[1];
  }).replace(/\\right\\}/g, (A3) => {
    return A3.split("\\right\\}")[0] + "\\end{array}\\right.";
  });
}
function formatReverse(A2) {
  return A2.replace(/\\reverse\{.*?\}\{.*?\}/g, (A3) => {
    var e2 = A3.split("}{")[0].split("\\reverse{")[1];
    return "" + A3.split("}{")[1].split("}")[0] + e2;
  });
}
function formatUnderline(A2) {
  return A2.replace(/\\underline\{.*?\}/g, (A3) => {
    var e2 = A3.split("\\underline{")[1];
    return 2 === e2.split("}").length && 16 < e2.split("}")[0].length ? "\\class{mjx-kz-underline}{{}" + e2 : A3;
  });
}
function getStringWidth(e2) {
  let u2 = 0;
  for (let A2 = 0; A2 < e2.length; A2++)
    /[^\x00-\xff]/.test(e2.substr(A2, 1)) ? u2 += 2.2 : u2 += 1.3;
  return u2;
}
function formatUwave(A2) {
  return A2.replace(/\\uwave\{.*?\}/g, (A3) => {
    var A3 = A3.split("\\uwave{")[1].split("}")[0], e2 = [], u2 = Math.floor(getStringWidth(A3));
    for (let A4 = 0; A4 < u2; A4++)
      e2.push("\\sim");
    return `\\underset{${e2.join("\\!")}}{${A3}}`;
  });
}
function formatMultipleLine(A2) {
  return A2.replace(/\\_(\{\d+\})/g, (A3) => {
    let e2 = "";
    var u2 = Number(A3.split("_{")[1].split("}")[0]);
    for (let A4 = 0; A4 < Number(u2); A4++)
      e2 += "\\_";
    return e2;
  });
}
class FormatCommon {
  constructor(A2) {
    this.content = A2;
  }
  formatUnderline() {
    return this.content = formatUnderline(this.content), this;
  }
  formatDeleteBySign() {
    return this.content = formatDeleteBySign(this.content), this;
  }
  formatMultipleTab() {
    return this.content = formatMultipleTab(this.content), this;
  }
  formatAloneSign() {
    return this.content = formatAloneSign(this.content), this;
  }
  formatOrder() {
    return this.content = formatOrder(this.content), this;
  }
  formatLimits() {
    return this.content = formatLimits(this.content), this;
  }
  formatMiddleBrackets() {
    return this.content = formatMiddleBrackets(this.content), this;
  }
  formatLineBreak() {
    return this.content = formatLineBreak(this.content), this;
  }
  formatSimultaneous() {
    return this.content = formatSimultaneous(this.content), this;
  }
  formatPhonetic() {
    return this.content = formatPhonetic(this.content), this;
  }
  formatQuotes() {
    return this.content = formatQuotes(this.content), this;
  }
  formatUwave() {
    return this.content = formatUwave(this.content), this;
  }
  formatReverse() {
    return this.content = formatReverse(this.content), this;
  }
  formatMultipleLine() {
    return this.content = formatMultipleLine(this.content), this;
  }
  formatFourlineRuled() {
    return this.content = formatFourlineRuled(this.content), this;
  }
  formatSpace() {
    return this.content = formatSpace(this.content), this;
  }
}
function formatCommon(A2) {
  A2 = new FormatCommon(A2);
  return A2.formatUnderline().formatDeleteBySign().formatMultipleTab().formatAloneSign().formatOrder().formatLimits().formatMiddleBrackets().formatLineBreak().formatSimultaneous().formatPhonetic().formatQuotes().formatUwave().formatReverse().formatMultipleLine().formatFourlineRuled().formatSpace(), A2.content;
}
const REGEX_DATA = "xregexp", features = { astral: false, namespacing: true }, fixed = {};
let regexCache = {}, patternCache = {};
const tokens = [], defaultScope = "default", classScope = "class", nativeTokens = { default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/, class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/ }, replacementToken = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g, correctExecNpcg = void 0 === /()??/.exec("")[1], hasFlagsProp = void 0 !== /x/.flags;
function hasNativeFlag(A2) {
  let e2 = true;
  try {
    new RegExp("", A2), "y" === A2 && ".." === ".a".replace(new RegExp("a", "gy"), ".") && (e2 = false);
  } catch (A3) {
    e2 = false;
  }
  return e2;
}
const hasNativeD = hasNativeFlag("d"), hasNativeS = hasNativeFlag("s"), hasNativeU = hasNativeFlag("u"), hasNativeY = hasNativeFlag("y"), registeredFlags = { d: hasNativeD, g: true, i: true, m: true, s: hasNativeS, u: hasNativeU, y: hasNativeY }, nonnativeFlags = hasNativeS ? /[^dgimsuy]+/g : /[^dgimuy]+/g;
function augment(A2, e2, u2, t, d) {
  if (A2[REGEX_DATA] = { captureNames: e2 }, !d) {
    if (A2.__proto__)
      A2.__proto__ = XRegExp.prototype;
    else
      for (const n in XRegExp.prototype)
        A2[n] = XRegExp.prototype[n];
    A2[REGEX_DATA].source = u2, A2[REGEX_DATA].flags = t && t.split("").sort().join("");
  }
  return A2;
}
function clipDuplicates(A2) {
  return A2.replace(/([\s\S])(?=[\s\S]*\1)/g, "");
}
function copyRegex(A2, e2) {
  if (!XRegExp.isRegExp(A2))
    throw new TypeError("Type RegExp expected");
  var u2 = A2[REGEX_DATA] || {};
  let t = getNativeFlags(A2), d = "", n = "", r = null, a2 = null;
  return (e2 = e2 || {}).removeG && (n += "g"), e2.removeY && (n += "y"), n && (t = t.replace(new RegExp(`[${n}]+`, "g"), "")), e2.addG && (d += "g"), e2.addY && (d += "y"), d && (t = clipDuplicates(t + d)), e2.isInternalOnly || (void 0 !== u2.source && (r = u2.source), null != u2.flags && (a2 = d ? clipDuplicates(u2.flags + d) : u2.flags)), A2 = augment(new RegExp(e2.source || A2.source, t), hasNamedCapture(A2) ? u2.captureNames.slice(0) : null, r, a2, e2.isInternalOnly);
}
function dec(A2) {
  return parseInt(A2, 16);
}
function getContextualTokenSeparator(A2, e2, u2) {
  var t = A2.index + A2[0].length, d = A2.input[A2.index - 1], n = A2.input[t];
  return /^[()|]$/.test(d) || /^[()|]$/.test(n) || 0 === A2.index || t === A2.input.length || /\(\?(?:[:=!]|<[=!])$/.test(A2.input.substring(A2.index - 4, A2.index)) || isQuantifierNext(A2.input, t, u2) ? "" : "(?:)";
}
function getNativeFlags(A2) {
  return hasFlagsProp ? A2.flags : /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(A2))[1];
}
function hasNamedCapture(A2) {
  return !(!A2[REGEX_DATA] || !A2[REGEX_DATA].captureNames);
}
function hex(A2) {
  return parseInt(A2, 10).toString(16);
}
function isQuantifierNext(A2, e2, u2) {
  var t = "\\(\\?#[^)]*\\)", d = "[?*+]|{\\d+(?:,\\d*)?}";
  return (u2.includes("x") ? new RegExp(`^(?:\\s|#[^#\\n]*|${t})*(?:${d})`) : new RegExp(`^(?:${t})*(?:${d})`)).test(A2.slice(e2));
}
function isType(A2, e2) {
  return Object.prototype.toString.call(A2) === `[object ${e2}]`;
}
function nullThrows(A2) {
  if (null == A2)
    throw new TypeError("Cannot convert null or undefined to object");
  return A2;
}
function pad4(A2) {
  for (; A2.length < 4; )
    A2 = "0" + A2;
  return A2;
}
function prepareFlags(A2, u2) {
  if (clipDuplicates(u2) !== u2)
    throw new SyntaxError("Invalid duplicate regex flag " + u2);
  A2 = A2.replace(/^\(\?([\w$]+)\)/, (A3, e2) => {
    if (/[dgy]/.test(e2))
      throw new SyntaxError("Cannot use flags dgy in mode modifier " + A3);
    return u2 = clipDuplicates(u2 + e2), "";
  });
  for (const e2 of u2)
    if (!registeredFlags[e2])
      throw new SyntaxError("Unknown regex flag " + e2);
  return { pattern: A2, flags: u2 };
}
function prepareOptions(A2) {
  const e2 = {};
  return isType(A2, "String") ? (XRegExp.forEach(A2, /[^\s,]+/, (A3) => {
    e2[A3] = true;
  }), e2) : A2;
}
function registerFlag(A2) {
  if (!/^[\w$]$/.test(A2))
    throw new Error("Flag must be a single character A-Za-z0-9_$");
  registeredFlags[A2] = true;
}
function runTokens(A2, e2, u2, t, d) {
  let n = tokens.length;
  var r, a2, o = A2[u2];
  let c = null;
  for (; n--; )
    if (!((a2 = tokens[n]).leadChar && a2.leadChar !== o || a2.scope !== t && "all" !== a2.scope || a2.flag && !e2.includes(a2.flag)) && (r = XRegExp.exec(A2, a2.regex, u2, "sticky"))) {
      c = { matchLength: r[0].length, output: a2.handler.call(d, r, t, e2), reparse: a2.reparse };
      break;
    }
  return c;
}
function setAstral(A2) {
  features.astral = A2;
}
function setNamespacing(A2) {
  features.namespacing = A2;
}
function XRegExp(n, r) {
  if (XRegExp.isRegExp(n)) {
    if (void 0 !== r)
      throw new TypeError("Cannot supply flags when copying a RegExp");
    return copyRegex(n);
  }
  if (n = void 0 === n ? "" : String(n), r = void 0 === r ? "" : String(r), XRegExp.isInstalled("astral") && !r.includes("A") && (r += "A"), patternCache[n] || (patternCache[n] = {}), !patternCache[n][r]) {
    var a2 = { hasNamedCapture: false, captureNames: [] };
    let A2 = defaultScope, e2 = "", u2 = 0, t;
    var o = prepareFlags(n, r);
    let d = o.pattern;
    for (var c, i = o.flags; u2 < d.length; ) {
      for (; (t = runTokens(d, i, u2, A2, a2)) && t.reparse && (d = d.slice(0, u2) + t.output + d.slice(u2 + t.matchLength)), t && t.reparse; )
        ;
      t ? (e2 += t.output, u2 += t.matchLength || 1) : ([c] = XRegExp.exec(d, nativeTokens[A2], u2, "sticky"), e2 += c, u2 += c.length, "[" === c && A2 === defaultScope ? A2 = classScope : "]" === c && A2 === classScope && (A2 = defaultScope));
    }
    patternCache[n][r] = { pattern: e2.replace(/(?:\(\?:\))+/g, "(?:)"), flags: i.replace(nonnativeFlags, ""), captures: a2.hasNamedCapture ? a2.captureNames : null };
  }
  o = patternCache[n][r];
  return augment(new RegExp(o.pattern, o.flags), o.captures, n, r);
}
XRegExp.prototype = new RegExp(), XRegExp.version = "5.1.1", XRegExp._clipDuplicates = clipDuplicates, XRegExp._hasNativeFlag = hasNativeFlag, XRegExp._dec = dec, XRegExp._hex = hex, XRegExp._pad4 = pad4, XRegExp.addToken = (A2, e2, u2) => {
  let t = (u2 = u2 || {})["optionalFlags"];
  if (u2.flag && registerFlag(u2.flag), t)
    for (const d of t = t.split(""))
      registerFlag(d);
  tokens.push({ regex: copyRegex(A2, { addG: true, addY: hasNativeY, isInternalOnly: true }), handler: e2, scope: u2.scope || defaultScope, flag: u2.flag, reparse: u2.reparse, leadChar: u2.leadChar }), XRegExp.cache.flush("patterns");
}, XRegExp.cache = (A2, e2) => (regexCache[A2] || (regexCache[A2] = {}), regexCache[A2][e2] || (regexCache[A2][e2] = XRegExp(A2, e2))), XRegExp.cache.flush = (A2) => {
  "patterns" === A2 ? patternCache = {} : regexCache = {};
}, XRegExp.escape = (A2) => String(nullThrows(A2)).replace(/[\\\[\]{}()*+?.^$|]/g, "\\$&").replace(/[\s#\-,]/g, (A3) => "\\u" + pad4(hex(A3.charCodeAt(0)))), XRegExp.exec = (A2, e2, u2, t) => {
  let d = "g";
  let n = false, r;
  (a2 = hasNativeY && !!(t || e2.sticky && false !== t)) ? d += "y" : t && (n = true, d += "FakeY"), e2[REGEX_DATA] = e2[REGEX_DATA] || {};
  var a2 = e2[REGEX_DATA][d] || (e2[REGEX_DATA][d] = copyRegex(e2, { addG: true, addY: a2, source: n ? e2.source + "|()" : void 0, removeY: false === t, isInternalOnly: true }));
  return a2.lastIndex = u2 = u2 || 0, r = fixed.exec.call(a2, A2), n && r && "" === r.pop() && (r = null), e2.global && (e2.lastIndex = r ? a2.lastIndex : 0), r;
}, XRegExp.forEach = (A2, e2, u2) => {
  let t = 0, d = -1;
  for (var n; n = XRegExp.exec(A2, e2, t); )
    u2(n, ++d, A2, e2), t = n.index + (n[0].length || 1);
}, XRegExp.globalize = (A2) => copyRegex(A2, { addG: true }), XRegExp.install = (A2) => {
  A2 = prepareOptions(A2), !features.astral && A2.astral && setAstral(true), !features.namespacing && A2.namespacing && setNamespacing(true);
}, XRegExp.isInstalled = (A2) => !!features[A2], XRegExp.isRegExp = (A2) => "[object RegExp]" === Object.prototype.toString.call(A2), XRegExp.match = (A2, e2, u2) => {
  var t = e2.global && "one" !== u2 || "all" === u2, d = (t ? "g" : "") + (e2.sticky ? "y" : "") || "noGY", d = (e2[REGEX_DATA] = e2[REGEX_DATA] || {}, e2[REGEX_DATA][d] || (e2[REGEX_DATA][d] = copyRegex(e2, { addG: !!t, removeG: "one" === u2, isInternalOnly: true }))), A2 = String(nullThrows(A2)).match(d);
  return e2.global && (e2.lastIndex = "one" === u2 && A2 ? A2.index + A2[0].length : 0), t ? A2 || [] : A2 && A2[0];
}, XRegExp.matchChain = (A2, a2) => function A3(e2, u2) {
  const t = a2[u2].regex ? a2[u2] : { regex: a2[u2] }, d = [];
  function n(A4) {
    if (t.backref) {
      var e3 = "Backreference to undefined group: " + t.backref, u3 = isNaN(t.backref);
      if (u3 && XRegExp.isInstalled("namespacing")) {
        if (!(A4.groups && t.backref in A4.groups))
          throw new ReferenceError(e3);
      } else if (!A4.hasOwnProperty(t.backref))
        throw new ReferenceError(e3);
      e3 = (u3 && XRegExp.isInstalled("namespacing") ? A4.groups : A4)[t.backref];
      d.push(e3 || "");
    } else
      d.push(A4[0]);
  }
  for (const r of e2)
    XRegExp.forEach(r, t.regex, n);
  return u2 !== a2.length - 1 && d.length ? A3(d, u2 + 1) : d;
}([A2], 0), XRegExp.replace = (A2, e2, u2, t) => {
  var d = XRegExp.isRegExp(e2), n = e2.global && "one" !== t || "all" === t, r = (n ? "g" : "") + (e2.sticky ? "y" : "") || "noGY";
  let a2 = e2;
  d ? (e2[REGEX_DATA] = e2[REGEX_DATA] || {}, a2 = e2[REGEX_DATA][r] || (e2[REGEX_DATA][r] = copyRegex(e2, { addG: !!n, removeG: "one" === t, isInternalOnly: true }))) : n && (a2 = new RegExp(XRegExp.escape(String(e2)), "g"));
  r = fixed.replace.call(nullThrows(A2), a2, u2);
  return d && e2.global && (e2.lastIndex = 0), r;
}, XRegExp.replaceEach = (A2, e2) => {
  for (const u2 of e2)
    A2 = XRegExp.replace(A2, u2[0], u2[1], u2[2]);
  return A2;
}, XRegExp.split = (A2, e2, u2) => fixed.split.call(nullThrows(A2), e2, u2), XRegExp.test = (A2, e2, u2, t) => !!XRegExp.exec(A2, e2, u2, t), XRegExp.uninstall = (A2) => {
  A2 = prepareOptions(A2), features.astral && A2.astral && setAstral(false), features.namespacing && A2.namespacing && setNamespacing(false);
}, XRegExp.union = (A2, e2, u2) => {
  u2 = (u2 = u2 || {}).conjunction || "or";
  let d = 0, n, r;
  function t(A3, e3, u3) {
    var t2 = r[d - n];
    if (e3) {
      if (++d, t2)
        return `(?<${t2}>`;
    } else if (u3)
      return "\\" + (+u3 + n);
    return A3;
  }
  if (!isType(A2, "Array") || !A2.length)
    throw new TypeError("Must provide a nonempty array of patterns to merge");
  var a2 = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, o = [];
  for (const c of A2)
    XRegExp.isRegExp(c) ? (n = d, r = c[REGEX_DATA] && c[REGEX_DATA].captureNames || [], o.push(XRegExp(c.source).source.replace(a2, t))) : o.push(XRegExp.escape(c));
  return XRegExp(o.join("none" === u2 ? "" : "|"), e2);
}, fixed.exec = function(A2) {
  var e2, u2 = this.lastIndex;
  const t = RegExp.prototype.exec.apply(this, arguments);
  if (t) {
    if (!correctExecNpcg && 1 < t.length && t.includes("") && (e2 = copyRegex(this, { removeG: true, isInternalOnly: true }), String(A2).slice(t.index).replace(e2, (...e3) => {
      var u3 = e3.length;
      for (let A3 = 1; A3 < u3 - 2; ++A3)
        void 0 === e3[A3] && (t[A3] = void 0);
    })), this[REGEX_DATA] && this[REGEX_DATA].captureNames) {
      let e3 = t;
      XRegExp.isInstalled("namespacing") && (t.groups = /* @__PURE__ */ Object.create(null), e3 = t.groups);
      for (let A3 = 1; A3 < t.length; ++A3) {
        var d = this[REGEX_DATA].captureNames[A3 - 1];
        d && (e3[d] = t[A3]);
      }
    } else
      !t.groups && XRegExp.isInstalled("namespacing") && (t.groups = void 0);
    this.global && !t[0].length && this.lastIndex > t.index && (this.lastIndex = t.index);
  }
  return this.global || (this.lastIndex = u2), t;
}, fixed.test = function(A2) {
  return !!fixed.exec.call(this, A2);
}, fixed.match = function(A2) {
  var e2;
  if (XRegExp.isRegExp(A2)) {
    if (A2.global)
      return e2 = String.prototype.match.apply(this, arguments), A2.lastIndex = 0, e2;
  } else
    A2 = new RegExp(A2);
  return fixed.exec.call(A2, nullThrows(this));
}, fixed.replace = function(A2, e2) {
  var u2 = XRegExp.isRegExp(A2);
  let t, r, d;
  return u2 ? (A2[REGEX_DATA] && ({ captureNames: r } = A2[REGEX_DATA]), t = A2.lastIndex) : A2 += "", d = isType(e2, "Function") ? String(this).replace(A2, (...u3) => {
    if (r) {
      let e3;
      XRegExp.isInstalled("namespacing") ? (e3 = /* @__PURE__ */ Object.create(null), u3.push(e3)) : (u3[0] = new String(u3[0]), [e3] = u3);
      for (let A3 = 0; A3 < r.length; ++A3)
        r[A3] && (e3[r[A3]] = u3[A3 + 1]);
    }
    return e2(...u3);
  }) : String(nullThrows(this)).replace(A2, (...n) => {
    return String(e2).replace(replacementToken, function(A3, e3, u3, t2) {
      e3 = e3 || u3;
      u3 = isType(n[n.length - 1], "Object") ? 4 : 3, u3 = n.length - u3;
      if (e3) {
        if (/^\d+$/.test(e3)) {
          var d2 = +e3;
          if (d2 <= u3)
            return n[d2] || "";
        }
        d2 = r ? r.indexOf(e3) : -1;
        if (d2 < 0)
          throw new SyntaxError("Backreference to undefined group " + A3);
        return n[d2 + 1] || "";
      }
      if ("" === t2 || " " === t2)
        throw new SyntaxError("Invalid token " + A3);
      if ("&" === t2 || 0 == +t2)
        return n[0];
      if ("$" === t2)
        return "$";
      if ("`" === t2)
        return n[n.length - 1].slice(0, n[n.length - 2]);
      if ("'" === t2)
        return n[n.length - 1].slice(n[n.length - 2] + n[0].length);
      if (t2 = +t2, isNaN(t2))
        throw new SyntaxError("Invalid token " + A3);
      if (u3 < t2)
        throw new SyntaxError("Backreference to undefined group " + A3);
      return n[t2] || "";
    });
  }), u2 && (A2.global ? A2.lastIndex = 0 : A2.lastIndex = t), d;
}, fixed.split = function(A2, e2) {
  if (!XRegExp.isRegExp(A2))
    return String.prototype.split.apply(this, arguments);
  const u2 = String(this), t = [];
  var d = A2.lastIndex;
  let n = 0, r;
  return e2 = (void 0 === e2 ? -1 : e2) >>> 0, XRegExp.forEach(u2, A2, (A3) => {
    A3.index + A3[0].length > n && (t.push(u2.slice(n, A3.index)), 1 < A3.length && A3.index < u2.length && Array.prototype.push.apply(t, A3.slice(1)), r = A3[0].length, n = A3.index + r);
  }), n === u2.length ? A2.test("") && !r || t.push("") : t.push(u2.slice(n)), A2.lastIndex = d, t.length > e2 ? t.slice(0, e2) : t;
}, XRegExp.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, (A2, e2) => {
  if ("B" === A2[1] && e2 === defaultScope)
    return A2[0];
  throw new SyntaxError("Invalid escape " + A2[0]);
}, { scope: "all", leadChar: "\\" }), XRegExp.addToken(/\\u{([\dA-Fa-f]+)}/, (A2, e2, u2) => {
  var t = dec(A2[1]);
  if (1114111 < t)
    throw new SyntaxError("Invalid Unicode code point " + A2[0]);
  if (t <= 65535)
    return "\\u" + pad4(hex(t));
  if (hasNativeU && u2.includes("u"))
    return A2[0];
  throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
}, { scope: "all", leadChar: "\\" }), XRegExp.addToken(/\(\?#[^)]*\)/, getContextualTokenSeparator, { leadChar: "(" }), XRegExp.addToken(/\s+|#[^\n]*\n?/, getContextualTokenSeparator, { flag: "x" }), hasNativeS || XRegExp.addToken(/\./, () => "[\\s\\S]", { flag: "s", leadChar: "." }), XRegExp.addToken(/\\k<([^>]+)>/, function(A2) {
  var e2 = isNaN(A2[1]) ? this.captureNames.indexOf(A2[1]) + 1 : +A2[1], u2 = A2.index + A2[0].length;
  if (!e2 || e2 > this.captureNames.length)
    throw new SyntaxError("Backreference to undefined group " + A2[0]);
  return "\\" + e2 + (u2 === A2.input.length || isNaN(A2.input[u2]) ? "" : "(?:)");
}, { leadChar: "\\" }), XRegExp.addToken(/\\(\d+)/, function(A2, e2) {
  if (e2 === defaultScope && /^[1-9]/.test(A2[1]) && +A2[1] <= this.captureNames.length || "0" === A2[1])
    return A2[0];
  throw new SyntaxError("Cannot use octal escape or backreference to undefined group " + A2[0]);
}, { scope: "all", leadChar: "\\" }), XRegExp.addToken(/\(\?P?<([\p{ID_Start}$_][\p{ID_Continue}$_\u200C\u200D]*)>/u, function(A2) {
  if (!XRegExp.isInstalled("namespacing") && ("length" === A2[1] || "__proto__" === A2[1]))
    throw new SyntaxError("Cannot use reserved word as capture name " + A2[0]);
  if (this.captureNames.includes(A2[1]))
    throw new SyntaxError("Cannot use same name for multiple groups " + A2[0]);
  return this.captureNames.push(A2[1]), this.hasNamedCapture = true, "(";
}, { leadChar: "(" }), XRegExp.addToken(/\((?!\?)/, function(A2, e2, u2) {
  return u2.includes("n") ? "(?:" : (this.captureNames.push(null), "(");
}, { optionalFlags: "n", leadChar: "(" });
var build = (p) => {
  const h2 = "xregexp", w = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, C = p.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, w], "g", { conjunction: "or" });
  function m(A2, e2) {
    e2 = e2 ? "x" : "";
    return p.isRegExp(A2) ? A2[h2] && A2[h2].captureNames ? A2 : p(A2.source, e2) : p(A2, e2);
  }
  function t(A2) {
    return A2 instanceof RegExp ? A2 : p.escape(A2);
  }
  function d(A2, e2, u2) {
    return A2["subpattern" + u2] = e2, A2;
  }
  function n(A2, e2, u2) {
    return A2 + (e2 < u2.length - 1 ? `{{subpattern${e2}}}` : "");
  }
  p.tag = (u2) => (A2, ...e2) => {
    e2 = e2.map(t).reduce(d, {}), A2 = A2.raw.map(n).join("");
    return p.build(A2, e2, u2);
  }, p.build = (A2, e2, u2) => {
    var t2, d2, n2, r, a2 = (u2 = u2 || "").includes("x"), o = /^\(\?([\w$]+)\)/.exec(A2);
    o && (u2 = p._clipDuplicates(u2 + o[1]));
    const c = {};
    for (const g in e2)
      e2.hasOwnProperty(g) && (t2 = m(e2[g], a2), c[g] = { pattern: (d2 = t2.source, r = n2 = void 0, r = /\$(?:\(\?:\))*$/, (n2 = /^(?:\(\?:\))*\^/).test(d2) && r.test(d2) && r.test(d2.replace(/\\[\s\S]/g, "")) ? d2.replace(n2, "").replace(r, "") : d2), names: t2[h2].captureNames || [] });
    o = m(A2, a2);
    let i = 0, f2, s = 0;
    const l = [0], B = o[h2].captureNames || [];
    A2 = o.source.replace(C, (A3, e3, u3, t3, d3) => {
      const n3 = e3 || u3;
      let r2, a3, o2;
      if (n3) {
        if (!c.hasOwnProperty(n3))
          throw new ReferenceError("Undefined property " + A3);
        a3 = e3 ? (r2 = B[s], l[++s] = ++i, `(?<${r2 || n3}>`) : "(?:", f2 = i;
        u3 = c[n3].pattern.replace(w, (A4, e4, u4) => {
          if (e4) {
            if (r2 = c[n3].names[i - f2], ++i, r2)
              return `(?<${r2}>`;
          } else if (u4)
            return o2 = +u4 - 1, c[n3].names[o2] ? `\\k<${c[n3].names[o2]}>` : "\\" + (+u4 + f2);
          return A4;
        });
        return "" + a3 + u3 + ")";
      }
      if (t3) {
        if (r2 = B[s], l[++s] = ++i, r2)
          return `(?<${r2}>`;
      } else if (d3)
        return o2 = +d3 - 1, B[o2] ? `\\k<${B[o2]}>` : "\\" + l[+d3];
      return A3;
    });
    return p(A2, u2);
  };
}, matchRecursive = (E2) => {
  function F2(A2, e2, u2, t) {
    return { name: A2, value: e2, start: u2, end: t };
  }
  E2.matchRecursive = (A2, e2, u2, t, d) => {
    d = d || {};
    var n = (t = t || "").includes("g"), r = t.includes("y"), a2 = t.replace(/y/g, "");
    e2 = E2(e2, a2), u2 = E2(u2, a2);
    let o, c = d["escapeChar"];
    if (c) {
      if (1 < c.length)
        throw new Error("Cannot use more than one escape character");
      c = E2.escape(c), o = new RegExp(`(?:${c}[\\S\\s]|(?:(?!${E2.union([e2, u2], "", { conjunction: "or" }).source})[^${c}])+)+`, t.replace(E2._hasNativeFlag("s") ? /[^imsu]/g : /[^imu]/g, ""));
    }
    let i = 0, f2 = 0, s = 0, l = 0, B, g, p, h2;
    for (var w = d.valueNames, C = []; ; ) {
      if (c && (s += (E2.exec(A2, o, s, "sticky") || [""])[0].length), p = E2.exec(A2, e2, s), h2 = E2.exec(A2, u2, s), p && h2 && (p.index <= h2.index ? h2 = null : p = null), p || h2)
        f2 = (p || h2).index, s = f2 + (p || h2)[0].length;
      else if (!i)
        break;
      if (r && !i && f2 > l)
        break;
      if (p)
        i || (B = f2, g = s), i += 1;
      else if (h2 && i) {
        if (!--i && (w ? (w[0] && B > l && C.push(F2(w[0], A2.slice(l, B), l, B)), w[1] && C.push(F2(w[1], A2.slice(B, g), B, g)), w[2] && C.push(F2(w[2], A2.slice(g, f2), g, f2)), w[3] && C.push(F2(w[3], A2.slice(f2, s), f2, s))) : C.push(A2.slice(g, f2)), l = s, !n))
          break;
      } else {
        var m, b, Q = d.unbalanced || "error";
        if ("skip" !== Q && "skip-lazy" !== Q)
          throw "error" === Q ? (m = h2 ? "right" : "left", b = h2 ? f2 : B, new Error(`Unbalanced ${m} delimiter found in string at position ` + b)) : new Error("Unsupported value for unbalanced: " + Q);
        h2 ? h2 = null : (s = "skip" === Q ? (m = E2.exec(A2, e2, B, "sticky")[0].length, B + (m || 1)) : B + 1, i = 0);
      }
      f2 === s && (s += 1);
    }
    return n && 0 < C.length && !r && w && w[0] && A2.length > l && C.push(F2(w[0], A2.slice(l), l, A2.length)), C;
  };
}, unicodeBase = (d) => {
  const s = {}, l = {}, u2 = d._dec, n = d._hex, r = d._pad4;
  function B(A2) {
    return A2.replace(/[- _]+/g, "").toLowerCase();
  }
  function a2(A2) {
    var e2 = /^\\[xu](.+)/.exec(A2);
    return e2 ? u2(e2[1]) : A2.charCodeAt("\\" === A2[0] ? 1 : 0);
  }
  function g(A2) {
    return s[A2]["b!"] || (s[A2]["b!"] = function(A3) {
      let u3 = "", t = -1;
      return d.forEach(A3, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, (A4) => {
        var e2 = a2(A4[1]);
        e2 > t + 1 && (u3 += "\\u" + r(n(t + 1)), e2 > t + 2) && (u3 += "-\\u" + r(n(e2 - 1))), t = a2(A4[2] || A4[1]);
      }), t < 65535 && (u3 += "\\u" + r(n(t + 1)), t < 65534) && (u3 += "-\\uFFFF"), u3;
    }(s[A2].bmp));
  }
  function p(A2, e2) {
    var u3 = e2 ? "a!" : "a=";
    return s[A2][u3] || (s[A2][u3] = function(A3, e3) {
      A3 = s[A3];
      let u4 = "";
      return A3.bmp && !A3.isBmpLast && (u4 = `[${A3.bmp}]` + (A3.astral ? "|" : "")), A3.astral && (u4 += A3.astral), A3.isBmpLast && A3.bmp && (u4 += `${A3.astral ? "|" : ""}[${A3.bmp}]`), e3 ? `(?:(?!${u4})(?:[\uFFFD-\uFFFD][\uFFFD-\uFFFD]|[\0-\uFFFF]))` : `(?:${u4})`;
    }(A2, e2));
  }
  d.addToken(/\\([pP])(?:{(\^?)(?:(\w+)=)?([^}]*)}|([A-Za-z]))/, (A2, e2, u3) => {
    var t = "Unknown Unicode token ", [A2, d2, n2, r2, a3, o] = A2;
    let c = "P" === d2 || !!n2;
    u3 = u3.includes("A");
    let i = B(o || a3), f2 = s[i];
    if ("P" === d2 && n2)
      throw new SyntaxError("Invalid double negation " + A2);
    if (!s.hasOwnProperty(i))
      throw new SyntaxError(t + A2);
    if (r2 && (!l[r2] || !l[r2][i]))
      throw new SyntaxError(t + A2);
    if (f2.inverseOf) {
      if (i = B(f2.inverseOf), !s.hasOwnProperty(i))
        throw new ReferenceError("Unicode token missing data " + A2 + " -> " + f2.inverseOf);
      f2 = s[i], c = !c;
    }
    if (!f2.bmp && !u3)
      throw new SyntaxError("Astral mode required for Unicode token " + A2);
    if (u3) {
      if ("class" === e2)
        throw new SyntaxError("Astral mode does not support Unicode tokens within character classes");
      return p(i, c);
    }
    return "class" === e2 ? c ? g(i) : f2.bmp : (c ? "[^" : "[") + f2.bmp + "]";
  }, { scope: "all", optionalFlags: "A", leadChar: "\\" }), d.addUnicodeData = (A2, e2) => {
    e2 && (l[e2] = {});
    for (const t of A2) {
      if (!t.name)
        throw new Error("Unicode token requires name");
      if (!(t.inverseOf || t.bmp || t.astral))
        throw new Error("Unicode token has no character data " + t.name);
      var u3 = B(t.name);
      s[u3] = t, e2 && (l[e2][u3] = true), t.alias && (u3 = B(t.alias), s[u3] = t, e2) && (l[e2][u3] = true);
    }
    d.cache.flush("patterns");
  }, d._getUnicodeProperty = (A2) => {
    A2 = B(A2);
    return s[A2];
  };
}, categories = [{ name: "C", alias: "Other", isBmpLast: true, bmp: "\0-\x7F-\x9F\xAD\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EE\u05F5-\u0605\u061C\u06DD\u070E\u070F\u074B\u074C\u07B2-\u07BF\u07FB\u07FC\u082E\u082F\u083F\u085C\u085D\u085F\u086B-\u086F\u088F-\u0897\u08E2\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A77-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C0D\u0C11\u0C29\u0C3A\u0C3B\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C64\u0C65\u0C70-\u0C76\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDC\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u1716-\u171E\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u180E\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ACF-\u1AFF\u1B4D-\u1B4F\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1C8F\u1CBB\u1CBC\u1CC8-\u1CCF\u1CFB-\u1CFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u200B-\u200F\u202A-\u202E\u2060-\u206F\u2072\u2073\u208F\u209D-\u209F\u20C1-\u20CF\u20F1-\u20FF\u218C-\u218F\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u3130\u318F\u31E4-\u31EF\u321F\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA82D-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB6C-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC3-\uFBD2\uFD90\uFD91\uFDC8-\uFDCE\uFDD0-\uFDEF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD-\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFFB\uFFFE\uFFFF", astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCBD\uDCC3-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]" }, { name: "Cc", alias: "Control", bmp: "\0-\x7F-\x9F" }, { name: "Cf", alias: "Format", bmp: "\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB", astral: "\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]" }, { name: "Cn", alias: "Unassigned", bmp: "\u0378\u0379\u0380-\u0383\u038B\u038D\u03A2\u0530\u0557\u0558\u058B\u058C\u0590\u05C8-\u05CF\u05EB-\u05EE\u05F5-\u05FF\u070E\u074B\u074C\u07B2-\u07BF\u07FB\u07FC\u082E\u082F\u083F\u085C\u085D\u085F\u086B-\u086F\u088F\u0892-\u0897\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A77-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF2-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BFB-\u0BFF\u0C0D\u0C11\u0C29\u0C3A\u0C3B\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B\u0C5C\u0C5E\u0C5F\u0C64\u0C65\u0C70-\u0C76\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDC\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D50-\u0D53\u0D64\u0D65\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF5-\u0E00\u0E3B-\u0E3E\u0E5C-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F48\u0F6D-\u0F70\u0F98\u0FBD\u0FCD\u0FDB-\u0FFF\u10C6\u10C8-\u10CC\u10CE\u10CF\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u137D-\u137F\u139A-\u139F\u13F6\u13F7\u13FE\u13FF\u169D-\u169F\u16F9-\u16FF\u1716-\u171E\u1737-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17DE\u17DF\u17EA-\u17EF\u17FA-\u17FF\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u193F\u1941-\u1943\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19DD\u1A1C\u1A1D\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1A9F\u1AAE\u1AAF\u1ACF-\u1AFF\u1B4D-\u1B4F\u1B7F\u1BF4-\u1BFB\u1C38-\u1C3A\u1C4A-\u1C4C\u1C89-\u1C8F\u1CBB\u1CBC\u1CC8-\u1CCF\u1CFB-\u1CFF\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FC5\u1FD4\u1FD5\u1FDC\u1FF0\u1FF1\u1FF5\u1FFF\u2065\u2072\u2073\u208F\u209D-\u209F\u20C1-\u20CF\u20F1-\u20FF\u218C-\u218F\u2427-\u243F\u244B-\u245F\u2B74\u2B75\u2B96\u2CF4-\u2CF8\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D71-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E5E-\u2E7F\u2E9A\u2EF4-\u2EFF\u2FD6-\u2FEF\u2FFC-\u2FFF\u3040\u3097\u3098\u3100-\u3104\u3130\u318F\u31E4-\u31EF\u321F\uA48D-\uA48F\uA4C7-\uA4CF\uA62C-\uA63F\uA6F8-\uA6FF\uA7CB-\uA7CF\uA7D2\uA7D4\uA7DA-\uA7F1\uA82D-\uA82F\uA83A-\uA83F\uA878-\uA87F\uA8C6-\uA8CD\uA8DA-\uA8DF\uA954-\uA95E\uA97D-\uA97F\uA9CE\uA9DA-\uA9DD\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A\uAA5B\uAAC3-\uAADA\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB6C-\uAB6F\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBC3-\uFBD2\uFD90\uFD91\uFDC8-\uFDCE\uFDD0-\uFDEF\uFE1A-\uFE1F\uFE53\uFE67\uFE6C-\uFE6F\uFE75\uFEFD\uFEFE\uFF00\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFDF\uFFE7\uFFEF-\uFFF8\uFFFE\uFFFF", astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCC3-\uDCCC\uDCCE\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F\uDC39-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]" }, { name: "Co", alias: "Private_Use", bmp: "\uE000-\uF8FF", astral: "[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]" }, { name: "Cs", alias: "Surrogate", bmp: "\uD800-\uDFFF" }, { name: "L", alias: "Letter", bmp: "A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "LC", alias: "Cased_Letter", bmp: "A-Za-z\xB5\xC0-\xD6\xD8-\xF6\xF8-\u01BA\u01BC-\u01BF\u01C4-\u0293\u0295-\u02AF\u0370-\u0373\u0376\u0377\u037B-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0560-\u0588\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FD-\u10FF\u13A0-\u13F5\u13F8-\u13FD\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2134\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C7B\u2C7E-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA640-\uA66D\uA680-\uA69B\uA722-\uA76F\uA771-\uA787\uA78B-\uA78E\uA790-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F5\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF21-\uFF3A\uFF41-\uFF5A", astral: "\uD801[\uDC00-\uDC4F\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD806[\uDCA0-\uDCDF]|\uD81B[\uDE40-\uDE7F]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD00-\uDD43]" }, { name: "Ll", alias: "Lowercase_Letter", bmp: "a-z\xB5\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7FA\uAB30-\uAB5A\uAB60-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A", astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]" }, { name: "Lm", alias: "Modifier_Letter", bmp: "\u02B0-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0374\u037A\u0559\u0640\u06E5\u06E6\u07F4\u07F5\u07FA\u081A\u0824\u0828\u08C9\u0971\u0E46\u0EC6\u10FC\u17D7\u1843\u1AA7\u1C78-\u1C7D\u1D2C-\u1D6A\u1D78\u1D9B-\u1DBF\u2071\u207F\u2090-\u209C\u2C7C\u2C7D\u2D6F\u2E2F\u3005\u3031-\u3035\u303B\u309D\u309E\u30FC-\u30FE\uA015\uA4F8-\uA4FD\uA60C\uA67F\uA69C\uA69D\uA717-\uA71F\uA770\uA788\uA7F2-\uA7F4\uA7F8\uA7F9\uA9CF\uA9E6\uAA70\uAADD\uAAF3\uAAF4\uAB5C-\uAB5F\uAB69\uFF70\uFF9E\uFF9F", astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD838[\uDD37-\uDD3D]|\u{1E94B}" }, { name: "Lo", alias: "Other_Letter", bmp: "\xAA\xBA\u01BB\u01C0-\u01C3\u0294\u05D0-\u05EA\u05EF-\u05F2\u0620-\u063F\u0641-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u0800-\u0815\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C8\u0904-\u0939\u093D\u0950\u0958-\u0961\u0972-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E45\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1100-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17DC\u1820-\u1842\u1844-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C77\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u2135-\u2138\u2D30-\u2D67\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3006\u303C\u3041-\u3096\u309F\u30A1-\u30FA\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA014\uA016-\uA48C\uA4D0-\uA4F7\uA500-\uA60B\uA610-\uA61F\uA62A\uA62B\uA66E\uA6A0-\uA6E5\uA78F\uA7F7\uA7FB-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9E0-\uA9E4\uA9E7-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA6F\uAA71-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB\uAADC\uAAE0-\uAAEA\uAAF2\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF66-\uFF6F\uFF71-\uFF9D\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF4A\uDF50]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\u{1DF0A}|\uD838[\uDD00-\uDD2C\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Lt", alias: "Titlecase_Letter", bmp: "\u01C5\u01C8\u01CB\u01F2\u1F88-\u1F8F\u1F98-\u1F9F\u1FA8-\u1FAF\u1FBC\u1FCC\u1FFC" }, { name: "Lu", alias: "Uppercase_Letter", bmp: "A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7D0\uA7D6\uA7D8\uA7F5\uFF21-\uFF3A", astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]" }, { name: "M", alias: "Mark", bmp: "\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F", astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]" }, { name: "Mc", alias: "Spacing_Mark", bmp: "\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BE-\u09C0\u09C7\u09C8\u09CB\u09CC\u09D7\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B3E\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0B57\u0BBE\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD7\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0-\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0CD5\u0CD6\u0D02\u0D03\u0D3E-\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D57\u0D82\u0D83\u0DCF-\u0DD1\u0DD8-\u0DDF\u0DF2\u0DF3\u0F3E\u0F3F\u0F7F\u102B\u102C\u1031\u1038\u103B\u103C\u1056\u1057\u1062-\u1064\u1067-\u106D\u1083\u1084\u1087-\u108C\u108F\u109A-\u109C\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A61\u1A63\u1A64\u1A6D-\u1A72\u1B04\u1B35\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\u302E\u302F\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAA7B\uAA7D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC", astral: "\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD30-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]" }, { name: "Me", alias: "Enclosing_Mark", bmp: "\u0488\u0489\u1ABE\u20DD-\u20E0\u20E2-\u20E4\uA670-\uA672" }, { name: "Mn", alias: "Nonspacing_Mark", bmp: "\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09C1-\u09C4\u09CD\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3F\u0B41-\u0B44\u0B4D\u0B55\u0B56\u0B62\u0B63\u0B82\u0BC0\u0BCD\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC6\u0CCC\u0CCD\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D41-\u0D44\u0D4D\u0D62\u0D63\u0D81\u0DCA\u0DD2-\u0DD4\u0DD6\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B03\u1B34\u1B36-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302D\u3099\u309A\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F", astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]" }, { name: "N", alias: "Number", bmp: "0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19", astral: "\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]" }, { name: "Nd", alias: "Decimal_Number", bmp: "0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19", astral: "\uD801[\uDCA0-\uDCA9]|\uD803[\uDD30-\uDD39]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9\uDD50-\uDD59]|\uD807[\uDC50-\uDC59\uDD50-\uDD59\uDDA0-\uDDA9]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDD50-\uDD59]|\uD83E[\uDFF0-\uDFF9]" }, { name: "Nl", alias: "Letter_Number", bmp: "\u16EE-\u16F0\u2160-\u2182\u2185-\u2188\u3007\u3021-\u3029\u3038-\u303A\uA6E6-\uA6EF", astral: "\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]" }, { name: "No", alias: "Other_Number", bmp: "\xB2\xB3\xB9\xBC-\xBE\u09F4-\u09F9\u0B72-\u0B77\u0BF0-\u0BF2\u0C78-\u0C7E\u0D58-\u0D5E\u0D70-\u0D78\u0F2A-\u0F33\u1369-\u137C\u17F0-\u17F9\u19DA\u2070\u2074-\u2079\u2080-\u2089\u2150-\u215F\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA830-\uA835", astral: "\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C\uDFC0-\uDFD4]|\uD81A[\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD83A[\uDCC7-\uDCCF]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]" }, { name: "P", alias: "Punctuation", bmp: "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65", astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\u{1056F}|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\u{1BC9F}|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]" }, { name: "Pc", alias: "Connector_Punctuation", bmp: "_\u203F\u2040\u2054\uFE33\uFE34\uFE4D-\uFE4F\uFF3F" }, { name: "Pd", alias: "Dash_Punctuation", bmp: "\\-\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u2E5D\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D", astral: "\u{10EAD}" }, { name: "Pe", alias: "Close_Punctuation", bmp: "\\)\\]\\}\u0F3B\u0F3D\u169C\u2046\u207E\u208E\u2309\u230B\u232A\u2769\u276B\u276D\u276F\u2771\u2773\u2775\u27C6\u27E7\u27E9\u27EB\u27ED\u27EF\u2984\u2986\u2988\u298A\u298C\u298E\u2990\u2992\u2994\u2996\u2998\u29D9\u29DB\u29FD\u2E23\u2E25\u2E27\u2E29\u2E56\u2E58\u2E5A\u2E5C\u3009\u300B\u300D\u300F\u3011\u3015\u3017\u3019\u301B\u301E\u301F\uFD3E\uFE18\uFE36\uFE38\uFE3A\uFE3C\uFE3E\uFE40\uFE42\uFE44\uFE48\uFE5A\uFE5C\uFE5E\uFF09\uFF3D\uFF5D\uFF60\uFF63" }, { name: "Pf", alias: "Final_Punctuation", bmp: "\xBB\u2019\u201D\u203A\u2E03\u2E05\u2E0A\u2E0D\u2E1D\u2E21" }, { name: "Pi", alias: "Initial_Punctuation", bmp: "\xAB\u2018\u201B\u201C\u201F\u2039\u2E02\u2E04\u2E09\u2E0C\u2E1C\u2E20" }, { name: "Po", alias: "Other_Punctuation", bmp: "!-#%-'\\*,\\.\\/:;\\?@\\\xA1\xA7\xB6\xB7\xBF\u037E\u0387\u055A-\u055F\u0589\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u166E\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u1805\u1807-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2016\u2017\u2020-\u2027\u2030-\u2038\u203B-\u203E\u2041-\u2043\u2047-\u2051\u2053\u2055-\u205E\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00\u2E01\u2E06-\u2E08\u2E0B\u2E0E-\u2E16\u2E18\u2E19\u2E1B\u2E1E\u2E1F\u2E2A-\u2E2E\u2E30-\u2E39\u2E3C-\u2E3F\u2E41\u2E43-\u2E4F\u2E52-\u2E54\u3001-\u3003\u303D\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFE10-\uFE16\uFE19\uFE30\uFE45\uFE46\uFE49-\uFE4C\uFE50-\uFE52\uFE54-\uFE57\uFE5F-\uFE61\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF07\uFF0A\uFF0C\uFF0E\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3C\uFF61\uFF64\uFF65", astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\u{1056F}|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\u{1BC9F}|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]" }, { name: "Ps", alias: "Open_Punctuation", bmp: "\\(\\[\\{\u0F3A\u0F3C\u169B\u201A\u201E\u2045\u207D\u208D\u2308\u230A\u2329\u2768\u276A\u276C\u276E\u2770\u2772\u2774\u27C5\u27E6\u27E8\u27EA\u27EC\u27EE\u2983\u2985\u2987\u2989\u298B\u298D\u298F\u2991\u2993\u2995\u2997\u29D8\u29DA\u29FC\u2E22\u2E24\u2E26\u2E28\u2E42\u2E55\u2E57\u2E59\u2E5B\u3008\u300A\u300C\u300E\u3010\u3014\u3016\u3018\u301A\u301D\uFD3F\uFE17\uFE35\uFE37\uFE39\uFE3B\uFE3D\uFE3F\uFE41\uFE43\uFE47\uFE59\uFE5B\uFE5D\uFF08\uFF3B\uFF5B\uFF5F\uFF62" }, { name: "S", alias: "Symbol", bmp: "\\$\\+<->\\^`\\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD", astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\u{1173F}|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\u{1BC9C}|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]" }, { name: "Sc", alias: "Currency_Symbol", bmp: "\\$\xA2-\xA5\u058F\u060B\u07FE\u07FF\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20C0\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6", astral: "\uD807[\uDFDD-\uDFE0]|\u{1E2FF}|\u{1ECB0}" }, { name: "Sk", alias: "Modifier_Symbol", bmp: "\\^`\xA8\xAF\xB4\xB8\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u0888\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u309B\u309C\uA700-\uA716\uA720\uA721\uA789\uA78A\uAB5B\uAB6A\uAB6B\uFBB2-\uFBC2\uFF3E\uFF40\uFFE3", astral: "\uD83C[\uDFFB-\uDFFF]" }, { name: "Sm", alias: "Math_Symbol", bmp: "\\+<->\\|~\xAC\xB1\xD7\xF7\u03F6\u0606-\u0608\u2044\u2052\u207A-\u207C\u208A-\u208C\u2118\u2140-\u2144\u214B\u2190-\u2194\u219A\u219B\u21A0\u21A3\u21A6\u21AE\u21CE\u21CF\u21D2\u21D4\u21F4-\u22FF\u2320\u2321\u237C\u239B-\u23B3\u23DC-\u23E1\u25B7\u25C1\u25F8-\u25FF\u266F\u27C0-\u27C4\u27C7-\u27E5\u27F0-\u27FF\u2900-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2AFF\u2B30-\u2B44\u2B47-\u2B4C\uFB29\uFE62\uFE64-\uFE66\uFF0B\uFF1C-\uFF1E\uFF5C\uFF5E\uFFE2\uFFE9-\uFFEC", astral: "\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]" }, { name: "So", alias: "Other_Symbol", bmp: "\xA6\xA9\xAE\xB0\u0482\u058D\u058E\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u09FA\u0B70\u0BF3-\u0BF8\u0BFA\u0C7F\u0D4F\u0D79\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116\u2117\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u214A\u214C\u214D\u214F\u218A\u218B\u2195-\u2199\u219C-\u219F\u21A1\u21A2\u21A4\u21A5\u21A7-\u21AD\u21AF-\u21CD\u21D0\u21D1\u21D3\u21D5-\u21F3\u2300-\u2307\u230C-\u231F\u2322-\u2328\u232B-\u237B\u237D-\u239A\u23B4-\u23DB\u23E2-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u25B6\u25B8-\u25C0\u25C2-\u25F7\u2600-\u266E\u2670-\u2767\u2794-\u27BF\u2800-\u28FF\u2B00-\u2B2F\u2B45\u2B46\u2B4D-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA828-\uA82B\uA836\uA837\uA839\uAA77-\uAA79\uFD40-\uFD4F\uFDCF\uFDFD-\uFDFF\uFFE4\uFFE8\uFFED\uFFEE\uFFFC\uFFFD", astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\u{1173F}|\uD807[\uDFD5-\uDFDC\uDFE1-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\u{1BC9C}|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\u{1E14F}|\uD83B[\uDCAC\uDD2E]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]" }, { name: "Z", alias: "Separator", bmp: " \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000" }, { name: "Zl", alias: "Line_Separator", bmp: "\u2028" }, { name: "Zp", alias: "Paragraph_Separator", bmp: "\u2029" }, { name: "Zs", alias: "Space_Separator", bmp: " \xA0\u1680\u2000-\u200A\u202F\u205F\u3000" }], unicodeCategories = (A2) => {
  if (!A2.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
  A2.addUnicodeData(categories);
}, properties = [{ name: "ASCII", bmp: "\0-\x7F" }, { name: "Alphabetic", bmp: "A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05B0-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0657\u0659-\u065F\u066E-\u06D3\u06D5-\u06DC\u06E1-\u06E8\u06ED-\u06EF\u06FA-\u06FC\u06FF\u0710-\u073F\u074D-\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0817\u081A-\u082C\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u08D4-\u08DF\u08E3-\u08E9\u08F0-\u093B\u093D-\u094C\u094E-\u0950\u0955-\u0963\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD-\u09C4\u09C7\u09C8\u09CB\u09CC\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09F0\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3E-\u0A42\u0A47\u0A48\u0A4B\u0A4C\u0A51\u0A59-\u0A5C\u0A5E\u0A70-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD-\u0AC5\u0AC7-\u0AC9\u0ACB\u0ACC\u0AD0\u0AE0-\u0AE3\u0AF9-\u0AFC\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D-\u0B44\u0B47\u0B48\u0B4B\u0B4C\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0BD0\u0BD7\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4C\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCC\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4C\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E46\u0E4D\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0ECD\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F71-\u0F81\u0F88-\u0F97\u0F99-\u0FBC\u1000-\u1036\u1038\u103B-\u103F\u1050-\u108F\u109A-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1713\u171F-\u1733\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17B3\u17B6-\u17C8\u17D7\u17DC\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u1938\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A1B\u1A20-\u1A5E\u1A61-\u1A74\u1AA7\u1ABF\u1AC0\u1ACC-\u1ACE\u1B00-\u1B33\u1B35-\u1B43\u1B45-\u1B4C\u1B80-\u1BA9\u1BAC-\u1BAF\u1BBA-\u1BE5\u1BE7-\u1BF1\u1C00-\u1C36\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1DE7-\u1DF4\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u24B6-\u24E9\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA674-\uA67B\uA67F-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA805\uA807-\uA827\uA840-\uA873\uA880-\uA8C3\uA8C5\uA8F2-\uA8F7\uA8FB\uA8FD-\uA8FF\uA90A-\uA92A\uA930-\uA952\uA960-\uA97C\uA980-\uA9B2\uA9B4-\uA9BF\uA9CF\uA9E0-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA60-\uAA76\uAA7A-\uAABE\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF5\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC71-\uDC75\uDC82-\uDCB8\uDCC2\uDCD0-\uDCE8\uDD00-\uDD32\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE\uDDCF\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDEB8\uDF00-\uDF1A\uDF1D-\uDF2A\uDF40-\uDF46]|\uD806[\uDC00-\uDC38\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD47\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Any", isBmpLast: true, bmp: "\0-\uFFFF", astral: "[\uD800-\uDBFF][\uDC00-\uDFFF]" }, { name: "Default_Ignorable_Code_Point", bmp: "\xAD\u034F\u061C\u115F\u1160\u17B4\u17B5\u180B-\u180F\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8", astral: "\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB43][\uDC00-\uDFFF]" }, { name: "Lowercase", bmp: "a-z\xAA\xB5\xBA\xDF-\xF6\xF8-\xFF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02B8\u02C0\u02C1\u02E0-\u02E4\u0345\u0371\u0373\u0377\u037A-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0529\u052B\u052D\u052F\u0560-\u0588\u10D0-\u10FA\u10FD-\u10FF\u13F8-\u13FD\u1C80-\u1C88\u1D00-\u1DBF\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u2071\u207F\u2090-\u209C\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2170-\u217F\u2184\u24D0-\u24E9\u2C30-\u2C5F\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7D\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA699\uA69B-\uA69D\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793-\uA795\uA797\uA799\uA79B\uA79D\uA79F\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7AF\uA7B5\uA7B7\uA7B9\uA7BB\uA7BD\uA7BF\uA7C1\uA7C3\uA7C8\uA7CA\uA7D1\uA7D3\uA7D5\uA7D7\uA7D9\uA7F6\uA7F8-\uA7FA\uAB30-\uAB5A\uAB5C-\uAB68\uAB70-\uABBF\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A", astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDF80\uDF83-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]" }, { name: "Noncharacter_Code_Point", bmp: "\uFDD0-\uFDEF\uFFFE\uFFFF", astral: "[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]" }, { name: "Uppercase", bmp: "A-Z\xC0-\xD6\xD8-\xDE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u037F\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0528\u052A\u052C\u052E\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u13A0-\u13F5\u1C90-\u1CBA\u1CBD-\u1CBF\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2160-\u216F\u2183\u24B6-\u24CF\u2C00-\u2C2F\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA698\uA69A\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA796\uA798\uA79A\uA79C\uA79E\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA-\uA7AE\uA7B0-\uA7B4\uA7B6\uA7B8\uA7BA\uA7BC\uA7BE\uA7C0\uA7C2\uA7C4-\uA7C7\uA7C9\uA7D0\uA7D6\uA7D8\uA7F5\uFF21-\uFF3A", astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]" }, { name: "White_Space", bmp: "	-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000" }], unicodeProperties = (A2) => {
  if (!A2.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
  var e2 = properties;
  e2.push({ name: "Assigned", inverseOf: "Cn" }), A2.addUnicodeData(e2);
}, scripts = [{ name: "Adlam", astral: "\uD83A[\uDD00-\uDD4B\uDD50-\uDD59\uDD5E\uDD5F]" }, { name: "Ahom", astral: "\uD805[\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF46]" }, { name: "Anatolian_Hieroglyphs", astral: "\uD811[\uDC00-\uDE46]" }, { name: "Arabic", bmp: "\u0600-\u0604\u0606-\u060B\u060D-\u061A\u061C-\u061E\u0620-\u063F\u0641-\u064A\u0656-\u066F\u0671-\u06DC\u06DE-\u06FF\u0750-\u077F\u0870-\u088E\u0890\u0891\u0898-\u08E1\u08E3-\u08FF\uFB50-\uFBC2\uFBD3-\uFD3D\uFD40-\uFD8F\uFD92-\uFDC7\uFDCF\uFDF0-\uFDFF\uFE70-\uFE74\uFE76-\uFEFC", astral: "\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]" }, { name: "Armenian", bmp: "\u0531-\u0556\u0559-\u058A\u058D-\u058F\uFB13-\uFB17" }, { name: "Avestan", astral: "\uD802[\uDF00-\uDF35\uDF39-\uDF3F]" }, { name: "Balinese", bmp: "\u1B00-\u1B4C\u1B50-\u1B7E" }, { name: "Bamum", bmp: "\uA6A0-\uA6F7", astral: "\uD81A[\uDC00-\uDE38]" }, { name: "Bassa_Vah", astral: "\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]" }, { name: "Batak", bmp: "\u1BC0-\u1BF3\u1BFC-\u1BFF" }, { name: "Bengali", bmp: "\u0980-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09FE" }, { name: "Bhaiksuki", astral: "\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C]" }, { name: "Bopomofo", bmp: "\u02EA\u02EB\u3105-\u312F\u31A0-\u31BF" }, { name: "Brahmi", astral: "\uD804[\uDC00-\uDC4D\uDC52-\uDC75\uDC7F]" }, { name: "Braille", bmp: "\u2800-\u28FF" }, { name: "Buginese", bmp: "\u1A00-\u1A1B\u1A1E\u1A1F" }, { name: "Buhid", bmp: "\u1740-\u1753" }, { name: "Canadian_Aboriginal", bmp: "\u1400-\u167F\u18B0-\u18F5", astral: "\uD806[\uDEB0-\uDEBF]" }, { name: "Carian", astral: "\uD800[\uDEA0-\uDED0]" }, { name: "Caucasian_Albanian", astral: "\uD801[\uDD30-\uDD63\uDD6F]" }, { name: "Chakma", astral: "\uD804[\uDD00-\uDD34\uDD36-\uDD47]" }, { name: "Cham", bmp: "\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA5C-\uAA5F" }, { name: "Cherokee", bmp: "\u13A0-\u13F5\u13F8-\u13FD\uAB70-\uABBF" }, { name: "Chorasmian", astral: "\uD803[\uDFB0-\uDFCB]" }, { name: "Common", bmp: "\0-@\\[-`\\{-\xA9\xAB-\xB9\xBB-\xBF\xD7\xF7\u02B9-\u02DF\u02E5-\u02E9\u02EC-\u02FF\u0374\u037E\u0385\u0387\u0605\u060C\u061B\u061F\u0640\u06DD\u08E2\u0964\u0965\u0E3F\u0FD5-\u0FD8\u10FB\u16EB-\u16ED\u1735\u1736\u1802\u1803\u1805\u1CD3\u1CE1\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5-\u1CF7\u1CFA\u2000-\u200B\u200E-\u2064\u2066-\u2070\u2074-\u207E\u2080-\u208E\u20A0-\u20C0\u2100-\u2125\u2127-\u2129\u212C-\u2131\u2133-\u214D\u214F-\u215F\u2189-\u218B\u2190-\u2426\u2440-\u244A\u2460-\u27FF\u2900-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2E00-\u2E5D\u2FF0-\u2FFB\u3000-\u3004\u3006\u3008-\u3020\u3030-\u3037\u303C-\u303F\u309B\u309C\u30A0\u30FB\u30FC\u3190-\u319F\u31C0-\u31E3\u3220-\u325F\u327F-\u32CF\u32FF\u3358-\u33FF\u4DC0-\u4DFF\uA700-\uA721\uA788-\uA78A\uA830-\uA839\uA92E\uA9CF\uAB5B\uAB6A\uAB6B\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFEFF\uFF01-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFF70\uFF9E\uFF9F\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFF9-\uFFFD", astral: "\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9C\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD82F[\uDCA0-\uDCA3]|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDEE0-\uDEF3\uDF00-\uDF56\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD83B[\uDC71-\uDCB4\uDD01-\uDD3D]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDDAD\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA\uDFF0-\uDFF9]|\uDB40[\uDC01\uDC20-\uDC7F]" }, { name: "Coptic", bmp: "\u03E2-\u03EF\u2C80-\u2CF3\u2CF9-\u2CFF" }, { name: "Cuneiform", astral: "\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]" }, { name: "Cypriot", astral: "\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]" }, { name: "Cypro_Minoan", astral: "\uD80B[\uDF90-\uDFF2]" }, { name: "Cyrillic", bmp: "\u0400-\u0484\u0487-\u052F\u1C80-\u1C88\u1D2B\u1D78\u2DE0-\u2DFF\uA640-\uA69F\uFE2E\uFE2F" }, { name: "Deseret", astral: "\uD801[\uDC00-\uDC4F]" }, { name: "Devanagari", bmp: "\u0900-\u0950\u0955-\u0963\u0966-\u097F\uA8E0-\uA8FF" }, { name: "Dives_Akuru", astral: "\uD806[\uDD00-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD46\uDD50-\uDD59]" }, { name: "Dogra", astral: "\uD806[\uDC00-\uDC3B]" }, { name: "Duployan", astral: "\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]" }, { name: "Egyptian_Hieroglyphs", astral: "\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E\uDC30-\uDC38]" }, { name: "Elbasan", astral: "\uD801[\uDD00-\uDD27]" }, { name: "Elymaic", astral: "\uD803[\uDFE0-\uDFF6]" }, { name: "Ethiopic", bmp: "\u1200-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u137C\u1380-\u1399\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E", astral: "\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]" }, { name: "Georgian", bmp: "\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u10FF\u1C90-\u1CBA\u1CBD-\u1CBF\u2D00-\u2D25\u2D27\u2D2D" }, { name: "Glagolitic", bmp: "\u2C00-\u2C5F", astral: "\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]" }, { name: "Gothic", astral: "\uD800[\uDF30-\uDF4A]" }, { name: "Grantha", astral: "\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]" }, { name: "Greek", bmp: "\u0370-\u0373\u0375-\u0377\u037A-\u037D\u037F\u0384\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03E1\u03F0-\u03FF\u1D26-\u1D2A\u1D5D-\u1D61\u1D66-\u1D6A\u1DBF\u1F00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FC4\u1FC6-\u1FD3\u1FD6-\u1FDB\u1FDD-\u1FEF\u1FF2-\u1FF4\u1FF6-\u1FFE\u2126\uAB65", astral: "\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]" }, { name: "Gujarati", bmp: "\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AF1\u0AF9-\u0AFF" }, { name: "Gunjala_Gondi", astral: "\uD807[\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9]" }, { name: "Gurmukhi", bmp: "\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A76" }, { name: "Han", bmp: "\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFA6D\uFA70-\uFAD9", astral: "\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Hangul", bmp: "\u1100-\u11FF\u302E\u302F\u3131-\u318E\u3200-\u321E\u3260-\u327E\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uFFA0-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC" }, { name: "Hanifi_Rohingya", astral: "\uD803[\uDD00-\uDD27\uDD30-\uDD39]" }, { name: "Hanunoo", bmp: "\u1720-\u1734" }, { name: "Hatran", astral: "\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]" }, { name: "Hebrew", bmp: "\u0591-\u05C7\u05D0-\u05EA\u05EF-\u05F4\uFB1D-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFB4F" }, { name: "Hiragana", bmp: "\u3041-\u3096\u309D-\u309F", astral: "\uD82C[\uDC01-\uDD1F\uDD50-\uDD52]|\u{1F200}" }, { name: "Imperial_Aramaic", astral: "\uD802[\uDC40-\uDC55\uDC57-\uDC5F]" }, { name: "Inherited", bmp: "\u0300-\u036F\u0485\u0486\u064B-\u0655\u0670\u0951-\u0954\u1AB0-\u1ACE\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u200D\u20D0-\u20F0\u302A-\u302D\u3099\u309A\uFE00-\uFE0F\uFE20-\uFE2D", astral: "\uD800[\uDDFD\uDEE0]|\u{1133B}|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uDB40[\uDD00-\uDDEF]" }, { name: "Inscriptional_Pahlavi", astral: "\uD802[\uDF60-\uDF72\uDF78-\uDF7F]" }, { name: "Inscriptional_Parthian", astral: "\uD802[\uDF40-\uDF55\uDF58-\uDF5F]" }, { name: "Javanese", bmp: "\uA980-\uA9CD\uA9D0-\uA9D9\uA9DE\uA9DF" }, { name: "Kaithi", astral: "\uD804[\uDC80-\uDCC2\uDCCD]" }, { name: "Kannada", bmp: "\u0C80-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2" }, { name: "Katakana", bmp: "\u30A1-\u30FA\u30FD-\u30FF\u31F0-\u31FF\u32D0-\u32FE\u3300-\u3357\uFF66-\uFF6F\uFF71-\uFF9D", astral: "\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD64-\uDD67]" }, { name: "Kayah_Li", bmp: "\uA900-\uA92D\uA92F" }, { name: "Kharoshthi", astral: "\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE50-\uDE58]" }, { name: "Khitan_Small_Script", astral: "\u{16FE4}|\uD822[\uDF00-\uDFFF]|\uD823[\uDC00-\uDCD5]" }, { name: "Khmer", bmp: "\u1780-\u17DD\u17E0-\u17E9\u17F0-\u17F9\u19E0-\u19FF" }, { name: "Khojki", astral: "\uD804[\uDE00-\uDE11\uDE13-\uDE3E]" }, { name: "Khudawadi", astral: "\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]" }, { name: "Lao", bmp: "\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF" }, { name: "Latin", bmp: "A-Za-z\xAA\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u02E0-\u02E4\u1D00-\u1D25\u1D2C-\u1D5C\u1D62-\u1D65\u1D6B-\u1D77\u1D79-\u1DBE\u1E00-\u1EFF\u2071\u207F\u2090-\u209C\u212A\u212B\u2132\u214E\u2160-\u2188\u2C60-\u2C7F\uA722-\uA787\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA7FF\uAB30-\uAB5A\uAB5C-\uAB64\uAB66-\uAB69\uFB00-\uFB06\uFF21-\uFF3A\uFF41-\uFF5A", astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E]" }, { name: "Lepcha", bmp: "\u1C00-\u1C37\u1C3B-\u1C49\u1C4D-\u1C4F" }, { name: "Limbu", bmp: "\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1940\u1944-\u194F" }, { name: "Linear_A", astral: "\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]" }, { name: "Linear_B", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]" }, { name: "Lisu", bmp: "\uA4D0-\uA4FF", astral: "\u{11FB0}" }, { name: "Lycian", astral: "\uD800[\uDE80-\uDE9C]" }, { name: "Lydian", astral: "\uD802[\uDD20-\uDD39\uDD3F]" }, { name: "Mahajani", astral: "\uD804[\uDD50-\uDD76]" }, { name: "Makasar", astral: "\uD807[\uDEE0-\uDEF8]" }, { name: "Malayalam", bmp: "\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4F\u0D54-\u0D63\u0D66-\u0D7F" }, { name: "Mandaic", bmp: "\u0840-\u085B\u085E" }, { name: "Manichaean", astral: "\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]" }, { name: "Marchen", astral: "\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]" }, { name: "Masaram_Gondi", astral: "\uD807[\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]" }, { name: "Medefaidrin", astral: "\uD81B[\uDE40-\uDE9A]" }, { name: "Meetei_Mayek", bmp: "\uAAE0-\uAAF6\uABC0-\uABED\uABF0-\uABF9" }, { name: "Mende_Kikakui", astral: "\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]" }, { name: "Meroitic_Cursive", astral: "\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]" }, { name: "Meroitic_Hieroglyphs", astral: "\uD802[\uDD80-\uDD9F]" }, { name: "Miao", astral: "\uD81B[\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F]" }, { name: "Modi", astral: "\uD805[\uDE00-\uDE44\uDE50-\uDE59]" }, { name: "Mongolian", bmp: "\u1800\u1801\u1804\u1806-\u1819\u1820-\u1878\u1880-\u18AA", astral: "\uD805[\uDE60-\uDE6C]" }, { name: "Mro", astral: "\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]" }, { name: "Multani", astral: "\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]" }, { name: "Myanmar", bmp: "\u1000-\u109F\uA9E0-\uA9FE\uAA60-\uAA7F" }, { name: "Nabataean", astral: "\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]" }, { name: "Nandinagari", astral: "\uD806[\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE4]" }, { name: "New_Tai_Lue", bmp: "\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u19DE\u19DF" }, { name: "Newa", astral: "\uD805[\uDC00-\uDC5B\uDC5D-\uDC61]" }, { name: "Nko", bmp: "\u07C0-\u07FA\u07FD-\u07FF" }, { name: "Nushu", astral: "\u{16FE1}|\uD82C[\uDD70-\uDEFB]" }, { name: "Nyiakeng_Puachue_Hmong", astral: "\uD838[\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDD4F]" }, { name: "Ogham", bmp: "\u1680-\u169C" }, { name: "Ol_Chiki", bmp: "\u1C50-\u1C7F" }, { name: "Old_Hungarian", astral: "\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]" }, { name: "Old_Italic", astral: "\uD800[\uDF00-\uDF23\uDF2D-\uDF2F]" }, { name: "Old_North_Arabian", astral: "\uD802[\uDE80-\uDE9F]" }, { name: "Old_Permic", astral: "\uD800[\uDF50-\uDF7A]" }, { name: "Old_Persian", astral: "\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]" }, { name: "Old_Sogdian", astral: "\uD803[\uDF00-\uDF27]" }, { name: "Old_South_Arabian", astral: "\uD802[\uDE60-\uDE7F]" }, { name: "Old_Turkic", astral: "\uD803[\uDC00-\uDC48]" }, { name: "Old_Uyghur", astral: "\uD803[\uDF70-\uDF89]" }, { name: "Oriya", bmp: "\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B77" }, { name: "Osage", astral: "\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB]" }, { name: "Osmanya", astral: "\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]" }, { name: "Pahawh_Hmong", astral: "\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]" }, { name: "Palmyrene", astral: "\uD802[\uDC60-\uDC7F]" }, { name: "Pau_Cin_Hau", astral: "\uD806[\uDEC0-\uDEF8]" }, { name: "Phags_Pa", bmp: "\uA840-\uA877" }, { name: "Phoenician", astral: "\uD802[\uDD00-\uDD1B\uDD1F]" }, { name: "Psalter_Pahlavi", astral: "\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]" }, { name: "Rejang", bmp: "\uA930-\uA953\uA95F" }, { name: "Runic", bmp: "\u16A0-\u16EA\u16EE-\u16F8" }, { name: "Samaritan", bmp: "\u0800-\u082D\u0830-\u083E" }, { name: "Saurashtra", bmp: "\uA880-\uA8C5\uA8CE-\uA8D9" }, { name: "Sharada", astral: "\uD804[\uDD80-\uDDDF]" }, { name: "Shavian", astral: "\uD801[\uDC50-\uDC7F]" }, { name: "Siddham", astral: "\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]" }, { name: "SignWriting", astral: "\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]" }, { name: "Sinhala", bmp: "\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2-\u0DF4", astral: "\uD804[\uDDE1-\uDDF4]" }, { name: "Sogdian", astral: "\uD803[\uDF30-\uDF59]" }, { name: "Sora_Sompeng", astral: "\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]" }, { name: "Soyombo", astral: "\uD806[\uDE50-\uDEA2]" }, { name: "Sundanese", bmp: "\u1B80-\u1BBF\u1CC0-\u1CC7" }, { name: "Syloti_Nagri", bmp: "\uA800-\uA82C" }, { name: "Syriac", bmp: "\u0700-\u070D\u070F-\u074A\u074D-\u074F\u0860-\u086A" }, { name: "Tagalog", bmp: "\u1700-\u1715\u171F" }, { name: "Tagbanwa", bmp: "\u1760-\u176C\u176E-\u1770\u1772\u1773" }, { name: "Tai_Le", bmp: "\u1950-\u196D\u1970-\u1974" }, { name: "Tai_Tham", bmp: "\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA0-\u1AAD" }, { name: "Tai_Viet", bmp: "\uAA80-\uAAC2\uAADB-\uAADF" }, { name: "Takri", astral: "\uD805[\uDE80-\uDEB9\uDEC0-\uDEC9]" }, { name: "Tamil", bmp: "\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BFA", astral: "\uD807[\uDFC0-\uDFF1\uDFFF]" }, { name: "Tangsa", astral: "\uD81A[\uDE70-\uDEBE\uDEC0-\uDEC9]" }, { name: "Tangut", astral: "\u{16FE0}|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEFF]|\uD823[\uDD00-\uDD08]" }, { name: "Telugu", bmp: "\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C77-\u0C7F" }, { name: "Thaana", bmp: "\u0780-\u07B1" }, { name: "Thai", bmp: "\u0E01-\u0E3A\u0E40-\u0E5B" }, { name: "Tibetan", bmp: "\u0F00-\u0F47\u0F49-\u0F6C\u0F71-\u0F97\u0F99-\u0FBC\u0FBE-\u0FCC\u0FCE-\u0FD4\u0FD9\u0FDA" }, { name: "Tifinagh", bmp: "\u2D30-\u2D67\u2D6F\u2D70\u2D7F" }, { name: "Tirhuta", astral: "\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]" }, { name: "Toto", astral: "\uD838[\uDE90-\uDEAE]" }, { name: "Ugaritic", astral: "\uD800[\uDF80-\uDF9D\uDF9F]" }, { name: "Vai", bmp: "\uA500-\uA62B" }, { name: "Vithkuqi", astral: "\uD801[\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]" }, { name: "Wancho", astral: "\uD838[\uDEC0-\uDEF9\uDEFF]" }, { name: "Warang_Citi", astral: "\uD806[\uDCA0-\uDCF2\uDCFF]" }, { name: "Yezidi", astral: "\uD803[\uDE80-\uDEA9\uDEAB-\uDEAD\uDEB0\uDEB1]" }, { name: "Yi", bmp: "\uA000-\uA48C\uA490-\uA4C6" }, { name: "Zanabazar_Square", astral: "\uD806[\uDE00-\uDE47]" }], unicodeScripts = (A2) => {
  if (!A2.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
  A2.addUnicodeData(scripts, "Script");
};
function getLatexPackSign(A2, e2) {
  return "\\\\" === A2.slice(e2, e2 + 2) ? "$$" : "$";
}
function splitLineBreak(A2, d, e2, u2) {
  const n = A2.split("\\\\");
  if (n.length) {
    let t = u2 ? "<div></div>" : "";
    if (e2)
      return d + "\\mathrm{" + n.join(`}${d}${t}${d}\\mathrm{`) + "}" + d;
    {
      let u3 = "";
      return 1 === n.length ? u3 += "" + d + n[0] + d : n.forEach((A3, e3) => {
        1 < A3.length && (u3 += "" + d + A3 + d), 1 < n.length && e3 < n.length - 1 && (u3 += t);
      }), u3;
    }
  }
  return e2 ? `\\mathrm{${A2}}` : A2;
}
function devideChinese(t, d, n, A2) {
  if (t.match(/\\left\\{/g) || t.match(/\\class{fourlineruled}/g))
    return { content: t, __isChineseDivide: A2 = false };
  const r = XRegExp.matchRecursive(t, "{", "}", "g", { valueNames: ["inner", "left", "between", "right"], unbalanced: "skip-lazy" }).map((A3) => {
    if ("between" === A3.name)
      return [A3.start, A3.end];
  }).filter((A3) => A3);
  var e2 = Array.from(t.matchAll(/[\u4e00-\u9fa5]+/g));
  if (!e2.length)
    return { content: t, __isChineseDivide: A2 = false };
  let a2 = "", o = 0;
  e2.forEach((e3) => {
    var A3, u3;
    r.some((A4) => e3.index >= A4[0] && e3.index <= A4[1]) || ((A3 = t.slice(o, e3.index)) && (u3 = getLatexPackSign(A3, 0), a2 += "" + splitLineBreak(A3, u3, d, n)), a2 += `<span>${e3[0]}</span>` || "", o = e3.index + e3[0].length);
  });
  var u2, e2 = t.slice(o);
  return e2 && (u2 = getLatexPackSign(e2, 0), a2 += "" + splitLineBreak(e2, u2, d, n)), { content: a2, __isChineseDivide: A2 };
}
function transformer(A2, e2 = _.defaults({ wrapMathrm: true, punctuation: false, lineClass: false, divideChinese: false, lineBreak: true })) {
  if (!A2)
    return "";
  A2 = formatCommon(A2 = e2.punctuation ? formatPunctuation(A2) : A2), e2.lineClass && (A2 = addClassForLine(A2));
  let u2 = e2.divideChinese;
  var t;
  return e2.divideChinese && (A2 = (t = devideChinese(A2, e2.wrapMathrm, e2.lineBreak, u2)).content, u2 = t.__isChineseDivide), A2 = e2.wrapMathrm && !u2 ? `${e2.divideChinese ? "$$" : ""}\\mathrm{${A2}}` + (e2.divideChinese ? "$$" : "") : A2;
}
build(XRegExp), matchRecursive(XRegExp), unicodeBase(XRegExp), unicodeCategories(XRegExp), unicodeProperties(XRegExp), unicodeScripts(XRegExp);
const loader = { load: ["output/chtml", "input/tex", "[tex]/enclose", "[tex]/ams", "[tex]/noerrors", "[tex]/configmacros", "[tex]/mathtools", "[tex]/mhchem", "[tex]/unicode", "[tex]/textmacros", "[tex]/textcomp", "[tex]/cancel", "[tex]/extpfeil", "[tex]/html"] }, texPackages = { "[+]": ["noerrors", "enclose", "ams", "mathtools", "mhchem", "unicode", "textcomp", "cancel", "extpfeil", "textmacros", "html"] }, texMacros = { "[": "[", "]": "]", "(": "(", ")": ")", "\u3010": "\u3010", "\u3011": "\u3011", NEarrow: "\\unicode{x21d7}", NWarrow: "\\unicode{x21d6}", SEarrow: "\\unicode{x21d8}", SWarrow: "\\unicode{x21d9}", textcircled: "\\enclose{circle}", romannumeral: "\\enclose{()}", arccot: "arccot", arccsc: "arccsc", arcsec: "arcsec", blackdiamond: "\\blacklozenge", blackheart: "\\unicode{x2665}", blackrectangle: "\\unicode{x220e}", blackstar: "\\unicode{x2605}", heart: "\\heartsuit", female: "\\unicode{x2640}", male: "\\unicode{x2642}", napprox: "\\unicode{x2249}", nequiv: "\\unicode{x2262}", notni: "\\unicode{x220c}", nsubset: "\\unicode{x2284}", nsupset: "TODO", oiiint: "\\unicode{x2230}", oiint: "\\unicode{x222f}", rectangle: "\\unicode{x25ad}", smiley: "\\unicode{x263a}", wideparen: "\\overparen", textperthousand: "\\unicode{x2030}", textregistered: "\\unicode{xae}", textsection: "\\unicode{xa7}", texttrademark: "\\unicode{x2122}", textreferencemark: "\\unicode{x203b}", parallelogram: "\\unicode{x25b1}", deletion: "\\text{ }", d: "\\underset{\\cdot}", v: "\\check", omitted: "\\tripledash", xmark: "\\times", cmark: "\\unicode{x2714}", replace: "\\xcancel", handtextcircled: "\\enclose{circle}", handsquare: "\\fbox", Alpha: "A", Beta: "B", Omicron: "O", Epsilon: "E", Zeta: "Z", Eta: "H", Iota: "I", Kappa: "K", Mu: "M", Nu: "N", Rho: "P", Tau: "T", Chi: "X", lg: "\\log", nl: "\\nless", ng: "\\ngtr", textbf: "\\class{bf}", textit: "\\class{it}", parallelequal: "{\\small{\\stackrel{\\;//}{\\raise-.5ex\\hbox{=}}}}", "^": "\\textasciicircum", bar: "\\overline" }, texInlineMath = [["$", "$"], ["\\(", "\\)"]], texDisplayMath = [["$$", "$$"], ["\\[", "\\]"]], tex = { inlineMath: texInlineMath, displayMath: texDisplayMath, packages: texPackages, macros: texMacros, maxBuffer: 10240 }, options = { enableMenu: false, enableAssistiveMml: false, menuOptions: { settings: { assistiveMml: false } } }, chtml = { displayAlign: "left", fontURL: "https://homework-webfront.oss-cn-beijing.aliyuncs.com/MathJaxFonts" }, mathJaxConfig = { options, loader, tex, chtml }, mathJaxScriptId = "MathJax-script", mathJaxScriptBaseUrl = "https://homework-webfront.oss-cn-beijing.aliyuncs.com/complete_math_v1/mathjax-3.2.0/es5", mathJaxScriptSrc = mathJaxScriptBaseUrl + "/tex-mml-chtml.js";
let isAddScript = false, isReady = false;
function initMathJaxConifg(e2) {
  if (globalThis.window) {
    let A2 = mathJaxConfig;
    e2 && (A2 = { ...mathJaxConfig, ...e2 }), globalThis.window.MathJax = { ...A2, startup: { pageReady: () => {
      isReady = true;
    } } };
  }
}
function addMathJaxScript() {
  return new Promise((e2, u2) => {
    if (isReady)
      return e2("");
    {
      var t;
      isAddScript || ((t = document.createElement("script")).src = mathJaxScriptSrc, t.id = mathJaxScriptId, t.onerror = (A3) => {
        u2(A3);
      }, document.body.appendChild(t), isAddScript = true);
      let A2 = setInterval(() => {
        if (isReady)
          return clearInterval(A2), e2("");
      }, 1e3);
    }
  });
}
function renderLatex(A2) {
  return addMathJaxScript().then(() => MathJax.typesetPromise([A2]));
}
initMathJaxConifg();
var extendStatics = function(A2, e2) {
  return (extendStatics = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(A3, e3) {
    A3.__proto__ = e3;
  } : function(A3, e3) {
    for (var u2 in e3)
      Object.prototype.hasOwnProperty.call(e3, u2) && (A3[u2] = e3[u2]);
  }))(A2, e2);
};
function __extends(A2, e2) {
  if ("function" != typeof e2 && null !== e2)
    throw new TypeError("Class extends value " + String(e2) + " is not a constructor or null");
  function u2() {
    this.constructor = A2;
  }
  extendStatics(A2, e2), A2.prototype = null === e2 ? Object.create(e2) : (u2.prototype = e2.prototype, new u2());
}
function __awaiter(A2, r, a2, o) {
  return new (a2 = a2 || Promise)(function(u2, e2) {
    function t(A3) {
      try {
        n(o.next(A3));
      } catch (A4) {
        e2(A4);
      }
    }
    function d(A3) {
      try {
        n(o.throw(A3));
      } catch (A4) {
        e2(A4);
      }
    }
    function n(A3) {
      var e3;
      A3.done ? u2(A3.value) : ((e3 = A3.value) instanceof a2 ? e3 : new a2(function(A4) {
        A4(e3);
      })).then(t, d);
    }
    n((o = o.apply(A2, r || [])).next());
  });
}
function __generator(t, d) {
  var n, r, a2, o = { label: 0, sent: function() {
    if (1 & a2[0])
      throw a2[1];
    return a2[1];
  }, trys: [], ops: [] }, A2 = { next: e2(0), throw: e2(1), return: e2(2) };
  return "function" == typeof Symbol && (A2[Symbol.iterator] = function() {
    return this;
  }), A2;
  function e2(u2) {
    return function(A3) {
      var e3 = [u2, A3];
      if (n)
        throw new TypeError("Generator is already executing.");
      for (; o; )
        try {
          if (n = 1, r && (a2 = 2 & e3[0] ? r.return : e3[0] ? r.throw || ((a2 = r.return) && a2.call(r), 0) : r.next) && !(a2 = a2.call(r, e3[1])).done)
            return a2;
          switch (r = 0, (e3 = a2 ? [2 & e3[0], a2.value] : e3)[0]) {
            case 0:
            case 1:
              a2 = e3;
              break;
            case 4:
              return o.label++, { value: e3[1], done: false };
            case 5:
              o.label++, r = e3[1], e3 = [0];
              continue;
            case 7:
              e3 = o.ops.pop(), o.trys.pop();
              continue;
            default:
              if (!(a2 = 0 < (a2 = o.trys).length && a2[a2.length - 1]) && (6 === e3[0] || 2 === e3[0])) {
                o = 0;
                continue;
              }
              if (3 === e3[0] && (!a2 || e3[1] > a2[0] && e3[1] < a2[3]))
                o.label = e3[1];
              else if (6 === e3[0] && o.label < a2[1])
                o.label = a2[1], a2 = e3;
              else {
                if (!(a2 && o.label < a2[2])) {
                  a2[2] && o.ops.pop(), o.trys.pop();
                  continue;
                }
                o.label = a2[2], o.ops.push(e3);
              }
          }
          e3 = d.call(t, o);
        } catch (A4) {
          e3 = [6, A4], r = 0;
        } finally {
          n = a2 = 0;
        }
      if (5 & e3[0])
        throw e3[1];
      return { value: e3[0] ? e3[1] : void 0, done: true };
    };
  }
}
for (var Bounds = function() {
  function d(A2, e2, u2, t) {
    this.left = A2, this.top = e2, this.width = u2, this.height = t;
  }
  return d.prototype.add = function(A2, e2, u2, t) {
    return new d(this.left + A2, this.top + e2, this.width + u2, this.height + t);
  }, d.fromClientRect = function(A2, e2) {
    return new d(e2.left + A2.windowBounds.left, e2.top + A2.windowBounds.top, e2.width, e2.height);
  }, d.fromDOMRectList = function(A2, e2) {
    e2 = Array.from(e2).find(function(A3) {
      return 0 !== A3.width;
    });
    return e2 ? new d(e2.left + A2.windowBounds.left, e2.top + A2.windowBounds.top, e2.width, e2.height) : d.EMPTY;
  }, d.EMPTY = new d(0, 0, 0, 0), d;
}(), parseBounds = function(A2, e2) {
  return Bounds.fromClientRect(A2, e2.getBoundingClientRect());
}, toCodePoints$1 = function(A2) {
  for (var e2 = [], u2 = 0, t = A2.length; u2 < t; ) {
    var d, n = A2.charCodeAt(u2++);
    55296 <= n && n <= 56319 && u2 < t ? 56320 == (64512 & (d = A2.charCodeAt(u2++))) ? e2.push(((1023 & n) << 10) + (1023 & d) + 65536) : (e2.push(n), u2--) : e2.push(n);
  }
  return e2;
}, fromCodePoint$1 = function() {
  for (var A2 = [], e2 = 0; e2 < arguments.length; e2++)
    A2[e2] = arguments[e2];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A2);
  var u2 = A2.length;
  if (!u2)
    return "";
  for (var t = [], d = -1, n = ""; ++d < u2; ) {
    var r = A2[d];
    r <= 65535 ? t.push(r) : t.push(55296 + ((r -= 65536) >> 10), r % 1024 + 56320), (d + 1 === u2 || 16384 < t.length) && (n += String.fromCharCode.apply(String, t), t.length = 0);
  }
  return n;
}, chars$2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup$2 = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i$2 = 0; i$2 < chars$2.length; i$2++)
  lookup$2[chars$2.charCodeAt(i$2)] = i$2;
for (var chars$1$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup$1$1 = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++)
  lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
for (var decode$1 = function(A2) {
  for (var e2, u2, t, d, n = 0.75 * A2.length, r = A2.length, a2 = 0, n = ("=" === A2[A2.length - 1] && (n--, "=" === A2[A2.length - 2]) && n--, new ("undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? ArrayBuffer : Array)(n)), o = Array.isArray(n) ? n : new Uint8Array(n), c = 0; c < r; c += 4)
    e2 = lookup$1$1[A2.charCodeAt(c)], u2 = lookup$1$1[A2.charCodeAt(c + 1)], t = lookup$1$1[A2.charCodeAt(c + 2)], d = lookup$1$1[A2.charCodeAt(c + 3)], o[a2++] = e2 << 2 | u2 >> 4, o[a2++] = (15 & u2) << 4 | t >> 2, o[a2++] = (3 & t) << 6 | 63 & d;
  return n;
}, polyUint16Array$1 = function(A2) {
  for (var e2 = A2.length, u2 = [], t = 0; t < e2; t += 2)
    u2.push(A2[t + 1] << 8 | A2[t]);
  return u2;
}, polyUint32Array$1 = function(A2) {
  for (var e2 = A2.length, u2 = [], t = 0; t < e2; t += 4)
    u2.push(A2[t + 3] << 24 | A2[t + 2] << 16 | A2[t + 1] << 8 | A2[t]);
  return u2;
}, UTRIE2_SHIFT_2$1 = 5, UTRIE2_SHIFT_1$1 = 11, UTRIE2_INDEX_SHIFT$1 = 2, UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1, UTRIE2_LSCP_INDEX_2_OFFSET$1 = 65536 >> UTRIE2_SHIFT_2$1, UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1, UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1, UTRIE2_LSCP_INDEX_2_LENGTH$1 = 1024 >> UTRIE2_SHIFT_2$1, UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1, UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1, UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 32, UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1, UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 65536 >> UTRIE2_SHIFT_1$1, UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1, UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1, slice16$1 = function(A2, e2, u2) {
  return A2.slice ? A2.slice(e2, u2) : new Uint16Array(Array.prototype.slice.call(A2, e2, u2));
}, slice32$1 = function(A2, e2, u2) {
  return A2.slice ? A2.slice(e2, u2) : new Uint32Array(Array.prototype.slice.call(A2, e2, u2));
}, createTrieFromBase64$1 = function(A2, e2) {
  var A2 = decode$1(A2), u2 = Array.isArray(A2) ? polyUint32Array$1(A2) : new Uint32Array(A2), A2 = Array.isArray(A2) ? polyUint16Array$1(A2) : new Uint16Array(A2), t = slice16$1(A2, 12, u2[4] / 2), A2 = 2 === u2[5] ? slice16$1(A2, (24 + u2[4]) / 2) : slice32$1(u2, Math.ceil((24 + u2[4]) / 4));
  return new Trie$1(u2[0], u2[1], u2[2], u2[3], t, A2);
}, Trie$1 = function() {
  function A2(A3, e2, u2, t, d, n) {
    this.initialValue = A3, this.errorValue = e2, this.highStart = u2, this.highValueIndex = t, this.index = d, this.data = n;
  }
  return A2.prototype.get = function(A3) {
    var e2;
    if (0 <= A3) {
      if (A3 < 55296 || 56319 < A3 && A3 <= 65535)
        return e2 = this.index[A3 >> UTRIE2_SHIFT_2$1], this.data[e2 = (e2 << UTRIE2_INDEX_SHIFT$1) + (A3 & UTRIE2_DATA_MASK$1)];
      if (A3 <= 65535)
        return e2 = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + (A3 - 55296 >> UTRIE2_SHIFT_2$1)], this.data[e2 = (e2 << UTRIE2_INDEX_SHIFT$1) + (A3 & UTRIE2_DATA_MASK$1)];
      if (A3 < this.highStart)
        return e2 = this.index[e2 = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (A3 >> UTRIE2_SHIFT_1$1)], e2 = this.index[e2 += A3 >> UTRIE2_SHIFT_2$1 & UTRIE2_INDEX_2_MASK$1], this.data[e2 = (e2 << UTRIE2_INDEX_SHIFT$1) + (A3 & UTRIE2_DATA_MASK$1)];
      if (A3 <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, A2;
}(), chars$3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup$3 = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i$3 = 0; i$3 < chars$3.length; i$3++)
  lookup$3[chars$3.charCodeAt(i$3)] = i$3;
var base64$1 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", LETTER_NUMBER_MODIFIER = 50, BK = 1, CR$1 = 2, LF$1 = 3, CM = 4, NL = 5, WJ = 7, ZW = 8, GL = 9, SP = 10, ZWJ$1 = 11, B2 = 12, BA = 13, BB = 14, HY = 15, CB = 16, CL = 17, CP = 18, EX = 19, IN = 20, NS = 21, OP = 22, QU = 23, IS = 24, NU = 25, PO = 26, PR = 27, SY = 28, AI = 29, AL = 30, CJ = 31, EB = 32, EM = 33, H2 = 34, H3 = 35, HL = 36, ID = 37, JL = 38, JV = 39, JT = 40, RI$1 = 41, SA = 42, XX = 43, ea_OP = [9001, 65288], BREAK_MANDATORY = "!", BREAK_NOT_ALLOWED$1 = "\xD7", BREAK_ALLOWED$1 = "\xF7", UnicodeTrie$1 = createTrieFromBase64$1(base64$1), ALPHABETICS = [AL, HL], HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL], SPACE$1 = [SP, ZW], PREFIX_POSTFIX = [PR, PO], LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1), KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3], HYPHEN = [HY, BA], codePointsToCharacterClasses = function(A2, t) {
  void 0 === t && (t = "strict");
  var d = [], n = [], r = [];
  return A2.forEach(function(A3, e2) {
    var u2 = UnicodeTrie$1.get(A3);
    if (LETTER_NUMBER_MODIFIER < u2 ? (r.push(true), u2 -= LETTER_NUMBER_MODIFIER) : r.push(false), -1 !== ["normal", "auto", "loose"].indexOf(t) && -1 !== [8208, 8211, 12316, 12448].indexOf(A3))
      return n.push(e2), d.push(CB);
    if (u2 !== CM && u2 !== ZWJ$1)
      return n.push(e2), u2 === CJ ? d.push("strict" === t ? NS : ID) : u2 === SA || u2 === AI ? d.push(AL) : u2 === XX ? d.push(131072 <= A3 && A3 <= 196605 || 196608 <= A3 && A3 <= 262141 ? ID : AL) : void d.push(u2);
    if (0 !== e2 && -1 === LINE_BREAKS.indexOf(A3 = d[e2 - 1]))
      return n.push(n[e2 - 1]), d.push(A3);
    return n.push(e2), d.push(AL);
  }), [n, d, r];
}, isAdjacentWithSpaceIgnored = function(A2, e2, u2, t) {
  var d = t[u2];
  if (Array.isArray(A2) ? -1 !== A2.indexOf(d) : A2 === d)
    for (var n = u2; n <= t.length; ) {
      if ((a2 = t[++n]) === e2)
        return true;
      if (a2 !== SP)
        break;
    }
  if (d === SP)
    for (n = u2; 0 < n; ) {
      var r = t[--n];
      if (Array.isArray(A2) ? -1 !== A2.indexOf(r) : A2 === r)
        for (var a2, o = u2; o <= t.length; ) {
          if ((a2 = t[++o]) === e2)
            return true;
          if (a2 !== SP)
            break;
        }
      if (r !== SP)
        break;
    }
  return false;
}, previousNonSpaceClassType = function(A2, e2) {
  for (var u2 = A2; 0 <= u2; ) {
    var t = e2[u2];
    if (t !== SP)
      return t;
    u2--;
  }
  return 0;
}, _lineBreakAtIndex = function(A2, e2, u2, t, d) {
  if (0 === u2[t])
    return BREAK_NOT_ALLOWED$1;
  t -= 1;
  if (Array.isArray(d) && true === d[t])
    return BREAK_NOT_ALLOWED$1;
  var d = t - 1, n = 1 + t, r = e2[t], a2 = 0 <= d ? e2[d] : 0, o = e2[n];
  if (r === CR$1 && o === LF$1)
    return BREAK_NOT_ALLOWED$1;
  if (-1 !== HARD_LINE_BREAKS.indexOf(r))
    return BREAK_MANDATORY;
  if (-1 !== HARD_LINE_BREAKS.indexOf(o))
    return BREAK_NOT_ALLOWED$1;
  if (-1 !== SPACE$1.indexOf(o))
    return BREAK_NOT_ALLOWED$1;
  if (previousNonSpaceClassType(t, e2) === ZW)
    return BREAK_ALLOWED$1;
  if (UnicodeTrie$1.get(A2[t]) === ZWJ$1)
    return BREAK_NOT_ALLOWED$1;
  if ((r === EB || r === EM) && UnicodeTrie$1.get(A2[n]) === ZWJ$1)
    return BREAK_NOT_ALLOWED$1;
  if (r === WJ || o === WJ)
    return BREAK_NOT_ALLOWED$1;
  if (r === GL)
    return BREAK_NOT_ALLOWED$1;
  if (-1 === [SP, BA, HY].indexOf(r) && o === GL)
    return BREAK_NOT_ALLOWED$1;
  if (-1 !== [CL, CP, EX, IS, SY].indexOf(o))
    return BREAK_NOT_ALLOWED$1;
  if (previousNonSpaceClassType(t, e2) === OP)
    return BREAK_NOT_ALLOWED$1;
  if (isAdjacentWithSpaceIgnored(QU, OP, t, e2))
    return BREAK_NOT_ALLOWED$1;
  if (isAdjacentWithSpaceIgnored([CL, CP], NS, t, e2))
    return BREAK_NOT_ALLOWED$1;
  if (isAdjacentWithSpaceIgnored(B2, B2, t, e2))
    return BREAK_NOT_ALLOWED$1;
  if (r === SP)
    return BREAK_ALLOWED$1;
  if (r === QU || o === QU)
    return BREAK_NOT_ALLOWED$1;
  if (o === CB || r === CB)
    return BREAK_ALLOWED$1;
  if (-1 !== [BA, HY, NS].indexOf(o) || r === BB)
    return BREAK_NOT_ALLOWED$1;
  if (a2 === HL && -1 !== HYPHEN.indexOf(r))
    return BREAK_NOT_ALLOWED$1;
  if (r === SY && o === HL)
    return BREAK_NOT_ALLOWED$1;
  if (o === IN)
    return BREAK_NOT_ALLOWED$1;
  if (-1 !== ALPHABETICS.indexOf(o) && r === NU || -1 !== ALPHABETICS.indexOf(r) && o === NU)
    return BREAK_NOT_ALLOWED$1;
  if (r === PR && -1 !== [ID, EB, EM].indexOf(o) || -1 !== [ID, EB, EM].indexOf(r) && o === PO)
    return BREAK_NOT_ALLOWED$1;
  if (-1 !== ALPHABETICS.indexOf(r) && -1 !== PREFIX_POSTFIX.indexOf(o) || -1 !== PREFIX_POSTFIX.indexOf(r) && -1 !== ALPHABETICS.indexOf(o))
    return BREAK_NOT_ALLOWED$1;
  if (-1 !== [PR, PO].indexOf(r) && (o === NU || -1 !== [OP, HY].indexOf(o) && e2[1 + n] === NU) || -1 !== [OP, HY].indexOf(r) && o === NU || r === NU && -1 !== [NU, SY, IS].indexOf(o))
    return BREAK_NOT_ALLOWED$1;
  if (-1 !== [NU, SY, IS, CL, CP].indexOf(o))
    for (var c = t; 0 <= c; ) {
      if ((i = e2[c]) === NU)
        return BREAK_NOT_ALLOWED$1;
      if (-1 === [SY, IS].indexOf(i))
        break;
      c--;
    }
  if (-1 !== [PR, PO].indexOf(o))
    for (var i, c = -1 !== [CL, CP].indexOf(r) ? d : t; 0 <= c; ) {
      if ((i = e2[c]) === NU)
        return BREAK_NOT_ALLOWED$1;
      if (-1 === [SY, IS].indexOf(i))
        break;
      c--;
    }
  if (JL === r && -1 !== [JL, JV, H2, H3].indexOf(o) || -1 !== [JV, H2].indexOf(r) && -1 !== [JV, JT].indexOf(o) || -1 !== [JT, H3].indexOf(r) && o === JT)
    return BREAK_NOT_ALLOWED$1;
  if (-1 !== KOREAN_SYLLABLE_BLOCK.indexOf(r) && -1 !== [IN, PO].indexOf(o) || -1 !== KOREAN_SYLLABLE_BLOCK.indexOf(o) && r === PR)
    return BREAK_NOT_ALLOWED$1;
  if (-1 !== ALPHABETICS.indexOf(r) && -1 !== ALPHABETICS.indexOf(o))
    return BREAK_NOT_ALLOWED$1;
  if (r === IS && -1 !== ALPHABETICS.indexOf(o))
    return BREAK_NOT_ALLOWED$1;
  if (-1 !== ALPHABETICS.concat(NU).indexOf(r) && o === OP && -1 === ea_OP.indexOf(A2[n]) || -1 !== ALPHABETICS.concat(NU).indexOf(o) && r === CP)
    return BREAK_NOT_ALLOWED$1;
  if (r === RI$1 && o === RI$1) {
    for (var f2 = u2[t], s = 1; 0 < f2 && e2[--f2] === RI$1; )
      s++;
    if (s % 2 != 0)
      return BREAK_NOT_ALLOWED$1;
  }
  return r === EB && o === EM ? BREAK_NOT_ALLOWED$1 : BREAK_ALLOWED$1;
}, cssFormattedClasses = function(u2, A2) {
  var e2 = codePointsToCharacterClasses(u2, (A2 = A2 || { lineBreak: "normal", wordBreak: "normal" }).lineBreak), t = e2[0], d = e2[1], e2 = e2[2], A2 = ("break-all" !== A2.wordBreak && "break-word" !== A2.wordBreak || (d = d.map(function(A3) {
    return -1 !== [NU, AL, SA].indexOf(A3) ? ID : A3;
  })), "keep-all" === A2.wordBreak ? e2.map(function(A3, e3) {
    return A3 && 19968 <= u2[e3] && u2[e3] <= 40959;
  }) : void 0);
  return [t, d, A2];
}, Break = function() {
  function A2(A3, e2, u2, t) {
    this.codePoints = A3, this.required = e2 === BREAK_MANDATORY, this.start = u2, this.end = t;
  }
  return A2.prototype.slice = function() {
    return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, A2;
}(), LineBreaker = function(A2, e2) {
  var u2 = toCodePoints$1(A2), A2 = cssFormattedClasses(u2, e2), t = A2[0], d = A2[1], n = A2[2], r = u2.length, a2 = 0, o = 0;
  return { next: function() {
    if (r <= o)
      return { done: true, value: null };
    for (var A3, e3 = BREAK_NOT_ALLOWED$1; o < r && (e3 = _lineBreakAtIndex(u2, d, t, ++o, n)) === BREAK_NOT_ALLOWED$1; )
      ;
    return e3 !== BREAK_NOT_ALLOWED$1 || o === r ? (A3 = new Break(u2, e3, a2, o), a2 = o, { value: A3, done: false }) : { done: true, value: null };
  } };
}, FLAG_UNRESTRICTED = 1, FLAG_ID = 2, FLAG_INTEGER = 4, FLAG_NUMBER = 8, LINE_FEED = 10, SOLIDUS = 47, REVERSE_SOLIDUS = 92, CHARACTER_TABULATION = 9, SPACE = 32, QUOTATION_MARK = 34, EQUALS_SIGN = 61, NUMBER_SIGN = 35, DOLLAR_SIGN = 36, PERCENTAGE_SIGN = 37, APOSTROPHE = 39, LEFT_PARENTHESIS = 40, RIGHT_PARENTHESIS = 41, LOW_LINE = 95, HYPHEN_MINUS = 45, EXCLAMATION_MARK = 33, LESS_THAN_SIGN = 60, GREATER_THAN_SIGN = 62, COMMERCIAL_AT = 64, LEFT_SQUARE_BRACKET = 91, RIGHT_SQUARE_BRACKET = 93, CIRCUMFLEX_ACCENT = 61, LEFT_CURLY_BRACKET = 123, QUESTION_MARK = 63, RIGHT_CURLY_BRACKET = 125, VERTICAL_LINE = 124, TILDE = 126, CONTROL = 128, REPLACEMENT_CHARACTER = 65533, ASTERISK = 42, PLUS_SIGN = 43, COMMA = 44, COLON = 58, SEMICOLON = 59, FULL_STOP = 46, NULL = 0, BACKSPACE = 8, LINE_TABULATION = 11, SHIFT_OUT = 14, INFORMATION_SEPARATOR_ONE = 31, DELETE = 127, EOF = -1, ZERO = 48, a = 97, e = 101, f = 102, u = 117, z = 122, A = 65, E = 69, F = 70, U = 85, Z = 90, isDigit = function(A2) {
  return ZERO <= A2 && A2 <= 57;
}, isSurrogateCodePoint = function(A2) {
  return 55296 <= A2 && A2 <= 57343;
}, isHex = function(e2) {
  return isDigit(e2) || A <= e2 && e2 <= F || a <= e2 && e2 <= f;
}, isLowerCaseLetter = function(A2) {
  return a <= A2 && A2 <= z;
}, isUpperCaseLetter = function(e2) {
  return A <= e2 && e2 <= Z;
}, isLetter = function(A2) {
  return isLowerCaseLetter(A2) || isUpperCaseLetter(A2);
}, isNonASCIICodePoint = function(A2) {
  return CONTROL <= A2;
}, isWhiteSpace = function(A2) {
  return A2 === LINE_FEED || A2 === CHARACTER_TABULATION || A2 === SPACE;
}, isNameStartCodePoint = function(A2) {
  return isLetter(A2) || isNonASCIICodePoint(A2) || A2 === LOW_LINE;
}, isNameCodePoint = function(A2) {
  return isNameStartCodePoint(A2) || isDigit(A2) || A2 === HYPHEN_MINUS;
}, isNonPrintableCodePoint = function(A2) {
  return NULL <= A2 && A2 <= BACKSPACE || A2 === LINE_TABULATION || SHIFT_OUT <= A2 && A2 <= INFORMATION_SEPARATOR_ONE || A2 === DELETE;
}, isValidEscape = function(A2, e2) {
  return A2 === REVERSE_SOLIDUS && e2 !== LINE_FEED;
}, isIdentifierStart = function(A2, e2, u2) {
  return A2 === HYPHEN_MINUS ? isNameStartCodePoint(e2) || isValidEscape(e2, u2) : !!isNameStartCodePoint(A2) || !(A2 !== REVERSE_SOLIDUS || !isValidEscape(A2, e2));
}, isNumberStart = function(A2, e2, u2) {
  return A2 === PLUS_SIGN || A2 === HYPHEN_MINUS ? !!isDigit(e2) || e2 === FULL_STOP && isDigit(u2) : isDigit(A2 === FULL_STOP ? e2 : A2);
}, stringToNumber = function(A2) {
  for (var u2 = 0, t = 1, d = (A2[u2] !== PLUS_SIGN && A2[u2] !== HYPHEN_MINUS || (A2[u2] === HYPHEN_MINUS && (t = -1), u2++), []); isDigit(A2[u2]); )
    d.push(A2[u2++]);
  for (var n = d.length ? parseInt(fromCodePoint$1.apply(void 0, d), 10) : 0, r = (A2[u2] === FULL_STOP && u2++, []); isDigit(A2[u2]); )
    r.push(A2[u2++]);
  for (var a2 = r.length, o = a2 ? parseInt(fromCodePoint$1.apply(void 0, r), 10) : 0, c = (A2[u2] !== E && A2[u2] !== e || u2++, 1), i = (A2[u2] !== PLUS_SIGN && A2[u2] !== HYPHEN_MINUS || (A2[u2] === HYPHEN_MINUS && (c = -1), u2++), []); isDigit(A2[u2]); )
    i.push(A2[u2++]);
  var f2 = i.length ? parseInt(fromCodePoint$1.apply(void 0, i), 10) : 0;
  return t * (n + o * Math.pow(10, -a2)) * Math.pow(10, c * f2);
}, LEFT_PARENTHESIS_TOKEN = { type: 2 }, RIGHT_PARENTHESIS_TOKEN = { type: 3 }, COMMA_TOKEN = { type: 4 }, SUFFIX_MATCH_TOKEN = { type: 13 }, PREFIX_MATCH_TOKEN = { type: 8 }, COLUMN_TOKEN = { type: 21 }, DASH_MATCH_TOKEN = { type: 9 }, INCLUDE_MATCH_TOKEN = { type: 10 }, LEFT_CURLY_BRACKET_TOKEN = { type: 11 }, RIGHT_CURLY_BRACKET_TOKEN = { type: 12 }, SUBSTRING_MATCH_TOKEN = { type: 14 }, BAD_URL_TOKEN = { type: 23 }, BAD_STRING_TOKEN = { type: 1 }, CDO_TOKEN = { type: 25 }, CDC_TOKEN = { type: 24 }, COLON_TOKEN = { type: 26 }, SEMICOLON_TOKEN = { type: 27 }, LEFT_SQUARE_BRACKET_TOKEN = { type: 28 }, RIGHT_SQUARE_BRACKET_TOKEN = { type: 29 }, WHITESPACE_TOKEN = { type: 31 }, EOF_TOKEN = { type: 32 }, Tokenizer = function() {
  function A2() {
    this._value = [];
  }
  return A2.prototype.write = function(A3) {
    this._value = this._value.concat(toCodePoints$1(A3));
  }, A2.prototype.read = function() {
    for (var A3 = [], e2 = this.consumeToken(); e2 !== EOF_TOKEN; )
      A3.push(e2), e2 = this.consumeToken();
    return A3;
  }, A2.prototype.consumeToken = function() {
    var A3 = this.consumeCodePoint();
    switch (A3) {
      case QUOTATION_MARK:
        return this.consumeStringToken(QUOTATION_MARK);
      case NUMBER_SIGN:
        var e2 = this.peekCodePoint(0), t = this.peekCodePoint(1), d = this.peekCodePoint(2);
        if (isNameCodePoint(e2) || isValidEscape(t, d))
          return e2 = isIdentifierStart(e2, t, d) ? FLAG_ID : FLAG_UNRESTRICTED, { type: 5, value: this.consumeName(), flags: e2 };
        break;
      case DOLLAR_SIGN:
        if (this.peekCodePoint(0) === EQUALS_SIGN)
          return this.consumeCodePoint(), SUFFIX_MATCH_TOKEN;
        break;
      case APOSTROPHE:
        return this.consumeStringToken(APOSTROPHE);
      case LEFT_PARENTHESIS:
        return LEFT_PARENTHESIS_TOKEN;
      case RIGHT_PARENTHESIS:
        return RIGHT_PARENTHESIS_TOKEN;
      case ASTERISK:
        if (this.peekCodePoint(0) === EQUALS_SIGN)
          return this.consumeCodePoint(), SUBSTRING_MATCH_TOKEN;
        break;
      case PLUS_SIGN:
        if (isNumberStart(A3, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A3), this.consumeNumericToken();
        break;
      case COMMA:
        return COMMA_TOKEN;
      case HYPHEN_MINUS:
        t = A3, d = this.peekCodePoint(0), e2 = this.peekCodePoint(1);
        if (isNumberStart(t, d, e2))
          return this.reconsumeCodePoint(A3), this.consumeNumericToken();
        if (isIdentifierStart(t, d, e2))
          return this.reconsumeCodePoint(A3), this.consumeIdentLikeToken();
        if (d === HYPHEN_MINUS && e2 === GREATER_THAN_SIGN)
          return this.consumeCodePoint(), this.consumeCodePoint(), CDC_TOKEN;
        break;
      case FULL_STOP:
        if (isNumberStart(A3, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A3), this.consumeNumericToken();
        break;
      case SOLIDUS:
        if (this.peekCodePoint(0) === ASTERISK)
          for (this.consumeCodePoint(); ; ) {
            var n = this.consumeCodePoint();
            if (n === ASTERISK && (n = this.consumeCodePoint()) === SOLIDUS)
              return this.consumeToken();
            if (n === EOF)
              return this.consumeToken();
          }
        break;
      case COLON:
        return COLON_TOKEN;
      case SEMICOLON:
        return SEMICOLON_TOKEN;
      case LESS_THAN_SIGN:
        if (this.peekCodePoint(0) === EXCLAMATION_MARK && this.peekCodePoint(1) === HYPHEN_MINUS && this.peekCodePoint(2) === HYPHEN_MINUS)
          return this.consumeCodePoint(), this.consumeCodePoint(), CDO_TOKEN;
        break;
      case COMMERCIAL_AT:
        t = this.peekCodePoint(0), d = this.peekCodePoint(1), e2 = this.peekCodePoint(2);
        if (isIdentifierStart(t, d, e2))
          return { type: 7, value: this.consumeName() };
        break;
      case LEFT_SQUARE_BRACKET:
        return LEFT_SQUARE_BRACKET_TOKEN;
      case REVERSE_SOLIDUS:
        if (isValidEscape(A3, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A3), this.consumeIdentLikeToken();
        break;
      case RIGHT_SQUARE_BRACKET:
        return RIGHT_SQUARE_BRACKET_TOKEN;
      case CIRCUMFLEX_ACCENT:
        if (this.peekCodePoint(0) === EQUALS_SIGN)
          return this.consumeCodePoint(), PREFIX_MATCH_TOKEN;
        break;
      case LEFT_CURLY_BRACKET:
        return LEFT_CURLY_BRACKET_TOKEN;
      case RIGHT_CURLY_BRACKET:
        return RIGHT_CURLY_BRACKET_TOKEN;
      case u:
      case U:
        t = this.peekCodePoint(0), d = this.peekCodePoint(1);
        return t !== PLUS_SIGN || !isHex(d) && d !== QUESTION_MARK || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A3), this.consumeIdentLikeToken();
      case VERTICAL_LINE:
        if (this.peekCodePoint(0) === EQUALS_SIGN)
          return this.consumeCodePoint(), DASH_MATCH_TOKEN;
        if (this.peekCodePoint(0) === VERTICAL_LINE)
          return this.consumeCodePoint(), COLUMN_TOKEN;
        break;
      case TILDE:
        if (this.peekCodePoint(0) === EQUALS_SIGN)
          return this.consumeCodePoint(), INCLUDE_MATCH_TOKEN;
        break;
      case EOF:
        return EOF_TOKEN;
    }
    return isWhiteSpace(A3) ? (this.consumeWhiteSpace(), WHITESPACE_TOKEN) : isDigit(A3) ? (this.reconsumeCodePoint(A3), this.consumeNumericToken()) : isNameStartCodePoint(A3) ? (this.reconsumeCodePoint(A3), this.consumeIdentLikeToken()) : { type: 6, value: fromCodePoint$1(A3) };
  }, A2.prototype.consumeCodePoint = function() {
    var A3 = this._value.shift();
    return void 0 === A3 ? -1 : A3;
  }, A2.prototype.reconsumeCodePoint = function(A3) {
    this._value.unshift(A3);
  }, A2.prototype.peekCodePoint = function(A3) {
    return A3 >= this._value.length ? -1 : this._value[A3];
  }, A2.prototype.consumeUnicodeRangeToken = function() {
    for (var A3 = [], e2 = this.consumeCodePoint(); isHex(e2) && A3.length < 6; )
      A3.push(e2), e2 = this.consumeCodePoint();
    for (var u2 = false; e2 === QUESTION_MARK && A3.length < 6; )
      A3.push(e2), e2 = this.consumeCodePoint(), u2 = true;
    if (u2)
      return { type: 30, start: parseInt(fromCodePoint$1.apply(void 0, A3.map(function(A4) {
        return A4 === QUESTION_MARK ? ZERO : A4;
      })), 16), end: parseInt(fromCodePoint$1.apply(void 0, A3.map(function(A4) {
        return A4 === QUESTION_MARK ? F : A4;
      })), 16) };
    var t = parseInt(fromCodePoint$1.apply(void 0, A3), 16);
    if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
      this.consumeCodePoint();
      for (var e2 = this.consumeCodePoint(), d = []; isHex(e2) && d.length < 6; )
        d.push(e2), e2 = this.consumeCodePoint();
      return { type: 30, start: t, end: parseInt(fromCodePoint$1.apply(void 0, d), 16) };
    }
    return { type: 30, start: t, end: t };
  }, A2.prototype.consumeIdentLikeToken = function() {
    var A3 = this.consumeName();
    return "url" === A3.toLowerCase() && this.peekCodePoint(0) === LEFT_PARENTHESIS ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === LEFT_PARENTHESIS ? (this.consumeCodePoint(), { type: 19, value: A3 }) : { type: 20, value: A3 };
  }, A2.prototype.consumeUrlToken = function() {
    var A3 = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === EOF)
      return { type: 22, value: "" };
    var e2 = this.peekCodePoint(0);
    if (e2 === APOSTROPHE || e2 === QUOTATION_MARK)
      return 0 === (e2 = this.consumeStringToken(this.consumeCodePoint())).type && (this.consumeWhiteSpace(), this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) ? (this.consumeCodePoint(), { type: 22, value: e2.value }) : (this.consumeBadUrlRemnants(), BAD_URL_TOKEN);
    for (; ; ) {
      var u2 = this.consumeCodePoint();
      if (u2 === EOF || u2 === RIGHT_PARENTHESIS)
        return { type: 22, value: fromCodePoint$1.apply(void 0, A3) };
      if (isWhiteSpace(u2))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS ? (this.consumeCodePoint(), { type: 22, value: fromCodePoint$1.apply(void 0, A3) }) : (this.consumeBadUrlRemnants(), BAD_URL_TOKEN);
      if (u2 === QUOTATION_MARK || u2 === APOSTROPHE || u2 === LEFT_PARENTHESIS || isNonPrintableCodePoint(u2))
        return this.consumeBadUrlRemnants(), BAD_URL_TOKEN;
      if (u2 === REVERSE_SOLIDUS) {
        if (!isValidEscape(u2, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), BAD_URL_TOKEN;
        A3.push(this.consumeEscapedCodePoint());
      } else
        A3.push(u2);
    }
  }, A2.prototype.consumeWhiteSpace = function() {
    for (; isWhiteSpace(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, A2.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var A3 = this.consumeCodePoint();
      if (A3 === RIGHT_PARENTHESIS || A3 === EOF)
        return;
      isValidEscape(A3, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }, A2.prototype.consumeStringSlice = function(A3) {
    for (var e2 = ""; 0 < A3; ) {
      var u2 = Math.min(5e4, A3);
      e2 += fromCodePoint$1.apply(void 0, this._value.splice(0, u2)), A3 -= u2;
    }
    return this._value.shift(), e2;
  }, A2.prototype.consumeStringToken = function(A3) {
    for (var e2 = "", u2 = 0; ; ) {
      var t, d = this._value[u2];
      if (d === EOF || void 0 === d || d === A3)
        return { type: 0, value: e2 += this.consumeStringSlice(u2) };
      if (d === LINE_FEED)
        return this._value.splice(0, u2), BAD_STRING_TOKEN;
      d === REVERSE_SOLIDUS && (t = this._value[u2 + 1]) !== EOF && void 0 !== t && (t === LINE_FEED ? (e2 += this.consumeStringSlice(u2), u2 = -1, this._value.shift()) : isValidEscape(d, t) && (e2 = (e2 += this.consumeStringSlice(u2)) + fromCodePoint$1(this.consumeEscapedCodePoint()), u2 = -1)), u2++;
    }
  }, A2.prototype.consumeNumber = function() {
    var A3 = [], u2 = FLAG_INTEGER;
    for ((t = this.peekCodePoint(0)) !== PLUS_SIGN && t !== HYPHEN_MINUS || A3.push(this.consumeCodePoint()); isDigit(this.peekCodePoint(0)); )
      A3.push(this.consumeCodePoint());
    var t = this.peekCodePoint(0), d = this.peekCodePoint(1);
    if (t === FULL_STOP && isDigit(d))
      for (A3.push(this.consumeCodePoint(), this.consumeCodePoint()), u2 = FLAG_NUMBER; isDigit(this.peekCodePoint(0)); )
        A3.push(this.consumeCodePoint());
    t = this.peekCodePoint(0);
    var d = this.peekCodePoint(1), n = this.peekCodePoint(2);
    if ((t === E || t === e) && ((d === PLUS_SIGN || d === HYPHEN_MINUS) && isDigit(n) || isDigit(d)))
      for (A3.push(this.consumeCodePoint(), this.consumeCodePoint()), u2 = FLAG_NUMBER; isDigit(this.peekCodePoint(0)); )
        A3.push(this.consumeCodePoint());
    return [stringToNumber(A3), u2];
  }, A2.prototype.consumeNumericToken = function() {
    var A3 = this.consumeNumber(), e2 = A3[0], A3 = A3[1], u2 = this.peekCodePoint(0), t = this.peekCodePoint(1), d = this.peekCodePoint(2);
    return isIdentifierStart(u2, t, d) ? { type: 15, number: e2, flags: A3, unit: this.consumeName() } : u2 === PERCENTAGE_SIGN ? (this.consumeCodePoint(), { type: 16, number: e2, flags: A3 }) : { type: 17, number: e2, flags: A3 };
  }, A2.prototype.consumeEscapedCodePoint = function() {
    var A3 = this.consumeCodePoint();
    if (isHex(A3)) {
      for (var e2 = fromCodePoint$1(A3); isHex(this.peekCodePoint(0)) && e2.length < 6; )
        e2 += fromCodePoint$1(this.consumeCodePoint());
      isWhiteSpace(this.peekCodePoint(0)) && this.consumeCodePoint();
      var u2 = parseInt(e2, 16);
      return 0 === u2 || isSurrogateCodePoint(u2) || 1114111 < u2 ? REPLACEMENT_CHARACTER : u2;
    }
    return A3 === EOF ? REPLACEMENT_CHARACTER : A3;
  }, A2.prototype.consumeName = function() {
    for (var A3 = ""; ; ) {
      var e2 = this.consumeCodePoint();
      if (isNameCodePoint(e2))
        A3 += fromCodePoint$1(e2);
      else {
        if (!isValidEscape(e2, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(e2), A3;
        A3 += fromCodePoint$1(this.consumeEscapedCodePoint());
      }
    }
  }, A2;
}(), Parser = function() {
  function u2(A2) {
    this._tokens = A2;
  }
  return u2.create = function(A2) {
    var e2 = new Tokenizer();
    return e2.write(A2), new u2(e2.read());
  }, u2.parseValue = function(A2) {
    return u2.create(A2).parseComponentValue();
  }, u2.parseValues = function(A2) {
    return u2.create(A2).parseComponentValues();
  }, u2.prototype.parseComponentValue = function() {
    for (var A2 = this.consumeToken(); 31 === A2.type; )
      A2 = this.consumeToken();
    if (32 === A2.type)
      throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
    this.reconsumeToken(A2);
    for (var e2 = this.consumeComponentValue(); 31 === (A2 = this.consumeToken()).type; )
      ;
    if (32 === A2.type)
      return e2;
    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
  }, u2.prototype.parseComponentValues = function() {
    for (var A2 = []; ; ) {
      var e2 = this.consumeComponentValue();
      if (32 === e2.type)
        return A2;
      A2.push(e2), A2.push();
    }
  }, u2.prototype.consumeComponentValue = function() {
    var A2 = this.consumeToken();
    switch (A2.type) {
      case 11:
      case 28:
      case 2:
        return this.consumeSimpleBlock(A2.type);
      case 19:
        return this.consumeFunction(A2);
    }
    return A2;
  }, u2.prototype.consumeSimpleBlock = function(A2) {
    for (var e2 = { type: A2, values: [] }, u3 = this.consumeToken(); ; ) {
      if (32 === u3.type || isEndingTokenFor(u3, A2))
        return e2;
      this.reconsumeToken(u3), e2.values.push(this.consumeComponentValue()), u3 = this.consumeToken();
    }
  }, u2.prototype.consumeFunction = function(A2) {
    for (var e2 = { name: A2.value, values: [], type: 18 }; ; ) {
      var u3 = this.consumeToken();
      if (32 === u3.type || 3 === u3.type)
        return e2;
      this.reconsumeToken(u3), e2.values.push(this.consumeComponentValue());
    }
  }, u2.prototype.consumeToken = function() {
    var A2 = this._tokens.shift();
    return void 0 === A2 ? EOF_TOKEN : A2;
  }, u2.prototype.reconsumeToken = function(A2) {
    this._tokens.unshift(A2);
  }, u2;
}(), isDimensionToken = function(A2) {
  return 15 === A2.type;
}, isNumberToken = function(A2) {
  return 17 === A2.type;
}, isIdentToken = function(A2) {
  return 20 === A2.type;
}, isIdentWithValue = function(A2, e2) {
  return isIdentToken(A2) && A2.value === e2;
}, nonFunctionArgSeparator = function(A2) {
  return 31 !== A2.type && 4 !== A2.type;
}, parseFunctionArgs = function(A2) {
  var e2 = [], u2 = [];
  return A2.forEach(function(A3) {
    if (4 === A3.type) {
      if (0 === u2.length)
        throw new Error("Error parsing function args, zero tokens for arg");
      e2.push(u2), u2 = [];
    } else
      31 !== A3.type && u2.push(A3);
  }), u2.length && e2.push(u2), e2;
}, isEndingTokenFor = function(A2, e2) {
  return 11 === e2 && 12 === A2.type || 28 === e2 && 29 === A2.type || 2 === e2 && 3 === A2.type;
}, isLength = function(A2) {
  return 17 === A2.type || 15 === A2.type;
}, isLengthPercentage = function(A2) {
  return 16 === A2.type || isLength(A2);
}, parseLengthPercentageTuple = function(A2) {
  return 1 < A2.length ? [A2[0], A2[1]] : [A2[0]];
}, ZERO_LENGTH = { type: 17, number: 0, flags: FLAG_INTEGER }, FIFTY_PERCENT = { type: 16, number: 50, flags: FLAG_INTEGER }, HUNDRED_PERCENT = { type: 16, number: 100, flags: FLAG_INTEGER }, getAbsoluteValueForTuple = function(A2, e2, u2) {
  var t = A2[0], A2 = A2[1];
  return [getAbsoluteValue(t, e2), getAbsoluteValue(void 0 !== A2 ? A2 : t, u2)];
}, getAbsoluteValue = function(A2, e2) {
  if (16 === A2.type)
    return A2.number / 100 * e2;
  if (isDimensionToken(A2))
    switch (A2.unit) {
      case "rem":
      case "em":
        return 16 * A2.number;
      default:
        return A2.number;
    }
  return A2.number;
}, DEG = "deg", GRAD = "grad", RAD = "rad", TURN = "turn", angle = { name: "angle", parse: function(A2, e2) {
  if (15 === e2.type)
    switch (e2.unit) {
      case DEG:
        return Math.PI * e2.number / 180;
      case GRAD:
        return Math.PI / 200 * e2.number;
      case RAD:
        return e2.number;
      case TURN:
        return 2 * Math.PI * e2.number;
    }
  throw new Error("Unsupported angle type");
} }, isAngle = function(A2) {
  return 15 === A2.type && (A2.unit === DEG || A2.unit === GRAD || A2.unit === RAD || A2.unit === TURN);
}, parseNamedSide = function(A2) {
  switch (A2.filter(isIdentToken).map(function(A3) {
    return A3.value;
  }).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [ZERO_LENGTH, ZERO_LENGTH];
    case "to top":
    case "bottom":
      return deg(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [ZERO_LENGTH, HUNDRED_PERCENT];
    case "to right":
    case "left":
      return deg(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [HUNDRED_PERCENT, HUNDRED_PERCENT];
    case "to bottom":
    case "top":
      return deg(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [HUNDRED_PERCENT, ZERO_LENGTH];
    case "to left":
    case "right":
      return deg(270);
  }
  return 0;
}, deg = function(A2) {
  return Math.PI * A2 / 180;
}, color$1 = { name: "color", parse: function(A2, e2) {
  if (18 === e2.type) {
    var u2 = SUPPORTED_COLOR_FUNCTIONS[e2.name];
    if (void 0 === u2)
      throw new Error('Attempting to parse an unsupported color function "' + e2.name + '"');
    return u2(A2, e2.values);
  }
  if (5 === e2.type) {
    var t, d, n, r;
    if (3 === e2.value.length)
      return t = e2.value.substring(0, 1), d = e2.value.substring(1, 2), n = e2.value.substring(2, 3), pack(parseInt(t + t, 16), parseInt(d + d, 16), parseInt(n + n, 16), 1);
    if (4 === e2.value.length)
      return t = e2.value.substring(0, 1), d = e2.value.substring(1, 2), n = e2.value.substring(2, 3), r = e2.value.substring(3, 4), pack(parseInt(t + t, 16), parseInt(d + d, 16), parseInt(n + n, 16), parseInt(r + r, 16) / 255);
    if (6 === e2.value.length)
      return t = e2.value.substring(0, 2), d = e2.value.substring(2, 4), n = e2.value.substring(4, 6), pack(parseInt(t, 16), parseInt(d, 16), parseInt(n, 16), 1);
    if (8 === e2.value.length)
      return t = e2.value.substring(0, 2), d = e2.value.substring(2, 4), n = e2.value.substring(4, 6), r = e2.value.substring(6, 8), pack(parseInt(t, 16), parseInt(d, 16), parseInt(n, 16), parseInt(r, 16) / 255);
  }
  if (20 === e2.type) {
    u2 = COLORS[e2.value.toUpperCase()];
    if (void 0 !== u2)
      return u2;
  }
  return COLORS.TRANSPARENT;
} }, isTransparent = function(A2) {
  return 0 == (255 & A2);
}, asString = function(A2) {
  var e2 = 255 & A2, u2 = 255 & A2 >> 8, t = 255 & A2 >> 16, A2 = 255 & A2 >> 24;
  return e2 < 255 ? "rgba(" + A2 + "," + t + "," + u2 + "," + e2 / 255 + ")" : "rgb(" + A2 + "," + t + "," + u2 + ")";
}, pack = function(A2, e2, u2, t) {
  return (A2 << 24 | e2 << 16 | u2 << 8 | Math.round(255 * t) << 0) >>> 0;
}, getTokenColorValue = function(A2, e2) {
  var u2;
  return 17 === A2.type ? A2.number : 16 === A2.type ? (u2 = 3 === e2 ? 1 : 255, 3 === e2 ? A2.number / 100 * u2 : Math.round(A2.number / 100 * u2)) : 0;
}, rgb = function(A2, e2) {
  var u2, t, d, e2 = e2.filter(nonFunctionArgSeparator);
  return 3 === e2.length ? (u2 = (d = e2.map(getTokenColorValue))[0], t = d[1], d = d[2], pack(u2, t, d, 1)) : 4 === e2.length ? (u2 = (e2 = e2.map(getTokenColorValue))[0], t = e2[1], d = e2[2], e2 = e2[3], pack(u2, t, d, e2)) : 0;
};
function hue2rgb(A2, e2, u2) {
  return u2 < 0 && (u2 += 1), 1 <= u2 && --u2, u2 < 1 / 6 ? (e2 - A2) * u2 * 6 + A2 : u2 < 0.5 ? e2 : u2 < 2 / 3 ? 6 * (e2 - A2) * (2 / 3 - u2) + A2 : A2;
}
var hsl = function(A2, e2) {
  var u2, e2 = e2.filter(nonFunctionArgSeparator), t = e2[0], d = e2[1], n = e2[2], e2 = e2[3], A2 = (17 === t.type ? deg(t.number) : angle.parse(A2, t)) / (2 * Math.PI), t = isLengthPercentage(d) ? d.number / 100 : 0, d = isLengthPercentage(n) ? n.number / 100 : 0, n = void 0 !== e2 && isLengthPercentage(e2) ? getAbsoluteValue(e2, 1) : 1;
  return 0 == t ? pack(255 * d, 255 * d, 255 * d, 1) : (t = hue2rgb(d = 2 * d - (e2 = d <= 0.5 ? d * (1 + t) : d + t - d * t), e2, A2 + 1 / 3), u2 = hue2rgb(d, e2, A2), d = hue2rgb(d, e2, A2 - 1 / 3), pack(255 * t, 255 * u2, 255 * d, n));
}, SUPPORTED_COLOR_FUNCTIONS = { hsl, hsla: hsl, rgb, rgba: rgb }, parseColor = function(A2, e2) {
  return color$1.parse(A2, Parser.create(e2).parseComponentValue());
}, COLORS = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, backgroundClip = { name: "background-clip", initialValue: "border-box", prefix: false, type: 1, parse: function(A2, e2) {
  return e2.map(function(A3) {
    if (isIdentToken(A3))
      switch (A3.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, backgroundColor = { name: "background-color", initialValue: "transparent", prefix: false, type: 3, format: "color" }, parseColorStop = function(A2, e2) {
  A2 = color$1.parse(A2, e2[0]), e2 = e2[1];
  return e2 && isLengthPercentage(e2) ? { color: A2, stop: e2 } : { color: A2, stop: null };
}, processColorStops = function(A2, u2) {
  for (var e2 = A2[0], t = A2[A2.length - 1], d = (null === e2.stop && (e2.stop = ZERO_LENGTH), null === t.stop && (t.stop = HUNDRED_PERCENT), []), n = 0, r = 0; r < A2.length; r++) {
    var a2 = A2[r].stop;
    null !== a2 ? (a2 = getAbsoluteValue(a2, u2), d.push(n < a2 ? a2 : n), n = a2) : d.push(null);
  }
  for (var o = null, r = 0; r < d.length; r++) {
    var c = d[r];
    if (null === c)
      null === o && (o = r);
    else if (null !== o) {
      for (var i = r - o, f2 = (c - d[o - 1]) / (1 + i), s = 1; s <= i; s++)
        d[o + s - 1] = f2 * s;
      o = null;
    }
  }
  return A2.map(function(A3, e3) {
    return { color: A3.color, stop: Math.max(Math.min(1, d[e3] / u2), 0) };
  });
}, getAngleFromCorner = function(A2, e2, u2) {
  var t = e2 / 2, d = u2 / 2, e2 = getAbsoluteValue(A2[0], e2) - t, t = d - getAbsoluteValue(A2[1], u2);
  return (Math.atan2(t, e2) + 2 * Math.PI) % (2 * Math.PI);
}, calculateGradientDirection = function(A2, e2, u2) {
  var A2 = "number" == typeof A2 ? A2 : getAngleFromCorner(A2, e2, u2), t = Math.abs(e2 * Math.sin(A2)) + Math.abs(u2 * Math.cos(A2)), e2 = e2 / 2, u2 = u2 / 2, d = t / 2, n = Math.sin(A2 - Math.PI / 2) * d, A2 = Math.cos(A2 - Math.PI / 2) * d;
  return [t, e2 - A2, e2 + A2, u2 - n, u2 + n];
}, distance = function(A2, e2) {
  return Math.sqrt(A2 * A2 + e2 * e2);
}, findCorner = function(A2, e2, d, n, r) {
  return [[0, 0], [0, e2], [A2, 0], [A2, e2]].reduce(function(A3, e3) {
    var u2 = e3[0], t = e3[1], u2 = distance(d - u2, n - t);
    return (r ? u2 < A3.optimumDistance : u2 > A3.optimumDistance) ? { optimumCorner: e3, optimumDistance: u2 } : A3;
  }, { optimumDistance: r ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, calculateRadius = function(A2, e2, u2, t, d) {
  var n, r, a2, o, c = 0, i = 0;
  switch (A2.size) {
    case 0:
      0 === A2.shape ? c = i = Math.min(Math.abs(e2), Math.abs(e2 - t), Math.abs(u2), Math.abs(u2 - d)) : 1 === A2.shape && (c = Math.min(Math.abs(e2), Math.abs(e2 - t)), i = Math.min(Math.abs(u2), Math.abs(u2 - d)));
      break;
    case 2:
      0 === A2.shape ? c = i = Math.min(distance(e2, u2), distance(e2, u2 - d), distance(e2 - t, u2), distance(e2 - t, u2 - d)) : 1 === A2.shape && (n = Math.min(Math.abs(u2), Math.abs(u2 - d)) / Math.min(Math.abs(e2), Math.abs(e2 - t)), a2 = (o = findCorner(t, d, e2, u2, true))[0], o = o[1], i = n * (c = distance(a2 - e2, (o - u2) / n)));
      break;
    case 1:
      0 === A2.shape ? c = i = Math.max(Math.abs(e2), Math.abs(e2 - t), Math.abs(u2), Math.abs(u2 - d)) : 1 === A2.shape && (c = Math.max(Math.abs(e2), Math.abs(e2 - t)), i = Math.max(Math.abs(u2), Math.abs(u2 - d)));
      break;
    case 3:
      0 === A2.shape ? c = i = Math.max(distance(e2, u2), distance(e2, u2 - d), distance(e2 - t, u2), distance(e2 - t, u2 - d)) : 1 === A2.shape && (n = Math.max(Math.abs(u2), Math.abs(u2 - d)) / Math.max(Math.abs(e2), Math.abs(e2 - t)), a2 = (r = findCorner(t, d, e2, u2, false))[0], o = r[1], i = n * (c = distance(a2 - e2, (o - u2) / n)));
  }
  return Array.isArray(A2.size) && (c = getAbsoluteValue(A2.size[0], t), i = 2 === A2.size.length ? getAbsoluteValue(A2.size[1], d) : c), [c, i];
}, linearGradient = function(u2, A2) {
  var t = deg(180), d = [];
  return parseFunctionArgs(A2).forEach(function(A3, e2) {
    if (0 === e2) {
      e2 = A3[0];
      if (20 === e2.type && "to" === e2.value)
        return void (t = parseNamedSide(A3));
      if (isAngle(e2))
        return void (t = angle.parse(u2, e2));
    }
    e2 = parseColorStop(u2, A3);
    d.push(e2);
  }), { angle: t, stops: d, type: 1 };
}, prefixLinearGradient = function(u2, A2) {
  var t = deg(180), d = [];
  return parseFunctionArgs(A2).forEach(function(A3, e2) {
    if (0 === e2) {
      e2 = A3[0];
      if (20 === e2.type && -1 !== ["top", "left", "right", "bottom"].indexOf(e2.value))
        return void (t = parseNamedSide(A3));
      if (isAngle(e2))
        return void (t = (angle.parse(u2, e2) + deg(270)) % deg(360));
    }
    e2 = parseColorStop(u2, A3);
    d.push(e2);
  }), { angle: t, stops: d, type: 1 };
}, webkitGradient = function(t, A2) {
  var e2 = deg(180), d = [], n = 1;
  return parseFunctionArgs(A2).forEach(function(A3, e3) {
    var u2, A3 = A3[0];
    if (0 === e3) {
      if (isIdentToken(A3) && "linear" === A3.value)
        return void (n = 1);
      if (isIdentToken(A3) && "radial" === A3.value)
        return void (n = 2);
    }
    18 === A3.type && ("from" === A3.name ? (u2 = color$1.parse(t, A3.values[0]), d.push({ stop: ZERO_LENGTH, color: u2 })) : "to" === A3.name ? (u2 = color$1.parse(t, A3.values[0]), d.push({ stop: HUNDRED_PERCENT, color: u2 })) : "color-stop" === A3.name && 2 === (e3 = A3.values.filter(nonFunctionArgSeparator)).length && (u2 = color$1.parse(t, e3[1]), A3 = e3[0], isNumberToken(A3)) && d.push({ stop: { type: 16, number: 100 * A3.number, flags: A3.flags }, color: u2 }));
  }), 1 === n ? { angle: (e2 + deg(180)) % deg(360), stops: d, type: n } : { size: 3, shape: 0, stops: d, position: [], type: n };
}, CLOSEST_SIDE = "closest-side", FARTHEST_SIDE = "farthest-side", CLOSEST_CORNER = "closest-corner", FARTHEST_CORNER = "farthest-corner", CIRCLE = "circle", ELLIPSE = "ellipse", COVER = "cover", CONTAIN = "contain", radialGradient = function(d, A2) {
  var n = 0, r = 3, a2 = [], o = [];
  return parseFunctionArgs(A2).forEach(function(A3, e2) {
    var u2, t = true;
    0 === e2 && (u2 = false, t = A3.reduce(function(A4, e3) {
      if (u2)
        if (isIdentToken(e3))
          switch (e3.value) {
            case "center":
              return o.push(FIFTY_PERCENT), A4;
            case "top":
            case "left":
              return o.push(ZERO_LENGTH), A4;
            case "right":
            case "bottom":
              return o.push(HUNDRED_PERCENT), A4;
          }
        else
          (isLengthPercentage(e3) || isLength(e3)) && o.push(e3);
      else if (isIdentToken(e3))
        switch (e3.value) {
          case CIRCLE:
            return n = 0, false;
          case ELLIPSE:
            return !(n = 1);
          case "at":
            return !(u2 = true);
          case CLOSEST_SIDE:
            return r = 0, false;
          case COVER:
          case FARTHEST_SIDE:
            return !(r = 1);
          case CONTAIN:
          case CLOSEST_CORNER:
            return !(r = 2);
          case FARTHEST_CORNER:
            return !(r = 3);
        }
      else if (isLength(e3) || isLengthPercentage(e3))
        return (r = Array.isArray(r) ? r : []).push(e3), false;
      return A4;
    }, t)), t && (e2 = parseColorStop(d, A3), a2.push(e2));
  }), { size: r, shape: n, stops: a2, position: o, type: 2 };
}, prefixRadialGradient = function(t, A2) {
  var d = 0, n = 3, r = [], a2 = [];
  return parseFunctionArgs(A2).forEach(function(A3, e2) {
    var u2 = true;
    0 === e2 ? u2 = A3.reduce(function(A4, e3) {
      if (isIdentToken(e3))
        switch (e3.value) {
          case "center":
            return a2.push(FIFTY_PERCENT), false;
          case "top":
          case "left":
            return a2.push(ZERO_LENGTH), false;
          case "right":
          case "bottom":
            return a2.push(HUNDRED_PERCENT), false;
        }
      else if (isLengthPercentage(e3) || isLength(e3))
        return a2.push(e3), false;
      return A4;
    }, u2) : 1 === e2 && (u2 = A3.reduce(function(A4, e3) {
      if (isIdentToken(e3))
        switch (e3.value) {
          case CIRCLE:
            return d = 0, false;
          case ELLIPSE:
            return !(d = 1);
          case CONTAIN:
          case CLOSEST_SIDE:
            return n = 0, false;
          case FARTHEST_SIDE:
            return !(n = 1);
          case CLOSEST_CORNER:
            return !(n = 2);
          case COVER:
          case FARTHEST_CORNER:
            return !(n = 3);
        }
      else if (isLength(e3) || isLengthPercentage(e3))
        return (n = Array.isArray(n) ? n : []).push(e3), false;
      return A4;
    }, u2)), u2 && (e2 = parseColorStop(t, A3), r.push(e2));
  }), { size: n, shape: d, stops: r, position: a2, type: 2 };
}, isLinearGradient = function(A2) {
  return 1 === A2.type;
}, isRadialGradient = function(A2) {
  return 2 === A2.type;
}, image = { name: "image", parse: function(A2, e2) {
  if (22 === e2.type)
    return u2 = { url: e2.value, type: 0 }, A2.cache.addImage(e2.value), u2;
  if (18 !== e2.type)
    throw new Error("Unsupported image type " + e2.type);
  var u2 = SUPPORTED_IMAGE_FUNCTIONS[e2.name];
  if (void 0 === u2)
    throw new Error('Attempting to parse an unsupported image function "' + e2.name + '"');
  return u2(A2, e2.values);
} };
function isSupportedImage(A2) {
  return !(20 === A2.type && "none" === A2.value || 18 === A2.type && !SUPPORTED_IMAGE_FUNCTIONS[A2.name]);
}
for (var BACKGROUND_SIZE, LINE_BREAK, WORD_BREAK, SUPPORTED_IMAGE_FUNCTIONS = { "linear-gradient": linearGradient, "-moz-linear-gradient": prefixLinearGradient, "-ms-linear-gradient": prefixLinearGradient, "-o-linear-gradient": prefixLinearGradient, "-webkit-linear-gradient": prefixLinearGradient, "radial-gradient": radialGradient, "-moz-radial-gradient": prefixRadialGradient, "-ms-radial-gradient": prefixRadialGradient, "-o-radial-gradient": prefixRadialGradient, "-webkit-radial-gradient": prefixRadialGradient, "-webkit-gradient": webkitGradient }, backgroundImage = { name: "background-image", initialValue: "none", type: 1, prefix: false, parse: function(e2, A2) {
  var u2;
  return 0 === A2.length || 20 === (u2 = A2[0]).type && "none" === u2.value ? [] : A2.filter(function(A3) {
    return nonFunctionArgSeparator(A3) && isSupportedImage(A3);
  }).map(function(A3) {
    return image.parse(e2, A3);
  });
} }, backgroundOrigin = { name: "background-origin", initialValue: "border-box", prefix: false, type: 1, parse: function(A2, e2) {
  return e2.map(function(A3) {
    if (isIdentToken(A3))
      switch (A3.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, backgroundPosition = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: false, parse: function(A2, e2) {
  return parseFunctionArgs(e2).map(function(A3) {
    return A3.filter(isLengthPercentage);
  }).map(parseLengthPercentageTuple);
} }, backgroundRepeat = { name: "background-repeat", initialValue: "repeat", prefix: false, type: 1, parse: function(A2, e2) {
  return parseFunctionArgs(e2).map(function(A3) {
    return A3.filter(isIdentToken).map(function(A4) {
      return A4.value;
    }).join(" ");
  }).map(parseBackgroundRepeat);
} }, parseBackgroundRepeat = function(A2) {
  switch (A2) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    default:
      return 0;
  }
}, backgroundSize = (!function(A2) {
  A2.AUTO = "auto", A2.CONTAIN = "contain", A2.COVER = "cover";
}(BACKGROUND_SIZE = BACKGROUND_SIZE || {}), { name: "background-size", initialValue: "0", prefix: false, type: 1, parse: function(A2, e2) {
  return parseFunctionArgs(e2).map(function(A3) {
    return A3.filter(isBackgroundSizeInfoToken);
  });
} }), isBackgroundSizeInfoToken = function(A2) {
  return isIdentToken(A2) || isLengthPercentage(A2);
}, borderColorForSide = function(A2) {
  return { name: "border-" + A2 + "-color", initialValue: "transparent", prefix: false, type: 3, format: "color" };
}, borderTopColor = borderColorForSide("top"), borderRightColor = borderColorForSide("right"), borderBottomColor = borderColorForSide("bottom"), borderLeftColor = borderColorForSide("left"), borderRadiusForSide = function(A2) {
  return { name: "border-radius-" + A2, initialValue: "0 0", prefix: false, type: 1, parse: function(A3, e2) {
    return parseLengthPercentageTuple(e2.filter(isLengthPercentage));
  } };
}, borderTopLeftRadius = borderRadiusForSide("top-left"), borderTopRightRadius = borderRadiusForSide("top-right"), borderBottomRightRadius = borderRadiusForSide("bottom-right"), borderBottomLeftRadius = borderRadiusForSide("bottom-left"), borderStyleForSide = function(A2) {
  return { name: "border-" + A2 + "-style", initialValue: "solid", prefix: false, type: 2, parse: function(A3, e2) {
    switch (e2) {
      case "none":
        return 0;
      case "dashed":
        return 2;
      case "dotted":
        return 3;
      case "double":
        return 4;
    }
    return 1;
  } };
}, borderTopStyle = borderStyleForSide("top"), borderRightStyle = borderStyleForSide("right"), borderBottomStyle = borderStyleForSide("bottom"), borderLeftStyle = borderStyleForSide("left"), borderWidthForSide = function(A2) {
  return { name: "border-" + A2 + "-width", initialValue: "0", type: 0, prefix: false, parse: function(A3, e2) {
    return isDimensionToken(e2) ? e2.number : 0;
  } };
}, borderTopWidth = borderWidthForSide("top"), borderRightWidth = borderWidthForSide("right"), borderBottomWidth = borderWidthForSide("bottom"), borderLeftWidth = borderWidthForSide("left"), color = { name: "color", initialValue: "transparent", prefix: false, type: 3, format: "color" }, direction = { name: "direction", initialValue: "ltr", prefix: false, type: 2, parse: function(A2, e2) {
  return "rtl" !== e2 ? 0 : 1;
} }, display = { name: "display", initialValue: "inline-block", prefix: false, type: 1, parse: function(A2, e2) {
  return e2.filter(isIdentToken).reduce(function(A3, e3) {
    return A3 | parseDisplayValue(e3.value);
  }, 0);
} }, parseDisplayValue = function(A2) {
  switch (A2) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, float = { name: "float", initialValue: "none", prefix: false, type: 2, parse: function(A2, e2) {
  switch (e2) {
    case "left":
      return 1;
    case "right":
      return 2;
    case "inline-start":
      return 3;
    case "inline-end":
      return 4;
  }
  return 0;
} }, letterSpacing = { name: "letter-spacing", initialValue: "0", prefix: false, type: 0, parse: function(A2, e2) {
  return !(20 === e2.type && "normal" === e2.value || 17 !== e2.type && 15 !== e2.type) ? e2.number : 0;
} }, lineBreak = (!function(A2) {
  A2.NORMAL = "normal", A2.STRICT = "strict";
}(LINE_BREAK = LINE_BREAK || {}), { name: "line-break", initialValue: "normal", prefix: false, type: 2, parse: function(A2, e2) {
  return "strict" !== e2 ? LINE_BREAK.NORMAL : LINE_BREAK.STRICT;
} }), lineHeight = { name: "line-height", initialValue: "normal", prefix: false, type: 4 }, computeLineHeight = function(A2, e2) {
  return isIdentToken(A2) && "normal" === A2.value ? 1.2 * e2 : 17 === A2.type ? e2 * A2.number : isLengthPercentage(A2) ? getAbsoluteValue(A2, e2) : e2;
}, listStyleImage = { name: "list-style-image", initialValue: "none", type: 0, prefix: false, parse: function(A2, e2) {
  return 20 === e2.type && "none" === e2.value ? null : image.parse(A2, e2);
} }, listStylePosition = { name: "list-style-position", initialValue: "outside", prefix: false, type: 2, parse: function(A2, e2) {
  return "inside" !== e2 ? 1 : 0;
} }, listStyleType = { name: "list-style-type", initialValue: "none", prefix: false, type: 2, parse: function(A2, e2) {
  switch (e2) {
    case "disc":
      return 0;
    case "circle":
      return 1;
    case "square":
      return 2;
    case "decimal":
      return 3;
    case "cjk-decimal":
      return 4;
    case "decimal-leading-zero":
      return 5;
    case "lower-roman":
      return 6;
    case "upper-roman":
      return 7;
    case "lower-greek":
      return 8;
    case "lower-alpha":
      return 9;
    case "upper-alpha":
      return 10;
    case "arabic-indic":
      return 11;
    case "armenian":
      return 12;
    case "bengali":
      return 13;
    case "cambodian":
      return 14;
    case "cjk-earthly-branch":
      return 15;
    case "cjk-heavenly-stem":
      return 16;
    case "cjk-ideographic":
      return 17;
    case "devanagari":
      return 18;
    case "ethiopic-numeric":
      return 19;
    case "georgian":
      return 20;
    case "gujarati":
      return 21;
    case "gurmukhi":
    case "hebrew":
      return 22;
    case "hiragana":
      return 23;
    case "hiragana-iroha":
      return 24;
    case "japanese-formal":
      return 25;
    case "japanese-informal":
      return 26;
    case "kannada":
      return 27;
    case "katakana":
      return 28;
    case "katakana-iroha":
      return 29;
    case "khmer":
      return 30;
    case "korean-hangul-formal":
      return 31;
    case "korean-hanja-formal":
      return 32;
    case "korean-hanja-informal":
      return 33;
    case "lao":
      return 34;
    case "lower-armenian":
      return 35;
    case "malayalam":
      return 36;
    case "mongolian":
      return 37;
    case "myanmar":
      return 38;
    case "oriya":
      return 39;
    case "persian":
      return 40;
    case "simp-chinese-formal":
      return 41;
    case "simp-chinese-informal":
      return 42;
    case "tamil":
      return 43;
    case "telugu":
      return 44;
    case "thai":
      return 45;
    case "tibetan":
      return 46;
    case "trad-chinese-formal":
      return 47;
    case "trad-chinese-informal":
      return 48;
    case "upper-armenian":
      return 49;
    case "disclosure-open":
      return 50;
    case "disclosure-closed":
      return 51;
    default:
      return -1;
  }
} }, marginForSide = function(A2) {
  return { name: "margin-" + A2, initialValue: "0", prefix: false, type: 4 };
}, marginTop = marginForSide("top"), marginRight = marginForSide("right"), marginBottom = marginForSide("bottom"), marginLeft = marginForSide("left"), overflow = { name: "overflow", initialValue: "visible", prefix: false, type: 1, parse: function(A2, e2) {
  return e2.filter(isIdentToken).map(function(A3) {
    switch (A3.value) {
      case "hidden":
        return 1;
      case "scroll":
        return 2;
      case "clip":
        return 3;
      case "auto":
        return 4;
      default:
        return 0;
    }
  });
} }, overflowWrap = { name: "overflow-wrap", initialValue: "normal", prefix: false, type: 2, parse: function(A2, e2) {
  return "break-word" !== e2 ? "normal" : "break-word";
} }, paddingForSide = function(A2) {
  return { name: "padding-" + A2, initialValue: "0", prefix: false, type: 3, format: "length-percentage" };
}, paddingTop = paddingForSide("top"), paddingRight = paddingForSide("right"), paddingBottom = paddingForSide("bottom"), paddingLeft = paddingForSide("left"), textAlign = { name: "text-align", initialValue: "left", prefix: false, type: 2, parse: function(A2, e2) {
  switch (e2) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, position = { name: "position", initialValue: "static", prefix: false, type: 2, parse: function(A2, e2) {
  switch (e2) {
    case "relative":
      return 1;
    case "absolute":
      return 2;
    case "fixed":
      return 3;
    case "sticky":
      return 4;
  }
  return 0;
} }, textShadow = { name: "text-shadow", initialValue: "none", type: 1, prefix: false, parse: function(n, A2) {
  return 1 === A2.length && isIdentWithValue(A2[0], "none") ? [] : parseFunctionArgs(A2).map(function(A3) {
    for (var e2 = { color: COLORS.TRANSPARENT, offsetX: ZERO_LENGTH, offsetY: ZERO_LENGTH, blur: ZERO_LENGTH }, u2 = 0, t = 0; t < A3.length; t++) {
      var d = A3[t];
      isLength(d) ? (0 === u2 ? e2.offsetX = d : 1 === u2 ? e2.offsetY = d : e2.blur = d, u2++) : e2.color = color$1.parse(n, d);
    }
    return e2;
  });
} }, textTransform = { name: "text-transform", initialValue: "none", prefix: false, type: 2, parse: function(A2, e2) {
  switch (e2) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, transform$1 = { name: "transform", initialValue: "none", prefix: true, type: 0, parse: function(A2, e2) {
  if (20 === e2.type && "none" === e2.value)
    return null;
  if (18 !== e2.type)
    return null;
  var u2 = SUPPORTED_TRANSFORM_FUNCTIONS[e2.name];
  if (void 0 === u2)
    throw new Error('Attempting to parse an unsupported transform function "' + e2.name + '"');
  return u2(e2.values);
} }, matrix = function(A2) {
  A2 = A2.filter(function(A3) {
    return 17 === A3.type;
  }).map(function(A3) {
    return A3.number;
  });
  return 6 === A2.length ? A2 : null;
}, matrix3d = function(A2) {
  var A2 = A2.filter(function(A3) {
    return 17 === A3.type;
  }).map(function(A3) {
    return A3.number;
  }), e2 = A2[0], u2 = A2[1], t = (A2[2], A2[3], A2[4]), d = A2[5], n = (A2[6], A2[7], A2[8], A2[9], A2[10], A2[11], A2[12]), r = A2[13];
  return A2[14], A2[15], 16 === A2.length ? [e2, u2, t, d, n, r] : null;
}, SUPPORTED_TRANSFORM_FUNCTIONS = { matrix, matrix3d }, DEFAULT_VALUE = { type: 16, number: 50, flags: FLAG_INTEGER }, DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE], transformOrigin = { name: "transform-origin", initialValue: "50% 50%", prefix: true, type: 1, parse: function(A2, e2) {
  e2 = e2.filter(isLengthPercentage);
  return 2 !== e2.length ? DEFAULT : [e2[0], e2[1]];
} }, visibility = { name: "visible", initialValue: "none", prefix: false, type: 2, parse: function(A2, e2) {
  switch (e2) {
    case "hidden":
      return 1;
    case "collapse":
      return 2;
    default:
      return 0;
  }
} }, wordBreak = (!function(A2) {
  A2.NORMAL = "normal", A2.BREAK_ALL = "break-all", A2.KEEP_ALL = "keep-all";
}(WORD_BREAK = WORD_BREAK || {}), { name: "word-break", initialValue: "normal", prefix: false, type: 2, parse: function(A2, e2) {
  switch (e2) {
    case "break-all":
      return WORD_BREAK.BREAK_ALL;
    case "keep-all":
      return WORD_BREAK.KEEP_ALL;
    default:
      return WORD_BREAK.NORMAL;
  }
} }), zIndex = { name: "z-index", initialValue: "auto", prefix: false, type: 0, parse: function(A2, e2) {
  if (20 === e2.type)
    return { auto: true, order: 0 };
  if (isNumberToken(e2))
    return { auto: false, order: e2.number };
  throw new Error("Invalid z-index number parsed");
} }, time = { name: "time", parse: function(A2, e2) {
  if (15 === e2.type)
    switch (e2.unit.toLowerCase()) {
      case "s":
        return 1e3 * e2.number;
      case "ms":
        return e2.number;
    }
  throw new Error("Unsupported time type");
} }, opacity = { name: "opacity", initialValue: "1", type: 0, prefix: false, parse: function(A2, e2) {
  return isNumberToken(e2) ? e2.number : 1;
} }, textDecorationColor = { name: "text-decoration-color", initialValue: "transparent", prefix: false, type: 3, format: "color" }, textDecorationLine = { name: "text-decoration-line", initialValue: "none", prefix: false, type: 1, parse: function(A2, e2) {
  return e2.filter(isIdentToken).map(function(A3) {
    switch (A3.value) {
      case "underline":
        return 1;
      case "overline":
        return 2;
      case "line-through":
        return 3;
      case "none":
        return 4;
    }
    return 0;
  }).filter(function(A3) {
    return 0 !== A3;
  });
} }, fontFamily = { name: "font-family", initialValue: "", prefix: false, type: 1, parse: function(A2, e2) {
  var u2 = [], t = [];
  return e2.forEach(function(A3) {
    switch (A3.type) {
      case 20:
      case 0:
        u2.push(A3.value);
        break;
      case 17:
        u2.push(A3.number.toString());
        break;
      case 4:
        t.push(u2.join(" ")), u2.length = 0;
    }
  }), u2.length && t.push(u2.join(" ")), t.map(function(A3) {
    return -1 === A3.indexOf(" ") ? A3 : "'" + A3 + "'";
  });
} }, fontSize = { name: "font-size", initialValue: "0", prefix: false, type: 3, format: "length" }, fontWeight = { name: "font-weight", initialValue: "normal", type: 0, prefix: false, parse: function(A2, e2) {
  return isNumberToken(e2) ? e2.number : !isIdentToken(e2) || "bold" !== e2.value ? 400 : 700;
} }, fontVariant = { name: "font-variant", initialValue: "none", type: 1, prefix: false, parse: function(A2, e2) {
  return e2.filter(isIdentToken).map(function(A3) {
    return A3.value;
  });
} }, fontStyle$1 = { name: "font-style", initialValue: "normal", prefix: false, type: 2, parse: function(A2, e2) {
  switch (e2) {
    case "oblique":
      return "oblique";
    case "italic":
      return "italic";
    default:
      return "normal";
  }
} }, contains = function(A2, e2) {
  return 0 != (A2 & e2);
}, duration = { name: "duration", initialValue: "0s", prefix: false, type: 1, parse: function(e2, A2) {
  return A2.filter(isDimensionToken).map(function(A3) {
    return time.parse(e2, A3);
  });
} }, boxShadow = { name: "box-shadow", initialValue: "none", type: 1, prefix: false, parse: function(n, A2) {
  return 1 === A2.length && isIdentWithValue(A2[0], "none") ? [] : parseFunctionArgs(A2).map(function(A3) {
    for (var e2 = { color: 255, offsetX: ZERO_LENGTH, offsetY: ZERO_LENGTH, blur: ZERO_LENGTH, spread: ZERO_LENGTH, inset: false }, u2 = 0, t = 0; t < A3.length; t++) {
      var d = A3[t];
      isIdentWithValue(d, "inset") ? e2.inset = true : isLength(d) ? (0 === u2 ? e2.offsetX = d : 1 === u2 ? e2.offsetY = d : 2 === u2 ? e2.blur = d : e2.spread = d, u2++) : e2.color = color$1.parse(n, d);
    }
    return e2;
  });
} }, paintOrder = { name: "paint-order", initialValue: "normal", prefix: false, type: 1, parse: function(A2, e2) {
  var u2 = [];
  return e2.filter(isIdentToken).forEach(function(A3) {
    switch (A3.value) {
      case "stroke":
        u2.push(1);
        break;
      case "fill":
        u2.push(0);
        break;
      case "markers":
        u2.push(2);
    }
  }), [0, 1, 2].forEach(function(A3) {
    -1 === u2.indexOf(A3) && u2.push(A3);
  }), u2;
} }, webkitTextStrokeColor = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: false, type: 3, format: "color" }, webkitTextStrokeWidth = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: false, parse: function(A2, e2) {
  return isDimensionToken(e2) ? e2.number : 0;
} }, CSSParsedDeclaration = function() {
  function A2(A3, e2) {
    this.animationDuration = parse(A3, duration, e2.animationDuration), this.backgroundClip = parse(A3, backgroundClip, e2.backgroundClip), this.backgroundColor = parse(A3, backgroundColor, e2.backgroundColor), this.backgroundImage = parse(A3, backgroundImage, e2.backgroundImage), this.backgroundOrigin = parse(A3, backgroundOrigin, e2.backgroundOrigin), this.backgroundPosition = parse(A3, backgroundPosition, e2.backgroundPosition), this.backgroundRepeat = parse(A3, backgroundRepeat, e2.backgroundRepeat), this.backgroundSize = parse(A3, backgroundSize, e2.backgroundSize), this.borderTopColor = parse(A3, borderTopColor, e2.borderTopColor), this.borderRightColor = parse(A3, borderRightColor, e2.borderRightColor), this.borderBottomColor = parse(A3, borderBottomColor, e2.borderBottomColor), this.borderLeftColor = parse(A3, borderLeftColor, e2.borderLeftColor), this.borderTopLeftRadius = parse(A3, borderTopLeftRadius, e2.borderTopLeftRadius), this.borderTopRightRadius = parse(A3, borderTopRightRadius, e2.borderTopRightRadius), this.borderBottomRightRadius = parse(A3, borderBottomRightRadius, e2.borderBottomRightRadius), this.borderBottomLeftRadius = parse(A3, borderBottomLeftRadius, e2.borderBottomLeftRadius), this.borderTopStyle = parse(A3, borderTopStyle, e2.borderTopStyle), this.borderRightStyle = parse(A3, borderRightStyle, e2.borderRightStyle), this.borderBottomStyle = parse(A3, borderBottomStyle, e2.borderBottomStyle), this.borderLeftStyle = parse(A3, borderLeftStyle, e2.borderLeftStyle), this.borderTopWidth = parse(A3, borderTopWidth, e2.borderTopWidth), this.borderRightWidth = parse(A3, borderRightWidth, e2.borderRightWidth), this.borderBottomWidth = parse(A3, borderBottomWidth, e2.borderBottomWidth), this.borderLeftWidth = parse(A3, borderLeftWidth, e2.borderLeftWidth), this.boxShadow = parse(A3, boxShadow, e2.boxShadow), this.color = parse(A3, color, e2.color), this.direction = parse(A3, direction, e2.direction), this.display = parse(A3, display, e2.display), this.float = parse(A3, float, e2.cssFloat), this.fontFamily = parse(A3, fontFamily, e2.fontFamily), this.fontSize = parse(A3, fontSize, e2.fontSize), this.fontStyle = parse(A3, fontStyle$1, e2.fontStyle), this.fontVariant = parse(A3, fontVariant, e2.fontVariant), this.fontWeight = parse(A3, fontWeight, e2.fontWeight), this.letterSpacing = parse(A3, letterSpacing, e2.letterSpacing), this.lineBreak = parse(A3, lineBreak, e2.lineBreak), this.lineHeight = parse(A3, lineHeight, e2.lineHeight), this.listStyleImage = parse(A3, listStyleImage, e2.listStyleImage), this.listStylePosition = parse(A3, listStylePosition, e2.listStylePosition), this.listStyleType = parse(A3, listStyleType, e2.listStyleType), this.marginTop = parse(A3, marginTop, e2.marginTop), this.marginRight = parse(A3, marginRight, e2.marginRight), this.marginBottom = parse(A3, marginBottom, e2.marginBottom), this.marginLeft = parse(A3, marginLeft, e2.marginLeft), this.opacity = parse(A3, opacity, e2.opacity);
    var u2 = parse(A3, overflow, e2.overflow);
    this.overflowX = u2[0], this.overflowY = u2[1 < u2.length ? 1 : 0], this.overflowWrap = parse(A3, overflowWrap, e2.overflowWrap), this.paddingTop = parse(A3, paddingTop, e2.paddingTop), this.paddingRight = parse(A3, paddingRight, e2.paddingRight), this.paddingBottom = parse(A3, paddingBottom, e2.paddingBottom), this.paddingLeft = parse(A3, paddingLeft, e2.paddingLeft), this.paintOrder = parse(A3, paintOrder, e2.paintOrder), this.position = parse(A3, position, e2.position), this.textAlign = parse(A3, textAlign, e2.textAlign), this.textDecorationColor = parse(A3, textDecorationColor, null != (u2 = e2.textDecorationColor) ? u2 : e2.color), this.textDecorationLine = parse(A3, textDecorationLine, null != (u2 = e2.textDecorationLine) ? u2 : e2.textDecoration), this.textShadow = parse(A3, textShadow, e2.textShadow), this.textTransform = parse(A3, textTransform, e2.textTransform), this.transform = parse(A3, transform$1, e2.transform), this.transformOrigin = parse(A3, transformOrigin, e2.transformOrigin), this.visibility = parse(A3, visibility, e2.visibility), this.webkitTextStrokeColor = parse(A3, webkitTextStrokeColor, e2.webkitTextStrokeColor), this.webkitTextStrokeWidth = parse(A3, webkitTextStrokeWidth, e2.webkitTextStrokeWidth), this.wordBreak = parse(A3, wordBreak, e2.wordBreak), this.zIndex = parse(A3, zIndex, e2.zIndex);
  }
  return A2.prototype.isVisible = function() {
    return 0 < this.display && 0 < this.opacity && 0 === this.visibility;
  }, A2.prototype.isTransparent = function() {
    return isTransparent(this.backgroundColor);
  }, A2.prototype.isTransformed = function() {
    return null !== this.transform;
  }, A2.prototype.isPositioned = function() {
    return 0 !== this.position;
  }, A2.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  }, A2.prototype.isFloating = function() {
    return 0 !== this.float;
  }, A2.prototype.isInlineLevel = function() {
    return contains(this.display, 4) || contains(this.display, 33554432) || contains(this.display, 268435456) || contains(this.display, 536870912) || contains(this.display, 67108864) || contains(this.display, 134217728);
  }, A2;
}(), parse = function(A2, e2, u2) {
  var t = new Tokenizer(), u2 = null != u2 ? u2.toString() : e2.initialValue, d = (t.write(u2), new Parser(t.read()));
  switch (e2.type) {
    case 2:
      var n = d.parseComponentValue();
      return e2.parse(A2, isIdentToken(n) ? n.value : e2.initialValue);
    case 0:
      return e2.parse(A2, d.parseComponentValue());
    case 1:
      return e2.parse(A2, d.parseComponentValues());
    case 4:
      return d.parseComponentValue();
    case 3:
      switch (e2.format) {
        case "angle":
          return angle.parse(A2, d.parseComponentValue());
        case "color":
          return color$1.parse(A2, d.parseComponentValue());
        case "image":
          return image.parse(A2, d.parseComponentValue());
        case "length":
          var r = d.parseComponentValue();
          return isLength(r) ? r : ZERO_LENGTH;
        case "length-percentage":
          r = d.parseComponentValue();
          return isLengthPercentage(r) ? r : ZERO_LENGTH;
        case "time":
          return time.parse(A2, d.parseComponentValue());
      }
  }
}, elementDebuggerAttribute = "data-html2canvas-debug", getElementDebugType = function(A2) {
  switch (A2.getAttribute(elementDebuggerAttribute)) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
}, isDebugging = function(A2, e2) {
  A2 = getElementDebugType(A2);
  return 1 === A2 || e2 === A2;
}, ElementContainer = function(A2, e2) {
  this.context = A2, this.textNodes = [], this.elements = [], this.flags = 0, isDebugging(e2, 3), this.styles = new CSSParsedDeclaration(A2, window.getComputedStyle(e2, null)), isHTMLElementNode(e2) && (this.styles.animationDuration.some(function(A3) {
    return 0 < A3;
  }) && (e2.style.animationDuration = "0s"), null !== this.styles.transform) && (e2.style.transform = "none"), this.bounds = parseBounds(this.context, e2), isDebugging(e2, 4) && (this.flags |= 16);
}, base64 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", chars$1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup$1 = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i$1 = 0; i$1 < chars$1.length; i$1++)
  lookup$1[chars$1.charCodeAt(i$1)] = i$1;
for (var decode = function(A2) {
  for (var e2, u2, t, d, n = 0.75 * A2.length, r = A2.length, a2 = 0, n = ("=" === A2[A2.length - 1] && (n--, "=" === A2[A2.length - 2]) && n--, new ("undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? ArrayBuffer : Array)(n)), o = Array.isArray(n) ? n : new Uint8Array(n), c = 0; c < r; c += 4)
    e2 = lookup$1[A2.charCodeAt(c)], u2 = lookup$1[A2.charCodeAt(c + 1)], t = lookup$1[A2.charCodeAt(c + 2)], d = lookup$1[A2.charCodeAt(c + 3)], o[a2++] = e2 << 2 | u2 >> 4, o[a2++] = (15 & u2) << 4 | t >> 2, o[a2++] = (3 & t) << 6 | 63 & d;
  return n;
}, polyUint16Array = function(A2) {
  for (var e2 = A2.length, u2 = [], t = 0; t < e2; t += 2)
    u2.push(A2[t + 1] << 8 | A2[t]);
  return u2;
}, polyUint32Array = function(A2) {
  for (var e2 = A2.length, u2 = [], t = 0; t < e2; t += 4)
    u2.push(A2[t + 3] << 24 | A2[t + 2] << 16 | A2[t + 1] << 8 | A2[t]);
  return u2;
}, UTRIE2_SHIFT_2 = 5, UTRIE2_SHIFT_1 = 11, UTRIE2_INDEX_SHIFT = 2, UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2, UTRIE2_LSCP_INDEX_2_OFFSET = 65536 >> UTRIE2_SHIFT_2, UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2, UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1, UTRIE2_LSCP_INDEX_2_LENGTH = 1024 >> UTRIE2_SHIFT_2, UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH, UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH, UTRIE2_UTF8_2B_INDEX_2_LENGTH = 32, UTRIE2_INDEX_1_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH + UTRIE2_UTF8_2B_INDEX_2_LENGTH, UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 65536 >> UTRIE2_SHIFT_1, UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2, UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1, slice16 = function(A2, e2, u2) {
  return A2.slice ? A2.slice(e2, u2) : new Uint16Array(Array.prototype.slice.call(A2, e2, u2));
}, slice32 = function(A2, e2, u2) {
  return A2.slice ? A2.slice(e2, u2) : new Uint32Array(Array.prototype.slice.call(A2, e2, u2));
}, createTrieFromBase64 = function(A2, e2) {
  var A2 = decode(A2), u2 = Array.isArray(A2) ? polyUint32Array(A2) : new Uint32Array(A2), A2 = Array.isArray(A2) ? polyUint16Array(A2) : new Uint16Array(A2), t = slice16(A2, 12, u2[4] / 2), A2 = 2 === u2[5] ? slice16(A2, (24 + u2[4]) / 2) : slice32(u2, Math.ceil((24 + u2[4]) / 4));
  return new Trie(u2[0], u2[1], u2[2], u2[3], t, A2);
}, Trie = function() {
  function A2(A3, e2, u2, t, d, n) {
    this.initialValue = A3, this.errorValue = e2, this.highStart = u2, this.highValueIndex = t, this.index = d, this.data = n;
  }
  return A2.prototype.get = function(A3) {
    var e2;
    if (0 <= A3) {
      if (A3 < 55296 || 56319 < A3 && A3 <= 65535)
        return e2 = this.index[A3 >> UTRIE2_SHIFT_2], this.data[e2 = (e2 << UTRIE2_INDEX_SHIFT) + (A3 & UTRIE2_DATA_MASK)];
      if (A3 <= 65535)
        return e2 = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (A3 - 55296 >> UTRIE2_SHIFT_2)], this.data[e2 = (e2 << UTRIE2_INDEX_SHIFT) + (A3 & UTRIE2_DATA_MASK)];
      if (A3 < this.highStart)
        return e2 = this.index[e2 = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (A3 >> UTRIE2_SHIFT_1)], e2 = this.index[e2 += A3 >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK], this.data[e2 = (e2 << UTRIE2_INDEX_SHIFT) + (A3 & UTRIE2_DATA_MASK)];
      if (A3 <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, A2;
}(), chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lookup = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), i = 0; i < chars.length; i++)
  lookup[chars.charCodeAt(i)] = i;
var PseudoElementType, CORNER, Prepend = 1, CR = 2, LF = 3, Control = 4, Extend = 5, SpacingMark = 7, L = 8, V = 9, T = 10, LV = 11, LVT = 12, ZWJ = 13, Extended_Pictographic = 14, RI = 15, toCodePoints = function(A2) {
  for (var e2 = [], u2 = 0, t = A2.length; u2 < t; ) {
    var d, n = A2.charCodeAt(u2++);
    55296 <= n && n <= 56319 && u2 < t ? 56320 == (64512 & (d = A2.charCodeAt(u2++))) ? e2.push(((1023 & n) << 10) + (1023 & d) + 65536) : (e2.push(n), u2--) : e2.push(n);
  }
  return e2;
}, fromCodePoint = function() {
  for (var A2 = [], e2 = 0; e2 < arguments.length; e2++)
    A2[e2] = arguments[e2];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A2);
  var u2 = A2.length;
  if (!u2)
    return "";
  for (var t = [], d = -1, n = ""; ++d < u2; ) {
    var r = A2[d];
    r <= 65535 ? t.push(r) : t.push(55296 + ((r -= 65536) >> 10), r % 1024 + 56320), (d + 1 === u2 || 16384 < t.length) && (n += String.fromCharCode.apply(String, t), t.length = 0);
  }
  return n;
}, UnicodeTrie = createTrieFromBase64(base64), BREAK_NOT_ALLOWED = "\xD7", BREAK_ALLOWED = "\xF7", codePointToClass = function(A2) {
  return UnicodeTrie.get(A2);
}, _graphemeBreakAtIndex = function(A2, e2, u2) {
  var t = u2 - 2, d = e2[t], n = e2[u2 - 1], u2 = e2[u2];
  if (n === CR && u2 === LF)
    return BREAK_NOT_ALLOWED;
  if (n !== CR && n !== LF && n !== Control && u2 !== CR && u2 !== LF && u2 !== Control) {
    if (n === L && -1 !== [L, V, LV, LVT].indexOf(u2))
      return BREAK_NOT_ALLOWED;
    if (!(n !== LV && n !== V || u2 !== V && u2 !== T))
      return BREAK_NOT_ALLOWED;
    if ((n === LVT || n === T) && u2 === T)
      return BREAK_NOT_ALLOWED;
    if (u2 === ZWJ || u2 === Extend)
      return BREAK_NOT_ALLOWED;
    if (u2 === SpacingMark)
      return BREAK_NOT_ALLOWED;
    if (n === Prepend)
      return BREAK_NOT_ALLOWED;
    if (n === ZWJ && u2 === Extended_Pictographic) {
      for (; d === Extend; )
        d = e2[--t];
      if (d === Extended_Pictographic)
        return BREAK_NOT_ALLOWED;
    }
    if (n === RI && u2 === RI) {
      for (var r = 0; d === RI; )
        r++, d = e2[--t];
      if (r % 2 == 0)
        return BREAK_NOT_ALLOWED;
    }
  }
  return BREAK_ALLOWED;
}, GraphemeBreaker = function(A2) {
  var u2 = toCodePoints(A2), t = u2.length, d = 0, n = 0, r = u2.map(codePointToClass);
  return { next: function() {
    if (t <= d)
      return { done: true, value: null };
    for (var A3, e2 = BREAK_NOT_ALLOWED; d < t && (e2 = _graphemeBreakAtIndex(u2, r, ++d)) === BREAK_NOT_ALLOWED; )
      ;
    return e2 !== BREAK_NOT_ALLOWED || d === t ? (A3 = fromCodePoint.apply(null, u2.slice(n, d)), n = d, { value: A3, done: false }) : { done: true, value: null };
  } };
}, splitGraphemes = function(A2) {
  for (var e2, u2 = GraphemeBreaker(A2), t = []; !(e2 = u2.next()).done; )
    e2.value && t.push(e2.value.slice());
  return t;
}, testRangeBounds = function(A2) {
  if (A2.createRange) {
    var e2 = A2.createRange();
    if (e2.getBoundingClientRect) {
      var u2 = A2.createElement("boundtest"), e2 = (u2.style.height = "123px", u2.style.display = "block", A2.body.appendChild(u2), e2.selectNode(u2), e2.getBoundingClientRect()), e2 = Math.round(e2.height);
      if (A2.body.removeChild(u2), 123 === e2)
        return true;
    }
  }
  return false;
}, testIOSLineBreak = function(A2) {
  var e2 = A2.createElement("boundtest"), t = (e2.style.width = "50px", e2.style.display = "block", e2.style.fontSize = "12px", e2.style.letterSpacing = "0px", e2.style.wordSpacing = "0px", A2.body.appendChild(e2), A2.createRange()), d = (e2.innerHTML = "function" == typeof "".repeat ? "&#128104;".repeat(10) : "", e2.firstChild), u2 = toCodePoints$1(d.data).map(function(A3) {
    return fromCodePoint$1(A3);
  }), n = 0, r = {}, u2 = u2.every(function(A3, e3) {
    t.setStart(d, n), t.setEnd(d, n + A3.length);
    var u3 = t.getBoundingClientRect(), A3 = (n += A3.length, u3.x > r.x || u3.y > r.y);
    return r = u3, 0 === e3 || A3;
  });
  return A2.body.removeChild(e2), u2;
}, testCORS = function() {
  return void 0 !== new Image().crossOrigin;
}, testResponseType = function() {
  return "string" == typeof new XMLHttpRequest().responseType;
}, testSVG = function(A2) {
  var e2 = new Image(), A2 = A2.createElement("canvas"), u2 = A2.getContext("2d");
  if (!u2)
    return false;
  e2.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    u2.drawImage(e2, 0, 0), A2.toDataURL();
  } catch (A3) {
    return false;
  }
  return true;
}, isGreenPixel = function(A2) {
  return 0 === A2[0] && 255 === A2[1] && 0 === A2[2] && 255 === A2[3];
}, testForeignObject = function(u2) {
  var A2 = u2.createElement("canvas"), t = (A2.width = 100, A2.height = 100, A2.getContext("2d"));
  if (!t)
    return Promise.reject(false);
  t.fillStyle = "rgb(0, 255, 0)", t.fillRect(0, 0, 100, 100);
  var e2 = new Image(), d = A2.toDataURL(), A2 = (e2.src = d, createForeignObjectSVG(100, 100, 0, 0, e2));
  return t.fillStyle = "red", t.fillRect(0, 0, 100, 100), loadSerializedSVG$1(A2).then(function(A3) {
    t.drawImage(A3, 0, 0);
    var A3 = t.getImageData(0, 0, 100, 100).data, e3 = (t.fillStyle = "red", t.fillRect(0, 0, 100, 100), u2.createElement("div"));
    return e3.style.backgroundImage = "url(" + d + ")", e3.style.height = "100px", isGreenPixel(A3) ? loadSerializedSVG$1(createForeignObjectSVG(100, 100, 0, 0, e3)) : Promise.reject(false);
  }).then(function(A3) {
    return t.drawImage(A3, 0, 0), isGreenPixel(t.getImageData(0, 0, 100, 100).data);
  }).catch(function() {
    return false;
  });
}, createForeignObjectSVG = function(A2, e2, u2, t, d) {
  var n = "http://www.w3.org/2000/svg", r = document.createElementNS(n, "svg"), n = document.createElementNS(n, "foreignObject");
  return r.setAttributeNS(null, "width", A2.toString()), r.setAttributeNS(null, "height", e2.toString()), n.setAttributeNS(null, "width", "100%"), n.setAttributeNS(null, "height", "100%"), n.setAttributeNS(null, "x", u2.toString()), n.setAttributeNS(null, "y", t.toString()), n.setAttributeNS(null, "externalResourcesRequired", "true"), r.appendChild(n), n.appendChild(d), r;
}, loadSerializedSVG$1 = function(t) {
  return new Promise(function(A2, e2) {
    var u2 = new Image();
    u2.onload = function() {
      return A2(u2);
    }, u2.onerror = e2, u2.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
  });
}, FEATURES = { get SUPPORT_RANGE_BOUNDS() {
  var A2 = testRangeBounds(document);
  return Object.defineProperty(FEATURES, "SUPPORT_RANGE_BOUNDS", { value: A2 }), A2;
}, get SUPPORT_WORD_BREAKING() {
  var A2 = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
  return Object.defineProperty(FEATURES, "SUPPORT_WORD_BREAKING", { value: A2 }), A2;
}, get SUPPORT_SVG_DRAWING() {
  var A2 = testSVG(document);
  return Object.defineProperty(FEATURES, "SUPPORT_SVG_DRAWING", { value: A2 }), A2;
}, get SUPPORT_FOREIGNOBJECT_DRAWING() {
  var A2 = "function" == typeof Array.from && "function" == typeof window.fetch ? testForeignObject(document) : Promise.resolve(false);
  return Object.defineProperty(FEATURES, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A2 }), A2;
}, get SUPPORT_CORS_IMAGES() {
  var A2 = testCORS();
  return Object.defineProperty(FEATURES, "SUPPORT_CORS_IMAGES", { value: A2 }), A2;
}, get SUPPORT_RESPONSE_TYPE() {
  var A2 = testResponseType();
  return Object.defineProperty(FEATURES, "SUPPORT_RESPONSE_TYPE", { value: A2 }), A2;
}, get SUPPORT_CORS_XHR() {
  var A2 = "withCredentials" in new XMLHttpRequest();
  return Object.defineProperty(FEATURES, "SUPPORT_CORS_XHR", { value: A2 }), A2;
}, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
  var A2 = !("undefined" == typeof Intl || !Intl.Segmenter);
  return Object.defineProperty(FEATURES, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: A2 }), A2;
} }, TextBounds = function(A2, e2) {
  this.text = A2, this.bounds = e2;
}, parseTextBounds = function(d, A2, n, r) {
  var A2 = breakText(A2, n), a2 = [], o = 0;
  return A2.forEach(function(A3) {
    var e2, u2, t;
    n.textDecorationLine.length || 0 < A3.trim().length ? FEATURES.SUPPORT_RANGE_BOUNDS ? 1 < (e2 = createRange(r, o, A3.length).getClientRects()).length ? (t = segmentGraphemes(A3), u2 = 0, t.forEach(function(A4) {
      a2.push(new TextBounds(A4, Bounds.fromDOMRectList(d, createRange(r, u2 + o, A4.length).getClientRects()))), u2 += A4.length;
    })) : a2.push(new TextBounds(A3, Bounds.fromDOMRectList(d, e2))) : (t = r.splitText(A3.length), a2.push(new TextBounds(A3, getWrapperBounds(d, r))), r = t) : FEATURES.SUPPORT_RANGE_BOUNDS || (r = r.splitText(A3.length)), o += A3.length;
  }), a2;
}, getWrapperBounds = function(A2, e2) {
  var u2 = e2.ownerDocument;
  if (u2) {
    var u2 = u2.createElement("html2canvaswrapper"), t = (u2.appendChild(e2.cloneNode(true)), e2.parentNode);
    if (t)
      return t.replaceChild(u2, e2), e2 = parseBounds(A2, u2), u2.firstChild && t.replaceChild(u2.firstChild, u2), e2;
  }
  return Bounds.EMPTY;
}, createRange = function(A2, e2, u2) {
  var t = A2.ownerDocument;
  if (t)
    return (t = t.createRange()).setStart(A2, e2), t.setEnd(A2, e2 + u2), t;
  throw new Error("Node has no owner document");
}, segmentGraphemes = function(A2) {
  var e2;
  return FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (e2 = new Intl.Segmenter(void 0, { granularity: "grapheme" }), Array.from(e2.segment(A2)).map(function(A3) {
    return A3.segment;
  })) : splitGraphemes(A2);
}, segmentWords = function(A2, e2) {
  var u2;
  return FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (u2 = new Intl.Segmenter(void 0, { granularity: "word" }), Array.from(u2.segment(A2)).map(function(A3) {
    return A3.segment;
  })) : breakWords(A2, e2);
}, breakText = function(A2, e2) {
  return 0 !== e2.letterSpacing ? segmentGraphemes(A2) : segmentWords(A2, e2);
}, wordSeparators = [32, 160, 4961, 65792, 65793, 4153, 4241], breakWords = function(A2, e2) {
  for (var u2, t = LineBreaker(A2, { lineBreak: e2.lineBreak, wordBreak: "break-word" === e2.overflowWrap ? "break-word" : e2.wordBreak }), d = []; !(u2 = t.next()).done; )
    !function() {
      var A3, e3;
      u2.value && (A3 = u2.value.slice(), A3 = toCodePoints$1(A3), e3 = "", A3.forEach(function(A4) {
        -1 === wordSeparators.indexOf(A4) ? e3 += fromCodePoint$1(A4) : (e3.length && d.push(e3), d.push(fromCodePoint$1(A4)), e3 = "");
      }), e3.length) && d.push(e3);
    }();
  return d;
}, TextContainer = function(A2, e2, u2) {
  this.text = transform(e2.data, u2.textTransform), this.textBounds = parseTextBounds(A2, this.text, u2, e2);
}, transform = function(A2, e2) {
  switch (e2) {
    case 1:
      return A2.toLowerCase();
    case 3:
      return A2.replace(CAPITALIZE, capitalize);
    case 2:
      return A2.toUpperCase();
    default:
      return A2;
  }
}, CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g, capitalize = function(A2, e2, u2) {
  return 0 < A2.length ? e2 + u2.toUpperCase() : A2;
}, ImageElementContainer = function(u2) {
  function A2(A3, e2) {
    A3 = u2.call(this, A3, e2) || this;
    return A3.src = e2.currentSrc || e2.src, A3.intrinsicWidth = e2.naturalWidth, A3.intrinsicHeight = e2.naturalHeight, A3.context.cache.addImage(A3.src), A3;
  }
  return __extends(A2, u2), A2;
}(ElementContainer), CanvasElementContainer = function(u2) {
  function A2(A3, e2) {
    A3 = u2.call(this, A3, e2) || this;
    return A3.canvas = e2, A3.intrinsicWidth = e2.width, A3.intrinsicHeight = e2.height, A3;
  }
  return __extends(A2, u2), A2;
}(ElementContainer), SVGElementContainer = function(d) {
  function A2(A3, e2) {
    var u2 = d.call(this, A3, e2) || this, t = new XMLSerializer(), A3 = parseBounds(A3, e2);
    return e2.setAttribute("width", A3.width + "px"), e2.setAttribute("height", A3.height + "px"), u2.svg = "data:image/svg+xml," + encodeURIComponent(t.serializeToString(e2)), u2.intrinsicWidth = e2.width.baseVal.value, u2.intrinsicHeight = e2.height.baseVal.value, u2.context.cache.addImage(u2.svg), u2;
  }
  return __extends(A2, d), A2;
}(ElementContainer), LIElementContainer = function(u2) {
  function A2(A3, e2) {
    A3 = u2.call(this, A3, e2) || this;
    return A3.value = e2.value, A3;
  }
  return __extends(A2, u2), A2;
}(ElementContainer), OLElementContainer = function(u2) {
  function A2(A3, e2) {
    A3 = u2.call(this, A3, e2) || this;
    return A3.start = e2.start, A3.reversed = "boolean" == typeof e2.reversed && true === e2.reversed, A3;
  }
  return __extends(A2, u2), A2;
}(ElementContainer), CHECKBOX_BORDER_RADIUS = [{ type: 15, flags: 0, unit: "px", number: 3 }], RADIO_BORDER_RADIUS = [{ type: 16, flags: 0, number: 50 }], reformatInputBounds = function(A2) {
  return A2.width > A2.height ? new Bounds(A2.left + (A2.width - A2.height) / 2, A2.top, A2.height, A2.height) : A2.width < A2.height ? new Bounds(A2.left, A2.top + (A2.height - A2.width) / 2, A2.width, A2.width) : A2;
}, getInputValue = function(A2) {
  var e2 = A2.type === PASSWORD ? new Array(A2.value.length + 1).join("\u2022") : A2.value;
  return 0 === e2.length ? A2.placeholder || "" : e2;
}, CHECKBOX = "checkbox", RADIO = "radio", PASSWORD = "password", INPUT_COLOR = 707406591, InputElementContainer = function(t) {
  function A2(A3, e2) {
    var u2 = t.call(this, A3, e2) || this;
    switch (u2.type = e2.type.toLowerCase(), u2.checked = e2.checked, u2.value = getInputValue(e2), u2.type !== CHECKBOX && u2.type !== RADIO || (u2.styles.backgroundColor = 3739148031, u2.styles.borderTopColor = u2.styles.borderRightColor = u2.styles.borderBottomColor = u2.styles.borderLeftColor = 2779096575, u2.styles.borderTopWidth = u2.styles.borderRightWidth = u2.styles.borderBottomWidth = u2.styles.borderLeftWidth = 1, u2.styles.borderTopStyle = u2.styles.borderRightStyle = u2.styles.borderBottomStyle = u2.styles.borderLeftStyle = 1, u2.styles.backgroundClip = [0], u2.styles.backgroundOrigin = [0], u2.bounds = reformatInputBounds(u2.bounds)), u2.type) {
      case CHECKBOX:
        u2.styles.borderTopRightRadius = u2.styles.borderTopLeftRadius = u2.styles.borderBottomRightRadius = u2.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
        break;
      case RADIO:
        u2.styles.borderTopRightRadius = u2.styles.borderTopLeftRadius = u2.styles.borderBottomRightRadius = u2.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS;
    }
    return u2;
  }
  return __extends(A2, t), A2;
}(ElementContainer), SelectElementContainer = function(u2) {
  function A2(A3, e2) {
    A3 = u2.call(this, A3, e2) || this, e2 = e2.options[e2.selectedIndex || 0];
    return A3.value = e2 && e2.text || "", A3;
  }
  return __extends(A2, u2), A2;
}(ElementContainer), TextareaElementContainer = function(u2) {
  function A2(A3, e2) {
    A3 = u2.call(this, A3, e2) || this;
    return A3.value = e2.value, A3;
  }
  return __extends(A2, u2), A2;
}(ElementContainer), IFrameElementContainer = function(n) {
  function A2(A3, e2) {
    var u2, t, d = n.call(this, A3, e2) || this;
    d.src = e2.src, d.width = parseInt(e2.width, 10) || 0, d.height = parseInt(e2.height, 10) || 0, d.backgroundColor = d.styles.backgroundColor;
    try {
      e2.contentWindow && e2.contentWindow.document && e2.contentWindow.document.documentElement && (d.tree = parseTree(A3, e2.contentWindow.document.documentElement), u2 = e2.contentWindow.document.documentElement ? parseColor(A3, getComputedStyle(e2.contentWindow.document.documentElement).backgroundColor) : COLORS.TRANSPARENT, t = e2.contentWindow.document.body ? parseColor(A3, getComputedStyle(e2.contentWindow.document.body).backgroundColor) : COLORS.TRANSPARENT, d.backgroundColor = isTransparent(u2) ? isTransparent(t) ? d.styles.backgroundColor : t : u2);
    } catch (A4) {
    }
    return d;
  }
  return __extends(A2, n), A2;
}(ElementContainer), LIST_OWNERS = ["OL", "UL", "MENU"], parseNodeTree = function(e2, A2, u2, t) {
  for (var d = A2.firstChild; d; d = r) {
    var n, r = d.nextSibling;
    isTextNode(d) && 0 < d.data.trim().length ? u2.textNodes.push(new TextContainer(e2, d, u2.styles)) : isElementNode(d) && (isSlotElement(d) && d.assignedNodes ? d.assignedNodes().forEach(function(A3) {
      return parseNodeTree(e2, A3, u2, t);
    }) : (n = createContainer(e2, d)).styles.isVisible() && (createsRealStackingContext(d, n, t) ? n.flags |= 4 : createsStackingContext(n.styles) && (n.flags |= 2), -1 !== LIST_OWNERS.indexOf(d.tagName) && (n.flags |= 8), u2.elements.push(n), d.slot, d.shadowRoot ? parseNodeTree(e2, d.shadowRoot, n, t) : isTextareaElement(d) || isSVGElement(d) || isSelectElement(d) || parseNodeTree(e2, d, n, t)));
  }
}, createContainer = function(A2, e2) {
  return new (isImageElement(e2) ? ImageElementContainer : isCanvasElement(e2) ? CanvasElementContainer : isSVGElement(e2) ? SVGElementContainer : isLIElement(e2) ? LIElementContainer : isOLElement(e2) ? OLElementContainer : isInputElement(e2) ? InputElementContainer : isSelectElement(e2) ? SelectElementContainer : isTextareaElement(e2) ? TextareaElementContainer : isIFrameElement(e2) ? IFrameElementContainer : ElementContainer)(A2, e2);
}, parseTree = function(A2, e2) {
  var u2 = createContainer(A2, e2);
  return u2.flags |= 4, parseNodeTree(A2, e2, u2, u2), u2;
}, createsRealStackingContext = function(A2, e2, u2) {
  return e2.styles.isPositionedWithZIndex() || e2.styles.opacity < 1 || e2.styles.isTransformed() || isBodyElement(A2) && u2.styles.isTransparent();
}, createsStackingContext = function(A2) {
  return A2.isPositioned() || A2.isFloating();
}, isTextNode = function(A2) {
  return A2.nodeType === Node.TEXT_NODE;
}, isElementNode = function(A2) {
  return A2.nodeType === Node.ELEMENT_NODE;
}, isHTMLElementNode = function(A2) {
  return isElementNode(A2) && void 0 !== A2.style && !isSVGElementNode(A2);
}, isSVGElementNode = function(A2) {
  return "object" == typeof A2.className;
}, isLIElement = function(A2) {
  return "LI" === A2.tagName;
}, isOLElement = function(A2) {
  return "OL" === A2.tagName;
}, isInputElement = function(A2) {
  return "INPUT" === A2.tagName;
}, isSVGElement = function(A2) {
  return "svg" === A2.tagName;
}, isBodyElement = function(A2) {
  return "BODY" === A2.tagName;
}, isCanvasElement = function(A2) {
  return "CANVAS" === A2.tagName;
}, isImageElement = function(A2) {
  return "IMG" === A2.tagName;
}, isIFrameElement = function(A2) {
  return "IFRAME" === A2.tagName;
}, isTextareaElement = function(A2) {
  return "TEXTAREA" === A2.tagName;
}, isSelectElement = function(A2) {
  return "SELECT" === A2.tagName;
}, isSlotElement = function(A2) {
  return "SLOT" === A2.tagName;
}, ROMAN_UPPER = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, ARMENIAN = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["\u0554", "\u0553", "\u0552", "\u0551", "\u0550", "\u054F", "\u054E", "\u054D", "\u054C", "\u054B", "\u054A", "\u0549", "\u0548", "\u0547", "\u0546", "\u0545", "\u0544", "\u0543", "\u0542", "\u0541", "\u0540", "\u053F", "\u053E", "\u053D", "\u053C", "\u053B", "\u053A", "\u0539", "\u0538", "\u0537", "\u0536", "\u0535", "\u0534", "\u0533", "\u0532", "\u0531"] }, HEBREW = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["\u05D9\u05F3", "\u05D8\u05F3", "\u05D7\u05F3", "\u05D6\u05F3", "\u05D5\u05F3", "\u05D4\u05F3", "\u05D3\u05F3", "\u05D2\u05F3", "\u05D1\u05F3", "\u05D0\u05F3", "\u05EA", "\u05E9", "\u05E8", "\u05E7", "\u05E6", "\u05E4", "\u05E2", "\u05E1", "\u05E0", "\u05DE", "\u05DC", "\u05DB", "\u05D9\u05D8", "\u05D9\u05D7", "\u05D9\u05D6", "\u05D8\u05D6", "\u05D8\u05D5", "\u05D9", "\u05D8", "\u05D7", "\u05D6", "\u05D5", "\u05D4", "\u05D3", "\u05D2", "\u05D1", "\u05D0"] }, GEORGIAN = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["\u10F5", "\u10F0", "\u10EF", "\u10F4", "\u10EE", "\u10ED", "\u10EC", "\u10EB", "\u10EA", "\u10E9", "\u10E8", "\u10E7", "\u10E6", "\u10E5", "\u10E4", "\u10F3", "\u10E2", "\u10E1", "\u10E0", "\u10DF", "\u10DE", "\u10DD", "\u10F2", "\u10DC", "\u10DB", "\u10DA", "\u10D9", "\u10D8", "\u10D7", "\u10F1", "\u10D6", "\u10D5", "\u10D4", "\u10D3", "\u10D2", "\u10D1", "\u10D0"] }, createAdditiveCounter = function(t, A2, e2, d, u2, n) {
  return t < A2 || e2 < t ? createCounterText(t, u2, 0 < n.length) : d.integers.reduce(function(A3, e3, u3) {
    for (; e3 <= t; )
      t -= e3, A3 += d.values[u3];
    return A3;
  }, "") + n;
}, createCounterStyleWithSymbolResolver = function(A2, e2, u2, t) {
  for (var d = ""; u2 || A2--, d = t(A2) + d, e2 <= (A2 /= e2) * e2; )
    ;
  return d;
}, createCounterStyleFromRange = function(A2, e2, u2, t, d) {
  var n = u2 - e2 + 1;
  return (A2 < 0 ? "-" : "") + (createCounterStyleWithSymbolResolver(Math.abs(A2), n, t, function(A3) {
    return fromCodePoint$1(Math.floor(A3 % n) + e2);
  }) + d);
}, createCounterStyleFromSymbols = function(A2, e2, u2) {
  void 0 === u2 && (u2 = ". ");
  var t = e2.length;
  return createCounterStyleWithSymbolResolver(Math.abs(A2), t, false, function(A3) {
    return e2[Math.floor(A3 % t)];
  }) + u2;
}, CJK_ZEROS = 1, CJK_TEN_COEFFICIENTS = 2, CJK_TEN_HIGH_COEFFICIENTS = 4, CJK_HUNDRED_COEFFICIENTS = 8, createCJKCounter = function(A2, e2, u2, t, d, n) {
  if (A2 < -9999 || 9999 < A2)
    return createCounterText(A2, 4, 0 < d.length);
  var r = Math.abs(A2), a2 = d;
  if (0 === r)
    return e2[0] + a2;
  for (var o = 0; 0 < r && o <= 4; o++) {
    var c = r % 10;
    0 == c && contains(n, CJK_ZEROS) && "" !== a2 ? a2 = e2[c] + a2 : 1 < c || 1 == c && 0 === o || 1 == c && 1 === o && contains(n, CJK_TEN_COEFFICIENTS) || 1 == c && 1 === o && contains(n, CJK_TEN_HIGH_COEFFICIENTS) && 100 < A2 || 1 == c && 1 < o && contains(n, CJK_HUNDRED_COEFFICIENTS) ? a2 = e2[c] + (0 < o ? u2[o - 1] : "") + a2 : 1 == c && 0 < o && (a2 = u2[o - 1] + a2), r = Math.floor(r / 10);
  }
  return (A2 < 0 ? t : "") + a2;
}, CHINESE_INFORMAL_MULTIPLIERS = "\u5341\u767E\u5343\u842C", CHINESE_FORMAL_MULTIPLIERS = "\u62FE\u4F70\u4EDF\u842C", JAPANESE_NEGATIVE = "\u30DE\u30A4\u30CA\u30B9", KOREAN_NEGATIVE = "\uB9C8\uC774\uB108\uC2A4", createCounterText = function(A2, e2, u2) {
  var t = u2 ? ". " : "", d = u2 ? "\u3001" : "", n = u2 ? ", " : "", r = u2 ? " " : "";
  switch (e2) {
    case 0:
      return "\u2022" + r;
    case 1:
      return "\u25E6" + r;
    case 2:
      return "\u25FE" + r;
    case 5:
      var a2 = createCounterStyleFromRange(A2, 48, 57, true, t);
      return a2.length < 4 ? "0" + a2 : a2;
    case 4:
      return createCounterStyleFromSymbols(A2, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", d);
    case 6:
      return createAdditiveCounter(A2, 1, 3999, ROMAN_UPPER, 3, t).toLowerCase();
    case 7:
      return createAdditiveCounter(A2, 1, 3999, ROMAN_UPPER, 3, t);
    case 8:
      return createCounterStyleFromRange(A2, 945, 969, false, t);
    case 9:
      return createCounterStyleFromRange(A2, 97, 122, false, t);
    case 10:
      return createCounterStyleFromRange(A2, 65, 90, false, t);
    case 11:
      return createCounterStyleFromRange(A2, 1632, 1641, true, t);
    case 12:
    case 49:
      return createAdditiveCounter(A2, 1, 9999, ARMENIAN, 3, t);
    case 35:
      return createAdditiveCounter(A2, 1, 9999, ARMENIAN, 3, t).toLowerCase();
    case 13:
      return createCounterStyleFromRange(A2, 2534, 2543, true, t);
    case 14:
    case 30:
      return createCounterStyleFromRange(A2, 6112, 6121, true, t);
    case 15:
      return createCounterStyleFromSymbols(A2, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", d);
    case 16:
      return createCounterStyleFromSymbols(A2, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", d);
    case 17:
    case 48:
      return createCJKCounter(A2, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8CA0", d, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 47:
      return createCJKCounter(A2, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8CA0", d, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 42:
      return createCJKCounter(A2, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", CHINESE_INFORMAL_MULTIPLIERS, "\u8D1F", d, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 41:
      return createCJKCounter(A2, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", CHINESE_FORMAL_MULTIPLIERS, "\u8D1F", d, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
    case 26:
      return createCJKCounter(A2, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", JAPANESE_NEGATIVE, d, 0);
    case 25:
      return createCJKCounter(A2, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", JAPANESE_NEGATIVE, d, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
    case 31:
      return createCJKCounter(A2, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", KOREAN_NEGATIVE, n, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
    case 33:
      return createCJKCounter(A2, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", KOREAN_NEGATIVE, n, 0);
    case 32:
      return createCJKCounter(A2, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", KOREAN_NEGATIVE, n, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
    case 18:
      return createCounterStyleFromRange(A2, 2406, 2415, true, t);
    case 20:
      return createAdditiveCounter(A2, 1, 19999, GEORGIAN, 3, t);
    case 21:
      return createCounterStyleFromRange(A2, 2790, 2799, true, t);
    case 22:
      return createCounterStyleFromRange(A2, 2662, 2671, true, t);
    case 22:
      return createAdditiveCounter(A2, 1, 10999, HEBREW, 3, t);
    case 23:
      return createCounterStyleFromSymbols(A2, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
    case 24:
      return createCounterStyleFromSymbols(A2, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
    case 27:
      return createCounterStyleFromRange(A2, 3302, 3311, true, t);
    case 28:
      return createCounterStyleFromSymbols(A2, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", d);
    case 29:
      return createCounterStyleFromSymbols(A2, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", d);
    case 34:
      return createCounterStyleFromRange(A2, 3792, 3801, true, t);
    case 37:
      return createCounterStyleFromRange(A2, 6160, 6169, true, t);
    case 38:
      return createCounterStyleFromRange(A2, 4160, 4169, true, t);
    case 39:
      return createCounterStyleFromRange(A2, 2918, 2927, true, t);
    case 40:
      return createCounterStyleFromRange(A2, 1776, 1785, true, t);
    case 43:
      return createCounterStyleFromRange(A2, 3046, 3055, true, t);
    case 44:
      return createCounterStyleFromRange(A2, 3174, 3183, true, t);
    case 45:
      return createCounterStyleFromRange(A2, 3664, 3673, true, t);
    case 46:
      return createCounterStyleFromRange(A2, 3872, 3881, true, t);
    default:
      return createCounterStyleFromRange(A2, 48, 57, true, t);
  }
}, CacheStorage = (!function(A2) {
  A2[A2.BEFORE = 0] = "BEFORE", A2[A2.AFTER = 1] = "AFTER";
}(PseudoElementType = PseudoElementType || {}), function() {
  function u2() {
  }
  return u2.getOrigin = function(A2) {
    var e2 = u2._link;
    return e2 ? (e2.href = A2, e2.href = e2.href, e2.protocol + e2.hostname + e2.port) : "about:blank";
  }, u2.isSameOrigin = function(A2) {
    return u2.getOrigin(A2) === u2._origin;
  }, u2.setContext = function(A2) {
    u2._link = A2.document.createElement("a"), u2._origin = u2.getOrigin(A2.location.href);
  }, u2._origin = "about:blank", u2;
}()), Vector = function() {
  function u2(A2, e2) {
    this.type = 0, this.x = A2, this.y = e2;
  }
  return u2.prototype.add = function(A2, e2) {
    return new u2(this.x + A2, this.y + e2);
  }, u2;
}(), lerp = function(A2, e2, u2) {
  return new Vector(A2.x + (e2.x - A2.x) * u2, A2.y + (e2.y - A2.y) * u2);
}, BezierCurve = function() {
  function r(A2, e2, u2, t) {
    this.type = 1, this.start = A2, this.startControl = e2, this.endControl = u2, this.end = t;
  }
  return r.prototype.subdivide = function(A2, e2) {
    var u2 = lerp(this.start, this.startControl, A2), t = lerp(this.startControl, this.endControl, A2), d = lerp(this.endControl, this.end, A2), n = lerp(u2, t, A2), t = lerp(t, d, A2), A2 = lerp(n, t, A2);
    return e2 ? new r(this.start, u2, n, A2) : new r(A2, t, d, this.end);
  }, r.prototype.add = function(A2, e2) {
    return new r(this.start.add(A2, e2), this.startControl.add(A2, e2), this.endControl.add(A2, e2), this.end.add(A2, e2));
  }, r.prototype.reverse = function() {
    return new r(this.end, this.endControl, this.startControl, this.start);
  }, r;
}(), isBezierCurve = function(A2) {
  return 1 === A2.type;
}, BoundCurves = function(A2) {
  var e2 = A2.styles, u2 = A2.bounds, t = (d = getAbsoluteValueForTuple(e2.borderTopLeftRadius, u2.width, u2.height))[0], d = d[1], n = (r = getAbsoluteValueForTuple(e2.borderTopRightRadius, u2.width, u2.height))[0], r = r[1], a2 = (o = getAbsoluteValueForTuple(e2.borderBottomRightRadius, u2.width, u2.height))[0], o = o[1], c = (i = getAbsoluteValueForTuple(e2.borderBottomLeftRadius, u2.width, u2.height))[0], i = i[1];
  (f2 = []).push((t + n) / u2.width), f2.push((c + a2) / u2.width), f2.push((d + i) / u2.height), f2.push((r + o) / u2.height);
  1 < (f2 = Math.max.apply(Math, f2)) && (t /= f2, d /= f2, n /= f2, r /= f2, a2 /= f2, o /= f2, c /= f2, i /= f2);
  var f2 = u2.width - n, s = u2.height - o, l = u2.width - a2, B = u2.height - i, g = e2.borderTopWidth, p = e2.borderRightWidth, h2 = e2.borderBottomWidth, w = e2.borderLeftWidth, C = getAbsoluteValue(e2.paddingTop, A2.bounds.width), m = getAbsoluteValue(e2.paddingRight, A2.bounds.width), b = getAbsoluteValue(e2.paddingBottom, A2.bounds.width), e2 = getAbsoluteValue(e2.paddingLeft, A2.bounds.width);
  this.topLeftBorderDoubleOuterBox = 0 < t || 0 < d ? getCurvePoints(u2.left + w / 3, u2.top + g / 3, t - w / 3, d - g / 3, CORNER.TOP_LEFT) : new Vector(u2.left + w / 3, u2.top + g / 3), this.topRightBorderDoubleOuterBox = 0 < t || 0 < d ? getCurvePoints(u2.left + f2, u2.top + g / 3, n - p / 3, r - g / 3, CORNER.TOP_RIGHT) : new Vector(u2.left + u2.width - p / 3, u2.top + g / 3), this.bottomRightBorderDoubleOuterBox = 0 < a2 || 0 < o ? getCurvePoints(u2.left + l, u2.top + s, a2 - p / 3, o - h2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(u2.left + u2.width - p / 3, u2.top + u2.height - h2 / 3), this.bottomLeftBorderDoubleOuterBox = 0 < c || 0 < i ? getCurvePoints(u2.left + w / 3, u2.top + B, c - w / 3, i - h2 / 3, CORNER.BOTTOM_LEFT) : new Vector(u2.left + w / 3, u2.top + u2.height - h2 / 3), this.topLeftBorderDoubleInnerBox = 0 < t || 0 < d ? getCurvePoints(u2.left + 2 * w / 3, u2.top + 2 * g / 3, t - 2 * w / 3, d - 2 * g / 3, CORNER.TOP_LEFT) : new Vector(u2.left + 2 * w / 3, u2.top + 2 * g / 3), this.topRightBorderDoubleInnerBox = 0 < t || 0 < d ? getCurvePoints(u2.left + f2, u2.top + 2 * g / 3, n - 2 * p / 3, r - 2 * g / 3, CORNER.TOP_RIGHT) : new Vector(u2.left + u2.width - 2 * p / 3, u2.top + 2 * g / 3), this.bottomRightBorderDoubleInnerBox = 0 < a2 || 0 < o ? getCurvePoints(u2.left + l, u2.top + s, a2 - 2 * p / 3, o - 2 * h2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(u2.left + u2.width - 2 * p / 3, u2.top + u2.height - 2 * h2 / 3), this.bottomLeftBorderDoubleInnerBox = 0 < c || 0 < i ? getCurvePoints(u2.left + 2 * w / 3, u2.top + B, c - 2 * w / 3, i - 2 * h2 / 3, CORNER.BOTTOM_LEFT) : new Vector(u2.left + 2 * w / 3, u2.top + u2.height - 2 * h2 / 3), this.topLeftBorderStroke = 0 < t || 0 < d ? getCurvePoints(u2.left + w / 2, u2.top + g / 2, t - w / 2, d - g / 2, CORNER.TOP_LEFT) : new Vector(u2.left + w / 2, u2.top + g / 2), this.topRightBorderStroke = 0 < t || 0 < d ? getCurvePoints(u2.left + f2, u2.top + g / 2, n - p / 2, r - g / 2, CORNER.TOP_RIGHT) : new Vector(u2.left + u2.width - p / 2, u2.top + g / 2), this.bottomRightBorderStroke = 0 < a2 || 0 < o ? getCurvePoints(u2.left + l, u2.top + s, a2 - p / 2, o - h2 / 2, CORNER.BOTTOM_RIGHT) : new Vector(u2.left + u2.width - p / 2, u2.top + u2.height - h2 / 2), this.bottomLeftBorderStroke = 0 < c || 0 < i ? getCurvePoints(u2.left + w / 2, u2.top + B, c - w / 2, i - h2 / 2, CORNER.BOTTOM_LEFT) : new Vector(u2.left + w / 2, u2.top + u2.height - h2 / 2), this.topLeftBorderBox = 0 < t || 0 < d ? getCurvePoints(u2.left, u2.top, t, d, CORNER.TOP_LEFT) : new Vector(u2.left, u2.top), this.topRightBorderBox = 0 < n || 0 < r ? getCurvePoints(u2.left + f2, u2.top, n, r, CORNER.TOP_RIGHT) : new Vector(u2.left + u2.width, u2.top), this.bottomRightBorderBox = 0 < a2 || 0 < o ? getCurvePoints(u2.left + l, u2.top + s, a2, o, CORNER.BOTTOM_RIGHT) : new Vector(u2.left + u2.width, u2.top + u2.height), this.bottomLeftBorderBox = 0 < c || 0 < i ? getCurvePoints(u2.left, u2.top + B, c, i, CORNER.BOTTOM_LEFT) : new Vector(u2.left, u2.top + u2.height), this.topLeftPaddingBox = 0 < t || 0 < d ? getCurvePoints(u2.left + w, u2.top + g, Math.max(0, t - w), Math.max(0, d - g), CORNER.TOP_LEFT) : new Vector(u2.left + w, u2.top + g), this.topRightPaddingBox = 0 < n || 0 < r ? getCurvePoints(u2.left + Math.min(f2, u2.width - p), u2.top + g, f2 > u2.width + p ? 0 : Math.max(0, n - p), Math.max(0, r - g), CORNER.TOP_RIGHT) : new Vector(u2.left + u2.width - p, u2.top + g), this.bottomRightPaddingBox = 0 < a2 || 0 < o ? getCurvePoints(u2.left + Math.min(l, u2.width - w), u2.top + Math.min(s, u2.height - h2), Math.max(0, a2 - p), Math.max(0, o - h2), CORNER.BOTTOM_RIGHT) : new Vector(u2.left + u2.width - p, u2.top + u2.height - h2), this.bottomLeftPaddingBox = 0 < c || 0 < i ? getCurvePoints(u2.left + w, u2.top + Math.min(B, u2.height - h2), Math.max(0, c - w), Math.max(0, i - h2), CORNER.BOTTOM_LEFT) : new Vector(u2.left + w, u2.top + u2.height - h2), this.topLeftContentBox = 0 < t || 0 < d ? getCurvePoints(u2.left + w + e2, u2.top + g + C, Math.max(0, t - (w + e2)), Math.max(0, d - (g + C)), CORNER.TOP_LEFT) : new Vector(u2.left + w + e2, u2.top + g + C), this.topRightContentBox = 0 < n || 0 < r ? getCurvePoints(u2.left + Math.min(f2, u2.width + w + e2), u2.top + g + C, f2 > u2.width + w + e2 ? 0 : n - w + e2, r - (g + C), CORNER.TOP_RIGHT) : new Vector(u2.left + u2.width - (p + m), u2.top + g + C), this.bottomRightContentBox = 0 < a2 || 0 < o ? getCurvePoints(u2.left + Math.min(l, u2.width - (w + e2)), u2.top + Math.min(s, u2.height + g + C), Math.max(0, a2 - (p + m)), o - (h2 + b), CORNER.BOTTOM_RIGHT) : new Vector(u2.left + u2.width - (p + m), u2.top + u2.height - (h2 + b)), this.bottomLeftContentBox = 0 < c || 0 < i ? getCurvePoints(u2.left + w + e2, u2.top + B, Math.max(0, c - (w + e2)), i - (h2 + b), CORNER.BOTTOM_LEFT) : new Vector(u2.left + w + e2, u2.top + u2.height - (h2 + b));
}, getCurvePoints = (!function(A2) {
  A2[A2.TOP_LEFT = 0] = "TOP_LEFT", A2[A2.TOP_RIGHT = 1] = "TOP_RIGHT", A2[A2.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A2[A2.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
}(CORNER = CORNER || {}), function(A2, e2, u2, t, d) {
  var n = (Math.sqrt(2) - 1) / 3 * 4, r = u2 * n, a2 = t * n, o = A2 + u2, c = e2 + t;
  switch (d) {
    case CORNER.TOP_LEFT:
      return new BezierCurve(new Vector(A2, c), new Vector(A2, c - a2), new Vector(o - r, e2), new Vector(o, e2));
    case CORNER.TOP_RIGHT:
      return new BezierCurve(new Vector(A2, e2), new Vector(A2 + r, e2), new Vector(o, c - a2), new Vector(o, c));
    case CORNER.BOTTOM_RIGHT:
      return new BezierCurve(new Vector(o, e2), new Vector(o, e2 + a2), new Vector(A2 + r, c), new Vector(A2, c));
    default:
      CORNER.BOTTOM_LEFT;
      return new BezierCurve(new Vector(o, c), new Vector(o - r, c), new Vector(A2, e2 + a2), new Vector(A2, e2));
  }
}), calculateBorderBoxPath = function(A2) {
  return [A2.topLeftBorderBox, A2.topRightBorderBox, A2.bottomRightBorderBox, A2.bottomLeftBorderBox];
}, calculateContentBoxPath = function(A2) {
  return [A2.topLeftContentBox, A2.topRightContentBox, A2.bottomRightContentBox, A2.bottomLeftContentBox];
}, calculatePaddingBoxPath = function(A2) {
  return [A2.topLeftPaddingBox, A2.topRightPaddingBox, A2.bottomRightPaddingBox, A2.bottomLeftPaddingBox];
}, TransformEffect = function(A2, e2, u2) {
  this.offsetX = A2, this.offsetY = e2, this.matrix = u2, this.type = 0, this.target = 6;
}, ClipEffect = function(A2, e2) {
  this.path = A2, this.target = e2, this.type = 1;
}, OpacityEffect = function(A2) {
  this.opacity = A2, this.type = 2, this.target = 6;
}, isTransformEffect = function(A2) {
  return 0 === A2.type;
}, isClipEffect = function(A2) {
  return 1 === A2.type;
}, isOpacityEffect = function(A2) {
  return 2 === A2.type;
}, equalPath = function(A2, u2) {
  return A2.length === u2.length && A2.some(function(A3, e2) {
    return A3 === u2[e2];
  });
}, transformPath = function(A2, u2, t, d, n) {
  return A2.map(function(A3, e2) {
    switch (e2) {
      case 0:
        return A3.add(u2, t);
      case 1:
        return A3.add(u2 + d, t);
      case 2:
        return A3.add(u2 + d, t + n);
      case 3:
        return A3.add(u2, t + n);
    }
    return A3;
  });
}, StackingContext = function(A2) {
  this.element = A2, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
}, ElementPaint = function() {
  function A2(A3, e2) {
    var u2;
    this.container = A3, this.parent = e2, this.effects = [], this.curves = new BoundCurves(this.container), this.container.styles.opacity < 1 && this.effects.push(new OpacityEffect(this.container.styles.opacity)), null !== this.container.styles.transform && (A3 = this.container.bounds.left + this.container.styles.transformOrigin[0].number, e2 = this.container.bounds.top + this.container.styles.transformOrigin[1].number, u2 = this.container.styles.transform, this.effects.push(new TransformEffect(A3, e2, u2))), 0 !== this.container.styles.overflowX && (A3 = calculateBorderBoxPath(this.curves), e2 = calculatePaddingBoxPath(this.curves), equalPath(A3, e2) ? this.effects.push(new ClipEffect(A3, 6)) : (this.effects.push(new ClipEffect(A3, 2)), this.effects.push(new ClipEffect(e2, 4))));
  }
  return A2.prototype.getEffects = function(e2) {
    for (var A3 = -1 === [2, 3].indexOf(this.container.styles.position), u2 = this.parent, t = this.effects.slice(0); u2; ) {
      var d, n, r = u2.effects.filter(function(A4) {
        return !isClipEffect(A4);
      });
      A3 || 0 !== u2.container.styles.position || !u2.parent ? (t.unshift.apply(t, r), A3 = -1 === [2, 3].indexOf(u2.container.styles.position), 0 !== u2.container.styles.overflowX && (d = calculateBorderBoxPath(u2.curves), n = calculatePaddingBoxPath(u2.curves), equalPath(d, n) || t.unshift(new ClipEffect(n, 6)))) : t.unshift.apply(t, r), u2 = u2.parent;
    }
    return t.filter(function(A4) {
      return contains(A4.target, e2);
    });
  }, A2;
}(), parseStackTree = function(c, i, f2, s) {
  c.container.elements.forEach(function(A2) {
    var e2, u2, t, d, n = contains(A2.flags, 4), r = contains(A2.flags, 2), a2 = new ElementPaint(A2, c), o = (contains(A2.styles.display, 2048) && s.push(a2), contains(A2.flags, 8) ? [] : s);
    n || r ? (r = n || A2.styles.isPositioned() ? f2 : i, e2 = new StackingContext(a2), A2.styles.isPositioned() || A2.styles.opacity < 1 || A2.styles.isTransformed() ? (u2 = A2.styles.zIndex.order) < 0 ? (t = 0, r.negativeZIndex.some(function(A3, e3) {
      return u2 > A3.element.container.styles.zIndex.order ? (t = e3, false) : 0 < t;
    }), r.negativeZIndex.splice(t, 0, e2)) : 0 < u2 ? (d = 0, r.positiveZIndex.some(function(A3, e3) {
      return u2 >= A3.element.container.styles.zIndex.order ? (d = e3 + 1, false) : 0 < d;
    }), r.positiveZIndex.splice(d, 0, e2)) : r.zeroOrAutoZIndexOrTransformedOrOpacity.push(e2) : (A2.styles.isFloating() ? r.nonPositionedFloats : r.nonPositionedInlineLevel).push(e2), parseStackTree(a2, e2, n ? e2 : f2, o)) : ((A2.styles.isInlineLevel() ? i.inlineLevel : i.nonInlineLevel).push(a2), parseStackTree(a2, i, f2, o)), contains(A2.flags, 8) && processListItems(A2, o);
  });
}, processListItems = function(A2, e2) {
  for (var u2 = A2 instanceof OLElementContainer ? A2.start : 1, t = A2 instanceof OLElementContainer && A2.reversed, d = 0; d < e2.length; d++) {
    var n = e2[d];
    n.container instanceof LIElementContainer && "number" == typeof n.container.value && 0 !== n.container.value && (u2 = n.container.value), n.listValue = createCounterText(u2, n.container.styles.listStyleType, true), u2 += t ? -1 : 1;
  }
}, parseStackingContexts = function(A2) {
  var A2 = new ElementPaint(A2, null), e2 = new StackingContext(A2), u2 = [];
  return parseStackTree(A2, e2, e2, u2), processListItems(A2.container, u2), e2;
}, parsePathForBorder = function(A2, e2) {
  switch (e2) {
    case 0:
      return createPathFromCurves(A2.topLeftBorderBox, A2.topLeftPaddingBox, A2.topRightBorderBox, A2.topRightPaddingBox);
    case 1:
      return createPathFromCurves(A2.topRightBorderBox, A2.topRightPaddingBox, A2.bottomRightBorderBox, A2.bottomRightPaddingBox);
    case 2:
      return createPathFromCurves(A2.bottomRightBorderBox, A2.bottomRightPaddingBox, A2.bottomLeftBorderBox, A2.bottomLeftPaddingBox);
    default:
      return createPathFromCurves(A2.bottomLeftBorderBox, A2.bottomLeftPaddingBox, A2.topLeftBorderBox, A2.topLeftPaddingBox);
  }
}, parsePathForBorderDoubleOuter = function(A2, e2) {
  switch (e2) {
    case 0:
      return createPathFromCurves(A2.topLeftBorderBox, A2.topLeftBorderDoubleOuterBox, A2.topRightBorderBox, A2.topRightBorderDoubleOuterBox);
    case 1:
      return createPathFromCurves(A2.topRightBorderBox, A2.topRightBorderDoubleOuterBox, A2.bottomRightBorderBox, A2.bottomRightBorderDoubleOuterBox);
    case 2:
      return createPathFromCurves(A2.bottomRightBorderBox, A2.bottomRightBorderDoubleOuterBox, A2.bottomLeftBorderBox, A2.bottomLeftBorderDoubleOuterBox);
    default:
      return createPathFromCurves(A2.bottomLeftBorderBox, A2.bottomLeftBorderDoubleOuterBox, A2.topLeftBorderBox, A2.topLeftBorderDoubleOuterBox);
  }
}, parsePathForBorderDoubleInner = function(A2, e2) {
  switch (e2) {
    case 0:
      return createPathFromCurves(A2.topLeftBorderDoubleInnerBox, A2.topLeftPaddingBox, A2.topRightBorderDoubleInnerBox, A2.topRightPaddingBox);
    case 1:
      return createPathFromCurves(A2.topRightBorderDoubleInnerBox, A2.topRightPaddingBox, A2.bottomRightBorderDoubleInnerBox, A2.bottomRightPaddingBox);
    case 2:
      return createPathFromCurves(A2.bottomRightBorderDoubleInnerBox, A2.bottomRightPaddingBox, A2.bottomLeftBorderDoubleInnerBox, A2.bottomLeftPaddingBox);
    default:
      return createPathFromCurves(A2.bottomLeftBorderDoubleInnerBox, A2.bottomLeftPaddingBox, A2.topLeftBorderDoubleInnerBox, A2.topLeftPaddingBox);
  }
}, parsePathForBorderStroke = function(A2, e2) {
  switch (e2) {
    case 0:
      return createStrokePathFromCurves(A2.topLeftBorderStroke, A2.topRightBorderStroke);
    case 1:
      return createStrokePathFromCurves(A2.topRightBorderStroke, A2.bottomRightBorderStroke);
    case 2:
      return createStrokePathFromCurves(A2.bottomRightBorderStroke, A2.bottomLeftBorderStroke);
    default:
      return createStrokePathFromCurves(A2.bottomLeftBorderStroke, A2.topLeftBorderStroke);
  }
}, createStrokePathFromCurves = function(A2, e2) {
  var u2 = [];
  return isBezierCurve(A2) ? u2.push(A2.subdivide(0.5, false)) : u2.push(A2), isBezierCurve(e2) ? u2.push(e2.subdivide(0.5, true)) : u2.push(e2), u2;
}, createPathFromCurves = function(A2, e2, u2, t) {
  var d = [];
  return isBezierCurve(A2) ? d.push(A2.subdivide(0.5, false)) : d.push(A2), isBezierCurve(u2) ? d.push(u2.subdivide(0.5, true)) : d.push(u2), isBezierCurve(t) ? d.push(t.subdivide(0.5, true).reverse()) : d.push(t), isBezierCurve(e2) ? d.push(e2.subdivide(0.5, false).reverse()) : d.push(e2), d;
}, paddingBox = function(A2) {
  var e2 = A2.bounds, A2 = A2.styles;
  return e2.add(A2.borderLeftWidth, A2.borderTopWidth, -(A2.borderRightWidth + A2.borderLeftWidth), -(A2.borderTopWidth + A2.borderBottomWidth));
}, contentBox = function(A2) {
  var e2 = A2.styles, A2 = A2.bounds, u2 = getAbsoluteValue(e2.paddingLeft, A2.width), t = getAbsoluteValue(e2.paddingRight, A2.width), d = getAbsoluteValue(e2.paddingTop, A2.width), n = getAbsoluteValue(e2.paddingBottom, A2.width);
  return A2.add(u2 + e2.borderLeftWidth, d + e2.borderTopWidth, -(e2.borderRightWidth + e2.borderLeftWidth + u2 + t), -(e2.borderTopWidth + e2.borderBottomWidth + d + n));
}, calculateBackgroundPositioningArea = function(A2, e2) {
  return 0 === A2 ? e2.bounds : (2 === A2 ? contentBox : paddingBox)(e2);
}, calculateBackgroundPaintingArea = function(A2, e2) {
  return 0 === A2 ? e2.bounds : (2 === A2 ? contentBox : paddingBox)(e2);
}, calculateBackgroundRendering = function(A2, e2, u2) {
  var t = calculateBackgroundPositioningArea(getBackgroundValueForIndex(A2.styles.backgroundOrigin, e2), A2), d = calculateBackgroundPaintingArea(getBackgroundValueForIndex(A2.styles.backgroundClip, e2), A2), u2 = calculateBackgroundSize(getBackgroundValueForIndex(A2.styles.backgroundSize, e2), u2, t), n = u2[0], r = u2[1], a2 = getAbsoluteValueForTuple(getBackgroundValueForIndex(A2.styles.backgroundPosition, e2), t.width - n, t.height - r);
  return [calculateBackgroundRepeatPath(getBackgroundValueForIndex(A2.styles.backgroundRepeat, e2), a2, u2, t, d), Math.round(t.left + a2[0]), Math.round(t.top + a2[1]), n, r];
}, isAuto = function(A2) {
  return isIdentToken(A2) && A2.value === BACKGROUND_SIZE.AUTO;
}, hasIntrinsicValue = function(A2) {
  return "number" == typeof A2;
}, calculateBackgroundSize = function(A2, e2, u2) {
  var t = e2[0], d = e2[1], e2 = e2[2], n = A2[0], A2 = A2[1];
  if (!n)
    return [0, 0];
  if (isLengthPercentage(n) && A2 && isLengthPercentage(A2))
    return [getAbsoluteValue(n, u2.width), getAbsoluteValue(A2, u2.height)];
  var r = hasIntrinsicValue(e2);
  if (isIdentToken(n) && (n.value === BACKGROUND_SIZE.CONTAIN || n.value === BACKGROUND_SIZE.COVER))
    return hasIntrinsicValue(e2) ? u2.width / u2.height < e2 != (n.value === BACKGROUND_SIZE.COVER) ? [u2.width, u2.width / e2] : [u2.height * e2, u2.height] : [u2.width, u2.height];
  var a2 = hasIntrinsicValue(t), o = hasIntrinsicValue(d), c = a2 || o;
  if (isAuto(n) && (!A2 || isAuto(A2)))
    return a2 && o ? [t, d] : r || c ? c && r ? [a2 ? t : d * e2, o ? d : t / e2] : [a2 ? t : u2.width, o ? d : u2.height] : [u2.width, u2.height];
  if (r)
    return r = c = 0, isLengthPercentage(n) ? c = getAbsoluteValue(n, u2.width) : isLengthPercentage(A2) && (r = getAbsoluteValue(A2, u2.height)), isAuto(n) ? c = r * e2 : A2 && !isAuto(A2) || (r = c / e2), [c, r];
  e2 = null, c = null;
  if (isLengthPercentage(n) ? e2 = getAbsoluteValue(n, u2.width) : A2 && isLengthPercentage(A2) && (c = getAbsoluteValue(A2, u2.height)), null !== (e2 = null !== (c = null === e2 || A2 && !isAuto(A2) ? c : a2 && o ? e2 / t * d : u2.height) && isAuto(n) ? a2 && o ? c / d * t : u2.width : e2) && null !== c)
    return [e2, c];
  throw new Error("Unable to calculate background-size for element");
}, getBackgroundValueForIndex = function(A2, e2) {
  e2 = A2[e2];
  return void 0 === e2 ? A2[0] : e2;
}, calculateBackgroundRepeatPath = function(A2, e2, u2, t, d) {
  var n = e2[0], r = e2[1], a2 = u2[0], o = u2[1];
  switch (A2) {
    case 2:
      return [new Vector(Math.round(t.left), Math.round(t.top + r)), new Vector(Math.round(t.left + t.width), Math.round(t.top + r)), new Vector(Math.round(t.left + t.width), Math.round(o + t.top + r)), new Vector(Math.round(t.left), Math.round(o + t.top + r))];
    case 3:
      return [new Vector(Math.round(t.left + n), Math.round(t.top)), new Vector(Math.round(t.left + n + a2), Math.round(t.top)), new Vector(Math.round(t.left + n + a2), Math.round(t.height + t.top)), new Vector(Math.round(t.left + n), Math.round(t.height + t.top))];
    case 1:
      return [new Vector(Math.round(t.left + n), Math.round(t.top + r)), new Vector(Math.round(t.left + n + a2), Math.round(t.top + r)), new Vector(Math.round(t.left + n + a2), Math.round(t.top + r + o)), new Vector(Math.round(t.left + n), Math.round(t.top + r + o))];
    default:
      return [new Vector(Math.round(d.left), Math.round(d.top)), new Vector(Math.round(d.left + d.width), Math.round(d.top)), new Vector(Math.round(d.left + d.width), Math.round(d.height + d.top)), new Vector(Math.round(d.left), Math.round(d.height + d.top))];
  }
}, SMALL_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", SAMPLE_TEXT = "Hidden Text", FontMetrics = function() {
  function A2(A3) {
    this._data = {}, this._document = A3;
  }
  return A2.prototype.parseMetrics = function(A3, e2) {
    var u2 = this._document.createElement("div"), t = this._document.createElement("img"), d = this._document.createElement("span"), n = this._document.body, A3 = (u2.style.visibility = "hidden", u2.style.fontFamily = A3, u2.style.fontSize = e2, u2.style.margin = "0", u2.style.padding = "0", u2.style.whiteSpace = "nowrap", n.appendChild(u2), t.src = SMALL_IMAGE, t.width = 1, t.height = 1, t.style.margin = "0", t.style.padding = "0", t.style.verticalAlign = "baseline", d.style.fontFamily = A3, d.style.fontSize = e2, d.style.margin = "0", d.style.padding = "0", d.appendChild(this._document.createTextNode(SAMPLE_TEXT)), u2.appendChild(d), u2.appendChild(t), t.offsetTop - d.offsetTop + 2), e2 = (u2.removeChild(d), u2.appendChild(this._document.createTextNode(SAMPLE_TEXT)), u2.style.lineHeight = "normal", t.style.verticalAlign = "super", t.offsetTop - u2.offsetTop + 2);
    return n.removeChild(u2), { baseline: A3, middle: e2 };
  }, A2.prototype.getMetrics = function(A3, e2) {
    var u2 = A3 + " " + e2;
    return void 0 === this._data[u2] && (this._data[u2] = this.parseMetrics(A3, e2)), this._data[u2];
  }, A2;
}(), Renderer = function(A2, e2) {
  this.context = A2, this.options = e2;
}, MASK_OFFSET = 1e4, isTextInputElement = (!function(u2) {
  function g(A2, e2) {
    A2 = u2.call(this, A2, e2) || this;
    return A2._activeEffects = [], A2.canvas = e2.canvas || document.createElement("canvas"), A2.ctx = A2.canvas.getContext("2d"), e2.canvas || (A2.canvas.width = Math.floor(e2.width * e2.scale), A2.canvas.height = Math.floor(e2.height * e2.scale), A2.canvas.style.width = e2.width + "px", A2.canvas.style.height = e2.height + "px"), A2.fontMetrics = new FontMetrics(document), A2.ctx.scale(A2.options.scale, A2.options.scale), A2.ctx.translate(-e2.x, -e2.y), A2.ctx.textBaseline = "bottom", A2._activeEffects = [], A2.context.logger.debug("Canvas renderer initialized (" + e2.width + "x" + e2.height + ") with scale " + e2.scale), A2;
  }
  __extends(g, u2), g.prototype.applyEffects = function(A2) {
    for (var e2 = this; this._activeEffects.length; )
      this.popEffect();
    A2.forEach(function(A3) {
      return e2.applyEffect(A3);
    });
  }, g.prototype.applyEffect = function(A2) {
    this.ctx.save(), isOpacityEffect(A2) && (this.ctx.globalAlpha = A2.opacity), isTransformEffect(A2) && (this.ctx.translate(A2.offsetX, A2.offsetY), this.ctx.transform(A2.matrix[0], A2.matrix[1], A2.matrix[2], A2.matrix[3], A2.matrix[4], A2.matrix[5]), this.ctx.translate(-A2.offsetX, -A2.offsetY)), isClipEffect(A2) && (this.path(A2.path), this.ctx.clip()), this._activeEffects.push(A2);
  }, g.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, g.prototype.renderStack = function(e2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(A2) {
        switch (A2.label) {
          case 0:
            return e2.element.container.styles.isVisible() ? [4, this.renderStackContent(e2)] : [3, 2];
          case 1:
            A2.sent(), A2.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, g.prototype.renderNode = function(e2) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(A2) {
        switch (A2.label) {
          case 0:
            return (contains(e2.container.flags, 16), e2.container.styles.isVisible()) ? [4, this.renderNodeBackgroundAndBorders(e2)] : [3, 3];
          case 1:
            return A2.sent(), [4, this.renderNodeContent(e2)];
          case 2:
            A2.sent(), A2.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, g.prototype.renderTextWithLetterSpacing = function(u3, A2, t) {
    var d = this;
    0 === A2 ? this.ctx.fillText(u3.text, u3.bounds.left, u3.bounds.top + t) : segmentGraphemes(u3.text).reduce(function(A3, e2) {
      return d.ctx.fillText(e2, A3, u3.bounds.top + t), A3 + d.ctx.measureText(e2).width;
    }, u3.bounds.left);
  }, g.prototype.createFontStyle = function(A2) {
    var e2 = A2.fontVariant.filter(function(A3) {
      return "normal" === A3 || "small-caps" === A3;
    }).join(""), u3 = fixIOSSystemFonts(A2.fontFamily).join(", "), t = isDimensionToken(A2.fontSize) ? "" + A2.fontSize.number + A2.fontSize.unit : A2.fontSize.number + "px";
    return [[A2.fontStyle, e2, A2.fontWeight, t, u3].join(" "), u3, t];
  }, g.prototype.renderTextNode = function(o, c) {
    return __awaiter(this, void 0, void 0, function() {
      var e2, u3, t, d, n, r, a2 = this;
      return __generator(this, function(A2) {
        return u3 = this.createFontStyle(c), t = u3[0], e2 = u3[1], u3 = u3[2], this.ctx.font = t, this.ctx.direction = 1 === c.direction ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", t = this.fontMetrics.getMetrics(e2, u3), d = t.baseline, n = t.middle, r = c.paintOrder, o.textBounds.forEach(function(u4) {
          r.forEach(function(A3) {
            switch (A3) {
              case 0:
                a2.ctx.fillStyle = asString(c.color), a2.renderTextWithLetterSpacing(u4, c.letterSpacing, d);
                var e3 = c.textShadow;
                e3.length && u4.text.trim().length && (e3.slice(0).reverse().forEach(function(A4) {
                  a2.ctx.shadowColor = asString(A4.color), a2.ctx.shadowOffsetX = A4.offsetX.number * a2.options.scale, a2.ctx.shadowOffsetY = A4.offsetY.number * a2.options.scale, a2.ctx.shadowBlur = A4.blur.number, a2.renderTextWithLetterSpacing(u4, c.letterSpacing, d);
                }), a2.ctx.shadowColor = "", a2.ctx.shadowOffsetX = 0, a2.ctx.shadowOffsetY = 0, a2.ctx.shadowBlur = 0), c.textDecorationLine.length && (a2.ctx.fillStyle = asString(c.textDecorationColor || c.color), c.textDecorationLine.forEach(function(A4) {
                  switch (A4) {
                    case 1:
                      a2.ctx.fillRect(u4.bounds.left, Math.round(u4.bounds.top + d), u4.bounds.width, 1);
                      break;
                    case 2:
                      a2.ctx.fillRect(u4.bounds.left, Math.round(u4.bounds.top), u4.bounds.width, 1);
                      break;
                    case 3:
                      a2.ctx.fillRect(u4.bounds.left, Math.ceil(u4.bounds.top + n), u4.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                c.webkitTextStrokeWidth && u4.text.trim().length && (a2.ctx.strokeStyle = asString(c.webkitTextStrokeColor), a2.ctx.lineWidth = c.webkitTextStrokeWidth, a2.ctx.lineJoin = window.chrome ? "miter" : "round", a2.ctx.strokeText(u4.text, u4.bounds.left, u4.bounds.top + d)), a2.ctx.strokeStyle = "", a2.ctx.lineWidth = 0, a2.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, g.prototype.renderReplacedElement = function(A2, e2, u3) {
    var t;
    u3 && 0 < A2.intrinsicWidth && 0 < A2.intrinsicHeight && (t = contentBox(A2), e2 = calculatePaddingBoxPath(e2), this.path(e2), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(u3, 0, 0, A2.intrinsicWidth, A2.intrinsicHeight, t.left, t.top, t.width, t.height), this.ctx.restore());
  }, g.prototype.renderNodeContent = function(B) {
    return __awaiter(this, void 0, void 0, function() {
      var e2, u3, t, d, n, r, a2, o, c, i, f2, s, l;
      return __generator(this, function(A2) {
        switch (A2.label) {
          case 0:
            this.applyEffects(B.getEffects(4)), e2 = B.container, u3 = B.curves, t = e2.styles, d = 0, n = e2.textNodes, A2.label = 1;
          case 1:
            return d < n.length ? (r = n[d], [4, this.renderTextNode(r, t)]) : [3, 4];
          case 2:
            A2.sent(), A2.label = 3;
          case 3:
            return d++, [3, 1];
          case 4:
            if (!(e2 instanceof ImageElementContainer))
              return [3, 8];
            A2.label = 5;
          case 5:
            return A2.trys.push([5, 7, , 8]), [4, this.context.cache.match(e2.src)];
          case 6:
            return i = A2.sent(), this.renderReplacedElement(e2, u3, i), [3, 8];
          case 7:
            return A2.sent(), this.context.logger.error("Error loading image " + e2.src), [3, 8];
          case 8:
            if (e2 instanceof CanvasElementContainer && this.renderReplacedElement(e2, u3, e2.canvas), !(e2 instanceof SVGElementContainer))
              return [3, 12];
            A2.label = 9;
          case 9:
            return A2.trys.push([9, 11, , 12]), [4, this.context.cache.match(e2.svg)];
          case 10:
            return i = A2.sent(), this.renderReplacedElement(e2, u3, i), [3, 12];
          case 11:
            return A2.sent(), this.context.logger.error("Error loading svg " + e2.svg.substring(0, 255)), [3, 12];
          case 12:
            return e2 instanceof IFrameElementContainer && e2.tree ? [4, new g(this.context, { scale: this.options.scale, backgroundColor: e2.backgroundColor, x: 0, y: 0, width: e2.width, height: e2.height }).render(e2.tree)] : [3, 14];
          case 13:
            r = A2.sent(), e2.width && e2.height && this.ctx.drawImage(r, 0, 0, e2.width, e2.height, e2.bounds.left, e2.bounds.top, e2.bounds.width, e2.bounds.height), A2.label = 14;
          case 14:
            if (e2 instanceof InputElementContainer && (a2 = Math.min(e2.bounds.width, e2.bounds.height), e2.type === CHECKBOX ? e2.checked && (this.ctx.save(), this.path([new Vector(e2.bounds.left + 0.39363 * a2, e2.bounds.top + 0.79 * a2), new Vector(e2.bounds.left + 0.16 * a2, e2.bounds.top + 0.5549 * a2), new Vector(e2.bounds.left + 0.27347 * a2, e2.bounds.top + 0.44071 * a2), new Vector(e2.bounds.left + 0.39694 * a2, e2.bounds.top + 0.5649 * a2), new Vector(e2.bounds.left + 0.72983 * a2, e2.bounds.top + 0.23 * a2), new Vector(e2.bounds.left + 0.84 * a2, e2.bounds.top + 0.34085 * a2), new Vector(e2.bounds.left + 0.39363 * a2, e2.bounds.top + 0.79 * a2)]), this.ctx.fillStyle = asString(INPUT_COLOR), this.ctx.fill(), this.ctx.restore()) : e2.type === RADIO && e2.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(e2.bounds.left + a2 / 2, e2.bounds.top + a2 / 2, a2 / 4, 0, 2 * Math.PI, true), this.ctx.fillStyle = asString(INPUT_COLOR), this.ctx.fill(), this.ctx.restore())), isTextInputElement(e2) && e2.value.length) {
              switch (a2 = this.createFontStyle(t), s = a2[0], f2 = a2[1], f2 = this.fontMetrics.getMetrics(s, f2).baseline, this.ctx.font = s, this.ctx.fillStyle = asString(t.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = canvasTextAlign(e2.styles.textAlign), l = contentBox(e2), o = 0, e2.styles.textAlign) {
                case 1:
                  o += l.width / 2;
                  break;
                case 2:
                  o += l.width;
              }
              c = l.add(o, 0, 0, -l.height / 2 + 1), this.ctx.save(), this.path([new Vector(l.left, l.top), new Vector(l.left + l.width, l.top), new Vector(l.left + l.width, l.top + l.height), new Vector(l.left, l.top + l.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new TextBounds(e2.value, c), t.letterSpacing, f2), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
            }
            if (!contains(e2.styles.display, 2048))
              return [3, 20];
            if (null === e2.styles.listStyleImage)
              return [3, 19];
            if (0 !== (c = e2.styles.listStyleImage).type)
              return [3, 18];
            i = void 0, f2 = c.url, A2.label = 15;
          case 15:
            return A2.trys.push([15, 17, , 18]), [4, this.context.cache.match(f2)];
          case 16:
            return i = A2.sent(), this.ctx.drawImage(i, e2.bounds.left - (i.width + 10), e2.bounds.top), [3, 18];
          case 17:
            return A2.sent(), this.context.logger.error("Error loading list-style-image " + f2), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            B.listValue && -1 !== e2.styles.listStyleType && (s = this.createFontStyle(t)[0], this.ctx.font = s, this.ctx.fillStyle = asString(t.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", l = new Bounds(e2.bounds.left, e2.bounds.top + getAbsoluteValue(e2.styles.paddingTop, e2.bounds.width), e2.bounds.width, computeLineHeight(t.lineHeight, t.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new TextBounds(B.listValue, l), t.letterSpacing, computeLineHeight(t.lineHeight, t.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), A2.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, g.prototype.renderStackContent = function(p) {
    return __awaiter(this, void 0, void 0, function() {
      var e2, u3, t, d, n, r, a2, o, c, i, f2, s, l, B, g2;
      return __generator(this, function(A2) {
        switch (A2.label) {
          case 0:
            return contains(p.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(p.element)];
          case 1:
            A2.sent(), e2 = 0, u3 = p.negativeZIndex, A2.label = 2;
          case 2:
            return e2 < u3.length ? (g2 = u3[e2], [4, this.renderStack(g2)]) : [3, 5];
          case 3:
            A2.sent(), A2.label = 4;
          case 4:
            return e2++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(p.element)];
          case 6:
            A2.sent(), t = 0, d = p.nonInlineLevel, A2.label = 7;
          case 7:
            return t < d.length ? (g2 = d[t], [4, this.renderNode(g2)]) : [3, 10];
          case 8:
            A2.sent(), A2.label = 9;
          case 9:
            return t++, [3, 7];
          case 10:
            n = 0, r = p.nonPositionedFloats, A2.label = 11;
          case 11:
            return n < r.length ? (g2 = r[n], [4, this.renderStack(g2)]) : [3, 14];
          case 12:
            A2.sent(), A2.label = 13;
          case 13:
            return n++, [3, 11];
          case 14:
            a2 = 0, o = p.nonPositionedInlineLevel, A2.label = 15;
          case 15:
            return a2 < o.length ? (g2 = o[a2], [4, this.renderStack(g2)]) : [3, 18];
          case 16:
            A2.sent(), A2.label = 17;
          case 17:
            return a2++, [3, 15];
          case 18:
            c = 0, i = p.inlineLevel, A2.label = 19;
          case 19:
            return c < i.length ? (g2 = i[c], [4, this.renderNode(g2)]) : [3, 22];
          case 20:
            A2.sent(), A2.label = 21;
          case 21:
            return c++, [3, 19];
          case 22:
            f2 = 0, s = p.zeroOrAutoZIndexOrTransformedOrOpacity, A2.label = 23;
          case 23:
            return f2 < s.length ? (g2 = s[f2], [4, this.renderStack(g2)]) : [3, 26];
          case 24:
            A2.sent(), A2.label = 25;
          case 25:
            return f2++, [3, 23];
          case 26:
            l = 0, B = p.positiveZIndex, A2.label = 27;
          case 27:
            return l < B.length ? (g2 = B[l], [4, this.renderStack(g2)]) : [3, 30];
          case 28:
            A2.sent(), A2.label = 29;
          case 29:
            return l++, [3, 27];
          case 30:
            return [2];
        }
      });
    });
  }, g.prototype.mask = function(A2) {
    this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(A2.slice(0).reverse()), this.ctx.closePath();
  }, g.prototype.path = function(A2) {
    this.ctx.beginPath(), this.formatPath(A2), this.ctx.closePath();
  }, g.prototype.formatPath = function(A2) {
    var t = this;
    A2.forEach(function(A3, e2) {
      var u3 = isBezierCurve(A3) ? A3.start : A3;
      0 === e2 ? t.ctx.moveTo(u3.x, u3.y) : t.ctx.lineTo(u3.x, u3.y), isBezierCurve(A3) && t.ctx.bezierCurveTo(A3.startControl.x, A3.startControl.y, A3.endControl.x, A3.endControl.y, A3.end.x, A3.end.y);
    });
  }, g.prototype.renderRepeat = function(A2, e2, u3, t) {
    this.path(A2), this.ctx.fillStyle = e2, this.ctx.translate(u3, t), this.ctx.fill(), this.ctx.translate(-u3, -t);
  }, g.prototype.resizeImage = function(A2, e2, u3) {
    var t;
    return A2.width === e2 && A2.height === u3 ? A2 : ((t = (null != (t = this.canvas.ownerDocument) ? t : document).createElement("canvas")).width = Math.max(1, e2), t.height = Math.max(1, u3), t.getContext("2d").drawImage(A2, 0, 0, A2.width, A2.height, 0, 0, e2, u3), t);
  }, g.prototype.renderBackgroundImage = function(U2) {
    return __awaiter(this, void 0, void 0, function() {
      var E2, e2, F2, u3, t, d;
      return __generator(this, function(A2) {
        switch (A2.label) {
          case 0:
            E2 = U2.styles.backgroundImage.length - 1, e2 = function(e3) {
              var u4, t2, d2, n, r, a2, o, c, i, f2, s, l, B, g2, p, h2, w, C, m, b, Q;
              return __generator(this, function(A3) {
                switch (A3.label) {
                  case 0:
                    if (0 !== e3.type)
                      return [3, 5];
                    u4 = void 0, t2 = e3.url, A3.label = 1;
                  case 1:
                    return A3.trys.push([1, 3, , 4]), [4, F2.context.cache.match(t2)];
                  case 2:
                    return u4 = A3.sent(), [3, 4];
                  case 3:
                    return A3.sent(), F2.context.logger.error("Error loading background-image " + t2), [3, 4];
                  case 4:
                    return u4 && (f2 = calculateBackgroundRendering(U2, E2, [u4.width, u4.height, u4.width / u4.height]), a2 = f2[0], l = f2[1], B = f2[2], i = f2[3], f2 = f2[4], n = F2.ctx.createPattern(F2.resizeImage(u4, i, f2), "repeat"), F2.renderRepeat(a2, n, l, B)), [3, 6];
                  case 5:
                    isLinearGradient(e3) ? (s = calculateBackgroundRendering(U2, E2, [null, null, null]), a2 = s[0], l = s[1], B = s[2], i = s[3], f2 = s[4], s = calculateGradientDirection(e3.angle, i, f2), g2 = s[0], r = s[1], c = s[2], o = s[3], s = s[4], (h2 = document.createElement("canvas")).width = i, h2.height = f2, p = h2.getContext("2d"), d2 = p.createLinearGradient(r, o, c, s), processColorStops(e3.stops, g2).forEach(function(A4) {
                      return d2.addColorStop(A4.stop, asString(A4.color));
                    }), p.fillStyle = d2, p.fillRect(0, 0, i, f2), 0 < i && 0 < f2 && (n = F2.ctx.createPattern(h2, "repeat"), F2.renderRepeat(a2, n, l, B))) : isRadialGradient(e3) && (r = calculateBackgroundRendering(U2, E2, [null, null, null]), a2 = r[0], o = r[1], c = r[2], i = r[3], f2 = r[4], s = 0 === e3.position.length ? [FIFTY_PERCENT] : e3.position, l = getAbsoluteValue(s[0], i), B = getAbsoluteValue(s[s.length - 1], f2), g2 = calculateRadius(e3, l, B, i, f2), p = g2[0], h2 = g2[1], 0 < p) && 0 < h2 && (w = F2.ctx.createRadialGradient(o + l, c + B, 0, o + l, c + B, p), processColorStops(e3.stops, 2 * p).forEach(function(A4) {
                      return w.addColorStop(A4.stop, asString(A4.color));
                    }), F2.path(a2), F2.ctx.fillStyle = w, p !== h2 ? (C = U2.bounds.left + 0.5 * U2.bounds.width, m = U2.bounds.top + 0.5 * U2.bounds.height, Q = 1 / (b = h2 / p), F2.ctx.save(), F2.ctx.translate(C, m), F2.ctx.transform(1, 0, 0, b, 0, 0), F2.ctx.translate(-C, -m), F2.ctx.fillRect(o, Q * (c - m) + m, i, f2 * Q), F2.ctx.restore()) : F2.ctx.fill()), A3.label = 6;
                  case 6:
                    return E2--, [2];
                }
              });
            }, F2 = this, u3 = 0, t = U2.styles.backgroundImage.slice(0).reverse(), A2.label = 1;
          case 1:
            return u3 < t.length ? (d = t[u3], [5, e2(d)]) : [3, 4];
          case 2:
            A2.sent(), A2.label = 3;
          case 3:
            return u3++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, g.prototype.renderSolidBorder = function(e2, u3, t) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(A2) {
        return this.path(parsePathForBorder(t, u3)), this.ctx.fillStyle = asString(e2), this.ctx.fill(), [2];
      });
    });
  }, g.prototype.renderDoubleBorder = function(u3, t, d, n) {
    return __awaiter(this, void 0, void 0, function() {
      var e2;
      return __generator(this, function(A2) {
        switch (A2.label) {
          case 0:
            return t < 3 ? [4, this.renderSolidBorder(u3, d, n)] : [3, 2];
          case 1:
            return A2.sent(), [2];
          case 2:
            return e2 = parsePathForBorderDoubleOuter(n, d), this.path(e2), this.ctx.fillStyle = asString(u3), this.ctx.fill(), e2 = parsePathForBorderDoubleInner(n, d), this.path(e2), this.ctx.fill(), [2];
        }
      });
    });
  }, g.prototype.renderNodeBackgroundAndBorders = function(i) {
    return __awaiter(this, void 0, void 0, function() {
      var e2, u3, t, d, n, r, a2, o, c = this;
      return __generator(this, function(A2) {
        switch (A2.label) {
          case 0:
            return (this.applyEffects(i.getEffects(2)), e2 = i.container.styles, u3 = !isTransparent(e2.backgroundColor) || e2.backgroundImage.length, t = [{ style: e2.borderTopStyle, color: e2.borderTopColor, width: e2.borderTopWidth }, { style: e2.borderRightStyle, color: e2.borderRightColor, width: e2.borderRightWidth }, { style: e2.borderBottomStyle, color: e2.borderBottomColor, width: e2.borderBottomWidth }, { style: e2.borderLeftStyle, color: e2.borderLeftColor, width: e2.borderLeftWidth }], d = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(e2.backgroundClip, 0), i.curves), u3 || e2.boxShadow.length) ? (this.ctx.save(), this.path(d), this.ctx.clip(), isTransparent(e2.backgroundColor) || (this.ctx.fillStyle = asString(e2.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(i.container)]) : [3, 2];
          case 1:
            A2.sent(), this.ctx.restore(), e2.boxShadow.slice(0).reverse().forEach(function(A3) {
              c.ctx.save();
              var e3 = calculateBorderBoxPath(i.curves), u4 = A3.inset ? 0 : MASK_OFFSET, t2 = transformPath(e3, -u4 + (A3.inset ? 1 : -1) * A3.spread.number, (A3.inset ? 1 : -1) * A3.spread.number, A3.spread.number * (A3.inset ? -2 : 2), A3.spread.number * (A3.inset ? -2 : 2));
              A3.inset ? (c.path(e3), c.ctx.clip(), c.mask(t2)) : (c.mask(e3), c.ctx.clip(), c.path(t2)), c.ctx.shadowOffsetX = A3.offsetX.number + u4, c.ctx.shadowOffsetY = A3.offsetY.number, c.ctx.shadowColor = asString(A3.color), c.ctx.shadowBlur = A3.blur.number, c.ctx.fillStyle = A3.inset ? asString(A3.color) : "rgba(0,0,0,1)", c.ctx.fill(), c.ctx.restore();
            }), A2.label = 2;
          case 2:
            r = n = 0, a2 = t, A2.label = 3;
          case 3:
            return r < a2.length ? 0 !== (o = a2[r]).style && !isTransparent(o.color) && 0 < o.width ? 2 !== o.style ? [3, 5] : [4, this.renderDashedDottedBorder(o.color, o.width, n, i.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return A2.sent(), [3, 11];
          case 5:
            return 3 !== o.style ? [3, 7] : [4, this.renderDashedDottedBorder(o.color, o.width, n, i.curves, 3)];
          case 6:
            return A2.sent(), [3, 11];
          case 7:
            return 4 !== o.style ? [3, 9] : [4, this.renderDoubleBorder(o.color, o.width, n, i.curves)];
          case 8:
            return A2.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(o.color, n, i.curves)];
          case 10:
            A2.sent(), A2.label = 11;
          case 11:
            n++, A2.label = 12;
          case 12:
            return r++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, g.prototype.renderDashedDottedBorder = function(s, l, B, g2, p) {
    return __awaiter(this, void 0, void 0, function() {
      var e2, u3, t, d, n, r, a2, o, c, i, f2;
      return __generator(this, function(A2) {
        return this.ctx.save(), n = parsePathForBorderStroke(g2, B), e2 = parsePathForBorder(g2, B), 2 === p && (this.path(e2), this.ctx.clip()), c = (isBezierCurve(e2[0]) ? (u3 = e2[0].start.x, e2[0].start) : (u3 = e2[0].x, e2[0])).y, d = (isBezierCurve(e2[1]) ? (t = e2[1].end.x, e2[1].end) : (t = e2[1].x, e2[1])).y, c = 0 === B || 2 === B ? Math.abs(u3 - t) : Math.abs(c - d), this.ctx.beginPath(), 3 === p ? this.formatPath(n) : this.formatPath(e2.slice(0, 2)), d = l < 3 ? 3 * l : 2 * l, n = l < 3 ? 2 * l : l, 3 === p && (n = d = l), r = true, c <= 2 * d ? r = false : c <= 2 * d + n ? (d *= a2 = c / (2 * d + n), n *= a2) : (a2 = Math.floor((c + n) / (d + n)), o = (c - a2 * d) / (a2 - 1), n = (c = (c - (a2 + 1) * d) / a2) <= 0 || Math.abs(n - o) < Math.abs(n - c) ? o : c), r && (3 === p ? this.ctx.setLineDash([0, d + n]) : this.ctx.setLineDash([d, n])), 3 === p ? (this.ctx.lineCap = "round", this.ctx.lineWidth = l) : this.ctx.lineWidth = 2 * l + 1.1, this.ctx.strokeStyle = asString(s), this.ctx.stroke(), this.ctx.setLineDash([]), 2 === p && (isBezierCurve(e2[0]) && (i = e2[3], f2 = e2[0], this.ctx.beginPath(), this.formatPath([new Vector(i.end.x, i.end.y), new Vector(f2.start.x, f2.start.y)]), this.ctx.stroke()), isBezierCurve(e2[1])) && (i = e2[1], f2 = e2[2], this.ctx.beginPath(), this.formatPath([new Vector(i.end.x, i.end.y), new Vector(f2.start.x, f2.start.y)]), this.ctx.stroke()), this.ctx.restore(), [2];
      });
    });
  }, g.prototype.render = function(u3) {
    return __awaiter(this, void 0, void 0, function() {
      var e2;
      return __generator(this, function(A2) {
        switch (A2.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = asString(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), e2 = parseStackingContexts(u3), [4, this.renderStack(e2)];
          case 1:
            return A2.sent(), this.applyEffects([]), [2, this.canvas];
        }
      });
    });
  };
}(Renderer), function(A2) {
  return A2 instanceof TextareaElementContainer || A2 instanceof SelectElementContainer || A2 instanceof InputElementContainer && A2.type !== RADIO && A2.type !== CHECKBOX;
}), calculateBackgroundCurvedPaintingArea = function(A2, e2) {
  switch (A2) {
    case 0:
      return calculateBorderBoxPath(e2);
    case 2:
      return calculateContentBoxPath(e2);
    default:
      return calculatePaddingBoxPath(e2);
  }
}, canvasTextAlign = function(A2) {
  switch (A2) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, iOSBrokenFonts = ["-apple-system", "system-ui"], fixIOSSystemFonts = function(A2) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A2.filter(function(A3) {
    return -1 === iOSBrokenFonts.indexOf(A3);
  }) : A2;
}, loadSerializedSVG = (!function(u2) {
  function A2(A3, e2) {
    A3 = u2.call(this, A3, e2) || this;
    return A3.canvas = e2.canvas || document.createElement("canvas"), A3.ctx = A3.canvas.getContext("2d"), A3.options = e2, A3.canvas.width = Math.floor(e2.width * e2.scale), A3.canvas.height = Math.floor(e2.height * e2.scale), A3.canvas.style.width = e2.width + "px", A3.canvas.style.height = e2.height + "px", A3.ctx.scale(A3.options.scale, A3.options.scale), A3.ctx.translate(-e2.x, -e2.y), A3.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + e2.width + "x" + e2.height + " at " + e2.x + "," + e2.y + ") with scale " + e2.scale), A3;
  }
  __extends(A2, u2), A2.prototype.render = function(u3) {
    return __awaiter(this, void 0, void 0, function() {
      var e2;
      return __generator(this, function(A3) {
        switch (A3.label) {
          case 0:
            return e2 = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, u3), [4, loadSerializedSVG(e2)];
          case 1:
            return e2 = A3.sent(), this.options.backgroundColor && (this.ctx.fillStyle = asString(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(e2, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  };
}(Renderer), function(t) {
  return new Promise(function(A2, e2) {
    var u2 = new Image();
    u2.onload = function() {
      A2(u2);
    }, u2.onerror = e2, u2.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
  });
});
function getDPI() {
  var A2, e2 = new Array();
  return window.screen.deviceXDPI ? (e2[0] = window.screen.deviceXDPI, e2[1] = window.screen.deviceYDPI) : ((A2 = document.createElement("DIV")).style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden", document.body.appendChild(A2), e2[0] = A2.offsetWidth, e2[1] = A2.offsetHeight, A2.parentNode.removeChild(A2)), e2;
}
function getPxByMm(A2) {
  return A2 / 25.4 * getDPI()[0];
}
"undefined" != typeof window && CacheStorage.setContext(window);
const _hoisted_1 = ["innerHTML"], _sfc_main$1 = defineComponent({ __name: "MathJax", props: { content: null, display: { default: "block" }, globalRender: { type: Boolean, default: false }, lineHeight: { default: "20px" }, punctuation: { type: Boolean, default: false }, textColor: { default: "#000" }, lineClass: { type: Boolean, default: false }, divideChinese: { type: Boolean, default: false } }, emits: ["onFirstRendered", "onUpdateRendered"], setup(u2, { expose: A2, emit: e2 }) {
  const t = u2;
  useCssVars((A3) => ({ "44eba321": u2.lineHeight, "21e12ea0": unref(o), "4ec4e95a": unref(a2), c5f0eaa4: unref(i), "1a7dd3ac": unref(c), "512d3d04": unref(f2) }));
  let d = ref(), n = computed(() => {
    var A3 = transformer(t.content, { lineBreak: "block" === t.display, wrapMathrm: true, punctuation: t.punctuation, lineClass: t.lineClass, divideChinese: t.divideChinese });
    return t.divideChinese ? A3 : `$$${A3}$$`;
  });
  function r(A3) {
    t.globalRender || renderLatex(d.value).then(() => {
      A3 && A3();
    });
  }
  watch(() => t.content, () => {
    r(() => {
      e2("onUpdateRendered");
    });
  }), onMounted(() => {
    r(() => {
      e2("onFirstRendered");
    });
  });
  let a2 = t.display, o = "block" === t.display ? "normal" : "nowrap", c = "block" === t.display ? "auto" : "hidden", i = "block" === t.display ? "100%" : "none", f2 = getPxByMm(3) + "px";
  return A2({ render: function() {
    return renderLatex(d.value);
  } }), (A3, e3) => (openBlock(), createElementBlock("div", { class: "ke-comp-math-jax", ref_key: "mathJaxRef", ref: d, style: normalizeStyle({ color: u2.textColor }), innerHTML: n.value }, null, 12, _hoisted_1));
} });
var style = "", LatexEditor_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({ __name: "LatexEditor", props: { isTool: { type: Boolean, default: true } }, setup(u2) {
  let t = ref("");
  const d = ref();
  let n = ref({ cursorNodeIndex: 0, cursorNode: d.value }), r = ref(true);
  function a2(A2) {
    var e2;
    d.value && (r.value = true, e2 = ((e2 = getSelection(r.value)) && e2.cursorNode && (n.value.cursorNode = e2.cursorNode, n.value.cursorNodeIndex = e2.cursorNodeIndex, setSelectionRange(n.value.cursorNode, n.value.cursorNodeIndex, n.value.cursorNodeIndex)), A2)["formula"], (A2 = insertNode(e2, n.value.cursorNode, n.value.cursorNodeIndex)) && (n.value.cursorNode = A2.cursorNode, n.value.cursorNodeIndex = A2.cursorIndex, setSelectionRange(n.value.cursorNode, n.value.cursorNodeIndex, n.value.cursorNodeIndex)), o());
  }
  function o() {
    var _a2;
    t.value = ((_a2 = d.value) == null ? void 0 : _a2.innerText) || "";
  }
  return onMounted(() => {
    n.value.cursorNode = d.value, d.value && (observerNode(d.value, (A2) => {
      var _a2;
      A2 && (A2 == null ? void 0 : A2.anchorNode) && r.value && (1 === (A2 == null ? void 0 : A2.anchorNode.nodeType) ? ("BR" === ((_a2 = A2 == null ? void 0 : A2.anchorNode.childNodes[0]) == null ? void 0 : _a2.nodeName) && (A2 == null ? void 0 : A2.anchorNode.removeChild(A2 == null ? void 0 : A2.anchorNode.childNodes[0])), n.value.cursorNode = A2.anchorNode, n.value.cursorNodeIndex = A2.anchorOffset) : (n.value.cursorNode = d.value, n.value.cursorNodeIndex = 0), o());
    }), d.value.addEventListener("click", () => {
      r.value = true;
      var A2 = getSelection(r.value);
      A2 && A2.cursorNode && (n.value.cursorNode = A2.cursorNode, n.value.cursorNodeIndex = A2.cursorNodeIndex, setSelectionRange(n.value.cursorNode, n.value.cursorNodeIndex, n.value.cursorNodeIndex));
    }), d.value.addEventListener("keyup", (A2) => {
      "enter" === A2.code.toLocaleLowerCase() && (d.value.childNodes[n.value.cursorNodeIndex + 1].style.minHeight = "30px");
    }));
  }), (A2, e2) => (openBlock(), createElementBlock(Fragment, null, [u2.isTool ? (openBlock(), createBlock(Tool, { key: 0, onHandleClickFormula: a2 })) : createCommentVNode("", true), createElementVNode("div", { contenteditable: "true", class: "editor-content", ref_key: "editRef", ref: d }, null, 512), createElementVNode("div", null, [createVNode(unref(_sfc_main$1), { content: t.value, lineHeight: "20px", class: "latex-container" }, null, 8, ["content"])])], 64));
} });
var LatexEditor = _export_sfc(_sfc_main, [["__scopeId", "data-v-095f7326"]]);
export { LatexEditor, list as formulaTypeAllList };
