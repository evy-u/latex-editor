import "vue";
var tl = Object.defineProperty, dl = (d, e, u) => e in d ? tl(d, e, { enumerable: !0, configurable: !0, writable: !0, value: u }) : d[e] = u, nt = (d, e, u) => (dl(d, typeof e != "symbol" ? e + "" : e, u), u), It = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, pr = {}, rl = { get exports() {
  return pr;
}, set exports(d) {
  pr = d;
} };
(function(d, e) {
  (function() {
    var u, r = "Expected a function", c = "__lodash_hash_undefined__", a = "__lodash_placeholder__", B = 16, f = 32, F = 64, w = 128, g = 256, U = 1 / 0, m = 9007199254740991, b = NaN, y = 4294967295, I = [["ary", w], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", B], ["flip", 512], ["partial", f], ["partialRight", F], ["rearg", g]], K = "[object Arguments]", x = "[object Array]", G = "[object Boolean]", $ = "[object Date]", Z = "[object Error]", O = "[object Function]", nA = "[object GeneratorFunction]", R = "[object Map]", oA = "[object Number]", hA = "[object Object]", JA = "[object Promise]", De = "[object RegExp]", IA = "[object Set]", vA = "[object String]", GA = "[object Symbol]", ie = "[object WeakMap]", KA = "[object ArrayBuffer]", ZA = "[object DataView]", Bt = "[object Float32Array]", fu = "[object Float64Array]", Mr = "[object Int8Array]", Or = "[object Int16Array]", kr = "[object Int32Array]", Tr = "[object Uint8Array]", Gr = "[object Uint8ClampedArray]", Vr = "[object Uint16Array]", Rr = "[object Uint32Array]", bo = /\b__p \+= '';/g, mo = /\b(__p \+=) '' \+/g, Ho = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Zc = /&(?:amp|lt|gt|quot|#39);/g, jc = /[&<>"']/g, yo = RegExp(Zc.source), Io = RegExp(jc.source), vo = /<%-([\s\S]+?)%>/g, Ko = /<%([\s\S]+?)%>/g, qc = /<%=([\s\S]+?)%>/g, xo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Lo = /^\w*$/, _o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nr = /[\\^$.*+?()[\]{}|]/g, So = RegExp(Nr.source), Jr = /^\s+/, Mo = /\s/, Oo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ko = /\{\n\/\* \[wrapped with (.+)\] \*/, To = /,? & /, Go = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Vo = /[()=,{}\[\]\/\s]/, Ro = /\\(\\)?/g, No = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, zc = /\w*$/, Jo = /^[-+]0x[0-9a-f]+$/i, Po = /^0b[01]+$/i, Xo = /^\[object .+?Constructor\]$/, Yo = /^0o[0-7]+$/i, Wo = /^(?:0|[1-9]\d*)$/, Zo = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, $t = /($^)/, jo = /['\n\r\u2028\u2029\\]/g, Ad = "\\ud800-\\udfff", $c = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", _u = "\\u2700-\\u27bf", je = "a-z\\xdf-\\xf6\\xf8-\\xff", Te = "A-Z\\xc0-\\xd6\\xd8-\\xde", Aa = "\\ufe0e\\ufe0f", lu = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", qo = "['’]", jA = "[" + Ad + "]", ea = "[" + lu + "]", ed = "[" + $c + "]", Pr = "[" + _u + "]", ua = "[" + je + "]", lu = "[^" + Ad + lu + "\\d+" + _u + je + Te + "]", _u = "\\ud83c[\\udffb-\\udfff]", je = "[^" + Ad + "]", ot = "(?:\\ud83c[\\udde6-\\uddff]){2}", gu = "[\\ud800-\\udbff][\\udc00-\\udfff]", Te = "[" + Te + "]", ta = "\\u200d", da = "(?:" + ua + "|" + lu + ")", lu = "(?:" + Te + "|" + lu + ")", ra = "(?:['’](?:d|ll|m|re|s|t|ve))?", na = "(?:['’](?:D|LL|M|RE|S|T|VE))?", ud = "(?:" + ed + "|" + _u + ")?", st = "[" + Aa + "]?", st = st + ud + ("(?:" + ta + "(?:" + [je, ot, gu].join("|") + ")" + st + ud + ")*"), ud = "(?:" + [Pr, ot, gu].join("|") + ")" + st, Pr = "(?:" + [je + ed + "?", ed, ot, gu, jA].join("|") + ")", zo = RegExp(qo, "g"), $o = RegExp(ed, "g"), Xr = RegExp(_u + "(?=" + _u + ")|" + Pr + st, "g"), Af = RegExp([Te + "?" + ua + "+" + ra + "(?=" + [ea, Te, "$"].join("|") + ")", lu + "+" + na + "(?=" + [ea, Te + da, "$"].join("|") + ")", Te + "?" + da + "+" + ra, Te + "+" + na, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", ud].join("|"), "g"), ef = RegExp("[" + ta + Ad + $c + Aa + "]"), uf = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, tf = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], df = -1, FA = {}, lA = (FA[Bt] = FA[fu] = FA[Mr] = FA[Or] = FA[kr] = FA[Tr] = FA[Gr] = FA[Vr] = FA[Rr] = !0, FA[K] = FA[x] = FA[KA] = FA[G] = FA[ZA] = FA[$] = FA[Z] = FA[O] = FA[R] = FA[oA] = FA[hA] = FA[De] = FA[IA] = FA[vA] = FA[ie] = !1, {}), rf = (lA[K] = lA[x] = lA[KA] = lA[ZA] = lA[G] = lA[$] = lA[Bt] = lA[fu] = lA[Mr] = lA[Or] = lA[kr] = lA[R] = lA[oA] = lA[hA] = lA[De] = lA[IA] = lA[vA] = lA[GA] = lA[Tr] = lA[Gr] = lA[Vr] = lA[Rr] = !0, lA[Z] = lA[O] = lA[ie] = !1, { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }), nf = parseFloat, cf = parseInt, je = typeof It == "object" && It && It.Object === Object && It, ot = typeof self == "object" && self && self.Object === Object && self, MA = je || ot || Function("return this")(), gu = e && !e.nodeType && e, Fu = gu && d && !d.nodeType && d, ca = Fu && Fu.exports === gu, Yr = ca && je.process, jA = function() {
      try {
        return Fu && Fu.require && Fu.require("util").types || Yr && Yr.binding && Yr.binding("util");
      } catch {
      }
    }(), aa = jA && jA.isArrayBuffer, ia = jA && jA.isDate, Ba = jA && jA.isMap, sa = jA && jA.isRegExp, oa = jA && jA.isSet, fa = jA && jA.isTypedArray;
    function ue(D, S, H) {
      switch (H.length) {
        case 0:
          return D.call(S);
        case 1:
          return D.call(S, H[0]);
        case 2:
          return D.call(S, H[0], H[1]);
        case 3:
          return D.call(S, H[0], H[1], H[2]);
      }
      return D.apply(S, H);
    }
    function af(D, S, H, W) {
      for (var q = -1, uA = D == null ? 0 : D.length; ++q < uA; ) {
        var eA = D[q];
        S(W, eA, H(eA), D);
      }
      return W;
    }
    function Be(D, S) {
      for (var H = -1, W = D == null ? 0 : D.length; ++H < W && S(D[H], H, D) !== !1; )
        ;
      return D;
    }
    function Bf(D, S) {
      for (var H = D == null ? 0 : D.length; H-- && S(D[H], H, D) !== !1; )
        ;
      return D;
    }
    function la(D, S) {
      for (var H = -1, W = D == null ? 0 : D.length; ++H < W; )
        if (!S(D[H], H, D))
          return !1;
      return !0;
    }
    function qe(D, S) {
      for (var H = -1, W = D == null ? 0 : D.length, q = 0, uA = []; ++H < W; ) {
        var eA = D[H];
        S(eA, H, D) && (uA[q++] = eA);
      }
      return uA;
    }
    function td(D, S) {
      return !!(D != null && D.length) && -1 < Su(D, S, 0);
    }
    function Wr(D, S, H) {
      for (var W = -1, q = D == null ? 0 : D.length; ++W < q; )
        if (H(S, D[W]))
          return !0;
      return !1;
    }
    function wA(D, S) {
      for (var H = -1, W = D == null ? 0 : D.length, q = Array(W); ++H < W; )
        q[H] = S(D[H], H, D);
      return q;
    }
    function ze(D, S) {
      for (var H = -1, W = S.length, q = D.length; ++H < W; )
        D[q + H] = S[H];
      return D;
    }
    function Zr(D, S, H, W) {
      var q = -1, uA = D == null ? 0 : D.length;
      for (W && uA && (H = D[++q]); ++q < uA; )
        H = S(H, D[q], q, D);
      return H;
    }
    function sf(D, S, H, W) {
      var q = D == null ? 0 : D.length;
      for (W && q && (H = D[--q]); q--; )
        H = S(H, D[q], q, D);
      return H;
    }
    function jr(D, S) {
      for (var H = -1, W = D == null ? 0 : D.length; ++H < W; )
        if (S(D[H], H, D))
          return !0;
      return !1;
    }
    var of = qr("length");
    function ga(D, S, H) {
      var W;
      return H(D, function(q, uA, eA) {
        if (S(q, uA, eA))
          return W = uA, !1;
      }), W;
    }
    function dd(D, S, H, W) {
      for (var q = D.length, uA = H + (W ? 1 : -1); W ? uA-- : ++uA < q; )
        if (S(D[uA], uA, D))
          return uA;
      return -1;
    }
    function Su(D, S, H) {
      if (S != S)
        return dd(D, Fa, H);
      for (var W = D, q = S, uA = H - 1, eA = W.length; ++uA < eA; )
        if (W[uA] === q)
          return uA;
      return -1;
    }
    function ff(D, S, H, W) {
      for (var q = H - 1, uA = D.length; ++q < uA; )
        if (W(D[q], S))
          return q;
      return -1;
    }
    function Fa(D) {
      return D != D;
    }
    function Ca(D, S) {
      var H = D == null ? 0 : D.length;
      return H ? $r(D, S) / H : b;
    }
    function qr(D) {
      return function(S) {
        return S == null ? u : S[D];
      };
    }
    function zr(D) {
      return function(S) {
        return D == null ? u : D[S];
      };
    }
    function wa(D, S, H, W, q) {
      return q(D, function(uA, eA, lt) {
        H = W ? (W = !1, uA) : S(H, uA, eA, lt);
      }), H;
    }
    function $r(D, S) {
      for (var H, W = -1, q = D.length; ++W < q; ) {
        var uA = S(D[W]);
        uA !== u && (H = H === u ? uA : H + uA);
      }
      return H;
    }
    function An(D, S) {
      for (var H = -1, W = Array(D); ++H < D; )
        W[H] = S(H);
      return W;
    }
    function Qa(D) {
      return D && D.slice(0, pa(D) + 1).replace(Jr, "");
    }
    function te(D) {
      return function(S) {
        return D(S);
      };
    }
    function en(D, S) {
      return wA(S, function(H) {
        return D[H];
      });
    }
    function ft(D, S) {
      return D.has(S);
    }
    function ha(D, S) {
      for (var H = -1, W = D.length; ++H < W && -1 < Su(S, D[H], 0); )
        ;
      return H;
    }
    function Ua(D, S) {
      for (var H = D.length; H-- && -1 < Su(S, D[H], 0); )
        ;
      return H;
    }
    var lf = zr({ À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }), gf = zr({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
    function Ff(D) {
      return "\\" + rf[D];
    }
    function Mu(D) {
      return ef.test(D);
    }
    function un(D) {
      var S = -1, H = Array(D.size);
      return D.forEach(function(W, q) {
        H[++S] = [q, W];
      }), H;
    }
    function Da(D, S) {
      return function(H) {
        return D(S(H));
      };
    }
    function $e(D, S) {
      for (var H = -1, W = D.length, q = 0, uA = []; ++H < W; ) {
        var eA = D[H];
        eA !== S && eA !== a || (D[H] = a, uA[q++] = H);
      }
      return uA;
    }
    function rd(D) {
      var S = -1, H = Array(D.size);
      return D.forEach(function(W) {
        H[++S] = W;
      }), H;
    }
    function Ou(D) {
      return (Mu(D) ? function(S) {
        for (var H = Xr.lastIndex = 0; Xr.test(S); )
          ++H;
        return H;
      } : of)(D);
    }
    function pe(D) {
      return Mu(D) ? D.match(Xr) || [] : D.split("");
    }
    function pa(D) {
      for (var S = D.length; S-- && Mo.test(D.charAt(S)); )
        ;
      return S;
    }
    var Cf = zr({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }), ku = function D(cA) {
      var H = (cA = cA == null ? MA : ku.defaults(MA.Object(), cA, ku.pick(MA, tf))).Array, ve = cA.Date, W = cA.Error, q = cA.Function, uA = cA.Math, eA = cA.Object, lt = cA.RegExp, wf = cA.String, se = cA.TypeError, nd = H.prototype, ge = q.prototype, Tu = eA.prototype, Gu = cA["__core-js_shared__"], cd = ge.toString, sA = Tu.hasOwnProperty, Qf = 0, Ea = (ge = /[^.]+$/.exec(Gu && Gu.keys && Gu.keys.IE_PROTO || "")) ? "Symbol(src)_1." + ge : "", ad = Tu.toString, hf = cd.call(eA), Uf = MA._, Df = lt("^" + cd.call(sA).replace(Nr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), ge = ca ? cA.Buffer : u, kA = cA.Symbol, id = cA.Uint8Array, ba = ge ? ge.allocUnsafe : u, Bd = Da(eA.getPrototypeOf, eA), ma = eA.create, Ha = Tu.propertyIsEnumerable, sd = nd.splice, ya = kA ? kA.isConcatSpreadable : u, gt = kA ? kA.iterator : u, Cu = kA ? kA.toStringTag : u, od = function() {
        try {
          var A = Du(eA, "defineProperty");
          return A({}, "", {}), A;
        } catch {
        }
      }(), Vu = cA.clearTimeout !== MA.clearTimeout && cA.clearTimeout, Gn = ve && ve.now !== MA.Date.now && ve.now, tn = cA.setTimeout !== MA.setTimeout && cA.setTimeout, fd = uA.ceil, ld = uA.floor, dn = eA.getOwnPropertySymbols, ge = ge ? ge.isBuffer : u, Ia = cA.isFinite, pf = nd.join, Ef = Da(eA.keys, eA), xA = uA.max, VA = uA.min, bf = ve.now, mf = cA.parseInt, va = uA.random, Hf = nd.reverse, ve = Du(cA, "DataView"), Ft = Du(cA, "Map"), Ct = Du(cA, "Promise"), Ru = Du(cA, "Set"), cA = Du(cA, "WeakMap"), wt = Du(eA, "create"), gd = cA && new cA(), Nu = {}, yf = pu(ve), If = pu(Ft), vf = pu(Ct), Kf = pu(Ru), xf = pu(cA), kA = kA ? kA.prototype : u, Qt = kA ? kA.valueOf : u, Ka = kA ? kA.toString : u;
      function o(A) {
        if (DA(A) && !z(A) && !(A instanceof rA)) {
          if (A instanceof Ee)
            return A;
          if (sA.call(A, "__wrapped__"))
            return xi(A);
        }
        return new Ee(A);
      }
      var Ju = function(A) {
        return UA(A) ? ma ? ma(A) : (rn.prototype = A, A = new rn(), rn.prototype = u, A) : {};
      };
      function rn() {
      }
      function Fd() {
      }
      function Ee(A, t) {
        this.__wrapped__ = A, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = u;
      }
      function rA(A) {
        this.__wrapped__ = A, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = y, this.__views__ = [];
      }
      function wu(A) {
        var t = -1, n = A == null ? 0 : A.length;
        for (this.clear(); ++t < n; ) {
          var i = A[t];
          this.set(i[0], i[1]);
        }
      }
      function Ge(A) {
        var t = -1, n = A == null ? 0 : A.length;
        for (this.clear(); ++t < n; ) {
          var i = A[t];
          this.set(i[0], i[1]);
        }
      }
      function Ve(A) {
        var t = -1, n = A == null ? 0 : A.length;
        for (this.clear(); ++t < n; ) {
          var i = A[t];
          this.set(i[0], i[1]);
        }
      }
      function Qu(A) {
        var t = -1, n = A == null ? 0 : A.length;
        for (this.__data__ = new Ve(); ++t < n; )
          this.add(A[t]);
      }
      function be(A) {
        A = this.__data__ = new Ge(A), this.size = A.size;
      }
      function xa(A, t) {
        var n, i = z(A), s = !i && Eu(A), l = !i && !s && du(A), C = !i && !s && !l && Wu(A), Q = i || s || l || C, h = Q ? An(A.length, wf) : [], E = h.length;
        for (n in A)
          !t && !sA.call(A, n) || Q && (n == "length" || l && (n == "offset" || n == "parent") || C && (n == "buffer" || n == "byteLength" || n == "byteOffset") || Pe(n, E)) || h.push(n);
        return h;
      }
      function La(A) {
        var t = A.length;
        return t ? A[Cn(0, t - 1)] : u;
      }
      function Lf(A, t) {
        return vd(qA(A), hu(t, 0, A.length));
      }
      function _f(A) {
        return vd(qA(A));
      }
      function nn(A, t, n) {
        (n === u || me(A[t], n)) && (n !== u || t in A) || Re(A, t, n);
      }
      function ht(A, t, n) {
        var i = A[t];
        sA.call(A, t) && me(i, n) && (n !== u || t in A) || Re(A, t, n);
      }
      function Cd(A, t) {
        for (var n = A.length; n--; )
          if (me(A[n][0], t))
            return n;
        return -1;
      }
      function Sf(A, t, n, i) {
        return Au(A, function(s, l, C) {
          t(i, s, n(s), C);
        }), i;
      }
      function _a(A, t) {
        return A && xe(t, _A(t), A);
      }
      function Re(A, t, n) {
        t == "__proto__" && od ? od(A, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : A[t] = n;
      }
      function cn(A, t) {
        for (var n = -1, i = t.length, s = H(i), l = A == null; ++n < i; )
          s[n] = l ? u : Pn(A, t[n]);
        return s;
      }
      function hu(A, t, n) {
        return A = A == A && (n !== u && (A = A <= n ? A : n), t !== u) ? t <= A ? A : t : A;
      }
      function oe(A, t, n, i, s, l) {
        var C, Q = 1 & t, h = 2 & t, E = 4 & t;
        if ((C = n ? s ? n(A, i, s, l) : n(A) : C) === u) {
          if (!UA(A))
            return A;
          var p, v, _, i = z(A);
          if (i) {
            if (Y = (P = A).length, _ = new P.constructor(Y), Y && typeof P[0] == "string" && sA.call(P, "index") && (_.index = P.index, _.input = P.input), C = _, !Q)
              return qA(A, C);
          } else {
            var Y = RA(A), P = Y == O || Y == nA;
            if (du(A))
              return di(A, Q);
            if (Y == hA || Y == K || P && !s) {
              if (C = h || P ? {} : pi(A), !Q)
                return h ? (v = _ = A, v = (p = C) && xe(v, $A(v), p), xe(_, Ui(_), v)) : (v = _a(C, p = A), xe(p, Kn(p), v));
            } else {
              if (!lA[Y])
                return s ? A : {};
              C = function(L, J, X) {
                var aA = L.constructor;
                switch (J) {
                  case KA:
                    return En(L);
                  case G:
                  case $:
                    return new aA(+L);
                  case ZA:
                    return function(dA, fA) {
                      return fA = fA ? En(dA.buffer) : dA.buffer, new dA.constructor(fA, dA.byteOffset, dA.byteLength);
                    }(L, X);
                  case Bt:
                  case fu:
                  case Mr:
                  case Or:
                  case kr:
                  case Tr:
                  case Gr:
                  case Vr:
                  case Rr:
                    return ri(L, X);
                  case R:
                    return new aA();
                  case oA:
                  case vA:
                    return new aA(L);
                  case De:
                    return function(dA) {
                      var fA = new dA.constructor(dA.source, zc.exec(dA));
                      return fA.lastIndex = dA.lastIndex, fA;
                    }(L);
                  case IA:
                    return new aA();
                  case GA:
                    return function(dA) {
                      return Qt ? eA(Qt.call(dA)) : {};
                    }(L);
                }
              }(A, Y, Q);
            }
          }
          if (s = (l = l || new be()).get(A), s)
            return s;
          l.set(A, C), ji(A) ? A.forEach(function(L) {
            C.add(oe(L, t, n, L, A, l));
          }) : Wi(A) && A.forEach(function(L, J) {
            C.set(J, oe(L, t, n, J, A, l));
          });
          var M = i ? u : (E ? h ? yn : Hn : h ? $A : _A)(A);
          Be(M || A, function(L, J) {
            M && (L = A[J = L]), ht(C, J, oe(L, t, n, J, A, l));
          });
        }
        return C;
      }
      function Sa(A, t, n) {
        var i = n.length;
        if (A == null)
          return !i;
        for (A = eA(A); i--; ) {
          var s = n[i], l = t[s], C = A[s];
          if (C === u && !(s in A) || !l(C))
            return !1;
        }
        return !0;
      }
      function Ma(A, t, n) {
        if (typeof A != "function")
          throw new se(r);
        return Ht(function() {
          A.apply(u, n);
        }, t);
      }
      function Ut(A, t, n, i) {
        var s = -1, l = td, C = !0, Q = A.length, h = [], E = t.length;
        if (Q) {
          n && (t = wA(t, te(n))), i ? (l = Wr, C = !1) : 200 <= t.length && (l = ft, C = !1, t = new Qu(t));
          A:
            for (; ++s < Q; ) {
              var v = A[s], p = n == null ? v : n(v), v = i || v !== 0 ? v : 0;
              if (C && p == p) {
                for (var _ = E; _--; )
                  if (t[_] === p)
                    continue A;
                h.push(v);
              } else
                l(t, p, i) || h.push(v);
            }
        }
        return h;
      }
      o.templateSettings = { escape: vo, evaluate: Ko, interpolate: qc, variable: "", imports: { _: o } }, (o.prototype = Fd.prototype).constructor = o, (Ee.prototype = Ju(Fd.prototype)).constructor = Ee, (rA.prototype = Ju(Fd.prototype)).constructor = rA, wu.prototype.clear = function() {
        this.__data__ = wt ? wt(null) : {}, this.size = 0;
      }, wu.prototype.delete = function(A) {
        return A = this.has(A) && delete this.__data__[A], this.size -= A ? 1 : 0, A;
      }, wu.prototype.get = function(A) {
        var t, n = this.__data__;
        return wt ? (t = n[A]) === c ? u : t : sA.call(n, A) ? n[A] : u;
      }, wu.prototype.has = function(A) {
        var t = this.__data__;
        return wt ? t[A] !== u : sA.call(t, A);
      }, wu.prototype.set = function(A, t) {
        var n = this.__data__;
        return this.size += this.has(A) ? 0 : 1, n[A] = wt && t === u ? c : t, this;
      }, Ge.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, Ge.prototype.delete = function(A) {
        var t = this.__data__;
        return !((A = Cd(t, A)) < 0 || (A == t.length - 1 ? t.pop() : sd.call(t, A, 1), --this.size, 0));
      }, Ge.prototype.get = function(A) {
        var t = this.__data__;
        return (A = Cd(t, A)) < 0 ? u : t[A][1];
      }, Ge.prototype.has = function(A) {
        return -1 < Cd(this.__data__, A);
      }, Ge.prototype.set = function(A, t) {
        var n = this.__data__, i = Cd(n, A);
        return i < 0 ? (++this.size, n.push([A, t])) : n[i][1] = t, this;
      }, Ve.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new wu(), map: new (Ft || Ge)(), string: new wu() };
      }, Ve.prototype.delete = function(A) {
        return A = Id(this, A).delete(A), this.size -= A ? 1 : 0, A;
      }, Ve.prototype.get = function(A) {
        return Id(this, A).get(A);
      }, Ve.prototype.has = function(A) {
        return Id(this, A).has(A);
      }, Ve.prototype.set = function(A, t) {
        var n = Id(this, A), i = n.size;
        return n.set(A, t), this.size += n.size == i ? 0 : 1, this;
      }, Qu.prototype.add = Qu.prototype.push = function(A) {
        return this.__data__.set(A, c), this;
      }, Qu.prototype.has = function(A) {
        return this.__data__.has(A);
      }, be.prototype.clear = function() {
        this.__data__ = new Ge(), this.size = 0;
      }, be.prototype.delete = function(n) {
        var t = this.__data__, n = t.delete(n);
        return this.size = t.size, n;
      }, be.prototype.get = function(A) {
        return this.__data__.get(A);
      }, be.prototype.has = function(A) {
        return this.__data__.has(A);
      }, be.prototype.set = function(A, t) {
        var n = this.__data__;
        if (n instanceof Ge) {
          var i = n.__data__;
          if (!Ft || i.length < 199)
            return i.push([A, t]), this.size = ++n.size, this;
          n = this.__data__ = new Ve(i);
        }
        return n.set(A, t), this.size = n.size, this;
      };
      var Au = ii(Ke), Oa = ii(Bn, !0);
      function Mf(A, t) {
        var n = !0;
        return Au(A, function(i, s, l) {
          return n = !!t(i, s, l);
        }), n;
      }
      function wd(A, t, n) {
        for (var i = -1, s = A.length; ++i < s; ) {
          var l, C, Q = A[i], h = t(Q);
          h != null && (l === u ? h == h && !re(h) : n(h, l)) && (l = h, C = Q);
        }
        return C;
      }
      function ka(A, t) {
        var n = [];
        return Au(A, function(i, s, l) {
          t(i, s, l) && n.push(i);
        }), n;
      }
      function OA(A, t, n, i, s) {
        var l = -1, C = A.length;
        for (n = n || Wf, s = s || []; ++l < C; ) {
          var Q = A[l];
          0 < t && n(Q) ? 1 < t ? OA(Q, t - 1, n, i, s) : ze(s, Q) : i || (s[s.length] = Q);
        }
        return s;
      }
      var an = Bi(), Ta = Bi(!0);
      function Ke(A, t) {
        return A && an(A, t, _A);
      }
      function Bn(A, t) {
        return A && Ta(A, t, _A);
      }
      function Qd(A, t) {
        return qe(t, function(n) {
          return Xe(A[n]);
        });
      }
      function Uu(A, t) {
        for (var n = 0, i = (t = uu(t, A)).length; A != null && n < i; )
          A = A[Le(t[n++])];
        return n && n == i ? A : u;
      }
      function Ga(A, t, n) {
        return t = t(A), z(A) ? t : ze(t, n(A));
      }
      function PA(A) {
        {
          if (A == null)
            return A === u ? "[object Undefined]" : "[object Null]";
          if (Cu && Cu in eA(A)) {
            var t = A, n = sA.call(t, Cu), i = t[Cu];
            try {
              t[Cu] = u;
              var s = !0;
            } catch {
            }
            var l = ad.call(t);
            return s && (n ? t[Cu] = i : delete t[Cu]), l;
          }
          return ad.call(A);
        }
      }
      function sn(A, t) {
        return t < A;
      }
      function Of(A, t) {
        return A != null && sA.call(A, t);
      }
      function kf(A, t) {
        return A != null && t in eA(A);
      }
      function on(A, t, n) {
        for (var i = n ? Wr : td, s = A[0].length, l = A.length, C = l, Q = H(l), h = 1 / 0, E = []; C--; ) {
          var p = A[C];
          C && t && (p = wA(p, te(t))), h = VA(p.length, h), Q[C] = !n && (t || 120 <= s && 120 <= p.length) ? new Qu(C && p) : u;
        }
        var p = A[0], v = -1, _ = Q[0];
        A:
          for (; ++v < s && E.length < h; ) {
            var P = p[v], Y = t ? t(P) : P, P = n || P !== 0 ? P : 0;
            if (!(_ ? ft(_, Y) : i(E, Y, n))) {
              for (C = l; --C; ) {
                var M = Q[C];
                if (!(M ? ft(M, Y) : i(A[C], Y, n)))
                  continue A;
              }
              _ && _.push(Y), E.push(P);
            }
          }
        return E;
      }
      function Dt(A, t, n) {
        return t = (A = Hi(A, t = uu(t, A))) == null ? A : A[Le(le(t))], t == null ? u : ue(t, A, n);
      }
      function Va(A) {
        return DA(A) && PA(A) == K;
      }
      function pt(A, t, n, i, s) {
        return A === t || (A == null || t == null || !DA(A) && !DA(t) ? A != A && t != t : function(l, C, Q, h, E, p) {
          var v = z(l), M = z(C), _ = v ? x : RA(l), M = M ? x : RA(C), Y = (_ = _ == K ? hA : _) == hA, P = (M = M == K ? hA : M) == hA, M = _ == M;
          if (M && du(l)) {
            if (!du(C))
              return !1;
            Y = !(v = !0);
          }
          return M && !Y ? (p = p || new be(), v || Wu(l) ? hi(l, C, Q, h, E, p) : function(N, L, J, X, aA, dA, fA) {
            switch (J) {
              case ZA:
                if (N.byteLength != L.byteLength || N.byteOffset != L.byteOffset)
                  return !1;
                N = N.buffer, L = L.buffer;
              case KA:
                return !(N.byteLength != L.byteLength || !dA(new id(N), new id(L)));
              case G:
              case $:
              case oA:
                return me(+N, +L);
              case Z:
                return N.name == L.name && N.message == L.message;
              case De:
              case vA:
                return N == L + "";
              case R:
                var NA = un;
              case IA:
                var bA = 1 & X;
                return NA = NA || rd, N.size != L.size && !bA ? !1 : (bA = fA.get(N), bA ? bA == L : (X |= 2, fA.set(N, L), bA = hi(NA(N), NA(L), X, aA, dA, fA), fA.delete(N), bA));
              case GA:
                if (Qt)
                  return Qt.call(N) == Qt.call(L);
            }
            return !1;
          }(l, C, _, Q, h, E, p)) : !(1 & Q) && (v = Y && sA.call(l, "__wrapped__"), _ = P && sA.call(C, "__wrapped__"), v || _) ? (Y = v ? l.value() : l, P = _ ? C.value() : C, p = p || new be(), E(Y, P, Q, h, p)) : M && (p = p || new be(), function(N, L, J, X, aA, dA) {
            var fA = 1 & J, NA = Hn(N), bA = NA.length, Ce = Hn(L).length;
            if (bA != Ce && !fA)
              return !1;
            for (var He = bA; He--; ) {
              var _e = NA[He];
              if (!(fA ? _e in L : sA.call(L, _e)))
                return !1;
            }
            var Ce = dA.get(N), bu = dA.get(L);
            if (Ce && bu)
              return Ce == L && bu == N;
            var Td = !0;
            dA.set(N, L), dA.set(L, N);
            for (var ec = fA; ++He < bA; ) {
              _e = NA[He];
              var uc, Gd = N[_e], Vd = L[_e];
              if (!((uc = X ? fA ? X(Vd, Gd, _e, L, N, dA) : X(Gd, Vd, _e, N, L, dA) : uc) === u ? Gd === Vd || aA(Gd, Vd, J, X, dA) : uc)) {
                Td = !1;
                break;
              }
              ec = ec || _e == "constructor";
            }
            return Td && !ec && (Ce = N.constructor, bu = L.constructor, Ce != bu) && "constructor" in N && "constructor" in L && !(typeof Ce == "function" && Ce instanceof Ce && typeof bu == "function" && bu instanceof bu) && (Td = !1), dA.delete(N), dA.delete(L), Td;
          }(l, C, Q, h, E, p));
        }(A, t, n, i, pt, s));
      }
      function fn(A, t, n, i) {
        var s = n.length, l = s, C = !i;
        if (A == null)
          return !l;
        for (A = eA(A); s--; ) {
          var Q = n[s];
          if (C && Q[2] ? Q[1] !== A[Q[0]] : !(Q[0] in A))
            return !1;
        }
        for (; ++s < l; ) {
          var h = (Q = n[s])[0], E = A[h], p = Q[1];
          if (C && Q[2]) {
            if (E === u && !(h in A))
              return !1;
          } else {
            var v, _ = new be();
            if (!((v = i ? i(E, p, h, A, t, _) : v) === u ? pt(p, E, 3, i, _) : v))
              return !1;
          }
        }
        return !0;
      }
      function Ra(A) {
        var t;
        return !(!UA(A) || (t = A, Ea && Ea in t)) && (Xe(A) ? Df : Xo).test(pu(A));
      }
      function Na(A) {
        return typeof A == "function" ? A : A == null ? Ae : typeof A == "object" ? z(A) ? Xa(A[0], A[1]) : Pa(A) : iB(A);
      }
      function ln(A) {
        if (!mt(A))
          return Ef(A);
        var t, n = [];
        for (t in eA(A))
          sA.call(A, t) && t != "constructor" && n.push(t);
        return n;
      }
      function Tf(A) {
        if (UA(A)) {
          var t, n = mt(A), i = [];
          for (t in A)
            (t != "constructor" || !n && sA.call(A, t)) && i.push(t);
          return i;
        }
        var s = A, l = [];
        if (s != null)
          for (var C in eA(s))
            l.push(C);
        return l;
      }
      function gn(A, t) {
        return A < t;
      }
      function Ja(A, t) {
        var n = -1, i = zA(A) ? H(A.length) : [];
        return Au(A, function(s, l, C) {
          i[++n] = t(s, l, C);
        }), i;
      }
      function Pa(A) {
        var t = vn(A);
        return t.length == 1 && t[0][2] ? bi(t[0][0], t[0][1]) : function(n) {
          return n === A || fn(n, A, t);
        };
      }
      function Xa(A, t) {
        return xn(A) && Ei(t) ? bi(Le(A), t) : function(n) {
          var i = Pn(n, A);
          return i === u && i === t ? Xn(n, A) : pt(t, i, 3);
        };
      }
      function hd(A, t, n, i, s) {
        A !== t && an(t, function(l, C) {
          var Q, h, E, p, v, _, Y, P, M, N, L, J, X;
          s = s || new be(), UA(l) ? (h = t, p = n, v = hd, _ = i, Y = s, L = _n(Q = A, E = C), J = _n(h, E), (X = Y.get(J)) || (X = _ ? _(L, J, E + "", Q, h, Y) : u, (h = X === u) && (P = z(J), M = !P && du(J), N = !P && !M && Wu(J), X = J, P || M || N ? X = z(L) ? L : EA(L) ? qA(L) : M ? di(J, !(h = !1)) : N ? ri(J, !(h = !1)) : [] : yt(J) || Eu(J) ? Eu(X = L) ? X = $i(L) : UA(L) && !Xe(L) || (X = pi(J)) : h = !1), h && (Y.set(J, X), v(X, J, p, _, Y), Y.delete(J))), nn(Q, E, X)) : (P = i ? i(_n(A, C), l, C + "", A, t, s) : u, nn(A, C, P = P === u ? l : P));
        }, $A);
      }
      function Ya(A, t) {
        var n = A.length;
        if (n)
          return Pe(t += t < 0 ? n : 0, n) ? A[t] : u;
      }
      function Wa(l, t, n) {
        t = t.length ? wA(t, function(Q) {
          return z(Q) ? function(h) {
            return Uu(h, Q.length === 1 ? Q[0] : Q);
          } : Q;
        }) : [Ae];
        var i = -1;
        t = wA(t, te(j()));
        var s = Ja(l, function(Q, h, E) {
          return { criteria: wA(t, function(p) {
            return p(Q);
          }), index: ++i, value: Q };
        }), l = function(Q, h) {
          for (var E = n, p = -1, v = Q.criteria, _ = h.criteria, Y = v.length, P = E.length; ++p < Y; ) {
            var M, N = ni(v[p], _[p]);
            if (N)
              return P <= p ? N : (M = E[p], N * (M == "desc" ? -1 : 1));
          }
          return Q.index - h.index;
        }, C = s.length;
        for (s.sort(l); C--; )
          s[C] = s[C].value;
        return s;
      }
      function Za(A, t, n) {
        for (var i = -1, s = t.length, l = {}; ++i < s; ) {
          var C = t[i], Q = Uu(A, C);
          n(Q, C) && Et(l, uu(C, A), Q);
        }
        return l;
      }
      function Fn(A, t, n, i) {
        var s = i ? ff : Su, l = -1, C = t.length, Q = A;
        for (A === t && (t = qA(t)), n && (Q = wA(A, te(n))); ++l < C; )
          for (var h = 0, E = t[l], p = n ? n(E) : E; -1 < (h = s(Q, p, h, i)); )
            Q !== A && sd.call(Q, h, 1), sd.call(A, h, 1);
        return A;
      }
      function ja(A, t) {
        for (var n = A ? t.length : 0, i = n - 1; n--; ) {
          var s, l = t[n];
          n != i && l === s || (Pe(s = l) ? sd.call(A, l, 1) : hn(A, l));
        }
      }
      function Cn(A, t) {
        return A + ld(va() * (t - A + 1));
      }
      function wn(A, t) {
        var n = "";
        if (!(!A || t < 1 || m < t))
          for (; t % 2 && (n += A), (t = ld(t / 2)) && (A += A), t; )
            ;
        return n;
      }
      function tA(A, t) {
        return Sn(mi(A, t, Ae), A + "");
      }
      function Gf(A) {
        return La(Zu(A));
      }
      function Vf(A, t) {
        return A = Zu(A), vd(A, hu(t, 0, A.length));
      }
      function Et(A, t, n, i) {
        if (UA(A))
          for (var s = -1, l = (t = uu(t, A)).length, C = l - 1, Q = A; Q != null && ++s < l; ) {
            var h, E = Le(t[s]), p = n;
            if (E === "__proto__" || E === "constructor" || E === "prototype")
              return A;
            ht(Q, E, p = s != C && (h = Q[E], (p = i ? i(h, E, Q) : u) === u) ? UA(h) ? h : Pe(t[s + 1]) ? [] : {} : p), Q = Q[E];
          }
        return A;
      }
      var qa = gd ? function(A, t) {
        return gd.set(A, t), A;
      } : Ae, kA = od ? function(A, t) {
        return od(A, "toString", { configurable: !0, enumerable: !1, value: Wn(t), writable: !0 });
      } : Ae;
      function Rf(A) {
        return vd(Zu(A));
      }
      function fe(A, t, n) {
        var i = -1, s = A.length;
        (n = s < n ? s : n) < 0 && (n += s), s = n < (t = t < 0 ? s < -t ? 0 : s + t : t) ? 0 : n - t >>> 0, t >>>= 0;
        for (var l = H(s); ++i < s; )
          l[i] = A[i + t];
        return l;
      }
      function Nf(A, t) {
        var n;
        return Au(A, function(i, s, l) {
          return !(n = t(i, s, l));
        }), !!n;
      }
      function Ud(A, t, n) {
        var i = 0, s = A == null ? i : A.length;
        if (typeof t == "number" && t == t && s <= 2147483647) {
          for (; i < s; ) {
            var l = i + s >>> 1, C = A[l];
            C !== null && !re(C) && (n ? C <= t : C < t) ? i = 1 + l : s = l;
          }
          return s;
        }
        return Qn(A, t, Ae, n);
      }
      function Qn(A, t, n, i) {
        var s = 0, l = A == null ? 0 : A.length;
        if (l === 0)
          return 0;
        for (var C = (t = n(t)) != t, Q = t === null, h = re(t), E = t === u; s < l; ) {
          var p = ld((s + l) / 2), v = n(A[p]), _ = v !== u, Y = v === null, M = v == v, P = re(v), M = C ? i || M : E ? M && (i || _) : Q ? M && _ && (i || !Y) : h ? M && _ && !Y && (i || !P) : !Y && !P && (i ? v <= t : v < t);
          M ? s = p + 1 : l = p;
        }
        return VA(l, 4294967294);
      }
      function za(A, t) {
        for (var n = -1, i = A.length, s = 0, l = []; ++n < i; ) {
          var C, Q = A[n], h = t ? t(Q) : Q;
          n && me(h, C) || (C = h, l[s++] = Q === 0 ? 0 : Q);
        }
        return l;
      }
      function $a(A) {
        return typeof A == "number" ? A : re(A) ? b : +A;
      }
      function de(A) {
        var t;
        return typeof A == "string" ? A : z(A) ? wA(A, de) + "" : re(A) ? Ka ? Ka.call(A) : "" : (t = A + "") == "0" && 1 / A == -U ? "-0" : t;
      }
      function eu(A, t, n) {
        var i = -1, s = td, l = A.length, C = !0, Q = [], h = Q;
        if (n)
          C = !1, s = Wr;
        else if (200 <= l) {
          var E = t ? null : Xf(A);
          if (E)
            return rd(E);
          C = !1, s = ft, h = new Qu();
        } else
          h = t ? [] : Q;
        A:
          for (; ++i < l; ) {
            var v = A[i], p = t ? t(v) : v, v = n || v !== 0 ? v : 0;
            if (C && p == p) {
              for (var _ = h.length; _--; )
                if (h[_] === p)
                  continue A;
              t && h.push(p), Q.push(v);
            } else
              s(h, p, n) || (h !== Q && h.push(p), Q.push(v));
          }
        return Q;
      }
      function hn(A, t) {
        return (A = Hi(A, t = uu(t, A))) == null || delete A[Le(le(t))];
      }
      function Ai(A, t, n, i) {
        return Et(A, t, n(Uu(A, t)), i);
      }
      function Dd(A, t, n, i) {
        for (var s = A.length, l = i ? s : -1; (i ? l-- : ++l < s) && t(A[l], l, A); )
          ;
        return n ? fe(A, i ? 0 : l, i ? l + 1 : s) : fe(A, i ? l + 1 : 0, i ? s : l);
      }
      function ei(A, t) {
        var n = A;
        return Zr(t, function(i, s) {
          return s.func.apply(s.thisArg, ze([i], s.args));
        }, n = A instanceof rA ? A.value() : n);
      }
      function Un(A, t, n) {
        var i = A.length;
        if (i < 2)
          return i ? eu(A[0]) : [];
        for (var s = -1, l = H(i); ++s < i; )
          for (var C = A[s], Q = -1; ++Q < i; )
            Q != s && (l[s] = Ut(l[s] || C, A[Q], t, n));
        return eu(OA(l, 1), t, n);
      }
      function ui(A, t, n) {
        for (var i = -1, s = A.length, l = t.length, C = {}; ++i < s; ) {
          var Q = i < l ? t[i] : u;
          n(C, A[i], Q);
        }
        return C;
      }
      function Dn(A) {
        return EA(A) ? A : [];
      }
      function pn(A) {
        return typeof A == "function" ? A : Ae;
      }
      function uu(A, t) {
        return z(A) ? A : xn(A, t) ? [A] : Ki(iA(A));
      }
      var Vn = tA;
      function tu(A, t, n) {
        var i = A.length;
        return n = n === u ? i : n, !t && i <= n ? A : fe(A, t, n);
      }
      var ti = Vu || function(A) {
        return MA.clearTimeout(A);
      };
      function di(A, t) {
        return t ? A.slice() : (t = A.length, t = ba ? ba(t) : new A.constructor(t), A.copy(t), t);
      }
      function En(A) {
        var t = new A.constructor(A.byteLength);
        return new id(t).set(new id(A)), t;
      }
      function ri(A, t) {
        return t = t ? En(A.buffer) : A.buffer, new A.constructor(t, A.byteOffset, A.length);
      }
      function ni(A, t) {
        if (A !== t) {
          var n = A !== u, i = A === null, s = A == A, l = re(A), C = t !== u, Q = t === null, h = t == t, E = re(t);
          if (!Q && !E && !l && t < A || l && C && h && !Q && !E || i && C && h || !n && h || !s)
            return 1;
          if (!i && !l && !E && A < t || E && n && s && !i && !l || Q && n && s || !C && s || !h)
            return -1;
        }
        return 0;
      }
      function ci(A, t, n, i) {
        for (var s = -1, l = A.length, C = n.length, Q = -1, h = t.length, E = xA(l - C, 0), p = H(h + E), v = !i; ++Q < h; )
          p[Q] = t[Q];
        for (; ++s < C; )
          (v || s < l) && (p[n[s]] = A[s]);
        for (; E--; )
          p[Q++] = A[s++];
        return p;
      }
      function ai(A, t, n, i) {
        for (var s = -1, l = A.length, C = -1, Q = n.length, h = -1, E = t.length, p = xA(l - Q, 0), v = H(p + E), _ = !i; ++s < p; )
          v[s] = A[s];
        for (var Y = s; ++h < E; )
          v[Y + h] = t[h];
        for (; ++C < Q; )
          (_ || s < l) && (v[Y + n[C]] = A[s++]);
        return v;
      }
      function qA(A, t) {
        var n = -1, i = A.length;
        for (t = t || H(i); ++n < i; )
          t[n] = A[n];
        return t;
      }
      function xe(A, t, n, i) {
        var s = !n;
        n = n || {};
        for (var l = -1, C = t.length; ++l < C; ) {
          var Q = t[l], h = i ? i(n[Q], A[Q], Q, n, A) : u;
          (s ? Re : ht)(n, Q, h = h === u ? A[Q] : h);
        }
        return n;
      }
      function pd(A, t) {
        return function(n, i) {
          var s = z(n) ? af : Sf, l = t ? t() : {};
          return s(n, A, j(i, 2), l);
        };
      }
      function Pu(A) {
        return tA(function(t, n) {
          var i = -1, s = n.length, C = 1 < s ? n[s - 1] : u, l = 2 < s ? n[2] : u, C = 3 < A.length && typeof C == "function" ? (s--, C) : u;
          for (l && XA(n[0], n[1], l) && (C = s < 3 ? u : C, s = 1), t = eA(t); ++i < s; ) {
            var Q = n[i];
            Q && A(t, Q, i, C);
          }
          return t;
        });
      }
      function ii(A, t) {
        return function(n, i) {
          if (n != null) {
            if (!zA(n))
              return A(n, i);
            for (var s = n.length, l = t ? s : -1, C = eA(n); (t ? l-- : ++l < s) && i(C[l], l, C) !== !1; )
              ;
          }
          return n;
        };
      }
      function Bi(A) {
        return function(t, n, i) {
          for (var s = -1, l = eA(t), C = i(t), Q = C.length; Q--; ) {
            var h = C[A ? Q : ++s];
            if (n(l[h], h, l) === !1)
              break;
          }
          return t;
        };
      }
      function si(A) {
        return function(t) {
          var i = Mu(t = iA(t)) ? pe(t) : u, n = i ? i[0] : t.charAt(0), i = i ? tu(i, 1).join("") : t.slice(1);
          return n[A]() + i;
        };
      }
      function Xu(A) {
        return function(t) {
          return Zr(cB(nB(t).replace(zo, "")), A, "");
        };
      }
      function bt(A) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new A();
            case 1:
              return new A(t[0]);
            case 2:
              return new A(t[0], t[1]);
            case 3:
              return new A(t[0], t[1], t[2]);
            case 4:
              return new A(t[0], t[1], t[2], t[3]);
            case 5:
              return new A(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new A(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new A(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var n = Ju(A.prototype), i = A.apply(n, t);
          return UA(i) ? i : n;
        };
      }
      function Jf(A, t, n) {
        var i = bt(A);
        return function s() {
          for (var l = arguments.length, C = H(l), Q = l, h = Yu(s); Q--; )
            C[Q] = arguments[Q];
          return h = l < 3 && C[0] !== h && C[l - 1] !== h ? [] : $e(C, h), (l -= h.length) < n ? Fi(A, t, Ed, s.placeholder, u, C, h, u, u, n - l) : ue(this && this !== MA && this instanceof s ? i : A, this, C);
        };
      }
      function oi(A) {
        return function(t, C, i) {
          var s, l = eA(t), C = (zA(t) || (s = j(C, 3), t = _A(t), C = function(Q) {
            return s(l[Q], Q, l);
          }), A(t, C, i));
          return -1 < C ? l[s ? t[C] : C] : u;
        };
      }
      function fi(A) {
        return Je(function(t) {
          var n = t.length, i = n, s = Ee.prototype.thru;
          for (A && t.reverse(); i--; ) {
            var l = t[i];
            if (typeof l != "function")
              throw new se(r);
            s && !h && yd(l) == "wrapper" && (h = new Ee([], !0));
          }
          for (i = h ? i : n; ++i < n; )
            var C = yd(l = t[i]), Q = C == "wrapper" ? In(l) : u, h = Q && Ln(Q[0]) && Q[1] == 424 && !Q[4].length && Q[9] == 1 ? h[yd(Q[0])].apply(h, Q[3]) : l.length == 1 && Ln(l) ? h[C]() : h.thru(l);
          return function() {
            var E = arguments, p = E[0];
            if (h && E.length == 1 && z(p))
              return h.plant(p).value();
            for (var v = 0, _ = n ? t[v].apply(this, E) : p; ++v < n; )
              _ = t[v].call(this, _);
            return _;
          };
        });
      }
      function Ed(A, t, n, i, s, l, C, Q, h, E) {
        var p = t & w, v = 1 & t, _ = 2 & t, Y = 24 & t, P = 512 & t, M = _ ? u : bt(A);
        return function N() {
          for (var L, J, X = arguments.length, aA = H(X), dA = X; dA--; )
            aA[dA] = arguments[dA];
          return Y && (J = function(fA, NA) {
            for (var bA = fA.length, He = 0; bA--; )
              fA[bA] === NA && ++He;
            return He;
          }(aA, L = Yu(N))), i && (aA = ci(aA, i, s, Y)), l && (aA = ai(aA, l, C, Y)), X -= J, Y && X < E ? (J = $e(aA, L), Fi(A, t, Ed, N.placeholder, n, aA, J, Q, h, E - X)) : (L = v ? n : this, J = _ ? L[A] : A, X = aA.length, Q ? aA = function(fA, NA) {
            for (var bA = fA.length, He = VA(NA.length, bA), _e = qA(fA); He--; ) {
              var Ce = NA[He];
              fA[He] = Pe(Ce, bA) ? _e[Ce] : u;
            }
            return fA;
          }(aA, Q) : P && 1 < X && aA.reverse(), p && h < X && (aA.length = h), (J = this && this !== MA && this instanceof N ? M || bt(J) : J).apply(L, aA));
        };
      }
      function li(A, t) {
        return function(n, i) {
          return n = n, s = A, l = t(i), C = {}, Ke(n, function(Q, h, E) {
            s(C, l(Q), h, E);
          }), C;
          var s, l, C;
        };
      }
      function bd(A, t) {
        return function(n, i) {
          var s;
          if (n === u && i === u)
            return t;
          if (n !== u && (s = n), i !== u) {
            if (s === u)
              return i;
            i = (typeof n == "string" || typeof i == "string" ? (n = de(n), de) : (n = $a(n), $a))(i), s = A(n, i);
          }
          return s;
        };
      }
      function bn(A) {
        return Je(function(t) {
          return t = wA(t, te(j())), tA(function(n) {
            var i = this;
            return A(t, function(s) {
              return ue(s, i, n);
            });
          });
        });
      }
      function md(A, t) {
        var n = (t = t === u ? " " : de(t)).length;
        return n < 2 ? n ? wn(t, A) : t : (n = wn(t, fd(A / Ou(t))), Mu(t) ? tu(pe(n), 0, A).join("") : n.slice(0, A));
      }
      function Pf(A, t, n, i) {
        var s = 1 & t, l = bt(A);
        return function C() {
          for (var Q = -1, h = arguments.length, E = -1, p = i.length, v = H(p + h), _ = this && this !== MA && this instanceof C ? l : A; ++E < p; )
            v[E] = i[E];
          for (; h--; )
            v[E++] = arguments[++Q];
          return ue(_, s ? n : this, v);
        };
      }
      function gi(A) {
        return function(t, n, i) {
          i && typeof i != "number" && XA(t, n, i) && (n = i = u), t = Ye(t), n === u ? (n = t, t = 0) : n = Ye(n), i = i === u ? t < n ? 1 : -1 : Ye(i);
          for (var s = t, l = i, C = A, Q = -1, h = xA(fd((n - s) / (l || 1)), 0), E = H(h); h--; )
            E[C ? h : ++Q] = s, s += l;
          return E;
        };
      }
      function Hd(A) {
        return function(t, n) {
          return typeof t == "string" && typeof n == "string" || (t = Fe(t), n = Fe(n)), A(t, n);
        };
      }
      function Fi(A, t, n, i, v, _, C, Q, h, E) {
        var p = 8 & t, v = (4 & (t = (t | (p ? f : F)) & ~(p ? F : f)) || (t &= -4), [A, t, v, p ? _ : u, p ? C : u, p ? u : _, p ? u : C, Q, h, E]), _ = n.apply(u, v);
        return Ln(A) && yi(_, v), _.placeholder = i, Ii(_, A, t);
      }
      function mn(A) {
        var t = uA[A];
        return function(n, i) {
          var s;
          return n = Fe(n), (i = i == null ? 0 : VA(AA(i), 292)) && Ia(n) ? (s = (iA(n) + "e").split("e"), +((s = (iA(t(s[0] + "e" + (+s[1] + i))) + "e").split("e"))[0] + "e" + (+s[1] - i))) : t(n);
        };
      }
      var Xf = Ru && 1 / rd(new Ru([, -0]))[1] == U ? function(A) {
        return new Ru(A);
      } : qn;
      function Ci(A) {
        return function(t) {
          var n, i, s, l = RA(t);
          return l == R ? un(t) : l == IA ? (l = t, i = -1, s = Array(l.size), l.forEach(function(C) {
            s[++i] = [C, C];
          }), s) : wA(A(n = t), function(C) {
            return [C, n[C]];
          });
        };
      }
      function Ne(A, t, n, i, s, l, C, Q) {
        var h, E, p, v, _, Y, P, M, N, L, J, X, aA, dA = 2 & t;
        if (dA || typeof A == "function")
          return (h = i ? i.length : 0) || (t &= -97, i = s = u), C = C === u ? C : xA(AA(C), 0), Q = Q === u ? Q : AA(Q), h -= s ? s.length : 0, t & F && (p = i, M = s, i = s = u), E = dA ? u : In(A), p = [A, t, n, i, s, p, M, l, C, Q], E && (M = E, C = (l = p)[1], L = M[1], X = (J = C | L) < 131, aA = L == w && C == 8 || L == w && C == g && l[7].length <= M[8] || L == 384 && M[7].length <= M[8] && C == 8, X || aA) && (1 & L && (l[2] = M[2], J |= 1 & C ? 0 : 4), (X = M[3]) && (N = l[3], l[3] = N ? ci(N, X, M[4]) : X, l[4] = N ? $e(l[3], a) : M[4]), (X = M[5]) && (N = l[5], l[5] = N ? ai(N, X, M[6]) : X, l[6] = N ? $e(l[5], a) : M[6]), (X = M[7]) && (l[7] = X), L & w && (l[8] = l[8] == null ? M[8] : VA(l[8], M[8])), l[9] == null && (l[9] = M[9]), l[0] = M[0], l[1] = J), A = p[0], t = p[1], n = p[2], i = p[3], s = p[4], !(Q = p[9] = p[9] === u ? dA ? 0 : A.length : xA(p[9] - h, 0)) && 24 & t && (t &= -25), aA = t && t != 1 ? t == 8 || t == B ? Jf(A, t, Q) : t != f && t != 33 || s.length ? Ed.apply(u, p) : Pf(A, t, n, i) : (_ = n, Y = 1 & t, P = bt(v = A), function fA() {
            return (this && this !== MA && this instanceof fA ? P : v).apply(Y ? _ : this, arguments);
          }), Ii((E ? qa : yi)(aA, p), A, t);
        throw new se(r);
      }
      function wi(A, t, n, i) {
        return A === u || me(A, Tu[n]) && !sA.call(i, n) ? t : A;
      }
      function Qi(A, t, n, i, s, l) {
        return UA(A) && UA(t) && (l.set(t, A), hd(A, t, u, Qi, l), l.delete(t)), A;
      }
      function Yf(A) {
        return yt(A) ? u : A;
      }
      function hi(A, t, n, i, s, l) {
        var C = 1 & n, Q = A.length, h = t.length;
        if (Q != h && !(C && Q < h))
          return !1;
        var h = l.get(A), E = l.get(t);
        if (h && E)
          return h == t && E == A;
        var p = -1, v = !0, _ = 2 & n ? new Qu() : u;
        for (l.set(A, t), l.set(t, A); ++p < Q; ) {
          var Y, P = A[p], M = t[p];
          if ((Y = i ? C ? i(M, P, p, t, A, l) : i(P, M, p, A, t, l) : Y) !== u) {
            if (Y)
              continue;
            v = !1;
            break;
          }
          if (_) {
            if (!jr(t, function(N, L) {
              return !ft(_, L) && (P === N || s(P, N, n, i, l)) && _.push(L);
            })) {
              v = !1;
              break;
            }
          } else if (P !== M && !s(P, M, n, i, l)) {
            v = !1;
            break;
          }
        }
        return l.delete(A), l.delete(t), v;
      }
      function Je(A) {
        return Sn(mi(A, u, Si), A + "");
      }
      function Hn(A) {
        return Ga(A, _A, Kn);
      }
      function yn(A) {
        return Ga(A, $A, Ui);
      }
      var In = gd ? function(A) {
        return gd.get(A);
      } : qn;
      function yd(A) {
        for (var t = A.name + "", n = Nu[t], i = sA.call(Nu, t) ? n.length : 0; i--; ) {
          var s = n[i], l = s.func;
          if (l == null || l == A)
            return s.name;
        }
        return t;
      }
      function Yu(A) {
        return (sA.call(o, "placeholder") ? o : A).placeholder;
      }
      function j() {
        var A = (A = o.iteratee || Zn) === Zn ? Na : A;
        return arguments.length ? A(arguments[0], arguments[1]) : A;
      }
      function Id(s, t) {
        var n, i, s = s.__data__;
        return ((i = typeof (n = t)) == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null) ? s[typeof t == "string" ? "string" : "hash"] : s.map;
      }
      function vn(A) {
        for (var t = _A(A), n = t.length; n--; ) {
          var i = t[n], s = A[i];
          t[n] = [i, s, Ei(s)];
        }
        return t;
      }
      function Du(A, t) {
        return t = t, A = (A = A) == null ? u : A[t], Ra(A) ? A : u;
      }
      var Kn = dn ? function(A) {
        return A == null ? [] : (A = eA(A), qe(dn(A), function(t) {
          return Ha.call(A, t);
        }));
      } : zn, Ui = dn ? function(A) {
        for (var t = []; A; )
          ze(t, Kn(A)), A = Bd(A);
        return t;
      } : zn, RA = PA;
      function Di(A, t, n) {
        for (var i = -1, s = (t = uu(t, A)).length, l = !1; ++i < s; ) {
          var C = Le(t[i]);
          if (!(l = A != null && n(A, C)))
            break;
          A = A[C];
        }
        return l || ++i != s ? l : !!(s = A == null ? 0 : A.length) && Md(s) && Pe(C, s) && (z(A) || Eu(A));
      }
      function pi(A) {
        return typeof A.constructor != "function" || mt(A) ? {} : Ju(Bd(A));
      }
      function Wf(A) {
        return z(A) || Eu(A) || !!(ya && A && A[ya]);
      }
      function Pe(A, t) {
        var n = typeof A;
        return !!(t = t ?? m) && (n == "number" || n != "symbol" && Wo.test(A)) && -1 < A && A % 1 == 0 && A < t;
      }
      function XA(A, t, n) {
        var i;
        return !!UA(n) && !!((i = typeof t) == "number" ? zA(n) && Pe(t, n.length) : i == "string" && t in n) && me(n[t], A);
      }
      function xn(A, t) {
        var n;
        if (!z(A))
          return (n = typeof A) == "number" || n == "symbol" || n == "boolean" || A == null || re(A) || Lo.test(A) || !xo.test(A) || t != null && A in eA(t);
      }
      function Ln(A) {
        var t = yd(A), n = o[t];
        return typeof n == "function" && t in rA.prototype && (A === n || (t = In(n)) && A === t[0]);
      }
      (ve && RA(new ve(new ArrayBuffer(1))) != ZA || Ft && RA(new Ft()) != R || Ct && RA(Ct.resolve()) != JA || Ru && RA(new Ru()) != IA || cA && RA(new cA()) != ie) && (RA = function(n) {
        var t = PA(n), n = t == hA ? n.constructor : u, n = n ? pu(n) : "";
        if (n)
          switch (n) {
            case yf:
              return ZA;
            case If:
              return R;
            case vf:
              return JA;
            case Kf:
              return IA;
            case xf:
              return ie;
          }
        return t;
      });
      var Zf = Gu ? Xe : $n;
      function mt(A) {
        var t = A && A.constructor;
        return A === (typeof t == "function" && t.prototype || Tu);
      }
      function Ei(A) {
        return A == A && !UA(A);
      }
      function bi(A, t) {
        return function(n) {
          return n != null && n[A] === t && (t !== u || A in eA(n));
        };
      }
      function mi(A, t, n) {
        return t = xA(t === u ? A.length - 1 : t, 0), function() {
          for (var i = arguments, s = -1, l = xA(i.length - t, 0), C = H(l); ++s < l; )
            C[s] = i[t + s];
          for (var s = -1, Q = H(t + 1); ++s < t; )
            Q[s] = i[s];
          return Q[t] = n(C), ue(A, this, Q);
        };
      }
      function Hi(A, t) {
        return t.length < 2 ? A : Uu(A, fe(t, 0, -1));
      }
      function _n(A, t) {
        if ((t !== "constructor" || typeof A[t] != "function") && t != "__proto__")
          return A[t];
      }
      var yi = vi(qa), Ht = tn || function(A, t) {
        return MA.setTimeout(A, t);
      }, Sn = vi(kA);
      function Ii(A, C, n) {
        var i, s, l, C = C + "";
        return Sn(A, (s = (C = (C = A = C).match(ko)) ? C[1].split(To) : [], l = n, Be(I, function(Q) {
          var h = "_." + Q[0];
          l & Q[1] && !td(s, h) && s.push(h);
        }), C = s.sort(), (n = C.length) ? (C[i = n - 1] = (1 < n ? "& " : "") + C[i], C = C.join(2 < n ? ", " : " "), A.replace(Oo, `{
/* [wrapped with ` + C + `] */
`)) : A));
      }
      function vi(A) {
        var t = 0, n = 0;
        return function() {
          var i = bf(), s = 16 - (i - n);
          if (n = i, 0 < s) {
            if (800 <= ++t)
              return arguments[0];
          } else
            t = 0;
          return A.apply(u, arguments);
        };
      }
      function vd(A, t) {
        var n = -1, i = A.length, s = i - 1;
        for (t = t === u ? i : t; ++n < t; ) {
          var l = Cn(n, s), C = A[l];
          A[l] = A[n], A[n] = C;
        }
        return A.length = t, A;
      }
      Mn = (Vu = _d(Vu = function(A) {
        var t = [];
        return A.charCodeAt(0) === 46 && t.push(""), A.replace(_o, function(n, i, s, l) {
          t.push(s ? l.replace(Ro, "$1") : i || n);
        }), t;
      }, function(A) {
        return Mn.size === 500 && Mn.clear(), A;
      })).cache;
      var Mn, Ki = Vu;
      function Le(A) {
        var t;
        return typeof A == "string" || re(A) ? A : (t = A + "") == "0" && 1 / A == -U ? "-0" : t;
      }
      function pu(A) {
        if (A != null) {
          try {
            return cd.call(A);
          } catch {
          }
          try {
            return A + "";
          } catch {
          }
        }
        return "";
      }
      function xi(A) {
        var t;
        return A instanceof rA ? A.clone() : ((t = new Ee(A.__wrapped__, A.__chain__)).__actions__ = qA(A.__actions__), t.__index__ = A.__index__, t.__values__ = A.__values__, t);
      }
      ve = tA(function(A, t) {
        return EA(A) ? Ut(A, OA(t, 1, EA, !0)) : [];
      }), Ct = tA(function(A, t) {
        var n = le(t);
        return EA(n) && (n = u), EA(A) ? Ut(A, OA(t, 1, EA, !0), j(n, 2)) : [];
      }), cA = tA(function(A, t) {
        var n = le(t);
        return EA(n) && (n = u), EA(A) ? Ut(A, OA(t, 1, EA, !0), u, n) : [];
      });
      function Li(A, t, n) {
        var i = A == null ? 0 : A.length;
        return i ? ((n = n == null ? 0 : AA(n)) < 0 && (n = xA(i + n, 0)), dd(A, j(t, 3), n)) : -1;
      }
      function _i(A, t, n) {
        var i, s = A == null ? 0 : A.length;
        return s ? (i = s - 1, n !== u && (i = AA(n), i = n < 0 ? xA(s + i, 0) : VA(i, s - 1)), dd(A, j(t, 3), i, !0)) : -1;
      }
      function Si(A) {
        return A != null && A.length ? OA(A, 1) : [];
      }
      function Mi(A) {
        return A && A.length ? A[0] : u;
      }
      Gu = tA(function(A) {
        var t = wA(A, Dn);
        return t.length && t[0] === A[0] ? on(t) : [];
      }), tn = tA(function(A) {
        var t = le(A), n = wA(A, Dn);
        return t === le(n) ? t = u : n.pop(), n.length && n[0] === A[0] ? on(n, j(t, 2)) : [];
      }), kA = tA(function(A) {
        var t = le(A), n = wA(A, Dn);
        return (t = typeof t == "function" ? t : u) && n.pop(), n.length && n[0] === A[0] ? on(n, u, t) : [];
      });
      function le(A) {
        var t = A == null ? 0 : A.length;
        return t ? A[t - 1] : u;
      }
      Vu = tA(Oi);
      function Oi(A, t) {
        return A && A.length && t && t.length ? Fn(A, t) : A;
      }
      var jf = Je(function(A, t) {
        var n = A == null ? 0 : A.length, i = cn(A, t);
        return ja(A, wA(t, function(s) {
          return Pe(s, n) ? +s : s;
        }).sort(ni)), i;
      });
      function On(A) {
        return A == null ? A : Hf.call(A);
      }
      var qf = tA(function(A) {
        return eu(OA(A, 1, EA, !0));
      }), zf = tA(function(A) {
        var t = le(A);
        return EA(t) && (t = u), eu(OA(A, 1, EA, !0), j(t, 2));
      }), $f = tA(function(A) {
        var t = typeof (t = le(A)) == "function" ? t : u;
        return eu(OA(A, 1, EA, !0), u, t);
      });
      function kn(A) {
        var t;
        return A && A.length ? (t = 0, A = qe(A, function(n) {
          return EA(n) && (t = xA(n.length, t), 1);
        }), An(t, function(n) {
          return wA(A, qr(n));
        })) : [];
      }
      function ki(A, t) {
        return A && A.length ? (A = kn(A), t == null ? A : wA(A, function(n) {
          return ue(t, u, n);
        })) : [];
      }
      var A0 = tA(function(A, t) {
        return EA(A) ? Ut(A, t) : [];
      }), e0 = tA(function(A) {
        return Un(qe(A, EA));
      }), u0 = tA(function(A) {
        var t = le(A);
        return EA(t) && (t = u), Un(qe(A, EA), j(t, 2));
      }), t0 = tA(function(A) {
        var t = typeof (t = le(A)) == "function" ? t : u;
        return Un(qe(A, EA), u, t);
      }), d0 = tA(kn), r0 = tA(function(A) {
        var t = A.length, t = typeof (t = 1 < t ? A[t - 1] : u) == "function" ? (A.pop(), t) : u;
        return ki(A, t);
      });
      function Ti(A) {
        return A = o(A), A.__chain__ = !0, A;
      }
      function Kd(A, t) {
        return t(A);
      }
      var n0 = Je(function(A) {
        function t(l) {
          return cn(l, A);
        }
        var n = A.length, i = n ? A[0] : 0, s = this.__wrapped__;
        return !(1 < n || this.__actions__.length) && s instanceof rA && Pe(i) ? ((s = s.slice(i, +i + (n ? 1 : 0))).__actions__.push({ func: Kd, args: [t], thisArg: u }), new Ee(s, this.__chain__).thru(function(l) {
          return n && !l.length && l.push(u), l;
        })) : this.thru(t);
      }), c0 = pd(function(A, t, n) {
        sA.call(A, n) ? ++A[n] : Re(A, n, 1);
      }), a0 = oi(Li), i0 = oi(_i);
      function Gi(A, t) {
        return (z(A) ? Be : Au)(A, j(t, 3));
      }
      function Vi(A, t) {
        return (z(A) ? Bf : Oa)(A, j(t, 3));
      }
      var B0 = pd(function(A, t, n) {
        sA.call(A, n) ? A[n].push(t) : Re(A, n, [t]);
      }), s0 = tA(function(A, t, n) {
        var i = -1, s = typeof t == "function", l = zA(A) ? H(A.length) : [];
        return Au(A, function(C) {
          l[++i] = s ? ue(t, C, n) : Dt(C, t, n);
        }), l;
      }), o0 = pd(function(A, t, n) {
        Re(A, n, t);
      });
      function xd(A, t) {
        return (z(A) ? wA : Ja)(A, j(t, 3));
      }
      var f0 = pd(function(A, t, n) {
        A[n ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      }), l0 = tA(function(A, t) {
        var n;
        return A == null ? [] : (1 < (n = t.length) && XA(A, t[0], t[1]) ? t = [] : 2 < n && XA(t[0], t[1], t[2]) && (t = [t[0]]), Wa(A, OA(t, 1), []));
      }), Ld = Gn || function() {
        return MA.Date.now();
      };
      function Ri(A, t, n) {
        return t = n ? u : t, t = A && t == null ? A.length : t, Ne(A, w, u, u, u, u, t);
      }
      function Ni(A, t) {
        var n;
        if (typeof t != "function")
          throw new se(r);
        return A = AA(A), function() {
          return 0 < --A && (n = t.apply(this, arguments)), A <= 1 && (t = u), n;
        };
      }
      var Tn = tA(function(A, t, n) {
        var i, s = 1;
        return n.length && (i = $e(n, Yu(Tn)), s |= f), Ne(A, s, t, n, i);
      }), Ji = tA(function(A, t, n) {
        var i, s = 3;
        return n.length && (i = $e(n, Yu(Ji)), s |= f), Ne(t, s, A, n, i);
      });
      function Pi(A, t, n) {
        var i, s, l, C, Q, h, E = 0, p = !1, v = !1, _ = !0;
        if (typeof A != "function")
          throw new se(r);
        function Y(J) {
          var X = i, aA = s;
          return i = s = u, E = J, C = A.apply(aA, X);
        }
        function P(J) {
          var X = J - h;
          return h === u || t <= X || X < 0 || v && l <= J - E;
        }
        function M() {
          var J, X = Ld();
          if (P(X))
            return N(X);
          Q = Ht(M, (J = t - ((X = X) - h), v ? VA(J, l - (X - E)) : J));
        }
        function N(J) {
          return Q = u, _ && i ? Y(J) : (i = s = u, C);
        }
        function L() {
          var J = Ld(), X = P(J);
          if (i = arguments, s = this, h = J, X) {
            if (Q === u)
              return E = J = h, Q = Ht(M, t), p ? Y(J) : C;
            if (v)
              return ti(Q), Q = Ht(M, t), Y(h);
          }
          return Q === u && (Q = Ht(M, t)), C;
        }
        return t = Fe(t) || 0, UA(n) && (p = !!n.leading, v = "maxWait" in n, l = v ? xA(Fe(n.maxWait) || 0, t) : l, _ = "trailing" in n ? !!n.trailing : _), L.cancel = function() {
          Q !== u && ti(Q), E = 0, i = h = s = Q = u;
        }, L.flush = function() {
          return Q === u ? C : N(Ld());
        }, L;
      }
      var Gn = tA(function(A, t) {
        return Ma(A, 1, t);
      }), g0 = tA(function(A, t, n) {
        return Ma(A, Fe(t) || 0, n);
      });
      function _d(A, t) {
        if (typeof A != "function" || t != null && typeof t != "function")
          throw new se(r);
        function n() {
          var i = arguments, s = t ? t.apply(this, i) : i[0], l = n.cache;
          return l.has(s) ? l.get(s) : (i = A.apply(this, i), n.cache = l.set(s, i) || l, i);
        }
        return n.cache = new (_d.Cache || Ve)(), n;
      }
      function Sd(A) {
        if (typeof A != "function")
          throw new se(r);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !A.call(this);
            case 1:
              return !A.call(this, t[0]);
            case 2:
              return !A.call(this, t[0], t[1]);
            case 3:
              return !A.call(this, t[0], t[1], t[2]);
          }
          return !A.apply(this, t);
        };
      }
      _d.Cache = Ve;
      var Vn = Vn(function(A, t) {
        var n = (t = t.length == 1 && z(t[0]) ? wA(t[0], te(j())) : wA(OA(t, 1), te(j()))).length;
        return tA(function(i) {
          for (var s = -1, l = VA(i.length, n); ++s < l; )
            i[s] = t[s].call(this, i[s]);
          return ue(A, this, i);
        });
      }), Rn = tA(function(A, t) {
        var n = $e(t, Yu(Rn));
        return Ne(A, f, u, t, n);
      }), Xi = tA(function(A, t) {
        var n = $e(t, Yu(Xi));
        return Ne(A, F, u, t, n);
      }), F0 = Je(function(A, t) {
        return Ne(A, g, u, u, u, t);
      });
      function me(A, t) {
        return A === t || A != A && t != t;
      }
      var C0 = Hd(sn), w0 = Hd(function(A, t) {
        return t <= A;
      }), Eu = Va(function() {
        return arguments;
      }()) ? Va : function(A) {
        return DA(A) && sA.call(A, "callee") && !Ha.call(A, "callee");
      }, z = H.isArray, Q0 = aa ? te(aa) : function(A) {
        return DA(A) && PA(A) == KA;
      };
      function zA(A) {
        return A != null && Md(A.length) && !Xe(A);
      }
      function EA(A) {
        return DA(A) && zA(A);
      }
      var du = ge || $n, ge = ia ? te(ia) : function(A) {
        return DA(A) && PA(A) == $;
      };
      function Nn(A) {
        var t;
        return !!DA(A) && ((t = PA(A)) == Z || t == "[object DOMException]" || typeof A.message == "string" && typeof A.name == "string" && !yt(A));
      }
      function Xe(A) {
        return !!UA(A) && ((A = PA(A)) == O || A == nA || A == "[object AsyncFunction]" || A == "[object Proxy]");
      }
      function Yi(A) {
        return typeof A == "number" && A == AA(A);
      }
      function Md(A) {
        return typeof A == "number" && -1 < A && A % 1 == 0 && A <= m;
      }
      function UA(A) {
        var t = typeof A;
        return A != null && (t == "object" || t == "function");
      }
      function DA(A) {
        return A != null && typeof A == "object";
      }
      var Wi = Ba ? te(Ba) : function(A) {
        return DA(A) && RA(A) == R;
      };
      function Zi(A) {
        return typeof A == "number" || DA(A) && PA(A) == oA;
      }
      function yt(A) {
        return !(!DA(A) || PA(A) != hA) && ((A = Bd(A)) === null || typeof (A = sA.call(A, "constructor") && A.constructor) == "function" && A instanceof A && cd.call(A) == hf);
      }
      var Jn = sa ? te(sa) : function(A) {
        return DA(A) && PA(A) == De;
      }, ji = oa ? te(oa) : function(A) {
        return DA(A) && RA(A) == IA;
      };
      function Od(A) {
        return typeof A == "string" || !z(A) && DA(A) && PA(A) == vA;
      }
      function re(A) {
        return typeof A == "symbol" || DA(A) && PA(A) == GA;
      }
      var Wu = fa ? te(fa) : function(A) {
        return DA(A) && Md(A.length) && !!FA[PA(A)];
      }, h0 = Hd(gn), U0 = Hd(function(A, t) {
        return A <= t;
      });
      function qi(A) {
        if (!A)
          return [];
        if (zA(A))
          return (Od(A) ? pe : qA)(A);
        var t;
        if (gt && A[gt]) {
          for (var n, i = A[gt](), s = []; !(n = i.next()).done; )
            s.push(n.value);
          return s;
        }
        return ((t = RA(A)) == R ? un : t == IA ? rd : Zu)(A);
      }
      function Ye(A) {
        return A ? (A = Fe(A)) === U || A === -U ? 17976931348623157e292 * (A < 0 ? -1 : 1) : A == A ? A : 0 : A === 0 ? A : 0;
      }
      function AA(t) {
        var t = Ye(t), n = t % 1;
        return t == t ? n ? t - n : t : 0;
      }
      function zi(A) {
        return A ? hu(AA(A), 0, y) : 0;
      }
      function Fe(A) {
        if (typeof A == "number")
          return A;
        if (re(A))
          return b;
        if (typeof (A = UA(A) ? UA(t = typeof A.valueOf == "function" ? A.valueOf() : A) ? t + "" : t : A) != "string")
          return A === 0 ? A : +A;
        A = Qa(A);
        var t = Po.test(A);
        return t || Yo.test(A) ? cf(A.slice(2), t ? 2 : 8) : Jo.test(A) ? b : +A;
      }
      function $i(A) {
        return xe(A, $A(A));
      }
      function iA(A) {
        return A == null ? "" : de(A);
      }
      var D0 = Pu(function(A, t) {
        if (mt(t) || zA(t))
          xe(t, _A(t), A);
        else
          for (var n in t)
            sA.call(t, n) && ht(A, n, t[n]);
      }), AB = Pu(function(A, t) {
        xe(t, $A(t), A);
      }), kd = Pu(function(A, t, n, i) {
        xe(t, $A(t), A, i);
      }), p0 = Pu(function(A, t, n, i) {
        xe(t, _A(t), A, i);
      }), E0 = Je(cn), b0 = tA(function(A, t) {
        A = eA(A);
        var n = -1, i = t.length, s = 2 < i ? t[2] : u;
        for (s && XA(t[0], t[1], s) && (i = 1); ++n < i; )
          for (var l = t[n], C = $A(l), Q = -1, h = C.length; ++Q < h; ) {
            var E = C[Q], p = A[E];
            (p === u || me(p, Tu[E]) && !sA.call(A, E)) && (A[E] = l[E]);
          }
        return A;
      }), m0 = tA(function(A) {
        return A.push(u, Qi), ue(eB, u, A);
      });
      function Pn(A, t, n) {
        return A = A == null ? u : Uu(A, t), A === u ? n : A;
      }
      function Xn(A, t) {
        return A != null && Di(A, t, kf);
      }
      var H0 = li(function(A, t, n) {
        A[t = t != null && typeof t.toString != "function" ? ad.call(t) : t] = n;
      }, Wn(Ae)), y0 = li(function(A, t, n) {
        t != null && typeof t.toString != "function" && (t = ad.call(t)), sA.call(A, t) ? A[t].push(n) : A[t] = [n];
      }, j), I0 = tA(Dt);
      function _A(A) {
        return (zA(A) ? xa : ln)(A);
      }
      function $A(A) {
        return zA(A) ? xa(A, !0) : Tf(A);
      }
      var v0 = Pu(function(A, t, n) {
        hd(A, t, n);
      }), eB = Pu(function(A, t, n, i) {
        hd(A, t, n, i);
      }), K0 = Je(function(A, t) {
        var n = {};
        if (A != null) {
          var i = !1;
          t = wA(t, function(l) {
            return l = uu(l, A), i = i || 1 < l.length, l;
          }), xe(A, yn(A), n), i && (n = oe(n, 7, Yf));
          for (var s = t.length; s--; )
            hn(n, t[s]);
        }
        return n;
      }), x0 = Je(function(A, t) {
        return A == null ? {} : Za(n = A, t, function(i, s) {
          return Xn(n, s);
        });
        var n;
      });
      function uB(A, t) {
        var n;
        return A == null ? {} : (n = wA(yn(A), function(i) {
          return [i];
        }), t = j(t), Za(A, n, function(i, s) {
          return t(i, s[0]);
        }));
      }
      var tB = Ci(_A), dB = Ci($A);
      function Zu(A) {
        return A == null ? [] : en(A, _A(A));
      }
      var L0 = Xu(function(A, t, n) {
        return t = t.toLowerCase(), A + (n ? rB(t) : t);
      });
      function rB(A) {
        return Yn(iA(A).toLowerCase());
      }
      function nB(A) {
        return (A = iA(A)) && A.replace(Zo, lf).replace($o, "");
      }
      var _0 = Xu(function(A, t, n) {
        return A + (n ? "-" : "") + t.toLowerCase();
      }), S0 = Xu(function(A, t, n) {
        return A + (n ? " " : "") + t.toLowerCase();
      }), M0 = si("toLowerCase"), O0 = Xu(function(A, t, n) {
        return A + (n ? "_" : "") + t.toLowerCase();
      }), k0 = Xu(function(A, t, n) {
        return A + (n ? " " : "") + Yn(t);
      }), T0 = Xu(function(A, t, n) {
        return A + (n ? " " : "") + t.toUpperCase();
      }), Yn = si("toUpperCase");
      function cB(A, t, n) {
        return A = iA(A), (t = n ? u : t) === u ? (n = A, uf.test(n) ? A.match(Af) || [] : A.match(Go) || []) : A.match(t) || [];
      }
      var aB = tA(function(A, t) {
        try {
          return ue(A, u, t);
        } catch (n) {
          return Nn(n) ? n : new W(n);
        }
      }), G0 = Je(function(A, t) {
        return Be(t, function(n) {
          n = Le(n), Re(A, n, Tn(A[n], A));
        }), A;
      });
      function Wn(A) {
        return function() {
          return A;
        };
      }
      var V0 = fi(), R0 = fi(!0);
      function Ae(A) {
        return A;
      }
      function Zn(A) {
        return Na(typeof A == "function" ? A : oe(A, 1));
      }
      var N0 = tA(function(A, t) {
        return function(n) {
          return Dt(n, A, t);
        };
      }), J0 = tA(function(A, t) {
        return function(n) {
          return Dt(A, n, t);
        };
      });
      function jn(A, t, n) {
        var i = _A(t), s = Qd(t, i), l = (n != null || UA(t) && (s.length || !i.length) || (n = t, t = A, A = this, s = Qd(t, _A(t))), !(UA(n) && "chain" in n && !n.chain)), C = Xe(A);
        return Be(s, function(Q) {
          var h = t[Q];
          A[Q] = h, C && (A.prototype[Q] = function() {
            var E, p = this.__chain__;
            return l || p ? (((E = A(this.__wrapped__)).__actions__ = qA(this.__actions__)).push({ func: h, args: arguments, thisArg: A }), E.__chain__ = p, E) : h.apply(A, ze([this.value()], arguments));
          });
        }), A;
      }
      function qn() {
      }
      var P0 = bn(wA), X0 = bn(la), Y0 = bn(jr);
      function iB(A) {
        return xn(A) ? qr(Le(A)) : (t = A, function(n) {
          return Uu(n, t);
        });
        var t;
      }
      var W0 = gi(), Z0 = gi(!0);
      function zn() {
        return [];
      }
      function $n() {
        return !1;
      }
      var j0 = bd(function(A, t) {
        return A + t;
      }, 0), q0 = mn("ceil"), z0 = bd(function(A, t) {
        return A / t;
      }, 1), $0 = mn("floor"), Ac, Al = bd(function(A, t) {
        return A * t;
      }, 1), el = mn("round"), ul = bd(function(A, t) {
        return A - t;
      }, 0);
      return o.after = function(A, t) {
        if (typeof t != "function")
          throw new se(r);
        return A = AA(A), function() {
          if (--A < 1)
            return t.apply(this, arguments);
        };
      }, o.ary = Ri, o.assign = D0, o.assignIn = AB, o.assignInWith = kd, o.assignWith = p0, o.at = E0, o.before = Ni, o.bind = Tn, o.bindAll = G0, o.bindKey = Ji, o.castArray = function() {
        var A;
        return arguments.length ? z(A = arguments[0]) ? A : [A] : [];
      }, o.chain = Ti, o.chunk = function(A, t, n) {
        t = (n ? XA(A, t, n) : t === u) ? 1 : xA(AA(t), 0);
        var i = A == null ? 0 : A.length;
        if (!i || t < 1)
          return [];
        for (var s = 0, l = 0, C = H(fd(i / t)); s < i; )
          C[l++] = fe(A, s, s += t);
        return C;
      }, o.compact = function(A) {
        for (var t = -1, n = A == null ? 0 : A.length, i = 0, s = []; ++t < n; ) {
          var l = A[t];
          l && (s[i++] = l);
        }
        return s;
      }, o.concat = function() {
        var A = arguments.length;
        if (!A)
          return [];
        for (var t = H(A - 1), n = arguments[0], i = A; i--; )
          t[i - 1] = arguments[i];
        return ze(z(n) ? qA(n) : [n], OA(t, 1));
      }, o.cond = function(A) {
        var t = A == null ? 0 : A.length, n = j();
        return A = t ? wA(A, function(i) {
          if (typeof i[1] != "function")
            throw new se(r);
          return [n(i[0]), i[1]];
        }) : [], tA(function(i) {
          for (var s = -1; ++s < t; ) {
            var l = A[s];
            if (ue(l[0], this, i))
              return ue(l[1], this, i);
          }
        });
      }, o.conforms = function(A) {
        return t = oe(A, 1), n = _A(t), function(i) {
          return Sa(i, t, n);
        };
        var t, n;
      }, o.constant = Wn, o.countBy = c0, o.create = function(A, t) {
        return A = Ju(A), t == null ? A : _a(A, t);
      }, o.curry = function A(t, n, i) {
        return t = Ne(t, 8, u, u, u, u, u, n = i ? u : n), t.placeholder = A.placeholder, t;
      }, o.curryRight = function A(t, n, i) {
        return t = Ne(t, B, u, u, u, u, u, n = i ? u : n), t.placeholder = A.placeholder, t;
      }, o.debounce = Pi, o.defaults = b0, o.defaultsDeep = m0, o.defer = Gn, o.delay = g0, o.difference = ve, o.differenceBy = Ct, o.differenceWith = cA, o.drop = function(A, t, n) {
        var i = A == null ? 0 : A.length;
        return i ? fe(A, (t = n || t === u ? 1 : AA(t)) < 0 ? 0 : t, i) : [];
      }, o.dropRight = function(A, t, n) {
        var i = A == null ? 0 : A.length;
        return i ? fe(A, 0, (t = i - (t = n || t === u ? 1 : AA(t))) < 0 ? 0 : t) : [];
      }, o.dropRightWhile = function(A, t) {
        return A && A.length ? Dd(A, j(t, 3), !0, !0) : [];
      }, o.dropWhile = function(A, t) {
        return A && A.length ? Dd(A, j(t, 3), !0) : [];
      }, o.fill = function(A, t, n, i) {
        var s = A == null ? 0 : A.length;
        if (s) {
          n && typeof n != "number" && XA(A, t, n) && (n = 0, i = s);
          var l = A, C = t, Q = n, h = i, s = l.length;
          for ((Q = AA(Q)) < 0 && (Q = s < -Q ? 0 : s + Q), (h = h === u || s < h ? s : AA(h)) < 0 && (h += s), h = h < Q ? 0 : zi(h); Q < h; )
            l[Q++] = C;
          return l;
        }
        return [];
      }, o.filter = function(A, t) {
        return (z(A) ? qe : ka)(A, j(t, 3));
      }, o.flatMap = function(A, t) {
        return OA(xd(A, t), 1);
      }, o.flatMapDeep = function(A, t) {
        return OA(xd(A, t), U);
      }, o.flatMapDepth = function(A, t, n) {
        return n = n === u ? 1 : AA(n), OA(xd(A, t), n);
      }, o.flatten = Si, o.flattenDeep = function(A) {
        return A != null && A.length ? OA(A, U) : [];
      }, o.flattenDepth = function(A, t) {
        return A != null && A.length ? OA(A, t = t === u ? 1 : AA(t)) : [];
      }, o.flip = function(A) {
        return Ne(A, 512);
      }, o.flow = V0, o.flowRight = R0, o.fromPairs = function(A) {
        for (var t = -1, n = A == null ? 0 : A.length, i = {}; ++t < n; ) {
          var s = A[t];
          i[s[0]] = s[1];
        }
        return i;
      }, o.functions = function(A) {
        return A == null ? [] : Qd(A, _A(A));
      }, o.functionsIn = function(A) {
        return A == null ? [] : Qd(A, $A(A));
      }, o.groupBy = B0, o.initial = function(A) {
        return A != null && A.length ? fe(A, 0, -1) : [];
      }, o.intersection = Gu, o.intersectionBy = tn, o.intersectionWith = kA, o.invert = H0, o.invertBy = y0, o.invokeMap = s0, o.iteratee = Zn, o.keyBy = o0, o.keys = _A, o.keysIn = $A, o.map = xd, o.mapKeys = function(A, t) {
        var n = {};
        return t = j(t, 3), Ke(A, function(i, s, l) {
          Re(n, t(i, s, l), i);
        }), n;
      }, o.mapValues = function(A, t) {
        var n = {};
        return t = j(t, 3), Ke(A, function(i, s, l) {
          Re(n, s, t(i, s, l));
        }), n;
      }, o.matches = function(A) {
        return Pa(oe(A, 1));
      }, o.matchesProperty = function(A, t) {
        return Xa(A, oe(t, 1));
      }, o.memoize = _d, o.merge = v0, o.mergeWith = eB, o.method = N0, o.methodOf = J0, o.mixin = jn, o.negate = Sd, o.nthArg = function(A) {
        return A = AA(A), tA(function(t) {
          return Ya(t, A);
        });
      }, o.omit = K0, o.omitBy = function(A, t) {
        return uB(A, Sd(j(t)));
      }, o.once = function(A) {
        return Ni(2, A);
      }, o.orderBy = function(A, t, n, i) {
        return A == null ? [] : Wa(A, t = z(t) ? t : t == null ? [] : [t], n = z(n = i ? u : n) ? n : n == null ? [] : [n]);
      }, o.over = P0, o.overArgs = Vn, o.overEvery = X0, o.overSome = Y0, o.partial = Rn, o.partialRight = Xi, o.partition = f0, o.pick = x0, o.pickBy = uB, o.property = iB, o.propertyOf = function(A) {
        return function(t) {
          return A == null ? u : Uu(A, t);
        };
      }, o.pull = Vu, o.pullAll = Oi, o.pullAllBy = function(A, t, n) {
        return A && A.length && t && t.length ? Fn(A, t, j(n, 2)) : A;
      }, o.pullAllWith = function(A, t, n) {
        return A && A.length && t && t.length ? Fn(A, t, u, n) : A;
      }, o.pullAt = jf, o.range = W0, o.rangeRight = Z0, o.rearg = F0, o.reject = function(A, t) {
        return (z(A) ? qe : ka)(A, Sd(j(t, 3)));
      }, o.remove = function(A, t) {
        var n = [];
        if (A && A.length) {
          var i = -1, s = [], l = A.length;
          for (t = j(t, 3); ++i < l; ) {
            var C = A[i];
            t(C, i, A) && (n.push(C), s.push(i));
          }
          ja(A, s);
        }
        return n;
      }, o.rest = function(A, t) {
        if (typeof A != "function")
          throw new se(r);
        return tA(A, t = t === u ? t : AA(t));
      }, o.reverse = On, o.sampleSize = function(A, t, n) {
        return t = (n ? XA(A, t, n) : t === u) ? 1 : AA(t), (z(A) ? Lf : Vf)(A, t);
      }, o.set = function(A, t, n) {
        return A == null ? A : Et(A, t, n);
      }, o.setWith = function(A, t, n, i) {
        return i = typeof i == "function" ? i : u, A == null ? A : Et(A, t, n, i);
      }, o.shuffle = function(A) {
        return (z(A) ? _f : Rf)(A);
      }, o.slice = function(A, t, n) {
        var i = A == null ? 0 : A.length;
        return i ? (n = n && typeof n != "number" && XA(A, t, n) ? (t = 0, i) : (t = t == null ? 0 : AA(t), n === u ? i : AA(n)), fe(A, t, n)) : [];
      }, o.sortBy = l0, o.sortedUniq = function(A) {
        return A && A.length ? za(A) : [];
      }, o.sortedUniqBy = function(A, t) {
        return A && A.length ? za(A, j(t, 2)) : [];
      }, o.split = function(A, t, n) {
        return n && typeof n != "number" && XA(A, t, n) && (t = n = u), (n = n === u ? y : n >>> 0) ? (A = iA(A)) && (typeof t == "string" || t != null && !Jn(t)) && !(t = de(t)) && Mu(A) ? tu(pe(A), 0, n) : A.split(t, n) : [];
      }, o.spread = function(A, t) {
        if (typeof A != "function")
          throw new se(r);
        return t = t == null ? 0 : xA(AA(t), 0), tA(function(s) {
          var i = s[t], s = tu(s, 0, t);
          return i && ze(s, i), ue(A, this, s);
        });
      }, o.tail = function(A) {
        var t = A == null ? 0 : A.length;
        return t ? fe(A, 1, t) : [];
      }, o.take = function(A, t, n) {
        return A && A.length ? fe(A, 0, (t = n || t === u ? 1 : AA(t)) < 0 ? 0 : t) : [];
      }, o.takeRight = function(A, t, n) {
        var i = A == null ? 0 : A.length;
        return i ? fe(A, (t = i - (t = n || t === u ? 1 : AA(t))) < 0 ? 0 : t, i) : [];
      }, o.takeRightWhile = function(A, t) {
        return A && A.length ? Dd(A, j(t, 3), !1, !0) : [];
      }, o.takeWhile = function(A, t) {
        return A && A.length ? Dd(A, j(t, 3)) : [];
      }, o.tap = function(A, t) {
        return t(A), A;
      }, o.throttle = function(A, t, n) {
        var i = !0, s = !0;
        if (typeof A != "function")
          throw new se(r);
        return UA(n) && (i = "leading" in n ? !!n.leading : i, s = "trailing" in n ? !!n.trailing : s), Pi(A, t, { leading: i, maxWait: t, trailing: s });
      }, o.thru = Kd, o.toArray = qi, o.toPairs = tB, o.toPairsIn = dB, o.toPath = function(A) {
        return z(A) ? wA(A, Le) : re(A) ? [A] : qA(Ki(iA(A)));
      }, o.toPlainObject = $i, o.transform = function(A, t, n) {
        var i, s = z(A), l = s || du(A) || Wu(A);
        return t = j(t, 4), n == null && (i = A && A.constructor, n = l ? s ? new i() : [] : UA(A) && Xe(i) ? Ju(Bd(A)) : {}), (l ? Be : Ke)(A, function(C, Q, h) {
          return t(n, C, Q, h);
        }), n;
      }, o.unary = function(A) {
        return Ri(A, 1);
      }, o.union = qf, o.unionBy = zf, o.unionWith = $f, o.uniq = function(A) {
        return A && A.length ? eu(A) : [];
      }, o.uniqBy = function(A, t) {
        return A && A.length ? eu(A, j(t, 2)) : [];
      }, o.uniqWith = function(A, t) {
        return t = typeof t == "function" ? t : u, A && A.length ? eu(A, u, t) : [];
      }, o.unset = function(A, t) {
        return A == null || hn(A, t);
      }, o.unzip = kn, o.unzipWith = ki, o.update = function(A, t, n) {
        return A == null ? A : Ai(A, t, pn(n));
      }, o.updateWith = function(A, t, n, i) {
        return i = typeof i == "function" ? i : u, A == null ? A : Ai(A, t, pn(n), i);
      }, o.values = Zu, o.valuesIn = function(A) {
        return A == null ? [] : en(A, $A(A));
      }, o.without = A0, o.words = cB, o.wrap = function(A, t) {
        return Rn(pn(t), A);
      }, o.xor = e0, o.xorBy = u0, o.xorWith = t0, o.zip = d0, o.zipObject = function(A, t) {
        return ui(A || [], t || [], ht);
      }, o.zipObjectDeep = function(A, t) {
        return ui(A || [], t || [], Et);
      }, o.zipWith = r0, o.entries = tB, o.entriesIn = dB, o.extend = AB, o.extendWith = kd, jn(o, o), o.add = j0, o.attempt = aB, o.camelCase = L0, o.capitalize = rB, o.ceil = q0, o.clamp = function(A, t, n) {
        return n === u && (n = t, t = u), n !== u && (n = (n = Fe(n)) == n ? n : 0), t !== u && (t = (t = Fe(t)) == t ? t : 0), hu(Fe(A), t, n);
      }, o.clone = function(A) {
        return oe(A, 4);
      }, o.cloneDeep = function(A) {
        return oe(A, 5);
      }, o.cloneDeepWith = function(A, t) {
        return oe(A, 5, t = typeof t == "function" ? t : u);
      }, o.cloneWith = function(A, t) {
        return oe(A, 4, t = typeof t == "function" ? t : u);
      }, o.conformsTo = function(A, t) {
        return t == null || Sa(A, t, _A(t));
      }, o.deburr = nB, o.defaultTo = function(A, t) {
        return A == null || A != A ? t : A;
      }, o.divide = z0, o.endsWith = function(A, t, n) {
        A = iA(A), t = de(t);
        var i = A.length, i = n = n === u ? i : hu(AA(n), 0, i);
        return 0 <= (n -= t.length) && A.slice(n, i) == t;
      }, o.eq = me, o.escape = function(A) {
        return (A = iA(A)) && Io.test(A) ? A.replace(jc, gf) : A;
      }, o.escapeRegExp = function(A) {
        return (A = iA(A)) && So.test(A) ? A.replace(Nr, "\\$&") : A;
      }, o.every = function(A, t, n) {
        return (z(A) ? la : Mf)(A, j(t = n && XA(A, t, n) ? u : t, 3));
      }, o.find = a0, o.findIndex = Li, o.findKey = function(A, t) {
        return ga(A, j(t, 3), Ke);
      }, o.findLast = i0, o.findLastIndex = _i, o.findLastKey = function(A, t) {
        return ga(A, j(t, 3), Bn);
      }, o.floor = $0, o.forEach = Gi, o.forEachRight = Vi, o.forIn = function(A, t) {
        return A == null ? A : an(A, j(t, 3), $A);
      }, o.forInRight = function(A, t) {
        return A == null ? A : Ta(A, j(t, 3), $A);
      }, o.forOwn = function(A, t) {
        return A && Ke(A, j(t, 3));
      }, o.forOwnRight = function(A, t) {
        return A && Bn(A, j(t, 3));
      }, o.get = Pn, o.gt = C0, o.gte = w0, o.has = function(A, t) {
        return A != null && Di(A, t, Of);
      }, o.hasIn = Xn, o.head = Mi, o.identity = Ae, o.includes = function(A, t, n, i) {
        return A = zA(A) ? A : Zu(A), n = n && !i ? AA(n) : 0, i = A.length, n < 0 && (n = xA(i + n, 0)), Od(A) ? n <= i && -1 < A.indexOf(t, n) : !!i && -1 < Su(A, t, n);
      }, o.indexOf = function(A, t, n) {
        var i = A == null ? 0 : A.length;
        return i ? Su(A, t, A = (A = n == null ? 0 : AA(n)) < 0 ? xA(i + A, 0) : A) : -1;
      }, o.inRange = function(A, t, n) {
        return t = Ye(t), n === u ? (n = t, t = 0) : n = Ye(n), (A = A = Fe(A)) >= VA(t = t, n = n) && A < xA(t, n);
      }, o.invoke = I0, o.isArguments = Eu, o.isArray = z, o.isArrayBuffer = Q0, o.isArrayLike = zA, o.isArrayLikeObject = EA, o.isBoolean = function(A) {
        return A === !0 || A === !1 || DA(A) && PA(A) == G;
      }, o.isBuffer = du, o.isDate = ge, o.isElement = function(A) {
        return DA(A) && A.nodeType === 1 && !yt(A);
      }, o.isEmpty = function(A) {
        if (A != null) {
          if (zA(A) && (z(A) || typeof A == "string" || typeof A.splice == "function" || du(A) || Wu(A) || Eu(A)))
            return !A.length;
          var t, n = RA(A);
          if (n == R || n == IA)
            return !A.size;
          if (mt(A))
            return !ln(A).length;
          for (t in A)
            if (sA.call(A, t))
              return !1;
        }
        return !0;
      }, o.isEqual = function(A, t) {
        return pt(A, t);
      }, o.isEqualWith = function(A, t, n) {
        var i = (n = typeof n == "function" ? n : u) ? n(A, t) : u;
        return i === u ? pt(A, t, u, n) : !!i;
      }, o.isError = Nn, o.isFinite = function(A) {
        return typeof A == "number" && Ia(A);
      }, o.isFunction = Xe, o.isInteger = Yi, o.isLength = Md, o.isMap = Wi, o.isMatch = function(A, t) {
        return A === t || fn(A, t, vn(t));
      }, o.isMatchWith = function(A, t, n) {
        return n = typeof n == "function" ? n : u, fn(A, t, vn(t), n);
      }, o.isNaN = function(A) {
        return Zi(A) && A != +A;
      }, o.isNative = function(A) {
        if (Zf(A))
          throw new W("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
        return Ra(A);
      }, o.isNil = function(A) {
        return A == null;
      }, o.isNull = function(A) {
        return A === null;
      }, o.isNumber = Zi, o.isObject = UA, o.isObjectLike = DA, o.isPlainObject = yt, o.isRegExp = Jn, o.isSafeInteger = function(A) {
        return Yi(A) && -m <= A && A <= m;
      }, o.isSet = ji, o.isString = Od, o.isSymbol = re, o.isTypedArray = Wu, o.isUndefined = function(A) {
        return A === u;
      }, o.isWeakMap = function(A) {
        return DA(A) && RA(A) == ie;
      }, o.isWeakSet = function(A) {
        return DA(A) && PA(A) == "[object WeakSet]";
      }, o.join = function(A, t) {
        return A == null ? "" : pf.call(A, t);
      }, o.kebabCase = _0, o.last = le, o.lastIndexOf = function(A, t, n) {
        var i = A == null ? 0 : A.length;
        if (i) {
          var s = i;
          if (n !== u && (s = (s = AA(n)) < 0 ? xA(i + s, 0) : VA(s, i - 1)), t == t) {
            var l = A, C = t;
            n = s;
            for (var Q = n + 1; Q--; )
              if (l[Q] === C)
                return Q;
            return Q;
          } else
            return dd(A, Fa, s, !0);
        }
        return -1;
      }, o.lowerCase = S0, o.lowerFirst = M0, o.lt = h0, o.lte = U0, o.max = function(A) {
        return A && A.length ? wd(A, Ae, sn) : u;
      }, o.maxBy = function(A, t) {
        return A && A.length ? wd(A, j(t, 2), sn) : u;
      }, o.mean = function(A) {
        return Ca(A, Ae);
      }, o.meanBy = function(A, t) {
        return Ca(A, j(t, 2));
      }, o.min = function(A) {
        return A && A.length ? wd(A, Ae, gn) : u;
      }, o.minBy = function(A, t) {
        return A && A.length ? wd(A, j(t, 2), gn) : u;
      }, o.stubArray = zn, o.stubFalse = $n, o.stubObject = function() {
        return {};
      }, o.stubString = function() {
        return "";
      }, o.stubTrue = function() {
        return !0;
      }, o.multiply = Al, o.nth = function(A, t) {
        return A && A.length ? Ya(A, AA(t)) : u;
      }, o.noConflict = function() {
        return MA._ === this && (MA._ = Uf), this;
      }, o.noop = qn, o.now = Ld, o.pad = function(A, t, n) {
        A = iA(A);
        var i = (t = AA(t)) ? Ou(A) : 0;
        return !t || t <= i ? A : md(ld(t = (t - i) / 2), n) + A + md(fd(t), n);
      }, o.padEnd = function(A, t, n) {
        A = iA(A);
        var i = (t = AA(t)) ? Ou(A) : 0;
        return t && i < t ? A + md(t - i, n) : A;
      }, o.padStart = function(A, t, n) {
        A = iA(A);
        var i = (t = AA(t)) ? Ou(A) : 0;
        return t && i < t ? md(t - i, n) + A : A;
      }, o.parseInt = function(A, t, n) {
        return t = n || t == null ? 0 : t && +t, mf(iA(A).replace(Jr, ""), t || 0);
      }, o.random = function(A, t, n) {
        var i;
        return n && typeof n != "boolean" && XA(A, t, n) && (t = n = u), n === u && (typeof t == "boolean" ? (n = t, t = u) : typeof A == "boolean" && (n = A, A = u)), A === u && t === u ? (A = 0, t = 1) : (A = Ye(A), t === u ? (t = A, A = 0) : t = Ye(t)), t < A && (i = A, A = t, t = i), n || A % 1 || t % 1 ? (i = va(), VA(A + i * (t - A + nf("1e-" + ((i + "").length - 1))), t)) : Cn(A, t);
      }, o.reduce = function(A, t, n) {
        var i = z(A) ? Zr : wa, s = arguments.length < 3;
        return i(A, j(t, 4), n, s, Au);
      }, o.reduceRight = function(A, t, n) {
        var i = z(A) ? sf : wa, s = arguments.length < 3;
        return i(A, j(t, 4), n, s, Oa);
      }, o.repeat = function(A, t, n) {
        return t = (n ? XA(A, t, n) : t === u) ? 1 : AA(t), wn(iA(A), t);
      }, o.replace = function() {
        var A = arguments, t = iA(A[0]);
        return A.length < 3 ? t : t.replace(A[1], A[2]);
      }, o.result = function(A, t, n) {
        var i = -1, s = (t = uu(t, A)).length;
        for (s || (s = 1, A = u); ++i < s; ) {
          var l = A == null ? u : A[Le(t[i])];
          l === u && (i = s, l = n), A = Xe(l) ? l.call(A) : l;
        }
        return A;
      }, o.round = el, o.runInContext = D, o.sample = function(A) {
        return (z(A) ? La : Gf)(A);
      }, o.size = function(A) {
        var t;
        return A == null ? 0 : zA(A) ? Od(A) ? Ou(A) : A.length : (t = RA(A)) == R || t == IA ? A.size : ln(A).length;
      }, o.snakeCase = O0, o.some = function(A, t, n) {
        return (z(A) ? jr : Nf)(A, j(t = n && XA(A, t, n) ? u : t, 3));
      }, o.sortedIndex = function(A, t) {
        return Ud(A, t);
      }, o.sortedIndexBy = function(A, t, n) {
        return Qn(A, t, j(n, 2));
      }, o.sortedIndexOf = function(A, t) {
        var n = A == null ? 0 : A.length;
        if (n) {
          var i = Ud(A, t);
          if (i < n && me(A[i], t))
            return i;
        }
        return -1;
      }, o.sortedLastIndex = function(A, t) {
        return Ud(A, t, !0);
      }, o.sortedLastIndexBy = function(A, t, n) {
        return Qn(A, t, j(n, 2), !0);
      }, o.sortedLastIndexOf = function(A, t) {
        if (A != null && A.length) {
          var n = Ud(A, t, !0) - 1;
          if (me(A[n], t))
            return n;
        }
        return -1;
      }, o.startCase = k0, o.startsWith = function(A, t, n) {
        return A = iA(A), n = n == null ? 0 : hu(AA(n), 0, A.length), t = de(t), A.slice(n, n + t.length) == t;
      }, o.subtract = ul, o.sum = function(A) {
        return A && A.length ? $r(A, Ae) : 0;
      }, o.sumBy = function(A, t) {
        return A && A.length ? $r(A, j(t, 2)) : 0;
      }, o.template = function(A, t, p) {
        var i, s, h = o.templateSettings;
        p && XA(A, t, p) && (t = u), A = iA(A), t = kd({}, t, h, wi);
        var l = _A(p = kd({}, t.imports, h.imports, wi)), C = en(p, l), Q = 0, h = t.interpolate || $t, E = "__p += '", p = lt((t.escape || $t).source + "|" + h.source + "|" + (h === qc ? No : $t).source + "|" + (t.evaluate || $t).source + "|$", "g"), v = "//# sourceURL=" + (sA.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++df + "]") + `
`;
        if (A.replace(p, function(_, Y, P, M, N, L) {
          return P = P || M, E += A.slice(Q, L).replace(jo, Ff), Y && (i = !0, E += `' +
__e(` + Y + `) +
'`), N && (s = !0, E += `';
` + N + `;
__p += '`), P && (E += `' +
((__t = (` + P + `)) == null ? '' : __t) +
'`), Q = L + _.length, _;
        }), E += `';
`, h = sA.call(t, "variable") && t.variable) {
          if (Vo.test(h))
            throw new W("Invalid `variable` option passed into `_.template`");
        } else
          E = `with (obj) {
` + E + `
}
`;
        if (E = (s ? E.replace(bo, "") : E).replace(mo, "$1").replace(Ho, "$1;"), E = "function(" + (h || "obj") + `) {
` + (h ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (s ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + E + `return __p
}`, (p = aB(function() {
          return q(l, v + "return " + E).apply(u, C);
        })).source = E, Nn(p))
          throw p;
        return p;
      }, o.times = function(A, t) {
        if ((A = AA(A)) < 1 || m < A)
          return [];
        var n = y, i = VA(A, y);
        for (t = j(t), A -= y, i = An(i, t); ++n < A; )
          t(n);
        return i;
      }, o.toFinite = Ye, o.toInteger = AA, o.toLength = zi, o.toLower = function(A) {
        return iA(A).toLowerCase();
      }, o.toNumber = Fe, o.toSafeInteger = function(A) {
        return A ? hu(AA(A), -m, m) : A === 0 ? A : 0;
      }, o.toString = iA, o.toUpper = function(A) {
        return iA(A).toUpperCase();
      }, o.trim = function(A, t, n) {
        return (A = iA(A)) && (n || t === u) ? Qa(A) : A && (t = de(t)) ? tu(n = pe(A), ha(n, t = pe(t)), Ua(n, t) + 1).join("") : A;
      }, o.trimEnd = function(A, t, n) {
        return (A = iA(A)) && (n || t === u) ? A.slice(0, pa(A) + 1) : A && (t = de(t)) ? tu(n = pe(A), 0, Ua(n, pe(t)) + 1).join("") : A;
      }, o.trimStart = function(A, t, n) {
        return (A = iA(A)) && (n || t === u) ? A.replace(Jr, "") : A && (t = de(t)) ? tu(n = pe(A), ha(n, pe(t))).join("") : A;
      }, o.truncate = function(A, s) {
        var n, C = 30, i = "...", s = (UA(s) && (n = "separator" in s ? s.separator : n, C = "length" in s ? AA(s.length) : C, i = "omission" in s ? de(s.omission) : i), (A = iA(A)).length);
        if ((s = Mu(A) ? (l = pe(A)).length : s) <= C)
          return A;
        if ((s = C - Ou(i)) < 1)
          return i;
        var l, C = l ? tu(l, 0, s).join("") : A.slice(0, s);
        if (n !== u)
          if (l && (s += C.length - s), Jn(n)) {
            if (A.slice(s).search(n)) {
              var Q, h = C;
              for ((n = n.global ? n : lt(n.source, iA(zc.exec(n)) + "g")).lastIndex = 0; Q = n.exec(h); )
                var E = Q.index;
              C = C.slice(0, E === u ? s : E);
            }
          } else
            A.indexOf(de(n), s) != s && -1 < (l = C.lastIndexOf(n)) && (C = C.slice(0, l));
        return C + i;
      }, o.unescape = function(A) {
        return (A = iA(A)) && yo.test(A) ? A.replace(Zc, Cf) : A;
      }, o.uniqueId = function(A) {
        var t = ++Qf;
        return iA(A) + t;
      }, o.upperCase = T0, o.upperFirst = Yn, o.each = Gi, o.eachRight = Vi, o.first = Mi, jn(o, (Ac = {}, Ke(o, function(A, t) {
        sA.call(o.prototype, t) || (Ac[t] = A);
      }), Ac), { chain: !1 }), o.VERSION = "4.17.21", Be(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(A) {
        o[A].placeholder = o;
      }), Be(["drop", "take"], function(A, t) {
        rA.prototype[A] = function(n) {
          n = n === u ? 1 : xA(AA(n), 0);
          var i = this.__filtered__ && !t ? new rA(this) : this.clone();
          return i.__filtered__ ? i.__takeCount__ = VA(n, i.__takeCount__) : i.__views__.push({ size: VA(n, y), type: A + (i.__dir__ < 0 ? "Right" : "") }), i;
        }, rA.prototype[A + "Right"] = function(n) {
          return this.reverse()[A](n).reverse();
        };
      }), Be(["filter", "map", "takeWhile"], function(A, t) {
        var n = t + 1, i = n == 1 || n == 3;
        rA.prototype[A] = function(s) {
          var l = this.clone();
          return l.__iteratees__.push({ iteratee: j(s, 3), type: n }), l.__filtered__ = l.__filtered__ || i, l;
        };
      }), Be(["head", "last"], function(A, t) {
        var n = "take" + (t ? "Right" : "");
        rA.prototype[A] = function() {
          return this[n](1).value()[0];
        };
      }), Be(["initial", "tail"], function(A, t) {
        var n = "drop" + (t ? "" : "Right");
        rA.prototype[A] = function() {
          return this.__filtered__ ? new rA(this) : this[n](1);
        };
      }), rA.prototype.compact = function() {
        return this.filter(Ae);
      }, rA.prototype.find = function(A) {
        return this.filter(A).head();
      }, rA.prototype.findLast = function(A) {
        return this.reverse().find(A);
      }, rA.prototype.invokeMap = tA(function(A, t) {
        return typeof A == "function" ? new rA(this) : this.map(function(n) {
          return Dt(n, A, t);
        });
      }), rA.prototype.reject = function(A) {
        return this.filter(Sd(j(A)));
      }, rA.prototype.slice = function(A, t) {
        A = AA(A);
        var n = this;
        return n.__filtered__ && (0 < A || t < 0) ? new rA(n) : (A < 0 ? n = n.takeRight(-A) : A && (n = n.drop(A)), n = t !== u ? (t = AA(t)) < 0 ? n.dropRight(-t) : n.take(t - A) : n);
      }, rA.prototype.takeRightWhile = function(A) {
        return this.reverse().takeWhile(A).reverse();
      }, rA.prototype.toArray = function() {
        return this.take(y);
      }, Ke(rA.prototype, function(A, t) {
        var n = /^(?:filter|find|map|reject)|While$/.test(t), i = /^(?:head|last)$/.test(t), s = o[i ? "take" + (t == "last" ? "Right" : "") : t], l = i || /^find/.test(t);
        s && (o.prototype[t] = function() {
          function C(M) {
            return M = s.apply(o, ze([M], E)), i && v ? M[0] : M;
          }
          var Q, h = this.__wrapped__, E = i ? [1] : arguments, P = h instanceof rA, _ = E[0], p = P || z(h), v = (p && n && typeof _ == "function" && _.length != 1 && (P = p = !1), this.__chain__), _ = !!this.__actions__.length, Y = l && !v, P = P && !_;
          return !l && p ? (h = P ? h : new rA(this), (Q = A.apply(h, E)).__actions__.push({ func: Kd, args: [C], thisArg: u }), new Ee(Q, v)) : Y && P ? A.apply(this, E) : (Q = this.thru(C), Y ? i ? Q.value()[0] : Q.value() : Q);
        });
      }), Be(["pop", "push", "shift", "sort", "splice", "unshift"], function(A) {
        var t = nd[A], n = /^(?:push|sort|unshift)$/.test(A) ? "tap" : "thru", i = /^(?:pop|shift)$/.test(A);
        o.prototype[A] = function() {
          var s, l = arguments;
          return i && !this.__chain__ ? (s = this.value(), t.apply(z(s) ? s : [], l)) : this[n](function(C) {
            return t.apply(z(C) ? C : [], l);
          });
        };
      }), Ke(rA.prototype, function(A, t) {
        var n, i = o[t];
        i && (n = i.name + "", sA.call(Nu, n) || (Nu[n] = []), Nu[n].push({ name: t, func: i }));
      }), Nu[Ed(u, 2).name] = [{ name: "wrapper", func: u }], rA.prototype.clone = function() {
        var A = new rA(this.__wrapped__);
        return A.__actions__ = qA(this.__actions__), A.__dir__ = this.__dir__, A.__filtered__ = this.__filtered__, A.__iteratees__ = qA(this.__iteratees__), A.__takeCount__ = this.__takeCount__, A.__views__ = qA(this.__views__), A;
      }, rA.prototype.reverse = function() {
        var A;
        return this.__filtered__ ? ((A = new rA(this)).__dir__ = -1, A.__filtered__ = !0) : (A = this.clone()).__dir__ *= -1, A;
      }, rA.prototype.value = function() {
        var A = this.__wrapped__.value(), t = this.__dir__, n = z(A), i = t < 0, s = n ? A.length : 0, l = function(J, X, aA) {
          for (var dA = -1, fA = aA.length; ++dA < fA; ) {
            var NA = aA[dA], bA = NA.size;
            switch (NA.type) {
              case "drop":
                J += bA;
                break;
              case "dropRight":
                X -= bA;
                break;
              case "take":
                X = VA(X, J + bA);
                break;
              case "takeRight":
                J = xA(J, X - bA);
            }
          }
          return { start: J, end: X };
        }(0, s, this.__views__), C = l.start, Q = (l = l.end) - C, h = i ? l : C - 1, E = this.__iteratees__, p = E.length, v = 0, _ = VA(Q, this.__takeCount__);
        if (!n || !i && s == Q && _ == Q)
          return ei(A, this.__actions__);
        var Y = [];
        A:
          for (; Q-- && v < _; ) {
            for (var P = -1, M = A[h += t]; ++P < p; ) {
              var N = E[P], L = N.iteratee, N = N.type, L = L(M);
              if (N == 2)
                M = L;
              else if (!L) {
                if (N == 1)
                  continue A;
                break A;
              }
            }
            Y[v++] = M;
          }
        return Y;
      }, o.prototype.at = n0, o.prototype.chain = function() {
        return Ti(this);
      }, o.prototype.commit = function() {
        return new Ee(this.value(), this.__chain__);
      }, o.prototype.next = function() {
        this.__values__ === u && (this.__values__ = qi(this.value()));
        var A = this.__index__ >= this.__values__.length;
        return { done: A, value: A ? u : this.__values__[this.__index__++] };
      }, o.prototype.plant = function(A) {
        for (var t, s = this; s instanceof Fd; )
          var n = xi(s), i = (n.__index__ = 0, n.__values__ = u, t ? i.__wrapped__ = n : t = n, n), s = s.__wrapped__;
        return i.__wrapped__ = A, t;
      }, o.prototype.reverse = function() {
        var A = this.__wrapped__;
        return A instanceof rA ? (A = A, (A = (A = this.__actions__.length ? new rA(this) : A).reverse()).__actions__.push({ func: Kd, args: [On], thisArg: u }), new Ee(A, this.__chain__)) : this.thru(On);
      }, o.prototype.toJSON = o.prototype.valueOf = o.prototype.value = function() {
        return ei(this.__wrapped__, this.__actions__);
      }, o.prototype.first = o.prototype.head, gt && (o.prototype[gt] = function() {
        return this;
      }), o;
    }();
    Fu ? ((Fu.exports = ku)._ = ku, gu._ = ku) : MA._ = ku;
  }).call(It);
})(rl, pr);
const nl = pr;
function BB(B, e) {
  var u, r, c, a = { "\\rightarrow": "->", "\\leftarrow": "<-", "\\rightleftarrow": "<=>", "\\leftrightarrow": "<->" }, B = B.split("\\limits^");
  return e === 2 ? (r = B[0], c = B[1].split("}_{")[0].slice(1), u = B[1].split("}_{")[1].slice(0, B[1].split("}_{")[1].length - 1), r === "=" ? `\\ce{\\xlongequal[{${u}}]{${u}}}` : `\\ce{${a[r]}[{${c}}][{${u}}]}`) : e === 3 ? (r = B[0], c = B[1].split("{")[1].split("}")[0], r === "=" ? `\\ce{\\xlongequal{${c}}}` : `\\ce{${a[r]}[{${c}}]}`) : "";
}
function cl(d) {
  return d.replace(/((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}_\{[^}]+\}/g, (e) => BB(e, 2)).replace(/((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}/g, (e) => BB(e, 3));
}
const sB = { "@": "æ", "u\\.\\.\\(r\\)": "{ʊə}^{r}", "\\.\\.": "ə", oi: "ɔɪ", ai: "aɪ", ei: "eɪ", "e(?!:)": "e", "e:": "ɜː", "\\(r\\)": "^{r}", "(![pr|\\\\underl])i(?![:|me])": "ɪ", "i:": "iː", "o(?!:)": "ɒ", "o:": "ɔː", au: "aʊ", Ou: "əʊ", "(.*!(\\\\))u(?!:)": "ʊ", "u:": "uː", ":": "ː", N: "ŋ", tS: "tʃ", S: "ʃ", th: "θ", TH: "ð", dZ: "dʒ", Z: "ʒ", prime: "prime" };
function al(d) {
  return d.replace(/\\\[\\phonetic\{.*?\}\\\]/g, (e) => {
    let u = e.split("\\phonetic").join("");
    for (let r in sB)
      u = u.replace(new RegExp(r, "g"), (c) => sB[r]);
    return u.replaceAll("\\^", "\\wedge");
  });
}
function il(d) {
  return d.replace(/\\fourlineruled\{\d+\}/g, (e) => {
    var u = Number(e.split("}")[0].split("{")[1]);
    let r = "\\class{fourlineruled}{";
    for (let c = 0; c < u; c++)
      r += "\\begin{array}{l}\\hline\\text{ }\\\\\\hline\\text{ }\\\\\\hline\\text{ }\\\\\\hline\\end{array}";
    return r += "}";
  });
}
function oB(u, e = "romannumeral") {
  var u = Number(u.split(e + "{")[1].split("}")[0]) / 10, r = Math.floor(u), c = Number((u + "").split(".")[1]);
  let a = "";
  if (0 < r)
    for (let B = 0; B < r; B++)
      a += "x";
  if (c < 4)
    for (let B = 0; B < c; B++)
      a += "i";
  if (c === 4 && (a += "iv"), c === 5 && (a += "v"), 5 < c && c < 9) {
    a += "v";
    for (let B = 5; B < c; B++)
      a += "i";
  }
  return c === 9 && (a += "ix"), c === 10 && (a += "x"), a = e === "RomanNumeralCaps" ? (a = (a = a.replace(/i/g, "I")).replace(/v/g, "V")).replace(/x/g, "X") : a;
}
function Bl(d) {
  return d.replace(/\\romannumeral\{\d+\}/g, (e) => `\\mathsf{${oB(e)}}`).replace(/\\RomanNumeralCaps\{\d+\}/g, (e) => `\\mathsf{${oB(e, "RomanNumeralCaps")}}`);
}
function sl(d) {
  const e = Array.from(d.matchAll(/[.,'"!\*\/\?、。;:]/g)), u = /\\style\{([\w-]+:[\w\d-]+;*)+\}/g, r = /((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}_\{[^}]+\}/g, c = /\\underline\{.*?\}/g, a = /\_\{.*?\}/g, B = /\^\{.*?\}/g, f = /\}[.,'"!\*\/\?、。;:]/g, F = /\\\[\\phonetic\{.*?\}\\\]/g, w = /\\uwave\{.*?\}/g, g = /\\blank\{.+?\}\{\d+\/\d+\/(A|B|L)\}/g;
  return e.forEach((U, m) => {
    let b = !0;
    d.charAt(U.index - 1) === `
` && (b = !1), d.charAt(U.index + 1) !== "^" && d.charAt(U.index + 1) !== "_" || (b = !1);
    var O = Array.from(d.matchAll(u)).concat(Array.from(d.matchAll(r))), y = Array.from(d.matchAll(c)).map((R) => [R.index, R.index + R[0].length]), I = Array.from(d.matchAll(a)).map((R) => [R.index, R.index + R[0].length]), K = Array.from(d.matchAll(B)).map((R) => [R.index, R.index + R[0].length]), x = Array.from(d.matchAll(f)).map((R) => [R.index, R.index + R[0].length]), G = Array.from(d.matchAll(F)).map((R) => [R.index, R.index + R[0].length]), $ = Array.from(d.matchAll(w)).map((R) => [R.index, R.index + R[0].length]), Z = Array.from(d.matchAll(g)).map((R) => [R.index, R.index + R[0].length]), O = O.map((R) => [R.index, R.index + R[0].length]).concat(y).concat(I).concat(K).concat(x).concat(G).concat($).concat(Z);
    if ((m < e.length - 1 && U.index + 1 === e[m + 1].index || 1 < m && U.index - 1 === e[m - 1].index) && (b = !1), b = -1 < O.findIndex((R) => U.index >= R[0] && U.index <= R[1]) ? !1 : b) {
      var nA = U[0];
      let R = `_\\class{mjx-kz-sub}{${nA}}`;
      ["'", '"'].includes(nA) && (R = `^\\class{mjx-kz-sup}{${nA}}`), d = d.substring(0, U.index) + R + d.substring(U.index + 1);
      for (let oA = m + 1; oA < e.length; oA++)
        e[oA].index += R.length - nA.length;
    }
  }), d;
}
function ol(d) {
  return d.replace(/\'/g, "\\textasciiacute{}").replace(/\"/g, "\\textacutedbl{}").replace(/\“/g, "\\textquotedblleft{}").replace(/\”/g, "\\textquotedblright{}");
}
function fl(d) {
  return d.replace(/(\\hand(?![a-zA-Z]))|(\\mix)|(\\deletion)|(\\insert)|(\\wrong)|(\\chnfield)|(\\engfield)|(<s>)|(<\/s>)|(<unk>)/g, (e) => " ");
}
function ll(d) {
  return d.replace(/\\tab\{\d+\}/g, (e) => {
    var u = Number(e.split("\\tab{")[1].split("}")[0]);
    let r = "";
    for (let c = 0; c < u; c++)
      r += "\\;\\;";
    return r;
  }).replace(/\\tab(?!le)/g, "\\;\\;");
}
function gl(d) {
  return d.replace(/[^\S\r]+/g, "\\;\\;");
}
function Fl(d) {
  return d.replace(/(\<)|(\\prime)|(\\alpha)|(\\Alpha)|(\\beta)|(\\Beta)|(\\gamma)|(\\Gamma)|(\\delta)|(\\Delta)|(\\epsilon)|(\\Epsilon)|(\\zeta)|(\\Zeta)|(\\eta)|(\\Eta)|(\\theta)|(\\Theta)|(\\iota)|(\\Iota)|(\\kappa)|(\\Kappa)|(\\lambda)|(\\Lambda)|(\\mu)|(\\Mu)|(\\nu)|(\\Nu)|(\\xi)|(\\Xi)|(\\omicron)|(\\Omicron)|(\\pi)|(\\Pi)|(\\rho)|(\\Rho)|(\\sigma)|(\\Sigma)|(\\tau)|(\\Tau)|(\\upsilon)|(\\Upsilon)|(\\phi)|(\\Phi)|(\\chi)|(\\Chi)|(\\psi)|(\\Psi)|(\\omega)|(\\Omega)|(\\pm(?!od))|(\\mp)|(\\times)|(\\div)|(\\mid)|(\\prod)|(\\sum(?!\_))|(\\approx(?!eq))|(\\leq)|(\\geq)|(\\neq(?!uiv))|(\\equiv)|(\\propto)|(\\napprox)|(\\nleq)|(\\ngeq)|(\\nequiv)|(\\angle)|(\\cong)|(\\sim)|(\\parallel(?!ogram)(?!equal))|(\\parallelogram)|(\\parallelequal)|(\\perp)|(\\nparallel)|(\\cdots)|(\\ddots)|(\\vdots)|(\\lor)|(\\land)|(\\lnot)|(\\forall)|(\\exists)|(\\top)|(\\bot)|(\\cup)|(\\cap)|(\\subset(?!(neq|eq)))|(\\supset(?!neq|eq))|(\\notin)|(\\ni)|(\\notni)|(\\emptyset)|(\\complement)|(\\subseteq)|(\\supseteq(?!eq))|(\\nsubset(?!eq))|(\\nsupset(?!eq))|(\\subsetneq)|(\\supsetneq)|(\\nsubseteq)|(\\nsupseteq)|(\\infty)|(\\partial)|(\\Re)|(\\lg)|(\\lim(?!its))|(\\ln)|(\\max)|(\\min)|(\\sin)|(\\cos)|(\\tan)|(\\sec)|(\\cot)|(\\csc)|(\\arcsin)|(\\arccos)|(\\arctan)|(\\arccot(?!angent))|(\\arcsec)|(\\arccsc)|(\\Leftarrow(?!\\limits))|(\\leftarrow(?!\\limits))|(\\Rightarrow(?!\\limits))|(\\rightarrow(?!\\limits))|(\\Uparrow)|(\\uparrow)|(\\Downarrow)|(\\downarrow)|(\\Leftrightarrow(?!\\limits))|(\\leftrightarrow(?!\\limits))|(\\Updownarrow)|(\\updownarrow)|(\\NEarrow)|(\\nearrow)|(\\NWarrow)|(\\nwarrow)|(\\SEarrow)|(\\searrow)|(\\SWarrow)|(\\swarrow)|(\\hookleftarrow)|(\\odot)|(\\ominus)|(\\oplus)|(\\otimes)|(\\oiiint)|(\\oiint)|(\\oint)|(\\diamond)|(\\square)|(\\rectangle)|(\\star)|(\\bigstar)|(\\triangle(?!down))|(\\triangledown)|(\\heart(?!suit))|(\\bullet)|(\\female)|(\\male)|(\\smiley)|(\\spadesuit)|(\\clubsuit)|(\\blackdiamond)|(\\blacksquare)|(\\blackrectangle)|(\\blackstar)|(\\blacktriangle(?!down))|(\\blacktriangledown)|(\\blackheart)|(\\textperthousand)|(\\textreferencemark)|(\\textregistered)|(\\textsection)|(\\texttrademark)|(\\cdot)|(\\because)|(\\therefore)|(\\chi)|(\\circledcirc)|(\\circ)|(\\xmark)|(\\cmark)|(\\in(?!(t|sert)))|(\\omitted)/g, (e) => e + "\\,");
}
function Cl(d) {
  return d.replace(/\n\[/g, (e) => "\\\\\\[");
}
function wl(d) {
  return d.replace(/\*/g, "{*}").replace(/\n/g, "\\\\");
}
function Ql(d) {
  return d.replace(/\\left\\{/g, (e) => "\\left\\{\\begin{array}{l}" + e.split("\\left\\{")[1]).replace(/\\right\\}/g, (e) => e.split("\\right\\}")[0] + "\\end{array}\\right.");
}
function hl(d) {
  return d.replace(/\\reverse\{.*?\}\{.*?\}/g, (e) => {
    var u = e.split("}{")[0].split("\\reverse{")[1];
    return "" + e.split("}{")[1].split("}")[0] + u;
  });
}
function Ul(d) {
  return d.replace(/\\parallel(?!ogram)(?!equal)/g, (e) => `\\class{parallel}{${e}}`);
}
const fB = { A: 2, B: 0, L: 1 };
function Dl(d, e) {
  return d.replace(/\\blank\{.+?\}\{\d+\/\d+\/(A|B|L)\}/g, (u) => {
    var r = u.match(/\\blank\{/), r = ((r == null ? void 0 : r.index) || 0) + (r[(r == null ? void 0 : r.index) || 0].length || 0), a = u.match(/\{\d+\/\d+\/(A|B|L)\}/), c = (a == null ? void 0 : a.index) || 0, a = a[0].slice(1, a[0].length - 1).split("/"), B = ((B = (B = MathJax == null ? void 0 : MathJax.config) == null ? void 0 : B.tex) == null ? void 0 : B.formatError) || ((B = MathJax == null ? void 0 : MathJax.tex) == null ? void 0 : B.formatError);
    return a[0] === "0" ? (B("", new Error("blank sign questionSubIdx should startwith 1")), u) : a[1] === "0" ? (B("", new Error("blank sign blankIdx should startwith 1")), u) : (r = u.slice(r, c - 1)).includes("\\blank") ? (B("", new Error("blank sign don't support nest")), u) : (u = `\\class{kbs i_${(c = parseInt(a[0])) - 1}_${(B = parseInt(a[1])) - 1}_${fB[a[2]]}}{\\,}`, c = `\\class{kbe i_${c - 1}_${B - 1}_${fB[a[2]]}}{\\,}`, B = e == null ? void 0 : e.blankLight, a[2] === "A" ? u + (B ? "\\class{bk_lg_1}{" : "") + r + (B ? "}" : "") + c + "{}" : u + (B ? "\\class{bk_lg_2}{" : "") + r + (B ? "}" : "") + c + "{}");
  });
}
function pl(d) {
  return d.replace(/\\underline\{.*?\}/g, (e) => {
    var u = e.split("\\underline{")[1];
    return u.split("}").length === 2 && 16 < u.split("}")[0].length ? "\\class{mjx-kz-underline}{{}" + u : e;
  });
}
function El(d) {
  let e = 0;
  for (let u = 0; u < d.length; u++)
    /[^\x00-\xff]/.test(d.substr(u, 1)) || [",", ".", "'", " "].includes(d.substr(u, 1)) ? e += 2.2 : e += 1;
  return e;
}
function bl(d) {
  return d.replace(/\\uwave\{.*?\}/g, (u) => {
    var u = u.split("\\uwave{")[1].split("}")[0], r = [], c = Math.floor(El(u));
    for (let a = 0; a < c; a++)
      r.push("\\thicksim");
    return `\\underset{\\class{wave}{${r.join("\\!")}}}{${u}}`;
  });
}
function ml(d) {
  return d.replace(/\\_(\{\d+\})/g, (e) => {
    let u = "";
    var r = Number(e.split("_{")[1].split("}")[0]);
    for (let c = 0; c < Number(r); c++)
      u += "\\_";
    return u;
  });
}
function Hl(d, e) {
  return d.replace(/(\\_)+/g, (u) => {
    var r = u.split("\\").length - 1;
    return e.lineOuterMax && r <= e.lineOuterMax ? `{${u}}` : u;
  });
}
class yl {
  constructor(e, u) {
    nt(this, "content"), nt(this, "options"), this.content = e, this.options = u;
  }
  formatUnderline() {
    return this.content = pl(this.content), this;
  }
  formatDeleteBySign() {
    return this.content = fl(this.content), this;
  }
  formatMultipleTab() {
    return this.content = ll(this.content), this;
  }
  formatAloneSign() {
    return this.content = Fl(this.content), this;
  }
  formatOrder() {
    return this.content = Bl(this.content), this;
  }
  formatLimits() {
    return this.content = cl(this.content), this;
  }
  formatMiddleBrackets() {
    return this.content = Cl(this.content), this;
  }
  formatLineBreak() {
    return this.content = wl(this.content), this;
  }
  formatSimultaneous() {
    return this.content = Ql(this.content), this;
  }
  formatPhonetic() {
    return this.content = al(this.content), this;
  }
  formatQuotes() {
    return this.content = ol(this.content), this;
  }
  formatUwave() {
    return this.content = bl(this.content), this;
  }
  formatReverse() {
    return this.content = hl(this.content), this;
  }
  formatMultipleLine() {
    return this.content = ml(this.content), this;
  }
  formatFourlineRuled() {
    return this.content = il(this.content), this;
  }
  formatSpace() {
    return this.content = gl(this.content), this;
  }
  formatLineWapper() {
    return this.options && (this.content = Hl(this.content, this.options)), this;
  }
  formatItParallel() {
    return this.content = Ul(this.content), this;
  }
  formatBlankSign() {
    return this.content = Dl(this.content, this.options), this;
  }
}
function Il(d, e) {
  return d = new yl(d, e), d.formatUnderline().formatDeleteBySign().formatMultipleTab().formatAloneSign().formatOrder().formatLimits().formatMiddleBrackets().formatLineBreak().formatSimultaneous().formatPhonetic().formatUwave().formatQuotes().formatReverse().formatMultipleLine().formatFourlineRuled().formatSpace().formatLineWapper().formatItParallel().formatBlankSign(), d.content;
}
const CA = "xregexp", vu = { astral: !1, namespacing: !0 }, Se = {};
let vt = {}, tt = {};
const mc = [], ct = "default", lB = "class", vl = { default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/, class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/ }, Kl = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g, xl = /()??/.exec("")[1] === void 0, Ll = /x/.flags !== void 0;
function qt(d) {
  let e = !0;
  try {
    new RegExp("", d), d === "y" && ".a".replace(new RegExp("a", "gy"), ".") === ".." && (e = !1);
  } catch {
    e = !1;
  }
  return e;
}
const _l = qt("d"), Jc = qt("s"), ms = qt("u"), Hc = qt("y"), Hs = { d: _l, g: !0, i: !0, m: !0, s: Jc, u: ms, y: Hc }, Sl = Jc ? /[^dgimsuy]+/g : /[^dgimuy]+/g;
function ys(d, e, u, r, c) {
  if (d[CA] = { captureNames: e }, !c) {
    if (d.__proto__)
      d.__proto__ = k.prototype;
    else
      for (const a in k.prototype)
        d[a] = k.prototype[a];
    d[CA].source = u, d[CA].flags = r && r.split("").sort().join("");
  }
  return d;
}
function Yt(d) {
  return d.replace(/([\s\S])(?=[\s\S]*\1)/g, "");
}
function Iu(d, e) {
  if (!k.isRegExp(d))
    throw new TypeError("Type RegExp expected");
  var u = d[CA] || {};
  let r = Ml(d), c = "", a = "", B = null, f = null;
  return (e = e || {}).removeG && (a += "g"), e.removeY && (a += "y"), a && (r = r.replace(new RegExp(`[${a}]+`, "g"), "")), e.addG && (c += "g"), e.addY && (c += "y"), c && (r = Yt(r + c)), e.isInternalOnly || (u.source !== void 0 && (B = u.source), u.flags != null && (f = c ? Yt(u.flags + c) : u.flags)), d = ys(new RegExp(e.source || d.source, r), Ol(d) ? u.captureNames.slice(0) : null, B, f, e.isInternalOnly);
}
function gB(d) {
  return parseInt(d, 16);
}
function FB(d, e, u) {
  var r = d.index + d[0].length, c = d.input[d.index - 1], a = d.input[r];
  return /^[()|]$/.test(c) || /^[()|]$/.test(a) || d.index === 0 || r === d.input.length || /\(\?(?:[:=!]|<[=!])$/.test(d.input.substring(d.index - 4, d.index)) || kl(d.input, r, u) ? "" : "(?:)";
}
function Ml(d) {
  return Ll ? d.flags : /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(d))[1];
}
function Ol(d) {
  return !(!d[CA] || !d[CA].captureNames);
}
function tc(d) {
  return parseInt(d, 10).toString(16);
}
function kl(d, e, u) {
  var r = "\\(\\?#[^)]*\\)", c = "[?*+]|{\\d+(?:,\\d*)?}";
  return (u.includes("x") ? new RegExp(`^(?:\\s|#[^#\\n]*|${r})*(?:${c})`) : new RegExp(`^(?:${r})*(?:${c})`)).test(d.slice(e));
}
function wr(d, e) {
  return Object.prototype.toString.call(d) === `[object ${e}]`;
}
function ju(d) {
  if (d == null)
    throw new TypeError("Cannot convert null or undefined to object");
  return d;
}
function dc(d) {
  for (; d.length < 4; )
    d = "0" + d;
  return d;
}
function Tl(d, e) {
  if (Yt(e) !== e)
    throw new SyntaxError("Invalid duplicate regex flag " + e);
  d = d.replace(/^\(\?([\w$]+)\)/, (u, r) => {
    if (/[dgy]/.test(r))
      throw new SyntaxError("Cannot use flags dgy in mode modifier " + u);
    return e = Yt(e + r), "";
  });
  for (const u of e)
    if (!Hs[u])
      throw new SyntaxError("Unknown regex flag " + u);
  return { pattern: d, flags: e };
}
function CB(d) {
  const e = {};
  return wr(d, "String") ? (k.forEach(d, /[^\s,]+/, (u) => {
    e[u] = !0;
  }), e) : d;
}
function wB(d) {
  if (!/^[\w$]$/.test(d))
    throw new Error("Flag must be a single character A-Za-z0-9_$");
  Hs[d] = !0;
}
function Gl(d, e, u, r, c) {
  let a = mc.length;
  var B = d[u];
  let f = null, F, w;
  for (; a--; )
    if (!((w = mc[a]).leadChar && w.leadChar !== B || w.scope !== r && w.scope !== "all" || w.flag && !e.includes(w.flag)) && (F = k.exec(d, w.regex, u, "sticky"))) {
      f = { matchLength: F[0].length, output: w.handler.call(c, F, r, e), reparse: w.reparse };
      break;
    }
  return f;
}
function QB(d) {
  vu.astral = d;
}
function hB(d) {
  vu.namespacing = d;
}
function k(d, e) {
  if (k.isRegExp(d)) {
    if (e !== void 0)
      throw new TypeError("Cannot supply flags when copying a RegExp");
    return Iu(d);
  }
  if (d = d === void 0 ? "" : String(d), e = e === void 0 ? "" : String(e), k.isInstalled("astral") && !e.includes("A") && (e += "A"), tt[d] || (tt[d] = {}), !tt[d][e]) {
    var u = { hasNamedCapture: !1, captureNames: [] };
    let B = ct, f = "", F = 0, w;
    var r = Tl(d, e);
    let g = r.pattern;
    for (var c, a = r.flags; F < g.length; ) {
      for (; (w = Gl(g, a, F, B, u)) && w.reparse && (g = g.slice(0, F) + w.output + g.slice(F + w.matchLength)), w && w.reparse; )
        ;
      w ? (f += w.output, F += w.matchLength || 1) : ([c] = k.exec(g, vl[B], F, "sticky"), f += c, F += c.length, c === "[" && B === ct ? B = lB : c === "]" && B === lB && (B = ct));
    }
    tt[d][e] = { pattern: f.replace(/(?:\(\?:\))+/g, "(?:)"), flags: a.replace(Sl, ""), captures: u.hasNamedCapture ? u.captureNames : null };
  }
  return r = tt[d][e], ys(new RegExp(r.pattern, r.flags), r.captures, d, e);
}
k.prototype = new RegExp(), k.version = "5.1.1", k._clipDuplicates = Yt, k._hasNativeFlag = qt, k._dec = gB, k._hex = tc, k._pad4 = dc, k.addToken = (d, e, u) => {
  let r = (u = u || {}).optionalFlags;
  if (u.flag && wB(u.flag), r)
    for (const c of r = r.split(""))
      wB(c);
  mc.push({ regex: Iu(d, { addG: !0, addY: Hc, isInternalOnly: !0 }), handler: e, scope: u.scope || ct, flag: u.flag, reparse: u.reparse, leadChar: u.leadChar }), k.cache.flush("patterns");
}, k.cache = (d, e) => (vt[d] || (vt[d] = {}), vt[d][e] || (vt[d][e] = k(d, e))), k.cache.flush = (d) => {
  d === "patterns" ? tt = {} : vt = {};
}, k.escape = (d) => String(ju(d)).replace(/[\\\[\]{}()*+?.^$|]/g, "\\$&").replace(/[\s#\-,]/g, (e) => "\\u" + dc(tc(e.charCodeAt(0)))), k.exec = (d, e, u, r) => {
  let c = "g", a, B = !1, f;
  return (a = Hc && !!(r || e.sticky && r !== !1)) ? c += "y" : r && (B = !0, c += "FakeY"), e[CA] = e[CA] || {}, r = e[CA][c] || (e[CA][c] = Iu(e, { addG: !0, addY: a, source: B ? e.source + "|()" : void 0, removeY: r === !1, isInternalOnly: !0 })), r.lastIndex = u = u || 0, f = Se.exec.call(r, d), B && f && f.pop() === "" && (f = null), e.global && (e.lastIndex = f ? r.lastIndex : 0), f;
}, k.forEach = (d, e, u) => {
  let r = 0, c = -1, a;
  for (; a = k.exec(d, e, r); )
    u(a, ++c, d, e), r = a.index + (a[0].length || 1);
}, k.globalize = (d) => Iu(d, { addG: !0 }), k.install = (d) => {
  d = CB(d), !vu.astral && d.astral && QB(!0), !vu.namespacing && d.namespacing && hB(!0);
}, k.isInstalled = (d) => !!vu[d], k.isRegExp = (d) => Object.prototype.toString.call(d) === "[object RegExp]", k.match = (a, e, u) => {
  var r = e.global && u !== "one" || u === "all", c = (r ? "g" : "") + (e.sticky ? "y" : "") || "noGY", c = (e[CA] = e[CA] || {}, e[CA][c] || (e[CA][c] = Iu(e, { addG: !!r, removeG: u === "one", isInternalOnly: !0 }))), a = String(ju(a)).match(c);
  return e.global && (e.lastIndex = u === "one" && a ? a.index + a[0].length : 0), r ? a || [] : a && a[0];
}, k.matchChain = (d, e) => function u(r, c) {
  const a = e[c].regex ? e[c] : { regex: e[c] }, B = [];
  function f(F) {
    if (a.backref) {
      var w = "Backreference to undefined group: " + a.backref, g = isNaN(a.backref);
      if (g && k.isInstalled("namespacing")) {
        if (!(F.groups && a.backref in F.groups))
          throw new ReferenceError(w);
      } else if (!F.hasOwnProperty(a.backref))
        throw new ReferenceError(w);
      w = (g && k.isInstalled("namespacing") ? F.groups : F)[a.backref], B.push(w || "");
    } else
      B.push(F[0]);
  }
  for (const F of r)
    k.forEach(F, a.regex, f);
  return c !== e.length - 1 && B.length ? u(B, c + 1) : B;
}([d], 0), k.replace = (d, e, u, r) => {
  var c = k.isRegExp(e), a = e.global && r !== "one" || r === "all", B = (a ? "g" : "") + (e.sticky ? "y" : "") || "noGY";
  let f = e;
  return c ? (e[CA] = e[CA] || {}, f = e[CA][B] || (e[CA][B] = Iu(e, { addG: !!a, removeG: r === "one", isInternalOnly: !0 }))) : a && (f = new RegExp(k.escape(String(e)), "g")), B = Se.replace.call(ju(d), f, u), c && e.global && (e.lastIndex = 0), B;
}, k.replaceEach = (d, e) => {
  for (const u of e)
    d = k.replace(d, u[0], u[1], u[2]);
  return d;
}, k.split = (d, e, u) => Se.split.call(ju(d), e, u), k.test = (d, e, u, r) => !!k.exec(d, e, u, r), k.uninstall = (d) => {
  d = CB(d), vu.astral && d.astral && QB(!1), vu.namespacing && d.namespacing && hB(!1);
}, k.union = (d, e, u) => {
  u = (u = u || {}).conjunction || "or";
  let r = 0, c, a;
  function B(w, g, U) {
    var m = a[r - c];
    if (g) {
      if (++r, m)
        return `(?<${m}>`;
    } else if (U)
      return "\\" + (+U + c);
    return w;
  }
  if (!wr(d, "Array") || !d.length)
    throw new TypeError("Must provide a nonempty array of patterns to merge");
  var f = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, F = [];
  for (const w of d)
    k.isRegExp(w) ? (c = r, a = w[CA] && w[CA].captureNames || [], F.push(k(w.source).source.replace(f, B))) : F.push(k.escape(w));
  return k(F.join(u === "none" ? "" : "|"), e);
}, Se.exec = function(d) {
  const e = this.lastIndex, u = RegExp.prototype.exec.apply(this, arguments);
  if (u) {
    var r;
    if (!xl && 1 < u.length && u.includes("") && (r = Iu(this, { removeG: !0, isInternalOnly: !0 }), String(d).slice(u.index).replace(r, (...a) => {
      var B = a.length;
      for (let f = 1; f < B - 2; ++f)
        a[f] === void 0 && (u[f] = void 0);
    })), this[CA] && this[CA].captureNames) {
      let a = u;
      k.isInstalled("namespacing") && (u.groups = /* @__PURE__ */ Object.create(null), a = u.groups);
      for (let B = 1; B < u.length; ++B) {
        var c = this[CA].captureNames[B - 1];
        c && (a[c] = u[B]);
      }
    } else
      !u.groups && k.isInstalled("namespacing") && (u.groups = void 0);
    this.global && !u[0].length && this.lastIndex > u.index && (this.lastIndex = u.index);
  }
  return this.global || (this.lastIndex = e), u;
}, Se.test = function(d) {
  return !!Se.exec.call(this, d);
}, Se.match = function(d) {
  var e;
  if (k.isRegExp(d)) {
    if (d.global)
      return e = String.prototype.match.apply(this, arguments), d.lastIndex = 0, e;
  } else
    d = new RegExp(d);
  return Se.exec.call(d, ju(this));
}, Se.replace = function(d, e) {
  var u = k.isRegExp(d);
  let r, c, a;
  return u ? (d[CA] && ({ captureNames: c } = d[CA]), r = d.lastIndex) : d += "", a = wr(e, "Function") ? String(this).replace(d, (...B) => {
    if (c) {
      let f;
      k.isInstalled("namespacing") ? (f = /* @__PURE__ */ Object.create(null), B.push(f)) : (B[0] = new String(B[0]), [f] = B);
      for (let F = 0; F < c.length; ++F)
        c[F] && (f[c[F]] = B[F + 1]);
    }
    return e(...B);
  }) : String(ju(this)).replace(d, (...B) => String(e).replace(Kl, function(f, F, w, g) {
    if (F = F || w, w = wr(B[B.length - 1], "Object") ? 4 : 3, w = B.length - w, F) {
      if (/^\d+$/.test(F)) {
        var U = +F;
        if (U <= w)
          return B[U] || "";
      }
      if (U = c ? c.indexOf(F) : -1, U < 0)
        throw new SyntaxError("Backreference to undefined group " + f);
      return B[U + 1] || "";
    }
    if (g === "" || g === " ")
      throw new SyntaxError("Invalid token " + f);
    if (g === "&" || +g == 0)
      return B[0];
    if (g === "$")
      return "$";
    if (g === "`")
      return B[B.length - 1].slice(0, B[B.length - 2]);
    if (g === "'")
      return B[B.length - 1].slice(B[B.length - 2] + B[0].length);
    if (g = +g, isNaN(g))
      throw new SyntaxError("Invalid token " + f);
    if (w < g)
      throw new SyntaxError("Backreference to undefined group " + f);
    return B[g] || "";
  })), u && (d.global ? d.lastIndex = 0 : d.lastIndex = r), a;
}, Se.split = function(d, e) {
  if (!k.isRegExp(d))
    return String.prototype.split.apply(this, arguments);
  const u = String(this), r = [], c = d.lastIndex;
  let a = 0, B;
  return e = (e === void 0 ? -1 : e) >>> 0, k.forEach(u, d, (f) => {
    f.index + f[0].length > a && (r.push(u.slice(a, f.index)), 1 < f.length && f.index < u.length && Array.prototype.push.apply(r, f.slice(1)), B = f[0].length, a = f.index + B);
  }), a === u.length ? d.test("") && !B || r.push("") : r.push(u.slice(a)), d.lastIndex = c, r.length > e ? r.slice(0, e) : r;
}, k.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, (d, e) => {
  if (d[1] === "B" && e === ct)
    return d[0];
  throw new SyntaxError("Invalid escape " + d[0]);
}, { scope: "all", leadChar: "\\" }), k.addToken(/\\u{([\dA-Fa-f]+)}/, (d, e, u) => {
  var r = gB(d[1]);
  if (1114111 < r)
    throw new SyntaxError("Invalid Unicode code point " + d[0]);
  if (r <= 65535)
    return "\\u" + dc(tc(r));
  if (ms && u.includes("u"))
    return d[0];
  throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
}, { scope: "all", leadChar: "\\" }), k.addToken(/\(\?#[^)]*\)/, FB, { leadChar: "(" }), k.addToken(/\s+|#[^\n]*\n?/, FB, { flag: "x" }), Jc || k.addToken(/\./, () => "[\\s\\S]", { flag: "s", leadChar: "." }), k.addToken(/\\k<([^>]+)>/, function(d) {
  var e = isNaN(d[1]) ? this.captureNames.indexOf(d[1]) + 1 : +d[1], u = d.index + d[0].length;
  if (!e || e > this.captureNames.length)
    throw new SyntaxError("Backreference to undefined group " + d[0]);
  return "\\" + e + (u === d.input.length || isNaN(d.input[u]) ? "" : "(?:)");
}, { leadChar: "\\" }), k.addToken(/\\(\d+)/, function(d, e) {
  if (e === ct && /^[1-9]/.test(d[1]) && +d[1] <= this.captureNames.length || d[1] === "0")
    return d[0];
  throw new SyntaxError("Cannot use octal escape or backreference to undefined group " + d[0]);
}, { scope: "all", leadChar: "\\" }), k.addToken(/\(\?P?<((?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0898-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDEFD-\uDF1C\uDF27\uDF30-\uDF50\uDF70-\uDF85\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF42\uDF50-\uDF59\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC40-\uDC55]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDCD0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]|\uDB40[\uDD00-\uDDEF])*)>/, function(d) {
  if (!k.isInstalled("namespacing") && (d[1] === "length" || d[1] === "__proto__"))
    throw new SyntaxError("Cannot use reserved word as capture name " + d[0]);
  if (this.captureNames.includes(d[1]))
    throw new SyntaxError("Cannot use same name for multiple groups " + d[0]);
  return this.captureNames.push(d[1]), this.hasNamedCapture = !0, "(";
}, { leadChar: "(" }), k.addToken(/\((?!\?)/, function(d, e, u) {
  return u.includes("n") ? "(?:" : (this.captureNames.push(null), "(");
}, { optionalFlags: "n", leadChar: "(" });
const Vl = (d) => {
  const e = "xregexp", u = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, r = d.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, u], "g", { conjunction: "or" });
  function c(F, w) {
    return w = w ? "x" : "", d.isRegExp(F) ? F[e] && F[e].captureNames ? F : d(F.source, w) : d(F, w);
  }
  function a(F) {
    return F instanceof RegExp ? F : d.escape(F);
  }
  function B(F, w, g) {
    return F["subpattern" + g] = w, F;
  }
  function f(F, w, g) {
    return F + (w < g.length - 1 ? `{{subpattern${w}}}` : "");
  }
  d.tag = (F) => (w, ...g) => (g = g.map(a).reduce(B, {}), w = w.raw.map(f).join(""), d.build(w, g, F)), d.build = (F, w, g) => {
    var U, m, b, y, I = (g = g || "").includes("x"), K = /^\(\?([\w$]+)\)/.exec(F);
    K && (g = d._clipDuplicates(g + K[1]));
    const x = {};
    for (const oA in w)
      w.hasOwnProperty(oA) && (U = c(w[oA], I), x[oA] = { pattern: (m = U.source, y = b = void 0, y = /\$(?:\(\?:\))*$/, (b = /^(?:\(\?:\))*\^/).test(m) && y.test(m) && y.test(m.replace(/\\[\s\S]/g, "")) ? m.replace(b, "").replace(y, "") : m), names: U[e].captureNames || [] });
    K = c(F, I);
    let G = 0, $, Z = 0;
    const O = [0], nA = K[e].captureNames || [], R = K.source.replace(r, (oA, hA, JA, De, IA) => {
      const vA = hA || JA;
      let GA, ie, KA;
      if (vA) {
        if (!x.hasOwnProperty(vA))
          throw new ReferenceError("Undefined property " + oA);
        return ie = hA ? (GA = nA[Z], O[++Z] = ++G, `(?<${GA || vA}>`) : "(?:", $ = G, JA = x[vA].pattern.replace(u, (ZA, Bt, fu) => {
          if (Bt) {
            if (GA = x[vA].names[G - $], ++G, GA)
              return `(?<${GA}>`;
          } else if (fu)
            return KA = +fu - 1, x[vA].names[KA] ? `\\k<${x[vA].names[KA]}>` : "\\" + (+fu + $);
          return ZA;
        }), "" + ie + JA + ")";
      }
      if (De) {
        if (GA = nA[Z], O[++Z] = ++G, GA)
          return `(?<${GA}>`;
      } else if (IA)
        return KA = +IA - 1, nA[KA] ? `\\k<${nA[KA]}>` : "\\" + O[+IA];
      return oA;
    });
    return d(R, g);
  };
}, Rl = (d) => {
  function e(u, r, c, a) {
    return { name: u, value: r, start: c, end: a };
  }
  d.matchRecursive = (u, r, c, a, B) => {
    B = B || {};
    var f = (a = a || "").includes("g"), F = a.includes("y"), w = a.replace(/y/g, "");
    r = d(r, w), c = d(c, w);
    let g, U = B.escapeChar;
    if (U) {
      if (1 < U.length)
        throw new Error("Cannot use more than one escape character");
      U = d.escape(U), g = new RegExp(`(?:${U}[\\S\\s]|(?:(?!${d.union([r, c], "", { conjunction: "or" }).source})[^${U}])+)+`, a.replace(d._hasNativeFlag("s") ? /[^imsu]/g : /[^imu]/g, ""));
    }
    let m = 0, b = 0, y = 0, I = 0, K, x, G, $;
    for (var Z = B.valueNames, O = []; ; ) {
      if (U && (y += (d.exec(u, g, y, "sticky") || [""])[0].length), G = d.exec(u, r, y), $ = d.exec(u, c, y), G && $ && (G.index <= $.index ? $ = null : G = null), G || $)
        b = (G || $).index, y = b + (G || $)[0].length;
      else if (!m)
        break;
      if (F && !m && b > I)
        break;
      if (G)
        m || (K = b, x = y), m += 1;
      else if ($ && m) {
        if (!--m && (Z ? (Z[0] && K > I && O.push(e(Z[0], u.slice(I, K), I, K)), Z[1] && O.push(e(Z[1], u.slice(K, x), K, x)), Z[2] && O.push(e(Z[2], u.slice(x, b), x, b)), Z[3] && O.push(e(Z[3], u.slice(b, y), b, y))) : O.push(u.slice(x, b)), I = y, !f))
          break;
      } else {
        var nA, R, oA = B.unbalanced || "error";
        if (oA !== "skip" && oA !== "skip-lazy")
          throw oA === "error" ? (nA = $ ? "right" : "left", R = $ ? b : K, new Error(`Unbalanced ${nA} delimiter found in string at position ` + R)) : new Error("Unsupported value for unbalanced: " + oA);
        $ ? $ = null : (y = oA === "skip" ? (nA = d.exec(u, r, K, "sticky")[0].length, K + (nA || 1)) : K + 1, m = 0);
      }
      b === y && (y += 1);
    }
    return f && 0 < O.length && !F && Z && Z[0] && u.length > I && O.push(e(Z[0], u.slice(I), I, u.length)), O;
  };
}, Nl = (d) => {
  const e = {}, u = {}, r = d._dec, c = d._hex, a = d._pad4;
  function B(g) {
    return g.replace(/[- _]+/g, "").toLowerCase();
  }
  function f(g) {
    var U = /^\\[xu](.+)/.exec(g);
    return U ? r(U[1]) : g.charCodeAt(g[0] === "\\" ? 1 : 0);
  }
  function F(g) {
    return e[g]["b!"] || (e[g]["b!"] = function(U) {
      let m = "", b = -1;
      return d.forEach(U, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, (y) => {
        var I = f(y[1]);
        I > b + 1 && (m += "\\u" + a(c(b + 1)), I > b + 2) && (m += "-\\u" + a(c(I - 1))), b = f(y[2] || y[1]);
      }), b < 65535 && (m += "\\u" + a(c(b + 1)), b < 65534) && (m += "-\\uFFFF"), m;
    }(e[g].bmp));
  }
  function w(g, U) {
    var m = U ? "a!" : "a=";
    return e[g][m] || (e[g][m] = function(b, y) {
      b = e[b];
      let I = "";
      return b.bmp && !b.isBmpLast && (I = `[${b.bmp}]` + (b.astral ? "|" : "")), b.astral && (I += b.astral), b.isBmpLast && b.bmp && (I += `${b.astral ? "|" : ""}[${b.bmp}]`), y ? `(?:(?!${I})(?:[�-�][�-�]|[\0-￿]))` : `(?:${I})`;
    }(g, U));
  }
  d.addToken(/\\([pP])(?:{(\^?)(?:(\w+)=)?([^}]*)}|([A-Za-z]))/, (y, U, m) => {
    var b = "Unknown Unicode token ", [y, I, K, x, G, $] = y;
    let Z = I === "P" || !!K;
    m = m.includes("A");
    let O = B($ || G), nA = e[O];
    if (I === "P" && K)
      throw new SyntaxError("Invalid double negation " + y);
    if (!e.hasOwnProperty(O))
      throw new SyntaxError(b + y);
    if (x && (!u[x] || !u[x][O]))
      throw new SyntaxError(b + y);
    if (nA.inverseOf) {
      if (O = B(nA.inverseOf), !e.hasOwnProperty(O))
        throw new ReferenceError("Unicode token missing data " + y + " -> " + nA.inverseOf);
      nA = e[O], Z = !Z;
    }
    if (!nA.bmp && !m)
      throw new SyntaxError("Astral mode required for Unicode token " + y);
    if (m) {
      if (U === "class")
        throw new SyntaxError("Astral mode does not support Unicode tokens within character classes");
      return w(O, Z);
    }
    return U === "class" ? Z ? F(O) : nA.bmp : (Z ? "[^" : "[") + nA.bmp + "]";
  }, { scope: "all", optionalFlags: "A", leadChar: "\\" }), d.addUnicodeData = (g, U) => {
    U && (u[U] = {});
    for (const b of g) {
      if (!b.name)
        throw new Error("Unicode token requires name");
      if (!(b.inverseOf || b.bmp || b.astral))
        throw new Error("Unicode token has no character data " + b.name);
      var m = B(b.name);
      e[m] = b, U && (u[U][m] = !0), b.alias && (m = B(b.alias), e[m] = b, U) && (u[U][m] = !0);
    }
    d.cache.flush("patterns");
  }, d._getUnicodeProperty = (g) => (g = B(g), e[g]);
};
var Jl = [{ name: "C", alias: "Other", isBmpLast: !0, bmp: "\0--­͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-؅؜۝܎܏݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏-ࢗ࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿", astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCBD\uDCC3-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]" }, { name: "Cc", alias: "Control", bmp: "\0--" }, { name: "Cf", alias: "Format", bmp: "­؀-؅؜۝܏࢐࢑࣢᠎​-‏‪-‮⁠-⁤⁦-⁯\uFEFF￹-￻", astral: "\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]" }, { name: "Cn", alias: "Unassigned", bmp: "͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-׿܎݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏࢒-ࢗ঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿", astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCC3-\uDCCC\uDCCE\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F\uDC39-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]" }, { name: "Co", alias: "Private_Use", bmp: "-", astral: "[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]" }, { name: "Cs", alias: "Surrogate", bmp: "\uD800-\uDFFF" }, { name: "L", alias: "Letter", bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "LC", alias: "Cased_Letter", bmp: "A-Za-zµÀ-ÖØ-öø-ƺƼ-ƿǄ-ʓʕ-ʯͰ-ͳͶͷͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՠ-ֈႠ-ჅჇჍა-ჺჽ-ჿᎠ-Ᏽᏸ-ᏽᲀ-ᲈᲐ-ᲺᲽ-Ჿᴀ-ᴫᵫ-ᵷᵹ-ᶚḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⱻⱾ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭꙀ-ꙭꚀ-ꚛꜢ-ꝯꝱ-ꞇꞋ-ꞎꞐ-ꟊꟐꟑꟓꟕ-ꟙꟵꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚ", astral: "\uD801[\uDC00-\uDC4F\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD806[\uDCA0-\uDCDF]|\uD81B[\uDE40-\uDE7F]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD00-\uDD43]" }, { name: "Ll", alias: "Lowercase_Letter", bmp: "a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ", astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]" }, { name: "Lm", alias: "Modifier_Letter", bmp: "ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨࣉॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟲ-ꟴꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟꭩｰﾞﾟ", astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD838[\uDD37-\uDD3D]|𞥋" }, { name: "Lo", alias: "Other_Letter", bmp: "ªºƻǀ-ǃʔא-תׯ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣈऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳳᳵᳶᳺℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF4A\uDF50]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|𝼊|\uD838[\uDD00-\uDD2C\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Lt", alias: "Titlecase_Letter", bmp: "ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ" }, { name: "Lu", alias: "Uppercase_Letter", bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ", astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]" }, { name: "M", alias: "Mark", bmp: "̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣඁ-ඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-ᫎᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯", astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]" }, { name: "Mc", alias: "Spacing_Mark", bmp: "ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜ᜕᜴ាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡᳷〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦾ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬", astral: "\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD30-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]" }, { name: "Me", alias: "Enclosing_Mark", bmp: "҈҉᪾⃝-⃠⃢-⃤꙰-꙲" }, { name: "Mn", alias: "Nonspacing_Mark", bmp: "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣ৾ਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣૺ-૿ଁ଼ିୁ-ୄ୍୕ୖୢୣஂீ்ఀఄ఼ా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഀഁ഻഼ു-ൄ്ൢൣඁ්ි-ුූัิ-ฺ็-๎ັິ-ຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲᜳᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᪿ-ᫎᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꠬꣄ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꦽꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯", astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]" }, { name: "N", alias: "Number", bmp: "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９", astral: "\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]" }, { name: "Nd", alias: "Decimal_Number", bmp: "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９", astral: "\uD801[\uDCA0-\uDCA9]|\uD803[\uDD30-\uDD39]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9\uDD50-\uDD59]|\uD807[\uDC50-\uDC59\uDD50-\uDD59\uDDA0-\uDDA9]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDD50-\uDD59]|\uD83E[\uDFF0-\uDFF9]" }, { name: "Nl", alias: "Letter_Number", bmp: "ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ", astral: "\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]" }, { name: "No", alias: "Other_Number", bmp: "²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൘-൞൰-൸༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵", astral: "\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C\uDFC0-\uDFD4]|\uD81A[\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD83A[\uDCC7-\uDCCF]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]" }, { name: "P", alias: "Punctuation", bmp: "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹏⹒-⹝、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･", astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]" }, { name: "Pc", alias: "Connector_Punctuation", bmp: "_‿⁀⁔︳︴﹍-﹏＿" }, { name: "Pd", alias: "Dash_Punctuation", bmp: "\\-֊־᐀᠆‐-―⸗⸚⸺⸻⹀⹝〜〰゠︱︲﹘﹣－", astral: "𐺭" }, { name: "Pe", alias: "Close_Punctuation", bmp: "\\)\\]\\}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩⹖⹘⹚⹜〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣" }, { name: "Pf", alias: "Final_Punctuation", bmp: "»’”›⸃⸅⸊⸍⸝⸡" }, { name: "Pi", alias: "Initial_Punctuation", bmp: "«‘‛“‟‹⸂⸄⸉⸌⸜⸠" }, { name: "Po", alias: "Other_Punctuation", bmp: "!-#%-'\\*,\\.\\/:;\\?@\\¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁⹃-⹏⹒-⹔、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･", astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]" }, { name: "Ps", alias: "Open_Punctuation", bmp: "\\(\\[\\{༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂⹕⹗⹙⹛〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢" }, { name: "S", alias: "Symbol", bmp: "\\$\\+<->\\^`\\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶߾߿࢈৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-⃀℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛꭪꭫﬩﮲-﯂﵀-﵏﷏﷼-﷿﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�", astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]" }, { name: "Sc", alias: "Currency_Symbol", bmp: "\\$¢-¥֏؋߾߿৲৳৻૱௹฿៛₠-⃀꠸﷼﹩＄￠￡￥￦", astral: "\uD807[\uDFDD-\uDFE0]|𞋿|𞲰" }, { name: "Sk", alias: "Modifier_Symbol", bmp: "\\^`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅࢈᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛꭪꭫﮲-﯂＾｀￣", astral: "\uD83C[\uDFFB-\uDFFF]" }, { name: "Sm", alias: "Math_Symbol", bmp: "\\+<->\\|~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬", astral: "\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]" }, { name: "So", alias: "Other_Symbol", bmp: "¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൏൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﵀-﵏﷏﷽-﷿￤￨￭￮￼�", astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFDC\uDFE1-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|𞅏|\uD83B[\uDCAC\uDD2E]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]" }, { name: "Z", alias: "Separator", bmp: "    - \u2028\u2029  　" }, { name: "Zl", alias: "Line_Separator", bmp: "\u2028" }, { name: "Zp", alias: "Paragraph_Separator", bmp: "\u2029" }, { name: "Zs", alias: "Space_Separator", bmp: "    -   　" }];
const Pl = (d) => {
  if (!d.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
  d.addUnicodeData(Jl);
};
var Xl = [{ name: "ASCII", bmp: "\0-" }, { name: "Alphabetic", bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈְ-ׇֽֿׁׂׅׄא-תׯ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉࣔ-ࣣࣟ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱৼਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹ-ૼଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౝౠ-ౣಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೝೞೠ-ೣೱೲഀ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൔ-ൗൟ-ൣൺ-ൿඁ-ඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄຆ-ຊຌ-ຣລວ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ႏႚ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜓᜟ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡸᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᪿᫀᫌ-ᫎᬀ-ᬳᬵ-ᭃᭅ-ᭌᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰶᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠅꠇ-ꠧꡀ-ꡳꢀ-ꣃꣅꣲ-ꣷꣻꣽ-ꣿꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC71-\uDC75\uDC82-\uDCB8\uDCC2\uDCD0-\uDCE8\uDD00-\uDD32\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE\uDDCF\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDEB8\uDF00-\uDF1A\uDF1D-\uDF2A\uDF40-\uDF46]|\uD806[\uDC00-\uDC38\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD47\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Any", isBmpLast: !0, bmp: "\0-￿", astral: "[\uD800-\uDBFF][\uDC00-\uDFFF]" }, { name: "Default_Ignorable_Code_Point", bmp: "­͏؜ᅟᅠ឴឵᠋-᠏​-‏‪-‮⁠-⁯ㅤ︀-️\uFEFFﾠ￰-￸", astral: "\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB43][\uDC00-\uDFFF]" }, { name: "Lowercase", bmp: "a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟸ-ꟺꬰ-ꭚꭜ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ", astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDF80\uDF83-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]" }, { name: "Noncharacter_Code_Point", bmp: "﷐-﷯￾￿", astral: "[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]" }, { name: "Uppercase", bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ", astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]" }, { name: "White_Space", bmp: "	-\r    - \u2028\u2029  　" }];
const Yl = (d) => {
  if (!d.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
  var e = Xl;
  e.push({ name: "Assigned", inverseOf: "Cn" }), d.addUnicodeData(e);
};
var Wl = [{ name: "Adlam", astral: "\uD83A[\uDD00-\uDD4B\uDD50-\uDD59\uDD5E\uDD5F]" }, { name: "Ahom", astral: "\uD805[\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF46]" }, { name: "Anatolian_Hieroglyphs", astral: "\uD811[\uDC00-\uDE46]" }, { name: "Arabic", bmp: "؀-؄؆-؋؍-ؚ؜-؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࡰ-ࢎ࢐࢑࢘-ࣣ࣡-ࣿﭐ-﯂ﯓ-ﴽ﵀-ﶏﶒ-ﷇ﷏ﷰ-﷿ﹰ-ﹴﹶ-ﻼ", astral: "\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]" }, { name: "Armenian", bmp: "Ա-Ֆՙ-֊֍-֏ﬓ-ﬗ" }, { name: "Avestan", astral: "\uD802[\uDF00-\uDF35\uDF39-\uDF3F]" }, { name: "Balinese", bmp: "ᬀ-ᭌ᭐-᭾" }, { name: "Bamum", bmp: "ꚠ-꛷", astral: "\uD81A[\uDC00-\uDE38]" }, { name: "Bassa_Vah", astral: "\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]" }, { name: "Batak", bmp: "ᯀ-᯳᯼-᯿" }, { name: "Bengali", bmp: "ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৾" }, { name: "Bhaiksuki", astral: "\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C]" }, { name: "Bopomofo", bmp: "˪˫ㄅ-ㄯㆠ-ㆿ" }, { name: "Brahmi", astral: "\uD804[\uDC00-\uDC4D\uDC52-\uDC75\uDC7F]" }, { name: "Braille", bmp: "⠀-⣿" }, { name: "Buginese", bmp: "ᨀ-ᨛ᨞᨟" }, { name: "Buhid", bmp: "ᝀ-ᝓ" }, { name: "Canadian_Aboriginal", bmp: "᐀-ᙿᢰ-ᣵ", astral: "\uD806[\uDEB0-\uDEBF]" }, { name: "Carian", astral: "\uD800[\uDEA0-\uDED0]" }, { name: "Caucasian_Albanian", astral: "\uD801[\uDD30-\uDD63\uDD6F]" }, { name: "Chakma", astral: "\uD804[\uDD00-\uDD34\uDD36-\uDD47]" }, { name: "Cham", bmp: "ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟" }, { name: "Cherokee", bmp: "Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ" }, { name: "Chorasmian", astral: "\uD803[\uDFB0-\uDFCB]" }, { name: "Common", bmp: "\0-@\\[-`\\{-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·؅،؛؟ـ۝࣢।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵ-᳷ᳺ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-⃀℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮗-⯿⸀-⹝⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㋿㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛꭪꭫﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫\uFEFF！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�", astral: "\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9C\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD82F[\uDCA0-\uDCA3]|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDEE0-\uDEF3\uDF00-\uDF56\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD83B[\uDC71-\uDCB4\uDD01-\uDD3D]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDDAD\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA\uDFF0-\uDFF9]|\uDB40[\uDC01\uDC20-\uDC7F]" }, { name: "Coptic", bmp: "Ϣ-ϯⲀ-ⳳ⳹-⳿" }, { name: "Cuneiform", astral: "\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]" }, { name: "Cypriot", astral: "\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]" }, { name: "Cypro_Minoan", astral: "\uD80B[\uDF90-\uDFF2]" }, { name: "Cyrillic", bmp: "Ѐ-҄҇-ԯᲀ-ᲈᴫᵸⷠ-ⷿꙀ-ꚟ︮︯" }, { name: "Deseret", astral: "\uD801[\uDC00-\uDC4F]" }, { name: "Devanagari", bmp: "ऀ-ॐॕ-ॣ०-ॿ꣠-ꣿ" }, { name: "Dives_Akuru", astral: "\uD806[\uDD00-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD46\uDD50-\uDD59]" }, { name: "Dogra", astral: "\uD806[\uDC00-\uDC3B]" }, { name: "Duployan", astral: "\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]" }, { name: "Egyptian_Hieroglyphs", astral: "\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E\uDC30-\uDC38]" }, { name: "Elbasan", astral: "\uD801[\uDD00-\uDD27]" }, { name: "Elymaic", astral: "\uD803[\uDFE0-\uDFF6]" }, { name: "Ethiopic", bmp: "ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ", astral: "\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]" }, { name: "Georgian", bmp: "Ⴀ-ჅჇჍა-ჺჼ-ჿᲐ-ᲺᲽ-Ჿⴀ-ⴥⴧⴭ" }, { name: "Glagolitic", bmp: "Ⰰ-ⱟ", astral: "\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]" }, { name: "Gothic", astral: "\uD800[\uDF30-\uDF4A]" }, { name: "Grantha", astral: "\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]" }, { name: "Greek", bmp: "Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ", astral: "\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]" }, { name: "Gujarati", bmp: "ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ-૿" }, { name: "Gunjala_Gondi", astral: "\uD807[\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9]" }, { name: "Gurmukhi", bmp: "ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-੶" }, { name: "Han", bmp: "⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿿豈-舘並-龎", astral: "\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Hangul", bmp: "ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ" }, { name: "Hanifi_Rohingya", astral: "\uD803[\uDD00-\uDD27\uDD30-\uDD39]" }, { name: "Hanunoo", bmp: "ᜠ-᜴" }, { name: "Hatran", astral: "\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]" }, { name: "Hebrew", bmp: "֑-ׇא-תׯ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ" }, { name: "Hiragana", bmp: "ぁ-ゖゝ-ゟ", astral: "\uD82C[\uDC01-\uDD1F\uDD50-\uDD52]|🈀" }, { name: "Imperial_Aramaic", astral: "\uD802[\uDC40-\uDC55\uDC57-\uDC5F]" }, { name: "Inherited", bmp: "̀-ًͯ҅҆-ٰٕ॑-॔᪰-ᫎ᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭", astral: "\uD800[\uDDFD\uDEE0]|𑌻|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uDB40[\uDD00-\uDDEF]" }, { name: "Inscriptional_Pahlavi", astral: "\uD802[\uDF60-\uDF72\uDF78-\uDF7F]" }, { name: "Inscriptional_Parthian", astral: "\uD802[\uDF40-\uDF55\uDF58-\uDF5F]" }, { name: "Javanese", bmp: "ꦀ-꧍꧐-꧙꧞꧟" }, { name: "Kaithi", astral: "\uD804[\uDC80-\uDCC2\uDCCD]" }, { name: "Kannada", bmp: "ಀ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೝೞೠ-ೣ೦-೯ೱೲ" }, { name: "Katakana", bmp: "ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ", astral: "\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD64-\uDD67]" }, { name: "Kayah_Li", bmp: "꤀-꤭꤯" }, { name: "Kharoshthi", astral: "\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE50-\uDE58]" }, { name: "Khitan_Small_Script", astral: "𖿤|\uD822[\uDF00-\uDFFF]|\uD823[\uDC00-\uDCD5]" }, { name: "Khmer", bmp: "ក-៝០-៩៰-៹᧠-᧿" }, { name: "Khojki", astral: "\uD804[\uDE00-\uDE11\uDE13-\uDE3E]" }, { name: "Khudawadi", astral: "\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]" }, { name: "Lao", bmp: "ກຂຄຆ-ຊຌ-ຣລວ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ" }, { name: "Latin", bmp: "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꟿꬰ-ꭚꭜ-ꭤꭦ-ꭩﬀ-ﬆＡ-Ｚａ-ｚ", astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E]" }, { name: "Lepcha", bmp: "ᰀ-᰷᰻-᱉ᱍ-ᱏ" }, { name: "Limbu", bmp: "ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏" }, { name: "Linear_A", astral: "\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]" }, { name: "Linear_B", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]" }, { name: "Lisu", bmp: "ꓐ-꓿", astral: "𑾰" }, { name: "Lycian", astral: "\uD800[\uDE80-\uDE9C]" }, { name: "Lydian", astral: "\uD802[\uDD20-\uDD39\uDD3F]" }, { name: "Mahajani", astral: "\uD804[\uDD50-\uDD76]" }, { name: "Makasar", astral: "\uD807[\uDEE0-\uDEF8]" }, { name: "Malayalam", bmp: "ഀ-ഌഎ-ഐഒ-ൄെ-ൈൊ-൏ൔ-ൣ൦-ൿ" }, { name: "Mandaic", bmp: "ࡀ-࡛࡞" }, { name: "Manichaean", astral: "\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]" }, { name: "Marchen", astral: "\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]" }, { name: "Masaram_Gondi", astral: "\uD807[\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]" }, { name: "Medefaidrin", astral: "\uD81B[\uDE40-\uDE9A]" }, { name: "Meetei_Mayek", bmp: "ꫠ-꫶ꯀ-꯭꯰-꯹" }, { name: "Mende_Kikakui", astral: "\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]" }, { name: "Meroitic_Cursive", astral: "\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]" }, { name: "Meroitic_Hieroglyphs", astral: "\uD802[\uDD80-\uDD9F]" }, { name: "Miao", astral: "\uD81B[\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F]" }, { name: "Modi", astral: "\uD805[\uDE00-\uDE44\uDE50-\uDE59]" }, { name: "Mongolian", bmp: "᠀᠁᠄᠆-᠙ᠠ-ᡸᢀ-ᢪ", astral: "\uD805[\uDE60-\uDE6C]" }, { name: "Mro", astral: "\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]" }, { name: "Multani", astral: "\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]" }, { name: "Myanmar", bmp: "က-႟ꧠ-ꧾꩠ-ꩿ" }, { name: "Nabataean", astral: "\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]" }, { name: "Nandinagari", astral: "\uD806[\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE4]" }, { name: "New_Tai_Lue", bmp: "ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟" }, { name: "Newa", astral: "\uD805[\uDC00-\uDC5B\uDC5D-\uDC61]" }, { name: "Nko", bmp: "߀-ߺ߽-߿" }, { name: "Nushu", astral: "𖿡|\uD82C[\uDD70-\uDEFB]" }, { name: "Nyiakeng_Puachue_Hmong", astral: "\uD838[\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDD4F]" }, { name: "Ogham", bmp: " -᚜" }, { name: "Ol_Chiki", bmp: "᱐-᱿" }, { name: "Old_Hungarian", astral: "\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]" }, { name: "Old_Italic", astral: "\uD800[\uDF00-\uDF23\uDF2D-\uDF2F]" }, { name: "Old_North_Arabian", astral: "\uD802[\uDE80-\uDE9F]" }, { name: "Old_Permic", astral: "\uD800[\uDF50-\uDF7A]" }, { name: "Old_Persian", astral: "\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]" }, { name: "Old_Sogdian", astral: "\uD803[\uDF00-\uDF27]" }, { name: "Old_South_Arabian", astral: "\uD802[\uDE60-\uDE7F]" }, { name: "Old_Turkic", astral: "\uD803[\uDC00-\uDC48]" }, { name: "Old_Uyghur", astral: "\uD803[\uDF70-\uDF89]" }, { name: "Oriya", bmp: "ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍୕-ୗଡ଼ଢ଼ୟ-ୣ୦-୷" }, { name: "Osage", astral: "\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB]" }, { name: "Osmanya", astral: "\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]" }, { name: "Pahawh_Hmong", astral: "\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]" }, { name: "Palmyrene", astral: "\uD802[\uDC60-\uDC7F]" }, { name: "Pau_Cin_Hau", astral: "\uD806[\uDEC0-\uDEF8]" }, { name: "Phags_Pa", bmp: "ꡀ-꡷" }, { name: "Phoenician", astral: "\uD802[\uDD00-\uDD1B\uDD1F]" }, { name: "Psalter_Pahlavi", astral: "\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]" }, { name: "Rejang", bmp: "ꤰ-꥓꥟" }, { name: "Runic", bmp: "ᚠ-ᛪᛮ-ᛸ" }, { name: "Samaritan", bmp: "ࠀ-࠭࠰-࠾" }, { name: "Saurashtra", bmp: "ꢀ-ꣅ꣎-꣙" }, { name: "Sharada", astral: "\uD804[\uDD80-\uDDDF]" }, { name: "Shavian", astral: "\uD801[\uDC50-\uDC7F]" }, { name: "Siddham", astral: "\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]" }, { name: "SignWriting", astral: "\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]" }, { name: "Sinhala", bmp: "ඁ-ඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴", astral: "\uD804[\uDDE1-\uDDF4]" }, { name: "Sogdian", astral: "\uD803[\uDF30-\uDF59]" }, { name: "Sora_Sompeng", astral: "\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]" }, { name: "Soyombo", astral: "\uD806[\uDE50-\uDEA2]" }, { name: "Sundanese", bmp: "ᮀ-ᮿ᳀-᳇" }, { name: "Syloti_Nagri", bmp: "ꠀ-꠬" }, { name: "Syriac", bmp: "܀-܍܏-݊ݍ-ݏࡠ-ࡪ" }, { name: "Tagalog", bmp: "ᜀ-᜕ᜟ" }, { name: "Tagbanwa", bmp: "ᝠ-ᝬᝮ-ᝰᝲᝳ" }, { name: "Tai_Le", bmp: "ᥐ-ᥭᥰ-ᥴ" }, { name: "Tai_Tham", bmp: "ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭" }, { name: "Tai_Viet", bmp: "ꪀ-ꫂꫛ-꫟" }, { name: "Takri", astral: "\uD805[\uDE80-\uDEB9\uDEC0-\uDEC9]" }, { name: "Tamil", bmp: "ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺", astral: "\uD807[\uDFC0-\uDFF1\uDFFF]" }, { name: "Tangsa", astral: "\uD81A[\uDE70-\uDEBE\uDEC0-\uDEC9]" }, { name: "Tangut", astral: "𖿠|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEFF]|\uD823[\uDD00-\uDD08]" }, { name: "Telugu", bmp: "ఀ-ఌఎ-ఐఒ-నప-హ఼-ౄె-ైొ-్ౕౖౘ-ౚౝౠ-ౣ౦-౯౷-౿" }, { name: "Thaana", bmp: "ހ-ޱ" }, { name: "Thai", bmp: "ก-ฺเ-๛" }, { name: "Tibetan", bmp: "ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚" }, { name: "Tifinagh", bmp: "ⴰ-ⵧⵯ⵰⵿" }, { name: "Tirhuta", astral: "\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]" }, { name: "Toto", astral: "\uD838[\uDE90-\uDEAE]" }, { name: "Ugaritic", astral: "\uD800[\uDF80-\uDF9D\uDF9F]" }, { name: "Vai", bmp: "ꔀ-ꘫ" }, { name: "Vithkuqi", astral: "\uD801[\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]" }, { name: "Wancho", astral: "\uD838[\uDEC0-\uDEF9\uDEFF]" }, { name: "Warang_Citi", astral: "\uD806[\uDCA0-\uDCF2\uDCFF]" }, { name: "Yezidi", astral: "\uD803[\uDE80-\uDEA9\uDEAB-\uDEAD\uDEB0\uDEB1]" }, { name: "Yi", bmp: "ꀀ-ꒌ꒐-꓆" }, { name: "Zanabazar_Square", astral: "\uD806[\uDE00-\uDE47]" }];
const Zl = (d) => {
  if (!d.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
  d.addUnicodeData(Wl, "Script");
};
function UB(d, e) {
  return d.slice(e, e + 2) === "\\\\" ? "$$" : "$";
}
function DB(d, e, u, r) {
  const c = d.split("\\\\");
  if (c.length) {
    let a = r ? "<div></div>" : "";
    if (u)
      return e + "\\mathrm{" + c.join(`}${e}${a}${e}\\mathrm{`) + "}" + e;
    {
      let B = "";
      return c.length === 1 ? B += "" + e + c[0] + e : c.forEach((f, F) => {
        1 < f.length && (B += "" + e + f + e), 1 < c.length && F < c.length - 1 && (B += a);
      }), B;
    }
  }
  return u ? `\\mathrm{${d}}` : d;
}
function jl(d, e, u, r) {
  if (d.match(/\\left\\{/g) || d.match(/\\class{fourlineruled}/g))
    return { content: d, __isChineseDivide: r = !1 };
  const c = k.matchRecursive(d, "{", "}", "g", { valueNames: ["inner", "left", "between", "right"], unbalanced: "skip-lazy" }).map((g) => {
    if (g.name === "between")
      return [g.start, g.end];
  }).filter((g) => g), a = Array.from(d.matchAll(/[\u4e00-\u9fa5]+/g));
  if (!a.length)
    return { content: d, __isChineseDivide: r = !1 };
  let B = "", f = 0;
  a.forEach((g) => {
    var U, m;
    c.some((b) => g.index >= b[0] && g.index <= b[1]) || ((U = d.slice(f, g.index)) && (m = UB(U, 0), B += "" + DB(U, m, e, u)), B += `<span>${g[0]}</span>` || "", f = g.index + g[0].length);
  });
  var F, w = d.slice(f);
  return w && (F = UB(w, 0), B += "" + DB(w, F, e, u)), { content: B, __isChineseDivide: r };
}
function ql(u) {
  var e = new RegExp("(?<!\\\\)_(?![{])", "g"), e = u.match(e), r = new RegExp("(?<!\\\\)\\^(?![{])", "g"), u = u.match(r), r = ((r = (r = MathJax == null ? void 0 : MathJax.config) == null ? void 0 : r.tex) == null ? void 0 : r.formatError) || ((r = MathJax == null ? void 0 : MathJax.tex) == null ? void 0 : r.formatError);
  return e != null && e.length ? (r(MathJax, new Error("the sub should be immediately followed by a brace")), "_") : u != null && u.length ? (r(MathJax, new Error("the sup should be immediately followed by a brace")), "^") : void 0;
}
function zl(d, e = nl.defaults({ wrapMathrm: !0, punctuation: !1, divideChinese: !1, lineBreak: !0, blankLight: !1, checkSubSup: !0 })) {
  if (!d)
    return "";
  if (e.checkSubSup) {
    var u = ql(d);
    if (u)
      return "" + u;
  }
  d = Il(d = e.punctuation ? sl(d) : d, e);
  let r = e.divideChinese;
  return e.divideChinese && (d = (u = jl(d, e.wrapMathrm, e.lineBreak, r)).content, r = u.__isChineseDivide), "" + (d = r ? d : (e.divideChinese ? "$$" : "") + (e.wrapMathrm ? "\\mathrm{" : "") + d + (e.wrapMathrm ? "}" : "") + (e.divideChinese ? "$$" : ""));
}
Vl(k), Rl(k), Nl(k), Pl(k), Yl(k), Zl(k);
const $l = { load: ["output/chtml", "input/tex", "[tex]/enclose", "[tex]/ams", "[tex]/noerrors", "[tex]/configmacros", "[tex]/mathtools", "[tex]/mhchem", "[tex]/unicode", "[tex]/textmacros", "[tex]/textcomp", "[tex]/cancel", "[tex]/extpfeil", "[tex]/html"] }, Ag = { "[+]": ["noerrors", "enclose", "ams", "mathtools", "mhchem", "unicode", "textcomp", "cancel", "extpfeil", "textmacros", "html"] }, eg = { "[": "[", "]": "]", "(": "(", ")": ")", "【": "【", "】": "】", NEarrow: "\\unicode{x21d7}", NWarrow: "\\unicode{x21d6}", SEarrow: "\\unicode{x21d8}", SWarrow: "\\unicode{x21d9}", textcircled: "\\enclose{circle}", romannumeral: "\\enclose{()}", arccot: "arccot", arccsc: "arccsc", arcsec: "arcsec", blackdiamond: "\\blacklozenge", blackheart: "\\unicode{x2665}", blackrectangle: "\\unicode{x220e}", blackstar: "\\unicode{x2605}", heart: "\\heartsuit", female: "\\unicode{x2640}", male: "\\unicode{x2642}", napprox: "\\unicode{x2249}", nequiv: "\\unicode{x2262}", notni: "\\unicode{x220c}", nsubset: "\\unicode{x2284}", nsupset: "TODO", oiiint: "\\unicode{x2230}", oiint: "\\unicode{x222f}", rectangle: "\\unicode{x25ad}", smiley: "\\unicode{x263a}", wideparen: "\\overparen", textperthousand: "\\unicode{x2030}", textregistered: "\\unicode{xae}", textsection: "\\unicode{xa7}", texttrademark: "\\unicode{x2122}", textreferencemark: "\\unicode{x203b}", parallelogram: "\\unicode{x25b1}", deletion: "\\text{ }", d: "\\underset{\\cdot}", v: "\\check", omitted: "\\tripledash", xmark: "\\times", cmark: "\\unicode{x2714}", replace: "\\xcancel", handtextcircled: "\\enclose{circle}", handsquare: "\\fbox", Alpha: "A", Beta: "B", Omicron: "O", Epsilon: "E", Zeta: "Z", Eta: "H", Iota: "I", Kappa: "K", Mu: "M", Nu: "N", Rho: "P", Tau: "T", Chi: "X", lg: "\\log", nl: "\\nless", ng: "\\ngtr", textbf: "\\class{bf}", textit: "\\class{it}", parallelequal: "{\\small{\\stackrel{\\;//}{\\raise-.5ex\\hbox{=}}}}", "^": "\\textasciicircum", bar: "\\overline", vec: "\\overrightarrow" }, ug = [["$", "$"], ["\\(", "\\)"]], tg = [["$$", "$$"], ["\\[", "\\]"]], dg = { inlineMath: ug, displayMath: tg, packages: Ag, macros: eg, maxBuffer: 10240, formatError: (d, e) => {
} }, rg = { enableMenu: !1, enableAssistiveMml: !1, menuOptions: { settings: { assistiveMml: !1 } } }, ng = { displayAlign: "left", fontURL: "https://homework-webfront.oss-cn-beijing.aliyuncs.com/MathJaxFonts" }, Er = { options: rg, loader: $l, tex: dg, chtml: ng }, cg = "https://homework-webfront.oss-cn-beijing.aliyuncs.com/complete_math_v1/mathjax-3.2.0/es5";
function ag(d) {
  if (globalThis) {
    let e = Er;
    d && (e = { ...Er, ...d }), globalThis.MathJax = { ...e, startup: { pageReady: () => {
    } } };
  }
}
ag();
var Is = function(d, e) {
  return (Is = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(u, r) {
    u.__proto__ = r;
  } : function(u, r) {
    for (var c in r)
      Object.prototype.hasOwnProperty.call(r, c) && (u[c] = r[c]);
  }))(d, e);
};
function Ie(d, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  function u() {
    this.constructor = d;
  }
  Is(d, e), d.prototype = e === null ? Object.create(e) : (u.prototype = e.prototype, new u());
}
function we(d, e, u, r) {
  return new (u = u || Promise)(function(c, a) {
    function B(w) {
      try {
        F(r.next(w));
      } catch (g) {
        a(g);
      }
    }
    function f(w) {
      try {
        F(r.throw(w));
      } catch (g) {
        a(g);
      }
    }
    function F(w) {
      var g;
      w.done ? c(w.value) : ((g = w.value) instanceof u ? g : new u(function(U) {
        U(g);
      })).then(B, f);
    }
    F((r = r.apply(d, e || [])).next());
  });
}
function ne(d, e) {
  var u, r, c, a = { label: 0, sent: function() {
    if (1 & c[0])
      throw c[1];
    return c[1];
  }, trys: [], ops: [] }, B = { next: f(0), throw: f(1), return: f(2) };
  return typeof Symbol == "function" && (B[Symbol.iterator] = function() {
    return this;
  }), B;
  function f(F) {
    return function(w) {
      var g = [F, w];
      if (u)
        throw new TypeError("Generator is already executing.");
      for (; a; )
        try {
          if (u = 1, r && (c = 2 & g[0] ? r.return : g[0] ? r.throw || ((c = r.return) && c.call(r), 0) : r.next) && !(c = c.call(r, g[1])).done)
            return c;
          switch (r = 0, (g = c ? [2 & g[0], c.value] : g)[0]) {
            case 0:
            case 1:
              c = g;
              break;
            case 4:
              return a.label++, { value: g[1], done: !1 };
            case 5:
              a.label++, r = g[1], g = [0];
              continue;
            case 7:
              g = a.ops.pop(), a.trys.pop();
              continue;
            default:
              if (!(c = 0 < (c = a.trys).length && c[c.length - 1]) && (g[0] === 6 || g[0] === 2)) {
                a = 0;
                continue;
              }
              if (g[0] === 3 && (!c || g[1] > c[0] && g[1] < c[3]))
                a.label = g[1];
              else if (g[0] === 6 && a.label < c[1])
                a.label = c[1], c = g;
              else {
                if (!(c && a.label < c[2])) {
                  c[2] && a.ops.pop(), a.trys.pop();
                  continue;
                }
                a.label = c[2], a.ops.push(g);
              }
          }
          g = e.call(d, a);
        } catch (U) {
          g = [6, U], r = 0;
        } finally {
          u = c = 0;
        }
      if (5 & g[0])
        throw g[1];
      return { value: g[0] ? g[1] : void 0, done: !0 };
    };
  }
}
for (var Lu = function() {
  function d(e, u, r, c) {
    this.left = e, this.top = u, this.width = r, this.height = c;
  }
  return d.prototype.add = function(e, u, r, c) {
    return new d(this.left + e, this.top + u, this.width + r, this.height + c);
  }, d.fromClientRect = function(e, u) {
    return new d(u.left + e.windowBounds.left, u.top + e.windowBounds.top, u.width, u.height);
  }, d.fromDOMRectList = function(e, u) {
    return u = Array.from(u).find(function(r) {
      return r.width !== 0;
    }), u ? new d(u.left + e.windowBounds.left, u.top + e.windowBounds.top, u.width, u.height) : d.EMPTY;
  }, d.EMPTY = new d(0, 0, 0, 0), d;
}(), Pc = function(d, e) {
  return Lu.fromClientRect(d, e.getBoundingClientRect());
}, xr = function(d) {
  for (var e = [], u = 0, r = d.length; u < r; ) {
    var c, a = d.charCodeAt(u++);
    55296 <= a && a <= 56319 && u < r ? (64512 & (c = d.charCodeAt(u++))) == 56320 ? e.push(((1023 & a) << 10) + (1023 & c) + 65536) : (e.push(a), u--) : e.push(a);
  }
  return e;
}, HA = function() {
  for (var d = [], e = 0; e < arguments.length; e++)
    d[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, d);
  var u = d.length;
  if (!u)
    return "";
  for (var r = [], c = -1, a = ""; ++c < u; ) {
    var B = d[c];
    B <= 65535 ? r.push(B) : r.push(55296 + ((B -= 65536) >> 10), B % 1024 + 56320), (c + 1 === u || 16384 < r.length) && (a += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return a;
}, pB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ig = "u" < typeof Uint8Array ? [] : new Uint8Array(256), Rd = 0; Rd < pB.length; Rd++)
  ig[pB.charCodeAt(Rd)] = Rd;
for (var EB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Mt = "u" < typeof Uint8Array ? [] : new Uint8Array(256), Nd = 0; Nd < EB.length; Nd++)
  Mt[EB.charCodeAt(Nd)] = Nd;
for (var Bg = function(d) {
  for (var e, u, r, c, f = 0.75 * d.length, a = d.length, B = 0, f = (d[d.length - 1] === "=" && (f--, d[d.length - 2] === "=") && f--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? ArrayBuffer : Array)(f)), F = Array.isArray(f) ? f : new Uint8Array(f), w = 0; w < a; w += 4)
    e = Mt[d.charCodeAt(w)], u = Mt[d.charCodeAt(w + 1)], r = Mt[d.charCodeAt(w + 2)], c = Mt[d.charCodeAt(w + 3)], F[B++] = e << 2 | u >> 4, F[B++] = (15 & u) << 4 | r >> 2, F[B++] = (3 & r) << 6 | 63 & c;
  return f;
}, sg = function(d) {
  for (var e = d.length, u = [], r = 0; r < e; r += 2)
    u.push(d[r + 1] << 8 | d[r]);
  return u;
}, og = function(d) {
  for (var e = d.length, u = [], r = 0; r < e; r += 4)
    u.push(d[r + 3] << 24 | d[r + 2] << 16 | d[r + 1] << 8 | d[r]);
  return u;
}, mu = 5, rc = 11, nc = 2, fg = rc - mu, bB = 65536 >> mu, lg = 1 << mu, cc = lg - 1, gg = 1024 >> mu, mB = bB + gg, Fh = mB, Fg = 32, Cg = mB + Fg, wg = 65536 >> rc, Qg = 1 << fg, hg = Qg - 1, HB = function(d, e, u) {
  return d.slice ? d.slice(e, u) : new Uint16Array(Array.prototype.slice.call(d, e, u));
}, Ug = function(d, e, u) {
  return d.slice ? d.slice(e, u) : new Uint32Array(Array.prototype.slice.call(d, e, u));
}, Dg = function(c, e) {
  var c = Bg(c), u = Array.isArray(c) ? og(c) : new Uint32Array(c), c = Array.isArray(c) ? sg(c) : new Uint16Array(c), r = HB(c, 12, u[4] / 2), c = u[5] === 2 ? HB(c, (24 + u[4]) / 2) : Ug(u, Math.ceil((24 + u[4]) / 4));
  return new pg(u[0], u[1], u[2], u[3], r, c);
}, pg = function() {
  function d(e, u, r, c, a, B) {
    this.initialValue = e, this.errorValue = u, this.highStart = r, this.highValueIndex = c, this.index = a, this.data = B;
  }
  return d.prototype.get = function(e) {
    var u;
    if (0 <= e) {
      if (e < 55296 || 56319 < e && e <= 65535)
        return u = this.index[e >> mu], this.data[u = (u << nc) + (e & cc)];
      if (e <= 65535)
        return u = this.index[bB + (e - 55296 >> mu)], this.data[u = (u << nc) + (e & cc)];
      if (e < this.highStart)
        return u = this.index[u = Cg - wg + (e >> rc)], u = this.index[u += e >> mu & hg], this.data[u = (u << nc) + (e & cc)];
      if (e <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, d;
}(), yB = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Eg = "u" < typeof Uint8Array ? [] : new Uint8Array(256), Jd = 0; Jd < yB.length; Jd++)
  Eg[yB.charCodeAt(Jd)] = Jd;
var bg = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", IB = 50, mg = 1, vs = 2, Ks = 3, Hg = 4, yg = 5, vB = 7, xs = 8, KB = 9, au = 10, yc = 11, xB = 12, Ic = 13, Ig = 14, Ot = 15, vc = 16, Pd = 17, Kt = 18, vg = 19, LB = 20, Kc = 21, xt = 22, ac = 23, qu = 24, ce = 25, kt = 26, Tt = 27, zu = 28, Kg = 29, Nt = 30, xg = 31, Xd = 32, Yd = 33, xc = 34, Lc = 35, _c = 36, Wt = 37, Sc = 38, Qr = 39, hr = 40, ic = 41, Ls = 42, Lg = 43, _g = [9001, 65288], _s = "!", YA = "×", Wd = "÷", Mc = Dg(bg), We = [Nt, _c], Oc = [mg, vs, Ks, yg], Ss = [au, xs], _B = [Tt, kt], Sg = Oc.concat(Ss), SB = [Sc, Qr, hr, xc, Lc], Mg = [Ot, Ic], Og = function(d, e) {
  e === void 0 && (e = "strict");
  var u = [], r = [], c = [];
  return d.forEach(function(a, B) {
    var f, F = Mc.get(a);
    return IB < F ? (c.push(!0), F -= IB) : c.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(a) !== -1 ? (r.push(B), u.push(vc)) : F === Hg || F === yc ? B !== 0 && Sg.indexOf(f = u[B - 1]) === -1 ? (r.push(r[B - 1]), u.push(f)) : (r.push(B), u.push(Nt)) : (r.push(B), F === xg ? u.push(e === "strict" ? Kc : Wt) : F === Ls || F === Kg ? u.push(Nt) : F === Lg ? u.push(131072 <= a && a <= 196605 || 196608 <= a && a <= 262141 ? Wt : Nt) : void u.push(F));
  }), [r, u, c];
}, Bc = function(d, e, u, r) {
  var c = r[u];
  if (Array.isArray(d) ? d.indexOf(c) !== -1 : d === c)
    for (var a = u; a <= r.length; ) {
      if ((B = r[++a]) === e)
        return !0;
      if (B !== au)
        break;
    }
  if (c === au)
    for (a = u; 0 < a; ) {
      var B, f = r[--a];
      if (Array.isArray(d) ? d.indexOf(f) !== -1 : d === f)
        for (var F = u; F <= r.length; ) {
          if ((B = r[++F]) === e)
            return !0;
          if (B !== au)
            break;
        }
      if (f !== au)
        break;
    }
  return !1;
}, MB = function(d, e) {
  for (var u = d; 0 <= u; ) {
    var r = e[u];
    if (r !== au)
      return r;
    u--;
  }
  return 0;
}, kg = function(d, e, u, r, B) {
  if (u[r] === 0 || (r -= 1, Array.isArray(B) && B[r] === !0))
    return YA;
  var a, B = r - 1, f = 1 + r, F = e[r], w = 0 <= B ? e[B] : 0, g = e[f];
  if (F === vs && g === Ks)
    return YA;
  if (Oc.indexOf(F) !== -1)
    return _s;
  if (Oc.indexOf(g) !== -1 || Ss.indexOf(g) !== -1)
    return YA;
  if (MB(r, e) === xs)
    return Wd;
  if (Mc.get(d[r]) === yc || (F === Xd || F === Yd) && Mc.get(d[f]) === yc || F === vB || g === vB || F === KB || [au, Ic, Ot].indexOf(F) === -1 && g === KB || [Pd, Kt, vg, qu, zu].indexOf(g) !== -1 || MB(r, e) === xt || Bc(ac, xt, r, e) || Bc([Pd, Kt], Kc, r, e) || Bc(xB, xB, r, e))
    return YA;
  if (F === au)
    return Wd;
  if (F === ac || g === ac)
    return YA;
  if (g === vc || F === vc)
    return Wd;
  if ([Ic, Ot, Kc].indexOf(g) !== -1 || F === Ig || w === _c && Mg.indexOf(F) !== -1 || F === zu && g === _c || g === LB || We.indexOf(g) !== -1 && F === ce || We.indexOf(F) !== -1 && g === ce || F === Tt && [Wt, Xd, Yd].indexOf(g) !== -1 || [Wt, Xd, Yd].indexOf(F) !== -1 && g === kt || We.indexOf(F) !== -1 && _B.indexOf(g) !== -1 || _B.indexOf(F) !== -1 && We.indexOf(g) !== -1 || [Tt, kt].indexOf(F) !== -1 && (g === ce || [xt, Ot].indexOf(g) !== -1 && e[1 + f] === ce) || [xt, Ot].indexOf(F) !== -1 && g === ce || F === ce && [ce, zu, qu].indexOf(g) !== -1)
    return YA;
  if ([ce, zu, qu, Pd, Kt].indexOf(g) !== -1)
    for (var U = r; 0 <= U; ) {
      if ((a = e[U]) === ce)
        return YA;
      if ([zu, qu].indexOf(a) === -1)
        break;
      U--;
    }
  if ([Tt, kt].indexOf(g) !== -1)
    for (U = [Pd, Kt].indexOf(F) !== -1 ? B : r; 0 <= U; ) {
      if ((a = e[U]) === ce)
        return YA;
      if ([zu, qu].indexOf(a) === -1)
        break;
      U--;
    }
  if (Sc === F && [Sc, Qr, xc, Lc].indexOf(g) !== -1 || [Qr, xc].indexOf(F) !== -1 && [Qr, hr].indexOf(g) !== -1 || [hr, Lc].indexOf(F) !== -1 && g === hr || SB.indexOf(F) !== -1 && [LB, kt].indexOf(g) !== -1 || SB.indexOf(g) !== -1 && F === Tt || We.indexOf(F) !== -1 && We.indexOf(g) !== -1 || F === qu && We.indexOf(g) !== -1 || We.concat(ce).indexOf(F) !== -1 && g === xt && _g.indexOf(d[f]) === -1 || We.concat(ce).indexOf(g) !== -1 && F === Kt)
    return YA;
  if (F === ic && g === ic) {
    for (var m = u[r], b = 1; 0 < m && e[--m] === ic; )
      b++;
    if (b % 2 != 0)
      return YA;
  }
  return F === Xd && g === Yd ? YA : Wd;
}, Tg = function(d, a) {
  var c = Og(d, (a = a || { lineBreak: "normal", wordBreak: "normal" }).lineBreak), u = c[0], r = c[1], c = c[2], a = (a.wordBreak !== "break-all" && a.wordBreak !== "break-word" || (r = r.map(function(B) {
    return [ce, Nt, Ls].indexOf(B) !== -1 ? Wt : B;
  })), a.wordBreak === "keep-all" ? c.map(function(B, f) {
    return B && 19968 <= d[f] && d[f] <= 40959;
  }) : void 0);
  return [u, r, a];
}, Gg = function() {
  function d(e, u, r, c) {
    this.codePoints = e, this.required = u === _s, this.start = r, this.end = c;
  }
  return d.prototype.slice = function() {
    return HA.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, d;
}(), Vg = function(r, e) {
  var u = xr(r), r = Tg(u, e), c = r[0], a = r[1], B = r[2], f = u.length, F = 0, w = 0;
  return { next: function() {
    if (f <= w)
      return { done: !0, value: null };
    for (var g, U = YA; w < f && (U = kg(u, a, c, ++w, B)) === YA; )
      ;
    return U !== YA || w === f ? (g = new Gg(u, U, F, w), F = w, { value: g, done: !1 }) : { done: !0, value: null };
  } };
}, Rg = 1, Ng = 2, zt = 4, OB = 8, br = 10, kB = 47, Jt = 92, Jg = 9, Pg = 32, Zd = 34, Lt = 61, Xg = 35, Yg = 36, Wg = 37, jd = 39, qd = 40, _t = 41, Zg = 95, ee = 45, jg = 33, qg = 60, zg = 62, $g = 64, AF = 91, eF = 93, uF = 61, tF = 123, zd = 63, dF = 125, TB = 124, rF = 126, nF = 128, GB = 65533, sc = 42, Ku = 43, cF = 44, aF = 58, iF = 59, Zt = 46, BF = 0, sF = 8, oF = 11, fF = 14, lF = 31, gF = 127, Me = -1, Ms = 48, Os = 97, ks = 101, FF = 102, CF = 117, wF = 122, Ts = 65, Gs = 69, Vs = 70, QF = 85, hF = 90, WA = function(d) {
  return Ms <= d && d <= 57;
}, UF = function(d) {
  return 55296 <= d && d <= 57343;
}, $u = function(d) {
  return WA(d) || Ts <= d && d <= Vs || Os <= d && d <= FF;
}, DF = function(d) {
  return Os <= d && d <= wF;
}, pF = function(d) {
  return Ts <= d && d <= hF;
}, EF = function(d) {
  return DF(d) || pF(d);
}, bF = function(d) {
  return nF <= d;
}, $d = function(d) {
  return d === br || d === Jg || d === Pg;
}, mr = function(d) {
  return EF(d) || bF(d) || d === Zg;
}, VB = function(d) {
  return mr(d) || WA(d) || d === ee;
}, mF = function(d) {
  return BF <= d && d <= sF || d === oF || fF <= d && d <= lF || d === gF;
}, cu = function(d, e) {
  return d === Jt && e !== br;
}, Ar = function(d, e, u) {
  return d === ee ? mr(e) || cu(e, u) : !!mr(d) || !(d !== Jt || !cu(d, e));
}, oc = function(d, e, u) {
  return d === Ku || d === ee ? !!WA(e) || e === Zt && WA(u) : WA(d === Zt ? e : d);
}, HF = function(d) {
  var e = 0, u = 1;
  d[e] !== Ku && d[e] !== ee || (d[e] === ee && (u = -1), e++);
  for (var r = []; WA(d[e]); )
    r.push(d[e++]);
  var c = r.length ? parseInt(HA.apply(void 0, r), 10) : 0;
  d[e] === Zt && e++;
  for (var a = []; WA(d[e]); )
    a.push(d[e++]);
  var B = a.length, f = B ? parseInt(HA.apply(void 0, a), 10) : 0, F = (d[e] !== Gs && d[e] !== ks || e++, 1);
  d[e] !== Ku && d[e] !== ee || (d[e] === ee && (F = -1), e++);
  for (var w = []; WA(d[e]); )
    w.push(d[e++]);
  var g = w.length ? parseInt(HA.apply(void 0, w), 10) : 0;
  return u * (c + f * Math.pow(10, -B)) * Math.pow(10, F * g);
}, yF = { type: 2 }, IF = { type: 3 }, vF = { type: 4 }, KF = { type: 13 }, xF = { type: 8 }, LF = { type: 21 }, _F = { type: 9 }, SF = { type: 10 }, MF = { type: 11 }, OF = { type: 12 }, kF = { type: 14 }, er = { type: 23 }, TF = { type: 1 }, GF = { type: 25 }, VF = { type: 24 }, RF = { type: 26 }, NF = { type: 27 }, JF = { type: 28 }, PF = { type: 29 }, XF = { type: 31 }, kc = { type: 32 }, Rs = function() {
  function d() {
    this._value = [];
  }
  return d.prototype.write = function(e) {
    this._value = this._value.concat(xr(e));
  }, d.prototype.read = function() {
    for (var e = [], u = this.consumeToken(); u !== kc; )
      e.push(u), u = this.consumeToken();
    return e;
  }, d.prototype.consumeToken = function() {
    var e = this.consumeCodePoint();
    switch (e) {
      case Zd:
        return this.consumeStringToken(Zd);
      case Xg:
        var u = this.peekCodePoint(0), r = this.peekCodePoint(1), c = this.peekCodePoint(2);
        if (VB(u) || cu(r, c))
          return u = Ar(u, r, c) ? Ng : Rg, { type: 5, value: this.consumeName(), flags: u };
        break;
      case Yg:
        if (this.peekCodePoint(0) === Lt)
          return this.consumeCodePoint(), KF;
        break;
      case jd:
        return this.consumeStringToken(jd);
      case qd:
        return yF;
      case _t:
        return IF;
      case sc:
        if (this.peekCodePoint(0) === Lt)
          return this.consumeCodePoint(), kF;
        break;
      case Ku:
        if (oc(e, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(e), this.consumeNumericToken();
        break;
      case cF:
        return vF;
      case ee:
        if (r = e, c = this.peekCodePoint(0), u = this.peekCodePoint(1), oc(r, c, u))
          return this.reconsumeCodePoint(e), this.consumeNumericToken();
        if (Ar(r, c, u))
          return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        if (c === ee && u === zg)
          return this.consumeCodePoint(), this.consumeCodePoint(), VF;
        break;
      case Zt:
        if (oc(e, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(e), this.consumeNumericToken();
        break;
      case kB:
        if (this.peekCodePoint(0) === sc)
          for (this.consumeCodePoint(); ; ) {
            var a = this.consumeCodePoint();
            if (a === sc && (a = this.consumeCodePoint()) === kB)
              return this.consumeToken();
            if (a === Me)
              return this.consumeToken();
          }
        break;
      case aF:
        return RF;
      case iF:
        return NF;
      case qg:
        if (this.peekCodePoint(0) === jg && this.peekCodePoint(1) === ee && this.peekCodePoint(2) === ee)
          return this.consumeCodePoint(), this.consumeCodePoint(), GF;
        break;
      case $g:
        if (r = this.peekCodePoint(0), c = this.peekCodePoint(1), u = this.peekCodePoint(2), Ar(r, c, u))
          return { type: 7, value: this.consumeName() };
        break;
      case AF:
        return JF;
      case Jt:
        if (cu(e, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        break;
      case eF:
        return PF;
      case uF:
        if (this.peekCodePoint(0) === Lt)
          return this.consumeCodePoint(), xF;
        break;
      case tF:
        return MF;
      case dF:
        return OF;
      case CF:
      case QF:
        return r = this.peekCodePoint(0), c = this.peekCodePoint(1), r !== Ku || !$u(c) && c !== zd || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
      case TB:
        if (this.peekCodePoint(0) === Lt)
          return this.consumeCodePoint(), _F;
        if (this.peekCodePoint(0) === TB)
          return this.consumeCodePoint(), LF;
        break;
      case rF:
        if (this.peekCodePoint(0) === Lt)
          return this.consumeCodePoint(), SF;
        break;
      case Me:
        return kc;
    }
    return $d(e) ? (this.consumeWhiteSpace(), XF) : WA(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : mr(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: HA(e) };
  }, d.prototype.consumeCodePoint = function() {
    var e = this._value.shift();
    return "u" < typeof e ? -1 : e;
  }, d.prototype.reconsumeCodePoint = function(e) {
    this._value.unshift(e);
  }, d.prototype.peekCodePoint = function(e) {
    return e >= this._value.length ? -1 : this._value[e];
  }, d.prototype.consumeUnicodeRangeToken = function() {
    for (var e = [], u = this.consumeCodePoint(); $u(u) && e.length < 6; )
      e.push(u), u = this.consumeCodePoint();
    for (var r = !1; u === zd && e.length < 6; )
      e.push(u), u = this.consumeCodePoint(), r = !0;
    if (r)
      return { type: 30, start: parseInt(HA.apply(void 0, e.map(function(B) {
        return B === zd ? Ms : B;
      })), 16), end: parseInt(HA.apply(void 0, e.map(function(B) {
        return B === zd ? Vs : B;
      })), 16) };
    var c = parseInt(HA.apply(void 0, e), 16);
    if (this.peekCodePoint(0) === ee && $u(this.peekCodePoint(1))) {
      this.consumeCodePoint();
      for (var u = this.consumeCodePoint(), a = []; $u(u) && a.length < 6; )
        a.push(u), u = this.consumeCodePoint();
      return { type: 30, start: c, end: parseInt(HA.apply(void 0, a), 16) };
    }
    return { type: 30, start: c, end: c };
  }, d.prototype.consumeIdentLikeToken = function() {
    var e = this.consumeName();
    return e.toLowerCase() === "url" && this.peekCodePoint(0) === qd ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === qd ? (this.consumeCodePoint(), { type: 19, value: e }) : { type: 20, value: e };
  }, d.prototype.consumeUrlToken = function() {
    var e = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === Me)
      return { type: 22, value: "" };
    var u = this.peekCodePoint(0);
    if (u === jd || u === Zd)
      return (u = this.consumeStringToken(this.consumeCodePoint())).type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Me || this.peekCodePoint(0) === _t) ? (this.consumeCodePoint(), { type: 22, value: u.value }) : (this.consumeBadUrlRemnants(), er);
    for (; ; ) {
      var r = this.consumeCodePoint();
      if (r === Me || r === _t)
        return { type: 22, value: HA.apply(void 0, e) };
      if ($d(r))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === Me || this.peekCodePoint(0) === _t ? (this.consumeCodePoint(), { type: 22, value: HA.apply(void 0, e) }) : (this.consumeBadUrlRemnants(), er);
      if (r === Zd || r === jd || r === qd || mF(r))
        return this.consumeBadUrlRemnants(), er;
      if (r === Jt) {
        if (!cu(r, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), er;
        e.push(this.consumeEscapedCodePoint());
      } else
        e.push(r);
    }
  }, d.prototype.consumeWhiteSpace = function() {
    for (; $d(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, d.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var e = this.consumeCodePoint();
      if (e === _t || e === Me)
        return;
      cu(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }, d.prototype.consumeStringSlice = function(e) {
    for (var u = ""; 0 < e; ) {
      var r = Math.min(5e4, e);
      u += HA.apply(void 0, this._value.splice(0, r)), e -= r;
    }
    return this._value.shift(), u;
  }, d.prototype.consumeStringToken = function(e) {
    for (var u = "", r = 0; ; ) {
      var c, a = this._value[r];
      if (a === Me || a === void 0 || a === e)
        return { type: 0, value: u += this.consumeStringSlice(r) };
      if (a === br)
        return this._value.splice(0, r), TF;
      a === Jt && (c = this._value[r + 1]) !== Me && c !== void 0 && (c === br ? (u += this.consumeStringSlice(r), r = -1, this._value.shift()) : cu(a, c) && (u = (u += this.consumeStringSlice(r)) + HA(this.consumeEscapedCodePoint()), r = -1)), r++;
    }
  }, d.prototype.consumeNumber = function() {
    var e = [], u = zt;
    for ((r = this.peekCodePoint(0)) !== Ku && r !== ee || e.push(this.consumeCodePoint()); WA(this.peekCodePoint(0)); )
      e.push(this.consumeCodePoint());
    var r = this.peekCodePoint(0), c = this.peekCodePoint(1);
    if (r === Zt && WA(c))
      for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), u = OB; WA(this.peekCodePoint(0)); )
        e.push(this.consumeCodePoint());
    r = this.peekCodePoint(0);
    var c = this.peekCodePoint(1), a = this.peekCodePoint(2);
    if ((r === Gs || r === ks) && ((c === Ku || c === ee) && WA(a) || WA(c)))
      for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), u = OB; WA(this.peekCodePoint(0)); )
        e.push(this.consumeCodePoint());
    return [HF(e), u];
  }, d.prototype.consumeNumericToken = function() {
    var u = this.consumeNumber(), e = u[0], u = u[1], r = this.peekCodePoint(0), c = this.peekCodePoint(1), a = this.peekCodePoint(2);
    return Ar(r, c, a) ? { type: 15, number: e, flags: u, unit: this.consumeName() } : r === Wg ? (this.consumeCodePoint(), { type: 16, number: e, flags: u }) : { type: 17, number: e, flags: u };
  }, d.prototype.consumeEscapedCodePoint = function() {
    var e = this.consumeCodePoint();
    if ($u(e)) {
      for (var u = HA(e); $u(this.peekCodePoint(0)) && u.length < 6; )
        u += HA(this.consumeCodePoint());
      $d(this.peekCodePoint(0)) && this.consumeCodePoint();
      var r = parseInt(u, 16);
      return r === 0 || UF(r) || 1114111 < r ? GB : r;
    }
    return e === Me ? GB : e;
  }, d.prototype.consumeName = function() {
    for (var e = ""; ; ) {
      var u = this.consumeCodePoint();
      if (VB(u))
        e += HA(u);
      else {
        if (!cu(u, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(u), e;
        e += HA(this.consumeEscapedCodePoint());
      }
    }
  }, d;
}(), Ns = function() {
  function d(e) {
    this._tokens = e;
  }
  return d.create = function(e) {
    var u = new Rs();
    return u.write(e), new d(u.read());
  }, d.parseValue = function(e) {
    return d.create(e).parseComponentValue();
  }, d.parseValues = function(e) {
    return d.create(e).parseComponentValues();
  }, d.prototype.parseComponentValue = function() {
    for (var e = this.consumeToken(); e.type === 31; )
      e = this.consumeToken();
    if (e.type === 32)
      throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
    this.reconsumeToken(e);
    for (var u = this.consumeComponentValue(); (e = this.consumeToken()).type === 31; )
      ;
    if (e.type === 32)
      return u;
    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
  }, d.prototype.parseComponentValues = function() {
    for (var e = []; ; ) {
      var u = this.consumeComponentValue();
      if (u.type === 32)
        return e;
      e.push(u), e.push();
    }
  }, d.prototype.consumeComponentValue = function() {
    var e = this.consumeToken();
    switch (e.type) {
      case 11:
      case 28:
      case 2:
        return this.consumeSimpleBlock(e.type);
      case 19:
        return this.consumeFunction(e);
    }
    return e;
  }, d.prototype.consumeSimpleBlock = function(e) {
    for (var u = { type: e, values: [] }, r = this.consumeToken(); ; ) {
      if (r.type === 32 || YF(r, e))
        return u;
      this.reconsumeToken(r), u.values.push(this.consumeComponentValue()), r = this.consumeToken();
    }
  }, d.prototype.consumeFunction = function(e) {
    for (var u = { name: e.value, values: [], type: 18 }; ; ) {
      var r = this.consumeToken();
      if (r.type === 32 || r.type === 3)
        return u;
      this.reconsumeToken(r), u.values.push(this.consumeComponentValue());
    }
  }, d.prototype.consumeToken = function() {
    var e = this._tokens.shift();
    return "u" < typeof e ? kc : e;
  }, d.prototype.reconsumeToken = function(e) {
    this._tokens.unshift(e);
  }, d;
}(), Pt = function(d) {
  return d.type === 15;
}, Ur = function(d) {
  return d.type === 17;
}, pA = function(d) {
  return d.type === 20;
}, fc = function(d, e) {
  return pA(d) && d.value === e;
}, Lr = function(d) {
  return d.type !== 31 && d.type !== 4;
}, Oe = function(d) {
  var e = [], u = [];
  return d.forEach(function(r) {
    if (r.type === 4) {
      if (u.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      e.push(u), u = [];
    } else
      r.type !== 31 && u.push(r);
  }), u.length && e.push(u), e;
}, YF = function(d, e) {
  return e === 11 && d.type === 12 || e === 28 && d.type === 29 || e === 2 && d.type === 3;
}, su = function(d) {
  return d.type === 17 || d.type === 15;
}, yA = function(d) {
  return d.type === 16 || su(d);
}, RB = function(d) {
  return 1 < d.length ? [d[0], d[1]] : [d[0]];
}, TA = { type: 17, number: 0, flags: zt }, Xc = { type: 16, number: 50, flags: zt }, iu = { type: 16, number: 100, flags: zt }, Gt = function(c, e, u) {
  var r = c[0], c = c[1];
  return [gA(r, e), gA(typeof c < "u" ? c : r, u)];
}, gA = function(d, e) {
  if (d.type === 16)
    return d.number / 100 * e;
  if (Pt(d))
    switch (d.unit) {
      case "rem":
      case "em":
        return 16 * d.number;
      default:
        return d.number;
    }
  return d.number;
}, Js = "deg", Ps = "grad", Xs = "rad", Ys = "turn", _r = { name: "angle", parse: function(d, e) {
  if (e.type === 15)
    switch (e.unit) {
      case Js:
        return Math.PI * e.number / 180;
      case Ps:
        return Math.PI / 200 * e.number;
      case Xs:
        return e.number;
      case Ys:
        return 2 * Math.PI * e.number;
    }
  throw new Error("Unsupported angle type");
} }, Ws = function(d) {
  return d.type === 15 && (d.unit === Js || d.unit === Ps || d.unit === Xs || d.unit === Ys);
}, Zs = function(d) {
  switch (d.filter(pA).map(function(e) {
    return e.value;
  }).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [TA, TA];
    case "to top":
    case "bottom":
      return he(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [TA, iu];
    case "to right":
    case "left":
      return he(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [iu, iu];
    case "to bottom":
    case "top":
      return he(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [iu, TA];
    case "to left":
    case "right":
      return he(270);
  }
  return 0;
}, he = function(d) {
  return Math.PI * d / 180;
}, ou = { name: "color", parse: function(d, e) {
  if (e.type === 18) {
    var u = WF[e.name];
    if ("u" < typeof u)
      throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
    return u(d, e.values);
  }
  if (e.type === 5) {
    var r, c, a, B;
    if (e.value.length === 3)
      return r = e.value.substring(0, 1), c = e.value.substring(1, 2), a = e.value.substring(2, 3), Bu(parseInt(r + r, 16), parseInt(c + c, 16), parseInt(a + a, 16), 1);
    if (e.value.length === 4)
      return r = e.value.substring(0, 1), c = e.value.substring(1, 2), a = e.value.substring(2, 3), B = e.value.substring(3, 4), Bu(parseInt(r + r, 16), parseInt(c + c, 16), parseInt(a + a, 16), parseInt(B + B, 16) / 255);
    if (e.value.length === 6)
      return r = e.value.substring(0, 2), c = e.value.substring(2, 4), a = e.value.substring(4, 6), Bu(parseInt(r, 16), parseInt(c, 16), parseInt(a, 16), 1);
    if (e.value.length === 8)
      return r = e.value.substring(0, 2), c = e.value.substring(2, 4), a = e.value.substring(4, 6), B = e.value.substring(6, 8), Bu(parseInt(r, 16), parseInt(c, 16), parseInt(a, 16), parseInt(B, 16) / 255);
  }
  return e.type === 20 && (u = jt[e.value.toUpperCase()], typeof u < "u") ? u : jt.TRANSPARENT;
} }, at = function(d) {
  return (255 & d) == 0;
}, SA = function(c) {
  var e = 255 & c, u = 255 & c >> 8, r = 255 & c >> 16, c = 255 & c >> 24;
  return e < 255 ? "rgba(" + c + "," + r + "," + u + "," + e / 255 + ")" : "rgb(" + c + "," + r + "," + u + ")";
}, Bu = function(d, e, u, r) {
  return (d << 24 | e << 16 | u << 8 | Math.round(255 * r) << 0) >>> 0;
}, NB = function(d, e) {
  var u;
  return d.type === 17 ? d.number : d.type === 16 ? (u = e === 3 ? 1 : 255, e === 3 ? d.number / 100 * u : Math.round(d.number / 100 * u)) : 0;
}, JB = function(d, a) {
  var u, r, c, a = a.filter(Lr);
  return a.length === 3 ? (u = (c = a.map(NB))[0], r = c[1], c = c[2], Bu(u, r, c, 1)) : a.length === 4 ? (u = (a = a.map(NB))[0], r = a[1], c = a[2], a = a[3], Bu(u, r, c, a)) : 0;
};
function lc(d, e, u) {
  return u < 0 && (u += 1), 1 <= u && --u, u < 1 / 6 ? (e - d) * u * 6 + d : u < 0.5 ? e : u < 2 / 3 ? 6 * (e - d) * (2 / 3 - u) + d : d;
}
var PB = function(c, r) {
  var u, r = r.filter(Lr), a = r[0], B = r[1], f = r[2], r = r[3], c = (a.type === 17 ? he(a.number) : _r.parse(c, a)) / (2 * Math.PI), a = yA(B) ? B.number / 100 : 0, B = yA(f) ? f.number / 100 : 0, f = typeof r < "u" && yA(r) ? gA(r, 1) : 1;
  return a == 0 ? Bu(255 * B, 255 * B, 255 * B, 1) : (a = lc(B = 2 * B - (r = B <= 0.5 ? B * (1 + a) : B + a - B * a), r, c + 1 / 3), u = lc(B, r, c), B = lc(B, r, c - 1 / 3), Bu(255 * a, 255 * u, 255 * B, f));
}, WF = { hsl: PB, hsla: PB, rgb: JB, rgba: JB }, XB = function(d, e) {
  return ou.parse(d, Ns.create(e).parseComponentValue());
}, jt = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, ZF = { name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function(d, e) {
  return e.map(function(u) {
    if (pA(u))
      switch (u.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, jF = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Sr = function(d, e) {
  return d = ou.parse(d, e[0]), e = e[1], e && yA(e) ? { color: d, stop: e } : { color: d, stop: null };
}, YB = function(d, e) {
  var u = d[0], r = d[d.length - 1];
  u.stop === null && (u.stop = TA), r.stop === null && (r.stop = iu);
  for (var c = [], a = 0, B = 0; B < d.length; B++) {
    var f = d[B].stop;
    f !== null ? (f = gA(f, e), c.push(a < f ? f : a), a = f) : c.push(null);
  }
  for (var F = null, B = 0; B < c.length; B++) {
    var w = c[B];
    if (w === null)
      F === null && (F = B);
    else if (F !== null) {
      for (var g = B - F, U = (w - c[F - 1]) / (1 + g), m = 1; m <= g; m++)
        c[F + m - 1] = U * m;
      F = null;
    }
  }
  return d.map(function(b, y) {
    return { color: b.color, stop: Math.max(Math.min(1, c[y] / e), 0) };
  });
}, qF = function(d, c, u) {
  var a = c / 2, r = u / 2, c = gA(d[0], c) - a, a = r - gA(d[1], u);
  return (Math.atan2(a, c) + 2 * Math.PI) % (2 * Math.PI);
}, zF = function(F, c, a) {
  var F = typeof F == "number" ? F : qF(F, c, a), r = Math.abs(c * Math.sin(F)) + Math.abs(a * Math.cos(F)), c = c / 2, a = a / 2, B = r / 2, f = Math.sin(F - Math.PI / 2) * B, F = Math.cos(F - Math.PI / 2) * B;
  return [r, c - F, c + F, a - f, a + f];
}, ye = function(d, e) {
  return Math.sqrt(d * d + e * e);
}, WB = function(d, e, u, r, c) {
  return [[0, 0], [0, e], [d, 0], [d, e]].reduce(function(a, B) {
    var F = B[0], f = B[1], F = ye(u - F, r - f);
    return (c ? F < a.optimumDistance : F > a.optimumDistance) ? { optimumCorner: B, optimumDistance: F } : a;
  }, { optimumDistance: c ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, $F = function(d, e, u, r, c) {
  var a, B, f, F, w = 0, g = 0;
  switch (d.size) {
    case 0:
      d.shape === 0 ? w = g = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(u), Math.abs(u - c)) : d.shape === 1 && (w = Math.min(Math.abs(e), Math.abs(e - r)), g = Math.min(Math.abs(u), Math.abs(u - c)));
      break;
    case 2:
      d.shape === 0 ? w = g = Math.min(ye(e, u), ye(e, u - c), ye(e - r, u), ye(e - r, u - c)) : d.shape === 1 && (a = Math.min(Math.abs(u), Math.abs(u - c)) / Math.min(Math.abs(e), Math.abs(e - r)), f = (F = WB(r, c, e, u, !0))[0], F = F[1], g = a * (w = ye(f - e, (F - u) / a)));
      break;
    case 1:
      d.shape === 0 ? w = g = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(u), Math.abs(u - c)) : d.shape === 1 && (w = Math.max(Math.abs(e), Math.abs(e - r)), g = Math.max(Math.abs(u), Math.abs(u - c)));
      break;
    case 3:
      d.shape === 0 ? w = g = Math.max(ye(e, u), ye(e, u - c), ye(e - r, u), ye(e - r, u - c)) : d.shape === 1 && (a = Math.max(Math.abs(u), Math.abs(u - c)) / Math.max(Math.abs(e), Math.abs(e - r)), f = (B = WB(r, c, e, u, !1))[0], F = B[1], g = a * (w = ye(f - e, (F - u) / a)));
  }
  return Array.isArray(d.size) && (w = gA(d.size[0], r), g = d.size.length === 2 ? gA(d.size[1], c) : w), [w, g];
}, AC = function(d, e) {
  var u = he(180), r = [];
  return Oe(e).forEach(function(c, a) {
    if (a === 0) {
      if (a = c[0], a.type === 20 && a.value === "to")
        return void (u = Zs(c));
      if (Ws(a))
        return void (u = _r.parse(d, a));
    }
    a = Sr(d, c), r.push(a);
  }), { angle: u, stops: r, type: 1 };
}, ur = function(d, e) {
  var u = he(180), r = [];
  return Oe(e).forEach(function(c, a) {
    if (a === 0) {
      if (a = c[0], a.type === 20 && ["top", "left", "right", "bottom"].indexOf(a.value) !== -1)
        return void (u = Zs(c));
      if (Ws(a))
        return void (u = (_r.parse(d, a) + he(270)) % he(360));
    }
    a = Sr(d, c), r.push(a);
  }), { angle: u, stops: r, type: 1 };
}, eC = function(d, e) {
  var u = he(180), r = [], c = 1;
  return Oe(e).forEach(function(F, B) {
    var f, F = F[0];
    if (B === 0) {
      if (pA(F) && F.value === "linear")
        return void (c = 1);
      if (pA(F) && F.value === "radial")
        return void (c = 2);
    }
    F.type === 18 && (F.name === "from" ? (f = ou.parse(d, F.values[0]), r.push({ stop: TA, color: f })) : F.name === "to" ? (f = ou.parse(d, F.values[0]), r.push({ stop: iu, color: f })) : F.name === "color-stop" && (B = F.values.filter(Lr)).length === 2 && (f = ou.parse(d, B[1]), F = B[0], Ur(F)) && r.push({ stop: { type: 16, number: 100 * F.number, flags: F.flags }, color: f }));
  }), c === 1 ? { angle: (u + he(180)) % he(360), stops: r, type: c } : { size: 3, shape: 0, stops: r, position: [], type: c };
}, js = "closest-side", qs = "farthest-side", zs = "closest-corner", $s = "farthest-corner", Ao = "circle", eo = "ellipse", uo = "cover", to = "contain", uC = function(d, e) {
  var u = 0, r = 3, c = [], a = [];
  return Oe(e).forEach(function(B, f) {
    var F, w = !0;
    f === 0 && (F = !1, w = B.reduce(function(g, U) {
      if (F)
        if (pA(U))
          switch (U.value) {
            case "center":
              return a.push(Xc), g;
            case "top":
            case "left":
              return a.push(TA), g;
            case "right":
            case "bottom":
              return a.push(iu), g;
          }
        else
          (yA(U) || su(U)) && a.push(U);
      else if (pA(U))
        switch (U.value) {
          case Ao:
            return u = 0, !1;
          case eo:
            return !(u = 1);
          case "at":
            return !(F = !0);
          case js:
            return r = 0, !1;
          case uo:
          case qs:
            return !(r = 1);
          case to:
          case zs:
            return !(r = 2);
          case $s:
            return !(r = 3);
        }
      else if (su(U) || yA(U))
        return (r = Array.isArray(r) ? r : []).push(U), !1;
      return g;
    }, w)), w && (f = Sr(d, B), c.push(f));
  }), { size: r, shape: u, stops: c, position: a, type: 2 };
}, tr = function(d, e) {
  var u = 0, r = 3, c = [], a = [];
  return Oe(e).forEach(function(B, f) {
    var F = !0;
    f === 0 ? F = B.reduce(function(w, g) {
      if (pA(g))
        switch (g.value) {
          case "center":
            return a.push(Xc), !1;
          case "top":
          case "left":
            return a.push(TA), !1;
          case "right":
          case "bottom":
            return a.push(iu), !1;
        }
      else if (yA(g) || su(g))
        return a.push(g), !1;
      return w;
    }, F) : f === 1 && (F = B.reduce(function(w, g) {
      if (pA(g))
        switch (g.value) {
          case Ao:
            return u = 0, !1;
          case eo:
            return !(u = 1);
          case to:
          case js:
            return r = 0, !1;
          case qs:
            return !(r = 1);
          case zs:
            return !(r = 2);
          case uo:
          case $s:
            return !(r = 3);
        }
      else if (su(g) || yA(g))
        return (r = Array.isArray(r) ? r : []).push(g), !1;
      return w;
    }, F)), F && (f = Sr(d, B), c.push(f));
  }), { size: r, shape: u, stops: c, position: a, type: 2 };
}, tC = function(d) {
  return d.type === 1;
}, dC = function(d) {
  return d.type === 2;
}, gc = { name: "image", parse: function(d, e) {
  if (e.type === 22)
    return u = { url: e.value, type: 0 }, d.cache.addImage(e.value), u;
  if (e.type !== 18)
    throw new Error("Unsupported image type " + e.type);
  var u = ro[e.name];
  if ("u" < typeof u)
    throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
  return u(d, e.values);
} };
function rC(d) {
  return !(d.type === 20 && d.value === "none" || d.type === 18 && !ro[d.name]);
}
for (var it, dr, St, ro = { "linear-gradient": AC, "-moz-linear-gradient": ur, "-ms-linear-gradient": ur, "-o-linear-gradient": ur, "-webkit-linear-gradient": ur, "radial-gradient": uC, "-moz-radial-gradient": tr, "-ms-radial-gradient": tr, "-o-radial-gradient": tr, "-webkit-radial-gradient": tr, "-webkit-gradient": eC }, nC = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(d, e) {
  var u;
  return e.length === 0 || (u = e[0]).type === 20 && u.value === "none" ? [] : e.filter(function(r) {
    return Lr(r) && rC(r);
  }).map(function(r) {
    return gc.parse(d, r);
  });
} }, cC = { name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function(d, e) {
  return e.map(function(u) {
    if (pA(u))
      switch (u.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, aC = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(d, e) {
  return Oe(e).map(function(u) {
    return u.filter(yA);
  }).map(RB);
} }, iC = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(d, e) {
  return Oe(e).map(function(u) {
    return u.filter(pA).map(function(r) {
      return r.value;
    }).join(" ");
  }).map(BC);
} }, BC = function(d) {
  switch (d) {
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
}, sC = (function(d) {
  d.AUTO = "auto", d.CONTAIN = "contain", d.COVER = "cover";
}(it = it || {}), { name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function(d, e) {
  return Oe(e).map(function(u) {
    return u.filter(oC);
  });
} }), oC = function(d) {
  return pA(d) || yA(d);
}, rr = function(d) {
  return { name: "border-" + d + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
}, fC = rr("top"), lC = rr("right"), gC = rr("bottom"), FC = rr("left"), nr = function(d) {
  return { name: "border-radius-" + d, initialValue: "0 0", prefix: !1, type: 1, parse: function(e, u) {
    return RB(u.filter(yA));
  } };
}, CC = nr("top-left"), wC = nr("top-right"), QC = nr("bottom-right"), hC = nr("bottom-left"), cr = function(d) {
  return { name: "border-" + d + "-style", initialValue: "solid", prefix: !1, type: 2, parse: function(e, u) {
    switch (u) {
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
}, UC = cr("top"), DC = cr("right"), pC = cr("bottom"), EC = cr("left"), ar = function(d) {
  return { name: "border-" + d + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(e, u) {
    return Pt(u) ? u.number : 0;
  } };
}, bC = ar("top"), mC = ar("right"), HC = ar("bottom"), yC = ar("left"), IC = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, vC = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(d, e) {
  return e !== "rtl" ? 0 : 1;
} }, KC = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(d, e) {
  return e.filter(pA).reduce(function(u, r) {
    return u | xC(r.value);
  }, 0);
} }, xC = function(d) {
  switch (d) {
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
}, LC = { name: "float", initialValue: "none", prefix: !1, type: 2, parse: function(d, e) {
  switch (e) {
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
} }, _C = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(d, e) {
  return e.type === 20 && e.value === "normal" || e.type !== 17 && e.type !== 15 ? 0 : e.number;
} }, SC = (function(d) {
  d.NORMAL = "normal", d.STRICT = "strict";
}(dr = dr || {}), { name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function(d, e) {
  return e !== "strict" ? dr.NORMAL : dr.STRICT;
} }), MC = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 }, ZB = function(d, e) {
  return pA(d) && d.value === "normal" ? 1.2 * e : d.type === 17 ? e * d.number : yA(d) ? gA(d, e) : e;
}, OC = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(d, e) {
  return e.type === 20 && e.value === "none" ? null : gc.parse(d, e);
} }, kC = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(d, e) {
  return e !== "inside" ? 1 : 0;
} }, TC = { name: "list-style-type", initialValue: "none", prefix: !1, type: 2, parse: function(d, e) {
  switch (e) {
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
} }, ir = function(d) {
  return { name: "margin-" + d, initialValue: "0", prefix: !1, type: 4 };
}, GC = ir("top"), VC = ir("right"), RC = ir("bottom"), NC = ir("left"), JC = { name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function(d, e) {
  return e.filter(pA).map(function(u) {
    switch (u.value) {
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
} }, PC = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(d, e) {
  return e !== "break-word" ? "normal" : "break-word";
} }, Br = function(d) {
  return { name: "padding-" + d, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
}, XC = Br("top"), YC = Br("right"), WC = Br("bottom"), ZC = Br("left"), jC = { name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function(d, e) {
  switch (e) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, qC = { name: "position", initialValue: "static", prefix: !1, type: 2, parse: function(d, e) {
  switch (e) {
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
} }, zC = { name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(d, e) {
  return e.length === 1 && fc(e[0], "none") ? [] : Oe(e).map(function(u) {
    for (var r = { color: jt.TRANSPARENT, offsetX: TA, offsetY: TA, blur: TA }, c = 0, a = 0; a < u.length; a++) {
      var B = u[a];
      su(B) ? (c === 0 ? r.offsetX = B : c === 1 ? r.offsetY = B : r.blur = B, c++) : r.color = ou.parse(d, B);
    }
    return r;
  });
} }, $C = { name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function(d, e) {
  switch (e) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, Aw = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(d, e) {
  if (e.type === 20 && e.value === "none" || e.type !== 18)
    return null;
  var u = tw[e.name];
  if ("u" < typeof u)
    throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
  return u(e.values);
} }, ew = function(d) {
  return d = d.filter(function(e) {
    return e.type === 17;
  }).map(function(e) {
    return e.number;
  }), d.length === 6 ? d : null;
}, uw = function(e) {
  var e = e.filter(function(F) {
    return F.type === 17;
  }).map(function(F) {
    return F.number;
  }), u = e[0], r = e[1], c = (e[2], e[3], e[4]), a = e[5], B = (e[6], e[7], e[8], e[9], e[10], e[11], e[12]), f = e[13];
  return e[14], e[15], e.length === 16 ? [u, r, c, a, B, f] : null;
}, tw = { matrix: ew, matrix3d: uw }, jB = { type: 16, number: 50, flags: zt }, dw = [jB, jB], rw = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(d, e) {
  return e = e.filter(yA), e.length !== 2 ? dw : [e[0], e[1]];
} }, nw = { name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function(d, e) {
  switch (e) {
    case "hidden":
      return 1;
    case "collapse":
      return 2;
    default:
      return 0;
  }
} }, cw = (function(d) {
  d.NORMAL = "normal", d.BREAK_ALL = "break-all", d.KEEP_ALL = "keep-all";
}(St = St || {}), { name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function(d, e) {
  switch (e) {
    case "break-all":
      return St.BREAK_ALL;
    case "keep-all":
      return St.KEEP_ALL;
    default:
      return St.NORMAL;
  }
} }), aw = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(d, e) {
  if (e.type === 20)
    return { auto: !0, order: 0 };
  if (Ur(e))
    return { auto: !1, order: e.number };
  throw new Error("Invalid z-index number parsed");
} }, qB = { name: "time", parse: function(d, e) {
  if (e.type === 15)
    switch (e.unit.toLowerCase()) {
      case "s":
        return 1e3 * e.number;
      case "ms":
        return e.number;
    }
  throw new Error("Unsupported time type");
} }, iw = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(d, e) {
  return Ur(e) ? e.number : 1;
} }, Bw = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, sw = { name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function(d, e) {
  return e.filter(pA).map(function(u) {
    switch (u.value) {
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
  }).filter(function(u) {
    return u !== 0;
  });
} }, ow = { name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function(d, e) {
  var u = [], r = [];
  return e.forEach(function(c) {
    switch (c.type) {
      case 20:
      case 0:
        u.push(c.value);
        break;
      case 17:
        u.push(c.number.toString());
        break;
      case 4:
        r.push(u.join(" ")), u.length = 0;
    }
  }), u.length && r.push(u.join(" ")), r.map(function(c) {
    return c.indexOf(" ") === -1 ? c : "'" + c + "'";
  });
} }, fw = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" }, lw = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(d, e) {
  return Ur(e) ? e.number : !pA(e) || e.value !== "bold" ? 400 : 700;
} }, gw = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(d, e) {
  return e.filter(pA).map(function(u) {
    return u.value;
  });
} }, Fw = { name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function(d, e) {
  switch (e) {
    case "oblique":
      return "oblique";
    case "italic":
      return "italic";
    default:
      return "normal";
  }
} }, LA = function(d, e) {
  return (d & e) != 0;
}, Cw = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(d, e) {
  return e.filter(Pt).map(function(u) {
    return qB.parse(d, u);
  });
} }, ww = { name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(d, e) {
  return e.length === 1 && fc(e[0], "none") ? [] : Oe(e).map(function(u) {
    for (var r = { color: 255, offsetX: TA, offsetY: TA, blur: TA, spread: TA, inset: !1 }, c = 0, a = 0; a < u.length; a++) {
      var B = u[a];
      fc(B, "inset") ? r.inset = !0 : su(B) ? (c === 0 ? r.offsetX = B : c === 1 ? r.offsetY = B : c === 2 ? r.blur = B : r.spread = B, c++) : r.color = ou.parse(d, B);
    }
    return r;
  });
} }, Qw = { name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function(d, e) {
  var u = [];
  return e.filter(pA).forEach(function(r) {
    switch (r.value) {
      case "stroke":
        u.push(1);
        break;
      case "fill":
        u.push(0);
        break;
      case "markers":
        u.push(2);
    }
  }), [0, 1, 2].forEach(function(r) {
    u.indexOf(r) === -1 && u.push(r);
  }), u;
} }, hw = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" }, Uw = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(d, e) {
  return Pt(e) ? e.number : 0;
} }, Dw = function() {
  function d(e, u) {
    this.animationDuration = V(e, Cw, u.animationDuration), this.backgroundClip = V(e, ZF, u.backgroundClip), this.backgroundColor = V(e, jF, u.backgroundColor), this.backgroundImage = V(e, nC, u.backgroundImage), this.backgroundOrigin = V(e, cC, u.backgroundOrigin), this.backgroundPosition = V(e, aC, u.backgroundPosition), this.backgroundRepeat = V(e, iC, u.backgroundRepeat), this.backgroundSize = V(e, sC, u.backgroundSize), this.borderTopColor = V(e, fC, u.borderTopColor), this.borderRightColor = V(e, lC, u.borderRightColor), this.borderBottomColor = V(e, gC, u.borderBottomColor), this.borderLeftColor = V(e, FC, u.borderLeftColor), this.borderTopLeftRadius = V(e, CC, u.borderTopLeftRadius), this.borderTopRightRadius = V(e, wC, u.borderTopRightRadius), this.borderBottomRightRadius = V(e, QC, u.borderBottomRightRadius), this.borderBottomLeftRadius = V(e, hC, u.borderBottomLeftRadius), this.borderTopStyle = V(e, UC, u.borderTopStyle), this.borderRightStyle = V(e, DC, u.borderRightStyle), this.borderBottomStyle = V(e, pC, u.borderBottomStyle), this.borderLeftStyle = V(e, EC, u.borderLeftStyle), this.borderTopWidth = V(e, bC, u.borderTopWidth), this.borderRightWidth = V(e, mC, u.borderRightWidth), this.borderBottomWidth = V(e, HC, u.borderBottomWidth), this.borderLeftWidth = V(e, yC, u.borderLeftWidth), this.boxShadow = V(e, ww, u.boxShadow), this.color = V(e, IC, u.color), this.direction = V(e, vC, u.direction), this.display = V(e, KC, u.display), this.float = V(e, LC, u.cssFloat), this.fontFamily = V(e, ow, u.fontFamily), this.fontSize = V(e, fw, u.fontSize), this.fontStyle = V(e, Fw, u.fontStyle), this.fontVariant = V(e, gw, u.fontVariant), this.fontWeight = V(e, lw, u.fontWeight), this.letterSpacing = V(e, _C, u.letterSpacing), this.lineBreak = V(e, SC, u.lineBreak), this.lineHeight = V(e, MC, u.lineHeight), this.listStyleImage = V(e, OC, u.listStyleImage), this.listStylePosition = V(e, kC, u.listStylePosition), this.listStyleType = V(e, TC, u.listStyleType), this.marginTop = V(e, GC, u.marginTop), this.marginRight = V(e, VC, u.marginRight), this.marginBottom = V(e, RC, u.marginBottom), this.marginLeft = V(e, NC, u.marginLeft), this.opacity = V(e, iw, u.opacity);
    var r = V(e, JC, u.overflow);
    this.overflowX = r[0], this.overflowY = r[1 < r.length ? 1 : 0], this.overflowWrap = V(e, PC, u.overflowWrap), this.paddingTop = V(e, XC, u.paddingTop), this.paddingRight = V(e, YC, u.paddingRight), this.paddingBottom = V(e, WC, u.paddingBottom), this.paddingLeft = V(e, ZC, u.paddingLeft), this.paintOrder = V(e, Qw, u.paintOrder), this.position = V(e, qC, u.position), this.textAlign = V(e, jC, u.textAlign), this.textDecorationColor = V(e, Bw, (r = u.textDecorationColor) != null ? r : u.color), this.textDecorationLine = V(e, sw, (r = u.textDecorationLine) != null ? r : u.textDecoration), this.textShadow = V(e, zC, u.textShadow), this.textTransform = V(e, $C, u.textTransform), this.transform = V(e, Aw, u.transform), this.transformOrigin = V(e, rw, u.transformOrigin), this.visibility = V(e, nw, u.visibility), this.webkitTextStrokeColor = V(e, hw, u.webkitTextStrokeColor), this.webkitTextStrokeWidth = V(e, Uw, u.webkitTextStrokeWidth), this.wordBreak = V(e, cw, u.wordBreak), this.zIndex = V(e, aw, u.zIndex);
  }
  return d.prototype.isVisible = function() {
    return 0 < this.display && 0 < this.opacity && this.visibility === 0;
  }, d.prototype.isTransparent = function() {
    return at(this.backgroundColor);
  }, d.prototype.isTransformed = function() {
    return this.transform !== null;
  }, d.prototype.isPositioned = function() {
    return this.position !== 0;
  }, d.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  }, d.prototype.isFloating = function() {
    return this.float !== 0;
  }, d.prototype.isInlineLevel = function() {
    return LA(this.display, 4) || LA(this.display, 33554432) || LA(this.display, 268435456) || LA(this.display, 536870912) || LA(this.display, 67108864) || LA(this.display, 134217728);
  }, d;
}(), V = function(d, e, c) {
  var r = new Rs(), c = c !== null && typeof c < "u" ? c.toString() : e.initialValue, a = (r.write(c), new Ns(r.read()));
  switch (e.type) {
    case 2:
      var B = a.parseComponentValue();
      return e.parse(d, pA(B) ? B.value : e.initialValue);
    case 0:
      return e.parse(d, a.parseComponentValue());
    case 1:
      return e.parse(d, a.parseComponentValues());
    case 4:
      return a.parseComponentValue();
    case 3:
      switch (e.format) {
        case "angle":
          return _r.parse(d, a.parseComponentValue());
        case "color":
          return ou.parse(d, a.parseComponentValue());
        case "image":
          return gc.parse(d, a.parseComponentValue());
        case "length":
          var f = a.parseComponentValue();
          return su(f) ? f : TA;
        case "length-percentage":
          return f = a.parseComponentValue(), yA(f) ? f : TA;
        case "time":
          return qB.parse(d, a.parseComponentValue());
      }
  }
}, pw = "data-html2canvas-debug", Ew = function(d) {
  switch (d.getAttribute(pw)) {
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
}, zB = function(d, e) {
  return d = Ew(d), d === 1 || e === d;
}, ke = function(d, e) {
  this.context = d, this.textNodes = [], this.elements = [], this.flags = 0, zB(e, 3), this.styles = new Dw(d, window.getComputedStyle(e, null)), pQ(e) && (this.styles.animationDuration.some(function(u) {
    return 0 < u;
  }) && (e.style.animationDuration = "0s"), this.styles.transform !== null) && (e.style.transform = "none"), this.bounds = Pc(this.context, e), zB(e, 4) && (this.flags |= 16);
}, bw = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", $B = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Vt = "u" < typeof Uint8Array ? [] : new Uint8Array(256), sr = 0; sr < $B.length; sr++)
  Vt[$B.charCodeAt(sr)] = sr;
for (var mw = function(d) {
  for (var e, u, r, c, f = 0.75 * d.length, a = d.length, B = 0, f = (d[d.length - 1] === "=" && (f--, d[d.length - 2] === "=") && f--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? ArrayBuffer : Array)(f)), F = Array.isArray(f) ? f : new Uint8Array(f), w = 0; w < a; w += 4)
    e = Vt[d.charCodeAt(w)], u = Vt[d.charCodeAt(w + 1)], r = Vt[d.charCodeAt(w + 2)], c = Vt[d.charCodeAt(w + 3)], F[B++] = e << 2 | u >> 4, F[B++] = (15 & u) << 4 | r >> 2, F[B++] = (3 & r) << 6 | 63 & c;
  return f;
}, Hw = function(d) {
  for (var e = d.length, u = [], r = 0; r < e; r += 2)
    u.push(d[r + 1] << 8 | d[r]);
  return u;
}, yw = function(d) {
  for (var e = d.length, u = [], r = 0; r < e; r += 4)
    u.push(d[r + 3] << 24 | d[r + 2] << 16 | d[r + 1] << 8 | d[r]);
  return u;
}, Hu = 5, Fc = 11, Cc = 2, Iw = Fc - Hu, As = 65536 >> Hu, vw = 1 << Hu, wc = vw - 1, Kw = 1024 >> Hu, es = As + Kw, Ch = es, xw = 32, Lw = es + xw, _w = 65536 >> Fc, Sw = 1 << Iw, Mw = Sw - 1, us = function(d, e, u) {
  return d.slice ? d.slice(e, u) : new Uint16Array(Array.prototype.slice.call(d, e, u));
}, Ow = function(d, e, u) {
  return d.slice ? d.slice(e, u) : new Uint32Array(Array.prototype.slice.call(d, e, u));
}, kw = function(c, e) {
  var c = mw(c), u = Array.isArray(c) ? yw(c) : new Uint32Array(c), c = Array.isArray(c) ? Hw(c) : new Uint16Array(c), r = us(c, 12, u[4] / 2), c = u[5] === 2 ? us(c, (24 + u[4]) / 2) : Ow(u, Math.ceil((24 + u[4]) / 4));
  return new Tw(u[0], u[1], u[2], u[3], r, c);
}, Tw = function() {
  function d(e, u, r, c, a, B) {
    this.initialValue = e, this.errorValue = u, this.highStart = r, this.highValueIndex = c, this.index = a, this.data = B;
  }
  return d.prototype.get = function(e) {
    var u;
    if (0 <= e) {
      if (e < 55296 || 56319 < e && e <= 65535)
        return u = this.index[e >> Hu], this.data[u = (u << Cc) + (e & wc)];
      if (e <= 65535)
        return u = this.index[As + (e - 55296 >> Hu)], this.data[u = (u << Cc) + (e & wc)];
      if (e < this.highStart)
        return u = this.index[u = Lw - _w + (e >> Fc)], u = this.index[u += e >> Hu & Mw], this.data[u = (u << Cc) + (e & wc)];
      if (e <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, d;
}(), ts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Gw = "u" < typeof Uint8Array ? [] : new Uint8Array(256), or = 0; or < ts.length; or++)
  Gw[ts.charCodeAt(or)] = or;
var ds, BA, Vw = 1, Qc = 2, hc = 3, rs = 4, ns = 5, Rw = 7, cs = 8, Uc = 9, Dc = 10, as = 11, is = 12, Bs = 13, ss = 14, pc = 15, Nw = function(d) {
  for (var e = [], u = 0, r = d.length; u < r; ) {
    var c, a = d.charCodeAt(u++);
    55296 <= a && a <= 56319 && u < r ? (64512 & (c = d.charCodeAt(u++))) == 56320 ? e.push(((1023 & a) << 10) + (1023 & c) + 65536) : (e.push(a), u--) : e.push(a);
  }
  return e;
}, Jw = function() {
  for (var d = [], e = 0; e < arguments.length; e++)
    d[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, d);
  var u = d.length;
  if (!u)
    return "";
  for (var r = [], c = -1, a = ""; ++c < u; ) {
    var B = d[c];
    B <= 65535 ? r.push(B) : r.push(55296 + ((B -= 65536) >> 10), B % 1024 + 56320), (c + 1 === u || 16384 < r.length) && (a += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return a;
}, Pw = kw(bw), xu = "×", Xw = "÷", Yw = function(d) {
  return Pw.get(d);
}, Ww = function(d, e, B) {
  var r = B - 2, c = e[r], a = e[B - 1], B = e[B];
  if (a === Qc && B === hc)
    return xu;
  if (a !== Qc && a !== hc && a !== rs && B !== Qc && B !== hc && B !== rs) {
    if (a === cs && [cs, Uc, as, is].indexOf(B) !== -1 || (a === as || a === Uc) && (B === Uc || B === Dc) || (a === is || a === Dc) && B === Dc || B === Bs || B === ns || B === Rw || a === Vw)
      return xu;
    if (a === Bs && B === ss) {
      for (; c === ns; )
        c = e[--r];
      if (c === ss)
        return xu;
    }
    if (a === pc && B === pc) {
      for (var f = 0; c === pc; )
        f++, c = e[--r];
      if (f % 2 == 0)
        return xu;
    }
  }
  return Xw;
}, Zw = function(d) {
  var e = Nw(d), u = e.length, r = 0, c = 0, a = e.map(Yw);
  return { next: function() {
    if (u <= r)
      return { done: !0, value: null };
    for (var B, f = xu; r < u && (f = Ww(e, a, ++r)) === xu; )
      ;
    return f !== xu || r === u ? (B = Jw.apply(null, e.slice(c, r)), c = r, { value: B, done: !1 }) : { done: !0, value: null };
  } };
}, jw = function(d) {
  for (var e, u = Zw(d), r = []; !(e = u.next()).done; )
    e.value && r.push(e.value.slice());
  return r;
}, qw = function(d) {
  if (d.createRange) {
    var e = d.createRange();
    if (e.getBoundingClientRect) {
      var u = d.createElement("boundtest"), e = (u.style.height = "123px", u.style.display = "block", d.body.appendChild(u), e.selectNode(u), e.getBoundingClientRect()), e = Math.round(e.height);
      if (d.body.removeChild(u), e === 123)
        return !0;
    }
  }
  return !1;
}, zw = function(d) {
  var e = d.createElement("boundtest"), u = (e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", d.body.appendChild(e), d.createRange()), r = (e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "", e.firstChild), B = xr(r.data).map(function(f) {
    return HA(f);
  }), c = 0, a = {}, B = B.every(function(g, F) {
    u.setStart(r, c), u.setEnd(r, c + g.length);
    var w = u.getBoundingClientRect(), g = (c += g.length, w.x > a.x || w.y > a.y);
    return a = w, F === 0 || g;
  });
  return d.body.removeChild(e), B;
}, $w = function() {
  return typeof new Image().crossOrigin < "u";
}, AQ = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, eQ = function(u) {
  var e = new Image(), u = u.createElement("canvas"), r = u.getContext("2d");
  if (!r)
    return !1;
  e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(e, 0, 0), u.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, os = function(d) {
  return d[0] === 0 && d[1] === 255 && d[2] === 0 && d[3] === 255;
}, uQ = function(d) {
  var c = d.createElement("canvas"), e = (c.width = 100, c.height = 100, c.getContext("2d"));
  if (!e)
    return Promise.reject(!1);
  e.fillStyle = "rgb(0, 255, 0)", e.fillRect(0, 0, 100, 100);
  var u = new Image(), r = c.toDataURL(), c = (u.src = r, Tc(100, 100, 0, 0, u));
  return e.fillStyle = "red", e.fillRect(0, 0, 100, 100), fs(c).then(function(B) {
    e.drawImage(B, 0, 0);
    var B = e.getImageData(0, 0, 100, 100).data, f = (e.fillStyle = "red", e.fillRect(0, 0, 100, 100), d.createElement("div"));
    return f.style.backgroundImage = "url(" + r + ")", f.style.height = "100px", os(B) ? fs(Tc(100, 100, 0, 0, f)) : Promise.reject(!1);
  }).then(function(a) {
    return e.drawImage(a, 0, 0), os(e.getImageData(0, 0, 100, 100).data);
  }).catch(function() {
    return !1;
  });
}, Tc = function(d, e, u, r, c) {
  var B = "http://www.w3.org/2000/svg", a = document.createElementNS(B, "svg"), B = document.createElementNS(B, "foreignObject");
  return a.setAttributeNS(null, "width", d.toString()), a.setAttributeNS(null, "height", e.toString()), B.setAttributeNS(null, "width", "100%"), B.setAttributeNS(null, "height", "100%"), B.setAttributeNS(null, "x", u.toString()), B.setAttributeNS(null, "y", r.toString()), B.setAttributeNS(null, "externalResourcesRequired", "true"), a.appendChild(B), B.appendChild(c), a;
}, fs = function(d) {
  return new Promise(function(e, u) {
    var r = new Image();
    r.onload = function() {
      return e(r);
    }, r.onerror = u, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(d));
  });
}, ae = { get SUPPORT_RANGE_BOUNDS() {
  var d = qw(document);
  return Object.defineProperty(ae, "SUPPORT_RANGE_BOUNDS", { value: d }), d;
}, get SUPPORT_WORD_BREAKING() {
  var d = ae.SUPPORT_RANGE_BOUNDS && zw(document);
  return Object.defineProperty(ae, "SUPPORT_WORD_BREAKING", { value: d }), d;
}, get SUPPORT_SVG_DRAWING() {
  var d = eQ(document);
  return Object.defineProperty(ae, "SUPPORT_SVG_DRAWING", { value: d }), d;
}, get SUPPORT_FOREIGNOBJECT_DRAWING() {
  var d = typeof Array.from == "function" && typeof window.fetch == "function" ? uQ(document) : Promise.resolve(!1);
  return Object.defineProperty(ae, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: d }), d;
}, get SUPPORT_CORS_IMAGES() {
  var d = $w();
  return Object.defineProperty(ae, "SUPPORT_CORS_IMAGES", { value: d }), d;
}, get SUPPORT_RESPONSE_TYPE() {
  var d = AQ();
  return Object.defineProperty(ae, "SUPPORT_RESPONSE_TYPE", { value: d }), d;
}, get SUPPORT_CORS_XHR() {
  var d = "withCredentials" in new XMLHttpRequest();
  return Object.defineProperty(ae, "SUPPORT_CORS_XHR", { value: d }), d;
}, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
  var d = !!(typeof Intl < "u" && Intl.Segmenter);
  return Object.defineProperty(ae, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: d }), d;
} }, Xt = function(d, e) {
  this.text = d, this.bounds = e;
}, tQ = function(d, c, u, r) {
  var c = nQ(c, u), a = [], B = 0;
  return c.forEach(function(f) {
    var F, w, g;
    u.textDecorationLine.length || 0 < f.trim().length ? ae.SUPPORT_RANGE_BOUNDS ? 1 < (F = ls(r, B, f.length).getClientRects()).length ? (g = Yc(f), w = 0, g.forEach(function(U) {
      a.push(new Xt(U, Lu.fromDOMRectList(d, ls(r, w + B, U.length).getClientRects()))), w += U.length;
    })) : a.push(new Xt(f, Lu.fromDOMRectList(d, F))) : (g = r.splitText(f.length), a.push(new Xt(f, dQ(d, r))), r = g) : ae.SUPPORT_RANGE_BOUNDS || (r = r.splitText(f.length)), B += f.length;
  }), a;
}, dQ = function(d, e) {
  var u = e.ownerDocument;
  if (u) {
    var u = u.createElement("html2canvaswrapper"), r = (u.appendChild(e.cloneNode(!0)), e.parentNode);
    if (r)
      return r.replaceChild(u, e), e = Pc(d, u), u.firstChild && r.replaceChild(u.firstChild, u), e;
  }
  return Lu.EMPTY;
}, ls = function(d, e, u) {
  var r = d.ownerDocument;
  if (r)
    return (r = r.createRange()).setStart(d, e), r.setEnd(d, e + u), r;
  throw new Error("Node has no owner document");
}, Yc = function(d) {
  var e;
  return ae.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (e = new Intl.Segmenter(void 0, { granularity: "grapheme" }), Array.from(e.segment(d)).map(function(u) {
    return u.segment;
  })) : jw(d);
}, rQ = function(d, e) {
  var u;
  return ae.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (u = new Intl.Segmenter(void 0, { granularity: "word" }), Array.from(u.segment(d)).map(function(r) {
    return r.segment;
  })) : aQ(d, e);
}, nQ = function(d, e) {
  return e.letterSpacing !== 0 ? Yc(d) : rQ(d, e);
}, cQ = [32, 160, 4961, 65792, 65793, 4153, 4241], aQ = function(d, e) {
  for (var u, r = Vg(d, { lineBreak: e.lineBreak, wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak }), c = []; !(u = r.next()).done; )
    (function() {
      var a, B;
      u.value && (a = u.value.slice(), a = xr(a), B = "", a.forEach(function(f) {
        cQ.indexOf(f) === -1 ? B += HA(f) : (B.length && c.push(B), c.push(HA(f)), B = "");
      }), B.length) && c.push(B);
    })();
  return c;
}, iQ = function(d, e, u) {
  this.text = BQ(e.data, u.textTransform), this.textBounds = tQ(d, this.text, u, e);
}, BQ = function(d, e) {
  switch (e) {
    case 1:
      return d.toLowerCase();
    case 3:
      return d.replace(sQ, oQ);
    case 2:
      return d.toUpperCase();
    default:
      return d;
  }
}, sQ = /(^|\s|:|-|\(|\))([a-z])/g, oQ = function(d, e, u) {
  return 0 < d.length ? e + u.toUpperCase() : d;
}, no = function(d) {
  function e(u, r) {
    return u = d.call(this, u, r) || this, u.src = r.currentSrc || r.src, u.intrinsicWidth = r.naturalWidth, u.intrinsicHeight = r.naturalHeight, u.context.cache.addImage(u.src), u;
  }
  return Ie(e, d), e;
}(ke), co = function(d) {
  function e(u, r) {
    return u = d.call(this, u, r) || this, u.canvas = r, u.intrinsicWidth = r.width, u.intrinsicHeight = r.height, u;
  }
  return Ie(e, d), e;
}(ke), ao = function(d) {
  function e(B, r) {
    var c = d.call(this, B, r) || this, a = new XMLSerializer(), B = Pc(B, r);
    return r.setAttribute("width", B.width + "px"), r.setAttribute("height", B.height + "px"), c.svg = "data:image/svg+xml," + encodeURIComponent(a.serializeToString(r)), c.intrinsicWidth = r.width.baseVal.value, c.intrinsicHeight = r.height.baseVal.value, c.context.cache.addImage(c.svg), c;
  }
  return Ie(e, d), e;
}(ke), io = function(d) {
  function e(u, r) {
    return u = d.call(this, u, r) || this, u.value = r.value, u;
  }
  return Ie(e, d), e;
}(ke), Gc = function(d) {
  function e(u, r) {
    return u = d.call(this, u, r) || this, u.start = r.start, u.reversed = typeof r.reversed == "boolean" && r.reversed === !0, u;
  }
  return Ie(e, d), e;
}(ke), fQ = [{ type: 15, flags: 0, unit: "px", number: 3 }], lQ = [{ type: 16, flags: 0, number: 50 }], gQ = function(d) {
  return d.width > d.height ? new Lu(d.left + (d.width - d.height) / 2, d.top, d.height, d.height) : d.width < d.height ? new Lu(d.left, d.top + (d.height - d.width) / 2, d.width, d.width) : d;
}, FQ = function(d) {
  var e = d.type === CQ ? new Array(d.value.length + 1).join("•") : d.value;
  return e.length === 0 ? d.placeholder || "" : e;
}, Hr = "checkbox", yr = "radio", CQ = "password", gs = 707406591, Vc = function(d) {
  function e(u, r) {
    var c = d.call(this, u, r) || this;
    switch (c.type = r.type.toLowerCase(), c.checked = r.checked, c.value = FQ(r), c.type !== Hr && c.type !== yr || (c.styles.backgroundColor = 3739148031, c.styles.borderTopColor = c.styles.borderRightColor = c.styles.borderBottomColor = c.styles.borderLeftColor = 2779096575, c.styles.borderTopWidth = c.styles.borderRightWidth = c.styles.borderBottomWidth = c.styles.borderLeftWidth = 1, c.styles.borderTopStyle = c.styles.borderRightStyle = c.styles.borderBottomStyle = c.styles.borderLeftStyle = 1, c.styles.backgroundClip = [0], c.styles.backgroundOrigin = [0], c.bounds = gQ(c.bounds)), c.type) {
      case Hr:
        c.styles.borderTopRightRadius = c.styles.borderTopLeftRadius = c.styles.borderBottomRightRadius = c.styles.borderBottomLeftRadius = fQ;
        break;
      case yr:
        c.styles.borderTopRightRadius = c.styles.borderTopLeftRadius = c.styles.borderBottomRightRadius = c.styles.borderBottomLeftRadius = lQ;
    }
    return c;
  }
  return Ie(e, d), e;
}(ke), Bo = function(d) {
  function e(u, r) {
    return u = d.call(this, u, r) || this, r = r.options[r.selectedIndex || 0], u.value = r && r.text || "", u;
  }
  return Ie(e, d), e;
}(ke), so = function(d) {
  function e(u, r) {
    return u = d.call(this, u, r) || this, u.value = r.value, u;
  }
  return Ie(e, d), e;
}(ke), oo = function(d) {
  function e(u, r) {
    var c, a, B = d.call(this, u, r) || this;
    B.src = r.src, B.width = parseInt(r.width, 10) || 0, B.height = parseInt(r.height, 10) || 0, B.backgroundColor = B.styles.backgroundColor;
    try {
      r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement && (B.tree = QQ(u, r.contentWindow.document.documentElement), c = r.contentWindow.document.documentElement ? XB(u, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : jt.TRANSPARENT, a = r.contentWindow.document.body ? XB(u, getComputedStyle(r.contentWindow.document.body).backgroundColor) : jt.TRANSPARENT, B.backgroundColor = at(c) ? at(a) ? B.styles.backgroundColor : a : c);
    } catch {
    }
    return B;
  }
  return Ie(e, d), e;
}(ke), wQ = ["OL", "UL", "MENU"], Dr = function(d, e, u, r) {
  for (var c, a, B = e.firstChild; B; B = c)
    c = B.nextSibling, DQ(B) && 0 < B.data.trim().length ? u.textNodes.push(new iQ(d, B, u.styles)) : lo(B) && (xQ(B) && B.assignedNodes ? B.assignedNodes().forEach(function(f) {
      return Dr(d, f, u, r);
    }) : (a = fo(d, B)).styles.isVisible() && (hQ(B, a, r) ? a.flags |= 4 : UQ(a.styles) && (a.flags |= 2), wQ.indexOf(B.tagName) !== -1 && (a.flags |= 8), u.elements.push(a), B.slot, B.shadowRoot ? Dr(d, B.shadowRoot, a, r) : Fo(B) || go(B) || Co(B) || Dr(d, B, a, r)));
}, fo = function(d, e) {
  return new (vQ(e) ? no : IQ(e) ? co : go(e) ? ao : bQ(e) ? io : mQ(e) ? Gc : HQ(e) ? Vc : Co(e) ? Bo : Fo(e) ? so : KQ(e) ? oo : ke)(d, e);
}, QQ = function(d, e) {
  var u = fo(d, e);
  return u.flags |= 4, Dr(d, e, u, u), u;
}, hQ = function(d, e, u) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || yQ(d) && u.styles.isTransparent();
}, UQ = function(d) {
  return d.isPositioned() || d.isFloating();
}, DQ = function(d) {
  return d.nodeType === Node.TEXT_NODE;
}, lo = function(d) {
  return d.nodeType === Node.ELEMENT_NODE;
}, pQ = function(d) {
  return lo(d) && typeof d.style < "u" && !EQ(d);
}, EQ = function(d) {
  return typeof d.className == "object";
}, bQ = function(d) {
  return d.tagName === "LI";
}, mQ = function(d) {
  return d.tagName === "OL";
}, HQ = function(d) {
  return d.tagName === "INPUT";
}, go = function(d) {
  return d.tagName === "svg";
}, yQ = function(d) {
  return d.tagName === "BODY";
}, IQ = function(d) {
  return d.tagName === "CANVAS";
}, vQ = function(d) {
  return d.tagName === "IMG";
}, KQ = function(d) {
  return d.tagName === "IFRAME";
}, Fo = function(d) {
  return d.tagName === "TEXTAREA";
}, Co = function(d) {
  return d.tagName === "SELECT";
}, xQ = function(d) {
  return d.tagName === "SLOT";
}, Fs = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, Cs = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] }, LQ = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] }, _Q = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] }, At = function(d, e, u, r, c, a) {
  return d < e || u < d ? Wc(d, c, 0 < a.length) : r.integers.reduce(function(B, f, F) {
    for (; f <= d; )
      d -= f, B += r.values[F];
    return B;
  }, "") + a;
}, wo = function(d, e, u, r) {
  for (var c = ""; u || d--, c = r(d) + c, e <= (d /= e) * e; )
    ;
  return c;
}, mA = function(d, e, u, r, c) {
  var a = u - e + 1;
  return (d < 0 ? "-" : "") + (wo(Math.abs(d), a, r, function(B) {
    return HA(Math.floor(B % a) + e);
  }) + c);
}, yu = function(d, e, u) {
  u === void 0 && (u = ". ");
  var r = e.length;
  return wo(Math.abs(d), r, !1, function(c) {
    return e[Math.floor(c % r)];
  }) + u;
}, dt = 1, ru = 2, nu = 4, Rt = 8, Ze = function(d, e, u, r, c, a) {
  if (d < -9999 || 9999 < d)
    return Wc(d, 4, 0 < c.length);
  var B = Math.abs(d), f = c;
  if (B === 0)
    return e[0] + f;
  for (var F = 0; 0 < B && F <= 4; F++) {
    var w = B % 10;
    w == 0 && LA(a, dt) && f !== "" ? f = e[w] + f : 1 < w || w == 1 && F === 0 || w == 1 && F === 1 && LA(a, ru) || w == 1 && F === 1 && LA(a, nu) && 100 < d || w == 1 && 1 < F && LA(a, Rt) ? f = e[w] + (0 < F ? u[F - 1] : "") + f : w == 1 && 0 < F && (f = u[F - 1] + f), B = Math.floor(B / 10);
  }
  return (d < 0 ? r : "") + f;
}, ws = "十百千萬", Qs = "拾佰仟萬", hs = "マイナス", Ec = "마이너스", Wc = function(d, e, u) {
  var r = u ? ". " : "", c = u ? "、" : "", a = u ? ", " : "", B = u ? " " : "";
  switch (e) {
    case 0:
      return "•" + B;
    case 1:
      return "◦" + B;
    case 2:
      return "◾" + B;
    case 5:
      var f = mA(d, 48, 57, !0, r);
      return f.length < 4 ? "0" + f : f;
    case 4:
      return yu(d, "〇一二三四五六七八九", c);
    case 6:
      return At(d, 1, 3999, Fs, 3, r).toLowerCase();
    case 7:
      return At(d, 1, 3999, Fs, 3, r);
    case 8:
      return mA(d, 945, 969, !1, r);
    case 9:
      return mA(d, 97, 122, !1, r);
    case 10:
      return mA(d, 65, 90, !1, r);
    case 11:
      return mA(d, 1632, 1641, !0, r);
    case 12:
    case 49:
      return At(d, 1, 9999, Cs, 3, r);
    case 35:
      return At(d, 1, 9999, Cs, 3, r).toLowerCase();
    case 13:
      return mA(d, 2534, 2543, !0, r);
    case 14:
    case 30:
      return mA(d, 6112, 6121, !0, r);
    case 15:
      return yu(d, "子丑寅卯辰巳午未申酉戌亥", c);
    case 16:
      return yu(d, "甲乙丙丁戊己庚辛壬癸", c);
    case 17:
    case 48:
      return Ze(d, "零一二三四五六七八九", ws, "負", c, ru | nu | Rt);
    case 47:
      return Ze(d, "零壹貳參肆伍陸柒捌玖", Qs, "負", c, dt | ru | nu | Rt);
    case 42:
      return Ze(d, "零一二三四五六七八九", ws, "负", c, ru | nu | Rt);
    case 41:
      return Ze(d, "零壹贰叁肆伍陆柒捌玖", Qs, "负", c, dt | ru | nu | Rt);
    case 26:
      return Ze(d, "〇一二三四五六七八九", "十百千万", hs, c, 0);
    case 25:
      return Ze(d, "零壱弐参四伍六七八九", "拾百千万", hs, c, dt | ru | nu);
    case 31:
      return Ze(d, "영일이삼사오육칠팔구", "십백천만", Ec, a, dt | ru | nu);
    case 33:
      return Ze(d, "零一二三四五六七八九", "十百千萬", Ec, a, 0);
    case 32:
      return Ze(d, "零壹貳參四五六七八九", "拾百千", Ec, a, dt | ru | nu);
    case 18:
      return mA(d, 2406, 2415, !0, r);
    case 20:
      return At(d, 1, 19999, _Q, 3, r);
    case 21:
      return mA(d, 2790, 2799, !0, r);
    case 22:
      return mA(d, 2662, 2671, !0, r);
    case 22:
      return At(d, 1, 10999, LQ, 3, r);
    case 23:
      return yu(d, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return yu(d, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return mA(d, 3302, 3311, !0, r);
    case 28:
      return yu(d, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", c);
    case 29:
      return yu(d, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", c);
    case 34:
      return mA(d, 3792, 3801, !0, r);
    case 37:
      return mA(d, 6160, 6169, !0, r);
    case 38:
      return mA(d, 4160, 4169, !0, r);
    case 39:
      return mA(d, 2918, 2927, !0, r);
    case 40:
      return mA(d, 1776, 1785, !0, r);
    case 43:
      return mA(d, 3046, 3055, !0, r);
    case 44:
      return mA(d, 3174, 3183, !0, r);
    case 45:
      return mA(d, 3664, 3673, !0, r);
    case 46:
      return mA(d, 3872, 3881, !0, r);
    default:
      return mA(d, 48, 57, !0, r);
  }
}, SQ = (function(d) {
  d[d.BEFORE = 0] = "BEFORE", d[d.AFTER = 1] = "AFTER";
}(ds = ds || {}), function() {
  function d() {
  }
  return d.getOrigin = function(e) {
    var u = d._link;
    return u ? (u.href = e, u.href = u.href, u.protocol + u.hostname + u.port) : "about:blank";
  }, d.isSameOrigin = function(e) {
    return d.getOrigin(e) === d._origin;
  }, d.setContext = function(e) {
    d._link = e.document.createElement("a"), d._origin = d.getOrigin(e.location.href);
  }, d._origin = "about:blank", d;
}()), T = function() {
  function d(e, u) {
    this.type = 0, this.x = e, this.y = u;
  }
  return d.prototype.add = function(e, u) {
    return new d(this.x + e, this.y + u);
  }, d;
}(), et = function(d, e, u) {
  return new T(d.x + (e.x - d.x) * u, d.y + (e.y - d.y) * u);
}, fr = function() {
  function d(e, u, r, c) {
    this.type = 1, this.start = e, this.startControl = u, this.endControl = r, this.end = c;
  }
  return d.prototype.subdivide = function(f, u) {
    var r = et(this.start, this.startControl, f), B = et(this.startControl, this.endControl, f), c = et(this.endControl, this.end, f), a = et(r, B, f), B = et(B, c, f), f = et(a, B, f);
    return u ? new d(this.start, r, a, f) : new d(f, B, c, this.end);
  }, d.prototype.add = function(e, u) {
    return new d(this.start.add(e, u), this.startControl.add(e, u), this.endControl.add(e, u), this.end.add(e, u));
  }, d.prototype.reverse = function() {
    return new d(this.end, this.endControl, this.startControl, this.start);
  }, d;
}(), Qe = function(d) {
  return d.type === 1;
}, MQ = function(d) {
  var O = d.styles, e = d.bounds, u = (r = Gt(O.borderTopLeftRadius, e.width, e.height))[0], r = r[1], c = (a = Gt(O.borderTopRightRadius, e.width, e.height))[0], a = a[1], B = (f = Gt(O.borderBottomRightRadius, e.width, e.height))[0], f = f[1], F = (w = Gt(O.borderBottomLeftRadius, e.width, e.height))[0], w = w[1];
  (g = []).push((u + c) / e.width), g.push((F + B) / e.width), g.push((r + w) / e.height), g.push((a + f) / e.height), 1 < (g = Math.max.apply(Math, g)) && (u /= g, r /= g, c /= g, a /= g, B /= g, f /= g, F /= g, w /= g);
  var g = e.width - c, U = e.height - f, m = e.width - B, b = e.height - w, y = O.borderTopWidth, I = O.borderRightWidth, K = O.borderBottomWidth, x = O.borderLeftWidth, G = gA(O.paddingTop, d.bounds.width), $ = gA(O.paddingRight, d.bounds.width), Z = gA(O.paddingBottom, d.bounds.width), O = gA(O.paddingLeft, d.bounds.width);
  this.topLeftBorderDoubleOuterBox = 0 < u || 0 < r ? QA(e.left + x / 3, e.top + y / 3, u - x / 3, r - y / 3, BA.TOP_LEFT) : new T(e.left + x / 3, e.top + y / 3), this.topRightBorderDoubleOuterBox = 0 < u || 0 < r ? QA(e.left + g, e.top + y / 3, c - I / 3, a - y / 3, BA.TOP_RIGHT) : new T(e.left + e.width - I / 3, e.top + y / 3), this.bottomRightBorderDoubleOuterBox = 0 < B || 0 < f ? QA(e.left + m, e.top + U, B - I / 3, f - K / 3, BA.BOTTOM_RIGHT) : new T(e.left + e.width - I / 3, e.top + e.height - K / 3), this.bottomLeftBorderDoubleOuterBox = 0 < F || 0 < w ? QA(e.left + x / 3, e.top + b, F - x / 3, w - K / 3, BA.BOTTOM_LEFT) : new T(e.left + x / 3, e.top + e.height - K / 3), this.topLeftBorderDoubleInnerBox = 0 < u || 0 < r ? QA(e.left + 2 * x / 3, e.top + 2 * y / 3, u - 2 * x / 3, r - 2 * y / 3, BA.TOP_LEFT) : new T(e.left + 2 * x / 3, e.top + 2 * y / 3), this.topRightBorderDoubleInnerBox = 0 < u || 0 < r ? QA(e.left + g, e.top + 2 * y / 3, c - 2 * I / 3, a - 2 * y / 3, BA.TOP_RIGHT) : new T(e.left + e.width - 2 * I / 3, e.top + 2 * y / 3), this.bottomRightBorderDoubleInnerBox = 0 < B || 0 < f ? QA(e.left + m, e.top + U, B - 2 * I / 3, f - 2 * K / 3, BA.BOTTOM_RIGHT) : new T(e.left + e.width - 2 * I / 3, e.top + e.height - 2 * K / 3), this.bottomLeftBorderDoubleInnerBox = 0 < F || 0 < w ? QA(e.left + 2 * x / 3, e.top + b, F - 2 * x / 3, w - 2 * K / 3, BA.BOTTOM_LEFT) : new T(e.left + 2 * x / 3, e.top + e.height - 2 * K / 3), this.topLeftBorderStroke = 0 < u || 0 < r ? QA(e.left + x / 2, e.top + y / 2, u - x / 2, r - y / 2, BA.TOP_LEFT) : new T(e.left + x / 2, e.top + y / 2), this.topRightBorderStroke = 0 < u || 0 < r ? QA(e.left + g, e.top + y / 2, c - I / 2, a - y / 2, BA.TOP_RIGHT) : new T(e.left + e.width - I / 2, e.top + y / 2), this.bottomRightBorderStroke = 0 < B || 0 < f ? QA(e.left + m, e.top + U, B - I / 2, f - K / 2, BA.BOTTOM_RIGHT) : new T(e.left + e.width - I / 2, e.top + e.height - K / 2), this.bottomLeftBorderStroke = 0 < F || 0 < w ? QA(e.left + x / 2, e.top + b, F - x / 2, w - K / 2, BA.BOTTOM_LEFT) : new T(e.left + x / 2, e.top + e.height - K / 2), this.topLeftBorderBox = 0 < u || 0 < r ? QA(e.left, e.top, u, r, BA.TOP_LEFT) : new T(e.left, e.top), this.topRightBorderBox = 0 < c || 0 < a ? QA(e.left + g, e.top, c, a, BA.TOP_RIGHT) : new T(e.left + e.width, e.top), this.bottomRightBorderBox = 0 < B || 0 < f ? QA(e.left + m, e.top + U, B, f, BA.BOTTOM_RIGHT) : new T(e.left + e.width, e.top + e.height), this.bottomLeftBorderBox = 0 < F || 0 < w ? QA(e.left, e.top + b, F, w, BA.BOTTOM_LEFT) : new T(e.left, e.top + e.height), this.topLeftPaddingBox = 0 < u || 0 < r ? QA(e.left + x, e.top + y, Math.max(0, u - x), Math.max(0, r - y), BA.TOP_LEFT) : new T(e.left + x, e.top + y), this.topRightPaddingBox = 0 < c || 0 < a ? QA(e.left + Math.min(g, e.width - I), e.top + y, g > e.width + I ? 0 : Math.max(0, c - I), Math.max(0, a - y), BA.TOP_RIGHT) : new T(e.left + e.width - I, e.top + y), this.bottomRightPaddingBox = 0 < B || 0 < f ? QA(e.left + Math.min(m, e.width - x), e.top + Math.min(U, e.height - K), Math.max(0, B - I), Math.max(0, f - K), BA.BOTTOM_RIGHT) : new T(e.left + e.width - I, e.top + e.height - K), this.bottomLeftPaddingBox = 0 < F || 0 < w ? QA(e.left + x, e.top + Math.min(b, e.height - K), Math.max(0, F - x), Math.max(0, w - K), BA.BOTTOM_LEFT) : new T(e.left + x, e.top + e.height - K), this.topLeftContentBox = 0 < u || 0 < r ? QA(e.left + x + O, e.top + y + G, Math.max(0, u - (x + O)), Math.max(0, r - (y + G)), BA.TOP_LEFT) : new T(e.left + x + O, e.top + y + G), this.topRightContentBox = 0 < c || 0 < a ? QA(e.left + Math.min(g, e.width + x + O), e.top + y + G, g > e.width + x + O ? 0 : c - x + O, a - (y + G), BA.TOP_RIGHT) : new T(e.left + e.width - (I + $), e.top + y + G), this.bottomRightContentBox = 0 < B || 0 < f ? QA(e.left + Math.min(m, e.width - (x + O)), e.top + Math.min(U, e.height + y + G), Math.max(0, B - (I + $)), f - (K + Z), BA.BOTTOM_RIGHT) : new T(e.left + e.width - (I + $), e.top + e.height - (K + Z)), this.bottomLeftContentBox = 0 < F || 0 < w ? QA(e.left + x + O, e.top + b, Math.max(0, F - (x + O)), w - (K + Z), BA.BOTTOM_LEFT) : new T(e.left + x + O, e.top + e.height - (K + Z));
}, QA = (function(d) {
  d[d.TOP_LEFT = 0] = "TOP_LEFT", d[d.TOP_RIGHT = 1] = "TOP_RIGHT", d[d.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", d[d.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
}(BA = BA || {}), function(d, e, u, r, c) {
  var a = (Math.sqrt(2) - 1) / 3 * 4, B = u * a, f = r * a, F = d + u, w = e + r;
  switch (c) {
    case BA.TOP_LEFT:
      return new fr(new T(d, w), new T(d, w - f), new T(F - B, e), new T(F, e));
    case BA.TOP_RIGHT:
      return new fr(new T(d, e), new T(d + B, e), new T(F, w - f), new T(F, w));
    case BA.BOTTOM_RIGHT:
      return new fr(new T(F, e), new T(F, e + f), new T(d + B, w), new T(d, w));
    default:
      return BA.BOTTOM_LEFT, new fr(new T(F, w), new T(F - B, w), new T(d, e + f), new T(d, e));
  }
}), Ir = function(d) {
  return [d.topLeftBorderBox, d.topRightBorderBox, d.bottomRightBorderBox, d.bottomLeftBorderBox];
}, OQ = function(d) {
  return [d.topLeftContentBox, d.topRightContentBox, d.bottomRightContentBox, d.bottomLeftContentBox];
}, vr = function(d) {
  return [d.topLeftPaddingBox, d.topRightPaddingBox, d.bottomRightPaddingBox, d.bottomLeftPaddingBox];
}, kQ = function(d, e, u) {
  this.offsetX = d, this.offsetY = e, this.matrix = u, this.type = 0, this.target = 6;
}, lr = function(d, e) {
  this.path = d, this.target = e, this.type = 1;
}, TQ = function(d) {
  this.opacity = d, this.type = 2, this.target = 6;
}, GQ = function(d) {
  return d.type === 0;
}, Qo = function(d) {
  return d.type === 1;
}, VQ = function(d) {
  return d.type === 2;
}, Us = function(d, e) {
  return d.length === e.length && d.some(function(u, r) {
    return u === e[r];
  });
}, RQ = function(d, e, u, r, c) {
  return d.map(function(a, B) {
    switch (B) {
      case 0:
        return a.add(e, u);
      case 1:
        return a.add(e + r, u);
      case 2:
        return a.add(e + r, u + c);
      case 3:
        return a.add(e, u + c);
    }
    return a;
  });
}, ho = function(d) {
  this.element = d, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
}, Uo = function() {
  function d(e, u) {
    var r;
    this.container = e, this.parent = u, this.effects = [], this.curves = new MQ(this.container), this.container.styles.opacity < 1 && this.effects.push(new TQ(this.container.styles.opacity)), this.container.styles.transform !== null && (e = this.container.bounds.left + this.container.styles.transformOrigin[0].number, u = this.container.bounds.top + this.container.styles.transformOrigin[1].number, r = this.container.styles.transform, this.effects.push(new kQ(e, u, r))), this.container.styles.overflowX !== 0 && (e = Ir(this.curves), u = vr(this.curves), Us(e, u) ? this.effects.push(new lr(e, 6)) : (this.effects.push(new lr(e, 2)), this.effects.push(new lr(u, 4))));
  }
  return d.prototype.getEffects = function(e) {
    for (var u = [2, 3].indexOf(this.container.styles.position) === -1, r = this.parent, c = this.effects.slice(0); r; ) {
      var a, B, f = r.effects.filter(function(F) {
        return !Qo(F);
      });
      u || r.container.styles.position !== 0 || !r.parent ? (c.unshift.apply(c, f), u = [2, 3].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0 && (a = Ir(r.curves), B = vr(r.curves), Us(a, B) || c.unshift(new lr(B, 6)))) : c.unshift.apply(c, f), r = r.parent;
    }
    return c.filter(function(F) {
      return LA(F.target, e);
    });
  }, d;
}(), Rc = function(d, e, u, r) {
  d.container.elements.forEach(function(c) {
    var a, B, f, F, w = LA(c.flags, 4), g = LA(c.flags, 2), U = new Uo(c, d), m = (LA(c.styles.display, 2048) && r.push(U), LA(c.flags, 8) ? [] : r);
    w || g ? (g = w || c.styles.isPositioned() ? u : e, a = new ho(U), c.styles.isPositioned() || c.styles.opacity < 1 || c.styles.isTransformed() ? (B = c.styles.zIndex.order) < 0 ? (f = 0, g.negativeZIndex.some(function(b, y) {
      return B > b.element.container.styles.zIndex.order ? (f = y, !1) : 0 < f;
    }), g.negativeZIndex.splice(f, 0, a)) : 0 < B ? (F = 0, g.positiveZIndex.some(function(b, y) {
      return B >= b.element.container.styles.zIndex.order ? (F = y + 1, !1) : 0 < F;
    }), g.positiveZIndex.splice(F, 0, a)) : g.zeroOrAutoZIndexOrTransformedOrOpacity.push(a) : (c.styles.isFloating() ? g.nonPositionedFloats : g.nonPositionedInlineLevel).push(a), Rc(U, a, w ? a : u, m)) : ((c.styles.isInlineLevel() ? e.inlineLevel : e.nonInlineLevel).push(U), Rc(U, e, u, m)), LA(c.flags, 8) && Do(c, m);
  });
}, Do = function(d, e) {
  for (var u = d instanceof Gc ? d.start : 1, r = d instanceof Gc && d.reversed, c = 0; c < e.length; c++) {
    var a = e[c];
    a.container instanceof io && typeof a.container.value == "number" && a.container.value !== 0 && (u = a.container.value), a.listValue = Wc(u, a.container.styles.listStyleType, !0), u += r ? -1 : 1;
  }
}, NQ = function(e) {
  var e = new Uo(e, null), u = new ho(e), r = [];
  return Rc(e, u, u, r), Do(e.container, r), u;
}, Ds = function(d, e) {
  switch (e) {
    case 0:
      return Ue(d.topLeftBorderBox, d.topLeftPaddingBox, d.topRightBorderBox, d.topRightPaddingBox);
    case 1:
      return Ue(d.topRightBorderBox, d.topRightPaddingBox, d.bottomRightBorderBox, d.bottomRightPaddingBox);
    case 2:
      return Ue(d.bottomRightBorderBox, d.bottomRightPaddingBox, d.bottomLeftBorderBox, d.bottomLeftPaddingBox);
    default:
      return Ue(d.bottomLeftBorderBox, d.bottomLeftPaddingBox, d.topLeftBorderBox, d.topLeftPaddingBox);
  }
}, JQ = function(d, e) {
  switch (e) {
    case 0:
      return Ue(d.topLeftBorderBox, d.topLeftBorderDoubleOuterBox, d.topRightBorderBox, d.topRightBorderDoubleOuterBox);
    case 1:
      return Ue(d.topRightBorderBox, d.topRightBorderDoubleOuterBox, d.bottomRightBorderBox, d.bottomRightBorderDoubleOuterBox);
    case 2:
      return Ue(d.bottomRightBorderBox, d.bottomRightBorderDoubleOuterBox, d.bottomLeftBorderBox, d.bottomLeftBorderDoubleOuterBox);
    default:
      return Ue(d.bottomLeftBorderBox, d.bottomLeftBorderDoubleOuterBox, d.topLeftBorderBox, d.topLeftBorderDoubleOuterBox);
  }
}, PQ = function(d, e) {
  switch (e) {
    case 0:
      return Ue(d.topLeftBorderDoubleInnerBox, d.topLeftPaddingBox, d.topRightBorderDoubleInnerBox, d.topRightPaddingBox);
    case 1:
      return Ue(d.topRightBorderDoubleInnerBox, d.topRightPaddingBox, d.bottomRightBorderDoubleInnerBox, d.bottomRightPaddingBox);
    case 2:
      return Ue(d.bottomRightBorderDoubleInnerBox, d.bottomRightPaddingBox, d.bottomLeftBorderDoubleInnerBox, d.bottomLeftPaddingBox);
    default:
      return Ue(d.bottomLeftBorderDoubleInnerBox, d.bottomLeftPaddingBox, d.topLeftBorderDoubleInnerBox, d.topLeftPaddingBox);
  }
}, XQ = function(d, e) {
  switch (e) {
    case 0:
      return gr(d.topLeftBorderStroke, d.topRightBorderStroke);
    case 1:
      return gr(d.topRightBorderStroke, d.bottomRightBorderStroke);
    case 2:
      return gr(d.bottomRightBorderStroke, d.bottomLeftBorderStroke);
    default:
      return gr(d.bottomLeftBorderStroke, d.topLeftBorderStroke);
  }
}, gr = function(d, e) {
  var u = [];
  return Qe(d) ? u.push(d.subdivide(0.5, !1)) : u.push(d), Qe(e) ? u.push(e.subdivide(0.5, !0)) : u.push(e), u;
}, Ue = function(d, e, u, r) {
  var c = [];
  return Qe(d) ? c.push(d.subdivide(0.5, !1)) : c.push(d), Qe(u) ? c.push(u.subdivide(0.5, !0)) : c.push(u), Qe(r) ? c.push(r.subdivide(0.5, !0).reverse()) : c.push(r), Qe(e) ? c.push(e.subdivide(0.5, !1).reverse()) : c.push(e), c;
}, po = function(u) {
  var e = u.bounds, u = u.styles;
  return e.add(u.borderLeftWidth, u.borderTopWidth, -(u.borderRightWidth + u.borderLeftWidth), -(u.borderTopWidth + u.borderBottomWidth));
}, Kr = function(u) {
  var e = u.styles, u = u.bounds, r = gA(e.paddingLeft, u.width), c = gA(e.paddingRight, u.width), a = gA(e.paddingTop, u.width), B = gA(e.paddingBottom, u.width);
  return u.add(r + e.borderLeftWidth, a + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + c), -(e.borderTopWidth + e.borderBottomWidth + a + B));
}, YQ = function(d, e) {
  return d === 0 ? e.bounds : (d === 2 ? Kr : po)(e);
}, WQ = function(d, e) {
  return d === 0 ? e.bounds : (d === 2 ? Kr : po)(e);
}, bc = function(d, e, a) {
  var r = YQ(rt(d.styles.backgroundOrigin, e), d), c = WQ(rt(d.styles.backgroundClip, e), d), a = ZQ(rt(d.styles.backgroundSize, e), a, r), B = a[0], f = a[1], F = Gt(rt(d.styles.backgroundPosition, e), r.width - B, r.height - f);
  return [jQ(rt(d.styles.backgroundRepeat, e), F, a, r, c), Math.round(r.left + F[0]), Math.round(r.top + F[1]), B, f];
}, ut = function(d) {
  return pA(d) && d.value === it.AUTO;
}, Fr = function(d) {
  return typeof d == "number";
}, ZQ = function(f, a, u) {
  var r = a[0], c = a[1], a = a[2], B = f[0], f = f[1];
  if (!B)
    return [0, 0];
  if (yA(B) && f && yA(f))
    return [gA(B, u.width), gA(f, u.height)];
  var F = Fr(a);
  if (pA(B) && (B.value === it.CONTAIN || B.value === it.COVER))
    return Fr(a) ? u.width / u.height < a != (B.value === it.COVER) ? [u.width, u.width / a] : [u.height * a, u.height] : [u.width, u.height];
  var w = Fr(r), g = Fr(c), U = w || g;
  if (ut(B) && (!f || ut(f)))
    return w && g ? [r, c] : F || U ? U && F ? [w ? r : c * a, g ? c : r / a] : [w ? r : u.width, g ? c : u.height] : [u.width, u.height];
  if (F)
    return F = U = 0, yA(B) ? U = gA(B, u.width) : yA(f) && (F = gA(f, u.height)), ut(B) ? U = F * a : f && !ut(f) || (F = U / a), [U, F];
  if (a = null, U = null, yA(B) ? a = gA(B, u.width) : f && yA(f) && (U = gA(f, u.height)), (a = (U = a === null || f && !ut(f) ? U : w && g ? a / r * c : u.height) !== null && ut(B) ? w && g ? U / c * r : u.width : a) !== null && U !== null)
    return [a, U];
  throw new Error("Unable to calculate background-size for element");
}, rt = function(d, e) {
  return e = d[e], "u" < typeof e ? d[0] : e;
}, jQ = function(d, e, u, r, c) {
  var a = e[0], B = e[1], f = u[0], F = u[1];
  switch (d) {
    case 2:
      return [new T(Math.round(r.left), Math.round(r.top + B)), new T(Math.round(r.left + r.width), Math.round(r.top + B)), new T(Math.round(r.left + r.width), Math.round(F + r.top + B)), new T(Math.round(r.left), Math.round(F + r.top + B))];
    case 3:
      return [new T(Math.round(r.left + a), Math.round(r.top)), new T(Math.round(r.left + a + f), Math.round(r.top)), new T(Math.round(r.left + a + f), Math.round(r.height + r.top)), new T(Math.round(r.left + a), Math.round(r.height + r.top))];
    case 1:
      return [new T(Math.round(r.left + a), Math.round(r.top + B)), new T(Math.round(r.left + a + f), Math.round(r.top + B)), new T(Math.round(r.left + a + f), Math.round(r.top + B + F)), new T(Math.round(r.left + a), Math.round(r.top + B + F))];
    default:
      return [new T(Math.round(c.left), Math.round(c.top)), new T(Math.round(c.left + c.width), Math.round(c.top)), new T(Math.round(c.left + c.width), Math.round(c.height + c.top)), new T(Math.round(c.left), Math.round(c.height + c.top))];
  }
}, qQ = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", ps = "Hidden Text", zQ = function() {
  function d(e) {
    this._data = {}, this._document = e;
  }
  return d.prototype.parseMetrics = function(f, F) {
    var r = this._document.createElement("div"), c = this._document.createElement("img"), a = this._document.createElement("span"), B = this._document.body, f = (r.style.visibility = "hidden", r.style.fontFamily = f, r.style.fontSize = F, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", B.appendChild(r), c.src = qQ, c.width = 1, c.height = 1, c.style.margin = "0", c.style.padding = "0", c.style.verticalAlign = "baseline", a.style.fontFamily = f, a.style.fontSize = F, a.style.margin = "0", a.style.padding = "0", a.appendChild(this._document.createTextNode(ps)), r.appendChild(a), r.appendChild(c), c.offsetTop - a.offsetTop + 2), F = (r.removeChild(a), r.appendChild(this._document.createTextNode(ps)), r.style.lineHeight = "normal", c.style.verticalAlign = "super", c.offsetTop - r.offsetTop + 2);
    return B.removeChild(r), { baseline: f, middle: F };
  }, d.prototype.getMetrics = function(e, u) {
    var r = e + " " + u;
    return "u" < typeof this._data[r] && (this._data[r] = this.parseMetrics(e, u)), this._data[r];
  }, d;
}(), Eo = function(d, e) {
  this.context = d, this.options = e;
}, $Q = 1e4, Ah = (function(d) {
  function e(u, r) {
    return u = d.call(this, u, r) || this, u._activeEffects = [], u.canvas = r.canvas || document.createElement("canvas"), u.ctx = u.canvas.getContext("2d"), r.canvas || (u.canvas.width = Math.floor(r.width * r.scale), u.canvas.height = Math.floor(r.height * r.scale), u.canvas.style.width = r.width + "px", u.canvas.style.height = r.height + "px"), u.fontMetrics = new zQ(document), u.ctx.scale(u.options.scale, u.options.scale), u.ctx.translate(-r.x, -r.y), u.ctx.textBaseline = "bottom", u._activeEffects = [], u.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), u;
  }
  Ie(e, d), e.prototype.applyEffects = function(u) {
    for (var r = this; this._activeEffects.length; )
      this.popEffect();
    u.forEach(function(c) {
      return r.applyEffect(c);
    });
  }, e.prototype.applyEffect = function(u) {
    this.ctx.save(), VQ(u) && (this.ctx.globalAlpha = u.opacity), GQ(u) && (this.ctx.translate(u.offsetX, u.offsetY), this.ctx.transform(u.matrix[0], u.matrix[1], u.matrix[2], u.matrix[3], u.matrix[4], u.matrix[5]), this.ctx.translate(-u.offsetX, -u.offsetY)), Qo(u) && (this.path(u.path), this.ctx.clip()), this._activeEffects.push(u);
  }, e.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, e.prototype.renderStack = function(u) {
    return we(this, void 0, void 0, function() {
      return ne(this, function(r) {
        switch (r.label) {
          case 0:
            return u.element.container.styles.isVisible() ? [4, this.renderStackContent(u)] : [3, 2];
          case 1:
            r.sent(), r.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, e.prototype.renderNode = function(u) {
    return we(this, void 0, void 0, function() {
      return ne(this, function(r) {
        switch (r.label) {
          case 0:
            return LA(u.container.flags, 16), u.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(u)] : [3, 3];
          case 1:
            return r.sent(), [4, this.renderNodeContent(u)];
          case 2:
            r.sent(), r.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, e.prototype.renderTextWithLetterSpacing = function(u, r, c) {
    var a = this;
    r === 0 ? this.ctx.fillText(u.text, u.bounds.left, u.bounds.top + c) : Yc(u.text).reduce(function(B, f) {
      return a.ctx.fillText(f, B, u.bounds.top + c), B + a.ctx.measureText(f).width;
    }, u.bounds.left);
  }, e.prototype.createFontStyle = function(u) {
    var r = u.fontVariant.filter(function(B) {
      return B === "normal" || B === "small-caps";
    }).join(""), c = dh(u.fontFamily).join(", "), a = Pt(u.fontSize) ? "" + u.fontSize.number + u.fontSize.unit : u.fontSize.number + "px";
    return [[u.fontStyle, r, u.fontWeight, a, c].join(" "), c, a];
  }, e.prototype.renderTextNode = function(u, r) {
    return we(this, void 0, void 0, function() {
      var c, a, B, f, F, w, g = this;
      return ne(this, function(U) {
        return a = this.createFontStyle(r), B = a[0], c = a[1], a = a[2], this.ctx.font = B, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", B = this.fontMetrics.getMetrics(c, a), f = B.baseline, F = B.middle, w = r.paintOrder, u.textBounds.forEach(function(m) {
          w.forEach(function(b) {
            switch (b) {
              case 0:
                g.ctx.fillStyle = SA(r.color), g.renderTextWithLetterSpacing(m, r.letterSpacing, f);
                var y = r.textShadow;
                y.length && m.text.trim().length && (y.slice(0).reverse().forEach(function(I) {
                  g.ctx.shadowColor = SA(I.color), g.ctx.shadowOffsetX = I.offsetX.number * g.options.scale, g.ctx.shadowOffsetY = I.offsetY.number * g.options.scale, g.ctx.shadowBlur = I.blur.number, g.renderTextWithLetterSpacing(m, r.letterSpacing, f);
                }), g.ctx.shadowColor = "", g.ctx.shadowOffsetX = 0, g.ctx.shadowOffsetY = 0, g.ctx.shadowBlur = 0), r.textDecorationLine.length && (g.ctx.fillStyle = SA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(I) {
                  switch (I) {
                    case 1:
                      g.ctx.fillRect(m.bounds.left, Math.round(m.bounds.top + f), m.bounds.width, 1);
                      break;
                    case 2:
                      g.ctx.fillRect(m.bounds.left, Math.round(m.bounds.top), m.bounds.width, 1);
                      break;
                    case 3:
                      g.ctx.fillRect(m.bounds.left, Math.ceil(m.bounds.top + F), m.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                r.webkitTextStrokeWidth && m.text.trim().length && (g.ctx.strokeStyle = SA(r.webkitTextStrokeColor), g.ctx.lineWidth = r.webkitTextStrokeWidth, g.ctx.lineJoin = window.chrome ? "miter" : "round", g.ctx.strokeText(m.text, m.bounds.left, m.bounds.top + f)), g.ctx.strokeStyle = "", g.ctx.lineWidth = 0, g.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, e.prototype.renderReplacedElement = function(u, r, c) {
    var a;
    c && 0 < u.intrinsicWidth && 0 < u.intrinsicHeight && (a = Kr(u), r = vr(r), this.path(r), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(c, 0, 0, u.intrinsicWidth, u.intrinsicHeight, a.left, a.top, a.width, a.height), this.ctx.restore());
  }, e.prototype.renderNodeContent = function(u) {
    return we(this, void 0, void 0, function() {
      var r, c, a, B, f, F, w, g, U, m, b, y, I;
      return ne(this, function(K) {
        switch (K.label) {
          case 0:
            this.applyEffects(u.getEffects(4)), r = u.container, c = u.curves, a = r.styles, B = 0, f = r.textNodes, K.label = 1;
          case 1:
            return B < f.length ? (F = f[B], [4, this.renderTextNode(F, a)]) : [3, 4];
          case 2:
            K.sent(), K.label = 3;
          case 3:
            return B++, [3, 1];
          case 4:
            if (!(r instanceof no))
              return [3, 8];
            K.label = 5;
          case 5:
            return K.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
          case 6:
            return m = K.sent(), this.renderReplacedElement(r, c, m), [3, 8];
          case 7:
            return K.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
          case 8:
            if (r instanceof co && this.renderReplacedElement(r, c, r.canvas), !(r instanceof ao))
              return [3, 12];
            K.label = 9;
          case 9:
            return K.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
          case 10:
            return m = K.sent(), this.renderReplacedElement(r, c, m), [3, 12];
          case 11:
            return K.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
          case 12:
            return r instanceof oo && r.tree ? [4, new e(this.context, { scale: this.options.scale, backgroundColor: r.backgroundColor, x: 0, y: 0, width: r.width, height: r.height }).render(r.tree)] : [3, 14];
          case 13:
            F = K.sent(), r.width && r.height && this.ctx.drawImage(F, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), K.label = 14;
          case 14:
            if (r instanceof Vc && (w = Math.min(r.bounds.width, r.bounds.height), r.type === Hr ? r.checked && (this.ctx.save(), this.path([new T(r.bounds.left + 0.39363 * w, r.bounds.top + 0.79 * w), new T(r.bounds.left + 0.16 * w, r.bounds.top + 0.5549 * w), new T(r.bounds.left + 0.27347 * w, r.bounds.top + 0.44071 * w), new T(r.bounds.left + 0.39694 * w, r.bounds.top + 0.5649 * w), new T(r.bounds.left + 0.72983 * w, r.bounds.top + 0.23 * w), new T(r.bounds.left + 0.84 * w, r.bounds.top + 0.34085 * w), new T(r.bounds.left + 0.39363 * w, r.bounds.top + 0.79 * w)]), this.ctx.fillStyle = SA(gs), this.ctx.fill(), this.ctx.restore()) : r.type === yr && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + w / 2, r.bounds.top + w / 2, w / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = SA(gs), this.ctx.fill(), this.ctx.restore())), Ah(r) && r.value.length) {
              switch (w = this.createFontStyle(a), y = w[0], b = w[1], b = this.fontMetrics.getMetrics(y, b).baseline, this.ctx.font = y, this.ctx.fillStyle = SA(a.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = uh(r.styles.textAlign), I = Kr(r), g = 0, r.styles.textAlign) {
                case 1:
                  g += I.width / 2;
                  break;
                case 2:
                  g += I.width;
              }
              U = I.add(g, 0, 0, -I.height / 2 + 1), this.ctx.save(), this.path([new T(I.left, I.top), new T(I.left + I.width, I.top), new T(I.left + I.width, I.top + I.height), new T(I.left, I.top + I.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Xt(r.value, U), a.letterSpacing, b), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
            }
            if (!LA(r.styles.display, 2048))
              return [3, 20];
            if (r.styles.listStyleImage === null)
              return [3, 19];
            if ((U = r.styles.listStyleImage).type !== 0)
              return [3, 18];
            m = void 0, b = U.url, K.label = 15;
          case 15:
            return K.trys.push([15, 17, , 18]), [4, this.context.cache.match(b)];
          case 16:
            return m = K.sent(), this.ctx.drawImage(m, r.bounds.left - (m.width + 10), r.bounds.top), [3, 18];
          case 17:
            return K.sent(), this.context.logger.error("Error loading list-style-image " + b), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            u.listValue && r.styles.listStyleType !== -1 && (y = this.createFontStyle(a)[0], this.ctx.font = y, this.ctx.fillStyle = SA(a.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", I = new Lu(r.bounds.left, r.bounds.top + gA(r.styles.paddingTop, r.bounds.width), r.bounds.width, ZB(a.lineHeight, a.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Xt(u.listValue, I), a.letterSpacing, ZB(a.lineHeight, a.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), K.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, e.prototype.renderStackContent = function(u) {
    return we(this, void 0, void 0, function() {
      var r, c, a, B, f, F, w, g, U, m, b, y, I, K, x;
      return ne(this, function(G) {
        switch (G.label) {
          case 0:
            return LA(u.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(u.element)];
          case 1:
            G.sent(), r = 0, c = u.negativeZIndex, G.label = 2;
          case 2:
            return r < c.length ? (x = c[r], [4, this.renderStack(x)]) : [3, 5];
          case 3:
            G.sent(), G.label = 4;
          case 4:
            return r++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(u.element)];
          case 6:
            G.sent(), a = 0, B = u.nonInlineLevel, G.label = 7;
          case 7:
            return a < B.length ? (x = B[a], [4, this.renderNode(x)]) : [3, 10];
          case 8:
            G.sent(), G.label = 9;
          case 9:
            return a++, [3, 7];
          case 10:
            f = 0, F = u.nonPositionedFloats, G.label = 11;
          case 11:
            return f < F.length ? (x = F[f], [4, this.renderStack(x)]) : [3, 14];
          case 12:
            G.sent(), G.label = 13;
          case 13:
            return f++, [3, 11];
          case 14:
            w = 0, g = u.nonPositionedInlineLevel, G.label = 15;
          case 15:
            return w < g.length ? (x = g[w], [4, this.renderStack(x)]) : [3, 18];
          case 16:
            G.sent(), G.label = 17;
          case 17:
            return w++, [3, 15];
          case 18:
            U = 0, m = u.inlineLevel, G.label = 19;
          case 19:
            return U < m.length ? (x = m[U], [4, this.renderNode(x)]) : [3, 22];
          case 20:
            G.sent(), G.label = 21;
          case 21:
            return U++, [3, 19];
          case 22:
            b = 0, y = u.zeroOrAutoZIndexOrTransformedOrOpacity, G.label = 23;
          case 23:
            return b < y.length ? (x = y[b], [4, this.renderStack(x)]) : [3, 26];
          case 24:
            G.sent(), G.label = 25;
          case 25:
            return b++, [3, 23];
          case 26:
            I = 0, K = u.positiveZIndex, G.label = 27;
          case 27:
            return I < K.length ? (x = K[I], [4, this.renderStack(x)]) : [3, 30];
          case 28:
            G.sent(), G.label = 29;
          case 29:
            return I++, [3, 27];
          case 30:
            return [2];
        }
      });
    });
  }, e.prototype.mask = function(u) {
    this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(u.slice(0).reverse()), this.ctx.closePath();
  }, e.prototype.path = function(u) {
    this.ctx.beginPath(), this.formatPath(u), this.ctx.closePath();
  }, e.prototype.formatPath = function(u) {
    var r = this;
    u.forEach(function(c, a) {
      var B = Qe(c) ? c.start : c;
      a === 0 ? r.ctx.moveTo(B.x, B.y) : r.ctx.lineTo(B.x, B.y), Qe(c) && r.ctx.bezierCurveTo(c.startControl.x, c.startControl.y, c.endControl.x, c.endControl.y, c.end.x, c.end.y);
    });
  }, e.prototype.renderRepeat = function(u, r, c, a) {
    this.path(u), this.ctx.fillStyle = r, this.ctx.translate(c, a), this.ctx.fill(), this.ctx.translate(-c, -a);
  }, e.prototype.resizeImage = function(u, r, c) {
    var a;
    return u.width === r && u.height === c ? u : ((a = ((a = this.canvas.ownerDocument) != null ? a : document).createElement("canvas")).width = Math.max(1, r), a.height = Math.max(1, c), a.getContext("2d").drawImage(u, 0, 0, u.width, u.height, 0, 0, r, c), a);
  }, e.prototype.renderBackgroundImage = function(u) {
    return we(this, void 0, void 0, function() {
      var r, c, a, B, f, F;
      return ne(this, function(w) {
        switch (w.label) {
          case 0:
            r = u.styles.backgroundImage.length - 1, c = function(g) {
              var U, m, b, y, I, K, x, G, $, Z, O, nA, R, oA, hA, JA, De, IA, vA, GA, ie;
              return ne(this, function(KA) {
                switch (KA.label) {
                  case 0:
                    if (g.type !== 0)
                      return [3, 5];
                    U = void 0, m = g.url, KA.label = 1;
                  case 1:
                    return KA.trys.push([1, 3, , 4]), [4, a.context.cache.match(m)];
                  case 2:
                    return U = KA.sent(), [3, 4];
                  case 3:
                    return KA.sent(), a.context.logger.error("Error loading background-image " + m), [3, 4];
                  case 4:
                    return U && (Z = bc(u, r, [U.width, U.height, U.width / U.height]), K = Z[0], nA = Z[1], R = Z[2], $ = Z[3], Z = Z[4], y = a.ctx.createPattern(a.resizeImage(U, $, Z), "repeat"), a.renderRepeat(K, y, nA, R)), [3, 6];
                  case 5:
                    tC(g) ? (O = bc(u, r, [null, null, null]), K = O[0], nA = O[1], R = O[2], $ = O[3], Z = O[4], O = zF(g.angle, $, Z), oA = O[0], I = O[1], G = O[2], x = O[3], O = O[4], (JA = document.createElement("canvas")).width = $, JA.height = Z, hA = JA.getContext("2d"), b = hA.createLinearGradient(I, x, G, O), YB(g.stops, oA).forEach(function(ZA) {
                      return b.addColorStop(ZA.stop, SA(ZA.color));
                    }), hA.fillStyle = b, hA.fillRect(0, 0, $, Z), 0 < $ && 0 < Z && (y = a.ctx.createPattern(JA, "repeat"), a.renderRepeat(K, y, nA, R))) : dC(g) && (I = bc(u, r, [null, null, null]), K = I[0], x = I[1], G = I[2], $ = I[3], Z = I[4], O = g.position.length === 0 ? [Xc] : g.position, nA = gA(O[0], $), R = gA(O[O.length - 1], Z), oA = $F(g, nA, R, $, Z), hA = oA[0], JA = oA[1], 0 < hA) && 0 < JA && (De = a.ctx.createRadialGradient(x + nA, G + R, 0, x + nA, G + R, hA), YB(g.stops, 2 * hA).forEach(function(ZA) {
                      return De.addColorStop(ZA.stop, SA(ZA.color));
                    }), a.path(K), a.ctx.fillStyle = De, hA !== JA ? (IA = u.bounds.left + 0.5 * u.bounds.width, vA = u.bounds.top + 0.5 * u.bounds.height, ie = 1 / (GA = JA / hA), a.ctx.save(), a.ctx.translate(IA, vA), a.ctx.transform(1, 0, 0, GA, 0, 0), a.ctx.translate(-IA, -vA), a.ctx.fillRect(x, ie * (G - vA) + vA, $, Z * ie), a.ctx.restore()) : a.ctx.fill()), KA.label = 6;
                  case 6:
                    return r--, [2];
                }
              });
            }, a = this, B = 0, f = u.styles.backgroundImage.slice(0).reverse(), w.label = 1;
          case 1:
            return B < f.length ? (F = f[B], [5, c(F)]) : [3, 4];
          case 2:
            w.sent(), w.label = 3;
          case 3:
            return B++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, e.prototype.renderSolidBorder = function(u, r, c) {
    return we(this, void 0, void 0, function() {
      return ne(this, function(a) {
        return this.path(Ds(c, r)), this.ctx.fillStyle = SA(u), this.ctx.fill(), [2];
      });
    });
  }, e.prototype.renderDoubleBorder = function(u, r, c, a) {
    return we(this, void 0, void 0, function() {
      var B;
      return ne(this, function(f) {
        switch (f.label) {
          case 0:
            return r < 3 ? [4, this.renderSolidBorder(u, c, a)] : [3, 2];
          case 1:
            return f.sent(), [2];
          case 2:
            return B = JQ(a, c), this.path(B), this.ctx.fillStyle = SA(u), this.ctx.fill(), B = PQ(a, c), this.path(B), this.ctx.fill(), [2];
        }
      });
    });
  }, e.prototype.renderNodeBackgroundAndBorders = function(u) {
    return we(this, void 0, void 0, function() {
      var r, c, a, B, f, F, w, g, U = this;
      return ne(this, function(m) {
        switch (m.label) {
          case 0:
            return this.applyEffects(u.getEffects(2)), r = u.container.styles, c = !at(r.backgroundColor) || r.backgroundImage.length, a = [{ style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth }, { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth }, { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth }, { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }], B = eh(rt(r.backgroundClip, 0), u.curves), c || r.boxShadow.length ? (this.ctx.save(), this.path(B), this.ctx.clip(), at(r.backgroundColor) || (this.ctx.fillStyle = SA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(u.container)]) : [3, 2];
          case 1:
            m.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(b) {
              U.ctx.save();
              var y = Ir(u.curves), I = b.inset ? 0 : $Q, K = RQ(y, -I + (b.inset ? 1 : -1) * b.spread.number, (b.inset ? 1 : -1) * b.spread.number, b.spread.number * (b.inset ? -2 : 2), b.spread.number * (b.inset ? -2 : 2));
              b.inset ? (U.path(y), U.ctx.clip(), U.mask(K)) : (U.mask(y), U.ctx.clip(), U.path(K)), U.ctx.shadowOffsetX = b.offsetX.number + I, U.ctx.shadowOffsetY = b.offsetY.number, U.ctx.shadowColor = SA(b.color), U.ctx.shadowBlur = b.blur.number, U.ctx.fillStyle = b.inset ? SA(b.color) : "rgba(0,0,0,1)", U.ctx.fill(), U.ctx.restore();
            }), m.label = 2;
          case 2:
            F = f = 0, w = a, m.label = 3;
          case 3:
            return F < w.length ? (g = w[F]).style !== 0 && !at(g.color) && 0 < g.width ? g.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(g.color, g.width, f, u.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return m.sent(), [3, 11];
          case 5:
            return g.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(g.color, g.width, f, u.curves, 3)];
          case 6:
            return m.sent(), [3, 11];
          case 7:
            return g.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(g.color, g.width, f, u.curves)];
          case 8:
            return m.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(g.color, f, u.curves)];
          case 10:
            m.sent(), m.label = 11;
          case 11:
            f++, m.label = 12;
          case 12:
            return F++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, e.prototype.renderDashedDottedBorder = function(u, r, c, a, B) {
    return we(this, void 0, void 0, function() {
      var f, F, w, g, U, m, b, y, I, K, x;
      return ne(this, function(G) {
        return this.ctx.save(), U = XQ(a, c), f = Ds(a, c), B === 2 && (this.path(f), this.ctx.clip()), I = (Qe(f[0]) ? (F = f[0].start.x, f[0].start) : (F = f[0].x, f[0])).y, g = (Qe(f[1]) ? (w = f[1].end.x, f[1].end) : (w = f[1].x, f[1])).y, I = Math.abs(c === 0 || c === 2 ? F - w : I - g), this.ctx.beginPath(), B === 3 ? this.formatPath(U) : this.formatPath(f.slice(0, 2)), g = r < 3 ? 3 * r : 2 * r, U = r < 3 ? 2 * r : r, B === 3 && (U = g = r), m = !0, I <= 2 * g ? m = !1 : I <= 2 * g + U ? (g *= b = I / (2 * g + U), U *= b) : (b = Math.floor((I + U) / (g + U)), y = (I - b * g) / (b - 1), U = (I = (I - (b + 1) * g) / b) <= 0 || Math.abs(U - y) < Math.abs(U - I) ? y : I), m && (B === 3 ? this.ctx.setLineDash([0, g + U]) : this.ctx.setLineDash([g, U])), B === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = 2 * r + 1.1, this.ctx.strokeStyle = SA(u), this.ctx.stroke(), this.ctx.setLineDash([]), B === 2 && (Qe(f[0]) && (K = f[3], x = f[0], this.ctx.beginPath(), this.formatPath([new T(K.end.x, K.end.y), new T(x.start.x, x.start.y)]), this.ctx.stroke()), Qe(f[1])) && (K = f[1], x = f[2], this.ctx.beginPath(), this.formatPath([new T(K.end.x, K.end.y), new T(x.start.x, x.start.y)]), this.ctx.stroke()), this.ctx.restore(), [2];
      });
    });
  }, e.prototype.render = function(u) {
    return we(this, void 0, void 0, function() {
      var r;
      return ne(this, function(c) {
        switch (c.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = SA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = NQ(u), [4, this.renderStack(r)];
          case 1:
            return c.sent(), this.applyEffects([]), [2, this.canvas];
        }
      });
    });
  };
}(Eo), function(d) {
  return d instanceof so || d instanceof Bo || d instanceof Vc && d.type !== yr && d.type !== Hr;
}), eh = function(d, e) {
  switch (d) {
    case 0:
      return Ir(e);
    case 2:
      return OQ(e);
    default:
      return vr(e);
  }
}, uh = function(d) {
  switch (d) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, th = ["-apple-system", "system-ui"], dh = function(d) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? d.filter(function(e) {
    return th.indexOf(e) === -1;
  }) : d;
}, rh = (function(d) {
  function e(u, r) {
    return u = d.call(this, u, r) || this, u.canvas = r.canvas || document.createElement("canvas"), u.ctx = u.canvas.getContext("2d"), u.options = r, u.canvas.width = Math.floor(r.width * r.scale), u.canvas.height = Math.floor(r.height * r.scale), u.canvas.style.width = r.width + "px", u.canvas.style.height = r.height + "px", u.ctx.scale(u.options.scale, u.options.scale), u.ctx.translate(-r.x, -r.y), u.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), u;
  }
  Ie(e, d), e.prototype.render = function(u) {
    return we(this, void 0, void 0, function() {
      var r;
      return ne(this, function(c) {
        switch (c.label) {
          case 0:
            return r = Tc(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, u), [4, rh(r)];
          case 1:
            return r = c.sent(), this.options.backgroundColor && (this.ctx.fillStyle = SA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(r, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  };
}(Eo), function(d) {
  return new Promise(function(e, u) {
    var r = new Image();
    r.onload = function() {
      e(r);
    }, r.onerror = u, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(d));
  });
});
function nh() {
  var d, e = new Array();
  return window.screen.deviceXDPI ? (e[0] = window.screen.deviceXDPI, e[1] = window.screen.deviceYDPI) : ((d = document.createElement("DIV")).style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden", document.body.appendChild(d), e[0] = d.offsetWidth, e[1] = d.offsetHeight, d.parentNode.removeChild(d)), e;
}
function ch(d) {
  return d / 25.4 * nh()[0];
}
function Es() {
  var d;
  return ((d = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : d.devicePixelRatio) || 1;
}
typeof window < "u" && SQ.setContext(window), Es(), Es();
class Cr {
  static callServer(e, u, r, c) {
    return u = { type: u }, r && (u.key = r), !c && c !== 0 || (u.value = JSON.stringify(c)), this.http("POST", e ? this.pathPersistence : this.path, u, { domainName: this.domainName });
  }
  static setItem(e, u) {
    return this.callServer(!1, 1, e, u);
  }
  static async getItem(e) {
    return JSON.parse(await this.callServer(!1, 2, e));
  }
  static removeItem(e) {
    return this.callServer(!1, 3, e);
  }
  static clear() {
    return this.callServer(!1, 4);
  }
  static setItemPersistence(e, u) {
    return this.callServer(!0, 1, e, u);
  }
  static async getItemPersistence(e) {
    return JSON.parse(await this.callServer(!0, 2, e));
  }
  static removeItemPersistence(e) {
    return this.callServer(!0, 3, e);
  }
  static clearPersistence() {
    return this.callServer(!0, 4);
  }
}
nt(Cr, "domainName", ""), nt(Cr, "path", "/api/storage/manage"), nt(Cr, "pathPersistence", "/api/storage/longManage"), nt(Cr, "http", () => Promise.reject("unset redis storage http function"));
const ah = "MathJax-script", ih = cg + "/tex-mml-chtml.js";
let bs = !1, Nc = !1;
function Bh(d) {
  if (globalThis.window) {
    let e = Er;
    d && (e = { ...Er, ...d }), globalThis.window.MathJax = { ...e, startup: { pageReady: () => {
      Nc = !0;
    } } };
  }
}
function sh() {
  return new Promise((d, e) => {
    if (Nc)
      return d("");
    {
      var u;
      bs || ((u = document.createElement("script")).src = ih, u.id = ah, u.onerror = (c) => {
        e(c);
      }, document.body.appendChild(u), bs = !0);
      let r = setInterval(() => {
        if (Nc)
          return clearInterval(r), d("");
      }, 1e3);
    }
  });
}
function oh(d) {
  Bh(d);
}
function fh(d) {
  let e = Object.assign({ lineBreak: !0, lineHeight: "20px", textColor: "#333", divideChinese: !1, wrapMathrm: !0 }, d);
  return e != null && e.lineBreak && lh(`.ke-comp-math-jax mjx-math mjx-texatom mjx-mspace{display:${e.lineBreak ? "block" : "inline-block"};}
      .ke-comp-math-jax mjx-math>*,.ke-comp-math-jax mjx-math mjx-merror mjx-utext{min-height:${e.lineHeight};line-height:${e.lineHeight};}
      .ke-comp-math-jax mjx-math mjx-texatom{white-space: ${e.lineBreak ? "normal" : "nowrap"};}
      .ke-comp-math-jax .mjx-kz-underline{margin-bottom: calc(${e.lineHeight} / 2);}
      .ke-comp-math-jax .mjx-kz-underline > *{line-height: calc(${e.lineHeight} / 3) !important; min-height: calc(${e.lineHeight} / 3) !important;}
      .ke-comp-math-jax .fourlineruled mjx-mtd mjx-tstrut{height: ${ch(3) + "px"}}`), Array.from(document.querySelectorAll("latex-div")).forEach((u) => {
    var r;
    u instanceof HTMLElement && (u.style.display = "block", r = zl((u == null ? void 0 : u.innerHTML) || "", { lineBreak: u.getAttribute("lineBreak") === "true" || e.lineBreak, divideChinese: u.getAttribute("divideChinese") === "true" || e.divideChinese, wrapMathrm: u.getAttribute("wrapMathrm") === "true" || e.wrapMathrm }), u.classList.add("ke-comp-math-jax"), u.innerHTML = e != null && e.divideChinese ? r : `$$${r}$$`, r = u.getAttribute("textColor") || e.textColor, u.style.color = r);
  }), sh().then(() => MathJax.typesetPromise().then(() => {
    Array.from(document.querySelectorAll("latex-render")).forEach((u) => {
      var r, c, a = u.getAttribute("lineBreak") === "true" || e.lineBreak;
      a !== e.lineBreak && (r = u.querySelector("mjx-math mjx-texatom"), c = u.querySelector("mjx-math mjx-texatom mjx-mspace"), r.style.whiteSpace = a ? "normal" : "nowrap", c.style.display = a ? "block" : "inline-block");
      const B = u.getAttribute("lineHeight") || e.lineHeight;
      B !== e.lineHeight && (r = Array.from([u.querySelector("mjx-math > *")]), c = u.querySelector("mjx-math mjx-merror mjx-utext"), a = u.querySelector(".mjx-kz-underline"), u = Array.from(u.querySelectorAll(".mjx-kz-underline > *")), r == null || r.forEach((f) => {
        f.style.lineHeight = B, f.style.minHeight = B;
      }), c && (c.style.lineHeight = B), c && (c.style.minHeight = B), a && (a.style.marginBottom = `calc(${B} / 2)`), u == null || u.forEach((f) => {
        f.style.lineHeight = `calc(${B} / 3) !important`, f.style.minHeight = `calc(${B} / 3) !important;`;
      }));
    });
  }));
}
function lh(d) {
  var e = document.createElement("style");
  e.type = "text/css", e.rel = "stylesheet";
  try {
    e.appendChild(document.createTextNode(d));
  } catch {
    e.styleSheet.cssText = d;
  }
  document.getElementsByTagName("head")[0].appendChild(e);
}
oh(), globalThis.latexRender = fh;
export {
  fh as latexRender,
  oh as setMathJaxConfig
};
