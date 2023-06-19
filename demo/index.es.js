import "vue";
const iF = [{ name: "开平方", icon: "sqrt", formula: "\\sqrt{4}" }, { name: "开n次方", icon: "sqrtn", formula: "\\sqrt[n]{10}" }], aF = [{ name: "正弦", icon: "sin", formula: "\\sin" }, { name: "余弦", icon: "cos", formula: "\\cos" }, { name: "正切", icon: "tan", formula: "\\tan" }, { name: "余切", icon: "cot", formula: "\\cot" }, { name: "正切", icon: "sec", formula: "\\sec" }, { name: "csc", icon: "csc", formula: "\\csc" }, { name: "arcsin", icon: "arcsin", formula: "\\arcsin" }, { name: "arccos", icon: "arccos", formula: "\\arccos" }, { name: "arctan", icon: "arctan", formula: "\\arctan" }, { name: "arccot", icon: "arccot", formula: "\\arccot" }, { name: "arcsec", icon: "arcsec", formula: "\\arcsec" }, { name: "arccsc", icon: "arccsc", formula: "\\arccsc" }], dF = [{ name: "下划线", icon: "underline", formula: "\\underline{下划线}" }, { name: "波浪线", icon: "uwave", formula: "\\uwave{波浪线}" }, { name: "斜体", icon: "textit", formula: "\\textit{斜体}" }, { name: "粗体", icon: "textbf", formula: "\\textbf{粗体}" }, { name: "颜色", icon: "textcolor", formula: "\\textcolor{red}{红色}" }, { name: "上角标", icon: "sub", formula: "^{}" }, { name: "下角标", icon: "sup", formula: "_{}" }, { name: "下划线", icon: "uline", formula: "\\_{10}" }, { name: "四线三格", icon: "fourlineruled", formula: "\\fourlineruled{10}" }], sF = [{ name: "因为", icon: "because", formula: "\\because" }, { name: "所以", icon: "therefore", formula: "\\therefore" }, { name: "或", icon: "lor", formula: "\\lor" }, { name: "与", icon: "land", formula: "\\land" }, { name: "非", icon: "lnot", formula: "\\lnot" }, { name: "对于全部", icon: "forall", formula: "\\forall" }, { name: "存在", icon: "exists", formula: "\\exists" }, { name: "恒真", icon: "top", formula: "\\top" }, { name: "恒假", icon: "bot", formula: "\\bot" }], cF = [{ name: "角", icon: "angle", formula: "\\angle" }, { name: "全等于", icon: "cong", formula: "\\cong" }, { name: "相似于", icon: "sim", formula: "\\sim" }, { name: "平行于", icon: "parallel", formula: "\\parallel" }, { name: "平行四边形", icon: "parallelogram", formula: "\\parallelogram" }, { name: "垂直", icon: "perp", formula: "\\perp" }, { name: "圆圈", icon: "circ", formula: "\\circ" }, { name: "不平行于", icon: "nparallel", formula: "\\nparallel" }], BF = [{ name: "ā", icon: "bar", formula: "\\bar{a}" }, { name: "á", icon: "acute", formula: "\\acute{a}" }, { name: "三声", icon: "v", formula: "\\v{i}" }, { name: "ê", icon: "hat", formula: "\\hat{e}" }, { name: "à", icon: "grave", formula: "\\grave{a}" }, { name: "ã", icon: "tilde", formula: "\\tilde{a}" }, { name: "wideparen", icon: "wideparen", formula: "\\wideparen{AB}" }, { name: "vec", icon: "vec", formula: "\\vec{AB}" }, { name: "\\dot{\\sim}", icon: "dot", formula: "\\dot{\\sim}" }, { name: "Ö", icon: "ddot", formula: "\\ddot{O}" }, { name: "重音", icon: "d", formula: "天\\d{涯}" }], lF = [{ name: "正负号", icon: "pm", formula: "\\pm" }, { name: "负正号", icon: "mp", formula: "\\mp" }, { name: "点乘号", icon: "cdot", formula: "\\cdot" }, { name: "叉乘号", icon: "times", formula: "\\times" }, { name: "除号", icon: "div", formula: "\\div" }, { name: "绝对值", icon: "mid", formula: "\\mid" }, { name: "求积", icon: "prod", formula: "\\prod" }, { name: "求和", icon: "sum", formula: "\\sum" }], fF = [{ name: "约等于", icon: "approx", formula: "\\approx" }, { name: "小于等于", icon: "leq", formula: "\\leq" }, { name: "大于等于", icon: "geq", formula: "\\geq" }, { name: "不等于", icon: "neq", formula: "\\neq" }, { name: "恒等于", icon: "equiv", formula: "\\equiv" }, { name: "比例", icon: "propto", formula: "\\propto" }, { name: "不约等于", icon: "napprox", formula: "\\napprox" }, { name: "不小于", icon: "nl", formula: "\\nl" }, { name: "不大于", icon: "ng", formula: "\\ng" }, { name: "不小于等于", icon: "nleq", formula: "\\nleq" }, { name: "不大于等于", icon: "ngeq", formula: "\\ngeq" }, { name: "不恒等于", icon: "nequiv", formula: "\\nequiv" }], gF = [{ icon: "odot", formula: "\\odot" }, { icon: "ominus", formula: "\\ominus" }, { icon: "oplus", formula: "\\oplus" }, { icon: "otimes", formula: "\\otimes" }, { icon: "oiiint", formula: "\\oiiint" }, { icon: "oiint", formula: "\\oiint" }, { icon: "oint", formula: "\\oint" }], wF = [{ name: "菱形", icon: "diamond", formula: "\\diamond" }, { name: "菱形", icon: "blackdiamond", formula: "\\blackdiamond" }, { name: "正方形", icon: "square", formula: "\\square" }, { name: "正方形", icon: "blacksquare", formula: "\\blacksquare" }, { name: "矩形", icon: "rectangle", formula: "\\rectangle" }, { name: "矩形", icon: "blackrectangle", formula: "\\blackrectangle" }, { name: "五角星", icon: "star", formula: "\\star" }, { name: "五角星", icon: "blackstar", formula: "\\blackstar" }, { name: "三角形", icon: "triangle", formula: "\\triangle" }, { name: "三角形", icon: "blacktriangle", formula: "\\blacktriangle" }, { name: "倒三角形", icon: "triangledown", formula: "\\triangledown" }, { name: "倒三角形", icon: "blacktriangledown", formula: "\\blacktriangledown" }, { name: "心形", icon: "heart", formula: "\\heart" }, { name: "心形", icon: "blackheart", formula: "\\blackheart" }, { name: "点状", icon: "bullet", formula: "\\bullet" }, { name: "女性", icon: "female", formula: "\\female" }, { name: "男性", icon: "male", formula: "\\male" }, { name: "微笑", icon: "smiley", formula: "\\smiley" }, { name: "黑桃", icon: "spadesuit", formula: "\\spadesuit" }, { name: "梅花", icon: "clubsuit", formula: "\\clubsuit" }], QF = [{ name: "分式", icon: "frac", formula: "\\frac{分子}{分母}", exampleList: [{ content: "正确写法：\\frac{1}{2}", isLatex: !1 }, { content: "\\frac{1}{2}", isLatex: !0 }, { content: "错误写法：\\frac{1}", isLatex: !1 }, { content: "\\frac{1}", isLatex: !0 }] }], hF = [{ name: "alpha", icon: "alpha", formula: "\\alpha" }, { name: "beta", icon: "beta", formula: "\\beta" }, { name: "gamma", icon: "gamma", formula: "\\gamma" }, { name: "delta", icon: "delta", formula: "\\delta" }, { name: "epsilon", icon: "epsilon", formula: "\\epsilon" }, { name: "zeta", icon: "zeta", formula: "\\zeta" }, { name: "eta", icon: "eta", formula: "\\eta" }, { name: "theta", icon: "theta", formula: "\\theta" }, { name: "iota", icon: "iota", formula: "\\iota" }, { name: "kappa", icon: "kappa", formula: "\\kappa" }, { name: "lambda", icon: "lambda", formula: "\\lambda" }, { name: "mu", icon: "mu", formula: "\\mu" }, { name: "nu", icon: "nu", formula: "\\nu" }, { name: "xi", icon: "xi", formula: "\\xi" }, { name: "omicron", icon: "omicron", formula: "\\omicron" }, { name: "pi", icon: "pi", formula: "\\pi" }, { name: "rho", icon: "rho", formula: "\\rho" }, { name: "sigma", icon: "sigma", formula: "\\sigma" }, { name: "tau", icon: "tau", formula: "\\tau" }, { name: "upsilon", icon: "upsilon", formula: "\\upsilon" }, { name: "phi", icon: "phi", formula: "\\phi" }, { name: "chi", icon: "chi", formula: "\\chi" }, { name: "psi", icon: "psi", formula: "\\psi" }, { name: "omega", icon: "omega", formula: "\\omega" }, { name: "Alpha", icon: "Alpha", formula: "\\Alpha" }, { name: "Beta", icon: "Beta", formula: "\\Beta" }, { name: "Gamma", icon: "Gamma", formula: "\\Gamma" }, { name: "Delta", icon: "Delta", formula: "\\Delta" }, { name: "Epsilon", icon: "Epsilon", formula: "\\Epsilon" }, { name: "Zeta", icon: "Zeta", formula: "\\Zeta" }, { name: "Eta", icon: "Eta", formula: "\\Eta" }, { name: "Theta", icon: "Theta", formula: "\\Theta" }, { name: "Iota", icon: "Iota", formula: "\\Iota" }, { name: "Kappa", icon: "Kappa", formula: "\\Kappa" }, { name: "Lambda", icon: "Lambda", formula: "\\Lambda" }, { name: "Mu", icon: "Mu", formula: "\\Mu" }, { name: "Nu", icon: "Nu", formula: "\\Nu" }, { name: "Xi", icon: "Xi", formula: "\\Xi" }, { name: "Omicron", icon: "Omicron", formula: "\\Omicron" }, { name: "Pi", icon: "Pi", formula: "\\Pi" }, { name: "Rho", icon: "Rho", formula: "\\Rho" }, { name: "Sigma", icon: "Sigma", formula: "\\Sigma" }, { name: "Tau", icon: "Tau", formula: "\\Tau" }, { name: "Upsilon", icon: "Upsilon", formula: "\\Upsilon" }, { name: "Phi", icon: "Phi", formula: "\\Phi" }, { name: "Chi", icon: "Chi", formula: "\\Chi" }, { name: "Psi", icon: "Psi", formula: "\\Psi" }, { name: "Omega", icon: "Omega", formula: "\\Omega" }], CF = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "'", '"', "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "、", "。", "《", "》", "【", "】", "￠", "￥", "£"], FF = ["\\~", "\\#", "\\$", "\\%", "\\^", "\\&", "\\(", "\\)", "\\_", "\\[", "\\]", "\\{", "\\}"], UF = [{ name: "⋯", icon: "cdots", formula: "\\cdots" }, { name: "⋱", icon: "ddots", formula: "\\ddots" }, { name: "⋮", icon: "vdots", formula: "\\vdots" }], pF = [{ name: "并集，v0中为\\bigcup", icon: "cup", formula: "\\cup" }, { name: "交集，v0中为\\bigcap", icon: "cap", formula: "\\cap" }, { name: "子集", icon: "subset", formula: "\\subset" }, { name: "父集", icon: "supset", formula: "\\supset" }, { name: "属于", icon: "in", formula: "\\in" }, { name: "不属于", icon: "notin", formula: "\\notin" }, { name: "包含", icon: "ni", formula: "\\ni" }, { name: "不包含", icon: "notni", formula: "\\notni" }, { name: "空集", icon: "emptyset", formula: "\\emptyset" }, { name: "补集", icon: "complement", formula: "\\complement" }, { name: "父集或等于 ", icon: "subseteq", formula: "\\subseteq" }, { name: "超集或等于", icon: "supseteq", formula: "\\supseteq" }, { name: "非子集", icon: "nsubset", formula: "\\nsubset" }, { name: "非超集", icon: "", formula: "\\nsupset" }, { name: "子集且不等于", icon: "subsetneq", formula: "\\subsetneq" }, { name: "父集且不等于", icon: "supsetneq", formula: "\\supsetneq" }, { name: "非子集也不等于", icon: "nsubseteq", formula: "\\nsubseteq" }, { name: "非父集也不等于", icon: "nsupseteq", formula: "\\nsupseteq" }], mF = [{ name: "无穷大", icon: "infty", formula: "\\infty" }, { name: "偏微分", icon: "partial", formula: "\\partial" }, { name: "实数符号", icon: "Re", formula: "\\Re" }, { name: "实数符号", icon: "lg", formula: "\\lg" }, { name: "实数符号", icon: "lim", formula: "\\lim" }, { name: "ln", icon: "ln", formula: "\\ln" }, { name: "最大", icon: "max", formula: "\\max" }, { name: "最小", icon: "min", formula: "\\min" }], EF = [{ name: "⇐", icon: "Leftarrow", formula: "\\Leftarrow" }, { name: "←", icon: "leftarrow", formula: "\\leftarrow" }, { name: "⇒", icon: "Rightarrow", formula: "\\Rightarrow" }, { name: "→", icon: "rightarrow", formula: "\\rightarrow" }, { name: "⇑", icon: "Uparrow", formula: "\\Uparrow" }, { name: "↑", icon: "uparrow", formula: "\\uparrow" }, { name: "⇓", icon: "Downarrow", formula: "\\Downarrow" }, { name: "↓", icon: "downarrow", formula: "\\downarrow" }, { name: "⇔", icon: "Leftrightarrow", formula: "\\Leftrightarrow" }, { name: "↔", icon: "leftrightarrow", formula: "\\leftrightarrow" }, { name: "⇕", icon: "Updownarrow", formula: "\\Updownarrow" }, { name: "↕", icon: "updownarrow", formula: "\\updownarrow" }, { name: "⇗", icon: "NEarrow", formula: "\\NEarrow" }, { name: "↗", icon: "nearrow", formula: "\\nearrow" }, { name: "⇖", icon: "NWarrow", formula: "\\NWarrow" }, { name: "↖", icon: "nwarrow", formula: "\\nwarrow" }, { name: "⇘", icon: "SEarrow", formula: "\\SEarrow" }, { name: "↘", icon: "searrow", formula: "\\searrow" }, { name: "⇙", icon: "SWarrow", formula: "\\SWarrow" }, { name: "↙", icon: "swarrow", formula: "\\swarrow" }, { name: "↵", icon: "hookleftarrow", formula: "\\hookleftarrow" }], DF = [{ name: "‰", icon: "textperthousand", formula: "\\textperthousand" }, { name: "※", icon: "textreferencemark", formula: "\\textreferencemark" }, { name: "®", icon: "textregistered", formula: "\\textregistered" }, { name: "§", icon: "textsection", formula: "\\textsection" }, { name: "™", icon: "texttrademark", formula: "\\texttrademark" }], HF = [{ name: "②", icon: "textcircled", formula: "\\textcircled{2}" }, { name: "Ⅴ", icon: "RomanNumeralCaps", formula: "\\RomanNumeralCaps{5}" }, { name: "i", icon: "romannumeral", formula: "\\romannumeral{1}" }];
var Nd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Vc = { exports: {} }, ee = (Vc.exports, function(t, A) {
  (function() {
    var e, n = "Expected a function", i = "__lodash_hash_undefined__", d = "__lodash_placeholder__", s = 16, l = 32, f = 64, h = 128, w = 256, p = 1 / 0, K = 9007199254740991, _ = NaN, S = 4294967295, v = [["ary", h], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", s], ["flip", 512], ["partial", l], ["partialRight", f], ["rearg", w]], M = "[object Arguments]", k = "[object Array]", X = "[object Boolean]", iA = "[object Date]", z = "[object Error]", J = "[object Function]", lA = "[object GeneratorFunction]", $ = "[object Map]", vA = "[object Number]", IA = "[object Object]", YA = "[object Promise]", Fe = "[object RegExp]", re = "[object Set]", $A = "[object String]", ge = "[object Symbol]", ve = "[object WeakMap]", ZA = "[object ArrayBuffer]", Be = "[object DataView]", hr = "[object Float32Array]", Ln = "[object Float64Array]", Su = "[object Int8Array]", Ia = "[object Int16Array]", va = "[object Int32Array]", Ka = "[object Uint8Array]", Zo = "[object Uint8ClampedArray]", jo = "[object Uint16Array]", La = "[object Uint32Array]", Ll = /\b__p \+= '';/g, xl = /\b(__p \+=) '' \+/g, _l = /(__e\(.*?\)|\b__t\)) \+\n'';/g, xa = /&(?:amp|lt|gt|quot|#39);/g, Ms = /[&<>"']/g, Sl = RegExp(xa.source), Tl = RegExp(Ms.source), _a = /<%-([\s\S]+?)%>/g, Ol = /<%([\s\S]+?)%>/g, qo = /<%=([\s\S]+?)%>/g, Ml = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, kl = /^\w*$/, Gl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Sa = /[\\^$.*+?()[\]{}|]/g, Vl = RegExp(Sa.source), Ta = /^\s+/, Rl = /\s/, Nl = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ks = /\{\n\/\* \[wrapped with (.+)\] \*/, Pl = /,? & /, Jl = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Xl = /[()=,{}\[\]\/\s]/, Wl = /\\(\\)?/g, Yl = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Gs = /\w*$/, zo = /^[-+]0x[0-9a-f]+$/i, Zl = /^0b[01]+$/i, $o = /^\[object .+?Constructor\]$/, Vs = /^0o[0-7]+$/i, Rs = /^(?:0|[1-9]\d*)$/, Ns = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Cr = /($^)/, Ps = /['\n\r\u2028\u2029\\]/g, xn = "\\ud800-\\udfff", on = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", _n = "\\u2700-\\u27bf", Tn = "a-z\\xdf-\\xf6\\xf8-\\xff", Mt = "A-Z\\xc0-\\xd6\\xd8-\\xde", Oa = "\\ufe0e\\ufe0f", Sn = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Fr = "['’]", it = "[" + xn + "]", Ma = "[" + Sn + "]", Tu = "[" + on + "]", ka = "[" + _n + "]", Xr = "[" + Tn + "]", Sn = "[^" + xn + Sn + "\\d+" + _n + Tn + Mt + "]", _n = "\\ud83c[\\udffb-\\udfff]", Tn = "[^" + xn + "]", Wr = "(?:\\ud83c[\\udde6-\\uddff]){2}", qn = "[\\ud800-\\udbff][\\udc00-\\udfff]", Mt = "[" + Mt + "]", Js = "\\u200d", Xs = "(?:" + Xr + "|" + Sn + ")", Sn = "(?:" + Mt + "|" + Sn + ")", Ws = "(?:['’](?:d|ll|m|re|s|t|ve))?", Ys = "(?:['’](?:D|LL|M|RE|S|T|VE))?", Ai = "(?:" + Tu + "|" + _n + ")?", Ou = "[" + Oa + "]?", Ou = Ou + Ai + ("(?:" + Js + "(?:" + [Tn, Wr, qn].join("|") + ")" + Ou + Ai + ")*"), Ai = "(?:" + [ka, Wr, qn].join("|") + ")" + Ou, ka = "(?:" + [Tn + Tu + "?", Tu, Wr, qn, it].join("|") + ")", ue = RegExp(Fr, "g"), te = RegExp(Tu, "g"), Ga = RegExp(_n + "(?=" + _n + ")|" + ka + Ou, "g"), jl = RegExp([Mt + "?" + Xr + "+" + Ws + "(?=" + [Ma, Mt, "$"].join("|") + ")", Sn + "+" + Ys + "(?=" + [Ma, Mt + Xs, "$"].join("|") + ")", Mt + "?" + Xs + "+" + Ws, Mt + "+" + Ys, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", Ai].join("|"), "g"), ql = RegExp("[" + Js + xn + on + Oa + "]"), jn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Mu = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Ve = -1, RA = {}, GA = (RA[hr] = RA[Ln] = RA[Su] = RA[Ia] = RA[va] = RA[Ka] = RA[Zo] = RA[jo] = RA[La] = !0, RA[M] = RA[k] = RA[ZA] = RA[X] = RA[Be] = RA[iA] = RA[z] = RA[J] = RA[$] = RA[vA] = RA[IA] = RA[Fe] = RA[re] = RA[$A] = RA[ve] = !1, {}), Zs = (GA[M] = GA[k] = GA[ZA] = GA[Be] = GA[X] = GA[iA] = GA[hr] = GA[Ln] = GA[Su] = GA[Ia] = GA[va] = GA[$] = GA[vA] = GA[IA] = GA[Fe] = GA[re] = GA[$A] = GA[ge] = GA[Ka] = GA[Zo] = GA[jo] = GA[La] = !0, GA[z] = GA[J] = GA[ve] = !1, { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }), Va = parseFloat, ot = parseInt, Tn = typeof Nd == "object" && Nd && Nd.Object === Object && Nd, Wr = typeof self == "object" && self && self.Object === Object && self, Ke = Tn || Wr || Function("return this")(), qn = A && !A.nodeType && A, zn = qn && t && !t.nodeType && t, Ra = zn && zn.exports === qn, qe = Ra && Tn.process, it = function() {
      try {
        var G = zn && zn.require && zn.require("util").types;
        return G || qe && qe.binding && qe.binding("util");
      } catch {
      }
    }(), ht = it && it.isArrayBuffer, js = it && it.isDate, Na = it && it.isMap, On = it && it.isRegExp, ku = it && it.isSet, ei = it && it.isTypedArray;
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
    function ti(G, Y) {
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
    function Gu(G, Y) {
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
    function ni(G, Y, P, BA) {
      var hA = -1, UA = G == null ? 0 : G.length;
      for (BA && UA && (P = G[++hA]); ++hA < UA; )
        P = Y(P, G[hA], hA, G);
      return P;
    }
    function qs(G, Y, P, BA) {
      var hA = G == null ? 0 : G.length;
      for (BA && hA && (P = G[--hA]); hA--; )
        P = Y(P, G[hA], hA, G);
      return P;
    }
    function Vu(G, Y) {
      for (var P = -1, BA = G == null ? 0 : G.length; ++P < BA; )
        if (Y(G[P], P, G))
          return !0;
      return !1;
    }
    var Pa = Ur("length");
    function Ja(G, Y, P) {
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
    function zs(G, Y, P, BA) {
      for (var hA = P - 1, UA = G.length; ++hA < UA; )
        if (BA(G[hA], Y))
          return hA;
      return -1;
    }
    function dt(G) {
      return G != G;
    }
    function ri(G, Y) {
      var P = G == null ? 0 : G.length;
      return P ? Wa(G, Y) / P : _;
    }
    function Ur(G) {
      return function(Y) {
        return Y == null ? e : Y[G];
      };
    }
    function ui(G) {
      return function(Y) {
        return G == null ? e : G[Y];
      };
    }
    function Xa(G, Y, P, BA, hA) {
      return hA(G, function(UA, rA, Pu) {
        P = BA ? (BA = !1, UA) : Y(P, UA, rA, Pu);
      }), P;
    }
    function Wa(G, Y) {
      for (var P, BA = -1, hA = G.length; ++BA < hA; ) {
        var UA = Y(G[BA]);
        UA !== e && (P = P === e ? UA : P + UA);
      }
      return P;
    }
    function Ya(G, Y) {
      for (var P = -1, BA = Array(G); ++P < G; )
        BA[P] = Y(P);
      return BA;
    }
    function $s(G) {
      return G && G.slice(0, HA(G) + 1).replace(Ta, "");
    }
    function Le(G) {
      return function(Y) {
        return G(Y);
      };
    }
    function Ru(G, Y) {
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
    function Nu(G, Y) {
      for (var P = G.length; P-- && -1 < tr(Y, G[P], 0); )
        ;
      return P;
    }
    var qr = ui({ À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }), kt = ui({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
    function Ac(G) {
      return "\\" + Zs[G];
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
        for (var P = Ga.lastIndex = 0; Ga.test(Y); )
          ++P;
        return P;
      } : Pa)(G);
    }
    function fA(G) {
      return zr(G) ? G.match(Ga) || [] : G.split("");
    }
    function HA(G) {
      for (var Y = G.length; Y-- && Rl.test(G.charAt(Y)); )
        ;
      return Y;
    }
    var yA = ui({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }), an = function G(OA) {
      var P = (OA = OA == null ? Ke : an.defaults(Ke.Object(), OA, an.pick(Ke, Mu))).Array, cn = OA.Date, BA = OA.Error, hA = OA.Function, UA = OA.Math, rA = OA.Object, Pu = OA.RegExp, ec = OA.String, ze = OA.TypeError, oi = P.prototype, Dt = hA.prototype, $r = rA.prototype, Au = OA["__core-js_shared__"], pr = Dt.toString, PA = $r.hasOwnProperty, ii = 0, Za = (Dt = /[^.]+$/.exec(Au && Au.keys && Au.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Dt : "", Ju = $r.toString, ai = pr.call(rA), tc = Ke._, Xu = Pu("^" + pr.call(PA).replace(Sa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Dt = Ra ? OA.Buffer : e, WA = OA.Symbol, dn = OA.Uint8Array, Wu = Dt ? Dt.allocUnsafe : e, kn = V(rA.getPrototypeOf, rA), di = rA.create, Yu = $r.propertyIsEnumerable, mr = oi.splice, si = WA ? WA.isConcatSpreadable : e, eu = WA ? WA.iterator : e, Er = WA ? WA.toStringTag : e, ci = function() {
        try {
          var r = he(rA, "defineProperty");
          return r({}, "", {}), r;
        } catch {
        }
      }(), oe = OA.clearTimeout !== Ke.clearTimeout && OA.clearTimeout, Et = cn && cn.now !== Ke.Date.now && cn.now, xe = OA.setTimeout !== Ke.setTimeout && OA.setTimeout, Bi = UA.ceil, li = UA.floor, fi = rA.getOwnPropertySymbols, Dt = Dt ? Dt.isBuffer : e, nc = OA.isFinite, sn = oi.join, Zu = V(rA.keys, rA), se = UA.max, we = UA.min, TA = cn.now, ju = OA.parseInt, qu = UA.random, tu = oi.reverse, cn = he(OA, "DataView"), zu = he(OA, "Map"), $u = he(OA, "Promise"), nu = he(OA, "Set"), OA = he(OA, "WeakMap"), Gn = he(rA, "create"), Ao = OA && new OA(), E = {}, ru = _r(cn), ja = _r(zu), gi = _r($u), Gt = _r(nu), xA = _r(OA), WA = WA ? WA.prototype : e, Vt = WA ? WA.valueOf : e, Bn = WA ? WA.toString : e;
      function m(r) {
        if (Ae(r) && !FA(r) && !(r instanceof _A)) {
          if (r instanceof Kt)
            return r;
          if (PA.call(r, "__wrapped__"))
            return Ni(r);
        }
        return new Kt(r);
      }
      var vt = function(r) {
        return SA(r) ? di ? di(r) : (Ct.prototype = r, r = new Ct(), Ct.prototype = e, r) : {};
      };
      function Ct() {
      }
      function eo() {
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
          var g = r[o];
          this.set(g[0], g[1]);
        }
      }
      function Rt(r) {
        var o = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++o < c; ) {
          var g = r[o];
          this.set(g[0], g[1]);
        }
      }
      function Ft(r) {
        var o = -1, c = r == null ? 0 : r.length;
        for (this.clear(); ++o < c; ) {
          var g = r[o];
          this.set(g[0], g[1]);
        }
      }
      function ln(r) {
        var o = -1, c = r == null ? 0 : r.length;
        for (this.__data__ = new Ft(); ++o < c; )
          this.add(r[o]);
      }
      function Nt(r) {
        r = this.__data__ = new Rt(r), this.size = r.size;
      }
      function qa(r, o) {
        var c, g = FA(r), C = !g && et(r), U = !g && !C && Jn(r), D = !g && !C && !U && Mr(r), y = g || C || U || D, b = y ? Ya(r.length, ec) : [], x = b.length;
        for (c in r)
          !o && !PA.call(r, c) || y && (c == "length" || U && (c == "offset" || c == "parent") || D && (c == "buffer" || c == "byteLength" || c == "byteOffset") || pn(c, x)) || b.push(c);
        return b;
      }
      function fn(r) {
        var o = r.length;
        return o ? r[od(0, o - 1)] : e;
      }
      function za(r, o) {
        return Eo(Te(r), wn(o, 0, r.length));
      }
      function Hr(r) {
        return Eo(Te(r));
      }
      function st(r, o, c) {
        (c === e || Oe(r[o], c)) && (c !== e || o in r) || gn(r, o, c);
      }
      function uu(r, o, c) {
        var g = r[o];
        PA.call(r, o) && Oe(g, c) && (c !== e || o in r) || gn(r, o, c);
      }
      function to(r, o) {
        for (var c = r.length; c--; )
          if (Oe(r[c][0], o))
            return c;
        return -1;
      }
      function no(r, o, c, g) {
        return Re(r, function(C, U, D) {
          o(g, C, c(C), D);
        }), g;
      }
      function Vn(r, o) {
        return r && Un(o, me(o), r);
      }
      function gn(r, o, c) {
        o == "__proto__" && ci ? ci(r, o, { configurable: !0, enumerable: !0, value: c, writable: !0 }) : r[o] = c;
      }
      function $a(r, o) {
        for (var c = -1, g = o.length, C = P(g), U = r == null; ++c < g; )
          C[c] = U ? e : zi(r, o[c]);
        return C;
      }
      function wn(r, o, c) {
        return r = r == r && (c !== e && (r = r <= c ? r : c), o !== e) ? o <= r ? r : o : r;
      }
      function Ut(r, o, c, g, C, U) {
        var D, y = 1 & o, b = 2 & o, x = 4 & o;
        if ((D = c ? C ? c(r, g, C, U) : c(r) : D) === e) {
          if (!SA(r))
            return r;
          var T, g = FA(r);
          if (g) {
            if (D = function(q) {
              var sA = q.length, AA = new q.constructor(sA);
              return sA && typeof q[0] == "string" && PA.call(q, "index") && (AA.index = q.index, AA.input = q.input), AA;
            }(r), !y)
              return Te(r, D);
          } else {
            var O = Xe(r), R = O == J || O == lA;
            if (Jn(r))
              return co(r, y);
            if (O == IA || O == M || R && !C) {
              if (D = b || R ? {} : Fd(r), !y)
                return b ? (W = R = r, W = (T = D) && Un(W, Ee(W), T), Un(R, Oi(R), W)) : (R = Vn(D, T = r), Un(T, Fo(T), R));
            } else {
              if (!GA[O])
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
                  case Su:
                  case Ia:
                  case va:
                  case Ka:
                  case Zo:
                  case jo:
                  case La:
                    return Bd(q, AA);
                  case $:
                    return new aA();
                  case vA:
                  case $A:
                    return new aA(q);
                  case Fe:
                    return function(gA) {
                      var MA = new gA.constructor(gA.source, Gs.exec(gA));
                      return MA.lastIndex = gA.lastIndex, MA;
                    }(q);
                  case re:
                    return new aA();
                  case ge:
                    return function(gA) {
                      return Vt ? rA(Vt.call(gA)) : {};
                    }(q);
                }
              }(r, O, y);
            }
          }
          var W = (U = U || new Nt()).get(r);
          if (W)
            return W;
          U.set(r, D), EA(r) ? r.forEach(function(q) {
            D.add(Ut(q, o, c, q, r, U));
          }) : pc(r) && r.forEach(function(q, sA) {
            D.set(sA, Ut(q, o, c, sA, r, U));
          });
          var Z = g ? e : (x ? b ? Co : Pn : b ? Ee : me)(r);
          at(Z || r, function(q, sA) {
            Z && (q = r[sA = q]), uu(D, sA, Ut(q, o, c, sA, r, U));
          });
        }
        return D;
      }
      function _e(r, o, c) {
        var g = c.length;
        if (r == null)
          return !g;
        for (r = rA(r); g--; ) {
          var C = c[g], U = o[C], D = r[C];
          if (D === e && !(C in r) || !U(D))
            return !1;
        }
        return !0;
      }
      function wi(r, o, c) {
        if (typeof r != "function")
          throw new ze(n);
        return jt(function() {
          r.apply(e, c);
        }, o);
      }
      function ou(r, o, c, g) {
        var C = -1, U = Gu, D = !0, y = r.length, b = [], x = o.length;
        if (y) {
          c && (o = XA(o, Le(c))), g ? (U = Yr, D = !1) : 200 <= o.length && (U = jr, D = !1, o = new ln(o));
          A:
            for (; ++C < y; ) {
              var O = r[C], T = c == null ? O : c(O), O = g || O !== 0 ? O : 0;
              if (D && T == T) {
                for (var R = x; R--; )
                  if (o[R] === T)
                    continue A;
                b.push(O);
              } else
                U(o, T, g) || b.push(O);
            }
        }
        return b;
      }
      m.templateSettings = { escape: _a, evaluate: Ol, interpolate: qo, variable: "", imports: { _: m } }, (m.prototype = eo.prototype).constructor = m, (Kt.prototype = vt(eo.prototype)).constructor = Kt, (_A.prototype = vt(eo.prototype)).constructor = _A, Dr.prototype.clear = function() {
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
        return !((r = to(o, r)) < 0 || (r == o.length - 1 ? o.pop() : mr.call(o, r, 1), --this.size, 0));
      }, Rt.prototype.get = function(r) {
        var o = this.__data__;
        return (r = to(o, r)) < 0 ? e : o[r][1];
      }, Rt.prototype.has = function(r) {
        return -1 < to(this.__data__, r);
      }, Rt.prototype.set = function(r, o) {
        var c = this.__data__, g = to(c, r);
        return g < 0 ? (++this.size, c.push([r, o])) : c[g][1] = o, this;
      }, Ft.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new Dr(), map: new (zu || Rt)(), string: new Dr() };
      }, Ft.prototype.delete = function(r) {
        return r = Ti(this, r).delete(r), this.size -= r ? 1 : 0, r;
      }, Ft.prototype.get = function(r) {
        return Ti(this, r).get(r);
      }, Ft.prototype.has = function(r) {
        return Ti(this, r).has(r);
      }, Ft.prototype.set = function(r, o) {
        var c = Ti(this, r), g = c.size;
        return c.set(r, o), this.size += c.size == g ? 0 : 1, this;
      }, ln.prototype.add = ln.prototype.push = function(r) {
        return this.__data__.set(r, i), this;
      }, ln.prototype.has = function(r) {
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
          var g = c.__data__;
          if (!zu || g.length < 199)
            return g.push([r, o]), this.size = ++c.size, this;
          c = this.__data__ = new Ft(g);
        }
        return c.set(r, o), this.size = c.size, this;
      };
      var Re = lo(hn), Qi = lo(uo, !0);
      function hi(r, o) {
        var c = !0;
        return Re(r, function(g, C, U) {
          return c = !!o(g, C, U);
        }), c;
      }
      function Qn(r, o, c) {
        for (var g = -1, C = r.length; ++g < C; ) {
          var U, D, y = r[g], b = o(y);
          b != null && (U === e ? b == b && !ie(b) : c(b, U)) && (U = b, D = y);
        }
        return D;
      }
      function Ad(r, o) {
        var c = [];
        return Re(r, function(g, C, U) {
          o(g, C, U) && c.push(g);
        }), c;
      }
      function NA(r, o, c, g, C) {
        var U = -1, D = r.length;
        for (c = c || cc, C = C || []; ++U < D; ) {
          var y = r[U];
          0 < o && c(y) ? 1 < o ? NA(y, o - 1, c, g, C) : er(C, y) : g || (C[C.length] = y);
        }
        return C;
      }
      var ro = gd(), rc = gd(!0);
      function hn(r, o) {
        return r && ro(r, o, me);
      }
      function uo(r, o) {
        return r && rc(r, o, me);
      }
      function rr(r, o) {
        return Ar(o, function(c) {
          return zt(r[c]);
        });
      }
      function ur(r, o) {
        for (var c = 0, g = (o = Nn(o, r)).length; r != null && c < g; )
          r = r[qt(o[c++])];
        return c && c == g ? r : e;
      }
      function iu(r, o, c) {
        return o = o(r), FA(r) ? o : er(o, c(r));
      }
      function Ne(r) {
        if (r == null)
          return r === e ? "[object Undefined]" : "[object Null]";
        if (Er && Er in rA(r)) {
          var o = r, c = PA.call(o, Er), g = o[Er];
          try {
            o[Er] = e;
            var C = !0;
          } catch {
          }
          var U = Ju.call(o);
          return C && (c ? o[Er] = g : delete o[Er]), U;
        }
        return Ju.call(r);
      }
      function Ci(r, o) {
        return o < r;
      }
      function uc(r, o) {
        return r != null && PA.call(r, o);
      }
      function ed(r, o) {
        return r != null && o in rA(r);
      }
      function td(r, o, c) {
        for (var g = c ? Yr : Gu, C = r[0].length, U = r.length, D = U, y = P(U), b = 1 / 0, x = []; D--; ) {
          var T = r[D];
          D && o && (T = XA(T, Le(o))), b = we(T.length, b), y[D] = !c && (o || 120 <= C && 120 <= T.length) ? new ln(D && T) : e;
        }
        var T = r[0], O = -1, R = y[0];
        A:
          for (; ++O < C && x.length < b; ) {
            var Z = T[O], W = o ? o(Z) : Z, Z = c || Z !== 0 ? Z : 0;
            if (!(R ? jr(R, W) : g(x, W, c))) {
              for (D = U; --D; ) {
                var uA = y[D];
                if (!(uA ? jr(uA, W) : g(r[D], W, c)))
                  continue A;
              }
              R && R.push(W), x.push(Z);
            }
          }
        return x;
      }
      function yr(r, o, c) {
        return o = (r = ki(r, o = Nn(o, r))) == null ? r : r[qt(mt(o))], o == null ? e : KA(o, r, c);
      }
      function nd(r) {
        return Ae(r) && Ne(r) == M;
      }
      function au(r, o, c, g, C) {
        if (r === o)
          return !0;
        if (r == null || o == null || !Ae(r) && !Ae(o))
          return r != r && o != o;
        var U = au, D = FA(r), b = FA(o), y = D ? k : Xe(r), b = b ? k : Xe(o), x = (y = y == M ? IA : y) == IA, T = (b = b == M ? IA : b) == IA;
        if ((b = y == b) && Jn(r)) {
          if (!Jn(o))
            return !1;
          x = !(D = !0);
        }
        if (b && !x) {
          if (C = C || new Nt(), D || Mr(r))
            return ho(r, o, c, g, U, C);
          var O = r, R = o, W = y, Z = c, uA = g, q = U, sA = C;
          switch (W) {
            case Be:
              if (O.byteLength != R.byteLength || O.byteOffset != R.byteOffset)
                return !1;
              O = O.buffer, R = R.buffer;
            case ZA:
              return !!(O.byteLength == R.byteLength && q(new dn(O), new dn(R)));
            case X:
            case iA:
            case vA:
              return Oe(+O, +R);
            case z:
              return O.name == R.name && O.message == R.message;
            case Fe:
            case $A:
              return O == R + "";
            case $:
              var AA = nr;
            case re:
              var aA = 1 & Z;
              return AA = AA || N, O.size != R.size && !aA ? !1 : (aA = sA.get(O), aA ? aA == R : (Z |= 2, sA.set(O, R), aA = ho(AA(O), AA(R), Z, uA, q, sA), sA.delete(O), aA));
            case ge:
              if (Vt)
                return Vt.call(O) == Vt.call(R);
          }
          return !1;
        }
        if (!(1 & c) && (D = x && PA.call(r, "__wrapped__"), y = T && PA.call(o, "__wrapped__"), D || y))
          return x = D ? r.value() : r, T = y ? o.value() : o, C = C || new Nt(), U(x, T, c, g, C);
        if (b) {
          C = C || new Nt();
          var gA = r, MA = o, Ye = c, wt = g, tt = U, De = C, ea = 1 & Ye, ta = Pn(gA), Lf = ta.length, D = Pn(MA).length;
          if (Lf != D && !ea)
            return !1;
          for (var Oc = Lf; Oc--; ) {
            var fu = ta[Oc];
            if (!(ea ? fu in MA : PA.call(MA, fu)))
              return !1;
          }
          if (D = De.get(gA), y = De.get(MA), D && y)
            return D == MA && y == gA;
          for (var Mc = !0, xf = (De.set(gA, MA), De.set(MA, gA), ea); ++Oc < Lf; ) {
            fu = ta[Oc];
            var _f, kc = gA[fu], Gc = MA[fu];
            if (!((_f = wt ? ea ? wt(Gc, kc, fu, MA, gA, De) : wt(kc, Gc, fu, gA, MA, De) : _f) === e ? kc === Gc || tt(kc, Gc, Ye, wt, De) : _f)) {
              Mc = !1;
              break;
            }
            xf = xf || fu == "constructor";
          }
          return Mc && !xf && (D = gA.constructor, y = MA.constructor, D != y) && "constructor" in gA && "constructor" in MA && !(typeof D == "function" && D instanceof D && typeof y == "function" && y instanceof y) && (Mc = !1), De.delete(gA), De.delete(MA), Mc;
        }
        return !1;
      }
      function Fi(r, o, c, g) {
        var C = c.length, U = C, D = !g;
        if (r == null)
          return !U;
        for (r = rA(r); C--; ) {
          var y = c[C];
          if (D && y[2] ? y[1] !== r[y[0]] : !(y[0] in r))
            return !1;
        }
        for (; ++C < U; ) {
          var b = (y = c[C])[0], x = r[b], T = y[1];
          if (D && y[2]) {
            if (x === e && !(b in r))
              return !1;
          } else {
            var O, R = new Nt();
            if (!((O = g ? g(x, T, b, r, o, R) : O) === e ? au(T, x, 3, g, R) : O))
              return !1;
          }
        }
        return !0;
      }
      function oo(r) {
        var o;
        return !(!SA(r) || (o = r, Za && Za in o)) && (zt(r) ? Xu : $o).test(_r(r));
      }
      function rd(r) {
        return typeof r == "function" ? r : r == null ? gt : typeof r == "object" ? FA(r) ? mi(r[0], r[1]) : pi(r) : Tc(r);
      }
      function Ui(r) {
        if (!xr(r))
          return Zu(r);
        var o, c = [];
        for (o in rA(r))
          PA.call(r, o) && o != "constructor" && c.push(o);
        return c;
      }
      function oc(r) {
        if (!SA(r)) {
          var o = r, c = [];
          if (o != null)
            for (var g in rA(o))
              c.push(g);
          return c;
        }
        var C, U = xr(r), D = [];
        for (C in r)
          (C != "constructor" || !U && PA.call(r, C)) && D.push(C);
        return D;
      }
      function io(r, o) {
        return r < o;
      }
      function ud(r, o) {
        var c = -1, g = LA(r) ? P(r.length) : [];
        return Re(r, function(C, U, D) {
          g[++c] = o(C, U, D);
        }), g;
      }
      function pi(r) {
        var o = Yt(r);
        return o.length == 1 && o[0][2] ? pd(o[0][0], o[0][1]) : function(c) {
          return c === r || Fi(c, r, o);
        };
      }
      function mi(r, o) {
        return Uo(r) && Ud(o) ? pd(qt(r), o) : function(c) {
          var g = zi(c, r);
          return g === e && g === o ? Sd(c, r) : au(o, g, 3);
        };
      }
      function pA(r, o, c, g, C) {
        r !== o && ro(o, function(U, D) {
          var y, b, x, T, O, R, W, Z, uA, q, sA, AA, aA;
          C = C || new Nt(), SA(U) ? (b = o, T = c, O = pA, R = g, W = C, sA = Gi(y = r, x = D), AA = Gi(b, x), (aA = W.get(AA)) || (aA = R ? R(sA, AA, x + "", y, b, W) : e, (b = aA === e) && (Z = FA(AA), uA = !Z && Jn(AA), q = !Z && !uA && Mr(AA), aA = AA, Z || uA || q ? aA = FA(sA) ? sA : mA(sA) ? Te(sA) : uA ? co(AA, !(b = !1)) : q ? Bd(AA, !(b = !1)) : [] : Bu(AA) || et(AA) ? et(aA = sA) ? aA = Dc(sA) : SA(sA) && !zt(sA) || (aA = Fd(AA)) : b = !1), b && (W.set(AA, aA), O(aA, AA, T, R, W), W.delete(AA))), st(y, x, aA)) : (Z = g ? g(Gi(r, D), U, D + "", r, o, C) : e, st(r, D, Z = Z === e ? U : Z));
        }, Ee);
      }
      function ic(r, o) {
        var c = r.length;
        if (c)
          return pn(o += o < 0 ? c : 0, c) ? r[o] : e;
      }
      function ac(U, o, c) {
        o = o.length ? XA(o, function(y) {
          return FA(y) ? function(b) {
            return ur(b, y.length === 1 ? y[0] : y);
          } : y;
        }) : [gt];
        var g = -1;
        o = XA(o, Le(wA()));
        var C = ud(U, function(y, b, x) {
          return { criteria: XA(o, function(T) {
            return T(y);
          }), index: ++g, value: y };
        }), U = function(y, b) {
          for (var x = c, T = -1, O = y.criteria, R = b.criteria, W = O.length, Z = x.length; ++T < W; ) {
            var uA, q = ld(O[T], R[T]);
            if (q)
              return Z <= T ? q : (uA = x[T], q * (uA == "desc" ? -1 : 1));
          }
          return y.index - b.index;
        }, D = C.length;
        for (C.sort(U); D--; )
          C[D] = C[D].value;
        return C;
      }
      function du(r, o, c) {
        for (var g = -1, C = o.length, U = {}; ++g < C; ) {
          var D = o[g], y = ur(r, D);
          c(y, D) && su(U, Nn(D, r), y);
        }
        return U;
      }
      function Ei(r, o, c, g) {
        var C = g ? zs : tr, U = -1, D = o.length, y = r;
        for (r === o && (o = Te(o)), c && (y = XA(r, Le(c))); ++U < D; )
          for (var b = 0, x = o[U], T = c ? c(x) : x; -1 < (b = C(y, T, b, g)); )
            y !== r && mr.call(y, b, 1), mr.call(r, b, 1);
        return r;
      }
      function Se(r, o) {
        for (var c = r ? o.length : 0, g = c - 1; c--; ) {
          var C, U = o[c];
          c != g && U === C || (pn(C = U) ? mr.call(r, U, 1) : Fn(r, U));
        }
      }
      function od(r, o) {
        return r + li(qu() * (o - r + 1));
      }
      function ct(r, o) {
        var c = "";
        if (!(!r || o < 1 || K < o))
          for (; o % 2 && (c += r), (o = li(o / 2)) && (r += r), o; )
            ;
        return c;
      }
      function bA(r, o) {
        return Vi(mo(r, o, gt), r + "");
      }
      function Di(r) {
        return fn(lu(r));
      }
      function id(r, o) {
        return r = lu(r), Eo(r, wn(o, 0, r.length));
      }
      function su(r, o, c, g) {
        if (SA(r))
          for (var C = -1, U = (o = Nn(o, r)).length, D = U - 1, y = r; y != null && ++C < U; ) {
            var b, x = qt(o[C]), T = c;
            if (x === "__proto__" || x === "constructor" || x === "prototype")
              return r;
            uu(y, x, T = C != D && (b = y[x], (T = g ? g(b, x, y) : e) === e) ? SA(b) ? b : pn(o[C + 1]) ? [] : {} : T), y = y[x];
          }
        return r;
      }
      var ad = Ao ? function(r, o) {
        return Ao.set(r, o), r;
      } : gt, WA = ci ? function(r, o) {
        return ci(r, "toString", { configurable: !0, enumerable: !1, value: Lo(o), writable: !0 });
      } : gt;
      function or(r) {
        return Eo(lu(r));
      }
      function Bt(r, o, c) {
        for (var g = -1, C = r.length, U = ((c = C < c ? C : c) < 0 && (c += C), C = c < (o = o < 0 ? C < -o ? 0 : C + o : o) ? 0 : c - o >>> 0, o >>>= 0, P(C)); ++g < C; )
          U[g] = r[g + o];
        return U;
      }
      function dc(r, o) {
        var c;
        return Re(r, function(g, C, U) {
          return !(c = o(g, C, U));
        }), !!c;
      }
      function br(r, o, c) {
        var g = 0, C = r == null ? g : r.length;
        if (typeof o == "number" && o == o && C <= 2147483647) {
          for (; g < C; ) {
            var U = g + C >>> 1, D = r[U];
            D !== null && !ie(D) && (c ? D <= o : D < o) ? g = 1 + U : C = U;
          }
          return C;
        }
        return Hi(r, o, gt, c);
      }
      function Hi(r, o, c, g) {
        var C = 0, U = r == null ? 0 : r.length;
        if (U === 0)
          return 0;
        for (var D = (o = c(o)) != o, y = o === null, b = ie(o), x = o === e; C < U; ) {
          var T = li((C + U) / 2), O = c(r[T]), R = O !== e, W = O === null, uA = O == O, Z = ie(O), uA = D ? g || uA : x ? uA && (g || R) : y ? uA && R && (g || !W) : b ? uA && R && !W && (g || !Z) : !W && !Z && (g ? O <= o : O < o);
          uA ? C = T + 1 : U = T;
        }
        return we(U, 4294967294);
      }
      function yi(r, o) {
        for (var c = -1, g = r.length, C = 0, U = []; ++c < g; ) {
          var D, y = r[c], b = o ? o(y) : y;
          c && Oe(b, D) || (D = b, U[C++] = y === 0 ? 0 : y);
        }
        return U;
      }
      function dd(r) {
        return typeof r == "number" ? r : ie(r) ? _ : +r;
      }
      function $e(r) {
        var o;
        return typeof r == "string" ? r : FA(r) ? XA(r, $e) + "" : ie(r) ? Bn ? Bn.call(r) : "" : (o = r + "") == "0" && 1 / r == -p ? "-0" : o;
      }
      function Cn(r, o, c) {
        var g = -1, C = Gu, U = r.length, D = !0, y = [], b = y;
        if (c)
          D = !1, C = Yr;
        else if (200 <= U) {
          var x = o ? null : Cd(r);
          if (x)
            return N(x);
          D = !1, C = jr, b = new ln();
        } else
          b = o ? [] : y;
        A:
          for (; ++g < U; ) {
            var O = r[g], T = o ? o(O) : O, O = c || O !== 0 ? O : 0;
            if (D && T == T) {
              for (var R = b.length; R--; )
                if (b[R] === T)
                  continue A;
              o && b.push(T), y.push(O);
            } else
              C(b, T, c) || (b !== y && b.push(T), y.push(O));
          }
        return y;
      }
      function Fn(r, o) {
        return (r = ki(r, o = Nn(o, r))) == null || delete r[qt(mt(o))];
      }
      function Rn(r, o, c, g) {
        return su(r, o, c(ur(r, o)), g);
      }
      function ao(r, o, c, g) {
        for (var C = r.length, U = g ? C : -1; (g ? U-- : ++U < C) && o(r[U], U, r); )
          ;
        return c ? Bt(r, g ? 0 : U, g ? U + 1 : C) : Bt(r, g ? U + 1 : 0, g ? C : U);
      }
      function sd(r, o) {
        var c = r;
        return ni(o, function(g, C) {
          return C.func.apply(C.thisArg, er([g], C.args));
        }, c = r instanceof _A ? r.value() : c);
      }
      function so(r, o, c) {
        var g = r.length;
        if (g < 2)
          return g ? Cn(r[0]) : [];
        for (var C = -1, U = P(g); ++C < g; )
          for (var D = r[C], y = -1; ++y < g; )
            y != C && (U[C] = ou(U[C] || D, r[y], o, c));
        return Cn(NA(U, 1), o, c);
      }
      function cd(r, o, c) {
        for (var g = -1, C = r.length, U = o.length, D = {}; ++g < C; ) {
          var y = g < U ? o[g] : e;
          c(D, r[g], y);
        }
        return D;
      }
      function bi(r) {
        return mA(r) ? r : [];
      }
      function Ii(r) {
        return typeof r == "function" ? r : gt;
      }
      function Nn(r, o) {
        return FA(r) ? r : Uo(r, o) ? [r] : pt(VA(r));
      }
      var CA = bA;
      function Qe(r, o, c) {
        var g = r.length;
        return c = c === e ? g : c, !o && g <= c ? r : Bt(r, o, c);
      }
      var Pt = oe || function(r) {
        return Ke.clearTimeout(r);
      };
      function co(r, o) {
        return o ? r.slice() : (o = r.length, o = Wu ? Wu(o) : new r.constructor(o), r.copy(o), o);
      }
      function ir(r) {
        var o = new r.constructor(r.byteLength);
        return new dn(o).set(new dn(r)), o;
      }
      function Bd(r, o) {
        return o = o ? ir(r.buffer) : r.buffer, new r.constructor(o, r.byteOffset, r.length);
      }
      function ld(r, o) {
        if (r !== o) {
          var c = r !== e, g = r === null, C = r == r, U = ie(r), D = o !== e, y = o === null, b = o == o, x = ie(o);
          if (!y && !x && !U && o < r || U && D && b && !y && !x || g && D && b || !c && b || !C)
            return 1;
          if (!g && !U && !x && r < o || x && c && C && !g && !U || y && c && C || !D && C || !b)
            return -1;
        }
        return 0;
      }
      function fd(r, o, c, g) {
        for (var C = -1, U = r.length, D = c.length, y = -1, b = o.length, x = se(U - D, 0), T = P(b + x), O = !g; ++y < b; )
          T[y] = o[y];
        for (; ++C < D; )
          (O || C < U) && (T[c[C]] = r[C]);
        for (; x--; )
          T[y++] = r[C++];
        return T;
      }
      function Ir(r, o, c, g) {
        for (var C = -1, U = r.length, D = -1, y = c.length, b = -1, x = o.length, T = se(U - y, 0), O = P(T + x), R = !g; ++C < T; )
          O[C] = r[C];
        for (var W = C; ++b < x; )
          O[W + b] = o[b];
        for (; ++D < y; )
          (R || C < U) && (O[W + c[D]] = r[C++]);
        return O;
      }
      function Te(r, o) {
        var c = -1, g = r.length;
        for (o = o || P(g); ++c < g; )
          o[c] = r[c];
        return o;
      }
      function Un(r, o, c, g) {
        for (var C = !c, U = (c = c || {}, -1), D = o.length; ++U < D; ) {
          var y = o[U], b = g ? g(c[y], r[y], y, c, r) : e;
          (C ? gn : uu)(c, y, b = b === e ? r[y] : b);
        }
        return c;
      }
      function Bo(r, o) {
        return function(c, g) {
          var C = FA(c) ? $n : no, U = o ? o() : {};
          return C(c, r, wA(g, 2), U);
        };
      }
      function vr(r) {
        return bA(function(o, c) {
          var g = -1, C = c.length, D = 1 < C ? c[C - 1] : e, U = 2 < C ? c[2] : e, D = 3 < r.length && typeof D == "function" ? (C--, D) : e;
          for (U && We(c[0], c[1], U) && (D = C < 3 ? e : D, C = 1), o = rA(o); ++g < C; ) {
            var y = c[g];
            y && r(o, y, g, D);
          }
          return o;
        });
      }
      function lo(r, o) {
        return function(c, g) {
          if (c != null) {
            if (!LA(c))
              return r(c, g);
            for (var C = c.length, U = o ? C : -1, D = rA(c); (o ? U-- : ++U < C) && g(D[U], U, D) !== !1; )
              ;
          }
          return c;
        };
      }
      function gd(r) {
        return function(o, c, g) {
          for (var C = -1, U = rA(o), D = g(o), y = D.length; y--; ) {
            var b = D[r ? y : ++C];
            if (c(U[b], b, U) === !1)
              break;
          }
          return o;
        };
      }
      function fo(r) {
        return function(o) {
          var g = zr(o = VA(o)) ? fA(o) : e, c = g ? g[0] : o.charAt(0), g = g ? Qe(g, 1).join("") : o.slice(1);
          return c[r]() + g;
        };
      }
      function ar(r) {
        return function(o) {
          return ni(_c(Od(o).replace(ue, "")), r, "");
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
          var c = vt(r.prototype), g = r.apply(c, o);
          return SA(g) ? g : c;
        };
      }
      function $l(r, o, c) {
        var g = dr(r);
        return function C() {
          for (var U = arguments.length, D = P(U), y = U, b = Lr(C); y--; )
            D[y] = arguments[y];
          return b = U < 3 && D[0] !== b && D[U - 1] !== b ? [] : j(D, b), (U -= b.length) < c ? hd(r, o, wo, C.placeholder, e, D, b, e, e, c - U) : KA(this && this !== Ke && this instanceof C ? g : r, this, D);
        };
      }
      function wd(r) {
        return function(o, D, g) {
          var C, U = rA(o), D = (LA(o) || (C = wA(D, 3), o = me(o), D = function(y) {
            return C(U[y], y, U);
          }), r(o, D, g));
          return -1 < D ? U[C ? o[D] : D] : e;
        };
      }
      function go(r) {
        return Wt(function(o) {
          var c = o.length, g = c, C = Kt.prototype.thru;
          for (r && o.reverse(); g--; ) {
            var U = o[g];
            if (typeof U != "function")
              throw new ze(n);
            C && !b && pe(U) == "wrapper" && (b = new Kt([], !0));
          }
          for (g = b ? g : c; ++g < c; )
            var D = pe(U = o[g]), y = D == "wrapper" ? Si(U) : e, b = y && Mi(y[0]) && y[1] == 424 && !y[4].length && y[9] == 1 ? b[pe(y[0])].apply(b, y[3]) : U.length == 1 && Mi(U) ? b[D]() : b.thru(U);
          return function() {
            var x = arguments, T = x[0];
            if (b && x.length == 1 && FA(T))
              return b.plant(T).value();
            for (var O = 0, R = c ? o[O].apply(this, x) : T; ++O < c; )
              R = o[O].call(this, R);
            return R;
          };
        });
      }
      function wo(r, o, c, g, C, U, D, y, b, x) {
        var T = o & h, O = 1 & o, R = 2 & o, W = 24 & o, Z = 512 & o, uA = R ? e : dr(r);
        return function q() {
          for (var sA, AA, aA, gA = P(aA = arguments.length), MA = aA; MA--; )
            gA[MA] = arguments[MA];
          return W && (AA = function(Ye, wt) {
            for (var tt = Ye.length, De = 0; tt--; )
              Ye[tt] === wt && ++De;
            return De;
          }(gA, sA = Lr(q))), g && (gA = fd(gA, g, C, W)), U && (gA = Ir(gA, U, D, W)), aA -= AA, W && aA < x ? (AA = j(gA, sA), hd(r, o, wo, q.placeholder, c, gA, AA, y, b, x - aA)) : (sA = O ? c : this, AA = R ? sA[r] : r, aA = gA.length, y ? gA = function(Ye, wt) {
            for (var tt = Ye.length, De = we(wt.length, tt), ea = Te(Ye); De--; ) {
              var ta = wt[De];
              Ye[De] = pn(ta, tt) ? ea[ta] : e;
            }
            return Ye;
          }(gA, y) : Z && 1 < aA && gA.reverse(), T && b < aA && (gA.length = b), (AA = this && this !== Ke && this instanceof q ? uA || dr(AA) : AA).apply(sA, gA));
        };
      }
      function vi(r, o) {
        return function(c, g) {
          return c = c, C = r, U = o(g), D = {}, hn(c, function(y, b, x) {
            C(D, U(y), b, x);
          }), D;
          var C, U, D;
        };
      }
      function Ki(r, o) {
        return function(c, g) {
          var C;
          if (c === e && g === e)
            return o;
          if (c !== e && (C = c), g !== e) {
            if (C === e)
              return g;
            g = (typeof c == "string" || typeof g == "string" ? (c = $e(c), $e) : (c = dd(c), dd))(g), C = r(c, g);
          }
          return C;
        };
      }
      function Li(r) {
        return Wt(function(o) {
          return o = XA(o, Le(wA())), bA(function(c) {
            var g = this;
            return r(o, function(C) {
              return KA(C, g, c);
            });
          });
        });
      }
      function Lt(r, o) {
        var c = (o = o === e ? " " : $e(o)).length;
        return c < 2 ? c ? ct(o, r) : o : (c = ct(o, Bi(r / cA(o))), zr(o) ? Qe(fA(c), 0, r).join("") : c.slice(0, r));
      }
      function sc(r, o, c, g) {
        var C = 1 & o, U = dr(r);
        return function D() {
          for (var y = -1, b = arguments.length, x = -1, T = g.length, O = P(T + b), R = this && this !== Ke && this instanceof D ? U : r; ++x < T; )
            O[x] = g[x];
          for (; b--; )
            O[x++] = arguments[++y];
          return KA(R, C ? c : this, O);
        };
      }
      function Qd(r) {
        return function(o, c, g) {
          g && typeof g != "number" && We(o, c, g) && (c = g = e), o = _t(o), c === e ? (c = o, o = 0) : c = _t(c), g = g === e ? o < c ? 1 : -1 : _t(g);
          for (var C = o, U = g, D = r, y = -1, b = se(Bi((c - C) / (U || 1)), 0), x = P(b); b--; )
            x[D ? b : ++y] = C, C += U;
          return x;
        };
      }
      function xi(r) {
        return function(o, c) {
          return typeof o == "string" && typeof c == "string" || (o = St(o), c = St(c)), r(o, c);
        };
      }
      function hd(r, o, c, g, O, R, D, y, b, x) {
        var T = 8 & o, O = (4 & (o = (o | (T ? l : f)) & ~(T ? f : l)) || (o &= -4), [r, o, O, T ? R : e, T ? D : e, T ? e : R, T ? e : D, y, b, x]), R = c.apply(e, O);
        return Mi(r) && Zt(R, O), R.placeholder = g, md(R, r, o);
      }
      function Jt(r) {
        var o = UA[r];
        return function(c, g) {
          var C;
          return c = St(c), (g = g == null ? 0 : we(DA(g), 292)) && nc(c) ? (C = (VA(c) + "e").split("e"), +((C = (VA(o(C[0] + "e" + (+C[1] + g))) + "e").split("e"))[0] + "e" + (+C[1] - g))) : o(c);
        };
      }
      var Cd = nu && 1 / N(new nu([, -0]))[1] == p ? function(r) {
        return new nu(r);
      } : _o;
      function _i(r) {
        return function(o) {
          var c, g, C, U = Xe(o);
          return U == $ ? nr(o) : U == re ? (U = o, c = -1, g = Array(U.size), U.forEach(function(D) {
            g[++c] = [D, D];
          }), g) : XA(r(C = o), function(D) {
            return [D, C[D]];
          });
        };
      }
      function Xt(r, o, c, g, C, U, D, y) {
        var b, x, T, O, R, W, Z, uA, q, sA, AA, aA, gA, MA = 2 & o;
        if (MA || typeof r == "function")
          return (b = g ? g.length : 0) || (o &= -97, g = C = e), D = D === e ? D : se(DA(D), 0), y = y === e ? y : DA(y), b -= C ? C.length : 0, o & f && (T = g, O = C, g = C = e), x = MA ? e : Si(r), T = [r, o, c, g, C, T, O, U, D, y], x && (O = x, D = (U = T)[1], W = O[1], uA = (Z = D | W) < 131, q = W == h && D == 8 || W == h && D == w && U[7].length <= O[8] || W == 384 && O[7].length <= O[8] && D == 8, uA || q) && (1 & W && (U[2] = O[2], Z |= 1 & D ? 0 : 4), (uA = O[3]) && (R = U[3], U[3] = R ? fd(R, uA, O[4]) : uA, U[4] = R ? j(U[3], d) : O[4]), (uA = O[5]) && (R = U[5], U[5] = R ? Ir(R, uA, O[6]) : uA, U[6] = R ? j(U[5], d) : O[6]), (uA = O[7]) && (U[7] = uA), W & h && (U[8] = U[8] == null ? O[8] : we(U[8], O[8])), U[9] == null && (U[9] = O[9]), U[0] = O[0], U[1] = Z), r = T[0], o = T[1], c = T[2], g = T[3], C = T[4], !(y = T[9] = T[9] === e ? MA ? 0 : r.length : se(T[9] - b, 0)) && 24 & o && (o &= -25), q = o && o != 1 ? o == 8 || o == s ? $l(r, o, y) : o != l && o != 33 || C.length ? wo.apply(e, T) : sc(r, o, c, g) : (AA = c, aA = 1 & o, gA = dr(sA = r), function Ye() {
            return (this && this !== Ke && this instanceof Ye ? gA : sA).apply(aA ? AA : this, arguments);
          }), md((x ? ad : Zt)(q, T), r, o);
        throw new ze(n);
      }
      function Qo(r, o, c, g) {
        return r === e || Oe(r, $r[c]) && !PA.call(g, c) ? o : r;
      }
      function Kr(r, o, c, g, C, U) {
        return SA(r) && SA(o) && (U.set(o, r), pA(r, o, e, Kr, U), U.delete(o)), r;
      }
      function QA(r) {
        return Bu(r) ? e : r;
      }
      function ho(r, o, c, g, C, U) {
        var D = 1 & c, y = r.length, b = o.length;
        if (y != b && !(D && y < b))
          return !1;
        var b = U.get(r), x = U.get(o);
        if (b && x)
          return b == o && x == r;
        var T = -1, O = !0, R = 2 & c ? new ln() : e;
        for (U.set(r, o), U.set(o, r); ++T < y; ) {
          var W, Z = r[T], uA = o[T];
          if ((W = g ? D ? g(uA, Z, T, o, r, U) : g(Z, uA, T, r, o, U) : W) !== e) {
            if (W)
              continue;
            O = !1;
            break;
          }
          if (R) {
            if (!Vu(o, function(q, sA) {
              return !jr(R, sA) && (Z === q || C(Z, q, c, g, U)) && R.push(sA);
            })) {
              O = !1;
              break;
            }
          } else if (Z !== uA && !C(Z, uA, c, g, U)) {
            O = !1;
            break;
          }
        }
        return U.delete(r), U.delete(o), O;
      }
      function Wt(r) {
        return Vi(mo(r, e, fc), r + "");
      }
      function Pn(r) {
        return iu(r, me, Fo);
      }
      function Co(r) {
        return iu(r, Ee, Oi);
      }
      var Si = Ao ? function(r) {
        return Ao.get(r);
      } : _o;
      function pe(r) {
        for (var o = r.name + "", c = E[o], g = PA.call(E, o) ? c.length : 0; g--; ) {
          var C = c[g], U = C.func;
          if (U == null || U == r)
            return C.name;
        }
        return o;
      }
      function Lr(r) {
        return (PA.call(m, "placeholder") ? m : r).placeholder;
      }
      function wA() {
        var r = (r = m.iteratee || Aa) === Aa ? rd : r;
        return arguments.length ? r(arguments[0], arguments[1]) : r;
      }
      function Ti(C, o) {
        var c, g, C = C.__data__;
        return ((g = typeof (c = o)) == "string" || g == "number" || g == "symbol" || g == "boolean" ? c !== "__proto__" : c === null) ? C[typeof o == "string" ? "string" : "hash"] : C.map;
      }
      function Yt(r) {
        for (var o = me(r), c = o.length; c--; ) {
          var g = o[c], C = r[g];
          o[c] = [g, C, Ud(C)];
        }
        return o;
      }
      function he(r, o) {
        return o = o, r = (r = r) == null ? e : r[o], oo(r) ? r : e;
      }
      var Fo = fi ? function(r) {
        return r == null ? [] : (r = rA(r), Ar(fi(r), function(o) {
          return Yu.call(r, o);
        }));
      } : Vd, Oi = fi ? function(r) {
        for (var o = []; r; )
          er(o, Fo(r)), r = kn(r);
        return o;
      } : Vd, Xe = Ne;
      function cu(r, o, c) {
        for (var g = -1, C = (o = Nn(o, r)).length, U = !1; ++g < C; ) {
          var D = qt(o[g]);
          if (!(U = r != null && c(r, D)))
            break;
          r = r[D];
        }
        return U || ++g != C ? U : !!(C = r == null ? 0 : r.length) && Or(C) && pn(D, C) && (FA(r) || et(r));
      }
      function Fd(r) {
        return typeof r.constructor != "function" || xr(r) ? {} : vt(kn(r));
      }
      function cc(r) {
        return FA(r) || et(r) || !!(si && r && r[si]);
      }
      function pn(r, o) {
        var c = typeof r;
        return !!(o = o ?? K) && (c == "number" || c != "symbol" && Rs.test(r)) && -1 < r && r % 1 == 0 && r < o;
      }
      function We(r, o, c) {
        var g;
        if (SA(c))
          return ((g = typeof o) == "number" ? LA(c) && pn(o, c.length) : g == "string" && o in c) && Oe(c[o], r);
      }
      function Uo(r, o) {
        var c;
        if (!FA(r))
          return (c = typeof r) == "number" || c == "symbol" || c == "boolean" || r == null || ie(r) || kl.test(r) || !Ml.test(r) || o != null && r in rA(o);
      }
      function Mi(r) {
        var o = pe(r), c = m[o];
        return typeof c == "function" && o in _A.prototype && (r === c || (o = Si(c)) && r === o[0]);
      }
      (cn && Xe(new cn(new ArrayBuffer(1))) != Be || zu && Xe(new zu()) != $ || $u && Xe($u.resolve()) != YA || nu && Xe(new nu()) != re || OA && Xe(new OA()) != ve) && (Xe = function(c) {
        var o = Ne(c), c = o == IA ? c.constructor : e, c = c ? _r(c) : "";
        if (c)
          switch (c) {
            case ru:
              return Be;
            case ja:
              return $;
            case gi:
              return YA;
            case Gt:
              return re;
            case xA:
              return ve;
          }
        return o;
      });
      var po = Au ? zt : Rd;
      function xr(r) {
        var o = r && r.constructor;
        return r === (typeof o == "function" && o.prototype || $r);
      }
      function Ud(r) {
        return r == r && !SA(r);
      }
      function pd(r, o) {
        return function(c) {
          return c != null && c[r] === o && (o !== e || r in rA(c));
        };
      }
      function mo(r, o, c) {
        return o = se(o === e ? r.length - 1 : o, 0), function() {
          for (var g = arguments, C = -1, U = se(g.length - o, 0), D = P(U); ++C < U; )
            D[C] = g[o + C];
          for (var C = -1, y = P(o + 1); ++C < o; )
            y[C] = g[C];
          return y[o] = c(D), KA(r, this, y);
        };
      }
      function ki(r, o) {
        return o.length < 2 ? r : ur(r, Bt(o, 0, -1));
      }
      function Gi(r, o) {
        if ((o !== "constructor" || typeof r[o] != "function") && o != "__proto__")
          return r[o];
      }
      var Zt = Ed(ad), jt = xe || function(r, o) {
        return Ke.setTimeout(r, o);
      }, Vi = Ed(WA);
      function md(r, D, c) {
        var g, C, U, D = D + "";
        return Vi(r, (C = (D = (D = r = D).match(ks)) ? D[1].split(Pl) : [], U = c, at(v, function(y) {
          var b = "_." + y[0];
          U & y[1] && !Gu(C, b) && C.push(b);
        }), D = C.sort(), (c = D.length) ? (D[g = c - 1] = (1 < c ? "& " : "") + D[g], D = D.join(2 < c ? ", " : " "), r.replace(Nl, `{
/* [wrapped with ` + D + `] */
`)) : r));
      }
      function Ed(r) {
        var o = 0, c = 0;
        return function() {
          var g = TA(), C = 16 - (g - c);
          if (c = g, 0 < C) {
            if (800 <= ++o)
              return arguments[0];
          } else
            o = 0;
          return r.apply(e, arguments);
        };
      }
      function Eo(r, o) {
        var c = -1, g = r.length, C = g - 1;
        for (o = o === e ? g : o; ++c < o; ) {
          var U = od(c, C), D = r[U];
          r[U] = r[c], r[c] = D;
        }
        return r.length = o, r;
      }
      Ri = (oe = Zi(oe = function(r) {
        var o = [];
        return r.charCodeAt(0) === 46 && o.push(""), r.replace(Gl, function(c, g, C, U) {
          o.push(C ? U.replace(Wl, "$1") : g || c);
        }), o;
      }, function(r) {
        return Ri.size === 500 && Ri.clear(), r;
      })).cache;
      var Ri, pt = oe;
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
      function Ni(r) {
        var o;
        return r instanceof _A ? r.clone() : ((o = new Kt(r.__wrapped__, r.__chain__)).__actions__ = Te(r.__actions__), o.__index__ = r.__index__, o.__values__ = r.__values__, o);
      }
      cn = bA(function(r, o) {
        return mA(r) ? ou(r, NA(o, 1, mA, !0)) : [];
      }), $u = bA(function(r, o) {
        var c = mt(o);
        return mA(c) && (c = e), mA(r) ? ou(r, NA(o, 1, mA, !0), wA(c, 2)) : [];
      }), OA = bA(function(r, o) {
        var c = mt(o);
        return mA(c) && (c = e), mA(r) ? ou(r, NA(o, 1, mA, !0), e, c) : [];
      });
      function Bc(r, o, c) {
        var g = r == null ? 0 : r.length;
        return g ? ((c = c == null ? 0 : DA(c)) < 0 && (c = se(g + c, 0)), Zr(r, wA(o, 3), c)) : -1;
      }
      function lc(r, o, c) {
        var g, C = r == null ? 0 : r.length;
        return C ? (g = C - 1, c !== e && (g = DA(c), g = c < 0 ? se(C + g, 0) : we(g, C - 1)), Zr(r, wA(o, 3), g, !0)) : -1;
      }
      function fc(r) {
        return r != null && r.length ? NA(r, 1) : [];
      }
      function Pi(r) {
        return r && r.length ? r[0] : e;
      }
      Au = bA(function(r) {
        var o = XA(r, bi);
        return o.length && o[0] === r[0] ? td(o) : [];
      }), xe = bA(function(r) {
        var o = mt(r), c = XA(r, bi);
        return o === mt(c) ? o = e : c.pop(), c.length && c[0] === r[0] ? td(c, wA(o, 2)) : [];
      }), WA = bA(function(r) {
        var o = mt(r), c = XA(r, bi);
        return (o = typeof o == "function" ? o : e) && c.pop(), c.length && c[0] === r[0] ? td(c, e, o) : [];
      });
      function mt(r) {
        var o = r == null ? 0 : r.length;
        return o ? r[o - 1] : e;
      }
      oe = bA(gc);
      function gc(r, o) {
        return r && r.length && o && o.length ? Ei(r, o) : r;
      }
      var Af = Wt(function(r, o) {
        var c = r == null ? 0 : r.length, g = $a(r, o);
        return Se(r, XA(o, function(C) {
          return pn(C, c) ? +C : C;
        }).sort(ld)), g;
      });
      function Dd(r) {
        return r == null ? r : tu.call(r);
      }
      var ef = bA(function(r) {
        return Cn(NA(r, 1, mA, !0));
      }), tf = bA(function(r) {
        var o = mt(r);
        return mA(o) && (o = e), Cn(NA(r, 1, mA, !0), wA(o, 2));
      }), nf = bA(function(r) {
        var o = typeof (o = mt(r)) == "function" ? o : e;
        return Cn(NA(r, 1, mA, !0), e, o);
      });
      function Ji(r) {
        var o;
        return r && r.length ? (o = 0, r = Ar(r, function(c) {
          return mA(c) && (o = se(c.length, o), 1);
        }), Ya(o, function(c) {
          return XA(r, Ur(c));
        })) : [];
      }
      function Do(r, o) {
        return r && r.length ? (r = Ji(r), o == null ? r : XA(r, function(c) {
          return KA(o, e, c);
        })) : [];
      }
      var rf = bA(function(r, o) {
        return mA(r) ? ou(r, o) : [];
      }), uf = bA(function(r) {
        return so(Ar(r, mA));
      }), of = bA(function(r) {
        var o = mt(r);
        return mA(o) && (o = e), so(Ar(r, mA), wA(o, 2));
      }), af = bA(function(r) {
        var o = typeof (o = mt(r)) == "function" ? o : e;
        return so(Ar(r, mA), e, o);
      }), wc = bA(Ji), Qc = bA(function(r) {
        var o = r.length, o = typeof (o = 1 < o ? r[o - 1] : e) == "function" ? (r.pop(), o) : e;
        return Do(r, o);
      });
      function hc(r) {
        return r = m(r), r.__chain__ = !0, r;
      }
      function Xi(r, o) {
        return o(r);
      }
      var df = Wt(function(r) {
        function o(U) {
          return $a(U, r);
        }
        var c = r.length, g = c ? r[0] : 0, C = this.__wrapped__;
        return !(1 < c || this.__actions__.length) && C instanceof _A && pn(g) ? ((C = C.slice(g, +g + (c ? 1 : 0))).__actions__.push({ func: Xi, args: [o], thisArg: e }), new Kt(C, this.__chain__).thru(function(U) {
          return c && !U.length && U.push(e), U;
        })) : this.thru(o);
      }), Wi = Bo(function(r, o, c) {
        PA.call(r, c) ? ++r[c] : gn(r, c, 1);
      }), sf = wd(Bc), cf = wd(lc);
      function Ho(r, o) {
        return (FA(r) ? at : Re)(r, wA(o, 3));
      }
      function Hd(r, o) {
        return (FA(r) ? zl : Qi)(r, wA(o, 3));
      }
      var Cc = Bo(function(r, o, c) {
        PA.call(r, c) ? r[c].push(o) : gn(r, c, [o]);
      }), yd = bA(function(r, o, c) {
        var g = -1, C = typeof o == "function", U = LA(r) ? P(r.length) : [];
        return Re(r, function(D) {
          U[++g] = C ? KA(o, D, c) : yr(D, o, c);
        }), U;
      }), Fc = Bo(function(r, o, c) {
        gn(r, c, o);
      });
      function yo(r, o) {
        return (FA(r) ? XA : ud)(r, wA(o, 3));
      }
      var bd = Bo(function(r, o, c) {
        r[c ? 0 : 1].push(o);
      }, function() {
        return [[], []];
      }), Bf = bA(function(r, o) {
        var c;
        return r == null ? [] : (1 < (c = o.length) && We(r, o[0], o[1]) ? o = [] : 2 < c && We(o[0], o[1], o[2]) && (o = [o[0]]), ac(r, NA(o, 1), []));
      }), Sr = Et || function() {
        return Ke.Date.now();
      };
      function bo(r, o, c) {
        return o = c ? e : o, o = r && o == null ? r.length : o, Xt(r, h, e, e, e, e, o);
      }
      function Yi(r, o) {
        var c;
        if (typeof o != "function")
          throw new ze(n);
        return r = DA(r), function() {
          return 0 < --r && (c = o.apply(this, arguments)), r <= 1 && (o = e), c;
        };
      }
      var Io = bA(function(r, o, c) {
        var g, C = 1;
        return c.length && (g = j(c, Lr(Io)), C |= l), Xt(r, C, o, c, g);
      }), Id = bA(function(r, o, c) {
        var g, C = 3;
        return c.length && (g = j(c, Lr(Id)), C |= l), Xt(o, C, r, c, g);
      });
      function Uc(r, o, c) {
        var g, C, U, D, y, b, x = 0, T = !1, O = !1, R = !0;
        if (typeof r != "function")
          throw new ze(n);
        function W(AA) {
          var aA = g, gA = C;
          return g = C = e, x = AA, D = r.apply(gA, aA);
        }
        function Z(AA) {
          var aA = AA - b;
          return b === e || o <= aA || aA < 0 || O && U <= AA - x;
        }
        function uA() {
          var AA, aA = Sr();
          if (Z(aA))
            return q(aA);
          y = jt(uA, (AA = o - ((aA = aA) - b), O ? we(AA, U - (aA - x)) : AA));
        }
        function q(AA) {
          return y = e, R && g ? W(AA) : (g = C = e, D);
        }
        function sA() {
          var AA = Sr(), aA = Z(AA);
          if (g = arguments, C = this, b = AA, aA) {
            if (y === e)
              return x = AA = b, y = jt(uA, o), T ? W(AA) : D;
            if (O)
              return Pt(y), y = jt(uA, o), W(b);
          }
          return y === e && (y = jt(uA, o)), D;
        }
        return o = St(o) || 0, SA(c) && (T = !!c.leading, O = "maxWait" in c, U = O ? se(St(c.maxWait) || 0, o) : U, R = "trailing" in c ? !!c.trailing : R), sA.cancel = function() {
          y !== e && Pt(y), x = 0, g = b = C = y = e;
        }, sA.flush = function() {
          return y === e ? D : q(Sr());
        }, sA;
      }
      var Et = bA(function(r, o) {
        return wi(r, 1, o);
      }), lf = bA(function(r, o, c) {
        return wi(r, St(o) || 0, c);
      });
      function Zi(r, o) {
        if (typeof r != "function" || o != null && typeof o != "function")
          throw new ze(n);
        function c() {
          var g = arguments, C = o ? o.apply(this, g) : g[0], U = c.cache;
          return U.has(C) ? U.get(C) : (g = r.apply(this, g), c.cache = U.set(C, g) || U, g);
        }
        return c.cache = new (Zi.Cache || Ft)(), c;
      }
      function mn(r) {
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
      Zi.Cache = Ft;
      var CA = CA(function(r, o) {
        var c = (o = o.length == 1 && FA(o[0]) ? XA(o[0], Le(wA())) : XA(NA(o, 1), Le(wA()))).length;
        return bA(function(g) {
          for (var C = -1, U = we(g.length, c); ++C < U; )
            g[C] = o[C].call(this, g[C]);
          return KA(r, this, g);
        });
      }), vd = bA(function(r, o) {
        var c = j(o, Lr(vd));
        return Xt(r, l, e, o, c);
      }), At = bA(function(r, o) {
        var c = j(o, Lr(At));
        return Xt(r, f, e, o, c);
      }), Ce = Wt(function(r, o) {
        return Xt(r, w, e, e, e, o);
      });
      function Oe(r, o) {
        return r === o || r != r && o != o;
      }
      var xt = xi(Ci), Kd = xi(function(r, o) {
        return o <= r;
      }), et = nd(function() {
        return arguments;
      }()) ? nd : function(r) {
        return Ae(r) && PA.call(r, "callee") && !Yu.call(r, "callee");
      }, FA = P.isArray, ji = ht ? Le(ht) : function(r) {
        return Ae(r) && Ne(r) == ZA;
      };
      function LA(r) {
        return r != null && Or(r.length) && !zt(r);
      }
      function mA(r) {
        return Ae(r) && LA(r);
      }
      var Jn = Dt || Rd, Dt = js ? Le(js) : function(r) {
        return Ae(r) && Ne(r) == iA;
      };
      function Tr(r) {
        var o;
        return !!Ae(r) && ((o = Ne(r)) == z || o == "[object DOMException]" || typeof r.message == "string" && typeof r.name == "string" && !Bu(r));
      }
      function zt(r) {
        return !!SA(r) && ((r = Ne(r)) == J || r == lA || r == "[object AsyncFunction]" || r == "[object Proxy]");
      }
      function Ld(r) {
        return typeof r == "number" && r == DA(r);
      }
      function Or(r) {
        return typeof r == "number" && -1 < r && r % 1 == 0 && r <= K;
      }
      function SA(r) {
        var o = typeof r;
        return r != null && (o == "object" || o == "function");
      }
      function Ae(r) {
        return r != null && typeof r == "object";
      }
      var pc = Na ? Le(Na) : function(r) {
        return Ae(r) && Xe(r) == $;
      };
      function mc(r) {
        return typeof r == "number" || Ae(r) && Ne(r) == vA;
      }
      function Bu(r) {
        return !(!Ae(r) || Ne(r) != IA) && ((r = kn(r)) === null || typeof (r = PA.call(r, "constructor") && r.constructor) == "function" && r instanceof r && pr.call(r) == ai);
      }
      var $t = On ? Le(On) : function(r) {
        return Ae(r) && Ne(r) == Fe;
      }, EA = ku ? Le(ku) : function(r) {
        return Ae(r) && Xe(r) == re;
      };
      function vo(r) {
        return typeof r == "string" || !FA(r) && Ae(r) && Ne(r) == $A;
      }
      function ie(r) {
        return typeof r == "symbol" || Ae(r) && Ne(r) == ge;
      }
      var Mr = ei ? Le(ei) : function(r) {
        return Ae(r) && Or(r.length) && !!RA[Ne(r)];
      }, JA = xi(io), ff = xi(function(r, o) {
        return r <= o;
      });
      function xd(r) {
        if (!r)
          return [];
        if (LA(r))
          return (vo(r) ? fA : Te)(r);
        if (eu && r[eu]) {
          for (var o, c = r[eu](), g = []; !(o = c.next()).done; )
            g.push(o.value);
          return g;
        }
        var C = Xe(r);
        return (C == $ ? nr : C == re ? N : lu)(r);
      }
      function _t(r) {
        return r ? (r = St(r)) === p || r === -p ? 17976931348623157e292 * (r < 0 ? -1 : 1) : r == r ? r : 0 : r === 0 ? r : 0;
      }
      function DA(o) {
        var o = _t(o), c = o % 1;
        return o == o ? c ? o - c : o : 0;
      }
      function Ec(r) {
        return r ? wn(DA(r), 0, S) : 0;
      }
      function St(r) {
        if (typeof r == "number")
          return r;
        if (ie(r))
          return _;
        if (typeof (r = SA(r) ? SA(o = typeof r.valueOf == "function" ? r.valueOf() : r) ? o + "" : o : r) != "string")
          return r === 0 ? r : +r;
        r = $s(r);
        var o = Zl.test(r);
        return o || Vs.test(r) ? ot(r.slice(2), o ? 2 : 8) : zo.test(r) ? _ : +r;
      }
      function Dc(r) {
        return Un(r, Ee(r));
      }
      function VA(r) {
        return r == null ? "" : $e(r);
      }
      var _d = vr(function(r, o) {
        if (xr(o) || LA(o))
          Un(o, me(o), r);
        else
          for (var c in o)
            PA.call(o, c) && uu(r, c, o[c]);
      }), Hc = vr(function(r, o) {
        Un(o, Ee(o), r);
      }), qi = vr(function(r, o, c, g) {
        Un(o, Ee(o), r, g);
      }), gf = vr(function(r, o, c, g) {
        Un(o, me(o), r, g);
      }), Me = Wt($a), lt = bA(function(r, o) {
        r = rA(r);
        var c = -1, g = o.length, C = 2 < g ? o[2] : e;
        for (C && We(o[0], o[1], C) && (g = 1); ++c < g; )
          for (var U = o[c], D = Ee(U), y = -1, b = D.length; ++y < b; ) {
            var x = D[y], T = r[x];
            (T === e || Oe(T, $r[x]) && !PA.call(r, x)) && (r[x] = U[x]);
          }
        return r;
      }), wf = bA(function(r) {
        return r.push(e, Kr), KA(Td, e, r);
      });
      function zi(r, o, c) {
        return r = r == null ? e : ur(r, o), r === e ? c : r;
      }
      function Sd(r, o) {
        return r != null && cu(r, o, ed);
      }
      var Qf = vi(function(r, o, c) {
        r[o = o != null && typeof o.toString != "function" ? Ju.call(o) : o] = c;
      }, Lo(gt)), yc = vi(function(r, o, c) {
        o != null && typeof o.toString != "function" && (o = Ju.call(o)), PA.call(r, o) ? r[o].push(c) : r[o] = [c];
      }, wA), bc = bA(yr);
      function me(r) {
        return (LA(r) ? qa : Ui)(r);
      }
      function Ee(r) {
        return LA(r) ? qa(r, !0) : oc(r);
      }
      var hf = vr(function(r, o, c) {
        pA(r, o, c);
      }), Td = vr(function(r, o, c, g) {
        pA(r, o, c, g);
      }), Ic = Wt(function(r, o) {
        var c = {};
        if (r != null)
          for (var g = !1, C = (o = XA(o, function(U) {
            return U = Nn(U, r), g = g || 1 < U.length, U;
          }), Un(r, Co(r), c), g && (c = Ut(c, 7, QA)), o.length); C--; )
            Fn(c, o[C]);
        return c;
      }), Cf = Wt(function(r, o) {
        return r == null ? {} : du(c = r, o, function(g, C) {
          return Sd(c, C);
        });
        var c;
      });
      function vc(r, o) {
        var c;
        return r == null ? {} : (c = XA(Co(r), function(g) {
          return [g];
        }), o = wA(o), du(r, c, function(g, C) {
          return o(g, C[0]);
        }));
      }
      var Kc = _i(me), Lc = _i(Ee);
      function lu(r) {
        return r == null ? [] : Ru(r, me(r));
      }
      var Ff = ar(function(r, o, c) {
        return o = o.toLowerCase(), r + (c ? $i(o) : o);
      });
      function $i(r) {
        return Ko(VA(r).toLowerCase());
      }
      function Od(r) {
        return (r = VA(r)) && r.replace(Ns, qr).replace(te, "");
      }
      var xc = ar(function(r, o, c) {
        return r + (c ? "-" : "") + o.toLowerCase();
      }), Uf = ar(function(r, o, c) {
        return r + (c ? " " : "") + o.toLowerCase();
      }), Md = fo("toLowerCase"), pf = ar(function(r, o, c) {
        return r + (c ? "_" : "") + o.toLowerCase();
      }), mf = ar(function(r, o, c) {
        return r + (c ? " " : "") + Ko(o);
      }), ft = ar(function(r, o, c) {
        return r + (c ? " " : "") + o.toUpperCase();
      }), Ko = fo("toUpperCase");
      function _c(r, o, c) {
        return r = VA(r), (o = c ? e : o) === e ? (c = r, jn.test(c) ? r.match(jl) || [] : r.match(Jl) || []) : r.match(o) || [];
      }
      var Sc = bA(function(r, o) {
        try {
          return KA(r, e, o);
        } catch (c) {
          return Tr(c) ? c : new BA(c);
        }
      }), kd = Wt(function(r, o) {
        return at(o, function(c) {
          c = qt(c), gn(r, c, Io(r[c], r));
        }), r;
      });
      function Lo(r) {
        return function() {
          return r;
        };
      }
      var Ef = go(), Df = go(!0);
      function gt(r) {
        return r;
      }
      function Aa(r) {
        return rd(typeof r == "function" ? r : Ut(r, 1));
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
      function xo(r, o, c) {
        var g = me(o), C = rr(o, g), U = (c != null || SA(o) && (C.length || !g.length) || (c = o, o = r, r = this, C = rr(o, me(o))), !(SA(c) && "chain" in c && !c.chain)), D = zt(r);
        return at(C, function(y) {
          var b = o[y];
          r[y] = b, D && (r.prototype[y] = function() {
            var x, T = this.__chain__;
            return U || T ? (((x = r(this.__wrapped__)).__actions__ = Te(this.__actions__)).push({ func: b, args: arguments, thisArg: r }), x.__chain__ = T, x) : b.apply(r, er([this.value()], arguments));
          });
        }), r;
      }
      function _o() {
      }
      var bf = Li(XA), If = Li(ti), vf = Li(Vu);
      function Tc(r) {
        return Uo(r) ? Ur(qt(r)) : (o = r, function(c) {
          return ur(c, o);
        });
        var o;
      }
      var Gd = Qd(), Kf = Qd(!0);
      function Vd() {
        return [];
      }
      function Rd() {
        return !1;
      }
      var u = Ki(function(r, o) {
        return r + o;
      }, 0), a = Jt("ceil"), B = Ki(function(r, o) {
        return r / o;
      }, 1), Q = Jt("floor"), F, H = Ki(function(r, o) {
        return r * o;
      }, 1), I = Jt("round"), L = Ki(function(r, o) {
        return r - o;
      }, 0);
      return m.after = function(r, o) {
        if (typeof o != "function")
          throw new ze(n);
        return r = DA(r), function() {
          if (--r < 1)
            return o.apply(this, arguments);
        };
      }, m.ary = bo, m.assign = _d, m.assignIn = Hc, m.assignInWith = qi, m.assignWith = gf, m.at = Me, m.before = Yi, m.bind = Io, m.bindAll = kd, m.bindKey = Id, m.castArray = function() {
        var r;
        return arguments.length ? FA(r = arguments[0]) ? r : [r] : [];
      }, m.chain = hc, m.chunk = function(r, o, c) {
        o = (c ? We(r, o, c) : o === e) ? 1 : se(DA(o), 0);
        var g = r == null ? 0 : r.length;
        if (!g || o < 1)
          return [];
        for (var C = 0, U = 0, D = P(Bi(g / o)); C < g; )
          D[U++] = Bt(r, C, C += o);
        return D;
      }, m.compact = function(r) {
        for (var o = -1, c = r == null ? 0 : r.length, g = 0, C = []; ++o < c; ) {
          var U = r[o];
          U && (C[g++] = U);
        }
        return C;
      }, m.concat = function() {
        var r = arguments.length;
        if (!r)
          return [];
        for (var o = P(r - 1), c = arguments[0], g = r; g--; )
          o[g - 1] = arguments[g];
        return er(FA(c) ? Te(c) : [c], NA(o, 1));
      }, m.cond = function(r) {
        var o = r == null ? 0 : r.length, c = wA();
        return r = o ? XA(r, function(g) {
          if (typeof g[1] != "function")
            throw new ze(n);
          return [c(g[0]), g[1]];
        }) : [], bA(function(g) {
          for (var C = -1; ++C < o; ) {
            var U = r[C];
            if (KA(U[0], this, g))
              return KA(U[1], this, g);
          }
        });
      }, m.conforms = function(r) {
        return o = Ut(r, 1), c = me(o), function(g) {
          return _e(g, o, c);
        };
        var o, c;
      }, m.constant = Lo, m.countBy = Wi, m.create = function(r, o) {
        return r = vt(r), o == null ? r : Vn(r, o);
      }, m.curry = function r(o, c, g) {
        return o = Xt(o, 8, e, e, e, e, e, c = g ? e : c), o.placeholder = r.placeholder, o;
      }, m.curryRight = function r(o, c, g) {
        return o = Xt(o, s, e, e, e, e, e, c = g ? e : c), o.placeholder = r.placeholder, o;
      }, m.debounce = Uc, m.defaults = lt, m.defaultsDeep = wf, m.defer = Et, m.delay = lf, m.difference = cn, m.differenceBy = $u, m.differenceWith = OA, m.drop = function(r, o, c) {
        var g = r == null ? 0 : r.length;
        return g ? Bt(r, (o = c || o === e ? 1 : DA(o)) < 0 ? 0 : o, g) : [];
      }, m.dropRight = function(r, o, c) {
        var g = r == null ? 0 : r.length;
        return g ? Bt(r, 0, (o = g - (o = c || o === e ? 1 : DA(o))) < 0 ? 0 : o) : [];
      }, m.dropRightWhile = function(r, o) {
        return r && r.length ? ao(r, wA(o, 3), !0, !0) : [];
      }, m.dropWhile = function(r, o) {
        return r && r.length ? ao(r, wA(o, 3), !0) : [];
      }, m.fill = function(r, o, c, g) {
        if (!(b = r == null ? 0 : r.length))
          return [];
        c && typeof c != "number" && We(r, o, c) && (c = 0, g = b);
        var C = r, U = o, D = c, y = g, b = C.length;
        for ((D = DA(D)) < 0 && (D = b < -D ? 0 : b + D), (y = y === e || b < y ? b : DA(y)) < 0 && (y += b), y = y < D ? 0 : Ec(y); D < y; )
          C[D++] = U;
        return C;
      }, m.filter = function(r, o) {
        return (FA(r) ? Ar : Ad)(r, wA(o, 3));
      }, m.flatMap = function(r, o) {
        return NA(yo(r, o), 1);
      }, m.flatMapDeep = function(r, o) {
        return NA(yo(r, o), p);
      }, m.flatMapDepth = function(r, o, c) {
        return c = c === e ? 1 : DA(c), NA(yo(r, o), c);
      }, m.flatten = fc, m.flattenDeep = function(r) {
        return r != null && r.length ? NA(r, p) : [];
      }, m.flattenDepth = function(r, o) {
        return r != null && r.length ? NA(r, o = o === e ? 1 : DA(o)) : [];
      }, m.flip = function(r) {
        return Xt(r, 512);
      }, m.flow = Ef, m.flowRight = Df, m.fromPairs = function(r) {
        for (var o = -1, c = r == null ? 0 : r.length, g = {}; ++o < c; ) {
          var C = r[o];
          g[C[0]] = C[1];
        }
        return g;
      }, m.functions = function(r) {
        return r == null ? [] : rr(r, me(r));
      }, m.functionsIn = function(r) {
        return r == null ? [] : rr(r, Ee(r));
      }, m.groupBy = Cc, m.initial = function(r) {
        return r != null && r.length ? Bt(r, 0, -1) : [];
      }, m.intersection = Au, m.intersectionBy = xe, m.intersectionWith = WA, m.invert = Qf, m.invertBy = yc, m.invokeMap = yd, m.iteratee = Aa, m.keyBy = Fc, m.keys = me, m.keysIn = Ee, m.map = yo, m.mapKeys = function(r, o) {
        var c = {};
        return o = wA(o, 3), hn(r, function(g, C, U) {
          gn(c, o(g, C, U), g);
        }), c;
      }, m.mapValues = function(r, o) {
        var c = {};
        return o = wA(o, 3), hn(r, function(g, C, U) {
          gn(c, C, o(g, C, U));
        }), c;
      }, m.matches = function(r) {
        return pi(Ut(r, 1));
      }, m.matchesProperty = function(r, o) {
        return mi(r, Ut(o, 1));
      }, m.memoize = Zi, m.merge = hf, m.mergeWith = Td, m.method = Hf, m.methodOf = yf, m.mixin = xo, m.negate = mn, m.nthArg = function(r) {
        return r = DA(r), bA(function(o) {
          return ic(o, r);
        });
      }, m.omit = Ic, m.omitBy = function(r, o) {
        return vc(r, mn(wA(o)));
      }, m.once = function(r) {
        return Yi(2, r);
      }, m.orderBy = function(r, o, c, g) {
        return r == null ? [] : ac(r, o = FA(o) ? o : o == null ? [] : [o], c = FA(c = g ? e : c) ? c : c == null ? [] : [c]);
      }, m.over = bf, m.overArgs = CA, m.overEvery = If, m.overSome = vf, m.partial = vd, m.partialRight = At, m.partition = bd, m.pick = Cf, m.pickBy = vc, m.property = Tc, m.propertyOf = function(r) {
        return function(o) {
          return r == null ? e : ur(r, o);
        };
      }, m.pull = oe, m.pullAll = gc, m.pullAllBy = function(r, o, c) {
        return r && r.length && o && o.length ? Ei(r, o, wA(c, 2)) : r;
      }, m.pullAllWith = function(r, o, c) {
        return r && r.length && o && o.length ? Ei(r, o, e, c) : r;
      }, m.pullAt = Af, m.range = Gd, m.rangeRight = Kf, m.rearg = Ce, m.reject = function(r, o) {
        return (FA(r) ? Ar : Ad)(r, mn(wA(o, 3)));
      }, m.remove = function(r, o) {
        var c = [];
        if (r && r.length) {
          var g = -1, C = [], U = r.length;
          for (o = wA(o, 3); ++g < U; ) {
            var D = r[g];
            o(D, g, r) && (c.push(D), C.push(g));
          }
          Se(r, C);
        }
        return c;
      }, m.rest = function(r, o) {
        if (typeof r != "function")
          throw new ze(n);
        return bA(r, o = o === e ? o : DA(o));
      }, m.reverse = Dd, m.sampleSize = function(r, o, c) {
        return o = (c ? We(r, o, c) : o === e) ? 1 : DA(o), (FA(r) ? za : id)(r, o);
      }, m.set = function(r, o, c) {
        return r == null ? r : su(r, o, c);
      }, m.setWith = function(r, o, c, g) {
        return g = typeof g == "function" ? g : e, r == null ? r : su(r, o, c, g);
      }, m.shuffle = function(r) {
        return (FA(r) ? Hr : or)(r);
      }, m.slice = function(r, o, c) {
        var g = r == null ? 0 : r.length;
        return g ? (c = c && typeof c != "number" && We(r, o, c) ? (o = 0, g) : (o = o == null ? 0 : DA(o), c === e ? g : DA(c)), Bt(r, o, c)) : [];
      }, m.sortBy = Bf, m.sortedUniq = function(r) {
        return r && r.length ? yi(r) : [];
      }, m.sortedUniqBy = function(r, o) {
        return r && r.length ? yi(r, wA(o, 2)) : [];
      }, m.split = function(r, o, c) {
        return c && typeof c != "number" && We(r, o, c) && (o = c = e), (c = c === e ? S : c >>> 0) ? (r = VA(r)) && (typeof o == "string" || o != null && !$t(o)) && !(o = $e(o)) && zr(r) ? Qe(fA(r), 0, c) : r.split(o, c) : [];
      }, m.spread = function(r, o) {
        if (typeof r != "function")
          throw new ze(n);
        return o = o == null ? 0 : se(DA(o), 0), bA(function(C) {
          var g = C[o], C = Qe(C, 0, o);
          return g && er(C, g), KA(r, this, C);
        });
      }, m.tail = function(r) {
        var o = r == null ? 0 : r.length;
        return o ? Bt(r, 1, o) : [];
      }, m.take = function(r, o, c) {
        return r && r.length ? Bt(r, 0, (o = c || o === e ? 1 : DA(o)) < 0 ? 0 : o) : [];
      }, m.takeRight = function(r, o, c) {
        var g = r == null ? 0 : r.length;
        return g ? Bt(r, (o = g - (o = c || o === e ? 1 : DA(o))) < 0 ? 0 : o, g) : [];
      }, m.takeRightWhile = function(r, o) {
        return r && r.length ? ao(r, wA(o, 3), !1, !0) : [];
      }, m.takeWhile = function(r, o) {
        return r && r.length ? ao(r, wA(o, 3)) : [];
      }, m.tap = function(r, o) {
        return o(r), r;
      }, m.throttle = function(r, o, c) {
        var g = !0, C = !0;
        if (typeof r != "function")
          throw new ze(n);
        return SA(c) && (g = "leading" in c ? !!c.leading : g, C = "trailing" in c ? !!c.trailing : C), Uc(r, o, { leading: g, maxWait: o, trailing: C });
      }, m.thru = Xi, m.toArray = xd, m.toPairs = Kc, m.toPairsIn = Lc, m.toPath = function(r) {
        return FA(r) ? XA(r, qt) : ie(r) ? [r] : Te(pt(VA(r)));
      }, m.toPlainObject = Dc, m.transform = function(r, o, c) {
        var g, C = FA(r), U = C || Jn(r) || Mr(r);
        return o = wA(o, 4), c == null && (g = r && r.constructor, c = U ? C ? new g() : [] : SA(r) && zt(g) ? vt(kn(r)) : {}), (U ? at : hn)(r, function(D, y, b) {
          return o(c, D, y, b);
        }), c;
      }, m.unary = function(r) {
        return bo(r, 1);
      }, m.union = ef, m.unionBy = tf, m.unionWith = nf, m.uniq = function(r) {
        return r && r.length ? Cn(r) : [];
      }, m.uniqBy = function(r, o) {
        return r && r.length ? Cn(r, wA(o, 2)) : [];
      }, m.uniqWith = function(r, o) {
        return o = typeof o == "function" ? o : e, r && r.length ? Cn(r, e, o) : [];
      }, m.unset = function(r, o) {
        return r == null || Fn(r, o);
      }, m.unzip = Ji, m.unzipWith = Do, m.update = function(r, o, c) {
        return r == null ? r : Rn(r, o, Ii(c));
      }, m.updateWith = function(r, o, c, g) {
        return g = typeof g == "function" ? g : e, r == null ? r : Rn(r, o, Ii(c), g);
      }, m.values = lu, m.valuesIn = function(r) {
        return r == null ? [] : Ru(r, Ee(r));
      }, m.without = rf, m.words = _c, m.wrap = function(r, o) {
        return vd(Ii(o), r);
      }, m.xor = uf, m.xorBy = of, m.xorWith = af, m.zip = wc, m.zipObject = function(r, o) {
        return cd(r || [], o || [], uu);
      }, m.zipObjectDeep = function(r, o) {
        return cd(r || [], o || [], su);
      }, m.zipWith = Qc, m.entries = Kc, m.entriesIn = Lc, m.extend = Hc, m.extendWith = qi, xo(m, m), m.add = u, m.attempt = Sc, m.camelCase = Ff, m.capitalize = $i, m.ceil = a, m.clamp = function(r, o, c) {
        return c === e && (c = o, o = e), c !== e && (c = (c = St(c)) == c ? c : 0), o !== e && (o = (o = St(o)) == o ? o : 0), wn(St(r), o, c);
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
        var g = r.length, g = c = c === e ? g : wn(DA(c), 0, g);
        return 0 <= (c -= o.length) && r.slice(c, g) == o;
      }, m.eq = Oe, m.escape = function(r) {
        return (r = VA(r)) && Tl.test(r) ? r.replace(Ms, kt) : r;
      }, m.escapeRegExp = function(r) {
        return (r = VA(r)) && Vl.test(r) ? r.replace(Sa, "\\$&") : r;
      }, m.every = function(r, o, c) {
        return (FA(r) ? ti : hi)(r, wA(o = c && We(r, o, c) ? e : o, 3));
      }, m.find = sf, m.findIndex = Bc, m.findKey = function(r, o) {
        return Ja(r, wA(o, 3), hn);
      }, m.findLast = cf, m.findLastIndex = lc, m.findLastKey = function(r, o) {
        return Ja(r, wA(o, 3), uo);
      }, m.floor = Q, m.forEach = Ho, m.forEachRight = Hd, m.forIn = function(r, o) {
        return r == null ? r : ro(r, wA(o, 3), Ee);
      }, m.forInRight = function(r, o) {
        return r == null ? r : rc(r, wA(o, 3), Ee);
      }, m.forOwn = function(r, o) {
        return r && hn(r, wA(o, 3));
      }, m.forOwnRight = function(r, o) {
        return r && uo(r, wA(o, 3));
      }, m.get = zi, m.gt = xt, m.gte = Kd, m.has = function(r, o) {
        return r != null && cu(r, o, uc);
      }, m.hasIn = Sd, m.head = Pi, m.identity = gt, m.includes = function(r, o, c, g) {
        return r = LA(r) ? r : lu(r), c = c && !g ? DA(c) : 0, g = r.length, c < 0 && (c = se(g + c, 0)), vo(r) ? c <= g && -1 < r.indexOf(o, c) : !!g && -1 < tr(r, o, c);
      }, m.indexOf = function(r, o, c) {
        var g = r == null ? 0 : r.length;
        return g ? tr(r, o, r = (r = c == null ? 0 : DA(c)) < 0 ? se(g + r, 0) : r) : -1;
      }, m.inRange = function(r, o, c) {
        return o = _t(o), c === e ? (c = o, o = 0) : c = _t(c), (r = r = St(r)) >= we(o = o, c = c) && r < se(o, c);
      }, m.invoke = bc, m.isArguments = et, m.isArray = FA, m.isArrayBuffer = ji, m.isArrayLike = LA, m.isArrayLikeObject = mA, m.isBoolean = function(r) {
        return r === !0 || r === !1 || Ae(r) && Ne(r) == X;
      }, m.isBuffer = Jn, m.isDate = Dt, m.isElement = function(r) {
        return Ae(r) && r.nodeType === 1 && !Bu(r);
      }, m.isEmpty = function(r) {
        if (r != null) {
          if (LA(r) && (FA(r) || typeof r == "string" || typeof r.splice == "function" || Jn(r) || Mr(r) || et(r)))
            return !r.length;
          var o, c = Xe(r);
          if (c == $ || c == re)
            return !r.size;
          if (xr(r))
            return !Ui(r).length;
          for (o in r)
            if (PA.call(r, o))
              return !1;
        }
        return !0;
      }, m.isEqual = function(r, o) {
        return au(r, o);
      }, m.isEqualWith = function(r, o, c) {
        var g = (c = typeof c == "function" ? c : e) ? c(r, o) : e;
        return g === e ? au(r, o, e, c) : !!g;
      }, m.isError = Tr, m.isFinite = function(r) {
        return typeof r == "number" && nc(r);
      }, m.isFunction = zt, m.isInteger = Ld, m.isLength = Or, m.isMap = pc, m.isMatch = function(r, o) {
        return r === o || Fi(r, o, Yt(o));
      }, m.isMatchWith = function(r, o, c) {
        return c = typeof c == "function" ? c : e, Fi(r, o, Yt(o), c);
      }, m.isNaN = function(r) {
        return mc(r) && r != +r;
      }, m.isNative = function(r) {
        if (po(r))
          throw new BA("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
        return oo(r);
      }, m.isNil = function(r) {
        return r == null;
      }, m.isNull = function(r) {
        return r === null;
      }, m.isNumber = mc, m.isObject = SA, m.isObjectLike = Ae, m.isPlainObject = Bu, m.isRegExp = $t, m.isSafeInteger = function(r) {
        return Ld(r) && -K <= r && r <= K;
      }, m.isSet = EA, m.isString = vo, m.isSymbol = ie, m.isTypedArray = Mr, m.isUndefined = function(r) {
        return r === e;
      }, m.isWeakMap = function(r) {
        return Ae(r) && Xe(r) == ve;
      }, m.isWeakSet = function(r) {
        return Ae(r) && Ne(r) == "[object WeakSet]";
      }, m.join = function(r, o) {
        return r == null ? "" : sn.call(r, o);
      }, m.kebabCase = xc, m.last = mt, m.lastIndexOf = function(r, o, c) {
        var g = r == null ? 0 : r.length;
        if (!g)
          return -1;
        var C = g;
        if (c !== e && (C = (C = DA(c)) < 0 ? se(g + C, 0) : we(C, g - 1)), o != o)
          return Zr(r, dt, C, !0);
        for (var U = r, D = o, y = C + 1; y--; )
          if (U[y] === D)
            return y;
        return y;
      }, m.lowerCase = Uf, m.lowerFirst = Md, m.lt = JA, m.lte = ff, m.max = function(r) {
        return r && r.length ? Qn(r, gt, Ci) : e;
      }, m.maxBy = function(r, o) {
        return r && r.length ? Qn(r, wA(o, 2), Ci) : e;
      }, m.mean = function(r) {
        return ri(r, gt);
      }, m.meanBy = function(r, o) {
        return ri(r, wA(o, 2));
      }, m.min = function(r) {
        return r && r.length ? Qn(r, gt, io) : e;
      }, m.minBy = function(r, o) {
        return r && r.length ? Qn(r, wA(o, 2), io) : e;
      }, m.stubArray = Vd, m.stubFalse = Rd, m.stubObject = function() {
        return {};
      }, m.stubString = function() {
        return "";
      }, m.stubTrue = function() {
        return !0;
      }, m.multiply = H, m.nth = function(r, o) {
        return r && r.length ? ic(r, DA(o)) : e;
      }, m.noConflict = function() {
        return Ke._ === this && (Ke._ = tc), this;
      }, m.noop = _o, m.now = Sr, m.pad = function(r, o, c) {
        r = VA(r);
        var g = (o = DA(o)) ? cA(r) : 0;
        return !o || o <= g ? r : Lt(li(o = (o - g) / 2), c) + r + Lt(Bi(o), c);
      }, m.padEnd = function(r, o, c) {
        r = VA(r);
        var g = (o = DA(o)) ? cA(r) : 0;
        return o && g < o ? r + Lt(o - g, c) : r;
      }, m.padStart = function(r, o, c) {
        r = VA(r);
        var g = (o = DA(o)) ? cA(r) : 0;
        return o && g < o ? Lt(o - g, c) + r : r;
      }, m.parseInt = function(r, o, c) {
        return o = c || o == null ? 0 : o && +o, ju(VA(r).replace(Ta, ""), o || 0);
      }, m.random = function(r, o, c) {
        var g;
        return c && typeof c != "boolean" && We(r, o, c) && (o = c = e), c === e && (typeof o == "boolean" ? (c = o, o = e) : typeof r == "boolean" && (c = r, r = e)), r === e && o === e ? (r = 0, o = 1) : (r = _t(r), o === e ? (o = r, r = 0) : o = _t(o)), o < r && (g = r, r = o, o = g), c || r % 1 || o % 1 ? (g = qu(), we(r + g * (o - r + Va("1e-" + ((g + "").length - 1))), o)) : od(r, o);
      }, m.reduce = function(r, o, c) {
        var g = FA(r) ? ni : Xa, C = arguments.length < 3;
        return g(r, wA(o, 4), c, C, Re);
      }, m.reduceRight = function(r, o, c) {
        var g = FA(r) ? qs : Xa, C = arguments.length < 3;
        return g(r, wA(o, 4), c, C, Qi);
      }, m.repeat = function(r, o, c) {
        return o = (c ? We(r, o, c) : o === e) ? 1 : DA(o), ct(VA(r), o);
      }, m.replace = function() {
        var r = arguments, o = VA(r[0]);
        return r.length < 3 ? o : o.replace(r[1], r[2]);
      }, m.result = function(r, o, c) {
        var g = -1, C = (o = Nn(o, r)).length;
        for (C || (C = 1, r = e); ++g < C; ) {
          var U = r == null ? e : r[qt(o[g])];
          U === e && (g = C, U = c), r = zt(U) ? U.call(r) : U;
        }
        return r;
      }, m.round = I, m.runInContext = G, m.sample = function(r) {
        return (FA(r) ? fn : Di)(r);
      }, m.size = function(r) {
        var o;
        return r == null ? 0 : LA(r) ? vo(r) ? cA(r) : r.length : (o = Xe(r)) == $ || o == re ? r.size : Ui(r).length;
      }, m.snakeCase = pf, m.some = function(r, o, c) {
        return (FA(r) ? Vu : dc)(r, wA(o = c && We(r, o, c) ? e : o, 3));
      }, m.sortedIndex = function(r, o) {
        return br(r, o);
      }, m.sortedIndexBy = function(r, o, c) {
        return Hi(r, o, wA(c, 2));
      }, m.sortedIndexOf = function(r, o) {
        var c = r == null ? 0 : r.length;
        if (c) {
          var g = br(r, o);
          if (g < c && Oe(r[g], o))
            return g;
        }
        return -1;
      }, m.sortedLastIndex = function(r, o) {
        return br(r, o, !0);
      }, m.sortedLastIndexBy = function(r, o, c) {
        return Hi(r, o, wA(c, 2), !0);
      }, m.sortedLastIndexOf = function(r, o) {
        if (r != null && r.length) {
          var c = br(r, o, !0) - 1;
          if (Oe(r[c], o))
            return c;
        }
        return -1;
      }, m.startCase = mf, m.startsWith = function(r, o, c) {
        return r = VA(r), c = c == null ? 0 : wn(DA(c), 0, r.length), o = $e(o), r.slice(c, c + o.length) == o;
      }, m.subtract = L, m.sum = function(r) {
        return r && r.length ? Wa(r, gt) : 0;
      }, m.sumBy = function(r, o) {
        return r && r.length ? Wa(r, wA(o, 2)) : 0;
      }, m.template = function(r, o, T) {
        var g, C, b = m.templateSettings;
        T && We(r, o, T) && (o = e), r = VA(r), o = qi({}, o, b, Qo);
        var U = me(T = qi({}, o.imports, b.imports, Qo)), D = Ru(T, U), y = 0, b = o.interpolate || Cr, x = "__p += '", T = Pu((o.escape || Cr).source + "|" + b.source + "|" + (b === qo ? Yl : Cr).source + "|" + (o.evaluate || Cr).source + "|$", "g"), O = "//# sourceURL=" + (PA.call(o, "sourceURL") ? (o.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ve + "]") + `
`;
        if (r.replace(T, function(R, W, Z, uA, q, sA) {
          return Z = Z || uA, x += r.slice(y, sA).replace(Ps, Ac), W && (g = !0, x += `' +
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
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (C ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + x + `return __p
}`, (T = Sc(function() {
          return hA(U, O + "return " + x).apply(e, D);
        })).source = x, Tr(T))
          throw T;
        return T;
      }, m.times = function(r, o) {
        if ((r = DA(r)) < 1 || K < r)
          return [];
        for (var c = S, g = we(r, S), g = (o = wA(o), r -= S, Ya(g, o)); ++c < r; )
          o(c);
        return g;
      }, m.toFinite = _t, m.toInteger = DA, m.toLength = Ec, m.toLower = function(r) {
        return VA(r).toLowerCase();
      }, m.toNumber = St, m.toSafeInteger = function(r) {
        return r ? wn(DA(r), -K, K) : r === 0 ? r : 0;
      }, m.toString = VA, m.toUpper = function(r) {
        return VA(r).toUpperCase();
      }, m.trim = function(r, o, c) {
        return (r = VA(r)) && (c || o === e) ? $s(r) : r && (o = $e(o)) ? Qe(c = fA(r), Mn(c, o = fA(o)), Nu(c, o) + 1).join("") : r;
      }, m.trimEnd = function(r, o, c) {
        return (r = VA(r)) && (c || o === e) ? r.slice(0, HA(r) + 1) : r && (o = $e(o)) ? Qe(c = fA(r), 0, Nu(c, fA(o)) + 1).join("") : r;
      }, m.trimStart = function(r, o, c) {
        return (r = VA(r)) && (c || o === e) ? r.replace(Ta, "") : r && (o = $e(o)) ? Qe(c = fA(r), Mn(c, fA(o))).join("") : r;
      }, m.truncate = function(r, C) {
        var c, D = 30, g = "...", C = (SA(C) && (c = "separator" in C ? C.separator : c, D = "length" in C ? DA(C.length) : D, g = "omission" in C ? $e(C.omission) : g), (r = VA(r)).length);
        if ((C = zr(r) ? (U = fA(r)).length : C) <= D)
          return r;
        if ((C = D - cA(g)) < 1)
          return g;
        var U, D = U ? Qe(U, 0, C).join("") : r.slice(0, C);
        if (c !== e)
          if (U && (C += D.length - C), $t(c)) {
            if (r.slice(C).search(c)) {
              var y, b = D;
              for ((c = c.global ? c : Pu(c.source, VA(Gs.exec(c)) + "g")).lastIndex = 0; y = c.exec(b); )
                var x = y.index;
              D = D.slice(0, x === e ? C : x);
            }
          } else
            r.indexOf($e(c), C) != C && -1 < (U = D.lastIndexOf(c)) && (D = D.slice(0, U));
        return D + g;
      }, m.unescape = function(r) {
        return (r = VA(r)) && Sl.test(r) ? r.replace(xa, yA) : r;
      }, m.uniqueId = function(r) {
        var o = ++ii;
        return VA(r) + o;
      }, m.upperCase = ft, m.upperFirst = Ko, m.each = Ho, m.eachRight = Hd, m.first = Pi, xo(m, (F = {}, hn(m, function(r, o) {
        PA.call(m.prototype, o) || (F[o] = r);
      }), F), { chain: !1 }), m.VERSION = "4.17.21", at(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
        m[r].placeholder = m;
      }), at(["drop", "take"], function(r, o) {
        _A.prototype[r] = function(c) {
          c = c === e ? 1 : se(DA(c), 0);
          var g = this.__filtered__ && !o ? new _A(this) : this.clone();
          return g.__filtered__ ? g.__takeCount__ = we(c, g.__takeCount__) : g.__views__.push({ size: we(c, S), type: r + (g.__dir__ < 0 ? "Right" : "") }), g;
        }, _A.prototype[r + "Right"] = function(c) {
          return this.reverse()[r](c).reverse();
        };
      }), at(["filter", "map", "takeWhile"], function(r, o) {
        var c = o + 1, g = c == 1 || c == 3;
        _A.prototype[r] = function(C) {
          var U = this.clone();
          return U.__iteratees__.push({ iteratee: wA(C, 3), type: c }), U.__filtered__ = U.__filtered__ || g, U;
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
        return this.filter(mn(wA(r)));
      }, _A.prototype.slice = function(r, o) {
        r = DA(r);
        var c = this;
        return c.__filtered__ && (0 < r || o < 0) ? new _A(c) : (r < 0 ? c = c.takeRight(-r) : r && (c = c.drop(r)), o !== e ? (o = DA(o)) < 0 ? c.dropRight(-o) : c.take(o - r) : c);
      }, _A.prototype.takeRightWhile = function(r) {
        return this.reverse().takeWhile(r).reverse();
      }, _A.prototype.toArray = function() {
        return this.take(S);
      }, hn(_A.prototype, function(r, o) {
        var c = /^(?:filter|find|map|reject)|While$/.test(o), g = /^(?:head|last)$/.test(o), C = m[g ? "take" + (o == "last" ? "Right" : "") : o], U = g || /^find/.test(o);
        C && (m.prototype[o] = function() {
          function D(uA) {
            return uA = C.apply(m, er([uA], x)), g && O ? uA[0] : uA;
          }
          var y, b = this.__wrapped__, x = g ? [1] : arguments, Z = b instanceof _A, R = x[0], T = Z || FA(b), O = (T && c && typeof R == "function" && R.length != 1 && (Z = T = !1), this.__chain__), R = !!this.__actions__.length, W = U && !O, Z = Z && !R;
          return !U && T ? (b = Z ? b : new _A(this), (y = r.apply(b, x)).__actions__.push({ func: Xi, args: [D], thisArg: e }), new Kt(y, O)) : W && Z ? r.apply(this, x) : (y = this.thru(D), W ? g ? y.value()[0] : y.value() : y);
        });
      }), at(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
        var o = oi[r], c = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru", g = /^(?:pop|shift)$/.test(r);
        m.prototype[r] = function() {
          var C, U = arguments;
          return g && !this.__chain__ ? (C = this.value(), o.apply(FA(C) ? C : [], U)) : this[c](function(D) {
            return o.apply(FA(D) ? D : [], U);
          });
        };
      }), hn(_A.prototype, function(r, o) {
        var c, g = m[o];
        g && (c = g.name + "", PA.call(E, c) || (E[c] = []), E[c].push({ name: o, func: g }));
      }), E[wo(e, 2).name] = [{ name: "wrapper", func: e }], _A.prototype.clone = function() {
        var r = new _A(this.__wrapped__);
        return r.__actions__ = Te(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = Te(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = Te(this.__views__), r;
      }, _A.prototype.reverse = function() {
        var r;
        return this.__filtered__ ? ((r = new _A(this)).__dir__ = -1, r.__filtered__ = !0) : (r = this.clone()).__dir__ *= -1, r;
      }, _A.prototype.value = function() {
        var r = this.__wrapped__.value(), o = this.__dir__, c = FA(r), g = o < 0, C = c ? r.length : 0, U = function(AA, aA, gA) {
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
        }(0, C, this.__views__), D = U.start, y = (U = U.end) - D, b = g ? U : D - 1, x = this.__iteratees__, T = x.length, O = 0, R = we(y, this.__takeCount__);
        if (!c || !g && C == y && R == y)
          return sd(r, this.__actions__);
        var W = [];
        A:
          for (; y-- && O < R; ) {
            for (var Z = -1, uA = r[b += o]; ++Z < T; ) {
              var q = x[Z], sA = q.iteratee, q = q.type, sA = sA(uA);
              if (q == 2)
                uA = sA;
              else if (!sA) {
                if (q == 1)
                  continue A;
                break A;
              }
            }
            W[O++] = uA;
          }
        return W;
      }, m.prototype.at = df, m.prototype.chain = function() {
        return hc(this);
      }, m.prototype.commit = function() {
        return new Kt(this.value(), this.__chain__);
      }, m.prototype.next = function() {
        this.__values__ === e && (this.__values__ = xd(this.value()));
        var r = this.__index__ >= this.__values__.length;
        return { done: r, value: r ? e : this.__values__[this.__index__++] };
      }, m.prototype.plant = function(r) {
        for (var o, C = this; C instanceof eo; )
          var c = Ni(C), g = (c.__index__ = 0, c.__values__ = e, o ? g.__wrapped__ = c : o = c, c), C = C.__wrapped__;
        return g.__wrapped__ = r, o;
      }, m.prototype.reverse = function() {
        var r = this.__wrapped__;
        return r instanceof _A ? (r = r, (r = (r = this.__actions__.length ? new _A(this) : r).reverse()).__actions__.push({ func: Xi, args: [Dd], thisArg: e }), new Kt(r, this.__chain__)) : this.thru(Dd);
      }, m.prototype.toJSON = m.prototype.valueOf = m.prototype.value = function() {
        return sd(this.__wrapped__, this.__actions__);
      }, m.prototype.first = m.prototype.head, eu && (m.prototype[eu] = function() {
        return this;
      }), m;
    }();
    zn ? ((zn.exports = an)._ = an, qn._ = an) : Ke._ = an;
  }).call(Nd);
}(Vc, Vc.exports), Vc.exports);
const yF = [{ name: "积分", icon: "int", formula: "\\int", exampleList: [{ content: "\\int用来表示积分符号，同样地，其上下标表示积分的上下限", isLatex: !1 }, { content: "\\int_{1}^{\\infty}", isLatex: !0 }] }, { name: "多重积分", icon: "iint", formula: "\\iint" }, { name: "多重积分", icon: "iiint", formula: "\\iiint" }, { name: "多重积分", icon: "iiiint", formula: "\\iiiint" }], bF = [{ name: "联立方程", icon: "multipleLine", formula: `f(n)
\\left\\{
\\frac{n}{2}, &if n is even\\\\
3n + 1, &if n is odd
\\right\\}` }, { name: "联立方程", icon: "multipleLine", formula: `\\left\\{
    a_{1}x+b_{1}y+c_{1}z=d_{1} \\\\
    a_{2}x+b_{2}y+c_{2}z=d_{2} \\\\
    a_{3}x+b_{3}y+c_{3}z=d_{3}
    \\right\\}
    ` }], IF = [{ name: "矩阵", icon: "bmatrix", formula: `\\begin{bmatrix}
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
\\end{Vmatrix}` }, { name: "模运算", icon: "pmod", formula: "\\pmod{n}" }, { name: "排列", icon: "binom", formula: "\\binom{n+1}{2k}" }], vF = [{ name: "化学方程式", icon: "rightarrow", formula: "2H_{2}+O_{2}\\rightarrow\\limits^{燃烧}2H_{2}O" }, { name: "化学方程式", icon: "rightleftarrow", formula: "N_{2}+3H_{2}\\rightleftarrow\\limits^{高温、高压}_{催化剂}2NH_{3}" }, { name: "化学方程式", icon: "equalsign", formula: "2NaHCO_{3}=\\limits^{\\Delta}Na_{2}CO_{3}" }], KF = [{ name: "带分数", icon: "", formula: "\\mix, (这个符号实际不会出现不需要展示)" }, { name: "删除", icon: "", formula: "\\deletion{xx}, (直接删除)" }, { name: "大省略符号", icon: "omitted", formula: "\\omitted" }, { name: "空格", icon: "tab", formula: "A\\tabB" }, { name: "对号", icon: "cmark", formula: "\\cmark" }, { name: "错号", icon: "xmark", formula: "\\xmark" }, { name: "插入", icon: "", formula: "\\insert{+3},( 直接删除，需要连带后面的一个{}删除)" }, { name: "颠倒符号", icon: "reverse", formula: "\\reverse{好}{你}" }, { name: "替换", icon: "replace", formula: "\\replace{ab}" }, { name: "错误的中文汉字", icon: "", formula: "\\wrong{我}, 待定" }, { name: "米字格", icon: "", formula: "\\chnfield{ab}， (直接删除，需要连带后面的一个{}删除。)" }, { name: "英语格", icon: "", formula: "\\engfield{ab}， (直接删除，需要连带后面的一个{}删除。)" }, { name: "<s>", icon: "", formula: "直接删除" }, { name: "</s>", icon: "", formula: "直接删除" }, { name: "<unk>", icon: "", formula: "直接删除" }], LF = [{ name: "基本规则", icon: "phonetic", formula: "\\[\\phonetic{}\\]" }, { name: "长元音", icon: "po_1", formula: "ɑː" }, { name: "长元音", icon: "po_2", formula: "ɔ:" }, { name: "长元音", icon: "po_3", formula: "ɜː" }, { name: "长元音", icon: "po_4", formula: "i:" }, { name: "长元音", icon: "po_5", formula: "u:" }, { name: "短元音", icon: "po_6", formula: "^" }, { name: "短元音", icon: "po_7", formula: "ɒ" }, { name: "短元音", icon: "po_8", formula: "ə" }, { name: "短元音", icon: "po_9", formula: "ɪ" }, { name: "短元音", icon: "po_10", formula: "ʊ" }, { name: "短元音", icon: "po_11", formula: "e" }, { name: "短元音", icon: "po_12", formula: "æ" }, { name: "双元音", icon: "po_13", formula: "eɪ" }, { name: "双元音", icon: "po_14", formula: "aɪ" }, { name: "双元音", icon: "po_15", formula: "ɔɪ" }, { name: "双元音", icon: "po_16", formula: "ɪə" }, { name: "双元音", icon: "po_17", formula: "eə" }, { name: "双元音", icon: "po_18", formula: "ʊə" }, { name: "双元音", icon: "po_19", formula: "əʊ" }, { name: "双元音", icon: "po_20", formula: "aʊ" }, { name: "清辅音", icon: "po_21", formula: "p" }, { name: "清辅音", icon: "po_22", formula: "t" }, { name: "清辅音", icon: "po_23", formula: "k" }, { name: "清辅音", icon: "po_24", formula: "f" }, { name: "清辅音", icon: "po_25", formula: "θ" }, { name: "清辅音", icon: "po_26", formula: "s" }, { name: "清辅音", icon: "po_27", formula: "b" }, { name: "清辅音", icon: "po_28", formula: "d" }, { name: "清辅音", icon: "po_29", formula: "g" }, { name: "清辅音", icon: "po_30", formula: "v" }, { name: "清辅音", icon: "po_31", formula: "ð" }, { name: "清辅音", icon: "po_32", formula: "z" }, { name: "清辅音", icon: "po_33", formula: "ʃ" }, { name: "清辅音", icon: "po_34", formula: "h" }, { name: "清辅音", icon: "po_35", formula: "ts" }, { name: "清辅音", icon: "po_36", formula: "tʃ" }, { name: "清辅音", icon: "po_37", formula: "j" }, { name: "清辅音", icon: "po_38", formula: "tr" }, { name: "浊辅音", icon: "po_39", formula: "ʒ" }, { name: "浊辅音", icon: "po_40", formula: "r" }, { name: "浊辅音", icon: "po_41", formula: "dz" }, { name: "浊辅音", icon: "po_42", formula: "dʒ" }, { name: "浊辅音", icon: "po_43", formula: "dr" }, { name: "半元音", icon: "po_44", formula: "w" }, { name: "鼻音", icon: "po_45", formula: "m" }, { name: "鼻音", icon: "po_46", formula: "n" }, { name: "鼻音", icon: "po_47", formula: "ŋ" }, { name: "边音", icon: "po_48", formula: "l" }], E0 = "https://homework-webfront.oss-cn-beijing.aliyuncs.com/LatexIcon/", f0 = [{ id: ee.uniqueId(), name: "直接使用", icon: "", data: CF.map((t) => ({ icon: "base", name: t, formula: t })), isBase: !0 }, { id: ee.uniqueId(), name: "需要转义", icon: "", data: FF.map((t) => ({ icon: "base", name: t, formula: t })), isBase: !0, desc: `escape字符表示原义时，前面加 \\，代表的是这个符号本身
  由于以下字符在LaTeX中有特殊含义，例如：\\frac{1}{2} 中的大括号。
  为了防止混淆，在以下字符表示自身含义时，需要在其前加 \\` }, { id: ee.uniqueId(), name: "希腊字母", icon: "", data: hF }, { id: ee.uniqueId(), name: "运算符号", icon: "", data: lF }, { id: ee.uniqueId(), name: "比较符号", icon: "", data: fF, desc: "大于号及小于号直接使用 >, <" }, { id: ee.uniqueId(), name: "几何符号", icon: "", data: cF }, { id: ee.uniqueId(), name: "点", icon: "", data: UF }, { id: ee.uniqueId(), name: "逻辑符号", icon: "", data: sF }, { id: ee.uniqueId(), name: "集合符号", icon: "", data: pF }, { id: ee.uniqueId(), name: "范围", icon: "", data: mF }, { id: ee.uniqueId(), name: "三角函数", icon: "", data: aF }, { id: ee.uniqueId(), name: "箭头", icon: "", data: EF }, { id: ee.uniqueId(), name: "含圈符号", icon: "", data: gF }, { id: ee.uniqueId(), name: "形状符号", icon: "", data: wF }, { id: ee.uniqueId(), name: "标记", icon: "", data: DF }, { id: ee.uniqueId(), name: "顶部符号", icon: "", data: BF }, { id: ee.uniqueId(), name: "序号", icon: "", data: HF }, { id: ee.uniqueId(), name: "分式", icon: "", data: QF }, { id: ee.uniqueId(), name: "根式", icon: "", data: iF }, { id: ee.uniqueId(), name: "积分", icon: "", data: yF }, { id: ee.uniqueId(), name: "多行表达式", icon: "", data: bF, desc: "定义函数的时候经常需要分情况给出表达式，可使用\\left{…\\right}。其中，使用\\来分类，使用&指示需要对齐的位置。" }, { id: ee.uniqueId(), name: "矩阵", icon: "", data: IF, desc: "使用\\begin{matrix}…\\end{matrix}这样的形式来表示矩阵，在\\begin与\\end之间加入矩阵中的元素即可。矩阵的行之间使用\\分隔，列之间使用&分隔。如果要对矩阵加括号，可以像上文中提到的一样，使用\\left与\\right配合表示括号符号。也可以使用特殊的matrix。即替换\\begin{matrix}…\\end{matrix}中的matrix为pmatrix，bmatrix，Bmatrix，vmatrix, Vmatrix。" }, { id: ee.uniqueId(), name: "化学", icon: "", data: vF, desc: "基本格式如下\\rightarrow\\limits^{}_{}, \\rightarrow可替换为\\rightleftarrow, \\leftarrow, =, ^{}和_{}可选，分别表示箭头上方和下方的内容" }, { id: ee.uniqueId(), name: "自定义", icon: "", data: KF }, { id: ee.uniqueId(), name: "音标", icon: "", data: LF }, { id: ee.uniqueId(), name: "其他", icon: "", data: dF }];
let gu = f0.filter((t) => !t.isBase).map((t) => (t.data = t.data.map((A) => {
  if (A.icon)
    return A;
}).filter((A) => A), t));
class xF {
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
          var f;
          return l.formula == ((f = i.target) == null ? void 0 : f.getAttribute("sign"));
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
function _F(t, l, e) {
  var n, i = [], d = [], s = l instanceof RegExp ? l.source : D0(l), l = e instanceof RegExp ? e.source : D0(e);
  if (s === l)
    throw new Error("Begin and end delimiter cannot be identical");
  for (var f, h = new RegExp((s + l).length === 2 ? "[" + s + l + "]" : s + "|" + l, "g"); (f = h.exec(t)) !== null; )
    -1 < f[0].search(s) ? d.push({ parent: ((n = d[d.length - 1]) == null ? void 0 : n.children) || i, start: f.index, bodyStart: h.lastIndex, children: [] }) : d.length && (w = d.pop()).parent.push({ start: w.start, end: h.lastIndex, bodyStart: w.bodyStart, bodyEnd: f.index, match: t.slice(w.start, h.lastIndex), children: w.children });
  for (var w, p = 0, K = d; p < K.length; p++)
    (w = K[p]).children.length && i.push.apply(i, w.children);
  return i;
}
function D0(t) {
  return t.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
}
zQ = bg.recursiveMatch = _F;
const YB = [`
`, "^", "_"], SF = ["begin", "end", "left", "right", "limits"];
function TF() {
  return ee.uniq(ee.flattenDeep(f0.map((t) => t.data.map((A) => A.icon))));
}
const OF = TF().concat(YB).concat(SF);
let MF = OF;
var Ig = ((t) => (t.latex = "latex", t.text = "text", t))(Ig || {});
function No(t, A = 0) {
  const e = [];
  let n = A;
  var i;
  return t.includes("\\") ? (i = MF.map((d) => {
    if (d = Array.from(t.matchAll(new RegExp(`\\\\${d}(?![a-zA-Z])`, "g"))), d.length)
      return d;
  }).filter((d) => d)).length ? i.forEach((d) => {
    d.forEach((s, l) => {
      var f = s[0], h = (s.index !== n && n - A !== s.index && (w = t.slice(n - A, s.index), h = n, e.push({ start: h, end: h + w.length, match: w, bodyStart: h, bodyEnd: h + w.length, children: [], type: "text" })), s.index + A), w = h + f.length;
      e.push({ start: h, end: w, match: f, bodyStart: h, bodyEnd: w, children: [], type: "latex" }), n = w;
      let p = t.slice(n - A);
      p.length && !p.includes("\\") && (e.push({ start: w, end: w + p.length, match: p, bodyStart: w, bodyEnd: w + p.length, children: [], type: YB.some((K) => p.includes(K)) ? "latex" : "text" }), n = w + p.length);
    });
  }) : e.push({ start: n, end: n + t.length, match: t, bodyStart: n, bodyEnd: n + t.length, children: [], type: YB.some((d) => t.includes(d)) ? "latex" : "text" }) : e.push({ start: n, end: n + t.length, match: t, bodyStart: n, bodyEnd: n + t.length, children: [], type: YB.some((d) => t.includes(d)) ? "latex" : "text" }), e;
}
function $Q(t, A, e) {
  let n = A.bodyStart, i = [];
  return t.forEach((d, s) => {
    var l;
    (l = d.children) != null && l.length && (d.children = $Q(d.children, { bodyStart: d.bodyStart, bodyEnd: d.bodyEnd }, e)), s === 0 && (i = i.concat(No(e.slice(n, d.start), n))), d.type = "latex", i.push(d), n = d.end, t[s + 1] && d.end !== t[s + 1].start && (i = i.concat(No(e.slice(d.end, t[s + 1].start), n))), s === t.length - 1 && (i = i.concat(No(e.slice(d.end, A.bodyEnd), n)));
  }), i;
}
function Ah(t) {
  const A = zQ(t, "{", "}");
  let e = [];
  if (A.length) {
    let i = 0;
    A.forEach((d, s) => {
      var l = t.slice(i, d.start);
      l && (l = No(l, i), e = e.concat(l)), d.children.length ? d.children = $Q(d.children, { bodyStart: d.bodyStart, bodyEnd: d.bodyEnd }, t) : d.children = No(t.slice(d.bodyStart, d.bodyEnd), d.bodyStart), d.type = "latex", e.push(d), i = d.end, s === A.length - 1 && (l = t.slice(i)) && (d = No(l, i), e = e.concat(d));
    });
  } else {
    var n = No(t);
    e = e.concat(n);
  }
  return e;
}
function kF(n, A) {
  var n = GF(n), i = n.tag, e = n.id, n = n.className, i = A ? document.createElementNS(A, i) : document.createElement(i);
  return e && (i.id = e), n && (A ? i.setAttribute("class", n) : i.className = n), i;
}
function GF(t) {
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
function VF(t, A, e) {
  var n = A.__redom_lifecycle;
  if (H0(n))
    A.__redom_lifecycle = {};
  else {
    var i = e;
    for (A.__redom_mounted && ys(A, "onunmount"); i; ) {
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
var RF = ["onmount", "onremount", "onunmount"], NF = typeof window < "u" && "ShadowRoot" in window;
function Wo(i, A, e, n) {
  var i = Nr(i), d = Nr(A), s = ((A = A === d && d.__redom_view ? d.__redom_view : A) !== d && (d.__redom_view = A), d.__redom_mounted), l = d.parentNode;
  return s && l !== i && VF(A, d, l), e != null ? n ? ((s = Nr(e)).__redom_mounted && ys(s, "onunmount"), i.replaceChild(d, s)) : i.insertBefore(d, Nr(e)) : i.appendChild(d), PF(A, d, i, l), A;
}
function ys(t, A) {
  A === "onmount" || A === "onremount" ? t.__redom_mounted = !0 : A === "onunmount" && (t.__redom_mounted = !1);
  var e = t.__redom_lifecycle;
  if (e) {
    var n, i = t.__redom_view, d = 0;
    for (n in i && i[A] && i[A](), e)
      n && d++;
    if (d)
      for (var s = t.firstChild; s; ) {
        var l = s.nextSibling;
        ys(s, A), s = l;
      }
  }
}
function PF(t, A, e, n) {
  for (var i = A.__redom_lifecycle || (A.__redom_lifecycle = {}), d = e === n, s = !1, l = 0, f = RF; l < f.length; l += 1) {
    var h = f[l];
    d || t !== A && h in t && (i[h] = (i[h] || 0) + 1), i[h] && (s = !0);
  }
  if (s) {
    var w = e, p = !1;
    for ((d || w && w.__redom_mounted) && (ys(A, d ? "onremount" : "onmount"), p = !0); w; ) {
      var K, _ = w.parentNode, S = w.__redom_lifecycle || (w.__redom_lifecycle = {});
      for (K in i)
        S[K] = (S[K] || 0) + i[K];
      if (p)
        break;
      (w.nodeType === Node.DOCUMENT_NODE || NF && w instanceof ShadowRoot || _ && _.__redom_mounted) && (ys(w, d ? "onremount" : "onmount"), p = !0), w = _;
    }
  } else
    A.__redom_lifecycle = {};
}
function JF(t, A, e) {
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
    A === "style" && typeof e == "object" ? JF(i, e) : t && s ? i[A] = e : A === "dataset" ? nh(i, e) : !t && (A in i || s) && A !== "list" ? i[A] = e : t && A === "xlink" ? th(i, e) : (e = n && A === "class" ? i.className + " " + e : e) == null ? i.removeAttribute(A) : i.setAttribute(A, e);
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
function ZB(t) {
  return document.createTextNode(t ?? "");
}
function rh(t, A, e) {
  for (var n = 0, i = A; n < i.length; n += 1) {
    var d, s = i[n];
    s !== 0 && !s || ((d = typeof s) == "function" ? s(t) : d == "string" || d == "number" ? t.appendChild(ZB(s)) : XF(Nr(s)) ? Wo(t, s) : s.length ? rh(t, s, e) : d == "object" && eh(t, s, null, e));
  }
}
function Nr(t) {
  return t.nodeType && t || !t.el && t || Nr(t.el);
}
function XF(t) {
  return t && t.nodeType;
}
function ws(t) {
  for (var A = [], e = arguments.length - 1; 0 < e--; )
    A[e] = arguments[e + 1];
  var n = typeof t;
  if (n == "string")
    i = kF(t);
  else {
    if (n != "function")
      throw new Error("At least one argument required");
    var i = new (Function.prototype.bind.apply(t, [null].concat(A)))();
  }
  return rh(Nr(i), A, !0), i;
}
var un = ws;
function uh(t, A, e) {
  var n = t.match;
  return t.type === Ig.latex ? t.children.length ? [un("span.bk.start", I0(A == null ? void 0 : A.match, "start")), ...t.children.map((i, d) => uh(i, t.children[d - 1], t.children[d + 1])), un("span.bk end", I0(A == null ? void 0 : A.match, "end"))] : n.at(0) === "{" && n.at(-1) === "}" ? [un("span.bk start", "{"), ZB(n.slice(1, n.length - 1)), un("span.bk end", "}")] : [un("span." + (t.type === Ig.latex ? "lx" : "lt"), ZB(t.match))] : ZB(n);
}
function I0(t, A) {
  return t === "\\left" ? A === "start" ? "\\{" : "\\}" : A === "start" ? "{" : "}";
}
function oh(t) {
  return ws("span.latex-root", t.map((A, e) => uh(A, t[e - 1], t[e + 1])));
}
function pu(t, A) {
  var e = new Range();
  e.setStart(A.startNode, A.start), e.setEnd(A.endNode, A.end), t == null || t.removeAllRanges(), t == null || t.addRange(e);
}
function ih(t) {
  let A, e;
  var n;
  if (window.getSelection) {
    if ((A = window.getSelection()).focusNode || (n = document.querySelector(".latex-editor-content"), pu(A, { startNode: n, endNode: n, start: n == null ? void 0 : n.childNodes.length, end: n == null ? void 0 : n.childNodes.length })), (A = window.getSelection()).getRangeAt && A.rangeCount) {
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
async function WF(t, A) {
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
function YF() {
  var e;
  var t = window.getSelection();
  if (t && (t != null && t.isCollapsed)) {
    let n = null;
    var A = (n = ((e = t.anchorNode) == null ? void 0 : e.nodeType) === 3 ? t.anchorNode : ml(t.anchorNode)).parentNode;
    if (n.nodeType === 3 && A.nodeType === 1) {
      if (A.className.includes("lx"))
        return pu(t, { startNode: A, endNode: A, start: 0, end: 1 }), !0;
      if (A.className.includes("bk"))
        return pu(t, { startNode: ah(A), endNode: A, start: 0, end: 1 }), !0;
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
function ZF(t) {
  var h, w;
  var A, e, n, i, d = window.getSelection(), s = ml(d.focusNode), l = s.parentNode, f = l.children;
  3 <= f.length && f[0].className.includes("lx") && f[1].className.includes("bk start") && f[f.length - 1].className.includes("bk end") || (f = (t == null ? void 0 : t.oldValue) || "", A = t.target.nodeValue || "", s.nodeType === 3 && l.className.includes("bk") && A.length > (f == null ? void 0 : f.length) ? (n = A.slice(A.indexOf(f) + f.length), i = (h = t.target.parentElement) == null ? void 0 : h.nextSibling, l.className.includes("end") ? i && (i == null ? void 0 : i.nodeType) === 1 && (i == null ? void 0 : i.nodeName) === "TEXT" ? (t.target.nodeValue = f, i.innerText = n + (i == null ? void 0 : i.innerText) || "", pu(d, { startNode: i.childNodes[0], endNode: i.childNodes[0], start: 1, end: 1 })) : (l.innerHTML = f, e = un("text", n), (w = l.parentNode) == null || w.appendChild(e), pu(d, { startNode: e, endNode: e, start: n.length, end: n.length })) : (t.target.nodeValue = f, i.nodeValue = n + (i == null ? void 0 : i.nodeValue) || "", pu(d, { startNode: i, endNode: i, start: 1, end: 1 }))) : s.nodeType === 3 && (l.className.includes("lx") || l.className.includes("latex-root")) && A.length > (f == null ? void 0 : f.length) && (e = A.slice(A.indexOf(f) + f.length), (n = t.target.nextSibling) && (n == null ? void 0 : n.nodeType) === 1 && (n == null ? void 0 : n.nodeName) === "TEXT" ? (t.target.nodeValue = f, n.innerText = e + (n == null ? void 0 : n.innerText) || "", pu(d, { startNode: n.childNodes[0], endNode: n.childNodes[0], start: 1, end: 1 })) : (l.innerHTML = f, Wo(l, i = un("text", e)), pu(d, { startNode: i, endNode: i, start: e.length, end: e.length }))));
}
function ah(t) {
  var e;
  var A = t == null ? void 0 : t.previousSibling;
  return A ? (e = A == null ? void 0 : A.className) != null && e.includes("lx") ? t.previousSibling : ah(A) : t;
}
function jF() {
  var t, A, e = window.getSelection();
  return e.rangeCount === 0 ? null : ({ top: e, left: t, height: A } = e.getRangeAt(0).getBoundingClientRect(), { left: t, top: e + A });
}
ws.extend = function() {
  for (var t = [], A = arguments.length; A--; )
    t[A] = arguments[A];
  return ws.bind.apply(ws, [this].concat(t));
};
const qF = 65280, zF = 255, $F = /\+{2,}/gi, AU = /\s+/gi, eU = /^\s*?(?:(?:^-?|\s|\+)(?:alt|option|cmd|command|meta|ctrl|control|shift|cmdorctrl|commandorcontrol|backspace|capslock|del|delete|down|end|enter|return|esc|escape|home|insert|left|pagedown|pageup|right|space|spacebar|tab|up|plus|\d|[a-z]|f(?:\d|1\d|2[0-4])|numpad\d|[!"#$%&'()*+,./:;<=>?@[\]^_`{|}~-]))+\s*$/i, mu = { HANDLED: 0, UNHANDLED: 1, UNHANDLEABLE: 2 }, rn = { isArray: (t) => Array.isArray(t), isEqual: (t, A) => {
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
} }, sr = { alt: 256, option: 256, cmd: 512, command: 512, meta: 512, ctrl: 1024, control: 1024, shift: 2048, cmdorctrl: rn.isMac() ? 512 : 1024, commandorcontrol: rn.isMac() ? 512 : 1024, backspace: 1, capslock: 2, del: 3, delete: 3, down: 4, end: 5, enter: 6, return: 6, esc: 7, escape: 7, home: 8, insert: 9, left: 10, pagedown: 11, pageup: 12, right: 13, space: 14, spacebar: 14, tab: 15, up: 16, 0: 17, 1: 18, 2: 19, 3: 20, 4: 21, 5: 22, 6: 23, 7: 24, 8: 25, 9: 26, a: 27, b: 28, c: 29, d: 30, e: 31, f: 32, g: 33, h: 34, i: 35, j: 36, k: 37, l: 38, m: 39, n: 40, o: 41, p: 42, q: 43, r: 44, s: 45, t: 46, u: 47, v: 48, w: 49, x: 50, y: 51, z: 52, "!": 53, '"': 54, "#": 55, $: 56, "%": 57, "&": 58, "'": 59, "(": 60, ")": 61, "*": 62, "+": 63, plus: 63, ",": 64, "-": 65, ".": 66, "/": 67, ":": 68, ";": 69, "<": 70, "=": 71, ">": 72, "?": 73, "@": 74, "[": 75, "\\": 76, "]": 77, "^": 78, _: 79, "`": 80, "{": 81, "|": 82, "}": 83, "~": 84, f1: 85, f2: 86, f3: 87, f4: 88, f5: 89, f6: 90, f7: 91, f8: 92, f9: 93, f10: 94, f11: 95, f12: 96, f13: 97, f14: 98, f15: 99, f16: 100, f17: 101, f18: 102, f19: 103, f20: 104, f21: 105, f22: 106, f23: 107, f24: 108, numpad0: 109, numpad1: 110, numpad2: 111, numpad3: 112, numpad4: 113, numpad5: 114, numpad6: 115, numpad7: 116, numpad8: 117, numpad9: 118 }, tU = { 18: 256, 91: 512, 92: 512, 93: 512, 224: 512, 17: 1024, 16: 2048, 8: 1, 20: 2, 46: 3, 40: 4, 35: 5, 13: 6, 27: 7, 36: 8, 45: 9, 37: 10, 34: 11, 33: 12, 39: 13, 32: 14, 9: 15, 38: 16, 222: 59, 188: 64, 189: 65, 190: 66, 191: 67, 186: 69, 187: 71, 219: 75, 220: 76, 221: 77, 192: 80, 112: 85, 113: 86, 114: 87, 115: 88, 116: 89, 117: 90, 118: 91, 119: 92, 120: 93, 121: 94, 122: 95, 123: 96, 124: 97, 125: 98, 126: 99, 127: 100, 128: 101, 129: 102, 130: 103, 131: 104, 132: 105, 133: 106, 134: 107, 135: 108, 96: 109, 97: 110, 98: 111, 99: 112, 100: 113, 101: 114, 102: 115, 103: 116, 104: 117, 105: 118 }, nU = { 256: "Alt", 512: "Cmd", 1024: "Ctrl", 2048: "Shift", 1: "Backspace", 2: "Capslock", 3: "Delete", 4: "Down", 5: "End", 6: "Enter", 7: "Escape", 8: "Home", 9: "Insert", 10: "Left", 11: "PageDown", 12: "PageUp", 13: "Right", 14: "Space", 15: "Tab", 16: "Up", 17: "0", 18: "1", 19: "2", 20: "3", 21: "4", 22: "5", 23: "6", 24: "7", 25: "8", 26: "9", 27: "A", 28: "B", 29: "C", 30: "D", 31: "E", 32: "F", 33: "G", 34: "H", 35: "I", 36: "J", 37: "K", 38: "L", 39: "M", 40: "N", 41: "O", 42: "P", 43: "Q", 44: "R", 45: "S", 46: "T", 47: "U", 48: "V", 49: "W", 50: "X", 51: "Y", 52: "Z", 53: "!", 54: '"', 55: "#", 56: "$", 57: "%", 58: "&", 59: "'", 60: "(", 61: ")", 62: "*", 63: "Plus", 64: ",", 65: "-", 66: ".", 67: "/", 68: ":", 69: ";", 70: "<", 71: "=", 72: ">", 73: "?", 74: "@", 75: "[", 76: "\\", 77: "]", 78: "^", 79: "_", 80: "`", 81: "{", 82: "|", 83: "}", 84: "~", 85: "F1", 86: "F2", 87: "F3", 88: "F4", 89: "F5", 90: "F6", 91: "F7", 92: "F8", 93: "F9", 94: "F10", 95: "F11", 96: "F12", 97: "F13", 98: "F14", 99: "F15", 100: "F16", 101: "F17", 102: "F18", 103: "F19", 104: "F20", 105: "F21", 106: "F22", 107: "F23", 108: "F24", 109: "Numpad0", 110: "Numpad1", 111: "Numpad2", 112: "Numpad3", 113: "Numpad4", 114: "Numpad5", 115: "Numpad6", 116: "Numpad7", 117: "Numpad8", 118: "Numpad9" }, rU = { 256: "Alt", 512: "Cmd", 1024: "Ctrl", 2048: "Shift", 1: "Backspace", 2: "Capslock", 3: "Delete", 4: "Down", 5: "End", 6: "Enter", 7: "Escape", 8: "Home", 9: "Insert", 10: "Left", 11: "PageDown", 12: "PageUp", 13: "Right", 14: "Space", 15: "Tab", 16: "Up", 17: "0", 18: "1", 19: "2", 20: "3", 21: "4", 22: "5", 23: "6", 24: "7", 25: "8", 26: "9", 27: "A", 28: "B", 29: "C", 30: "D", 31: "E", 32: "F", 33: "G", 34: "H", 35: "I", 36: "J", 37: "K", 38: "L", 39: "M", 40: "N", 41: "O", 42: "P", 43: "Q", 44: "R", 45: "S", 46: "T", 47: "U", 48: "V", 49: "W", 50: "X", 51: "Y", 52: "Z", 53: "!", 54: '"', 55: "#", 56: "$", 57: "%", 58: "&", 59: "'", 60: "(", 61: ")", 62: "*", 63: "Plus", 64: ",", 65: "-", 66: ".", 67: "/", 68: ":", 69: ";", 70: "<", 71: "=", 72: ">", 73: "?", 74: "@", 75: "[", 76: "\\", 77: "]", 78: "^", 79: "_", 80: "`", 81: "{", 82: "|", 83: "}", 84: "~", 85: "F1", 86: "F2", 87: "F3", 88: "F4", 89: "F5", 90: "F6", 91: "F7", 92: "F8", 93: "F9", 94: "F10", 95: "F11", 96: "F12", 97: "F13", 98: "F14", 99: "F15", 100: "F16", 101: "F17", 102: "F18", 103: "F19", 104: "F20", 105: "F21", 106: "F22", 107: "F23", 108: "F24", 109: "num0", 110: "num1", 111: "num2", 112: "num3", 113: "num4", 114: "num5", 115: "num6", 116: "num7", 117: "num8", 118: "num9" }, uU = { 256: "⌥", 512: "⌘", 1024: "⌃", 2048: "⇧", 1: "⌫", 2: "⇪", 3: "⌦", 4: "↓", 5: "↘", 6: "⏎", 7: "⎋", 8: "↖", 9: "⎀", 10: "←", 11: "⇟", 12: "⇞", 13: "→", 14: "␣", 15: "⇥", 16: "↑", 17: "0", 18: "1", 19: "2", 20: "3", 21: "4", 22: "5", 23: "6", 24: "7", 25: "8", 26: "9", 27: "A", 28: "B", 29: "C", 30: "D", 31: "E", 32: "F", 33: "G", 34: "H", 35: "I", 36: "J", 37: "K", 38: "L", 39: "M", 40: "N", 41: "O", 42: "P", 43: "Q", 44: "R", 45: "S", 46: "T", 47: "U", 48: "V", 49: "W", 50: "X", 51: "Y", 52: "Z", 53: "!", 54: '"', 55: "#", 56: "$", 57: "%", 58: "&", 59: "'", 60: "(", 61: ")", 62: "*", 63: "+", 64: ",", 65: "-", 66: ".", 67: "/", 68: ":", 69: ";", 70: "<", 71: "=", 72: ">", 73: "?", 74: "@", 75: "[", 76: "\\", 77: "]", 78: "^", 79: "_", 80: "`", 81: "{", 82: "|", 83: "}", 84: "~", 85: "F1", 86: "F2", 87: "F3", 88: "F4", 89: "F5", 90: "F6", 91: "F7", 92: "F8", 93: "F9", 94: "F10", 95: "F11", 96: "F12", 97: "F13", 98: "F14", 99: "F15", 100: "F16", 101: "F17", 102: "F18", 103: "F19", 104: "F20", 105: "F21", 106: "F22", 107: "F23", 108: "F24", 109: "Numpad0", 110: "Numpad1", 111: "Numpad2", 112: "Numpad3", 113: "Numpad4", 114: "Numpad5", 115: "Numpad6", 116: "Numpad7", 117: "Numpad8", 118: "Numpad9" }, zA = { getModifierKey: (t) => t & qF, hasModifierKey: (t) => !!zA.getModifierKey(t), getTriggerKey: (t) => t & zF, hasTriggerKey: (t) => !!zA.getTriggerKey(t), event2id: (t) => {
  let A = 0;
  var e, n, i, d;
  return rn.isKeyboardEvent(t) && (e = t.type === "keypress", n = t.which || t.keyCode || 0, i = String.fromCharCode(n).toLowerCase(), d = t.key, A = e ? sr[d] || sr[i] || 0 : tU[n] || sr[i] || sr[d] || 0), t.ctrlKey && (A |= sr.ctrl), t.altKey && (A |= sr.alt), t.shiftKey && (A |= sr.shift), t.metaKey && (A |= sr.cmd), A;
}, event2shortcut: (t) => zA.id2shortcut([zA.event2id(t)]), event2accelerator: (t) => zA.id2accelerator([zA.event2id(t)]), event2symbols: (t) => zA.id2symbols([zA.event2id(t)]), chord2id: rn.memoize((t) => t.replace($F, "+Plus").toLowerCase().split("+").reduce((A, e) => A | (sr[e] || 0), 0)), chord2accelerator: (t) => zA.id2accelerator([zA.chord2id(t)]), chord2symbols: (t) => zA.id2symbols([zA.chord2id(t)]), isValidShortcut: (t) => eU.test(t), checkValidShortcut: (t) => zA.isValidShortcut(t), shortcut2id: rn.memoize((t) => t.trim().split(AU).map(zA.chord2id)), shortcut2accelerator: rn.memoize((t) => zA.id2accelerator(zA.shortcut2id(t))), shortcut2symbols: rn.memoize((t) => zA.id2symbols(zA.shortcut2id(t))), isValidID: (t) => t.every(rn.isTruthy), checkValidID: (t) => zA.isValidID(t), id2output: (t, A, e, n) => {
  const { ctrl: i, alt: d, shift: s, cmd: l } = sr;
  return t.map((w) => {
    var h = [], w = (w & i && h.push(A[i]), w & d && h.push(A[d]), w & s && h.push(A[s]), w & l && h.push(A[l]), zA.getTriggerKey(w));
    return w && h.push(A[w] || String.fromCharCode(w).toUpperCase()), h.join(e);
  }).join(n);
}, id2shortcut: (t) => zA.id2output(t, nU, "+", " "), id2accelerator: (t) => zA.id2output(t, rU, "+", " "), id2symbols: (t) => zA.id2output(t, uU, "", " ") };
class oU {
  constructor(A) {
    this.lastKeydownID = -1, this.currentKeydownShortcutID = [], this.currentKeypressShortcutID = [], this.currentKeyupShortcutID = [], this.resetNextKeydownShortcutID = !1, this.triggeredNextKeypress = !0, this.ignoreNextKeypress = !1, this.listening = !1, this.on = () => {
      this.listening || (this.listening = !0, this.target.addEventListener("keydown", this.handler, { capture: this.capture }), this.target.addEventListener("keypress", this.handler, { capture: this.capture }), this.target.addEventListener("keyup", this.handler, { capture: this.capture }));
    }, this.off = () => {
      this.listening && (this.listening = !1, this.target.removeEventListener("keydown", this.handler, { capture: this.capture }), this.target.removeEventListener("keypress", this.handler, { capture: this.capture }), this.target.removeEventListener("keyup", this.handler, { capture: this.capture }));
    }, this.isListening = () => this.listening, this.handler = (e) => {
      var n, i, d, s, l;
      rn.isKeyboardEvent(e) && this.shouldHandleEvent(e) && (n = e.type, i = n === "keypress", d = n === "keyup", (n = n === "keydown") && (this.ignoreNextKeypress = !1), i && this.ignoreNextKeypress ? this.triggeredNextKeypress = !0 : (l = zA.event2id(e), s = zA.getTriggerKey(l), n && (this.lastKeydownID = l), d && (s || l !== this.lastKeydownID) ? this.currentKeyupShortcutID.length = 0 : (d || s) && (s = n ? this.currentKeydownShortcutID : d ? this.currentKeyupShortcutID : this.currentKeypressShortcutID, !n || this.resetNextKeydownShortcutID || this.triggeredNextKeypress || this.currentKeypressShortcutID.push(this.currentKeydownShortcutID[this.currentKeydownShortcutID.length - 1]), n && this.resetNextKeydownShortcutID && (s.length = 0, this.resetNextKeydownShortcutID = !1), s.push(l), i && rn.isEqual(this.currentKeydownShortcutID, s) ? (this.resetNextKeydownShortcutID && (this.currentKeypressShortcutID.length = 0), this.triggeredNextKeypress = !0) : ((l = this.options.handler(s, e)) === mu.HANDLED ? (this.resetNextKeydownShortcutID = !0, this.currentKeypressShortcutID.length = 0, this.currentKeyupShortcutID.length = 0) : l === mu.UNHANDLEABLE ? n ? this.resetNextKeydownShortcutID = !0 : i ? this.currentKeypressShortcutID.length = 0 : d && (this.currentKeyupShortcutID.length = 0) : typeof l == "object" && s.splice(0, 1 / 0, ...l), d || (this.ignoreNextKeypress = n && l === mu.HANDLED, this.triggeredNextKeypress = i)))));
    }, this.options = A, this.capture = !!A.capture, this.target = A.target || document, this.shouldHandleEvent = A.shouldHandleEvent || ((e) => !e.defaultPrevented);
  }
}
class iU {
  constructor(A = {}) {
    this.descriptors = [], this.shortcuts = { size: 0, handlers: [] }, this._updateListener = () => {
      var e = !!this.shortcuts.size;
      e !== this.listener.isListening() && (e ? this.listener.on() : this.listener.off());
    }, this.handler = (e, n) => {
      if (this.recordHandler)
        return this.recordHandler(zA.id2accelerator(e)), mu.UNHANDLED;
      let i = !1, d = -1;
      A:
        for (let l = 0, f = e.length; l < f; l++) {
          let h = this.shortcuts;
          for (let w = l; w < f; w++)
            if (!(h = h[e[w]])) {
              if (i || l !== f - 1)
                continue A;
              return mu.UNHANDLEABLE;
            }
          i = !0, d === -1 && (d = l);
          var s = h.handlers;
          for (let w = 0, p = s.length; w < p; w++)
            if (s[w](n) === !0)
              return n && (n.preventDefault(), n.stopPropagation()), mu.HANDLED;
        }
      return 0 < d ? e.slice(d) : mu.UNHANDLED;
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
          s.reduce((f, h, w) => (f[h] || (f.size++, f[h] = { parent: f, id: h, size: 0, handlers: [] }), w === l && f[h].handlers.unshift(d), f[h]), this.shortcuts);
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
        const s = zA.shortcut2id(i), l = (this.descriptors = this.descriptors.filter((f) => f.shortcut !== i && !rn.isEqual(zA.shortcut2id(f.shortcut), s) || d && f.handler !== d), s.length - 1);
        s.reduce((f, h, w) => {
          if (f = f[h], !f)
            return {};
          if (w === l) {
            d ? f.handlers = f.handlers.filter((K) => K !== d) : f.handlers.length = 0;
            let p = f;
            for (; !p.size && !p.handlers.length && p.parent && p.id; )
              delete p.parent[p.id], p.parent.size--, p = p.parent;
          }
          return f;
        }, this.shortcuts);
      }), this._updateListener();
    }, this.reset = () => {
      this.descriptors = [], this.shortcuts = { size: 0, handlers: [] }, this._updateListener();
    }, this.record = (e) => (this.recordHandler = e, () => {
      delete this.recordHandler;
    }), this.trigger = (e) => (e = typeof e == "string" ? zA.shortcut2id(e) : e, this.handler(e) === mu.HANDLED), this.listener = new oU({ capture: A.capture, handler: this.handler, target: A.target, shouldHandleEvent: A.shouldHandleEvent }), this.reset(), A.shortcuts && this.add(A.shortcuts);
  }
}
function aU(t, A) {
  var e;
  (e = document.querySelector(".suggest-option-panel")) == null || e.remove(), t = t.map((n) => un("div.option-item", n)), t = un("div.suggest-option-panel", t, { style: { display: "block", left: A.left + "px", top: A.top + "px" } }), Wo(document.body, t);
}
class dU {
  constructor(A) {
    if (this.editContent = "", this.keyLanguage = "en", this.suggestVal = "", this.container = document.querySelector(A.container), !this.container)
      throw new Error("找不到" + A.container);
    this.editContent = A.content || "", this.contentChange = A.contentChange, this.init();
  }
  init() {
    this.container.contentEditable = "true", this.container.classList.add("latex-editor-content"), this.container.focus(), WF(this.container, this.observerContentChange.bind(this)), this.observerDelete(), this.removeFontTag(), this.addKeyEvent();
  }
  observerDelete() {
    new iU().add([{ shortcut: "Backspace", handler: (A) => YF() }]);
  }
  observerContentChange(A) {
    var e;
    this.editContent = "", this.setEditContent(), A.type === "characterData" && A.target && (ZF(A), this.keyLanguage = "en", e = A.target.nodeValue || "", A = A.oldValue || "", e.length > (A == null ? void 0 : A.length) ? (e = e.slice(e.indexOf(A) + A.length), this.suggestVal += e, this.visibleSuggestionOption(this.suggestVal)) : this.suggestVal = "");
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
      let n = ee.flattenDeep(f0.map((i) => {
        if (Array.isArray(i.data) && !i.isBase)
          return i.data.map((d) => d.formula);
      }));
      A && (n = n.filter((i) => i == null ? void 0 : i.includes(A)));
      var e = jF();
      e && (e.left || e.top) && (aU(n, e), e = this.getSuggestPanelEle(), !n.length && e ? this.hideSuggestPanelEle(e) : e == null || e.addEventListener("click", (f) => {
        var h, w, p, K, _;
        var d, s, l, f = ((h = f.target) == null ? void 0 : h.innerText) || "";
        f && (d = ml((w = window.getSelection()) == null ? void 0 : w.anchorNode), l = (s = ((p = window.getSelection()) == null ? void 0 : p.anchorOffset) || 0) - this.suggestVal.length, l = (((K = d.nodeValue) == null ? void 0 : K.slice(0, l)) || "") + (((_ = d.nodeValue) == null ? void 0 : _.slice(s)) || ""), ih(oh(Ah(f)).outerHTML), d.nodeValue = l, this.suggestVal = "");
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
      var s, l, f;
      var e, n, i, d = this.container.querySelector("font");
      d && (n = d.innerText, (l = (i = (s = e = window.getSelection()) == null ? void 0 : s.focusNode).innerHTML) != null && l.trimStart() || ((f = i.innerHTML) == null ? void 0 : f.length) !== 1 || (Wo(d.parentElement, un("span.lt", n)), d = (n = d.parentElement.lastChild).innerText, i.remove(), (i = new Range()).setStart(n, d.length), i.setEnd(n, d.length), e == null || e.removeAllRanges(), e == null || e.addRange(i)));
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
var sU = Object.defineProperty, cU = (t, A, e) => A in t ? sU(t, A, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[A] = e, pa = (t, A, e) => (cU(t, typeof A != "symbol" ? A + "" : A, e), e), Pd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ul = {}, BU = { get exports() {
  return ul;
}, set exports(t) {
  ul = t;
} };
(function(t, A) {
  (function() {
    var e, n = "Expected a function", i = "__lodash_hash_undefined__", d = "__lodash_placeholder__", s = 9007199254740991, l = NaN, f = 4294967295, h = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]], w = "[object Arguments]", p = "[object Array]", K = "[object Boolean]", _ = "[object Date]", S = "[object Error]", v = "[object Function]", M = "[object GeneratorFunction]", k = "[object Map]", X = "[object Number]", iA = "[object Object]", z = "[object Promise]", J = "[object RegExp]", lA = "[object Set]", $ = "[object String]", vA = "[object Symbol]", IA = "[object WeakMap]", YA = "[object ArrayBuffer]", Fe = "[object DataView]", re = "[object Float32Array]", $A = "[object Float64Array]", ge = "[object Int8Array]", ve = "[object Int16Array]", ZA = "[object Int32Array]", Be = "[object Uint8Array]", hr = "[object Uint8ClampedArray]", Ln = "[object Uint16Array]", Su = "[object Uint32Array]", Ia = /\b__p \+= '';/g, va = /\b(__p \+=) '' \+/g, Ka = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Zo = /&(?:amp|lt|gt|quot|#39);/g, jo = /[&<>"']/g, La = RegExp(Zo.source), Ll = RegExp(jo.source), xl = /<%-([\s\S]+?)%>/g, _l = /<%([\s\S]+?)%>/g, xa = /<%=([\s\S]+?)%>/g, Ms = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Sl = /^\w*$/, Tl = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _a = /[\\^$.*+?()[\]{}|]/g, Ol = RegExp(_a.source), qo = /^\s+/, Ml = /\s/, kl = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Gl = /\{\n\/\* \[wrapped with (.+)\] \*/, Sa = /,? & /, Vl = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ta = /[()=,{}\[\]\/\s]/, Rl = /\\(\\)?/g, Nl = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ks = /\w*$/, Pl = /^[-+]0x[0-9a-f]+$/i, Jl = /^0b[01]+$/i, Xl = /^\[object .+?Constructor\]$/, Wl = /^0o[0-7]+$/i, Yl = /^(?:0|[1-9]\d*)$/, Gs = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, zo = /($^)/, Zl = /['\n\r\u2028\u2029\\]/g, $o = "\\ud800-\\udfff", Vs = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff", xn = "\\u2700-\\u27bf", jn = "a-z\\xdf-\\xf6\\xf8-\\xff", on = "A-Z\\xc0-\\xd6\\xd8-\\xde", Rs = "\\ufe0e\\ufe0f", Fr = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ot = "[" + $o + "]", Ns = "[" + Fr + "]", Cr = "[" + Vs + "]", Mt = "[" + xn + "]", Ps = "[" + jn + "]", Fr = "[^" + $o + Fr + "\\d+" + xn + jn + on + "]", xn = "\\ud83c[\\udffb-\\udfff]", jn = "[^" + $o + "]", Mu = "(?:\\ud83c[\\udde6-\\uddff]){2}", RA = "[\\ud800-\\udbff][\\udc00-\\udfff]", on = "[" + on + "]", Oa = "(?:" + Ps + "|" + Fr + ")", Fr = "(?:" + on + "|" + Fr + ")", Ma = "(?:['’](?:d|ll|m|re|s|t|ve))?", Tu = "(?:['’](?:D|LL|M|RE|S|T|VE))?", _n = "(?:" + Cr + "|" + xn + ")?", Xr = "[" + Rs + "]?", Xr = Xr + _n + ("(?:\\u200d(?:" + [jn, Mu, RA].join("|") + ")" + Xr + _n + ")*"), _n = "(?:" + [Mt, Mu, RA].join("|") + ")" + Xr, Mt = "(?:" + [jn + Cr + "?", Cr, Mu, RA, ot].join("|") + ")", Js = RegExp("['’]", "g"), Xs = RegExp(Cr, "g"), Sn = RegExp(xn + "(?=" + xn + ")|" + Mt + Xr, "g"), Ws = RegExp([on + "?" + Ps + "+" + Ma + "(?=" + [Ns, on, "$"].join("|") + ")", Fr + "+" + Tu + "(?=" + [Ns, on + Oa, "$"].join("|") + ")", on + "?" + Oa + "+" + Ma, on + "+" + Tu, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", _n].join("|"), "g"), Ys = RegExp("[\\u200d" + $o + Vs + Rs + "]"), Ou = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ai = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], ka = -1, ue = {}, te = (ue[re] = ue[$A] = ue[ge] = ue[ve] = ue[ZA] = ue[Be] = ue[hr] = ue[Ln] = ue[Su] = !0, ue[w] = ue[p] = ue[YA] = ue[K] = ue[Fe] = ue[_] = ue[S] = ue[v] = ue[k] = ue[X] = ue[iA] = ue[J] = ue[lA] = ue[$] = ue[IA] = !1, {}), Ga = (te[w] = te[p] = te[YA] = te[Fe] = te[K] = te[_] = te[re] = te[$A] = te[ge] = te[ve] = te[ZA] = te[k] = te[X] = te[iA] = te[J] = te[lA] = te[$] = te[vA] = te[Be] = te[hr] = te[Ln] = te[Su] = !0, te[S] = te[v] = te[IA] = !1, { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }), jl = parseFloat, ql = parseInt, jn = typeof Pd == "object" && Pd && Pd.Object === Object && Pd, Mu = typeof self == "object" && self && self.Object === Object && self, Ve = jn || Mu || Function("return this")(), RA = A && !A.nodeType && A, GA = RA && t && !t.nodeType && t, Zs = GA && GA.exports === RA, Va = Zs && jn.process, ot = function() {
      try {
        return GA && GA.require && GA.require("util").types || Va && Va.binding && Va.binding("util");
      } catch {
      }
    }(), Tn = ot && ot.isArrayBuffer, Wr = ot && ot.isDate, Ke = ot && ot.isMap, qn = ot && ot.isRegExp, zn = ot && ot.isSet, Ra = ot && ot.isTypedArray;
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
    function js(V, j) {
      for (var N = V == null ? 0 : V.length; N-- && j(V[N], N, V) !== !1; )
        ;
      return V;
    }
    function Na(V, j) {
      for (var N = -1, cA = V == null ? 0 : V.length; ++N < cA; )
        if (!j(V[N], N, V))
          return !1;
      return !0;
    }
    function On(V, j) {
      for (var N = -1, cA = V == null ? 0 : V.length, fA = 0, HA = []; ++N < cA; ) {
        var yA = V[N];
        j(yA, N, V) && (HA[fA++] = yA);
      }
      return HA;
    }
    function ku(V, j) {
      return !!(V != null && V.length) && -1 < XA(V, j, 0);
    }
    function ei(V, j, N) {
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
    function ti(V, j) {
      for (var N = -1, cA = V == null ? 0 : V.length; ++N < cA; )
        if (j(V[N], N, V))
          return !0;
      return !1;
    }
    var Ar = Vu("length");
    function Gu(V, j, N) {
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
        return Yr(V, ni, N);
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
    function ni(V) {
      return V != V;
    }
    function qs(V, j) {
      var N = V == null ? 0 : V.length;
      return N ? Zr(V, j) / N : l;
    }
    function Vu(V) {
      return function(j) {
        return j == null ? e : j[V];
      };
    }
    function Pa(V) {
      return function(j) {
        return V == null ? e : V[j];
      };
    }
    function Ja(V, j, N, cA, fA) {
      return fA(V, function(HA, yA, an) {
        N = cA ? (cA = !1, HA) : j(N, HA, yA, an);
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
    function zs(V) {
      return V && V.slice(0, Ac(V) + 1).replace(qo, "");
    }
    function dt(V) {
      return function(j) {
        return V(j);
      };
    }
    function ri(V, j) {
      return KA(j, function(N) {
        return V[N];
      });
    }
    function Ur(V, j) {
      return V.has(j);
    }
    function ui(V, j) {
      for (var N = -1, cA = V.length; ++N < cA && -1 < XA(j, V[N], 0); )
        ;
      return N;
    }
    function Xa(V, j) {
      for (var N = V.length; N-- && -1 < XA(j, V[N], 0); )
        ;
      return N;
    }
    var Wa = Pa({ À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }), Ya = Pa({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" });
    function $s(V) {
      return "\\" + Ga[V];
    }
    function Le(V) {
      return Ys.test(V);
    }
    function Ru(V) {
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
    function Nu(V) {
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
    function Ac(V) {
      for (var j = V.length; j-- && Ml.test(V.charAt(j)); )
        ;
      return j;
    }
    var zr = Pa({ "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }), nr = function V(TA) {
      var N = (TA = TA == null ? Ve : nr.defaults(Ve.Object(), TA, nr.pick(Ve, Ai))).Array, sn = TA.Date, cA = TA.Error, fA = TA.Function, HA = TA.Math, yA = TA.Object, an = TA.RegExp, G = TA.String, Y = TA.TypeError, P = N.prototype, xt = fA.prototype, BA = yA.prototype, hA = TA["__core-js_shared__"], UA = xt.toString, rA = BA.hasOwnProperty, Pu = 0, ec = (xt = /[^.]+$/.exec(hA && hA.keys && hA.keys.IE_PROTO || "")) ? "Symbol(src)_1." + xt : "", ze = BA.toString, oi = UA.call(yA), $r = Ve._, Au = an("^" + UA.call(rA).replace(_a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), xt = Zs ? TA.Buffer : e, Se = TA.Symbol, pr = TA.Uint8Array, PA = xt ? xt.allocUnsafe : e, ii = jr(yA.getPrototypeOf, yA), Za = yA.create, Ju = BA.propertyIsEnumerable, ai = P.splice, tc = Se ? Se.isConcatSpreadable : e, Xu = Se ? Se.iterator : e, dn = Se ? Se.toStringTag : e, Wu = function() {
        try {
          var u = Pn(yA, "defineProperty");
          return u({}, "", {}), u;
        } catch {
        }
      }(), kn = TA.clearTimeout !== Ve.clearTimeout && TA.clearTimeout, bd = sn && sn.now !== Ve.Date.now && sn.now, di = TA.setTimeout !== Ve.setTimeout && TA.setTimeout, Yu = HA.ceil, mr = HA.floor, si = yA.getOwnPropertySymbols, xt = xt ? xt.isBuffer : e, eu = TA.isFinite, Er = P.join, ci = jr(yA.keys, yA), oe = HA.max, xe = HA.min, Bi = sn.now, li = TA.parseInt, fi = HA.random, nc = P.reverse, sn = Pn(TA, "DataView"), Zu = Pn(TA, "Map"), se = Pn(TA, "Promise"), we = Pn(TA, "Set"), TA = Pn(TA, "WeakMap"), ju = Pn(yA, "create"), qu = TA && new TA(), tu = {}, cn = jt(sn), zu = jt(Zu), $u = jt(se), nu = jt(we), OA = jt(TA), Se = Se ? Se.prototype : e, Gn = Se ? Se.valueOf : e, Ao = Se ? Se.toString : e;
      function E(u) {
        if (mA(u) && !CA(u) && !(u instanceof xA)) {
          if (u instanceof Gt)
            return u;
          if (rA.call(u, "__wrapped__"))
            return Vi(u);
        }
        return new Gt(u);
      }
      var ru = function(u) {
        return LA(u) ? Za ? Za(u) : (ja.prototype = u, u = new ja(), ja.prototype = e, u) : {};
      };
      function ja() {
      }
      function gi() {
      }
      function Gt(u, a) {
        this.__wrapped__ = u, this.__actions__ = [], this.__chain__ = !!a, this.__index__ = 0, this.__values__ = e;
      }
      function xA(u) {
        this.__wrapped__ = u, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = f, this.__views__ = [];
      }
      function Vt(u) {
        var a = -1, B = u == null ? 0 : u.length;
        for (this.clear(); ++a < B; ) {
          var Q = u[a];
          this.set(Q[0], Q[1]);
        }
      }
      function Bn(u) {
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
        u = this.__data__ = new Bn(u), this.size = u.size;
      }
      function eo(u, a) {
        var B, Q = CA(u), F = !Q && mn(u), H = !Q && !F && Oe(u), I = !Q && !F && !H && Ae(u), L = Q || F || H || I, r = L ? tr(u.length, G) : [], o = r.length;
        for (B in u)
          !a && !rA.call(u, B) || L && (B == "length" || H && (B == "offset" || B == "parent") || I && (B == "buffer" || B == "byteLength" || B == "byteOffset") || Yt(B, o)) || r.push(B);
        return r;
      }
      function Kt(u) {
        var a = u.length;
        return a ? u[pi(0, a - 1)] : e;
      }
      function _A(u, a) {
        return mo(Qe(u), Hr(a, 0, u.length));
      }
      function Dr(u) {
        return mo(Qe(u));
      }
      function Rt(u, a, B) {
        (B === e || Et(u[a], B)) && (B !== e || a in u) || fn(u, a, B);
      }
      function Ft(u, a, B) {
        var Q = u[a];
        rA.call(u, a) && Et(Q, B) && (B !== e || a in u) || fn(u, a, B);
      }
      function ln(u, a) {
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
      function qa(u, a) {
        return u && Pt(a, Me(a), u);
      }
      function fn(u, a, B) {
        a == "__proto__" && Wu ? Wu(u, a, { configurable: !0, enumerable: !0, value: B, writable: !0 }) : u[a] = B;
      }
      function za(u, a) {
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
          var c, g, C, Q = CA(u);
          if (Q) {
            if (U = (D = u).length, C = new D.constructor(U), U && typeof D[0] == "string" && rA.call(D, "index") && (C.index = D.index, C.input = D.input), I = C, !L)
              return Qe(u, I);
          } else {
            var U = pe(u), D = U == v || U == M;
            if (Oe(u))
              return sd(u, L);
            if (U == iA || U == w || D && !F) {
              if (I = r || D ? {} : wA(u), !L)
                return r ? (g = C = u, g = (c = I) && Pt(g, lt(g), c), Pt(C, Si(C), g)) : (g = qa(I, c = u), Pt(c, Co(c), g));
            } else {
              if (!te[U])
                return F ? u : {};
              I = function(x, T, O) {
                var R = x.constructor;
                switch (T) {
                  case YA:
                    return so(x);
                  case K:
                  case _:
                    return new R(+x);
                  case Fe:
                    return function(W, Z) {
                      return Z = Z ? so(W.buffer) : W.buffer, new W.constructor(Z, W.byteOffset, W.byteLength);
                    }(x, O);
                  case re:
                  case $A:
                  case ge:
                  case ve:
                  case ZA:
                  case Be:
                  case hr:
                  case Ln:
                  case Su:
                    return cd(x, O);
                  case k:
                    return new R();
                  case X:
                  case $:
                    return new R(x);
                  case J:
                    return function(W) {
                      var Z = new W.constructor(W.source, ks.exec(W));
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
          H.set(u, I), Ld(u) ? u.forEach(function(x) {
            I.add(st(x, a, B, x, u, H));
          }) : Jn(u) && u.forEach(function(x, T) {
            I.set(T, st(x, a, B, T, u, H));
          });
          var y = Q ? e : (o ? r ? _i : Cd : r ? lt : Me)(u);
          ht(y || u, function(x, T) {
            y && (x = u[T = x]), Ft(I, T, st(x, a, B, T, u, H));
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
      function to(u, a, B) {
        if (typeof u != "function")
          throw new Y(n);
        return po(function() {
          u.apply(e, B);
        }, a);
      }
      function no(u, a, B, Q) {
        var F = -1, H = ku, I = !0, L = u.length, r = [], o = a.length;
        if (L) {
          B && (a = KA(a, dt(B))), Q ? (H = ei, I = !1) : 200 <= a.length && (H = Ur, I = !1, a = new vt(a));
          A:
            for (; ++F < L; ) {
              var g = u[F], c = B == null ? g : B(g), g = Q || g !== 0 ? g : 0;
              if (I && c == c) {
                for (var C = o; C--; )
                  if (a[C] === c)
                    continue A;
                r.push(g);
              } else
                H(a, c, Q) || r.push(g);
            }
        }
        return r;
      }
      E.templateSettings = { escape: xl, evaluate: _l, interpolate: xa, variable: "", imports: { _: E } }, (E.prototype = gi.prototype).constructor = E, (Gt.prototype = ru(gi.prototype)).constructor = Gt, (xA.prototype = ru(gi.prototype)).constructor = xA, Vt.prototype.clear = function() {
        this.__data__ = ju ? ju(null) : {}, this.size = 0;
      }, Vt.prototype.delete = function(u) {
        return u = this.has(u) && delete this.__data__[u], this.size -= u ? 1 : 0, u;
      }, Vt.prototype.get = function(u) {
        var a, B = this.__data__;
        return ju ? (a = B[u]) === i ? e : a : rA.call(B, u) ? B[u] : e;
      }, Vt.prototype.has = function(u) {
        var a = this.__data__;
        return ju ? a[u] !== e : rA.call(a, u);
      }, Vt.prototype.set = function(u, a) {
        var B = this.__data__;
        return this.size += this.has(u) ? 0 : 1, B[u] = ju && a === e ? i : a, this;
      }, Bn.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, Bn.prototype.delete = function(u) {
        var a = this.__data__;
        return !((u = ln(a, u)) < 0 || (u == a.length - 1 ? a.pop() : ai.call(a, u, 1), --this.size, 0));
      }, Bn.prototype.get = function(u) {
        var a = this.__data__;
        return (u = ln(a, u)) < 0 ? e : a[u][1];
      }, Bn.prototype.has = function(u) {
        return -1 < ln(this.__data__, u);
      }, Bn.prototype.set = function(u, a) {
        var B = this.__data__, Q = ln(B, u);
        return Q < 0 ? (++this.size, B.push([u, a])) : B[Q][1] = a, this;
      }, m.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new Vt(), map: new (Zu || Bn)(), string: new Vt() };
      }, m.prototype.delete = function(u) {
        return u = ho(this, u).delete(u), this.size -= u ? 1 : 0, u;
      }, m.prototype.get = function(u) {
        return ho(this, u).get(u);
      }, m.prototype.has = function(u) {
        return ho(this, u).has(u);
      }, m.prototype.set = function(u, a) {
        var B = ho(this, u), Q = B.size;
        return B.set(u, a), this.size += B.size == Q ? 0 : 1, this;
      }, vt.prototype.add = vt.prototype.push = function(u) {
        return this.__data__.set(u, i), this;
      }, vt.prototype.has = function(u) {
        return this.__data__.has(u);
      }, Ct.prototype.clear = function() {
        this.__data__ = new Bn(), this.size = 0;
      }, Ct.prototype.delete = function(B) {
        var a = this.__data__, B = a.delete(B);
        return this.size = a.size, B;
      }, Ct.prototype.get = function(u) {
        return this.__data__.get(u);
      }, Ct.prototype.has = function(u) {
        return this.__data__.has(u);
      }, Ct.prototype.set = function(u, a) {
        var B = this.__data__;
        if (B instanceof Bn) {
          var Q = B.__data__;
          if (!Zu || Q.length < 199)
            return Q.push([u, a]), this.size = ++B.size, this;
          B = this.__data__ = new m(Q);
        }
        return B.set(u, a), this.size = B.size, this;
      };
      var Vn = Bd(Re), gn = Bd(Qi, !0);
      function $a(u, a) {
        var B = !0;
        return Vn(u, function(Q, F, H) {
          return B = !!a(Q, F, H);
        }), B;
      }
      function wn(u, a, B) {
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
        for (B = B || Ti, F = F || []; ++H < I; ) {
          var L = u[H];
          0 < a && B(L) ? 1 < a ? _e(L, a - 1, B, Q, F) : $n(F, L) : Q || (F[F.length] = L);
        }
        return F;
      }
      var wi = ld(), ou = ld(!0);
      function Re(u, a) {
        return u && wi(u, a, Me);
      }
      function Qi(u, a) {
        return u && ou(u, a, Me);
      }
      function hi(u, a) {
        return On(a, function(B) {
          return et(u[B]);
        });
      }
      function Qn(u, a) {
        for (var B = 0, Q = (a = Fn(a, u)).length; u != null && B < Q; )
          u = u[Zt(a[B++])];
        return B && B == Q ? u : e;
      }
      function Ad(u, a, B) {
        return a = a(u), CA(u) ? a : $n(a, B(u));
      }
      function NA(u) {
        {
          if (u == null)
            return u === e ? "[object Undefined]" : "[object Null]";
          if (dn && dn in yA(u)) {
            var a = u, B = rA.call(a, dn), Q = a[dn];
            try {
              a[dn] = e;
              var F = !0;
            } catch {
            }
            var H = ze.call(a);
            return F && (B ? a[dn] = Q : delete a[dn]), H;
          }
          return ze.call(u);
        }
      }
      function ro(u, a) {
        return a < u;
      }
      function rc(u, a) {
        return u != null && rA.call(u, a);
      }
      function hn(u, a) {
        return u != null && a in yA(u);
      }
      function uo(u, a, B) {
        for (var Q = B ? ei : ku, F = u[0].length, H = u.length, I = H, L = N(H), r = 1 / 0, o = []; I--; ) {
          var c = u[I];
          I && a && (c = KA(c, dt(a))), r = xe(c.length, r), L[I] = !B && (a || 120 <= F && 120 <= c.length) ? new vt(I && c) : e;
        }
        var c = u[0], g = -1, C = L[0];
        A:
          for (; ++g < F && o.length < r; ) {
            var D = c[g], U = a ? a(D) : D, D = B || D !== 0 ? D : 0;
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
        return a = (u = We(u, a = Fn(a, u))) == null ? u : u[Zt(pt(a))], a == null ? e : qe(a, u, B);
      }
      function ur(u) {
        return mA(u) && NA(u) == w;
      }
      function iu(u, a, B, Q, F) {
        return u === a || (u == null || a == null || !mA(u) && !mA(a) ? u != u && a != a : function(H, I, L, r, o, c) {
          var g = CA(H), y = CA(I), C = g ? p : pe(H), y = y ? p : pe(I), U = (C = C == w ? iA : C) == iA, D = (y = y == w ? iA : y) == iA, y = C == y;
          if (y && Oe(H)) {
            if (!Oe(I))
              return !1;
            U = !(g = !0);
          }
          return y && !U ? (c = c || new Ct(), g || Ae(H) ? hd(H, I, L, r, o, c) : function(b, x, T, O, R, W, Z) {
            switch (T) {
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
                var uA = Ru;
              case lA:
                var q = 1 & O;
                return uA = uA || Nu, b.size != x.size && !q ? !1 : (q = Z.get(b), q ? q == x : (O |= 2, Z.set(b, x), q = hd(uA(b), uA(x), O, R, W, Z), Z.delete(b), q));
              case vA:
                if (Gn)
                  return Gn.call(b) == Gn.call(x);
            }
            return !1;
          }(H, I, C, L, r, o, c)) : !(1 & L) && (g = U && rA.call(H, "__wrapped__"), C = D && rA.call(I, "__wrapped__"), g || C) ? (U = g ? H.value() : H, D = C ? I.value() : I, c = c || new Ct(), o(U, D, L, r, c)) : y && (c = c || new Ct(), function(b, x, T, O, R, W) {
            var Z = 1 & T, uA = Cd(b), q = uA.length, aA = Cd(x).length;
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
              if (!((wt = O ? Z ? O(De, tt, AA, x, b, W) : O(tt, De, AA, b, x, W) : wt) === e ? tt === De || R(tt, De, T, O, W) : wt)) {
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
            var g, C = new Ct();
            if (!((g = Q ? Q(o, c, r, u, a, C) : g) === e ? iu(c, o, 3, Q, C) : g))
              return !1;
          }
        }
        return !0;
      }
      function Ci(u) {
        var a;
        return !(!LA(u) || (a = u, ec && ec in a)) && (et(u) ? Au : Xl).test(jt(u));
      }
      function uc(u) {
        return typeof u == "function" ? u : u == null ? ft : typeof u == "object" ? CA(u) ? Fi(u[0], u[1]) : au(u) : Aa(u);
      }
      function ed(u) {
        if (!cu(u))
          return ci(u);
        var a, B = [];
        for (a in yA(u))
          rA.call(u, a) && a != "constructor" && B.push(a);
        return B;
      }
      function td(u) {
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
      function nd(u, a) {
        var B = -1, Q = At(u) ? N(u.length) : [];
        return Vn(u, function(F, H, I) {
          Q[++B] = a(F, H, I);
        }), Q;
      }
      function au(u) {
        var a = Wt(u);
        return a.length == 1 && a[0][2] ? cc(a[0][0], a[0][1]) : function(B) {
          return B === u || Ne(B, u, a);
        };
      }
      function Fi(u, a) {
        return Fo(u) && Fd(a) ? cc(Zt(u), a) : function(B) {
          var Q = VA(B, u);
          return Q === e && Q === a ? _d(B, u) : iu(a, Q, 3);
        };
      }
      function oo(u, a, B, Q, F) {
        u !== a && wi(a, function(H, I) {
          var L, r, o, c, g, C, U, D, y, b, x, T, O;
          F = F || new Ct(), LA(H) ? (r = a, c = B, g = oo, C = Q, U = F, x = Uo(L = u, o = I), T = Uo(r, o), (O = U.get(T)) || (O = C ? C(x, T, o + "", L, r, U) : e, (r = O === e) && (D = CA(T), y = !D && Oe(T), b = !D && !y && Ae(T), O = T, D || y || b ? O = CA(x) ? x : Ce(x) ? Qe(x) : y ? sd(T, !(r = !1)) : b ? cd(T, !(r = !1)) : [] : Tr(T) || mn(T) ? mn(O = x) ? O = Mr(x) : LA(x) && !et(x) || (O = wA(T)) : r = !1), r && (U.set(T, O), g(O, T, c, C, U), U.delete(T))), Rt(L, o, O)) : (D = Q ? Q(Uo(u, I), H, I + "", u, a, F) : e, Rt(u, I, D = D === e ? H : D));
        }, lt);
      }
      function rd(u, a) {
        var B = u.length;
        if (B)
          return Yt(a += a < 0 ? B : 0, B) ? u[a] : e;
      }
      function Ui(H, a, B) {
        a = a.length ? KA(a, function(L) {
          return CA(L) ? function(r) {
            return Qn(r, L.length === 1 ? L[0] : L);
          } : L;
        }) : [ft];
        var Q = -1;
        a = KA(a, dt(QA()));
        var F = nd(H, function(L, r, o) {
          return { criteria: KA(a, function(c) {
            return c(L);
          }), index: ++Q, value: L };
        }), H = function(L, r) {
          for (var o = B, c = -1, g = L.criteria, C = r.criteria, U = g.length, D = o.length; ++c < U; ) {
            var y, b = bi(g[c], C[c]);
            if (b)
              return D <= c ? b : (y = o[c], b * (y == "desc" ? -1 : 1));
          }
          return L.index - r.index;
        }, I = F.length;
        for (F.sort(H); I--; )
          F[I] = F[I].value;
        return F;
      }
      function oc(u, a, B) {
        for (var Q = -1, F = a.length, H = {}; ++Q < F; ) {
          var I = a[Q], L = Qn(u, I);
          B(L, I) && du(H, Fn(I, u), L);
        }
        return H;
      }
      function io(u, a, B, Q) {
        var F = Q ? er : XA, H = -1, I = a.length, L = u;
        for (u === a && (a = Qe(a)), B && (L = KA(u, dt(B))); ++H < I; )
          for (var r = 0, o = a[H], c = B ? B(o) : o; -1 < (r = F(L, c, r, Q)); )
            L !== u && ai.call(L, r, 1), ai.call(u, r, 1);
        return u;
      }
      function ud(u, a) {
        for (var B = u ? a.length : 0, Q = B - 1; B--; ) {
          var F, H = a[B];
          B != Q && H === F || (Yt(F = H) ? ai.call(u, H, 1) : Bt(u, H));
        }
      }
      function pi(u, a) {
        return u + mr(fi() * (a - u + 1));
      }
      function mi(u, a) {
        var B = "";
        if (!(!u || a < 1 || s < a))
          for (; a % 2 && (B += u), (a = mr(a / 2)) && (u += u), a; )
            ;
        return B;
      }
      function pA(u, a) {
        return xr(pn(u, a, ft), u + "");
      }
      function ic(u) {
        return Kt(Ee(u));
      }
      function ac(u, a) {
        return u = Ee(u), mo(u, Hr(a, 0, u.length));
      }
      function du(u, a, B, Q) {
        if (LA(u))
          for (var F = -1, H = (a = Fn(a, u)).length, I = H - 1, L = u; L != null && ++F < H; ) {
            var r, o = Zt(a[F]), c = B;
            if (o === "__proto__" || o === "constructor" || o === "prototype")
              return u;
            Ft(L, o, c = F != I && (r = L[o], (c = Q ? Q(r, o, L) : e) === e) ? LA(r) ? r : Yt(a[F + 1]) ? [] : {} : c), L = L[o];
          }
        return u;
      }
      var Ei = qu ? function(u, a) {
        return qu.set(u, a), u;
      } : ft, Se = Wu ? function(u, a) {
        return Wu(u, "toString", { configurable: !0, enumerable: !1, value: Md(a), writable: !0 });
      } : ft;
      function od(u) {
        return mo(Ee(u));
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
      function Di(u, a, B) {
        var Q = 0, F = u == null ? Q : u.length;
        if (typeof a == "number" && a == a && F <= 2147483647) {
          for (; Q < F; ) {
            var H = Q + F >>> 1, I = u[H];
            I !== null && !SA(I) && (B ? I <= a : I < a) ? Q = 1 + H : F = H;
          }
          return F;
        }
        return id(u, a, ft, B);
      }
      function id(u, a, B, Q) {
        var F = 0, H = u == null ? 0 : u.length;
        if (H === 0)
          return 0;
        for (var I = (a = B(a)) != a, L = a === null, r = SA(a), o = a === e; F < H; ) {
          var c = mr((F + H) / 2), g = B(u[c]), C = g !== e, U = g === null, y = g == g, D = SA(g), y = I ? Q || y : o ? y && (Q || C) : L ? y && C && (Q || !U) : r ? y && C && !U && (Q || !D) : !U && !D && (Q ? g <= a : g < a);
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
      function ad(u) {
        return typeof u == "number" ? u : SA(u) ? l : +u;
      }
      function WA(u) {
        var a;
        return typeof u == "string" ? u : CA(u) ? KA(u, WA) + "" : SA(u) ? Ao ? Ao.call(u) : "" : (a = u + "") == "0" && 1 / u == -1 / 0 ? "-0" : a;
      }
      function or(u, a, B) {
        var Q = -1, F = ku, H = u.length, I = !0, L = [], r = L;
        if (B)
          I = !1, F = ei;
        else if (200 <= H) {
          var o = a ? null : Ki(u);
          if (o)
            return Nu(o);
          I = !1, F = Ur, r = new vt();
        } else
          r = a ? [] : L;
        A:
          for (; ++Q < H; ) {
            var g = u[Q], c = a ? a(g) : g, g = B || g !== 0 ? g : 0;
            if (I && c == c) {
              for (var C = r.length; C--; )
                if (r[C] === c)
                  continue A;
              a && r.push(c), L.push(g);
            } else
              F(r, c, B) || (r !== L && r.push(c), L.push(g));
          }
        return L;
      }
      function Bt(u, a) {
        return (u = We(u, a = Fn(a, u))) == null || delete u[Zt(pt(a))];
      }
      function dc(u, a, B, Q) {
        return du(u, a, B(Qn(u, a)), Q);
      }
      function br(u, a, B, Q) {
        for (var F = u.length, H = Q ? F : -1; (Q ? H-- : ++H < F) && a(u[H], H, u); )
          ;
        return B ? ct(u, Q ? 0 : H, Q ? H + 1 : F) : ct(u, Q ? H + 1 : 0, Q ? F : H);
      }
      function Hi(u, a) {
        var B = u;
        return at(a, function(Q, F) {
          return F.func.apply(F.thisArg, $n([Q], F.args));
        }, B = u instanceof xA ? u.value() : B);
      }
      function yi(u, a, B) {
        var Q = u.length;
        if (Q < 2)
          return Q ? or(u[0]) : [];
        for (var F = -1, H = N(Q); ++F < Q; )
          for (var I = u[F], L = -1; ++L < Q; )
            L != F && (H[F] = no(H[F] || I, u[L], a, B));
        return or(_e(H, 1), a, B);
      }
      function dd(u, a, B) {
        for (var Q = -1, F = u.length, H = a.length, I = {}; ++Q < F; ) {
          var L = Q < H ? a[Q] : e;
          B(I, u[Q], L);
        }
        return I;
      }
      function $e(u) {
        return Ce(u) ? u : [];
      }
      function Cn(u) {
        return typeof u == "function" ? u : ft;
      }
      function Fn(u, a) {
        return CA(u) ? u : Fo(u, a) ? [u] : Gi(JA(u));
      }
      var Yi = pA;
      function Rn(u, a, B) {
        var Q = u.length;
        return B = B === e ? Q : B, !a && Q <= B ? u : ct(u, a, B);
      }
      var ao = kn || function(u) {
        return Ve.clearTimeout(u);
      };
      function sd(u, a) {
        return a ? u.slice() : (a = u.length, a = PA ? PA(a) : new u.constructor(a), u.copy(a), a);
      }
      function so(u) {
        var a = new u.constructor(u.byteLength);
        return new pr(a).set(new pr(u)), a;
      }
      function cd(u, a) {
        return a = a ? so(u.buffer) : u.buffer, new u.constructor(a, u.byteOffset, u.length);
      }
      function bi(u, a) {
        if (u !== a) {
          var B = u !== e, Q = u === null, F = u == u, H = SA(u), I = a !== e, L = a === null, r = a == a, o = SA(a);
          if (!L && !o && !H && a < u || H && I && r && !L && !o || Q && I && r || !B && r || !F)
            return 1;
          if (!Q && !H && !o && u < a || o && B && F && !Q && !H || L && B && F || !I && F || !r)
            return -1;
        }
        return 0;
      }
      function Ii(u, a, B, Q) {
        for (var F = -1, H = u.length, I = B.length, L = -1, r = a.length, o = oe(H - I, 0), c = N(r + o), g = !Q; ++L < r; )
          c[L] = a[L];
        for (; ++F < I; )
          (g || F < H) && (c[B[F]] = u[F]);
        for (; o--; )
          c[L++] = u[F++];
        return c;
      }
      function Nn(u, a, B, Q) {
        for (var F = -1, H = u.length, I = -1, L = B.length, r = -1, o = a.length, c = oe(H - L, 0), g = N(c + o), C = !Q; ++F < c; )
          g[F] = u[F];
        for (var U = F; ++r < o; )
          g[U + r] = a[r];
        for (; ++I < L; )
          (C || F < H) && (g[U + B[I]] = u[F++]);
        return g;
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
          (F ? fn : Ft)(B, L, r = r === e ? u[L] : r);
        }
        return B;
      }
      function co(u, a) {
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
      function Bd(u, a) {
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
      function ld(u) {
        return function(a, B, Q) {
          for (var F = -1, H = yA(a), I = Q(a), L = I.length; L--; ) {
            var r = I[u ? L : ++F];
            if (B(H[r], r, H) === !1)
              break;
          }
          return a;
        };
      }
      function fd(u) {
        return function(a) {
          var Q = Le(a = JA(a)) ? kt(a) : e, B = Q ? Q[0] : a.charAt(0), Q = Q ? Rn(Q, 1).join("") : a.slice(1);
          return B[u]() + Q;
        };
      }
      function Ir(u) {
        return function(a) {
          return at(Od(Ic(a).replace(Js, "")), u, "");
        };
      }
      function Te(u) {
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
      function Un(u, a, B) {
        var Q = Te(u);
        return function F() {
          for (var H = arguments.length, I = N(H), L = H, r = Kr(F); L--; )
            I[L] = arguments[L];
          return r = H < 3 && I[0] !== r && I[H - 1] !== r ? [] : Mn(I, r), (H -= r.length) < B ? wo(u, a, lo, F.placeholder, e, I, r, e, e, B - H) : qe(this && this !== Ve && this instanceof F ? Q : u, this, I);
        };
      }
      function Bo(u) {
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
            F && !r && Qo(H) == "wrapper" && (r = new Gt([], !0));
          }
          for (Q = r ? Q : B; ++Q < B; )
            var I = Qo(H = a[Q]), L = I == "wrapper" ? Xt(H) : e, r = L && Oi(L[0]) && L[1] == 424 && !L[4].length && L[9] == 1 ? r[Qo(L[0])].apply(r, L[3]) : H.length == 1 && Oi(H) ? r[I]() : r.thru(H);
          return function() {
            var o = arguments, c = o[0];
            if (r && o.length == 1 && CA(c))
              return r.plant(c).value();
            for (var g = 0, C = B ? a[g].apply(this, o) : c; ++g < B; )
              C = a[g].call(this, C);
            return C;
          };
        });
      }
      function lo(u, a, B, Q, F, H, I, L, r, o) {
        var c = 128 & a, g = 1 & a, C = 2 & a, U = 24 & a, D = 512 & a, y = C ? e : Te(u);
        return function b() {
          for (var x, T, O = arguments.length, R = N(O), W = O; W--; )
            R[W] = arguments[W];
          return U && (T = function(Z, uA) {
            for (var q = Z.length, sA = 0; q--; )
              Z[q] === uA && ++sA;
            return sA;
          }(R, x = Kr(b))), Q && (R = Ii(R, Q, F, U)), H && (R = Nn(R, H, I, U)), O -= T, U && O < o ? (T = Mn(R, x), wo(u, a, lo, b.placeholder, B, R, T, L, r, o - O)) : (x = g ? B : this, T = C ? x[u] : u, O = R.length, L ? R = function(Z, uA) {
            for (var q = Z.length, sA = xe(uA.length, q), AA = Qe(Z); sA--; ) {
              var aA = uA[sA];
              Z[sA] = Yt(aA, q) ? AA[aA] : e;
            }
            return Z;
          }(R, L) : D && 1 < O && R.reverse(), c && r < O && (R.length = r), (T = this && this !== Ve && this instanceof b ? y || Te(T) : T).apply(x, R));
        };
      }
      function gd(u, a) {
        return function(B, Q) {
          return B = B, F = u, H = a(Q), I = {}, Re(B, function(L, r, o) {
            F(I, H(L), r, o);
          }), I;
          var F, H, I;
        };
      }
      function fo(u, a) {
        return function(B, Q) {
          var F;
          if (B === e && Q === e)
            return a;
          if (B !== e && (F = B), Q !== e) {
            if (F === e)
              return Q;
            Q = (typeof B == "string" || typeof Q == "string" ? (B = WA(B), WA) : (B = ad(B), ad))(Q), F = u(B, Q);
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
        return B < 2 ? B ? mi(a, u) : a : (B = mi(a, Yu(u / qr(a))), Le(a) ? Rn(kt(B), 0, u).join("") : B.slice(0, u));
      }
      function $l(u, a, B, Q) {
        var F = 1 & a, H = Te(u);
        return function I() {
          for (var L = -1, r = arguments.length, o = -1, c = Q.length, g = N(c + r), C = this && this !== Ve && this instanceof I ? H : u; ++o < c; )
            g[o] = Q[o];
          for (; r--; )
            g[o++] = arguments[++L];
          return qe(C, F ? B : this, g);
        };
      }
      function wd(u) {
        return function(a, B, Q) {
          Q && typeof Q != "number" && he(a, B, Q) && (B = Q = e), a = $t(a), B === e ? (B = a, a = 0) : B = $t(B), Q = Q === e ? a < B ? 1 : -1 : $t(Q);
          for (var F = a, H = Q, I = u, L = -1, r = oe(Yu((B - F) / (H || 1)), 0), o = N(r); r--; )
            o[I ? r : ++L] = F, F += H;
          return o;
        };
      }
      function go(u) {
        return function(a, B) {
          return typeof a == "string" && typeof B == "string" || (a = ie(a), B = ie(B)), u(a, B);
        };
      }
      function wo(u, a, B, Q, g, C, I, L, r, o) {
        var c = 8 & a, g = (4 & (a = (a | (c ? 32 : 64)) & ~(c ? 64 : 32)) || (a &= -4), [u, a, g, c ? C : e, c ? I : e, c ? e : C, c ? e : I, L, r, o]), C = B.apply(e, g);
        return Oi(u) && Mi(C, g), C.placeholder = Q, Ud(C, u, a);
      }
      function vi(u) {
        var a = HA[u];
        return function(B, Q) {
          var F;
          return B = ie(B), (Q = Q == null ? 0 : xe(EA(Q), 292)) && eu(B) ? (F = (JA(B) + "e").split("e"), +((F = (JA(a(F[0] + "e" + (+F[1] + Q))) + "e").split("e"))[0] + "e" + (+F[1] - Q))) : a(B);
        };
      }
      var Ki = we && 1 / Nu(new we([, -0]))[1] == 1 / 0 ? function(u) {
        return new we(u);
      } : Lo;
      function Li(u) {
        return function(a) {
          var B, Q, F, H = pe(a);
          return H == k ? Ru(a) : H == lA ? (H = a, Q = -1, F = Array(H.size), H.forEach(function(I) {
            F[++Q] = [I, I];
          }), F) : KA(u(B = a), function(I) {
            return [I, B[I]];
          });
        };
      }
      function Lt(u, a, B, Q, F, H, I, L) {
        var r, o, c, g, C, U, D, y, b, x, T, O, R, W = 2 & a;
        if (W || typeof u == "function")
          return (r = Q ? Q.length : 0) || (a &= -97, Q = F = e), I = I === e ? I : oe(EA(I), 0), L = L === e ? L : EA(L), r -= F ? F.length : 0, 64 & a && (c = Q, y = F, Q = F = e), o = W ? e : Xt(u), c = [u, a, B, Q, F, c, y, H, I, L], o && (y = o, I = (H = c)[1], x = y[1], O = (T = I | x) < 131, R = x == 128 && I == 8 || x == 128 && I == 256 && H[7].length <= y[8] || x == 384 && y[7].length <= y[8] && I == 8, O || R) && (1 & x && (H[2] = y[2], T |= 1 & I ? 0 : 4), (O = y[3]) && (b = H[3], H[3] = b ? Ii(b, O, y[4]) : O, H[4] = b ? Mn(H[3], d) : y[4]), (O = y[5]) && (b = H[5], H[5] = b ? Nn(b, O, y[6]) : O, H[6] = b ? Mn(H[5], d) : y[6]), (O = y[7]) && (H[7] = O), 128 & x && (H[8] = H[8] == null ? y[8] : xe(H[8], y[8])), H[9] == null && (H[9] = y[9]), H[0] = y[0], H[1] = T), u = c[0], a = c[1], B = c[2], Q = c[3], F = c[4], !(L = c[9] = c[9] === e ? W ? 0 : u.length : oe(c[9] - r, 0)) && 24 & a && (a &= -25), R = a && a != 1 ? a == 8 || a == 16 ? Un(u, a, L) : a != 32 && a != 33 || F.length ? lo.apply(e, c) : $l(u, a, B, Q) : (C = B, U = 1 & a, D = Te(g = u), function Z() {
            return (this && this !== Ve && this instanceof Z ? D : g).apply(U ? C : this, arguments);
          }), Ud((o ? Ei : Mi)(R, c), u, a);
        throw new Y(n);
      }
      function sc(u, a, B, Q) {
        return u === e || Et(u, BA[B]) && !rA.call(Q, B) ? a : u;
      }
      function Qd(u, a, B, Q, F, H) {
        return LA(u) && LA(a) && (H.set(a, u), oo(u, a, e, Qd, H), H.delete(a)), u;
      }
      function xi(u) {
        return Tr(u) ? e : u;
      }
      function hd(u, a, B, Q, F, H) {
        var I = 1 & B, L = u.length, r = a.length;
        if (L != r && !(I && L < r))
          return !1;
        var r = H.get(u), o = H.get(a);
        if (r && o)
          return r == a && o == u;
        var c = -1, g = !0, C = 2 & B ? new vt() : e;
        for (H.set(u, a), H.set(a, u); ++c < L; ) {
          var U, D = u[c], y = a[c];
          if ((U = Q ? I ? Q(y, D, c, a, u, H) : Q(D, y, c, u, a, H) : U) !== e) {
            if (U)
              continue;
            g = !1;
            break;
          }
          if (C) {
            if (!ti(a, function(b, x) {
              return !Ur(C, x) && (D === b || F(D, b, B, Q, H)) && C.push(x);
            })) {
              g = !1;
              break;
            }
          } else if (D !== y && !F(D, y, B, Q, H)) {
            g = !1;
            break;
          }
        }
        return H.delete(u), H.delete(a), g;
      }
      function Jt(u) {
        return xr(pn(u, e, Eo), u + "");
      }
      function Cd(u) {
        return Ad(u, Me, Co);
      }
      function _i(u) {
        return Ad(u, lt, Si);
      }
      var Xt = qu ? function(u) {
        return qu.get(u);
      } : Lo;
      function Qo(u) {
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
        var u = (u = E.iteratee || Ko) === Ko ? uc : u;
        return arguments.length ? u(arguments[0], arguments[1]) : u;
      }
      function ho(F, a) {
        var B, Q, F = F.__data__;
        return ((Q = typeof (B = a)) == "string" || Q == "number" || Q == "symbol" || Q == "boolean" ? B !== "__proto__" : B === null) ? F[typeof a == "string" ? "string" : "hash"] : F.map;
      }
      function Wt(u) {
        for (var a = Me(u), B = a.length; B--; ) {
          var Q = a[B], F = u[Q];
          a[B] = [Q, F, Fd(F)];
        }
        return a;
      }
      function Pn(u, a) {
        return a = a, u = (u = u) == null ? e : u[a], Ci(u) ? u : e;
      }
      var Co = si ? function(u) {
        return u == null ? [] : (u = yA(u), On(si(u), function(a) {
          return Ju.call(u, a);
        }));
      } : xo, Si = si ? function(u) {
        for (var a = []; u; )
          $n(a, Co(u)), u = ii(u);
        return a;
      } : xo, pe = NA;
      function Lr(u, a, B) {
        for (var Q = -1, F = (a = Fn(a, u)).length, H = !1; ++Q < F; ) {
          var I = Zt(a[Q]);
          if (!(H = u != null && B(u, I)))
            break;
          u = u[I];
        }
        return H || ++Q != F ? H : !!(F = u == null ? 0 : u.length) && ji(F) && Yt(I, F) && (CA(u) || mn(u));
      }
      function wA(u) {
        return typeof u.constructor != "function" || cu(u) ? {} : ru(ii(u));
      }
      function Ti(u) {
        return CA(u) || mn(u) || !!(tc && u && u[tc]);
      }
      function Yt(u, a) {
        var B = typeof u;
        return !!(a = a ?? s) && (B == "number" || B != "symbol" && Yl.test(u)) && -1 < u && u % 1 == 0 && u < a;
      }
      function he(u, a, B) {
        var Q;
        return !!LA(B) && !!((Q = typeof a) == "number" ? At(B) && Yt(a, B.length) : Q == "string" && a in B) && Et(B[a], u);
      }
      function Fo(u, a) {
        var B;
        if (!CA(u))
          return (B = typeof u) == "number" || B == "symbol" || B == "boolean" || u == null || SA(u) || Sl.test(u) || !Ms.test(u) || a != null && u in yA(a);
      }
      function Oi(u) {
        var a = Qo(u), B = E[a];
        return typeof B == "function" && a in xA.prototype && (u === B || (a = Xt(B)) && u === a[0]);
      }
      (sn && pe(new sn(new ArrayBuffer(1))) != Fe || Zu && pe(new Zu()) != k || se && pe(se.resolve()) != z || we && pe(new we()) != lA || TA && pe(new TA()) != IA) && (pe = function(B) {
        var a = NA(B), B = a == iA ? B.constructor : e, B = B ? jt(B) : "";
        if (B)
          switch (B) {
            case cn:
              return Fe;
            case zu:
              return k;
            case $u:
              return z;
            case nu:
              return lA;
            case OA:
              return IA;
          }
        return a;
      });
      var Xe = hA ? et : _o;
      function cu(u) {
        var a = u && u.constructor;
        return u === (typeof a == "function" && a.prototype || BA);
      }
      function Fd(u) {
        return u == u && !LA(u);
      }
      function cc(u, a) {
        return function(B) {
          return B != null && B[u] === a && (a !== e || u in yA(B));
        };
      }
      function pn(u, a, B) {
        return a = oe(a === e ? u.length - 1 : a, 0), function() {
          for (var Q = arguments, F = -1, H = oe(Q.length - a, 0), I = N(H); ++F < H; )
            I[F] = Q[a + F];
          for (var F = -1, L = N(a + 1); ++F < a; )
            L[F] = Q[F];
          return L[a] = B(I), qe(u, this, L);
        };
      }
      function We(u, a) {
        return a.length < 2 ? u : Qn(u, ct(a, 0, -1));
      }
      function Uo(u, a) {
        if ((a !== "constructor" || typeof u[a] != "function") && a != "__proto__")
          return u[a];
      }
      var Mi = pd(Ei), po = di || function(u, a) {
        return Ve.setTimeout(u, a);
      }, xr = pd(Se);
      function Ud(u, I, B) {
        var Q, F, H, I = I + "";
        return xr(u, (F = (I = (I = u = I).match(Gl)) ? I[1].split(Sa) : [], H = B, ht(h, function(L) {
          var r = "_." + L[0];
          H & L[1] && !ku(F, r) && F.push(r);
        }), I = F.sort(), (B = I.length) ? (I[Q = B - 1] = (1 < B ? "& " : "") + I[Q], I = I.join(2 < B ? ", " : " "), u.replace(kl, `{
/* [wrapped with ` + I + `] */
`)) : u));
      }
      function pd(u) {
        var a = 0, B = 0;
        return function() {
          var Q = Bi(), F = 16 - (Q - B);
          if (B = Q, 0 < F) {
            if (800 <= ++a)
              return arguments[0];
          } else
            a = 0;
          return u.apply(e, arguments);
        };
      }
      function mo(u, a) {
        var B = -1, Q = u.length, F = Q - 1;
        for (a = a === e ? Q : a; ++B < a; ) {
          var H = pi(B, F), I = u[H];
          u[H] = u[B], u[B] = I;
        }
        return u.length = a, u;
      }
      ki = (kn = Sr(kn = function(u) {
        var a = [];
        return u.charCodeAt(0) === 46 && a.push(""), u.replace(Tl, function(B, Q, F, H) {
          a.push(F ? H.replace(Rl, "$1") : Q || B);
        }), a;
      }, function(u) {
        return ki.size === 500 && ki.clear(), u;
      })).cache;
      var ki, Gi = kn;
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
      function Vi(u) {
        var a;
        return u instanceof xA ? u.clone() : ((a = new Gt(u.__wrapped__, u.__chain__)).__actions__ = Qe(u.__actions__), a.__index__ = u.__index__, a.__values__ = u.__values__, a);
      }
      sn = pA(function(u, a) {
        return Ce(u) ? no(u, _e(a, 1, Ce, !0)) : [];
      }), se = pA(function(u, a) {
        var B = pt(a);
        return Ce(B) && (B = e), Ce(u) ? no(u, _e(a, 1, Ce, !0), QA(B, 2)) : [];
      }), TA = pA(function(u, a) {
        var B = pt(a);
        return Ce(B) && (B = e), Ce(u) ? no(u, _e(a, 1, Ce, !0), e, B) : [];
      });
      function md(u, a, B) {
        var Q = u == null ? 0 : u.length;
        return Q ? ((B = B == null ? 0 : EA(B)) < 0 && (B = oe(Q + B, 0)), Yr(u, QA(a, 3), B)) : -1;
      }
      function Ed(u, a, B) {
        var Q, F = u == null ? 0 : u.length;
        return F ? (Q = F - 1, B !== e && (Q = EA(B), Q = B < 0 ? oe(F + Q, 0) : xe(Q, F - 1)), Yr(u, QA(a, 3), Q, !0)) : -1;
      }
      function Eo(u) {
        return u != null && u.length ? _e(u, 1) : [];
      }
      function Ri(u) {
        return u && u.length ? u[0] : e;
      }
      hA = pA(function(u) {
        var a = KA(u, $e);
        return a.length && a[0] === u[0] ? uo(a) : [];
      }), di = pA(function(u) {
        var a = pt(u), B = KA(u, $e);
        return a === pt(B) ? a = e : B.pop(), B.length && B[0] === u[0] ? uo(B, QA(a, 2)) : [];
      }), Se = pA(function(u) {
        var a = pt(u), B = KA(u, $e);
        return (a = typeof a == "function" ? a : e) && B.pop(), B.length && B[0] === u[0] ? uo(B, e, a) : [];
      });
      function pt(u) {
        var a = u == null ? 0 : u.length;
        return a ? u[a - 1] : e;
      }
      kn = pA(qt);
      function qt(u, a) {
        return u && u.length && a && a.length ? io(u, a) : u;
      }
      var _r = Jt(function(u, a) {
        var B = u == null ? 0 : u.length, Q = za(u, a);
        return ud(u, KA(a, function(F) {
          return Yt(F, B) ? +F : F;
        }).sort(bi)), Q;
      });
      function Ni(u) {
        return u == null ? u : nc.call(u);
      }
      var Bc = pA(function(u) {
        return or(_e(u, 1, Ce, !0));
      }), lc = pA(function(u) {
        var a = pt(u);
        return Ce(a) && (a = e), or(_e(u, 1, Ce, !0), QA(a, 2));
      }), fc = pA(function(u) {
        var a = typeof (a = pt(u)) == "function" ? a : e;
        return or(_e(u, 1, Ce, !0), e, a);
      });
      function Pi(u) {
        var a;
        return u && u.length ? (a = 0, u = On(u, function(B) {
          return Ce(B) && (a = oe(B.length, a), 1);
        }), tr(a, function(B) {
          return KA(u, Vu(B));
        })) : [];
      }
      function mt(u, a) {
        return u && u.length ? (u = Pi(u), a == null ? u : KA(u, function(B) {
          return qe(a, e, B);
        })) : [];
      }
      var gc = pA(function(u, a) {
        return Ce(u) ? no(u, a) : [];
      }), Af = pA(function(u) {
        return yi(On(u, Ce));
      }), Dd = pA(function(u) {
        var a = pt(u);
        return Ce(a) && (a = e), yi(On(u, Ce), QA(a, 2));
      }), ef = pA(function(u) {
        var a = typeof (a = pt(u)) == "function" ? a : e;
        return yi(On(u, Ce), e, a);
      }), tf = pA(Pi), nf = pA(function(u) {
        var a = u.length, a = typeof (a = 1 < a ? u[a - 1] : e) == "function" ? (u.pop(), a) : e;
        return mt(u, a);
      });
      function Ji(u) {
        return u = E(u), u.__chain__ = !0, u;
      }
      function Do(u, a) {
        return a(u);
      }
      var rf = Jt(function(u) {
        function a(H) {
          return za(H, u);
        }
        var B = u.length, Q = B ? u[0] : 0, F = this.__wrapped__;
        return !(1 < B || this.__actions__.length) && F instanceof xA && Yt(Q) ? ((F = F.slice(Q, +Q + (B ? 1 : 0))).__actions__.push({ func: Do, args: [a], thisArg: e }), new Gt(F, this.__chain__).thru(function(H) {
          return B && !H.length && H.push(e), H;
        })) : this.thru(a);
      }), uf = co(function(u, a, B) {
        rA.call(u, B) ? ++u[B] : fn(u, B, 1);
      }), of = Bo(md), af = Bo(Ed);
      function wc(u, a) {
        return (CA(u) ? ht : Vn)(u, QA(a, 3));
      }
      function Qc(u, a) {
        return (CA(u) ? js : gn)(u, QA(a, 3));
      }
      var hc = co(function(u, a, B) {
        rA.call(u, B) ? u[B].push(a) : fn(u, B, [a]);
      }), Xi = pA(function(u, a, B) {
        var Q = -1, F = typeof a == "function", H = At(u) ? N(u.length) : [];
        return Vn(u, function(I) {
          H[++Q] = F ? qe(a, I, B) : rr(I, a, B);
        }), H;
      }), df = co(function(u, a, B) {
        fn(u, B, a);
      });
      function Wi(u, a) {
        return (CA(u) ? KA : nd)(u, QA(a, 3));
      }
      var sf = co(function(u, a, B) {
        u[B ? 0 : 1].push(a);
      }, function() {
        return [[], []];
      }), cf = pA(function(u, a) {
        var B;
        return u == null ? [] : (1 < (B = a.length) && he(u, a[0], a[1]) ? a = [] : 2 < B && he(a[0], a[1], a[2]) && (a = [a[0]]), Ui(u, _e(a, 1), []));
      }), Ho = bd || function() {
        return Ve.Date.now();
      };
      function Hd(u, a, B) {
        return a = B ? e : a, a = u && a == null ? u.length : a, Lt(u, 128, e, e, e, e, a);
      }
      function Cc(u, a) {
        var B;
        if (typeof a != "function")
          throw new Y(n);
        return u = EA(u), function() {
          return 0 < --u && (B = a.apply(this, arguments)), u <= 1 && (a = e), B;
        };
      }
      var yd = pA(function(u, a, B) {
        var Q, F = 1;
        return B.length && (Q = Mn(B, Kr(yd)), F |= 32), Lt(u, F, a, B, Q);
      }), Fc = pA(function(u, a, B) {
        var Q, F = 3;
        return B.length && (Q = Mn(B, Kr(Fc)), F |= 32), Lt(a, F, u, B, Q);
      });
      function yo(u, a, B) {
        var Q, F, H, I, L, r, o = 0, c = !1, g = !1, C = !0;
        if (typeof u != "function")
          throw new Y(n);
        function U(T) {
          var O = Q, R = F;
          return Q = F = e, o = T, I = u.apply(R, O);
        }
        function D(T) {
          var O = T - r;
          return r === e || a <= O || O < 0 || g && H <= T - o;
        }
        function y() {
          var T, O = Ho();
          if (D(O))
            return b(O);
          L = po(y, (T = a - ((O = O) - r), g ? xe(T, H - (O - o)) : T));
        }
        function b(T) {
          return L = e, C && Q ? U(T) : (Q = F = e, I);
        }
        function x() {
          var T = Ho(), O = D(T);
          if (Q = arguments, F = this, r = T, O) {
            if (L === e)
              return o = T = r, L = po(y, a), c ? U(T) : I;
            if (g)
              return ao(L), L = po(y, a), U(r);
          }
          return L === e && (L = po(y, a)), I;
        }
        return a = ie(a) || 0, LA(B) && (c = !!B.leading, g = "maxWait" in B, H = g ? oe(ie(B.maxWait) || 0, a) : H, C = "trailing" in B ? !!B.trailing : C), x.cancel = function() {
          L !== e && ao(L), o = 0, Q = r = F = L = e;
        }, x.flush = function() {
          return L === e ? I : b(Ho());
        }, x;
      }
      var bd = pA(function(u, a) {
        return to(u, 1, a);
      }), Bf = pA(function(u, a, B) {
        return to(u, ie(a) || 0, B);
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
      function bo(u) {
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
      var Yi = Yi(function(u, a) {
        var B = (a = a.length == 1 && CA(a[0]) ? KA(a[0], dt(QA())) : KA(_e(a, 1), dt(QA()))).length;
        return pA(function(Q) {
          for (var F = -1, H = xe(Q.length, B); ++F < H; )
            Q[F] = a[F].call(this, Q[F]);
          return qe(u, this, Q);
        });
      }), Io = pA(function(u, a) {
        var B = Mn(a, Kr(Io));
        return Lt(u, 32, e, a, B);
      }), Id = pA(function(u, a) {
        var B = Mn(a, Kr(Id));
        return Lt(u, 64, e, a, B);
      }), Uc = Jt(function(u, a) {
        return Lt(u, 256, e, e, e, a);
      });
      function Et(u, a) {
        return u === a || u != u && a != a;
      }
      var lf = go(ro), Zi = go(function(u, a) {
        return a <= u;
      }), mn = ur(function() {
        return arguments;
      }()) ? ur : function(u) {
        return mA(u) && rA.call(u, "callee") && !Ju.call(u, "callee");
      }, CA = N.isArray, vd = Tn ? dt(Tn) : function(u) {
        return mA(u) && NA(u) == YA;
      };
      function At(u) {
        return u != null && ji(u.length) && !et(u);
      }
      function Ce(u) {
        return mA(u) && At(u);
      }
      var Oe = xt || _o, xt = Wr ? dt(Wr) : function(u) {
        return mA(u) && NA(u) == _;
      };
      function Kd(u) {
        var a;
        return !!mA(u) && ((a = NA(u)) == S || a == "[object DOMException]" || typeof u.message == "string" && typeof u.name == "string" && !Tr(u));
      }
      function et(u) {
        return !!LA(u) && ((u = NA(u)) == v || u == M || u == "[object AsyncFunction]" || u == "[object Proxy]");
      }
      function FA(u) {
        return typeof u == "number" && u == EA(u);
      }
      function ji(u) {
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
      function Tr(u) {
        return !(!mA(u) || NA(u) != iA) && ((u = ii(u)) === null || typeof (u = rA.call(u, "constructor") && u.constructor) == "function" && u instanceof u && UA.call(u) == oi);
      }
      var zt = qn ? dt(qn) : function(u) {
        return mA(u) && NA(u) == J;
      }, Ld = zn ? dt(zn) : function(u) {
        return mA(u) && pe(u) == lA;
      };
      function Or(u) {
        return typeof u == "string" || !CA(u) && mA(u) && NA(u) == $;
      }
      function SA(u) {
        return typeof u == "symbol" || mA(u) && NA(u) == vA;
      }
      var Ae = Ra ? dt(Ra) : function(u) {
        return mA(u) && ji(u.length) && !!ue[NA(u)];
      }, pc = go(yr), mc = go(function(u, a) {
        return u <= a;
      });
      function Bu(u) {
        if (!u)
          return [];
        if (At(u))
          return (Or(u) ? kt : Qe)(u);
        var a;
        if (Xu && u[Xu]) {
          for (var B, Q = u[Xu](), F = []; !(B = Q.next()).done; )
            F.push(B.value);
          return F;
        }
        return ((a = pe(u)) == k ? Ru : a == lA ? Nu : Ee)(u);
      }
      function $t(u) {
        return u ? (u = ie(u)) === 1 / 0 || u === -1 / 0 ? 17976931348623157e292 * (u < 0 ? -1 : 1) : u == u ? u : 0 : u === 0 ? u : 0;
      }
      function EA(a) {
        var a = $t(a), B = a % 1;
        return a == a ? B ? a - B : a : 0;
      }
      function vo(u) {
        return u ? Hr(EA(u), 0, f) : 0;
      }
      function ie(u) {
        if (typeof u == "number")
          return u;
        if (SA(u))
          return l;
        if (typeof (u = LA(u) ? LA(a = typeof u.valueOf == "function" ? u.valueOf() : u) ? a + "" : a : u) != "string")
          return u === 0 ? u : +u;
        u = zs(u);
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
      }), xd = ir(function(u, a) {
        Pt(a, lt(a), u);
      }), _t = ir(function(u, a, B, Q) {
        Pt(a, lt(a), u, Q);
      }), DA = ir(function(u, a, B, Q) {
        Pt(a, Me(a), u, Q);
      }), Ec = Jt(za), St = pA(function(u, a) {
        u = yA(u);
        var B = -1, Q = a.length, F = 2 < Q ? a[2] : e;
        for (F && he(a[0], a[1], F) && (Q = 1); ++B < Q; )
          for (var H = a[B], I = lt(H), L = -1, r = I.length; ++L < r; ) {
            var o = I[L], c = u[o];
            (c === e || Et(c, BA[o]) && !rA.call(u, o)) && (u[o] = H[o]);
          }
        return u;
      }), Dc = pA(function(u) {
        return u.push(e, Qd), qe(zi, e, u);
      });
      function VA(u, a, B) {
        return u = u == null ? e : Qn(u, a), u === e ? B : u;
      }
      function _d(u, a) {
        return u != null && Lr(u, a, hn);
      }
      var Hc = gd(function(u, a, B) {
        u[a = a != null && typeof a.toString != "function" ? ze.call(a) : a] = B;
      }, Md(ft)), qi = gd(function(u, a, B) {
        a != null && typeof a.toString != "function" && (a = ze.call(a)), rA.call(u, a) ? u[a].push(B) : u[a] = [B];
      }, QA), gf = pA(rr);
      function Me(u) {
        return (At(u) ? eo : ed)(u);
      }
      function lt(u) {
        return At(u) ? eo(u, !0) : td(u);
      }
      var wf = ir(function(u, a, B) {
        oo(u, a, B);
      }), zi = ir(function(u, a, B, Q) {
        oo(u, a, B, Q);
      }), Sd = Jt(function(u, a) {
        var B = {};
        if (u != null) {
          var Q = !1;
          a = KA(a, function(H) {
            return H = Fn(H, u), Q = Q || 1 < H.length, H;
          }), Pt(u, _i(u), B), Q && (B = st(B, 7, xi));
          for (var F = a.length; F--; )
            Bt(B, a[F]);
        }
        return B;
      }), Qf = Jt(function(u, a) {
        return u == null ? {} : oc(B = u, a, function(Q, F) {
          return _d(B, F);
        });
        var B;
      });
      function yc(u, a) {
        var B;
        return u == null ? {} : (B = KA(_i(u), function(Q) {
          return [Q];
        }), a = QA(a), oc(u, B, function(Q, F) {
          return a(Q, F[0]);
        }));
      }
      var bc = Li(Me), me = Li(lt);
      function Ee(u) {
        return u == null ? [] : ri(u, Me(u));
      }
      var hf = Ir(function(u, a, B) {
        return a = a.toLowerCase(), u + (B ? Td(a) : a);
      });
      function Td(u) {
        return $i(JA(u).toLowerCase());
      }
      function Ic(u) {
        return (u = JA(u)) && u.replace(Gs, Wa).replace(Xs, "");
      }
      var Cf = Ir(function(u, a, B) {
        return u + (B ? "-" : "") + a.toLowerCase();
      }), vc = Ir(function(u, a, B) {
        return u + (B ? " " : "") + a.toLowerCase();
      }), Kc = fd("toLowerCase"), Lc = Ir(function(u, a, B) {
        return u + (B ? "_" : "") + a.toLowerCase();
      }), lu = Ir(function(u, a, B) {
        return u + (B ? " " : "") + $i(a);
      }), Ff = Ir(function(u, a, B) {
        return u + (B ? " " : "") + a.toUpperCase();
      }), $i = fd("toUpperCase");
      function Od(u, a, B) {
        return u = JA(u), (a = B ? e : a) === e ? (B = u, Ou.test(B) ? u.match(Ws) || [] : u.match(Vl) || []) : u.match(a) || [];
      }
      var xc = pA(function(u, a) {
        try {
          return qe(u, e, a);
        } catch (B) {
          return Kd(B) ? B : new cA(B);
        }
      }), Uf = Jt(function(u, a) {
        return ht(a, function(B) {
          B = Zt(B), fn(u, B, yd(u[B], u));
        }), u;
      });
      function Md(u) {
        return function() {
          return u;
        };
      }
      var pf = vr(), mf = vr(!0);
      function ft(u) {
        return u;
      }
      function Ko(u) {
        return uc(typeof u == "function" ? u : st(u, 1));
      }
      var _c = pA(function(u, a) {
        return function(B) {
          return rr(B, u, a);
        };
      }), Sc = pA(function(u, a) {
        return function(B) {
          return rr(u, B, a);
        };
      });
      function kd(u, a, B) {
        var Q = Me(a), F = hi(a, Q), H = (B != null || LA(a) && (F.length || !Q.length) || (B = a, a = u, u = this, F = hi(a, Me(a))), !(LA(B) && "chain" in B && !B.chain)), I = et(u);
        return ht(F, function(L) {
          var r = a[L];
          u[L] = r, I && (u.prototype[L] = function() {
            var o, c = this.__chain__;
            return H || c ? (((o = u(this.__wrapped__)).__actions__ = Qe(this.__actions__)).push({ func: r, args: arguments, thisArg: u }), o.__chain__ = c, o) : r.apply(u, $n([this.value()], arguments));
          });
        }), u;
      }
      function Lo() {
      }
      var Ef = ar(KA), Df = ar(Na), gt = ar(ti);
      function Aa(u) {
        return Fo(u) ? Vu(Zt(u)) : (a = u, function(B) {
          return Qn(B, a);
        });
        var a;
      }
      var Hf = wd(), yf = wd(!0);
      function xo() {
        return [];
      }
      function _o() {
        return !1;
      }
      var bf = fo(function(u, a) {
        return u + a;
      }, 0), If = vi("ceil"), vf = fo(function(u, a) {
        return u / a;
      }, 1), Tc = vi("floor"), Gd, Kf = fo(function(u, a) {
        return u * a;
      }, 1), Vd = vi("round"), Rd = fo(function(u, a) {
        return u - a;
      }, 0);
      return E.after = function(u, a) {
        if (typeof a != "function")
          throw new Y(n);
        return u = EA(u), function() {
          if (--u < 1)
            return a.apply(this, arguments);
        };
      }, E.ary = Hd, E.assign = ff, E.assignIn = xd, E.assignInWith = _t, E.assignWith = DA, E.at = Ec, E.before = Cc, E.bind = yd, E.bindAll = Uf, E.bindKey = Fc, E.castArray = function() {
        var u;
        return arguments.length ? CA(u = arguments[0]) ? u : [u] : [];
      }, E.chain = Ji, E.chunk = function(u, a, B) {
        a = (B ? he(u, a, B) : a === e) ? 1 : oe(EA(a), 0);
        var Q = u == null ? 0 : u.length;
        if (!Q || a < 1)
          return [];
        for (var F = 0, H = 0, I = N(Yu(Q / a)); F < Q; )
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
      }, E.constant = Md, E.countBy = uf, E.create = function(u, a) {
        return u = ru(u), a == null ? u : qa(u, a);
      }, E.curry = function u(a, B, Q) {
        return a = Lt(a, 8, e, e, e, e, e, B = Q ? e : B), a.placeholder = u.placeholder, a;
      }, E.curryRight = function u(a, B, Q) {
        return a = Lt(a, 16, e, e, e, e, e, B = Q ? e : B), a.placeholder = u.placeholder, a;
      }, E.debounce = yo, E.defaults = St, E.defaultsDeep = Dc, E.defer = bd, E.delay = Bf, E.difference = sn, E.differenceBy = se, E.differenceWith = TA, E.drop = function(u, a, B) {
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
          for ((L = EA(L)) < 0 && (L = F < -L ? 0 : F + L), (r = r === e || F < r ? F : EA(r)) < 0 && (r += F), r = r < L ? 0 : vo(r); L < r; )
            H[L++] = I;
          return H;
        }
        return [];
      }, E.filter = function(u, a) {
        return (CA(u) ? On : Ut)(u, QA(a, 3));
      }, E.flatMap = function(u, a) {
        return _e(Wi(u, a), 1);
      }, E.flatMapDeep = function(u, a) {
        return _e(Wi(u, a), 1 / 0);
      }, E.flatMapDepth = function(u, a, B) {
        return B = B === e ? 1 : EA(B), _e(Wi(u, a), B);
      }, E.flatten = Eo, E.flattenDeep = function(u) {
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
        return u == null ? [] : hi(u, Me(u));
      }, E.functionsIn = function(u) {
        return u == null ? [] : hi(u, lt(u));
      }, E.groupBy = hc, E.initial = function(u) {
        return u != null && u.length ? ct(u, 0, -1) : [];
      }, E.intersection = hA, E.intersectionBy = di, E.intersectionWith = Se, E.invert = Hc, E.invertBy = qi, E.invokeMap = Xi, E.iteratee = Ko, E.keyBy = df, E.keys = Me, E.keysIn = lt, E.map = Wi, E.mapKeys = function(u, a) {
        var B = {};
        return a = QA(a, 3), Re(u, function(Q, F, H) {
          fn(B, a(Q, F, H), Q);
        }), B;
      }, E.mapValues = function(u, a) {
        var B = {};
        return a = QA(a, 3), Re(u, function(Q, F, H) {
          fn(B, F, a(Q, F, H));
        }), B;
      }, E.matches = function(u) {
        return au(st(u, 1));
      }, E.matchesProperty = function(u, a) {
        return Fi(u, st(a, 1));
      }, E.memoize = Sr, E.merge = wf, E.mergeWith = zi, E.method = _c, E.methodOf = Sc, E.mixin = kd, E.negate = bo, E.nthArg = function(u) {
        return u = EA(u), pA(function(a) {
          return rd(a, u);
        });
      }, E.omit = Sd, E.omitBy = function(u, a) {
        return yc(u, bo(QA(a)));
      }, E.once = function(u) {
        return Cc(2, u);
      }, E.orderBy = function(u, a, B, Q) {
        return u == null ? [] : Ui(u, a = CA(a) ? a : a == null ? [] : [a], B = CA(B = Q ? e : B) ? B : B == null ? [] : [B]);
      }, E.over = Ef, E.overArgs = Yi, E.overEvery = Df, E.overSome = gt, E.partial = Io, E.partialRight = Id, E.partition = sf, E.pick = Qf, E.pickBy = yc, E.property = Aa, E.propertyOf = function(u) {
        return function(a) {
          return u == null ? e : Qn(u, a);
        };
      }, E.pull = kn, E.pullAll = qt, E.pullAllBy = function(u, a, B) {
        return u && u.length && a && a.length ? io(u, a, QA(B, 2)) : u;
      }, E.pullAllWith = function(u, a, B) {
        return u && u.length && a && a.length ? io(u, a, e, B) : u;
      }, E.pullAt = _r, E.range = Hf, E.rangeRight = yf, E.rearg = Uc, E.reject = function(u, a) {
        return (CA(u) ? On : Ut)(u, bo(QA(a, 3)));
      }, E.remove = function(u, a) {
        var B = [];
        if (u && u.length) {
          var Q = -1, F = [], H = u.length;
          for (a = QA(a, 3); ++Q < H; ) {
            var I = u[Q];
            a(I, Q, u) && (B.push(I), F.push(Q));
          }
          ud(u, F);
        }
        return B;
      }, E.rest = function(u, a) {
        if (typeof u != "function")
          throw new Y(n);
        return pA(u, a = a === e ? a : EA(a));
      }, E.reverse = Ni, E.sampleSize = function(u, a, B) {
        return a = (B ? he(u, a, B) : a === e) ? 1 : EA(a), (CA(u) ? _A : ac)(u, a);
      }, E.set = function(u, a, B) {
        return u == null ? u : du(u, a, B);
      }, E.setWith = function(u, a, B, Q) {
        return Q = typeof Q == "function" ? Q : e, u == null ? u : du(u, a, B, Q);
      }, E.shuffle = function(u) {
        return (CA(u) ? Dr : od)(u);
      }, E.slice = function(u, a, B) {
        var Q = u == null ? 0 : u.length;
        return Q ? (B = B && typeof B != "number" && he(u, a, B) ? (a = 0, Q) : (a = a == null ? 0 : EA(a), B === e ? Q : EA(B)), ct(u, a, B)) : [];
      }, E.sortBy = cf, E.sortedUniq = function(u) {
        return u && u.length ? su(u) : [];
      }, E.sortedUniqBy = function(u, a) {
        return u && u.length ? su(u, QA(a, 2)) : [];
      }, E.split = function(u, a, B) {
        return B && typeof B != "number" && he(u, a, B) && (a = B = e), (B = B === e ? f : B >>> 0) ? (u = JA(u)) && (typeof a == "string" || a != null && !zt(a)) && !(a = WA(a)) && Le(u) ? Rn(kt(u), 0, B) : u.split(a, B) : [];
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
        return LA(B) && (Q = "leading" in B ? !!B.leading : Q, F = "trailing" in B ? !!B.trailing : F), yo(u, a, { leading: Q, maxWait: a, trailing: F });
      }, E.thru = Do, E.toArray = Bu, E.toPairs = bc, E.toPairsIn = me, E.toPath = function(u) {
        return CA(u) ? KA(u, Zt) : SA(u) ? [u] : Qe(Gi(JA(u)));
      }, E.toPlainObject = Mr, E.transform = function(u, a, B) {
        var Q, F = CA(u), H = F || Oe(u) || Ae(u);
        return a = QA(a, 4), B == null && (Q = u && u.constructor, B = H ? F ? new Q() : [] : LA(u) && et(Q) ? ru(ii(u)) : {}), (H ? ht : Re)(u, function(I, L, r) {
          return a(B, I, L, r);
        }), B;
      }, E.unary = function(u) {
        return Hd(u, 1);
      }, E.union = Bc, E.unionBy = lc, E.unionWith = fc, E.uniq = function(u) {
        return u && u.length ? or(u) : [];
      }, E.uniqBy = function(u, a) {
        return u && u.length ? or(u, QA(a, 2)) : [];
      }, E.uniqWith = function(u, a) {
        return a = typeof a == "function" ? a : e, u && u.length ? or(u, e, a) : [];
      }, E.unset = function(u, a) {
        return u == null || Bt(u, a);
      }, E.unzip = Pi, E.unzipWith = mt, E.update = function(u, a, B) {
        return u == null ? u : dc(u, a, Cn(B));
      }, E.updateWith = function(u, a, B, Q) {
        return Q = typeof Q == "function" ? Q : e, u == null ? u : dc(u, a, Cn(B), Q);
      }, E.values = Ee, E.valuesIn = function(u) {
        return u == null ? [] : ri(u, lt(u));
      }, E.without = gc, E.words = Od, E.wrap = function(u, a) {
        return Io(Cn(a), u);
      }, E.xor = Af, E.xorBy = Dd, E.xorWith = ef, E.zip = tf, E.zipObject = function(u, a) {
        return dd(u || [], a || [], Ft);
      }, E.zipObjectDeep = function(u, a) {
        return dd(u || [], a || [], du);
      }, E.zipWith = nf, E.entries = bc, E.entriesIn = me, E.extend = xd, E.extendWith = _t, kd(E, E), E.add = bf, E.attempt = xc, E.camelCase = hf, E.capitalize = Td, E.ceil = If, E.clamp = function(u, a, B) {
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
      }, E.deburr = Ic, E.defaultTo = function(u, a) {
        return u == null || u != u ? a : u;
      }, E.divide = vf, E.endsWith = function(u, a, B) {
        u = JA(u), a = WA(a);
        var Q = u.length, Q = B = B === e ? Q : Hr(EA(B), 0, Q);
        return 0 <= (B -= a.length) && u.slice(B, Q) == a;
      }, E.eq = Et, E.escape = function(u) {
        return (u = JA(u)) && Ll.test(u) ? u.replace(jo, Ya) : u;
      }, E.escapeRegExp = function(u) {
        return (u = JA(u)) && Ol.test(u) ? u.replace(_a, "\\$&") : u;
      }, E.every = function(u, a, B) {
        return (CA(u) ? Na : $a)(u, QA(a = B && he(u, a, B) ? e : a, 3));
      }, E.find = of, E.findIndex = md, E.findKey = function(u, a) {
        return Gu(u, QA(a, 3), Re);
      }, E.findLast = af, E.findLastIndex = Ed, E.findLastKey = function(u, a) {
        return Gu(u, QA(a, 3), Qi);
      }, E.floor = Tc, E.forEach = wc, E.forEachRight = Qc, E.forIn = function(u, a) {
        return u == null ? u : wi(u, QA(a, 3), lt);
      }, E.forInRight = function(u, a) {
        return u == null ? u : ou(u, QA(a, 3), lt);
      }, E.forOwn = function(u, a) {
        return u && Re(u, QA(a, 3));
      }, E.forOwnRight = function(u, a) {
        return u && Qi(u, QA(a, 3));
      }, E.get = VA, E.gt = lf, E.gte = Zi, E.has = function(u, a) {
        return u != null && Lr(u, a, rc);
      }, E.hasIn = _d, E.head = Ri, E.identity = ft, E.includes = function(u, a, B, Q) {
        return u = At(u) ? u : Ee(u), B = B && !Q ? EA(B) : 0, Q = u.length, B < 0 && (B = oe(Q + B, 0)), Or(u) ? B <= Q && -1 < u.indexOf(a, B) : !!Q && -1 < XA(u, a, B);
      }, E.indexOf = function(u, a, B) {
        var Q = u == null ? 0 : u.length;
        return Q ? XA(u, a, u = (u = B == null ? 0 : EA(B)) < 0 ? oe(Q + u, 0) : u) : -1;
      }, E.inRange = function(u, a, B) {
        return a = $t(a), B === e ? (B = a, a = 0) : B = $t(B), (u = u = ie(u)) >= xe(a = a, B = B) && u < oe(a, B);
      }, E.invoke = gf, E.isArguments = mn, E.isArray = CA, E.isArrayBuffer = vd, E.isArrayLike = At, E.isArrayLikeObject = Ce, E.isBoolean = function(u) {
        return u === !0 || u === !1 || mA(u) && NA(u) == K;
      }, E.isBuffer = Oe, E.isDate = xt, E.isElement = function(u) {
        return mA(u) && u.nodeType === 1 && !Tr(u);
      }, E.isEmpty = function(u) {
        if (u != null) {
          if (At(u) && (CA(u) || typeof u == "string" || typeof u.splice == "function" || Oe(u) || Ae(u) || mn(u)))
            return !u.length;
          var a, B = pe(u);
          if (B == k || B == lA)
            return !u.size;
          if (cu(u))
            return !ed(u).length;
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
      }, E.isError = Kd, E.isFinite = function(u) {
        return typeof u == "number" && eu(u);
      }, E.isFunction = et, E.isInteger = FA, E.isLength = ji, E.isMap = Jn, E.isMatch = function(u, a) {
        return u === a || Ne(u, a, Wt(a));
      }, E.isMatchWith = function(u, a, B) {
        return B = typeof B == "function" ? B : e, Ne(u, a, Wt(a), B);
      }, E.isNaN = function(u) {
        return Dt(u) && u != +u;
      }, E.isNative = function(u) {
        if (Xe(u))
          throw new cA("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
        return Ci(u);
      }, E.isNil = function(u) {
        return u == null;
      }, E.isNull = function(u) {
        return u === null;
      }, E.isNumber = Dt, E.isObject = LA, E.isObjectLike = mA, E.isPlainObject = Tr, E.isRegExp = zt, E.isSafeInteger = function(u) {
        return FA(u) && -s <= u && u <= s;
      }, E.isSet = Ld, E.isString = Or, E.isSymbol = SA, E.isTypedArray = Ae, E.isUndefined = function(u) {
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
            return Yr(u, ni, F, !0);
        }
        return -1;
      }, E.lowerCase = vc, E.lowerFirst = Kc, E.lt = pc, E.lte = mc, E.max = function(u) {
        return u && u.length ? wn(u, ft, ro) : e;
      }, E.maxBy = function(u, a) {
        return u && u.length ? wn(u, QA(a, 2), ro) : e;
      }, E.mean = function(u) {
        return qs(u, ft);
      }, E.meanBy = function(u, a) {
        return qs(u, QA(a, 2));
      }, E.min = function(u) {
        return u && u.length ? wn(u, ft, yr) : e;
      }, E.minBy = function(u, a) {
        return u && u.length ? wn(u, QA(a, 2), yr) : e;
      }, E.stubArray = xo, E.stubFalse = _o, E.stubObject = function() {
        return {};
      }, E.stubString = function() {
        return "";
      }, E.stubTrue = function() {
        return !0;
      }, E.multiply = Kf, E.nth = function(u, a) {
        return u && u.length ? rd(u, EA(a)) : e;
      }, E.noConflict = function() {
        return Ve._ === this && (Ve._ = $r), this;
      }, E.noop = Lo, E.now = Ho, E.pad = function(u, a, B) {
        u = JA(u);
        var Q = (a = EA(a)) ? qr(u) : 0;
        return !a || a <= Q ? u : dr(mr(a = (a - Q) / 2), B) + u + dr(Yu(a), B);
      }, E.padEnd = function(u, a, B) {
        u = JA(u);
        var Q = (a = EA(a)) ? qr(u) : 0;
        return a && Q < a ? u + dr(a - Q, B) : u;
      }, E.padStart = function(u, a, B) {
        u = JA(u);
        var Q = (a = EA(a)) ? qr(u) : 0;
        return a && Q < a ? dr(a - Q, B) + u : u;
      }, E.parseInt = function(u, a, B) {
        return a = B || a == null ? 0 : a && +a, li(JA(u).replace(qo, ""), a || 0);
      }, E.random = function(u, a, B) {
        var Q;
        return B && typeof B != "boolean" && he(u, a, B) && (a = B = e), B === e && (typeof a == "boolean" ? (B = a, a = e) : typeof u == "boolean" && (B = u, u = e)), u === e && a === e ? (u = 0, a = 1) : (u = $t(u), a === e ? (a = u, u = 0) : a = $t(a)), a < u && (Q = u, u = a, a = Q), B || u % 1 || a % 1 ? (Q = fi(), xe(u + Q * (a - u + jl("1e-" + ((Q + "").length - 1))), a)) : pi(u, a);
      }, E.reduce = function(u, a, B) {
        var Q = CA(u) ? at : Ja, F = arguments.length < 3;
        return Q(u, QA(a, 4), B, F, Vn);
      }, E.reduceRight = function(u, a, B) {
        var Q = CA(u) ? zl : Ja, F = arguments.length < 3;
        return Q(u, QA(a, 4), B, F, gn);
      }, E.repeat = function(u, a, B) {
        return a = (B ? he(u, a, B) : a === e) ? 1 : EA(a), mi(JA(u), a);
      }, E.replace = function() {
        var u = arguments, a = JA(u[0]);
        return u.length < 3 ? a : a.replace(u[1], u[2]);
      }, E.result = function(u, a, B) {
        var Q = -1, F = (a = Fn(a, u)).length;
        for (F || (F = 1, u = e); ++Q < F; ) {
          var H = u == null ? e : u[Zt(a[Q])];
          H === e && (Q = F, H = B), u = et(H) ? H.call(u) : H;
        }
        return u;
      }, E.round = Vd, E.runInContext = V, E.sample = function(u) {
        return (CA(u) ? Kt : ic)(u);
      }, E.size = function(u) {
        var a;
        return u == null ? 0 : At(u) ? Or(u) ? qr(u) : u.length : (a = pe(u)) == k || a == lA ? u.size : ed(u).length;
      }, E.snakeCase = Lc, E.some = function(u, a, B) {
        return (CA(u) ? ti : bA)(u, QA(a = B && he(u, a, B) ? e : a, 3));
      }, E.sortedIndex = function(u, a) {
        return Di(u, a);
      }, E.sortedIndexBy = function(u, a, B) {
        return id(u, a, QA(B, 2));
      }, E.sortedIndexOf = function(u, a) {
        var B = u == null ? 0 : u.length;
        if (B) {
          var Q = Di(u, a);
          if (Q < B && Et(u[Q], a))
            return Q;
        }
        return -1;
      }, E.sortedLastIndex = function(u, a) {
        return Di(u, a, !0);
      }, E.sortedLastIndexBy = function(u, a, B) {
        return id(u, a, QA(B, 2), !0);
      }, E.sortedLastIndexOf = function(u, a) {
        if (u != null && u.length) {
          var B = Di(u, a, !0) - 1;
          if (Et(u[B], a))
            return B;
        }
        return -1;
      }, E.startCase = lu, E.startsWith = function(u, a, B) {
        return u = JA(u), B = B == null ? 0 : Hr(EA(B), 0, u.length), a = WA(a), u.slice(B, B + a.length) == a;
      }, E.subtract = Rd, E.sum = function(u) {
        return u && u.length ? Zr(u, ft) : 0;
      }, E.sumBy = function(u, a) {
        return u && u.length ? Zr(u, QA(a, 2)) : 0;
      }, E.template = function(u, a, c) {
        var Q, F, r = E.templateSettings;
        c && he(u, a, c) && (a = e), u = JA(u), a = _t({}, a, r, sc);
        var H = Me(c = _t({}, a.imports, r.imports, sc)), I = ri(c, H), L = 0, r = a.interpolate || zo, o = "__p += '", c = an((a.escape || zo).source + "|" + r.source + "|" + (r === xa ? Nl : zo).source + "|" + (a.evaluate || zo).source + "|$", "g"), g = "//# sourceURL=" + (rA.call(a, "sourceURL") ? (a.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ka + "]") + `
`;
        if (u.replace(c, function(C, U, D, y, b, x) {
          return D = D || y, o += u.slice(L, x).replace(Zl, $s), U && (Q = !0, o += `' +
__e(` + U + `) +
'`), b && (F = !0, o += `';
` + b + `;
__p += '`), D && (o += `' +
((__t = (` + D + `)) == null ? '' : __t) +
'`), L = x + C.length, C;
        }), o += `';
`, r = rA.call(a, "variable") && a.variable) {
          if (Ta.test(r))
            throw new cA("Invalid `variable` option passed into `_.template`");
        } else
          o = `with (obj) {
` + o + `
}
`;
        if (o = (F ? o.replace(Ia, "") : o).replace(va, "$1").replace(Ka, "$1;"), o = "function(" + (r || "obj") + `) {
` + (r ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (Q ? ", __e = _.escape" : "") + (F ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + o + `return __p
}`, (c = xc(function() {
          return fA(H, g + "return " + o).apply(e, I);
        })).source = o, Kd(c))
          throw c;
        return c;
      }, E.times = function(u, a) {
        if ((u = EA(u)) < 1 || s < u)
          return [];
        var B = f, Q = xe(u, f);
        for (a = QA(a), u -= f, Q = tr(Q, a); ++B < u; )
          a(B);
        return Q;
      }, E.toFinite = $t, E.toInteger = EA, E.toLength = vo, E.toLower = function(u) {
        return JA(u).toLowerCase();
      }, E.toNumber = ie, E.toSafeInteger = function(u) {
        return u ? Hr(EA(u), -s, s) : u === 0 ? u : 0;
      }, E.toString = JA, E.toUpper = function(u) {
        return JA(u).toUpperCase();
      }, E.trim = function(u, a, B) {
        return (u = JA(u)) && (B || a === e) ? zs(u) : u && (a = WA(a)) ? Rn(B = kt(u), ui(B, a = kt(a)), Xa(B, a) + 1).join("") : u;
      }, E.trimEnd = function(u, a, B) {
        return (u = JA(u)) && (B || a === e) ? u.slice(0, Ac(u) + 1) : u && (a = WA(a)) ? Rn(B = kt(u), 0, Xa(B, kt(a)) + 1).join("") : u;
      }, E.trimStart = function(u, a, B) {
        return (u = JA(u)) && (B || a === e) ? u.replace(qo, "") : u && (a = WA(a)) ? Rn(B = kt(u), ui(B, kt(a))).join("") : u;
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
              for ((B = B.global ? B : an(B.source, JA(ks.exec(B)) + "g")).lastIndex = 0; L = B.exec(r); )
                var o = L.index;
              I = I.slice(0, o === e ? F : o);
            }
          } else
            u.indexOf(WA(B), F) != F && -1 < (H = I.lastIndexOf(B)) && (I = I.slice(0, H));
        return I + Q;
      }, E.unescape = function(u) {
        return (u = JA(u)) && La.test(u) ? u.replace(Zo, zr) : u;
      }, E.uniqueId = function(u) {
        var a = ++Pu;
        return JA(u) + a;
      }, E.upperCase = Ff, E.upperFirst = $i, E.each = wc, E.eachRight = Qc, E.first = Ri, kd(E, (Gd = {}, Re(E, function(u, a) {
        rA.call(E.prototype, a) || (Gd[a] = u);
      }), Gd), { chain: !1 }), E.VERSION = "4.17.21", ht(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(u) {
        E[u].placeholder = E;
      }), ht(["drop", "take"], function(u, a) {
        xA.prototype[u] = function(B) {
          B = B === e ? 1 : oe(EA(B), 0);
          var Q = this.__filtered__ && !a ? new xA(this) : this.clone();
          return Q.__filtered__ ? Q.__takeCount__ = xe(B, Q.__takeCount__) : Q.__views__.push({ size: xe(B, f), type: u + (Q.__dir__ < 0 ? "Right" : "") }), Q;
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
        return this.filter(bo(QA(u)));
      }, xA.prototype.slice = function(u, a) {
        u = EA(u);
        var B = this;
        return B.__filtered__ && (0 < u || a < 0) ? new xA(B) : (u < 0 ? B = B.takeRight(-u) : u && (B = B.drop(u)), B = a !== e ? (a = EA(a)) < 0 ? B.dropRight(-a) : B.take(a - u) : B);
      }, xA.prototype.takeRightWhile = function(u) {
        return this.reverse().takeWhile(u).reverse();
      }, xA.prototype.toArray = function() {
        return this.take(f);
      }, Re(xA.prototype, function(u, a) {
        var B = /^(?:filter|find|map|reject)|While$/.test(a), Q = /^(?:head|last)$/.test(a), F = E[Q ? "take" + (a == "last" ? "Right" : "") : a], H = Q || /^find/.test(a);
        F && (E.prototype[a] = function() {
          function I(y) {
            return y = F.apply(E, $n([y], o)), Q && g ? y[0] : y;
          }
          var L, r = this.__wrapped__, o = Q ? [1] : arguments, D = r instanceof xA, C = o[0], c = D || CA(r), g = (c && B && typeof C == "function" && C.length != 1 && (D = c = !1), this.__chain__), C = !!this.__actions__.length, U = H && !g, D = D && !C;
          return !H && c ? (r = D ? r : new xA(this), (L = u.apply(r, o)).__actions__.push({ func: Do, args: [I], thisArg: e }), new Gt(L, g)) : U && D ? u.apply(this, o) : (L = this.thru(I), U ? Q ? L.value()[0] : L.value() : L);
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
      }), tu[lo(e, 2).name] = [{ name: "wrapper", func: e }], xA.prototype.clone = function() {
        var u = new xA(this.__wrapped__);
        return u.__actions__ = Qe(this.__actions__), u.__dir__ = this.__dir__, u.__filtered__ = this.__filtered__, u.__iteratees__ = Qe(this.__iteratees__), u.__takeCount__ = this.__takeCount__, u.__views__ = Qe(this.__views__), u;
      }, xA.prototype.reverse = function() {
        var u;
        return this.__filtered__ ? ((u = new xA(this)).__dir__ = -1, u.__filtered__ = !0) : (u = this.clone()).__dir__ *= -1, u;
      }, xA.prototype.value = function() {
        var u = this.__wrapped__.value(), a = this.__dir__, B = CA(u), Q = a < 0, F = B ? u.length : 0, H = function(T, O, R) {
          for (var W = -1, Z = R.length; ++W < Z; ) {
            var uA = R[W], q = uA.size;
            switch (uA.type) {
              case "drop":
                T += q;
                break;
              case "dropRight":
                O -= q;
                break;
              case "take":
                O = xe(O, T + q);
                break;
              case "takeRight":
                T = oe(T, O - q);
            }
          }
          return { start: T, end: O };
        }(0, F, this.__views__), I = H.start, L = (H = H.end) - I, r = Q ? H : I - 1, o = this.__iteratees__, c = o.length, g = 0, C = xe(L, this.__takeCount__);
        if (!B || !Q && F == L && C == L)
          return Hi(u, this.__actions__);
        var U = [];
        A:
          for (; L-- && g < C; ) {
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
            U[g++] = y;
          }
        return U;
      }, E.prototype.at = rf, E.prototype.chain = function() {
        return Ji(this);
      }, E.prototype.commit = function() {
        return new Gt(this.value(), this.__chain__);
      }, E.prototype.next = function() {
        this.__values__ === e && (this.__values__ = Bu(this.value()));
        var u = this.__index__ >= this.__values__.length;
        return { done: u, value: u ? e : this.__values__[this.__index__++] };
      }, E.prototype.plant = function(u) {
        for (var a, F = this; F instanceof gi; )
          var B = Vi(F), Q = (B.__index__ = 0, B.__values__ = e, a ? Q.__wrapped__ = B : a = B, B), F = F.__wrapped__;
        return Q.__wrapped__ = u, a;
      }, E.prototype.reverse = function() {
        var u = this.__wrapped__;
        return u instanceof xA ? (u = u, (u = (u = this.__actions__.length ? new xA(this) : u).reverse()).__actions__.push({ func: Do, args: [Ni], thisArg: e }), new Gt(u, this.__chain__)) : this.thru(Ni);
      }, E.prototype.toJSON = E.prototype.valueOf = E.prototype.value = function() {
        return Hi(this.__wrapped__, this.__actions__);
      }, E.prototype.first = E.prototype.head, Xu && (E.prototype[Xu] = function() {
        return this;
      }), E;
    }();
    GA ? ((GA.exports = nr)._ = nr, RA._ = nr) : Ve._ = nr;
  }).call(Pd);
})(BU, ul);
const lU = ul;
function v0(s, A) {
  var e, n, i, d = { "\\rightarrow": "->", "\\leftarrow": "<-", "\\rightleftarrow": "<=>", "\\leftrightarrow": "<->" }, s = s.split("\\limits^");
  return A === 2 ? (n = s[0], i = s[1].split("}_{")[0].slice(1), e = s[1].split("}_{")[1].slice(0, s[1].split("}_{")[1].length - 1), n === "=" ? `\\ce{\\xlongequal[{${e}}]{${e}}}` : `\\ce{${d[n]}[{${i}}][{${e}}]}`) : A === 3 ? (n = s[0], i = s[1].split("{")[1].split("}")[0], n === "=" ? `\\ce{\\xlongequal{${i}}}` : `\\ce{${d[n]}[{${i}}]}`) : "";
}
function fU(t) {
  return t.replace(/((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}_\{[^}]+\}/g, (A) => v0(A, 2)).replace(/((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}/g, (A) => v0(A, 3));
}
const K0 = { "@": "æ", "u\\.\\.\\(r\\)": "{ʊə}^{r}", "\\.\\.": "ə", oi: "ɔɪ", ai: "aɪ", ei: "eɪ", "e(?!:)": "e", "e:": "ɜː", "\\(r\\)": "^{r}", "(![pr|\\\\underl])i(?![:|me])": "ɪ", "i:": "iː", "o(?!:)": "ɒ", "o:": "ɔː", au: "aʊ", Ou: "əʊ", "(.*!(\\\\))u(?!:)": "ʊ", "u:": "uː", ":": "ː", N: "ŋ", tS: "tʃ", S: "ʃ", th: "θ", TH: "ð", dZ: "dʒ", Z: "ʒ", prime: "prime" };
function gU(t) {
  return t.replace(/\\\[\\phonetic\{.*?\}\\\]/g, (A) => {
    let e = A.split("\\phonetic").join("");
    for (let n in K0)
      e = e.replace(new RegExp(n, "g"), (i) => K0[n]);
    return e.replaceAll("\\^", "\\wedge");
  });
}
function wU(t) {
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
function QU(t) {
  return t.replace(/\\romannumeral\{\d+\}/g, (A) => `\\mathsf{${L0(A)}}`).replace(/\\RomanNumeralCaps\{\d+\}/g, (A) => `\\mathsf{${L0(A, "RomanNumeralCaps")}}`);
}
function hU(t) {
  const A = Array.from(t.matchAll(/[.,'"!\*\/\?、。;:]/g)), e = /\\style\{([\w-]+:[\w\d-]+;*)+\}/g, n = /((\\rightleftarrow)|(\\leftrightarrow)|(\\rightarrow)|(\\leftarrow)|(\=))\\limits\^\{[^}]+\}_\{[^}]+\}/g, i = /\\underline\{.*?\}/g, d = /\_\{.*?\}/g, s = /\^\{.*?\}/g, l = /\}[.,'"!\*\/\?、。;:]/g, f = /\\\[\\phonetic\{.*?\}\\\]/g, h = /\\uwave\{.*?\}/g, w = /\\blank\{.+?\}\{\d+\/\d+\/(A|B|L)\}/g;
  return A.forEach((p, K) => {
    let _ = !0;
    t.charAt(p.index - 1) === `
` && (_ = !1), t.charAt(p.index + 1) !== "^" && t.charAt(p.index + 1) !== "_" || (_ = !1);
    var J = Array.from(t.matchAll(e)).concat(Array.from(t.matchAll(n))), S = Array.from(t.matchAll(i)).map(($) => [$.index, $.index + $[0].length]), v = Array.from(t.matchAll(d)).map(($) => [$.index, $.index + $[0].length]), M = Array.from(t.matchAll(s)).map(($) => [$.index, $.index + $[0].length]), k = Array.from(t.matchAll(l)).map(($) => [$.index, $.index + $[0].length]), X = Array.from(t.matchAll(f)).map(($) => [$.index, $.index + $[0].length]), iA = Array.from(t.matchAll(h)).map(($) => [$.index, $.index + $[0].length]), z = Array.from(t.matchAll(w)).map(($) => [$.index, $.index + $[0].length]), J = J.map(($) => [$.index, $.index + $[0].length]).concat(S).concat(v).concat(M).concat(k).concat(X).concat(iA).concat(z);
    if ((K < A.length - 1 && p.index + 1 === A[K + 1].index || 1 < K && p.index - 1 === A[K - 1].index) && (_ = !1), _ = -1 < J.findIndex(($) => p.index >= $[0] && p.index <= $[1]) ? !1 : _) {
      var lA = p[0];
      let $ = `_\\class{mjx-kz-sub}{${lA}}`;
      ["'", '"'].includes(lA) && ($ = `^\\class{mjx-kz-sup}{${lA}}`), t = t.substring(0, p.index) + $ + t.substring(p.index + 1);
      for (let vA = K + 1; vA < A.length; vA++)
        A[vA].index += $.length - lA.length;
    }
  }), t;
}
function CU(t) {
  return t.replace(/\'/g, "\\textasciiacute{}").replace(/\"/g, "\\textacutedbl{}").replace(/\“/g, "\\textquotedblleft{}").replace(/\”/g, "\\textquotedblright{}");
}
function FU(t) {
  return t.replace(/(\\hand(?![a-zA-Z]))|(\\mix)|(\\deletion)|(\\insert)|(\\wrong)|(\\chnfield)|(\\engfield)|(<s>)|(<\/s>)|(<unk>)/g, (A) => " ");
}
function UU(t) {
  return t.replace(/\\tab\{\d+\}/g, (A) => {
    var e = Number(A.split("\\tab{")[1].split("}")[0]);
    let n = "";
    for (let i = 0; i < e; i++)
      n += "\\;\\;";
    return n;
  }).replace(/\\tab(?!le)/g, "\\;\\;");
}
function pU(t) {
  return t.replace(/[^\S\r]+/g, "\\;\\;");
}
function mU(t) {
  return t.replace(/(\<)|(\\prime)|(\\alpha)|(\\Alpha)|(\\beta)|(\\Beta)|(\\gamma)|(\\Gamma)|(\\delta)|(\\Delta)|(\\epsilon)|(\\Epsilon)|(\\zeta)|(\\Zeta)|(\\eta)|(\\Eta)|(\\theta)|(\\Theta)|(\\iota)|(\\Iota)|(\\kappa)|(\\Kappa)|(\\lambda)|(\\Lambda)|(\\mu)|(\\Mu)|(\\nu)|(\\Nu)|(\\xi)|(\\Xi)|(\\omicron)|(\\Omicron)|(\\pi)|(\\Pi)|(\\rho)|(\\Rho)|(\\sigma)|(\\Sigma)|(\\tau)|(\\Tau)|(\\upsilon)|(\\Upsilon)|(\\phi)|(\\Phi)|(\\chi)|(\\Chi)|(\\psi)|(\\Psi)|(\\omega)|(\\Omega)|(\\pm(?!od))|(\\mp)|(\\times)|(\\div)|(\\mid)|(\\prod)|(\\sum(?!\_))|(\\approx(?!eq))|(\\leq)|(\\geq)|(\\neq(?!uiv))|(\\equiv)|(\\propto)|(\\napprox)|(\\nleq)|(\\ngeq)|(\\nequiv)|(\\angle)|(\\cong)|(\\sim)|(\\parallel(?!ogram)(?!equal))|(\\parallelogram)|(\\parallelequal)|(\\perp)|(\\nparallel)|(\\cdots)|(\\ddots)|(\\vdots)|(\\lor)|(\\land)|(\\lnot)|(\\forall)|(\\exists)|(\\top)|(\\bot)|(\\cup)|(\\cap)|(\\subset(?!(neq|eq)))|(\\supset(?!neq|eq))|(\\notin)|(\\ni)|(\\notni)|(\\emptyset)|(\\complement)|(\\subseteq)|(\\supseteq(?!eq))|(\\nsubset(?!eq))|(\\nsupset(?!eq))|(\\subsetneq)|(\\supsetneq)|(\\nsubseteq)|(\\nsupseteq)|(\\infty)|(\\partial)|(\\Re)|(\\lg)|(\\lim(?!its))|(\\ln)|(\\max)|(\\min)|(\\sin)|(\\cos)|(\\tan)|(\\sec)|(\\cot)|(\\csc)|(\\arcsin)|(\\arccos)|(\\arctan)|(\\arccot(?!angent))|(\\arcsec)|(\\arccsc)|(\\Leftarrow(?!\\limits))|(\\leftarrow(?!\\limits))|(\\Rightarrow(?!\\limits))|(\\rightarrow(?!\\limits))|(\\Uparrow)|(\\uparrow)|(\\Downarrow)|(\\downarrow)|(\\Leftrightarrow(?!\\limits))|(\\leftrightarrow(?!\\limits))|(\\Updownarrow)|(\\updownarrow)|(\\NEarrow)|(\\nearrow)|(\\NWarrow)|(\\nwarrow)|(\\SEarrow)|(\\searrow)|(\\SWarrow)|(\\swarrow)|(\\hookleftarrow)|(\\odot)|(\\ominus)|(\\oplus)|(\\otimes)|(\\oiiint)|(\\oiint)|(\\oint)|(\\diamond)|(\\square)|(\\rectangle)|(\\star)|(\\bigstar)|(\\triangle(?!down))|(\\triangledown)|(\\heart(?!suit))|(\\bullet)|(\\female)|(\\male)|(\\smiley)|(\\spadesuit)|(\\clubsuit)|(\\blackdiamond)|(\\blacksquare)|(\\blackrectangle)|(\\blackstar)|(\\blacktriangle(?!down))|(\\blacktriangledown)|(\\blackheart)|(\\textperthousand)|(\\textreferencemark)|(\\textregistered)|(\\textsection)|(\\texttrademark)|(\\cdot)|(\\because)|(\\therefore)|(\\chi)|(\\circledcirc)|(\\circ)|(\\xmark)|(\\cmark)|(\\in(?!(t|sert)))|(\\omitted)/g, (A) => A + "\\,");
}
function EU(t) {
  return t.replace(/\n\[/g, (A) => "\\\\\\[");
}
function DU(t) {
  return t.replace(/\*/g, "{*}").replace(/\n/g, "\\\\");
}
function HU(t) {
  return t.replace(/\\left\\{/g, (A) => "\\left\\{\\begin{array}{l}" + A.split("\\left\\{")[1]).replace(/\\right\\}/g, (A) => A.split("\\right\\}")[0] + "\\end{array}\\right.");
}
function yU(t) {
  return t.replace(/\\reverse\{.*?\}\{.*?\}/g, (A) => {
    var e = A.split("}{")[0].split("\\reverse{")[1];
    return "" + A.split("}{")[1].split("}")[0] + e;
  });
}
function bU(t) {
  return t.replace(/\\parallel(?!ogram)(?!equal)/g, (A) => `\\class{parallel}{${A}}`);
}
const x0 = { A: 2, B: 0, L: 1 };
function IU(t, A) {
  return t.replace(/\\blank\{.+?\}\{\d+\/\d+\/(A|B|L)\}/g, (e) => {
    var n = e.match(/\\blank\{/), n = ((n == null ? void 0 : n.index) || 0) + (n[(n == null ? void 0 : n.index) || 0].length || 0), d = e.match(/\{\d+\/\d+\/(A|B|L)\}/), i = (d == null ? void 0 : d.index) || 0, d = d[0].slice(1, d[0].length - 1).split("/"), s = ((s = (s = MathJax == null ? void 0 : MathJax.config) == null ? void 0 : s.tex) == null ? void 0 : s.formatError) || ((s = MathJax == null ? void 0 : MathJax.tex) == null ? void 0 : s.formatError);
    return d[0] === "0" ? (s("", new Error("blank sign questionSubIdx should startwith 1")), e) : d[1] === "0" ? (s("", new Error("blank sign blankIdx should startwith 1")), e) : (n = e.slice(n, i - 1)).includes("\\blank") ? (s("", new Error("blank sign don't support nest")), e) : (e = `\\class{kbs i_${(i = parseInt(d[0])) - 1}_${(s = parseInt(d[1])) - 1}_${x0[d[2]]}}{\\,}`, i = `\\class{kbe i_${i - 1}_${s - 1}_${x0[d[2]]}}{\\,}`, s = A == null ? void 0 : A.blankLight, d[2] === "A" ? e + (s ? "\\class{bk_lg_1}{" : "") + n + (s ? "}" : "") + i + "{}" : e + (s ? "\\class{bk_lg_2}{" : "") + n + (s ? "}" : "") + i + "{}");
  });
}
function vU(t) {
  return t.replace(/\\underline\{.*?\}/g, (A) => {
    var e = A.split("\\underline{")[1];
    return e.split("}").length === 2 && 16 < e.split("}")[0].length ? "\\class{mjx-kz-underline}{{}" + e : A;
  });
}
function KU(t) {
  let A = 0;
  for (let e = 0; e < t.length; e++)
    /[^\x00-\xff]/.test(t.substr(e, 1)) || [",", ".", "'", " "].includes(t.substr(e, 1)) ? A += 2.2 : A += 1;
  return A;
}
function LU(t) {
  return t.replace(/\\uwave\{.*?\}/g, (e) => {
    var e = e.split("\\uwave{")[1].split("}")[0], n = [], i = Math.floor(KU(e));
    for (let d = 0; d < i; d++)
      n.push("\\thicksim");
    return `\\underset{\\class{wave}{${n.join("\\!")}}}{${e}}`;
  });
}
function xU(t) {
  return t.replace(/\\_(\{\d+\})/g, (A) => {
    let e = "";
    var n = Number(A.split("_{")[1].split("}")[0]);
    for (let i = 0; i < Number(n); i++)
      e += "\\_";
    return e;
  });
}
function _U(t, A) {
  return t.replace(/(\\_)+/g, (e) => {
    var n = e.split("\\").length - 1;
    return A.lineOuterMax && n <= A.lineOuterMax ? `{${e}}` : e;
  });
}
class SU {
  constructor(A, e) {
    pa(this, "content"), pa(this, "options"), this.content = A, this.options = e;
  }
  formatUnderline() {
    return this.content = vU(this.content), this;
  }
  formatDeleteBySign() {
    return this.content = FU(this.content), this;
  }
  formatMultipleTab() {
    return this.content = UU(this.content), this;
  }
  formatAloneSign() {
    return this.content = mU(this.content), this;
  }
  formatOrder() {
    return this.content = QU(this.content), this;
  }
  formatLimits() {
    return this.content = fU(this.content), this;
  }
  formatMiddleBrackets() {
    return this.content = EU(this.content), this;
  }
  formatLineBreak() {
    return this.content = DU(this.content), this;
  }
  formatSimultaneous() {
    return this.content = HU(this.content), this;
  }
  formatPhonetic() {
    return this.content = gU(this.content), this;
  }
  formatQuotes() {
    return this.content = CU(this.content), this;
  }
  formatUwave() {
    return this.content = LU(this.content), this;
  }
  formatReverse() {
    return this.content = yU(this.content), this;
  }
  formatMultipleLine() {
    return this.content = xU(this.content), this;
  }
  formatFourlineRuled() {
    return this.content = wU(this.content), this;
  }
  formatSpace() {
    return this.content = pU(this.content), this;
  }
  formatLineWapper() {
    return this.options && (this.content = _U(this.content, this.options)), this;
  }
  formatItParallel() {
    return this.content = bU(this.content), this;
  }
  formatBlankSign() {
    return this.content = IU(this.content, this.options), this;
  }
}
function TU(t, A) {
  return t = new SU(t, A), t.formatUnderline().formatDeleteBySign().formatMultipleTab().formatAloneSign().formatOrder().formatLimits().formatMiddleBrackets().formatLineBreak().formatSimultaneous().formatPhonetic().formatUwave().formatQuotes().formatReverse().formatMultipleLine().formatFourlineRuled().formatSpace().formatLineWapper().formatItParallel().formatBlankSign(), t.content;
}
const ce = "xregexp", Ro = { astral: !1, namespacing: !0 }, cr = {};
let Jd = {}, wa = {};
const vg = [], Ea = "default", _0 = "class", OU = { default: /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/, class: /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/ }, MU = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g, kU = /()??/.exec("")[1] === void 0, GU = /x/.flags !== void 0;
function Ss(t) {
  let A = !0;
  try {
    new RegExp("", t), t === "y" && ".a".replace(new RegExp("a", "gy"), ".") === ".." && (A = !1);
  } catch {
    A = !1;
  }
  return A;
}
const VU = Ss("d"), g0 = Ss("s"), dh = Ss("u"), Kg = Ss("y"), sh = { d: VU, g: !0, i: !0, m: !0, s: g0, u: dh, y: Kg }, RU = g0 ? /[^dgimsuy]+/g : /[^dgimuy]+/g;
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
function bs(t) {
  return t.replace(/([\s\S])(?=[\s\S]*\1)/g, "");
}
function Vo(t, A) {
  if (!eA.isRegExp(t))
    throw new TypeError("Type RegExp expected");
  var e = t[ce] || {};
  let n = NU(t), i = "", d = "", s = null, l = null;
  return (A = A || {}).removeG && (d += "g"), A.removeY && (d += "y"), d && (n = n.replace(new RegExp(`[${d}]+`, "g"), "")), A.addG && (i += "g"), A.addY && (i += "y"), i && (n = bs(n + i)), A.isInternalOnly || (e.source !== void 0 && (s = e.source), e.flags != null && (l = i ? bs(e.flags + i) : e.flags)), t = ch(new RegExp(A.source || t.source, n), PU(t) ? e.captureNames.slice(0) : null, s, l, A.isInternalOnly);
}
function S0(t) {
  return parseInt(t, 16);
}
function T0(t, A, e) {
  var n = t.index + t[0].length, i = t.input[t.index - 1], d = t.input[n];
  return /^[()|]$/.test(i) || /^[()|]$/.test(d) || t.index === 0 || n === t.input.length || /\(\?(?:[:=!]|<[=!])$/.test(t.input.substring(t.index - 4, t.index)) || JU(t.input, n, e) ? "" : "(?:)";
}
function NU(t) {
  return GU ? t.flags : /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(t))[1];
}
function PU(t) {
  return !(!t[ce] || !t[ce].captureNames);
}
function Sf(t) {
  return parseInt(t, 10).toString(16);
}
function JU(t, A, e) {
  var n = "\\(\\?#[^)]*\\)", i = "[?*+]|{\\d+(?:,\\d*)?}";
  return (e.includes("x") ? new RegExp(`^(?:\\s|#[^#\\n]*|${n})*(?:${i})`) : new RegExp(`^(?:${n})*(?:${i})`)).test(t.slice(A));
}
function jB(t, A) {
  return Object.prototype.toString.call(t) === `[object ${A}]`;
}
function na(t) {
  if (t == null)
    throw new TypeError("Cannot convert null or undefined to object");
  return t;
}
function Tf(t) {
  for (; t.length < 4; )
    t = "0" + t;
  return t;
}
function XU(t, A) {
  if (bs(A) !== A)
    throw new SyntaxError("Invalid duplicate regex flag " + A);
  t = t.replace(/^\(\?([\w$]+)\)/, (e, n) => {
    if (/[dgy]/.test(n))
      throw new SyntaxError("Cannot use flags dgy in mode modifier " + e);
    return A = bs(A + n), "";
  });
  for (const e of A)
    if (!sh[e])
      throw new SyntaxError("Unknown regex flag " + e);
  return { pattern: t, flags: A };
}
function O0(t) {
  const A = {};
  return jB(t, "String") ? (eA.forEach(t, /[^\s,]+/, (e) => {
    A[e] = !0;
  }), A) : t;
}
function M0(t) {
  if (!/^[\w$]$/.test(t))
    throw new Error("Flag must be a single character A-Za-z0-9_$");
  sh[t] = !0;
}
function WU(t, A, e, n, i) {
  let d = vg.length;
  var s = t[e];
  let l = null, f, h;
  for (; d--; )
    if (!((h = vg[d]).leadChar && h.leadChar !== s || h.scope !== n && h.scope !== "all" || h.flag && !A.includes(h.flag)) && (f = eA.exec(t, h.regex, e, "sticky"))) {
      l = { matchLength: f[0].length, output: h.handler.call(i, f, n, A), reparse: h.reparse };
      break;
    }
  return l;
}
function k0(t) {
  Ro.astral = t;
}
function G0(t) {
  Ro.namespacing = t;
}
function eA(t, A) {
  if (eA.isRegExp(t)) {
    if (A !== void 0)
      throw new TypeError("Cannot supply flags when copying a RegExp");
    return Vo(t);
  }
  if (t = t === void 0 ? "" : String(t), A = A === void 0 ? "" : String(A), eA.isInstalled("astral") && !A.includes("A") && (A += "A"), wa[t] || (wa[t] = {}), !wa[t][A]) {
    var e = { hasNamedCapture: !1, captureNames: [] };
    let s = Ea, l = "", f = 0, h;
    var n = XU(t, A);
    let w = n.pattern;
    for (var i, d = n.flags; f < w.length; ) {
      for (; (h = WU(w, d, f, s, e)) && h.reparse && (w = w.slice(0, f) + h.output + w.slice(f + h.matchLength)), h && h.reparse; )
        ;
      h ? (l += h.output, f += h.matchLength || 1) : ([i] = eA.exec(w, OU[s], f, "sticky"), l += i, f += i.length, i === "[" && s === Ea ? s = _0 : i === "]" && s === _0 && (s = Ea));
    }
    wa[t][A] = { pattern: l.replace(/(?:\(\?:\))+/g, "(?:)"), flags: d.replace(RU, ""), captures: e.hasNamedCapture ? e.captureNames : null };
  }
  return n = wa[t][A], ch(new RegExp(n.pattern, n.flags), n.captures, t, A);
}
eA.prototype = new RegExp(), eA.version = "5.1.1", eA._clipDuplicates = bs, eA._hasNativeFlag = Ss, eA._dec = S0, eA._hex = Sf, eA._pad4 = Tf, eA.addToken = (t, A, e) => {
  let n = (e = e || {}).optionalFlags;
  if (e.flag && M0(e.flag), n)
    for (const i of n = n.split(""))
      M0(i);
  vg.push({ regex: Vo(t, { addG: !0, addY: Kg, isInternalOnly: !0 }), handler: A, scope: e.scope || Ea, flag: e.flag, reparse: e.reparse, leadChar: e.leadChar }), eA.cache.flush("patterns");
}, eA.cache = (t, A) => (Jd[t] || (Jd[t] = {}), Jd[t][A] || (Jd[t][A] = eA(t, A))), eA.cache.flush = (t) => {
  t === "patterns" ? wa = {} : Jd = {};
}, eA.escape = (t) => String(na(t)).replace(/[\\\[\]{}()*+?.^$|]/g, "\\$&").replace(/[\s#\-,]/g, (A) => "\\u" + Tf(Sf(A.charCodeAt(0)))), eA.exec = (t, A, e, n) => {
  let i = "g", d, s = !1, l;
  return (d = Kg && !!(n || A.sticky && n !== !1)) ? i += "y" : n && (s = !0, i += "FakeY"), A[ce] = A[ce] || {}, n = A[ce][i] || (A[ce][i] = Vo(A, { addG: !0, addY: d, source: s ? A.source + "|()" : void 0, removeY: n === !1, isInternalOnly: !0 })), n.lastIndex = e = e || 0, l = cr.exec.call(n, t), s && l && l.pop() === "" && (l = null), A.global && (A.lastIndex = l ? n.lastIndex : 0), l;
}, eA.forEach = (t, A, e) => {
  let n = 0, i = -1, d;
  for (; d = eA.exec(t, A, n); )
    e(d, ++i, t, A), n = d.index + (d[0].length || 1);
}, eA.globalize = (t) => Vo(t, { addG: !0 }), eA.install = (t) => {
  t = O0(t), !Ro.astral && t.astral && k0(!0), !Ro.namespacing && t.namespacing && G0(!0);
}, eA.isInstalled = (t) => !!Ro[t], eA.isRegExp = (t) => Object.prototype.toString.call(t) === "[object RegExp]", eA.match = (d, A, e) => {
  var n = A.global && e !== "one" || e === "all", i = (n ? "g" : "") + (A.sticky ? "y" : "") || "noGY", i = (A[ce] = A[ce] || {}, A[ce][i] || (A[ce][i] = Vo(A, { addG: !!n, removeG: e === "one", isInternalOnly: !0 }))), d = String(na(d)).match(i);
  return A.global && (A.lastIndex = e === "one" && d ? d.index + d[0].length : 0), n ? d || [] : d && d[0];
}, eA.matchChain = (t, A) => function e(n, i) {
  const d = A[i].regex ? A[i] : { regex: A[i] }, s = [];
  function l(f) {
    if (d.backref) {
      var h = "Backreference to undefined group: " + d.backref, w = isNaN(d.backref);
      if (w && eA.isInstalled("namespacing")) {
        if (!(f.groups && d.backref in f.groups))
          throw new ReferenceError(h);
      } else if (!f.hasOwnProperty(d.backref))
        throw new ReferenceError(h);
      h = (w && eA.isInstalled("namespacing") ? f.groups : f)[d.backref], s.push(h || "");
    } else
      s.push(f[0]);
  }
  for (const f of n)
    eA.forEach(f, d.regex, l);
  return i !== A.length - 1 && s.length ? e(s, i + 1) : s;
}([t], 0), eA.replace = (t, A, e, n) => {
  var i = eA.isRegExp(A), d = A.global && n !== "one" || n === "all", s = (d ? "g" : "") + (A.sticky ? "y" : "") || "noGY";
  let l = A;
  return i ? (A[ce] = A[ce] || {}, l = A[ce][s] || (A[ce][s] = Vo(A, { addG: !!d, removeG: n === "one", isInternalOnly: !0 }))) : d && (l = new RegExp(eA.escape(String(A)), "g")), s = cr.replace.call(na(t), l, e), i && A.global && (A.lastIndex = 0), s;
}, eA.replaceEach = (t, A) => {
  for (const e of A)
    t = eA.replace(t, e[0], e[1], e[2]);
  return t;
}, eA.split = (t, A, e) => cr.split.call(na(t), A, e), eA.test = (t, A, e, n) => !!eA.exec(t, A, e, n), eA.uninstall = (t) => {
  t = O0(t), Ro.astral && t.astral && k0(!1), Ro.namespacing && t.namespacing && G0(!1);
}, eA.union = (t, A, e) => {
  e = (e = e || {}).conjunction || "or";
  let n = 0, i, d;
  function s(h, w, p) {
    var K = d[n - i];
    if (w) {
      if (++n, K)
        return `(?<${K}>`;
    } else if (p)
      return "\\" + (+p + i);
    return h;
  }
  if (!jB(t, "Array") || !t.length)
    throw new TypeError("Must provide a nonempty array of patterns to merge");
  var l = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, f = [];
  for (const h of t)
    eA.isRegExp(h) ? (i = n, d = h[ce] && h[ce].captureNames || [], f.push(eA(h.source).source.replace(l, s))) : f.push(eA.escape(h));
  return eA(f.join(e === "none" ? "" : "|"), A);
}, cr.exec = function(t) {
  const A = this.lastIndex, e = RegExp.prototype.exec.apply(this, arguments);
  if (e) {
    var n;
    if (!kU && 1 < e.length && e.includes("") && (n = Vo(this, { removeG: !0, isInternalOnly: !0 }), String(t).slice(e.index).replace(n, (...d) => {
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
  return cr.exec.call(t, na(this));
}, cr.replace = function(t, A) {
  var e = eA.isRegExp(t);
  let n, i, d;
  return e ? (t[ce] && ({ captureNames: i } = t[ce]), n = t.lastIndex) : t += "", d = jB(A, "Function") ? String(this).replace(t, (...s) => {
    if (i) {
      let l;
      eA.isInstalled("namespacing") ? (l = /* @__PURE__ */ Object.create(null), s.push(l)) : (s[0] = new String(s[0]), [l] = s);
      for (let f = 0; f < i.length; ++f)
        i[f] && (l[i[f]] = s[f + 1]);
    }
    return A(...s);
  }) : String(na(this)).replace(t, (...s) => String(A).replace(MU, function(l, f, h, w) {
    if (f = f || h, h = jB(s[s.length - 1], "Object") ? 4 : 3, h = s.length - h, f) {
      if (/^\d+$/.test(f)) {
        var p = +f;
        if (p <= h)
          return s[p] || "";
      }
      if (p = i ? i.indexOf(f) : -1, p < 0)
        throw new SyntaxError("Backreference to undefined group " + l);
      return s[p + 1] || "";
    }
    if (w === "" || w === " ")
      throw new SyntaxError("Invalid token " + l);
    if (w === "&" || +w == 0)
      return s[0];
    if (w === "$")
      return "$";
    if (w === "`")
      return s[s.length - 1].slice(0, s[s.length - 2]);
    if (w === "'")
      return s[s.length - 1].slice(s[s.length - 2] + s[0].length);
    if (w = +w, isNaN(w))
      throw new SyntaxError("Invalid token " + l);
    if (h < w)
      throw new SyntaxError("Backreference to undefined group " + l);
    return s[w] || "";
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
  if (t[1] === "B" && A === Ea)
    return t[0];
  throw new SyntaxError("Invalid escape " + t[0]);
}, { scope: "all", leadChar: "\\" }), eA.addToken(/\\u{([\dA-Fa-f]+)}/, (t, A, e) => {
  var n = S0(t[1]);
  if (1114111 < n)
    throw new SyntaxError("Invalid Unicode code point " + t[0]);
  if (n <= 65535)
    return "\\u" + Tf(Sf(n));
  if (dh && e.includes("u"))
    return t[0];
  throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
}, { scope: "all", leadChar: "\\" }), eA.addToken(/\(\?#[^)]*\)/, T0, { leadChar: "(" }), eA.addToken(/\s+|#[^\n]*\n?/, T0, { flag: "x" }), g0 || eA.addToken(/\./, () => "[\\s\\S]", { flag: "s", leadChar: "." }), eA.addToken(/\\k<([^>]+)>/, function(t) {
  var A = isNaN(t[1]) ? this.captureNames.indexOf(t[1]) + 1 : +t[1], e = t.index + t[0].length;
  if (!A || A > this.captureNames.length)
    throw new SyntaxError("Backreference to undefined group " + t[0]);
  return "\\" + A + (e === t.input.length || isNaN(t.input[e]) ? "" : "(?:)");
}, { leadChar: "\\" }), eA.addToken(/\\(\d+)/, function(t, A) {
  if (A === Ea && /^[1-9]/.test(t[1]) && +t[1] <= this.captureNames.length || t[1] === "0")
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
const YU = (t) => {
  const A = "xregexp", e = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g, n = t.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, e], "g", { conjunction: "or" });
  function i(f, h) {
    return h = h ? "x" : "", t.isRegExp(f) ? f[A] && f[A].captureNames ? f : t(f.source, h) : t(f, h);
  }
  function d(f) {
    return f instanceof RegExp ? f : t.escape(f);
  }
  function s(f, h, w) {
    return f["subpattern" + w] = h, f;
  }
  function l(f, h, w) {
    return f + (h < w.length - 1 ? `{{subpattern${h}}}` : "");
  }
  t.tag = (f) => (h, ...w) => (w = w.map(d).reduce(s, {}), h = h.raw.map(l).join(""), t.build(h, w, f)), t.build = (f, h, w) => {
    var p, K, _, S, v = (w = w || "").includes("x"), M = /^\(\?([\w$]+)\)/.exec(f);
    M && (w = t._clipDuplicates(w + M[1]));
    const k = {};
    for (const vA in h)
      h.hasOwnProperty(vA) && (p = i(h[vA], v), k[vA] = { pattern: (K = p.source, S = _ = void 0, S = /\$(?:\(\?:\))*$/, (_ = /^(?:\(\?:\))*\^/).test(K) && S.test(K) && S.test(K.replace(/\\[\s\S]/g, "")) ? K.replace(_, "").replace(S, "") : K), names: p[A].captureNames || [] });
    M = i(f, v);
    let X = 0, iA, z = 0;
    const J = [0], lA = M[A].captureNames || [], $ = M.source.replace(n, (vA, IA, YA, Fe, re) => {
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
      } else if (re)
        return ZA = +re - 1, lA[ZA] ? `\\k<${lA[ZA]}>` : "\\" + J[+re];
      return vA;
    });
    return t($, w);
  };
}, ZU = (t) => {
  function A(e, n, i, d) {
    return { name: e, value: n, start: i, end: d };
  }
  t.matchRecursive = (e, n, i, d, s) => {
    s = s || {};
    var l = (d = d || "").includes("g"), f = d.includes("y"), h = d.replace(/y/g, "");
    n = t(n, h), i = t(i, h);
    let w, p = s.escapeChar;
    if (p) {
      if (1 < p.length)
        throw new Error("Cannot use more than one escape character");
      p = t.escape(p), w = new RegExp(`(?:${p}[\\S\\s]|(?:(?!${t.union([n, i], "", { conjunction: "or" }).source})[^${p}])+)+`, d.replace(t._hasNativeFlag("s") ? /[^imsu]/g : /[^imu]/g, ""));
    }
    let K = 0, _ = 0, S = 0, v = 0, M, k, X, iA;
    for (var z = s.valueNames, J = []; ; ) {
      if (p && (S += (t.exec(e, w, S, "sticky") || [""])[0].length), X = t.exec(e, n, S), iA = t.exec(e, i, S), X && iA && (X.index <= iA.index ? iA = null : X = null), X || iA)
        _ = (X || iA).index, S = _ + (X || iA)[0].length;
      else if (!K)
        break;
      if (f && !K && _ > v)
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
    return l && 0 < J.length && !f && z && z[0] && e.length > v && J.push(A(z[0], e.slice(v), v, e.length)), J;
  };
}, jU = (t) => {
  const A = {}, e = {}, n = t._dec, i = t._hex, d = t._pad4;
  function s(w) {
    return w.replace(/[- _]+/g, "").toLowerCase();
  }
  function l(w) {
    var p = /^\\[xu](.+)/.exec(w);
    return p ? n(p[1]) : w.charCodeAt(w[0] === "\\" ? 1 : 0);
  }
  function f(w) {
    return A[w]["b!"] || (A[w]["b!"] = function(p) {
      let K = "", _ = -1;
      return t.forEach(p, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, (S) => {
        var v = l(S[1]);
        v > _ + 1 && (K += "\\u" + d(i(_ + 1)), v > _ + 2) && (K += "-\\u" + d(i(v - 1))), _ = l(S[2] || S[1]);
      }), _ < 65535 && (K += "\\u" + d(i(_ + 1)), _ < 65534) && (K += "-\\uFFFF"), K;
    }(A[w].bmp));
  }
  function h(w, p) {
    var K = p ? "a!" : "a=";
    return A[w][K] || (A[w][K] = function(_, S) {
      _ = A[_];
      let v = "";
      return _.bmp && !_.isBmpLast && (v = `[${_.bmp}]` + (_.astral ? "|" : "")), _.astral && (v += _.astral), _.isBmpLast && _.bmp && (v += `${_.astral ? "|" : ""}[${_.bmp}]`), S ? `(?:(?!${v})(?:[�-�][�-�]|[\0-￿]))` : `(?:${v})`;
    }(w, p));
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
    return p === "class" ? z ? f(J) : lA.bmp : (z ? "[^" : "[") + lA.bmp + "]";
  }, { scope: "all", optionalFlags: "A", leadChar: "\\" }), t.addUnicodeData = (w, p) => {
    p && (e[p] = {});
    for (const _ of w) {
      if (!_.name)
        throw new Error("Unicode token requires name");
      if (!(_.inverseOf || _.bmp || _.astral))
        throw new Error("Unicode token has no character data " + _.name);
      var K = s(_.name);
      A[K] = _, p && (e[p][K] = !0), _.alias && (K = s(_.alias), A[K] = _, p) && (e[p][K] = !0);
    }
    t.cache.flush("patterns");
  }, t._getUnicodeProperty = (w) => (w = s(w), A[w]);
};
var qU = [{ name: "C", alias: "Other", isBmpLast: !0, bmp: "\0--­͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-؅؜۝܎܏݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏-ࢗ࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿", astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCBD\uDCC3-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]" }, { name: "Cc", alias: "Control", bmp: "\0--" }, { name: "Cf", alias: "Format", bmp: "­؀-؅؜۝܏࢐࢑࣢᠎​-‏‪-‮⁠-⁤⁦-⁯\uFEFF￹-￻", astral: "\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]" }, { name: "Cn", alias: "Unassigned", bmp: "͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-׿܎݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏࢒-ࢗ঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿", astral: "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCC3-\uDCCC\uDCCE\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F\uDC39-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]" }, { name: "Co", alias: "Private_Use", bmp: "-", astral: "[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]" }, { name: "Cs", alias: "Surrogate", bmp: "\uD800-\uDFFF" }, { name: "L", alias: "Letter", bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "LC", alias: "Cased_Letter", bmp: "A-Za-zµÀ-ÖØ-öø-ƺƼ-ƿǄ-ʓʕ-ʯͰ-ͳͶͷͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՠ-ֈႠ-ჅჇჍა-ჺჽ-ჿᎠ-Ᏽᏸ-ᏽᲀ-ᲈᲐ-ᲺᲽ-Ჿᴀ-ᴫᵫ-ᵷᵹ-ᶚḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⱻⱾ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭꙀ-ꙭꚀ-ꚛꜢ-ꝯꝱ-ꞇꞋ-ꞎꞐ-ꟊꟐꟑꟓꟕ-ꟙꟵꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚ", astral: "\uD801[\uDC00-\uDC4F\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD806[\uDCA0-\uDCDF]|\uD81B[\uDE40-\uDE7F]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD00-\uDD43]" }, { name: "Ll", alias: "Lowercase_Letter", bmp: "a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ", astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]" }, { name: "Lm", alias: "Modifier_Letter", bmp: "ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨࣉॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟲ-ꟴꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟꭩｰﾞﾟ", astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD838[\uDD37-\uDD3D]|𞥋" }, { name: "Lo", alias: "Other_Letter", bmp: "ªºƻǀ-ǃʔא-תׯ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣈऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳳᳵᳶᳺℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF4A\uDF50]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|𝼊|\uD838[\uDD00-\uDD2C\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Lt", alias: "Titlecase_Letter", bmp: "ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ" }, { name: "Lu", alias: "Uppercase_Letter", bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ", astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]" }, { name: "M", alias: "Mark", bmp: "̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣඁ-ඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-ᫎᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯", astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]" }, { name: "Mc", alias: "Spacing_Mark", bmp: "ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜ᜕᜴ាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡᳷〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦾ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬", astral: "\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD30-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]" }, { name: "Me", alias: "Enclosing_Mark", bmp: "҈҉᪾⃝-⃠⃢-⃤꙰-꙲" }, { name: "Mn", alias: "Nonspacing_Mark", bmp: "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣ৾ਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣૺ-૿ଁ଼ିୁ-ୄ୍୕ୖୢୣஂீ்ఀఄ఼ా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഀഁ഻഼ു-ൄ്ൢൣඁ්ි-ුූัิ-ฺ็-๎ັິ-ຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲᜳᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᪿ-ᫎᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꠬꣄ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꦽꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯", astral: "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]" }, { name: "N", alias: "Number", bmp: "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９", astral: "\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]" }, { name: "Nd", alias: "Decimal_Number", bmp: "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９", astral: "\uD801[\uDCA0-\uDCA9]|\uD803[\uDD30-\uDD39]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9\uDD50-\uDD59]|\uD807[\uDC50-\uDC59\uDD50-\uDD59\uDDA0-\uDDA9]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDD50-\uDD59]|\uD83E[\uDFF0-\uDFF9]" }, { name: "Nl", alias: "Letter_Number", bmp: "ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ", astral: "\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]" }, { name: "No", alias: "Other_Number", bmp: "²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൘-൞൰-൸༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵", astral: "\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C\uDFC0-\uDFD4]|\uD81A[\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD83A[\uDCC7-\uDCCF]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]" }, { name: "P", alias: "Punctuation", bmp: "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹏⹒-⹝、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･", astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]" }, { name: "Pc", alias: "Connector_Punctuation", bmp: "_‿⁀⁔︳︴﹍-﹏＿" }, { name: "Pd", alias: "Dash_Punctuation", bmp: "\\-֊־᐀᠆‐-―⸗⸚⸺⸻⹀⹝〜〰゠︱︲﹘﹣－", astral: "𐺭" }, { name: "Pe", alias: "Close_Punctuation", bmp: "\\)\\]\\}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩⹖⹘⹚⹜〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣" }, { name: "Pf", alias: "Final_Punctuation", bmp: "»’”›⸃⸅⸊⸍⸝⸡" }, { name: "Pi", alias: "Initial_Punctuation", bmp: "«‘‛“‟‹⸂⸄⸉⸌⸜⸠" }, { name: "Po", alias: "Other_Punctuation", bmp: "!-#%-'\\*,\\.\\/:;\\?@\\¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁⹃-⹏⹒-⹔、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･", astral: "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]" }, { name: "Ps", alias: "Open_Punctuation", bmp: "\\(\\[\\{༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂⹕⹗⹙⹛〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢" }, { name: "S", alias: "Symbol", bmp: "\\$\\+<->\\^`\\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶߾߿࢈৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-⃀℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛꭪꭫﬩﮲-﯂﵀-﵏﷏﷼-﷿﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�", astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]" }, { name: "Sc", alias: "Currency_Symbol", bmp: "\\$¢-¥֏؋߾߿৲৳৻૱௹฿៛₠-⃀꠸﷼﹩＄￠￡￥￦", astral: "\uD807[\uDFDD-\uDFE0]|𞋿|𞲰" }, { name: "Sk", alias: "Modifier_Symbol", bmp: "\\^`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅࢈᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛꭪꭫﮲-﯂＾｀￣", astral: "\uD83C[\uDFFB-\uDFFF]" }, { name: "Sm", alias: "Math_Symbol", bmp: "\\+<->\\|~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬", astral: "\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]" }, { name: "So", alias: "Other_Symbol", bmp: "¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൏൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﵀-﵏﷏﷽-﷿￤￨￭￮￼�", astral: "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFDC\uDFE1-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|𞅏|\uD83B[\uDCAC\uDD2E]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]" }, { name: "Z", alias: "Separator", bmp: "    - \u2028\u2029  　" }, { name: "Zl", alias: "Line_Separator", bmp: "\u2028" }, { name: "Zp", alias: "Paragraph_Separator", bmp: "\u2029" }, { name: "Zs", alias: "Space_Separator", bmp: "    -   　" }];
const zU = (t) => {
  if (!t.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
  t.addUnicodeData(qU);
};
var $U = [{ name: "ASCII", bmp: "\0-" }, { name: "Alphabetic", bmp: "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈְ-ׇֽֿׁׂׅׄא-תׯ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉࣔ-ࣣࣟ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱৼਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹ-ૼଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౝౠ-ౣಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೝೞೠ-ೣೱೲഀ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൔ-ൗൟ-ൣൺ-ൿඁ-ඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄຆ-ຊຌ-ຣລວ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ႏႚ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜓᜟ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡸᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᪿᫀᫌ-ᫎᬀ-ᬳᬵ-ᭃᭅ-ᭌᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰶᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠅꠇ-ꠧꡀ-ꡳꢀ-ꣃꣅꣲ-ꣷꣻꣽ-ꣿꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC71-\uDC75\uDC82-\uDCB8\uDCC2\uDCD0-\uDCE8\uDD00-\uDD32\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE\uDDCF\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDEB8\uDF00-\uDF1A\uDF1D-\uDF2A\uDF40-\uDF46]|\uD806[\uDC00-\uDC38\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD47\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Any", isBmpLast: !0, bmp: "\0-￿", astral: "[\uD800-\uDBFF][\uDC00-\uDFFF]" }, { name: "Default_Ignorable_Code_Point", bmp: "­͏؜ᅟᅠ឴឵᠋-᠏​-‏‪-‮⁠-⁯ㅤ︀-️\uFEFFﾠ￰-￸", astral: "\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB43][\uDC00-\uDFFF]" }, { name: "Lowercase", bmp: "a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟸ-ꟺꬰ-ꭚꭜ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ", astral: "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDF80\uDF83-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]" }, { name: "Noncharacter_Code_Point", bmp: "﷐-﷯￾￿", astral: "[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]" }, { name: "Uppercase", bmp: "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ", astral: "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]" }, { name: "White_Space", bmp: "	-\r    - \u2028\u2029  　" }];
const Ap = (t) => {
  if (!t.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
  var A = $U;
  A.push({ name: "Assigned", inverseOf: "Cn" }), t.addUnicodeData(A);
};
var ep = [{ name: "Adlam", astral: "\uD83A[\uDD00-\uDD4B\uDD50-\uDD59\uDD5E\uDD5F]" }, { name: "Ahom", astral: "\uD805[\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF46]" }, { name: "Anatolian_Hieroglyphs", astral: "\uD811[\uDC00-\uDE46]" }, { name: "Arabic", bmp: "؀-؄؆-؋؍-ؚ؜-؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࡰ-ࢎ࢐࢑࢘-ࣣ࣡-ࣿﭐ-﯂ﯓ-ﴽ﵀-ﶏﶒ-ﷇ﷏ﷰ-﷿ﹰ-ﹴﹶ-ﻼ", astral: "\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]" }, { name: "Armenian", bmp: "Ա-Ֆՙ-֊֍-֏ﬓ-ﬗ" }, { name: "Avestan", astral: "\uD802[\uDF00-\uDF35\uDF39-\uDF3F]" }, { name: "Balinese", bmp: "ᬀ-ᭌ᭐-᭾" }, { name: "Bamum", bmp: "ꚠ-꛷", astral: "\uD81A[\uDC00-\uDE38]" }, { name: "Bassa_Vah", astral: "\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]" }, { name: "Batak", bmp: "ᯀ-᯳᯼-᯿" }, { name: "Bengali", bmp: "ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৾" }, { name: "Bhaiksuki", astral: "\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C]" }, { name: "Bopomofo", bmp: "˪˫ㄅ-ㄯㆠ-ㆿ" }, { name: "Brahmi", astral: "\uD804[\uDC00-\uDC4D\uDC52-\uDC75\uDC7F]" }, { name: "Braille", bmp: "⠀-⣿" }, { name: "Buginese", bmp: "ᨀ-ᨛ᨞᨟" }, { name: "Buhid", bmp: "ᝀ-ᝓ" }, { name: "Canadian_Aboriginal", bmp: "᐀-ᙿᢰ-ᣵ", astral: "\uD806[\uDEB0-\uDEBF]" }, { name: "Carian", astral: "\uD800[\uDEA0-\uDED0]" }, { name: "Caucasian_Albanian", astral: "\uD801[\uDD30-\uDD63\uDD6F]" }, { name: "Chakma", astral: "\uD804[\uDD00-\uDD34\uDD36-\uDD47]" }, { name: "Cham", bmp: "ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟" }, { name: "Cherokee", bmp: "Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ" }, { name: "Chorasmian", astral: "\uD803[\uDFB0-\uDFCB]" }, { name: "Common", bmp: "\0-@\\[-`\\{-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·؅،؛؟ـ۝࣢।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵ-᳷ᳺ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-⃀℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮗-⯿⸀-⹝⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㋿㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛꭪꭫﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫\uFEFF！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�", astral: "\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9C\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD82F[\uDCA0-\uDCA3]|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDEE0-\uDEF3\uDF00-\uDF56\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD83B[\uDC71-\uDCB4\uDD01-\uDD3D]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDDAD\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA\uDFF0-\uDFF9]|\uDB40[\uDC01\uDC20-\uDC7F]" }, { name: "Coptic", bmp: "Ϣ-ϯⲀ-ⳳ⳹-⳿" }, { name: "Cuneiform", astral: "\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]" }, { name: "Cypriot", astral: "\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]" }, { name: "Cypro_Minoan", astral: "\uD80B[\uDF90-\uDFF2]" }, { name: "Cyrillic", bmp: "Ѐ-҄҇-ԯᲀ-ᲈᴫᵸⷠ-ⷿꙀ-ꚟ︮︯" }, { name: "Deseret", astral: "\uD801[\uDC00-\uDC4F]" }, { name: "Devanagari", bmp: "ऀ-ॐॕ-ॣ०-ॿ꣠-ꣿ" }, { name: "Dives_Akuru", astral: "\uD806[\uDD00-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD46\uDD50-\uDD59]" }, { name: "Dogra", astral: "\uD806[\uDC00-\uDC3B]" }, { name: "Duployan", astral: "\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]" }, { name: "Egyptian_Hieroglyphs", astral: "\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E\uDC30-\uDC38]" }, { name: "Elbasan", astral: "\uD801[\uDD00-\uDD27]" }, { name: "Elymaic", astral: "\uD803[\uDFE0-\uDFF6]" }, { name: "Ethiopic", bmp: "ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ", astral: "\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]" }, { name: "Georgian", bmp: "Ⴀ-ჅჇჍა-ჺჼ-ჿᲐ-ᲺᲽ-Ჿⴀ-ⴥⴧⴭ" }, { name: "Glagolitic", bmp: "Ⰰ-ⱟ", astral: "\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]" }, { name: "Gothic", astral: "\uD800[\uDF30-\uDF4A]" }, { name: "Grantha", astral: "\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]" }, { name: "Greek", bmp: "Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ", astral: "\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]" }, { name: "Gujarati", bmp: "ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ-૿" }, { name: "Gunjala_Gondi", astral: "\uD807[\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9]" }, { name: "Gurmukhi", bmp: "ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-੶" }, { name: "Han", bmp: "⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿿豈-舘並-龎", astral: "\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]" }, { name: "Hangul", bmp: "ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ" }, { name: "Hanifi_Rohingya", astral: "\uD803[\uDD00-\uDD27\uDD30-\uDD39]" }, { name: "Hanunoo", bmp: "ᜠ-᜴" }, { name: "Hatran", astral: "\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]" }, { name: "Hebrew", bmp: "֑-ׇא-תׯ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ" }, { name: "Hiragana", bmp: "ぁ-ゖゝ-ゟ", astral: "\uD82C[\uDC01-\uDD1F\uDD50-\uDD52]|🈀" }, { name: "Imperial_Aramaic", astral: "\uD802[\uDC40-\uDC55\uDC57-\uDC5F]" }, { name: "Inherited", bmp: "̀-ًͯ҅҆-ٰٕ॑-॔᪰-ᫎ᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭", astral: "\uD800[\uDDFD\uDEE0]|𑌻|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uDB40[\uDD00-\uDDEF]" }, { name: "Inscriptional_Pahlavi", astral: "\uD802[\uDF60-\uDF72\uDF78-\uDF7F]" }, { name: "Inscriptional_Parthian", astral: "\uD802[\uDF40-\uDF55\uDF58-\uDF5F]" }, { name: "Javanese", bmp: "ꦀ-꧍꧐-꧙꧞꧟" }, { name: "Kaithi", astral: "\uD804[\uDC80-\uDCC2\uDCCD]" }, { name: "Kannada", bmp: "ಀ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೝೞೠ-ೣ೦-೯ೱೲ" }, { name: "Katakana", bmp: "ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ", astral: "\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD64-\uDD67]" }, { name: "Kayah_Li", bmp: "꤀-꤭꤯" }, { name: "Kharoshthi", astral: "\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE50-\uDE58]" }, { name: "Khitan_Small_Script", astral: "𖿤|\uD822[\uDF00-\uDFFF]|\uD823[\uDC00-\uDCD5]" }, { name: "Khmer", bmp: "ក-៝០-៩៰-៹᧠-᧿" }, { name: "Khojki", astral: "\uD804[\uDE00-\uDE11\uDE13-\uDE3E]" }, { name: "Khudawadi", astral: "\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]" }, { name: "Lao", bmp: "ກຂຄຆ-ຊຌ-ຣລວ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ" }, { name: "Latin", bmp: "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꟿꬰ-ꭚꭜ-ꭤꭦ-ꭩﬀ-ﬆＡ-Ｚａ-ｚ", astral: "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E]" }, { name: "Lepcha", bmp: "ᰀ-᰷᰻-᱉ᱍ-ᱏ" }, { name: "Limbu", bmp: "ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏" }, { name: "Linear_A", astral: "\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]" }, { name: "Linear_B", astral: "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]" }, { name: "Lisu", bmp: "ꓐ-꓿", astral: "𑾰" }, { name: "Lycian", astral: "\uD800[\uDE80-\uDE9C]" }, { name: "Lydian", astral: "\uD802[\uDD20-\uDD39\uDD3F]" }, { name: "Mahajani", astral: "\uD804[\uDD50-\uDD76]" }, { name: "Makasar", astral: "\uD807[\uDEE0-\uDEF8]" }, { name: "Malayalam", bmp: "ഀ-ഌഎ-ഐഒ-ൄെ-ൈൊ-൏ൔ-ൣ൦-ൿ" }, { name: "Mandaic", bmp: "ࡀ-࡛࡞" }, { name: "Manichaean", astral: "\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]" }, { name: "Marchen", astral: "\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]" }, { name: "Masaram_Gondi", astral: "\uD807[\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]" }, { name: "Medefaidrin", astral: "\uD81B[\uDE40-\uDE9A]" }, { name: "Meetei_Mayek", bmp: "ꫠ-꫶ꯀ-꯭꯰-꯹" }, { name: "Mende_Kikakui", astral: "\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]" }, { name: "Meroitic_Cursive", astral: "\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]" }, { name: "Meroitic_Hieroglyphs", astral: "\uD802[\uDD80-\uDD9F]" }, { name: "Miao", astral: "\uD81B[\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F]" }, { name: "Modi", astral: "\uD805[\uDE00-\uDE44\uDE50-\uDE59]" }, { name: "Mongolian", bmp: "᠀᠁᠄᠆-᠙ᠠ-ᡸᢀ-ᢪ", astral: "\uD805[\uDE60-\uDE6C]" }, { name: "Mro", astral: "\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]" }, { name: "Multani", astral: "\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]" }, { name: "Myanmar", bmp: "က-႟ꧠ-ꧾꩠ-ꩿ" }, { name: "Nabataean", astral: "\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]" }, { name: "Nandinagari", astral: "\uD806[\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE4]" }, { name: "New_Tai_Lue", bmp: "ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟" }, { name: "Newa", astral: "\uD805[\uDC00-\uDC5B\uDC5D-\uDC61]" }, { name: "Nko", bmp: "߀-ߺ߽-߿" }, { name: "Nushu", astral: "𖿡|\uD82C[\uDD70-\uDEFB]" }, { name: "Nyiakeng_Puachue_Hmong", astral: "\uD838[\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDD4F]" }, { name: "Ogham", bmp: " -᚜" }, { name: "Ol_Chiki", bmp: "᱐-᱿" }, { name: "Old_Hungarian", astral: "\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]" }, { name: "Old_Italic", astral: "\uD800[\uDF00-\uDF23\uDF2D-\uDF2F]" }, { name: "Old_North_Arabian", astral: "\uD802[\uDE80-\uDE9F]" }, { name: "Old_Permic", astral: "\uD800[\uDF50-\uDF7A]" }, { name: "Old_Persian", astral: "\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]" }, { name: "Old_Sogdian", astral: "\uD803[\uDF00-\uDF27]" }, { name: "Old_South_Arabian", astral: "\uD802[\uDE60-\uDE7F]" }, { name: "Old_Turkic", astral: "\uD803[\uDC00-\uDC48]" }, { name: "Old_Uyghur", astral: "\uD803[\uDF70-\uDF89]" }, { name: "Oriya", bmp: "ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍୕-ୗଡ଼ଢ଼ୟ-ୣ୦-୷" }, { name: "Osage", astral: "\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB]" }, { name: "Osmanya", astral: "\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]" }, { name: "Pahawh_Hmong", astral: "\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]" }, { name: "Palmyrene", astral: "\uD802[\uDC60-\uDC7F]" }, { name: "Pau_Cin_Hau", astral: "\uD806[\uDEC0-\uDEF8]" }, { name: "Phags_Pa", bmp: "ꡀ-꡷" }, { name: "Phoenician", astral: "\uD802[\uDD00-\uDD1B\uDD1F]" }, { name: "Psalter_Pahlavi", astral: "\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]" }, { name: "Rejang", bmp: "ꤰ-꥓꥟" }, { name: "Runic", bmp: "ᚠ-ᛪᛮ-ᛸ" }, { name: "Samaritan", bmp: "ࠀ-࠭࠰-࠾" }, { name: "Saurashtra", bmp: "ꢀ-ꣅ꣎-꣙" }, { name: "Sharada", astral: "\uD804[\uDD80-\uDDDF]" }, { name: "Shavian", astral: "\uD801[\uDC50-\uDC7F]" }, { name: "Siddham", astral: "\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]" }, { name: "SignWriting", astral: "\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]" }, { name: "Sinhala", bmp: "ඁ-ඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴", astral: "\uD804[\uDDE1-\uDDF4]" }, { name: "Sogdian", astral: "\uD803[\uDF30-\uDF59]" }, { name: "Sora_Sompeng", astral: "\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]" }, { name: "Soyombo", astral: "\uD806[\uDE50-\uDEA2]" }, { name: "Sundanese", bmp: "ᮀ-ᮿ᳀-᳇" }, { name: "Syloti_Nagri", bmp: "ꠀ-꠬" }, { name: "Syriac", bmp: "܀-܍܏-݊ݍ-ݏࡠ-ࡪ" }, { name: "Tagalog", bmp: "ᜀ-᜕ᜟ" }, { name: "Tagbanwa", bmp: "ᝠ-ᝬᝮ-ᝰᝲᝳ" }, { name: "Tai_Le", bmp: "ᥐ-ᥭᥰ-ᥴ" }, { name: "Tai_Tham", bmp: "ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭" }, { name: "Tai_Viet", bmp: "ꪀ-ꫂꫛ-꫟" }, { name: "Takri", astral: "\uD805[\uDE80-\uDEB9\uDEC0-\uDEC9]" }, { name: "Tamil", bmp: "ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺", astral: "\uD807[\uDFC0-\uDFF1\uDFFF]" }, { name: "Tangsa", astral: "\uD81A[\uDE70-\uDEBE\uDEC0-\uDEC9]" }, { name: "Tangut", astral: "𖿠|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEFF]|\uD823[\uDD00-\uDD08]" }, { name: "Telugu", bmp: "ఀ-ఌఎ-ఐఒ-నప-హ఼-ౄె-ైొ-్ౕౖౘ-ౚౝౠ-ౣ౦-౯౷-౿" }, { name: "Thaana", bmp: "ހ-ޱ" }, { name: "Thai", bmp: "ก-ฺเ-๛" }, { name: "Tibetan", bmp: "ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚" }, { name: "Tifinagh", bmp: "ⴰ-ⵧⵯ⵰⵿" }, { name: "Tirhuta", astral: "\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]" }, { name: "Toto", astral: "\uD838[\uDE90-\uDEAE]" }, { name: "Ugaritic", astral: "\uD800[\uDF80-\uDF9D\uDF9F]" }, { name: "Vai", bmp: "ꔀ-ꘫ" }, { name: "Vithkuqi", astral: "\uD801[\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]" }, { name: "Wancho", astral: "\uD838[\uDEC0-\uDEF9\uDEFF]" }, { name: "Warang_Citi", astral: "\uD806[\uDCA0-\uDCF2\uDCFF]" }, { name: "Yezidi", astral: "\uD803[\uDE80-\uDEA9\uDEAB-\uDEAD\uDEB0\uDEB1]" }, { name: "Yi", bmp: "ꀀ-ꒌ꒐-꓆" }, { name: "Zanabazar_Square", astral: "\uD806[\uDE00-\uDE47]" }];
const tp = (t) => {
  if (!t.addUnicodeData)
    throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
  t.addUnicodeData(ep, "Script");
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
      return i.length === 1 ? s += "" + A + i[0] + A : i.forEach((l, f) => {
        1 < l.length && (s += "" + A + l + A), 1 < i.length && f < i.length - 1 && (s += d);
      }), s;
    }
  }
  return e ? `\\mathrm{${t}}` : t;
}
function np(t, A, e, n) {
  if (t.match(/\\left\\{/g) || t.match(/\\class{fourlineruled}/g))
    return { content: t, __isChineseDivide: n = !1 };
  const i = eA.matchRecursive(t, "{", "}", "g", { valueNames: ["inner", "left", "between", "right"], unbalanced: "skip-lazy" }).map((w) => {
    if (w.name === "between")
      return [w.start, w.end];
  }).filter((w) => w), d = Array.from(t.matchAll(/[\u4e00-\u9fa5]+/g));
  if (!d.length)
    return { content: t, __isChineseDivide: n = !1 };
  let s = "", l = 0;
  d.forEach((w) => {
    var p, K;
    i.some((_) => w.index >= _[0] && w.index <= _[1]) || ((p = t.slice(l, w.index)) && (K = V0(p, 0), s += "" + R0(p, K, A, e)), s += `<span>${w[0]}</span>` || "", l = w.index + w[0].length);
  });
  var f, h = t.slice(l);
  return h && (f = V0(h, 0), s += "" + R0(h, f, A, e)), { content: s, __isChineseDivide: n };
}
function rp(t, A) {
  let e = 0;
  return t.replace(/(\\_)+/g, (n) => {
    var i;
    let d = n.split("\\").length - 1, s = "", l = A && A.underlineClass && A.underlineClass.className && d >= A.underlineClass.min;
    for (let f = 0; f < Number(d); f++)
      s += `\\class{_u i_${e}${l ? " " + ((i = A == null ? void 0 : A.underlineClass) == null ? void 0 : i.className) : ""}}{\\_}`;
    return e++, s;
  });
}
function up(t, A = lU.defaults({ wrapMathrm: !0, punctuation: !1, divideChinese: !1, lineBreak: !0, blankLight: !1 })) {
  if (!t)
    return "";
  t = TU(t = A.punctuation ? hU(t) : t, A), A.underlineClass && (t = rp(t, A));
  let e = A.divideChinese;
  var n;
  return A.divideChinese && (t = (n = np(t, A.wrapMathrm, A.lineBreak, e)).content, e = n.__isChineseDivide), "" + (t = e ? t : (A.divideChinese ? "$$" : "") + (A.wrapMathrm ? "\\mathrm{" : "") + t + (A.wrapMathrm ? "}" : "") + (A.divideChinese ? "$$" : ""));
}
YU(eA), ZU(eA), jU(eA), zU(eA), Ap(eA), tp(eA);
const op = { load: ["output/chtml", "input/tex", "[tex]/enclose", "[tex]/ams", "[tex]/noerrors", "[tex]/configmacros", "[tex]/mathtools", "[tex]/mhchem", "[tex]/unicode", "[tex]/textmacros", "[tex]/textcomp", "[tex]/cancel", "[tex]/extpfeil", "[tex]/html"] }, ip = { "[+]": ["noerrors", "enclose", "ams", "mathtools", "mhchem", "unicode", "textcomp", "cancel", "extpfeil", "textmacros", "html"] }, ap = { "[": "[", "]": "]", "(": "(", ")": ")", "【": "【", "】": "】", NEarrow: "\\unicode{x21d7}", NWarrow: "\\unicode{x21d6}", SEarrow: "\\unicode{x21d8}", SWarrow: "\\unicode{x21d9}", textcircled: "\\enclose{circle}", romannumeral: "\\enclose{()}", arccot: "arccot", arccsc: "arccsc", arcsec: "arcsec", blackdiamond: "\\blacklozenge", blackheart: "\\unicode{x2665}", blackrectangle: "\\unicode{x220e}", blackstar: "\\unicode{x2605}", heart: "\\heartsuit", female: "\\unicode{x2640}", male: "\\unicode{x2642}", napprox: "\\unicode{x2249}", nequiv: "\\unicode{x2262}", notni: "\\unicode{x220c}", nsubset: "\\unicode{x2284}", nsupset: "TODO", oiiint: "\\unicode{x2230}", oiint: "\\unicode{x222f}", rectangle: "\\unicode{x25ad}", smiley: "\\unicode{x263a}", wideparen: "\\overparen", textperthousand: "\\unicode{x2030}", textregistered: "\\unicode{xae}", textsection: "\\unicode{xa7}", texttrademark: "\\unicode{x2122}", textreferencemark: "\\unicode{x203b}", parallelogram: "\\unicode{x25b1}", deletion: "\\text{ }", d: "\\underset{\\cdot}", v: "\\check", omitted: "\\tripledash", xmark: "\\times", cmark: "\\unicode{x2714}", replace: "\\xcancel", handtextcircled: "\\enclose{circle}", handsquare: "\\fbox", Alpha: "A", Beta: "B", Omicron: "O", Epsilon: "E", Zeta: "Z", Eta: "H", Iota: "I", Kappa: "K", Mu: "M", Nu: "N", Rho: "P", Tau: "T", Chi: "X", lg: "\\log", nl: "\\nless", ng: "\\ngtr", textbf: "\\class{bf}", textit: "\\class{it}", parallelequal: "{\\small{\\stackrel{\\;//}{\\raise-.5ex\\hbox{=}}}}", "^": "\\textasciicircum", bar: "\\overline", vec: "\\overrightarrow" }, dp = [["$", "$"], ["\\(", "\\)"]], sp = [["$$", "$$"], ["\\[", "\\]"]], cp = { inlineMath: dp, displayMath: sp, packages: ip, macros: ap, maxBuffer: 10240, formatError: (t, A) => {
} }, Bp = { enableMenu: !1, enableAssistiveMml: !1, menuOptions: { settings: { assistiveMml: !1 } } }, lp = { displayAlign: "left", fontURL: "https://homework-webfront.oss-cn-beijing.aliyuncs.com/MathJaxFonts" }, ol = { options: Bp, loader: op, tex: cp, chtml: lp }, fp = "https://homework-webfront.oss-cn-beijing.aliyuncs.com/complete_math_v1/mathjax-3.2.0/es5";
function gp(t) {
  if (globalThis) {
    let A = ol;
    t && (A = { ...ol, ...t }), globalThis.MathJax = { ...A, startup: { pageReady: () => {
    } } };
  }
}
gp();
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
function En(t, A, e, n) {
  return new (e = e || Promise)(function(i, d) {
    function s(h) {
      try {
        f(n.next(h));
      } catch (w) {
        d(w);
      }
    }
    function l(h) {
      try {
        f(n.throw(h));
      } catch (w) {
        d(w);
      }
    }
    function f(h) {
      var w;
      h.done ? i(h.value) : ((w = h.value) instanceof e ? w : new e(function(p) {
        p(w);
      })).then(s, l);
    }
    f((n = n.apply(t, A || [])).next());
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
  function l(f) {
    return function(h) {
      var w = [f, h];
      if (e)
        throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (e = 1, n && (i = 2 & w[0] ? n.return : w[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, w[1])).done)
            return i;
          switch (n = 0, (w = i ? [2 & w[0], i.value] : w)[0]) {
            case 0:
            case 1:
              i = w;
              break;
            case 4:
              return d.label++, { value: w[1], done: !1 };
            case 5:
              d.label++, n = w[1], w = [0];
              continue;
            case 7:
              w = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (!(i = 0 < (i = d.trys).length && i[i.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                d = 0;
                continue;
              }
              if (w[0] === 3 && (!i || w[1] > i[0] && w[1] < i[3]))
                d.label = w[1];
              else if (w[0] === 6 && d.label < i[1])
                d.label = i[1], i = w;
              else {
                if (!(i && d.label < i[2])) {
                  i[2] && d.ops.pop(), d.trys.pop();
                  continue;
                }
                d.label = i[2], d.ops.push(w);
              }
          }
          w = A.call(t, d);
        } catch (p) {
          w = [6, p], n = 0;
        } finally {
          e = i = 0;
        }
      if (5 & w[0])
        throw w[1];
      return { value: w[0] ? w[1] : void 0, done: !0 };
    };
  }
}
for (var Yo = function() {
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
  return Yo.fromClientRect(t, A.getBoundingClientRect());
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
}, N0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", wp = "u" < typeof Uint8Array ? [] : new Uint8Array(256), Rc = 0; Rc < N0.length; Rc++)
  wp[N0.charCodeAt(Rc)] = Rc;
for (var P0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ts = "u" < typeof Uint8Array ? [] : new Uint8Array(256), Nc = 0; Nc < P0.length; Nc++)
  ts[P0.charCodeAt(Nc)] = Nc;
for (var Qp = function(t) {
  for (var A, e, n, i, l = 0.75 * t.length, d = t.length, s = 0, l = (t[t.length - 1] === "=" && (l--, t[t.length - 2] === "=") && l--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? ArrayBuffer : Array)(l)), f = Array.isArray(l) ? l : new Uint8Array(l), h = 0; h < d; h += 4)
    A = ts[t.charCodeAt(h)], e = ts[t.charCodeAt(h + 1)], n = ts[t.charCodeAt(h + 2)], i = ts[t.charCodeAt(h + 3)], f[s++] = A << 2 | e >> 4, f[s++] = (15 & e) << 4 | n >> 2, f[s++] = (3 & n) << 6 | 63 & i;
  return l;
}, hp = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 2)
    e.push(t[n + 1] << 8 | t[n]);
  return e;
}, Cp = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 4)
    e.push(t[n + 3] << 24 | t[n + 2] << 16 | t[n + 1] << 8 | t[n]);
  return e;
}, So = 5, Of = 11, Mf = 2, Fp = Of - So, J0 = 65536 >> So, Up = 1 << So, kf = Up - 1, pp = 1024 >> So, X0 = J0 + pp, JI = X0, mp = 32, Ep = X0 + mp, Dp = 65536 >> Of, Hp = 1 << Fp, yp = Hp - 1, W0 = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, bp = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, Ip = function(i, A) {
  var i = Qp(i), e = Array.isArray(i) ? Cp(i) : new Uint32Array(i), i = Array.isArray(i) ? hp(i) : new Uint16Array(i), n = W0(i, 12, e[4] / 2), i = e[5] === 2 ? W0(i, (24 + e[4]) / 2) : bp(e, Math.ceil((24 + e[4]) / 4));
  return new vp(e[0], e[1], e[2], e[3], n, i);
}, vp = function() {
  function t(A, e, n, i, d, s) {
    this.initialValue = A, this.errorValue = e, this.highStart = n, this.highValueIndex = i, this.index = d, this.data = s;
  }
  return t.prototype.get = function(A) {
    var e;
    if (0 <= A) {
      if (A < 55296 || 56319 < A && A <= 65535)
        return e = this.index[A >> So], this.data[e = (e << Mf) + (A & kf)];
      if (A <= 65535)
        return e = this.index[J0 + (A - 55296 >> So)], this.data[e = (e << Mf) + (A & kf)];
      if (A < this.highStart)
        return e = this.index[e = Ep - Dp + (A >> Of)], e = this.index[e += A >> So & yp], this.data[e = (e << Mf) + (A & kf)];
      if (A <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, t;
}(), Y0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Kp = "u" < typeof Uint8Array ? [] : new Uint8Array(256), Pc = 0; Pc < Y0.length; Pc++)
  Kp[Y0.charCodeAt(Pc)] = Pc;
var Lp = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Z0 = 50, xp = 1, lh = 2, fh = 3, _p = 4, Sp = 5, j0 = 7, gh = 8, q0 = 9, Eu = 10, Lg = 11, z0 = 12, xg = 13, Tp = 14, ns = 15, _g = 16, Jc = 17, Xd = 18, Op = 19, $0 = 20, Sg = 21, Wd = 22, Gf = 23, ra = 24, en = 25, rs = 26, us = 27, ua = 28, Mp = 29, Qs = 30, kp = 31, Xc = 32, Wc = 33, Tg = 34, Og = 35, Mg = 36, Is = 37, kg = 38, qB = 39, zB = 40, Vf = 41, wh = 42, Gp = 43, Vp = [9001, 65288], Qh = "!", Ht = "×", Yc = "÷", Gg = Ip(Lp), kr = [Qs, Mg], Vg = [xp, lh, fh, Sp], hh = [Eu, gh], Aw = [us, rs], Rp = Vg.concat(hh), ew = [kg, qB, zB, Tg, Og], Np = [ns, xg], Pp = function(t, A) {
  A === void 0 && (A = "strict");
  var e = [], n = [], i = [];
  return t.forEach(function(d, s) {
    var l, f = Gg.get(d);
    return Z0 < f ? (i.push(!0), f -= Z0) : i.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(d) !== -1 ? (n.push(s), e.push(_g)) : f === _p || f === Lg ? s !== 0 && Rp.indexOf(l = e[s - 1]) === -1 ? (n.push(n[s - 1]), e.push(l)) : (n.push(s), e.push(Qs)) : (n.push(s), f === kp ? e.push(A === "strict" ? Sg : Is) : f === wh || f === Mp ? e.push(Qs) : f === Gp ? e.push(131072 <= d && d <= 196605 || 196608 <= d && d <= 262141 ? Is : Qs) : void e.push(f));
  }), [n, e, i];
}, Rf = function(t, A, e, n) {
  var i = n[e];
  if (Array.isArray(t) ? t.indexOf(i) !== -1 : t === i)
    for (var d = e; d <= n.length; ) {
      if ((s = n[++d]) === A)
        return !0;
      if (s !== Eu)
        break;
    }
  if (i === Eu)
    for (d = e; 0 < d; ) {
      var s, l = n[--d];
      if (Array.isArray(t) ? t.indexOf(l) !== -1 : t === l)
        for (var f = e; f <= n.length; ) {
          if ((s = n[++f]) === A)
            return !0;
          if (s !== Eu)
            break;
        }
      if (l !== Eu)
        break;
    }
  return !1;
}, tw = function(t, A) {
  for (var e = t; 0 <= e; ) {
    var n = A[e];
    if (n !== Eu)
      return n;
    e--;
  }
  return 0;
}, Jp = function(t, A, e, n, s) {
  if (e[n] === 0 || (n -= 1, Array.isArray(s) && s[n] === !0))
    return Ht;
  var d, s = n - 1, l = 1 + n, f = A[n], h = 0 <= s ? A[s] : 0, w = A[l];
  if (f === lh && w === fh)
    return Ht;
  if (Vg.indexOf(f) !== -1)
    return Qh;
  if (Vg.indexOf(w) !== -1 || hh.indexOf(w) !== -1)
    return Ht;
  if (tw(n, A) === gh)
    return Yc;
  if (Gg.get(t[n]) === Lg || (f === Xc || f === Wc) && Gg.get(t[l]) === Lg || f === j0 || w === j0 || f === q0 || [Eu, xg, ns].indexOf(f) === -1 && w === q0 || [Jc, Xd, Op, ra, ua].indexOf(w) !== -1 || tw(n, A) === Wd || Rf(Gf, Wd, n, A) || Rf([Jc, Xd], Sg, n, A) || Rf(z0, z0, n, A))
    return Ht;
  if (f === Eu)
    return Yc;
  if (f === Gf || w === Gf)
    return Ht;
  if (w === _g || f === _g)
    return Yc;
  if ([xg, ns, Sg].indexOf(w) !== -1 || f === Tp || h === Mg && Np.indexOf(f) !== -1 || f === ua && w === Mg || w === $0 || kr.indexOf(w) !== -1 && f === en || kr.indexOf(f) !== -1 && w === en || f === us && [Is, Xc, Wc].indexOf(w) !== -1 || [Is, Xc, Wc].indexOf(f) !== -1 && w === rs || kr.indexOf(f) !== -1 && Aw.indexOf(w) !== -1 || Aw.indexOf(f) !== -1 && kr.indexOf(w) !== -1 || [us, rs].indexOf(f) !== -1 && (w === en || [Wd, ns].indexOf(w) !== -1 && A[1 + l] === en) || [Wd, ns].indexOf(f) !== -1 && w === en || f === en && [en, ua, ra].indexOf(w) !== -1)
    return Ht;
  if ([en, ua, ra, Jc, Xd].indexOf(w) !== -1)
    for (var p = n; 0 <= p; ) {
      if ((d = A[p]) === en)
        return Ht;
      if ([ua, ra].indexOf(d) === -1)
        break;
      p--;
    }
  if ([us, rs].indexOf(w) !== -1)
    for (p = [Jc, Xd].indexOf(f) !== -1 ? s : n; 0 <= p; ) {
      if ((d = A[p]) === en)
        return Ht;
      if ([ua, ra].indexOf(d) === -1)
        break;
      p--;
    }
  if (kg === f && [kg, qB, Tg, Og].indexOf(w) !== -1 || [qB, Tg].indexOf(f) !== -1 && [qB, zB].indexOf(w) !== -1 || [zB, Og].indexOf(f) !== -1 && w === zB || ew.indexOf(f) !== -1 && [$0, rs].indexOf(w) !== -1 || ew.indexOf(w) !== -1 && f === us || kr.indexOf(f) !== -1 && kr.indexOf(w) !== -1 || f === ra && kr.indexOf(w) !== -1 || kr.concat(en).indexOf(f) !== -1 && w === Wd && Vp.indexOf(t[l]) === -1 || kr.concat(en).indexOf(w) !== -1 && f === Xd)
    return Ht;
  if (f === Vf && w === Vf) {
    for (var K = e[n], _ = 1; 0 < K && A[--K] === Vf; )
      _++;
    if (_ % 2 != 0)
      return Ht;
  }
  return f === Xc && w === Wc ? Ht : Yc;
}, Xp = function(t, d) {
  var i = Pp(t, (d = d || { lineBreak: "normal", wordBreak: "normal" }).lineBreak), e = i[0], n = i[1], i = i[2], d = (d.wordBreak !== "break-all" && d.wordBreak !== "break-word" || (n = n.map(function(s) {
    return [en, Qs, wh].indexOf(s) !== -1 ? Is : s;
  })), d.wordBreak === "keep-all" ? i.map(function(s, l) {
    return s && 19968 <= t[l] && t[l] <= 40959;
  }) : void 0);
  return [e, n, d];
}, Wp = function() {
  function t(A, e, n, i) {
    this.codePoints = A, this.required = e === Qh, this.start = n, this.end = i;
  }
  return t.prototype.slice = function() {
    return be.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, t;
}(), Yp = function(n, A) {
  var e = El(n), n = Xp(e, A), i = n[0], d = n[1], s = n[2], l = e.length, f = 0, h = 0;
  return { next: function() {
    if (l <= h)
      return { done: !0, value: null };
    for (var w, p = Ht; h < l && (p = Jp(e, d, i, ++h, s)) === Ht; )
      ;
    return p !== Ht || h === l ? (w = new Wp(e, p, f, h), f = h, { value: w, done: !1 }) : { done: !0, value: null };
  } };
}, Zp = 1, jp = 2, Ts = 4, nw = 8, il = 10, rw = 47, hs = 92, qp = 9, zp = 32, Zc = 34, Yd = 61, $p = 35, A1 = 36, e1 = 37, jc = 39, qc = 40, Zd = 41, t1 = 95, Tt = 45, n1 = 33, r1 = 60, u1 = 62, o1 = 64, i1 = 91, a1 = 93, d1 = 61, s1 = 123, zc = 63, c1 = 125, uw = 124, B1 = 126, l1 = 128, ow = 65533, Nf = 42, Po = 43, f1 = 44, g1 = 58, w1 = 59, vs = 46, Q1 = 0, h1 = 8, C1 = 11, F1 = 14, U1 = 31, p1 = 127, Br = -1, Ch = 48, Fh = 97, Uh = 101, m1 = 102, E1 = 117, D1 = 122, ph = 65, mh = 69, Eh = 70, H1 = 85, y1 = 90, bt = function(t) {
  return Ch <= t && t <= 57;
}, b1 = function(t) {
  return 55296 <= t && t <= 57343;
}, oa = function(t) {
  return bt(t) || ph <= t && t <= Eh || Fh <= t && t <= m1;
}, I1 = function(t) {
  return Fh <= t && t <= D1;
}, v1 = function(t) {
  return ph <= t && t <= y1;
}, K1 = function(t) {
  return I1(t) || v1(t);
}, L1 = function(t) {
  return l1 <= t;
}, $c = function(t) {
  return t === il || t === qp || t === zp;
}, al = function(t) {
  return K1(t) || L1(t) || t === t1;
}, iw = function(t) {
  return al(t) || bt(t) || t === Tt;
}, x1 = function(t) {
  return Q1 <= t && t <= h1 || t === C1 || F1 <= t && t <= U1 || t === p1;
}, Fu = function(t, A) {
  return t === hs && A !== il;
}, AB = function(t, A, e) {
  return t === Tt ? al(A) || Fu(A, e) : !!al(t) || !(t !== hs || !Fu(t, A));
}, Pf = function(t, A, e) {
  return t === Po || t === Tt ? !!bt(A) || A === vs && bt(e) : bt(t === vs ? A : t);
}, _1 = function(t) {
  var A = 0, e = 1;
  t[A] !== Po && t[A] !== Tt || (t[A] === Tt && (e = -1), A++);
  for (var n = []; bt(t[A]); )
    n.push(t[A++]);
  var i = n.length ? parseInt(be.apply(void 0, n), 10) : 0;
  t[A] === vs && A++;
  for (var d = []; bt(t[A]); )
    d.push(t[A++]);
  var s = d.length, l = s ? parseInt(be.apply(void 0, d), 10) : 0, f = (t[A] !== mh && t[A] !== Uh || A++, 1);
  t[A] !== Po && t[A] !== Tt || (t[A] === Tt && (f = -1), A++);
  for (var h = []; bt(t[A]); )
    h.push(t[A++]);
  var w = h.length ? parseInt(be.apply(void 0, h), 10) : 0;
  return e * (i + l * Math.pow(10, -s)) * Math.pow(10, f * w);
}, S1 = { type: 2 }, T1 = { type: 3 }, O1 = { type: 4 }, M1 = { type: 13 }, k1 = { type: 8 }, G1 = { type: 21 }, V1 = { type: 9 }, R1 = { type: 10 }, N1 = { type: 11 }, P1 = { type: 12 }, J1 = { type: 14 }, eB = { type: 23 }, X1 = { type: 1 }, W1 = { type: 25 }, Y1 = { type: 24 }, Z1 = { type: 26 }, j1 = { type: 27 }, q1 = { type: 28 }, z1 = { type: 29 }, $1 = { type: 31 }, Rg = { type: 32 }, Dh = function() {
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
      case Zc:
        return this.consumeStringToken(Zc);
      case $p:
        var e = this.peekCodePoint(0), n = this.peekCodePoint(1), i = this.peekCodePoint(2);
        if (iw(e) || Fu(n, i))
          return e = AB(e, n, i) ? jp : Zp, { type: 5, value: this.consumeName(), flags: e };
        break;
      case A1:
        if (this.peekCodePoint(0) === Yd)
          return this.consumeCodePoint(), M1;
        break;
      case jc:
        return this.consumeStringToken(jc);
      case qc:
        return S1;
      case Zd:
        return T1;
      case Nf:
        if (this.peekCodePoint(0) === Yd)
          return this.consumeCodePoint(), J1;
        break;
      case Po:
        if (Pf(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case f1:
        return O1;
      case Tt:
        if (n = A, i = this.peekCodePoint(0), e = this.peekCodePoint(1), Pf(n, i, e))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (AB(n, i, e))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (i === Tt && e === u1)
          return this.consumeCodePoint(), this.consumeCodePoint(), Y1;
        break;
      case vs:
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
      case g1:
        return Z1;
      case w1:
        return j1;
      case r1:
        if (this.peekCodePoint(0) === n1 && this.peekCodePoint(1) === Tt && this.peekCodePoint(2) === Tt)
          return this.consumeCodePoint(), this.consumeCodePoint(), W1;
        break;
      case o1:
        if (n = this.peekCodePoint(0), i = this.peekCodePoint(1), e = this.peekCodePoint(2), AB(n, i, e))
          return { type: 7, value: this.consumeName() };
        break;
      case i1:
        return q1;
      case hs:
        if (Fu(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case a1:
        return z1;
      case d1:
        if (this.peekCodePoint(0) === Yd)
          return this.consumeCodePoint(), k1;
        break;
      case s1:
        return N1;
      case c1:
        return P1;
      case E1:
      case H1:
        return n = this.peekCodePoint(0), i = this.peekCodePoint(1), n !== Po || !oa(i) && i !== zc || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case uw:
        if (this.peekCodePoint(0) === Yd)
          return this.consumeCodePoint(), V1;
        if (this.peekCodePoint(0) === uw)
          return this.consumeCodePoint(), G1;
        break;
      case B1:
        if (this.peekCodePoint(0) === Yd)
          return this.consumeCodePoint(), R1;
        break;
      case Br:
        return Rg;
    }
    return $c(A) ? (this.consumeWhiteSpace(), $1) : bt(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : al(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: be(A) };
  }, t.prototype.consumeCodePoint = function() {
    var A = this._value.shift();
    return "u" < typeof A ? -1 : A;
  }, t.prototype.reconsumeCodePoint = function(A) {
    this._value.unshift(A);
  }, t.prototype.peekCodePoint = function(A) {
    return A >= this._value.length ? -1 : this._value[A];
  }, t.prototype.consumeUnicodeRangeToken = function() {
    for (var A = [], e = this.consumeCodePoint(); oa(e) && A.length < 6; )
      A.push(e), e = this.consumeCodePoint();
    for (var n = !1; e === zc && A.length < 6; )
      A.push(e), e = this.consumeCodePoint(), n = !0;
    if (n)
      return { type: 30, start: parseInt(be.apply(void 0, A.map(function(s) {
        return s === zc ? Ch : s;
      })), 16), end: parseInt(be.apply(void 0, A.map(function(s) {
        return s === zc ? Eh : s;
      })), 16) };
    var i = parseInt(be.apply(void 0, A), 16);
    if (this.peekCodePoint(0) === Tt && oa(this.peekCodePoint(1))) {
      this.consumeCodePoint();
      for (var e = this.consumeCodePoint(), d = []; oa(e) && d.length < 6; )
        d.push(e), e = this.consumeCodePoint();
      return { type: 30, start: i, end: parseInt(be.apply(void 0, d), 16) };
    }
    return { type: 30, start: i, end: i };
  }, t.prototype.consumeIdentLikeToken = function() {
    var A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === qc ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === qc ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }, t.prototype.consumeUrlToken = function() {
    var A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === Br)
      return { type: 22, value: "" };
    var e = this.peekCodePoint(0);
    if (e === jc || e === Zc)
      return (e = this.consumeStringToken(this.consumeCodePoint())).type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Br || this.peekCodePoint(0) === Zd) ? (this.consumeCodePoint(), { type: 22, value: e.value }) : (this.consumeBadUrlRemnants(), eB);
    for (; ; ) {
      var n = this.consumeCodePoint();
      if (n === Br || n === Zd)
        return { type: 22, value: be.apply(void 0, A) };
      if ($c(n))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === Br || this.peekCodePoint(0) === Zd ? (this.consumeCodePoint(), { type: 22, value: be.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), eB);
      if (n === Zc || n === jc || n === qc || x1(n))
        return this.consumeBadUrlRemnants(), eB;
      if (n === hs) {
        if (!Fu(n, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), eB;
        A.push(this.consumeEscapedCodePoint());
      } else
        A.push(n);
    }
  }, t.prototype.consumeWhiteSpace = function() {
    for (; $c(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, t.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var A = this.consumeCodePoint();
      if (A === Zd || A === Br)
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
        return this._value.splice(0, n), X1;
      d === hs && (i = this._value[n + 1]) !== Br && i !== void 0 && (i === il ? (e += this.consumeStringSlice(n), n = -1, this._value.shift()) : Fu(d, i) && (e = (e += this.consumeStringSlice(n)) + be(this.consumeEscapedCodePoint()), n = -1)), n++;
    }
  }, t.prototype.consumeNumber = function() {
    var A = [], e = Ts;
    for ((n = this.peekCodePoint(0)) !== Po && n !== Tt || A.push(this.consumeCodePoint()); bt(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    var n = this.peekCodePoint(0), i = this.peekCodePoint(1);
    if (n === vs && bt(i))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = nw; bt(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    n = this.peekCodePoint(0);
    var i = this.peekCodePoint(1), d = this.peekCodePoint(2);
    if ((n === mh || n === Uh) && ((i === Po || i === Tt) && bt(d) || bt(i)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = nw; bt(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [_1(A), e];
  }, t.prototype.consumeNumericToken = function() {
    var e = this.consumeNumber(), A = e[0], e = e[1], n = this.peekCodePoint(0), i = this.peekCodePoint(1), d = this.peekCodePoint(2);
    return AB(n, i, d) ? { type: 15, number: A, flags: e, unit: this.consumeName() } : n === e1 ? (this.consumeCodePoint(), { type: 16, number: A, flags: e }) : { type: 17, number: A, flags: e };
  }, t.prototype.consumeEscapedCodePoint = function() {
    var A = this.consumeCodePoint();
    if (oa(A)) {
      for (var e = be(A); oa(this.peekCodePoint(0)) && e.length < 6; )
        e += be(this.consumeCodePoint());
      $c(this.peekCodePoint(0)) && this.consumeCodePoint();
      var n = parseInt(e, 16);
      return n === 0 || b1(n) || 1114111 < n ? ow : n;
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
      if (n.type === 32 || A4(n, A))
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
}(), Cs = function(t) {
  return t.type === 15;
}, $B = function(t) {
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
}, A4 = function(t, A) {
  return A === 11 && t.type === 12 || A === 28 && t.type === 29 || A === 2 && t.type === 3;
}, vu = function(t) {
  return t.type === 17 || t.type === 15;
}, ke = function(t) {
  return t.type === 16 || vu(t);
}, aw = function(t) {
  return 1 < t.length ? [t[0], t[1]] : [t[0]];
}, nt = { type: 17, number: 0, flags: Ts }, Q0 = { type: 16, number: 50, flags: Ts }, Du = { type: 16, number: 100, flags: Ts }, os = function(i, A, e) {
  var n = i[0], i = i[1];
  return [ae(n, A), ae(typeof i < "u" ? i : n, e)];
}, ae = function(t, A) {
  if (t.type === 16)
    return t.number / 100 * A;
  if (Cs(t))
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
      return [nt, Du];
    case "to right":
    case "left":
      return bn(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Du, Du];
    case "to bottom":
    case "top":
      return bn(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Du, nt];
    case "to left":
    case "right":
      return bn(270);
  }
  return 0;
}, bn = function(t) {
  return Math.PI * t / 180;
}, Ku = { name: "color", parse: function(t, A) {
  if (A.type === 18) {
    var e = e4[A.name];
    if ("u" < typeof e)
      throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
    return e(t, A.values);
  }
  if (A.type === 5) {
    var n, i, d, s;
    if (A.value.length === 3)
      return n = A.value.substring(0, 1), i = A.value.substring(1, 2), d = A.value.substring(2, 3), Hu(parseInt(n + n, 16), parseInt(i + i, 16), parseInt(d + d, 16), 1);
    if (A.value.length === 4)
      return n = A.value.substring(0, 1), i = A.value.substring(1, 2), d = A.value.substring(2, 3), s = A.value.substring(3, 4), Hu(parseInt(n + n, 16), parseInt(i + i, 16), parseInt(d + d, 16), parseInt(s + s, 16) / 255);
    if (A.value.length === 6)
      return n = A.value.substring(0, 2), i = A.value.substring(2, 4), d = A.value.substring(4, 6), Hu(parseInt(n, 16), parseInt(i, 16), parseInt(d, 16), 1);
    if (A.value.length === 8)
      return n = A.value.substring(0, 2), i = A.value.substring(2, 4), d = A.value.substring(4, 6), s = A.value.substring(6, 8), Hu(parseInt(n, 16), parseInt(i, 16), parseInt(d, 16), parseInt(s, 16) / 255);
  }
  return A.type === 20 && (e = Ks[A.value.toUpperCase()], typeof e < "u") ? e : Ks.TRANSPARENT;
} }, Da = function(t) {
  return (255 & t) == 0;
}, Ze = function(i) {
  var A = 255 & i, e = 255 & i >> 8, n = 255 & i >> 16, i = 255 & i >> 24;
  return A < 255 ? "rgba(" + i + "," + n + "," + e + "," + A / 255 + ")" : "rgb(" + i + "," + n + "," + e + ")";
}, Hu = function(t, A, e, n) {
  return (t << 24 | A << 16 | e << 8 | Math.round(255 * n) << 0) >>> 0;
}, dw = function(t, A) {
  var e;
  return t.type === 17 ? t.number : t.type === 16 ? (e = A === 3 ? 1 : 255, A === 3 ? t.number / 100 * e : Math.round(t.number / 100 * e)) : 0;
}, sw = function(t, d) {
  var e, n, i, d = d.filter(Dl);
  return d.length === 3 ? (e = (i = d.map(dw))[0], n = i[1], i = i[2], Hu(e, n, i, 1)) : d.length === 4 ? (e = (d = d.map(dw))[0], n = d[1], i = d[2], d = d[3], Hu(e, n, i, d)) : 0;
};
function Xf(t, A, e) {
  return e < 0 && (e += 1), 1 <= e && --e, e < 1 / 6 ? (A - t) * e * 6 + t : e < 0.5 ? A : e < 2 / 3 ? 6 * (A - t) * (2 / 3 - e) + t : t;
}
var cw = function(i, n) {
  var e, n = n.filter(Dl), d = n[0], s = n[1], l = n[2], n = n[3], i = (d.type === 17 ? bn(d.number) : Hl.parse(i, d)) / (2 * Math.PI), d = ke(s) ? s.number / 100 : 0, s = ke(l) ? l.number / 100 : 0, l = typeof n < "u" && ke(n) ? ae(n, 1) : 1;
  return d == 0 ? Hu(255 * s, 255 * s, 255 * s, 1) : (d = Xf(s = 2 * s - (n = s <= 0.5 ? s * (1 + d) : s + d - s * d), n, i + 1 / 3), e = Xf(s, n, i), s = Xf(s, n, i - 1 / 3), Hu(255 * d, 255 * e, 255 * s, l));
}, e4 = { hsl: cw, hsla: cw, rgb: sw, rgba: sw }, Bw = function(t, A) {
  return Ku.parse(t, Hh.create(A).parseComponentValue());
}, Ks = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, t4 = { name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function(t, A) {
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
} }, n4 = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, yl = function(t, A) {
  return t = Ku.parse(t, A[0]), A = A[1], A && ke(A) ? { color: t, stop: A } : { color: t, stop: null };
}, lw = function(t, A) {
  var e = t[0], n = t[t.length - 1];
  e.stop === null && (e.stop = nt), n.stop === null && (n.stop = Du);
  for (var i = [], d = 0, s = 0; s < t.length; s++) {
    var l = t[s].stop;
    l !== null ? (l = ae(l, A), i.push(d < l ? l : d), d = l) : i.push(null);
  }
  for (var f = null, s = 0; s < i.length; s++) {
    var h = i[s];
    if (h === null)
      f === null && (f = s);
    else if (f !== null) {
      for (var w = s - f, p = (h - i[f - 1]) / (1 + w), K = 1; K <= w; K++)
        i[f + K - 1] = p * K;
      f = null;
    }
  }
  return t.map(function(_, S) {
    return { color: _.color, stop: Math.max(Math.min(1, i[S] / A), 0) };
  });
}, r4 = function(t, i, e) {
  var d = i / 2, n = e / 2, i = ae(t[0], i) - d, d = n - ae(t[1], e);
  return (Math.atan2(d, i) + 2 * Math.PI) % (2 * Math.PI);
}, u4 = function(f, i, d) {
  var f = typeof f == "number" ? f : r4(f, i, d), n = Math.abs(i * Math.sin(f)) + Math.abs(d * Math.cos(f)), i = i / 2, d = d / 2, s = n / 2, l = Math.sin(f - Math.PI / 2) * s, f = Math.cos(f - Math.PI / 2) * s;
  return [n, i - f, i + f, d - l, d + l];
}, Xn = function(t, A) {
  return Math.sqrt(t * t + A * A);
}, fw = function(t, A, e, n, i) {
  return [[0, 0], [0, A], [t, 0], [t, A]].reduce(function(d, s) {
    var f = s[0], l = s[1], f = Xn(e - f, n - l);
    return (i ? f < d.optimumDistance : f > d.optimumDistance) ? { optimumCorner: s, optimumDistance: f } : d;
  }, { optimumDistance: i ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, o4 = function(t, A, e, n, i) {
  var d, s, l, f, h = 0, w = 0;
  switch (t.size) {
    case 0:
      t.shape === 0 ? h = w = Math.min(Math.abs(A), Math.abs(A - n), Math.abs(e), Math.abs(e - i)) : t.shape === 1 && (h = Math.min(Math.abs(A), Math.abs(A - n)), w = Math.min(Math.abs(e), Math.abs(e - i)));
      break;
    case 2:
      t.shape === 0 ? h = w = Math.min(Xn(A, e), Xn(A, e - i), Xn(A - n, e), Xn(A - n, e - i)) : t.shape === 1 && (d = Math.min(Math.abs(e), Math.abs(e - i)) / Math.min(Math.abs(A), Math.abs(A - n)), l = (f = fw(n, i, A, e, !0))[0], f = f[1], w = d * (h = Xn(l - A, (f - e) / d)));
      break;
    case 1:
      t.shape === 0 ? h = w = Math.max(Math.abs(A), Math.abs(A - n), Math.abs(e), Math.abs(e - i)) : t.shape === 1 && (h = Math.max(Math.abs(A), Math.abs(A - n)), w = Math.max(Math.abs(e), Math.abs(e - i)));
      break;
    case 3:
      t.shape === 0 ? h = w = Math.max(Xn(A, e), Xn(A, e - i), Xn(A - n, e), Xn(A - n, e - i)) : t.shape === 1 && (d = Math.max(Math.abs(e), Math.abs(e - i)) / Math.max(Math.abs(A), Math.abs(A - n)), l = (s = fw(n, i, A, e, !1))[0], f = s[1], w = d * (h = Xn(l - A, (f - e) / d)));
  }
  return Array.isArray(t.size) && (h = ae(t.size[0], n), w = t.size.length === 2 ? ae(t.size[1], i) : h), [h, w];
}, i4 = function(t, A) {
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
}, tB = function(t, A) {
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
}, a4 = function(t, A) {
  var e = bn(180), n = [], i = 1;
  return fr(A).forEach(function(f, s) {
    var l, f = f[0];
    if (s === 0) {
      if (Ue(f) && f.value === "linear")
        return void (i = 1);
      if (Ue(f) && f.value === "radial")
        return void (i = 2);
    }
    f.type === 18 && (f.name === "from" ? (l = Ku.parse(t, f.values[0]), n.push({ stop: nt, color: l })) : f.name === "to" ? (l = Ku.parse(t, f.values[0]), n.push({ stop: Du, color: l })) : f.name === "color-stop" && (s = f.values.filter(Dl)).length === 2 && (l = Ku.parse(t, s[1]), f = s[0], $B(f)) && n.push({ stop: { type: 16, number: 100 * f.number, flags: f.flags }, color: l }));
  }), i === 1 ? { angle: (e + bn(180)) % bn(360), stops: n, type: i } : { size: 3, shape: 0, stops: n, position: [], type: i };
}, xh = "closest-side", _h = "farthest-side", Sh = "closest-corner", Th = "farthest-corner", Oh = "circle", Mh = "ellipse", kh = "cover", Gh = "contain", d4 = function(t, A) {
  var e = 0, n = 3, i = [], d = [];
  return fr(A).forEach(function(s, l) {
    var f, h = !0;
    l === 0 && (f = !1, h = s.reduce(function(w, p) {
      if (f)
        if (Ue(p))
          switch (p.value) {
            case "center":
              return d.push(Q0), w;
            case "top":
            case "left":
              return d.push(nt), w;
            case "right":
            case "bottom":
              return d.push(Du), w;
          }
        else
          (ke(p) || vu(p)) && d.push(p);
      else if (Ue(p))
        switch (p.value) {
          case Oh:
            return e = 0, !1;
          case Mh:
            return !(e = 1);
          case "at":
            return !(f = !0);
          case xh:
            return n = 0, !1;
          case kh:
          case _h:
            return !(n = 1);
          case Gh:
          case Sh:
            return !(n = 2);
          case Th:
            return !(n = 3);
        }
      else if (vu(p) || ke(p))
        return (n = Array.isArray(n) ? n : []).push(p), !1;
      return w;
    }, h)), h && (l = yl(t, s), i.push(l));
  }), { size: n, shape: e, stops: i, position: d, type: 2 };
}, nB = function(t, A) {
  var e = 0, n = 3, i = [], d = [];
  return fr(A).forEach(function(s, l) {
    var f = !0;
    l === 0 ? f = s.reduce(function(h, w) {
      if (Ue(w))
        switch (w.value) {
          case "center":
            return d.push(Q0), !1;
          case "top":
          case "left":
            return d.push(nt), !1;
          case "right":
          case "bottom":
            return d.push(Du), !1;
        }
      else if (ke(w) || vu(w))
        return d.push(w), !1;
      return h;
    }, f) : l === 1 && (f = s.reduce(function(h, w) {
      if (Ue(w))
        switch (w.value) {
          case Oh:
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
          case Th:
            return !(n = 3);
        }
      else if (vu(w) || ke(w))
        return (n = Array.isArray(n) ? n : []).push(w), !1;
      return h;
    }, f)), f && (l = yl(t, s), i.push(l));
  }), { size: n, shape: e, stops: i, position: d, type: 2 };
}, s4 = function(t) {
  return t.type === 1;
}, c4 = function(t) {
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
function B4(t) {
  return !(t.type === 20 && t.value === "none" || t.type === 18 && !Vh[t.name]);
}
for (var Ha, rB, jd, Vh = { "linear-gradient": i4, "-moz-linear-gradient": tB, "-ms-linear-gradient": tB, "-o-linear-gradient": tB, "-webkit-linear-gradient": tB, "radial-gradient": d4, "-moz-radial-gradient": nB, "-ms-radial-gradient": nB, "-o-radial-gradient": nB, "-webkit-radial-gradient": nB, "-webkit-gradient": a4 }, l4 = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  var e;
  return A.length === 0 || (e = A[0]).type === 20 && e.value === "none" ? [] : A.filter(function(n) {
    return Dl(n) && B4(n);
  }).map(function(n) {
    return Wf.parse(t, n);
  });
} }, f4 = { name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function(t, A) {
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
} }, g4 = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(t, A) {
  return fr(A).map(function(e) {
    return e.filter(ke);
  }).map(aw);
} }, w4 = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(t, A) {
  return fr(A).map(function(e) {
    return e.filter(Ue).map(function(n) {
      return n.value;
    }).join(" ");
  }).map(Q4);
} }, Q4 = function(t) {
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
}, h4 = (function(t) {
  t.AUTO = "auto", t.CONTAIN = "contain", t.COVER = "cover";
}(Ha = Ha || {}), { name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function(t, A) {
  return fr(A).map(function(e) {
    return e.filter(C4);
  });
} }), C4 = function(t) {
  return Ue(t) || ke(t);
}, uB = function(t) {
  return { name: "border-" + t + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
}, F4 = uB("top"), U4 = uB("right"), p4 = uB("bottom"), m4 = uB("left"), oB = function(t) {
  return { name: "border-radius-" + t, initialValue: "0 0", prefix: !1, type: 1, parse: function(A, e) {
    return aw(e.filter(ke));
  } };
}, E4 = oB("top-left"), D4 = oB("top-right"), H4 = oB("bottom-right"), y4 = oB("bottom-left"), iB = function(t) {
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
}, b4 = iB("top"), I4 = iB("right"), v4 = iB("bottom"), K4 = iB("left"), aB = function(t) {
  return { name: "border-" + t + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(A, e) {
    return Cs(e) ? e.number : 0;
  } };
}, L4 = aB("top"), x4 = aB("right"), _4 = aB("bottom"), S4 = aB("left"), T4 = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, O4 = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "rtl" ? 0 : 1;
} }, M4 = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(Ue).reduce(function(e, n) {
    return e | k4(n.value);
  }, 0);
} }, k4 = function(t) {
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
}, G4 = { name: "float", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
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
} }, V4 = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(t, A) {
  return A.type === 20 && A.value === "normal" || A.type !== 17 && A.type !== 15 ? 0 : A.number;
} }, R4 = (function(t) {
  t.NORMAL = "normal", t.STRICT = "strict";
}(rB = rB || {}), { name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "strict" ? rB.NORMAL : rB.STRICT;
} }), N4 = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 }, gw = function(t, A) {
  return Ue(t) && t.value === "normal" ? 1.2 * A : t.type === 17 ? A * t.number : ke(t) ? ae(t, A) : A;
}, P4 = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(t, A) {
  return A.type === 20 && A.value === "none" ? null : Wf.parse(t, A);
} }, J4 = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "inside" ? 1 : 0;
} }, X4 = { name: "list-style-type", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
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
} }, dB = function(t) {
  return { name: "margin-" + t, initialValue: "0", prefix: !1, type: 4 };
}, W4 = dB("top"), Y4 = dB("right"), Z4 = dB("bottom"), j4 = dB("left"), q4 = { name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function(t, A) {
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
} }, z4 = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "break-word" ? "normal" : "break-word";
} }, sB = function(t) {
  return { name: "padding-" + t, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
}, $4 = sB("top"), Am = sB("right"), em = sB("bottom"), tm = sB("left"), nm = { name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, rm = { name: "position", initialValue: "static", prefix: !1, type: 2, parse: function(t, A) {
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
} }, um = { name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.length === 1 && Jf(A[0], "none") ? [] : fr(A).map(function(e) {
    for (var n = { color: Ks.TRANSPARENT, offsetX: nt, offsetY: nt, blur: nt }, i = 0, d = 0; d < e.length; d++) {
      var s = e[d];
      vu(s) ? (i === 0 ? n.offsetX = s : i === 1 ? n.offsetY = s : n.blur = s, i++) : n.color = Ku.parse(t, s);
    }
    return n;
  });
} }, om = { name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, im = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(t, A) {
  if (A.type === 20 && A.value === "none" || A.type !== 18)
    return null;
  var e = sm[A.name];
  if ("u" < typeof e)
    throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
  return e(A.values);
} }, am = function(t) {
  return t = t.filter(function(A) {
    return A.type === 17;
  }).map(function(A) {
    return A.number;
  }), t.length === 6 ? t : null;
}, dm = function(A) {
  var A = A.filter(function(f) {
    return f.type === 17;
  }).map(function(f) {
    return f.number;
  }), e = A[0], n = A[1], i = (A[2], A[3], A[4]), d = A[5], s = (A[6], A[7], A[8], A[9], A[10], A[11], A[12]), l = A[13];
  return A[14], A[15], A.length === 16 ? [e, n, i, d, s, l] : null;
}, sm = { matrix: am, matrix3d: dm }, ww = { type: 16, number: 50, flags: Ts }, cm = [ww, ww], Bm = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(t, A) {
  return A = A.filter(ke), A.length !== 2 ? cm : [A[0], A[1]];
} }, lm = { name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "hidden":
      return 1;
    case "collapse":
      return 2;
    default:
      return 0;
  }
} }, fm = (function(t) {
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
} }), gm = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(t, A) {
  if (A.type === 20)
    return { auto: !0, order: 0 };
  if ($B(A))
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
} }, wm = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(t, A) {
  return $B(A) ? A.number : 1;
} }, Qm = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, hm = { name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function(t, A) {
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
} }, Cm = { name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function(t, A) {
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
} }, Fm = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" }, Um = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(t, A) {
  return $B(A) ? A.number : !Ue(A) || A.value !== "bold" ? 400 : 700;
} }, pm = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.filter(Ue).map(function(e) {
    return e.value;
  });
} }, mm = { name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
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
}, Em = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(Cs).map(function(e) {
    return Qw.parse(t, e);
  });
} }, Dm = { name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.length === 1 && Jf(A[0], "none") ? [] : fr(A).map(function(e) {
    for (var n = { color: 255, offsetX: nt, offsetY: nt, blur: nt, spread: nt, inset: !1 }, i = 0, d = 0; d < e.length; d++) {
      var s = e[d];
      Jf(s, "inset") ? n.inset = !0 : vu(s) ? (i === 0 ? n.offsetX = s : i === 1 ? n.offsetY = s : i === 2 ? n.blur = s : n.spread = s, i++) : n.color = Ku.parse(t, s);
    }
    return n;
  });
} }, Hm = { name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function(t, A) {
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
} }, ym = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" }, bm = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(t, A) {
  return Cs(A) ? A.number : 0;
} }, Im = function() {
  function t(A, e) {
    this.animationDuration = dA(A, Em, e.animationDuration), this.backgroundClip = dA(A, t4, e.backgroundClip), this.backgroundColor = dA(A, n4, e.backgroundColor), this.backgroundImage = dA(A, l4, e.backgroundImage), this.backgroundOrigin = dA(A, f4, e.backgroundOrigin), this.backgroundPosition = dA(A, g4, e.backgroundPosition), this.backgroundRepeat = dA(A, w4, e.backgroundRepeat), this.backgroundSize = dA(A, h4, e.backgroundSize), this.borderTopColor = dA(A, F4, e.borderTopColor), this.borderRightColor = dA(A, U4, e.borderRightColor), this.borderBottomColor = dA(A, p4, e.borderBottomColor), this.borderLeftColor = dA(A, m4, e.borderLeftColor), this.borderTopLeftRadius = dA(A, E4, e.borderTopLeftRadius), this.borderTopRightRadius = dA(A, D4, e.borderTopRightRadius), this.borderBottomRightRadius = dA(A, H4, e.borderBottomRightRadius), this.borderBottomLeftRadius = dA(A, y4, e.borderBottomLeftRadius), this.borderTopStyle = dA(A, b4, e.borderTopStyle), this.borderRightStyle = dA(A, I4, e.borderRightStyle), this.borderBottomStyle = dA(A, v4, e.borderBottomStyle), this.borderLeftStyle = dA(A, K4, e.borderLeftStyle), this.borderTopWidth = dA(A, L4, e.borderTopWidth), this.borderRightWidth = dA(A, x4, e.borderRightWidth), this.borderBottomWidth = dA(A, _4, e.borderBottomWidth), this.borderLeftWidth = dA(A, S4, e.borderLeftWidth), this.boxShadow = dA(A, Dm, e.boxShadow), this.color = dA(A, T4, e.color), this.direction = dA(A, O4, e.direction), this.display = dA(A, M4, e.display), this.float = dA(A, G4, e.cssFloat), this.fontFamily = dA(A, Cm, e.fontFamily), this.fontSize = dA(A, Fm, e.fontSize), this.fontStyle = dA(A, mm, e.fontStyle), this.fontVariant = dA(A, pm, e.fontVariant), this.fontWeight = dA(A, Um, e.fontWeight), this.letterSpacing = dA(A, V4, e.letterSpacing), this.lineBreak = dA(A, R4, e.lineBreak), this.lineHeight = dA(A, N4, e.lineHeight), this.listStyleImage = dA(A, P4, e.listStyleImage), this.listStylePosition = dA(A, J4, e.listStylePosition), this.listStyleType = dA(A, X4, e.listStyleType), this.marginTop = dA(A, W4, e.marginTop), this.marginRight = dA(A, Y4, e.marginRight), this.marginBottom = dA(A, Z4, e.marginBottom), this.marginLeft = dA(A, j4, e.marginLeft), this.opacity = dA(A, wm, e.opacity);
    var n = dA(A, q4, e.overflow);
    this.overflowX = n[0], this.overflowY = n[1 < n.length ? 1 : 0], this.overflowWrap = dA(A, z4, e.overflowWrap), this.paddingTop = dA(A, $4, e.paddingTop), this.paddingRight = dA(A, Am, e.paddingRight), this.paddingBottom = dA(A, em, e.paddingBottom), this.paddingLeft = dA(A, tm, e.paddingLeft), this.paintOrder = dA(A, Hm, e.paintOrder), this.position = dA(A, rm, e.position), this.textAlign = dA(A, nm, e.textAlign), this.textDecorationColor = dA(A, Qm, (n = e.textDecorationColor) != null ? n : e.color), this.textDecorationLine = dA(A, hm, (n = e.textDecorationLine) != null ? n : e.textDecoration), this.textShadow = dA(A, um, e.textShadow), this.textTransform = dA(A, om, e.textTransform), this.transform = dA(A, im, e.transform), this.transformOrigin = dA(A, Bm, e.transformOrigin), this.visibility = dA(A, lm, e.visibility), this.webkitTextStrokeColor = dA(A, ym, e.webkitTextStrokeColor), this.webkitTextStrokeWidth = dA(A, bm, e.webkitTextStrokeWidth), this.wordBreak = dA(A, fm, e.wordBreak), this.zIndex = dA(A, gm, e.zIndex);
  }
  return t.prototype.isVisible = function() {
    return 0 < this.display && 0 < this.opacity && this.visibility === 0;
  }, t.prototype.isTransparent = function() {
    return Da(this.backgroundColor);
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
          return Ku.parse(t, d.parseComponentValue());
        case "image":
          return Wf.parse(t, d.parseComponentValue());
        case "length":
          var l = d.parseComponentValue();
          return vu(l) ? l : nt;
        case "length-percentage":
          return l = d.parseComponentValue(), ke(l) ? l : nt;
        case "time":
          return Qw.parse(t, d.parseComponentValue());
      }
  }
}, vm = "data-html2canvas-debug", Km = function(t) {
  switch (t.getAttribute(vm)) {
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
  return t = Km(t), t === 1 || A === t;
}, wr = function(t, A) {
  this.context = t, this.textNodes = [], this.elements = [], this.flags = 0, hw(A, 3), this.styles = new Im(t, window.getComputedStyle(A, null)), vE(A) && (this.styles.animationDuration.some(function(e) {
    return 0 < e;
  }) && (A.style.animationDuration = "0s"), this.styles.transform !== null) && (A.style.transform = "none"), this.bounds = w0(this.context, A), hw(A, 4) && (this.flags |= 16);
}, Lm = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Cw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", is = "u" < typeof Uint8Array ? [] : new Uint8Array(256), cB = 0; cB < Cw.length; cB++)
  is[Cw.charCodeAt(cB)] = cB;
for (var xm = function(t) {
  for (var A, e, n, i, l = 0.75 * t.length, d = t.length, s = 0, l = (t[t.length - 1] === "=" && (l--, t[t.length - 2] === "=") && l--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? ArrayBuffer : Array)(l)), f = Array.isArray(l) ? l : new Uint8Array(l), h = 0; h < d; h += 4)
    A = is[t.charCodeAt(h)], e = is[t.charCodeAt(h + 1)], n = is[t.charCodeAt(h + 2)], i = is[t.charCodeAt(h + 3)], f[s++] = A << 2 | e >> 4, f[s++] = (15 & e) << 4 | n >> 2, f[s++] = (3 & n) << 6 | 63 & i;
  return l;
}, _m = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 2)
    e.push(t[n + 1] << 8 | t[n]);
  return e;
}, Sm = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 4)
    e.push(t[n + 3] << 24 | t[n + 2] << 16 | t[n + 1] << 8 | t[n]);
  return e;
}, To = 5, Yf = 11, Zf = 2, Tm = Yf - To, Fw = 65536 >> To, Om = 1 << To, jf = Om - 1, Mm = 1024 >> To, Uw = Fw + Mm, XI = Uw, km = 32, Gm = Uw + km, Vm = 65536 >> Yf, Rm = 1 << Tm, Nm = Rm - 1, pw = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, Pm = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, Jm = function(i, A) {
  var i = xm(i), e = Array.isArray(i) ? Sm(i) : new Uint32Array(i), i = Array.isArray(i) ? _m(i) : new Uint16Array(i), n = pw(i, 12, e[4] / 2), i = e[5] === 2 ? pw(i, (24 + e[4]) / 2) : Pm(e, Math.ceil((24 + e[4]) / 4));
  return new Xm(e[0], e[1], e[2], e[3], n, i);
}, Xm = function() {
  function t(A, e, n, i, d, s) {
    this.initialValue = A, this.errorValue = e, this.highStart = n, this.highValueIndex = i, this.index = d, this.data = s;
  }
  return t.prototype.get = function(A) {
    var e;
    if (0 <= A) {
      if (A < 55296 || 56319 < A && A <= 65535)
        return e = this.index[A >> To], this.data[e = (e << Zf) + (A & jf)];
      if (A <= 65535)
        return e = this.index[Fw + (A - 55296 >> To)], this.data[e = (e << Zf) + (A & jf)];
      if (A < this.highStart)
        return e = this.index[e = Gm - Vm + (A >> Yf)], e = this.index[e += A >> To & Nm], this.data[e = (e << Zf) + (A & jf)];
      if (A <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, t;
}(), mw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Wm = "u" < typeof Uint8Array ? [] : new Uint8Array(256), BB = 0; BB < mw.length; BB++)
  Wm[mw.charCodeAt(BB)] = BB;
var Ew, jA, Ym = 1, qf = 2, zf = 3, Dw = 4, Hw = 5, Zm = 7, yw = 8, $f = 9, Ag = 10, bw = 11, Iw = 12, vw = 13, Kw = 14, eg = 15, jm = function(t) {
  for (var A = [], e = 0, n = t.length; e < n; ) {
    var i, d = t.charCodeAt(e++);
    55296 <= d && d <= 56319 && e < n ? (64512 & (i = t.charCodeAt(e++))) == 56320 ? A.push(((1023 & d) << 10) + (1023 & i) + 65536) : (A.push(d), e--) : A.push(d);
  }
  return A;
}, qm = function() {
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
}, zm = Jm(Lm), Jo = "×", $m = "÷", AE = function(t) {
  return zm.get(t);
}, eE = function(t, A, s) {
  var n = s - 2, i = A[n], d = A[s - 1], s = A[s];
  if (d === qf && s === zf)
    return Jo;
  if (d !== qf && d !== zf && d !== Dw && s !== qf && s !== zf && s !== Dw) {
    if (d === yw && [yw, $f, bw, Iw].indexOf(s) !== -1 || (d === bw || d === $f) && (s === $f || s === Ag) || (d === Iw || d === Ag) && s === Ag || s === vw || s === Hw || s === Zm || d === Ym)
      return Jo;
    if (d === vw && s === Kw) {
      for (; i === Hw; )
        i = A[--n];
      if (i === Kw)
        return Jo;
    }
    if (d === eg && s === eg) {
      for (var l = 0; i === eg; )
        l++, i = A[--n];
      if (l % 2 == 0)
        return Jo;
    }
  }
  return $m;
}, tE = function(t) {
  var A = jm(t), e = A.length, n = 0, i = 0, d = A.map(AE);
  return { next: function() {
    if (e <= n)
      return { done: !0, value: null };
    for (var s, l = Jo; n < e && (l = eE(A, d, ++n)) === Jo; )
      ;
    return l !== Jo || n === e ? (s = qm.apply(null, A.slice(i, n)), i = n, { value: s, done: !1 }) : { done: !0, value: null };
  } };
}, nE = function(t) {
  for (var A, e = tE(t), n = []; !(A = e.next()).done; )
    A.value && n.push(A.value.slice());
  return n;
}, rE = function(t) {
  if (t.createRange) {
    var A = t.createRange();
    if (A.getBoundingClientRect) {
      var e = t.createElement("boundtest"), A = (e.style.height = "123px", e.style.display = "block", t.body.appendChild(e), A.selectNode(e), A.getBoundingClientRect()), A = Math.round(A.height);
      if (t.body.removeChild(e), A === 123)
        return !0;
    }
  }
  return !1;
}, uE = function(t) {
  var A = t.createElement("boundtest"), e = (A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", t.body.appendChild(A), t.createRange()), n = (A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "", A.firstChild), s = El(n.data).map(function(l) {
    return be(l);
  }), i = 0, d = {}, s = s.every(function(w, f) {
    e.setStart(n, i), e.setEnd(n, i + w.length);
    var h = e.getBoundingClientRect(), w = (i += w.length, h.x > d.x || h.y > d.y);
    return d = h, f === 0 || w;
  });
  return t.body.removeChild(A), s;
}, oE = function() {
  return typeof new Image().crossOrigin < "u";
}, iE = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, aE = function(e) {
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
}, dE = function(t) {
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
  var t = rE(document);
  return Object.defineProperty(nn, "SUPPORT_RANGE_BOUNDS", { value: t }), t;
}, get SUPPORT_WORD_BREAKING() {
  var t = nn.SUPPORT_RANGE_BOUNDS && uE(document);
  return Object.defineProperty(nn, "SUPPORT_WORD_BREAKING", { value: t }), t;
}, get SUPPORT_SVG_DRAWING() {
  var t = aE(document);
  return Object.defineProperty(nn, "SUPPORT_SVG_DRAWING", { value: t }), t;
}, get SUPPORT_FOREIGNOBJECT_DRAWING() {
  var t = typeof Array.from == "function" && typeof window.fetch == "function" ? dE(document) : Promise.resolve(!1);
  return Object.defineProperty(nn, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: t }), t;
}, get SUPPORT_CORS_IMAGES() {
  var t = oE();
  return Object.defineProperty(nn, "SUPPORT_CORS_IMAGES", { value: t }), t;
}, get SUPPORT_RESPONSE_TYPE() {
  var t = iE();
  return Object.defineProperty(nn, "SUPPORT_RESPONSE_TYPE", { value: t }), t;
}, get SUPPORT_CORS_XHR() {
  var t = "withCredentials" in new XMLHttpRequest();
  return Object.defineProperty(nn, "SUPPORT_CORS_XHR", { value: t }), t;
}, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
  var t = !!(typeof Intl < "u" && Intl.Segmenter);
  return Object.defineProperty(nn, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: t }), t;
} }, Fs = function(t, A) {
  this.text = t, this.bounds = A;
}, sE = function(t, i, e, n) {
  var i = lE(i, e), d = [], s = 0;
  return i.forEach(function(l) {
    var f, h, w;
    e.textDecorationLine.length || 0 < l.trim().length ? nn.SUPPORT_RANGE_BOUNDS ? 1 < (f = _w(n, s, l.length).getClientRects()).length ? (w = h0(l), h = 0, w.forEach(function(p) {
      d.push(new Fs(p, Yo.fromDOMRectList(t, _w(n, h + s, p.length).getClientRects()))), h += p.length;
    })) : d.push(new Fs(l, Yo.fromDOMRectList(t, f))) : (w = n.splitText(l.length), d.push(new Fs(l, cE(t, n))), n = w) : nn.SUPPORT_RANGE_BOUNDS || (n = n.splitText(l.length)), s += l.length;
  }), d;
}, cE = function(t, A) {
  var e = A.ownerDocument;
  if (e) {
    var e = e.createElement("html2canvaswrapper"), n = (e.appendChild(A.cloneNode(!0)), A.parentNode);
    if (n)
      return n.replaceChild(e, A), A = w0(t, e), e.firstChild && n.replaceChild(e.firstChild, e), A;
  }
  return Yo.EMPTY;
}, _w = function(t, A, e) {
  var n = t.ownerDocument;
  if (n)
    return (n = n.createRange()).setStart(t, A), n.setEnd(t, A + e), n;
  throw new Error("Node has no owner document");
}, h0 = function(t) {
  var A;
  return nn.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (A = new Intl.Segmenter(void 0, { granularity: "grapheme" }), Array.from(A.segment(t)).map(function(e) {
    return e.segment;
  })) : nE(t);
}, BE = function(t, A) {
  var e;
  return nn.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (e = new Intl.Segmenter(void 0, { granularity: "word" }), Array.from(e.segment(t)).map(function(n) {
    return n.segment;
  })) : gE(t, A);
}, lE = function(t, A) {
  return A.letterSpacing !== 0 ? h0(t) : BE(t, A);
}, fE = [32, 160, 4961, 65792, 65793, 4153, 4241], gE = function(t, A) {
  for (var e, n = Yp(t, { lineBreak: A.lineBreak, wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak }), i = []; !(e = n.next()).done; )
    (function() {
      var d, s;
      e.value && (d = e.value.slice(), d = El(d), s = "", d.forEach(function(l) {
        fE.indexOf(l) === -1 ? s += be(l) : (s.length && i.push(s), i.push(be(l)), s = "");
      }), s.length) && i.push(s);
    })();
  return i;
}, wE = function(t, A, e) {
  this.text = QE(A.data, e.textTransform), this.textBounds = sE(t, this.text, e, A);
}, QE = function(t, A) {
  switch (A) {
    case 1:
      return t.toLowerCase();
    case 3:
      return t.replace(hE, CE);
    case 2:
      return t.toUpperCase();
    default:
      return t;
  }
}, hE = /(^|\s|:|-|\(|\))([a-z])/g, CE = function(t, A, e) {
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
}(wr), FE = [{ type: 15, flags: 0, unit: "px", number: 3 }], UE = [{ type: 16, flags: 0, number: 50 }], pE = function(t) {
  return t.width > t.height ? new Yo(t.left + (t.width - t.height) / 2, t.top, t.height, t.height) : t.width < t.height ? new Yo(t.left, t.top + (t.height - t.width) / 2, t.width, t.width) : t;
}, mE = function(t) {
  var A = t.type === EE ? new Array(t.value.length + 1).join("•") : t.value;
  return A.length === 0 ? t.placeholder || "" : A;
}, dl = "checkbox", sl = "radio", EE = "password", Sw = 707406591, Jg = function(t) {
  function A(e, n) {
    var i = t.call(this, e, n) || this;
    switch (i.type = n.type.toLowerCase(), i.checked = n.checked, i.value = mE(n), i.type !== dl && i.type !== sl || (i.styles.backgroundColor = 3739148031, i.styles.borderTopColor = i.styles.borderRightColor = i.styles.borderBottomColor = i.styles.borderLeftColor = 2779096575, i.styles.borderTopWidth = i.styles.borderRightWidth = i.styles.borderBottomWidth = i.styles.borderLeftWidth = 1, i.styles.borderTopStyle = i.styles.borderRightStyle = i.styles.borderBottomStyle = i.styles.borderLeftStyle = 1, i.styles.backgroundClip = [0], i.styles.backgroundOrigin = [0], i.bounds = pE(i.bounds)), i.type) {
      case dl:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = FE;
        break;
      case sl:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = UE;
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
      n.contentWindow && n.contentWindow.document && n.contentWindow.document.documentElement && (s.tree = HE(e, n.contentWindow.document.documentElement), i = n.contentWindow.document.documentElement ? Bw(e, getComputedStyle(n.contentWindow.document.documentElement).backgroundColor) : Ks.TRANSPARENT, d = n.contentWindow.document.body ? Bw(e, getComputedStyle(n.contentWindow.document.body).backgroundColor) : Ks.TRANSPARENT, s.backgroundColor = Da(i) ? Da(d) ? s.styles.backgroundColor : d : i);
    } catch {
    }
    return s;
  }
  return Yn(A, t), A;
}(wr), DE = ["OL", "UL", "MENU"], Al = function(t, A, e, n) {
  for (var i, d, s = A.firstChild; s; s = i)
    i = s.nextSibling, IE(s) && 0 < s.data.trim().length ? e.textNodes.push(new wE(t, s, e.styles)) : jh(s) && (kE(s) && s.assignedNodes ? s.assignedNodes().forEach(function(l) {
      return Al(t, l, e, n);
    }) : (d = Zh(t, s)).styles.isVisible() && (yE(s, d, n) ? d.flags |= 4 : bE(d.styles) && (d.flags |= 2), DE.indexOf(s.tagName) !== -1 && (d.flags |= 8), e.elements.push(d), s.slot, s.shadowRoot ? Al(t, s.shadowRoot, d, n) : zh(s) || qh(s) || $h(s) || Al(t, s, d, n)));
}, Zh = function(t, A) {
  return new (OE(A) ? Rh : TE(A) ? Nh : qh(A) ? Ph : LE(A) ? Jh : xE(A) ? Pg : _E(A) ? Jg : $h(A) ? Xh : zh(A) ? Wh : ME(A) ? Yh : wr)(t, A);
}, HE = function(t, A) {
  var e = Zh(t, A);
  return e.flags |= 4, Al(t, A, e, e), e;
}, yE = function(t, A, e) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || SE(t) && e.styles.isTransparent();
}, bE = function(t) {
  return t.isPositioned() || t.isFloating();
}, IE = function(t) {
  return t.nodeType === Node.TEXT_NODE;
}, jh = function(t) {
  return t.nodeType === Node.ELEMENT_NODE;
}, vE = function(t) {
  return jh(t) && typeof t.style < "u" && !KE(t);
}, KE = function(t) {
  return typeof t.className == "object";
}, LE = function(t) {
  return t.tagName === "LI";
}, xE = function(t) {
  return t.tagName === "OL";
}, _E = function(t) {
  return t.tagName === "INPUT";
}, qh = function(t) {
  return t.tagName === "svg";
}, SE = function(t) {
  return t.tagName === "BODY";
}, TE = function(t) {
  return t.tagName === "CANVAS";
}, OE = function(t) {
  return t.tagName === "IMG";
}, ME = function(t) {
  return t.tagName === "IFRAME";
}, zh = function(t) {
  return t.tagName === "TEXTAREA";
}, $h = function(t) {
  return t.tagName === "SELECT";
}, kE = function(t) {
  return t.tagName === "SLOT";
}, Tw = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, Ow = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] }, GE = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] }, VE = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] }, ia = function(t, A, e, n, i, d) {
  return t < A || e < t ? C0(t, i, 0 < d.length) : n.integers.reduce(function(s, l, f) {
    for (; l <= t; )
      t -= l, s += n.values[f];
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
}, Qa = 1, wu = 2, Qu = 4, as = 8, Gr = function(t, A, e, n, i, d) {
  if (t < -9999 || 9999 < t)
    return C0(t, 4, 0 < i.length);
  var s = Math.abs(t), l = i;
  if (s === 0)
    return A[0] + l;
  for (var f = 0; 0 < s && f <= 4; f++) {
    var h = s % 10;
    h == 0 && Pe(d, Qa) && l !== "" ? l = A[h] + l : 1 < h || h == 1 && f === 0 || h == 1 && f === 1 && Pe(d, wu) || h == 1 && f === 1 && Pe(d, Qu) && 100 < t || h == 1 && 1 < f && Pe(d, as) ? l = A[h] + (0 < f ? e[f - 1] : "") + l : h == 1 && 0 < f && (l = e[f - 1] + l), s = Math.floor(s / 10);
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
      return ia(t, 1, 3999, Tw, 3, n).toLowerCase();
    case 7:
      return ia(t, 1, 3999, Tw, 3, n);
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
      return ia(t, 1, 9999, Ow, 3, n);
    case 35:
      return ia(t, 1, 9999, Ow, 3, n).toLowerCase();
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
      return Gr(t, "零一二三四五六七八九", Mw, "負", i, wu | Qu | as);
    case 47:
      return Gr(t, "零壹貳參肆伍陸柒捌玖", kw, "負", i, Qa | wu | Qu | as);
    case 42:
      return Gr(t, "零一二三四五六七八九", Mw, "负", i, wu | Qu | as);
    case 41:
      return Gr(t, "零壹贰叁肆伍陆柒捌玖", kw, "负", i, Qa | wu | Qu | as);
    case 26:
      return Gr(t, "〇一二三四五六七八九", "十百千万", Gw, i, 0);
    case 25:
      return Gr(t, "零壱弐参四伍六七八九", "拾百千万", Gw, i, Qa | wu | Qu);
    case 31:
      return Gr(t, "영일이삼사오육칠팔구", "십백천만", tg, d, Qa | wu | Qu);
    case 33:
      return Gr(t, "零一二三四五六七八九", "十百千萬", tg, d, 0);
    case 32:
      return Gr(t, "零壹貳參四五六七八九", "拾百千", tg, d, Qa | wu | Qu);
    case 18:
      return He(t, 2406, 2415, !0, n);
    case 20:
      return ia(t, 1, 19999, VE, 3, n);
    case 21:
      return He(t, 2790, 2799, !0, n);
    case 22:
      return He(t, 2662, 2671, !0, n);
    case 22:
      return ia(t, 1, 10999, GE, 3, n);
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
}, RE = (function(t) {
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
}(), aa = function(t, A, e) {
  return new tA(t.x + (A.x - t.x) * e, t.y + (A.y - t.y) * e);
}, lB = function() {
  function t(A, e, n, i) {
    this.type = 1, this.start = A, this.startControl = e, this.endControl = n, this.end = i;
  }
  return t.prototype.subdivide = function(l, e) {
    var n = aa(this.start, this.startControl, l), s = aa(this.startControl, this.endControl, l), i = aa(this.endControl, this.end, l), d = aa(n, s, l), s = aa(s, i, l), l = aa(d, s, l);
    return e ? new t(this.start, n, d, l) : new t(l, s, i, this.end);
  }, t.prototype.add = function(A, e) {
    return new t(this.start.add(A, e), this.startControl.add(A, e), this.endControl.add(A, e), this.end.add(A, e));
  }, t.prototype.reverse = function() {
    return new t(this.end, this.endControl, this.startControl, this.start);
  }, t;
}(), Hn = function(t) {
  return t.type === 1;
}, NE = function(t) {
  var J = t.styles, A = t.bounds, e = (n = os(J.borderTopLeftRadius, A.width, A.height))[0], n = n[1], i = (d = os(J.borderTopRightRadius, A.width, A.height))[0], d = d[1], s = (l = os(J.borderBottomRightRadius, A.width, A.height))[0], l = l[1], f = (h = os(J.borderBottomLeftRadius, A.width, A.height))[0], h = h[1];
  (w = []).push((e + i) / A.width), w.push((f + s) / A.width), w.push((n + h) / A.height), w.push((d + l) / A.height), 1 < (w = Math.max.apply(Math, w)) && (e /= w, n /= w, i /= w, d /= w, s /= w, l /= w, f /= w, h /= w);
  var w = A.width - i, p = A.height - l, K = A.width - s, _ = A.height - h, S = J.borderTopWidth, v = J.borderRightWidth, M = J.borderBottomWidth, k = J.borderLeftWidth, X = ae(J.paddingTop, t.bounds.width), iA = ae(J.paddingRight, t.bounds.width), z = ae(J.paddingBottom, t.bounds.width), J = ae(J.paddingLeft, t.bounds.width);
  this.topLeftBorderDoubleOuterBox = 0 < e || 0 < n ? le(A.left + k / 3, A.top + S / 3, e - k / 3, n - S / 3, jA.TOP_LEFT) : new tA(A.left + k / 3, A.top + S / 3), this.topRightBorderDoubleOuterBox = 0 < e || 0 < n ? le(A.left + w, A.top + S / 3, i - v / 3, d - S / 3, jA.TOP_RIGHT) : new tA(A.left + A.width - v / 3, A.top + S / 3), this.bottomRightBorderDoubleOuterBox = 0 < s || 0 < l ? le(A.left + K, A.top + p, s - v / 3, l - M / 3, jA.BOTTOM_RIGHT) : new tA(A.left + A.width - v / 3, A.top + A.height - M / 3), this.bottomLeftBorderDoubleOuterBox = 0 < f || 0 < h ? le(A.left + k / 3, A.top + _, f - k / 3, h - M / 3, jA.BOTTOM_LEFT) : new tA(A.left + k / 3, A.top + A.height - M / 3), this.topLeftBorderDoubleInnerBox = 0 < e || 0 < n ? le(A.left + 2 * k / 3, A.top + 2 * S / 3, e - 2 * k / 3, n - 2 * S / 3, jA.TOP_LEFT) : new tA(A.left + 2 * k / 3, A.top + 2 * S / 3), this.topRightBorderDoubleInnerBox = 0 < e || 0 < n ? le(A.left + w, A.top + 2 * S / 3, i - 2 * v / 3, d - 2 * S / 3, jA.TOP_RIGHT) : new tA(A.left + A.width - 2 * v / 3, A.top + 2 * S / 3), this.bottomRightBorderDoubleInnerBox = 0 < s || 0 < l ? le(A.left + K, A.top + p, s - 2 * v / 3, l - 2 * M / 3, jA.BOTTOM_RIGHT) : new tA(A.left + A.width - 2 * v / 3, A.top + A.height - 2 * M / 3), this.bottomLeftBorderDoubleInnerBox = 0 < f || 0 < h ? le(A.left + 2 * k / 3, A.top + _, f - 2 * k / 3, h - 2 * M / 3, jA.BOTTOM_LEFT) : new tA(A.left + 2 * k / 3, A.top + A.height - 2 * M / 3), this.topLeftBorderStroke = 0 < e || 0 < n ? le(A.left + k / 2, A.top + S / 2, e - k / 2, n - S / 2, jA.TOP_LEFT) : new tA(A.left + k / 2, A.top + S / 2), this.topRightBorderStroke = 0 < e || 0 < n ? le(A.left + w, A.top + S / 2, i - v / 2, d - S / 2, jA.TOP_RIGHT) : new tA(A.left + A.width - v / 2, A.top + S / 2), this.bottomRightBorderStroke = 0 < s || 0 < l ? le(A.left + K, A.top + p, s - v / 2, l - M / 2, jA.BOTTOM_RIGHT) : new tA(A.left + A.width - v / 2, A.top + A.height - M / 2), this.bottomLeftBorderStroke = 0 < f || 0 < h ? le(A.left + k / 2, A.top + _, f - k / 2, h - M / 2, jA.BOTTOM_LEFT) : new tA(A.left + k / 2, A.top + A.height - M / 2), this.topLeftBorderBox = 0 < e || 0 < n ? le(A.left, A.top, e, n, jA.TOP_LEFT) : new tA(A.left, A.top), this.topRightBorderBox = 0 < i || 0 < d ? le(A.left + w, A.top, i, d, jA.TOP_RIGHT) : new tA(A.left + A.width, A.top), this.bottomRightBorderBox = 0 < s || 0 < l ? le(A.left + K, A.top + p, s, l, jA.BOTTOM_RIGHT) : new tA(A.left + A.width, A.top + A.height), this.bottomLeftBorderBox = 0 < f || 0 < h ? le(A.left, A.top + _, f, h, jA.BOTTOM_LEFT) : new tA(A.left, A.top + A.height), this.topLeftPaddingBox = 0 < e || 0 < n ? le(A.left + k, A.top + S, Math.max(0, e - k), Math.max(0, n - S), jA.TOP_LEFT) : new tA(A.left + k, A.top + S), this.topRightPaddingBox = 0 < i || 0 < d ? le(A.left + Math.min(w, A.width - v), A.top + S, w > A.width + v ? 0 : Math.max(0, i - v), Math.max(0, d - S), jA.TOP_RIGHT) : new tA(A.left + A.width - v, A.top + S), this.bottomRightPaddingBox = 0 < s || 0 < l ? le(A.left + Math.min(K, A.width - k), A.top + Math.min(p, A.height - M), Math.max(0, s - v), Math.max(0, l - M), jA.BOTTOM_RIGHT) : new tA(A.left + A.width - v, A.top + A.height - M), this.bottomLeftPaddingBox = 0 < f || 0 < h ? le(A.left + k, A.top + Math.min(_, A.height - M), Math.max(0, f - k), Math.max(0, h - M), jA.BOTTOM_LEFT) : new tA(A.left + k, A.top + A.height - M), this.topLeftContentBox = 0 < e || 0 < n ? le(A.left + k + J, A.top + S + X, Math.max(0, e - (k + J)), Math.max(0, n - (S + X)), jA.TOP_LEFT) : new tA(A.left + k + J, A.top + S + X), this.topRightContentBox = 0 < i || 0 < d ? le(A.left + Math.min(w, A.width + k + J), A.top + S + X, w > A.width + k + J ? 0 : i - k + J, d - (S + X), jA.TOP_RIGHT) : new tA(A.left + A.width - (v + iA), A.top + S + X), this.bottomRightContentBox = 0 < s || 0 < l ? le(A.left + Math.min(K, A.width - (k + J)), A.top + Math.min(p, A.height + S + X), Math.max(0, s - (v + iA)), l - (M + z), jA.BOTTOM_RIGHT) : new tA(A.left + A.width - (v + iA), A.top + A.height - (M + z)), this.bottomLeftContentBox = 0 < f || 0 < h ? le(A.left + k + J, A.top + _, Math.max(0, f - (k + J)), h - (M + z), jA.BOTTOM_LEFT) : new tA(A.left + k + J, A.top + A.height - (M + z));
}, le = (function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 1] = "TOP_RIGHT", t[t.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", t[t.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
}(jA = jA || {}), function(t, A, e, n, i) {
  var d = (Math.sqrt(2) - 1) / 3 * 4, s = e * d, l = n * d, f = t + e, h = A + n;
  switch (i) {
    case jA.TOP_LEFT:
      return new lB(new tA(t, h), new tA(t, h - l), new tA(f - s, A), new tA(f, A));
    case jA.TOP_RIGHT:
      return new lB(new tA(t, A), new tA(t + s, A), new tA(f, h - l), new tA(f, h));
    case jA.BOTTOM_RIGHT:
      return new lB(new tA(f, A), new tA(f, A + l), new tA(t + s, h), new tA(t, h));
    default:
      return jA.BOTTOM_LEFT, new lB(new tA(f, h), new tA(f - s, h), new tA(t, A + l), new tA(t, A));
  }
}), cl = function(t) {
  return [t.topLeftBorderBox, t.topRightBorderBox, t.bottomRightBorderBox, t.bottomLeftBorderBox];
}, PE = function(t) {
  return [t.topLeftContentBox, t.topRightContentBox, t.bottomRightContentBox, t.bottomLeftContentBox];
}, Bl = function(t) {
  return [t.topLeftPaddingBox, t.topRightPaddingBox, t.bottomRightPaddingBox, t.bottomLeftPaddingBox];
}, JE = function(t, A, e) {
  this.offsetX = t, this.offsetY = A, this.matrix = e, this.type = 0, this.target = 6;
}, fB = function(t, A) {
  this.path = t, this.target = A, this.type = 1;
}, XE = function(t) {
  this.opacity = t, this.type = 2, this.target = 6;
}, WE = function(t) {
  return t.type === 0;
}, eC = function(t) {
  return t.type === 1;
}, YE = function(t) {
  return t.type === 2;
}, Vw = function(t, A) {
  return t.length === A.length && t.some(function(e, n) {
    return e === A[n];
  });
}, ZE = function(t, A, e, n, i) {
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
    this.container = A, this.parent = e, this.effects = [], this.curves = new NE(this.container), this.container.styles.opacity < 1 && this.effects.push(new XE(this.container.styles.opacity)), this.container.styles.transform !== null && (A = this.container.bounds.left + this.container.styles.transformOrigin[0].number, e = this.container.bounds.top + this.container.styles.transformOrigin[1].number, n = this.container.styles.transform, this.effects.push(new JE(A, e, n))), this.container.styles.overflowX !== 0 && (A = cl(this.curves), e = Bl(this.curves), Vw(A, e) ? this.effects.push(new fB(A, 6)) : (this.effects.push(new fB(A, 2)), this.effects.push(new fB(e, 4))));
  }
  return t.prototype.getEffects = function(A) {
    for (var e = [2, 3].indexOf(this.container.styles.position) === -1, n = this.parent, i = this.effects.slice(0); n; ) {
      var d, s, l = n.effects.filter(function(f) {
        return !eC(f);
      });
      e || n.container.styles.position !== 0 || !n.parent ? (i.unshift.apply(i, l), e = [2, 3].indexOf(n.container.styles.position) === -1, n.container.styles.overflowX !== 0 && (d = cl(n.curves), s = Bl(n.curves), Vw(d, s) || i.unshift(new fB(s, 6)))) : i.unshift.apply(i, l), n = n.parent;
    }
    return i.filter(function(f) {
      return Pe(f.target, A);
    });
  }, t;
}(), Xg = function(t, A, e, n) {
  t.container.elements.forEach(function(i) {
    var d, s, l, f, h = Pe(i.flags, 4), w = Pe(i.flags, 2), p = new nC(i, t), K = (Pe(i.styles.display, 2048) && n.push(p), Pe(i.flags, 8) ? [] : n);
    h || w ? (w = h || i.styles.isPositioned() ? e : A, d = new tC(p), i.styles.isPositioned() || i.styles.opacity < 1 || i.styles.isTransformed() ? (s = i.styles.zIndex.order) < 0 ? (l = 0, w.negativeZIndex.some(function(_, S) {
      return s > _.element.container.styles.zIndex.order ? (l = S, !1) : 0 < l;
    }), w.negativeZIndex.splice(l, 0, d)) : 0 < s ? (f = 0, w.positiveZIndex.some(function(_, S) {
      return s >= _.element.container.styles.zIndex.order ? (f = S + 1, !1) : 0 < f;
    }), w.positiveZIndex.splice(f, 0, d)) : w.zeroOrAutoZIndexOrTransformedOrOpacity.push(d) : (i.styles.isFloating() ? w.nonPositionedFloats : w.nonPositionedInlineLevel).push(d), Xg(p, d, h ? d : e, K)) : ((i.styles.isInlineLevel() ? A.inlineLevel : A.nonInlineLevel).push(p), Xg(p, A, e, K)), Pe(i.flags, 8) && rC(i, K);
  });
}, rC = function(t, A) {
  for (var e = t instanceof Pg ? t.start : 1, n = t instanceof Pg && t.reversed, i = 0; i < A.length; i++) {
    var d = A[i];
    d.container instanceof Jh && typeof d.container.value == "number" && d.container.value !== 0 && (e = d.container.value), d.listValue = C0(e, d.container.styles.listStyleType, !0), e += n ? -1 : 1;
  }
}, jE = function(A) {
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
}, qE = function(t, A) {
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
}, zE = function(t, A) {
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
}, $E = function(t, A) {
  switch (A) {
    case 0:
      return gB(t.topLeftBorderStroke, t.topRightBorderStroke);
    case 1:
      return gB(t.topRightBorderStroke, t.bottomRightBorderStroke);
    case 2:
      return gB(t.bottomRightBorderStroke, t.bottomLeftBorderStroke);
    default:
      return gB(t.bottomLeftBorderStroke, t.topLeftBorderStroke);
  }
}, gB = function(t, A) {
  var e = [];
  return Hn(t) ? e.push(t.subdivide(0.5, !1)) : e.push(t), Hn(A) ? e.push(A.subdivide(0.5, !0)) : e.push(A), e;
}, In = function(t, A, e, n) {
  var i = [];
  return Hn(t) ? i.push(t.subdivide(0.5, !1)) : i.push(t), Hn(e) ? i.push(e.subdivide(0.5, !0)) : i.push(e), Hn(n) ? i.push(n.subdivide(0.5, !0).reverse()) : i.push(n), Hn(A) ? i.push(A.subdivide(0.5, !1).reverse()) : i.push(A), i;
}, uC = function(e) {
  var A = e.bounds, e = e.styles;
  return A.add(e.borderLeftWidth, e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth), -(e.borderTopWidth + e.borderBottomWidth));
}, ll = function(e) {
  var A = e.styles, e = e.bounds, n = ae(A.paddingLeft, e.width), i = ae(A.paddingRight, e.width), d = ae(A.paddingTop, e.width), s = ae(A.paddingBottom, e.width);
  return e.add(n + A.borderLeftWidth, d + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + n + i), -(A.borderTopWidth + A.borderBottomWidth + d + s));
}, AD = function(t, A) {
  return t === 0 ? A.bounds : (t === 2 ? ll : uC)(A);
}, eD = function(t, A) {
  return t === 0 ? A.bounds : (t === 2 ? ll : uC)(A);
}, ng = function(t, A, d) {
  var n = AD(ha(t.styles.backgroundOrigin, A), t), i = eD(ha(t.styles.backgroundClip, A), t), d = tD(ha(t.styles.backgroundSize, A), d, n), s = d[0], l = d[1], f = os(ha(t.styles.backgroundPosition, A), n.width - s, n.height - l);
  return [nD(ha(t.styles.backgroundRepeat, A), f, d, n, i), Math.round(n.left + f[0]), Math.round(n.top + f[1]), s, l];
}, da = function(t) {
  return Ue(t) && t.value === Ha.AUTO;
}, wB = function(t) {
  return typeof t == "number";
}, tD = function(l, d, e) {
  var n = d[0], i = d[1], d = d[2], s = l[0], l = l[1];
  if (!s)
    return [0, 0];
  if (ke(s) && l && ke(l))
    return [ae(s, e.width), ae(l, e.height)];
  var f = wB(d);
  if (Ue(s) && (s.value === Ha.CONTAIN || s.value === Ha.COVER))
    return wB(d) ? e.width / e.height < d != (s.value === Ha.COVER) ? [e.width, e.width / d] : [e.height * d, e.height] : [e.width, e.height];
  var h = wB(n), w = wB(i), p = h || w;
  if (da(s) && (!l || da(l)))
    return h && w ? [n, i] : f || p ? p && f ? [h ? n : i * d, w ? i : n / d] : [h ? n : e.width, w ? i : e.height] : [e.width, e.height];
  if (f)
    return f = p = 0, ke(s) ? p = ae(s, e.width) : ke(l) && (f = ae(l, e.height)), da(s) ? p = f * d : l && !da(l) || (f = p / d), [p, f];
  if (d = null, p = null, ke(s) ? d = ae(s, e.width) : l && ke(l) && (p = ae(l, e.height)), (d = (p = d === null || l && !da(l) ? p : h && w ? d / n * i : e.height) !== null && da(s) ? h && w ? p / i * n : e.width : d) !== null && p !== null)
    return [d, p];
  throw new Error("Unable to calculate background-size for element");
}, ha = function(t, A) {
  return A = t[A], "u" < typeof A ? t[0] : A;
}, nD = function(t, A, e, n, i) {
  var d = A[0], s = A[1], l = e[0], f = e[1];
  switch (t) {
    case 2:
      return [new tA(Math.round(n.left), Math.round(n.top + s)), new tA(Math.round(n.left + n.width), Math.round(n.top + s)), new tA(Math.round(n.left + n.width), Math.round(f + n.top + s)), new tA(Math.round(n.left), Math.round(f + n.top + s))];
    case 3:
      return [new tA(Math.round(n.left + d), Math.round(n.top)), new tA(Math.round(n.left + d + l), Math.round(n.top)), new tA(Math.round(n.left + d + l), Math.round(n.height + n.top)), new tA(Math.round(n.left + d), Math.round(n.height + n.top))];
    case 1:
      return [new tA(Math.round(n.left + d), Math.round(n.top + s)), new tA(Math.round(n.left + d + l), Math.round(n.top + s)), new tA(Math.round(n.left + d + l), Math.round(n.top + s + f)), new tA(Math.round(n.left + d), Math.round(n.top + s + f))];
    default:
      return [new tA(Math.round(i.left), Math.round(i.top)), new tA(Math.round(i.left + i.width), Math.round(i.top)), new tA(Math.round(i.left + i.width), Math.round(i.height + i.top)), new tA(Math.round(i.left), Math.round(i.height + i.top))];
  }
}, rD = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Nw = "Hidden Text", uD = function() {
  function t(A) {
    this._data = {}, this._document = A;
  }
  return t.prototype.parseMetrics = function(l, f) {
    var n = this._document.createElement("div"), i = this._document.createElement("img"), d = this._document.createElement("span"), s = this._document.body, l = (n.style.visibility = "hidden", n.style.fontFamily = l, n.style.fontSize = f, n.style.margin = "0", n.style.padding = "0", n.style.whiteSpace = "nowrap", s.appendChild(n), i.src = rD, i.width = 1, i.height = 1, i.style.margin = "0", i.style.padding = "0", i.style.verticalAlign = "baseline", d.style.fontFamily = l, d.style.fontSize = f, d.style.margin = "0", d.style.padding = "0", d.appendChild(this._document.createTextNode(Nw)), n.appendChild(d), n.appendChild(i), i.offsetTop - d.offsetTop + 2), f = (n.removeChild(d), n.appendChild(this._document.createTextNode(Nw)), n.style.lineHeight = "normal", i.style.verticalAlign = "super", i.offsetTop - n.offsetTop + 2);
    return s.removeChild(n), { baseline: l, middle: f };
  }, t.prototype.getMetrics = function(A, e) {
    var n = A + " " + e;
    return "u" < typeof this._data[n] && (this._data[n] = this.parseMetrics(A, e)), this._data[n];
  }, t;
}(), oC = function(t, A) {
  this.context = t, this.options = A;
}, oD = 1e4, iD = (function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e._activeEffects = [], e.canvas = n.canvas || document.createElement("canvas"), e.ctx = e.canvas.getContext("2d"), n.canvas || (e.canvas.width = Math.floor(n.width * n.scale), e.canvas.height = Math.floor(n.height * n.scale), e.canvas.style.width = n.width + "px", e.canvas.style.height = n.height + "px"), e.fontMetrics = new uD(document), e.ctx.scale(e.options.scale, e.options.scale), e.ctx.translate(-n.x, -n.y), e.ctx.textBaseline = "bottom", e._activeEffects = [], e.context.logger.debug("Canvas renderer initialized (" + n.width + "x" + n.height + ") with scale " + n.scale), e;
  }
  Yn(A, t), A.prototype.applyEffects = function(e) {
    for (var n = this; this._activeEffects.length; )
      this.popEffect();
    e.forEach(function(i) {
      return n.applyEffect(i);
    });
  }, A.prototype.applyEffect = function(e) {
    this.ctx.save(), YE(e) && (this.ctx.globalAlpha = e.opacity), WE(e) && (this.ctx.translate(e.offsetX, e.offsetY), this.ctx.transform(e.matrix[0], e.matrix[1], e.matrix[2], e.matrix[3], e.matrix[4], e.matrix[5]), this.ctx.translate(-e.offsetX, -e.offsetY)), eC(e) && (this.path(e.path), this.ctx.clip()), this._activeEffects.push(e);
  }, A.prototype.popEffect = function() {
    this._activeEffects.pop(), this.ctx.restore();
  }, A.prototype.renderStack = function(e) {
    return En(this, void 0, void 0, function() {
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
    return En(this, void 0, void 0, function() {
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
    }).join(""), i = cD(e.fontFamily).join(", "), d = Cs(e.fontSize) ? "" + e.fontSize.number + e.fontSize.unit : e.fontSize.number + "px";
    return [[e.fontStyle, n, e.fontWeight, d, i].join(" "), i, d];
  }, A.prototype.renderTextNode = function(e, n) {
    return En(this, void 0, void 0, function() {
      var i, d, s, l, f, h, w = this;
      return An(this, function(p) {
        return d = this.createFontStyle(n), s = d[0], i = d[1], d = d[2], this.ctx.font = s, this.ctx.direction = n.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(i, d), l = s.baseline, f = s.middle, h = n.paintOrder, e.textBounds.forEach(function(K) {
          h.forEach(function(_) {
            switch (_) {
              case 0:
                w.ctx.fillStyle = Ze(n.color), w.renderTextWithLetterSpacing(K, n.letterSpacing, l);
                var S = n.textShadow;
                S.length && K.text.trim().length && (S.slice(0).reverse().forEach(function(v) {
                  w.ctx.shadowColor = Ze(v.color), w.ctx.shadowOffsetX = v.offsetX.number * w.options.scale, w.ctx.shadowOffsetY = v.offsetY.number * w.options.scale, w.ctx.shadowBlur = v.blur.number, w.renderTextWithLetterSpacing(K, n.letterSpacing, l);
                }), w.ctx.shadowColor = "", w.ctx.shadowOffsetX = 0, w.ctx.shadowOffsetY = 0, w.ctx.shadowBlur = 0), n.textDecorationLine.length && (w.ctx.fillStyle = Ze(n.textDecorationColor || n.color), n.textDecorationLine.forEach(function(v) {
                  switch (v) {
                    case 1:
                      w.ctx.fillRect(K.bounds.left, Math.round(K.bounds.top + l), K.bounds.width, 1);
                      break;
                    case 2:
                      w.ctx.fillRect(K.bounds.left, Math.round(K.bounds.top), K.bounds.width, 1);
                      break;
                    case 3:
                      w.ctx.fillRect(K.bounds.left, Math.ceil(K.bounds.top + f), K.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                n.webkitTextStrokeWidth && K.text.trim().length && (w.ctx.strokeStyle = Ze(n.webkitTextStrokeColor), w.ctx.lineWidth = n.webkitTextStrokeWidth, w.ctx.lineJoin = window.chrome ? "miter" : "round", w.ctx.strokeText(K.text, K.bounds.left, K.bounds.top + l)), w.ctx.strokeStyle = "", w.ctx.lineWidth = 0, w.ctx.lineJoin = "miter";
            }
          });
        }), [2];
      });
    });
  }, A.prototype.renderReplacedElement = function(e, n, i) {
    var d;
    i && 0 < e.intrinsicWidth && 0 < e.intrinsicHeight && (d = ll(e), n = Bl(n), this.path(n), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(i, 0, 0, e.intrinsicWidth, e.intrinsicHeight, d.left, d.top, d.width, d.height), this.ctx.restore());
  }, A.prototype.renderNodeContent = function(e) {
    return En(this, void 0, void 0, function() {
      var n, i, d, s, l, f, h, w, p, K, _, S, v;
      return An(this, function(M) {
        switch (M.label) {
          case 0:
            this.applyEffects(e.getEffects(4)), n = e.container, i = e.curves, d = n.styles, s = 0, l = n.textNodes, M.label = 1;
          case 1:
            return s < l.length ? (f = l[s], [4, this.renderTextNode(f, d)]) : [3, 4];
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
            f = M.sent(), n.width && n.height && this.ctx.drawImage(f, 0, 0, n.width, n.height, n.bounds.left, n.bounds.top, n.bounds.width, n.bounds.height), M.label = 14;
          case 14:
            if (n instanceof Jg && (h = Math.min(n.bounds.width, n.bounds.height), n.type === dl ? n.checked && (this.ctx.save(), this.path([new tA(n.bounds.left + 0.39363 * h, n.bounds.top + 0.79 * h), new tA(n.bounds.left + 0.16 * h, n.bounds.top + 0.5549 * h), new tA(n.bounds.left + 0.27347 * h, n.bounds.top + 0.44071 * h), new tA(n.bounds.left + 0.39694 * h, n.bounds.top + 0.5649 * h), new tA(n.bounds.left + 0.72983 * h, n.bounds.top + 0.23 * h), new tA(n.bounds.left + 0.84 * h, n.bounds.top + 0.34085 * h), new tA(n.bounds.left + 0.39363 * h, n.bounds.top + 0.79 * h)]), this.ctx.fillStyle = Ze(Sw), this.ctx.fill(), this.ctx.restore()) : n.type === sl && n.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(n.bounds.left + h / 2, n.bounds.top + h / 2, h / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = Ze(Sw), this.ctx.fill(), this.ctx.restore())), iD(n) && n.value.length) {
              switch (h = this.createFontStyle(d), S = h[0], _ = h[1], _ = this.fontMetrics.getMetrics(S, _).baseline, this.ctx.font = S, this.ctx.fillStyle = Ze(d.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = dD(n.styles.textAlign), v = ll(n), w = 0, n.styles.textAlign) {
                case 1:
                  w += v.width / 2;
                  break;
                case 2:
                  w += v.width;
              }
              p = v.add(w, 0, 0, -v.height / 2 + 1), this.ctx.save(), this.path([new tA(v.left, v.top), new tA(v.left + v.width, v.top), new tA(v.left + v.width, v.top + v.height), new tA(v.left, v.top + v.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Fs(n.value, p), d.letterSpacing, _), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
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
            e.listValue && n.styles.listStyleType !== -1 && (S = this.createFontStyle(d)[0], this.ctx.font = S, this.ctx.fillStyle = Ze(d.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", v = new Yo(n.bounds.left, n.bounds.top + ae(n.styles.paddingTop, n.bounds.width), n.bounds.width, gw(d.lineHeight, d.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Fs(e.listValue, v), d.letterSpacing, gw(d.lineHeight, d.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), M.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, A.prototype.renderStackContent = function(e) {
    return En(this, void 0, void 0, function() {
      var n, i, d, s, l, f, h, w, p, K, _, S, v, M, k;
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
            l = 0, f = e.nonPositionedFloats, X.label = 11;
          case 11:
            return l < f.length ? (k = f[l], [4, this.renderStack(k)]) : [3, 14];
          case 12:
            X.sent(), X.label = 13;
          case 13:
            return l++, [3, 11];
          case 14:
            h = 0, w = e.nonPositionedInlineLevel, X.label = 15;
          case 15:
            return h < w.length ? (k = w[h], [4, this.renderStack(k)]) : [3, 18];
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
    return En(this, void 0, void 0, function() {
      var n, i, d, s, l, f;
      return An(this, function(h) {
        switch (h.label) {
          case 0:
            n = e.styles.backgroundImage.length - 1, i = function(w) {
              var p, K, _, S, v, M, k, X, iA, z, J, lA, $, vA, IA, YA, Fe, re, $A, ge, ve;
              return An(this, function(ZA) {
                switch (ZA.label) {
                  case 0:
                    if (w.type !== 0)
                      return [3, 5];
                    p = void 0, K = w.url, ZA.label = 1;
                  case 1:
                    return ZA.trys.push([1, 3, , 4]), [4, d.context.cache.match(K)];
                  case 2:
                    return p = ZA.sent(), [3, 4];
                  case 3:
                    return ZA.sent(), d.context.logger.error("Error loading background-image " + K), [3, 4];
                  case 4:
                    return p && (z = ng(e, n, [p.width, p.height, p.width / p.height]), M = z[0], lA = z[1], $ = z[2], iA = z[3], z = z[4], S = d.ctx.createPattern(d.resizeImage(p, iA, z), "repeat"), d.renderRepeat(M, S, lA, $)), [3, 6];
                  case 5:
                    s4(w) ? (J = ng(e, n, [null, null, null]), M = J[0], lA = J[1], $ = J[2], iA = J[3], z = J[4], J = u4(w.angle, iA, z), vA = J[0], v = J[1], X = J[2], k = J[3], J = J[4], (YA = document.createElement("canvas")).width = iA, YA.height = z, IA = YA.getContext("2d"), _ = IA.createLinearGradient(v, k, X, J), lw(w.stops, vA).forEach(function(Be) {
                      return _.addColorStop(Be.stop, Ze(Be.color));
                    }), IA.fillStyle = _, IA.fillRect(0, 0, iA, z), 0 < iA && 0 < z && (S = d.ctx.createPattern(YA, "repeat"), d.renderRepeat(M, S, lA, $))) : c4(w) && (v = ng(e, n, [null, null, null]), M = v[0], k = v[1], X = v[2], iA = v[3], z = v[4], J = w.position.length === 0 ? [Q0] : w.position, lA = ae(J[0], iA), $ = ae(J[J.length - 1], z), vA = o4(w, lA, $, iA, z), IA = vA[0], YA = vA[1], 0 < IA) && 0 < YA && (Fe = d.ctx.createRadialGradient(k + lA, X + $, 0, k + lA, X + $, IA), lw(w.stops, 2 * IA).forEach(function(Be) {
                      return Fe.addColorStop(Be.stop, Ze(Be.color));
                    }), d.path(M), d.ctx.fillStyle = Fe, IA !== YA ? (re = e.bounds.left + 0.5 * e.bounds.width, $A = e.bounds.top + 0.5 * e.bounds.height, ve = 1 / (ge = YA / IA), d.ctx.save(), d.ctx.translate(re, $A), d.ctx.transform(1, 0, 0, ge, 0, 0), d.ctx.translate(-re, -$A), d.ctx.fillRect(k, ve * (X - $A) + $A, iA, z * ve), d.ctx.restore()) : d.ctx.fill()), ZA.label = 6;
                  case 6:
                    return n--, [2];
                }
              });
            }, d = this, s = 0, l = e.styles.backgroundImage.slice(0).reverse(), h.label = 1;
          case 1:
            return s < l.length ? (f = l[s], [5, i(f)]) : [3, 4];
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
    return En(this, void 0, void 0, function() {
      return An(this, function(d) {
        return this.path(Rw(i, n)), this.ctx.fillStyle = Ze(e), this.ctx.fill(), [2];
      });
    });
  }, A.prototype.renderDoubleBorder = function(e, n, i, d) {
    return En(this, void 0, void 0, function() {
      var s;
      return An(this, function(l) {
        switch (l.label) {
          case 0:
            return n < 3 ? [4, this.renderSolidBorder(e, i, d)] : [3, 2];
          case 1:
            return l.sent(), [2];
          case 2:
            return s = qE(d, i), this.path(s), this.ctx.fillStyle = Ze(e), this.ctx.fill(), s = zE(d, i), this.path(s), this.ctx.fill(), [2];
        }
      });
    });
  }, A.prototype.renderNodeBackgroundAndBorders = function(e) {
    return En(this, void 0, void 0, function() {
      var n, i, d, s, l, f, h, w, p = this;
      return An(this, function(K) {
        switch (K.label) {
          case 0:
            return this.applyEffects(e.getEffects(2)), n = e.container.styles, i = !Da(n.backgroundColor) || n.backgroundImage.length, d = [{ style: n.borderTopStyle, color: n.borderTopColor, width: n.borderTopWidth }, { style: n.borderRightStyle, color: n.borderRightColor, width: n.borderRightWidth }, { style: n.borderBottomStyle, color: n.borderBottomColor, width: n.borderBottomWidth }, { style: n.borderLeftStyle, color: n.borderLeftColor, width: n.borderLeftWidth }], s = aD(ha(n.backgroundClip, 0), e.curves), i || n.boxShadow.length ? (this.ctx.save(), this.path(s), this.ctx.clip(), Da(n.backgroundColor) || (this.ctx.fillStyle = Ze(n.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(e.container)]) : [3, 2];
          case 1:
            K.sent(), this.ctx.restore(), n.boxShadow.slice(0).reverse().forEach(function(_) {
              p.ctx.save();
              var S = cl(e.curves), v = _.inset ? 0 : oD, M = ZE(S, -v + (_.inset ? 1 : -1) * _.spread.number, (_.inset ? 1 : -1) * _.spread.number, _.spread.number * (_.inset ? -2 : 2), _.spread.number * (_.inset ? -2 : 2));
              _.inset ? (p.path(S), p.ctx.clip(), p.mask(M)) : (p.mask(S), p.ctx.clip(), p.path(M)), p.ctx.shadowOffsetX = _.offsetX.number + v, p.ctx.shadowOffsetY = _.offsetY.number, p.ctx.shadowColor = Ze(_.color), p.ctx.shadowBlur = _.blur.number, p.ctx.fillStyle = _.inset ? Ze(_.color) : "rgba(0,0,0,1)", p.ctx.fill(), p.ctx.restore();
            }), K.label = 2;
          case 2:
            f = l = 0, h = d, K.label = 3;
          case 3:
            return f < h.length ? (w = h[f]).style !== 0 && !Da(w.color) && 0 < w.width ? w.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(w.color, w.width, l, e.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return K.sent(), [3, 11];
          case 5:
            return w.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(w.color, w.width, l, e.curves, 3)];
          case 6:
            return K.sent(), [3, 11];
          case 7:
            return w.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(w.color, w.width, l, e.curves)];
          case 8:
            return K.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(w.color, l, e.curves)];
          case 10:
            K.sent(), K.label = 11;
          case 11:
            l++, K.label = 12;
          case 12:
            return f++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, A.prototype.renderDashedDottedBorder = function(e, n, i, d, s) {
    return En(this, void 0, void 0, function() {
      var l, f, h, w, p, K, _, S, v, M, k;
      return An(this, function(X) {
        return this.ctx.save(), p = $E(d, i), l = Rw(d, i), s === 2 && (this.path(l), this.ctx.clip()), v = (Hn(l[0]) ? (f = l[0].start.x, l[0].start) : (f = l[0].x, l[0])).y, w = (Hn(l[1]) ? (h = l[1].end.x, l[1].end) : (h = l[1].x, l[1])).y, v = Math.abs(i === 0 || i === 2 ? f - h : v - w), this.ctx.beginPath(), s === 3 ? this.formatPath(p) : this.formatPath(l.slice(0, 2)), w = n < 3 ? 3 * n : 2 * n, p = n < 3 ? 2 * n : n, s === 3 && (p = w = n), K = !0, v <= 2 * w ? K = !1 : v <= 2 * w + p ? (w *= _ = v / (2 * w + p), p *= _) : (_ = Math.floor((v + p) / (w + p)), S = (v - _ * w) / (_ - 1), p = (v = (v - (_ + 1) * w) / _) <= 0 || Math.abs(p - S) < Math.abs(p - v) ? S : v), K && (s === 3 ? this.ctx.setLineDash([0, w + p]) : this.ctx.setLineDash([w, p])), s === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = n) : this.ctx.lineWidth = 2 * n + 1.1, this.ctx.strokeStyle = Ze(e), this.ctx.stroke(), this.ctx.setLineDash([]), s === 2 && (Hn(l[0]) && (M = l[3], k = l[0], this.ctx.beginPath(), this.formatPath([new tA(M.end.x, M.end.y), new tA(k.start.x, k.start.y)]), this.ctx.stroke()), Hn(l[1])) && (M = l[1], k = l[2], this.ctx.beginPath(), this.formatPath([new tA(M.end.x, M.end.y), new tA(k.start.x, k.start.y)]), this.ctx.stroke()), this.ctx.restore(), [2];
      });
    });
  }, A.prototype.render = function(e) {
    return En(this, void 0, void 0, function() {
      var n;
      return An(this, function(i) {
        switch (i.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = Ze(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), n = jE(e), [4, this.renderStack(n)];
          case 1:
            return i.sent(), this.applyEffects([]), [2, this.canvas];
        }
      });
    });
  };
}(oC), function(t) {
  return t instanceof Wh || t instanceof Xh || t instanceof Jg && t.type !== sl && t.type !== dl;
}), aD = function(t, A) {
  switch (t) {
    case 0:
      return cl(A);
    case 2:
      return PE(A);
    default:
      return Bl(A);
  }
}, dD = function(t) {
  switch (t) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, sD = ["-apple-system", "system-ui"], cD = function(t) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? t.filter(function(A) {
    return sD.indexOf(A) === -1;
  }) : t;
}, BD = (function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e.canvas = n.canvas || document.createElement("canvas"), e.ctx = e.canvas.getContext("2d"), e.options = n, e.canvas.width = Math.floor(n.width * n.scale), e.canvas.height = Math.floor(n.height * n.scale), e.canvas.style.width = n.width + "px", e.canvas.style.height = n.height + "px", e.ctx.scale(e.options.scale, e.options.scale), e.ctx.translate(-n.x, -n.y), e.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + n.width + "x" + n.height + " at " + n.x + "," + n.y + ") with scale " + n.scale), e;
  }
  Yn(A, t), A.prototype.render = function(e) {
    return En(this, void 0, void 0, function() {
      var n;
      return An(this, function(i) {
        switch (i.label) {
          case 0:
            return n = Ng(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, e), [4, BD(n)];
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
typeof window < "u" && RE.setContext(window), Pw(), Pw();
class QB {
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
pa(QB, "domainName", ""), pa(QB, "path", "/api/storage/manage"), pa(QB, "pathPersistence", "/api/storage/longManage"), pa(QB, "http", () => Promise.reject("unset redis storage http function"));
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
        f(n.next(h));
      } catch (w) {
        d(w);
      }
    }
    function l(h) {
      try {
        f(n.throw(h));
      } catch (w) {
        d(w);
      }
    }
    function f(h) {
      var w;
      h.done ? i(h.value) : ((w = h.value) instanceof e ? w : new e(function(p) {
        p(w);
      })).then(s, l);
    }
    f((n = n.apply(t, A || [])).next());
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
  function l(f) {
    return function(h) {
      var w = [f, h];
      if (e)
        throw new TypeError("Generator is already executing.");
      for (; d; )
        try {
          if (e = 1, n && (i = 2 & w[0] ? n.return : w[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, w[1])).done)
            return i;
          switch (n = 0, (w = i ? [2 & w[0], i.value] : w)[0]) {
            case 0:
            case 1:
              i = w;
              break;
            case 4:
              return d.label++, { value: w[1], done: !1 };
            case 5:
              d.label++, n = w[1], w = [0];
              continue;
            case 7:
              w = d.ops.pop(), d.trys.pop();
              continue;
            default:
              if (!(i = 0 < (i = d.trys).length && i[i.length - 1]) && (w[0] === 6 || w[0] === 2)) {
                d = 0;
                continue;
              }
              if (w[0] === 3 && (!i || w[1] > i[0] && w[1] < i[3]))
                d.label = w[1];
              else if (w[0] === 6 && d.label < i[1])
                d.label = i[1], i = w;
              else {
                if (!(i && d.label < i[2])) {
                  i[2] && d.ops.pop(), d.trys.pop();
                  continue;
                }
                d.label = i[2], d.ops.push(w);
              }
          }
          w = A.call(t, d);
        } catch (p) {
          w = [6, p], n = 0;
        } finally {
          e = i = 0;
        }
      if (5 & w[0])
        throw w[1];
      return { value: w[0] ? w[1] : void 0, done: !0 };
    };
  }
}
function hB(t, A, e) {
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
}, lD = function(n) {
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
}, Jw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fD = typeof Uint8Array > "u" ? [] : new Uint8Array(256), CB = 0; CB < Jw.length; CB++)
  fD[Jw.charCodeAt(CB)] = CB;
for (var Xw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ds = typeof Uint8Array > "u" ? [] : new Uint8Array(256), FB = 0; FB < Xw.length; FB++)
  ds[Xw.charCodeAt(FB)] = FB;
for (var gD = function(t) {
  for (var A, e, n, i, l = 0.75 * t.length, d = t.length, s = 0, l = (t[t.length - 1] === "=" && (l--, t[t.length - 2] === "=") && l--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? ArrayBuffer : Array)(l)), f = Array.isArray(l) ? l : new Uint8Array(l), h = 0; h < d; h += 4)
    A = ds[t.charCodeAt(h)], e = ds[t.charCodeAt(h + 1)], n = ds[t.charCodeAt(h + 2)], i = ds[t.charCodeAt(h + 3)], f[s++] = A << 2 | e >> 4, f[s++] = (15 & e) << 4 | n >> 2, f[s++] = (3 & n) << 6 | 63 & i;
  return l;
}, wD = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 2)
    e.push(t[n + 1] << 8 | t[n]);
  return e;
}, QD = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 4)
    e.push(t[n + 3] << 24 | t[n + 2] << 16 | t[n + 1] << 8 | t[n]);
  return e;
}, Mo = 5, rg = 11, ug = 2, hD = rg - Mo, Ww = 65536 >> Mo, CD = 1 << Mo, og = CD - 1, FD = 1024 >> Mo, Yw = Ww + FD, WI = Yw, UD = 32, pD = Yw + UD, mD = 65536 >> rg, ED = 1 << hD, DD = ED - 1, Zw = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, HD = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, yD = function(i, A) {
  var i = gD(i), e = Array.isArray(i) ? QD(i) : new Uint32Array(i), i = Array.isArray(i) ? wD(i) : new Uint16Array(i), n = Zw(i, 12, e[4] / 2), i = e[5] === 2 ? Zw(i, (24 + e[4]) / 2) : HD(e, Math.ceil((24 + e[4]) / 4));
  return new bD(e[0], e[1], e[2], e[3], n, i);
}, bD = function() {
  function t(A, e, n, i, d, s) {
    this.initialValue = A, this.errorValue = e, this.highStart = n, this.highValueIndex = i, this.index = d, this.data = s;
  }
  return t.prototype.get = function(A) {
    var e;
    if (0 <= A) {
      if (A < 55296 || 56319 < A && A <= 65535)
        return e = this.index[A >> Mo], this.data[e = (e << ug) + (A & og)];
      if (A <= 65535)
        return e = this.index[Ww + (A - 55296 >> Mo)], this.data[e = (e << ug) + (A & og)];
      if (A < this.highStart)
        return e = this.index[e = pD - mD + (A >> rg)], e = this.index[e += A >> Mo & DD], this.data[e = (e << ug) + (A & og)];
      if (A <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, t;
}(), jw = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ID = typeof Uint8Array > "u" ? [] : new Uint8Array(256), UB = 0; UB < jw.length; UB++)
  ID[jw.charCodeAt(UB)] = UB;
var vD = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", qw = 50, KD = 1, dC = 2, sC = 3, LD = 4, xD = 5, zw = 7, cC = 8, $w = 9, yu = 10, Wg = 11, AQ = 12, Yg = 13, _D = 14, ss = 15, Zg = 16, pB = 17, qd = 18, SD = 19, eQ = 20, jg = 21, zd = 22, ig = 23, sa = 24, tn = 25, cs = 26, Bs = 27, ca = 28, TD = 29, Us = 30, OD = 31, mB = 32, EB = 33, qg = 34, zg = 35, $g = 36, Ls = 37, A0 = 38, el = 39, tl = 40, ag = 41, BC = 42, MD = 43, kD = [9001, 65288], lC = "!", kA = "×", DB = "÷", e0 = yD(vD), Vr = [Us, $g], t0 = [KD, dC, sC, xD], fC = [yu, cC], tQ = [Bs, cs], GD = t0.concat(fC), nQ = [A0, el, tl, qg, zg], VD = [ss, Yg], RD = function(t, A) {
  A === void 0 && (A = "strict");
  var e = [], n = [], i = [];
  return t.forEach(function(d, s) {
    var l = e0.get(d);
    return qw < l ? (i.push(!0), l -= qw) : i.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(d) !== -1 ? (n.push(s), e.push(Zg)) : l !== LD && l !== Wg ? (n.push(s), l === OD ? e.push(A === "strict" ? jg : Ls) : l === BC || l === TD ? e.push(Us) : l === MD ? e.push(131072 <= d && d <= 196605 || 196608 <= d && d <= 262141 ? Ls : Us) : void e.push(l)) : s !== 0 && GD.indexOf(d = e[s - 1]) === -1 ? (n.push(n[s - 1]), e.push(d)) : (n.push(s), e.push(Us));
  }), [n, e, i];
}, dg = function(t, A, e, n) {
  var i = n[e];
  if (Array.isArray(t) ? t.indexOf(i) !== -1 : t === i)
    for (var d = e; d <= n.length; ) {
      if ((l = n[++d]) === A)
        return !0;
      if (l !== yu)
        break;
    }
  if (i === yu)
    for (d = e; 0 < d; ) {
      var s = n[--d];
      if (Array.isArray(t) ? t.indexOf(s) !== -1 : t === s)
        for (var l, f = e; f <= n.length; ) {
          if ((l = n[++f]) === A)
            return !0;
          if (l !== yu)
            break;
        }
      if (s !== yu)
        break;
    }
  return !1;
}, rQ = function(t, A) {
  for (var e = t; 0 <= e; ) {
    var n = A[e];
    if (n !== yu)
      return n;
    e--;
  }
  return 0;
}, ND = function(t, A, e, n, d) {
  if (e[n] === 0 || (n -= 1, Array.isArray(d) && d[n] === !0))
    return kA;
  var d = n - 1, s = 1 + n, l = A[n], f = 0 <= d ? A[d] : 0, h = A[s];
  if (l === dC && h === sC)
    return kA;
  if (t0.indexOf(l) !== -1)
    return lC;
  if (t0.indexOf(h) !== -1 || fC.indexOf(h) !== -1)
    return kA;
  if (rQ(n, A) === cC)
    return DB;
  if (e0.get(t[n]) === Wg || (l === mB || l === EB) && e0.get(t[s]) === Wg || l === zw || h === zw || l === $w || [yu, Yg, ss].indexOf(l) === -1 && h === $w || [pB, qd, SD, sa, ca].indexOf(h) !== -1 || rQ(n, A) === zd || dg(ig, zd, n, A) || dg([pB, qd], jg, n, A) || dg(AQ, AQ, n, A))
    return kA;
  if (l === yu)
    return DB;
  if (l === ig || h === ig)
    return kA;
  if (h === Zg || l === Zg)
    return DB;
  if ([Yg, ss, jg].indexOf(h) !== -1 || l === _D || f === $g && VD.indexOf(l) !== -1 || l === ca && h === $g || h === eQ || Vr.indexOf(h) !== -1 && l === tn || Vr.indexOf(l) !== -1 && h === tn || l === Bs && [Ls, mB, EB].indexOf(h) !== -1 || [Ls, mB, EB].indexOf(l) !== -1 && h === cs || Vr.indexOf(l) !== -1 && tQ.indexOf(h) !== -1 || tQ.indexOf(l) !== -1 && Vr.indexOf(h) !== -1 || [Bs, cs].indexOf(l) !== -1 && (h === tn || [zd, ss].indexOf(h) !== -1 && A[1 + s] === tn) || [zd, ss].indexOf(l) !== -1 && h === tn || l === tn && [tn, ca, sa].indexOf(h) !== -1)
    return kA;
  if ([tn, ca, sa, pB, qd].indexOf(h) !== -1)
    for (var w = n; 0 <= w; ) {
      if ((p = A[w]) === tn)
        return kA;
      if ([ca, sa].indexOf(p) === -1)
        break;
      w--;
    }
  if ([Bs, cs].indexOf(h) !== -1)
    for (var p, w = [pB, qd].indexOf(l) !== -1 ? d : n; 0 <= w; ) {
      if ((p = A[w]) === tn)
        return kA;
      if ([ca, sa].indexOf(p) === -1)
        break;
      w--;
    }
  if (A0 === l && [A0, el, qg, zg].indexOf(h) !== -1 || [el, qg].indexOf(l) !== -1 && [el, tl].indexOf(h) !== -1 || [tl, zg].indexOf(l) !== -1 && h === tl || nQ.indexOf(l) !== -1 && [eQ, cs].indexOf(h) !== -1 || nQ.indexOf(h) !== -1 && l === Bs || Vr.indexOf(l) !== -1 && Vr.indexOf(h) !== -1 || l === sa && Vr.indexOf(h) !== -1 || Vr.concat(tn).indexOf(l) !== -1 && h === zd && kD.indexOf(t[s]) === -1 || Vr.concat(tn).indexOf(h) !== -1 && l === qd)
    return kA;
  if (l === ag && h === ag) {
    for (var K = e[n], _ = 1; 0 < K && A[--K] === ag; )
      _++;
    if (_ % 2 != 0)
      return kA;
  }
  return l === mB && h === EB ? kA : DB;
}, PD = function(t, d) {
  var i = RD(t, (d = d || { lineBreak: "normal", wordBreak: "normal" }).lineBreak), e = i[0], n = i[1], i = i[2], d = (d.wordBreak !== "break-all" && d.wordBreak !== "break-word" || (n = n.map(function(s) {
    return [tn, Us, BC].indexOf(s) !== -1 ? Ls : s;
  })), d.wordBreak === "keep-all" ? i.map(function(s, l) {
    return s && 19968 <= t[l] && t[l] <= 40959;
  }) : void 0);
  return [e, n, d];
}, JD = function() {
  function t(A, e, n, i) {
    this.codePoints = A, this.required = e === lC, this.start = n, this.end = i;
  }
  return t.prototype.slice = function() {
    return Ie.apply(void 0, this.codePoints.slice(this.start, this.end));
  }, t;
}(), XD = function(n, A) {
  var e = Il(n), n = PD(e, A), i = n[0], d = n[1], s = n[2], l = e.length, f = 0, h = 0;
  return { next: function() {
    if (l <= h)
      return { done: !0, value: null };
    for (var w, p = kA; h < l && (p = ND(e, d, i, ++h, s)) === kA; )
      ;
    return p !== kA || h === l ? (w = new JD(e, p, f, h), f = h, { value: w, done: !1 }) : { done: !0, value: null };
  } };
}, WD = 1, YD = 2, Os = 4, uQ = 8, fl = 10, oQ = 47, ps = 92, ZD = 9, jD = 32, HB = 34, $d = 61, qD = 35, zD = 36, $D = 37, yB = 39, bB = 40, As = 41, AH = 95, Ot = 45, eH = 33, tH = 60, nH = 62, rH = 64, uH = 91, oH = 93, iH = 61, aH = 123, IB = 63, dH = 125, iQ = 124, sH = 126, cH = 128, aQ = 65533, sg = 42, Xo = 43, BH = 44, lH = 58, fH = 59, xs = 46, gH = 0, wH = 8, QH = 11, hH = 14, CH = 31, FH = 127, lr = -1, gC = 48, wC = 97, QC = 101, UH = 102, pH = 117, mH = 122, hC = 65, CC = 69, FC = 70, EH = 85, DH = 90, It = function(t) {
  return gC <= t && t <= 57;
}, HH = function(t) {
  return 55296 <= t && t <= 57343;
}, Ba = function(t) {
  return It(t) || hC <= t && t <= FC || wC <= t && t <= UH;
}, yH = function(t) {
  return wC <= t && t <= mH;
}, bH = function(t) {
  return hC <= t && t <= DH;
}, IH = function(t) {
  return yH(t) || bH(t);
}, vH = function(t) {
  return cH <= t;
}, vB = function(t) {
  return t === fl || t === ZD || t === jD;
}, gl = function(t) {
  return IH(t) || vH(t) || t === AH;
}, dQ = function(t) {
  return gl(t) || It(t) || t === Ot;
}, KH = function(t) {
  return gH <= t && t <= wH || t === QH || hH <= t && t <= CH || t === FH;
}, Uu = function(t, A) {
  return t === ps && A !== fl;
}, KB = function(t, A, e) {
  return t === Ot ? gl(A) || Uu(A, e) : !!gl(t) || !(t !== ps || !Uu(t, A));
}, cg = function(t, A, e) {
  return t === Xo || t === Ot ? !!It(A) || A === xs && It(e) : It(t === xs ? A : t);
}, LH = function(t) {
  for (var A = 0, e = 1, n = (t[A] !== Xo && t[A] !== Ot || (t[A] === Ot && (e = -1), A++), []); It(t[A]); )
    n.push(t[A++]);
  for (var i = n.length ? parseInt(Ie.apply(void 0, n), 10) : 0, d = (t[A] === xs && A++, []); It(t[A]); )
    d.push(t[A++]);
  for (var s = d.length, l = s ? parseInt(Ie.apply(void 0, d), 10) : 0, f = (t[A] !== CC && t[A] !== QC || A++, 1), h = (t[A] !== Xo && t[A] !== Ot || (t[A] === Ot && (f = -1), A++), []); It(t[A]); )
    h.push(t[A++]);
  var w = h.length ? parseInt(Ie.apply(void 0, h), 10) : 0;
  return e * (i + l * Math.pow(10, -s)) * Math.pow(10, f * w);
}, xH = { type: 2 }, _H = { type: 3 }, SH = { type: 4 }, TH = { type: 13 }, OH = { type: 8 }, MH = { type: 21 }, kH = { type: 9 }, GH = { type: 10 }, VH = { type: 11 }, RH = { type: 12 }, NH = { type: 14 }, LB = { type: 23 }, PH = { type: 1 }, JH = { type: 25 }, XH = { type: 24 }, WH = { type: 26 }, YH = { type: 27 }, ZH = { type: 28 }, jH = { type: 29 }, qH = { type: 31 }, n0 = { type: 32 }, UC = function() {
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
      case HB:
        return this.consumeStringToken(HB);
      case qD:
        var e = this.peekCodePoint(0), n = this.peekCodePoint(1), i = this.peekCodePoint(2);
        if (dQ(e) || Uu(n, i))
          return e = KB(e, n, i) ? YD : WD, { type: 5, value: this.consumeName(), flags: e };
        break;
      case zD:
        if (this.peekCodePoint(0) === $d)
          return this.consumeCodePoint(), TH;
        break;
      case yB:
        return this.consumeStringToken(yB);
      case bB:
        return xH;
      case As:
        return _H;
      case sg:
        if (this.peekCodePoint(0) === $d)
          return this.consumeCodePoint(), NH;
        break;
      case Xo:
        if (cg(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case BH:
        return SH;
      case Ot:
        if (n = A, i = this.peekCodePoint(0), e = this.peekCodePoint(1), cg(n, i, e))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (KB(n, i, e))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (i === Ot && e === nH)
          return this.consumeCodePoint(), this.consumeCodePoint(), XH;
        break;
      case xs:
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
      case lH:
        return WH;
      case fH:
        return YH;
      case tH:
        if (this.peekCodePoint(0) === eH && this.peekCodePoint(1) === Ot && this.peekCodePoint(2) === Ot)
          return this.consumeCodePoint(), this.consumeCodePoint(), JH;
        break;
      case rH:
        if (n = this.peekCodePoint(0), i = this.peekCodePoint(1), e = this.peekCodePoint(2), KB(n, i, e))
          return { type: 7, value: this.consumeName() };
        break;
      case uH:
        return ZH;
      case ps:
        if (Uu(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case oH:
        return jH;
      case iH:
        if (this.peekCodePoint(0) === $d)
          return this.consumeCodePoint(), OH;
        break;
      case aH:
        return VH;
      case dH:
        return RH;
      case pH:
      case EH:
        return n = this.peekCodePoint(0), i = this.peekCodePoint(1), n !== Xo || !Ba(i) && i !== IB || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case iQ:
        if (this.peekCodePoint(0) === $d)
          return this.consumeCodePoint(), kH;
        if (this.peekCodePoint(0) === iQ)
          return this.consumeCodePoint(), MH;
        break;
      case sH:
        if (this.peekCodePoint(0) === $d)
          return this.consumeCodePoint(), GH;
        break;
      case lr:
        return n0;
    }
    return vB(A) ? (this.consumeWhiteSpace(), qH) : It(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : gl(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: Ie(A) };
  }, t.prototype.consumeCodePoint = function() {
    var A = this._value.shift();
    return A === void 0 ? -1 : A;
  }, t.prototype.reconsumeCodePoint = function(A) {
    this._value.unshift(A);
  }, t.prototype.peekCodePoint = function(A) {
    return A >= this._value.length ? -1 : this._value[A];
  }, t.prototype.consumeUnicodeRangeToken = function() {
    for (var A = [], e = this.consumeCodePoint(); Ba(e) && A.length < 6; )
      A.push(e), e = this.consumeCodePoint();
    for (var n = !1; e === IB && A.length < 6; )
      A.push(e), e = this.consumeCodePoint(), n = !0;
    if (n)
      return { type: 30, start: parseInt(Ie.apply(void 0, A.map(function(s) {
        return s === IB ? gC : s;
      })), 16), end: parseInt(Ie.apply(void 0, A.map(function(s) {
        return s === IB ? FC : s;
      })), 16) };
    var i = parseInt(Ie.apply(void 0, A), 16);
    if (this.peekCodePoint(0) === Ot && Ba(this.peekCodePoint(1))) {
      this.consumeCodePoint();
      for (var e = this.consumeCodePoint(), d = []; Ba(e) && d.length < 6; )
        d.push(e), e = this.consumeCodePoint();
      return { type: 30, start: i, end: parseInt(Ie.apply(void 0, d), 16) };
    }
    return { type: 30, start: i, end: i };
  }, t.prototype.consumeIdentLikeToken = function() {
    var A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === bB ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === bB ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }, t.prototype.consumeUrlToken = function() {
    var A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === lr)
      return { type: 22, value: "" };
    var e = this.peekCodePoint(0);
    if (e === yB || e === HB)
      return (e = this.consumeStringToken(this.consumeCodePoint())).type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === lr || this.peekCodePoint(0) === As) ? (this.consumeCodePoint(), { type: 22, value: e.value }) : (this.consumeBadUrlRemnants(), LB);
    for (; ; ) {
      var n = this.consumeCodePoint();
      if (n === lr || n === As)
        return { type: 22, value: Ie.apply(void 0, A) };
      if (vB(n))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === lr || this.peekCodePoint(0) === As ? (this.consumeCodePoint(), { type: 22, value: Ie.apply(void 0, A) }) : (this.consumeBadUrlRemnants(), LB);
      if (n === HB || n === yB || n === bB || KH(n))
        return this.consumeBadUrlRemnants(), LB;
      if (n === ps) {
        if (!Uu(n, this.peekCodePoint(0)))
          return this.consumeBadUrlRemnants(), LB;
        A.push(this.consumeEscapedCodePoint());
      } else
        A.push(n);
    }
  }, t.prototype.consumeWhiteSpace = function() {
    for (; vB(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }, t.prototype.consumeBadUrlRemnants = function() {
    for (; ; ) {
      var A = this.consumeCodePoint();
      if (A === As || A === lr)
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
        return this._value.splice(0, n), PH;
      d === ps && (i = this._value[n + 1]) !== lr && i !== void 0 && (i === fl ? (e += this.consumeStringSlice(n), n = -1, this._value.shift()) : Uu(d, i) && (e = (e += this.consumeStringSlice(n)) + Ie(this.consumeEscapedCodePoint()), n = -1)), n++;
    }
  }, t.prototype.consumeNumber = function() {
    var A = [], e = Os;
    for ((n = this.peekCodePoint(0)) !== Xo && n !== Ot || A.push(this.consumeCodePoint()); It(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    var n = this.peekCodePoint(0), i = this.peekCodePoint(1);
    if (n === xs && It(i))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = uQ; It(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    n = this.peekCodePoint(0);
    var i = this.peekCodePoint(1), d = this.peekCodePoint(2);
    if ((n === CC || n === QC) && ((i === Xo || i === Ot) && It(d) || It(i)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = uQ; It(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [LH(A), e];
  }, t.prototype.consumeNumericToken = function() {
    var e = this.consumeNumber(), A = e[0], e = e[1], n = this.peekCodePoint(0), i = this.peekCodePoint(1), d = this.peekCodePoint(2);
    return KB(n, i, d) ? { type: 15, number: A, flags: e, unit: this.consumeName() } : n === $D ? (this.consumeCodePoint(), { type: 16, number: A, flags: e }) : { type: 17, number: A, flags: e };
  }, t.prototype.consumeEscapedCodePoint = function() {
    var A = this.consumeCodePoint();
    if (Ba(A)) {
      for (var e = Ie(A); Ba(this.peekCodePoint(0)) && e.length < 6; )
        e += Ie(this.consumeCodePoint());
      vB(this.peekCodePoint(0)) && this.consumeCodePoint();
      var n = parseInt(e, 16);
      return n === 0 || HH(n) || 1114111 < n ? aQ : n;
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
      if (n.type === 32 || $H(n, A))
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
}(), ms = function(t) {
  return t.type === 15;
}, Ca = function(t) {
  return t.type === 17;
}, ne = function(t) {
  return t.type === 20;
}, zH = function(t) {
  return t.type === 0;
}, Bg = function(t, A) {
  return ne(t) && t.value === A;
}, sQ = function(t) {
  return t.type !== 31;
}, ba = function(t) {
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
}, $H = function(t, A) {
  return A === 11 && t.type === 12 || A === 28 && t.type === 29 || A === 2 && t.type === 3;
}, Lu = function(t) {
  return t.type === 17 || t.type === 15;
}, Ge = function(t) {
  return t.type === 16 || Lu(t);
}, cQ = function(t) {
  return 1 < t.length ? [t[0], t[1]] : [t[0]];
}, rt = { type: 17, number: 0, flags: Os }, F0 = { type: 16, number: 50, flags: Os }, bu = { type: 16, number: 100, flags: Os }, ls = function(i, A, e) {
  var n = i[0], i = i[1];
  return [de(n, A), de(i !== void 0 ? i : n, e)];
}, de = function(t, A) {
  if (t.type === 16)
    return t.number / 100 * A;
  if (ms(t))
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
  switch (t.filter(ne).map(function(A) {
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
      return [rt, bu];
    case "to right":
    case "left":
      return vn(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [bu, bu];
    case "to bottom":
    case "top":
      return vn(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [bu, rt];
    case "to left":
    case "right":
      return vn(270);
  }
  return 0;
}, vn = function(t) {
  return Math.PI * t / 180;
}, xu = { name: "color", parse: function(t, A) {
  if (A.type === 18) {
    var e = Ay[A.name];
    if (e === void 0)
      throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
    return e(t, A.values);
  }
  if (A.type === 5) {
    var n, i, d, s;
    if (A.value.length === 3)
      return n = A.value.substring(0, 1), i = A.value.substring(1, 2), d = A.value.substring(2, 3), Iu(parseInt(n + n, 16), parseInt(i + i, 16), parseInt(d + d, 16), 1);
    if (A.value.length === 4)
      return n = A.value.substring(0, 1), i = A.value.substring(1, 2), d = A.value.substring(2, 3), s = A.value.substring(3, 4), Iu(parseInt(n + n, 16), parseInt(i + i, 16), parseInt(d + d, 16), parseInt(s + s, 16) / 255);
    if (A.value.length === 6)
      return n = A.value.substring(0, 2), i = A.value.substring(2, 4), d = A.value.substring(4, 6), Iu(parseInt(n, 16), parseInt(i, 16), parseInt(d, 16), 1);
    if (A.value.length === 8)
      return n = A.value.substring(0, 2), i = A.value.substring(2, 4), d = A.value.substring(4, 6), s = A.value.substring(6, 8), Iu(parseInt(n, 16), parseInt(i, 16), parseInt(d, 16), parseInt(s, 16) / 255);
  }
  return A.type === 20 && (e = Pr[A.value.toUpperCase()], e !== void 0) ? e : Pr.TRANSPARENT;
} }, _u = function(t) {
  return (255 & t) == 0;
}, je = function(i) {
  var A = 255 & i, e = 255 & i >> 8, n = 255 & i >> 16, i = 255 & i >> 24;
  return A < 255 ? "rgba(" + i + "," + n + "," + e + "," + A / 255 + ")" : "rgb(" + i + "," + n + "," + e + ")";
}, Iu = function(t, A, e, n) {
  return (t << 24 | A << 16 | e << 8 | Math.round(255 * n) << 0) >>> 0;
}, BQ = function(t, A) {
  var e;
  return t.type === 17 ? t.number : t.type === 16 ? (e = A === 3 ? 1 : 255, A === 3 ? t.number / 100 * e : Math.round(t.number / 100 * e)) : 0;
}, lQ = function(t, d) {
  var e, n, i, d = d.filter(ba);
  return d.length === 3 ? (e = (i = d.map(BQ))[0], n = i[1], i = i[2], Iu(e, n, i, 1)) : d.length === 4 ? (e = (d = d.map(BQ))[0], n = d[1], i = d[2], d = d[3], Iu(e, n, i, d)) : 0;
};
function lg(t, A, e) {
  return e < 0 && (e += 1), 1 <= e && --e, e < 1 / 6 ? (A - t) * e * 6 + t : e < 0.5 ? A : e < 2 / 3 ? 6 * (A - t) * (2 / 3 - e) + t : t;
}
var fQ = function(i, n) {
  var e, n = n.filter(ba), d = n[0], s = n[1], l = n[2], n = n[3], i = (d.type === 17 ? vn(d.number) : vl.parse(i, d)) / (2 * Math.PI), d = Ge(s) ? s.number / 100 : 0, s = Ge(l) ? l.number / 100 : 0, l = n !== void 0 && Ge(n) ? de(n, 1) : 1;
  return d == 0 ? Iu(255 * s, 255 * s, 255 * s, 1) : (d = lg(s = 2 * s - (n = s <= 0.5 ? s * (1 + d) : s + d - s * d), n, i + 1 / 3), e = lg(s, n, i), s = lg(s, n, i - 1 / 3), Iu(255 * d, 255 * e, 255 * s, l));
}, Ay = { hsl: fQ, hsla: fQ, rgb: lQ, rgba: lQ }, Es = function(t, A) {
  return xu.parse(t, pC.create(A).parseComponentValue());
}, Pr = { ALICEBLUE: 4042850303, ANTIQUEWHITE: 4209760255, AQUA: 16777215, AQUAMARINE: 2147472639, AZURE: 4043309055, BEIGE: 4126530815, BISQUE: 4293182719, BLACK: 255, BLANCHEDALMOND: 4293643775, BLUE: 65535, BLUEVIOLET: 2318131967, BROWN: 2771004159, BURLYWOOD: 3736635391, CADETBLUE: 1604231423, CHARTREUSE: 2147418367, CHOCOLATE: 3530104575, CORAL: 4286533887, CORNFLOWERBLUE: 1687547391, CORNSILK: 4294499583, CRIMSON: 3692313855, CYAN: 16777215, DARKBLUE: 35839, DARKCYAN: 9145343, DARKGOLDENROD: 3095837695, DARKGRAY: 2846468607, DARKGREEN: 6553855, DARKGREY: 2846468607, DARKKHAKI: 3182914559, DARKMAGENTA: 2332068863, DARKOLIVEGREEN: 1433087999, DARKORANGE: 4287365375, DARKORCHID: 2570243327, DARKRED: 2332033279, DARKSALMON: 3918953215, DARKSEAGREEN: 2411499519, DARKSLATEBLUE: 1211993087, DARKSLATEGRAY: 793726975, DARKSLATEGREY: 793726975, DARKTURQUOISE: 13554175, DARKVIOLET: 2483082239, DEEPPINK: 4279538687, DEEPSKYBLUE: 12582911, DIMGRAY: 1768516095, DIMGREY: 1768516095, DODGERBLUE: 512819199, FIREBRICK: 2988581631, FLORALWHITE: 4294635775, FORESTGREEN: 579543807, FUCHSIA: 4278255615, GAINSBORO: 3705462015, GHOSTWHITE: 4177068031, GOLD: 4292280575, GOLDENROD: 3668254975, GRAY: 2155905279, GREEN: 8388863, GREENYELLOW: 2919182335, GREY: 2155905279, HONEYDEW: 4043305215, HOTPINK: 4285117695, INDIANRED: 3445382399, INDIGO: 1258324735, IVORY: 4294963455, KHAKI: 4041641215, LAVENDER: 3873897215, LAVENDERBLUSH: 4293981695, LAWNGREEN: 2096890111, LEMONCHIFFON: 4294626815, LIGHTBLUE: 2916673279, LIGHTCORAL: 4034953471, LIGHTCYAN: 3774873599, LIGHTGOLDENRODYELLOW: 4210742015, LIGHTGRAY: 3553874943, LIGHTGREEN: 2431553791, LIGHTGREY: 3553874943, LIGHTPINK: 4290167295, LIGHTSALMON: 4288707327, LIGHTSEAGREEN: 548580095, LIGHTSKYBLUE: 2278488831, LIGHTSLATEGRAY: 2005441023, LIGHTSLATEGREY: 2005441023, LIGHTSTEELBLUE: 2965692159, LIGHTYELLOW: 4294959359, LIME: 16711935, LIMEGREEN: 852308735, LINEN: 4210091775, MAGENTA: 4278255615, MAROON: 2147483903, MEDIUMAQUAMARINE: 1724754687, MEDIUMBLUE: 52735, MEDIUMORCHID: 3126187007, MEDIUMPURPLE: 2473647103, MEDIUMSEAGREEN: 1018393087, MEDIUMSLATEBLUE: 2070474495, MEDIUMSPRINGGREEN: 16423679, MEDIUMTURQUOISE: 1221709055, MEDIUMVIOLETRED: 3340076543, MIDNIGHTBLUE: 421097727, MINTCREAM: 4127193855, MISTYROSE: 4293190143, MOCCASIN: 4293178879, NAVAJOWHITE: 4292783615, NAVY: 33023, OLDLACE: 4260751103, OLIVE: 2155872511, OLIVEDRAB: 1804477439, ORANGE: 4289003775, ORANGERED: 4282712319, ORCHID: 3664828159, PALEGOLDENROD: 4008225535, PALEGREEN: 2566625535, PALETURQUOISE: 2951671551, PALEVIOLETRED: 3681588223, PAPAYAWHIP: 4293907967, PEACHPUFF: 4292524543, PERU: 3448061951, PINK: 4290825215, PLUM: 3718307327, POWDERBLUE: 2967529215, PURPLE: 2147516671, REBECCAPURPLE: 1714657791, RED: 4278190335, ROSYBROWN: 3163525119, ROYALBLUE: 1097458175, SADDLEBROWN: 2336560127, SALMON: 4202722047, SANDYBROWN: 4104413439, SEAGREEN: 780883967, SEASHELL: 4294307583, SIENNA: 2689740287, SILVER: 3233857791, SKYBLUE: 2278484991, SLATEBLUE: 1784335871, SLATEGRAY: 1887473919, SLATEGREY: 1887473919, SNOW: 4294638335, SPRINGGREEN: 16744447, STEELBLUE: 1182971135, TAN: 3535047935, TEAL: 8421631, THISTLE: 3636451583, TOMATO: 4284696575, TRANSPARENT: 0, TURQUOISE: 1088475391, VIOLET: 4001558271, WHEAT: 4125012991, WHITE: 4294967295, WHITESMOKE: 4126537215, YELLOW: 4294902015, YELLOWGREEN: 2597139199 }, ey = { name: "background-clip", initialValue: "border-box", prefix: !1, type: 1, parse: function(t, A) {
  return A.map(function(e) {
    if (ne(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, ty = { name: "background-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Kl = function(t, A) {
  return t = xu.parse(t, A[0]), A = A[1], A && Ge(A) ? { color: t, stop: A } : { color: t, stop: null };
}, gQ = function(t, A) {
  for (var e = t[0], n = t[t.length - 1], i = (e.stop === null && (e.stop = rt), n.stop === null && (n.stop = bu), []), d = 0, s = 0; s < t.length; s++) {
    var l = t[s].stop;
    l !== null ? (l = de(l, A), i.push(d < l ? l : d), d = l) : i.push(null);
  }
  for (var f = null, s = 0; s < i.length; s++) {
    var h = i[s];
    if (h === null)
      f === null && (f = s);
    else if (f !== null) {
      for (var w = s - f, p = (h - i[f - 1]) / (1 + w), K = 1; K <= w; K++)
        i[f + K - 1] = p * K;
      f = null;
    }
  }
  return t.map(function(_, S) {
    return { color: _.color, stop: Math.max(Math.min(1, i[S] / A), 0) };
  });
}, ny = function(t, i, e) {
  var d = i / 2, n = e / 2, i = de(t[0], i) - d, d = n - de(t[1], e);
  return (Math.atan2(d, i) + 2 * Math.PI) % (2 * Math.PI);
}, ry = function(f, i, d) {
  var f = typeof f == "number" ? f : ny(f, i, d), n = Math.abs(i * Math.sin(f)) + Math.abs(d * Math.cos(f)), i = i / 2, d = d / 2, s = n / 2, l = Math.sin(f - Math.PI / 2) * s, f = Math.cos(f - Math.PI / 2) * s;
  return [n, i - f, i + f, d - l, d + l];
}, Wn = function(t, A) {
  return Math.sqrt(t * t + A * A);
}, wQ = function(t, A, e, n, i) {
  return [[0, 0], [0, A], [t, 0], [t, A]].reduce(function(d, s) {
    var f = s[0], l = s[1], f = Wn(e - f, n - l);
    return (i ? f < d.optimumDistance : f > d.optimumDistance) ? { optimumCorner: s, optimumDistance: f } : d;
  }, { optimumDistance: i ? 1 / 0 : -1 / 0, optimumCorner: null }).optimumCorner;
}, uy = function(t, A, e, n, i) {
  var d, s, l, f, h = 0, w = 0;
  switch (t.size) {
    case 0:
      t.shape === 0 ? h = w = Math.min(Math.abs(A), Math.abs(A - n), Math.abs(e), Math.abs(e - i)) : t.shape === 1 && (h = Math.min(Math.abs(A), Math.abs(A - n)), w = Math.min(Math.abs(e), Math.abs(e - i)));
      break;
    case 2:
      t.shape === 0 ? h = w = Math.min(Wn(A, e), Wn(A, e - i), Wn(A - n, e), Wn(A - n, e - i)) : t.shape === 1 && (d = Math.min(Math.abs(e), Math.abs(e - i)) / Math.min(Math.abs(A), Math.abs(A - n)), l = (f = wQ(n, i, A, e, !0))[0], f = f[1], w = d * (h = Wn(l - A, (f - e) / d)));
      break;
    case 1:
      t.shape === 0 ? h = w = Math.max(Math.abs(A), Math.abs(A - n), Math.abs(e), Math.abs(e - i)) : t.shape === 1 && (h = Math.max(Math.abs(A), Math.abs(A - n)), w = Math.max(Math.abs(e), Math.abs(e - i)));
      break;
    case 3:
      t.shape === 0 ? h = w = Math.max(Wn(A, e), Wn(A, e - i), Wn(A - n, e), Wn(A - n, e - i)) : t.shape === 1 && (d = Math.max(Math.abs(e), Math.abs(e - i)) / Math.max(Math.abs(A), Math.abs(A - n)), l = (s = wQ(n, i, A, e, !1))[0], f = s[1], w = d * (h = Wn(l - A, (f - e) / d)));
  }
  return Array.isArray(t.size) && (h = de(t.size[0], n), w = t.size.length === 2 ? de(t.size[1], i) : h), [h, w];
}, oy = function(t, A) {
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
}, xB = function(t, A) {
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
}, iy = function(t, A) {
  var e = vn(180), n = [], i = 1;
  return gr(A).forEach(function(f, s) {
    var l, f = f[0];
    if (s === 0) {
      if (ne(f) && f.value === "linear")
        return void (i = 1);
      if (ne(f) && f.value === "radial")
        return void (i = 2);
    }
    f.type === 18 && (f.name === "from" ? (l = xu.parse(t, f.values[0]), n.push({ stop: rt, color: l })) : f.name === "to" ? (l = xu.parse(t, f.values[0]), n.push({ stop: bu, color: l })) : f.name === "color-stop" && (s = f.values.filter(ba)).length === 2 && (l = xu.parse(t, s[1]), f = s[0], Ca(f)) && n.push({ stop: { type: 16, number: 100 * f.number, flags: f.flags }, color: l }));
  }), i === 1 ? { angle: (e + vn(180)) % vn(360), stops: n, type: i } : { size: 3, shape: 0, stops: n, position: [], type: i };
}, IC = "closest-side", vC = "farthest-side", KC = "closest-corner", LC = "farthest-corner", xC = "circle", _C = "ellipse", SC = "cover", TC = "contain", ay = function(t, A) {
  var e = 0, n = 3, i = [], d = [];
  return gr(A).forEach(function(s, l) {
    var f, h = !0;
    l === 0 && (f = !1, h = s.reduce(function(w, p) {
      if (f)
        if (ne(p))
          switch (p.value) {
            case "center":
              return d.push(F0), w;
            case "top":
            case "left":
              return d.push(rt), w;
            case "right":
            case "bottom":
              return d.push(bu), w;
          }
        else
          (Ge(p) || Lu(p)) && d.push(p);
      else if (ne(p))
        switch (p.value) {
          case xC:
            return e = 0, !1;
          case _C:
            return !(e = 1);
          case "at":
            return !(f = !0);
          case IC:
            return n = 0, !1;
          case SC:
          case vC:
            return !(n = 1);
          case TC:
          case KC:
            return !(n = 2);
          case LC:
            return !(n = 3);
        }
      else if (Lu(p) || Ge(p))
        return (n = Array.isArray(n) ? n : []).push(p), !1;
      return w;
    }, h)), h && (l = Kl(t, s), i.push(l));
  }), { size: n, shape: e, stops: i, position: d, type: 2 };
}, _B = function(t, A) {
  var e = 0, n = 3, i = [], d = [];
  return gr(A).forEach(function(s, l) {
    var f = !0;
    l === 0 ? f = s.reduce(function(h, w) {
      if (ne(w))
        switch (w.value) {
          case "center":
            return d.push(F0), !1;
          case "top":
          case "left":
            return d.push(rt), !1;
          case "right":
          case "bottom":
            return d.push(bu), !1;
        }
      else if (Ge(w) || Lu(w))
        return d.push(w), !1;
      return h;
    }, f) : l === 1 && (f = s.reduce(function(h, w) {
      if (ne(w))
        switch (w.value) {
          case xC:
            return e = 0, !1;
          case _C:
            return !(e = 1);
          case TC:
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
      else if (Lu(w) || Ge(w))
        return (n = Array.isArray(n) ? n : []).push(w), !1;
      return h;
    }, f)), f && (l = Kl(t, s), i.push(l));
  }), { size: n, shape: e, stops: i, position: d, type: 2 };
}, dy = function(t) {
  return t.type === 1;
}, sy = function(t) {
  return t.type === 2;
}, fg = { name: "image", parse: function(t, A) {
  if (A.type === 22)
    return e = { url: A.value, type: 0 }, t.cache.addImage(A.value), e;
  if (A.type !== 18)
    throw new Error("Unsupported image type " + A.type);
  var e = OC[A.name];
  if (e === void 0)
    throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
  return e(t, A.values);
} };
function cy(t) {
  return !(t.type === 20 && t.value === "none" || t.type === 18 && !OC[t.name]);
}
for (var ya, SB, es, OC = { "linear-gradient": oy, "-moz-linear-gradient": xB, "-ms-linear-gradient": xB, "-o-linear-gradient": xB, "-webkit-linear-gradient": xB, "radial-gradient": ay, "-moz-radial-gradient": _B, "-ms-radial-gradient": _B, "-o-radial-gradient": _B, "-webkit-radial-gradient": _B, "-webkit-gradient": iy }, By = { name: "background-image", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  var e;
  return A.length === 0 || (e = A[0]).type === 20 && e.value === "none" ? [] : A.filter(function(n) {
    return ba(n) && cy(n);
  }).map(function(n) {
    return fg.parse(t, n);
  });
} }, ly = { name: "background-origin", initialValue: "border-box", prefix: !1, type: 1, parse: function(t, A) {
  return A.map(function(e) {
    if (ne(e))
      switch (e.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  });
} }, fy = { name: "background-position", initialValue: "0% 0%", type: 1, prefix: !1, parse: function(t, A) {
  return gr(A).map(function(e) {
    return e.filter(Ge);
  }).map(cQ);
} }, gy = { name: "background-repeat", initialValue: "repeat", prefix: !1, type: 1, parse: function(t, A) {
  return gr(A).map(function(e) {
    return e.filter(ne).map(function(n) {
      return n.value;
    }).join(" ");
  }).map(wy);
} }, wy = function(t) {
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
}, Qy = (function(t) {
  t.AUTO = "auto", t.CONTAIN = "contain", t.COVER = "cover";
}(ya = ya || {}), { name: "background-size", initialValue: "0", prefix: !1, type: 1, parse: function(t, A) {
  return gr(A).map(function(e) {
    return e.filter(hy);
  });
} }), hy = function(t) {
  return ne(t) || Ge(t);
}, TB = function(t) {
  return { name: "border-" + t + "-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" };
}, Cy = TB("top"), Fy = TB("right"), Uy = TB("bottom"), py = TB("left"), OB = function(t) {
  return { name: "border-radius-" + t, initialValue: "0 0", prefix: !1, type: 1, parse: function(A, e) {
    return cQ(e.filter(Ge));
  } };
}, my = OB("top-left"), Ey = OB("top-right"), Dy = OB("bottom-right"), Hy = OB("bottom-left"), MB = function(t) {
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
}, yy = MB("top"), by = MB("right"), Iy = MB("bottom"), vy = MB("left"), kB = function(t) {
  return { name: "border-" + t + "-width", initialValue: "0", type: 0, prefix: !1, parse: function(A, e) {
    return ms(e) ? e.number : 0;
  } };
}, Ky = kB("top"), Ly = kB("right"), xy = kB("bottom"), _y = kB("left"), Sy = { name: "color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, Ty = { name: "direction", initialValue: "ltr", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "rtl" ? 0 : 1;
} }, Oy = { name: "display", initialValue: "inline-block", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(ne).reduce(function(e, n) {
    return e | My(n.value);
  }, 0);
} }, My = function(t) {
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
}, ky = { name: "float", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
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
} }, Gy = { name: "letter-spacing", initialValue: "0", prefix: !1, type: 0, parse: function(t, A) {
  return A.type === 20 && A.value === "normal" || A.type !== 17 && A.type !== 15 ? 0 : A.number;
} }, Vy = (function(t) {
  t.NORMAL = "normal", t.STRICT = "strict";
}(SB = SB || {}), { name: "line-break", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "strict" ? SB.NORMAL : SB.STRICT;
} }), Ry = { name: "line-height", initialValue: "normal", prefix: !1, type: 4 }, QQ = function(t, A) {
  return ne(t) && t.value === "normal" ? 1.2 * A : t.type === 17 ? A * t.number : Ge(t) ? de(t, A) : A;
}, Ny = { name: "list-style-image", initialValue: "none", type: 0, prefix: !1, parse: function(t, A) {
  return A.type === 20 && A.value === "none" ? null : fg.parse(t, A);
} }, Py = { name: "list-style-position", initialValue: "outside", prefix: !1, type: 2, parse: function(t, A) {
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
} }, GB = function(t) {
  return { name: "margin-" + t, initialValue: "0", prefix: !1, type: 4 };
}, Jy = GB("top"), Xy = GB("right"), Wy = GB("bottom"), Yy = GB("left"), Zy = { name: "overflow", initialValue: "visible", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(ne).map(function(e) {
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
} }, jy = { name: "overflow-wrap", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  return A !== "break-word" ? "normal" : "break-word";
} }, VB = function(t) {
  return { name: "padding-" + t, initialValue: "0", prefix: !1, type: 3, format: "length-percentage" };
}, qy = VB("top"), zy = VB("right"), $y = VB("bottom"), A2 = VB("left"), e2 = { name: "text-align", initialValue: "left", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "right":
      return 2;
    case "center":
    case "justify":
      return 1;
    default:
      return 0;
  }
} }, t2 = { name: "position", initialValue: "static", prefix: !1, type: 2, parse: function(t, A) {
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
} }, n2 = { name: "text-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.length === 1 && Bg(A[0], "none") ? [] : gr(A).map(function(e) {
    for (var n = { color: Pr.TRANSPARENT, offsetX: rt, offsetY: rt, blur: rt }, i = 0, d = 0; d < e.length; d++) {
      var s = e[d];
      Lu(s) ? (i === 0 ? n.offsetX = s : i === 1 ? n.offsetY = s : n.blur = s, i++) : n.color = xu.parse(t, s);
    }
    return n;
  });
} }, r2 = { name: "text-transform", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "uppercase":
      return 2;
    case "lowercase":
      return 1;
    case "capitalize":
      return 3;
  }
  return 0;
} }, u2 = { name: "transform", initialValue: "none", prefix: !0, type: 0, parse: function(t, A) {
  if (A.type === 20 && A.value === "none" || A.type !== 18)
    return null;
  var e = a2[A.name];
  if (e === void 0)
    throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
  return e(A.values);
} }, o2 = function(t) {
  return t = t.filter(function(A) {
    return A.type === 17;
  }).map(function(A) {
    return A.number;
  }), t.length === 6 ? t : null;
}, i2 = function(A) {
  var A = A.filter(function(f) {
    return f.type === 17;
  }).map(function(f) {
    return f.number;
  }), e = A[0], n = A[1], i = (A[2], A[3], A[4]), d = A[5], s = (A[6], A[7], A[8], A[9], A[10], A[11], A[12]), l = A[13];
  return A[14], A[15], A.length === 16 ? [e, n, i, d, s, l] : null;
}, a2 = { matrix: o2, matrix3d: i2 }, hQ = { type: 16, number: 50, flags: Os }, d2 = [hQ, hQ], s2 = { name: "transform-origin", initialValue: "50% 50%", prefix: !0, type: 1, parse: function(t, A) {
  return A = A.filter(Ge), A.length !== 2 ? d2 : [A[0], A[1]];
} }, c2 = { name: "visible", initialValue: "none", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "hidden":
      return 1;
    case "collapse":
      return 2;
    default:
      return 0;
  }
} }, B2 = (function(t) {
  t.NORMAL = "normal", t.BREAK_ALL = "break-all", t.KEEP_ALL = "keep-all";
}(es = es || {}), { name: "word-break", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
  switch (A) {
    case "break-all":
      return es.BREAK_ALL;
    case "keep-all":
      return es.KEEP_ALL;
    default:
      return es.NORMAL;
  }
} }), l2 = { name: "z-index", initialValue: "auto", prefix: !1, type: 0, parse: function(t, A) {
  if (A.type === 20)
    return { auto: !0, order: 0 };
  if (Ca(A))
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
} }, f2 = { name: "opacity", initialValue: "1", type: 0, prefix: !1, parse: function(t, A) {
  return Ca(A) ? A.number : 1;
} }, g2 = { name: "text-decoration-color", initialValue: "transparent", prefix: !1, type: 3, format: "color" }, w2 = { name: "text-decoration-line", initialValue: "none", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(ne).map(function(e) {
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
} }, Q2 = { name: "font-family", initialValue: "", prefix: !1, type: 1, parse: function(t, A) {
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
} }, h2 = { name: "font-size", initialValue: "0", prefix: !1, type: 3, format: "length" }, C2 = { name: "font-weight", initialValue: "normal", type: 0, prefix: !1, parse: function(t, A) {
  return Ca(A) ? A.number : !ne(A) || A.value !== "bold" ? 400 : 700;
} }, F2 = { name: "font-variant", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.filter(ne).map(function(e) {
    return e.value;
  });
} }, U2 = { name: "font-style", initialValue: "normal", prefix: !1, type: 2, parse: function(t, A) {
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
}, p2 = { name: "content", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  var e;
  return A.length === 0 || (e = A[0]).type === 20 && e.value === "none" ? [] : A;
} }, m2 = { name: "counter-increment", initialValue: "none", prefix: !0, type: 1, parse: function(t, A) {
  if (A.length === 0)
    return null;
  var e = A[0];
  if (e.type === 20 && e.value === "none")
    return null;
  for (var n = [], i = A.filter(sQ), d = 0; d < i.length; d++) {
    var s = i[d], l = i[d + 1];
    s.type === 20 && (l = l && Ca(l) ? l.number : 1, n.push({ counter: s.value, increment: l }));
  }
  return n;
} }, E2 = { name: "counter-reset", initialValue: "none", prefix: !0, type: 1, parse: function(t, A) {
  if (A.length === 0)
    return [];
  for (var e = [], n = A.filter(sQ), i = 0; i < n.length; i++) {
    var d = n[i], s = n[i + 1];
    ne(d) && d.value !== "none" && (s = s && Ca(s) ? s.number : 0, e.push({ counter: d.value, reset: s }));
  }
  return e;
} }, D2 = { name: "duration", initialValue: "0s", prefix: !1, type: 1, parse: function(t, A) {
  return A.filter(ms).map(function(e) {
    return CQ.parse(t, e);
  });
} }, H2 = { name: "quotes", initialValue: "none", prefix: !0, type: 1, parse: function(t, A) {
  if (A.length === 0)
    return null;
  var e = A[0];
  if (e.type === 20 && e.value === "none")
    return null;
  var n = [], i = A.filter(zH);
  if (i.length % 2 != 0)
    return null;
  for (var d = 0; d < i.length; d += 2) {
    var s = i[d].value, l = i[d + 1].value;
    n.push({ open: s, close: l });
  }
  return n;
} }, FQ = function(t, A, e) {
  return t && (A = t[Math.min(A, t.length - 1)]) ? e ? A.open : A.close : "";
}, y2 = { name: "box-shadow", initialValue: "none", type: 1, prefix: !1, parse: function(t, A) {
  return A.length === 1 && Bg(A[0], "none") ? [] : gr(A).map(function(e) {
    for (var n = { color: 255, offsetX: rt, offsetY: rt, blur: rt, spread: rt, inset: !1 }, i = 0, d = 0; d < e.length; d++) {
      var s = e[d];
      Bg(s, "inset") ? n.inset = !0 : Lu(s) ? (i === 0 ? n.offsetX = s : i === 1 ? n.offsetY = s : i === 2 ? n.blur = s : n.spread = s, i++) : n.color = xu.parse(t, s);
    }
    return n;
  });
} }, b2 = { name: "paint-order", initialValue: "normal", prefix: !1, type: 1, parse: function(t, A) {
  var e = [];
  return A.filter(ne).forEach(function(n) {
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
} }, I2 = { name: "-webkit-text-stroke-color", initialValue: "currentcolor", prefix: !1, type: 3, format: "color" }, v2 = { name: "-webkit-text-stroke-width", initialValue: "0", type: 0, prefix: !1, parse: function(t, A) {
  return ms(A) ? A.number : 0;
} }, K2 = function() {
  function t(A, e) {
    this.animationDuration = oA(A, D2, e.animationDuration), this.backgroundClip = oA(A, ey, e.backgroundClip), this.backgroundColor = oA(A, ty, e.backgroundColor), this.backgroundImage = oA(A, By, e.backgroundImage), this.backgroundOrigin = oA(A, ly, e.backgroundOrigin), this.backgroundPosition = oA(A, fy, e.backgroundPosition), this.backgroundRepeat = oA(A, gy, e.backgroundRepeat), this.backgroundSize = oA(A, Qy, e.backgroundSize), this.borderTopColor = oA(A, Cy, e.borderTopColor), this.borderRightColor = oA(A, Fy, e.borderRightColor), this.borderBottomColor = oA(A, Uy, e.borderBottomColor), this.borderLeftColor = oA(A, py, e.borderLeftColor), this.borderTopLeftRadius = oA(A, my, e.borderTopLeftRadius), this.borderTopRightRadius = oA(A, Ey, e.borderTopRightRadius), this.borderBottomRightRadius = oA(A, Dy, e.borderBottomRightRadius), this.borderBottomLeftRadius = oA(A, Hy, e.borderBottomLeftRadius), this.borderTopStyle = oA(A, yy, e.borderTopStyle), this.borderRightStyle = oA(A, by, e.borderRightStyle), this.borderBottomStyle = oA(A, Iy, e.borderBottomStyle), this.borderLeftStyle = oA(A, vy, e.borderLeftStyle), this.borderTopWidth = oA(A, Ky, e.borderTopWidth), this.borderRightWidth = oA(A, Ly, e.borderRightWidth), this.borderBottomWidth = oA(A, xy, e.borderBottomWidth), this.borderLeftWidth = oA(A, _y, e.borderLeftWidth), this.boxShadow = oA(A, y2, e.boxShadow), this.color = oA(A, Sy, e.color), this.direction = oA(A, Ty, e.direction), this.display = oA(A, Oy, e.display), this.float = oA(A, ky, e.cssFloat), this.fontFamily = oA(A, Q2, e.fontFamily), this.fontSize = oA(A, h2, e.fontSize), this.fontStyle = oA(A, U2, e.fontStyle), this.fontVariant = oA(A, F2, e.fontVariant), this.fontWeight = oA(A, C2, e.fontWeight), this.letterSpacing = oA(A, Gy, e.letterSpacing), this.lineBreak = oA(A, Vy, e.lineBreak), this.lineHeight = oA(A, Ry, e.lineHeight), this.listStyleImage = oA(A, Ny, e.listStyleImage), this.listStylePosition = oA(A, Py, e.listStylePosition), this.listStyleType = oA(A, r0, e.listStyleType), this.marginTop = oA(A, Jy, e.marginTop), this.marginRight = oA(A, Xy, e.marginRight), this.marginBottom = oA(A, Wy, e.marginBottom), this.marginLeft = oA(A, Yy, e.marginLeft), this.opacity = oA(A, f2, e.opacity);
    var n = oA(A, Zy, e.overflow);
    this.overflowX = n[0], this.overflowY = n[1 < n.length ? 1 : 0], this.overflowWrap = oA(A, jy, e.overflowWrap), this.paddingTop = oA(A, qy, e.paddingTop), this.paddingRight = oA(A, zy, e.paddingRight), this.paddingBottom = oA(A, $y, e.paddingBottom), this.paddingLeft = oA(A, A2, e.paddingLeft), this.paintOrder = oA(A, b2, e.paintOrder), this.position = oA(A, t2, e.position), this.textAlign = oA(A, e2, e.textAlign), this.textDecorationColor = oA(A, g2, (n = e.textDecorationColor) != null ? n : e.color), this.textDecorationLine = oA(A, w2, (n = e.textDecorationLine) != null ? n : e.textDecoration), this.textShadow = oA(A, n2, e.textShadow), this.textTransform = oA(A, r2, e.textTransform), this.transform = oA(A, u2, e.transform), this.transformOrigin = oA(A, s2, e.transformOrigin), this.visibility = oA(A, c2, e.visibility), this.webkitTextStrokeColor = oA(A, I2, e.webkitTextStrokeColor), this.webkitTextStrokeWidth = oA(A, v2, e.webkitTextStrokeWidth), this.wordBreak = oA(A, B2, e.wordBreak), this.zIndex = oA(A, l2, e.zIndex);
  }
  return t.prototype.isVisible = function() {
    return 0 < this.display && 0 < this.opacity && this.visibility === 0;
  }, t.prototype.isTransparent = function() {
    return _u(this.backgroundColor);
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
}(), L2 = function(t, A) {
  this.content = oA(t, p2, A.content), this.quotes = oA(t, H2, A.quotes);
}, UQ = function(t, A) {
  this.counterIncrement = oA(t, m2, A.counterIncrement), this.counterReset = oA(t, E2, A.counterReset);
}, oA = function(t, A, i) {
  var n = new UC(), i = i != null ? i.toString() : A.initialValue, d = (n.write(i), new pC(n.read()));
  switch (A.type) {
    case 2:
      var s = d.parseComponentValue();
      return A.parse(t, ne(s) ? s.value : A.initialValue);
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
          return xu.parse(t, d.parseComponentValue());
        case "image":
          return fg.parse(t, d.parseComponentValue());
        case "length":
          var l = d.parseComponentValue();
          return Lu(l) ? l : rt;
        case "length-percentage":
          return l = d.parseComponentValue(), Ge(l) ? l : rt;
        case "time":
          return CQ.parse(t, d.parseComponentValue());
      }
  }
}, x2 = "data-html2canvas-debug", _2 = function(t) {
  switch (t.getAttribute(x2)) {
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
  return t = _2(t), t === 1 || A === t;
}, Qr = function(t, A) {
  this.context = t, this.textNodes = [], this.elements = [], this.flags = 0, u0(A, 3), this.styles = new K2(t, window.getComputedStyle(A, null)), a0(A) && (this.styles.animationDuration.some(function(e) {
    return 0 < e;
  }) && (A.style.animationDuration = "0s"), this.styles.transform !== null) && (A.style.transform = "none"), this.bounds = bl(this.context, A), u0(A, 4) && (this.flags |= 16);
}, S2 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", pQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fs = typeof Uint8Array > "u" ? [] : new Uint8Array(256), RB = 0; RB < pQ.length; RB++)
  fs[pQ.charCodeAt(RB)] = RB;
for (var T2 = function(t) {
  for (var A, e, n, i, l = 0.75 * t.length, d = t.length, s = 0, l = (t[t.length - 1] === "=" && (l--, t[t.length - 2] === "=") && l--, new (typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && Uint8Array.prototype.slice !== void 0 ? ArrayBuffer : Array)(l)), f = Array.isArray(l) ? l : new Uint8Array(l), h = 0; h < d; h += 4)
    A = fs[t.charCodeAt(h)], e = fs[t.charCodeAt(h + 1)], n = fs[t.charCodeAt(h + 2)], i = fs[t.charCodeAt(h + 3)], f[s++] = A << 2 | e >> 4, f[s++] = (15 & e) << 4 | n >> 2, f[s++] = (3 & n) << 6 | 63 & i;
  return l;
}, O2 = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 2)
    e.push(t[n + 1] << 8 | t[n]);
  return e;
}, M2 = function(t) {
  for (var A = t.length, e = [], n = 0; n < A; n += 4)
    e.push(t[n + 3] << 24 | t[n + 2] << 16 | t[n + 1] << 8 | t[n]);
  return e;
}, ko = 5, gg = 11, wg = 2, k2 = gg - ko, mQ = 65536 >> ko, G2 = 1 << ko, Qg = G2 - 1, V2 = 1024 >> ko, EQ = mQ + V2, YI = EQ, R2 = 32, N2 = EQ + R2, P2 = 65536 >> gg, J2 = 1 << k2, X2 = J2 - 1, DQ = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint16Array(Array.prototype.slice.call(t, A, e));
}, W2 = function(t, A, e) {
  return t.slice ? t.slice(A, e) : new Uint32Array(Array.prototype.slice.call(t, A, e));
}, Y2 = function(i, A) {
  var i = T2(i), e = Array.isArray(i) ? M2(i) : new Uint32Array(i), i = Array.isArray(i) ? O2(i) : new Uint16Array(i), n = DQ(i, 12, e[4] / 2), i = e[5] === 2 ? DQ(i, (24 + e[4]) / 2) : W2(e, Math.ceil((24 + e[4]) / 4));
  return new Z2(e[0], e[1], e[2], e[3], n, i);
}, Z2 = function() {
  function t(A, e, n, i, d, s) {
    this.initialValue = A, this.errorValue = e, this.highStart = n, this.highValueIndex = i, this.index = d, this.data = s;
  }
  return t.prototype.get = function(A) {
    var e;
    if (0 <= A) {
      if (A < 55296 || 56319 < A && A <= 65535)
        return e = this.index[A >> ko], this.data[e = (e << wg) + (A & Qg)];
      if (A <= 65535)
        return e = this.index[mQ + (A - 55296 >> ko)], this.data[e = (e << wg) + (A & Qg)];
      if (A < this.highStart)
        return e = this.index[e = N2 - P2 + (A >> gg)], e = this.index[e += A >> ko & X2], this.data[e = (e << wg) + (A & Qg)];
      if (A <= 1114111)
        return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, t;
}(), HQ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", j2 = typeof Uint8Array > "u" ? [] : new Uint8Array(256), NB = 0; NB < HQ.length; NB++)
  j2[HQ.charCodeAt(NB)] = NB;
var Ds, qA, q2 = 1, hg = 2, Cg = 3, yQ = 4, bQ = 5, z2 = 7, IQ = 8, Fg = 9, Ug = 10, vQ = 11, KQ = 12, LQ = 13, xQ = 14, pg = 15, $2 = function(t) {
  for (var A = [], e = 0, n = t.length; e < n; ) {
    var i, d = t.charCodeAt(e++);
    55296 <= d && d <= 56319 && e < n ? (64512 & (i = t.charCodeAt(e++))) == 56320 ? A.push(((1023 & d) << 10) + (1023 & i) + 65536) : (A.push(d), e--) : A.push(d);
  }
  return A;
}, Ab = function() {
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
}, eb = Y2(S2), Dn = "×", tb = "÷", nb = function(t) {
  return eb.get(t);
}, rb = function(t, A, s) {
  var n = s - 2, i = A[n], d = A[s - 1], s = A[s];
  if (d === hg && s === Cg)
    return Dn;
  if (d !== hg && d !== Cg && d !== yQ && s !== hg && s !== Cg && s !== yQ) {
    if (d === IQ && [IQ, Fg, vQ, KQ].indexOf(s) !== -1 || !(d !== vQ && d !== Fg || s !== Fg && s !== Ug) || (d === KQ || d === Ug) && s === Ug || s === LQ || s === bQ || s === z2 || d === q2)
      return Dn;
    if (d === LQ && s === xQ) {
      for (; i === bQ; )
        i = A[--n];
      if (i === xQ)
        return Dn;
    }
    if (d === pg && s === pg) {
      for (var l = 0; i === pg; )
        l++, i = A[--n];
      if (l % 2 == 0)
        return Dn;
    }
  }
  return tb;
}, ub = function(t) {
  var A = $2(t), e = A.length, n = 0, i = 0, d = A.map(nb);
  return { next: function() {
    if (e <= n)
      return { done: !0, value: null };
    for (var s, l = Dn; n < e && (l = rb(A, d, ++n)) === Dn; )
      ;
    return l !== Dn || n === e ? (s = Ab.apply(null, A.slice(i, n)), i = n, { value: s, done: !1 }) : { done: !0, value: null };
  } };
}, ob = function(t) {
  for (var A, e = ub(t), n = []; !(A = e.next()).done; )
    A.value && n.push(A.value.slice());
  return n;
}, ib = function(t) {
  if (t.createRange) {
    var A = t.createRange();
    if (A.getBoundingClientRect) {
      var e = t.createElement("boundtest"), A = (e.style.height = "123px", e.style.display = "block", t.body.appendChild(e), A.selectNode(e), A.getBoundingClientRect()), A = Math.round(A.height);
      if (t.body.removeChild(e), A === 123)
        return !0;
    }
  }
  return !1;
}, ab = function(t) {
  var A = t.createElement("boundtest"), e = (A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", t.body.appendChild(A), t.createRange()), n = (A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "", A.firstChild), s = Il(n.data).map(function(l) {
    return Ie(l);
  }), i = 0, d = {}, s = s.every(function(w, f) {
    e.setStart(n, i), e.setEnd(n, i + w.length);
    var h = e.getBoundingClientRect(), w = (i += w.length, h.x > d.x || h.y > d.y);
    return d = h, f === 0 || w;
  });
  return t.body.removeChild(A), s;
}, db = function() {
  return new Image().crossOrigin !== void 0;
}, sb = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, cb = function(e) {
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
}, Bb = function(t) {
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
  var t = ib(document);
  return Object.defineProperty(ut, "SUPPORT_RANGE_BOUNDS", { value: t }), t;
}, get SUPPORT_WORD_BREAKING() {
  var t = ut.SUPPORT_RANGE_BOUNDS && ab(document);
  return Object.defineProperty(ut, "SUPPORT_WORD_BREAKING", { value: t }), t;
}, get SUPPORT_SVG_DRAWING() {
  var t = cb(document);
  return Object.defineProperty(ut, "SUPPORT_SVG_DRAWING", { value: t }), t;
}, get SUPPORT_FOREIGNOBJECT_DRAWING() {
  var t = typeof Array.from == "function" && typeof window.fetch == "function" ? Bb(document) : Promise.resolve(!1);
  return Object.defineProperty(ut, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: t }), t;
}, get SUPPORT_CORS_IMAGES() {
  var t = db();
  return Object.defineProperty(ut, "SUPPORT_CORS_IMAGES", { value: t }), t;
}, get SUPPORT_RESPONSE_TYPE() {
  var t = sb();
  return Object.defineProperty(ut, "SUPPORT_RESPONSE_TYPE", { value: t }), t;
}, get SUPPORT_CORS_XHR() {
  var t = "withCredentials" in new XMLHttpRequest();
  return Object.defineProperty(ut, "SUPPORT_CORS_XHR", { value: t }), t;
}, get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
  var t = !(typeof Intl > "u" || !Intl.Segmenter);
  return Object.defineProperty(ut, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: t }), t;
} }, Hs = function(t, A) {
  this.text = t, this.bounds = A;
}, lb = function(t, i, e, n) {
  var i = wb(i, e), d = [], s = 0;
  return i.forEach(function(l) {
    var f, h, w;
    e.textDecorationLine.length || 0 < l.trim().length ? ut.SUPPORT_RANGE_BOUNDS ? 1 < (f = TQ(n, s, l.length).getClientRects()).length ? (w = U0(l), h = 0, w.forEach(function(p) {
      d.push(new Hs(p, Jr.fromDOMRectList(t, TQ(n, h + s, p.length).getClientRects()))), h += p.length;
    })) : d.push(new Hs(l, Jr.fromDOMRectList(t, f))) : (w = n.splitText(l.length), d.push(new Hs(l, fb(t, n))), n = w) : ut.SUPPORT_RANGE_BOUNDS || (n = n.splitText(l.length)), s += l.length;
  }), d;
}, fb = function(t, A) {
  var e = A.ownerDocument;
  if (e) {
    var e = e.createElement("html2canvaswrapper"), n = (e.appendChild(A.cloneNode(!0)), A.parentNode);
    if (n)
      return n.replaceChild(e, A), A = bl(t, e), e.firstChild && n.replaceChild(e.firstChild, e), A;
  }
  return Jr.EMPTY;
}, TQ = function(t, A, e) {
  var n = t.ownerDocument;
  if (n)
    return (n = n.createRange()).setStart(t, A), n.setEnd(t, A + e), n;
  throw new Error("Node has no owner document");
}, U0 = function(t) {
  var A;
  return ut.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (A = new Intl.Segmenter(void 0, { granularity: "grapheme" }), Array.from(A.segment(t)).map(function(e) {
    return e.segment;
  })) : ob(t);
}, gb = function(t, A) {
  var e;
  return ut.SUPPORT_NATIVE_TEXT_SEGMENTATION ? (e = new Intl.Segmenter(void 0, { granularity: "word" }), Array.from(e.segment(t)).map(function(n) {
    return n.segment;
  })) : hb(t, A);
}, wb = function(t, A) {
  return A.letterSpacing !== 0 ? U0(t) : gb(t, A);
}, Qb = [32, 160, 4961, 65792, 65793, 4153, 4241], hb = function(t, A) {
  for (var e, n = XD(t, { lineBreak: A.lineBreak, wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak }), i = []; !(e = n.next()).done; )
    (function() {
      var d, s;
      e.value && (d = e.value.slice(), d = Il(d), s = "", d.forEach(function(l) {
        Qb.indexOf(l) === -1 ? s += Ie(l) : (s.length && i.push(s), i.push(Ie(l)), s = "");
      }), s.length) && i.push(s);
    })();
  return i;
}, Cb = function(t, A, e) {
  this.text = Fb(A.data, e.textTransform), this.textBounds = lb(t, this.text, e, A);
}, Fb = function(t, A) {
  switch (A) {
    case 1:
      return t.toLowerCase();
    case 3:
      return t.replace(Ub, pb);
    case 2:
      return t.toUpperCase();
    default:
      return t;
  }
}, Ub = /(^|\s|:|-|\(|\))([a-z])/g, pb = function(t, A, e) {
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
}(Qr), mb = [{ type: 15, flags: 0, unit: "px", number: 3 }], Eb = [{ type: 16, flags: 0, number: 50 }], Db = function(t) {
  return t.width > t.height ? new Jr(t.left + (t.width - t.height) / 2, t.top, t.height, t.height) : t.width < t.height ? new Jr(t.left, t.top + (t.height - t.width) / 2, t.width, t.width) : t;
}, Hb = function(t) {
  var A = t.type === yb ? new Array(t.value.length + 1).join("•") : t.value;
  return A.length === 0 ? t.placeholder || "" : A;
}, wl = "checkbox", Ql = "radio", yb = "password", OQ = 707406591, p0 = function(t) {
  function A(e, n) {
    var i = t.call(this, e, n) || this;
    switch (i.type = n.type.toLowerCase(), i.checked = n.checked, i.value = Hb(n), i.type !== wl && i.type !== Ql || (i.styles.backgroundColor = 3739148031, i.styles.borderTopColor = i.styles.borderRightColor = i.styles.borderBottomColor = i.styles.borderLeftColor = 2779096575, i.styles.borderTopWidth = i.styles.borderRightWidth = i.styles.borderBottomWidth = i.styles.borderLeftWidth = 1, i.styles.borderTopStyle = i.styles.borderRightStyle = i.styles.borderBottomStyle = i.styles.borderLeftStyle = 1, i.styles.backgroundClip = [0], i.styles.backgroundOrigin = [0], i.bounds = Db(i.bounds)), i.type) {
      case wl:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = mb;
        break;
      case Ql:
        i.styles.borderTopRightRadius = i.styles.borderTopLeftRadius = i.styles.borderBottomRightRadius = i.styles.borderBottomLeftRadius = Eb;
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
      n.contentWindow && n.contentWindow.document && n.contentWindow.document.documentElement && (s.tree = XC(e, n.contentWindow.document.documentElement), i = n.contentWindow.document.documentElement ? Es(e, getComputedStyle(n.contentWindow.document.documentElement).backgroundColor) : Pr.TRANSPARENT, d = n.contentWindow.document.body ? Es(e, getComputedStyle(n.contentWindow.document.body).backgroundColor) : Pr.TRANSPARENT, s.backgroundColor = _u(i) ? _u(d) ? s.styles.backgroundColor : d : i);
    } catch {
    }
    return s;
  }
  return Zn(A, t), A;
}(Qr), bb = ["OL", "UL", "MENU"], nl = function(t, A, e, n) {
  for (var i = A.firstChild; i; i = s) {
    var d, s = i.nextSibling;
    WC(i) && 0 < i.data.trim().length ? e.textNodes.push(new Cb(t, i, e.styles)) : ma(i) && (qC(i) && i.assignedNodes ? i.assignedNodes().forEach(function(l) {
      return nl(t, l, e, n);
    }) : (d = JC(t, i)).styles.isVisible() && (Ib(i, d, n) ? d.flags |= 4 : vb(d.styles) && (d.flags |= 2), bb.indexOf(i.tagName) !== -1 && (d.flags |= 8), e.elements.push(d), i.slot, i.shadowRoot ? nl(t, i.shadowRoot, d, n) : hl(i) || YC(i) || Cl(i) || nl(t, i, d, n)));
  }
}, JC = function(t, A) {
  return new (d0(A) ? MC : ZC(A) ? kC : YC(A) ? GC : Kb(A) ? VC : Lb(A) ? i0 : xb(A) ? p0 : Cl(A) ? RC : hl(A) ? NC : jC(A) ? PC : Qr)(t, A);
}, XC = function(t, A) {
  var e = JC(t, A);
  return e.flags |= 4, nl(t, A, e, e), e;
}, Ib = function(t, A, e) {
  return A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || m0(t) && e.styles.isTransparent();
}, vb = function(t) {
  return t.isPositioned() || t.isFloating();
}, WC = function(t) {
  return t.nodeType === Node.TEXT_NODE;
}, ma = function(t) {
  return t.nodeType === Node.ELEMENT_NODE;
}, a0 = function(t) {
  return ma(t) && t.style !== void 0 && !rl(t);
}, rl = function(t) {
  return typeof t.className == "object";
}, Kb = function(t) {
  return t.tagName === "LI";
}, Lb = function(t) {
  return t.tagName === "OL";
}, xb = function(t) {
  return t.tagName === "INPUT";
}, _b = function(t) {
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
}, Sb = function(t) {
  return t.tagName === "SCRIPT";
}, hl = function(t) {
  return t.tagName === "TEXTAREA";
}, Cl = function(t) {
  return t.tagName === "SELECT";
}, qC = function(t) {
  return t.tagName === "SLOT";
}, GQ = function(t) {
  return 0 < t.tagName.indexOf("-");
}, Tb = function() {
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
      var f = e.counters[l.counter];
      f && l.increment !== 0 && (d = !1, f.length || f.push(1), f[Math.max(0, f.length - 1)] += l.increment);
    }), []);
    return d && i.forEach(function(l) {
      var f = e.counters[l.counter];
      s.push(l.counter), (f = f || (e.counters[l.counter] = [])).push(l.reset);
    }), s;
  }, t;
}(), VQ = { integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"] }, RQ = { integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"] }, Ob = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"] }, Mb = { integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"] }, la = function(t, A, e, n, i, d) {
  return t < A || e < t ? _s(t, i, 0 < d.length) : n.integers.reduce(function(s, l, f) {
    for (; l <= t; )
      t -= l, s += n.values[f];
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
}, Go = function(t, A, e) {
  e === void 0 && (e = ". ");
  var n = A.length;
  return zC(Math.abs(t), n, !1, function(i) {
    return A[Math.floor(i % n)];
  }) + e;
}, Fa = 1, hu = 2, Cu = 4, gs = 8, Rr = function(t, A, e, n, i, d) {
  if (t < -9999 || 9999 < t)
    return _s(t, 4, 0 < i.length);
  var s = Math.abs(t), l = i;
  if (s === 0)
    return A[0] + l;
  for (var f = 0; 0 < s && f <= 4; f++) {
    var h = s % 10;
    h == 0 && Je(d, Fa) && l !== "" ? l = A[h] + l : 1 < h || h == 1 && f === 0 || h == 1 && f === 1 && Je(d, hu) || h == 1 && f === 1 && Je(d, Cu) && 100 < t || h == 1 && 1 < f && Je(d, gs) ? l = A[h] + (0 < f ? e[f - 1] : "") + l : h == 1 && 0 < f && (l = e[f - 1] + l), s = Math.floor(s / 10);
  }
  return (t < 0 ? n : "") + l;
}, NQ = "十百千萬", PQ = "拾佰仟萬", JQ = "マイナス", mg = "마이너스", _s = function(t, A, e) {
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
      return Go(t, "〇一二三四五六七八九", i);
    case 6:
      return la(t, 1, 3999, VQ, 3, n).toLowerCase();
    case 7:
      return la(t, 1, 3999, VQ, 3, n);
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
      return la(t, 1, 9999, RQ, 3, n);
    case 35:
      return la(t, 1, 9999, RQ, 3, n).toLowerCase();
    case 13:
      return ye(t, 2534, 2543, !0, n);
    case 14:
    case 30:
      return ye(t, 6112, 6121, !0, n);
    case 15:
      return Go(t, "子丑寅卯辰巳午未申酉戌亥", i);
    case 16:
      return Go(t, "甲乙丙丁戊己庚辛壬癸", i);
    case 17:
    case 48:
      return Rr(t, "零一二三四五六七八九", NQ, "負", i, hu | Cu | gs);
    case 47:
      return Rr(t, "零壹貳參肆伍陸柒捌玖", PQ, "負", i, Fa | hu | Cu | gs);
    case 42:
      return Rr(t, "零一二三四五六七八九", NQ, "负", i, hu | Cu | gs);
    case 41:
      return Rr(t, "零壹贰叁肆伍陆柒捌玖", PQ, "负", i, Fa | hu | Cu | gs);
    case 26:
      return Rr(t, "〇一二三四五六七八九", "十百千万", JQ, i, 0);
    case 25:
      return Rr(t, "零壱弐参四伍六七八九", "拾百千万", JQ, i, Fa | hu | Cu);
    case 31:
      return Rr(t, "영일이삼사오육칠팔구", "십백천만", mg, d, Fa | hu | Cu);
    case 33:
      return Rr(t, "零一二三四五六七八九", "十百千萬", mg, d, 0);
    case 32:
      return Rr(t, "零壹貳參四五六七八九", "拾百千", mg, d, Fa | hu | Cu);
    case 18:
      return ye(t, 2406, 2415, !0, n);
    case 20:
      return la(t, 1, 19999, Mb, 3, n);
    case 21:
      return ye(t, 2790, 2799, !0, n);
    case 22:
      return ye(t, 2662, 2671, !0, n);
    case 22:
      return la(t, 1, 10999, Ob, 3, n);
    case 23:
      return Go(t, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return Go(t, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return ye(t, 3302, 3311, !0, n);
    case 28:
      return Go(t, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", i);
    case 29:
      return Go(t, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", i);
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
    if (this.context = A, this.options = n, this.scrolledElements = [], this.referenceElement = e, this.counters = new Tb(), this.quoteDepth = 0, !e.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    this.documentElement = this.cloneNode(e.ownerDocument.documentElement, !1);
  }
  return t.prototype.toIFrame = function(A, e) {
    var n, i, d, s, l = this, f = kb(A, e);
    return f.contentWindow ? (n = A.defaultView.pageXOffset, A = A.defaultView.pageYOffset, i = f.contentWindow, d = i.document, s = Rb(f).then(function() {
      return yt(l, void 0, void 0, function() {
        var h, w;
        return Qt(this, function(p) {
          switch (p.label) {
            case 0:
              return this.scrolledElements.forEach(Xb), i && (i.scrollTo(e.left, e.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || i.scrollY === e.top && i.scrollX === e.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(i.scrollX - e.left, i.scrollY - e.top, 0, 0))), h = this.options.onclone, (w = this.clonedReferenceElement) === void 0 ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : d.fonts && d.fonts.ready ? [4, d.fonts.ready] : [3, 2];
            case 1:
              p.sent(), p.label = 2;
            case 2:
              return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, Vb(d)] : [3, 4];
            case 3:
              p.sent(), p.label = 4;
            case 4:
              return typeof h == "function" ? [2, Promise.resolve().then(function() {
                return h(d, w);
              }).then(function() {
                return f;
              })] : [2, f];
          }
        });
      });
    }), d.open(), d.write(Pb(document.doctype) + "<html></html>"), Jb(this.referenceElement.ownerDocument, n, A), d.replaceChild(d.adoptNode(this.documentElement), d.documentElement), d.close(), s) : Promise.reject("Unable to find iframe window");
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
    ma(e) && (Sb(e) || e.hasAttribute($C) || typeof this.options.ignoreElements == "function" && this.options.ignoreElements(e)) || this.options.copyStyles && ma(e) && kQ(e) || A.appendChild(this.cloneNode(e, n));
  }, t.prototype.cloneChildNodes = function(A, e, n) {
    for (var i, d = this, s = (A.shadowRoot || A).firstChild; s; s = s.nextSibling)
      ma(s) && qC(s) && typeof s.assignedNodes == "function" ? (i = s.assignedNodes()).length && i.forEach(function(l) {
        return d.appendChildNode(e, l, n);
      }) : this.appendChildNode(e, s, n);
  }, t.prototype.cloneNode = function(A, e) {
    var n, i, d, s, l;
    return WC(A) ? document.createTextNode(A.data) : A.ownerDocument && (d = A.ownerDocument.defaultView) && ma(A) && (a0(A) || rl(A)) ? ((n = this.createElementClone(A)).style.transitionProperty = "none", i = d.getComputedStyle(A), l = d.getComputedStyle(A, ":before"), d = d.getComputedStyle(A, ":after"), this.referenceElement === A && a0(n) && (this.clonedReferenceElement = n), m0(n) && Zb(n), s = this.counters.parse(new UQ(this.context, i)), l = this.resolvePseudoContent(A, n, l, Ds.BEFORE), GQ(A) && (e = !0), MQ(A) || this.cloneChildNodes(A, n, e), l && n.insertBefore(l, n.firstChild), (l = this.resolvePseudoContent(A, n, d, Ds.AFTER)) && n.appendChild(l), this.counters.pop(s), (i && (this.options.copyStyles || rl(A)) && !jC(A) || e) && Eg(i, n), A.scrollTop === 0 && A.scrollLeft === 0 || this.scrolledElements.push([n, A.scrollLeft, A.scrollTop]), (hl(A) || Cl(A)) && (hl(n) || Cl(n)) && (n.value = A.value), n) : A.cloneNode(!1);
  }, t.prototype.resolvePseudoContent = function(A, e, n, i) {
    var d = this;
    if (n) {
      var s, l, f = n.content, h = e.ownerDocument;
      if (h && f && f !== "none" && f !== "-moz-alt-content" && n.display !== "none")
        return this.counters.parse(new UQ(this.context, n)), s = new L2(this.context, n), l = h.createElement("html2canvaspseudoelement"), Eg(n, l), s.content.forEach(function(w) {
          if (w.type === 0)
            l.appendChild(h.createTextNode(w.value));
          else if (w.type === 22) {
            var p = h.createElement("img");
            p.src = w.value, p.style.opacity = "1", l.appendChild(p);
          } else if (w.type === 18) {
            var K, _, S, v;
            w.name === "attr" ? (p = w.values.filter(ne)).length && l.appendChild(h.createTextNode(A.getAttribute(p[0].value) || "")) : w.name === "counter" ? (S = (p = w.values.filter(ba))[0], v = p[1], S && ne(S) && (p = d.counters.getCounterValue(S.value), K = v && ne(v) ? r0.parse(d.context, v.value) : 3, l.appendChild(h.createTextNode(_s(p, K, !1))))) : w.name === "counters" && (S = (p = w.values.filter(ba))[0], K = p[1], v = p[2], S) && ne(S) && (p = d.counters.getCounterValues(S.value), _ = v && ne(v) ? r0.parse(d.context, v.value) : 3, S = K && K.type === 0 ? K.value : "", v = p.map(function(M) {
              return _s(M, _, !1);
            }).join(S), l.appendChild(h.createTextNode(v)));
          } else if (w.type === 20)
            switch (w.value) {
              case "open-quote":
                l.appendChild(h.createTextNode(FQ(s.quotes, d.quoteDepth++, !0)));
                break;
              case "close-quote":
                l.appendChild(h.createTextNode(FQ(s.quotes, --d.quoteDepth, !1)));
                break;
              default:
                l.appendChild(h.createTextNode(w.value));
            }
        }), l.className = s0 + " " + c0, f = i === Ds.BEFORE ? " " + s0 : " " + c0, rl(e) ? e.className.baseValue += f : e.className += f, l;
    }
  }, t.destroy = function(A) {
    return !!A.parentNode && (A.parentNode.removeChild(A), !0);
  }, t;
}(), kb = (function(t) {
  t[t.BEFORE = 0] = "BEFORE", t[t.AFTER = 1] = "AFTER";
}(Ds = Ds || {}), function(t, A) {
  var e = t.createElement("iframe");
  return e.className = "html2canvas-container", e.style.visibility = "hidden", e.style.position = "fixed", e.style.left = "-10000px", e.style.top = "0px", e.style.border = "0", e.width = A.width.toString(), e.height = A.height.toString(), e.scrolling = "no", e.setAttribute($C, "true"), t.body.appendChild(e), e;
}), Gb = function(t) {
  return new Promise(function(A) {
    !t.complete && t.src ? (t.onload = A, t.onerror = A) : A();
  });
}, Vb = function(t) {
  return Promise.all([].slice.call(t.images, 0).map(Gb));
}, Rb = function(t) {
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
}, Nb = ["all", "d", "content"], Eg = function(t, A) {
  for (var e = t.length - 1; 0 <= e; e--) {
    var n = t.item(e);
    Nb.indexOf(n) === -1 && A.style.setProperty(n, t.getPropertyValue(n));
  }
  return A;
}, Pb = function(t) {
  var A = "";
  return t && (A += "<!DOCTYPE ", t.name && (A += t.name), t.internalSubset && (A += t.internalSubset), t.publicId && (A += '"' + t.publicId + '"'), t.systemId && (A += '"' + t.systemId + '"'), A += ">"), A;
}, Jb = function(t, A, e) {
  t && t.defaultView && (A !== t.defaultView.pageXOffset || e !== t.defaultView.pageYOffset) && t.defaultView.scrollTo(A, e);
}, Xb = function(n) {
  var A = n[0], e = n[1], n = n[2];
  A.scrollLeft = e, A.scrollTop = n;
}, Wb = ":before", Yb = ":after", s0 = "___html2canvas___pseudoelement_before", c0 = "___html2canvas___pseudoelement_after", WQ = `{
    content: "" !important;
    display: none !important;
}`, Zb = function(t) {
  jb(t, "." + s0 + Wb + WQ + `
         .` + c0 + Yb + WQ);
}, jb = function(t, A) {
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
}(), qb = function() {
  function t(A, e) {
    this.context = A, this._options = e, this._cache = {};
  }
  return t.prototype.addImage = function(A) {
    var e = Promise.resolve();
    return this.has(A) || (Hg(A) || eI(A)) && (this._cache[A] = this.loadImage(A)).catch(function() {
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
            return this.context.logger.debug("Added image " + A.substring(0, 256)), [4, new Promise(function(f, h) {
              var w = new Image();
              w.onload = function() {
                return f(w);
              }, w.onerror = h, (tI(d) || n) && (w.crossOrigin = "anonymous"), w.src = d, w.complete === !0 && setTimeout(function() {
                return f(w);
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
        var l, f = ut.SUPPORT_RESPONSE_TYPE ? "blob" : "text", h = new XMLHttpRequest(), w = (h.onload = function() {
          var p;
          h.status === 200 ? f == "text" ? d(h.response) : ((p = new FileReader()).addEventListener("load", function() {
            return d(p.result);
          }, !1), p.addEventListener("error", function(K) {
            return s(K);
          }, !1), p.readAsDataURL(h.response)) : s("Failed to proxy resource " + e + " with status code " + h.status);
        }, h.onerror = s, -1 < i.indexOf("?") ? "&" : "?");
        h.open("GET", i + w + "url=" + encodeURIComponent(A) + "&responseType=" + f), f != "text" && h instanceof XMLHttpRequest && (h.responseType = f), n._options.imageTimeout && (l = n._options.imageTimeout, h.timeout = l, h.ontimeout = function() {
          return s("Timed out (" + l + "ms) proxying " + e);
        }), h.send();
      });
    throw new Error("No proxy defined");
  }, t;
}(), zb = /^data:image\/svg\+xml/i, $b = /^data:image\/.*;base64,/i, AI = /^data:image\/.*/i, eI = function(t) {
  return ut.SUPPORT_SVG_DRAWING || !nI(t);
}, Dg = function(t) {
  return AI.test(t);
}, tI = function(t) {
  return $b.test(t);
}, Hg = function(t) {
  return t.substr(0, 4) === "blob";
}, nI = function(t) {
  return t.substr(-3).toLowerCase() === "svg" || zb.test(t);
}, nA = function() {
  function t(A, e) {
    this.type = 0, this.x = A, this.y = e;
  }
  return t.prototype.add = function(A, e) {
    return new t(this.x + A, this.y + e);
  }, t;
}(), fa = function(t, A, e) {
  return new nA(t.x + (A.x - t.x) * e, t.y + (A.y - t.y) * e);
}, PB = function() {
  function t(A, e, n, i) {
    this.type = 1, this.start = A, this.startControl = e, this.endControl = n, this.end = i;
  }
  return t.prototype.subdivide = function(l, e) {
    var n = fa(this.start, this.startControl, l), s = fa(this.startControl, this.endControl, l), i = fa(this.endControl, this.end, l), d = fa(n, s, l), s = fa(s, i, l), l = fa(d, s, l);
    return e ? new t(this.start, n, d, l) : new t(l, s, i, this.end);
  }, t.prototype.add = function(A, e) {
    return new t(this.start.add(A, e), this.startControl.add(A, e), this.endControl.add(A, e), this.end.add(A, e));
  }, t.prototype.reverse = function() {
    return new t(this.end, this.endControl, this.startControl, this.start);
  }, t;
}(), yn = function(t) {
  return t.type === 1;
}, rI = function(t) {
  var J = t.styles, A = t.bounds, e = (n = ls(J.borderTopLeftRadius, A.width, A.height))[0], n = n[1], i = (d = ls(J.borderTopRightRadius, A.width, A.height))[0], d = d[1], s = (l = ls(J.borderBottomRightRadius, A.width, A.height))[0], l = l[1], f = (h = ls(J.borderBottomLeftRadius, A.width, A.height))[0], h = h[1];
  (w = []).push((e + i) / A.width), w.push((f + s) / A.width), w.push((n + h) / A.height), w.push((d + l) / A.height), 1 < (w = Math.max.apply(Math, w)) && (e /= w, n /= w, i /= w, d /= w, s /= w, l /= w, f /= w, h /= w);
  var w = A.width - i, p = A.height - l, K = A.width - s, _ = A.height - h, S = J.borderTopWidth, v = J.borderRightWidth, M = J.borderBottomWidth, k = J.borderLeftWidth, X = de(J.paddingTop, t.bounds.width), iA = de(J.paddingRight, t.bounds.width), z = de(J.paddingBottom, t.bounds.width), J = de(J.paddingLeft, t.bounds.width);
  this.topLeftBorderDoubleOuterBox = 0 < e || 0 < n ? fe(A.left + k / 3, A.top + S / 3, e - k / 3, n - S / 3, qA.TOP_LEFT) : new nA(A.left + k / 3, A.top + S / 3), this.topRightBorderDoubleOuterBox = 0 < e || 0 < n ? fe(A.left + w, A.top + S / 3, i - v / 3, d - S / 3, qA.TOP_RIGHT) : new nA(A.left + A.width - v / 3, A.top + S / 3), this.bottomRightBorderDoubleOuterBox = 0 < s || 0 < l ? fe(A.left + K, A.top + p, s - v / 3, l - M / 3, qA.BOTTOM_RIGHT) : new nA(A.left + A.width - v / 3, A.top + A.height - M / 3), this.bottomLeftBorderDoubleOuterBox = 0 < f || 0 < h ? fe(A.left + k / 3, A.top + _, f - k / 3, h - M / 3, qA.BOTTOM_LEFT) : new nA(A.left + k / 3, A.top + A.height - M / 3), this.topLeftBorderDoubleInnerBox = 0 < e || 0 < n ? fe(A.left + 2 * k / 3, A.top + 2 * S / 3, e - 2 * k / 3, n - 2 * S / 3, qA.TOP_LEFT) : new nA(A.left + 2 * k / 3, A.top + 2 * S / 3), this.topRightBorderDoubleInnerBox = 0 < e || 0 < n ? fe(A.left + w, A.top + 2 * S / 3, i - 2 * v / 3, d - 2 * S / 3, qA.TOP_RIGHT) : new nA(A.left + A.width - 2 * v / 3, A.top + 2 * S / 3), this.bottomRightBorderDoubleInnerBox = 0 < s || 0 < l ? fe(A.left + K, A.top + p, s - 2 * v / 3, l - 2 * M / 3, qA.BOTTOM_RIGHT) : new nA(A.left + A.width - 2 * v / 3, A.top + A.height - 2 * M / 3), this.bottomLeftBorderDoubleInnerBox = 0 < f || 0 < h ? fe(A.left + 2 * k / 3, A.top + _, f - 2 * k / 3, h - 2 * M / 3, qA.BOTTOM_LEFT) : new nA(A.left + 2 * k / 3, A.top + A.height - 2 * M / 3), this.topLeftBorderStroke = 0 < e || 0 < n ? fe(A.left + k / 2, A.top + S / 2, e - k / 2, n - S / 2, qA.TOP_LEFT) : new nA(A.left + k / 2, A.top + S / 2), this.topRightBorderStroke = 0 < e || 0 < n ? fe(A.left + w, A.top + S / 2, i - v / 2, d - S / 2, qA.TOP_RIGHT) : new nA(A.left + A.width - v / 2, A.top + S / 2), this.bottomRightBorderStroke = 0 < s || 0 < l ? fe(A.left + K, A.top + p, s - v / 2, l - M / 2, qA.BOTTOM_RIGHT) : new nA(A.left + A.width - v / 2, A.top + A.height - M / 2), this.bottomLeftBorderStroke = 0 < f || 0 < h ? fe(A.left + k / 2, A.top + _, f - k / 2, h - M / 2, qA.BOTTOM_LEFT) : new nA(A.left + k / 2, A.top + A.height - M / 2), this.topLeftBorderBox = 0 < e || 0 < n ? fe(A.left, A.top, e, n, qA.TOP_LEFT) : new nA(A.left, A.top), this.topRightBorderBox = 0 < i || 0 < d ? fe(A.left + w, A.top, i, d, qA.TOP_RIGHT) : new nA(A.left + A.width, A.top), this.bottomRightBorderBox = 0 < s || 0 < l ? fe(A.left + K, A.top + p, s, l, qA.BOTTOM_RIGHT) : new nA(A.left + A.width, A.top + A.height), this.bottomLeftBorderBox = 0 < f || 0 < h ? fe(A.left, A.top + _, f, h, qA.BOTTOM_LEFT) : new nA(A.left, A.top + A.height), this.topLeftPaddingBox = 0 < e || 0 < n ? fe(A.left + k, A.top + S, Math.max(0, e - k), Math.max(0, n - S), qA.TOP_LEFT) : new nA(A.left + k, A.top + S), this.topRightPaddingBox = 0 < i || 0 < d ? fe(A.left + Math.min(w, A.width - v), A.top + S, w > A.width + v ? 0 : Math.max(0, i - v), Math.max(0, d - S), qA.TOP_RIGHT) : new nA(A.left + A.width - v, A.top + S), this.bottomRightPaddingBox = 0 < s || 0 < l ? fe(A.left + Math.min(K, A.width - k), A.top + Math.min(p, A.height - M), Math.max(0, s - v), Math.max(0, l - M), qA.BOTTOM_RIGHT) : new nA(A.left + A.width - v, A.top + A.height - M), this.bottomLeftPaddingBox = 0 < f || 0 < h ? fe(A.left + k, A.top + Math.min(_, A.height - M), Math.max(0, f - k), Math.max(0, h - M), qA.BOTTOM_LEFT) : new nA(A.left + k, A.top + A.height - M), this.topLeftContentBox = 0 < e || 0 < n ? fe(A.left + k + J, A.top + S + X, Math.max(0, e - (k + J)), Math.max(0, n - (S + X)), qA.TOP_LEFT) : new nA(A.left + k + J, A.top + S + X), this.topRightContentBox = 0 < i || 0 < d ? fe(A.left + Math.min(w, A.width + k + J), A.top + S + X, w > A.width + k + J ? 0 : i - k + J, d - (S + X), qA.TOP_RIGHT) : new nA(A.left + A.width - (v + iA), A.top + S + X), this.bottomRightContentBox = 0 < s || 0 < l ? fe(A.left + Math.min(K, A.width - (k + J)), A.top + Math.min(p, A.height + S + X), Math.max(0, s - (v + iA)), l - (M + z), qA.BOTTOM_RIGHT) : new nA(A.left + A.width - (v + iA), A.top + A.height - (M + z)), this.bottomLeftContentBox = 0 < f || 0 < h ? fe(A.left + k + J, A.top + _, Math.max(0, f - (k + J)), h - (M + z), qA.BOTTOM_LEFT) : new nA(A.left + k + J, A.top + A.height - (M + z));
}, fe = (function(t) {
  t[t.TOP_LEFT = 0] = "TOP_LEFT", t[t.TOP_RIGHT = 1] = "TOP_RIGHT", t[t.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", t[t.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
}(qA = qA || {}), function(t, A, e, n, i) {
  var d = (Math.sqrt(2) - 1) / 3 * 4, s = e * d, l = n * d, f = t + e, h = A + n;
  switch (i) {
    case qA.TOP_LEFT:
      return new PB(new nA(t, h), new nA(t, h - l), new nA(f - s, A), new nA(f, A));
    case qA.TOP_RIGHT:
      return new PB(new nA(t, A), new nA(t + s, A), new nA(f, h - l), new nA(f, h));
    case qA.BOTTOM_RIGHT:
      return new PB(new nA(f, A), new nA(f, A + l), new nA(t + s, h), new nA(t, h));
    default:
      return qA.BOTTOM_LEFT, new PB(new nA(f, h), new nA(f - s, h), new nA(t, A + l), new nA(t, A));
  }
}), Fl = function(t) {
  return [t.topLeftBorderBox, t.topRightBorderBox, t.bottomRightBorderBox, t.bottomLeftBorderBox];
}, uI = function(t) {
  return [t.topLeftContentBox, t.topRightContentBox, t.bottomRightContentBox, t.bottomLeftContentBox];
}, Ul = function(t) {
  return [t.topLeftPaddingBox, t.topRightPaddingBox, t.bottomRightPaddingBox, t.bottomLeftPaddingBox];
}, oI = function(t, A, e) {
  this.offsetX = t, this.offsetY = A, this.matrix = e, this.type = 0, this.target = 6;
}, JB = function(t, A) {
  this.path = t, this.target = A, this.type = 1;
}, iI = function(t) {
  this.opacity = t, this.type = 2, this.target = 6;
}, aI = function(t) {
  return t.type === 0;
}, eF = function(t) {
  return t.type === 1;
}, dI = function(t) {
  return t.type === 2;
}, YQ = function(t, A) {
  return t.length === A.length && t.some(function(e, n) {
    return e === A[n];
  });
}, sI = function(t, A, e, n, i) {
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
    this.container = A, this.parent = e, this.effects = [], this.curves = new rI(this.container), this.container.styles.opacity < 1 && this.effects.push(new iI(this.container.styles.opacity)), this.container.styles.transform !== null && (A = this.container.bounds.left + this.container.styles.transformOrigin[0].number, e = this.container.bounds.top + this.container.styles.transformOrigin[1].number, n = this.container.styles.transform, this.effects.push(new oI(A, e, n))), this.container.styles.overflowX !== 0 && (A = Fl(this.curves), e = Ul(this.curves), YQ(A, e) ? this.effects.push(new JB(A, 6)) : (this.effects.push(new JB(A, 2)), this.effects.push(new JB(e, 4))));
  }
  return t.prototype.getEffects = function(A) {
    for (var e = [2, 3].indexOf(this.container.styles.position) === -1, n = this.parent, i = this.effects.slice(0); n; ) {
      var d, s, l = n.effects.filter(function(f) {
        return !eF(f);
      });
      e || n.container.styles.position !== 0 || !n.parent ? (i.unshift.apply(i, l), e = [2, 3].indexOf(n.container.styles.position) === -1, n.container.styles.overflowX !== 0 && (d = Fl(n.curves), s = Ul(n.curves), YQ(d, s) || i.unshift(new JB(s, 6)))) : i.unshift.apply(i, l), n = n.parent;
    }
    return i.filter(function(f) {
      return Je(f.target, A);
    });
  }, t;
}(), B0 = function(t, A, e, n) {
  t.container.elements.forEach(function(i) {
    var d, s, l, f, h = Je(i.flags, 4), w = Je(i.flags, 2), p = new nF(i, t), K = (Je(i.styles.display, 2048) && n.push(p), Je(i.flags, 8) ? [] : n);
    h || w ? (w = h || i.styles.isPositioned() ? e : A, d = new tF(p), i.styles.isPositioned() || i.styles.opacity < 1 || i.styles.isTransformed() ? (s = i.styles.zIndex.order) < 0 ? (l = 0, w.negativeZIndex.some(function(_, S) {
      return s > _.element.container.styles.zIndex.order ? (l = S, !1) : 0 < l;
    }), w.negativeZIndex.splice(l, 0, d)) : 0 < s ? (f = 0, w.positiveZIndex.some(function(_, S) {
      return s >= _.element.container.styles.zIndex.order ? (f = S + 1, !1) : 0 < f;
    }), w.positiveZIndex.splice(f, 0, d)) : w.zeroOrAutoZIndexOrTransformedOrOpacity.push(d) : (i.styles.isFloating() ? w.nonPositionedFloats : w.nonPositionedInlineLevel).push(d), B0(p, d, h ? d : e, K)) : ((i.styles.isInlineLevel() ? A.inlineLevel : A.nonInlineLevel).push(p), B0(p, A, e, K)), Je(i.flags, 8) && rF(i, K);
  });
}, rF = function(t, A) {
  for (var e = t instanceof i0 ? t.start : 1, n = t instanceof i0 && t.reversed, i = 0; i < A.length; i++) {
    var d = A[i];
    d.container instanceof VC && typeof d.container.value == "number" && d.container.value !== 0 && (e = d.container.value), d.listValue = _s(e, d.container.styles.listStyleType, !0), e += n ? -1 : 1;
  }
}, cI = function(A) {
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
}, BI = function(t, A) {
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
}, lI = function(t, A) {
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
}, fI = function(t, A) {
  switch (A) {
    case 0:
      return XB(t.topLeftBorderStroke, t.topRightBorderStroke);
    case 1:
      return XB(t.topRightBorderStroke, t.bottomRightBorderStroke);
    case 2:
      return XB(t.bottomRightBorderStroke, t.bottomLeftBorderStroke);
    default:
      return XB(t.bottomLeftBorderStroke, t.topLeftBorderStroke);
  }
}, XB = function(t, A) {
  var e = [];
  return yn(t) ? e.push(t.subdivide(0.5, !1)) : e.push(t), yn(A) ? e.push(A.subdivide(0.5, !0)) : e.push(A), e;
}, Kn = function(t, A, e, n) {
  var i = [];
  return yn(t) ? i.push(t.subdivide(0.5, !1)) : i.push(t), yn(e) ? i.push(e.subdivide(0.5, !0)) : i.push(e), yn(n) ? i.push(n.subdivide(0.5, !0).reverse()) : i.push(n), yn(A) ? i.push(A.subdivide(0.5, !1).reverse()) : i.push(A), i;
}, uF = function(e) {
  var A = e.bounds, e = e.styles;
  return A.add(e.borderLeftWidth, e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth), -(e.borderTopWidth + e.borderBottomWidth));
}, pl = function(e) {
  var A = e.styles, e = e.bounds, n = de(A.paddingLeft, e.width), i = de(A.paddingRight, e.width), d = de(A.paddingTop, e.width), s = de(A.paddingBottom, e.width);
  return e.add(n + A.borderLeftWidth, d + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + n + i), -(A.borderTopWidth + A.borderBottomWidth + d + s));
}, gI = function(t, A) {
  return t === 0 ? A.bounds : (t === 2 ? pl : uF)(A);
}, wI = function(t, A) {
  return t === 0 ? A.bounds : (t === 2 ? pl : uF)(A);
}, yg = function(t, A, d) {
  var n = gI(Ua(t.styles.backgroundOrigin, A), t), i = wI(Ua(t.styles.backgroundClip, A), t), d = QI(Ua(t.styles.backgroundSize, A), d, n), s = d[0], l = d[1], f = ls(Ua(t.styles.backgroundPosition, A), n.width - s, n.height - l);
  return [hI(Ua(t.styles.backgroundRepeat, A), f, d, n, i), Math.round(n.left + f[0]), Math.round(n.top + f[1]), s, l];
}, ga = function(t) {
  return ne(t) && t.value === ya.AUTO;
}, WB = function(t) {
  return typeof t == "number";
}, QI = function(l, d, e) {
  var n = d[0], i = d[1], d = d[2], s = l[0], l = l[1];
  if (!s)
    return [0, 0];
  if (Ge(s) && l && Ge(l))
    return [de(s, e.width), de(l, e.height)];
  var f = WB(d);
  if (ne(s) && (s.value === ya.CONTAIN || s.value === ya.COVER))
    return WB(d) ? e.width / e.height < d != (s.value === ya.COVER) ? [e.width, e.width / d] : [e.height * d, e.height] : [e.width, e.height];
  var h = WB(n), w = WB(i), p = h || w;
  if (ga(s) && (!l || ga(l)))
    return h && w ? [n, i] : f || p ? p && f ? [h ? n : i * d, w ? i : n / d] : [h ? n : e.width, w ? i : e.height] : [e.width, e.height];
  if (f)
    return f = p = 0, Ge(s) ? p = de(s, e.width) : Ge(l) && (f = de(l, e.height)), ga(s) ? p = f * d : l && !ga(l) || (f = p / d), [p, f];
  if (d = null, p = null, Ge(s) ? d = de(s, e.width) : l && Ge(l) && (p = de(l, e.height)), (d = (p = d === null || l && !ga(l) ? p : h && w ? d / n * i : e.height) !== null && ga(s) ? h && w ? p / i * n : e.width : d) !== null && p !== null)
    return [d, p];
  throw new Error("Unable to calculate background-size for element");
}, Ua = function(t, A) {
  return A = t[A], A === void 0 ? t[0] : A;
}, hI = function(t, A, e, n, i) {
  var d = A[0], s = A[1], l = e[0], f = e[1];
  switch (t) {
    case 2:
      return [new nA(Math.round(n.left), Math.round(n.top + s)), new nA(Math.round(n.left + n.width), Math.round(n.top + s)), new nA(Math.round(n.left + n.width), Math.round(f + n.top + s)), new nA(Math.round(n.left), Math.round(f + n.top + s))];
    case 3:
      return [new nA(Math.round(n.left + d), Math.round(n.top)), new nA(Math.round(n.left + d + l), Math.round(n.top)), new nA(Math.round(n.left + d + l), Math.round(n.height + n.top)), new nA(Math.round(n.left + d), Math.round(n.height + n.top))];
    case 1:
      return [new nA(Math.round(n.left + d), Math.round(n.top + s)), new nA(Math.round(n.left + d + l), Math.round(n.top + s)), new nA(Math.round(n.left + d + l), Math.round(n.top + s + f)), new nA(Math.round(n.left + d), Math.round(n.top + s + f))];
    default:
      return [new nA(Math.round(i.left), Math.round(i.top)), new nA(Math.round(i.left + i.width), Math.round(i.top)), new nA(Math.round(i.left + i.width), Math.round(i.height + i.top)), new nA(Math.round(i.left), Math.round(i.height + i.top))];
  }
}, CI = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", jQ = "Hidden Text", FI = function() {
  function t(A) {
    this._data = {}, this._document = A;
  }
  return t.prototype.parseMetrics = function(l, f) {
    var n = this._document.createElement("div"), i = this._document.createElement("img"), d = this._document.createElement("span"), s = this._document.body, l = (n.style.visibility = "hidden", n.style.fontFamily = l, n.style.fontSize = f, n.style.margin = "0", n.style.padding = "0", n.style.whiteSpace = "nowrap", s.appendChild(n), i.src = CI, i.width = 1, i.height = 1, i.style.margin = "0", i.style.padding = "0", i.style.verticalAlign = "baseline", d.style.fontFamily = l, d.style.fontSize = f, d.style.margin = "0", d.style.padding = "0", d.appendChild(this._document.createTextNode(jQ)), n.appendChild(d), n.appendChild(i), i.offsetTop - d.offsetTop + 2), f = (n.removeChild(d), n.appendChild(this._document.createTextNode(jQ)), n.style.lineHeight = "normal", i.style.verticalAlign = "super", i.offsetTop - n.offsetTop + 2);
    return s.removeChild(n), { baseline: l, middle: f };
  }, t.prototype.getMetrics = function(A, e) {
    var n = A + " " + e;
    return this._data[n] === void 0 && (this._data[n] = this.parseMetrics(A, e)), this._data[n];
  }, t;
}(), oF = function(t, A) {
  this.context = t, this.options = A;
}, UI = 1e4, pI = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e._activeEffects = [], e.canvas = n.canvas || document.createElement("canvas"), e.ctx = e.canvas.getContext("2d"), n.canvas || (e.canvas.width = Math.floor(n.width * n.scale), e.canvas.height = Math.floor(n.height * n.scale), e.canvas.style.width = n.width + "px", e.canvas.style.height = n.height + "px"), e.fontMetrics = new FI(document), e.ctx.scale(e.options.scale, e.options.scale), e.ctx.translate(-n.x, -n.y), e.ctx.textBaseline = "bottom", e._activeEffects = [], e.context.logger.debug("Canvas renderer initialized (" + n.width + "x" + n.height + ") with scale " + n.scale), e;
  }
  return Zn(A, t), A.prototype.applyEffects = function(e) {
    for (var n = this; this._activeEffects.length; )
      this.popEffect();
    e.forEach(function(i) {
      return n.applyEffect(i);
    });
  }, A.prototype.applyEffect = function(e) {
    this.ctx.save(), dI(e) && (this.ctx.globalAlpha = e.opacity), aI(e) && (this.ctx.translate(e.offsetX, e.offsetY), this.ctx.transform(e.matrix[0], e.matrix[1], e.matrix[2], e.matrix[3], e.matrix[4], e.matrix[5]), this.ctx.translate(-e.offsetX, -e.offsetY)), eF(e) && (this.path(e.path), this.ctx.clip()), this._activeEffects.push(e);
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
    }).join(""), i = yI(e.fontFamily).join(", "), d = ms(e.fontSize) ? "" + e.fontSize.number + e.fontSize.unit : e.fontSize.number + "px";
    return [[e.fontStyle, n, e.fontWeight, d, i].join(" "), i, d];
  }, A.prototype.renderTextNode = function(e, n) {
    return yt(this, void 0, void 0, function() {
      var i, d, s, l, f, h, w = this;
      return Qt(this, function(p) {
        return d = this.createFontStyle(n), s = d[0], i = d[1], d = d[2], this.ctx.font = s, this.ctx.direction = n.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(i, d), l = s.baseline, f = s.middle, h = n.paintOrder, e.textBounds.forEach(function(K) {
          h.forEach(function(_) {
            switch (_) {
              case 0:
                w.ctx.fillStyle = je(n.color), w.renderTextWithLetterSpacing(K, n.letterSpacing, l);
                var S = n.textShadow;
                S.length && K.text.trim().length && (S.slice(0).reverse().forEach(function(v) {
                  w.ctx.shadowColor = je(v.color), w.ctx.shadowOffsetX = v.offsetX.number * w.options.scale, w.ctx.shadowOffsetY = v.offsetY.number * w.options.scale, w.ctx.shadowBlur = v.blur.number, w.renderTextWithLetterSpacing(K, n.letterSpacing, l);
                }), w.ctx.shadowColor = "", w.ctx.shadowOffsetX = 0, w.ctx.shadowOffsetY = 0, w.ctx.shadowBlur = 0), n.textDecorationLine.length && (w.ctx.fillStyle = je(n.textDecorationColor || n.color), n.textDecorationLine.forEach(function(v) {
                  switch (v) {
                    case 1:
                      w.ctx.fillRect(K.bounds.left, Math.round(K.bounds.top + l), K.bounds.width, 1);
                      break;
                    case 2:
                      w.ctx.fillRect(K.bounds.left, Math.round(K.bounds.top), K.bounds.width, 1);
                      break;
                    case 3:
                      w.ctx.fillRect(K.bounds.left, Math.ceil(K.bounds.top + f), K.bounds.width, 1);
                  }
                }));
                break;
              case 1:
                n.webkitTextStrokeWidth && K.text.trim().length && (w.ctx.strokeStyle = je(n.webkitTextStrokeColor), w.ctx.lineWidth = n.webkitTextStrokeWidth, w.ctx.lineJoin = window.chrome ? "miter" : "round", w.ctx.strokeText(K.text, K.bounds.left, K.bounds.top + l)), w.ctx.strokeStyle = "", w.ctx.lineWidth = 0, w.ctx.lineJoin = "miter";
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
      var n, i, d, s, l, f, h, w, p, K, _, S, v;
      return Qt(this, function(M) {
        switch (M.label) {
          case 0:
            this.applyEffects(e.getEffects(4)), n = e.container, i = e.curves, d = n.styles, s = 0, l = n.textNodes, M.label = 1;
          case 1:
            return s < l.length ? (f = l[s], [4, this.renderTextNode(f, d)]) : [3, 4];
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
            f = M.sent(), n.width && n.height && this.ctx.drawImage(f, 0, 0, n.width, n.height, n.bounds.left, n.bounds.top, n.bounds.width, n.bounds.height), M.label = 14;
          case 14:
            if (n instanceof p0 && (h = Math.min(n.bounds.width, n.bounds.height), n.type === wl ? n.checked && (this.ctx.save(), this.path([new nA(n.bounds.left + 0.39363 * h, n.bounds.top + 0.79 * h), new nA(n.bounds.left + 0.16 * h, n.bounds.top + 0.5549 * h), new nA(n.bounds.left + 0.27347 * h, n.bounds.top + 0.44071 * h), new nA(n.bounds.left + 0.39694 * h, n.bounds.top + 0.5649 * h), new nA(n.bounds.left + 0.72983 * h, n.bounds.top + 0.23 * h), new nA(n.bounds.left + 0.84 * h, n.bounds.top + 0.34085 * h), new nA(n.bounds.left + 0.39363 * h, n.bounds.top + 0.79 * h)]), this.ctx.fillStyle = je(OQ), this.ctx.fill(), this.ctx.restore()) : n.type === Ql && n.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(n.bounds.left + h / 2, n.bounds.top + h / 2, h / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = je(OQ), this.ctx.fill(), this.ctx.restore())), mI(n) && n.value.length) {
              switch (h = this.createFontStyle(d), S = h[0], _ = h[1], _ = this.fontMetrics.getMetrics(S, _).baseline, this.ctx.font = S, this.ctx.fillStyle = je(d.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = DI(n.styles.textAlign), v = pl(n), w = 0, n.styles.textAlign) {
                case 1:
                  w += v.width / 2;
                  break;
                case 2:
                  w += v.width;
              }
              p = v.add(w, 0, 0, -v.height / 2 + 1), this.ctx.save(), this.path([new nA(v.left, v.top), new nA(v.left + v.width, v.top), new nA(v.left + v.width, v.top + v.height), new nA(v.left, v.top + v.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Hs(n.value, p), d.letterSpacing, _), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
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
            e.listValue && n.styles.listStyleType !== -1 && (S = this.createFontStyle(d)[0], this.ctx.font = S, this.ctx.fillStyle = je(d.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", v = new Jr(n.bounds.left, n.bounds.top + de(n.styles.paddingTop, n.bounds.width), n.bounds.width, QQ(d.lineHeight, d.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Hs(e.listValue, v), d.letterSpacing, QQ(d.lineHeight, d.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), M.label = 20;
          case 20:
            return [2];
        }
      });
    });
  }, A.prototype.renderStackContent = function(e) {
    return yt(this, void 0, void 0, function() {
      var n, i, d, s, l, f, h, w, p, K, _, S, v, M, k;
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
            l = 0, f = e.nonPositionedFloats, X.label = 11;
          case 11:
            return l < f.length ? (k = f[l], [4, this.renderStack(k)]) : [3, 14];
          case 12:
            X.sent(), X.label = 13;
          case 13:
            return l++, [3, 11];
          case 14:
            h = 0, w = e.nonPositionedInlineLevel, X.label = 15;
          case 15:
            return h < w.length ? (k = w[h], [4, this.renderStack(k)]) : [3, 18];
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
      var s = yn(i) ? i.start : i;
      d === 0 ? n.ctx.moveTo(s.x, s.y) : n.ctx.lineTo(s.x, s.y), yn(i) && n.ctx.bezierCurveTo(i.startControl.x, i.startControl.y, i.endControl.x, i.endControl.y, i.end.x, i.end.y);
    });
  }, A.prototype.renderRepeat = function(e, n, i, d) {
    this.path(e), this.ctx.fillStyle = n, this.ctx.translate(i, d), this.ctx.fill(), this.ctx.translate(-i, -d);
  }, A.prototype.resizeImage = function(e, n, i) {
    var d;
    return e.width === n && e.height === i ? e : ((d = ((d = this.canvas.ownerDocument) != null ? d : document).createElement("canvas")).width = Math.max(1, n), d.height = Math.max(1, i), d.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, n, i), d);
  }, A.prototype.renderBackgroundImage = function(e) {
    return yt(this, void 0, void 0, function() {
      var n, i, d, s, l, f;
      return Qt(this, function(h) {
        switch (h.label) {
          case 0:
            n = e.styles.backgroundImage.length - 1, i = function(w) {
              var p, K, _, S, v, M, k, X, iA, z, J, lA, $, vA, IA, YA, Fe, re, $A, ge, ve;
              return Qt(this, function(ZA) {
                switch (ZA.label) {
                  case 0:
                    if (w.type !== 0)
                      return [3, 5];
                    p = void 0, K = w.url, ZA.label = 1;
                  case 1:
                    return ZA.trys.push([1, 3, , 4]), [4, d.context.cache.match(K)];
                  case 2:
                    return p = ZA.sent(), [3, 4];
                  case 3:
                    return ZA.sent(), d.context.logger.error("Error loading background-image " + K), [3, 4];
                  case 4:
                    return p && (z = yg(e, n, [p.width, p.height, p.width / p.height]), M = z[0], lA = z[1], $ = z[2], iA = z[3], z = z[4], S = d.ctx.createPattern(d.resizeImage(p, iA, z), "repeat"), d.renderRepeat(M, S, lA, $)), [3, 6];
                  case 5:
                    dy(w) ? (J = yg(e, n, [null, null, null]), M = J[0], lA = J[1], $ = J[2], iA = J[3], z = J[4], J = ry(w.angle, iA, z), vA = J[0], v = J[1], X = J[2], k = J[3], J = J[4], (YA = document.createElement("canvas")).width = iA, YA.height = z, IA = YA.getContext("2d"), _ = IA.createLinearGradient(v, k, X, J), gQ(w.stops, vA).forEach(function(Be) {
                      return _.addColorStop(Be.stop, je(Be.color));
                    }), IA.fillStyle = _, IA.fillRect(0, 0, iA, z), 0 < iA && 0 < z && (S = d.ctx.createPattern(YA, "repeat"), d.renderRepeat(M, S, lA, $))) : sy(w) && (v = yg(e, n, [null, null, null]), M = v[0], k = v[1], X = v[2], iA = v[3], z = v[4], J = w.position.length === 0 ? [F0] : w.position, lA = de(J[0], iA), $ = de(J[J.length - 1], z), vA = uy(w, lA, $, iA, z), IA = vA[0], YA = vA[1], 0 < IA) && 0 < YA && (Fe = d.ctx.createRadialGradient(k + lA, X + $, 0, k + lA, X + $, IA), gQ(w.stops, 2 * IA).forEach(function(Be) {
                      return Fe.addColorStop(Be.stop, je(Be.color));
                    }), d.path(M), d.ctx.fillStyle = Fe, IA !== YA ? (re = e.bounds.left + 0.5 * e.bounds.width, $A = e.bounds.top + 0.5 * e.bounds.height, ve = 1 / (ge = YA / IA), d.ctx.save(), d.ctx.translate(re, $A), d.ctx.transform(1, 0, 0, ge, 0, 0), d.ctx.translate(-re, -$A), d.ctx.fillRect(k, ve * (X - $A) + $A, iA, z * ve), d.ctx.restore()) : d.ctx.fill()), ZA.label = 6;
                  case 6:
                    return n--, [2];
                }
              });
            }, d = this, s = 0, l = e.styles.backgroundImage.slice(0).reverse(), h.label = 1;
          case 1:
            return s < l.length ? (f = l[s], [5, i(f)]) : [3, 4];
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
            return s = BI(d, i), this.path(s), this.ctx.fillStyle = je(e), this.ctx.fill(), s = lI(d, i), this.path(s), this.ctx.fill(), [2];
        }
      });
    });
  }, A.prototype.renderNodeBackgroundAndBorders = function(e) {
    return yt(this, void 0, void 0, function() {
      var n, i, d, s, l, f, h, w, p = this;
      return Qt(this, function(K) {
        switch (K.label) {
          case 0:
            return this.applyEffects(e.getEffects(2)), n = e.container.styles, i = !_u(n.backgroundColor) || n.backgroundImage.length, d = [{ style: n.borderTopStyle, color: n.borderTopColor, width: n.borderTopWidth }, { style: n.borderRightStyle, color: n.borderRightColor, width: n.borderRightWidth }, { style: n.borderBottomStyle, color: n.borderBottomColor, width: n.borderBottomWidth }, { style: n.borderLeftStyle, color: n.borderLeftColor, width: n.borderLeftWidth }], s = EI(Ua(n.backgroundClip, 0), e.curves), i || n.boxShadow.length ? (this.ctx.save(), this.path(s), this.ctx.clip(), _u(n.backgroundColor) || (this.ctx.fillStyle = je(n.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(e.container)]) : [3, 2];
          case 1:
            K.sent(), this.ctx.restore(), n.boxShadow.slice(0).reverse().forEach(function(_) {
              p.ctx.save();
              var S = Fl(e.curves), v = _.inset ? 0 : UI, M = sI(S, -v + (_.inset ? 1 : -1) * _.spread.number, (_.inset ? 1 : -1) * _.spread.number, _.spread.number * (_.inset ? -2 : 2), _.spread.number * (_.inset ? -2 : 2));
              _.inset ? (p.path(S), p.ctx.clip(), p.mask(M)) : (p.mask(S), p.ctx.clip(), p.path(M)), p.ctx.shadowOffsetX = _.offsetX.number + v, p.ctx.shadowOffsetY = _.offsetY.number, p.ctx.shadowColor = je(_.color), p.ctx.shadowBlur = _.blur.number, p.ctx.fillStyle = _.inset ? je(_.color) : "rgba(0,0,0,1)", p.ctx.fill(), p.ctx.restore();
            }), K.label = 2;
          case 2:
            f = l = 0, h = d, K.label = 3;
          case 3:
            return f < h.length ? (w = h[f]).style !== 0 && !_u(w.color) && 0 < w.width ? w.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(w.color, w.width, l, e.curves, 2)] : [3, 11] : [3, 13];
          case 4:
            return K.sent(), [3, 11];
          case 5:
            return w.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(w.color, w.width, l, e.curves, 3)];
          case 6:
            return K.sent(), [3, 11];
          case 7:
            return w.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(w.color, w.width, l, e.curves)];
          case 8:
            return K.sent(), [3, 11];
          case 9:
            return [4, this.renderSolidBorder(w.color, l, e.curves)];
          case 10:
            K.sent(), K.label = 11;
          case 11:
            l++, K.label = 12;
          case 12:
            return f++, [3, 3];
          case 13:
            return [2];
        }
      });
    });
  }, A.prototype.renderDashedDottedBorder = function(e, n, i, d, s) {
    return yt(this, void 0, void 0, function() {
      var l, f, h, w, p, K, _, S, v, M, k;
      return Qt(this, function(X) {
        return this.ctx.save(), p = fI(d, i), l = ZQ(d, i), s === 2 && (this.path(l), this.ctx.clip()), v = (yn(l[0]) ? (f = l[0].start.x, l[0].start) : (f = l[0].x, l[0])).y, w = (yn(l[1]) ? (h = l[1].end.x, l[1].end) : (h = l[1].x, l[1])).y, v = Math.abs(i === 0 || i === 2 ? f - h : v - w), this.ctx.beginPath(), s === 3 ? this.formatPath(p) : this.formatPath(l.slice(0, 2)), w = n < 3 ? 3 * n : 2 * n, p = n < 3 ? 2 * n : n, s === 3 && (p = w = n), K = !0, v <= 2 * w ? K = !1 : v <= 2 * w + p ? (w *= _ = v / (2 * w + p), p *= _) : (_ = Math.floor((v + p) / (w + p)), S = (v - _ * w) / (_ - 1), p = (v = (v - (_ + 1) * w) / _) <= 0 || Math.abs(p - S) < Math.abs(p - v) ? S : v), K && (s === 3 ? this.ctx.setLineDash([0, w + p]) : this.ctx.setLineDash([w, p])), s === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = n) : this.ctx.lineWidth = 2 * n + 1.1, this.ctx.strokeStyle = je(e), this.ctx.stroke(), this.ctx.setLineDash([]), s === 2 && (yn(l[0]) && (M = l[3], k = l[0], this.ctx.beginPath(), this.formatPath([new nA(M.end.x, M.end.y), new nA(k.start.x, k.start.y)]), this.ctx.stroke()), yn(l[1])) && (M = l[1], k = l[2], this.ctx.beginPath(), this.formatPath([new nA(M.end.x, M.end.y), new nA(k.start.x, k.start.y)]), this.ctx.stroke()), this.ctx.restore(), [2];
      });
    });
  }, A.prototype.render = function(e) {
    return yt(this, void 0, void 0, function() {
      var n;
      return Qt(this, function(i) {
        switch (i.label) {
          case 0:
            return this.options.backgroundColor && (this.ctx.fillStyle = je(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), n = cI(e), [4, this.renderStack(n)];
          case 1:
            return i.sent(), this.applyEffects([]), [2, this.canvas];
        }
      });
    });
  }, A;
}(oF), mI = function(t) {
  return t instanceof NC || t instanceof RC || t instanceof p0 && t.type !== Ql && t.type !== wl;
}, EI = function(t, A) {
  switch (t) {
    case 0:
      return Fl(A);
    case 2:
      return uI(A);
    default:
      return Ul(A);
  }
}, DI = function(t) {
  switch (t) {
    case 1:
      return "center";
    case 2:
      return "right";
    default:
      return "left";
  }
}, HI = ["-apple-system", "system-ui"], yI = function(t) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? t.filter(function(A) {
    return HI.indexOf(A) === -1;
  }) : t;
}, bI = function(t) {
  function A(e, n) {
    return e = t.call(this, e, n) || this, e.canvas = n.canvas || document.createElement("canvas"), e.ctx = e.canvas.getContext("2d"), e.options = n, e.canvas.width = Math.floor(n.width * n.scale), e.canvas.height = Math.floor(n.height * n.scale), e.canvas.style.width = n.width + "px", e.canvas.style.height = n.height + "px", e.ctx.scale(e.options.scale, e.options.scale), e.ctx.translate(-n.x, -n.y), e.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + n.width + "x" + n.height + " at " + n.x + "," + n.y + ") with scale " + n.scale), e;
  }
  return Zn(A, t), A.prototype.render = function(e) {
    return yt(this, void 0, void 0, function() {
      var n;
      return Qt(this, function(i) {
        switch (i.label) {
          case 0:
            return n = o0(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, e), [4, II(n)];
          case 1:
            return n = i.sent(), this.options.backgroundColor && (this.ctx.fillStyle = je(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
        }
      });
    });
  }, A;
}(oF), II = function(t) {
  return new Promise(function(A, e) {
    var n = new Image();
    n.onload = function() {
      A(n);
    }, n.onerror = e, n.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(t));
  });
}, vI = function() {
  function t(n) {
    var e = n.id, n = n.enabled;
    this.id = e, this.enabled = n, this.start = Date.now();
  }
  return t.prototype.debug = function() {
    for (var A = [], e = 0; e < arguments.length; e++)
      A[e] = arguments[e];
    this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, hB([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, t.prototype.getTime = function() {
    return Date.now() - this.start;
  }, t.prototype.info = function() {
    for (var A = [], e = 0; e < arguments.length; e++)
      A[e] = arguments[e];
    this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, hB([this.id, this.getTime() + "ms"], A));
  }, t.prototype.warn = function() {
    for (var A = [], e = 0; e < arguments.length; e++)
      A[e] = arguments[e];
    this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, hB([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, t.prototype.error = function() {
    for (var A = [], e = 0; e < arguments.length; e++)
      A[e] = arguments[e];
    this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, hB([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
  }, t.instances = {}, t;
}(), KI = function() {
  function t(A, e) {
    this.windowBounds = e, this.instanceName = "#" + t.instanceCount++, this.logger = new vI({ id: this.instanceName, enabled: A.logging }), this.cache = (e = A.cache) != null ? e : new qb(this, A);
  }
  return t.instanceCount = 1, t;
}(), LI = function(t, A) {
  return xI(t, A = A === void 0 ? {} : A);
}, xI = (typeof window < "u" && AF.setContext(window), function(t, A) {
  return yt(void 0, void 0, void 0, function() {
    var e, n, i, d, s, l, f, h, w, p, K, _, S, v, M, k;
    return Qt(this, function(X) {
      switch (X.label) {
        case 0:
          if (!t || typeof t != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (!(S = t.ownerDocument))
            throw new Error("Element is not attached to a Document");
          if (e = S.defaultView)
            return v = { allowTaint: (v = A.allowTaint) != null && v, imageTimeout: (v = A.imageTimeout) != null ? v : 15e3, proxy: A.proxy, useCORS: (v = A.useCORS) != null && v }, p = aC({ logging: (p = A.logging) == null || p, cache: A.cache }, v), v = { windowWidth: (v = A.windowWidth) != null ? v : e.innerWidth, windowHeight: (v = A.windowHeight) != null ? v : e.innerHeight, scrollX: (v = A.scrollX) != null ? v : e.pageXOffset, scrollY: (v = A.scrollY) != null ? v : e.pageYOffset }, v = new Jr(v.scrollX, v.scrollY, v.windowWidth, v.windowHeight), p = new KI(p, v), K = (K = A.foreignObjectRendering) != null && K, _ = { allowTaint: (_ = A.allowTaint) != null && _, onclone: A.onclone, ignoreElements: A.ignoreElements, inlineImages: K, copyStyles: K }, p.logger.debug("Starting document clone with size " + v.width + "x" + v.height + " scrolled to " + -v.left + "," + -v.top), _ = new XQ(p, t, _), (n = _.clonedReferenceElement) ? [4, _.toIFrame(S, v)] : [2, Promise.reject("Unable to find element in cloned iframe")];
          throw new Error("Document is not attached to a Window");
        case 1:
          return i = X.sent(), _ = m0(n) || _b(n) ? lD(n.ownerDocument) : bl(p, n), d = _.width, s = _.height, l = _.left, f = _.top, h = _I(p, n, A.backgroundColor), M = { canvas: A.canvas, backgroundColor: h, scale: (v = (S = A.scale) != null ? S : e.devicePixelRatio) != null ? v : 1, x: ((M = A.x) != null ? M : 0) + l, y: ((M = A.y) != null ? M : 0) + f, width: (M = A.width) != null ? M : Math.ceil(d), height: (M = A.height) != null ? M : Math.ceil(s) }, K ? (p.logger.debug("Document cloned, using foreign object rendering"), [4, new bI(p, M).render(n)]) : [3, 3];
        case 2:
          return w = X.sent(), [3, 5];
        case 3:
          return p.logger.debug("Document cloned, element located at " + l + "," + f + " with size " + d + "x" + s + " using computed rendering"), p.logger.debug("Starting DOM parsing"), k = XC(p, n), h === k.styles.backgroundColor && (k.styles.backgroundColor = Pr.TRANSPARENT), p.logger.debug("Starting renderer for element at " + M.x + "," + M.y + " with size " + M.width + "x" + M.height), [4, new pI(p, M).render(k)];
        case 4:
          w = X.sent(), X.label = 5;
        case 5:
          return (k = A.removeContainer) != null && !k || XQ.destroy(i) || p.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore"), p.logger.debug("Finished rendering"), [2, w];
      }
    });
  });
}), _I = function(s, A, e) {
  var n = A.ownerDocument, i = n.documentElement ? Es(s, getComputedStyle(n.documentElement).backgroundColor) : Pr.TRANSPARENT, d = n.body ? Es(s, getComputedStyle(n.body).backgroundColor) : Pr.TRANSPARENT, s = typeof e == "string" ? Es(s, e) : e === null ? Pr.TRANSPARENT : 4294967295;
  return A === n.documentElement ? _u(i) ? _u(d) ? s : d : i : s;
};
const SI = "MathJax-script", TI = fp + "/tex-mml-chtml.js";
let qQ = !1, l0 = !1;
function OI(t) {
  if (globalThis.window) {
    let A = ol;
    t && (A = { ...ol, ...t }), globalThis.window.MathJax = { ...A, startup: { pageReady: () => {
      l0 = !0;
    } } };
  }
}
function MI() {
  return new Promise((t, A) => {
    if (l0)
      return t("");
    {
      var e;
      qQ || ((e = document.createElement("script")).src = TI, e.id = SI, e.onerror = (i) => {
        A(i);
      }, document.body.appendChild(e), qQ = !0);
      let n = setInterval(() => {
        if (l0)
          return clearInterval(n), t("");
      }, 1e3);
    }
  });
}
function kI(t) {
  OI(t);
}
function GI(t) {
  return MI().then(() => MathJax.typesetPromise([t]));
}
function VI(t) {
  if (t)
    return new Promise((A) => {
      LI(t).then((e) => {
        e = e.toDataURL("image/png"), A(e);
      });
    });
  throw alert(t), new Error("ele 不存在");
}
class RI {
  constructor(A) {
    if (this.content = "", this.defaultConfig = { lineBreak: !0, globalRender: !1, lineHeight: "20px", punctuation: !1, textColor: "#000", underlineClass: void 0, divideChinese: !1, wrapMathrm: !0 }, this.config = {}, this.container = document.querySelector(A.container), !this.container)
      throw new Error("找不到" + A.container);
    this.config = A.options || {}, this.init();
  }
  init() {
    kI(this.container);
  }
  setContent(e) {
    this.content = e;
    var e = Object.assign(this.defaultConfig, this.config), n = up(this.content, e);
    this.container.innerText = e.divideChinese ? n : `$$${n}$$`, this.container.style.color = e.textColor || "#333", GI(this.container);
  }
  latexToImage() {
    return new Promise((A) => {
      VI(this.container).then((e) => {
        A(e);
      });
    });
  }
  changeOption(A) {
    this.config = A;
  }
}
class NI {
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
    Wo(this.container, un("div.tool")), this.Tool = new xF({ container: ".tool", handleClickFormula: this.handleClickFormula.bind(this) });
  }
  createInput() {
    Wo(this.container, un("div.input")), this.Input = new dU({ container: ".input", contentChange: (A) => {
      var e, n;
      this.content = A, (e = this.mathOption) != null && e.globalRender || ((n = this.Output) == null || n.setContent(this.content));
    } });
  }
  createOutput() {
    Wo(this.container, un("div.output")), this.Output = new RI({ container: ".output", content: this.content, options: this.mathOption });
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
function ZI(t) {
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
globalThis.LatexEditor = NI;
export {
  NI as LatexEditor,
  ZI as copyByContent,
  E0 as fontIconBaseUrl,
  f0 as formulaTypeAllList
};
