import "vue";
var tl = Object.defineProperty, dl = (t, u, e) => u in t ? tl(t, u, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[u] = e, nt = (t, u, e) => (dl(t, typeof u != "symbol" ? u + "" : u, e), e), It = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, pr = {}, rl = { get exports() {
  return pr;
}, set exports(t) {
  pr = t;
} };
(function(t, u) {
  (function() {
    var e, r = "Expected a function", c = "__lodash_hash_undefined__", a = "__lodash_placeholder__", i = 16, f = 32, g = 64, Q = 128, F = 256, U = 1 / 0, m = 9007199254740991, b = NaN, y = 4294967295, I = [["ary", Q], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", i], ["flip", 512], ["partial", f], ["partialRight", g], ["rearg", F]], K = "[object Arguments]", x = "[object Array]", G = "[object Boolean]", $ = "[object Date]", Z = "[object Error]", O = "[object Function]", nA = "[object GeneratorFunction]", R = "[object Map]", oA = "[object Number]", hA = "[object Object]", JA = "[object Promise]", Du = "[object RegExp]", IA = "[object Set]", vA = "[object String]", GA = "[object Symbol]", Bu = "[object WeakMap]", KA = "[object ArrayBuffer]", ZA = "[object DataView]", it = "[object Float32Array]", fe = "[object Float64Array]", Mr = "[object Int8Array]", Or = "[object Int16Array]", Tr = "[object Int32Array]", kr = "[object Uint8Array]", Gr = "[object Uint8ClampedArray]", Vr = "[object Uint16Array]", Rr = "[object Uint32Array]", bo = /\b__p \+= '';/g, mo = /\b(__p \+=) '' \+/g, Ho = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Zc = /&(?:amp|lt|gt|quot|#39);/g, jc = /[&<>"']/g, yo = RegExp(Zc.source), Io = RegExp(jc.source), vo = /<%-([\s\S]+?)%>/g, Ko = /<%([\s\S]+?)%>/g, zc = /<%=([\s\S]+?)%>/g, xo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Lo = /^\w*$/, _o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nr = /[\\^$.*+?()[\]{}|]/g, So = RegExp(Nr.source), Jr = /^\s+/, Mo = /\s/, Oo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, To = /\{\n\/\* \[wrapped with (.+)\] \*/, ko = /,? & /, Go = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Vo = /[()=,{}\[\]\/\s]/, Ro = /\\(\\)?/g, No = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, qc = /\w*$/, Jo = /^[-+]0x[0-9a-f]+$/i, Po = /^0b[01]+$/i, Xo = /^\[object .+?Constructor\]$/, Yo = /^0o[0-7]+$/i, Wo = /^(?:0|[1-9]\d*)$/, Zo = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, $t = /($^)/, jo = /['\n\r\u2028\u2029\\]/g, Ad = "\\ud800-\\udfff", $c = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", _e = "\\u2700-\\u27bf", ju = "a-z\\xdf-\\xf6\\xf8-\\xff", ku = "A-Z\\xc0-\\xd6\\xd8-\\xde", Aa = "\\ufe0e\\ufe0f", le = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", zo = "['’]", jA = "[" + Ad + "]", ua = "[" + le + "]", ud = "[" + $c + "]", Pr = "[" + _e + "]", ea = "[" + ju + "]", le = "[^" + Ad + le + "\\d+" + _e + ju + ku + "]", _e = "\\ud83c[\\udffb-\\udfff]", ju = "[^" + Ad + "]", ot = "(?:\\ud83c[\\udde6-\\uddff]){2}", ge = "[\\ud800-\\udbff][\\udc00-\\udfff]", ku = "[" + ku + "]", ta = "\\u200d", da = "(?:" + ea + "|" + le + ")", le = "(?:" + ku + "|" + le + ")", ra = "(?:['’](?:d|ll|m|re|s|t|ve))?", na = "(?:['’](?:D|LL|M|RE|S|T|VE))?", ed = "(?:" + ud + "|" + _e + ")?", st = "[" + Aa + "]?", st = st + ed + ("(?:" + ta + "(?:" + [ju, ot, ge].join("|") + ")" + st + ed + ")*"), ed = "(?:" + [Pr, ot, ge].join("|") + ")" + st, Pr = "(?:" + [ju + ud + "?", ud, ot, ge, jA].join("|") + ")", qo = RegExp(zo, "g"), $o = RegExp(ud, "g"), Xr = RegExp(_e + "(?=" + _e + ")|" + Pr + st, "g"), Af = RegExp([ku + "?" + ea + "+" + ra + "(?=" + [ua, ku, "$"].join("|") + ")", le + "+" + na + "(?=" + [ua, ku + da, "$"].join("|") + ")", ku + "?" + da + "+" + ra, ku + "+" + na, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", ed].join("|"), "g"), uf = RegExp("[" + ta + Ad + $c + Aa + "]"), ef = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, tf = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], df = -1, FA = {}, lA = (FA[it] = FA[fe] = FA[Mr] = FA[Or] = FA[Tr] = FA[kr] = FA[Gr] = FA[Vr] = FA[Rr] = !0, FA[K] = FA[x] = FA[KA] = FA[G] = FA[ZA] = FA[$] = FA[Z] = FA[O] = FA[R] = FA[oA] = FA[hA] = FA[Du] = FA[IA] = FA[vA] = FA[Bu] = !1, {}), rf = (lA[K] = lA[x] = lA[KA] = lA[ZA] = lA[G] = lA[$] = lA[it] = lA[fe] = lA[Mr] = lA[Or] = lA[Tr] = lA[R] = lA[oA] = lA[hA] = lA[Du] = lA[IA] = lA[vA] = lA[GA] = lA[kr] = lA[Gr] = lA[Vr] = lA[Rr] = !0, lA[Z] = lA[O] = lA[Bu] = !1, { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }), nf = parseFloat, cf = parseInt, ju = typeof It == "object" && It && It.Object === Object && It, ot = typeof self == "object" && self && self.Object === Object && self, MA = ju || ot || Function("return this")(), ge = u && !u.nodeType && u, Fe = ge && t && !t.nodeType && t, ca = Fe && Fe.exports === ge, Yr = ca && ju.process, jA = function() {
      try {
        return Fe && Fe.require && Fe.require("util").types || Yr && Yr.binding && Yr.binding("util");
      } catch {
      }
    }(), aa = jA && jA.isArrayBuffer, Ba = jA && jA.isDate, ia = jA && jA.isMap, sa = jA && jA.isRegExp, oa = jA && jA.isSet, fa = jA && jA.isTypedArray;
    function eu(D, S, H) {
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
      for (var z = -1, eA = D == null ? 0 : D.length; ++z < eA; ) {
        var uA = D[z];
        S(W, uA, H(uA), D);
      }
      return W;
    }
    function iu(D, S) {
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
    function zu(D, S) {
      for (var H = -1, W = D == null ? 0 : D.length, z = 0, eA = []; ++H < W; ) {
        var uA = D[H];
        S(uA, H, D) && (eA[z++] = uA);
      }
      return eA;
    }
    function td(D, S) {
      return !!(D != null && D.length) && -1 < Se(D, S, 0);
    }
    function Wr(D, S, H) {
      for (var W = -1, z = D == null ? 0 : D.length; ++W < z; )
        if (H(S, D[W]))
          return !0;
      return !1;
    }
    function QA(D, S) {
      for (var H = -1, W = D == null ? 0 : D.length, z = Array(W); ++H < W; )
        z[H] = S(D[H], H, D);
      return z;
    }
    function qu(D, S) {
      for (var H = -1, W = S.length, z = D.length; ++H < W; )
        D[z + H] = S[H];
      return D;
    }
    function Zr(D, S, H, W) {
      var z = -1, eA = D == null ? 0 : D.length;
      for (W && eA && (H = D[++z]); ++z < eA; )
        H = S(H, D[z], z, D);
      return H;
    }
    function sf(D, S, H, W) {
      var z = D == null ? 0 : D.length;
      for (W && z && (H = D[--z]); z--; )
        H = S(H, D[z], z, D);
      return H;
    }
    function jr(D, S) {
      for (var H = -1, W = D == null ? 0 : D.length; ++H < W; )
        if (S(D[H], H, D))
          return !0;
      return !1;
    }
    var of = zr("length");
    function ga(D, S, H) {
      var W;
      return H(D, function(z, eA, uA) {
        if (S(z, eA, uA))
          return W = eA, !1;
      }), W;
    }
    function dd(D, S, H, W) {
      for (var z = D.length, eA = H + (W ? 1 : -1); W ? eA-- : ++eA < z; )
        if (S(D[eA], eA, D))
          return eA;
      return -1;
    }
    function Se(D, S, H) {
      if (S != S)
        return dd(D, Fa, H);
      for (var W = D, z = S, eA = H - 1, uA = W.length; ++eA < uA; )
        if (W[eA] === z)
          return eA;
      return -1;
    }
    function ff(D, S, H, W) {
      for (var z = H - 1, eA = D.length; ++z < eA; )
        if (W(D[z], S))
          return z;
      return -1;
    }
    function Fa(D) {
      return D != D;
    }
    function Ca(D, S) {
      var H = D == null ? 0 : D.length;
      return H ? $r(D, S) / H : b;
    }
    function zr(D) {
      return function(S) {
        return S == null ? e : S[D];
      };
    }
    function qr(D) {
      return function(S) {
        return D == null ? e : D[S];
      };
    }
    function Qa(D, S, H, W, z) {
      return z(D, function(eA, uA, lt) {
        H = W ? (W = !1, eA) : S(H, eA, uA, lt);
      }), H;
    }
    function $r(D, S) {
      for (var H, W = -1, z = D.length; ++W < z; ) {
        var eA = S(D[W]);
        eA !== e && (H = H === e ? eA : H + eA);
      }
      return H;
    }
    function An(D, S) {
      for (var H = -1, W = Array(D); ++H < D; )
        W[H] = S(H);
      return W;
    }
    function wa(D) {
      return D && D.slice(0, pa(D) + 1).replace(Jr, "");
    }
    function tu(D) {
      return function(S) {
        return D(S);
      };
    }
    function un(D, S) {
      return QA(S, function(H) {
        return D[H];
      });
    }
    function ft(D, S) {
      return D.has(S);
    }
    function ha(D, S) {
      for (var H = -1, W = D.length; ++H < W && -1 < Se(S, D[H], 0); )
        ;
      return H;
    }
    function Ua(D, S) {
      for (var H = D.length; H-- && -1 < Se(S, D[H], 0); )
        ;
      return H;
    }
    var lf = qr({ À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }), gf = qr({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
    function Ff(D) {
      return "\\" + rf[D];
    }
    function Me(D) {
      return uf.test(D);
    }
    function en(D) {
      var S = -1, H = Array(D.size);
      return D.forEach(function(W, z) {
        H[++S] = [z, W];
      }), H;
    }
    function Da(D, S) {
      return function(H) {
        return D(S(H));
      };
    }
    function $u(D, S) {
      for (var H = -1, W = D.length, z = 0, eA = []; ++H < W; ) {
        var uA = D[H];
        uA !== S && uA !== a || (D[H] = a, eA[z++] = H);
      }
      return eA;
    }
    function rd(D) {
      var S = -1, H = Array(D.size);
      return D.forEach(function(W) {
        H[++S] = W;
      }), H;
    }
    function Oe(D) {
      return (Me(D) ? function(S) {
        for (var H = Xr.lastIndex = 0; Xr.test(S); )
          ++H;
        return H;
      } : of)(D);
    }
    function pu(D) {
      return Me(D) ? D.match(Xr) || [] : D.split("");
    }
    function pa(D) {
      for (var S = D.length; S-- && Mo.test(D.charAt(S)); )
        ;
      return S;
    }
    var Cf = qr({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }), Te = function D(cA) {
      var H = (cA = cA == null ? MA : Te.defaults(MA.Object(), cA, Te.pick(MA, tf))).Array, vu = cA.Date, W = cA.Error, z = cA.Function, eA = cA.Math, uA = cA.Object, lt = cA.RegExp, Qf = cA.String, su = cA.TypeError, nd = H.prototype, gu = z.prototype, ke = uA.prototype, Ge = cA["__core-js_shared__"], cd = gu.toString, sA = ke.hasOwnProperty, wf = 0, Ea = (gu = /[^.]+$/.exec(Ge && Ge.keys && Ge.keys.IE_PROTO || "")) ? "Symbol(src)_1." + gu : "", ad = ke.toString, hf = cd.call(uA), Uf = MA._, Df = lt("^" + cd.call(sA).replace(Nr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), gu = ca ? cA.Buffer : e, TA = cA.Symbol, Bd = cA.Uint8Array, ba = gu ? gu.allocUnsafe : e, id = Da(uA.getPrototypeOf, uA), ma = uA.create, Ha = ke.propertyIsEnumerable, sd = nd.splice, ya = TA ? TA.isConcatSpreadable : e, gt = TA ? TA.iterator : e, Ce = TA ? TA.toStringTag : e, od = function() {
        try {
          var A = De(uA, "defineProperty");
          return A({}, "", {}), A;
        } catch {
        }
      }(), Ve = cA.clearTimeout !== MA.clearTimeout && cA.clearTimeout, Gn = vu && vu.now !== MA.Date.now && vu.now, tn = cA.setTimeout !== MA.setTimeout && cA.setTimeout, fd = eA.ceil, ld = eA.floor, dn = uA.getOwnPropertySymbols, gu = gu ? gu.isBuffer : e, Ia = cA.isFinite, pf = nd.join, Ef = Da(uA.keys, uA), xA = eA.max, VA = eA.min, bf = vu.now, mf = cA.parseInt, va = eA.random, Hf = nd.reverse, vu = De(cA, "DataView"), Ft = De(cA, "Map"), Ct = De(cA, "Promise"), Re = De(cA, "Set"), cA = De(cA, "WeakMap"), Qt = De(uA, "create"), gd = cA && new cA(), Ne = {}, yf = pe(vu), If = pe(Ft), vf = pe(Ct), Kf = pe(Re), xf = pe(cA), TA = TA ? TA.prototype : e, wt = TA ? TA.valueOf : e, Ka = TA ? TA.toString : e;
      function o(A) {
        if (DA(A) && !q(A) && !(A instanceof rA)) {
          if (A instanceof Eu)
            return A;
          if (sA.call(A, "__wrapped__"))
            return xB(A);
        }
        return new Eu(A);
      }
      var Je = function(A) {
        return UA(A) ? ma ? ma(A) : (rn.prototype = A, A = new rn(), rn.prototype = e, A) : {};
      };
      function rn() {
      }
      function Fd() {
      }
      function Eu(A, d) {
        this.__wrapped__ = A, this.__actions__ = [], this.__chain__ = !!d, this.__index__ = 0, this.__values__ = e;
      }
      function rA(A) {
        this.__wrapped__ = A, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = y, this.__views__ = [];
      }
      function Qe(A) {
        var d = -1, n = A == null ? 0 : A.length;
        for (this.clear(); ++d < n; ) {
          var B = A[d];
          this.set(B[0], B[1]);
        }
      }
      function Gu(A) {
        var d = -1, n = A == null ? 0 : A.length;
        for (this.clear(); ++d < n; ) {
          var B = A[d];
          this.set(B[0], B[1]);
        }
      }
      function Vu(A) {
        var d = -1, n = A == null ? 0 : A.length;
        for (this.clear(); ++d < n; ) {
          var B = A[d];
          this.set(B[0], B[1]);
        }
      }
      function we(A) {
        var d = -1, n = A == null ? 0 : A.length;
        for (this.__data__ = new Vu(); ++d < n; )
          this.add(A[d]);
      }
      function bu(A) {
        A = this.__data__ = new Gu(A), this.size = A.size;
      }
      function xa(A, d) {
        var n, B = q(A), s = !B && Ee(A), l = !B && !s && de(A), C = !B && !s && !l && We(A), w = B || s || l || C, h = w ? An(A.length, Qf) : [], E = h.length;
        for (n in A)
          !d && !sA.call(A, n) || w && (n == "length" || l && (n == "offset" || n == "parent") || C && (n == "buffer" || n == "byteLength" || n == "byteOffset") || Pu(n, E)) || h.push(n);
        return h;
      }
      function La(A) {
        var d = A.length;
        return d ? A[Cn(0, d - 1)] : e;
      }
      function Lf(A, d) {
        return vd(zA(A), he(d, 0, A.length));
      }
      function _f(A) {
        return vd(zA(A));
      }
      function nn(A, d, n) {
        (n === e || mu(A[d], n)) && (n !== e || d in A) || Ru(A, d, n);
      }
      function ht(A, d, n) {
        var B = A[d];
        sA.call(A, d) && mu(B, n) && (n !== e || d in A) || Ru(A, d, n);
      }
      function Cd(A, d) {
        for (var n = A.length; n--; )
          if (mu(A[n][0], d))
            return n;
        return -1;
      }
      function Sf(A, d, n, B) {
        return Ae(A, function(s, l, C) {
          d(B, s, n(s), C);
        }), B;
      }
      function _a(A, d) {
        return A && xu(d, _A(d), A);
      }
      function Ru(A, d, n) {
        d == "__proto__" && od ? od(A, d, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : A[d] = n;
      }
      function cn(A, d) {
        for (var n = -1, B = d.length, s = H(B), l = A == null; ++n < B; )
          s[n] = l ? e : Pn(A, d[n]);
        return s;
      }
      function he(A, d, n) {
        return A = A == A && (n !== e && (A = A <= n ? A : n), d !== e) ? d <= A ? A : d : A;
      }
      function ou(A, d, n, B, s, l) {
        var C, w = 1 & d, h = 2 & d, E = 4 & d;
        if ((C = n ? s ? n(A, B, s, l) : n(A) : C) === e) {
          if (!UA(A))
            return A;
          var p, v, _, B = q(A);
          if (B) {
            if (Y = (P = A).length, _ = new P.constructor(Y), Y && typeof P[0] == "string" && sA.call(P, "index") && (_.index = P.index, _.input = P.input), C = _, !w)
              return zA(A, C);
          } else {
            var Y = RA(A), P = Y == O || Y == nA;
            if (de(A))
              return dB(A, w);
            if (Y == hA || Y == K || P && !s) {
              if (C = h || P ? {} : pB(A), !w)
                return h ? (v = _ = A, v = (p = C) && xu(v, $A(v), p), xu(_, UB(_), v)) : (v = _a(C, p = A), xu(p, Kn(p), v));
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
                  case it:
                  case fe:
                  case Mr:
                  case Or:
                  case Tr:
                  case kr:
                  case Gr:
                  case Vr:
                  case Rr:
                    return rB(L, X);
                  case R:
                    return new aA();
                  case oA:
                  case vA:
                    return new aA(L);
                  case Du:
                    return function(dA) {
                      var fA = new dA.constructor(dA.source, qc.exec(dA));
                      return fA.lastIndex = dA.lastIndex, fA;
                    }(L);
                  case IA:
                    return new aA();
                  case GA:
                    return function(dA) {
                      return wt ? uA(wt.call(dA)) : {};
                    }(L);
                }
              }(A, Y, w);
            }
          }
          if (s = (l = l || new bu()).get(A), s)
            return s;
          l.set(A, C), jB(A) ? A.forEach(function(L) {
            C.add(ou(L, d, n, L, A, l));
          }) : WB(A) && A.forEach(function(L, J) {
            C.set(J, ou(L, d, n, J, A, l));
          });
          var M = B ? e : (E ? h ? yn : Hn : h ? $A : _A)(A);
          iu(M || A, function(L, J) {
            M && (L = A[J = L]), ht(C, J, ou(L, d, n, J, A, l));
          });
        }
        return C;
      }
      function Sa(A, d, n) {
        var B = n.length;
        if (A == null)
          return !B;
        for (A = uA(A); B--; ) {
          var s = n[B], l = d[s], C = A[s];
          if (C === e && !(s in A) || !l(C))
            return !1;
        }
        return !0;
      }
      function Ma(A, d, n) {
        if (typeof A != "function")
          throw new su(r);
        return Ht(function() {
          A.apply(e, n);
        }, d);
      }
      function Ut(A, d, n, B) {
        var s = -1, l = td, C = !0, w = A.length, h = [], E = d.length;
        if (w) {
          n && (d = QA(d, tu(n))), B ? (l = Wr, C = !1) : 200 <= d.length && (l = ft, C = !1, d = new we(d));
          A:
            for (; ++s < w; ) {
              var v = A[s], p = n == null ? v : n(v), v = B || v !== 0 ? v : 0;
              if (C && p == p) {
                for (var _ = E; _--; )
                  if (d[_] === p)
                    continue A;
                h.push(v);
              } else
                l(d, p, B) || h.push(v);
            }
        }
        return h;
      }
      o.templateSettings = { escape: vo, evaluate: Ko, interpolate: zc, variable: "", imports: { _: o } }, (o.prototype = Fd.prototype).constructor = o, (Eu.prototype = Je(Fd.prototype)).constructor = Eu, (rA.prototype = Je(Fd.prototype)).constructor = rA, Qe.prototype.clear = function() {
        this.__data__ = Qt ? Qt(null) : {}, this.size = 0;
      }, Qe.prototype.delete = function(A) {
        return A = this.has(A) && delete this.__data__[A], this.size -= A ? 1 : 0, A;
      }, Qe.prototype.get = function(A) {
        var d, n = this.__data__;
        return Qt ? (d = n[A]) === c ? e : d : sA.call(n, A) ? n[A] : e;
      }, Qe.prototype.has = function(A) {
        var d = this.__data__;
        return Qt ? d[A] !== e : sA.call(d, A);
      }, Qe.prototype.set = function(A, d) {
        var n = this.__data__;
        return this.size += this.has(A) ? 0 : 1, n[A] = Qt && d === e ? c : d, this;
      }, Gu.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, Gu.prototype.delete = function(A) {
        var d = this.__data__;
        return !((A = Cd(d, A)) < 0 || (A == d.length - 1 ? d.pop() : sd.call(d, A, 1), --this.size, 0));
      }, Gu.prototype.get = function(A) {
        var d = this.__data__;
        return (A = Cd(d, A)) < 0 ? e : d[A][1];
      }, Gu.prototype.has = function(A) {
        return -1 < Cd(this.__data__, A);
      }, Gu.prototype.set = function(A, d) {
        var n = this.__data__, B = Cd(n, A);
        return B < 0 ? (++this.size, n.push([A, d])) : n[B][1] = d, this;
      }, Vu.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new Qe(), map: new (Ft || Gu)(), string: new Qe() };
      }, Vu.prototype.delete = function(A) {
        return A = Id(this, A).delete(A), this.size -= A ? 1 : 0, A;
      }, Vu.prototype.get = function(A) {
        return Id(this, A).get(A);
      }, Vu.prototype.has = function(A) {
        return Id(this, A).has(A);
      }, Vu.prototype.set = function(A, d) {
        var n = Id(this, A), B = n.size;
        return n.set(A, d), this.size += n.size == B ? 0 : 1, this;
      }, we.prototype.add = we.prototype.push = function(A) {
        return this.__data__.set(A, c), this;
      }, we.prototype.has = function(A) {
        return this.__data__.has(A);
      }, bu.prototype.clear = function() {
        this.__data__ = new Gu(), this.size = 0;
      }, bu.prototype.delete = function(n) {
        var d = this.__data__, n = d.delete(n);
        return this.size = d.size, n;
      }, bu.prototype.get = function(A) {
        return this.__data__.get(A);
      }, bu.prototype.has = function(A) {
        return this.__data__.has(A);
      }, bu.prototype.set = function(A, d) {
        var n = this.__data__;
        if (n instanceof Gu) {
          var B = n.__data__;
          if (!Ft || B.length < 199)
            return B.push([A, d]), this.size = ++n.size, this;
          n = this.__data__ = new Vu(B);
        }
        return n.set(A, d), this.size = n.size, this;
      };
      var Ae = BB(Ku), Oa = BB(Bn, !0);
      function Mf(A, d) {
        var n = !0;
        return Ae(A, function(B, s, l) {
          return n = !!d(B, s, l);
        }), n;
      }
      function Qd(A, d, n) {
        for (var B = -1, s = A.length; ++B < s; ) {
          var l, C, w = A[B], h = d(w);
          h != null && (l === e ? h == h && !ru(h) : n(h, l)) && (l = h, C = w);
        }
        return C;
      }
      function Ta(A, d) {
        var n = [];
        return Ae(A, function(B, s, l) {
          d(B, s, l) && n.push(B);
        }), n;
      }
      function OA(A, d, n, B, s) {
        var l = -1, C = A.length;
        for (n = n || Wf, s = s || []; ++l < C; ) {
          var w = A[l];
          0 < d && n(w) ? 1 < d ? OA(w, d - 1, n, B, s) : qu(s, w) : B || (s[s.length] = w);
        }
        return s;
      }
      var an = iB(), ka = iB(!0);
      function Ku(A, d) {
        return A && an(A, d, _A);
      }
      function Bn(A, d) {
        return A && ka(A, d, _A);
      }
      function wd(A, d) {
        return zu(d, function(n) {
          return Xu(A[n]);
        });
      }
      function Ue(A, d) {
        for (var n = 0, B = (d = ee(d, A)).length; A != null && n < B; )
          A = A[Lu(d[n++])];
        return n && n == B ? A : e;
      }
      function Ga(A, d, n) {
        return d = d(A), q(A) ? d : qu(d, n(A));
      }
      function PA(A) {
        {
          if (A == null)
            return A === e ? "[object Undefined]" : "[object Null]";
          if (Ce && Ce in uA(A)) {
            var d = A, n = sA.call(d, Ce), B = d[Ce];
            try {
              d[Ce] = e;
              var s = !0;
            } catch {
            }
            var l = ad.call(d);
            return s && (n ? d[Ce] = B : delete d[Ce]), l;
          }
          return ad.call(A);
        }
      }
      function sn(A, d) {
        return d < A;
      }
      function Of(A, d) {
        return A != null && sA.call(A, d);
      }
      function Tf(A, d) {
        return A != null && d in uA(A);
      }
      function on(A, d, n) {
        for (var B = n ? Wr : td, s = A[0].length, l = A.length, C = l, w = H(l), h = 1 / 0, E = []; C--; ) {
          var p = A[C];
          C && d && (p = QA(p, tu(d))), h = VA(p.length, h), w[C] = !n && (d || 120 <= s && 120 <= p.length) ? new we(C && p) : e;
        }
        var p = A[0], v = -1, _ = w[0];
        A:
          for (; ++v < s && E.length < h; ) {
            var P = p[v], Y = d ? d(P) : P, P = n || P !== 0 ? P : 0;
            if (!(_ ? ft(_, Y) : B(E, Y, n))) {
              for (C = l; --C; ) {
                var M = w[C];
                if (!(M ? ft(M, Y) : B(A[C], Y, n)))
                  continue A;
              }
              _ && _.push(Y), E.push(P);
            }
          }
        return E;
      }
      function Dt(A, d, n) {
        return d = (A = HB(A, d = ee(d, A))) == null ? A : A[Lu(lu(d))], d == null ? e : eu(d, A, n);
      }
      function Va(A) {
        return DA(A) && PA(A) == K;
      }
      function pt(A, d, n, B, s) {
        return A === d || (A == null || d == null || !DA(A) && !DA(d) ? A != A && d != d : function(l, C, w, h, E, p) {
          var v = q(l), M = q(C), _ = v ? x : RA(l), M = M ? x : RA(C), Y = (_ = _ == K ? hA : _) == hA, P = (M = M == K ? hA : M) == hA, M = _ == M;
          if (M && de(l)) {
            if (!de(C))
              return !1;
            Y = !(v = !0);
          }
          return M && !Y ? (p = p || new bu(), v || We(l) ? hB(l, C, w, h, E, p) : function(N, L, J, X, aA, dA, fA) {
            switch (J) {
              case ZA:
                if (N.byteLength != L.byteLength || N.byteOffset != L.byteOffset)
                  return !1;
                N = N.buffer, L = L.buffer;
              case KA:
                return !(N.byteLength != L.byteLength || !dA(new Bd(N), new Bd(L)));
              case G:
              case $:
              case oA:
                return mu(+N, +L);
              case Z:
                return N.name == L.name && N.message == L.message;
              case Du:
              case vA:
                return N == L + "";
              case R:
                var NA = en;
              case IA:
                var bA = 1 & X;
                return NA = NA || rd, N.size != L.size && !bA ? !1 : (bA = fA.get(N), bA ? bA == L : (X |= 2, fA.set(N, L), bA = hB(NA(N), NA(L), X, aA, dA, fA), fA.delete(N), bA));
              case GA:
                if (wt)
                  return wt.call(N) == wt.call(L);
            }
            return !1;
          }(l, C, _, w, h, E, p)) : !(1 & w) && (v = Y && sA.call(l, "__wrapped__"), _ = P && sA.call(C, "__wrapped__"), v || _) ? (Y = v ? l.value() : l, P = _ ? C.value() : C, p = p || new bu(), E(Y, P, w, h, p)) : M && (p = p || new bu(), function(N, L, J, X, aA, dA) {
            var fA = 1 & J, NA = Hn(N), bA = NA.length, Cu = Hn(L).length;
            if (bA != Cu && !fA)
              return !1;
            for (var Hu = bA; Hu--; ) {
              var _u = NA[Hu];
              if (!(fA ? _u in L : sA.call(L, _u)))
                return !1;
            }
            var Cu = dA.get(N), be = dA.get(L);
            if (Cu && be)
              return Cu == L && be == N;
            var kd = !0;
            dA.set(N, L), dA.set(L, N);
            for (var uc = fA; ++Hu < bA; ) {
              _u = NA[Hu];
              var ec, Gd = N[_u], Vd = L[_u];
              if (!((ec = X ? fA ? X(Vd, Gd, _u, L, N, dA) : X(Gd, Vd, _u, N, L, dA) : ec) === e ? Gd === Vd || aA(Gd, Vd, J, X, dA) : ec)) {
                kd = !1;
                break;
              }
              uc = uc || _u == "constructor";
            }
            return kd && !uc && (Cu = N.constructor, be = L.constructor, Cu != be) && "constructor" in N && "constructor" in L && !(typeof Cu == "function" && Cu instanceof Cu && typeof be == "function" && be instanceof be) && (kd = !1), dA.delete(N), dA.delete(L), kd;
          }(l, C, w, h, E, p));
        }(A, d, n, B, pt, s));
      }
      function fn(A, d, n, B) {
        var s = n.length, l = s, C = !B;
        if (A == null)
          return !l;
        for (A = uA(A); s--; ) {
          var w = n[s];
          if (C && w[2] ? w[1] !== A[w[0]] : !(w[0] in A))
            return !1;
        }
        for (; ++s < l; ) {
          var h = (w = n[s])[0], E = A[h], p = w[1];
          if (C && w[2]) {
            if (E === e && !(h in A))
              return !1;
          } else {
            var v, _ = new bu();
            if (!((v = B ? B(E, p, h, A, d, _) : v) === e ? pt(p, E, 3, B, _) : v))
              return !1;
          }
        }
        return !0;
      }
      function Ra(A) {
        var d;
        return !(!UA(A) || (d = A, Ea && Ea in d)) && (Xu(A) ? Df : Xo).test(pe(A));
      }
      function Na(A) {
        return typeof A == "function" ? A : A == null ? Au : typeof A == "object" ? q(A) ? Xa(A[0], A[1]) : Pa(A) : Bi(A);
      }
      function ln(A) {
        if (!mt(A))
          return Ef(A);
        var d, n = [];
        for (d in uA(A))
          sA.call(A, d) && d != "constructor" && n.push(d);
        return n;
      }
      function kf(A) {
        if (UA(A)) {
          var d, n = mt(A), B = [];
          for (d in A)
            (d != "constructor" || !n && sA.call(A, d)) && B.push(d);
          return B;
        }
        var s = A, l = [];
        if (s != null)
          for (var C in uA(s))
            l.push(C);
        return l;
      }
      function gn(A, d) {
        return A < d;
      }
      function Ja(A, d) {
        var n = -1, B = qA(A) ? H(A.length) : [];
        return Ae(A, function(s, l, C) {
          B[++n] = d(s, l, C);
        }), B;
      }
      function Pa(A) {
        var d = vn(A);
        return d.length == 1 && d[0][2] ? bB(d[0][0], d[0][1]) : function(n) {
          return n === A || fn(n, A, d);
        };
      }
      function Xa(A, d) {
        return xn(A) && EB(d) ? bB(Lu(A), d) : function(n) {
          var B = Pn(n, A);
          return B === e && B === d ? Xn(n, A) : pt(d, B, 3);
        };
      }
      function hd(A, d, n, B, s) {
        A !== d && an(d, function(l, C) {
          var w, h, E, p, v, _, Y, P, M, N, L, J, X;
          s = s || new bu(), UA(l) ? (h = d, p = n, v = hd, _ = B, Y = s, L = _n(w = A, E = C), J = _n(h, E), (X = Y.get(J)) || (X = _ ? _(L, J, E + "", w, h, Y) : e, (h = X === e) && (P = q(J), M = !P && de(J), N = !P && !M && We(J), X = J, P || M || N ? X = q(L) ? L : EA(L) ? zA(L) : M ? dB(J, !(h = !1)) : N ? rB(J, !(h = !1)) : [] : yt(J) || Ee(J) ? Ee(X = L) ? X = $B(L) : UA(L) && !Xu(L) || (X = pB(J)) : h = !1), h && (Y.set(J, X), v(X, J, p, _, Y), Y.delete(J))), nn(w, E, X)) : (P = B ? B(_n(A, C), l, C + "", A, d, s) : e, nn(A, C, P = P === e ? l : P));
        }, $A);
      }
      function Ya(A, d) {
        var n = A.length;
        if (n)
          return Pu(d += d < 0 ? n : 0, n) ? A[d] : e;
      }
      function Wa(l, d, n) {
        d = d.length ? QA(d, function(w) {
          return q(w) ? function(h) {
            return Ue(h, w.length === 1 ? w[0] : w);
          } : w;
        }) : [Au];
        var B = -1;
        d = QA(d, tu(j()));
        var s = Ja(l, function(w, h, E) {
          return { criteria: QA(d, function(p) {
            return p(w);
          }), index: ++B, value: w };
        }), l = function(w, h) {
          for (var E = n, p = -1, v = w.criteria, _ = h.criteria, Y = v.length, P = E.length; ++p < Y; ) {
            var M, N = nB(v[p], _[p]);
            if (N)
              return P <= p ? N : (M = E[p], N * (M == "desc" ? -1 : 1));
          }
          return w.index - h.index;
        }, C = s.length;
        for (s.sort(l); C--; )
          s[C] = s[C].value;
        return s;
      }
      function Za(A, d, n) {
        for (var B = -1, s = d.length, l = {}; ++B < s; ) {
          var C = d[B], w = Ue(A, C);
          n(w, C) && Et(l, ee(C, A), w);
        }
        return l;
      }
      function Fn(A, d, n, B) {
        var s = B ? ff : Se, l = -1, C = d.length, w = A;
        for (A === d && (d = zA(d)), n && (w = QA(A, tu(n))); ++l < C; )
          for (var h = 0, E = d[l], p = n ? n(E) : E; -1 < (h = s(w, p, h, B)); )
            w !== A && sd.call(w, h, 1), sd.call(A, h, 1);
        return A;
      }
      function ja(A, d) {
        for (var n = A ? d.length : 0, B = n - 1; n--; ) {
          var s, l = d[n];
          n != B && l === s || (Pu(s = l) ? sd.call(A, l, 1) : hn(A, l));
        }
      }
      function Cn(A, d) {
        return A + ld(va() * (d - A + 1));
      }
      function Qn(A, d) {
        var n = "";
        if (!(!A || d < 1 || m < d))
          for (; d % 2 && (n += A), (d = ld(d / 2)) && (A += A), d; )
            ;
        return n;
      }
      function tA(A, d) {
        return Sn(mB(A, d, Au), A + "");
      }
      function Gf(A) {
        return La(Ze(A));
      }
      function Vf(A, d) {
        return A = Ze(A), vd(A, he(d, 0, A.length));
      }
      function Et(A, d, n, B) {
        if (UA(A))
          for (var s = -1, l = (d = ee(d, A)).length, C = l - 1, w = A; w != null && ++s < l; ) {
            var h, E = Lu(d[s]), p = n;
            if (E === "__proto__" || E === "constructor" || E === "prototype")
              return A;
            ht(w, E, p = s != C && (h = w[E], (p = B ? B(h, E, w) : e) === e) ? UA(h) ? h : Pu(d[s + 1]) ? [] : {} : p), w = w[E];
          }
        return A;
      }
      var za = gd ? function(A, d) {
        return gd.set(A, d), A;
      } : Au, TA = od ? function(A, d) {
        return od(A, "toString", { configurable: !0, enumerable: !1, value: Wn(d), writable: !0 });
      } : Au;
      function Rf(A) {
        return vd(Ze(A));
      }
      function fu(A, d, n) {
        var B = -1, s = A.length;
        (n = s < n ? s : n) < 0 && (n += s), s = n < (d = d < 0 ? s < -d ? 0 : s + d : d) ? 0 : n - d >>> 0, d >>>= 0;
        for (var l = H(s); ++B < s; )
          l[B] = A[B + d];
        return l;
      }
      function Nf(A, d) {
        var n;
        return Ae(A, function(B, s, l) {
          return !(n = d(B, s, l));
        }), !!n;
      }
      function Ud(A, d, n) {
        var B = 0, s = A == null ? B : A.length;
        if (typeof d == "number" && d == d && s <= 2147483647) {
          for (; B < s; ) {
            var l = B + s >>> 1, C = A[l];
            C !== null && !ru(C) && (n ? C <= d : C < d) ? B = 1 + l : s = l;
          }
          return s;
        }
        return wn(A, d, Au, n);
      }
      function wn(A, d, n, B) {
        var s = 0, l = A == null ? 0 : A.length;
        if (l === 0)
          return 0;
        for (var C = (d = n(d)) != d, w = d === null, h = ru(d), E = d === e; s < l; ) {
          var p = ld((s + l) / 2), v = n(A[p]), _ = v !== e, Y = v === null, M = v == v, P = ru(v), M = C ? B || M : E ? M && (B || _) : w ? M && _ && (B || !Y) : h ? M && _ && !Y && (B || !P) : !Y && !P && (B ? v <= d : v < d);
          M ? s = p + 1 : l = p;
        }
        return VA(l, 4294967294);
      }
      function qa(A, d) {
        for (var n = -1, B = A.length, s = 0, l = []; ++n < B; ) {
          var C, w = A[n], h = d ? d(w) : w;
          n && mu(h, C) || (C = h, l[s++] = w === 0 ? 0 : w);
        }
        return l;
      }
      function $a(A) {
        return typeof A == "number" ? A : ru(A) ? b : +A;
      }
      function du(A) {
        var d;
        return typeof A == "string" ? A : q(A) ? QA(A, du) + "" : ru(A) ? Ka ? Ka.call(A) : "" : (d = A + "") == "0" && 1 / A == -U ? "-0" : d;
      }
      function ue(A, d, n) {
        var B = -1, s = td, l = A.length, C = !0, w = [], h = w;
        if (n)
          C = !1, s = Wr;
        else if (200 <= l) {
          var E = d ? null : Xf(A);
          if (E)
            return rd(E);
          C = !1, s = ft, h = new we();
        } else
          h = d ? [] : w;
        A:
          for (; ++B < l; ) {
            var v = A[B], p = d ? d(v) : v, v = n || v !== 0 ? v : 0;
            if (C && p == p) {
              for (var _ = h.length; _--; )
                if (h[_] === p)
                  continue A;
              d && h.push(p), w.push(v);
            } else
              s(h, p, n) || (h !== w && h.push(p), w.push(v));
          }
        return w;
      }
      function hn(A, d) {
        return (A = HB(A, d = ee(d, A))) == null || delete A[Lu(lu(d))];
      }
      function AB(A, d, n, B) {
        return Et(A, d, n(Ue(A, d)), B);
      }
      function Dd(A, d, n, B) {
        for (var s = A.length, l = B ? s : -1; (B ? l-- : ++l < s) && d(A[l], l, A); )
          ;
        return n ? fu(A, B ? 0 : l, B ? l + 1 : s) : fu(A, B ? l + 1 : 0, B ? s : l);
      }
      function uB(A, d) {
        var n = A;
        return Zr(d, function(B, s) {
          return s.func.apply(s.thisArg, qu([B], s.args));
        }, n = A instanceof rA ? A.value() : n);
      }
      function Un(A, d, n) {
        var B = A.length;
        if (B < 2)
          return B ? ue(A[0]) : [];
        for (var s = -1, l = H(B); ++s < B; )
          for (var C = A[s], w = -1; ++w < B; )
            w != s && (l[s] = Ut(l[s] || C, A[w], d, n));
        return ue(OA(l, 1), d, n);
      }
      function eB(A, d, n) {
        for (var B = -1, s = A.length, l = d.length, C = {}; ++B < s; ) {
          var w = B < l ? d[B] : e;
          n(C, A[B], w);
        }
        return C;
      }
      function Dn(A) {
        return EA(A) ? A : [];
      }
      function pn(A) {
        return typeof A == "function" ? A : Au;
      }
      function ee(A, d) {
        return q(A) ? A : xn(A, d) ? [A] : KB(BA(A));
      }
      var Vn = tA;
      function te(A, d, n) {
        var B = A.length;
        return n = n === e ? B : n, !d && B <= n ? A : fu(A, d, n);
      }
      var tB = Ve || function(A) {
        return MA.clearTimeout(A);
      };
      function dB(A, d) {
        return d ? A.slice() : (d = A.length, d = ba ? ba(d) : new A.constructor(d), A.copy(d), d);
      }
      function En(A) {
        var d = new A.constructor(A.byteLength);
        return new Bd(d).set(new Bd(A)), d;
      }
      function rB(A, d) {
        return d = d ? En(A.buffer) : A.buffer, new A.constructor(d, A.byteOffset, A.length);
      }
      function nB(A, d) {
        if (A !== d) {
          var n = A !== e, B = A === null, s = A == A, l = ru(A), C = d !== e, w = d === null, h = d == d, E = ru(d);
          if (!w && !E && !l && d < A || l && C && h && !w && !E || B && C && h || !n && h || !s)
            return 1;
          if (!B && !l && !E && A < d || E && n && s && !B && !l || w && n && s || !C && s || !h)
            return -1;
        }
        return 0;
      }
      function cB(A, d, n, B) {
        for (var s = -1, l = A.length, C = n.length, w = -1, h = d.length, E = xA(l - C, 0), p = H(h + E), v = !B; ++w < h; )
          p[w] = d[w];
        for (; ++s < C; )
          (v || s < l) && (p[n[s]] = A[s]);
        for (; E--; )
          p[w++] = A[s++];
        return p;
      }
      function aB(A, d, n, B) {
        for (var s = -1, l = A.length, C = -1, w = n.length, h = -1, E = d.length, p = xA(l - w, 0), v = H(p + E), _ = !B; ++s < p; )
          v[s] = A[s];
        for (var Y = s; ++h < E; )
          v[Y + h] = d[h];
        for (; ++C < w; )
          (_ || s < l) && (v[Y + n[C]] = A[s++]);
        return v;
      }
      function zA(A, d) {
        var n = -1, B = A.length;
        for (d = d || H(B); ++n < B; )
          d[n] = A[n];
        return d;
      }
      function xu(A, d, n, B) {
        var s = !n;
        n = n || {};
        for (var l = -1, C = d.length; ++l < C; ) {
          var w = d[l], h = B ? B(n[w], A[w], w, n, A) : e;
          (s ? Ru : ht)(n, w, h = h === e ? A[w] : h);
        }
        return n;
      }
      function pd(A, d) {
        return function(n, B) {
          var s = q(n) ? af : Sf, l = d ? d() : {};
          return s(n, A, j(B, 2), l);
        };
      }
      function Pe(A) {
        return tA(function(d, n) {
          var B = -1, s = n.length, C = 1 < s ? n[s - 1] : e, l = 2 < s ? n[2] : e, C = 3 < A.length && typeof C == "function" ? (s--, C) : e;
          for (l && XA(n[0], n[1], l) && (C = s < 3 ? e : C, s = 1), d = uA(d); ++B < s; ) {
            var w = n[B];
            w && A(d, w, B, C);
          }
          return d;
        });
      }
      function BB(A, d) {
        return function(n, B) {
          if (n != null) {
            if (!qA(n))
              return A(n, B);
            for (var s = n.length, l = d ? s : -1, C = uA(n); (d ? l-- : ++l < s) && B(C[l], l, C) !== !1; )
              ;
          }
          return n;
        };
      }
      function iB(A) {
        return function(d, n, B) {
          for (var s = -1, l = uA(d), C = B(d), w = C.length; w--; ) {
            var h = C[A ? w : ++s];
            if (n(l[h], h, l) === !1)
              break;
          }
          return d;
        };
      }
      function sB(A) {
        return function(d) {
          var B = Me(d = BA(d)) ? pu(d) : e, n = B ? B[0] : d.charAt(0), B = B ? te(B, 1).join("") : d.slice(1);
          return n[A]() + B;
        };
      }
      function Xe(A) {
        return function(d) {
          return Zr(ci(ni(d).replace(qo, "")), A, "");
        };
      }
      function bt(A) {
        return function() {
          var d = arguments;
          switch (d.length) {
            case 0:
              return new A();
            case 1:
              return new A(d[0]);
            case 2:
              return new A(d[0], d[1]);
            case 3:
              return new A(d[0], d[1], d[2]);
            case 4:
              return new A(d[0], d[1], d[2], d[3]);
            case 5:
              return new A(d[0], d[1], d[2], d[3], d[4]);
            case 6:
              return new A(d[0], d[1], d[2], d[3], d[4], d[5]);
            case 7:
              return new A(d[0], d[1], d[2], d[3], d[4], d[5], d[6]);
          }
          var n = Je(A.prototype), B = A.apply(n, d);
          return UA(B) ? B : n;
        };
      }
      function Jf(A, d, n) {
        var B = bt(A);
        return function s() {
          for (var l = arguments.length, C = H(l), w = l, h = Ye(s); w--; )
            C[w] = arguments[w];
          return h = l < 3 && C[0] !== h && C[l - 1] !== h ? [] : $u(C, h), (l -= h.length) < n ? FB(A, d, Ed, s.placeholder, e, C, h, e, e, n - l) : eu(this && this !== MA && this instanceof s ? B : A, this, C);
        };
      }
      function oB(A) {
        return function(d, C, B) {
          var s, l = uA(d), C = (qA(d) || (s = j(C, 3), d = _A(d), C = function(w) {
            return s(l[w], w, l);
          }), A(d, C, B));
          return -1 < C ? l[s ? d[C] : C] : e;
        };
      }
      function fB(A) {
        return Ju(function(d) {
          var n = d.length, B = n, s = Eu.prototype.thru;
          for (A && d.reverse(); B--; ) {
            var l = d[B];
            if (typeof l != "function")
              throw new su(r);
            s && !h && yd(l) == "wrapper" && (h = new Eu([], !0));
          }
          for (B = h ? B : n; ++B < n; )
            var C = yd(l = d[B]), w = C == "wrapper" ? In(l) : e, h = w && Ln(w[0]) && w[1] == 424 && !w[4].length && w[9] == 1 ? h[yd(w[0])].apply(h, w[3]) : l.length == 1 && Ln(l) ? h[C]() : h.thru(l);
          return function() {
            var E = arguments, p = E[0];
            if (h && E.length == 1 && q(p))
              return h.plant(p).value();
            for (var v = 0, _ = n ? d[v].apply(this, E) : p; ++v < n; )
              _ = d[v].call(this, _);
            return _;
          };
        });
      }
      function Ed(A, d, n, B, s, l, C, w, h, E) {
        var p = d & Q, v = 1 & d, _ = 2 & d, Y = 24 & d, P = 512 & d, M = _ ? e : bt(A);
        return function N() {
          for (var L, J, X = arguments.length, aA = H(X), dA = X; dA--; )
            aA[dA] = arguments[dA];
          return Y && (J = function(fA, NA) {
            for (var bA = fA.length, Hu = 0; bA--; )
              fA[bA] === NA && ++Hu;
            return Hu;
          }(aA, L = Ye(N))), B && (aA = cB(aA, B, s, Y)), l && (aA = aB(aA, l, C, Y)), X -= J, Y && X < E ? (J = $u(aA, L), FB(A, d, Ed, N.placeholder, n, aA, J, w, h, E - X)) : (L = v ? n : this, J = _ ? L[A] : A, X = aA.length, w ? aA = function(fA, NA) {
            for (var bA = fA.length, Hu = VA(NA.length, bA), _u = zA(fA); Hu--; ) {
              var Cu = NA[Hu];
              fA[Hu] = Pu(Cu, bA) ? _u[Cu] : e;
            }
            return fA;
          }(aA, w) : P && 1 < X && aA.reverse(), p && h < X && (aA.length = h), (J = this && this !== MA && this instanceof N ? M || bt(J) : J).apply(L, aA));
        };
      }
      function lB(A, d) {
        return function(n, B) {
          return n = n, s = A, l = d(B), C = {}, Ku(n, function(w, h, E) {
            s(C, l(w), h, E);
          }), C;
          var s, l, C;
        };
      }
      function bd(A, d) {
        return function(n, B) {
          var s;
          if (n === e && B === e)
            return d;
          if (n !== e && (s = n), B !== e) {
            if (s === e)
              return B;
            B = (typeof n == "string" || typeof B == "string" ? (n = du(n), du) : (n = $a(n), $a))(B), s = A(n, B);
          }
          return s;
        };
      }
      function bn(A) {
        return Ju(function(d) {
          return d = QA(d, tu(j())), tA(function(n) {
            var B = this;
            return A(d, function(s) {
              return eu(s, B, n);
            });
          });
        });
      }
      function md(A, d) {
        var n = (d = d === e ? " " : du(d)).length;
        return n < 2 ? n ? Qn(d, A) : d : (n = Qn(d, fd(A / Oe(d))), Me(d) ? te(pu(n), 0, A).join("") : n.slice(0, A));
      }
      function Pf(A, d, n, B) {
        var s = 1 & d, l = bt(A);
        return function C() {
          for (var w = -1, h = arguments.length, E = -1, p = B.length, v = H(p + h), _ = this && this !== MA && this instanceof C ? l : A; ++E < p; )
            v[E] = B[E];
          for (; h--; )
            v[E++] = arguments[++w];
          return eu(_, s ? n : this, v);
        };
      }
      function gB(A) {
        return function(d, n, B) {
          B && typeof B != "number" && XA(d, n, B) && (n = B = e), d = Yu(d), n === e ? (n = d, d = 0) : n = Yu(n), B = B === e ? d < n ? 1 : -1 : Yu(B);
          for (var s = d, l = B, C = A, w = -1, h = xA(fd((n - s) / (l || 1)), 0), E = H(h); h--; )
            E[C ? h : ++w] = s, s += l;
          return E;
        };
      }
      function Hd(A) {
        return function(d, n) {
          return typeof d == "string" && typeof n == "string" || (d = Fu(d), n = Fu(n)), A(d, n);
        };
      }
      function FB(A, d, n, B, v, _, C, w, h, E) {
        var p = 8 & d, v = (4 & (d = (d | (p ? f : g)) & ~(p ? g : f)) || (d &= -4), [A, d, v, p ? _ : e, p ? C : e, p ? e : _, p ? e : C, w, h, E]), _ = n.apply(e, v);
        return Ln(A) && yB(_, v), _.placeholder = B, IB(_, A, d);
      }
      function mn(A) {
        var d = eA[A];
        return function(n, B) {
          var s;
          return n = Fu(n), (B = B == null ? 0 : VA(AA(B), 292)) && Ia(n) ? (s = (BA(n) + "e").split("e"), +((s = (BA(d(s[0] + "e" + (+s[1] + B))) + "e").split("e"))[0] + "e" + (+s[1] - B))) : d(n);
        };
      }
      var Xf = Re && 1 / rd(new Re([, -0]))[1] == U ? function(A) {
        return new Re(A);
      } : zn;
      function CB(A) {
        return function(d) {
          var n, B, s, l = RA(d);
          return l == R ? en(d) : l == IA ? (l = d, B = -1, s = Array(l.size), l.forEach(function(C) {
            s[++B] = [C, C];
          }), s) : QA(A(n = d), function(C) {
            return [C, n[C]];
          });
        };
      }
      function Nu(A, d, n, B, s, l, C, w) {
        var h, E, p, v, _, Y, P, M, N, L, J, X, aA, dA = 2 & d;
        if (dA || typeof A == "function")
          return (h = B ? B.length : 0) || (d &= -97, B = s = e), C = C === e ? C : xA(AA(C), 0), w = w === e ? w : AA(w), h -= s ? s.length : 0, d & g && (p = B, M = s, B = s = e), E = dA ? e : In(A), p = [A, d, n, B, s, p, M, l, C, w], E && (M = E, C = (l = p)[1], L = M[1], X = (J = C | L) < 131, aA = L == Q && C == 8 || L == Q && C == F && l[7].length <= M[8] || L == 384 && M[7].length <= M[8] && C == 8, X || aA) && (1 & L && (l[2] = M[2], J |= 1 & C ? 0 : 4), (X = M[3]) && (N = l[3], l[3] = N ? cB(N, X, M[4]) : X, l[4] = N ? $u(l[3], a) : M[4]), (X = M[5]) && (N = l[5], l[5] = N ? aB(N, X, M[6]) : X, l[6] = N ? $u(l[5], a) : M[6]), (X = M[7]) && (l[7] = X), L & Q && (l[8] = l[8] == null ? M[8] : VA(l[8], M[8])), l[9] == null && (l[9] = M[9]), l[0] = M[0], l[1] = J), A = p[0], d = p[1], n = p[2], B = p[3], s = p[4], !(w = p[9] = p[9] === e ? dA ? 0 : A.length : xA(p[9] - h, 0)) && 24 & d && (d &= -25), aA = d && d != 1 ? d == 8 || d == i ? Jf(A, d, w) : d != f && d != 33 || s.length ? Ed.apply(e, p) : Pf(A, d, n, B) : (_ = n, Y = 1 & d, P = bt(v = A), function fA() {
            return (this && this !== MA && this instanceof fA ? P : v).apply(Y ? _ : this, arguments);
          }), IB((E ? za : yB)(aA, p), A, d);
        throw new su(r);
      }
      function QB(A, d, n, B) {
        return A === e || mu(A, ke[n]) && !sA.call(B, n) ? d : A;
      }
      function wB(A, d, n, B, s, l) {
        return UA(A) && UA(d) && (l.set(d, A), hd(A, d, e, wB, l), l.delete(d)), A;
      }
      function Yf(A) {
        return yt(A) ? e : A;
      }
      function hB(A, d, n, B, s, l) {
        var C = 1 & n, w = A.length, h = d.length;
        if (w != h && !(C && w < h))
          return !1;
        var h = l.get(A), E = l.get(d);
        if (h && E)
          return h == d && E == A;
        var p = -1, v = !0, _ = 2 & n ? new we() : e;
        for (l.set(A, d), l.set(d, A); ++p < w; ) {
          var Y, P = A[p], M = d[p];
          if ((Y = B ? C ? B(M, P, p, d, A, l) : B(P, M, p, A, d, l) : Y) !== e) {
            if (Y)
              continue;
            v = !1;
            break;
          }
          if (_) {
            if (!jr(d, function(N, L) {
              return !ft(_, L) && (P === N || s(P, N, n, B, l)) && _.push(L);
            })) {
              v = !1;
              break;
            }
          } else if (P !== M && !s(P, M, n, B, l)) {
            v = !1;
            break;
          }
        }
        return l.delete(A), l.delete(d), v;
      }
      function Ju(A) {
        return Sn(mB(A, e, SB), A + "");
      }
      function Hn(A) {
        return Ga(A, _A, Kn);
      }
      function yn(A) {
        return Ga(A, $A, UB);
      }
      var In = gd ? function(A) {
        return gd.get(A);
      } : zn;
      function yd(A) {
        for (var d = A.name + "", n = Ne[d], B = sA.call(Ne, d) ? n.length : 0; B--; ) {
          var s = n[B], l = s.func;
          if (l == null || l == A)
            return s.name;
        }
        return d;
      }
      function Ye(A) {
        return (sA.call(o, "placeholder") ? o : A).placeholder;
      }
      function j() {
        var A = (A = o.iteratee || Zn) === Zn ? Na : A;
        return arguments.length ? A(arguments[0], arguments[1]) : A;
      }
      function Id(s, d) {
        var n, B, s = s.__data__;
        return ((B = typeof (n = d)) == "string" || B == "number" || B == "symbol" || B == "boolean" ? n !== "__proto__" : n === null) ? s[typeof d == "string" ? "string" : "hash"] : s.map;
      }
      function vn(A) {
        for (var d = _A(A), n = d.length; n--; ) {
          var B = d[n], s = A[B];
          d[n] = [B, s, EB(s)];
        }
        return d;
      }
      function De(A, d) {
        return d = d, A = (A = A) == null ? e : A[d], Ra(A) ? A : e;
      }
      var Kn = dn ? function(A) {
        return A == null ? [] : (A = uA(A), zu(dn(A), function(d) {
          return Ha.call(A, d);
        }));
      } : qn, UB = dn ? function(A) {
        for (var d = []; A; )
          qu(d, Kn(A)), A = id(A);
        return d;
      } : qn, RA = PA;
      function DB(A, d, n) {
        for (var B = -1, s = (d = ee(d, A)).length, l = !1; ++B < s; ) {
          var C = Lu(d[B]);
          if (!(l = A != null && n(A, C)))
            break;
          A = A[C];
        }
        return l || ++B != s ? l : !!(s = A == null ? 0 : A.length) && Md(s) && Pu(C, s) && (q(A) || Ee(A));
      }
      function pB(A) {
        return typeof A.constructor != "function" || mt(A) ? {} : Je(id(A));
      }
      function Wf(A) {
        return q(A) || Ee(A) || !!(ya && A && A[ya]);
      }
      function Pu(A, d) {
        var n = typeof A;
        return !!(d = d ?? m) && (n == "number" || n != "symbol" && Wo.test(A)) && -1 < A && A % 1 == 0 && A < d;
      }
      function XA(A, d, n) {
        var B;
        return !!UA(n) && !!((B = typeof d) == "number" ? qA(n) && Pu(d, n.length) : B == "string" && d in n) && mu(n[d], A);
      }
      function xn(A, d) {
        var n;
        if (!q(A))
          return (n = typeof A) == "number" || n == "symbol" || n == "boolean" || A == null || ru(A) || Lo.test(A) || !xo.test(A) || d != null && A in uA(d);
      }
      function Ln(A) {
        var d = yd(A), n = o[d];
        return typeof n == "function" && d in rA.prototype && (A === n || (d = In(n)) && A === d[0]);
      }
      (vu && RA(new vu(new ArrayBuffer(1))) != ZA || Ft && RA(new Ft()) != R || Ct && RA(Ct.resolve()) != JA || Re && RA(new Re()) != IA || cA && RA(new cA()) != Bu) && (RA = function(n) {
        var d = PA(n), n = d == hA ? n.constructor : e, n = n ? pe(n) : "";
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
              return Bu;
          }
        return d;
      });
      var Zf = Ge ? Xu : $n;
      function mt(A) {
        var d = A && A.constructor;
        return A === (typeof d == "function" && d.prototype || ke);
      }
      function EB(A) {
        return A == A && !UA(A);
      }
      function bB(A, d) {
        return function(n) {
          return n != null && n[A] === d && (d !== e || A in uA(n));
        };
      }
      function mB(A, d, n) {
        return d = xA(d === e ? A.length - 1 : d, 0), function() {
          for (var B = arguments, s = -1, l = xA(B.length - d, 0), C = H(l); ++s < l; )
            C[s] = B[d + s];
          for (var s = -1, w = H(d + 1); ++s < d; )
            w[s] = B[s];
          return w[d] = n(C), eu(A, this, w);
        };
      }
      function HB(A, d) {
        return d.length < 2 ? A : Ue(A, fu(d, 0, -1));
      }
      function _n(A, d) {
        if ((d !== "constructor" || typeof A[d] != "function") && d != "__proto__")
          return A[d];
      }
      var yB = vB(za), Ht = tn || function(A, d) {
        return MA.setTimeout(A, d);
      }, Sn = vB(TA);
      function IB(A, C, n) {
        var B, s, l, C = C + "";
        return Sn(A, (s = (C = (C = A = C).match(To)) ? C[1].split(ko) : [], l = n, iu(I, function(w) {
          var h = "_." + w[0];
          l & w[1] && !td(s, h) && s.push(h);
        }), C = s.sort(), (n = C.length) ? (C[B = n - 1] = (1 < n ? "& " : "") + C[B], C = C.join(2 < n ? ", " : " "), A.replace(Oo, `{
/* [wrapped with ` + C + `] */
`)) : A));
      }
      function vB(A) {
        var d = 0, n = 0;
        return function() {
          var B = bf(), s = 16 - (B - n);
          if (n = B, 0 < s) {
            if (800 <= ++d)
              return arguments[0];
          } else
            d = 0;
          return A.apply(e, arguments);
        };
      }
      function vd(A, d) {
        var n = -1, B = A.length, s = B - 1;
        for (d = d === e ? B : d; ++n < d; ) {
          var l = Cn(n, s), C = A[l];
          A[l] = A[n], A[n] = C;
        }
        return A.length = d, A;
      }
      Mn = (Ve = _d(Ve = function(A) {
        var d = [];
        return A.charCodeAt(0) === 46 && d.push(""), A.replace(_o, function(n, B, s, l) {
          d.push(s ? l.replace(Ro, "$1") : B || n);
        }), d;
      }, function(A) {
        return Mn.size === 500 && Mn.clear(), A;
      })).cache;
      var Mn, KB = Ve;
      function Lu(A) {
        var d;
        return typeof A == "string" || ru(A) ? A : (d = A + "") == "0" && 1 / A == -U ? "-0" : d;
      }
      function pe(A) {
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
      function xB(A) {
        var d;
        return A instanceof rA ? A.clone() : ((d = new Eu(A.__wrapped__, A.__chain__)).__actions__ = zA(A.__actions__), d.__index__ = A.__index__, d.__values__ = A.__values__, d);
      }
      vu = tA(function(A, d) {
        return EA(A) ? Ut(A, OA(d, 1, EA, !0)) : [];
      }), Ct = tA(function(A, d) {
        var n = lu(d);
        return EA(n) && (n = e), EA(A) ? Ut(A, OA(d, 1, EA, !0), j(n, 2)) : [];
      }), cA = tA(function(A, d) {
        var n = lu(d);
        return EA(n) && (n = e), EA(A) ? Ut(A, OA(d, 1, EA, !0), e, n) : [];
      });
      function LB(A, d, n) {
        var B = A == null ? 0 : A.length;
        return B ? ((n = n == null ? 0 : AA(n)) < 0 && (n = xA(B + n, 0)), dd(A, j(d, 3), n)) : -1;
      }
      function _B(A, d, n) {
        var B, s = A == null ? 0 : A.length;
        return s ? (B = s - 1, n !== e && (B = AA(n), B = n < 0 ? xA(s + B, 0) : VA(B, s - 1)), dd(A, j(d, 3), B, !0)) : -1;
      }
      function SB(A) {
        return A != null && A.length ? OA(A, 1) : [];
      }
      function MB(A) {
        return A && A.length ? A[0] : e;
      }
      Ge = tA(function(A) {
        var d = QA(A, Dn);
        return d.length && d[0] === A[0] ? on(d) : [];
      }), tn = tA(function(A) {
        var d = lu(A), n = QA(A, Dn);
        return d === lu(n) ? d = e : n.pop(), n.length && n[0] === A[0] ? on(n, j(d, 2)) : [];
      }), TA = tA(function(A) {
        var d = lu(A), n = QA(A, Dn);
        return (d = typeof d == "function" ? d : e) && n.pop(), n.length && n[0] === A[0] ? on(n, e, d) : [];
      });
      function lu(A) {
        var d = A == null ? 0 : A.length;
        return d ? A[d - 1] : e;
      }
      Ve = tA(OB);
      function OB(A, d) {
        return A && A.length && d && d.length ? Fn(A, d) : A;
      }
      var jf = Ju(function(A, d) {
        var n = A == null ? 0 : A.length, B = cn(A, d);
        return ja(A, QA(d, function(s) {
          return Pu(s, n) ? +s : s;
        }).sort(nB)), B;
      });
      function On(A) {
        return A == null ? A : Hf.call(A);
      }
      var zf = tA(function(A) {
        return ue(OA(A, 1, EA, !0));
      }), qf = tA(function(A) {
        var d = lu(A);
        return EA(d) && (d = e), ue(OA(A, 1, EA, !0), j(d, 2));
      }), $f = tA(function(A) {
        var d = typeof (d = lu(A)) == "function" ? d : e;
        return ue(OA(A, 1, EA, !0), e, d);
      });
      function Tn(A) {
        var d;
        return A && A.length ? (d = 0, A = zu(A, function(n) {
          return EA(n) && (d = xA(n.length, d), 1);
        }), An(d, function(n) {
          return QA(A, zr(n));
        })) : [];
      }
      function TB(A, d) {
        return A && A.length ? (A = Tn(A), d == null ? A : QA(A, function(n) {
          return eu(d, e, n);
        })) : [];
      }
      var A0 = tA(function(A, d) {
        return EA(A) ? Ut(A, d) : [];
      }), u0 = tA(function(A) {
        return Un(zu(A, EA));
      }), e0 = tA(function(A) {
        var d = lu(A);
        return EA(d) && (d = e), Un(zu(A, EA), j(d, 2));
      }), t0 = tA(function(A) {
        var d = typeof (d = lu(A)) == "function" ? d : e;
        return Un(zu(A, EA), e, d);
      }), d0 = tA(Tn), r0 = tA(function(A) {
        var d = A.length, d = typeof (d = 1 < d ? A[d - 1] : e) == "function" ? (A.pop(), d) : e;
        return TB(A, d);
      });
      function kB(A) {
        return A = o(A), A.__chain__ = !0, A;
      }
      function Kd(A, d) {
        return d(A);
      }
      var n0 = Ju(function(A) {
        function d(l) {
          return cn(l, A);
        }
        var n = A.length, B = n ? A[0] : 0, s = this.__wrapped__;
        return !(1 < n || this.__actions__.length) && s instanceof rA && Pu(B) ? ((s = s.slice(B, +B + (n ? 1 : 0))).__actions__.push({ func: Kd, args: [d], thisArg: e }), new Eu(s, this.__chain__).thru(function(l) {
          return n && !l.length && l.push(e), l;
        })) : this.thru(d);
      }), c0 = pd(function(A, d, n) {
        sA.call(A, n) ? ++A[n] : Ru(A, n, 1);
      }), a0 = oB(LB), B0 = oB(_B);
      function GB(A, d) {
        return (q(A) ? iu : Ae)(A, j(d, 3));
      }
      function VB(A, d) {
        return (q(A) ? Bf : Oa)(A, j(d, 3));
      }
      var i0 = pd(function(A, d, n) {
        sA.call(A, n) ? A[n].push(d) : Ru(A, n, [d]);
      }), s0 = tA(function(A, d, n) {
        var B = -1, s = typeof d == "function", l = qA(A) ? H(A.length) : [];
        return Ae(A, function(C) {
          l[++B] = s ? eu(d, C, n) : Dt(C, d, n);
        }), l;
      }), o0 = pd(function(A, d, n) {
        Ru(A, n, d);
      });
      function xd(A, d) {
        return (q(A) ? QA : Ja)(A, j(d, 3));
      }
      var f0 = pd(function(A, d, n) {
        A[n ? 0 : 1].push(d);
      }, function() {
        return [[], []];
      }), l0 = tA(function(A, d) {
        var n;
        return A == null ? [] : (1 < (n = d.length) && XA(A, d[0], d[1]) ? d = [] : 2 < n && XA(d[0], d[1], d[2]) && (d = [d[0]]), Wa(A, OA(d, 1), []));
      }), Ld = Gn || function() {
        return MA.Date.now();
      };
      function RB(A, d, n) {
        return d = n ? e : d, d = A && d == null ? A.length : d, Nu(A, Q, e, e, e, e, d);
      }
      function NB(A, d) {
        var n;
        if (typeof d != "function")
          throw new su(r);
        return A = AA(A), function() {
          return 0 < --A && (n = d.apply(this, arguments)), A <= 1 && (d = e), n;
        };
      }
      var kn = tA(function(A, d, n) {
        var B, s = 1;
        return n.length && (B = $u(n, Ye(kn)), s |= f), Nu(A, s, d, n, B);
      }), JB = tA(function(A, d, n) {
        var B, s = 3;
        return n.length && (B = $u(n, Ye(JB)), s |= f), Nu(d, s, A, n, B);
      });
      function PB(A, d, n) {
        var B, s, l, C, w, h, E = 0, p = !1, v = !1, _ = !0;
        if (typeof A != "function")
          throw new su(r);
        function Y(J) {
          var X = B, aA = s;
          return B = s = e, E = J, C = A.apply(aA, X);
        }
        function P(J) {
          var X = J - h;
          return h === e || d <= X || X < 0 || v && l <= J - E;
        }
        function M() {
          var J, X = Ld();
          if (P(X))
            return N(X);
          w = Ht(M, (J = d - ((X = X) - h), v ? VA(J, l - (X - E)) : J));
        }
        function N(J) {
          return w = e, _ && B ? Y(J) : (B = s = e, C);
        }
        function L() {
          var J = Ld(), X = P(J);
          if (B = arguments, s = this, h = J, X) {
            if (w === e)
              return E = J = h, w = Ht(M, d), p ? Y(J) : C;
            if (v)
              return tB(w), w = Ht(M, d), Y(h);
          }
          return w === e && (w = Ht(M, d)), C;
        }
        return d = Fu(d) || 0, UA(n) && (p = !!n.leading, v = "maxWait" in n, l = v ? xA(Fu(n.maxWait) || 0, d) : l, _ = "trailing" in n ? !!n.trailing : _), L.cancel = function() {
          w !== e && tB(w), E = 0, B = h = s = w = e;
        }, L.flush = function() {
          return w === e ? C : N(Ld());
        }, L;
      }
      var Gn = tA(function(A, d) {
        return Ma(A, 1, d);
      }), g0 = tA(function(A, d, n) {
        return Ma(A, Fu(d) || 0, n);
      });
      function _d(A, d) {
        if (typeof A != "function" || d != null && typeof d != "function")
          throw new su(r);
        function n() {
          var B = arguments, s = d ? d.apply(this, B) : B[0], l = n.cache;
          return l.has(s) ? l.get(s) : (B = A.apply(this, B), n.cache = l.set(s, B) || l, B);
        }
        return n.cache = new (_d.Cache || Vu)(), n;
      }
      function Sd(A) {
        if (typeof A != "function")
          throw new su(r);
        return function() {
          var d = arguments;
          switch (d.length) {
            case 0:
              return !A.call(this);
            case 1:
              return !A.call(this, d[0]);
            case 2:
              return !A.call(this, d[0], d[1]);
            case 3:
              return !A.call(this, d[0], d[1], d[2]);
          }
          return !A.apply(this, d);
        };
      }
      _d.Cache = Vu;
      var Vn = Vn(function(A, d) {
        var n = (d = d.length == 1 && q(d[0]) ? QA(d[0], tu(j())) : QA(OA(d, 1), tu(j()))).length;
        return tA(function(B) {
          for (var s = -1, l = VA(B.length, n); ++s < l; )
            B[s] = d[s].call(this, B[s]);
          return eu(A, this, B);
        });
      }), Rn = tA(function(A, d) {
        var n = $u(d, Ye(Rn));
        return Nu(A, f, e, d, n);
      }), XB = tA(function(A, d) {
        var n = $u(d, Ye(XB));
        return Nu(A, g, e, d, n);
      }), F0 = Ju(function(A, d) {
        return Nu(A, F, e, e, e, d);
      });
      function mu(A, d) {
        return A === d || A != A && d != d;
      }
      var C0 = Hd(sn), Q0 = Hd(function(A, d) {
        return d <= A;
      }), Ee = Va(function() {
        return arguments;
      }()) ? Va : function(A) {
        return DA(A) && sA.call(A, "callee") && !Ha.call(A, "callee");
      }, q = H.isArray, w0 = aa ? tu(aa) : function(A) {
        return DA(A) && PA(A) == KA;
      };
      function qA(A) {
        return A != null && Md(A.length) && !Xu(A);
      }
      function EA(A) {
        return DA(A) && qA(A);
      }
      var de = gu || $n, gu = Ba ? tu(Ba) : function(A) {
        return DA(A) && PA(A) == $;
      };
      function Nn(A) {
        var d;
        return !!DA(A) && ((d = PA(A)) == Z || d == "[object DOMException]" || typeof A.message == "string" && typeof A.name == "string" && !yt(A));
      }
      function Xu(A) {
        return !!UA(A) && ((A = PA(A)) == O || A == nA || A == "[object AsyncFunction]" || A == "[object Proxy]");
      }
      function YB(A) {
        return typeof A == "number" && A == AA(A);
      }
      function Md(A) {
        return typeof A == "number" && -1 < A && A % 1 == 0 && A <= m;
      }
      function UA(A) {
        var d = typeof A;
        return A != null && (d == "object" || d == "function");
      }
      function DA(A) {
        return A != null && typeof A == "object";
      }
      var WB = ia ? tu(ia) : function(A) {
        return DA(A) && RA(A) == R;
      };
      function ZB(A) {
        return typeof A == "number" || DA(A) && PA(A) == oA;
      }
      function yt(A) {
        return !(!DA(A) || PA(A) != hA) && ((A = id(A)) === null || typeof (A = sA.call(A, "constructor") && A.constructor) == "function" && A instanceof A && cd.call(A) == hf);
      }
      var Jn = sa ? tu(sa) : function(A) {
        return DA(A) && PA(A) == Du;
      }, jB = oa ? tu(oa) : function(A) {
        return DA(A) && RA(A) == IA;
      };
      function Od(A) {
        return typeof A == "string" || !q(A) && DA(A) && PA(A) == vA;
      }
      function ru(A) {
        return typeof A == "symbol" || DA(A) && PA(A) == GA;
      }
      var We = fa ? tu(fa) : function(A) {
        return DA(A) && Md(A.length) && !!FA[PA(A)];
      }, h0 = Hd(gn), U0 = Hd(function(A, d) {
        return A <= d;
      });
      function zB(A) {
        if (!A)
          return [];
        if (qA(A))
          return (Od(A) ? pu : zA)(A);
        var d;
        if (gt && A[gt]) {
          for (var n, B = A[gt](), s = []; !(n = B.next()).done; )
            s.push(n.value);
          return s;
        }
        return ((d = RA(A)) == R ? en : d == IA ? rd : Ze)(A);
      }
      function Yu(A) {
        return A ? (A = Fu(A)) === U || A === -U ? 17976931348623157e292 * (A < 0 ? -1 : 1) : A == A ? A : 0 : A === 0 ? A : 0;
      }
      function AA(d) {
        var d = Yu(d), n = d % 1;
        return d == d ? n ? d - n : d : 0;
      }
      function qB(A) {
        return A ? he(AA(A), 0, y) : 0;
      }
      function Fu(A) {
        if (typeof A == "number")
          return A;
        if (ru(A))
          return b;
        if (typeof (A = UA(A) ? UA(d = typeof A.valueOf == "function" ? A.valueOf() : A) ? d + "" : d : A) != "string")
          return A === 0 ? A : +A;
        A = wa(A);
        var d = Po.test(A);
        return d || Yo.test(A) ? cf(A.slice(2), d ? 2 : 8) : Jo.test(A) ? b : +A;
      }
      function $B(A) {
        return xu(A, $A(A));
      }
      function BA(A) {
        return A == null ? "" : du(A);
      }
      var D0 = Pe(function(A, d) {
        if (mt(d) || qA(d))
          xu(d, _A(d), A);
        else
          for (var n in d)
            sA.call(d, n) && ht(A, n, d[n]);
      }), Ai = Pe(function(A, d) {
        xu(d, $A(d), A);
      }), Td = Pe(function(A, d, n, B) {
        xu(d, $A(d), A, B);
      }), p0 = Pe(function(A, d, n, B) {
        xu(d, _A(d), A, B);
      }), E0 = Ju(cn), b0 = tA(function(A, d) {
        A = uA(A);
        var n = -1, B = d.length, s = 2 < B ? d[2] : e;
        for (s && XA(d[0], d[1], s) && (B = 1); ++n < B; )
          for (var l = d[n], C = $A(l), w = -1, h = C.length; ++w < h; ) {
            var E = C[w], p = A[E];
            (p === e || mu(p, ke[E]) && !sA.call(A, E)) && (A[E] = l[E]);
          }
        return A;
      }), m0 = tA(function(A) {
        return A.push(e, wB), eu(ui, e, A);
      });
      function Pn(A, d, n) {
        return A = A == null ? e : Ue(A, d), A === e ? n : A;
      }
      function Xn(A, d) {
        return A != null && DB(A, d, Tf);
      }
      var H0 = lB(function(A, d, n) {
        A[d = d != null && typeof d.toString != "function" ? ad.call(d) : d] = n;
      }, Wn(Au)), y0 = lB(function(A, d, n) {
        d != null && typeof d.toString != "function" && (d = ad.call(d)), sA.call(A, d) ? A[d].push(n) : A[d] = [n];
      }, j), I0 = tA(Dt);
      function _A(A) {
        return (qA(A) ? xa : ln)(A);
      }
      function $A(A) {
        return qA(A) ? xa(A, !0) : kf(A);
      }
      var v0 = Pe(function(A, d, n) {
        hd(A, d, n);
      }), ui = Pe(function(A, d, n, B) {
        hd(A, d, n, B);
      }), K0 = Ju(function(A, d) {
        var n = {};
        if (A != null) {
          var B = !1;
          d = QA(d, function(l) {
            return l = ee(l, A), B = B || 1 < l.length, l;
          }), xu(A, yn(A), n), B && (n = ou(n, 7, Yf));
          for (var s = d.length; s--; )
            hn(n, d[s]);
        }
        return n;
      }), x0 = Ju(function(A, d) {
        return A == null ? {} : Za(n = A, d, function(B, s) {
          return Xn(n, s);
        });
        var n;
      });
      function ei(A, d) {
        var n;
        return A == null ? {} : (n = QA(yn(A), function(B) {
          return [B];
        }), d = j(d), Za(A, n, function(B, s) {
          return d(B, s[0]);
        }));
      }
      var ti = CB(_A), di = CB($A);
      function Ze(A) {
        return A == null ? [] : un(A, _A(A));
      }
      var L0 = Xe(function(A, d, n) {
        return d = d.toLowerCase(), A + (n ? ri(d) : d);
      });
      function ri(A) {
        return Yn(BA(A).toLowerCase());
      }
      function ni(A) {
        return (A = BA(A)) && A.replace(Zo, lf).replace($o, "");
      }
      var _0 = Xe(function(A, d, n) {
        return A + (n ? "-" : "") + d.toLowerCase();
      }), S0 = Xe(function(A, d, n) {
        return A + (n ? " " : "") + d.toLowerCase();
      }), M0 = sB("toLowerCase"), O0 = Xe(function(A, d, n) {
        return A + (n ? "_" : "") + d.toLowerCase();
      }), T0 = Xe(function(A, d, n) {
        return A + (n ? " " : "") + Yn(d);
      }), k0 = Xe(function(A, d, n) {
        return A + (n ? " " : "") + d.toUpperCase();
      }), Yn = sB("toUpperCase");
      function ci(A, d, n) {
        return A = BA(A), (d = n ? e : d) === e ? (n = A, ef.test(n) ? A.match(Af) || [] : A.match(Go) || []) : A.match(d) || [];
      }
      var ai = tA(function(A, d) {
        try {
          return eu(A, e, d);
        } catch (n) {
          return Nn(n) ? n : new W(n);
        }
      }), G0 = Ju(function(A, d) {
        return iu(d, function(n) {
          n = Lu(n), Ru(A, n, kn(A[n], A));
        }), A;
      });
      function Wn(A) {
        return function() {
          return A;
        };
      }
      var V0 = fB(), R0 = fB(!0);
      function Au(A) {
        return A;
      }
      function Zn(A) {
        return Na(typeof A == "function" ? A : ou(A, 1));
      }
      var N0 = tA(function(A, d) {
        return function(n) {
          return Dt(n, A, d);
        };
      }), J0 = tA(function(A, d) {
        return function(n) {
          return Dt(A, n, d);
        };
      });
      function jn(A, d, n) {
        var B = _A(d), s = wd(d, B), l = (n != null || UA(d) && (s.length || !B.length) || (n = d, d = A, A = this, s = wd(d, _A(d))), !(UA(n) && "chain" in n && !n.chain)), C = Xu(A);
        return iu(s, function(w) {
          var h = d[w];
          A[w] = h, C && (A.prototype[w] = function() {
            var E, p = this.__chain__;
            return l || p ? (((E = A(this.__wrapped__)).__actions__ = zA(this.__actions__)).push({ func: h, args: arguments, thisArg: A }), E.__chain__ = p, E) : h.apply(A, qu([this.value()], arguments));
          });
        }), A;
      }
      function zn() {
      }
      var P0 = bn(QA), X0 = bn(la), Y0 = bn(jr);
      function Bi(A) {
        return xn(A) ? zr(Lu(A)) : (d = A, function(n) {
          return Ue(n, d);
        });
        var d;
      }
      var W0 = gB(), Z0 = gB(!0);
      function qn() {
        return [];
      }
      function $n() {
        return !1;
      }
      var j0 = bd(function(A, d) {
        return A + d;
      }, 0), z0 = mn("ceil"), q0 = bd(function(A, d) {
        return A / d;
      }, 1), $0 = mn("floor"), Ac, Al = bd(function(A, d) {
        return A * d;
      }, 1), ul = mn("round"), el = bd(function(A, d) {
        return A - d;
      }, 0);
      return o.after = function(A, d) {
        if (typeof d != "function")
          throw new su(r);
        return A = AA(A), function() {
          if (--A < 1)
            return d.apply(this, arguments);
        };
      }, o.ary = RB, o.assign = D0, o.assignIn = Ai, o.assignInWith = Td, o.assignWith = p0, o.at = E0, o.before = NB, o.bind = kn, o.bindAll = G0, o.bindKey = JB, o.castArray = function() {
        var A;
        return arguments.length ? q(A = arguments[0]) ? A : [A] : [];
      }, o.chain = kB, o.chunk = function(A, d, n) {
        d = (n ? XA(A, d, n) : d === e) ? 1 : xA(AA(d), 0);
        var B = A == null ? 0 : A.length;
        if (!B || d < 1)
          return [];
        for (var s = 0, l = 0, C = H(fd(B / d)); s < B; )
          C[l++] = fu(A, s, s += d);
        return C;
      }, o.compact = function(A) {
        for (var d = -1, n = A == null ? 0 : A.length, B = 0, s = []; ++d < n; ) {
          var l = A[d];
          l && (s[B++] = l);
        }
        return s;
      }, o.concat = function() {
        var A = arguments.length;
        if (!A)
          return [];
        for (var d = H(A - 1), n = arguments[0], B = A; B--; )
          d[B - 1] = arguments[B];
        return qu(q(n) ? zA(n) : [n], OA(d, 1));
      }, o.cond = function(A) {
        var d = A == null ? 0 : A.length, n = j();
        return A = d ? QA(A, function(B) {
          if (typeof B[1] != "function")
            throw new su(r);
          return [n(B[0]), B[1]];
        }) : [], tA(function(B) {
          for (var s = -1; ++s < d; ) {
            var l = A[s];
            if (eu(l[0], this, B))
              return eu(l[1], this, B);
          }
        });
      }, o.conforms = function(A) {
        return d = ou(A, 1), n = _A(d), function(B) {
          return Sa(B, d, n);
        };
        var d, n;
      }, o.constant = Wn, o.countBy = c0, o.create = function(A, d) {
        return A = Je(A), d == null ? A : _a(A, d);
      }, o.curry = function A(d, n, B) {
        return d = Nu(d, 8, e, e, e, e, e, n = B ? e : n), d.placeholder = A.placeholder, d;
      }, o.curryRight = function A(d, n, B) {
        return d = Nu(d, i, e, e, e, e, e, n = B ? e : n), d.placeholder = A.placeholder, d;
      }, o.debounce = PB, o.defaults = b0, o.defaultsDeep = m0, o.defer = Gn, o.delay = g0, o.difference = vu, o.differenceBy = Ct, o.differenceWith = cA, o.drop = function(A, d, n) {
        var B = A == null ? 0 : A.length;
        return B ? fu(A, (d = n || d === e ? 1 : AA(d)) < 0 ? 0 : d, B) : [];
      }, o.dropRight = function(A, d, n) {
        var B = A == null ? 0 : A.length;
        return B ? fu(A, 0, (d = B - (d = n || d === e ? 1 : AA(d))) < 0 ? 0 : d) : [];
      }, o.dropRightWhile = function(A, d) {
        return A && A.length ? Dd(A, j(d, 3), !0, !0) : [];
      }, o.dropWhile = function(A, d) {
        return A && A.length ? Dd(A, j(d, 3), !0) : [];
      }, o.fill = function(A, d, n, B) {
        var s = A == null ? 0 : A.length;
        if (s) {
          n && typeof n != "number" && XA(A, d, n) && (n = 0, B = s);
          var l = A, C = d, w = n, h = B, s = l.length;
          for ((w = AA(w)) < 0 && (w = s < -w ? 0 : s + w), (h = h === e || s < h ? s : AA(h)) < 0 && (h += s), h = h < w ? 0 : qB(h); w < h; )
            l[w++] = C;
          return l;
        }
        return [];
      }, o.filter = function(A, d) {
        return (q(A) ? zu : Ta)(A, j(d, 3));
      }, o.flatMap = function(A, d) {
        return OA(xd(A, d), 1);
      }, o.flatMapDeep = function(A, d) {
        return OA(xd(A, d), U);
      }, o.flatMapDepth = function(A, d, n) {
        return n = n === e ? 1 : AA(n), OA(xd(A, d), n);
      }, o.flatten = SB, o.flattenDeep = function(A) {
        return A != null && A.length ? OA(A, U) : [];
      }, o.flattenDepth = function(A, d) {
        return A != null && A.length ? OA(A, d = d === e ? 1 : AA(d)) : [];
      }, o.flip = function(A) {
        return Nu(A, 512);
      }, o.flow = V0, o.flowRight = R0, o.fromPairs = function(A) {
        for (var d = -1, n = A == null ? 0 : A.length, B = {}; ++d < n; ) {
          var s = A[d];
          B[s[0]] = s[1];
        }
        return B;
      }, o.functions = function(A) {
        return A == null ? [] : wd(A, _A(A));
      }, o.functionsIn = function(A) {
        return A == null ? [] : wd(A, $A(A));
      }, o.groupBy = i0, o.initial = function(A) {
        return A != null && A.length ? fu(A, 0, -1) : [];
      }, o.intersection = Ge, o.intersectionBy = tn, o.intersectionWith = TA, o.invert = H0, o.invertBy = y0, o.invokeMap = s0, o.iteratee = Zn, o.keyBy = o0, o.keys = _A, o.keysIn = $A, o.map = xd, o.mapKeys = function(A, d) {
        var n = {};
        return d = j(d, 3), Ku(A, function(B, s, l) {
          Ru(n, d(B, s, l), B);
        }), n;
      }, o.mapValues = function(A, d) {
        var n = {};
        return d = j(d, 3), Ku(A, function(B, s, l) {
          Ru(n, s, d(B, s, l));
        }), n;
      }, o.matches = function(A) {
        return Pa(ou(A, 1));
      }, o.matchesProperty = function(A, d) {
        return Xa(A, ou(d, 1));
      }, o.memoize = _d, o.merge = v0, o.mergeWith = ui, o.method = N0, o.methodOf = J0, o.mixin = jn, o.negate = Sd, o.nthArg = function(A) {
        return A = AA(A), tA(function(d) {
          return Ya(d, A);
        });
      }, o.omit = K0, o.omitBy = function(A, d) {
        return ei(A, Sd(j(d)));
      }, o.once = function(A) {
        return NB(2, A);
      }, o.orderBy = function(A, d, n, B) {
        return A == null ? [] : Wa(A, d = q(d) ? d : d == null ? [] : [d], n = q(n = B ? e : n) ? n : n == null ? [] : [n]);
      }, o.over = P0, o.overArgs = Vn, o.overEvery = X0, o.overSome = Y0, o.partial = Rn, o.partialRight = XB, o.partition = f0, o.pick = x0, o.pickBy = ei, o.property = Bi, o.propertyOf = function(A) {
        return function(d) {
          return A == null ? e : Ue(A, d);
        };
      }, o.pull = Ve, o.pullAll = OB, o.pullAllBy = function(A, d, n) {
        return A && A.length && d && d.length ? Fn(A, d, j(n, 2)) : A;
      }, o.pullAllWith = function(A, d, n) {
        return A && A.length && d && d.length ? Fn(A, d, e, n) : A;
      }, o.pullAt = jf, o.range = W0, o.rangeRight = Z0, o.rearg = F0, o.reject = function(A, d) {
        return (q(A) ? zu : Ta)(A, Sd(j(d, 3)));
      }, o.remove = function(A, d) {
        var n = [];
        if (A && A.length) {
          var B = -1, s = [], l = A.length;
          for (d = j(d, 3); ++B < l; ) {
            var C = A[B];
            d(C, B, A) && (n.push(C), s.push(B));
          }
          ja(A, s);
        }
        return n;
      }, o.rest = function(A, d) {
        if (typeof A != "function")
          throw new su(r);
        return tA(A, d = d === e ? d : AA(d));
      }, o.reverse = On, o.sampleSize = function(A, d, n) {
        return d = (n ? XA(A, d, n) : d === e) ? 1 : AA(d), (q(A) ? Lf : Vf)(A, d);
      }, o.set = function(A, d, n) {
        return A == null ? A : Et(A, d, n);
      }, o.setWith = function(A, d, n, B) {
        return B = typeof B == "function" ? B : e, A == null ? A : Et(A, d, n, B);
      }, o.shuffle = function(A) {
        return (q(A) ? _f : Rf)(A);
      }, o.slice = function(A, d, n) {
        var B = A == null ? 0 : A.length;
        return B ? (n = n && typeof n != "number" && XA(A, d, n) ? (d = 0, B) : (d = d == null ? 0 : AA(d), n === e ? B : AA(n)), fu(A, d, n)) : [];
      }, o.sortBy = l0, o.sortedUniq = function(A) {
        return A && A.length ? qa(A) : [];
      }, o.sortedUniqBy = function(A, d) {
        return A && A.length ? qa(A, j(d, 2)) : [];
      }, o.split = function(A, d, n) {
        return n && typeof n != "number" && XA(A, d, n) && (d = n = e), (n = n === e ? y : n >>> 0) ? (A = BA(A)) && (typeof d == "string" || d != null && !Jn(d)) && !(d = du(d)) && Me(A) ? te(pu(A), 0, n) : A.split(d, n) : [];
      }, o.spread = function(A, d) {
        if (typeof A != "function")
          throw new su(r);
        return d = d == null ? 0 : xA(AA(d), 0), tA(function(s) {
          var B = s[d], s = te(s, 0, d);
          return B && qu(s, B), eu(A, this, s);
        });
      }, o.tail = function(A) {
        var d = A == null ? 0 : A.length;
        return d ? fu(A, 1, d) : [];
      }, o.take = function(A, d, n) {
        return A && A.length ? fu(A, 0, (d = n || d === e ? 1 : AA(d)) < 0 ? 0 : d) : [];
      }, o.takeRight = function(A, d, n) {
        var B = A == null ? 0 : A.length;
        return B ? fu(A, (d = B - (d = n || d === e ? 1 : AA(d))) < 0 ? 0 : d, B) : [];
      }, o.takeRightWhile = function(A, d) {
        return A && A.length ? Dd(A, j(d, 3), !1, !0) : [];
      }, o.takeWhile = function(A, d) {
        return A && A.length ? Dd(A, j(d, 3)) : [];
      }, o.tap = function(A, d) {
        return d(A), A;
      }, o.throttle = function(A, d, n) {
        var B = !0, s = !0;
        if (typeof A != "function")
          throw new su(r);
        return UA(n) && (B = "leading" in n ? !!n.leading : B, s = "trailing" in n ? !!n.trailing : s), PB(A, d, { leading: B, maxWait: d, trailing: s });
      }, o.thru = Kd, o.toArray = zB, o.toPairs = ti, o.toPairsIn = di, o.toPath = function(A) {
        return q(A) ? QA(A, Lu) : ru(A) ? [A] : zA(KB(BA(A)));
      }, o.toPlainObject = $B, o.transform = function(A, d, n) {
        var B, s = q(A), l = s || de(A) || We(A);
        return d = j(d, 4), n == null && (B = A && A.constructor, n = l ? s ? new B() : [] : UA(A) && Xu(B) ? Je(id(A)) : {}), (l ? iu : Ku)(A, function(C, w, h) {
          return d(n, C, w, h);
        }), n;
      }, o.unary = function(A) {
        return RB(A, 1);
      }, o.union = zf, o.unionBy = qf, o.unionWith = $f, o.uniq = function(A) {
        return A && A.length ? ue(A) : [];
      }, o.uniqBy = function(A, d) {
        return A && A.length ? ue(A, j(d, 2)) : [];
      }, o.uniqWith = function(A, d) {
        return d = typeof d == "function" ? d : e, A && A.length ? ue(A, e, d) : [];
      }, o.unset = function(A, d) {
        return A == null || hn(A, d);
      }, o.unzip = Tn, o.unzipWith = TB, o.update = function(A, d, n) {
        return A == null ? A : AB(A, d, pn(n));
      }, o.updateWith = function(A, d, n, B) {
        return B = typeof B == "function" ? B : e, A == null ? A : AB(A, d, pn(n), B);
      }, o.values = Ze, o.valuesIn = function(A) {
        return A == null ? [] : un(A, $A(A));
      }, o.without = A0, o.words = ci, o.wrap = function(A, d) {
        return Rn(pn(d), A);
      }, o.xor = u0, o.xorBy = e0, o.xorWith = t0, o.zip = d0, o.zipObject = function(A, d) {
        return eB(A || [], d || [], ht);
      }, o.zipObjectDeep = function(A, d) {
        return eB(A || [], d || [], Et);
      }, o.zipWith = r0, o.entries = ti, o.entriesIn = di, o.extend = Ai, o.extendWith = Td, jn(o, o), o.add = j0, o.attempt = ai, o.camelCase = L0, o.capitalize = ri, o.ceil = z0, o.clamp = function(A, d, n) {
        return n === e && (n = d, d = e), n !== e && (n = (n = Fu(n)) == n ? n : 0), d !== e && (d = (d = Fu(d)) == d ? d : 0), he(Fu(A), d, n);
      }, o.clone = function(A) {
        return ou(A, 4);
      }, o.cloneDeep = function(A) {
        return ou(A, 5);
      }, o.cloneDeepWith = function(A, d) {
        return ou(A, 5, d = typeof d == "function" ? d : e);
      }, o.cloneWith = function(A, d) {
        return ou(A, 4, d = typeof d == "function" ? d : e);
      }, o.conformsTo = function(A, d) {
        return d == null || Sa(A, d, _A(d));
      }, o.deburr = ni, o.defaultTo = function(A, d) {
        return A == null || A != A ? d : A;
      }, o.divide = q0, o.endsWith = function(A, d, n) {
        A = BA(A), d = du(d);
        var B = A.length, B = n = n === e ? B : he(AA(n), 0, B);
        return 0 <= (n -= d.length) && A.slice(n, B) == d;
      }, o.eq = mu, o.escape = function(A) {
        return (A = BA(A)) && Io.test(A) ? A.replace(jc, gf) : A;
      }, o.escapeRegExp = function(A) {
        return (A = BA(A)) && So.test(A) ? A.replace(Nr, "\\$&") : A;
      }, o.every = function(A, d, n) {
        return (q(A) ? la : Mf)(A, j(d = n && XA(A, d, n) ? e : d, 3));
      }, o.find = a0, o.findIndex = LB, o.findKey = function(A, d) {
        return ga(A, j(d, 3), Ku);
      }, o.findLast = B0, o.findLastIndex = _B, o.findLastKey = function(A, d) {
        return ga(A, j(d, 3), Bn);
      }, o.floor = $0, o.forEach = GB, o.forEachRight = VB, o.forIn = function(A, d) {
        return A == null ? A : an(A, j(d, 3), $A);
      }, o.forInRight = function(A, d) {
        return A == null ? A : ka(A, j(d, 3), $A);
      }, o.forOwn = function(A, d) {
        return A && Ku(A, j(d, 3));
      }, o.forOwnRight = function(A, d) {
        return A && Bn(A, j(d, 3));
      }, o.get = Pn, o.gt = C0, o.gte = Q0, o.has = function(A, d) {
        return A != null && DB(A, d, Of);
      }, o.hasIn = Xn, o.head = MB, o.identity = Au, o.includes = function(A, d, n, B) {
        return A = qA(A) ? A : Ze(A), n = n && !B ? AA(n) : 0, B = A.length, n < 0 && (n = xA(B + n, 0)), Od(A) ? n <= B && -1 < A.indexOf(d, n) : !!B && -1 < Se(A, d, n);
      }, o.indexOf = function(A, d, n) {
        var B = A == null ? 0 : A.length;
        return B ? Se(A, d, A = (A = n == null ? 0 : AA(n)) < 0 ? xA(B + A, 0) : A) : -1;
      }, o.inRange = function(A, d, n) {
        return d = Yu(d), n === e ? (n = d, d = 0) : n = Yu(n), (A = A = Fu(A)) >= VA(d = d, n = n) && A < xA(d, n);
      }, o.invoke = I0, o.isArguments = Ee, o.isArray = q, o.isArrayBuffer = w0, o.isArrayLike = qA, o.isArrayLikeObject = EA, o.isBoolean = function(A) {
        return A === !0 || A === !1 || DA(A) && PA(A) == G;
      }, o.isBuffer = de, o.isDate = gu, o.isElement = function(A) {
        return DA(A) && A.nodeType === 1 && !yt(A);
      }, o.isEmpty = function(A) {
        if (A != null) {
          if (qA(A) && (q(A) || typeof A == "string" || typeof A.splice == "function" || de(A) || We(A) || Ee(A)))
            return !A.length;
          var d, n = RA(A);
          if (n == R || n == IA)
            return !A.size;
          if (mt(A))
            return !ln(A).length;
          for (d in A)
            if (sA.call(A, d))
              return !1;
        }
        return !0;
      }, o.isEqual = function(A, d) {
        return pt(A, d);
      }, o.isEqualWith = function(A, d, n) {
        var B = (n = typeof n == "function" ? n : e) ? n(A, d) : e;
        return B === e ? pt(A, d, e, n) : !!B;
      }, o.isError = Nn, o.isFinite = function(A) {
        return typeof A == "number" && Ia(A);
      }, o.isFunction = Xu, o.isInteger = YB, o.isLength = Md, o.isMap = WB, o.isMatch = function(A, d) {
        return A === d || fn(A, d, vn(d));
      }, o.isMatchWith = function(A, d, n) {
        return n = typeof n == "function" ? n : e, fn(A, d, vn(d), n);
      }, o.isNaN = function(A) {
        return ZB(A) && A != +A;
      }, o.isNative = function(A) {
        if (Zf(A))
          throw new W("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
        return Ra(A);
      }, o.isNil = function(A) {
        return A == null;
      }, o.isNull = function(A) {
        return A === null;
      }, o.isNumber = ZB, o.isObject = UA, o.isObjectLike = DA, o.isPlainObject = yt, o.isRegExp = Jn, o.isSafeInteger = function(A) {
        return YB(A) && -m <= A && A <= m;
      }, o.isSet = jB, o.isString = Od, o.isSymbol = ru, o.isTypedArray = We, o.isUndefined = function(A) {
        return A === e;
      }, o.isWeakMap = function(A) {
        return DA(A) && RA(A) == Bu;
      }, o.isWeakSet = function(A) {
        return DA(A) && PA(A) == "[object WeakSet]";
      }, o.join = function(A, d) {
        return A == null ? "" : pf.call(A, d);
      }, o.kebabCase = _0, o.last = lu, o.lastIndexOf = function(A, d, n) {
        var B = A == null ? 0 : A.length;
        if (B) {
          var s = B;
          if (n !== e && (s = (s = AA(n)) < 0 ? xA(B + s, 0) : VA(s, B - 1)), d == d) {
            var l = A, C = d;
            n = s;
            for (var w = n + 1; w--; )
              if (l[w] === C)
                return w;
            return w;
          } else
            return dd(A, Fa, s, !0);
        }
        return -1;
      }, o.lowerCase = S0, o.lowerFirst = M0, o.lt = h0, o.lte = U0, o.max = function(A) {
        return A && A.length ? Qd(A, Au, sn) : e;
      }, o.maxBy = function(A, d) {
        return A && A.length ? Qd(A, j(d, 2), sn) : e;
      }, o.mean = function(A) {
        return Ca(A, Au);
      }, o.meanBy = function(A, d) {
        return Ca(A, j(d, 2));
      }, o.min = function(A) {
        return A && A.length ? Qd(A, Au, gn) : e;
      }, o.minBy = function(A, d) {
        return A && A.length ? Qd(A, j(d, 2), gn) : e;
      }, o.stubArray = qn, o.stubFalse = $n, o.stubObject = function() {
        return {};
      }, o.stubString = function() {
        return "";
      }, o.stubTrue = function() {
        return !0;
      }, o.multiply = Al, o.nth = function(A, d) {
        return A && A.length ? Ya(A, AA(d)) : e;
      }, o.noConflict = function() {
        return MA._ === this && (MA._ = Uf), this;
      }, o.noop = zn, o.now = Ld, o.pad = function(A, d, n) {
        A = BA(A);
        var B = (d = AA(d)) ? Oe(A) : 0;
        return !d || d <= B ? A : md(ld(d = (d - B) / 2), n) + A + md(fd(d), n);
      }, o.padEnd = function(A, d, n) {
        A = BA(A);
        var B = (d = AA(d)) ? Oe(A) : 0;
        return d && B < d ? A + md(d - B, n) : A;
      }, o.padStart = function(A, d, n) {
        A = BA(A);
        var B = (d = AA(d)) ? Oe(A) : 0;
        return d && B < d ? md(d - B, n) + A : A;
      }, o.parseInt = function(A, d, n) {
        return d = n || d == null ? 0 : d && +d, mf(BA(A).replace(Jr, ""), d || 0);
      }, o.random = function(A, d, n) {
        var B;
        return n && typeof n != "boolean" && XA(A, d, n) && (d = n = e), n === e && (typeof d == "boolean" ? (n = d, d = e) : typeof A == "boolean" && (n = A, A = e)), A === e && d === e ? (A = 0, d = 1) : (A = Yu(A), d === e ? (d = A, A = 0) : d = Yu(d)), d < A && (B = A, A = d, d = B), n || A % 1 || d % 1 ? (B = va(), VA(A + B * (d - A + nf("1e-" + ((B + "").length - 1))), d)) : Cn(A, d);
      }, o.reduce = function(A, d, n) {
        var B = q(A) ? Zr : Qa, s = arguments.length < 3;
        return B(A, j(d, 4), n, s, Ae);
      }, o.reduceRight = function(A, d, n) {
        var B = q(A) ? sf : Qa, s = arguments.length < 3;
        return B(A, j(d, 4), n, s, Oa);
      }, o.repeat = function(A, d, n) {
        return d = (n ? XA(A, d, n) : d === e) ? 1 : AA(d), Qn(BA(A), d);
      }, o.replace = function() {
        var A = arguments, d = BA(A[0]);
        return A.length < 3 ? d : d.replace(A[1], A[2]);
      }, o.result = function(A, d, n) {
        var B = -1, s = (d = ee(d, A)).length;
        for (s || (s = 1, A = e); ++B < s; ) {
          var l = A == null ? e : A[Lu(d[B])];
          l === e && (B = s, l = n), A = Xu(l) ? l.call(A) : l;
        }
        return A;
      }, o.round = ul, o.runInContext = D, o.sample = function(A) {
        return (q(A) ? La : Gf)(A);
      }, o.size = function(A) {
        var d;
        return A == null ? 0 : qA(A) ? Od(A) ? Oe(A) : A.length : (d = RA(A)) == R || d == IA ? A.size : ln(A).length;
      }, o.snakeCase = O0, o.some = function(A, d, n) {
        return (q(A) ? jr : Nf)(A, j(d = n && XA(A, d, n) ? e : d, 3));
      }, o.sortedIndex = function(A, d) {
        return Ud(A, d);
      }, o.sortedIndexBy = function(A, d, n) {
        return wn(A, d, j(n, 2));
      }, o.sortedIndexOf = function(A, d) {
        var n = A == null ? 0 : A.length;
        if (n) {
          var B = Ud(A, d);
          if (B < n && mu(A[B], d))
            return B;
        }
        return -1;
      }, o.sortedLastIndex = function(A, d) {
        return Ud(A, d, !0);
      }, o.sortedLastIndexBy = function(A, d, n) {
        return wn(A, d, j(n, 2), !0);
      }, o.sortedLastIndexOf = function(A, d) {
        if (A != null && A.length) {
          var n = Ud(A, d, !0) - 1;
          if (mu(A[n], d))
            return n;
        }
        return -1;
      }, o.startCase = T0, o.startsWith = function(A, d, n) {
        return A = BA(A), n = n == null ? 0 : he(AA(n), 0, A.length), d = du(d), A.slice(n, n + d.length) == d;
      }, o.subtract = el, o.sum = function(A) {
        return A && A.length ? $r(A, Au) : 0;
      }, o.sumBy = function(A, d) {
        return A && A.length ? $r(A, j(d, 2)) : 0;
      }, o.template = function(A, d, p) {
        var B, s, h = o.templateSettings;
        p && XA(A, d, p) && (d = e), A = BA(A), d = Td({}, d, h, QB);
        var l = _A(p = Td({}, d.imports, h.imports, QB)), C = un(p, l), w = 0, h = d.interpolate || $t, E = "__p += '", p = lt((d.escape || $t).source + "|" + h.source + "|" + (h === zc ? No : $t).source + "|" + (d.evaluate || $t).source + "|$", "g"), v = "//# sourceURL=" + (sA.call(d, "sourceURL") ? (d.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++df + "]") + `
`;
        if (A.replace(p, function(_, Y, P, M, N, L) {
          return P = P || M, E += A.slice(w, L).replace(jo, Ff), Y && (B = !0, E += `' +
__e(` + Y + `) +
'`), N && (s = !0, E += `';
` + N + `;
__p += '`), P && (E += `' +
((__t = (` + P + `)) == null ? '' : __t) +
'`), w = L + _.length, _;
        }), E += `';
`, h = sA.call(d, "variable") && d.variable) {
          if (Vo.test(h))
            throw new W("Invalid `variable` option passed into `_.template`");
        } else
          E = `with (obj) {
` + E + `
}
`;
        if (E = (s ? E.replace(bo, "") : E).replace(mo, "$1").replace(Ho, "$1;"), E = "function(" + (h || "obj") + `) {
` + (h ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (B ? ", __e = _.escape" : "") + (s ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + E + `return __p
}`, (p = ai(function() {
          return z(l, v + "return " + E).apply(e, C);
        })).source = E, Nn(p))
          throw p;
        return p;
      }, o.times = function(A, d) {
        if ((A = AA(A)) < 1 || m < A)
          return [];
        var n = y, B = VA(A, y);
        for (d = j(d), A -= y, B = An(B, d); ++n < A; )
          d(n);
        return B;
      }, o.toFinite = Yu, o.toInteger = AA, o.toLength = qB, o.toLower = function(A) {
        return BA(A).toLowerCase();
      }, o.toNumber = Fu, o.toSafeInteger = function(A) {
        return A ? he(AA(A), -m, m) : A === 0 ? A : 0;
      }, o.toString = BA, o.toUpper = function(A) {
        return BA(A).toUpperCase();
      }, o.trim = function(A, d, n) {
        return (A = BA(A)) && (n || d === e) ? wa(A) : A && (d = du(d)) ? te(n = pu(A), ha(n, d = pu(d)), Ua(n, d) + 1).join("") : A;
      }, o.trimEnd = function(A, d, n) {
        return (A = BA(A)) && (n || d === e) ? A.slice(0, pa(A) + 1) : A && (d = du(d)) ? te(n = pu(A), 0, Ua(n, pu(d)) + 1).join("") : A;
      }, o.trimStart = function(A, d, n) {
        return (A = BA(A)) && (n || d === e) ? A.replace(Jr, "") : A && (d = du(d)) ? te(n = pu(A), ha(n, pu(d))).join("") : A;
      }, o.truncate = function(A, s) {
        var n, C = 30, B = "...", s = (UA(s) && (n = "separator" in s ? s.separator : n, C = "length" in s ? AA(s.length) : C, B = "omission" in s ? du(s.omission) : B), (A = BA(A)).length);
        if ((s = Me(A) ? (l = pu(A)).length : s) <= C)
          return A;
        if ((s = C - Oe(B)) < 1)
          return B;
        var l, C = l ? te(l, 0, s).join("") : A.slice(0, s);
        if (n !== e)
          if (l && (s += C.length - s), Jn(n)) {
            if (A.slice(s).search(n)) {
              var w, h = C;
              for ((n = n.global ? n : lt(n.source, BA(qc.exec(n)) + "g")).lastIndex = 0; w = n.exec(h); )
                var E = w.index;
              C = C.slice(0, E === e ? s : E);
            }
          } else
            A.indexOf(du(n), s) != s && -1 < (l = C.lastIndexOf(n)) && (C = C.slice(0, l));
        return C + B;
      }, o.unescape = function(A) {
        return (A = BA(A)) && yo.test(A) ? A.replace(Zc, Cf) : A;
      }, o.uniqueId = function(A) {
        var d = ++wf;
        return BA(A) + d;
      }, o.upperCase = k0, o.upperFirst = Yn, o.each = GB, o.eachRight = VB, o.first = MB, jn(o, (Ac = {}, Ku(o, function(A, d) {
        sA.call(o.prototype, d) || (Ac[d] = A);
      }), Ac), { chain: !1 }), o.VERSION = "4.17.21", iu(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(A) {
        o[A].placeholder = o;
      }), iu(["drop", "take"], function(A, d) {
        rA.prototype[A] = function(n) {
          n = n === e ? 1 : xA(AA(n), 0);
          var B = this.__filtered__ && !d ? new rA(this) : this.clone();
          return B.__filtered__ ? B.__takeCount__ = VA(n, B.__takeCount__) : B.__views__.push({ size: VA(n, y), type: A + (B.__dir__ < 0 ? "Right" : "") }), B;
        }, rA.prototype[A + "Right"] = function(n) {
          return this.reverse()[A](n).reverse();
        };
      }), iu(["filter", "map", "takeWhile"], function(A, d) {
        var n = d + 1, B = n == 1 || n == 3;
        rA.prototype[A] = function(s) {
          var l = this.clone();
          return l.__iteratees__.push({ iteratee: j(s, 3), type: n }), l.__filtered__ = l.__filtered__ || B, l;
        };
      }), iu(["head", "last"], function(A, d) {
        var n = "take" + (d ? "Right" : "");
        rA.prototype[A] = function() {
          return this[n](1).value()[0];
        };
      }), iu(["initial", "tail"], function(A, d) {
        var n = "drop" + (d ? "" : "Right");
        rA.prototype[A] = function() {
          return this.__filtered__ ? new rA(this) : this[n](1);
        };
      }), rA.prototype.compact = function() {
        return this.filter(Au);
      }, rA.prototype.find = function(A) {
        return this.filter(A).head();
      }, rA.prototype.findLast = function(A) {
        return this.reverse().find(A);
      }, rA.prototype.invokeMap = tA(function(A, d) {
        return typeof A == "function" ? new rA(this) : this.map(function(n) {
          return Dt(n, A, d);
        });
      }), rA.prototype.reject = function(A) {
        return this.filter(Sd(j(A)));
      }, rA.prototype.slice = function(A, d) {
        A = AA(A);
        var n = this;
        return n.__filtered__ && (0 < A || d < 0) ? new rA(n) : (A < 0 ? n = n.takeRight(-A) : A && (n = n.drop(A)), n = d !== e ? (d = AA(d)) < 0 ? n.dropRight(-d) : n.take(d - A) : n);
      }, rA.prototype.takeRightWhile = function(A) {
        return this.reverse().takeWhile(A).reverse();
      }, rA.prototype.toArray = function() {
        return this.take(y);
      }, Ku(rA.prototype, function(A, d) {
        var n = /^(?:filter|find|map|reject)|While$/.test(d), B = /^(?:head|last)$/.test(d), s = o[B ? "take" + (d == "last" ? "Right" : "") : d], l = B || /^find/.test(d);
        s && (o.prototype[d] = function() {
          function C(M) {
            return M = s.apply(o, qu([M], E)), B && v ? M[0] : M;
          }
          var w, h = this.__wrapped__, E = B ? [1] : arguments, P = h instanceof rA, _ = E[0], p = P || q(h), v = (p && n && typeof _ == "function" && _.length != 1 && (P = p = !1), this.__chain__), _ = !!this.__actions__.length, Y = l && !v, P = P && !_;
          return !l && p ? (h = P ? h : new rA(this), (w = A.apply(h, E)).__actions__.push({ func: Kd, args: [C], thisArg: e }), new Eu(w, v)) : Y && P ? A.apply(this, E) : (w = this.thru(C), Y ? B ? w.value()[0] : w.value() : w);
        });
      }), iu(["pop", "push", "shift", "sort", "splice", "unshift"], function(A) {
        var d = nd[A], n = /^(?:push|sort|unshift)$/.test(A) ? "tap" : "thru", B = /^(?:pop|shift)$/.test(A);
        o.prototype[A] = function() {
          var s, l = arguments;
          return B && !this.__chain__ ? (s = this.value(), d.apply(q(s) ? s : [], l)) : this[n](function(C) {
            return d.apply(q(C) ? C : [], l);
          });
        };
      }), Ku(rA.prototype, function(A, d) {
        var n, B = o[d];
        B && (n = B.name + "", sA.call(Ne, n) || (Ne[n] = []), Ne[n].push({ name: d, func: B }));
      }), Ne[Ed(e, 2).name] = [{ name: "wrapper", func: e }], rA.prototype.clone = function() {
        var A = new rA(this.__wrapped__);
        return A.__actions__ = zA(this.__actions__), A.__dir__ = this.__dir__, A.__filtered__ = this.__filtered__, A.__iteratees__ = zA(this.__iteratees__), A.__takeCount__ = this.__takeCount__, A.__views__ = zA(this.__views__), A;
      }, rA.prototype.reverse = function() {
        var A;
        return this.__filtered__ ? ((A = new rA(this)).__dir__ = -1, A.__filtered__ = !0) : (A = this.clone()).__dir__ *= -1, A;
      }, rA.prototype.value = function() {
        var A = this.__wrapped__.value(), d = this.__dir__, n = q(A), B = d < 0, s = n ? A.length : 0, l = function(J, X, aA) {
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
        }(0, s, this.__views__), C = l.start, w = (l = l.end) - C, h = B ? l : C - 1, E = this.__iteratees__, p = E.length, v = 0, _ = VA(w, this.__takeCount__);
        if (!n || !B && s == w && _ == w)
          return uB(A, this.__actions__);
        var Y = [];
        A:
          for (; w-- && v < _; ) {
            for (var P = -1, M = A[h += d]; ++P < p; ) {
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
        return kB(this);
      }, o.prototype.commit = function() {
        return new Eu(this.value(), this.__chain__);
      }, o.prototype.next = function() {
        this.__values__ === e && (this.__values__ = zB(this.value()));
        var A = this.__index__ >= this.__values__.length;
        return { done: A, value: A ? e : this.__values__[this.__index__++] };
      }, o.prototype.plant = function(A) {
        for (var d, s = this; s instanceof Fd; )
          var n = xB(s), B = (n.__index__ = 0, n.__values__ = e, d ? B.__wrapped__ = n : d = n, n), s = s.__wrapped__;
        return B.__wrapped__ = A, d;
      }, o.prototype.reverse = function() {
        var A = this.__wrapped__;
        return A instanceof rA ? (A = A, (A = (A = this.__actions__.length ? new rA(this) : A).reverse()).__actions__.push({ func: Kd, args: [On], thisArg: e }), new Eu(A, this.__chain__)) : this.thru(On);
      }, o.prototype.toJSON = o.prototype.valueOf = o.prototype.value = function() {
        return uB(this.__wrapped__, this.__actions__);
      }, o.prototype.first = o.prototype.head, gt && (o.prototype[gt] = function() {
        return this;
      }), o;
    }();
    Fe ? ((Fe.exports = Te)._ = Te, ge._ = Te) : MA._ = Te;
  }).call(It);
})(rl, pr);
const nl = pr;
function ii(i, u) {
  var e, r, c, a = { "\\rightarrow": "->", "\\leftarrow": "<-", "\\rightleftarrow": "<=>", "\\leftrightarrow": "<->" }, i = i.split("\\limits^");
  return u === 2 ? (r = i[0], c = i[1].split("}_{")[0].slice(1), e = i[1].split("}_{")[1].slice(0, i[1].split("}_{")[1].length - 1), r === "=" ? `\\ce{\\xlongequal[{${e}}]{${e}}}` : `\\ce{${a[r]}[{${c}}][{${e}}]}`) : u === 3 ? (r = i[0], c = i[1].split("{")[1].split("}")[0], r === "=" ? `\\ce{\\xlongequal{${c}}}` : `\\ce{${a[r]}[{${c}}]}`) : "";
}
function cl(t) {
  return t.replace(/((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}_\{[^}]+\}/g, (u) => ii(u, 2)).replace(/((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}/g, (u) => ii(u, 3));
}
const si = { "@": "æ", "u\\.\\.\\(r\\)": "{ʊə}^{r}", "\\.\\.": "ə", oi: "ɔɪ", ai: "aɪ", ei: "eɪ", "e(?!:)": "e", "e:": "ɜː", "\\(r\\)": "^{r}", "(![pr|\\\\underl])i(?![:|me])": "ɪ", "i:": "iː", "o(?!:)": "ɒ", "o:": "ɔː", au: "aʊ", Ou: "əʊ", "(.*!(\\\\))u(?!:)": "ʊ", "u:": "uː", ":": "ː", N: "ŋ", tS: "tʃ", S: "ʃ", th: "θ", TH: "ð", dZ: "dʒ", Z: "ʒ", prime: "prime" };
function al(t) {
  return t.replace(/\\\[\\phonetic\{.*?\}\\\]/g, (u) => {
    let e = u.split("\\phonetic").join("");
    for (let r in si)
      e = e.replace(new RegExp(r, "g"), (c) => si[r]);
    return e.replaceAll("\\^", "\\wedge");
  });
}
function Bl(t) {
  return t.replace(/\\fourlineruled\{\d+\}/g, (u) => {
    var e = Number(u.split("}")[0].split("{")[1]);
    let r = "\\class{fourlineruled}{";
    for (let c = 0; c < e; c++)
      r += "\\begin{array}{l}\\hline\\text{ }\\\\\\hline\\text{ }\\\\\\hline\\text{ }\\\\\\hline\\end{array}";
    return r += "}";
  });
}
function oi(e, u = "romannumeral") {
  var e = Number(e.split(u + "{")[1].split("}")[0]) / 10, r = Math.floor(e), c = Number((e + "").split(".")[1]);
  let a = "";
  if (0 < r)
    for (let i = 0; i < r; i++)
      a += "x";
  if (c < 4)
    for (let i = 0; i < c; i++)
      a += "i";
  if (c === 4 && (a += "iv"), c === 5 && (a += "v"), 5 < c && c < 9) {
    a += "v";
    for (let i = 5; i < c; i++)
      a += "i";
  }
  return c === 9 && (a += "ix"), c === 10 && (a += "x"), a = u === "RomanNumeralCaps" ? (a = (a = a.replace(/i/g, "I")).replace(/v/g, "V")).replace(/x/g, "X") : a;
}
function il(t) {
  return t.replace(/\\romannumeral\{\d+\}/g, (u) => `\\mathsf{${oi(u)}}`).replace(/\\RomanNumeralCaps\{\d+\}/g, (u) => `\\mathsf{${oi(u, "RomanNumeralCaps")}}`);
}
function sl(t) {
  const u = Array.from(t.matchAll(/[.,'"!\*\/\?、。;:]/g)), e = /\\style\{([\w-]+:[\w\d-]+;*)+\}/g, r = /((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}_\{[^}]+\}/g, c = /\\underline\{.*?\}/g, a = /\_\{.*?\}/g, i = /\^\{.*?\}/g, f = /\}[.,'"!\*\/\?、。;:]/g, g = /\\\[\\phonetic\{.*?\}\\\]/g, Q = /\\uwave\{.*?\}/g, F = /\\blank\{.+?\}\{\d+\/\d+\/(A|B|L)\}/g;
  return u.forEach((U, m) => {
    let b = !0;
    t.charAt(U.index - 1) === `
` && (b = !1), t.charAt(U.index + 1) !== "^" && t.charAt(U.index + 1) !== "_" || (b = !1);
    var O = Array.from(t.matchAll(e)).concat(Array.from(t.matchAll(r))), y = Array.from(t.matchAll(c)).map((R) => [R.index, R.index + R[0].length]), I = Array.from(t.matchAll(a)).map((R) => [R.index, R.index + R[0].length]), K = Array.from(t.matchAll(i)).map((R) => [R.index, R.index + R[0].length]), x = Array.from(t.matchAll(f)).map((R) => [R.index, R.index + R[0].length]), G = Array.from(t.matchAll(g)).map((R) => [R.index, R.index + R[0].length]), $ = Array.from(t.matchAll(Q)).map((R) => [R.index, R.index + R[0].length]), Z = Array.from(t.matchAll(F)).map((R) => [R.index, R.index + R[0].length]), O = O.map((R) => [R.index, R.index + R[0].length]).concat(y).concat(I).concat(K).concat(x).concat(G).concat($).concat(Z);
    if ((m < u.length - 1 && U.index + 1 === u[m + 1].index || 1 < m && U.index - 1 === u[m - 1].index) && (b = !1), b = -1 < O.findIndex((R) => U.index >= R[0] && U.index <= R[1]) ? !1 : b) {
      var nA = U[0];
      let R = `_\\class{mjx-kz-sub}{${nA}}`;
      ["'", '"'].includes(nA) && (R = `^\\class{mjx-kz-sup}{${nA}}`), t = t.substring(0, U.index) + R + t.substring(U.index + 1);
      for (let oA = m + 1; oA < u.length; oA++)
        u[oA].index += R.length - nA.length;
    }
  }), t;
}
function ol(t) {
  return t.replace(/\'/g, "\\textasciiacute{}").replace(/\"/g, "\\textacutedbl{}").replace(/\“/g, "\\textquotedblleft{}").replace(/\”/g, "\\textquotedblright{}");
}
function fl(t) {
  return t.replace(/(\\hand(?![a-zA-Z]))|(\\mix)|(\\deletion)|(\\insert)|(\\wrong)|(\\chnfield)|(\\engfield)|(<s>)|(<\/s>)|(<unk>)/g, (u) => " ");
}
function ll(t) {
  return t.replace(/\\tab\{\d+\}/g, (u) => {
    var e = Number(u.split("\\tab{")[1].split("}")[0]);
    let r = "";
    for (let c = 0; c < e; c++)
      r += "\\;\\;";
    return r;
  }).replace(/\\tab(?!le)/g, "\\;\\;");
}
function gl(t) {
  return t.replace(/[^\S\r]+/g, "\\;\\;");
}
function Fl(t) {
  return t.replace(/(\<)|(\\prime)|(\\alpha)|(\\Alpha)|(\\beta)|(\\Beta)|(\\gamma)|(\\Gamma)|(\\delta)|(\\Delta)|(\\epsilon)|(\\Epsilon)|(\\zeta)|(\\Zeta)|(\\eta)|(\\Eta)|(\\theta)|(\\Theta)|(\\iota)|(\\Iota)|(\\kappa)|(\\Kappa)|(\\lambda)|(\\Lambda)|(\\mu)|(\\Mu)|(\\nu)|(\\Nu)|(\\xi)|(\\Xi)|(\\omicron)|(\\Omicron)|(\\pi)|(\\Pi)|(\\rho)|(\\Rho)|(\\sigma)|(\\Sigma)|(\\tau)|(\\Tau)|(\\upsilon)|(\\Upsilon)|(\\phi)|(\\Phi)|(\\chi)|(\\Chi)|(\\psi)|(\\Psi)|(\\omega)|(\\Omega)|(\\pm(?!od))|(\\mp)|(\\times)|(\\div)|(\\mid)|(\\prod)|(\\sum(?!\_))|(\\approx(?!eq))|(\\leq)|(\\geq)|(\\neq(?!uiv))|(\\equiv)|(\\propto)|(\\napprox)|(\\nleq)|(\\ngeq)|(\\nequiv)|(\\angle)|(\\cong)|(\\sim)|(\\parallel(?!ogram)(?!equal))|(\\parallelogram)|(\\parallelequal)|(\\perp)|(\\nparallel)|(\\cdots)|(\\ddots)|(\\vdots)|(\\lor)|(\\land)|(\\lnot)|(\\forall)|(\\exists)|(\\top)|(\\bot)|(\\cup)|(\\cap)|(\\subset(?!(neq|eq)))|(\\supset(?!neq|eq))|(\\notin)|(\\ni)|(\\notni)|(\\emptyset)|(\\complement)|(\\subseteq)|(\\supseteq(?!eq))|(\\nsubset(?!eq))|(\\nsupset(?!eq))|(\\subsetneq)|(\\supsetneq)|(\\nsubseteq)|(\\nsupseteq)|(\\infty)|(\\partial)|(\\Re)|(\\lg)|(\\lim(?!its))|(\\ln)|(\\max)|(\\min)|(\\sin)|(\\cos)|(\\tan)|(\\sec)|(\\cot)|(\\csc)|(\\arcsin)|(\\arccos)|(\\arctan)|(\\arccot(?!angent))|(\\arcsec)|(\\arccsc)|(\\Leftarrow(?!\\limits))|(\\leftarrow(?!\\limits))|(\\Rightarrow(?!\\limits))|(\\rightarrow(?!\\limits))|(\\Uparrow)|(\\uparrow)|(\\Downarrow)|(\\downarrow)|(\\Leftrightarrow(?!\\limits))|(\\leftrightarrow(?!\\limits))|(\\Updownarrow)|(\\updownarrow)|(\\NEarrow)|(\\nearrow)|(\\NWarrow)|(\\nwarrow)|(\\SEarrow)|(\\searrow)|(\\SWarrow)|(\\swarrow)|(\\hookleftarrow)|(\\odot)|(\\ominus)|(\\oplus)|(\\otimes)|(\\oiiint)|(\\oiint)|(\\oint)|(\\diamond)|(\\square)|(\\rectangle)|(\\star)|(\\bigstar)|(\\triangle(?!down))|(\\triangledown)|(\\heart(?!suit))|(\\bullet)|(\\female)|(\\male)|(\\smiley)|(\\spadesuit)|(\\clubsuit)|(\\blackdiamond)|(\\blacksquare)|(\\blackrectangle)|(\\blackstar)|(\\blacktriangle(?!down))|(\\blacktriangledown)|(\\blackheart)|(\\textperthousand)|(\\textreferencemark)|(\\textregistered)|(\\textsection)|(\\texttrademark)|(\\cdot)|(\\because)|(\\therefore)|(\\chi)|(\\circledcirc)|(\\circ)|(\\xmark)|(\\cmark)|(\\in(?!(t|sert)))|(\\omitted)/g, (u) => u + "\\,");
}
function Cl(t) {
  return t.replace(/\n\[/g, (u) => "\\\\\\[");
}
function Ql(t) {
  return t.replace(/\*/g, "{*}").replace(/\n/g, "\\\\");
}
function wl(t) {
  return t.replace(/\\left\\{/g, (u) => "\\left\\{\\begin{array}{l}" + u.split("\\left\\{")[1]).replace(/\\right\\}/g, (u) => u.split("\\right\\}")[0] + "\\end{array}\\right.");
}
function hl(t) {
  return t.replace(/\\reverse\{.*?\}\{.*?\}/g, (u) => {
    var e = u.split("}{")[0].split("\\reverse{")[1];
    return "" + u.split("}{")[1].split("}")[0] + e;
  });
}
function Ul(t) {
  return t.replace(/\\parallel(?!ogram)(?!equal)/g, (u) => `\\class{parallel}{${u}}`);
}
const fi = { A: 2, B: 0, L: 1 };
function Dl(t, u) {
  return t.replace(/\\blank\{.+?\}\{\d+\/\d+\/(A|B|L)\}/g, (e) => {
    var r = e.match(/\\blank\{/), r = ((r == null ? void 0 : r.index) || 0) + (r[(r == null ? void 0 : r.index) || 0].length || 0), a = e.match(/\{\d+\/\d+\/(A|B|L)\}/), c = (a == null ? void 0 : a.index) || 0, a = a[0].slice(1, a[0].length - 1).split("/"), i = ((i = (i = MathJax == null ? void 0 : MathJax.config) == null ? void 0 : i.tex) == null ? void 0 : i.formatError) || ((i = MathJax == null ? void 0 : MathJax.tex) == null ? void 0 : i.formatError);
    return a[0] === "0" ? (i("", new Error("blank sign questionSubIdx should startwith 1")), e) : a[1] === "0" ? (i("", new Error("blank sign blankIdx should startwith 1")), e) : (r = e.slice(r, c - 1)).includes("\\blank") ? (i("", new Error("blank sign don't support nest")), e) : (e = `\\class{kbs i_${(c = parseInt(a[0])) - 1}_${(i = parseInt(a[1])) - 1}_${fi[a[2]]}}{\\,}`, c = `\\class{kbe i_${c - 1}_${i - 1}_${fi[a[2]]}}{\\,}`, i = u == null ? void 0 : u.blankLight, a[2] === "A" ? e + (i ? "\\class{bk_lg_1}{" : "") + r + (i ? "}" : "") + c + "{}" : e + (i ? "\\class{bk_lg_2}{" : "") + r + (i ? "}" : "") + c + "{}");
  });
}
function pl(t) {
  return t.replace(/\\underline\{.*?\}/g, (u) => {
    var e = u.split("\\underline{")[1];
    return e.split("}").length === 2 && 16 < e.split("}")[0].length ? "\\class{mjx-kz-underline}{{}" + e : u;
  });
}
function El(t) {
  let u = 0;
  for (let e = 0; e < t.length; e++)
    /[^\x00-\xff]/.test(t.substr(e, 1)) || [",", ".", "'", " "].includes(t.substr(e, 1)) ? u += 2.2 : u += 1;
  return u;
}
function bl(t) {
  return t.replace(/\\uwave\{.*?\}/g, (e) => {
    var e = e.split("\\uwave{")[1].split("}")[0], r = [], c = Math.floor(El(e));
    for (let a = 0; a < c; a++)
      r.push("\\thicksim");
    return `\\underset{\\class{wave}{${r.join("\\!")}}}{${e}}`;
  });
}
function ml(t) {
  return t.replace(/\\_(\{\d+\})/g, (u) => {
    let e = "";
    var r = Number(u.split("_{")[1].split("}")[0]);
    for (let c = 0; c < Number(r); c++)
      e += "\\_";
    return e;
  });
}
function Hl(t, u) {
  return t.replace(/(\\_)+/g, (e) => {
    var r = e.split("\\").length - 1;
    return u.lineOuterMax && r <= u.lineOuterMax ? `{${e}}` : e;
  });
}
class yl {
  constructor(u, e) {
    nt(this, "content"), nt(this, "options"), this.content = u, this.options = e;
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
    return this.content = il(this.content), this;
  }
  formatLimits() {
    return this.content = cl(this.content), this;
  }
  formatMiddleBrackets() {
    return this.content = Cl(this.content), this;
  }
  formatLineBreak() {
    return this.content = Ql(this.content), this;
  }
  formatSimultaneous() {
    return this.content = wl(this.content), this;
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
    return this.content = Bl(this.content), this;
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
function Il(t, u) {
  return t = new yl(t, u), t.formatUnderline().formatDeleteBySign().formatMultipleTab().formatAloneSign().formatOrder().formatLimits().formatMiddleBrackets().formatLineBreak().formatSimultaneous().formatPhonetic().formatUwave().formatQuotes().formatReverse().formatMultipleLine().formatFourlineRuled().formatSpace().formatLineWapper().formatItParallel().formatBlankSign(), t.content;
}
const CA = "xregexp", ve = { astral: !1, namespacing: !0 }, Su = {};
let vt = {}, tt = {};
const mc = [], ct = "default", li = "class", vl = { default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/, class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/ }, Kl = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g, xl = /()??/.exec("")[1] === void 0, Ll = /x/.flags !== void 0;
function zt(t) {
  let u = !0;
  try {
    new RegExp("", t), t === "y" && ".a".replace(new RegExp("a", "gy"), ".") === ".." && (u = !1);
  } catch {
    u = !1;
  }
  return u;
}
const _l = zt("d"), Jc = zt("s"), ms = zt("u"), Hc = zt("y"), Hs = { d: _l, g: !0, i: !0, m: !0, s: Jc, u: ms, y: Hc }, Sl = Jc ? /[^dgimsuy]+/g : /[^dgimuy]+/g;
function ys(t, u, e, r, c) {
  if (t[CA] = { captureNames: u }, !c) {
    if (t.__proto__)
      t.__proto__ = T.prototype;
    else
      for (const a in T.prototype)
        t[a] = T.prototype[a];
    t[CA].source = e, t[CA].flags = r && r.split("").sort().join("");
  }
  return t;
}
function Yt(t) {
  return t.replace(/([\s\S])(?=[\s\S]*\1)/g, "");
}
function Ie(t, u) {
  if (!T.isRegExp(t))
    throw new TypeError("Type RegExp expected");
  var e = t[CA] || {};
  let r = Ml(t), c = "", a = "", i = null, f = null;
  return (u = u || {}).removeG && (a += "g"), u.removeY && (a += "y"), a && (r = r.replace(new RegExp(`[${a}]+`, "g"), "")), u.addG && (c += "g"), u.addY && (c += "y"), c && (r = Yt(r + c)), u.isInternalOnly || (e.source !== void 0 && (i = e.source), e.flags != null && (f = c ? Yt(e.flags + c) : e.flags)), t = ys(new RegExp(u.source || t.source, r), Ol(t) ? e.captureNames.slice(0) : null, i, f, u.isInternalOnly);
}
function gi(t) {
  return parseInt(t, 16);
}
function Fi(t, u, e) {
  var r = t.index + t[0].length, c = t.input[t.index - 1], a = t.input[r];
  return /^[()|]$/.test(c) || /^[()|]$/.test(a) || t.index === 0 || r === t.input.length || /\(\?(?:[:=!]|<[=!])$/.test(t.input.substring(t.index - 4, t.index)) || Tl(t.input, r, e) ? "" : "(?:)";
}
function Ml(t) {
  return Ll ? t.flags : /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(t))[1];
}
function Ol(t) {
  return !(!t[CA] || !t[CA].captureNames);
}
function tc(t) {
  return parseInt(t, 10).toString(16);
}
function Tl(t, u, e) {
  var r = "\\(\\?#[^)]*\\)", c = "[?*+]|{\\d+(?:,\\d*)?}";
  return (e.includes("x") ? new RegExp(`^(?:\\s|#[^#\\n]*|${r})*(?:${c})`) : new RegExp(`^(?:${r})*(?:${c})`)).test(t.slice(u));
}
function Qr(t, u) {
  return Object.prototype.toString.call(t) === `[object ${u}]`;
}
function je(t) {
  if (t == null)
    throw new TypeError("Cannot convert null or undefined to object");
  return t;
}
function dc(t) {
  for (; t.length < 4; )
    t = "0" + t;
  return t;
}
function kl(t, u) {
  if (Yt(u) !== u)
    throw new SyntaxError("Invalid duplicate regex flag " + u);
  t = t.replace(/^\(\?([\w$]+)\)/, (e, r) => {
    if (/[dgy]/.test(r))
      throw new SyntaxError("Cannot use flags dgy in mode modifier " + e);
    return u = Yt(u + r), "";
  });
  for (const e of u)
    if (!Hs[e])
      throw new SyntaxError("Unknown regex flag " + e);
  return { pattern: t, flags: u };
}
function Ci(t) {
  const u = {};
  return Qr(t, "String") ? (T.forEach(t, /[^\s,]+/, (e) => {
    u[e] = !0;
  }), u) : t;
}
function Qi(t) {
  if (!/^[\w$]$/.test(t))
    throw new Error("Flag must be a single character A-Za-z0-9_$");
  Hs[t] = !0;
}
function Gl(t, u, e, r, c) {
  let a = mc.length;
  var i = t[e];
  let f = null, g, Q;
  for (; a--; )
    if (!((Q = mc[a]).leadChar && Q.leadChar !== i || Q.scope !== r && Q.scope !== "all" || Q.flag && !u.includes(Q.flag)) && (g = T.exec(t, Q.regex, e, "sticky"))) {
      f = { matchLength: g[0].length, output: Q.handler.call(c, g, r, u), reparse: Q.reparse };
      break;
    }
  return f;
}
function wi(t) {
  ve.astral = t;
}
function hi(t) {
  ve.namespacing = t;
}
function T(t, u) {
  if (T.isRegExp(t)) {
    if (u !== void 0)
      throw new TypeError("Cannot supply flags when copying a RegExp");
    return Ie(t);
  }
  if (t = t === void 0 ? "" : String(t), u = u === void 0 ? "" : String(u), T.isInstalled("astral") && !u.includes("A") && (u += "A"), tt[t] || (tt[t] = {}), !tt[t][u]) {
    var e = { hasNamedCapture: !1, captureNames: [] };
    let i = ct, f = "", g = 0, Q;
    var r = kl(t, u);
    let F = r.pattern;
    for (var c, a = r.flags; g < F.length; ) {
      for (; (Q = Gl(F, a, g, i, e)) && Q.reparse && (F = F.slice(0, g) + Q.output + F.slice(g + Q.matchLength)), Q && Q.reparse; )
        ;
      Q ? (f += Q.output, g += Q.matchLength || 1) : ([c] = T.exec(F, vl[i], g, "sticky"), f += c, g += c.length, c === "[" && i === ct ? i = li : c === "]" && i === li && (i = ct));
    }
    tt[t][u] = { pattern: f.replace(/(?:\(\?:\))+/g, "(?:)"), flags: a.replace(Sl, ""), captures: e.hasNamedCapture ? e.captureNames : null };
  }
  return r = tt[t][u], ys(new RegExp(r.pattern, r.flags), r.captures, t, u);
}
T.prototype = new RegExp(), T.version = "5.1.1", T._clipDuplicates = Yt, T._hasNativeFlag = zt, T._dec = gi, T._hex = tc, T._pad4 = dc, T.addToken = (t, u, e) => {
  let r = (e = e || {}).optionalFlags;
  if (e.flag && Qi(e.flag), r)
    for (const c of r = r.split(""))
      Qi(c);
  mc.push({ regex: Ie(t, { addG: !0, addY: Hc, isInternalOnly: !0 }), handler: u, scope: e.scope || ct, flag: e.flag, reparse: e.reparse, leadChar: e.leadChar }), T.cache.flush("patterns");
}, T.cache = (t, u) => (vt[t] || (vt[t] = {}), vt[t][u] || (vt[t][u] = T(t, u))), T.cache.flush = (t) => {
  t === "patterns" ? tt = {} : vt = {};
}, T.escape = (t) => String(je(t)).replace(/[\\\[\]{}()*+?.^$|]/g, "\\$&").replace(/[\s#\-,]/g, (u) => "\\u" + dc(tc(u.charCodeAt(0)))), T.exec = (t, u, e, r) => {
  let c = "g", a, i = !1, f;
  return (a = Hc && !!(r || u.sticky && r !== !1)) ? c += "y" : r && (i = !0, c += "FakeY"), u[CA] = u[CA] || {}, r = u[CA][c] || (u[CA][c] = Ie(u, { addG: !0, addY: a, source: i ? u.source + "|()" : void 0, removeY: r === !1, isInternalOnly: !0 })), r.lastIndex = e = e || 0, f = Su.exec.call(r, t), i && f && f.pop() === "" && (f = null), u.global && (u.lastIndex = f ? r.lastIndex : 0), f;
}, T.forEach = (t, u, e) => {
  let r = 0, c = -1, a;
  for (; a = T.exec(t, u, r); )
    e(a, ++c, t, u), r = a.index + (a[0].length || 1);
}, T.globalize = (t) => Ie(t, { addG: !0 }), T.install = (t) => {
  t = Ci(t), !ve.astral && t.astral && wi(!0), !ve.namespacing && t.namespacing && hi(!0);
}, T.isInstalled = (t) => !!ve[t], T.isRegExp = (t) => Object.prototype.toString.call(t) === "[object RegExp]", T.match = (a, u, e) => {
  var r = u.global && e !== "one" || e === "all", c = (r ? "g" : "") + (u.sticky ? "y" : "") || "noGY", c = (u[CA] = u[CA] || {}, u[CA][c] || (u[CA][c] = Ie(u, { addG: !!r, removeG: e === "one", isInternalOnly: !0 }))), a = String(je(a)).match(c);
  return u.global && (u.lastIndex = e === "one" && a ? a.index + a[0].length : 0), r ? a || [] : a && a[0];
}, T.matchChain = (t, u) => function e(r, c) {
  const a = u[c].regex ? u[c] : { regex: u[c] }, i = [];
  function f(g) {
    if (a.backref) {
      var Q = "Backreference to undefined group: " + a.backref, F = isNaN(a.backref);
      if (F && T.isInstalled("namespacing")) {
        if (!(g.groups && a.backref in g.groups))
          throw new ReferenceError(Q);
      } else if (!g.hasOwnProperty(a.backref))
        throw new ReferenceError(Q);
      Q = (F && T.isInstalled("namespacing") ? g.groups : g)[a.backref], i.push(Q || "");
    } else
      i.push(g[0]);
  }
  for (const g of r)
    T.forEach(g, a.regex, f);
  return c !== u.length - 1 && i.length ? e(i, c + 1) : i;
}([t], 0), T.replace = (t, u, e, r) => {
  var c = T.isRegExp(u), a = u.global && r !== "one" || r === "all", i = (a ? "g" : "") + (u.sticky ? "y" : "") || "noGY";
  let f = u;
  return c ? (u[CA] = u[CA] || {}, f = u[CA][i] || (u[CA][i] = Ie(u, { addG: !!a, removeG: r === "one", isInternalOnly: !0 }))) : a && (f = new RegExp(T.escape(String(u)), "g")), i = Su.replace.call(je(t), f, e), c && u.global && (u.lastIndex = 0), i;
}, T.replaceEach = (t, u) => {
  for (const e of u)
    t = T.replace(t, e[0], e[1], e[2]);
  return t;
}, T.split = (t, u, e) => Su.split.call(je(t), u, e), T.test = (t, u, e, r) => !!T.exec(t, u, e, r), T.uninstall = (t) => {
  t = Ci(t), ve.astral && t.astral && wi(!1), ve.namespacing && t.namespacing && hi(!1);
}, T.union = (t, u, e) => {
  e = (e = e || {}).conjunction || "or";
  let r = 0, c, a;
  function i(Q, F, U) {
    var m = a[r - c];
    if (F) {
      if (++r, m)
        return `(?<${m}>`;
    } else if (U)
      return "\\" + (+U + c);
    return Q;
  }
  if (!Qr(t, "Array") || !t.length)
    throw new TypeError("Must provide a nonempty array of patterns to merge");
  var f = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, g = [];
  for (const Q of t)
    T.isRegExp(Q) ? (c = r, a = Q[CA] && Q[CA].captureNames || [], g.push(T(Q.source).source.replace(f, i))) : g.push(T.escape(Q));
  return T(g.join(e === "none" ? "" : "|"), u);
}, Su.exec = function(t) {
  const u = this.lastIndex, e = RegExp.prototype.exec.apply(this, arguments);
  if (e) {
    var r;
    if (!xl && 1 < e.length && e.includes("") && (r = Ie(this, { removeG: !0, isInternalOnly: !0 }), String(t).slice(e.index).replace(r, (...a) => {
      var i = a.length;
      for (let f = 1; f < i - 2; ++f)
        a[f] === void 0 && (e[f] = void 0);
    })), this[CA] && this[CA].captureNames) {
      let a = e;
      T.isInstalled("namespacing") && (e.groups = /* @__PURE__ */ Object.create(null), a = e.groups);
      for (let i = 1; i < e.length; ++i) {
        var c = this[CA].captureNames[i - 1];
        c && (a[c] = e[i]);
      }
    } else
      !e.groups && T.isInstalled("namespacing") && (e.groups = void 0);
    this.global && !e[0].length && this.lastIndex > e.index && (this.lastIndex = e.index);
  }
  return this.global || (this.lastIndex = u), e;
}, Su.test = function(t) {
  return !!Su.exec.call(this, t);
}, Su.match = function(t) {
  var u;
  if (T.isRegExp(t)) {
    if (t.global)
      return u = String.prototype.match.apply(this, arguments), t.lastIndex = 0, u;
  } else
    t = new RegExp(t);
  return Su.exec.call(t, je(this));
}, Su.replace = function(t, u) {
  var e = T.isRegExp(t);
  let r, c, a;
  return e ? (t[CA] && ({ captureNames: c } = t[CA]), r = t.lastIndex) : t += "", a = Qr(u, "Function") ? String(this).replace(t, (...i) => {
    if (c) {
      let f;
      T.isInstalled("namespacing") ? (f = /* @__PURE__ */ Object.create(null), i.push(f)) : (i[0] = new String(i[0]), [f] = i);
      for (let g = 0; g < c.length; ++g)
        c[g] && (f[c[g]] = i[g + 1]);
    }
    return u(...i);
  }) : String(je(this)).replace(t, (...i) => String(u).replace(Kl, function(f, g, Q, F) {
    if (g = g || Q, Q = Qr(i[i.length - 1], "Object") ? 4 : 3, Q = i.length - Q, g) {
      if (/^\d+$/.test(g)) {
        var U = +g;
        if (U <= Q)
          return i[U] || "";
      }
      if (U = c ? c.indexOf(g) : -1, U < 0)
        throw new SyntaxError("Backreference to undefined group " + f);
      return i[U + 1] || "";
    }
    if (F === "" || F === " ")
      throw new SyntaxError("Invalid token " + f);
    if (F === "&" || +F == 0)
      return i[0];
    if (F === "$")
      return "$";
    if (F === "`")
      return i[i.length - 1].slice(0, i[i.length - 2]);
    if (F === "'")
      return i[i.length - 1].slice(i[i.length - 2] + i[0].length);
    if (F = +F, isNaN(F))
      throw new SyntaxError("Invalid token " + f);
    if (Q < F)
      throw new SyntaxError("Backreference to undefined group " + f);
    return i[F] || "";
  })), e && (t.global ? t.lastIndex = 0 : t.lastIndex = r), a;
}, Su.split = function(t, u) {
  if (!T.isRegExp(t))
    return String.prototype.split.apply(this, arguments);
  const e = String(this), r = [], c = t.lastIndex;
  let a = 0, i;
  return u = (u === void 0 ? -1 : u) >>> 0, T.forEach(e, t, (f) => {
    f.index + f[0].length > a && (r.push(e.slice(a, f.index)), 1 < f.length && f.index < e.length && Array.prototype.push.apply(r, f.slice(1)), i = f[0].length, a = f.index + i);
  }), a === e.length ? t.test("") && !i || r.push("") : r.push(e.slice(a)), t.lastIndex = c, r.length > u ? r.slice(0, u) : r;
}, T.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, (t, u) => {
  if (t[1] === "B" && u === ct)
    return t[0];
  throw new SyntaxError("Invalid escape " + t[0]);
}, { scope: "all", leadChar: "\\" }), T.addToken(/\\u{([\dA-Fa-f]+)}/, (t, u, e) => {
  var r = gi(t[1]);
  if (1114111 < r)
    throw new SyntaxError("Invalid Unicode code point " + t[0]);
  if (r <= 65535)
    return "\\u" + dc(tc(r));
  if (ms && e.includes("u"))
    return t[0];
  throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
}, { scope: "all", leadChar: "\\" }), T.addToken(/\(\?#[^)]*\)/, Fi, { leadChar: "(" }), T.addToken(/\s+|#[^\n]*\n?/, Fi, { flag: "x" }), Jc || T.addToken(/\./, () => "[\\s\\S]", { flag: "s", leadChar: "." }), T.addToken(/\\k<([^>]+)>/, function(t) {
  var u = isNaN(t[1]) ? this.captureNames.indexOf(t[1]) + 1 : +t[1], e = t.index + t[0].length;
  if (!u || u > this.captureNames.length)
    throw new SyntaxError("Backreference to undefined group " + t[0]);
  return "\\" + u + (e === t.input.length || isNaN(t.input[e]) ? "" : "(?:)");
}, { leadChar: "\\" }), T.addToken(/\\(\d+)/, function(t, u) {
  if (u === ct && /^[1-9]/.test(t[1]) && +t[1] <= this.captureNames.length || t[1] === "0")
    return t[0];
  throw new SyntaxError("Cannot use octal escape or backreference to undefined group " + t[0]);
}, { scope: "all", leadChar: "\\" }), T.addToken(/\(\?P?<((?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0898-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDEFD-\uDF1C\uDF27\uDF30-\uDF50\uDF70-\uDF85\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF42\uDF50-\uDF59\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC40-\uDC55]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDCD0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]|\uDB40[\uDD00-\uDDEF])*)>/, function(t) {
  if (!T.isInstalled("namespacing") && (t[1] === "length" || t[1] === "__proto__"))
    throw new SyntaxError("Cannot use reserved word as capture name " + t[0]);
  if (this.captureNames.includes(t[1]))
    throw new SyntaxError("Cannot use same name for multiple groups " + t[0]);
  return this.captureNames.push(t[1]), this.hasNamedCapture = !0, "(";
}, { leadChar: "(" }), T.addToken(/\((?!\?)/, function(t, u, e) {
  return e.includes("n") ? "(?:" : (this.captureNames.push(null), "(");
}, { optionalFlags: "n", leadChar: "(" });
const Vl = (t) => {
  const u = "xregexp", e = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, r = t.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, e], "g", { conjunction: "or" });
  function c(g, Q) {
    return Q = Q ? "x" : "", t.isRegExp(g) ? g[u] && g[u].captureNames ? g : t(g.source, Q) : t(g, Q);
  }
  function a(g) {
    return g instanceof RegExp ? g : t.escape(g);
  }
  function i(g, Q, F) {
    return g["subpattern" + F] = Q, g;
  }
  function f(g, Q, F) {
    return g + (Q < F.length - 1 ? `{{subpattern${Q}}}` : "");
  }
  t.tag = (g) => (Q, ...F) => (F = F.map(a).reduce(i, {}), Q = Q.raw.map(f).join(""), t.build(Q, F, g)), t.build = (g, Q, F) => {
    var U, m, b, y, I = (F = F || "").includes("x"), K = /^\(\?([\w$]+)\)/.exec(g);
    K && (F = t._clipDuplicates(F + K[1]));
    const x = {};
    for (const oA in Q)
      Q.hasOwnProperty(oA) && (U = c(Q[oA], I), x[oA] = { pattern: (m = U.source, y = b = void 0, y = /\$(?:\(\?:\))*$/, (b = /^(?:\(\?:\))*\^/).test(m) && y.test(m) && y.test(m.replace(/\\[\s\S]/g, "")) ? m.replace(b, "").replace(y, "") : m), names: U[u].captureNames || [] });
    K = c(g, I);
    let G = 0, $, Z = 0;
    const O = [0], nA = K[u].captureNames || [], R = K.source.replace(r, (oA, hA, JA, Du, IA) => {
      const vA = hA || JA;
      let GA, Bu, KA;
      if (vA) {
        if (!x.hasOwnProperty(vA))
          throw new ReferenceError("Undefined property " + oA);
        return Bu = hA ? (GA = nA[Z], O[++Z] = ++G, `(?<${GA || vA}>`) : "(?:", $ = G, JA = x[vA].pattern.replace(e, (ZA, it, fe) => {
          if (it) {
            if (GA = x[vA].names[G - $], ++G, GA)
              return `(?<${GA}>`;
          } else if (fe)
            return KA = +fe - 1, x[vA].names[KA] ? `\\k<${x[vA].names[KA]}>` : "\\" + (+fe + $);
          return ZA;
        }), "" + Bu + JA + ")";
      }
      if (Du) {
        if (GA = nA[Z], O[++Z] = ++G, GA)
          return `(?<${GA}>`;
      } else if (IA)
        return KA = +IA - 1, nA[KA] ? `\\k<${nA[KA]}>` : "\\" + O[+IA];
      return oA;
    });
    return t(R, F);
  };
}, Rl = (t) => {
  function u(e, r, c, a) {
    return { name: e, value: r, start: c, end: a };
  }
  t.matchRecursive = (e, r, c, a, i) => {
    i = i || {};
    var f = (a = a || "").includes("g"), g = a.includes("y"), Q = a.replace(/y/g, "");
    r = t(r, Q), c = t(c, Q);
    let F, U = i.escapeChar;
    if (U) {
      if (1 < U.length)
        throw new Error("Cannot use more than one escape character");
      U = t.escape(U), F = new RegExp(`(?:${U}[\\S\\s]|(?:(?!${t.union([r, c], "", { conjunction: "or" }).source})[^${U}])+)+`, a.replace(t._hasNativeFlag("s") ? /[^imsu]/g : /[^imu]/g, ""));
    }
    let m = 0, b = 0, y = 0, I = 0, K, x, G, $;
    for (var Z = i.valueNames, O = []; ; ) {
      if (U && (y += (t.exec(e, F, y, "sticky") || [""])[0].length), G = t.exec(e, r, y), $ = t.exec(e, c, y), G && $ && (G.index <= $.index ? $ = null : G = null), G || $)
        b = (G || $).index, y = b + (G || $)[0].length;
      else if (!m)
        break;
      if (g && !m && b > I)
        break;
      if (G)
        m || (K = b, x = y), m += 1;
      else if ($ && m) {
        if (!--m && (Z ? (Z[0] && K > I && O.push(u(Z[0], e.slice(I, K), I, K)), Z[1] && O.push(u(Z[1], e.slice(K, x), K, x)), Z[2] && O.push(u(Z[2], e.slice(x, b), x, b)), Z[3] && O.push(u(Z[3], e.slice(b, y), b, y))) : O.push(e.slice(x, b)), I = y, !f))
          break;
      } else {
        var nA, R, oA = i.unbalanced || "error";
        if (oA !== "skip" && oA !== "skip-lazy")
          throw oA === "error" ? (nA = $ ? "right" : "left", R = $ ? b : K, new Error(`Unbalanced ${nA} delimiter found in string at position ` + R)) : new Error("Unsupported value for unbalanced: " + oA);
        $ ? $ = null : (y = oA === "skip" ? (nA = t.exec(e, r, K, "sticky")[0].length, K + (nA || 1)) : K + 1, m = 0);
      }
      b === y && (y += 1);
    }
    return f && 0 < O.length && !g && Z && Z[0] && e.length > I && O.push(u(Z[0], e.slice(I), I, e.length)), O;
  };
}, Nl = (t) => {
  const u = {}, e = {}, r = t._dec, c = t._hex, a = t._pad4;
  function i(F) {
    return F.replace(/[- _]+/g, "").toLowerCase();
  }
  function f(F) {
    var U = /^\\[xu](.+)/.exec(F);
    return U ? r(U[1]) : F.charCodeAt(F[0] === "\\" ? 1 : 0);
  }
  function g(F) {
    return u[F]["b!"] || (u[F]["b!"] = function(U) {
      let m = "", b = -1;
      return t.forEach(U, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, (y) => {
        var I = f(y[1]);
        I > b + 1 && (m += "\\u" + a(c(b + 1)), I > b + 2) && (m += "-\\u" + a(c(I - 1))), b = f(y[2] || y[1]);
      }), b < 65535 && (m += "\\u" + a(c(b + 1)), b < 65534) && (m += "-\\uFFFF"), m;
    }(u[F].bmp));
  }
  function Q(F, U) {
    var m = U ? "a!" : "a=";
    return u[F][m] || (u[F][m] = function(b, y) {
      b = u[b];
      let I = "";
      return b.bmp && !b.isBmpLast && (I = `[${b.bmp}]` + (b.astral ? "|" : "")), b.astral && (I += b.astral), b.isBmpLast && b.bmp && (I += `${b.astral ? "|" : ""}[${b.bmp}]`), y ? `(?:(?!${I})(?:[�-�][�-�]|[\0-￿]))` : `(?:${I})`;
    }(F, U));
  }
  t.addToken(/\\([pP])(?:{(\^?)(?:(\w+)=)?([^}]*)}|([A-Za-z]))/, (y, U, m) => {
    var b = "Unknown Unicode token ", [y, I, K, x, G, $] = y;
    let Z = I === "P" || !!K;
    m = m.includes("A");
    let O = i($ || G), nA = u[O];
    if (I === "P" && K)
      throw new SyntaxError("Invalid double negation " + y);
    if (!u.hasOwnProperty(O))
      throw new SyntaxError(b + y);
    if (x && (!e[x] || !e[x][O]))
      throw new SyntaxError(b + y);
    if (nA.inverseOf) {
      if (O = i(nA.inverseOf), !u.hasOwnProperty(O))
        throw new ReferenceError("Unicode token missing data " + y + " -> " + nA.inverseOf);
      nA = u[O], Z = !Z;
    }
    if (!nA.bmp && !m)
      throw new SyntaxError("Astral mode required for Unicode token " + y);
    if (m) {
      if (U === "class")
        throw new SyntaxError("Astral mode does not support Unicode tokens within character classes");
      return Q(O, Z);
    }
    return U === "class" ? Z ? g(O) : nA.bmp : (Z ? "[^" : "[") + nA.bmp + "]";
  }, { scope: "all", optionalFlags: "A", leadChar: "\\" }), t.addUnicodeData = (F, U) => {
    U && (e[U] = {});
    for (const b of F) {
      if (!b.name)
        throw new Error("Unicode token requires name");
      if (!(b.inverseOf || b.bmp || b.astral))
        throw new Error("Unicode token has no character data " + b.name);
      var m = i(b.name);
      u[m] = b, U && (e[U][m] = !0), b.alias && (m = i(b.alias), u[m] = b, U) && (e[U][m] = !0);
    }
    t.cache.flush("patterns");
  }, t._getUnicodeProperty = (F) => (F = i(F), u[F]);
};
var Jl = [{ name: "C", alias: "Other", isBmpLast: !0, bmp: "\0--­͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-؅؜۝܎܏݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏-ࢗ࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿", astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCBD\uDCC3-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]" }, { name: "Cc", alias: "Control", bmp: "\0--" }, { name: "Cf", alias: "Format", bmp: "­؀-؅؜۝܏࢐࢑࣢᠎​-‏‪-‮⁠-⁤⁦-⁯\uFEFF￹-￻", astral: "\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]" }, { name: "Cn", alias: "Unassigned", bmp: "͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-׿܎݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏࢒-ࢗ঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿", astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCC3-\uDCCC\uDCCE\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F\uDC39-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]" }, { name: "Co", alias: "Private_Use", bmp: "-", astral: "[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]" }, { name: "Cs", alias: "Surrogate", bmp: "\uD800-\uDFFF" }, { name: "L", alias: "Letter", bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "LC", alias: "Cased_Letter", bmp: "A-Za-zµÀ-ÖØ-öø-ƺƼ-ƿǄ-ʓʕ-ʯͰ-ͳͶͷͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՠ-ֈႠ-ჅჇჍა-ჺჽ-ჿᎠ-Ᏽᏸ-ᏽᲀ-ᲈᲐ-ᲺᲽ-Ჿᴀ-ᴫᵫ-ᵷᵹ-ᶚḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⱻⱾ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭꙀ-ꙭꚀ-ꚛꜢ-ꝯꝱ-ꞇꞋ-ꞎꞐ-ꟊꟐꟑꟓꟕ-ꟙꟵꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚ", astral: "\uD801[\uDC00-\uDC4F\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD806[\uDCA0-\uDCDF]|\uD81B[\uDE40-\uDE7F]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD00-\uDD43]" }, { name: "Ll", alias: "Lowercase_Letter", bmp: "a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ", astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]" }, { name: "Lm", alias: "Modifier_Letter", bmp: "ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨࣉॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟲ-ꟴꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟꭩｰﾞﾟ", astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD838[\uDD37-\uDD3D]|𞥋" }, { name: "Lo", alias: "Other_Letter", bmp: "ªºƻǀ-ǃʔא-תׯ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣈऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳳᳵᳶᳺℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF4A\uDF50]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|𝼊|\uD838[\uDD00-\uDD2C\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Lt", alias: "Titlecase_Letter", bmp: "ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ" }, { name: "Lu", alias: "Uppercase_Letter", bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ", astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]" }, { name: "M", alias: "Mark", bmp: "̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣඁ-ඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-ᫎᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯", astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]" }, { name: "Mc", alias: "Spacing_Mark", bmp: "ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜ᜕᜴ាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡᳷〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦾ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬", astral: "\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD30-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]" }, { name: "Me", alias: "Enclosing_Mark", bmp: "҈҉᪾⃝-⃠⃢-⃤꙰-꙲" }, { name: "Mn", alias: "Nonspacing_Mark", bmp: "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣ৾ਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣૺ-૿ଁ଼ିୁ-ୄ୍୕ୖୢୣஂீ்ఀఄ఼ా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഀഁ഻഼ു-ൄ്ൢൣඁ්ි-ුූัิ-ฺ็-๎ັິ-ຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲᜳᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᪿ-ᫎᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꠬꣄ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꦽꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯", astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]" }, { name: "N", alias: "Number", bmp: "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９", astral: "\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]" }, { name: "Nd", alias: "Decimal_Number", bmp: "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９", astral: "\uD801[\uDCA0-\uDCA9]|\uD803[\uDD30-\uDD39]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9\uDD50-\uDD59]|\uD807[\uDC50-\uDC59\uDD50-\uDD59\uDDA0-\uDDA9]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDD50-\uDD59]|\uD83E[\uDFF0-\uDFF9]" }, { name: "Nl", alias: "Letter_Number", bmp: "ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ", astral: "\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]" }, { name: "No", alias: "Other_Number", bmp: "²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൘-൞൰-൸༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵", astral: "\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C\uDFC0-\uDFD4]|\uD81A[\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD83A[\uDCC7-\uDCCF]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]" }, { name: "P", alias: "Punctuation", bmp: "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹏⹒-⹝、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･", astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]" }, { name: "Pc", alias: "Connector_Punctuation", bmp: "_‿⁀⁔︳︴﹍-﹏＿" }, { name: "Pd", alias: "Dash_Punctuation", bmp: "\\-֊־᐀᠆‐-―⸗⸚⸺⸻⹀⹝〜〰゠︱︲﹘﹣－", astral: "𐺭" }, { name: "Pe", alias: "Close_Punctuation", bmp: "\\)\\]\\}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩⹖⹘⹚⹜〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣" }, { name: "Pf", alias: "Final_Punctuation", bmp: "»’”›⸃⸅⸊⸍⸝⸡" }, { name: "Pi", alias: "Initial_Punctuation", bmp: "«‘‛“‟‹⸂⸄⸉⸌⸜⸠" }, { name: "Po", alias: "Other_Punctuation", bmp: "!-#%-'\\*,\\.\\/:;\\?@\\¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁⹃-⹏⹒-⹔、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･", astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]" }, { name: "Ps", alias: "Open_Punctuation", bmp: "\\(\\[\\{༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂⹕⹗⹙⹛〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢" }, { name: "S", alias: "Symbol", bmp: "\\$\\+<->\\^`\\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶߾߿࢈৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-⃀℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛꭪꭫﬩﮲-﯂﵀-﵏﷏﷼-﷿﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�", astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]" }, { name: "Sc", alias: "Currency_Symbol", bmp: "\\$¢-¥֏؋߾߿৲৳৻૱௹฿៛₠-⃀꠸﷼﹩＄￠￡￥￦", astral: "\uD807[\uDFDD-\uDFE0]|𞋿|𞲰" }, { name: "Sk", alias: "Modifier_Symbol", bmp: "\\^`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅࢈᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛꭪꭫﮲-﯂＾｀￣", astral: "\uD83C[\uDFFB-\uDFFF]" }, { name: "Sm", alias: "Math_Symbol", bmp: "\\+<->\\|~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬", astral: "\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]" }, { name: "So", alias: "Other_Symbol", bmp: "¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൏൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﵀-﵏﷏﷽-﷿￤￨￭￮￼�", astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFDC\uDFE1-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|𞅏|\uD83B[\uDCAC\uDD2E]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]" }, { name: "Z", alias: "Separator", bmp: "    - \u2028\u2029  　" }, { name: "Zl", alias: "Line_Separator", bmp: "\u2028" }, { name: "Zp", alias: "Paragraph_Separator", bmp: "\u2029" }, { name: "Zs", alias: "Space_Separator", bmp: "    -   　" }];
const Pl = (t) => {
  if (!t.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
  t.addUnicodeData(Jl);
};
var Xl = [{ name: "ASCII", bmp: "\0-" }, { name: "Alphabetic", bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈְ-ׇֽֿׁׂׅׄא-תׯ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉࣔ-ࣣࣟ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱৼਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹ-ૼଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౝౠ-ౣಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೝೞೠ-ೣೱೲഀ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൔ-ൗൟ-ൣൺ-ൿඁ-ඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄຆ-ຊຌ-ຣລວ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ႏႚ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜓᜟ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡸᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᪿᫀᫌ-ᫎᬀ-ᬳᬵ-ᭃᭅ-ᭌᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰶᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠅꠇ-ꠧꡀ-ꡳꢀ-ꣃꣅꣲ-ꣷꣻꣽ-ꣿꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC71-\uDC75\uDC82-\uDCB8\uDCC2\uDCD0-\uDCE8\uDD00-\uDD32\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE\uDDCF\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDEB8\uDF00-\uDF1A\uDF1D-\uDF2A\uDF40-\uDF46]|\uD806[\uDC00-\uDC38\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD47\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Any", isBmpLast: !0, bmp: "\0-￿", astral: "[\uD800-\uDBFF][\uDC00-\uDFFF]" }, { name: "Default_Ignorable_Code_Point", bmp: "­͏؜ᅟᅠ឴឵᠋-᠏​-‏‪-‮⁠-⁯ㅤ︀-️\uFEFFﾠ￰-￸", astral: "\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB43][\uDC00-\uDFFF]" }, { name: "Lowercase", bmp: "a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟸ-ꟺꬰ-ꭚꭜ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ", astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDF80\uDF83-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]" }, { name: "Noncharacter_Code_Point", bmp: "﷐-﷯￾￿", astral: "[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]" }, { name: "Uppercase", bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ", astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]" }, { name: "White_Space", bmp: "	-\r    - \u2028\u2029  　" }];
const Yl = (t) => {
  if (!t.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
  var u = Xl;
  u.push({ name: "Assigned", inverseOf: "Cn" }), t.addUnicodeData(u);
};
var Wl = [{ name: "Adlam", astral: "\uD83A[\uDD00-\uDD4B\uDD50-\uDD59\uDD5E\uDD5F]" }, { name: "Ahom", astral: "\uD805[\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF46]" }, { name: "Anatolian_Hieroglyphs", astral: "\uD811[\uDC00-\uDE46]" }, { name: "Arabic", bmp: "؀-؄؆-؋؍-ؚ؜-؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࡰ-ࢎ࢐࢑࢘-ࣣ࣡-ࣿﭐ-﯂ﯓ-ﴽ﵀-ﶏﶒ-ﷇ﷏ﷰ-﷿ﹰ-ﹴﹶ-ﻼ", astral: "\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]" }, { name: "Armenian", bmp: "Ա-Ֆՙ-֊֍-֏ﬓ-ﬗ" }, { name: "Avestan", astral: "\uD802[\uDF00-\uDF35\uDF39-\uDF3F]" }, { name: "Balinese", bmp: "ᬀ-ᭌ᭐-᭾" }, { name: "Bamum", bmp: "ꚠ-꛷", astral: "\uD81A[\uDC00-\uDE38]" }, { name: "Bassa_Vah", astral: "\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]" }, { name: "Batak", bmp: "ᯀ-᯳᯼-᯿" }, { name: "Bengali", bmp: "ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৾" }, { name: "Bhaiksuki", astral: "\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C]" }, { name: "Bopomofo", bmp: "˪˫ㄅ-ㄯㆠ-ㆿ" }, { name: "Brahmi", astral: "\uD804[\uDC00-\uDC4D\uDC52-\uDC75\uDC7F]" }, { name: "Braille", bmp: "⠀-⣿" }, { name: "Buginese", bmp: "ᨀ-ᨛ᨞᨟" }, { name: "Buhid", bmp: "ᝀ-ᝓ" }, { name: "Canadian_Aboriginal", bmp: "᐀-ᙿᢰ-ᣵ", astral: "\uD806[\uDEB0-\uDEBF]" }, { name: "Carian", astral: "\uD800[\uDEA0-\uDED0]" }, { name: "Caucasian_Albanian", astral: "\uD801[\uDD30-\uDD63\uDD6F]" }, { name: "Chakma", astral: "\uD804[\uDD00-\uDD34\uDD36-\uDD47]" }, { name: "Cham", bmp: "ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟" }, { name: "Cherokee", bmp: "Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ" }, { name: "Chorasmian", astral: "\uD803[\uDFB0-\uDFCB]" }, { name: "Common", bmp: "\0-@\\[-`\\{-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·؅،؛؟ـ۝࣢।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵ-᳷ᳺ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-⃀℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮗-⯿⸀-⹝⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㋿㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛꭪꭫﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫\uFEFF！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�", astral: "\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9C\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD82F[\uDCA0-\uDCA3]|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDEE0-\uDEF3\uDF00-\uDF56\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD83B[\uDC71-\uDCB4\uDD01-\uDD3D]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDDAD\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA\uDFF0-\uDFF9]|\uDB40[\uDC01\uDC20-\uDC7F]" }, { name: "Coptic", bmp: "Ϣ-ϯⲀ-ⳳ⳹-⳿" }, { name: "Cuneiform", astral: "\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]" }, { name: "Cypriot", astral: "\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]" }, { name: "Cypro_Minoan", astral: "\uD80B[\uDF90-\uDFF2]" }, { name: "Cyrillic", bmp: "Ѐ-҄҇-ԯᲀ-ᲈᴫᵸⷠ-ⷿꙀ-ꚟ︮︯" }, { name: "Deseret", astral: "\uD801[\uDC00-\uDC4F]" }, { name: "Devanagari", bmp: "ऀ-ॐॕ-ॣ०-ॿ꣠-ꣿ" }, { name: "Dives_Akuru", astral: "\uD806[\uDD00-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD46\uDD50-\uDD59]" }, { name: "Dogra", astral: "\uD806[\uDC00-\uDC3B]" }, { name: "Duployan", astral: "\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]" }, { name: "Egyptian_Hieroglyphs", astral: "\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E\uDC30-\uDC38]" }, { name: "Elbasan", astral: "\uD801[\uDD00-\uDD27]" }, { name: "Elymaic", astral: "\uD803[\uDFE0-\uDFF6]" }, { name: "Ethiopic", bmp: "ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ", astral: "\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]" }, { name: "Georgian", bmp: "Ⴀ-ჅჇჍა-ჺჼ-ჿᲐ-ᲺᲽ-Ჿⴀ-ⴥⴧⴭ" }, { name: "Glagolitic", bmp: "Ⰰ-ⱟ", astral: "\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]" }, { name: "Gothic", astral: "\uD800[\uDF30-\uDF4A]" }, { name: "Grantha", astral: "\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]" }, { name: "Greek", bmp: "Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ", astral: "\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]" }, { name: "Gujarati", bmp: "ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ-૿" }, { name: "Gunjala_Gondi", astral: "\uD807[\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9]" }, { name: "Gurmukhi", bmp: "ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-੶" }, { name: "Han", bmp: "⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿿豈-舘並-龎", astral: "\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Hangul", bmp: "ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ" }, { name: "Hanifi_Rohingya", astral: "\uD803[\uDD00-\uDD27\uDD30-\uDD39]" }, { name: "Hanunoo", bmp: "ᜠ-᜴" }, { name: "Hatran", astral: "\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]" }, { name: "Hebrew", bmp: "֑-ׇא-תׯ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ" }, { name: "Hiragana", bmp: "ぁ-ゖゝ-ゟ", astral: "\uD82C[\uDC01-\uDD1F\uDD50-\uDD52]|🈀" }, { name: "Imperial_Aramaic", astral: "\uD802[\uDC40-\uDC55\uDC57-\uDC5F]" }, { name: "Inherited", bmp: "̀-ًͯ҅҆-ٰٕ॑-॔᪰-ᫎ᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭", astral: "\uD800[\uDDFD\uDEE0]|𑌻|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uDB40[\uDD00-\uDDEF]" }, { name: "Inscriptional_Pahlavi", astral: "\uD802[\uDF60-\uDF72\uDF78-\uDF7F]" }, { name: "Inscriptional_Parthian", astral: "\uD802[\uDF40-\uDF55\uDF58-\uDF5F]" }, { name: "Javanese", bmp: "ꦀ-꧍꧐-꧙꧞꧟" }, { name: "Kaithi", astral: "\uD804[\uDC80-\uDCC2\uDCCD]" }, { name: "Kannada", bmp: "ಀ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೝೞೠ-ೣ೦-೯ೱೲ" }, { name: "Katakana", bmp: "ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ", astral: "\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD64-\uDD67]" }, { name: "Kayah_Li", bmp: "꤀-꤭꤯" }, { name: "Kharoshthi", astral: "\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE50-\uDE58]" }, { name: "Khitan_Small_Script", astral: "𖿤|\uD822[\uDF00-\uDFFF]|\uD823[\uDC00-\uDCD5]" }, { name: "Khmer", bmp: "ក-៝០-៩៰-៹᧠-᧿" }, { name: "Khojki", astral: "\uD804[\uDE00-\uDE11\uDE13-\uDE3E]" }, { name: "Khudawadi", astral: "\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]" }, { name: "Lao", bmp: "ກຂຄຆ-ຊຌ-ຣລວ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ" }, { name: "Latin", bmp: "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꟿꬰ-ꭚꭜ-ꭤꭦ-ꭩﬀ-ﬆＡ-Ｚａ-ｚ", astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E]" }, { name: "Lepcha", bmp: "ᰀ-᰷᰻-᱉ᱍ-ᱏ" }, { name: "Limbu", bmp: "ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏" }, { name: "Linear_A", astral: "\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]" }, { name: "Linear_B", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]" }, { name: "Lisu", bmp: "ꓐ-꓿", astral: "𑾰" }, { name: "Lycian", astral: "\uD800[\uDE80-\uDE9C]" }, { name: "Lydian", astral: "\uD802[\uDD20-\uDD39\uDD3F]" }, { name: "Mahajani", astral: "\uD804[\uDD50-\uDD76]" }, { name: "Makasar", astral: "\uD807[\uDEE0-\uDEF8]" }, { name: "Malayalam", bmp: "ഀ-ഌഎ-ഐഒ-ൄെ-ൈൊ-൏ൔ-ൣ൦-ൿ" }, { name: "Mandaic", bmp: "ࡀ-࡛࡞" }, { name: "Manichaean", astral: "\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]" }, { name: "Marchen", astral: "\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]" }, { name: "Masaram_Gondi", astral: "\uD807[\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]" }, { name: "Medefaidrin", astral: "\uD81B[\uDE40-\uDE9A]" }, { name: "Meetei_Mayek", bmp: "ꫠ-꫶ꯀ-꯭꯰-꯹" }, { name: "Mende_Kikakui", astral: "\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]" }, { name: "Meroitic_Cursive", astral: "\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]" }, { name: "Meroitic_Hieroglyphs", astral: "\uD802[\uDD80-\uDD9F]" }, { name: "Miao", astral: "\uD81B[\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F]" }, { name: "Modi", astral: "\uD805[\uDE00-\uDE44\uDE50-\uDE59]" }, { name: "Mongolian", bmp: "᠀᠁᠄᠆-᠙ᠠ-ᡸᢀ-ᢪ", astral: "\uD805[\uDE60-\uDE6C]" }, { name: "Mro", astral: "\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]" }, { name: "Multani", astral: "\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]" }, { name: "Myanmar", bmp: "က-႟ꧠ-ꧾꩠ-ꩿ" }, { name: "Nabataean", astral: "\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]" }, { name: "Nandinagari", astral: "\uD806[\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE4]" }, { name: "New_Tai_Lue", bmp: "ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟" }, { name: "Newa", astral: "\uD805[\uDC00-\uDC5B\uDC5D-\uDC61]" }, { name: "Nko", bmp: "߀-ߺ߽-߿" }, { name: "Nushu", astral: "𖿡|\uD82C[\uDD70-\uDEFB]" }, { name: "Nyiakeng_Puachue_Hmong", astral: "\uD838[\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDD4F]" }, { name: "Ogham", bmp: " -᚜" }, { name: "Ol_Chiki", bmp: "᱐-᱿" }, { name: "Old_Hungarian", astral: "\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]" }, { name: "Old_Italic", astral: "\uD800[\uDF00-\uDF23\uDF2D-\uDF2F]" }, { name: "Old_North_Arabian", astral: "\uD802[\uDE80-\uDE9F]" }, { name: "Old_Permic", astral: "\uD800[\uDF50-\uDF7A]" }, { name: "Old_Persian", astral: "\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]" }, { name: "Old_Sogdian", astral: "\uD803[\uDF00-\uDF27]" }, { name: "Old_South_Arabian", astral: "\uD802[\uDE60-\uDE7F]" }, { name: "Old_Turkic", astral: "\uD803[\uDC00-\uDC48]" }, { name: "Old_Uyghur", astral: "\uD803[\uDF70-\uDF89]" }, { name: "Oriya", bmp: "ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍୕-ୗଡ଼ଢ଼ୟ-ୣ୦-୷" }, { name: "Osage", astral: "\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB]" }, { name: "Osmanya", astral: "\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]" }, { name: "Pahawh_Hmong", astral: "\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]" }, { name: "Palmyrene", astral: "\uD802[\uDC60-\uDC7F]" }, { name: "Pau_Cin_Hau", astral: "\uD806[\uDEC0-\uDEF8]" }, { name: "Phags_Pa", bmp: "ꡀ-꡷" }, { name: "Phoenician", astral: "\uD802[\uDD00-\uDD1B\uDD1F]" }, { name: "Psalter_Pahlavi", astral: "\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]" }, { name: "Rejang", bmp: "ꤰ-꥓꥟" }, { name: "Runic", bmp: "ᚠ-ᛪᛮ-ᛸ" }, { name: "Samaritan", bmp: "ࠀ-࠭࠰-࠾" }, { name: "Saurashtra", bmp: "ꢀ-ꣅ꣎-꣙" }, { name: "Sharada", astral: "\uD804[\uDD80-\uDDDF]" }, { name: "Shavian", astral: "\uD801[\uDC50-\uDC7F]" }, { name: "Siddham", astral: "\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]" }, { name: "SignWriting", astral: "\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]" }, { name: "Sinhala", bmp: "ඁ-ඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴", astral: "\uD804[\uDDE1-\uDDF4]" }, { name: "Sogdian", astral: "\uD803[\uDF30-\uDF59]" }, { name: "Sora_Sompeng", astral: "\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]" }, { name: "Soyombo", astral: "\uD806[\uDE50-\uDEA2]" }, { name: "Sundanese", bmp: "ᮀ-ᮿ᳀-᳇" }, { name: "Syloti_Nagri", bmp: "ꠀ-꠬" }, { name: "Syriac", bmp: "܀-܍܏-݊ݍ-ݏࡠ-ࡪ" }, { name: "Tagalog", bmp: "ᜀ-᜕ᜟ" }, { name: "Tagbanwa", bmp: "ᝠ-ᝬᝮ-ᝰᝲᝳ" }, { name: "Tai_Le", bmp: "ᥐ-ᥭᥰ-ᥴ" }, { name: "Tai_Tham", bmp: "ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭" }, { name: "Tai_Viet", bmp: "ꪀ-ꫂꫛ-꫟" }, { name: "Takri", astral: "\uD805[\uDE80-\uDEB9\uDEC0-\uDEC9]" }, { name: "Tamil", bmp: "ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺", astral: "\uD807[\uDFC0-\uDFF1\uDFFF]" }, { name: "Tangsa", astral: "\uD81A[\uDE70-\uDEBE\uDEC0-\uDEC9]" }, { name: "Tangut", astral: "𖿠|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEFF]|\uD823[\uDD00-\uDD08]" }, { name: "Telugu", bmp: "ఀ-ఌఎ-ఐఒ-నప-హ఼-ౄె-ైొ-్ౕౖౘ-ౚౝౠ-ౣ౦-౯౷-౿" }, { name: "Thaana", bmp: "ހ-ޱ" }, { name: "Thai", bmp: "ก-ฺเ-๛" }, { name: "Tibetan", bmp: "ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚" }, { name: "Tifinagh", bmp: "ⴰ-ⵧⵯ⵰⵿" }, { name: "Tirhuta", astral: "\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]" }, { name: "Toto", astral: "\uD838[\uDE90-\uDEAE]" }, { name: "Ugaritic", astral: "\uD800[\uDF80-\uDF9D\uDF9F]" }, { name: "Vai", bmp: "ꔀ-ꘫ" }, { name: "Vithkuqi", astral: "\uD801[\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]" }, { name: "Wancho", astral: "\uD838[\uDEC0-\uDEF9\uDEFF]" }, { name: "Warang_Citi", astral: "\uD806[\uDCA0-\uDCF2\uDCFF]" }, { name: "Yezidi", astral: "\uD803[\uDE80-\uDEA9\uDEAB-\uDEAD\uDEB0\uDEB1]" }, { name: "Yi", bmp: "ꀀ-ꒌ꒐-꓆" }, { name: "Zanabazar_Square", astral: "\uD806[\uDE00-\uDE47]" }];
const Zl = (t) => {
  if (!t.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
  t.addUnicodeData(Wl, "Script");
};
function Ui(t, u) {
  return t.slice(u, u + 2) === "\\\\" ? "$$" : "$";
}
function Di(t, u, e, r) {
  const c = t.split("\\\\");
  if (c.length) {
    let a = r ? "<div></div>" : "";
    if (e)
      return u + "\\mathrm{" + c.join(`}${u}${a}${u}\\mathrm{`) + "}" + u;
    {
      let i = "";
      return c.length === 1 ? i += "" + u + c[0] + u : c.forEach((f, g) => {
        1 < f.length && (i += "" + u + f + u), 1 < c.length && g < c.length - 1 && (i += a);
      }), i;
    }
  }
  return e ? `\\mathrm{${t}}` : t;
}
function jl(t, u, e, r) {
  if (t.match(/\\left\\{/g) || t.match(/\\class{fourlineruled}/g))
    return { content: t, __isChineseDivide: r = !1 };
  const c = T.matchRecursive(t, "{", "}", "g", { valueNames: ["inner", "left", "between", "right"], unbalanced: "skip-lazy" }).map((F) => {
    if (F.name === "between")
      return [F.start, F.end];
  }).filter((F) => F), a = Array.from(t.matchAll(/[\u4e00-\u9fa5]+/g));
  if (!a.length)
    return { content: t, __isChineseDivide: r = !1 };
  let i = "", f = 0;
  a.forEach((F) => {
    var U, m;
    c.some((b) => F.index >= b[0] && F.index <= b[1]) || ((U = t.slice(f, F.index)) && (m = Ui(U, 0), i += "" + Di(U, m, u, e)), i += `<span>${F[0]}</span>` || "", f = F.index + F[0].length);
  });
  var g, Q = t.slice(f);
  return Q && (g = Ui(Q, 0), i += "" + Di(Q, g, u, e)), { content: i, __isChineseDivide: r };
}
function zl(t, u) {
  let e = 0;
  return t.replace(/(\\_)+/g, (r) => {
    var c;
    let a = r.split("\\").length - 1, i = "", f = u && u.underlineClass && u.underlineClass.className && a >= u.underlineClass.min;
    for (let g = 0; g < Number(a); g++)
      i += `\\class{_u i_${e}${f ? " " + ((c = u == null ? void 0 : u.underlineClass) == null ? void 0 : c.className) : ""}}{\\_}`;
    return e++, i;
  });
}
function ql(t, u = nl.defaults({ wrapMathrm: !0, punctuation: !1, divideChinese: !1, lineBreak: !0, blankLight: !1 })) {
  if (!t)
    return "";
  t = Il(t = u.punctuation ? sl(t) : t, u), u.underlineClass && (t = zl(t, u));
  let e = u.divideChinese;
  var r;
  return u.divideChinese && (t = (r = jl(t, u.wrapMathrm, u.lineBreak, e)).content, e = r.__isChineseDivide), "" + (t = e ? t : (u.divideChinese ? "$$" : "") + (u.wrapMathrm ? "\\mathrm{" : "") + t + (u.wrapMathrm ? "}" : "") + (u.divideChinese ? "$$" : ""));
}
Vl(T), Rl(T), Nl(T), Pl(T), Yl(T), Zl(T);
const $l = { load: ["output/chtml", "input/tex", "[tex]/enclose", "[tex]/ams", "[tex]/noerrors", "[tex]/configmacros", "[tex]/mathtools", "[tex]/mhchem", "[tex]/unicode", "[tex]/textmacros", "[tex]/textcomp", "[tex]/cancel", "[tex]/extpfeil", "[tex]/html"] }, Ag = { "[+]": ["noerrors", "enclose", "ams", "mathtools", "mhchem", "unicode", "textcomp", "cancel", "extpfeil", "textmacros", "html"] }, ug = { "[": "[", "]": "]", "(": "(", ")": ")", "【": "【", "】": "】", NEarrow: "\\unicode{x21d7}", NWarrow: "\\unicode{x21d6}", SEarrow: "\\unicode{x21d8}", SWarrow: "\\unicode{x21d9}", textcircled: "\\enclose{circle}", romannumeral: "\\enclose{()}", arccot: "arccot", arccsc: "arccsc", arcsec: "arcsec", blackdiamond: "\\blacklozenge", blackheart: "\\unicode{x2665}", blackrectangle: "\\unicode{x220e}", blackstar: "\\unicode{x2605}", heart: "\\heartsuit", female: "\\unicode{x2640}", male: "\\unicode{x2642}", napprox: "\\unicode{x2249}", nequiv: "\\unicode{x2262}", notni: "\\unicode{x220c}", nsubset: "\\unicode{x2284}", nsupset: "TODO", oiiint: "\\unicode{x2230}", oiint: "\\unicode{x222f}", rectangle: "\\unicode{x25ad}", smiley: "\\unicode{x263a}", wideparen: "\\overparen", textperthousand: "\\unicode{x2030}", textregistered: "\\unicode{xae}", textsection: "\\unicode{xa7}", texttrademark: "\\unicode{x2122}", textreferencemark: "\\unicode{x203b}", parallelogram: "\\unicode{x25b1}", deletion: "\\text{ }", d: "\\underset{\\cdot}", v: "\\check", omitted: "\\tripledash", xmark: "\\times", cmark: "\\unicode{x2714}", replace: "\\xcancel", handtextcircled: "\\enclose{circle}", handsquare: "\\fbox", Alpha: "A", Beta: "B", Omicron: "O", Epsilon: "E", Zeta: "Z", Eta: "H", Iota: "I", Kappa: "K", Mu: "M", Nu: "N", Rho: "P", Tau: "T", Chi: "X", lg: "\\log", nl: "\\nless", ng: "\\ngtr", textbf: "\\class{bf}", textit: "\\class{it}", parallelequal: "{\\small{\\stackrel{\\;//}{\\raise-.5ex\\hbox{=}}}}", "^": "\\textasciicircum", bar: "\\overline", vec: "\\overrightarrow" }, eg = [["$", "$"], ["\\(", "\\)"]], tg = [["$$", "$$"], ["\\[", "\\]"]], dg = { inlineMath: eg, displayMath: tg, packages: Ag, macros: ug, maxBuffer: 10240, formatError: (t, u) => {
} }, rg = { enableMenu: !1, enableAssistiveMml: !1, menuOptions: { settings: { assistiveMml: !1 } } }, ng = { displayAlign: "left", fontURL: "https://homework-webfront.oss-cn-beijing.aliyuncs.com/MathJaxFonts" }, Er = { options: rg, loader: $l, tex: dg, chtml: ng }, cg = "https://homework-webfront.oss-cn-beijing.aliyuncs.com/complete_math_v1/mathjax-3.2.0/es5";
function ag(t) {
  if (globalThis) {
    let u = Er;
    t && (u = { ...Er, ...t }), globalThis.MathJax = { ...u, startup: { pageReady: () => {
    } } };
  }
}
ag();
var Is = function(t, u) {
  return (Is = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e, r) {
    e.__proto__ = r;
  } : function(e, r) {
    for (var c in r)
      Object.prototype.hasOwnProperty.call(r, c) && (e[c] = r[c]);
  }))(t, u);
};
function Iu(t, u) {
  if (typeof u != "function" && u !== null)
    throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
  function e() {
    this.constructor = t;
  }
  Is(t, u), t.prototype = u === null ? Object.create(u) : (e.prototype = u.prototype, new e());
}
function Qu(t, u, e, r) {
  return new (e = e || Promise)(function(c, a) {
    function i(Q) {
      try {
        g(r.next(Q));
      } catch (F) {
        a(F);
      }
    }
    function f(Q) {
      try {
        g(r.throw(Q));
      } catch (F) {
        a(F);
      }
    }
    function g(Q) {
      var F;
      Q.done ? c(Q.value) : ((F = Q.value) instanceof e ? F : new e(function(U) {
        U(F);
      })).then(i, f);
    }
    g((r = r.apply(t, u || [])).next());
  });
}
function nu(t, u) {
  var e, r, c, a = { label: 0, sent: function() {
    if (1 & c[0])
      throw c[1];
    return c[1];
  }, trys: [], ops: [] }, i = { next: f(0), throw: f(1), return: f(2) };
  return typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function f(g) {
    return function(Q) {
      var F = [g, Q];
      if (e)
        throw new TypeError("Generator is already executing.");
      for (; a; )
        try {
          if (e = 1, r && (c = 2 & F[0] ? r.return : F[0] ? r.throw || ((c = r.return) && c.call(r), 0) : r.next) && !(c = c.call(r, F[1])).done)
            return c;
          switch (r = 0, (F = c ? [2 & F[0], c.value] : F)[0]) {
            case 0:
            case 1:
              c = F;
              break;
            case 4:
              return a.label++, { value: F[1], done: !1 };
            case 5:
              a.label++, r = F[1], F = [0];
              continue;
            case 7:
              F = a.ops.pop(), a.trys.pop();
              continue;
            default:
              if (!(c = 0 < (c = a.trys).length && c[c.length - 1]) && (F[0] === 6 || F[0] === 2)) {
                a = 0;
                continue;
              }
              if (F[0] === 3 && (!c || F[1] > c[0] && F[1] < c[3]))
                a.label = F[1];
              else if (F[0] === 6 && a.label < c[1])
                a.label = c[1], c = F;
              else {
                if (!(c && a.label < c[2])) {
                  c[2] && a.ops.pop(), a.trys.pop();
                  continue;
                }
                a.label = c[2], a.ops.push(F);
              }
          }
          F = u.call(t, a);
        } catch (U) {
          F = [6, U], r = 0;
        } finally {
          e = c = 0;
        }
      if (5 & F[0])
        throw F[1];
      return { value: F[0] ? F[1] : void 0, done: !0 };
    };
  }
}
for (var Le = function() {
  function t(u, e, r, c) {
    this.left = u, this.top = e, this.width = r, this.height = c;
  }
  return t.prototype.add = function(u, e, r, c) {
    return new t(this.left + u, this.top + e, this.width + r, this.height + c);
  }, t.fromClientRect = function(u, e) {
    return new t(e.left + u.windowBounds.left, e.top + u.windowBounds.top, e.width, e.height);
  }, t.fromDOMRectList = function(u, e) {
    return e = Array.from(e).find(function(r) {
      return r.width !== 0;
    }), e ? new t(e.left + u.windowBounds.left, e.top + u.windowBounds.top, e.width, e.height) : t.EMPTY;
  }, t.EMPTY = new t(0, 0, 0, 0), t;
}(), Pc = function(t, u) {
  return Le.fromClientRect(t, u.getBoundingClientRect());
}, xr = function(t) {
  for (var u = [], e = 0, r = t.length; e < r; ) {
    var c, a = t.charCodeAt(e++);
    55296 <= a && a <= 56319 && e < r ? (64512 & (c = t.charCodeAt(e++))) == 56320 ? u.push(((1023 & a) << 10) + (1023 & c) + 65536) : (u.push(a), e--) : u.push(a);
  }
  return u;
}, HA = function() {
  for (var t = [], u = 0; u < arguments.length; u++)
    t[u] = arguments[u];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, t);
  var e = t.length;
  if (!e)
    return "";
  for (var r = [], c = -1, a = ""; ++c < e; ) {
    var i = t[c];
    i <= 65535 ? r.push(i) : r.push(55296 + ((i -= 65536) >> 10), i % 1024 + 56320), (c + 1 === e || 16384 < r.length) && (a += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return a;
}, pi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Bg = "u" < typeof Uint8Array ? [] : new Uint8Array(256), Rd = 0; Rd < pi.length; Rd++)
  Bg[pi.charCodeAt(Rd)] = Rd;
for (var Ei = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Mt = "u" < typeof Uint8Array ? [] : new Uint8Array(256), Nd = 0; Nd < Ei.length; Nd++)
  Mt[Ei.charCodeAt(Nd)] = Nd;
for (var ig = function(t) {
  for (var u, e, r, c, f = 0.75 * t.length, a = t.length, i = 0, f = (t[t.length - 1] === "=" && (f--, t[t.length - 2] === "=") && f--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? ArrayBuffer : Array)(f)), g = Array.isArray(f) ? f : new Uint8Array(f), Q = 0; Q < a; Q += 4)
    u = Mt[t.charCodeAt(Q)], e = Mt[t.charCodeAt(Q + 1)], r = Mt[t.charCodeAt(Q + 2)], c = Mt[t.charCodeAt(Q + 3)], g[i++] = u << 2 | e >> 4, g[i++] = (15 & e) << 4 | r >> 2, g[i++] = (3 & r) << 6 | 63 & c;
  return f;
}, sg = function(t) {
  for (var u = t.length, e = [], r = 0; r < u; r += 2)
    e.push(t[r + 1] << 8 | t[r]);
  return e;
}, og = function(t) {
  for (var u = t.length, e = [], r = 0; r < u; r += 4)
    e.push(t[r + 3] << 24 | t[r + 2] << 16 | t[r + 1] << 8 | t[r]);
  return e;
}, me = 5, rc = 11, nc = 2, fg = rc - me, bi = 65536 >> me, lg = 1 << me, cc = lg - 1, gg = 1024 >> me, mi = bi + gg, Fh = mi, Fg = 32, Cg = mi + Fg, Qg = 65536 >> rc, wg = 1 << fg, hg = wg - 1, Hi = function(t, u, e) {
  return t.slice ? t.slice(u, e) : new Uint16Array(Array.prototype.slice.call(t, u, e));
}, Ug = function(t, u, e) {
  return t.slice ? t.slice(u, e) : new Uint32Array(Array.prototype.slice.call(t, u, e));
}, Dg = function(c, u) {
  var c = ig(c), e = Array.isArray(c) ? og(c) : new Uint32Array(c), c = Array.isArray(c) ? sg(c) : new Uint16Array(c), r = Hi(c, 12, e[4] / 2), c = e[5] === 2 ? Hi(c, (24 + e[4]) / 2) : Ug(e, Math.ceil((24 + e[4]) / 4));
  return new pg(e[0], e[1], e[2], e[3], r, c);
}, pg = function() {
  function t(u, e, r, c, a, i) {
    this.initialValue = u, this.errorValue = e, this.highStart = r, this.highValueIndex = c, this.index = a, this.data = i;
  }
  return t.prototype.get = function(u) {
    var e;
    if (0 <= u) {
      if (u < 55296 || 56319 < u && u <= 65535)
        return e = this.index[u >> me], this.data[e = (e << nc) + (u & cc)];
      if (u <= 65535)
        return e = this.index[bi + (u - 55296 >> me)], this.data[e = (e << nc) + (u & cc)];
      if (u < this.highStart)
        return e = this.index[e = Cg - Qg + (u >> rc)], e = this.index[e += u >> me & hg], this.data[e = (e << nc) + (u & cc)];
      if (u <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, t;
}(), yi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Eg = "u" < typeof Uint8Array ? [] : new Uint8Array(256), Jd = 0; Jd < yi.length; Jd++)
  Eg[yi.charCodeAt(Jd)] = Jd;
var bg = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Ii = 50, mg = 1, vs = 2, Ks = 3, Hg = 4, yg = 5, vi = 7, xs = 8, Ki = 9, ae = 10, yc = 11, xi = 12, Ic = 13, Ig = 14, Ot = 15, vc = 16, Pd = 17, Kt = 18, vg = 19, Li = 20, Kc = 21, xt = 22, ac = 23, ze = 24, cu = 25, Tt = 26, kt = 27, qe = 28, Kg = 29, Nt = 30, xg = 31, Xd = 32, Yd = 33, xc = 34, Lc = 35, _c = 36, Wt = 37, Sc = 38, wr = 39, hr = 40, Bc = 41, Ls = 42, Lg = 43, _g = [9001, 65288], _s = "!", YA = "×", Wd = "÷", Mc = Dg(bg), Wu = [Nt, _c], Oc = [mg, vs, Ks, yg], Ss = [ae, xs], _i = [kt, Tt], Sg = Oc.concat(Ss), Si = [Sc, wr, hr, xc, Lc], Mg = [Ot, Ic], Og = function(t, u) {
  u === void 0 && (u = "strict");
  var e = [], r = [], c = [];
  return t.forEach(function(a, i) {
    var f, g = Mc.get(a);
    return Ii < g ? (c.push(!0), g -= Ii) : c.push(!1), ["normal", "auto", "loose"].indexOf(u) !== -1 && [8208, 8211, 12316, 12448].indexOf(a) !== -1 ? (r.push(i), e.push(vc)) : g === Hg || g === yc ? i !== 0 && Sg.indexOf(f = e[i - 1]) === -1 ? (r.push(r[i - 1]), e.push(f)) : (r.push(i), e.push(Nt)) : (r.push(i), g === xg ? e.push(u === "strict" ? Kc : Wt) : g === Ls || g === Kg ? e.push(Nt) : g === Lg ? e.push(131072 <= a && a <= 196605 || 196608 <= a && a <= 262141 ? Wt : Nt) : void e.push(g));
  }), [r, e, c];
}, ic = function(t, u, e, r) {
  var c = r[e];
  if (Array.isArray(t) ? t.indexOf(c) !== -1 : t === c)
    for (var a = e; a <= r.length; ) {
      if ((i = r[++a]) === u)
        return !0;
      if (i !== ae)
        break;
    }
  if (c === ae)
    for (a = e; 0 < a; ) {
      var i, f = r[--a];
      if (Array.isArray(t) ? t.indexOf(f) !== -1 : t === f)
        for (var g = e; g <= r.length; ) {
          if ((i = r[++g]) === u)
            return !0;
          if (i !== ae)
            break;
        }
      if (f !== ae)
        break;
    }
  return !1;
}, Mi = function(t, u) {
  for (var e = t; 0 <= e; ) {
    var r = u[e];
    if (r !== ae)
      return r;
    e--;
  }
  return 0;
}, Tg = function(t, u, e, r, i) {
  if (e[r] === 0 || (r -= 1, Array.isArray(i) && i[r] === !0))
    return YA;
  var a, i = r - 1, f = 1 + r, g = u[r], Q = 0 <= i ? u[i] : 0, F = u[f];
  if (g === vs && F === Ks)
    return YA;
  if (Oc.indexOf(g) !== -1)
    return _s;
  if (Oc.indexOf(F) !== -1 || Ss.indexOf(F) !== -1)
    return YA;
  if (Mi(r, u) === xs)
    return Wd;
  if (Mc.get(t[r]) === yc || (g === Xd || g === Yd) && Mc.get(t[f]) === yc || g === vi || F === vi || g === Ki || [ae, Ic, Ot].indexOf(g) === -1 && F === Ki || [Pd, Kt, vg, ze, qe].indexOf(F) !== -1 || Mi(r, u) === xt || ic(ac, xt, r, u) || ic([Pd, Kt], Kc, r, u) || ic(xi, xi, r, u))
    return YA;
  if (g === ae)
    return Wd;
  if (g === ac || F === ac)
    return YA;
  if (F === vc || g === vc)
    return Wd;
  if ([Ic, Ot, Kc].indexOf(F) !== -1 || g === Ig || Q === _c && Mg.indexOf(g) !== -1 || g === qe && F === _c || F === Li || Wu.indexOf(F) !== -1 && g === cu || Wu.indexOf(g) !== -1 && F === cu || g === kt && [Wt, Xd, Yd].indexOf(F) !== -1 || [Wt, Xd, Yd].indexOf(g) !== -1 && F === Tt || Wu.indexOf(g) !== -1 && _i.indexOf(F) !== -1 || _i.indexOf(g) !== -1 && Wu.indexOf(F) !== -1 || [kt, Tt].indexOf(g) !== -1 && (F === cu || [xt, Ot].indexOf(F) !== -1 && u[1 + f] === cu) || [xt, Ot].indexOf(g) !== -1 && F === cu || g === cu && [cu, qe, ze].indexOf(F) !== -1)
    return YA;
  if ([cu, qe, ze, Pd, Kt].indexOf(F) !== -1)
    for (var U = r; 0 <= U; ) {
      if ((a = u[U]) === cu)
        return YA;
      if ([qe, ze].indexOf(a) === -1)
        break;
      U--;
    }
  if ([kt, Tt].indexOf(F) !== -1)
    for (U = [Pd, Kt].indexOf(g) !== -1 ? i : r; 0 <= U; ) {
      if ((a = u[U]) === cu)
        return YA;
      if ([qe, ze].indexOf(a) === -1)
        break;
      U--;
    }
  if (Sc === g && [Sc, wr, xc, Lc].indexOf(F) !== -1 || [wr, xc].indexOf(g) !== -1 && [wr, hr].indexOf(F) !== -1 || [hr, Lc].indexOf(g) !== -1 && F === hr || Si.indexOf(g) !== -1 && [Li, Tt].indexOf(F) !== -1 || Si.indexOf(F) !== -1 && g === kt || Wu.indexOf(g) !== -1 && Wu.indexOf(F) !== -1 || g === ze && Wu.indexOf(F) !== -1 || Wu.concat(cu).indexOf(g) !== -1 && F === xt && _g.indexOf(t[f]) === -1 || Wu.concat(cu).indexOf(F) !== -1 && g === Kt)
    return YA;
  if (g === Bc && F === Bc) {
    for (var m = e[r], b = 1; 0 < m && u[--m] === Bc; )
      b++;
    if (b % 2 != 0)
      return YA;
  }
  return g === Xd && F === Yd ? YA : Wd;
}, kg = function(t, a) {
  var c = Og(t, (a = a || { lineBreak: "normal", wordBreak: "normal" }).lineBreak), e = c[0], r = c[1], c = c[2], a = (a.wordBreak !== "break-all" && a.wordBreak !== "break-word" || (r = r.map(function(i) {
    return [cu, Nt, Ls].indexOf(i) !== -1 ? Wt : i;
  })), a.wordBreak === "keep-all" ? c.map(function(i, f) {
    return i && 19968 <= t[f] && t[f] <= 40959;
  }) : void 0);
  return [e, r, a];
}, Gg = function() {
  function t(u, e, r, c) {
    this.codePoints = u, this.required = e === _s, this.start = r, this.end = c;
  }
  return t.prototype.slice = function() {
    return HA.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, t;
}(), Vg = function(r, u) {
  var e = xr(r), r = kg(e, u), c = r[0], a = r[1], i = r[2], f = e.length, g = 0, Q = 0;
  return { next: function() {
    if (f <= Q)
      return { done: !0, value: null };
    for (var F, U = YA; Q < f && (U = Tg(e, a, c, ++Q, i)) === YA; )
      ;
    return U !== YA || Q === f ? (F = new Gg(e, U, g, Q), g = Q, { value: F, done: !1 }) : { done: !0, value: null };
  } };
}, Rg = 1, Ng = 2, qt = 4, Oi = 8, br = 10, Ti = 47, Jt = 92, Jg = 9, Pg = 32, Zd = 34, Lt = 61, Xg = 35, Yg = 36, Wg = 37, jd = 39, zd = 40, _t = 41, Zg = 95, uu = 45, jg = 33, zg = 60, qg = 62, $g = 64, AF = 91, uF = 93, eF = 61, tF = 123, qd = 63, dF = 125, ki = 124, rF = 126, nF = 128, Gi = 65533, sc = 42, Ke = 43, cF = 44, aF = 58, BF = 59, Zt = 46, iF = 0, sF = 8, oF = 11, fF = 14, lF = 31, gF = 127, Mu = -1, Ms = 48, Os = 97, Ts = 101, FF = 102, CF = 117, QF = 122, ks = 65, Gs = 69, Vs = 70, wF = 85, hF = 90, WA = function(t) {
  return Ms <= t && t <= 57;
}, UF = function(t) {
  return 55296 <= t && t <= 57343;
}, $e = function(t) {
  return WA(t) || ks <= t && t <= Vs || Os <= t && t <= FF;
}, DF = function(t) {
  return Os <= t && t <= QF;
}, pF = function(t) {
  return ks <= t && t <= hF;
}, EF = function(t) {
  return DF(t) || pF(t);
}, bF = function(t) {
  return nF <= t;
}, $d = function(t) {
  return t === br || t === Jg || t === Pg;
}, mr = function(t) {
  return EF(t) || bF(t) || t === Zg;
}, Vi = function(t) {
  return mr(t) || WA(t) || t === uu;
}, mF = function(t) {
  return iF <= t && t <= sF || t === oF || fF <= t && t <= lF || t === gF;
}, ce = function(t, u) {
  return t === Jt && u !== br;
}, Ar = function(t, u, e) {
  return t === uu ? mr(u) || ce(u, e) : !!mr(t) || !(t !== Jt || !ce(t, u));
}, oc = function(t, u, e) {
  return t === Ke || t === uu ? !!WA(u) || u === Zt && WA(e) : WA(t === Zt ? u : t);
}, HF = function(t) {
  var u = 0, e = 1;
  t[u] !== Ke && t[u] !== uu || (t[u] === uu && (e = -1), u++);
  for (var r = []; WA(t[u]); )
    r.push(t[u++]);
  var c = r.length ? parseInt(HA.apply(void 0, r), 10) : 0;
  t[u] === Zt && u++;
  for (var a = []; WA(t[u]); )
    a.push(t[u++]);
  var i = a.length, f = i ? parseInt(HA.apply(void 0, a), 10) : 0, g = (t[u] !== Gs && t[u] !== Ts || u++, 1);
  t[u] !== Ke && t[u] !== uu || (t[u] === uu && (g = -1), u++);
  for (var Q = []; WA(t[u]); )
    Q.push(t[u++]);
  var F = Q.length ? parseInt(HA.apply(void 0, Q), 10) : 0;
  return e * (c + f * Math.pow(10, -i)) * Math.pow(10, g * F);
}, yF = { type: 2 }, IF = { type: 3 }, vF = { type: 4 }, KF = { type: 13 }, xF = { type: 8 }, LF = { type: 21 }, _F = { type: 9 }, SF = { type: 10 }, MF = { type: 11 }, OF = { type: 12 }, TF = { type: 14 }, ur = { type: 23 }, kF = { type: 1 }, GF = { type: 25 }, VF = { type: 24 }, RF = { type: 26 }, NF = { type: 27 }, JF = { type: 28 }, PF = { type: 29 }, XF = { type: 31 }, Tc = { type: 32 }, Rs = function() {
  function t() {
    this._value = [];
  }
  return t.prototype.write = function(u) {
    this._value = this._value.concat(xr(u));
  }, t.prototype.read = function() {
    for (var u = [], e = this.consumeToken(); e !== Tc; )
      u.push(e), e = this.consumeToken();
    return u;
  }, t.prototype.consumeToken = function() {
    var u = this.consumeCodePoint();
    switch (u) {
      case Zd:
        return this.consumeStringToken(Zd);
      case Xg:
        var e = this.peekCodePoint(0), r = this.peekCodePoint(1), c = this.peekCodePoint(2);
        if (Vi(e) || ce(r, c))
          return e = Ar(e, r, c) ? Ng : Rg, { type: 5, value: this.consumeName(), flags: e };
        break;
      case Yg:
        if (this.peekCodePoint(0) === Lt)
          return this.consumeCodePoint(), KF;
        break;
      case jd:
        return this.consumeStringToken(jd);
      case zd:
        return yF;
      case _t:
        return IF;
      case sc:
        if (this.peekCodePoint(0) === Lt)
          return this.consumeCodePoint(), TF;
        break;
      case Ke:
        if (oc(u, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(u), this.consumeNumericToken();
        break;
      case cF:
        return vF;
      case uu:
        if (r = u, c = this.peekCodePoint(0), e = this.peekCodePoint(1), oc(r, c, e))
          return this.reconsumeCodePoint(u), this.consumeNumericToken();
        if (Ar(r, c, e))
          return this.reconsumeCodePoint(u), this.consumeIdentLikeToken();
        if (c === uu && e === qg)
          return this.consumeCodePoint(), this.consumeCodePoint(), VF;
        break;
      case Zt:
        if (oc(u, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(u), this.consumeNumericToken();
        break;
      case Ti:
        if (this.peekCodePoint(0) === sc)
          for (this.consumeCodePoint(); ; ) {
            var a = this.consumeCodePoint();
            if (a === sc && (a = this.consumeCodePoint()) === Ti)
              return this.consumeToken();
            if (a === Mu)
              return this.consumeToken();
          }
        break;
      case aF:
        return RF;
      case BF:
        return NF;
      case zg:
        if (this.peekCodePoint(0) === jg && this.peekCodePoint(1) === uu && this.peekCodePoint(2) === uu)
          return this.consumeCodePoint(), this.consumeCodePoint(), GF;
        break;
      case $g:
        if (r = this.peekCodePoint(0), c = this.peekCodePoint(1), e = this.peekCodePoint(2), Ar(r, c, e))
          return { type: 7, value: this.consumeName() };
        break;
      case AF:
        return JF;
      case Jt:
        if (ce(u, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(u), this.consumeIdentLikeToken();
        break;
      case uF:
        return PF;
      case eF:
        if (this.peekCodePoint(0) === Lt)
          return this.consumeCodePoint(), xF;
        break;
      case tF:
        return MF;
      case dF:
        return OF;
      case CF:
      case wF:
        return r = this.peekCodePoint(0), c = this.peekCodePoint(1), r !== Ke || !$e(c) && c !== qd || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(u), this.consumeIdentLikeToken();
      case ki:
        if (this.peekCodePoint(0) === Lt)
          return this.consumeCodePoint(), _F;
        if (this.peekCodePoint(0) === ki)
          return this.consumeCodePoint(), LF;
        break;
      case rF:
        if (this.peekCodePoint(0) === Lt)
          return this.consumeCodePoint(), SF;
        break;
      case Mu:
        return Tc;
    }
    return $d(u) ? (this.consumeWhiteSpace(), XF) : WA(u) ? (this.reconsumeCodePoint(u), this.consumeNumericToken()) : mr(u) ? (this.reconsumeCodePoint(u), this.consumeIdentLikeToken()) : { type: 6, value: HA(u) };
  }, t.prototype.consumeCodePoint = function() {
    var u = this._value.shift();
    return "u" < typeof u ? -1 : u;
  }, t.prototype.reconsumeCodePoint = function(u) {
    this._value.unshift(u);
  }, t.prototype.peekCodePoint = function(u) {
    return u >= this._value.length ? -1 : this._value[u];
  }, t.prototype.consumeUnicodeRangeToken = function() {
    for (var u = [], e = this.consumeCodePoint(); $e(e) && u.length < 6; )
      u.push(e), e = this.consumeCodePoint();
    for (var r = !1; e === qd && u.length < 6; )
      u.push(e), e = this.consumeCodePoint(), r = !0;
    if (r)
      return { type: 30, start: parseInt(HA.apply(void 0, u.map(function(i) {
        return i === qd ? Ms : i;
      })), 16), end: parseInt(HA.apply(void 0, u.map(function(i) {
        return i === qd ? Vs : i;
      })), 16) };
    var c = parseInt(HA.apply(void 0, u), 16);
    if (this.peekCodePoint(0) === uu && $e(this.peekCodePoint(1))) {
      this.consumeCodePoint();
      for (var e = this.consumeCodePoint(), a = []; $e(e) && a.length < 6; )
        a.push(e), e = this.consumeCodePoint();
      return { type: 30, start: c, end: parseInt(HA.apply(void 0, a), 16) };
    }
    return { type: 30, start: c, end: c };
  }, t.prototype.consumeIdentLikeToken = function() {
    var u = this.consumeName();
    return u.toLowerCase() === "url" && this.peekCodePoint(0) === zd ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === zd ? (this.consumeCodePoint(), { type: 19, value: u }) : { type: 20, value: u };
  }, t.prototype.consumeUrlToken = function() {
    var u = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === Mu)
      return { type: 22, value: "" };
    var e = this.peekCodePoint(0);
    if (e === jd || e === Zd)
      return (e = this.consumeStringToken(this.consumeCodePoint())).type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Mu || this.peekCodePoint(0) === _t) ? (this.consumeCodePoint(), { type: 22, value: e.value }) : (this.consumeBadUrlRemnants(), ur);
    for (; ; ) {
      var r = this.consumeCodePoint();
      if (r === Mu || r === _t)
        return { type: 22, value: HA.apply(void 0, u) };
      if ($d(r))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === Mu || this.peekCodePoint(0) === _t ? (this.consumeCodePoint(), { type: 22, value: HA.apply(void 0, u) }) : (this.consumeBadUrlRemnants(), ur);
      if (r === Zd || r === jd || r === zd || mF(r))
        return this.consumeBadUrlRemnants(), ur;
      if (r === Jt) {
        if (!ce(r, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), ur;
        u.push(this.consumeEscapedCodePoint());
      } else
        u.push(r);
    }
  }, t.prototype.consumeWhiteSpace = function() {
    for (; $d(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, t.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var u = this.consumeCodePoint();
      if (u === _t || u === Mu)
        return;
      ce(u, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }, t.prototype.consumeStringSlice = function(u) {
    for (var e = ""; 0 < u; ) {
      var r = Math.min(5e4, u);
      e += HA.apply(void 0, this._value.splice(0, r)), u -= r;
    }
    return this._value.shift(), e;
  }, t.prototype.consumeStringToken = function(u) {
    for (var e = "", r = 0; ; ) {
      var c, a = this._value[r];
      if (a === Mu || a === void 0 || a === u)
        return { type: 0, value: e += this.consumeStringSlice(r) };
      if (a === br)
        return this._value.splice(0, r), kF;
      a === Jt && (c = this._value[r + 1]) !== Mu && c !== void 0 && (c === br ? (e += this.consumeStringSlice(r), r = -1, this._value.shift()) : ce(a, c) && (e = (e += this.consumeStringSlice(r)) + HA(this.consumeEscapedCodePoint()), r = -1)), r++;
    }
  }, t.prototype.consumeNumber = function() {
    var u = [], e = qt;
    for ((r = this.peekCodePoint(0)) !== Ke && r !== uu || u.push(this.consumeCodePoint()); WA(this.peekCodePoint(0)); )
      u.push(this.consumeCodePoint());
    var r = this.peekCodePoint(0), c = this.peekCodePoint(1);
    if (r === Zt && WA(c))
      for (u.push(this.consumeCodePoint(), this.consumeCodePoint()), e = Oi; WA(this.peekCodePoint(0)); )
        u.push(this.consumeCodePoint());
    r = this.peekCodePoint(0);
    var c = this.peekCodePoint(1), a = this.peekCodePoint(2);
    if ((r === Gs || r === Ts) && ((c === Ke || c === uu) && WA(a) || WA(c)))
      for (u.push(this.consumeCodePoint(), this.consumeCodePoint()), e = Oi; WA(this.peekCodePoint(0)); )
        u.push(this.consumeCodePoint());
    return [HF(u), e];
  }, t.prototype.consumeNumericToken = function() {
    var e = this.consumeNumber(), u = e[0], e = e[1], r = this.peekCodePoint(0), c = this.peekCodePoint(1), a = this.peekCodePoint(2);
    return Ar(r, c, a) ? { type: 15, number: u, flags: e, unit: this.consumeName() } : r === Wg ? (this.consumeCodePoint(), { type: 16, number: u, flags: e }) : { type: 17, number: u, flags: e };
  }, t.prototype.consumeEscapedCodePoint = function() {
    var u = this.consumeCodePoint();
    if ($e(u)) {
      for (var e = HA(u); $e(this.peekCodePoint(0)) && e.length < 6; )
        e += HA(this.consumeCodePoint());
      $d(this.peekCodePoint(0)) && this.consumeCodePoint();
      var r = parseInt(e, 16);
      return r === 0 || UF(r) || 1114111 < r ? Gi : r;
    }
    return u === Mu ? Gi : u;
  }, t.prototype.consumeName = function() {
    for (var u = ""; ; ) {
      var e = this.consumeCodePoint();
      if (Vi(e))
        u += HA(e);
      else {
        if (!ce(e, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(e), u;
        u += HA(this.consumeEscapedCodePoint());
      }
    }
  }, t;
}(), Ns = function() {
  function t(u) {
    this._tokens = u;
  }
  return t.create = function(u) {
    var e = new Rs();
    return e.write(u), new t(e.read());
  }, t.parseValue = function(u) {
    return t.create(u).parseComponentValue();
  }, t.parseValues = function(u) {
    return t.create(u).parseComponentValues();
  }, t.prototype.parseComponentValue = function() {
    for (var u = this.consumeToken(); u.type === 31; )
      u = this.consumeToken();
    if (u.type === 32)
      throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
    this.reconsumeToken(u);
    for (var e = this.consumeComponentValue(); (u = this.consumeToken()).type === 31; )
      ;
    if (u.type === 32)
      return e;
    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
  }, t.prototype.parseComponentValues = function() {
    for (var u = []; ; ) {
      var e = this.consumeComponentValue();
      if (e.type === 32)
        return u;
      u.push(e), u.push();
    }
  }, t.prototype.consumeComponentValue = function() {
    var u = this.consumeToken();
    switch (u.type) {
      case 11:
      case 28:
      case 2:
        return this.consumeSimpleBlock(u.type);
      case 19:
        return this.consumeFunction(u);
    }
    return u;
  }, t.prototype.consumeSimpleBlock = function(u) {
    for (var e = { type: u, values: [] }, r = this.consumeToken(); ; ) {
      if (r.type === 32 || YF(r, u))
        return e;
      this.reconsumeToken(r), e.values.push(this.consumeComponentValue()), r = this.consumeToken();
    }
  }, t.prototype.consumeFunction = function(u) {
    for (var e = { name: u.value, values: [], type: 18 }; ; ) {
      var r = this.consumeToken();
      if (r.type === 32 || r.type === 3)
        return e;
      this.reconsumeToken(r), e.values.push(this.consumeComponentValue());
    }
  }, t.prototype.consumeToken = function() {
    var u = this._tokens.shift();
    return "u" < typeof u ? Tc : u;
  }, t.prototype.reconsumeToken = function(u) {
    this._tokens.unshift(u);
  }, t;
}(), Pt = function(t) {
  return t.type === 15;
}, Ur = function(t) {
  return t.type === 17;
}, pA = function(t) {
  return t.type === 20;
}, fc = function(t, u) {
  return pA(t) && t.value === u;
}, Lr = function(t) {
  return t.type !== 31 && t.type !== 4;
}, Ou = function(t) {
  var u = [], e = [];
  return t.forEach(function(r) {
    if (r.type === 4) {
      if (e.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      u.push(e), e = [];
    } else
      r.type !== 31 && e.push(r);
  }), e.length && u.push(e), u;
}, YF = function(t, u) {
  return u === 11 && t.type === 12 || u === 28 && t.type === 29 || u === 2 && t.type === 3;
}, se = function(t) {
  return t.type === 17 || t.type === 15;
}, yA = function(t) {
  return t.type === 16 || se(t);
}, Ri = function(t) {
  return 1 < t.length ? [t[0], t[1]] : [t[0]];
}, kA = { type: 17, number: 0, flags: qt }, Xc = { type: 16, number: 50, flags: qt }, Be = { type: 16, number: 100, flags: qt }, Gt = function(c, u, e) {
  var r = c[0], c = c[1];
  return [gA(r, u), gA(typeof c < "u" ? c : r, e)];
}, gA = function(t, u) {
  if (t.type === 16)
    return t.number / 100 * u;
  if (Pt(t))
    switch (t.unit) {
      case "rem":
      case "em":
        return 16 * t.number;
      default:
        return t.number;
    }
  return t.number;
}, Js = "deg", Ps = "grad", Xs = "rad", Ys = "turn", _r = { name: "angle", parse: function(t, u) {
  if (u.type === 15)
    switch (u.unit) {
      case Js:
        return Math.PI * u.number / 180;
      case Ps:
        return Math.PI / 200 * u.number;
      case Xs:
        return u.number;
      case Ys:
        return 2 * Math.PI * u.number;
    }
  throw new Error("Unsupported angle type");
} }, Ws = function(t) {
  return t.type === 15 && (t.unit === Js || t.unit === Ps || t.unit === Xs || t.unit === Ys);
}, Zs = function(t) {
  switch (t.filter(pA).map(function(u) {
    return u.value;
  }).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [kA, kA];
    case "to top":
    case "bottom":
      return hu(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [kA, Be];
    case "to right":
    case "left":
      return hu(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Be, Be];
    case "to bottom":
    case "top":
      return hu(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Be, kA];
    case "to left":
    case "right":
      return hu(270);
  }
  return 0;
}, hu = function(t) {
  return Math.PI * t / 180;
}, oe = { name: "color", parse: function(t, u) {
  if (u.type === 18) {
    var e = WF[u.name];
    if ("u" < typeof e)
      throw new Error('Attempting to parse an unsupported color function "' + u.name + '"');
    return e(t, u.values);
  }
  if (u.type === 5) {
    var r, c, a, i;
    if (u.value.length === 3)
      return r = u.value.substring(0, 1), c = u.value.substring(1, 2), a = u.value.substring(2, 3), ie(parseInt(r + r, 16), parseInt(c + c, 16), parseInt(a + a, 16), 1);
    if (u.value.length === 4)
      return r = u.value.substring(0, 1), c = u.value.substring(1, 2), a = u.value.substring(2, 3), i = u.value.substring(3, 4), ie(parseInt(r + r, 16), parseInt(c + c, 16), parseInt(a + a, 16), parseInt(i + i, 16) / 255);
    if (u.value.length === 6)
      return r = u.value.substring(0, 2), c = u.value.substring(2, 4), a = u.value.substring(4, 6), ie(parseInt(r, 16), parseInt(c, 16), parseInt(a, 16), 1);
    if (u.value.length === 8)
      return r = u.value.substring(0, 2), c = u.value.substring(2, 4), a = u.value.substring(4, 6), i = u.value.substring(6, 8), ie(parseInt(r, 16), parseInt(c, 16), parseInt(a, 16), parseInt(i, 16) / 255);
  }
  return u.type === 20 && (e = jt[u.value.toUpperCase()], typeof e < "u") ? e : jt.TRANSPARENT;
} }, at = function(t) {
  return (255 & t) == 0;
}, SA = function(c) {
  var u = 255 & c, e = 255 & c >> 8, r = 255 & c >> 16, c = 255 & c >> 24;
  return u < 255 ? "rgba(" + c + "," + r + "," + e + "," + u / 255 + ")" : "rgb(" + c + "," + r + "," + e + ")";
}, ie = function(t, u, e, r) {
  return (t << 24 | u << 16 | e << 8 | Math.round(255 * r) << 0) >>> 0;
}, Ni = function(t, u) {
  var e;
  return t.type === 17 ? t.number : t.type === 16 ? (e = u === 3 ? 1 : 255, u === 3 ? t.number / 100 * e : Math.round(t.number / 100 * e)) : 0;
}, Ji = function(t, a) {
  var e, r, c, a = a.filter(Lr);
  return a.length === 3 ? (e = (c = a.map(Ni))[0], r = c[1], c = c[2], ie(e, r, c, 1)) : a.length === 4 ? (e = (a = a.map(Ni))[0], r = a[1], c = a[2], a = a[3], ie(e, r, c, a)) : 0;
};
function lc(t, u, e) {
  return e < 0 && (e += 1), 1 <= e && --e, e < 1 / 6 ? (u - t) * e * 6 + t : e < 0.5 ? u : e < 2 / 3 ? 6 * (u - t) * (2 / 3 - e) + t : t;
}
var Pi = function(c, r) {
  var e, r = r.filter(Lr), a = r[0], i = r[1], f = r[2], r = r[3], c = (a.type === 17 ? hu(a.number) : _r.parse(c, a)) / (2 * Math.PI), a = yA(i) ? i.number / 100 : 0, i = yA(f) ? f.number / 100 : 0, f = typeof r < "u" && yA(r) ? gA(r, 1) : 1;
  return a == 0 ? ie(255 * i, 255 * i, 255 * i, 1) : (a = lc(i = 2 * i - (r = i <= 0.5 ? i * (1 + a) : i + a - i * a), r, c + 1 / 3), e = lc(i, r, c), i = lc(i, r, c - 1 / 3), ie(255 * a, 255 * e, 255 * i, f));
}, WF = { hsl: Pi, hsla: Pi, rgb: Ji, rgba: Ji }, Xi = function(t, u) {
  return oe.parse(t, Ns.create(u).parseComponentValue());
}, jt = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, ZF = { name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function(t, u) {
  return u.map(function(e) {
    if (pA(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, jF = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Sr = function(t, u) {
  return t = oe.parse(t, u[0]), u = u[1], u && yA(u) ? { color: t, stop: u } : { color: t, stop: null };
}, Yi = function(t, u) {
  var e = t[0], r = t[t.length - 1];
  e.stop === null && (e.stop = kA), r.stop === null && (r.stop = Be);
  for (var c = [], a = 0, i = 0; i < t.length; i++) {
    var f = t[i].stop;
    f !== null ? (f = gA(f, u), c.push(a < f ? f : a), a = f) : c.push(null);
  }
  for (var g = null, i = 0; i < c.length; i++) {
    var Q = c[i];
    if (Q === null)
      g === null && (g = i);
    else if (g !== null) {
      for (var F = i - g, U = (Q - c[g - 1]) / (1 + F), m = 1; m <= F; m++)
        c[g + m - 1] = U * m;
      g = null;
    }
  }
  return t.map(function(b, y) {
    return { color: b.color, stop: Math.max(Math.min(1, c[y] / u), 0) };
  });
}, zF = function(t, c, e) {
  var a = c / 2, r = e / 2, c = gA(t[0], c) - a, a = r - gA(t[1], e);
  return (Math.atan2(a, c) + 2 * Math.PI) % (2 * Math.PI);
}, qF = function(g, c, a) {
  var g = typeof g == "number" ? g : zF(g, c, a), r = Math.abs(c * Math.sin(g)) + Math.abs(a * Math.cos(g)), c = c / 2, a = a / 2, i = r / 2, f = Math.sin(g - Math.PI / 2) * i, g = Math.cos(g - Math.PI / 2) * i;
  return [r, c - g, c + g, a - f, a + f];
}, yu = function(t, u) {
  return Math.sqrt(t * t + u * u);
}, Wi = function(t, u, e, r, c) {
  return [[0, 0], [0, u], [t, 0], [t, u]].reduce(function(a, i) {
    var g = i[0], f = i[1], g = yu(e - g, r - f);
    return (c ? g < a.optimumDistance : g > a.optimumDistance) ? { optimumCorner: i, optimumDistance: g } : a;
  }, { optimumDistance: c ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, $F = function(t, u, e, r, c) {
  var a, i, f, g, Q = 0, F = 0;
  switch (t.size) {
    case 0:
      t.shape === 0 ? Q = F = Math.min(Math.abs(u), Math.abs(u - r), Math.abs(e), Math.abs(e - c)) : t.shape === 1 && (Q = Math.min(Math.abs(u), Math.abs(u - r)), F = Math.min(Math.abs(e), Math.abs(e - c)));
      break;
    case 2:
      t.shape === 0 ? Q = F = Math.min(yu(u, e), yu(u, e - c), yu(u - r, e), yu(u - r, e - c)) : t.shape === 1 && (a = Math.min(Math.abs(e), Math.abs(e - c)) / Math.min(Math.abs(u), Math.abs(u - r)), f = (g = Wi(r, c, u, e, !0))[0], g = g[1], F = a * (Q = yu(f - u, (g - e) / a)));
      break;
    case 1:
      t.shape === 0 ? Q = F = Math.max(Math.abs(u), Math.abs(u - r), Math.abs(e), Math.abs(e - c)) : t.shape === 1 && (Q = Math.max(Math.abs(u), Math.abs(u - r)), F = Math.max(Math.abs(e), Math.abs(e - c)));
      break;
    case 3:
      t.shape === 0 ? Q = F = Math.max(yu(u, e), yu(u, e - c), yu(u - r, e), yu(u - r, e - c)) : t.shape === 1 && (a = Math.max(Math.abs(e), Math.abs(e - c)) / Math.max(Math.abs(u), Math.abs(u - r)), f = (i = Wi(r, c, u, e, !1))[0], g = i[1], F = a * (Q = yu(f - u, (g - e) / a)));
  }
  return Array.isArray(t.size) && (Q = gA(t.size[0], r), F = t.size.length === 2 ? gA(t.size[1], c) : Q), [Q, F];
}, AC = function(t, u) {
  var e = hu(180), r = [];
  return Ou(u).forEach(function(c, a) {
    if (a === 0) {
      if (a = c[0], a.type === 20 && a.value === "to")
        return void (e = Zs(c));
      if (Ws(a))
        return void (e = _r.parse(t, a));
    }
    a = Sr(t, c), r.push(a);
  }), { angle: e, stops: r, type: 1 };
}, er = function(t, u) {
  var e = hu(180), r = [];
  return Ou(u).forEach(function(c, a) {
    if (a === 0) {
      if (a = c[0], a.type === 20 && ["top", "left", "right", "bottom"].indexOf(a.value) !== -1)
        return void (e = Zs(c));
      if (Ws(a))
        return void (e = (_r.parse(t, a) + hu(270)) % hu(360));
    }
    a = Sr(t, c), r.push(a);
  }), { angle: e, stops: r, type: 1 };
}, uC = function(t, u) {
  var e = hu(180), r = [], c = 1;
  return Ou(u).forEach(function(g, i) {
    var f, g = g[0];
    if (i === 0) {
      if (pA(g) && g.value === "linear")
        return void (c = 1);
      if (pA(g) && g.value === "radial")
        return void (c = 2);
    }
    g.type === 18 && (g.name === "from" ? (f = oe.parse(t, g.values[0]), r.push({ stop: kA, color: f })) : g.name === "to" ? (f = oe.parse(t, g.values[0]), r.push({ stop: Be, color: f })) : g.name === "color-stop" && (i = g.values.filter(Lr)).length === 2 && (f = oe.parse(t, i[1]), g = i[0], Ur(g)) && r.push({ stop: { type: 16, number: 100 * g.number, flags: g.flags }, color: f }));
  }), c === 1 ? { angle: (e + hu(180)) % hu(360), stops: r, type: c } : { size: 3, shape: 0, stops: r, position: [], type: c };
}, js = "closest-side", zs = "farthest-side", qs = "closest-corner", $s = "farthest-corner", Ao = "circle", uo = "ellipse", eo = "cover", to = "contain", eC = function(t, u) {
  var e = 0, r = 3, c = [], a = [];
  return Ou(u).forEach(function(i, f) {
    var g, Q = !0;
    f === 0 && (g = !1, Q = i.reduce(function(F, U) {
      if (g)
        if (pA(U))
          switch (U.value) {
            case "center":
              return a.push(Xc), F;
            case "top":
            case "left":
              return a.push(kA), F;
            case "right":
            case "bottom":
              return a.push(Be), F;
          }
        else
          (yA(U) || se(U)) && a.push(U);
      else if (pA(U))
        switch (U.value) {
          case Ao:
            return e = 0, !1;
          case uo:
            return !(e = 1);
          case "at":
            return !(g = !0);
          case js:
            return r = 0, !1;
          case eo:
          case zs:
            return !(r = 1);
          case to:
          case qs:
            return !(r = 2);
          case $s:
            return !(r = 3);
        }
      else if (se(U) || yA(U))
        return (r = Array.isArray(r) ? r : []).push(U), !1;
      return F;
    }, Q)), Q && (f = Sr(t, i), c.push(f));
  }), { size: r, shape: e, stops: c, position: a, type: 2 };
}, tr = function(t, u) {
  var e = 0, r = 3, c = [], a = [];
  return Ou(u).forEach(function(i, f) {
    var g = !0;
    f === 0 ? g = i.reduce(function(Q, F) {
      if (pA(F))
        switch (F.value) {
          case "center":
            return a.push(Xc), !1;
          case "top":
          case "left":
            return a.push(kA), !1;
          case "right":
          case "bottom":
            return a.push(Be), !1;
        }
      else if (yA(F) || se(F))
        return a.push(F), !1;
      return Q;
    }, g) : f === 1 && (g = i.reduce(function(Q, F) {
      if (pA(F))
        switch (F.value) {
          case Ao:
            return e = 0, !1;
          case uo:
            return !(e = 1);
          case to:
          case js:
            return r = 0, !1;
          case zs:
            return !(r = 1);
          case qs:
            return !(r = 2);
          case eo:
          case $s:
            return !(r = 3);
        }
      else if (se(F) || yA(F))
        return (r = Array.isArray(r) ? r : []).push(F), !1;
      return Q;
    }, g)), g && (f = Sr(t, i), c.push(f));
  }), { size: r, shape: e, stops: c, position: a, type: 2 };
}, tC = function(t) {
  return t.type === 1;
}, dC = function(t) {
  return t.type === 2;
}, gc = { name: "image", parse: function(t, u) {
  if (u.type === 22)
    return e = { url: u.value, type: 0 }, t.cache.addImage(u.value), e;
  if (u.type !== 18)
    throw new Error("Unsupported image type " + u.type);
  var e = ro[u.name];
  if ("u" < typeof e)
    throw new Error('Attempting to parse an unsupported image function "' + u.name + '"');
  return e(t, u.values);
} };
function rC(t) {
  return !(t.type === 20 && t.value === "none" || t.type === 18 && !ro[t.name]);
}
for (var Bt, dr, St, ro = { "linear-gradient": AC, "-moz-linear-gradient": er, "-ms-linear-gradient": er, "-o-linear-gradient": er, "-webkit-linear-gradient": er, "radial-gradient": eC, "-moz-radial-gradient": tr, "-ms-radial-gradient": tr, "-o-radial-gradient": tr, "-webkit-radial-gradient": tr, "-webkit-gradient": uC }, nC = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(t, u) {
  var e;
  return u.length === 0 || (e = u[0]).type === 20 && e.value === "none" ? [] : u.filter(function(r) {
    return Lr(r) && rC(r);
  }).map(function(r) {
    return gc.parse(t, r);
  });
} }, cC = { name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function(t, u) {
  return u.map(function(e) {
    if (pA(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, aC = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(t, u) {
  return Ou(u).map(function(e) {
    return e.filter(yA);
  }).map(Ri);
} }, BC = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(t, u) {
  return Ou(u).map(function(e) {
    return e.filter(pA).map(function(r) {
      return r.value;
    }).join(" ");
  }).map(iC);
} }, iC = function(t) {
  switch (t) {
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
}, sC = (function(t) {
  t.AUTO = "auto", t.CONTAIN = "contain", t.COVER = "cover";
}(Bt = Bt || {}), { name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function(t, u) {
  return Ou(u).map(function(e) {
    return e.filter(oC);
  });
} }), oC = function(t) {
  return pA(t) || yA(t);
}, rr = function(t) {
  return { name: "border-" + t + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
}, fC = rr("top"), lC = rr("right"), gC = rr("bottom"), FC = rr("left"), nr = function(t) {
  return { name: "border-radius-" + t, initialValue: "0 0", prefix: !1, type: 1, parse: function(u, e) {
    return Ri(e.filter(yA));
  } };
}, CC = nr("top-left"), QC = nr("top-right"), wC = nr("bottom-right"), hC = nr("bottom-left"), cr = function(t) {
  return { name: "border-" + t + "-style", initialValue: "solid", prefix: !1, type: 2, parse: function(u, e) {
    switch (e) {
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
}, UC = cr("top"), DC = cr("right"), pC = cr("bottom"), EC = cr("left"), ar = function(t) {
  return { name: "border-" + t + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(u, e) {
    return Pt(e) ? e.number : 0;
  } };
}, bC = ar("top"), mC = ar("right"), HC = ar("bottom"), yC = ar("left"), IC = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, vC = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(t, u) {
  return u !== "rtl" ? 0 : 1;
} }, KC = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(t, u) {
  return u.filter(pA).reduce(function(e, r) {
    return e | xC(r.value);
  }, 0);
} }, xC = function(t) {
  switch (t) {
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
}, LC = { name: "float", initialValue: "none", prefix: !1, type: 2, parse: function(t, u) {
  switch (u) {
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
} }, _C = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(t, u) {
  return u.type === 20 && u.value === "normal" || u.type !== 17 && u.type !== 15 ? 0 : u.number;
} }, SC = (function(t) {
  t.NORMAL = "normal", t.STRICT = "strict";
}(dr = dr || {}), { name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function(t, u) {
  return u !== "strict" ? dr.NORMAL : dr.STRICT;
} }), MC = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 }, Zi = function(t, u) {
  return pA(t) && t.value === "normal" ? 1.2 * u : t.type === 17 ? u * t.number : yA(t) ? gA(t, u) : u;
}, OC = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(t, u) {
  return u.type === 20 && u.value === "none" ? null : gc.parse(t, u);
} }, TC = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(t, u) {
  return u !== "inside" ? 1 : 0;
} }, kC = { name: "list-style-type", initialValue: "none", prefix: !1, type: 2, parse: function(t, u) {
  switch (u) {
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
} }, Br = function(t) {
  return { name: "margin-" + t, initialValue: "0", prefix: !1, type: 4 };
}, GC = Br("top"), VC = Br("right"), RC = Br("bottom"), NC = Br("left"), JC = { name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function(t, u) {
  return u.filter(pA).map(function(e) {
    switch (e.value) {
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
} }, PC = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(t, u) {
  return u !== "break-word" ? "normal" : "break-word";
} }, ir = function(t) {
  return { name: "padding-" + t, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
}, XC = ir("top"), YC = ir("right"), WC = ir("bottom"), ZC = ir("left"), jC = { name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function(t, u) {
  switch (u) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, zC = { name: "position", initialValue: "static", prefix: !1, type: 2, parse: function(t, u) {
  switch (u) {
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
} }, qC = { name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(t, u) {
  return u.length === 1 && fc(u[0], "none") ? [] : Ou(u).map(function(e) {
    for (var r = { color: jt.TRANSPARENT, offsetX: kA, offsetY: kA, blur: kA }, c = 0, a = 0; a < e.length; a++) {
      var i = e[a];
      se(i) ? (c === 0 ? r.offsetX = i : c === 1 ? r.offsetY = i : r.blur = i, c++) : r.color = oe.parse(t, i);
    }
    return r;
  });
} }, $C = { name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function(t, u) {
  switch (u) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, AQ = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(t, u) {
  if (u.type === 20 && u.value === "none" || u.type !== 18)
    return null;
  var e = tQ[u.name];
  if ("u" < typeof e)
    throw new Error('Attempting to parse an unsupported transform function "' + u.name + '"');
  return e(u.values);
} }, uQ = function(t) {
  return t = t.filter(function(u) {
    return u.type === 17;
  }).map(function(u) {
    return u.number;
  }), t.length === 6 ? t : null;
}, eQ = function(u) {
  var u = u.filter(function(g) {
    return g.type === 17;
  }).map(function(g) {
    return g.number;
  }), e = u[0], r = u[1], c = (u[2], u[3], u[4]), a = u[5], i = (u[6], u[7], u[8], u[9], u[10], u[11], u[12]), f = u[13];
  return u[14], u[15], u.length === 16 ? [e, r, c, a, i, f] : null;
}, tQ = { matrix: uQ, matrix3d: eQ }, ji = { type: 16, number: 50, flags: qt }, dQ = [ji, ji], rQ = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(t, u) {
  return u = u.filter(yA), u.length !== 2 ? dQ : [u[0], u[1]];
} }, nQ = { name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function(t, u) {
  switch (u) {
    case "hidden":
      return 1;
    case "collapse":
      return 2;
    default:
      return 0;
  }
} }, cQ = (function(t) {
  t.NORMAL = "normal", t.BREAK_ALL = "break-all", t.KEEP_ALL = "keep-all";
}(St = St || {}), { name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function(t, u) {
  switch (u) {
    case "break-all":
      return St.BREAK_ALL;
    case "keep-all":
      return St.KEEP_ALL;
    default:
      return St.NORMAL;
  }
} }), aQ = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(t, u) {
  if (u.type === 20)
    return { auto: !0, order: 0 };
  if (Ur(u))
    return { auto: !1, order: u.number };
  throw new Error("Invalid z-index number parsed");
} }, zi = { name: "time", parse: function(t, u) {
  if (u.type === 15)
    switch (u.unit.toLowerCase()) {
      case "s":
        return 1e3 * u.number;
      case "ms":
        return u.number;
    }
  throw new Error("Unsupported time type");
} }, BQ = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(t, u) {
  return Ur(u) ? u.number : 1;
} }, iQ = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, sQ = { name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function(t, u) {
  return u.filter(pA).map(function(e) {
    switch (e.value) {
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
  }).filter(function(e) {
    return e !== 0;
  });
} }, oQ = { name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function(t, u) {
  var e = [], r = [];
  return u.forEach(function(c) {
    switch (c.type) {
      case 20:
      case 0:
        e.push(c.value);
        break;
      case 17:
        e.push(c.number.toString());
        break;
      case 4:
        r.push(e.join(" ")), e.length = 0;
    }
  }), e.length && r.push(e.join(" ")), r.map(function(c) {
    return c.indexOf(" ") === -1 ? c : "'" + c + "'";
  });
} }, fQ = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" }, lQ = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(t, u) {
  return Ur(u) ? u.number : !pA(u) || u.value !== "bold" ? 400 : 700;
} }, gQ = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(t, u) {
  return u.filter(pA).map(function(e) {
    return e.value;
  });
} }, FQ = { name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function(t, u) {
  switch (u) {
    case "oblique":
      return "oblique";
    case "italic":
      return "italic";
    default:
      return "normal";
  }
} }, LA = function(t, u) {
  return (t & u) != 0;
}, CQ = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(t, u) {
  return u.filter(Pt).map(function(e) {
    return zi.parse(t, e);
  });
} }, QQ = { name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(t, u) {
  return u.length === 1 && fc(u[0], "none") ? [] : Ou(u).map(function(e) {
    for (var r = { color: 255, offsetX: kA, offsetY: kA, blur: kA, spread: kA, inset: !1 }, c = 0, a = 0; a < e.length; a++) {
      var i = e[a];
      fc(i, "inset") ? r.inset = !0 : se(i) ? (c === 0 ? r.offsetX = i : c === 1 ? r.offsetY = i : c === 2 ? r.blur = i : r.spread = i, c++) : r.color = oe.parse(t, i);
    }
    return r;
  });
} }, wQ = { name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function(t, u) {
  var e = [];
  return u.filter(pA).forEach(function(r) {
    switch (r.value) {
      case "stroke":
        e.push(1);
        break;
      case "fill":
        e.push(0);
        break;
      case "markers":
        e.push(2);
    }
  }), [0, 1, 2].forEach(function(r) {
    e.indexOf(r) === -1 && e.push(r);
  }), e;
} }, hQ = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" }, UQ = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(t, u) {
  return Pt(u) ? u.number : 0;
} }, DQ = function() {
  function t(u, e) {
    this.animationDuration = V(u, CQ, e.animationDuration), this.backgroundClip = V(u, ZF, e.backgroundClip), this.backgroundColor = V(u, jF, e.backgroundColor), this.backgroundImage = V(u, nC, e.backgroundImage), this.backgroundOrigin = V(u, cC, e.backgroundOrigin), this.backgroundPosition = V(u, aC, e.backgroundPosition), this.backgroundRepeat = V(u, BC, e.backgroundRepeat), this.backgroundSize = V(u, sC, e.backgroundSize), this.borderTopColor = V(u, fC, e.borderTopColor), this.borderRightColor = V(u, lC, e.borderRightColor), this.borderBottomColor = V(u, gC, e.borderBottomColor), this.borderLeftColor = V(u, FC, e.borderLeftColor), this.borderTopLeftRadius = V(u, CC, e.borderTopLeftRadius), this.borderTopRightRadius = V(u, QC, e.borderTopRightRadius), this.borderBottomRightRadius = V(u, wC, e.borderBottomRightRadius), this.borderBottomLeftRadius = V(u, hC, e.borderBottomLeftRadius), this.borderTopStyle = V(u, UC, e.borderTopStyle), this.borderRightStyle = V(u, DC, e.borderRightStyle), this.borderBottomStyle = V(u, pC, e.borderBottomStyle), this.borderLeftStyle = V(u, EC, e.borderLeftStyle), this.borderTopWidth = V(u, bC, e.borderTopWidth), this.borderRightWidth = V(u, mC, e.borderRightWidth), this.borderBottomWidth = V(u, HC, e.borderBottomWidth), this.borderLeftWidth = V(u, yC, e.borderLeftWidth), this.boxShadow = V(u, QQ, e.boxShadow), this.color = V(u, IC, e.color), this.direction = V(u, vC, e.direction), this.display = V(u, KC, e.display), this.float = V(u, LC, e.cssFloat), this.fontFamily = V(u, oQ, e.fontFamily), this.fontSize = V(u, fQ, e.fontSize), this.fontStyle = V(u, FQ, e.fontStyle), this.fontVariant = V(u, gQ, e.fontVariant), this.fontWeight = V(u, lQ, e.fontWeight), this.letterSpacing = V(u, _C, e.letterSpacing), this.lineBreak = V(u, SC, e.lineBreak), this.lineHeight = V(u, MC, e.lineHeight), this.listStyleImage = V(u, OC, e.listStyleImage), this.listStylePosition = V(u, TC, e.listStylePosition), this.listStyleType = V(u, kC, e.listStyleType), this.marginTop = V(u, GC, e.marginTop), this.marginRight = V(u, VC, e.marginRight), this.marginBottom = V(u, RC, e.marginBottom), this.marginLeft = V(u, NC, e.marginLeft), this.opacity = V(u, BQ, e.opacity);
    var r = V(u, JC, e.overflow);
    this.overflowX = r[0], this.overflowY = r[1 < r.length ? 1 : 0], this.overflowWrap = V(u, PC, e.overflowWrap), this.paddingTop = V(u, XC, e.paddingTop), this.paddingRight = V(u, YC, e.paddingRight), this.paddingBottom = V(u, WC, e.paddingBottom), this.paddingLeft = V(u, ZC, e.paddingLeft), this.paintOrder = V(u, wQ, e.paintOrder), this.position = V(u, zC, e.position), this.textAlign = V(u, jC, e.textAlign), this.textDecorationColor = V(u, iQ, (r = e.textDecorationColor) != null ? r : e.color), this.textDecorationLine = V(u, sQ, (r = e.textDecorationLine) != null ? r : e.textDecoration), this.textShadow = V(u, qC, e.textShadow), this.textTransform = V(u, $C, e.textTransform), this.transform = V(u, AQ, e.transform), this.transformOrigin = V(u, rQ, e.transformOrigin), this.visibility = V(u, nQ, e.visibility), this.webkitTextStrokeColor = V(u, hQ, e.webkitTextStrokeColor), this.webkitTextStrokeWidth = V(u, UQ, e.webkitTextStrokeWidth), this.wordBreak = V(u, cQ, e.wordBreak), this.zIndex = V(u, aQ, e.zIndex);
  }
  return t.prototype.isVisible = function() {
    return 0 < this.display && 0 < this.opacity && this.visibility === 0;
  }, t.prototype.isTransparent = function() {
    return at(this.backgroundColor);
  }, t.prototype.isTransformed = function() {
    return this.transform !== null;
  }, t.prototype.isPositioned = function() {
    return this.position !== 0;
  }, t.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  }, t.prototype.isFloating = function() {
    return this.float !== 0;
  }, t.prototype.isInlineLevel = function() {
    return LA(this.display, 4) || LA(this.display, 33554432) || LA(this.display, 268435456) || LA(this.display, 536870912) || LA(this.display, 67108864) || LA(this.display, 134217728);
  }, t;
}(), V = function(t, u, c) {
  var r = new Rs(), c = c !== null && typeof c < "u" ? c.toString() : u.initialValue, a = (r.write(c), new Ns(r.read()));
  switch (u.type) {
    case 2:
      var i = a.parseComponentValue();
      return u.parse(t, pA(i) ? i.value : u.initialValue);
    case 0:
      return u.parse(t, a.parseComponentValue());
    case 1:
      return u.parse(t, a.parseComponentValues());
    case 4:
      return a.parseComponentValue();
    case 3:
      switch (u.format) {
        case "angle":
          return _r.parse(t, a.parseComponentValue());
        case "color":
          return oe.parse(t, a.parseComponentValue());
        case "image":
          return gc.parse(t, a.parseComponentValue());
        case "length":
          var f = a.parseComponentValue();
          return se(f) ? f : kA;
        case "length-percentage":
          return f = a.parseComponentValue(), yA(f) ? f : kA;
        case "time":
          return zi.parse(t, a.parseComponentValue());
      }
  }
}, pQ = "data-html2canvas-debug", EQ = function(t) {
  switch (t.getAttribute(pQ)) {
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
}, qi = function(t, u) {
  return t = EQ(t), t === 1 || u === t;
}, Tu = function(t, u) {
  this.context = t, this.textNodes = [], this.elements = [], this.flags = 0, qi(u, 3), this.styles = new DQ(t, window.getComputedStyle(u, null)), pw(u) && (this.styles.animationDuration.some(function(e) {
    return 0 < e;
  }) && (u.style.animationDuration = "0s"), this.styles.transform !== null) && (u.style.transform = "none"), this.bounds = Pc(this.context, u), qi(u, 4) && (this.flags |= 16);
}, bQ = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", $i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Vt = "u" < typeof Uint8Array ? [] : new Uint8Array(256), sr = 0; sr < $i.length; sr++)
  Vt[$i.charCodeAt(sr)] = sr;
for (var mQ = function(t) {
  for (var u, e, r, c, f = 0.75 * t.length, a = t.length, i = 0, f = (t[t.length - 1] === "=" && (f--, t[t.length - 2] === "=") && f--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? ArrayBuffer : Array)(f)), g = Array.isArray(f) ? f : new Uint8Array(f), Q = 0; Q < a; Q += 4)
    u = Vt[t.charCodeAt(Q)], e = Vt[t.charCodeAt(Q + 1)], r = Vt[t.charCodeAt(Q + 2)], c = Vt[t.charCodeAt(Q + 3)], g[i++] = u << 2 | e >> 4, g[i++] = (15 & e) << 4 | r >> 2, g[i++] = (3 & r) << 6 | 63 & c;
  return f;
}, HQ = function(t) {
  for (var u = t.length, e = [], r = 0; r < u; r += 2)
    e.push(t[r + 1] << 8 | t[r]);
  return e;
}, yQ = function(t) {
  for (var u = t.length, e = [], r = 0; r < u; r += 4)
    e.push(t[r + 3] << 24 | t[r + 2] << 16 | t[r + 1] << 8 | t[r]);
  return e;
}, He = 5, Fc = 11, Cc = 2, IQ = Fc - He, As = 65536 >> He, vQ = 1 << He, Qc = vQ - 1, KQ = 1024 >> He, us = As + KQ, Ch = us, xQ = 32, LQ = us + xQ, _Q = 65536 >> Fc, SQ = 1 << IQ, MQ = SQ - 1, es = function(t, u, e) {
  return t.slice ? t.slice(u, e) : new Uint16Array(Array.prototype.slice.call(t, u, e));
}, OQ = function(t, u, e) {
  return t.slice ? t.slice(u, e) : new Uint32Array(Array.prototype.slice.call(t, u, e));
}, TQ = function(c, u) {
  var c = mQ(c), e = Array.isArray(c) ? yQ(c) : new Uint32Array(c), c = Array.isArray(c) ? HQ(c) : new Uint16Array(c), r = es(c, 12, e[4] / 2), c = e[5] === 2 ? es(c, (24 + e[4]) / 2) : OQ(e, Math.ceil((24 + e[4]) / 4));
  return new kQ(e[0], e[1], e[2], e[3], r, c);
}, kQ = function() {
  function t(u, e, r, c, a, i) {
    this.initialValue = u, this.errorValue = e, this.highStart = r, this.highValueIndex = c, this.index = a, this.data = i;
  }
  return t.prototype.get = function(u) {
    var e;
    if (0 <= u) {
      if (u < 55296 || 56319 < u && u <= 65535)
        return e = this.index[u >> He], this.data[e = (e << Cc) + (u & Qc)];
      if (u <= 65535)
        return e = this.index[As + (u - 55296 >> He)], this.data[e = (e << Cc) + (u & Qc)];
      if (u < this.highStart)
        return e = this.index[e = LQ - _Q + (u >> Fc)], e = this.index[e += u >> He & MQ], this.data[e = (e << Cc) + (u & Qc)];
      if (u <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, t;
}(), ts = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", GQ = "u" < typeof Uint8Array ? [] : new Uint8Array(256), or = 0; or < ts.length; or++)
  GQ[ts.charCodeAt(or)] = or;
var ds, iA, VQ = 1, wc = 2, hc = 3, rs = 4, ns = 5, RQ = 7, cs = 8, Uc = 9, Dc = 10, as = 11, Bs = 12, is = 13, ss = 14, pc = 15, NQ = function(t) {
  for (var u = [], e = 0, r = t.length; e < r; ) {
    var c, a = t.charCodeAt(e++);
    55296 <= a && a <= 56319 && e < r ? (64512 & (c = t.charCodeAt(e++))) == 56320 ? u.push(((1023 & a) << 10) + (1023 & c) + 65536) : (u.push(a), e--) : u.push(a);
  }
  return u;
}, JQ = function() {
  for (var t = [], u = 0; u < arguments.length; u++)
    t[u] = arguments[u];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, t);
  var e = t.length;
  if (!e)
    return "";
  for (var r = [], c = -1, a = ""; ++c < e; ) {
    var i = t[c];
    i <= 65535 ? r.push(i) : r.push(55296 + ((i -= 65536) >> 10), i % 1024 + 56320), (c + 1 === e || 16384 < r.length) && (a += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return a;
}, PQ = TQ(bQ), xe = "×", XQ = "÷", YQ = function(t) {
  return PQ.get(t);
}, WQ = function(t, u, i) {
  var r = i - 2, c = u[r], a = u[i - 1], i = u[i];
  if (a === wc && i === hc)
    return xe;
  if (a !== wc && a !== hc && a !== rs && i !== wc && i !== hc && i !== rs) {
    if (a === cs && [cs, Uc, as, Bs].indexOf(i) !== -1 || (a === as || a === Uc) && (i === Uc || i === Dc) || (a === Bs || a === Dc) && i === Dc || i === is || i === ns || i === RQ || a === VQ)
      return xe;
    if (a === is && i === ss) {
      for (; c === ns; )
        c = u[--r];
      if (c === ss)
        return xe;
    }
    if (a === pc && i === pc) {
      for (var f = 0; c === pc; )
        f++, c = u[--r];
      if (f % 2 == 0)
        return xe;
    }
  }
  return XQ;
}, ZQ = function(t) {
  var u = NQ(t), e = u.length, r = 0, c = 0, a = u.map(YQ);
  return { next: function() {
    if (e <= r)
      return { done: !0, value: null };
    for (var i, f = xe; r < e && (f = WQ(u, a, ++r)) === xe; )
      ;
    return f !== xe || r === e ? (i = JQ.apply(null, u.slice(c, r)), c = r, { value: i, done: !1 }) : { done: !0, value: null };
  } };
}, jQ = function(t) {
  for (var u, e = ZQ(t), r = []; !(u = e.next()).done; )
    u.value && r.push(u.value.slice());
  return r;
}, zQ = function(t) {
  if (t.createRange) {
    var u = t.createRange();
    if (u.getBoundingClientRect) {
      var e = t.createElement("boundtest"), u = (e.style.height = "123px", e.style.display = "block", t.body.appendChild(e), u.selectNode(e), u.getBoundingClientRect()), u = Math.round(u.height);
      if (t.body.removeChild(e), u === 123)
        return !0;
    }
  }
  return !1;
}, qQ = function(t) {
  var u = t.createElement("boundtest"), e = (u.style.width = "50px", u.style.display = "block", u.style.fontSize = "12px", u.style.letterSpacing = "0px", u.style.wordSpacing = "0px", t.body.appendChild(u), t.createRange()), r = (u.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "", u.firstChild), i = xr(r.data).map(function(f) {
    return HA(f);
  }), c = 0, a = {}, i = i.every(function(F, g) {
    e.setStart(r, c), e.setEnd(r, c + F.length);
    var Q = e.getBoundingClientRect(), F = (c += F.length, Q.x > a.x || Q.y > a.y);
    return a = Q, g === 0 || F;
  });
  return t.body.removeChild(u), i;
}, $Q = function() {
  return typeof new Image().crossOrigin < "u";
}, Aw = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, uw = function(e) {
  var u = new Image(), e = e.createElement("canvas"), r = e.getContext("2d");
  if (!r)
    return !1;
  u.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(u, 0, 0), e.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, os = function(t) {
  return t[0] === 0 && t[1] === 255 && t[2] === 0 && t[3] === 255;
}, ew = function(t) {
  var c = t.createElement("canvas"), u = (c.width = 100, c.height = 100, c.getContext("2d"));
  if (!u)
    return Promise.reject(!1);
  u.fillStyle = "rgb(0, 255, 0)", u.fillRect(0, 0, 100, 100);
  var e = new Image(), r = c.toDataURL(), c = (e.src = r, kc(100, 100, 0, 0, e));
  return u.fillStyle = "red", u.fillRect(0, 0, 100, 100), fs(c).then(function(i) {
    u.drawImage(i, 0, 0);
    var i = u.getImageData(0, 0, 100, 100).data, f = (u.fillStyle = "red", u.fillRect(0, 0, 100, 100), t.createElement("div"));
    return f.style.backgroundImage = "url(" + r + ")", f.style.height = "100px", os(i) ? fs(kc(100, 100, 0, 0, f)) : Promise.reject(!1);
  }).then(function(a) {
    return u.drawImage(a, 0, 0), os(u.getImageData(0, 0, 100, 100).data);
  }).catch(function() {
    return !1;
  });
}, kc = function(t, u, e, r, c) {
  var i = "http://www.w3.org/2000/svg", a = document.createElementNS(i, "svg"), i = document.createElementNS(i, "foreignObject");
  return a.setAttributeNS(null, "width", t.toString()), a.setAttributeNS(null, "height", u.toString()), i.setAttributeNS(null, "width", "100%"), i.setAttributeNS(null, "height", "100%"), i.setAttributeNS(null, "x", e.toString()), i.setAttributeNS(null, "y", r.toString()), i.setAttributeNS(null, "externalResourcesRequired", "true"), a.appendChild(i), i.appendChild(c), a;
}, fs = function(t) {
  return new Promise(function(u, e) {
    var r = new Image();
    r.onload = function() {
      return u(r);
    }, r.onerror = e, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
  });
}, au = { get SUPPORT_RANGE_BOUNDS() {
  var t = zQ(document);
  return Object.defineProperty(au, "SUPPORT_RANGE_BOUNDS", { value: t }), t;
}, get SUPPORT_WORD_BREAKING() {
  var t = au.SUPPORT_RANGE_BOUNDS && qQ(document);
  return Object.defineProperty(au, "SUPPORT_WORD_BREAKING", { value: t }), t;
}, get SUPPORT_SVG_DRAWING() {
  var t = uw(document);
  return Object.defineProperty(au, "SUPPORT_SVG_DRAWING", { value: t }), t;
}, get SUPPORT_FOREIGNOBJECT_DRAWING() {
  var t = typeof Array.from == "function" && typeof window.fetch == "function" ? ew(document) : Promise.resolve(!1);
  return Object.defineProperty(au, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: t }), t;
}, get SUPPORT_CORS_IMAGES() {
  var t = $Q();
  return Object.defineProperty(au, "SUPPORT_CORS_IMAGES", { value: t }), t;
}, get SUPPORT_RESPONSE_TYPE() {
  var t = Aw();
  return Object.defineProperty(au, "SUPPORT_RESPONSE_TYPE", { value: t }), t;
}, get SUPPORT_CORS_XHR() {
  var t = "withCredentials" in new XMLHttpRequest();
  return Object.defineProperty(au, "SUPPORT_CORS_XHR", { value: t }), t;
}, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
  var t = !!(typeof Intl < "u" && Intl.Segmenter);
  return Object.defineProperty(au, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: t }), t;
} }, Xt = function(t, u) {
  this.text = t, this.bounds = u;
}, tw = function(t, c, e, r) {
  var c = nw(c, e), a = [], i = 0;
  return c.forEach(function(f) {
    var g, Q, F;
    e.textDecorationLine.length || 0 < f.trim().length ? au.SUPPORT_RANGE_BOUNDS ? 1 < (g = ls(r, i, f.length).getClientRects()).length ? (F = Yc(f), Q = 0, F.forEach(function(U) {
      a.push(new Xt(U, Le.fromDOMRectList(t, ls(r, Q + i, U.length).getClientRects()))), Q += U.length;
    })) : a.push(new Xt(f, Le.fromDOMRectList(t, g))) : (F = r.splitText(f.length), a.push(new Xt(f, dw(t, r))), r = F) : au.SUPPORT_RANGE_BOUNDS || (r = r.splitText(f.length)), i += f.length;
  }), a;
}, dw = function(t, u) {
  var e = u.ownerDocument;
  if (e) {
    var e = e.createElement("html2canvaswrapper"), r = (e.appendChild(u.cloneNode(!0)), u.parentNode);
    if (r)
      return r.replaceChild(e, u), u = Pc(t, e), e.firstChild && r.replaceChild(e.firstChild, e), u;
  }
  return Le.EMPTY;
}, ls = function(t, u, e) {
  var r = t.ownerDocument;
  if (r)
    return (r = r.createRange()).setStart(t, u), r.setEnd(t, u + e), r;
  throw new Error("Node has no owner document");
}, Yc = function(t) {
  var u;
  return au.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (u = new Intl.Segmenter(void 0, { granularity: "grapheme" }), Array.from(u.segment(t)).map(function(e) {
    return e.segment;
  })) : jQ(t);
}, rw = function(t, u) {
  var e;
  return au.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (e = new Intl.Segmenter(void 0, { granularity: "word" }), Array.from(e.segment(t)).map(function(r) {
    return r.segment;
  })) : aw(t, u);
}, nw = function(t, u) {
  return u.letterSpacing !== 0 ? Yc(t) : rw(t, u);
}, cw = [32, 160, 4961, 65792, 65793, 4153, 4241], aw = function(t, u) {
  for (var e, r = Vg(t, { lineBreak: u.lineBreak, wordBreak: u.overflowWrap === "break-word" ? "break-word" : u.wordBreak }), c = []; !(e = r.next()).done; )
    (function() {
      var a, i;
      e.value && (a = e.value.slice(), a = xr(a), i = "", a.forEach(function(f) {
        cw.indexOf(f) === -1 ? i += HA(f) : (i.length && c.push(i), c.push(HA(f)), i = "");
      }), i.length) && c.push(i);
    })();
  return c;
}, Bw = function(t, u, e) {
  this.text = iw(u.data, e.textTransform), this.textBounds = tw(t, this.text, e, u);
}, iw = function(t, u) {
  switch (u) {
    case 1:
      return t.toLowerCase();
    case 3:
      return t.replace(sw, ow);
    case 2:
      return t.toUpperCase();
    default:
      return t;
  }
}, sw = /(^|\s|:|-|\(|\))([a-z])/g, ow = function(t, u, e) {
  return 0 < t.length ? u + e.toUpperCase() : t;
}, no = function(t) {
  function u(e, r) {
    return e = t.call(this, e, r) || this, e.src = r.currentSrc || r.src, e.intrinsicWidth = r.naturalWidth, e.intrinsicHeight = r.naturalHeight, e.context.cache.addImage(e.src), e;
  }
  return Iu(u, t), u;
}(Tu), co = function(t) {
  function u(e, r) {
    return e = t.call(this, e, r) || this, e.canvas = r, e.intrinsicWidth = r.width, e.intrinsicHeight = r.height, e;
  }
  return Iu(u, t), u;
}(Tu), ao = function(t) {
  function u(i, r) {
    var c = t.call(this, i, r) || this, a = new XMLSerializer(), i = Pc(i, r);
    return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), c.svg = "data:image/svg+xml," + encodeURIComponent(a.serializeToString(r)), c.intrinsicWidth = r.width.baseVal.value, c.intrinsicHeight = r.height.baseVal.value, c.context.cache.addImage(c.svg), c;
  }
  return Iu(u, t), u;
}(Tu), Bo = function(t) {
  function u(e, r) {
    return e = t.call(this, e, r) || this, e.value = r.value, e;
  }
  return Iu(u, t), u;
}(Tu), Gc = function(t) {
  function u(e, r) {
    return e = t.call(this, e, r) || this, e.start = r.start, e.reversed = typeof r.reversed == "boolean" && r.reversed === !0, e;
  }
  return Iu(u, t), u;
}(Tu), fw = [{ type: 15, flags: 0, unit: "px", number: 3 }], lw = [{ type: 16, flags: 0, number: 50 }], gw = function(t) {
  return t.width > t.height ? new Le(t.left + (t.width - t.height) / 2, t.top, t.height, t.height) : t.width < t.height ? new Le(t.left, t.top + (t.height - t.width) / 2, t.width, t.width) : t;
}, Fw = function(t) {
  var u = t.type === Cw ? new Array(t.value.length + 1).join("•") : t.value;
  return u.length === 0 ? t.placeholder || "" : u;
}, Hr = "checkbox", yr = "radio", Cw = "password", gs = 707406591, Vc = function(t) {
  function u(e, r) {
    var c = t.call(this, e, r) || this;
    switch (c.type = r.type.toLowerCase(), c.checked = r.checked, c.value = Fw(r), c.type !== Hr && c.type !== yr || (c.styles.backgroundColor = 3739148031, c.styles.borderTopColor = c.styles.borderRightColor = c.styles.borderBottomColor = c.styles.borderLeftColor = 2779096575, c.styles.borderTopWidth = c.styles.borderRightWidth = c.styles.borderBottomWidth = c.styles.borderLeftWidth = 1, c.styles.borderTopStyle = c.styles.borderRightStyle = c.styles.borderBottomStyle = c.styles.borderLeftStyle = 1, c.styles.backgroundClip = [0], c.styles.backgroundOrigin = [0], c.bounds = gw(c.bounds)), c.type) {
      case Hr:
        c.styles.borderTopRightRadius = c.styles.borderTopLeftRadius = c.styles.borderBottomRightRadius = c.styles.borderBottomLeftRadius = fw;
        break;
      case yr:
        c.styles.borderTopRightRadius = c.styles.borderTopLeftRadius = c.styles.borderBottomRightRadius = c.styles.borderBottomLeftRadius = lw;
    }
    return c;
  }
  return Iu(u, t), u;
}(Tu), io = function(t) {
  function u(e, r) {
    return e = t.call(this, e, r) || this, r = r.options[r.selectedIndex || 0], e.value = r && r.text || "", e;
  }
  return Iu(u, t), u;
}(Tu), so = function(t) {
  function u(e, r) {
    return e = t.call(this, e, r) || this, e.value = r.value, e;
  }
  return Iu(u, t), u;
}(Tu), oo = function(t) {
  function u(e, r) {
    var c, a, i = t.call(this, e, r) || this;
    i.src = r.src, i.width = parseInt(r.width, 10) || 0, i.height = parseInt(r.height, 10) || 0, i.backgroundColor = i.styles.backgroundColor;
    try {
      r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement && (i.tree = ww(e, r.contentWindow.document.documentElement), c = r.contentWindow.document.documentElement ? Xi(e, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : jt.TRANSPARENT, a = r.contentWindow.document.body ? Xi(e, getComputedStyle(r.contentWindow.document.body).backgroundColor) : jt.TRANSPARENT, i.backgroundColor = at(c) ? at(a) ? i.styles.backgroundColor : a : c);
    } catch {
    }
    return i;
  }
  return Iu(u, t), u;
}(Tu), Qw = ["OL", "UL", "MENU"], Dr = function(t, u, e, r) {
  for (var c, a, i = u.firstChild; i; i = c)
    c = i.nextSibling, Dw(i) && 0 < i.data.trim().length ? e.textNodes.push(new Bw(t, i, e.styles)) : lo(i) && (xw(i) && i.assignedNodes ? i.assignedNodes().forEach(function(f) {
      return Dr(t, f, e, r);
    }) : (a = fo(t, i)).styles.isVisible() && (hw(i, a, r) ? a.flags |= 4 : Uw(a.styles) && (a.flags |= 2), Qw.indexOf(i.tagName) !== -1 && (a.flags |= 8), e.elements.push(a), i.slot, i.shadowRoot ? Dr(t, i.shadowRoot, a, r) : Fo(i) || go(i) || Co(i) || Dr(t, i, a, r)));
}, fo = function(t, u) {
  return new (vw(u) ? no : Iw(u) ? co : go(u) ? ao : bw(u) ? Bo : mw(u) ? Gc : Hw(u) ? Vc : Co(u) ? io : Fo(u) ? so : Kw(u) ? oo : Tu)(t, u);
}, ww = function(t, u) {
  var e = fo(t, u);
  return e.flags |= 4, Dr(t, u, e, e), e;
}, hw = function(t, u, e) {
  return u.styles.isPositionedWithZIndex() || u.styles.opacity < 1 || u.styles.isTransformed() || yw(t) && e.styles.isTransparent();
}, Uw = function(t) {
  return t.isPositioned() || t.isFloating();
}, Dw = function(t) {
  return t.nodeType === Node.TEXT_NODE;
}, lo = function(t) {
  return t.nodeType === Node.ELEMENT_NODE;
}, pw = function(t) {
  return lo(t) && typeof t.style < "u" && !Ew(t);
}, Ew = function(t) {
  return typeof t.className == "object";
}, bw = function(t) {
  return t.tagName === "LI";
}, mw = function(t) {
  return t.tagName === "OL";
}, Hw = function(t) {
  return t.tagName === "INPUT";
}, go = function(t) {
  return t.tagName === "svg";
}, yw = function(t) {
  return t.tagName === "BODY";
}, Iw = function(t) {
  return t.tagName === "CANVAS";
}, vw = function(t) {
  return t.tagName === "IMG";
}, Kw = function(t) {
  return t.tagName === "IFRAME";
}, Fo = function(t) {
  return t.tagName === "TEXTAREA";
}, Co = function(t) {
  return t.tagName === "SELECT";
}, xw = function(t) {
  return t.tagName === "SLOT";
}, Fs = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, Cs = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] }, Lw = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] }, _w = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] }, At = function(t, u, e, r, c, a) {
  return t < u || e < t ? Wc(t, c, 0 < a.length) : r.integers.reduce(function(i, f, g) {
    for (; f <= t; )
      t -= f, i += r.values[g];
    return i;
  }, "") + a;
}, Qo = function(t, u, e, r) {
  for (var c = ""; e || t--, c = r(t) + c, u <= (t /= u) * u; )
    ;
  return c;
}, mA = function(t, u, e, r, c) {
  var a = e - u + 1;
  return (t < 0 ? "-" : "") + (Qo(Math.abs(t), a, r, function(i) {
    return HA(Math.floor(i % a) + u);
  }) + c);
}, ye = function(t, u, e) {
  e === void 0 && (e = ". ");
  var r = u.length;
  return Qo(Math.abs(t), r, !1, function(c) {
    return u[Math.floor(c % r)];
  }) + e;
}, dt = 1, re = 2, ne = 4, Rt = 8, Zu = function(t, u, e, r, c, a) {
  if (t < -9999 || 9999 < t)
    return Wc(t, 4, 0 < c.length);
  var i = Math.abs(t), f = c;
  if (i === 0)
    return u[0] + f;
  for (var g = 0; 0 < i && g <= 4; g++) {
    var Q = i % 10;
    Q == 0 && LA(a, dt) && f !== "" ? f = u[Q] + f : 1 < Q || Q == 1 && g === 0 || Q == 1 && g === 1 && LA(a, re) || Q == 1 && g === 1 && LA(a, ne) && 100 < t || Q == 1 && 1 < g && LA(a, Rt) ? f = u[Q] + (0 < g ? e[g - 1] : "") + f : Q == 1 && 0 < g && (f = e[g - 1] + f), i = Math.floor(i / 10);
  }
  return (t < 0 ? r : "") + f;
}, Qs = "十百千萬", ws = "拾佰仟萬", hs = "マイナス", Ec = "마이너스", Wc = function(t, u, e) {
  var r = e ? ". " : "", c = e ? "、" : "", a = e ? ", " : "", i = e ? " " : "";
  switch (u) {
    case 0:
      return "•" + i;
    case 1:
      return "◦" + i;
    case 2:
      return "◾" + i;
    case 5:
      var f = mA(t, 48, 57, !0, r);
      return f.length < 4 ? "0" + f : f;
    case 4:
      return ye(t, "〇一二三四五六七八九", c);
    case 6:
      return At(t, 1, 3999, Fs, 3, r).toLowerCase();
    case 7:
      return At(t, 1, 3999, Fs, 3, r);
    case 8:
      return mA(t, 945, 969, !1, r);
    case 9:
      return mA(t, 97, 122, !1, r);
    case 10:
      return mA(t, 65, 90, !1, r);
    case 11:
      return mA(t, 1632, 1641, !0, r);
    case 12:
    case 49:
      return At(t, 1, 9999, Cs, 3, r);
    case 35:
      return At(t, 1, 9999, Cs, 3, r).toLowerCase();
    case 13:
      return mA(t, 2534, 2543, !0, r);
    case 14:
    case 30:
      return mA(t, 6112, 6121, !0, r);
    case 15:
      return ye(t, "子丑寅卯辰巳午未申酉戌亥", c);
    case 16:
      return ye(t, "甲乙丙丁戊己庚辛壬癸", c);
    case 17:
    case 48:
      return Zu(t, "零一二三四五六七八九", Qs, "負", c, re | ne | Rt);
    case 47:
      return Zu(t, "零壹貳參肆伍陸柒捌玖", ws, "負", c, dt | re | ne | Rt);
    case 42:
      return Zu(t, "零一二三四五六七八九", Qs, "负", c, re | ne | Rt);
    case 41:
      return Zu(t, "零壹贰叁肆伍陆柒捌玖", ws, "负", c, dt | re | ne | Rt);
    case 26:
      return Zu(t, "〇一二三四五六七八九", "十百千万", hs, c, 0);
    case 25:
      return Zu(t, "零壱弐参四伍六七八九", "拾百千万", hs, c, dt | re | ne);
    case 31:
      return Zu(t, "영일이삼사오육칠팔구", "십백천만", Ec, a, dt | re | ne);
    case 33:
      return Zu(t, "零一二三四五六七八九", "十百千萬", Ec, a, 0);
    case 32:
      return Zu(t, "零壹貳參四五六七八九", "拾百千", Ec, a, dt | re | ne);
    case 18:
      return mA(t, 2406, 2415, !0, r);
    case 20:
      return At(t, 1, 19999, _w, 3, r);
    case 21:
      return mA(t, 2790, 2799, !0, r);
    case 22:
      return mA(t, 2662, 2671, !0, r);
    case 22:
      return At(t, 1, 10999, Lw, 3, r);
    case 23:
      return ye(t, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return ye(t, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return mA(t, 3302, 3311, !0, r);
    case 28:
      return ye(t, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", c);
    case 29:
      return ye(t, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", c);
    case 34:
      return mA(t, 3792, 3801, !0, r);
    case 37:
      return mA(t, 6160, 6169, !0, r);
    case 38:
      return mA(t, 4160, 4169, !0, r);
    case 39:
      return mA(t, 2918, 2927, !0, r);
    case 40:
      return mA(t, 1776, 1785, !0, r);
    case 43:
      return mA(t, 3046, 3055, !0, r);
    case 44:
      return mA(t, 3174, 3183, !0, r);
    case 45:
      return mA(t, 3664, 3673, !0, r);
    case 46:
      return mA(t, 3872, 3881, !0, r);
    default:
      return mA(t, 48, 57, !0, r);
  }
}, Sw = (function(t) {
  t[t.BEFORE = 0] = "BEFORE", t[t.AFTER = 1] = "AFTER";
}(ds = ds || {}), function() {
  function t() {
  }
  return t.getOrigin = function(u) {
    var e = t._link;
    return e ? (e.href = u, e.href = e.href, e.protocol + e.hostname + e.port) : "about:blank";
  }, t.isSameOrigin = function(u) {
    return t.getOrigin(u) === t._origin;
  }, t.setContext = function(u) {
    t._link = u.document.createElement("a"), t._origin = t.getOrigin(u.location.href);
  }, t._origin = "about:blank", t;
}()), k = function() {
  function t(u, e) {
    this.type = 0, this.x = u, this.y = e;
  }
  return t.prototype.add = function(u, e) {
    return new t(this.x + u, this.y + e);
  }, t;
}(), ut = function(t, u, e) {
  return new k(t.x + (u.x - t.x) * e, t.y + (u.y - t.y) * e);
}, fr = function() {
  function t(u, e, r, c) {
    this.type = 1, this.start = u, this.startControl = e, this.endControl = r, this.end = c;
  }
  return t.prototype.subdivide = function(f, e) {
    var r = ut(this.start, this.startControl, f), i = ut(this.startControl, this.endControl, f), c = ut(this.endControl, this.end, f), a = ut(r, i, f), i = ut(i, c, f), f = ut(a, i, f);
    return e ? new t(this.start, r, a, f) : new t(f, i, c, this.end);
  }, t.prototype.add = function(u, e) {
    return new t(this.start.add(u, e), this.startControl.add(u, e), this.endControl.add(u, e), this.end.add(u, e));
  }, t.prototype.reverse = function() {
    return new t(this.end, this.endControl, this.startControl, this.start);
  }, t;
}(), wu = function(t) {
  return t.type === 1;
}, Mw = function(t) {
  var O = t.styles, u = t.bounds, e = (r = Gt(O.borderTopLeftRadius, u.width, u.height))[0], r = r[1], c = (a = Gt(O.borderTopRightRadius, u.width, u.height))[0], a = a[1], i = (f = Gt(O.borderBottomRightRadius, u.width, u.height))[0], f = f[1], g = (Q = Gt(O.borderBottomLeftRadius, u.width, u.height))[0], Q = Q[1];
  (F = []).push((e + c) / u.width), F.push((g + i) / u.width), F.push((r + Q) / u.height), F.push((a + f) / u.height), 1 < (F = Math.max.apply(Math, F)) && (e /= F, r /= F, c /= F, a /= F, i /= F, f /= F, g /= F, Q /= F);
  var F = u.width - c, U = u.height - f, m = u.width - i, b = u.height - Q, y = O.borderTopWidth, I = O.borderRightWidth, K = O.borderBottomWidth, x = O.borderLeftWidth, G = gA(O.paddingTop, t.bounds.width), $ = gA(O.paddingRight, t.bounds.width), Z = gA(O.paddingBottom, t.bounds.width), O = gA(O.paddingLeft, t.bounds.width);
  this.topLeftBorderDoubleOuterBox = 0 < e || 0 < r ? wA(u.left + x / 3, u.top + y / 3, e - x / 3, r - y / 3, iA.TOP_LEFT) : new k(u.left + x / 3, u.top + y / 3), this.topRightBorderDoubleOuterBox = 0 < e || 0 < r ? wA(u.left + F, u.top + y / 3, c - I / 3, a - y / 3, iA.TOP_RIGHT) : new k(u.left + u.width - I / 3, u.top + y / 3), this.bottomRightBorderDoubleOuterBox = 0 < i || 0 < f ? wA(u.left + m, u.top + U, i - I / 3, f - K / 3, iA.BOTTOM_RIGHT) : new k(u.left + u.width - I / 3, u.top + u.height - K / 3), this.bottomLeftBorderDoubleOuterBox = 0 < g || 0 < Q ? wA(u.left + x / 3, u.top + b, g - x / 3, Q - K / 3, iA.BOTTOM_LEFT) : new k(u.left + x / 3, u.top + u.height - K / 3), this.topLeftBorderDoubleInnerBox = 0 < e || 0 < r ? wA(u.left + 2 * x / 3, u.top + 2 * y / 3, e - 2 * x / 3, r - 2 * y / 3, iA.TOP_LEFT) : new k(u.left + 2 * x / 3, u.top + 2 * y / 3), this.topRightBorderDoubleInnerBox = 0 < e || 0 < r ? wA(u.left + F, u.top + 2 * y / 3, c - 2 * I / 3, a - 2 * y / 3, iA.TOP_RIGHT) : new k(u.left + u.width - 2 * I / 3, u.top + 2 * y / 3), this.bottomRightBorderDoubleInnerBox = 0 < i || 0 < f ? wA(u.left + m, u.top + U, i - 2 * I / 3, f - 2 * K / 3, iA.BOTTOM_RIGHT) : new k(u.left + u.width - 2 * I / 3, u.top + u.height - 2 * K / 3), this.bottomLeftBorderDoubleInnerBox = 0 < g || 0 < Q ? wA(u.left + 2 * x / 3, u.top + b, g - 2 * x / 3, Q - 2 * K / 3, iA.BOTTOM_LEFT) : new k(u.left + 2 * x / 3, u.top + u.height - 2 * K / 3), this.topLeftBorderStroke = 0 < e || 0 < r ? wA(u.left + x / 2, u.top + y / 2, e - x / 2, r - y / 2, iA.TOP_LEFT) : new k(u.left + x / 2, u.top + y / 2), this.topRightBorderStroke = 0 < e || 0 < r ? wA(u.left + F, u.top + y / 2, c - I / 2, a - y / 2, iA.TOP_RIGHT) : new k(u.left + u.width - I / 2, u.top + y / 2), this.bottomRightBorderStroke = 0 < i || 0 < f ? wA(u.left + m, u.top + U, i - I / 2, f - K / 2, iA.BOTTOM_RIGHT) : new k(u.left + u.width - I / 2, u.top + u.height - K / 2), this.bottomLeftBorderStroke = 0 < g || 0 < Q ? wA(u.left + x / 2, u.top + b, g - x / 2, Q - K / 2, iA.BOTTOM_LEFT) : new k(u.left + x / 2, u.top + u.height - K / 2), this.topLeftBorderBox = 0 < e || 0 < r ? wA(u.left, u.top, e, r, iA.TOP_LEFT) : new k(u.left, u.top), this.topRightBorderBox = 0 < c || 0 < a ? wA(u.left + F, u.top, c, a, iA.TOP_RIGHT) : new k(u.left + u.width, u.top), this.bottomRightBorderBox = 0 < i || 0 < f ? wA(u.left + m, u.top + U, i, f, iA.BOTTOM_RIGHT) : new k(u.left + u.width, u.top + u.height), this.bottomLeftBorderBox = 0 < g || 0 < Q ? wA(u.left, u.top + b, g, Q, iA.BOTTOM_LEFT) : new k(u.left, u.top + u.height), this.topLeftPaddingBox = 0 < e || 0 < r ? wA(u.left + x, u.top + y, Math.max(0, e - x), Math.max(0, r - y), iA.TOP_LEFT) : new k(u.left + x, u.top + y), this.topRightPaddingBox = 0 < c || 0 < a ? wA(u.left + Math.min(F, u.width - I), u.top + y, F > u.width + I ? 0 : Math.max(0, c - I), Math.max(0, a - y), iA.TOP_RIGHT) : new k(u.left + u.width - I, u.top + y), this.bottomRightPaddingBox = 0 < i || 0 < f ? wA(u.left + Math.min(m, u.width - x), u.top + Math.min(U, u.height - K), Math.max(0, i - I), Math.max(0, f - K), iA.BOTTOM_RIGHT) : new k(u.left + u.width - I, u.top + u.height - K), this.bottomLeftPaddingBox = 0 < g || 0 < Q ? wA(u.left + x, u.top + Math.min(b, u.height - K), Math.max(0, g - x), Math.max(0, Q - K), iA.BOTTOM_LEFT) : new k(u.left + x, u.top + u.height - K), this.topLeftContentBox = 0 < e || 0 < r ? wA(u.left + x + O, u.top + y + G, Math.max(0, e - (x + O)), Math.max(0, r - (y + G)), iA.TOP_LEFT) : new k(u.left + x + O, u.top + y + G), this.topRightContentBox = 0 < c || 0 < a ? wA(u.left + Math.min(F, u.width + x + O), u.top + y + G, F > u.width + x + O ? 0 : c - x + O, a - (y + G), iA.TOP_RIGHT) : new k(u.left + u.width - (I + $), u.top + y + G), this.bottomRightContentBox = 0 < i || 0 < f ? wA(u.left + Math.min(m, u.width - (x + O)), u.top + Math.min(U, u.height + y + G), Math.max(0, i - (I + $)), f - (K + Z), iA.BOTTOM_RIGHT) : new k(u.left + u.width - (I + $), u.top + u.height - (K + Z)), this.bottomLeftContentBox = 0 < g || 0 < Q ? wA(u.left + x + O, u.top + b, Math.max(0, g - (x + O)), Q - (K + Z), iA.BOTTOM_LEFT) : new k(u.left + x + O, u.top + u.height - (K + Z));
}, wA = (function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 1] = "TOP_RIGHT", t[t.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", t[t.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
}(iA = iA || {}), function(t, u, e, r, c) {
  var a = (Math.sqrt(2) - 1) / 3 * 4, i = e * a, f = r * a, g = t + e, Q = u + r;
  switch (c) {
    case iA.TOP_LEFT:
      return new fr(new k(t, Q), new k(t, Q - f), new k(g - i, u), new k(g, u));
    case iA.TOP_RIGHT:
      return new fr(new k(t, u), new k(t + i, u), new k(g, Q - f), new k(g, Q));
    case iA.BOTTOM_RIGHT:
      return new fr(new k(g, u), new k(g, u + f), new k(t + i, Q), new k(t, Q));
    default:
      return iA.BOTTOM_LEFT, new fr(new k(g, Q), new k(g - i, Q), new k(t, u + f), new k(t, u));
  }
}), Ir = function(t) {
  return [t.topLeftBorderBox, t.topRightBorderBox, t.bottomRightBorderBox, t.bottomLeftBorderBox];
}, Ow = function(t) {
  return [t.topLeftContentBox, t.topRightContentBox, t.bottomRightContentBox, t.bottomLeftContentBox];
}, vr = function(t) {
  return [t.topLeftPaddingBox, t.topRightPaddingBox, t.bottomRightPaddingBox, t.bottomLeftPaddingBox];
}, Tw = function(t, u, e) {
  this.offsetX = t, this.offsetY = u, this.matrix = e, this.type = 0, this.target = 6;
}, lr = function(t, u) {
  this.path = t, this.target = u, this.type = 1;
}, kw = function(t) {
  this.opacity = t, this.type = 2, this.target = 6;
}, Gw = function(t) {
  return t.type === 0;
}, wo = function(t) {
  return t.type === 1;
}, Vw = function(t) {
  return t.type === 2;
}, Us = function(t, u) {
  return t.length === u.length && t.some(function(e, r) {
    return e === u[r];
  });
}, Rw = function(t, u, e, r, c) {
  return t.map(function(a, i) {
    switch (i) {
      case 0:
        return a.add(u, e);
      case 1:
        return a.add(u + r, e);
      case 2:
        return a.add(u + r, e + c);
      case 3:
        return a.add(u, e + c);
    }
    return a;
  });
}, ho = function(t) {
  this.element = t, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
}, Uo = function() {
  function t(u, e) {
    var r;
    this.container = u, this.parent = e, this.effects = [], this.curves = new Mw(this.container), this.container.styles.opacity < 1 && this.effects.push(new kw(this.container.styles.opacity)), this.container.styles.transform !== null && (u = this.container.bounds.left + this.container.styles.transformOrigin[0].number, e = this.container.bounds.top + this.container.styles.transformOrigin[1].number, r = this.container.styles.transform, this.effects.push(new Tw(u, e, r))), this.container.styles.overflowX !== 0 && (u = Ir(this.curves), e = vr(this.curves), Us(u, e) ? this.effects.push(new lr(u, 6)) : (this.effects.push(new lr(u, 2)), this.effects.push(new lr(e, 4))));
  }
  return t.prototype.getEffects = function(u) {
    for (var e = [2, 3].indexOf(this.container.styles.position) === -1, r = this.parent, c = this.effects.slice(0); r; ) {
      var a, i, f = r.effects.filter(function(g) {
        return !wo(g);
      });
      e || r.container.styles.position !== 0 || !r.parent ? (c.unshift.apply(c, f), e = [2, 3].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0 && (a = Ir(r.curves), i = vr(r.curves), Us(a, i) || c.unshift(new lr(i, 6)))) : c.unshift.apply(c, f), r = r.parent;
    }
    return c.filter(function(g) {
      return LA(g.target, u);
    });
  }, t;
}(), Rc = function(t, u, e, r) {
  t.container.elements.forEach(function(c) {
    var a, i, f, g, Q = LA(c.flags, 4), F = LA(c.flags, 2), U = new Uo(c, t), m = (LA(c.styles.display, 2048) && r.push(U), LA(c.flags, 8) ? [] : r);
    Q || F ? (F = Q || c.styles.isPositioned() ? e : u, a = new ho(U), c.styles.isPositioned() || c.styles.opacity < 1 || c.styles.isTransformed() ? (i = c.styles.zIndex.order) < 0 ? (f = 0, F.negativeZIndex.some(function(b, y) {
      return i > b.element.container.styles.zIndex.order ? (f = y, !1) : 0 < f;
    }), F.negativeZIndex.splice(f, 0, a)) : 0 < i ? (g = 0, F.positiveZIndex.some(function(b, y) {
      return i >= b.element.container.styles.zIndex.order ? (g = y + 1, !1) : 0 < g;
    }), F.positiveZIndex.splice(g, 0, a)) : F.zeroOrAutoZIndexOrTransformedOrOpacity.push(a) : (c.styles.isFloating() ? F.nonPositionedFloats : F.nonPositionedInlineLevel).push(a), Rc(U, a, Q ? a : e, m)) : ((c.styles.isInlineLevel() ? u.inlineLevel : u.nonInlineLevel).push(U), Rc(U, u, e, m)), LA(c.flags, 8) && Do(c, m);
  });
}, Do = function(t, u) {
  for (var e = t instanceof Gc ? t.start : 1, r = t instanceof Gc && t.reversed, c = 0; c < u.length; c++) {
    var a = u[c];
    a.container instanceof Bo && typeof a.container.value == "number" && a.container.value !== 0 && (e = a.container.value), a.listValue = Wc(e, a.container.styles.listStyleType, !0), e += r ? -1 : 1;
  }
}, Nw = function(u) {
  var u = new Uo(u, null), e = new ho(u), r = [];
  return Rc(u, e, e, r), Do(u.container, r), e;
}, Ds = function(t, u) {
  switch (u) {
    case 0:
      return Uu(t.topLeftBorderBox, t.topLeftPaddingBox, t.topRightBorderBox, t.topRightPaddingBox);
    case 1:
      return Uu(t.topRightBorderBox, t.topRightPaddingBox, t.bottomRightBorderBox, t.bottomRightPaddingBox);
    case 2:
      return Uu(t.bottomRightBorderBox, t.bottomRightPaddingBox, t.bottomLeftBorderBox, t.bottomLeftPaddingBox);
    default:
      return Uu(t.bottomLeftBorderBox, t.bottomLeftPaddingBox, t.topLeftBorderBox, t.topLeftPaddingBox);
  }
}, Jw = function(t, u) {
  switch (u) {
    case 0:
      return Uu(t.topLeftBorderBox, t.topLeftBorderDoubleOuterBox, t.topRightBorderBox, t.topRightBorderDoubleOuterBox);
    case 1:
      return Uu(t.topRightBorderBox, t.topRightBorderDoubleOuterBox, t.bottomRightBorderBox, t.bottomRightBorderDoubleOuterBox);
    case 2:
      return Uu(t.bottomRightBorderBox, t.bottomRightBorderDoubleOuterBox, t.bottomLeftBorderBox, t.bottomLeftBorderDoubleOuterBox);
    default:
      return Uu(t.bottomLeftBorderBox, t.bottomLeftBorderDoubleOuterBox, t.topLeftBorderBox, t.topLeftBorderDoubleOuterBox);
  }
}, Pw = function(t, u) {
  switch (u) {
    case 0:
      return Uu(t.topLeftBorderDoubleInnerBox, t.topLeftPaddingBox, t.topRightBorderDoubleInnerBox, t.topRightPaddingBox);
    case 1:
      return Uu(t.topRightBorderDoubleInnerBox, t.topRightPaddingBox, t.bottomRightBorderDoubleInnerBox, t.bottomRightPaddingBox);
    case 2:
      return Uu(t.bottomRightBorderDoubleInnerBox, t.bottomRightPaddingBox, t.bottomLeftBorderDoubleInnerBox, t.bottomLeftPaddingBox);
    default:
      return Uu(t.bottomLeftBorderDoubleInnerBox, t.bottomLeftPaddingBox, t.topLeftBorderDoubleInnerBox, t.topLeftPaddingBox);
  }
}, Xw = function(t, u) {
  switch (u) {
    case 0:
      return gr(t.topLeftBorderStroke, t.topRightBorderStroke);
    case 1:
      return gr(t.topRightBorderStroke, t.bottomRightBorderStroke);
    case 2:
      return gr(t.bottomRightBorderStroke, t.bottomLeftBorderStroke);
    default:
      return gr(t.bottomLeftBorderStroke, t.topLeftBorderStroke);
  }
}, gr = function(t, u) {
  var e = [];
  return wu(t) ? e.push(t.subdivide(0.5, !1)) : e.push(t), wu(u) ? e.push(u.subdivide(0.5, !0)) : e.push(u), e;
}, Uu = function(t, u, e, r) {
  var c = [];
  return wu(t) ? c.push(t.subdivide(0.5, !1)) : c.push(t), wu(e) ? c.push(e.subdivide(0.5, !0)) : c.push(e), wu(r) ? c.push(r.subdivide(0.5, !0).reverse()) : c.push(r), wu(u) ? c.push(u.subdivide(0.5, !1).reverse()) : c.push(u), c;
}, po = function(e) {
  var u = e.bounds, e = e.styles;
  return u.add(e.borderLeftWidth, e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth), -(e.borderTopWidth + e.borderBottomWidth));
}, Kr = function(e) {
  var u = e.styles, e = e.bounds, r = gA(u.paddingLeft, e.width), c = gA(u.paddingRight, e.width), a = gA(u.paddingTop, e.width), i = gA(u.paddingBottom, e.width);
  return e.add(r + u.borderLeftWidth, a + u.borderTopWidth, -(u.borderRightWidth + u.borderLeftWidth + r + c), -(u.borderTopWidth + u.borderBottomWidth + a + i));
}, Yw = function(t, u) {
  return t === 0 ? u.bounds : (t === 2 ? Kr : po)(u);
}, Ww = function(t, u) {
  return t === 0 ? u.bounds : (t === 2 ? Kr : po)(u);
}, bc = function(t, u, a) {
  var r = Yw(rt(t.styles.backgroundOrigin, u), t), c = Ww(rt(t.styles.backgroundClip, u), t), a = Zw(rt(t.styles.backgroundSize, u), a, r), i = a[0], f = a[1], g = Gt(rt(t.styles.backgroundPosition, u), r.width - i, r.height - f);
  return [jw(rt(t.styles.backgroundRepeat, u), g, a, r, c), Math.round(r.left + g[0]), Math.round(r.top + g[1]), i, f];
}, et = function(t) {
  return pA(t) && t.value === Bt.AUTO;
}, Fr = function(t) {
  return typeof t == "number";
}, Zw = function(f, a, e) {
  var r = a[0], c = a[1], a = a[2], i = f[0], f = f[1];
  if (!i)
    return [0, 0];
  if (yA(i) && f && yA(f))
    return [gA(i, e.width), gA(f, e.height)];
  var g = Fr(a);
  if (pA(i) && (i.value === Bt.CONTAIN || i.value === Bt.COVER))
    return Fr(a) ? e.width / e.height < a != (i.value === Bt.COVER) ? [e.width, e.width / a] : [e.height * a, e.height] : [e.width, e.height];
  var Q = Fr(r), F = Fr(c), U = Q || F;
  if (et(i) && (!f || et(f)))
    return Q && F ? [r, c] : g || U ? U && g ? [Q ? r : c * a, F ? c : r / a] : [Q ? r : e.width, F ? c : e.height] : [e.width, e.height];
  if (g)
    return g = U = 0, yA(i) ? U = gA(i, e.width) : yA(f) && (g = gA(f, e.height)), et(i) ? U = g * a : f && !et(f) || (g = U / a), [U, g];
  if (a = null, U = null, yA(i) ? a = gA(i, e.width) : f && yA(f) && (U = gA(f, e.height)), (a = (U = a === null || f && !et(f) ? U : Q && F ? a / r * c : e.height) !== null && et(i) ? Q && F ? U / c * r : e.width : a) !== null && U !== null)
    return [a, U];
  throw new Error("Unable to calculate background-size for element");
}, rt = function(t, u) {
  return u = t[u], "u" < typeof u ? t[0] : u;
}, jw = function(t, u, e, r, c) {
  var a = u[0], i = u[1], f = e[0], g = e[1];
  switch (t) {
    case 2:
      return [new k(Math.round(r.left), Math.round(r.top + i)), new k(Math.round(r.left + r.width), Math.round(r.top + i)), new k(Math.round(r.left + r.width), Math.round(g + r.top + i)), new k(Math.round(r.left), Math.round(g + r.top + i))];
    case 3:
      return [new k(Math.round(r.left + a), Math.round(r.top)), new k(Math.round(r.left + a + f), Math.round(r.top)), new k(Math.round(r.left + a + f), Math.round(r.height + r.top)), new k(Math.round(r.left + a), Math.round(r.height + r.top))];
    case 1:
      return [new k(Math.round(r.left + a), Math.round(r.top + i)), new k(Math.round(r.left + a + f), Math.round(r.top + i)), new k(Math.round(r.left + a + f), Math.round(r.top + i + g)), new k(Math.round(r.left + a), Math.round(r.top + i + g))];
    default:
      return [new k(Math.round(c.left), Math.round(c.top)), new k(Math.round(c.left + c.width), Math.round(c.top)), new k(Math.round(c.left + c.width), Math.round(c.height + c.top)), new k(Math.round(c.left), Math.round(c.height + c.top))];
  }
}, zw = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", ps = "Hidden Text", qw = function() {
  function t(u) {
    this._data = {}, this._document = u;
  }
  return t.prototype.parseMetrics = function(f, g) {
    var r = this._document.createElement("div"), c = this._document.createElement("img"), a = this._document.createElement("span"), i = this._document.body, f = (r.style.visibility = "hidden", r.style.fontFamily = f, r.style.fontSize = g, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), c.src = zw, c.width = 1, c.height = 1, c.style.margin = "0", c.style.padding = "0", c.style.verticalAlign = "baseline", a.style.fontFamily = f, a.style.fontSize = g, a.style.margin = "0", a.style.padding = "0", a.appendChild(this._document.createTextNode(ps)), r.appendChild(a), r.appendChild(c), c.offsetTop - a.offsetTop + 2), g = (r.removeChild(a), r.appendChild(this._document.createTextNode(ps)), r.style.lineHeight = "normal", c.style.verticalAlign = "super", c.offsetTop - r.offsetTop + 2);
    return i.removeChild(r), { baseline: f, middle: g };
  }, t.prototype.getMetrics = function(u, e) {
    var r = u + " " + e;
    return "u" < typeof this._data[r] && (this._data[r] = this.parseMetrics(u, e)), this._data[r];
  }, t;
}(), Eo = function(t, u) {
  this.context = t, this.options = u;
}, $w = 1e4, Ah = (function(t) {
  function u(e, r) {
    return e = t.call(this, e, r) || this, e._activeEffects = [], e.canvas = r.canvas || document.createElement("canvas"), e.ctx = e.canvas.getContext("2d"), r.canvas || (e.canvas.width = Math.floor(r.width * r.scale), e.canvas.height = Math.floor(r.height * r.scale), e.canvas.style.width = r.width + "px", e.canvas.style.height = r.height + "px"), e.fontMetrics = new qw(document), e.ctx.scale(e.options.scale, e.options.scale), e.ctx.translate(-r.x, -r.y), e.ctx.textBaseline = "bottom", e._activeEffects = [], e.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), e;
  }
  Iu(u, t), u.prototype.applyEffects = function(e) {
    for (var r = this; this._activeEffects.length; )
      this.popEffect();
    e.forEach(function(c) {
      return r.applyEffect(c);
    });
  }, u.prototype.applyEffect = function(e) {
    this.ctx.save(), Vw(e) && (this.ctx.globalAlpha = e.opacity), Gw(e) && (this.ctx.translate(e.offsetX, e.offsetY), this.ctx.transform(e.matrix[0], e.matrix[1], e.matrix[2], e.matrix[3], e.matrix[4], e.matrix[5]), this.ctx.translate(-e.offsetX, -e.offsetY)), wo(e) && (this.path(e.path), this.ctx.clip()), this._activeEffects.push(e);
  }, u.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, u.prototype.renderStack = function(e) {
    return Qu(this, void 0, void 0, function() {
      return nu(this, function(r) {
        switch (r.label) {
          case 0:
            return e.element.container.styles.isVisible() ? [4, this.renderStackContent(e)] : [3, 2];
          case 1:
            r.sent(), r.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, u.prototype.renderNode = function(e) {
    return Qu(this, void 0, void 0, function() {
      return nu(this, function(r) {
        switch (r.label) {
          case 0:
            return LA(e.container.flags, 16), e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
          case 1:
            return r.sent(), [4, this.renderNodeContent(e)];
          case 2:
            r.sent(), r.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, u.prototype.renderTextWithLetterSpacing = function(e, r, c) {
    var a = this;
    r === 0 ? this.ctx.fillText(e.text, e.bounds.left, e.bounds.top + c) : Yc(e.text).reduce(function(i, f) {
      return a.ctx.fillText(f, i, e.bounds.top + c), i + a.ctx.measureText(f).width;
    }, e.bounds.left);
  }, u.prototype.createFontStyle = function(e) {
    var r = e.fontVariant.filter(function(i) {
      return i === "normal" || i === "small-caps";
    }).join(""), c = dh(e.fontFamily).join(", "), a = Pt(e.fontSize) ? "" + e.fontSize.number + e.fontSize.unit : e.fontSize.number + "px";
    return [[e.fontStyle, r, e.fontWeight, a, c].join(" "), c, a];
  }, u.prototype.renderTextNode = function(e, r) {
    return Qu(this, void 0, void 0, function() {
      var c, a, i, f, g, Q, F = this;
      return nu(this, function(U) {
        return a = this.createFontStyle(r), i = a[0], c = a[1], a = a[2], this.ctx.font = i, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", i = this.fontMetrics.getMetrics(c, a), f = i.baseline, g = i.middle, Q = r.paintOrder, e.textBounds.forEach(function(m) {
          Q.forEach(function(b) {
            switch (b) {
              case 0:
                F.ctx.fillStyle = SA(r.color), F.renderTextWithLetterSpacing(m, r.letterSpacing, f);
                var y = r.textShadow;
                y.length && m.text.trim().length && (y.slice(0).reverse().forEach(function(I) {
                  F.ctx.shadowColor = SA(I.color), F.ctx.shadowOffsetX = I.offsetX.number * F.options.scale, F.ctx.shadowOffsetY = I.offsetY.number * F.options.scale, F.ctx.shadowBlur = I.blur.number, F.renderTextWithLetterSpacing(m, r.letterSpacing, f);
                }), F.ctx.shadowColor = "", F.ctx.shadowOffsetX = 0, F.ctx.shadowOffsetY = 0, F.ctx.shadowBlur = 0), r.textDecorationLine.length && (F.ctx.fillStyle = SA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(I) {
                  switch (I) {
                    case 1:
                      F.ctx.fillRect(m.bounds.left, Math.round(m.bounds.top + f), m.bounds.width, 1);
                      break;
                    case 2:
                      F.ctx.fillRect(m.bounds.left, Math.round(m.bounds.top), m.bounds.width, 1);
                      break;
                    case 3:
                      F.ctx.fillRect(m.bounds.left, Math.ceil(m.bounds.top + g), m.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                r.webkitTextStrokeWidth && m.text.trim().length && (F.ctx.strokeStyle = SA(r.webkitTextStrokeColor), F.ctx.lineWidth = r.webkitTextStrokeWidth, F.ctx.lineJoin = window.chrome ? "miter" : "round", F.ctx.strokeText(m.text, m.bounds.left, m.bounds.top + f)), F.ctx.strokeStyle = "", F.ctx.lineWidth = 0, F.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, u.prototype.renderReplacedElement = function(e, r, c) {
    var a;
    c && 0 < e.intrinsicWidth && 0 < e.intrinsicHeight && (a = Kr(e), r = vr(r), this.path(r), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(c, 0, 0, e.intrinsicWidth, e.intrinsicHeight, a.left, a.top, a.width, a.height), this.ctx.restore());
  }, u.prototype.renderNodeContent = function(e) {
    return Qu(this, void 0, void 0, function() {
      var r, c, a, i, f, g, Q, F, U, m, b, y, I;
      return nu(this, function(K) {
        switch (K.label) {
          case 0:
            this.applyEffects(e.getEffects(4)), r = e.container, c = e.curves, a = r.styles, i = 0, f = r.textNodes, K.label = 1;
          case 1:
            return i < f.length ? (g = f[i], [4, this.renderTextNode(g, a)]) : [3, 4];
          case 2:
            K.sent(), K.label = 3;
          case 3:
            return i++, [3, 1];
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
            return r instanceof oo && r.tree ? [4, new u(this.context, { scale: this.options.scale, backgroundColor: r.backgroundColor, x: 0, y: 0, width: r.width, height: r.height }).render(r.tree)] : [3, 14];
          case 13:
            g = K.sent(), r.width && r.height && this.ctx.drawImage(g, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), K.label = 14;
          case 14:
            if (r instanceof Vc && (Q = Math.min(r.bounds.width, r.bounds.height), r.type === Hr ? r.checked && (this.ctx.save(), this.path([new k(r.bounds.left + 0.39363 * Q, r.bounds.top + 0.79 * Q), new k(r.bounds.left + 0.16 * Q, r.bounds.top + 0.5549 * Q), new k(r.bounds.left + 0.27347 * Q, r.bounds.top + 0.44071 * Q), new k(r.bounds.left + 0.39694 * Q, r.bounds.top + 0.5649 * Q), new k(r.bounds.left + 0.72983 * Q, r.bounds.top + 0.23 * Q), new k(r.bounds.left + 0.84 * Q, r.bounds.top + 0.34085 * Q), new k(r.bounds.left + 0.39363 * Q, r.bounds.top + 0.79 * Q)]), this.ctx.fillStyle = SA(gs), this.ctx.fill(), this.ctx.restore()) : r.type === yr && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + Q / 2, r.bounds.top + Q / 2, Q / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = SA(gs), this.ctx.fill(), this.ctx.restore())), Ah(r) && r.value.length) {
              switch (Q = this.createFontStyle(a), y = Q[0], b = Q[1], b = this.fontMetrics.getMetrics(y, b).baseline, this.ctx.font = y, this.ctx.fillStyle = SA(a.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = eh(r.styles.textAlign), I = Kr(r), F = 0, r.styles.textAlign) {
                case 1:
                  F += I.width / 2;
                  break;
                case 2:
                  F += I.width;
              }
              U = I.add(F, 0, 0, -I.height / 2 + 1), this.ctx.save(), this.path([new k(I.left, I.top), new k(I.left + I.width, I.top), new k(I.left + I.width, I.top + I.height), new k(I.left, I.top + I.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Xt(r.value, U), a.letterSpacing, b), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
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
            e.listValue && r.styles.listStyleType !== -1 && (y = this.createFontStyle(a)[0], this.ctx.font = y, this.ctx.fillStyle = SA(a.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", I = new Le(r.bounds.left, r.bounds.top + gA(r.styles.paddingTop, r.bounds.width), r.bounds.width, Zi(a.lineHeight, a.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Xt(e.listValue, I), a.letterSpacing, Zi(a.lineHeight, a.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), K.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, u.prototype.renderStackContent = function(e) {
    return Qu(this, void 0, void 0, function() {
      var r, c, a, i, f, g, Q, F, U, m, b, y, I, K, x;
      return nu(this, function(G) {
        switch (G.label) {
          case 0:
            return LA(e.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(e.element)];
          case 1:
            G.sent(), r = 0, c = e.negativeZIndex, G.label = 2;
          case 2:
            return r < c.length ? (x = c[r], [4, this.renderStack(x)]) : [3, 5];
          case 3:
            G.sent(), G.label = 4;
          case 4:
            return r++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(e.element)];
          case 6:
            G.sent(), a = 0, i = e.nonInlineLevel, G.label = 7;
          case 7:
            return a < i.length ? (x = i[a], [4, this.renderNode(x)]) : [3, 10];
          case 8:
            G.sent(), G.label = 9;
          case 9:
            return a++, [3, 7];
          case 10:
            f = 0, g = e.nonPositionedFloats, G.label = 11;
          case 11:
            return f < g.length ? (x = g[f], [4, this.renderStack(x)]) : [3, 14];
          case 12:
            G.sent(), G.label = 13;
          case 13:
            return f++, [3, 11];
          case 14:
            Q = 0, F = e.nonPositionedInlineLevel, G.label = 15;
          case 15:
            return Q < F.length ? (x = F[Q], [4, this.renderStack(x)]) : [3, 18];
          case 16:
            G.sent(), G.label = 17;
          case 17:
            return Q++, [3, 15];
          case 18:
            U = 0, m = e.inlineLevel, G.label = 19;
          case 19:
            return U < m.length ? (x = m[U], [4, this.renderNode(x)]) : [3, 22];
          case 20:
            G.sent(), G.label = 21;
          case 21:
            return U++, [3, 19];
          case 22:
            b = 0, y = e.zeroOrAutoZIndexOrTransformedOrOpacity, G.label = 23;
          case 23:
            return b < y.length ? (x = y[b], [4, this.renderStack(x)]) : [3, 26];
          case 24:
            G.sent(), G.label = 25;
          case 25:
            return b++, [3, 23];
          case 26:
            I = 0, K = e.positiveZIndex, G.label = 27;
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
  }, u.prototype.mask = function(e) {
    this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(e.slice(0).reverse()), this.ctx.closePath();
  }, u.prototype.path = function(e) {
    this.ctx.beginPath(), this.formatPath(e), this.ctx.closePath();
  }, u.prototype.formatPath = function(e) {
    var r = this;
    e.forEach(function(c, a) {
      var i = wu(c) ? c.start : c;
      a === 0 ? r.ctx.moveTo(i.x, i.y) : r.ctx.lineTo(i.x, i.y), wu(c) && r.ctx.bezierCurveTo(c.startControl.x, c.startControl.y, c.endControl.x, c.endControl.y, c.end.x, c.end.y);
    });
  }, u.prototype.renderRepeat = function(e, r, c, a) {
    this.path(e), this.ctx.fillStyle = r, this.ctx.translate(c, a), this.ctx.fill(), this.ctx.translate(-c, -a);
  }, u.prototype.resizeImage = function(e, r, c) {
    var a;
    return e.width === r && e.height === c ? e : ((a = ((a = this.canvas.ownerDocument) != null ? a : document).createElement("canvas")).width = Math.max(1, r), a.height = Math.max(1, c), a.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, r, c), a);
  }, u.prototype.renderBackgroundImage = function(e) {
    return Qu(this, void 0, void 0, function() {
      var r, c, a, i, f, g;
      return nu(this, function(Q) {
        switch (Q.label) {
          case 0:
            r = e.styles.backgroundImage.length - 1, c = function(F) {
              var U, m, b, y, I, K, x, G, $, Z, O, nA, R, oA, hA, JA, Du, IA, vA, GA, Bu;
              return nu(this, function(KA) {
                switch (KA.label) {
                  case 0:
                    if (F.type !== 0)
                      return [3, 5];
                    U = void 0, m = F.url, KA.label = 1;
                  case 1:
                    return KA.trys.push([1, 3, , 4]), [4, a.context.cache.match(m)];
                  case 2:
                    return U = KA.sent(), [3, 4];
                  case 3:
                    return KA.sent(), a.context.logger.error("Error loading background-image " + m), [3, 4];
                  case 4:
                    return U && (Z = bc(e, r, [U.width, U.height, U.width / U.height]), K = Z[0], nA = Z[1], R = Z[2], $ = Z[3], Z = Z[4], y = a.ctx.createPattern(a.resizeImage(U, $, Z), "repeat"), a.renderRepeat(K, y, nA, R)), [3, 6];
                  case 5:
                    tC(F) ? (O = bc(e, r, [null, null, null]), K = O[0], nA = O[1], R = O[2], $ = O[3], Z = O[4], O = qF(F.angle, $, Z), oA = O[0], I = O[1], G = O[2], x = O[3], O = O[4], (JA = document.createElement("canvas")).width = $, JA.height = Z, hA = JA.getContext("2d"), b = hA.createLinearGradient(I, x, G, O), Yi(F.stops, oA).forEach(function(ZA) {
                      return b.addColorStop(ZA.stop, SA(ZA.color));
                    }), hA.fillStyle = b, hA.fillRect(0, 0, $, Z), 0 < $ && 0 < Z && (y = a.ctx.createPattern(JA, "repeat"), a.renderRepeat(K, y, nA, R))) : dC(F) && (I = bc(e, r, [null, null, null]), K = I[0], x = I[1], G = I[2], $ = I[3], Z = I[4], O = F.position.length === 0 ? [Xc] : F.position, nA = gA(O[0], $), R = gA(O[O.length - 1], Z), oA = $F(F, nA, R, $, Z), hA = oA[0], JA = oA[1], 0 < hA) && 0 < JA && (Du = a.ctx.createRadialGradient(x + nA, G + R, 0, x + nA, G + R, hA), Yi(F.stops, 2 * hA).forEach(function(ZA) {
                      return Du.addColorStop(ZA.stop, SA(ZA.color));
                    }), a.path(K), a.ctx.fillStyle = Du, hA !== JA ? (IA = e.bounds.left + 0.5 * e.bounds.width, vA = e.bounds.top + 0.5 * e.bounds.height, Bu = 1 / (GA = JA / hA), a.ctx.save(), a.ctx.translate(IA, vA), a.ctx.transform(1, 0, 0, GA, 0, 0), a.ctx.translate(-IA, -vA), a.ctx.fillRect(x, Bu * (G - vA) + vA, $, Z * Bu), a.ctx.restore()) : a.ctx.fill()), KA.label = 6;
                  case 6:
                    return r--, [2];
                }
              });
            }, a = this, i = 0, f = e.styles.backgroundImage.slice(0).reverse(), Q.label = 1;
          case 1:
            return i < f.length ? (g = f[i], [5, c(g)]) : [3, 4];
          case 2:
            Q.sent(), Q.label = 3;
          case 3:
            return i++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, u.prototype.renderSolidBorder = function(e, r, c) {
    return Qu(this, void 0, void 0, function() {
      return nu(this, function(a) {
        return this.path(Ds(c, r)), this.ctx.fillStyle = SA(e), this.ctx.fill(), [2];
      });
    });
  }, u.prototype.renderDoubleBorder = function(e, r, c, a) {
    return Qu(this, void 0, void 0, function() {
      var i;
      return nu(this, function(f) {
        switch (f.label) {
          case 0:
            return r < 3 ? [4, this.renderSolidBorder(e, c, a)] : [3, 2];
          case 1:
            return f.sent(), [2];
          case 2:
            return i = Jw(a, c), this.path(i), this.ctx.fillStyle = SA(e), this.ctx.fill(), i = Pw(a, c), this.path(i), this.ctx.fill(), [2];
        }
      });
    });
  }, u.prototype.renderNodeBackgroundAndBorders = function(e) {
    return Qu(this, void 0, void 0, function() {
      var r, c, a, i, f, g, Q, F, U = this;
      return nu(this, function(m) {
        switch (m.label) {
          case 0:
            return this.applyEffects(e.getEffects(2)), r = e.container.styles, c = !at(r.backgroundColor) || r.backgroundImage.length, a = [{ style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth }, { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth }, { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth }, { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }], i = uh(rt(r.backgroundClip, 0), e.curves), c || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), at(r.backgroundColor) || (this.ctx.fillStyle = SA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(e.container)]) : [3, 2];
          case 1:
            m.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(b) {
              U.ctx.save();
              var y = Ir(e.curves), I = b.inset ? 0 : $w, K = Rw(y, -I + (b.inset ? 1 : -1) * b.spread.number, (b.inset ? 1 : -1) * b.spread.number, b.spread.number * (b.inset ? -2 : 2), b.spread.number * (b.inset ? -2 : 2));
              b.inset ? (U.path(y), U.ctx.clip(), U.mask(K)) : (U.mask(y), U.ctx.clip(), U.path(K)), U.ctx.shadowOffsetX = b.offsetX.number + I, U.ctx.shadowOffsetY = b.offsetY.number, U.ctx.shadowColor = SA(b.color), U.ctx.shadowBlur = b.blur.number, U.ctx.fillStyle = b.inset ? SA(b.color) : "rgba(0,0,0,1)", U.ctx.fill(), U.ctx.restore();
            }), m.label = 2;
          case 2:
            g = f = 0, Q = a, m.label = 3;
          case 3:
            return g < Q.length ? (F = Q[g]).style !== 0 && !at(F.color) && 0 < F.width ? F.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(F.color, F.width, f, e.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return m.sent(), [3, 11];
          case 5:
            return F.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(F.color, F.width, f, e.curves, 3)];
          case 6:
            return m.sent(), [3, 11];
          case 7:
            return F.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(F.color, F.width, f, e.curves)];
          case 8:
            return m.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(F.color, f, e.curves)];
          case 10:
            m.sent(), m.label = 11;
          case 11:
            f++, m.label = 12;
          case 12:
            return g++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, u.prototype.renderDashedDottedBorder = function(e, r, c, a, i) {
    return Qu(this, void 0, void 0, function() {
      var f, g, Q, F, U, m, b, y, I, K, x;
      return nu(this, function(G) {
        return this.ctx.save(), U = Xw(a, c), f = Ds(a, c), i === 2 && (this.path(f), this.ctx.clip()), I = (wu(f[0]) ? (g = f[0].start.x, f[0].start) : (g = f[0].x, f[0])).y, F = (wu(f[1]) ? (Q = f[1].end.x, f[1].end) : (Q = f[1].x, f[1])).y, I = Math.abs(c === 0 || c === 2 ? g - Q : I - F), this.ctx.beginPath(), i === 3 ? this.formatPath(U) : this.formatPath(f.slice(0, 2)), F = r < 3 ? 3 * r : 2 * r, U = r < 3 ? 2 * r : r, i === 3 && (U = F = r), m = !0, I <= 2 * F ? m = !1 : I <= 2 * F + U ? (F *= b = I / (2 * F + U), U *= b) : (b = Math.floor((I + U) / (F + U)), y = (I - b * F) / (b - 1), U = (I = (I - (b + 1) * F) / b) <= 0 || Math.abs(U - y) < Math.abs(U - I) ? y : I), m && (i === 3 ? this.ctx.setLineDash([0, F + U]) : this.ctx.setLineDash([F, U])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = 2 * r + 1.1, this.ctx.strokeStyle = SA(e), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (wu(f[0]) && (K = f[3], x = f[0], this.ctx.beginPath(), this.formatPath([new k(K.end.x, K.end.y), new k(x.start.x, x.start.y)]), this.ctx.stroke()), wu(f[1])) && (K = f[1], x = f[2], this.ctx.beginPath(), this.formatPath([new k(K.end.x, K.end.y), new k(x.start.x, x.start.y)]), this.ctx.stroke()), this.ctx.restore(), [2];
      });
    });
  }, u.prototype.render = function(e) {
    return Qu(this, void 0, void 0, function() {
      var r;
      return nu(this, function(c) {
        switch (c.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = SA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = Nw(e), [4, this.renderStack(r)];
          case 1:
            return c.sent(), this.applyEffects([]), [2, this.canvas];
        }
      });
    });
  };
}(Eo), function(t) {
  return t instanceof so || t instanceof io || t instanceof Vc && t.type !== yr && t.type !== Hr;
}), uh = function(t, u) {
  switch (t) {
    case 0:
      return Ir(u);
    case 2:
      return Ow(u);
    default:
      return vr(u);
  }
}, eh = function(t) {
  switch (t) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, th = ["-apple-system", "system-ui"], dh = function(t) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? t.filter(function(u) {
    return th.indexOf(u) === -1;
  }) : t;
}, rh = (function(t) {
  function u(e, r) {
    return e = t.call(this, e, r) || this, e.canvas = r.canvas || document.createElement("canvas"), e.ctx = e.canvas.getContext("2d"), e.options = r, e.canvas.width = Math.floor(r.width * r.scale), e.canvas.height = Math.floor(r.height * r.scale), e.canvas.style.width = r.width + "px", e.canvas.style.height = r.height + "px", e.ctx.scale(e.options.scale, e.options.scale), e.ctx.translate(-r.x, -r.y), e.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), e;
  }
  Iu(u, t), u.prototype.render = function(e) {
    return Qu(this, void 0, void 0, function() {
      var r;
      return nu(this, function(c) {
        switch (c.label) {
          case 0:
            return r = kc(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, e), [4, rh(r)];
          case 1:
            return r = c.sent(), this.options.backgroundColor && (this.ctx.fillStyle = SA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(r, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  };
}(Eo), function(t) {
  return new Promise(function(u, e) {
    var r = new Image();
    r.onload = function() {
      u(r);
    }, r.onerror = e, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
  });
});
function nh() {
  var t, u = new Array();
  return window.screen.deviceXDPI ? (u[0] = window.screen.deviceXDPI, u[1] = window.screen.deviceYDPI) : ((t = document.createElement("DIV")).style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden", document.body.appendChild(t), u[0] = t.offsetWidth, u[1] = t.offsetHeight, t.parentNode.removeChild(t)), u;
}
function ch(t) {
  return t / 25.4 * nh()[0];
}
function Es() {
  var t;
  return ((t = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : t.devicePixelRatio) || 1;
}
typeof window < "u" && Sw.setContext(window), Es(), Es();
class Cr {
  static callServer(u, e, r, c) {
    return e = { type: e }, r && (e.key = r), !c && c !== 0 || (e.value = JSON.stringify(c)), this.http("POST", u ? this.pathPersistence : this.path, e, { domainName: this.domainName });
  }
  static setItem(u, e) {
    return this.callServer(!1, 1, u, e);
  }
  static async getItem(u) {
    return JSON.parse(await this.callServer(!1, 2, u));
  }
  static removeItem(u) {
    return this.callServer(!1, 3, u);
  }
  static clear() {
    return this.callServer(!1, 4);
  }
  static setItemPersistence(u, e) {
    return this.callServer(!0, 1, u, e);
  }
  static async getItemPersistence(u) {
    return JSON.parse(await this.callServer(!0, 2, u));
  }
  static removeItemPersistence(u) {
    return this.callServer(!0, 3, u);
  }
  static clearPersistence() {
    return this.callServer(!0, 4);
  }
}
nt(Cr, "domainName", ""), nt(Cr, "path", "/api/storage/manage"), nt(Cr, "pathPersistence", "/api/storage/longManage"), nt(Cr, "http", () => Promise.reject("unset redis storage http function"));
const ah = "MathJax-script", Bh = cg + "/tex-mml-chtml.js";
let bs = !1, Nc = !1;
function ih(t) {
  if (globalThis.window) {
    let u = Er;
    t && (u = { ...Er, ...t }), globalThis.window.MathJax = { ...u, startup: { pageReady: () => {
      Nc = !0;
    } } };
  }
}
function sh() {
  return new Promise((t, u) => {
    if (Nc)
      return t("");
    {
      var e;
      bs || ((e = document.createElement("script")).src = Bh, e.id = ah, e.onerror = (c) => {
        u(c);
      }, document.body.appendChild(e), bs = !0);
      let r = setInterval(() => {
        if (Nc)
          return clearInterval(r), t("");
      }, 1e3);
    }
  });
}
function oh(t) {
  ih(t);
}
function fh(t, u = "", e) {
  return e = Object.assign({ lineBreak: !0, lineHeight: "20px", textColor: "#333", divideChinese: !1, wrapMathrm: !0 }, e), u = ql(u, e), t.classList.add("ke-comp-math-jax"), t.innerHTML = e != null && e.divideChinese ? u : `$$${u}$$`, t.style.color = (e == null ? void 0 : e.textColor) || "#333", e != null && e.lineBreak && lh(`.ke-comp-math-jax mjx-math mjx-texatom mjx-mspace{display:${e.lineBreak ? "block" : "inline-block"};}
      .ke-comp-math-jax mjx-math>*,.ke-comp-math-jax mjx-math mjx-merror mjx-utext{min-height:${e.lineHeight};line-height:${e.lineHeight};}
      .ke-comp-math-jax mjx-math mjx-texatom{white-space: ${e.lineBreak ? "normal" : "nowrap"};}
      .ke-comp-math-jax .mjx-kz-underline{margin-bottom: calc(${e.lineHeight} / 2);}
      .ke-comp-math-jax .mjx-kz-underline > *{line-height: calc(${e.lineHeight} / 3) !important; min-height: calc(${e.lineHeight} / 3) !important;}
      .ke-comp-math-jax .fourlineruled mjx-mtd mjx-tstrut{height: ${ch(3) + "px"}}`), sh().then(() => MathJax.typesetPromise());
}
function lh(t) {
  var u = document.createElement("style");
  u.type = "text/css", u.rel = "stylesheet";
  try {
    u.appendChild(document.createTextNode(t));
  } catch {
    u.styleSheet.cssText = t;
  }
  document.getElementsByTagName("head")[0].appendChild(u);
}
oh(), globalThis.latexRender = fh;
export {
  fh as latexRender,
  oh as setMathJaxConfig
};
