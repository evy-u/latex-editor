import "vue";
const iF = [{ name: "开平方", icon: "sqrt", formula: "\\sqrt{4}" }, { name: "开n次方", icon: "sqrtn", formula: "\\sqrt[n]{10}" }], aF = [{ name: "正弦", icon: "sin", formula: "\\sin" }, { name: "余弦", icon: "cos", formula: "\\cos" }, { name: "正切", icon: "tan", formula: "\\tan" }, { name: "余切", icon: "cot", formula: "\\cot" }, { name: "正切", icon: "sec", formula: "\\sec" }, { name: "csc", icon: "csc", formula: "\\csc" }, { name: "arcsin", icon: "arcsin", formula: "\\arcsin" }, { name: "arccos", icon: "arccos", formula: "\\arccos" }, { name: "arctan", icon: "arctan", formula: "\\arctan" }, { name: "arccot", icon: "arccot", formula: "\\arccot" }, { name: "arcsec", icon: "arcsec", formula: "\\arcsec" }, { name: "arccsc", icon: "arccsc", formula: "\\arccsc" }], dF = [{ name: "下划线", icon: "underline", formula: "\\underline{下划线}" }, { name: "波浪线", icon: "uwave", formula: "\\uwave{波浪线}" }, { name: "斜体", icon: "textit", formula: "\\textit{斜体}" }, { name: "粗体", icon: "textbf", formula: "\\textbf{粗体}" }, { name: "颜色", icon: "textcolor", formula: "\\textcolor{red}{红色}" }, { name: "上角标", icon: "sub", formula: "^{}" }, { name: "下角标", icon: "sup", formula: "_{}" }, { name: "下划线", icon: "uline", formula: "\\_{10}" }, { name: "四线三格", icon: "fourlineruled", formula: "\\fourlineruled{10}" }], sF = [{ name: "因为", icon: "because", formula: "\\because" }, { name: "所以", icon: "therefore", formula: "\\therefore" }, { name: "或", icon: "lor", formula: "\\lor" }, { name: "与", icon: "land", formula: "\\land" }, { name: "非", icon: "lnot", formula: "\\lnot" }, { name: "对于全部", icon: "forall", formula: "\\forall" }, { name: "存在", icon: "exists", formula: "\\exists" }, { name: "恒真", icon: "top", formula: "\\top" }, { name: "恒假", icon: "bot", formula: "\\bot" }], cF = [{ name: "角", icon: "angle", formula: "\\angle" }, { name: "全等于", icon: "cong", formula: "\\cong" }, { name: "相似于", icon: "sim", formula: "\\sim" }, { name: "平行于", icon: "parallel", formula: "\\parallel" }, { name: "平行四边形", icon: "parallelogram", formula: "\\parallelogram" }, { name: "垂直", icon: "perp", formula: "\\perp" }, { name: "圆圈", icon: "circ", formula: "\\circ" }, { name: "不平行于", icon: "nparallel", formula: "\\nparallel" }], BF = [{ name: "ā", icon: "bar", formula: "\\bar{a}" }, { name: "á", icon: "acute", formula: "\\acute{a}" }, { name: "三声", icon: "v", formula: "\\v{i}" }, { name: "ê", icon: "hat", formula: "\\hat{e}" }, { name: "à", icon: "grave", formula: "\\grave{a}" }, { name: "ã", icon: "tilde", formula: "\\tilde{a}" }, { name: "wideparen", icon: "wideparen", formula: "\\wideparen{AB}" }, { name: "vec", icon: "vec", formula: "\\vec{AB}" }, { name: "\\dot{\\sim}", icon: "dot", formula: "\\dot{\\sim}" }, { name: "Ö", icon: "ddot", formula: "\\ddot{O}" }, { name: "重音", icon: "d", formula: "天\\d{涯}" }], lF = [{ name: "正负号", icon: "pm", formula: "\\pm" }, { name: "负正号", icon: "mp", formula: "\\mp" }, { name: "点乘号", icon: "cdot", formula: "\\cdot" }, { name: "叉乘号", icon: "times", formula: "\\times" }, { name: "除号", icon: "div", formula: "\\div" }, { name: "绝对值", icon: "mid", formula: "\\mid" }, { name: "求积", icon: "prod", formula: "\\prod" }, { name: "求和", icon: "sum", formula: "\\sum" }], fF = [{ name: "约等于", icon: "approx", formula: "\\approx" }, { name: "小于等于", icon: "leq", formula: "\\leq" }, { name: "大于等于", icon: "geq", formula: "\\geq" }, { name: "不等于", icon: "neq", formula: "\\neq" }, { name: "恒等于", icon: "equiv", formula: "\\equiv" }, { name: "比例", icon: "propto", formula: "\\propto" }, { name: "不约等于", icon: "napprox", formula: "\\napprox" }, { name: "不小于", icon: "nl", formula: "\\nl" }, { name: "不大于", icon: "ng", formula: "\\ng" }, { name: "不小于等于", icon: "nleq", formula: "\\nleq" }, { name: "不大于等于", icon: "ngeq", formula: "\\ngeq" }, { name: "不恒等于", icon: "nequiv", formula: "\\nequiv" }], gF = [{ icon: "odot", formula: "\\odot" }, { icon: "ominus", formula: "\\ominus" }, { icon: "oplus", formula: "\\oplus" }, { icon: "otimes", formula: "\\otimes" }, { icon: "oiiint", formula: "\\oiiint" }, { icon: "oiint", formula: "\\oiint" }, { icon: "oint", formula: "\\oint" }], wF = [{ name: "菱形", icon: "diamond", formula: "\\diamond" }, { name: "菱形", icon: "blackdiamond", formula: "\\blackdiamond" }, { name: "正方形", icon: "square", formula: "\\square" }, { name: "正方形", icon: "blacksquare", formula: "\\blacksquare" }, { name: "矩形", icon: "rectangle", formula: "\\rectangle" }, { name: "矩形", icon: "blackrectangle", formula: "\\blackrectangle" }, { name: "五角星", icon: "star", formula: "\\star" }, { name: "五角星", icon: "blackstar", formula: "\\blackstar" }, { name: "三角形", icon: "triangle", formula: "\\triangle" }, { name: "三角形", icon: "blacktriangle", formula: "\\blacktriangle" }, { name: "倒三角形", icon: "triangledown", formula: "\\triangledown" }, { name: "倒三角形", icon: "blacktriangledown", formula: "\\blacktriangledown" }, { name: "心形", icon: "heart", formula: "\\heart" }, { name: "心形", icon: "blackheart", formula: "\\blackheart" }, { name: "点状", icon: "bullet", formula: "\\bullet" }, { name: "女性", icon: "female", formula: "\\female" }, { name: "男性", icon: "male", formula: "\\male" }, { name: "微笑", icon: "smiley", formula: "\\smiley" }, { name: "黑桃", icon: "spadesuit", formula: "\\spadesuit" }, { name: "梅花", icon: "clubsuit", formula: "\\clubsuit" }], QF = [{ name: "分式", icon: "frac", formula: "\\frac{分子}{分母}", exampleList: [{ content: "正确写法：\\frac{1}{2}", isLatex: !1 }, { content: "\\frac{1}{2}", isLatex: !0 }, { content: "错误写法：\\frac{1}", isLatex: !1 }, { content: "\\frac{1}", isLatex: !0 }] }], hF = [{ name: "alpha", icon: "alpha", formula: "\\alpha" }, { name: "beta", icon: "beta", formula: "\\beta" }, { name: "gamma", icon: "gamma", formula: "\\gamma" }, { name: "delta", icon: "delta", formula: "\\delta" }, { name: "epsilon", icon: "epsilon", formula: "\\epsilon" }, { name: "zeta", icon: "zeta", formula: "\\zeta" }, { name: "eta", icon: "eta", formula: "\\eta" }, { name: "theta", icon: "theta", formula: "\\theta" }, { name: "iota", icon: "iota", formula: "\\iota" }, { name: "kappa", icon: "kappa", formula: "\\kappa" }, { name: "lambda", icon: "lambda", formula: "\\lambda" }, { name: "mu", icon: "mu", formula: "\\mu" }, { name: "nu", icon: "nu", formula: "\\nu" }, { name: "xi", icon: "xi", formula: "\\xi" }, { name: "omicron", icon: "omicron", formula: "\\omicron" }, { name: "pi", icon: "pi", formula: "\\pi" }, { name: "rho", icon: "rho", formula: "\\rho" }, { name: "sigma", icon: "sigma", formula: "\\sigma" }, { name: "tau", icon: "tau", formula: "\\tau" }, { name: "upsilon", icon: "upsilon", formula: "\\upsilon" }, { name: "phi", icon: "phi", formula: "\\phi" }, { name: "chi", icon: "chi", formula: "\\chi" }, { name: "psi", icon: "psi", formula: "\\psi" }, { name: "omega", icon: "omega", formula: "\\omega" }, { name: "Alpha", icon: "Alpha", formula: "\\Alpha" }, { name: "Beta", icon: "Beta", formula: "\\Beta" }, { name: "Gamma", icon: "Gamma", formula: "\\Gamma" }, { name: "Delta", icon: "Delta", formula: "\\Delta" }, { name: "Epsilon", icon: "Epsilon", formula: "\\Epsilon" }, { name: "Zeta", icon: "Zeta", formula: "\\Zeta" }, { name: "Eta", icon: "Eta", formula: "\\Eta" }, { name: "Theta", icon: "Theta", formula: "\\Theta" }, { name: "Iota", icon: "Iota", formula: "\\Iota" }, { name: "Kappa", icon: "Kappa", formula: "\\Kappa" }, { name: "Lambda", icon: "Lambda", formula: "\\Lambda" }, { name: "Mu", icon: "Mu", formula: "\\Mu" }, { name: "Nu", icon: "Nu", formula: "\\Nu" }, { name: "Xi", icon: "Xi", formula: "\\Xi" }, { name: "Omicron", icon: "Omicron", formula: "\\Omicron" }, { name: "Pi", icon: "Pi", formula: "\\Pi" }, { name: "Rho", icon: "Rho", formula: "\\Rho" }, { name: "Sigma", icon: "Sigma", formula: "\\Sigma" }, { name: "Tau", icon: "Tau", formula: "\\Tau" }, { name: "Upsilon", icon: "Upsilon", formula: "\\Upsilon" }, { name: "Phi", icon: "Phi", formula: "\\Phi" }, { name: "Chi", icon: "Chi", formula: "\\Chi" }, { name: "Psi", icon: "Psi", formula: "\\Psi" }, { name: "Omega", icon: "Omega", formula: "\\Omega" }], CF = [{ name: "⋯", icon: "cdots", formula: "\\cdots" }, { name: "⋱", icon: "ddots", formula: "\\ddots" }, { name: "⋮", icon: "vdots", formula: "\\vdots" }], FF = [{ name: "并集，v0中为\\bigcup", icon: "cup", formula: "\\cup" }, { name: "交集，v0中为\\bigcap", icon: "cap", formula: "\\cap" }, { name: "子集", icon: "subset", formula: "\\subset" }, { name: "父集", icon: "supset", formula: "\\supset" }, { name: "属于", icon: "in", formula: "\\in" }, { name: "不属于", icon: "notin", formula: "\\notin" }, { name: "包含", icon: "ni", formula: "\\ni" }, { name: "不包含", icon: "notni", formula: "\\notni" }, { name: "空集", icon: "emptyset", formula: "\\emptyset" }, { name: "补集", icon: "complement", formula: "\\complement" }, { name: "父集或等于 ", icon: "subseteq", formula: "\\subseteq" }, { name: "超集或等于", icon: "supseteq", formula: "\\supseteq" }, { name: "非子集", icon: "nsubset", formula: "\\nsubset" }, { name: "非超集", icon: "", formula: "\\nsupset" }, { name: "子集且不等于", icon: "subsetneq", formula: "\\subsetneq" }, { name: "父集且不等于", icon: "supsetneq", formula: "\\supsetneq" }, { name: "非子集也不等于", icon: "nsubseteq", formula: "\\nsubseteq" }, { name: "非父集也不等于", icon: "nsupseteq", formula: "\\nsupseteq" }], UF = [{ name: "无穷大", icon: "infty", formula: "\\infty" }, { name: "偏微分", icon: "partial", formula: "\\partial" }, { name: "实数符号", icon: "Re", formula: "\\Re" }, { name: "实数符号", icon: "lg", formula: "\\lg" }, { name: "实数符号", icon: "lim", formula: "\\lim" }, { name: "ln", icon: "ln", formula: "\\ln" }, { name: "最大", icon: "max", formula: "\\max" }, { name: "最小", icon: "min", formula: "\\min" }], pF = [{ name: "⇐", icon: "Leftarrow", formula: "\\Leftarrow" }, { name: "←", icon: "leftarrow", formula: "\\leftarrow" }, { name: "⇒", icon: "Rightarrow", formula: "\\Rightarrow" }, { name: "→", icon: "rightarrow", formula: "\\rightarrow" }, { name: "⇑", icon: "Uparrow", formula: "\\Uparrow" }, { name: "↑", icon: "uparrow", formula: "\\uparrow" }, { name: "⇓", icon: "Downarrow", formula: "\\Downarrow" }, { name: "↓", icon: "downarrow", formula: "\\downarrow" }, { name: "⇔", icon: "Leftrightarrow", formula: "\\Leftrightarrow" }, { name: "↔", icon: "leftrightarrow", formula: "\\leftrightarrow" }, { name: "⇕", icon: "Updownarrow", formula: "\\Updownarrow" }, { name: "↕", icon: "updownarrow", formula: "\\updownarrow" }, { name: "⇗", icon: "NEarrow", formula: "\\NEarrow" }, { name: "↗", icon: "nearrow", formula: "\\nearrow" }, { name: "⇖", icon: "NWarrow", formula: "\\NWarrow" }, { name: "↖", icon: "nwarrow", formula: "\\nwarrow" }, { name: "⇘", icon: "SEarrow", formula: "\\SEarrow" }, { name: "↘", icon: "searrow", formula: "\\searrow" }, { name: "⇙", icon: "SWarrow", formula: "\\SWarrow" }, { name: "↙", icon: "swarrow", formula: "\\swarrow" }, { name: "↵", icon: "hookleftarrow", formula: "\\hookleftarrow" }], mF = [{ name: "‰", icon: "textperthousand", formula: "\\textperthousand" }, { name: "※", icon: "textreferencemark", formula: "\\textreferencemark" }, { name: "®", icon: "textregistered", formula: "\\textregistered" }, { name: "§", icon: "textsection", formula: "\\textsection" }, { name: "™", icon: "texttrademark", formula: "\\texttrademark" }], EF = [{ name: "②", icon: "textcircled", formula: "\\textcircled{2}" }, { name: "Ⅴ", icon: "RomanNumeralCaps", formula: "\\RomanNumeralCaps{5}" }, { name: "i", icon: "romannumeral", formula: "\\romannumeral{1}" }];
var Rd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Gc = { exports: {} }, ue = (Gc.exports, function(t, A) {
  (function() {
    var e, n = "Expected a function", i = "__lodash_hash_undefined__", d = "__lodash_placeholder__", s = 16, l = 32, w = 64, h = 128, g = 256, p = 1 / 0, K = 9007199254740991, _ = NaN, S = 4294967295, v = [["ary", h], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", s], ["flip", 512], ["partial", l], ["partialRight", w], ["rearg", g]], M = "[object Arguments]", k = "[object Array]", X = "[object Boolean]", iA = "[object Date]", z = "[object Error]", J = "[object Function]", lA = "[object GeneratorFunction]", $ = "[object Map]", vA = "[object Number]", IA = "[object Object]", YA = "[object Promise]", Fe = "[object RegExp]", ne = "[object Set]", $A = "[object String]", ge = "[object Symbol]", ve = "[object WeakMap]", ZA = "[object ArrayBuffer]", Be = "[object DataView]", hr = "[object Float32Array]", Ln = "[object Float64Array]", _u = "[object Int8Array]", ba = "[object Int16Array]", Ia = "[object Int32Array]", va = "[object Uint8Array]", Yo = "[object Uint8ClampedArray]", Zo = "[object Uint16Array]", Ka = "[object Uint32Array]", Ll = /\b__p \+= '';/g, xl = /\b(__p \+=) '' \+/g, _l = /(__e\(.*?\)|\b__t\)) \+\n'';/g, La = /&(?:amp|lt|gt|quot|#39);/g, Ts = /[&<>"']/g, Sl = RegExp(La.source), Ol = RegExp(Ts.source), xa = /<%-([\s\S]+?)%>/g, Tl = /<%([\s\S]+?)%>/g, jo = /<%=([\s\S]+?)%>/g, Ml = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kl = /^\w*$/, Gl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _a = /[\\^$.*+?()[\]{}|]/g, Vl = RegExp(_a.source), Sa = /^\s+/, Rl = /\s/, Nl = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ms = /\{\n\/\* \[wrapped with (.+)\] \*/, Pl = /,? & /, Jl = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Xl = /[()=,{}\[\]\/\s]/, Wl = /\\(\\)?/g, Yl = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ks = /\w*$/, qo = /^[-+]0x[0-9a-f]+$/i, Zl = /^0b[01]+$/i, zo = /^\[object .+?Constructor\]$/, Gs = /^0o[0-7]+$/i, Vs = /^(?:0|[1-9]\d*)$/, Rs = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Cr = /($^)/, Ns = /['\n\r\u2028\u2029\\]/g, xn = "\\ud800-\\udfff", un = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", _n = "\\u2700-\\u27bf", On = "a-z\\xdf-\\xf6\\xf8-\\xff", Mt = "A-Z\\xc0-\\xd6\\xd8-\\xde", Oa = "\\ufe0e\\ufe0f", Sn = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Fr = "['’]", it = "[" + xn + "]", Ta = "[" + Sn + "]", Su = "[" + un + "]", Ma = "[" + _n + "]", Xr = "[" + On + "]", Sn = "[^" + xn + Sn + "\\d+" + _n + On + Mt + "]", _n = "\\ud83c[\\udffb-\\udfff]", On = "[^" + xn + "]", Wr = "(?:\\ud83c[\\udde6-\\uddff]){2}", qn = "[\\ud800-\\udbff][\\udc00-\\udfff]", Mt = "[" + Mt + "]", Ps = "\\u200d", Js = "(?:" + Xr + "|" + Sn + ")", Sn = "(?:" + Mt + "|" + Sn + ")", Xs = "(?:['’](?:d|ll|m|re|s|t|ve))?", Ws = "(?:['’](?:D|LL|M|RE|S|T|VE))?", $o = "(?:" + Su + "|" + _n + ")?", Ou = "[" + Oa + "]?", Ou = Ou + $o + ("(?:" + Ps + "(?:" + [On, Wr, qn].join("|") + ")" + Ou + $o + ")*"), $o = "(?:" + [Ma, Wr, qn].join("|") + ")" + Ou, Ma = "(?:" + [On + Su + "?", Su, Wr, qn, it].join("|") + ")", re = RegExp(Fr, "g"), ee = RegExp(Su, "g"), ka = RegExp(_n + "(?=" + _n + ")|" + Ma + Ou, "g"), jl = RegExp([Mt + "?" + Xr + "+" + Xs + "(?=" + [Ta, Mt, "$"].join("|") + ")", Sn + "+" + Ws + "(?=" + [Ta, Mt + Js, "$"].join("|") + ")", Mt + "?" + Js + "+" + Xs, Mt + "+" + Ws, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", $o].join("|"), "g"), ql = RegExp("[" + Ps + xn + un + Oa + "]"), jn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Tu = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Ve = -1, RA = {}, GA = (RA[hr] = RA[Ln] = RA[_u] = RA[ba] = RA[Ia] = RA[va] = RA[Yo] = RA[Zo] = RA[Ka] = !0, RA[M] = RA[k] = RA[ZA] = RA[X] = RA[Be] = RA[iA] = RA[z] = RA[J] = RA[$] = RA[vA] = RA[IA] = RA[Fe] = RA[ne] = RA[$A] = RA[ve] = !1, {}), Ys = (GA[M] = GA[k] = GA[ZA] = GA[Be] = GA[X] = GA[iA] = GA[hr] = GA[Ln] = GA[_u] = GA[ba] = GA[Ia] = GA[$] = GA[vA] = GA[IA] = GA[Fe] = GA[ne] = GA[$A] = GA[ge] = GA[va] = GA[Yo] = GA[Zo] = GA[Ka] = !0, GA[z] = GA[J] = GA[ve] = !1, { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }), Ga = parseFloat, ot = parseInt, On = typeof Rd == "object" && Rd && Rd.Object === Object && Rd, Wr = typeof self == "object" && self && self.Object === Object && self, Ke = On || Wr || Function("return this")(), qn = A && !A.nodeType && A, zn = qn && t && !t.nodeType && t, Va = zn && zn.exports === qn, qe = Va && On.process, it = function() {
      try {
        var G = zn && zn.require && zn.require("util").types;
        return G || qe && qe.binding && qe.binding("util");
      } catch {
      }
    }(), ht = it && it.isArrayBuffer, Zs = it && it.isDate, Ra = it && it.isMap, Tn = it && it.isRegExp, Mu = it && it.isSet, Ai = it && it.isTypedArray;
    function KA(G, Y, P) {
      switch (P.length) {
        case 0:
          return G.call(Y);
        case 1:
          return G.call(Y, P[0]);
        case 2:
          return G.call(Y, P[0], P[1]);
        case 3:
          return G.call(Y, P[0], P[1], P[2]);
      }
      return G.apply(Y, P);
    }
    function $n(G, Y, P, BA) {
      for (var hA = -1, UA = G == null ? 0 : G.length; ++hA < UA; ) {
        var rA = G[hA];
        Y(BA, rA, P(rA), G);
      }
      return BA;
    }
    function at(G, Y) {
      for (var P = -1, BA = G == null ? 0 : G.length; ++P < BA && Y(G[P], P, G) !== !1; )
        ;
      return G;
    }
    function zl(G, Y) {
      for (var P = G == null ? 0 : G.length; P-- && Y(G[P], P, G) !== !1; )
        ;
      return G;
    }
    function ei(G, Y) {
      for (var P = -1, BA = G == null ? 0 : G.length; ++P < BA; )
        if (!Y(G[P], P, G))
          return !1;
      return !0;
    }
    function Ar(G, Y) {
      for (var P = -1, BA = G == null ? 0 : G.length, hA = 0, UA = []; ++P < BA; ) {
        var rA = G[P];
        Y(rA, P, G) && (UA[hA++] = rA);
      }
      return UA;
    }
    function ku(G, Y) {
      return !!(G != null && G.length) && -1 < tr(G, Y, 0);
    }
    function Yr(G, Y, P) {
      for (var BA = -1, hA = G == null ? 0 : G.length; ++BA < hA; )
        if (P(Y, G[BA]))
          return !0;
      return !1;
    }
    function XA(G, Y) {
      for (var P = -1, BA = G == null ? 0 : G.length, hA = Array(BA); ++P < BA; )
        hA[P] = Y(G[P], P, G);
      return hA;
    }
    function er(G, Y) {
      for (var P = -1, BA = Y.length, hA = G.length; ++P < BA; )
        G[hA + P] = Y[P];
      return G;
    }
    function ti(G, Y, P, BA) {
      var hA = -1, UA = G == null ? 0 : G.length;
      for (BA && UA && (P = G[++hA]); ++hA < UA; )
        P = Y(P, G[hA], hA, G);
      return P;
    }
    function js(G, Y, P, BA) {
      var hA = G == null ? 0 : G.length;
      for (BA && hA && (P = G[--hA]); hA--; )
        P = Y(P, G[hA], hA, G);
      return P;
    }
    function Gu(G, Y) {
      for (var P = -1, BA = G == null ? 0 : G.length; ++P < BA; )
        if (Y(G[P], P, G))
          return !0;
      return !1;
    }
    var Na = Ur("length");
    function Pa(G, Y, P) {
      var BA;
      return P(G, function(hA, UA, rA) {
        if (Y(hA, UA, rA))
          return BA = UA, !1;
      }), BA;
    }
    function Zr(G, Y, P, BA) {
      for (var hA = G.length, UA = P + (BA ? 1 : -1); BA ? UA-- : ++UA < hA; )
        if (Y(G[UA], UA, G))
          return UA;
      return -1;
    }
    function tr(G, Y, P) {
      if (Y != Y)
        return Zr(G, dt, P);
      for (var BA = G, hA = Y, UA = P - 1, rA = BA.length; ++UA < rA; )
        if (BA[UA] === hA)
          return UA;
      return -1;
    }
    function qs(G, Y, P, BA) {
      for (var hA = P - 1, UA = G.length; ++hA < UA; )
        if (BA(G[hA], Y))
          return hA;
      return -1;
    }
    function dt(G) {
      return G != G;
    }
    function ni(G, Y) {
      var P = G == null ? 0 : G.length;
      return P ? Xa(G, Y) / P : _;
    }
    function Ur(G) {
      return function(Y) {
        return Y == null ? e : Y[G];
      };
    }
    function ri(G) {
      return function(Y) {
        return G == null ? e : G[Y];
      };
    }
    function Ja(G, Y, P, BA, hA) {
      return hA(G, function(UA, rA, Nu) {
        P = BA ? (BA = !1, UA) : Y(P, UA, rA, Nu);
      }), P;
    }
    function Xa(G, Y) {
      for (var P, BA = -1, hA = G.length; ++BA < hA; ) {
        var UA = Y(G[BA]);
        UA !== e && (P = P === e ? UA : P + UA);
      }
      return P;
    }
    function Wa(G, Y) {
      for (var P = -1, BA = Array(G); ++P < G; )
        BA[P] = Y(P);
      return BA;
    }
    function zs(G) {
      return G && G.slice(0, HA(G) + 1).replace(Sa, "");
    }
    function Le(G) {
      return function(Y) {
        return G(Y);
      };
    }
    function Vu(G, Y) {
      return XA(Y, function(P) {
        return G[P];
      });
    }
    function jr(G, Y) {
      return G.has(Y);
    }
    function Mn(G, Y) {
      for (var P = -1, BA = G.length; ++P < BA && -1 < tr(Y, G[P], 0); )
        ;
      return P;
    }
    function Ru(G, Y) {
      for (var P = G.length; P-- && -1 < tr(Y, G[P], 0); )
        ;
      return P;
    }
    var qr = ri({ À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }), kt = ri({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
    function $s(G) {
      return "\\" + Ys[G];
    }
    function zr(G) {
      return ql.test(G);
    }
    function nr(G) {
      var Y = -1, P = Array(G.size);
      return G.forEach(function(BA, hA) {
        P[++Y] = [hA, BA];
      }), P;
    }
    function V(G, Y) {
      return function(P) {
        return G(Y(P));
      };
    }
    function j(G, Y) {
      for (var P = -1, BA = G.length, hA = 0, UA = []; ++P < BA; ) {
        var rA = G[P];
        rA !== Y && rA !== d || (G[P] = d, UA[hA++] = P);
      }
      return UA;
    }
    function N(G) {
      var Y = -1, P = Array(G.size);
      return G.forEach(function(BA) {
        P[++Y] = BA;
      }), P;
    }
    function cA(G) {
      return (zr(G) ? function(Y) {
        for (var P = ka.lastIndex = 0; ka.test(Y); )
          ++P;
        return P;
      } : Na)(G);
    }
    function fA(G) {
      return zr(G) ? G.match(ka) || [] : G.split("");
    }
    function HA(G) {
      for (var Y = G.length; Y-- && Rl.test(G.charAt(Y)); )
        ;
      return Y;
    }
    var yA = ri({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }), on = function G(TA) {
      var P = (TA = TA == null ? Ke : on.defaults(Ke.Object(), TA, on.pick(Ke, Tu))).Array, sn = TA.Date, BA = TA.Error, hA = TA.Function, UA = TA.Math, rA = TA.Object, Nu = TA.RegExp, Ac = TA.String, ze = TA.TypeError, ui = P.prototype, Dt = hA.prototype, $r = rA.prototype, Au = TA["__core-js_shared__"], pr = Dt.toString, PA = $r.hasOwnProperty, oi = 0, Ya = (Dt = /[^.]+$/.exec(Au && Au.keys && Au.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Dt : "", Pu = $r.toString, ii = pr.call(rA), ec = Ke._, Ju = Nu("^" + pr.call(PA).replace(_a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Dt = Va ? TA.Buffer : e, WA = TA.Symbol, an = TA.Uint8Array, Xu = Dt ? Dt.allocUnsafe : e, kn = V(rA.getPrototypeOf, rA), ai = rA.create, Wu = $r.propertyIsEnumerable, mr = ui.splice, di = WA ? WA.isConcatSpreadable : e, eu = WA ? WA.iterator : e, Er = WA ? WA.toStringTag : e, si = function() {
        try {
          var r = he(rA, "defineProperty");
          return r({}, "", {}), r;
        } catch {
        }
      }(), oe = TA.clearTimeout !== Ke.clearTimeout && TA.clearTimeout, Et = sn && sn.now !== Ke.Date.now && sn.now, xe = TA.setTimeout !== Ke.setTimeout && TA.setTimeout, ci = UA.ceil, Bi = UA.floor, li = rA.getOwnPropertySymbols, Dt = Dt ? Dt.isBuffer : e, tc = TA.isFinite, dn = ui.join, Yu = V(rA.keys, rA), se = UA.max, we = UA.min, OA = sn.now, Zu = TA.parseInt, ju = UA.random, tu = ui.reverse, sn = he(TA, "DataView"), qu = he(TA, "Map"), zu = he(TA, "Promise"), nu = he(TA, "Set"), TA = he(TA, "WeakMap"), Gn = he(rA, "create"), $u = TA && new TA(), E = {}, ru = _r(sn), Za = _r(qu), fi = _r(zu), Gt = _r(nu), xA = _r(TA), WA = WA ? WA.prototype : e, Vt = WA ? WA.valueOf : e, cn = WA ? WA.toString : e;
      function m(r) {
        if (Ae(r) && !FA(r) && !(r instanceof _A)) {
          if (r instanceof Kt)
            return r;
          if (PA.call(r, "__wrapped__"))
            return Ri(r);
        }
        return new Kt(r);
      }
      var vt = function(r) {
        return SA(r) ? ai ? ai(r) : (Ct.prototype = r, r = new Ct(), Ct.prototype = e, r) : {};
      };
      function Ct() {
      }
      function Ao() {
      }
      function Kt(r, o) {
        this.__wrapped__ = r, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = e;
      }
      function _A(r) {
        this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = S, this.__views__ = [];
      }
      function Dr(r) {
        var o = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++o < c; ) {
          var f = r[o];
          this.set(f[0], f[1]);
        }
      }
      function Rt(r) {
        var o = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++o < c; ) {
          var f = r[o];
          this.set(f[0], f[1]);
        }
      }
      function Ft(r) {
        var o = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++o < c; ) {
          var f = r[o];
          this.set(f[0], f[1]);
        }
      }
      function Bn(r) {
        var o = -1, c = r == null ? 0 : r.length;
        for (this.__data__ = new Ft(); ++o < c; )
          this.add(r[o]);
      }
      function Nt(r) {
        r = this.__data__ = new Rt(r), this.size = r.size;
      }
      function ja(r, o) {
        var c, f = FA(r), C = !f && et(r), U = !f && !C && Jn(r), D = !f && !C && !U && Mr(r), y = f || C || U || D, b = y ? Wa(r.length, Ac) : [], x = b.length;
        for (c in r)
          !o && !PA.call(r, c) || y && (c == "length" || U && (c == "offset" || c == "parent") || D && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Un(c, x)) || b.push(c);
        return b;
      }
      function ln(r) {
        var o = r.length;
        return o ? r[ud(0, o - 1)] : e;
      }
      function qa(r, o) {
        return mo(Oe(r), gn(o, 0, r.length));
      }
      function Hr(r) {
        return mo(Oe(r));
      }
      function st(r, o, c) {
        (c === e || Te(r[o], c)) && (c !== e || o in r) || fn(r, o, c);
      }
      function uu(r, o, c) {
        var f = r[o];
        PA.call(r, o) && Te(f, c) && (c !== e || o in r) || fn(r, o, c);
      }
      function eo(r, o) {
        for (var c = r.length; c--; )
          if (Te(r[c][0], o))
            return c;
        return -1;
      }
      function to(r, o, c, f) {
        return Re(r, function(C, U, D) {
          o(f, C, c(C), D);
        }), f;
      }
      function Vn(r, o) {
        return r && Fn(o, me(o), r);
      }
      function fn(r, o, c) {
        o == "__proto__" && si ? si(r, o, { configurable: !0, enumerable: !0, value: c, writable: !0 }) : r[o] = c;
      }
      function za(r, o) {
        for (var c = -1, f = o.length, C = P(f), U = r == null; ++c < f; )
          C[c] = U ? e : qi(r, o[c]);
        return C;
      }
      function gn(r, o, c) {
        return r = r == r && (c !== e && (r = r <= c ? r : c), o !== e) ? o <= r ? r : o : r;
      }
      function Ut(r, o, c, f, C, U) {
        var D, y = 1 & o, b = 2 & o, x = 4 & o;
        if ((D = c ? C ? c(r, f, C, U) : c(r) : D) === e) {
          if (!SA(r))
            return r;
          var O, f = FA(r);
          if (f) {
            if (D = function(q) {
              var sA = q.length, AA = new q.constructor(sA);
              return sA && typeof q[0] == "string" && PA.call(q, "index") && (AA.index = q.index, AA.input = q.input), AA;
            }(r), !y)
              return Oe(r, D);
          } else {
            var T = Xe(r), R = T == J || T == lA;
            if (Jn(r))
              return so(r, y);
            if (T == IA || T == M || R && !C) {
              if (D = b || R ? {} : Cd(r), !y)
                return b ? (W = R = r, W = (O = D) && Fn(W, Ee(W), O), Fn(R, Oi(R), W)) : (R = Vn(D, O = r), Fn(O, Co(O), R));
            } else {
              if (!GA[T])
                return C ? r : {};
              D = function(q, sA, AA) {
                var aA = q.constructor;
                switch (sA) {
                  case ZA:
                    return ir(q);
                  case X:
                  case iA:
                    return new aA(+q);
                  case Be:
                    return function(gA, MA) {
                      return MA = MA ? ir(gA.buffer) : gA.buffer, new gA.constructor(MA, gA.byteOffset, gA.byteLength);
                    }(q, AA);
                  case hr:
                  case Ln:
                  case _u:
                  case ba:
                  case Ia:
                  case va:
                  case Yo:
                  case Zo:
                  case Ka:
                    return cd(q, AA);
                  case $:
                    return new aA();
                  case vA:
                  case $A:
                    return new aA(q);
                  case Fe:
                    return function(gA) {
                      var MA = new gA.constructor(gA.source, ks.exec(gA));
                      return MA.lastIndex = gA.lastIndex, MA;
                    }(q);
                  case ne:
                    return new aA();
                  case ge:
                    return function(gA) {
                      return Vt ? rA(Vt.call(gA)) : {};
                    }(q);
                }
              }(r, T, y);
            }
          }
          var W = (U = U || new Nt()).get(r);
          if (W)
            return W;
          U.set(r, D), EA(r) ? r.forEach(function(q) {
            D.add(Ut(q, o, c, q, r, U));
          }) : Uc(r) && r.forEach(function(q, sA) {
            D.set(sA, Ut(q, o, c, sA, r, U));
          });
          var Z = f ? e : (x ? b ? ho : Pn : b ? Ee : me)(r);
          at(Z || r, function(q, sA) {
            Z && (q = r[sA = q]), uu(D, sA, Ut(q, o, c, sA, r, U));
          });
        }
        return D;
      }
      function _e(r, o, c) {
        var f = c.length;
        if (r == null)
          return !f;
        for (r = rA(r); f--; ) {
          var C = c[f], U = o[C], D = r[C];
          if (D === e && !(C in r) || !U(D))
            return !1;
        }
        return !0;
      }
      function gi(r, o, c) {
        if (typeof r != "function")
          throw new ze(n);
        return jt(function() {
          r.apply(e, c);
        }, o);
      }
      function ou(r, o, c, f) {
        var C = -1, U = ku, D = !0, y = r.length, b = [], x = o.length;
        if (y) {
          c && (o = XA(o, Le(c))), f ? (U = Yr, D = !1) : 200 <= o.length && (U = jr, D = !1, o = new Bn(o));
          A:
            for (; ++C < y; ) {
              var T = r[C], O = c == null ? T : c(T), T = f || T !== 0 ? T : 0;
              if (D && O == O) {
                for (var R = x; R--; )
                  if (o[R] === O)
                    continue A;
                b.push(T);
              } else
                U(o, O, f) || b.push(T);
            }
        }
        return b;
      }
      m.templateSettings = { escape: xa, evaluate: Tl, interpolate: jo, variable: "", imports: { _: m } }, (m.prototype = Ao.prototype).constructor = m, (Kt.prototype = vt(Ao.prototype)).constructor = Kt, (_A.prototype = vt(Ao.prototype)).constructor = _A, Dr.prototype.clear = function() {
        this.__data__ = Gn ? Gn(null) : {}, this.size = 0;
      }, Dr.prototype.delete = function(r) {
        return r = this.has(r) && delete this.__data__[r], this.size -= r ? 1 : 0, r;
      }, Dr.prototype.get = function(r) {
        var o, c = this.__data__;
        return Gn ? (o = c[r]) === i ? e : o : PA.call(c, r) ? c[r] : e;
      }, Dr.prototype.has = function(r) {
        var o = this.__data__;
        return Gn ? o[r] !== e : PA.call(o, r);
      }, Dr.prototype.set = function(r, o) {
        var c = this.__data__;
        return this.size += this.has(r) ? 0 : 1, c[r] = Gn && o === e ? i : o, this;
      }, Rt.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, Rt.prototype.delete = function(r) {
        var o = this.__data__;
        return !((r = eo(o, r)) < 0 || (r == o.length - 1 ? o.pop() : mr.call(o, r, 1), --this.size, 0));
      }, Rt.prototype.get = function(r) {
        var o = this.__data__;
        return (r = eo(o, r)) < 0 ? e : o[r][1];
      }, Rt.prototype.has = function(r) {
        return -1 < eo(this.__data__, r);
      }, Rt.prototype.set = function(r, o) {
        var c = this.__data__, f = eo(c, r);
        return f < 0 ? (++this.size, c.push([r, o])) : c[f][1] = o, this;
      }, Ft.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new Dr(), map: new (qu || Rt)(), string: new Dr() };
      }, Ft.prototype.delete = function(r) {
        return r = Si(this, r).delete(r), this.size -= r ? 1 : 0, r;
      }, Ft.prototype.get = function(r) {
        return Si(this, r).get(r);
      }, Ft.prototype.has = function(r) {
        return Si(this, r).has(r);
      }, Ft.prototype.set = function(r, o) {
        var c = Si(this, r), f = c.size;
        return c.set(r, o), this.size += c.size == f ? 0 : 1, this;
      }, Bn.prototype.add = Bn.prototype.push = function(r) {
        return this.__data__.set(r, i), this;
      }, Bn.prototype.has = function(r) {
        return this.__data__.has(r);
      }, Nt.prototype.clear = function() {
        this.__data__ = new Rt(), this.size = 0;
      }, Nt.prototype.delete = function(c) {
        var o = this.__data__, c = o.delete(c);
        return this.size = o.size, c;
      }, Nt.prototype.get = function(r) {
        return this.__data__.get(r);
      }, Nt.prototype.has = function(r) {
        return this.__data__.has(r);
      }, Nt.prototype.set = function(r, o) {
        var c = this.__data__;
        if (c instanceof Rt) {
          var f = c.__data__;
          if (!qu || f.length < 199)
            return f.push([r, o]), this.size = ++c.size, this;
          c = this.__data__ = new Ft(f);
        }
        return c.set(r, o), this.size = c.size, this;
      };
      var Re = Bo(Qn), wi = Bo(ro, !0);
      function Qi(r, o) {
        var c = !0;
        return Re(r, function(f, C, U) {
          return c = !!o(f, C, U);
        }), c;
      }
      function wn(r, o, c) {
        for (var f = -1, C = r.length; ++f < C; ) {
          var U, D, y = r[f], b = o(y);
          b != null && (U === e ? b == b && !ie(b) : c(b, U)) && (U = b, D = y);
        }
        return D;
      }
      function $a(r, o) {
        var c = [];
        return Re(r, function(f, C, U) {
          o(f, C, U) && c.push(f);
        }), c;
      }
      function NA(r, o, c, f, C) {
        var U = -1, D = r.length;
        for (c = c || sc, C = C || []; ++U < D; ) {
          var y = r[U];
          0 < o && c(y) ? 1 < o ? NA(y, o - 1, c, f, C) : er(C, y) : f || (C[C.length] = y);
        }
        return C;
      }
      var no = fd(), nc = fd(!0);
      function Qn(r, o) {
        return r && no(r, o, me);
      }
      function ro(r, o) {
        return r && nc(r, o, me);
      }
      function rr(r, o) {
        return Ar(o, function(c) {
          return zt(r[c]);
        });
      }
      function ur(r, o) {
        for (var c = 0, f = (o = Nn(o, r)).length; r != null && c < f; )
          r = r[qt(o[c++])];
        return c && c == f ? r : e;
      }
      function iu(r, o, c) {
        return o = o(r), FA(r) ? o : er(o, c(r));
      }
      function Ne(r) {
        if (r == null)
          return r === e ? "[object Undefined]" : "[object Null]";
        if (Er && Er in rA(r)) {
          var o = r, c = PA.call(o, Er), f = o[Er];
          try {
            o[Er] = e;
            var C = !0;
          } catch {
          }
          var U = Pu.call(o);
          return C && (c ? o[Er] = f : delete o[Er]), U;
        }
        return Pu.call(r);
      }
      function hi(r, o) {
        return o < r;
      }
      function rc(r, o) {
        return r != null && PA.call(r, o);
      }
      function Ad(r, o) {
        return r != null && o in rA(r);
      }
      function ed(r, o, c) {
        for (var f = c ? Yr : ku, C = r[0].length, U = r.length, D = U, y = P(U), b = 1 / 0, x = []; D--; ) {
          var O = r[D];
          D && o && (O = XA(O, Le(o))), b = we(O.length, b), y[D] = !c && (o || 120 <= C && 120 <= O.length) ? new Bn(D && O) : e;
        }
        var O = r[0], T = -1, R = y[0];
        A:
          for (; ++T < C && x.length < b; ) {
            var Z = O[T], W = o ? o(Z) : Z, Z = c || Z !== 0 ? Z : 0;
            if (!(R ? jr(R, W) : f(x, W, c))) {
              for (D = U; --D; ) {
                var uA = y[D];
                if (!(uA ? jr(uA, W) : f(r[D], W, c)))
                  continue A;
              }
              R && R.push(W), x.push(Z);
            }
          }
        return x;
      }
      function yr(r, o, c) {
        return o = (r = Mi(r, o = Nn(o, r))) == null ? r : r[qt(mt(o))], o == null ? e : KA(o, r, c);
      }
      function td(r) {
        return Ae(r) && Ne(r) == M;
      }
      function au(r, o, c, f, C) {
        if (r === o)
          return !0;
        if (r == null || o == null || !Ae(r) && !Ae(o))
          return r != r && o != o;
        var U = au, D = FA(r), b = FA(o), y = D ? k : Xe(r), b = b ? k : Xe(o), x = (y = y == M ? IA : y) == IA, O = (b = b == M ? IA : b) == IA;
        if ((b = y == b) && Jn(r)) {
          if (!Jn(o))
            return !1;
          x = !(D = !0);
        }
        if (b && !x) {
          if (C = C || new Nt(), D || Mr(r))
            return Qo(r, o, c, f, U, C);
          var T = r, R = o, W = y, Z = c, uA = f, q = U, sA = C;
          switch (W) {
            case Be:
              if (T.byteLength != R.byteLength || T.byteOffset != R.byteOffset)
                return !1;
              T = T.buffer, R = R.buffer;
            case ZA:
              return !!(T.byteLength == R.byteLength && q(new an(T), new an(R)));
            case X:
            case iA:
            case vA:
              return Te(+T, +R);
            case z:
              return T.name == R.name && T.message == R.message;
            case Fe:
            case $A:
              return T == R + "";
            case $:
              var AA = nr;
            case ne:
              var aA = 1 & Z;
              return AA = AA || N, T.size != R.size && !aA ? !1 : (aA = sA.get(T), aA ? aA == R : (Z |= 2, sA.set(T, R), aA = Qo(AA(T), AA(R), Z, uA, q, sA), sA.delete(T), aA));
            case ge:
              if (Vt)
                return Vt.call(T) == Vt.call(R);
          }
          return !1;
        }
        if (!(1 & c) && (D = x && PA.call(r, "__wrapped__"), y = O && PA.call(o, "__wrapped__"), D || y))
          return x = D ? r.value() : r, O = y ? o.value() : o, C = C || new Nt(), U(x, O, c, f, C);
        if (b) {
          C = C || new Nt();
          var gA = r, MA = o, Ye = c, wt = f, tt = U, De = C, Aa = 1 & Ye, ea = Pn(gA), Lf = ea.length, D = Pn(MA).length;
          if (Lf != D && !Aa)
            return !1;
          for (var Oc = Lf; Oc--; ) {
            var fu = ea[Oc];
            if (!(Aa ? fu in MA : PA.call(MA, fu)))
              return !1;
          }
          if (D = De.get(gA), y = De.get(MA), D && y)
            return D == MA && y == gA;
          for (var Tc = !0, xf = (De.set(gA, MA), De.set(MA, gA), Aa); ++Oc < Lf; ) {
            fu = ea[Oc];
            var _f, Mc = gA[fu], kc = MA[fu];
            if (!((_f = wt ? Aa ? wt(kc, Mc, fu, MA, gA, De) : wt(Mc, kc, fu, gA, MA, De) : _f) === e ? Mc === kc || tt(Mc, kc, Ye, wt, De) : _f)) {
              Tc = !1;
              break;
            }
            xf = xf || fu == "constructor";
          }
          return Tc && !xf && (D = gA.constructor, y = MA.constructor, D != y) && "constructor" in gA && "constructor" in MA && !(typeof D == "function" && D instanceof D && typeof y == "function" && y instanceof y) && (Tc = !1), De.delete(gA), De.delete(MA), Tc;
        }
        return !1;
      }
      function Ci(r, o, c, f) {
        var C = c.length, U = C, D = !f;
        if (r == null)
          return !U;
        for (r = rA(r); C--; ) {
          var y = c[C];
          if (D && y[2] ? y[1] !== r[y[0]] : !(y[0] in r))
            return !1;
        }
        for (; ++C < U; ) {
          var b = (y = c[C])[0], x = r[b], O = y[1];
          if (D && y[2]) {
            if (x === e && !(b in r))
              return !1;
          } else {
            var T, R = new Nt();
            if (!((T = f ? f(x, O, b, r, o, R) : T) === e ? au(O, x, 3, f, R) : T))
              return !1;
          }
        }
        return !0;
      }
      function uo(r) {
        var o;
        return !(!SA(r) || (o = r, Ya && Ya in o)) && (zt(r) ? Ju : zo).test(_r(r));
      }
      function nd(r) {
        return typeof r == "function" ? r : r == null ? gt : typeof r == "object" ? FA(r) ? pi(r[0], r[1]) : Ui(r) : Sc(r);
      }
      function Fi(r) {
        if (!xr(r))
          return Yu(r);
        var o, c = [];
        for (o in rA(r))
          PA.call(r, o) && o != "constructor" && c.push(o);
        return c;
      }
      function uc(r) {
        if (!SA(r)) {
          var o = r, c = [];
          if (o != null)
            for (var f in rA(o))
              c.push(f);
          return c;
        }
        var C, U = xr(r), D = [];
        for (C in r)
          (C != "constructor" || !U && PA.call(r, C)) && D.push(C);
        return D;
      }
      function oo(r, o) {
        return r < o;
      }
      function rd(r, o) {
        var c = -1, f = LA(r) ? P(r.length) : [];
        return Re(r, function(C, U, D) {
          f[++c] = o(C, U, D);
        }), f;
      }
      function Ui(r) {
        var o = Yt(r);
        return o.length == 1 && o[0][2] ? Ud(o[0][0], o[0][1]) : function(c) {
          return c === r || Ci(c, r, o);
        };
      }
      function pi(r, o) {
        return Fo(r) && Fd(o) ? Ud(qt(r), o) : function(c) {
          var f = qi(c, r);
          return f === e && f === o ? _d(c, r) : au(o, f, 3);
        };
      }
      function pA(r, o, c, f, C) {
        r !== o && no(o, function(U, D) {
          var y, b, x, O, T, R, W, Z, uA, q, sA, AA, aA;
          C = C || new Nt(), SA(U) ? (b = o, O = c, T = pA, R = f, W = C, sA = ki(y = r, x = D), AA = ki(b, x), (aA = W.get(AA)) || (aA = R ? R(sA, AA, x + "", y, b, W) : e, (b = aA === e) && (Z = FA(AA), uA = !Z && Jn(AA), q = !Z && !uA && Mr(AA), aA = AA, Z || uA || q ? aA = FA(sA) ? sA : mA(sA) ? Oe(sA) : uA ? so(AA, !(b = !1)) : q ? cd(AA, !(b = !1)) : [] : Bu(AA) || et(AA) ? et(aA = sA) ? aA = Ec(sA) : SA(sA) && !zt(sA) || (aA = Cd(AA)) : b = !1), b && (W.set(AA, aA), T(aA, AA, O, R, W), W.delete(AA))), st(y, x, aA)) : (Z = f ? f(ki(r, D), U, D + "", r, o, C) : e, st(r, D, Z = Z === e ? U : Z));
        }, Ee);
      }
      function oc(r, o) {
        var c = r.length;
        if (c)
          return Un(o += o < 0 ? c : 0, c) ? r[o] : e;
      }
      function ic(U, o, c) {
        o = o.length ? XA(o, function(y) {
          return FA(y) ? function(b) {
            return ur(b, y.length === 1 ? y[0] : y);
          } : y;
        }) : [gt];
        var f = -1;
        o = XA(o, Le(wA()));
        var C = rd(U, function(y, b, x) {
          return { criteria: XA(o, function(O) {
            return O(y);
          }), index: ++f, value: y };
        }), U = function(y, b) {
          for (var x = c, O = -1, T = y.criteria, R = b.criteria, W = T.length, Z = x.length; ++O < W; ) {
            var uA, q = Bd(T[O], R[O]);
            if (q)
              return Z <= O ? q : (uA = x[O], q * (uA == "desc" ? -1 : 1));
          }
          return y.index - b.index;
        }, D = C.length;
        for (C.sort(U); D--; )
          C[D] = C[D].value;
        return C;
      }
      function du(r, o, c) {
        for (var f = -1, C = o.length, U = {}; ++f < C; ) {
          var D = o[f], y = ur(r, D);
          c(y, D) && su(U, Nn(D, r), y);
        }
        return U;
      }
      function mi(r, o, c, f) {
        var C = f ? qs : tr, U = -1, D = o.length, y = r;
        for (r === o && (o = Oe(o)), c && (y = XA(r, Le(c))); ++U < D; )
          for (var b = 0, x = o[U], O = c ? c(x) : x; -1 < (b = C(y, O, b, f)); )
            y !== r && mr.call(y, b, 1), mr.call(r, b, 1);
        return r;
      }
      function Se(r, o) {
        for (var c = r ? o.length : 0, f = c - 1; c--; ) {
          var C, U = o[c];
          c != f && U === C || (Un(C = U) ? mr.call(r, U, 1) : Cn(r, U));
        }
      }
      function ud(r, o) {
        return r + Bi(ju() * (o - r + 1));
      }
      function ct(r, o) {
        var c = "";
        if (!(!r || o < 1 || K < o))
          for (; o % 2 && (c += r), (o = Bi(o / 2)) && (r += r), o; )
            ;
        return c;
      }
      function bA(r, o) {
        return Gi(po(r, o, gt), r + "");
      }
      function Ei(r) {
        return ln(lu(r));
      }
      function od(r, o) {
        return r = lu(r), mo(r, gn(o, 0, r.length));
      }
      function su(r, o, c, f) {
        if (SA(r))
          for (var C = -1, U = (o = Nn(o, r)).length, D = U - 1, y = r; y != null && ++C < U; ) {
            var b, x = qt(o[C]), O = c;
            if (x === "__proto__" || x === "constructor" || x === "prototype")
              return r;
            uu(y, x, O = C != D && (b = y[x], (O = f ? f(b, x, y) : e) === e) ? SA(b) ? b : Un(o[C + 1]) ? [] : {} : O), y = y[x];
          }
        return r;
      }
      var id = $u ? function(r, o) {
        return $u.set(r, o), r;
      } : gt, WA = si ? function(r, o) {
        return si(r, "toString", { configurable: !0, enumerable: !1, value: Ko(o), writable: !0 });
      } : gt;
      function or(r) {
        return mo(lu(r));
      }
      function Bt(r, o, c) {
        for (var f = -1, C = r.length, U = ((c = C < c ? C : c) < 0 && (c += C), C = c < (o = o < 0 ? C < -o ? 0 : C + o : o) ? 0 : c - o >>> 0, o >>>= 0, P(C)); ++f < C; )
          U[f] = r[f + o];
        return U;
      }
      function ac(r, o) {
        var c;
        return Re(r, function(f, C, U) {
          return !(c = o(f, C, U));
        }), !!c;
      }
      function br(r, o, c) {
        var f = 0, C = r == null ? f : r.length;
        if (typeof o == "number" && o == o && C <= 2147483647) {
          for (; f < C; ) {
            var U = f + C >>> 1, D = r[U];
            D !== null && !ie(D) && (c ? D <= o : D < o) ? f = 1 + U : C = U;
          }
          return C;
        }
        return Di(r, o, gt, c);
      }
      function Di(r, o, c, f) {
        var C = 0, U = r == null ? 0 : r.length;
        if (U === 0)
          return 0;
        for (var D = (o = c(o)) != o, y = o === null, b = ie(o), x = o === e; C < U; ) {
          var O = Bi((C + U) / 2), T = c(r[O]), R = T !== e, W = T === null, uA = T == T, Z = ie(T), uA = D ? f || uA : x ? uA && (f || R) : y ? uA && R && (f || !W) : b ? uA && R && !W && (f || !Z) : !W && !Z && (f ? T <= o : T < o);
          uA ? C = O + 1 : U = O;
        }
        return we(U, 4294967294);
      }
      function Hi(r, o) {
        for (var c = -1, f = r.length, C = 0, U = []; ++c < f; ) {
          var D, y = r[c], b = o ? o(y) : y;
          c && Te(b, D) || (D = b, U[C++] = y === 0 ? 0 : y);
        }
        return U;
      }
      function ad(r) {
        return typeof r == "number" ? r : ie(r) ? _ : +r;
      }
      function $e(r) {
        var o;
        return typeof r == "string" ? r : FA(r) ? XA(r, $e) + "" : ie(r) ? cn ? cn.call(r) : "" : (o = r + "") == "0" && 1 / r == -p ? "-0" : o;
      }
      function hn(r, o, c) {
        var f = -1, C = ku, U = r.length, D = !0, y = [], b = y;
        if (c)
          D = !1, C = Yr;
        else if (200 <= U) {
          var x = o ? null : hd(r);
          if (x)
            return N(x);
          D = !1, C = jr, b = new Bn();
        } else
          b = o ? [] : y;
        A:
          for (; ++f < U; ) {
            var T = r[f], O = o ? o(T) : T, T = c || T !== 0 ? T : 0;
            if (D && O == O) {
              for (var R = b.length; R--; )
                if (b[R] === O)
                  continue A;
              o && b.push(O), y.push(T);
            } else
              C(b, O, c) || (b !== y && b.push(O), y.push(T));
          }
        return y;
      }
      function Cn(r, o) {
        return (r = Mi(r, o = Nn(o, r))) == null || delete r[qt(mt(o))];
      }
      function Rn(r, o, c, f) {
        return su(r, o, c(ur(r, o)), f);
      }
      function io(r, o, c, f) {
        for (var C = r.length, U = f ? C : -1; (f ? U-- : ++U < C) && o(r[U], U, r); )
          ;
        return c ? Bt(r, f ? 0 : U, f ? U + 1 : C) : Bt(r, f ? U + 1 : 0, f ? C : U);
      }
      function dd(r, o) {
        var c = r;
        return ti(o, function(f, C) {
          return C.func.apply(C.thisArg, er([f], C.args));
        }, c = r instanceof _A ? r.value() : c);
      }
      function ao(r, o, c) {
        var f = r.length;
        if (f < 2)
          return f ? hn(r[0]) : [];
        for (var C = -1, U = P(f); ++C < f; )
          for (var D = r[C], y = -1; ++y < f; )
            y != C && (U[C] = ou(U[C] || D, r[y], o, c));
        return hn(NA(U, 1), o, c);
      }
      function sd(r, o, c) {
        for (var f = -1, C = r.length, U = o.length, D = {}; ++f < C; ) {
          var y = f < U ? o[f] : e;
          c(D, r[f], y);
        }
        return D;
      }
      function yi(r) {
        return mA(r) ? r : [];
      }
      function bi(r) {
        return typeof r == "function" ? r : gt;
      }
      function Nn(r, o) {
        return FA(r) ? r : Fo(r, o) ? [r] : pt(VA(r));
      }
      var CA = bA;
      function Qe(r, o, c) {
        var f = r.length;
        return c = c === e ? f : c, !o && f <= c ? r : Bt(r, o, c);
      }
      var Pt = oe || function(r) {
        return Ke.clearTimeout(r);
      };
      function so(r, o) {
        return o ? r.slice() : (o = r.length, o = Xu ? Xu(o) : new r.constructor(o), r.copy(o), o);
      }
      function ir(r) {
        var o = new r.constructor(r.byteLength);
        return new an(o).set(new an(r)), o;
      }
      function cd(r, o) {
        return o = o ? ir(r.buffer) : r.buffer, new r.constructor(o, r.byteOffset, r.length);
      }
      function Bd(r, o) {
        if (r !== o) {
          var c = r !== e, f = r === null, C = r == r, U = ie(r), D = o !== e, y = o === null, b = o == o, x = ie(o);
          if (!y && !x && !U && o < r || U && D && b && !y && !x || f && D && b || !c && b || !C)
            return 1;
          if (!f && !U && !x && r < o || x && c && C && !f && !U || y && c && C || !D && C || !b)
            return -1;
        }
        return 0;
      }
      function ld(r, o, c, f) {
        for (var C = -1, U = r.length, D = c.length, y = -1, b = o.length, x = se(U - D, 0), O = P(b + x), T = !f; ++y < b; )
          O[y] = o[y];
        for (; ++C < D; )
          (T || C < U) && (O[c[C]] = r[C]);
        for (; x--; )
          O[y++] = r[C++];
        return O;
      }
      function Ir(r, o, c, f) {
        for (var C = -1, U = r.length, D = -1, y = c.length, b = -1, x = o.length, O = se(U - y, 0), T = P(O + x), R = !f; ++C < O; )
          T[C] = r[C];
        for (var W = C; ++b < x; )
          T[W + b] = o[b];
        for (; ++D < y; )
          (R || C < U) && (T[W + c[D]] = r[C++]);
        return T;
      }
      function Oe(r, o) {
        var c = -1, f = r.length;
        for (o = o || P(f); ++c < f; )
          o[c] = r[c];
        return o;
      }
      function Fn(r, o, c, f) {
        for (var C = !c, U = (c = c || {}, -1), D = o.length; ++U < D; ) {
          var y = o[U], b = f ? f(c[y], r[y], y, c, r) : e;
          (C ? fn : uu)(c, y, b = b === e ? r[y] : b);
        }
        return c;
      }
      function co(r, o) {
        return function(c, f) {
          var C = FA(c) ? $n : to, U = o ? o() : {};
          return C(c, r, wA(f, 2), U);
        };
      }
      function vr(r) {
        return bA(function(o, c) {
          var f = -1, C = c.length, D = 1 < C ? c[C - 1] : e, U = 2 < C ? c[2] : e, D = 3 < r.length && typeof D == "function" ? (C--, D) : e;
          for (U && We(c[0], c[1], U) && (D = C < 3 ? e : D, C = 1), o = rA(o); ++f < C; ) {
            var y = c[f];
            y && r(o, y, f, D);
          }
          return o;
        });
      }
      function Bo(r, o) {
        return function(c, f) {
          if (c != null) {
            if (!LA(c))
              return r(c, f);
            for (var C = c.length, U = o ? C : -1, D = rA(c); (o ? U-- : ++U < C) && f(D[U], U, D) !== !1; )
              ;
          }
          return c;
        };
      }
      function fd(r) {
        return function(o, c, f) {
          for (var C = -1, U = rA(o), D = f(o), y = D.length; y--; ) {
            var b = D[r ? y : ++C];
            if (c(U[b], b, U) === !1)
              break;
          }
          return o;
        };
      }
      function lo(r) {
        return function(o) {
          var f = zr(o = VA(o)) ? fA(o) : e, c = f ? f[0] : o.charAt(0), f = f ? Qe(f, 1).join("") : o.slice(1);
          return c[r]() + f;
        };
      }
      function ar(r) {
        return function(o) {
          return ti(xc(Od(o).replace(re, "")), r, "");
        };
      }
      function dr(r) {
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return new r();
            case 1:
              return new r(o[0]);
            case 2:
              return new r(o[0], o[1]);
            case 3:
              return new r(o[0], o[1], o[2]);
            case 4:
              return new r(o[0], o[1], o[2], o[3]);
            case 5:
              return new r(o[0], o[1], o[2], o[3], o[4]);
            case 6:
              return new r(o[0], o[1], o[2], o[3], o[4], o[5]);
            case 7:
              return new r(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
          }
          var c = vt(r.prototype), f = r.apply(c, o);
          return SA(f) ? f : c;
        };
      }
      function $l(r, o, c) {
        var f = dr(r);
        return function C() {
          for (var U = arguments.length, D = P(U), y = U, b = Lr(C); y--; )
            D[y] = arguments[y];
          return b = U < 3 && D[0] !== b && D[U - 1] !== b ? [] : j(D, b), (U -= b.length) < c ? Qd(r, o, go, C.placeholder, e, D, b, e, e, c - U) : KA(this && this !== Ke && this instanceof C ? f : r, this, D);
        };
      }
      function gd(r) {
        return function(o, D, f) {
          var C, U = rA(o), D = (LA(o) || (C = wA(D, 3), o = me(o), D = function(y) {
            return C(U[y], y, U);
          }), r(o, D, f));
          return -1 < D ? U[C ? o[D] : D] : e;
        };
      }
      function fo(r) {
        return Wt(function(o) {
          var c = o.length, f = c, C = Kt.prototype.thru;
          for (r && o.reverse(); f--; ) {
            var U = o[f];
            if (typeof U != "function")
              throw new ze(n);
            C && !b && pe(U) == "wrapper" && (b = new Kt([], !0));
          }
          for (f = b ? f : c; ++f < c; )
            var D = pe(U = o[f]), y = D == "wrapper" ? _i(U) : e, b = y && Ti(y[0]) && y[1] == 424 && !y[4].length && y[9] == 1 ? b[pe(y[0])].apply(b, y[3]) : U.length == 1 && Ti(U) ? b[D]() : b.thru(U);
          return function() {
            var x = arguments, O = x[0];
            if (b && x.length == 1 && FA(O))
              return b.plant(O).value();
            for (var T = 0, R = c ? o[T].apply(this, x) : O; ++T < c; )
              R = o[T].call(this, R);
            return R;
          };
        });
      }
      function go(r, o, c, f, C, U, D, y, b, x) {
        var O = o & h, T = 1 & o, R = 2 & o, W = 24 & o, Z = 512 & o, uA = R ? e : dr(r);
        return function q() {
          for (var sA, AA, aA, gA = P(aA = arguments.length), MA = aA; MA--; )
            gA[MA] = arguments[MA];
          return W && (AA = function(Ye, wt) {
            for (var tt = Ye.length, De = 0; tt--; )
              Ye[tt] === wt && ++De;
            return De;
          }(gA, sA = Lr(q))), f && (gA = ld(gA, f, C, W)), U && (gA = Ir(gA, U, D, W)), aA -= AA, W && aA < x ? (AA = j(gA, sA), Qd(r, o, go, q.placeholder, c, gA, AA, y, b, x - aA)) : (sA = T ? c : this, AA = R ? sA[r] : r, aA = gA.length, y ? gA = function(Ye, wt) {
            for (var tt = Ye.length, De = we(wt.length, tt), Aa = Oe(Ye); De--; ) {
              var ea = wt[De];
              Ye[De] = Un(ea, tt) ? Aa[ea] : e;
            }
            return Ye;
          }(gA, y) : Z && 1 < aA && gA.reverse(), O && b < aA && (gA.length = b), (AA = this && this !== Ke && this instanceof q ? uA || dr(AA) : AA).apply(sA, gA));
        };
      }
      function Ii(r, o) {
        return function(c, f) {
          return c = c, C = r, U = o(f), D = {}, Qn(c, function(y, b, x) {
            C(D, U(y), b, x);
          }), D;
          var C, U, D;
        };
      }
      function vi(r, o) {
        return function(c, f) {
          var C;
          if (c === e && f === e)
            return o;
          if (c !== e && (C = c), f !== e) {
            if (C === e)
              return f;
            f = (typeof c == "string" || typeof f == "string" ? (c = $e(c), $e) : (c = ad(c), ad))(f), C = r(c, f);
          }
          return C;
        };
      }
      function Ki(r) {
        return Wt(function(o) {
          return o = XA(o, Le(wA())), bA(function(c) {
            var f = this;
            return r(o, function(C) {
              return KA(C, f, c);
            });
          });
        });
      }
      function Lt(r, o) {
        var c = (o = o === e ? " " : $e(o)).length;
        return c < 2 ? c ? ct(o, r) : o : (c = ct(o, ci(r / cA(o))), zr(o) ? Qe(fA(c), 0, r).join("") : c.slice(0, r));
      }
      function dc(r, o, c, f) {
        var C = 1 & o, U = dr(r);
        return function D() {
          for (var y = -1, b = arguments.length, x = -1, O = f.length, T = P(O + b), R = this && this !== Ke && this instanceof D ? U : r; ++x < O; )
            T[x] = f[x];
          for (; b--; )
            T[x++] = arguments[++y];
          return KA(R, C ? c : this, T);
        };
      }
      function wd(r) {
        return function(o, c, f) {
          f && typeof f != "number" && We(o, c, f) && (c = f = e), o = _t(o), c === e ? (c = o, o = 0) : c = _t(c), f = f === e ? o < c ? 1 : -1 : _t(f);
          for (var C = o, U = f, D = r, y = -1, b = se(ci((c - C) / (U || 1)), 0), x = P(b); b--; )
            x[D ? b : ++y] = C, C += U;
          return x;
        };
      }
      function Li(r) {
        return function(o, c) {
          return typeof o == "string" && typeof c == "string" || (o = St(o), c = St(c)), r(o, c);
        };
      }
      function Qd(r, o, c, f, T, R, D, y, b, x) {
        var O = 8 & o, T = (4 & (o = (o | (O ? l : w)) & ~(O ? w : l)) || (o &= -4), [r, o, T, O ? R : e, O ? D : e, O ? e : R, O ? e : D, y, b, x]), R = c.apply(e, T);
        return Ti(r) && Zt(R, T), R.placeholder = f, pd(R, r, o);
      }
      function Jt(r) {
        var o = UA[r];
        return function(c, f) {
          var C;
          return c = St(c), (f = f == null ? 0 : we(DA(f), 292)) && tc(c) ? (C = (VA(c) + "e").split("e"), +((C = (VA(o(C[0] + "e" + (+C[1] + f))) + "e").split("e"))[0] + "e" + (+C[1] - f))) : o(c);
        };
      }
      var hd = nu && 1 / N(new nu([, -0]))[1] == p ? function(r) {
        return new nu(r);
      } : xo;
      function xi(r) {
        return function(o) {
          var c, f, C, U = Xe(o);
          return U == $ ? nr(o) : U == ne ? (U = o, c = -1, f = Array(U.size), U.forEach(function(D) {
            f[++c] = [D, D];
          }), f) : XA(r(C = o), function(D) {
            return [D, C[D]];
          });
        };
      }
      function Xt(r, o, c, f, C, U, D, y) {
        var b, x, O, T, R, W, Z, uA, q, sA, AA, aA, gA, MA = 2 & o;
        if (MA || typeof r == "function")
          return (b = f ? f.length : 0) || (o &= -97, f = C = e), D = D === e ? D : se(DA(D), 0), y = y === e ? y : DA(y), b -= C ? C.length : 0, o & w && (O = f, T = C, f = C = e), x = MA ? e : _i(r), O = [r, o, c, f, C, O, T, U, D, y], x && (T = x, D = (U = O)[1], W = T[1], uA = (Z = D | W) < 131, q = W == h && D == 8 || W == h && D == g && U[7].length <= T[8] || W == 384 && T[7].length <= T[8] && D == 8, uA || q) && (1 & W && (U[2] = T[2], Z |= 1 & D ? 0 : 4), (uA = T[3]) && (R = U[3], U[3] = R ? ld(R, uA, T[4]) : uA, U[4] = R ? j(U[3], d) : T[4]), (uA = T[5]) && (R = U[5], U[5] = R ? Ir(R, uA, T[6]) : uA, U[6] = R ? j(U[5], d) : T[6]), (uA = T[7]) && (U[7] = uA), W & h && (U[8] = U[8] == null ? T[8] : we(U[8], T[8])), U[9] == null && (U[9] = T[9]), U[0] = T[0], U[1] = Z), r = O[0], o = O[1], c = O[2], f = O[3], C = O[4], !(y = O[9] = O[9] === e ? MA ? 0 : r.length : se(O[9] - b, 0)) && 24 & o && (o &= -25), q = o && o != 1 ? o == 8 || o == s ? $l(r, o, y) : o != l && o != 33 || C.length ? go.apply(e, O) : dc(r, o, c, f) : (AA = c, aA = 1 & o, gA = dr(sA = r), function Ye() {
            return (this && this !== Ke && this instanceof Ye ? gA : sA).apply(aA ? AA : this, arguments);
          }), pd((x ? id : Zt)(q, O), r, o);
        throw new ze(n);
      }
      function wo(r, o, c, f) {
        return r === e || Te(r, $r[c]) && !PA.call(f, c) ? o : r;
      }
      function Kr(r, o, c, f, C, U) {
        return SA(r) && SA(o) && (U.set(o, r), pA(r, o, e, Kr, U), U.delete(o)), r;
      }
      function QA(r) {
        return Bu(r) ? e : r;
      }
      function Qo(r, o, c, f, C, U) {
        var D = 1 & c, y = r.length, b = o.length;
        if (y != b && !(D && y < b))
          return !1;
        var b = U.get(r), x = U.get(o);
        if (b && x)
          return b == o && x == r;
        var O = -1, T = !0, R = 2 & c ? new Bn() : e;
        for (U.set(r, o), U.set(o, r); ++O < y; ) {
          var W, Z = r[O], uA = o[O];
          if ((W = f ? D ? f(uA, Z, O, o, r, U) : f(Z, uA, O, r, o, U) : W) !== e) {
            if (W)
              continue;
            T = !1;
            break;
          }
          if (R) {
            if (!Gu(o, function(q, sA) {
              return !jr(R, sA) && (Z === q || C(Z, q, c, f, U)) && R.push(sA);
            })) {
              T = !1;
              break;
            }
          } else if (Z !== uA && !C(Z, uA, c, f, U)) {
            T = !1;
            break;
          }
        }
        return U.delete(r), U.delete(o), T;
      }
      function Wt(r) {
        return Gi(po(r, e, lc), r + "");
      }
      function Pn(r) {
        return iu(r, me, Co);
      }
      function ho(r) {
        return iu(r, Ee, Oi);
      }
      var _i = $u ? function(r) {
        return $u.get(r);
      } : xo;
      function pe(r) {
        for (var o = r.name + "", c = E[o], f = PA.call(E, o) ? c.length : 0; f--; ) {
          var C = c[f], U = C.func;
          if (U == null || U == r)
            return C.name;
        }
        return o;
      }
      function Lr(r) {
        return (PA.call(m, "placeholder") ? m : r).placeholder;
      }
      function wA() {
        var r = (r = m.iteratee || $i) === $i ? nd : r;
        return arguments.length ? r(arguments[0], arguments[1]) : r;
      }
      function Si(C, o) {
        var c, f, C = C.__data__;
        return ((f = typeof (c = o)) == "string" || f == "number" || f == "symbol" || f == "boolean" ? c !== "__proto__" : c === null) ? C[typeof o == "string" ? "string" : "hash"] : C.map;
      }
      function Yt(r) {
        for (var o = me(r), c = o.length; c--; ) {
          var f = o[c], C = r[f];
          o[c] = [f, C, Fd(C)];
        }
        return o;
      }
      function he(r, o) {
        return o = o, r = (r = r) == null ? e : r[o], uo(r) ? r : e;
      }
      var Co = li ? function(r) {
        return r == null ? [] : (r = rA(r), Ar(li(r), function(o) {
          return Wu.call(r, o);
        }));
      } : Gd, Oi = li ? function(r) {
        for (var o = []; r; )
          er(o, Co(r)), r = kn(r);
        return o;
      } : Gd, Xe = Ne;
      function cu(r, o, c) {
        for (var f = -1, C = (o = Nn(o, r)).length, U = !1; ++f < C; ) {
          var D = qt(o[f]);
          if (!(U = r != null && c(r, D)))
            break;
          r = r[D];
        }
        return U || ++f != C ? U : !!(C = r == null ? 0 : r.length) && Tr(C) && Un(D, C) && (FA(r) || et(r));
      }
      function Cd(r) {
        return typeof r.constructor != "function" || xr(r) ? {} : vt(kn(r));
      }
      function sc(r) {
        return FA(r) || et(r) || !!(di && r && r[di]);
      }
      function Un(r, o) {
        var c = typeof r;
        return !!(o = o ?? K) && (c == "number" || c != "symbol" && Vs.test(r)) && -1 < r && r % 1 == 0 && r < o;
      }
      function We(r, o, c) {
        var f;
        if (SA(c))
          return ((f = typeof o) == "number" ? LA(c) && Un(o, c.length) : f == "string" && o in c) && Te(c[o], r);
      }
      function Fo(r, o) {
        var c;
        if (!FA(r))
          return (c = typeof r) == "number" || c == "symbol" || c == "boolean" || r == null || ie(r) || kl.test(r) || !Ml.test(r) || o != null && r in rA(o);
      }
      function Ti(r) {
        var o = pe(r), c = m[o];
        return typeof c == "function" && o in _A.prototype && (r === c || (o = _i(c)) && r === o[0]);
      }
      (sn && Xe(new sn(new ArrayBuffer(1))) != Be || qu && Xe(new qu()) != $ || zu && Xe(zu.resolve()) != YA || nu && Xe(new nu()) != ne || TA && Xe(new TA()) != ve) && (Xe = function(c) {
        var o = Ne(c), c = o == IA ? c.constructor : e, c = c ? _r(c) : "";
        if (c)
          switch (c) {
            case ru:
              return Be;
            case Za:
              return $;
            case fi:
              return YA;
            case Gt:
              return ne;
            case xA:
              return ve;
          }
        return o;
      });
      var Uo = Au ? zt : Vd;
      function xr(r) {
        var o = r && r.constructor;
        return r === (typeof o == "function" && o.prototype || $r);
      }
      function Fd(r) {
        return r == r && !SA(r);
      }
      function Ud(r, o) {
        return function(c) {
          return c != null && c[r] === o && (o !== e || r in rA(c));
        };
      }
      function po(r, o, c) {
        return o = se(o === e ? r.length - 1 : o, 0), function() {
          for (var f = arguments, C = -1, U = se(f.length - o, 0), D = P(U); ++C < U; )
            D[C] = f[o + C];
          for (var C = -1, y = P(o + 1); ++C < o; )
            y[C] = f[C];
          return y[o] = c(D), KA(r, this, y);
        };
      }
      function Mi(r, o) {
        return o.length < 2 ? r : ur(r, Bt(o, 0, -1));
      }
      function ki(r, o) {
        if ((o !== "constructor" || typeof r[o] != "function") && o != "__proto__")
          return r[o];
      }
      var Zt = md(id), jt = xe || function(r, o) {
        return Ke.setTimeout(r, o);
      }, Gi = md(WA);
      function pd(r, D, c) {
        var f, C, U, D = D + "";
        return Gi(r, (C = (D = (D = r = D).match(Ms)) ? D[1].split(Pl) : [], U = c, at(v, function(y) {
          var b = "_." + y[0];
          U & y[1] && !ku(C, b) && C.push(b);
        }), D = C.sort(), (c = D.length) ? (D[f = c - 1] = (1 < c ? "& " : "") + D[f], D = D.join(2 < c ? ", " : " "), r.replace(Nl, `{
/* [wrapped with ` + D + `] */
`)) : r));
      }
      function md(r) {
        var o = 0, c = 0;
        return function() {
          var f = OA(), C = 16 - (f - c);
          if (c = f, 0 < C) {
            if (800 <= ++o)
              return arguments[0];
          } else
            o = 0;
          return r.apply(e, arguments);
        };
      }
      function mo(r, o) {
        var c = -1, f = r.length, C = f - 1;
        for (o = o === e ? f : o; ++c < o; ) {
          var U = ud(c, C), D = r[U];
          r[U] = r[c], r[c] = D;
        }
        return r.length = o, r;
      }
      Vi = (oe = Yi(oe = function(r) {
        var o = [];
        return r.charCodeAt(0) === 46 && o.push(""), r.replace(Gl, function(c, f, C, U) {
          o.push(C ? U.replace(Wl, "$1") : f || c);
        }), o;
      }, function(r) {
        return Vi.size === 500 && Vi.clear(), r;
      })).cache;
      var Vi, pt = oe;
      function qt(r) {
        var o;
        return typeof r == "string" || ie(r) ? r : (o = r + "") == "0" && 1 / r == -p ? "-0" : o;
      }
      function _r(r) {
        if (r != null) {
          try {
            return pr.call(r);
          } catch {
          }
          try {
            return r + "";
          } catch {
          }
        }
        return "";
      }
      function Ri(r) {
        var o;
        return r instanceof _A ? r.clone() : ((o = new Kt(r.__wrapped__, r.__chain__)).__actions__ = Oe(r.__actions__), o.__index__ = r.__index__, o.__values__ = r.__values__, o);
      }
      sn = bA(function(r, o) {
        return mA(r) ? ou(r, NA(o, 1, mA, !0)) : [];
      }), zu = bA(function(r, o) {
        var c = mt(o);
        return mA(c) && (c = e), mA(r) ? ou(r, NA(o, 1, mA, !0), wA(c, 2)) : [];
      }), TA = bA(function(r, o) {
        var c = mt(o);
        return mA(c) && (c = e), mA(r) ? ou(r, NA(o, 1, mA, !0), e, c) : [];
      });
      function cc(r, o, c) {
        var f = r == null ? 0 : r.length;
        return f ? ((c = c == null ? 0 : DA(c)) < 0 && (c = se(f + c, 0)), Zr(r, wA(o, 3), c)) : -1;
      }
      function Bc(r, o, c) {
        var f, C = r == null ? 0 : r.length;
        return C ? (f = C - 1, c !== e && (f = DA(c), f = c < 0 ? se(C + f, 0) : we(f, C - 1)), Zr(r, wA(o, 3), f, !0)) : -1;
      }
      function lc(r) {
        return r != null && r.length ? NA(r, 1) : [];
      }
      function Ni(r) {
        return r && r.length ? r[0] : e;
      }
      Au = bA(function(r) {
        var o = XA(r, yi);
        return o.length && o[0] === r[0] ? ed(o) : [];
      }), xe = bA(function(r) {
        var o = mt(r), c = XA(r, yi);
        return o === mt(c) ? o = e : c.pop(), c.length && c[0] === r[0] ? ed(c, wA(o, 2)) : [];
      }), WA = bA(function(r) {
        var o = mt(r), c = XA(r, yi);
        return (o = typeof o == "function" ? o : e) && c.pop(), c.length && c[0] === r[0] ? ed(c, e, o) : [];
      });
      function mt(r) {
        var o = r == null ? 0 : r.length;
        return o ? r[o - 1] : e;
      }
      oe = bA(fc);
      function fc(r, o) {
        return r && r.length && o && o.length ? mi(r, o) : r;
      }
      var Af = Wt(function(r, o) {
        var c = r == null ? 0 : r.length, f = za(r, o);
        return Se(r, XA(o, function(C) {
          return Un(C, c) ? +C : C;
        }).sort(Bd)), f;
      });
      function Ed(r) {
        return r == null ? r : tu.call(r);
      }
      var ef = bA(function(r) {
        return hn(NA(r, 1, mA, !0));
      }), tf = bA(function(r) {
        var o = mt(r);
        return mA(o) && (o = e), hn(NA(r, 1, mA, !0), wA(o, 2));
      }), nf = bA(function(r) {
        var o = typeof (o = mt(r)) == "function" ? o : e;
        return hn(NA(r, 1, mA, !0), e, o);
      });
      function Pi(r) {
        var o;
        return r && r.length ? (o = 0, r = Ar(r, function(c) {
          return mA(c) && (o = se(c.length, o), 1);
        }), Wa(o, function(c) {
          return XA(r, Ur(c));
        })) : [];
      }
      function Eo(r, o) {
        return r && r.length ? (r = Pi(r), o == null ? r : XA(r, function(c) {
          return KA(o, e, c);
        })) : [];
      }
      var rf = bA(function(r, o) {
        return mA(r) ? ou(r, o) : [];
      }), uf = bA(function(r) {
        return ao(Ar(r, mA));
      }), of = bA(function(r) {
        var o = mt(r);
        return mA(o) && (o = e), ao(Ar(r, mA), wA(o, 2));
      }), af = bA(function(r) {
        var o = typeof (o = mt(r)) == "function" ? o : e;
        return ao(Ar(r, mA), e, o);
      }), gc = bA(Pi), wc = bA(function(r) {
        var o = r.length, o = typeof (o = 1 < o ? r[o - 1] : e) == "function" ? (r.pop(), o) : e;
        return Eo(r, o);
      });
      function Qc(r) {
        return r = m(r), r.__chain__ = !0, r;
      }
      function Ji(r, o) {
        return o(r);
      }
      var df = Wt(function(r) {
        function o(U) {
          return za(U, r);
        }
        var c = r.length, f = c ? r[0] : 0, C = this.__wrapped__;
        return !(1 < c || this.__actions__.length) && C instanceof _A && Un(f) ? ((C = C.slice(f, +f + (c ? 1 : 0))).__actions__.push({ func: Ji, args: [o], thisArg: e }), new Kt(C, this.__chain__).thru(function(U) {
          return c && !U.length && U.push(e), U;
        })) : this.thru(o);
      }), Xi = co(function(r, o, c) {
        PA.call(r, c) ? ++r[c] : fn(r, c, 1);
      }), sf = gd(cc), cf = gd(Bc);
      function Do(r, o) {
        return (FA(r) ? at : Re)(r, wA(o, 3));
      }
      function Dd(r, o) {
        return (FA(r) ? zl : wi)(r, wA(o, 3));
      }
      var hc = co(function(r, o, c) {
        PA.call(r, c) ? r[c].push(o) : fn(r, c, [o]);
      }), Hd = bA(function(r, o, c) {
        var f = -1, C = typeof o == "function", U = LA(r) ? P(r.length) : [];
        return Re(r, function(D) {
          U[++f] = C ? KA(o, D, c) : yr(D, o, c);
        }), U;
      }), Cc = co(function(r, o, c) {
        fn(r, c, o);
      });
      function Ho(r, o) {
        return (FA(r) ? XA : rd)(r, wA(o, 3));
      }
      var yd = co(function(r, o, c) {
        r[c ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      }), Bf = bA(function(r, o) {
        var c;
        return r == null ? [] : (1 < (c = o.length) && We(r, o[0], o[1]) ? o = [] : 2 < c && We(o[0], o[1], o[2]) && (o = [o[0]]), ic(r, NA(o, 1), []));
      }), Sr = Et || function() {
        return Ke.Date.now();
      };
      function yo(r, o, c) {
        return o = c ? e : o, o = r && o == null ? r.length : o, Xt(r, h, e, e, e, e, o);
      }
      function Wi(r, o) {
        var c;
        if (typeof o != "function")
          throw new ze(n);
        return r = DA(r), function() {
          return 0 < --r && (c = o.apply(this, arguments)), r <= 1 && (o = e), c;
        };
      }
      var bo = bA(function(r, o, c) {
        var f, C = 1;
        return c.length && (f = j(c, Lr(bo)), C |= l), Xt(r, C, o, c, f);
      }), bd = bA(function(r, o, c) {
        var f, C = 3;
        return c.length && (f = j(c, Lr(bd)), C |= l), Xt(o, C, r, c, f);
      });
      function Fc(r, o, c) {
        var f, C, U, D, y, b, x = 0, O = !1, T = !1, R = !0;
        if (typeof r != "function")
          throw new ze(n);
        function W(AA) {
          var aA = f, gA = C;
          return f = C = e, x = AA, D = r.apply(gA, aA);
        }
        function Z(AA) {
          var aA = AA - b;
          return b === e || o <= aA || aA < 0 || T && U <= AA - x;
        }
        function uA() {
          var AA, aA = Sr();
          if (Z(aA))
            return q(aA);
          y = jt(uA, (AA = o - ((aA = aA) - b), T ? we(AA, U - (aA - x)) : AA));
        }
        function q(AA) {
          return y = e, R && f ? W(AA) : (f = C = e, D);
        }
        function sA() {
          var AA = Sr(), aA = Z(AA);
          if (f = arguments, C = this, b = AA, aA) {
            if (y === e)
              return x = AA = b, y = jt(uA, o), O ? W(AA) : D;
            if (T)
              return Pt(y), y = jt(uA, o), W(b);
          }
          return y === e && (y = jt(uA, o)), D;
        }
        return o = St(o) || 0, SA(c) && (O = !!c.leading, T = "maxWait" in c, U = T ? se(St(c.maxWait) || 0, o) : U, R = "trailing" in c ? !!c.trailing : R), sA.cancel = function() {
          y !== e && Pt(y), x = 0, f = b = C = y = e;
        }, sA.flush = function() {
          return y === e ? D : q(Sr());
        }, sA;
      }
      var Et = bA(function(r, o) {
        return gi(r, 1, o);
      }), lf = bA(function(r, o, c) {
        return gi(r, St(o) || 0, c);
      });
      function Yi(r, o) {
        if (typeof r != "function" || o != null && typeof o != "function")
          throw new ze(n);
        function c() {
          var f = arguments, C = o ? o.apply(this, f) : f[0], U = c.cache;
          return U.has(C) ? U.get(C) : (f = r.apply(this, f), c.cache = U.set(C, f) || U, f);
        }
        return c.cache = new (Yi.Cache || Ft)(), c;
      }
      function pn(r) {
        if (typeof r != "function")
          throw new ze(n);
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return !r.call(this);
            case 1:
              return !r.call(this, o[0]);
            case 2:
              return !r.call(this, o[0], o[1]);
            case 3:
              return !r.call(this, o[0], o[1], o[2]);
          }
          return !r.apply(this, o);
        };
      }
      Yi.Cache = Ft;
      var CA = CA(function(r, o) {
        var c = (o = o.length == 1 && FA(o[0]) ? XA(o[0], Le(wA())) : XA(NA(o, 1), Le(wA()))).length;
        return bA(function(f) {
          for (var C = -1, U = we(f.length, c); ++C < U; )
            f[C] = o[C].call(this, f[C]);
          return KA(r, this, f);
        });
      }), Id = bA(function(r, o) {
        var c = j(o, Lr(Id));
        return Xt(r, l, e, o, c);
      }), At = bA(function(r, o) {
        var c = j(o, Lr(At));
        return Xt(r, w, e, o, c);
      }), Ce = Wt(function(r, o) {
        return Xt(r, g, e, e, e, o);
      });
      function Te(r, o) {
        return r === o || r != r && o != o;
      }
      var xt = Li(hi), vd = Li(function(r, o) {
        return o <= r;
      }), et = td(function() {
        return arguments;
      }()) ? td : function(r) {
        return Ae(r) && PA.call(r, "callee") && !Wu.call(r, "callee");
      }, FA = P.isArray, Zi = ht ? Le(ht) : function(r) {
        return Ae(r) && Ne(r) == ZA;
      };
      function LA(r) {
        return r != null && Tr(r.length) && !zt(r);
      }
      function mA(r) {
        return Ae(r) && LA(r);
      }
      var Jn = Dt || Vd, Dt = Zs ? Le(Zs) : function(r) {
        return Ae(r) && Ne(r) == iA;
      };
      function Or(r) {
        var o;
        return !!Ae(r) && ((o = Ne(r)) == z || o == "[object DOMException]" || typeof r.message == "string" && typeof r.name == "string" && !Bu(r));
      }
      function zt(r) {
        return !!SA(r) && ((r = Ne(r)) == J || r == lA || r == "[object AsyncFunction]" || r == "[object Proxy]");
      }
      function Kd(r) {
        return typeof r == "number" && r == DA(r);
      }
      function Tr(r) {
        return typeof r == "number" && -1 < r && r % 1 == 0 && r <= K;
      }
      function SA(r) {
        var o = typeof r;
        return r != null && (o == "object" || o == "function");
      }
      function Ae(r) {
        return r != null && typeof r == "object";
      }
      var Uc = Ra ? Le(Ra) : function(r) {
        return Ae(r) && Xe(r) == $;
      };
      function pc(r) {
        return typeof r == "number" || Ae(r) && Ne(r) == vA;
      }
      function Bu(r) {
        return !(!Ae(r) || Ne(r) != IA) && ((r = kn(r)) === null || typeof (r = PA.call(r, "constructor") && r.constructor) == "function" && r instanceof r && pr.call(r) == ii);
      }
      var $t = Tn ? Le(Tn) : function(r) {
        return Ae(r) && Ne(r) == Fe;
      }, EA = Mu ? Le(Mu) : function(r) {
        return Ae(r) && Xe(r) == ne;
      };
      function Io(r) {
        return typeof r == "string" || !FA(r) && Ae(r) && Ne(r) == $A;
      }
      function ie(r) {
        return typeof r == "symbol" || Ae(r) && Ne(r) == ge;
      }
      var Mr = Ai ? Le(Ai) : function(r) {
        return Ae(r) && Tr(r.length) && !!RA[Ne(r)];
      }, JA = Li(oo), ff = Li(function(r, o) {
        return r <= o;
      });
      function Ld(r) {
        if (!r)
          return [];
        if (LA(r))
          return (Io(r) ? fA : Oe)(r);
        if (eu && r[eu]) {
          for (var o, c = r[eu](), f = []; !(o = c.next()).done; )
            f.push(o.value);
          return f;
        }
        var C = Xe(r);
        return (C == $ ? nr : C == ne ? N : lu)(r);
      }
      function _t(r) {
        return r ? (r = St(r)) === p || r === -p ? 17976931348623157e292 * (r < 0 ? -1 : 1) : r == r ? r : 0 : r === 0 ? r : 0;
      }
      function DA(o) {
        var o = _t(o), c = o % 1;
        return o == o ? c ? o - c : o : 0;
      }
      function mc(r) {
        return r ? gn(DA(r), 0, S) : 0;
      }
      function St(r) {
        if (typeof r == "number")
          return r;
        if (ie(r))
          return _;
        if (typeof (r = SA(r) ? SA(o = typeof r.valueOf == "function" ? r.valueOf() : r) ? o + "" : o : r) != "string")
          return r === 0 ? r : +r;
        r = zs(r);
        var o = Zl.test(r);
        return o || Gs.test(r) ? ot(r.slice(2), o ? 2 : 8) : qo.test(r) ? _ : +r;
      }
      function Ec(r) {
        return Fn(r, Ee(r));
      }
      function VA(r) {
        return r == null ? "" : $e(r);
      }
      var xd = vr(function(r, o) {
        if (xr(o) || LA(o))
          Fn(o, me(o), r);
        else
          for (var c in o)
            PA.call(o, c) && uu(r, c, o[c]);
      }), Dc = vr(function(r, o) {
        Fn(o, Ee(o), r);
      }), ji = vr(function(r, o, c, f) {
        Fn(o, Ee(o), r, f);
      }), gf = vr(function(r, o, c, f) {
        Fn(o, me(o), r, f);
      }), Me = Wt(za), lt = bA(function(r, o) {
        r = rA(r);
        var c = -1, f = o.length, C = 2 < f ? o[2] : e;
        for (C && We(o[0], o[1], C) && (f = 1); ++c < f; )
          for (var U = o[c], D = Ee(U), y = -1, b = D.length; ++y < b; ) {
            var x = D[y], O = r[x];
            (O === e || Te(O, $r[x]) && !PA.call(r, x)) && (r[x] = U[x]);
          }
        return r;
      }), wf = bA(function(r) {
        return r.push(e, Kr), KA(Sd, e, r);
      });
      function qi(r, o, c) {
        return r = r == null ? e : ur(r, o), r === e ? c : r;
      }
      function _d(r, o) {
        return r != null && cu(r, o, Ad);
      }
      var Qf = Ii(function(r, o, c) {
        r[o = o != null && typeof o.toString != "function" ? Pu.call(o) : o] = c;
      }, Ko(gt)), Hc = Ii(function(r, o, c) {
        o != null && typeof o.toString != "function" && (o = Pu.call(o)), PA.call(r, o) ? r[o].push(c) : r[o] = [c];
      }, wA), yc = bA(yr);
      function me(r) {
        return (LA(r) ? ja : Fi)(r);
      }
      function Ee(r) {
        return LA(r) ? ja(r, !0) : uc(r);
      }
      var hf = vr(function(r, o, c) {
        pA(r, o, c);
      }), Sd = vr(function(r, o, c, f) {
        pA(r, o, c, f);
      }), bc = Wt(function(r, o) {
        var c = {};
        if (r != null)
          for (var f = !1, C = (o = XA(o, function(U) {
            return U = Nn(U, r), f = f || 1 < U.length, U;
          }), Fn(r, ho(r), c), f && (c = Ut(c, 7, QA)), o.length); C--; )
            Cn(c, o[C]);
        return c;
      }), Cf = Wt(function(r, o) {
        return r == null ? {} : du(c = r, o, function(f, C) {
          return _d(c, C);
        });
        var c;
      });
      function Ic(r, o) {
        var c;
        return r == null ? {} : (c = XA(ho(r), function(f) {
          return [f];
        }), o = wA(o), du(r, c, function(f, C) {
          return o(f, C[0]);
        }));
      }
      var vc = xi(me), Kc = xi(Ee);
      function lu(r) {
        return r == null ? [] : Vu(r, me(r));
      }
      var Ff = ar(function(r, o, c) {
        return o = o.toLowerCase(), r + (c ? zi(o) : o);
      });
      function zi(r) {
        return vo(VA(r).toLowerCase());
      }
      function Od(r) {
        return (r = VA(r)) && r.replace(Rs, qr).replace(ee, "");
      }
      var Lc = ar(function(r, o, c) {
        return r + (c ? "-" : "") + o.toLowerCase();
      }), Uf = ar(function(r, o, c) {
        return r + (c ? " " : "") + o.toLowerCase();
      }), Td = lo("toLowerCase"), pf = ar(function(r, o, c) {
        return r + (c ? "_" : "") + o.toLowerCase();
      }), mf = ar(function(r, o, c) {
        return r + (c ? " " : "") + vo(o);
      }), ft = ar(function(r, o, c) {
        return r + (c ? " " : "") + o.toUpperCase();
      }), vo = lo("toUpperCase");
      function xc(r, o, c) {
        return r = VA(r), (o = c ? e : o) === e ? (c = r, jn.test(c) ? r.match(jl) || [] : r.match(Jl) || []) : r.match(o) || [];
      }
      var _c = bA(function(r, o) {
        try {
          return KA(r, e, o);
        } catch (c) {
          return Or(c) ? c : new BA(c);
        }
      }), Md = Wt(function(r, o) {
        return at(o, function(c) {
          c = qt(c), fn(r, c, bo(r[c], r));
        }), r;
      });
      function Ko(r) {
        return function() {
          return r;
        };
      }
      var Ef = fo(), Df = fo(!0);
      function gt(r) {
        return r;
      }
      function $i(r) {
        return nd(typeof r == "function" ? r : Ut(r, 1));
      }
      var Hf = bA(function(r, o) {
        return function(c) {
          return yr(c, r, o);
        };
      }), yf = bA(function(r, o) {
        return function(c) {
          return yr(r, c, o);
        };
      });
      function Lo(r, o, c) {
        var f = me(o), C = rr(o, f), U = (c != null || SA(o) && (C.length || !f.length) || (c = o, o = r, r = this, C = rr(o, me(o))), !(SA(c) && "chain" in c && !c.chain)), D = zt(r);
        return at(C, function(y) {
          var b = o[y];
          r[y] = b, D && (r.prototype[y] = function() {
            var x, O = this.__chain__;
            return U || O ? (((x = r(this.__wrapped__)).__actions__ = Oe(this.__actions__)).push({ func: b, args: arguments, thisArg: r }), x.__chain__ = O, x) : b.apply(r, er([this.value()], arguments));
          });
        }), r;
      }
      function xo() {
      }
      var bf = Ki(XA), If = Ki(ei), vf = Ki(Gu);
      function Sc(r) {
        return Fo(r) ? Ur(qt(r)) : (o = r, function(c) {
          return ur(c, o);
        });
        var o;
      }
      var kd = wd(), Kf = wd(!0);
      function Gd() {
        return [];
      }
      function Vd() {
        return !1;
      }
      var u = vi(function(r, o) {
        return r + o;
      }, 0), a = Jt("ceil"), B = vi(function(r, o) {
        return r / o;
      }, 1), Q = Jt("floor"), F, H = vi(function(r, o) {
        return r * o;
      }, 1), I = Jt("round"), L = vi(function(r, o) {
        return r - o;
      }, 0);
      return m.after = function(r, o) {
        if (typeof o != "function")
          throw new ze(n);
        return r = DA(r), function() {
          if (--r < 1)
            return o.apply(this, arguments);
        };
      }, m.ary = yo, m.assign = xd, m.assignIn = Dc, m.assignInWith = ji, m.assignWith = gf, m.at = Me, m.before = Wi, m.bind = bo, m.bindAll = Md, m.bindKey = bd, m.castArray = function() {
        var r;
        return arguments.length ? FA(r = arguments[0]) ? r : [r] : [];
      }, m.chain = Qc, m.chunk = function(r, o, c) {
        o = (c ? We(r, o, c) : o === e) ? 1 : se(DA(o), 0);
        var f = r == null ? 0 : r.length;
        if (!f || o < 1)
          return [];
        for (var C = 0, U = 0, D = P(ci(f / o)); C < f; )
          D[U++] = Bt(r, C, C += o);
        return D;
      }, m.compact = function(r) {
        for (var o = -1, c = r == null ? 0 : r.length, f = 0, C = []; ++o < c; ) {
          var U = r[o];
          U && (C[f++] = U);
        }
        return C;
      }, m.concat = function() {
        var r = arguments.length;
        if (!r)
          return [];
        for (var o = P(r - 1), c = arguments[0], f = r; f--; )
          o[f - 1] = arguments[f];
        return er(FA(c) ? Oe(c) : [c], NA(o, 1));
      }, m.cond = function(r) {
        var o = r == null ? 0 : r.length, c = wA();
        return r = o ? XA(r, function(f) {
          if (typeof f[1] != "function")
            throw new ze(n);
          return [c(f[0]), f[1]];
        }) : [], bA(function(f) {
          for (var C = -1; ++C < o; ) {
            var U = r[C];
            if (KA(U[0], this, f))
              return KA(U[1], this, f);
          }
        });
      }, m.conforms = function(r) {
        return o = Ut(r, 1), c = me(o), function(f) {
          return _e(f, o, c);
        };
        var o, c;
      }, m.constant = Ko, m.countBy = Xi, m.create = function(r, o) {
        return r = vt(r), o == null ? r : Vn(r, o);
      }, m.curry = function r(o, c, f) {
        return o = Xt(o, 8, e, e, e, e, e, c = f ? e : c), o.placeholder = r.placeholder, o;
      }, m.curryRight = function r(o, c, f) {
        return o = Xt(o, s, e, e, e, e, e, c = f ? e : c), o.placeholder = r.placeholder, o;
      }, m.debounce = Fc, m.defaults = lt, m.defaultsDeep = wf, m.defer = Et, m.delay = lf, m.difference = sn, m.differenceBy = zu, m.differenceWith = TA, m.drop = function(r, o, c) {
        var f = r == null ? 0 : r.length;
        return f ? Bt(r, (o = c || o === e ? 1 : DA(o)) < 0 ? 0 : o, f) : [];
      }, m.dropRight = function(r, o, c) {
        var f = r == null ? 0 : r.length;
        return f ? Bt(r, 0, (o = f - (o = c || o === e ? 1 : DA(o))) < 0 ? 0 : o) : [];
      }, m.dropRightWhile = function(r, o) {
        return r && r.length ? io(r, wA(o, 3), !0, !0) : [];
      }, m.dropWhile = function(r, o) {
        return r && r.length ? io(r, wA(o, 3), !0) : [];
      }, m.fill = function(r, o, c, f) {
        if (!(b = r == null ? 0 : r.length))
          return [];
        c && typeof c != "number" && We(r, o, c) && (c = 0, f = b);
        var C = r, U = o, D = c, y = f, b = C.length;
        for ((D = DA(D)) < 0 && (D = b < -D ? 0 : b + D), (y = y === e || b < y ? b : DA(y)) < 0 && (y += b), y = y < D ? 0 : mc(y); D < y; )
          C[D++] = U;
        return C;
      }, m.filter = function(r, o) {
        return (FA(r) ? Ar : $a)(r, wA(o, 3));
      }, m.flatMap = function(r, o) {
        return NA(Ho(r, o), 1);
      }, m.flatMapDeep = function(r, o) {
        return NA(Ho(r, o), p);
      }, m.flatMapDepth = function(r, o, c) {
        return c = c === e ? 1 : DA(c), NA(Ho(r, o), c);
      }, m.flatten = lc, m.flattenDeep = function(r) {
        return r != null && r.length ? NA(r, p) : [];
      }, m.flattenDepth = function(r, o) {
        return r != null && r.length ? NA(r, o = o === e ? 1 : DA(o)) : [];
      }, m.flip = function(r) {
        return Xt(r, 512);
      }, m.flow = Ef, m.flowRight = Df, m.fromPairs = function(r) {
        for (var o = -1, c = r == null ? 0 : r.length, f = {}; ++o < c; ) {
          var C = r[o];
          f[C[0]] = C[1];
        }
        return f;
      }, m.functions = function(r) {
        return r == null ? [] : rr(r, me(r));
      }, m.functionsIn = function(r) {
        return r == null ? [] : rr(r, Ee(r));
      }, m.groupBy = hc, m.initial = function(r) {
        return r != null && r.length ? Bt(r, 0, -1) : [];
      }, m.intersection = Au, m.intersectionBy = xe, m.intersectionWith = WA, m.invert = Qf, m.invertBy = Hc, m.invokeMap = Hd, m.iteratee = $i, m.keyBy = Cc, m.keys = me, m.keysIn = Ee, m.map = Ho, m.mapKeys = function(r, o) {
        var c = {};
        return o = wA(o, 3), Qn(r, function(f, C, U) {
          fn(c, o(f, C, U), f);
        }), c;
      }, m.mapValues = function(r, o) {
        var c = {};
        return o = wA(o, 3), Qn(r, function(f, C, U) {
          fn(c, C, o(f, C, U));
        }), c;
      }, m.matches = function(r) {
        return Ui(Ut(r, 1));
      }, m.matchesProperty = function(r, o) {
        return pi(r, Ut(o, 1));
      }, m.memoize = Yi, m.merge = hf, m.mergeWith = Sd, m.method = Hf, m.methodOf = yf, m.mixin = Lo, m.negate = pn, m.nthArg = function(r) {
        return r = DA(r), bA(function(o) {
          return oc(o, r);
        });
      }, m.omit = bc, m.omitBy = function(r, o) {
        return Ic(r, pn(wA(o)));
      }, m.once = function(r) {
        return Wi(2, r);
      }, m.orderBy = function(r, o, c, f) {
        return r == null ? [] : ic(r, o = FA(o) ? o : o == null ? [] : [o], c = FA(c = f ? e : c) ? c : c == null ? [] : [c]);
      }, m.over = bf, m.overArgs = CA, m.overEvery = If, m.overSome = vf, m.partial = Id, m.partialRight = At, m.partition = yd, m.pick = Cf, m.pickBy = Ic, m.property = Sc, m.propertyOf = function(r) {
        return function(o) {
          return r == null ? e : ur(r, o);
        };
      }, m.pull = oe, m.pullAll = fc, m.pullAllBy = function(r, o, c) {
        return r && r.length && o && o.length ? mi(r, o, wA(c, 2)) : r;
      }, m.pullAllWith = function(r, o, c) {
        return r && r.length && o && o.length ? mi(r, o, e, c) : r;
      }, m.pullAt = Af, m.range = kd, m.rangeRight = Kf, m.rearg = Ce, m.reject = function(r, o) {
        return (FA(r) ? Ar : $a)(r, pn(wA(o, 3)));
      }, m.remove = function(r, o) {
        var c = [];
        if (r && r.length) {
          var f = -1, C = [], U = r.length;
          for (o = wA(o, 3); ++f < U; ) {
            var D = r[f];
            o(D, f, r) && (c.push(D), C.push(f));
          }
          Se(r, C);
        }
        return c;
      }, m.rest = function(r, o) {
        if (typeof r != "function")
          throw new ze(n);
        return bA(r, o = o === e ? o : DA(o));
      }, m.reverse = Ed, m.sampleSize = function(r, o, c) {
        return o = (c ? We(r, o, c) : o === e) ? 1 : DA(o), (FA(r) ? qa : od)(r, o);
      }, m.set = function(r, o, c) {
        return r == null ? r : su(r, o, c);
      }, m.setWith = function(r, o, c, f) {
        return f = typeof f == "function" ? f : e, r == null ? r : su(r, o, c, f);
      }, m.shuffle = function(r) {
        return (FA(r) ? Hr : or)(r);
      }, m.slice = function(r, o, c) {
        var f = r == null ? 0 : r.length;
        return f ? (c = c && typeof c != "number" && We(r, o, c) ? (o = 0, f) : (o = o == null ? 0 : DA(o), c === e ? f : DA(c)), Bt(r, o, c)) : [];
      }, m.sortBy = Bf, m.sortedUniq = function(r) {
        return r && r.length ? Hi(r) : [];
      }, m.sortedUniqBy = function(r, o) {
        return r && r.length ? Hi(r, wA(o, 2)) : [];
      }, m.split = function(r, o, c) {
        return c && typeof c != "number" && We(r, o, c) && (o = c = e), (c = c === e ? S : c >>> 0) ? (r = VA(r)) && (typeof o == "string" || o != null && !$t(o)) && !(o = $e(o)) && zr(r) ? Qe(fA(r), 0, c) : r.split(o, c) : [];
      }, m.spread = function(r, o) {
        if (typeof r != "function")
          throw new ze(n);
        return o = o == null ? 0 : se(DA(o), 0), bA(function(C) {
          var f = C[o], C = Qe(C, 0, o);
          return f && er(C, f), KA(r, this, C);
        });
      }, m.tail = function(r) {
        var o = r == null ? 0 : r.length;
        return o ? Bt(r, 1, o) : [];
      }, m.take = function(r, o, c) {
        return r && r.length ? Bt(r, 0, (o = c || o === e ? 1 : DA(o)) < 0 ? 0 : o) : [];
      }, m.takeRight = function(r, o, c) {
        var f = r == null ? 0 : r.length;
        return f ? Bt(r, (o = f - (o = c || o === e ? 1 : DA(o))) < 0 ? 0 : o, f) : [];
      }, m.takeRightWhile = function(r, o) {
        return r && r.length ? io(r, wA(o, 3), !1, !0) : [];
      }, m.takeWhile = function(r, o) {
        return r && r.length ? io(r, wA(o, 3)) : [];
      }, m.tap = function(r, o) {
        return o(r), r;
      }, m.throttle = function(r, o, c) {
        var f = !0, C = !0;
        if (typeof r != "function")
          throw new ze(n);
        return SA(c) && (f = "leading" in c ? !!c.leading : f, C = "trailing" in c ? !!c.trailing : C), Fc(r, o, { leading: f, maxWait: o, trailing: C });
      }, m.thru = Ji, m.toArray = Ld, m.toPairs = vc, m.toPairsIn = Kc, m.toPath = function(r) {
        return FA(r) ? XA(r, qt) : ie(r) ? [r] : Oe(pt(VA(r)));
      }, m.toPlainObject = Ec, m.transform = function(r, o, c) {
        var f, C = FA(r), U = C || Jn(r) || Mr(r);
        return o = wA(o, 4), c == null && (f = r && r.constructor, c = U ? C ? new f() : [] : SA(r) && zt(f) ? vt(kn(r)) : {}), (U ? at : Qn)(r, function(D, y, b) {
          return o(c, D, y, b);
        }), c;
      }, m.unary = function(r) {
        return yo(r, 1);
      }, m.union = ef, m.unionBy = tf, m.unionWith = nf, m.uniq = function(r) {
        return r && r.length ? hn(r) : [];
      }, m.uniqBy = function(r, o) {
        return r && r.length ? hn(r, wA(o, 2)) : [];
      }, m.uniqWith = function(r, o) {
        return o = typeof o == "function" ? o : e, r && r.length ? hn(r, e, o) : [];
      }, m.unset = function(r, o) {
        return r == null || Cn(r, o);
      }, m.unzip = Pi, m.unzipWith = Eo, m.update = function(r, o, c) {
        return r == null ? r : Rn(r, o, bi(c));
      }, m.updateWith = function(r, o, c, f) {
        return f = typeof f == "function" ? f : e, r == null ? r : Rn(r, o, bi(c), f);
      }, m.values = lu, m.valuesIn = function(r) {
        return r == null ? [] : Vu(r, Ee(r));
      }, m.without = rf, m.words = xc, m.wrap = function(r, o) {
        return Id(bi(o), r);
      }, m.xor = uf, m.xorBy = of, m.xorWith = af, m.zip = gc, m.zipObject = function(r, o) {
        return sd(r || [], o || [], uu);
      }, m.zipObjectDeep = function(r, o) {
        return sd(r || [], o || [], su);
      }, m.zipWith = wc, m.entries = vc, m.entriesIn = Kc, m.extend = Dc, m.extendWith = ji, Lo(m, m), m.add = u, m.attempt = _c, m.camelCase = Ff, m.capitalize = zi, m.ceil = a, m.clamp = function(r, o, c) {
        return c === e && (c = o, o = e), c !== e && (c = (c = St(c)) == c ? c : 0), o !== e && (o = (o = St(o)) == o ? o : 0), gn(St(r), o, c);
      }, m.clone = function(r) {
        return Ut(r, 4);
      }, m.cloneDeep = function(r) {
        return Ut(r, 5);
      }, m.cloneDeepWith = function(r, o) {
        return Ut(r, 5, o = typeof o == "function" ? o : e);
      }, m.cloneWith = function(r, o) {
        return Ut(r, 4, o = typeof o == "function" ? o : e);
      }, m.conformsTo = function(r, o) {
        return o == null || _e(r, o, me(o));
      }, m.deburr = Od, m.defaultTo = function(r, o) {
        return r == null || r != r ? o : r;
      }, m.divide = B, m.endsWith = function(r, o, c) {
        r = VA(r), o = $e(o);
        var f = r.length, f = c = c === e ? f : gn(DA(c), 0, f);
        return 0 <= (c -= o.length) && r.slice(c, f) == o;
      }, m.eq = Te, m.escape = function(r) {
        return (r = VA(r)) && Ol.test(r) ? r.replace(Ts, kt) : r;
      }, m.escapeRegExp = function(r) {
        return (r = VA(r)) && Vl.test(r) ? r.replace(_a, "\\$&") : r;
      }, m.every = function(r, o, c) {
        return (FA(r) ? ei : Qi)(r, wA(o = c && We(r, o, c) ? e : o, 3));
      }, m.find = sf, m.findIndex = cc, m.findKey = function(r, o) {
        return Pa(r, wA(o, 3), Qn);
      }, m.findLast = cf, m.findLastIndex = Bc, m.findLastKey = function(r, o) {
        return Pa(r, wA(o, 3), ro);
      }, m.floor = Q, m.forEach = Do, m.forEachRight = Dd, m.forIn = function(r, o) {
        return r == null ? r : no(r, wA(o, 3), Ee);
      }, m.forInRight = function(r, o) {
        return r == null ? r : nc(r, wA(o, 3), Ee);
      }, m.forOwn = function(r, o) {
        return r && Qn(r, wA(o, 3));
      }, m.forOwnRight = function(r, o) {
        return r && ro(r, wA(o, 3));
      }, m.get = qi, m.gt = xt, m.gte = vd, m.has = function(r, o) {
        return r != null && cu(r, o, rc);
      }, m.hasIn = _d, m.head = Ni, m.identity = gt, m.includes = function(r, o, c, f) {
        return r = LA(r) ? r : lu(r), c = c && !f ? DA(c) : 0, f = r.length, c < 0 && (c = se(f + c, 0)), Io(r) ? c <= f && -1 < r.indexOf(o, c) : !!f && -1 < tr(r, o, c);
      }, m.indexOf = function(r, o, c) {
        var f = r == null ? 0 : r.length;
        return f ? tr(r, o, r = (r = c == null ? 0 : DA(c)) < 0 ? se(f + r, 0) : r) : -1;
      }, m.inRange = function(r, o, c) {
        return o = _t(o), c === e ? (c = o, o = 0) : c = _t(c), (r = r = St(r)) >= we(o = o, c = c) && r < se(o, c);
      }, m.invoke = yc, m.isArguments = et, m.isArray = FA, m.isArrayBuffer = Zi, m.isArrayLike = LA, m.isArrayLikeObject = mA, m.isBoolean = function(r) {
        return r === !0 || r === !1 || Ae(r) && Ne(r) == X;
      }, m.isBuffer = Jn, m.isDate = Dt, m.isElement = function(r) {
        return Ae(r) && r.nodeType === 1 && !Bu(r);
      }, m.isEmpty = function(r) {
        if (r != null) {
          if (LA(r) && (FA(r) || typeof r == "string" || typeof r.splice == "function" || Jn(r) || Mr(r) || et(r)))
            return !r.length;
          var o, c = Xe(r);
          if (c == $ || c == ne)
            return !r.size;
          if (xr(r))
            return !Fi(r).length;
          for (o in r)
            if (PA.call(r, o))
              return !1;
        }
        return !0;
      }, m.isEqual = function(r, o) {
        return au(r, o);
      }, m.isEqualWith = function(r, o, c) {
        var f = (c = typeof c == "function" ? c : e) ? c(r, o) : e;
        return f === e ? au(r, o, e, c) : !!f;
      }, m.isError = Or, m.isFinite = function(r) {
        return typeof r == "number" && tc(r);
      }, m.isFunction = zt, m.isInteger = Kd, m.isLength = Tr, m.isMap = Uc, m.isMatch = function(r, o) {
        return r === o || Ci(r, o, Yt(o));
      }, m.isMatchWith = function(r, o, c) {
        return c = typeof c == "function" ? c : e, Ci(r, o, Yt(o), c);
      }, m.isNaN = function(r) {
        return pc(r) && r != +r;
      }, m.isNative = function(r) {
        if (Uo(r))
          throw new BA("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
        return uo(r);
      }, m.isNil = function(r) {
        return r == null;
      }, m.isNull = function(r) {
        return r === null;
      }, m.isNumber = pc, m.isObject = SA, m.isObjectLike = Ae, m.isPlainObject = Bu, m.isRegExp = $t, m.isSafeInteger = function(r) {
        return Kd(r) && -K <= r && r <= K;
      }, m.isSet = EA, m.isString = Io, m.isSymbol = ie, m.isTypedArray = Mr, m.isUndefined = function(r) {
        return r === e;
      }, m.isWeakMap = function(r) {
        return Ae(r) && Xe(r) == ve;
      }, m.isWeakSet = function(r) {
        return Ae(r) && Ne(r) == "[object WeakSet]";
      }, m.join = function(r, o) {
        return r == null ? "" : dn.call(r, o);
      }, m.kebabCase = Lc, m.last = mt, m.lastIndexOf = function(r, o, c) {
        var f = r == null ? 0 : r.length;
        if (!f)
          return -1;
        var C = f;
        if (c !== e && (C = (C = DA(c)) < 0 ? se(f + C, 0) : we(C, f - 1)), o != o)
          return Zr(r, dt, C, !0);
        for (var U = r, D = o, y = C + 1; y--; )
          if (U[y] === D)
            return y;
        return y;
      }, m.lowerCase = Uf, m.lowerFirst = Td, m.lt = JA, m.lte = ff, m.max = function(r) {
        return r && r.length ? wn(r, gt, hi) : e;
      }, m.maxBy = function(r, o) {
        return r && r.length ? wn(r, wA(o, 2), hi) : e;
      }, m.mean = function(r) {
        return ni(r, gt);
      }, m.meanBy = function(r, o) {
        return ni(r, wA(o, 2));
      }, m.min = function(r) {
        return r && r.length ? wn(r, gt, oo) : e;
      }, m.minBy = function(r, o) {
        return r && r.length ? wn(r, wA(o, 2), oo) : e;
      }, m.stubArray = Gd, m.stubFalse = Vd, m.stubObject = function() {
        return {};
      }, m.stubString = function() {
        return "";
      }, m.stubTrue = function() {
        return !0;
      }, m.multiply = H, m.nth = function(r, o) {
        return r && r.length ? oc(r, DA(o)) : e;
      }, m.noConflict = function() {
        return Ke._ === this && (Ke._ = ec), this;
      }, m.noop = xo, m.now = Sr, m.pad = function(r, o, c) {
        r = VA(r);
        var f = (o = DA(o)) ? cA(r) : 0;
        return !o || o <= f ? r : Lt(Bi(o = (o - f) / 2), c) + r + Lt(ci(o), c);
      }, m.padEnd = function(r, o, c) {
        r = VA(r);
        var f = (o = DA(o)) ? cA(r) : 0;
        return o && f < o ? r + Lt(o - f, c) : r;
      }, m.padStart = function(r, o, c) {
        r = VA(r);
        var f = (o = DA(o)) ? cA(r) : 0;
        return o && f < o ? Lt(o - f, c) + r : r;
      }, m.parseInt = function(r, o, c) {
        return o = c || o == null ? 0 : o && +o, Zu(VA(r).replace(Sa, ""), o || 0);
      }, m.random = function(r, o, c) {
        var f;
        return c && typeof c != "boolean" && We(r, o, c) && (o = c = e), c === e && (typeof o == "boolean" ? (c = o, o = e) : typeof r == "boolean" && (c = r, r = e)), r === e && o === e ? (r = 0, o = 1) : (r = _t(r), o === e ? (o = r, r = 0) : o = _t(o)), o < r && (f = r, r = o, o = f), c || r % 1 || o % 1 ? (f = ju(), we(r + f * (o - r + Ga("1e-" + ((f + "").length - 1))), o)) : ud(r, o);
      }, m.reduce = function(r, o, c) {
        var f = FA(r) ? ti : Ja, C = arguments.length < 3;
        return f(r, wA(o, 4), c, C, Re);
      }, m.reduceRight = function(r, o, c) {
        var f = FA(r) ? js : Ja, C = arguments.length < 3;
        return f(r, wA(o, 4), c, C, wi);
      }, m.repeat = function(r, o, c) {
        return o = (c ? We(r, o, c) : o === e) ? 1 : DA(o), ct(VA(r), o);
      }, m.replace = function() {
        var r = arguments, o = VA(r[0]);
        return r.length < 3 ? o : o.replace(r[1], r[2]);
      }, m.result = function(r, o, c) {
        var f = -1, C = (o = Nn(o, r)).length;
        for (C || (C = 1, r = e); ++f < C; ) {
          var U = r == null ? e : r[qt(o[f])];
          U === e && (f = C, U = c), r = zt(U) ? U.call(r) : U;
        }
        return r;
      }, m.round = I, m.runInContext = G, m.sample = function(r) {
        return (FA(r) ? ln : Ei)(r);
      }, m.size = function(r) {
        var o;
        return r == null ? 0 : LA(r) ? Io(r) ? cA(r) : r.length : (o = Xe(r)) == $ || o == ne ? r.size : Fi(r).length;
      }, m.snakeCase = pf, m.some = function(r, o, c) {
        return (FA(r) ? Gu : ac)(r, wA(o = c && We(r, o, c) ? e : o, 3));
      }, m.sortedIndex = function(r, o) {
        return br(r, o);
      }, m.sortedIndexBy = function(r, o, c) {
        return Di(r, o, wA(c, 2));
      }, m.sortedIndexOf = function(r, o) {
        var c = r == null ? 0 : r.length;
        if (c) {
          var f = br(r, o);
          if (f < c && Te(r[f], o))
            return f;
        }
        return -1;
      }, m.sortedLastIndex = function(r, o) {
        return br(r, o, !0);
      }, m.sortedLastIndexBy = function(r, o, c) {
        return Di(r, o, wA(c, 2), !0);
      }, m.sortedLastIndexOf = function(r, o) {
        if (r != null && r.length) {
          var c = br(r, o, !0) - 1;
          if (Te(r[c], o))
            return c;
        }
        return -1;
      }, m.startCase = mf, m.startsWith = function(r, o, c) {
        return r = VA(r), c = c == null ? 0 : gn(DA(c), 0, r.length), o = $e(o), r.slice(c, c + o.length) == o;
      }, m.subtract = L, m.sum = function(r) {
        return r && r.length ? Xa(r, gt) : 0;
      }, m.sumBy = function(r, o) {
        return r && r.length ? Xa(r, wA(o, 2)) : 0;
      }, m.template = function(r, o, O) {
        var f, C, b = m.templateSettings;
        O && We(r, o, O) && (o = e), r = VA(r), o = ji({}, o, b, wo);
        var U = me(O = ji({}, o.imports, b.imports, wo)), D = Vu(O, U), y = 0, b = o.interpolate || Cr, x = "__p += '", O = Nu((o.escape || Cr).source + "|" + b.source + "|" + (b === jo ? Yl : Cr).source + "|" + (o.evaluate || Cr).source + "|$", "g"), T = "//# sourceURL=" + (PA.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ve + "]") + `
`;
        if (r.replace(O, function(R, W, Z, uA, q, sA) {
          return Z = Z || uA, x += r.slice(y, sA).replace(Ns, $s), W && (f = !0, x += `' +
__e(` + W + `) +
'`), q && (C = !0, x += `';
` + q + `;
__p += '`), Z && (x += `' +
((__t = (` + Z + `)) == null ? '' : __t) +
'`), y = sA + R.length, R;
        }), x += `';
`, b = PA.call(o, "variable") && o.variable) {
          if (Xl.test(b))
            throw new BA("Invalid `variable` option passed into `_.template`");
        } else
          x = `with (obj) {
` + x + `
}
`;
        if (x = (C ? x.replace(Ll, "") : x).replace(xl, "$1").replace(_l, "$1;"), x = "function(" + (b || "obj") + `) {
` + (b ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (f ? ", __e = _.escape" : "") + (C ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + x + `return __p
}`, (O = _c(function() {
          return hA(U, T + "return " + x).apply(e, D);
        })).source = x, Or(O))
          throw O;
        return O;
      }, m.times = function(r, o) {
        if ((r = DA(r)) < 1 || K < r)
          return [];
        for (var c = S, f = we(r, S), f = (o = wA(o), r -= S, Wa(f, o)); ++c < r; )
          o(c);
        return f;
      }, m.toFinite = _t, m.toInteger = DA, m.toLength = mc, m.toLower = function(r) {
        return VA(r).toLowerCase();
      }, m.toNumber = St, m.toSafeInteger = function(r) {
        return r ? gn(DA(r), -K, K) : r === 0 ? r : 0;
      }, m.toString = VA, m.toUpper = function(r) {
        return VA(r).toUpperCase();
      }, m.trim = function(r, o, c) {
        return (r = VA(r)) && (c || o === e) ? zs(r) : r && (o = $e(o)) ? Qe(c = fA(r), Mn(c, o = fA(o)), Ru(c, o) + 1).join("") : r;
      }, m.trimEnd = function(r, o, c) {
        return (r = VA(r)) && (c || o === e) ? r.slice(0, HA(r) + 1) : r && (o = $e(o)) ? Qe(c = fA(r), 0, Ru(c, fA(o)) + 1).join("") : r;
      }, m.trimStart = function(r, o, c) {
        return (r = VA(r)) && (c || o === e) ? r.replace(Sa, "") : r && (o = $e(o)) ? Qe(c = fA(r), Mn(c, fA(o))).join("") : r;
      }, m.truncate = function(r, C) {
        var c, D = 30, f = "...", C = (SA(C) && (c = "separator" in C ? C.separator : c, D = "length" in C ? DA(C.length) : D, f = "omission" in C ? $e(C.omission) : f), (r = VA(r)).length);
        if ((C = zr(r) ? (U = fA(r)).length : C) <= D)
          return r;
        if ((C = D - cA(f)) < 1)
          return f;
        var U, D = U ? Qe(U, 0, C).join("") : r.slice(0, C);
        if (c !== e)
          if (U && (C += D.length - C), $t(c)) {
            if (r.slice(C).search(c)) {
              var y, b = D;
              for ((c = c.global ? c : Nu(c.source, VA(ks.exec(c)) + "g")).lastIndex = 0; y = c.exec(b); )
                var x = y.index;
              D = D.slice(0, x === e ? C : x);
            }
          } else
            r.indexOf($e(c), C) != C && -1 < (U = D.lastIndexOf(c)) && (D = D.slice(0, U));
        return D + f;
      }, m.unescape = function(r) {
        return (r = VA(r)) && Sl.test(r) ? r.replace(La, yA) : r;
      }, m.uniqueId = function(r) {
        var o = ++oi;
        return VA(r) + o;
      }, m.upperCase = ft, m.upperFirst = vo, m.each = Do, m.eachRight = Dd, m.first = Ni, Lo(m, (F = {}, Qn(m, function(r, o) {
        PA.call(m.prototype, o) || (F[o] = r);
      }), F), { chain: !1 }), m.VERSION = "4.17.21", at(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
        m[r].placeholder = m;
      }), at(["drop", "take"], function(r, o) {
        _A.prototype[r] = function(c) {
          c = c === e ? 1 : se(DA(c), 0);
          var f = this.__filtered__ && !o ? new _A(this) : this.clone();
          return f.__filtered__ ? f.__takeCount__ = we(c, f.__takeCount__) : f.__views__.push({ size: we(c, S), type: r + (f.__dir__ < 0 ? "Right" : "") }), f;
        }, _A.prototype[r + "Right"] = function(c) {
          return this.reverse()[r](c).reverse();
        };
      }), at(["filter", "map", "takeWhile"], function(r, o) {
        var c = o + 1, f = c == 1 || c == 3;
        _A.prototype[r] = function(C) {
          var U = this.clone();
          return U.__iteratees__.push({ iteratee: wA(C, 3), type: c }), U.__filtered__ = U.__filtered__ || f, U;
        };
      }), at(["head", "last"], function(r, o) {
        var c = "take" + (o ? "Right" : "");
        _A.prototype[r] = function() {
          return this[c](1).value()[0];
        };
      }), at(["initial", "tail"], function(r, o) {
        var c = "drop" + (o ? "" : "Right");
        _A.prototype[r] = function() {
          return this.__filtered__ ? new _A(this) : this[c](1);
        };
      }), _A.prototype.compact = function() {
        return this.filter(gt);
      }, _A.prototype.find = function(r) {
        return this.filter(r).head();
      }, _A.prototype.findLast = function(r) {
        return this.reverse().find(r);
      }, _A.prototype.invokeMap = bA(function(r, o) {
        return typeof r == "function" ? new _A(this) : this.map(function(c) {
          return yr(c, r, o);
        });
      }), _A.prototype.reject = function(r) {
        return this.filter(pn(wA(r)));
      }, _A.prototype.slice = function(r, o) {
        r = DA(r);
        var c = this;
        return c.__filtered__ && (0 < r || o < 0) ? new _A(c) : (r < 0 ? c = c.takeRight(-r) : r && (c = c.drop(r)), o !== e ? (o = DA(o)) < 0 ? c.dropRight(-o) : c.take(o - r) : c);
      }, _A.prototype.takeRightWhile = function(r) {
        return this.reverse().takeWhile(r).reverse();
      }, _A.prototype.toArray = function() {
        return this.take(S);
      }, Qn(_A.prototype, function(r, o) {
        var c = /^(?:filter|find|map|reject)|While$/.test(o), f = /^(?:head|last)$/.test(o), C = m[f ? "take" + (o == "last" ? "Right" : "") : o], U = f || /^find/.test(o);
        C && (m.prototype[o] = function() {
          function D(uA) {
            return uA = C.apply(m, er([uA], x)), f && T ? uA[0] : uA;
          }
          var y, b = this.__wrapped__, x = f ? [1] : arguments, Z = b instanceof _A, R = x[0], O = Z || FA(b), T = (O && c && typeof R == "function" && R.length != 1 && (Z = O = !1), this.__chain__), R = !!this.__actions__.length, W = U && !T, Z = Z && !R;
          return !U && O ? (b = Z ? b : new _A(this), (y = r.apply(b, x)).__actions__.push({ func: Ji, args: [D], thisArg: e }), new Kt(y, T)) : W && Z ? r.apply(this, x) : (y = this.thru(D), W ? f ? y.value()[0] : y.value() : y);
        });
      }), at(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
        var o = ui[r], c = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", f = /^(?:pop|shift)$/.test(r);
        m.prototype[r] = function() {
          var C, U = arguments;
          return f && !this.__chain__ ? (C = this.value(), o.apply(FA(C) ? C : [], U)) : this[c](function(D) {
            return o.apply(FA(D) ? D : [], U);
          });
        };
      }), Qn(_A.prototype, function(r, o) {
        var c, f = m[o];
        f && (c = f.name + "", PA.call(E, c) || (E[c] = []), E[c].push({ name: o, func: f }));
      }), E[go(e, 2).name] = [{ name: "wrapper", func: e }], _A.prototype.clone = function() {
        var r = new _A(this.__wrapped__);
        return r.__actions__ = Oe(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = Oe(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = Oe(this.__views__), r;
      }, _A.prototype.reverse = function() {
        var r;
        return this.__filtered__ ? ((r = new _A(this)).__dir__ = -1, r.__filtered__ = !0) : (r = this.clone()).__dir__ *= -1, r;
      }, _A.prototype.value = function() {
        var r = this.__wrapped__.value(), o = this.__dir__, c = FA(r), f = o < 0, C = c ? r.length : 0, U = function(AA, aA, gA) {
          for (var MA = -1, Ye = gA.length; ++MA < Ye; ) {
            var wt = gA[MA], tt = wt.size;
            switch (wt.type) {
              case "drop":
                AA += tt;
                break;
              case "dropRight":
                aA -= tt;
                break;
              case "take":
                aA = we(aA, AA + tt);
                break;
              case "takeRight":
                AA = se(AA, aA - tt);
            }
          }
          return { start: AA, end: aA };
        }(0, C, this.__views__), D = U.start, y = (U = U.end) - D, b = f ? U : D - 1, x = this.__iteratees__, O = x.length, T = 0, R = we(y, this.__takeCount__);
        if (!c || !f && C == y && R == y)
          return dd(r, this.__actions__);
        var W = [];
        A:
          for (; y-- && T < R; ) {
            for (var Z = -1, uA = r[b += o]; ++Z < O; ) {
              var q = x[Z], sA = q.iteratee, q = q.type, sA = sA(uA);
              if (q == 2)
                uA = sA;
              else if (!sA) {
                if (q == 1)
                  continue A;
                break A;
              }
            }
            W[T++] = uA;
          }
        return W;
      }, m.prototype.at = df, m.prototype.chain = function() {
        return Qc(this);
      }, m.prototype.commit = function() {
        return new Kt(this.value(), this.__chain__);
      }, m.prototype.next = function() {
        this.__values__ === e && (this.__values__ = Ld(this.value()));
        var r = this.__index__ >= this.__values__.length;
        return { done: r, value: r ? e : this.__values__[this.__index__++] };
      }, m.prototype.plant = function(r) {
        for (var o, C = this; C instanceof Ao; )
          var c = Ri(C), f = (c.__index__ = 0, c.__values__ = e, o ? f.__wrapped__ = c : o = c, c), C = C.__wrapped__;
        return f.__wrapped__ = r, o;
      }, m.prototype.reverse = function() {
        var r = this.__wrapped__;
        return r instanceof _A ? (r = r, (r = (r = this.__actions__.length ? new _A(this) : r).reverse()).__actions__.push({ func: Ji, args: [Ed], thisArg: e }), new Kt(r, this.__chain__)) : this.thru(Ed);
      }, m.prototype.toJSON = m.prototype.valueOf = m.prototype.value = function() {
        return dd(this.__wrapped__, this.__actions__);
      }, m.prototype.first = m.prototype.head, eu && (m.prototype[eu] = function() {
        return this;
      }), m;
    }();
    zn ? ((zn.exports = on)._ = on, qn._ = on) : Ke._ = on;
  }).call(Rd);
}(Gc, Gc.exports), Gc.exports);
const DF = [{ name: "积分", icon: "int", formula: "\\int", exampleList: [{ content: "\\int用来表示积分符号，同样地，其上下标表示积分的上下限", isLatex: !1 }, { content: "\\int_{1}^{\\infty}", isLatex: !0 }] }, { name: "多重积分", icon: "iint", formula: "\\iint" }, { name: "多重积分", icon: "iiint", formula: "\\iiint" }, { name: "多重积分", icon: "iiiint", formula: "\\iiiint" }], HF = [{ name: "联立方程", icon: "multipleLine", formula: `f(n)
\\left\\{
\\frac{n}{2}, &if n is even\\\\
3n + 1, &if n is odd
\\right\\}` }, { name: "联立方程", icon: "multipleLine", formula: `\\left\\{
    a_{1}x+b_{1}y+c_{1}z=d_{1} \\\\
    a_{2}x+b_{2}y+c_{2}z=d_{2} \\\\
    a_{3}x+b_{3}y+c_{3}z=d_{3}
    \\right\\}
    ` }], yF = [{ name: "矩阵", icon: "bmatrix", formula: `\\begin{bmatrix}
1 & x & x^{2} \\\\
1 & y & y^{2} \\\\
1 & z & z^{2} \\\\
\\end{bmatrix}` }, { name: "矩阵", icon: "matrix", formula: `\\begin{matrix}
1 & x & x^{2} \\\\
1 & y & y^{2} \\\\
1 & z & z^{2} \\\\
\\end{matrix}` }, { name: "矩阵", icon: "pmatrix", formula: `\\begin{pmatrix}
1 & x & x^{2} \\\\
1 & y & y^{2} \\\\
1 & z & z^{2} \\\\
\\end{pmatrix}` }, { name: "矩阵", icon: "Bmatrix", formula: `\\begin{Bmatrix}
1 & x & x^{2} \\\\
1 & y & y^{2} \\\\
1 & z & z^{2} \\\\
\\end{Bmatrix}` }, { name: "矩阵", icon: "vmatrix", formula: `\\begin{vmatrix}
1 & x & x^{2} \\\\
1 & y & y^{2} \\\\
1 & z & z^{2} \\\\
\\end{vmatrix}` }, { name: "矩阵", icon: "Vmatrix", formula: `\\begin{Vmatrix}
1 & x & x^{2} \\\\
1 & y & y^{2} \\\\
1 & z & z^{2} \\\\
\\end{Vmatrix}` }, { name: "模运算", icon: "pmod", formula: "\\pmod{n}" }, { name: "排列", icon: "binom", formula: "\\binom{n+1}{2k}" }], bF = [{ name: "化学方程式", icon: "rightarrow", formula: "2H_{2}+O_{2}\\rightarrow\\limits^{燃烧}2H_{2}O" }, { name: "化学方程式", icon: "rightleftarrow", formula: "N_{2}+3H_{2}\\rightleftarrow\\limits^{高温、高压}_{催化剂}2NH_{3}" }, { name: "化学方程式", icon: "equalsign", formula: "2NaHCO_{3}=\\limits^{\\Delta}Na_{2}CO_{3}" }], IF = [{ name: "带分数", icon: "", formula: "\\mix, (这个符号实际不会出现不需要展示)" }, { name: "删除", icon: "", formula: "\\deletion{xx}, (直接删除)" }, { name: "大省略符号", icon: "omitted", formula: "\\omitted" }, { name: "空格", icon: "tab", formula: "A\\tabB" }, { name: "对号", icon: "cmark", formula: "\\cmark" }, { name: "错号", icon: "xmark", formula: "\\xmark" }, { name: "插入", icon: "", formula: "\\insert{+3},( 直接删除，需要连带后面的一个{}删除)" }, { name: "颠倒符号", icon: "reverse", formula: "\\reverse{好}{你}" }, { name: "替换", icon: "replace", formula: "\\replace{ab}" }, { name: "错误的中文汉字", icon: "", formula: "\\wrong{我}, 待定" }, { name: "米字格", icon: "", formula: "\\chnfield{ab}， (直接删除，需要连带后面的一个{}删除。)" }, { name: "英语格", icon: "", formula: "\\engfield{ab}， (直接删除，需要连带后面的一个{}删除。)" }, { name: "<s>", icon: "", formula: "直接删除" }, { name: "</s>", icon: "", formula: "直接删除" }, { name: "<unk>", icon: "", formula: "直接删除" }], vF = [{ name: "基本规则", icon: "phonetic", formula: "\\[\\phonetic{}\\]" }, { name: "长元音", icon: "po_1", formula: "ɑː" }, { name: "长元音", icon: "po_2", formula: "ɔ:" }, { name: "长元音", icon: "po_3", formula: "ɜː" }, { name: "长元音", icon: "po_4", formula: "i:" }, { name: "长元音", icon: "po_5", formula: "u:" }, { name: "短元音", icon: "po_6", formula: "^" }, { name: "短元音", icon: "po_7", formula: "ɒ" }, { name: "短元音", icon: "po_8", formula: "ə" }, { name: "短元音", icon: "po_9", formula: "ɪ" }, { name: "短元音", icon: "po_10", formula: "ʊ" }, { name: "短元音", icon: "po_11", formula: "e" }, { name: "短元音", icon: "po_12", formula: "æ" }, { name: "双元音", icon: "po_13", formula: "eɪ" }, { name: "双元音", icon: "po_14", formula: "aɪ" }, { name: "双元音", icon: "po_15", formula: "ɔɪ" }, { name: "双元音", icon: "po_16", formula: "ɪə" }, { name: "双元音", icon: "po_17", formula: "eə" }, { name: "双元音", icon: "po_18", formula: "ʊə" }, { name: "双元音", icon: "po_19", formula: "əʊ" }, { name: "双元音", icon: "po_20", formula: "aʊ" }, { name: "清辅音", icon: "po_21", formula: "p" }, { name: "清辅音", icon: "po_22", formula: "t" }, { name: "清辅音", icon: "po_23", formula: "k" }, { name: "清辅音", icon: "po_24", formula: "f" }, { name: "清辅音", icon: "po_25", formula: "θ" }, { name: "清辅音", icon: "po_26", formula: "s" }, { name: "清辅音", icon: "po_27", formula: "b" }, { name: "清辅音", icon: "po_28", formula: "d" }, { name: "清辅音", icon: "po_29", formula: "g" }, { name: "清辅音", icon: "po_30", formula: "v" }, { name: "清辅音", icon: "po_31", formula: "ð" }, { name: "清辅音", icon: "po_32", formula: "z" }, { name: "清辅音", icon: "po_33", formula: "ʃ" }, { name: "清辅音", icon: "po_34", formula: "h" }, { name: "清辅音", icon: "po_35", formula: "ts" }, { name: "清辅音", icon: "po_36", formula: "tʃ" }, { name: "清辅音", icon: "po_37", formula: "j" }, { name: "清辅音", icon: "po_38", formula: "tr" }, { name: "浊辅音", icon: "po_39", formula: "ʒ" }, { name: "浊辅音", icon: "po_40", formula: "r" }, { name: "浊辅音", icon: "po_41", formula: "dz" }, { name: "浊辅音", icon: "po_42", formula: "dʒ" }, { name: "浊辅音", icon: "po_43", formula: "dr" }, { name: "半元音", icon: "po_44", formula: "w" }, { name: "鼻音", icon: "po_45", formula: "m" }, { name: "鼻音", icon: "po_46", formula: "n" }, { name: "鼻音", icon: "po_47", formula: "ŋ" }, { name: "边音", icon: "po_48", formula: "l" }], E0 = "https://homework-webfront.oss-cn-beijing.aliyuncs.com/LatexIcon/", f0 = [{ id: ue.uniqueId(), name: "希腊字母", icon: "", data: hF }, { id: ue.uniqueId(), name: "运算符号", icon: "", data: lF }, { id: ue.uniqueId(), name: "比较符号", icon: "", data: fF, desc: "大于号及小于号直接使用 >, <" }, { id: ue.uniqueId(), name: "几何符号", icon: "", data: cF }, { id: ue.uniqueId(), name: "点", icon: "", data: CF }, { id: ue.uniqueId(), name: "逻辑符号", icon: "", data: sF }, { id: ue.uniqueId(), name: "集合符号", icon: "", data: FF }, { id: ue.uniqueId(), name: "范围", icon: "", data: UF }, { id: ue.uniqueId(), name: "三角函数", icon: "", data: aF }, { id: ue.uniqueId(), name: "箭头", icon: "", data: pF }, { id: ue.uniqueId(), name: "含圈符号", icon: "", data: gF }, { id: ue.uniqueId(), name: "形状符号", icon: "", data: wF }, { id: ue.uniqueId(), name: "标记", icon: "", data: mF }, { id: ue.uniqueId(), name: "顶部符号", icon: "", data: BF }, { id: ue.uniqueId(), name: "序号", icon: "", data: EF }, { id: ue.uniqueId(), name: "分式", icon: "", data: QF }, { id: ue.uniqueId(), name: "根式", icon: "", data: iF }, { id: ue.uniqueId(), name: "积分", icon: "", data: DF }, { id: ue.uniqueId(), name: "多行表达式", icon: "", data: HF, desc: "定义函数的时候经常需要分情况给出表达式，可使用\\left{…\\right}。其中，使用\\来分类，使用&指示需要对齐的位置。" }, { id: ue.uniqueId(), name: "矩阵", icon: "", data: yF, desc: "使用\\begin{matrix}…\\end{matrix}这样的形式来表示矩阵，在\\begin与\\end之间加入矩阵中的元素即可。矩阵的行之间使用\\分隔，列之间使用&分隔。如果要对矩阵加括号，可以像上文中提到的一样，使用\\left与\\right配合表示括号符号。也可以使用特殊的matrix。即替换\\begin{matrix}…\\end{matrix}中的matrix为pmatrix，bmatrix，Bmatrix，vmatrix, Vmatrix。" }, { id: ue.uniqueId(), name: "化学", icon: "", data: bF, desc: "基本格式如下\\rightarrow\\limits^{}_{}, \\rightarrow可替换为\\rightleftarrow, \\leftarrow, =, ^{}和_{}可选，分别表示箭头上方和下方的内容" }, { id: ue.uniqueId(), name: "自定义", icon: "", data: IF }, { id: ue.uniqueId(), name: "音标", icon: "", data: vF }, { id: ue.uniqueId(), name: "其他", icon: "", data: dF }];
let gu = f0.map((t) => (t.data = t.data.map((A) => {
  if (A.icon)
    return A;
}).filter((A) => A), t));
class KF {
  constructor(A) {
    var e = document.querySelector(A.container);
    if (!e)
      throw new Error("找不到" + A.container);
    this.container = e, this.handleClickFormula = A.handleClickFormula, this.init();
  }
  init() {
    var A = this.createFormulesDom();
    Array.from(new DOMParser().parseFromString(A, "text/html").body.children).forEach((e) => {
      this.container.appendChild(e);
    }), this.listenFormulaItemClick(this.handleClickFormula);
  }
  createFormulesDom() {
    let A = "";
    for (let e = 0; e < gu.length; e++) {
      A = (A = (A += '<div class="formula-type-container"><div class="formula-type">') + `<img src="${E0}${gu[e].data[0].icon}.svg"/>`) + `<div class="type-name">${gu[e].name}</div><div class="formula-item-list noselect">`;
      for (let n = 0; n < gu[e].data.length; n++)
        A = (A += `<div class="formula-item" sign="${gu[e].data[n].formula}" >`) + `<img src="${E0}${gu[e].data[n].icon}.svg" sign="${gu[e].data[n].formula}" /></div>`;
      A = A + "</div></div></div>";
    }
    return A;
  }
  listenFormulaItemClick(A) {
    var e = document.querySelectorAll(".formula-item");
    Array.from(e).forEach((n) => {
      n.onclick = function(i) {
        i.stopPropagation(), i.preventDefault();
        var d = gu.map((s) => s.data.find((l) => {
          var w;
          return l.formula == ((w = i.target) == null ? void 0 : w.getAttribute("sign"));
        })).filter((s) => s)[0];
        A(i, d);
      };
    });
  }
  hidden() {
    Array.from(document.querySelectorAll(".formula-item-list")).forEach((A) => {
      A.style.display = "none";
    });
  }
}
var bg = {}, zQ = (Object.defineProperty(bg, "__esModule", { value: !0 }), bg.recursiveMatch = void 0);
function LF(t, l, e) {
  var n, i = [], d = [], s = l instanceof RegExp ? l.source : D0(l), l = e instanceof RegExp ? e.source : D0(e);
  if (s === l)
    throw new Error("Begin and end delimiter cannot be identical");
  for (var w, h = new RegExp((s + l).length === 2 ? "[" + s + l + "]" : s + "|" + l, "g"); (w = h.exec(t)) !== null; )
    -1 < w[0].search(s) ? d.push({ parent: ((n = d[d.length - 1]) == null ? void 0 : n.children) || i, start: w.index, bodyStart: h.lastIndex, children: [] }) : d.length && (g = d.pop()).parent.push({ start: g.start, end: h.lastIndex, bodyStart: g.bodyStart, bodyEnd: w.index, match: t.slice(g.start, h.lastIndex), children: g.children });
  for (var g, p = 0, K = d; p < K.length; p++)
    (g = K[p]).children.length && i.push.apply(i, g.children);
  return i;
}
function D0(t) {
  return t.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
}
zQ = bg.recursiveMatch = LF;
const WB = [`
`, "^", "_"], xF = ["begin", "end", "left", "right", "limits"];
function _F() {
  return ue.uniq(ue.flattenDeep(f0.map((t) => t.data.map((A) => A.icon))));
}
const SF = _F().concat(WB).concat(xF);
let OF = SF;
var Ig = ((t) => (t.latex = "latex", t.text = "text", t))(Ig || {});
function Ro(t, A = 0) {
  const e = [];
  let n = A;
  var i;
  return t.includes("\\") ? (i = OF.map((d) => {
    if (d = Array.from(t.matchAll(new RegExp(`\\\\${d}(?![a-zA-Z])`, "g"))), d.length)
      return d;
  }).filter((d) => d)).length ? i.forEach((d) => {
    d.forEach((s, l) => {
      var w = s[0], h = (s.index !== n && n - A !== s.index && (g = t.slice(n - A, s.index), h = n, e.push({ start: h, end: h + g.length, match: g, bodyStart: h, bodyEnd: h + g.length, children: [], type: "text" })), s.index + A), g = h + w.length;
      e.push({ start: h, end: g, match: w, bodyStart: h, bodyEnd: g, children: [], type: "latex" }), n = g;
      let p = t.slice(n - A);
      p.length && !p.includes("\\") && (e.push({ start: g, end: g + p.length, match: p, bodyStart: g, bodyEnd: g + p.length, children: [], type: WB.some((K) => p.includes(K)) ? "latex" : "text" }), n = g + p.length);
    });
  }) : e.push({ start: n, end: n + t.length, match: t, bodyStart: n, bodyEnd: n + t.length, children: [], type: WB.some((d) => t.includes(d)) ? "latex" : "text" }) : e.push({ start: n, end: n + t.length, match: t, bodyStart: n, bodyEnd: n + t.length, children: [], type: WB.some((d) => t.includes(d)) ? "latex" : "text" }), e;
}
function $Q(t, A, e) {
  let n = A.bodyStart, i = [];
  return t.forEach((d, s) => {
    var l;
    (l = d.children) != null && l.length && (d.children = $Q(d.children, { bodyStart: d.bodyStart, bodyEnd: d.bodyEnd }, e)), s === 0 && (i = i.concat(Ro(e.slice(n, d.start), n))), d.type = "latex", i.push(d), n = d.end, t[s + 1] && d.end !== t[s + 1].start && (i = i.concat(Ro(e.slice(d.end, t[s + 1].start), n))), s === t.length - 1 && (i = i.concat(Ro(e.slice(d.end, A.bodyEnd), n)));
  }), i;
}
function Ah(t) {
  const A = zQ(t, "{", "}");
  let e = [];
  if (A.length) {
    let i = 0;
    A.forEach((d, s) => {
      var l = t.slice(i, d.start);
      l && (l = Ro(l, i), e = e.concat(l)), d.children.length ? d.children = $Q(d.children, { bodyStart: d.bodyStart, bodyEnd: d.bodyEnd }, t) : d.children = Ro(t.slice(d.bodyStart, d.bodyEnd), d.bodyStart), d.type = "latex", e.push(d), i = d.end, s === A.length - 1 && (l = t.slice(i)) && (d = Ro(l, i), e = e.concat(d));
    });
  } else {
    var n = Ro(t);
    e = e.concat(n);
  }
  return e;
}
function TF(n, A) {
  var n = MF(n), i = n.tag, e = n.id, n = n.className, i = A ? document.createElementNS(A, i) : document.createElement(i);
  return e && (i.id = e), n && (A ? i.setAttribute("class", n) : i.className = n), i;
}
function MF(t) {
  for (var A = t.split(/([.#])/), e = "", n = "", i = 1; i < A.length; i += 2)
    switch (A[i]) {
      case ".":
        e += " " + A[i + 1];
        break;
      case "#":
        n = A[i + 1];
    }
  return { className: e.trim(), tag: A[0] || "div", id: n };
}
function kF(t, A, e) {
  var n = A.__redom_lifecycle;
  if (H0(n))
    A.__redom_lifecycle = {};
  else {
    var i = e;
    for (A.__redom_mounted && Hs(A, "onunmount"); i; ) {
      var d, s = i.__redom_lifecycle || {};
      for (d in n)
        s[d] && (s[d] -= n[d]);
      H0(s) && (i.__redom_lifecycle = null), i = i.parentNode;
    }
  }
}
function H0(t) {
  if (t != null) {
    for (var A in t)
      if (t[A])
        return !1;
  }
  return !0;
}
var GF = ["onmount", "onremount", "onunmount"], VF = typeof window < "u" && "ShadowRoot" in window;
function Xo(i, A, e, n) {
  var i = Nr(i), d = Nr(A), s = ((A = A === d && d.__redom_view ? d.__redom_view : A) !== d && (d.__redom_view = A), d.__redom_mounted), l = d.parentNode;
  return s && l !== i && kF(A, d, l), e != null ? n ? ((s = Nr(e)).__redom_mounted && Hs(s, "onunmount"), i.replaceChild(d, s)) : i.insertBefore(d, Nr(e)) : i.appendChild(d), RF(A, d, i, l), A;
}
function Hs(t, A) {
  A === "onmount" || A === "onremount" ? t.__redom_mounted = !0 : A === "onunmount" && (t.__redom_mounted = !1);
  var e = t.__redom_lifecycle;
  if (e) {
    var n, i = t.__redom_view, d = 0;
    for (n in i && i[A] && i[A](), e)
      n && d++;
    if (d)
      for (var s = t.firstChild; s; ) {
        var l = s.nextSibling;
        Hs(s, A), s = l;
      }
  }
}
function RF(t, A, e, n) {
  for (var i = A.__redom_lifecycle || (A.__redom_lifecycle = {}), d = e === n, s = !1, l = 0, w = GF; l < w.length; l += 1) {
    var h = w[l];
    d || t !== A && h in t && (i[h] = (i[h] || 0) + 1), i[h] && (s = !0);
  }
  if (s) {
    var g = e, p = !1;
    for ((d || g && g.__redom_mounted) && (Hs(A, d ? "onremount" : "onmount"), p = !0); g; ) {
      var K, _ = g.parentNode, S = g.__redom_lifecycle || (g.__redom_lifecycle = {});
      for (K in i)
        S[K] = (S[K] || 0) + i[K];
      if (p)
        break;
      (g.nodeType === Node.DOCUMENT_NODE || VF && g instanceof ShadowRoot || _ && _.__redom_mounted) && (Hs(g, d ? "onremount" : "onmount"), p = !0), g = _;
    }
  } else
    A.__redom_lifecycle = {};
}
function NF(t, A, e) {
  var n = Nr(t);
  if (typeof A == "object")
    for (var i in A)
      y0(n, i, A[i]);
  else
    y0(n, A, e);
}
function y0(t, A, e) {
  t.style[A] = e ?? "";
}
var b0 = "http://www.w3.org/1999/xlink";
function eh(t, A, e, n) {
  var i = Nr(t);
  if (typeof A == "object")
    for (var d in A)
      eh(i, d, A[d], n);
  else {
    var t = i instanceof SVGElement, s = typeof e == "function";
    A === "style" && typeof e == "object" ? NF(i, e) : t && s ? i[A] = e : A === "dataset" ? nh(i, e) : !t && (A in i || s) && A !== "list" ? i[A] = e : t && A === "xlink" ? th(i, e) : (e = n && A === "class" ? i.className + " " + e : e) == null ? i.removeAttribute(A) : i.setAttribute(A, e);
  }
}
function th(t, A, e) {
  if (typeof A == "object")
    for (var n in A)
      th(t, n, A[n]);
  else
    e != null ? t.setAttributeNS(b0, A, e) : t.removeAttributeNS(b0, A, e);
}
function nh(t, A, e) {
  if (typeof A == "object")
    for (var n in A)
      nh(t, n, A[n]);
  else
    e != null ? t.dataset[A] = e : delete t.dataset[A];
}
function YB(t) {
  return document.createTextNode(t ?? "");
}
function rh(t, A, e) {
  for (var n = 0, i = A; n < i.length; n += 1) {
    var d, s = i[n];
    s !== 0 && !s || ((d = typeof s) == "function" ? s(t) : d == "string" || d == "number" ? t.appendChild(YB(s)) : PF(Nr(s)) ? Xo(t, s) : s.length ? rh(t, s, e) : d == "object" && eh(t, s, null, e));
  }
}
function Nr(t) {
  return t.nodeType && t || !t.el && t || Nr(t.el);
}
function PF(t) {
  return t && t.nodeType;
}
function gs(t) {
  for (var A = [], e = arguments.length - 1; 0 < e--; )
    A[e] = arguments[e + 1];
  var n = typeof t;
  if (n == "string")
    i = TF(t);
  else {
    if (n != "function")
      throw new Error("At least one argument required");
    var i = new (Function.prototype.bind.apply(t, [null].concat(A)))();
  }
  return rh(Nr(i), A, !0), i;
}
var yn = gs;
function uh(t, A, e) {
  var n = t.match;
  return t.type === Ig.latex ? t.children.length ? [yn("span.bk.start", I0(A == null ? void 0 : A.match, "start")), ...t.children.map((i, d) => uh(i, t.children[d - 1], t.children[d + 1])), yn("span.bk end", I0(A == null ? void 0 : A.match, "end"))] : n.at(0) === "{" && n.at(-1) === "}" ? [yn("span.bk start", "{"), YB(n.slice(1, n.length - 1)), yn("span.bk end", "}")] : [yn("span." + (t.type === Ig.latex ? "lx" : "lt"), YB(t.match))] : YB(n);
}
function I0(t, A) {
  return t === "\\left" ? A === "start" ? "\\{" : "\\}" : A === "start" ? "{" : "}";
}
function oh(t) {
  return gs("span.latex-root", t.map((A, e) => uh(A, t[e - 1], t[e + 1])));
}
function rl(t, A) {
  var e = new Range();
  e.setStart(A.startNode, A.start), e.setEnd(A.endNode, A.end), t == null || t.removeAllRanges(), t == null || t.addRange(e);
}
function ih(t) {
  let A, e;
  var n;
  if (window.getSelection) {
    if ((A = window.getSelection()).focusNode || (n = document.querySelector(".latex-editor-content"), rl(A, { startNode: n, endNode: n, start: n == null ? void 0 : n.childNodes.length, end: n == null ? void 0 : n.childNodes.length })), (A = window.getSelection()).getRangeAt && A.rangeCount) {
      (e = A.getRangeAt(0)).deleteContents();
      var i = document.createElement("div");
      i.innerHTML = t;
      let d = document.createDocumentFragment(), s, l;
      for (; s = i.firstChild; )
        l = d.appendChild(s);
      e.insertNode(d), l && ((e = e.cloneRange()).setStartAfter(l), e.collapse(!0), A.removeAllRanges(), A.addRange(e));
    }
  } else
    document.selection && document.selection.type != "Control" && document.selection.createRange().pasteHTML(t);
}
async function JF(t, A) {
  t && new MutationObserver(function(e) {
    e.forEach((n) => {
      switch (n.type) {
        case "characterData":
        case "childList":
          A(n);
      }
    });
  }).observe(t, { childList: !0, characterData: !0, subtree: !0, characterDataOldValue: !0 });
}
function XF() {
  var e;
  var t = window.getSelection();
  if (t && (t != null && t.isCollapsed)) {
    let n = null;
    var A = (n = ((e = t.anchorNode) == null ? void 0 : e.nodeType) === 3 ? t.anchorNode : ml(t.anchorNode)).parentNode;
    if (n.nodeType === 3 && A.nodeType === 1) {
      if (A.className.includes("lx"))
        return rl(t, { startNode: A, endNode: A, start: 0, end: 1 }), !0;
      if (A.className.includes("bk"))
        return rl(t, { startNode: ah(A), endNode: A, start: 0, end: 1 }), !0;
    }
  }
  return !1;
}
function ml(t) {
  var e;
  var A = (e = Array.from(t == null ? void 0 : t.childNodes)) == null ? void 0 : e.map((n) => {
    var i, d;
    if ((i = n == null ? void 0 : n.innerText) != null && i.length || (d = n.nodeValue) != null && d.length)
      return n;
  }).filter((n) => n);
  return A != null && A.length ? ml(A[A.length - 1]) : t;
}
function WF(d) {
  var A = window.getSelection(), e = ml(A.focusNode), n = e.parentNode, i = d.oldValue || "", d = d.target.nodeValue || "";
  e.nodeType === 3 && n.className.includes("lx") && d.length > (i == null ? void 0 : i.length) && (e = d.slice(d.indexOf(i) + i.length), n.innerHTML = i, Xo(n, d = yn("text", e)), rl(A, { startNode: d, endNode: d, start: e.length, end: e.length }));
}
function ah(t) {
  var e;
  var A = t == null ? void 0 : t.previousSibling;
  return A ? (e = A == null ? void 0 : A.className) != null && e.includes("lx") ? t.previousSibling : ah(A) : t;
}
function YF() {
  var t, A, e = window.getSelection();
  return e.rangeCount === 0 ? null : ({ top: e, left: t, height: A } = e.getRangeAt(0).getBoundingClientRect(), { left: t, top: e + A });
}
gs.extend = function() {
  for (var t = [], A = arguments.length; A--; )
    t[A] = arguments[A];
  return gs.bind.apply(gs, [this].concat(t));
};
const ZF = 65280, jF = 255, qF = /\+{2,}/gi, zF = /\s+/gi, $F = /^\s*?(?:(?:^-?|\s|\+)(?:alt|option|cmd|command|meta|ctrl|control|shift|cmdorctrl|commandorcontrol|backspace|capslock|del|delete|down|end|enter|return|esc|escape|home|insert|left|pagedown|pageup|right|space|spacebar|tab|up|plus|\d|[a-z]|f(?:\d|1\d|2[0-4])|numpad\d|[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-]))+\s*$/i, pu = { HANDLED: 0, UNHANDLED: 1, UNHANDLEABLE: 2 }, rn = { isArray: (t) => Array.isArray(t), isEqual: (t, A) => {
  if (t.length !== A.length)
    return !1;
  for (let e = 0, n = t.length; e < n; e++)
    if (t[e] !== A[e])
      return !1;
  return !0;
}, isFalsy: (t) => !t, isKeyboardEvent: (t) => t.type.startsWith("key"), isMac: () => typeof navigator == "object" && /mac|ipod|iphone|ipad/i.test(navigator.platform), isTruthy: (t) => !!t, memoize: (t) => {
  const A = /* @__PURE__ */ new Map();
  return (e) => {
    var n = A.get(e);
    return n || A.has(e) || (n = t(e), A.set(e, n)), n;
  };
} }, sr = { alt: 256, option: 256, cmd: 512, command: 512, meta: 512, ctrl: 1024, control: 1024, shift: 2048, cmdorctrl: rn.isMac() ? 512 : 1024, commandorcontrol: rn.isMac() ? 512 : 1024, backspace: 1, capslock: 2, del: 3, delete: 3, down: 4, end: 5, enter: 6, return: 6, esc: 7, escape: 7, home: 8, insert: 9, left: 10, pagedown: 11, pageup: 12, right: 13, space: 14, spacebar: 14, tab: 15, up: 16, 0: 17, 1: 18, 2: 19, 3: 20, 4: 21, 5: 22, 6: 23, 7: 24, 8: 25, 9: 26, a: 27, b: 28, c: 29, d: 30, e: 31, f: 32, g: 33, h: 34, i: 35, j: 36, k: 37, l: 38, m: 39, n: 40, o: 41, p: 42, q: 43, r: 44, s: 45, t: 46, u: 47, v: 48, w: 49, x: 50, y: 51, z: 52, "!": 53, '"': 54, "#": 55, $: 56, "%": 57, "&": 58, "'": 59, "(": 60, ")": 61, "*": 62, "+": 63, plus: 63, ",": 64, "-": 65, ".": 66, "/": 67, ":": 68, ";": 69, "<": 70, "=": 71, ">": 72, "?": 73, "@": 74, "[": 75, "\\": 76, "]": 77, "^": 78, _: 79, "`": 80, "{": 81, "|": 82, "}": 83, "~": 84, f1: 85, f2: 86, f3: 87, f4: 88, f5: 89, f6: 90, f7: 91, f8: 92, f9: 93, f10: 94, f11: 95, f12: 96, f13: 97, f14: 98, f15: 99, f16: 100, f17: 101, f18: 102, f19: 103, f20: 104, f21: 105, f22: 106, f23: 107, f24: 108, numpad0: 109, numpad1: 110, numpad2: 111, numpad3: 112, numpad4: 113, numpad5: 114, numpad6: 115, numpad7: 116, numpad8: 117, numpad9: 118 }, AU = { 18: 256, 91: 512, 92: 512, 93: 512, 224: 512, 17: 1024, 16: 2048, 8: 1, 20: 2, 46: 3, 40: 4, 35: 5, 13: 6, 27: 7, 36: 8, 45: 9, 37: 10, 34: 11, 33: 12, 39: 13, 32: 14, 9: 15, 38: 16, 222: 59, 188: 64, 189: 65, 190: 66, 191: 67, 186: 69, 187: 71, 219: 75, 220: 76, 221: 77, 192: 80, 112: 85, 113: 86, 114: 87, 115: 88, 116: 89, 117: 90, 118: 91, 119: 92, 120: 93, 121: 94, 122: 95, 123: 96, 124: 97, 125: 98, 126: 99, 127: 100, 128: 101, 129: 102, 130: 103, 131: 104, 132: 105, 133: 106, 134: 107, 135: 108, 96: 109, 97: 110, 98: 111, 99: 112, 100: 113, 101: 114, 102: 115, 103: 116, 104: 117, 105: 118 }, eU = { 256: "Alt", 512: "Cmd", 1024: "Ctrl", 2048: "Shift", 1: "Backspace", 2: "Capslock", 3: "Delete", 4: "Down", 5: "End", 6: "Enter", 7: "Escape", 8: "Home", 9: "Insert", 10: "Left", 11: "PageDown", 12: "PageUp", 13: "Right", 14: "Space", 15: "Tab", 16: "Up", 17: "0", 18: "1", 19: "2", 20: "3", 21: "4", 22: "5", 23: "6", 24: "7", 25: "8", 26: "9", 27: "A", 28: "B", 29: "C", 30: "D", 31: "E", 32: "F", 33: "G", 34: "H", 35: "I", 36: "J", 37: "K", 38: "L", 39: "M", 40: "N", 41: "O", 42: "P", 43: "Q", 44: "R", 45: "S", 46: "T", 47: "U", 48: "V", 49: "W", 50: "X", 51: "Y", 52: "Z", 53: "!", 54: '"', 55: "#", 56: "$", 57: "%", 58: "&", 59: "'", 60: "(", 61: ")", 62: "*", 63: "Plus", 64: ",", 65: "-", 66: ".", 67: "/", 68: ":", 69: ";", 70: "<", 71: "=", 72: ">", 73: "?", 74: "@", 75: "[", 76: "\\", 77: "]", 78: "^", 79: "_", 80: "`", 81: "{", 82: "|", 83: "}", 84: "~", 85: "F1", 86: "F2", 87: "F3", 88: "F4", 89: "F5", 90: "F6", 91: "F7", 92: "F8", 93: "F9", 94: "F10", 95: "F11", 96: "F12", 97: "F13", 98: "F14", 99: "F15", 100: "F16", 101: "F17", 102: "F18", 103: "F19", 104: "F20", 105: "F21", 106: "F22", 107: "F23", 108: "F24", 109: "Numpad0", 110: "Numpad1", 111: "Numpad2", 112: "Numpad3", 113: "Numpad4", 114: "Numpad5", 115: "Numpad6", 116: "Numpad7", 117: "Numpad8", 118: "Numpad9" }, tU = { 256: "Alt", 512: "Cmd", 1024: "Ctrl", 2048: "Shift", 1: "Backspace", 2: "Capslock", 3: "Delete", 4: "Down", 5: "End", 6: "Enter", 7: "Escape", 8: "Home", 9: "Insert", 10: "Left", 11: "PageDown", 12: "PageUp", 13: "Right", 14: "Space", 15: "Tab", 16: "Up", 17: "0", 18: "1", 19: "2", 20: "3", 21: "4", 22: "5", 23: "6", 24: "7", 25: "8", 26: "9", 27: "A", 28: "B", 29: "C", 30: "D", 31: "E", 32: "F", 33: "G", 34: "H", 35: "I", 36: "J", 37: "K", 38: "L", 39: "M", 40: "N", 41: "O", 42: "P", 43: "Q", 44: "R", 45: "S", 46: "T", 47: "U", 48: "V", 49: "W", 50: "X", 51: "Y", 52: "Z", 53: "!", 54: '"', 55: "#", 56: "$", 57: "%", 58: "&", 59: "'", 60: "(", 61: ")", 62: "*", 63: "Plus", 64: ",", 65: "-", 66: ".", 67: "/", 68: ":", 69: ";", 70: "<", 71: "=", 72: ">", 73: "?", 74: "@", 75: "[", 76: "\\", 77: "]", 78: "^", 79: "_", 80: "`", 81: "{", 82: "|", 83: "}", 84: "~", 85: "F1", 86: "F2", 87: "F3", 88: "F4", 89: "F5", 90: "F6", 91: "F7", 92: "F8", 93: "F9", 94: "F10", 95: "F11", 96: "F12", 97: "F13", 98: "F14", 99: "F15", 100: "F16", 101: "F17", 102: "F18", 103: "F19", 104: "F20", 105: "F21", 106: "F22", 107: "F23", 108: "F24", 109: "num0", 110: "num1", 111: "num2", 112: "num3", 113: "num4", 114: "num5", 115: "num6", 116: "num7", 117: "num8", 118: "num9" }, nU = { 256: "⌥", 512: "⌘", 1024: "⌃", 2048: "⇧", 1: "⌫", 2: "⇪", 3: "⌦", 4: "↓", 5: "↘", 6: "⏎", 7: "⎋", 8: "↖", 9: "⎀", 10: "←", 11: "⇟", 12: "⇞", 13: "→", 14: "␣", 15: "⇥", 16: "↑", 17: "0", 18: "1", 19: "2", 20: "3", 21: "4", 22: "5", 23: "6", 24: "7", 25: "8", 26: "9", 27: "A", 28: "B", 29: "C", 30: "D", 31: "E", 32: "F", 33: "G", 34: "H", 35: "I", 36: "J", 37: "K", 38: "L", 39: "M", 40: "N", 41: "O", 42: "P", 43: "Q", 44: "R", 45: "S", 46: "T", 47: "U", 48: "V", 49: "W", 50: "X", 51: "Y", 52: "Z", 53: "!", 54: '"', 55: "#", 56: "$", 57: "%", 58: "&", 59: "'", 60: "(", 61: ")", 62: "*", 63: "+", 64: ",", 65: "-", 66: ".", 67: "/", 68: ":", 69: ";", 70: "<", 71: "=", 72: ">", 73: "?", 74: "@", 75: "[", 76: "\\", 77: "]", 78: "^", 79: "_", 80: "`", 81: "{", 82: "|", 83: "}", 84: "~", 85: "F1", 86: "F2", 87: "F3", 88: "F4", 89: "F5", 90: "F6", 91: "F7", 92: "F8", 93: "F9", 94: "F10", 95: "F11", 96: "F12", 97: "F13", 98: "F14", 99: "F15", 100: "F16", 101: "F17", 102: "F18", 103: "F19", 104: "F20", 105: "F21", 106: "F22", 107: "F23", 108: "F24", 109: "Numpad0", 110: "Numpad1", 111: "Numpad2", 112: "Numpad3", 113: "Numpad4", 114: "Numpad5", 115: "Numpad6", 116: "Numpad7", 117: "Numpad8", 118: "Numpad9" }, zA = { getModifierKey: (t) => t & ZF, hasModifierKey: (t) => !!zA.getModifierKey(t), getTriggerKey: (t) => t & jF, hasTriggerKey: (t) => !!zA.getTriggerKey(t), event2id: (t) => {
  let A = 0;
  var e, n, i, d;
  return rn.isKeyboardEvent(t) && (e = t.type === "keypress", n = t.which || t.keyCode || 0, i = String.fromCharCode(n).toLowerCase(), d = t.key, A = e ? sr[d] || sr[i] || 0 : AU[n] || sr[i] || sr[d] || 0), t.ctrlKey && (A |= sr.ctrl), t.altKey && (A |= sr.alt), t.shiftKey && (A |= sr.shift), t.metaKey && (A |= sr.cmd), A;
}, event2shortcut: (t) => zA.id2shortcut([zA.event2id(t)]), event2accelerator: (t) => zA.id2accelerator([zA.event2id(t)]), event2symbols: (t) => zA.id2symbols([zA.event2id(t)]), chord2id: rn.memoize((t) => t.replace(qF, "+Plus").toLowerCase().split("+").reduce((A, e) => A | (sr[e] || 0), 0)), chord2accelerator: (t) => zA.id2accelerator([zA.chord2id(t)]), chord2symbols: (t) => zA.id2symbols([zA.chord2id(t)]), isValidShortcut: (t) => $F.test(t), checkValidShortcut: (t) => zA.isValidShortcut(t), shortcut2id: rn.memoize((t) => t.trim().split(zF).map(zA.chord2id)), shortcut2accelerator: rn.memoize((t) => zA.id2accelerator(zA.shortcut2id(t))), shortcut2symbols: rn.memoize((t) => zA.id2symbols(zA.shortcut2id(t))), isValidID: (t) => t.every(rn.isTruthy), checkValidID: (t) => zA.isValidID(t), id2output: (t, A, e, n) => {
  const { ctrl: i, alt: d, shift: s, cmd: l } = sr;
  return t.map((g) => {
    var h = [], g = (g & i && h.push(A[i]), g & d && h.push(A[d]), g & s && h.push(A[s]), g & l && h.push(A[l]), zA.getTriggerKey(g));
    return g && h.push(A[g] || String.fromCharCode(g).toUpperCase()), h.join(e);
  }).join(n);
}, id2shortcut: (t) => zA.id2output(t, eU, "+", " "), id2accelerator: (t) => zA.id2output(t, tU, "+", " "), id2symbols: (t) => zA.id2output(t, nU, "", " ") };
class rU {
  constructor(A) {
    this.lastKeydownID = -1, this.currentKeydownShortcutID = [], this.currentKeypressShortcutID = [], this.currentKeyupShortcutID = [], this.resetNextKeydownShortcutID = !1, this.triggeredNextKeypress = !0, this.ignoreNextKeypress = !1, this.listening = !1, this.on = () => {
      this.listening || (this.listening = !0, this.target.addEventListener("keydown", this.handler, { capture: this.capture }), this.target.addEventListener("keypress", this.handler, { capture: this.capture }), this.target.addEventListener("keyup", this.handler, { capture: this.capture }));
    }, this.off = () => {
      this.listening && (this.listening = !1, this.target.removeEventListener("keydown", this.handler, { capture: this.capture }), this.target.removeEventListener("keypress", this.handler, { capture: this.capture }), this.target.removeEventListener("keyup", this.handler, { capture: this.capture }));
    }, this.isListening = () => this.listening, this.handler = (e) => {
      var n, i, d, s, l;
      rn.isKeyboardEvent(e) && this.shouldHandleEvent(e) && (n = e.type, i = n === "keypress", d = n === "keyup", (n = n === "keydown") && (this.ignoreNextKeypress = !1), i && this.ignoreNextKeypress ? this.triggeredNextKeypress = !0 : (l = zA.event2id(e), s = zA.getTriggerKey(l), n && (this.lastKeydownID = l), d && (s || l !== this.lastKeydownID) ? this.currentKeyupShortcutID.length = 0 : (d || s) && (s = n ? this.currentKeydownShortcutID : d ? this.currentKeyupShortcutID : this.currentKeypressShortcutID, !n || this.resetNextKeydownShortcutID || this.triggeredNextKeypress || this.currentKeypressShortcutID.push(this.currentKeydownShortcutID[this.currentKeydownShortcutID.length - 1]), n && this.resetNextKeydownShortcutID && (s.length = 0, this.resetNextKeydownShortcutID = !1), s.push(l), i && rn.isEqual(this.currentKeydownShortcutID, s) ? (this.resetNextKeydownShortcutID && (this.currentKeypressShortcutID.length = 0), this.triggeredNextKeypress = !0) : ((l = this.options.handler(s, e)) === pu.HANDLED ? (this.resetNextKeydownShortcutID = !0, this.currentKeypressShortcutID.length = 0, this.currentKeyupShortcutID.length = 0) : l === pu.UNHANDLEABLE ? n ? this.resetNextKeydownShortcutID = !0 : i ? this.currentKeypressShortcutID.length = 0 : d && (this.currentKeyupShortcutID.length = 0) : typeof l == "object" && s.splice(0, 1 / 0, ...l), d || (this.ignoreNextKeypress = n && l === pu.HANDLED, this.triggeredNextKeypress = i)))));
    }, this.options = A, this.capture = !!A.capture, this.target = A.target || document, this.shouldHandleEvent = A.shouldHandleEvent || ((e) => !e.defaultPrevented);
  }
}
class uU {
  constructor(A = {}) {
    this.descriptors = [], this.shortcuts = { size: 0, handlers: [] }, this._updateListener = () => {
      var e = !!this.shortcuts.size;
      e !== this.listener.isListening() && (e ? this.listener.on() : this.listener.off());
    }, this.handler = (e, n) => {
      if (this.recordHandler)
        return this.recordHandler(zA.id2accelerator(e)), pu.UNHANDLED;
      let i = !1, d = -1;
      A:
        for (let l = 0, w = e.length; l < w; l++) {
          let h = this.shortcuts;
          for (let g = l; g < w; g++)
            if (!(h = h[e[g]])) {
              if (i || l !== w - 1)
                continue A;
              return pu.UNHANDLEABLE;
            }
          i = !0, d === -1 && (d = l);
          var s = h.handlers;
          for (let g = 0, p = s.length; g < p; g++)
            if (s[g](n) === !0)
              return n && (n.preventDefault(), n.stopPropagation()), pu.HANDLED;
        }
      return 0 < d ? e.slice(d) : pu.UNHANDLED;
    }, this.get = () => this.descriptors, this.add = (e) => {
      if (!rn.isArray(e))
        return this.add([e]);
      e.forEach((n) => {
        const { shortcut: i, handler: d } = n;
        if (i[0] === "-")
          return this.remove([{ shortcut: i, handler: d }]);
        if (d) {
          var s = zA.shortcut2id(i);
          this.descriptors.push(n);
          const l = s.length - 1;
          s.reduce((w, h, g) => (w[h] || (w.size++, w[h] = { parent: w, id: h, size: 0, handlers: [] }), g === l && w[h].handlers.unshift(d), w[h]), this.shortcuts);
        }
      }), this._updateListener();
    }, this.register = (e) => (this.add(e), () => {
      this.remove(e);
    }), this.remove = (e) => {
      if (!rn.isArray(e))
        return this.remove([e]);
      e.forEach((n) => {
        let { shortcut: i, handler: d } = n;
        i[0] === "-" && (i = i.slice(1));
        const s = zA.shortcut2id(i), l = (this.descriptors = this.descriptors.filter((w) => w.shortcut !== i && !rn.isEqual(zA.shortcut2id(w.shortcut), s) || d && w.handler !== d), s.length - 1);
        s.reduce((w, h, g) => {
          if (w = w[h], !w)
            return {};
          if (g === l) {
            d ? w.handlers = w.handlers.filter((K) => K !== d) : w.handlers.length = 0;
            let p = w;
            for (; !p.size && !p.handlers.length && p.parent && p.id; )
              delete p.parent[p.id], p.parent.size--, p = p.parent;
          }
          return w;
        }, this.shortcuts);
      }), this._updateListener();
    }, this.reset = () => {
      this.descriptors = [], this.shortcuts = { size: 0, handlers: [] }, this._updateListener();
    }, this.record = (e) => (this.recordHandler = e, () => {
      delete this.recordHandler;
    }), this.trigger = (e) => (e = typeof e == "string" ? zA.shortcut2id(e) : e, this.handler(e) === pu.HANDLED), this.listener = new rU({ capture: A.capture, handler: this.handler, target: A.target, shouldHandleEvent: A.shouldHandleEvent }), this.reset(), A.shortcuts && this.add(A.shortcuts);
  }
}
function oU(t, A) {
  var e;
  (e = document.querySelector(".suggest-option-panel")) == null || e.remove(), t = t.map((n) => yn("div.option-item", n)), t = yn("div.suggest-option-panel", t, { style: { display: "block", left: A.left + "px", top: A.top + "px" } }), Xo(document.body, t);
}
class iU {
  constructor(A) {
    if (this.editContent = "", this.keyLanguage = "en", this.suggestVal = "", this.container = document.querySelector(A.container), !this.container)
      throw new Error("找不到" + A.container);
    this.editContent = A.content || "", this.contentChange = A.contentChange, this.init();
  }
  init() {
    this.container.contentEditable = "true", this.container.classList.add("latex-editor-content"), this.container.focus(), JF(this.container, this.observerContentChange.bind(this)), this.observerDelete(), this.removeFontTag(), this.addKeyEvent();
  }
  observerDelete() {
    new uU().add([{ shortcut: "Backspace", handler: (A) => XF() }]);
  }
  observerContentChange(A) {
    var e;
    this.editContent = "", this.setEditContent(), WF(A), A.type === "characterData" && A.target && (this.keyLanguage = "en", e = A.target.nodeValue || "", A = A.oldValue || "", e.length > (A == null ? void 0 : A.length) ? (e = e.slice(e.indexOf(A) + A.length), this.suggestVal += e, this.visibleSuggestionOption(this.suggestVal)) : this.suggestVal = "");
  }
  setEditContent() {
    var A = window.getSelection(), e = document.createElement("div");
    e.innerHTML = this.container.innerHTML, this.editContent = e.innerText || "", this.contentChange(this.editContent, A);
  }
  getContainer() {
    return this.container;
  }
  getContent() {
    return this.container.innerText || "";
  }
  visibleSuggestionOption(A = "") {
    if (A || this.suggestVal || (this.suggestVal = "\\"), this.keyLanguage !== "zh" && (!A || A.includes("\\"))) {
      let n = ue.flattenDeep(f0.map((i) => {
        if (Array.isArray(i.data))
          return i.data.map((d) => d.formula);
      }));
      A && (n = n.filter((i) => i.includes(A)));
      var e = YF();
      e && (e.left || e.top) && (oU(n, e), e = this.getSuggestPanelEle(), !n.length && e ? this.hideSuggestPanelEle(e) : e == null || e.addEventListener("click", (w) => {
        var h, g, p, K, _;
        var d, s, l, w = ((h = w.target) == null ? void 0 : h.innerText) || "";
        w && (d = ml((g = window.getSelection()) == null ? void 0 : g.anchorNode), l = (s = ((p = window.getSelection()) == null ? void 0 : p.anchorOffset) || 0) - this.suggestVal.length, l = (((K = d.nodeValue) == null ? void 0 : K.slice(0, l)) || "") + (((_ = d.nodeValue) == null ? void 0 : _.slice(s)) || ""), ih(oh(Ah(w)).outerHTML), d.nodeValue = l, this.suggestVal = "");
      }));
    }
  }
  addKeyEvent() {
    document.onclick = (n) => {
      var i;
      var e = this.getSuggestPanelEle(), n = n.target;
      e && !((i = n == null ? void 0 : n.className) != null && i.includes("latex-editor-content")) && this.hideSuggestPanelEle(e);
    }, this.container.onkeyup = (A) => {
      var e = this.getSuggestPanelEle();
      e && !this.suggestVal && this.hideSuggestPanelEle(e), A.keyCode === 220 && this.visibleSuggestionOption();
    }, document.body.addEventListener("compositionend", () => {
      this.keyLanguage = "zh";
    });
  }
  removeFontTag() {
    this.container.onkeyup = (A) => {
      var s, l, w;
      var e, n, i, d = this.container.querySelector("font");
      d && (n = d.innerText, (l = (i = (s = e = window.getSelection()) == null ? void 0 : s.focusNode).innerHTML) != null && l.trimStart() || ((w = i.innerHTML) == null ? void 0 : w.length) !== 1 || (Xo(d.parentElement, yn("span.lt", n)), d = (n = d.parentElement.lastChild).innerText, i.remove(), (i = new Range()).setStart(n, d.length), i.setEnd(n, d.length), e == null || e.removeAllRanges(), e == null || e.addRange(i)));
    };
  }
  getSuggestPanelEle() {
    return document.querySelector(".suggest-option-panel");
  }
  hideSuggestPanelEle(A) {
    A.style.display = "none", this.suggestVal = "", A.removeEventListener("click", () => {
    }, !0);
  }
}
var aU = Object.defineProperty, dU = (t, A, e) => A in t ? aU(t, A, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[A] = e, Ua = (t, A, e) => (dU(t, typeof A != "symbol" ? A + "" : A, e), e), Nd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ul = {}, sU = { get exports() {
  return ul;
}, set exports(t) {
  ul = t;
} };
(function(t, A) {
  (function() {
    var e, n = "Expected a function", i = "__lodash_hash_undefined__", d = "__lodash_placeholder__", s = 9007199254740991, l = NaN, w = 4294967295, h = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]], g = "[object Arguments]", p = "[object Array]", K = "[object Boolean]", _ = "[object Date]", S = "[object Error]", v = "[object Function]", M = "[object GeneratorFunction]", k = "[object Map]", X = "[object Number]", iA = "[object Object]", z = "[object Promise]", J = "[object RegExp]", lA = "[object Set]", $ = "[object String]", vA = "[object Symbol]", IA = "[object WeakMap]", YA = "[object ArrayBuffer]", Fe = "[object DataView]", ne = "[object Float32Array]", $A = "[object Float64Array]", ge = "[object Int8Array]", ve = "[object Int16Array]", ZA = "[object Int32Array]", Be = "[object Uint8Array]", hr = "[object Uint8ClampedArray]", Ln = "[object Uint16Array]", _u = "[object Uint32Array]", ba = /\b__p \+= '';/g, Ia = /\b(__p \+=) '' \+/g, va = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Yo = /&(?:amp|lt|gt|quot|#39);/g, Zo = /[&<>"']/g, Ka = RegExp(Yo.source), Ll = RegExp(Zo.source), xl = /<%-([\s\S]+?)%>/g, _l = /<%([\s\S]+?)%>/g, La = /<%=([\s\S]+?)%>/g, Ts = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Sl = /^\w*$/, Ol = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xa = /[\\^$.*+?()[\]{}|]/g, Tl = RegExp(xa.source), jo = /^\s+/, Ml = /\s/, kl = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Gl = /\{\n\/\* \[wrapped with (.+)\] \*/, _a = /,? & /, Vl = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Sa = /[()=,{}\[\]\/\s]/, Rl = /\\(\\)?/g, Nl = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ms = /\w*$/, Pl = /^[-+]0x[0-9a-f]+$/i, Jl = /^0b[01]+$/i, Xl = /^\[object .+?Constructor\]$/, Wl = /^0o[0-7]+$/i, Yl = /^(?:0|[1-9]\d*)$/, ks = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, qo = /($^)/, Zl = /['\n\r\u2028\u2029\\]/g, zo = "\\ud800-\\udfff", Gs = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", xn = "\\u2700-\\u27bf", jn = "a-z\\xdf-\\xf6\\xf8-\\xff", un = "A-Z\\xc0-\\xd6\\xd8-\\xde", Vs = "\\ufe0e\\ufe0f", Fr = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ot = "[" + zo + "]", Rs = "[" + Fr + "]", Cr = "[" + Gs + "]", Mt = "[" + xn + "]", Ns = "[" + jn + "]", Fr = "[^" + zo + Fr + "\\d+" + xn + jn + un + "]", xn = "\\ud83c[\\udffb-\\udfff]", jn = "[^" + zo + "]", Tu = "(?:\\ud83c[\\udde6-\\uddff]){2}", RA = "[\\ud800-\\udbff][\\udc00-\\udfff]", un = "[" + un + "]", Oa = "(?:" + Ns + "|" + Fr + ")", Fr = "(?:" + un + "|" + Fr + ")", Ta = "(?:['’](?:d|ll|m|re|s|t|ve))?", Su = "(?:['’](?:D|LL|M|RE|S|T|VE))?", _n = "(?:" + Cr + "|" + xn + ")?", Xr = "[" + Vs + "]?", Xr = Xr + _n + ("(?:\\u200d(?:" + [jn, Tu, RA].join("|") + ")" + Xr + _n + ")*"), _n = "(?:" + [Mt, Tu, RA].join("|") + ")" + Xr, Mt = "(?:" + [jn + Cr + "?", Cr, Tu, RA, ot].join("|") + ")", Ps = RegExp("['’]", "g"), Js = RegExp(Cr, "g"), Sn = RegExp(xn + "(?=" + xn + ")|" + Mt + Xr, "g"), Xs = RegExp([un + "?" + Ns + "+" + Ta + "(?=" + [Rs, un, "$"].join("|") + ")", Fr + "+" + Su + "(?=" + [Rs, un + Oa, "$"].join("|") + ")", un + "?" + Oa + "+" + Ta, un + "+" + Su, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", _n].join("|"), "g"), Ws = RegExp("[\\u200d" + zo + Gs + Vs + "]"), Ou = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, $o = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Ma = -1, re = {}, ee = (re[ne] = re[$A] = re[ge] = re[ve] = re[ZA] = re[Be] = re[hr] = re[Ln] = re[_u] = !0, re[g] = re[p] = re[YA] = re[K] = re[Fe] = re[_] = re[S] = re[v] = re[k] = re[X] = re[iA] = re[J] = re[lA] = re[$] = re[IA] = !1, {}), ka = (ee[g] = ee[p] = ee[YA] = ee[Fe] = ee[K] = ee[_] = ee[ne] = ee[$A] = ee[ge] = ee[ve] = ee[ZA] = ee[k] = ee[X] = ee[iA] = ee[J] = ee[lA] = ee[$] = ee[vA] = ee[Be] = ee[hr] = ee[Ln] = ee[_u] = !0, ee[S] = ee[v] = ee[IA] = !1, { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }), jl = parseFloat, ql = parseInt, jn = typeof Nd == "object" && Nd && Nd.Object === Object && Nd, Tu = typeof self == "object" && self && self.Object === Object && self, Ve = jn || Tu || Function("return this")(), RA = A && !A.nodeType && A, GA = RA && t && !t.nodeType && t, Ys = GA && GA.exports === RA, Ga = Ys && jn.process, ot = function() {
      try {
        return GA && GA.require && GA.require("util").types || Ga && Ga.binding && Ga.binding("util");
      } catch {
      }
    }(), On = ot && ot.isArrayBuffer, Wr = ot && ot.isDate, Ke = ot && ot.isMap, qn = ot && ot.isRegExp, zn = ot && ot.isSet, Va = ot && ot.isTypedArray;
    function qe(V, j, N) {
      switch (N.length) {
        case 0:
          return V.call(j);
        case 1:
          return V.call(j, N[0]);
        case 2:
          return V.call(j, N[0], N[1]);
        case 3:
          return V.call(j, N[0], N[1], N[2]);
      }
      return V.apply(j, N);
    }
    function it(V, j, N, cA) {
      for (var fA = -1, HA = V == null ? 0 : V.length; ++fA < HA; ) {
        var yA = V[fA];
        j(cA, yA, N(yA), V);
      }
      return cA;
    }
    function ht(V, j) {
      for (var N = -1, cA = V == null ? 0 : V.length; ++N < cA && j(V[N], N, V) !== !1; )
        ;
      return V;
    }
    function Zs(V, j) {
      for (var N = V == null ? 0 : V.length; N-- && j(V[N], N, V) !== !1; )
        ;
      return V;
    }
    function Ra(V, j) {
      for (var N = -1, cA = V == null ? 0 : V.length; ++N < cA; )
        if (!j(V[N], N, V))
          return !1;
      return !0;
    }
    function Tn(V, j) {
      for (var N = -1, cA = V == null ? 0 : V.length, fA = 0, HA = []; ++N < cA; ) {
        var yA = V[N];
        j(yA, N, V) && (HA[fA++] = yA);
      }
      return HA;
    }
    function Mu(V, j) {
      return !!(V != null && V.length) && -1 < XA(V, j, 0);
    }
    function Ai(V, j, N) {
      for (var cA = -1, fA = V == null ? 0 : V.length; ++cA < fA; )
        if (N(j, V[cA]))
          return !0;
      return !1;
    }
    function KA(V, j) {
      for (var N = -1, cA = V == null ? 0 : V.length, fA = Array(cA); ++N < cA; )
        fA[N] = j(V[N], N, V);
      return fA;
    }
    function $n(V, j) {
      for (var N = -1, cA = j.length, fA = V.length; ++N < cA; )
        V[fA + N] = j[N];
      return V;
    }
    function at(V, j, N, cA) {
      var fA = -1, HA = V == null ? 0 : V.length;
      for (cA && HA && (N = V[++fA]); ++fA < HA; )
        N = j(N, V[fA], fA, V);
      return N;
    }
    function zl(V, j, N, cA) {
      var fA = V == null ? 0 : V.length;
      for (cA && fA && (N = V[--fA]); fA--; )
        N = j(N, V[fA], fA, V);
      return N;
    }
    function ei(V, j) {
      for (var N = -1, cA = V == null ? 0 : V.length; ++N < cA; )
        if (j(V[N], N, V))
          return !0;
      return !1;
    }
    var Ar = Gu("length");
    function ku(V, j, N) {
      var cA;
      return N(V, function(fA, HA, yA) {
        if (j(fA, HA, yA))
          return cA = HA, !1;
      }), cA;
    }
    function Yr(V, j, N, cA) {
      for (var fA = V.length, HA = N + (cA ? 1 : -1); cA ? HA-- : ++HA < fA; )
        if (j(V[HA], HA, V))
          return HA;
      return -1;
    }
    function XA(V, j, N) {
      if (j != j)
        return Yr(V, ti, N);
      for (var cA = V, fA = j, HA = N - 1, yA = cA.length; ++HA < yA; )
        if (cA[HA] === fA)
          return HA;
      return -1;
    }
    function er(V, j, N, cA) {
      for (var fA = N - 1, HA = V.length; ++fA < HA; )
        if (cA(V[fA], j))
          return fA;
      return -1;
    }
    function ti(V) {
      return V != V;
    }
    function js(V, j) {
      var N = V == null ? 0 : V.length;
      return N ? Zr(V, j) / N : l;
    }
    function Gu(V) {
      return function(j) {
        return j == null ? e : j[V];
      };
    }
    function Na(V) {
      return function(j) {
        return V == null ? e : V[j];
      };
    }
    function Pa(V, j, N, cA, fA) {
      return fA(V, function(HA, yA, on) {
        N = cA ? (cA = !1, HA) : j(N, HA, yA, on);
      }), N;
    }
    function Zr(V, j) {
      for (var N, cA = -1, fA = V.length; ++cA < fA; ) {
        var HA = j(V[cA]);
        HA !== e && (N = N === e ? HA : N + HA);
      }
      return N;
    }
    function tr(V, j) {
      for (var N = -1, cA = Array(V); ++N < V; )
        cA[N] = j(N);
      return cA;
    }
    function qs(V) {
      return V && V.slice(0, $s(V) + 1).replace(jo, "");
    }
    function dt(V) {
      return function(j) {
        return V(j);
      };
    }
    function ni(V, j) {
      return KA(j, function(N) {
        return V[N];
      });
    }
    function Ur(V, j) {
      return V.has(j);
    }
    function ri(V, j) {
      for (var N = -1, cA = V.length; ++N < cA && -1 < XA(j, V[N], 0); )
        ;
      return N;
    }
    function Ja(V, j) {
      for (var N = V.length; N-- && -1 < XA(j, V[N], 0); )
        ;
      return N;
    }
    var Xa = Na({ À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }), Wa = Na({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
    function zs(V) {
      return "\\" + ka[V];
    }
    function Le(V) {
      return Ws.test(V);
    }
    function Vu(V) {
      var j = -1, N = Array(V.size);
      return V.forEach(function(cA, fA) {
        N[++j] = [fA, cA];
      }), N;
    }
    function jr(V, j) {
      return function(N) {
        return V(j(N));
      };
    }
    function Mn(V, j) {
      for (var N = -1, cA = V.length, fA = 0, HA = []; ++N < cA; ) {
        var yA = V[N];
        yA !== j && yA !== d || (V[N] = d, HA[fA++] = N);
      }
      return HA;
    }
    function Ru(V) {
      var j = -1, N = Array(V.size);
      return V.forEach(function(cA) {
        N[++j] = cA;
      }), N;
    }
    function qr(V) {
      return (Le(V) ? function(j) {
        for (var N = Sn.lastIndex = 0; Sn.test(j); )
          ++N;
        return N;
      } : Ar)(V);
    }
    function kt(V) {
      return Le(V) ? V.match(Sn) || [] : V.split("");
    }
    function $s(V) {
      for (var j = V.length; j-- && Ml.test(V.charAt(j)); )
        ;
      return j;
    }
    var zr = Na({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }), nr = function V(OA) {
      var N = (OA = OA == null ? Ve : nr.defaults(Ve.Object(), OA, nr.pick(Ve, $o))).Array, dn = OA.Date, cA = OA.Error, fA = OA.Function, HA = OA.Math, yA = OA.Object, on = OA.RegExp, G = OA.String, Y = OA.TypeError, P = N.prototype, xt = fA.prototype, BA = yA.prototype, hA = OA["__core-js_shared__"], UA = xt.toString, rA = BA.hasOwnProperty, Nu = 0, Ac = (xt = /[^.]+$/.exec(hA && hA.keys && hA.keys.IE_PROTO || "")) ? "Symbol(src)_1." + xt : "", ze = BA.toString, ui = UA.call(yA), $r = Ve._, Au = on("^" + UA.call(rA).replace(xa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), xt = Ys ? OA.Buffer : e, Se = OA.Symbol, pr = OA.Uint8Array, PA = xt ? xt.allocUnsafe : e, oi = jr(yA.getPrototypeOf, yA), Ya = yA.create, Pu = BA.propertyIsEnumerable, ii = P.splice, ec = Se ? Se.isConcatSpreadable : e, Ju = Se ? Se.iterator : e, an = Se ? Se.toStringTag : e, Xu = function() {
        try {
          var u = Pn(yA, "defineProperty");
          return u({}, "", {}), u;
        } catch {
        }
      }(), kn = OA.clearTimeout !== Ve.clearTimeout && OA.clearTimeout, yd = dn && dn.now !== Ve.Date.now && dn.now, ai = OA.setTimeout !== Ve.setTimeout && OA.setTimeout, Wu = HA.ceil, mr = HA.floor, di = yA.getOwnPropertySymbols, xt = xt ? xt.isBuffer : e, eu = OA.isFinite, Er = P.join, si = jr(yA.keys, yA), oe = HA.max, xe = HA.min, ci = dn.now, Bi = OA.parseInt, li = HA.random, tc = P.reverse, dn = Pn(OA, "DataView"), Yu = Pn(OA, "Map"), se = Pn(OA, "Promise"), we = Pn(OA, "Set"), OA = Pn(OA, "WeakMap"), Zu = Pn(yA, "create"), ju = OA && new OA(), tu = {}, sn = jt(dn), qu = jt(Yu), zu = jt(se), nu = jt(we), TA = jt(OA), Se = Se ? Se.prototype : e, Gn = Se ? Se.valueOf : e, $u = Se ? Se.toString : e;
      function E(u) {
        if (mA(u) && !CA(u) && !(u instanceof xA)) {
          if (u instanceof Gt)
            return u;
          if (rA.call(u, "__wrapped__"))
            return Gi(u);
        }
        return new Gt(u);
      }
      var ru = function(u) {
        return LA(u) ? Ya ? Ya(u) : (Za.prototype = u, u = new Za(), Za.prototype = e, u) : {};
      };
      function Za() {
      }
      function fi() {
      }
      function Gt(u, a) {
        this.__wrapped__ = u, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = e;
      }
      function xA(u) {
        this.__wrapped__ = u, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = w, this.__views__ = [];
      }
      function Vt(u) {
        var a = -1, B = u == null ? 0 : u.length;
        for (this.clear(); ++a < B; ) {
          var Q = u[a];
          this.set(Q[0], Q[1]);
        }
      }
      function cn(u) {
        var a = -1, B = u == null ? 0 : u.length;
        for (this.clear(); ++a < B; ) {
          var Q = u[a];
          this.set(Q[0], Q[1]);
        }
      }
      function m(u) {
        var a = -1, B = u == null ? 0 : u.length;
        for (this.clear(); ++a < B; ) {
          var Q = u[a];
          this.set(Q[0], Q[1]);
        }
      }
      function vt(u) {
        var a = -1, B = u == null ? 0 : u.length;
        for (this.__data__ = new m(); ++a < B; )
          this.add(u[a]);
      }
      function Ct(u) {
        u = this.__data__ = new cn(u), this.size = u.size;
      }
      function Ao(u, a) {
        var B, Q = CA(u), F = !Q && pn(u), H = !Q && !F && Te(u), I = !Q && !F && !H && Ae(u), L = Q || F || H || I, r = L ? tr(u.length, G) : [], o = r.length;
        for (B in u)
          !a && !rA.call(u, B) || L && (B == "length" || H && (B == "offset" || B == "parent") || I && (B == "buffer" || B == "byteLength" || B == "byteOffset") || Yt(B, o)) || r.push(B);
        return r;
      }
      function Kt(u) {
        var a = u.length;
        return a ? u[Ui(0, a - 1)] : e;
      }
      function _A(u, a) {
        return po(Qe(u), Hr(a, 0, u.length));
      }
      function Dr(u) {
        return po(Qe(u));
      }
      function Rt(u, a, B) {
        (B === e || Et(u[a], B)) && (B !== e || a in u) || ln(u, a, B);
      }
      function Ft(u, a, B) {
        var Q = u[a];
        rA.call(u, a) && Et(Q, B) && (B !== e || a in u) || ln(u, a, B);
      }
      function Bn(u, a) {
        for (var B = u.length; B--; )
          if (Et(u[B][0], a))
            return B;
        return -1;
      }
      function Nt(u, a, B, Q) {
        return Vn(u, function(F, H, I) {
          a(Q, F, B(F), I);
        }), Q;
      }
      function ja(u, a) {
        return u && Pt(a, Me(a), u);
      }
      function ln(u, a, B) {
        a == "__proto__" && Xu ? Xu(u, a, { configurable: !0, enumerable: !0, value: B, writable: !0 }) : u[a] = B;
      }
      function qa(u, a) {
        for (var B = -1, Q = a.length, F = N(Q), H = u == null; ++B < Q; )
          F[B] = H ? e : VA(u, a[B]);
        return F;
      }
      function Hr(u, a, B) {
        return u = u == u && (B !== e && (u = u <= B ? u : B), a !== e) ? a <= u ? u : a : u;
      }
      function st(u, a, B, Q, F, H) {
        var I, L = 1 & a, r = 2 & a, o = 4 & a;
        if ((I = B ? F ? B(u, Q, F, H) : B(u) : I) === e) {
          if (!LA(u))
            return u;
          var c, f, C, Q = CA(u);
          if (Q) {
            if (U = (D = u).length, C = new D.constructor(U), U && typeof D[0] == "string" && rA.call(D, "index") && (C.index = D.index, C.input = D.input), I = C, !L)
              return Qe(u, I);
          } else {
            var U = pe(u), D = U == v || U == M;
            if (Te(u))
              return dd(u, L);
            if (U == iA || U == g || D && !F) {
              if (I = r || D ? {} : wA(u), !L)
                return r ? (f = C = u, f = (c = I) && Pt(f, lt(f), c), Pt(C, _i(C), f)) : (f = ja(I, c = u), Pt(c, ho(c), f));
            } else {
              if (!ee[U])
                return F ? u : {};
              I = function(x, O, T) {
                var R = x.constructor;
                switch (O) {
                  case YA:
                    return ao(x);
                  case K:
                  case _:
                    return new R(+x);
                  case Fe:
                    return function(W, Z) {
                      return Z = Z ? ao(W.buffer) : W.buffer, new W.constructor(Z, W.byteOffset, W.byteLength);
                    }(x, T);
                  case ne:
                  case $A:
                  case ge:
                  case ve:
                  case ZA:
                  case Be:
                  case hr:
                  case Ln:
                  case _u:
                    return sd(x, T);
                  case k:
                    return new R();
                  case X:
                  case $:
                    return new R(x);
                  case J:
                    return function(W) {
                      var Z = new W.constructor(W.source, Ms.exec(W));
                      return Z.lastIndex = W.lastIndex, Z;
                    }(x);
                  case lA:
                    return new R();
                  case vA:
                    return function(W) {
                      return Gn ? yA(Gn.call(W)) : {};
                    }(x);
                }
              }(u, U, L);
            }
          }
          if (F = (H = H || new Ct()).get(u), F)
            return F;
          H.set(u, I), Kd(u) ? u.forEach(function(x) {
            I.add(st(x, a, B, x, u, H));
          }) : Jn(u) && u.forEach(function(x, O) {
            I.set(O, st(x, a, B, O, u, H));
          });
          var y = Q ? e : (o ? r ? xi : hd : r ? lt : Me)(u);
          ht(y || u, function(x, O) {
            y && (x = u[O = x]), Ft(I, O, st(x, a, B, O, u, H));
          });
        }
        return I;
      }
      function uu(u, a, B) {
        var Q = B.length;
        if (u == null)
          return !Q;
        for (u = yA(u); Q--; ) {
          var F = B[Q], H = a[F], I = u[F];
          if (I === e && !(F in u) || !H(I))
            return !1;
        }
        return !0;
      }
      function eo(u, a, B) {
        if (typeof u != "function")
          throw new Y(n);
        return Uo(function() {
          u.apply(e, B);
        }, a);
      }
      function to(u, a, B, Q) {
        var F = -1, H = Mu, I = !0, L = u.length, r = [], o = a.length;
        if (L) {
          B && (a = KA(a, dt(B))), Q ? (H = Ai, I = !1) : 200 <= a.length && (H = Ur, I = !1, a = new vt(a));
          A:
            for (; ++F < L; ) {
              var f = u[F], c = B == null ? f : B(f), f = Q || f !== 0 ? f : 0;
              if (I && c == c) {
                for (var C = o; C--; )
                  if (a[C] === c)
                    continue A;
                r.push(f);
              } else
                H(a, c, Q) || r.push(f);
            }
        }
        return r;
      }
      E.templateSettings = { escape: xl, evaluate: _l, interpolate: La, variable: "", imports: { _: E } }, (E.prototype = fi.prototype).constructor = E, (Gt.prototype = ru(fi.prototype)).constructor = Gt, (xA.prototype = ru(fi.prototype)).constructor = xA, Vt.prototype.clear = function() {
        this.__data__ = Zu ? Zu(null) : {}, this.size = 0;
      }, Vt.prototype.delete = function(u) {
        return u = this.has(u) && delete this.__data__[u], this.size -= u ? 1 : 0, u;
      }, Vt.prototype.get = function(u) {
        var a, B = this.__data__;
        return Zu ? (a = B[u]) === i ? e : a : rA.call(B, u) ? B[u] : e;
      }, Vt.prototype.has = function(u) {
        var a = this.__data__;
        return Zu ? a[u] !== e : rA.call(a, u);
      }, Vt.prototype.set = function(u, a) {
        var B = this.__data__;
        return this.size += this.has(u) ? 0 : 1, B[u] = Zu && a === e ? i : a, this;
      }, cn.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, cn.prototype.delete = function(u) {
        var a = this.__data__;
        return !((u = Bn(a, u)) < 0 || (u == a.length - 1 ? a.pop() : ii.call(a, u, 1), --this.size, 0));
      }, cn.prototype.get = function(u) {
        var a = this.__data__;
        return (u = Bn(a, u)) < 0 ? e : a[u][1];
      }, cn.prototype.has = function(u) {
        return -1 < Bn(this.__data__, u);
      }, cn.prototype.set = function(u, a) {
        var B = this.__data__, Q = Bn(B, u);
        return Q < 0 ? (++this.size, B.push([u, a])) : B[Q][1] = a, this;
      }, m.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new Vt(), map: new (Yu || cn)(), string: new Vt() };
      }, m.prototype.delete = function(u) {
        return u = Qo(this, u).delete(u), this.size -= u ? 1 : 0, u;
      }, m.prototype.get = function(u) {
        return Qo(this, u).get(u);
      }, m.prototype.has = function(u) {
        return Qo(this, u).has(u);
      }, m.prototype.set = function(u, a) {
        var B = Qo(this, u), Q = B.size;
        return B.set(u, a), this.size += B.size == Q ? 0 : 1, this;
      }, vt.prototype.add = vt.prototype.push = function(u) {
        return this.__data__.set(u, i), this;
      }, vt.prototype.has = function(u) {
        return this.__data__.has(u);
      }, Ct.prototype.clear = function() {
        this.__data__ = new cn(), this.size = 0;
      }, Ct.prototype.delete = function(B) {
        var a = this.__data__, B = a.delete(B);
        return this.size = a.size, B;
      }, Ct.prototype.get = function(u) {
        return this.__data__.get(u);
      }, Ct.prototype.has = function(u) {
        return this.__data__.has(u);
      }, Ct.prototype.set = function(u, a) {
        var B = this.__data__;
        if (B instanceof cn) {
          var Q = B.__data__;
          if (!Yu || Q.length < 199)
            return Q.push([u, a]), this.size = ++B.size, this;
          B = this.__data__ = new m(Q);
        }
        return B.set(u, a), this.size = B.size, this;
      };
      var Vn = cd(Re), fn = cd(wi, !0);
      function za(u, a) {
        var B = !0;
        return Vn(u, function(Q, F, H) {
          return B = !!a(Q, F, H);
        }), B;
      }
      function gn(u, a, B) {
        for (var Q = -1, F = u.length; ++Q < F; ) {
          var H, I, L = u[Q], r = a(L);
          r != null && (H === e ? r == r && !SA(r) : B(r, H)) && (H = r, I = L);
        }
        return I;
      }
      function Ut(u, a) {
        var B = [];
        return Vn(u, function(Q, F, H) {
          a(Q, F, H) && B.push(Q);
        }), B;
      }
      function _e(u, a, B, Q, F) {
        var H = -1, I = u.length;
        for (B = B || Si, F = F || []; ++H < I; ) {
          var L = u[H];
          0 < a && B(L) ? 1 < a ? _e(L, a - 1, B, Q, F) : $n(F, L) : Q || (F[F.length] = L);
        }
        return F;
      }
      var gi = Bd(), ou = Bd(!0);
      function Re(u, a) {
        return u && gi(u, a, Me);
      }
      function wi(u, a) {
        return u && ou(u, a, Me);
      }
      function Qi(u, a) {
        return Tn(a, function(B) {
          return et(u[B]);
        });
      }
      function wn(u, a) {
        for (var B = 0, Q = (a = Cn(a, u)).length; u != null && B < Q; )
          u = u[Zt(a[B++])];
        return B && B == Q ? u : e;
      }
      function $a(u, a, B) {
        return a = a(u), CA(u) ? a : $n(a, B(u));
      }
      function NA(u) {
        {
          if (u == null)
            return u === e ? "[object Undefined]" : "[object Null]";
          if (an && an in yA(u)) {
            var a = u, B = rA.call(a, an), Q = a[an];
            try {
              a[an] = e;
              var F = !0;
            } catch {
            }
            var H = ze.call(a);
            return F && (B ? a[an] = Q : delete a[an]), H;
          }
          return ze.call(u);
        }
      }
      function no(u, a) {
        return a < u;
      }
      function nc(u, a) {
        return u != null && rA.call(u, a);
      }
      function Qn(u, a) {
        return u != null && a in yA(u);
      }
      function ro(u, a, B) {
        for (var Q = B ? Ai : Mu, F = u[0].length, H = u.length, I = H, L = N(H), r = 1 / 0, o = []; I--; ) {
          var c = u[I];
          I && a && (c = KA(c, dt(a))), r = xe(c.length, r), L[I] = !B && (a || 120 <= F && 120 <= c.length) ? new vt(I && c) : e;
        }
        var c = u[0], f = -1, C = L[0];
        A:
          for (; ++f < F && o.length < r; ) {
            var D = c[f], U = a ? a(D) : D, D = B || D !== 0 ? D : 0;
            if (!(C ? Ur(C, U) : Q(o, U, B))) {
              for (I = H; --I; ) {
                var y = L[I];
                if (!(y ? Ur(y, U) : Q(u[I], U, B)))
                  continue A;
              }
              C && C.push(U), o.push(D);
            }
          }
        return o;
      }
      function rr(u, a, B) {
        return a = (u = We(u, a = Cn(a, u))) == null ? u : u[Zt(pt(a))], a == null ? e : qe(a, u, B);
      }
      function ur(u) {
        return mA(u) && NA(u) == g;
      }
      function iu(u, a, B, Q, F) {
        return u === a || (u == null || a == null || !mA(u) && !mA(a) ? u != u && a != a : function(H, I, L, r, o, c) {
          var f = CA(H), y = CA(I), C = f ? p : pe(H), y = y ? p : pe(I), U = (C = C == g ? iA : C) == iA, D = (y = y == g ? iA : y) == iA, y = C == y;
          if (y && Te(H)) {
            if (!Te(I))
              return !1;
            U = !(f = !0);
          }
          return y && !U ? (c = c || new Ct(), f || Ae(H) ? Qd(H, I, L, r, o, c) : function(b, x, O, T, R, W, Z) {
            switch (O) {
              case Fe:
                if (b.byteLength != x.byteLength || b.byteOffset != x.byteOffset)
                  return !1;
                b = b.buffer, x = x.buffer;
              case YA:
                return !(b.byteLength != x.byteLength || !W(new pr(b), new pr(x)));
              case K:
              case _:
              case X:
                return Et(+b, +x);
              case S:
                return b.name == x.name && b.message == x.message;
              case J:
              case $:
                return b == x + "";
              case k:
                var uA = Vu;
              case lA:
                var q = 1 & T;
                return uA = uA || Ru, b.size != x.size && !q ? !1 : (q = Z.get(b), q ? q == x : (T |= 2, Z.set(b, x), q = Qd(uA(b), uA(x), T, R, W, Z), Z.delete(b), q));
              case vA:
                if (Gn)
                  return Gn.call(b) == Gn.call(x);
            }
            return !1;
          }(H, I, C, L, r, o, c)) : !(1 & L) && (f = U && rA.call(H, "__wrapped__"), C = D && rA.call(I, "__wrapped__"), f || C) ? (U = f ? H.value() : H, D = C ? I.value() : I, c = c || new Ct(), o(U, D, L, r, c)) : y && (c = c || new Ct(), function(b, x, O, T, R, W) {
            var Z = 1 & O, uA = hd(b), q = uA.length, aA = hd(x).length;
            if (q != aA && !Z)
              return !1;
            for (var sA = q; sA--; ) {
              var AA = uA[sA];
              if (!(Z ? AA in x : rA.call(x, AA)))
                return !1;
            }
            var aA = W.get(b), gA = W.get(x);
            if (aA && gA)
              return aA == x && gA == b;
            var MA = !0;
            W.set(b, x), W.set(x, b);
            for (var Ye = Z; ++sA < q; ) {
              AA = uA[sA];
              var wt, tt = b[AA], De = x[AA];
              if (!((wt = T ? Z ? T(De, tt, AA, x, b, W) : T(tt, De, AA, b, x, W) : wt) === e ? tt === De || R(tt, De, O, T, W) : wt)) {
                MA = !1;
                break;
              }
              Ye = Ye || AA == "constructor";
            }
            return MA && !Ye && (aA = b.constructor, gA = x.constructor, aA != gA) && "constructor" in b && "constructor" in x && !(typeof aA == "function" && aA instanceof aA && typeof gA == "function" && gA instanceof gA) && (MA = !1), W.delete(b), W.delete(x), MA;
          }(H, I, L, r, o, c));
        }(u, a, B, Q, iu, F));
      }
      function Ne(u, a, B, Q) {
        var F = B.length, H = F, I = !Q;
        if (u == null)
          return !H;
        for (u = yA(u); F--; ) {
          var L = B[F];
          if (I && L[2] ? L[1] !== u[L[0]] : !(L[0] in u))
            return !1;
        }
        for (; ++F < H; ) {
          var r = (L = B[F])[0], o = u[r], c = L[1];
          if (I && L[2]) {
            if (o === e && !(r in u))
              return !1;
          } else {
            var f, C = new Ct();
            if (!((f = Q ? Q(o, c, r, u, a, C) : f) === e ? iu(c, o, 3, Q, C) : f))
              return !1;
          }
        }
        return !0;
      }
      function hi(u) {
        var a;
        return !(!LA(u) || (a = u, Ac && Ac in a)) && (et(u) ? Au : Xl).test(jt(u));
      }
      function rc(u) {
        return typeof u == "function" ? u : u == null ? ft : typeof u == "object" ? CA(u) ? Ci(u[0], u[1]) : au(u) : $i(u);
      }
      function Ad(u) {
        if (!cu(u))
          return si(u);
        var a, B = [];
        for (a in yA(u))
          rA.call(u, a) && a != "constructor" && B.push(a);
        return B;
      }
      function ed(u) {
        if (LA(u)) {
          var a, B = cu(u), Q = [];
          for (a in u)
            (a != "constructor" || !B && rA.call(u, a)) && Q.push(a);
          return Q;
        }
        var F = u, H = [];
        if (F != null)
          for (var I in yA(F))
            H.push(I);
        return H;
      }
      function yr(u, a) {
        return u < a;
      }
      function td(u, a) {
        var B = -1, Q = At(u) ? N(u.length) : [];
        return Vn(u, function(F, H, I) {
          Q[++B] = a(F, H, I);
        }), Q;
      }
      function au(u) {
        var a = Wt(u);
        return a.length == 1 && a[0][2] ? sc(a[0][0], a[0][1]) : function(B) {
          return B === u || Ne(B, u, a);
        };
      }
      function Ci(u, a) {
        return Co(u) && Cd(a) ? sc(Zt(u), a) : function(B) {
          var Q = VA(B, u);
          return Q === e && Q === a ? xd(B, u) : iu(a, Q, 3);
        };
      }
      function uo(u, a, B, Q, F) {
        u !== a && gi(a, function(H, I) {
          var L, r, o, c, f, C, U, D, y, b, x, O, T;
          F = F || new Ct(), LA(H) ? (r = a, c = B, f = uo, C = Q, U = F, x = Fo(L = u, o = I), O = Fo(r, o), (T = U.get(O)) || (T = C ? C(x, O, o + "", L, r, U) : e, (r = T === e) && (D = CA(O), y = !D && Te(O), b = !D && !y && Ae(O), T = O, D || y || b ? T = CA(x) ? x : Ce(x) ? Qe(x) : y ? dd(O, !(r = !1)) : b ? sd(O, !(r = !1)) : [] : Or(O) || pn(O) ? pn(T = x) ? T = Mr(x) : LA(x) && !et(x) || (T = wA(O)) : r = !1), r && (U.set(O, T), f(T, O, c, C, U), U.delete(O))), Rt(L, o, T)) : (D = Q ? Q(Fo(u, I), H, I + "", u, a, F) : e, Rt(u, I, D = D === e ? H : D));
        }, lt);
      }
      function nd(u, a) {
        var B = u.length;
        if (B)
          return Yt(a += a < 0 ? B : 0, B) ? u[a] : e;
      }
      function Fi(H, a, B) {
        a = a.length ? KA(a, function(L) {
          return CA(L) ? function(r) {
            return wn(r, L.length === 1 ? L[0] : L);
          } : L;
        }) : [ft];
        var Q = -1;
        a = KA(a, dt(QA()));
        var F = td(H, function(L, r, o) {
          return { criteria: KA(a, function(c) {
            return c(L);
          }), index: ++Q, value: L };
        }), H = function(L, r) {
          for (var o = B, c = -1, f = L.criteria, C = r.criteria, U = f.length, D = o.length; ++c < U; ) {
            var y, b = yi(f[c], C[c]);
            if (b)
              return D <= c ? b : (y = o[c], b * (y == "desc" ? -1 : 1));
          }
          return L.index - r.index;
        }, I = F.length;
        for (F.sort(H); I--; )
          F[I] = F[I].value;
        return F;
      }
      function uc(u, a, B) {
        for (var Q = -1, F = a.length, H = {}; ++Q < F; ) {
          var I = a[Q], L = wn(u, I);
          B(L, I) && du(H, Cn(I, u), L);
        }
        return H;
      }
      function oo(u, a, B, Q) {
        var F = Q ? er : XA, H = -1, I = a.length, L = u;
        for (u === a && (a = Qe(a)), B && (L = KA(u, dt(B))); ++H < I; )
          for (var r = 0, o = a[H], c = B ? B(o) : o; -1 < (r = F(L, c, r, Q)); )
            L !== u && ii.call(L, r, 1), ii.call(u, r, 1);
        return u;
      }
      function rd(u, a) {
        for (var B = u ? a.length : 0, Q = B - 1; B--; ) {
          var F, H = a[B];
          B != Q && H === F || (Yt(F = H) ? ii.call(u, H, 1) : Bt(u, H));
        }
      }
      function Ui(u, a) {
        return u + mr(li() * (a - u + 1));
      }
      function pi(u, a) {
        var B = "";
        if (!(!u || a < 1 || s < a))
          for (; a % 2 && (B += u), (a = mr(a / 2)) && (u += u), a; )
            ;
        return B;
      }
      function pA(u, a) {
        return xr(Un(u, a, ft), u + "");
      }
      function oc(u) {
        return Kt(Ee(u));
      }
      function ic(u, a) {
        return u = Ee(u), po(u, Hr(a, 0, u.length));
      }
      function du(u, a, B, Q) {
        if (LA(u))
          for (var F = -1, H = (a = Cn(a, u)).length, I = H - 1, L = u; L != null && ++F < H; ) {
            var r, o = Zt(a[F]), c = B;
            if (o === "__proto__" || o === "constructor" || o === "prototype")
              return u;
            Ft(L, o, c = F != I && (r = L[o], (c = Q ? Q(r, o, L) : e) === e) ? LA(r) ? r : Yt(a[F + 1]) ? [] : {} : c), L = L[o];
          }
        return u;
      }
      var mi = ju ? function(u, a) {
        return ju.set(u, a), u;
      } : ft, Se = Xu ? function(u, a) {
        return Xu(u, "toString", { configurable: !0, enumerable: !1, value: Td(a), writable: !0 });
      } : ft;
      function ud(u) {
        return po(Ee(u));
      }
      function ct(u, a, B) {
        var Q = -1, F = u.length;
        (B = F < B ? F : B) < 0 && (B += F), F = B < (a = a < 0 ? F < -a ? 0 : F + a : a) ? 0 : B - a >>> 0, a >>>= 0;
        for (var H = N(F); ++Q < F; )
          H[Q] = u[Q + a];
        return H;
      }
      function bA(u, a) {
        var B;
        return Vn(u, function(Q, F, H) {
          return !(B = a(Q, F, H));
        }), !!B;
      }
      function Ei(u, a, B) {
        var Q = 0, F = u == null ? Q : u.length;
        if (typeof a == "number" && a == a && F <= 2147483647) {
          for (; Q < F; ) {
            var H = Q + F >>> 1, I = u[H];
            I !== null && !SA(I) && (B ? I <= a : I < a) ? Q = 1 + H : F = H;
          }
          return F;
        }
        return od(u, a, ft, B);
      }
      function od(u, a, B, Q) {
        var F = 0, H = u == null ? 0 : u.length;
        if (H === 0)
          return 0;
        for (var I = (a = B(a)) != a, L = a === null, r = SA(a), o = a === e; F < H; ) {
          var c = mr((F + H) / 2), f = B(u[c]), C = f !== e, U = f === null, y = f == f, D = SA(f), y = I ? Q || y : o ? y && (Q || C) : L ? y && C && (Q || !U) : r ? y && C && !U && (Q || !D) : !U && !D && (Q ? f <= a : f < a);
          y ? F = c + 1 : H = c;
        }
        return xe(H, 4294967294);
      }
      function su(u, a) {
        for (var B = -1, Q = u.length, F = 0, H = []; ++B < Q; ) {
          var I, L = u[B], r = a ? a(L) : L;
          B && Et(r, I) || (I = r, H[F++] = L === 0 ? 0 : L);
        }
        return H;
      }
      function id(u) {
        return typeof u == "number" ? u : SA(u) ? l : +u;
      }
      function WA(u) {
        var a;
        return typeof u == "string" ? u : CA(u) ? KA(u, WA) + "" : SA(u) ? $u ? $u.call(u) : "" : (a = u + "") == "0" && 1 / u == -1 / 0 ? "-0" : a;
      }
      function or(u, a, B) {
        var Q = -1, F = Mu, H = u.length, I = !0, L = [], r = L;
        if (B)
          I = !1, F = Ai;
        else if (200 <= H) {
          var o = a ? null : vi(u);
          if (o)
            return Ru(o);
          I = !1, F = Ur, r = new vt();
        } else
          r = a ? [] : L;
        A:
          for (; ++Q < H; ) {
            var f = u[Q], c = a ? a(f) : f, f = B || f !== 0 ? f : 0;
            if (I && c == c) {
              for (var C = r.length; C--; )
                if (r[C] === c)
                  continue A;
              a && r.push(c), L.push(f);
            } else
              F(r, c, B) || (r !== L && r.push(c), L.push(f));
          }
        return L;
      }
      function Bt(u, a) {
        return (u = We(u, a = Cn(a, u))) == null || delete u[Zt(pt(a))];
      }
      function ac(u, a, B, Q) {
        return du(u, a, B(wn(u, a)), Q);
      }
      function br(u, a, B, Q) {
        for (var F = u.length, H = Q ? F : -1; (Q ? H-- : ++H < F) && a(u[H], H, u); )
          ;
        return B ? ct(u, Q ? 0 : H, Q ? H + 1 : F) : ct(u, Q ? H + 1 : 0, Q ? F : H);
      }
      function Di(u, a) {
        var B = u;
        return at(a, function(Q, F) {
          return F.func.apply(F.thisArg, $n([Q], F.args));
        }, B = u instanceof xA ? u.value() : B);
      }
      function Hi(u, a, B) {
        var Q = u.length;
        if (Q < 2)
          return Q ? or(u[0]) : [];
        for (var F = -1, H = N(Q); ++F < Q; )
          for (var I = u[F], L = -1; ++L < Q; )
            L != F && (H[F] = to(H[F] || I, u[L], a, B));
        return or(_e(H, 1), a, B);
      }
      function ad(u, a, B) {
        for (var Q = -1, F = u.length, H = a.length, I = {}; ++Q < F; ) {
          var L = Q < H ? a[Q] : e;
          B(I, u[Q], L);
        }
        return I;
      }
      function $e(u) {
        return Ce(u) ? u : [];
      }
      function hn(u) {
        return typeof u == "function" ? u : ft;
      }
      function Cn(u, a) {
        return CA(u) ? u : Co(u, a) ? [u] : ki(JA(u));
      }
      var Wi = pA;
      function Rn(u, a, B) {
        var Q = u.length;
        return B = B === e ? Q : B, !a && Q <= B ? u : ct(u, a, B);
      }
      var io = kn || function(u) {
        return Ve.clearTimeout(u);
      };
      function dd(u, a) {
        return a ? u.slice() : (a = u.length, a = PA ? PA(a) : new u.constructor(a), u.copy(a), a);
      }
      function ao(u) {
        var a = new u.constructor(u.byteLength);
        return new pr(a).set(new pr(u)), a;
      }
      function sd(u, a) {
        return a = a ? ao(u.buffer) : u.buffer, new u.constructor(a, u.byteOffset, u.length);
      }
      function yi(u, a) {
        if (u !== a) {
          var B = u !== e, Q = u === null, F = u == u, H = SA(u), I = a !== e, L = a === null, r = a == a, o = SA(a);
          if (!L && !o && !H && a < u || H && I && r && !L && !o || Q && I && r || !B && r || !F)
            return 1;
          if (!Q && !H && !o && u < a || o && B && F && !Q && !H || L && B && F || !I && F || !r)
            return -1;
        }
        return 0;
      }
      function bi(u, a, B, Q) {
        for (var F = -1, H = u.length, I = B.length, L = -1, r = a.length, o = oe(H - I, 0), c = N(r + o), f = !Q; ++L < r; )
          c[L] = a[L];
        for (; ++F < I; )
          (f || F < H) && (c[B[F]] = u[F]);
        for (; o--; )
          c[L++] = u[F++];
        return c;
      }
      function Nn(u, a, B, Q) {
        for (var F = -1, H = u.length, I = -1, L = B.length, r = -1, o = a.length, c = oe(H - L, 0), f = N(c + o), C = !Q; ++F < c; )
          f[F] = u[F];
        for (var U = F; ++r < o; )
          f[U + r] = a[r];
        for (; ++I < L; )
          (C || F < H) && (f[U + B[I]] = u[F++]);
        return f;
      }
      function Qe(u, a) {
        var B = -1, Q = u.length;
        for (a = a || N(Q); ++B < Q; )
          a[B] = u[B];
        return a;
      }
      function Pt(u, a, B, Q) {
        var F = !B;
        B = B || {};
        for (var H = -1, I = a.length; ++H < I; ) {
          var L = a[H], r = Q ? Q(B[L], u[L], L, B, u) : e;
          (F ? ln : Ft)(B, L, r = r === e ? u[L] : r);
        }
        return B;
      }
      function so(u, a) {
        return function(B, Q) {
          var F = CA(B) ? it : Nt, H = a ? a() : {};
          return F(B, u, QA(Q, 2), H);
        };
      }
      function ir(u) {
        return pA(function(a, B) {
          var Q = -1, F = B.length, I = 1 < F ? B[F - 1] : e, H = 2 < F ? B[2] : e, I = 3 < u.length && typeof I == "function" ? (F--, I) : e;
          for (H && he(B[0], B[1], H) && (I = F < 3 ? e : I, F = 1), a = yA(a); ++Q < F; ) {
            var L = B[Q];
            L && u(a, L, Q, I);
          }
          return a;
        });
      }
      function cd(u, a) {
        return function(B, Q) {
          if (B != null) {
            if (!At(B))
              return u(B, Q);
            for (var F = B.length, H = a ? F : -1, I = yA(B); (a ? H-- : ++H < F) && Q(I[H], H, I) !== !1; )
              ;
          }
          return B;
        };
      }
      function Bd(u) {
        return function(a, B, Q) {
          for (var F = -1, H = yA(a), I = Q(a), L = I.length; L--; ) {
            var r = I[u ? L : ++F];
            if (B(H[r], r, H) === !1)
              break;
          }
          return a;
        };
      }
      function ld(u) {
        return function(a) {
          var Q = Le(a = JA(a)) ? kt(a) : e, B = Q ? Q[0] : a.charAt(0), Q = Q ? Rn(Q, 1).join("") : a.slice(1);
          return B[u]() + Q;
        };
      }
      function Ir(u) {
        return function(a) {
          return at(Od(bc(a).replace(Ps, "")), u, "");
        };
      }
      function Oe(u) {
        return function() {
          var a = arguments;
          switch (a.length) {
            case 0:
              return new u();
            case 1:
              return new u(a[0]);
            case 2:
              return new u(a[0], a[1]);
            case 3:
              return new u(a[0], a[1], a[2]);
            case 4:
              return new u(a[0], a[1], a[2], a[3]);
            case 5:
              return new u(a[0], a[1], a[2], a[3], a[4]);
            case 6:
              return new u(a[0], a[1], a[2], a[3], a[4], a[5]);
            case 7:
              return new u(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
          }
          var B = ru(u.prototype), Q = u.apply(B, a);
          return LA(Q) ? Q : B;
        };
      }
      function Fn(u, a, B) {
        var Q = Oe(u);
        return function F() {
          for (var H = arguments.length, I = N(H), L = H, r = Kr(F); L--; )
            I[L] = arguments[L];
          return r = H < 3 && I[0] !== r && I[H - 1] !== r ? [] : Mn(I, r), (H -= r.length) < B ? go(u, a, Bo, F.placeholder, e, I, r, e, e, B - H) : qe(this && this !== Ve && this instanceof F ? Q : u, this, I);
        };
      }
      function co(u) {
        return function(a, I, Q) {
          var F, H = yA(a), I = (At(a) || (F = QA(I, 3), a = Me(a), I = function(L) {
            return F(H[L], L, H);
          }), u(a, I, Q));
          return -1 < I ? H[F ? a[I] : I] : e;
        };
      }
      function vr(u) {
        return Jt(function(a) {
          var B = a.length, Q = B, F = Gt.prototype.thru;
          for (u && a.reverse(); Q--; ) {
            var H = a[Q];
            if (typeof H != "function")
              throw new Y(n);
            F && !r && wo(H) == "wrapper" && (r = new Gt([], !0));
          }
          for (Q = r ? Q : B; ++Q < B; )
            var I = wo(H = a[Q]), L = I == "wrapper" ? Xt(H) : e, r = L && Oi(L[0]) && L[1] == 424 && !L[4].length && L[9] == 1 ? r[wo(L[0])].apply(r, L[3]) : H.length == 1 && Oi(H) ? r[I]() : r.thru(H);
          return function() {
            var o = arguments, c = o[0];
            if (r && o.length == 1 && CA(c))
              return r.plant(c).value();
            for (var f = 0, C = B ? a[f].apply(this, o) : c; ++f < B; )
              C = a[f].call(this, C);
            return C;
          };
        });
      }
      function Bo(u, a, B, Q, F, H, I, L, r, o) {
        var c = 128 & a, f = 1 & a, C = 2 & a, U = 24 & a, D = 512 & a, y = C ? e : Oe(u);
        return function b() {
          for (var x, O, T = arguments.length, R = N(T), W = T; W--; )
            R[W] = arguments[W];
          return U && (O = function(Z, uA) {
            for (var q = Z.length, sA = 0; q--; )
              Z[q] === uA && ++sA;
            return sA;
          }(R, x = Kr(b))), Q && (R = bi(R, Q, F, U)), H && (R = Nn(R, H, I, U)), T -= O, U && T < o ? (O = Mn(R, x), go(u, a, Bo, b.placeholder, B, R, O, L, r, o - T)) : (x = f ? B : this, O = C ? x[u] : u, T = R.length, L ? R = function(Z, uA) {
            for (var q = Z.length, sA = xe(uA.length, q), AA = Qe(Z); sA--; ) {
              var aA = uA[sA];
              Z[sA] = Yt(aA, q) ? AA[aA] : e;
            }
            return Z;
          }(R, L) : D && 1 < T && R.reverse(), c && r < T && (R.length = r), (O = this && this !== Ve && this instanceof b ? y || Oe(O) : O).apply(x, R));
        };
      }
      function fd(u, a) {
        return function(B, Q) {
          return B = B, F = u, H = a(Q), I = {}, Re(B, function(L, r, o) {
            F(I, H(L), r, o);
          }), I;
          var F, H, I;
        };
      }
      function lo(u, a) {
        return function(B, Q) {
          var F;
          if (B === e && Q === e)
            return a;
          if (B !== e && (F = B), Q !== e) {
            if (F === e)
              return Q;
            Q = (typeof B == "string" || typeof Q == "string" ? (B = WA(B), WA) : (B = id(B), id))(Q), F = u(B, Q);
          }
          return F;
        };
      }
      function ar(u) {
        return Jt(function(a) {
          return a = KA(a, dt(QA())), pA(function(B) {
            var Q = this;
            return u(a, function(F) {
              return qe(F, Q, B);
            });
          });
        });
      }
      function dr(u, a) {
        var B = (a = a === e ? " " : WA(a)).length;
        return B < 2 ? B ? pi(a, u) : a : (B = pi(a, Wu(u / qr(a))), Le(a) ? Rn(kt(B), 0, u).join("") : B.slice(0, u));
      }
      function $l(u, a, B, Q) {
        var F = 1 & a, H = Oe(u);
        return function I() {
          for (var L = -1, r = arguments.length, o = -1, c = Q.length, f = N(c + r), C = this && this !== Ve && this instanceof I ? H : u; ++o < c; )
            f[o] = Q[o];
          for (; r--; )
            f[o++] = arguments[++L];
          return qe(C, F ? B : this, f);
        };
      }
      function gd(u) {
        return function(a, B, Q) {
          Q && typeof Q != "number" && he(a, B, Q) && (B = Q = e), a = $t(a), B === e ? (B = a, a = 0) : B = $t(B), Q = Q === e ? a < B ? 1 : -1 : $t(Q);
          for (var F = a, H = Q, I = u, L = -1, r = oe(Wu((B - F) / (H || 1)), 0), o = N(r); r--; )
            o[I ? r : ++L] = F, F += H;
          return o;
        };
      }
      function fo(u) {
        return function(a, B) {
          return typeof a == "string" && typeof B == "string" || (a = ie(a), B = ie(B)), u(a, B);
        };
      }
      function go(u, a, B, Q, f, C, I, L, r, o) {
        var c = 8 & a, f = (4 & (a = (a | (c ? 32 : 64)) & ~(c ? 64 : 32)) || (a &= -4), [u, a, f, c ? C : e, c ? I : e, c ? e : C, c ? e : I, L, r, o]), C = B.apply(e, f);
        return Oi(u) && Ti(C, f), C.placeholder = Q, Fd(C, u, a);
      }
      function Ii(u) {
        var a = HA[u];
        return function(B, Q) {
          var F;
          return B = ie(B), (Q = Q == null ? 0 : xe(EA(Q), 292)) && eu(B) ? (F = (JA(B) + "e").split("e"), +((F = (JA(a(F[0] + "e" + (+F[1] + Q))) + "e").split("e"))[0] + "e" + (+F[1] - Q))) : a(B);
        };
      }
      var vi = we && 1 / Ru(new we([, -0]))[1] == 1 / 0 ? function(u) {
        return new we(u);
      } : Ko;
      function Ki(u) {
        return function(a) {
          var B, Q, F, H = pe(a);
          return H == k ? Vu(a) : H == lA ? (H = a, Q = -1, F = Array(H.size), H.forEach(function(I) {
            F[++Q] = [I, I];
          }), F) : KA(u(B = a), function(I) {
            return [I, B[I]];
          });
        };
      }
      function Lt(u, a, B, Q, F, H, I, L) {
        var r, o, c, f, C, U, D, y, b, x, O, T, R, W = 2 & a;
        if (W || typeof u == "function")
          return (r = Q ? Q.length : 0) || (a &= -97, Q = F = e), I = I === e ? I : oe(EA(I), 0), L = L === e ? L : EA(L), r -= F ? F.length : 0, 64 & a && (c = Q, y = F, Q = F = e), o = W ? e : Xt(u), c = [u, a, B, Q, F, c, y, H, I, L], o && (y = o, I = (H = c)[1], x = y[1], T = (O = I | x) < 131, R = x == 128 && I == 8 || x == 128 && I == 256 && H[7].length <= y[8] || x == 384 && y[7].length <= y[8] && I == 8, T || R) && (1 & x && (H[2] = y[2], O |= 1 & I ? 0 : 4), (T = y[3]) && (b = H[3], H[3] = b ? bi(b, T, y[4]) : T, H[4] = b ? Mn(H[3], d) : y[4]), (T = y[5]) && (b = H[5], H[5] = b ? Nn(b, T, y[6]) : T, H[6] = b ? Mn(H[5], d) : y[6]), (T = y[7]) && (H[7] = T), 128 & x && (H[8] = H[8] == null ? y[8] : xe(H[8], y[8])), H[9] == null && (H[9] = y[9]), H[0] = y[0], H[1] = O), u = c[0], a = c[1], B = c[2], Q = c[3], F = c[4], !(L = c[9] = c[9] === e ? W ? 0 : u.length : oe(c[9] - r, 0)) && 24 & a && (a &= -25), R = a && a != 1 ? a == 8 || a == 16 ? Fn(u, a, L) : a != 32 && a != 33 || F.length ? Bo.apply(e, c) : $l(u, a, B, Q) : (C = B, U = 1 & a, D = Oe(f = u), function Z() {
            return (this && this !== Ve && this instanceof Z ? D : f).apply(U ? C : this, arguments);
          }), Fd((o ? mi : Ti)(R, c), u, a);
        throw new Y(n);
      }
      function dc(u, a, B, Q) {
        return u === e || Et(u, BA[B]) && !rA.call(Q, B) ? a : u;
      }
      function wd(u, a, B, Q, F, H) {
        return LA(u) && LA(a) && (H.set(a, u), uo(u, a, e, wd, H), H.delete(a)), u;
      }
      function Li(u) {
        return Or(u) ? e : u;
      }
      function Qd(u, a, B, Q, F, H) {
        var I = 1 & B, L = u.length, r = a.length;
        if (L != r && !(I && L < r))
          return !1;
        var r = H.get(u), o = H.get(a);
        if (r && o)
          return r == a && o == u;
        var c = -1, f = !0, C = 2 & B ? new vt() : e;
        for (H.set(u, a), H.set(a, u); ++c < L; ) {
          var U, D = u[c], y = a[c];
          if ((U = Q ? I ? Q(y, D, c, a, u, H) : Q(D, y, c, u, a, H) : U) !== e) {
            if (U)
              continue;
            f = !1;
            break;
          }
          if (C) {
            if (!ei(a, function(b, x) {
              return !Ur(C, x) && (D === b || F(D, b, B, Q, H)) && C.push(x);
            })) {
              f = !1;
              break;
            }
          } else if (D !== y && !F(D, y, B, Q, H)) {
            f = !1;
            break;
          }
        }
        return H.delete(u), H.delete(a), f;
      }
      function Jt(u) {
        return xr(Un(u, e, mo), u + "");
      }
      function hd(u) {
        return $a(u, Me, ho);
      }
      function xi(u) {
        return $a(u, lt, _i);
      }
      var Xt = ju ? function(u) {
        return ju.get(u);
      } : Ko;
      function wo(u) {
        for (var a = u.name + "", B = tu[a], Q = rA.call(tu, a) ? B.length : 0; Q--; ) {
          var F = B[Q], H = F.func;
          if (H == null || H == u)
            return F.name;
        }
        return a;
      }
      function Kr(u) {
        return (rA.call(E, "placeholder") ? E : u).placeholder;
      }
      function QA() {
        var u = (u = E.iteratee || vo) === vo ? rc : u;
        return arguments.length ? u(arguments[0], arguments[1]) : u;
      }
      function Qo(F, a) {
        var B, Q, F = F.__data__;
        return ((Q = typeof (B = a)) == "string" || Q == "number" || Q == "symbol" || Q == "boolean" ? B !== "__proto__" : B === null) ? F[typeof a == "string" ? "string" : "hash"] : F.map;
      }
      function Wt(u) {
        for (var a = Me(u), B = a.length; B--; ) {
          var Q = a[B], F = u[Q];
          a[B] = [Q, F, Cd(F)];
        }
        return a;
      }
      function Pn(u, a) {
        return a = a, u = (u = u) == null ? e : u[a], hi(u) ? u : e;
      }
      var ho = di ? function(u) {
        return u == null ? [] : (u = yA(u), Tn(di(u), function(a) {
          return Pu.call(u, a);
        }));
      } : Lo, _i = di ? function(u) {
        for (var a = []; u; )
          $n(a, ho(u)), u = oi(u);
        return a;
      } : Lo, pe = NA;
      function Lr(u, a, B) {
        for (var Q = -1, F = (a = Cn(a, u)).length, H = !1; ++Q < F; ) {
          var I = Zt(a[Q]);
          if (!(H = u != null && B(u, I)))
            break;
          u = u[I];
        }
        return H || ++Q != F ? H : !!(F = u == null ? 0 : u.length) && Zi(F) && Yt(I, F) && (CA(u) || pn(u));
      }
      function wA(u) {
        return typeof u.constructor != "function" || cu(u) ? {} : ru(oi(u));
      }
      function Si(u) {
        return CA(u) || pn(u) || !!(ec && u && u[ec]);
      }
      function Yt(u, a) {
        var B = typeof u;
        return !!(a = a ?? s) && (B == "number" || B != "symbol" && Yl.test(u)) && -1 < u && u % 1 == 0 && u < a;
      }
      function he(u, a, B) {
        var Q;
        return !!LA(B) && !!((Q = typeof a) == "number" ? At(B) && Yt(a, B.length) : Q == "string" && a in B) && Et(B[a], u);
      }
      function Co(u, a) {
        var B;
        if (!CA(u))
          return (B = typeof u) == "number" || B == "symbol" || B == "boolean" || u == null || SA(u) || Sl.test(u) || !Ts.test(u) || a != null && u in yA(a);
      }
      function Oi(u) {
        var a = wo(u), B = E[a];
        return typeof B == "function" && a in xA.prototype && (u === B || (a = Xt(B)) && u === a[0]);
      }
      (dn && pe(new dn(new ArrayBuffer(1))) != Fe || Yu && pe(new Yu()) != k || se && pe(se.resolve()) != z || we && pe(new we()) != lA || OA && pe(new OA()) != IA) && (pe = function(B) {
        var a = NA(B), B = a == iA ? B.constructor : e, B = B ? jt(B) : "";
        if (B)
          switch (B) {
            case sn:
              return Fe;
            case qu:
              return k;
            case zu:
              return z;
            case nu:
              return lA;
            case TA:
              return IA;
          }
        return a;
      });
      var Xe = hA ? et : xo;
      function cu(u) {
        var a = u && u.constructor;
        return u === (typeof a == "function" && a.prototype || BA);
      }
      function Cd(u) {
        return u == u && !LA(u);
      }
      function sc(u, a) {
        return function(B) {
          return B != null && B[u] === a && (a !== e || u in yA(B));
        };
      }
      function Un(u, a, B) {
        return a = oe(a === e ? u.length - 1 : a, 0), function() {
          for (var Q = arguments, F = -1, H = oe(Q.length - a, 0), I = N(H); ++F < H; )
            I[F] = Q[a + F];
          for (var F = -1, L = N(a + 1); ++F < a; )
            L[F] = Q[F];
          return L[a] = B(I), qe(u, this, L);
        };
      }
      function We(u, a) {
        return a.length < 2 ? u : wn(u, ct(a, 0, -1));
      }
      function Fo(u, a) {
        if ((a !== "constructor" || typeof u[a] != "function") && a != "__proto__")
          return u[a];
      }
      var Ti = Ud(mi), Uo = ai || function(u, a) {
        return Ve.setTimeout(u, a);
      }, xr = Ud(Se);
      function Fd(u, I, B) {
        var Q, F, H, I = I + "";
        return xr(u, (F = (I = (I = u = I).match(Gl)) ? I[1].split(_a) : [], H = B, ht(h, function(L) {
          var r = "_." + L[0];
          H & L[1] && !Mu(F, r) && F.push(r);
        }), I = F.sort(), (B = I.length) ? (I[Q = B - 1] = (1 < B ? "& " : "") + I[Q], I = I.join(2 < B ? ", " : " "), u.replace(kl, `{
/* [wrapped with ` + I + `] */
`)) : u));
      }
      function Ud(u) {
        var a = 0, B = 0;
        return function() {
          var Q = ci(), F = 16 - (Q - B);
          if (B = Q, 0 < F) {
            if (800 <= ++a)
              return arguments[0];
          } else
            a = 0;
          return u.apply(e, arguments);
        };
      }
      function po(u, a) {
        var B = -1, Q = u.length, F = Q - 1;
        for (a = a === e ? Q : a; ++B < a; ) {
          var H = Ui(B, F), I = u[H];
          u[H] = u[B], u[B] = I;
        }
        return u.length = a, u;
      }
      Mi = (kn = Sr(kn = function(u) {
        var a = [];
        return u.charCodeAt(0) === 46 && a.push(""), u.replace(Ol, function(B, Q, F, H) {
          a.push(F ? H.replace(Rl, "$1") : Q || B);
        }), a;
      }, function(u) {
        return Mi.size === 500 && Mi.clear(), u;
      })).cache;
      var Mi, ki = kn;
      function Zt(u) {
        var a;
        return typeof u == "string" || SA(u) ? u : (a = u + "") == "0" && 1 / u == -1 / 0 ? "-0" : a;
      }
      function jt(u) {
        if (u != null) {
          try {
            return UA.call(u);
          } catch {
          }
          try {
            return u + "";
          } catch {
          }
        }
        return "";
      }
      function Gi(u) {
        var a;
        return u instanceof xA ? u.clone() : ((a = new Gt(u.__wrapped__, u.__chain__)).__actions__ = Qe(u.__actions__), a.__index__ = u.__index__, a.__values__ = u.__values__, a);
      }
      dn = pA(function(u, a) {
        return Ce(u) ? to(u, _e(a, 1, Ce, !0)) : [];
      }), se = pA(function(u, a) {
        var B = pt(a);
        return Ce(B) && (B = e), Ce(u) ? to(u, _e(a, 1, Ce, !0), QA(B, 2)) : [];
      }), OA = pA(function(u, a) {
        var B = pt(a);
        return Ce(B) && (B = e), Ce(u) ? to(u, _e(a, 1, Ce, !0), e, B) : [];
      });
      function pd(u, a, B) {
        var Q = u == null ? 0 : u.length;
        return Q ? ((B = B == null ? 0 : EA(B)) < 0 && (B = oe(Q + B, 0)), Yr(u, QA(a, 3), B)) : -1;
      }
      function md(u, a, B) {
        var Q, F = u == null ? 0 : u.length;
        return F ? (Q = F - 1, B !== e && (Q = EA(B), Q = B < 0 ? oe(F + Q, 0) : xe(Q, F - 1)), Yr(u, QA(a, 3), Q, !0)) : -1;
      }
      function mo(u) {
        return u != null && u.length ? _e(u, 1) : [];
      }
      function Vi(u) {
        return u && u.length ? u[0] : e;
      }
      hA = pA(function(u) {
        var a = KA(u, $e);
        return a.length && a[0] === u[0] ? ro(a) : [];
      }), ai = pA(function(u) {
        var a = pt(u), B = KA(u, $e);
        return a === pt(B) ? a = e : B.pop(), B.length && B[0] === u[0] ? ro(B, QA(a, 2)) : [];
      }), Se = pA(function(u) {
        var a = pt(u), B = KA(u, $e);
        return (a = typeof a == "function" ? a : e) && B.pop(), B.length && B[0] === u[0] ? ro(B, e, a) : [];
      });
      function pt(u) {
        var a = u == null ? 0 : u.length;
        return a ? u[a - 1] : e;
      }
      kn = pA(qt);
      function qt(u, a) {
        return u && u.length && a && a.length ? oo(u, a) : u;
      }
      var _r = Jt(function(u, a) {
        var B = u == null ? 0 : u.length, Q = qa(u, a);
        return rd(u, KA(a, function(F) {
          return Yt(F, B) ? +F : F;
        }).sort(yi)), Q;
      });
      function Ri(u) {
        return u == null ? u : tc.call(u);
      }
      var cc = pA(function(u) {
        return or(_e(u, 1, Ce, !0));
      }), Bc = pA(function(u) {
        var a = pt(u);
        return Ce(a) && (a = e), or(_e(u, 1, Ce, !0), QA(a, 2));
      }), lc = pA(function(u) {
        var a = typeof (a = pt(u)) == "function" ? a : e;
        return or(_e(u, 1, Ce, !0), e, a);
      });
      function Ni(u) {
        var a;
        return u && u.length ? (a = 0, u = Tn(u, function(B) {
          return Ce(B) && (a = oe(B.length, a), 1);
        }), tr(a, function(B) {
          return KA(u, Gu(B));
        })) : [];
      }
      function mt(u, a) {
        return u && u.length ? (u = Ni(u), a == null ? u : KA(u, function(B) {
          return qe(a, e, B);
        })) : [];
      }
      var fc = pA(function(u, a) {
        return Ce(u) ? to(u, a) : [];
      }), Af = pA(function(u) {
        return Hi(Tn(u, Ce));
      }), Ed = pA(function(u) {
        var a = pt(u);
        return Ce(a) && (a = e), Hi(Tn(u, Ce), QA(a, 2));
      }), ef = pA(function(u) {
        var a = typeof (a = pt(u)) == "function" ? a : e;
        return Hi(Tn(u, Ce), e, a);
      }), tf = pA(Ni), nf = pA(function(u) {
        var a = u.length, a = typeof (a = 1 < a ? u[a - 1] : e) == "function" ? (u.pop(), a) : e;
        return mt(u, a);
      });
      function Pi(u) {
        return u = E(u), u.__chain__ = !0, u;
      }
      function Eo(u, a) {
        return a(u);
      }
      var rf = Jt(function(u) {
        function a(H) {
          return qa(H, u);
        }
        var B = u.length, Q = B ? u[0] : 0, F = this.__wrapped__;
        return !(1 < B || this.__actions__.length) && F instanceof xA && Yt(Q) ? ((F = F.slice(Q, +Q + (B ? 1 : 0))).__actions__.push({ func: Eo, args: [a], thisArg: e }), new Gt(F, this.__chain__).thru(function(H) {
          return B && !H.length && H.push(e), H;
        })) : this.thru(a);
      }), uf = so(function(u, a, B) {
        rA.call(u, B) ? ++u[B] : ln(u, B, 1);
      }), of = co(pd), af = co(md);
      function gc(u, a) {
        return (CA(u) ? ht : Vn)(u, QA(a, 3));
      }
      function wc(u, a) {
        return (CA(u) ? Zs : fn)(u, QA(a, 3));
      }
      var Qc = so(function(u, a, B) {
        rA.call(u, B) ? u[B].push(a) : ln(u, B, [a]);
      }), Ji = pA(function(u, a, B) {
        var Q = -1, F = typeof a == "function", H = At(u) ? N(u.length) : [];
        return Vn(u, function(I) {
          H[++Q] = F ? qe(a, I, B) : rr(I, a, B);
        }), H;
      }), df = so(function(u, a, B) {
        ln(u, B, a);
      });
      function Xi(u, a) {
        return (CA(u) ? KA : td)(u, QA(a, 3));
      }
      var sf = so(function(u, a, B) {
        u[B ? 0 : 1].push(a);
      }, function() {
        return [[], []];
      }), cf = pA(function(u, a) {
        var B;
        return u == null ? [] : (1 < (B = a.length) && he(u, a[0], a[1]) ? a = [] : 2 < B && he(a[0], a[1], a[2]) && (a = [a[0]]), Fi(u, _e(a, 1), []));
      }), Do = yd || function() {
        return Ve.Date.now();
      };
      function Dd(u, a, B) {
        return a = B ? e : a, a = u && a == null ? u.length : a, Lt(u, 128, e, e, e, e, a);
      }
      function hc(u, a) {
        var B;
        if (typeof a != "function")
          throw new Y(n);
        return u = EA(u), function() {
          return 0 < --u && (B = a.apply(this, arguments)), u <= 1 && (a = e), B;
        };
      }
      var Hd = pA(function(u, a, B) {
        var Q, F = 1;
        return B.length && (Q = Mn(B, Kr(Hd)), F |= 32), Lt(u, F, a, B, Q);
      }), Cc = pA(function(u, a, B) {
        var Q, F = 3;
        return B.length && (Q = Mn(B, Kr(Cc)), F |= 32), Lt(a, F, u, B, Q);
      });
      function Ho(u, a, B) {
        var Q, F, H, I, L, r, o = 0, c = !1, f = !1, C = !0;
        if (typeof u != "function")
          throw new Y(n);
        function U(O) {
          var T = Q, R = F;
          return Q = F = e, o = O, I = u.apply(R, T);
        }
        function D(O) {
          var T = O - r;
          return r === e || a <= T || T < 0 || f && H <= O - o;
        }
        function y() {
          var O, T = Do();
          if (D(T))
            return b(T);
          L = Uo(y, (O = a - ((T = T) - r), f ? xe(O, H - (T - o)) : O));
        }
        function b(O) {
          return L = e, C && Q ? U(O) : (Q = F = e, I);
        }
        function x() {
          var O = Do(), T = D(O);
          if (Q = arguments, F = this, r = O, T) {
            if (L === e)
              return o = O = r, L = Uo(y, a), c ? U(O) : I;
            if (f)
              return io(L), L = Uo(y, a), U(r);
          }
          return L === e && (L = Uo(y, a)), I;
        }
        return a = ie(a) || 0, LA(B) && (c = !!B.leading, f = "maxWait" in B, H = f ? oe(ie(B.maxWait) || 0, a) : H, C = "trailing" in B ? !!B.trailing : C), x.cancel = function() {
          L !== e && io(L), o = 0, Q = r = F = L = e;
        }, x.flush = function() {
          return L === e ? I : b(Do());
        }, x;
      }
      var yd = pA(function(u, a) {
        return eo(u, 1, a);
      }), Bf = pA(function(u, a, B) {
        return eo(u, ie(a) || 0, B);
      });
      function Sr(u, a) {
        if (typeof u != "function" || a != null && typeof a != "function")
          throw new Y(n);
        function B() {
          var Q = arguments, F = a ? a.apply(this, Q) : Q[0], H = B.cache;
          return H.has(F) ? H.get(F) : (Q = u.apply(this, Q), B.cache = H.set(F, Q) || H, Q);
        }
        return B.cache = new (Sr.Cache || m)(), B;
      }
      function yo(u) {
        if (typeof u != "function")
          throw new Y(n);
        return function() {
          var a = arguments;
          switch (a.length) {
            case 0:
              return !u.call(this);
            case 1:
              return !u.call(this, a[0]);
            case 2:
              return !u.call(this, a[0], a[1]);
            case 3:
              return !u.call(this, a[0], a[1], a[2]);
          }
          return !u.apply(this, a);
        };
      }
      Sr.Cache = m;
      var Wi = Wi(function(u, a) {
        var B = (a = a.length == 1 && CA(a[0]) ? KA(a[0], dt(QA())) : KA(_e(a, 1), dt(QA()))).length;
        return pA(function(Q) {
          for (var F = -1, H = xe(Q.length, B); ++F < H; )
            Q[F] = a[F].call(this, Q[F]);
          return qe(u, this, Q);
        });
      }), bo = pA(function(u, a) {
        var B = Mn(a, Kr(bo));
        return Lt(u, 32, e, a, B);
      }), bd = pA(function(u, a) {
        var B = Mn(a, Kr(bd));
        return Lt(u, 64, e, a, B);
      }), Fc = Jt(function(u, a) {
        return Lt(u, 256, e, e, e, a);
      });
      function Et(u, a) {
        return u === a || u != u && a != a;
      }
      var lf = fo(no), Yi = fo(function(u, a) {
        return a <= u;
      }), pn = ur(function() {
        return arguments;
      }()) ? ur : function(u) {
        return mA(u) && rA.call(u, "callee") && !Pu.call(u, "callee");
      }, CA = N.isArray, Id = On ? dt(On) : function(u) {
        return mA(u) && NA(u) == YA;
      };
      function At(u) {
        return u != null && Zi(u.length) && !et(u);
      }
      function Ce(u) {
        return mA(u) && At(u);
      }
      var Te = xt || xo, xt = Wr ? dt(Wr) : function(u) {
        return mA(u) && NA(u) == _;
      };
      function vd(u) {
        var a;
        return !!mA(u) && ((a = NA(u)) == S || a == "[object DOMException]" || typeof u.message == "string" && typeof u.name == "string" && !Or(u));
      }
      function et(u) {
        return !!LA(u) && ((u = NA(u)) == v || u == M || u == "[object AsyncFunction]" || u == "[object Proxy]");
      }
      function FA(u) {
        return typeof u == "number" && u == EA(u);
      }
      function Zi(u) {
        return typeof u == "number" && -1 < u && u % 1 == 0 && u <= s;
      }
      function LA(u) {
        var a = typeof u;
        return u != null && (a == "object" || a == "function");
      }
      function mA(u) {
        return u != null && typeof u == "object";
      }
      var Jn = Ke ? dt(Ke) : function(u) {
        return mA(u) && pe(u) == k;
      };
      function Dt(u) {
        return typeof u == "number" || mA(u) && NA(u) == X;
      }
      function Or(u) {
        return !(!mA(u) || NA(u) != iA) && ((u = oi(u)) === null || typeof (u = rA.call(u, "constructor") && u.constructor) == "function" && u instanceof u && UA.call(u) == ui);
      }
      var zt = qn ? dt(qn) : function(u) {
        return mA(u) && NA(u) == J;
      }, Kd = zn ? dt(zn) : function(u) {
        return mA(u) && pe(u) == lA;
      };
      function Tr(u) {
        return typeof u == "string" || !CA(u) && mA(u) && NA(u) == $;
      }
      function SA(u) {
        return typeof u == "symbol" || mA(u) && NA(u) == vA;
      }
      var Ae = Va ? dt(Va) : function(u) {
        return mA(u) && Zi(u.length) && !!re[NA(u)];
      }, Uc = fo(yr), pc = fo(function(u, a) {
        return u <= a;
      });
      function Bu(u) {
        if (!u)
          return [];
        if (At(u))
          return (Tr(u) ? kt : Qe)(u);
        var a;
        if (Ju && u[Ju]) {
          for (var B, Q = u[Ju](), F = []; !(B = Q.next()).done; )
            F.push(B.value);
          return F;
        }
        return ((a = pe(u)) == k ? Vu : a == lA ? Ru : Ee)(u);
      }
      function $t(u) {
        return u ? (u = ie(u)) === 1 / 0 || u === -1 / 0 ? 17976931348623157e292 * (u < 0 ? -1 : 1) : u == u ? u : 0 : u === 0 ? u : 0;
      }
      function EA(a) {
        var a = $t(a), B = a % 1;
        return a == a ? B ? a - B : a : 0;
      }
      function Io(u) {
        return u ? Hr(EA(u), 0, w) : 0;
      }
      function ie(u) {
        if (typeof u == "number")
          return u;
        if (SA(u))
          return l;
        if (typeof (u = LA(u) ? LA(a = typeof u.valueOf == "function" ? u.valueOf() : u) ? a + "" : a : u) != "string")
          return u === 0 ? u : +u;
        u = qs(u);
        var a = Jl.test(u);
        return a || Wl.test(u) ? ql(u.slice(2), a ? 2 : 8) : Pl.test(u) ? l : +u;
      }
      function Mr(u) {
        return Pt(u, lt(u));
      }
      function JA(u) {
        return u == null ? "" : WA(u);
      }
      var ff = ir(function(u, a) {
        if (cu(a) || At(a))
          Pt(a, Me(a), u);
        else
          for (var B in a)
            rA.call(a, B) && Ft(u, B, a[B]);
      }), Ld = ir(function(u, a) {
        Pt(a, lt(a), u);
      }), _t = ir(function(u, a, B, Q) {
        Pt(a, lt(a), u, Q);
      }), DA = ir(function(u, a, B, Q) {
        Pt(a, Me(a), u, Q);
      }), mc = Jt(qa), St = pA(function(u, a) {
        u = yA(u);
        var B = -1, Q = a.length, F = 2 < Q ? a[2] : e;
        for (F && he(a[0], a[1], F) && (Q = 1); ++B < Q; )
          for (var H = a[B], I = lt(H), L = -1, r = I.length; ++L < r; ) {
            var o = I[L], c = u[o];
            (c === e || Et(c, BA[o]) && !rA.call(u, o)) && (u[o] = H[o]);
          }
        return u;
      }), Ec = pA(function(u) {
        return u.push(e, wd), qe(qi, e, u);
      });
      function VA(u, a, B) {
        return u = u == null ? e : wn(u, a), u === e ? B : u;
      }
      function xd(u, a) {
        return u != null && Lr(u, a, Qn);
      }
      var Dc = fd(function(u, a, B) {
        u[a = a != null && typeof a.toString != "function" ? ze.call(a) : a] = B;
      }, Td(ft)), ji = fd(function(u, a, B) {
        a != null && typeof a.toString != "function" && (a = ze.call(a)), rA.call(u, a) ? u[a].push(B) : u[a] = [B];
      }, QA), gf = pA(rr);
      function Me(u) {
        return (At(u) ? Ao : Ad)(u);
      }
      function lt(u) {
        return At(u) ? Ao(u, !0) : ed(u);
      }
      var wf = ir(function(u, a, B) {
        uo(u, a, B);
      }), qi = ir(function(u, a, B, Q) {
        uo(u, a, B, Q);
      }), _d = Jt(function(u, a) {
        var B = {};
        if (u != null) {
          var Q = !1;
          a = KA(a, function(H) {
            return H = Cn(H, u), Q = Q || 1 < H.length, H;
          }), Pt(u, xi(u), B), Q && (B = st(B, 7, Li));
          for (var F = a.length; F--; )
            Bt(B, a[F]);
        }
        return B;
      }), Qf = Jt(function(u, a) {
        return u == null ? {} : uc(B = u, a, function(Q, F) {
          return xd(B, F);
        });
        var B;
      });
      function Hc(u, a) {
        var B;
        return u == null ? {} : (B = KA(xi(u), function(Q) {
          return [Q];
        }), a = QA(a), uc(u, B, function(Q, F) {
          return a(Q, F[0]);
        }));
      }
      var yc = Ki(Me), me = Ki(lt);
      function Ee(u) {
        return u == null ? [] : ni(u, Me(u));
      }
      var hf = Ir(function(u, a, B) {
        return a = a.toLowerCase(), u + (B ? Sd(a) : a);
      });
      function Sd(u) {
        return zi(JA(u).toLowerCase());
      }
      function bc(u) {
        return (u = JA(u)) && u.replace(ks, Xa).replace(Js, "");
      }
      var Cf = Ir(function(u, a, B) {
        return u + (B ? "-" : "") + a.toLowerCase();
      }), Ic = Ir(function(u, a, B) {
        return u + (B ? " " : "") + a.toLowerCase();
      }), vc = ld("toLowerCase"), Kc = Ir(function(u, a, B) {
        return u + (B ? "_" : "") + a.toLowerCase();
      }), lu = Ir(function(u, a, B) {
        return u + (B ? " " : "") + zi(a);
      }), Ff = Ir(function(u, a, B) {
        return u + (B ? " " : "") + a.toUpperCase();
      }), zi = ld("toUpperCase");
      function Od(u, a, B) {
        return u = JA(u), (a = B ? e : a) === e ? (B = u, Ou.test(B) ? u.match(Xs) || [] : u.match(Vl) || []) : u.match(a) || [];
      }
      var Lc = pA(function(u, a) {
        try {
          return qe(u, e, a);
        } catch (B) {
          return vd(B) ? B : new cA(B);
        }
      }), Uf = Jt(function(u, a) {
        return ht(a, function(B) {
          B = Zt(B), ln(u, B, Hd(u[B], u));
        }), u;
      });
      function Td(u) {
        return function() {
          return u;
        };
      }
      var pf = vr(), mf = vr(!0);
      function ft(u) {
        return u;
      }
      function vo(u) {
        return rc(typeof u == "function" ? u : st(u, 1));
      }
      var xc = pA(function(u, a) {
        return function(B) {
          return rr(B, u, a);
        };
      }), _c = pA(function(u, a) {
        return function(B) {
          return rr(u, B, a);
        };
      });
      function Md(u, a, B) {
        var Q = Me(a), F = Qi(a, Q), H = (B != null || LA(a) && (F.length || !Q.length) || (B = a, a = u, u = this, F = Qi(a, Me(a))), !(LA(B) && "chain" in B && !B.chain)), I = et(u);
        return ht(F, function(L) {
          var r = a[L];
          u[L] = r, I && (u.prototype[L] = function() {
            var o, c = this.__chain__;
            return H || c ? (((o = u(this.__wrapped__)).__actions__ = Qe(this.__actions__)).push({ func: r, args: arguments, thisArg: u }), o.__chain__ = c, o) : r.apply(u, $n([this.value()], arguments));
          });
        }), u;
      }
      function Ko() {
      }
      var Ef = ar(KA), Df = ar(Ra), gt = ar(ei);
      function $i(u) {
        return Co(u) ? Gu(Zt(u)) : (a = u, function(B) {
          return wn(B, a);
        });
        var a;
      }
      var Hf = gd(), yf = gd(!0);
      function Lo() {
        return [];
      }
      function xo() {
        return !1;
      }
      var bf = lo(function(u, a) {
        return u + a;
      }, 0), If = Ii("ceil"), vf = lo(function(u, a) {
        return u / a;
      }, 1), Sc = Ii("floor"), kd, Kf = lo(function(u, a) {
        return u * a;
      }, 1), Gd = Ii("round"), Vd = lo(function(u, a) {
        return u - a;
      }, 0);
      return E.after = function(u, a) {
        if (typeof a != "function")
          throw new Y(n);
        return u = EA(u), function() {
          if (--u < 1)
            return a.apply(this, arguments);
        };
      }, E.ary = Dd, E.assign = ff, E.assignIn = Ld, E.assignInWith = _t, E.assignWith = DA, E.at = mc, E.before = hc, E.bind = Hd, E.bindAll = Uf, E.bindKey = Cc, E.castArray = function() {
        var u;
        return arguments.length ? CA(u = arguments[0]) ? u : [u] : [];
      }, E.chain = Pi, E.chunk = function(u, a, B) {
        a = (B ? he(u, a, B) : a === e) ? 1 : oe(EA(a), 0);
        var Q = u == null ? 0 : u.length;
        if (!Q || a < 1)
          return [];
        for (var F = 0, H = 0, I = N(Wu(Q / a)); F < Q; )
          I[H++] = ct(u, F, F += a);
        return I;
      }, E.compact = function(u) {
        for (var a = -1, B = u == null ? 0 : u.length, Q = 0, F = []; ++a < B; ) {
          var H = u[a];
          H && (F[Q++] = H);
        }
        return F;
      }, E.concat = function() {
        var u = arguments.length;
        if (!u)
          return [];
        for (var a = N(u - 1), B = arguments[0], Q = u; Q--; )
          a[Q - 1] = arguments[Q];
        return $n(CA(B) ? Qe(B) : [B], _e(a, 1));
      }, E.cond = function(u) {
        var a = u == null ? 0 : u.length, B = QA();
        return u = a ? KA(u, function(Q) {
          if (typeof Q[1] != "function")
            throw new Y(n);
          return [B(Q[0]), Q[1]];
        }) : [], pA(function(Q) {
          for (var F = -1; ++F < a; ) {
            var H = u[F];
            if (qe(H[0], this, Q))
              return qe(H[1], this, Q);
          }
        });
      }, E.conforms = function(u) {
        return a = st(u, 1), B = Me(a), function(Q) {
          return uu(Q, a, B);
        };
        var a, B;
      }, E.constant = Td, E.countBy = uf, E.create = function(u, a) {
        return u = ru(u), a == null ? u : ja(u, a);
      }, E.curry = function u(a, B, Q) {
        return a = Lt(a, 8, e, e, e, e, e, B = Q ? e : B), a.placeholder = u.placeholder, a;
      }, E.curryRight = function u(a, B, Q) {
        return a = Lt(a, 16, e, e, e, e, e, B = Q ? e : B), a.placeholder = u.placeholder, a;
      }, E.debounce = Ho, E.defaults = St, E.defaultsDeep = Ec, E.defer = yd, E.delay = Bf, E.difference = dn, E.differenceBy = se, E.differenceWith = OA, E.drop = function(u, a, B) {
        var Q = u == null ? 0 : u.length;
        return Q ? ct(u, (a = B || a === e ? 1 : EA(a)) < 0 ? 0 : a, Q) : [];
      }, E.dropRight = function(u, a, B) {
        var Q = u == null ? 0 : u.length;
        return Q ? ct(u, 0, (a = Q - (a = B || a === e ? 1 : EA(a))) < 0 ? 0 : a) : [];
      }, E.dropRightWhile = function(u, a) {
        return u && u.length ? br(u, QA(a, 3), !0, !0) : [];
      }, E.dropWhile = function(u, a) {
        return u && u.length ? br(u, QA(a, 3), !0) : [];
      }, E.fill = function(u, a, B, Q) {
        var F = u == null ? 0 : u.length;
        if (F) {
          B && typeof B != "number" && he(u, a, B) && (B = 0, Q = F);
          var H = u, I = a, L = B, r = Q, F = H.length;
          for ((L = EA(L)) < 0 && (L = F < -L ? 0 : F + L), (r = r === e || F < r ? F : EA(r)) < 0 && (r += F), r = r < L ? 0 : Io(r); L < r; )
            H[L++] = I;
          return H;
        }
        return [];
      }, E.filter = function(u, a) {
        return (CA(u) ? Tn : Ut)(u, QA(a, 3));
      }, E.flatMap = function(u, a) {
        return _e(Xi(u, a), 1);
      }, E.flatMapDeep = function(u, a) {
        return _e(Xi(u, a), 1 / 0);
      }, E.flatMapDepth = function(u, a, B) {
        return B = B === e ? 1 : EA(B), _e(Xi(u, a), B);
      }, E.flatten = mo, E.flattenDeep = function(u) {
        return u != null && u.length ? _e(u, 1 / 0) : [];
      }, E.flattenDepth = function(u, a) {
        return u != null && u.length ? _e(u, a = a === e ? 1 : EA(a)) : [];
      }, E.flip = function(u) {
        return Lt(u, 512);
      }, E.flow = pf, E.flowRight = mf, E.fromPairs = function(u) {
        for (var a = -1, B = u == null ? 0 : u.length, Q = {}; ++a < B; ) {
          var F = u[a];
          Q[F[0]] = F[1];
        }
        return Q;
      }, E.functions = function(u) {
        return u == null ? [] : Qi(u, Me(u));
      }, E.functionsIn = function(u) {
        return u == null ? [] : Qi(u, lt(u));
      }, E.groupBy = Qc, E.initial = function(u) {
        return u != null && u.length ? ct(u, 0, -1) : [];
      }, E.intersection = hA, E.intersectionBy = ai, E.intersectionWith = Se, E.invert = Dc, E.invertBy = ji, E.invokeMap = Ji, E.iteratee = vo, E.keyBy = df, E.keys = Me, E.keysIn = lt, E.map = Xi, E.mapKeys = function(u, a) {
        var B = {};
        return a = QA(a, 3), Re(u, function(Q, F, H) {
          ln(B, a(Q, F, H), Q);
        }), B;
      }, E.mapValues = function(u, a) {
        var B = {};
        return a = QA(a, 3), Re(u, function(Q, F, H) {
          ln(B, F, a(Q, F, H));
        }), B;
      }, E.matches = function(u) {
        return au(st(u, 1));
      }, E.matchesProperty = function(u, a) {
        return Ci(u, st(a, 1));
      }, E.memoize = Sr, E.merge = wf, E.mergeWith = qi, E.method = xc, E.methodOf = _c, E.mixin = Md, E.negate = yo, E.nthArg = function(u) {
        return u = EA(u), pA(function(a) {
          return nd(a, u);
        });
      }, E.omit = _d, E.omitBy = function(u, a) {
        return Hc(u, yo(QA(a)));
      }, E.once = function(u) {
        return hc(2, u);
      }, E.orderBy = function(u, a, B, Q) {
        return u == null ? [] : Fi(u, a = CA(a) ? a : a == null ? [] : [a], B = CA(B = Q ? e : B) ? B : B == null ? [] : [B]);
      }, E.over = Ef, E.overArgs = Wi, E.overEvery = Df, E.overSome = gt, E.partial = bo, E.partialRight = bd, E.partition = sf, E.pick = Qf, E.pickBy = Hc, E.property = $i, E.propertyOf = function(u) {
        return function(a) {
          return u == null ? e : wn(u, a);
        };
      }, E.pull = kn, E.pullAll = qt, E.pullAllBy = function(u, a, B) {
        return u && u.length && a && a.length ? oo(u, a, QA(B, 2)) : u;
      }, E.pullAllWith = function(u, a, B) {
        return u && u.length && a && a.length ? oo(u, a, e, B) : u;
      }, E.pullAt = _r, E.range = Hf, E.rangeRight = yf, E.rearg = Fc, E.reject = function(u, a) {
        return (CA(u) ? Tn : Ut)(u, yo(QA(a, 3)));
      }, E.remove = function(u, a) {
        var B = [];
        if (u && u.length) {
          var Q = -1, F = [], H = u.length;
          for (a = QA(a, 3); ++Q < H; ) {
            var I = u[Q];
            a(I, Q, u) && (B.push(I), F.push(Q));
          }
          rd(u, F);
        }
        return B;
      }, E.rest = function(u, a) {
        if (typeof u != "function")
          throw new Y(n);
        return pA(u, a = a === e ? a : EA(a));
      }, E.reverse = Ri, E.sampleSize = function(u, a, B) {
        return a = (B ? he(u, a, B) : a === e) ? 1 : EA(a), (CA(u) ? _A : ic)(u, a);
      }, E.set = function(u, a, B) {
        return u == null ? u : du(u, a, B);
      }, E.setWith = function(u, a, B, Q) {
        return Q = typeof Q == "function" ? Q : e, u == null ? u : du(u, a, B, Q);
      }, E.shuffle = function(u) {
        return (CA(u) ? Dr : ud)(u);
      }, E.slice = function(u, a, B) {
        var Q = u == null ? 0 : u.length;
        return Q ? (B = B && typeof B != "number" && he(u, a, B) ? (a = 0, Q) : (a = a == null ? 0 : EA(a), B === e ? Q : EA(B)), ct(u, a, B)) : [];
      }, E.sortBy = cf, E.sortedUniq = function(u) {
        return u && u.length ? su(u) : [];
      }, E.sortedUniqBy = function(u, a) {
        return u && u.length ? su(u, QA(a, 2)) : [];
      }, E.split = function(u, a, B) {
        return B && typeof B != "number" && he(u, a, B) && (a = B = e), (B = B === e ? w : B >>> 0) ? (u = JA(u)) && (typeof a == "string" || a != null && !zt(a)) && !(a = WA(a)) && Le(u) ? Rn(kt(u), 0, B) : u.split(a, B) : [];
      }, E.spread = function(u, a) {
        if (typeof u != "function")
          throw new Y(n);
        return a = a == null ? 0 : oe(EA(a), 0), pA(function(F) {
          var Q = F[a], F = Rn(F, 0, a);
          return Q && $n(F, Q), qe(u, this, F);
        });
      }, E.tail = function(u) {
        var a = u == null ? 0 : u.length;
        return a ? ct(u, 1, a) : [];
      }, E.take = function(u, a, B) {
        return u && u.length ? ct(u, 0, (a = B || a === e ? 1 : EA(a)) < 0 ? 0 : a) : [];
      }, E.takeRight = function(u, a, B) {
        var Q = u == null ? 0 : u.length;
        return Q ? ct(u, (a = Q - (a = B || a === e ? 1 : EA(a))) < 0 ? 0 : a, Q) : [];
      }, E.takeRightWhile = function(u, a) {
        return u && u.length ? br(u, QA(a, 3), !1, !0) : [];
      }, E.takeWhile = function(u, a) {
        return u && u.length ? br(u, QA(a, 3)) : [];
      }, E.tap = function(u, a) {
        return a(u), u;
      }, E.throttle = function(u, a, B) {
        var Q = !0, F = !0;
        if (typeof u != "function")
          throw new Y(n);
        return LA(B) && (Q = "leading" in B ? !!B.leading : Q, F = "trailing" in B ? !!B.trailing : F), Ho(u, a, { leading: Q, maxWait: a, trailing: F });
      }, E.thru = Eo, E.toArray = Bu, E.toPairs = yc, E.toPairsIn = me, E.toPath = function(u) {
        return CA(u) ? KA(u, Zt) : SA(u) ? [u] : Qe(ki(JA(u)));
      }, E.toPlainObject = Mr, E.transform = function(u, a, B) {
        var Q, F = CA(u), H = F || Te(u) || Ae(u);
        return a = QA(a, 4), B == null && (Q = u && u.constructor, B = H ? F ? new Q() : [] : LA(u) && et(Q) ? ru(oi(u)) : {}), (H ? ht : Re)(u, function(I, L, r) {
          return a(B, I, L, r);
        }), B;
      }, E.unary = function(u) {
        return Dd(u, 1);
      }, E.union = cc, E.unionBy = Bc, E.unionWith = lc, E.uniq = function(u) {
        return u && u.length ? or(u) : [];
      }, E.uniqBy = function(u, a) {
        return u && u.length ? or(u, QA(a, 2)) : [];
      }, E.uniqWith = function(u, a) {
        return a = typeof a == "function" ? a : e, u && u.length ? or(u, e, a) : [];
      }, E.unset = function(u, a) {
        return u == null || Bt(u, a);
      }, E.unzip = Ni, E.unzipWith = mt, E.update = function(u, a, B) {
        return u == null ? u : ac(u, a, hn(B));
      }, E.updateWith = function(u, a, B, Q) {
        return Q = typeof Q == "function" ? Q : e, u == null ? u : ac(u, a, hn(B), Q);
      }, E.values = Ee, E.valuesIn = function(u) {
        return u == null ? [] : ni(u, lt(u));
      }, E.without = fc, E.words = Od, E.wrap = function(u, a) {
        return bo(hn(a), u);
      }, E.xor = Af, E.xorBy = Ed, E.xorWith = ef, E.zip = tf, E.zipObject = function(u, a) {
        return ad(u || [], a || [], Ft);
      }, E.zipObjectDeep = function(u, a) {
        return ad(u || [], a || [], du);
      }, E.zipWith = nf, E.entries = yc, E.entriesIn = me, E.extend = Ld, E.extendWith = _t, Md(E, E), E.add = bf, E.attempt = Lc, E.camelCase = hf, E.capitalize = Sd, E.ceil = If, E.clamp = function(u, a, B) {
        return B === e && (B = a, a = e), B !== e && (B = (B = ie(B)) == B ? B : 0), a !== e && (a = (a = ie(a)) == a ? a : 0), Hr(ie(u), a, B);
      }, E.clone = function(u) {
        return st(u, 4);
      }, E.cloneDeep = function(u) {
        return st(u, 5);
      }, E.cloneDeepWith = function(u, a) {
        return st(u, 5, a = typeof a == "function" ? a : e);
      }, E.cloneWith = function(u, a) {
        return st(u, 4, a = typeof a == "function" ? a : e);
      }, E.conformsTo = function(u, a) {
        return a == null || uu(u, a, Me(a));
      }, E.deburr = bc, E.defaultTo = function(u, a) {
        return u == null || u != u ? a : u;
      }, E.divide = vf, E.endsWith = function(u, a, B) {
        u = JA(u), a = WA(a);
        var Q = u.length, Q = B = B === e ? Q : Hr(EA(B), 0, Q);
        return 0 <= (B -= a.length) && u.slice(B, Q) == a;
      }, E.eq = Et, E.escape = function(u) {
        return (u = JA(u)) && Ll.test(u) ? u.replace(Zo, Wa) : u;
      }, E.escapeRegExp = function(u) {
        return (u = JA(u)) && Tl.test(u) ? u.replace(xa, "\\$&") : u;
      }, E.every = function(u, a, B) {
        return (CA(u) ? Ra : za)(u, QA(a = B && he(u, a, B) ? e : a, 3));
      }, E.find = of, E.findIndex = pd, E.findKey = function(u, a) {
        return ku(u, QA(a, 3), Re);
      }, E.findLast = af, E.findLastIndex = md, E.findLastKey = function(u, a) {
        return ku(u, QA(a, 3), wi);
      }, E.floor = Sc, E.forEach = gc, E.forEachRight = wc, E.forIn = function(u, a) {
        return u == null ? u : gi(u, QA(a, 3), lt);
      }, E.forInRight = function(u, a) {
        return u == null ? u : ou(u, QA(a, 3), lt);
      }, E.forOwn = function(u, a) {
        return u && Re(u, QA(a, 3));
      }, E.forOwnRight = function(u, a) {
        return u && wi(u, QA(a, 3));
      }, E.get = VA, E.gt = lf, E.gte = Yi, E.has = function(u, a) {
        return u != null && Lr(u, a, nc);
      }, E.hasIn = xd, E.head = Vi, E.identity = ft, E.includes = function(u, a, B, Q) {
        return u = At(u) ? u : Ee(u), B = B && !Q ? EA(B) : 0, Q = u.length, B < 0 && (B = oe(Q + B, 0)), Tr(u) ? B <= Q && -1 < u.indexOf(a, B) : !!Q && -1 < XA(u, a, B);
      }, E.indexOf = function(u, a, B) {
        var Q = u == null ? 0 : u.length;
        return Q ? XA(u, a, u = (u = B == null ? 0 : EA(B)) < 0 ? oe(Q + u, 0) : u) : -1;
      }, E.inRange = function(u, a, B) {
        return a = $t(a), B === e ? (B = a, a = 0) : B = $t(B), (u = u = ie(u)) >= xe(a = a, B = B) && u < oe(a, B);
      }, E.invoke = gf, E.isArguments = pn, E.isArray = CA, E.isArrayBuffer = Id, E.isArrayLike = At, E.isArrayLikeObject = Ce, E.isBoolean = function(u) {
        return u === !0 || u === !1 || mA(u) && NA(u) == K;
      }, E.isBuffer = Te, E.isDate = xt, E.isElement = function(u) {
        return mA(u) && u.nodeType === 1 && !Or(u);
      }, E.isEmpty = function(u) {
        if (u != null) {
          if (At(u) && (CA(u) || typeof u == "string" || typeof u.splice == "function" || Te(u) || Ae(u) || pn(u)))
            return !u.length;
          var a, B = pe(u);
          if (B == k || B == lA)
            return !u.size;
          if (cu(u))
            return !Ad(u).length;
          for (a in u)
            if (rA.call(u, a))
              return !1;
        }
        return !0;
      }, E.isEqual = function(u, a) {
        return iu(u, a);
      }, E.isEqualWith = function(u, a, B) {
        var Q = (B = typeof B == "function" ? B : e) ? B(u, a) : e;
        return Q === e ? iu(u, a, e, B) : !!Q;
      }, E.isError = vd, E.isFinite = function(u) {
        return typeof u == "number" && eu(u);
      }, E.isFunction = et, E.isInteger = FA, E.isLength = Zi, E.isMap = Jn, E.isMatch = function(u, a) {
        return u === a || Ne(u, a, Wt(a));
      }, E.isMatchWith = function(u, a, B) {
        return B = typeof B == "function" ? B : e, Ne(u, a, Wt(a), B);
      }, E.isNaN = function(u) {
        return Dt(u) && u != +u;
      }, E.isNative = function(u) {
        if (Xe(u))
          throw new cA("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
        return hi(u);
      }, E.isNil = function(u) {
        return u == null;
      }, E.isNull = function(u) {
        return u === null;
      }, E.isNumber = Dt, E.isObject = LA, E.isObjectLike = mA, E.isPlainObject = Or, E.isRegExp = zt, E.isSafeInteger = function(u) {
        return FA(u) && -s <= u && u <= s;
      }, E.isSet = Kd, E.isString = Tr, E.isSymbol = SA, E.isTypedArray = Ae, E.isUndefined = function(u) {
        return u === e;
      }, E.isWeakMap = function(u) {
        return mA(u) && pe(u) == IA;
      }, E.isWeakSet = function(u) {
        return mA(u) && NA(u) == "[object WeakSet]";
      }, E.join = function(u, a) {
        return u == null ? "" : Er.call(u, a);
      }, E.kebabCase = Cf, E.last = pt, E.lastIndexOf = function(u, a, B) {
        var Q = u == null ? 0 : u.length;
        if (Q) {
          var F = Q;
          if (B !== e && (F = (F = EA(B)) < 0 ? oe(Q + F, 0) : xe(F, Q - 1)), a == a) {
            var H = u, I = a;
            B = F;
            for (var L = B + 1; L--; )
              if (H[L] === I)
                return L;
            return L;
          } else
            return Yr(u, ti, F, !0);
        }
        return -1;
      }, E.lowerCase = Ic, E.lowerFirst = vc, E.lt = Uc, E.lte = pc, E.max = function(u) {
        return u && u.length ? gn(u, ft, no) : e;
      }, E.maxBy = function(u, a) {
        return u && u.length ? gn(u, QA(a, 2), no) : e;
      }, E.mean = function(u) {
        return js(u, ft);
      }, E.meanBy = function(u, a) {
        return js(u, QA(a, 2));
      }, E.min = function(u) {
        return u && u.length ? gn(u, ft, yr) : e;
      }, E.minBy = function(u, a) {
        return u && u.length ? gn(u, QA(a, 2), yr) : e;
      }, E.stubArray = Lo, E.stubFalse = xo, E.stubObject = function() {
        return {};
      }, E.stubString = function() {
        return "";
      }, E.stubTrue = function() {
        return !0;
      }, E.multiply = Kf, E.nth = function(u, a) {
        return u && u.length ? nd(u, EA(a)) : e;
      }, E.noConflict = function() {
        return Ve._ === this && (Ve._ = $r), this;
      }, E.noop = Ko, E.now = Do, E.pad = function(u, a, B) {
        u = JA(u);
        var Q = (a = EA(a)) ? qr(u) : 0;
        return !a || a <= Q ? u : dr(mr(a = (a - Q) / 2), B) + u + dr(Wu(a), B);
      }, E.padEnd = function(u, a, B) {
        u = JA(u);
        var Q = (a = EA(a)) ? qr(u) : 0;
        return a && Q < a ? u + dr(a - Q, B) : u;
      }, E.padStart = function(u, a, B) {
        u = JA(u);
        var Q = (a = EA(a)) ? qr(u) : 0;
        return a && Q < a ? dr(a - Q, B) + u : u;
      }, E.parseInt = function(u, a, B) {
        return a = B || a == null ? 0 : a && +a, Bi(JA(u).replace(jo, ""), a || 0);
      }, E.random = function(u, a, B) {
        var Q;
        return B && typeof B != "boolean" && he(u, a, B) && (a = B = e), B === e && (typeof a == "boolean" ? (B = a, a = e) : typeof u == "boolean" && (B = u, u = e)), u === e && a === e ? (u = 0, a = 1) : (u = $t(u), a === e ? (a = u, u = 0) : a = $t(a)), a < u && (Q = u, u = a, a = Q), B || u % 1 || a % 1 ? (Q = li(), xe(u + Q * (a - u + jl("1e-" + ((Q + "").length - 1))), a)) : Ui(u, a);
      }, E.reduce = function(u, a, B) {
        var Q = CA(u) ? at : Pa, F = arguments.length < 3;
        return Q(u, QA(a, 4), B, F, Vn);
      }, E.reduceRight = function(u, a, B) {
        var Q = CA(u) ? zl : Pa, F = arguments.length < 3;
        return Q(u, QA(a, 4), B, F, fn);
      }, E.repeat = function(u, a, B) {
        return a = (B ? he(u, a, B) : a === e) ? 1 : EA(a), pi(JA(u), a);
      }, E.replace = function() {
        var u = arguments, a = JA(u[0]);
        return u.length < 3 ? a : a.replace(u[1], u[2]);
      }, E.result = function(u, a, B) {
        var Q = -1, F = (a = Cn(a, u)).length;
        for (F || (F = 1, u = e); ++Q < F; ) {
          var H = u == null ? e : u[Zt(a[Q])];
          H === e && (Q = F, H = B), u = et(H) ? H.call(u) : H;
        }
        return u;
      }, E.round = Gd, E.runInContext = V, E.sample = function(u) {
        return (CA(u) ? Kt : oc)(u);
      }, E.size = function(u) {
        var a;
        return u == null ? 0 : At(u) ? Tr(u) ? qr(u) : u.length : (a = pe(u)) == k || a == lA ? u.size : Ad(u).length;
      }, E.snakeCase = Kc, E.some = function(u, a, B) {
        return (CA(u) ? ei : bA)(u, QA(a = B && he(u, a, B) ? e : a, 3));
      }, E.sortedIndex = function(u, a) {
        return Ei(u, a);
      }, E.sortedIndexBy = function(u, a, B) {
        return od(u, a, QA(B, 2));
      }, E.sortedIndexOf = function(u, a) {
        var B = u == null ? 0 : u.length;
        if (B) {
          var Q = Ei(u, a);
          if (Q < B && Et(u[Q], a))
            return Q;
        }
        return -1;
      }, E.sortedLastIndex = function(u, a) {
        return Ei(u, a, !0);
      }, E.sortedLastIndexBy = function(u, a, B) {
        return od(u, a, QA(B, 2), !0);
      }, E.sortedLastIndexOf = function(u, a) {
        if (u != null && u.length) {
          var B = Ei(u, a, !0) - 1;
          if (Et(u[B], a))
            return B;
        }
        return -1;
      }, E.startCase = lu, E.startsWith = function(u, a, B) {
        return u = JA(u), B = B == null ? 0 : Hr(EA(B), 0, u.length), a = WA(a), u.slice(B, B + a.length) == a;
      }, E.subtract = Vd, E.sum = function(u) {
        return u && u.length ? Zr(u, ft) : 0;
      }, E.sumBy = function(u, a) {
        return u && u.length ? Zr(u, QA(a, 2)) : 0;
      }, E.template = function(u, a, c) {
        var Q, F, r = E.templateSettings;
        c && he(u, a, c) && (a = e), u = JA(u), a = _t({}, a, r, dc);
        var H = Me(c = _t({}, a.imports, r.imports, dc)), I = ni(c, H), L = 0, r = a.interpolate || qo, o = "__p += '", c = on((a.escape || qo).source + "|" + r.source + "|" + (r === La ? Nl : qo).source + "|" + (a.evaluate || qo).source + "|$", "g"), f = "//# sourceURL=" + (rA.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ma + "]") + `
`;
        if (u.replace(c, function(C, U, D, y, b, x) {
          return D = D || y, o += u.slice(L, x).replace(Zl, zs), U && (Q = !0, o += `' +
__e(` + U + `) +
'`), b && (F = !0, o += `';
` + b + `;
__p += '`), D && (o += `' +
((__t = (` + D + `)) == null ? '' : __t) +
'`), L = x + C.length, C;
        }), o += `';
`, r = rA.call(a, "variable") && a.variable) {
          if (Sa.test(r))
            throw new cA("Invalid `variable` option passed into `_.template`");
        } else
          o = `with (obj) {
` + o + `
}
`;
        if (o = (F ? o.replace(ba, "") : o).replace(Ia, "$1").replace(va, "$1;"), o = "function(" + (r || "obj") + `) {
` + (r ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (Q ? ", __e = _.escape" : "") + (F ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + o + `return __p
}`, (c = Lc(function() {
          return fA(H, f + "return " + o).apply(e, I);
        })).source = o, vd(c))
          throw c;
        return c;
      }, E.times = function(u, a) {
        if ((u = EA(u)) < 1 || s < u)
          return [];
        var B = w, Q = xe(u, w);
        for (a = QA(a), u -= w, Q = tr(Q, a); ++B < u; )
          a(B);
        return Q;
      }, E.toFinite = $t, E.toInteger = EA, E.toLength = Io, E.toLower = function(u) {
        return JA(u).toLowerCase();
      }, E.toNumber = ie, E.toSafeInteger = function(u) {
        return u ? Hr(EA(u), -s, s) : u === 0 ? u : 0;
      }, E.toString = JA, E.toUpper = function(u) {
        return JA(u).toUpperCase();
      }, E.trim = function(u, a, B) {
        return (u = JA(u)) && (B || a === e) ? qs(u) : u && (a = WA(a)) ? Rn(B = kt(u), ri(B, a = kt(a)), Ja(B, a) + 1).join("") : u;
      }, E.trimEnd = function(u, a, B) {
        return (u = JA(u)) && (B || a === e) ? u.slice(0, $s(u) + 1) : u && (a = WA(a)) ? Rn(B = kt(u), 0, Ja(B, kt(a)) + 1).join("") : u;
      }, E.trimStart = function(u, a, B) {
        return (u = JA(u)) && (B || a === e) ? u.replace(jo, "") : u && (a = WA(a)) ? Rn(B = kt(u), ri(B, kt(a))).join("") : u;
      }, E.truncate = function(u, F) {
        var B, I = 30, Q = "...", F = (LA(F) && (B = "separator" in F ? F.separator : B, I = "length" in F ? EA(F.length) : I, Q = "omission" in F ? WA(F.omission) : Q), (u = JA(u)).length);
        if ((F = Le(u) ? (H = kt(u)).length : F) <= I)
          return u;
        if ((F = I - qr(Q)) < 1)
          return Q;
        var H, I = H ? Rn(H, 0, F).join("") : u.slice(0, F);
        if (B !== e)
          if (H && (F += I.length - F), zt(B)) {
            if (u.slice(F).search(B)) {
              var L, r = I;
              for ((B = B.global ? B : on(B.source, JA(Ms.exec(B)) + "g")).lastIndex = 0; L = B.exec(r); )
                var o = L.index;
              I = I.slice(0, o === e ? F : o);
            }
          } else
            u.indexOf(WA(B), F) != F && -1 < (H = I.lastIndexOf(B)) && (I = I.slice(0, H));
        return I + Q;
      }, E.unescape = function(u) {
        return (u = JA(u)) && Ka.test(u) ? u.replace(Yo, zr) : u;
      }, E.uniqueId = function(u) {
        var a = ++Nu;
        return JA(u) + a;
      }, E.upperCase = Ff, E.upperFirst = zi, E.each = gc, E.eachRight = wc, E.first = Vi, Md(E, (kd = {}, Re(E, function(u, a) {
        rA.call(E.prototype, a) || (kd[a] = u);
      }), kd), { chain: !1 }), E.VERSION = "4.17.21", ht(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(u) {
        E[u].placeholder = E;
      }), ht(["drop", "take"], function(u, a) {
        xA.prototype[u] = function(B) {
          B = B === e ? 1 : oe(EA(B), 0);
          var Q = this.__filtered__ && !a ? new xA(this) : this.clone();
          return Q.__filtered__ ? Q.__takeCount__ = xe(B, Q.__takeCount__) : Q.__views__.push({ size: xe(B, w), type: u + (Q.__dir__ < 0 ? "Right" : "") }), Q;
        }, xA.prototype[u + "Right"] = function(B) {
          return this.reverse()[u](B).reverse();
        };
      }), ht(["filter", "map", "takeWhile"], function(u, a) {
        var B = a + 1, Q = B == 1 || B == 3;
        xA.prototype[u] = function(F) {
          var H = this.clone();
          return H.__iteratees__.push({ iteratee: QA(F, 3), type: B }), H.__filtered__ = H.__filtered__ || Q, H;
        };
      }), ht(["head", "last"], function(u, a) {
        var B = "take" + (a ? "Right" : "");
        xA.prototype[u] = function() {
          return this[B](1).value()[0];
        };
      }), ht(["initial", "tail"], function(u, a) {
        var B = "drop" + (a ? "" : "Right");
        xA.prototype[u] = function() {
          return this.__filtered__ ? new xA(this) : this[B](1);
        };
      }), xA.prototype.compact = function() {
        return this.filter(ft);
      }, xA.prototype.find = function(u) {
        return this.filter(u).head();
      }, xA.prototype.findLast = function(u) {
        return this.reverse().find(u);
      }, xA.prototype.invokeMap = pA(function(u, a) {
        return typeof u == "function" ? new xA(this) : this.map(function(B) {
          return rr(B, u, a);
        });
      }), xA.prototype.reject = function(u) {
        return this.filter(yo(QA(u)));
      }, xA.prototype.slice = function(u, a) {
        u = EA(u);
        var B = this;
        return B.__filtered__ && (0 < u || a < 0) ? new xA(B) : (u < 0 ? B = B.takeRight(-u) : u && (B = B.drop(u)), B = a !== e ? (a = EA(a)) < 0 ? B.dropRight(-a) : B.take(a - u) : B);
      }, xA.prototype.takeRightWhile = function(u) {
        return this.reverse().takeWhile(u).reverse();
      }, xA.prototype.toArray = function() {
        return this.take(w);
      }, Re(xA.prototype, function(u, a) {
        var B = /^(?:filter|find|map|reject)|While$/.test(a), Q = /^(?:head|last)$/.test(a), F = E[Q ? "take" + (a == "last" ? "Right" : "") : a], H = Q || /^find/.test(a);
        F && (E.prototype[a] = function() {
          function I(y) {
            return y = F.apply(E, $n([y], o)), Q && f ? y[0] : y;
          }
          var L, r = this.__wrapped__, o = Q ? [1] : arguments, D = r instanceof xA, C = o[0], c = D || CA(r), f = (c && B && typeof C == "function" && C.length != 1 && (D = c = !1), this.__chain__), C = !!this.__actions__.length, U = H && !f, D = D && !C;
          return !H && c ? (r = D ? r : new xA(this), (L = u.apply(r, o)).__actions__.push({ func: Eo, args: [I], thisArg: e }), new Gt(L, f)) : U && D ? u.apply(this, o) : (L = this.thru(I), U ? Q ? L.value()[0] : L.value() : L);
        });
      }), ht(["pop", "push", "shift", "sort", "splice", "unshift"], function(u) {
        var a = P[u], B = /^(?:push|sort|unshift)$/.test(u) ? "tap" : "thru", Q = /^(?:pop|shift)$/.test(u);
        E.prototype[u] = function() {
          var F, H = arguments;
          return Q && !this.__chain__ ? (F = this.value(), a.apply(CA(F) ? F : [], H)) : this[B](function(I) {
            return a.apply(CA(I) ? I : [], H);
          });
        };
      }), Re(xA.prototype, function(u, a) {
        var B, Q = E[a];
        Q && (B = Q.name + "", rA.call(tu, B) || (tu[B] = []), tu[B].push({ name: a, func: Q }));
      }), tu[Bo(e, 2).name] = [{ name: "wrapper", func: e }], xA.prototype.clone = function() {
        var u = new xA(this.__wrapped__);
        return u.__actions__ = Qe(this.__actions__), u.__dir__ = this.__dir__, u.__filtered__ = this.__filtered__, u.__iteratees__ = Qe(this.__iteratees__), u.__takeCount__ = this.__takeCount__, u.__views__ = Qe(this.__views__), u;
      }, xA.prototype.reverse = function() {
        var u;
        return this.__filtered__ ? ((u = new xA(this)).__dir__ = -1, u.__filtered__ = !0) : (u = this.clone()).__dir__ *= -1, u;
      }, xA.prototype.value = function() {
        var u = this.__wrapped__.value(), a = this.__dir__, B = CA(u), Q = a < 0, F = B ? u.length : 0, H = function(O, T, R) {
          for (var W = -1, Z = R.length; ++W < Z; ) {
            var uA = R[W], q = uA.size;
            switch (uA.type) {
              case "drop":
                O += q;
                break;
              case "dropRight":
                T -= q;
                break;
              case "take":
                T = xe(T, O + q);
                break;
              case "takeRight":
                O = oe(O, T - q);
            }
          }
          return { start: O, end: T };
        }(0, F, this.__views__), I = H.start, L = (H = H.end) - I, r = Q ? H : I - 1, o = this.__iteratees__, c = o.length, f = 0, C = xe(L, this.__takeCount__);
        if (!B || !Q && F == L && C == L)
          return Di(u, this.__actions__);
        var U = [];
        A:
          for (; L-- && f < C; ) {
            for (var D = -1, y = u[r += a]; ++D < c; ) {
              var b = o[D], x = b.iteratee, b = b.type, x = x(y);
              if (b == 2)
                y = x;
              else if (!x) {
                if (b == 1)
                  continue A;
                break A;
              }
            }
            U[f++] = y;
          }
        return U;
      }, E.prototype.at = rf, E.prototype.chain = function() {
        return Pi(this);
      }, E.prototype.commit = function() {
        return new Gt(this.value(), this.__chain__);
      }, E.prototype.next = function() {
        this.__values__ === e && (this.__values__ = Bu(this.value()));
        var u = this.__index__ >= this.__values__.length;
        return { done: u, value: u ? e : this.__values__[this.__index__++] };
      }, E.prototype.plant = function(u) {
        for (var a, F = this; F instanceof fi; )
          var B = Gi(F), Q = (B.__index__ = 0, B.__values__ = e, a ? Q.__wrapped__ = B : a = B, B), F = F.__wrapped__;
        return Q.__wrapped__ = u, a;
      }, E.prototype.reverse = function() {
        var u = this.__wrapped__;
        return u instanceof xA ? (u = u, (u = (u = this.__actions__.length ? new xA(this) : u).reverse()).__actions__.push({ func: Eo, args: [Ri], thisArg: e }), new Gt(u, this.__chain__)) : this.thru(Ri);
      }, E.prototype.toJSON = E.prototype.valueOf = E.prototype.value = function() {
        return Di(this.__wrapped__, this.__actions__);
      }, E.prototype.first = E.prototype.head, Ju && (E.prototype[Ju] = function() {
        return this;
      }), E;
    }();
    GA ? ((GA.exports = nr)._ = nr, RA._ = nr) : Ve._ = nr;
  }).call(Nd);
})(sU, ul);
const cU = ul;
function v0(s, A) {
  var e, n, i, d = { "\\rightarrow": "->", "\\leftarrow": "<-", "\\rightleftarrow": "<=>", "\\leftrightarrow": "<->" }, s = s.split("\\limits^");
  return A === 2 ? (n = s[0], i = s[1].split("}_{")[0].slice(1), e = s[1].split("}_{")[1].slice(0, s[1].split("}_{")[1].length - 1), n === "=" ? `\\ce{\\xlongequal[{${e}}]{${e}}}` : `\\ce{${d[n]}[{${i}}][{${e}}]}`) : A === 3 ? (n = s[0], i = s[1].split("{")[1].split("}")[0], n === "=" ? `\\ce{\\xlongequal{${i}}}` : `\\ce{${d[n]}[{${i}}]}`) : "";
}
function BU(t) {
  return t.replace(/((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}_\{[^}]+\}/g, (A) => v0(A, 2)).replace(/((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}/g, (A) => v0(A, 3));
}
const K0 = { "@": "æ", "u\\.\\.\\(r\\)": "{ʊə}^{r}", "\\.\\.": "ə", oi: "ɔɪ", ai: "aɪ", ei: "eɪ", "e(?!:)": "e", "e:": "ɜː", "\\(r\\)": "^{r}", "(![pr|\\\\underl])i(?![:|me])": "ɪ", "i:": "iː", "o(?!:)": "ɒ", "o:": "ɔː", au: "aʊ", Ou: "əʊ", "(.*!(\\\\))u(?!:)": "ʊ", "u:": "uː", ":": "ː", N: "ŋ", tS: "tʃ", S: "ʃ", th: "θ", TH: "ð", dZ: "dʒ", Z: "ʒ", prime: "prime" };
function lU(t) {
  return t.replace(/\\\[\\phonetic\{.*?\}\\\]/g, (A) => {
    let e = A.split("\\phonetic").join("");
    for (let n in K0)
      e = e.replace(new RegExp(n, "g"), (i) => K0[n]);
    return e.replaceAll("\\^", "\\wedge");
  });
}
function fU(t) {
  return t.replace(/\\fourlineruled\{\d+\}/g, (A) => {
    var e = Number(A.split("}")[0].split("{")[1]);
    let n = "\\class{fourlineruled}{";
    for (let i = 0; i < e; i++)
      n += "\\begin{array}{l}\\hline\\text{ }\\\\\\hline\\text{ }\\\\\\hline\\text{ }\\\\\\hline\\end{array}";
    return n += "}";
  });
}
function L0(e, A = "romannumeral") {
  var e = Number(e.split(A + "{")[1].split("}")[0]) / 10, n = Math.floor(e), i = Number((e + "").split(".")[1]);
  let d = "";
  if (0 < n)
    for (let s = 0; s < n; s++)
      d += "x";
  if (i < 4)
    for (let s = 0; s < i; s++)
      d += "i";
  if (i === 4 && (d += "iv"), i === 5 && (d += "v"), 5 < i && i < 9) {
    d += "v";
    for (let s = 5; s < i; s++)
      d += "i";
  }
  return i === 9 && (d += "ix"), i === 10 && (d += "x"), d = A === "RomanNumeralCaps" ? (d = (d = d.replace(/i/g, "I")).replace(/v/g, "V")).replace(/x/g, "X") : d;
}
function gU(t) {
  return t.replace(/\\romannumeral\{\d+\}/g, (A) => `\\mathsf{${L0(A)}}`).replace(/\\RomanNumeralCaps\{\d+\}/g, (A) => `\\mathsf{${L0(A, "RomanNumeralCaps")}}`);
}
function wU(t) {
  const A = Array.from(t.matchAll(/[.,'"!\*\/\?、。;:]/g)), e = /\\style\{([\w-]+:[\w\d-]+;*)+\}/g, n = /((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}_\{[^}]+\}/g, i = /\\underline\{.*?\}/g, d = /\_\{.*?\}/g, s = /\^\{.*?\}/g, l = /\}[.,'"!\*\/\?、。;:]/g, w = /\\\[\\phonetic\{.*?\}\\\]/g, h = /\\uwave\{.*?\}/g, g = /\\blank\{.+?\}\{\d+\/\d+\/(A|B|L)\}/g;
  return A.forEach((p, K) => {
    let _ = !0;
    t.charAt(p.index - 1) === `
` && (_ = !1), t.charAt(p.index + 1) !== "^" && t.charAt(p.index + 1) !== "_" || (_ = !1);
    var J = Array.from(t.matchAll(e)).concat(Array.from(t.matchAll(n))), S = Array.from(t.matchAll(i)).map(($) => [$.index, $.index + $[0].length]), v = Array.from(t.matchAll(d)).map(($) => [$.index, $.index + $[0].length]), M = Array.from(t.matchAll(s)).map(($) => [$.index, $.index + $[0].length]), k = Array.from(t.matchAll(l)).map(($) => [$.index, $.index + $[0].length]), X = Array.from(t.matchAll(w)).map(($) => [$.index, $.index + $[0].length]), iA = Array.from(t.matchAll(h)).map(($) => [$.index, $.index + $[0].length]), z = Array.from(t.matchAll(g)).map(($) => [$.index, $.index + $[0].length]), J = J.map(($) => [$.index, $.index + $[0].length]).concat(S).concat(v).concat(M).concat(k).concat(X).concat(iA).concat(z);
    if ((K < A.length - 1 && p.index + 1 === A[K + 1].index || 1 < K && p.index - 1 === A[K - 1].index) && (_ = !1), _ = -1 < J.findIndex(($) => p.index >= $[0] && p.index <= $[1]) ? !1 : _) {
      var lA = p[0];
      let $ = `_\\class{mjx-kz-sub}{${lA}}`;
      ["'", '"'].includes(lA) && ($ = `^\\class{mjx-kz-sup}{${lA}}`), t = t.substring(0, p.index) + $ + t.substring(p.index + 1);
      for (let vA = K + 1; vA < A.length; vA++)
        A[vA].index += $.length - lA.length;
    }
  }), t;
}
function QU(t) {
  return t.replace(/\'/g, "\\textasciiacute{}").replace(/\"/g, "\\textacutedbl{}").replace(/\“/g, "\\textquotedblleft{}").replace(/\”/g, "\\textquotedblright{}");
}
function hU(t) {
  return t.replace(/(\\hand(?![a-zA-Z]))|(\\mix)|(\\deletion)|(\\insert)|(\\wrong)|(\\chnfield)|(\\engfield)|(<s>)|(<\/s>)|(<unk>)/g, (A) => " ");
}
function CU(t) {
  return t.replace(/\\tab\{\d+\}/g, (A) => {
    var e = Number(A.split("\\tab{")[1].split("}")[0]);
    let n = "";
    for (let i = 0; i < e; i++)
      n += "\\;\\;";
    return n;
  }).replace(/\\tab(?!le)/g, "\\;\\;");
}
function FU(t) {
  return t.replace(/[^\S\r]+/g, "\\;\\;");
}
function UU(t) {
  return t.replace(/(\<)|(\\prime)|(\\alpha)|(\\Alpha)|(\\beta)|(\\Beta)|(\\gamma)|(\\Gamma)|(\\delta)|(\\Delta)|(\\epsilon)|(\\Epsilon)|(\\zeta)|(\\Zeta)|(\\eta)|(\\Eta)|(\\theta)|(\\Theta)|(\\iota)|(\\Iota)|(\\kappa)|(\\Kappa)|(\\lambda)|(\\Lambda)|(\\mu)|(\\Mu)|(\\nu)|(\\Nu)|(\\xi)|(\\Xi)|(\\omicron)|(\\Omicron)|(\\pi)|(\\Pi)|(\\rho)|(\\Rho)|(\\sigma)|(\\Sigma)|(\\tau)|(\\Tau)|(\\upsilon)|(\\Upsilon)|(\\phi)|(\\Phi)|(\\chi)|(\\Chi)|(\\psi)|(\\Psi)|(\\omega)|(\\Omega)|(\\pm(?!od))|(\\mp)|(\\times)|(\\div)|(\\mid)|(\\prod)|(\\sum(?!\_))|(\\approx(?!eq))|(\\leq)|(\\geq)|(\\neq(?!uiv))|(\\equiv)|(\\propto)|(\\napprox)|(\\nleq)|(\\ngeq)|(\\nequiv)|(\\angle)|(\\cong)|(\\sim)|(\\parallel(?!ogram)(?!equal))|(\\parallelogram)|(\\parallelequal)|(\\perp)|(\\nparallel)|(\\cdots)|(\\ddots)|(\\vdots)|(\\lor)|(\\land)|(\\lnot)|(\\forall)|(\\exists)|(\\top)|(\\bot)|(\\cup)|(\\cap)|(\\subset(?!(neq|eq)))|(\\supset(?!neq|eq))|(\\notin)|(\\ni)|(\\notni)|(\\emptyset)|(\\complement)|(\\subseteq)|(\\supseteq(?!eq))|(\\nsubset(?!eq))|(\\nsupset(?!eq))|(\\subsetneq)|(\\supsetneq)|(\\nsubseteq)|(\\nsupseteq)|(\\infty)|(\\partial)|(\\Re)|(\\lg)|(\\lim(?!its))|(\\ln)|(\\max)|(\\min)|(\\sin)|(\\cos)|(\\tan)|(\\sec)|(\\cot)|(\\csc)|(\\arcsin)|(\\arccos)|(\\arctan)|(\\arccot(?!angent))|(\\arcsec)|(\\arccsc)|(\\Leftarrow(?!\\limits))|(\\leftarrow(?!\\limits))|(\\Rightarrow(?!\\limits))|(\\rightarrow(?!\\limits))|(\\Uparrow)|(\\uparrow)|(\\Downarrow)|(\\downarrow)|(\\Leftrightarrow(?!\\limits))|(\\leftrightarrow(?!\\limits))|(\\Updownarrow)|(\\updownarrow)|(\\NEarrow)|(\\nearrow)|(\\NWarrow)|(\\nwarrow)|(\\SEarrow)|(\\searrow)|(\\SWarrow)|(\\swarrow)|(\\hookleftarrow)|(\\odot)|(\\ominus)|(\\oplus)|(\\otimes)|(\\oiiint)|(\\oiint)|(\\oint)|(\\diamond)|(\\square)|(\\rectangle)|(\\star)|(\\bigstar)|(\\triangle(?!down))|(\\triangledown)|(\\heart(?!suit))|(\\bullet)|(\\female)|(\\male)|(\\smiley)|(\\spadesuit)|(\\clubsuit)|(\\blackdiamond)|(\\blacksquare)|(\\blackrectangle)|(\\blackstar)|(\\blacktriangle(?!down))|(\\blacktriangledown)|(\\blackheart)|(\\textperthousand)|(\\textreferencemark)|(\\textregistered)|(\\textsection)|(\\texttrademark)|(\\cdot)|(\\because)|(\\therefore)|(\\chi)|(\\circledcirc)|(\\circ)|(\\xmark)|(\\cmark)|(\\in(?!(t|sert)))|(\\omitted)/g, (A) => A + "\\,");
}
function pU(t) {
  return t.replace(/\n\[/g, (A) => "\\\\\\[");
}
function mU(t) {
  return t.replace(/\*/g, "{*}").replace(/\n/g, "\\\\");
}
function EU(t) {
  return t.replace(/\\left\\{/g, (A) => "\\left\\{\\begin{array}{l}" + A.split("\\left\\{")[1]).replace(/\\right\\}/g, (A) => A.split("\\right\\}")[0] + "\\end{array}\\right.");
}
function DU(t) {
  return t.replace(/\\reverse\{.*?\}\{.*?\}/g, (A) => {
    var e = A.split("}{")[0].split("\\reverse{")[1];
    return "" + A.split("}{")[1].split("}")[0] + e;
  });
}
function HU(t) {
  return t.replace(/\\parallel(?!ogram)(?!equal)/g, (A) => `\\class{parallel}{${A}}`);
}
const x0 = { A: 2, B: 0, L: 1 };
function yU(t, A) {
  return t.replace(/\\blank\{.+?\}\{\d+\/\d+\/(A|B|L)\}/g, (e) => {
    var n = e.match(/\\blank\{/), n = ((n == null ? void 0 : n.index) || 0) + (n[(n == null ? void 0 : n.index) || 0].length || 0), d = e.match(/\{\d+\/\d+\/(A|B|L)\}/), i = (d == null ? void 0 : d.index) || 0, d = d[0].slice(1, d[0].length - 1).split("/"), s = ((s = (s = MathJax == null ? void 0 : MathJax.config) == null ? void 0 : s.tex) == null ? void 0 : s.formatError) || ((s = MathJax == null ? void 0 : MathJax.tex) == null ? void 0 : s.formatError);
    return d[0] === "0" ? (s("", new Error("blank sign questionSubIdx should startwith 1")), e) : d[1] === "0" ? (s("", new Error("blank sign blankIdx should startwith 1")), e) : (n = e.slice(n, i - 1)).includes("\\blank") ? (s("", new Error("blank sign don't support nest")), e) : (e = `\\class{kbs i_${(i = parseInt(d[0])) - 1}_${(s = parseInt(d[1])) - 1}_${x0[d[2]]}}{\\,}`, i = `\\class{kbe i_${i - 1}_${s - 1}_${x0[d[2]]}}{\\,}`, s = A == null ? void 0 : A.blankLight, d[2] === "A" ? e + (s ? "\\class{bk_lg_1}{" : "") + n + (s ? "}" : "") + i + "{}" : e + (s ? "\\class{bk_lg_2}{" : "") + n + (s ? "}" : "") + i + "{}");
  });
}
function bU(t) {
  return t.replace(/\\underline\{.*?\}/g, (A) => {
    var e = A.split("\\underline{")[1];
    return e.split("}").length === 2 && 16 < e.split("}")[0].length ? "\\class{mjx-kz-underline}{{}" + e : A;
  });
}
function IU(t) {
  let A = 0;
  for (let e = 0; e < t.length; e++)
    /[^\x00-\xff]/.test(t.substr(e, 1)) || [",", ".", "'", " "].includes(t.substr(e, 1)) ? A += 2.2 : A += 1;
  return A;
}
function vU(t) {
  return t.replace(/\\uwave\{.*?\}/g, (e) => {
    var e = e.split("\\uwave{")[1].split("}")[0], n = [], i = Math.floor(IU(e));
    for (let d = 0; d < i; d++)
      n.push("\\thicksim");
    return `\\underset{\\class{wave}{${n.join("\\!")}}}{${e}}`;
  });
}
function KU(t) {
  return t.replace(/\\_(\{\d+\})/g, (A) => {
    let e = "";
    var n = Number(A.split("_{")[1].split("}")[0]);
    for (let i = 0; i < Number(n); i++)
      e += "\\_";
    return e;
  });
}
function LU(t, A) {
  return t.replace(/(\\_)+/g, (e) => {
    var n = e.split("\\").length - 1;
    return A.lineOuterMax && n <= A.lineOuterMax ? `{${e}}` : e;
  });
}
class xU {
  constructor(A, e) {
    Ua(this, "content"), Ua(this, "options"), this.content = A, this.options = e;
  }
  formatUnderline() {
    return this.content = bU(this.content), this;
  }
  formatDeleteBySign() {
    return this.content = hU(this.content), this;
  }
  formatMultipleTab() {
    return this.content = CU(this.content), this;
  }
  formatAloneSign() {
    return this.content = UU(this.content), this;
  }
  formatOrder() {
    return this.content = gU(this.content), this;
  }
  formatLimits() {
    return this.content = BU(this.content), this;
  }
  formatMiddleBrackets() {
    return this.content = pU(this.content), this;
  }
  formatLineBreak() {
    return this.content = mU(this.content), this;
  }
  formatSimultaneous() {
    return this.content = EU(this.content), this;
  }
  formatPhonetic() {
    return this.content = lU(this.content), this;
  }
  formatQuotes() {
    return this.content = QU(this.content), this;
  }
  formatUwave() {
    return this.content = vU(this.content), this;
  }
  formatReverse() {
    return this.content = DU(this.content), this;
  }
  formatMultipleLine() {
    return this.content = KU(this.content), this;
  }
  formatFourlineRuled() {
    return this.content = fU(this.content), this;
  }
  formatSpace() {
    return this.content = FU(this.content), this;
  }
  formatLineWapper() {
    return this.options && (this.content = LU(this.content, this.options)), this;
  }
  formatItParallel() {
    return this.content = HU(this.content), this;
  }
  formatBlankSign() {
    return this.content = yU(this.content, this.options), this;
  }
}
function _U(t, A) {
  return t = new xU(t, A), t.formatUnderline().formatDeleteBySign().formatMultipleTab().formatAloneSign().formatOrder().formatLimits().formatMiddleBrackets().formatLineBreak().formatSimultaneous().formatPhonetic().formatUwave().formatQuotes().formatReverse().formatMultipleLine().formatFourlineRuled().formatSpace().formatLineWapper().formatItParallel().formatBlankSign(), t.content;
}
const ce = "xregexp", Vo = { astral: !1, namespacing: !0 }, cr = {};
let Pd = {}, ga = {};
const vg = [], ma = "default", _0 = "class", SU = { default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/, class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/ }, OU = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g, TU = /()??/.exec("")[1] === void 0, MU = /x/.flags !== void 0;
function _s(t) {
  let A = !0;
  try {
    new RegExp("", t), t === "y" && ".a".replace(new RegExp("a", "gy"), ".") === ".." && (A = !1);
  } catch {
    A = !1;
  }
  return A;
}
const kU = _s("d"), g0 = _s("s"), dh = _s("u"), Kg = _s("y"), sh = { d: kU, g: !0, i: !0, m: !0, s: g0, u: dh, y: Kg }, GU = g0 ? /[^dgimsuy]+/g : /[^dgimuy]+/g;
function ch(t, A, e, n, i) {
  if (t[ce] = { captureNames: A }, !i) {
    if (t.__proto__)
      t.__proto__ = eA.prototype;
    else
      for (const d in eA.prototype)
        t[d] = eA.prototype[d];
    t[ce].source = e, t[ce].flags = n && n.split("").sort().join("");
  }
  return t;
}
function ys(t) {
  return t.replace(/([\s\S])(?=[\s\S]*\1)/g, "");
}
function Go(t, A) {
  if (!eA.isRegExp(t))
    throw new TypeError("Type RegExp expected");
  var e = t[ce] || {};
  let n = VU(t), i = "", d = "", s = null, l = null;
  return (A = A || {}).removeG && (d += "g"), A.removeY && (d += "y"), d && (n = n.replace(new RegExp(`[${d}]+`, "g"), "")), A.addG && (i += "g"), A.addY && (i += "y"), i && (n = ys(n + i)), A.isInternalOnly || (e.source !== void 0 && (s = e.source), e.flags != null && (l = i ? ys(e.flags + i) : e.flags)), t = ch(new RegExp(A.source || t.source, n), RU(t) ? e.captureNames.slice(0) : null, s, l, A.isInternalOnly);
}
function S0(t) {
  return parseInt(t, 16);
}
function O0(t, A, e) {
  var n = t.index + t[0].length, i = t.input[t.index - 1], d = t.input[n];
  return /^[()|]$/.test(i) || /^[()|]$/.test(d) || t.index === 0 || n === t.input.length || /\(\?(?:[:=!]|<[=!])$/.test(t.input.substring(t.index - 4, t.index)) || NU(t.input, n, e) ? "" : "(?:)";
}
function VU(t) {
  return MU ? t.flags : /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(t))[1];
}
function RU(t) {
  return !(!t[ce] || !t[ce].captureNames);
}
function Sf(t) {
  return parseInt(t, 10).toString(16);
}
function NU(t, A, e) {
  var n = "\\(\\?#[^)]*\\)", i = "[?*+]|{\\d+(?:,\\d*)?}";
  return (e.includes("x") ? new RegExp(`^(?:\\s|#[^#\\n]*|${n})*(?:${i})`) : new RegExp(`^(?:${n})*(?:${i})`)).test(t.slice(A));
}
function ZB(t, A) {
  return Object.prototype.toString.call(t) === `[object ${A}]`;
}
function ta(t) {
  if (t == null)
    throw new TypeError("Cannot convert null or undefined to object");
  return t;
}
function Of(t) {
  for (; t.length < 4; )
    t = "0" + t;
  return t;
}
function PU(t, A) {
  if (ys(A) !== A)
    throw new SyntaxError("Invalid duplicate regex flag " + A);
  t = t.replace(/^\(\?([\w$]+)\)/, (e, n) => {
    if (/[dgy]/.test(n))
      throw new SyntaxError("Cannot use flags dgy in mode modifier " + e);
    return A = ys(A + n), "";
  });
  for (const e of A)
    if (!sh[e])
      throw new SyntaxError("Unknown regex flag " + e);
  return { pattern: t, flags: A };
}
function T0(t) {
  const A = {};
  return ZB(t, "String") ? (eA.forEach(t, /[^\s,]+/, (e) => {
    A[e] = !0;
  }), A) : t;
}
function M0(t) {
  if (!/^[\w$]$/.test(t))
    throw new Error("Flag must be a single character A-Za-z0-9_$");
  sh[t] = !0;
}
function JU(t, A, e, n, i) {
  let d = vg.length;
  var s = t[e];
  let l = null, w, h;
  for (; d--; )
    if (!((h = vg[d]).leadChar && h.leadChar !== s || h.scope !== n && h.scope !== "all" || h.flag && !A.includes(h.flag)) && (w = eA.exec(t, h.regex, e, "sticky"))) {
      l = { matchLength: w[0].length, output: h.handler.call(i, w, n, A), reparse: h.reparse };
      break;
    }
  return l;
}
function k0(t) {
  Vo.astral = t;
}
function G0(t) {
  Vo.namespacing = t;
}
function eA(t, A) {
  if (eA.isRegExp(t)) {
    if (A !== void 0)
      throw new TypeError("Cannot supply flags when copying a RegExp");
    return Go(t);
  }
  if (t = t === void 0 ? "" : String(t), A = A === void 0 ? "" : String(A), eA.isInstalled("astral") && !A.includes("A") && (A += "A"), ga[t] || (ga[t] = {}), !ga[t][A]) {
    var e = { hasNamedCapture: !1, captureNames: [] };
    let s = ma, l = "", w = 0, h;
    var n = PU(t, A);
    let g = n.pattern;
    for (var i, d = n.flags; w < g.length; ) {
      for (; (h = JU(g, d, w, s, e)) && h.reparse && (g = g.slice(0, w) + h.output + g.slice(w + h.matchLength)), h && h.reparse; )
        ;
      h ? (l += h.output, w += h.matchLength || 1) : ([i] = eA.exec(g, SU[s], w, "sticky"), l += i, w += i.length, i === "[" && s === ma ? s = _0 : i === "]" && s === _0 && (s = ma));
    }
    ga[t][A] = { pattern: l.replace(/(?:\(\?:\))+/g, "(?:)"), flags: d.replace(GU, ""), captures: e.hasNamedCapture ? e.captureNames : null };
  }
  return n = ga[t][A], ch(new RegExp(n.pattern, n.flags), n.captures, t, A);
}
eA.prototype = new RegExp(), eA.version = "5.1.1", eA._clipDuplicates = ys, eA._hasNativeFlag = _s, eA._dec = S0, eA._hex = Sf, eA._pad4 = Of, eA.addToken = (t, A, e) => {
  let n = (e = e || {}).optionalFlags;
  if (e.flag && M0(e.flag), n)
    for (const i of n = n.split(""))
      M0(i);
  vg.push({ regex: Go(t, { addG: !0, addY: Kg, isInternalOnly: !0 }), handler: A, scope: e.scope || ma, flag: e.flag, reparse: e.reparse, leadChar: e.leadChar }), eA.cache.flush("patterns");
}, eA.cache = (t, A) => (Pd[t] || (Pd[t] = {}), Pd[t][A] || (Pd[t][A] = eA(t, A))), eA.cache.flush = (t) => {
  t === "patterns" ? ga = {} : Pd = {};
}, eA.escape = (t) => String(ta(t)).replace(/[\\\[\]{}()*+?.^$|]/g, "\\$&").replace(/[\s#\-,]/g, (A) => "\\u" + Of(Sf(A.charCodeAt(0)))), eA.exec = (t, A, e, n) => {
  let i = "g", d, s = !1, l;
  return (d = Kg && !!(n || A.sticky && n !== !1)) ? i += "y" : n && (s = !0, i += "FakeY"), A[ce] = A[ce] || {}, n = A[ce][i] || (A[ce][i] = Go(A, { addG: !0, addY: d, source: s ? A.source + "|()" : void 0, removeY: n === !1, isInternalOnly: !0 })), n.lastIndex = e = e || 0, l = cr.exec.call(n, t), s && l && l.pop() === "" && (l = null), A.global && (A.lastIndex = l ? n.lastIndex : 0), l;
}, eA.forEach = (t, A, e) => {
  let n = 0, i = -1, d;
  for (; d = eA.exec(t, A, n); )
    e(d, ++i, t, A), n = d.index + (d[0].length || 1);
}, eA.globalize = (t) => Go(t, { addG: !0 }), eA.install = (t) => {
  t = T0(t), !Vo.astral && t.astral && k0(!0), !Vo.namespacing && t.namespacing && G0(!0);
}, eA.isInstalled = (t) => !!Vo[t], eA.isRegExp = (t) => Object.prototype.toString.call(t) === "[object RegExp]", eA.match = (d, A, e) => {
  var n = A.global && e !== "one" || e === "all", i = (n ? "g" : "") + (A.sticky ? "y" : "") || "noGY", i = (A[ce] = A[ce] || {}, A[ce][i] || (A[ce][i] = Go(A, { addG: !!n, removeG: e === "one", isInternalOnly: !0 }))), d = String(ta(d)).match(i);
  return A.global && (A.lastIndex = e === "one" && d ? d.index + d[0].length : 0), n ? d || [] : d && d[0];
}, eA.matchChain = (t, A) => function e(n, i) {
  const d = A[i].regex ? A[i] : { regex: A[i] }, s = [];
  function l(w) {
    if (d.backref) {
      var h = "Backreference to undefined group: " + d.backref, g = isNaN(d.backref);
      if (g && eA.isInstalled("namespacing")) {
        if (!(w.groups && d.backref in w.groups))
          throw new ReferenceError(h);
      } else if (!w.hasOwnProperty(d.backref))
        throw new ReferenceError(h);
      h = (g && eA.isInstalled("namespacing") ? w.groups : w)[d.backref], s.push(h || "");
    } else
      s.push(w[0]);
  }
  for (const w of n)
    eA.forEach(w, d.regex, l);
  return i !== A.length - 1 && s.length ? e(s, i + 1) : s;
}([t], 0), eA.replace = (t, A, e, n) => {
  var i = eA.isRegExp(A), d = A.global && n !== "one" || n === "all", s = (d ? "g" : "") + (A.sticky ? "y" : "") || "noGY";
  let l = A;
  return i ? (A[ce] = A[ce] || {}, l = A[ce][s] || (A[ce][s] = Go(A, { addG: !!d, removeG: n === "one", isInternalOnly: !0 }))) : d && (l = new RegExp(eA.escape(String(A)), "g")), s = cr.replace.call(ta(t), l, e), i && A.global && (A.lastIndex = 0), s;
}, eA.replaceEach = (t, A) => {
  for (const e of A)
    t = eA.replace(t, e[0], e[1], e[2]);
  return t;
}, eA.split = (t, A, e) => cr.split.call(ta(t), A, e), eA.test = (t, A, e, n) => !!eA.exec(t, A, e, n), eA.uninstall = (t) => {
  t = T0(t), Vo.astral && t.astral && k0(!1), Vo.namespacing && t.namespacing && G0(!1);
}, eA.union = (t, A, e) => {
  e = (e = e || {}).conjunction || "or";
  let n = 0, i, d;
  function s(h, g, p) {
    var K = d[n - i];
    if (g) {
      if (++n, K)
        return `(?<${K}>`;
    } else if (p)
      return "\\" + (+p + i);
    return h;
  }
  if (!ZB(t, "Array") || !t.length)
    throw new TypeError("Must provide a nonempty array of patterns to merge");
  var l = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, w = [];
  for (const h of t)
    eA.isRegExp(h) ? (i = n, d = h[ce] && h[ce].captureNames || [], w.push(eA(h.source).source.replace(l, s))) : w.push(eA.escape(h));
  return eA(w.join(e === "none" ? "" : "|"), A);
}, cr.exec = function(t) {
  const A = this.lastIndex, e = RegExp.prototype.exec.apply(this, arguments);
  if (e) {
    var n;
    if (!TU && 1 < e.length && e.includes("") && (n = Go(this, { removeG: !0, isInternalOnly: !0 }), String(t).slice(e.index).replace(n, (...d) => {
      var s = d.length;
      for (let l = 1; l < s - 2; ++l)
        d[l] === void 0 && (e[l] = void 0);
    })), this[ce] && this[ce].captureNames) {
      let d = e;
      eA.isInstalled("namespacing") && (e.groups = /* @__PURE__ */ Object.create(null), d = e.groups);
      for (let s = 1; s < e.length; ++s) {
        var i = this[ce].captureNames[s - 1];
        i && (d[i] = e[s]);
      }
    } else
      !e.groups && eA.isInstalled("namespacing") && (e.groups = void 0);
    this.global && !e[0].length && this.lastIndex > e.index && (this.lastIndex = e.index);
  }
  return this.global || (this.lastIndex = A), e;
}, cr.test = function(t) {
  return !!cr.exec.call(this, t);
}, cr.match = function(t) {
  var A;
  if (eA.isRegExp(t)) {
    if (t.global)
      return A = String.prototype.match.apply(this, arguments), t.lastIndex = 0, A;
  } else
    t = new RegExp(t);
  return cr.exec.call(t, ta(this));
}, cr.replace = function(t, A) {
  var e = eA.isRegExp(t);
  let n, i, d;
  return e ? (t[ce] && ({ captureNames: i } = t[ce]), n = t.lastIndex) : t += "", d = ZB(A, "Function") ? String(this).replace(t, (...s) => {
    if (i) {
      let l;
      eA.isInstalled("namespacing") ? (l = /* @__PURE__ */ Object.create(null), s.push(l)) : (s[0] = new String(s[0]), [l] = s);
      for (let w = 0; w < i.length; ++w)
        i[w] && (l[i[w]] = s[w + 1]);
    }
    return A(...s);
  }) : String(ta(this)).replace(t, (...s) => String(A).replace(OU, function(l, w, h, g) {
    if (w = w || h, h = ZB(s[s.length - 1], "Object") ? 4 : 3, h = s.length - h, w) {
      if (/^\d+$/.test(w)) {
        var p = +w;
        if (p <= h)
          return s[p] || "";
      }
      if (p = i ? i.indexOf(w) : -1, p < 0)
        throw new SyntaxError("Backreference to undefined group " + l);
      return s[p + 1] || "";
    }
    if (g === "" || g === " ")
      throw new SyntaxError("Invalid token " + l);
    if (g === "&" || +g == 0)
      return s[0];
    if (g === "$")
      return "$";
    if (g === "`")
      return s[s.length - 1].slice(0, s[s.length - 2]);
    if (g === "'")
      return s[s.length - 1].slice(s[s.length - 2] + s[0].length);
    if (g = +g, isNaN(g))
      throw new SyntaxError("Invalid token " + l);
    if (h < g)
      throw new SyntaxError("Backreference to undefined group " + l);
    return s[g] || "";
  })), e && (t.global ? t.lastIndex = 0 : t.lastIndex = n), d;
}, cr.split = function(t, A) {
  if (!eA.isRegExp(t))
    return String.prototype.split.apply(this, arguments);
  const e = String(this), n = [], i = t.lastIndex;
  let d = 0, s;
  return A = (A === void 0 ? -1 : A) >>> 0, eA.forEach(e, t, (l) => {
    l.index + l[0].length > d && (n.push(e.slice(d, l.index)), 1 < l.length && l.index < e.length && Array.prototype.push.apply(n, l.slice(1)), s = l[0].length, d = l.index + s);
  }), d === e.length ? t.test("") && !s || n.push("") : n.push(e.slice(d)), t.lastIndex = i, n.length > A ? n.slice(0, A) : n;
}, eA.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, (t, A) => {
  if (t[1] === "B" && A === ma)
    return t[0];
  throw new SyntaxError("Invalid escape " + t[0]);
}, { scope: "all", leadChar: "\\" }), eA.addToken(/\\u{([\dA-Fa-f]+)}/, (t, A, e) => {
  var n = S0(t[1]);
  if (1114111 < n)
    throw new SyntaxError("Invalid Unicode code point " + t[0]);
  if (n <= 65535)
    return "\\u" + Of(Sf(n));
  if (dh && e.includes("u"))
    return t[0];
  throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
}, { scope: "all", leadChar: "\\" }), eA.addToken(/\(\?#[^)]*\)/, O0, { leadChar: "(" }), eA.addToken(/\s+|#[^\n]*\n?/, O0, { flag: "x" }), g0 || eA.addToken(/\./, () => "[\\s\\S]", { flag: "s", leadChar: "." }), eA.addToken(/\\k<([^>]+)>/, function(t) {
  var A = isNaN(t[1]) ? this.captureNames.indexOf(t[1]) + 1 : +t[1], e = t.index + t[0].length;
  if (!A || A > this.captureNames.length)
    throw new SyntaxError("Backreference to undefined group " + t[0]);
  return "\\" + A + (e === t.input.length || isNaN(t.input[e]) ? "" : "(?:)");
}, { leadChar: "\\" }), eA.addToken(/\\(\d+)/, function(t, A) {
  if (A === ma && /^[1-9]/.test(t[1]) && +t[1] <= this.captureNames.length || t[1] === "0")
    return t[0];
  throw new SyntaxError("Cannot use octal escape or backreference to undefined group " + t[0]);
}, { scope: "all", leadChar: "\\" }), eA.addToken(/\(\?P?<((?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0898-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDEFD-\uDF1C\uDF27\uDF30-\uDF50\uDF70-\uDF85\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF42\uDF50-\uDF59\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC40-\uDC55]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDCD0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]|\uDB40[\uDD00-\uDDEF])*)>/, function(t) {
  if (!eA.isInstalled("namespacing") && (t[1] === "length" || t[1] === "__proto__"))
    throw new SyntaxError("Cannot use reserved word as capture name " + t[0]);
  if (this.captureNames.includes(t[1]))
    throw new SyntaxError("Cannot use same name for multiple groups " + t[0]);
  return this.captureNames.push(t[1]), this.hasNamedCapture = !0, "(";
}, { leadChar: "(" }), eA.addToken(/\((?!\?)/, function(t, A, e) {
  return e.includes("n") ? "(?:" : (this.captureNames.push(null), "(");
}, { optionalFlags: "n", leadChar: "(" });
const XU = (t) => {
  const A = "xregexp", e = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, n = t.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, e], "g", { conjunction: "or" });
  function i(w, h) {
    return h = h ? "x" : "", t.isRegExp(w) ? w[A] && w[A].captureNames ? w : t(w.source, h) : t(w, h);
  }
  function d(w) {
    return w instanceof RegExp ? w : t.escape(w);
  }
  function s(w, h, g) {
    return w["subpattern" + g] = h, w;
  }
  function l(w, h, g) {
    return w + (h < g.length - 1 ? `{{subpattern${h}}}` : "");
  }
  t.tag = (w) => (h, ...g) => (g = g.map(d).reduce(s, {}), h = h.raw.map(l).join(""), t.build(h, g, w)), t.build = (w, h, g) => {
    var p, K, _, S, v = (g = g || "").includes("x"), M = /^\(\?([\w$]+)\)/.exec(w);
    M && (g = t._clipDuplicates(g + M[1]));
    const k = {};
    for (const vA in h)
      h.hasOwnProperty(vA) && (p = i(h[vA], v), k[vA] = { pattern: (K = p.source, S = _ = void 0, S = /\$(?:\(\?:\))*$/, (_ = /^(?:\(\?:\))*\^/).test(K) && S.test(K) && S.test(K.replace(/\\[\s\S]/g, "")) ? K.replace(_, "").replace(S, "") : K), names: p[A].captureNames || [] });
    M = i(w, v);
    let X = 0, iA, z = 0;
    const J = [0], lA = M[A].captureNames || [], $ = M.source.replace(n, (vA, IA, YA, Fe, ne) => {
      const $A = IA || YA;
      let ge, ve, ZA;
      if ($A) {
        if (!k.hasOwnProperty($A))
          throw new ReferenceError("Undefined property " + vA);
        return ve = IA ? (ge = lA[z], J[++z] = ++X, `(?<${ge || $A}>`) : "(?:", iA = X, YA = k[$A].pattern.replace(e, (Be, hr, Ln) => {
          if (hr) {
            if (ge = k[$A].names[X - iA], ++X, ge)
              return `(?<${ge}>`;
          } else if (Ln)
            return ZA = +Ln - 1, k[$A].names[ZA] ? `\\k<${k[$A].names[ZA]}>` : "\\" + (+Ln + iA);
          return Be;
        }), "" + ve + YA + ")";
      }
      if (Fe) {
        if (ge = lA[z], J[++z] = ++X, ge)
          return `(?<${ge}>`;
      } else if (ne)
        return ZA = +ne - 1, lA[ZA] ? `\\k<${lA[ZA]}>` : "\\" + J[+ne];
      return vA;
    });
    return t($, g);
  };
}, WU = (t) => {
  function A(e, n, i, d) {
    return { name: e, value: n, start: i, end: d };
  }
  t.matchRecursive = (e, n, i, d, s) => {
    s = s || {};
    var l = (d = d || "").includes("g"), w = d.includes("y"), h = d.replace(/y/g, "");
    n = t(n, h), i = t(i, h);
    let g, p = s.escapeChar;
    if (p) {
      if (1 < p.length)
        throw new Error("Cannot use more than one escape character");
      p = t.escape(p), g = new RegExp(`(?:${p}[\\S\\s]|(?:(?!${t.union([n, i], "", { conjunction: "or" }).source})[^${p}])+)+`, d.replace(t._hasNativeFlag("s") ? /[^imsu]/g : /[^imu]/g, ""));
    }
    let K = 0, _ = 0, S = 0, v = 0, M, k, X, iA;
    for (var z = s.valueNames, J = []; ; ) {
      if (p && (S += (t.exec(e, g, S, "sticky") || [""])[0].length), X = t.exec(e, n, S), iA = t.exec(e, i, S), X && iA && (X.index <= iA.index ? iA = null : X = null), X || iA)
        _ = (X || iA).index, S = _ + (X || iA)[0].length;
      else if (!K)
        break;
      if (w && !K && _ > v)
        break;
      if (X)
        K || (M = _, k = S), K += 1;
      else if (iA && K) {
        if (!--K && (z ? (z[0] && M > v && J.push(A(z[0], e.slice(v, M), v, M)), z[1] && J.push(A(z[1], e.slice(M, k), M, k)), z[2] && J.push(A(z[2], e.slice(k, _), k, _)), z[3] && J.push(A(z[3], e.slice(_, S), _, S))) : J.push(e.slice(k, _)), v = S, !l))
          break;
      } else {
        var lA, $, vA = s.unbalanced || "error";
        if (vA !== "skip" && vA !== "skip-lazy")
          throw vA === "error" ? (lA = iA ? "right" : "left", $ = iA ? _ : M, new Error(`Unbalanced ${lA} delimiter found in string at position ` + $)) : new Error("Unsupported value for unbalanced: " + vA);
        iA ? iA = null : (S = vA === "skip" ? (lA = t.exec(e, n, M, "sticky")[0].length, M + (lA || 1)) : M + 1, K = 0);
      }
      _ === S && (S += 1);
    }
    return l && 0 < J.length && !w && z && z[0] && e.length > v && J.push(A(z[0], e.slice(v), v, e.length)), J;
  };
}, YU = (t) => {
  const A = {}, e = {}, n = t._dec, i = t._hex, d = t._pad4;
  function s(g) {
    return g.replace(/[- _]+/g, "").toLowerCase();
  }
  function l(g) {
    var p = /^\\[xu](.+)/.exec(g);
    return p ? n(p[1]) : g.charCodeAt(g[0] === "\\" ? 1 : 0);
  }
  function w(g) {
    return A[g]["b!"] || (A[g]["b!"] = function(p) {
      let K = "", _ = -1;
      return t.forEach(p, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, (S) => {
        var v = l(S[1]);
        v > _ + 1 && (K += "\\u" + d(i(_ + 1)), v > _ + 2) && (K += "-\\u" + d(i(v - 1))), _ = l(S[2] || S[1]);
      }), _ < 65535 && (K += "\\u" + d(i(_ + 1)), _ < 65534) && (K += "-\\uFFFF"), K;
    }(A[g].bmp));
  }
  function h(g, p) {
    var K = p ? "a!" : "a=";
    return A[g][K] || (A[g][K] = function(_, S) {
      _ = A[_];
      let v = "";
      return _.bmp && !_.isBmpLast && (v = `[${_.bmp}]` + (_.astral ? "|" : "")), _.astral && (v += _.astral), _.isBmpLast && _.bmp && (v += `${_.astral ? "|" : ""}[${_.bmp}]`), S ? `(?:(?!${v})(?:[�-�][�-�]|[\0-￿]))` : `(?:${v})`;
    }(g, p));
  }
  t.addToken(/\\([pP])(?:{(\^?)(?:(\w+)=)?([^}]*)}|([A-Za-z]))/, (S, p, K) => {
    var _ = "Unknown Unicode token ", [S, v, M, k, X, iA] = S;
    let z = v === "P" || !!M;
    K = K.includes("A");
    let J = s(iA || X), lA = A[J];
    if (v === "P" && M)
      throw new SyntaxError("Invalid double negation " + S);
    if (!A.hasOwnProperty(J))
      throw new SyntaxError(_ + S);
    if (k && (!e[k] || !e[k][J]))
      throw new SyntaxError(_ + S);
    if (lA.inverseOf) {
      if (J = s(lA.inverseOf), !A.hasOwnProperty(J))
        throw new ReferenceError("Unicode token missing data " + S + " -> " + lA.inverseOf);
      lA = A[J], z = !z;
    }
    if (!lA.bmp && !K)
      throw new SyntaxError("Astral mode required for Unicode token " + S);
    if (K) {
      if (p === "class")
        throw new SyntaxError("Astral mode does not support Unicode tokens within character classes");
      return h(J, z);
    }
    return p === "class" ? z ? w(J) : lA.bmp : (z ? "[^" : "[") + lA.bmp + "]";
  }, { scope: "all", optionalFlags: "A", leadChar: "\\" }), t.addUnicodeData = (g, p) => {
    p && (e[p] = {});
    for (const _ of g) {
      if (!_.name)
        throw new Error("Unicode token requires name");
      if (!(_.inverseOf || _.bmp || _.astral))
        throw new Error("Unicode token has no character data " + _.name);
      var K = s(_.name);
      A[K] = _, p && (e[p][K] = !0), _.alias && (K = s(_.alias), A[K] = _, p) && (e[p][K] = !0);
    }
    t.cache.flush("patterns");
  }, t._getUnicodeProperty = (g) => (g = s(g), A[g]);
};
var ZU = [{ name: "C", alias: "Other", isBmpLast: !0, bmp: "\0--­͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-؅؜۝܎܏݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏-ࢗ࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿", astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCBD\uDCC3-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]" }, { name: "Cc", alias: "Control", bmp: "\0--" }, { name: "Cf", alias: "Format", bmp: "­؀-؅؜۝܏࢐࢑࣢᠎​-‏‪-‮⁠-⁤⁦-⁯\uFEFF￹-￻", astral: "\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]" }, { name: "Cn", alias: "Unassigned", bmp: "͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-׿܎݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏࢒-ࢗ঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿", astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCC3-\uDCCC\uDCCE\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F\uDC39-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]" }, { name: "Co", alias: "Private_Use", bmp: "-", astral: "[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]" }, { name: "Cs", alias: "Surrogate", bmp: "\uD800-\uDFFF" }, { name: "L", alias: "Letter", bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "LC", alias: "Cased_Letter", bmp: "A-Za-zµÀ-ÖØ-öø-ƺƼ-ƿǄ-ʓʕ-ʯͰ-ͳͶͷͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՠ-ֈႠ-ჅჇჍა-ჺჽ-ჿᎠ-Ᏽᏸ-ᏽᲀ-ᲈᲐ-ᲺᲽ-Ჿᴀ-ᴫᵫ-ᵷᵹ-ᶚḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⱻⱾ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭꙀ-ꙭꚀ-ꚛꜢ-ꝯꝱ-ꞇꞋ-ꞎꞐ-ꟊꟐꟑꟓꟕ-ꟙꟵꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚ", astral: "\uD801[\uDC00-\uDC4F\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD806[\uDCA0-\uDCDF]|\uD81B[\uDE40-\uDE7F]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD00-\uDD43]" }, { name: "Ll", alias: "Lowercase_Letter", bmp: "a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ", astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]" }, { name: "Lm", alias: "Modifier_Letter", bmp: "ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨࣉॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟲ-ꟴꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟꭩｰﾞﾟ", astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD838[\uDD37-\uDD3D]|𞥋" }, { name: "Lo", alias: "Other_Letter", bmp: "ªºƻǀ-ǃʔא-תׯ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣈऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳳᳵᳶᳺℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF4A\uDF50]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|𝼊|\uD838[\uDD00-\uDD2C\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Lt", alias: "Titlecase_Letter", bmp: "ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ" }, { name: "Lu", alias: "Uppercase_Letter", bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ", astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]" }, { name: "M", alias: "Mark", bmp: "̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣඁ-ඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-ᫎᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯", astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]" }, { name: "Mc", alias: "Spacing_Mark", bmp: "ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜ᜕᜴ាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡᳷〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦾ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬", astral: "\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD30-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]" }, { name: "Me", alias: "Enclosing_Mark", bmp: "҈҉᪾⃝-⃠⃢-⃤꙰-꙲" }, { name: "Mn", alias: "Nonspacing_Mark", bmp: "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣ৾ਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣૺ-૿ଁ଼ିୁ-ୄ୍୕ୖୢୣஂீ்ఀఄ఼ా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഀഁ഻഼ു-ൄ്ൢൣඁ්ි-ුූัิ-ฺ็-๎ັິ-ຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲᜳᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᪿ-ᫎᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꠬꣄ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꦽꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯", astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]" }, { name: "N", alias: "Number", bmp: "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９", astral: "\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]" }, { name: "Nd", alias: "Decimal_Number", bmp: "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９", astral: "\uD801[\uDCA0-\uDCA9]|\uD803[\uDD30-\uDD39]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9\uDD50-\uDD59]|\uD807[\uDC50-\uDC59\uDD50-\uDD59\uDDA0-\uDDA9]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDD50-\uDD59]|\uD83E[\uDFF0-\uDFF9]" }, { name: "Nl", alias: "Letter_Number", bmp: "ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ", astral: "\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]" }, { name: "No", alias: "Other_Number", bmp: "²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൘-൞൰-൸༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵", astral: "\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C\uDFC0-\uDFD4]|\uD81A[\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD83A[\uDCC7-\uDCCF]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]" }, { name: "P", alias: "Punctuation", bmp: "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹏⹒-⹝、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･", astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]" }, { name: "Pc", alias: "Connector_Punctuation", bmp: "_‿⁀⁔︳︴﹍-﹏＿" }, { name: "Pd", alias: "Dash_Punctuation", bmp: "\\-֊־᐀᠆‐-―⸗⸚⸺⸻⹀⹝〜〰゠︱︲﹘﹣－", astral: "𐺭" }, { name: "Pe", alias: "Close_Punctuation", bmp: "\\)\\]\\}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩⹖⹘⹚⹜〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣" }, { name: "Pf", alias: "Final_Punctuation", bmp: "»’”›⸃⸅⸊⸍⸝⸡" }, { name: "Pi", alias: "Initial_Punctuation", bmp: "«‘‛“‟‹⸂⸄⸉⸌⸜⸠" }, { name: "Po", alias: "Other_Punctuation", bmp: "!-#%-'\\*,\\.\\/:;\\?@\\¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁⹃-⹏⹒-⹔、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･", astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]" }, { name: "Ps", alias: "Open_Punctuation", bmp: "\\(\\[\\{༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂⹕⹗⹙⹛〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢" }, { name: "S", alias: "Symbol", bmp: "\\$\\+<->\\^`\\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶߾߿࢈৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-⃀℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛꭪꭫﬩﮲-﯂﵀-﵏﷏﷼-﷿﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�", astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]" }, { name: "Sc", alias: "Currency_Symbol", bmp: "\\$¢-¥֏؋߾߿৲৳৻૱௹฿៛₠-⃀꠸﷼﹩＄￠￡￥￦", astral: "\uD807[\uDFDD-\uDFE0]|𞋿|𞲰" }, { name: "Sk", alias: "Modifier_Symbol", bmp: "\\^`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅࢈᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛꭪꭫﮲-﯂＾｀￣", astral: "\uD83C[\uDFFB-\uDFFF]" }, { name: "Sm", alias: "Math_Symbol", bmp: "\\+<->\\|~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬", astral: "\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]" }, { name: "So", alias: "Other_Symbol", bmp: "¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൏൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﵀-﵏﷏﷽-﷿￤￨￭￮￼�", astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFDC\uDFE1-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|𞅏|\uD83B[\uDCAC\uDD2E]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]" }, { name: "Z", alias: "Separator", bmp: "    - \u2028\u2029  　" }, { name: "Zl", alias: "Line_Separator", bmp: "\u2028" }, { name: "Zp", alias: "Paragraph_Separator", bmp: "\u2029" }, { name: "Zs", alias: "Space_Separator", bmp: "    -   　" }];
const jU = (t) => {
  if (!t.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
  t.addUnicodeData(ZU);
};
var qU = [{ name: "ASCII", bmp: "\0-" }, { name: "Alphabetic", bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈְ-ׇֽֿׁׂׅׄא-תׯ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉࣔ-ࣣࣟ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱৼਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹ-ૼଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౝౠ-ౣಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೝೞೠ-ೣೱೲഀ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൔ-ൗൟ-ൣൺ-ൿඁ-ඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄຆ-ຊຌ-ຣລວ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ႏႚ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜓᜟ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡸᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᪿᫀᫌ-ᫎᬀ-ᬳᬵ-ᭃᭅ-ᭌᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰶᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠅꠇ-ꠧꡀ-ꡳꢀ-ꣃꣅꣲ-ꣷꣻꣽ-ꣿꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC71-\uDC75\uDC82-\uDCB8\uDCC2\uDCD0-\uDCE8\uDD00-\uDD32\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE\uDDCF\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDEB8\uDF00-\uDF1A\uDF1D-\uDF2A\uDF40-\uDF46]|\uD806[\uDC00-\uDC38\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD47\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Any", isBmpLast: !0, bmp: "\0-￿", astral: "[\uD800-\uDBFF][\uDC00-\uDFFF]" }, { name: "Default_Ignorable_Code_Point", bmp: "­͏؜ᅟᅠ឴឵᠋-᠏​-‏‪-‮⁠-⁯ㅤ︀-️\uFEFFﾠ￰-￸", astral: "\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB43][\uDC00-\uDFFF]" }, { name: "Lowercase", bmp: "a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟸ-ꟺꬰ-ꭚꭜ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ", astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDF80\uDF83-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]" }, { name: "Noncharacter_Code_Point", bmp: "﷐-﷯￾￿", astral: "[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]" }, { name: "Uppercase", bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ", astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]" }, { name: "White_Space", bmp: "	-\r    - \u2028\u2029  　" }];
const zU = (t) => {
  if (!t.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
  var A = qU;
  A.push({ name: "Assigned", inverseOf: "Cn" }), t.addUnicodeData(A);
};
var $U = [{ name: "Adlam", astral: "\uD83A[\uDD00-\uDD4B\uDD50-\uDD59\uDD5E\uDD5F]" }, { name: "Ahom", astral: "\uD805[\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF46]" }, { name: "Anatolian_Hieroglyphs", astral: "\uD811[\uDC00-\uDE46]" }, { name: "Arabic", bmp: "؀-؄؆-؋؍-ؚ؜-؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࡰ-ࢎ࢐࢑࢘-ࣣ࣡-ࣿﭐ-﯂ﯓ-ﴽ﵀-ﶏﶒ-ﷇ﷏ﷰ-﷿ﹰ-ﹴﹶ-ﻼ", astral: "\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]" }, { name: "Armenian", bmp: "Ա-Ֆՙ-֊֍-֏ﬓ-ﬗ" }, { name: "Avestan", astral: "\uD802[\uDF00-\uDF35\uDF39-\uDF3F]" }, { name: "Balinese", bmp: "ᬀ-ᭌ᭐-᭾" }, { name: "Bamum", bmp: "ꚠ-꛷", astral: "\uD81A[\uDC00-\uDE38]" }, { name: "Bassa_Vah", astral: "\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]" }, { name: "Batak", bmp: "ᯀ-᯳᯼-᯿" }, { name: "Bengali", bmp: "ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৾" }, { name: "Bhaiksuki", astral: "\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C]" }, { name: "Bopomofo", bmp: "˪˫ㄅ-ㄯㆠ-ㆿ" }, { name: "Brahmi", astral: "\uD804[\uDC00-\uDC4D\uDC52-\uDC75\uDC7F]" }, { name: "Braille", bmp: "⠀-⣿" }, { name: "Buginese", bmp: "ᨀ-ᨛ᨞᨟" }, { name: "Buhid", bmp: "ᝀ-ᝓ" }, { name: "Canadian_Aboriginal", bmp: "᐀-ᙿᢰ-ᣵ", astral: "\uD806[\uDEB0-\uDEBF]" }, { name: "Carian", astral: "\uD800[\uDEA0-\uDED0]" }, { name: "Caucasian_Albanian", astral: "\uD801[\uDD30-\uDD63\uDD6F]" }, { name: "Chakma", astral: "\uD804[\uDD00-\uDD34\uDD36-\uDD47]" }, { name: "Cham", bmp: "ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟" }, { name: "Cherokee", bmp: "Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ" }, { name: "Chorasmian", astral: "\uD803[\uDFB0-\uDFCB]" }, { name: "Common", bmp: "\0-@\\[-`\\{-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·؅،؛؟ـ۝࣢।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵ-᳷ᳺ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-⃀℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮗-⯿⸀-⹝⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㋿㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛꭪꭫﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫\uFEFF！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�", astral: "\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9C\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD82F[\uDCA0-\uDCA3]|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDEE0-\uDEF3\uDF00-\uDF56\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD83B[\uDC71-\uDCB4\uDD01-\uDD3D]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDDAD\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA\uDFF0-\uDFF9]|\uDB40[\uDC01\uDC20-\uDC7F]" }, { name: "Coptic", bmp: "Ϣ-ϯⲀ-ⳳ⳹-⳿" }, { name: "Cuneiform", astral: "\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]" }, { name: "Cypriot", astral: "\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]" }, { name: "Cypro_Minoan", astral: "\uD80B[\uDF90-\uDFF2]" }, { name: "Cyrillic", bmp: "Ѐ-҄҇-ԯᲀ-ᲈᴫᵸⷠ-ⷿꙀ-ꚟ︮︯" }, { name: "Deseret", astral: "\uD801[\uDC00-\uDC4F]" }, { name: "Devanagari", bmp: "ऀ-ॐॕ-ॣ०-ॿ꣠-ꣿ" }, { name: "Dives_Akuru", astral: "\uD806[\uDD00-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD46\uDD50-\uDD59]" }, { name: "Dogra", astral: "\uD806[\uDC00-\uDC3B]" }, { name: "Duployan", astral: "\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]" }, { name: "Egyptian_Hieroglyphs", astral: "\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E\uDC30-\uDC38]" }, { name: "Elbasan", astral: "\uD801[\uDD00-\uDD27]" }, { name: "Elymaic", astral: "\uD803[\uDFE0-\uDFF6]" }, { name: "Ethiopic", bmp: "ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ", astral: "\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]" }, { name: "Georgian", bmp: "Ⴀ-ჅჇჍა-ჺჼ-ჿᲐ-ᲺᲽ-Ჿⴀ-ⴥⴧⴭ" }, { name: "Glagolitic", bmp: "Ⰰ-ⱟ", astral: "\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]" }, { name: "Gothic", astral: "\uD800[\uDF30-\uDF4A]" }, { name: "Grantha", astral: "\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]" }, { name: "Greek", bmp: "Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ", astral: "\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]" }, { name: "Gujarati", bmp: "ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ-૿" }, { name: "Gunjala_Gondi", astral: "\uD807[\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9]" }, { name: "Gurmukhi", bmp: "ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-੶" }, { name: "Han", bmp: "⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿿豈-舘並-龎", astral: "\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Hangul", bmp: "ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ" }, { name: "Hanifi_Rohingya", astral: "\uD803[\uDD00-\uDD27\uDD30-\uDD39]" }, { name: "Hanunoo", bmp: "ᜠ-᜴" }, { name: "Hatran", astral: "\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]" }, { name: "Hebrew", bmp: "֑-ׇא-תׯ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ" }, { name: "Hiragana", bmp: "ぁ-ゖゝ-ゟ", astral: "\uD82C[\uDC01-\uDD1F\uDD50-\uDD52]|🈀" }, { name: "Imperial_Aramaic", astral: "\uD802[\uDC40-\uDC55\uDC57-\uDC5F]" }, { name: "Inherited", bmp: "̀-ًͯ҅҆-ٰٕ॑-॔᪰-ᫎ᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭", astral: "\uD800[\uDDFD\uDEE0]|𑌻|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uDB40[\uDD00-\uDDEF]" }, { name: "Inscriptional_Pahlavi", astral: "\uD802[\uDF60-\uDF72\uDF78-\uDF7F]" }, { name: "Inscriptional_Parthian", astral: "\uD802[\uDF40-\uDF55\uDF58-\uDF5F]" }, { name: "Javanese", bmp: "ꦀ-꧍꧐-꧙꧞꧟" }, { name: "Kaithi", astral: "\uD804[\uDC80-\uDCC2\uDCCD]" }, { name: "Kannada", bmp: "ಀ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೝೞೠ-ೣ೦-೯ೱೲ" }, { name: "Katakana", bmp: "ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ", astral: "\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD64-\uDD67]" }, { name: "Kayah_Li", bmp: "꤀-꤭꤯" }, { name: "Kharoshthi", astral: "\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE50-\uDE58]" }, { name: "Khitan_Small_Script", astral: "𖿤|\uD822[\uDF00-\uDFFF]|\uD823[\uDC00-\uDCD5]" }, { name: "Khmer", bmp: "ក-៝០-៩៰-៹᧠-᧿" }, { name: "Khojki", astral: "\uD804[\uDE00-\uDE11\uDE13-\uDE3E]" }, { name: "Khudawadi", astral: "\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]" }, { name: "Lao", bmp: "ກຂຄຆ-ຊຌ-ຣລວ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ" }, { name: "Latin", bmp: "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꟿꬰ-ꭚꭜ-ꭤꭦ-ꭩﬀ-ﬆＡ-Ｚａ-ｚ", astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E]" }, { name: "Lepcha", bmp: "ᰀ-᰷᰻-᱉ᱍ-ᱏ" }, { name: "Limbu", bmp: "ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏" }, { name: "Linear_A", astral: "\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]" }, { name: "Linear_B", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]" }, { name: "Lisu", bmp: "ꓐ-꓿", astral: "𑾰" }, { name: "Lycian", astral: "\uD800[\uDE80-\uDE9C]" }, { name: "Lydian", astral: "\uD802[\uDD20-\uDD39\uDD3F]" }, { name: "Mahajani", astral: "\uD804[\uDD50-\uDD76]" }, { name: "Makasar", astral: "\uD807[\uDEE0-\uDEF8]" }, { name: "Malayalam", bmp: "ഀ-ഌഎ-ഐഒ-ൄെ-ൈൊ-൏ൔ-ൣ൦-ൿ" }, { name: "Mandaic", bmp: "ࡀ-࡛࡞" }, { name: "Manichaean", astral: "\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]" }, { name: "Marchen", astral: "\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]" }, { name: "Masaram_Gondi", astral: "\uD807[\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]" }, { name: "Medefaidrin", astral: "\uD81B[\uDE40-\uDE9A]" }, { name: "Meetei_Mayek", bmp: "ꫠ-꫶ꯀ-꯭꯰-꯹" }, { name: "Mende_Kikakui", astral: "\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]" }, { name: "Meroitic_Cursive", astral: "\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]" }, { name: "Meroitic_Hieroglyphs", astral: "\uD802[\uDD80-\uDD9F]" }, { name: "Miao", astral: "\uD81B[\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F]" }, { name: "Modi", astral: "\uD805[\uDE00-\uDE44\uDE50-\uDE59]" }, { name: "Mongolian", bmp: "᠀᠁᠄᠆-᠙ᠠ-ᡸᢀ-ᢪ", astral: "\uD805[\uDE60-\uDE6C]" }, { name: "Mro", astral: "\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]" }, { name: "Multani", astral: "\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]" }, { name: "Myanmar", bmp: "က-႟ꧠ-ꧾꩠ-ꩿ" }, { name: "Nabataean", astral: "\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]" }, { name: "Nandinagari", astral: "\uD806[\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE4]" }, { name: "New_Tai_Lue", bmp: "ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟" }, { name: "Newa", astral: "\uD805[\uDC00-\uDC5B\uDC5D-\uDC61]" }, { name: "Nko", bmp: "߀-ߺ߽-߿" }, { name: "Nushu", astral: "𖿡|\uD82C[\uDD70-\uDEFB]" }, { name: "Nyiakeng_Puachue_Hmong", astral: "\uD838[\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDD4F]" }, { name: "Ogham", bmp: " -᚜" }, { name: "Ol_Chiki", bmp: "᱐-᱿" }, { name: "Old_Hungarian", astral: "\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]" }, { name: "Old_Italic", astral: "\uD800[\uDF00-\uDF23\uDF2D-\uDF2F]" }, { name: "Old_North_Arabian", astral: "\uD802[\uDE80-\uDE9F]" }, { name: "Old_Permic", astral: "\uD800[\uDF50-\uDF7A]" }, { name: "Old_Persian", astral: "\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]" }, { name: "Old_Sogdian", astral: "\uD803[\uDF00-\uDF27]" }, { name: "Old_South_Arabian", astral: "\uD802[\uDE60-\uDE7F]" }, { name: "Old_Turkic", astral: "\uD803[\uDC00-\uDC48]" }, { name: "Old_Uyghur", astral: "\uD803[\uDF70-\uDF89]" }, { name: "Oriya", bmp: "ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍୕-ୗଡ଼ଢ଼ୟ-ୣ୦-୷" }, { name: "Osage", astral: "\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB]" }, { name: "Osmanya", astral: "\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]" }, { name: "Pahawh_Hmong", astral: "\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]" }, { name: "Palmyrene", astral: "\uD802[\uDC60-\uDC7F]" }, { name: "Pau_Cin_Hau", astral: "\uD806[\uDEC0-\uDEF8]" }, { name: "Phags_Pa", bmp: "ꡀ-꡷" }, { name: "Phoenician", astral: "\uD802[\uDD00-\uDD1B\uDD1F]" }, { name: "Psalter_Pahlavi", astral: "\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]" }, { name: "Rejang", bmp: "ꤰ-꥓꥟" }, { name: "Runic", bmp: "ᚠ-ᛪᛮ-ᛸ" }, { name: "Samaritan", bmp: "ࠀ-࠭࠰-࠾" }, { name: "Saurashtra", bmp: "ꢀ-ꣅ꣎-꣙" }, { name: "Sharada", astral: "\uD804[\uDD80-\uDDDF]" }, { name: "Shavian", astral: "\uD801[\uDC50-\uDC7F]" }, { name: "Siddham", astral: "\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]" }, { name: "SignWriting", astral: "\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]" }, { name: "Sinhala", bmp: "ඁ-ඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴", astral: "\uD804[\uDDE1-\uDDF4]" }, { name: "Sogdian", astral: "\uD803[\uDF30-\uDF59]" }, { name: "Sora_Sompeng", astral: "\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]" }, { name: "Soyombo", astral: "\uD806[\uDE50-\uDEA2]" }, { name: "Sundanese", bmp: "ᮀ-ᮿ᳀-᳇" }, { name: "Syloti_Nagri", bmp: "ꠀ-꠬" }, { name: "Syriac", bmp: "܀-܍܏-݊ݍ-ݏࡠ-ࡪ" }, { name: "Tagalog", bmp: "ᜀ-᜕ᜟ" }, { name: "Tagbanwa", bmp: "ᝠ-ᝬᝮ-ᝰᝲᝳ" }, { name: "Tai_Le", bmp: "ᥐ-ᥭᥰ-ᥴ" }, { name: "Tai_Tham", bmp: "ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭" }, { name: "Tai_Viet", bmp: "ꪀ-ꫂꫛ-꫟" }, { name: "Takri", astral: "\uD805[\uDE80-\uDEB9\uDEC0-\uDEC9]" }, { name: "Tamil", bmp: "ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺", astral: "\uD807[\uDFC0-\uDFF1\uDFFF]" }, { name: "Tangsa", astral: "\uD81A[\uDE70-\uDEBE\uDEC0-\uDEC9]" }, { name: "Tangut", astral: "𖿠|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEFF]|\uD823[\uDD00-\uDD08]" }, { name: "Telugu", bmp: "ఀ-ఌఎ-ఐఒ-నప-హ఼-ౄె-ైొ-్ౕౖౘ-ౚౝౠ-ౣ౦-౯౷-౿" }, { name: "Thaana", bmp: "ހ-ޱ" }, { name: "Thai", bmp: "ก-ฺเ-๛" }, { name: "Tibetan", bmp: "ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚" }, { name: "Tifinagh", bmp: "ⴰ-ⵧⵯ⵰⵿" }, { name: "Tirhuta", astral: "\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]" }, { name: "Toto", astral: "\uD838[\uDE90-\uDEAE]" }, { name: "Ugaritic", astral: "\uD800[\uDF80-\uDF9D\uDF9F]" }, { name: "Vai", bmp: "ꔀ-ꘫ" }, { name: "Vithkuqi", astral: "\uD801[\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]" }, { name: "Wancho", astral: "\uD838[\uDEC0-\uDEF9\uDEFF]" }, { name: "Warang_Citi", astral: "\uD806[\uDCA0-\uDCF2\uDCFF]" }, { name: "Yezidi", astral: "\uD803[\uDE80-\uDEA9\uDEAB-\uDEAD\uDEB0\uDEB1]" }, { name: "Yi", bmp: "ꀀ-ꒌ꒐-꓆" }, { name: "Zanabazar_Square", astral: "\uD806[\uDE00-\uDE47]" }];
const Ap = (t) => {
  if (!t.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
  t.addUnicodeData($U, "Script");
};
function V0(t, A) {
  return t.slice(A, A + 2) === "\\\\" ? "$$" : "$";
}
function R0(t, A, e, n) {
  const i = t.split("\\\\");
  if (i.length) {
    let d = n ? "<div></div>" : "";
    if (e)
      return A + "\\mathrm{" + i.join(`}${A}${d}${A}\\mathrm{`) + "}" + A;
    {
      let s = "";
      return i.length === 1 ? s += "" + A + i[0] + A : i.forEach((l, w) => {
        1 < l.length && (s += "" + A + l + A), 1 < i.length && w < i.length - 1 && (s += d);
      }), s;
    }
  }
  return e ? `\\mathrm{${t}}` : t;
}
function ep(t, A, e, n) {
  if (t.match(/\\left\\{/g) || t.match(/\\class{fourlineruled}/g))
    return { content: t, __isChineseDivide: n = !1 };
  const i = eA.matchRecursive(t, "{", "}", "g", { valueNames: ["inner", "left", "between", "right"], unbalanced: "skip-lazy" }).map((g) => {
    if (g.name === "between")
      return [g.start, g.end];
  }).filter((g) => g), d = Array.from(t.matchAll(/[\u4e00-\u9fa5]+/g));
  if (!d.length)
    return { content: t, __isChineseDivide: n = !1 };
  let s = "", l = 0;
  d.forEach((g) => {
    var p, K;
    i.some((_) => g.index >= _[0] && g.index <= _[1]) || ((p = t.slice(l, g.index)) && (K = V0(p, 0), s += "" + R0(p, K, A, e)), s += `<span>${g[0]}</span>` || "", l = g.index + g[0].length);
  });
  var w, h = t.slice(l);
  return h && (w = V0(h, 0), s += "" + R0(h, w, A, e)), { content: s, __isChineseDivide: n };
}
function tp(t, A) {
  let e = 0;
  return t.replace(/(\\_)+/g, (n) => {
    var i;
    let d = n.split("\\").length - 1, s = "", l = A && A.underlineClass && A.underlineClass.className && d >= A.underlineClass.min;
    for (let w = 0; w < Number(d); w++)
      s += `\\class{_u i_${e}${l ? " " + ((i = A == null ? void 0 : A.underlineClass) == null ? void 0 : i.className) : ""}}{\\_}`;
    return e++, s;
  });
}
function np(t, A = cU.defaults({ wrapMathrm: !0, punctuation: !1, divideChinese: !1, lineBreak: !0, blankLight: !1 })) {
  if (!t)
    return "";
  t = _U(t = A.punctuation ? wU(t) : t, A), A.underlineClass && (t = tp(t, A));
  let e = A.divideChinese;
  var n;
  return A.divideChinese && (t = (n = ep(t, A.wrapMathrm, A.lineBreak, e)).content, e = n.__isChineseDivide), "" + (t = e ? t : (A.divideChinese ? "$$" : "") + (A.wrapMathrm ? "\\mathrm{" : "") + t + (A.wrapMathrm ? "}" : "") + (A.divideChinese ? "$$" : ""));
}
XU(eA), WU(eA), YU(eA), jU(eA), zU(eA), Ap(eA);
const rp = { load: ["output/chtml", "input/tex", "[tex]/enclose", "[tex]/ams", "[tex]/noerrors", "[tex]/configmacros", "[tex]/mathtools", "[tex]/mhchem", "[tex]/unicode", "[tex]/textmacros", "[tex]/textcomp", "[tex]/cancel", "[tex]/extpfeil", "[tex]/html"] }, up = { "[+]": ["noerrors", "enclose", "ams", "mathtools", "mhchem", "unicode", "textcomp", "cancel", "extpfeil", "textmacros", "html"] }, op = { "[": "[", "]": "]", "(": "(", ")": ")", "【": "【", "】": "】", NEarrow: "\\unicode{x21d7}", NWarrow: "\\unicode{x21d6}", SEarrow: "\\unicode{x21d8}", SWarrow: "\\unicode{x21d9}", textcircled: "\\enclose{circle}", romannumeral: "\\enclose{()}", arccot: "arccot", arccsc: "arccsc", arcsec: "arcsec", blackdiamond: "\\blacklozenge", blackheart: "\\unicode{x2665}", blackrectangle: "\\unicode{x220e}", blackstar: "\\unicode{x2605}", heart: "\\heartsuit", female: "\\unicode{x2640}", male: "\\unicode{x2642}", napprox: "\\unicode{x2249}", nequiv: "\\unicode{x2262}", notni: "\\unicode{x220c}", nsubset: "\\unicode{x2284}", nsupset: "TODO", oiiint: "\\unicode{x2230}", oiint: "\\unicode{x222f}", rectangle: "\\unicode{x25ad}", smiley: "\\unicode{x263a}", wideparen: "\\overparen", textperthousand: "\\unicode{x2030}", textregistered: "\\unicode{xae}", textsection: "\\unicode{xa7}", texttrademark: "\\unicode{x2122}", textreferencemark: "\\unicode{x203b}", parallelogram: "\\unicode{x25b1}", deletion: "\\text{ }", d: "\\underset{\\cdot}", v: "\\check", omitted: "\\tripledash", xmark: "\\times", cmark: "\\unicode{x2714}", replace: "\\xcancel", handtextcircled: "\\enclose{circle}", handsquare: "\\fbox", Alpha: "A", Beta: "B", Omicron: "O", Epsilon: "E", Zeta: "Z", Eta: "H", Iota: "I", Kappa: "K", Mu: "M", Nu: "N", Rho: "P", Tau: "T", Chi: "X", lg: "\\log", nl: "\\nless", ng: "\\ngtr", textbf: "\\class{bf}", textit: "\\class{it}", parallelequal: "{\\small{\\stackrel{\\;//}{\\raise-.5ex\\hbox{=}}}}", "^": "\\textasciicircum", bar: "\\overline", vec: "\\overrightarrow" }, ip = [["$", "$"], ["\\(", "\\)"]], ap = [["$$", "$$"], ["\\[", "\\]"]], dp = { inlineMath: ip, displayMath: ap, packages: up, macros: op, maxBuffer: 10240, formatError: (t, A) => {
} }, sp = { enableMenu: !1, enableAssistiveMml: !1, menuOptions: { settings: { assistiveMml: !1 } } }, cp = { displayAlign: "left", fontURL: "https://homework-webfront.oss-cn-beijing.aliyuncs.com/MathJaxFonts" }, ol = { options: sp, loader: rp, tex: dp, chtml: cp }, Bp = "https://homework-webfront.oss-cn-beijing.aliyuncs.com/complete_math_v1/mathjax-3.2.0/es5";
function lp(t) {
  if (globalThis) {
    let A = ol;
    t && (A = { ...ol, ...t }), globalThis.MathJax = { ...A, startup: { pageReady: () => {
    } } };
  }
}
lp();
var Bh = function(t, A) {
  return (Bh = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e, n) {
    e.__proto__ = n;
  } : function(e, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
  }))(t, A);
};
function Yn(t, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  function e() {
    this.constructor = t;
  }
  Bh(t, A), t.prototype = A === null ? Object.create(A) : (e.prototype = A.prototype, new e());
}
function mn(t, A, e, n) {
  return new (e = e || Promise)(function(i, d) {
    function s(h) {
      try {
        w(n.next(h));
      } catch (g) {
        d(g);
      }
    }
    function l(h) {
      try {
        w(n.throw(h));
      } catch (g) {
        d(g);
      }
    }
    function w(h) {
      var g;
      h.done ? i(h.value) : ((g = h.value) instanceof e ? g : new e(function(p) {
        p(g);
      })).then(s, l);
    }
    w((n = n.apply(t, A || [])).next());
  });
}
function An(t, A) {
  var e, n, i, d = { label: 0, sent: function() {
    if (1 & i[0])
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, s = { next: l(0), throw: l(1), return: l(2) };
  return typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(w) {
    return function(h) {
      var g = [w, h];
      if (e)
        throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (e = 1, n && (i = 2 & g[0] ? n.return : g[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, g[1])).done)
            return i;
          switch (n = 0, (g = i ? [2 & g[0], i.value] : g)[0]) {
            case 0:
            case 1:
              i = g;
              break;
            case 4:
              return d.label++, { value: g[1], done: !1 };
            case 5:
              d.label++, n = g[1], g = [0];
              continue;
            case 7:
              g = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (!(i = 0 < (i = d.trys).length && i[i.length - 1]) && (g[0] === 6 || g[0] === 2)) {
                d = 0;
                continue;
              }
              if (g[0] === 3 && (!i || g[1] > i[0] && g[1] < i[3]))
                d.label = g[1];
              else if (g[0] === 6 && d.label < i[1])
                d.label = i[1], i = g;
              else {
                if (!(i && d.label < i[2])) {
                  i[2] && d.ops.pop(), d.trys.pop();
                  continue;
                }
                d.label = i[2], d.ops.push(g);
              }
          }
          g = A.call(t, d);
        } catch (p) {
          g = [6, p], n = 0;
        } finally {
          e = i = 0;
        }
      if (5 & g[0])
        throw g[1];
      return { value: g[0] ? g[1] : void 0, done: !0 };
    };
  }
}
for (var Wo = function() {
  function t(A, e, n, i) {
    this.left = A, this.top = e, this.width = n, this.height = i;
  }
  return t.prototype.add = function(A, e, n, i) {
    return new t(this.left + A, this.top + e, this.width + n, this.height + i);
  }, t.fromClientRect = function(A, e) {
    return new t(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height);
  }, t.fromDOMRectList = function(A, e) {
    return e = Array.from(e).find(function(n) {
      return n.width !== 0;
    }), e ? new t(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height) : t.EMPTY;
  }, t.EMPTY = new t(0, 0, 0, 0), t;
}(), w0 = function(t, A) {
  return Wo.fromClientRect(t, A.getBoundingClientRect());
}, El = function(t) {
  for (var A = [], e = 0, n = t.length; e < n; ) {
    var i, d = t.charCodeAt(e++);
    55296 <= d && d <= 56319 && e < n ? (64512 & (i = t.charCodeAt(e++))) == 56320 ? A.push(((1023 & d) << 10) + (1023 & i) + 65536) : (A.push(d), e--) : A.push(d);
  }
  return A;
}, be = function() {
  for (var t = [], A = 0; A < arguments.length; A++)
    t[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, t);
  var e = t.length;
  if (!e)
    return "";
  for (var n = [], i = -1, d = ""; ++i < e; ) {
    var s = t[i];
    s <= 65535 ? n.push(s) : n.push(55296 + ((s -= 65536) >> 10), s % 1024 + 56320), (i + 1 === e || 16384 < n.length) && (d += String.fromCharCode.apply(String, n), n.length = 0);
  }
  return d;
}, N0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fp = "u" < typeof Uint8Array ? [] : new Uint8Array(256), Vc = 0; Vc < N0.length; Vc++)
  fp[N0.charCodeAt(Vc)] = Vc;
for (var P0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", es = "u" < typeof Uint8Array ? [] : new Uint8Array(256), Rc = 0; Rc < P0.length; Rc++)
  es[P0.charCodeAt(Rc)] = Rc;
for (var gp = function(t) {
  for (var A, e, n, i, l = 0.75 * t.length, d = t.length, s = 0, l = (t[t.length - 1] === "=" && (l--, t[t.length - 2] === "=") && l--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? ArrayBuffer : Array)(l)), w = Array.isArray(l) ? l : new Uint8Array(l), h = 0; h < d; h += 4)
    A = es[t.charCodeAt(h)], e = es[t.charCodeAt(h + 1)], n = es[t.charCodeAt(h + 2)], i = es[t.charCodeAt(h + 3)], w[s++] = A << 2 | e >> 4, w[s++] = (15 & e) << 4 | n >> 2, w[s++] = (3 & n) << 6 | 63 & i;
  return l;
}, wp = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 2)
    e.push(t[n + 1] << 8 | t[n]);
  return e;
}, Qp = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 4)
    e.push(t[n + 3] << 24 | t[n + 2] << 16 | t[n + 1] << 8 | t[n]);
  return e;
}, _o = 5, Tf = 11, Mf = 2, hp = Tf - _o, J0 = 65536 >> _o, Cp = 1 << _o, kf = Cp - 1, Fp = 1024 >> _o, X0 = J0 + Fp, NI = X0, Up = 32, pp = X0 + Up, mp = 65536 >> Tf, Ep = 1 << hp, Dp = Ep - 1, W0 = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, Hp = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, yp = function(i, A) {
  var i = gp(i), e = Array.isArray(i) ? Qp(i) : new Uint32Array(i), i = Array.isArray(i) ? wp(i) : new Uint16Array(i), n = W0(i, 12, e[4] / 2), i = e[5] === 2 ? W0(i, (24 + e[4]) / 2) : Hp(e, Math.ceil((24 + e[4]) / 4));
  return new bp(e[0], e[1], e[2], e[3], n, i);
}, bp = function() {
  function t(A, e, n, i, d, s) {
    this.initialValue = A, this.errorValue = e, this.highStart = n, this.highValueIndex = i, this.index = d, this.data = s;
  }
  return t.prototype.get = function(A) {
    var e;
    if (0 <= A) {
      if (A < 55296 || 56319 < A && A <= 65535)
        return e = this.index[A >> _o], this.data[e = (e << Mf) + (A & kf)];
      if (A <= 65535)
        return e = this.index[J0 + (A - 55296 >> _o)], this.data[e = (e << Mf) + (A & kf)];
      if (A < this.highStart)
        return e = this.index[e = pp - mp + (A >> Tf)], e = this.index[e += A >> _o & Dp], this.data[e = (e << Mf) + (A & kf)];
      if (A <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, t;
}(), Y0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Ip = "u" < typeof Uint8Array ? [] : new Uint8Array(256), Nc = 0; Nc < Y0.length; Nc++)
  Ip[Y0.charCodeAt(Nc)] = Nc;
var vp = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Z0 = 50, Kp = 1, lh = 2, fh = 3, Lp = 4, xp = 5, j0 = 7, gh = 8, q0 = 9, mu = 10, Lg = 11, z0 = 12, xg = 13, _p = 14, ts = 15, _g = 16, Pc = 17, Jd = 18, Sp = 19, $0 = 20, Sg = 21, Xd = 22, Gf = 23, na = 24, en = 25, ns = 26, rs = 27, ra = 28, Op = 29, ws = 30, Tp = 31, Jc = 32, Xc = 33, Og = 34, Tg = 35, Mg = 36, bs = 37, kg = 38, jB = 39, qB = 40, Vf = 41, wh = 42, Mp = 43, kp = [9001, 65288], Qh = "!", Ht = "×", Wc = "÷", Gg = yp(vp), kr = [ws, Mg], Vg = [Kp, lh, fh, xp], hh = [mu, gh], Aw = [rs, ns], Gp = Vg.concat(hh), ew = [kg, jB, qB, Og, Tg], Vp = [ts, xg], Rp = function(t, A) {
  A === void 0 && (A = "strict");
  var e = [], n = [], i = [];
  return t.forEach(function(d, s) {
    var l, w = Gg.get(d);
    return Z0 < w ? (i.push(!0), w -= Z0) : i.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(d) !== -1 ? (n.push(s), e.push(_g)) : w === Lp || w === Lg ? s !== 0 && Gp.indexOf(l = e[s - 1]) === -1 ? (n.push(n[s - 1]), e.push(l)) : (n.push(s), e.push(ws)) : (n.push(s), w === Tp ? e.push(A === "strict" ? Sg : bs) : w === wh || w === Op ? e.push(ws) : w === Mp ? e.push(131072 <= d && d <= 196605 || 196608 <= d && d <= 262141 ? bs : ws) : void e.push(w));
  }), [n, e, i];
}, Rf = function(t, A, e, n) {
  var i = n[e];
  if (Array.isArray(t) ? t.indexOf(i) !== -1 : t === i)
    for (var d = e; d <= n.length; ) {
      if ((s = n[++d]) === A)
        return !0;
      if (s !== mu)
        break;
    }
  if (i === mu)
    for (d = e; 0 < d; ) {
      var s, l = n[--d];
      if (Array.isArray(t) ? t.indexOf(l) !== -1 : t === l)
        for (var w = e; w <= n.length; ) {
          if ((s = n[++w]) === A)
            return !0;
          if (s !== mu)
            break;
        }
      if (l !== mu)
        break;
    }
  return !1;
}, tw = function(t, A) {
  for (var e = t; 0 <= e; ) {
    var n = A[e];
    if (n !== mu)
      return n;
    e--;
  }
  return 0;
}, Np = function(t, A, e, n, s) {
  if (e[n] === 0 || (n -= 1, Array.isArray(s) && s[n] === !0))
    return Ht;
  var d, s = n - 1, l = 1 + n, w = A[n], h = 0 <= s ? A[s] : 0, g = A[l];
  if (w === lh && g === fh)
    return Ht;
  if (Vg.indexOf(w) !== -1)
    return Qh;
  if (Vg.indexOf(g) !== -1 || hh.indexOf(g) !== -1)
    return Ht;
  if (tw(n, A) === gh)
    return Wc;
  if (Gg.get(t[n]) === Lg || (w === Jc || w === Xc) && Gg.get(t[l]) === Lg || w === j0 || g === j0 || w === q0 || [mu, xg, ts].indexOf(w) === -1 && g === q0 || [Pc, Jd, Sp, na, ra].indexOf(g) !== -1 || tw(n, A) === Xd || Rf(Gf, Xd, n, A) || Rf([Pc, Jd], Sg, n, A) || Rf(z0, z0, n, A))
    return Ht;
  if (w === mu)
    return Wc;
  if (w === Gf || g === Gf)
    return Ht;
  if (g === _g || w === _g)
    return Wc;
  if ([xg, ts, Sg].indexOf(g) !== -1 || w === _p || h === Mg && Vp.indexOf(w) !== -1 || w === ra && g === Mg || g === $0 || kr.indexOf(g) !== -1 && w === en || kr.indexOf(w) !== -1 && g === en || w === rs && [bs, Jc, Xc].indexOf(g) !== -1 || [bs, Jc, Xc].indexOf(w) !== -1 && g === ns || kr.indexOf(w) !== -1 && Aw.indexOf(g) !== -1 || Aw.indexOf(w) !== -1 && kr.indexOf(g) !== -1 || [rs, ns].indexOf(w) !== -1 && (g === en || [Xd, ts].indexOf(g) !== -1 && A[1 + l] === en) || [Xd, ts].indexOf(w) !== -1 && g === en || w === en && [en, ra, na].indexOf(g) !== -1)
    return Ht;
  if ([en, ra, na, Pc, Jd].indexOf(g) !== -1)
    for (var p = n; 0 <= p; ) {
      if ((d = A[p]) === en)
        return Ht;
      if ([ra, na].indexOf(d) === -1)
        break;
      p--;
    }
  if ([rs, ns].indexOf(g) !== -1)
    for (p = [Pc, Jd].indexOf(w) !== -1 ? s : n; 0 <= p; ) {
      if ((d = A[p]) === en)
        return Ht;
      if ([ra, na].indexOf(d) === -1)
        break;
      p--;
    }
  if (kg === w && [kg, jB, Og, Tg].indexOf(g) !== -1 || [jB, Og].indexOf(w) !== -1 && [jB, qB].indexOf(g) !== -1 || [qB, Tg].indexOf(w) !== -1 && g === qB || ew.indexOf(w) !== -1 && [$0, ns].indexOf(g) !== -1 || ew.indexOf(g) !== -1 && w === rs || kr.indexOf(w) !== -1 && kr.indexOf(g) !== -1 || w === na && kr.indexOf(g) !== -1 || kr.concat(en).indexOf(w) !== -1 && g === Xd && kp.indexOf(t[l]) === -1 || kr.concat(en).indexOf(g) !== -1 && w === Jd)
    return Ht;
  if (w === Vf && g === Vf) {
    for (var K = e[n], _ = 1; 0 < K && A[--K] === Vf; )
      _++;
    if (_ % 2 != 0)
      return Ht;
  }
  return w === Jc && g === Xc ? Ht : Wc;
}, Pp = function(t, d) {
  var i = Rp(t, (d = d || { lineBreak: "normal", wordBreak: "normal" }).lineBreak), e = i[0], n = i[1], i = i[2], d = (d.wordBreak !== "break-all" && d.wordBreak !== "break-word" || (n = n.map(function(s) {
    return [en, ws, wh].indexOf(s) !== -1 ? bs : s;
  })), d.wordBreak === "keep-all" ? i.map(function(s, l) {
    return s && 19968 <= t[l] && t[l] <= 40959;
  }) : void 0);
  return [e, n, d];
}, Jp = function() {
  function t(A, e, n, i) {
    this.codePoints = A, this.required = e === Qh, this.start = n, this.end = i;
  }
  return t.prototype.slice = function() {
    return be.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, t;
}(), Xp = function(n, A) {
  var e = El(n), n = Pp(e, A), i = n[0], d = n[1], s = n[2], l = e.length, w = 0, h = 0;
  return { next: function() {
    if (l <= h)
      return { done: !0, value: null };
    for (var g, p = Ht; h < l && (p = Np(e, d, i, ++h, s)) === Ht; )
      ;
    return p !== Ht || h === l ? (g = new Jp(e, p, w, h), w = h, { value: g, done: !1 }) : { done: !0, value: null };
  } };
}, Wp = 1, Yp = 2, Ss = 4, nw = 8, il = 10, rw = 47, Qs = 92, Zp = 9, jp = 32, Yc = 34, Wd = 61, qp = 35, zp = 36, $p = 37, Zc = 39, jc = 40, Yd = 41, A1 = 95, Ot = 45, e1 = 33, t1 = 60, n1 = 62, r1 = 64, u1 = 91, o1 = 93, i1 = 61, a1 = 123, qc = 63, d1 = 125, uw = 124, s1 = 126, c1 = 128, ow = 65533, Nf = 42, No = 43, B1 = 44, l1 = 58, f1 = 59, Is = 46, g1 = 0, w1 = 8, Q1 = 11, h1 = 14, C1 = 31, F1 = 127, Br = -1, Ch = 48, Fh = 97, Uh = 101, U1 = 102, p1 = 117, m1 = 122, ph = 65, mh = 69, Eh = 70, E1 = 85, D1 = 90, bt = function(t) {
  return Ch <= t && t <= 57;
}, H1 = function(t) {
  return 55296 <= t && t <= 57343;
}, ua = function(t) {
  return bt(t) || ph <= t && t <= Eh || Fh <= t && t <= U1;
}, y1 = function(t) {
  return Fh <= t && t <= m1;
}, b1 = function(t) {
  return ph <= t && t <= D1;
}, I1 = function(t) {
  return y1(t) || b1(t);
}, v1 = function(t) {
  return c1 <= t;
}, zc = function(t) {
  return t === il || t === Zp || t === jp;
}, al = function(t) {
  return I1(t) || v1(t) || t === A1;
}, iw = function(t) {
  return al(t) || bt(t) || t === Ot;
}, K1 = function(t) {
  return g1 <= t && t <= w1 || t === Q1 || h1 <= t && t <= C1 || t === F1;
}, Fu = function(t, A) {
  return t === Qs && A !== il;
}, $c = function(t, A, e) {
  return t === Ot ? al(A) || Fu(A, e) : !!al(t) || !(t !== Qs || !Fu(t, A));
}, Pf = function(t, A, e) {
  return t === No || t === Ot ? !!bt(A) || A === Is && bt(e) : bt(t === Is ? A : t);
}, L1 = function(t) {
  var A = 0, e = 1;
  t[A] !== No && t[A] !== Ot || (t[A] === Ot && (e = -1), A++);
  for (var n = []; bt(t[A]); )
    n.push(t[A++]);
  var i = n.length ? parseInt(be.apply(void 0, n), 10) : 0;
  t[A] === Is && A++;
  for (var d = []; bt(t[A]); )
    d.push(t[A++]);
  var s = d.length, l = s ? parseInt(be.apply(void 0, d), 10) : 0, w = (t[A] !== mh && t[A] !== Uh || A++, 1);
  t[A] !== No && t[A] !== Ot || (t[A] === Ot && (w = -1), A++);
  for (var h = []; bt(t[A]); )
    h.push(t[A++]);
  var g = h.length ? parseInt(be.apply(void 0, h), 10) : 0;
  return e * (i + l * Math.pow(10, -s)) * Math.pow(10, w * g);
}, x1 = { type: 2 }, _1 = { type: 3 }, S1 = { type: 4 }, O1 = { type: 13 }, T1 = { type: 8 }, M1 = { type: 21 }, k1 = { type: 9 }, G1 = { type: 10 }, V1 = { type: 11 }, R1 = { type: 12 }, N1 = { type: 14 }, AB = { type: 23 }, P1 = { type: 1 }, J1 = { type: 25 }, X1 = { type: 24 }, W1 = { type: 26 }, Y1 = { type: 27 }, Z1 = { type: 28 }, j1 = { type: 29 }, q1 = { type: 31 }, Rg = { type: 32 }, Dh = function() {
  function t() {
    this._value = [];
  }
  return t.prototype.write = function(A) {
    this._value = this._value.concat(El(A));
  }, t.prototype.read = function() {
    for (var A = [], e = this.consumeToken(); e !== Rg; )
      A.push(e), e = this.consumeToken();
    return A;
  }, t.prototype.consumeToken = function() {
    var A = this.consumeCodePoint();
    switch (A) {
      case Yc:
        return this.consumeStringToken(Yc);
      case qp:
        var e = this.peekCodePoint(0), n = this.peekCodePoint(1), i = this.peekCodePoint(2);
        if (iw(e) || Fu(n, i))
          return e = $c(e, n, i) ? Yp : Wp, { type: 5, value: this.consumeName(), flags: e };
        break;
      case zp:
        if (this.peekCodePoint(0) === Wd)
          return this.consumeCodePoint(), O1;
        break;
      case Zc:
        return this.consumeStringToken(Zc);
      case jc:
        return x1;
      case Yd:
        return _1;
      case Nf:
        if (this.peekCodePoint(0) === Wd)
          return this.consumeCodePoint(), N1;
        break;
      case No:
        if (Pf(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case B1:
        return S1;
      case Ot:
        if (n = A, i = this.peekCodePoint(0), e = this.peekCodePoint(1), Pf(n, i, e))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if ($c(n, i, e))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (i === Ot && e === n1)
          return this.consumeCodePoint(), this.consumeCodePoint(), X1;
        break;
      case Is:
        if (Pf(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case rw:
        if (this.peekCodePoint(0) === Nf)
          for (this.consumeCodePoint(); ; ) {
            var d = this.consumeCodePoint();
            if (d === Nf && (d = this.consumeCodePoint()) === rw)
              return this.consumeToken();
            if (d === Br)
              return this.consumeToken();
          }
        break;
      case l1:
        return W1;
      case f1:
        return Y1;
      case t1:
        if (this.peekCodePoint(0) === e1 && this.peekCodePoint(1) === Ot && this.peekCodePoint(2) === Ot)
          return this.consumeCodePoint(), this.consumeCodePoint(), J1;
        break;
      case r1:
        if (n = this.peekCodePoint(0), i = this.peekCodePoint(1), e = this.peekCodePoint(2), $c(n, i, e))
          return { type: 7, value: this.consumeName() };
        break;
      case u1:
        return Z1;
      case Qs:
        if (Fu(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case o1:
        return j1;
      case i1:
        if (this.peekCodePoint(0) === Wd)
          return this.consumeCodePoint(), T1;
        break;
      case a1:
        return V1;
      case d1:
        return R1;
      case p1:
      case E1:
        return n = this.peekCodePoint(0), i = this.peekCodePoint(1), n !== No || !ua(i) && i !== qc || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case uw:
        if (this.peekCodePoint(0) === Wd)
          return this.consumeCodePoint(), k1;
        if (this.peekCodePoint(0) === uw)
          return this.consumeCodePoint(), M1;
        break;
      case s1:
        if (this.peekCodePoint(0) === Wd)
          return this.consumeCodePoint(), G1;
        break;
      case Br:
        return Rg;
    }
    return zc(A) ? (this.consumeWhiteSpace(), q1) : bt(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : al(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: be(A) };
  }, t.prototype.consumeCodePoint = function() {
    var A = this._value.shift();
    return "u" < typeof A ? -1 : A;
  }, t.prototype.reconsumeCodePoint = function(A) {
    this._value.unshift(A);
  }, t.prototype.peekCodePoint = function(A) {
    return A >= this._value.length ? -1 : this._value[A];
  }, t.prototype.consumeUnicodeRangeToken = function() {
    for (var A = [], e = this.consumeCodePoint(); ua(e) && A.length < 6; )
      A.push(e), e = this.consumeCodePoint();
    for (var n = !1; e === qc && A.length < 6; )
      A.push(e), e = this.consumeCodePoint(), n = !0;
    if (n)
      return { type: 30, start: parseInt(be.apply(void 0, A.map(function(s) {
        return s === qc ? Ch : s;
      })), 16), end: parseInt(be.apply(void 0, A.map(function(s) {
        return s === qc ? Eh : s;
      })), 16) };
    var i = parseInt(be.apply(void 0, A), 16);
    if (this.peekCodePoint(0) === Ot && ua(this.peekCodePoint(1))) {
      this.consumeCodePoint();
      for (var e = this.consumeCodePoint(), d = []; ua(e) && d.length < 6; )
        d.push(e), e = this.consumeCodePoint();
      return { type: 30, start: i, end: parseInt(be.apply(void 0, d), 16) };
    }
    return { type: 30, start: i, end: i };
  }, t.prototype.consumeIdentLikeToken = function() {
    var A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === jc ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === jc ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }, t.prototype.consumeUrlToken = function() {
    var A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === Br)
      return { type: 22, value: "" };
    var e = this.peekCodePoint(0);
    if (e === Zc || e === Yc)
      return (e = this.consumeStringToken(this.consumeCodePoint())).type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Br || this.peekCodePoint(0) === Yd) ? (this.consumeCodePoint(), { type: 22, value: e.value }) : (this.consumeBadUrlRemnants(), AB);
    for (; ; ) {
      var n = this.consumeCodePoint();
      if (n === Br || n === Yd)
        return { type: 22, value: be.apply(void 0, A) };
      if (zc(n))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === Br || this.peekCodePoint(0) === Yd ? (this.consumeCodePoint(), { type: 22, value: be.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), AB);
      if (n === Yc || n === Zc || n === jc || K1(n))
        return this.consumeBadUrlRemnants(), AB;
      if (n === Qs) {
        if (!Fu(n, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), AB;
        A.push(this.consumeEscapedCodePoint());
      } else
        A.push(n);
    }
  }, t.prototype.consumeWhiteSpace = function() {
    for (; zc(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, t.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var A = this.consumeCodePoint();
      if (A === Yd || A === Br)
        return;
      Fu(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }, t.prototype.consumeStringSlice = function(A) {
    for (var e = ""; 0 < A; ) {
      var n = Math.min(5e4, A);
      e += be.apply(void 0, this._value.splice(0, n)), A -= n;
    }
    return this._value.shift(), e;
  }, t.prototype.consumeStringToken = function(A) {
    for (var e = "", n = 0; ; ) {
      var i, d = this._value[n];
      if (d === Br || d === void 0 || d === A)
        return { type: 0, value: e += this.consumeStringSlice(n) };
      if (d === il)
        return this._value.splice(0, n), P1;
      d === Qs && (i = this._value[n + 1]) !== Br && i !== void 0 && (i === il ? (e += this.consumeStringSlice(n), n = -1, this._value.shift()) : Fu(d, i) && (e = (e += this.consumeStringSlice(n)) + be(this.consumeEscapedCodePoint()), n = -1)), n++;
    }
  }, t.prototype.consumeNumber = function() {
    var A = [], e = Ss;
    for ((n = this.peekCodePoint(0)) !== No && n !== Ot || A.push(this.consumeCodePoint()); bt(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    var n = this.peekCodePoint(0), i = this.peekCodePoint(1);
    if (n === Is && bt(i))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = nw; bt(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    n = this.peekCodePoint(0);
    var i = this.peekCodePoint(1), d = this.peekCodePoint(2);
    if ((n === mh || n === Uh) && ((i === No || i === Ot) && bt(d) || bt(i)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = nw; bt(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [L1(A), e];
  }, t.prototype.consumeNumericToken = function() {
    var e = this.consumeNumber(), A = e[0], e = e[1], n = this.peekCodePoint(0), i = this.peekCodePoint(1), d = this.peekCodePoint(2);
    return $c(n, i, d) ? { type: 15, number: A, flags: e, unit: this.consumeName() } : n === $p ? (this.consumeCodePoint(), { type: 16, number: A, flags: e }) : { type: 17, number: A, flags: e };
  }, t.prototype.consumeEscapedCodePoint = function() {
    var A = this.consumeCodePoint();
    if (ua(A)) {
      for (var e = be(A); ua(this.peekCodePoint(0)) && e.length < 6; )
        e += be(this.consumeCodePoint());
      zc(this.peekCodePoint(0)) && this.consumeCodePoint();
      var n = parseInt(e, 16);
      return n === 0 || H1(n) || 1114111 < n ? ow : n;
    }
    return A === Br ? ow : A;
  }, t.prototype.consumeName = function() {
    for (var A = ""; ; ) {
      var e = this.consumeCodePoint();
      if (iw(e))
        A += be(e);
      else {
        if (!Fu(e, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(e), A;
        A += be(this.consumeEscapedCodePoint());
      }
    }
  }, t;
}(), Hh = function() {
  function t(A) {
    this._tokens = A;
  }
  return t.create = function(A) {
    var e = new Dh();
    return e.write(A), new t(e.read());
  }, t.parseValue = function(A) {
    return t.create(A).parseComponentValue();
  }, t.parseValues = function(A) {
    return t.create(A).parseComponentValues();
  }, t.prototype.parseComponentValue = function() {
    for (var A = this.consumeToken(); A.type === 31; )
      A = this.consumeToken();
    if (A.type === 32)
      throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
    this.reconsumeToken(A);
    for (var e = this.consumeComponentValue(); (A = this.consumeToken()).type === 31; )
      ;
    if (A.type === 32)
      return e;
    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
  }, t.prototype.parseComponentValues = function() {
    for (var A = []; ; ) {
      var e = this.consumeComponentValue();
      if (e.type === 32)
        return A;
      A.push(e), A.push();
    }
  }, t.prototype.consumeComponentValue = function() {
    var A = this.consumeToken();
    switch (A.type) {
      case 11:
      case 28:
      case 2:
        return this.consumeSimpleBlock(A.type);
      case 19:
        return this.consumeFunction(A);
    }
    return A;
  }, t.prototype.consumeSimpleBlock = function(A) {
    for (var e = { type: A, values: [] }, n = this.consumeToken(); ; ) {
      if (n.type === 32 || z1(n, A))
        return e;
      this.reconsumeToken(n), e.values.push(this.consumeComponentValue()), n = this.consumeToken();
    }
  }, t.prototype.consumeFunction = function(A) {
    for (var e = { name: A.value, values: [], type: 18 }; ; ) {
      var n = this.consumeToken();
      if (n.type === 32 || n.type === 3)
        return e;
      this.reconsumeToken(n), e.values.push(this.consumeComponentValue());
    }
  }, t.prototype.consumeToken = function() {
    var A = this._tokens.shift();
    return "u" < typeof A ? Rg : A;
  }, t.prototype.reconsumeToken = function(A) {
    this._tokens.unshift(A);
  }, t;
}(), hs = function(t) {
  return t.type === 15;
}, zB = function(t) {
  return t.type === 17;
}, Ue = function(t) {
  return t.type === 20;
}, Jf = function(t, A) {
  return Ue(t) && t.value === A;
}, Dl = function(t) {
  return t.type !== 31 && t.type !== 4;
}, fr = function(t) {
  var A = [], e = [];
  return t.forEach(function(n) {
    if (n.type === 4) {
      if (e.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      A.push(e), e = [];
    } else
      n.type !== 31 && e.push(n);
  }), e.length && A.push(e), A;
}, z1 = function(t, A) {
  return A === 11 && t.type === 12 || A === 28 && t.type === 29 || A === 2 && t.type === 3;
}, Iu = function(t) {
  return t.type === 17 || t.type === 15;
}, ke = function(t) {
  return t.type === 16 || Iu(t);
}, aw = function(t) {
  return 1 < t.length ? [t[0], t[1]] : [t[0]];
}, nt = { type: 17, number: 0, flags: Ss }, Q0 = { type: 16, number: 50, flags: Ss }, Eu = { type: 16, number: 100, flags: Ss }, us = function(i, A, e) {
  var n = i[0], i = i[1];
  return [ae(n, A), ae(typeof i < "u" ? i : n, e)];
}, ae = function(t, A) {
  if (t.type === 16)
    return t.number / 100 * A;
  if (hs(t))
    switch (t.unit) {
      case "rem":
      case "em":
        return 16 * t.number;
      default:
        return t.number;
    }
  return t.number;
}, yh = "deg", bh = "grad", Ih = "rad", vh = "turn", Hl = { name: "angle", parse: function(t, A) {
  if (A.type === 15)
    switch (A.unit) {
      case yh:
        return Math.PI * A.number / 180;
      case bh:
        return Math.PI / 200 * A.number;
      case Ih:
        return A.number;
      case vh:
        return 2 * Math.PI * A.number;
    }
  throw new Error("Unsupported angle type");
} }, Kh = function(t) {
  return t.type === 15 && (t.unit === yh || t.unit === bh || t.unit === Ih || t.unit === vh);
}, Lh = function(t) {
  switch (t.filter(Ue).map(function(A) {
    return A.value;
  }).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [nt, nt];
    case "to top":
    case "bottom":
      return bn(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [nt, Eu];
    case "to right":
    case "left":
      return bn(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Eu, Eu];
    case "to bottom":
    case "top":
      return bn(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Eu, nt];
    case "to left":
    case "right":
      return bn(270);
  }
  return 0;
}, bn = function(t) {
  return Math.PI * t / 180;
}, vu = { name: "color", parse: function(t, A) {
  if (A.type === 18) {
    var e = $1[A.name];
    if ("u" < typeof e)
      throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
    return e(t, A.values);
  }
  if (A.type === 5) {
    var n, i, d, s;
    if (A.value.length === 3)
      return n = A.value.substring(0, 1), i = A.value.substring(1, 2), d = A.value.substring(2, 3), Du(parseInt(n + n, 16), parseInt(i + i, 16), parseInt(d + d, 16), 1);
    if (A.value.length === 4)
      return n = A.value.substring(0, 1), i = A.value.substring(1, 2), d = A.value.substring(2, 3), s = A.value.substring(3, 4), Du(parseInt(n + n, 16), parseInt(i + i, 16), parseInt(d + d, 16), parseInt(s + s, 16) / 255);
    if (A.value.length === 6)
      return n = A.value.substring(0, 2), i = A.value.substring(2, 4), d = A.value.substring(4, 6), Du(parseInt(n, 16), parseInt(i, 16), parseInt(d, 16), 1);
    if (A.value.length === 8)
      return n = A.value.substring(0, 2), i = A.value.substring(2, 4), d = A.value.substring(4, 6), s = A.value.substring(6, 8), Du(parseInt(n, 16), parseInt(i, 16), parseInt(d, 16), parseInt(s, 16) / 255);
  }
  return A.type === 20 && (e = vs[A.value.toUpperCase()], typeof e < "u") ? e : vs.TRANSPARENT;
} }, Ea = function(t) {
  return (255 & t) == 0;
}, Ze = function(i) {
  var A = 255 & i, e = 255 & i >> 8, n = 255 & i >> 16, i = 255 & i >> 24;
  return A < 255 ? "rgba(" + i + "," + n + "," + e + "," + A / 255 + ")" : "rgb(" + i + "," + n + "," + e + ")";
}, Du = function(t, A, e, n) {
  return (t << 24 | A << 16 | e << 8 | Math.round(255 * n) << 0) >>> 0;
}, dw = function(t, A) {
  var e;
  return t.type === 17 ? t.number : t.type === 16 ? (e = A === 3 ? 1 : 255, A === 3 ? t.number / 100 * e : Math.round(t.number / 100 * e)) : 0;
}, sw = function(t, d) {
  var e, n, i, d = d.filter(Dl);
  return d.length === 3 ? (e = (i = d.map(dw))[0], n = i[1], i = i[2], Du(e, n, i, 1)) : d.length === 4 ? (e = (d = d.map(dw))[0], n = d[1], i = d[2], d = d[3], Du(e, n, i, d)) : 0;
};
function Xf(t, A, e) {
  return e < 0 && (e += 1), 1 <= e && --e, e < 1 / 6 ? (A - t) * e * 6 + t : e < 0.5 ? A : e < 2 / 3 ? 6 * (A - t) * (2 / 3 - e) + t : t;
}
var cw = function(i, n) {
  var e, n = n.filter(Dl), d = n[0], s = n[1], l = n[2], n = n[3], i = (d.type === 17 ? bn(d.number) : Hl.parse(i, d)) / (2 * Math.PI), d = ke(s) ? s.number / 100 : 0, s = ke(l) ? l.number / 100 : 0, l = typeof n < "u" && ke(n) ? ae(n, 1) : 1;
  return d == 0 ? Du(255 * s, 255 * s, 255 * s, 1) : (d = Xf(s = 2 * s - (n = s <= 0.5 ? s * (1 + d) : s + d - s * d), n, i + 1 / 3), e = Xf(s, n, i), s = Xf(s, n, i - 1 / 3), Du(255 * d, 255 * e, 255 * s, l));
}, $1 = { hsl: cw, hsla: cw, rgb: sw, rgba: sw }, Bw = function(t, A) {
  return vu.parse(t, Hh.create(A).parseComponentValue());
}, vs = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, A4 = { name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function(t, A) {
  return A.map(function(e) {
    if (Ue(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, e4 = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, yl = function(t, A) {
  return t = vu.parse(t, A[0]), A = A[1], A && ke(A) ? { color: t, stop: A } : { color: t, stop: null };
}, lw = function(t, A) {
  var e = t[0], n = t[t.length - 1];
  e.stop === null && (e.stop = nt), n.stop === null && (n.stop = Eu);
  for (var i = [], d = 0, s = 0; s < t.length; s++) {
    var l = t[s].stop;
    l !== null ? (l = ae(l, A), i.push(d < l ? l : d), d = l) : i.push(null);
  }
  for (var w = null, s = 0; s < i.length; s++) {
    var h = i[s];
    if (h === null)
      w === null && (w = s);
    else if (w !== null) {
      for (var g = s - w, p = (h - i[w - 1]) / (1 + g), K = 1; K <= g; K++)
        i[w + K - 1] = p * K;
      w = null;
    }
  }
  return t.map(function(_, S) {
    return { color: _.color, stop: Math.max(Math.min(1, i[S] / A), 0) };
  });
}, t4 = function(t, i, e) {
  var d = i / 2, n = e / 2, i = ae(t[0], i) - d, d = n - ae(t[1], e);
  return (Math.atan2(d, i) + 2 * Math.PI) % (2 * Math.PI);
}, n4 = function(w, i, d) {
  var w = typeof w == "number" ? w : t4(w, i, d), n = Math.abs(i * Math.sin(w)) + Math.abs(d * Math.cos(w)), i = i / 2, d = d / 2, s = n / 2, l = Math.sin(w - Math.PI / 2) * s, w = Math.cos(w - Math.PI / 2) * s;
  return [n, i - w, i + w, d - l, d + l];
}, Xn = function(t, A) {
  return Math.sqrt(t * t + A * A);
}, fw = function(t, A, e, n, i) {
  return [[0, 0], [0, A], [t, 0], [t, A]].reduce(function(d, s) {
    var w = s[0], l = s[1], w = Xn(e - w, n - l);
    return (i ? w < d.optimumDistance : w > d.optimumDistance) ? { optimumCorner: s, optimumDistance: w } : d;
  }, { optimumDistance: i ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, r4 = function(t, A, e, n, i) {
  var d, s, l, w, h = 0, g = 0;
  switch (t.size) {
    case 0:
      t.shape === 0 ? h = g = Math.min(Math.abs(A), Math.abs(A - n), Math.abs(e), Math.abs(e - i)) : t.shape === 1 && (h = Math.min(Math.abs(A), Math.abs(A - n)), g = Math.min(Math.abs(e), Math.abs(e - i)));
      break;
    case 2:
      t.shape === 0 ? h = g = Math.min(Xn(A, e), Xn(A, e - i), Xn(A - n, e), Xn(A - n, e - i)) : t.shape === 1 && (d = Math.min(Math.abs(e), Math.abs(e - i)) / Math.min(Math.abs(A), Math.abs(A - n)), l = (w = fw(n, i, A, e, !0))[0], w = w[1], g = d * (h = Xn(l - A, (w - e) / d)));
      break;
    case 1:
      t.shape === 0 ? h = g = Math.max(Math.abs(A), Math.abs(A - n), Math.abs(e), Math.abs(e - i)) : t.shape === 1 && (h = Math.max(Math.abs(A), Math.abs(A - n)), g = Math.max(Math.abs(e), Math.abs(e - i)));
      break;
    case 3:
      t.shape === 0 ? h = g = Math.max(Xn(A, e), Xn(A, e - i), Xn(A - n, e), Xn(A - n, e - i)) : t.shape === 1 && (d = Math.max(Math.abs(e), Math.abs(e - i)) / Math.max(Math.abs(A), Math.abs(A - n)), l = (s = fw(n, i, A, e, !1))[0], w = s[1], g = d * (h = Xn(l - A, (w - e) / d)));
  }
  return Array.isArray(t.size) && (h = ae(t.size[0], n), g = t.size.length === 2 ? ae(t.size[1], i) : h), [h, g];
}, u4 = function(t, A) {
  var e = bn(180), n = [];
  return fr(A).forEach(function(i, d) {
    if (d === 0) {
      if (d = i[0], d.type === 20 && d.value === "to")
        return void (e = Lh(i));
      if (Kh(d))
        return void (e = Hl.parse(t, d));
    }
    d = yl(t, i), n.push(d);
  }), { angle: e, stops: n, type: 1 };
}, eB = function(t, A) {
  var e = bn(180), n = [];
  return fr(A).forEach(function(i, d) {
    if (d === 0) {
      if (d = i[0], d.type === 20 && ["top", "left", "right", "bottom"].indexOf(d.value) !== -1)
        return void (e = Lh(i));
      if (Kh(d))
        return void (e = (Hl.parse(t, d) + bn(270)) % bn(360));
    }
    d = yl(t, i), n.push(d);
  }), { angle: e, stops: n, type: 1 };
}, o4 = function(t, A) {
  var e = bn(180), n = [], i = 1;
  return fr(A).forEach(function(w, s) {
    var l, w = w[0];
    if (s === 0) {
      if (Ue(w) && w.value === "linear")
        return void (i = 1);
      if (Ue(w) && w.value === "radial")
        return void (i = 2);
    }
    w.type === 18 && (w.name === "from" ? (l = vu.parse(t, w.values[0]), n.push({ stop: nt, color: l })) : w.name === "to" ? (l = vu.parse(t, w.values[0]), n.push({ stop: Eu, color: l })) : w.name === "color-stop" && (s = w.values.filter(Dl)).length === 2 && (l = vu.parse(t, s[1]), w = s[0], zB(w)) && n.push({ stop: { type: 16, number: 100 * w.number, flags: w.flags }, color: l }));
  }), i === 1 ? { angle: (e + bn(180)) % bn(360), stops: n, type: i } : { size: 3, shape: 0, stops: n, position: [], type: i };
}, xh = "closest-side", _h = "farthest-side", Sh = "closest-corner", Oh = "farthest-corner", Th = "circle", Mh = "ellipse", kh = "cover", Gh = "contain", i4 = function(t, A) {
  var e = 0, n = 3, i = [], d = [];
  return fr(A).forEach(function(s, l) {
    var w, h = !0;
    l === 0 && (w = !1, h = s.reduce(function(g, p) {
      if (w)
        if (Ue(p))
          switch (p.value) {
            case "center":
              return d.push(Q0), g;
            case "top":
            case "left":
              return d.push(nt), g;
            case "right":
            case "bottom":
              return d.push(Eu), g;
          }
        else
          (ke(p) || Iu(p)) && d.push(p);
      else if (Ue(p))
        switch (p.value) {
          case Th:
            return e = 0, !1;
          case Mh:
            return !(e = 1);
          case "at":
            return !(w = !0);
          case xh:
            return n = 0, !1;
          case kh:
          case _h:
            return !(n = 1);
          case Gh:
          case Sh:
            return !(n = 2);
          case Oh:
            return !(n = 3);
        }
      else if (Iu(p) || ke(p))
        return (n = Array.isArray(n) ? n : []).push(p), !1;
      return g;
    }, h)), h && (l = yl(t, s), i.push(l));
  }), { size: n, shape: e, stops: i, position: d, type: 2 };
}, tB = function(t, A) {
  var e = 0, n = 3, i = [], d = [];
  return fr(A).forEach(function(s, l) {
    var w = !0;
    l === 0 ? w = s.reduce(function(h, g) {
      if (Ue(g))
        switch (g.value) {
          case "center":
            return d.push(Q0), !1;
          case "top":
          case "left":
            return d.push(nt), !1;
          case "right":
          case "bottom":
            return d.push(Eu), !1;
        }
      else if (ke(g) || Iu(g))
        return d.push(g), !1;
      return h;
    }, w) : l === 1 && (w = s.reduce(function(h, g) {
      if (Ue(g))
        switch (g.value) {
          case Th:
            return e = 0, !1;
          case Mh:
            return !(e = 1);
          case Gh:
          case xh:
            return n = 0, !1;
          case _h:
            return !(n = 1);
          case Sh:
            return !(n = 2);
          case kh:
          case Oh:
            return !(n = 3);
        }
      else if (Iu(g) || ke(g))
        return (n = Array.isArray(n) ? n : []).push(g), !1;
      return h;
    }, w)), w && (l = yl(t, s), i.push(l));
  }), { size: n, shape: e, stops: i, position: d, type: 2 };
}, a4 = function(t) {
  return t.type === 1;
}, d4 = function(t) {
  return t.type === 2;
}, Wf = { name: "image", parse: function(t, A) {
  if (A.type === 22)
    return e = { url: A.value, type: 0 }, t.cache.addImage(A.value), e;
  if (A.type !== 18)
    throw new Error("Unsupported image type " + A.type);
  var e = Vh[A.name];
  if ("u" < typeof e)
    throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
  return e(t, A.values);
} };
function s4(t) {
  return !(t.type === 20 && t.value === "none" || t.type === 18 && !Vh[t.name]);
}
for (var Da, nB, Zd, Vh = { "linear-gradient": u4, "-moz-linear-gradient": eB, "-ms-linear-gradient": eB, "-o-linear-gradient": eB, "-webkit-linear-gradient": eB, "radial-gradient": i4, "-moz-radial-gradient": tB, "-ms-radial-gradient": tB, "-o-radial-gradient": tB, "-webkit-radial-gradient": tB, "-webkit-gradient": o4 }, c4 = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  var e;
  return A.length === 0 || (e = A[0]).type === 20 && e.value === "none" ? [] : A.filter(function(n) {
    return Dl(n) && s4(n);
  }).map(function(n) {
    return Wf.parse(t, n);
  });
} }, B4 = { name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function(t, A) {
  return A.map(function(e) {
    if (Ue(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, l4 = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(t, A) {
  return fr(A).map(function(e) {
    return e.filter(ke);
  }).map(aw);
} }, f4 = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(t, A) {
  return fr(A).map(function(e) {
    return e.filter(Ue).map(function(n) {
      return n.value;
    }).join(" ");
  }).map(g4);
} }, g4 = function(t) {
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
}, w4 = (function(t) {
  t.AUTO = "auto", t.CONTAIN = "contain", t.COVER = "cover";
}(Da = Da || {}), { name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function(t, A) {
  return fr(A).map(function(e) {
    return e.filter(Q4);
  });
} }), Q4 = function(t) {
  return Ue(t) || ke(t);
}, rB = function(t) {
  return { name: "border-" + t + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
}, h4 = rB("top"), C4 = rB("right"), F4 = rB("bottom"), U4 = rB("left"), uB = function(t) {
  return { name: "border-radius-" + t, initialValue: "0 0", prefix: !1, type: 1, parse: function(A, e) {
    return aw(e.filter(ke));
  } };
}, p4 = uB("top-left"), m4 = uB("top-right"), E4 = uB("bottom-right"), D4 = uB("bottom-left"), oB = function(t) {
  return { name: "border-" + t + "-style", initialValue: "solid", prefix: !1, type: 2, parse: function(A, e) {
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
}, H4 = oB("top"), y4 = oB("right"), b4 = oB("bottom"), I4 = oB("left"), iB = function(t) {
  return { name: "border-" + t + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(A, e) {
    return hs(e) ? e.number : 0;
  } };
}, v4 = iB("top"), K4 = iB("right"), L4 = iB("bottom"), x4 = iB("left"), _4 = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, S4 = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "rtl" ? 0 : 1;
} }, O4 = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(Ue).reduce(function(e, n) {
    return e | T4(n.value);
  }, 0);
} }, T4 = function(t) {
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
}, M4 = { name: "float", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
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
} }, k4 = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(t, A) {
  return A.type === 20 && A.value === "normal" || A.type !== 17 && A.type !== 15 ? 0 : A.number;
} }, G4 = (function(t) {
  t.NORMAL = "normal", t.STRICT = "strict";
}(nB = nB || {}), { name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "strict" ? nB.NORMAL : nB.STRICT;
} }), V4 = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 }, gw = function(t, A) {
  return Ue(t) && t.value === "normal" ? 1.2 * A : t.type === 17 ? A * t.number : ke(t) ? ae(t, A) : A;
}, R4 = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(t, A) {
  return A.type === 20 && A.value === "none" ? null : Wf.parse(t, A);
} }, N4 = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "inside" ? 1 : 0;
} }, P4 = { name: "list-style-type", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
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
} }, aB = function(t) {
  return { name: "margin-" + t, initialValue: "0", prefix: !1, type: 4 };
}, J4 = aB("top"), X4 = aB("right"), W4 = aB("bottom"), Y4 = aB("left"), Z4 = { name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(Ue).map(function(e) {
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
} }, j4 = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "break-word" ? "normal" : "break-word";
} }, dB = function(t) {
  return { name: "padding-" + t, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
}, q4 = dB("top"), z4 = dB("right"), $4 = dB("bottom"), Am = dB("left"), em = { name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, tm = { name: "position", initialValue: "static", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
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
} }, nm = { name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.length === 1 && Jf(A[0], "none") ? [] : fr(A).map(function(e) {
    for (var n = { color: vs.TRANSPARENT, offsetX: nt, offsetY: nt, blur: nt }, i = 0, d = 0; d < e.length; d++) {
      var s = e[d];
      Iu(s) ? (i === 0 ? n.offsetX = s : i === 1 ? n.offsetY = s : n.blur = s, i++) : n.color = vu.parse(t, s);
    }
    return n;
  });
} }, rm = { name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, um = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(t, A) {
  if (A.type === 20 && A.value === "none" || A.type !== 18)
    return null;
  var e = am[A.name];
  if ("u" < typeof e)
    throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
  return e(A.values);
} }, om = function(t) {
  return t = t.filter(function(A) {
    return A.type === 17;
  }).map(function(A) {
    return A.number;
  }), t.length === 6 ? t : null;
}, im = function(A) {
  var A = A.filter(function(w) {
    return w.type === 17;
  }).map(function(w) {
    return w.number;
  }), e = A[0], n = A[1], i = (A[2], A[3], A[4]), d = A[5], s = (A[6], A[7], A[8], A[9], A[10], A[11], A[12]), l = A[13];
  return A[14], A[15], A.length === 16 ? [e, n, i, d, s, l] : null;
}, am = { matrix: om, matrix3d: im }, ww = { type: 16, number: 50, flags: Ss }, dm = [ww, ww], sm = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(t, A) {
  return A = A.filter(ke), A.length !== 2 ? dm : [A[0], A[1]];
} }, cm = { name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "hidden":
      return 1;
    case "collapse":
      return 2;
    default:
      return 0;
  }
} }, Bm = (function(t) {
  t.NORMAL = "normal", t.BREAK_ALL = "break-all", t.KEEP_ALL = "keep-all";
}(Zd = Zd || {}), { name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "break-all":
      return Zd.BREAK_ALL;
    case "keep-all":
      return Zd.KEEP_ALL;
    default:
      return Zd.NORMAL;
  }
} }), lm = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(t, A) {
  if (A.type === 20)
    return { auto: !0, order: 0 };
  if (zB(A))
    return { auto: !1, order: A.number };
  throw new Error("Invalid z-index number parsed");
} }, Qw = { name: "time", parse: function(t, A) {
  if (A.type === 15)
    switch (A.unit.toLowerCase()) {
      case "s":
        return 1e3 * A.number;
      case "ms":
        return A.number;
    }
  throw new Error("Unsupported time type");
} }, fm = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(t, A) {
  return zB(A) ? A.number : 1;
} }, gm = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, wm = { name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(Ue).map(function(e) {
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
} }, Qm = { name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function(t, A) {
  var e = [], n = [];
  return A.forEach(function(i) {
    switch (i.type) {
      case 20:
      case 0:
        e.push(i.value);
        break;
      case 17:
        e.push(i.number.toString());
        break;
      case 4:
        n.push(e.join(" ")), e.length = 0;
    }
  }), e.length && n.push(e.join(" ")), n.map(function(i) {
    return i.indexOf(" ") === -1 ? i : "'" + i + "'";
  });
} }, hm = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" }, Cm = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(t, A) {
  return zB(A) ? A.number : !Ue(A) || A.value !== "bold" ? 400 : 700;
} }, Fm = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.filter(Ue).map(function(e) {
    return e.value;
  });
} }, Um = { name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "oblique":
      return "oblique";
    case "italic":
      return "italic";
    default:
      return "normal";
  }
} }, Pe = function(t, A) {
  return (t & A) != 0;
}, pm = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(hs).map(function(e) {
    return Qw.parse(t, e);
  });
} }, mm = { name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.length === 1 && Jf(A[0], "none") ? [] : fr(A).map(function(e) {
    for (var n = { color: 255, offsetX: nt, offsetY: nt, blur: nt, spread: nt, inset: !1 }, i = 0, d = 0; d < e.length; d++) {
      var s = e[d];
      Jf(s, "inset") ? n.inset = !0 : Iu(s) ? (i === 0 ? n.offsetX = s : i === 1 ? n.offsetY = s : i === 2 ? n.blur = s : n.spread = s, i++) : n.color = vu.parse(t, s);
    }
    return n;
  });
} }, Em = { name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function(t, A) {
  var e = [];
  return A.filter(Ue).forEach(function(n) {
    switch (n.value) {
      case "stroke":
        e.push(1);
        break;
      case "fill":
        e.push(0);
        break;
      case "markers":
        e.push(2);
    }
  }), [0, 1, 2].forEach(function(n) {
    e.indexOf(n) === -1 && e.push(n);
  }), e;
} }, Dm = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" }, Hm = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(t, A) {
  return hs(A) ? A.number : 0;
} }, ym = function() {
  function t(A, e) {
    this.animationDuration = dA(A, pm, e.animationDuration), this.backgroundClip = dA(A, A4, e.backgroundClip), this.backgroundColor = dA(A, e4, e.backgroundColor), this.backgroundImage = dA(A, c4, e.backgroundImage), this.backgroundOrigin = dA(A, B4, e.backgroundOrigin), this.backgroundPosition = dA(A, l4, e.backgroundPosition), this.backgroundRepeat = dA(A, f4, e.backgroundRepeat), this.backgroundSize = dA(A, w4, e.backgroundSize), this.borderTopColor = dA(A, h4, e.borderTopColor), this.borderRightColor = dA(A, C4, e.borderRightColor), this.borderBottomColor = dA(A, F4, e.borderBottomColor), this.borderLeftColor = dA(A, U4, e.borderLeftColor), this.borderTopLeftRadius = dA(A, p4, e.borderTopLeftRadius), this.borderTopRightRadius = dA(A, m4, e.borderTopRightRadius), this.borderBottomRightRadius = dA(A, E4, e.borderBottomRightRadius), this.borderBottomLeftRadius = dA(A, D4, e.borderBottomLeftRadius), this.borderTopStyle = dA(A, H4, e.borderTopStyle), this.borderRightStyle = dA(A, y4, e.borderRightStyle), this.borderBottomStyle = dA(A, b4, e.borderBottomStyle), this.borderLeftStyle = dA(A, I4, e.borderLeftStyle), this.borderTopWidth = dA(A, v4, e.borderTopWidth), this.borderRightWidth = dA(A, K4, e.borderRightWidth), this.borderBottomWidth = dA(A, L4, e.borderBottomWidth), this.borderLeftWidth = dA(A, x4, e.borderLeftWidth), this.boxShadow = dA(A, mm, e.boxShadow), this.color = dA(A, _4, e.color), this.direction = dA(A, S4, e.direction), this.display = dA(A, O4, e.display), this.float = dA(A, M4, e.cssFloat), this.fontFamily = dA(A, Qm, e.fontFamily), this.fontSize = dA(A, hm, e.fontSize), this.fontStyle = dA(A, Um, e.fontStyle), this.fontVariant = dA(A, Fm, e.fontVariant), this.fontWeight = dA(A, Cm, e.fontWeight), this.letterSpacing = dA(A, k4, e.letterSpacing), this.lineBreak = dA(A, G4, e.lineBreak), this.lineHeight = dA(A, V4, e.lineHeight), this.listStyleImage = dA(A, R4, e.listStyleImage), this.listStylePosition = dA(A, N4, e.listStylePosition), this.listStyleType = dA(A, P4, e.listStyleType), this.marginTop = dA(A, J4, e.marginTop), this.marginRight = dA(A, X4, e.marginRight), this.marginBottom = dA(A, W4, e.marginBottom), this.marginLeft = dA(A, Y4, e.marginLeft), this.opacity = dA(A, fm, e.opacity);
    var n = dA(A, Z4, e.overflow);
    this.overflowX = n[0], this.overflowY = n[1 < n.length ? 1 : 0], this.overflowWrap = dA(A, j4, e.overflowWrap), this.paddingTop = dA(A, q4, e.paddingTop), this.paddingRight = dA(A, z4, e.paddingRight), this.paddingBottom = dA(A, $4, e.paddingBottom), this.paddingLeft = dA(A, Am, e.paddingLeft), this.paintOrder = dA(A, Em, e.paintOrder), this.position = dA(A, tm, e.position), this.textAlign = dA(A, em, e.textAlign), this.textDecorationColor = dA(A, gm, (n = e.textDecorationColor) != null ? n : e.color), this.textDecorationLine = dA(A, wm, (n = e.textDecorationLine) != null ? n : e.textDecoration), this.textShadow = dA(A, nm, e.textShadow), this.textTransform = dA(A, rm, e.textTransform), this.transform = dA(A, um, e.transform), this.transformOrigin = dA(A, sm, e.transformOrigin), this.visibility = dA(A, cm, e.visibility), this.webkitTextStrokeColor = dA(A, Dm, e.webkitTextStrokeColor), this.webkitTextStrokeWidth = dA(A, Hm, e.webkitTextStrokeWidth), this.wordBreak = dA(A, Bm, e.wordBreak), this.zIndex = dA(A, lm, e.zIndex);
  }
  return t.prototype.isVisible = function() {
    return 0 < this.display && 0 < this.opacity && this.visibility === 0;
  }, t.prototype.isTransparent = function() {
    return Ea(this.backgroundColor);
  }, t.prototype.isTransformed = function() {
    return this.transform !== null;
  }, t.prototype.isPositioned = function() {
    return this.position !== 0;
  }, t.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  }, t.prototype.isFloating = function() {
    return this.float !== 0;
  }, t.prototype.isInlineLevel = function() {
    return Pe(this.display, 4) || Pe(this.display, 33554432) || Pe(this.display, 268435456) || Pe(this.display, 536870912) || Pe(this.display, 67108864) || Pe(this.display, 134217728);
  }, t;
}(), dA = function(t, A, i) {
  var n = new Dh(), i = i !== null && typeof i < "u" ? i.toString() : A.initialValue, d = (n.write(i), new Hh(n.read()));
  switch (A.type) {
    case 2:
      var s = d.parseComponentValue();
      return A.parse(t, Ue(s) ? s.value : A.initialValue);
    case 0:
      return A.parse(t, d.parseComponentValue());
    case 1:
      return A.parse(t, d.parseComponentValues());
    case 4:
      return d.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return Hl.parse(t, d.parseComponentValue());
        case "color":
          return vu.parse(t, d.parseComponentValue());
        case "image":
          return Wf.parse(t, d.parseComponentValue());
        case "length":
          var l = d.parseComponentValue();
          return Iu(l) ? l : nt;
        case "length-percentage":
          return l = d.parseComponentValue(), ke(l) ? l : nt;
        case "time":
          return Qw.parse(t, d.parseComponentValue());
      }
  }
}, bm = "data-html2canvas-debug", Im = function(t) {
  switch (t.getAttribute(bm)) {
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
}, hw = function(t, A) {
  return t = Im(t), t === 1 || A === t;
}, wr = function(t, A) {
  this.context = t, this.textNodes = [], this.elements = [], this.flags = 0, hw(A, 3), this.styles = new ym(t, window.getComputedStyle(A, null)), bE(A) && (this.styles.animationDuration.some(function(e) {
    return 0 < e;
  }) && (A.style.animationDuration = "0s"), this.styles.transform !== null) && (A.style.transform = "none"), this.bounds = w0(this.context, A), hw(A, 4) && (this.flags |= 16);
}, vm = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Cw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", os = "u" < typeof Uint8Array ? [] : new Uint8Array(256), sB = 0; sB < Cw.length; sB++)
  os[Cw.charCodeAt(sB)] = sB;
for (var Km = function(t) {
  for (var A, e, n, i, l = 0.75 * t.length, d = t.length, s = 0, l = (t[t.length - 1] === "=" && (l--, t[t.length - 2] === "=") && l--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? ArrayBuffer : Array)(l)), w = Array.isArray(l) ? l : new Uint8Array(l), h = 0; h < d; h += 4)
    A = os[t.charCodeAt(h)], e = os[t.charCodeAt(h + 1)], n = os[t.charCodeAt(h + 2)], i = os[t.charCodeAt(h + 3)], w[s++] = A << 2 | e >> 4, w[s++] = (15 & e) << 4 | n >> 2, w[s++] = (3 & n) << 6 | 63 & i;
  return l;
}, Lm = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 2)
    e.push(t[n + 1] << 8 | t[n]);
  return e;
}, xm = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 4)
    e.push(t[n + 3] << 24 | t[n + 2] << 16 | t[n + 1] << 8 | t[n]);
  return e;
}, So = 5, Yf = 11, Zf = 2, _m = Yf - So, Fw = 65536 >> So, Sm = 1 << So, jf = Sm - 1, Om = 1024 >> So, Uw = Fw + Om, PI = Uw, Tm = 32, Mm = Uw + Tm, km = 65536 >> Yf, Gm = 1 << _m, Vm = Gm - 1, pw = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, Rm = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, Nm = function(i, A) {
  var i = Km(i), e = Array.isArray(i) ? xm(i) : new Uint32Array(i), i = Array.isArray(i) ? Lm(i) : new Uint16Array(i), n = pw(i, 12, e[4] / 2), i = e[5] === 2 ? pw(i, (24 + e[4]) / 2) : Rm(e, Math.ceil((24 + e[4]) / 4));
  return new Pm(e[0], e[1], e[2], e[3], n, i);
}, Pm = function() {
  function t(A, e, n, i, d, s) {
    this.initialValue = A, this.errorValue = e, this.highStart = n, this.highValueIndex = i, this.index = d, this.data = s;
  }
  return t.prototype.get = function(A) {
    var e;
    if (0 <= A) {
      if (A < 55296 || 56319 < A && A <= 65535)
        return e = this.index[A >> So], this.data[e = (e << Zf) + (A & jf)];
      if (A <= 65535)
        return e = this.index[Fw + (A - 55296 >> So)], this.data[e = (e << Zf) + (A & jf)];
      if (A < this.highStart)
        return e = this.index[e = Mm - km + (A >> Yf)], e = this.index[e += A >> So & Vm], this.data[e = (e << Zf) + (A & jf)];
      if (A <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, t;
}(), mw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Jm = "u" < typeof Uint8Array ? [] : new Uint8Array(256), cB = 0; cB < mw.length; cB++)
  Jm[mw.charCodeAt(cB)] = cB;
var Ew, jA, Xm = 1, qf = 2, zf = 3, Dw = 4, Hw = 5, Wm = 7, yw = 8, $f = 9, Ag = 10, bw = 11, Iw = 12, vw = 13, Kw = 14, eg = 15, Ym = function(t) {
  for (var A = [], e = 0, n = t.length; e < n; ) {
    var i, d = t.charCodeAt(e++);
    55296 <= d && d <= 56319 && e < n ? (64512 & (i = t.charCodeAt(e++))) == 56320 ? A.push(((1023 & d) << 10) + (1023 & i) + 65536) : (A.push(d), e--) : A.push(d);
  }
  return A;
}, Zm = function() {
  for (var t = [], A = 0; A < arguments.length; A++)
    t[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, t);
  var e = t.length;
  if (!e)
    return "";
  for (var n = [], i = -1, d = ""; ++i < e; ) {
    var s = t[i];
    s <= 65535 ? n.push(s) : n.push(55296 + ((s -= 65536) >> 10), s % 1024 + 56320), (i + 1 === e || 16384 < n.length) && (d += String.fromCharCode.apply(String, n), n.length = 0);
  }
  return d;
}, jm = Nm(vm), Po = "×", qm = "÷", zm = function(t) {
  return jm.get(t);
}, $m = function(t, A, s) {
  var n = s - 2, i = A[n], d = A[s - 1], s = A[s];
  if (d === qf && s === zf)
    return Po;
  if (d !== qf && d !== zf && d !== Dw && s !== qf && s !== zf && s !== Dw) {
    if (d === yw && [yw, $f, bw, Iw].indexOf(s) !== -1 || (d === bw || d === $f) && (s === $f || s === Ag) || (d === Iw || d === Ag) && s === Ag || s === vw || s === Hw || s === Wm || d === Xm)
      return Po;
    if (d === vw && s === Kw) {
      for (; i === Hw; )
        i = A[--n];
      if (i === Kw)
        return Po;
    }
    if (d === eg && s === eg) {
      for (var l = 0; i === eg; )
        l++, i = A[--n];
      if (l % 2 == 0)
        return Po;
    }
  }
  return qm;
}, AE = function(t) {
  var A = Ym(t), e = A.length, n = 0, i = 0, d = A.map(zm);
  return { next: function() {
    if (e <= n)
      return { done: !0, value: null };
    for (var s, l = Po; n < e && (l = $m(A, d, ++n)) === Po; )
      ;
    return l !== Po || n === e ? (s = Zm.apply(null, A.slice(i, n)), i = n, { value: s, done: !1 }) : { done: !0, value: null };
  } };
}, eE = function(t) {
  for (var A, e = AE(t), n = []; !(A = e.next()).done; )
    A.value && n.push(A.value.slice());
  return n;
}, tE = function(t) {
  if (t.createRange) {
    var A = t.createRange();
    if (A.getBoundingClientRect) {
      var e = t.createElement("boundtest"), A = (e.style.height = "123px", e.style.display = "block", t.body.appendChild(e), A.selectNode(e), A.getBoundingClientRect()), A = Math.round(A.height);
      if (t.body.removeChild(e), A === 123)
        return !0;
    }
  }
  return !1;
}, nE = function(t) {
  var A = t.createElement("boundtest"), e = (A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", t.body.appendChild(A), t.createRange()), n = (A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "", A.firstChild), s = El(n.data).map(function(l) {
    return be(l);
  }), i = 0, d = {}, s = s.every(function(g, w) {
    e.setStart(n, i), e.setEnd(n, i + g.length);
    var h = e.getBoundingClientRect(), g = (i += g.length, h.x > d.x || h.y > d.y);
    return d = h, w === 0 || g;
  });
  return t.body.removeChild(A), s;
}, rE = function() {
  return typeof new Image().crossOrigin < "u";
}, uE = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, oE = function(e) {
  var A = new Image(), e = e.createElement("canvas"), n = e.getContext("2d");
  if (!n)
    return !1;
  A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    n.drawImage(A, 0, 0), e.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, Lw = function(t) {
  return t[0] === 0 && t[1] === 255 && t[2] === 0 && t[3] === 255;
}, iE = function(t) {
  var i = t.createElement("canvas"), A = (i.width = 100, i.height = 100, i.getContext("2d"));
  if (!A)
    return Promise.reject(!1);
  A.fillStyle = "rgb(0, 255, 0)", A.fillRect(0, 0, 100, 100);
  var e = new Image(), n = i.toDataURL(), i = (e.src = n, Ng(100, 100, 0, 0, e));
  return A.fillStyle = "red", A.fillRect(0, 0, 100, 100), xw(i).then(function(s) {
    A.drawImage(s, 0, 0);
    var s = A.getImageData(0, 0, 100, 100).data, l = (A.fillStyle = "red", A.fillRect(0, 0, 100, 100), t.createElement("div"));
    return l.style.backgroundImage = "url(" + n + ")", l.style.height = "100px", Lw(s) ? xw(Ng(100, 100, 0, 0, l)) : Promise.reject(!1);
  }).then(function(d) {
    return A.drawImage(d, 0, 0), Lw(A.getImageData(0, 0, 100, 100).data);
  }).catch(function() {
    return !1;
  });
}, Ng = function(t, A, e, n, i) {
  var s = "http://www.w3.org/2000/svg", d = document.createElementNS(s, "svg"), s = document.createElementNS(s, "foreignObject");
  return d.setAttributeNS(null, "width", t.toString()), d.setAttributeNS(null, "height", A.toString()), s.setAttributeNS(null, "width", "100%"), s.setAttributeNS(null, "height", "100%"), s.setAttributeNS(null, "x", e.toString()), s.setAttributeNS(null, "y", n.toString()), s.setAttributeNS(null, "externalResourcesRequired", "true"), d.appendChild(s), s.appendChild(i), d;
}, xw = function(t) {
  return new Promise(function(A, e) {
    var n = new Image();
    n.onload = function() {
      return A(n);
    }, n.onerror = e, n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
  });
}, nn = { get SUPPORT_RANGE_BOUNDS() {
  var t = tE(document);
  return Object.defineProperty(nn, "SUPPORT_RANGE_BOUNDS", { value: t }), t;
}, get SUPPORT_WORD_BREAKING() {
  var t = nn.SUPPORT_RANGE_BOUNDS && nE(document);
  return Object.defineProperty(nn, "SUPPORT_WORD_BREAKING", { value: t }), t;
}, get SUPPORT_SVG_DRAWING() {
  var t = oE(document);
  return Object.defineProperty(nn, "SUPPORT_SVG_DRAWING", { value: t }), t;
}, get SUPPORT_FOREIGNOBJECT_DRAWING() {
  var t = typeof Array.from == "function" && typeof window.fetch == "function" ? iE(document) : Promise.resolve(!1);
  return Object.defineProperty(nn, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: t }), t;
}, get SUPPORT_CORS_IMAGES() {
  var t = rE();
  return Object.defineProperty(nn, "SUPPORT_CORS_IMAGES", { value: t }), t;
}, get SUPPORT_RESPONSE_TYPE() {
  var t = uE();
  return Object.defineProperty(nn, "SUPPORT_RESPONSE_TYPE", { value: t }), t;
}, get SUPPORT_CORS_XHR() {
  var t = "withCredentials" in new XMLHttpRequest();
  return Object.defineProperty(nn, "SUPPORT_CORS_XHR", { value: t }), t;
}, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
  var t = !!(typeof Intl < "u" && Intl.Segmenter);
  return Object.defineProperty(nn, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: t }), t;
} }, Cs = function(t, A) {
  this.text = t, this.bounds = A;
}, aE = function(t, i, e, n) {
  var i = cE(i, e), d = [], s = 0;
  return i.forEach(function(l) {
    var w, h, g;
    e.textDecorationLine.length || 0 < l.trim().length ? nn.SUPPORT_RANGE_BOUNDS ? 1 < (w = _w(n, s, l.length).getClientRects()).length ? (g = h0(l), h = 0, g.forEach(function(p) {
      d.push(new Cs(p, Wo.fromDOMRectList(t, _w(n, h + s, p.length).getClientRects()))), h += p.length;
    })) : d.push(new Cs(l, Wo.fromDOMRectList(t, w))) : (g = n.splitText(l.length), d.push(new Cs(l, dE(t, n))), n = g) : nn.SUPPORT_RANGE_BOUNDS || (n = n.splitText(l.length)), s += l.length;
  }), d;
}, dE = function(t, A) {
  var e = A.ownerDocument;
  if (e) {
    var e = e.createElement("html2canvaswrapper"), n = (e.appendChild(A.cloneNode(!0)), A.parentNode);
    if (n)
      return n.replaceChild(e, A), A = w0(t, e), e.firstChild && n.replaceChild(e.firstChild, e), A;
  }
  return Wo.EMPTY;
}, _w = function(t, A, e) {
  var n = t.ownerDocument;
  if (n)
    return (n = n.createRange()).setStart(t, A), n.setEnd(t, A + e), n;
  throw new Error("Node has no owner document");
}, h0 = function(t) {
  var A;
  return nn.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (A = new Intl.Segmenter(void 0, { granularity: "grapheme" }), Array.from(A.segment(t)).map(function(e) {
    return e.segment;
  })) : eE(t);
}, sE = function(t, A) {
  var e;
  return nn.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (e = new Intl.Segmenter(void 0, { granularity: "word" }), Array.from(e.segment(t)).map(function(n) {
    return n.segment;
  })) : lE(t, A);
}, cE = function(t, A) {
  return A.letterSpacing !== 0 ? h0(t) : sE(t, A);
}, BE = [32, 160, 4961, 65792, 65793, 4153, 4241], lE = function(t, A) {
  for (var e, n = Xp(t, { lineBreak: A.lineBreak, wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak }), i = []; !(e = n.next()).done; )
    (function() {
      var d, s;
      e.value && (d = e.value.slice(), d = El(d), s = "", d.forEach(function(l) {
        BE.indexOf(l) === -1 ? s += be(l) : (s.length && i.push(s), i.push(be(l)), s = "");
      }), s.length) && i.push(s);
    })();
  return i;
}, fE = function(t, A, e) {
  this.text = gE(A.data, e.textTransform), this.textBounds = aE(t, this.text, e, A);
}, gE = function(t, A) {
  switch (A) {
    case 1:
      return t.toLowerCase();
    case 3:
      return t.replace(wE, QE);
    case 2:
      return t.toUpperCase();
    default:
      return t;
  }
}, wE = /(^|\s|:|-|\(|\))([a-z])/g, QE = function(t, A, e) {
  return 0 < t.length ? A + e.toUpperCase() : t;
}, Rh = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e.src = n.currentSrc || n.src, e.intrinsicWidth = n.naturalWidth, e.intrinsicHeight = n.naturalHeight, e.context.cache.addImage(e.src), e;
  }
  return Yn(A, t), A;
}(wr), Nh = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e.canvas = n, e.intrinsicWidth = n.width, e.intrinsicHeight = n.height, e;
  }
  return Yn(A, t), A;
}(wr), Ph = function(t) {
  function A(s, n) {
    var i = t.call(this, s, n) || this, d = new XMLSerializer(), s = w0(s, n);
    return n.setAttribute("width", s.width + "px"), n.setAttribute("height", s.height + "px"), i.svg = "data:image/svg+xml," + encodeURIComponent(d.serializeToString(n)), i.intrinsicWidth = n.width.baseVal.value, i.intrinsicHeight = n.height.baseVal.value, i.context.cache.addImage(i.svg), i;
  }
  return Yn(A, t), A;
}(wr), Jh = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e.value = n.value, e;
  }
  return Yn(A, t), A;
}(wr), Pg = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e.start = n.start, e.reversed = typeof n.reversed == "boolean" && n.reversed === !0, e;
  }
  return Yn(A, t), A;
}(wr), hE = [{ type: 15, flags: 0, unit: "px", number: 3 }], CE = [{ type: 16, flags: 0, number: 50 }], FE = function(t) {
  return t.width > t.height ? new Wo(t.left + (t.width - t.height) / 2, t.top, t.height, t.height) : t.width < t.height ? new Wo(t.left, t.top + (t.height - t.width) / 2, t.width, t.width) : t;
}, UE = function(t) {
  var A = t.type === pE ? new Array(t.value.length + 1).join("•") : t.value;
  return A.length === 0 ? t.placeholder || "" : A;
}, dl = "checkbox", sl = "radio", pE = "password", Sw = 707406591, Jg = function(t) {
  function A(e, n) {
    var i = t.call(this, e, n) || this;
    switch (i.type = n.type.toLowerCase(), i.checked = n.checked, i.value = UE(n), i.type !== dl && i.type !== sl || (i.styles.backgroundColor = 3739148031, i.styles.borderTopColor = i.styles.borderRightColor = i.styles.borderBottomColor = i.styles.borderLeftColor = 2779096575, i.styles.borderTopWidth = i.styles.borderRightWidth = i.styles.borderBottomWidth = i.styles.borderLeftWidth = 1, i.styles.borderTopStyle = i.styles.borderRightStyle = i.styles.borderBottomStyle = i.styles.borderLeftStyle = 1, i.styles.backgroundClip = [0], i.styles.backgroundOrigin = [0], i.bounds = FE(i.bounds)), i.type) {
      case dl:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = hE;
        break;
      case sl:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = CE;
    }
    return i;
  }
  return Yn(A, t), A;
}(wr), Xh = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, n = n.options[n.selectedIndex || 0], e.value = n && n.text || "", e;
  }
  return Yn(A, t), A;
}(wr), Wh = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e.value = n.value, e;
  }
  return Yn(A, t), A;
}(wr), Yh = function(t) {
  function A(e, n) {
    var i, d, s = t.call(this, e, n) || this;
    s.src = n.src, s.width = parseInt(n.width, 10) || 0, s.height = parseInt(n.height, 10) || 0, s.backgroundColor = s.styles.backgroundColor;
    try {
      n.contentWindow && n.contentWindow.document && n.contentWindow.document.documentElement && (s.tree = EE(e, n.contentWindow.document.documentElement), i = n.contentWindow.document.documentElement ? Bw(e, getComputedStyle(n.contentWindow.document.documentElement).backgroundColor) : vs.TRANSPARENT, d = n.contentWindow.document.body ? Bw(e, getComputedStyle(n.contentWindow.document.body).backgroundColor) : vs.TRANSPARENT, s.backgroundColor = Ea(i) ? Ea(d) ? s.styles.backgroundColor : d : i);
    } catch {
    }
    return s;
  }
  return Yn(A, t), A;
}(wr), mE = ["OL", "UL", "MENU"], $B = function(t, A, e, n) {
  for (var i, d, s = A.firstChild; s; s = i)
    i = s.nextSibling, yE(s) && 0 < s.data.trim().length ? e.textNodes.push(new fE(t, s, e.styles)) : jh(s) && (TE(s) && s.assignedNodes ? s.assignedNodes().forEach(function(l) {
      return $B(t, l, e, n);
    }) : (d = Zh(t, s)).styles.isVisible() && (DE(s, d, n) ? d.flags |= 4 : HE(d.styles) && (d.flags |= 2), mE.indexOf(s.tagName) !== -1 && (d.flags |= 8), e.elements.push(d), s.slot, s.shadowRoot ? $B(t, s.shadowRoot, d, n) : zh(s) || qh(s) || $h(s) || $B(t, s, d, n)));
}, Zh = function(t, A) {
  return new (SE(A) ? Rh : _E(A) ? Nh : qh(A) ? Ph : vE(A) ? Jh : KE(A) ? Pg : LE(A) ? Jg : $h(A) ? Xh : zh(A) ? Wh : OE(A) ? Yh : wr)(t, A);
}, EE = function(t, A) {
  var e = Zh(t, A);
  return e.flags |= 4, $B(t, A, e, e), e;
}, DE = function(t, A, e) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || xE(t) && e.styles.isTransparent();
}, HE = function(t) {
  return t.isPositioned() || t.isFloating();
}, yE = function(t) {
  return t.nodeType === Node.TEXT_NODE;
}, jh = function(t) {
  return t.nodeType === Node.ELEMENT_NODE;
}, bE = function(t) {
  return jh(t) && typeof t.style < "u" && !IE(t);
}, IE = function(t) {
  return typeof t.className == "object";
}, vE = function(t) {
  return t.tagName === "LI";
}, KE = function(t) {
  return t.tagName === "OL";
}, LE = function(t) {
  return t.tagName === "INPUT";
}, qh = function(t) {
  return t.tagName === "svg";
}, xE = function(t) {
  return t.tagName === "BODY";
}, _E = function(t) {
  return t.tagName === "CANVAS";
}, SE = function(t) {
  return t.tagName === "IMG";
}, OE = function(t) {
  return t.tagName === "IFRAME";
}, zh = function(t) {
  return t.tagName === "TEXTAREA";
}, $h = function(t) {
  return t.tagName === "SELECT";
}, TE = function(t) {
  return t.tagName === "SLOT";
}, Ow = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, Tw = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] }, ME = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] }, kE = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] }, oa = function(t, A, e, n, i, d) {
  return t < A || e < t ? C0(t, i, 0 < d.length) : n.integers.reduce(function(s, l, w) {
    for (; l <= t; )
      t -= l, s += n.values[w];
    return s;
  }, "") + d;
}, AC = function(t, A, e, n) {
  for (var i = ""; e || t--, i = n(t) + i, A <= (t /= A) * A; )
    ;
  return i;
}, He = function(t, A, e, n, i) {
  var d = e - A + 1;
  return (t < 0 ? "-" : "") + (AC(Math.abs(t), d, n, function(s) {
    return be(Math.floor(s % d) + A);
  }) + i);
}, Oo = function(t, A, e) {
  e === void 0 && (e = ". ");
  var n = A.length;
  return AC(Math.abs(t), n, !1, function(i) {
    return A[Math.floor(i % n)];
  }) + e;
}, wa = 1, wu = 2, Qu = 4, is = 8, Gr = function(t, A, e, n, i, d) {
  if (t < -9999 || 9999 < t)
    return C0(t, 4, 0 < i.length);
  var s = Math.abs(t), l = i;
  if (s === 0)
    return A[0] + l;
  for (var w = 0; 0 < s && w <= 4; w++) {
    var h = s % 10;
    h == 0 && Pe(d, wa) && l !== "" ? l = A[h] + l : 1 < h || h == 1 && w === 0 || h == 1 && w === 1 && Pe(d, wu) || h == 1 && w === 1 && Pe(d, Qu) && 100 < t || h == 1 && 1 < w && Pe(d, is) ? l = A[h] + (0 < w ? e[w - 1] : "") + l : h == 1 && 0 < w && (l = e[w - 1] + l), s = Math.floor(s / 10);
  }
  return (t < 0 ? n : "") + l;
}, Mw = "十百千萬", kw = "拾佰仟萬", Gw = "マイナス", tg = "마이너스", C0 = function(t, A, e) {
  var n = e ? ". " : "", i = e ? "、" : "", d = e ? ", " : "", s = e ? " " : "";
  switch (A) {
    case 0:
      return "•" + s;
    case 1:
      return "◦" + s;
    case 2:
      return "◾" + s;
    case 5:
      var l = He(t, 48, 57, !0, n);
      return l.length < 4 ? "0" + l : l;
    case 4:
      return Oo(t, "〇一二三四五六七八九", i);
    case 6:
      return oa(t, 1, 3999, Ow, 3, n).toLowerCase();
    case 7:
      return oa(t, 1, 3999, Ow, 3, n);
    case 8:
      return He(t, 945, 969, !1, n);
    case 9:
      return He(t, 97, 122, !1, n);
    case 10:
      return He(t, 65, 90, !1, n);
    case 11:
      return He(t, 1632, 1641, !0, n);
    case 12:
    case 49:
      return oa(t, 1, 9999, Tw, 3, n);
    case 35:
      return oa(t, 1, 9999, Tw, 3, n).toLowerCase();
    case 13:
      return He(t, 2534, 2543, !0, n);
    case 14:
    case 30:
      return He(t, 6112, 6121, !0, n);
    case 15:
      return Oo(t, "子丑寅卯辰巳午未申酉戌亥", i);
    case 16:
      return Oo(t, "甲乙丙丁戊己庚辛壬癸", i);
    case 17:
    case 48:
      return Gr(t, "零一二三四五六七八九", Mw, "負", i, wu | Qu | is);
    case 47:
      return Gr(t, "零壹貳參肆伍陸柒捌玖", kw, "負", i, wa | wu | Qu | is);
    case 42:
      return Gr(t, "零一二三四五六七八九", Mw, "负", i, wu | Qu | is);
    case 41:
      return Gr(t, "零壹贰叁肆伍陆柒捌玖", kw, "负", i, wa | wu | Qu | is);
    case 26:
      return Gr(t, "〇一二三四五六七八九", "十百千万", Gw, i, 0);
    case 25:
      return Gr(t, "零壱弐参四伍六七八九", "拾百千万", Gw, i, wa | wu | Qu);
    case 31:
      return Gr(t, "영일이삼사오육칠팔구", "십백천만", tg, d, wa | wu | Qu);
    case 33:
      return Gr(t, "零一二三四五六七八九", "十百千萬", tg, d, 0);
    case 32:
      return Gr(t, "零壹貳參四五六七八九", "拾百千", tg, d, wa | wu | Qu);
    case 18:
      return He(t, 2406, 2415, !0, n);
    case 20:
      return oa(t, 1, 19999, kE, 3, n);
    case 21:
      return He(t, 2790, 2799, !0, n);
    case 22:
      return He(t, 2662, 2671, !0, n);
    case 22:
      return oa(t, 1, 10999, ME, 3, n);
    case 23:
      return Oo(t, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return Oo(t, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return He(t, 3302, 3311, !0, n);
    case 28:
      return Oo(t, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", i);
    case 29:
      return Oo(t, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", i);
    case 34:
      return He(t, 3792, 3801, !0, n);
    case 37:
      return He(t, 6160, 6169, !0, n);
    case 38:
      return He(t, 4160, 4169, !0, n);
    case 39:
      return He(t, 2918, 2927, !0, n);
    case 40:
      return He(t, 1776, 1785, !0, n);
    case 43:
      return He(t, 3046, 3055, !0, n);
    case 44:
      return He(t, 3174, 3183, !0, n);
    case 45:
      return He(t, 3664, 3673, !0, n);
    case 46:
      return He(t, 3872, 3881, !0, n);
    default:
      return He(t, 48, 57, !0, n);
  }
}, GE = (function(t) {
  t[t.BEFORE = 0] = "BEFORE", t[t.AFTER = 1] = "AFTER";
}(Ew = Ew || {}), function() {
  function t() {
  }
  return t.getOrigin = function(A) {
    var e = t._link;
    return e ? (e.href = A, e.href = e.href, e.protocol + e.hostname + e.port) : "about:blank";
  }, t.isSameOrigin = function(A) {
    return t.getOrigin(A) === t._origin;
  }, t.setContext = function(A) {
    t._link = A.document.createElement("a"), t._origin = t.getOrigin(A.location.href);
  }, t._origin = "about:blank", t;
}()), tA = function() {
  function t(A, e) {
    this.type = 0, this.x = A, this.y = e;
  }
  return t.prototype.add = function(A, e) {
    return new t(this.x + A, this.y + e);
  }, t;
}(), ia = function(t, A, e) {
  return new tA(t.x + (A.x - t.x) * e, t.y + (A.y - t.y) * e);
}, BB = function() {
  function t(A, e, n, i) {
    this.type = 1, this.start = A, this.startControl = e, this.endControl = n, this.end = i;
  }
  return t.prototype.subdivide = function(l, e) {
    var n = ia(this.start, this.startControl, l), s = ia(this.startControl, this.endControl, l), i = ia(this.endControl, this.end, l), d = ia(n, s, l), s = ia(s, i, l), l = ia(d, s, l);
    return e ? new t(this.start, n, d, l) : new t(l, s, i, this.end);
  }, t.prototype.add = function(A, e) {
    return new t(this.start.add(A, e), this.startControl.add(A, e), this.endControl.add(A, e), this.end.add(A, e));
  }, t.prototype.reverse = function() {
    return new t(this.end, this.endControl, this.startControl, this.start);
  }, t;
}(), Dn = function(t) {
  return t.type === 1;
}, VE = function(t) {
  var J = t.styles, A = t.bounds, e = (n = us(J.borderTopLeftRadius, A.width, A.height))[0], n = n[1], i = (d = us(J.borderTopRightRadius, A.width, A.height))[0], d = d[1], s = (l = us(J.borderBottomRightRadius, A.width, A.height))[0], l = l[1], w = (h = us(J.borderBottomLeftRadius, A.width, A.height))[0], h = h[1];
  (g = []).push((e + i) / A.width), g.push((w + s) / A.width), g.push((n + h) / A.height), g.push((d + l) / A.height), 1 < (g = Math.max.apply(Math, g)) && (e /= g, n /= g, i /= g, d /= g, s /= g, l /= g, w /= g, h /= g);
  var g = A.width - i, p = A.height - l, K = A.width - s, _ = A.height - h, S = J.borderTopWidth, v = J.borderRightWidth, M = J.borderBottomWidth, k = J.borderLeftWidth, X = ae(J.paddingTop, t.bounds.width), iA = ae(J.paddingRight, t.bounds.width), z = ae(J.paddingBottom, t.bounds.width), J = ae(J.paddingLeft, t.bounds.width);
  this.topLeftBorderDoubleOuterBox = 0 < e || 0 < n ? le(A.left + k / 3, A.top + S / 3, e - k / 3, n - S / 3, jA.TOP_LEFT) : new tA(A.left + k / 3, A.top + S / 3), this.topRightBorderDoubleOuterBox = 0 < e || 0 < n ? le(A.left + g, A.top + S / 3, i - v / 3, d - S / 3, jA.TOP_RIGHT) : new tA(A.left + A.width - v / 3, A.top + S / 3), this.bottomRightBorderDoubleOuterBox = 0 < s || 0 < l ? le(A.left + K, A.top + p, s - v / 3, l - M / 3, jA.BOTTOM_RIGHT) : new tA(A.left + A.width - v / 3, A.top + A.height - M / 3), this.bottomLeftBorderDoubleOuterBox = 0 < w || 0 < h ? le(A.left + k / 3, A.top + _, w - k / 3, h - M / 3, jA.BOTTOM_LEFT) : new tA(A.left + k / 3, A.top + A.height - M / 3), this.topLeftBorderDoubleInnerBox = 0 < e || 0 < n ? le(A.left + 2 * k / 3, A.top + 2 * S / 3, e - 2 * k / 3, n - 2 * S / 3, jA.TOP_LEFT) : new tA(A.left + 2 * k / 3, A.top + 2 * S / 3), this.topRightBorderDoubleInnerBox = 0 < e || 0 < n ? le(A.left + g, A.top + 2 * S / 3, i - 2 * v / 3, d - 2 * S / 3, jA.TOP_RIGHT) : new tA(A.left + A.width - 2 * v / 3, A.top + 2 * S / 3), this.bottomRightBorderDoubleInnerBox = 0 < s || 0 < l ? le(A.left + K, A.top + p, s - 2 * v / 3, l - 2 * M / 3, jA.BOTTOM_RIGHT) : new tA(A.left + A.width - 2 * v / 3, A.top + A.height - 2 * M / 3), this.bottomLeftBorderDoubleInnerBox = 0 < w || 0 < h ? le(A.left + 2 * k / 3, A.top + _, w - 2 * k / 3, h - 2 * M / 3, jA.BOTTOM_LEFT) : new tA(A.left + 2 * k / 3, A.top + A.height - 2 * M / 3), this.topLeftBorderStroke = 0 < e || 0 < n ? le(A.left + k / 2, A.top + S / 2, e - k / 2, n - S / 2, jA.TOP_LEFT) : new tA(A.left + k / 2, A.top + S / 2), this.topRightBorderStroke = 0 < e || 0 < n ? le(A.left + g, A.top + S / 2, i - v / 2, d - S / 2, jA.TOP_RIGHT) : new tA(A.left + A.width - v / 2, A.top + S / 2), this.bottomRightBorderStroke = 0 < s || 0 < l ? le(A.left + K, A.top + p, s - v / 2, l - M / 2, jA.BOTTOM_RIGHT) : new tA(A.left + A.width - v / 2, A.top + A.height - M / 2), this.bottomLeftBorderStroke = 0 < w || 0 < h ? le(A.left + k / 2, A.top + _, w - k / 2, h - M / 2, jA.BOTTOM_LEFT) : new tA(A.left + k / 2, A.top + A.height - M / 2), this.topLeftBorderBox = 0 < e || 0 < n ? le(A.left, A.top, e, n, jA.TOP_LEFT) : new tA(A.left, A.top), this.topRightBorderBox = 0 < i || 0 < d ? le(A.left + g, A.top, i, d, jA.TOP_RIGHT) : new tA(A.left + A.width, A.top), this.bottomRightBorderBox = 0 < s || 0 < l ? le(A.left + K, A.top + p, s, l, jA.BOTTOM_RIGHT) : new tA(A.left + A.width, A.top + A.height), this.bottomLeftBorderBox = 0 < w || 0 < h ? le(A.left, A.top + _, w, h, jA.BOTTOM_LEFT) : new tA(A.left, A.top + A.height), this.topLeftPaddingBox = 0 < e || 0 < n ? le(A.left + k, A.top + S, Math.max(0, e - k), Math.max(0, n - S), jA.TOP_LEFT) : new tA(A.left + k, A.top + S), this.topRightPaddingBox = 0 < i || 0 < d ? le(A.left + Math.min(g, A.width - v), A.top + S, g > A.width + v ? 0 : Math.max(0, i - v), Math.max(0, d - S), jA.TOP_RIGHT) : new tA(A.left + A.width - v, A.top + S), this.bottomRightPaddingBox = 0 < s || 0 < l ? le(A.left + Math.min(K, A.width - k), A.top + Math.min(p, A.height - M), Math.max(0, s - v), Math.max(0, l - M), jA.BOTTOM_RIGHT) : new tA(A.left + A.width - v, A.top + A.height - M), this.bottomLeftPaddingBox = 0 < w || 0 < h ? le(A.left + k, A.top + Math.min(_, A.height - M), Math.max(0, w - k), Math.max(0, h - M), jA.BOTTOM_LEFT) : new tA(A.left + k, A.top + A.height - M), this.topLeftContentBox = 0 < e || 0 < n ? le(A.left + k + J, A.top + S + X, Math.max(0, e - (k + J)), Math.max(0, n - (S + X)), jA.TOP_LEFT) : new tA(A.left + k + J, A.top + S + X), this.topRightContentBox = 0 < i || 0 < d ? le(A.left + Math.min(g, A.width + k + J), A.top + S + X, g > A.width + k + J ? 0 : i - k + J, d - (S + X), jA.TOP_RIGHT) : new tA(A.left + A.width - (v + iA), A.top + S + X), this.bottomRightContentBox = 0 < s || 0 < l ? le(A.left + Math.min(K, A.width - (k + J)), A.top + Math.min(p, A.height + S + X), Math.max(0, s - (v + iA)), l - (M + z), jA.BOTTOM_RIGHT) : new tA(A.left + A.width - (v + iA), A.top + A.height - (M + z)), this.bottomLeftContentBox = 0 < w || 0 < h ? le(A.left + k + J, A.top + _, Math.max(0, w - (k + J)), h - (M + z), jA.BOTTOM_LEFT) : new tA(A.left + k + J, A.top + A.height - (M + z));
}, le = (function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 1] = "TOP_RIGHT", t[t.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", t[t.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
}(jA = jA || {}), function(t, A, e, n, i) {
  var d = (Math.sqrt(2) - 1) / 3 * 4, s = e * d, l = n * d, w = t + e, h = A + n;
  switch (i) {
    case jA.TOP_LEFT:
      return new BB(new tA(t, h), new tA(t, h - l), new tA(w - s, A), new tA(w, A));
    case jA.TOP_RIGHT:
      return new BB(new tA(t, A), new tA(t + s, A), new tA(w, h - l), new tA(w, h));
    case jA.BOTTOM_RIGHT:
      return new BB(new tA(w, A), new tA(w, A + l), new tA(t + s, h), new tA(t, h));
    default:
      return jA.BOTTOM_LEFT, new BB(new tA(w, h), new tA(w - s, h), new tA(t, A + l), new tA(t, A));
  }
}), cl = function(t) {
  return [t.topLeftBorderBox, t.topRightBorderBox, t.bottomRightBorderBox, t.bottomLeftBorderBox];
}, RE = function(t) {
  return [t.topLeftContentBox, t.topRightContentBox, t.bottomRightContentBox, t.bottomLeftContentBox];
}, Bl = function(t) {
  return [t.topLeftPaddingBox, t.topRightPaddingBox, t.bottomRightPaddingBox, t.bottomLeftPaddingBox];
}, NE = function(t, A, e) {
  this.offsetX = t, this.offsetY = A, this.matrix = e, this.type = 0, this.target = 6;
}, lB = function(t, A) {
  this.path = t, this.target = A, this.type = 1;
}, PE = function(t) {
  this.opacity = t, this.type = 2, this.target = 6;
}, JE = function(t) {
  return t.type === 0;
}, eC = function(t) {
  return t.type === 1;
}, XE = function(t) {
  return t.type === 2;
}, Vw = function(t, A) {
  return t.length === A.length && t.some(function(e, n) {
    return e === A[n];
  });
}, WE = function(t, A, e, n, i) {
  return t.map(function(d, s) {
    switch (s) {
      case 0:
        return d.add(A, e);
      case 1:
        return d.add(A + n, e);
      case 2:
        return d.add(A + n, e + i);
      case 3:
        return d.add(A, e + i);
    }
    return d;
  });
}, tC = function(t) {
  this.element = t, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
}, nC = function() {
  function t(A, e) {
    var n;
    this.container = A, this.parent = e, this.effects = [], this.curves = new VE(this.container), this.container.styles.opacity < 1 && this.effects.push(new PE(this.container.styles.opacity)), this.container.styles.transform !== null && (A = this.container.bounds.left + this.container.styles.transformOrigin[0].number, e = this.container.bounds.top + this.container.styles.transformOrigin[1].number, n = this.container.styles.transform, this.effects.push(new NE(A, e, n))), this.container.styles.overflowX !== 0 && (A = cl(this.curves), e = Bl(this.curves), Vw(A, e) ? this.effects.push(new lB(A, 6)) : (this.effects.push(new lB(A, 2)), this.effects.push(new lB(e, 4))));
  }
  return t.prototype.getEffects = function(A) {
    for (var e = [2, 3].indexOf(this.container.styles.position) === -1, n = this.parent, i = this.effects.slice(0); n; ) {
      var d, s, l = n.effects.filter(function(w) {
        return !eC(w);
      });
      e || n.container.styles.position !== 0 || !n.parent ? (i.unshift.apply(i, l), e = [2, 3].indexOf(n.container.styles.position) === -1, n.container.styles.overflowX !== 0 && (d = cl(n.curves), s = Bl(n.curves), Vw(d, s) || i.unshift(new lB(s, 6)))) : i.unshift.apply(i, l), n = n.parent;
    }
    return i.filter(function(w) {
      return Pe(w.target, A);
    });
  }, t;
}(), Xg = function(t, A, e, n) {
  t.container.elements.forEach(function(i) {
    var d, s, l, w, h = Pe(i.flags, 4), g = Pe(i.flags, 2), p = new nC(i, t), K = (Pe(i.styles.display, 2048) && n.push(p), Pe(i.flags, 8) ? [] : n);
    h || g ? (g = h || i.styles.isPositioned() ? e : A, d = new tC(p), i.styles.isPositioned() || i.styles.opacity < 1 || i.styles.isTransformed() ? (s = i.styles.zIndex.order) < 0 ? (l = 0, g.negativeZIndex.some(function(_, S) {
      return s > _.element.container.styles.zIndex.order ? (l = S, !1) : 0 < l;
    }), g.negativeZIndex.splice(l, 0, d)) : 0 < s ? (w = 0, g.positiveZIndex.some(function(_, S) {
      return s >= _.element.container.styles.zIndex.order ? (w = S + 1, !1) : 0 < w;
    }), g.positiveZIndex.splice(w, 0, d)) : g.zeroOrAutoZIndexOrTransformedOrOpacity.push(d) : (i.styles.isFloating() ? g.nonPositionedFloats : g.nonPositionedInlineLevel).push(d), Xg(p, d, h ? d : e, K)) : ((i.styles.isInlineLevel() ? A.inlineLevel : A.nonInlineLevel).push(p), Xg(p, A, e, K)), Pe(i.flags, 8) && rC(i, K);
  });
}, rC = function(t, A) {
  for (var e = t instanceof Pg ? t.start : 1, n = t instanceof Pg && t.reversed, i = 0; i < A.length; i++) {
    var d = A[i];
    d.container instanceof Jh && typeof d.container.value == "number" && d.container.value !== 0 && (e = d.container.value), d.listValue = C0(e, d.container.styles.listStyleType, !0), e += n ? -1 : 1;
  }
}, YE = function(A) {
  var A = new nC(A, null), e = new tC(A), n = [];
  return Xg(A, e, e, n), rC(A.container, n), e;
}, Rw = function(t, A) {
  switch (A) {
    case 0:
      return In(t.topLeftBorderBox, t.topLeftPaddingBox, t.topRightBorderBox, t.topRightPaddingBox);
    case 1:
      return In(t.topRightBorderBox, t.topRightPaddingBox, t.bottomRightBorderBox, t.bottomRightPaddingBox);
    case 2:
      return In(t.bottomRightBorderBox, t.bottomRightPaddingBox, t.bottomLeftBorderBox, t.bottomLeftPaddingBox);
    default:
      return In(t.bottomLeftBorderBox, t.bottomLeftPaddingBox, t.topLeftBorderBox, t.topLeftPaddingBox);
  }
}, ZE = function(t, A) {
  switch (A) {
    case 0:
      return In(t.topLeftBorderBox, t.topLeftBorderDoubleOuterBox, t.topRightBorderBox, t.topRightBorderDoubleOuterBox);
    case 1:
      return In(t.topRightBorderBox, t.topRightBorderDoubleOuterBox, t.bottomRightBorderBox, t.bottomRightBorderDoubleOuterBox);
    case 2:
      return In(t.bottomRightBorderBox, t.bottomRightBorderDoubleOuterBox, t.bottomLeftBorderBox, t.bottomLeftBorderDoubleOuterBox);
    default:
      return In(t.bottomLeftBorderBox, t.bottomLeftBorderDoubleOuterBox, t.topLeftBorderBox, t.topLeftBorderDoubleOuterBox);
  }
}, jE = function(t, A) {
  switch (A) {
    case 0:
      return In(t.topLeftBorderDoubleInnerBox, t.topLeftPaddingBox, t.topRightBorderDoubleInnerBox, t.topRightPaddingBox);
    case 1:
      return In(t.topRightBorderDoubleInnerBox, t.topRightPaddingBox, t.bottomRightBorderDoubleInnerBox, t.bottomRightPaddingBox);
    case 2:
      return In(t.bottomRightBorderDoubleInnerBox, t.bottomRightPaddingBox, t.bottomLeftBorderDoubleInnerBox, t.bottomLeftPaddingBox);
    default:
      return In(t.bottomLeftBorderDoubleInnerBox, t.bottomLeftPaddingBox, t.topLeftBorderDoubleInnerBox, t.topLeftPaddingBox);
  }
}, qE = function(t, A) {
  switch (A) {
    case 0:
      return fB(t.topLeftBorderStroke, t.topRightBorderStroke);
    case 1:
      return fB(t.topRightBorderStroke, t.bottomRightBorderStroke);
    case 2:
      return fB(t.bottomRightBorderStroke, t.bottomLeftBorderStroke);
    default:
      return fB(t.bottomLeftBorderStroke, t.topLeftBorderStroke);
  }
}, fB = function(t, A) {
  var e = [];
  return Dn(t) ? e.push(t.subdivide(0.5, !1)) : e.push(t), Dn(A) ? e.push(A.subdivide(0.5, !0)) : e.push(A), e;
}, In = function(t, A, e, n) {
  var i = [];
  return Dn(t) ? i.push(t.subdivide(0.5, !1)) : i.push(t), Dn(e) ? i.push(e.subdivide(0.5, !0)) : i.push(e), Dn(n) ? i.push(n.subdivide(0.5, !0).reverse()) : i.push(n), Dn(A) ? i.push(A.subdivide(0.5, !1).reverse()) : i.push(A), i;
}, uC = function(e) {
  var A = e.bounds, e = e.styles;
  return A.add(e.borderLeftWidth, e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth), -(e.borderTopWidth + e.borderBottomWidth));
}, ll = function(e) {
  var A = e.styles, e = e.bounds, n = ae(A.paddingLeft, e.width), i = ae(A.paddingRight, e.width), d = ae(A.paddingTop, e.width), s = ae(A.paddingBottom, e.width);
  return e.add(n + A.borderLeftWidth, d + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + n + i), -(A.borderTopWidth + A.borderBottomWidth + d + s));
}, zE = function(t, A) {
  return t === 0 ? A.bounds : (t === 2 ? ll : uC)(A);
}, $E = function(t, A) {
  return t === 0 ? A.bounds : (t === 2 ? ll : uC)(A);
}, ng = function(t, A, d) {
  var n = zE(Qa(t.styles.backgroundOrigin, A), t), i = $E(Qa(t.styles.backgroundClip, A), t), d = AD(Qa(t.styles.backgroundSize, A), d, n), s = d[0], l = d[1], w = us(Qa(t.styles.backgroundPosition, A), n.width - s, n.height - l);
  return [eD(Qa(t.styles.backgroundRepeat, A), w, d, n, i), Math.round(n.left + w[0]), Math.round(n.top + w[1]), s, l];
}, aa = function(t) {
  return Ue(t) && t.value === Da.AUTO;
}, gB = function(t) {
  return typeof t == "number";
}, AD = function(l, d, e) {
  var n = d[0], i = d[1], d = d[2], s = l[0], l = l[1];
  if (!s)
    return [0, 0];
  if (ke(s) && l && ke(l))
    return [ae(s, e.width), ae(l, e.height)];
  var w = gB(d);
  if (Ue(s) && (s.value === Da.CONTAIN || s.value === Da.COVER))
    return gB(d) ? e.width / e.height < d != (s.value === Da.COVER) ? [e.width, e.width / d] : [e.height * d, e.height] : [e.width, e.height];
  var h = gB(n), g = gB(i), p = h || g;
  if (aa(s) && (!l || aa(l)))
    return h && g ? [n, i] : w || p ? p && w ? [h ? n : i * d, g ? i : n / d] : [h ? n : e.width, g ? i : e.height] : [e.width, e.height];
  if (w)
    return w = p = 0, ke(s) ? p = ae(s, e.width) : ke(l) && (w = ae(l, e.height)), aa(s) ? p = w * d : l && !aa(l) || (w = p / d), [p, w];
  if (d = null, p = null, ke(s) ? d = ae(s, e.width) : l && ke(l) && (p = ae(l, e.height)), (d = (p = d === null || l && !aa(l) ? p : h && g ? d / n * i : e.height) !== null && aa(s) ? h && g ? p / i * n : e.width : d) !== null && p !== null)
    return [d, p];
  throw new Error("Unable to calculate background-size for element");
}, Qa = function(t, A) {
  return A = t[A], "u" < typeof A ? t[0] : A;
}, eD = function(t, A, e, n, i) {
  var d = A[0], s = A[1], l = e[0], w = e[1];
  switch (t) {
    case 2:
      return [new tA(Math.round(n.left), Math.round(n.top + s)), new tA(Math.round(n.left + n.width), Math.round(n.top + s)), new tA(Math.round(n.left + n.width), Math.round(w + n.top + s)), new tA(Math.round(n.left), Math.round(w + n.top + s))];
    case 3:
      return [new tA(Math.round(n.left + d), Math.round(n.top)), new tA(Math.round(n.left + d + l), Math.round(n.top)), new tA(Math.round(n.left + d + l), Math.round(n.height + n.top)), new tA(Math.round(n.left + d), Math.round(n.height + n.top))];
    case 1:
      return [new tA(Math.round(n.left + d), Math.round(n.top + s)), new tA(Math.round(n.left + d + l), Math.round(n.top + s)), new tA(Math.round(n.left + d + l), Math.round(n.top + s + w)), new tA(Math.round(n.left + d), Math.round(n.top + s + w))];
    default:
      return [new tA(Math.round(i.left), Math.round(i.top)), new tA(Math.round(i.left + i.width), Math.round(i.top)), new tA(Math.round(i.left + i.width), Math.round(i.height + i.top)), new tA(Math.round(i.left), Math.round(i.height + i.top))];
  }
}, tD = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Nw = "Hidden Text", nD = function() {
  function t(A) {
    this._data = {}, this._document = A;
  }
  return t.prototype.parseMetrics = function(l, w) {
    var n = this._document.createElement("div"), i = this._document.createElement("img"), d = this._document.createElement("span"), s = this._document.body, l = (n.style.visibility = "hidden", n.style.fontFamily = l, n.style.fontSize = w, n.style.margin = "0", n.style.padding = "0", n.style.whiteSpace = "nowrap", s.appendChild(n), i.src = tD, i.width = 1, i.height = 1, i.style.margin = "0", i.style.padding = "0", i.style.verticalAlign = "baseline", d.style.fontFamily = l, d.style.fontSize = w, d.style.margin = "0", d.style.padding = "0", d.appendChild(this._document.createTextNode(Nw)), n.appendChild(d), n.appendChild(i), i.offsetTop - d.offsetTop + 2), w = (n.removeChild(d), n.appendChild(this._document.createTextNode(Nw)), n.style.lineHeight = "normal", i.style.verticalAlign = "super", i.offsetTop - n.offsetTop + 2);
    return s.removeChild(n), { baseline: l, middle: w };
  }, t.prototype.getMetrics = function(A, e) {
    var n = A + " " + e;
    return "u" < typeof this._data[n] && (this._data[n] = this.parseMetrics(A, e)), this._data[n];
  }, t;
}(), oC = function(t, A) {
  this.context = t, this.options = A;
}, rD = 1e4, uD = (function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e._activeEffects = [], e.canvas = n.canvas || document.createElement("canvas"), e.ctx = e.canvas.getContext("2d"), n.canvas || (e.canvas.width = Math.floor(n.width * n.scale), e.canvas.height = Math.floor(n.height * n.scale), e.canvas.style.width = n.width + "px", e.canvas.style.height = n.height + "px"), e.fontMetrics = new nD(document), e.ctx.scale(e.options.scale, e.options.scale), e.ctx.translate(-n.x, -n.y), e.ctx.textBaseline = "bottom", e._activeEffects = [], e.context.logger.debug("Canvas renderer initialized (" + n.width + "x" + n.height + ") with scale " + n.scale), e;
  }
  Yn(A, t), A.prototype.applyEffects = function(e) {
    for (var n = this; this._activeEffects.length; )
      this.popEffect();
    e.forEach(function(i) {
      return n.applyEffect(i);
    });
  }, A.prototype.applyEffect = function(e) {
    this.ctx.save(), XE(e) && (this.ctx.globalAlpha = e.opacity), JE(e) && (this.ctx.translate(e.offsetX, e.offsetY), this.ctx.transform(e.matrix[0], e.matrix[1], e.matrix[2], e.matrix[3], e.matrix[4], e.matrix[5]), this.ctx.translate(-e.offsetX, -e.offsetY)), eC(e) && (this.path(e.path), this.ctx.clip()), this._activeEffects.push(e);
  }, A.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, A.prototype.renderStack = function(e) {
    return mn(this, void 0, void 0, function() {
      return An(this, function(n) {
        switch (n.label) {
          case 0:
            return e.element.container.styles.isVisible() ? [4, this.renderStackContent(e)] : [3, 2];
          case 1:
            n.sent(), n.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, A.prototype.renderNode = function(e) {
    return mn(this, void 0, void 0, function() {
      return An(this, function(n) {
        switch (n.label) {
          case 0:
            return Pe(e.container.flags, 16), e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
          case 1:
            return n.sent(), [4, this.renderNodeContent(e)];
          case 2:
            n.sent(), n.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, A.prototype.renderTextWithLetterSpacing = function(e, n, i) {
    var d = this;
    n === 0 ? this.ctx.fillText(e.text, e.bounds.left, e.bounds.top + i) : h0(e.text).reduce(function(s, l) {
      return d.ctx.fillText(l, s, e.bounds.top + i), s + d.ctx.measureText(l).width;
    }, e.bounds.left);
  }, A.prototype.createFontStyle = function(e) {
    var n = e.fontVariant.filter(function(s) {
      return s === "normal" || s === "small-caps";
    }).join(""), i = dD(e.fontFamily).join(", "), d = hs(e.fontSize) ? "" + e.fontSize.number + e.fontSize.unit : e.fontSize.number + "px";
    return [[e.fontStyle, n, e.fontWeight, d, i].join(" "), i, d];
  }, A.prototype.renderTextNode = function(e, n) {
    return mn(this, void 0, void 0, function() {
      var i, d, s, l, w, h, g = this;
      return An(this, function(p) {
        return d = this.createFontStyle(n), s = d[0], i = d[1], d = d[2], this.ctx.font = s, this.ctx.direction = n.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(i, d), l = s.baseline, w = s.middle, h = n.paintOrder, e.textBounds.forEach(function(K) {
          h.forEach(function(_) {
            switch (_) {
              case 0:
                g.ctx.fillStyle = Ze(n.color), g.renderTextWithLetterSpacing(K, n.letterSpacing, l);
                var S = n.textShadow;
                S.length && K.text.trim().length && (S.slice(0).reverse().forEach(function(v) {
                  g.ctx.shadowColor = Ze(v.color), g.ctx.shadowOffsetX = v.offsetX.number * g.options.scale, g.ctx.shadowOffsetY = v.offsetY.number * g.options.scale, g.ctx.shadowBlur = v.blur.number, g.renderTextWithLetterSpacing(K, n.letterSpacing, l);
                }), g.ctx.shadowColor = "", g.ctx.shadowOffsetX = 0, g.ctx.shadowOffsetY = 0, g.ctx.shadowBlur = 0), n.textDecorationLine.length && (g.ctx.fillStyle = Ze(n.textDecorationColor || n.color), n.textDecorationLine.forEach(function(v) {
                  switch (v) {
                    case 1:
                      g.ctx.fillRect(K.bounds.left, Math.round(K.bounds.top + l), K.bounds.width, 1);
                      break;
                    case 2:
                      g.ctx.fillRect(K.bounds.left, Math.round(K.bounds.top), K.bounds.width, 1);
                      break;
                    case 3:
                      g.ctx.fillRect(K.bounds.left, Math.ceil(K.bounds.top + w), K.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                n.webkitTextStrokeWidth && K.text.trim().length && (g.ctx.strokeStyle = Ze(n.webkitTextStrokeColor), g.ctx.lineWidth = n.webkitTextStrokeWidth, g.ctx.lineJoin = window.chrome ? "miter" : "round", g.ctx.strokeText(K.text, K.bounds.left, K.bounds.top + l)), g.ctx.strokeStyle = "", g.ctx.lineWidth = 0, g.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, A.prototype.renderReplacedElement = function(e, n, i) {
    var d;
    i && 0 < e.intrinsicWidth && 0 < e.intrinsicHeight && (d = ll(e), n = Bl(n), this.path(n), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(i, 0, 0, e.intrinsicWidth, e.intrinsicHeight, d.left, d.top, d.width, d.height), this.ctx.restore());
  }, A.prototype.renderNodeContent = function(e) {
    return mn(this, void 0, void 0, function() {
      var n, i, d, s, l, w, h, g, p, K, _, S, v;
      return An(this, function(M) {
        switch (M.label) {
          case 0:
            this.applyEffects(e.getEffects(4)), n = e.container, i = e.curves, d = n.styles, s = 0, l = n.textNodes, M.label = 1;
          case 1:
            return s < l.length ? (w = l[s], [4, this.renderTextNode(w, d)]) : [3, 4];
          case 2:
            M.sent(), M.label = 3;
          case 3:
            return s++, [3, 1];
          case 4:
            if (!(n instanceof Rh))
              return [3, 8];
            M.label = 5;
          case 5:
            return M.trys.push([5, 7, , 8]), [4, this.context.cache.match(n.src)];
          case 6:
            return K = M.sent(), this.renderReplacedElement(n, i, K), [3, 8];
          case 7:
            return M.sent(), this.context.logger.error("Error loading image " + n.src), [3, 8];
          case 8:
            if (n instanceof Nh && this.renderReplacedElement(n, i, n.canvas), !(n instanceof Ph))
              return [3, 12];
            M.label = 9;
          case 9:
            return M.trys.push([9, 11, , 12]), [4, this.context.cache.match(n.svg)];
          case 10:
            return K = M.sent(), this.renderReplacedElement(n, i, K), [3, 12];
          case 11:
            return M.sent(), this.context.logger.error("Error loading svg " + n.svg.substring(0, 255)), [3, 12];
          case 12:
            return n instanceof Yh && n.tree ? [4, new A(this.context, { scale: this.options.scale, backgroundColor: n.backgroundColor, x: 0, y: 0, width: n.width, height: n.height }).render(n.tree)] : [3, 14];
          case 13:
            w = M.sent(), n.width && n.height && this.ctx.drawImage(w, 0, 0, n.width, n.height, n.bounds.left, n.bounds.top, n.bounds.width, n.bounds.height), M.label = 14;
          case 14:
            if (n instanceof Jg && (h = Math.min(n.bounds.width, n.bounds.height), n.type === dl ? n.checked && (this.ctx.save(), this.path([new tA(n.bounds.left + 0.39363 * h, n.bounds.top + 0.79 * h), new tA(n.bounds.left + 0.16 * h, n.bounds.top + 0.5549 * h), new tA(n.bounds.left + 0.27347 * h, n.bounds.top + 0.44071 * h), new tA(n.bounds.left + 0.39694 * h, n.bounds.top + 0.5649 * h), new tA(n.bounds.left + 0.72983 * h, n.bounds.top + 0.23 * h), new tA(n.bounds.left + 0.84 * h, n.bounds.top + 0.34085 * h), new tA(n.bounds.left + 0.39363 * h, n.bounds.top + 0.79 * h)]), this.ctx.fillStyle = Ze(Sw), this.ctx.fill(), this.ctx.restore()) : n.type === sl && n.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(n.bounds.left + h / 2, n.bounds.top + h / 2, h / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = Ze(Sw), this.ctx.fill(), this.ctx.restore())), uD(n) && n.value.length) {
              switch (h = this.createFontStyle(d), S = h[0], _ = h[1], _ = this.fontMetrics.getMetrics(S, _).baseline, this.ctx.font = S, this.ctx.fillStyle = Ze(d.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = iD(n.styles.textAlign), v = ll(n), g = 0, n.styles.textAlign) {
                case 1:
                  g += v.width / 2;
                  break;
                case 2:
                  g += v.width;
              }
              p = v.add(g, 0, 0, -v.height / 2 + 1), this.ctx.save(), this.path([new tA(v.left, v.top), new tA(v.left + v.width, v.top), new tA(v.left + v.width, v.top + v.height), new tA(v.left, v.top + v.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Cs(n.value, p), d.letterSpacing, _), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
            }
            if (!Pe(n.styles.display, 2048))
              return [3, 20];
            if (n.styles.listStyleImage === null)
              return [3, 19];
            if ((p = n.styles.listStyleImage).type !== 0)
              return [3, 18];
            K = void 0, _ = p.url, M.label = 15;
          case 15:
            return M.trys.push([15, 17, , 18]), [4, this.context.cache.match(_)];
          case 16:
            return K = M.sent(), this.ctx.drawImage(K, n.bounds.left - (K.width + 10), n.bounds.top), [3, 18];
          case 17:
            return M.sent(), this.context.logger.error("Error loading list-style-image " + _), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            e.listValue && n.styles.listStyleType !== -1 && (S = this.createFontStyle(d)[0], this.ctx.font = S, this.ctx.fillStyle = Ze(d.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", v = new Wo(n.bounds.left, n.bounds.top + ae(n.styles.paddingTop, n.bounds.width), n.bounds.width, gw(d.lineHeight, d.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Cs(e.listValue, v), d.letterSpacing, gw(d.lineHeight, d.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), M.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, A.prototype.renderStackContent = function(e) {
    return mn(this, void 0, void 0, function() {
      var n, i, d, s, l, w, h, g, p, K, _, S, v, M, k;
      return An(this, function(X) {
        switch (X.label) {
          case 0:
            return Pe(e.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(e.element)];
          case 1:
            X.sent(), n = 0, i = e.negativeZIndex, X.label = 2;
          case 2:
            return n < i.length ? (k = i[n], [4, this.renderStack(k)]) : [3, 5];
          case 3:
            X.sent(), X.label = 4;
          case 4:
            return n++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(e.element)];
          case 6:
            X.sent(), d = 0, s = e.nonInlineLevel, X.label = 7;
          case 7:
            return d < s.length ? (k = s[d], [4, this.renderNode(k)]) : [3, 10];
          case 8:
            X.sent(), X.label = 9;
          case 9:
            return d++, [3, 7];
          case 10:
            l = 0, w = e.nonPositionedFloats, X.label = 11;
          case 11:
            return l < w.length ? (k = w[l], [4, this.renderStack(k)]) : [3, 14];
          case 12:
            X.sent(), X.label = 13;
          case 13:
            return l++, [3, 11];
          case 14:
            h = 0, g = e.nonPositionedInlineLevel, X.label = 15;
          case 15:
            return h < g.length ? (k = g[h], [4, this.renderStack(k)]) : [3, 18];
          case 16:
            X.sent(), X.label = 17;
          case 17:
            return h++, [3, 15];
          case 18:
            p = 0, K = e.inlineLevel, X.label = 19;
          case 19:
            return p < K.length ? (k = K[p], [4, this.renderNode(k)]) : [3, 22];
          case 20:
            X.sent(), X.label = 21;
          case 21:
            return p++, [3, 19];
          case 22:
            _ = 0, S = e.zeroOrAutoZIndexOrTransformedOrOpacity, X.label = 23;
          case 23:
            return _ < S.length ? (k = S[_], [4, this.renderStack(k)]) : [3, 26];
          case 24:
            X.sent(), X.label = 25;
          case 25:
            return _++, [3, 23];
          case 26:
            v = 0, M = e.positiveZIndex, X.label = 27;
          case 27:
            return v < M.length ? (k = M[v], [4, this.renderStack(k)]) : [3, 30];
          case 28:
            X.sent(), X.label = 29;
          case 29:
            return v++, [3, 27];
          case 30:
            return [2];
        }
      });
    });
  }, A.prototype.mask = function(e) {
    this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(e.slice(0).reverse()), this.ctx.closePath();
  }, A.prototype.path = function(e) {
    this.ctx.beginPath(), this.formatPath(e), this.ctx.closePath();
  }, A.prototype.formatPath = function(e) {
    var n = this;
    e.forEach(function(i, d) {
      var s = Dn(i) ? i.start : i;
      d === 0 ? n.ctx.moveTo(s.x, s.y) : n.ctx.lineTo(s.x, s.y), Dn(i) && n.ctx.bezierCurveTo(i.startControl.x, i.startControl.y, i.endControl.x, i.endControl.y, i.end.x, i.end.y);
    });
  }, A.prototype.renderRepeat = function(e, n, i, d) {
    this.path(e), this.ctx.fillStyle = n, this.ctx.translate(i, d), this.ctx.fill(), this.ctx.translate(-i, -d);
  }, A.prototype.resizeImage = function(e, n, i) {
    var d;
    return e.width === n && e.height === i ? e : ((d = ((d = this.canvas.ownerDocument) != null ? d : document).createElement("canvas")).width = Math.max(1, n), d.height = Math.max(1, i), d.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, n, i), d);
  }, A.prototype.renderBackgroundImage = function(e) {
    return mn(this, void 0, void 0, function() {
      var n, i, d, s, l, w;
      return An(this, function(h) {
        switch (h.label) {
          case 0:
            n = e.styles.backgroundImage.length - 1, i = function(g) {
              var p, K, _, S, v, M, k, X, iA, z, J, lA, $, vA, IA, YA, Fe, ne, $A, ge, ve;
              return An(this, function(ZA) {
                switch (ZA.label) {
                  case 0:
                    if (g.type !== 0)
                      return [3, 5];
                    p = void 0, K = g.url, ZA.label = 1;
                  case 1:
                    return ZA.trys.push([1, 3, , 4]), [4, d.context.cache.match(K)];
                  case 2:
                    return p = ZA.sent(), [3, 4];
                  case 3:
                    return ZA.sent(), d.context.logger.error("Error loading background-image " + K), [3, 4];
                  case 4:
                    return p && (z = ng(e, n, [p.width, p.height, p.width / p.height]), M = z[0], lA = z[1], $ = z[2], iA = z[3], z = z[4], S = d.ctx.createPattern(d.resizeImage(p, iA, z), "repeat"), d.renderRepeat(M, S, lA, $)), [3, 6];
                  case 5:
                    a4(g) ? (J = ng(e, n, [null, null, null]), M = J[0], lA = J[1], $ = J[2], iA = J[3], z = J[4], J = n4(g.angle, iA, z), vA = J[0], v = J[1], X = J[2], k = J[3], J = J[4], (YA = document.createElement("canvas")).width = iA, YA.height = z, IA = YA.getContext("2d"), _ = IA.createLinearGradient(v, k, X, J), lw(g.stops, vA).forEach(function(Be) {
                      return _.addColorStop(Be.stop, Ze(Be.color));
                    }), IA.fillStyle = _, IA.fillRect(0, 0, iA, z), 0 < iA && 0 < z && (S = d.ctx.createPattern(YA, "repeat"), d.renderRepeat(M, S, lA, $))) : d4(g) && (v = ng(e, n, [null, null, null]), M = v[0], k = v[1], X = v[2], iA = v[3], z = v[4], J = g.position.length === 0 ? [Q0] : g.position, lA = ae(J[0], iA), $ = ae(J[J.length - 1], z), vA = r4(g, lA, $, iA, z), IA = vA[0], YA = vA[1], 0 < IA) && 0 < YA && (Fe = d.ctx.createRadialGradient(k + lA, X + $, 0, k + lA, X + $, IA), lw(g.stops, 2 * IA).forEach(function(Be) {
                      return Fe.addColorStop(Be.stop, Ze(Be.color));
                    }), d.path(M), d.ctx.fillStyle = Fe, IA !== YA ? (ne = e.bounds.left + 0.5 * e.bounds.width, $A = e.bounds.top + 0.5 * e.bounds.height, ve = 1 / (ge = YA / IA), d.ctx.save(), d.ctx.translate(ne, $A), d.ctx.transform(1, 0, 0, ge, 0, 0), d.ctx.translate(-ne, -$A), d.ctx.fillRect(k, ve * (X - $A) + $A, iA, z * ve), d.ctx.restore()) : d.ctx.fill()), ZA.label = 6;
                  case 6:
                    return n--, [2];
                }
              });
            }, d = this, s = 0, l = e.styles.backgroundImage.slice(0).reverse(), h.label = 1;
          case 1:
            return s < l.length ? (w = l[s], [5, i(w)]) : [3, 4];
          case 2:
            h.sent(), h.label = 3;
          case 3:
            return s++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, A.prototype.renderSolidBorder = function(e, n, i) {
    return mn(this, void 0, void 0, function() {
      return An(this, function(d) {
        return this.path(Rw(i, n)), this.ctx.fillStyle = Ze(e), this.ctx.fill(), [2];
      });
    });
  }, A.prototype.renderDoubleBorder = function(e, n, i, d) {
    return mn(this, void 0, void 0, function() {
      var s;
      return An(this, function(l) {
        switch (l.label) {
          case 0:
            return n < 3 ? [4, this.renderSolidBorder(e, i, d)] : [3, 2];
          case 1:
            return l.sent(), [2];
          case 2:
            return s = ZE(d, i), this.path(s), this.ctx.fillStyle = Ze(e), this.ctx.fill(), s = jE(d, i), this.path(s), this.ctx.fill(), [2];
        }
      });
    });
  }, A.prototype.renderNodeBackgroundAndBorders = function(e) {
    return mn(this, void 0, void 0, function() {
      var n, i, d, s, l, w, h, g, p = this;
      return An(this, function(K) {
        switch (K.label) {
          case 0:
            return this.applyEffects(e.getEffects(2)), n = e.container.styles, i = !Ea(n.backgroundColor) || n.backgroundImage.length, d = [{ style: n.borderTopStyle, color: n.borderTopColor, width: n.borderTopWidth }, { style: n.borderRightStyle, color: n.borderRightColor, width: n.borderRightWidth }, { style: n.borderBottomStyle, color: n.borderBottomColor, width: n.borderBottomWidth }, { style: n.borderLeftStyle, color: n.borderLeftColor, width: n.borderLeftWidth }], s = oD(Qa(n.backgroundClip, 0), e.curves), i || n.boxShadow.length ? (this.ctx.save(), this.path(s), this.ctx.clip(), Ea(n.backgroundColor) || (this.ctx.fillStyle = Ze(n.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(e.container)]) : [3, 2];
          case 1:
            K.sent(), this.ctx.restore(), n.boxShadow.slice(0).reverse().forEach(function(_) {
              p.ctx.save();
              var S = cl(e.curves), v = _.inset ? 0 : rD, M = WE(S, -v + (_.inset ? 1 : -1) * _.spread.number, (_.inset ? 1 : -1) * _.spread.number, _.spread.number * (_.inset ? -2 : 2), _.spread.number * (_.inset ? -2 : 2));
              _.inset ? (p.path(S), p.ctx.clip(), p.mask(M)) : (p.mask(S), p.ctx.clip(), p.path(M)), p.ctx.shadowOffsetX = _.offsetX.number + v, p.ctx.shadowOffsetY = _.offsetY.number, p.ctx.shadowColor = Ze(_.color), p.ctx.shadowBlur = _.blur.number, p.ctx.fillStyle = _.inset ? Ze(_.color) : "rgba(0,0,0,1)", p.ctx.fill(), p.ctx.restore();
            }), K.label = 2;
          case 2:
            w = l = 0, h = d, K.label = 3;
          case 3:
            return w < h.length ? (g = h[w]).style !== 0 && !Ea(g.color) && 0 < g.width ? g.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(g.color, g.width, l, e.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return K.sent(), [3, 11];
          case 5:
            return g.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(g.color, g.width, l, e.curves, 3)];
          case 6:
            return K.sent(), [3, 11];
          case 7:
            return g.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(g.color, g.width, l, e.curves)];
          case 8:
            return K.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(g.color, l, e.curves)];
          case 10:
            K.sent(), K.label = 11;
          case 11:
            l++, K.label = 12;
          case 12:
            return w++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, A.prototype.renderDashedDottedBorder = function(e, n, i, d, s) {
    return mn(this, void 0, void 0, function() {
      var l, w, h, g, p, K, _, S, v, M, k;
      return An(this, function(X) {
        return this.ctx.save(), p = qE(d, i), l = Rw(d, i), s === 2 && (this.path(l), this.ctx.clip()), v = (Dn(l[0]) ? (w = l[0].start.x, l[0].start) : (w = l[0].x, l[0])).y, g = (Dn(l[1]) ? (h = l[1].end.x, l[1].end) : (h = l[1].x, l[1])).y, v = Math.abs(i === 0 || i === 2 ? w - h : v - g), this.ctx.beginPath(), s === 3 ? this.formatPath(p) : this.formatPath(l.slice(0, 2)), g = n < 3 ? 3 * n : 2 * n, p = n < 3 ? 2 * n : n, s === 3 && (p = g = n), K = !0, v <= 2 * g ? K = !1 : v <= 2 * g + p ? (g *= _ = v / (2 * g + p), p *= _) : (_ = Math.floor((v + p) / (g + p)), S = (v - _ * g) / (_ - 1), p = (v = (v - (_ + 1) * g) / _) <= 0 || Math.abs(p - S) < Math.abs(p - v) ? S : v), K && (s === 3 ? this.ctx.setLineDash([0, g + p]) : this.ctx.setLineDash([g, p])), s === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = n) : this.ctx.lineWidth = 2 * n + 1.1, this.ctx.strokeStyle = Ze(e), this.ctx.stroke(), this.ctx.setLineDash([]), s === 2 && (Dn(l[0]) && (M = l[3], k = l[0], this.ctx.beginPath(), this.formatPath([new tA(M.end.x, M.end.y), new tA(k.start.x, k.start.y)]), this.ctx.stroke()), Dn(l[1])) && (M = l[1], k = l[2], this.ctx.beginPath(), this.formatPath([new tA(M.end.x, M.end.y), new tA(k.start.x, k.start.y)]), this.ctx.stroke()), this.ctx.restore(), [2];
      });
    });
  }, A.prototype.render = function(e) {
    return mn(this, void 0, void 0, function() {
      var n;
      return An(this, function(i) {
        switch (i.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = Ze(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), n = YE(e), [4, this.renderStack(n)];
          case 1:
            return i.sent(), this.applyEffects([]), [2, this.canvas];
        }
      });
    });
  };
}(oC), function(t) {
  return t instanceof Wh || t instanceof Xh || t instanceof Jg && t.type !== sl && t.type !== dl;
}), oD = function(t, A) {
  switch (t) {
    case 0:
      return cl(A);
    case 2:
      return RE(A);
    default:
      return Bl(A);
  }
}, iD = function(t) {
  switch (t) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, aD = ["-apple-system", "system-ui"], dD = function(t) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? t.filter(function(A) {
    return aD.indexOf(A) === -1;
  }) : t;
}, sD = (function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e.canvas = n.canvas || document.createElement("canvas"), e.ctx = e.canvas.getContext("2d"), e.options = n, e.canvas.width = Math.floor(n.width * n.scale), e.canvas.height = Math.floor(n.height * n.scale), e.canvas.style.width = n.width + "px", e.canvas.style.height = n.height + "px", e.ctx.scale(e.options.scale, e.options.scale), e.ctx.translate(-n.x, -n.y), e.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + n.width + "x" + n.height + " at " + n.x + "," + n.y + ") with scale " + n.scale), e;
  }
  Yn(A, t), A.prototype.render = function(e) {
    return mn(this, void 0, void 0, function() {
      var n;
      return An(this, function(i) {
        switch (i.label) {
          case 0:
            return n = Ng(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, e), [4, sD(n)];
          case 1:
            return n = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = Ze(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  };
}(oC), function(t) {
  return new Promise(function(A, e) {
    var n = new Image();
    n.onload = function() {
      A(n);
    }, n.onerror = e, n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
  });
});
function Pw() {
  var t;
  return ((t = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : t.devicePixelRatio) || 1;
}
typeof window < "u" && GE.setContext(window), Pw(), Pw();
class wB {
  static callServer(A, e, n, i) {
    return e = { type: e }, n && (e.key = n), !i && i !== 0 || (e.value = JSON.stringify(i)), this.http("POST", A ? this.pathPersistence : this.path, e, { domainName: this.domainName });
  }
  static setItem(A, e) {
    return this.callServer(!1, 1, A, e);
  }
  static async getItem(A) {
    return JSON.parse(await this.callServer(!1, 2, A));
  }
  static removeItem(A) {
    return this.callServer(!1, 3, A);
  }
  static clear() {
    return this.callServer(!1, 4);
  }
  static setItemPersistence(A, e) {
    return this.callServer(!0, 1, A, e);
  }
  static async getItemPersistence(A) {
    return JSON.parse(await this.callServer(!0, 2, A));
  }
  static removeItemPersistence(A) {
    return this.callServer(!0, 3, A);
  }
  static clearPersistence() {
    return this.callServer(!0, 4);
  }
}
Ua(wB, "domainName", ""), Ua(wB, "path", "/api/storage/manage"), Ua(wB, "pathPersistence", "/api/storage/longManage"), Ua(wB, "http", () => Promise.reject("unset redis storage http function"));
var iC = function(t, A) {
  return (iC = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e, n) {
    e.__proto__ = n;
  } : function(e, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
  }))(t, A);
};
function Zn(t, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  function e() {
    this.constructor = t;
  }
  iC(t, A), t.prototype = A === null ? Object.create(A) : (e.prototype = A.prototype, new e());
}
var aC = function() {
  return (aC = Object.assign || function(t) {
    for (var A, e = 1, n = arguments.length; e < n; e++)
      for (var i in A = arguments[e])
        Object.prototype.hasOwnProperty.call(A, i) && (t[i] = A[i]);
    return t;
  }).apply(this, arguments);
};
function yt(t, A, e, n) {
  return new (e = e || Promise)(function(i, d) {
    function s(h) {
      try {
        w(n.next(h));
      } catch (g) {
        d(g);
      }
    }
    function l(h) {
      try {
        w(n.throw(h));
      } catch (g) {
        d(g);
      }
    }
    function w(h) {
      var g;
      h.done ? i(h.value) : ((g = h.value) instanceof e ? g : new e(function(p) {
        p(g);
      })).then(s, l);
    }
    w((n = n.apply(t, A || [])).next());
  });
}
function Qt(t, A) {
  var e, n, i, d = { label: 0, sent: function() {
    if (1 & i[0])
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, s = { next: l(0), throw: l(1), return: l(2) };
  return typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function l(w) {
    return function(h) {
      var g = [w, h];
      if (e)
        throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (e = 1, n && (i = 2 & g[0] ? n.return : g[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, g[1])).done)
            return i;
          switch (n = 0, (g = i ? [2 & g[0], i.value] : g)[0]) {
            case 0:
            case 1:
              i = g;
              break;
            case 4:
              return d.label++, { value: g[1], done: !1 };
            case 5:
              d.label++, n = g[1], g = [0];
              continue;
            case 7:
              g = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (!(i = 0 < (i = d.trys).length && i[i.length - 1]) && (g[0] === 6 || g[0] === 2)) {
                d = 0;
                continue;
              }
              if (g[0] === 3 && (!i || g[1] > i[0] && g[1] < i[3]))
                d.label = g[1];
              else if (g[0] === 6 && d.label < i[1])
                d.label = i[1], i = g;
              else {
                if (!(i && d.label < i[2])) {
                  i[2] && d.ops.pop(), d.trys.pop();
                  continue;
                }
                d.label = i[2], d.ops.push(g);
              }
          }
          g = A.call(t, d);
        } catch (p) {
          g = [6, p], n = 0;
        } finally {
          e = i = 0;
        }
      if (5 & g[0])
        throw g[1];
      return { value: g[0] ? g[1] : void 0, done: !0 };
    };
  }
}
function QB(t, A, e) {
  if (e || arguments.length === 2)
    for (var n, i = 0, d = A.length; i < d; i++)
      !n && i in A || ((n = n || Array.prototype.slice.call(A, 0, i))[i] = A[i]);
  return t.concat(n || A);
}
for (var Jr = function() {
  function t(A, e, n, i) {
    this.left = A, this.top = e, this.width = n, this.height = i;
  }
  return t.prototype.add = function(A, e, n, i) {
    return new t(this.left + A, this.top + e, this.width + n, this.height + i);
  }, t.fromClientRect = function(A, e) {
    return new t(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height);
  }, t.fromDOMRectList = function(A, e) {
    return e = Array.from(e).find(function(n) {
      return n.width !== 0;
    }), e ? new t(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height) : t.EMPTY;
  }, t.EMPTY = new t(0, 0, 0, 0), t;
}(), bl = function(t, A) {
  return Jr.fromClientRect(t, A.getBoundingClientRect());
}, cD = function(n) {
  var A, e = n.body, n = n.documentElement;
  if (e && n)
    return A = Math.max(Math.max(e.scrollWidth, n.scrollWidth), Math.max(e.offsetWidth, n.offsetWidth), Math.max(e.clientWidth, n.clientWidth)), e = Math.max(Math.max(e.scrollHeight, n.scrollHeight), Math.max(e.offsetHeight, n.offsetHeight), Math.max(e.clientHeight, n.clientHeight)), new Jr(0, 0, A, e);
  throw new Error("Unable to get document size");
}, Il = function(t) {
  for (var A = [], e = 0, n = t.length; e < n; ) {
    var i, d = t.charCodeAt(e++);
    55296 <= d && d <= 56319 && e < n ? (64512 & (i = t.charCodeAt(e++))) == 56320 ? A.push(((1023 & d) << 10) + (1023 & i) + 65536) : (A.push(d), e--) : A.push(d);
  }
  return A;
}, Ie = function() {
  for (var t = [], A = 0; A < arguments.length; A++)
    t[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, t);
  var e = t.length;
  if (!e)
    return "";
  for (var n = [], i = -1, d = ""; ++i < e; ) {
    var s = t[i];
    s <= 65535 ? n.push(s) : n.push(55296 + ((s -= 65536) >> 10), s % 1024 + 56320), (i + 1 === e || 16384 < n.length) && (d += String.fromCharCode.apply(String, n), n.length = 0);
  }
  return d;
}, Jw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", BD = typeof Uint8Array > "u" ? [] : new Uint8Array(256), hB = 0; hB < Jw.length; hB++)
  BD[Jw.charCodeAt(hB)] = hB;
for (var Xw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", as = typeof Uint8Array > "u" ? [] : new Uint8Array(256), CB = 0; CB < Xw.length; CB++)
  as[Xw.charCodeAt(CB)] = CB;
for (var lD = function(t) {
  for (var A, e, n, i, l = 0.75 * t.length, d = t.length, s = 0, l = (t[t.length - 1] === "=" && (l--, t[t.length - 2] === "=") && l--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? ArrayBuffer : Array)(l)), w = Array.isArray(l) ? l : new Uint8Array(l), h = 0; h < d; h += 4)
    A = as[t.charCodeAt(h)], e = as[t.charCodeAt(h + 1)], n = as[t.charCodeAt(h + 2)], i = as[t.charCodeAt(h + 3)], w[s++] = A << 2 | e >> 4, w[s++] = (15 & e) << 4 | n >> 2, w[s++] = (3 & n) << 6 | 63 & i;
  return l;
}, fD = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 2)
    e.push(t[n + 1] << 8 | t[n]);
  return e;
}, gD = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 4)
    e.push(t[n + 3] << 24 | t[n + 2] << 16 | t[n + 1] << 8 | t[n]);
  return e;
}, To = 5, rg = 11, ug = 2, wD = rg - To, Ww = 65536 >> To, QD = 1 << To, og = QD - 1, hD = 1024 >> To, Yw = Ww + hD, JI = Yw, CD = 32, FD = Yw + CD, UD = 65536 >> rg, pD = 1 << wD, mD = pD - 1, Zw = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, ED = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, DD = function(i, A) {
  var i = lD(i), e = Array.isArray(i) ? gD(i) : new Uint32Array(i), i = Array.isArray(i) ? fD(i) : new Uint16Array(i), n = Zw(i, 12, e[4] / 2), i = e[5] === 2 ? Zw(i, (24 + e[4]) / 2) : ED(e, Math.ceil((24 + e[4]) / 4));
  return new HD(e[0], e[1], e[2], e[3], n, i);
}, HD = function() {
  function t(A, e, n, i, d, s) {
    this.initialValue = A, this.errorValue = e, this.highStart = n, this.highValueIndex = i, this.index = d, this.data = s;
  }
  return t.prototype.get = function(A) {
    var e;
    if (0 <= A) {
      if (A < 55296 || 56319 < A && A <= 65535)
        return e = this.index[A >> To], this.data[e = (e << ug) + (A & og)];
      if (A <= 65535)
        return e = this.index[Ww + (A - 55296 >> To)], this.data[e = (e << ug) + (A & og)];
      if (A < this.highStart)
        return e = this.index[e = FD - UD + (A >> rg)], e = this.index[e += A >> To & mD], this.data[e = (e << ug) + (A & og)];
      if (A <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, t;
}(), jw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", yD = typeof Uint8Array > "u" ? [] : new Uint8Array(256), FB = 0; FB < jw.length; FB++)
  yD[jw.charCodeAt(FB)] = FB;
var bD = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", qw = 50, ID = 1, dC = 2, sC = 3, vD = 4, KD = 5, zw = 7, cC = 8, $w = 9, Hu = 10, Wg = 11, AQ = 12, Yg = 13, LD = 14, ds = 15, Zg = 16, UB = 17, jd = 18, xD = 19, eQ = 20, jg = 21, qd = 22, ig = 23, da = 24, tn = 25, ss = 26, cs = 27, sa = 28, _D = 29, Fs = 30, SD = 31, pB = 32, mB = 33, qg = 34, zg = 35, $g = 36, Ks = 37, A0 = 38, Al = 39, el = 40, ag = 41, BC = 42, OD = 43, TD = [9001, 65288], lC = "!", kA = "×", EB = "÷", e0 = DD(bD), Vr = [Fs, $g], t0 = [ID, dC, sC, KD], fC = [Hu, cC], tQ = [cs, ss], MD = t0.concat(fC), nQ = [A0, Al, el, qg, zg], kD = [ds, Yg], GD = function(t, A) {
  A === void 0 && (A = "strict");
  var e = [], n = [], i = [];
  return t.forEach(function(d, s) {
    var l = e0.get(d);
    return qw < l ? (i.push(!0), l -= qw) : i.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(d) !== -1 ? (n.push(s), e.push(Zg)) : l !== vD && l !== Wg ? (n.push(s), l === SD ? e.push(A === "strict" ? jg : Ks) : l === BC || l === _D ? e.push(Fs) : l === OD ? e.push(131072 <= d && d <= 196605 || 196608 <= d && d <= 262141 ? Ks : Fs) : void e.push(l)) : s !== 0 && MD.indexOf(d = e[s - 1]) === -1 ? (n.push(n[s - 1]), e.push(d)) : (n.push(s), e.push(Fs));
  }), [n, e, i];
}, dg = function(t, A, e, n) {
  var i = n[e];
  if (Array.isArray(t) ? t.indexOf(i) !== -1 : t === i)
    for (var d = e; d <= n.length; ) {
      if ((l = n[++d]) === A)
        return !0;
      if (l !== Hu)
        break;
    }
  if (i === Hu)
    for (d = e; 0 < d; ) {
      var s = n[--d];
      if (Array.isArray(t) ? t.indexOf(s) !== -1 : t === s)
        for (var l, w = e; w <= n.length; ) {
          if ((l = n[++w]) === A)
            return !0;
          if (l !== Hu)
            break;
        }
      if (s !== Hu)
        break;
    }
  return !1;
}, rQ = function(t, A) {
  for (var e = t; 0 <= e; ) {
    var n = A[e];
    if (n !== Hu)
      return n;
    e--;
  }
  return 0;
}, VD = function(t, A, e, n, d) {
  if (e[n] === 0 || (n -= 1, Array.isArray(d) && d[n] === !0))
    return kA;
  var d = n - 1, s = 1 + n, l = A[n], w = 0 <= d ? A[d] : 0, h = A[s];
  if (l === dC && h === sC)
    return kA;
  if (t0.indexOf(l) !== -1)
    return lC;
  if (t0.indexOf(h) !== -1 || fC.indexOf(h) !== -1)
    return kA;
  if (rQ(n, A) === cC)
    return EB;
  if (e0.get(t[n]) === Wg || (l === pB || l === mB) && e0.get(t[s]) === Wg || l === zw || h === zw || l === $w || [Hu, Yg, ds].indexOf(l) === -1 && h === $w || [UB, jd, xD, da, sa].indexOf(h) !== -1 || rQ(n, A) === qd || dg(ig, qd, n, A) || dg([UB, jd], jg, n, A) || dg(AQ, AQ, n, A))
    return kA;
  if (l === Hu)
    return EB;
  if (l === ig || h === ig)
    return kA;
  if (h === Zg || l === Zg)
    return EB;
  if ([Yg, ds, jg].indexOf(h) !== -1 || l === LD || w === $g && kD.indexOf(l) !== -1 || l === sa && h === $g || h === eQ || Vr.indexOf(h) !== -1 && l === tn || Vr.indexOf(l) !== -1 && h === tn || l === cs && [Ks, pB, mB].indexOf(h) !== -1 || [Ks, pB, mB].indexOf(l) !== -1 && h === ss || Vr.indexOf(l) !== -1 && tQ.indexOf(h) !== -1 || tQ.indexOf(l) !== -1 && Vr.indexOf(h) !== -1 || [cs, ss].indexOf(l) !== -1 && (h === tn || [qd, ds].indexOf(h) !== -1 && A[1 + s] === tn) || [qd, ds].indexOf(l) !== -1 && h === tn || l === tn && [tn, sa, da].indexOf(h) !== -1)
    return kA;
  if ([tn, sa, da, UB, jd].indexOf(h) !== -1)
    for (var g = n; 0 <= g; ) {
      if ((p = A[g]) === tn)
        return kA;
      if ([sa, da].indexOf(p) === -1)
        break;
      g--;
    }
  if ([cs, ss].indexOf(h) !== -1)
    for (var p, g = [UB, jd].indexOf(l) !== -1 ? d : n; 0 <= g; ) {
      if ((p = A[g]) === tn)
        return kA;
      if ([sa, da].indexOf(p) === -1)
        break;
      g--;
    }
  if (A0 === l && [A0, Al, qg, zg].indexOf(h) !== -1 || [Al, qg].indexOf(l) !== -1 && [Al, el].indexOf(h) !== -1 || [el, zg].indexOf(l) !== -1 && h === el || nQ.indexOf(l) !== -1 && [eQ, ss].indexOf(h) !== -1 || nQ.indexOf(h) !== -1 && l === cs || Vr.indexOf(l) !== -1 && Vr.indexOf(h) !== -1 || l === da && Vr.indexOf(h) !== -1 || Vr.concat(tn).indexOf(l) !== -1 && h === qd && TD.indexOf(t[s]) === -1 || Vr.concat(tn).indexOf(h) !== -1 && l === jd)
    return kA;
  if (l === ag && h === ag) {
    for (var K = e[n], _ = 1; 0 < K && A[--K] === ag; )
      _++;
    if (_ % 2 != 0)
      return kA;
  }
  return l === pB && h === mB ? kA : EB;
}, RD = function(t, d) {
  var i = GD(t, (d = d || { lineBreak: "normal", wordBreak: "normal" }).lineBreak), e = i[0], n = i[1], i = i[2], d = (d.wordBreak !== "break-all" && d.wordBreak !== "break-word" || (n = n.map(function(s) {
    return [tn, Fs, BC].indexOf(s) !== -1 ? Ks : s;
  })), d.wordBreak === "keep-all" ? i.map(function(s, l) {
    return s && 19968 <= t[l] && t[l] <= 40959;
  }) : void 0);
  return [e, n, d];
}, ND = function() {
  function t(A, e, n, i) {
    this.codePoints = A, this.required = e === lC, this.start = n, this.end = i;
  }
  return t.prototype.slice = function() {
    return Ie.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, t;
}(), PD = function(n, A) {
  var e = Il(n), n = RD(e, A), i = n[0], d = n[1], s = n[2], l = e.length, w = 0, h = 0;
  return { next: function() {
    if (l <= h)
      return { done: !0, value: null };
    for (var g, p = kA; h < l && (p = VD(e, d, i, ++h, s)) === kA; )
      ;
    return p !== kA || h === l ? (g = new ND(e, p, w, h), w = h, { value: g, done: !1 }) : { done: !0, value: null };
  } };
}, JD = 1, XD = 2, Os = 4, uQ = 8, fl = 10, oQ = 47, Us = 92, WD = 9, YD = 32, DB = 34, zd = 61, ZD = 35, jD = 36, qD = 37, HB = 39, yB = 40, $d = 41, zD = 95, Tt = 45, $D = 33, AH = 60, eH = 62, tH = 64, nH = 91, rH = 93, uH = 61, oH = 123, bB = 63, iH = 125, iQ = 124, aH = 126, dH = 128, aQ = 65533, sg = 42, Jo = 43, sH = 44, cH = 58, BH = 59, Ls = 46, lH = 0, fH = 8, gH = 11, wH = 14, QH = 31, hH = 127, lr = -1, gC = 48, wC = 97, QC = 101, CH = 102, FH = 117, UH = 122, hC = 65, CC = 69, FC = 70, pH = 85, mH = 90, It = function(t) {
  return gC <= t && t <= 57;
}, EH = function(t) {
  return 55296 <= t && t <= 57343;
}, ca = function(t) {
  return It(t) || hC <= t && t <= FC || wC <= t && t <= CH;
}, DH = function(t) {
  return wC <= t && t <= UH;
}, HH = function(t) {
  return hC <= t && t <= mH;
}, yH = function(t) {
  return DH(t) || HH(t);
}, bH = function(t) {
  return dH <= t;
}, IB = function(t) {
  return t === fl || t === WD || t === YD;
}, gl = function(t) {
  return yH(t) || bH(t) || t === zD;
}, dQ = function(t) {
  return gl(t) || It(t) || t === Tt;
}, IH = function(t) {
  return lH <= t && t <= fH || t === gH || wH <= t && t <= QH || t === hH;
}, Uu = function(t, A) {
  return t === Us && A !== fl;
}, vB = function(t, A, e) {
  return t === Tt ? gl(A) || Uu(A, e) : !!gl(t) || !(t !== Us || !Uu(t, A));
}, cg = function(t, A, e) {
  return t === Jo || t === Tt ? !!It(A) || A === Ls && It(e) : It(t === Ls ? A : t);
}, vH = function(t) {
  for (var A = 0, e = 1, n = (t[A] !== Jo && t[A] !== Tt || (t[A] === Tt && (e = -1), A++), []); It(t[A]); )
    n.push(t[A++]);
  for (var i = n.length ? parseInt(Ie.apply(void 0, n), 10) : 0, d = (t[A] === Ls && A++, []); It(t[A]); )
    d.push(t[A++]);
  for (var s = d.length, l = s ? parseInt(Ie.apply(void 0, d), 10) : 0, w = (t[A] !== CC && t[A] !== QC || A++, 1), h = (t[A] !== Jo && t[A] !== Tt || (t[A] === Tt && (w = -1), A++), []); It(t[A]); )
    h.push(t[A++]);
  var g = h.length ? parseInt(Ie.apply(void 0, h), 10) : 0;
  return e * (i + l * Math.pow(10, -s)) * Math.pow(10, w * g);
}, KH = { type: 2 }, LH = { type: 3 }, xH = { type: 4 }, _H = { type: 13 }, SH = { type: 8 }, OH = { type: 21 }, TH = { type: 9 }, MH = { type: 10 }, kH = { type: 11 }, GH = { type: 12 }, VH = { type: 14 }, KB = { type: 23 }, RH = { type: 1 }, NH = { type: 25 }, PH = { type: 24 }, JH = { type: 26 }, XH = { type: 27 }, WH = { type: 28 }, YH = { type: 29 }, ZH = { type: 31 }, n0 = { type: 32 }, UC = function() {
  function t() {
    this._value = [];
  }
  return t.prototype.write = function(A) {
    this._value = this._value.concat(Il(A));
  }, t.prototype.read = function() {
    for (var A = [], e = this.consumeToken(); e !== n0; )
      A.push(e), e = this.consumeToken();
    return A;
  }, t.prototype.consumeToken = function() {
    var A = this.consumeCodePoint();
    switch (A) {
      case DB:
        return this.consumeStringToken(DB);
      case ZD:
        var e = this.peekCodePoint(0), n = this.peekCodePoint(1), i = this.peekCodePoint(2);
        if (dQ(e) || Uu(n, i))
          return e = vB(e, n, i) ? XD : JD, { type: 5, value: this.consumeName(), flags: e };
        break;
      case jD:
        if (this.peekCodePoint(0) === zd)
          return this.consumeCodePoint(), _H;
        break;
      case HB:
        return this.consumeStringToken(HB);
      case yB:
        return KH;
      case $d:
        return LH;
      case sg:
        if (this.peekCodePoint(0) === zd)
          return this.consumeCodePoint(), VH;
        break;
      case Jo:
        if (cg(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case sH:
        return xH;
      case Tt:
        if (n = A, i = this.peekCodePoint(0), e = this.peekCodePoint(1), cg(n, i, e))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (vB(n, i, e))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (i === Tt && e === eH)
          return this.consumeCodePoint(), this.consumeCodePoint(), PH;
        break;
      case Ls:
        if (cg(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case oQ:
        if (this.peekCodePoint(0) === sg)
          for (this.consumeCodePoint(); ; ) {
            var d = this.consumeCodePoint();
            if (d === sg && (d = this.consumeCodePoint()) === oQ)
              return this.consumeToken();
            if (d === lr)
              return this.consumeToken();
          }
        break;
      case cH:
        return JH;
      case BH:
        return XH;
      case AH:
        if (this.peekCodePoint(0) === $D && this.peekCodePoint(1) === Tt && this.peekCodePoint(2) === Tt)
          return this.consumeCodePoint(), this.consumeCodePoint(), NH;
        break;
      case tH:
        if (n = this.peekCodePoint(0), i = this.peekCodePoint(1), e = this.peekCodePoint(2), vB(n, i, e))
          return { type: 7, value: this.consumeName() };
        break;
      case nH:
        return WH;
      case Us:
        if (Uu(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case rH:
        return YH;
      case uH:
        if (this.peekCodePoint(0) === zd)
          return this.consumeCodePoint(), SH;
        break;
      case oH:
        return kH;
      case iH:
        return GH;
      case FH:
      case pH:
        return n = this.peekCodePoint(0), i = this.peekCodePoint(1), n !== Jo || !ca(i) && i !== bB || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case iQ:
        if (this.peekCodePoint(0) === zd)
          return this.consumeCodePoint(), TH;
        if (this.peekCodePoint(0) === iQ)
          return this.consumeCodePoint(), OH;
        break;
      case aH:
        if (this.peekCodePoint(0) === zd)
          return this.consumeCodePoint(), MH;
        break;
      case lr:
        return n0;
    }
    return IB(A) ? (this.consumeWhiteSpace(), ZH) : It(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : gl(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: Ie(A) };
  }, t.prototype.consumeCodePoint = function() {
    var A = this._value.shift();
    return A === void 0 ? -1 : A;
  }, t.prototype.reconsumeCodePoint = function(A) {
    this._value.unshift(A);
  }, t.prototype.peekCodePoint = function(A) {
    return A >= this._value.length ? -1 : this._value[A];
  }, t.prototype.consumeUnicodeRangeToken = function() {
    for (var A = [], e = this.consumeCodePoint(); ca(e) && A.length < 6; )
      A.push(e), e = this.consumeCodePoint();
    for (var n = !1; e === bB && A.length < 6; )
      A.push(e), e = this.consumeCodePoint(), n = !0;
    if (n)
      return { type: 30, start: parseInt(Ie.apply(void 0, A.map(function(s) {
        return s === bB ? gC : s;
      })), 16), end: parseInt(Ie.apply(void 0, A.map(function(s) {
        return s === bB ? FC : s;
      })), 16) };
    var i = parseInt(Ie.apply(void 0, A), 16);
    if (this.peekCodePoint(0) === Tt && ca(this.peekCodePoint(1))) {
      this.consumeCodePoint();
      for (var e = this.consumeCodePoint(), d = []; ca(e) && d.length < 6; )
        d.push(e), e = this.consumeCodePoint();
      return { type: 30, start: i, end: parseInt(Ie.apply(void 0, d), 16) };
    }
    return { type: 30, start: i, end: i };
  }, t.prototype.consumeIdentLikeToken = function() {
    var A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === yB ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === yB ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }, t.prototype.consumeUrlToken = function() {
    var A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === lr)
      return { type: 22, value: "" };
    var e = this.peekCodePoint(0);
    if (e === HB || e === DB)
      return (e = this.consumeStringToken(this.consumeCodePoint())).type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === lr || this.peekCodePoint(0) === $d) ? (this.consumeCodePoint(), { type: 22, value: e.value }) : (this.consumeBadUrlRemnants(), KB);
    for (; ; ) {
      var n = this.consumeCodePoint();
      if (n === lr || n === $d)
        return { type: 22, value: Ie.apply(void 0, A) };
      if (IB(n))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === lr || this.peekCodePoint(0) === $d ? (this.consumeCodePoint(), { type: 22, value: Ie.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), KB);
      if (n === DB || n === HB || n === yB || IH(n))
        return this.consumeBadUrlRemnants(), KB;
      if (n === Us) {
        if (!Uu(n, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), KB;
        A.push(this.consumeEscapedCodePoint());
      } else
        A.push(n);
    }
  }, t.prototype.consumeWhiteSpace = function() {
    for (; IB(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, t.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var A = this.consumeCodePoint();
      if (A === $d || A === lr)
        return;
      Uu(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }, t.prototype.consumeStringSlice = function(A) {
    for (var e = ""; 0 < A; ) {
      var n = Math.min(5e4, A);
      e += Ie.apply(void 0, this._value.splice(0, n)), A -= n;
    }
    return this._value.shift(), e;
  }, t.prototype.consumeStringToken = function(A) {
    for (var e = "", n = 0; ; ) {
      var i, d = this._value[n];
      if (d === lr || d === void 0 || d === A)
        return { type: 0, value: e += this.consumeStringSlice(n) };
      if (d === fl)
        return this._value.splice(0, n), RH;
      d === Us && (i = this._value[n + 1]) !== lr && i !== void 0 && (i === fl ? (e += this.consumeStringSlice(n), n = -1, this._value.shift()) : Uu(d, i) && (e = (e += this.consumeStringSlice(n)) + Ie(this.consumeEscapedCodePoint()), n = -1)), n++;
    }
  }, t.prototype.consumeNumber = function() {
    var A = [], e = Os;
    for ((n = this.peekCodePoint(0)) !== Jo && n !== Tt || A.push(this.consumeCodePoint()); It(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    var n = this.peekCodePoint(0), i = this.peekCodePoint(1);
    if (n === Ls && It(i))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = uQ; It(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    n = this.peekCodePoint(0);
    var i = this.peekCodePoint(1), d = this.peekCodePoint(2);
    if ((n === CC || n === QC) && ((i === Jo || i === Tt) && It(d) || It(i)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = uQ; It(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [vH(A), e];
  }, t.prototype.consumeNumericToken = function() {
    var e = this.consumeNumber(), A = e[0], e = e[1], n = this.peekCodePoint(0), i = this.peekCodePoint(1), d = this.peekCodePoint(2);
    return vB(n, i, d) ? { type: 15, number: A, flags: e, unit: this.consumeName() } : n === qD ? (this.consumeCodePoint(), { type: 16, number: A, flags: e }) : { type: 17, number: A, flags: e };
  }, t.prototype.consumeEscapedCodePoint = function() {
    var A = this.consumeCodePoint();
    if (ca(A)) {
      for (var e = Ie(A); ca(this.peekCodePoint(0)) && e.length < 6; )
        e += Ie(this.consumeCodePoint());
      IB(this.peekCodePoint(0)) && this.consumeCodePoint();
      var n = parseInt(e, 16);
      return n === 0 || EH(n) || 1114111 < n ? aQ : n;
    }
    return A === lr ? aQ : A;
  }, t.prototype.consumeName = function() {
    for (var A = ""; ; ) {
      var e = this.consumeCodePoint();
      if (dQ(e))
        A += Ie(e);
      else {
        if (!Uu(e, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(e), A;
        A += Ie(this.consumeEscapedCodePoint());
      }
    }
  }, t;
}(), pC = function() {
  function t(A) {
    this._tokens = A;
  }
  return t.create = function(A) {
    var e = new UC();
    return e.write(A), new t(e.read());
  }, t.parseValue = function(A) {
    return t.create(A).parseComponentValue();
  }, t.parseValues = function(A) {
    return t.create(A).parseComponentValues();
  }, t.prototype.parseComponentValue = function() {
    for (var A = this.consumeToken(); A.type === 31; )
      A = this.consumeToken();
    if (A.type === 32)
      throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
    this.reconsumeToken(A);
    for (var e = this.consumeComponentValue(); (A = this.consumeToken()).type === 31; )
      ;
    if (A.type === 32)
      return e;
    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
  }, t.prototype.parseComponentValues = function() {
    for (var A = []; ; ) {
      var e = this.consumeComponentValue();
      if (e.type === 32)
        return A;
      A.push(e), A.push();
    }
  }, t.prototype.consumeComponentValue = function() {
    var A = this.consumeToken();
    switch (A.type) {
      case 11:
      case 28:
      case 2:
        return this.consumeSimpleBlock(A.type);
      case 19:
        return this.consumeFunction(A);
    }
    return A;
  }, t.prototype.consumeSimpleBlock = function(A) {
    for (var e = { type: A, values: [] }, n = this.consumeToken(); ; ) {
      if (n.type === 32 || qH(n, A))
        return e;
      this.reconsumeToken(n), e.values.push(this.consumeComponentValue()), n = this.consumeToken();
    }
  }, t.prototype.consumeFunction = function(A) {
    for (var e = { name: A.value, values: [], type: 18 }; ; ) {
      var n = this.consumeToken();
      if (n.type === 32 || n.type === 3)
        return e;
      this.reconsumeToken(n), e.values.push(this.consumeComponentValue());
    }
  }, t.prototype.consumeToken = function() {
    var A = this._tokens.shift();
    return A === void 0 ? n0 : A;
  }, t.prototype.reconsumeToken = function(A) {
    this._tokens.unshift(A);
  }, t;
}(), ps = function(t) {
  return t.type === 15;
}, ha = function(t) {
  return t.type === 17;
}, te = function(t) {
  return t.type === 20;
}, jH = function(t) {
  return t.type === 0;
}, Bg = function(t, A) {
  return te(t) && t.value === A;
}, sQ = function(t) {
  return t.type !== 31;
}, ya = function(t) {
  return t.type !== 31 && t.type !== 4;
}, gr = function(t) {
  var A = [], e = [];
  return t.forEach(function(n) {
    if (n.type === 4) {
      if (e.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      A.push(e), e = [];
    } else
      n.type !== 31 && e.push(n);
  }), e.length && A.push(e), A;
}, qH = function(t, A) {
  return A === 11 && t.type === 12 || A === 28 && t.type === 29 || A === 2 && t.type === 3;
}, Ku = function(t) {
  return t.type === 17 || t.type === 15;
}, Ge = function(t) {
  return t.type === 16 || Ku(t);
}, cQ = function(t) {
  return 1 < t.length ? [t[0], t[1]] : [t[0]];
}, rt = { type: 17, number: 0, flags: Os }, F0 = { type: 16, number: 50, flags: Os }, yu = { type: 16, number: 100, flags: Os }, Bs = function(i, A, e) {
  var n = i[0], i = i[1];
  return [de(n, A), de(i !== void 0 ? i : n, e)];
}, de = function(t, A) {
  if (t.type === 16)
    return t.number / 100 * A;
  if (ps(t))
    switch (t.unit) {
      case "rem":
      case "em":
        return 16 * t.number;
      default:
        return t.number;
    }
  return t.number;
}, mC = "deg", EC = "grad", DC = "rad", HC = "turn", vl = { name: "angle", parse: function(t, A) {
  if (A.type === 15)
    switch (A.unit) {
      case mC:
        return Math.PI * A.number / 180;
      case EC:
        return Math.PI / 200 * A.number;
      case DC:
        return A.number;
      case HC:
        return 2 * Math.PI * A.number;
    }
  throw new Error("Unsupported angle type");
} }, yC = function(t) {
  return t.type === 15 && (t.unit === mC || t.unit === EC || t.unit === DC || t.unit === HC);
}, bC = function(t) {
  switch (t.filter(te).map(function(A) {
    return A.value;
  }).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [rt, rt];
    case "to top":
    case "bottom":
      return vn(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [rt, yu];
    case "to right":
    case "left":
      return vn(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [yu, yu];
    case "to bottom":
    case "top":
      return vn(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [yu, rt];
    case "to left":
    case "right":
      return vn(270);
  }
  return 0;
}, vn = function(t) {
  return Math.PI * t / 180;
}, Lu = { name: "color", parse: function(t, A) {
  if (A.type === 18) {
    var e = zH[A.name];
    if (e === void 0)
      throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
    return e(t, A.values);
  }
  if (A.type === 5) {
    var n, i, d, s;
    if (A.value.length === 3)
      return n = A.value.substring(0, 1), i = A.value.substring(1, 2), d = A.value.substring(2, 3), bu(parseInt(n + n, 16), parseInt(i + i, 16), parseInt(d + d, 16), 1);
    if (A.value.length === 4)
      return n = A.value.substring(0, 1), i = A.value.substring(1, 2), d = A.value.substring(2, 3), s = A.value.substring(3, 4), bu(parseInt(n + n, 16), parseInt(i + i, 16), parseInt(d + d, 16), parseInt(s + s, 16) / 255);
    if (A.value.length === 6)
      return n = A.value.substring(0, 2), i = A.value.substring(2, 4), d = A.value.substring(4, 6), bu(parseInt(n, 16), parseInt(i, 16), parseInt(d, 16), 1);
    if (A.value.length === 8)
      return n = A.value.substring(0, 2), i = A.value.substring(2, 4), d = A.value.substring(4, 6), s = A.value.substring(6, 8), bu(parseInt(n, 16), parseInt(i, 16), parseInt(d, 16), parseInt(s, 16) / 255);
  }
  return A.type === 20 && (e = Pr[A.value.toUpperCase()], e !== void 0) ? e : Pr.TRANSPARENT;
} }, xu = function(t) {
  return (255 & t) == 0;
}, je = function(i) {
  var A = 255 & i, e = 255 & i >> 8, n = 255 & i >> 16, i = 255 & i >> 24;
  return A < 255 ? "rgba(" + i + "," + n + "," + e + "," + A / 255 + ")" : "rgb(" + i + "," + n + "," + e + ")";
}, bu = function(t, A, e, n) {
  return (t << 24 | A << 16 | e << 8 | Math.round(255 * n) << 0) >>> 0;
}, BQ = function(t, A) {
  var e;
  return t.type === 17 ? t.number : t.type === 16 ? (e = A === 3 ? 1 : 255, A === 3 ? t.number / 100 * e : Math.round(t.number / 100 * e)) : 0;
}, lQ = function(t, d) {
  var e, n, i, d = d.filter(ya);
  return d.length === 3 ? (e = (i = d.map(BQ))[0], n = i[1], i = i[2], bu(e, n, i, 1)) : d.length === 4 ? (e = (d = d.map(BQ))[0], n = d[1], i = d[2], d = d[3], bu(e, n, i, d)) : 0;
};
function lg(t, A, e) {
  return e < 0 && (e += 1), 1 <= e && --e, e < 1 / 6 ? (A - t) * e * 6 + t : e < 0.5 ? A : e < 2 / 3 ? 6 * (A - t) * (2 / 3 - e) + t : t;
}
var fQ = function(i, n) {
  var e, n = n.filter(ya), d = n[0], s = n[1], l = n[2], n = n[3], i = (d.type === 17 ? vn(d.number) : vl.parse(i, d)) / (2 * Math.PI), d = Ge(s) ? s.number / 100 : 0, s = Ge(l) ? l.number / 100 : 0, l = n !== void 0 && Ge(n) ? de(n, 1) : 1;
  return d == 0 ? bu(255 * s, 255 * s, 255 * s, 1) : (d = lg(s = 2 * s - (n = s <= 0.5 ? s * (1 + d) : s + d - s * d), n, i + 1 / 3), e = lg(s, n, i), s = lg(s, n, i - 1 / 3), bu(255 * d, 255 * e, 255 * s, l));
}, zH = { hsl: fQ, hsla: fQ, rgb: lQ, rgba: lQ }, ms = function(t, A) {
  return Lu.parse(t, pC.create(A).parseComponentValue());
}, Pr = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, $H = { name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function(t, A) {
  return A.map(function(e) {
    if (te(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, Ay = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Kl = function(t, A) {
  return t = Lu.parse(t, A[0]), A = A[1], A && Ge(A) ? { color: t, stop: A } : { color: t, stop: null };
}, gQ = function(t, A) {
  for (var e = t[0], n = t[t.length - 1], i = (e.stop === null && (e.stop = rt), n.stop === null && (n.stop = yu), []), d = 0, s = 0; s < t.length; s++) {
    var l = t[s].stop;
    l !== null ? (l = de(l, A), i.push(d < l ? l : d), d = l) : i.push(null);
  }
  for (var w = null, s = 0; s < i.length; s++) {
    var h = i[s];
    if (h === null)
      w === null && (w = s);
    else if (w !== null) {
      for (var g = s - w, p = (h - i[w - 1]) / (1 + g), K = 1; K <= g; K++)
        i[w + K - 1] = p * K;
      w = null;
    }
  }
  return t.map(function(_, S) {
    return { color: _.color, stop: Math.max(Math.min(1, i[S] / A), 0) };
  });
}, ey = function(t, i, e) {
  var d = i / 2, n = e / 2, i = de(t[0], i) - d, d = n - de(t[1], e);
  return (Math.atan2(d, i) + 2 * Math.PI) % (2 * Math.PI);
}, ty = function(w, i, d) {
  var w = typeof w == "number" ? w : ey(w, i, d), n = Math.abs(i * Math.sin(w)) + Math.abs(d * Math.cos(w)), i = i / 2, d = d / 2, s = n / 2, l = Math.sin(w - Math.PI / 2) * s, w = Math.cos(w - Math.PI / 2) * s;
  return [n, i - w, i + w, d - l, d + l];
}, Wn = function(t, A) {
  return Math.sqrt(t * t + A * A);
}, wQ = function(t, A, e, n, i) {
  return [[0, 0], [0, A], [t, 0], [t, A]].reduce(function(d, s) {
    var w = s[0], l = s[1], w = Wn(e - w, n - l);
    return (i ? w < d.optimumDistance : w > d.optimumDistance) ? { optimumCorner: s, optimumDistance: w } : d;
  }, { optimumDistance: i ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, ny = function(t, A, e, n, i) {
  var d, s, l, w, h = 0, g = 0;
  switch (t.size) {
    case 0:
      t.shape === 0 ? h = g = Math.min(Math.abs(A), Math.abs(A - n), Math.abs(e), Math.abs(e - i)) : t.shape === 1 && (h = Math.min(Math.abs(A), Math.abs(A - n)), g = Math.min(Math.abs(e), Math.abs(e - i)));
      break;
    case 2:
      t.shape === 0 ? h = g = Math.min(Wn(A, e), Wn(A, e - i), Wn(A - n, e), Wn(A - n, e - i)) : t.shape === 1 && (d = Math.min(Math.abs(e), Math.abs(e - i)) / Math.min(Math.abs(A), Math.abs(A - n)), l = (w = wQ(n, i, A, e, !0))[0], w = w[1], g = d * (h = Wn(l - A, (w - e) / d)));
      break;
    case 1:
      t.shape === 0 ? h = g = Math.max(Math.abs(A), Math.abs(A - n), Math.abs(e), Math.abs(e - i)) : t.shape === 1 && (h = Math.max(Math.abs(A), Math.abs(A - n)), g = Math.max(Math.abs(e), Math.abs(e - i)));
      break;
    case 3:
      t.shape === 0 ? h = g = Math.max(Wn(A, e), Wn(A, e - i), Wn(A - n, e), Wn(A - n, e - i)) : t.shape === 1 && (d = Math.max(Math.abs(e), Math.abs(e - i)) / Math.max(Math.abs(A), Math.abs(A - n)), l = (s = wQ(n, i, A, e, !1))[0], w = s[1], g = d * (h = Wn(l - A, (w - e) / d)));
  }
  return Array.isArray(t.size) && (h = de(t.size[0], n), g = t.size.length === 2 ? de(t.size[1], i) : h), [h, g];
}, ry = function(t, A) {
  var e = vn(180), n = [];
  return gr(A).forEach(function(i, d) {
    if (d === 0) {
      if (d = i[0], d.type === 20 && d.value === "to")
        return void (e = bC(i));
      if (yC(d))
        return void (e = vl.parse(t, d));
    }
    d = Kl(t, i), n.push(d);
  }), { angle: e, stops: n, type: 1 };
}, LB = function(t, A) {
  var e = vn(180), n = [];
  return gr(A).forEach(function(i, d) {
    if (d === 0) {
      if (d = i[0], d.type === 20 && ["top", "left", "right", "bottom"].indexOf(d.value) !== -1)
        return void (e = bC(i));
      if (yC(d))
        return void (e = (vl.parse(t, d) + vn(270)) % vn(360));
    }
    d = Kl(t, i), n.push(d);
  }), { angle: e, stops: n, type: 1 };
}, uy = function(t, A) {
  var e = vn(180), n = [], i = 1;
  return gr(A).forEach(function(w, s) {
    var l, w = w[0];
    if (s === 0) {
      if (te(w) && w.value === "linear")
        return void (i = 1);
      if (te(w) && w.value === "radial")
        return void (i = 2);
    }
    w.type === 18 && (w.name === "from" ? (l = Lu.parse(t, w.values[0]), n.push({ stop: rt, color: l })) : w.name === "to" ? (l = Lu.parse(t, w.values[0]), n.push({ stop: yu, color: l })) : w.name === "color-stop" && (s = w.values.filter(ya)).length === 2 && (l = Lu.parse(t, s[1]), w = s[0], ha(w)) && n.push({ stop: { type: 16, number: 100 * w.number, flags: w.flags }, color: l }));
  }), i === 1 ? { angle: (e + vn(180)) % vn(360), stops: n, type: i } : { size: 3, shape: 0, stops: n, position: [], type: i };
}, IC = "closest-side", vC = "farthest-side", KC = "closest-corner", LC = "farthest-corner", xC = "circle", _C = "ellipse", SC = "cover", OC = "contain", oy = function(t, A) {
  var e = 0, n = 3, i = [], d = [];
  return gr(A).forEach(function(s, l) {
    var w, h = !0;
    l === 0 && (w = !1, h = s.reduce(function(g, p) {
      if (w)
        if (te(p))
          switch (p.value) {
            case "center":
              return d.push(F0), g;
            case "top":
            case "left":
              return d.push(rt), g;
            case "right":
            case "bottom":
              return d.push(yu), g;
          }
        else
          (Ge(p) || Ku(p)) && d.push(p);
      else if (te(p))
        switch (p.value) {
          case xC:
            return e = 0, !1;
          case _C:
            return !(e = 1);
          case "at":
            return !(w = !0);
          case IC:
            return n = 0, !1;
          case SC:
          case vC:
            return !(n = 1);
          case OC:
          case KC:
            return !(n = 2);
          case LC:
            return !(n = 3);
        }
      else if (Ku(p) || Ge(p))
        return (n = Array.isArray(n) ? n : []).push(p), !1;
      return g;
    }, h)), h && (l = Kl(t, s), i.push(l));
  }), { size: n, shape: e, stops: i, position: d, type: 2 };
}, xB = function(t, A) {
  var e = 0, n = 3, i = [], d = [];
  return gr(A).forEach(function(s, l) {
    var w = !0;
    l === 0 ? w = s.reduce(function(h, g) {
      if (te(g))
        switch (g.value) {
          case "center":
            return d.push(F0), !1;
          case "top":
          case "left":
            return d.push(rt), !1;
          case "right":
          case "bottom":
            return d.push(yu), !1;
        }
      else if (Ge(g) || Ku(g))
        return d.push(g), !1;
      return h;
    }, w) : l === 1 && (w = s.reduce(function(h, g) {
      if (te(g))
        switch (g.value) {
          case xC:
            return e = 0, !1;
          case _C:
            return !(e = 1);
          case OC:
          case IC:
            return n = 0, !1;
          case vC:
            return !(n = 1);
          case KC:
            return !(n = 2);
          case SC:
          case LC:
            return !(n = 3);
        }
      else if (Ku(g) || Ge(g))
        return (n = Array.isArray(n) ? n : []).push(g), !1;
      return h;
    }, w)), w && (l = Kl(t, s), i.push(l));
  }), { size: n, shape: e, stops: i, position: d, type: 2 };
}, iy = function(t) {
  return t.type === 1;
}, ay = function(t) {
  return t.type === 2;
}, fg = { name: "image", parse: function(t, A) {
  if (A.type === 22)
    return e = { url: A.value, type: 0 }, t.cache.addImage(A.value), e;
  if (A.type !== 18)
    throw new Error("Unsupported image type " + A.type);
  var e = TC[A.name];
  if (e === void 0)
    throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
  return e(t, A.values);
} };
function dy(t) {
  return !(t.type === 20 && t.value === "none" || t.type === 18 && !TC[t.name]);
}
for (var Ha, _B, As, TC = { "linear-gradient": ry, "-moz-linear-gradient": LB, "-ms-linear-gradient": LB, "-o-linear-gradient": LB, "-webkit-linear-gradient": LB, "radial-gradient": oy, "-moz-radial-gradient": xB, "-ms-radial-gradient": xB, "-o-radial-gradient": xB, "-webkit-radial-gradient": xB, "-webkit-gradient": uy }, sy = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  var e;
  return A.length === 0 || (e = A[0]).type === 20 && e.value === "none" ? [] : A.filter(function(n) {
    return ya(n) && dy(n);
  }).map(function(n) {
    return fg.parse(t, n);
  });
} }, cy = { name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function(t, A) {
  return A.map(function(e) {
    if (te(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, By = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(t, A) {
  return gr(A).map(function(e) {
    return e.filter(Ge);
  }).map(cQ);
} }, ly = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(t, A) {
  return gr(A).map(function(e) {
    return e.filter(te).map(function(n) {
      return n.value;
    }).join(" ");
  }).map(fy);
} }, fy = function(t) {
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
}, gy = (function(t) {
  t.AUTO = "auto", t.CONTAIN = "contain", t.COVER = "cover";
}(Ha = Ha || {}), { name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function(t, A) {
  return gr(A).map(function(e) {
    return e.filter(wy);
  });
} }), wy = function(t) {
  return te(t) || Ge(t);
}, SB = function(t) {
  return { name: "border-" + t + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
}, Qy = SB("top"), hy = SB("right"), Cy = SB("bottom"), Fy = SB("left"), OB = function(t) {
  return { name: "border-radius-" + t, initialValue: "0 0", prefix: !1, type: 1, parse: function(A, e) {
    return cQ(e.filter(Ge));
  } };
}, Uy = OB("top-left"), py = OB("top-right"), my = OB("bottom-right"), Ey = OB("bottom-left"), TB = function(t) {
  return { name: "border-" + t + "-style", initialValue: "solid", prefix: !1, type: 2, parse: function(A, e) {
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
}, Dy = TB("top"), Hy = TB("right"), yy = TB("bottom"), by = TB("left"), MB = function(t) {
  return { name: "border-" + t + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(A, e) {
    return ps(e) ? e.number : 0;
  } };
}, Iy = MB("top"), vy = MB("right"), Ky = MB("bottom"), Ly = MB("left"), xy = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, _y = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "rtl" ? 0 : 1;
} }, Sy = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(te).reduce(function(e, n) {
    return e | Oy(n.value);
  }, 0);
} }, Oy = function(t) {
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
}, Ty = { name: "float", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
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
} }, My = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(t, A) {
  return A.type === 20 && A.value === "normal" || A.type !== 17 && A.type !== 15 ? 0 : A.number;
} }, ky = (function(t) {
  t.NORMAL = "normal", t.STRICT = "strict";
}(_B = _B || {}), { name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "strict" ? _B.NORMAL : _B.STRICT;
} }), Gy = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 }, QQ = function(t, A) {
  return te(t) && t.value === "normal" ? 1.2 * A : t.type === 17 ? A * t.number : Ge(t) ? de(t, A) : A;
}, Vy = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(t, A) {
  return A.type === 20 && A.value === "none" ? null : fg.parse(t, A);
} }, Ry = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "inside" ? 1 : 0;
} }, r0 = { name: "list-style-type", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
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
} }, kB = function(t) {
  return { name: "margin-" + t, initialValue: "0", prefix: !1, type: 4 };
}, Ny = kB("top"), Py = kB("right"), Jy = kB("bottom"), Xy = kB("left"), Wy = { name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(te).map(function(e) {
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
} }, Yy = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "break-word" ? "normal" : "break-word";
} }, GB = function(t) {
  return { name: "padding-" + t, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
}, Zy = GB("top"), jy = GB("right"), qy = GB("bottom"), zy = GB("left"), $y = { name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, A2 = { name: "position", initialValue: "static", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
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
} }, e2 = { name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.length === 1 && Bg(A[0], "none") ? [] : gr(A).map(function(e) {
    for (var n = { color: Pr.TRANSPARENT, offsetX: rt, offsetY: rt, blur: rt }, i = 0, d = 0; d < e.length; d++) {
      var s = e[d];
      Ku(s) ? (i === 0 ? n.offsetX = s : i === 1 ? n.offsetY = s : n.blur = s, i++) : n.color = Lu.parse(t, s);
    }
    return n;
  });
} }, t2 = { name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, n2 = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(t, A) {
  if (A.type === 20 && A.value === "none" || A.type !== 18)
    return null;
  var e = o2[A.name];
  if (e === void 0)
    throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
  return e(A.values);
} }, r2 = function(t) {
  return t = t.filter(function(A) {
    return A.type === 17;
  }).map(function(A) {
    return A.number;
  }), t.length === 6 ? t : null;
}, u2 = function(A) {
  var A = A.filter(function(w) {
    return w.type === 17;
  }).map(function(w) {
    return w.number;
  }), e = A[0], n = A[1], i = (A[2], A[3], A[4]), d = A[5], s = (A[6], A[7], A[8], A[9], A[10], A[11], A[12]), l = A[13];
  return A[14], A[15], A.length === 16 ? [e, n, i, d, s, l] : null;
}, o2 = { matrix: r2, matrix3d: u2 }, hQ = { type: 16, number: 50, flags: Os }, i2 = [hQ, hQ], a2 = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(t, A) {
  return A = A.filter(Ge), A.length !== 2 ? i2 : [A[0], A[1]];
} }, d2 = { name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "hidden":
      return 1;
    case "collapse":
      return 2;
    default:
      return 0;
  }
} }, s2 = (function(t) {
  t.NORMAL = "normal", t.BREAK_ALL = "break-all", t.KEEP_ALL = "keep-all";
}(As = As || {}), { name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "break-all":
      return As.BREAK_ALL;
    case "keep-all":
      return As.KEEP_ALL;
    default:
      return As.NORMAL;
  }
} }), c2 = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(t, A) {
  if (A.type === 20)
    return { auto: !0, order: 0 };
  if (ha(A))
    return { auto: !1, order: A.number };
  throw new Error("Invalid z-index number parsed");
} }, CQ = { name: "time", parse: function(t, A) {
  if (A.type === 15)
    switch (A.unit.toLowerCase()) {
      case "s":
        return 1e3 * A.number;
      case "ms":
        return A.number;
    }
  throw new Error("Unsupported time type");
} }, B2 = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(t, A) {
  return ha(A) ? A.number : 1;
} }, l2 = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, f2 = { name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(te).map(function(e) {
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
} }, g2 = { name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function(t, A) {
  var e = [], n = [];
  return A.forEach(function(i) {
    switch (i.type) {
      case 20:
      case 0:
        e.push(i.value);
        break;
      case 17:
        e.push(i.number.toString());
        break;
      case 4:
        n.push(e.join(" ")), e.length = 0;
    }
  }), e.length && n.push(e.join(" ")), n.map(function(i) {
    return i.indexOf(" ") === -1 ? i : "'" + i + "'";
  });
} }, w2 = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" }, Q2 = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(t, A) {
  return ha(A) ? A.number : !te(A) || A.value !== "bold" ? 400 : 700;
} }, h2 = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.filter(te).map(function(e) {
    return e.value;
  });
} }, C2 = { name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "oblique":
      return "oblique";
    case "italic":
      return "italic";
    default:
      return "normal";
  }
} }, Je = function(t, A) {
  return (t & A) != 0;
}, F2 = { name: "content", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  var e;
  return A.length === 0 || (e = A[0]).type === 20 && e.value === "none" ? [] : A;
} }, U2 = { name: "counter-increment", initialValue: "none", prefix: !0, type: 1, parse: function(t, A) {
  if (A.length === 0)
    return null;
  var e = A[0];
  if (e.type === 20 && e.value === "none")
    return null;
  for (var n = [], i = A.filter(sQ), d = 0; d < i.length; d++) {
    var s = i[d], l = i[d + 1];
    s.type === 20 && (l = l && ha(l) ? l.number : 1, n.push({ counter: s.value, increment: l }));
  }
  return n;
} }, p2 = { name: "counter-reset", initialValue: "none", prefix: !0, type: 1, parse: function(t, A) {
  if (A.length === 0)
    return [];
  for (var e = [], n = A.filter(sQ), i = 0; i < n.length; i++) {
    var d = n[i], s = n[i + 1];
    te(d) && d.value !== "none" && (s = s && ha(s) ? s.number : 0, e.push({ counter: d.value, reset: s }));
  }
  return e;
} }, m2 = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(ps).map(function(e) {
    return CQ.parse(t, e);
  });
} }, E2 = { name: "quotes", initialValue: "none", prefix: !0, type: 1, parse: function(t, A) {
  if (A.length === 0)
    return null;
  var e = A[0];
  if (e.type === 20 && e.value === "none")
    return null;
  var n = [], i = A.filter(jH);
  if (i.length % 2 != 0)
    return null;
  for (var d = 0; d < i.length; d += 2) {
    var s = i[d].value, l = i[d + 1].value;
    n.push({ open: s, close: l });
  }
  return n;
} }, FQ = function(t, A, e) {
  return t && (A = t[Math.min(A, t.length - 1)]) ? e ? A.open : A.close : "";
}, D2 = { name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.length === 1 && Bg(A[0], "none") ? [] : gr(A).map(function(e) {
    for (var n = { color: 255, offsetX: rt, offsetY: rt, blur: rt, spread: rt, inset: !1 }, i = 0, d = 0; d < e.length; d++) {
      var s = e[d];
      Bg(s, "inset") ? n.inset = !0 : Ku(s) ? (i === 0 ? n.offsetX = s : i === 1 ? n.offsetY = s : i === 2 ? n.blur = s : n.spread = s, i++) : n.color = Lu.parse(t, s);
    }
    return n;
  });
} }, H2 = { name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function(t, A) {
  var e = [];
  return A.filter(te).forEach(function(n) {
    switch (n.value) {
      case "stroke":
        e.push(1);
        break;
      case "fill":
        e.push(0);
        break;
      case "markers":
        e.push(2);
    }
  }), [0, 1, 2].forEach(function(n) {
    e.indexOf(n) === -1 && e.push(n);
  }), e;
} }, y2 = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" }, b2 = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(t, A) {
  return ps(A) ? A.number : 0;
} }, I2 = function() {
  function t(A, e) {
    this.animationDuration = oA(A, m2, e.animationDuration), this.backgroundClip = oA(A, $H, e.backgroundClip), this.backgroundColor = oA(A, Ay, e.backgroundColor), this.backgroundImage = oA(A, sy, e.backgroundImage), this.backgroundOrigin = oA(A, cy, e.backgroundOrigin), this.backgroundPosition = oA(A, By, e.backgroundPosition), this.backgroundRepeat = oA(A, ly, e.backgroundRepeat), this.backgroundSize = oA(A, gy, e.backgroundSize), this.borderTopColor = oA(A, Qy, e.borderTopColor), this.borderRightColor = oA(A, hy, e.borderRightColor), this.borderBottomColor = oA(A, Cy, e.borderBottomColor), this.borderLeftColor = oA(A, Fy, e.borderLeftColor), this.borderTopLeftRadius = oA(A, Uy, e.borderTopLeftRadius), this.borderTopRightRadius = oA(A, py, e.borderTopRightRadius), this.borderBottomRightRadius = oA(A, my, e.borderBottomRightRadius), this.borderBottomLeftRadius = oA(A, Ey, e.borderBottomLeftRadius), this.borderTopStyle = oA(A, Dy, e.borderTopStyle), this.borderRightStyle = oA(A, Hy, e.borderRightStyle), this.borderBottomStyle = oA(A, yy, e.borderBottomStyle), this.borderLeftStyle = oA(A, by, e.borderLeftStyle), this.borderTopWidth = oA(A, Iy, e.borderTopWidth), this.borderRightWidth = oA(A, vy, e.borderRightWidth), this.borderBottomWidth = oA(A, Ky, e.borderBottomWidth), this.borderLeftWidth = oA(A, Ly, e.borderLeftWidth), this.boxShadow = oA(A, D2, e.boxShadow), this.color = oA(A, xy, e.color), this.direction = oA(A, _y, e.direction), this.display = oA(A, Sy, e.display), this.float = oA(A, Ty, e.cssFloat), this.fontFamily = oA(A, g2, e.fontFamily), this.fontSize = oA(A, w2, e.fontSize), this.fontStyle = oA(A, C2, e.fontStyle), this.fontVariant = oA(A, h2, e.fontVariant), this.fontWeight = oA(A, Q2, e.fontWeight), this.letterSpacing = oA(A, My, e.letterSpacing), this.lineBreak = oA(A, ky, e.lineBreak), this.lineHeight = oA(A, Gy, e.lineHeight), this.listStyleImage = oA(A, Vy, e.listStyleImage), this.listStylePosition = oA(A, Ry, e.listStylePosition), this.listStyleType = oA(A, r0, e.listStyleType), this.marginTop = oA(A, Ny, e.marginTop), this.marginRight = oA(A, Py, e.marginRight), this.marginBottom = oA(A, Jy, e.marginBottom), this.marginLeft = oA(A, Xy, e.marginLeft), this.opacity = oA(A, B2, e.opacity);
    var n = oA(A, Wy, e.overflow);
    this.overflowX = n[0], this.overflowY = n[1 < n.length ? 1 : 0], this.overflowWrap = oA(A, Yy, e.overflowWrap), this.paddingTop = oA(A, Zy, e.paddingTop), this.paddingRight = oA(A, jy, e.paddingRight), this.paddingBottom = oA(A, qy, e.paddingBottom), this.paddingLeft = oA(A, zy, e.paddingLeft), this.paintOrder = oA(A, H2, e.paintOrder), this.position = oA(A, A2, e.position), this.textAlign = oA(A, $y, e.textAlign), this.textDecorationColor = oA(A, l2, (n = e.textDecorationColor) != null ? n : e.color), this.textDecorationLine = oA(A, f2, (n = e.textDecorationLine) != null ? n : e.textDecoration), this.textShadow = oA(A, e2, e.textShadow), this.textTransform = oA(A, t2, e.textTransform), this.transform = oA(A, n2, e.transform), this.transformOrigin = oA(A, a2, e.transformOrigin), this.visibility = oA(A, d2, e.visibility), this.webkitTextStrokeColor = oA(A, y2, e.webkitTextStrokeColor), this.webkitTextStrokeWidth = oA(A, b2, e.webkitTextStrokeWidth), this.wordBreak = oA(A, s2, e.wordBreak), this.zIndex = oA(A, c2, e.zIndex);
  }
  return t.prototype.isVisible = function() {
    return 0 < this.display && 0 < this.opacity && this.visibility === 0;
  }, t.prototype.isTransparent = function() {
    return xu(this.backgroundColor);
  }, t.prototype.isTransformed = function() {
    return this.transform !== null;
  }, t.prototype.isPositioned = function() {
    return this.position !== 0;
  }, t.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  }, t.prototype.isFloating = function() {
    return this.float !== 0;
  }, t.prototype.isInlineLevel = function() {
    return Je(this.display, 4) || Je(this.display, 33554432) || Je(this.display, 268435456) || Je(this.display, 536870912) || Je(this.display, 67108864) || Je(this.display, 134217728);
  }, t;
}(), v2 = function(t, A) {
  this.content = oA(t, F2, A.content), this.quotes = oA(t, E2, A.quotes);
}, UQ = function(t, A) {
  this.counterIncrement = oA(t, U2, A.counterIncrement), this.counterReset = oA(t, p2, A.counterReset);
}, oA = function(t, A, i) {
  var n = new UC(), i = i != null ? i.toString() : A.initialValue, d = (n.write(i), new pC(n.read()));
  switch (A.type) {
    case 2:
      var s = d.parseComponentValue();
      return A.parse(t, te(s) ? s.value : A.initialValue);
    case 0:
      return A.parse(t, d.parseComponentValue());
    case 1:
      return A.parse(t, d.parseComponentValues());
    case 4:
      return d.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return vl.parse(t, d.parseComponentValue());
        case "color":
          return Lu.parse(t, d.parseComponentValue());
        case "image":
          return fg.parse(t, d.parseComponentValue());
        case "length":
          var l = d.parseComponentValue();
          return Ku(l) ? l : rt;
        case "length-percentage":
          return l = d.parseComponentValue(), Ge(l) ? l : rt;
        case "time":
          return CQ.parse(t, d.parseComponentValue());
      }
  }
}, K2 = "data-html2canvas-debug", L2 = function(t) {
  switch (t.getAttribute(K2)) {
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
}, u0 = function(t, A) {
  return t = L2(t), t === 1 || A === t;
}, Qr = function(t, A) {
  this.context = t, this.textNodes = [], this.elements = [], this.flags = 0, u0(A, 3), this.styles = new I2(t, window.getComputedStyle(A, null)), a0(A) && (this.styles.animationDuration.some(function(e) {
    return 0 < e;
  }) && (A.style.animationDuration = "0s"), this.styles.transform !== null) && (A.style.transform = "none"), this.bounds = bl(this.context, A), u0(A, 4) && (this.flags |= 16);
}, x2 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", pQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ls = typeof Uint8Array > "u" ? [] : new Uint8Array(256), VB = 0; VB < pQ.length; VB++)
  ls[pQ.charCodeAt(VB)] = VB;
for (var _2 = function(t) {
  for (var A, e, n, i, l = 0.75 * t.length, d = t.length, s = 0, l = (t[t.length - 1] === "=" && (l--, t[t.length - 2] === "=") && l--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? ArrayBuffer : Array)(l)), w = Array.isArray(l) ? l : new Uint8Array(l), h = 0; h < d; h += 4)
    A = ls[t.charCodeAt(h)], e = ls[t.charCodeAt(h + 1)], n = ls[t.charCodeAt(h + 2)], i = ls[t.charCodeAt(h + 3)], w[s++] = A << 2 | e >> 4, w[s++] = (15 & e) << 4 | n >> 2, w[s++] = (3 & n) << 6 | 63 & i;
  return l;
}, S2 = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 2)
    e.push(t[n + 1] << 8 | t[n]);
  return e;
}, O2 = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 4)
    e.push(t[n + 3] << 24 | t[n + 2] << 16 | t[n + 1] << 8 | t[n]);
  return e;
}, Mo = 5, gg = 11, wg = 2, T2 = gg - Mo, mQ = 65536 >> Mo, M2 = 1 << Mo, Qg = M2 - 1, k2 = 1024 >> Mo, EQ = mQ + k2, XI = EQ, G2 = 32, V2 = EQ + G2, R2 = 65536 >> gg, N2 = 1 << T2, P2 = N2 - 1, DQ = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, J2 = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, X2 = function(i, A) {
  var i = _2(i), e = Array.isArray(i) ? O2(i) : new Uint32Array(i), i = Array.isArray(i) ? S2(i) : new Uint16Array(i), n = DQ(i, 12, e[4] / 2), i = e[5] === 2 ? DQ(i, (24 + e[4]) / 2) : J2(e, Math.ceil((24 + e[4]) / 4));
  return new W2(e[0], e[1], e[2], e[3], n, i);
}, W2 = function() {
  function t(A, e, n, i, d, s) {
    this.initialValue = A, this.errorValue = e, this.highStart = n, this.highValueIndex = i, this.index = d, this.data = s;
  }
  return t.prototype.get = function(A) {
    var e;
    if (0 <= A) {
      if (A < 55296 || 56319 < A && A <= 65535)
        return e = this.index[A >> Mo], this.data[e = (e << wg) + (A & Qg)];
      if (A <= 65535)
        return e = this.index[mQ + (A - 55296 >> Mo)], this.data[e = (e << wg) + (A & Qg)];
      if (A < this.highStart)
        return e = this.index[e = V2 - R2 + (A >> gg)], e = this.index[e += A >> Mo & P2], this.data[e = (e << wg) + (A & Qg)];
      if (A <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, t;
}(), HQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Y2 = typeof Uint8Array > "u" ? [] : new Uint8Array(256), RB = 0; RB < HQ.length; RB++)
  Y2[HQ.charCodeAt(RB)] = RB;
var Es, qA, Z2 = 1, hg = 2, Cg = 3, yQ = 4, bQ = 5, j2 = 7, IQ = 8, Fg = 9, Ug = 10, vQ = 11, KQ = 12, LQ = 13, xQ = 14, pg = 15, q2 = function(t) {
  for (var A = [], e = 0, n = t.length; e < n; ) {
    var i, d = t.charCodeAt(e++);
    55296 <= d && d <= 56319 && e < n ? (64512 & (i = t.charCodeAt(e++))) == 56320 ? A.push(((1023 & d) << 10) + (1023 & i) + 65536) : (A.push(d), e--) : A.push(d);
  }
  return A;
}, z2 = function() {
  for (var t = [], A = 0; A < arguments.length; A++)
    t[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, t);
  var e = t.length;
  if (!e)
    return "";
  for (var n = [], i = -1, d = ""; ++i < e; ) {
    var s = t[i];
    s <= 65535 ? n.push(s) : n.push(55296 + ((s -= 65536) >> 10), s % 1024 + 56320), (i + 1 === e || 16384 < n.length) && (d += String.fromCharCode.apply(String, n), n.length = 0);
  }
  return d;
}, $2 = X2(x2), En = "×", Ab = "÷", eb = function(t) {
  return $2.get(t);
}, tb = function(t, A, s) {
  var n = s - 2, i = A[n], d = A[s - 1], s = A[s];
  if (d === hg && s === Cg)
    return En;
  if (d !== hg && d !== Cg && d !== yQ && s !== hg && s !== Cg && s !== yQ) {
    if (d === IQ && [IQ, Fg, vQ, KQ].indexOf(s) !== -1 || !(d !== vQ && d !== Fg || s !== Fg && s !== Ug) || (d === KQ || d === Ug) && s === Ug || s === LQ || s === bQ || s === j2 || d === Z2)
      return En;
    if (d === LQ && s === xQ) {
      for (; i === bQ; )
        i = A[--n];
      if (i === xQ)
        return En;
    }
    if (d === pg && s === pg) {
      for (var l = 0; i === pg; )
        l++, i = A[--n];
      if (l % 2 == 0)
        return En;
    }
  }
  return Ab;
}, nb = function(t) {
  var A = q2(t), e = A.length, n = 0, i = 0, d = A.map(eb);
  return { next: function() {
    if (e <= n)
      return { done: !0, value: null };
    for (var s, l = En; n < e && (l = tb(A, d, ++n)) === En; )
      ;
    return l !== En || n === e ? (s = z2.apply(null, A.slice(i, n)), i = n, { value: s, done: !1 }) : { done: !0, value: null };
  } };
}, rb = function(t) {
  for (var A, e = nb(t), n = []; !(A = e.next()).done; )
    A.value && n.push(A.value.slice());
  return n;
}, ub = function(t) {
  if (t.createRange) {
    var A = t.createRange();
    if (A.getBoundingClientRect) {
      var e = t.createElement("boundtest"), A = (e.style.height = "123px", e.style.display = "block", t.body.appendChild(e), A.selectNode(e), A.getBoundingClientRect()), A = Math.round(A.height);
      if (t.body.removeChild(e), A === 123)
        return !0;
    }
  }
  return !1;
}, ob = function(t) {
  var A = t.createElement("boundtest"), e = (A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", t.body.appendChild(A), t.createRange()), n = (A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "", A.firstChild), s = Il(n.data).map(function(l) {
    return Ie(l);
  }), i = 0, d = {}, s = s.every(function(g, w) {
    e.setStart(n, i), e.setEnd(n, i + g.length);
    var h = e.getBoundingClientRect(), g = (i += g.length, h.x > d.x || h.y > d.y);
    return d = h, w === 0 || g;
  });
  return t.body.removeChild(A), s;
}, ib = function() {
  return new Image().crossOrigin !== void 0;
}, ab = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, db = function(e) {
  var A = new Image(), e = e.createElement("canvas"), n = e.getContext("2d");
  if (!n)
    return !1;
  A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    n.drawImage(A, 0, 0), e.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, _Q = function(t) {
  return t[0] === 0 && t[1] === 255 && t[2] === 0 && t[3] === 255;
}, sb = function(t) {
  var i = t.createElement("canvas"), A = (i.width = 100, i.height = 100, i.getContext("2d"));
  if (!A)
    return Promise.reject(!1);
  A.fillStyle = "rgb(0, 255, 0)", A.fillRect(0, 0, 100, 100);
  var e = new Image(), n = i.toDataURL(), i = (e.src = n, o0(100, 100, 0, 0, e));
  return A.fillStyle = "red", A.fillRect(0, 0, 100, 100), SQ(i).then(function(s) {
    A.drawImage(s, 0, 0);
    var s = A.getImageData(0, 0, 100, 100).data, l = (A.fillStyle = "red", A.fillRect(0, 0, 100, 100), t.createElement("div"));
    return l.style.backgroundImage = "url(" + n + ")", l.style.height = "100px", _Q(s) ? SQ(o0(100, 100, 0, 0, l)) : Promise.reject(!1);
  }).then(function(d) {
    return A.drawImage(d, 0, 0), _Q(A.getImageData(0, 0, 100, 100).data);
  }).catch(function() {
    return !1;
  });
}, o0 = function(t, A, e, n, i) {
  var s = "http://www.w3.org/2000/svg", d = document.createElementNS(s, "svg"), s = document.createElementNS(s, "foreignObject");
  return d.setAttributeNS(null, "width", t.toString()), d.setAttributeNS(null, "height", A.toString()), s.setAttributeNS(null, "width", "100%"), s.setAttributeNS(null, "height", "100%"), s.setAttributeNS(null, "x", e.toString()), s.setAttributeNS(null, "y", n.toString()), s.setAttributeNS(null, "externalResourcesRequired", "true"), d.appendChild(s), s.appendChild(i), d;
}, SQ = function(t) {
  return new Promise(function(A, e) {
    var n = new Image();
    n.onload = function() {
      return A(n);
    }, n.onerror = e, n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
  });
}, ut = { get SUPPORT_RANGE_BOUNDS() {
  var t = ub(document);
  return Object.defineProperty(ut, "SUPPORT_RANGE_BOUNDS", { value: t }), t;
}, get SUPPORT_WORD_BREAKING() {
  var t = ut.SUPPORT_RANGE_BOUNDS && ob(document);
  return Object.defineProperty(ut, "SUPPORT_WORD_BREAKING", { value: t }), t;
}, get SUPPORT_SVG_DRAWING() {
  var t = db(document);
  return Object.defineProperty(ut, "SUPPORT_SVG_DRAWING", { value: t }), t;
}, get SUPPORT_FOREIGNOBJECT_DRAWING() {
  var t = typeof Array.from == "function" && typeof window.fetch == "function" ? sb(document) : Promise.resolve(!1);
  return Object.defineProperty(ut, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: t }), t;
}, get SUPPORT_CORS_IMAGES() {
  var t = ib();
  return Object.defineProperty(ut, "SUPPORT_CORS_IMAGES", { value: t }), t;
}, get SUPPORT_RESPONSE_TYPE() {
  var t = ab();
  return Object.defineProperty(ut, "SUPPORT_RESPONSE_TYPE", { value: t }), t;
}, get SUPPORT_CORS_XHR() {
  var t = "withCredentials" in new XMLHttpRequest();
  return Object.defineProperty(ut, "SUPPORT_CORS_XHR", { value: t }), t;
}, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
  var t = !(typeof Intl > "u" || !Intl.Segmenter);
  return Object.defineProperty(ut, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: t }), t;
} }, Ds = function(t, A) {
  this.text = t, this.bounds = A;
}, cb = function(t, i, e, n) {
  var i = fb(i, e), d = [], s = 0;
  return i.forEach(function(l) {
    var w, h, g;
    e.textDecorationLine.length || 0 < l.trim().length ? ut.SUPPORT_RANGE_BOUNDS ? 1 < (w = OQ(n, s, l.length).getClientRects()).length ? (g = U0(l), h = 0, g.forEach(function(p) {
      d.push(new Ds(p, Jr.fromDOMRectList(t, OQ(n, h + s, p.length).getClientRects()))), h += p.length;
    })) : d.push(new Ds(l, Jr.fromDOMRectList(t, w))) : (g = n.splitText(l.length), d.push(new Ds(l, Bb(t, n))), n = g) : ut.SUPPORT_RANGE_BOUNDS || (n = n.splitText(l.length)), s += l.length;
  }), d;
}, Bb = function(t, A) {
  var e = A.ownerDocument;
  if (e) {
    var e = e.createElement("html2canvaswrapper"), n = (e.appendChild(A.cloneNode(!0)), A.parentNode);
    if (n)
      return n.replaceChild(e, A), A = bl(t, e), e.firstChild && n.replaceChild(e.firstChild, e), A;
  }
  return Jr.EMPTY;
}, OQ = function(t, A, e) {
  var n = t.ownerDocument;
  if (n)
    return (n = n.createRange()).setStart(t, A), n.setEnd(t, A + e), n;
  throw new Error("Node has no owner document");
}, U0 = function(t) {
  var A;
  return ut.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (A = new Intl.Segmenter(void 0, { granularity: "grapheme" }), Array.from(A.segment(t)).map(function(e) {
    return e.segment;
  })) : rb(t);
}, lb = function(t, A) {
  var e;
  return ut.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (e = new Intl.Segmenter(void 0, { granularity: "word" }), Array.from(e.segment(t)).map(function(n) {
    return n.segment;
  })) : wb(t, A);
}, fb = function(t, A) {
  return A.letterSpacing !== 0 ? U0(t) : lb(t, A);
}, gb = [32, 160, 4961, 65792, 65793, 4153, 4241], wb = function(t, A) {
  for (var e, n = PD(t, { lineBreak: A.lineBreak, wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak }), i = []; !(e = n.next()).done; )
    (function() {
      var d, s;
      e.value && (d = e.value.slice(), d = Il(d), s = "", d.forEach(function(l) {
        gb.indexOf(l) === -1 ? s += Ie(l) : (s.length && i.push(s), i.push(Ie(l)), s = "");
      }), s.length) && i.push(s);
    })();
  return i;
}, Qb = function(t, A, e) {
  this.text = hb(A.data, e.textTransform), this.textBounds = cb(t, this.text, e, A);
}, hb = function(t, A) {
  switch (A) {
    case 1:
      return t.toLowerCase();
    case 3:
      return t.replace(Cb, Fb);
    case 2:
      return t.toUpperCase();
    default:
      return t;
  }
}, Cb = /(^|\s|:|-|\(|\))([a-z])/g, Fb = function(t, A, e) {
  return 0 < t.length ? A + e.toUpperCase() : t;
}, MC = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e.src = n.currentSrc || n.src, e.intrinsicWidth = n.naturalWidth, e.intrinsicHeight = n.naturalHeight, e.context.cache.addImage(e.src), e;
  }
  return Zn(A, t), A;
}(Qr), kC = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e.canvas = n, e.intrinsicWidth = n.width, e.intrinsicHeight = n.height, e;
  }
  return Zn(A, t), A;
}(Qr), GC = function(t) {
  function A(s, n) {
    var i = t.call(this, s, n) || this, d = new XMLSerializer(), s = bl(s, n);
    return n.setAttribute("width", s.width + "px"), n.setAttribute("height", s.height + "px"), i.svg = "data:image/svg+xml," + encodeURIComponent(d.serializeToString(n)), i.intrinsicWidth = n.width.baseVal.value, i.intrinsicHeight = n.height.baseVal.value, i.context.cache.addImage(i.svg), i;
  }
  return Zn(A, t), A;
}(Qr), VC = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e.value = n.value, e;
  }
  return Zn(A, t), A;
}(Qr), i0 = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e.start = n.start, e.reversed = typeof n.reversed == "boolean" && n.reversed === !0, e;
  }
  return Zn(A, t), A;
}(Qr), Ub = [{ type: 15, flags: 0, unit: "px", number: 3 }], pb = [{ type: 16, flags: 0, number: 50 }], mb = function(t) {
  return t.width > t.height ? new Jr(t.left + (t.width - t.height) / 2, t.top, t.height, t.height) : t.width < t.height ? new Jr(t.left, t.top + (t.height - t.width) / 2, t.width, t.width) : t;
}, Eb = function(t) {
  var A = t.type === Db ? new Array(t.value.length + 1).join("•") : t.value;
  return A.length === 0 ? t.placeholder || "" : A;
}, wl = "checkbox", Ql = "radio", Db = "password", TQ = 707406591, p0 = function(t) {
  function A(e, n) {
    var i = t.call(this, e, n) || this;
    switch (i.type = n.type.toLowerCase(), i.checked = n.checked, i.value = Eb(n), i.type !== wl && i.type !== Ql || (i.styles.backgroundColor = 3739148031, i.styles.borderTopColor = i.styles.borderRightColor = i.styles.borderBottomColor = i.styles.borderLeftColor = 2779096575, i.styles.borderTopWidth = i.styles.borderRightWidth = i.styles.borderBottomWidth = i.styles.borderLeftWidth = 1, i.styles.borderTopStyle = i.styles.borderRightStyle = i.styles.borderBottomStyle = i.styles.borderLeftStyle = 1, i.styles.backgroundClip = [0], i.styles.backgroundOrigin = [0], i.bounds = mb(i.bounds)), i.type) {
      case wl:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = Ub;
        break;
      case Ql:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = pb;
    }
    return i;
  }
  return Zn(A, t), A;
}(Qr), RC = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, n = n.options[n.selectedIndex || 0], e.value = n && n.text || "", e;
  }
  return Zn(A, t), A;
}(Qr), NC = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e.value = n.value, e;
  }
  return Zn(A, t), A;
}(Qr), PC = function(t) {
  function A(e, n) {
    var i, d, s = t.call(this, e, n) || this;
    s.src = n.src, s.width = parseInt(n.width, 10) || 0, s.height = parseInt(n.height, 10) || 0, s.backgroundColor = s.styles.backgroundColor;
    try {
      n.contentWindow && n.contentWindow.document && n.contentWindow.document.documentElement && (s.tree = XC(e, n.contentWindow.document.documentElement), i = n.contentWindow.document.documentElement ? ms(e, getComputedStyle(n.contentWindow.document.documentElement).backgroundColor) : Pr.TRANSPARENT, d = n.contentWindow.document.body ? ms(e, getComputedStyle(n.contentWindow.document.body).backgroundColor) : Pr.TRANSPARENT, s.backgroundColor = xu(i) ? xu(d) ? s.styles.backgroundColor : d : i);
    } catch {
    }
    return s;
  }
  return Zn(A, t), A;
}(Qr), Hb = ["OL", "UL", "MENU"], tl = function(t, A, e, n) {
  for (var i = A.firstChild; i; i = s) {
    var d, s = i.nextSibling;
    WC(i) && 0 < i.data.trim().length ? e.textNodes.push(new Qb(t, i, e.styles)) : pa(i) && (qC(i) && i.assignedNodes ? i.assignedNodes().forEach(function(l) {
      return tl(t, l, e, n);
    }) : (d = JC(t, i)).styles.isVisible() && (yb(i, d, n) ? d.flags |= 4 : bb(d.styles) && (d.flags |= 2), Hb.indexOf(i.tagName) !== -1 && (d.flags |= 8), e.elements.push(d), i.slot, i.shadowRoot ? tl(t, i.shadowRoot, d, n) : hl(i) || YC(i) || Cl(i) || tl(t, i, d, n)));
  }
}, JC = function(t, A) {
  return new (d0(A) ? MC : ZC(A) ? kC : YC(A) ? GC : Ib(A) ? VC : vb(A) ? i0 : Kb(A) ? p0 : Cl(A) ? RC : hl(A) ? NC : jC(A) ? PC : Qr)(t, A);
}, XC = function(t, A) {
  var e = JC(t, A);
  return e.flags |= 4, tl(t, A, e, e), e;
}, yb = function(t, A, e) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || m0(t) && e.styles.isTransparent();
}, bb = function(t) {
  return t.isPositioned() || t.isFloating();
}, WC = function(t) {
  return t.nodeType === Node.TEXT_NODE;
}, pa = function(t) {
  return t.nodeType === Node.ELEMENT_NODE;
}, a0 = function(t) {
  return pa(t) && t.style !== void 0 && !nl(t);
}, nl = function(t) {
  return typeof t.className == "object";
}, Ib = function(t) {
  return t.tagName === "LI";
}, vb = function(t) {
  return t.tagName === "OL";
}, Kb = function(t) {
  return t.tagName === "INPUT";
}, Lb = function(t) {
  return t.tagName === "HTML";
}, YC = function(t) {
  return t.tagName === "svg";
}, m0 = function(t) {
  return t.tagName === "BODY";
}, ZC = function(t) {
  return t.tagName === "CANVAS";
}, MQ = function(t) {
  return t.tagName === "VIDEO";
}, d0 = function(t) {
  return t.tagName === "IMG";
}, jC = function(t) {
  return t.tagName === "IFRAME";
}, kQ = function(t) {
  return t.tagName === "STYLE";
}, xb = function(t) {
  return t.tagName === "SCRIPT";
}, hl = function(t) {
  return t.tagName === "TEXTAREA";
}, Cl = function(t) {
  return t.tagName === "SELECT";
}, qC = function(t) {
  return t.tagName === "SLOT";
}, GQ = function(t) {
  return 0 < t.tagName.indexOf("-");
}, _b = function() {
  function t() {
    this.counters = {};
  }
  return t.prototype.getCounterValue = function(A) {
    return A = this.counters[A], A && A.length ? A[A.length - 1] : 1;
  }, t.prototype.getCounterValues = function(A) {
    return A = this.counters[A], A || [];
  }, t.prototype.pop = function(A) {
    var e = this;
    A.forEach(function(n) {
      return e.counters[n].pop();
    });
  }, t.prototype.parse = function(i) {
    var e = this, n = i.counterIncrement, i = i.counterReset, d = !0, s = (n !== null && n.forEach(function(l) {
      var w = e.counters[l.counter];
      w && l.increment !== 0 && (d = !1, w.length || w.push(1), w[Math.max(0, w.length - 1)] += l.increment);
    }), []);
    return d && i.forEach(function(l) {
      var w = e.counters[l.counter];
      s.push(l.counter), (w = w || (e.counters[l.counter] = [])).push(l.reset);
    }), s;
  }, t;
}(), VQ = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, RQ = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] }, Sb = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] }, Ob = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] }, Ba = function(t, A, e, n, i, d) {
  return t < A || e < t ? xs(t, i, 0 < d.length) : n.integers.reduce(function(s, l, w) {
    for (; l <= t; )
      t -= l, s += n.values[w];
    return s;
  }, "") + d;
}, zC = function(t, A, e, n) {
  for (var i = ""; e || t--, i = n(t) + i, A <= (t /= A) * A; )
    ;
  return i;
}, ye = function(t, A, e, n, i) {
  var d = e - A + 1;
  return (t < 0 ? "-" : "") + (zC(Math.abs(t), d, n, function(s) {
    return Ie(Math.floor(s % d) + A);
  }) + i);
}, ko = function(t, A, e) {
  e === void 0 && (e = ". ");
  var n = A.length;
  return zC(Math.abs(t), n, !1, function(i) {
    return A[Math.floor(i % n)];
  }) + e;
}, Ca = 1, hu = 2, Cu = 4, fs = 8, Rr = function(t, A, e, n, i, d) {
  if (t < -9999 || 9999 < t)
    return xs(t, 4, 0 < i.length);
  var s = Math.abs(t), l = i;
  if (s === 0)
    return A[0] + l;
  for (var w = 0; 0 < s && w <= 4; w++) {
    var h = s % 10;
    h == 0 && Je(d, Ca) && l !== "" ? l = A[h] + l : 1 < h || h == 1 && w === 0 || h == 1 && w === 1 && Je(d, hu) || h == 1 && w === 1 && Je(d, Cu) && 100 < t || h == 1 && 1 < w && Je(d, fs) ? l = A[h] + (0 < w ? e[w - 1] : "") + l : h == 1 && 0 < w && (l = e[w - 1] + l), s = Math.floor(s / 10);
  }
  return (t < 0 ? n : "") + l;
}, NQ = "十百千萬", PQ = "拾佰仟萬", JQ = "マイナス", mg = "마이너스", xs = function(t, A, e) {
  var n = e ? ". " : "", i = e ? "、" : "", d = e ? ", " : "", s = e ? " " : "";
  switch (A) {
    case 0:
      return "•" + s;
    case 1:
      return "◦" + s;
    case 2:
      return "◾" + s;
    case 5:
      var l = ye(t, 48, 57, !0, n);
      return l.length < 4 ? "0" + l : l;
    case 4:
      return ko(t, "〇一二三四五六七八九", i);
    case 6:
      return Ba(t, 1, 3999, VQ, 3, n).toLowerCase();
    case 7:
      return Ba(t, 1, 3999, VQ, 3, n);
    case 8:
      return ye(t, 945, 969, !1, n);
    case 9:
      return ye(t, 97, 122, !1, n);
    case 10:
      return ye(t, 65, 90, !1, n);
    case 11:
      return ye(t, 1632, 1641, !0, n);
    case 12:
    case 49:
      return Ba(t, 1, 9999, RQ, 3, n);
    case 35:
      return Ba(t, 1, 9999, RQ, 3, n).toLowerCase();
    case 13:
      return ye(t, 2534, 2543, !0, n);
    case 14:
    case 30:
      return ye(t, 6112, 6121, !0, n);
    case 15:
      return ko(t, "子丑寅卯辰巳午未申酉戌亥", i);
    case 16:
      return ko(t, "甲乙丙丁戊己庚辛壬癸", i);
    case 17:
    case 48:
      return Rr(t, "零一二三四五六七八九", NQ, "負", i, hu | Cu | fs);
    case 47:
      return Rr(t, "零壹貳參肆伍陸柒捌玖", PQ, "負", i, Ca | hu | Cu | fs);
    case 42:
      return Rr(t, "零一二三四五六七八九", NQ, "负", i, hu | Cu | fs);
    case 41:
      return Rr(t, "零壹贰叁肆伍陆柒捌玖", PQ, "负", i, Ca | hu | Cu | fs);
    case 26:
      return Rr(t, "〇一二三四五六七八九", "十百千万", JQ, i, 0);
    case 25:
      return Rr(t, "零壱弐参四伍六七八九", "拾百千万", JQ, i, Ca | hu | Cu);
    case 31:
      return Rr(t, "영일이삼사오육칠팔구", "십백천만", mg, d, Ca | hu | Cu);
    case 33:
      return Rr(t, "零一二三四五六七八九", "十百千萬", mg, d, 0);
    case 32:
      return Rr(t, "零壹貳參四五六七八九", "拾百千", mg, d, Ca | hu | Cu);
    case 18:
      return ye(t, 2406, 2415, !0, n);
    case 20:
      return Ba(t, 1, 19999, Ob, 3, n);
    case 21:
      return ye(t, 2790, 2799, !0, n);
    case 22:
      return ye(t, 2662, 2671, !0, n);
    case 22:
      return Ba(t, 1, 10999, Sb, 3, n);
    case 23:
      return ko(t, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return ko(t, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return ye(t, 3302, 3311, !0, n);
    case 28:
      return ko(t, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", i);
    case 29:
      return ko(t, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", i);
    case 34:
      return ye(t, 3792, 3801, !0, n);
    case 37:
      return ye(t, 6160, 6169, !0, n);
    case 38:
      return ye(t, 4160, 4169, !0, n);
    case 39:
      return ye(t, 2918, 2927, !0, n);
    case 40:
      return ye(t, 1776, 1785, !0, n);
    case 43:
      return ye(t, 3046, 3055, !0, n);
    case 44:
      return ye(t, 3174, 3183, !0, n);
    case 45:
      return ye(t, 3664, 3673, !0, n);
    case 46:
      return ye(t, 3872, 3881, !0, n);
    default:
      return ye(t, 48, 57, !0, n);
  }
}, $C = "data-html2canvas-ignore", XQ = function() {
  function t(A, e, n) {
    if (this.context = A, this.options = n, this.scrolledElements = [], this.referenceElement = e, this.counters = new _b(), this.quoteDepth = 0, !e.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    this.documentElement = this.cloneNode(e.ownerDocument.documentElement, !1);
  }
  return t.prototype.toIFrame = function(A, e) {
    var n, i, d, s, l = this, w = Tb(A, e);
    return w.contentWindow ? (n = A.defaultView.pageXOffset, A = A.defaultView.pageYOffset, i = w.contentWindow, d = i.document, s = Gb(w).then(function() {
      return yt(l, void 0, void 0, function() {
        var h, g;
        return Qt(this, function(p) {
          switch (p.label) {
            case 0:
              return this.scrolledElements.forEach(Pb), i && (i.scrollTo(e.left, e.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || i.scrollY === e.top && i.scrollX === e.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(i.scrollX - e.left, i.scrollY - e.top, 0, 0))), h = this.options.onclone, (g = this.clonedReferenceElement) === void 0 ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : d.fonts && d.fonts.ready ? [4, d.fonts.ready] : [3, 2];
            case 1:
              p.sent(), p.label = 2;
            case 2:
              return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, kb(d)] : [3, 4];
            case 3:
              p.sent(), p.label = 4;
            case 4:
              return typeof h == "function" ? [2, Promise.resolve().then(function() {
                return h(d, g);
              }).then(function() {
                return w;
              })] : [2, w];
          }
        });
      });
    }), d.open(), d.write(Rb(document.doctype) + "<html></html>"), Nb(this.referenceElement.ownerDocument, n, A), d.replaceChild(d.adoptNode(this.documentElement), d.documentElement), d.close(), s) : Promise.reject("Unable to find iframe window");
  }, t.prototype.createElementClone = function(A) {
    var e;
    return u0(A, 2), ZC(A) ? this.createCanvasClone(A) : MQ(A) ? this.createVideoClone(A) : kQ(A) ? this.createStyleClone(A) : (e = A.cloneNode(!1), d0(e) && (d0(A) && A.currentSrc && A.currentSrc !== A.src && (e.src = A.currentSrc, e.srcset = ""), e.loading === "lazy") && (e.loading = "eager"), GQ(e) ? this.createCustomElementClone(e) : e);
  }, t.prototype.createCustomElementClone = function(A) {
    var e = document.createElement("html2canvascustomelement");
    return Eg(A.style, e), e;
  }, t.prototype.createStyleClone = function(A) {
    try {
      var e, n, i = A.sheet;
      if (i && i.cssRules)
        return e = [].slice.call(i.cssRules, 0).reduce(function(d, s) {
          return s && typeof s.cssText == "string" ? d + s.cssText : d;
        }, ""), (n = A.cloneNode(!1)).textContent = e, n;
    } catch (d) {
      if (this.context.logger.error("Unable to access cssRules property", d), d.name !== "SecurityError")
        throw d;
    }
    return A.cloneNode(!1);
  }, t.prototype.createCanvasClone = function(A) {
    var e;
    if (this.options.inlineImages && A.ownerDocument) {
      var n = A.ownerDocument.createElement("img");
      try {
        return n.src = A.toDataURL(), n;
      } catch {
        this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
      }
    }
    n = A.cloneNode(!1);
    try {
      n.width = A.width, n.height = A.height;
      var i, d, s = A.getContext("2d"), l = n.getContext("2d");
      l && (!this.options.allowTaint && s ? l.putImageData(s.getImageData(0, 0, A.width, A.height), 0, 0) : ((i = (e = A.getContext("webgl2")) != null ? e : A.getContext("webgl")) && ((d = i.getContextAttributes()) == null ? void 0 : d.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A), l.drawImage(A, 0, 0)));
    } catch {
      this.context.logger.info("Unable to clone canvas as it is tainted", A);
    }
    return n;
  }, t.prototype.createVideoClone = function(A) {
    var e = A.ownerDocument.createElement("canvas"), n = (e.width = A.offsetWidth, e.height = A.offsetHeight, e.getContext("2d"));
    try {
      return n && (n.drawImage(A, 0, 0, e.width, e.height), this.options.allowTaint || n.getImageData(0, 0, e.width, e.height)), e;
    } catch {
      this.context.logger.info("Unable to clone video as it is tainted", A);
    }
    return n = A.ownerDocument.createElement("canvas"), n.width = A.offsetWidth, n.height = A.offsetHeight, n;
  }, t.prototype.appendChildNode = function(A, e, n) {
    pa(e) && (xb(e) || e.hasAttribute($C) || typeof this.options.ignoreElements == "function" && this.options.ignoreElements(e)) || this.options.copyStyles && pa(e) && kQ(e) || A.appendChild(this.cloneNode(e, n));
  }, t.prototype.cloneChildNodes = function(A, e, n) {
    for (var i, d = this, s = (A.shadowRoot || A).firstChild; s; s = s.nextSibling)
      pa(s) && qC(s) && typeof s.assignedNodes == "function" ? (i = s.assignedNodes()).length && i.forEach(function(l) {
        return d.appendChildNode(e, l, n);
      }) : this.appendChildNode(e, s, n);
  }, t.prototype.cloneNode = function(A, e) {
    var n, i, d, s, l;
    return WC(A) ? document.createTextNode(A.data) : A.ownerDocument && (d = A.ownerDocument.defaultView) && pa(A) && (a0(A) || nl(A)) ? ((n = this.createElementClone(A)).style.transitionProperty = "none", i = d.getComputedStyle(A), l = d.getComputedStyle(A, ":before"), d = d.getComputedStyle(A, ":after"), this.referenceElement === A && a0(n) && (this.clonedReferenceElement = n), m0(n) && Wb(n), s = this.counters.parse(new UQ(this.context, i)), l = this.resolvePseudoContent(A, n, l, Es.BEFORE), GQ(A) && (e = !0), MQ(A) || this.cloneChildNodes(A, n, e), l && n.insertBefore(l, n.firstChild), (l = this.resolvePseudoContent(A, n, d, Es.AFTER)) && n.appendChild(l), this.counters.pop(s), (i && (this.options.copyStyles || nl(A)) && !jC(A) || e) && Eg(i, n), A.scrollTop === 0 && A.scrollLeft === 0 || this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (hl(A) || Cl(A)) && (hl(n) || Cl(n)) && (n.value = A.value), n) : A.cloneNode(!1);
  }, t.prototype.resolvePseudoContent = function(A, e, n, i) {
    var d = this;
    if (n) {
      var s, l, w = n.content, h = e.ownerDocument;
      if (h && w && w !== "none" && w !== "-moz-alt-content" && n.display !== "none")
        return this.counters.parse(new UQ(this.context, n)), s = new v2(this.context, n), l = h.createElement("html2canvaspseudoelement"), Eg(n, l), s.content.forEach(function(g) {
          if (g.type === 0)
            l.appendChild(h.createTextNode(g.value));
          else if (g.type === 22) {
            var p = h.createElement("img");
            p.src = g.value, p.style.opacity = "1", l.appendChild(p);
          } else if (g.type === 18) {
            var K, _, S, v;
            g.name === "attr" ? (p = g.values.filter(te)).length && l.appendChild(h.createTextNode(A.getAttribute(p[0].value) || "")) : g.name === "counter" ? (S = (p = g.values.filter(ya))[0], v = p[1], S && te(S) && (p = d.counters.getCounterValue(S.value), K = v && te(v) ? r0.parse(d.context, v.value) : 3, l.appendChild(h.createTextNode(xs(p, K, !1))))) : g.name === "counters" && (S = (p = g.values.filter(ya))[0], K = p[1], v = p[2], S) && te(S) && (p = d.counters.getCounterValues(S.value), _ = v && te(v) ? r0.parse(d.context, v.value) : 3, S = K && K.type === 0 ? K.value : "", v = p.map(function(M) {
              return xs(M, _, !1);
            }).join(S), l.appendChild(h.createTextNode(v)));
          } else if (g.type === 20)
            switch (g.value) {
              case "open-quote":
                l.appendChild(h.createTextNode(FQ(s.quotes, d.quoteDepth++, !0)));
                break;
              case "close-quote":
                l.appendChild(h.createTextNode(FQ(s.quotes, --d.quoteDepth, !1)));
                break;
              default:
                l.appendChild(h.createTextNode(g.value));
            }
        }), l.className = s0 + " " + c0, w = i === Es.BEFORE ? " " + s0 : " " + c0, nl(e) ? e.className.baseValue += w : e.className += w, l;
    }
  }, t.destroy = function(A) {
    return !!A.parentNode && (A.parentNode.removeChild(A), !0);
  }, t;
}(), Tb = (function(t) {
  t[t.BEFORE = 0] = "BEFORE", t[t.AFTER = 1] = "AFTER";
}(Es = Es || {}), function(t, A) {
  var e = t.createElement("iframe");
  return e.className = "html2canvas-container", e.style.visibility = "hidden", e.style.position = "fixed", e.style.left = "-10000px", e.style.top = "0px", e.style.border = "0", e.width = A.width.toString(), e.height = A.height.toString(), e.scrolling = "no", e.setAttribute($C, "true"), t.body.appendChild(e), e;
}), Mb = function(t) {
  return new Promise(function(A) {
    !t.complete && t.src ? (t.onload = A, t.onerror = A) : A();
  });
}, kb = function(t) {
  return Promise.all([].slice.call(t.images, 0).map(Mb));
}, Gb = function(t) {
  return new Promise(function(A, e) {
    var n = t.contentWindow;
    if (!n)
      return e("No window assigned for iframe");
    var i = n.document;
    n.onload = t.onload = function() {
      n.onload = t.onload = null;
      var d = setInterval(function() {
        0 < i.body.childNodes.length && i.readyState === "complete" && (clearInterval(d), A(t));
      }, 50);
    };
  });
}, Vb = ["all", "d", "content"], Eg = function(t, A) {
  for (var e = t.length - 1; 0 <= e; e--) {
    var n = t.item(e);
    Vb.indexOf(n) === -1 && A.style.setProperty(n, t.getPropertyValue(n));
  }
  return A;
}, Rb = function(t) {
  var A = "";
  return t && (A += "<!DOCTYPE ", t.name && (A += t.name), t.internalSubset && (A += t.internalSubset), t.publicId && (A += '"' + t.publicId + '"'), t.systemId && (A += '"' + t.systemId + '"'), A += ">"), A;
}, Nb = function(t, A, e) {
  t && t.defaultView && (A !== t.defaultView.pageXOffset || e !== t.defaultView.pageYOffset) && t.defaultView.scrollTo(A, e);
}, Pb = function(n) {
  var A = n[0], e = n[1], n = n[2];
  A.scrollLeft = e, A.scrollTop = n;
}, Jb = ":before", Xb = ":after", s0 = "___html2canvas___pseudoelement_before", c0 = "___html2canvas___pseudoelement_after", WQ = `{
    content: "" !important;
    display: none !important;
}`, Wb = function(t) {
  Yb(t, "." + s0 + Jb + WQ + `
         .` + c0 + Xb + WQ);
}, Yb = function(t, A) {
  var e = t.ownerDocument;
  e && ((e = e.createElement("style")).textContent = A, t.appendChild(e));
}, AF = function() {
  function t() {
  }
  return t.getOrigin = function(A) {
    var e = t._link;
    return e ? (e.href = A, e.href = e.href, e.protocol + e.hostname + e.port) : "about:blank";
  }, t.isSameOrigin = function(A) {
    return t.getOrigin(A) === t._origin;
  }, t.setContext = function(A) {
    t._link = A.document.createElement("a"), t._origin = t.getOrigin(A.location.href);
  }, t._origin = "about:blank", t;
}(), Zb = function() {
  function t(A, e) {
    this.context = A, this._options = e, this._cache = {};
  }
  return t.prototype.addImage = function(A) {
    var e = Promise.resolve();
    return this.has(A) || (Hg(A) || $b(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
    }), e;
  }, t.prototype.match = function(A) {
    return this._cache[A];
  }, t.prototype.loadImage = function(A) {
    return yt(this, void 0, void 0, function() {
      var e, n, i, d, s = this;
      return Qt(this, function(l) {
        switch (l.label) {
          case 0:
            return e = AF.isSameOrigin(A), n = !Dg(A) && this._options.useCORS === !0 && ut.SUPPORT_CORS_IMAGES && !e, i = !Dg(A) && !e && !Hg(A) && typeof this._options.proxy == "string" && ut.SUPPORT_CORS_XHR && !n, e || this._options.allowTaint !== !1 || Dg(A) || Hg(A) || i || n ? (d = A, i ? [4, this.proxy(d)] : [3, 2]) : [2];
          case 1:
            d = l.sent(), l.label = 2;
          case 2:
            return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(w, h) {
              var g = new Image();
              g.onload = function() {
                return w(g);
              }, g.onerror = h, (AI(d) || n) && (g.crossOrigin = "anonymous"), g.src = d, g.complete === !0 && setTimeout(function() {
                return w(g);
              }, 500), 0 < s._options.imageTimeout && setTimeout(function() {
                return h("Timed out (" + s._options.imageTimeout + "ms) loading image");
              }, s._options.imageTimeout);
            })];
          case 3:
            return [2, l.sent()];
        }
      });
    });
  }, t.prototype.has = function(A) {
    return this._cache[A] !== void 0;
  }, t.prototype.keys = function() {
    return Promise.resolve(Object.keys(this._cache));
  }, t.prototype.proxy = function(A) {
    var e, n = this, i = this._options.proxy;
    if (i)
      return e = A.substring(0, 256), new Promise(function(d, s) {
        var l, w = ut.SUPPORT_RESPONSE_TYPE ? "blob" : "text", h = new XMLHttpRequest(), g = (h.onload = function() {
          var p;
          h.status === 200 ? w == "text" ? d(h.response) : ((p = new FileReader()).addEventListener("load", function() {
            return d(p.result);
          }, !1), p.addEventListener("error", function(K) {
            return s(K);
          }, !1), p.readAsDataURL(h.response)) : s("Failed to proxy resource " + e + " with status code " + h.status);
        }, h.onerror = s, -1 < i.indexOf("?") ? "&" : "?");
        h.open("GET", i + g + "url=" + encodeURIComponent(A) + "&responseType=" + w), w != "text" && h instanceof XMLHttpRequest && (h.responseType = w), n._options.imageTimeout && (l = n._options.imageTimeout, h.timeout = l, h.ontimeout = function() {
          return s("Timed out (" + l + "ms) proxying " + e);
        }), h.send();
      });
    throw new Error("No proxy defined");
  }, t;
}(), jb = /^data:image\/svg\+xml/i, qb = /^data:image\/.*;base64,/i, zb = /^data:image\/.*/i, $b = function(t) {
  return ut.SUPPORT_SVG_DRAWING || !eI(t);
}, Dg = function(t) {
  return zb.test(t);
}, AI = function(t) {
  return qb.test(t);
}, Hg = function(t) {
  return t.substr(0, 4) === "blob";
}, eI = function(t) {
  return t.substr(-3).toLowerCase() === "svg" || jb.test(t);
}, nA = function() {
  function t(A, e) {
    this.type = 0, this.x = A, this.y = e;
  }
  return t.prototype.add = function(A, e) {
    return new t(this.x + A, this.y + e);
  }, t;
}(), la = function(t, A, e) {
  return new nA(t.x + (A.x - t.x) * e, t.y + (A.y - t.y) * e);
}, NB = function() {
  function t(A, e, n, i) {
    this.type = 1, this.start = A, this.startControl = e, this.endControl = n, this.end = i;
  }
  return t.prototype.subdivide = function(l, e) {
    var n = la(this.start, this.startControl, l), s = la(this.startControl, this.endControl, l), i = la(this.endControl, this.end, l), d = la(n, s, l), s = la(s, i, l), l = la(d, s, l);
    return e ? new t(this.start, n, d, l) : new t(l, s, i, this.end);
  }, t.prototype.add = function(A, e) {
    return new t(this.start.add(A, e), this.startControl.add(A, e), this.endControl.add(A, e), this.end.add(A, e));
  }, t.prototype.reverse = function() {
    return new t(this.end, this.endControl, this.startControl, this.start);
  }, t;
}(), Hn = function(t) {
  return t.type === 1;
}, tI = function(t) {
  var J = t.styles, A = t.bounds, e = (n = Bs(J.borderTopLeftRadius, A.width, A.height))[0], n = n[1], i = (d = Bs(J.borderTopRightRadius, A.width, A.height))[0], d = d[1], s = (l = Bs(J.borderBottomRightRadius, A.width, A.height))[0], l = l[1], w = (h = Bs(J.borderBottomLeftRadius, A.width, A.height))[0], h = h[1];
  (g = []).push((e + i) / A.width), g.push((w + s) / A.width), g.push((n + h) / A.height), g.push((d + l) / A.height), 1 < (g = Math.max.apply(Math, g)) && (e /= g, n /= g, i /= g, d /= g, s /= g, l /= g, w /= g, h /= g);
  var g = A.width - i, p = A.height - l, K = A.width - s, _ = A.height - h, S = J.borderTopWidth, v = J.borderRightWidth, M = J.borderBottomWidth, k = J.borderLeftWidth, X = de(J.paddingTop, t.bounds.width), iA = de(J.paddingRight, t.bounds.width), z = de(J.paddingBottom, t.bounds.width), J = de(J.paddingLeft, t.bounds.width);
  this.topLeftBorderDoubleOuterBox = 0 < e || 0 < n ? fe(A.left + k / 3, A.top + S / 3, e - k / 3, n - S / 3, qA.TOP_LEFT) : new nA(A.left + k / 3, A.top + S / 3), this.topRightBorderDoubleOuterBox = 0 < e || 0 < n ? fe(A.left + g, A.top + S / 3, i - v / 3, d - S / 3, qA.TOP_RIGHT) : new nA(A.left + A.width - v / 3, A.top + S / 3), this.bottomRightBorderDoubleOuterBox = 0 < s || 0 < l ? fe(A.left + K, A.top + p, s - v / 3, l - M / 3, qA.BOTTOM_RIGHT) : new nA(A.left + A.width - v / 3, A.top + A.height - M / 3), this.bottomLeftBorderDoubleOuterBox = 0 < w || 0 < h ? fe(A.left + k / 3, A.top + _, w - k / 3, h - M / 3, qA.BOTTOM_LEFT) : new nA(A.left + k / 3, A.top + A.height - M / 3), this.topLeftBorderDoubleInnerBox = 0 < e || 0 < n ? fe(A.left + 2 * k / 3, A.top + 2 * S / 3, e - 2 * k / 3, n - 2 * S / 3, qA.TOP_LEFT) : new nA(A.left + 2 * k / 3, A.top + 2 * S / 3), this.topRightBorderDoubleInnerBox = 0 < e || 0 < n ? fe(A.left + g, A.top + 2 * S / 3, i - 2 * v / 3, d - 2 * S / 3, qA.TOP_RIGHT) : new nA(A.left + A.width - 2 * v / 3, A.top + 2 * S / 3), this.bottomRightBorderDoubleInnerBox = 0 < s || 0 < l ? fe(A.left + K, A.top + p, s - 2 * v / 3, l - 2 * M / 3, qA.BOTTOM_RIGHT) : new nA(A.left + A.width - 2 * v / 3, A.top + A.height - 2 * M / 3), this.bottomLeftBorderDoubleInnerBox = 0 < w || 0 < h ? fe(A.left + 2 * k / 3, A.top + _, w - 2 * k / 3, h - 2 * M / 3, qA.BOTTOM_LEFT) : new nA(A.left + 2 * k / 3, A.top + A.height - 2 * M / 3), this.topLeftBorderStroke = 0 < e || 0 < n ? fe(A.left + k / 2, A.top + S / 2, e - k / 2, n - S / 2, qA.TOP_LEFT) : new nA(A.left + k / 2, A.top + S / 2), this.topRightBorderStroke = 0 < e || 0 < n ? fe(A.left + g, A.top + S / 2, i - v / 2, d - S / 2, qA.TOP_RIGHT) : new nA(A.left + A.width - v / 2, A.top + S / 2), this.bottomRightBorderStroke = 0 < s || 0 < l ? fe(A.left + K, A.top + p, s - v / 2, l - M / 2, qA.BOTTOM_RIGHT) : new nA(A.left + A.width - v / 2, A.top + A.height - M / 2), this.bottomLeftBorderStroke = 0 < w || 0 < h ? fe(A.left + k / 2, A.top + _, w - k / 2, h - M / 2, qA.BOTTOM_LEFT) : new nA(A.left + k / 2, A.top + A.height - M / 2), this.topLeftBorderBox = 0 < e || 0 < n ? fe(A.left, A.top, e, n, qA.TOP_LEFT) : new nA(A.left, A.top), this.topRightBorderBox = 0 < i || 0 < d ? fe(A.left + g, A.top, i, d, qA.TOP_RIGHT) : new nA(A.left + A.width, A.top), this.bottomRightBorderBox = 0 < s || 0 < l ? fe(A.left + K, A.top + p, s, l, qA.BOTTOM_RIGHT) : new nA(A.left + A.width, A.top + A.height), this.bottomLeftBorderBox = 0 < w || 0 < h ? fe(A.left, A.top + _, w, h, qA.BOTTOM_LEFT) : new nA(A.left, A.top + A.height), this.topLeftPaddingBox = 0 < e || 0 < n ? fe(A.left + k, A.top + S, Math.max(0, e - k), Math.max(0, n - S), qA.TOP_LEFT) : new nA(A.left + k, A.top + S), this.topRightPaddingBox = 0 < i || 0 < d ? fe(A.left + Math.min(g, A.width - v), A.top + S, g > A.width + v ? 0 : Math.max(0, i - v), Math.max(0, d - S), qA.TOP_RIGHT) : new nA(A.left + A.width - v, A.top + S), this.bottomRightPaddingBox = 0 < s || 0 < l ? fe(A.left + Math.min(K, A.width - k), A.top + Math.min(p, A.height - M), Math.max(0, s - v), Math.max(0, l - M), qA.BOTTOM_RIGHT) : new nA(A.left + A.width - v, A.top + A.height - M), this.bottomLeftPaddingBox = 0 < w || 0 < h ? fe(A.left + k, A.top + Math.min(_, A.height - M), Math.max(0, w - k), Math.max(0, h - M), qA.BOTTOM_LEFT) : new nA(A.left + k, A.top + A.height - M), this.topLeftContentBox = 0 < e || 0 < n ? fe(A.left + k + J, A.top + S + X, Math.max(0, e - (k + J)), Math.max(0, n - (S + X)), qA.TOP_LEFT) : new nA(A.left + k + J, A.top + S + X), this.topRightContentBox = 0 < i || 0 < d ? fe(A.left + Math.min(g, A.width + k + J), A.top + S + X, g > A.width + k + J ? 0 : i - k + J, d - (S + X), qA.TOP_RIGHT) : new nA(A.left + A.width - (v + iA), A.top + S + X), this.bottomRightContentBox = 0 < s || 0 < l ? fe(A.left + Math.min(K, A.width - (k + J)), A.top + Math.min(p, A.height + S + X), Math.max(0, s - (v + iA)), l - (M + z), qA.BOTTOM_RIGHT) : new nA(A.left + A.width - (v + iA), A.top + A.height - (M + z)), this.bottomLeftContentBox = 0 < w || 0 < h ? fe(A.left + k + J, A.top + _, Math.max(0, w - (k + J)), h - (M + z), qA.BOTTOM_LEFT) : new nA(A.left + k + J, A.top + A.height - (M + z));
}, fe = (function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 1] = "TOP_RIGHT", t[t.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", t[t.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
}(qA = qA || {}), function(t, A, e, n, i) {
  var d = (Math.sqrt(2) - 1) / 3 * 4, s = e * d, l = n * d, w = t + e, h = A + n;
  switch (i) {
    case qA.TOP_LEFT:
      return new NB(new nA(t, h), new nA(t, h - l), new nA(w - s, A), new nA(w, A));
    case qA.TOP_RIGHT:
      return new NB(new nA(t, A), new nA(t + s, A), new nA(w, h - l), new nA(w, h));
    case qA.BOTTOM_RIGHT:
      return new NB(new nA(w, A), new nA(w, A + l), new nA(t + s, h), new nA(t, h));
    default:
      return qA.BOTTOM_LEFT, new NB(new nA(w, h), new nA(w - s, h), new nA(t, A + l), new nA(t, A));
  }
}), Fl = function(t) {
  return [t.topLeftBorderBox, t.topRightBorderBox, t.bottomRightBorderBox, t.bottomLeftBorderBox];
}, nI = function(t) {
  return [t.topLeftContentBox, t.topRightContentBox, t.bottomRightContentBox, t.bottomLeftContentBox];
}, Ul = function(t) {
  return [t.topLeftPaddingBox, t.topRightPaddingBox, t.bottomRightPaddingBox, t.bottomLeftPaddingBox];
}, rI = function(t, A, e) {
  this.offsetX = t, this.offsetY = A, this.matrix = e, this.type = 0, this.target = 6;
}, PB = function(t, A) {
  this.path = t, this.target = A, this.type = 1;
}, uI = function(t) {
  this.opacity = t, this.type = 2, this.target = 6;
}, oI = function(t) {
  return t.type === 0;
}, eF = function(t) {
  return t.type === 1;
}, iI = function(t) {
  return t.type === 2;
}, YQ = function(t, A) {
  return t.length === A.length && t.some(function(e, n) {
    return e === A[n];
  });
}, aI = function(t, A, e, n, i) {
  return t.map(function(d, s) {
    switch (s) {
      case 0:
        return d.add(A, e);
      case 1:
        return d.add(A + n, e);
      case 2:
        return d.add(A + n, e + i);
      case 3:
        return d.add(A, e + i);
    }
    return d;
  });
}, tF = function(t) {
  this.element = t, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
}, nF = function() {
  function t(A, e) {
    var n;
    this.container = A, this.parent = e, this.effects = [], this.curves = new tI(this.container), this.container.styles.opacity < 1 && this.effects.push(new uI(this.container.styles.opacity)), this.container.styles.transform !== null && (A = this.container.bounds.left + this.container.styles.transformOrigin[0].number, e = this.container.bounds.top + this.container.styles.transformOrigin[1].number, n = this.container.styles.transform, this.effects.push(new rI(A, e, n))), this.container.styles.overflowX !== 0 && (A = Fl(this.curves), e = Ul(this.curves), YQ(A, e) ? this.effects.push(new PB(A, 6)) : (this.effects.push(new PB(A, 2)), this.effects.push(new PB(e, 4))));
  }
  return t.prototype.getEffects = function(A) {
    for (var e = [2, 3].indexOf(this.container.styles.position) === -1, n = this.parent, i = this.effects.slice(0); n; ) {
      var d, s, l = n.effects.filter(function(w) {
        return !eF(w);
      });
      e || n.container.styles.position !== 0 || !n.parent ? (i.unshift.apply(i, l), e = [2, 3].indexOf(n.container.styles.position) === -1, n.container.styles.overflowX !== 0 && (d = Fl(n.curves), s = Ul(n.curves), YQ(d, s) || i.unshift(new PB(s, 6)))) : i.unshift.apply(i, l), n = n.parent;
    }
    return i.filter(function(w) {
      return Je(w.target, A);
    });
  }, t;
}(), B0 = function(t, A, e, n) {
  t.container.elements.forEach(function(i) {
    var d, s, l, w, h = Je(i.flags, 4), g = Je(i.flags, 2), p = new nF(i, t), K = (Je(i.styles.display, 2048) && n.push(p), Je(i.flags, 8) ? [] : n);
    h || g ? (g = h || i.styles.isPositioned() ? e : A, d = new tF(p), i.styles.isPositioned() || i.styles.opacity < 1 || i.styles.isTransformed() ? (s = i.styles.zIndex.order) < 0 ? (l = 0, g.negativeZIndex.some(function(_, S) {
      return s > _.element.container.styles.zIndex.order ? (l = S, !1) : 0 < l;
    }), g.negativeZIndex.splice(l, 0, d)) : 0 < s ? (w = 0, g.positiveZIndex.some(function(_, S) {
      return s >= _.element.container.styles.zIndex.order ? (w = S + 1, !1) : 0 < w;
    }), g.positiveZIndex.splice(w, 0, d)) : g.zeroOrAutoZIndexOrTransformedOrOpacity.push(d) : (i.styles.isFloating() ? g.nonPositionedFloats : g.nonPositionedInlineLevel).push(d), B0(p, d, h ? d : e, K)) : ((i.styles.isInlineLevel() ? A.inlineLevel : A.nonInlineLevel).push(p), B0(p, A, e, K)), Je(i.flags, 8) && rF(i, K);
  });
}, rF = function(t, A) {
  for (var e = t instanceof i0 ? t.start : 1, n = t instanceof i0 && t.reversed, i = 0; i < A.length; i++) {
    var d = A[i];
    d.container instanceof VC && typeof d.container.value == "number" && d.container.value !== 0 && (e = d.container.value), d.listValue = xs(e, d.container.styles.listStyleType, !0), e += n ? -1 : 1;
  }
}, dI = function(A) {
  var A = new nF(A, null), e = new tF(A), n = [];
  return B0(A, e, e, n), rF(A.container, n), e;
}, ZQ = function(t, A) {
  switch (A) {
    case 0:
      return Kn(t.topLeftBorderBox, t.topLeftPaddingBox, t.topRightBorderBox, t.topRightPaddingBox);
    case 1:
      return Kn(t.topRightBorderBox, t.topRightPaddingBox, t.bottomRightBorderBox, t.bottomRightPaddingBox);
    case 2:
      return Kn(t.bottomRightBorderBox, t.bottomRightPaddingBox, t.bottomLeftBorderBox, t.bottomLeftPaddingBox);
    default:
      return Kn(t.bottomLeftBorderBox, t.bottomLeftPaddingBox, t.topLeftBorderBox, t.topLeftPaddingBox);
  }
}, sI = function(t, A) {
  switch (A) {
    case 0:
      return Kn(t.topLeftBorderBox, t.topLeftBorderDoubleOuterBox, t.topRightBorderBox, t.topRightBorderDoubleOuterBox);
    case 1:
      return Kn(t.topRightBorderBox, t.topRightBorderDoubleOuterBox, t.bottomRightBorderBox, t.bottomRightBorderDoubleOuterBox);
    case 2:
      return Kn(t.bottomRightBorderBox, t.bottomRightBorderDoubleOuterBox, t.bottomLeftBorderBox, t.bottomLeftBorderDoubleOuterBox);
    default:
      return Kn(t.bottomLeftBorderBox, t.bottomLeftBorderDoubleOuterBox, t.topLeftBorderBox, t.topLeftBorderDoubleOuterBox);
  }
}, cI = function(t, A) {
  switch (A) {
    case 0:
      return Kn(t.topLeftBorderDoubleInnerBox, t.topLeftPaddingBox, t.topRightBorderDoubleInnerBox, t.topRightPaddingBox);
    case 1:
      return Kn(t.topRightBorderDoubleInnerBox, t.topRightPaddingBox, t.bottomRightBorderDoubleInnerBox, t.bottomRightPaddingBox);
    case 2:
      return Kn(t.bottomRightBorderDoubleInnerBox, t.bottomRightPaddingBox, t.bottomLeftBorderDoubleInnerBox, t.bottomLeftPaddingBox);
    default:
      return Kn(t.bottomLeftBorderDoubleInnerBox, t.bottomLeftPaddingBox, t.topLeftBorderDoubleInnerBox, t.topLeftPaddingBox);
  }
}, BI = function(t, A) {
  switch (A) {
    case 0:
      return JB(t.topLeftBorderStroke, t.topRightBorderStroke);
    case 1:
      return JB(t.topRightBorderStroke, t.bottomRightBorderStroke);
    case 2:
      return JB(t.bottomRightBorderStroke, t.bottomLeftBorderStroke);
    default:
      return JB(t.bottomLeftBorderStroke, t.topLeftBorderStroke);
  }
}, JB = function(t, A) {
  var e = [];
  return Hn(t) ? e.push(t.subdivide(0.5, !1)) : e.push(t), Hn(A) ? e.push(A.subdivide(0.5, !0)) : e.push(A), e;
}, Kn = function(t, A, e, n) {
  var i = [];
  return Hn(t) ? i.push(t.subdivide(0.5, !1)) : i.push(t), Hn(e) ? i.push(e.subdivide(0.5, !0)) : i.push(e), Hn(n) ? i.push(n.subdivide(0.5, !0).reverse()) : i.push(n), Hn(A) ? i.push(A.subdivide(0.5, !1).reverse()) : i.push(A), i;
}, uF = function(e) {
  var A = e.bounds, e = e.styles;
  return A.add(e.borderLeftWidth, e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth), -(e.borderTopWidth + e.borderBottomWidth));
}, pl = function(e) {
  var A = e.styles, e = e.bounds, n = de(A.paddingLeft, e.width), i = de(A.paddingRight, e.width), d = de(A.paddingTop, e.width), s = de(A.paddingBottom, e.width);
  return e.add(n + A.borderLeftWidth, d + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + n + i), -(A.borderTopWidth + A.borderBottomWidth + d + s));
}, lI = function(t, A) {
  return t === 0 ? A.bounds : (t === 2 ? pl : uF)(A);
}, fI = function(t, A) {
  return t === 0 ? A.bounds : (t === 2 ? pl : uF)(A);
}, yg = function(t, A, d) {
  var n = lI(Fa(t.styles.backgroundOrigin, A), t), i = fI(Fa(t.styles.backgroundClip, A), t), d = gI(Fa(t.styles.backgroundSize, A), d, n), s = d[0], l = d[1], w = Bs(Fa(t.styles.backgroundPosition, A), n.width - s, n.height - l);
  return [wI(Fa(t.styles.backgroundRepeat, A), w, d, n, i), Math.round(n.left + w[0]), Math.round(n.top + w[1]), s, l];
}, fa = function(t) {
  return te(t) && t.value === Ha.AUTO;
}, XB = function(t) {
  return typeof t == "number";
}, gI = function(l, d, e) {
  var n = d[0], i = d[1], d = d[2], s = l[0], l = l[1];
  if (!s)
    return [0, 0];
  if (Ge(s) && l && Ge(l))
    return [de(s, e.width), de(l, e.height)];
  var w = XB(d);
  if (te(s) && (s.value === Ha.CONTAIN || s.value === Ha.COVER))
    return XB(d) ? e.width / e.height < d != (s.value === Ha.COVER) ? [e.width, e.width / d] : [e.height * d, e.height] : [e.width, e.height];
  var h = XB(n), g = XB(i), p = h || g;
  if (fa(s) && (!l || fa(l)))
    return h && g ? [n, i] : w || p ? p && w ? [h ? n : i * d, g ? i : n / d] : [h ? n : e.width, g ? i : e.height] : [e.width, e.height];
  if (w)
    return w = p = 0, Ge(s) ? p = de(s, e.width) : Ge(l) && (w = de(l, e.height)), fa(s) ? p = w * d : l && !fa(l) || (w = p / d), [p, w];
  if (d = null, p = null, Ge(s) ? d = de(s, e.width) : l && Ge(l) && (p = de(l, e.height)), (d = (p = d === null || l && !fa(l) ? p : h && g ? d / n * i : e.height) !== null && fa(s) ? h && g ? p / i * n : e.width : d) !== null && p !== null)
    return [d, p];
  throw new Error("Unable to calculate background-size for element");
}, Fa = function(t, A) {
  return A = t[A], A === void 0 ? t[0] : A;
}, wI = function(t, A, e, n, i) {
  var d = A[0], s = A[1], l = e[0], w = e[1];
  switch (t) {
    case 2:
      return [new nA(Math.round(n.left), Math.round(n.top + s)), new nA(Math.round(n.left + n.width), Math.round(n.top + s)), new nA(Math.round(n.left + n.width), Math.round(w + n.top + s)), new nA(Math.round(n.left), Math.round(w + n.top + s))];
    case 3:
      return [new nA(Math.round(n.left + d), Math.round(n.top)), new nA(Math.round(n.left + d + l), Math.round(n.top)), new nA(Math.round(n.left + d + l), Math.round(n.height + n.top)), new nA(Math.round(n.left + d), Math.round(n.height + n.top))];
    case 1:
      return [new nA(Math.round(n.left + d), Math.round(n.top + s)), new nA(Math.round(n.left + d + l), Math.round(n.top + s)), new nA(Math.round(n.left + d + l), Math.round(n.top + s + w)), new nA(Math.round(n.left + d), Math.round(n.top + s + w))];
    default:
      return [new nA(Math.round(i.left), Math.round(i.top)), new nA(Math.round(i.left + i.width), Math.round(i.top)), new nA(Math.round(i.left + i.width), Math.round(i.height + i.top)), new nA(Math.round(i.left), Math.round(i.height + i.top))];
  }
}, QI = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", jQ = "Hidden Text", hI = function() {
  function t(A) {
    this._data = {}, this._document = A;
  }
  return t.prototype.parseMetrics = function(l, w) {
    var n = this._document.createElement("div"), i = this._document.createElement("img"), d = this._document.createElement("span"), s = this._document.body, l = (n.style.visibility = "hidden", n.style.fontFamily = l, n.style.fontSize = w, n.style.margin = "0", n.style.padding = "0", n.style.whiteSpace = "nowrap", s.appendChild(n), i.src = QI, i.width = 1, i.height = 1, i.style.margin = "0", i.style.padding = "0", i.style.verticalAlign = "baseline", d.style.fontFamily = l, d.style.fontSize = w, d.style.margin = "0", d.style.padding = "0", d.appendChild(this._document.createTextNode(jQ)), n.appendChild(d), n.appendChild(i), i.offsetTop - d.offsetTop + 2), w = (n.removeChild(d), n.appendChild(this._document.createTextNode(jQ)), n.style.lineHeight = "normal", i.style.verticalAlign = "super", i.offsetTop - n.offsetTop + 2);
    return s.removeChild(n), { baseline: l, middle: w };
  }, t.prototype.getMetrics = function(A, e) {
    var n = A + " " + e;
    return this._data[n] === void 0 && (this._data[n] = this.parseMetrics(A, e)), this._data[n];
  }, t;
}(), oF = function(t, A) {
  this.context = t, this.options = A;
}, CI = 1e4, FI = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e._activeEffects = [], e.canvas = n.canvas || document.createElement("canvas"), e.ctx = e.canvas.getContext("2d"), n.canvas || (e.canvas.width = Math.floor(n.width * n.scale), e.canvas.height = Math.floor(n.height * n.scale), e.canvas.style.width = n.width + "px", e.canvas.style.height = n.height + "px"), e.fontMetrics = new hI(document), e.ctx.scale(e.options.scale, e.options.scale), e.ctx.translate(-n.x, -n.y), e.ctx.textBaseline = "bottom", e._activeEffects = [], e.context.logger.debug("Canvas renderer initialized (" + n.width + "x" + n.height + ") with scale " + n.scale), e;
  }
  return Zn(A, t), A.prototype.applyEffects = function(e) {
    for (var n = this; this._activeEffects.length; )
      this.popEffect();
    e.forEach(function(i) {
      return n.applyEffect(i);
    });
  }, A.prototype.applyEffect = function(e) {
    this.ctx.save(), iI(e) && (this.ctx.globalAlpha = e.opacity), oI(e) && (this.ctx.translate(e.offsetX, e.offsetY), this.ctx.transform(e.matrix[0], e.matrix[1], e.matrix[2], e.matrix[3], e.matrix[4], e.matrix[5]), this.ctx.translate(-e.offsetX, -e.offsetY)), eF(e) && (this.path(e.path), this.ctx.clip()), this._activeEffects.push(e);
  }, A.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, A.prototype.renderStack = function(e) {
    return yt(this, void 0, void 0, function() {
      return Qt(this, function(n) {
        switch (n.label) {
          case 0:
            return e.element.container.styles.isVisible() ? [4, this.renderStackContent(e)] : [3, 2];
          case 1:
            n.sent(), n.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, A.prototype.renderNode = function(e) {
    return yt(this, void 0, void 0, function() {
      return Qt(this, function(n) {
        switch (n.label) {
          case 0:
            return Je(e.container.flags, 16), e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
          case 1:
            return n.sent(), [4, this.renderNodeContent(e)];
          case 2:
            n.sent(), n.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, A.prototype.renderTextWithLetterSpacing = function(e, n, i) {
    var d = this;
    n === 0 ? this.ctx.fillText(e.text, e.bounds.left, e.bounds.top + i) : U0(e.text).reduce(function(s, l) {
      return d.ctx.fillText(l, s, e.bounds.top + i), s + d.ctx.measureText(l).width;
    }, e.bounds.left);
  }, A.prototype.createFontStyle = function(e) {
    var n = e.fontVariant.filter(function(s) {
      return s === "normal" || s === "small-caps";
    }).join(""), i = DI(e.fontFamily).join(", "), d = ps(e.fontSize) ? "" + e.fontSize.number + e.fontSize.unit : e.fontSize.number + "px";
    return [[e.fontStyle, n, e.fontWeight, d, i].join(" "), i, d];
  }, A.prototype.renderTextNode = function(e, n) {
    return yt(this, void 0, void 0, function() {
      var i, d, s, l, w, h, g = this;
      return Qt(this, function(p) {
        return d = this.createFontStyle(n), s = d[0], i = d[1], d = d[2], this.ctx.font = s, this.ctx.direction = n.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(i, d), l = s.baseline, w = s.middle, h = n.paintOrder, e.textBounds.forEach(function(K) {
          h.forEach(function(_) {
            switch (_) {
              case 0:
                g.ctx.fillStyle = je(n.color), g.renderTextWithLetterSpacing(K, n.letterSpacing, l);
                var S = n.textShadow;
                S.length && K.text.trim().length && (S.slice(0).reverse().forEach(function(v) {
                  g.ctx.shadowColor = je(v.color), g.ctx.shadowOffsetX = v.offsetX.number * g.options.scale, g.ctx.shadowOffsetY = v.offsetY.number * g.options.scale, g.ctx.shadowBlur = v.blur.number, g.renderTextWithLetterSpacing(K, n.letterSpacing, l);
                }), g.ctx.shadowColor = "", g.ctx.shadowOffsetX = 0, g.ctx.shadowOffsetY = 0, g.ctx.shadowBlur = 0), n.textDecorationLine.length && (g.ctx.fillStyle = je(n.textDecorationColor || n.color), n.textDecorationLine.forEach(function(v) {
                  switch (v) {
                    case 1:
                      g.ctx.fillRect(K.bounds.left, Math.round(K.bounds.top + l), K.bounds.width, 1);
                      break;
                    case 2:
                      g.ctx.fillRect(K.bounds.left, Math.round(K.bounds.top), K.bounds.width, 1);
                      break;
                    case 3:
                      g.ctx.fillRect(K.bounds.left, Math.ceil(K.bounds.top + w), K.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                n.webkitTextStrokeWidth && K.text.trim().length && (g.ctx.strokeStyle = je(n.webkitTextStrokeColor), g.ctx.lineWidth = n.webkitTextStrokeWidth, g.ctx.lineJoin = window.chrome ? "miter" : "round", g.ctx.strokeText(K.text, K.bounds.left, K.bounds.top + l)), g.ctx.strokeStyle = "", g.ctx.lineWidth = 0, g.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, A.prototype.renderReplacedElement = function(e, n, i) {
    var d;
    i && 0 < e.intrinsicWidth && 0 < e.intrinsicHeight && (d = pl(e), n = Ul(n), this.path(n), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(i, 0, 0, e.intrinsicWidth, e.intrinsicHeight, d.left, d.top, d.width, d.height), this.ctx.restore());
  }, A.prototype.renderNodeContent = function(e) {
    return yt(this, void 0, void 0, function() {
      var n, i, d, s, l, w, h, g, p, K, _, S, v;
      return Qt(this, function(M) {
        switch (M.label) {
          case 0:
            this.applyEffects(e.getEffects(4)), n = e.container, i = e.curves, d = n.styles, s = 0, l = n.textNodes, M.label = 1;
          case 1:
            return s < l.length ? (w = l[s], [4, this.renderTextNode(w, d)]) : [3, 4];
          case 2:
            M.sent(), M.label = 3;
          case 3:
            return s++, [3, 1];
          case 4:
            if (!(n instanceof MC))
              return [3, 8];
            M.label = 5;
          case 5:
            return M.trys.push([5, 7, , 8]), [4, this.context.cache.match(n.src)];
          case 6:
            return K = M.sent(), this.renderReplacedElement(n, i, K), [3, 8];
          case 7:
            return M.sent(), this.context.logger.error("Error loading image " + n.src), [3, 8];
          case 8:
            if (n instanceof kC && this.renderReplacedElement(n, i, n.canvas), !(n instanceof GC))
              return [3, 12];
            M.label = 9;
          case 9:
            return M.trys.push([9, 11, , 12]), [4, this.context.cache.match(n.svg)];
          case 10:
            return K = M.sent(), this.renderReplacedElement(n, i, K), [3, 12];
          case 11:
            return M.sent(), this.context.logger.error("Error loading svg " + n.svg.substring(0, 255)), [3, 12];
          case 12:
            return n instanceof PC && n.tree ? [4, new A(this.context, { scale: this.options.scale, backgroundColor: n.backgroundColor, x: 0, y: 0, width: n.width, height: n.height }).render(n.tree)] : [3, 14];
          case 13:
            w = M.sent(), n.width && n.height && this.ctx.drawImage(w, 0, 0, n.width, n.height, n.bounds.left, n.bounds.top, n.bounds.width, n.bounds.height), M.label = 14;
          case 14:
            if (n instanceof p0 && (h = Math.min(n.bounds.width, n.bounds.height), n.type === wl ? n.checked && (this.ctx.save(), this.path([new nA(n.bounds.left + 0.39363 * h, n.bounds.top + 0.79 * h), new nA(n.bounds.left + 0.16 * h, n.bounds.top + 0.5549 * h), new nA(n.bounds.left + 0.27347 * h, n.bounds.top + 0.44071 * h), new nA(n.bounds.left + 0.39694 * h, n.bounds.top + 0.5649 * h), new nA(n.bounds.left + 0.72983 * h, n.bounds.top + 0.23 * h), new nA(n.bounds.left + 0.84 * h, n.bounds.top + 0.34085 * h), new nA(n.bounds.left + 0.39363 * h, n.bounds.top + 0.79 * h)]), this.ctx.fillStyle = je(TQ), this.ctx.fill(), this.ctx.restore()) : n.type === Ql && n.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(n.bounds.left + h / 2, n.bounds.top + h / 2, h / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = je(TQ), this.ctx.fill(), this.ctx.restore())), UI(n) && n.value.length) {
              switch (h = this.createFontStyle(d), S = h[0], _ = h[1], _ = this.fontMetrics.getMetrics(S, _).baseline, this.ctx.font = S, this.ctx.fillStyle = je(d.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = mI(n.styles.textAlign), v = pl(n), g = 0, n.styles.textAlign) {
                case 1:
                  g += v.width / 2;
                  break;
                case 2:
                  g += v.width;
              }
              p = v.add(g, 0, 0, -v.height / 2 + 1), this.ctx.save(), this.path([new nA(v.left, v.top), new nA(v.left + v.width, v.top), new nA(v.left + v.width, v.top + v.height), new nA(v.left, v.top + v.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Ds(n.value, p), d.letterSpacing, _), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
            }
            if (!Je(n.styles.display, 2048))
              return [3, 20];
            if (n.styles.listStyleImage === null)
              return [3, 19];
            if ((p = n.styles.listStyleImage).type !== 0)
              return [3, 18];
            K = void 0, _ = p.url, M.label = 15;
          case 15:
            return M.trys.push([15, 17, , 18]), [4, this.context.cache.match(_)];
          case 16:
            return K = M.sent(), this.ctx.drawImage(K, n.bounds.left - (K.width + 10), n.bounds.top), [3, 18];
          case 17:
            return M.sent(), this.context.logger.error("Error loading list-style-image " + _), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            e.listValue && n.styles.listStyleType !== -1 && (S = this.createFontStyle(d)[0], this.ctx.font = S, this.ctx.fillStyle = je(d.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", v = new Jr(n.bounds.left, n.bounds.top + de(n.styles.paddingTop, n.bounds.width), n.bounds.width, QQ(d.lineHeight, d.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Ds(e.listValue, v), d.letterSpacing, QQ(d.lineHeight, d.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), M.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, A.prototype.renderStackContent = function(e) {
    return yt(this, void 0, void 0, function() {
      var n, i, d, s, l, w, h, g, p, K, _, S, v, M, k;
      return Qt(this, function(X) {
        switch (X.label) {
          case 0:
            return Je(e.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(e.element)];
          case 1:
            X.sent(), n = 0, i = e.negativeZIndex, X.label = 2;
          case 2:
            return n < i.length ? (k = i[n], [4, this.renderStack(k)]) : [3, 5];
          case 3:
            X.sent(), X.label = 4;
          case 4:
            return n++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(e.element)];
          case 6:
            X.sent(), d = 0, s = e.nonInlineLevel, X.label = 7;
          case 7:
            return d < s.length ? (k = s[d], [4, this.renderNode(k)]) : [3, 10];
          case 8:
            X.sent(), X.label = 9;
          case 9:
            return d++, [3, 7];
          case 10:
            l = 0, w = e.nonPositionedFloats, X.label = 11;
          case 11:
            return l < w.length ? (k = w[l], [4, this.renderStack(k)]) : [3, 14];
          case 12:
            X.sent(), X.label = 13;
          case 13:
            return l++, [3, 11];
          case 14:
            h = 0, g = e.nonPositionedInlineLevel, X.label = 15;
          case 15:
            return h < g.length ? (k = g[h], [4, this.renderStack(k)]) : [3, 18];
          case 16:
            X.sent(), X.label = 17;
          case 17:
            return h++, [3, 15];
          case 18:
            p = 0, K = e.inlineLevel, X.label = 19;
          case 19:
            return p < K.length ? (k = K[p], [4, this.renderNode(k)]) : [3, 22];
          case 20:
            X.sent(), X.label = 21;
          case 21:
            return p++, [3, 19];
          case 22:
            _ = 0, S = e.zeroOrAutoZIndexOrTransformedOrOpacity, X.label = 23;
          case 23:
            return _ < S.length ? (k = S[_], [4, this.renderStack(k)]) : [3, 26];
          case 24:
            X.sent(), X.label = 25;
          case 25:
            return _++, [3, 23];
          case 26:
            v = 0, M = e.positiveZIndex, X.label = 27;
          case 27:
            return v < M.length ? (k = M[v], [4, this.renderStack(k)]) : [3, 30];
          case 28:
            X.sent(), X.label = 29;
          case 29:
            return v++, [3, 27];
          case 30:
            return [2];
        }
      });
    });
  }, A.prototype.mask = function(e) {
    this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(e.slice(0).reverse()), this.ctx.closePath();
  }, A.prototype.path = function(e) {
    this.ctx.beginPath(), this.formatPath(e), this.ctx.closePath();
  }, A.prototype.formatPath = function(e) {
    var n = this;
    e.forEach(function(i, d) {
      var s = Hn(i) ? i.start : i;
      d === 0 ? n.ctx.moveTo(s.x, s.y) : n.ctx.lineTo(s.x, s.y), Hn(i) && n.ctx.bezierCurveTo(i.startControl.x, i.startControl.y, i.endControl.x, i.endControl.y, i.end.x, i.end.y);
    });
  }, A.prototype.renderRepeat = function(e, n, i, d) {
    this.path(e), this.ctx.fillStyle = n, this.ctx.translate(i, d), this.ctx.fill(), this.ctx.translate(-i, -d);
  }, A.prototype.resizeImage = function(e, n, i) {
    var d;
    return e.width === n && e.height === i ? e : ((d = ((d = this.canvas.ownerDocument) != null ? d : document).createElement("canvas")).width = Math.max(1, n), d.height = Math.max(1, i), d.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, n, i), d);
  }, A.prototype.renderBackgroundImage = function(e) {
    return yt(this, void 0, void 0, function() {
      var n, i, d, s, l, w;
      return Qt(this, function(h) {
        switch (h.label) {
          case 0:
            n = e.styles.backgroundImage.length - 1, i = function(g) {
              var p, K, _, S, v, M, k, X, iA, z, J, lA, $, vA, IA, YA, Fe, ne, $A, ge, ve;
              return Qt(this, function(ZA) {
                switch (ZA.label) {
                  case 0:
                    if (g.type !== 0)
                      return [3, 5];
                    p = void 0, K = g.url, ZA.label = 1;
                  case 1:
                    return ZA.trys.push([1, 3, , 4]), [4, d.context.cache.match(K)];
                  case 2:
                    return p = ZA.sent(), [3, 4];
                  case 3:
                    return ZA.sent(), d.context.logger.error("Error loading background-image " + K), [3, 4];
                  case 4:
                    return p && (z = yg(e, n, [p.width, p.height, p.width / p.height]), M = z[0], lA = z[1], $ = z[2], iA = z[3], z = z[4], S = d.ctx.createPattern(d.resizeImage(p, iA, z), "repeat"), d.renderRepeat(M, S, lA, $)), [3, 6];
                  case 5:
                    iy(g) ? (J = yg(e, n, [null, null, null]), M = J[0], lA = J[1], $ = J[2], iA = J[3], z = J[4], J = ty(g.angle, iA, z), vA = J[0], v = J[1], X = J[2], k = J[3], J = J[4], (YA = document.createElement("canvas")).width = iA, YA.height = z, IA = YA.getContext("2d"), _ = IA.createLinearGradient(v, k, X, J), gQ(g.stops, vA).forEach(function(Be) {
                      return _.addColorStop(Be.stop, je(Be.color));
                    }), IA.fillStyle = _, IA.fillRect(0, 0, iA, z), 0 < iA && 0 < z && (S = d.ctx.createPattern(YA, "repeat"), d.renderRepeat(M, S, lA, $))) : ay(g) && (v = yg(e, n, [null, null, null]), M = v[0], k = v[1], X = v[2], iA = v[3], z = v[4], J = g.position.length === 0 ? [F0] : g.position, lA = de(J[0], iA), $ = de(J[J.length - 1], z), vA = ny(g, lA, $, iA, z), IA = vA[0], YA = vA[1], 0 < IA) && 0 < YA && (Fe = d.ctx.createRadialGradient(k + lA, X + $, 0, k + lA, X + $, IA), gQ(g.stops, 2 * IA).forEach(function(Be) {
                      return Fe.addColorStop(Be.stop, je(Be.color));
                    }), d.path(M), d.ctx.fillStyle = Fe, IA !== YA ? (ne = e.bounds.left + 0.5 * e.bounds.width, $A = e.bounds.top + 0.5 * e.bounds.height, ve = 1 / (ge = YA / IA), d.ctx.save(), d.ctx.translate(ne, $A), d.ctx.transform(1, 0, 0, ge, 0, 0), d.ctx.translate(-ne, -$A), d.ctx.fillRect(k, ve * (X - $A) + $A, iA, z * ve), d.ctx.restore()) : d.ctx.fill()), ZA.label = 6;
                  case 6:
                    return n--, [2];
                }
              });
            }, d = this, s = 0, l = e.styles.backgroundImage.slice(0).reverse(), h.label = 1;
          case 1:
            return s < l.length ? (w = l[s], [5, i(w)]) : [3, 4];
          case 2:
            h.sent(), h.label = 3;
          case 3:
            return s++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, A.prototype.renderSolidBorder = function(e, n, i) {
    return yt(this, void 0, void 0, function() {
      return Qt(this, function(d) {
        return this.path(ZQ(i, n)), this.ctx.fillStyle = je(e), this.ctx.fill(), [2];
      });
    });
  }, A.prototype.renderDoubleBorder = function(e, n, i, d) {
    return yt(this, void 0, void 0, function() {
      var s;
      return Qt(this, function(l) {
        switch (l.label) {
          case 0:
            return n < 3 ? [4, this.renderSolidBorder(e, i, d)] : [3, 2];
          case 1:
            return l.sent(), [2];
          case 2:
            return s = sI(d, i), this.path(s), this.ctx.fillStyle = je(e), this.ctx.fill(), s = cI(d, i), this.path(s), this.ctx.fill(), [2];
        }
      });
    });
  }, A.prototype.renderNodeBackgroundAndBorders = function(e) {
    return yt(this, void 0, void 0, function() {
      var n, i, d, s, l, w, h, g, p = this;
      return Qt(this, function(K) {
        switch (K.label) {
          case 0:
            return this.applyEffects(e.getEffects(2)), n = e.container.styles, i = !xu(n.backgroundColor) || n.backgroundImage.length, d = [{ style: n.borderTopStyle, color: n.borderTopColor, width: n.borderTopWidth }, { style: n.borderRightStyle, color: n.borderRightColor, width: n.borderRightWidth }, { style: n.borderBottomStyle, color: n.borderBottomColor, width: n.borderBottomWidth }, { style: n.borderLeftStyle, color: n.borderLeftColor, width: n.borderLeftWidth }], s = pI(Fa(n.backgroundClip, 0), e.curves), i || n.boxShadow.length ? (this.ctx.save(), this.path(s), this.ctx.clip(), xu(n.backgroundColor) || (this.ctx.fillStyle = je(n.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(e.container)]) : [3, 2];
          case 1:
            K.sent(), this.ctx.restore(), n.boxShadow.slice(0).reverse().forEach(function(_) {
              p.ctx.save();
              var S = Fl(e.curves), v = _.inset ? 0 : CI, M = aI(S, -v + (_.inset ? 1 : -1) * _.spread.number, (_.inset ? 1 : -1) * _.spread.number, _.spread.number * (_.inset ? -2 : 2), _.spread.number * (_.inset ? -2 : 2));
              _.inset ? (p.path(S), p.ctx.clip(), p.mask(M)) : (p.mask(S), p.ctx.clip(), p.path(M)), p.ctx.shadowOffsetX = _.offsetX.number + v, p.ctx.shadowOffsetY = _.offsetY.number, p.ctx.shadowColor = je(_.color), p.ctx.shadowBlur = _.blur.number, p.ctx.fillStyle = _.inset ? je(_.color) : "rgba(0,0,0,1)", p.ctx.fill(), p.ctx.restore();
            }), K.label = 2;
          case 2:
            w = l = 0, h = d, K.label = 3;
          case 3:
            return w < h.length ? (g = h[w]).style !== 0 && !xu(g.color) && 0 < g.width ? g.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(g.color, g.width, l, e.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return K.sent(), [3, 11];
          case 5:
            return g.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(g.color, g.width, l, e.curves, 3)];
          case 6:
            return K.sent(), [3, 11];
          case 7:
            return g.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(g.color, g.width, l, e.curves)];
          case 8:
            return K.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(g.color, l, e.curves)];
          case 10:
            K.sent(), K.label = 11;
          case 11:
            l++, K.label = 12;
          case 12:
            return w++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, A.prototype.renderDashedDottedBorder = function(e, n, i, d, s) {
    return yt(this, void 0, void 0, function() {
      var l, w, h, g, p, K, _, S, v, M, k;
      return Qt(this, function(X) {
        return this.ctx.save(), p = BI(d, i), l = ZQ(d, i), s === 2 && (this.path(l), this.ctx.clip()), v = (Hn(l[0]) ? (w = l[0].start.x, l[0].start) : (w = l[0].x, l[0])).y, g = (Hn(l[1]) ? (h = l[1].end.x, l[1].end) : (h = l[1].x, l[1])).y, v = Math.abs(i === 0 || i === 2 ? w - h : v - g), this.ctx.beginPath(), s === 3 ? this.formatPath(p) : this.formatPath(l.slice(0, 2)), g = n < 3 ? 3 * n : 2 * n, p = n < 3 ? 2 * n : n, s === 3 && (p = g = n), K = !0, v <= 2 * g ? K = !1 : v <= 2 * g + p ? (g *= _ = v / (2 * g + p), p *= _) : (_ = Math.floor((v + p) / (g + p)), S = (v - _ * g) / (_ - 1), p = (v = (v - (_ + 1) * g) / _) <= 0 || Math.abs(p - S) < Math.abs(p - v) ? S : v), K && (s === 3 ? this.ctx.setLineDash([0, g + p]) : this.ctx.setLineDash([g, p])), s === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = n) : this.ctx.lineWidth = 2 * n + 1.1, this.ctx.strokeStyle = je(e), this.ctx.stroke(), this.ctx.setLineDash([]), s === 2 && (Hn(l[0]) && (M = l[3], k = l[0], this.ctx.beginPath(), this.formatPath([new nA(M.end.x, M.end.y), new nA(k.start.x, k.start.y)]), this.ctx.stroke()), Hn(l[1])) && (M = l[1], k = l[2], this.ctx.beginPath(), this.formatPath([new nA(M.end.x, M.end.y), new nA(k.start.x, k.start.y)]), this.ctx.stroke()), this.ctx.restore(), [2];
      });
    });
  }, A.prototype.render = function(e) {
    return yt(this, void 0, void 0, function() {
      var n;
      return Qt(this, function(i) {
        switch (i.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = je(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), n = dI(e), [4, this.renderStack(n)];
          case 1:
            return i.sent(), this.applyEffects([]), [2, this.canvas];
        }
      });
    });
  }, A;
}(oF), UI = function(t) {
  return t instanceof NC || t instanceof RC || t instanceof p0 && t.type !== Ql && t.type !== wl;
}, pI = function(t, A) {
  switch (t) {
    case 0:
      return Fl(A);
    case 2:
      return nI(A);
    default:
      return Ul(A);
  }
}, mI = function(t) {
  switch (t) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, EI = ["-apple-system", "system-ui"], DI = function(t) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? t.filter(function(A) {
    return EI.indexOf(A) === -1;
  }) : t;
}, HI = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e.canvas = n.canvas || document.createElement("canvas"), e.ctx = e.canvas.getContext("2d"), e.options = n, e.canvas.width = Math.floor(n.width * n.scale), e.canvas.height = Math.floor(n.height * n.scale), e.canvas.style.width = n.width + "px", e.canvas.style.height = n.height + "px", e.ctx.scale(e.options.scale, e.options.scale), e.ctx.translate(-n.x, -n.y), e.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + n.width + "x" + n.height + " at " + n.x + "," + n.y + ") with scale " + n.scale), e;
  }
  return Zn(A, t), A.prototype.render = function(e) {
    return yt(this, void 0, void 0, function() {
      var n;
      return Qt(this, function(i) {
        switch (i.label) {
          case 0:
            return n = o0(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, e), [4, yI(n)];
          case 1:
            return n = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = je(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  }, A;
}(oF), yI = function(t) {
  return new Promise(function(A, e) {
    var n = new Image();
    n.onload = function() {
      A(n);
    }, n.onerror = e, n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
  });
}, bI = function() {
  function t(n) {
    var e = n.id, n = n.enabled;
    this.id = e, this.enabled = n, this.start = Date.now();
  }
  return t.prototype.debug = function() {
    for (var A = [], e = 0; e < arguments.length; e++)
      A[e] = arguments[e];
    this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, QB([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, t.prototype.getTime = function() {
    return Date.now() - this.start;
  }, t.prototype.info = function() {
    for (var A = [], e = 0; e < arguments.length; e++)
      A[e] = arguments[e];
    this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, QB([this.id, this.getTime() + "ms"], A));
  }, t.prototype.warn = function() {
    for (var A = [], e = 0; e < arguments.length; e++)
      A[e] = arguments[e];
    this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, QB([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, t.prototype.error = function() {
    for (var A = [], e = 0; e < arguments.length; e++)
      A[e] = arguments[e];
    this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, QB([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, t.instances = {}, t;
}(), II = function() {
  function t(A, e) {
    this.windowBounds = e, this.instanceName = "#" + t.instanceCount++, this.logger = new bI({ id: this.instanceName, enabled: A.logging }), this.cache = (e = A.cache) != null ? e : new Zb(this, A);
  }
  return t.instanceCount = 1, t;
}(), vI = function(t, A) {
  return KI(t, A = A === void 0 ? {} : A);
}, KI = (typeof window < "u" && AF.setContext(window), function(t, A) {
  return yt(void 0, void 0, void 0, function() {
    var e, n, i, d, s, l, w, h, g, p, K, _, S, v, M, k;
    return Qt(this, function(X) {
      switch (X.label) {
        case 0:
          if (!t || typeof t != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (!(S = t.ownerDocument))
            throw new Error("Element is not attached to a Document");
          if (e = S.defaultView)
            return v = { allowTaint: (v = A.allowTaint) != null && v, imageTimeout: (v = A.imageTimeout) != null ? v : 15e3, proxy: A.proxy, useCORS: (v = A.useCORS) != null && v }, p = aC({ logging: (p = A.logging) == null || p, cache: A.cache }, v), v = { windowWidth: (v = A.windowWidth) != null ? v : e.innerWidth, windowHeight: (v = A.windowHeight) != null ? v : e.innerHeight, scrollX: (v = A.scrollX) != null ? v : e.pageXOffset, scrollY: (v = A.scrollY) != null ? v : e.pageYOffset }, v = new Jr(v.scrollX, v.scrollY, v.windowWidth, v.windowHeight), p = new II(p, v), K = (K = A.foreignObjectRendering) != null && K, _ = { allowTaint: (_ = A.allowTaint) != null && _, onclone: A.onclone, ignoreElements: A.ignoreElements, inlineImages: K, copyStyles: K }, p.logger.debug("Starting document clone with size " + v.width + "x" + v.height + " scrolled to " + -v.left + "," + -v.top), _ = new XQ(p, t, _), (n = _.clonedReferenceElement) ? [4, _.toIFrame(S, v)] : [2, Promise.reject("Unable to find element in cloned iframe")];
          throw new Error("Document is not attached to a Window");
        case 1:
          return i = X.sent(), _ = m0(n) || Lb(n) ? cD(n.ownerDocument) : bl(p, n), d = _.width, s = _.height, l = _.left, w = _.top, h = LI(p, n, A.backgroundColor), M = { canvas: A.canvas, backgroundColor: h, scale: (v = (S = A.scale) != null ? S : e.devicePixelRatio) != null ? v : 1, x: ((M = A.x) != null ? M : 0) + l, y: ((M = A.y) != null ? M : 0) + w, width: (M = A.width) != null ? M : Math.ceil(d), height: (M = A.height) != null ? M : Math.ceil(s) }, K ? (p.logger.debug("Document cloned, using foreign object rendering"), [4, new HI(p, M).render(n)]) : [3, 3];
        case 2:
          return g = X.sent(), [3, 5];
        case 3:
          return p.logger.debug("Document cloned, element located at " + l + "," + w + " with size " + d + "x" + s + " using computed rendering"), p.logger.debug("Starting DOM parsing"), k = XC(p, n), h === k.styles.backgroundColor && (k.styles.backgroundColor = Pr.TRANSPARENT), p.logger.debug("Starting renderer for element at " + M.x + "," + M.y + " with size " + M.width + "x" + M.height), [4, new FI(p, M).render(k)];
        case 4:
          g = X.sent(), X.label = 5;
        case 5:
          return (k = A.removeContainer) != null && !k || XQ.destroy(i) || p.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore"), p.logger.debug("Finished rendering"), [2, g];
      }
    });
  });
}), LI = function(s, A, e) {
  var n = A.ownerDocument, i = n.documentElement ? ms(s, getComputedStyle(n.documentElement).backgroundColor) : Pr.TRANSPARENT, d = n.body ? ms(s, getComputedStyle(n.body).backgroundColor) : Pr.TRANSPARENT, s = typeof e == "string" ? ms(s, e) : e === null ? Pr.TRANSPARENT : 4294967295;
  return A === n.documentElement ? xu(i) ? xu(d) ? s : d : i : s;
};
const xI = "MathJax-script", _I = Bp + "/tex-mml-chtml.js";
let qQ = !1, l0 = !1;
function SI(t) {
  if (globalThis.window) {
    let A = ol;
    t && (A = { ...ol, ...t }), globalThis.window.MathJax = { ...A, startup: { pageReady: () => {
      l0 = !0;
    } } };
  }
}
function OI() {
  return new Promise((t, A) => {
    if (l0)
      return t("");
    {
      var e;
      qQ || ((e = document.createElement("script")).src = _I, e.id = xI, e.onerror = (i) => {
        A(i);
      }, document.body.appendChild(e), qQ = !0);
      let n = setInterval(() => {
        if (l0)
          return clearInterval(n), t("");
      }, 1e3);
    }
  });
}
function TI(t) {
  SI(t);
}
function MI(t) {
  return OI().then(() => MathJax.typesetPromise([t]));
}
function kI(t) {
  if (t)
    return new Promise((A) => {
      vI(t).then((e) => {
        e = e.toDataURL("image/png"), A(e);
      });
    });
  throw alert(t), new Error("ele 不存在");
}
class GI {
  constructor(A) {
    if (this.content = "", this.defaultConfig = { lineBreak: !0, globalRender: !1, lineHeight: "20px", punctuation: !1, textColor: "#000", underlineClass: void 0, divideChinese: !1, wrapMathrm: !0 }, this.config = {}, this.container = document.querySelector(A.container), !this.container)
      throw new Error("找不到" + A.container);
    this.config = A.options || {}, this.init();
  }
  init() {
    TI(this.container);
  }
  setContent(e) {
    this.content = e;
    var e = Object.assign(this.defaultConfig, this.config), n = np(this.content, e);
    this.container.innerText = e.divideChinese ? n : `$$${n}$$`, this.container.style.color = e.textColor || "#333", MI(this.container);
  }
  latexToImage() {
    return new Promise((A) => {
      kI(this.container).then((e) => {
        A(e);
      });
    });
  }
  changeOption(A) {
    this.config = A;
  }
}
class VI {
  constructor(A, e) {
    if (this.content = "", !A)
      throw new Error("HtmlElement is not found");
    this.container = A, this.showTool = (e == null ? void 0 : e.showTool) || !0, this.showTool === void 0 && (this.showTool = !0), this.content = (e == null ? void 0 : e.content) || "", this.mathOption = e.mathOption, this.init();
  }
  init() {
    var A;
    this.showTool && this.createTool(), this.createInput(), this.createOutput(), this.content && (this.inserContent(this.content), (A = this.Output) == null || A.setContent(this.content));
  }
  createTool() {
    Xo(this.container, yn("div.tool")), this.Tool = new KF({ container: ".tool", handleClickFormula: this.handleClickFormula.bind(this) });
  }
  createInput() {
    Xo(this.container, yn("div.input")), this.Input = new iU({ container: ".input", contentChange: (A) => {
      var e, n;
      this.content = A, (e = this.mathOption) != null && e.globalRender || ((n = this.Output) == null || n.setContent(this.content));
    } });
  }
  createOutput() {
    Xo(this.container, yn("div.output")), this.Output = new GI({ container: ".output", content: this.content, options: this.mathOption });
  }
  inserContent(A) {
    var e, n, i;
    ih(oh(Ah(A)).outerHTML), (e = this.mathOption) != null && e.globalRender || (this.content = ((n = this.Input) == null ? void 0 : n.getContent()) || "", (i = this.Output) == null || i.setContent(this.content));
  }
  handleClickFormula(A, e) {
    e = e.formula, this.inserContent(e);
  }
  getRangeInfo() {
    var A, e;
    (e = (A = window.getSelection()) == null ? void 0 : A.getRangeAt(0)) == null || e.deleteContents();
  }
  optionChange(A) {
    var e;
    this.mathOption = A, (e = this.Output) == null || e.changeOption(this.mathOption);
  }
  globalRenderContent() {
    var e, n;
    var A = ((e = this.Input) == null ? void 0 : e.getContent()) || "";
    (n = this.Output) == null || n.setContent(A);
  }
}
function WI(t) {
  return new Promise((A, e) => {
    try {
      const n = document.createElement("input");
      n.setAttribute("value", t + ""), document.body.appendChild(n), n.select(), document.execCommand("copy"), setTimeout(() => {
        document.body.removeChild(n), A();
      }, 0);
    } catch (n) {
      e(n);
    }
  });
}
globalThis.LatexEditor = VI;
export {
  VI as LatexEditor,
  WI as copyByContent,
  E0 as fontIconBaseUrl,
  f0 as formulaTypeAllList
};
