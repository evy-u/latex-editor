import "vue";
const eF = [{ name: "开平方", icon: "sqrt", formula: "\\sqrt{4}" }, { name: "开n次方", icon: "sqrtn", formula: "\\sqrt[n]{10}" }], tF = [{ name: "正弦", icon: "sin", formula: "\\sin" }, { name: "余弦", icon: "cos", formula: "\\cos" }, { name: "正切", icon: "tan", formula: "\\tan" }, { name: "余切", icon: "cot", formula: "\\cot" }, { name: "正切", icon: "sec", formula: "\\sec" }, { name: "csc", icon: "csc", formula: "\\csc" }, { name: "arcsin", icon: "arcsin", formula: "\\arcsin" }, { name: "arccos", icon: "arccos", formula: "\\arccos" }, { name: "arctan", icon: "arctan", formula: "\\arctan" }, { name: "arccot", icon: "arccot", formula: "\\arccot" }, { name: "arcsec", icon: "arcsec", formula: "\\arcsec" }, { name: "arccsc", icon: "arccsc", formula: "\\arccsc" }], nF = [{ name: "下划线", icon: "underline", formula: "\\underline{下划线}" }, { name: "波浪线", icon: "uwave", formula: "\\uwave{波浪线}" }, { name: "斜体", icon: "textit", formula: "\\textit{斜体}" }, { name: "粗体", icon: "textbf", formula: "\\textbf{粗体}" }, { name: "颜色", icon: "textcolor", formula: "\\textcolor{red}{红色}" }, { name: "上角标", icon: "sub", formula: "^{}" }, { name: "下角标", icon: "sup", formula: "_{}" }, { name: "下划线", icon: "uline", formula: "\\_{10}" }, { name: "四线三格", icon: "fourlineruled", formula: "\\fourlineruled{10}" }], rF = [{ name: "因为", icon: "because", formula: "\\because" }, { name: "所以", icon: "therefore", formula: "\\therefore" }, { name: "或", icon: "lor", formula: "\\lor" }, { name: "与", icon: "land", formula: "\\land" }, { name: "非", icon: "lnot", formula: "\\lnot" }, { name: "对于全部", icon: "forall", formula: "\\forall" }, { name: "存在", icon: "exists", formula: "\\exists" }, { name: "恒真", icon: "top", formula: "\\top" }, { name: "恒假", icon: "bot", formula: "\\bot" }], uF = [{ name: "角", icon: "angle", formula: "\\angle" }, { name: "全等于", icon: "cong", formula: "\\cong" }, { name: "相似于", icon: "sim", formula: "\\sim" }, { name: "平行于", icon: "parallel", formula: "\\parallel" }, { name: "平行四边形", icon: "parallelogram", formula: "\\parallelogram" }, { name: "垂直", icon: "perp", formula: "\\perp" }, { name: "圆圈", icon: "circ", formula: "\\circ" }, { name: "不平行于", icon: "nparallel", formula: "\\nparallel" }], oF = [{ name: "ā", icon: "bar", formula: "\\bar{a}" }, { name: "á", icon: "acute", formula: "\\acute{a}" }, { name: "三声", icon: "v", formula: "\\v{i}" }, { name: "ê", icon: "hat", formula: "\\hat{e}" }, { name: "à", icon: "grave", formula: "\\grave{a}" }, { name: "ã", icon: "tilde", formula: "\\tilde{a}" }, { name: "wideparen", icon: "wideparen", formula: "\\wideparen{AB}" }, { name: "vec", icon: "vec", formula: "\\vec{AB}" }, { name: "\\dot{\\sim}", icon: "dot", formula: "\\dot{\\sim}" }, { name: "Ö", icon: "ddot", formula: "\\ddot{O}" }, { name: "重音", icon: "d", formula: "天\\d{涯}" }], iF = [{ name: "正负号", icon: "pm", formula: "\\pm" }, { name: "负正号", icon: "mp", formula: "\\mp" }, { name: "点乘号", icon: "cdot", formula: "\\cdot" }, { name: "叉乘号", icon: "times", formula: "\\times" }, { name: "除号", icon: "div", formula: "\\div" }, { name: "绝对值", icon: "mid", formula: "\\mid" }, { name: "求积", icon: "prod", formula: "\\prod" }, { name: "求和", icon: "sum", formula: "\\sum" }], aF = [{ name: "约等于", icon: "approx", formula: "\\approx" }, { name: "小于等于", icon: "leq", formula: "\\leq" }, { name: "大于等于", icon: "geq", formula: "\\geq" }, { name: "不等于", icon: "neq", formula: "\\neq" }, { name: "恒等于", icon: "equiv", formula: "\\equiv" }, { name: "比例", icon: "propto", formula: "\\propto" }, { name: "不约等于", icon: "napprox", formula: "\\napprox" }, { name: "不小于", icon: "nl", formula: "\\nl" }, { name: "不大于", icon: "ng", formula: "\\ng" }, { name: "不小于等于", icon: "nleq", formula: "\\nleq" }, { name: "不大于等于", icon: "ngeq", formula: "\\ngeq" }, { name: "不恒等于", icon: "nequiv", formula: "\\nequiv" }], dF = [{ icon: "odot", formula: "\\odot" }, { icon: "ominus", formula: "\\ominus" }, { icon: "oplus", formula: "\\oplus" }, { icon: "otimes", formula: "\\otimes" }, { icon: "oiiint", formula: "\\oiiint" }, { icon: "oiint", formula: "\\oiint" }, { icon: "oint", formula: "\\oint" }], sF = [{ name: "菱形", icon: "diamond", formula: "\\diamond" }, { name: "菱形", icon: "blackdiamond", formula: "\\blackdiamond" }, { name: "正方形", icon: "square", formula: "\\square" }, { name: "正方形", icon: "blacksquare", formula: "\\blacksquare" }, { name: "矩形", icon: "rectangle", formula: "\\rectangle" }, { name: "矩形", icon: "blackrectangle", formula: "\\blackrectangle" }, { name: "五角星", icon: "star", formula: "\\star" }, { name: "五角星", icon: "blackstar", formula: "\\blackstar" }, { name: "三角形", icon: "triangle", formula: "\\triangle" }, { name: "三角形", icon: "blacktriangle", formula: "\\blacktriangle" }, { name: "倒三角形", icon: "triangledown", formula: "\\triangledown" }, { name: "倒三角形", icon: "blacktriangledown", formula: "\\blacktriangledown" }, { name: "心形", icon: "heart", formula: "\\heart" }, { name: "心形", icon: "blackheart", formula: "\\blackheart" }, { name: "点状", icon: "bullet", formula: "\\bullet" }, { name: "女性", icon: "female", formula: "\\female" }, { name: "男性", icon: "male", formula: "\\male" }, { name: "微笑", icon: "smiley", formula: "\\smiley" }, { name: "黑桃", icon: "spadesuit", formula: "\\spadesuit" }, { name: "梅花", icon: "clubsuit", formula: "\\clubsuit" }], cF = [{ name: "分式", icon: "frac", formula: "\\frac{分子}{分母}", exampleList: [{ content: "正确写法：\\frac{1}{2}", isLatex: !1 }, { content: "\\frac{1}{2}", isLatex: !0 }, { content: "错误写法：\\frac{1}", isLatex: !1 }, { content: "\\frac{1}", isLatex: !0 }] }], BF = [{ name: "alpha", icon: "alpha", formula: "\\alpha" }, { name: "beta", icon: "beta", formula: "\\beta" }, { name: "gamma", icon: "gamma", formula: "\\gamma" }, { name: "delta", icon: "delta", formula: "\\delta" }, { name: "epsilon", icon: "epsilon", formula: "\\epsilon" }, { name: "zeta", icon: "zeta", formula: "\\zeta" }, { name: "eta", icon: "eta", formula: "\\eta" }, { name: "theta", icon: "theta", formula: "\\theta" }, { name: "iota", icon: "iota", formula: "\\iota" }, { name: "kappa", icon: "kappa", formula: "\\kappa" }, { name: "lambda", icon: "lambda", formula: "\\lambda" }, { name: "mu", icon: "mu", formula: "\\mu" }, { name: "nu", icon: "nu", formula: "\\nu" }, { name: "xi", icon: "xi", formula: "\\xi" }, { name: "omicron", icon: "omicron", formula: "\\omicron" }, { name: "pi", icon: "pi", formula: "\\pi" }, { name: "rho", icon: "rho", formula: "\\rho" }, { name: "sigma", icon: "sigma", formula: "\\sigma" }, { name: "tau", icon: "tau", formula: "\\tau" }, { name: "upsilon", icon: "upsilon", formula: "\\upsilon" }, { name: "phi", icon: "phi", formula: "\\phi" }, { name: "chi", icon: "chi", formula: "\\chi" }, { name: "psi", icon: "psi", formula: "\\psi" }, { name: "omega", icon: "omega", formula: "\\omega" }, { name: "Alpha", icon: "Alpha", formula: "\\Alpha" }, { name: "Beta", icon: "Beta", formula: "\\Beta" }, { name: "Gamma", icon: "Gamma", formula: "\\Gamma" }, { name: "Delta", icon: "Delta", formula: "\\Delta" }, { name: "Epsilon", icon: "Epsilon", formula: "\\Epsilon" }, { name: "Zeta", icon: "Zeta", formula: "\\Zeta" }, { name: "Eta", icon: "Eta", formula: "\\Eta" }, { name: "Theta", icon: "Theta", formula: "\\Theta" }, { name: "Iota", icon: "Iota", formula: "\\Iota" }, { name: "Kappa", icon: "Kappa", formula: "\\Kappa" }, { name: "Lambda", icon: "Lambda", formula: "\\Lambda" }, { name: "Mu", icon: "Mu", formula: "\\Mu" }, { name: "Nu", icon: "Nu", formula: "\\Nu" }, { name: "Xi", icon: "Xi", formula: "\\Xi" }, { name: "Omicron", icon: "Omicron", formula: "\\Omicron" }, { name: "Pi", icon: "Pi", formula: "\\Pi" }, { name: "Rho", icon: "Rho", formula: "\\Rho" }, { name: "Sigma", icon: "Sigma", formula: "\\Sigma" }, { name: "Tau", icon: "Tau", formula: "\\Tau" }, { name: "Upsilon", icon: "Upsilon", formula: "\\Upsilon" }, { name: "Phi", icon: "Phi", formula: "\\Phi" }, { name: "Chi", icon: "Chi", formula: "\\Chi" }, { name: "Psi", icon: "Psi", formula: "\\Psi" }, { name: "Omega", icon: "Omega", formula: "\\Omega" }], lF = [{ name: "⋯", icon: "cdots", formula: "\\cdots" }, { name: "⋱", icon: "ddots", formula: "\\ddots" }, { name: "⋮", icon: "vdots", formula: "\\vdots" }], fF = [{ name: "并集，v0中为\\bigcup", icon: "cup", formula: "\\cup" }, { name: "交集，v0中为\\bigcap", icon: "cap", formula: "\\cap" }, { name: "子集", icon: "subset", formula: "\\subset" }, { name: "父集", icon: "supset", formula: "\\supset" }, { name: "属于", icon: "in", formula: "\\in" }, { name: "不属于", icon: "notin", formula: "\\notin" }, { name: "包含", icon: "ni", formula: "\\ni" }, { name: "不包含", icon: "notni", formula: "\\notni" }, { name: "空集", icon: "emptyset", formula: "\\emptyset" }, { name: "补集", icon: "complement", formula: "\\complement" }, { name: "父集或等于 ", icon: "subseteq", formula: "\\subseteq" }, { name: "超集或等于", icon: "supseteq", formula: "\\supseteq" }, { name: "非子集", icon: "nsubset", formula: "\\nsubset" }, { name: "非超集", icon: "", formula: "\\nsupset" }, { name: "子集且不等于", icon: "subsetneq", formula: "\\subsetneq" }, { name: "父集且不等于", icon: "supsetneq", formula: "\\supsetneq" }, { name: "非子集也不等于", icon: "nsubseteq", formula: "\\nsubseteq" }, { name: "非父集也不等于", icon: "nsupseteq", formula: "\\nsupseteq" }], gF = [{ name: "无穷大", icon: "infty", formula: "\\infty" }, { name: "偏微分", icon: "partial", formula: "\\partial" }, { name: "实数符号", icon: "Re", formula: "\\Re" }, { name: "实数符号", icon: "lg", formula: "\\lg" }, { name: "实数符号", icon: "lim", formula: "\\lim" }, { name: "ln", icon: "ln", formula: "\\ln" }, { name: "最大", icon: "max", formula: "\\max" }, { name: "最小", icon: "min", formula: "\\min" }], wF = [{ name: "⇐", icon: "Leftarrow", formula: "\\Leftarrow" }, { name: "←", icon: "leftarrow", formula: "\\leftarrow" }, { name: "⇒", icon: "Rightarrow", formula: "\\Rightarrow" }, { name: "→", icon: "rightarrow", formula: "\\rightarrow" }, { name: "⇑", icon: "Uparrow", formula: "\\Uparrow" }, { name: "↑", icon: "uparrow", formula: "\\uparrow" }, { name: "⇓", icon: "Downarrow", formula: "\\Downarrow" }, { name: "↓", icon: "downarrow", formula: "\\downarrow" }, { name: "⇔", icon: "Leftrightarrow", formula: "\\Leftrightarrow" }, { name: "↔", icon: "leftrightarrow", formula: "\\leftrightarrow" }, { name: "⇕", icon: "Updownarrow", formula: "\\Updownarrow" }, { name: "↕", icon: "updownarrow", formula: "\\updownarrow" }, { name: "⇗", icon: "NEarrow", formula: "\\NEarrow" }, { name: "↗", icon: "nearrow", formula: "\\nearrow" }, { name: "⇖", icon: "NWarrow", formula: "\\NWarrow" }, { name: "↖", icon: "nwarrow", formula: "\\nwarrow" }, { name: "⇘", icon: "SEarrow", formula: "\\SEarrow" }, { name: "↘", icon: "searrow", formula: "\\searrow" }, { name: "⇙", icon: "SWarrow", formula: "\\SWarrow" }, { name: "↙", icon: "swarrow", formula: "\\swarrow" }, { name: "↵", icon: "hookleftarrow", formula: "\\hookleftarrow" }], QF = [{ name: "‰", icon: "textperthousand", formula: "\\textperthousand" }, { name: "※", icon: "textreferencemark", formula: "\\textreferencemark" }, { name: "®", icon: "textregistered", formula: "\\textregistered" }, { name: "§", icon: "textsection", formula: "\\textsection" }, { name: "™", icon: "texttrademark", formula: "\\texttrademark" }], CF = [{ name: "②", icon: "textcircled", formula: "\\textcircled{2}" }, { name: "Ⅴ", icon: "RomanNumeralCaps", formula: "\\RomanNumeralCaps{5}" }, { name: "i", icon: "romannumeral", formula: "\\romannumeral{1}" }];
var Md = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _c = { exports: {} }, te = (_c.exports, function(t, A) {
  (function() {
    var e, r = "Expected a function", i = "__lodash_hash_undefined__", d = "__lodash_placeholder__", c = 16, l = 32, w = 64, Q = 128, g = 256, m = 1 / 0, b = 9007199254740991, v = NaN, K = 4294967295, I = [["ary", Q], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", c], ["flip", 512], ["partial", l], ["partialRight", w], ["rearg", g]], S = "[object Arguments]", O = "[object Array]", N = "[object Boolean]", oA = "[object Date]", q = "[object Error]", P = "[object Function]", wA = "[object GeneratorFunction]", Z = "[object Map]", IA = "[object Number]", DA = "[object Object]", JA = "[object Promise]", we = "[object RegExp]", _A = "[object Set]", RA = "[object String]", We = "[object Symbol]", de = "[object WeakMap]", ue = "[object ArrayBuffer]", se = "[object DataView]", yn = "[object Float32Array]", Tu = "[object Float64Array]", Ou = "[object Int8Array]", Mu = "[object Int16Array]", ha = "[object Int32Array]", Fa = "[object Uint8Array]", Ua = "[object Uint8ClampedArray]", Oo = "[object Uint16Array]", Mo = "[object Uint32Array]", pl = /\b__p \+= '';/g, El = /\b(__p \+=) '' \+/g, ml = /(__e\(.*?\)|\b__t\)) \+\n'';/g, _s = /&(?:amp|lt|gt|quot|#39);/g, pa = /[&<>"']/g, Dl = RegExp(_s.source), Hl = RegExp(pa.source), yl = /<%-([\s\S]+?)%>/g, Ea = /<%([\s\S]+?)%>/g, Ss = /<%=([\s\S]+?)%>/g, ma = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Il = /^\w*$/, bl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Da = /[\\^$.*+?()[\]{}|]/g, vl = RegExp(Da.source), Ha = /^\s+/, Kl = /\s/, Ll = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, xl = /\{\n\/\* \[wrapped with (.+)\] \*/, Ts = /,? & /, _l = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Sl = /[()=,{}\[\]\/\s]/, Tl = /\\(\\)?/g, Ol = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Os = /\w*$/, Ml = /^[-+]0x[0-9a-f]+$/i, Go = /^0b[01]+$/i, Gl = /^\[object .+?Constructor\]$/, ko = /^0o[0-7]+$/i, Ms = /^(?:0|[1-9]\d*)$/, Gs = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ro = /($^)/, ks = /['\n\r\u2028\u2029\\]/g, Ur = "\\ud800-\\udfff", ya = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", Er = "\\u2700-\\u27bf", vn = "a-z\\xdf-\\xf6\\xf8-\\xff", en = "A-Z\\xc0-\\xd6\\xd8-\\xde", pr = "\\ufe0e\\ufe0f", bn = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", In = "['’]", Ye = "[" + Ur + "]", Ia = "[" + bn + "]", Gu = "[" + ya + "]", ba = "[" + Er + "]", Yn = "[" + vn + "]", bn = "[^" + Ur + bn + "\\d+" + Er + vn + en + "]", Er = "\\ud83c[\\udffb-\\udfff]", vn = "[^" + Ur + "]", yr = "(?:\\ud83c[\\udde6-\\uddff]){2}", Zn = "[\\ud800-\\udbff][\\udc00-\\udfff]", en = "[" + en + "]", qr = "\\u200d", ku = "(?:" + Yn + "|" + bn + ")", bn = "(?:" + en + "|" + bn + ")", Rs = "(?:['’](?:d|ll|m|re|s|t|ve))?", Ns = "(?:['’](?:D|LL|M|RE|S|T|VE))?", No = "(?:" + Gu + "|" + Er + ")?", mr = "[" + pr + "]?", mr = mr + No + ("(?:" + qr + "(?:" + [vn, yr, Zn].join("|") + ")" + mr + No + ")*"), No = "(?:" + [ba, yr, Zn].join("|") + ")" + mr, ba = "(?:" + [vn + Gu + "?", Gu, yr, Zn, Ye].join("|") + ")", kl = RegExp(In, "g"), Rl = RegExp(Gu, "g"), va = RegExp(Er + "(?=" + Er + ")|" + ba + mr, "g"), YA = RegExp([en + "?" + Yn + "+" + Rs + "(?=" + [Ia, en, "$"].join("|") + ")", bn + "+" + Ns + "(?=" + [Ia, en + ku, "$"].join("|") + ")", en + "?" + ku + "+" + Rs, en + "+" + Ns, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", No].join("|"), "g"), XA = RegExp("[" + qr + Ur + ya + pr + "]"), Nl = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Vl = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Pl = -1, SA = {}, TA = (SA[yn] = SA[Tu] = SA[Ou] = SA[Mu] = SA[ha] = SA[Fa] = SA[Ua] = SA[Oo] = SA[Mo] = !0, SA[S] = SA[O] = SA[ue] = SA[N] = SA[se] = SA[oA] = SA[q] = SA[P] = SA[Z] = SA[IA] = SA[DA] = SA[we] = SA[_A] = SA[RA] = SA[de] = !1, {}), Te = (TA[S] = TA[O] = TA[ue] = TA[se] = TA[N] = TA[oA] = TA[yn] = TA[Tu] = TA[Ou] = TA[Mu] = TA[ha] = TA[Z] = TA[IA] = TA[DA] = TA[we] = TA[_A] = TA[RA] = TA[We] = TA[Fa] = TA[Ua] = TA[Oo] = TA[Mo] = !0, TA[q] = TA[P] = TA[de] = !1, { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }), Dr = parseFloat, Hr = parseInt, vn = typeof Md == "object" && Md && Md.Object === Object && Md, yr = typeof self == "object" && self && self.Object === Object && self, OA = vn || yr || Function("return this")(), Zn = A && !A.nodeType && A, jn = Zn && t && !t.nodeType && t, Ka = jn && jn.exports === Zn, Vo = Ka && vn.process, Ye = function() {
      try {
        var L = jn && jn.require && jn.require("util").types;
        return L || Vo && Vo.binding && Vo.binding("util");
      } catch {
      }
    }(), La = Ye && Ye.isArrayBuffer, rt = Ye && Ye.isDate, Vs = Ye && Ye.isMap, wt = Ye && Ye.isRegExp, Ps = Ye && Ye.isSet, xa = Ye && Ye.isTypedArray;
    function he(L, J, k) {
      switch (k.length) {
        case 0:
          return L.call(J);
        case 1:
          return L.call(J, k[0]);
        case 2:
          return L.call(J, k[0], k[1]);
        case 3:
          return L.call(J, k[0], k[1], k[2]);
      }
      return L.apply(J, k);
    }
    function Po(L, J, k, sA) {
      for (var cA = -1, UA = L == null ? 0 : L.length; ++cA < UA; ) {
        var CA = L[cA];
        J(sA, CA, k(CA), L);
      }
      return sA;
    }
    function ut(L, J) {
      for (var k = -1, sA = L == null ? 0 : L.length; ++k < sA && J(L[k], k, L) !== !1; )
        ;
      return L;
    }
    function qA(L, J) {
      for (var k = L == null ? 0 : L.length; k-- && J(L[k], k, L) !== !1; )
        ;
      return L;
    }
    function Kn(L, J) {
      for (var k = -1, sA = L == null ? 0 : L.length; ++k < sA; )
        if (!J(L[k], k, L))
          return !1;
      return !0;
    }
    function tn(L, J) {
      for (var k = -1, sA = L == null ? 0 : L.length, cA = 0, UA = []; ++k < sA; ) {
        var CA = L[k];
        J(CA, k, L) && (UA[cA++] = CA);
      }
      return UA;
    }
    function Jo(L, J) {
      return !!(L != null && L.length) && -1 < qn(L, J, 0);
    }
    function Ru(L, J, k) {
      for (var sA = -1, cA = L == null ? 0 : L.length; ++sA < cA; )
        if (k(J, L[sA]))
          return !0;
      return !1;
    }
    function zA(L, J) {
      for (var k = -1, sA = L == null ? 0 : L.length, cA = Array(sA); ++k < sA; )
        cA[k] = J(L[k], k, L);
      return cA;
    }
    function Ln(L, J) {
      for (var k = -1, sA = J.length, cA = L.length; ++k < sA; )
        L[cA + k] = J[k];
      return L;
    }
    function zr(L, J, k, sA) {
      var cA = -1, UA = L == null ? 0 : L.length;
      for (sA && UA && (k = L[++cA]); ++cA < UA; )
        k = J(k, L[cA], cA, L);
      return k;
    }
    function $r(L, J, k, sA) {
      var cA = L == null ? 0 : L.length;
      for (sA && cA && (k = L[--cA]); cA--; )
        k = J(k, L[cA], cA, L);
      return k;
    }
    function _a(L, J) {
      for (var k = -1, sA = L == null ? 0 : L.length; ++k < sA; )
        if (J(L[k], k, L))
          return !0;
      return !1;
    }
    var Js = Yo("length");
    function Sa(L, J, k) {
      var sA;
      return k(L, function(cA, UA, CA) {
        if (J(cA, UA, CA))
          return sA = UA, !1;
      }), sA;
    }
    function Au(L, J, k, sA) {
      for (var cA = L.length, UA = k + (sA ? 1 : -1); sA ? UA-- : ++UA < cA; )
        if (J(L[UA], UA, L))
          return UA;
      return -1;
    }
    function qn(L, J, k) {
      if (J != J)
        return Au(L, Xo, k);
      for (var sA = L, cA = J, UA = k - 1, CA = sA.length; ++UA < CA; )
        if (sA[UA] === cA)
          return UA;
      return -1;
    }
    function Xs(L, J, k, sA) {
      for (var cA = k - 1, UA = L.length; ++cA < UA; )
        if (sA(L[cA], J))
          return cA;
      return -1;
    }
    function Xo(L) {
      return L != L;
    }
    function Wo(L, J) {
      var k = L == null ? 0 : L.length;
      return k ? Ir(L, J) / k : v;
    }
    function Yo(L) {
      return function(J) {
        return J == null ? e : J[L];
      };
    }
    function Ze(L) {
      return function(J) {
        return L == null ? e : L[J];
      };
    }
    function Zo(L, J, k, sA, cA) {
      return cA(L, function(UA, CA, nn) {
        k = sA ? (sA = !1, UA) : J(k, UA, CA, nn);
      }), k;
    }
    function Ir(L, J) {
      for (var k, sA = -1, cA = L.length; ++sA < cA; ) {
        var UA = J(L[sA]);
        UA !== e && (k = k === e ? UA : k + UA);
      }
      return k;
    }
    function jo(L, J) {
      for (var k = -1, sA = Array(L); ++k < L; )
        sA[k] = J(k);
      return sA;
    }
    function Ta(L) {
      return L && L.slice(0, R(L) + 1).replace(Ha, "");
    }
    function Qt(L) {
      return function(J) {
        return L(J);
      };
    }
    function Oa(L, J) {
      return zA(J, function(k) {
        return L[k];
      });
    }
    function Nu(L, J) {
      return L.has(J);
    }
    function br(L, J) {
      for (var k = -1, sA = L.length; ++k < sA && -1 < qn(J, L[k], 0); )
        ;
      return k;
    }
    function qo(L, J) {
      for (var k = L.length; k-- && -1 < qn(J, L[k], 0); )
        ;
      return k;
    }
    var Ws = Ze({ À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }), zn = Ze({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
    function zo(L) {
      return "\\" + Te[L];
    }
    function Gt(L) {
      return XA.test(L);
    }
    function Ct(L) {
      var J = -1, k = Array(L.size);
      return L.forEach(function(sA, cA) {
        k[++J] = [cA, sA];
      }), k;
    }
    function Ma(L, J) {
      return function(k) {
        return L(J(k));
      };
    }
    function $n(L, J) {
      for (var k = -1, sA = L.length, cA = 0, UA = []; ++k < sA; ) {
        var CA = L[k];
        CA !== J && CA !== d || (L[k] = d, UA[cA++] = k);
      }
      return UA;
    }
    function xn(L) {
      var J = -1, k = Array(L.size);
      return L.forEach(function(sA) {
        k[++J] = sA;
      }), k;
    }
    function M(L) {
      return (Gt(L) ? function(J) {
        for (var k = va.lastIndex = 0; va.test(J); )
          ++k;
        return k;
      } : Js)(L);
    }
    function j(L) {
      return Gt(L) ? L.match(va) || [] : L.split("");
    }
    function R(L) {
      for (var J = L.length; J-- && Kl.test(L.charAt(J)); )
        ;
      return J;
    }
    var dA = Ze({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }), gA = function L(vA) {
      var k = (vA = vA == null ? OA : gA.defaults(OA.Object(), vA, gA.pick(OA, Vl))).Array, ot = vA.Date, sA = vA.Error, cA = vA.Function, UA = vA.Math, CA = vA.Object, nn = vA.RegExp, $o = vA.String, EA = vA.TypeError, Ai = k.prototype, KA = cA.prototype, vr = CA.prototype, _n = vA["__core-js_shared__"], ei = KA.toString, kA = vr.hasOwnProperty, Jl = 0, Vu = (KA = /[^.]+$/.exec(_n && _n.keys && _n.keys.IE_PROTO || "")) ? "Symbol(src)_1." + KA : "", Pu = vr.toString, ti = ei.call(CA), Ys = OA._, Zs = nn("^" + ei.call(kA).replace(Da, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), KA = Ka ? vA.Buffer : e, De = vA.Symbol, Kr = vA.Uint8Array, Ga = KA ? KA.allocUnsafe : e, Ar = Ma(CA.getPrototypeOf, CA), er = CA.create, Ju = vr.propertyIsEnumerable, Sn = Ai.splice, ni = De ? De.isConcatSpreadable : e, tr = De ? De.iterator : e, rn = De ? De.toStringTag : e, eu = function() {
        try {
          var n = ir(CA, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), Lr = vA.clearTimeout !== OA.clearTimeout && vA.clearTimeout, Fo = ot && ot.now !== OA.Date.now && ot.now, ka = vA.setTimeout !== OA.setTimeout && vA.setTimeout, ri = UA.ceil, ce = UA.floor, Le = CA.getOwnPropertySymbols, KA = KA ? KA.isBuffer : e, js = vA.isFinite, Xl = Ai.join, qs = Ma(CA.keys, CA), Ee = UA.max, ZA = UA.min, Xu = ot.now, Wu = vA.parseInt, xr = UA.random, bA = Ai.reverse, ot = ir(vA, "DataView"), nr = ir(vA, "Map"), un = ir(vA, "Promise"), tu = ir(vA, "Set"), vA = ir(vA, "WeakMap"), Yu = ir(CA, "create"), ui = vA && new vA(), nu = {}, Zu = dr(ot), zs = dr(nr), D = dr(un), ru = dr(tu), Ra = dr(vA), De = De ? De.prototype : e, rr = De ? De.valueOf : e, bt = De ? De.toString : e;
      function E(n) {
        if (oe(n) && !BA(n) && !(n instanceof hA)) {
          if (n instanceof Oe)
            return n;
          if (kA.call(n, "__wrapped__"))
            return Dt(n);
        }
        return new Oe(n);
      }
      var vt = function(n) {
        return jA(n) ? er ? er(n) : (kt.prototype = n, n = new kt(), kt.prototype = e, n) : {};
      };
      function kt() {
      }
      function Kt() {
      }
      function Oe(n, o) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!o, this.__index__ = 0, this.__values__ = e;
      }
      function hA(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = K, this.__views__ = [];
      }
      function ur(n) {
        var o = -1, s = n == null ? 0 : n.length;
        for (this.clear(); ++o < s; ) {
          var f = n[o];
          this.set(f[0], f[1]);
        }
      }
      function on(n) {
        var o = -1, s = n == null ? 0 : n.length;
        for (this.clear(); ++o < s; ) {
          var f = n[o];
          this.set(f[0], f[1]);
        }
      }
      function Tn(n) {
        var o = -1, s = n == null ? 0 : n.length;
        for (this.clear(); ++o < s; ) {
          var f = n[o];
          this.set(f[0], f[1]);
        }
      }
      function _r(n) {
        var o = -1, s = n == null ? 0 : n.length;
        for (this.__data__ = new Tn(); ++o < s; )
          this.add(n[o]);
      }
      function ht(n) {
        n = this.__data__ = new on(n), this.size = n.size;
      }
      function uu(n, o) {
        var s, f = BA(n), C = !f && Bt(n), F = !f && !C && Yt(n), p = !f && !C && !F && QA(n), H = f || C || F || p, y = H ? jo(n.length, $o) : [], x = y.length;
        for (s in n)
          !o && !kA.call(n, s) || H && (s == "length" || F && (s == "offset" || s == "parent") || p && (s == "buffer" || s == "byteLength" || s == "byteOffset") || mt(s, x)) || y.push(s);
        return y;
      }
      function ju(n) {
        var o = n.length;
        return o ? n[Mr(0, o - 1)] : e;
      }
      function Wl(n, o) {
        return fo(je(n), it(o, 0, n.length));
      }
      function $s(n) {
        return fo(je(n));
      }
      function Rt(n, o, s) {
        (s === e || Wt(n[o], s)) && (s !== e || o in n) || dn(n, o, s);
      }
      function Sr(n, o, s) {
        var f = n[o];
        kA.call(n, o) && Wt(f, s) && (s !== e || o in n) || dn(n, o, s);
      }
      function an(n, o) {
        for (var s = n.length; s--; )
          if (Wt(n[s][0], o))
            return s;
        return -1;
      }
      function Lt(n, o, s, f) {
        return $A(n, function(C, F, p) {
          o(f, C, s(C), p);
        }), f;
      }
      function Na(n, o) {
        return n && Pt(o, xe(o), n);
      }
      function dn(n, o, s) {
        o == "__proto__" && eu ? eu(n, o, { configurable: !0, enumerable: !0, value: s, writable: !0 }) : n[o] = s;
      }
      function Tr(n, o) {
        for (var s = -1, f = o.length, C = k(f), F = n == null; ++s < f; )
          C[s] = F ? e : Ue(n, o[s]);
        return C;
      }
      function it(n, o, s) {
        return n = n == n && (s !== e && (n = n <= s ? n : s), o !== e) ? o <= n ? n : o : n;
      }
      function Ft(n, o, s, f, C, F) {
        var p, H = 1 & o, y = 2 & o, x = 4 & o;
        if ((p = s ? C ? s(n, f, C, F) : s(n) : p) === e) {
          if (!jA(n))
            return n;
          var T, f = BA(n);
          if (f) {
            if (p = function(Y) {
              var rA = Y.length, z = new Y.constructor(rA);
              return rA && typeof Y[0] == "string" && kA.call(Y, "index") && (z.index = Y.index, z.input = Y.input), z;
            }(n), !H)
              return je(n, p);
          } else {
            var _ = MA(n), G = _ == P || _ == wA;
            if (Yt(n))
              return $a(n, H);
            if (_ == DA || _ == S || G && !C) {
              if (p = y || G ? {} : Li(n), !H)
                return y ? (V = G = n, V = (T = p) && Pt(V, ze(V), T), Pt(G, fn(G), V)) : (G = Na(p, T = n), Pt(T, ad(T), G));
            } else {
              if (!TA[_])
                return C ? n : {};
              p = function(Y, rA, z) {
                var nA = Y.constructor;
                switch (rA) {
                  case ue:
                    return Re(Y);
                  case N:
                  case oA:
                    return new nA(+Y);
                  case se:
                    return function(iA, yA) {
                      return yA = yA ? Re(iA.buffer) : iA.buffer, new iA.constructor(yA, iA.byteOffset, iA.byteLength);
                    }(Y, z);
                  case yn:
                  case Tu:
                  case Ou:
                  case Mu:
                  case ha:
                  case Fa:
                  case Ua:
                  case Oo:
                  case Mo:
                    return Vt(Y, z);
                  case Z:
                    return new nA();
                  case IA:
                  case RA:
                    return new nA(Y);
                  case we:
                    return function(iA) {
                      var yA = new iA.constructor(iA.source, Os.exec(iA));
                      return yA.lastIndex = iA.lastIndex, yA;
                    }(Y);
                  case _A:
                    return new nA();
                  case We:
                    return function(iA) {
                      return rr ? CA(rr.call(iA)) : {};
                    }(Y);
                }
              }(n, _, H);
            }
          }
          var V = (F = F || new ht()).get(n);
          if (V)
            return V;
          F.set(n, p), Cc(n) ? n.forEach(function(Y) {
            p.add(Ft(Y, o, s, Y, n, F));
          }) : Uo(n) && n.forEach(function(Y, rA) {
            p.set(rA, Ft(Y, o, s, rA, n, F));
          });
          var X = f ? e : (x ? y ? cu : lA : y ? ze : xe)(n);
          ut(X || n, function(Y, rA) {
            X && (Y = n[rA = Y]), Sr(p, rA, Ft(Y, o, s, rA, n, F));
          });
        }
        return p;
      }
      function Ac(n, o, s) {
        var f = s.length;
        if (n == null)
          return !f;
        for (n = CA(n); f--; ) {
          var C = s[f], F = o[C], p = n[C];
          if (p === e && !(C in n) || !F(p))
            return !1;
        }
        return !0;
      }
      function qu(n, o, s) {
        if (typeof n != "function")
          throw new EA(r);
        return Nr(function() {
          n.apply(e, s);
        }, o);
      }
      function ou(n, o, s, f) {
        var C = -1, F = Jo, p = !0, H = n.length, y = [], x = o.length;
        if (H) {
          s && (o = zA(o, Qt(s))), f ? (F = Ru, p = !1) : 200 <= o.length && (F = Nu, p = !1, o = new _r(o));
          A:
            for (; ++C < H; ) {
              var _ = n[C], T = s == null ? _ : s(_), _ = f || _ !== 0 ? _ : 0;
              if (p && T == T) {
                for (var G = x; G--; )
                  if (o[G] === T)
                    continue A;
                y.push(_);
              } else
                F(o, T, f) || y.push(_);
            }
        }
        return y;
      }
      E.templateSettings = { escape: yl, evaluate: Ea, interpolate: Ss, variable: "", imports: { _: E } }, (E.prototype = Kt.prototype).constructor = E, (Oe.prototype = vt(Kt.prototype)).constructor = Oe, (hA.prototype = vt(Kt.prototype)).constructor = hA, ur.prototype.clear = function() {
        this.__data__ = Yu ? Yu(null) : {}, this.size = 0;
      }, ur.prototype.delete = function(n) {
        return n = this.has(n) && delete this.__data__[n], this.size -= n ? 1 : 0, n;
      }, ur.prototype.get = function(n) {
        var o, s = this.__data__;
        return Yu ? (o = s[n]) === i ? e : o : kA.call(s, n) ? s[n] : e;
      }, ur.prototype.has = function(n) {
        var o = this.__data__;
        return Yu ? o[n] !== e : kA.call(o, n);
      }, ur.prototype.set = function(n, o) {
        var s = this.__data__;
        return this.size += this.has(n) ? 0 : 1, s[n] = Yu && o === e ? i : o, this;
      }, on.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, on.prototype.delete = function(n) {
        var o = this.__data__;
        return !((n = an(o, n)) < 0 || (n == o.length - 1 ? o.pop() : Sn.call(o, n, 1), --this.size, 0));
      }, on.prototype.get = function(n) {
        var o = this.__data__;
        return (n = an(o, n)) < 0 ? e : o[n][1];
      }, on.prototype.has = function(n) {
        return -1 < an(this.__data__, n);
      }, on.prototype.set = function(n, o) {
        var s = this.__data__, f = an(s, n);
        return f < 0 ? (++this.size, s.push([n, o])) : s[f][1] = o, this;
      }, Tn.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new ur(), map: new (nr || on)(), string: new ur() };
      }, Tn.prototype.delete = function(n) {
        return n = He(this, n).delete(n), this.size -= n ? 1 : 0, n;
      }, Tn.prototype.get = function(n) {
        return He(this, n).get(n);
      }, Tn.prototype.has = function(n) {
        return He(this, n).has(n);
      }, Tn.prototype.set = function(n, o) {
        var s = He(this, n), f = s.size;
        return s.set(n, o), this.size += s.size == f ? 0 : 1, this;
      }, _r.prototype.add = _r.prototype.push = function(n) {
        return this.__data__.set(n, i), this;
      }, _r.prototype.has = function(n) {
        return this.__data__.has(n);
      }, ht.prototype.clear = function() {
        this.__data__ = new on(), this.size = 0;
      }, ht.prototype.delete = function(s) {
        var o = this.__data__, s = o.delete(s);
        return this.size = o.size, s;
      }, ht.prototype.get = function(n) {
        return this.__data__.get(n);
      }, ht.prototype.has = function(n) {
        return this.__data__.has(n);
      }, ht.prototype.set = function(n, o) {
        var s = this.__data__;
        if (s instanceof on) {
          var f = s.__data__;
          if (!nr || f.length < 199)
            return f.push([n, o]), this.size = ++s.size, this;
          s = this.__data__ = new Tn(f);
        }
        return s.set(n, o), this.size = s.size, this;
      };
      var $A = rc(Ae), oi = rc(zu, !0);
      function ec(n, o) {
        var s = !0;
        return $A(n, function(f, C, F) {
          return s = !!o(f, C, F);
        }), s;
      }
      function Ut(n, o, s) {
        for (var f = -1, C = n.length; ++f < C; ) {
          var F, p, H = n[f], y = o(H);
          y != null && (F === e ? y == y && !Ce(y) : s(y, F)) && (F = y, p = H);
        }
        return p;
      }
      function ii(n, o) {
        var s = [];
        return $A(n, function(f, C, F) {
          o(f, C, F) && s.push(f);
        }), s;
      }
      function Fe(n, o, s, f, C) {
        var F = -1, p = n.length;
        for (s = s || ql, C = C || []; ++F < p; ) {
          var H = n[F];
          0 < o && s(H) ? 1 < o ? Fe(H, o - 1, s, f, C) : Ln(C, H) : f || (C[C.length] = H);
        }
        return C;
      }
      var On = ed(), Va = ed(!0);
      function Ae(n, o) {
        return n && On(n, o, xe);
      }
      function zu(n, o) {
        return n && Va(n, o, xe);
      }
      function ai(n, o) {
        return tn(o, function(s) {
          return gn(n[s]);
        });
      }
      function Or(n, o) {
        for (var s = 0, f = (o = Gn(o, n)).length; n != null && s < f; )
          n = n[Xt(o[s++])];
        return s && s == f ? n : e;
      }
      function di(n, o, s) {
        return o = o(n), BA(n) ? o : Ln(o, s(n));
      }
      function me(n) {
        if (n == null)
          return n === e ? "[object Undefined]" : "[object Null]";
        if (rn && rn in CA(n)) {
          var o = n, s = kA.call(o, rn), f = o[rn];
          try {
            o[rn] = e;
            var C = !0;
          } catch {
          }
          var F = Pu.call(o);
          return C && (s ? o[rn] = f : delete o[rn]), F;
        }
        return Pu.call(n);
      }
      function si(n, o) {
        return o < n;
      }
      function $u(n, o) {
        return n != null && kA.call(n, o);
      }
      function Pa(n, o) {
        return n != null && o in CA(n);
      }
      function ci(n, o, s) {
        for (var f = s ? Ru : Jo, C = n[0].length, F = n.length, p = F, H = k(F), y = 1 / 0, x = []; p--; ) {
          var T = n[p];
          p && o && (T = zA(T, Qt(o))), y = ZA(T.length, y), H[p] = !s && (o || 120 <= C && 120 <= T.length) ? new _r(p && T) : e;
        }
        var T = n[0], _ = -1, G = H[0];
        A:
          for (; ++_ < C && x.length < y; ) {
            var X = T[_], V = o ? o(X) : X, X = s || X !== 0 ? X : 0;
            if (!(G ? Nu(G, V) : f(x, V, s))) {
              for (p = F; --p; ) {
                var W = H[p];
                if (!(W ? Nu(W, V) : f(n[p], V, s)))
                  continue A;
              }
              G && G.push(V), x.push(X);
            }
          }
        return x;
      }
      function iu(n, o, s) {
        return o = (n = sd(n, o = Gn(o, n))) == null ? n : n[Xt(St(o))], o == null ? e : he(o, n, s);
      }
      function Bi(n) {
        return oe(n) && me(n) == S;
      }
      function Ao(n, o, s, f, C) {
        if (n === o)
          return !0;
        if (n == null || o == null || !oe(n) && !oe(o))
          return n != n && o != o;
        var F = Ao, p = BA(n), y = BA(o), H = p ? O : MA(n), y = y ? O : MA(o), x = (H = H == S ? DA : H) == DA, T = (y = y == S ? DA : y) == DA;
        if ((y = H == y) && Yt(n)) {
          if (!Yt(o))
            return !1;
          x = !(p = !0);
        }
        if (y && !x) {
          if (C = C || new ht(), p || QA(n))
            return co(n, o, s, f, F, C);
          var _ = n, G = o, V = H, X = s, W = f, Y = F, rA = C;
          switch (V) {
            case se:
              if (_.byteLength != G.byteLength || _.byteOffset != G.byteOffset)
                return !1;
              _ = _.buffer, G = G.buffer;
            case ue:
              return !!(_.byteLength == G.byteLength && Y(new Kr(_), new Kr(G)));
            case N:
            case oA:
            case IA:
              return Wt(+_, +G);
            case q:
              return _.name == G.name && _.message == G.message;
            case we:
            case RA:
              return _ == G + "";
            case Z:
              var z = Ct;
            case _A:
              var nA = 1 & X;
              return z = z || xn, _.size != G.size && !nA ? !1 : (nA = rA.get(_), nA ? nA == G : (X |= 2, rA.set(_, G), nA = co(z(_), z(G), X, W, Y, rA), rA.delete(_), nA));
            case We:
              if (rr)
                return rr.call(_) == rr.call(G);
          }
          return !1;
        }
        if (!(1 & s) && (p = x && kA.call(n, "__wrapped__"), H = T && kA.call(o, "__wrapped__"), p || H))
          return x = p ? n.value() : n, T = H ? o.value() : o, C = C || new ht(), F(x, T, s, f, C);
        if (y) {
          C = C || new ht();
          var iA = n, yA = o, ye = s, ft = f, At = F, ie = C, Vn = 1 & ye, Br = lA(iA), mo = Br.length, p = lA(yA).length;
          if (mo != p && !Vn)
            return !1;
          for (var Vr = mo; Vr--; ) {
            var Zt = Br[Vr];
            if (!(Vn ? Zt in yA : kA.call(yA, Zt)))
              return !1;
          }
          if (p = ie.get(iA), H = ie.get(yA), p && H)
            return p == yA && H == iA;
          for (var Kc = !0, bf = (ie.set(iA, yA), ie.set(yA, iA), Vn); ++Vr < mo; ) {
            Zt = Br[Vr];
            var vf, Lc = iA[Zt], xc = yA[Zt];
            if (!((vf = ft ? Vn ? ft(xc, Lc, Zt, yA, iA, ie) : ft(Lc, xc, Zt, iA, yA, ie) : vf) === e ? Lc === xc || At(Lc, xc, ye, ft, ie) : vf)) {
              Kc = !1;
              break;
            }
            bf = bf || Zt == "constructor";
          }
          return Kc && !bf && (p = iA.constructor, H = yA.constructor, p != H) && "constructor" in iA && "constructor" in yA && !(typeof p == "function" && p instanceof p && typeof H == "function" && H instanceof H) && (Kc = !1), ie.delete(iA), ie.delete(yA), Kc;
        }
        return !1;
      }
      function eo(n, o, s, f) {
        var C = s.length, F = C, p = !f;
        if (n == null)
          return !F;
        for (n = CA(n); C--; ) {
          var H = s[C];
          if (p && H[2] ? H[1] !== n[H[0]] : !(H[0] in n))
            return !1;
        }
        for (; ++C < F; ) {
          var y = (H = s[C])[0], x = n[y], T = H[1];
          if (p && H[2]) {
            if (x === e && !(y in n))
              return !1;
          } else {
            var _, G = new ht();
            if (!((_ = f ? f(x, T, y, n, o, G) : _) === e ? Ao(T, x, 3, f, G) : _))
              return !1;
          }
        }
        return !0;
      }
      function Ja(n) {
        var o;
        return !(!jA(n) || (o = n, Vu && Vu in o)) && (gn(n) ? Zs : Gl).test(dr(n));
      }
      function Xa(n) {
        return typeof n == "function" ? n : n == null ? Pe : typeof n == "object" ? BA(n) ? wi(n[0], n[1]) : Ya(n) : vc(n);
      }
      function li(n) {
        if (!Rr(n))
          return qs(n);
        var o, s = [];
        for (o in CA(n))
          kA.call(n, o) && o != "constructor" && s.push(o);
        return s;
      }
      function fi(n) {
        if (!jA(n)) {
          var o = n, s = [];
          if (o != null)
            for (var f in CA(o))
              s.push(f);
          return s;
        }
        var C, F = Rr(n), p = [];
        for (C in n)
          (C != "constructor" || !F && kA.call(n, C)) && p.push(C);
        return p;
      }
      function gi(n, o) {
        return n < o;
      }
      function Wa(n, o) {
        var s = -1, f = Be(n) ? k(n.length) : [];
        return $A(n, function(C, F, p) {
          f[++s] = o(C, F, p);
        }), f;
      }
      function Ya(n) {
        var o = vi(n);
        return o.length == 1 && o[0][2] ? Bu(o[0][0], o[0][1]) : function(s) {
          return s === n || eo(s, n, o);
        };
      }
      function wi(n, o) {
        return xi(n) && dd(o) ? Bu(Xt(n), o) : function(s) {
          var f = Ue(s, n);
          return f === e && f === o ? Ve(s, n) : Ao(o, f, 3);
        };
      }
      function to(n, o, s, f, C) {
        n !== o && On(o, function(F, p) {
          var H, y, x, T, _, G, V, X, W, Y, rA, z, nA;
          C = C || new ht(), jA(F) ? (y = o, T = s, _ = to, G = f, V = C, rA = Ti(H = n, x = p), z = Ti(y, x), (nA = V.get(z)) || (nA = G ? G(rA, z, x + "", H, y, V) : e, (y = nA === e) && (X = BA(z), W = !X && Yt(z), Y = !X && !W && QA(z), nA = z, X || W || Y ? nA = BA(rA) ? rA : le(rA) ? je(rA) : W ? $a(z, !(y = !1)) : Y ? Vt(z, !(y = !1)) : [] : wn(z) || Bt(z) ? Bt(nA = rA) ? nA = Fc(rA) : jA(rA) && !gn(rA) || (nA = Li(z)) : y = !1), y && (V.set(z, nA), _(nA, z, T, G, V), V.delete(z))), Rt(H, x, nA)) : (X = f ? f(Ti(n, p), F, p + "", n, o, C) : e, Rt(n, p, X = X === e ? F : X));
        }, ze);
      }
      function Qi(n, o) {
        var s = n.length;
        if (s)
          return mt(o += o < 0 ? s : 0, s) ? n[o] : e;
      }
      function Ci(F, o, s) {
        o = o.length ? zA(o, function(H) {
          return BA(H) ? function(y) {
            return Or(y, H.length === 1 ? H[0] : H);
          } : H;
        }) : [Pe];
        var f = -1;
        o = zA(o, Qt(fA()));
        var C = Wa(F, function(H, y, x) {
          return { criteria: zA(o, function(T) {
            return T(H);
          }), index: ++f, value: H };
        }), F = function(H, y) {
          for (var x = s, T = -1, _ = H.criteria, G = y.criteria, V = _.length, X = x.length; ++T < V; ) {
            var W, Y = ao(_[T], G[T]);
            if (Y)
              return X <= T ? Y : (W = x[T], Y * (W == "desc" ? -1 : 1));
          }
          return H.index - y.index;
        }, p = C.length;
        for (C.sort(F); p--; )
          C[p] = C[p].value;
        return C;
      }
      function mA(n, o, s) {
        for (var f = -1, C = o.length, F = {}; ++f < C; ) {
          var p = o[f], H = Or(n, p);
          s(H, p) && no(F, Gn(p, n), H);
        }
        return F;
      }
      function Za(n, o, s, f) {
        var C = f ? Xs : qn, F = -1, p = o.length, H = n;
        for (n === o && (o = je(o)), s && (H = zA(n, Qt(s))); ++F < p; )
          for (var y = 0, x = o[F], T = s ? s(x) : x; -1 < (y = C(H, T, y, f)); )
            H !== n && Sn.call(H, y, 1), Sn.call(n, y, 1);
        return n;
      }
      function tc(n, o) {
        for (var s = n ? o.length : 0, f = s - 1; s--; ) {
          var C, F = o[s];
          s != f && F === C || (mt(C = F) ? Sn.call(n, F, 1) : Fi(n, F));
        }
      }
      function Mr(n, o) {
        return n + ce(xr() * (o - n + 1));
      }
      function hi(n, o) {
        var s = "";
        if (!(!n || o < 1 || b < o))
          for (; o % 2 && (s += n), (o = ce(o / 2)) && (n += n), o; )
            ;
        return s;
      }
      function aA(n, o) {
        return Oi(Si(n, o, Pe), n + "");
      }
      function Yl(n) {
        return ju(wu(n));
      }
      function xt(n, o) {
        return n = wu(n), fo(n, it(o, 0, n.length));
      }
      function no(n, o, s, f) {
        if (jA(n))
          for (var C = -1, F = (o = Gn(o, n)).length, p = F - 1, H = n; H != null && ++C < F; ) {
            var y, x = Xt(o[C]), T = s;
            if (x === "__proto__" || x === "constructor" || x === "prototype")
              return n;
            Sr(H, x, T = C != p && (y = H[x], (T = f ? f(y, x, H) : e) === e) ? jA(y) ? y : mt(o[C + 1]) ? [] : {} : T), H = H[x];
          }
        return n;
      }
      var ro = ui ? function(n, o) {
        return ui.set(n, o), n;
      } : Pe, De = eu ? function(n, o) {
        return eu(n, "toString", { configurable: !0, enumerable: !1, value: Kd(o), writable: !0 });
      } : Pe;
      function nc(n) {
        return fo(wu(n));
      }
      function pt(n, o, s) {
        for (var f = -1, C = n.length, F = ((s = C < s ? C : s) < 0 && (s += C), C = s < (o = o < 0 ? C < -o ? 0 : C + o : o) ? 0 : s - o >>> 0, o >>>= 0, k(C)); ++f < C; )
          F[f] = n[f + o];
        return F;
      }
      function Et(n, o) {
        var s;
        return $A(n, function(f, C, F) {
          return !(s = o(f, C, F));
        }), !!s;
      }
      function Nt(n, o, s) {
        var f = 0, C = n == null ? f : n.length;
        if (typeof o == "number" && o == o && C <= 2147483647) {
          for (; f < C; ) {
            var F = f + C >>> 1, p = n[F];
            p !== null && !Ce(p) && (s ? p <= o : p < o) ? f = 1 + F : C = F;
          }
          return C;
        }
        return uo(n, o, Pe, s);
      }
      function uo(n, o, s, f) {
        var C = 0, F = n == null ? 0 : n.length;
        if (F === 0)
          return 0;
        for (var p = (o = s(o)) != o, H = o === null, y = Ce(o), x = o === e; C < F; ) {
          var T = ce((C + F) / 2), _ = s(n[T]), G = _ !== e, V = _ === null, W = _ == _, X = Ce(_), W = p ? f || W : x ? W && (f || G) : H ? W && G && (f || !V) : y ? W && G && !V && (f || !X) : !V && !X && (f ? _ <= o : _ < o);
          W ? C = T + 1 : F = T;
        }
        return ZA(F, 4294967294);
      }
      function ja(n, o) {
        for (var s = -1, f = n.length, C = 0, F = []; ++s < f; ) {
          var p, H = n[s], y = o ? o(H) : H;
          s && Wt(y, p) || (p = y, F[C++] = H === 0 ? 0 : H);
        }
        return F;
      }
      function oo(n) {
        return typeof n == "number" ? n : Ce(n) ? v : +n;
      }
      function at(n) {
        var o;
        return typeof n == "string" ? n : BA(n) ? zA(n, at) + "" : Ce(n) ? bt ? bt.call(n) : "" : (o = n + "") == "0" && 1 / n == -m ? "-0" : o;
      }
      function sn(n, o, s) {
        var f = -1, C = Jo, F = n.length, p = !0, H = [], y = H;
        if (s)
          p = !1, C = Ru;
        else if (200 <= F) {
          var x = o ? null : jl(n);
          if (x)
            return xn(x);
          p = !1, C = Nu, y = new _r();
        } else
          y = o ? [] : H;
        A:
          for (; ++f < F; ) {
            var _ = n[f], T = o ? o(_) : _, _ = s || _ !== 0 ? _ : 0;
            if (p && T == T) {
              for (var G = y.length; G--; )
                if (y[G] === T)
                  continue A;
              o && y.push(T), H.push(_);
            } else
              C(y, T, s) || (y !== H && y.push(T), H.push(_));
          }
        return H;
      }
      function Fi(n, o) {
        return (n = sd(n, o = Gn(o, n))) == null || delete n[Xt(St(o))];
      }
      function Ui(n, o, s, f) {
        return no(n, o, s(Or(n, o)), f);
      }
      function au(n, o, s, f) {
        for (var C = n.length, F = f ? C : -1; (f ? F-- : ++F < C) && o(n[F], F, n); )
          ;
        return s ? pt(n, f ? 0 : F, f ? F + 1 : C) : pt(n, f ? F + 1 : 0, f ? C : F);
      }
      function Mn(n, o) {
        var s = n;
        return zr(o, function(f, C) {
          return C.func.apply(C.thisArg, Ln([f], C.args));
        }, s = n instanceof hA ? n.value() : s);
      }
      function cn(n, o, s) {
        var f = n.length;
        if (f < 2)
          return f ? sn(n[0]) : [];
        for (var C = -1, F = k(f); ++C < f; )
          for (var p = n[C], H = -1; ++H < f; )
            H != C && (F[C] = ou(F[C] || p, n[H], o, s));
        return sn(Fe(F, 1), o, s);
      }
      function qa(n, o, s) {
        for (var f = -1, C = n.length, F = o.length, p = {}; ++f < C; ) {
          var H = f < F ? o[f] : e;
          s(p, n[f], H);
        }
        return p;
      }
      function pi(n) {
        return le(n) ? n : [];
      }
      function io(n) {
        return typeof n == "function" ? n : Pe;
      }
      function Gn(n, o) {
        return BA(n) ? n : xi(n, o) ? [n] : cd(GA(n));
      }
      var wd = aA;
      function kn(n, o, s) {
        var f = n.length;
        return s = s === e ? f : s, !o && f <= s ? n : pt(n, o, s);
      }
      var za = Lr || function(n) {
        return OA.clearTimeout(n);
      };
      function $a(n, o) {
        return o ? n.slice() : (o = n.length, o = Ga ? Ga(o) : new n.constructor(o), n.copy(o), o);
      }
      function Re(n) {
        var o = new n.constructor(n.byteLength);
        return new Kr(o).set(new Kr(n)), o;
      }
      function Vt(n, o) {
        return o = o ? Re(n.buffer) : n.buffer, new n.constructor(o, n.byteOffset, n.length);
      }
      function ao(n, o) {
        if (n !== o) {
          var s = n !== e, f = n === null, C = n == n, F = Ce(n), p = o !== e, H = o === null, y = o == o, x = Ce(o);
          if (!H && !x && !F && o < n || F && p && y && !H && !x || f && p && y || !s && y || !C)
            return 1;
          if (!f && !F && !x && n < o || x && s && C && !f && !F || H && s && C || !p && C || !y)
            return -1;
        }
        return 0;
      }
      function Gr(n, o, s, f) {
        for (var C = -1, F = n.length, p = s.length, H = -1, y = o.length, x = Ee(F - p, 0), T = k(y + x), _ = !f; ++H < y; )
          T[H] = o[H];
        for (; ++C < p; )
          (_ || C < F) && (T[s[C]] = n[C]);
        for (; x--; )
          T[H++] = n[C++];
        return T;
      }
      function Ad(n, o, s, f) {
        for (var C = -1, F = n.length, p = -1, H = s.length, y = -1, x = o.length, T = Ee(F - H, 0), _ = k(T + x), G = !f; ++C < T; )
          _[C] = n[C];
        for (var V = C; ++y < x; )
          _[V + y] = o[y];
        for (; ++p < H; )
          (G || C < F) && (_[V + s[p]] = n[C++]);
        return _;
      }
      function je(n, o) {
        var s = -1, f = n.length;
        for (o = o || k(f); ++s < f; )
          o[s] = n[s];
        return o;
      }
      function Pt(n, o, s, f) {
        for (var C = !s, F = (s = s || {}, -1), p = o.length; ++F < p; ) {
          var H = o[F], y = f ? f(s[H], n[H], H, s, n) : e;
          (C ? dn : Sr)(s, H, y = y === e ? n[H] : y);
        }
        return s;
      }
      function Rn(n, o) {
        return function(s, f) {
          var C = BA(s) ? Po : Lt, F = o ? o() : {};
          return C(s, n, fA(f, 2), F);
        };
      }
      function Bn(n) {
        return aA(function(o, s) {
          var f = -1, C = s.length, p = 1 < C ? s[C - 1] : e, F = 2 < C ? s[2] : e, p = 3 < n.length && typeof p == "function" ? (C--, p) : e;
          for (F && Ne(s[0], s[1], F) && (p = C < 3 ? e : p, C = 1), o = CA(o); ++f < C; ) {
            var H = s[f];
            H && n(o, H, f, p);
          }
          return o;
        });
      }
      function rc(n, o) {
        return function(s, f) {
          if (s != null) {
            if (!Be(s))
              return n(s, f);
            for (var C = s.length, F = o ? C : -1, p = CA(s); (o ? F-- : ++F < C) && f(p[F], F, p) !== !1; )
              ;
          }
          return s;
        };
      }
      function ed(n) {
        return function(o, s, f) {
          for (var C = -1, F = CA(o), p = f(o), H = p.length; H--; ) {
            var y = p[n ? H : ++C];
            if (s(F[y], y, F) === !1)
              break;
          }
          return o;
        };
      }
      function td(n) {
        return function(o) {
          var f = Gt(o = GA(o)) ? j(o) : e, s = f ? f[0] : o.charAt(0), f = f ? kn(f, 1).join("") : o.slice(1);
          return s[n]() + f;
        };
      }
      function Nn(n) {
        return function(o) {
          return zr(bc(Hc(o).replace(kl, "")), n, "");
        };
      }
      function du(n) {
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return new n();
            case 1:
              return new n(o[0]);
            case 2:
              return new n(o[0], o[1]);
            case 3:
              return new n(o[0], o[1], o[2]);
            case 4:
              return new n(o[0], o[1], o[2], o[3]);
            case 5:
              return new n(o[0], o[1], o[2], o[3], o[4]);
            case 6:
              return new n(o[0], o[1], o[2], o[3], o[4], o[5]);
            case 7:
              return new n(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
          }
          var s = vt(n.prototype), f = n.apply(s, o);
          return jA(f) ? f : s;
        };
      }
      function Ei(n, o, s) {
        var f = du(n);
        return function C() {
          for (var F = arguments.length, p = k(F), H = F, y = or(C); H--; )
            p[H] = arguments[H];
          return y = F < 3 && p[0] !== y && p[F - 1] !== y ? [] : $n(p, y), (F -= y.length) < s ? ud(n, o, Di, C.placeholder, e, p, y, e, e, s - F) : he(this && this !== OA && this instanceof C ? f : n, this, p);
        };
      }
      function mi(n) {
        return function(o, p, f) {
          var C, F = CA(o), p = (Be(o) || (C = fA(p, 3), o = xe(o), p = function(H) {
            return C(F[H], H, F);
          }), n(o, p, f));
          return -1 < p ? F[C ? o[p] : p] : e;
        };
      }
      function so(n) {
        return dt(function(o) {
          var s = o.length, f = s, C = Oe.prototype.thru;
          for (n && o.reverse(); f--; ) {
            var F = o[f];
            if (typeof F != "function")
              throw new EA(r);
            C && !y && ln(F) == "wrapper" && (y = new Oe([], !0));
          }
          for (f = y ? f : s; ++f < s; )
            var p = ln(F = o[f]), H = p == "wrapper" ? Bo(F) : e, y = H && _i(H[0]) && H[1] == 424 && !H[4].length && H[9] == 1 ? y[ln(H[0])].apply(y, H[3]) : F.length == 1 && _i(F) ? y[p]() : y.thru(F);
          return function() {
            var x = arguments, T = x[0];
            if (y && x.length == 1 && BA(T))
              return y.plant(T).value();
            for (var _ = 0, G = s ? o[_].apply(this, x) : T; ++_ < s; )
              G = o[_].call(this, G);
            return G;
          };
        });
      }
      function Di(n, o, s, f, C, F, p, H, y, x) {
        var T = o & Q, _ = 1 & o, G = 2 & o, V = 24 & o, X = 512 & o, W = G ? e : du(n);
        return function Y() {
          for (var rA, z, nA, iA = k(nA = arguments.length), yA = nA; yA--; )
            iA[yA] = arguments[yA];
          return V && (z = function(ye, ft) {
            for (var At = ye.length, ie = 0; At--; )
              ye[At] === ft && ++ie;
            return ie;
          }(iA, rA = or(Y))), f && (iA = Gr(iA, f, C, V)), F && (iA = Ad(iA, F, p, V)), nA -= z, V && nA < x ? (z = $n(iA, rA), ud(n, o, Di, Y.placeholder, s, iA, z, H, y, x - nA)) : (rA = _ ? s : this, z = G ? rA[n] : n, nA = iA.length, H ? iA = function(ye, ft) {
            for (var At = ye.length, ie = ZA(ft.length, At), Vn = je(ye); ie--; ) {
              var Br = ft[ie];
              ye[ie] = mt(Br, At) ? Vn[Br] : e;
            }
            return ye;
          }(iA, H) : X && 1 < nA && iA.reverse(), T && y < nA && (iA.length = y), (z = this && this !== OA && this instanceof Y ? W || du(z) : z).apply(rA, iA));
        };
      }
      function nd(n, o) {
        return function(s, f) {
          return s = s, C = n, F = o(f), p = {}, Ae(s, function(H, y, x) {
            C(p, F(H), y, x);
          }), p;
          var C, F, p;
        };
      }
      function kr(n, o) {
        return function(s, f) {
          var C;
          if (s === e && f === e)
            return o;
          if (s !== e && (C = s), f !== e) {
            if (C === e)
              return f;
            f = (typeof s == "string" || typeof f == "string" ? (s = at(s), at) : (s = oo(s), oo))(f), C = n(s, f);
          }
          return C;
        };
      }
      function Hi(n) {
        return dt(function(o) {
          return o = zA(o, Qt(fA())), aA(function(s) {
            var f = this;
            return n(o, function(C) {
              return he(C, f, s);
            });
          });
        });
      }
      function su(n, o) {
        var s = (o = o === e ? " " : at(o)).length;
        return s < 2 ? s ? hi(o, n) : o : (s = hi(o, ri(n / M(o))), Gt(o) ? kn(j(s), 0, n).join("") : s.slice(0, n));
      }
      function Zl(n, o, s, f) {
        var C = 1 & o, F = du(n);
        return function p() {
          for (var H = -1, y = arguments.length, x = -1, T = f.length, _ = k(T + y), G = this && this !== OA && this instanceof p ? F : n; ++x < T; )
            _[x] = f[x];
          for (; y--; )
            _[x++] = arguments[++H];
          return he(G, C ? s : this, _);
        };
      }
      function rd(n) {
        return function(o, s, f) {
          f && typeof f != "number" && Ne(o, s, f) && (s = f = e), o = HA(o), s === e ? (s = o, o = 0) : s = HA(s), f = f === e ? o < s ? 1 : -1 : HA(f);
          for (var C = o, F = f, p = n, H = -1, y = Ee(ri((s - C) / (F || 1)), 0), x = k(y); y--; )
            x[p ? y : ++H] = C, C += F;
          return x;
        };
      }
      function _t(n) {
        return function(o, s) {
          return typeof o == "string" && typeof s == "string" || (o = qe(o), s = qe(s)), n(o, s);
        };
      }
      function ud(n, o, s, f, _, G, p, H, y, x) {
        var T = 8 & o, _ = (4 & (o = (o | (T ? l : w)) & ~(T ? w : l)) || (o &= -4), [n, o, _, T ? G : e, T ? p : e, T ? e : G, T ? e : p, H, y, x]), G = s.apply(e, _);
        return _i(n) && lo(G, _), G.placeholder = f, Jt(G, n, o);
      }
      function yi(n) {
        var o = UA[n];
        return function(s, f) {
          var C;
          return s = qe(s), (f = f == null ? 0 : ZA(pA(f), 292)) && js(s) ? (C = (GA(s) + "e").split("e"), +((C = (GA(o(C[0] + "e" + (+C[1] + f))) + "e").split("e"))[0] + "e" + (+C[1] - f))) : o(s);
        };
      }
      var jl = tu && 1 / xn(new tu([, -0]))[1] == m ? function(n) {
        return new tu(n);
      } : _d;
      function od(n) {
        return function(o) {
          var s, f, C, F = MA(o);
          return F == Z ? Ct(o) : F == _A ? (F = o, s = -1, f = Array(F.size), F.forEach(function(p) {
            f[++s] = [p, p];
          }), f) : zA(n(C = o), function(p) {
            return [p, C[p]];
          });
        };
      }
      function Me(n, o, s, f, C, F, p, H) {
        var y, x, T, _, G, V, X, W, Y, rA, z, nA, iA, yA = 2 & o;
        if (yA || typeof n == "function")
          return (y = f ? f.length : 0) || (o &= -97, f = C = e), p = p === e ? p : Ee(pA(p), 0), H = H === e ? H : pA(H), y -= C ? C.length : 0, o & w && (T = f, _ = C, f = C = e), x = yA ? e : Bo(n), T = [n, o, s, f, C, T, _, F, p, H], x && (_ = x, p = (F = T)[1], V = _[1], W = (X = p | V) < 131, Y = V == Q && p == 8 || V == Q && p == g && F[7].length <= _[8] || V == 384 && _[7].length <= _[8] && p == 8, W || Y) && (1 & V && (F[2] = _[2], X |= 1 & p ? 0 : 4), (W = _[3]) && (G = F[3], F[3] = G ? Gr(G, W, _[4]) : W, F[4] = G ? $n(F[3], d) : _[4]), (W = _[5]) && (G = F[5], F[5] = G ? Ad(G, W, _[6]) : W, F[6] = G ? $n(F[5], d) : _[6]), (W = _[7]) && (F[7] = W), V & Q && (F[8] = F[8] == null ? _[8] : ZA(F[8], _[8])), F[9] == null && (F[9] = _[9]), F[0] = _[0], F[1] = X), n = T[0], o = T[1], s = T[2], f = T[3], C = T[4], !(H = T[9] = T[9] === e ? yA ? 0 : n.length : Ee(T[9] - y, 0)) && 24 & o && (o &= -25), Y = o && o != 1 ? o == 8 || o == c ? Ei(n, o, H) : o != l && o != 33 || C.length ? Di.apply(e, T) : Zl(n, o, s, f) : (z = s, nA = 1 & o, iA = du(rA = n), function ye() {
            return (this && this !== OA && this instanceof ye ? iA : rA).apply(nA ? z : this, arguments);
          }), Jt((x ? ro : lo)(Y, T), n, o);
        throw new EA(r);
      }
      function Ii(n, o, s, f) {
        return n === e || Wt(n, vr[s]) && !kA.call(f, s) ? o : n;
      }
      function bi(n, o, s, f, C, F) {
        return jA(n) && jA(o) && (F.set(o, n), to(n, o, e, bi, F), F.delete(o)), n;
      }
      function id(n) {
        return wn(n) ? e : n;
      }
      function co(n, o, s, f, C, F) {
        var p = 1 & s, H = n.length, y = o.length;
        if (H != y && !(p && H < y))
          return !1;
        var y = F.get(n), x = F.get(o);
        if (y && x)
          return y == o && x == n;
        var T = -1, _ = !0, G = 2 & s ? new _r() : e;
        for (F.set(n, o), F.set(o, n); ++T < H; ) {
          var V, X = n[T], W = o[T];
          if ((V = f ? p ? f(W, X, T, o, n, F) : f(X, W, T, n, o, F) : V) !== e) {
            if (V)
              continue;
            _ = !1;
            break;
          }
          if (G) {
            if (!_a(o, function(Y, rA) {
              return !Nu(G, rA) && (X === Y || C(X, Y, s, f, F)) && G.push(rA);
            })) {
              _ = !1;
              break;
            }
          } else if (X !== W && !C(X, W, s, f, F)) {
            _ = !1;
            break;
          }
        }
        return F.delete(n), F.delete(o), _;
      }
      function dt(n) {
        return Oi(Si(n, e, Gi), n + "");
      }
      function lA(n) {
        return di(n, xe, ad);
      }
      function cu(n) {
        return di(n, ze, fn);
      }
      var Bo = ui ? function(n) {
        return ui.get(n);
      } : _d;
      function ln(n) {
        for (var o = n.name + "", s = nu[o], f = kA.call(nu, o) ? s.length : 0; f--; ) {
          var C = s[f], F = C.func;
          if (F == null || F == n)
            return C.name;
        }
        return o;
      }
      function or(n) {
        return (kA.call(E, "placeholder") ? E : n).placeholder;
      }
      function fA() {
        var n = (n = E.iteratee || xd) === xd ? Xa : n;
        return arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function He(C, o) {
        var s, f, C = C.__data__;
        return ((f = typeof (s = o)) == "string" || f == "number" || f == "symbol" || f == "boolean" ? s !== "__proto__" : s === null) ? C[typeof o == "string" ? "string" : "hash"] : C.map;
      }
      function vi(n) {
        for (var o = xe(n), s = o.length; s--; ) {
          var f = o[s], C = n[f];
          o[s] = [f, C, dd(C)];
        }
        return o;
      }
      function ir(n, o) {
        return o = o, n = (n = n) == null ? e : n[o], Ja(n) ? n : e;
      }
      var ad = Le ? function(n) {
        return n == null ? [] : (n = CA(n), tn(Le(n), function(o) {
          return Ju.call(n, o);
        }));
      } : Od, fn = Le ? function(n) {
        for (var o = []; n; )
          Ln(o, ad(n)), n = Ar(n);
        return o;
      } : Od, MA = me;
      function Ki(n, o, s) {
        for (var f = -1, C = (o = Gn(o, n)).length, F = !1; ++f < C; ) {
          var p = Xt(o[f]);
          if (!(F = n != null && s(n, p)))
            break;
          n = n[p];
        }
        return F || ++f != C ? F : !!(C = n == null ? 0 : n.length) && cr(C) && mt(p, C) && (BA(n) || Bt(n));
      }
      function Li(n) {
        return typeof n.constructor != "function" || Rr(n) ? {} : vt(Ar(n));
      }
      function ql(n) {
        return BA(n) || Bt(n) || !!(ni && n && n[ni]);
      }
      function mt(n, o) {
        var s = typeof n;
        return !!(o = o ?? b) && (s == "number" || s != "symbol" && Ms.test(n)) && -1 < n && n % 1 == 0 && n < o;
      }
      function Ne(n, o, s) {
        var f;
        if (jA(s))
          return ((f = typeof o) == "number" ? Be(s) && mt(o, s.length) : f == "string" && o in s) && Wt(s[o], n);
      }
      function xi(n, o) {
        var s;
        if (!BA(n))
          return (s = typeof n) == "number" || s == "symbol" || s == "boolean" || n == null || Ce(n) || Il.test(n) || !ma.test(n) || o != null && n in CA(o);
      }
      function _i(n) {
        var o = ln(n), s = E[o];
        return typeof s == "function" && o in hA.prototype && (n === s || (o = Bo(s)) && n === o[0]);
      }
      (ot && MA(new ot(new ArrayBuffer(1))) != se || nr && MA(new nr()) != Z || un && MA(un.resolve()) != JA || tu && MA(new tu()) != _A || vA && MA(new vA()) != de) && (MA = function(s) {
        var o = me(s), s = o == DA ? s.constructor : e, s = s ? dr(s) : "";
        if (s)
          switch (s) {
            case Zu:
              return se;
            case zs:
              return Z;
            case D:
              return JA;
            case ru:
              return _A;
            case Ra:
              return de;
          }
        return o;
      });
      var uc = _n ? gn : Eo;
      function Rr(n) {
        var o = n && n.constructor;
        return n === (typeof o == "function" && o.prototype || vr);
      }
      function dd(n) {
        return n == n && !jA(n);
      }
      function Bu(n, o) {
        return function(s) {
          return s != null && s[n] === o && (o !== e || n in CA(s));
        };
      }
      function Si(n, o, s) {
        return o = Ee(o === e ? n.length - 1 : o, 0), function() {
          for (var f = arguments, C = -1, F = Ee(f.length - o, 0), p = k(F); ++C < F; )
            p[C] = f[o + C];
          for (var C = -1, H = k(o + 1); ++C < o; )
            H[C] = f[C];
          return H[o] = s(p), he(n, this, H);
        };
      }
      function sd(n, o) {
        return o.length < 2 ? n : Or(n, pt(o, 0, -1));
      }
      function Ti(n, o) {
        if ((o !== "constructor" || typeof n[o] != "function") && o != "__proto__")
          return n[o];
      }
      var lo = ar(ro), Nr = ka || function(n, o) {
        return OA.setTimeout(n, o);
      }, Oi = ar(De);
      function Jt(n, p, s) {
        var f, C, F, p = p + "";
        return Oi(n, (C = (p = (p = n = p).match(xl)) ? p[1].split(Ts) : [], F = s, ut(I, function(H) {
          var y = "_." + H[0];
          F & H[1] && !Jo(C, y) && C.push(y);
        }), p = C.sort(), (s = p.length) ? (p[f = s - 1] = (1 < s ? "& " : "") + p[f], p = p.join(2 < s ? ", " : " "), n.replace(Ll, `{
/* [wrapped with ` + p + `] */
`)) : n));
      }
      function ar(n) {
        var o = 0, s = 0;
        return function() {
          var f = Xu(), C = 16 - (f - s);
          if (s = f, 0 < C) {
            if (800 <= ++o)
              return arguments[0];
          } else
            o = 0;
          return n.apply(e, arguments);
        };
      }
      function fo(n, o) {
        var s = -1, f = n.length, C = f - 1;
        for (o = o === e ? f : o; ++s < o; ) {
          var F = Mr(s, C), p = n[F];
          n[F] = n[s], n[s] = p;
        }
        return n.length = o, n;
      }
      Mi = (Lr = Ji(Lr = function(n) {
        var o = [];
        return n.charCodeAt(0) === 46 && o.push(""), n.replace(bl, function(s, f, C, F) {
          o.push(C ? F.replace(Tl, "$1") : f || s);
        }), o;
      }, function(n) {
        return Mi.size === 500 && Mi.clear(), n;
      })).cache;
      var Mi, cd = Lr;
      function Xt(n) {
        var o;
        return typeof n == "string" || Ce(n) ? n : (o = n + "") == "0" && 1 / n == -m ? "-0" : o;
      }
      function dr(n) {
        if (n != null) {
          try {
            return ei.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function Dt(n) {
        var o;
        return n instanceof hA ? n.clone() : ((o = new Oe(n.__wrapped__, n.__chain__)).__actions__ = je(n.__actions__), o.__index__ = n.__index__, o.__values__ = n.__values__, o);
      }
      ot = aA(function(n, o) {
        return le(n) ? ou(n, Fe(o, 1, le, !0)) : [];
      }), un = aA(function(n, o) {
        var s = St(o);
        return le(s) && (s = e), le(n) ? ou(n, Fe(o, 1, le, !0), fA(s, 2)) : [];
      }), vA = aA(function(n, o) {
        var s = St(o);
        return le(s) && (s = e), le(n) ? ou(n, Fe(o, 1, le, !0), e, s) : [];
      });
      function Bd(n, o, s) {
        var f = n == null ? 0 : n.length;
        return f ? ((s = s == null ? 0 : pA(s)) < 0 && (s = Ee(f + s, 0)), Au(n, fA(o, 3), s)) : -1;
      }
      function oc(n, o, s) {
        var f, C = n == null ? 0 : n.length;
        return C ? (f = C - 1, s !== e && (f = pA(s), f = s < 0 ? Ee(C + f, 0) : ZA(f, C - 1)), Au(n, fA(o, 3), f, !0)) : -1;
      }
      function Gi(n) {
        return n != null && n.length ? Fe(n, 1) : [];
      }
      function ic(n) {
        return n && n.length ? n[0] : e;
      }
      _n = aA(function(n) {
        var o = zA(n, pi);
        return o.length && o[0] === n[0] ? ci(o) : [];
      }), ka = aA(function(n) {
        var o = St(n), s = zA(n, pi);
        return o === St(s) ? o = e : s.pop(), s.length && s[0] === n[0] ? ci(s, fA(o, 2)) : [];
      }), De = aA(function(n) {
        var o = St(n), s = zA(n, pi);
        return (o = typeof o == "function" ? o : e) && s.pop(), s.length && s[0] === n[0] ? ci(s, e, o) : [];
      });
      function St(n) {
        var o = n == null ? 0 : n.length;
        return o ? n[o - 1] : e;
      }
      Lr = aA(ac);
      function ac(n, o) {
        return n && n.length && o && o.length ? Za(n, o) : n;
      }
      var ld = dt(function(n, o) {
        var s = n == null ? 0 : n.length, f = Tr(n, o);
        return tc(n, zA(o, function(C) {
          return mt(C, s) ? +C : C;
        }).sort(ao)), f;
      });
      function ki(n) {
        return n == null ? n : bA.call(n);
      }
      var zl = aA(function(n) {
        return sn(Fe(n, 1, le, !0));
      }), $l = aA(function(n) {
        var o = St(n);
        return le(o) && (o = e), sn(Fe(n, 1, le, !0), fA(o, 2));
      }), Af = aA(function(n) {
        var o = typeof (o = St(n)) == "function" ? o : e;
        return sn(Fe(n, 1, le, !0), e, o);
      });
      function fd(n) {
        var o;
        return n && n.length ? (o = 0, n = tn(n, function(s) {
          return le(s) && (o = Ee(s.length, o), 1);
        }), jo(o, function(s) {
          return zA(n, Yo(s));
        })) : [];
      }
      function dc(n, o) {
        return n && n.length ? (n = fd(n), o == null ? n : zA(n, function(s) {
          return he(o, e, s);
        })) : [];
      }
      var ef = aA(function(n, o) {
        return le(n) ? ou(n, o) : [];
      }), sc = aA(function(n) {
        return cn(tn(n, le));
      }), Ri = aA(function(n) {
        var o = St(n);
        return le(o) && (o = e), cn(tn(n, le), fA(o, 2));
      }), tf = aA(function(n) {
        var o = typeof (o = St(n)) == "function" ? o : e;
        return cn(tn(n, le), e, o);
      }), nf = aA(fd), rf = aA(function(n) {
        var o = n.length, o = typeof (o = 1 < o ? n[o - 1] : e) == "function" ? (n.pop(), o) : e;
        return dc(n, o);
      });
      function cc(n) {
        return n = E(n), n.__chain__ = !0, n;
      }
      function go(n, o) {
        return o(n);
      }
      var Bc = dt(function(n) {
        function o(F) {
          return Tr(F, n);
        }
        var s = n.length, f = s ? n[0] : 0, C = this.__wrapped__;
        return !(1 < s || this.__actions__.length) && C instanceof hA && mt(f) ? ((C = C.slice(f, +f + (s ? 1 : 0))).__actions__.push({ func: go, args: [o], thisArg: e }), new Oe(C, this.__chain__).thru(function(F) {
          return s && !F.length && F.push(e), F;
        })) : this.thru(o);
      }), uf = Rn(function(n, o, s) {
        kA.call(n, s) ? ++n[s] : dn(n, s, 1);
      }), of = mi(Bd), af = mi(oc);
      function wo(n, o) {
        return (BA(n) ? ut : $A)(n, fA(o, 3));
      }
      function lc(n, o) {
        return (BA(n) ? qA : oi)(n, fA(o, 3));
      }
      var df = Rn(function(n, o, s) {
        kA.call(n, s) ? n[s].push(o) : dn(n, s, [o]);
      }), Ni = aA(function(n, o, s) {
        var f = -1, C = typeof o == "function", F = Be(n) ? k(n.length) : [];
        return $A(n, function(p) {
          F[++f] = C ? he(o, p, s) : iu(p, o, s);
        }), F;
      }), fc = Rn(function(n, o, s) {
        dn(n, s, o);
      });
      function Qo(n, o) {
        return (BA(n) ? zA : Wa)(n, fA(o, 3));
      }
      var gd = Rn(function(n, o, s) {
        n[s ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      }), gc = aA(function(n, o) {
        var s;
        return n == null ? [] : (1 < (s = o.length) && Ne(n, o[0], o[1]) ? o = [] : 2 < s && Ne(o[0], o[1], o[2]) && (o = [o[0]]), Ci(n, Fe(o, 1), []));
      }), Co = Fo || function() {
        return OA.Date.now();
      };
      function Vi(n, o, s) {
        return o = s ? e : o, o = n && o == null ? n.length : o, Me(n, Q, e, e, e, e, o);
      }
      function wc(n, o) {
        var s;
        if (typeof o != "function")
          throw new EA(r);
        return n = pA(n), function() {
          return 0 < --n && (s = o.apply(this, arguments)), n <= 1 && (o = e), s;
        };
      }
      var lu = aA(function(n, o, s) {
        var f, C = 1;
        return s.length && (f = $n(s, or(lu)), C |= l), Me(n, C, o, s, f);
      }), ho = aA(function(n, o, s) {
        var f, C = 3;
        return s.length && (f = $n(s, or(ho)), C |= l), Me(o, C, n, s, f);
      });
      function Pi(n, o, s) {
        var f, C, F, p, H, y, x = 0, T = !1, _ = !1, G = !0;
        if (typeof n != "function")
          throw new EA(r);
        function V(z) {
          var nA = f, iA = C;
          return f = C = e, x = z, p = n.apply(iA, nA);
        }
        function X(z) {
          var nA = z - y;
          return y === e || o <= nA || nA < 0 || _ && F <= z - x;
        }
        function W() {
          var z, nA = Co();
          if (X(nA))
            return Y(nA);
          H = Nr(W, (z = o - ((nA = nA) - y), _ ? ZA(z, F - (nA - x)) : z));
        }
        function Y(z) {
          return H = e, G && f ? V(z) : (f = C = e, p);
        }
        function rA() {
          var z = Co(), nA = X(z);
          if (f = arguments, C = this, y = z, nA) {
            if (H === e)
              return x = z = y, H = Nr(W, o), T ? V(z) : p;
            if (_)
              return za(H), H = Nr(W, o), V(y);
          }
          return H === e && (H = Nr(W, o)), p;
        }
        return o = qe(o) || 0, jA(s) && (T = !!s.leading, _ = "maxWait" in s, F = _ ? Ee(qe(s.maxWait) || 0, o) : F, G = "trailing" in s ? !!s.trailing : G), rA.cancel = function() {
          H !== e && za(H), x = 0, f = y = C = H = e;
        }, rA.flush = function() {
          return H === e ? p : Y(Co());
        }, rA;
      }
      var Fo = aA(function(n, o) {
        return qu(n, 1, o);
      }), Qc = aA(function(n, o, s) {
        return qu(n, qe(o) || 0, s);
      });
      function Ji(n, o) {
        if (typeof n != "function" || o != null && typeof o != "function")
          throw new EA(r);
        function s() {
          var f = arguments, C = o ? o.apply(this, f) : f[0], F = s.cache;
          return F.has(C) ? F.get(C) : (f = n.apply(this, f), s.cache = F.set(C, f) || F, f);
        }
        return s.cache = new (Ji.Cache || Tn)(), s;
      }
      function st(n) {
        if (typeof n != "function")
          throw new EA(r);
        return function() {
          var o = arguments;
          switch (o.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, o[0]);
            case 2:
              return !n.call(this, o[0], o[1]);
            case 3:
              return !n.call(this, o[0], o[1], o[2]);
          }
          return !n.apply(this, o);
        };
      }
      Ji.Cache = Tn;
      var wd = wd(function(n, o) {
        var s = (o = o.length == 1 && BA(o[0]) ? zA(o[0], Qt(fA())) : zA(Fe(o, 1), Qt(fA()))).length;
        return aA(function(f) {
          for (var C = -1, F = ZA(f.length, s); ++C < F; )
            f[C] = o[C].call(this, f[C]);
          return he(n, this, f);
        });
      }), Qd = aA(function(n, o) {
        var s = $n(o, or(Qd));
        return Me(n, l, e, o, s);
      }), sr = aA(function(n, o) {
        var s = $n(o, or(sr));
        return Me(n, w, e, o, s);
      }), FA = dt(function(n, o) {
        return Me(n, g, e, e, e, o);
      });
      function Wt(n, o) {
        return n === o || n != n && o != o;
      }
      var ct = _t(si), Qe = _t(function(n, o) {
        return o <= n;
      }), Bt = Bi(function() {
        return arguments;
      }()) ? Bi : function(n) {
        return oe(n) && kA.call(n, "callee") && !Ju.call(n, "callee");
      }, BA = k.isArray, Cd = La ? Qt(La) : function(n) {
        return oe(n) && me(n) == ue;
      };
      function Be(n) {
        return n != null && cr(n.length) && !gn(n);
      }
      function le(n) {
        return oe(n) && Be(n);
      }
      var Yt = KA || Eo, KA = rt ? Qt(rt) : function(n) {
        return oe(n) && me(n) == oA;
      };
      function ee(n) {
        var o;
        return !!oe(n) && ((o = me(n)) == q || o == "[object DOMException]" || typeof n.message == "string" && typeof n.name == "string" && !wn(n));
      }
      function gn(n) {
        return !!jA(n) && ((n = me(n)) == P || n == wA || n == "[object AsyncFunction]" || n == "[object Proxy]");
      }
      function hd(n) {
        return typeof n == "number" && n == pA(n);
      }
      function cr(n) {
        return typeof n == "number" && -1 < n && n % 1 == 0 && n <= b;
      }
      function jA(n) {
        var o = typeof n;
        return n != null && (o == "object" || o == "function");
      }
      function oe(n) {
        return n != null && typeof n == "object";
      }
      var Uo = Vs ? Qt(Vs) : function(n) {
        return oe(n) && MA(n) == Z;
      };
      function lt(n) {
        return typeof n == "number" || oe(n) && me(n) == IA;
      }
      function wn(n) {
        return !(!oe(n) || me(n) != DA) && ((n = Ar(n)) === null || typeof (n = kA.call(n, "constructor") && n.constructor) == "function" && n instanceof n && ei.call(n) == ti);
      }
      var Fd = wt ? Qt(wt) : function(n) {
        return oe(n) && me(n) == we;
      }, Cc = Ps ? Qt(Ps) : function(n) {
        return oe(n) && MA(n) == _A;
      };
      function po(n) {
        return typeof n == "string" || !BA(n) && oe(n) && me(n) == RA;
      }
      function Ce(n) {
        return typeof n == "symbol" || oe(n) && me(n) == We;
      }
      var QA = xa ? Qt(xa) : function(n) {
        return oe(n) && cr(n.length) && !!SA[me(n)];
      }, hc = _t(gi), Tt = _t(function(n, o) {
        return n <= o;
      });
      function Ud(n) {
        if (!n)
          return [];
        if (Be(n))
          return (po(n) ? j : je)(n);
        if (tr && n[tr]) {
          for (var o, s = n[tr](), f = []; !(o = s.next()).done; )
            f.push(o.value);
          return f;
        }
        var C = MA(n);
        return (C == Z ? Ct : C == _A ? xn : wu)(n);
      }
      function HA(n) {
        return n ? (n = qe(n)) === m || n === -m ? 17976931348623157e292 * (n < 0 ? -1 : 1) : n == n ? n : 0 : n === 0 ? n : 0;
      }
      function pA(o) {
        var o = HA(o), s = o % 1;
        return o == o ? s ? o - s : o : 0;
      }
      function pd(n) {
        return n ? it(pA(n), 0, K) : 0;
      }
      function qe(n) {
        if (typeof n == "number")
          return n;
        if (Ce(n))
          return v;
        if (typeof (n = jA(n) ? jA(o = typeof n.valueOf == "function" ? n.valueOf() : n) ? o + "" : o : n) != "string")
          return n === 0 ? n : +n;
        n = Ta(n);
        var o = Go.test(n);
        return o || ko.test(n) ? Hr(n.slice(2), o ? 2 : 8) : Ml.test(n) ? v : +n;
      }
      function Fc(n) {
        return Pt(n, ze(n));
      }
      function GA(n) {
        return n == null ? "" : at(n);
      }
      var sf = Bn(function(n, o) {
        if (Rr(o) || Be(o))
          Pt(o, xe(o), n);
        else
          for (var s in o)
            kA.call(o, s) && Sr(n, s, o[s]);
      }), Uc = Bn(function(n, o) {
        Pt(o, ze(o), n);
      }), fu = Bn(function(n, o, s, f) {
        Pt(o, ze(o), n, f);
      }), Ed = Bn(function(n, o, s, f) {
        Pt(o, xe(o), n, f);
      }), cf = dt(Tr), Bf = aA(function(n, o) {
        n = CA(n);
        var s = -1, f = o.length, C = 2 < f ? o[2] : e;
        for (C && Ne(o[0], o[1], C) && (f = 1); ++s < f; )
          for (var F = o[s], p = ze(F), H = -1, y = p.length; ++H < y; ) {
            var x = p[H], T = n[x];
            (T === e || Wt(T, vr[x]) && !kA.call(n, x)) && (n[x] = F[x]);
          }
        return n;
      }), lf = aA(function(n) {
        return n.push(e, bi), he(md, e, n);
      });
      function Ue(n, o, s) {
        return n = n == null ? e : Or(n, o), n === e ? s : n;
      }
      function Ve(n, o) {
        return n != null && Ki(n, o, Pa);
      }
      var ff = nd(function(n, o, s) {
        n[o = o != null && typeof o.toString != "function" ? Pu.call(o) : o] = s;
      }, Kd(Pe)), pc = nd(function(n, o, s) {
        o != null && typeof o.toString != "function" && (o = Pu.call(o)), kA.call(n, o) ? n[o].push(s) : n[o] = [s];
      }, fA), gf = aA(iu);
      function xe(n) {
        return (Be(n) ? uu : li)(n);
      }
      function ze(n) {
        return Be(n) ? uu(n, !0) : fi(n);
      }
      var Ec = Bn(function(n, o, s) {
        to(n, o, s);
      }), md = Bn(function(n, o, s, f) {
        to(n, o, s, f);
      }), gu = dt(function(n, o) {
        var s = {};
        if (n != null)
          for (var f = !1, C = (o = zA(o, function(F) {
            return F = Gn(F, n), f = f || 1 < F.length, F;
          }), Pt(n, cu(n), s), f && (s = Ft(s, 7, id)), o.length); C--; )
            Fi(s, o[C]);
        return s;
      }), wf = dt(function(n, o) {
        return n == null ? {} : mA(s = n, o, function(f, C) {
          return Ve(s, C);
        });
        var s;
      });
      function Dd(n, o) {
        var s;
        return n == null ? {} : (s = zA(cu(n), function(f) {
          return [f];
        }), o = fA(o), mA(n, s, function(f, C) {
          return o(f, C[0]);
        }));
      }
      var Hd = od(xe), mc = od(ze);
      function wu(n) {
        return n == null ? [] : Oa(n, xe(n));
      }
      var Qf = Nn(function(n, o, s) {
        return o = o.toLowerCase(), n + (s ? Dc(o) : o);
      });
      function Dc(n) {
        return bd(GA(n).toLowerCase());
      }
      function Hc(n) {
        return (n = GA(n)) && n.replace(Gs, Ws).replace(Rl, "");
      }
      var Cf = Nn(function(n, o, s) {
        return n + (s ? "-" : "") + o.toLowerCase();
      }), yd = Nn(function(n, o, s) {
        return n + (s ? " " : "") + o.toLowerCase();
      }), yc = td("toLowerCase"), Ic = Nn(function(n, o, s) {
        return n + (s ? "_" : "") + o.toLowerCase();
      }), hf = Nn(function(n, o, s) {
        return n + (s ? " " : "") + bd(o);
      }), Id = Nn(function(n, o, s) {
        return n + (s ? " " : "") + o.toUpperCase();
      }), bd = td("toUpperCase");
      function bc(n, o, s) {
        return n = GA(n), (o = s ? e : o) === e ? (s = n, Nl.test(s) ? n.match(YA) || [] : n.match(_l) || []) : n.match(o) || [];
      }
      var $e = aA(function(n, o) {
        try {
          return he(n, e, o);
        } catch (s) {
          return ee(s) ? s : new sA(s);
        }
      }), vd = dt(function(n, o) {
        return ut(o, function(s) {
          s = Xt(s), dn(n, s, lu(n[s], n));
        }), n;
      });
      function Kd(n) {
        return function() {
          return n;
        };
      }
      var Ff = so(), Ld = so(!0);
      function Pe(n) {
        return n;
      }
      function xd(n) {
        return Xa(typeof n == "function" ? n : Ft(n, 1));
      }
      var Uf = aA(function(n, o) {
        return function(s) {
          return iu(s, n, o);
        };
      }), pf = aA(function(n, o) {
        return function(s) {
          return iu(n, s, o);
        };
      });
      function Xi(n, o, s) {
        var f = xe(o), C = ai(o, f), F = (s != null || jA(o) && (C.length || !f.length) || (s = o, o = n, n = this, C = ai(o, xe(o))), !(jA(s) && "chain" in s && !s.chain)), p = gn(n);
        return ut(C, function(H) {
          var y = o[H];
          n[H] = y, p && (n.prototype[H] = function() {
            var x, T = this.__chain__;
            return F || T ? (((x = n(this.__wrapped__)).__actions__ = je(this.__actions__)).push({ func: y, args: arguments, thisArg: n }), x.__chain__ = T, x) : y.apply(n, Ln([this.value()], arguments));
          });
        }), n;
      }
      function _d() {
      }
      var Ef = Hi(zA), Sd = Hi(Kn), Td = Hi(_a);
      function vc(n) {
        return xi(n) ? Yo(Xt(n)) : (o = n, function(s) {
          return Or(s, o);
        });
        var o;
      }
      var mf = rd(), Df = rd(!0);
      function Od() {
        return [];
      }
      function Eo() {
        return !1;
      }
      var Hf = kr(function(n, o) {
        return n + o;
      }, 0), yf = yi("ceil"), If = kr(function(n, o) {
        return n / o;
      }, 1), u = yi("floor"), a, B = kr(function(n, o) {
        return n * o;
      }, 1), h = yi("round"), U = kr(function(n, o) {
        return n - o;
      }, 0);
      return E.after = function(n, o) {
        if (typeof o != "function")
          throw new EA(r);
        return n = pA(n), function() {
          if (--n < 1)
            return o.apply(this, arguments);
        };
      }, E.ary = Vi, E.assign = sf, E.assignIn = Uc, E.assignInWith = fu, E.assignWith = Ed, E.at = cf, E.before = wc, E.bind = lu, E.bindAll = vd, E.bindKey = ho, E.castArray = function() {
        var n;
        return arguments.length ? BA(n = arguments[0]) ? n : [n] : [];
      }, E.chain = cc, E.chunk = function(n, o, s) {
        o = (s ? Ne(n, o, s) : o === e) ? 1 : Ee(pA(o), 0);
        var f = n == null ? 0 : n.length;
        if (!f || o < 1)
          return [];
        for (var C = 0, F = 0, p = k(ri(f / o)); C < f; )
          p[F++] = pt(n, C, C += o);
        return p;
      }, E.compact = function(n) {
        for (var o = -1, s = n == null ? 0 : n.length, f = 0, C = []; ++o < s; ) {
          var F = n[o];
          F && (C[f++] = F);
        }
        return C;
      }, E.concat = function() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var o = k(n - 1), s = arguments[0], f = n; f--; )
          o[f - 1] = arguments[f];
        return Ln(BA(s) ? je(s) : [s], Fe(o, 1));
      }, E.cond = function(n) {
        var o = n == null ? 0 : n.length, s = fA();
        return n = o ? zA(n, function(f) {
          if (typeof f[1] != "function")
            throw new EA(r);
          return [s(f[0]), f[1]];
        }) : [], aA(function(f) {
          for (var C = -1; ++C < o; ) {
            var F = n[C];
            if (he(F[0], this, f))
              return he(F[1], this, f);
          }
        });
      }, E.conforms = function(n) {
        return o = Ft(n, 1), s = xe(o), function(f) {
          return Ac(f, o, s);
        };
        var o, s;
      }, E.constant = Kd, E.countBy = uf, E.create = function(n, o) {
        return n = vt(n), o == null ? n : Na(n, o);
      }, E.curry = function n(o, s, f) {
        return o = Me(o, 8, e, e, e, e, e, s = f ? e : s), o.placeholder = n.placeholder, o;
      }, E.curryRight = function n(o, s, f) {
        return o = Me(o, c, e, e, e, e, e, s = f ? e : s), o.placeholder = n.placeholder, o;
      }, E.debounce = Pi, E.defaults = Bf, E.defaultsDeep = lf, E.defer = Fo, E.delay = Qc, E.difference = ot, E.differenceBy = un, E.differenceWith = vA, E.drop = function(n, o, s) {
        var f = n == null ? 0 : n.length;
        return f ? pt(n, (o = s || o === e ? 1 : pA(o)) < 0 ? 0 : o, f) : [];
      }, E.dropRight = function(n, o, s) {
        var f = n == null ? 0 : n.length;
        return f ? pt(n, 0, (o = f - (o = s || o === e ? 1 : pA(o))) < 0 ? 0 : o) : [];
      }, E.dropRightWhile = function(n, o) {
        return n && n.length ? au(n, fA(o, 3), !0, !0) : [];
      }, E.dropWhile = function(n, o) {
        return n && n.length ? au(n, fA(o, 3), !0) : [];
      }, E.fill = function(n, o, s, f) {
        if (!(y = n == null ? 0 : n.length))
          return [];
        s && typeof s != "number" && Ne(n, o, s) && (s = 0, f = y);
        var C = n, F = o, p = s, H = f, y = C.length;
        for ((p = pA(p)) < 0 && (p = y < -p ? 0 : y + p), (H = H === e || y < H ? y : pA(H)) < 0 && (H += y), H = H < p ? 0 : pd(H); p < H; )
          C[p++] = F;
        return C;
      }, E.filter = function(n, o) {
        return (BA(n) ? tn : ii)(n, fA(o, 3));
      }, E.flatMap = function(n, o) {
        return Fe(Qo(n, o), 1);
      }, E.flatMapDeep = function(n, o) {
        return Fe(Qo(n, o), m);
      }, E.flatMapDepth = function(n, o, s) {
        return s = s === e ? 1 : pA(s), Fe(Qo(n, o), s);
      }, E.flatten = Gi, E.flattenDeep = function(n) {
        return n != null && n.length ? Fe(n, m) : [];
      }, E.flattenDepth = function(n, o) {
        return n != null && n.length ? Fe(n, o = o === e ? 1 : pA(o)) : [];
      }, E.flip = function(n) {
        return Me(n, 512);
      }, E.flow = Ff, E.flowRight = Ld, E.fromPairs = function(n) {
        for (var o = -1, s = n == null ? 0 : n.length, f = {}; ++o < s; ) {
          var C = n[o];
          f[C[0]] = C[1];
        }
        return f;
      }, E.functions = function(n) {
        return n == null ? [] : ai(n, xe(n));
      }, E.functionsIn = function(n) {
        return n == null ? [] : ai(n, ze(n));
      }, E.groupBy = df, E.initial = function(n) {
        return n != null && n.length ? pt(n, 0, -1) : [];
      }, E.intersection = _n, E.intersectionBy = ka, E.intersectionWith = De, E.invert = ff, E.invertBy = pc, E.invokeMap = Ni, E.iteratee = xd, E.keyBy = fc, E.keys = xe, E.keysIn = ze, E.map = Qo, E.mapKeys = function(n, o) {
        var s = {};
        return o = fA(o, 3), Ae(n, function(f, C, F) {
          dn(s, o(f, C, F), f);
        }), s;
      }, E.mapValues = function(n, o) {
        var s = {};
        return o = fA(o, 3), Ae(n, function(f, C, F) {
          dn(s, C, o(f, C, F));
        }), s;
      }, E.matches = function(n) {
        return Ya(Ft(n, 1));
      }, E.matchesProperty = function(n, o) {
        return wi(n, Ft(o, 1));
      }, E.memoize = Ji, E.merge = Ec, E.mergeWith = md, E.method = Uf, E.methodOf = pf, E.mixin = Xi, E.negate = st, E.nthArg = function(n) {
        return n = pA(n), aA(function(o) {
          return Qi(o, n);
        });
      }, E.omit = gu, E.omitBy = function(n, o) {
        return Dd(n, st(fA(o)));
      }, E.once = function(n) {
        return wc(2, n);
      }, E.orderBy = function(n, o, s, f) {
        return n == null ? [] : Ci(n, o = BA(o) ? o : o == null ? [] : [o], s = BA(s = f ? e : s) ? s : s == null ? [] : [s]);
      }, E.over = Ef, E.overArgs = wd, E.overEvery = Sd, E.overSome = Td, E.partial = Qd, E.partialRight = sr, E.partition = gd, E.pick = wf, E.pickBy = Dd, E.property = vc, E.propertyOf = function(n) {
        return function(o) {
          return n == null ? e : Or(n, o);
        };
      }, E.pull = Lr, E.pullAll = ac, E.pullAllBy = function(n, o, s) {
        return n && n.length && o && o.length ? Za(n, o, fA(s, 2)) : n;
      }, E.pullAllWith = function(n, o, s) {
        return n && n.length && o && o.length ? Za(n, o, e, s) : n;
      }, E.pullAt = ld, E.range = mf, E.rangeRight = Df, E.rearg = FA, E.reject = function(n, o) {
        return (BA(n) ? tn : ii)(n, st(fA(o, 3)));
      }, E.remove = function(n, o) {
        var s = [];
        if (n && n.length) {
          var f = -1, C = [], F = n.length;
          for (o = fA(o, 3); ++f < F; ) {
            var p = n[f];
            o(p, f, n) && (s.push(p), C.push(f));
          }
          tc(n, C);
        }
        return s;
      }, E.rest = function(n, o) {
        if (typeof n != "function")
          throw new EA(r);
        return aA(n, o = o === e ? o : pA(o));
      }, E.reverse = ki, E.sampleSize = function(n, o, s) {
        return o = (s ? Ne(n, o, s) : o === e) ? 1 : pA(o), (BA(n) ? Wl : xt)(n, o);
      }, E.set = function(n, o, s) {
        return n == null ? n : no(n, o, s);
      }, E.setWith = function(n, o, s, f) {
        return f = typeof f == "function" ? f : e, n == null ? n : no(n, o, s, f);
      }, E.shuffle = function(n) {
        return (BA(n) ? $s : nc)(n);
      }, E.slice = function(n, o, s) {
        var f = n == null ? 0 : n.length;
        return f ? (s = s && typeof s != "number" && Ne(n, o, s) ? (o = 0, f) : (o = o == null ? 0 : pA(o), s === e ? f : pA(s)), pt(n, o, s)) : [];
      }, E.sortBy = gc, E.sortedUniq = function(n) {
        return n && n.length ? ja(n) : [];
      }, E.sortedUniqBy = function(n, o) {
        return n && n.length ? ja(n, fA(o, 2)) : [];
      }, E.split = function(n, o, s) {
        return s && typeof s != "number" && Ne(n, o, s) && (o = s = e), (s = s === e ? K : s >>> 0) ? (n = GA(n)) && (typeof o == "string" || o != null && !Fd(o)) && !(o = at(o)) && Gt(n) ? kn(j(n), 0, s) : n.split(o, s) : [];
      }, E.spread = function(n, o) {
        if (typeof n != "function")
          throw new EA(r);
        return o = o == null ? 0 : Ee(pA(o), 0), aA(function(C) {
          var f = C[o], C = kn(C, 0, o);
          return f && Ln(C, f), he(n, this, C);
        });
      }, E.tail = function(n) {
        var o = n == null ? 0 : n.length;
        return o ? pt(n, 1, o) : [];
      }, E.take = function(n, o, s) {
        return n && n.length ? pt(n, 0, (o = s || o === e ? 1 : pA(o)) < 0 ? 0 : o) : [];
      }, E.takeRight = function(n, o, s) {
        var f = n == null ? 0 : n.length;
        return f ? pt(n, (o = f - (o = s || o === e ? 1 : pA(o))) < 0 ? 0 : o, f) : [];
      }, E.takeRightWhile = function(n, o) {
        return n && n.length ? au(n, fA(o, 3), !1, !0) : [];
      }, E.takeWhile = function(n, o) {
        return n && n.length ? au(n, fA(o, 3)) : [];
      }, E.tap = function(n, o) {
        return o(n), n;
      }, E.throttle = function(n, o, s) {
        var f = !0, C = !0;
        if (typeof n != "function")
          throw new EA(r);
        return jA(s) && (f = "leading" in s ? !!s.leading : f, C = "trailing" in s ? !!s.trailing : C), Pi(n, o, { leading: f, maxWait: o, trailing: C });
      }, E.thru = go, E.toArray = Ud, E.toPairs = Hd, E.toPairsIn = mc, E.toPath = function(n) {
        return BA(n) ? zA(n, Xt) : Ce(n) ? [n] : je(cd(GA(n)));
      }, E.toPlainObject = Fc, E.transform = function(n, o, s) {
        var f, C = BA(n), F = C || Yt(n) || QA(n);
        return o = fA(o, 4), s == null && (f = n && n.constructor, s = F ? C ? new f() : [] : jA(n) && gn(f) ? vt(Ar(n)) : {}), (F ? ut : Ae)(n, function(p, H, y) {
          return o(s, p, H, y);
        }), s;
      }, E.unary = function(n) {
        return Vi(n, 1);
      }, E.union = zl, E.unionBy = $l, E.unionWith = Af, E.uniq = function(n) {
        return n && n.length ? sn(n) : [];
      }, E.uniqBy = function(n, o) {
        return n && n.length ? sn(n, fA(o, 2)) : [];
      }, E.uniqWith = function(n, o) {
        return o = typeof o == "function" ? o : e, n && n.length ? sn(n, e, o) : [];
      }, E.unset = function(n, o) {
        return n == null || Fi(n, o);
      }, E.unzip = fd, E.unzipWith = dc, E.update = function(n, o, s) {
        return n == null ? n : Ui(n, o, io(s));
      }, E.updateWith = function(n, o, s, f) {
        return f = typeof f == "function" ? f : e, n == null ? n : Ui(n, o, io(s), f);
      }, E.values = wu, E.valuesIn = function(n) {
        return n == null ? [] : Oa(n, ze(n));
      }, E.without = ef, E.words = bc, E.wrap = function(n, o) {
        return Qd(io(o), n);
      }, E.xor = sc, E.xorBy = Ri, E.xorWith = tf, E.zip = nf, E.zipObject = function(n, o) {
        return qa(n || [], o || [], Sr);
      }, E.zipObjectDeep = function(n, o) {
        return qa(n || [], o || [], no);
      }, E.zipWith = rf, E.entries = Hd, E.entriesIn = mc, E.extend = Uc, E.extendWith = fu, Xi(E, E), E.add = Hf, E.attempt = $e, E.camelCase = Qf, E.capitalize = Dc, E.ceil = yf, E.clamp = function(n, o, s) {
        return s === e && (s = o, o = e), s !== e && (s = (s = qe(s)) == s ? s : 0), o !== e && (o = (o = qe(o)) == o ? o : 0), it(qe(n), o, s);
      }, E.clone = function(n) {
        return Ft(n, 4);
      }, E.cloneDeep = function(n) {
        return Ft(n, 5);
      }, E.cloneDeepWith = function(n, o) {
        return Ft(n, 5, o = typeof o == "function" ? o : e);
      }, E.cloneWith = function(n, o) {
        return Ft(n, 4, o = typeof o == "function" ? o : e);
      }, E.conformsTo = function(n, o) {
        return o == null || Ac(n, o, xe(o));
      }, E.deburr = Hc, E.defaultTo = function(n, o) {
        return n == null || n != n ? o : n;
      }, E.divide = If, E.endsWith = function(n, o, s) {
        n = GA(n), o = at(o);
        var f = n.length, f = s = s === e ? f : it(pA(s), 0, f);
        return 0 <= (s -= o.length) && n.slice(s, f) == o;
      }, E.eq = Wt, E.escape = function(n) {
        return (n = GA(n)) && Hl.test(n) ? n.replace(pa, zn) : n;
      }, E.escapeRegExp = function(n) {
        return (n = GA(n)) && vl.test(n) ? n.replace(Da, "\\$&") : n;
      }, E.every = function(n, o, s) {
        return (BA(n) ? Kn : ec)(n, fA(o = s && Ne(n, o, s) ? e : o, 3));
      }, E.find = of, E.findIndex = Bd, E.findKey = function(n, o) {
        return Sa(n, fA(o, 3), Ae);
      }, E.findLast = af, E.findLastIndex = oc, E.findLastKey = function(n, o) {
        return Sa(n, fA(o, 3), zu);
      }, E.floor = u, E.forEach = wo, E.forEachRight = lc, E.forIn = function(n, o) {
        return n == null ? n : On(n, fA(o, 3), ze);
      }, E.forInRight = function(n, o) {
        return n == null ? n : Va(n, fA(o, 3), ze);
      }, E.forOwn = function(n, o) {
        return n && Ae(n, fA(o, 3));
      }, E.forOwnRight = function(n, o) {
        return n && zu(n, fA(o, 3));
      }, E.get = Ue, E.gt = ct, E.gte = Qe, E.has = function(n, o) {
        return n != null && Ki(n, o, $u);
      }, E.hasIn = Ve, E.head = ic, E.identity = Pe, E.includes = function(n, o, s, f) {
        return n = Be(n) ? n : wu(n), s = s && !f ? pA(s) : 0, f = n.length, s < 0 && (s = Ee(f + s, 0)), po(n) ? s <= f && -1 < n.indexOf(o, s) : !!f && -1 < qn(n, o, s);
      }, E.indexOf = function(n, o, s) {
        var f = n == null ? 0 : n.length;
        return f ? qn(n, o, n = (n = s == null ? 0 : pA(s)) < 0 ? Ee(f + n, 0) : n) : -1;
      }, E.inRange = function(n, o, s) {
        return o = HA(o), s === e ? (s = o, o = 0) : s = HA(s), (n = n = qe(n)) >= ZA(o = o, s = s) && n < Ee(o, s);
      }, E.invoke = gf, E.isArguments = Bt, E.isArray = BA, E.isArrayBuffer = Cd, E.isArrayLike = Be, E.isArrayLikeObject = le, E.isBoolean = function(n) {
        return n === !0 || n === !1 || oe(n) && me(n) == N;
      }, E.isBuffer = Yt, E.isDate = KA, E.isElement = function(n) {
        return oe(n) && n.nodeType === 1 && !wn(n);
      }, E.isEmpty = function(n) {
        if (n != null) {
          if (Be(n) && (BA(n) || typeof n == "string" || typeof n.splice == "function" || Yt(n) || QA(n) || Bt(n)))
            return !n.length;
          var o, s = MA(n);
          if (s == Z || s == _A)
            return !n.size;
          if (Rr(n))
            return !li(n).length;
          for (o in n)
            if (kA.call(n, o))
              return !1;
        }
        return !0;
      }, E.isEqual = function(n, o) {
        return Ao(n, o);
      }, E.isEqualWith = function(n, o, s) {
        var f = (s = typeof s == "function" ? s : e) ? s(n, o) : e;
        return f === e ? Ao(n, o, e, s) : !!f;
      }, E.isError = ee, E.isFinite = function(n) {
        return typeof n == "number" && js(n);
      }, E.isFunction = gn, E.isInteger = hd, E.isLength = cr, E.isMap = Uo, E.isMatch = function(n, o) {
        return n === o || eo(n, o, vi(o));
      }, E.isMatchWith = function(n, o, s) {
        return s = typeof s == "function" ? s : e, eo(n, o, vi(o), s);
      }, E.isNaN = function(n) {
        return lt(n) && n != +n;
      }, E.isNative = function(n) {
        if (uc(n))
          throw new sA("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
        return Ja(n);
      }, E.isNil = function(n) {
        return n == null;
      }, E.isNull = function(n) {
        return n === null;
      }, E.isNumber = lt, E.isObject = jA, E.isObjectLike = oe, E.isPlainObject = wn, E.isRegExp = Fd, E.isSafeInteger = function(n) {
        return hd(n) && -b <= n && n <= b;
      }, E.isSet = Cc, E.isString = po, E.isSymbol = Ce, E.isTypedArray = QA, E.isUndefined = function(n) {
        return n === e;
      }, E.isWeakMap = function(n) {
        return oe(n) && MA(n) == de;
      }, E.isWeakSet = function(n) {
        return oe(n) && me(n) == "[object WeakSet]";
      }, E.join = function(n, o) {
        return n == null ? "" : Xl.call(n, o);
      }, E.kebabCase = Cf, E.last = St, E.lastIndexOf = function(n, o, s) {
        var f = n == null ? 0 : n.length;
        if (!f)
          return -1;
        var C = f;
        if (s !== e && (C = (C = pA(s)) < 0 ? Ee(f + C, 0) : ZA(C, f - 1)), o != o)
          return Au(n, Xo, C, !0);
        for (var F = n, p = o, H = C + 1; H--; )
          if (F[H] === p)
            return H;
        return H;
      }, E.lowerCase = yd, E.lowerFirst = yc, E.lt = hc, E.lte = Tt, E.max = function(n) {
        return n && n.length ? Ut(n, Pe, si) : e;
      }, E.maxBy = function(n, o) {
        return n && n.length ? Ut(n, fA(o, 2), si) : e;
      }, E.mean = function(n) {
        return Wo(n, Pe);
      }, E.meanBy = function(n, o) {
        return Wo(n, fA(o, 2));
      }, E.min = function(n) {
        return n && n.length ? Ut(n, Pe, gi) : e;
      }, E.minBy = function(n, o) {
        return n && n.length ? Ut(n, fA(o, 2), gi) : e;
      }, E.stubArray = Od, E.stubFalse = Eo, E.stubObject = function() {
        return {};
      }, E.stubString = function() {
        return "";
      }, E.stubTrue = function() {
        return !0;
      }, E.multiply = B, E.nth = function(n, o) {
        return n && n.length ? Qi(n, pA(o)) : e;
      }, E.noConflict = function() {
        return OA._ === this && (OA._ = Ys), this;
      }, E.noop = _d, E.now = Co, E.pad = function(n, o, s) {
        n = GA(n);
        var f = (o = pA(o)) ? M(n) : 0;
        return !o || o <= f ? n : su(ce(o = (o - f) / 2), s) + n + su(ri(o), s);
      }, E.padEnd = function(n, o, s) {
        n = GA(n);
        var f = (o = pA(o)) ? M(n) : 0;
        return o && f < o ? n + su(o - f, s) : n;
      }, E.padStart = function(n, o, s) {
        n = GA(n);
        var f = (o = pA(o)) ? M(n) : 0;
        return o && f < o ? su(o - f, s) + n : n;
      }, E.parseInt = function(n, o, s) {
        return o = s || o == null ? 0 : o && +o, Wu(GA(n).replace(Ha, ""), o || 0);
      }, E.random = function(n, o, s) {
        var f;
        return s && typeof s != "boolean" && Ne(n, o, s) && (o = s = e), s === e && (typeof o == "boolean" ? (s = o, o = e) : typeof n == "boolean" && (s = n, n = e)), n === e && o === e ? (n = 0, o = 1) : (n = HA(n), o === e ? (o = n, n = 0) : o = HA(o)), o < n && (f = n, n = o, o = f), s || n % 1 || o % 1 ? (f = xr(), ZA(n + f * (o - n + Dr("1e-" + ((f + "").length - 1))), o)) : Mr(n, o);
      }, E.reduce = function(n, o, s) {
        var f = BA(n) ? zr : Zo, C = arguments.length < 3;
        return f(n, fA(o, 4), s, C, $A);
      }, E.reduceRight = function(n, o, s) {
        var f = BA(n) ? $r : Zo, C = arguments.length < 3;
        return f(n, fA(o, 4), s, C, oi);
      }, E.repeat = function(n, o, s) {
        return o = (s ? Ne(n, o, s) : o === e) ? 1 : pA(o), hi(GA(n), o);
      }, E.replace = function() {
        var n = arguments, o = GA(n[0]);
        return n.length < 3 ? o : o.replace(n[1], n[2]);
      }, E.result = function(n, o, s) {
        var f = -1, C = (o = Gn(o, n)).length;
        for (C || (C = 1, n = e); ++f < C; ) {
          var F = n == null ? e : n[Xt(o[f])];
          F === e && (f = C, F = s), n = gn(F) ? F.call(n) : F;
        }
        return n;
      }, E.round = h, E.runInContext = L, E.sample = function(n) {
        return (BA(n) ? ju : Yl)(n);
      }, E.size = function(n) {
        var o;
        return n == null ? 0 : Be(n) ? po(n) ? M(n) : n.length : (o = MA(n)) == Z || o == _A ? n.size : li(n).length;
      }, E.snakeCase = Ic, E.some = function(n, o, s) {
        return (BA(n) ? _a : Et)(n, fA(o = s && Ne(n, o, s) ? e : o, 3));
      }, E.sortedIndex = function(n, o) {
        return Nt(n, o);
      }, E.sortedIndexBy = function(n, o, s) {
        return uo(n, o, fA(s, 2));
      }, E.sortedIndexOf = function(n, o) {
        var s = n == null ? 0 : n.length;
        if (s) {
          var f = Nt(n, o);
          if (f < s && Wt(n[f], o))
            return f;
        }
        return -1;
      }, E.sortedLastIndex = function(n, o) {
        return Nt(n, o, !0);
      }, E.sortedLastIndexBy = function(n, o, s) {
        return uo(n, o, fA(s, 2), !0);
      }, E.sortedLastIndexOf = function(n, o) {
        if (n != null && n.length) {
          var s = Nt(n, o, !0) - 1;
          if (Wt(n[s], o))
            return s;
        }
        return -1;
      }, E.startCase = hf, E.startsWith = function(n, o, s) {
        return n = GA(n), s = s == null ? 0 : it(pA(s), 0, n.length), o = at(o), n.slice(s, s + o.length) == o;
      }, E.subtract = U, E.sum = function(n) {
        return n && n.length ? Ir(n, Pe) : 0;
      }, E.sumBy = function(n, o) {
        return n && n.length ? Ir(n, fA(o, 2)) : 0;
      }, E.template = function(n, o, T) {
        var f, C, y = E.templateSettings;
        T && Ne(n, o, T) && (o = e), n = GA(n), o = fu({}, o, y, Ii);
        var F = xe(T = fu({}, o.imports, y.imports, Ii)), p = Oa(T, F), H = 0, y = o.interpolate || Ro, x = "__p += '", T = nn((o.escape || Ro).source + "|" + y.source + "|" + (y === Ss ? Ol : Ro).source + "|" + (o.evaluate || Ro).source + "|$", "g"), _ = "//# sourceURL=" + (kA.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Pl + "]") + `
`;
        if (n.replace(T, function(G, V, X, W, Y, rA) {
          return X = X || W, x += n.slice(H, rA).replace(ks, zo), V && (f = !0, x += `' +
__e(` + V + `) +
'`), Y && (C = !0, x += `';
` + Y + `;
__p += '`), X && (x += `' +
((__t = (` + X + `)) == null ? '' : __t) +
'`), H = rA + G.length, G;
        }), x += `';
`, y = kA.call(o, "variable") && o.variable) {
          if (Sl.test(y))
            throw new sA("Invalid `variable` option passed into `_.template`");
        } else
          x = `with (obj) {
` + x + `
}
`;
        if (x = (C ? x.replace(pl, "") : x).replace(El, "$1").replace(ml, "$1;"), x = "function(" + (y || "obj") + `) {
` + (y ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (f ? ", __e = _.escape" : "") + (C ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + x + `return __p
}`, (T = $e(function() {
          return cA(F, _ + "return " + x).apply(e, p);
        })).source = x, ee(T))
          throw T;
        return T;
      }, E.times = function(n, o) {
        if ((n = pA(n)) < 1 || b < n)
          return [];
        for (var s = K, f = ZA(n, K), f = (o = fA(o), n -= K, jo(f, o)); ++s < n; )
          o(s);
        return f;
      }, E.toFinite = HA, E.toInteger = pA, E.toLength = pd, E.toLower = function(n) {
        return GA(n).toLowerCase();
      }, E.toNumber = qe, E.toSafeInteger = function(n) {
        return n ? it(pA(n), -b, b) : n === 0 ? n : 0;
      }, E.toString = GA, E.toUpper = function(n) {
        return GA(n).toUpperCase();
      }, E.trim = function(n, o, s) {
        return (n = GA(n)) && (s || o === e) ? Ta(n) : n && (o = at(o)) ? kn(s = j(n), br(s, o = j(o)), qo(s, o) + 1).join("") : n;
      }, E.trimEnd = function(n, o, s) {
        return (n = GA(n)) && (s || o === e) ? n.slice(0, R(n) + 1) : n && (o = at(o)) ? kn(s = j(n), 0, qo(s, j(o)) + 1).join("") : n;
      }, E.trimStart = function(n, o, s) {
        return (n = GA(n)) && (s || o === e) ? n.replace(Ha, "") : n && (o = at(o)) ? kn(s = j(n), br(s, j(o))).join("") : n;
      }, E.truncate = function(n, C) {
        var s, p = 30, f = "...", C = (jA(C) && (s = "separator" in C ? C.separator : s, p = "length" in C ? pA(C.length) : p, f = "omission" in C ? at(C.omission) : f), (n = GA(n)).length);
        if ((C = Gt(n) ? (F = j(n)).length : C) <= p)
          return n;
        if ((C = p - M(f)) < 1)
          return f;
        var F, p = F ? kn(F, 0, C).join("") : n.slice(0, C);
        if (s !== e)
          if (F && (C += p.length - C), Fd(s)) {
            if (n.slice(C).search(s)) {
              var H, y = p;
              for ((s = s.global ? s : nn(s.source, GA(Os.exec(s)) + "g")).lastIndex = 0; H = s.exec(y); )
                var x = H.index;
              p = p.slice(0, x === e ? C : x);
            }
          } else
            n.indexOf(at(s), C) != C && -1 < (F = p.lastIndexOf(s)) && (p = p.slice(0, F));
        return p + f;
      }, E.unescape = function(n) {
        return (n = GA(n)) && Dl.test(n) ? n.replace(_s, dA) : n;
      }, E.uniqueId = function(n) {
        var o = ++Jl;
        return GA(n) + o;
      }, E.upperCase = Id, E.upperFirst = bd, E.each = wo, E.eachRight = lc, E.first = ic, Xi(E, (a = {}, Ae(E, function(n, o) {
        kA.call(E.prototype, o) || (a[o] = n);
      }), a), { chain: !1 }), E.VERSION = "4.17.21", ut(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        E[n].placeholder = E;
      }), ut(["drop", "take"], function(n, o) {
        hA.prototype[n] = function(s) {
          s = s === e ? 1 : Ee(pA(s), 0);
          var f = this.__filtered__ && !o ? new hA(this) : this.clone();
          return f.__filtered__ ? f.__takeCount__ = ZA(s, f.__takeCount__) : f.__views__.push({ size: ZA(s, K), type: n + (f.__dir__ < 0 ? "Right" : "") }), f;
        }, hA.prototype[n + "Right"] = function(s) {
          return this.reverse()[n](s).reverse();
        };
      }), ut(["filter", "map", "takeWhile"], function(n, o) {
        var s = o + 1, f = s == 1 || s == 3;
        hA.prototype[n] = function(C) {
          var F = this.clone();
          return F.__iteratees__.push({ iteratee: fA(C, 3), type: s }), F.__filtered__ = F.__filtered__ || f, F;
        };
      }), ut(["head", "last"], function(n, o) {
        var s = "take" + (o ? "Right" : "");
        hA.prototype[n] = function() {
          return this[s](1).value()[0];
        };
      }), ut(["initial", "tail"], function(n, o) {
        var s = "drop" + (o ? "" : "Right");
        hA.prototype[n] = function() {
          return this.__filtered__ ? new hA(this) : this[s](1);
        };
      }), hA.prototype.compact = function() {
        return this.filter(Pe);
      }, hA.prototype.find = function(n) {
        return this.filter(n).head();
      }, hA.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, hA.prototype.invokeMap = aA(function(n, o) {
        return typeof n == "function" ? new hA(this) : this.map(function(s) {
          return iu(s, n, o);
        });
      }), hA.prototype.reject = function(n) {
        return this.filter(st(fA(n)));
      }, hA.prototype.slice = function(n, o) {
        n = pA(n);
        var s = this;
        return s.__filtered__ && (0 < n || o < 0) ? new hA(s) : (n < 0 ? s = s.takeRight(-n) : n && (s = s.drop(n)), o !== e ? (o = pA(o)) < 0 ? s.dropRight(-o) : s.take(o - n) : s);
      }, hA.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, hA.prototype.toArray = function() {
        return this.take(K);
      }, Ae(hA.prototype, function(n, o) {
        var s = /^(?:filter|find|map|reject)|While$/.test(o), f = /^(?:head|last)$/.test(o), C = E[f ? "take" + (o == "last" ? "Right" : "") : o], F = f || /^find/.test(o);
        C && (E.prototype[o] = function() {
          function p(W) {
            return W = C.apply(E, Ln([W], x)), f && _ ? W[0] : W;
          }
          var H, y = this.__wrapped__, x = f ? [1] : arguments, X = y instanceof hA, G = x[0], T = X || BA(y), _ = (T && s && typeof G == "function" && G.length != 1 && (X = T = !1), this.__chain__), G = !!this.__actions__.length, V = F && !_, X = X && !G;
          return !F && T ? (y = X ? y : new hA(this), (H = n.apply(y, x)).__actions__.push({ func: go, args: [p], thisArg: e }), new Oe(H, _)) : V && X ? n.apply(this, x) : (H = this.thru(p), V ? f ? H.value()[0] : H.value() : H);
        });
      }), ut(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var o = Ai[n], s = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", f = /^(?:pop|shift)$/.test(n);
        E.prototype[n] = function() {
          var C, F = arguments;
          return f && !this.__chain__ ? (C = this.value(), o.apply(BA(C) ? C : [], F)) : this[s](function(p) {
            return o.apply(BA(p) ? p : [], F);
          });
        };
      }), Ae(hA.prototype, function(n, o) {
        var s, f = E[o];
        f && (s = f.name + "", kA.call(nu, s) || (nu[s] = []), nu[s].push({ name: o, func: f }));
      }), nu[Di(e, 2).name] = [{ name: "wrapper", func: e }], hA.prototype.clone = function() {
        var n = new hA(this.__wrapped__);
        return n.__actions__ = je(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = je(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = je(this.__views__), n;
      }, hA.prototype.reverse = function() {
        var n;
        return this.__filtered__ ? ((n = new hA(this)).__dir__ = -1, n.__filtered__ = !0) : (n = this.clone()).__dir__ *= -1, n;
      }, hA.prototype.value = function() {
        var n = this.__wrapped__.value(), o = this.__dir__, s = BA(n), f = o < 0, C = s ? n.length : 0, F = function(z, nA, iA) {
          for (var yA = -1, ye = iA.length; ++yA < ye; ) {
            var ft = iA[yA], At = ft.size;
            switch (ft.type) {
              case "drop":
                z += At;
                break;
              case "dropRight":
                nA -= At;
                break;
              case "take":
                nA = ZA(nA, z + At);
                break;
              case "takeRight":
                z = Ee(z, nA - At);
            }
          }
          return { start: z, end: nA };
        }(0, C, this.__views__), p = F.start, H = (F = F.end) - p, y = f ? F : p - 1, x = this.__iteratees__, T = x.length, _ = 0, G = ZA(H, this.__takeCount__);
        if (!s || !f && C == H && G == H)
          return Mn(n, this.__actions__);
        var V = [];
        A:
          for (; H-- && _ < G; ) {
            for (var X = -1, W = n[y += o]; ++X < T; ) {
              var Y = x[X], rA = Y.iteratee, Y = Y.type, rA = rA(W);
              if (Y == 2)
                W = rA;
              else if (!rA) {
                if (Y == 1)
                  continue A;
                break A;
              }
            }
            V[_++] = W;
          }
        return V;
      }, E.prototype.at = Bc, E.prototype.chain = function() {
        return cc(this);
      }, E.prototype.commit = function() {
        return new Oe(this.value(), this.__chain__);
      }, E.prototype.next = function() {
        this.__values__ === e && (this.__values__ = Ud(this.value()));
        var n = this.__index__ >= this.__values__.length;
        return { done: n, value: n ? e : this.__values__[this.__index__++] };
      }, E.prototype.plant = function(n) {
        for (var o, C = this; C instanceof Kt; )
          var s = Dt(C), f = (s.__index__ = 0, s.__values__ = e, o ? f.__wrapped__ = s : o = s, s), C = C.__wrapped__;
        return f.__wrapped__ = n, o;
      }, E.prototype.reverse = function() {
        var n = this.__wrapped__;
        return n instanceof hA ? (n = n, (n = (n = this.__actions__.length ? new hA(this) : n).reverse()).__actions__.push({ func: go, args: [ki], thisArg: e }), new Oe(n, this.__chain__)) : this.thru(ki);
      }, E.prototype.toJSON = E.prototype.valueOf = E.prototype.value = function() {
        return Mn(this.__wrapped__, this.__actions__);
      }, E.prototype.first = E.prototype.head, tr && (E.prototype[tr] = function() {
        return this;
      }), E;
    }();
    jn ? ((jn.exports = gA)._ = gA, Zn._ = gA) : OA._ = gA;
  }).call(Md);
}(_c, _c.exports), _c.exports);
const hF = [{ name: "积分", icon: "int", formula: "\\int", exampleList: [{ content: "\\int用来表示积分符号，同样地，其上下标表示积分的上下限", isLatex: !1 }, { content: "\\int_{1}^{\\infty}", isLatex: !0 }] }, { name: "多重积分", icon: "iint", formula: "\\iint" }, { name: "多重积分", icon: "iiint", formula: "\\iiint" }, { name: "多重积分", icon: "iiiint", formula: "\\iiiint" }], FF = [{ name: "联立方程", icon: "multipleLine", formula: `f(n)
\\left\\{
\\frac{n}{2}, &if n is even\\\\
3n + 1, &if n is odd
\\right\\}` }, { name: "联立方程", icon: "multipleLine", formula: `\\left\\{
    a_{1}x+b_{1}y+c_{1}z=d_{1} \\\\
    a_{2}x+b_{2}y+c_{2}z=d_{2} \\\\
    a_{3}x+b_{3}y+c_{3}z=d_{3}
    \\right\\}
    ` }], UF = [{ name: "矩阵", icon: "bmatrix", formula: `\\begin{bmatrix}
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
\\end{Vmatrix}` }, { name: "模运算", icon: "pmod", formula: "\\pmod{n}" }, { name: "排列", icon: "binom", formula: "\\binom{n+1}{2k}" }], pF = [{ name: "化学方程式", icon: "rightarrow", formula: "2H_{2}+O_{2}\\rightarrow\\limits^{燃烧}2H_{2}O" }, { name: "化学方程式", icon: "rightleftarrow", formula: "N_{2}+3H_{2}\\rightleftarrow\\limits^{高温、高压}_{催化剂}2NH_{3}" }, { name: "化学方程式", icon: "equalsign", formula: "2NaHCO_{3}=\\limits^{\\Delta}Na_{2}CO_{3}" }], EF = [{ name: "带分数", icon: "", formula: "\\mix, (这个符号实际不会出现不需要展示)" }, { name: "删除", icon: "", formula: "\\deletion{xx}, (直接删除)" }, { name: "大省略符号", icon: "omitted", formula: "\\omitted" }, { name: "空格", icon: "tab", formula: "A\\tabB" }, { name: "对号", icon: "cmark", formula: "\\cmark" }, { name: "错号", icon: "xmark", formula: "\\xmark" }, { name: "插入", icon: "", formula: "\\insert{+3},( 直接删除，需要连带后面的一个{}删除)" }, { name: "颠倒符号", icon: "reverse", formula: "\\reverse{好}{你}" }, { name: "替换", icon: "replace", formula: "\\replace{ab}" }, { name: "错误的中文汉字", icon: "", formula: "\\wrong{我}, 待定" }, { name: "米字格", icon: "", formula: "\\chnfield{ab}， (直接删除，需要连带后面的一个{}删除。)" }, { name: "英语格", icon: "", formula: "\\engfield{ab}， (直接删除，需要连带后面的一个{}删除。)" }, { name: "<s>", icon: "", formula: "直接删除" }, { name: "</s>", icon: "", formula: "直接删除" }, { name: "<unk>", icon: "", formula: "直接删除" }], mF = [{ name: "基本规则", icon: "phonetic", formula: "\\[\\phonetic{}\\]" }, { name: "长元音", icon: "po_1", formula: "ɑː" }, { name: "长元音", icon: "po_2", formula: "ɔ:" }, { name: "长元音", icon: "po_3", formula: "ɜː" }, { name: "长元音", icon: "po_4", formula: "i:" }, { name: "长元音", icon: "po_5", formula: "u:" }, { name: "短元音", icon: "po_6", formula: "^" }, { name: "短元音", icon: "po_7", formula: "ɒ" }, { name: "短元音", icon: "po_8", formula: "ə" }, { name: "短元音", icon: "po_9", formula: "ɪ" }, { name: "短元音", icon: "po_10", formula: "ʊ" }, { name: "短元音", icon: "po_11", formula: "e" }, { name: "短元音", icon: "po_12", formula: "æ" }, { name: "双元音", icon: "po_13", formula: "eɪ" }, { name: "双元音", icon: "po_14", formula: "aɪ" }, { name: "双元音", icon: "po_15", formula: "ɔɪ" }, { name: "双元音", icon: "po_16", formula: "ɪə" }, { name: "双元音", icon: "po_17", formula: "eə" }, { name: "双元音", icon: "po_18", formula: "ʊə" }, { name: "双元音", icon: "po_19", formula: "əʊ" }, { name: "双元音", icon: "po_20", formula: "aʊ" }, { name: "清辅音", icon: "po_21", formula: "p" }, { name: "清辅音", icon: "po_22", formula: "t" }, { name: "清辅音", icon: "po_23", formula: "k" }, { name: "清辅音", icon: "po_24", formula: "f" }, { name: "清辅音", icon: "po_25", formula: "θ" }, { name: "清辅音", icon: "po_26", formula: "s" }, { name: "清辅音", icon: "po_27", formula: "b" }, { name: "清辅音", icon: "po_28", formula: "d" }, { name: "清辅音", icon: "po_29", formula: "g" }, { name: "清辅音", icon: "po_30", formula: "v" }, { name: "清辅音", icon: "po_31", formula: "ð" }, { name: "清辅音", icon: "po_32", formula: "z" }, { name: "清辅音", icon: "po_33", formula: "ʃ" }, { name: "清辅音", icon: "po_34", formula: "h" }, { name: "清辅音", icon: "po_35", formula: "ts" }, { name: "清辅音", icon: "po_36", formula: "tʃ" }, { name: "清辅音", icon: "po_37", formula: "j" }, { name: "清辅音", icon: "po_38", formula: "tr" }, { name: "浊辅音", icon: "po_39", formula: "ʒ" }, { name: "浊辅音", icon: "po_40", formula: "r" }, { name: "浊辅音", icon: "po_41", formula: "dz" }, { name: "浊辅音", icon: "po_42", formula: "dʒ" }, { name: "浊辅音", icon: "po_43", formula: "dr" }, { name: "半元音", icon: "po_44", formula: "w" }, { name: "鼻音", icon: "po_45", formula: "m" }, { name: "鼻音", icon: "po_46", formula: "n" }, { name: "鼻音", icon: "po_47", formula: "ŋ" }, { name: "边音", icon: "po_48", formula: "l" }], h0 = "https://homework-webfront.oss-cn-beijing.aliyuncs.com/LatexIcon/", WQ = [{ id: te.uniqueId(), name: "希腊字母", icon: "", data: BF }, { id: te.uniqueId(), name: "运算符号", icon: "", data: iF }, { id: te.uniqueId(), name: "比较符号", icon: "", data: aF, desc: "大于号及小于号直接使用 >, <" }, { id: te.uniqueId(), name: "几何符号", icon: "", data: uF }, { id: te.uniqueId(), name: "点", icon: "", data: lF }, { id: te.uniqueId(), name: "逻辑符号", icon: "", data: rF }, { id: te.uniqueId(), name: "集合符号", icon: "", data: fF }, { id: te.uniqueId(), name: "范围", icon: "", data: gF }, { id: te.uniqueId(), name: "三角函数", icon: "", data: tF }, { id: te.uniqueId(), name: "箭头", icon: "", data: wF }, { id: te.uniqueId(), name: "含圈符号", icon: "", data: dF }, { id: te.uniqueId(), name: "形状符号", icon: "", data: sF }, { id: te.uniqueId(), name: "标记", icon: "", data: QF }, { id: te.uniqueId(), name: "顶部符号", icon: "", data: oF }, { id: te.uniqueId(), name: "序号", icon: "", data: CF }, { id: te.uniqueId(), name: "分式", icon: "", data: cF }, { id: te.uniqueId(), name: "根式", icon: "", data: eF }, { id: te.uniqueId(), name: "积分", icon: "", data: hF }, { id: te.uniqueId(), name: "多行表达式", icon: "", data: FF, desc: "定义函数的时候经常需要分情况给出表达式，可使用\\left{…\\right}。其中，使用\\来分类，使用&指示需要对齐的位置。" }, { id: te.uniqueId(), name: "矩阵", icon: "", data: UF, desc: "使用\\begin{matrix}…\\end{matrix}这样的形式来表示矩阵，在\\begin与\\end之间加入矩阵中的元素即可。矩阵的行之间使用\\分隔，列之间使用&分隔。如果要对矩阵加括号，可以像上文中提到的一样，使用\\left与\\right配合表示括号符号。也可以使用特殊的matrix。即替换\\begin{matrix}…\\end{matrix}中的matrix为pmatrix，bmatrix，Bmatrix，vmatrix, Vmatrix。" }, { id: te.uniqueId(), name: "化学", icon: "", data: pF, desc: "基本格式如下\\rightarrow\\limits^{}_{}, \\rightarrow可替换为\\rightleftarrow, \\leftarrow, =, ^{}和_{}可选，分别表示箭头上方和下方的内容" }, { id: te.uniqueId(), name: "自定义", icon: "", data: EF }, { id: te.uniqueId(), name: "音标", icon: "", data: mF }, { id: te.uniqueId(), name: "其他", icon: "", data: nF }];
let Qu = WQ.map((t) => (t.data = t.data.map((A) => {
  if (A.icon)
    return A;
}).filter((A) => A), t));
class DF {
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
    for (let e = 0; e < Qu.length; e++) {
      A = (A = (A += '<div class="formula-type-container"><div class="formula-type">') + `<img src="${h0}${Qu[e].data[0].icon}.svg"/>`) + `<div class="type-name">${Qu[e].name}</div><div class="formula-item-list noselect">`;
      for (let r = 0; r < Qu[e].data.length; r++)
        A = (A += `<div class="formula-item" sign="${Qu[e].data[r].formula}" >`) + `<img src="${h0}${Qu[e].data[r].icon}.svg" sign="${Qu[e].data[r].formula}" /></div>`;
      A = A + "</div></div></div>";
    }
    return A;
  }
  listenFormulaItemClick(A) {
    var e = document.querySelectorAll(".formula-item");
    Array.from(e).forEach((r) => {
      r.onclick = function(i) {
        i.stopPropagation(), i.preventDefault();
        var d = Qu.map((c) => c.data.find((l) => {
          var w;
          return l.formula == ((w = i.target) == null ? void 0 : w.getAttribute("sign"));
        })).filter((c) => c)[0];
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
const la = [`
`, "^", "_"], HF = ["begin", "end", "left", "right", "limits"];
function yF() {
  return te.uniq(te.flattenDeep(WQ.map((t) => t.data.map((A) => A.icon))));
}
const IF = yF().concat(la).concat(HF);
var Dg = {}, YQ = (Object.defineProperty(Dg, "__esModule", { value: !0 }), Dg.recursiveMatch = void 0);
function bF(t, l, e) {
  var r, i = [], d = [], c = l instanceof RegExp ? l.source : F0(l), l = e instanceof RegExp ? e.source : F0(e);
  if (c === l)
    throw new Error("Begin and end delimiter cannot be identical");
  for (var w, Q = new RegExp((c + l).length === 2 ? "[" + c + l + "]" : c + "|" + l, "g"); (w = Q.exec(t)) !== null; )
    -1 < w[0].search(c) ? d.push({ parent: ((r = d[d.length - 1]) == null ? void 0 : r.children) || i, start: w.index, bodyStart: Q.lastIndex, children: [] }) : d.length && (g = d.pop()).parent.push({ start: g.start, end: Q.lastIndex, bodyStart: g.bodyStart, bodyEnd: w.index, match: t.slice(g.start, Q.lastIndex), children: g.children });
  for (var g, m = 0, b = d; m < b.length; m++)
    (g = b[m]).children.length && i.push.apply(i, g.children);
  return i;
}
function F0(t) {
  return t.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
}
YQ = Dg.recursiveMatch = bF;
let vF = IF;
var kB = ((t) => (t.latex = "latex", t.text = "text", t))(kB || {});
function xo(t, A = 0) {
  const e = [];
  let r = A;
  var i;
  return t.includes("\\") ? (i = vF.map((d) => {
    if (d = Array.from(t.matchAll(new RegExp(`\\\\${d}(?![a-zA-Z])`, "g"))), d.length)
      return d;
  }).filter((d) => d)).length ? i.forEach((d) => {
    d.forEach((c, l) => {
      var w = c[0], Q = (c.index !== r && r - A !== c.index && (g = t.slice(r - A, c.index), Q = r, e.push({ start: Q, end: Q + g.length, match: g, bodyStart: Q, bodyEnd: Q + g.length, children: [], type: "text" })), c.index + A), g = Q + w.length;
      e.push({ start: Q, end: g, match: w, bodyStart: Q, bodyEnd: g, children: [], type: "latex" }), r = g;
      let m = t.slice(r - A);
      m.length && !m.includes("\\") && (e.push({ start: g, end: g + m.length, match: m, bodyStart: g, bodyEnd: g + m.length, children: [], type: la.some((b) => m.includes(b)) ? "latex" : "text" }), r = g + m.length);
    });
  }) : e.push({ start: r, end: r + t.length, match: t, bodyStart: r, bodyEnd: r + t.length, children: [], type: la.some((d) => t.includes(d)) ? "latex" : "text" }) : e.push({ start: r, end: r + t.length, match: t, bodyStart: r, bodyEnd: r + t.length, children: [], type: la.some((d) => t.includes(d)) ? "latex" : "text" }), e;
}
function ZQ(t, A, e) {
  let r = A.bodyStart, i = [];
  return t.forEach((d, c) => {
    var l;
    (l = d.children) != null && l.length && (d.children = ZQ(d.children, { bodyStart: d.bodyStart, bodyEnd: d.bodyEnd }, e)), c === 0 && (i = i.concat(xo(e.slice(r, d.start), r))), d.type = "latex", i.push(d), r = d.end, t[c + 1] && d.end !== t[c + 1].start && (i = i.concat(xo(e.slice(d.end, t[c + 1].start), r))), c === t.length - 1 && (i = i.concat(xo(e.slice(d.end, A.bodyEnd), r)));
  }), i;
}
function KF(t) {
  const A = YQ(t, "{", "}");
  let e = [];
  if (A.length) {
    let i = 0;
    A.forEach((d, c) => {
      var l = t.slice(i, d.start);
      l && (l = xo(l, i), e = e.concat(l)), d.children.length ? d.children = ZQ(d.children, { bodyStart: d.bodyStart, bodyEnd: d.bodyEnd }, t) : d.children = xo(t.slice(d.bodyStart, d.bodyEnd), d.bodyStart), d.type = "latex", e.push(d), i = d.end, c === A.length - 1 && (l = t.slice(i)) && (d = xo(l, i), e = e.concat(d));
    });
  } else {
    var r = xo(t);
    e = e.concat(r);
  }
  return e;
}
function LF(r, A) {
  var r = xF(r), i = r.tag, e = r.id, r = r.className, i = A ? document.createElementNS(A, i) : document.createElement(i);
  return e && (i.id = e), r && (A ? i.setAttribute("class", r) : i.className = r), i;
}
function xF(t) {
  for (var A = t.split(/([.#])/), e = "", r = "", i = 1; i < A.length; i += 2)
    switch (A[i]) {
      case ".":
        e += " " + A[i + 1];
        break;
      case "#":
        r = A[i + 1];
    }
  return { className: e.trim(), tag: A[0] || "div", id: r };
}
function _F(t, A, e) {
  var r = A.__redom_lifecycle;
  if (U0(r))
    A.__redom_lifecycle = {};
  else {
    var i = e;
    for (A.__redom_mounted && Es(A, "onunmount"); i; ) {
      var d, c = i.__redom_lifecycle || {};
      for (d in r)
        c[d] && (c[d] -= r[d]);
      U0(c) && (i.__redom_lifecycle = null), i = i.parentNode;
    }
  }
}
function U0(t) {
  if (t != null) {
    for (var A in t)
      if (t[A])
        return !1;
  }
  return !0;
}
var SF = ["onmount", "onremount", "onunmount"], TF = typeof window < "u" && "ShadowRoot" in window;
function cs(i, A, e, r) {
  var i = Yr(i), d = Yr(A), c = ((A = A === d && d.__redom_view ? d.__redom_view : A) !== d && (d.__redom_view = A), d.__redom_mounted), l = d.parentNode;
  return c && l !== i && _F(A, d, l), e != null ? r ? ((c = Yr(e)).__redom_mounted && Es(c, "onunmount"), i.replaceChild(d, c)) : i.insertBefore(d, Yr(e)) : i.appendChild(d), OF(A, d, i, l), A;
}
function Es(t, A) {
  A === "onmount" || A === "onremount" ? t.__redom_mounted = !0 : A === "onunmount" && (t.__redom_mounted = !1);
  var e = t.__redom_lifecycle;
  if (e) {
    var r, i = t.__redom_view, d = 0;
    for (r in i && i[A] && i[A](), e)
      r && d++;
    if (d)
      for (var c = t.firstChild; c; ) {
        var l = c.nextSibling;
        Es(c, A), c = l;
      }
  }
}
function OF(t, A, e, r) {
  for (var i = A.__redom_lifecycle || (A.__redom_lifecycle = {}), d = e === r, c = !1, l = 0, w = SF; l < w.length; l += 1) {
    var Q = w[l];
    d || t !== A && Q in t && (i[Q] = (i[Q] || 0) + 1), i[Q] && (c = !0);
  }
  if (c) {
    var g = e, m = !1;
    for ((d || g && g.__redom_mounted) && (Es(A, d ? "onremount" : "onmount"), m = !0); g; ) {
      var b, v = g.parentNode, K = g.__redom_lifecycle || (g.__redom_lifecycle = {});
      for (b in i)
        K[b] = (K[b] || 0) + i[b];
      if (m)
        break;
      (g.nodeType === Node.DOCUMENT_NODE || TF && g instanceof ShadowRoot || v && v.__redom_mounted) && (Es(g, d ? "onremount" : "onmount"), m = !0), g = v;
    }
  } else
    A.__redom_lifecycle = {};
}
function MF(t, A, e) {
  var r = Yr(t);
  if (typeof A == "object")
    for (var i in A)
      p0(r, i, A[i]);
  else
    p0(r, A, e);
}
function p0(t, A, e) {
  t.style[A] = e ?? "";
}
var E0 = "http://www.w3.org/1999/xlink";
function jQ(t, A, e, r) {
  var i = Yr(t);
  if (typeof A == "object")
    for (var d in A)
      jQ(i, d, A[d], r);
  else {
    var t = i instanceof SVGElement, c = typeof e == "function";
    A === "style" && typeof e == "object" ? MF(i, e) : t && c ? i[A] = e : A === "dataset" ? zQ(i, e) : !t && (A in i || c) && A !== "list" ? i[A] = e : t && A === "xlink" ? qQ(i, e) : (e = r && A === "class" ? i.className + " " + e : e) == null ? i.removeAttribute(A) : i.setAttribute(A, e);
  }
}
function qQ(t, A, e) {
  if (typeof A == "object")
    for (var r in A)
      qQ(t, r, A[r]);
  else
    e != null ? t.setAttributeNS(E0, A, e) : t.removeAttributeNS(E0, A, e);
}
function zQ(t, A, e) {
  if (typeof A == "object")
    for (var r in A)
      zQ(t, r, A[r]);
  else
    e != null ? t.dataset[A] = e : delete t.dataset[A];
}
function RB(t) {
  return document.createTextNode(t ?? "");
}
function $Q(t, A, e) {
  for (var r = 0, i = A; r < i.length; r += 1) {
    var d, c = i[r];
    c !== 0 && !c || ((d = typeof c) == "function" ? c(t) : d == "string" || d == "number" ? t.appendChild(RB(c)) : GF(Yr(c)) ? cs(t, c) : c.length ? $Q(t, c, e) : d == "object" && jQ(t, c, null, e));
  }
}
function Yr(t) {
  return t.nodeType && t || !t.el && t || Yr(t.el);
}
function GF(t) {
  return t && t.nodeType;
}
function Bs(t) {
  for (var A = [], e = arguments.length - 1; 0 < e--; )
    A[e] = arguments[e + 1];
  var r = typeof t;
  if (r == "string")
    i = LF(t);
  else {
    if (r != "function")
      throw new Error("At least one argument required");
    var i = new (Function.prototype.bind.apply(t, [null].concat(A)))();
  }
  return $Q(Yr(i), A, !0), i;
}
var Fn = Bs;
function AC(t, A, e) {
  var r = t.match;
  return t.type === kB.latex ? t.children.length ? [Fn("span.bk.start", m0(A == null ? void 0 : A.match, "start")), ...t.children.map((i, d) => AC(i, t.children[d - 1], t.children[d + 1])), Fn("span.bk end", m0(A == null ? void 0 : A.match, "end")), (A == null ? void 0 : A.match.at(0)) === "{" && (A == null ? void 0 : A.match.at(-1)) === "}" || A != null && A.match.includes("\\") && !e || la.some((i) => A == null ? void 0 : A.match.includes(i)) && (A != null && A.children.length) ? Fn("text", " ") : ""] : r.at(0) === "{" && r.at(-1) === "}" ? [Fn("span.bk start", "{"), RB(r.slice(1, r.length - 1)), Fn("span.bk end", "}"), A && (A.match.at(0) === "{" && A.match.at(-1) === "}" || A.match.includes("\\") || la.some((i) => A.match.includes(i))) ? Fn("text", " ") : ""] : [Fn("span." + (t.type === kB.latex ? "lx" : "lt"), RB(t.match)), t.type === kB.latex && (e && e.match.at(0) !== "{" && e.match.at(-1) !== "}" || !e) ? Fn("text", " ") : ""] : RB(r);
}
function m0(t, A) {
  return t === "\\left" ? A === "start" ? "\\{" : "\\}" : A === "start" ? "{" : "}";
}
function kF(t) {
  return Bs("span.latex-root", t.map((A, e) => AC(A, t[e - 1], t[e + 1])));
}
function RF(t) {
  let A, e;
  var r, i;
  if (window.getSelection) {
    if ((A = window.getSelection()).focusNode || (r = document.querySelector(".latex-editor-content"), (i = new Range()).setStart(r, r == null ? void 0 : r.childNodes.length), i.setEnd(r, r == null ? void 0 : r.childNodes.length), A == null || A.removeAllRanges(), A == null || A.addRange(i)), (A = window.getSelection()).getRangeAt && A.rangeCount) {
      (e = A.getRangeAt(0)).deleteContents();
      var d = document.createElement("div");
      d.innerHTML = t;
      let c = document.createDocumentFragment(), l, w;
      for (; l = d.firstChild; )
        w = c.appendChild(l);
      e.insertNode(c), w && ((e = e.cloneRange()).setStartAfter(w), e.collapse(!0), A.removeAllRanges(), A.addRange(e));
    }
  } else
    document.selection && document.selection.type != "Control" && document.selection.createRange().pasteHTML(t);
}
async function NF(t, A) {
  t && new MutationObserver(function(e) {
    e.forEach((r) => {
      switch (r.type) {
        case "characterData":
          var i = window.getSelection();
          A(i);
          break;
        case "childList":
          i = window.getSelection(), A(i);
      }
    });
  }).observe(t, { childList: !0, characterData: !0, subtree: !0 });
}
function VF() {
  var i, d, c, l;
  var t = window.getSelection();
  if (t != null && t.isCollapsed) {
    let w = t == null ? void 0 : t.focusNode;
    if (((i = w = (w == null ? void 0 : w.nodeType) !== 3 && w.childNodes.length ? eC(w.childNodes[t.focusOffset - 1]) : w) == null ? void 0 : i.nodeType) === 3 && ((d = w == null ? void 0 : w.nodeValue) == null ? void 0 : d.length) === 1 && w.nodeName === "#text" && !((c = w.parentElement) != null && c.className.includes("bk"))) {
      var A, e = (l = w.parentElement) == null ? void 0 : l.previousSibling;
      if ((e == null ? void 0 : e.nodeType) === 1 && (e != null && e.className.includes("lx")))
        return (r = new Range()).setStart(e, 0), r.setEnd(e, 1), t == null || t.removeAllRanges(), t == null || t.addRange(r), !0;
      if ((e == null ? void 0 : e.nodeType) === 1 && (e != null && e.className.includes("bk")))
        return r = tC(e), (A = new Range()).setStart(r, 0), A.setEnd(e, 1), t == null || t.removeAllRanges(), t == null || t.addRange(A), !0;
    }
  } else {
    var r = t == null ? void 0 : t.focusNode, e = r.nextSibling;
    r.className.includes("lx") && (t == null ? void 0 : t.focusOffset) === 1 && e && e.tagName === "TEXT" && !e.innerText.trimStart() && e.remove();
  }
  return !1;
}
function eC(t) {
  var A;
  return (A = t == null ? void 0 : t.childNodes) != null && A.length ? eC(t.childNodes[t.childNodes.length - 1]) : t;
}
function tC(t) {
  var e;
  var A = t == null ? void 0 : t.previousSibling;
  return A ? (e = A == null ? void 0 : A.className) != null && e.includes("lx") ? t.previousSibling : tC(A) : t;
}
Bs.extend = function() {
  for (var t = [], A = arguments.length; A--; )
    t[A] = arguments[A];
  return Bs.bind.apply(Bs, [this].concat(t));
};
const PF = 65280, JF = 255, XF = /\+{2,}/gi, WF = /\s+/gi, YF = /^\s*?(?:(?:^-?|\s|\+)(?:alt|option|cmd|command|meta|ctrl|control|shift|cmdorctrl|commandorcontrol|backspace|capslock|del|delete|down|end|enter|return|esc|escape|home|insert|left|pagedown|pageup|right|space|spacebar|tab|up|plus|\d|[a-z]|f(?:\d|1\d|2[0-4])|numpad\d|[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-]))+\s*$/i, mu = { HANDLED: 0, UNHANDLED: 1, UNHANDLEABLE: 2 }, An = { isArray: (t) => Array.isArray(t), isEqual: (t, A) => {
  if (t.length !== A.length)
    return !1;
  for (let e = 0, r = t.length; e < r; e++)
    if (t[e] !== A[e])
      return !1;
  return !0;
}, isFalsy: (t) => !t, isKeyboardEvent: (t) => t.type.startsWith("key"), isMac: () => typeof navigator == "object" && /mac|ipod|iphone|ipad/i.test(navigator.platform), isTruthy: (t) => !!t, memoize: (t) => {
  const A = /* @__PURE__ */ new Map();
  return (e) => {
    var r = A.get(e);
    return r || A.has(e) || (r = t(e), A.set(e, r)), r;
  };
} }, lr = { alt: 256, option: 256, cmd: 512, command: 512, meta: 512, ctrl: 1024, control: 1024, shift: 2048, cmdorctrl: An.isMac() ? 512 : 1024, commandorcontrol: An.isMac() ? 512 : 1024, backspace: 1, capslock: 2, del: 3, delete: 3, down: 4, end: 5, enter: 6, return: 6, esc: 7, escape: 7, home: 8, insert: 9, left: 10, pagedown: 11, pageup: 12, right: 13, space: 14, spacebar: 14, tab: 15, up: 16, 0: 17, 1: 18, 2: 19, 3: 20, 4: 21, 5: 22, 6: 23, 7: 24, 8: 25, 9: 26, a: 27, b: 28, c: 29, d: 30, e: 31, f: 32, g: 33, h: 34, i: 35, j: 36, k: 37, l: 38, m: 39, n: 40, o: 41, p: 42, q: 43, r: 44, s: 45, t: 46, u: 47, v: 48, w: 49, x: 50, y: 51, z: 52, "!": 53, '"': 54, "#": 55, $: 56, "%": 57, "&": 58, "'": 59, "(": 60, ")": 61, "*": 62, "+": 63, plus: 63, ",": 64, "-": 65, ".": 66, "/": 67, ":": 68, ";": 69, "<": 70, "=": 71, ">": 72, "?": 73, "@": 74, "[": 75, "\\": 76, "]": 77, "^": 78, _: 79, "`": 80, "{": 81, "|": 82, "}": 83, "~": 84, f1: 85, f2: 86, f3: 87, f4: 88, f5: 89, f6: 90, f7: 91, f8: 92, f9: 93, f10: 94, f11: 95, f12: 96, f13: 97, f14: 98, f15: 99, f16: 100, f17: 101, f18: 102, f19: 103, f20: 104, f21: 105, f22: 106, f23: 107, f24: 108, numpad0: 109, numpad1: 110, numpad2: 111, numpad3: 112, numpad4: 113, numpad5: 114, numpad6: 115, numpad7: 116, numpad8: 117, numpad9: 118 }, ZF = { 18: 256, 91: 512, 92: 512, 93: 512, 224: 512, 17: 1024, 16: 2048, 8: 1, 20: 2, 46: 3, 40: 4, 35: 5, 13: 6, 27: 7, 36: 8, 45: 9, 37: 10, 34: 11, 33: 12, 39: 13, 32: 14, 9: 15, 38: 16, 222: 59, 188: 64, 189: 65, 190: 66, 191: 67, 186: 69, 187: 71, 219: 75, 220: 76, 221: 77, 192: 80, 112: 85, 113: 86, 114: 87, 115: 88, 116: 89, 117: 90, 118: 91, 119: 92, 120: 93, 121: 94, 122: 95, 123: 96, 124: 97, 125: 98, 126: 99, 127: 100, 128: 101, 129: 102, 130: 103, 131: 104, 132: 105, 133: 106, 134: 107, 135: 108, 96: 109, 97: 110, 98: 111, 99: 112, 100: 113, 101: 114, 102: 115, 103: 116, 104: 117, 105: 118 }, jF = { 256: "Alt", 512: "Cmd", 1024: "Ctrl", 2048: "Shift", 1: "Backspace", 2: "Capslock", 3: "Delete", 4: "Down", 5: "End", 6: "Enter", 7: "Escape", 8: "Home", 9: "Insert", 10: "Left", 11: "PageDown", 12: "PageUp", 13: "Right", 14: "Space", 15: "Tab", 16: "Up", 17: "0", 18: "1", 19: "2", 20: "3", 21: "4", 22: "5", 23: "6", 24: "7", 25: "8", 26: "9", 27: "A", 28: "B", 29: "C", 30: "D", 31: "E", 32: "F", 33: "G", 34: "H", 35: "I", 36: "J", 37: "K", 38: "L", 39: "M", 40: "N", 41: "O", 42: "P", 43: "Q", 44: "R", 45: "S", 46: "T", 47: "U", 48: "V", 49: "W", 50: "X", 51: "Y", 52: "Z", 53: "!", 54: '"', 55: "#", 56: "$", 57: "%", 58: "&", 59: "'", 60: "(", 61: ")", 62: "*", 63: "Plus", 64: ",", 65: "-", 66: ".", 67: "/", 68: ":", 69: ";", 70: "<", 71: "=", 72: ">", 73: "?", 74: "@", 75: "[", 76: "\\", 77: "]", 78: "^", 79: "_", 80: "`", 81: "{", 82: "|", 83: "}", 84: "~", 85: "F1", 86: "F2", 87: "F3", 88: "F4", 89: "F5", 90: "F6", 91: "F7", 92: "F8", 93: "F9", 94: "F10", 95: "F11", 96: "F12", 97: "F13", 98: "F14", 99: "F15", 100: "F16", 101: "F17", 102: "F18", 103: "F19", 104: "F20", 105: "F21", 106: "F22", 107: "F23", 108: "F24", 109: "Numpad0", 110: "Numpad1", 111: "Numpad2", 112: "Numpad3", 113: "Numpad4", 114: "Numpad5", 115: "Numpad6", 116: "Numpad7", 117: "Numpad8", 118: "Numpad9" }, qF = { 256: "Alt", 512: "Cmd", 1024: "Ctrl", 2048: "Shift", 1: "Backspace", 2: "Capslock", 3: "Delete", 4: "Down", 5: "End", 6: "Enter", 7: "Escape", 8: "Home", 9: "Insert", 10: "Left", 11: "PageDown", 12: "PageUp", 13: "Right", 14: "Space", 15: "Tab", 16: "Up", 17: "0", 18: "1", 19: "2", 20: "3", 21: "4", 22: "5", 23: "6", 24: "7", 25: "8", 26: "9", 27: "A", 28: "B", 29: "C", 30: "D", 31: "E", 32: "F", 33: "G", 34: "H", 35: "I", 36: "J", 37: "K", 38: "L", 39: "M", 40: "N", 41: "O", 42: "P", 43: "Q", 44: "R", 45: "S", 46: "T", 47: "U", 48: "V", 49: "W", 50: "X", 51: "Y", 52: "Z", 53: "!", 54: '"', 55: "#", 56: "$", 57: "%", 58: "&", 59: "'", 60: "(", 61: ")", 62: "*", 63: "Plus", 64: ",", 65: "-", 66: ".", 67: "/", 68: ":", 69: ";", 70: "<", 71: "=", 72: ">", 73: "?", 74: "@", 75: "[", 76: "\\", 77: "]", 78: "^", 79: "_", 80: "`", 81: "{", 82: "|", 83: "}", 84: "~", 85: "F1", 86: "F2", 87: "F3", 88: "F4", 89: "F5", 90: "F6", 91: "F7", 92: "F8", 93: "F9", 94: "F10", 95: "F11", 96: "F12", 97: "F13", 98: "F14", 99: "F15", 100: "F16", 101: "F17", 102: "F18", 103: "F19", 104: "F20", 105: "F21", 106: "F22", 107: "F23", 108: "F24", 109: "num0", 110: "num1", 111: "num2", 112: "num3", 113: "num4", 114: "num5", 115: "num6", 116: "num7", 117: "num8", 118: "num9" }, zF = { 256: "⌥", 512: "⌘", 1024: "⌃", 2048: "⇧", 1: "⌫", 2: "⇪", 3: "⌦", 4: "↓", 5: "↘", 6: "⏎", 7: "⎋", 8: "↖", 9: "⎀", 10: "←", 11: "⇟", 12: "⇞", 13: "→", 14: "␣", 15: "⇥", 16: "↑", 17: "0", 18: "1", 19: "2", 20: "3", 21: "4", 22: "5", 23: "6", 24: "7", 25: "8", 26: "9", 27: "A", 28: "B", 29: "C", 30: "D", 31: "E", 32: "F", 33: "G", 34: "H", 35: "I", 36: "J", 37: "K", 38: "L", 39: "M", 40: "N", 41: "O", 42: "P", 43: "Q", 44: "R", 45: "S", 46: "T", 47: "U", 48: "V", 49: "W", 50: "X", 51: "Y", 52: "Z", 53: "!", 54: '"', 55: "#", 56: "$", 57: "%", 58: "&", 59: "'", 60: "(", 61: ")", 62: "*", 63: "+", 64: ",", 65: "-", 66: ".", 67: "/", 68: ":", 69: ";", 70: "<", 71: "=", 72: ">", 73: "?", 74: "@", 75: "[", 76: "\\", 77: "]", 78: "^", 79: "_", 80: "`", 81: "{", 82: "|", 83: "}", 84: "~", 85: "F1", 86: "F2", 87: "F3", 88: "F4", 89: "F5", 90: "F6", 91: "F7", 92: "F8", 93: "F9", 94: "F10", 95: "F11", 96: "F12", 97: "F13", 98: "F14", 99: "F15", 100: "F16", 101: "F17", 102: "F18", 103: "F19", 104: "F20", 105: "F21", 106: "F22", 107: "F23", 108: "F24", 109: "Numpad0", 110: "Numpad1", 111: "Numpad2", 112: "Numpad3", 113: "Numpad4", 114: "Numpad5", 115: "Numpad6", 116: "Numpad7", 117: "Numpad8", 118: "Numpad9" }, PA = { getModifierKey: (t) => t & PF, hasModifierKey: (t) => !!PA.getModifierKey(t), getTriggerKey: (t) => t & JF, hasTriggerKey: (t) => !!PA.getTriggerKey(t), event2id: (t) => {
  let A = 0;
  var e, r, i, d;
  return An.isKeyboardEvent(t) && (e = t.type === "keypress", r = t.which || t.keyCode || 0, i = String.fromCharCode(r).toLowerCase(), d = t.key, A = e ? lr[d] || lr[i] || 0 : ZF[r] || lr[i] || lr[d] || 0), t.ctrlKey && (A |= lr.ctrl), t.altKey && (A |= lr.alt), t.shiftKey && (A |= lr.shift), t.metaKey && (A |= lr.cmd), A;
}, event2shortcut: (t) => PA.id2shortcut([PA.event2id(t)]), event2accelerator: (t) => PA.id2accelerator([PA.event2id(t)]), event2symbols: (t) => PA.id2symbols([PA.event2id(t)]), chord2id: An.memoize((t) => t.replace(XF, "+Plus").toLowerCase().split("+").reduce((A, e) => A | (lr[e] || 0), 0)), chord2accelerator: (t) => PA.id2accelerator([PA.chord2id(t)]), chord2symbols: (t) => PA.id2symbols([PA.chord2id(t)]), isValidShortcut: (t) => YF.test(t), checkValidShortcut: (t) => PA.isValidShortcut(t), shortcut2id: An.memoize((t) => t.trim().split(WF).map(PA.chord2id)), shortcut2accelerator: An.memoize((t) => PA.id2accelerator(PA.shortcut2id(t))), shortcut2symbols: An.memoize((t) => PA.id2symbols(PA.shortcut2id(t))), isValidID: (t) => t.every(An.isTruthy), checkValidID: (t) => PA.isValidID(t), id2output: (t, A, e, r) => {
  const { ctrl: i, alt: d, shift: c, cmd: l } = lr;
  return t.map((g) => {
    var Q = [], g = (g & i && Q.push(A[i]), g & d && Q.push(A[d]), g & c && Q.push(A[c]), g & l && Q.push(A[l]), PA.getTriggerKey(g));
    return g && Q.push(A[g] || String.fromCharCode(g).toUpperCase()), Q.join(e);
  }).join(r);
}, id2shortcut: (t) => PA.id2output(t, jF, "+", " "), id2accelerator: (t) => PA.id2output(t, qF, "+", " "), id2symbols: (t) => PA.id2output(t, zF, "", " ") };
class $F {
  constructor(A) {
    this.lastKeydownID = -1, this.currentKeydownShortcutID = [], this.currentKeypressShortcutID = [], this.currentKeyupShortcutID = [], this.resetNextKeydownShortcutID = !1, this.triggeredNextKeypress = !0, this.ignoreNextKeypress = !1, this.listening = !1, this.on = () => {
      this.listening || (this.listening = !0, this.target.addEventListener("keydown", this.handler, { capture: this.capture }), this.target.addEventListener("keypress", this.handler, { capture: this.capture }), this.target.addEventListener("keyup", this.handler, { capture: this.capture }));
    }, this.off = () => {
      this.listening && (this.listening = !1, this.target.removeEventListener("keydown", this.handler, { capture: this.capture }), this.target.removeEventListener("keypress", this.handler, { capture: this.capture }), this.target.removeEventListener("keyup", this.handler, { capture: this.capture }));
    }, this.isListening = () => this.listening, this.handler = (e) => {
      var r, i, d, c, l;
      An.isKeyboardEvent(e) && this.shouldHandleEvent(e) && (r = e.type, i = r === "keypress", d = r === "keyup", (r = r === "keydown") && (this.ignoreNextKeypress = !1), i && this.ignoreNextKeypress ? this.triggeredNextKeypress = !0 : (l = PA.event2id(e), c = PA.getTriggerKey(l), r && (this.lastKeydownID = l), d && (c || l !== this.lastKeydownID) ? this.currentKeyupShortcutID.length = 0 : (d || c) && (c = r ? this.currentKeydownShortcutID : d ? this.currentKeyupShortcutID : this.currentKeypressShortcutID, !r || this.resetNextKeydownShortcutID || this.triggeredNextKeypress || this.currentKeypressShortcutID.push(this.currentKeydownShortcutID[this.currentKeydownShortcutID.length - 1]), r && this.resetNextKeydownShortcutID && (c.length = 0, this.resetNextKeydownShortcutID = !1), c.push(l), i && An.isEqual(this.currentKeydownShortcutID, c) ? (this.resetNextKeydownShortcutID && (this.currentKeypressShortcutID.length = 0), this.triggeredNextKeypress = !0) : ((l = this.options.handler(c, e)) === mu.HANDLED ? (this.resetNextKeydownShortcutID = !0, this.currentKeypressShortcutID.length = 0, this.currentKeyupShortcutID.length = 0) : l === mu.UNHANDLEABLE ? r ? this.resetNextKeydownShortcutID = !0 : i ? this.currentKeypressShortcutID.length = 0 : d && (this.currentKeyupShortcutID.length = 0) : typeof l == "object" && c.splice(0, 1 / 0, ...l), d || (this.ignoreNextKeypress = r && l === mu.HANDLED, this.triggeredNextKeypress = i)))));
    }, this.options = A, this.capture = !!A.capture, this.target = A.target || document, this.shouldHandleEvent = A.shouldHandleEvent || ((e) => !e.defaultPrevented);
  }
}
class AU {
  constructor(A = {}) {
    this.descriptors = [], this.shortcuts = { size: 0, handlers: [] }, this._updateListener = () => {
      var e = !!this.shortcuts.size;
      e !== this.listener.isListening() && (e ? this.listener.on() : this.listener.off());
    }, this.handler = (e, r) => {
      if (this.recordHandler)
        return this.recordHandler(PA.id2accelerator(e)), mu.UNHANDLED;
      let i = !1, d = -1;
      A:
        for (let l = 0, w = e.length; l < w; l++) {
          let Q = this.shortcuts;
          for (let g = l; g < w; g++)
            if (!(Q = Q[e[g]])) {
              if (i || l !== w - 1)
                continue A;
              return mu.UNHANDLEABLE;
            }
          i = !0, d === -1 && (d = l);
          var c = Q.handlers;
          for (let g = 0, m = c.length; g < m; g++)
            if (c[g](r) === !0)
              return r && (r.preventDefault(), r.stopPropagation()), mu.HANDLED;
        }
      return 0 < d ? e.slice(d) : mu.UNHANDLED;
    }, this.get = () => this.descriptors, this.add = (e) => {
      if (!An.isArray(e))
        return this.add([e]);
      e.forEach((r) => {
        const { shortcut: i, handler: d } = r;
        if (i[0] === "-")
          return this.remove([{ shortcut: i, handler: d }]);
        if (d) {
          var c = PA.shortcut2id(i);
          this.descriptors.push(r);
          const l = c.length - 1;
          c.reduce((w, Q, g) => (w[Q] || (w.size++, w[Q] = { parent: w, id: Q, size: 0, handlers: [] }), g === l && w[Q].handlers.unshift(d), w[Q]), this.shortcuts);
        }
      }), this._updateListener();
    }, this.register = (e) => (this.add(e), () => {
      this.remove(e);
    }), this.remove = (e) => {
      if (!An.isArray(e))
        return this.remove([e]);
      e.forEach((r) => {
        let { shortcut: i, handler: d } = r;
        i[0] === "-" && (i = i.slice(1));
        const c = PA.shortcut2id(i), l = (this.descriptors = this.descriptors.filter((w) => w.shortcut !== i && !An.isEqual(PA.shortcut2id(w.shortcut), c) || d && w.handler !== d), c.length - 1);
        c.reduce((w, Q, g) => {
          if (w = w[Q], !w)
            return {};
          if (g === l) {
            d ? w.handlers = w.handlers.filter((b) => b !== d) : w.handlers.length = 0;
            let m = w;
            for (; !m.size && !m.handlers.length && m.parent && m.id; )
              delete m.parent[m.id], m.parent.size--, m = m.parent;
          }
          return w;
        }, this.shortcuts);
      }), this._updateListener();
    }, this.reset = () => {
      this.descriptors = [], this.shortcuts = { size: 0, handlers: [] }, this._updateListener();
    }, this.record = (e) => (this.recordHandler = e, () => {
      delete this.recordHandler;
    }), this.trigger = (e) => (e = typeof e == "string" ? PA.shortcut2id(e) : e, this.handler(e) === mu.HANDLED), this.listener = new $F({ capture: A.capture, handler: this.handler, target: A.target, shouldHandleEvent: A.shouldHandleEvent }), this.reset(), A.shortcuts && this.add(A.shortcuts);
  }
}
class eU {
  constructor(A) {
    if (this.editContent = "", this.container = document.querySelector(A.container), !this.container)
      throw new Error("找不到" + A.container);
    this.editContent = A.content || "", this.contentChange = A.contentChange, this.init();
  }
  init() {
    this.container.contentEditable = "true", this.container.classList.add("latex-editor-content"), NF(this.container, this.observerContentChange.bind(this)), this.observerDelete(), this.removeFontTag();
  }
  observerDelete() {
    new AU().add([{ shortcut: "Backspace", handler: (A) => VF() }]);
  }
  observerContentChange(A) {
    this.editContent = "", this.setEditContent(A);
  }
  setEditContent(A) {
    var e = document.createElement("div"), r = (e.innerHTML = this.container.innerHTML, e.querySelectorAll("text"));
    Array.from(r).forEach((i) => {
      i.innerHTML = i.innerHTML.trimStart();
    }), this.editContent = e.innerText || "", this.contentChange(this.editContent, A);
  }
  getContainer() {
    return this.container;
  }
  getContent() {
    return this.container.innerText || "";
  }
  removeFontTag() {
    this.container.onkeyup = (A) => {
      var c, l, w;
      var e, r, i, d = this.container.querySelector("font");
      d && (r = d.innerText, (l = (i = (c = e = window.getSelection()) == null ? void 0 : c.focusNode).innerHTML) != null && l.trimStart() || ((w = i.innerHTML) == null ? void 0 : w.length) !== 1 || (cs(d.parentElement, Fn("span.lt", r)), d = (r = d.parentElement.lastChild).innerText, i.remove(), (i = new Range()).setStart(r, d.length), i.setEnd(r, d.length), e == null || e.removeAllRanges(), e == null || e.addRange(i)));
    };
  }
}
var Gd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Kf = { exports: {} }, tU = (function(t, A) {
  (function() {
    var e, r = "Expected a function", i = "__lodash_hash_undefined__", d = "__lodash_placeholder__", c = 128, l = 9007199254740991, w = NaN, Q = 4294967295, g = [["ary", c], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]], m = "[object Arguments]", b = "[object Array]", v = "[object Boolean]", K = "[object Date]", I = "[object Error]", S = "[object Function]", O = "[object GeneratorFunction]", N = "[object Map]", oA = "[object Number]", q = "[object Object]", P = "[object Promise]", wA = "[object RegExp]", Z = "[object Set]", IA = "[object String]", DA = "[object Symbol]", JA = "[object WeakMap]", we = "[object ArrayBuffer]", _A = "[object DataView]", RA = "[object Float32Array]", We = "[object Float64Array]", de = "[object Int8Array]", ue = "[object Int16Array]", se = "[object Int32Array]", yn = "[object Uint8Array]", Tu = "[object Uint8ClampedArray]", Ou = "[object Uint16Array]", Mu = "[object Uint32Array]", ha = /\b__p \+= '';/g, Fa = /\b(__p \+=) '' \+/g, Ua = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Oo = /&(?:amp|lt|gt|quot|#39);/g, Mo = /[&<>"']/g, pl = RegExp(Oo.source), El = RegExp(Mo.source), ml = /<%-([\s\S]+?)%>/g, _s = /<%([\s\S]+?)%>/g, pa = /<%=([\s\S]+?)%>/g, Dl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Hl = /^\w*$/, yl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ea = /[\\^$.*+?()[\]{}|]/g, Ss = RegExp(Ea.source), ma = /^\s+/, Il = /\s/, bl = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Da = /\{\n\/\* \[wrapped with (.+)\] \*/, vl = /,? & /, Ha = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Kl = /[()=,{}\[\]\/\s]/, Ll = /\\(\\)?/g, xl = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ts = /\w*$/, _l = /^[-+]0x[0-9a-f]+$/i, Sl = /^0b[01]+$/i, Tl = /^\[object .+?Constructor\]$/, Ol = /^0o[0-7]+$/i, Os = /^(?:0|[1-9]\d*)$/, Ml = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Go = /($^)/, Gl = /['\n\r\u2028\u2029\\]/g, ko = "\\ud800-\\udfff", Ms = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", pr = "\\u2700-\\u27bf", SA = "a-z\\xdf-\\xf6\\xf8-\\xff", In = "A-Z\\xc0-\\xd6\\xd8-\\xde", Gs = "\\ufe0e\\ufe0f", Yn = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Ro = "['’]", OA = "[" + ko + "]", ks = "[" + Yn + "]", Ur = "[" + Ms + "]", bn = "[" + pr + "]", ya = "[" + SA + "]", Yn = "[^" + ko + Yn + "\\d+" + pr + SA + In + "]", pr = "\\ud83c[\\udffb-\\udfff]", SA = "[^" + ko + "]", TA = "(?:\\ud83c[\\udde6-\\uddff]){2}", Dr = "[\\ud800-\\udbff][\\udc00-\\udfff]", In = "[" + In + "]", Ia = "\\u200d", Gu = "(?:" + ya + "|" + Yn + ")", Yn = "(?:" + In + "|" + Yn + ")", Er = "(?:['’](?:d|ll|m|re|s|t|ve))?", en = "(?:['’](?:D|LL|M|RE|S|T|VE))?", ku = "(?:" + Ur + "|" + pr + ")?", qr = "[" + Gs + "]?", qr = qr + ku + ("(?:" + Ia + "(?:" + [SA, TA, Dr].join("|") + ")" + qr + ku + ")*"), ku = "(?:" + [bn, TA, Dr].join("|") + ")" + qr, bn = "(?:" + [SA + Ur + "?", Ur, TA, Dr, OA].join("|") + ")", Rs = RegExp(Ro, "g"), Ns = RegExp(Ur, "g"), mr = RegExp(pr + "(?=" + pr + ")|" + bn + qr, "g"), No = RegExp([In + "?" + ya + "+" + Er + "(?=" + [ks, In, "$"].join("|") + ")", Yn + "+" + en + "(?=" + [ks, In + Gu, "$"].join("|") + ")", In + "?" + Gu + "+" + Er, In + "+" + en, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", ku].join("|"), "g"), ba = RegExp("[" + Ia + ko + Ms + Gs + "]"), kl = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Rl = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], va = -1, YA = {}, XA = (YA[RA] = YA[We] = YA[de] = YA[ue] = YA[se] = YA[yn] = YA[Tu] = YA[Ou] = YA[Mu] = !0, YA[m] = YA[b] = YA[we] = YA[v] = YA[_A] = YA[K] = YA[I] = YA[S] = YA[N] = YA[oA] = YA[q] = YA[wA] = YA[Z] = YA[IA] = YA[JA] = !1, {}), Nl = (XA[m] = XA[b] = XA[we] = XA[_A] = XA[v] = XA[K] = XA[RA] = XA[We] = XA[de] = XA[ue] = XA[se] = XA[N] = XA[oA] = XA[q] = XA[wA] = XA[Z] = XA[IA] = XA[DA] = XA[yn] = XA[Tu] = XA[Ou] = XA[Mu] = !0, XA[I] = XA[S] = XA[JA] = !1, { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }), Vl = parseFloat, Pl = parseInt, SA = typeof Gd == "object" && Gd && Gd.Object === Object && Gd, TA = typeof self == "object" && self && self.Object === Object && self, Te = SA || TA || Function("return this")(), Dr = A && !A.nodeType && A, Hr = Dr && t && !t.nodeType && t, vn = Hr && Hr.exports === Dr, yr = vn && SA.process, OA = function() {
      try {
        var M = Hr && Hr.require && Hr.require("util").types;
        return M || yr && yr.binding && yr.binding("util");
      } catch {
      }
    }(), Zn = OA && OA.isArrayBuffer, jn = OA && OA.isDate, Ka = OA && OA.isMap, Vo = OA && OA.isRegExp, Ye = OA && OA.isSet, La = OA && OA.isTypedArray;
    function rt(M, j, R) {
      switch (R.length) {
        case 0:
          return M.call(j);
        case 1:
          return M.call(j, R[0]);
        case 2:
          return M.call(j, R[0], R[1]);
        case 3:
          return M.call(j, R[0], R[1], R[2]);
      }
      return M.apply(j, R);
    }
    function Vs(M, j, R, dA) {
      for (var gA = -1, L = M == null ? 0 : M.length; ++gA < L; ) {
        var J = M[gA];
        j(dA, J, R(J), M);
      }
      return dA;
    }
    function wt(M, j) {
      for (var R = -1, dA = M == null ? 0 : M.length; ++R < dA && j(M[R], R, M) !== !1; )
        ;
      return M;
    }
    function Ps(M, j) {
      for (var R = M == null ? 0 : M.length; R-- && j(M[R], R, M) !== !1; )
        ;
      return M;
    }
    function xa(M, j) {
      for (var R = -1, dA = M == null ? 0 : M.length; ++R < dA; )
        if (!j(M[R], R, M))
          return !1;
      return !0;
    }
    function he(M, j) {
      for (var R = -1, dA = M == null ? 0 : M.length, gA = 0, L = []; ++R < dA; ) {
        var J = M[R];
        j(J, R, M) && (L[gA++] = J);
      }
      return L;
    }
    function Po(M, j) {
      return !!(M != null && M.length) && -1 < $r(M, j, 0);
    }
    function ut(M, j, R) {
      for (var dA = -1, gA = M == null ? 0 : M.length; ++dA < gA; )
        if (R(j, M[dA]))
          return !0;
      return !1;
    }
    function qA(M, j) {
      for (var R = -1, dA = M == null ? 0 : M.length, gA = Array(dA); ++R < dA; )
        gA[R] = j(M[R], R, M);
      return gA;
    }
    function Kn(M, j) {
      for (var R = -1, dA = j.length, gA = M.length; ++R < dA; )
        M[gA + R] = j[R];
      return M;
    }
    function tn(M, j, R, dA) {
      var gA = -1, L = M == null ? 0 : M.length;
      for (dA && L && (R = M[++gA]); ++gA < L; )
        R = j(R, M[gA], gA, M);
      return R;
    }
    function Jo(M, j, R, dA) {
      var gA = M == null ? 0 : M.length;
      for (dA && gA && (R = M[--gA]); gA--; )
        R = j(R, M[gA], gA, M);
      return R;
    }
    function Ru(M, j) {
      for (var R = -1, dA = M == null ? 0 : M.length; ++R < dA; )
        if (j(M[R], R, M))
          return !0;
      return !1;
    }
    var zA = Au("length");
    function Ln(M, j, R) {
      var dA;
      return R(M, function(gA, L, J) {
        if (j(gA, L, J))
          return dA = L, !1;
      }), dA;
    }
    function zr(M, j, R, dA) {
      for (var gA = M.length, L = R + (dA ? 1 : -1); dA ? L-- : ++L < gA; )
        if (j(M[L], L, M))
          return L;
      return -1;
    }
    function $r(M, j, R) {
      if (j != j)
        return zr(M, Js, R);
      for (var dA = M, gA = j, L = R - 1, J = dA.length; ++L < J; )
        if (dA[L] === gA)
          return L;
      return -1;
    }
    function _a(M, j, R, dA) {
      for (var gA = R - 1, L = M.length; ++gA < L; )
        if (dA(M[gA], j))
          return gA;
      return -1;
    }
    function Js(M) {
      return M != M;
    }
    function Sa(M, j) {
      var R = M == null ? 0 : M.length;
      return R ? Xo(M, j) / R : w;
    }
    function Au(M) {
      return function(j) {
        return j == null ? e : j[M];
      };
    }
    function qn(M) {
      return function(j) {
        return M == null ? e : M[j];
      };
    }
    function Xs(M, j, R, dA, gA) {
      return gA(M, function(L, J, k) {
        R = dA ? (dA = !1, L) : j(R, L, J, k);
      }), R;
    }
    function Xo(M, j) {
      for (var R, dA = -1, gA = M.length; ++dA < gA; ) {
        var L = j(M[dA]);
        L !== e && (R = R === e ? L : R + L);
      }
      return R;
    }
    function Wo(M, j) {
      for (var R = -1, dA = Array(M); ++R < M; )
        dA[R] = j(R);
      return dA;
    }
    function Yo(M) {
      return M && M.slice(0, Ma(M) + 1).replace(ma, "");
    }
    function Ze(M) {
      return function(j) {
        return M(j);
      };
    }
    function Zo(M, j) {
      return qA(j, function(R) {
        return M[R];
      });
    }
    function Ir(M, j) {
      return M.has(j);
    }
    function jo(M, j) {
      for (var R = -1, dA = M.length; ++R < dA && -1 < $r(j, M[R], 0); )
        ;
      return R;
    }
    function Ta(M, j) {
      for (var R = M.length; R-- && -1 < $r(j, M[R], 0); )
        ;
      return R;
    }
    var Qt = qn({ À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }), Oa = qn({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
    function Nu(M) {
      return "\\" + Nl[M];
    }
    function br(M) {
      return ba.test(M);
    }
    function qo(M) {
      var j = -1, R = Array(M.size);
      return M.forEach(function(dA, gA) {
        R[++j] = [gA, dA];
      }), R;
    }
    function Ws(M, j) {
      return function(R) {
        return M(j(R));
      };
    }
    function zn(M, j) {
      for (var R = -1, dA = M.length, gA = 0, L = []; ++R < dA; ) {
        var J = M[R];
        J !== j && J !== d || (M[R] = d, L[gA++] = R);
      }
      return L;
    }
    function zo(M) {
      var j = -1, R = Array(M.size);
      return M.forEach(function(dA) {
        R[++j] = dA;
      }), R;
    }
    function Gt(M) {
      return (br(M) ? function(j) {
        for (var R = mr.lastIndex = 0; mr.test(j); )
          ++R;
        return R;
      } : zA)(M);
    }
    function Ct(M) {
      return br(M) ? M.match(mr) || [] : M.split("");
    }
    function Ma(M) {
      for (var j = M.length; j-- && Il.test(M.charAt(j)); )
        ;
      return j;
    }
    var $n = qn({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }), xn = function M(bA) {
      var R = (bA = bA == null ? Te : xn.defaults(Te.Object(), bA, xn.pick(Te, Rl))).Array, ZA = bA.Date, dA = bA.Error, gA = bA.Function, L = bA.Math, J = bA.Object, k = bA.RegExp, sA = bA.String, cA = bA.TypeError, UA = R.prototype, BA = gA.prototype, CA = J.prototype, nn = bA["__core-js_shared__"], $o = BA.toString, EA = CA.hasOwnProperty, Ai = 0, vr = (BA = /[^.]+$/.exec(nn && nn.keys && nn.keys.IE_PROTO || "")) ? "Symbol(src)_1." + BA : "", _n = CA.toString, ei = $o.call(J), kA = Te._, Jl = k("^" + $o.call(EA).replace(Ea, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), BA = vn ? bA.Buffer : e, aA = bA.Symbol, Vu = bA.Uint8Array, Pu = BA ? BA.allocUnsafe : e, ti = Ws(J.getPrototypeOf, J), Ys = J.create, Zs = CA.propertyIsEnumerable, Kr = UA.splice, Ga = aA ? aA.isConcatSpreadable : e, Ar = aA ? aA.iterator : e, er = aA ? aA.toStringTag : e, Ju = function() {
        try {
          var u = ln(J, "defineProperty");
          return u({}, "", {}), u;
        } catch {
        }
      }(), Sn = bA.clearTimeout !== Te.clearTimeout && bA.clearTimeout, Vi = ZA && ZA.now !== Te.Date.now && ZA.now, ni = bA.setTimeout !== Te.setTimeout && bA.setTimeout, tr = L.ceil, rn = L.floor, eu = J.getOwnPropertySymbols, BA = BA ? BA.isBuffer : e, Lr = bA.isFinite, ka = UA.join, ri = Ws(J.keys, J), ce = L.max, Le = L.min, js = ZA.now, Xl = bA.parseInt, qs = L.random, Ee = UA.reverse, ZA = ln(bA, "DataView"), Xu = ln(bA, "Map"), Wu = ln(bA, "Promise"), xr = ln(bA, "Set"), bA = ln(bA, "WeakMap"), ot = ln(J, "create"), nr = bA && new bA(), un = {}, tu = ar(ZA), vA = ar(Xu), Yu = ar(Wu), ui = ar(xr), nu = ar(bA), aA = aA ? aA.prototype : e, Zu = aA ? aA.valueOf : e, zs = aA ? aA.toString : e;
      function D(u) {
        if (ee(u) && !FA(u) && !(u instanceof E)) {
          if (u instanceof bt)
            return u;
          if (EA.call(u, "__wrapped__"))
            return fo(u);
        }
        return new bt(u);
      }
      var ru = function(u) {
        return KA(u) ? Ys ? Ys(u) : (Ra.prototype = u, u = new Ra(), Ra.prototype = e, u) : {};
      };
      function Ra() {
      }
      function rr() {
      }
      function bt(u, a) {
        this.__wrapped__ = u, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = e;
      }
      function E(u) {
        this.__wrapped__ = u, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Q, this.__views__ = [];
      }
      function vt(u) {
        var a = -1, B = u == null ? 0 : u.length;
        for (this.clear(); ++a < B; ) {
          var h = u[a];
          this.set(h[0], h[1]);
        }
      }
      function kt(u) {
        var a = -1, B = u == null ? 0 : u.length;
        for (this.clear(); ++a < B; ) {
          var h = u[a];
          this.set(h[0], h[1]);
        }
      }
      function Kt(u) {
        var a = -1, B = u == null ? 0 : u.length;
        for (this.clear(); ++a < B; ) {
          var h = u[a];
          this.set(h[0], h[1]);
        }
      }
      function Oe(u) {
        var a = -1, B = u == null ? 0 : u.length;
        for (this.__data__ = new Kt(); ++a < B; )
          this.add(u[a]);
      }
      function hA(u) {
        u = this.__data__ = new kt(u), this.size = u.size;
      }
      function ur(u, a) {
        var B, h = FA(u), U = !h && sr(u), n = !h && !U && Bt(u), o = !h && !U && !n && wn(u), s = h || U || n || o, f = s ? Wo(u.length, sA) : [], C = f.length;
        for (B in u)
          !a && !EA.call(u, B) || s && (B == "length" || n && (B == "offset" || B == "parent") || o && (B == "buffer" || B == "byteLength" || B == "byteOffset") || fn(B, C)) || f.push(B);
        return f;
      }
      function on(u) {
        var a = u.length;
        return a ? u[Qi(0, a - 1)] : e;
      }
      function Tn(u, a) {
        return lo(Re(u), an(a, 0, u.length));
      }
      function _r(u) {
        return lo(Re(u));
      }
      function ht(u, a, B) {
        (B === e || st(u[a], B)) && (B !== e || a in u) || Rt(u, a, B);
      }
      function uu(u, a, B) {
        var h = u[a];
        EA.call(u, a) && st(h, B) && (B !== e || a in u) || Rt(u, a, B);
      }
      function ju(u, a) {
        for (var B = u.length; B--; )
          if (st(u[B][0], a))
            return B;
        return -1;
      }
      function Wl(u, a, B, h) {
        return it(u, function(U, n, o) {
          a(h, U, B(U), o);
        }), h;
      }
      function $s(u, a) {
        return u && Vt(a, Ue(a), u);
      }
      function Rt(u, a, B) {
        a == "__proto__" && Ju ? Ju(u, a, { configurable: !0, enumerable: !0, value: B, writable: !0 }) : u[a] = B;
      }
      function Sr(u, a) {
        for (var B = -1, h = a.length, U = R(h), n = u == null; ++B < h; )
          U[B] = n ? e : fu(u, a[B]);
        return U;
      }
      function an(u, a, B) {
        return u = u == u && (B !== e && (u = u <= B ? u : B), a !== e) ? a <= u ? u : a : u;
      }
      function Lt(u, a, B, h, U, n) {
        var o, s = 1 & a, f = 2 & a, C = 4 & a;
        if ((o = B ? U ? B(u, h, U, n) : B(u) : o) === e) {
          if (!KA(u))
            return u;
          var F, h = FA(u);
          if (h) {
            if (o = function(_) {
              var G = _.length, V = new _.constructor(G);
              return G && typeof _[0] == "string" && EA.call(_, "index") && (V.index = _.index, V.input = _.input), V;
            }(u), !s)
              return Re(u, o);
          } else {
            var p = He(u), H = p == S || p == O;
            if (Bt(u))
              return pi(u, s);
            if (p == q || p == m || H && !U) {
              if (o = f || H ? {} : ir(u), !s)
                return f ? (y = H = u, y = (F = o) && Vt(y, Ve(y), F), Vt(H, fA(H), y)) : (H = $s(o, F = u), Vt(F, or(F), H));
            } else {
              if (!XA[p])
                return U ? u : {};
              o = function(_, G, V) {
                var X = _.constructor;
                switch (G) {
                  case we:
                    return io(_);
                  case v:
                  case K:
                    return new X(+_);
                  case _A:
                    return function(W, Y) {
                      return Y = Y ? io(W.buffer) : W.buffer, new W.constructor(Y, W.byteOffset, W.byteLength);
                    }(_, V);
                  case RA:
                  case We:
                  case de:
                  case ue:
                  case se:
                  case yn:
                  case Tu:
                  case Ou:
                  case Mu:
                    return Gn(_, V);
                  case N:
                    return new X();
                  case oA:
                  case IA:
                    return new X(_);
                  case wA:
                    return function(W) {
                      var Y = new W.constructor(W.source, Ts.exec(W));
                      return Y.lastIndex = W.lastIndex, Y;
                    }(_);
                  case Z:
                    return new X();
                  case DA:
                    return function(W) {
                      return Zu ? J(Zu.call(W)) : {};
                    }(_);
                }
              }(u, p, s);
            }
          }
          var y = (n = n || new hA()).get(u);
          if (y)
            return y;
          n.set(u, o), oe(u) ? u.forEach(function(_) {
            o.add(Lt(_, a, B, _, u, n));
          }) : gn(u) && u.forEach(function(_, G) {
            o.set(G, Lt(_, a, B, G, u, n));
          });
          var x = h ? e : (C ? f ? bi : Ii : f ? Ve : Ue)(u);
          wt(x || u, function(_, G) {
            x && (_ = u[G = _]), uu(o, G, Lt(_, a, B, G, u, n));
          });
        }
        return o;
      }
      function Na(u, a, B) {
        var h = B.length;
        if (u == null)
          return !h;
        for (u = J(u); h--; ) {
          var U = B[h], n = a[U], o = u[U];
          if (o === e && !(U in u) || !n(o))
            return !1;
        }
        return !0;
      }
      function dn(u, a, B) {
        if (typeof u != "function")
          throw new cA(r);
        return Bu(function() {
          u.apply(e, B);
        }, a);
      }
      function Tr(u, a, B, h) {
        var U = -1, n = Po, o = !0, s = u.length, f = [], C = a.length;
        if (s) {
          B && (a = qA(a, Ze(B))), h ? (n = ut, o = !1) : 200 <= a.length && (n = Ir, o = !1, a = new Oe(a));
          A:
            for (; ++U < s; ) {
              var p = u[U], F = B == null ? p : B(p), p = h || p !== 0 ? p : 0;
              if (o && F == F) {
                for (var H = C; H--; )
                  if (a[H] === F)
                    continue A;
                f.push(p);
              } else
                n(a, F, h) || f.push(p);
            }
        }
        return f;
      }
      D.templateSettings = { escape: ml, evaluate: _s, interpolate: pa, variable: "", imports: { _: D } }, (D.prototype = rr.prototype).constructor = D, (bt.prototype = ru(rr.prototype)).constructor = bt, (E.prototype = ru(rr.prototype)).constructor = E, vt.prototype.clear = function() {
        this.__data__ = ot ? ot(null) : {}, this.size = 0;
      }, vt.prototype.delete = function(u) {
        return u = this.has(u) && delete this.__data__[u], this.size -= u ? 1 : 0, u;
      }, vt.prototype.get = function(u) {
        var a, B = this.__data__;
        return ot ? (a = B[u]) === i ? e : a : EA.call(B, u) ? B[u] : e;
      }, vt.prototype.has = function(u) {
        var a = this.__data__;
        return ot ? a[u] !== e : EA.call(a, u);
      }, vt.prototype.set = function(u, a) {
        var B = this.__data__;
        return this.size += this.has(u) ? 0 : 1, B[u] = ot && a === e ? i : a, this;
      }, kt.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, kt.prototype.delete = function(u) {
        var a = this.__data__;
        return !((u = ju(a, u)) < 0 || (u == a.length - 1 ? a.pop() : Kr.call(a, u, 1), --this.size, 0));
      }, kt.prototype.get = function(u) {
        var a = this.__data__;
        return (u = ju(a, u)) < 0 ? e : a[u][1];
      }, kt.prototype.has = function(u) {
        return -1 < ju(this.__data__, u);
      }, kt.prototype.set = function(u, a) {
        var B = this.__data__, h = ju(B, u);
        return h < 0 ? (++this.size, B.push([u, a])) : B[h][1] = a, this;
      }, Kt.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new vt(), map: new (Xu || kt)(), string: new vt() };
      }, Kt.prototype.delete = function(u) {
        return u = cu(this, u).delete(u), this.size -= u ? 1 : 0, u;
      }, Kt.prototype.get = function(u) {
        return cu(this, u).get(u);
      }, Kt.prototype.has = function(u) {
        return cu(this, u).has(u);
      }, Kt.prototype.set = function(u, a) {
        var B = cu(this, u), h = B.size;
        return B.set(u, a), this.size += B.size == h ? 0 : 1, this;
      }, Oe.prototype.add = Oe.prototype.push = function(u) {
        return this.__data__.set(u, i), this;
      }, Oe.prototype.has = function(u) {
        return this.__data__.has(u);
      }, hA.prototype.clear = function() {
        this.__data__ = new kt(), this.size = 0;
      }, hA.prototype.delete = function(B) {
        var a = this.__data__, B = a.delete(B);
        return this.size = a.size, B;
      }, hA.prototype.get = function(u) {
        return this.__data__.get(u);
      }, hA.prototype.has = function(u) {
        return this.__data__.has(u);
      }, hA.prototype.set = function(u, a) {
        var B = this.__data__;
        if (B instanceof kt) {
          var h = B.__data__;
          if (!Xu || h.length < 199)
            return h.push([u, a]), this.size = ++B.size, this;
          B = this.__data__ = new Kt(h);
        }
        return B.set(u, a), this.size = B.size, this;
      };
      var it = Ad(Ut), Ft = Ad(ii, !0);
      function Ac(u, a) {
        var B = !0;
        return it(u, function(h, U, n) {
          return B = !!a(h, U, n);
        }), B;
      }
      function qu(u, a, B) {
        for (var h = -1, U = u.length; ++h < U; ) {
          var n, o, s = u[h], f = a(s);
          f != null && (n === e ? f == f && !lt(f) : B(f, n)) && (n = f, o = s);
        }
        return o;
      }
      function ou(u, a) {
        var B = [];
        return it(u, function(h, U, n) {
          a(h, U, n) && B.push(h);
        }), B;
      }
      function $A(u, a, B, h, U) {
        var n = -1, o = u.length;
        for (B = B || ad, U = U || []; ++n < o; ) {
          var s = u[n];
          0 < a && B(s) ? 1 < a ? $A(s, a - 1, B, h, U) : Kn(U, s) : h || (U[U.length] = s);
        }
        return U;
      }
      var oi = je(), ec = je(!0);
      function Ut(u, a) {
        return u && oi(u, a, Ue);
      }
      function ii(u, a) {
        return u && ec(u, a, Ue);
      }
      function Fe(u, a) {
        return he(a, function(B) {
          return Be(u[B]);
        });
      }
      function On(u, a) {
        for (var B = 0, h = (a = Mn(a, u)).length; u != null && B < h; )
          u = u[Jt(a[B++])];
        return B && B == h ? u : e;
      }
      function Va(u, a, B) {
        return a = a(u), FA(u) ? a : Kn(a, B(u));
      }
      function Ae(u) {
        if (u == null)
          return u === e ? "[object Undefined]" : "[object Null]";
        if (er && er in J(u)) {
          var a = u, B = EA.call(a, er), h = a[er];
          try {
            a[er] = e;
            var U = !0;
          } catch {
          }
          var n = _n.call(a);
          return U && (B ? a[er] = h : delete a[er]), n;
        }
        return _n.call(u);
      }
      function zu(u, a) {
        return a < u;
      }
      function ai(u, a) {
        return u != null && EA.call(u, a);
      }
      function Or(u, a) {
        return u != null && a in J(u);
      }
      function di(u, a, B) {
        for (var h = B ? ut : Po, U = u[0].length, n = u.length, o = n, s = R(n), f = 1 / 0, C = []; o--; ) {
          var F = u[o];
          o && a && (F = qA(F, Ze(a))), f = Le(F.length, f), s[o] = !B && (a || 120 <= U && 120 <= F.length) ? new Oe(o && F) : e;
        }
        var F = u[0], p = -1, H = s[0];
        A:
          for (; ++p < U && C.length < f; ) {
            var x = F[p], y = a ? a(x) : x, x = B || x !== 0 ? x : 0;
            if (!(H ? Ir(H, y) : h(C, y, B))) {
              for (o = n; --o; ) {
                var T = s[o];
                if (!(T ? Ir(T, y) : h(u[o], y, B)))
                  continue A;
              }
              H && H.push(y), C.push(x);
            }
          }
        return C;
      }
      function me(u, a, B) {
        return a = (u = uc(u, a = Mn(a, u))) == null ? u : u[Jt(Dt(a))], a == null ? e : rt(a, u, B);
      }
      function si(u) {
        return ee(u) && Ae(u) == m;
      }
      function $u(u, a, B, h, U) {
        if (u === a)
          return !0;
        if (u == null || a == null || !ee(u) && !ee(a))
          return u != u && a != a;
        var n = $u, o = FA(u), f = FA(a), s = o ? b : He(u), f = f ? b : He(a), C = (s = s == m ? q : s) == q, F = (f = f == m ? q : f) == q;
        if ((f = s == f) && Bt(u)) {
          if (!Bt(a))
            return !1;
          C = !(o = !0);
        }
        if (f && !C) {
          if (U = U || new hA(), o || wn(u))
            return od(u, a, B, h, n, U);
          var p = u, H = a, y = s, x = B, T = h, _ = n, G = U;
          switch (y) {
            case _A:
              if (p.byteLength != H.byteLength || p.byteOffset != H.byteOffset)
                return !1;
              p = p.buffer, H = H.buffer;
            case we:
              return !!(p.byteLength == H.byteLength && _(new Vu(p), new Vu(H)));
            case v:
            case K:
            case oA:
              return st(+p, +H);
            case I:
              return p.name == H.name && p.message == H.message;
            case wA:
            case IA:
              return p == H + "";
            case N:
              var V = qo;
            case Z:
              var X = 1 & x;
              return V = V || zo, p.size != H.size && !X ? !1 : (X = G.get(p), X ? X == H : (x |= 2, G.set(p, H), X = od(V(p), V(H), x, T, _, G), G.delete(p), X));
            case DA:
              if (Zu)
                return Zu.call(p) == Zu.call(H);
          }
          return !1;
        }
        if (!(1 & B) && (o = C && EA.call(u, "__wrapped__"), s = F && EA.call(a, "__wrapped__"), o || s))
          return C = o ? u.value() : u, F = s ? a.value() : a, U = U || new hA(), n(C, F, B, h, U);
        if (f) {
          U = U || new hA();
          var W = u, Y = a, rA = B, z = h, nA = n, iA = U, yA = 1 & rA, ye = Ii(W), ft = ye.length, o = Ii(Y).length;
          if (ft != o && !yA)
            return !1;
          for (var At = ft; At--; ) {
            var ie = ye[At];
            if (!(yA ? ie in Y : EA.call(Y, ie)))
              return !1;
          }
          if (o = iA.get(W), s = iA.get(Y), o && s)
            return o == Y && s == W;
          for (var Vn = !0, Br = (iA.set(W, Y), iA.set(Y, W), yA); ++At < ft; ) {
            ie = ye[At];
            var mo, Vr = W[ie], Zt = Y[ie];
            if (!((mo = z ? yA ? z(Zt, Vr, ie, Y, W, iA) : z(Vr, Zt, ie, W, Y, iA) : mo) === e ? Vr === Zt || nA(Vr, Zt, rA, z, iA) : mo)) {
              Vn = !1;
              break;
            }
            Br = Br || ie == "constructor";
          }
          return Vn && !Br && (o = W.constructor, s = Y.constructor, o != s) && "constructor" in W && "constructor" in Y && !(typeof o == "function" && o instanceof o && typeof s == "function" && s instanceof s) && (Vn = !1), iA.delete(W), iA.delete(Y), Vn;
        }
        return !1;
      }
      function Pa(u, a, B, h) {
        var U = B.length, n = U, o = !h;
        if (u == null)
          return !n;
        for (u = J(u); U--; ) {
          var s = B[U];
          if (o && s[2] ? s[1] !== u[s[0]] : !(s[0] in u))
            return !1;
        }
        for (; ++U < n; ) {
          var f = (s = B[U])[0], C = u[f], F = s[1];
          if (o && s[2]) {
            if (C === e && !(f in u))
              return !1;
          } else {
            var p, H = new hA();
            if (!((p = h ? h(C, F, f, u, a, H) : p) === e ? $u(F, C, 3, h, H) : p))
              return !1;
          }
        }
        return !0;
      }
      function ci(u) {
        var a;
        return !(!KA(u) || (a = u, vr && vr in a)) && (Be(u) ? Jl : Tl).test(ar(u));
      }
      function iu(u) {
        return typeof u == "function" ? u : u == null ? $e : typeof u == "object" ? FA(u) ? li(u[0], u[1]) : Xa(u) : Xi(u);
      }
      function Bi(u) {
        if (!mt(u))
          return ri(u);
        var a, B = [];
        for (a in J(u))
          EA.call(u, a) && a != "constructor" && B.push(a);
        return B;
      }
      function Ao(u) {
        if (!KA(u)) {
          var a = u, B = [];
          if (a != null)
            for (var h in J(a))
              B.push(h);
          return B;
        }
        var U, n = mt(u), o = [];
        for (U in u)
          (U != "constructor" || !n && EA.call(u, U)) && o.push(U);
        return o;
      }
      function eo(u, a) {
        return u < a;
      }
      function Ja(u, a) {
        var B = -1, h = ct(u) ? R(u.length) : [];
        return it(u, function(U, n, o) {
          h[++B] = a(U, n, o);
        }), h;
      }
      function Xa(u) {
        var a = Bo(u);
        return a.length == 1 && a[0][2] ? xi(a[0][0], a[0][1]) : function(B) {
          return B === u || Pa(B, u, a);
        };
      }
      function li(u, a) {
        return Ki(u) && Ne(a) ? xi(Jt(u), a) : function(B) {
          var h = fu(B, u);
          return h === e && h === a ? Ed(B, u) : $u(a, h, 3);
        };
      }
      function fi(u, a, B, h, U) {
        u !== a && oi(a, function(n, o) {
          var s, f, C, F, p, H, y, x, T, _, G, V, X;
          U = U || new hA(), KA(n) ? (f = a, F = B, p = fi, H = h, y = U, G = Rr(s = u, C = o), V = Rr(f, C), (X = y.get(V)) || (X = H ? H(G, V, C + "", s, f, y) : e, (f = X === e) && (x = FA(V), T = !x && Bt(V), _ = !x && !T && wn(V), X = V, x || T || _ ? X = FA(G) ? G : Qe(G) ? Re(G) : T ? pi(V, !(f = !1)) : _ ? Gn(V, !(f = !1)) : [] : cr(V) || sr(V) ? sr(X = G) ? X = Ud(G) : KA(G) && !Be(G) || (X = ir(V)) : f = !1), f && (y.set(V, X), p(X, V, F, H, y), y.delete(V))), ht(s, C, X)) : (x = h ? h(Rr(u, o), n, o + "", u, a, U) : e, ht(u, o, x = x === e ? n : x));
        }, Ve);
      }
      function gi(u, a) {
        var B = u.length;
        if (B)
          return fn(a += a < 0 ? B : 0, B) ? u[a] : e;
      }
      function Wa(n, a, B) {
        a = a.length ? qA(a, function(s) {
          return FA(s) ? function(f) {
            return On(f, s.length === 1 ? s[0] : s);
          } : s;
        }) : [$e];
        var h = -1;
        a = qA(a, Ze(lA()));
        var U = Ja(n, function(s, f, C) {
          return { criteria: qA(a, function(F) {
            return F(s);
          }), index: ++h, value: s };
        }), n = function(s, f) {
          for (var C = B, F = -1, p = s.criteria, H = f.criteria, y = p.length, x = C.length; ++F < y; ) {
            var T, _ = kn(p[F], H[F]);
            if (_)
              return x <= F ? _ : (T = C[F], _ * (T == "desc" ? -1 : 1));
          }
          return s.index - f.index;
        }, o = U.length;
        for (U.sort(n); o--; )
          U[o] = U[o].value;
        return U;
      }
      function Ya(u, a, B) {
        for (var h = -1, U = a.length, n = {}; ++h < U; ) {
          var o = a[h], s = On(u, o);
          B(s, o) && Mr(n, Mn(o, u), s);
        }
        return n;
      }
      function wi(u, a, B, h) {
        var U = h ? _a : $r, n = -1, o = a.length, s = u;
        for (u === a && (a = Re(a)), B && (s = qA(u, Ze(B))); ++n < o; )
          for (var f = 0, C = a[n], F = B ? B(C) : C; -1 < (f = U(s, F, f, h)); )
            s !== u && Kr.call(s, f, 1), Kr.call(u, f, 1);
        return u;
      }
      function to(u, a) {
        for (var B = u ? a.length : 0, h = B - 1; B--; ) {
          var U, n = a[B];
          B != h && n === U || (fn(U = n) ? Kr.call(u, n, 1) : uo(u, n));
        }
      }
      function Qi(u, a) {
        return u + rn(qs() * (a - u + 1));
      }
      function Ci(u, a) {
        var B = "";
        if (!(!u || a < 1 || l < a))
          for (; a % 2 && (B += u), (a = rn(a / 2)) && (u += u), a; )
            ;
        return B;
      }
      function mA(u, a) {
        return Si(_i(u, a, $e), u + "");
      }
      function Za(u) {
        return on(gu(u));
      }
      function tc(u, a) {
        return u = gu(u), lo(u, an(a, 0, u.length));
      }
      function Mr(u, a, B, h) {
        if (KA(u))
          for (var U = -1, n = (a = Mn(a, u)).length, o = n - 1, s = u; s != null && ++U < n; ) {
            var f, C = Jt(a[U]), F = B;
            if (C === "__proto__" || C === "constructor" || C === "prototype")
              return u;
            uu(s, C, F = U != o && (f = s[C], (F = h ? h(f, C, s) : e) === e) ? KA(f) ? f : fn(a[U + 1]) ? [] : {} : F), s = s[C];
          }
        return u;
      }
      var hi = nr ? function(u, a) {
        return nr.set(u, a), u;
      } : $e, aA = Ju ? function(u, a) {
        return Ju(u, "toString", { configurable: !0, enumerable: !1, value: Id(a), writable: !0 });
      } : $e;
      function Yl(u) {
        return lo(gu(u));
      }
      function xt(u, a, B) {
        for (var h = -1, U = u.length, n = ((B = U < B ? U : B) < 0 && (B += U), U = B < (a = a < 0 ? U < -a ? 0 : U + a : a) ? 0 : B - a >>> 0, a >>>= 0, R(U)); ++h < U; )
          n[h] = u[h + a];
        return n;
      }
      function no(u, a) {
        var B;
        return it(u, function(h, U, n) {
          return !(B = a(h, U, n));
        }), !!B;
      }
      function ro(u, a, B) {
        var h = 0, U = u == null ? h : u.length;
        if (typeof a == "number" && a == a && U <= 2147483647) {
          for (; h < U; ) {
            var n = h + U >>> 1, o = u[n];
            o !== null && !lt(o) && (B ? o <= a : o < a) ? h = 1 + n : U = n;
          }
          return U;
        }
        return De(u, a, $e, B);
      }
      function De(u, a, B, h) {
        var U = 0, n = u == null ? 0 : u.length;
        if (n === 0)
          return 0;
        for (var o = (a = B(a)) != a, s = a === null, f = lt(a), C = a === e; U < n; ) {
          var F = rn((U + n) / 2), p = B(u[F]), H = p !== e, y = p === null, T = p == p, x = lt(p), T = o ? h || T : C ? T && (h || H) : s ? T && H && (h || !y) : f ? T && H && !y && (h || !x) : !y && !x && (h ? p <= a : p < a);
          T ? U = F + 1 : n = F;
        }
        return Le(n, 4294967294);
      }
      function nc(u, a) {
        for (var B = -1, h = u.length, U = 0, n = []; ++B < h; ) {
          var o, s = u[B], f = a ? a(s) : s;
          B && st(f, o) || (o = f, n[U++] = s === 0 ? 0 : s);
        }
        return n;
      }
      function pt(u) {
        return typeof u == "number" ? u : lt(u) ? w : +u;
      }
      function Et(u) {
        var a;
        return typeof u == "string" ? u : FA(u) ? qA(u, Et) + "" : lt(u) ? zs ? zs.call(u) : "" : (a = u + "") == "0" && 1 / u == -1 / 0 ? "-0" : a;
      }
      function Nt(u, a, B) {
        var h = -1, U = Po, n = u.length, o = !0, s = [], f = s;
        if (B)
          o = !1, U = ut;
        else if (200 <= n) {
          var C = a ? null : Zl(u);
          if (C)
            return zo(C);
          o = !1, U = Ir, f = new Oe();
        } else
          f = a ? [] : s;
        A:
          for (; ++h < n; ) {
            var p = u[h], F = a ? a(p) : p, p = B || p !== 0 ? p : 0;
            if (o && F == F) {
              for (var H = f.length; H--; )
                if (f[H] === F)
                  continue A;
              a && f.push(F), s.push(p);
            } else
              U(f, F, B) || (f !== s && f.push(F), s.push(p));
          }
        return s;
      }
      function uo(u, a) {
        return (u = uc(u, a = Mn(a, u))) == null || delete u[Jt(Dt(a))];
      }
      function ja(u, a, B, h) {
        return Mr(u, a, B(On(u, a)), h);
      }
      function oo(u, a, B, h) {
        for (var U = u.length, n = h ? U : -1; (h ? n-- : ++n < U) && a(u[n], n, u); )
          ;
        return B ? xt(u, h ? 0 : n, h ? n + 1 : U) : xt(u, h ? n + 1 : 0, h ? U : n);
      }
      function at(u, a) {
        var B = u;
        return tn(a, function(h, U) {
          return U.func.apply(U.thisArg, Kn([h], U.args));
        }, B = u instanceof E ? u.value() : B);
      }
      function sn(u, a, B) {
        var h = u.length;
        if (h < 2)
          return h ? Nt(u[0]) : [];
        for (var U = -1, n = R(h); ++U < h; )
          for (var o = u[U], s = -1; ++s < h; )
            s != U && (n[U] = Tr(n[U] || o, u[s], a, B));
        return Nt($A(n, 1), a, B);
      }
      function Fi(u, a, B) {
        for (var h = -1, U = u.length, n = a.length, o = {}; ++h < U; ) {
          var s = h < n ? a[h] : e;
          B(o, u[h], s);
        }
        return o;
      }
      function Ui(u) {
        return Qe(u) ? u : [];
      }
      function au(u) {
        return typeof u == "function" ? u : $e;
      }
      function Mn(u, a) {
        return FA(u) ? u : Ki(u, a) ? [u] : Oi(HA(u));
      }
      var Pi = mA;
      function cn(u, a, B) {
        var h = u.length;
        return B = B === e ? h : B, !a && h <= B ? u : xt(u, a, B);
      }
      var qa = Sn || function(u) {
        return Te.clearTimeout(u);
      };
      function pi(u, a) {
        return a ? u.slice() : (a = u.length, a = Pu ? Pu(a) : new u.constructor(a), u.copy(a), a);
      }
      function io(u) {
        var a = new u.constructor(u.byteLength);
        return new Vu(a).set(new Vu(u)), a;
      }
      function Gn(u, a) {
        return a = a ? io(u.buffer) : u.buffer, new u.constructor(a, u.byteOffset, u.length);
      }
      function kn(u, a) {
        if (u !== a) {
          var B = u !== e, h = u === null, U = u == u, n = lt(u), o = a !== e, s = a === null, f = a == a, C = lt(a);
          if (!s && !C && !n && a < u || n && o && f && !s && !C || h && o && f || !B && f || !U)
            return 1;
          if (!h && !n && !C && u < a || C && B && U && !h && !n || s && B && U || !o && U || !f)
            return -1;
        }
        return 0;
      }
      function za(u, a, B, h) {
        for (var U = -1, n = u.length, o = B.length, s = -1, f = a.length, C = ce(n - o, 0), F = R(f + C), p = !h; ++s < f; )
          F[s] = a[s];
        for (; ++U < o; )
          (p || U < n) && (F[B[U]] = u[U]);
        for (; C--; )
          F[s++] = u[U++];
        return F;
      }
      function $a(u, a, B, h) {
        for (var U = -1, n = u.length, o = -1, s = B.length, f = -1, C = a.length, F = ce(n - s, 0), p = R(F + C), H = !h; ++U < F; )
          p[U] = u[U];
        for (var y = U; ++f < C; )
          p[y + f] = a[f];
        for (; ++o < s; )
          (H || U < n) && (p[y + B[o]] = u[U++]);
        return p;
      }
      function Re(u, a) {
        var B = -1, h = u.length;
        for (a = a || R(h); ++B < h; )
          a[B] = u[B];
        return a;
      }
      function Vt(u, a, B, h) {
        for (var U = !B, n = (B = B || {}, -1), o = a.length; ++n < o; ) {
          var s = a[n], f = h ? h(B[s], u[s], s, B, u) : e;
          (U ? Rt : uu)(B, s, f = f === e ? u[s] : f);
        }
        return B;
      }
      function ao(u, a) {
        return function(B, h) {
          var U = FA(B) ? Vs : Wl, n = a ? a() : {};
          return U(B, u, lA(h, 2), n);
        };
      }
      function Gr(u) {
        return mA(function(a, B) {
          var h = -1, U = B.length, o = 1 < U ? B[U - 1] : e, n = 2 < U ? B[2] : e, o = 3 < u.length && typeof o == "function" ? (U--, o) : e;
          for (n && MA(B[0], B[1], n) && (o = U < 3 ? e : o, U = 1), a = J(a); ++h < U; ) {
            var s = B[h];
            s && u(a, s, h, o);
          }
          return a;
        });
      }
      function Ad(u, a) {
        return function(B, h) {
          if (B != null) {
            if (!ct(B))
              return u(B, h);
            for (var U = B.length, n = a ? U : -1, o = J(B); (a ? n-- : ++n < U) && h(o[n], n, o) !== !1; )
              ;
          }
          return B;
        };
      }
      function je(u) {
        return function(a, B, h) {
          for (var U = -1, n = J(a), o = h(a), s = o.length; s--; ) {
            var f = o[u ? s : ++U];
            if (B(n[f], f, n) === !1)
              break;
          }
          return a;
        };
      }
      function Pt(u) {
        return function(a) {
          var h = br(a = HA(a)) ? Ct(a) : e, B = h ? h[0] : a.charAt(0), h = h ? cn(h, 1).join("") : a.slice(1);
          return B[u]() + h;
        };
      }
      function Rn(u) {
        return function(a) {
          return tn(yc(Hd(a).replace(Rs, "")), u, "");
        };
      }
      function Bn(u) {
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
          var B = ru(u.prototype), h = u.apply(B, a);
          return KA(h) ? h : B;
        };
      }
      function rc(u, a, B) {
        var h = Bn(u);
        return function U() {
          for (var n = arguments.length, o = R(n), s = n, f = dt(U); s--; )
            o[s] = arguments[s];
          return f = n < 3 && o[0] !== f && o[n - 1] !== f ? [] : zn(o, f), (n -= f.length) < B ? Hi(u, a, Nn, U.placeholder, e, o, f, e, e, B - n) : rt(this && this !== Te && this instanceof U ? h : u, this, o);
        };
      }
      function ed(u) {
        return function(a, o, h) {
          var U, n = J(a), o = (ct(a) || (U = lA(o, 3), a = Ue(a), o = function(s) {
            return U(n[s], s, n);
          }), u(a, o, h));
          return -1 < o ? n[U ? a[o] : o] : e;
        };
      }
      function td(u) {
        return Me(function(a) {
          var B = a.length, h = B, U = bt.prototype.thru;
          for (u && a.reverse(); h--; ) {
            var n = a[h];
            if (typeof n != "function")
              throw new cA(r);
            U && !f && co(n) == "wrapper" && (f = new bt([], !0));
          }
          for (h = f ? h : B; ++h < B; )
            var o = co(n = a[h]), s = o == "wrapper" ? id(n) : e, f = s && Li(s[0]) && s[1] == 424 && !s[4].length && s[9] == 1 ? f[co(s[0])].apply(f, s[3]) : n.length == 1 && Li(n) ? f[o]() : f.thru(n);
          return function() {
            var C = arguments, F = C[0];
            if (f && C.length == 1 && FA(F))
              return f.plant(F).value();
            for (var p = 0, H = B ? a[p].apply(this, C) : F; ++p < B; )
              H = a[p].call(this, H);
            return H;
          };
        });
      }
      function Nn(u, a, B, h, U, n, o, s, f, C) {
        var F = a & c, p = 1 & a, H = 2 & a, y = 24 & a, x = 512 & a, T = H ? e : Bn(u);
        return function _() {
          for (var G, V, X, W = R(X = arguments.length), Y = X; Y--; )
            W[Y] = arguments[Y];
          return y && (V = function(rA, z) {
            for (var nA = rA.length, iA = 0; nA--; )
              rA[nA] === z && ++iA;
            return iA;
          }(W, G = dt(_))), h && (W = za(W, h, U, y)), n && (W = $a(W, n, o, y)), X -= V, y && X < C ? (V = zn(W, G), Hi(u, a, Nn, _.placeholder, B, W, V, s, f, C - X)) : (G = p ? B : this, V = H ? G[u] : u, X = W.length, s ? W = function(rA, z) {
            for (var nA = rA.length, iA = Le(z.length, nA), yA = Re(rA); iA--; ) {
              var ye = z[iA];
              rA[iA] = fn(ye, nA) ? yA[ye] : e;
            }
            return rA;
          }(W, s) : x && 1 < X && W.reverse(), F && f < X && (W.length = f), (V = this && this !== Te && this instanceof _ ? T || Bn(V) : V).apply(G, W));
        };
      }
      function du(u, a) {
        return function(B, h) {
          return B = B, U = u, n = a(h), o = {}, Ut(B, function(s, f, C) {
            U(o, n(s), f, C);
          }), o;
          var U, n, o;
        };
      }
      function Ei(u, a) {
        return function(B, h) {
          var U;
          if (B === e && h === e)
            return a;
          if (B !== e && (U = B), h !== e) {
            if (U === e)
              return h;
            h = (typeof B == "string" || typeof h == "string" ? (B = Et(B), Et) : (B = pt(B), pt))(h), U = u(B, h);
          }
          return U;
        };
      }
      function mi(u) {
        return Me(function(a) {
          return a = qA(a, Ze(lA())), mA(function(B) {
            var h = this;
            return u(a, function(U) {
              return rt(U, h, B);
            });
          });
        });
      }
      function so(u, a) {
        var B = (a = a === e ? " " : Et(a)).length;
        return B < 2 ? B ? Ci(a, u) : a : (B = Ci(a, tr(u / Gt(a))), br(a) ? cn(Ct(B), 0, u).join("") : B.slice(0, u));
      }
      function Di(u, a, B, h) {
        var U = 1 & a, n = Bn(u);
        return function o() {
          for (var s = -1, f = arguments.length, C = -1, F = h.length, p = R(F + f), H = this && this !== Te && this instanceof o ? n : u; ++C < F; )
            p[C] = h[C];
          for (; f--; )
            p[C++] = arguments[++s];
          return rt(H, U ? B : this, p);
        };
      }
      function nd(u) {
        return function(a, B, h) {
          h && typeof h != "number" && MA(a, B, h) && (B = h = e), a = Ce(a), B === e ? (B = a, a = 0) : B = Ce(B), h = h === e ? a < B ? 1 : -1 : Ce(h);
          for (var U = a, n = h, o = u, s = -1, f = ce(tr((B - U) / (n || 1)), 0), C = R(f); f--; )
            C[o ? f : ++s] = U, U += n;
          return C;
        };
      }
      function kr(u) {
        return function(a, B) {
          return typeof a == "string" && typeof B == "string" || (a = Tt(a), B = Tt(B)), u(a, B);
        };
      }
      function Hi(u, a, B, h, p, H, o, s, f, C) {
        var F = 8 & a, p = (4 & (a = (a | (F ? 32 : 64)) & ~(F ? 64 : 32)) || (a &= -4), [u, a, p, F ? H : e, F ? o : e, F ? e : H, F ? e : o, s, f, C]), H = B.apply(e, p);
        return Li(u) && dd(H, p), H.placeholder = h, sd(H, u, a);
      }
      function su(u) {
        var a = L[u];
        return function(B, h) {
          var U;
          return B = Tt(B), (h = h == null ? 0 : Le(QA(h), 292)) && Lr(B) ? (U = (HA(B) + "e").split("e"), +((U = (HA(a(U[0] + "e" + (+U[1] + h))) + "e").split("e"))[0] + "e" + (+U[1] - h))) : a(B);
        };
      }
      var Zl = xr && 1 / zo(new xr([, -0]))[1] == 1 / 0 ? function(u) {
        return new xr(u);
      } : Pe;
      function rd(u) {
        return function(a) {
          var B, h, U, n = He(a);
          return n == N ? qo(a) : n == Z ? (n = a, B = -1, h = Array(n.size), n.forEach(function(o) {
            h[++B] = [o, o];
          }), h) : qA(u(U = a), function(o) {
            return [o, U[o]];
          });
        };
      }
      function _t(u, a, B, h, U, n, o, s) {
        var f, C, F, p, H, y, x, T, _, G, V, X, W, Y = 2 & a;
        if (Y || typeof u == "function")
          return (f = h ? h.length : 0) || (a &= -97, h = U = e), o = o === e ? o : ce(QA(o), 0), s = s === e ? s : QA(s), f -= U ? U.length : 0, 64 & a && (F = h, p = U, h = U = e), C = Y ? e : id(u), F = [u, a, B, h, U, F, p, n, o, s], C && (p = C, o = (n = F)[1], y = p[1], T = (x = o | y) < 131, _ = y == c && o == 8 || y == c && o == 256 && n[7].length <= p[8] || y == 384 && p[7].length <= p[8] && o == 8, T || _) && (1 & y && (n[2] = p[2], x |= 1 & o ? 0 : 4), (T = p[3]) && (H = n[3], n[3] = H ? za(H, T, p[4]) : T, n[4] = H ? zn(n[3], d) : p[4]), (T = p[5]) && (H = n[5], n[5] = H ? $a(H, T, p[6]) : T, n[6] = H ? zn(n[5], d) : p[6]), (T = p[7]) && (n[7] = T), y & c && (n[8] = n[8] == null ? p[8] : Le(n[8], p[8])), n[9] == null && (n[9] = p[9]), n[0] = p[0], n[1] = x), u = F[0], a = F[1], B = F[2], h = F[3], U = F[4], !(s = F[9] = F[9] === e ? Y ? 0 : u.length : ce(F[9] - f, 0)) && 24 & a && (a &= -25), _ = a && a != 1 ? a == 8 || a == 16 ? rc(u, a, s) : a != 32 && a != 33 || U.length ? Nn.apply(e, F) : Di(u, a, B, h) : (V = B, X = 1 & a, W = Bn(G = u), function rA() {
            return (this && this !== Te && this instanceof rA ? W : G).apply(X ? V : this, arguments);
          }), sd((C ? hi : dd)(_, F), u, a);
        throw new cA(r);
      }
      function ud(u, a, B, h) {
        return u === e || st(u, CA[B]) && !EA.call(h, B) ? a : u;
      }
      function yi(u, a, B, h, U, n) {
        return KA(u) && KA(a) && (n.set(a, u), fi(u, a, e, yi, n), n.delete(a)), u;
      }
      function jl(u) {
        return cr(u) ? e : u;
      }
      function od(u, a, B, h, U, n) {
        var o = 1 & B, s = u.length, f = a.length;
        if (s != f && !(o && s < f))
          return !1;
        var f = n.get(u), C = n.get(a);
        if (f && C)
          return f == a && C == u;
        var F = -1, p = !0, H = 2 & B ? new Oe() : e;
        for (n.set(u, a), n.set(a, u); ++F < s; ) {
          var y, x = u[F], T = a[F];
          if ((y = h ? o ? h(T, x, F, a, u, n) : h(x, T, F, u, a, n) : y) !== e) {
            if (y)
              continue;
            p = !1;
            break;
          }
          if (H) {
            if (!Ru(a, function(_, G) {
              return !Ir(H, G) && (x === _ || U(x, _, B, h, n)) && H.push(G);
            })) {
              p = !1;
              break;
            }
          } else if (x !== T && !U(x, T, B, h, n)) {
            p = !1;
            break;
          }
        }
        return n.delete(u), n.delete(a), p;
      }
      function Me(u) {
        return Si(_i(u, e, Xt), u + "");
      }
      function Ii(u) {
        return Va(u, Ue, or);
      }
      function bi(u) {
        return Va(u, Ve, fA);
      }
      var id = nr ? function(u) {
        return nr.get(u);
      } : Pe;
      function co(u) {
        for (var a = u.name + "", B = un[a], h = EA.call(un, a) ? B.length : 0; h--; ) {
          var U = B[h], n = U.func;
          if (n == null || n == u)
            return U.name;
        }
        return a;
      }
      function dt(u) {
        return (EA.call(D, "placeholder") ? D : u).placeholder;
      }
      function lA() {
        var u = (u = D.iteratee || vd) === vd ? iu : u;
        return arguments.length ? u(arguments[0], arguments[1]) : u;
      }
      function cu(U, a) {
        var B, h, U = U.__data__;
        return ((h = typeof (B = a)) == "string" || h == "number" || h == "symbol" || h == "boolean" ? B !== "__proto__" : B === null) ? U[typeof a == "string" ? "string" : "hash"] : U.map;
      }
      function Bo(u) {
        for (var a = Ue(u), B = a.length; B--; ) {
          var h = a[B], U = u[h];
          a[B] = [h, U, Ne(U)];
        }
        return a;
      }
      function ln(u, a) {
        return a = a, u = (u = u) == null ? e : u[a], ci(u) ? u : e;
      }
      var or = eu ? function(u) {
        return u == null ? [] : (u = J(u), he(eu(u), function(a) {
          return Zs.call(u, a);
        }));
      } : Sd, fA = eu ? function(u) {
        for (var a = []; u; )
          Kn(a, or(u)), u = ti(u);
        return a;
      } : Sd, He = Ae;
      function vi(u, a, B) {
        for (var h = -1, U = (a = Mn(a, u)).length, n = !1; ++h < U; ) {
          var o = Jt(a[h]);
          if (!(n = u != null && B(u, o)))
            break;
          u = u[o];
        }
        return n || ++h != U ? n : !!(U = u == null ? 0 : u.length) && Yt(U) && fn(o, U) && (FA(u) || sr(u));
      }
      function ir(u) {
        return typeof u.constructor != "function" || mt(u) ? {} : ru(ti(u));
      }
      function ad(u) {
        return FA(u) || sr(u) || !!(Ga && u && u[Ga]);
      }
      function fn(u, a) {
        var B = typeof u;
        return !!(a = a ?? l) && (B == "number" || B != "symbol" && Os.test(u)) && -1 < u && u % 1 == 0 && u < a;
      }
      function MA(u, a, B) {
        var h;
        if (KA(B))
          return ((h = typeof a) == "number" ? ct(B) && fn(a, B.length) : h == "string" && a in B) && st(B[a], u);
      }
      function Ki(u, a) {
        var B;
        if (!FA(u))
          return (B = typeof u) == "number" || B == "symbol" || B == "boolean" || u == null || lt(u) || Hl.test(u) || !Dl.test(u) || a != null && u in J(a);
      }
      function Li(u) {
        var a = co(u), B = D[a];
        return typeof B == "function" && a in E.prototype && (u === B || (a = id(B)) && u === a[0]);
      }
      (ZA && He(new ZA(new ArrayBuffer(1))) != _A || Xu && He(new Xu()) != N || Wu && He(Wu.resolve()) != P || xr && He(new xr()) != Z || bA && He(new bA()) != JA) && (He = function(B) {
        var a = Ae(B), B = a == q ? B.constructor : e, B = B ? ar(B) : "";
        if (B)
          switch (B) {
            case tu:
              return _A;
            case vA:
              return N;
            case Yu:
              return P;
            case ui:
              return Z;
            case nu:
              return JA;
          }
        return a;
      });
      var ql = nn ? Be : Td;
      function mt(u) {
        var a = u && u.constructor;
        return u === (typeof a == "function" && a.prototype || CA);
      }
      function Ne(u) {
        return u == u && !KA(u);
      }
      function xi(u, a) {
        return function(B) {
          return B != null && B[u] === a && (a !== e || u in J(B));
        };
      }
      function _i(u, a, B) {
        return a = ce(a === e ? u.length - 1 : a, 0), function() {
          for (var h = arguments, U = -1, n = ce(h.length - a, 0), o = R(n); ++U < n; )
            o[U] = h[a + U];
          for (var U = -1, s = R(a + 1); ++U < a; )
            s[U] = h[U];
          return s[a] = B(o), rt(u, this, s);
        };
      }
      function uc(u, a) {
        return a.length < 2 ? u : On(u, xt(a, 0, -1));
      }
      function Rr(u, a) {
        if ((a !== "constructor" || typeof u[a] != "function") && a != "__proto__")
          return u[a];
      }
      var dd = Ti(hi), Bu = ni || function(u, a) {
        return Te.setTimeout(u, a);
      }, Si = Ti(aA);
      function sd(u, o, B) {
        var h, U, n, o = o + "";
        return Si(u, (U = (o = (o = u = o).match(Da)) ? o[1].split(vl) : [], n = B, wt(g, function(s) {
          var f = "_." + s[0];
          n & s[1] && !Po(U, f) && U.push(f);
        }), o = U.sort(), (B = o.length) ? (o[h = B - 1] = (1 < B ? "& " : "") + o[h], o = o.join(2 < B ? ", " : " "), u.replace(bl, `{
/* [wrapped with ` + o + `] */
`)) : u));
      }
      function Ti(u) {
        var a = 0, B = 0;
        return function() {
          var h = js(), U = 16 - (h - B);
          if (B = h, 0 < U) {
            if (800 <= ++a)
              return arguments[0];
          } else
            a = 0;
          return u.apply(e, arguments);
        };
      }
      function lo(u, a) {
        var B = -1, h = u.length, U = h - 1;
        for (a = a === e ? h : a; ++B < a; ) {
          var n = Qi(B, U), o = u[n];
          u[n] = u[B], u[B] = o;
        }
        return u.length = a, u;
      }
      Nr = (Sn = lu(Sn = function(u) {
        var a = [];
        return u.charCodeAt(0) === 46 && a.push(""), u.replace(yl, function(B, h, U, n) {
          a.push(U ? n.replace(Ll, "$1") : h || B);
        }), a;
      }, function(u) {
        return Nr.size === 500 && Nr.clear(), u;
      })).cache;
      var Nr, Oi = Sn;
      function Jt(u) {
        var a;
        return typeof u == "string" || lt(u) ? u : (a = u + "") == "0" && 1 / u == -1 / 0 ? "-0" : a;
      }
      function ar(u) {
        if (u != null) {
          try {
            return $o.call(u);
          } catch {
          }
          try {
            return u + "";
          } catch {
          }
        }
        return "";
      }
      function fo(u) {
        var a;
        return u instanceof E ? u.clone() : ((a = new bt(u.__wrapped__, u.__chain__)).__actions__ = Re(u.__actions__), a.__index__ = u.__index__, a.__values__ = u.__values__, a);
      }
      ZA = mA(function(u, a) {
        return Qe(u) ? Tr(u, $A(a, 1, Qe, !0)) : [];
      }), Wu = mA(function(u, a) {
        var B = Dt(a);
        return Qe(B) && (B = e), Qe(u) ? Tr(u, $A(a, 1, Qe, !0), lA(B, 2)) : [];
      }), bA = mA(function(u, a) {
        var B = Dt(a);
        return Qe(B) && (B = e), Qe(u) ? Tr(u, $A(a, 1, Qe, !0), e, B) : [];
      });
      function Mi(u, a, B) {
        var h = u == null ? 0 : u.length;
        return h ? ((B = B == null ? 0 : QA(B)) < 0 && (B = ce(h + B, 0)), zr(u, lA(a, 3), B)) : -1;
      }
      function cd(u, a, B) {
        var h, U = u == null ? 0 : u.length;
        return U ? (h = U - 1, B !== e && (h = QA(B), h = B < 0 ? ce(U + h, 0) : Le(h, U - 1)), zr(u, lA(a, 3), h, !0)) : -1;
      }
      function Xt(u) {
        return u != null && u.length ? $A(u, 1) : [];
      }
      function dr(u) {
        return u && u.length ? u[0] : e;
      }
      nn = mA(function(u) {
        var a = qA(u, Ui);
        return a.length && a[0] === u[0] ? di(a) : [];
      }), ni = mA(function(u) {
        var a = Dt(u), B = qA(u, Ui);
        return a === Dt(B) ? a = e : B.pop(), B.length && B[0] === u[0] ? di(B, lA(a, 2)) : [];
      }), aA = mA(function(u) {
        var a = Dt(u), B = qA(u, Ui);
        return (a = typeof a == "function" ? a : e) && B.pop(), B.length && B[0] === u[0] ? di(B, e, a) : [];
      });
      function Dt(u) {
        var a = u == null ? 0 : u.length;
        return a ? u[a - 1] : e;
      }
      Sn = mA(Bd);
      function Bd(u, a) {
        return u && u.length && a && a.length ? wi(u, a) : u;
      }
      var oc = Me(function(u, a) {
        var B = u == null ? 0 : u.length, h = Sr(u, a);
        return to(u, qA(a, function(U) {
          return fn(U, B) ? +U : U;
        }).sort(kn)), h;
      });
      function Gi(u) {
        return u == null ? u : Ee.call(u);
      }
      var ic = mA(function(u) {
        return Nt($A(u, 1, Qe, !0));
      }), St = mA(function(u) {
        var a = Dt(u);
        return Qe(a) && (a = e), Nt($A(u, 1, Qe, !0), lA(a, 2));
      }), ac = mA(function(u) {
        var a = typeof (a = Dt(u)) == "function" ? a : e;
        return Nt($A(u, 1, Qe, !0), e, a);
      });
      function ld(u) {
        var a;
        return u && u.length ? (a = 0, u = he(u, function(B) {
          return Qe(B) && (a = ce(B.length, a), 1);
        }), Wo(a, function(B) {
          return qA(u, Au(B));
        })) : [];
      }
      function ki(u, a) {
        return u && u.length ? (u = ld(u), a == null ? u : qA(u, function(B) {
          return rt(a, e, B);
        })) : [];
      }
      var zl = mA(function(u, a) {
        return Qe(u) ? Tr(u, a) : [];
      }), $l = mA(function(u) {
        return sn(he(u, Qe));
      }), Af = mA(function(u) {
        var a = Dt(u);
        return Qe(a) && (a = e), sn(he(u, Qe), lA(a, 2));
      }), fd = mA(function(u) {
        var a = typeof (a = Dt(u)) == "function" ? a : e;
        return sn(he(u, Qe), e, a);
      }), dc = mA(ld), ef = mA(function(u) {
        var a = u.length, a = typeof (a = 1 < a ? u[a - 1] : e) == "function" ? (u.pop(), a) : e;
        return ki(u, a);
      });
      function sc(u) {
        return u = D(u), u.__chain__ = !0, u;
      }
      function Ri(u, a) {
        return a(u);
      }
      var tf = Me(function(u) {
        function a(n) {
          return Sr(n, u);
        }
        var B = u.length, h = B ? u[0] : 0, U = this.__wrapped__;
        return !(1 < B || this.__actions__.length) && U instanceof E && fn(h) ? ((U = U.slice(h, +h + (B ? 1 : 0))).__actions__.push({ func: Ri, args: [a], thisArg: e }), new bt(U, this.__chain__).thru(function(n) {
          return B && !n.length && n.push(e), n;
        })) : this.thru(a);
      }), nf = ao(function(u, a, B) {
        EA.call(u, B) ? ++u[B] : Rt(u, B, 1);
      }), rf = ed(Mi), cc = ed(cd);
      function go(u, a) {
        return (FA(u) ? wt : it)(u, lA(a, 3));
      }
      function Bc(u, a) {
        return (FA(u) ? Ps : Ft)(u, lA(a, 3));
      }
      var uf = ao(function(u, a, B) {
        EA.call(u, B) ? u[B].push(a) : Rt(u, B, [a]);
      }), of = mA(function(u, a, B) {
        var h = -1, U = typeof a == "function", n = ct(u) ? R(u.length) : [];
        return it(u, function(o) {
          n[++h] = U ? rt(a, o, B) : me(o, a, B);
        }), n;
      }), af = ao(function(u, a, B) {
        Rt(u, B, a);
      });
      function wo(u, a) {
        return (FA(u) ? qA : Ja)(u, lA(a, 3));
      }
      var lc = ao(function(u, a, B) {
        u[B ? 0 : 1].push(a);
      }, function() {
        return [[], []];
      }), df = mA(function(u, a) {
        var B;
        return u == null ? [] : (1 < (B = a.length) && MA(u, a[0], a[1]) ? a = [] : 2 < B && MA(a[0], a[1], a[2]) && (a = [a[0]]), Wa(u, $A(a, 1), []));
      }), Ni = Vi || function() {
        return Te.Date.now();
      };
      function fc(u, a, B) {
        return a = B ? e : a, a = u && a == null ? u.length : a, _t(u, c, e, e, e, e, a);
      }
      function Qo(u, a) {
        var B;
        if (typeof a != "function")
          throw new cA(r);
        return u = QA(u), function() {
          return 0 < --u && (B = a.apply(this, arguments)), u <= 1 && (a = e), B;
        };
      }
      var gd = mA(function(u, a, B) {
        var h, U = 1;
        return B.length && (h = zn(B, dt(gd)), U |= 32), _t(u, U, a, B, h);
      }), gc = mA(function(u, a, B) {
        var h, U = 3;
        return B.length && (h = zn(B, dt(gc)), U |= 32), _t(a, U, u, B, h);
      });
      function Co(u, a, B) {
        var h, U, n, o, s, f, C = 0, F = !1, p = !1, H = !0;
        if (typeof u != "function")
          throw new cA(r);
        function y(V) {
          var X = h, W = U;
          return h = U = e, C = V, o = u.apply(W, X);
        }
        function x(V) {
          var X = V - f;
          return f === e || a <= X || X < 0 || p && n <= V - C;
        }
        function T() {
          var V, X = Ni();
          if (x(X))
            return _(X);
          s = Bu(T, (V = a - ((X = X) - f), p ? Le(V, n - (X - C)) : V));
        }
        function _(V) {
          return s = e, H && h ? y(V) : (h = U = e, o);
        }
        function G() {
          var V = Ni(), X = x(V);
          if (h = arguments, U = this, f = V, X) {
            if (s === e)
              return C = V = f, s = Bu(T, a), F ? y(V) : o;
            if (p)
              return qa(s), s = Bu(T, a), y(f);
          }
          return s === e && (s = Bu(T, a)), o;
        }
        return a = Tt(a) || 0, KA(B) && (F = !!B.leading, p = "maxWait" in B, n = p ? ce(Tt(B.maxWait) || 0, a) : n, H = "trailing" in B ? !!B.trailing : H), G.cancel = function() {
          s !== e && qa(s), C = 0, h = f = U = s = e;
        }, G.flush = function() {
          return s === e ? o : _(Ni());
        }, G;
      }
      var Vi = mA(function(u, a) {
        return dn(u, 1, a);
      }), wc = mA(function(u, a, B) {
        return dn(u, Tt(a) || 0, B);
      });
      function lu(u, a) {
        if (typeof u != "function" || a != null && typeof a != "function")
          throw new cA(r);
        function B() {
          var h = arguments, U = a ? a.apply(this, h) : h[0], n = B.cache;
          return n.has(U) ? n.get(U) : (h = u.apply(this, h), B.cache = n.set(U, h) || n, h);
        }
        return B.cache = new (lu.Cache || Kt)(), B;
      }
      function ho(u) {
        if (typeof u != "function")
          throw new cA(r);
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
      lu.Cache = Kt;
      var Pi = Pi(function(u, a) {
        var B = (a = a.length == 1 && FA(a[0]) ? qA(a[0], Ze(lA())) : qA($A(a, 1), Ze(lA()))).length;
        return mA(function(h) {
          for (var U = -1, n = Le(h.length, B); ++U < n; )
            h[U] = a[U].call(this, h[U]);
          return rt(u, this, h);
        });
      }), Fo = mA(function(u, a) {
        var B = zn(a, dt(Fo));
        return _t(u, 32, e, a, B);
      }), Qc = mA(function(u, a) {
        var B = zn(a, dt(Qc));
        return _t(u, 64, e, a, B);
      }), Ji = Me(function(u, a) {
        return _t(u, 256, e, e, e, a);
      });
      function st(u, a) {
        return u === a || u != u && a != a;
      }
      var wd = kr(zu), Qd = kr(function(u, a) {
        return a <= u;
      }), sr = si(function() {
        return arguments;
      }()) ? si : function(u) {
        return ee(u) && EA.call(u, "callee") && !Zs.call(u, "callee");
      }, FA = R.isArray, Wt = Zn ? Ze(Zn) : function(u) {
        return ee(u) && Ae(u) == we;
      };
      function ct(u) {
        return u != null && Yt(u.length) && !Be(u);
      }
      function Qe(u) {
        return ee(u) && ct(u);
      }
      var Bt = BA || Td, BA = jn ? Ze(jn) : function(u) {
        return ee(u) && Ae(u) == K;
      };
      function Cd(u) {
        var a;
        return !!ee(u) && ((a = Ae(u)) == I || a == "[object DOMException]" || typeof u.message == "string" && typeof u.name == "string" && !cr(u));
      }
      function Be(u) {
        return !!KA(u) && ((u = Ae(u)) == S || u == O || u == "[object AsyncFunction]" || u == "[object Proxy]");
      }
      function le(u) {
        return typeof u == "number" && u == QA(u);
      }
      function Yt(u) {
        return typeof u == "number" && -1 < u && u % 1 == 0 && u <= l;
      }
      function KA(u) {
        var a = typeof u;
        return u != null && (a == "object" || a == "function");
      }
      function ee(u) {
        return u != null && typeof u == "object";
      }
      var gn = Ka ? Ze(Ka) : function(u) {
        return ee(u) && He(u) == N;
      };
      function hd(u) {
        return typeof u == "number" || ee(u) && Ae(u) == oA;
      }
      function cr(u) {
        return !(!ee(u) || Ae(u) != q) && ((u = ti(u)) === null || typeof (u = EA.call(u, "constructor") && u.constructor) == "function" && u instanceof u && $o.call(u) == ei);
      }
      var jA = Vo ? Ze(Vo) : function(u) {
        return ee(u) && Ae(u) == wA;
      }, oe = Ye ? Ze(Ye) : function(u) {
        return ee(u) && He(u) == Z;
      };
      function Uo(u) {
        return typeof u == "string" || !FA(u) && ee(u) && Ae(u) == IA;
      }
      function lt(u) {
        return typeof u == "symbol" || ee(u) && Ae(u) == DA;
      }
      var wn = La ? Ze(La) : function(u) {
        return ee(u) && Yt(u.length) && !!YA[Ae(u)];
      }, Fd = kr(eo), Cc = kr(function(u, a) {
        return u <= a;
      });
      function po(u) {
        if (!u)
          return [];
        if (ct(u))
          return (Uo(u) ? Ct : Re)(u);
        if (Ar && u[Ar]) {
          for (var a, B = u[Ar](), h = []; !(a = B.next()).done; )
            h.push(a.value);
          return h;
        }
        var U = He(u);
        return (U == N ? qo : U == Z ? zo : gu)(u);
      }
      function Ce(u) {
        return u ? (u = Tt(u)) === 1 / 0 || u === -1 / 0 ? 17976931348623157e292 * (u < 0 ? -1 : 1) : u == u ? u : 0 : u === 0 ? u : 0;
      }
      function QA(a) {
        var a = Ce(a), B = a % 1;
        return a == a ? B ? a - B : a : 0;
      }
      function hc(u) {
        return u ? an(QA(u), 0, Q) : 0;
      }
      function Tt(u) {
        if (typeof u == "number")
          return u;
        if (lt(u))
          return w;
        if (typeof (u = KA(u) ? KA(a = typeof u.valueOf == "function" ? u.valueOf() : u) ? a + "" : a : u) != "string")
          return u === 0 ? u : +u;
        u = Yo(u);
        var a = Sl.test(u);
        return a || Ol.test(u) ? Pl(u.slice(2), a ? 2 : 8) : _l.test(u) ? w : +u;
      }
      function Ud(u) {
        return Vt(u, Ve(u));
      }
      function HA(u) {
        return u == null ? "" : Et(u);
      }
      var pA = Gr(function(u, a) {
        if (mt(a) || ct(a))
          Vt(a, Ue(a), u);
        else
          for (var B in a)
            EA.call(a, B) && uu(u, B, a[B]);
      }), pd = Gr(function(u, a) {
        Vt(a, Ve(a), u);
      }), qe = Gr(function(u, a, B, h) {
        Vt(a, Ve(a), u, h);
      }), Fc = Gr(function(u, a, B, h) {
        Vt(a, Ue(a), u, h);
      }), GA = Me(Sr), sf = mA(function(u, a) {
        u = J(u);
        var B = -1, h = a.length, U = 2 < h ? a[2] : e;
        for (U && MA(a[0], a[1], U) && (h = 1); ++B < h; )
          for (var n = a[B], o = Ve(n), s = -1, f = o.length; ++s < f; ) {
            var C = o[s], F = u[C];
            (F === e || st(F, CA[C]) && !EA.call(u, C)) && (u[C] = n[C]);
          }
        return u;
      }), Uc = mA(function(u) {
        return u.push(e, yi), rt(pc, e, u);
      });
      function fu(u, a, B) {
        return u = u == null ? e : On(u, a), u === e ? B : u;
      }
      function Ed(u, a) {
        return u != null && vi(u, a, Or);
      }
      var cf = du(function(u, a, B) {
        u[a = a != null && typeof a.toString != "function" ? _n.call(a) : a] = B;
      }, Id($e)), Bf = du(function(u, a, B) {
        a != null && typeof a.toString != "function" && (a = _n.call(a)), EA.call(u, a) ? u[a].push(B) : u[a] = [B];
      }, lA), lf = mA(me);
      function Ue(u) {
        return (ct(u) ? ur : Bi)(u);
      }
      function Ve(u) {
        return ct(u) ? ur(u, !0) : Ao(u);
      }
      var ff = Gr(function(u, a, B) {
        fi(u, a, B);
      }), pc = Gr(function(u, a, B, h) {
        fi(u, a, B, h);
      }), gf = Me(function(u, a) {
        var B = {};
        if (u != null)
          for (var h = !1, U = (a = qA(a, function(n) {
            return n = Mn(n, u), h = h || 1 < n.length, n;
          }), Vt(u, bi(u), B), h && (B = Lt(B, 7, jl)), a.length); U--; )
            uo(B, a[U]);
        return B;
      }), xe = Me(function(u, a) {
        return u == null ? {} : Ya(B = u, a, function(h, U) {
          return Ed(B, U);
        });
        var B;
      });
      function ze(u, a) {
        var B;
        return u == null ? {} : (B = qA(bi(u), function(h) {
          return [h];
        }), a = lA(a), Ya(u, B, function(h, U) {
          return a(h, U[0]);
        }));
      }
      var Ec = rd(Ue), md = rd(Ve);
      function gu(u) {
        return u == null ? [] : Zo(u, Ue(u));
      }
      var wf = Rn(function(u, a, B) {
        return a = a.toLowerCase(), u + (B ? Dd(a) : a);
      });
      function Dd(u) {
        return yd(HA(u).toLowerCase());
      }
      function Hd(u) {
        return (u = HA(u)) && u.replace(Ml, Qt).replace(Ns, "");
      }
      var mc = Rn(function(u, a, B) {
        return u + (B ? "-" : "") + a.toLowerCase();
      }), wu = Rn(function(u, a, B) {
        return u + (B ? " " : "") + a.toLowerCase();
      }), Qf = Pt("toLowerCase"), Dc = Rn(function(u, a, B) {
        return u + (B ? "_" : "") + a.toLowerCase();
      }), Hc = Rn(function(u, a, B) {
        return u + (B ? " " : "") + yd(a);
      }), Cf = Rn(function(u, a, B) {
        return u + (B ? " " : "") + a.toUpperCase();
      }), yd = Pt("toUpperCase");
      function yc(u, a, B) {
        return u = HA(u), (a = B ? e : a) === e ? (B = u, kl.test(B) ? u.match(No) || [] : u.match(Ha) || []) : u.match(a) || [];
      }
      var Ic = mA(function(u, a) {
        try {
          return rt(u, e, a);
        } catch (B) {
          return Cd(B) ? B : new dA(B);
        }
      }), hf = Me(function(u, a) {
        return wt(a, function(B) {
          B = Jt(B), Rt(u, B, gd(u[B], u));
        }), u;
      });
      function Id(u) {
        return function() {
          return u;
        };
      }
      var bd = td(), bc = td(!0);
      function $e(u) {
        return u;
      }
      function vd(u) {
        return iu(typeof u == "function" ? u : Lt(u, 1));
      }
      var Kd = mA(function(u, a) {
        return function(B) {
          return me(B, u, a);
        };
      }), Ff = mA(function(u, a) {
        return function(B) {
          return me(u, B, a);
        };
      });
      function Ld(u, a, B) {
        var h = Ue(a), U = Fe(a, h), n = (B != null || KA(a) && (U.length || !h.length) || (B = a, a = u, u = this, U = Fe(a, Ue(a))), !(KA(B) && "chain" in B && !B.chain)), o = Be(u);
        return wt(U, function(s) {
          var f = a[s];
          u[s] = f, o && (u.prototype[s] = function() {
            var C, F = this.__chain__;
            return n || F ? (((C = u(this.__wrapped__)).__actions__ = Re(this.__actions__)).push({ func: f, args: arguments, thisArg: u }), C.__chain__ = F, C) : f.apply(u, Kn([this.value()], arguments));
          });
        }), u;
      }
      function Pe() {
      }
      var xd = mi(qA), Uf = mi(xa), pf = mi(Ru);
      function Xi(u) {
        return Ki(u) ? Au(Jt(u)) : (a = u, function(B) {
          return On(B, a);
        });
        var a;
      }
      var _d = nd(), Ef = nd(!0);
      function Sd() {
        return [];
      }
      function Td() {
        return !1;
      }
      var vc = Ei(function(u, a) {
        return u + a;
      }, 0), mf = su("ceil"), Df = Ei(function(u, a) {
        return u / a;
      }, 1), Od = su("floor"), Eo, Hf = Ei(function(u, a) {
        return u * a;
      }, 1), yf = su("round"), If = Ei(function(u, a) {
        return u - a;
      }, 0);
      return D.after = function(u, a) {
        if (typeof a != "function")
          throw new cA(r);
        return u = QA(u), function() {
          if (--u < 1)
            return a.apply(this, arguments);
        };
      }, D.ary = fc, D.assign = pA, D.assignIn = pd, D.assignInWith = qe, D.assignWith = Fc, D.at = GA, D.before = Qo, D.bind = gd, D.bindAll = hf, D.bindKey = gc, D.castArray = function() {
        var u;
        return arguments.length ? FA(u = arguments[0]) ? u : [u] : [];
      }, D.chain = sc, D.chunk = function(u, a, B) {
        a = (B ? MA(u, a, B) : a === e) ? 1 : ce(QA(a), 0);
        var h = u == null ? 0 : u.length;
        if (!h || a < 1)
          return [];
        for (var U = 0, n = 0, o = R(tr(h / a)); U < h; )
          o[n++] = xt(u, U, U += a);
        return o;
      }, D.compact = function(u) {
        for (var a = -1, B = u == null ? 0 : u.length, h = 0, U = []; ++a < B; ) {
          var n = u[a];
          n && (U[h++] = n);
        }
        return U;
      }, D.concat = function() {
        var u = arguments.length;
        if (!u)
          return [];
        for (var a = R(u - 1), B = arguments[0], h = u; h--; )
          a[h - 1] = arguments[h];
        return Kn(FA(B) ? Re(B) : [B], $A(a, 1));
      }, D.cond = function(u) {
        var a = u == null ? 0 : u.length, B = lA();
        return u = a ? qA(u, function(h) {
          if (typeof h[1] != "function")
            throw new cA(r);
          return [B(h[0]), h[1]];
        }) : [], mA(function(h) {
          for (var U = -1; ++U < a; ) {
            var n = u[U];
            if (rt(n[0], this, h))
              return rt(n[1], this, h);
          }
        });
      }, D.conforms = function(u) {
        return a = Lt(u, 1), B = Ue(a), function(h) {
          return Na(h, a, B);
        };
        var a, B;
      }, D.constant = Id, D.countBy = nf, D.create = function(u, a) {
        return u = ru(u), a == null ? u : $s(u, a);
      }, D.curry = function u(a, B, h) {
        return a = _t(a, 8, e, e, e, e, e, B = h ? e : B), a.placeholder = u.placeholder, a;
      }, D.curryRight = function u(a, B, h) {
        return a = _t(a, 16, e, e, e, e, e, B = h ? e : B), a.placeholder = u.placeholder, a;
      }, D.debounce = Co, D.defaults = sf, D.defaultsDeep = Uc, D.defer = Vi, D.delay = wc, D.difference = ZA, D.differenceBy = Wu, D.differenceWith = bA, D.drop = function(u, a, B) {
        var h = u == null ? 0 : u.length;
        return h ? xt(u, (a = B || a === e ? 1 : QA(a)) < 0 ? 0 : a, h) : [];
      }, D.dropRight = function(u, a, B) {
        var h = u == null ? 0 : u.length;
        return h ? xt(u, 0, (a = h - (a = B || a === e ? 1 : QA(a))) < 0 ? 0 : a) : [];
      }, D.dropRightWhile = function(u, a) {
        return u && u.length ? oo(u, lA(a, 3), !0, !0) : [];
      }, D.dropWhile = function(u, a) {
        return u && u.length ? oo(u, lA(a, 3), !0) : [];
      }, D.fill = function(u, a, B, h) {
        if (!(f = u == null ? 0 : u.length))
          return [];
        B && typeof B != "number" && MA(u, a, B) && (B = 0, h = f);
        var U = u, n = a, o = B, s = h, f = U.length;
        for ((o = QA(o)) < 0 && (o = f < -o ? 0 : f + o), (s = s === e || f < s ? f : QA(s)) < 0 && (s += f), s = s < o ? 0 : hc(s); o < s; )
          U[o++] = n;
        return U;
      }, D.filter = function(u, a) {
        return (FA(u) ? he : ou)(u, lA(a, 3));
      }, D.flatMap = function(u, a) {
        return $A(wo(u, a), 1);
      }, D.flatMapDeep = function(u, a) {
        return $A(wo(u, a), 1 / 0);
      }, D.flatMapDepth = function(u, a, B) {
        return B = B === e ? 1 : QA(B), $A(wo(u, a), B);
      }, D.flatten = Xt, D.flattenDeep = function(u) {
        return u != null && u.length ? $A(u, 1 / 0) : [];
      }, D.flattenDepth = function(u, a) {
        return u != null && u.length ? $A(u, a = a === e ? 1 : QA(a)) : [];
      }, D.flip = function(u) {
        return _t(u, 512);
      }, D.flow = bd, D.flowRight = bc, D.fromPairs = function(u) {
        for (var a = -1, B = u == null ? 0 : u.length, h = {}; ++a < B; ) {
          var U = u[a];
          h[U[0]] = U[1];
        }
        return h;
      }, D.functions = function(u) {
        return u == null ? [] : Fe(u, Ue(u));
      }, D.functionsIn = function(u) {
        return u == null ? [] : Fe(u, Ve(u));
      }, D.groupBy = uf, D.initial = function(u) {
        return u != null && u.length ? xt(u, 0, -1) : [];
      }, D.intersection = nn, D.intersectionBy = ni, D.intersectionWith = aA, D.invert = cf, D.invertBy = Bf, D.invokeMap = of, D.iteratee = vd, D.keyBy = af, D.keys = Ue, D.keysIn = Ve, D.map = wo, D.mapKeys = function(u, a) {
        var B = {};
        return a = lA(a, 3), Ut(u, function(h, U, n) {
          Rt(B, a(h, U, n), h);
        }), B;
      }, D.mapValues = function(u, a) {
        var B = {};
        return a = lA(a, 3), Ut(u, function(h, U, n) {
          Rt(B, U, a(h, U, n));
        }), B;
      }, D.matches = function(u) {
        return Xa(Lt(u, 1));
      }, D.matchesProperty = function(u, a) {
        return li(u, Lt(a, 1));
      }, D.memoize = lu, D.merge = ff, D.mergeWith = pc, D.method = Kd, D.methodOf = Ff, D.mixin = Ld, D.negate = ho, D.nthArg = function(u) {
        return u = QA(u), mA(function(a) {
          return gi(a, u);
        });
      }, D.omit = gf, D.omitBy = function(u, a) {
        return ze(u, ho(lA(a)));
      }, D.once = function(u) {
        return Qo(2, u);
      }, D.orderBy = function(u, a, B, h) {
        return u == null ? [] : Wa(u, a = FA(a) ? a : a == null ? [] : [a], B = FA(B = h ? e : B) ? B : B == null ? [] : [B]);
      }, D.over = xd, D.overArgs = Pi, D.overEvery = Uf, D.overSome = pf, D.partial = Fo, D.partialRight = Qc, D.partition = lc, D.pick = xe, D.pickBy = ze, D.property = Xi, D.propertyOf = function(u) {
        return function(a) {
          return u == null ? e : On(u, a);
        };
      }, D.pull = Sn, D.pullAll = Bd, D.pullAllBy = function(u, a, B) {
        return u && u.length && a && a.length ? wi(u, a, lA(B, 2)) : u;
      }, D.pullAllWith = function(u, a, B) {
        return u && u.length && a && a.length ? wi(u, a, e, B) : u;
      }, D.pullAt = oc, D.range = _d, D.rangeRight = Ef, D.rearg = Ji, D.reject = function(u, a) {
        return (FA(u) ? he : ou)(u, ho(lA(a, 3)));
      }, D.remove = function(u, a) {
        var B = [];
        if (u && u.length) {
          var h = -1, U = [], n = u.length;
          for (a = lA(a, 3); ++h < n; ) {
            var o = u[h];
            a(o, h, u) && (B.push(o), U.push(h));
          }
          to(u, U);
        }
        return B;
      }, D.rest = function(u, a) {
        if (typeof u != "function")
          throw new cA(r);
        return mA(u, a = a === e ? a : QA(a));
      }, D.reverse = Gi, D.sampleSize = function(u, a, B) {
        return a = (B ? MA(u, a, B) : a === e) ? 1 : QA(a), (FA(u) ? Tn : tc)(u, a);
      }, D.set = function(u, a, B) {
        return u == null ? u : Mr(u, a, B);
      }, D.setWith = function(u, a, B, h) {
        return h = typeof h == "function" ? h : e, u == null ? u : Mr(u, a, B, h);
      }, D.shuffle = function(u) {
        return (FA(u) ? _r : Yl)(u);
      }, D.slice = function(u, a, B) {
        var h = u == null ? 0 : u.length;
        return h ? (B = B && typeof B != "number" && MA(u, a, B) ? (a = 0, h) : (a = a == null ? 0 : QA(a), B === e ? h : QA(B)), xt(u, a, B)) : [];
      }, D.sortBy = df, D.sortedUniq = function(u) {
        return u && u.length ? nc(u) : [];
      }, D.sortedUniqBy = function(u, a) {
        return u && u.length ? nc(u, lA(a, 2)) : [];
      }, D.split = function(u, a, B) {
        return B && typeof B != "number" && MA(u, a, B) && (a = B = e), (B = B === e ? Q : B >>> 0) ? (u = HA(u)) && (typeof a == "string" || a != null && !jA(a)) && !(a = Et(a)) && br(u) ? cn(Ct(u), 0, B) : u.split(a, B) : [];
      }, D.spread = function(u, a) {
        if (typeof u != "function")
          throw new cA(r);
        return a = a == null ? 0 : ce(QA(a), 0), mA(function(U) {
          var h = U[a], U = cn(U, 0, a);
          return h && Kn(U, h), rt(u, this, U);
        });
      }, D.tail = function(u) {
        var a = u == null ? 0 : u.length;
        return a ? xt(u, 1, a) : [];
      }, D.take = function(u, a, B) {
        return u && u.length ? xt(u, 0, (a = B || a === e ? 1 : QA(a)) < 0 ? 0 : a) : [];
      }, D.takeRight = function(u, a, B) {
        var h = u == null ? 0 : u.length;
        return h ? xt(u, (a = h - (a = B || a === e ? 1 : QA(a))) < 0 ? 0 : a, h) : [];
      }, D.takeRightWhile = function(u, a) {
        return u && u.length ? oo(u, lA(a, 3), !1, !0) : [];
      }, D.takeWhile = function(u, a) {
        return u && u.length ? oo(u, lA(a, 3)) : [];
      }, D.tap = function(u, a) {
        return a(u), u;
      }, D.throttle = function(u, a, B) {
        var h = !0, U = !0;
        if (typeof u != "function")
          throw new cA(r);
        return KA(B) && (h = "leading" in B ? !!B.leading : h, U = "trailing" in B ? !!B.trailing : U), Co(u, a, { leading: h, maxWait: a, trailing: U });
      }, D.thru = Ri, D.toArray = po, D.toPairs = Ec, D.toPairsIn = md, D.toPath = function(u) {
        return FA(u) ? qA(u, Jt) : lt(u) ? [u] : Re(Oi(HA(u)));
      }, D.toPlainObject = Ud, D.transform = function(u, a, B) {
        var h, U = FA(u), n = U || Bt(u) || wn(u);
        return a = lA(a, 4), B == null && (h = u && u.constructor, B = n ? U ? new h() : [] : KA(u) && Be(h) ? ru(ti(u)) : {}), (n ? wt : Ut)(u, function(o, s, f) {
          return a(B, o, s, f);
        }), B;
      }, D.unary = function(u) {
        return fc(u, 1);
      }, D.union = ic, D.unionBy = St, D.unionWith = ac, D.uniq = function(u) {
        return u && u.length ? Nt(u) : [];
      }, D.uniqBy = function(u, a) {
        return u && u.length ? Nt(u, lA(a, 2)) : [];
      }, D.uniqWith = function(u, a) {
        return a = typeof a == "function" ? a : e, u && u.length ? Nt(u, e, a) : [];
      }, D.unset = function(u, a) {
        return u == null || uo(u, a);
      }, D.unzip = ld, D.unzipWith = ki, D.update = function(u, a, B) {
        return u == null ? u : ja(u, a, au(B));
      }, D.updateWith = function(u, a, B, h) {
        return h = typeof h == "function" ? h : e, u == null ? u : ja(u, a, au(B), h);
      }, D.values = gu, D.valuesIn = function(u) {
        return u == null ? [] : Zo(u, Ve(u));
      }, D.without = zl, D.words = yc, D.wrap = function(u, a) {
        return Fo(au(a), u);
      }, D.xor = $l, D.xorBy = Af, D.xorWith = fd, D.zip = dc, D.zipObject = function(u, a) {
        return Fi(u || [], a || [], uu);
      }, D.zipObjectDeep = function(u, a) {
        return Fi(u || [], a || [], Mr);
      }, D.zipWith = ef, D.entries = Ec, D.entriesIn = md, D.extend = pd, D.extendWith = qe, Ld(D, D), D.add = vc, D.attempt = Ic, D.camelCase = wf, D.capitalize = Dd, D.ceil = mf, D.clamp = function(u, a, B) {
        return B === e && (B = a, a = e), B !== e && (B = (B = Tt(B)) == B ? B : 0), a !== e && (a = (a = Tt(a)) == a ? a : 0), an(Tt(u), a, B);
      }, D.clone = function(u) {
        return Lt(u, 4);
      }, D.cloneDeep = function(u) {
        return Lt(u, 5);
      }, D.cloneDeepWith = function(u, a) {
        return Lt(u, 5, a = typeof a == "function" ? a : e);
      }, D.cloneWith = function(u, a) {
        return Lt(u, 4, a = typeof a == "function" ? a : e);
      }, D.conformsTo = function(u, a) {
        return a == null || Na(u, a, Ue(a));
      }, D.deburr = Hd, D.defaultTo = function(u, a) {
        return u == null || u != u ? a : u;
      }, D.divide = Df, D.endsWith = function(u, a, B) {
        u = HA(u), a = Et(a);
        var h = u.length, h = B = B === e ? h : an(QA(B), 0, h);
        return 0 <= (B -= a.length) && u.slice(B, h) == a;
      }, D.eq = st, D.escape = function(u) {
        return (u = HA(u)) && El.test(u) ? u.replace(Mo, Oa) : u;
      }, D.escapeRegExp = function(u) {
        return (u = HA(u)) && Ss.test(u) ? u.replace(Ea, "\\$&") : u;
      }, D.every = function(u, a, B) {
        return (FA(u) ? xa : Ac)(u, lA(a = B && MA(u, a, B) ? e : a, 3));
      }, D.find = rf, D.findIndex = Mi, D.findKey = function(u, a) {
        return Ln(u, lA(a, 3), Ut);
      }, D.findLast = cc, D.findLastIndex = cd, D.findLastKey = function(u, a) {
        return Ln(u, lA(a, 3), ii);
      }, D.floor = Od, D.forEach = go, D.forEachRight = Bc, D.forIn = function(u, a) {
        return u == null ? u : oi(u, lA(a, 3), Ve);
      }, D.forInRight = function(u, a) {
        return u == null ? u : ec(u, lA(a, 3), Ve);
      }, D.forOwn = function(u, a) {
        return u && Ut(u, lA(a, 3));
      }, D.forOwnRight = function(u, a) {
        return u && ii(u, lA(a, 3));
      }, D.get = fu, D.gt = wd, D.gte = Qd, D.has = function(u, a) {
        return u != null && vi(u, a, ai);
      }, D.hasIn = Ed, D.head = dr, D.identity = $e, D.includes = function(u, a, B, h) {
        return u = ct(u) ? u : gu(u), B = B && !h ? QA(B) : 0, h = u.length, B < 0 && (B = ce(h + B, 0)), Uo(u) ? B <= h && -1 < u.indexOf(a, B) : !!h && -1 < $r(u, a, B);
      }, D.indexOf = function(u, a, B) {
        var h = u == null ? 0 : u.length;
        return h ? $r(u, a, u = (u = B == null ? 0 : QA(B)) < 0 ? ce(h + u, 0) : u) : -1;
      }, D.inRange = function(u, a, B) {
        return a = Ce(a), B === e ? (B = a, a = 0) : B = Ce(B), (u = u = Tt(u)) >= Le(a = a, B = B) && u < ce(a, B);
      }, D.invoke = lf, D.isArguments = sr, D.isArray = FA, D.isArrayBuffer = Wt, D.isArrayLike = ct, D.isArrayLikeObject = Qe, D.isBoolean = function(u) {
        return u === !0 || u === !1 || ee(u) && Ae(u) == v;
      }, D.isBuffer = Bt, D.isDate = BA, D.isElement = function(u) {
        return ee(u) && u.nodeType === 1 && !cr(u);
      }, D.isEmpty = function(u) {
        if (u != null) {
          if (ct(u) && (FA(u) || typeof u == "string" || typeof u.splice == "function" || Bt(u) || wn(u) || sr(u)))
            return !u.length;
          var a, B = He(u);
          if (B == N || B == Z)
            return !u.size;
          if (mt(u))
            return !Bi(u).length;
          for (a in u)
            if (EA.call(u, a))
              return !1;
        }
        return !0;
      }, D.isEqual = function(u, a) {
        return $u(u, a);
      }, D.isEqualWith = function(u, a, B) {
        var h = (B = typeof B == "function" ? B : e) ? B(u, a) : e;
        return h === e ? $u(u, a, e, B) : !!h;
      }, D.isError = Cd, D.isFinite = function(u) {
        return typeof u == "number" && Lr(u);
      }, D.isFunction = Be, D.isInteger = le, D.isLength = Yt, D.isMap = gn, D.isMatch = function(u, a) {
        return u === a || Pa(u, a, Bo(a));
      }, D.isMatchWith = function(u, a, B) {
        return B = typeof B == "function" ? B : e, Pa(u, a, Bo(a), B);
      }, D.isNaN = function(u) {
        return hd(u) && u != +u;
      }, D.isNative = function(u) {
        if (ql(u))
          throw new dA("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
        return ci(u);
      }, D.isNil = function(u) {
        return u == null;
      }, D.isNull = function(u) {
        return u === null;
      }, D.isNumber = hd, D.isObject = KA, D.isObjectLike = ee, D.isPlainObject = cr, D.isRegExp = jA, D.isSafeInteger = function(u) {
        return le(u) && -l <= u && u <= l;
      }, D.isSet = oe, D.isString = Uo, D.isSymbol = lt, D.isTypedArray = wn, D.isUndefined = function(u) {
        return u === e;
      }, D.isWeakMap = function(u) {
        return ee(u) && He(u) == JA;
      }, D.isWeakSet = function(u) {
        return ee(u) && Ae(u) == "[object WeakSet]";
      }, D.join = function(u, a) {
        return u == null ? "" : ka.call(u, a);
      }, D.kebabCase = mc, D.last = Dt, D.lastIndexOf = function(u, a, B) {
        var h = u == null ? 0 : u.length;
        if (!h)
          return -1;
        var U = h;
        if (B !== e && (U = (U = QA(B)) < 0 ? ce(h + U, 0) : Le(U, h - 1)), a != a)
          return zr(u, Js, U, !0);
        for (var n = u, o = a, s = U + 1; s--; )
          if (n[s] === o)
            return s;
        return s;
      }, D.lowerCase = wu, D.lowerFirst = Qf, D.lt = Fd, D.lte = Cc, D.max = function(u) {
        return u && u.length ? qu(u, $e, zu) : e;
      }, D.maxBy = function(u, a) {
        return u && u.length ? qu(u, lA(a, 2), zu) : e;
      }, D.mean = function(u) {
        return Sa(u, $e);
      }, D.meanBy = function(u, a) {
        return Sa(u, lA(a, 2));
      }, D.min = function(u) {
        return u && u.length ? qu(u, $e, eo) : e;
      }, D.minBy = function(u, a) {
        return u && u.length ? qu(u, lA(a, 2), eo) : e;
      }, D.stubArray = Sd, D.stubFalse = Td, D.stubObject = function() {
        return {};
      }, D.stubString = function() {
        return "";
      }, D.stubTrue = function() {
        return !0;
      }, D.multiply = Hf, D.nth = function(u, a) {
        return u && u.length ? gi(u, QA(a)) : e;
      }, D.noConflict = function() {
        return Te._ === this && (Te._ = kA), this;
      }, D.noop = Pe, D.now = Ni, D.pad = function(u, a, B) {
        u = HA(u);
        var h = (a = QA(a)) ? Gt(u) : 0;
        return !a || a <= h ? u : so(rn(a = (a - h) / 2), B) + u + so(tr(a), B);
      }, D.padEnd = function(u, a, B) {
        u = HA(u);
        var h = (a = QA(a)) ? Gt(u) : 0;
        return a && h < a ? u + so(a - h, B) : u;
      }, D.padStart = function(u, a, B) {
        u = HA(u);
        var h = (a = QA(a)) ? Gt(u) : 0;
        return a && h < a ? so(a - h, B) + u : u;
      }, D.parseInt = function(u, a, B) {
        return a = B || a == null ? 0 : a && +a, Xl(HA(u).replace(ma, ""), a || 0);
      }, D.random = function(u, a, B) {
        var h;
        return B && typeof B != "boolean" && MA(u, a, B) && (a = B = e), B === e && (typeof a == "boolean" ? (B = a, a = e) : typeof u == "boolean" && (B = u, u = e)), u === e && a === e ? (u = 0, a = 1) : (u = Ce(u), a === e ? (a = u, u = 0) : a = Ce(a)), a < u && (h = u, u = a, a = h), B || u % 1 || a % 1 ? (h = qs(), Le(u + h * (a - u + Vl("1e-" + ((h + "").length - 1))), a)) : Qi(u, a);
      }, D.reduce = function(u, a, B) {
        var h = FA(u) ? tn : Xs, U = arguments.length < 3;
        return h(u, lA(a, 4), B, U, it);
      }, D.reduceRight = function(u, a, B) {
        var h = FA(u) ? Jo : Xs, U = arguments.length < 3;
        return h(u, lA(a, 4), B, U, Ft);
      }, D.repeat = function(u, a, B) {
        return a = (B ? MA(u, a, B) : a === e) ? 1 : QA(a), Ci(HA(u), a);
      }, D.replace = function() {
        var u = arguments, a = HA(u[0]);
        return u.length < 3 ? a : a.replace(u[1], u[2]);
      }, D.result = function(u, a, B) {
        var h = -1, U = (a = Mn(a, u)).length;
        for (U || (U = 1, u = e); ++h < U; ) {
          var n = u == null ? e : u[Jt(a[h])];
          n === e && (h = U, n = B), u = Be(n) ? n.call(u) : n;
        }
        return u;
      }, D.round = yf, D.runInContext = M, D.sample = function(u) {
        return (FA(u) ? on : Za)(u);
      }, D.size = function(u) {
        var a;
        return u == null ? 0 : ct(u) ? Uo(u) ? Gt(u) : u.length : (a = He(u)) == N || a == Z ? u.size : Bi(u).length;
      }, D.snakeCase = Dc, D.some = function(u, a, B) {
        return (FA(u) ? Ru : no)(u, lA(a = B && MA(u, a, B) ? e : a, 3));
      }, D.sortedIndex = function(u, a) {
        return ro(u, a);
      }, D.sortedIndexBy = function(u, a, B) {
        return De(u, a, lA(B, 2));
      }, D.sortedIndexOf = function(u, a) {
        var B = u == null ? 0 : u.length;
        if (B) {
          var h = ro(u, a);
          if (h < B && st(u[h], a))
            return h;
        }
        return -1;
      }, D.sortedLastIndex = function(u, a) {
        return ro(u, a, !0);
      }, D.sortedLastIndexBy = function(u, a, B) {
        return De(u, a, lA(B, 2), !0);
      }, D.sortedLastIndexOf = function(u, a) {
        if (u != null && u.length) {
          var B = ro(u, a, !0) - 1;
          if (st(u[B], a))
            return B;
        }
        return -1;
      }, D.startCase = Hc, D.startsWith = function(u, a, B) {
        return u = HA(u), B = B == null ? 0 : an(QA(B), 0, u.length), a = Et(a), u.slice(B, B + a.length) == a;
      }, D.subtract = If, D.sum = function(u) {
        return u && u.length ? Xo(u, $e) : 0;
      }, D.sumBy = function(u, a) {
        return u && u.length ? Xo(u, lA(a, 2)) : 0;
      }, D.template = function(u, a, F) {
        var h, U, f = D.templateSettings;
        F && MA(u, a, F) && (a = e), u = HA(u), a = qe({}, a, f, ud);
        var n = Ue(F = qe({}, a.imports, f.imports, ud)), o = Zo(F, n), s = 0, f = a.interpolate || Go, C = "__p += '", F = k((a.escape || Go).source + "|" + f.source + "|" + (f === pa ? xl : Go).source + "|" + (a.evaluate || Go).source + "|$", "g"), p = "//# sourceURL=" + (EA.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++va + "]") + `
`;
        if (u.replace(F, function(H, y, x, T, _, G) {
          return x = x || T, C += u.slice(s, G).replace(Gl, Nu), y && (h = !0, C += `' +
__e(` + y + `) +
'`), _ && (U = !0, C += `';
` + _ + `;
__p += '`), x && (C += `' +
((__t = (` + x + `)) == null ? '' : __t) +
'`), s = G + H.length, H;
        }), C += `';
`, f = EA.call(a, "variable") && a.variable) {
          if (Kl.test(f))
            throw new dA("Invalid `variable` option passed into `_.template`");
        } else
          C = `with (obj) {
` + C + `
}
`;
        if (C = (U ? C.replace(ha, "") : C).replace(Fa, "$1").replace(Ua, "$1;"), C = "function(" + (f || "obj") + `) {
` + (f ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (h ? ", __e = _.escape" : "") + (U ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + C + `return __p
}`, (F = Ic(function() {
          return gA(n, p + "return " + C).apply(e, o);
        })).source = C, Cd(F))
          throw F;
        return F;
      }, D.times = function(u, a) {
        if ((u = QA(u)) < 1 || l < u)
          return [];
        for (var B = Q, h = Le(u, Q), h = (a = lA(a), u -= Q, Wo(h, a)); ++B < u; )
          a(B);
        return h;
      }, D.toFinite = Ce, D.toInteger = QA, D.toLength = hc, D.toLower = function(u) {
        return HA(u).toLowerCase();
      }, D.toNumber = Tt, D.toSafeInteger = function(u) {
        return u ? an(QA(u), -l, l) : u === 0 ? u : 0;
      }, D.toString = HA, D.toUpper = function(u) {
        return HA(u).toUpperCase();
      }, D.trim = function(u, a, B) {
        return (u = HA(u)) && (B || a === e) ? Yo(u) : u && (a = Et(a)) ? cn(B = Ct(u), jo(B, a = Ct(a)), Ta(B, a) + 1).join("") : u;
      }, D.trimEnd = function(u, a, B) {
        return (u = HA(u)) && (B || a === e) ? u.slice(0, Ma(u) + 1) : u && (a = Et(a)) ? cn(B = Ct(u), 0, Ta(B, Ct(a)) + 1).join("") : u;
      }, D.trimStart = function(u, a, B) {
        return (u = HA(u)) && (B || a === e) ? u.replace(ma, "") : u && (a = Et(a)) ? cn(B = Ct(u), jo(B, Ct(a))).join("") : u;
      }, D.truncate = function(u, U) {
        var B, o = 30, h = "...", U = (KA(U) && (B = "separator" in U ? U.separator : B, o = "length" in U ? QA(U.length) : o, h = "omission" in U ? Et(U.omission) : h), (u = HA(u)).length);
        if ((U = br(u) ? (n = Ct(u)).length : U) <= o)
          return u;
        if ((U = o - Gt(h)) < 1)
          return h;
        var n, o = n ? cn(n, 0, U).join("") : u.slice(0, U);
        if (B !== e)
          if (n && (U += o.length - U), jA(B)) {
            if (u.slice(U).search(B)) {
              var s, f = o;
              for ((B = B.global ? B : k(B.source, HA(Ts.exec(B)) + "g")).lastIndex = 0; s = B.exec(f); )
                var C = s.index;
              o = o.slice(0, C === e ? U : C);
            }
          } else
            u.indexOf(Et(B), U) != U && -1 < (n = o.lastIndexOf(B)) && (o = o.slice(0, n));
        return o + h;
      }, D.unescape = function(u) {
        return (u = HA(u)) && pl.test(u) ? u.replace(Oo, $n) : u;
      }, D.uniqueId = function(u) {
        var a = ++Ai;
        return HA(u) + a;
      }, D.upperCase = Cf, D.upperFirst = yd, D.each = go, D.eachRight = Bc, D.first = dr, Ld(D, (Eo = {}, Ut(D, function(u, a) {
        EA.call(D.prototype, a) || (Eo[a] = u);
      }), Eo), { chain: !1 }), D.VERSION = "4.17.21", wt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(u) {
        D[u].placeholder = D;
      }), wt(["drop", "take"], function(u, a) {
        E.prototype[u] = function(B) {
          B = B === e ? 1 : ce(QA(B), 0);
          var h = this.__filtered__ && !a ? new E(this) : this.clone();
          return h.__filtered__ ? h.__takeCount__ = Le(B, h.__takeCount__) : h.__views__.push({ size: Le(B, Q), type: u + (h.__dir__ < 0 ? "Right" : "") }), h;
        }, E.prototype[u + "Right"] = function(B) {
          return this.reverse()[u](B).reverse();
        };
      }), wt(["filter", "map", "takeWhile"], function(u, a) {
        var B = a + 1, h = B == 1 || B == 3;
        E.prototype[u] = function(U) {
          var n = this.clone();
          return n.__iteratees__.push({ iteratee: lA(U, 3), type: B }), n.__filtered__ = n.__filtered__ || h, n;
        };
      }), wt(["head", "last"], function(u, a) {
        var B = "take" + (a ? "Right" : "");
        E.prototype[u] = function() {
          return this[B](1).value()[0];
        };
      }), wt(["initial", "tail"], function(u, a) {
        var B = "drop" + (a ? "" : "Right");
        E.prototype[u] = function() {
          return this.__filtered__ ? new E(this) : this[B](1);
        };
      }), E.prototype.compact = function() {
        return this.filter($e);
      }, E.prototype.find = function(u) {
        return this.filter(u).head();
      }, E.prototype.findLast = function(u) {
        return this.reverse().find(u);
      }, E.prototype.invokeMap = mA(function(u, a) {
        return typeof u == "function" ? new E(this) : this.map(function(B) {
          return me(B, u, a);
        });
      }), E.prototype.reject = function(u) {
        return this.filter(ho(lA(u)));
      }, E.prototype.slice = function(u, a) {
        u = QA(u);
        var B = this;
        return B.__filtered__ && (0 < u || a < 0) ? new E(B) : (u < 0 ? B = B.takeRight(-u) : u && (B = B.drop(u)), a !== e ? (a = QA(a)) < 0 ? B.dropRight(-a) : B.take(a - u) : B);
      }, E.prototype.takeRightWhile = function(u) {
        return this.reverse().takeWhile(u).reverse();
      }, E.prototype.toArray = function() {
        return this.take(Q);
      }, Ut(E.prototype, function(u, a) {
        var B = /^(?:filter|find|map|reject)|While$/.test(a), h = /^(?:head|last)$/.test(a), U = D[h ? "take" + (a == "last" ? "Right" : "") : a], n = h || /^find/.test(a);
        U && (D.prototype[a] = function() {
          function o(T) {
            return T = U.apply(D, Kn([T], C)), h && p ? T[0] : T;
          }
          var s, f = this.__wrapped__, C = h ? [1] : arguments, x = f instanceof E, H = C[0], F = x || FA(f), p = (F && B && typeof H == "function" && H.length != 1 && (x = F = !1), this.__chain__), H = !!this.__actions__.length, y = n && !p, x = x && !H;
          return !n && F ? (f = x ? f : new E(this), (s = u.apply(f, C)).__actions__.push({ func: Ri, args: [o], thisArg: e }), new bt(s, p)) : y && x ? u.apply(this, C) : (s = this.thru(o), y ? h ? s.value()[0] : s.value() : s);
        });
      }), wt(["pop", "push", "shift", "sort", "splice", "unshift"], function(u) {
        var a = UA[u], B = /^(?:push|sort|unshift)$/.test(u) ? "tap" : "thru", h = /^(?:pop|shift)$/.test(u);
        D.prototype[u] = function() {
          var U, n = arguments;
          return h && !this.__chain__ ? (U = this.value(), a.apply(FA(U) ? U : [], n)) : this[B](function(o) {
            return a.apply(FA(o) ? o : [], n);
          });
        };
      }), Ut(E.prototype, function(u, a) {
        var B, h = D[a];
        h && (B = h.name + "", EA.call(un, B) || (un[B] = []), un[B].push({ name: a, func: h }));
      }), un[Nn(e, 2).name] = [{ name: "wrapper", func: e }], E.prototype.clone = function() {
        var u = new E(this.__wrapped__);
        return u.__actions__ = Re(this.__actions__), u.__dir__ = this.__dir__, u.__filtered__ = this.__filtered__, u.__iteratees__ = Re(this.__iteratees__), u.__takeCount__ = this.__takeCount__, u.__views__ = Re(this.__views__), u;
      }, E.prototype.reverse = function() {
        var u;
        return this.__filtered__ ? ((u = new E(this)).__dir__ = -1, u.__filtered__ = !0) : (u = this.clone()).__dir__ *= -1, u;
      }, E.prototype.value = function() {
        var u = this.__wrapped__.value(), a = this.__dir__, B = FA(u), h = a < 0, U = B ? u.length : 0, n = function(V, X, W) {
          for (var Y = -1, rA = W.length; ++Y < rA; ) {
            var z = W[Y], nA = z.size;
            switch (z.type) {
              case "drop":
                V += nA;
                break;
              case "dropRight":
                X -= nA;
                break;
              case "take":
                X = Le(X, V + nA);
                break;
              case "takeRight":
                V = ce(V, X - nA);
            }
          }
          return { start: V, end: X };
        }(0, U, this.__views__), o = n.start, s = (n = n.end) - o, f = h ? n : o - 1, C = this.__iteratees__, F = C.length, p = 0, H = Le(s, this.__takeCount__);
        if (!B || !h && U == s && H == s)
          return at(u, this.__actions__);
        var y = [];
        A:
          for (; s-- && p < H; ) {
            for (var x = -1, T = u[f += a]; ++x < F; ) {
              var _ = C[x], G = _.iteratee, _ = _.type, G = G(T);
              if (_ == 2)
                T = G;
              else if (!G) {
                if (_ == 1)
                  continue A;
                break A;
              }
            }
            y[p++] = T;
          }
        return y;
      }, D.prototype.at = tf, D.prototype.chain = function() {
        return sc(this);
      }, D.prototype.commit = function() {
        return new bt(this.value(), this.__chain__);
      }, D.prototype.next = function() {
        this.__values__ === e && (this.__values__ = po(this.value()));
        var u = this.__index__ >= this.__values__.length;
        return { done: u, value: u ? e : this.__values__[this.__index__++] };
      }, D.prototype.plant = function(u) {
        for (var a, U = this; U instanceof rr; )
          var B = fo(U), h = (B.__index__ = 0, B.__values__ = e, a ? h.__wrapped__ = B : a = B, B), U = U.__wrapped__;
        return h.__wrapped__ = u, a;
      }, D.prototype.reverse = function() {
        var u = this.__wrapped__;
        return u instanceof E ? (u = u, (u = (u = this.__actions__.length ? new E(this) : u).reverse()).__actions__.push({ func: Ri, args: [Gi], thisArg: e }), new bt(u, this.__chain__)) : this.thru(Gi);
      }, D.prototype.toJSON = D.prototype.valueOf = D.prototype.value = function() {
        return at(this.__wrapped__, this.__actions__);
      }, D.prototype.first = D.prototype.head, Ar && (D.prototype[Ar] = function() {
        return this;
      }), D;
    }();
    Hr ? ((Hr.exports = xn)._ = xn, Dr._ = xn) : Te._ = xn;
  }).call(Gd);
}(Kf, Kf.exports), Kf.exports);
function D0(c, A) {
  var e, r, i, d = { "\\rightarrow": "->", "\\leftarrow": "<-", "\\rightleftarrow": "<=>", "\\leftrightarrow": "<->" }, c = c.split("\\limits^");
  return A === 2 ? (r = c[0], i = c[1].split("}_{")[0].slice(1), e = c[1].split("}_{")[1].slice(0, c[1].split("}_{")[1].length - 1), r === "=" ? `\\ce{\\xlongequal[{${e}}]{${e}}}` : `\\ce{${d[r]}[{${i}}][{${e}}]}`) : A === 3 ? (r = c[0], i = c[1].split("{")[1].split("}")[0], r === "=" ? `\\ce{\\xlongequal{${i}}}` : `\\ce{${d[r]}[{${i}}]}`) : "";
}
function nU(t) {
  return t.replace(/((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}_\{[^}]+\}/g, (A) => D0(A, 2)).replace(/((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}/g, (A) => D0(A, 3));
}
const H0 = { "@": "æ", "u\\.\\.\\(r\\)": "{ʊə}^{r}", "\\.\\.": "ə", oi: "ɔɪ", ai: "aɪ", ei: "eɪ", "e(?!:)": "e", "e:": "ɜː", "\\(r\\)": "^{r}", "(![pr|\\\\underl])i(?![:|me])": "ɪ", "i:": "iː", "o(?!:)": "ɒ", "o:": "ɔː", au: "aʊ", Ou: "əʊ", "(.*!(\\\\))u(?!:)": "ʊ", "u:": "uː", ":": "ː", N: "ŋ", tS: "tʃ", S: "ʃ", th: "θ", TH: "ð", dZ: "dʒ", Z: "ʒ", prime: "prime" };
function rU(t) {
  return t.replace(/\\\[\\phonetic\{.*?\}\\\]/g, (A) => {
    let e = A.split("\\phonetic").join("");
    for (let r in H0)
      e = e.replace(new RegExp(r, "g"), (i) => H0[r]);
    return e.replaceAll("\\^", "\\wedge");
  });
}
function uU(t) {
  return t.replace(/\\fourlineruled\{\d+\}/g, (A) => {
    var e = Number(A.split("}")[0].split("{")[1]);
    let r = "\\class{fourlineruled}{";
    for (let i = 0; i < e; i++)
      r += "\\begin{array}{l}\\hline\\text{ }\\\\\\hline\\text{ }\\\\\\hline\\text{ }\\\\\\hline\\end{array}";
    return r += "}";
  });
}
function y0(e, A = "romannumeral") {
  var e = Number(e.split(A + "{")[1].split("}")[0]) / 10, r = Math.floor(e), i = Number((e + "").split(".")[1]);
  let d = "";
  if (0 < r)
    for (let c = 0; c < r; c++)
      d += "x";
  if (i < 4)
    for (let c = 0; c < i; c++)
      d += "i";
  if (i === 4 && (d += "iv"), i === 5 && (d += "v"), 5 < i && i < 9) {
    d += "v";
    for (let c = 5; c < i; c++)
      d += "i";
  }
  return i === 9 && (d += "ix"), i === 10 && (d += "x"), d = A === "RomanNumeralCaps" ? (d = (d = d.replace(/i/g, "I")).replace(/v/g, "V")).replace(/x/g, "X") : d;
}
function oU(t) {
  return t.replace(/\\romannumeral\{\d+\}/g, (A) => `\\mathsf{${y0(A)}}`).replace(/\\RomanNumeralCaps\{\d+\}/g, (A) => `\\mathsf{${y0(A, "RomanNumeralCaps")}}`);
}
function iU(t) {
  const A = Array.from(t.matchAll(/[.,'"!\*\/\?、。;:]/g)), e = /\\style\{([\w-]+:[\w\d-]+;*)+\}/g, r = /((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}_\{[^}]+\}/g, i = /\\underline\{.*?\}/g, d = /\_\{.*?\}/g, c = /\^\{.*?\}/g, l = /\}[.,'"!\*\/\?、。;:]/g, w = /\\\[\\phonetic\{.*?\}\\\]/g, Q = /\\uwave\{.*?\}/g, g = /\\blank\{.+?\}\{\d+\/\d+\/(A|B|L)\}/g;
  return A.forEach((m, b) => {
    let v = !0;
    t.charAt(m.index - 1) === `
` && (v = !1), t.charAt(m.index + 1) !== "^" && t.charAt(m.index + 1) !== "_" || (v = !1);
    var q = Array.from(t.matchAll(e)).concat(Array.from(t.matchAll(r))), P = Array.from(t.matchAll(i)).map((Z) => [Z.index, Z.index + Z[0].length]), K = Array.from(t.matchAll(d)).map((Z) => [Z.index, Z.index + Z[0].length]), I = Array.from(t.matchAll(c)).map((Z) => [Z.index, Z.index + Z[0].length]), S = Array.from(t.matchAll(l)).map((Z) => [Z.index, Z.index + Z[0].length]), O = Array.from(t.matchAll(w)).map((Z) => [Z.index, Z.index + Z[0].length]), N = Array.from(t.matchAll(Q)).map((Z) => [Z.index, Z.index + Z[0].length]), oA = Array.from(t.matchAll(g)).map((Z) => [Z.index, Z.index + Z[0].length]), q = q.map((Z) => [Z.index, Z.index + Z[0].length]).concat(P).concat(K).concat(I).concat(S).concat(O).concat(N).concat(oA), P = ((b < A.length - 1 && m.index + 1 === A[b + 1].index || 1 < b && m.index - 1 === A[b - 1].index) && (v = !1), q.findIndex((Z) => m.index >= Z[0] && m.index <= Z[1]));
    if (v = -1 < P ? !1 : v) {
      var wA = m[0];
      let Z = `_\\class{mjx-kz-sub}{${wA}}`;
      ["'", '"'].includes(wA) && (Z = `^\\class{mjx-kz-sup}{${wA}}`), t = t.substring(0, m.index) + Z + t.substring(m.index + 1);
      for (let IA = b + 1; IA < A.length; IA++)
        A[IA].index += Z.length - wA.length;
    }
  }), t;
}
function aU(t) {
  return t.replace(/\'/g, "\\textasciiacute{}").replace(/\"/g, "\\textacutedbl{}").replace(/\“/g, "\\textquotedblleft{}").replace(/\”/g, "\\textquotedblright{}");
}
function dU(t) {
  return t.replace(/(\\hand(?![a-zA-Z]))|(\\mix)|(\\deletion)|(\\insert)|(\\wrong)|(\\chnfield)|(\\engfield)|(<s>)|(<\/s>)|(<unk>)/g, (A) => " ");
}
function sU(t) {
  return t.replace(/\\tab\{\d+\}/g, (A) => {
    var e = Number(A.split("\\tab{")[1].split("}")[0]);
    let r = "";
    for (let i = 0; i < e; i++)
      r += "\\;\\;";
    return r;
  }).replace(/\\tab(?!le)/g, "\\;\\;");
}
function cU(t) {
  return t.replace(/[^\S\r]+/g, "\\;\\;");
}
function BU(t) {
  return t.replace(/(\<)|(\\prime)|(\\alpha)|(\\Alpha)|(\\beta)|(\\Beta)|(\\gamma)|(\\Gamma)|(\\delta)|(\\Delta)|(\\epsilon)|(\\Epsilon)|(\\zeta)|(\\Zeta)|(\\eta)|(\\Eta)|(\\theta)|(\\Theta)|(\\iota)|(\\Iota)|(\\kappa)|(\\Kappa)|(\\lambda)|(\\Lambda)|(\\mu)|(\\Mu)|(\\nu)|(\\Nu)|(\\xi)|(\\Xi)|(\\omicron)|(\\Omicron)|(\\pi)|(\\Pi)|(\\rho)|(\\Rho)|(\\sigma)|(\\Sigma)|(\\tau)|(\\Tau)|(\\upsilon)|(\\Upsilon)|(\\phi)|(\\Phi)|(\\chi)|(\\Chi)|(\\psi)|(\\Psi)|(\\omega)|(\\Omega)|(\\pm(?!od))|(\\mp)|(\\times)|(\\div)|(\\mid)|(\\prod)|(\\sum(?!\_))|(\\approx(?!eq))|(\\leq)|(\\geq)|(\\neq(?!uiv))|(\\equiv)|(\\propto)|(\\napprox)|(\\nleq)|(\\ngeq)|(\\nequiv)|(\\angle)|(\\cong)|(\\sim)|(\\parallel(?!ogram)(?!equal))|(\\parallelogram)|(\\parallelequal)|(\\perp)|(\\nparallel)|(\\cdots)|(\\ddots)|(\\vdots)|(\\lor)|(\\land)|(\\lnot)|(\\forall)|(\\exists)|(\\top)|(\\bot)|(\\cup)|(\\cap)|(\\subset(?!(neq|eq)))|(\\supset(?!neq|eq))|(\\notin)|(\\ni)|(\\notni)|(\\emptyset)|(\\complement)|(\\subseteq)|(\\supseteq(?!eq))|(\\nsubset(?!eq))|(\\nsupset(?!eq))|(\\subsetneq)|(\\supsetneq)|(\\nsubseteq)|(\\nsupseteq)|(\\infty)|(\\partial)|(\\Re)|(\\lg)|(\\lim(?!its))|(\\ln)|(\\max)|(\\min)|(\\sin)|(\\cos)|(\\tan)|(\\sec)|(\\cot)|(\\csc)|(\\arcsin)|(\\arccos)|(\\arctan)|(\\arccot(?!angent))|(\\arcsec)|(\\arccsc)|(\\Leftarrow(?!\\limits))|(\\leftarrow(?!\\limits))|(\\Rightarrow(?!\\limits))|(\\rightarrow(?!\\limits))|(\\Uparrow)|(\\uparrow)|(\\Downarrow)|(\\downarrow)|(\\Leftrightarrow(?!\\limits))|(\\leftrightarrow(?!\\limits))|(\\Updownarrow)|(\\updownarrow)|(\\NEarrow)|(\\nearrow)|(\\NWarrow)|(\\nwarrow)|(\\SEarrow)|(\\searrow)|(\\SWarrow)|(\\swarrow)|(\\hookleftarrow)|(\\odot)|(\\ominus)|(\\oplus)|(\\otimes)|(\\oiiint)|(\\oiint)|(\\oint)|(\\diamond)|(\\square)|(\\rectangle)|(\\star)|(\\bigstar)|(\\triangle(?!down))|(\\triangledown)|(\\heart(?!suit))|(\\bullet)|(\\female)|(\\male)|(\\smiley)|(\\spadesuit)|(\\clubsuit)|(\\blackdiamond)|(\\blacksquare)|(\\blackrectangle)|(\\blackstar)|(\\blacktriangle(?!down))|(\\blacktriangledown)|(\\blackheart)|(\\textperthousand)|(\\textreferencemark)|(\\textregistered)|(\\textsection)|(\\texttrademark)|(\\cdot)|(\\because)|(\\therefore)|(\\chi)|(\\circledcirc)|(\\circ)|(\\xmark)|(\\cmark)|(\\in(?!(t|sert)))|(\\omitted)/g, (A) => A + "\\,");
}
function lU(t) {
  return t.replace(/\n\[/g, (A) => "\\\\\\[");
}
function fU(t) {
  return t.replace(/\*/g, "{*}").replace(/\n/g, "\\\\");
}
function gU(t) {
  return t.replace(/\\left\\{/g, (A) => "\\left\\{\\begin{array}{l}" + A.split("\\left\\{")[1]).replace(/\\right\\}/g, (A) => A.split("\\right\\}")[0] + "\\end{array}\\right.");
}
function wU(t) {
  return t.replace(/\\reverse\{.*?\}\{.*?\}/g, (A) => {
    var e = A.split("}{")[0].split("\\reverse{")[1];
    return "" + A.split("}{")[1].split("}")[0] + e;
  });
}
function QU(t) {
  return t.replace(/\\parallel(?!ogram)(?!equal)/g, (A) => `\\class{parallel}{${A}}`);
}
const I0 = { A: 2, B: 0, L: 1 };
function CU(t, A) {
  return t.replace(/\\blank\{.+?\}\{\d+\/\d+\/(A|B|L)\}/g, (e) => {
    var r = e.match(/\\blank\{/), r = ((r == null ? void 0 : r.index) || 0) + (r[(r == null ? void 0 : r.index) || 0].length || 0), d = e.match(/\{\d+\/\d+\/(A|B|L)\}/), i = (d == null ? void 0 : d.index) || 0, d = d[0].slice(1, d[0].length - 1).split("/"), c = ((c = (c = MathJax == null ? void 0 : MathJax.config) == null ? void 0 : c.tex) == null ? void 0 : c.formatError) || ((c = MathJax == null ? void 0 : MathJax.tex) == null ? void 0 : c.formatError);
    return d[0] === "0" ? (c("", new Error("blank sign questionSubIdx should startwith 1")), e) : d[1] === "0" ? (c("", new Error("blank sign blankIdx should startwith 1")), e) : (r = e.slice(r, i - 1)).includes("\\blank") ? (c("", new Error("blank sign don't support nest")), e) : (e = `\\class{kbs i_${(i = parseInt(d[0])) - 1}_${(c = parseInt(d[1])) - 1}_${I0[d[2]]}}{\\,}`, i = `\\class{kbe i_${i - 1}_${c - 1}_${I0[d[2]]}}{\\,}`, c = A == null ? void 0 : A.blankLight, d[2] === "A" ? e + (c ? "\\class{bk_lg_1}{" : "") + r + (c ? "}" : "") + i : e + (c ? "\\class{bk_lg_2}{" : "") + r + (c ? "}" : "") + i);
  });
}
function hU(t) {
  return t.replace(/\\underline\{.*?\}/g, (A) => {
    var e = A.split("\\underline{")[1];
    return e.split("}").length === 2 && 16 < e.split("}")[0].length ? "\\class{mjx-kz-underline}{{}" + e : A;
  });
}
function FU(t) {
  let A = 0;
  for (let e = 0; e < t.length; e++)
    /[^\x00-\xff]/.test(t.substr(e, 1)) || [",", ".", "'", " "].includes(t.substr(e, 1)) ? A += 2.2 : A += 1;
  return A;
}
function UU(t) {
  return t.replace(/\\uwave\{.*?\}/g, (e) => {
    var e = e.split("\\uwave{")[1].split("}")[0], r = [], i = Math.floor(FU(e));
    for (let d = 0; d < i; d++)
      r.push("\\thicksim");
    return `\\underset{\\class{wave}{${r.join("\\!")}}}{${e}}`;
  });
}
function pU(t) {
  return t.replace(/\\_(\{\d+\})/g, (A) => {
    let e = "";
    var r = Number(A.split("_{")[1].split("}")[0]);
    for (let i = 0; i < Number(r); i++)
      e += "\\_";
    return e;
  });
}
function EU(t, A) {
  return t.replace(/(\\_)+/g, (e) => {
    var r = e.split("\\").length - 1;
    return A.lineOuterMax && r <= A.lineOuterMax ? `{${e}}` : e;
  });
}
class mU {
  constructor(A, e) {
    this.content = A, this.options = e;
  }
  formatUnderline() {
    return this.content = hU(this.content), this;
  }
  formatDeleteBySign() {
    return this.content = dU(this.content), this;
  }
  formatMultipleTab() {
    return this.content = sU(this.content), this;
  }
  formatAloneSign() {
    return this.content = BU(this.content), this;
  }
  formatOrder() {
    return this.content = oU(this.content), this;
  }
  formatLimits() {
    return this.content = nU(this.content), this;
  }
  formatMiddleBrackets() {
    return this.content = lU(this.content), this;
  }
  formatLineBreak() {
    return this.content = fU(this.content), this;
  }
  formatSimultaneous() {
    return this.content = gU(this.content), this;
  }
  formatPhonetic() {
    return this.content = rU(this.content), this;
  }
  formatQuotes() {
    return this.content = aU(this.content), this;
  }
  formatUwave() {
    return this.content = UU(this.content), this;
  }
  formatReverse() {
    return this.content = wU(this.content), this;
  }
  formatMultipleLine() {
    return this.content = pU(this.content), this;
  }
  formatFourlineRuled() {
    return this.content = uU(this.content), this;
  }
  formatSpace() {
    return this.content = cU(this.content), this;
  }
  formatLineWapper() {
    return this.options && (this.content = EU(this.content, this.options)), this;
  }
  formatItParallel() {
    return this.content = QU(this.content), this;
  }
  formatBlankSign() {
    return this.content = CU(this.content, this.options), this;
  }
}
function DU(t, A) {
  return t = new mU(t, A), t.formatUnderline().formatDeleteBySign().formatMultipleTab().formatAloneSign().formatOrder().formatLimits().formatMiddleBrackets().formatLineBreak().formatSimultaneous().formatPhonetic().formatUwave().formatQuotes().formatReverse().formatMultipleLine().formatFourlineRuled().formatSpace().formatLineWapper().formatItParallel().formatBlankSign(), t.content;
}
const ae = "xregexp", Lo = { astral: !1, namespacing: !0 }, fr = {};
let kd = {}, oa = {};
const Hg = [], fa = "default", b0 = "class", HU = { default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/, class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/ }, yU = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g, IU = /()??/.exec("")[1] === void 0, bU = /x/.flags !== void 0;
function Ks(t) {
  let A = !0;
  try {
    new RegExp("", t), t === "y" && ".a".replace(new RegExp("a", "gy"), ".") === ".." && (A = !1);
  } catch {
    A = !1;
  }
  return A;
}
const vU = Ks("d"), s0 = Ks("s"), nC = Ks("u"), yg = Ks("y"), rC = { d: vU, g: !0, i: !0, m: !0, s: s0, u: nC, y: yg }, KU = s0 ? /[^dgimsuy]+/g : /[^dgimuy]+/g;
function uC(t, A, e, r, i) {
  if (t[ae] = { captureNames: A }, !i) {
    if (t.__proto__)
      t.__proto__ = $.prototype;
    else
      for (const d in $.prototype)
        t[d] = $.prototype[d];
    t[ae].source = e, t[ae].flags = r && r.split("").sort().join("");
  }
  return t;
}
function ms(t) {
  return t.replace(/([\s\S])(?=[\s\S]*\1)/g, "");
}
function Ko(t, A) {
  if (!$.isRegExp(t))
    throw new TypeError("Type RegExp expected");
  var e = t[ae] || {};
  let r = LU(t), i = "", d = "", c = null, l = null;
  return (A = A || {}).removeG && (d += "g"), A.removeY && (d += "y"), d && (r = r.replace(new RegExp(`[${d}]+`, "g"), "")), A.addG && (i += "g"), A.addY && (i += "y"), i && (r = ms(r + i)), A.isInternalOnly || (e.source !== void 0 && (c = e.source), e.flags != null && (l = i ? ms(e.flags + i) : e.flags)), t = uC(new RegExp(A.source || t.source, r), xU(t) ? e.captureNames.slice(0) : null, c, l, A.isInternalOnly);
}
function v0(t) {
  return parseInt(t, 16);
}
function K0(t, A, e) {
  var r = t.index + t[0].length, i = t.input[t.index - 1], d = t.input[r];
  return /^[()|]$/.test(i) || /^[()|]$/.test(d) || t.index === 0 || r === t.input.length || /\(\?(?:[:=!]|<[=!])$/.test(t.input.substring(t.index - 4, t.index)) || _U(t.input, r, e) ? "" : "(?:)";
}
function LU(t) {
  return bU ? t.flags : /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(t))[1];
}
function xU(t) {
  return !(!t[ae] || !t[ae].captureNames);
}
function Lf(t) {
  return parseInt(t, 10).toString(16);
}
function _U(t, A, e) {
  var r = "\\(\\?#[^)]*\\)", i = "[?*+]|{\\d+(?:,\\d*)?}";
  return (e.includes("x") ? new RegExp(`^(?:\\s|#[^#\\n]*|${r})*(?:${i})`) : new RegExp(`^(?:${r})*(?:${i})`)).test(t.slice(A));
}
function NB(t, A) {
  return Object.prototype.toString.call(t) === `[object ${A}]`;
}
function Wi(t) {
  if (t == null)
    throw new TypeError("Cannot convert null or undefined to object");
  return t;
}
function xf(t) {
  for (; t.length < 4; )
    t = "0" + t;
  return t;
}
function SU(t, A) {
  if (ms(A) !== A)
    throw new SyntaxError("Invalid duplicate regex flag " + A);
  t = t.replace(/^\(\?([\w$]+)\)/, (e, r) => {
    if (/[dgy]/.test(r))
      throw new SyntaxError("Cannot use flags dgy in mode modifier " + e);
    return A = ms(A + r), "";
  });
  for (const e of A)
    if (!rC[e])
      throw new SyntaxError("Unknown regex flag " + e);
  return { pattern: t, flags: A };
}
function L0(t) {
  const A = {};
  return NB(t, "String") ? ($.forEach(t, /[^\s,]+/, (e) => {
    A[e] = !0;
  }), A) : t;
}
function x0(t) {
  if (!/^[\w$]$/.test(t))
    throw new Error("Flag must be a single character A-Za-z0-9_$");
  rC[t] = !0;
}
function TU(t, A, e, r, i) {
  let d = Hg.length;
  var c, l, w = t[e];
  let Q = null;
  for (; d--; )
    if (!((l = Hg[d]).leadChar && l.leadChar !== w || l.scope !== r && l.scope !== "all" || l.flag && !A.includes(l.flag)) && (c = $.exec(t, l.regex, e, "sticky"))) {
      Q = { matchLength: c[0].length, output: l.handler.call(i, c, r, A), reparse: l.reparse };
      break;
    }
  return Q;
}
function _0(t) {
  Lo.astral = t;
}
function S0(t) {
  Lo.namespacing = t;
}
function $(t, A) {
  if ($.isRegExp(t)) {
    if (A !== void 0)
      throw new TypeError("Cannot supply flags when copying a RegExp");
    return Ko(t);
  }
  if (t = t === void 0 ? "" : String(t), A = A === void 0 ? "" : String(A), $.isInstalled("astral") && !A.includes("A") && (A += "A"), oa[t] || (oa[t] = {}), !oa[t][A]) {
    var e = { hasNamedCapture: !1, captureNames: [] };
    let c = fa, l = "", w = 0, Q;
    var r = SU(t, A);
    let g = r.pattern;
    for (var i, d = r.flags; w < g.length; ) {
      for (; (Q = TU(g, d, w, c, e)) && Q.reparse && (g = g.slice(0, w) + Q.output + g.slice(w + Q.matchLength)), Q && Q.reparse; )
        ;
      Q ? (l += Q.output, w += Q.matchLength || 1) : ([i] = $.exec(g, HU[c], w, "sticky"), l += i, w += i.length, i === "[" && c === fa ? c = b0 : i === "]" && c === b0 && (c = fa));
    }
    oa[t][A] = { pattern: l.replace(/(?:\(\?:\))+/g, "(?:)"), flags: d.replace(KU, ""), captures: e.hasNamedCapture ? e.captureNames : null };
  }
  return r = oa[t][A], uC(new RegExp(r.pattern, r.flags), r.captures, t, A);
}
$.prototype = new RegExp(), $.version = "5.1.1", $._clipDuplicates = ms, $._hasNativeFlag = Ks, $._dec = v0, $._hex = Lf, $._pad4 = xf, $.addToken = (t, A, e) => {
  let r = (e = e || {}).optionalFlags;
  if (e.flag && x0(e.flag), r)
    for (const i of r = r.split(""))
      x0(i);
  Hg.push({ regex: Ko(t, { addG: !0, addY: yg, isInternalOnly: !0 }), handler: A, scope: e.scope || fa, flag: e.flag, reparse: e.reparse, leadChar: e.leadChar }), $.cache.flush("patterns");
}, $.cache = (t, A) => (kd[t] || (kd[t] = {}), kd[t][A] || (kd[t][A] = $(t, A))), $.cache.flush = (t) => {
  t === "patterns" ? oa = {} : kd = {};
}, $.escape = (t) => String(Wi(t)).replace(/[\\\[\]{}()*+?.^$|]/g, "\\$&").replace(/[\s#\-,]/g, (A) => "\\u" + xf(Lf(A.charCodeAt(0)))), $.exec = (t, A, e, r) => {
  let i = "g", d = !1, c;
  (l = yg && !!(r || A.sticky && r !== !1)) ? i += "y" : r && (d = !0, i += "FakeY"), A[ae] = A[ae] || {};
  var l = A[ae][i] || (A[ae][i] = Ko(A, { addG: !0, addY: l, source: d ? A.source + "|()" : void 0, removeY: r === !1, isInternalOnly: !0 }));
  return l.lastIndex = e = e || 0, c = fr.exec.call(l, t), d && c && c.pop() === "" && (c = null), A.global && (A.lastIndex = c ? l.lastIndex : 0), c;
}, $.forEach = (t, A, e) => {
  let r = 0, i = -1;
  for (var d; d = $.exec(t, A, r); )
    e(d, ++i, t, A), r = d.index + (d[0].length || 1);
}, $.globalize = (t) => Ko(t, { addG: !0 }), $.install = (t) => {
  t = L0(t), !Lo.astral && t.astral && _0(!0), !Lo.namespacing && t.namespacing && S0(!0);
}, $.isInstalled = (t) => !!Lo[t], $.isRegExp = (t) => Object.prototype.toString.call(t) === "[object RegExp]", $.match = (d, A, e) => {
  var r = A.global && e !== "one" || e === "all", i = (r ? "g" : "") + (A.sticky ? "y" : "") || "noGY", i = (A[ae] = A[ae] || {}, A[ae][i] || (A[ae][i] = Ko(A, { addG: !!r, removeG: e === "one", isInternalOnly: !0 }))), d = String(Wi(d)).match(i);
  return A.global && (A.lastIndex = e === "one" && d ? d.index + d[0].length : 0), r ? d || [] : d && d[0];
}, $.matchChain = (t, A) => function e(r, i) {
  const d = A[i].regex ? A[i] : { regex: A[i] }, c = [];
  function l(w) {
    if (d.backref) {
      var Q = "Backreference to undefined group: " + d.backref, g = isNaN(d.backref);
      if (g && $.isInstalled("namespacing")) {
        if (!(w.groups && d.backref in w.groups))
          throw new ReferenceError(Q);
      } else if (!w.hasOwnProperty(d.backref))
        throw new ReferenceError(Q);
      Q = (g && $.isInstalled("namespacing") ? w.groups : w)[d.backref], c.push(Q || "");
    } else
      c.push(w[0]);
  }
  for (const w of r)
    $.forEach(w, d.regex, l);
  return i !== A.length - 1 && c.length ? e(c, i + 1) : c;
}([t], 0), $.replace = (t, A, e, r) => {
  var i = $.isRegExp(A), d = A.global && r !== "one" || r === "all", c = (d ? "g" : "") + (A.sticky ? "y" : "") || "noGY";
  let l = A;
  return i ? (A[ae] = A[ae] || {}, l = A[ae][c] || (A[ae][c] = Ko(A, { addG: !!d, removeG: r === "one", isInternalOnly: !0 }))) : d && (l = new RegExp($.escape(String(A)), "g")), c = fr.replace.call(Wi(t), l, e), i && A.global && (A.lastIndex = 0), c;
}, $.replaceEach = (t, A) => {
  for (const e of A)
    t = $.replace(t, e[0], e[1], e[2]);
  return t;
}, $.split = (t, A, e) => fr.split.call(Wi(t), A, e), $.test = (t, A, e, r) => !!$.exec(t, A, e, r), $.uninstall = (t) => {
  t = L0(t), Lo.astral && t.astral && _0(!1), Lo.namespacing && t.namespacing && S0(!1);
}, $.union = (t, A, e) => {
  e = (e = e || {}).conjunction || "or";
  let r = 0, i, d;
  function c(Q, g, m) {
    var b = d[r - i];
    if (g) {
      if (++r, b)
        return `(?<${b}>`;
    } else if (m)
      return "\\" + (+m + i);
    return Q;
  }
  if (!NB(t, "Array") || !t.length)
    throw new TypeError("Must provide a nonempty array of patterns to merge");
  var l = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, w = [];
  for (const Q of t)
    $.isRegExp(Q) ? (i = r, d = Q[ae] && Q[ae].captureNames || [], w.push($(Q.source).source.replace(l, c))) : w.push($.escape(Q));
  return $(w.join(e === "none" ? "" : "|"), A);
}, fr.exec = function(t) {
  var A, e = this.lastIndex;
  const r = RegExp.prototype.exec.apply(this, arguments);
  if (r) {
    if (!IU && 1 < r.length && r.includes("") && (A = Ko(this, { removeG: !0, isInternalOnly: !0 }), String(t).slice(r.index).replace(A, (...d) => {
      var c = d.length;
      for (let l = 1; l < c - 2; ++l)
        d[l] === void 0 && (r[l] = void 0);
    })), this[ae] && this[ae].captureNames) {
      let d = r;
      $.isInstalled("namespacing") && (r.groups = /* @__PURE__ */ Object.create(null), d = r.groups);
      for (let c = 1; c < r.length; ++c) {
        var i = this[ae].captureNames[c - 1];
        i && (d[i] = r[c]);
      }
    } else
      !r.groups && $.isInstalled("namespacing") && (r.groups = void 0);
    this.global && !r[0].length && this.lastIndex > r.index && (this.lastIndex = r.index);
  }
  return this.global || (this.lastIndex = e), r;
}, fr.test = function(t) {
  return !!fr.exec.call(this, t);
}, fr.match = function(t) {
  var A;
  if ($.isRegExp(t)) {
    if (t.global)
      return A = String.prototype.match.apply(this, arguments), t.lastIndex = 0, A;
  } else
    t = new RegExp(t);
  return fr.exec.call(t, Wi(this));
}, fr.replace = function(t, A) {
  var e = $.isRegExp(t);
  let r, i, d;
  return e ? (t[ae] && ({ captureNames: i } = t[ae]), r = t.lastIndex) : t += "", d = NB(A, "Function") ? String(this).replace(t, (...c) => {
    if (i) {
      let l;
      $.isInstalled("namespacing") ? (l = /* @__PURE__ */ Object.create(null), c.push(l)) : (c[0] = new String(c[0]), [l] = c);
      for (let w = 0; w < i.length; ++w)
        i[w] && (l[i[w]] = c[w + 1]);
    }
    return A(...c);
  }) : String(Wi(this)).replace(t, (...c) => String(A).replace(yU, function(l, w, Q, g) {
    if (w = w || Q, Q = NB(c[c.length - 1], "Object") ? 4 : 3, Q = c.length - Q, w) {
      if (/^\d+$/.test(w)) {
        var m = +w;
        if (m <= Q)
          return c[m] || "";
      }
      if (m = i ? i.indexOf(w) : -1, m < 0)
        throw new SyntaxError("Backreference to undefined group " + l);
      return c[m + 1] || "";
    }
    if (g === "" || g === " ")
      throw new SyntaxError("Invalid token " + l);
    if (g === "&" || +g == 0)
      return c[0];
    if (g === "$")
      return "$";
    if (g === "`")
      return c[c.length - 1].slice(0, c[c.length - 2]);
    if (g === "'")
      return c[c.length - 1].slice(c[c.length - 2] + c[0].length);
    if (g = +g, isNaN(g))
      throw new SyntaxError("Invalid token " + l);
    if (Q < g)
      throw new SyntaxError("Backreference to undefined group " + l);
    return c[g] || "";
  })), e && (t.global ? t.lastIndex = 0 : t.lastIndex = r), d;
}, fr.split = function(t, A) {
  if (!$.isRegExp(t))
    return String.prototype.split.apply(this, arguments);
  const e = String(this), r = [];
  var i = t.lastIndex;
  let d = 0, c;
  return A = (A === void 0 ? -1 : A) >>> 0, $.forEach(e, t, (l) => {
    l.index + l[0].length > d && (r.push(e.slice(d, l.index)), 1 < l.length && l.index < e.length && Array.prototype.push.apply(r, l.slice(1)), c = l[0].length, d = l.index + c);
  }), d === e.length ? t.test("") && !c || r.push("") : r.push(e.slice(d)), t.lastIndex = i, r.length > A ? r.slice(0, A) : r;
}, $.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, (t, A) => {
  if (t[1] === "B" && A === fa)
    return t[0];
  throw new SyntaxError("Invalid escape " + t[0]);
}, { scope: "all", leadChar: "\\" }), $.addToken(/\\u{([\dA-Fa-f]+)}/, (t, A, e) => {
  var r = v0(t[1]);
  if (1114111 < r)
    throw new SyntaxError("Invalid Unicode code point " + t[0]);
  if (r <= 65535)
    return "\\u" + xf(Lf(r));
  if (nC && e.includes("u"))
    return t[0];
  throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
}, { scope: "all", leadChar: "\\" }), $.addToken(/\(\?#[^)]*\)/, K0, { leadChar: "(" }), $.addToken(/\s+|#[^\n]*\n?/, K0, { flag: "x" }), s0 || $.addToken(/\./, () => "[\\s\\S]", { flag: "s", leadChar: "." }), $.addToken(/\\k<([^>]+)>/, function(t) {
  var A = isNaN(t[1]) ? this.captureNames.indexOf(t[1]) + 1 : +t[1], e = t.index + t[0].length;
  if (!A || A > this.captureNames.length)
    throw new SyntaxError("Backreference to undefined group " + t[0]);
  return "\\" + A + (e === t.input.length || isNaN(t.input[e]) ? "" : "(?:)");
}, { leadChar: "\\" }), $.addToken(/\\(\d+)/, function(t, A) {
  if (A === fa && /^[1-9]/.test(t[1]) && +t[1] <= this.captureNames.length || t[1] === "0")
    return t[0];
  throw new SyntaxError("Cannot use octal escape or backreference to undefined group " + t[0]);
}, { scope: "all", leadChar: "\\" }), $.addToken(/\(\?P?<((?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0898-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDEFD-\uDF1C\uDF27\uDF30-\uDF50\uDF70-\uDF85\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF42\uDF50-\uDF59\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC40-\uDC55]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDCD0-\uDCF9\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]|\uDB40[\uDD00-\uDDEF])*)>/, function(t) {
  if (!$.isInstalled("namespacing") && (t[1] === "length" || t[1] === "__proto__"))
    throw new SyntaxError("Cannot use reserved word as capture name " + t[0]);
  if (this.captureNames.includes(t[1]))
    throw new SyntaxError("Cannot use same name for multiple groups " + t[0]);
  return this.captureNames.push(t[1]), this.hasNamedCapture = !0, "(";
}, { leadChar: "(" }), $.addToken(/\((?!\?)/, function(t, A, e) {
  return e.includes("n") ? "(?:" : (this.captureNames.push(null), "(");
}, { optionalFlags: "n", leadChar: "(" });
var OU = (t) => {
  const A = "xregexp", e = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, r = t.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, e], "g", { conjunction: "or" });
  function i(w, Q) {
    return Q = Q ? "x" : "", t.isRegExp(w) ? w[A] && w[A].captureNames ? w : t(w.source, Q) : t(w, Q);
  }
  function d(w) {
    return w instanceof RegExp ? w : t.escape(w);
  }
  function c(w, Q, g) {
    return w["subpattern" + g] = Q, w;
  }
  function l(w, Q, g) {
    return w + (Q < g.length - 1 ? `{{subpattern${Q}}}` : "");
  }
  t.tag = (w) => (Q, ...g) => (g = g.map(d).reduce(c, {}), Q = Q.raw.map(l).join(""), t.build(Q, g, w)), t.build = (w, Q, g) => {
    var m, b, v, K, I = (g = g || "").includes("x"), S = /^\(\?([\w$]+)\)/.exec(w);
    S && (g = t._clipDuplicates(g + S[1]));
    const O = {};
    for (const Z in Q)
      Q.hasOwnProperty(Z) && (m = i(Q[Z], I), O[Z] = { pattern: (b = m.source, K = v = void 0, K = /\$(?:\(\?:\))*$/, (v = /^(?:\(\?:\))*\^/).test(b) && K.test(b) && K.test(b.replace(/\\[\s\S]/g, "")) ? b.replace(v, "").replace(K, "") : b), names: m[A].captureNames || [] });
    S = i(w, I);
    let N = 0, oA, q = 0;
    const P = [0], wA = S[A].captureNames || [];
    return w = S.source.replace(r, (Z, IA, DA, JA, we) => {
      const _A = IA || DA;
      let RA, We, de;
      if (_A) {
        if (!O.hasOwnProperty(_A))
          throw new ReferenceError("Undefined property " + Z);
        return We = IA ? (RA = wA[q], P[++q] = ++N, `(?<${RA || _A}>`) : "(?:", oA = N, DA = O[_A].pattern.replace(e, (ue, se, yn) => {
          if (se) {
            if (RA = O[_A].names[N - oA], ++N, RA)
              return `(?<${RA}>`;
          } else if (yn)
            return de = +yn - 1, O[_A].names[de] ? `\\k<${O[_A].names[de]}>` : "\\" + (+yn + oA);
          return ue;
        }), "" + We + DA + ")";
      }
      if (JA) {
        if (RA = wA[q], P[++q] = ++N, RA)
          return `(?<${RA}>`;
      } else if (we)
        return de = +we - 1, wA[de] ? `\\k<${wA[de]}>` : "\\" + P[+we];
      return Z;
    }), t(w, g);
  };
}, MU = (t) => {
  function A(e, r, i, d) {
    return { name: e, value: r, start: i, end: d };
  }
  t.matchRecursive = (e, r, i, d, c) => {
    c = c || {};
    var l = (d = d || "").includes("g"), w = d.includes("y"), Q = d.replace(/y/g, "");
    r = t(r, Q), i = t(i, Q);
    let g, m = c.escapeChar;
    if (m) {
      if (1 < m.length)
        throw new Error("Cannot use more than one escape character");
      m = t.escape(m), g = new RegExp(`(?:${m}[\\S\\s]|(?:(?!${t.union([r, i], "", { conjunction: "or" }).source})[^${m}])+)+`, d.replace(t._hasNativeFlag("s") ? /[^imsu]/g : /[^imu]/g, ""));
    }
    let b = 0, v = 0, K = 0, I = 0, S, O, N, oA;
    for (var q = c.valueNames, P = []; ; ) {
      if (m && (K += (t.exec(e, g, K, "sticky") || [""])[0].length), N = t.exec(e, r, K), oA = t.exec(e, i, K), N && oA && (N.index <= oA.index ? oA = null : N = null), N || oA)
        v = (N || oA).index, K = v + (N || oA)[0].length;
      else if (!b)
        break;
      if (w && !b && v > I)
        break;
      if (N)
        b || (S = v, O = K), b += 1;
      else if (oA && b) {
        if (!--b && (q ? (q[0] && S > I && P.push(A(q[0], e.slice(I, S), I, S)), q[1] && P.push(A(q[1], e.slice(S, O), S, O)), q[2] && P.push(A(q[2], e.slice(O, v), O, v)), q[3] && P.push(A(q[3], e.slice(v, K), v, K))) : P.push(e.slice(O, v)), I = K, !l))
          break;
      } else {
        var wA, Z, IA = c.unbalanced || "error";
        if (IA !== "skip" && IA !== "skip-lazy")
          throw IA === "error" ? (wA = oA ? "right" : "left", Z = oA ? v : S, new Error(`Unbalanced ${wA} delimiter found in string at position ` + Z)) : new Error("Unsupported value for unbalanced: " + IA);
        oA ? oA = null : (K = IA === "skip" ? (wA = t.exec(e, r, S, "sticky")[0].length, S + (wA || 1)) : S + 1, b = 0);
      }
      v === K && (K += 1);
    }
    return l && 0 < P.length && !w && q && q[0] && e.length > I && P.push(A(q[0], e.slice(I), I, e.length)), P;
  };
}, GU = (t) => {
  const A = {}, e = {}, r = t._dec, i = t._hex, d = t._pad4;
  function c(g) {
    return g.replace(/[- _]+/g, "").toLowerCase();
  }
  function l(g) {
    var m = /^\\[xu](.+)/.exec(g);
    return m ? r(m[1]) : g.charCodeAt(g[0] === "\\" ? 1 : 0);
  }
  function w(g) {
    return A[g]["b!"] || (A[g]["b!"] = function(m) {
      let b = "", v = -1;
      return t.forEach(m, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, (K) => {
        var I = l(K[1]);
        I > v + 1 && (b += "\\u" + d(i(v + 1)), I > v + 2) && (b += "-\\u" + d(i(I - 1))), v = l(K[2] || K[1]);
      }), v < 65535 && (b += "\\u" + d(i(v + 1)), v < 65534) && (b += "-\\uFFFF"), b;
    }(A[g].bmp));
  }
  function Q(g, m) {
    var b = m ? "a!" : "a=";
    return A[g][b] || (A[g][b] = function(v, K) {
      v = A[v];
      let I = "";
      return v.bmp && !v.isBmpLast && (I = `[${v.bmp}]` + (v.astral ? "|" : "")), v.astral && (I += v.astral), v.isBmpLast && v.bmp && (I += `${v.astral ? "|" : ""}[${v.bmp}]`), K ? `(?:(?!${I})(?:[�-�][�-�]|[\0-￿]))` : `(?:${I})`;
    }(g, m));
  }
  t.addToken(/\\([pP])(?:{(\^?)(?:(\w+)=)?([^}]*)}|([A-Za-z]))/, (K, m, b) => {
    var v = "Unknown Unicode token ", [K, I, S, O, N, oA] = K;
    let q = I === "P" || !!S;
    b = b.includes("A");
    let P = c(oA || N), wA = A[P];
    if (I === "P" && S)
      throw new SyntaxError("Invalid double negation " + K);
    if (!A.hasOwnProperty(P))
      throw new SyntaxError(v + K);
    if (O && (!e[O] || !e[O][P]))
      throw new SyntaxError(v + K);
    if (wA.inverseOf) {
      if (P = c(wA.inverseOf), !A.hasOwnProperty(P))
        throw new ReferenceError("Unicode token missing data " + K + " -> " + wA.inverseOf);
      wA = A[P], q = !q;
    }
    if (!wA.bmp && !b)
      throw new SyntaxError("Astral mode required for Unicode token " + K);
    if (b) {
      if (m === "class")
        throw new SyntaxError("Astral mode does not support Unicode tokens within character classes");
      return Q(P, q);
    }
    return m === "class" ? q ? w(P) : wA.bmp : (q ? "[^" : "[") + wA.bmp + "]";
  }, { scope: "all", optionalFlags: "A", leadChar: "\\" }), t.addUnicodeData = (g, m) => {
    m && (e[m] = {});
    for (const v of g) {
      if (!v.name)
        throw new Error("Unicode token requires name");
      if (!(v.inverseOf || v.bmp || v.astral))
        throw new Error("Unicode token has no character data " + v.name);
      var b = c(v.name);
      A[b] = v, m && (e[m][b] = !0), v.alias && (b = c(v.alias), A[b] = v, m) && (e[m][b] = !0);
    }
    t.cache.flush("patterns");
  }, t._getUnicodeProperty = (g) => (g = c(g), A[g]);
}, kU = [{ name: "C", alias: "Other", isBmpLast: !0, bmp: "\0--­͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-؅؜۝܎܏݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏-ࢗ࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿", astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCBD\uDCC3-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]" }, { name: "Cc", alias: "Control", bmp: "\0--" }, { name: "Cf", alias: "Format", bmp: "­؀-؅؜۝܏࢐࢑࣢᠎​-‏‪-‮⁠-⁤⁦-⁯\uFEFF￹-￻", astral: "\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]" }, { name: "Cn", alias: "Unassigned", bmp: "͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-׿܎݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏࢒-ࢗ঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿", astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCC3-\uDCCC\uDCCE\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F\uDC39-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]" }, { name: "Co", alias: "Private_Use", bmp: "-", astral: "[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]" }, { name: "Cs", alias: "Surrogate", bmp: "\uD800-\uDFFF" }, { name: "L", alias: "Letter", bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "LC", alias: "Cased_Letter", bmp: "A-Za-zµÀ-ÖØ-öø-ƺƼ-ƿǄ-ʓʕ-ʯͰ-ͳͶͷͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՠ-ֈႠ-ჅჇჍა-ჺჽ-ჿᎠ-Ᏽᏸ-ᏽᲀ-ᲈᲐ-ᲺᲽ-Ჿᴀ-ᴫᵫ-ᵷᵹ-ᶚḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⱻⱾ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭꙀ-ꙭꚀ-ꚛꜢ-ꝯꝱ-ꞇꞋ-ꞎꞐ-ꟊꟐꟑꟓꟕ-ꟙꟵꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚ", astral: "\uD801[\uDC00-\uDC4F\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD806[\uDCA0-\uDCDF]|\uD81B[\uDE40-\uDE7F]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD00-\uDD43]" }, { name: "Ll", alias: "Lowercase_Letter", bmp: "a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ", astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]" }, { name: "Lm", alias: "Modifier_Letter", bmp: "ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨࣉॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟲ-ꟴꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟꭩｰﾞﾟ", astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD838[\uDD37-\uDD3D]|𞥋" }, { name: "Lo", alias: "Other_Letter", bmp: "ªºƻǀ-ǃʔא-תׯ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣈऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳳᳵᳶᳺℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF4A\uDF50]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|𝼊|\uD838[\uDD00-\uDD2C\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Lt", alias: "Titlecase_Letter", bmp: "ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ" }, { name: "Lu", alias: "Uppercase_Letter", bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ", astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]" }, { name: "M", alias: "Mark", bmp: "̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣඁ-ඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-ᫎᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯", astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]" }, { name: "Mc", alias: "Spacing_Mark", bmp: "ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜ᜕᜴ាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡᳷〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦾ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬", astral: "\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD30-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]" }, { name: "Me", alias: "Enclosing_Mark", bmp: "҈҉᪾⃝-⃠⃢-⃤꙰-꙲" }, { name: "Mn", alias: "Nonspacing_Mark", bmp: "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣ৾ਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣૺ-૿ଁ଼ିୁ-ୄ୍୕ୖୢୣஂீ்ఀఄ఼ా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഀഁ഻഼ു-ൄ്ൢൣඁ්ි-ුූัิ-ฺ็-๎ັິ-ຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲᜳᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᪿ-ᫎᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꠬꣄ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꦽꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯", astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]" }, { name: "N", alias: "Number", bmp: "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９", astral: "\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]" }, { name: "Nd", alias: "Decimal_Number", bmp: "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９", astral: "\uD801[\uDCA0-\uDCA9]|\uD803[\uDD30-\uDD39]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9\uDD50-\uDD59]|\uD807[\uDC50-\uDC59\uDD50-\uDD59\uDDA0-\uDDA9]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDD50-\uDD59]|\uD83E[\uDFF0-\uDFF9]" }, { name: "Nl", alias: "Letter_Number", bmp: "ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ", astral: "\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]" }, { name: "No", alias: "Other_Number", bmp: "²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൘-൞൰-൸༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵", astral: "\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C\uDFC0-\uDFD4]|\uD81A[\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD83A[\uDCC7-\uDCCF]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]" }, { name: "P", alias: "Punctuation", bmp: "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹏⹒-⹝、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･", astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]" }, { name: "Pc", alias: "Connector_Punctuation", bmp: "_‿⁀⁔︳︴﹍-﹏＿" }, { name: "Pd", alias: "Dash_Punctuation", bmp: "\\-֊־᐀᠆‐-―⸗⸚⸺⸻⹀⹝〜〰゠︱︲﹘﹣－", astral: "𐺭" }, { name: "Pe", alias: "Close_Punctuation", bmp: "\\)\\]\\}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩⹖⹘⹚⹜〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣" }, { name: "Pf", alias: "Final_Punctuation", bmp: "»’”›⸃⸅⸊⸍⸝⸡" }, { name: "Pi", alias: "Initial_Punctuation", bmp: "«‘‛“‟‹⸂⸄⸉⸌⸜⸠" }, { name: "Po", alias: "Other_Punctuation", bmp: "!-#%-'\\*,\\.\\/:;\\?@\\¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁⹃-⹏⹒-⹔、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･", astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]" }, { name: "Ps", alias: "Open_Punctuation", bmp: "\\(\\[\\{༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂⹕⹗⹙⹛〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢" }, { name: "S", alias: "Symbol", bmp: "\\$\\+<->\\^`\\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶߾߿࢈৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-⃀℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛꭪꭫﬩﮲-﯂﵀-﵏﷏﷼-﷿﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�", astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]" }, { name: "Sc", alias: "Currency_Symbol", bmp: "\\$¢-¥֏؋߾߿৲৳৻૱௹฿៛₠-⃀꠸﷼﹩＄￠￡￥￦", astral: "\uD807[\uDFDD-\uDFE0]|𞋿|𞲰" }, { name: "Sk", alias: "Modifier_Symbol", bmp: "\\^`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅࢈᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛꭪꭫﮲-﯂＾｀￣", astral: "\uD83C[\uDFFB-\uDFFF]" }, { name: "Sm", alias: "Math_Symbol", bmp: "\\+<->\\|~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬", astral: "\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]" }, { name: "So", alias: "Other_Symbol", bmp: "¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൏൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﵀-﵏﷏﷽-﷿￤￨￭￮￼�", astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFDC\uDFE1-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|𞅏|\uD83B[\uDCAC\uDD2E]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]" }, { name: "Z", alias: "Separator", bmp: "    - \u2028\u2029  　" }, { name: "Zl", alias: "Line_Separator", bmp: "\u2028" }, { name: "Zp", alias: "Paragraph_Separator", bmp: "\u2029" }, { name: "Zs", alias: "Space_Separator", bmp: "    -   　" }], RU = (t) => {
  if (!t.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
  t.addUnicodeData(kU);
}, NU = [{ name: "ASCII", bmp: "\0-" }, { name: "Alphabetic", bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈְ-ׇֽֿׁׂׅׄא-תׯ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉࣔ-ࣣࣟ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱৼਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹ-ૼଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౝౠ-ౣಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೝೞೠ-ೣೱೲഀ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൔ-ൗൟ-ൣൺ-ൿඁ-ඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄຆ-ຊຌ-ຣລວ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ႏႚ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜓᜟ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡸᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᪿᫀᫌ-ᫎᬀ-ᬳᬵ-ᭃᭅ-ᭌᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰶᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠅꠇ-ꠧꡀ-ꡳꢀ-ꣃꣅꣲ-ꣷꣻꣽ-ꣿꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC71-\uDC75\uDC82-\uDCB8\uDCC2\uDCD0-\uDCE8\uDD00-\uDD32\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE\uDDCF\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDEB8\uDF00-\uDF1A\uDF1D-\uDF2A\uDF40-\uDF46]|\uD806[\uDC00-\uDC38\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD47\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Any", isBmpLast: !0, bmp: "\0-￿", astral: "[\uD800-\uDBFF][\uDC00-\uDFFF]" }, { name: "Default_Ignorable_Code_Point", bmp: "­͏؜ᅟᅠ឴឵᠋-᠏​-‏‪-‮⁠-⁯ㅤ︀-️\uFEFFﾠ￰-￸", astral: "\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB43][\uDC00-\uDFFF]" }, { name: "Lowercase", bmp: "a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟸ-ꟺꬰ-ꭚꭜ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ", astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDF80\uDF83-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]" }, { name: "Noncharacter_Code_Point", bmp: "﷐-﷯￾￿", astral: "[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]" }, { name: "Uppercase", bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ", astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]" }, { name: "White_Space", bmp: "	-\r    - \u2028\u2029  　" }], VU = (t) => {
  if (!t.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
  var A = NU;
  A.push({ name: "Assigned", inverseOf: "Cn" }), t.addUnicodeData(A);
}, PU = [{ name: "Adlam", astral: "\uD83A[\uDD00-\uDD4B\uDD50-\uDD59\uDD5E\uDD5F]" }, { name: "Ahom", astral: "\uD805[\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF46]" }, { name: "Anatolian_Hieroglyphs", astral: "\uD811[\uDC00-\uDE46]" }, { name: "Arabic", bmp: "؀-؄؆-؋؍-ؚ؜-؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࡰ-ࢎ࢐࢑࢘-ࣣ࣡-ࣿﭐ-﯂ﯓ-ﴽ﵀-ﶏﶒ-ﷇ﷏ﷰ-﷿ﹰ-ﹴﹶ-ﻼ", astral: "\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]" }, { name: "Armenian", bmp: "Ա-Ֆՙ-֊֍-֏ﬓ-ﬗ" }, { name: "Avestan", astral: "\uD802[\uDF00-\uDF35\uDF39-\uDF3F]" }, { name: "Balinese", bmp: "ᬀ-ᭌ᭐-᭾" }, { name: "Bamum", bmp: "ꚠ-꛷", astral: "\uD81A[\uDC00-\uDE38]" }, { name: "Bassa_Vah", astral: "\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]" }, { name: "Batak", bmp: "ᯀ-᯳᯼-᯿" }, { name: "Bengali", bmp: "ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৾" }, { name: "Bhaiksuki", astral: "\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C]" }, { name: "Bopomofo", bmp: "˪˫ㄅ-ㄯㆠ-ㆿ" }, { name: "Brahmi", astral: "\uD804[\uDC00-\uDC4D\uDC52-\uDC75\uDC7F]" }, { name: "Braille", bmp: "⠀-⣿" }, { name: "Buginese", bmp: "ᨀ-ᨛ᨞᨟" }, { name: "Buhid", bmp: "ᝀ-ᝓ" }, { name: "Canadian_Aboriginal", bmp: "᐀-ᙿᢰ-ᣵ", astral: "\uD806[\uDEB0-\uDEBF]" }, { name: "Carian", astral: "\uD800[\uDEA0-\uDED0]" }, { name: "Caucasian_Albanian", astral: "\uD801[\uDD30-\uDD63\uDD6F]" }, { name: "Chakma", astral: "\uD804[\uDD00-\uDD34\uDD36-\uDD47]" }, { name: "Cham", bmp: "ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟" }, { name: "Cherokee", bmp: "Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ" }, { name: "Chorasmian", astral: "\uD803[\uDFB0-\uDFCB]" }, { name: "Common", bmp: "\0-@\\[-`\\{-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·؅،؛؟ـ۝࣢।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵ-᳷ᳺ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-⃀℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮗-⯿⸀-⹝⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㋿㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛꭪꭫﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫\uFEFF！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�", astral: "\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9C\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD82F[\uDCA0-\uDCA3]|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDEE0-\uDEF3\uDF00-\uDF56\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD83B[\uDC71-\uDCB4\uDD01-\uDD3D]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDDAD\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA\uDFF0-\uDFF9]|\uDB40[\uDC01\uDC20-\uDC7F]" }, { name: "Coptic", bmp: "Ϣ-ϯⲀ-ⳳ⳹-⳿" }, { name: "Cuneiform", astral: "\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]" }, { name: "Cypriot", astral: "\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]" }, { name: "Cypro_Minoan", astral: "\uD80B[\uDF90-\uDFF2]" }, { name: "Cyrillic", bmp: "Ѐ-҄҇-ԯᲀ-ᲈᴫᵸⷠ-ⷿꙀ-ꚟ︮︯" }, { name: "Deseret", astral: "\uD801[\uDC00-\uDC4F]" }, { name: "Devanagari", bmp: "ऀ-ॐॕ-ॣ०-ॿ꣠-ꣿ" }, { name: "Dives_Akuru", astral: "\uD806[\uDD00-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD46\uDD50-\uDD59]" }, { name: "Dogra", astral: "\uD806[\uDC00-\uDC3B]" }, { name: "Duployan", astral: "\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]" }, { name: "Egyptian_Hieroglyphs", astral: "\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E\uDC30-\uDC38]" }, { name: "Elbasan", astral: "\uD801[\uDD00-\uDD27]" }, { name: "Elymaic", astral: "\uD803[\uDFE0-\uDFF6]" }, { name: "Ethiopic", bmp: "ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ", astral: "\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]" }, { name: "Georgian", bmp: "Ⴀ-ჅჇჍა-ჺჼ-ჿᲐ-ᲺᲽ-Ჿⴀ-ⴥⴧⴭ" }, { name: "Glagolitic", bmp: "Ⰰ-ⱟ", astral: "\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]" }, { name: "Gothic", astral: "\uD800[\uDF30-\uDF4A]" }, { name: "Grantha", astral: "\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]" }, { name: "Greek", bmp: "Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ", astral: "\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]" }, { name: "Gujarati", bmp: "ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ-૿" }, { name: "Gunjala_Gondi", astral: "\uD807[\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9]" }, { name: "Gurmukhi", bmp: "ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-੶" }, { name: "Han", bmp: "⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿿豈-舘並-龎", astral: "\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Hangul", bmp: "ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ" }, { name: "Hanifi_Rohingya", astral: "\uD803[\uDD00-\uDD27\uDD30-\uDD39]" }, { name: "Hanunoo", bmp: "ᜠ-᜴" }, { name: "Hatran", astral: "\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]" }, { name: "Hebrew", bmp: "֑-ׇא-תׯ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ" }, { name: "Hiragana", bmp: "ぁ-ゖゝ-ゟ", astral: "\uD82C[\uDC01-\uDD1F\uDD50-\uDD52]|🈀" }, { name: "Imperial_Aramaic", astral: "\uD802[\uDC40-\uDC55\uDC57-\uDC5F]" }, { name: "Inherited", bmp: "̀-ًͯ҅҆-ٰٕ॑-॔᪰-ᫎ᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭", astral: "\uD800[\uDDFD\uDEE0]|𑌻|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uDB40[\uDD00-\uDDEF]" }, { name: "Inscriptional_Pahlavi", astral: "\uD802[\uDF60-\uDF72\uDF78-\uDF7F]" }, { name: "Inscriptional_Parthian", astral: "\uD802[\uDF40-\uDF55\uDF58-\uDF5F]" }, { name: "Javanese", bmp: "ꦀ-꧍꧐-꧙꧞꧟" }, { name: "Kaithi", astral: "\uD804[\uDC80-\uDCC2\uDCCD]" }, { name: "Kannada", bmp: "ಀ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೝೞೠ-ೣ೦-೯ೱೲ" }, { name: "Katakana", bmp: "ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ", astral: "\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD64-\uDD67]" }, { name: "Kayah_Li", bmp: "꤀-꤭꤯" }, { name: "Kharoshthi", astral: "\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE50-\uDE58]" }, { name: "Khitan_Small_Script", astral: "𖿤|\uD822[\uDF00-\uDFFF]|\uD823[\uDC00-\uDCD5]" }, { name: "Khmer", bmp: "ក-៝០-៩៰-៹᧠-᧿" }, { name: "Khojki", astral: "\uD804[\uDE00-\uDE11\uDE13-\uDE3E]" }, { name: "Khudawadi", astral: "\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]" }, { name: "Lao", bmp: "ກຂຄຆ-ຊຌ-ຣລວ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ" }, { name: "Latin", bmp: "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꟿꬰ-ꭚꭜ-ꭤꭦ-ꭩﬀ-ﬆＡ-Ｚａ-ｚ", astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E]" }, { name: "Lepcha", bmp: "ᰀ-᰷᰻-᱉ᱍ-ᱏ" }, { name: "Limbu", bmp: "ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏" }, { name: "Linear_A", astral: "\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]" }, { name: "Linear_B", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]" }, { name: "Lisu", bmp: "ꓐ-꓿", astral: "𑾰" }, { name: "Lycian", astral: "\uD800[\uDE80-\uDE9C]" }, { name: "Lydian", astral: "\uD802[\uDD20-\uDD39\uDD3F]" }, { name: "Mahajani", astral: "\uD804[\uDD50-\uDD76]" }, { name: "Makasar", astral: "\uD807[\uDEE0-\uDEF8]" }, { name: "Malayalam", bmp: "ഀ-ഌഎ-ഐഒ-ൄെ-ൈൊ-൏ൔ-ൣ൦-ൿ" }, { name: "Mandaic", bmp: "ࡀ-࡛࡞" }, { name: "Manichaean", astral: "\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]" }, { name: "Marchen", astral: "\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]" }, { name: "Masaram_Gondi", astral: "\uD807[\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]" }, { name: "Medefaidrin", astral: "\uD81B[\uDE40-\uDE9A]" }, { name: "Meetei_Mayek", bmp: "ꫠ-꫶ꯀ-꯭꯰-꯹" }, { name: "Mende_Kikakui", astral: "\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]" }, { name: "Meroitic_Cursive", astral: "\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]" }, { name: "Meroitic_Hieroglyphs", astral: "\uD802[\uDD80-\uDD9F]" }, { name: "Miao", astral: "\uD81B[\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F]" }, { name: "Modi", astral: "\uD805[\uDE00-\uDE44\uDE50-\uDE59]" }, { name: "Mongolian", bmp: "᠀᠁᠄᠆-᠙ᠠ-ᡸᢀ-ᢪ", astral: "\uD805[\uDE60-\uDE6C]" }, { name: "Mro", astral: "\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]" }, { name: "Multani", astral: "\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]" }, { name: "Myanmar", bmp: "က-႟ꧠ-ꧾꩠ-ꩿ" }, { name: "Nabataean", astral: "\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]" }, { name: "Nandinagari", astral: "\uD806[\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE4]" }, { name: "New_Tai_Lue", bmp: "ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟" }, { name: "Newa", astral: "\uD805[\uDC00-\uDC5B\uDC5D-\uDC61]" }, { name: "Nko", bmp: "߀-ߺ߽-߿" }, { name: "Nushu", astral: "𖿡|\uD82C[\uDD70-\uDEFB]" }, { name: "Nyiakeng_Puachue_Hmong", astral: "\uD838[\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDD4F]" }, { name: "Ogham", bmp: " -᚜" }, { name: "Ol_Chiki", bmp: "᱐-᱿" }, { name: "Old_Hungarian", astral: "\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]" }, { name: "Old_Italic", astral: "\uD800[\uDF00-\uDF23\uDF2D-\uDF2F]" }, { name: "Old_North_Arabian", astral: "\uD802[\uDE80-\uDE9F]" }, { name: "Old_Permic", astral: "\uD800[\uDF50-\uDF7A]" }, { name: "Old_Persian", astral: "\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]" }, { name: "Old_Sogdian", astral: "\uD803[\uDF00-\uDF27]" }, { name: "Old_South_Arabian", astral: "\uD802[\uDE60-\uDE7F]" }, { name: "Old_Turkic", astral: "\uD803[\uDC00-\uDC48]" }, { name: "Old_Uyghur", astral: "\uD803[\uDF70-\uDF89]" }, { name: "Oriya", bmp: "ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍୕-ୗଡ଼ଢ଼ୟ-ୣ୦-୷" }, { name: "Osage", astral: "\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB]" }, { name: "Osmanya", astral: "\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]" }, { name: "Pahawh_Hmong", astral: "\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]" }, { name: "Palmyrene", astral: "\uD802[\uDC60-\uDC7F]" }, { name: "Pau_Cin_Hau", astral: "\uD806[\uDEC0-\uDEF8]" }, { name: "Phags_Pa", bmp: "ꡀ-꡷" }, { name: "Phoenician", astral: "\uD802[\uDD00-\uDD1B\uDD1F]" }, { name: "Psalter_Pahlavi", astral: "\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]" }, { name: "Rejang", bmp: "ꤰ-꥓꥟" }, { name: "Runic", bmp: "ᚠ-ᛪᛮ-ᛸ" }, { name: "Samaritan", bmp: "ࠀ-࠭࠰-࠾" }, { name: "Saurashtra", bmp: "ꢀ-ꣅ꣎-꣙" }, { name: "Sharada", astral: "\uD804[\uDD80-\uDDDF]" }, { name: "Shavian", astral: "\uD801[\uDC50-\uDC7F]" }, { name: "Siddham", astral: "\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]" }, { name: "SignWriting", astral: "\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]" }, { name: "Sinhala", bmp: "ඁ-ඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴", astral: "\uD804[\uDDE1-\uDDF4]" }, { name: "Sogdian", astral: "\uD803[\uDF30-\uDF59]" }, { name: "Sora_Sompeng", astral: "\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]" }, { name: "Soyombo", astral: "\uD806[\uDE50-\uDEA2]" }, { name: "Sundanese", bmp: "ᮀ-ᮿ᳀-᳇" }, { name: "Syloti_Nagri", bmp: "ꠀ-꠬" }, { name: "Syriac", bmp: "܀-܍܏-݊ݍ-ݏࡠ-ࡪ" }, { name: "Tagalog", bmp: "ᜀ-᜕ᜟ" }, { name: "Tagbanwa", bmp: "ᝠ-ᝬᝮ-ᝰᝲᝳ" }, { name: "Tai_Le", bmp: "ᥐ-ᥭᥰ-ᥴ" }, { name: "Tai_Tham", bmp: "ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭" }, { name: "Tai_Viet", bmp: "ꪀ-ꫂꫛ-꫟" }, { name: "Takri", astral: "\uD805[\uDE80-\uDEB9\uDEC0-\uDEC9]" }, { name: "Tamil", bmp: "ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺", astral: "\uD807[\uDFC0-\uDFF1\uDFFF]" }, { name: "Tangsa", astral: "\uD81A[\uDE70-\uDEBE\uDEC0-\uDEC9]" }, { name: "Tangut", astral: "𖿠|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEFF]|\uD823[\uDD00-\uDD08]" }, { name: "Telugu", bmp: "ఀ-ఌఎ-ఐఒ-నప-హ఼-ౄె-ైొ-్ౕౖౘ-ౚౝౠ-ౣ౦-౯౷-౿" }, { name: "Thaana", bmp: "ހ-ޱ" }, { name: "Thai", bmp: "ก-ฺเ-๛" }, { name: "Tibetan", bmp: "ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚" }, { name: "Tifinagh", bmp: "ⴰ-ⵧⵯ⵰⵿" }, { name: "Tirhuta", astral: "\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]" }, { name: "Toto", astral: "\uD838[\uDE90-\uDEAE]" }, { name: "Ugaritic", astral: "\uD800[\uDF80-\uDF9D\uDF9F]" }, { name: "Vai", bmp: "ꔀ-ꘫ" }, { name: "Vithkuqi", astral: "\uD801[\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]" }, { name: "Wancho", astral: "\uD838[\uDEC0-\uDEF9\uDEFF]" }, { name: "Warang_Citi", astral: "\uD806[\uDCA0-\uDCF2\uDCFF]" }, { name: "Yezidi", astral: "\uD803[\uDE80-\uDEA9\uDEAB-\uDEAD\uDEB0\uDEB1]" }, { name: "Yi", bmp: "ꀀ-ꒌ꒐-꓆" }, { name: "Zanabazar_Square", astral: "\uD806[\uDE00-\uDE47]" }], JU = (t) => {
  if (!t.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
  t.addUnicodeData(PU, "Script");
};
function T0(t, A) {
  return t.slice(A, A + 2) === "\\\\" ? "$$" : "$";
}
function O0(t, A, e, r) {
  const i = t.split("\\\\");
  if (i.length) {
    let d = r ? "<div></div>" : "";
    if (e)
      return A + "\\mathrm{" + i.join(`}${A}${d}${A}\\mathrm{`) + "}" + A;
    {
      let c = "";
      return i.length === 1 ? c += "" + A + i[0] + A : i.forEach((l, w) => {
        1 < l.length && (c += "" + A + l + A), 1 < i.length && w < i.length - 1 && (c += d);
      }), c;
    }
  }
  return e ? `\\mathrm{${t}}` : t;
}
function XU(t, A, e, r) {
  if (t.match(/\\left\\{/g) || t.match(/\\class{fourlineruled}/g))
    return { content: t, __isChineseDivide: r = !1 };
  const i = $.matchRecursive(t, "{", "}", "g", { valueNames: ["inner", "left", "between", "right"], unbalanced: "skip-lazy" }).map((Q) => {
    if (Q.name === "between")
      return [Q.start, Q.end];
  }).filter((Q) => Q);
  var w = Array.from(t.matchAll(/[\u4e00-\u9fa5]+/g));
  if (!w.length)
    return { content: t, __isChineseDivide: r = !1 };
  let d = "", c = 0;
  w.forEach((Q) => {
    var g, m;
    i.some((b) => Q.index >= b[0] && Q.index <= b[1]) || ((g = t.slice(c, Q.index)) && (m = T0(g, 0), d += "" + O0(g, m, A, e)), d += `<span>${Q[0]}</span>` || "", c = Q.index + Q[0].length);
  });
  var l, w = t.slice(c);
  return w && (l = T0(w, 0), d += "" + O0(w, l, A, e)), { content: d, __isChineseDivide: r };
}
function WU(t, A) {
  let e = 0;
  return t.replace(/(\\_)+/g, (r) => {
    var i, d = r.split("\\").length - 1;
    let c = "";
    var l = A && A.underlineClass && A.underlineClass.className && d >= A.underlineClass.min;
    for (let w = 0; w < Number(d); w++)
      c += `\\class{_u i_${e}${l ? " " + ((i = A == null ? void 0 : A.underlineClass) == null ? void 0 : i.className) : ""}}{\\_}`;
    return e++, c;
  });
}
function YU(t, A = tU.defaults({ wrapMathrm: !0, punctuation: !1, lineClass: !1, divideChinese: !1, lineBreak: !0, blankLight: !1 })) {
  if (!t)
    return "";
  t = DU(t = A.punctuation ? iU(t) : t, A), A.lineClass && (t = WU(t, A));
  let e = A.divideChinese;
  var r;
  return A.divideChinese && (t = (r = XU(t, A.wrapMathrm, A.lineBreak, e)).content, e = r.__isChineseDivide), "" + (t = e ? t : (A.divideChinese ? "$$" : "") + (A.wrapMathrm ? "\\mathrm{" : "") + t + (A.wrapMathrm ? "}" : "") + (A.divideChinese ? "$$" : ""));
}
OU($), MU($), GU($), RU($), VU($), JU($);
const ZU = { load: ["output/chtml", "input/tex", "[tex]/enclose", "[tex]/ams", "[tex]/noerrors", "[tex]/configmacros", "[tex]/mathtools", "[tex]/mhchem", "[tex]/unicode", "[tex]/textmacros", "[tex]/textcomp", "[tex]/cancel", "[tex]/extpfeil", "[tex]/html"] }, jU = { "[+]": ["noerrors", "enclose", "ams", "mathtools", "mhchem", "unicode", "textcomp", "cancel", "extpfeil", "textmacros", "html"] }, qU = { "[": "[", "]": "]", "(": "(", ")": ")", "【": "【", "】": "】", NEarrow: "\\unicode{x21d7}", NWarrow: "\\unicode{x21d6}", SEarrow: "\\unicode{x21d8}", SWarrow: "\\unicode{x21d9}", textcircled: "\\enclose{circle}", romannumeral: "\\enclose{()}", arccot: "arccot", arccsc: "arccsc", arcsec: "arcsec", blackdiamond: "\\blacklozenge", blackheart: "\\unicode{x2665}", blackrectangle: "\\unicode{x220e}", blackstar: "\\unicode{x2605}", heart: "\\heartsuit", female: "\\unicode{x2640}", male: "\\unicode{x2642}", napprox: "\\unicode{x2249}", nequiv: "\\unicode{x2262}", notni: "\\unicode{x220c}", nsubset: "\\unicode{x2284}", nsupset: "TODO", oiiint: "\\unicode{x2230}", oiint: "\\unicode{x222f}", rectangle: "\\unicode{x25ad}", smiley: "\\unicode{x263a}", wideparen: "\\overparen", textperthousand: "\\unicode{x2030}", textregistered: "\\unicode{xae}", textsection: "\\unicode{xa7}", texttrademark: "\\unicode{x2122}", textreferencemark: "\\unicode{x203b}", parallelogram: "\\unicode{x25b1}", deletion: "\\text{ }", d: "\\underset{\\cdot}", v: "\\check", omitted: "\\tripledash", xmark: "\\times", cmark: "\\unicode{x2714}", replace: "\\xcancel", handtextcircled: "\\enclose{circle}", handsquare: "\\fbox", Alpha: "A", Beta: "B", Omicron: "O", Epsilon: "E", Zeta: "Z", Eta: "H", Iota: "I", Kappa: "K", Mu: "M", Nu: "N", Rho: "P", Tau: "T", Chi: "X", lg: "\\log", nl: "\\nless", ng: "\\ngtr", textbf: "\\class{bf}", textit: "\\class{it}", parallelequal: "{\\small{\\stackrel{\\;//}{\\raise-.5ex\\hbox{=}}}}", "^": "\\textasciicircum", bar: "\\overline", vec: "\\overrightarrow" }, zU = [["$", "$"], ["\\(", "\\)"]], $U = [["$$", "$$"], ["\\[", "\\]"]], Ap = { inlineMath: zU, displayMath: $U, packages: jU, macros: qU, maxBuffer: 10240, formatError: (t, A) => {
} }, ep = { enableMenu: !1, enableAssistiveMml: !1, menuOptions: { settings: { assistiveMml: !1 } } }, tp = { displayAlign: "left", fontURL: "https://homework-webfront.oss-cn-beijing.aliyuncs.com/MathJaxFonts" }, qB = { options: ep, loader: ZU, tex: Ap, chtml: tp }, np = "https://homework-webfront.oss-cn-beijing.aliyuncs.com/complete_math_v1/mathjax-3.2.0/es5";
function rp(t) {
  if (globalThis) {
    let A = qB;
    t && (A = { ...qB, ...t }), globalThis.MathJax = { ...A, startup: { pageReady: () => {
    } } };
  }
}
rp();
var oC = function(t, A) {
  return (oC = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e, r) {
    e.__proto__ = r;
  } : function(e, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
  }))(t, A);
};
function Xn(t, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  function e() {
    this.constructor = t;
  }
  oC(t, A), t.prototype = A === null ? Object.create(A) : (e.prototype = A.prototype, new e());
}
function Qn(t, A, e, r) {
  return new (e = e || Promise)(function(i, d) {
    function c(Q) {
      try {
        w(r.next(Q));
      } catch (g) {
        d(g);
      }
    }
    function l(Q) {
      try {
        w(r.throw(Q));
      } catch (g) {
        d(g);
      }
    }
    function w(Q) {
      var g;
      Q.done ? i(Q.value) : ((g = Q.value) instanceof e ? g : new e(function(m) {
        m(g);
      })).then(c, l);
    }
    w((r = r.apply(t, A || [])).next());
  });
}
function jt(t, A) {
  var e, r, i, d = { label: 0, sent: function() {
    if (1 & i[0])
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, c = { next: l(0), throw: l(1), return: l(2) };
  return typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function l(w) {
    return function(Q) {
      var g = [w, Q];
      if (e)
        throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (e = 1, r && (i = 2 & g[0] ? r.return : g[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, g[1])).done)
            return i;
          switch (r = 0, (g = i ? [2 & g[0], i.value] : g)[0]) {
            case 0:
            case 1:
              i = g;
              break;
            case 4:
              return d.label++, { value: g[1], done: !1 };
            case 5:
              d.label++, r = g[1], g = [0];
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
        } catch (m) {
          g = [6, m], r = 0;
        } finally {
          e = i = 0;
        }
      if (5 & g[0])
        throw g[1];
      return { value: g[0] ? g[1] : void 0, done: !0 };
    };
  }
}
for (var To = function() {
  function t(A, e, r, i) {
    this.left = A, this.top = e, this.width = r, this.height = i;
  }
  return t.prototype.add = function(A, e, r, i) {
    return new t(this.left + A, this.top + e, this.width + r, this.height + i);
  }, t.fromClientRect = function(A, e) {
    return new t(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height);
  }, t.fromDOMRectList = function(A, e) {
    return e = Array.from(e).find(function(r) {
      return r.width !== 0;
    }), e ? new t(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height) : t.EMPTY;
  }, t.EMPTY = new t(0, 0, 0, 0), t;
}(), c0 = function(t, A) {
  return To.fromClientRect(t, A.getBoundingClientRect());
}, fl = function(t) {
  for (var A = [], e = 0, r = t.length; e < r; ) {
    var i, d = t.charCodeAt(e++);
    55296 <= d && d <= 56319 && e < r ? (64512 & (i = t.charCodeAt(e++))) == 56320 ? A.push(((1023 & d) << 10) + (1023 & i) + 65536) : (A.push(d), e--) : A.push(d);
  }
  return A;
}, ve = function() {
  for (var t = [], A = 0; A < arguments.length; A++)
    t[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, t);
  var e = t.length;
  if (!e)
    return "";
  for (var r = [], i = -1, d = ""; ++i < e; ) {
    var c = t[i];
    c <= 65535 ? r.push(c) : r.push(55296 + ((c -= 65536) >> 10), c % 1024 + 56320), (i + 1 === e || 16384 < r.length) && (d += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return d;
}, M0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", up = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Sc = 0; Sc < M0.length; Sc++)
  up[M0.charCodeAt(Sc)] = Sc;
for (var G0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", qd = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Tc = 0; Tc < G0.length; Tc++)
  qd[G0.charCodeAt(Tc)] = Tc;
for (var op = function(t) {
  for (var A, e, r, i, l = 0.75 * t.length, d = t.length, c = 0, l = (t[t.length - 1] === "=" && (l--, t[t.length - 2] === "=") && l--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? ArrayBuffer : Array)(l)), w = Array.isArray(l) ? l : new Uint8Array(l), Q = 0; Q < d; Q += 4)
    A = qd[t.charCodeAt(Q)], e = qd[t.charCodeAt(Q + 1)], r = qd[t.charCodeAt(Q + 2)], i = qd[t.charCodeAt(Q + 3)], w[c++] = A << 2 | e >> 4, w[c++] = (15 & e) << 4 | r >> 2, w[c++] = (3 & r) << 6 | 63 & i;
  return l;
}, ip = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 2)
    e.push(t[r + 1] << 8 | t[r]);
  return e;
}, ap = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 4)
    e.push(t[r + 3] << 24 | t[r + 2] << 16 | t[r + 1] << 8 | t[r]);
  return e;
}, Do = 5, _f = 11, Sf = 2, dp = _f - Do, k0 = 65536 >> Do, sp = 1 << Do, Tf = sp - 1, cp = 1024 >> Do, R0 = k0 + cp, _2 = R0, Bp = 32, lp = R0 + Bp, fp = 65536 >> _f, gp = 1 << dp, wp = gp - 1, N0 = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, Qp = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, Cp = function(i, A) {
  var i = op(i), e = Array.isArray(i) ? ap(i) : new Uint32Array(i), i = Array.isArray(i) ? ip(i) : new Uint16Array(i), r = N0(i, 12, e[4] / 2), i = e[5] === 2 ? N0(i, (24 + e[4]) / 2) : Qp(e, Math.ceil((24 + e[4]) / 4));
  return new hp(e[0], e[1], e[2], e[3], r, i);
}, hp = function() {
  function t(A, e, r, i, d, c) {
    this.initialValue = A, this.errorValue = e, this.highStart = r, this.highValueIndex = i, this.index = d, this.data = c;
  }
  return t.prototype.get = function(A) {
    var e;
    if (0 <= A) {
      if (A < 55296 || 56319 < A && A <= 65535)
        return e = this.index[A >> Do], this.data[e = (e << Sf) + (A & Tf)];
      if (A <= 65535)
        return e = this.index[k0 + (A - 55296 >> Do)], this.data[e = (e << Sf) + (A & Tf)];
      if (A < this.highStart)
        return e = this.index[e = lp - fp + (A >> _f)], e = this.index[e += A >> Do & wp], this.data[e = (e << Sf) + (A & Tf)];
      if (A <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, t;
}(), V0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Fp = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Oc = 0; Oc < V0.length; Oc++)
  Fp[V0.charCodeAt(Oc)] = Oc;
var Up = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", P0 = 50, pp = 1, iC = 2, aC = 3, Ep = 4, mp = 5, J0 = 7, dC = 8, X0 = 9, Du = 10, Ig = 11, W0 = 12, bg = 13, Dp = 14, zd = 15, vg = 16, Mc = 17, Rd = 18, Hp = 19, Y0 = 20, Kg = 21, Nd = 22, Of = 23, Yi = 24, qt = 25, $d = 26, As = 27, Zi = 28, yp = 29, ls = 30, Ip = 31, Gc = 32, kc = 33, Lg = 34, xg = 35, _g = 36, Ds = 37, Sg = 38, VB = 39, PB = 40, Mf = 41, sC = 42, bp = 43, vp = [9001, 65288], cC = "!", LA = "×", Rc = "÷", Tg = Cp(Up), Pr = [ls, _g], Og = [pp, iC, aC, mp], BC = [Du, dC], Z0 = [As, $d], Kp = Og.concat(BC), j0 = [Sg, VB, PB, Lg, xg], Lp = [zd, bg], xp = function(t, A) {
  A === void 0 && (A = "strict");
  var e = [], r = [], i = [];
  return t.forEach(function(d, c) {
    var l = Tg.get(d);
    return P0 < l ? (i.push(!0), l -= P0) : i.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(d) !== -1 ? (r.push(c), e.push(vg)) : l !== Ep && l !== Ig ? (r.push(c), l === Ip ? e.push(A === "strict" ? Kg : Ds) : l === sC || l === yp ? e.push(ls) : l === bp ? e.push(131072 <= d && d <= 196605 || 196608 <= d && d <= 262141 ? Ds : ls) : void e.push(l)) : c !== 0 && Kp.indexOf(d = e[c - 1]) === -1 ? (r.push(r[c - 1]), e.push(d)) : (r.push(c), e.push(ls));
  }), [r, e, i];
}, Gf = function(t, A, e, r) {
  var i = r[e];
  if (Array.isArray(t) ? t.indexOf(i) !== -1 : t === i)
    for (var d = e; d <= r.length; ) {
      if ((l = r[++d]) === A)
        return !0;
      if (l !== Du)
        break;
    }
  if (i === Du)
    for (d = e; 0 < d; ) {
      var c = r[--d];
      if (Array.isArray(t) ? t.indexOf(c) !== -1 : t === c)
        for (var l, w = e; w <= r.length; ) {
          if ((l = r[++w]) === A)
            return !0;
          if (l !== Du)
            break;
        }
      if (c !== Du)
        break;
    }
  return !1;
}, q0 = function(t, A) {
  for (var e = t; 0 <= e; ) {
    var r = A[e];
    if (r !== Du)
      return r;
    e--;
  }
  return 0;
}, _p = function(t, A, e, r, d) {
  if (e[r] === 0 || (r -= 1, Array.isArray(d) && d[r] === !0))
    return LA;
  var d = r - 1, c = 1 + r, l = A[r], w = 0 <= d ? A[d] : 0, Q = A[c];
  if (l === iC && Q === aC)
    return LA;
  if (Og.indexOf(l) !== -1)
    return cC;
  if (Og.indexOf(Q) !== -1 || BC.indexOf(Q) !== -1)
    return LA;
  if (q0(r, A) === dC)
    return Rc;
  if (Tg.get(t[r]) === Ig || (l === Gc || l === kc) && Tg.get(t[c]) === Ig || l === J0 || Q === J0 || l === X0 || [Du, bg, zd].indexOf(l) === -1 && Q === X0 || [Mc, Rd, Hp, Yi, Zi].indexOf(Q) !== -1 || q0(r, A) === Nd || Gf(Of, Nd, r, A) || Gf([Mc, Rd], Kg, r, A) || Gf(W0, W0, r, A))
    return LA;
  if (l === Du)
    return Rc;
  if (l === Of || Q === Of)
    return LA;
  if (Q === vg || l === vg)
    return Rc;
  if ([bg, zd, Kg].indexOf(Q) !== -1 || l === Dp || w === _g && Lp.indexOf(l) !== -1 || l === Zi && Q === _g || Q === Y0 || Pr.indexOf(Q) !== -1 && l === qt || Pr.indexOf(l) !== -1 && Q === qt || l === As && [Ds, Gc, kc].indexOf(Q) !== -1 || [Ds, Gc, kc].indexOf(l) !== -1 && Q === $d || Pr.indexOf(l) !== -1 && Z0.indexOf(Q) !== -1 || Z0.indexOf(l) !== -1 && Pr.indexOf(Q) !== -1 || [As, $d].indexOf(l) !== -1 && (Q === qt || [Nd, zd].indexOf(Q) !== -1 && A[1 + c] === qt) || [Nd, zd].indexOf(l) !== -1 && Q === qt || l === qt && [qt, Zi, Yi].indexOf(Q) !== -1)
    return LA;
  if ([qt, Zi, Yi, Mc, Rd].indexOf(Q) !== -1)
    for (var g = r; 0 <= g; ) {
      if ((m = A[g]) === qt)
        return LA;
      if ([Zi, Yi].indexOf(m) === -1)
        break;
      g--;
    }
  if ([As, $d].indexOf(Q) !== -1)
    for (var m, g = [Mc, Rd].indexOf(l) !== -1 ? d : r; 0 <= g; ) {
      if ((m = A[g]) === qt)
        return LA;
      if ([Zi, Yi].indexOf(m) === -1)
        break;
      g--;
    }
  if (Sg === l && [Sg, VB, Lg, xg].indexOf(Q) !== -1 || [VB, Lg].indexOf(l) !== -1 && [VB, PB].indexOf(Q) !== -1 || [PB, xg].indexOf(l) !== -1 && Q === PB || j0.indexOf(l) !== -1 && [Y0, $d].indexOf(Q) !== -1 || j0.indexOf(Q) !== -1 && l === As || Pr.indexOf(l) !== -1 && Pr.indexOf(Q) !== -1 || l === Yi && Pr.indexOf(Q) !== -1 || Pr.concat(qt).indexOf(l) !== -1 && Q === Nd && vp.indexOf(t[c]) === -1 || Pr.concat(qt).indexOf(Q) !== -1 && l === Rd)
    return LA;
  if (l === Mf && Q === Mf) {
    for (var b = e[r], v = 1; 0 < b && A[--b] === Mf; )
      v++;
    if (v % 2 != 0)
      return LA;
  }
  return l === Gc && Q === kc ? LA : Rc;
}, Sp = function(t, d) {
  var i = xp(t, (d = d || { lineBreak: "normal", wordBreak: "normal" }).lineBreak), e = i[0], r = i[1], i = i[2], d = (d.wordBreak !== "break-all" && d.wordBreak !== "break-word" || (r = r.map(function(c) {
    return [qt, ls, sC].indexOf(c) !== -1 ? Ds : c;
  })), d.wordBreak === "keep-all" ? i.map(function(c, l) {
    return c && 19968 <= t[l] && t[l] <= 40959;
  }) : void 0);
  return [e, r, d];
}, Tp = function() {
  function t(A, e, r, i) {
    this.codePoints = A, this.required = e === cC, this.start = r, this.end = i;
  }
  return t.prototype.slice = function() {
    return ve.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, t;
}(), Op = function(r, A) {
  var e = fl(r), r = Sp(e, A), i = r[0], d = r[1], c = r[2], l = e.length, w = 0, Q = 0;
  return { next: function() {
    if (l <= Q)
      return { done: !0, value: null };
    for (var g, m = LA; Q < l && (m = _p(e, d, i, ++Q, c)) === LA; )
      ;
    return m !== LA || Q === l ? (g = new Tp(e, m, w, Q), w = Q, { value: g, done: !1 }) : { done: !0, value: null };
  } };
}, Mp = 1, Gp = 2, Ls = 4, z0 = 8, zB = 10, $0 = 47, fs = 92, kp = 9, Rp = 32, Nc = 34, Vd = 61, Np = 35, Vp = 36, Pp = 37, Vc = 39, Pc = 40, Pd = 41, Jp = 95, Ot = 45, Xp = 33, Wp = 60, Yp = 62, Zp = 64, jp = 91, qp = 93, zp = 61, $p = 123, Jc = 63, A1 = 125, Aw = 124, e1 = 126, t1 = 128, ew = 65533, kf = 42, _o = 43, n1 = 44, r1 = 58, u1 = 59, Hs = 46, o1 = 0, i1 = 8, a1 = 11, d1 = 14, s1 = 31, c1 = 127, gr = -1, lC = 48, fC = 97, gC = 101, B1 = 102, l1 = 117, f1 = 122, wC = 65, QC = 69, CC = 70, g1 = 85, w1 = 90, yt = function(t) {
  return lC <= t && t <= 57;
}, Q1 = function(t) {
  return 55296 <= t && t <= 57343;
}, ji = function(t) {
  return yt(t) || wC <= t && t <= CC || fC <= t && t <= B1;
}, C1 = function(t) {
  return fC <= t && t <= f1;
}, h1 = function(t) {
  return wC <= t && t <= w1;
}, F1 = function(t) {
  return C1(t) || h1(t);
}, U1 = function(t) {
  return t1 <= t;
}, Xc = function(t) {
  return t === zB || t === kp || t === Rp;
}, $B = function(t) {
  return F1(t) || U1(t) || t === Jp;
}, tw = function(t) {
  return $B(t) || yt(t) || t === Ot;
}, p1 = function(t) {
  return o1 <= t && t <= i1 || t === a1 || d1 <= t && t <= s1 || t === c1;
}, pu = function(t, A) {
  return t === fs && A !== zB;
}, Wc = function(t, A, e) {
  return t === Ot ? $B(A) || pu(A, e) : !!$B(t) || !(t !== fs || !pu(t, A));
}, Rf = function(t, A, e) {
  return t === _o || t === Ot ? !!yt(A) || A === Hs && yt(e) : yt(t === Hs ? A : t);
}, E1 = function(t) {
  for (var A = 0, e = 1, r = (t[A] !== _o && t[A] !== Ot || (t[A] === Ot && (e = -1), A++), []); yt(t[A]); )
    r.push(t[A++]);
  for (var i = r.length ? parseInt(ve.apply(void 0, r), 10) : 0, d = (t[A] === Hs && A++, []); yt(t[A]); )
    d.push(t[A++]);
  for (var c = d.length, l = c ? parseInt(ve.apply(void 0, d), 10) : 0, w = (t[A] !== QC && t[A] !== gC || A++, 1), Q = (t[A] !== _o && t[A] !== Ot || (t[A] === Ot && (w = -1), A++), []); yt(t[A]); )
    Q.push(t[A++]);
  var g = Q.length ? parseInt(ve.apply(void 0, Q), 10) : 0;
  return e * (i + l * Math.pow(10, -c)) * Math.pow(10, w * g);
}, m1 = { type: 2 }, D1 = { type: 3 }, H1 = { type: 4 }, y1 = { type: 13 }, I1 = { type: 8 }, b1 = { type: 21 }, v1 = { type: 9 }, K1 = { type: 10 }, L1 = { type: 11 }, x1 = { type: 12 }, _1 = { type: 14 }, Yc = { type: 23 }, S1 = { type: 1 }, T1 = { type: 25 }, O1 = { type: 24 }, M1 = { type: 26 }, G1 = { type: 27 }, k1 = { type: 28 }, R1 = { type: 29 }, N1 = { type: 31 }, Mg = { type: 32 }, hC = function() {
  function t() {
    this._value = [];
  }
  return t.prototype.write = function(A) {
    this._value = this._value.concat(fl(A));
  }, t.prototype.read = function() {
    for (var A = [], e = this.consumeToken(); e !== Mg; )
      A.push(e), e = this.consumeToken();
    return A;
  }, t.prototype.consumeToken = function() {
    var A = this.consumeCodePoint();
    switch (A) {
      case Nc:
        return this.consumeStringToken(Nc);
      case Np:
        var e = this.peekCodePoint(0), r = this.peekCodePoint(1), i = this.peekCodePoint(2);
        if (tw(e) || pu(r, i))
          return e = Wc(e, r, i) ? Gp : Mp, { type: 5, value: this.consumeName(), flags: e };
        break;
      case Vp:
        if (this.peekCodePoint(0) === Vd)
          return this.consumeCodePoint(), y1;
        break;
      case Vc:
        return this.consumeStringToken(Vc);
      case Pc:
        return m1;
      case Pd:
        return D1;
      case kf:
        if (this.peekCodePoint(0) === Vd)
          return this.consumeCodePoint(), _1;
        break;
      case _o:
        if (Rf(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case n1:
        return H1;
      case Ot:
        if (r = A, i = this.peekCodePoint(0), e = this.peekCodePoint(1), Rf(r, i, e))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (Wc(r, i, e))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (i === Ot && e === Yp)
          return this.consumeCodePoint(), this.consumeCodePoint(), O1;
        break;
      case Hs:
        if (Rf(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case $0:
        if (this.peekCodePoint(0) === kf)
          for (this.consumeCodePoint(); ; ) {
            var d = this.consumeCodePoint();
            if (d === kf && (d = this.consumeCodePoint()) === $0)
              return this.consumeToken();
            if (d === gr)
              return this.consumeToken();
          }
        break;
      case r1:
        return M1;
      case u1:
        return G1;
      case Wp:
        if (this.peekCodePoint(0) === Xp && this.peekCodePoint(1) === Ot && this.peekCodePoint(2) === Ot)
          return this.consumeCodePoint(), this.consumeCodePoint(), T1;
        break;
      case Zp:
        if (r = this.peekCodePoint(0), i = this.peekCodePoint(1), e = this.peekCodePoint(2), Wc(r, i, e))
          return { type: 7, value: this.consumeName() };
        break;
      case jp:
        return k1;
      case fs:
        if (pu(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case qp:
        return R1;
      case zp:
        if (this.peekCodePoint(0) === Vd)
          return this.consumeCodePoint(), I1;
        break;
      case $p:
        return L1;
      case A1:
        return x1;
      case l1:
      case g1:
        return r = this.peekCodePoint(0), i = this.peekCodePoint(1), r !== _o || !ji(i) && i !== Jc || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case Aw:
        if (this.peekCodePoint(0) === Vd)
          return this.consumeCodePoint(), v1;
        if (this.peekCodePoint(0) === Aw)
          return this.consumeCodePoint(), b1;
        break;
      case e1:
        if (this.peekCodePoint(0) === Vd)
          return this.consumeCodePoint(), K1;
        break;
      case gr:
        return Mg;
    }
    return Xc(A) ? (this.consumeWhiteSpace(), N1) : yt(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : $B(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: ve(A) };
  }, t.prototype.consumeCodePoint = function() {
    var A = this._value.shift();
    return A === void 0 ? -1 : A;
  }, t.prototype.reconsumeCodePoint = function(A) {
    this._value.unshift(A);
  }, t.prototype.peekCodePoint = function(A) {
    return A >= this._value.length ? -1 : this._value[A];
  }, t.prototype.consumeUnicodeRangeToken = function() {
    for (var A = [], e = this.consumeCodePoint(); ji(e) && A.length < 6; )
      A.push(e), e = this.consumeCodePoint();
    for (var r = !1; e === Jc && A.length < 6; )
      A.push(e), e = this.consumeCodePoint(), r = !0;
    if (r)
      return { type: 30, start: parseInt(ve.apply(void 0, A.map(function(c) {
        return c === Jc ? lC : c;
      })), 16), end: parseInt(ve.apply(void 0, A.map(function(c) {
        return c === Jc ? CC : c;
      })), 16) };
    var i = parseInt(ve.apply(void 0, A), 16);
    if (this.peekCodePoint(0) === Ot && ji(this.peekCodePoint(1))) {
      this.consumeCodePoint();
      for (var e = this.consumeCodePoint(), d = []; ji(e) && d.length < 6; )
        d.push(e), e = this.consumeCodePoint();
      return { type: 30, start: i, end: parseInt(ve.apply(void 0, d), 16) };
    }
    return { type: 30, start: i, end: i };
  }, t.prototype.consumeIdentLikeToken = function() {
    var A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === Pc ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Pc ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }, t.prototype.consumeUrlToken = function() {
    var A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === gr)
      return { type: 22, value: "" };
    var e = this.peekCodePoint(0);
    if (e === Vc || e === Nc)
      return (e = this.consumeStringToken(this.consumeCodePoint())).type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === gr || this.peekCodePoint(0) === Pd) ? (this.consumeCodePoint(), { type: 22, value: e.value }) : (this.consumeBadUrlRemnants(), Yc);
    for (; ; ) {
      var r = this.consumeCodePoint();
      if (r === gr || r === Pd)
        return { type: 22, value: ve.apply(void 0, A) };
      if (Xc(r))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === gr || this.peekCodePoint(0) === Pd ? (this.consumeCodePoint(), { type: 22, value: ve.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), Yc);
      if (r === Nc || r === Vc || r === Pc || p1(r))
        return this.consumeBadUrlRemnants(), Yc;
      if (r === fs) {
        if (!pu(r, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), Yc;
        A.push(this.consumeEscapedCodePoint());
      } else
        A.push(r);
    }
  }, t.prototype.consumeWhiteSpace = function() {
    for (; Xc(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, t.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var A = this.consumeCodePoint();
      if (A === Pd || A === gr)
        return;
      pu(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }, t.prototype.consumeStringSlice = function(A) {
    for (var e = ""; 0 < A; ) {
      var r = Math.min(5e4, A);
      e += ve.apply(void 0, this._value.splice(0, r)), A -= r;
    }
    return this._value.shift(), e;
  }, t.prototype.consumeStringToken = function(A) {
    for (var e = "", r = 0; ; ) {
      var i, d = this._value[r];
      if (d === gr || d === void 0 || d === A)
        return { type: 0, value: e += this.consumeStringSlice(r) };
      if (d === zB)
        return this._value.splice(0, r), S1;
      d === fs && (i = this._value[r + 1]) !== gr && i !== void 0 && (i === zB ? (e += this.consumeStringSlice(r), r = -1, this._value.shift()) : pu(d, i) && (e = (e += this.consumeStringSlice(r)) + ve(this.consumeEscapedCodePoint()), r = -1)), r++;
    }
  }, t.prototype.consumeNumber = function() {
    var A = [], e = Ls;
    for ((r = this.peekCodePoint(0)) !== _o && r !== Ot || A.push(this.consumeCodePoint()); yt(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    var r = this.peekCodePoint(0), i = this.peekCodePoint(1);
    if (r === Hs && yt(i))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = z0; yt(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    r = this.peekCodePoint(0);
    var i = this.peekCodePoint(1), d = this.peekCodePoint(2);
    if ((r === QC || r === gC) && ((i === _o || i === Ot) && yt(d) || yt(i)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = z0; yt(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [E1(A), e];
  }, t.prototype.consumeNumericToken = function() {
    var e = this.consumeNumber(), A = e[0], e = e[1], r = this.peekCodePoint(0), i = this.peekCodePoint(1), d = this.peekCodePoint(2);
    return Wc(r, i, d) ? { type: 15, number: A, flags: e, unit: this.consumeName() } : r === Pp ? (this.consumeCodePoint(), { type: 16, number: A, flags: e }) : { type: 17, number: A, flags: e };
  }, t.prototype.consumeEscapedCodePoint = function() {
    var A = this.consumeCodePoint();
    if (ji(A)) {
      for (var e = ve(A); ji(this.peekCodePoint(0)) && e.length < 6; )
        e += ve(this.consumeCodePoint());
      Xc(this.peekCodePoint(0)) && this.consumeCodePoint();
      var r = parseInt(e, 16);
      return r === 0 || Q1(r) || 1114111 < r ? ew : r;
    }
    return A === gr ? ew : A;
  }, t.prototype.consumeName = function() {
    for (var A = ""; ; ) {
      var e = this.consumeCodePoint();
      if (tw(e))
        A += ve(e);
      else {
        if (!pu(e, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(e), A;
        A += ve(this.consumeEscapedCodePoint());
      }
    }
  }, t;
}(), FC = function() {
  function t(A) {
    this._tokens = A;
  }
  return t.create = function(A) {
    var e = new hC();
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
    for (var e = { type: A, values: [] }, r = this.consumeToken(); ; ) {
      if (r.type === 32 || V1(r, A))
        return e;
      this.reconsumeToken(r), e.values.push(this.consumeComponentValue()), r = this.consumeToken();
    }
  }, t.prototype.consumeFunction = function(A) {
    for (var e = { name: A.value, values: [], type: 18 }; ; ) {
      var r = this.consumeToken();
      if (r.type === 32 || r.type === 3)
        return e;
      this.reconsumeToken(r), e.values.push(this.consumeComponentValue());
    }
  }, t.prototype.consumeToken = function() {
    var A = this._tokens.shift();
    return A === void 0 ? Mg : A;
  }, t.prototype.reconsumeToken = function(A) {
    this._tokens.unshift(A);
  }, t;
}(), gs = function(t) {
  return t.type === 15;
}, JB = function(t) {
  return t.type === 17;
}, pe = function(t) {
  return t.type === 20;
}, Nf = function(t, A) {
  return pe(t) && t.value === A;
}, gl = function(t) {
  return t.type !== 31 && t.type !== 4;
}, Qr = function(t) {
  var A = [], e = [];
  return t.forEach(function(r) {
    if (r.type === 4) {
      if (e.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      A.push(e), e = [];
    } else
      r.type !== 31 && e.push(r);
  }), e.length && A.push(e), A;
}, V1 = function(t, A) {
  return A === 11 && t.type === 12 || A === 28 && t.type === 29 || A === 2 && t.type === 3;
}, Ku = function(t) {
  return t.type === 17 || t.type === 15;
}, _e = function(t) {
  return t.type === 16 || Ku(t);
}, nw = function(t) {
  return 1 < t.length ? [t[0], t[1]] : [t[0]];
}, et = { type: 17, number: 0, flags: Ls }, B0 = { type: 16, number: 50, flags: Ls }, Hu = { type: 16, number: 100, flags: Ls }, es = function(i, A, e) {
  var r = i[0], i = i[1];
  return [ne(r, A), ne(i !== void 0 ? i : r, e)];
}, ne = function(t, A) {
  if (t.type === 16)
    return t.number / 100 * A;
  if (gs(t))
    switch (t.unit) {
      case "rem":
      case "em":
        return 16 * t.number;
      default:
        return t.number;
    }
  return t.number;
}, UC = "deg", pC = "grad", EC = "rad", mC = "turn", wl = { name: "angle", parse: function(t, A) {
  if (A.type === 15)
    switch (A.unit) {
      case UC:
        return Math.PI * A.number / 180;
      case pC:
        return Math.PI / 200 * A.number;
      case EC:
        return A.number;
      case mC:
        return 2 * Math.PI * A.number;
    }
  throw new Error("Unsupported angle type");
} }, DC = function(t) {
  return t.type === 15 && (t.unit === UC || t.unit === pC || t.unit === EC || t.unit === mC);
}, HC = function(t) {
  switch (t.filter(pe).map(function(A) {
    return A.value;
  }).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [et, et];
    case "to top":
    case "bottom":
      return En(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [et, Hu];
    case "to right":
    case "left":
      return En(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Hu, Hu];
    case "to bottom":
    case "top":
      return En(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Hu, et];
    case "to left":
    case "right":
      return En(270);
  }
  return 0;
}, En = function(t) {
  return Math.PI * t / 180;
}, Lu = { name: "color", parse: function(t, A) {
  if (A.type === 18) {
    var e = P1[A.name];
    if (e === void 0)
      throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
    return e(t, A.values);
  }
  if (A.type === 5) {
    var r, i, d, c;
    if (A.value.length === 3)
      return r = A.value.substring(0, 1), i = A.value.substring(1, 2), d = A.value.substring(2, 3), yu(parseInt(r + r, 16), parseInt(i + i, 16), parseInt(d + d, 16), 1);
    if (A.value.length === 4)
      return r = A.value.substring(0, 1), i = A.value.substring(1, 2), d = A.value.substring(2, 3), c = A.value.substring(3, 4), yu(parseInt(r + r, 16), parseInt(i + i, 16), parseInt(d + d, 16), parseInt(c + c, 16) / 255);
    if (A.value.length === 6)
      return r = A.value.substring(0, 2), i = A.value.substring(2, 4), d = A.value.substring(4, 6), yu(parseInt(r, 16), parseInt(i, 16), parseInt(d, 16), 1);
    if (A.value.length === 8)
      return r = A.value.substring(0, 2), i = A.value.substring(2, 4), d = A.value.substring(4, 6), c = A.value.substring(6, 8), yu(parseInt(r, 16), parseInt(i, 16), parseInt(d, 16), parseInt(c, 16) / 255);
  }
  return A.type === 20 && (e = ys[A.value.toUpperCase()], e !== void 0) ? e : ys.TRANSPARENT;
} }, ga = function(t) {
  return (255 & t) == 0;
}, Je = function(i) {
  var A = 255 & i, e = 255 & i >> 8, r = 255 & i >> 16, i = 255 & i >> 24;
  return A < 255 ? "rgba(" + i + "," + r + "," + e + "," + A / 255 + ")" : "rgb(" + i + "," + r + "," + e + ")";
}, yu = function(t, A, e, r) {
  return (t << 24 | A << 16 | e << 8 | Math.round(255 * r) << 0) >>> 0;
}, rw = function(t, A) {
  var e;
  return t.type === 17 ? t.number : t.type === 16 ? (e = A === 3 ? 1 : 255, A === 3 ? t.number / 100 * e : Math.round(t.number / 100 * e)) : 0;
}, uw = function(t, d) {
  var e, r, i, d = d.filter(gl);
  return d.length === 3 ? (e = (i = d.map(rw))[0], r = i[1], i = i[2], yu(e, r, i, 1)) : d.length === 4 ? (e = (d = d.map(rw))[0], r = d[1], i = d[2], d = d[3], yu(e, r, i, d)) : 0;
};
function Vf(t, A, e) {
  return e < 0 && (e += 1), 1 <= e && --e, e < 1 / 6 ? (A - t) * e * 6 + t : e < 0.5 ? A : e < 2 / 3 ? 6 * (A - t) * (2 / 3 - e) + t : t;
}
var ow = function(i, r) {
  var e, r = r.filter(gl), d = r[0], c = r[1], l = r[2], r = r[3], i = (d.type === 17 ? En(d.number) : wl.parse(i, d)) / (2 * Math.PI), d = _e(c) ? c.number / 100 : 0, c = _e(l) ? l.number / 100 : 0, l = r !== void 0 && _e(r) ? ne(r, 1) : 1;
  return d == 0 ? yu(255 * c, 255 * c, 255 * c, 1) : (d = Vf(c = 2 * c - (r = c <= 0.5 ? c * (1 + d) : c + d - c * d), r, i + 1 / 3), e = Vf(c, r, i), c = Vf(c, r, i - 1 / 3), yu(255 * d, 255 * e, 255 * c, l));
}, P1 = { hsl: ow, hsla: ow, rgb: uw, rgba: uw }, iw = function(t, A) {
  return Lu.parse(t, FC.create(A).parseComponentValue());
}, ys = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, J1 = { name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function(t, A) {
  return A.map(function(e) {
    if (pe(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, X1 = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Ql = function(t, A) {
  return t = Lu.parse(t, A[0]), A = A[1], A && _e(A) ? { color: t, stop: A } : { color: t, stop: null };
}, aw = function(t, A) {
  for (var e = t[0], r = t[t.length - 1], i = (e.stop === null && (e.stop = et), r.stop === null && (r.stop = Hu), []), d = 0, c = 0; c < t.length; c++) {
    var l = t[c].stop;
    l !== null ? (l = ne(l, A), i.push(d < l ? l : d), d = l) : i.push(null);
  }
  for (var w = null, c = 0; c < i.length; c++) {
    var Q = i[c];
    if (Q === null)
      w === null && (w = c);
    else if (w !== null) {
      for (var g = c - w, m = (Q - i[w - 1]) / (1 + g), b = 1; b <= g; b++)
        i[w + b - 1] = m * b;
      w = null;
    }
  }
  return t.map(function(v, K) {
    return { color: v.color, stop: Math.max(Math.min(1, i[K] / A), 0) };
  });
}, W1 = function(t, i, e) {
  var d = i / 2, r = e / 2, i = ne(t[0], i) - d, d = r - ne(t[1], e);
  return (Math.atan2(d, i) + 2 * Math.PI) % (2 * Math.PI);
}, Y1 = function(w, i, d) {
  var w = typeof w == "number" ? w : W1(w, i, d), r = Math.abs(i * Math.sin(w)) + Math.abs(d * Math.cos(w)), i = i / 2, d = d / 2, c = r / 2, l = Math.sin(w - Math.PI / 2) * c, w = Math.cos(w - Math.PI / 2) * c;
  return [r, i - w, i + w, d - l, d + l];
}, Pn = function(t, A) {
  return Math.sqrt(t * t + A * A);
}, dw = function(t, A, e, r, i) {
  return [[0, 0], [0, A], [t, 0], [t, A]].reduce(function(d, c) {
    var w = c[0], l = c[1], w = Pn(e - w, r - l);
    return (i ? w < d.optimumDistance : w > d.optimumDistance) ? { optimumCorner: c, optimumDistance: w } : d;
  }, { optimumDistance: i ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, Z1 = function(t, A, e, r, i) {
  var d, c, l, w, Q = 0, g = 0;
  switch (t.size) {
    case 0:
      t.shape === 0 ? Q = g = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(e), Math.abs(e - i)) : t.shape === 1 && (Q = Math.min(Math.abs(A), Math.abs(A - r)), g = Math.min(Math.abs(e), Math.abs(e - i)));
      break;
    case 2:
      t.shape === 0 ? Q = g = Math.min(Pn(A, e), Pn(A, e - i), Pn(A - r, e), Pn(A - r, e - i)) : t.shape === 1 && (d = Math.min(Math.abs(e), Math.abs(e - i)) / Math.min(Math.abs(A), Math.abs(A - r)), l = (w = dw(r, i, A, e, !0))[0], w = w[1], g = d * (Q = Pn(l - A, (w - e) / d)));
      break;
    case 1:
      t.shape === 0 ? Q = g = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(e), Math.abs(e - i)) : t.shape === 1 && (Q = Math.max(Math.abs(A), Math.abs(A - r)), g = Math.max(Math.abs(e), Math.abs(e - i)));
      break;
    case 3:
      t.shape === 0 ? Q = g = Math.max(Pn(A, e), Pn(A, e - i), Pn(A - r, e), Pn(A - r, e - i)) : t.shape === 1 && (d = Math.max(Math.abs(e), Math.abs(e - i)) / Math.max(Math.abs(A), Math.abs(A - r)), l = (c = dw(r, i, A, e, !1))[0], w = c[1], g = d * (Q = Pn(l - A, (w - e) / d)));
  }
  return Array.isArray(t.size) && (Q = ne(t.size[0], r), g = t.size.length === 2 ? ne(t.size[1], i) : Q), [Q, g];
}, j1 = function(t, A) {
  var e = En(180), r = [];
  return Qr(A).forEach(function(i, d) {
    if (d === 0) {
      if (d = i[0], d.type === 20 && d.value === "to")
        return void (e = HC(i));
      if (DC(d))
        return void (e = wl.parse(t, d));
    }
    d = Ql(t, i), r.push(d);
  }), { angle: e, stops: r, type: 1 };
}, Zc = function(t, A) {
  var e = En(180), r = [];
  return Qr(A).forEach(function(i, d) {
    if (d === 0) {
      if (d = i[0], d.type === 20 && ["top", "left", "right", "bottom"].indexOf(d.value) !== -1)
        return void (e = HC(i));
      if (DC(d))
        return void (e = (wl.parse(t, d) + En(270)) % En(360));
    }
    d = Ql(t, i), r.push(d);
  }), { angle: e, stops: r, type: 1 };
}, q1 = function(t, A) {
  var e = En(180), r = [], i = 1;
  return Qr(A).forEach(function(w, c) {
    var l, w = w[0];
    if (c === 0) {
      if (pe(w) && w.value === "linear")
        return void (i = 1);
      if (pe(w) && w.value === "radial")
        return void (i = 2);
    }
    w.type === 18 && (w.name === "from" ? (l = Lu.parse(t, w.values[0]), r.push({ stop: et, color: l })) : w.name === "to" ? (l = Lu.parse(t, w.values[0]), r.push({ stop: Hu, color: l })) : w.name === "color-stop" && (c = w.values.filter(gl)).length === 2 && (l = Lu.parse(t, c[1]), w = c[0], JB(w)) && r.push({ stop: { type: 16, number: 100 * w.number, flags: w.flags }, color: l }));
  }), i === 1 ? { angle: (e + En(180)) % En(360), stops: r, type: i } : { size: 3, shape: 0, stops: r, position: [], type: i };
}, yC = "closest-side", IC = "farthest-side", bC = "closest-corner", vC = "farthest-corner", KC = "circle", LC = "ellipse", xC = "cover", _C = "contain", z1 = function(t, A) {
  var e = 0, r = 3, i = [], d = [];
  return Qr(A).forEach(function(c, l) {
    var w, Q = !0;
    l === 0 && (w = !1, Q = c.reduce(function(g, m) {
      if (w)
        if (pe(m))
          switch (m.value) {
            case "center":
              return d.push(B0), g;
            case "top":
            case "left":
              return d.push(et), g;
            case "right":
            case "bottom":
              return d.push(Hu), g;
          }
        else
          (_e(m) || Ku(m)) && d.push(m);
      else if (pe(m))
        switch (m.value) {
          case KC:
            return e = 0, !1;
          case LC:
            return !(e = 1);
          case "at":
            return !(w = !0);
          case yC:
            return r = 0, !1;
          case xC:
          case IC:
            return !(r = 1);
          case _C:
          case bC:
            return !(r = 2);
          case vC:
            return !(r = 3);
        }
      else if (Ku(m) || _e(m))
        return (r = Array.isArray(r) ? r : []).push(m), !1;
      return g;
    }, Q)), Q && (l = Ql(t, c), i.push(l));
  }), { size: r, shape: e, stops: i, position: d, type: 2 };
}, jc = function(t, A) {
  var e = 0, r = 3, i = [], d = [];
  return Qr(A).forEach(function(c, l) {
    var w = !0;
    l === 0 ? w = c.reduce(function(Q, g) {
      if (pe(g))
        switch (g.value) {
          case "center":
            return d.push(B0), !1;
          case "top":
          case "left":
            return d.push(et), !1;
          case "right":
          case "bottom":
            return d.push(Hu), !1;
        }
      else if (_e(g) || Ku(g))
        return d.push(g), !1;
      return Q;
    }, w) : l === 1 && (w = c.reduce(function(Q, g) {
      if (pe(g))
        switch (g.value) {
          case KC:
            return e = 0, !1;
          case LC:
            return !(e = 1);
          case _C:
          case yC:
            return r = 0, !1;
          case IC:
            return !(r = 1);
          case bC:
            return !(r = 2);
          case xC:
          case vC:
            return !(r = 3);
        }
      else if (Ku(g) || _e(g))
        return (r = Array.isArray(r) ? r : []).push(g), !1;
      return Q;
    }, w)), w && (l = Ql(t, c), i.push(l));
  }), { size: r, shape: e, stops: i, position: d, type: 2 };
}, $1 = function(t) {
  return t.type === 1;
}, AE = function(t) {
  return t.type === 2;
}, Pf = { name: "image", parse: function(t, A) {
  if (A.type === 22)
    return e = { url: A.value, type: 0 }, t.cache.addImage(A.value), e;
  if (A.type !== 18)
    throw new Error("Unsupported image type " + A.type);
  var e = SC[A.name];
  if (e === void 0)
    throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
  return e(t, A.values);
} };
function eE(t) {
  return !(t.type === 20 && t.value === "none" || t.type === 18 && !SC[t.name]);
}
for (var wa, qc, Jd, SC = { "linear-gradient": j1, "-moz-linear-gradient": Zc, "-ms-linear-gradient": Zc, "-o-linear-gradient": Zc, "-webkit-linear-gradient": Zc, "radial-gradient": z1, "-moz-radial-gradient": jc, "-ms-radial-gradient": jc, "-o-radial-gradient": jc, "-webkit-radial-gradient": jc, "-webkit-gradient": q1 }, tE = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  var e;
  return A.length === 0 || (e = A[0]).type === 20 && e.value === "none" ? [] : A.filter(function(r) {
    return gl(r) && eE(r);
  }).map(function(r) {
    return Pf.parse(t, r);
  });
} }, nE = { name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function(t, A) {
  return A.map(function(e) {
    if (pe(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, rE = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(t, A) {
  return Qr(A).map(function(e) {
    return e.filter(_e);
  }).map(nw);
} }, uE = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(t, A) {
  return Qr(A).map(function(e) {
    return e.filter(pe).map(function(r) {
      return r.value;
    }).join(" ");
  }).map(oE);
} }, oE = function(t) {
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
}, iE = (function(t) {
  t.AUTO = "auto", t.CONTAIN = "contain", t.COVER = "cover";
}(wa = wa || {}), { name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function(t, A) {
  return Qr(A).map(function(e) {
    return e.filter(aE);
  });
} }), aE = function(t) {
  return pe(t) || _e(t);
}, zc = function(t) {
  return { name: "border-" + t + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
}, dE = zc("top"), sE = zc("right"), cE = zc("bottom"), BE = zc("left"), $c = function(t) {
  return { name: "border-radius-" + t, initialValue: "0 0", prefix: !1, type: 1, parse: function(A, e) {
    return nw(e.filter(_e));
  } };
}, lE = $c("top-left"), fE = $c("top-right"), gE = $c("bottom-right"), wE = $c("bottom-left"), AB = function(t) {
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
}, QE = AB("top"), CE = AB("right"), hE = AB("bottom"), FE = AB("left"), eB = function(t) {
  return { name: "border-" + t + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(A, e) {
    return gs(e) ? e.number : 0;
  } };
}, UE = eB("top"), pE = eB("right"), EE = eB("bottom"), mE = eB("left"), DE = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, HE = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "rtl" ? 0 : 1;
} }, yE = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(pe).reduce(function(e, r) {
    return e | IE(r.value);
  }, 0);
} }, IE = function(t) {
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
}, bE = { name: "float", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
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
} }, vE = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(t, A) {
  return A.type === 20 && A.value === "normal" || A.type !== 17 && A.type !== 15 ? 0 : A.number;
} }, KE = (function(t) {
  t.NORMAL = "normal", t.STRICT = "strict";
}(qc = qc || {}), { name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "strict" ? qc.NORMAL : qc.STRICT;
} }), LE = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 }, sw = function(t, A) {
  return pe(t) && t.value === "normal" ? 1.2 * A : t.type === 17 ? A * t.number : _e(t) ? ne(t, A) : A;
}, xE = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(t, A) {
  return A.type === 20 && A.value === "none" ? null : Pf.parse(t, A);
} }, _E = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "inside" ? 1 : 0;
} }, SE = { name: "list-style-type", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
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
} }, tB = function(t) {
  return { name: "margin-" + t, initialValue: "0", prefix: !1, type: 4 };
}, TE = tB("top"), OE = tB("right"), ME = tB("bottom"), GE = tB("left"), kE = { name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(pe).map(function(e) {
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
} }, RE = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "break-word" ? "normal" : "break-word";
} }, nB = function(t) {
  return { name: "padding-" + t, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
}, NE = nB("top"), VE = nB("right"), PE = nB("bottom"), JE = nB("left"), XE = { name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, WE = { name: "position", initialValue: "static", prefix: !1, type: 2, parse: function(t, A) {
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
} }, YE = { name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.length === 1 && Nf(A[0], "none") ? [] : Qr(A).map(function(e) {
    for (var r = { color: ys.TRANSPARENT, offsetX: et, offsetY: et, blur: et }, i = 0, d = 0; d < e.length; d++) {
      var c = e[d];
      Ku(c) ? (i === 0 ? r.offsetX = c : i === 1 ? r.offsetY = c : r.blur = c, i++) : r.color = Lu.parse(t, c);
    }
    return r;
  });
} }, ZE = { name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, jE = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(t, A) {
  if (A.type === 20 && A.value === "none" || A.type !== 18)
    return null;
  var e = $E[A.name];
  if (e === void 0)
    throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
  return e(A.values);
} }, qE = function(t) {
  return t = t.filter(function(A) {
    return A.type === 17;
  }).map(function(A) {
    return A.number;
  }), t.length === 6 ? t : null;
}, zE = function(A) {
  var A = A.filter(function(w) {
    return w.type === 17;
  }).map(function(w) {
    return w.number;
  }), e = A[0], r = A[1], i = (A[2], A[3], A[4]), d = A[5], c = (A[6], A[7], A[8], A[9], A[10], A[11], A[12]), l = A[13];
  return A[14], A[15], A.length === 16 ? [e, r, i, d, c, l] : null;
}, $E = { matrix: qE, matrix3d: zE }, cw = { type: 16, number: 50, flags: Ls }, Am = [cw, cw], em = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(t, A) {
  return A = A.filter(_e), A.length !== 2 ? Am : [A[0], A[1]];
} }, tm = { name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "hidden":
      return 1;
    case "collapse":
      return 2;
    default:
      return 0;
  }
} }, nm = (function(t) {
  t.NORMAL = "normal", t.BREAK_ALL = "break-all", t.KEEP_ALL = "keep-all";
}(Jd = Jd || {}), { name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "break-all":
      return Jd.BREAK_ALL;
    case "keep-all":
      return Jd.KEEP_ALL;
    default:
      return Jd.NORMAL;
  }
} }), rm = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(t, A) {
  if (A.type === 20)
    return { auto: !0, order: 0 };
  if (JB(A))
    return { auto: !1, order: A.number };
  throw new Error("Invalid z-index number parsed");
} }, Bw = { name: "time", parse: function(t, A) {
  if (A.type === 15)
    switch (A.unit.toLowerCase()) {
      case "s":
        return 1e3 * A.number;
      case "ms":
        return A.number;
    }
  throw new Error("Unsupported time type");
} }, um = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(t, A) {
  return JB(A) ? A.number : 1;
} }, om = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, im = { name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(pe).map(function(e) {
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
} }, am = { name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function(t, A) {
  var e = [], r = [];
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
        r.push(e.join(" ")), e.length = 0;
    }
  }), e.length && r.push(e.join(" ")), r.map(function(i) {
    return i.indexOf(" ") === -1 ? i : "'" + i + "'";
  });
} }, dm = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" }, sm = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(t, A) {
  return JB(A) ? A.number : !pe(A) || A.value !== "bold" ? 400 : 700;
} }, cm = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.filter(pe).map(function(e) {
    return e.value;
  });
} }, Bm = { name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "oblique":
      return "oblique";
    case "italic":
      return "italic";
    default:
      return "normal";
  }
} }, Ge = function(t, A) {
  return (t & A) != 0;
}, lm = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(gs).map(function(e) {
    return Bw.parse(t, e);
  });
} }, fm = { name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.length === 1 && Nf(A[0], "none") ? [] : Qr(A).map(function(e) {
    for (var r = { color: 255, offsetX: et, offsetY: et, blur: et, spread: et, inset: !1 }, i = 0, d = 0; d < e.length; d++) {
      var c = e[d];
      Nf(c, "inset") ? r.inset = !0 : Ku(c) ? (i === 0 ? r.offsetX = c : i === 1 ? r.offsetY = c : i === 2 ? r.blur = c : r.spread = c, i++) : r.color = Lu.parse(t, c);
    }
    return r;
  });
} }, gm = { name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function(t, A) {
  var e = [];
  return A.filter(pe).forEach(function(r) {
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
} }, wm = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" }, Qm = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(t, A) {
  return gs(A) ? A.number : 0;
} }, Cm = function() {
  function t(A, e) {
    this.animationDuration = uA(A, lm, e.animationDuration), this.backgroundClip = uA(A, J1, e.backgroundClip), this.backgroundColor = uA(A, X1, e.backgroundColor), this.backgroundImage = uA(A, tE, e.backgroundImage), this.backgroundOrigin = uA(A, nE, e.backgroundOrigin), this.backgroundPosition = uA(A, rE, e.backgroundPosition), this.backgroundRepeat = uA(A, uE, e.backgroundRepeat), this.backgroundSize = uA(A, iE, e.backgroundSize), this.borderTopColor = uA(A, dE, e.borderTopColor), this.borderRightColor = uA(A, sE, e.borderRightColor), this.borderBottomColor = uA(A, cE, e.borderBottomColor), this.borderLeftColor = uA(A, BE, e.borderLeftColor), this.borderTopLeftRadius = uA(A, lE, e.borderTopLeftRadius), this.borderTopRightRadius = uA(A, fE, e.borderTopRightRadius), this.borderBottomRightRadius = uA(A, gE, e.borderBottomRightRadius), this.borderBottomLeftRadius = uA(A, wE, e.borderBottomLeftRadius), this.borderTopStyle = uA(A, QE, e.borderTopStyle), this.borderRightStyle = uA(A, CE, e.borderRightStyle), this.borderBottomStyle = uA(A, hE, e.borderBottomStyle), this.borderLeftStyle = uA(A, FE, e.borderLeftStyle), this.borderTopWidth = uA(A, UE, e.borderTopWidth), this.borderRightWidth = uA(A, pE, e.borderRightWidth), this.borderBottomWidth = uA(A, EE, e.borderBottomWidth), this.borderLeftWidth = uA(A, mE, e.borderLeftWidth), this.boxShadow = uA(A, fm, e.boxShadow), this.color = uA(A, DE, e.color), this.direction = uA(A, HE, e.direction), this.display = uA(A, yE, e.display), this.float = uA(A, bE, e.cssFloat), this.fontFamily = uA(A, am, e.fontFamily), this.fontSize = uA(A, dm, e.fontSize), this.fontStyle = uA(A, Bm, e.fontStyle), this.fontVariant = uA(A, cm, e.fontVariant), this.fontWeight = uA(A, sm, e.fontWeight), this.letterSpacing = uA(A, vE, e.letterSpacing), this.lineBreak = uA(A, KE, e.lineBreak), this.lineHeight = uA(A, LE, e.lineHeight), this.listStyleImage = uA(A, xE, e.listStyleImage), this.listStylePosition = uA(A, _E, e.listStylePosition), this.listStyleType = uA(A, SE, e.listStyleType), this.marginTop = uA(A, TE, e.marginTop), this.marginRight = uA(A, OE, e.marginRight), this.marginBottom = uA(A, ME, e.marginBottom), this.marginLeft = uA(A, GE, e.marginLeft), this.opacity = uA(A, um, e.opacity);
    var r = uA(A, kE, e.overflow);
    this.overflowX = r[0], this.overflowY = r[1 < r.length ? 1 : 0], this.overflowWrap = uA(A, RE, e.overflowWrap), this.paddingTop = uA(A, NE, e.paddingTop), this.paddingRight = uA(A, VE, e.paddingRight), this.paddingBottom = uA(A, PE, e.paddingBottom), this.paddingLeft = uA(A, JE, e.paddingLeft), this.paintOrder = uA(A, gm, e.paintOrder), this.position = uA(A, WE, e.position), this.textAlign = uA(A, XE, e.textAlign), this.textDecorationColor = uA(A, om, (r = e.textDecorationColor) != null ? r : e.color), this.textDecorationLine = uA(A, im, (r = e.textDecorationLine) != null ? r : e.textDecoration), this.textShadow = uA(A, YE, e.textShadow), this.textTransform = uA(A, ZE, e.textTransform), this.transform = uA(A, jE, e.transform), this.transformOrigin = uA(A, em, e.transformOrigin), this.visibility = uA(A, tm, e.visibility), this.webkitTextStrokeColor = uA(A, wm, e.webkitTextStrokeColor), this.webkitTextStrokeWidth = uA(A, Qm, e.webkitTextStrokeWidth), this.wordBreak = uA(A, nm, e.wordBreak), this.zIndex = uA(A, rm, e.zIndex);
  }
  return t.prototype.isVisible = function() {
    return 0 < this.display && 0 < this.opacity && this.visibility === 0;
  }, t.prototype.isTransparent = function() {
    return ga(this.backgroundColor);
  }, t.prototype.isTransformed = function() {
    return this.transform !== null;
  }, t.prototype.isPositioned = function() {
    return this.position !== 0;
  }, t.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  }, t.prototype.isFloating = function() {
    return this.float !== 0;
  }, t.prototype.isInlineLevel = function() {
    return Ge(this.display, 4) || Ge(this.display, 33554432) || Ge(this.display, 268435456) || Ge(this.display, 536870912) || Ge(this.display, 67108864) || Ge(this.display, 134217728);
  }, t;
}(), uA = function(t, A, i) {
  var r = new hC(), i = i != null ? i.toString() : A.initialValue, d = (r.write(i), new FC(r.read()));
  switch (A.type) {
    case 2:
      var c = d.parseComponentValue();
      return A.parse(t, pe(c) ? c.value : A.initialValue);
    case 0:
      return A.parse(t, d.parseComponentValue());
    case 1:
      return A.parse(t, d.parseComponentValues());
    case 4:
      return d.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return wl.parse(t, d.parseComponentValue());
        case "color":
          return Lu.parse(t, d.parseComponentValue());
        case "image":
          return Pf.parse(t, d.parseComponentValue());
        case "length":
          var l = d.parseComponentValue();
          return Ku(l) ? l : et;
        case "length-percentage":
          return l = d.parseComponentValue(), _e(l) ? l : et;
        case "time":
          return Bw.parse(t, d.parseComponentValue());
      }
  }
}, hm = "data-html2canvas-debug", Fm = function(t) {
  switch (t.getAttribute(hm)) {
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
}, lw = function(t, A) {
  return t = Fm(t), t === 1 || A === t;
}, hr = function(t, A) {
  this.context = t, this.textNodes = [], this.elements = [], this.flags = 0, lw(A, 3), this.styles = new Cm(t, window.getComputedStyle(A, null)), h4(A) && (this.styles.animationDuration.some(function(e) {
    return 0 < e;
  }) && (A.style.animationDuration = "0s"), this.styles.transform !== null) && (A.style.transform = "none"), this.bounds = c0(this.context, A), lw(A, 4) && (this.flags |= 16);
}, Um = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", fw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ts = typeof Uint8Array > "u" ? [] : new Uint8Array(256), rB = 0; rB < fw.length; rB++)
  ts[fw.charCodeAt(rB)] = rB;
for (var pm = function(t) {
  for (var A, e, r, i, l = 0.75 * t.length, d = t.length, c = 0, l = (t[t.length - 1] === "=" && (l--, t[t.length - 2] === "=") && l--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? ArrayBuffer : Array)(l)), w = Array.isArray(l) ? l : new Uint8Array(l), Q = 0; Q < d; Q += 4)
    A = ts[t.charCodeAt(Q)], e = ts[t.charCodeAt(Q + 1)], r = ts[t.charCodeAt(Q + 2)], i = ts[t.charCodeAt(Q + 3)], w[c++] = A << 2 | e >> 4, w[c++] = (15 & e) << 4 | r >> 2, w[c++] = (3 & r) << 6 | 63 & i;
  return l;
}, Em = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 2)
    e.push(t[r + 1] << 8 | t[r]);
  return e;
}, mm = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 4)
    e.push(t[r + 3] << 24 | t[r + 2] << 16 | t[r + 1] << 8 | t[r]);
  return e;
}, Ho = 5, Jf = 11, Xf = 2, Dm = Jf - Ho, gw = 65536 >> Ho, Hm = 1 << Ho, Wf = Hm - 1, ym = 1024 >> Ho, ww = gw + ym, S2 = ww, Im = 32, bm = ww + Im, vm = 65536 >> Jf, Km = 1 << Dm, Lm = Km - 1, Qw = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, xm = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, _m = function(i, A) {
  var i = pm(i), e = Array.isArray(i) ? mm(i) : new Uint32Array(i), i = Array.isArray(i) ? Em(i) : new Uint16Array(i), r = Qw(i, 12, e[4] / 2), i = e[5] === 2 ? Qw(i, (24 + e[4]) / 2) : xm(e, Math.ceil((24 + e[4]) / 4));
  return new Sm(e[0], e[1], e[2], e[3], r, i);
}, Sm = function() {
  function t(A, e, r, i, d, c) {
    this.initialValue = A, this.errorValue = e, this.highStart = r, this.highValueIndex = i, this.index = d, this.data = c;
  }
  return t.prototype.get = function(A) {
    var e;
    if (0 <= A) {
      if (A < 55296 || 56319 < A && A <= 65535)
        return e = this.index[A >> Ho], this.data[e = (e << Xf) + (A & Wf)];
      if (A <= 65535)
        return e = this.index[gw + (A - 55296 >> Ho)], this.data[e = (e << Xf) + (A & Wf)];
      if (A < this.highStart)
        return e = this.index[e = bm - vm + (A >> Jf)], e = this.index[e += A >> Ho & Lm], this.data[e = (e << Xf) + (A & Wf)];
      if (A <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, t;
}(), Cw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Tm = typeof Uint8Array > "u" ? [] : new Uint8Array(256), uB = 0; uB < Cw.length; uB++)
  Tm[Cw.charCodeAt(uB)] = uB;
var hw, NA, Om = 1, Yf = 2, Zf = 3, Fw = 4, Uw = 5, Mm = 7, pw = 8, jf = 9, qf = 10, Ew = 11, mw = 12, Dw = 13, Hw = 14, zf = 15, Gm = function(t) {
  for (var A = [], e = 0, r = t.length; e < r; ) {
    var i, d = t.charCodeAt(e++);
    55296 <= d && d <= 56319 && e < r ? (64512 & (i = t.charCodeAt(e++))) == 56320 ? A.push(((1023 & d) << 10) + (1023 & i) + 65536) : (A.push(d), e--) : A.push(d);
  }
  return A;
}, km = function() {
  for (var t = [], A = 0; A < arguments.length; A++)
    t[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, t);
  var e = t.length;
  if (!e)
    return "";
  for (var r = [], i = -1, d = ""; ++i < e; ) {
    var c = t[i];
    c <= 65535 ? r.push(c) : r.push(55296 + ((c -= 65536) >> 10), c % 1024 + 56320), (i + 1 === e || 16384 < r.length) && (d += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return d;
}, Rm = _m(Um), Cn = "×", Nm = "÷", Vm = function(t) {
  return Rm.get(t);
}, Pm = function(t, A, c) {
  var r = c - 2, i = A[r], d = A[c - 1], c = A[c];
  if (d === Yf && c === Zf)
    return Cn;
  if (d !== Yf && d !== Zf && d !== Fw && c !== Yf && c !== Zf && c !== Fw) {
    if (d === pw && [pw, jf, Ew, mw].indexOf(c) !== -1 || !(d !== Ew && d !== jf || c !== jf && c !== qf) || (d === mw || d === qf) && c === qf || c === Dw || c === Uw || c === Mm || d === Om)
      return Cn;
    if (d === Dw && c === Hw) {
      for (; i === Uw; )
        i = A[--r];
      if (i === Hw)
        return Cn;
    }
    if (d === zf && c === zf) {
      for (var l = 0; i === zf; )
        l++, i = A[--r];
      if (l % 2 == 0)
        return Cn;
    }
  }
  return Nm;
}, Jm = function(t) {
  var A = Gm(t), e = A.length, r = 0, i = 0, d = A.map(Vm);
  return { next: function() {
    if (e <= r)
      return { done: !0, value: null };
    for (var c, l = Cn; r < e && (l = Pm(A, d, ++r)) === Cn; )
      ;
    return l !== Cn || r === e ? (c = km.apply(null, A.slice(i, r)), i = r, { value: c, done: !1 }) : { done: !0, value: null };
  } };
}, Xm = function(t) {
  for (var A, e = Jm(t), r = []; !(A = e.next()).done; )
    A.value && r.push(A.value.slice());
  return r;
}, Wm = function(t) {
  if (t.createRange) {
    var A = t.createRange();
    if (A.getBoundingClientRect) {
      var e = t.createElement("boundtest"), A = (e.style.height = "123px", e.style.display = "block", t.body.appendChild(e), A.selectNode(e), A.getBoundingClientRect()), A = Math.round(A.height);
      if (t.body.removeChild(e), A === 123)
        return !0;
    }
  }
  return !1;
}, Ym = function(t) {
  var A = t.createElement("boundtest"), e = (A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", t.body.appendChild(A), t.createRange()), r = (A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "", A.firstChild), c = fl(r.data).map(function(l) {
    return ve(l);
  }), i = 0, d = {}, c = c.every(function(g, w) {
    e.setStart(r, i), e.setEnd(r, i + g.length);
    var Q = e.getBoundingClientRect(), g = (i += g.length, Q.x > d.x || Q.y > d.y);
    return d = Q, w === 0 || g;
  });
  return t.body.removeChild(A), c;
}, Zm = function() {
  return new Image().crossOrigin !== void 0;
}, jm = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, qm = function(e) {
  var A = new Image(), e = e.createElement("canvas"), r = e.getContext("2d");
  if (!r)
    return !1;
  A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(A, 0, 0), e.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, yw = function(t) {
  return t[0] === 0 && t[1] === 255 && t[2] === 0 && t[3] === 255;
}, zm = function(t) {
  var i = t.createElement("canvas"), A = (i.width = 100, i.height = 100, i.getContext("2d"));
  if (!A)
    return Promise.reject(!1);
  A.fillStyle = "rgb(0, 255, 0)", A.fillRect(0, 0, 100, 100);
  var e = new Image(), r = i.toDataURL(), i = (e.src = r, Gg(100, 100, 0, 0, e));
  return A.fillStyle = "red", A.fillRect(0, 0, 100, 100), Iw(i).then(function(c) {
    A.drawImage(c, 0, 0);
    var c = A.getImageData(0, 0, 100, 100).data, l = (A.fillStyle = "red", A.fillRect(0, 0, 100, 100), t.createElement("div"));
    return l.style.backgroundImage = "url(" + r + ")", l.style.height = "100px", yw(c) ? Iw(Gg(100, 100, 0, 0, l)) : Promise.reject(!1);
  }).then(function(d) {
    return A.drawImage(d, 0, 0), yw(A.getImageData(0, 0, 100, 100).data);
  }).catch(function() {
    return !1;
  });
}, Gg = function(t, A, e, r, i) {
  var c = "http://www.w3.org/2000/svg", d = document.createElementNS(c, "svg"), c = document.createElementNS(c, "foreignObject");
  return d.setAttributeNS(null, "width", t.toString()), d.setAttributeNS(null, "height", A.toString()), c.setAttributeNS(null, "width", "100%"), c.setAttributeNS(null, "height", "100%"), c.setAttributeNS(null, "x", e.toString()), c.setAttributeNS(null, "y", r.toString()), c.setAttributeNS(null, "externalResourcesRequired", "true"), d.appendChild(c), c.appendChild(i), d;
}, Iw = function(t) {
  return new Promise(function(A, e) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = e, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
  });
}, $t = { get SUPPORT_RANGE_BOUNDS() {
  var t = Wm(document);
  return Object.defineProperty($t, "SUPPORT_RANGE_BOUNDS", { value: t }), t;
}, get SUPPORT_WORD_BREAKING() {
  var t = $t.SUPPORT_RANGE_BOUNDS && Ym(document);
  return Object.defineProperty($t, "SUPPORT_WORD_BREAKING", { value: t }), t;
}, get SUPPORT_SVG_DRAWING() {
  var t = qm(document);
  return Object.defineProperty($t, "SUPPORT_SVG_DRAWING", { value: t }), t;
}, get SUPPORT_FOREIGNOBJECT_DRAWING() {
  var t = typeof Array.from == "function" && typeof window.fetch == "function" ? zm(document) : Promise.resolve(!1);
  return Object.defineProperty($t, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: t }), t;
}, get SUPPORT_CORS_IMAGES() {
  var t = Zm();
  return Object.defineProperty($t, "SUPPORT_CORS_IMAGES", { value: t }), t;
}, get SUPPORT_RESPONSE_TYPE() {
  var t = jm();
  return Object.defineProperty($t, "SUPPORT_RESPONSE_TYPE", { value: t }), t;
}, get SUPPORT_CORS_XHR() {
  var t = "withCredentials" in new XMLHttpRequest();
  return Object.defineProperty($t, "SUPPORT_CORS_XHR", { value: t }), t;
}, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
  var t = !(typeof Intl > "u" || !Intl.Segmenter);
  return Object.defineProperty($t, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: t }), t;
} }, ws = function(t, A) {
  this.text = t, this.bounds = A;
}, $m = function(t, i, e, r) {
  var i = t4(i, e), d = [], c = 0;
  return i.forEach(function(l) {
    var w, Q, g;
    e.textDecorationLine.length || 0 < l.trim().length ? $t.SUPPORT_RANGE_BOUNDS ? 1 < (w = bw(r, c, l.length).getClientRects()).length ? (g = l0(l), Q = 0, g.forEach(function(m) {
      d.push(new ws(m, To.fromDOMRectList(t, bw(r, Q + c, m.length).getClientRects()))), Q += m.length;
    })) : d.push(new ws(l, To.fromDOMRectList(t, w))) : (g = r.splitText(l.length), d.push(new ws(l, A4(t, r))), r = g) : $t.SUPPORT_RANGE_BOUNDS || (r = r.splitText(l.length)), c += l.length;
  }), d;
}, A4 = function(t, A) {
  var e = A.ownerDocument;
  if (e) {
    var e = e.createElement("html2canvaswrapper"), r = (e.appendChild(A.cloneNode(!0)), A.parentNode);
    if (r)
      return r.replaceChild(e, A), A = c0(t, e), e.firstChild && r.replaceChild(e.firstChild, e), A;
  }
  return To.EMPTY;
}, bw = function(t, A, e) {
  var r = t.ownerDocument;
  if (r)
    return (r = r.createRange()).setStart(t, A), r.setEnd(t, A + e), r;
  throw new Error("Node has no owner document");
}, l0 = function(t) {
  var A;
  return $t.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (A = new Intl.Segmenter(void 0, { granularity: "grapheme" }), Array.from(A.segment(t)).map(function(e) {
    return e.segment;
  })) : Xm(t);
}, e4 = function(t, A) {
  var e;
  return $t.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (e = new Intl.Segmenter(void 0, { granularity: "word" }), Array.from(e.segment(t)).map(function(r) {
    return r.segment;
  })) : r4(t, A);
}, t4 = function(t, A) {
  return A.letterSpacing !== 0 ? l0(t) : e4(t, A);
}, n4 = [32, 160, 4961, 65792, 65793, 4153, 4241], r4 = function(t, A) {
  for (var e, r = Op(t, { lineBreak: A.lineBreak, wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak }), i = []; !(e = r.next()).done; )
    (function() {
      var d, c;
      e.value && (d = e.value.slice(), d = fl(d), c = "", d.forEach(function(l) {
        n4.indexOf(l) === -1 ? c += ve(l) : (c.length && i.push(c), i.push(ve(l)), c = "");
      }), c.length) && i.push(c);
    })();
  return i;
}, u4 = function(t, A, e) {
  this.text = o4(A.data, e.textTransform), this.textBounds = $m(t, this.text, e, A);
}, o4 = function(t, A) {
  switch (A) {
    case 1:
      return t.toLowerCase();
    case 3:
      return t.replace(i4, a4);
    case 2:
      return t.toUpperCase();
    default:
      return t;
  }
}, i4 = /(^|\s|:|-|\(|\))([a-z])/g, a4 = function(t, A, e) {
  return 0 < t.length ? A + e.toUpperCase() : t;
}, TC = function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, e.src = r.currentSrc || r.src, e.intrinsicWidth = r.naturalWidth, e.intrinsicHeight = r.naturalHeight, e.context.cache.addImage(e.src), e;
  }
  return Xn(A, t), A;
}(hr), OC = function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, e.canvas = r, e.intrinsicWidth = r.width, e.intrinsicHeight = r.height, e;
  }
  return Xn(A, t), A;
}(hr), MC = function(t) {
  function A(c, r) {
    var i = t.call(this, c, r) || this, d = new XMLSerializer(), c = c0(c, r);
    return r.setAttribute("width", c.width + "px"), r.setAttribute("height", c.height + "px"), i.svg = "data:image/svg+xml," + encodeURIComponent(d.serializeToString(r)), i.intrinsicWidth = r.width.baseVal.value, i.intrinsicHeight = r.height.baseVal.value, i.context.cache.addImage(i.svg), i;
  }
  return Xn(A, t), A;
}(hr), GC = function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, e.value = r.value, e;
  }
  return Xn(A, t), A;
}(hr), kg = function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, e.start = r.start, e.reversed = typeof r.reversed == "boolean" && r.reversed === !0, e;
  }
  return Xn(A, t), A;
}(hr), d4 = [{ type: 15, flags: 0, unit: "px", number: 3 }], s4 = [{ type: 16, flags: 0, number: 50 }], c4 = function(t) {
  return t.width > t.height ? new To(t.left + (t.width - t.height) / 2, t.top, t.height, t.height) : t.width < t.height ? new To(t.left, t.top + (t.height - t.width) / 2, t.width, t.width) : t;
}, B4 = function(t) {
  var A = t.type === l4 ? new Array(t.value.length + 1).join("•") : t.value;
  return A.length === 0 ? t.placeholder || "" : A;
}, Al = "checkbox", el = "radio", l4 = "password", vw = 707406591, Rg = function(t) {
  function A(e, r) {
    var i = t.call(this, e, r) || this;
    switch (i.type = r.type.toLowerCase(), i.checked = r.checked, i.value = B4(r), i.type !== Al && i.type !== el || (i.styles.backgroundColor = 3739148031, i.styles.borderTopColor = i.styles.borderRightColor = i.styles.borderBottomColor = i.styles.borderLeftColor = 2779096575, i.styles.borderTopWidth = i.styles.borderRightWidth = i.styles.borderBottomWidth = i.styles.borderLeftWidth = 1, i.styles.borderTopStyle = i.styles.borderRightStyle = i.styles.borderBottomStyle = i.styles.borderLeftStyle = 1, i.styles.backgroundClip = [0], i.styles.backgroundOrigin = [0], i.bounds = c4(i.bounds)), i.type) {
      case Al:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = d4;
        break;
      case el:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = s4;
    }
    return i;
  }
  return Xn(A, t), A;
}(hr), kC = function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, r = r.options[r.selectedIndex || 0], e.value = r && r.text || "", e;
  }
  return Xn(A, t), A;
}(hr), RC = function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, e.value = r.value, e;
  }
  return Xn(A, t), A;
}(hr), NC = function(t) {
  function A(e, r) {
    var i, d, c = t.call(this, e, r) || this;
    c.src = r.src, c.width = parseInt(r.width, 10) || 0, c.height = parseInt(r.height, 10) || 0, c.backgroundColor = c.styles.backgroundColor;
    try {
      r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement && (c.tree = g4(e, r.contentWindow.document.documentElement), i = r.contentWindow.document.documentElement ? iw(e, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : ys.TRANSPARENT, d = r.contentWindow.document.body ? iw(e, getComputedStyle(r.contentWindow.document.body).backgroundColor) : ys.TRANSPARENT, c.backgroundColor = ga(i) ? ga(d) ? c.styles.backgroundColor : d : i);
    } catch {
    }
    return c;
  }
  return Xn(A, t), A;
}(hr), f4 = ["OL", "UL", "MENU"], XB = function(t, A, e, r) {
  for (var i = A.firstChild; i; i = c) {
    var d, c = i.nextSibling;
    C4(i) && 0 < i.data.trim().length ? e.textNodes.push(new u4(t, i, e.styles)) : PC(i) && (I4(i) && i.assignedNodes ? i.assignedNodes().forEach(function(l) {
      return XB(t, l, e, r);
    }) : (d = VC(t, i)).styles.isVisible() && (w4(i, d, r) ? d.flags |= 4 : Q4(d.styles) && (d.flags |= 2), f4.indexOf(i.tagName) !== -1 && (d.flags |= 8), e.elements.push(d), i.slot, i.shadowRoot ? XB(t, i.shadowRoot, d, r) : XC(i) || JC(i) || WC(i) || XB(t, i, d, r)));
  }
}, VC = function(t, A) {
  return new (H4(A) ? TC : D4(A) ? OC : JC(A) ? MC : U4(A) ? GC : p4(A) ? kg : E4(A) ? Rg : WC(A) ? kC : XC(A) ? RC : y4(A) ? NC : hr)(t, A);
}, g4 = function(t, A) {
  var e = VC(t, A);
  return e.flags |= 4, XB(t, A, e, e), e;
}, w4 = function(t, A, e) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || m4(t) && e.styles.isTransparent();
}, Q4 = function(t) {
  return t.isPositioned() || t.isFloating();
}, C4 = function(t) {
  return t.nodeType === Node.TEXT_NODE;
}, PC = function(t) {
  return t.nodeType === Node.ELEMENT_NODE;
}, h4 = function(t) {
  return PC(t) && t.style !== void 0 && !F4(t);
}, F4 = function(t) {
  return typeof t.className == "object";
}, U4 = function(t) {
  return t.tagName === "LI";
}, p4 = function(t) {
  return t.tagName === "OL";
}, E4 = function(t) {
  return t.tagName === "INPUT";
}, JC = function(t) {
  return t.tagName === "svg";
}, m4 = function(t) {
  return t.tagName === "BODY";
}, D4 = function(t) {
  return t.tagName === "CANVAS";
}, H4 = function(t) {
  return t.tagName === "IMG";
}, y4 = function(t) {
  return t.tagName === "IFRAME";
}, XC = function(t) {
  return t.tagName === "TEXTAREA";
}, WC = function(t) {
  return t.tagName === "SELECT";
}, I4 = function(t) {
  return t.tagName === "SLOT";
}, Kw = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, Lw = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] }, b4 = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] }, v4 = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] }, qi = function(t, A, e, r, i, d) {
  return t < A || e < t ? f0(t, i, 0 < d.length) : r.integers.reduce(function(c, l, w) {
    for (; l <= t; )
      t -= l, c += r.values[w];
    return c;
  }, "") + d;
}, YC = function(t, A, e, r) {
  for (var i = ""; e || t--, i = r(t) + i, A <= (t /= A) * A; )
    ;
  return i;
}, Ie = function(t, A, e, r, i) {
  var d = e - A + 1;
  return (t < 0 ? "-" : "") + (YC(Math.abs(t), d, r, function(c) {
    return ve(Math.floor(c % d) + A);
  }) + i);
}, yo = function(t, A, e) {
  e === void 0 && (e = ". ");
  var r = A.length;
  return YC(Math.abs(t), r, !1, function(i) {
    return A[Math.floor(i % r)];
  }) + e;
}, ia = 1, Cu = 2, hu = 4, ns = 8, Jr = function(t, A, e, r, i, d) {
  if (t < -9999 || 9999 < t)
    return f0(t, 4, 0 < i.length);
  var c = Math.abs(t), l = i;
  if (c === 0)
    return A[0] + l;
  for (var w = 0; 0 < c && w <= 4; w++) {
    var Q = c % 10;
    Q == 0 && Ge(d, ia) && l !== "" ? l = A[Q] + l : 1 < Q || Q == 1 && w === 0 || Q == 1 && w === 1 && Ge(d, Cu) || Q == 1 && w === 1 && Ge(d, hu) && 100 < t || Q == 1 && 1 < w && Ge(d, ns) ? l = A[Q] + (0 < w ? e[w - 1] : "") + l : Q == 1 && 0 < w && (l = e[w - 1] + l), c = Math.floor(c / 10);
  }
  return (t < 0 ? r : "") + l;
}, xw = "十百千萬", _w = "拾佰仟萬", Sw = "マイナス", $f = "마이너스", f0 = function(t, A, e) {
  var r = e ? ". " : "", i = e ? "、" : "", d = e ? ", " : "", c = e ? " " : "";
  switch (A) {
    case 0:
      return "•" + c;
    case 1:
      return "◦" + c;
    case 2:
      return "◾" + c;
    case 5:
      var l = Ie(t, 48, 57, !0, r);
      return l.length < 4 ? "0" + l : l;
    case 4:
      return yo(t, "〇一二三四五六七八九", i);
    case 6:
      return qi(t, 1, 3999, Kw, 3, r).toLowerCase();
    case 7:
      return qi(t, 1, 3999, Kw, 3, r);
    case 8:
      return Ie(t, 945, 969, !1, r);
    case 9:
      return Ie(t, 97, 122, !1, r);
    case 10:
      return Ie(t, 65, 90, !1, r);
    case 11:
      return Ie(t, 1632, 1641, !0, r);
    case 12:
    case 49:
      return qi(t, 1, 9999, Lw, 3, r);
    case 35:
      return qi(t, 1, 9999, Lw, 3, r).toLowerCase();
    case 13:
      return Ie(t, 2534, 2543, !0, r);
    case 14:
    case 30:
      return Ie(t, 6112, 6121, !0, r);
    case 15:
      return yo(t, "子丑寅卯辰巳午未申酉戌亥", i);
    case 16:
      return yo(t, "甲乙丙丁戊己庚辛壬癸", i);
    case 17:
    case 48:
      return Jr(t, "零一二三四五六七八九", xw, "負", i, Cu | hu | ns);
    case 47:
      return Jr(t, "零壹貳參肆伍陸柒捌玖", _w, "負", i, ia | Cu | hu | ns);
    case 42:
      return Jr(t, "零一二三四五六七八九", xw, "负", i, Cu | hu | ns);
    case 41:
      return Jr(t, "零壹贰叁肆伍陆柒捌玖", _w, "负", i, ia | Cu | hu | ns);
    case 26:
      return Jr(t, "〇一二三四五六七八九", "十百千万", Sw, i, 0);
    case 25:
      return Jr(t, "零壱弐参四伍六七八九", "拾百千万", Sw, i, ia | Cu | hu);
    case 31:
      return Jr(t, "영일이삼사오육칠팔구", "십백천만", $f, d, ia | Cu | hu);
    case 33:
      return Jr(t, "零一二三四五六七八九", "十百千萬", $f, d, 0);
    case 32:
      return Jr(t, "零壹貳參四五六七八九", "拾百千", $f, d, ia | Cu | hu);
    case 18:
      return Ie(t, 2406, 2415, !0, r);
    case 20:
      return qi(t, 1, 19999, v4, 3, r);
    case 21:
      return Ie(t, 2790, 2799, !0, r);
    case 22:
      return Ie(t, 2662, 2671, !0, r);
    case 22:
      return qi(t, 1, 10999, b4, 3, r);
    case 23:
      return yo(t, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return yo(t, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return Ie(t, 3302, 3311, !0, r);
    case 28:
      return yo(t, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", i);
    case 29:
      return yo(t, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", i);
    case 34:
      return Ie(t, 3792, 3801, !0, r);
    case 37:
      return Ie(t, 6160, 6169, !0, r);
    case 38:
      return Ie(t, 4160, 4169, !0, r);
    case 39:
      return Ie(t, 2918, 2927, !0, r);
    case 40:
      return Ie(t, 1776, 1785, !0, r);
    case 43:
      return Ie(t, 3046, 3055, !0, r);
    case 44:
      return Ie(t, 3174, 3183, !0, r);
    case 45:
      return Ie(t, 3664, 3673, !0, r);
    case 46:
      return Ie(t, 3872, 3881, !0, r);
    default:
      return Ie(t, 48, 57, !0, r);
  }
}, K4 = (function(t) {
  t[t.BEFORE = 0] = "BEFORE", t[t.AFTER = 1] = "AFTER";
}(hw = hw || {}), function() {
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
}()), AA = function() {
  function t(A, e) {
    this.type = 0, this.x = A, this.y = e;
  }
  return t.prototype.add = function(A, e) {
    return new t(this.x + A, this.y + e);
  }, t;
}(), zi = function(t, A, e) {
  return new AA(t.x + (A.x - t.x) * e, t.y + (A.y - t.y) * e);
}, oB = function() {
  function t(A, e, r, i) {
    this.type = 1, this.start = A, this.startControl = e, this.endControl = r, this.end = i;
  }
  return t.prototype.subdivide = function(l, e) {
    var r = zi(this.start, this.startControl, l), c = zi(this.startControl, this.endControl, l), i = zi(this.endControl, this.end, l), d = zi(r, c, l), c = zi(c, i, l), l = zi(d, c, l);
    return e ? new t(this.start, r, d, l) : new t(l, c, i, this.end);
  }, t.prototype.add = function(A, e) {
    return new t(this.start.add(A, e), this.startControl.add(A, e), this.endControl.add(A, e), this.end.add(A, e));
  }, t.prototype.reverse = function() {
    return new t(this.end, this.endControl, this.startControl, this.start);
  }, t;
}(), Un = function(t) {
  return t.type === 1;
}, L4 = function(t) {
  var P = t.styles, A = t.bounds, e = (r = es(P.borderTopLeftRadius, A.width, A.height))[0], r = r[1], i = (d = es(P.borderTopRightRadius, A.width, A.height))[0], d = d[1], c = (l = es(P.borderBottomRightRadius, A.width, A.height))[0], l = l[1], w = (Q = es(P.borderBottomLeftRadius, A.width, A.height))[0], Q = Q[1];
  (g = []).push((e + i) / A.width), g.push((w + c) / A.width), g.push((r + Q) / A.height), g.push((d + l) / A.height), 1 < (g = Math.max.apply(Math, g)) && (e /= g, r /= g, i /= g, d /= g, c /= g, l /= g, w /= g, Q /= g);
  var g = A.width - i, m = A.height - l, b = A.width - c, v = A.height - Q, K = P.borderTopWidth, I = P.borderRightWidth, S = P.borderBottomWidth, O = P.borderLeftWidth, N = ne(P.paddingTop, t.bounds.width), oA = ne(P.paddingRight, t.bounds.width), q = ne(P.paddingBottom, t.bounds.width), P = ne(P.paddingLeft, t.bounds.width);
  this.topLeftBorderDoubleOuterBox = 0 < e || 0 < r ? fe(A.left + O / 3, A.top + K / 3, e - O / 3, r - K / 3, NA.TOP_LEFT) : new AA(A.left + O / 3, A.top + K / 3), this.topRightBorderDoubleOuterBox = 0 < e || 0 < r ? fe(A.left + g, A.top + K / 3, i - I / 3, d - K / 3, NA.TOP_RIGHT) : new AA(A.left + A.width - I / 3, A.top + K / 3), this.bottomRightBorderDoubleOuterBox = 0 < c || 0 < l ? fe(A.left + b, A.top + m, c - I / 3, l - S / 3, NA.BOTTOM_RIGHT) : new AA(A.left + A.width - I / 3, A.top + A.height - S / 3), this.bottomLeftBorderDoubleOuterBox = 0 < w || 0 < Q ? fe(A.left + O / 3, A.top + v, w - O / 3, Q - S / 3, NA.BOTTOM_LEFT) : new AA(A.left + O / 3, A.top + A.height - S / 3), this.topLeftBorderDoubleInnerBox = 0 < e || 0 < r ? fe(A.left + 2 * O / 3, A.top + 2 * K / 3, e - 2 * O / 3, r - 2 * K / 3, NA.TOP_LEFT) : new AA(A.left + 2 * O / 3, A.top + 2 * K / 3), this.topRightBorderDoubleInnerBox = 0 < e || 0 < r ? fe(A.left + g, A.top + 2 * K / 3, i - 2 * I / 3, d - 2 * K / 3, NA.TOP_RIGHT) : new AA(A.left + A.width - 2 * I / 3, A.top + 2 * K / 3), this.bottomRightBorderDoubleInnerBox = 0 < c || 0 < l ? fe(A.left + b, A.top + m, c - 2 * I / 3, l - 2 * S / 3, NA.BOTTOM_RIGHT) : new AA(A.left + A.width - 2 * I / 3, A.top + A.height - 2 * S / 3), this.bottomLeftBorderDoubleInnerBox = 0 < w || 0 < Q ? fe(A.left + 2 * O / 3, A.top + v, w - 2 * O / 3, Q - 2 * S / 3, NA.BOTTOM_LEFT) : new AA(A.left + 2 * O / 3, A.top + A.height - 2 * S / 3), this.topLeftBorderStroke = 0 < e || 0 < r ? fe(A.left + O / 2, A.top + K / 2, e - O / 2, r - K / 2, NA.TOP_LEFT) : new AA(A.left + O / 2, A.top + K / 2), this.topRightBorderStroke = 0 < e || 0 < r ? fe(A.left + g, A.top + K / 2, i - I / 2, d - K / 2, NA.TOP_RIGHT) : new AA(A.left + A.width - I / 2, A.top + K / 2), this.bottomRightBorderStroke = 0 < c || 0 < l ? fe(A.left + b, A.top + m, c - I / 2, l - S / 2, NA.BOTTOM_RIGHT) : new AA(A.left + A.width - I / 2, A.top + A.height - S / 2), this.bottomLeftBorderStroke = 0 < w || 0 < Q ? fe(A.left + O / 2, A.top + v, w - O / 2, Q - S / 2, NA.BOTTOM_LEFT) : new AA(A.left + O / 2, A.top + A.height - S / 2), this.topLeftBorderBox = 0 < e || 0 < r ? fe(A.left, A.top, e, r, NA.TOP_LEFT) : new AA(A.left, A.top), this.topRightBorderBox = 0 < i || 0 < d ? fe(A.left + g, A.top, i, d, NA.TOP_RIGHT) : new AA(A.left + A.width, A.top), this.bottomRightBorderBox = 0 < c || 0 < l ? fe(A.left + b, A.top + m, c, l, NA.BOTTOM_RIGHT) : new AA(A.left + A.width, A.top + A.height), this.bottomLeftBorderBox = 0 < w || 0 < Q ? fe(A.left, A.top + v, w, Q, NA.BOTTOM_LEFT) : new AA(A.left, A.top + A.height), this.topLeftPaddingBox = 0 < e || 0 < r ? fe(A.left + O, A.top + K, Math.max(0, e - O), Math.max(0, r - K), NA.TOP_LEFT) : new AA(A.left + O, A.top + K), this.topRightPaddingBox = 0 < i || 0 < d ? fe(A.left + Math.min(g, A.width - I), A.top + K, g > A.width + I ? 0 : Math.max(0, i - I), Math.max(0, d - K), NA.TOP_RIGHT) : new AA(A.left + A.width - I, A.top + K), this.bottomRightPaddingBox = 0 < c || 0 < l ? fe(A.left + Math.min(b, A.width - O), A.top + Math.min(m, A.height - S), Math.max(0, c - I), Math.max(0, l - S), NA.BOTTOM_RIGHT) : new AA(A.left + A.width - I, A.top + A.height - S), this.bottomLeftPaddingBox = 0 < w || 0 < Q ? fe(A.left + O, A.top + Math.min(v, A.height - S), Math.max(0, w - O), Math.max(0, Q - S), NA.BOTTOM_LEFT) : new AA(A.left + O, A.top + A.height - S), this.topLeftContentBox = 0 < e || 0 < r ? fe(A.left + O + P, A.top + K + N, Math.max(0, e - (O + P)), Math.max(0, r - (K + N)), NA.TOP_LEFT) : new AA(A.left + O + P, A.top + K + N), this.topRightContentBox = 0 < i || 0 < d ? fe(A.left + Math.min(g, A.width + O + P), A.top + K + N, g > A.width + O + P ? 0 : i - O + P, d - (K + N), NA.TOP_RIGHT) : new AA(A.left + A.width - (I + oA), A.top + K + N), this.bottomRightContentBox = 0 < c || 0 < l ? fe(A.left + Math.min(b, A.width - (O + P)), A.top + Math.min(m, A.height + K + N), Math.max(0, c - (I + oA)), l - (S + q), NA.BOTTOM_RIGHT) : new AA(A.left + A.width - (I + oA), A.top + A.height - (S + q)), this.bottomLeftContentBox = 0 < w || 0 < Q ? fe(A.left + O + P, A.top + v, Math.max(0, w - (O + P)), Q - (S + q), NA.BOTTOM_LEFT) : new AA(A.left + O + P, A.top + A.height - (S + q));
}, fe = (function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 1] = "TOP_RIGHT", t[t.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", t[t.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
}(NA = NA || {}), function(t, A, e, r, i) {
  var d = (Math.sqrt(2) - 1) / 3 * 4, c = e * d, l = r * d, w = t + e, Q = A + r;
  switch (i) {
    case NA.TOP_LEFT:
      return new oB(new AA(t, Q), new AA(t, Q - l), new AA(w - c, A), new AA(w, A));
    case NA.TOP_RIGHT:
      return new oB(new AA(t, A), new AA(t + c, A), new AA(w, Q - l), new AA(w, Q));
    case NA.BOTTOM_RIGHT:
      return new oB(new AA(w, A), new AA(w, A + l), new AA(t + c, Q), new AA(t, Q));
    default:
      return NA.BOTTOM_LEFT, new oB(new AA(w, Q), new AA(w - c, Q), new AA(t, A + l), new AA(t, A));
  }
}), tl = function(t) {
  return [t.topLeftBorderBox, t.topRightBorderBox, t.bottomRightBorderBox, t.bottomLeftBorderBox];
}, x4 = function(t) {
  return [t.topLeftContentBox, t.topRightContentBox, t.bottomRightContentBox, t.bottomLeftContentBox];
}, nl = function(t) {
  return [t.topLeftPaddingBox, t.topRightPaddingBox, t.bottomRightPaddingBox, t.bottomLeftPaddingBox];
}, _4 = function(t, A, e) {
  this.offsetX = t, this.offsetY = A, this.matrix = e, this.type = 0, this.target = 6;
}, iB = function(t, A) {
  this.path = t, this.target = A, this.type = 1;
}, S4 = function(t) {
  this.opacity = t, this.type = 2, this.target = 6;
}, T4 = function(t) {
  return t.type === 0;
}, ZC = function(t) {
  return t.type === 1;
}, O4 = function(t) {
  return t.type === 2;
}, Tw = function(t, A) {
  return t.length === A.length && t.some(function(e, r) {
    return e === A[r];
  });
}, M4 = function(t, A, e, r, i) {
  return t.map(function(d, c) {
    switch (c) {
      case 0:
        return d.add(A, e);
      case 1:
        return d.add(A + r, e);
      case 2:
        return d.add(A + r, e + i);
      case 3:
        return d.add(A, e + i);
    }
    return d;
  });
}, jC = function(t) {
  this.element = t, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
}, qC = function() {
  function t(A, e) {
    var r;
    this.container = A, this.parent = e, this.effects = [], this.curves = new L4(this.container), this.container.styles.opacity < 1 && this.effects.push(new S4(this.container.styles.opacity)), this.container.styles.transform !== null && (A = this.container.bounds.left + this.container.styles.transformOrigin[0].number, e = this.container.bounds.top + this.container.styles.transformOrigin[1].number, r = this.container.styles.transform, this.effects.push(new _4(A, e, r))), this.container.styles.overflowX !== 0 && (A = tl(this.curves), e = nl(this.curves), Tw(A, e) ? this.effects.push(new iB(A, 6)) : (this.effects.push(new iB(A, 2)), this.effects.push(new iB(e, 4))));
  }
  return t.prototype.getEffects = function(A) {
    for (var e = [2, 3].indexOf(this.container.styles.position) === -1, r = this.parent, i = this.effects.slice(0); r; ) {
      var d, c, l = r.effects.filter(function(w) {
        return !ZC(w);
      });
      e || r.container.styles.position !== 0 || !r.parent ? (i.unshift.apply(i, l), e = [2, 3].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0 && (d = tl(r.curves), c = nl(r.curves), Tw(d, c) || i.unshift(new iB(c, 6)))) : i.unshift.apply(i, l), r = r.parent;
    }
    return i.filter(function(w) {
      return Ge(w.target, A);
    });
  }, t;
}(), Ng = function(t, A, e, r) {
  t.container.elements.forEach(function(i) {
    var d, c, l, w, Q = Ge(i.flags, 4), g = Ge(i.flags, 2), m = new qC(i, t), b = (Ge(i.styles.display, 2048) && r.push(m), Ge(i.flags, 8) ? [] : r);
    Q || g ? (g = Q || i.styles.isPositioned() ? e : A, d = new jC(m), i.styles.isPositioned() || i.styles.opacity < 1 || i.styles.isTransformed() ? (c = i.styles.zIndex.order) < 0 ? (l = 0, g.negativeZIndex.some(function(v, K) {
      return c > v.element.container.styles.zIndex.order ? (l = K, !1) : 0 < l;
    }), g.negativeZIndex.splice(l, 0, d)) : 0 < c ? (w = 0, g.positiveZIndex.some(function(v, K) {
      return c >= v.element.container.styles.zIndex.order ? (w = K + 1, !1) : 0 < w;
    }), g.positiveZIndex.splice(w, 0, d)) : g.zeroOrAutoZIndexOrTransformedOrOpacity.push(d) : (i.styles.isFloating() ? g.nonPositionedFloats : g.nonPositionedInlineLevel).push(d), Ng(m, d, Q ? d : e, b)) : ((i.styles.isInlineLevel() ? A.inlineLevel : A.nonInlineLevel).push(m), Ng(m, A, e, b)), Ge(i.flags, 8) && zC(i, b);
  });
}, zC = function(t, A) {
  for (var e = t instanceof kg ? t.start : 1, r = t instanceof kg && t.reversed, i = 0; i < A.length; i++) {
    var d = A[i];
    d.container instanceof GC && typeof d.container.value == "number" && d.container.value !== 0 && (e = d.container.value), d.listValue = f0(e, d.container.styles.listStyleType, !0), e += r ? -1 : 1;
  }
}, G4 = function(A) {
  var A = new qC(A, null), e = new jC(A), r = [];
  return Ng(A, e, e, r), zC(A.container, r), e;
}, Ow = function(t, A) {
  switch (A) {
    case 0:
      return mn(t.topLeftBorderBox, t.topLeftPaddingBox, t.topRightBorderBox, t.topRightPaddingBox);
    case 1:
      return mn(t.topRightBorderBox, t.topRightPaddingBox, t.bottomRightBorderBox, t.bottomRightPaddingBox);
    case 2:
      return mn(t.bottomRightBorderBox, t.bottomRightPaddingBox, t.bottomLeftBorderBox, t.bottomLeftPaddingBox);
    default:
      return mn(t.bottomLeftBorderBox, t.bottomLeftPaddingBox, t.topLeftBorderBox, t.topLeftPaddingBox);
  }
}, k4 = function(t, A) {
  switch (A) {
    case 0:
      return mn(t.topLeftBorderBox, t.topLeftBorderDoubleOuterBox, t.topRightBorderBox, t.topRightBorderDoubleOuterBox);
    case 1:
      return mn(t.topRightBorderBox, t.topRightBorderDoubleOuterBox, t.bottomRightBorderBox, t.bottomRightBorderDoubleOuterBox);
    case 2:
      return mn(t.bottomRightBorderBox, t.bottomRightBorderDoubleOuterBox, t.bottomLeftBorderBox, t.bottomLeftBorderDoubleOuterBox);
    default:
      return mn(t.bottomLeftBorderBox, t.bottomLeftBorderDoubleOuterBox, t.topLeftBorderBox, t.topLeftBorderDoubleOuterBox);
  }
}, R4 = function(t, A) {
  switch (A) {
    case 0:
      return mn(t.topLeftBorderDoubleInnerBox, t.topLeftPaddingBox, t.topRightBorderDoubleInnerBox, t.topRightPaddingBox);
    case 1:
      return mn(t.topRightBorderDoubleInnerBox, t.topRightPaddingBox, t.bottomRightBorderDoubleInnerBox, t.bottomRightPaddingBox);
    case 2:
      return mn(t.bottomRightBorderDoubleInnerBox, t.bottomRightPaddingBox, t.bottomLeftBorderDoubleInnerBox, t.bottomLeftPaddingBox);
    default:
      return mn(t.bottomLeftBorderDoubleInnerBox, t.bottomLeftPaddingBox, t.topLeftBorderDoubleInnerBox, t.topLeftPaddingBox);
  }
}, N4 = function(t, A) {
  switch (A) {
    case 0:
      return aB(t.topLeftBorderStroke, t.topRightBorderStroke);
    case 1:
      return aB(t.topRightBorderStroke, t.bottomRightBorderStroke);
    case 2:
      return aB(t.bottomRightBorderStroke, t.bottomLeftBorderStroke);
    default:
      return aB(t.bottomLeftBorderStroke, t.topLeftBorderStroke);
  }
}, aB = function(t, A) {
  var e = [];
  return Un(t) ? e.push(t.subdivide(0.5, !1)) : e.push(t), Un(A) ? e.push(A.subdivide(0.5, !0)) : e.push(A), e;
}, mn = function(t, A, e, r) {
  var i = [];
  return Un(t) ? i.push(t.subdivide(0.5, !1)) : i.push(t), Un(e) ? i.push(e.subdivide(0.5, !0)) : i.push(e), Un(r) ? i.push(r.subdivide(0.5, !0).reverse()) : i.push(r), Un(A) ? i.push(A.subdivide(0.5, !1).reverse()) : i.push(A), i;
}, $C = function(e) {
  var A = e.bounds, e = e.styles;
  return A.add(e.borderLeftWidth, e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth), -(e.borderTopWidth + e.borderBottomWidth));
}, rl = function(e) {
  var A = e.styles, e = e.bounds, r = ne(A.paddingLeft, e.width), i = ne(A.paddingRight, e.width), d = ne(A.paddingTop, e.width), c = ne(A.paddingBottom, e.width);
  return e.add(r + A.borderLeftWidth, d + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + i), -(A.borderTopWidth + A.borderBottomWidth + d + c));
}, V4 = function(t, A) {
  return t === 0 ? A.bounds : (t === 2 ? rl : $C)(A);
}, P4 = function(t, A) {
  return t === 0 ? A.bounds : (t === 2 ? rl : $C)(A);
}, Ag = function(t, A, d) {
  var r = V4(aa(t.styles.backgroundOrigin, A), t), i = P4(aa(t.styles.backgroundClip, A), t), d = J4(aa(t.styles.backgroundSize, A), d, r), c = d[0], l = d[1], w = es(aa(t.styles.backgroundPosition, A), r.width - c, r.height - l);
  return [X4(aa(t.styles.backgroundRepeat, A), w, d, r, i), Math.round(r.left + w[0]), Math.round(r.top + w[1]), c, l];
}, $i = function(t) {
  return pe(t) && t.value === wa.AUTO;
}, dB = function(t) {
  return typeof t == "number";
}, J4 = function(l, d, e) {
  var r = d[0], i = d[1], d = d[2], c = l[0], l = l[1];
  if (!c)
    return [0, 0];
  if (_e(c) && l && _e(l))
    return [ne(c, e.width), ne(l, e.height)];
  var w = dB(d);
  if (pe(c) && (c.value === wa.CONTAIN || c.value === wa.COVER))
    return dB(d) ? e.width / e.height < d != (c.value === wa.COVER) ? [e.width, e.width / d] : [e.height * d, e.height] : [e.width, e.height];
  var Q = dB(r), g = dB(i), m = Q || g;
  if ($i(c) && (!l || $i(l)))
    return Q && g ? [r, i] : w || m ? m && w ? [Q ? r : i * d, g ? i : r / d] : [Q ? r : e.width, g ? i : e.height] : [e.width, e.height];
  if (w)
    return w = m = 0, _e(c) ? m = ne(c, e.width) : _e(l) && (w = ne(l, e.height)), $i(c) ? m = w * d : l && !$i(l) || (w = m / d), [m, w];
  if (d = null, m = null, _e(c) ? d = ne(c, e.width) : l && _e(l) && (m = ne(l, e.height)), (d = (m = d === null || l && !$i(l) ? m : Q && g ? d / r * i : e.height) !== null && $i(c) ? Q && g ? m / i * r : e.width : d) !== null && m !== null)
    return [d, m];
  throw new Error("Unable to calculate background-size for element");
}, aa = function(t, A) {
  return A = t[A], A === void 0 ? t[0] : A;
}, X4 = function(t, A, e, r, i) {
  var d = A[0], c = A[1], l = e[0], w = e[1];
  switch (t) {
    case 2:
      return [new AA(Math.round(r.left), Math.round(r.top + c)), new AA(Math.round(r.left + r.width), Math.round(r.top + c)), new AA(Math.round(r.left + r.width), Math.round(w + r.top + c)), new AA(Math.round(r.left), Math.round(w + r.top + c))];
    case 3:
      return [new AA(Math.round(r.left + d), Math.round(r.top)), new AA(Math.round(r.left + d + l), Math.round(r.top)), new AA(Math.round(r.left + d + l), Math.round(r.height + r.top)), new AA(Math.round(r.left + d), Math.round(r.height + r.top))];
    case 1:
      return [new AA(Math.round(r.left + d), Math.round(r.top + c)), new AA(Math.round(r.left + d + l), Math.round(r.top + c)), new AA(Math.round(r.left + d + l), Math.round(r.top + c + w)), new AA(Math.round(r.left + d), Math.round(r.top + c + w))];
    default:
      return [new AA(Math.round(i.left), Math.round(i.top)), new AA(Math.round(i.left + i.width), Math.round(i.top)), new AA(Math.round(i.left + i.width), Math.round(i.height + i.top)), new AA(Math.round(i.left), Math.round(i.height + i.top))];
  }
}, W4 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Mw = "Hidden Text", Y4 = function() {
  function t(A) {
    this._data = {}, this._document = A;
  }
  return t.prototype.parseMetrics = function(l, w) {
    var r = this._document.createElement("div"), i = this._document.createElement("img"), d = this._document.createElement("span"), c = this._document.body, l = (r.style.visibility = "hidden", r.style.fontFamily = l, r.style.fontSize = w, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", c.appendChild(r), i.src = W4, i.width = 1, i.height = 1, i.style.margin = "0", i.style.padding = "0", i.style.verticalAlign = "baseline", d.style.fontFamily = l, d.style.fontSize = w, d.style.margin = "0", d.style.padding = "0", d.appendChild(this._document.createTextNode(Mw)), r.appendChild(d), r.appendChild(i), i.offsetTop - d.offsetTop + 2), w = (r.removeChild(d), r.appendChild(this._document.createTextNode(Mw)), r.style.lineHeight = "normal", i.style.verticalAlign = "super", i.offsetTop - r.offsetTop + 2);
    return c.removeChild(r), { baseline: l, middle: w };
  }, t.prototype.getMetrics = function(A, e) {
    var r = A + " " + e;
    return this._data[r] === void 0 && (this._data[r] = this.parseMetrics(A, e)), this._data[r];
  }, t;
}(), Ah = function(t, A) {
  this.context = t, this.options = A;
}, Z4 = 1e4, j4 = (function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, e._activeEffects = [], e.canvas = r.canvas || document.createElement("canvas"), e.ctx = e.canvas.getContext("2d"), r.canvas || (e.canvas.width = Math.floor(r.width * r.scale), e.canvas.height = Math.floor(r.height * r.scale), e.canvas.style.width = r.width + "px", e.canvas.style.height = r.height + "px"), e.fontMetrics = new Y4(document), e.ctx.scale(e.options.scale, e.options.scale), e.ctx.translate(-r.x, -r.y), e.ctx.textBaseline = "bottom", e._activeEffects = [], e.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), e;
  }
  Xn(A, t), A.prototype.applyEffects = function(e) {
    for (var r = this; this._activeEffects.length; )
      this.popEffect();
    e.forEach(function(i) {
      return r.applyEffect(i);
    });
  }, A.prototype.applyEffect = function(e) {
    this.ctx.save(), O4(e) && (this.ctx.globalAlpha = e.opacity), T4(e) && (this.ctx.translate(e.offsetX, e.offsetY), this.ctx.transform(e.matrix[0], e.matrix[1], e.matrix[2], e.matrix[3], e.matrix[4], e.matrix[5]), this.ctx.translate(-e.offsetX, -e.offsetY)), ZC(e) && (this.path(e.path), this.ctx.clip()), this._activeEffects.push(e);
  }, A.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, A.prototype.renderStack = function(e) {
    return Qn(this, void 0, void 0, function() {
      return jt(this, function(r) {
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
  }, A.prototype.renderNode = function(e) {
    return Qn(this, void 0, void 0, function() {
      return jt(this, function(r) {
        switch (r.label) {
          case 0:
            return Ge(e.container.flags, 16), e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
          case 1:
            return r.sent(), [4, this.renderNodeContent(e)];
          case 2:
            r.sent(), r.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, A.prototype.renderTextWithLetterSpacing = function(e, r, i) {
    var d = this;
    r === 0 ? this.ctx.fillText(e.text, e.bounds.left, e.bounds.top + i) : l0(e.text).reduce(function(c, l) {
      return d.ctx.fillText(l, c, e.bounds.top + i), c + d.ctx.measureText(l).width;
    }, e.bounds.left);
  }, A.prototype.createFontStyle = function(e) {
    var r = e.fontVariant.filter(function(c) {
      return c === "normal" || c === "small-caps";
    }).join(""), i = AD(e.fontFamily).join(", "), d = gs(e.fontSize) ? "" + e.fontSize.number + e.fontSize.unit : e.fontSize.number + "px";
    return [[e.fontStyle, r, e.fontWeight, d, i].join(" "), i, d];
  }, A.prototype.renderTextNode = function(e, r) {
    return Qn(this, void 0, void 0, function() {
      var i, d, c, l, w, Q, g = this;
      return jt(this, function(m) {
        return d = this.createFontStyle(r), c = d[0], i = d[1], d = d[2], this.ctx.font = c, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", c = this.fontMetrics.getMetrics(i, d), l = c.baseline, w = c.middle, Q = r.paintOrder, e.textBounds.forEach(function(b) {
          Q.forEach(function(v) {
            switch (v) {
              case 0:
                g.ctx.fillStyle = Je(r.color), g.renderTextWithLetterSpacing(b, r.letterSpacing, l);
                var K = r.textShadow;
                K.length && b.text.trim().length && (K.slice(0).reverse().forEach(function(I) {
                  g.ctx.shadowColor = Je(I.color), g.ctx.shadowOffsetX = I.offsetX.number * g.options.scale, g.ctx.shadowOffsetY = I.offsetY.number * g.options.scale, g.ctx.shadowBlur = I.blur.number, g.renderTextWithLetterSpacing(b, r.letterSpacing, l);
                }), g.ctx.shadowColor = "", g.ctx.shadowOffsetX = 0, g.ctx.shadowOffsetY = 0, g.ctx.shadowBlur = 0), r.textDecorationLine.length && (g.ctx.fillStyle = Je(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(I) {
                  switch (I) {
                    case 1:
                      g.ctx.fillRect(b.bounds.left, Math.round(b.bounds.top + l), b.bounds.width, 1);
                      break;
                    case 2:
                      g.ctx.fillRect(b.bounds.left, Math.round(b.bounds.top), b.bounds.width, 1);
                      break;
                    case 3:
                      g.ctx.fillRect(b.bounds.left, Math.ceil(b.bounds.top + w), b.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                r.webkitTextStrokeWidth && b.text.trim().length && (g.ctx.strokeStyle = Je(r.webkitTextStrokeColor), g.ctx.lineWidth = r.webkitTextStrokeWidth, g.ctx.lineJoin = window.chrome ? "miter" : "round", g.ctx.strokeText(b.text, b.bounds.left, b.bounds.top + l)), g.ctx.strokeStyle = "", g.ctx.lineWidth = 0, g.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, A.prototype.renderReplacedElement = function(e, r, i) {
    var d;
    i && 0 < e.intrinsicWidth && 0 < e.intrinsicHeight && (d = rl(e), r = nl(r), this.path(r), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(i, 0, 0, e.intrinsicWidth, e.intrinsicHeight, d.left, d.top, d.width, d.height), this.ctx.restore());
  }, A.prototype.renderNodeContent = function(e) {
    return Qn(this, void 0, void 0, function() {
      var r, i, d, c, l, w, Q, g, m, b, v, K, I;
      return jt(this, function(S) {
        switch (S.label) {
          case 0:
            this.applyEffects(e.getEffects(4)), r = e.container, i = e.curves, d = r.styles, c = 0, l = r.textNodes, S.label = 1;
          case 1:
            return c < l.length ? (w = l[c], [4, this.renderTextNode(w, d)]) : [3, 4];
          case 2:
            S.sent(), S.label = 3;
          case 3:
            return c++, [3, 1];
          case 4:
            if (!(r instanceof TC))
              return [3, 8];
            S.label = 5;
          case 5:
            return S.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
          case 6:
            return b = S.sent(), this.renderReplacedElement(r, i, b), [3, 8];
          case 7:
            return S.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
          case 8:
            if (r instanceof OC && this.renderReplacedElement(r, i, r.canvas), !(r instanceof MC))
              return [3, 12];
            S.label = 9;
          case 9:
            return S.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
          case 10:
            return b = S.sent(), this.renderReplacedElement(r, i, b), [3, 12];
          case 11:
            return S.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
          case 12:
            return r instanceof NC && r.tree ? [4, new A(this.context, { scale: this.options.scale, backgroundColor: r.backgroundColor, x: 0, y: 0, width: r.width, height: r.height }).render(r.tree)] : [3, 14];
          case 13:
            w = S.sent(), r.width && r.height && this.ctx.drawImage(w, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), S.label = 14;
          case 14:
            if (r instanceof Rg && (Q = Math.min(r.bounds.width, r.bounds.height), r.type === Al ? r.checked && (this.ctx.save(), this.path([new AA(r.bounds.left + 0.39363 * Q, r.bounds.top + 0.79 * Q), new AA(r.bounds.left + 0.16 * Q, r.bounds.top + 0.5549 * Q), new AA(r.bounds.left + 0.27347 * Q, r.bounds.top + 0.44071 * Q), new AA(r.bounds.left + 0.39694 * Q, r.bounds.top + 0.5649 * Q), new AA(r.bounds.left + 0.72983 * Q, r.bounds.top + 0.23 * Q), new AA(r.bounds.left + 0.84 * Q, r.bounds.top + 0.34085 * Q), new AA(r.bounds.left + 0.39363 * Q, r.bounds.top + 0.79 * Q)]), this.ctx.fillStyle = Je(vw), this.ctx.fill(), this.ctx.restore()) : r.type === el && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + Q / 2, r.bounds.top + Q / 2, Q / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = Je(vw), this.ctx.fill(), this.ctx.restore())), j4(r) && r.value.length) {
              switch (Q = this.createFontStyle(d), K = Q[0], v = Q[1], v = this.fontMetrics.getMetrics(K, v).baseline, this.ctx.font = K, this.ctx.fillStyle = Je(d.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = z4(r.styles.textAlign), I = rl(r), g = 0, r.styles.textAlign) {
                case 1:
                  g += I.width / 2;
                  break;
                case 2:
                  g += I.width;
              }
              m = I.add(g, 0, 0, -I.height / 2 + 1), this.ctx.save(), this.path([new AA(I.left, I.top), new AA(I.left + I.width, I.top), new AA(I.left + I.width, I.top + I.height), new AA(I.left, I.top + I.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ws(r.value, m), d.letterSpacing, v), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
            }
            if (!Ge(r.styles.display, 2048))
              return [3, 20];
            if (r.styles.listStyleImage === null)
              return [3, 19];
            if ((m = r.styles.listStyleImage).type !== 0)
              return [3, 18];
            b = void 0, v = m.url, S.label = 15;
          case 15:
            return S.trys.push([15, 17, , 18]), [4, this.context.cache.match(v)];
          case 16:
            return b = S.sent(), this.ctx.drawImage(b, r.bounds.left - (b.width + 10), r.bounds.top), [3, 18];
          case 17:
            return S.sent(), this.context.logger.error("Error loading list-style-image " + v), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            e.listValue && r.styles.listStyleType !== -1 && (K = this.createFontStyle(d)[0], this.ctx.font = K, this.ctx.fillStyle = Je(d.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", I = new To(r.bounds.left, r.bounds.top + ne(r.styles.paddingTop, r.bounds.width), r.bounds.width, sw(d.lineHeight, d.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new ws(e.listValue, I), d.letterSpacing, sw(d.lineHeight, d.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), S.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, A.prototype.renderStackContent = function(e) {
    return Qn(this, void 0, void 0, function() {
      var r, i, d, c, l, w, Q, g, m, b, v, K, I, S, O;
      return jt(this, function(N) {
        switch (N.label) {
          case 0:
            return Ge(e.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(e.element)];
          case 1:
            N.sent(), r = 0, i = e.negativeZIndex, N.label = 2;
          case 2:
            return r < i.length ? (O = i[r], [4, this.renderStack(O)]) : [3, 5];
          case 3:
            N.sent(), N.label = 4;
          case 4:
            return r++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(e.element)];
          case 6:
            N.sent(), d = 0, c = e.nonInlineLevel, N.label = 7;
          case 7:
            return d < c.length ? (O = c[d], [4, this.renderNode(O)]) : [3, 10];
          case 8:
            N.sent(), N.label = 9;
          case 9:
            return d++, [3, 7];
          case 10:
            l = 0, w = e.nonPositionedFloats, N.label = 11;
          case 11:
            return l < w.length ? (O = w[l], [4, this.renderStack(O)]) : [3, 14];
          case 12:
            N.sent(), N.label = 13;
          case 13:
            return l++, [3, 11];
          case 14:
            Q = 0, g = e.nonPositionedInlineLevel, N.label = 15;
          case 15:
            return Q < g.length ? (O = g[Q], [4, this.renderStack(O)]) : [3, 18];
          case 16:
            N.sent(), N.label = 17;
          case 17:
            return Q++, [3, 15];
          case 18:
            m = 0, b = e.inlineLevel, N.label = 19;
          case 19:
            return m < b.length ? (O = b[m], [4, this.renderNode(O)]) : [3, 22];
          case 20:
            N.sent(), N.label = 21;
          case 21:
            return m++, [3, 19];
          case 22:
            v = 0, K = e.zeroOrAutoZIndexOrTransformedOrOpacity, N.label = 23;
          case 23:
            return v < K.length ? (O = K[v], [4, this.renderStack(O)]) : [3, 26];
          case 24:
            N.sent(), N.label = 25;
          case 25:
            return v++, [3, 23];
          case 26:
            I = 0, S = e.positiveZIndex, N.label = 27;
          case 27:
            return I < S.length ? (O = S[I], [4, this.renderStack(O)]) : [3, 30];
          case 28:
            N.sent(), N.label = 29;
          case 29:
            return I++, [3, 27];
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
    var r = this;
    e.forEach(function(i, d) {
      var c = Un(i) ? i.start : i;
      d === 0 ? r.ctx.moveTo(c.x, c.y) : r.ctx.lineTo(c.x, c.y), Un(i) && r.ctx.bezierCurveTo(i.startControl.x, i.startControl.y, i.endControl.x, i.endControl.y, i.end.x, i.end.y);
    });
  }, A.prototype.renderRepeat = function(e, r, i, d) {
    this.path(e), this.ctx.fillStyle = r, this.ctx.translate(i, d), this.ctx.fill(), this.ctx.translate(-i, -d);
  }, A.prototype.resizeImage = function(e, r, i) {
    var d;
    return e.width === r && e.height === i ? e : ((d = ((d = this.canvas.ownerDocument) != null ? d : document).createElement("canvas")).width = Math.max(1, r), d.height = Math.max(1, i), d.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, r, i), d);
  }, A.prototype.renderBackgroundImage = function(e) {
    return Qn(this, void 0, void 0, function() {
      var r, i, d, c, l, w;
      return jt(this, function(Q) {
        switch (Q.label) {
          case 0:
            r = e.styles.backgroundImage.length - 1, i = function(g) {
              var m, b, v, K, I, S, O, N, oA, q, P, wA, Z, IA, DA, JA, we, _A, RA, We, de;
              return jt(this, function(ue) {
                switch (ue.label) {
                  case 0:
                    if (g.type !== 0)
                      return [3, 5];
                    m = void 0, b = g.url, ue.label = 1;
                  case 1:
                    return ue.trys.push([1, 3, , 4]), [4, d.context.cache.match(b)];
                  case 2:
                    return m = ue.sent(), [3, 4];
                  case 3:
                    return ue.sent(), d.context.logger.error("Error loading background-image " + b), [3, 4];
                  case 4:
                    return m && (q = Ag(e, r, [m.width, m.height, m.width / m.height]), S = q[0], wA = q[1], Z = q[2], oA = q[3], q = q[4], K = d.ctx.createPattern(d.resizeImage(m, oA, q), "repeat"), d.renderRepeat(S, K, wA, Z)), [3, 6];
                  case 5:
                    $1(g) ? (P = Ag(e, r, [null, null, null]), S = P[0], wA = P[1], Z = P[2], oA = P[3], q = P[4], P = Y1(g.angle, oA, q), IA = P[0], I = P[1], N = P[2], O = P[3], P = P[4], (JA = document.createElement("canvas")).width = oA, JA.height = q, DA = JA.getContext("2d"), v = DA.createLinearGradient(I, O, N, P), aw(g.stops, IA).forEach(function(se) {
                      return v.addColorStop(se.stop, Je(se.color));
                    }), DA.fillStyle = v, DA.fillRect(0, 0, oA, q), 0 < oA && 0 < q && (K = d.ctx.createPattern(JA, "repeat"), d.renderRepeat(S, K, wA, Z))) : AE(g) && (I = Ag(e, r, [null, null, null]), S = I[0], O = I[1], N = I[2], oA = I[3], q = I[4], P = g.position.length === 0 ? [B0] : g.position, wA = ne(P[0], oA), Z = ne(P[P.length - 1], q), IA = Z1(g, wA, Z, oA, q), DA = IA[0], JA = IA[1], 0 < DA) && 0 < JA && (we = d.ctx.createRadialGradient(O + wA, N + Z, 0, O + wA, N + Z, DA), aw(g.stops, 2 * DA).forEach(function(se) {
                      return we.addColorStop(se.stop, Je(se.color));
                    }), d.path(S), d.ctx.fillStyle = we, DA !== JA ? (_A = e.bounds.left + 0.5 * e.bounds.width, RA = e.bounds.top + 0.5 * e.bounds.height, de = 1 / (We = JA / DA), d.ctx.save(), d.ctx.translate(_A, RA), d.ctx.transform(1, 0, 0, We, 0, 0), d.ctx.translate(-_A, -RA), d.ctx.fillRect(O, de * (N - RA) + RA, oA, q * de), d.ctx.restore()) : d.ctx.fill()), ue.label = 6;
                  case 6:
                    return r--, [2];
                }
              });
            }, d = this, c = 0, l = e.styles.backgroundImage.slice(0).reverse(), Q.label = 1;
          case 1:
            return c < l.length ? (w = l[c], [5, i(w)]) : [3, 4];
          case 2:
            Q.sent(), Q.label = 3;
          case 3:
            return c++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, A.prototype.renderSolidBorder = function(e, r, i) {
    return Qn(this, void 0, void 0, function() {
      return jt(this, function(d) {
        return this.path(Ow(i, r)), this.ctx.fillStyle = Je(e), this.ctx.fill(), [2];
      });
    });
  }, A.prototype.renderDoubleBorder = function(e, r, i, d) {
    return Qn(this, void 0, void 0, function() {
      var c;
      return jt(this, function(l) {
        switch (l.label) {
          case 0:
            return r < 3 ? [4, this.renderSolidBorder(e, i, d)] : [3, 2];
          case 1:
            return l.sent(), [2];
          case 2:
            return c = k4(d, i), this.path(c), this.ctx.fillStyle = Je(e), this.ctx.fill(), c = R4(d, i), this.path(c), this.ctx.fill(), [2];
        }
      });
    });
  }, A.prototype.renderNodeBackgroundAndBorders = function(e) {
    return Qn(this, void 0, void 0, function() {
      var r, i, d, c, l, w, Q, g, m = this;
      return jt(this, function(b) {
        switch (b.label) {
          case 0:
            return this.applyEffects(e.getEffects(2)), r = e.container.styles, i = !ga(r.backgroundColor) || r.backgroundImage.length, d = [{ style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth }, { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth }, { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth }, { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }], c = q4(aa(r.backgroundClip, 0), e.curves), i || r.boxShadow.length ? (this.ctx.save(), this.path(c), this.ctx.clip(), ga(r.backgroundColor) || (this.ctx.fillStyle = Je(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(e.container)]) : [3, 2];
          case 1:
            b.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(v) {
              m.ctx.save();
              var K = tl(e.curves), I = v.inset ? 0 : Z4, S = M4(K, -I + (v.inset ? 1 : -1) * v.spread.number, (v.inset ? 1 : -1) * v.spread.number, v.spread.number * (v.inset ? -2 : 2), v.spread.number * (v.inset ? -2 : 2));
              v.inset ? (m.path(K), m.ctx.clip(), m.mask(S)) : (m.mask(K), m.ctx.clip(), m.path(S)), m.ctx.shadowOffsetX = v.offsetX.number + I, m.ctx.shadowOffsetY = v.offsetY.number, m.ctx.shadowColor = Je(v.color), m.ctx.shadowBlur = v.blur.number, m.ctx.fillStyle = v.inset ? Je(v.color) : "rgba(0,0,0,1)", m.ctx.fill(), m.ctx.restore();
            }), b.label = 2;
          case 2:
            w = l = 0, Q = d, b.label = 3;
          case 3:
            return w < Q.length ? (g = Q[w]).style !== 0 && !ga(g.color) && 0 < g.width ? g.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(g.color, g.width, l, e.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return b.sent(), [3, 11];
          case 5:
            return g.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(g.color, g.width, l, e.curves, 3)];
          case 6:
            return b.sent(), [3, 11];
          case 7:
            return g.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(g.color, g.width, l, e.curves)];
          case 8:
            return b.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(g.color, l, e.curves)];
          case 10:
            b.sent(), b.label = 11;
          case 11:
            l++, b.label = 12;
          case 12:
            return w++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, A.prototype.renderDashedDottedBorder = function(e, r, i, d, c) {
    return Qn(this, void 0, void 0, function() {
      var l, w, Q, g, m, b, v, K, I, S, O;
      return jt(this, function(N) {
        return this.ctx.save(), m = N4(d, i), l = Ow(d, i), c === 2 && (this.path(l), this.ctx.clip()), I = (Un(l[0]) ? (w = l[0].start.x, l[0].start) : (w = l[0].x, l[0])).y, g = (Un(l[1]) ? (Q = l[1].end.x, l[1].end) : (Q = l[1].x, l[1])).y, I = Math.abs(i === 0 || i === 2 ? w - Q : I - g), this.ctx.beginPath(), c === 3 ? this.formatPath(m) : this.formatPath(l.slice(0, 2)), g = r < 3 ? 3 * r : 2 * r, m = r < 3 ? 2 * r : r, c === 3 && (m = g = r), b = !0, I <= 2 * g ? b = !1 : I <= 2 * g + m ? (g *= v = I / (2 * g + m), m *= v) : (v = Math.floor((I + m) / (g + m)), K = (I - v * g) / (v - 1), m = (I = (I - (v + 1) * g) / v) <= 0 || Math.abs(m - K) < Math.abs(m - I) ? K : I), b && (c === 3 ? this.ctx.setLineDash([0, g + m]) : this.ctx.setLineDash([g, m])), c === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = 2 * r + 1.1, this.ctx.strokeStyle = Je(e), this.ctx.stroke(), this.ctx.setLineDash([]), c === 2 && (Un(l[0]) && (S = l[3], O = l[0], this.ctx.beginPath(), this.formatPath([new AA(S.end.x, S.end.y), new AA(O.start.x, O.start.y)]), this.ctx.stroke()), Un(l[1])) && (S = l[1], O = l[2], this.ctx.beginPath(), this.formatPath([new AA(S.end.x, S.end.y), new AA(O.start.x, O.start.y)]), this.ctx.stroke()), this.ctx.restore(), [2];
      });
    });
  }, A.prototype.render = function(e) {
    return Qn(this, void 0, void 0, function() {
      var r;
      return jt(this, function(i) {
        switch (i.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = Je(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = G4(e), [4, this.renderStack(r)];
          case 1:
            return i.sent(), this.applyEffects([]), [2, this.canvas];
        }
      });
    });
  };
}(Ah), function(t) {
  return t instanceof RC || t instanceof kC || t instanceof Rg && t.type !== el && t.type !== Al;
}), q4 = function(t, A) {
  switch (t) {
    case 0:
      return tl(A);
    case 2:
      return x4(A);
    default:
      return nl(A);
  }
}, z4 = function(t) {
  switch (t) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, $4 = ["-apple-system", "system-ui"], AD = function(t) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? t.filter(function(A) {
    return $4.indexOf(A) === -1;
  }) : t;
}, eD = (function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, e.canvas = r.canvas || document.createElement("canvas"), e.ctx = e.canvas.getContext("2d"), e.options = r, e.canvas.width = Math.floor(r.width * r.scale), e.canvas.height = Math.floor(r.height * r.scale), e.canvas.style.width = r.width + "px", e.canvas.style.height = r.height + "px", e.ctx.scale(e.options.scale, e.options.scale), e.ctx.translate(-r.x, -r.y), e.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), e;
  }
  Xn(A, t), A.prototype.render = function(e) {
    return Qn(this, void 0, void 0, function() {
      var r;
      return jt(this, function(i) {
        switch (i.label) {
          case 0:
            return r = Gg(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, e), [4, eD(r)];
          case 1:
            return r = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = Je(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(r, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  };
}(Ah), function(t) {
  return new Promise(function(A, e) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = e, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
  });
});
function Gw() {
  var t;
  return ((t = globalThis == null ? void 0 : globalThis.window) == null ? void 0 : t.devicePixelRatio) || 1;
}
typeof window < "u" && K4.setContext(window), Gw(), Gw();
var eh = function(t, A) {
  return (eh = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(e, r) {
    e.__proto__ = r;
  } : function(e, r) {
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
  }))(t, A);
};
function Wn(t, A) {
  if (typeof A != "function" && A !== null)
    throw new TypeError("Class extends value " + String(A) + " is not a constructor or null");
  function e() {
    this.constructor = t;
  }
  eh(t, A), t.prototype = A === null ? Object.create(A) : (e.prototype = A.prototype, new e());
}
var th = function() {
  return (th = Object.assign || function(t) {
    for (var A, e = 1, r = arguments.length; e < r; e++)
      for (var i in A = arguments[e])
        Object.prototype.hasOwnProperty.call(A, i) && (t[i] = A[i]);
    return t;
  }).apply(this, arguments);
};
function Ht(t, A, e, r) {
  return new (e = e || Promise)(function(i, d) {
    function c(Q) {
      try {
        w(r.next(Q));
      } catch (g) {
        d(g);
      }
    }
    function l(Q) {
      try {
        w(r.throw(Q));
      } catch (g) {
        d(g);
      }
    }
    function w(Q) {
      var g;
      Q.done ? i(Q.value) : ((g = Q.value) instanceof e ? g : new e(function(m) {
        m(g);
      })).then(c, l);
    }
    w((r = r.apply(t, A || [])).next());
  });
}
function gt(t, A) {
  var e, r, i, d = { label: 0, sent: function() {
    if (1 & i[0])
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, c = { next: l(0), throw: l(1), return: l(2) };
  return typeof Symbol == "function" && (c[Symbol.iterator] = function() {
    return this;
  }), c;
  function l(w) {
    return function(Q) {
      var g = [w, Q];
      if (e)
        throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (e = 1, r && (i = 2 & g[0] ? r.return : g[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, g[1])).done)
            return i;
          switch (r = 0, (g = i ? [2 & g[0], i.value] : g)[0]) {
            case 0:
            case 1:
              i = g;
              break;
            case 4:
              return d.label++, { value: g[1], done: !1 };
            case 5:
              d.label++, r = g[1], g = [0];
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
        } catch (m) {
          g = [6, m], r = 0;
        } finally {
          e = i = 0;
        }
      if (5 & g[0])
        throw g[1];
      return { value: g[0] ? g[1] : void 0, done: !0 };
    };
  }
}
function sB(t, A, e) {
  if (e || arguments.length === 2)
    for (var r, i = 0, d = A.length; i < d; i++)
      !r && i in A || ((r = r || Array.prototype.slice.call(A, 0, i))[i] = A[i]);
  return t.concat(r || A);
}
for (var jr = function() {
  function t(A, e, r, i) {
    this.left = A, this.top = e, this.width = r, this.height = i;
  }
  return t.prototype.add = function(A, e, r, i) {
    return new t(this.left + A, this.top + e, this.width + r, this.height + i);
  }, t.fromClientRect = function(A, e) {
    return new t(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height);
  }, t.fromDOMRectList = function(A, e) {
    return e = Array.from(e).find(function(r) {
      return r.width !== 0;
    }), e ? new t(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height) : t.EMPTY;
  }, t.EMPTY = new t(0, 0, 0, 0), t;
}(), Cl = function(t, A) {
  return jr.fromClientRect(t, A.getBoundingClientRect());
}, tD = function(r) {
  var A, e = r.body, r = r.documentElement;
  if (e && r)
    return A = Math.max(Math.max(e.scrollWidth, r.scrollWidth), Math.max(e.offsetWidth, r.offsetWidth), Math.max(e.clientWidth, r.clientWidth)), e = Math.max(Math.max(e.scrollHeight, r.scrollHeight), Math.max(e.offsetHeight, r.offsetHeight), Math.max(e.clientHeight, r.clientHeight)), new jr(0, 0, A, e);
  throw new Error("Unable to get document size");
}, hl = function(t) {
  for (var A = [], e = 0, r = t.length; e < r; ) {
    var i, d = t.charCodeAt(e++);
    55296 <= d && d <= 56319 && e < r ? (64512 & (i = t.charCodeAt(e++))) == 56320 ? A.push(((1023 & d) << 10) + (1023 & i) + 65536) : (A.push(d), e--) : A.push(d);
  }
  return A;
}, Ke = function() {
  for (var t = [], A = 0; A < arguments.length; A++)
    t[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, t);
  var e = t.length;
  if (!e)
    return "";
  for (var r = [], i = -1, d = ""; ++i < e; ) {
    var c = t[i];
    c <= 65535 ? r.push(c) : r.push(55296 + ((c -= 65536) >> 10), c % 1024 + 56320), (i + 1 === e || 16384 < r.length) && (d += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return d;
}, kw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", nD = typeof Uint8Array > "u" ? [] : new Uint8Array(256), cB = 0; cB < kw.length; cB++)
  nD[kw.charCodeAt(cB)] = cB;
for (var Rw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", rs = typeof Uint8Array > "u" ? [] : new Uint8Array(256), BB = 0; BB < Rw.length; BB++)
  rs[Rw.charCodeAt(BB)] = BB;
for (var rD = function(t) {
  for (var A, e, r, i, l = 0.75 * t.length, d = t.length, c = 0, l = (t[t.length - 1] === "=" && (l--, t[t.length - 2] === "=") && l--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? ArrayBuffer : Array)(l)), w = Array.isArray(l) ? l : new Uint8Array(l), Q = 0; Q < d; Q += 4)
    A = rs[t.charCodeAt(Q)], e = rs[t.charCodeAt(Q + 1)], r = rs[t.charCodeAt(Q + 2)], i = rs[t.charCodeAt(Q + 3)], w[c++] = A << 2 | e >> 4, w[c++] = (15 & e) << 4 | r >> 2, w[c++] = (3 & r) << 6 | 63 & i;
  return l;
}, uD = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 2)
    e.push(t[r + 1] << 8 | t[r]);
  return e;
}, oD = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 4)
    e.push(t[r + 3] << 24 | t[r + 2] << 16 | t[r + 1] << 8 | t[r]);
  return e;
}, Io = 5, eg = 11, tg = 2, iD = eg - Io, Nw = 65536 >> Io, aD = 1 << Io, ng = aD - 1, dD = 1024 >> Io, Vw = Nw + dD, T2 = Vw, sD = 32, cD = Vw + sD, BD = 65536 >> eg, lD = 1 << iD, fD = lD - 1, Pw = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, gD = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, wD = function(i, A) {
  var i = rD(i), e = Array.isArray(i) ? oD(i) : new Uint32Array(i), i = Array.isArray(i) ? uD(i) : new Uint16Array(i), r = Pw(i, 12, e[4] / 2), i = e[5] === 2 ? Pw(i, (24 + e[4]) / 2) : gD(e, Math.ceil((24 + e[4]) / 4));
  return new QD(e[0], e[1], e[2], e[3], r, i);
}, QD = function() {
  function t(A, e, r, i, d, c) {
    this.initialValue = A, this.errorValue = e, this.highStart = r, this.highValueIndex = i, this.index = d, this.data = c;
  }
  return t.prototype.get = function(A) {
    var e;
    if (0 <= A) {
      if (A < 55296 || 56319 < A && A <= 65535)
        return e = this.index[A >> Io], this.data[e = (e << tg) + (A & ng)];
      if (A <= 65535)
        return e = this.index[Nw + (A - 55296 >> Io)], this.data[e = (e << tg) + (A & ng)];
      if (A < this.highStart)
        return e = this.index[e = cD - BD + (A >> eg)], e = this.index[e += A >> Io & fD], this.data[e = (e << tg) + (A & ng)];
      if (A <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, t;
}(), Jw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", CD = typeof Uint8Array > "u" ? [] : new Uint8Array(256), lB = 0; lB < Jw.length; lB++)
  CD[Jw.charCodeAt(lB)] = lB;
var hD = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Xw = 50, FD = 1, nh = 2, rh = 3, UD = 4, pD = 5, Ww = 7, uh = 8, Yw = 9, Iu = 10, Vg = 11, Zw = 12, Pg = 13, ED = 14, us = 15, Jg = 16, fB = 17, Xd = 18, mD = 19, jw = 20, Xg = 21, Wd = 22, rg = 23, Aa = 24, zt = 25, os = 26, is = 27, ea = 28, DD = 29, Qs = 30, HD = 31, gB = 32, wB = 33, Wg = 34, Yg = 35, Zg = 36, Is = 37, jg = 38, WB = 39, YB = 40, ug = 41, oh = 42, yD = 43, ID = [9001, 65288], ih = "!", xA = "×", QB = "÷", qg = wD(hD), Xr = [Qs, Zg], zg = [FD, nh, rh, pD], ah = [Iu, uh], qw = [is, os], bD = zg.concat(ah), zw = [jg, WB, YB, Wg, Yg], vD = [us, Pg], KD = function(t, A) {
  A === void 0 && (A = "strict");
  var e = [], r = [], i = [];
  return t.forEach(function(d, c) {
    var l = qg.get(d);
    return Xw < l ? (i.push(!0), l -= Xw) : i.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(d) !== -1 ? (r.push(c), e.push(Jg)) : l !== UD && l !== Vg ? (r.push(c), l === HD ? e.push(A === "strict" ? Xg : Is) : l === oh || l === DD ? e.push(Qs) : l === yD ? e.push(131072 <= d && d <= 196605 || 196608 <= d && d <= 262141 ? Is : Qs) : void e.push(l)) : c !== 0 && bD.indexOf(d = e[c - 1]) === -1 ? (r.push(r[c - 1]), e.push(d)) : (r.push(c), e.push(Qs));
  }), [r, e, i];
}, og = function(t, A, e, r) {
  var i = r[e];
  if (Array.isArray(t) ? t.indexOf(i) !== -1 : t === i)
    for (var d = e; d <= r.length; ) {
      if ((l = r[++d]) === A)
        return !0;
      if (l !== Iu)
        break;
    }
  if (i === Iu)
    for (d = e; 0 < d; ) {
      var c = r[--d];
      if (Array.isArray(t) ? t.indexOf(c) !== -1 : t === c)
        for (var l, w = e; w <= r.length; ) {
          if ((l = r[++w]) === A)
            return !0;
          if (l !== Iu)
            break;
        }
      if (c !== Iu)
        break;
    }
  return !1;
}, $w = function(t, A) {
  for (var e = t; 0 <= e; ) {
    var r = A[e];
    if (r !== Iu)
      return r;
    e--;
  }
  return 0;
}, LD = function(t, A, e, r, d) {
  if (e[r] === 0 || (r -= 1, Array.isArray(d) && d[r] === !0))
    return xA;
  var d = r - 1, c = 1 + r, l = A[r], w = 0 <= d ? A[d] : 0, Q = A[c];
  if (l === nh && Q === rh)
    return xA;
  if (zg.indexOf(l) !== -1)
    return ih;
  if (zg.indexOf(Q) !== -1 || ah.indexOf(Q) !== -1)
    return xA;
  if ($w(r, A) === uh)
    return QB;
  if (qg.get(t[r]) === Vg || (l === gB || l === wB) && qg.get(t[c]) === Vg || l === Ww || Q === Ww || l === Yw || [Iu, Pg, us].indexOf(l) === -1 && Q === Yw || [fB, Xd, mD, Aa, ea].indexOf(Q) !== -1 || $w(r, A) === Wd || og(rg, Wd, r, A) || og([fB, Xd], Xg, r, A) || og(Zw, Zw, r, A))
    return xA;
  if (l === Iu)
    return QB;
  if (l === rg || Q === rg)
    return xA;
  if (Q === Jg || l === Jg)
    return QB;
  if ([Pg, us, Xg].indexOf(Q) !== -1 || l === ED || w === Zg && vD.indexOf(l) !== -1 || l === ea && Q === Zg || Q === jw || Xr.indexOf(Q) !== -1 && l === zt || Xr.indexOf(l) !== -1 && Q === zt || l === is && [Is, gB, wB].indexOf(Q) !== -1 || [Is, gB, wB].indexOf(l) !== -1 && Q === os || Xr.indexOf(l) !== -1 && qw.indexOf(Q) !== -1 || qw.indexOf(l) !== -1 && Xr.indexOf(Q) !== -1 || [is, os].indexOf(l) !== -1 && (Q === zt || [Wd, us].indexOf(Q) !== -1 && A[1 + c] === zt) || [Wd, us].indexOf(l) !== -1 && Q === zt || l === zt && [zt, ea, Aa].indexOf(Q) !== -1)
    return xA;
  if ([zt, ea, Aa, fB, Xd].indexOf(Q) !== -1)
    for (var g = r; 0 <= g; ) {
      if ((m = A[g]) === zt)
        return xA;
      if ([ea, Aa].indexOf(m) === -1)
        break;
      g--;
    }
  if ([is, os].indexOf(Q) !== -1)
    for (var m, g = [fB, Xd].indexOf(l) !== -1 ? d : r; 0 <= g; ) {
      if ((m = A[g]) === zt)
        return xA;
      if ([ea, Aa].indexOf(m) === -1)
        break;
      g--;
    }
  if (jg === l && [jg, WB, Wg, Yg].indexOf(Q) !== -1 || [WB, Wg].indexOf(l) !== -1 && [WB, YB].indexOf(Q) !== -1 || [YB, Yg].indexOf(l) !== -1 && Q === YB || zw.indexOf(l) !== -1 && [jw, os].indexOf(Q) !== -1 || zw.indexOf(Q) !== -1 && l === is || Xr.indexOf(l) !== -1 && Xr.indexOf(Q) !== -1 || l === Aa && Xr.indexOf(Q) !== -1 || Xr.concat(zt).indexOf(l) !== -1 && Q === Wd && ID.indexOf(t[c]) === -1 || Xr.concat(zt).indexOf(Q) !== -1 && l === Xd)
    return xA;
  if (l === ug && Q === ug) {
    for (var b = e[r], v = 1; 0 < b && A[--b] === ug; )
      v++;
    if (v % 2 != 0)
      return xA;
  }
  return l === gB && Q === wB ? xA : QB;
}, xD = function(t, d) {
  var i = KD(t, (d = d || { lineBreak: "normal", wordBreak: "normal" }).lineBreak), e = i[0], r = i[1], i = i[2], d = (d.wordBreak !== "break-all" && d.wordBreak !== "break-word" || (r = r.map(function(c) {
    return [zt, Qs, oh].indexOf(c) !== -1 ? Is : c;
  })), d.wordBreak === "keep-all" ? i.map(function(c, l) {
    return c && 19968 <= t[l] && t[l] <= 40959;
  }) : void 0);
  return [e, r, d];
}, _D = function() {
  function t(A, e, r, i) {
    this.codePoints = A, this.required = e === ih, this.start = r, this.end = i;
  }
  return t.prototype.slice = function() {
    return Ke.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, t;
}(), SD = function(r, A) {
  var e = hl(r), r = xD(e, A), i = r[0], d = r[1], c = r[2], l = e.length, w = 0, Q = 0;
  return { next: function() {
    if (l <= Q)
      return { done: !0, value: null };
    for (var g, m = xA; Q < l && (m = LD(e, d, i, ++Q, c)) === xA; )
      ;
    return m !== xA || Q === l ? (g = new _D(e, m, w, Q), w = Q, { value: g, done: !1 }) : { done: !0, value: null };
  } };
}, TD = 1, OD = 2, xs = 4, AQ = 8, ul = 10, eQ = 47, Cs = 92, MD = 9, GD = 32, CB = 34, Yd = 61, kD = 35, RD = 36, ND = 37, hB = 39, FB = 40, Zd = 41, VD = 95, Mt = 45, PD = 33, JD = 60, XD = 62, WD = 64, YD = 91, ZD = 93, jD = 61, qD = 123, UB = 63, zD = 125, tQ = 124, $D = 126, AH = 128, nQ = 65533, ig = 42, So = 43, eH = 44, tH = 58, nH = 59, bs = 46, rH = 0, uH = 8, oH = 11, iH = 14, aH = 31, dH = 127, wr = -1, dh = 48, sh = 97, ch = 101, sH = 102, cH = 117, BH = 122, Bh = 65, lh = 69, fh = 70, lH = 85, fH = 90, It = function(t) {
  return dh <= t && t <= 57;
}, gH = function(t) {
  return 55296 <= t && t <= 57343;
}, ta = function(t) {
  return It(t) || Bh <= t && t <= fh || sh <= t && t <= sH;
}, wH = function(t) {
  return sh <= t && t <= BH;
}, QH = function(t) {
  return Bh <= t && t <= fH;
}, CH = function(t) {
  return wH(t) || QH(t);
}, hH = function(t) {
  return AH <= t;
}, pB = function(t) {
  return t === ul || t === MD || t === GD;
}, ol = function(t) {
  return CH(t) || hH(t) || t === VD;
}, rQ = function(t) {
  return ol(t) || It(t) || t === Mt;
}, FH = function(t) {
  return rH <= t && t <= uH || t === oH || iH <= t && t <= aH || t === dH;
}, Eu = function(t, A) {
  return t === Cs && A !== ul;
}, EB = function(t, A, e) {
  return t === Mt ? ol(A) || Eu(A, e) : !!ol(t) || !(t !== Cs || !Eu(t, A));
}, ag = function(t, A, e) {
  return t === So || t === Mt ? !!It(A) || A === bs && It(e) : It(t === bs ? A : t);
}, UH = function(t) {
  for (var A = 0, e = 1, r = (t[A] !== So && t[A] !== Mt || (t[A] === Mt && (e = -1), A++), []); It(t[A]); )
    r.push(t[A++]);
  for (var i = r.length ? parseInt(Ke.apply(void 0, r), 10) : 0, d = (t[A] === bs && A++, []); It(t[A]); )
    d.push(t[A++]);
  for (var c = d.length, l = c ? parseInt(Ke.apply(void 0, d), 10) : 0, w = (t[A] !== lh && t[A] !== ch || A++, 1), Q = (t[A] !== So && t[A] !== Mt || (t[A] === Mt && (w = -1), A++), []); It(t[A]); )
    Q.push(t[A++]);
  var g = Q.length ? parseInt(Ke.apply(void 0, Q), 10) : 0;
  return e * (i + l * Math.pow(10, -c)) * Math.pow(10, w * g);
}, pH = { type: 2 }, EH = { type: 3 }, mH = { type: 4 }, DH = { type: 13 }, HH = { type: 8 }, yH = { type: 21 }, IH = { type: 9 }, bH = { type: 10 }, vH = { type: 11 }, KH = { type: 12 }, LH = { type: 14 }, mB = { type: 23 }, xH = { type: 1 }, _H = { type: 25 }, SH = { type: 24 }, TH = { type: 26 }, OH = { type: 27 }, MH = { type: 28 }, GH = { type: 29 }, kH = { type: 31 }, $g = { type: 32 }, gh = function() {
  function t() {
    this._value = [];
  }
  return t.prototype.write = function(A) {
    this._value = this._value.concat(hl(A));
  }, t.prototype.read = function() {
    for (var A = [], e = this.consumeToken(); e !== $g; )
      A.push(e), e = this.consumeToken();
    return A;
  }, t.prototype.consumeToken = function() {
    var A = this.consumeCodePoint();
    switch (A) {
      case CB:
        return this.consumeStringToken(CB);
      case kD:
        var e = this.peekCodePoint(0), r = this.peekCodePoint(1), i = this.peekCodePoint(2);
        if (rQ(e) || Eu(r, i))
          return e = EB(e, r, i) ? OD : TD, { type: 5, value: this.consumeName(), flags: e };
        break;
      case RD:
        if (this.peekCodePoint(0) === Yd)
          return this.consumeCodePoint(), DH;
        break;
      case hB:
        return this.consumeStringToken(hB);
      case FB:
        return pH;
      case Zd:
        return EH;
      case ig:
        if (this.peekCodePoint(0) === Yd)
          return this.consumeCodePoint(), LH;
        break;
      case So:
        if (ag(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case eH:
        return mH;
      case Mt:
        if (r = A, i = this.peekCodePoint(0), e = this.peekCodePoint(1), ag(r, i, e))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (EB(r, i, e))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (i === Mt && e === XD)
          return this.consumeCodePoint(), this.consumeCodePoint(), SH;
        break;
      case bs:
        if (ag(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case eQ:
        if (this.peekCodePoint(0) === ig)
          for (this.consumeCodePoint(); ; ) {
            var d = this.consumeCodePoint();
            if (d === ig && (d = this.consumeCodePoint()) === eQ)
              return this.consumeToken();
            if (d === wr)
              return this.consumeToken();
          }
        break;
      case tH:
        return TH;
      case nH:
        return OH;
      case JD:
        if (this.peekCodePoint(0) === PD && this.peekCodePoint(1) === Mt && this.peekCodePoint(2) === Mt)
          return this.consumeCodePoint(), this.consumeCodePoint(), _H;
        break;
      case WD:
        if (r = this.peekCodePoint(0), i = this.peekCodePoint(1), e = this.peekCodePoint(2), EB(r, i, e))
          return { type: 7, value: this.consumeName() };
        break;
      case YD:
        return MH;
      case Cs:
        if (Eu(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case ZD:
        return GH;
      case jD:
        if (this.peekCodePoint(0) === Yd)
          return this.consumeCodePoint(), HH;
        break;
      case qD:
        return vH;
      case zD:
        return KH;
      case cH:
      case lH:
        return r = this.peekCodePoint(0), i = this.peekCodePoint(1), r !== So || !ta(i) && i !== UB || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case tQ:
        if (this.peekCodePoint(0) === Yd)
          return this.consumeCodePoint(), IH;
        if (this.peekCodePoint(0) === tQ)
          return this.consumeCodePoint(), yH;
        break;
      case $D:
        if (this.peekCodePoint(0) === Yd)
          return this.consumeCodePoint(), bH;
        break;
      case wr:
        return $g;
    }
    return pB(A) ? (this.consumeWhiteSpace(), kH) : It(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : ol(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: Ke(A) };
  }, t.prototype.consumeCodePoint = function() {
    var A = this._value.shift();
    return A === void 0 ? -1 : A;
  }, t.prototype.reconsumeCodePoint = function(A) {
    this._value.unshift(A);
  }, t.prototype.peekCodePoint = function(A) {
    return A >= this._value.length ? -1 : this._value[A];
  }, t.prototype.consumeUnicodeRangeToken = function() {
    for (var A = [], e = this.consumeCodePoint(); ta(e) && A.length < 6; )
      A.push(e), e = this.consumeCodePoint();
    for (var r = !1; e === UB && A.length < 6; )
      A.push(e), e = this.consumeCodePoint(), r = !0;
    if (r)
      return { type: 30, start: parseInt(Ke.apply(void 0, A.map(function(c) {
        return c === UB ? dh : c;
      })), 16), end: parseInt(Ke.apply(void 0, A.map(function(c) {
        return c === UB ? fh : c;
      })), 16) };
    var i = parseInt(Ke.apply(void 0, A), 16);
    if (this.peekCodePoint(0) === Mt && ta(this.peekCodePoint(1))) {
      this.consumeCodePoint();
      for (var e = this.consumeCodePoint(), d = []; ta(e) && d.length < 6; )
        d.push(e), e = this.consumeCodePoint();
      return { type: 30, start: i, end: parseInt(Ke.apply(void 0, d), 16) };
    }
    return { type: 30, start: i, end: i };
  }, t.prototype.consumeIdentLikeToken = function() {
    var A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === FB ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === FB ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }, t.prototype.consumeUrlToken = function() {
    var A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === wr)
      return { type: 22, value: "" };
    var e = this.peekCodePoint(0);
    if (e === hB || e === CB)
      return (e = this.consumeStringToken(this.consumeCodePoint())).type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === wr || this.peekCodePoint(0) === Zd) ? (this.consumeCodePoint(), { type: 22, value: e.value }) : (this.consumeBadUrlRemnants(), mB);
    for (; ; ) {
      var r = this.consumeCodePoint();
      if (r === wr || r === Zd)
        return { type: 22, value: Ke.apply(void 0, A) };
      if (pB(r))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === wr || this.peekCodePoint(0) === Zd ? (this.consumeCodePoint(), { type: 22, value: Ke.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), mB);
      if (r === CB || r === hB || r === FB || FH(r))
        return this.consumeBadUrlRemnants(), mB;
      if (r === Cs) {
        if (!Eu(r, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), mB;
        A.push(this.consumeEscapedCodePoint());
      } else
        A.push(r);
    }
  }, t.prototype.consumeWhiteSpace = function() {
    for (; pB(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, t.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var A = this.consumeCodePoint();
      if (A === Zd || A === wr)
        return;
      Eu(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }, t.prototype.consumeStringSlice = function(A) {
    for (var e = ""; 0 < A; ) {
      var r = Math.min(5e4, A);
      e += Ke.apply(void 0, this._value.splice(0, r)), A -= r;
    }
    return this._value.shift(), e;
  }, t.prototype.consumeStringToken = function(A) {
    for (var e = "", r = 0; ; ) {
      var i, d = this._value[r];
      if (d === wr || d === void 0 || d === A)
        return { type: 0, value: e += this.consumeStringSlice(r) };
      if (d === ul)
        return this._value.splice(0, r), xH;
      d === Cs && (i = this._value[r + 1]) !== wr && i !== void 0 && (i === ul ? (e += this.consumeStringSlice(r), r = -1, this._value.shift()) : Eu(d, i) && (e = (e += this.consumeStringSlice(r)) + Ke(this.consumeEscapedCodePoint()), r = -1)), r++;
    }
  }, t.prototype.consumeNumber = function() {
    var A = [], e = xs;
    for ((r = this.peekCodePoint(0)) !== So && r !== Mt || A.push(this.consumeCodePoint()); It(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    var r = this.peekCodePoint(0), i = this.peekCodePoint(1);
    if (r === bs && It(i))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = AQ; It(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    r = this.peekCodePoint(0);
    var i = this.peekCodePoint(1), d = this.peekCodePoint(2);
    if ((r === lh || r === ch) && ((i === So || i === Mt) && It(d) || It(i)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = AQ; It(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [UH(A), e];
  }, t.prototype.consumeNumericToken = function() {
    var e = this.consumeNumber(), A = e[0], e = e[1], r = this.peekCodePoint(0), i = this.peekCodePoint(1), d = this.peekCodePoint(2);
    return EB(r, i, d) ? { type: 15, number: A, flags: e, unit: this.consumeName() } : r === ND ? (this.consumeCodePoint(), { type: 16, number: A, flags: e }) : { type: 17, number: A, flags: e };
  }, t.prototype.consumeEscapedCodePoint = function() {
    var A = this.consumeCodePoint();
    if (ta(A)) {
      for (var e = Ke(A); ta(this.peekCodePoint(0)) && e.length < 6; )
        e += Ke(this.consumeCodePoint());
      pB(this.peekCodePoint(0)) && this.consumeCodePoint();
      var r = parseInt(e, 16);
      return r === 0 || gH(r) || 1114111 < r ? nQ : r;
    }
    return A === wr ? nQ : A;
  }, t.prototype.consumeName = function() {
    for (var A = ""; ; ) {
      var e = this.consumeCodePoint();
      if (rQ(e))
        A += Ke(e);
      else {
        if (!Eu(e, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(e), A;
        A += Ke(this.consumeEscapedCodePoint());
      }
    }
  }, t;
}(), wh = function() {
  function t(A) {
    this._tokens = A;
  }
  return t.create = function(A) {
    var e = new gh();
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
    for (var e = { type: A, values: [] }, r = this.consumeToken(); ; ) {
      if (r.type === 32 || NH(r, A))
        return e;
      this.reconsumeToken(r), e.values.push(this.consumeComponentValue()), r = this.consumeToken();
    }
  }, t.prototype.consumeFunction = function(A) {
    for (var e = { name: A.value, values: [], type: 18 }; ; ) {
      var r = this.consumeToken();
      if (r.type === 32 || r.type === 3)
        return e;
      this.reconsumeToken(r), e.values.push(this.consumeComponentValue());
    }
  }, t.prototype.consumeToken = function() {
    var A = this._tokens.shift();
    return A === void 0 ? $g : A;
  }, t.prototype.reconsumeToken = function(A) {
    this._tokens.unshift(A);
  }, t;
}(), hs = function(t) {
  return t.type === 15;
}, da = function(t) {
  return t.type === 17;
}, WA = function(t) {
  return t.type === 20;
}, RH = function(t) {
  return t.type === 0;
}, dg = function(t, A) {
  return WA(t) && t.value === A;
}, uQ = function(t) {
  return t.type !== 31;
}, Ca = function(t) {
  return t.type !== 31 && t.type !== 4;
}, Cr = function(t) {
  var A = [], e = [];
  return t.forEach(function(r) {
    if (r.type === 4) {
      if (e.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      A.push(e), e = [];
    } else
      r.type !== 31 && e.push(r);
  }), e.length && A.push(e), A;
}, NH = function(t, A) {
  return A === 11 && t.type === 12 || A === 28 && t.type === 29 || A === 2 && t.type === 3;
}, xu = function(t) {
  return t.type === 17 || t.type === 15;
}, Se = function(t) {
  return t.type === 16 || xu(t);
}, oQ = function(t) {
  return 1 < t.length ? [t[0], t[1]] : [t[0]];
}, tt = { type: 17, number: 0, flags: xs }, g0 = { type: 16, number: 50, flags: xs }, bu = { type: 16, number: 100, flags: xs }, as = function(i, A, e) {
  var r = i[0], i = i[1];
  return [re(r, A), re(i !== void 0 ? i : r, e)];
}, re = function(t, A) {
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
}, Qh = "deg", Ch = "grad", hh = "rad", Fh = "turn", Fl = { name: "angle", parse: function(t, A) {
  if (A.type === 15)
    switch (A.unit) {
      case Qh:
        return Math.PI * A.number / 180;
      case Ch:
        return Math.PI / 200 * A.number;
      case hh:
        return A.number;
      case Fh:
        return 2 * Math.PI * A.number;
    }
  throw new Error("Unsupported angle type");
} }, Uh = function(t) {
  return t.type === 15 && (t.unit === Qh || t.unit === Ch || t.unit === hh || t.unit === Fh);
}, ph = function(t) {
  switch (t.filter(WA).map(function(A) {
    return A.value;
  }).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [tt, tt];
    case "to top":
    case "bottom":
      return Dn(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [tt, bu];
    case "to right":
    case "left":
      return Dn(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [bu, bu];
    case "to bottom":
    case "top":
      return Dn(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [bu, tt];
    case "to left":
    case "right":
      return Dn(270);
  }
  return 0;
}, Dn = function(t) {
  return Math.PI * t / 180;
}, _u = { name: "color", parse: function(t, A) {
  if (A.type === 18) {
    var e = VH[A.name];
    if (e === void 0)
      throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
    return e(t, A.values);
  }
  if (A.type === 5) {
    var r, i, d, c;
    if (A.value.length === 3)
      return r = A.value.substring(0, 1), i = A.value.substring(1, 2), d = A.value.substring(2, 3), vu(parseInt(r + r, 16), parseInt(i + i, 16), parseInt(d + d, 16), 1);
    if (A.value.length === 4)
      return r = A.value.substring(0, 1), i = A.value.substring(1, 2), d = A.value.substring(2, 3), c = A.value.substring(3, 4), vu(parseInt(r + r, 16), parseInt(i + i, 16), parseInt(d + d, 16), parseInt(c + c, 16) / 255);
    if (A.value.length === 6)
      return r = A.value.substring(0, 2), i = A.value.substring(2, 4), d = A.value.substring(4, 6), vu(parseInt(r, 16), parseInt(i, 16), parseInt(d, 16), 1);
    if (A.value.length === 8)
      return r = A.value.substring(0, 2), i = A.value.substring(2, 4), d = A.value.substring(4, 6), c = A.value.substring(6, 8), vu(parseInt(r, 16), parseInt(i, 16), parseInt(d, 16), parseInt(c, 16) / 255);
  }
  return A.type === 20 && (e = Zr[A.value.toUpperCase()], e !== void 0) ? e : Zr.TRANSPARENT;
} }, Su = function(t) {
  return (255 & t) == 0;
}, Xe = function(i) {
  var A = 255 & i, e = 255 & i >> 8, r = 255 & i >> 16, i = 255 & i >> 24;
  return A < 255 ? "rgba(" + i + "," + r + "," + e + "," + A / 255 + ")" : "rgb(" + i + "," + r + "," + e + ")";
}, vu = function(t, A, e, r) {
  return (t << 24 | A << 16 | e << 8 | Math.round(255 * r) << 0) >>> 0;
}, iQ = function(t, A) {
  var e;
  return t.type === 17 ? t.number : t.type === 16 ? (e = A === 3 ? 1 : 255, A === 3 ? t.number / 100 * e : Math.round(t.number / 100 * e)) : 0;
}, aQ = function(t, d) {
  var e, r, i, d = d.filter(Ca);
  return d.length === 3 ? (e = (i = d.map(iQ))[0], r = i[1], i = i[2], vu(e, r, i, 1)) : d.length === 4 ? (e = (d = d.map(iQ))[0], r = d[1], i = d[2], d = d[3], vu(e, r, i, d)) : 0;
};
function sg(t, A, e) {
  return e < 0 && (e += 1), 1 <= e && --e, e < 1 / 6 ? (A - t) * e * 6 + t : e < 0.5 ? A : e < 2 / 3 ? 6 * (A - t) * (2 / 3 - e) + t : t;
}
var dQ = function(i, r) {
  var e, r = r.filter(Ca), d = r[0], c = r[1], l = r[2], r = r[3], i = (d.type === 17 ? Dn(d.number) : Fl.parse(i, d)) / (2 * Math.PI), d = Se(c) ? c.number / 100 : 0, c = Se(l) ? l.number / 100 : 0, l = r !== void 0 && Se(r) ? re(r, 1) : 1;
  return d == 0 ? vu(255 * c, 255 * c, 255 * c, 1) : (d = sg(c = 2 * c - (r = c <= 0.5 ? c * (1 + d) : c + d - c * d), r, i + 1 / 3), e = sg(c, r, i), c = sg(c, r, i - 1 / 3), vu(255 * d, 255 * e, 255 * c, l));
}, VH = { hsl: dQ, hsla: dQ, rgb: aQ, rgba: aQ }, Fs = function(t, A) {
  return _u.parse(t, wh.create(A).parseComponentValue());
}, Zr = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, PH = { name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function(t, A) {
  return A.map(function(e) {
    if (WA(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, JH = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Ul = function(t, A) {
  return t = _u.parse(t, A[0]), A = A[1], A && Se(A) ? { color: t, stop: A } : { color: t, stop: null };
}, sQ = function(t, A) {
  for (var e = t[0], r = t[t.length - 1], i = (e.stop === null && (e.stop = tt), r.stop === null && (r.stop = bu), []), d = 0, c = 0; c < t.length; c++) {
    var l = t[c].stop;
    l !== null ? (l = re(l, A), i.push(d < l ? l : d), d = l) : i.push(null);
  }
  for (var w = null, c = 0; c < i.length; c++) {
    var Q = i[c];
    if (Q === null)
      w === null && (w = c);
    else if (w !== null) {
      for (var g = c - w, m = (Q - i[w - 1]) / (1 + g), b = 1; b <= g; b++)
        i[w + b - 1] = m * b;
      w = null;
    }
  }
  return t.map(function(v, K) {
    return { color: v.color, stop: Math.max(Math.min(1, i[K] / A), 0) };
  });
}, XH = function(t, i, e) {
  var d = i / 2, r = e / 2, i = re(t[0], i) - d, d = r - re(t[1], e);
  return (Math.atan2(d, i) + 2 * Math.PI) % (2 * Math.PI);
}, WH = function(w, i, d) {
  var w = typeof w == "number" ? w : XH(w, i, d), r = Math.abs(i * Math.sin(w)) + Math.abs(d * Math.cos(w)), i = i / 2, d = d / 2, c = r / 2, l = Math.sin(w - Math.PI / 2) * c, w = Math.cos(w - Math.PI / 2) * c;
  return [r, i - w, i + w, d - l, d + l];
}, Jn = function(t, A) {
  return Math.sqrt(t * t + A * A);
}, cQ = function(t, A, e, r, i) {
  return [[0, 0], [0, A], [t, 0], [t, A]].reduce(function(d, c) {
    var w = c[0], l = c[1], w = Jn(e - w, r - l);
    return (i ? w < d.optimumDistance : w > d.optimumDistance) ? { optimumCorner: c, optimumDistance: w } : d;
  }, { optimumDistance: i ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, YH = function(t, A, e, r, i) {
  var d, c, l, w, Q = 0, g = 0;
  switch (t.size) {
    case 0:
      t.shape === 0 ? Q = g = Math.min(Math.abs(A), Math.abs(A - r), Math.abs(e), Math.abs(e - i)) : t.shape === 1 && (Q = Math.min(Math.abs(A), Math.abs(A - r)), g = Math.min(Math.abs(e), Math.abs(e - i)));
      break;
    case 2:
      t.shape === 0 ? Q = g = Math.min(Jn(A, e), Jn(A, e - i), Jn(A - r, e), Jn(A - r, e - i)) : t.shape === 1 && (d = Math.min(Math.abs(e), Math.abs(e - i)) / Math.min(Math.abs(A), Math.abs(A - r)), l = (w = cQ(r, i, A, e, !0))[0], w = w[1], g = d * (Q = Jn(l - A, (w - e) / d)));
      break;
    case 1:
      t.shape === 0 ? Q = g = Math.max(Math.abs(A), Math.abs(A - r), Math.abs(e), Math.abs(e - i)) : t.shape === 1 && (Q = Math.max(Math.abs(A), Math.abs(A - r)), g = Math.max(Math.abs(e), Math.abs(e - i)));
      break;
    case 3:
      t.shape === 0 ? Q = g = Math.max(Jn(A, e), Jn(A, e - i), Jn(A - r, e), Jn(A - r, e - i)) : t.shape === 1 && (d = Math.max(Math.abs(e), Math.abs(e - i)) / Math.max(Math.abs(A), Math.abs(A - r)), l = (c = cQ(r, i, A, e, !1))[0], w = c[1], g = d * (Q = Jn(l - A, (w - e) / d)));
  }
  return Array.isArray(t.size) && (Q = re(t.size[0], r), g = t.size.length === 2 ? re(t.size[1], i) : Q), [Q, g];
}, ZH = function(t, A) {
  var e = Dn(180), r = [];
  return Cr(A).forEach(function(i, d) {
    if (d === 0) {
      if (d = i[0], d.type === 20 && d.value === "to")
        return void (e = ph(i));
      if (Uh(d))
        return void (e = Fl.parse(t, d));
    }
    d = Ul(t, i), r.push(d);
  }), { angle: e, stops: r, type: 1 };
}, DB = function(t, A) {
  var e = Dn(180), r = [];
  return Cr(A).forEach(function(i, d) {
    if (d === 0) {
      if (d = i[0], d.type === 20 && ["top", "left", "right", "bottom"].indexOf(d.value) !== -1)
        return void (e = ph(i));
      if (Uh(d))
        return void (e = (Fl.parse(t, d) + Dn(270)) % Dn(360));
    }
    d = Ul(t, i), r.push(d);
  }), { angle: e, stops: r, type: 1 };
}, jH = function(t, A) {
  var e = Dn(180), r = [], i = 1;
  return Cr(A).forEach(function(w, c) {
    var l, w = w[0];
    if (c === 0) {
      if (WA(w) && w.value === "linear")
        return void (i = 1);
      if (WA(w) && w.value === "radial")
        return void (i = 2);
    }
    w.type === 18 && (w.name === "from" ? (l = _u.parse(t, w.values[0]), r.push({ stop: tt, color: l })) : w.name === "to" ? (l = _u.parse(t, w.values[0]), r.push({ stop: bu, color: l })) : w.name === "color-stop" && (c = w.values.filter(Ca)).length === 2 && (l = _u.parse(t, c[1]), w = c[0], da(w)) && r.push({ stop: { type: 16, number: 100 * w.number, flags: w.flags }, color: l }));
  }), i === 1 ? { angle: (e + Dn(180)) % Dn(360), stops: r, type: i } : { size: 3, shape: 0, stops: r, position: [], type: i };
}, Eh = "closest-side", mh = "farthest-side", Dh = "closest-corner", Hh = "farthest-corner", yh = "circle", Ih = "ellipse", bh = "cover", vh = "contain", qH = function(t, A) {
  var e = 0, r = 3, i = [], d = [];
  return Cr(A).forEach(function(c, l) {
    var w, Q = !0;
    l === 0 && (w = !1, Q = c.reduce(function(g, m) {
      if (w)
        if (WA(m))
          switch (m.value) {
            case "center":
              return d.push(g0), g;
            case "top":
            case "left":
              return d.push(tt), g;
            case "right":
            case "bottom":
              return d.push(bu), g;
          }
        else
          (Se(m) || xu(m)) && d.push(m);
      else if (WA(m))
        switch (m.value) {
          case yh:
            return e = 0, !1;
          case Ih:
            return !(e = 1);
          case "at":
            return !(w = !0);
          case Eh:
            return r = 0, !1;
          case bh:
          case mh:
            return !(r = 1);
          case vh:
          case Dh:
            return !(r = 2);
          case Hh:
            return !(r = 3);
        }
      else if (xu(m) || Se(m))
        return (r = Array.isArray(r) ? r : []).push(m), !1;
      return g;
    }, Q)), Q && (l = Ul(t, c), i.push(l));
  }), { size: r, shape: e, stops: i, position: d, type: 2 };
}, HB = function(t, A) {
  var e = 0, r = 3, i = [], d = [];
  return Cr(A).forEach(function(c, l) {
    var w = !0;
    l === 0 ? w = c.reduce(function(Q, g) {
      if (WA(g))
        switch (g.value) {
          case "center":
            return d.push(g0), !1;
          case "top":
          case "left":
            return d.push(tt), !1;
          case "right":
          case "bottom":
            return d.push(bu), !1;
        }
      else if (Se(g) || xu(g))
        return d.push(g), !1;
      return Q;
    }, w) : l === 1 && (w = c.reduce(function(Q, g) {
      if (WA(g))
        switch (g.value) {
          case yh:
            return e = 0, !1;
          case Ih:
            return !(e = 1);
          case vh:
          case Eh:
            return r = 0, !1;
          case mh:
            return !(r = 1);
          case Dh:
            return !(r = 2);
          case bh:
          case Hh:
            return !(r = 3);
        }
      else if (xu(g) || Se(g))
        return (r = Array.isArray(r) ? r : []).push(g), !1;
      return Q;
    }, w)), w && (l = Ul(t, c), i.push(l));
  }), { size: r, shape: e, stops: i, position: d, type: 2 };
}, zH = function(t) {
  return t.type === 1;
}, $H = function(t) {
  return t.type === 2;
}, cg = { name: "image", parse: function(t, A) {
  if (A.type === 22)
    return e = { url: A.value, type: 0 }, t.cache.addImage(A.value), e;
  if (A.type !== 18)
    throw new Error("Unsupported image type " + A.type);
  var e = Kh[A.name];
  if (e === void 0)
    throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
  return e(t, A.values);
} };
function Ay(t) {
  return !(t.type === 20 && t.value === "none" || t.type === 18 && !Kh[t.name]);
}
for (var Qa, yB, jd, Kh = { "linear-gradient": ZH, "-moz-linear-gradient": DB, "-ms-linear-gradient": DB, "-o-linear-gradient": DB, "-webkit-linear-gradient": DB, "radial-gradient": qH, "-moz-radial-gradient": HB, "-ms-radial-gradient": HB, "-o-radial-gradient": HB, "-webkit-radial-gradient": HB, "-webkit-gradient": jH }, ey = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  var e;
  return A.length === 0 || (e = A[0]).type === 20 && e.value === "none" ? [] : A.filter(function(r) {
    return Ca(r) && Ay(r);
  }).map(function(r) {
    return cg.parse(t, r);
  });
} }, ty = { name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function(t, A) {
  return A.map(function(e) {
    if (WA(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, ny = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(t, A) {
  return Cr(A).map(function(e) {
    return e.filter(Se);
  }).map(oQ);
} }, ry = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(t, A) {
  return Cr(A).map(function(e) {
    return e.filter(WA).map(function(r) {
      return r.value;
    }).join(" ");
  }).map(uy);
} }, uy = function(t) {
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
}, oy = (function(t) {
  t.AUTO = "auto", t.CONTAIN = "contain", t.COVER = "cover";
}(Qa = Qa || {}), { name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function(t, A) {
  return Cr(A).map(function(e) {
    return e.filter(iy);
  });
} }), iy = function(t) {
  return WA(t) || Se(t);
}, IB = function(t) {
  return { name: "border-" + t + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
}, ay = IB("top"), dy = IB("right"), sy = IB("bottom"), cy = IB("left"), bB = function(t) {
  return { name: "border-radius-" + t, initialValue: "0 0", prefix: !1, type: 1, parse: function(A, e) {
    return oQ(e.filter(Se));
  } };
}, By = bB("top-left"), ly = bB("top-right"), fy = bB("bottom-right"), gy = bB("bottom-left"), vB = function(t) {
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
}, wy = vB("top"), Qy = vB("right"), Cy = vB("bottom"), hy = vB("left"), KB = function(t) {
  return { name: "border-" + t + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(A, e) {
    return hs(e) ? e.number : 0;
  } };
}, Fy = KB("top"), Uy = KB("right"), py = KB("bottom"), Ey = KB("left"), my = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Dy = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "rtl" ? 0 : 1;
} }, Hy = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(WA).reduce(function(e, r) {
    return e | yy(r.value);
  }, 0);
} }, yy = function(t) {
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
}, Iy = { name: "float", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
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
} }, by = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(t, A) {
  return A.type === 20 && A.value === "normal" || A.type !== 17 && A.type !== 15 ? 0 : A.number;
} }, vy = (function(t) {
  t.NORMAL = "normal", t.STRICT = "strict";
}(yB = yB || {}), { name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "strict" ? yB.NORMAL : yB.STRICT;
} }), Ky = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 }, BQ = function(t, A) {
  return WA(t) && t.value === "normal" ? 1.2 * A : t.type === 17 ? A * t.number : Se(t) ? re(t, A) : A;
}, Ly = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(t, A) {
  return A.type === 20 && A.value === "none" ? null : cg.parse(t, A);
} }, xy = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "inside" ? 1 : 0;
} }, A0 = { name: "list-style-type", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
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
} }, LB = function(t) {
  return { name: "margin-" + t, initialValue: "0", prefix: !1, type: 4 };
}, _y = LB("top"), Sy = LB("right"), Ty = LB("bottom"), Oy = LB("left"), My = { name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(WA).map(function(e) {
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
} }, Gy = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "break-word" ? "normal" : "break-word";
} }, xB = function(t) {
  return { name: "padding-" + t, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
}, ky = xB("top"), Ry = xB("right"), Ny = xB("bottom"), Vy = xB("left"), Py = { name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, Jy = { name: "position", initialValue: "static", prefix: !1, type: 2, parse: function(t, A) {
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
} }, Xy = { name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.length === 1 && dg(A[0], "none") ? [] : Cr(A).map(function(e) {
    for (var r = { color: Zr.TRANSPARENT, offsetX: tt, offsetY: tt, blur: tt }, i = 0, d = 0; d < e.length; d++) {
      var c = e[d];
      xu(c) ? (i === 0 ? r.offsetX = c : i === 1 ? r.offsetY = c : r.blur = c, i++) : r.color = _u.parse(t, c);
    }
    return r;
  });
} }, Wy = { name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, Yy = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(t, A) {
  if (A.type === 20 && A.value === "none" || A.type !== 18)
    return null;
  var e = qy[A.name];
  if (e === void 0)
    throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
  return e(A.values);
} }, Zy = function(t) {
  return t = t.filter(function(A) {
    return A.type === 17;
  }).map(function(A) {
    return A.number;
  }), t.length === 6 ? t : null;
}, jy = function(A) {
  var A = A.filter(function(w) {
    return w.type === 17;
  }).map(function(w) {
    return w.number;
  }), e = A[0], r = A[1], i = (A[2], A[3], A[4]), d = A[5], c = (A[6], A[7], A[8], A[9], A[10], A[11], A[12]), l = A[13];
  return A[14], A[15], A.length === 16 ? [e, r, i, d, c, l] : null;
}, qy = { matrix: Zy, matrix3d: jy }, lQ = { type: 16, number: 50, flags: xs }, zy = [lQ, lQ], $y = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(t, A) {
  return A = A.filter(Se), A.length !== 2 ? zy : [A[0], A[1]];
} }, AI = { name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "hidden":
      return 1;
    case "collapse":
      return 2;
    default:
      return 0;
  }
} }, eI = (function(t) {
  t.NORMAL = "normal", t.BREAK_ALL = "break-all", t.KEEP_ALL = "keep-all";
}(jd = jd || {}), { name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "break-all":
      return jd.BREAK_ALL;
    case "keep-all":
      return jd.KEEP_ALL;
    default:
      return jd.NORMAL;
  }
} }), tI = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(t, A) {
  if (A.type === 20)
    return { auto: !0, order: 0 };
  if (da(A))
    return { auto: !1, order: A.number };
  throw new Error("Invalid z-index number parsed");
} }, fQ = { name: "time", parse: function(t, A) {
  if (A.type === 15)
    switch (A.unit.toLowerCase()) {
      case "s":
        return 1e3 * A.number;
      case "ms":
        return A.number;
    }
  throw new Error("Unsupported time type");
} }, nI = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(t, A) {
  return da(A) ? A.number : 1;
} }, rI = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, uI = { name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(WA).map(function(e) {
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
} }, oI = { name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function(t, A) {
  var e = [], r = [];
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
        r.push(e.join(" ")), e.length = 0;
    }
  }), e.length && r.push(e.join(" ")), r.map(function(i) {
    return i.indexOf(" ") === -1 ? i : "'" + i + "'";
  });
} }, iI = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" }, aI = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(t, A) {
  return da(A) ? A.number : !WA(A) || A.value !== "bold" ? 400 : 700;
} }, dI = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.filter(WA).map(function(e) {
    return e.value;
  });
} }, sI = { name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "oblique":
      return "oblique";
    case "italic":
      return "italic";
    default:
      return "normal";
  }
} }, ke = function(t, A) {
  return (t & A) != 0;
}, cI = { name: "content", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  var e;
  return A.length === 0 || (e = A[0]).type === 20 && e.value === "none" ? [] : A;
} }, BI = { name: "counter-increment", initialValue: "none", prefix: !0, type: 1, parse: function(t, A) {
  if (A.length === 0)
    return null;
  var e = A[0];
  if (e.type === 20 && e.value === "none")
    return null;
  for (var r = [], i = A.filter(uQ), d = 0; d < i.length; d++) {
    var c = i[d], l = i[d + 1];
    c.type === 20 && (l = l && da(l) ? l.number : 1, r.push({ counter: c.value, increment: l }));
  }
  return r;
} }, lI = { name: "counter-reset", initialValue: "none", prefix: !0, type: 1, parse: function(t, A) {
  if (A.length === 0)
    return [];
  for (var e = [], r = A.filter(uQ), i = 0; i < r.length; i++) {
    var d = r[i], c = r[i + 1];
    WA(d) && d.value !== "none" && (c = c && da(c) ? c.number : 0, e.push({ counter: d.value, reset: c }));
  }
  return e;
} }, fI = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(hs).map(function(e) {
    return fQ.parse(t, e);
  });
} }, gI = { name: "quotes", initialValue: "none", prefix: !0, type: 1, parse: function(t, A) {
  if (A.length === 0)
    return null;
  var e = A[0];
  if (e.type === 20 && e.value === "none")
    return null;
  var r = [], i = A.filter(RH);
  if (i.length % 2 != 0)
    return null;
  for (var d = 0; d < i.length; d += 2) {
    var c = i[d].value, l = i[d + 1].value;
    r.push({ open: c, close: l });
  }
  return r;
} }, gQ = function(t, A, e) {
  return t && (A = t[Math.min(A, t.length - 1)]) ? e ? A.open : A.close : "";
}, wI = { name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.length === 1 && dg(A[0], "none") ? [] : Cr(A).map(function(e) {
    for (var r = { color: 255, offsetX: tt, offsetY: tt, blur: tt, spread: tt, inset: !1 }, i = 0, d = 0; d < e.length; d++) {
      var c = e[d];
      dg(c, "inset") ? r.inset = !0 : xu(c) ? (i === 0 ? r.offsetX = c : i === 1 ? r.offsetY = c : i === 2 ? r.blur = c : r.spread = c, i++) : r.color = _u.parse(t, c);
    }
    return r;
  });
} }, QI = { name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function(t, A) {
  var e = [];
  return A.filter(WA).forEach(function(r) {
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
} }, CI = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" }, hI = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(t, A) {
  return hs(A) ? A.number : 0;
} }, FI = function() {
  function t(A, e) {
    this.animationDuration = tA(A, fI, e.animationDuration), this.backgroundClip = tA(A, PH, e.backgroundClip), this.backgroundColor = tA(A, JH, e.backgroundColor), this.backgroundImage = tA(A, ey, e.backgroundImage), this.backgroundOrigin = tA(A, ty, e.backgroundOrigin), this.backgroundPosition = tA(A, ny, e.backgroundPosition), this.backgroundRepeat = tA(A, ry, e.backgroundRepeat), this.backgroundSize = tA(A, oy, e.backgroundSize), this.borderTopColor = tA(A, ay, e.borderTopColor), this.borderRightColor = tA(A, dy, e.borderRightColor), this.borderBottomColor = tA(A, sy, e.borderBottomColor), this.borderLeftColor = tA(A, cy, e.borderLeftColor), this.borderTopLeftRadius = tA(A, By, e.borderTopLeftRadius), this.borderTopRightRadius = tA(A, ly, e.borderTopRightRadius), this.borderBottomRightRadius = tA(A, fy, e.borderBottomRightRadius), this.borderBottomLeftRadius = tA(A, gy, e.borderBottomLeftRadius), this.borderTopStyle = tA(A, wy, e.borderTopStyle), this.borderRightStyle = tA(A, Qy, e.borderRightStyle), this.borderBottomStyle = tA(A, Cy, e.borderBottomStyle), this.borderLeftStyle = tA(A, hy, e.borderLeftStyle), this.borderTopWidth = tA(A, Fy, e.borderTopWidth), this.borderRightWidth = tA(A, Uy, e.borderRightWidth), this.borderBottomWidth = tA(A, py, e.borderBottomWidth), this.borderLeftWidth = tA(A, Ey, e.borderLeftWidth), this.boxShadow = tA(A, wI, e.boxShadow), this.color = tA(A, my, e.color), this.direction = tA(A, Dy, e.direction), this.display = tA(A, Hy, e.display), this.float = tA(A, Iy, e.cssFloat), this.fontFamily = tA(A, oI, e.fontFamily), this.fontSize = tA(A, iI, e.fontSize), this.fontStyle = tA(A, sI, e.fontStyle), this.fontVariant = tA(A, dI, e.fontVariant), this.fontWeight = tA(A, aI, e.fontWeight), this.letterSpacing = tA(A, by, e.letterSpacing), this.lineBreak = tA(A, vy, e.lineBreak), this.lineHeight = tA(A, Ky, e.lineHeight), this.listStyleImage = tA(A, Ly, e.listStyleImage), this.listStylePosition = tA(A, xy, e.listStylePosition), this.listStyleType = tA(A, A0, e.listStyleType), this.marginTop = tA(A, _y, e.marginTop), this.marginRight = tA(A, Sy, e.marginRight), this.marginBottom = tA(A, Ty, e.marginBottom), this.marginLeft = tA(A, Oy, e.marginLeft), this.opacity = tA(A, nI, e.opacity);
    var r = tA(A, My, e.overflow);
    this.overflowX = r[0], this.overflowY = r[1 < r.length ? 1 : 0], this.overflowWrap = tA(A, Gy, e.overflowWrap), this.paddingTop = tA(A, ky, e.paddingTop), this.paddingRight = tA(A, Ry, e.paddingRight), this.paddingBottom = tA(A, Ny, e.paddingBottom), this.paddingLeft = tA(A, Vy, e.paddingLeft), this.paintOrder = tA(A, QI, e.paintOrder), this.position = tA(A, Jy, e.position), this.textAlign = tA(A, Py, e.textAlign), this.textDecorationColor = tA(A, rI, (r = e.textDecorationColor) != null ? r : e.color), this.textDecorationLine = tA(A, uI, (r = e.textDecorationLine) != null ? r : e.textDecoration), this.textShadow = tA(A, Xy, e.textShadow), this.textTransform = tA(A, Wy, e.textTransform), this.transform = tA(A, Yy, e.transform), this.transformOrigin = tA(A, $y, e.transformOrigin), this.visibility = tA(A, AI, e.visibility), this.webkitTextStrokeColor = tA(A, CI, e.webkitTextStrokeColor), this.webkitTextStrokeWidth = tA(A, hI, e.webkitTextStrokeWidth), this.wordBreak = tA(A, eI, e.wordBreak), this.zIndex = tA(A, tI, e.zIndex);
  }
  return t.prototype.isVisible = function() {
    return 0 < this.display && 0 < this.opacity && this.visibility === 0;
  }, t.prototype.isTransparent = function() {
    return Su(this.backgroundColor);
  }, t.prototype.isTransformed = function() {
    return this.transform !== null;
  }, t.prototype.isPositioned = function() {
    return this.position !== 0;
  }, t.prototype.isPositionedWithZIndex = function() {
    return this.isPositioned() && !this.zIndex.auto;
  }, t.prototype.isFloating = function() {
    return this.float !== 0;
  }, t.prototype.isInlineLevel = function() {
    return ke(this.display, 4) || ke(this.display, 33554432) || ke(this.display, 268435456) || ke(this.display, 536870912) || ke(this.display, 67108864) || ke(this.display, 134217728);
  }, t;
}(), UI = function(t, A) {
  this.content = tA(t, cI, A.content), this.quotes = tA(t, gI, A.quotes);
}, wQ = function(t, A) {
  this.counterIncrement = tA(t, BI, A.counterIncrement), this.counterReset = tA(t, lI, A.counterReset);
}, tA = function(t, A, i) {
  var r = new gh(), i = i != null ? i.toString() : A.initialValue, d = (r.write(i), new wh(r.read()));
  switch (A.type) {
    case 2:
      var c = d.parseComponentValue();
      return A.parse(t, WA(c) ? c.value : A.initialValue);
    case 0:
      return A.parse(t, d.parseComponentValue());
    case 1:
      return A.parse(t, d.parseComponentValues());
    case 4:
      return d.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return Fl.parse(t, d.parseComponentValue());
        case "color":
          return _u.parse(t, d.parseComponentValue());
        case "image":
          return cg.parse(t, d.parseComponentValue());
        case "length":
          var l = d.parseComponentValue();
          return xu(l) ? l : tt;
        case "length-percentage":
          return l = d.parseComponentValue(), Se(l) ? l : tt;
        case "time":
          return fQ.parse(t, d.parseComponentValue());
      }
  }
}, pI = "data-html2canvas-debug", EI = function(t) {
  switch (t.getAttribute(pI)) {
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
}, e0 = function(t, A) {
  return t = EI(t), t === 1 || A === t;
}, Fr = function(t, A) {
  this.context = t, this.textNodes = [], this.elements = [], this.flags = 0, e0(A, 3), this.styles = new FI(t, window.getComputedStyle(A, null)), r0(A) && (this.styles.animationDuration.some(function(e) {
    return 0 < e;
  }) && (A.style.animationDuration = "0s"), this.styles.transform !== null) && (A.style.transform = "none"), this.bounds = Cl(this.context, A), e0(A, 4) && (this.flags |= 16);
}, mI = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", QQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ds = typeof Uint8Array > "u" ? [] : new Uint8Array(256), _B = 0; _B < QQ.length; _B++)
  ds[QQ.charCodeAt(_B)] = _B;
for (var DI = function(t) {
  for (var A, e, r, i, l = 0.75 * t.length, d = t.length, c = 0, l = (t[t.length - 1] === "=" && (l--, t[t.length - 2] === "=") && l--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? ArrayBuffer : Array)(l)), w = Array.isArray(l) ? l : new Uint8Array(l), Q = 0; Q < d; Q += 4)
    A = ds[t.charCodeAt(Q)], e = ds[t.charCodeAt(Q + 1)], r = ds[t.charCodeAt(Q + 2)], i = ds[t.charCodeAt(Q + 3)], w[c++] = A << 2 | e >> 4, w[c++] = (15 & e) << 4 | r >> 2, w[c++] = (3 & r) << 6 | 63 & i;
  return l;
}, HI = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 2)
    e.push(t[r + 1] << 8 | t[r]);
  return e;
}, yI = function(t) {
  for (var A = t.length, e = [], r = 0; r < A; r += 4)
    e.push(t[r + 3] << 24 | t[r + 2] << 16 | t[r + 1] << 8 | t[r]);
  return e;
}, bo = 5, Bg = 11, lg = 2, II = Bg - bo, CQ = 65536 >> bo, bI = 1 << bo, fg = bI - 1, vI = 1024 >> bo, hQ = CQ + vI, O2 = hQ, KI = 32, LI = hQ + KI, xI = 65536 >> Bg, _I = 1 << II, SI = _I - 1, FQ = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, TI = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, OI = function(i, A) {
  var i = DI(i), e = Array.isArray(i) ? yI(i) : new Uint32Array(i), i = Array.isArray(i) ? HI(i) : new Uint16Array(i), r = FQ(i, 12, e[4] / 2), i = e[5] === 2 ? FQ(i, (24 + e[4]) / 2) : TI(e, Math.ceil((24 + e[4]) / 4));
  return new MI(e[0], e[1], e[2], e[3], r, i);
}, MI = function() {
  function t(A, e, r, i, d, c) {
    this.initialValue = A, this.errorValue = e, this.highStart = r, this.highValueIndex = i, this.index = d, this.data = c;
  }
  return t.prototype.get = function(A) {
    var e;
    if (0 <= A) {
      if (A < 55296 || 56319 < A && A <= 65535)
        return e = this.index[A >> bo], this.data[e = (e << lg) + (A & fg)];
      if (A <= 65535)
        return e = this.index[CQ + (A - 55296 >> bo)], this.data[e = (e << lg) + (A & fg)];
      if (A < this.highStart)
        return e = this.index[e = LI - xI + (A >> Bg)], e = this.index[e += A >> bo & SI], this.data[e = (e << lg) + (A & fg)];
      if (A <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, t;
}(), UQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", GI = typeof Uint8Array > "u" ? [] : new Uint8Array(256), SB = 0; SB < UQ.length; SB++)
  GI[UQ.charCodeAt(SB)] = SB;
var Us, VA, kI = 1, gg = 2, wg = 3, pQ = 4, EQ = 5, RI = 7, mQ = 8, Qg = 9, Cg = 10, DQ = 11, HQ = 12, yQ = 13, IQ = 14, hg = 15, NI = function(t) {
  for (var A = [], e = 0, r = t.length; e < r; ) {
    var i, d = t.charCodeAt(e++);
    55296 <= d && d <= 56319 && e < r ? (64512 & (i = t.charCodeAt(e++))) == 56320 ? A.push(((1023 & d) << 10) + (1023 & i) + 65536) : (A.push(d), e--) : A.push(d);
  }
  return A;
}, VI = function() {
  for (var t = [], A = 0; A < arguments.length; A++)
    t[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, t);
  var e = t.length;
  if (!e)
    return "";
  for (var r = [], i = -1, d = ""; ++i < e; ) {
    var c = t[i];
    c <= 65535 ? r.push(c) : r.push(55296 + ((c -= 65536) >> 10), c % 1024 + 56320), (i + 1 === e || 16384 < r.length) && (d += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return d;
}, PI = OI(mI), hn = "×", JI = "÷", XI = function(t) {
  return PI.get(t);
}, WI = function(t, A, c) {
  var r = c - 2, i = A[r], d = A[c - 1], c = A[c];
  if (d === gg && c === wg)
    return hn;
  if (d !== gg && d !== wg && d !== pQ && c !== gg && c !== wg && c !== pQ) {
    if (d === mQ && [mQ, Qg, DQ, HQ].indexOf(c) !== -1 || !(d !== DQ && d !== Qg || c !== Qg && c !== Cg) || (d === HQ || d === Cg) && c === Cg || c === yQ || c === EQ || c === RI || d === kI)
      return hn;
    if (d === yQ && c === IQ) {
      for (; i === EQ; )
        i = A[--r];
      if (i === IQ)
        return hn;
    }
    if (d === hg && c === hg) {
      for (var l = 0; i === hg; )
        l++, i = A[--r];
      if (l % 2 == 0)
        return hn;
    }
  }
  return JI;
}, YI = function(t) {
  var A = NI(t), e = A.length, r = 0, i = 0, d = A.map(XI);
  return { next: function() {
    if (e <= r)
      return { done: !0, value: null };
    for (var c, l = hn; r < e && (l = WI(A, d, ++r)) === hn; )
      ;
    return l !== hn || r === e ? (c = VI.apply(null, A.slice(i, r)), i = r, { value: c, done: !1 }) : { done: !0, value: null };
  } };
}, ZI = function(t) {
  for (var A, e = YI(t), r = []; !(A = e.next()).done; )
    A.value && r.push(A.value.slice());
  return r;
}, jI = function(t) {
  if (t.createRange) {
    var A = t.createRange();
    if (A.getBoundingClientRect) {
      var e = t.createElement("boundtest"), A = (e.style.height = "123px", e.style.display = "block", t.body.appendChild(e), A.selectNode(e), A.getBoundingClientRect()), A = Math.round(A.height);
      if (t.body.removeChild(e), A === 123)
        return !0;
    }
  }
  return !1;
}, qI = function(t) {
  var A = t.createElement("boundtest"), e = (A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", t.body.appendChild(A), t.createRange()), r = (A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "", A.firstChild), c = hl(r.data).map(function(l) {
    return Ke(l);
  }), i = 0, d = {}, c = c.every(function(g, w) {
    e.setStart(r, i), e.setEnd(r, i + g.length);
    var Q = e.getBoundingClientRect(), g = (i += g.length, Q.x > d.x || Q.y > d.y);
    return d = Q, w === 0 || g;
  });
  return t.body.removeChild(A), c;
}, zI = function() {
  return new Image().crossOrigin !== void 0;
}, $I = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, Ab = function(e) {
  var A = new Image(), e = e.createElement("canvas"), r = e.getContext("2d");
  if (!r)
    return !1;
  A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(A, 0, 0), e.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, bQ = function(t) {
  return t[0] === 0 && t[1] === 255 && t[2] === 0 && t[3] === 255;
}, eb = function(t) {
  var i = t.createElement("canvas"), A = (i.width = 100, i.height = 100, i.getContext("2d"));
  if (!A)
    return Promise.reject(!1);
  A.fillStyle = "rgb(0, 255, 0)", A.fillRect(0, 0, 100, 100);
  var e = new Image(), r = i.toDataURL(), i = (e.src = r, t0(100, 100, 0, 0, e));
  return A.fillStyle = "red", A.fillRect(0, 0, 100, 100), vQ(i).then(function(c) {
    A.drawImage(c, 0, 0);
    var c = A.getImageData(0, 0, 100, 100).data, l = (A.fillStyle = "red", A.fillRect(0, 0, 100, 100), t.createElement("div"));
    return l.style.backgroundImage = "url(" + r + ")", l.style.height = "100px", bQ(c) ? vQ(t0(100, 100, 0, 0, l)) : Promise.reject(!1);
  }).then(function(d) {
    return A.drawImage(d, 0, 0), bQ(A.getImageData(0, 0, 100, 100).data);
  }).catch(function() {
    return !1;
  });
}, t0 = function(t, A, e, r, i) {
  var c = "http://www.w3.org/2000/svg", d = document.createElementNS(c, "svg"), c = document.createElementNS(c, "foreignObject");
  return d.setAttributeNS(null, "width", t.toString()), d.setAttributeNS(null, "height", A.toString()), c.setAttributeNS(null, "width", "100%"), c.setAttributeNS(null, "height", "100%"), c.setAttributeNS(null, "x", e.toString()), c.setAttributeNS(null, "y", r.toString()), c.setAttributeNS(null, "externalResourcesRequired", "true"), d.appendChild(c), c.appendChild(i), d;
}, vQ = function(t) {
  return new Promise(function(A, e) {
    var r = new Image();
    r.onload = function() {
      return A(r);
    }, r.onerror = e, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
  });
}, nt = { get SUPPORT_RANGE_BOUNDS() {
  var t = jI(document);
  return Object.defineProperty(nt, "SUPPORT_RANGE_BOUNDS", { value: t }), t;
}, get SUPPORT_WORD_BREAKING() {
  var t = nt.SUPPORT_RANGE_BOUNDS && qI(document);
  return Object.defineProperty(nt, "SUPPORT_WORD_BREAKING", { value: t }), t;
}, get SUPPORT_SVG_DRAWING() {
  var t = Ab(document);
  return Object.defineProperty(nt, "SUPPORT_SVG_DRAWING", { value: t }), t;
}, get SUPPORT_FOREIGNOBJECT_DRAWING() {
  var t = typeof Array.from == "function" && typeof window.fetch == "function" ? eb(document) : Promise.resolve(!1);
  return Object.defineProperty(nt, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: t }), t;
}, get SUPPORT_CORS_IMAGES() {
  var t = zI();
  return Object.defineProperty(nt, "SUPPORT_CORS_IMAGES", { value: t }), t;
}, get SUPPORT_RESPONSE_TYPE() {
  var t = $I();
  return Object.defineProperty(nt, "SUPPORT_RESPONSE_TYPE", { value: t }), t;
}, get SUPPORT_CORS_XHR() {
  var t = "withCredentials" in new XMLHttpRequest();
  return Object.defineProperty(nt, "SUPPORT_CORS_XHR", { value: t }), t;
}, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
  var t = !(typeof Intl > "u" || !Intl.Segmenter);
  return Object.defineProperty(nt, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: t }), t;
} }, ps = function(t, A) {
  this.text = t, this.bounds = A;
}, tb = function(t, i, e, r) {
  var i = ub(i, e), d = [], c = 0;
  return i.forEach(function(l) {
    var w, Q, g;
    e.textDecorationLine.length || 0 < l.trim().length ? nt.SUPPORT_RANGE_BOUNDS ? 1 < (w = KQ(r, c, l.length).getClientRects()).length ? (g = w0(l), Q = 0, g.forEach(function(m) {
      d.push(new ps(m, jr.fromDOMRectList(t, KQ(r, Q + c, m.length).getClientRects()))), Q += m.length;
    })) : d.push(new ps(l, jr.fromDOMRectList(t, w))) : (g = r.splitText(l.length), d.push(new ps(l, nb(t, r))), r = g) : nt.SUPPORT_RANGE_BOUNDS || (r = r.splitText(l.length)), c += l.length;
  }), d;
}, nb = function(t, A) {
  var e = A.ownerDocument;
  if (e) {
    var e = e.createElement("html2canvaswrapper"), r = (e.appendChild(A.cloneNode(!0)), A.parentNode);
    if (r)
      return r.replaceChild(e, A), A = Cl(t, e), e.firstChild && r.replaceChild(e.firstChild, e), A;
  }
  return jr.EMPTY;
}, KQ = function(t, A, e) {
  var r = t.ownerDocument;
  if (r)
    return (r = r.createRange()).setStart(t, A), r.setEnd(t, A + e), r;
  throw new Error("Node has no owner document");
}, w0 = function(t) {
  var A;
  return nt.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (A = new Intl.Segmenter(void 0, { granularity: "grapheme" }), Array.from(A.segment(t)).map(function(e) {
    return e.segment;
  })) : ZI(t);
}, rb = function(t, A) {
  var e;
  return nt.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (e = new Intl.Segmenter(void 0, { granularity: "word" }), Array.from(e.segment(t)).map(function(r) {
    return r.segment;
  })) : ib(t, A);
}, ub = function(t, A) {
  return A.letterSpacing !== 0 ? w0(t) : rb(t, A);
}, ob = [32, 160, 4961, 65792, 65793, 4153, 4241], ib = function(t, A) {
  for (var e, r = SD(t, { lineBreak: A.lineBreak, wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak }), i = []; !(e = r.next()).done; )
    (function() {
      var d, c;
      e.value && (d = e.value.slice(), d = hl(d), c = "", d.forEach(function(l) {
        ob.indexOf(l) === -1 ? c += Ke(l) : (c.length && i.push(c), i.push(Ke(l)), c = "");
      }), c.length) && i.push(c);
    })();
  return i;
}, ab = function(t, A, e) {
  this.text = db(A.data, e.textTransform), this.textBounds = tb(t, this.text, e, A);
}, db = function(t, A) {
  switch (A) {
    case 1:
      return t.toLowerCase();
    case 3:
      return t.replace(sb, cb);
    case 2:
      return t.toUpperCase();
    default:
      return t;
  }
}, sb = /(^|\s|:|-|\(|\))([a-z])/g, cb = function(t, A, e) {
  return 0 < t.length ? A + e.toUpperCase() : t;
}, Lh = function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, e.src = r.currentSrc || r.src, e.intrinsicWidth = r.naturalWidth, e.intrinsicHeight = r.naturalHeight, e.context.cache.addImage(e.src), e;
  }
  return Wn(A, t), A;
}(Fr), xh = function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, e.canvas = r, e.intrinsicWidth = r.width, e.intrinsicHeight = r.height, e;
  }
  return Wn(A, t), A;
}(Fr), _h = function(t) {
  function A(c, r) {
    var i = t.call(this, c, r) || this, d = new XMLSerializer(), c = Cl(c, r);
    return r.setAttribute("width", c.width + "px"), r.setAttribute("height", c.height + "px"), i.svg = "data:image/svg+xml," + encodeURIComponent(d.serializeToString(r)), i.intrinsicWidth = r.width.baseVal.value, i.intrinsicHeight = r.height.baseVal.value, i.context.cache.addImage(i.svg), i;
  }
  return Wn(A, t), A;
}(Fr), Sh = function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, e.value = r.value, e;
  }
  return Wn(A, t), A;
}(Fr), n0 = function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, e.start = r.start, e.reversed = typeof r.reversed == "boolean" && r.reversed === !0, e;
  }
  return Wn(A, t), A;
}(Fr), Bb = [{ type: 15, flags: 0, unit: "px", number: 3 }], lb = [{ type: 16, flags: 0, number: 50 }], fb = function(t) {
  return t.width > t.height ? new jr(t.left + (t.width - t.height) / 2, t.top, t.height, t.height) : t.width < t.height ? new jr(t.left, t.top + (t.height - t.width) / 2, t.width, t.width) : t;
}, gb = function(t) {
  var A = t.type === wb ? new Array(t.value.length + 1).join("•") : t.value;
  return A.length === 0 ? t.placeholder || "" : A;
}, il = "checkbox", al = "radio", wb = "password", LQ = 707406591, Q0 = function(t) {
  function A(e, r) {
    var i = t.call(this, e, r) || this;
    switch (i.type = r.type.toLowerCase(), i.checked = r.checked, i.value = gb(r), i.type !== il && i.type !== al || (i.styles.backgroundColor = 3739148031, i.styles.borderTopColor = i.styles.borderRightColor = i.styles.borderBottomColor = i.styles.borderLeftColor = 2779096575, i.styles.borderTopWidth = i.styles.borderRightWidth = i.styles.borderBottomWidth = i.styles.borderLeftWidth = 1, i.styles.borderTopStyle = i.styles.borderRightStyle = i.styles.borderBottomStyle = i.styles.borderLeftStyle = 1, i.styles.backgroundClip = [0], i.styles.backgroundOrigin = [0], i.bounds = fb(i.bounds)), i.type) {
      case il:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = Bb;
        break;
      case al:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = lb;
    }
    return i;
  }
  return Wn(A, t), A;
}(Fr), Th = function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, r = r.options[r.selectedIndex || 0], e.value = r && r.text || "", e;
  }
  return Wn(A, t), A;
}(Fr), Oh = function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, e.value = r.value, e;
  }
  return Wn(A, t), A;
}(Fr), Mh = function(t) {
  function A(e, r) {
    var i, d, c = t.call(this, e, r) || this;
    c.src = r.src, c.width = parseInt(r.width, 10) || 0, c.height = parseInt(r.height, 10) || 0, c.backgroundColor = c.styles.backgroundColor;
    try {
      r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement && (c.tree = kh(e, r.contentWindow.document.documentElement), i = r.contentWindow.document.documentElement ? Fs(e, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : Zr.TRANSPARENT, d = r.contentWindow.document.body ? Fs(e, getComputedStyle(r.contentWindow.document.body).backgroundColor) : Zr.TRANSPARENT, c.backgroundColor = Su(i) ? Su(d) ? c.styles.backgroundColor : d : i);
    } catch {
    }
    return c;
  }
  return Wn(A, t), A;
}(Fr), Qb = ["OL", "UL", "MENU"], ZB = function(t, A, e, r) {
  for (var i = A.firstChild; i; i = c) {
    var d, c = i.nextSibling;
    Rh(i) && 0 < i.data.trim().length ? e.textNodes.push(new ab(t, i, e.styles)) : Ba(i) && (Jh(i) && i.assignedNodes ? i.assignedNodes().forEach(function(l) {
      return ZB(t, l, e, r);
    }) : (d = Gh(t, i)).styles.isVisible() && (Cb(i, d, r) ? d.flags |= 4 : hb(d.styles) && (d.flags |= 2), Qb.indexOf(i.tagName) !== -1 && (d.flags |= 8), e.elements.push(d), i.slot, i.shadowRoot ? ZB(t, i.shadowRoot, d, r) : dl(i) || Nh(i) || sl(i) || ZB(t, i, d, r)));
  }
}, Gh = function(t, A) {
  return new (u0(A) ? Lh : Vh(A) ? xh : Nh(A) ? _h : Fb(A) ? Sh : Ub(A) ? n0 : pb(A) ? Q0 : sl(A) ? Th : dl(A) ? Oh : Ph(A) ? Mh : Fr)(t, A);
}, kh = function(t, A) {
  var e = Gh(t, A);
  return e.flags |= 4, ZB(t, A, e, e), e;
}, Cb = function(t, A, e) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || C0(t) && e.styles.isTransparent();
}, hb = function(t) {
  return t.isPositioned() || t.isFloating();
}, Rh = function(t) {
  return t.nodeType === Node.TEXT_NODE;
}, Ba = function(t) {
  return t.nodeType === Node.ELEMENT_NODE;
}, r0 = function(t) {
  return Ba(t) && t.style !== void 0 && !jB(t);
}, jB = function(t) {
  return typeof t.className == "object";
}, Fb = function(t) {
  return t.tagName === "LI";
}, Ub = function(t) {
  return t.tagName === "OL";
}, pb = function(t) {
  return t.tagName === "INPUT";
}, Eb = function(t) {
  return t.tagName === "HTML";
}, Nh = function(t) {
  return t.tagName === "svg";
}, C0 = function(t) {
  return t.tagName === "BODY";
}, Vh = function(t) {
  return t.tagName === "CANVAS";
}, xQ = function(t) {
  return t.tagName === "VIDEO";
}, u0 = function(t) {
  return t.tagName === "IMG";
}, Ph = function(t) {
  return t.tagName === "IFRAME";
}, _Q = function(t) {
  return t.tagName === "STYLE";
}, mb = function(t) {
  return t.tagName === "SCRIPT";
}, dl = function(t) {
  return t.tagName === "TEXTAREA";
}, sl = function(t) {
  return t.tagName === "SELECT";
}, Jh = function(t) {
  return t.tagName === "SLOT";
}, SQ = function(t) {
  return 0 < t.tagName.indexOf("-");
}, Db = function() {
  function t() {
    this.counters = {};
  }
  return t.prototype.getCounterValue = function(A) {
    return A = this.counters[A], A && A.length ? A[A.length - 1] : 1;
  }, t.prototype.getCounterValues = function(A) {
    return A = this.counters[A], A || [];
  }, t.prototype.pop = function(A) {
    var e = this;
    A.forEach(function(r) {
      return e.counters[r].pop();
    });
  }, t.prototype.parse = function(i) {
    var e = this, r = i.counterIncrement, i = i.counterReset, d = !0, c = (r !== null && r.forEach(function(l) {
      var w = e.counters[l.counter];
      w && l.increment !== 0 && (d = !1, w.length || w.push(1), w[Math.max(0, w.length - 1)] += l.increment);
    }), []);
    return d && i.forEach(function(l) {
      var w = e.counters[l.counter];
      c.push(l.counter), (w = w || (e.counters[l.counter] = [])).push(l.reset);
    }), c;
  }, t;
}(), TQ = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, OQ = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] }, Hb = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] }, yb = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] }, na = function(t, A, e, r, i, d) {
  return t < A || e < t ? vs(t, i, 0 < d.length) : r.integers.reduce(function(c, l, w) {
    for (; l <= t; )
      t -= l, c += r.values[w];
    return c;
  }, "") + d;
}, Xh = function(t, A, e, r) {
  for (var i = ""; e || t--, i = r(t) + i, A <= (t /= A) * A; )
    ;
  return i;
}, be = function(t, A, e, r, i) {
  var d = e - A + 1;
  return (t < 0 ? "-" : "") + (Xh(Math.abs(t), d, r, function(c) {
    return Ke(Math.floor(c % d) + A);
  }) + i);
}, vo = function(t, A, e) {
  e === void 0 && (e = ". ");
  var r = A.length;
  return Xh(Math.abs(t), r, !1, function(i) {
    return A[Math.floor(i % r)];
  }) + e;
}, sa = 1, Fu = 2, Uu = 4, ss = 8, Wr = function(t, A, e, r, i, d) {
  if (t < -9999 || 9999 < t)
    return vs(t, 4, 0 < i.length);
  var c = Math.abs(t), l = i;
  if (c === 0)
    return A[0] + l;
  for (var w = 0; 0 < c && w <= 4; w++) {
    var Q = c % 10;
    Q == 0 && ke(d, sa) && l !== "" ? l = A[Q] + l : 1 < Q || Q == 1 && w === 0 || Q == 1 && w === 1 && ke(d, Fu) || Q == 1 && w === 1 && ke(d, Uu) && 100 < t || Q == 1 && 1 < w && ke(d, ss) ? l = A[Q] + (0 < w ? e[w - 1] : "") + l : Q == 1 && 0 < w && (l = e[w - 1] + l), c = Math.floor(c / 10);
  }
  return (t < 0 ? r : "") + l;
}, MQ = "十百千萬", GQ = "拾佰仟萬", kQ = "マイナス", Fg = "마이너스", vs = function(t, A, e) {
  var r = e ? ". " : "", i = e ? "、" : "", d = e ? ", " : "", c = e ? " " : "";
  switch (A) {
    case 0:
      return "•" + c;
    case 1:
      return "◦" + c;
    case 2:
      return "◾" + c;
    case 5:
      var l = be(t, 48, 57, !0, r);
      return l.length < 4 ? "0" + l : l;
    case 4:
      return vo(t, "〇一二三四五六七八九", i);
    case 6:
      return na(t, 1, 3999, TQ, 3, r).toLowerCase();
    case 7:
      return na(t, 1, 3999, TQ, 3, r);
    case 8:
      return be(t, 945, 969, !1, r);
    case 9:
      return be(t, 97, 122, !1, r);
    case 10:
      return be(t, 65, 90, !1, r);
    case 11:
      return be(t, 1632, 1641, !0, r);
    case 12:
    case 49:
      return na(t, 1, 9999, OQ, 3, r);
    case 35:
      return na(t, 1, 9999, OQ, 3, r).toLowerCase();
    case 13:
      return be(t, 2534, 2543, !0, r);
    case 14:
    case 30:
      return be(t, 6112, 6121, !0, r);
    case 15:
      return vo(t, "子丑寅卯辰巳午未申酉戌亥", i);
    case 16:
      return vo(t, "甲乙丙丁戊己庚辛壬癸", i);
    case 17:
    case 48:
      return Wr(t, "零一二三四五六七八九", MQ, "負", i, Fu | Uu | ss);
    case 47:
      return Wr(t, "零壹貳參肆伍陸柒捌玖", GQ, "負", i, sa | Fu | Uu | ss);
    case 42:
      return Wr(t, "零一二三四五六七八九", MQ, "负", i, Fu | Uu | ss);
    case 41:
      return Wr(t, "零壹贰叁肆伍陆柒捌玖", GQ, "负", i, sa | Fu | Uu | ss);
    case 26:
      return Wr(t, "〇一二三四五六七八九", "十百千万", kQ, i, 0);
    case 25:
      return Wr(t, "零壱弐参四伍六七八九", "拾百千万", kQ, i, sa | Fu | Uu);
    case 31:
      return Wr(t, "영일이삼사오육칠팔구", "십백천만", Fg, d, sa | Fu | Uu);
    case 33:
      return Wr(t, "零一二三四五六七八九", "十百千萬", Fg, d, 0);
    case 32:
      return Wr(t, "零壹貳參四五六七八九", "拾百千", Fg, d, sa | Fu | Uu);
    case 18:
      return be(t, 2406, 2415, !0, r);
    case 20:
      return na(t, 1, 19999, yb, 3, r);
    case 21:
      return be(t, 2790, 2799, !0, r);
    case 22:
      return be(t, 2662, 2671, !0, r);
    case 22:
      return na(t, 1, 10999, Hb, 3, r);
    case 23:
      return vo(t, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return vo(t, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return be(t, 3302, 3311, !0, r);
    case 28:
      return vo(t, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", i);
    case 29:
      return vo(t, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", i);
    case 34:
      return be(t, 3792, 3801, !0, r);
    case 37:
      return be(t, 6160, 6169, !0, r);
    case 38:
      return be(t, 4160, 4169, !0, r);
    case 39:
      return be(t, 2918, 2927, !0, r);
    case 40:
      return be(t, 1776, 1785, !0, r);
    case 43:
      return be(t, 3046, 3055, !0, r);
    case 44:
      return be(t, 3174, 3183, !0, r);
    case 45:
      return be(t, 3664, 3673, !0, r);
    case 46:
      return be(t, 3872, 3881, !0, r);
    default:
      return be(t, 48, 57, !0, r);
  }
}, Wh = "data-html2canvas-ignore", RQ = function() {
  function t(A, e, r) {
    if (this.context = A, this.options = r, this.scrolledElements = [], this.referenceElement = e, this.counters = new Db(), this.quoteDepth = 0, !e.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    this.documentElement = this.cloneNode(e.ownerDocument.documentElement, !1);
  }
  return t.prototype.toIFrame = function(A, e) {
    var r, i, d, c, l = this, w = Ib(A, e);
    return w.contentWindow ? (r = A.defaultView.pageXOffset, A = A.defaultView.pageYOffset, i = w.contentWindow, d = i.document, c = Kb(w).then(function() {
      return Ht(l, void 0, void 0, function() {
        var Q, g;
        return gt(this, function(m) {
          switch (m.label) {
            case 0:
              return this.scrolledElements.forEach(Sb), i && (i.scrollTo(e.left, e.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || i.scrollY === e.top && i.scrollX === e.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(i.scrollX - e.left, i.scrollY - e.top, 0, 0))), Q = this.options.onclone, (g = this.clonedReferenceElement) === void 0 ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : d.fonts && d.fonts.ready ? [4, d.fonts.ready] : [3, 2];
            case 1:
              m.sent(), m.label = 2;
            case 2:
              return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, vb(d)] : [3, 4];
            case 3:
              m.sent(), m.label = 4;
            case 4:
              return typeof Q == "function" ? [2, Promise.resolve().then(function() {
                return Q(d, g);
              }).then(function() {
                return w;
              })] : [2, w];
          }
        });
      });
    }), d.open(), d.write(xb(document.doctype) + "<html></html>"), _b(this.referenceElement.ownerDocument, r, A), d.replaceChild(d.adoptNode(this.documentElement), d.documentElement), d.close(), c) : Promise.reject("Unable to find iframe window");
  }, t.prototype.createElementClone = function(A) {
    var e;
    return e0(A, 2), Vh(A) ? this.createCanvasClone(A) : xQ(A) ? this.createVideoClone(A) : _Q(A) ? this.createStyleClone(A) : (e = A.cloneNode(!1), u0(e) && (u0(A) && A.currentSrc && A.currentSrc !== A.src && (e.src = A.currentSrc, e.srcset = ""), e.loading === "lazy") && (e.loading = "eager"), SQ(e) ? this.createCustomElementClone(e) : e);
  }, t.prototype.createCustomElementClone = function(A) {
    var e = document.createElement("html2canvascustomelement");
    return Ug(A.style, e), e;
  }, t.prototype.createStyleClone = function(A) {
    try {
      var e, r, i = A.sheet;
      if (i && i.cssRules)
        return e = [].slice.call(i.cssRules, 0).reduce(function(d, c) {
          return c && typeof c.cssText == "string" ? d + c.cssText : d;
        }, ""), (r = A.cloneNode(!1)).textContent = e, r;
    } catch (d) {
      if (this.context.logger.error("Unable to access cssRules property", d), d.name !== "SecurityError")
        throw d;
    }
    return A.cloneNode(!1);
  }, t.prototype.createCanvasClone = function(A) {
    var e;
    if (this.options.inlineImages && A.ownerDocument) {
      var r = A.ownerDocument.createElement("img");
      try {
        return r.src = A.toDataURL(), r;
      } catch {
        this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
      }
    }
    r = A.cloneNode(!1);
    try {
      r.width = A.width, r.height = A.height;
      var i, d, c = A.getContext("2d"), l = r.getContext("2d");
      l && (!this.options.allowTaint && c ? l.putImageData(c.getImageData(0, 0, A.width, A.height), 0, 0) : ((i = (e = A.getContext("webgl2")) != null ? e : A.getContext("webgl")) && ((d = i.getContextAttributes()) == null ? void 0 : d.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A), l.drawImage(A, 0, 0)));
    } catch {
      this.context.logger.info("Unable to clone canvas as it is tainted", A);
    }
    return r;
  }, t.prototype.createVideoClone = function(A) {
    var e = A.ownerDocument.createElement("canvas"), r = (e.width = A.offsetWidth, e.height = A.offsetHeight, e.getContext("2d"));
    try {
      return r && (r.drawImage(A, 0, 0, e.width, e.height), this.options.allowTaint || r.getImageData(0, 0, e.width, e.height)), e;
    } catch {
      this.context.logger.info("Unable to clone video as it is tainted", A);
    }
    return r = A.ownerDocument.createElement("canvas"), r.width = A.offsetWidth, r.height = A.offsetHeight, r;
  }, t.prototype.appendChildNode = function(A, e, r) {
    Ba(e) && (mb(e) || e.hasAttribute(Wh) || typeof this.options.ignoreElements == "function" && this.options.ignoreElements(e)) || this.options.copyStyles && Ba(e) && _Q(e) || A.appendChild(this.cloneNode(e, r));
  }, t.prototype.cloneChildNodes = function(A, e, r) {
    for (var i, d = this, c = (A.shadowRoot || A).firstChild; c; c = c.nextSibling)
      Ba(c) && Jh(c) && typeof c.assignedNodes == "function" ? (i = c.assignedNodes()).length && i.forEach(function(l) {
        return d.appendChildNode(e, l, r);
      }) : this.appendChildNode(e, c, r);
  }, t.prototype.cloneNode = function(A, e) {
    var r, i, d, c, l;
    return Rh(A) ? document.createTextNode(A.data) : A.ownerDocument && (d = A.ownerDocument.defaultView) && Ba(A) && (r0(A) || jB(A)) ? ((r = this.createElementClone(A)).style.transitionProperty = "none", i = d.getComputedStyle(A), l = d.getComputedStyle(A, ":before"), d = d.getComputedStyle(A, ":after"), this.referenceElement === A && r0(r) && (this.clonedReferenceElement = r), C0(r) && Mb(r), c = this.counters.parse(new wQ(this.context, i)), l = this.resolvePseudoContent(A, r, l, Us.BEFORE), SQ(A) && (e = !0), xQ(A) || this.cloneChildNodes(A, r, e), l && r.insertBefore(l, r.firstChild), (l = this.resolvePseudoContent(A, r, d, Us.AFTER)) && r.appendChild(l), this.counters.pop(c), (i && (this.options.copyStyles || jB(A)) && !Ph(A) || e) && Ug(i, r), A.scrollTop === 0 && A.scrollLeft === 0 || this.scrolledElements.push([r, A.scrollLeft, A.scrollTop]), (dl(A) || sl(A)) && (dl(r) || sl(r)) && (r.value = A.value), r) : A.cloneNode(!1);
  }, t.prototype.resolvePseudoContent = function(A, e, r, i) {
    var d = this;
    if (r) {
      var c, l, w = r.content, Q = e.ownerDocument;
      if (Q && w && w !== "none" && w !== "-moz-alt-content" && r.display !== "none")
        return this.counters.parse(new wQ(this.context, r)), c = new UI(this.context, r), l = Q.createElement("html2canvaspseudoelement"), Ug(r, l), c.content.forEach(function(g) {
          if (g.type === 0)
            l.appendChild(Q.createTextNode(g.value));
          else if (g.type === 22) {
            var m = Q.createElement("img");
            m.src = g.value, m.style.opacity = "1", l.appendChild(m);
          } else if (g.type === 18) {
            var b, v, K, I;
            g.name === "attr" ? (m = g.values.filter(WA)).length && l.appendChild(Q.createTextNode(A.getAttribute(m[0].value) || "")) : g.name === "counter" ? (K = (m = g.values.filter(Ca))[0], I = m[1], K && WA(K) && (m = d.counters.getCounterValue(K.value), b = I && WA(I) ? A0.parse(d.context, I.value) : 3, l.appendChild(Q.createTextNode(vs(m, b, !1))))) : g.name === "counters" && (K = (m = g.values.filter(Ca))[0], b = m[1], I = m[2], K) && WA(K) && (m = d.counters.getCounterValues(K.value), v = I && WA(I) ? A0.parse(d.context, I.value) : 3, K = b && b.type === 0 ? b.value : "", I = m.map(function(S) {
              return vs(S, v, !1);
            }).join(K), l.appendChild(Q.createTextNode(I)));
          } else if (g.type === 20)
            switch (g.value) {
              case "open-quote":
                l.appendChild(Q.createTextNode(gQ(c.quotes, d.quoteDepth++, !0)));
                break;
              case "close-quote":
                l.appendChild(Q.createTextNode(gQ(c.quotes, --d.quoteDepth, !1)));
                break;
              default:
                l.appendChild(Q.createTextNode(g.value));
            }
        }), l.className = o0 + " " + i0, w = i === Us.BEFORE ? " " + o0 : " " + i0, jB(e) ? e.className.baseValue += w : e.className += w, l;
    }
  }, t.destroy = function(A) {
    return !!A.parentNode && (A.parentNode.removeChild(A), !0);
  }, t;
}(), Ib = (function(t) {
  t[t.BEFORE = 0] = "BEFORE", t[t.AFTER = 1] = "AFTER";
}(Us = Us || {}), function(t, A) {
  var e = t.createElement("iframe");
  return e.className = "html2canvas-container", e.style.visibility = "hidden", e.style.position = "fixed", e.style.left = "-10000px", e.style.top = "0px", e.style.border = "0", e.width = A.width.toString(), e.height = A.height.toString(), e.scrolling = "no", e.setAttribute(Wh, "true"), t.body.appendChild(e), e;
}), bb = function(t) {
  return new Promise(function(A) {
    !t.complete && t.src ? (t.onload = A, t.onerror = A) : A();
  });
}, vb = function(t) {
  return Promise.all([].slice.call(t.images, 0).map(bb));
}, Kb = function(t) {
  return new Promise(function(A, e) {
    var r = t.contentWindow;
    if (!r)
      return e("No window assigned for iframe");
    var i = r.document;
    r.onload = t.onload = function() {
      r.onload = t.onload = null;
      var d = setInterval(function() {
        0 < i.body.childNodes.length && i.readyState === "complete" && (clearInterval(d), A(t));
      }, 50);
    };
  });
}, Lb = ["all", "d", "content"], Ug = function(t, A) {
  for (var e = t.length - 1; 0 <= e; e--) {
    var r = t.item(e);
    Lb.indexOf(r) === -1 && A.style.setProperty(r, t.getPropertyValue(r));
  }
  return A;
}, xb = function(t) {
  var A = "";
  return t && (A += "<!DOCTYPE ", t.name && (A += t.name), t.internalSubset && (A += t.internalSubset), t.publicId && (A += '"' + t.publicId + '"'), t.systemId && (A += '"' + t.systemId + '"'), A += ">"), A;
}, _b = function(t, A, e) {
  t && t.defaultView && (A !== t.defaultView.pageXOffset || e !== t.defaultView.pageYOffset) && t.defaultView.scrollTo(A, e);
}, Sb = function(r) {
  var A = r[0], e = r[1], r = r[2];
  A.scrollLeft = e, A.scrollTop = r;
}, Tb = ":before", Ob = ":after", o0 = "___html2canvas___pseudoelement_before", i0 = "___html2canvas___pseudoelement_after", NQ = `{
    content: "" !important;
    display: none !important;
}`, Mb = function(t) {
  Gb(t, "." + o0 + Tb + NQ + `
         .` + i0 + Ob + NQ);
}, Gb = function(t, A) {
  var e = t.ownerDocument;
  e && ((e = e.createElement("style")).textContent = A, t.appendChild(e));
}, Yh = function() {
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
}(), kb = function() {
  function t(A, e) {
    this.context = A, this._options = e, this._cache = {};
  }
  return t.prototype.addImage = function(A) {
    var e = Promise.resolve();
    return this.has(A) || (Eg(A) || Pb(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
    }), e;
  }, t.prototype.match = function(A) {
    return this._cache[A];
  }, t.prototype.loadImage = function(A) {
    return Ht(this, void 0, void 0, function() {
      var e, r, i, d, c = this;
      return gt(this, function(l) {
        switch (l.label) {
          case 0:
            return e = Yh.isSameOrigin(A), r = !pg(A) && this._options.useCORS === !0 && nt.SUPPORT_CORS_IMAGES && !e, i = !pg(A) && !e && !Eg(A) && typeof this._options.proxy == "string" && nt.SUPPORT_CORS_XHR && !r, e || this._options.allowTaint !== !1 || pg(A) || Eg(A) || i || r ? (d = A, i ? [4, this.proxy(d)] : [3, 2]) : [2];
          case 1:
            d = l.sent(), l.label = 2;
          case 2:
            return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(w, Q) {
              var g = new Image();
              g.onload = function() {
                return w(g);
              }, g.onerror = Q, (Jb(d) || r) && (g.crossOrigin = "anonymous"), g.src = d, g.complete === !0 && setTimeout(function() {
                return w(g);
              }, 500), 0 < c._options.imageTimeout && setTimeout(function() {
                return Q("Timed out (" + c._options.imageTimeout + "ms) loading image");
              }, c._options.imageTimeout);
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
    var e, r = this, i = this._options.proxy;
    if (i)
      return e = A.substring(0, 256), new Promise(function(d, c) {
        var l, w = nt.SUPPORT_RESPONSE_TYPE ? "blob" : "text", Q = new XMLHttpRequest(), g = (Q.onload = function() {
          var m;
          Q.status === 200 ? w == "text" ? d(Q.response) : ((m = new FileReader()).addEventListener("load", function() {
            return d(m.result);
          }, !1), m.addEventListener("error", function(b) {
            return c(b);
          }, !1), m.readAsDataURL(Q.response)) : c("Failed to proxy resource " + e + " with status code " + Q.status);
        }, Q.onerror = c, -1 < i.indexOf("?") ? "&" : "?");
        Q.open("GET", i + g + "url=" + encodeURIComponent(A) + "&responseType=" + w), w != "text" && Q instanceof XMLHttpRequest && (Q.responseType = w), r._options.imageTimeout && (l = r._options.imageTimeout, Q.timeout = l, Q.ontimeout = function() {
          return c("Timed out (" + l + "ms) proxying " + e);
        }), Q.send();
      });
    throw new Error("No proxy defined");
  }, t;
}(), Rb = /^data:image\/svg\+xml/i, Nb = /^data:image\/.*;base64,/i, Vb = /^data:image\/.*/i, Pb = function(t) {
  return nt.SUPPORT_SVG_DRAWING || !Xb(t);
}, pg = function(t) {
  return Vb.test(t);
}, Jb = function(t) {
  return Nb.test(t);
}, Eg = function(t) {
  return t.substr(0, 4) === "blob";
}, Xb = function(t) {
  return t.substr(-3).toLowerCase() === "svg" || Rb.test(t);
}, eA = function() {
  function t(A, e) {
    this.type = 0, this.x = A, this.y = e;
  }
  return t.prototype.add = function(A, e) {
    return new t(this.x + A, this.y + e);
  }, t;
}(), ra = function(t, A, e) {
  return new eA(t.x + (A.x - t.x) * e, t.y + (A.y - t.y) * e);
}, TB = function() {
  function t(A, e, r, i) {
    this.type = 1, this.start = A, this.startControl = e, this.endControl = r, this.end = i;
  }
  return t.prototype.subdivide = function(l, e) {
    var r = ra(this.start, this.startControl, l), c = ra(this.startControl, this.endControl, l), i = ra(this.endControl, this.end, l), d = ra(r, c, l), c = ra(c, i, l), l = ra(d, c, l);
    return e ? new t(this.start, r, d, l) : new t(l, c, i, this.end);
  }, t.prototype.add = function(A, e) {
    return new t(this.start.add(A, e), this.startControl.add(A, e), this.endControl.add(A, e), this.end.add(A, e));
  }, t.prototype.reverse = function() {
    return new t(this.end, this.endControl, this.startControl, this.start);
  }, t;
}(), pn = function(t) {
  return t.type === 1;
}, Wb = function(t) {
  var P = t.styles, A = t.bounds, e = (r = as(P.borderTopLeftRadius, A.width, A.height))[0], r = r[1], i = (d = as(P.borderTopRightRadius, A.width, A.height))[0], d = d[1], c = (l = as(P.borderBottomRightRadius, A.width, A.height))[0], l = l[1], w = (Q = as(P.borderBottomLeftRadius, A.width, A.height))[0], Q = Q[1];
  (g = []).push((e + i) / A.width), g.push((w + c) / A.width), g.push((r + Q) / A.height), g.push((d + l) / A.height), 1 < (g = Math.max.apply(Math, g)) && (e /= g, r /= g, i /= g, d /= g, c /= g, l /= g, w /= g, Q /= g);
  var g = A.width - i, m = A.height - l, b = A.width - c, v = A.height - Q, K = P.borderTopWidth, I = P.borderRightWidth, S = P.borderBottomWidth, O = P.borderLeftWidth, N = re(P.paddingTop, t.bounds.width), oA = re(P.paddingRight, t.bounds.width), q = re(P.paddingBottom, t.bounds.width), P = re(P.paddingLeft, t.bounds.width);
  this.topLeftBorderDoubleOuterBox = 0 < e || 0 < r ? ge(A.left + O / 3, A.top + K / 3, e - O / 3, r - K / 3, VA.TOP_LEFT) : new eA(A.left + O / 3, A.top + K / 3), this.topRightBorderDoubleOuterBox = 0 < e || 0 < r ? ge(A.left + g, A.top + K / 3, i - I / 3, d - K / 3, VA.TOP_RIGHT) : new eA(A.left + A.width - I / 3, A.top + K / 3), this.bottomRightBorderDoubleOuterBox = 0 < c || 0 < l ? ge(A.left + b, A.top + m, c - I / 3, l - S / 3, VA.BOTTOM_RIGHT) : new eA(A.left + A.width - I / 3, A.top + A.height - S / 3), this.bottomLeftBorderDoubleOuterBox = 0 < w || 0 < Q ? ge(A.left + O / 3, A.top + v, w - O / 3, Q - S / 3, VA.BOTTOM_LEFT) : new eA(A.left + O / 3, A.top + A.height - S / 3), this.topLeftBorderDoubleInnerBox = 0 < e || 0 < r ? ge(A.left + 2 * O / 3, A.top + 2 * K / 3, e - 2 * O / 3, r - 2 * K / 3, VA.TOP_LEFT) : new eA(A.left + 2 * O / 3, A.top + 2 * K / 3), this.topRightBorderDoubleInnerBox = 0 < e || 0 < r ? ge(A.left + g, A.top + 2 * K / 3, i - 2 * I / 3, d - 2 * K / 3, VA.TOP_RIGHT) : new eA(A.left + A.width - 2 * I / 3, A.top + 2 * K / 3), this.bottomRightBorderDoubleInnerBox = 0 < c || 0 < l ? ge(A.left + b, A.top + m, c - 2 * I / 3, l - 2 * S / 3, VA.BOTTOM_RIGHT) : new eA(A.left + A.width - 2 * I / 3, A.top + A.height - 2 * S / 3), this.bottomLeftBorderDoubleInnerBox = 0 < w || 0 < Q ? ge(A.left + 2 * O / 3, A.top + v, w - 2 * O / 3, Q - 2 * S / 3, VA.BOTTOM_LEFT) : new eA(A.left + 2 * O / 3, A.top + A.height - 2 * S / 3), this.topLeftBorderStroke = 0 < e || 0 < r ? ge(A.left + O / 2, A.top + K / 2, e - O / 2, r - K / 2, VA.TOP_LEFT) : new eA(A.left + O / 2, A.top + K / 2), this.topRightBorderStroke = 0 < e || 0 < r ? ge(A.left + g, A.top + K / 2, i - I / 2, d - K / 2, VA.TOP_RIGHT) : new eA(A.left + A.width - I / 2, A.top + K / 2), this.bottomRightBorderStroke = 0 < c || 0 < l ? ge(A.left + b, A.top + m, c - I / 2, l - S / 2, VA.BOTTOM_RIGHT) : new eA(A.left + A.width - I / 2, A.top + A.height - S / 2), this.bottomLeftBorderStroke = 0 < w || 0 < Q ? ge(A.left + O / 2, A.top + v, w - O / 2, Q - S / 2, VA.BOTTOM_LEFT) : new eA(A.left + O / 2, A.top + A.height - S / 2), this.topLeftBorderBox = 0 < e || 0 < r ? ge(A.left, A.top, e, r, VA.TOP_LEFT) : new eA(A.left, A.top), this.topRightBorderBox = 0 < i || 0 < d ? ge(A.left + g, A.top, i, d, VA.TOP_RIGHT) : new eA(A.left + A.width, A.top), this.bottomRightBorderBox = 0 < c || 0 < l ? ge(A.left + b, A.top + m, c, l, VA.BOTTOM_RIGHT) : new eA(A.left + A.width, A.top + A.height), this.bottomLeftBorderBox = 0 < w || 0 < Q ? ge(A.left, A.top + v, w, Q, VA.BOTTOM_LEFT) : new eA(A.left, A.top + A.height), this.topLeftPaddingBox = 0 < e || 0 < r ? ge(A.left + O, A.top + K, Math.max(0, e - O), Math.max(0, r - K), VA.TOP_LEFT) : new eA(A.left + O, A.top + K), this.topRightPaddingBox = 0 < i || 0 < d ? ge(A.left + Math.min(g, A.width - I), A.top + K, g > A.width + I ? 0 : Math.max(0, i - I), Math.max(0, d - K), VA.TOP_RIGHT) : new eA(A.left + A.width - I, A.top + K), this.bottomRightPaddingBox = 0 < c || 0 < l ? ge(A.left + Math.min(b, A.width - O), A.top + Math.min(m, A.height - S), Math.max(0, c - I), Math.max(0, l - S), VA.BOTTOM_RIGHT) : new eA(A.left + A.width - I, A.top + A.height - S), this.bottomLeftPaddingBox = 0 < w || 0 < Q ? ge(A.left + O, A.top + Math.min(v, A.height - S), Math.max(0, w - O), Math.max(0, Q - S), VA.BOTTOM_LEFT) : new eA(A.left + O, A.top + A.height - S), this.topLeftContentBox = 0 < e || 0 < r ? ge(A.left + O + P, A.top + K + N, Math.max(0, e - (O + P)), Math.max(0, r - (K + N)), VA.TOP_LEFT) : new eA(A.left + O + P, A.top + K + N), this.topRightContentBox = 0 < i || 0 < d ? ge(A.left + Math.min(g, A.width + O + P), A.top + K + N, g > A.width + O + P ? 0 : i - O + P, d - (K + N), VA.TOP_RIGHT) : new eA(A.left + A.width - (I + oA), A.top + K + N), this.bottomRightContentBox = 0 < c || 0 < l ? ge(A.left + Math.min(b, A.width - (O + P)), A.top + Math.min(m, A.height + K + N), Math.max(0, c - (I + oA)), l - (S + q), VA.BOTTOM_RIGHT) : new eA(A.left + A.width - (I + oA), A.top + A.height - (S + q)), this.bottomLeftContentBox = 0 < w || 0 < Q ? ge(A.left + O + P, A.top + v, Math.max(0, w - (O + P)), Q - (S + q), VA.BOTTOM_LEFT) : new eA(A.left + O + P, A.top + A.height - (S + q));
}, ge = (function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 1] = "TOP_RIGHT", t[t.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", t[t.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
}(VA = VA || {}), function(t, A, e, r, i) {
  var d = (Math.sqrt(2) - 1) / 3 * 4, c = e * d, l = r * d, w = t + e, Q = A + r;
  switch (i) {
    case VA.TOP_LEFT:
      return new TB(new eA(t, Q), new eA(t, Q - l), new eA(w - c, A), new eA(w, A));
    case VA.TOP_RIGHT:
      return new TB(new eA(t, A), new eA(t + c, A), new eA(w, Q - l), new eA(w, Q));
    case VA.BOTTOM_RIGHT:
      return new TB(new eA(w, A), new eA(w, A + l), new eA(t + c, Q), new eA(t, Q));
    default:
      return VA.BOTTOM_LEFT, new TB(new eA(w, Q), new eA(w - c, Q), new eA(t, A + l), new eA(t, A));
  }
}), cl = function(t) {
  return [t.topLeftBorderBox, t.topRightBorderBox, t.bottomRightBorderBox, t.bottomLeftBorderBox];
}, Yb = function(t) {
  return [t.topLeftContentBox, t.topRightContentBox, t.bottomRightContentBox, t.bottomLeftContentBox];
}, Bl = function(t) {
  return [t.topLeftPaddingBox, t.topRightPaddingBox, t.bottomRightPaddingBox, t.bottomLeftPaddingBox];
}, Zb = function(t, A, e) {
  this.offsetX = t, this.offsetY = A, this.matrix = e, this.type = 0, this.target = 6;
}, OB = function(t, A) {
  this.path = t, this.target = A, this.type = 1;
}, jb = function(t) {
  this.opacity = t, this.type = 2, this.target = 6;
}, qb = function(t) {
  return t.type === 0;
}, Zh = function(t) {
  return t.type === 1;
}, zb = function(t) {
  return t.type === 2;
}, VQ = function(t, A) {
  return t.length === A.length && t.some(function(e, r) {
    return e === A[r];
  });
}, $b = function(t, A, e, r, i) {
  return t.map(function(d, c) {
    switch (c) {
      case 0:
        return d.add(A, e);
      case 1:
        return d.add(A + r, e);
      case 2:
        return d.add(A + r, e + i);
      case 3:
        return d.add(A, e + i);
    }
    return d;
  });
}, jh = function(t) {
  this.element = t, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
}, qh = function() {
  function t(A, e) {
    var r;
    this.container = A, this.parent = e, this.effects = [], this.curves = new Wb(this.container), this.container.styles.opacity < 1 && this.effects.push(new jb(this.container.styles.opacity)), this.container.styles.transform !== null && (A = this.container.bounds.left + this.container.styles.transformOrigin[0].number, e = this.container.bounds.top + this.container.styles.transformOrigin[1].number, r = this.container.styles.transform, this.effects.push(new Zb(A, e, r))), this.container.styles.overflowX !== 0 && (A = cl(this.curves), e = Bl(this.curves), VQ(A, e) ? this.effects.push(new OB(A, 6)) : (this.effects.push(new OB(A, 2)), this.effects.push(new OB(e, 4))));
  }
  return t.prototype.getEffects = function(A) {
    for (var e = [2, 3].indexOf(this.container.styles.position) === -1, r = this.parent, i = this.effects.slice(0); r; ) {
      var d, c, l = r.effects.filter(function(w) {
        return !Zh(w);
      });
      e || r.container.styles.position !== 0 || !r.parent ? (i.unshift.apply(i, l), e = [2, 3].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0 && (d = cl(r.curves), c = Bl(r.curves), VQ(d, c) || i.unshift(new OB(c, 6)))) : i.unshift.apply(i, l), r = r.parent;
    }
    return i.filter(function(w) {
      return ke(w.target, A);
    });
  }, t;
}(), a0 = function(t, A, e, r) {
  t.container.elements.forEach(function(i) {
    var d, c, l, w, Q = ke(i.flags, 4), g = ke(i.flags, 2), m = new qh(i, t), b = (ke(i.styles.display, 2048) && r.push(m), ke(i.flags, 8) ? [] : r);
    Q || g ? (g = Q || i.styles.isPositioned() ? e : A, d = new jh(m), i.styles.isPositioned() || i.styles.opacity < 1 || i.styles.isTransformed() ? (c = i.styles.zIndex.order) < 0 ? (l = 0, g.negativeZIndex.some(function(v, K) {
      return c > v.element.container.styles.zIndex.order ? (l = K, !1) : 0 < l;
    }), g.negativeZIndex.splice(l, 0, d)) : 0 < c ? (w = 0, g.positiveZIndex.some(function(v, K) {
      return c >= v.element.container.styles.zIndex.order ? (w = K + 1, !1) : 0 < w;
    }), g.positiveZIndex.splice(w, 0, d)) : g.zeroOrAutoZIndexOrTransformedOrOpacity.push(d) : (i.styles.isFloating() ? g.nonPositionedFloats : g.nonPositionedInlineLevel).push(d), a0(m, d, Q ? d : e, b)) : ((i.styles.isInlineLevel() ? A.inlineLevel : A.nonInlineLevel).push(m), a0(m, A, e, b)), ke(i.flags, 8) && zh(i, b);
  });
}, zh = function(t, A) {
  for (var e = t instanceof n0 ? t.start : 1, r = t instanceof n0 && t.reversed, i = 0; i < A.length; i++) {
    var d = A[i];
    d.container instanceof Sh && typeof d.container.value == "number" && d.container.value !== 0 && (e = d.container.value), d.listValue = vs(e, d.container.styles.listStyleType, !0), e += r ? -1 : 1;
  }
}, A2 = function(A) {
  var A = new qh(A, null), e = new jh(A), r = [];
  return a0(A, e, e, r), zh(A.container, r), e;
}, PQ = function(t, A) {
  switch (A) {
    case 0:
      return Hn(t.topLeftBorderBox, t.topLeftPaddingBox, t.topRightBorderBox, t.topRightPaddingBox);
    case 1:
      return Hn(t.topRightBorderBox, t.topRightPaddingBox, t.bottomRightBorderBox, t.bottomRightPaddingBox);
    case 2:
      return Hn(t.bottomRightBorderBox, t.bottomRightPaddingBox, t.bottomLeftBorderBox, t.bottomLeftPaddingBox);
    default:
      return Hn(t.bottomLeftBorderBox, t.bottomLeftPaddingBox, t.topLeftBorderBox, t.topLeftPaddingBox);
  }
}, e2 = function(t, A) {
  switch (A) {
    case 0:
      return Hn(t.topLeftBorderBox, t.topLeftBorderDoubleOuterBox, t.topRightBorderBox, t.topRightBorderDoubleOuterBox);
    case 1:
      return Hn(t.topRightBorderBox, t.topRightBorderDoubleOuterBox, t.bottomRightBorderBox, t.bottomRightBorderDoubleOuterBox);
    case 2:
      return Hn(t.bottomRightBorderBox, t.bottomRightBorderDoubleOuterBox, t.bottomLeftBorderBox, t.bottomLeftBorderDoubleOuterBox);
    default:
      return Hn(t.bottomLeftBorderBox, t.bottomLeftBorderDoubleOuterBox, t.topLeftBorderBox, t.topLeftBorderDoubleOuterBox);
  }
}, t2 = function(t, A) {
  switch (A) {
    case 0:
      return Hn(t.topLeftBorderDoubleInnerBox, t.topLeftPaddingBox, t.topRightBorderDoubleInnerBox, t.topRightPaddingBox);
    case 1:
      return Hn(t.topRightBorderDoubleInnerBox, t.topRightPaddingBox, t.bottomRightBorderDoubleInnerBox, t.bottomRightPaddingBox);
    case 2:
      return Hn(t.bottomRightBorderDoubleInnerBox, t.bottomRightPaddingBox, t.bottomLeftBorderDoubleInnerBox, t.bottomLeftPaddingBox);
    default:
      return Hn(t.bottomLeftBorderDoubleInnerBox, t.bottomLeftPaddingBox, t.topLeftBorderDoubleInnerBox, t.topLeftPaddingBox);
  }
}, n2 = function(t, A) {
  switch (A) {
    case 0:
      return MB(t.topLeftBorderStroke, t.topRightBorderStroke);
    case 1:
      return MB(t.topRightBorderStroke, t.bottomRightBorderStroke);
    case 2:
      return MB(t.bottomRightBorderStroke, t.bottomLeftBorderStroke);
    default:
      return MB(t.bottomLeftBorderStroke, t.topLeftBorderStroke);
  }
}, MB = function(t, A) {
  var e = [];
  return pn(t) ? e.push(t.subdivide(0.5, !1)) : e.push(t), pn(A) ? e.push(A.subdivide(0.5, !0)) : e.push(A), e;
}, Hn = function(t, A, e, r) {
  var i = [];
  return pn(t) ? i.push(t.subdivide(0.5, !1)) : i.push(t), pn(e) ? i.push(e.subdivide(0.5, !0)) : i.push(e), pn(r) ? i.push(r.subdivide(0.5, !0).reverse()) : i.push(r), pn(A) ? i.push(A.subdivide(0.5, !1).reverse()) : i.push(A), i;
}, $h = function(e) {
  var A = e.bounds, e = e.styles;
  return A.add(e.borderLeftWidth, e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth), -(e.borderTopWidth + e.borderBottomWidth));
}, ll = function(e) {
  var A = e.styles, e = e.bounds, r = re(A.paddingLeft, e.width), i = re(A.paddingRight, e.width), d = re(A.paddingTop, e.width), c = re(A.paddingBottom, e.width);
  return e.add(r + A.borderLeftWidth, d + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + r + i), -(A.borderTopWidth + A.borderBottomWidth + d + c));
}, r2 = function(t, A) {
  return t === 0 ? A.bounds : (t === 2 ? ll : $h)(A);
}, u2 = function(t, A) {
  return t === 0 ? A.bounds : (t === 2 ? ll : $h)(A);
}, mg = function(t, A, d) {
  var r = r2(ca(t.styles.backgroundOrigin, A), t), i = u2(ca(t.styles.backgroundClip, A), t), d = o2(ca(t.styles.backgroundSize, A), d, r), c = d[0], l = d[1], w = as(ca(t.styles.backgroundPosition, A), r.width - c, r.height - l);
  return [i2(ca(t.styles.backgroundRepeat, A), w, d, r, i), Math.round(r.left + w[0]), Math.round(r.top + w[1]), c, l];
}, ua = function(t) {
  return WA(t) && t.value === Qa.AUTO;
}, GB = function(t) {
  return typeof t == "number";
}, o2 = function(l, d, e) {
  var r = d[0], i = d[1], d = d[2], c = l[0], l = l[1];
  if (!c)
    return [0, 0];
  if (Se(c) && l && Se(l))
    return [re(c, e.width), re(l, e.height)];
  var w = GB(d);
  if (WA(c) && (c.value === Qa.CONTAIN || c.value === Qa.COVER))
    return GB(d) ? e.width / e.height < d != (c.value === Qa.COVER) ? [e.width, e.width / d] : [e.height * d, e.height] : [e.width, e.height];
  var Q = GB(r), g = GB(i), m = Q || g;
  if (ua(c) && (!l || ua(l)))
    return Q && g ? [r, i] : w || m ? m && w ? [Q ? r : i * d, g ? i : r / d] : [Q ? r : e.width, g ? i : e.height] : [e.width, e.height];
  if (w)
    return w = m = 0, Se(c) ? m = re(c, e.width) : Se(l) && (w = re(l, e.height)), ua(c) ? m = w * d : l && !ua(l) || (w = m / d), [m, w];
  if (d = null, m = null, Se(c) ? d = re(c, e.width) : l && Se(l) && (m = re(l, e.height)), (d = (m = d === null || l && !ua(l) ? m : Q && g ? d / r * i : e.height) !== null && ua(c) ? Q && g ? m / i * r : e.width : d) !== null && m !== null)
    return [d, m];
  throw new Error("Unable to calculate background-size for element");
}, ca = function(t, A) {
  return A = t[A], A === void 0 ? t[0] : A;
}, i2 = function(t, A, e, r, i) {
  var d = A[0], c = A[1], l = e[0], w = e[1];
  switch (t) {
    case 2:
      return [new eA(Math.round(r.left), Math.round(r.top + c)), new eA(Math.round(r.left + r.width), Math.round(r.top + c)), new eA(Math.round(r.left + r.width), Math.round(w + r.top + c)), new eA(Math.round(r.left), Math.round(w + r.top + c))];
    case 3:
      return [new eA(Math.round(r.left + d), Math.round(r.top)), new eA(Math.round(r.left + d + l), Math.round(r.top)), new eA(Math.round(r.left + d + l), Math.round(r.height + r.top)), new eA(Math.round(r.left + d), Math.round(r.height + r.top))];
    case 1:
      return [new eA(Math.round(r.left + d), Math.round(r.top + c)), new eA(Math.round(r.left + d + l), Math.round(r.top + c)), new eA(Math.round(r.left + d + l), Math.round(r.top + c + w)), new eA(Math.round(r.left + d), Math.round(r.top + c + w))];
    default:
      return [new eA(Math.round(i.left), Math.round(i.top)), new eA(Math.round(i.left + i.width), Math.round(i.top)), new eA(Math.round(i.left + i.width), Math.round(i.height + i.top)), new eA(Math.round(i.left), Math.round(i.height + i.top))];
  }
}, a2 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", JQ = "Hidden Text", d2 = function() {
  function t(A) {
    this._data = {}, this._document = A;
  }
  return t.prototype.parseMetrics = function(l, w) {
    var r = this._document.createElement("div"), i = this._document.createElement("img"), d = this._document.createElement("span"), c = this._document.body, l = (r.style.visibility = "hidden", r.style.fontFamily = l, r.style.fontSize = w, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", c.appendChild(r), i.src = a2, i.width = 1, i.height = 1, i.style.margin = "0", i.style.padding = "0", i.style.verticalAlign = "baseline", d.style.fontFamily = l, d.style.fontSize = w, d.style.margin = "0", d.style.padding = "0", d.appendChild(this._document.createTextNode(JQ)), r.appendChild(d), r.appendChild(i), i.offsetTop - d.offsetTop + 2), w = (r.removeChild(d), r.appendChild(this._document.createTextNode(JQ)), r.style.lineHeight = "normal", i.style.verticalAlign = "super", i.offsetTop - r.offsetTop + 2);
    return c.removeChild(r), { baseline: l, middle: w };
  }, t.prototype.getMetrics = function(A, e) {
    var r = A + " " + e;
    return this._data[r] === void 0 && (this._data[r] = this.parseMetrics(A, e)), this._data[r];
  }, t;
}(), AF = function(t, A) {
  this.context = t, this.options = A;
}, s2 = 1e4, c2 = function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, e._activeEffects = [], e.canvas = r.canvas || document.createElement("canvas"), e.ctx = e.canvas.getContext("2d"), r.canvas || (e.canvas.width = Math.floor(r.width * r.scale), e.canvas.height = Math.floor(r.height * r.scale), e.canvas.style.width = r.width + "px", e.canvas.style.height = r.height + "px"), e.fontMetrics = new d2(document), e.ctx.scale(e.options.scale, e.options.scale), e.ctx.translate(-r.x, -r.y), e.ctx.textBaseline = "bottom", e._activeEffects = [], e.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), e;
  }
  return Wn(A, t), A.prototype.applyEffects = function(e) {
    for (var r = this; this._activeEffects.length; )
      this.popEffect();
    e.forEach(function(i) {
      return r.applyEffect(i);
    });
  }, A.prototype.applyEffect = function(e) {
    this.ctx.save(), zb(e) && (this.ctx.globalAlpha = e.opacity), qb(e) && (this.ctx.translate(e.offsetX, e.offsetY), this.ctx.transform(e.matrix[0], e.matrix[1], e.matrix[2], e.matrix[3], e.matrix[4], e.matrix[5]), this.ctx.translate(-e.offsetX, -e.offsetY)), Zh(e) && (this.path(e.path), this.ctx.clip()), this._activeEffects.push(e);
  }, A.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, A.prototype.renderStack = function(e) {
    return Ht(this, void 0, void 0, function() {
      return gt(this, function(r) {
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
  }, A.prototype.renderNode = function(e) {
    return Ht(this, void 0, void 0, function() {
      return gt(this, function(r) {
        switch (r.label) {
          case 0:
            return ke(e.container.flags, 16), e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
          case 1:
            return r.sent(), [4, this.renderNodeContent(e)];
          case 2:
            r.sent(), r.label = 3;
          case 3:
            return [2];
        }
      });
    });
  }, A.prototype.renderTextWithLetterSpacing = function(e, r, i) {
    var d = this;
    r === 0 ? this.ctx.fillText(e.text, e.bounds.left, e.bounds.top + i) : w0(e.text).reduce(function(c, l) {
      return d.ctx.fillText(l, c, e.bounds.top + i), c + d.ctx.measureText(l).width;
    }, e.bounds.left);
  }, A.prototype.createFontStyle = function(e) {
    var r = e.fontVariant.filter(function(c) {
      return c === "normal" || c === "small-caps";
    }).join(""), i = w2(e.fontFamily).join(", "), d = hs(e.fontSize) ? "" + e.fontSize.number + e.fontSize.unit : e.fontSize.number + "px";
    return [[e.fontStyle, r, e.fontWeight, d, i].join(" "), i, d];
  }, A.prototype.renderTextNode = function(e, r) {
    return Ht(this, void 0, void 0, function() {
      var i, d, c, l, w, Q, g = this;
      return gt(this, function(m) {
        return d = this.createFontStyle(r), c = d[0], i = d[1], d = d[2], this.ctx.font = c, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", c = this.fontMetrics.getMetrics(i, d), l = c.baseline, w = c.middle, Q = r.paintOrder, e.textBounds.forEach(function(b) {
          Q.forEach(function(v) {
            switch (v) {
              case 0:
                g.ctx.fillStyle = Xe(r.color), g.renderTextWithLetterSpacing(b, r.letterSpacing, l);
                var K = r.textShadow;
                K.length && b.text.trim().length && (K.slice(0).reverse().forEach(function(I) {
                  g.ctx.shadowColor = Xe(I.color), g.ctx.shadowOffsetX = I.offsetX.number * g.options.scale, g.ctx.shadowOffsetY = I.offsetY.number * g.options.scale, g.ctx.shadowBlur = I.blur.number, g.renderTextWithLetterSpacing(b, r.letterSpacing, l);
                }), g.ctx.shadowColor = "", g.ctx.shadowOffsetX = 0, g.ctx.shadowOffsetY = 0, g.ctx.shadowBlur = 0), r.textDecorationLine.length && (g.ctx.fillStyle = Xe(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(I) {
                  switch (I) {
                    case 1:
                      g.ctx.fillRect(b.bounds.left, Math.round(b.bounds.top + l), b.bounds.width, 1);
                      break;
                    case 2:
                      g.ctx.fillRect(b.bounds.left, Math.round(b.bounds.top), b.bounds.width, 1);
                      break;
                    case 3:
                      g.ctx.fillRect(b.bounds.left, Math.ceil(b.bounds.top + w), b.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                r.webkitTextStrokeWidth && b.text.trim().length && (g.ctx.strokeStyle = Xe(r.webkitTextStrokeColor), g.ctx.lineWidth = r.webkitTextStrokeWidth, g.ctx.lineJoin = window.chrome ? "miter" : "round", g.ctx.strokeText(b.text, b.bounds.left, b.bounds.top + l)), g.ctx.strokeStyle = "", g.ctx.lineWidth = 0, g.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, A.prototype.renderReplacedElement = function(e, r, i) {
    var d;
    i && 0 < e.intrinsicWidth && 0 < e.intrinsicHeight && (d = ll(e), r = Bl(r), this.path(r), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(i, 0, 0, e.intrinsicWidth, e.intrinsicHeight, d.left, d.top, d.width, d.height), this.ctx.restore());
  }, A.prototype.renderNodeContent = function(e) {
    return Ht(this, void 0, void 0, function() {
      var r, i, d, c, l, w, Q, g, m, b, v, K, I;
      return gt(this, function(S) {
        switch (S.label) {
          case 0:
            this.applyEffects(e.getEffects(4)), r = e.container, i = e.curves, d = r.styles, c = 0, l = r.textNodes, S.label = 1;
          case 1:
            return c < l.length ? (w = l[c], [4, this.renderTextNode(w, d)]) : [3, 4];
          case 2:
            S.sent(), S.label = 3;
          case 3:
            return c++, [3, 1];
          case 4:
            if (!(r instanceof Lh))
              return [3, 8];
            S.label = 5;
          case 5:
            return S.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
          case 6:
            return b = S.sent(), this.renderReplacedElement(r, i, b), [3, 8];
          case 7:
            return S.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
          case 8:
            if (r instanceof xh && this.renderReplacedElement(r, i, r.canvas), !(r instanceof _h))
              return [3, 12];
            S.label = 9;
          case 9:
            return S.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
          case 10:
            return b = S.sent(), this.renderReplacedElement(r, i, b), [3, 12];
          case 11:
            return S.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
          case 12:
            return r instanceof Mh && r.tree ? [4, new A(this.context, { scale: this.options.scale, backgroundColor: r.backgroundColor, x: 0, y: 0, width: r.width, height: r.height }).render(r.tree)] : [3, 14];
          case 13:
            w = S.sent(), r.width && r.height && this.ctx.drawImage(w, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), S.label = 14;
          case 14:
            if (r instanceof Q0 && (Q = Math.min(r.bounds.width, r.bounds.height), r.type === il ? r.checked && (this.ctx.save(), this.path([new eA(r.bounds.left + 0.39363 * Q, r.bounds.top + 0.79 * Q), new eA(r.bounds.left + 0.16 * Q, r.bounds.top + 0.5549 * Q), new eA(r.bounds.left + 0.27347 * Q, r.bounds.top + 0.44071 * Q), new eA(r.bounds.left + 0.39694 * Q, r.bounds.top + 0.5649 * Q), new eA(r.bounds.left + 0.72983 * Q, r.bounds.top + 0.23 * Q), new eA(r.bounds.left + 0.84 * Q, r.bounds.top + 0.34085 * Q), new eA(r.bounds.left + 0.39363 * Q, r.bounds.top + 0.79 * Q)]), this.ctx.fillStyle = Xe(LQ), this.ctx.fill(), this.ctx.restore()) : r.type === al && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + Q / 2, r.bounds.top + Q / 2, Q / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = Xe(LQ), this.ctx.fill(), this.ctx.restore())), B2(r) && r.value.length) {
              switch (Q = this.createFontStyle(d), K = Q[0], v = Q[1], v = this.fontMetrics.getMetrics(K, v).baseline, this.ctx.font = K, this.ctx.fillStyle = Xe(d.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = f2(r.styles.textAlign), I = ll(r), g = 0, r.styles.textAlign) {
                case 1:
                  g += I.width / 2;
                  break;
                case 2:
                  g += I.width;
              }
              m = I.add(g, 0, 0, -I.height / 2 + 1), this.ctx.save(), this.path([new eA(I.left, I.top), new eA(I.left + I.width, I.top), new eA(I.left + I.width, I.top + I.height), new eA(I.left, I.top + I.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ps(r.value, m), d.letterSpacing, v), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
            }
            if (!ke(r.styles.display, 2048))
              return [3, 20];
            if (r.styles.listStyleImage === null)
              return [3, 19];
            if ((m = r.styles.listStyleImage).type !== 0)
              return [3, 18];
            b = void 0, v = m.url, S.label = 15;
          case 15:
            return S.trys.push([15, 17, , 18]), [4, this.context.cache.match(v)];
          case 16:
            return b = S.sent(), this.ctx.drawImage(b, r.bounds.left - (b.width + 10), r.bounds.top), [3, 18];
          case 17:
            return S.sent(), this.context.logger.error("Error loading list-style-image " + v), [3, 18];
          case 18:
            return [3, 20];
          case 19:
            e.listValue && r.styles.listStyleType !== -1 && (K = this.createFontStyle(d)[0], this.ctx.font = K, this.ctx.fillStyle = Xe(d.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", I = new jr(r.bounds.left, r.bounds.top + re(r.styles.paddingTop, r.bounds.width), r.bounds.width, BQ(d.lineHeight, d.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new ps(e.listValue, I), d.letterSpacing, BQ(d.lineHeight, d.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), S.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, A.prototype.renderStackContent = function(e) {
    return Ht(this, void 0, void 0, function() {
      var r, i, d, c, l, w, Q, g, m, b, v, K, I, S, O;
      return gt(this, function(N) {
        switch (N.label) {
          case 0:
            return ke(e.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(e.element)];
          case 1:
            N.sent(), r = 0, i = e.negativeZIndex, N.label = 2;
          case 2:
            return r < i.length ? (O = i[r], [4, this.renderStack(O)]) : [3, 5];
          case 3:
            N.sent(), N.label = 4;
          case 4:
            return r++, [3, 2];
          case 5:
            return [4, this.renderNodeContent(e.element)];
          case 6:
            N.sent(), d = 0, c = e.nonInlineLevel, N.label = 7;
          case 7:
            return d < c.length ? (O = c[d], [4, this.renderNode(O)]) : [3, 10];
          case 8:
            N.sent(), N.label = 9;
          case 9:
            return d++, [3, 7];
          case 10:
            l = 0, w = e.nonPositionedFloats, N.label = 11;
          case 11:
            return l < w.length ? (O = w[l], [4, this.renderStack(O)]) : [3, 14];
          case 12:
            N.sent(), N.label = 13;
          case 13:
            return l++, [3, 11];
          case 14:
            Q = 0, g = e.nonPositionedInlineLevel, N.label = 15;
          case 15:
            return Q < g.length ? (O = g[Q], [4, this.renderStack(O)]) : [3, 18];
          case 16:
            N.sent(), N.label = 17;
          case 17:
            return Q++, [3, 15];
          case 18:
            m = 0, b = e.inlineLevel, N.label = 19;
          case 19:
            return m < b.length ? (O = b[m], [4, this.renderNode(O)]) : [3, 22];
          case 20:
            N.sent(), N.label = 21;
          case 21:
            return m++, [3, 19];
          case 22:
            v = 0, K = e.zeroOrAutoZIndexOrTransformedOrOpacity, N.label = 23;
          case 23:
            return v < K.length ? (O = K[v], [4, this.renderStack(O)]) : [3, 26];
          case 24:
            N.sent(), N.label = 25;
          case 25:
            return v++, [3, 23];
          case 26:
            I = 0, S = e.positiveZIndex, N.label = 27;
          case 27:
            return I < S.length ? (O = S[I], [4, this.renderStack(O)]) : [3, 30];
          case 28:
            N.sent(), N.label = 29;
          case 29:
            return I++, [3, 27];
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
    var r = this;
    e.forEach(function(i, d) {
      var c = pn(i) ? i.start : i;
      d === 0 ? r.ctx.moveTo(c.x, c.y) : r.ctx.lineTo(c.x, c.y), pn(i) && r.ctx.bezierCurveTo(i.startControl.x, i.startControl.y, i.endControl.x, i.endControl.y, i.end.x, i.end.y);
    });
  }, A.prototype.renderRepeat = function(e, r, i, d) {
    this.path(e), this.ctx.fillStyle = r, this.ctx.translate(i, d), this.ctx.fill(), this.ctx.translate(-i, -d);
  }, A.prototype.resizeImage = function(e, r, i) {
    var d;
    return e.width === r && e.height === i ? e : ((d = ((d = this.canvas.ownerDocument) != null ? d : document).createElement("canvas")).width = Math.max(1, r), d.height = Math.max(1, i), d.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, r, i), d);
  }, A.prototype.renderBackgroundImage = function(e) {
    return Ht(this, void 0, void 0, function() {
      var r, i, d, c, l, w;
      return gt(this, function(Q) {
        switch (Q.label) {
          case 0:
            r = e.styles.backgroundImage.length - 1, i = function(g) {
              var m, b, v, K, I, S, O, N, oA, q, P, wA, Z, IA, DA, JA, we, _A, RA, We, de;
              return gt(this, function(ue) {
                switch (ue.label) {
                  case 0:
                    if (g.type !== 0)
                      return [3, 5];
                    m = void 0, b = g.url, ue.label = 1;
                  case 1:
                    return ue.trys.push([1, 3, , 4]), [4, d.context.cache.match(b)];
                  case 2:
                    return m = ue.sent(), [3, 4];
                  case 3:
                    return ue.sent(), d.context.logger.error("Error loading background-image " + b), [3, 4];
                  case 4:
                    return m && (q = mg(e, r, [m.width, m.height, m.width / m.height]), S = q[0], wA = q[1], Z = q[2], oA = q[3], q = q[4], K = d.ctx.createPattern(d.resizeImage(m, oA, q), "repeat"), d.renderRepeat(S, K, wA, Z)), [3, 6];
                  case 5:
                    zH(g) ? (P = mg(e, r, [null, null, null]), S = P[0], wA = P[1], Z = P[2], oA = P[3], q = P[4], P = WH(g.angle, oA, q), IA = P[0], I = P[1], N = P[2], O = P[3], P = P[4], (JA = document.createElement("canvas")).width = oA, JA.height = q, DA = JA.getContext("2d"), v = DA.createLinearGradient(I, O, N, P), sQ(g.stops, IA).forEach(function(se) {
                      return v.addColorStop(se.stop, Xe(se.color));
                    }), DA.fillStyle = v, DA.fillRect(0, 0, oA, q), 0 < oA && 0 < q && (K = d.ctx.createPattern(JA, "repeat"), d.renderRepeat(S, K, wA, Z))) : $H(g) && (I = mg(e, r, [null, null, null]), S = I[0], O = I[1], N = I[2], oA = I[3], q = I[4], P = g.position.length === 0 ? [g0] : g.position, wA = re(P[0], oA), Z = re(P[P.length - 1], q), IA = YH(g, wA, Z, oA, q), DA = IA[0], JA = IA[1], 0 < DA) && 0 < JA && (we = d.ctx.createRadialGradient(O + wA, N + Z, 0, O + wA, N + Z, DA), sQ(g.stops, 2 * DA).forEach(function(se) {
                      return we.addColorStop(se.stop, Xe(se.color));
                    }), d.path(S), d.ctx.fillStyle = we, DA !== JA ? (_A = e.bounds.left + 0.5 * e.bounds.width, RA = e.bounds.top + 0.5 * e.bounds.height, de = 1 / (We = JA / DA), d.ctx.save(), d.ctx.translate(_A, RA), d.ctx.transform(1, 0, 0, We, 0, 0), d.ctx.translate(-_A, -RA), d.ctx.fillRect(O, de * (N - RA) + RA, oA, q * de), d.ctx.restore()) : d.ctx.fill()), ue.label = 6;
                  case 6:
                    return r--, [2];
                }
              });
            }, d = this, c = 0, l = e.styles.backgroundImage.slice(0).reverse(), Q.label = 1;
          case 1:
            return c < l.length ? (w = l[c], [5, i(w)]) : [3, 4];
          case 2:
            Q.sent(), Q.label = 3;
          case 3:
            return c++, [3, 1];
          case 4:
            return [2];
        }
      });
    });
  }, A.prototype.renderSolidBorder = function(e, r, i) {
    return Ht(this, void 0, void 0, function() {
      return gt(this, function(d) {
        return this.path(PQ(i, r)), this.ctx.fillStyle = Xe(e), this.ctx.fill(), [2];
      });
    });
  }, A.prototype.renderDoubleBorder = function(e, r, i, d) {
    return Ht(this, void 0, void 0, function() {
      var c;
      return gt(this, function(l) {
        switch (l.label) {
          case 0:
            return r < 3 ? [4, this.renderSolidBorder(e, i, d)] : [3, 2];
          case 1:
            return l.sent(), [2];
          case 2:
            return c = e2(d, i), this.path(c), this.ctx.fillStyle = Xe(e), this.ctx.fill(), c = t2(d, i), this.path(c), this.ctx.fill(), [2];
        }
      });
    });
  }, A.prototype.renderNodeBackgroundAndBorders = function(e) {
    return Ht(this, void 0, void 0, function() {
      var r, i, d, c, l, w, Q, g, m = this;
      return gt(this, function(b) {
        switch (b.label) {
          case 0:
            return this.applyEffects(e.getEffects(2)), r = e.container.styles, i = !Su(r.backgroundColor) || r.backgroundImage.length, d = [{ style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth }, { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth }, { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth }, { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }], c = l2(ca(r.backgroundClip, 0), e.curves), i || r.boxShadow.length ? (this.ctx.save(), this.path(c), this.ctx.clip(), Su(r.backgroundColor) || (this.ctx.fillStyle = Xe(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(e.container)]) : [3, 2];
          case 1:
            b.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(v) {
              m.ctx.save();
              var K = cl(e.curves), I = v.inset ? 0 : s2, S = $b(K, -I + (v.inset ? 1 : -1) * v.spread.number, (v.inset ? 1 : -1) * v.spread.number, v.spread.number * (v.inset ? -2 : 2), v.spread.number * (v.inset ? -2 : 2));
              v.inset ? (m.path(K), m.ctx.clip(), m.mask(S)) : (m.mask(K), m.ctx.clip(), m.path(S)), m.ctx.shadowOffsetX = v.offsetX.number + I, m.ctx.shadowOffsetY = v.offsetY.number, m.ctx.shadowColor = Xe(v.color), m.ctx.shadowBlur = v.blur.number, m.ctx.fillStyle = v.inset ? Xe(v.color) : "rgba(0,0,0,1)", m.ctx.fill(), m.ctx.restore();
            }), b.label = 2;
          case 2:
            w = l = 0, Q = d, b.label = 3;
          case 3:
            return w < Q.length ? (g = Q[w]).style !== 0 && !Su(g.color) && 0 < g.width ? g.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(g.color, g.width, l, e.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return b.sent(), [3, 11];
          case 5:
            return g.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(g.color, g.width, l, e.curves, 3)];
          case 6:
            return b.sent(), [3, 11];
          case 7:
            return g.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(g.color, g.width, l, e.curves)];
          case 8:
            return b.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(g.color, l, e.curves)];
          case 10:
            b.sent(), b.label = 11;
          case 11:
            l++, b.label = 12;
          case 12:
            return w++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, A.prototype.renderDashedDottedBorder = function(e, r, i, d, c) {
    return Ht(this, void 0, void 0, function() {
      var l, w, Q, g, m, b, v, K, I, S, O;
      return gt(this, function(N) {
        return this.ctx.save(), m = n2(d, i), l = PQ(d, i), c === 2 && (this.path(l), this.ctx.clip()), I = (pn(l[0]) ? (w = l[0].start.x, l[0].start) : (w = l[0].x, l[0])).y, g = (pn(l[1]) ? (Q = l[1].end.x, l[1].end) : (Q = l[1].x, l[1])).y, I = Math.abs(i === 0 || i === 2 ? w - Q : I - g), this.ctx.beginPath(), c === 3 ? this.formatPath(m) : this.formatPath(l.slice(0, 2)), g = r < 3 ? 3 * r : 2 * r, m = r < 3 ? 2 * r : r, c === 3 && (m = g = r), b = !0, I <= 2 * g ? b = !1 : I <= 2 * g + m ? (g *= v = I / (2 * g + m), m *= v) : (v = Math.floor((I + m) / (g + m)), K = (I - v * g) / (v - 1), m = (I = (I - (v + 1) * g) / v) <= 0 || Math.abs(m - K) < Math.abs(m - I) ? K : I), b && (c === 3 ? this.ctx.setLineDash([0, g + m]) : this.ctx.setLineDash([g, m])), c === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = 2 * r + 1.1, this.ctx.strokeStyle = Xe(e), this.ctx.stroke(), this.ctx.setLineDash([]), c === 2 && (pn(l[0]) && (S = l[3], O = l[0], this.ctx.beginPath(), this.formatPath([new eA(S.end.x, S.end.y), new eA(O.start.x, O.start.y)]), this.ctx.stroke()), pn(l[1])) && (S = l[1], O = l[2], this.ctx.beginPath(), this.formatPath([new eA(S.end.x, S.end.y), new eA(O.start.x, O.start.y)]), this.ctx.stroke()), this.ctx.restore(), [2];
      });
    });
  }, A.prototype.render = function(e) {
    return Ht(this, void 0, void 0, function() {
      var r;
      return gt(this, function(i) {
        switch (i.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = Xe(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = A2(e), [4, this.renderStack(r)];
          case 1:
            return i.sent(), this.applyEffects([]), [2, this.canvas];
        }
      });
    });
  }, A;
}(AF), B2 = function(t) {
  return t instanceof Oh || t instanceof Th || t instanceof Q0 && t.type !== al && t.type !== il;
}, l2 = function(t, A) {
  switch (t) {
    case 0:
      return cl(A);
    case 2:
      return Yb(A);
    default:
      return Bl(A);
  }
}, f2 = function(t) {
  switch (t) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, g2 = ["-apple-system", "system-ui"], w2 = function(t) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? t.filter(function(A) {
    return g2.indexOf(A) === -1;
  }) : t;
}, Q2 = function(t) {
  function A(e, r) {
    return e = t.call(this, e, r) || this, e.canvas = r.canvas || document.createElement("canvas"), e.ctx = e.canvas.getContext("2d"), e.options = r, e.canvas.width = Math.floor(r.width * r.scale), e.canvas.height = Math.floor(r.height * r.scale), e.canvas.style.width = r.width + "px", e.canvas.style.height = r.height + "px", e.ctx.scale(e.options.scale, e.options.scale), e.ctx.translate(-r.x, -r.y), e.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), e;
  }
  return Wn(A, t), A.prototype.render = function(e) {
    return Ht(this, void 0, void 0, function() {
      var r;
      return gt(this, function(i) {
        switch (i.label) {
          case 0:
            return r = t0(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, e), [4, C2(r)];
          case 1:
            return r = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = Xe(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(r, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  }, A;
}(AF), C2 = function(t) {
  return new Promise(function(A, e) {
    var r = new Image();
    r.onload = function() {
      A(r);
    }, r.onerror = e, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
  });
}, h2 = function() {
  function t(r) {
    var e = r.id, r = r.enabled;
    this.id = e, this.enabled = r, this.start = Date.now();
  }
  return t.prototype.debug = function() {
    for (var A = [], e = 0; e < arguments.length; e++)
      A[e] = arguments[e];
    this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, sB([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, t.prototype.getTime = function() {
    return Date.now() - this.start;
  }, t.prototype.info = function() {
    for (var A = [], e = 0; e < arguments.length; e++)
      A[e] = arguments[e];
    this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, sB([this.id, this.getTime() + "ms"], A));
  }, t.prototype.warn = function() {
    for (var A = [], e = 0; e < arguments.length; e++)
      A[e] = arguments[e];
    this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, sB([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, t.prototype.error = function() {
    for (var A = [], e = 0; e < arguments.length; e++)
      A[e] = arguments[e];
    this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, sB([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, t.instances = {}, t;
}(), F2 = function() {
  function t(A, e) {
    this.windowBounds = e, this.instanceName = "#" + t.instanceCount++, this.logger = new h2({ id: this.instanceName, enabled: A.logging }), this.cache = (e = A.cache) != null ? e : new kb(this, A);
  }
  return t.instanceCount = 1, t;
}(), U2 = function(t, A) {
  return p2(t, A = A === void 0 ? {} : A);
}, p2 = (typeof window < "u" && Yh.setContext(window), function(t, A) {
  return Ht(void 0, void 0, void 0, function() {
    var e, r, i, d, c, l, w, Q, g, m, b, v, K, I, S, O;
    return gt(this, function(N) {
      switch (N.label) {
        case 0:
          if (!t || typeof t != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (!(K = t.ownerDocument))
            throw new Error("Element is not attached to a Document");
          if (e = K.defaultView)
            return I = { allowTaint: (I = A.allowTaint) != null && I, imageTimeout: (I = A.imageTimeout) != null ? I : 15e3, proxy: A.proxy, useCORS: (I = A.useCORS) != null && I }, m = th({ logging: (m = A.logging) == null || m, cache: A.cache }, I), I = { windowWidth: (I = A.windowWidth) != null ? I : e.innerWidth, windowHeight: (I = A.windowHeight) != null ? I : e.innerHeight, scrollX: (I = A.scrollX) != null ? I : e.pageXOffset, scrollY: (I = A.scrollY) != null ? I : e.pageYOffset }, I = new jr(I.scrollX, I.scrollY, I.windowWidth, I.windowHeight), m = new F2(m, I), b = (b = A.foreignObjectRendering) != null && b, v = { allowTaint: (v = A.allowTaint) != null && v, onclone: A.onclone, ignoreElements: A.ignoreElements, inlineImages: b, copyStyles: b }, m.logger.debug("Starting document clone with size " + I.width + "x" + I.height + " scrolled to " + -I.left + "," + -I.top), v = new RQ(m, t, v), (r = v.clonedReferenceElement) ? [4, v.toIFrame(K, I)] : [2, Promise.reject("Unable to find element in cloned iframe")];
          throw new Error("Document is not attached to a Window");
        case 1:
          return i = N.sent(), v = C0(r) || Eb(r) ? tD(r.ownerDocument) : Cl(m, r), d = v.width, c = v.height, l = v.left, w = v.top, Q = E2(m, r, A.backgroundColor), S = { canvas: A.canvas, backgroundColor: Q, scale: (I = (K = A.scale) != null ? K : e.devicePixelRatio) != null ? I : 1, x: ((S = A.x) != null ? S : 0) + l, y: ((S = A.y) != null ? S : 0) + w, width: (S = A.width) != null ? S : Math.ceil(d), height: (S = A.height) != null ? S : Math.ceil(c) }, b ? (m.logger.debug("Document cloned, using foreign object rendering"), [4, new Q2(m, S).render(r)]) : [3, 3];
        case 2:
          return g = N.sent(), [3, 5];
        case 3:
          return m.logger.debug("Document cloned, element located at " + l + "," + w + " with size " + d + "x" + c + " using computed rendering"), m.logger.debug("Starting DOM parsing"), O = kh(m, r), Q === O.styles.backgroundColor && (O.styles.backgroundColor = Zr.TRANSPARENT), m.logger.debug("Starting renderer for element at " + S.x + "," + S.y + " with size " + S.width + "x" + S.height), [4, new c2(m, S).render(O)];
        case 4:
          g = N.sent(), N.label = 5;
        case 5:
          return (O = A.removeContainer) != null && !O || RQ.destroy(i) || m.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore"), m.logger.debug("Finished rendering"), [2, g];
      }
    });
  });
}), E2 = function(c, A, e) {
  var r = A.ownerDocument, i = r.documentElement ? Fs(c, getComputedStyle(r.documentElement).backgroundColor) : Zr.TRANSPARENT, d = r.body ? Fs(c, getComputedStyle(r.body).backgroundColor) : Zr.TRANSPARENT, c = typeof e == "string" ? Fs(c, e) : e === null ? Zr.TRANSPARENT : 4294967295;
  return A === r.documentElement ? Su(i) ? Su(d) ? c : d : i : c;
};
const m2 = "MathJax-script", D2 = np + "/tex-mml-chtml.js";
let XQ = !1, d0 = !1;
function H2(t) {
  if (globalThis.window) {
    let A = qB;
    t && (A = { ...qB, ...t }), globalThis.window.MathJax = { ...A, startup: { pageReady: () => {
      d0 = !0;
    } } };
  }
}
function y2() {
  return new Promise((t, A) => {
    if (d0)
      return t("");
    {
      var e;
      XQ || ((e = document.createElement("script")).src = D2, e.id = m2, e.onerror = (i) => {
        A(i);
      }, document.body.appendChild(e), XQ = !0);
      let r = setInterval(() => {
        if (d0)
          return clearInterval(r), t("");
      }, 1e3);
    }
  });
}
function I2(t) {
  H2(t);
}
function b2(t) {
  return y2().then(() => MathJax.typesetPromise());
}
function v2(t) {
  if (t)
    return new Promise((A) => {
      U2(t).then((e) => {
        e = e.toDataURL("image/png"), A(e);
      });
    });
  throw alert(t), new Error("ele 不存在");
}
class K2 {
  constructor(A) {
    if (this.content = "", this.defaultConfig = { lineBreak: !0, globalRender: !1, lineHeight: "20px", punctuation: !1, textColor: "#000", lineClass: !1, divideChinese: !1, wrapMathrm: !0 }, this.config = {}, this.container = document.querySelector(A.container), !this.container)
      throw new Error("找不到" + A.container);
    this.config = A.options || {}, this.init();
  }
  init() {
    I2(this.container);
  }
  setContent(e) {
    this.content = e;
    var e = Object.assign(this.defaultConfig, this.config), r = YU(this.content, e);
    this.container.innerHTML = e.divideChinese ? r : `$$${r}$$`, b2(this.container);
  }
  latexToImage() {
    return new Promise((A) => {
      v2(this.container).then((e) => {
        A(e);
      });
    });
  }
  changeOption(A) {
    this.config = A;
  }
}
class L2 {
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
    cs(this.container, Fn("div.tool")), this.Tool = new DF({ container: ".tool", handleClickFormula: this.handleClickFormula.bind(this) });
  }
  createInput() {
    cs(this.container, Fn("div.input")), this.Input = new eU({ container: ".input", contentChange: (A, e) => {
      var r, i;
      this.content = A, (r = this.mathOption) != null && r.globalRender || ((i = this.Output) == null || i.setContent(this.content));
    } });
  }
  createOutput() {
    cs(this.container, Fn("div.output")), this.Output = new K2({ container: ".output", content: this.content, options: this.mathOption });
  }
  inserContent(A) {
    RF(kF(KF(A)).outerHTML);
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
    this.mathOption = A, (e = this.Output) == null || e.changeOption(A);
  }
  globalRenderContent() {
    var e, r;
    var A = ((e = this.Input) == null ? void 0 : e.getContent()) || "";
    (r = this.Output) == null || r.setContent(A);
  }
}
function M2(t) {
  return new Promise((A, e) => {
    try {
      const r = document.createElement("input");
      r.setAttribute("value", t + ""), document.body.appendChild(r), r.select(), document.execCommand("copy"), setTimeout(() => {
        document.body.removeChild(r), A();
      }, 0);
    } catch (r) {
      e(r);
    }
  });
}
globalThis.LatexEditor = L2;
export {
  L2 as LatexEditor,
  M2 as copyByContent,
  h0 as fontIconBaseUrl,
  WQ as formulaTypeAllList
};
