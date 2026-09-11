var Pa = Object.defineProperty;
var Gn = (l) => {
  throw TypeError(l);
};
var Ma = (l, r, n) => r in l ? Pa(l, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : l[r] = n;
var jt = (l, r, n) => Ma(l, typeof r != "symbol" ? r + "" : r, n), Ia = (l, r, n) => r.has(l) || Gn("Cannot " + n);
var Yn = (l, r, n) => r.has(l) ? Gn("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(l) : r.set(l, n);
var _s = (l, r, n) => (Ia(l, r, "access private method"), n);
const Ps = {
  chatflowId: "",
  apiHost: "",
  buttonType: "icon",
  buttonSide: "right",
  buttonBottom: "20px",
  buttonOffsetX: "20px",
  buttonWidth: "60px",
  buttonHeight: "60px",
  buttonBackgroundColor: "#1b2f55",
  buttonZIndex: "10001",
  buttonText: "💬",
  buttonImageSrc: "",
  buttonAriaLabel: "Abrir chat",
  lottieAnimationPath: "",
  lottieLoop: !0,
  lottieAutoplay: !0,
  tooltipEnabled: !1,
  tooltipText: "¡Haz clic para chatear!",
  tooltipBackgroundColor: "#333333",
  tooltipTextColor: "#ffffff",
  tooltipFontSize: "13px",
  tooltipPadding: "5px 10px",
  tooltipBorderRadius: "8px",
  tooltipPositionOffset: 8,
  windowTitle: "Asistente Virtual",
  windowWelcomeMessage: "",
  windowWidth: 400,
  windowHeight: 500,
  windowErrorMessage: "Lo siento, ocurrió un error de conexión. ¿Podrías intentarlo de nuevo?",
  windowShowAgentMessages: !1,
  windowBackgroundColor: "#ffffff",
  windowFontSize: 15,
  windowFontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  windowHeaderBackgroundColor: "",
  windowZIndex: "10000",
  botMessageBackgroundColor: "#f0f2f7",
  botMessageTextColor: "#303235",
  botMessageShowAvatar: !0,
  botMessageAvatarSrc: "",
  userMessageBackgroundColor: "#1b2f55",
  userMessageTextColor: "#ffffff",
  userMessageShowAvatar: !1,
  userMessageAvatarSrc: "",
  textInputPlaceholder: "Escribe tu pregunta aquí...",
  textInputBackgroundColor: "#ffffff",
  textInputTextColor: "#303235",
  textInputSendButtonColor: "#1b2f55",
  textInputMaxChars: 1e3,
  textInputAutoFocus: !0,
  footerText: "Powered by",
  footerCompany: "",
  footerCompanyLink: "",
  footerTextColor: "#9aa0a6",
  voiceInput: "auto",
  voiceOutput: "auto",
  imageUploads: "auto",
  showResetButton: !0,
  persistConversation: !0,
  overrideConfig: {},
  glass: !1,
  glassTintColor: ""
}, Oo = {
  themeChatWindowTitle: "windowTitle",
  themeChatWindowWelcomeMessage: "windowWelcomeMessage",
  themeChatWindowHeight: "windowHeight",
  themeChatWindowWidth: "windowWidth",
  themeChatWindowErrorMessage: "windowErrorMessage",
  themeChatWindowShowAgentMessages: "windowShowAgentMessages",
  themeChatWindowBackgroundColor: "windowBackgroundColor",
  themeChatWindowFontSize: "windowFontSize",
  themeButtonBackgroundColor: "buttonBackgroundColor",
  themeButtonRight: "buttonOffsetX",
  themeButtonBottom: "buttonBottom",
  themeButtonZIndex: "buttonZIndex",
  themeZIndex: "windowZIndex",
  lottieButtonBottom: "buttonBottom",
  lottieButtonRight: "buttonOffsetX",
  lottieButtonLeft: { key: "buttonOffsetX", extra: { buttonSide: "left" } },
  lottieButtonWidth: "buttonWidth",
  lottieButtonHeight: "buttonHeight",
  lottieButtonZIndex: "buttonZIndex",
  lottieTooltipEnabled: "tooltipEnabled",
  lottieTooltipText: "tooltipText",
  lottieTooltipBackgroundColor: "tooltipBackgroundColor",
  lottieTooltipTextColor: "tooltipTextColor",
  lottieTooltipFontSize: "tooltipFontSize",
  lottieTooltipPadding: "tooltipPadding",
  lottieTooltipBorderRadius: "tooltipBorderRadius",
  lottieTooltipPositionOffset: "tooltipPositionOffset",
  themeBotMessageBackgroundColor: "botMessageBackgroundColor",
  themeBotMessageTextColor: "botMessageTextColor",
  themeBotMessageShowAvatar: "botMessageShowAvatar",
  themeBotMessageAvatarSrc: "botMessageAvatarSrc",
  themeUserMessageBackgroundColor: "userMessageBackgroundColor",
  themeUserMessageTextColor: "userMessageTextColor",
  themeUserMessageShowAvatar: "userMessageShowAvatar",
  themeUserMessageAvatarSrc: "userMessageAvatarSrc",
  themeTextInputPlaceholder: "textInputPlaceholder",
  themeTextInputBackgroundColor: "textInputBackgroundColor",
  themeTextInputTextColor: "textInputTextColor",
  themeTextInputSendButtonColor: "textInputSendButtonColor",
  themeTextInputMaxChars: "textInputMaxChars",
  themeTextInputAutoFocus: "textInputAutoFocus",
  themeFooterText: "footerText",
  themeFooterCompany: "footerCompany",
  themeFooterCompanyLink: "footerCompanyLink",
  themeFooterTextColor: "footerTextColor"
};
function _n(l) {
  return l.toLowerCase().replace(/^data-/, "").replace(/[^a-z0-9]/g, "");
}
const La = new Map(
  Object.keys(Ps).map((l) => [
    _n(l),
    l
  ])
), Fa = new Map(
  Object.entries(Oo).map(([l, r]) => [_n(l), r])
);
function Js(l) {
  const r = l.trim();
  return r === "" || r === "true" ? !0 : r === "false" ? !1 : /^-?\d+(\.\d+)?$/.test(r) ? Number(r) : r;
}
function No(l) {
  const r = {}, n = Array.isArray(l) ? l : Array.from(l);
  for (const h of n) {
    const g = _n(h.name), p = La.get(g);
    if (p) {
      r[p] = Js(h.value);
      continue;
    }
    const y = Fa.get(g);
    typeof y == "string" ? r[y] = Js(h.value) : y && typeof y == "object" && (r[y.key] = Js(h.value), Object.assign(r, y.extra));
  }
  return r;
}
function Ra() {
  const l = (h) => h.replace(/[A-Z]/g, (g) => "-" + g.toLowerCase()), r = Object.keys(Ps).map(l), n = Object.keys(Oo).map(l);
  return Array.from(/* @__PURE__ */ new Set([...r, ...n]));
}
function Oa(l) {
  const r = Object.assign({}, Ps, ...l);
  if (r.buttonType === "icon" && r.lottieAnimationPath && !r.buttonImageSrc ? r.buttonType = "lottie" : r.buttonType === "lottie" && !r.lottieAnimationPath && (r.buttonType = r.buttonImageSrc ? "image" : "icon"), r.buttonType === "image" && !r.buttonImageSrc && (r.buttonType = "icon"), r.windowHeaderBackgroundColor || (r.windowHeaderBackgroundColor = r.buttonBackgroundColor), r.glass) {
    const n = {
      windowBackgroundColor: "rgba(255, 255, 255, 0.07)",
      botMessageBackgroundColor: "rgba(255, 255, 255, 0.12)",
      botMessageTextColor: "#ffffff",
      textInputTextColor: "#ffffff",
      textInputBackgroundColor: "rgba(255, 255, 255, 0.08)",
      footerTextColor: "rgba(255, 255, 255, 0.65)"
    };
    for (const [h, g] of Object.entries(n))
      r[h] === Ps[h] && (r[h] = g);
  }
  return r;
}
function Na(l, r) {
  return l ? [l] : Array.from(r).filter(
    (n) => n.hasAttribute("data-chatflowid") && n.hasAttribute("data-api-host")
  );
}
function za(l, r, n) {
  const h = () => r.forEach((g) => n(g));
  if (l.readyState === "loading") {
    l.addEventListener("DOMContentLoaded", h, { once: !0 });
    return;
  }
  h();
}
var zs, Vt, zo, er, Xn, Do, Bo, tn, As, rs, Vo, bn, fn, cn, Ms = {}, Is = [], Da = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ds = Array.isArray;
function Mi(l, r) {
  for (var n in r) l[n] = r[n];
  return l;
}
function wn(l) {
  l && l.parentNode && l.parentNode.removeChild(l);
}
function Ba(l, r, n) {
  var h, g, p, y = {};
  for (p in r) p == "key" ? h = r[p] : p == "ref" ? g = r[p] : y[p] = r[p];
  if (arguments.length > 2 && (y.children = arguments.length > 3 ? zs.call(arguments, 2) : n), typeof l == "function" && l.defaultProps != null) for (p in l.defaultProps) y[p] === void 0 && (y[p] = l.defaultProps[p]);
  return Ss(l, y, h, g, null);
}
function Ss(l, r, n, h, g) {
  var p = { type: l, props: r, key: n, ref: h, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: g ?? ++zo, __i: -1, __u: 0 };
  return g == null && Vt.vnode != null && Vt.vnode(p), p;
}
function Nr(l) {
  return l.children;
}
function Cs(l, r) {
  this.props = l, this.context = r;
}
function _r(l, r) {
  if (r == null) return l.__ ? _r(l.__, l.__i + 1) : null;
  for (var n; r < l.__k.length; r++) if ((n = l.__k[r]) != null && n.__e != null) return n.__e;
  return typeof l.type == "function" ? _r(l) : null;
}
function Va(l) {
  if (l.__P && l.__d) {
    var r = l.__v, n = r.__e, h = [], g = [], p = Mi({}, r);
    p.__v = r.__v + 1, Vt.vnode && Vt.vnode(p), kn(l.__P, p, r, l.__n, l.__P.namespaceURI, 32 & r.__u ? [n] : null, h, n ?? _r(r), !!(32 & r.__u), g), p.__v = r.__v, p.__.__k[p.__i] = p, Ho(h, p, g), r.__e = r.__ = null, p.__e != n && $o(p);
  }
}
function $o(l) {
  if ((l = l.__) != null && l.__c != null) return l.__e = l.__c.base = null, l.__k.some(function(r) {
    if (r != null && r.__e != null) return l.__e = l.__c.base = r.__e;
  }), $o(l);
}
function Zn(l) {
  (!l.__d && (l.__d = !0) && er.push(l) && !Ls.__r++ || Xn != Vt.debounceRendering) && ((Xn = Vt.debounceRendering) || Do)(Ls);
}
function Ls() {
  try {
    for (var l, r = 1; er.length; ) er.length > r && er.sort(Bo), l = er.shift(), r = er.length, Va(l);
  } finally {
    er.length = Ls.__r = 0;
  }
}
function jo(l, r, n, h, g, p, y, I, z, U, W) {
  var H, O, Z, at, rt, bt, yt = h && h.__k || Is, dt = r.length;
  for (z = $a(n, r, yt, z, dt), H = 0; H < dt; H++) (Z = n.__k[H]) != null && (O = Z.__i != -1 && yt[Z.__i] || Ms, Z.__i = H, bt = kn(l, Z, O, g, p, y, I, z, U, W), at = Z.__e, Z.ref && O.ref != Z.ref && (O.ref && xn(O.ref, null, Z), W.push(Z.ref, Z.__c || at, Z)), rt == null && at != null && (rt = at), 4 & Z.__u ? (z = Uo(Z, z, l), O.__e && (O.__e = null)) : typeof Z.type == "function" && bt !== void 0 ? z = bt : at && (z = at.nextSibling), Z.__u &= -7);
  return n.__e = rt, z;
}
function $a(l, r, n, h, g) {
  var p, y, I, z, U, W = n.length, H = W, O = 0;
  for (l.__k = new Array(g), p = 0; p < g; p++) (y = r[p]) != null && typeof y != "boolean" && typeof y != "function" ? (typeof y == "string" || typeof y == "number" || typeof y == "bigint" || y.constructor == String ? y = l.__k[p] = Ss(null, y, null, null, null) : Ds(y) ? y = l.__k[p] = Ss(Nr, { children: y }, null, null, null) : y.constructor === void 0 && y.__b > 0 ? y = l.__k[p] = Ss(y.type, y.props, y.key, y.ref ? y.ref : null, y.__v) : l.__k[p] = y, z = p + O, y.__ = l, y.__b = l.__b + 1, I = null, (U = y.__i = ja(y, n, z, H)) != -1 && (H--, (I = n[U]) && (I.__u |= 2)), I == null || I.__v == null ? (U == -1 && (g > W ? O-- : g < W && O++), typeof y.type != "function" && (y.__u |= 4)) : U != z && (U == z - 1 ? O-- : U == z + 1 ? O++ : (U > z ? O-- : O++, y.__u |= 4))) : l.__k[p] = null;
  if (H) for (p = 0; p < W; p++) (I = n[p]) != null && !(2 & I.__u) && (I.__e == h && (h = _r(I)), Go(I, I));
  return h;
}
function Uo(l, r, n) {
  var h, g;
  if (typeof l.type == "function") {
    for (h = l.__k, g = 0; h && g < h.length; g++) h[g] && (h[g].__ = l, r = Uo(h[g], r, n));
    return r;
  }
  l.__e != r && (r && l.type && !r.parentNode && (r = _r(l)), r = n.insertBefore(l.__e, r || null));
  do
    r = r && r.nextSibling;
  while (r != null && r.nodeType == 8);
  return r;
}
function ja(l, r, n, h) {
  var g, p, y, I = l.key, z = l.type, U = r[n], W = U != null && (2 & U.__u) == 0;
  if (U === null && I == null || W && I == U.key && z == U.type) return n;
  if (h > (W ? 1 : 0)) {
    for (g = n - 1, p = n + 1; g >= 0 || p < r.length; ) if ((U = r[y = g >= 0 ? g-- : p++]) != null && !(2 & U.__u) && I == U.key && z == U.type) return y;
  }
  return -1;
}
function Kn(l, r, n) {
  r[0] == "-" ? l.setProperty(r, n ?? "") : l[r] = n == null ? "" : typeof n != "number" || Da.test(r) ? n : n + "px";
}
function bs(l, r, n, h, g) {
  var p, y;
  t: if (r == "style") if (typeof n == "string") l.style.cssText = n;
  else {
    if (typeof h == "string" && (l.style.cssText = h = ""), h) for (r in h) n && r in n || Kn(l.style, r, "");
    if (n) for (r in n) h && n[r] == h[r] || Kn(l.style, r, n[r]);
  }
  else if (r[0] == "o" && r[1] == "n") p = r != (r = r.replace(Vo, "$1")), y = r.toLowerCase(), r = y in l || r == "onFocusOut" || r == "onFocusIn" ? y.slice(2) : r.slice(2), l.l || (l.l = {}), l.l[r + p] = n, n ? h ? n[rs] = h[rs] : (n[rs] = bn, l.addEventListener(r, p ? cn : fn, p)) : l.removeEventListener(r, p ? cn : fn, p);
  else {
    if (g == "http://www.w3.org/2000/svg") r = r.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (r != "width" && r != "height" && r != "href" && r != "list" && r != "form" && r != "tabIndex" && r != "download" && r != "rowSpan" && r != "colSpan" && r != "role" && r != "popover" && r in l) try {
      l[r] = n ?? "";
      break t;
    } catch {
    }
    typeof n == "function" || (n == null || n === !1 && r[4] != "-" ? l.removeAttribute(r) : l.setAttribute(r, r == "popover" && n == 1 ? "" : n));
  }
}
function Qn(l) {
  return function(r) {
    if (this.l) {
      var n = this.l[r.type + l];
      if (r[As] == null) r[As] = bn++;
      else if (r[As] < n[rs]) return;
      return n(Vt.event ? Vt.event(r) : r);
    }
  };
}
function kn(l, r, n, h, g, p, y, I, z, U) {
  var W, H, O, Z, at, rt, bt, yt, dt, Ft, zt, Ut, Ht, Ue, Zt, Pt, kt = r.type;
  if (r.constructor !== void 0) return null;
  128 & n.__u && (z = !!(32 & n.__u), p = [I = r.__e = n.__e]), (W = Vt.__b) && W(r);
  t: if (typeof kt == "function") {
    H = y.length;
    try {
      if (dt = r.props, Ft = kt.prototype && kt.prototype.render, zt = (W = kt.contextType) && h[W.__c], Ut = W ? zt ? zt.props.value : W.__ : h, n.__c ? yt = (O = r.__c = n.__c).__ = O.__E : (Ft ? r.__c = O = new kt(dt, Ut) : (r.__c = O = new Cs(dt, Ut), O.constructor = kt, O.render = Wa), zt && zt.sub(O), O.state || (O.state = {}), O.__n = h, Z = O.__d = !0, O.__h = [], O._sb = []), Ft && O.__s == null && (O.__s = O.state), Ft && kt.getDerivedStateFromProps != null && (O.__s == O.state && (O.__s = Mi({}, O.__s)), Mi(O.__s, kt.getDerivedStateFromProps(dt, O.__s))), at = O.props, rt = O.state, O.__v = r, Z) Ft && kt.getDerivedStateFromProps == null && O.componentWillMount != null && O.componentWillMount(), Ft && O.componentDidMount != null && O.__h.push(O.componentDidMount);
      else {
        if (Ft && kt.getDerivedStateFromProps == null && dt !== at && O.componentWillReceiveProps != null && O.componentWillReceiveProps(dt, Ut), r.__v == n.__v || !O.__e && O.shouldComponentUpdate != null && O.shouldComponentUpdate(dt, O.__s, Ut) === !1) {
          r.__v != n.__v && (O.props = dt, O.state = O.__s, O.__d = !1), r.__e = n.__e, r.__k = n.__k, r.__k.some(function(Dt) {
            Dt && (Dt.__ = r);
          }), Is.push.apply(O.__h, O._sb), O._sb = [], O.__h.length && y.push(O), I = _r(n);
          break t;
        }
        O.componentWillUpdate != null && O.componentWillUpdate(dt, O.__s, Ut), Ft && O.componentDidUpdate != null && O.__h.push(function() {
          O.componentDidUpdate(at, rt, bt);
        });
      }
      if (O.context = Ut, O.props = dt, O.__P = l, O.__e = !1, Ht = Vt.__r, Ue = 0, Ft) O.state = O.__s, O.__d = !1, Ht && Ht(r), W = O.render(O.props, O.state, O.context), Is.push.apply(O.__h, O._sb), O._sb = [];
      else do
        O.__d = !1, Ht && Ht(r), W = O.render(O.props, O.state, O.context), O.state = O.__s;
      while (O.__d && ++Ue < 25);
      O.state = O.__s, O.getChildContext != null && (h = Mi(Mi({}, h), O.getChildContext())), Ft && !Z && O.getSnapshotBeforeUpdate != null && (bt = O.getSnapshotBeforeUpdate(at, rt)), Zt = W != null && W.type === Nr && W.key == null ? qo(W.props.children) : W, I = jo(l, Ds(Zt) ? Zt : [Zt], r, n, h, g, p, y, I, z, U), O.base = r.__e, r.__u &= -161, O.__h.length && y.push(O), yt && (O.__E = O.__ = null);
    } catch (Dt) {
      if (y.length = H, r.__v = null, z || p != null) {
        if (Dt.then) {
          for (r.__u |= z ? 160 : 128; I && I.nodeType == 8 && I.nextSibling; ) I = I.nextSibling;
          p != null && (p[p.indexOf(I)] = null), r.__e = I;
        } else if (p != null) for (Pt = p.length; Pt--; ) wn(p[Pt]);
      } else r.__e = n.__e;
      r.__k == null && (r.__k = n.__k || []), Dt.then || Wo(r), Vt.__e(Dt, r, n);
    }
  } else p == null && r.__v == n.__v ? (r.__k = n.__k, r.__e = n.__e) : I = r.__e = Ua(n.__e, r, n, h, g, p, y, z, U);
  return (W = Vt.diffed) && W(r), 128 & r.__u ? void 0 : I;
}
function Wo(l) {
  l && (l.__c && (l.__c.__e = !0), l.__k && l.__k.some(Wo));
}
function Ho(l, r, n) {
  for (var h = 0; h < n.length; h++) xn(n[h], n[++h], n[++h]);
  Vt.__c && Vt.__c(r, l), l.some(function(g) {
    try {
      l = g.__h, g.__h = [], l.some(function(p) {
        p.call(g);
      });
    } catch (p) {
      Vt.__e(p, g.__v);
    }
  });
}
function qo(l) {
  return typeof l != "object" || l == null || l.__b > 0 ? l : Ds(l) ? l.map(qo) : l.constructor !== void 0 ? null : Mi({}, l);
}
function Ua(l, r, n, h, g, p, y, I, z) {
  var U, W, H, O, Z, at, rt, bt = n.props || Ms, yt = r.props, dt = r.type;
  if (dt == "svg" ? g = "http://www.w3.org/2000/svg" : dt == "math" ? g = "http://www.w3.org/1998/Math/MathML" : g || (g = "http://www.w3.org/1999/xhtml"), p != null) {
    for (U = 0; U < p.length; U++) if ((Z = p[U]) && "setAttribute" in Z == !!dt && (dt ? Z.localName == dt : Z.nodeType == 3)) {
      l = Z, p[U] = null;
      break;
    }
  }
  if (l == null) {
    if (dt == null) return document.createTextNode(yt);
    l = document.createElementNS(g, dt, yt.is && yt), I && (Vt.__m && Vt.__m(r, p), I = !1), p = null;
  }
  if (dt == null) bt === yt || I && l.data == yt || (l.data = yt);
  else {
    if (p = dt == "textarea" && yt.defaultValue != null ? null : p && zs.call(l.childNodes), !I && p != null) for (bt = {}, U = 0; U < l.attributes.length; U++) bt[(Z = l.attributes[U]).name] = Z.value;
    for (U in bt) Z = bt[U], U == "dangerouslySetInnerHTML" ? H = Z : U == "children" || U in yt || U == "value" && "defaultValue" in yt || U == "checked" && "defaultChecked" in yt || bs(l, U, null, Z, g);
    for (U in yt) Z = yt[U], U == "children" ? O = Z : U == "dangerouslySetInnerHTML" ? W = Z : U == "value" ? at = Z : U == "checked" ? rt = Z : I && typeof Z != "function" || bt[U] === Z || bs(l, U, Z, bt[U], g);
    if (W) I || H && (W.__html == H.__html || W.__html == l.innerHTML) || (l.innerHTML = W.__html), r.__k = [];
    else if (H && (l.innerHTML = ""), jo(r.type == "template" ? l.content : l, Ds(O) ? O : [O], r, n, h, dt == "foreignObject" ? "http://www.w3.org/1999/xhtml" : g, p, y, p ? p[0] : n.__k && _r(n, 0), I, z), p != null) for (U = p.length; U--; ) wn(p[U]);
    I && dt != "textarea" || (U = "value", dt == "progress" && at == null ? l.removeAttribute("value") : at != null && (at !== l[U] || dt == "progress" && !at || dt == "option" && at != bt[U]) && bs(l, U, at, bt[U], g), U = "checked", rt != null && rt != l[U] && bs(l, U, rt, bt[U], g));
  }
  return l;
}
function xn(l, r, n) {
  try {
    if (typeof l == "function") {
      var h = typeof l.__u == "function";
      h && l.__u(), h && r == null || (l.__u = l(r));
    } else l.current = r;
  } catch (g) {
    Vt.__e(g, n);
  }
}
function Go(l, r, n) {
  var h, g;
  if (Vt.unmount && Vt.unmount(l), (h = l.ref) && (h.current && h.current != l.__e || xn(h, null, r)), (h = l.__c) != null) {
    if (h.componentWillUnmount) try {
      h.componentWillUnmount();
    } catch (p) {
      Vt.__e(p, r);
    }
    h.base = h.__P = h.__n = null;
  }
  if (h = l.__k) for (g = 0; g < h.length; g++) h[g] && Go(h[g], r, n || typeof l.type != "function");
  n || wn(l.__e), l.__c = l.__ = l.__e = void 0;
}
function Wa(l, r, n) {
  return this.constructor(l, n);
}
function Jn(l, r, n) {
  var h, g, p, y;
  r == document && (r = document.documentElement), Vt.__ && Vt.__(l, r), g = (h = !1) ? null : r.__k, p = [], y = [], kn(r, l = r.__k = Ba(Nr, null, [l]), g || Ms, Ms, r.namespaceURI, g ? null : r.firstChild ? zs.call(r.childNodes) : null, p, g ? g.__e : r.firstChild, h, y), Ho(p, l, y), l.props.children = null;
}
zs = Is.slice, Vt = { __e: function(l, r, n, h) {
  for (var g, p, y; r = r.__; ) if ((g = r.__c) && !g.__) try {
    if ((p = g.constructor) && p.getDerivedStateFromError != null && (g.setState(p.getDerivedStateFromError(l)), y = g.__d), g.componentDidCatch != null && (g.componentDidCatch(l, h || {}), y = g.__d), y) return g.__E = g;
  } catch (I) {
    l = I;
  }
  throw l;
} }, zo = 0, Cs.prototype.setState = function(l, r) {
  var n;
  n = this.__s != null && this.__s != this.state ? this.__s : this.__s = Mi({}, this.state), typeof l == "function" && (l = l(Mi({}, n), this.props)), l && Mi(n, l), l != null && this.__v && (r && this._sb.push(r), Zn(this));
}, Cs.prototype.forceUpdate = function(l) {
  this.__v && (this.__e = !0, l && this.__h.push(l), Zn(this));
}, Cs.prototype.render = Nr, er = [], Do = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Bo = function(l, r) {
  return l.__v.__b - r.__v.__b;
}, Ls.__r = 0, tn = Math.random().toString(8), As = "__d" + tn, rs = "__a" + tn, Vo = /(PointerCapture)$|Capture$/i, bn = 0, fn = Qn(!1), cn = Qn(!0);
var Ha = 0;
function tt(l, r, n, h, g, p) {
  r || (r = {});
  var y, I, z = r;
  if ("ref" in z) for (I in z = {}, r) I == "ref" ? y = r[I] : z[I] = r[I];
  var U = { type: l, props: z, key: n, ref: y, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ha, __i: -1, __u: 0, __source: g, __self: p };
  if (typeof l == "function" && (y = l.defaultProps)) for (I in y) z[I] === void 0 && (z[I] = y[I]);
  return Vt.vnode && Vt.vnode(U), U;
}
var os, Xt, en, to, Fs = 0, Yo = [], ee = Vt, eo = ee.__b, io = ee.__r, ro = ee.diffed, so = ee.__c, no = ee.unmount, oo = ee.__;
function Tn(l, r) {
  ee.__h && ee.__h(Xt, l, Fs || r), Fs = 0;
  var n = Xt.__H || (Xt.__H = { __: [], __h: [] });
  return l >= n.__.length && n.__.push({}), n.__[l];
}
function Ye(l) {
  return Fs = 1, qa(Zo, l);
}
function qa(l, r, n) {
  var h = Tn(os++, 2);
  if (h.t = l, !h.__c && (h.__ = [Zo(void 0, r), function(I) {
    var z = h.__N ? h.__N[0] : h.__[0], U = h.t(z, I);
    z !== U && (h.__N = [U, h.__[1]], h.__c.setState({}));
  }], h.__c = Xt, !Xt.__f)) {
    var g = function(I, z, U) {
      if (!h.__c.__H) return !0;
      var W = !1, H = h.__c.props !== I;
      if (h.__c.__H.__.some(function(Z) {
        if (Z.__N) {
          W = !0;
          var at = Z.__[0];
          Z.__ = Z.__N, Z.__N = void 0, at !== Z.__[0] && (H = !0);
        }
      }), p) {
        var O = p.call(this, I, z, U);
        return W ? O || H : O;
      }
      return !W || H;
    };
    Xt.__f = !0;
    var p = Xt.shouldComponentUpdate, y = Xt.componentWillUpdate;
    Xt.componentWillUpdate = function(I, z, U) {
      if (this.__e) {
        var W = p;
        p = void 0, g(I, z, U), p = W;
      }
      y && y.call(this, I, z, U);
    }, Xt.shouldComponentUpdate = g;
  }
  return h.__N || h.__;
}
function ni(l, r) {
  var n = Tn(os++, 3);
  !ee.__s && Xo(n.__H, r) && (n.__ = l, n.u = r, Xt.__H.__h.push(n));
}
function ce(l) {
  return Fs = 5, Ga(function() {
    return { current: l };
  }, []);
}
function Ga(l, r) {
  var n = Tn(os++, 7);
  return Xo(n.__H, r) && (n.__ = l(), n.__H = r, n.__h = l), n.__;
}
function Ya() {
  for (var l; l = Yo.shift(); ) {
    var r = l.__H;
    if (l.__P && r) try {
      r.__h.some(Es), r.__h.some(un), r.__h = [];
    } catch (n) {
      r.__h = [], ee.__e(n, l.__v);
    }
  }
}
ee.__b = function(l) {
  Xt = null, eo && eo(l);
}, ee.__ = function(l, r) {
  l && r.__k && r.__k.__m && (l.__m = r.__k.__m), oo && oo(l, r);
}, ee.__r = function(l) {
  io && io(l), os = 0;
  var r = (Xt = l.__c).__H;
  r && (en === Xt ? (r.__h = [], Xt.__h = [], r.__.some(function(n) {
    n.__N && (n.__ = n.__N), n.u = n.__N = void 0;
  })) : (r.__h.some(Es), r.__h.some(un), r.__h = [], os = 0)), en = Xt;
}, ee.diffed = function(l) {
  ro && ro(l);
  var r = l.__c;
  r && r.__H && (r.__H.__h.length && (Yo.push(r) !== 1 && to === ee.requestAnimationFrame || ((to = ee.requestAnimationFrame) || Xa)(Ya)), r.__H.__.some(function(n) {
    n.u && (n.__H = n.u, n.u = void 0);
  })), en = Xt = null;
}, ee.__c = function(l, r) {
  r.some(function(n) {
    try {
      n.__h.some(Es), n.__h = n.__h.filter(function(h) {
        return !h.__ || un(h);
      });
    } catch (h) {
      r.some(function(g) {
        g.__h && (g.__h = []);
      }), r = [], ee.__e(h, n.__v);
    }
  }), so && so(l, r);
}, ee.unmount = function(l) {
  no && no(l);
  var r, n = l.__c;
  n && n.__H && (n.__H.__.some(function(h) {
    try {
      Es(h);
    } catch (g) {
      r = g;
    }
  }), n.__H = void 0, r && ee.__e(r, n.__v));
};
var ao = typeof requestAnimationFrame == "function";
function Xa(l) {
  var r, n = function() {
    clearTimeout(h), ao && cancelAnimationFrame(r), setTimeout(l);
  }, h = setTimeout(n, 35);
  ao && (r = requestAnimationFrame(n));
}
function Es(l) {
  var r = Xt, n = l.__c;
  typeof n == "function" && (l.__c = void 0, n()), Xt = r;
}
function un(l) {
  var r = Xt;
  l.__c = l.__(), Xt = r;
}
function Xo(l, r) {
  return !l || l.length !== r.length || r.some(function(n, h) {
    return n !== l[h];
  });
}
function Zo(l, r) {
  return typeof r == "function" ? r(l) : r;
}
function Za(l) {
  const r = [];
  let n = l;
  const g = l.replace(/\r\n/g, `
`).split(`

`);
  n = l.endsWith(`

`) ? "" : g.pop() ?? "";
  for (const p of g) {
    const y = p.split(`
`).filter((z) => z.startsWith("data:")).map((z) => z.slice(5).trim());
    if (y.length === 0) continue;
    const I = y.join(`
`);
    try {
      const z = JSON.parse(I);
      r.push({ event: z.event ?? "message", data: z.data });
    } catch {
      I !== "[DONE]" && r.push({ event: "token", data: I });
    }
  }
  return { events: r, rest: n };
}
function Ka(l) {
  return `${l.apiHost.replace(/\/+$/, "")}/api/v1/prediction/${encodeURIComponent(l.chatflowId)}`;
}
async function Qa(l, r, n) {
  var I, z, U;
  const h = {
    question: l.question,
    chatId: l.chatId,
    streaming: l.streaming ?? !0,
    ...l.overrideConfig ? { overrideConfig: l.overrideConfig } : {},
    ...(I = l.uploads) != null && I.length ? { uploads: l.uploads } : {}
  }, g = await fetch(Ka(l), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(h),
    signal: n
  });
  if (!g.ok) {
    let W = `${g.status} ${g.statusText}`;
    try {
      const H = await g.json();
      H != null && H.message && (W = H.message);
    } catch {
    }
    throw new Error(W);
  }
  if (!l.streaming || !g.body) {
    const W = await g.json();
    W.text && r.onToken(W.text), (W.chatId || W.followUpPrompts) && ((z = r.onMetadata) == null || z.call(r, { chatId: W.chatId, followUpPrompts: W.followUpPrompts })), r.onDone();
    return;
  }
  (U = r.onStart) == null || U.call(r);
  let p = !1;
  const y = (W) => {
    var Z, at, rt, bt, yt;
    const { event: H, data: O } = W;
    switch (H) {
      case "token":
        typeof O == "string" && r.onToken(O);
        break;
      case "thinking":
      case "tool":
      case "usedTools":
      case "calledTools":
      case "agentReasoning":
      case "nextAgent":
        (Z = r.onActivity) == null || Z.call(r, H);
        break;
      case "metadata":
        O && typeof O == "object" && ((at = r.onMetadata) == null || at.call(r, O));
        break;
      case "tts_start":
        if (O && typeof O == "object") {
          const dt = O.format ?? "audio/mpeg";
          (rt = r.onTtsStart) == null || rt.call(r, dt);
        }
        break;
      case "tts_data":
        if (O && typeof O == "object") {
          const dt = O.audioChunk;
          dt && ((bt = r.onTtsChunk) == null || bt.call(r, dt));
        }
        break;
      case "tts_end":
        (yt = r.onTtsEnd) == null || yt.call(r);
        break;
      case "error":
        p = !0, r.onError(typeof O == "string" ? O : JSON.stringify(O));
        break;
      case "end":
        return !0;
    }
    return !1;
  };
  await Ko(g.body, y), p || r.onDone();
}
async function Ko(l, r) {
  const n = l.getReader(), h = new TextDecoder();
  let g = "", p = !1;
  for (; !p; ) {
    const { done: y, value: I } = await n.read();
    if (y) break;
    g += h.decode(I, { stream: !0 });
    const { events: z, rest: U } = Za(g);
    g = U;
    for (const W of z)
      if (r(W)) {
        p = !0;
        break;
      }
  }
}
async function Ja(l, r, n) {
  const h = l.apiHost.replace(/\/+$/, ""), g = await fetch(`${h}/api/v1/text-to-speech/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chatflowId: l.chatflowId,
      chatId: l.chatId,
      chatMessageId: l.chatMessageId,
      text: l.text
    }),
    signal: n
  });
  if (!g.ok || !g.body) {
    let p = `${g.status} ${g.statusText}`;
    try {
      const y = await g.json();
      p = (y == null ? void 0 : y.message) ?? (y == null ? void 0 : y.error) ?? p;
    } catch {
    }
    r.onError(p);
    return;
  }
  await Ko(g.body, (p) => {
    var z;
    const { event: y, data: I } = p;
    switch (y) {
      case "tts_start":
        if (I && typeof I == "object") {
          const U = I.format ?? "audio/mpeg";
          (z = r.onTtsStart) == null || z.call(r, U);
        }
        break;
      case "tts_data":
        if (I && typeof I == "object") {
          const U = I.audioChunk;
          U && r.onTtsChunk(U);
        }
        break;
      case "tts_end":
        r.onTtsEnd();
        break;
      case "tts_error":
        I && typeof I == "object" ? r.onError(I.error ?? "TTS generation failed") : r.onError(typeof I == "string" ? I : "TTS generation failed");
        break;
    }
    return !1;
  });
}
function lo() {
  return typeof crypto < "u" && "randomUUID" in crypto ? crypto.randomUUID() : "chat-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
}
const tl = {
  stt: !1,
  tts: !1,
  ttsKnown: !1,
  imageUploads: !1,
  imageTypes: [],
  imageMaxSizeMb: 5
};
function el(l) {
  if (!l) return !1;
  try {
    const r = JSON.parse(l);
    return Object.entries(r).some(([n, h]) => n !== "none" && (h == null ? void 0 : h.status) === !0);
  } catch {
    return !1;
  }
}
const ho = /* @__PURE__ */ new Map();
async function il(l, r) {
  var y, I;
  const n = `${l}|${r}`, h = ho.get(n);
  if (h) return h;
  const g = l.replace(/\/+$/, ""), p = { ...tl };
  try {
    const z = await fetch(`${g}/api/v1/chatflows-uploads/${encodeURIComponent(r)}`);
    if (z.ok) {
      const U = await z.json();
      p.stt = U.isSpeechToTextEnabled === !0, p.imageUploads = U.isImageUploadAllowed === !0;
      const W = (y = U.imgUploadSizeAndTypes) == null ? void 0 : y[0];
      (I = W == null ? void 0 : W.fileTypes) != null && I.length && (p.imageTypes = W.fileTypes.filter((H) => !!H), p.imageMaxSizeMb = W.maxUploadSize ?? 5);
    }
  } catch {
  }
  try {
    const z = await fetch(`${g}/api/v1/public-chatflows/${encodeURIComponent(r)}`);
    if (z.ok) {
      const U = await z.json();
      p.tts = el(U.textToSpeech), p.ttsKnown = !0;
    }
  } catch {
  }
  return ho.set(n, p), p;
}
function fo(l) {
  return new Promise((r, n) => {
    const h = new FileReader();
    h.onload = () => r(h.result), h.onerror = () => n(h.error ?? new Error("No se pudo leer el archivo")), h.readAsDataURL(l);
  });
}
function rl(l) {
  const r = (l.type || "audio/webm").split(";", 1)[0].toLowerCase() || "audio/webm", n = r.includes("mp4") ? "m4a" : r.includes("ogg") ? "ogg" : r.includes("wav") ? "wav" : "webm";
  return { name: `audio-${Date.now()}.${n}`, mime: r };
}
function sl(l) {
  return l !== !1;
}
var nl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ol(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var pn = { exports: {} };
(function(l, r) {
  typeof document < "u" && typeof navigator < "u" && function(n, h) {
    l.exports = h();
  }(nl, function() {
    var n = "http://www.w3.org/2000/svg", h = "", g = !1, p = -999999, y = function(e) {
      g = !!e;
    }, I = function() {
      return g;
    }, z = function(e) {
      h = e;
    }, U = function() {
      return h;
    };
    function W(t) {
      return document.createElement(t);
    }
    function H(t, e) {
      var i, s = t.length, a;
      for (i = 0; i < s; i += 1) {
        a = t[i].prototype;
        for (var o in a)
          Object.prototype.hasOwnProperty.call(a, o) && (e.prototype[o] = a[o]);
      }
    }
    function O(t) {
      function e() {
      }
      return e.prototype = t, e;
    }
    var Z = function() {
      function t(e) {
        this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1;
      }
      return t.prototype = {
        addAudio: function(i) {
          this.audios.push(i);
        },
        pause: function() {
          var i, s = this.audios.length;
          for (i = 0; i < s; i += 1)
            this.audios[i].pause();
        },
        resume: function() {
          var i, s = this.audios.length;
          for (i = 0; i < s; i += 1)
            this.audios[i].resume();
        },
        setRate: function(i) {
          var s, a = this.audios.length;
          for (s = 0; s < a; s += 1)
            this.audios[s].setRate(i);
        },
        createAudio: function(i) {
          return this.audioFactory ? this.audioFactory(i) : window.Howl ? new window.Howl({
            src: [i]
          }) : {
            isPlaying: !1,
            play: function() {
              this.isPlaying = !0;
            },
            seek: function() {
              this.isPlaying = !1;
            },
            playing: function() {
            },
            rate: function() {
            },
            setVolume: function() {
            }
          };
        },
        setAudioFactory: function(i) {
          this.audioFactory = i;
        },
        setVolume: function(i) {
          this._volume = i, this._updateVolume();
        },
        mute: function() {
          this._isMuted = !0, this._updateVolume();
        },
        unmute: function() {
          this._isMuted = !1, this._updateVolume();
        },
        getVolume: function() {
          return this._volume;
        },
        _updateVolume: function() {
          var i, s = this.audios.length;
          for (i = 0; i < s; i += 1)
            this.audios[i].volume(this._volume * (this._isMuted ? 0 : 1));
        }
      }, function() {
        return new t();
      };
    }(), at = /* @__PURE__ */ function() {
      function t(i, s) {
        var a = 0, o = [], c;
        switch (i) {
          case "int16":
          case "uint8c":
            c = 1;
            break;
          default:
            c = 1.1;
            break;
        }
        for (a = 0; a < s; a += 1)
          o.push(c);
        return o;
      }
      function e(i, s) {
        return i === "float32" ? new Float32Array(s) : i === "int16" ? new Int16Array(s) : i === "uint8c" ? new Uint8ClampedArray(s) : t(i, s);
      }
      return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t;
    }();
    function rt(t) {
      return Array.apply(null, {
        length: t
      });
    }
    var bt = !0, yt = null, dt = "", Ft = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), zt = Math.pow, Ut = Math.sqrt, Ht = Math.floor, Ue = Math.min, Zt = 150, Pt = Math.PI / 180, kt = 0.5519;
    function Dt(t, e, i, s) {
      this.type = t, this.currentTime = e, this.totalTime = i, this.direction = s < 0 ? -1 : 1;
    }
    function Oe(t, e) {
      this.type = t, this.direction = e < 0 ? -1 : 1;
    }
    function Ii(t, e, i, s) {
      this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = s < 0 ? -1 : 1;
    }
    function We(t, e, i) {
      this.type = t, this.firstFrame = e, this.totalFrames = i;
    }
    function Li(t, e) {
      this.type = t, this.target = e;
    }
    function Ke(t, e) {
      this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
    }
    function Fi(t) {
      this.type = "configError", this.nativeError = t;
    }
    var Kt = /* @__PURE__ */ function() {
      var t = 0;
      return function() {
        return t += 1, dt + "__lottie_element_" + t;
      };
    }();
    function Ne(t, e, i) {
      var s, a, o, c, b, u, T, C;
      switch (c = Math.floor(t * 6), b = t * 6 - c, u = i * (1 - e), T = i * (1 - b * e), C = i * (1 - (1 - b) * e), c % 6) {
        case 0:
          s = i, a = C, o = u;
          break;
        case 1:
          s = T, a = i, o = u;
          break;
        case 2:
          s = u, a = i, o = C;
          break;
        case 3:
          s = u, a = T, o = i;
          break;
        case 4:
          s = C, a = u, o = i;
          break;
        case 5:
          s = i, a = u, o = T;
          break;
      }
      return [s, a, o];
    }
    function Te(t, e, i) {
      var s = Math.max(t, e, i), a = Math.min(t, e, i), o = s - a, c, b = s === 0 ? 0 : o / s, u = s / 255;
      switch (s) {
        case a:
          c = 0;
          break;
        case t:
          c = e - i + o * (e < i ? 6 : 0), c /= 6 * o;
          break;
        case e:
          c = i - t + o * 2, c /= 6 * o;
          break;
        case i:
          c = t - e + o * 4, c /= 6 * o;
          break;
      }
      return [c, b, u];
    }
    function oi(t, e) {
      var i = Te(t[0] * 255, t[1] * 255, t[2] * 255);
      return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), Ne(i[0], i[1], i[2]);
    }
    function He(t, e) {
      var i = Te(t[0] * 255, t[1] * 255, t[2] * 255);
      return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), Ne(i[0], i[1], i[2]);
    }
    function gi(t, e) {
      var i = Te(t[0] * 255, t[1] * 255, t[2] * 255);
      return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), Ne(i[0], i[1], i[2]);
    }
    (function() {
      var t = [], e, i;
      for (e = 0; e < 256; e += 1)
        i = e.toString(16), t[e] = i.length === 1 ? "0" + i : i;
      return function(s, a, o) {
        return s < 0 && (s = 0), a < 0 && (a = 0), o < 0 && (o = 0), "#" + t[s] + t[a] + t[o];
      };
    })();
    var qe = function(e) {
      bt = !!e;
    }, Tt = function() {
      return bt;
    }, ir = function(e) {
      yt = e;
    }, vi = function() {
      return yt;
    }, Ri = function(e) {
      Zt = e;
    }, Oi = function() {
      return Zt;
    }, rr = function(e) {
      dt = e;
    };
    function lt(t) {
      return document.createElementNS(n, t);
    }
    function Qe(t) {
      "@babel/helpers - typeof";
      return Qe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, Qe(t);
    }
    var Je = /* @__PURE__ */ function() {
      var t = 1, e = [], i, s, a = {
        onmessage: function() {
        },
        postMessage: function(E) {
          i({
            data: E
          });
        }
      }, o = {
        postMessage: function(E) {
          a.onmessage({
            data: E
          });
        }
      };
      function c(v) {
        if (window.Worker && window.Blob && I()) {
          var E = new Blob(["var _workerSelf = self; self.onmessage = ", v.toString()], {
            type: "text/javascript"
          }), L = URL.createObjectURL(E);
          return new Worker(L);
        }
        return i = v, a;
      }
      function b() {
        s || (s = c(function(E) {
          function L() {
            function N(Y, w) {
              var M, f, d = Y.length, $, R, it, pt;
              for (f = 0; f < d; f += 1)
                if (M = Y[f], "ks" in M && !M.completed) {
                  if (M.completed = !0, M.hasMask) {
                    var gt = M.masksProperties;
                    for (R = gt.length, $ = 0; $ < R; $ += 1)
                      if (gt[$].pt.k.i)
                        A(gt[$].pt.k);
                      else
                        for (pt = gt[$].pt.k.length, it = 0; it < pt; it += 1)
                          gt[$].pt.k[it].s && A(gt[$].pt.k[it].s[0]), gt[$].pt.k[it].e && A(gt[$].pt.k[it].e[0]);
                  }
                  M.ty === 0 ? (M.layers = m(M.refId, w), N(M.layers, w)) : M.ty === 4 ? _(M.shapes) : M.ty === 5 && vt(M);
                }
            }
            function S(Y, w) {
              if (Y) {
                var M = 0, f = Y.length;
                for (M = 0; M < f; M += 1)
                  Y[M].t === 1 && (Y[M].data.layers = m(Y[M].data.refId, w), N(Y[M].data.layers, w));
              }
            }
            function x(Y, w) {
              for (var M = 0, f = w.length; M < f; ) {
                if (w[M].id === Y)
                  return w[M];
                M += 1;
              }
              return null;
            }
            function m(Y, w) {
              var M = x(Y, w);
              return M ? M.layers.__used ? JSON.parse(JSON.stringify(M.layers)) : (M.layers.__used = !0, M.layers) : null;
            }
            function _(Y) {
              var w, M = Y.length, f, d;
              for (w = M - 1; w >= 0; w -= 1)
                if (Y[w].ty === "sh")
                  if (Y[w].ks.k.i)
                    A(Y[w].ks.k);
                  else
                    for (d = Y[w].ks.k.length, f = 0; f < d; f += 1)
                      Y[w].ks.k[f].s && A(Y[w].ks.k[f].s[0]), Y[w].ks.k[f].e && A(Y[w].ks.k[f].e[0]);
                else Y[w].ty === "gr" && _(Y[w].it);
            }
            function A(Y) {
              var w, M = Y.i.length;
              for (w = 0; w < M; w += 1)
                Y.i[w][0] += Y.v[w][0], Y.i[w][1] += Y.v[w][1], Y.o[w][0] += Y.v[w][0], Y.o[w][1] += Y.v[w][1];
            }
            function F(Y, w) {
              var M = w ? w.split(".") : [100, 100, 100];
              return Y[0] > M[0] ? !0 : M[0] > Y[0] ? !1 : Y[1] > M[1] ? !0 : M[1] > Y[1] ? !1 : Y[2] > M[2] ? !0 : M[2] > Y[2] ? !1 : null;
            }
            var B = /* @__PURE__ */ function() {
              var Y = [4, 4, 14];
              function w(f) {
                var d = f.t.d;
                f.t.d = {
                  k: [{
                    s: d,
                    t: 0
                  }]
                };
              }
              function M(f) {
                var d, $ = f.length;
                for (d = 0; d < $; d += 1)
                  f[d].ty === 5 && w(f[d]);
              }
              return function(f) {
                if (F(Y, f.v) && (M(f.layers), f.assets)) {
                  var d, $ = f.assets.length;
                  for (d = 0; d < $; d += 1)
                    f.assets[d].layers && M(f.assets[d].layers);
                }
              };
            }(), j = /* @__PURE__ */ function() {
              var Y = [4, 7, 99];
              return function(w) {
                if (w.chars && !F(Y, w.v)) {
                  var M, f = w.chars.length;
                  for (M = 0; M < f; M += 1) {
                    var d = w.chars[M];
                    d.data && d.data.shapes && (_(d.data.shapes), d.data.ip = 0, d.data.op = 99999, d.data.st = 0, d.data.sr = 1, d.data.ks = {
                      p: {
                        k: [0, 0],
                        a: 0
                      },
                      s: {
                        k: [100, 100],
                        a: 0
                      },
                      a: {
                        k: [0, 0],
                        a: 0
                      },
                      r: {
                        k: 0,
                        a: 0
                      },
                      o: {
                        k: 100,
                        a: 0
                      }
                    }, w.chars[M].t || (d.data.shapes.push({
                      ty: "no"
                    }), d.data.shapes[0].it.push({
                      p: {
                        k: [0, 0],
                        a: 0
                      },
                      s: {
                        k: [100, 100],
                        a: 0
                      },
                      a: {
                        k: [0, 0],
                        a: 0
                      },
                      r: {
                        k: 0,
                        a: 0
                      },
                      o: {
                        k: 100,
                        a: 0
                      },
                      sk: {
                        k: 0,
                        a: 0
                      },
                      sa: {
                        k: 0,
                        a: 0
                      },
                      ty: "tr"
                    })));
                  }
                }
              };
            }(), X = /* @__PURE__ */ function() {
              var Y = [5, 7, 15];
              function w(f) {
                var d = f.t.p;
                typeof d.a == "number" && (d.a = {
                  a: 0,
                  k: d.a
                }), typeof d.p == "number" && (d.p = {
                  a: 0,
                  k: d.p
                }), typeof d.r == "number" && (d.r = {
                  a: 0,
                  k: d.r
                });
              }
              function M(f) {
                var d, $ = f.length;
                for (d = 0; d < $; d += 1)
                  f[d].ty === 5 && w(f[d]);
              }
              return function(f) {
                if (F(Y, f.v) && (M(f.layers), f.assets)) {
                  var d, $ = f.assets.length;
                  for (d = 0; d < $; d += 1)
                    f.assets[d].layers && M(f.assets[d].layers);
                }
              };
            }(), mt = /* @__PURE__ */ function() {
              var Y = [4, 1, 9];
              function w(f) {
                var d, $ = f.length, R, it;
                for (d = 0; d < $; d += 1)
                  if (f[d].ty === "gr")
                    w(f[d].it);
                  else if (f[d].ty === "fl" || f[d].ty === "st")
                    if (f[d].c.k && f[d].c.k[0].i)
                      for (it = f[d].c.k.length, R = 0; R < it; R += 1)
                        f[d].c.k[R].s && (f[d].c.k[R].s[0] /= 255, f[d].c.k[R].s[1] /= 255, f[d].c.k[R].s[2] /= 255, f[d].c.k[R].s[3] /= 255), f[d].c.k[R].e && (f[d].c.k[R].e[0] /= 255, f[d].c.k[R].e[1] /= 255, f[d].c.k[R].e[2] /= 255, f[d].c.k[R].e[3] /= 255);
                    else
                      f[d].c.k[0] /= 255, f[d].c.k[1] /= 255, f[d].c.k[2] /= 255, f[d].c.k[3] /= 255;
              }
              function M(f) {
                var d, $ = f.length;
                for (d = 0; d < $; d += 1)
                  f[d].ty === 4 && w(f[d].shapes);
              }
              return function(f) {
                if (F(Y, f.v) && (M(f.layers), f.assets)) {
                  var d, $ = f.assets.length;
                  for (d = 0; d < $; d += 1)
                    f.assets[d].layers && M(f.assets[d].layers);
                }
              };
            }(), ft = /* @__PURE__ */ function() {
              var Y = [4, 4, 18];
              function w(f) {
                var d, $ = f.length, R, it;
                for (d = $ - 1; d >= 0; d -= 1)
                  if (f[d].ty === "sh")
                    if (f[d].ks.k.i)
                      f[d].ks.k.c = f[d].closed;
                    else
                      for (it = f[d].ks.k.length, R = 0; R < it; R += 1)
                        f[d].ks.k[R].s && (f[d].ks.k[R].s[0].c = f[d].closed), f[d].ks.k[R].e && (f[d].ks.k[R].e[0].c = f[d].closed);
                  else f[d].ty === "gr" && w(f[d].it);
              }
              function M(f) {
                var d, $, R = f.length, it, pt, gt, St;
                for ($ = 0; $ < R; $ += 1) {
                  if (d = f[$], d.hasMask) {
                    var Ct = d.masksProperties;
                    for (pt = Ct.length, it = 0; it < pt; it += 1)
                      if (Ct[it].pt.k.i)
                        Ct[it].pt.k.c = Ct[it].cl;
                      else
                        for (St = Ct[it].pt.k.length, gt = 0; gt < St; gt += 1)
                          Ct[it].pt.k[gt].s && (Ct[it].pt.k[gt].s[0].c = Ct[it].cl), Ct[it].pt.k[gt].e && (Ct[it].pt.k[gt].e[0].c = Ct[it].cl);
                  }
                  d.ty === 4 && w(d.shapes);
                }
              }
              return function(f) {
                if (F(Y, f.v) && (M(f.layers), f.assets)) {
                  var d, $ = f.assets.length;
                  for (d = 0; d < $; d += 1)
                    f.assets[d].layers && M(f.assets[d].layers);
                }
              };
            }();
            function J(Y) {
              Y.__complete || (mt(Y), B(Y), j(Y), X(Y), ft(Y), N(Y.layers, Y.assets), S(Y.chars, Y.assets), Y.__complete = !0);
            }
            function vt(Y) {
              Y.t.a.length === 0 && "m" in Y.t.p;
            }
            var st = {};
            return st.completeData = J, st.checkColors = mt, st.checkChars = j, st.checkPathProperties = X, st.checkShapes = ft, st.completeLayers = N, st;
          }
          if (o.dataManager || (o.dataManager = L()), o.assetLoader || (o.assetLoader = /* @__PURE__ */ function() {
            function N(x) {
              var m = x.getResponseHeader("content-type");
              return m && x.responseType === "json" && m.indexOf("json") !== -1 || x.response && Qe(x.response) === "object" ? x.response : x.response && typeof x.response == "string" ? JSON.parse(x.response) : x.responseText ? JSON.parse(x.responseText) : null;
            }
            function S(x, m, _, A) {
              var F, B = new XMLHttpRequest();
              try {
                B.responseType = "json";
              } catch {
              }
              B.onreadystatechange = function() {
                if (B.readyState === 4)
                  if (B.status === 200)
                    F = N(B), _(F);
                  else
                    try {
                      F = N(B), _(F);
                    } catch (j) {
                      A && A(j);
                    }
              };
              try {
                B.open(["G", "E", "T"].join(""), x, !0);
              } catch {
                B.open(["G", "E", "T"].join(""), m + "/" + x, !0);
              }
              B.send();
            }
            return {
              load: S
            };
          }()), E.data.type === "loadAnimation")
            o.assetLoader.load(E.data.path, E.data.fullPath, function(N) {
              o.dataManager.completeData(N), o.postMessage({
                id: E.data.id,
                payload: N,
                status: "success"
              });
            }, function() {
              o.postMessage({
                id: E.data.id,
                status: "error"
              });
            });
          else if (E.data.type === "complete") {
            var P = E.data.animation;
            o.dataManager.completeData(P), o.postMessage({
              id: E.data.id,
              payload: P,
              status: "success"
            });
          } else E.data.type === "loadData" && o.assetLoader.load(E.data.path, E.data.fullPath, function(N) {
            o.postMessage({
              id: E.data.id,
              payload: N,
              status: "success"
            });
          }, function() {
            o.postMessage({
              id: E.data.id,
              status: "error"
            });
          });
        }), s.onmessage = function(v) {
          var E = v.data, L = E.id, P = e[L];
          e[L] = null, E.status === "success" ? P.onComplete(E.payload) : P.onError && P.onError();
        });
      }
      function u(v, E) {
        t += 1;
        var L = "processId_" + t;
        return e[L] = {
          onComplete: v,
          onError: E
        }, L;
      }
      function T(v, E, L) {
        b();
        var P = u(E, L);
        s.postMessage({
          type: "loadAnimation",
          path: v,
          fullPath: window.location.origin + window.location.pathname,
          id: P
        });
      }
      function C(v, E, L) {
        b();
        var P = u(E, L);
        s.postMessage({
          type: "loadData",
          path: v,
          fullPath: window.location.origin + window.location.pathname,
          id: P
        });
      }
      function V(v, E, L) {
        b();
        var P = u(E, L);
        s.postMessage({
          type: "complete",
          animation: v,
          id: P
        });
      }
      return {
        loadAnimation: T,
        loadData: C,
        completeAnimation: V
      };
    }(), xr = function() {
      var t = function() {
        var S = W("canvas");
        S.width = 1, S.height = 1;
        var x = S.getContext("2d");
        return x.fillStyle = "rgba(0,0,0,0)", x.fillRect(0, 0, 1, 1), S;
      }();
      function e() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function i() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function s(S, x, m) {
        var _ = "";
        if (S.e)
          _ = S.p;
        else if (x) {
          var A = S.p;
          A.indexOf("images/") !== -1 && (A = A.split("/")[1]), _ = x + A;
        } else
          _ = m, _ += S.u ? S.u : "", _ += S.p;
        return _;
      }
      function a(S) {
        var x = 0, m = setInterval((function() {
          var _ = S.getBBox();
          (_.width || x > 500) && (this._imageLoaded(), clearInterval(m)), x += 1;
        }).bind(this), 50);
      }
      function o(S) {
        var x = s(S, this.assetsPath, this.path), m = lt("image");
        Ft ? this.testImageLoaded(m) : m.addEventListener("load", this._imageLoaded, !1), m.addEventListener("error", (function() {
          _.img = t, this._imageLoaded();
        }).bind(this), !1), m.setAttributeNS("http://www.w3.org/1999/xlink", "href", x), this._elementHelper.append ? this._elementHelper.append(m) : this._elementHelper.appendChild(m);
        var _ = {
          img: m,
          assetData: S
        };
        return _;
      }
      function c(S) {
        var x = s(S, this.assetsPath, this.path), m = W("img");
        m.crossOrigin = "anonymous", m.addEventListener("load", this._imageLoaded, !1), m.addEventListener("error", (function() {
          _.img = t, this._imageLoaded();
        }).bind(this), !1), m.src = x;
        var _ = {
          img: m,
          assetData: S
        };
        return _;
      }
      function b(S) {
        var x = {
          assetData: S
        }, m = s(S, this.assetsPath, this.path);
        return Je.loadData(m, (function(_) {
          x.img = _, this._footageLoaded();
        }).bind(this), (function() {
          x.img = {}, this._footageLoaded();
        }).bind(this)), x;
      }
      function u(S, x) {
        this.imagesLoadedCb = x;
        var m, _ = S.length;
        for (m = 0; m < _; m += 1)
          S[m].layers || (!S[m].t || S[m].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(S[m]))) : S[m].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(S[m]))));
      }
      function T(S) {
        this.path = S || "";
      }
      function C(S) {
        this.assetsPath = S || "";
      }
      function V(S) {
        for (var x = 0, m = this.images.length; x < m; ) {
          if (this.images[x].assetData === S)
            return this.images[x].img;
          x += 1;
        }
        return null;
      }
      function v() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }
      function E() {
        return this.totalImages === this.loadedAssets;
      }
      function L() {
        return this.totalFootages === this.loadedFootagesCount;
      }
      function P(S, x) {
        S === "svg" ? (this._elementHelper = x, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      }
      function N() {
        this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = a.bind(this), this.createFootageData = b.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return N.prototype = {
        loadAssets: u,
        setAssetsPath: C,
        setPath: T,
        loadedImages: E,
        loadedFootages: L,
        destroy: v,
        getAsset: V,
        createImgData: c,
        createImageData: o,
        imageLoaded: e,
        footageLoaded: i,
        setCacheType: P
      }, N;
    }();
    function It() {
    }
    It.prototype = {
      triggerEvent: function(e, i) {
        if (this._cbs[e])
          for (var s = this._cbs[e], a = 0; a < s.length; a += 1)
            s[a](i);
      },
      addEventListener: function(e, i) {
        return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(i), (function() {
          this.removeEventListener(e, i);
        }).bind(this);
      },
      removeEventListener: function(e, i) {
        if (!i)
          this._cbs[e] = null;
        else if (this._cbs[e]) {
          for (var s = 0, a = this._cbs[e].length; s < a; )
            this._cbs[e][s] === i && (this._cbs[e].splice(s, 1), s -= 1, a -= 1), s += 1;
          this._cbs[e].length || (this._cbs[e] = null);
        }
      }
    };
    var sr = /* @__PURE__ */ function() {
      function t(e) {
        for (var i = e.split(`\r
`), s = {}, a, o = 0, c = 0; c < i.length; c += 1)
          a = i[c].split(":"), a.length === 2 && (s[a[0]] = a[1].trim(), o += 1);
        if (o === 0)
          throw new Error();
        return s;
      }
      return function(e) {
        for (var i = [], s = 0; s < e.length; s += 1) {
          var a = e[s], o = {
            time: a.tm,
            duration: a.dr
          };
          try {
            o.payload = JSON.parse(e[s].cm);
          } catch {
            try {
              o.payload = t(e[s].cm);
            } catch {
              o.payload = {
                name: e[s].cm
              };
            }
          }
          i.push(o);
        }
        return i;
      };
    }(), Rt = /* @__PURE__ */ function() {
      function t(e) {
        this.compositions.push(e);
      }
      return function() {
        function e(i) {
          for (var s = 0, a = this.compositions.length; s < a; ) {
            if (this.compositions[s].data && this.compositions[s].data.nm === i)
              return this.compositions[s].prepareFrame && this.compositions[s].data.xt && this.compositions[s].prepareFrame(this.currentFrame), this.compositions[s].compInterface;
            s += 1;
          }
          return null;
        }
        return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
      };
    }(), ti = {}, me = function(e, i) {
      ti[e] = i;
    };
    function yi(t) {
      return ti[t];
    }
    function Tr() {
      if (ti.canvas)
        return "canvas";
      for (var t in ti)
        if (ti[t])
          return t;
      return "";
    }
    function ge(t) {
      "@babel/helpers - typeof";
      return ge = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, ge(t);
    }
    var ht = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = Kt(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = Tt(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = Rt(), this.imagePreloader = new xr(), this.audioController = Z(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new Dt("drawnFrame", 0, 0, 0), this.expressionsPlugin = vi();
    };
    H([It], ht), ht.prototype.setParams = function(t) {
      (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
      var e = "svg";
      t.animType ? e = t.animType : t.renderer && (e = t.renderer);
      var i = yi(e);
      this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === !0 ? this.loop = !0 : t.loop === !1 ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : !0, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : !0, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), Je.loadAnimation(t.path, this.configAnimation, this.onSetupError));
    }, ht.prototype.onSetupError = function() {
      this.trigger("data_failed");
    }, ht.prototype.setupAnimation = function(t) {
      Je.completeAnimation(t, this.configAnimation);
    }, ht.prototype.setData = function(t, e) {
      e && ge(e) !== "object" && (e = JSON.parse(e));
      var i = {
        wrapper: t,
        animationData: e
      }, s = t.attributes;
      i.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "", i.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : Tr() || "canvas";
      var a = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
      a === "false" ? i.loop = !1 : a === "true" ? i.loop = !0 : a !== "" && (i.loop = parseInt(a, 10));
      var o = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : s.getNamedItem("bm-autoplay") ? s.getNamedItem("bm-autoplay").value : !0;
      i.autoplay = o !== "false", i.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "";
      var c = s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "";
      c === "false" && (i.prerender = !1), i.path ? this.setParams(i) : this.trigger("destroy");
    }, ht.prototype.includeLayers = function(t) {
      t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
      var e = this.animationData.layers, i, s = e.length, a = t.layers, o, c = a.length;
      for (o = 0; o < c; o += 1)
        for (i = 0; i < s; ) {
          if (e[i].id === a[o].id) {
            e[i] = a[o];
            break;
          }
          i += 1;
        }
      if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
        for (s = t.assets.length, i = 0; i < s; i += 1)
          this.animationData.assets.push(t.assets[i]);
      this.animationData.__complete = !1, Je.completeAnimation(this.animationData, this.onSegmentComplete);
    }, ht.prototype.onSegmentComplete = function(t) {
      this.animationData = t;
      var e = vi();
      e && e.initExpressions(this), this.loadNextSegment();
    }, ht.prototype.loadNextSegment = function() {
      var t = this.animationData.segments;
      if (!t || t.length === 0 || !this.autoloadSegments) {
        this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
        return;
      }
      var e = t.shift();
      this.timeCompleted = e.time * this.frameRate;
      var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, Je.loadData(i, this.includeLayers.bind(this), (function() {
        this.trigger("data_failed");
      }).bind(this));
    }, ht.prototype.loadSegments = function() {
      var t = this.animationData.segments;
      t || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, ht.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded();
    }, ht.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, ht.prototype.configAnimation = function(t) {
      if (this.renderer)
        try {
          this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = sr(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
        } catch (e) {
          this.triggerConfigError(e);
        }
    }, ht.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, ht.prototype.checkLoaded = function() {
      if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
        this.isLoaded = !0;
        var t = vi();
        t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
          this.trigger("DOMLoaded");
        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
      }
    }, ht.prototype.resize = function(t, e) {
      var i = typeof t == "number" ? t : void 0, s = typeof e == "number" ? e : void 0;
      this.renderer.updateContainerSize(i, s);
    }, ht.prototype.setSubframe = function(t) {
      this.isSubframeEnabled = !!t;
    }, ht.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
    }, ht.prototype.renderFrame = function() {
      if (!(this.isLoaded === !1 || !this.renderer))
        try {
          this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
        } catch (t) {
          this.triggerRenderFrameError(t);
        }
    }, ht.prototype.play = function(t) {
      t && this.name !== t || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
    }, ht.prototype.pause = function(t) {
      t && this.name !== t || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause());
    }, ht.prototype.togglePause = function(t) {
      t && this.name !== t || (this.isPaused === !0 ? this.play() : this.pause());
    }, ht.prototype.stop = function(t) {
      t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
    }, ht.prototype.getMarkerData = function(t) {
      for (var e, i = 0; i < this.markers.length; i += 1)
        if (e = this.markers[i], e.payload && e.payload.name === t)
          return e;
      return null;
    }, ht.prototype.goToAndStop = function(t, e, i) {
      if (!(i && this.name !== i)) {
        var s = Number(t);
        if (isNaN(s)) {
          var a = this.getMarkerData(t);
          a && this.goToAndStop(a.time, !0);
        } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
        this.pause();
      }
    }, ht.prototype.goToAndPlay = function(t, e, i) {
      if (!(i && this.name !== i)) {
        var s = Number(t);
        if (isNaN(s)) {
          var a = this.getMarkerData(t);
          a && (a.duration ? this.playSegments([a.time, a.time + a.duration], !0) : this.goToAndStop(a.time, !0));
        } else
          this.goToAndStop(s, e, i);
        this.play();
      }
    }, ht.prototype.advanceTime = function(t) {
      if (!(this.isPaused === !0 || this.isLoaded === !1)) {
        var e = this.currentRawFrame + t * this.frameModifier, i = !1;
        e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (i = !0, e = 0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
      }
    }, ht.prototype.adjustSegment = function(t, e) {
      this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(1e-3 + e)), this.trigger("segmentStart");
    }, ht.prototype.setSegment = function(t, e) {
      var i = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, i !== -1 && this.goToAndStop(i, !0);
    }, ht.prototype.playSegments = function(t, e) {
      if (e && (this.segments.length = 0), ge(t[0]) === "object") {
        var i, s = t.length;
        for (i = 0; i < s; i += 1)
          this.segments.push(t[i]);
      } else
        this.segments.push(t);
      this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, ht.prototype.resetSegments = function(t) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
    }, ht.prototype.checkSegments = function(t) {
      return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), !0) : !1;
    }, ht.prototype.destroy = function(t) {
      t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
    }, ht.prototype.setCurrentRawFrameValue = function(t) {
      this.currentRawFrame = t, this.gotoFrame();
    }, ht.prototype.setSpeed = function(t) {
      this.playSpeed = t, this.updaFrameModifier();
    }, ht.prototype.setDirection = function(t) {
      this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
    }, ht.prototype.setLoop = function(t) {
      this.loop = t;
    }, ht.prototype.setVolume = function(t, e) {
      e && this.name !== e || this.audioController.setVolume(t);
    }, ht.prototype.getVolume = function() {
      return this.audioController.getVolume();
    }, ht.prototype.mute = function(t) {
      t && this.name !== t || this.audioController.mute();
    }, ht.prototype.unmute = function(t) {
      t && this.name !== t || this.audioController.unmute();
    }, ht.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
    }, ht.prototype.getPath = function() {
      return this.path;
    }, ht.prototype.getAssetsPath = function(t) {
      var e = "";
      if (t.e)
        e = t.p;
      else if (this.assetsPath) {
        var i = t.p;
        i.indexOf("images/") !== -1 && (i = i.split("/")[1]), e = this.assetsPath + i;
      } else
        e = this.path, e += t.u ? t.u : "", e += t.p;
      return e;
    }, ht.prototype.getAssetData = function(t) {
      for (var e = 0, i = this.assets.length; e < i; ) {
        if (t === this.assets[e].id)
          return this.assets[e];
        e += 1;
      }
      return null;
    }, ht.prototype.hide = function() {
      this.renderer.hide();
    }, ht.prototype.show = function() {
      this.renderer.show();
    }, ht.prototype.getDuration = function(t) {
      return t ? this.totalFrames : this.totalFrames / this.frameRate;
    }, ht.prototype.updateDocumentData = function(t, e, i) {
      try {
        var s = this.renderer.getElementByPath(t);
        s.updateDocumentData(e, i);
      } catch {
      }
    }, ht.prototype.trigger = function(t) {
      if (this._cbs && this._cbs[t])
        switch (t) {
          case "enterFrame":
            this.triggerEvent(t, new Dt(t, this.currentFrame, this.totalFrames, this.frameModifier));
            break;
          case "drawnFrame":
            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
            break;
          case "loopComplete":
            this.triggerEvent(t, new Ii(t, this.loop, this.playCount, this.frameMult));
            break;
          case "complete":
            this.triggerEvent(t, new Oe(t, this.frameMult));
            break;
          case "segmentStart":
            this.triggerEvent(t, new We(t, this.firstFrame, this.totalFrames));
            break;
          case "destroy":
            this.triggerEvent(t, new Li(t, this));
            break;
          default:
            this.triggerEvent(t);
        }
      t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new Dt(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new Ii(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new Oe(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new We(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new Li(t, this));
    }, ht.prototype.triggerRenderFrameError = function(t) {
      var e = new Ke(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    }, ht.prototype.triggerConfigError = function(t) {
      var e = new Fi(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    };
    var Wt = function() {
      var t = {}, e = [], i = 0, s = 0, a = 0, o = !0, c = !1;
      function b(w) {
        for (var M = 0, f = w.target; M < s; )
          e[M].animation === f && (e.splice(M, 1), M -= 1, s -= 1, f.isPaused || V()), M += 1;
      }
      function u(w, M) {
        if (!w)
          return null;
        for (var f = 0; f < s; ) {
          if (e[f].elem === w && e[f].elem !== null)
            return e[f].animation;
          f += 1;
        }
        var d = new ht();
        return v(d, w), d.setData(w, M), d;
      }
      function T() {
        var w, M = e.length, f = [];
        for (w = 0; w < M; w += 1)
          f.push(e[w].animation);
        return f;
      }
      function C() {
        a += 1, mt();
      }
      function V() {
        a -= 1;
      }
      function v(w, M) {
        w.addEventListener("destroy", b), w.addEventListener("_active", C), w.addEventListener("_idle", V), e.push({
          elem: M,
          animation: w
        }), s += 1;
      }
      function E(w) {
        var M = new ht();
        return v(M, null), M.setParams(w), M;
      }
      function L(w, M) {
        var f;
        for (f = 0; f < s; f += 1)
          e[f].animation.setSpeed(w, M);
      }
      function P(w, M) {
        var f;
        for (f = 0; f < s; f += 1)
          e[f].animation.setDirection(w, M);
      }
      function N(w) {
        var M;
        for (M = 0; M < s; M += 1)
          e[M].animation.play(w);
      }
      function S(w) {
        var M = w - i, f;
        for (f = 0; f < s; f += 1)
          e[f].animation.advanceTime(M);
        i = w, a && !c ? window.requestAnimationFrame(S) : o = !0;
      }
      function x(w) {
        i = w, window.requestAnimationFrame(S);
      }
      function m(w) {
        var M;
        for (M = 0; M < s; M += 1)
          e[M].animation.pause(w);
      }
      function _(w, M, f) {
        var d;
        for (d = 0; d < s; d += 1)
          e[d].animation.goToAndStop(w, M, f);
      }
      function A(w) {
        var M;
        for (M = 0; M < s; M += 1)
          e[M].animation.stop(w);
      }
      function F(w) {
        var M;
        for (M = 0; M < s; M += 1)
          e[M].animation.togglePause(w);
      }
      function B(w) {
        var M;
        for (M = s - 1; M >= 0; M -= 1)
          e[M].animation.destroy(w);
      }
      function j(w, M, f) {
        var d = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), $, R = d.length;
        for ($ = 0; $ < R; $ += 1)
          f && d[$].setAttribute("data-bm-type", f), u(d[$], w);
        if (M && R === 0) {
          f || (f = "svg");
          var it = document.getElementsByTagName("body")[0];
          it.innerText = "";
          var pt = W("div");
          pt.style.width = "100%", pt.style.height = "100%", pt.setAttribute("data-bm-type", f), it.appendChild(pt), u(pt, w);
        }
      }
      function X() {
        var w;
        for (w = 0; w < s; w += 1)
          e[w].animation.resize();
      }
      function mt() {
        !c && a && o && (window.requestAnimationFrame(x), o = !1);
      }
      function ft() {
        c = !0;
      }
      function J() {
        c = !1, mt();
      }
      function vt(w, M) {
        var f;
        for (f = 0; f < s; f += 1)
          e[f].animation.setVolume(w, M);
      }
      function st(w) {
        var M;
        for (M = 0; M < s; M += 1)
          e[M].animation.mute(w);
      }
      function Y(w) {
        var M;
        for (M = 0; M < s; M += 1)
          e[M].animation.unmute(w);
      }
      return t.registerAnimation = u, t.loadAnimation = E, t.setSpeed = L, t.setDirection = P, t.play = N, t.pause = m, t.stop = A, t.togglePause = F, t.searchAnimations = j, t.resize = X, t.goToAndStop = _, t.destroy = B, t.freeze = ft, t.unfreeze = J, t.setVolume = vt, t.mute = st, t.unmute = Y, t.getRegisteredAnimations = T, t;
    }(), ai = function() {
      var t = {};
      t.getBezierEasing = i;
      var e = {};
      function i(x, m, _, A, F) {
        var B = F || ("bez_" + x + "_" + m + "_" + _ + "_" + A).replace(/\./g, "p");
        if (e[B])
          return e[B];
        var j = new S([x, m, _, A]);
        return e[B] = j, j;
      }
      var s = 4, a = 1e-3, o = 1e-7, c = 10, b = 11, u = 1 / (b - 1), T = typeof Float32Array == "function";
      function C(x, m) {
        return 1 - 3 * m + 3 * x;
      }
      function V(x, m) {
        return 3 * m - 6 * x;
      }
      function v(x) {
        return 3 * x;
      }
      function E(x, m, _) {
        return ((C(m, _) * x + V(m, _)) * x + v(m)) * x;
      }
      function L(x, m, _) {
        return 3 * C(m, _) * x * x + 2 * V(m, _) * x + v(m);
      }
      function P(x, m, _, A, F) {
        var B, j, X = 0;
        do
          j = m + (_ - m) / 2, B = E(j, A, F) - x, B > 0 ? _ = j : m = j;
        while (Math.abs(B) > o && ++X < c);
        return j;
      }
      function N(x, m, _, A) {
        for (var F = 0; F < s; ++F) {
          var B = L(m, _, A);
          if (B === 0) return m;
          var j = E(m, _, A) - x;
          m -= j / B;
        }
        return m;
      }
      function S(x) {
        this._p = x, this._mSampleValues = T ? new Float32Array(b) : new Array(b), this._precomputed = !1, this.get = this.get.bind(this);
      }
      return S.prototype = {
        get: function(m) {
          var _ = this._p[0], A = this._p[1], F = this._p[2], B = this._p[3];
          return this._precomputed || this._precompute(), _ === A && F === B ? m : m === 0 ? 0 : m === 1 ? 1 : E(this._getTForX(m), A, B);
        },
        // Private part
        _precompute: function() {
          var m = this._p[0], _ = this._p[1], A = this._p[2], F = this._p[3];
          this._precomputed = !0, (m !== _ || A !== F) && this._calcSampleValues();
        },
        _calcSampleValues: function() {
          for (var m = this._p[0], _ = this._p[2], A = 0; A < b; ++A)
            this._mSampleValues[A] = E(A * u, m, _);
        },
        /**
             * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
             */
        _getTForX: function(m) {
          for (var _ = this._p[0], A = this._p[2], F = this._mSampleValues, B = 0, j = 1, X = b - 1; j !== X && F[j] <= m; ++j)
            B += u;
          --j;
          var mt = (m - F[j]) / (F[j + 1] - F[j]), ft = B + mt * u, J = L(ft, _, A);
          return J >= a ? N(m, ft, _, A) : J === 0 ? ft : P(m, B, B + u, _, A);
        }
      }, t;
    }(), nr = /* @__PURE__ */ function() {
      function t(e) {
        return e.concat(rt(e.length));
      }
      return {
        double: t
      };
    }(), we = /* @__PURE__ */ function() {
      return function(t, e, i) {
        var s = 0, a = t, o = rt(a), c = {
          newElement: b,
          release: u
        };
        function b() {
          var T;
          return s ? (s -= 1, T = o[s]) : T = e(), T;
        }
        function u(T) {
          s === a && (o = nr.double(o), a *= 2), i && i(T), o[s] = T, s += 1;
        }
        return c;
      };
    }(), ke = function() {
      function t() {
        return {
          addedLength: 0,
          percents: at("float32", Oi()),
          lengths: at("float32", Oi())
        };
      }
      return we(8, t);
    }(), Ae = function() {
      function t() {
        return {
          lengths: [],
          totalLength: 0
        };
      }
      function e(i) {
        var s, a = i.lengths.length;
        for (s = 0; s < a; s += 1)
          ke.release(i.lengths[s]);
        i.lengths.length = 0;
      }
      return we(8, t, e);
    }();
    function Ni() {
      var t = Math;
      function e(v, E, L, P, N, S) {
        var x = v * P + E * N + L * S - N * P - S * v - L * E;
        return x > -1e-3 && x < 1e-3;
      }
      function i(v, E, L, P, N, S, x, m, _) {
        if (L === 0 && S === 0 && _ === 0)
          return e(v, E, P, N, x, m);
        var A = t.sqrt(t.pow(P - v, 2) + t.pow(N - E, 2) + t.pow(S - L, 2)), F = t.sqrt(t.pow(x - v, 2) + t.pow(m - E, 2) + t.pow(_ - L, 2)), B = t.sqrt(t.pow(x - P, 2) + t.pow(m - N, 2) + t.pow(_ - S, 2)), j;
        return A > F ? A > B ? j = A - F - B : j = B - F - A : B > F ? j = B - F - A : j = F - A - B, j > -1e-4 && j < 1e-4;
      }
      var s = /* @__PURE__ */ function() {
        return function(v, E, L, P) {
          var N = Oi(), S, x, m, _, A, F = 0, B, j = [], X = [], mt = ke.newElement();
          for (m = L.length, S = 0; S < N; S += 1) {
            for (A = S / (N - 1), B = 0, x = 0; x < m; x += 1)
              _ = zt(1 - A, 3) * v[x] + 3 * zt(1 - A, 2) * A * L[x] + 3 * (1 - A) * zt(A, 2) * P[x] + zt(A, 3) * E[x], j[x] = _, X[x] !== null && (B += zt(j[x] - X[x], 2)), X[x] = j[x];
            B && (B = Ut(B), F += B), mt.percents[S] = A, mt.lengths[S] = F;
          }
          return mt.addedLength = F, mt;
        };
      }();
      function a(v) {
        var E = Ae.newElement(), L = v.c, P = v.v, N = v.o, S = v.i, x, m = v._length, _ = E.lengths, A = 0;
        for (x = 0; x < m - 1; x += 1)
          _[x] = s(P[x], P[x + 1], N[x], S[x + 1]), A += _[x].addedLength;
        return L && m && (_[x] = s(P[x], P[0], N[x], S[0]), A += _[x].addedLength), E.totalLength = A, E;
      }
      function o(v) {
        this.segmentLength = 0, this.points = new Array(v);
      }
      function c(v, E) {
        this.partialLength = v, this.point = E;
      }
      var b = /* @__PURE__ */ function() {
        var v = {};
        return function(E, L, P, N) {
          var S = (E[0] + "_" + E[1] + "_" + L[0] + "_" + L[1] + "_" + P[0] + "_" + P[1] + "_" + N[0] + "_" + N[1]).replace(/\./g, "p");
          if (!v[S]) {
            var x = Oi(), m, _, A, F, B, j = 0, X, mt, ft = null;
            E.length === 2 && (E[0] !== L[0] || E[1] !== L[1]) && e(E[0], E[1], L[0], L[1], E[0] + P[0], E[1] + P[1]) && e(E[0], E[1], L[0], L[1], L[0] + N[0], L[1] + N[1]) && (x = 2);
            var J = new o(x);
            for (A = P.length, m = 0; m < x; m += 1) {
              for (mt = rt(A), B = m / (x - 1), X = 0, _ = 0; _ < A; _ += 1)
                F = zt(1 - B, 3) * E[_] + 3 * zt(1 - B, 2) * B * (E[_] + P[_]) + 3 * (1 - B) * zt(B, 2) * (L[_] + N[_]) + zt(B, 3) * L[_], mt[_] = F, ft !== null && (X += zt(mt[_] - ft[_], 2));
              X = Ut(X), j += X, J.points[m] = new c(X, mt), ft = mt;
            }
            J.segmentLength = j, v[S] = J;
          }
          return v[S];
        };
      }();
      function u(v, E) {
        var L = E.percents, P = E.lengths, N = L.length, S = Ht((N - 1) * v), x = v * E.addedLength, m = 0;
        if (S === N - 1 || S === 0 || x === P[S])
          return L[S];
        for (var _ = P[S] > x ? -1 : 1, A = !0; A; )
          if (P[S] <= x && P[S + 1] > x ? (m = (x - P[S]) / (P[S + 1] - P[S]), A = !1) : S += _, S < 0 || S >= N - 1) {
            if (S === N - 1)
              return L[S];
            A = !1;
          }
        return L[S] + (L[S + 1] - L[S]) * m;
      }
      function T(v, E, L, P, N, S) {
        var x = u(N, S), m = 1 - x, _ = t.round((m * m * m * v[0] + (x * m * m + m * x * m + m * m * x) * L[0] + (x * x * m + m * x * x + x * m * x) * P[0] + x * x * x * E[0]) * 1e3) / 1e3, A = t.round((m * m * m * v[1] + (x * m * m + m * x * m + m * m * x) * L[1] + (x * x * m + m * x * x + x * m * x) * P[1] + x * x * x * E[1]) * 1e3) / 1e3;
        return [_, A];
      }
      var C = at("float32", 8);
      function V(v, E, L, P, N, S, x) {
        N < 0 ? N = 0 : N > 1 && (N = 1);
        var m = u(N, x);
        S = S > 1 ? 1 : S;
        var _ = u(S, x), A, F = v.length, B = 1 - m, j = 1 - _, X = B * B * B, mt = m * B * B * 3, ft = m * m * B * 3, J = m * m * m, vt = B * B * j, st = m * B * j + B * m * j + B * B * _, Y = m * m * j + B * m * _ + m * B * _, w = m * m * _, M = B * j * j, f = m * j * j + B * _ * j + B * j * _, d = m * _ * j + B * _ * _ + m * j * _, $ = m * _ * _, R = j * j * j, it = _ * j * j + j * _ * j + j * j * _, pt = _ * _ * j + j * _ * _ + _ * j * _, gt = _ * _ * _;
        for (A = 0; A < F; A += 1)
          C[A * 4] = t.round((X * v[A] + mt * L[A] + ft * P[A] + J * E[A]) * 1e3) / 1e3, C[A * 4 + 1] = t.round((vt * v[A] + st * L[A] + Y * P[A] + w * E[A]) * 1e3) / 1e3, C[A * 4 + 2] = t.round((M * v[A] + f * L[A] + d * P[A] + $ * E[A]) * 1e3) / 1e3, C[A * 4 + 3] = t.round((R * v[A] + it * L[A] + pt * P[A] + gt * E[A]) * 1e3) / 1e3;
        return C;
      }
      return {
        getSegmentsLength: a,
        getNewSegment: V,
        getPointInSegment: T,
        buildBezierData: b,
        pointOnLine2D: e,
        pointOnLine3D: i
      };
    }
    var le = Ni(), Se = p, zi = Math.abs;
    function ei(t, e) {
      var i = this.offsetTime, s;
      this.propType === "multidimensional" && (s = at("float32", this.pv.length));
      for (var a = e.lastIndex, o = a, c = this.keyframes.length - 1, b = !0, u, T, C; b; ) {
        if (u = this.keyframes[o], T = this.keyframes[o + 1], o === c - 1 && t >= T.t - i) {
          u.h && (u = T), a = 0;
          break;
        }
        if (T.t - i > t) {
          a = o;
          break;
        }
        o < c - 1 ? o += 1 : (a = 0, b = !1);
      }
      C = this.keyframesMetadata[o] || {};
      var V, v, E, L, P, N, S = T.t - i, x = u.t - i, m;
      if (u.to) {
        C.bezierData || (C.bezierData = le.buildBezierData(u.s, T.s || u.e, u.to, u.ti));
        var _ = C.bezierData;
        if (t >= S || t < x) {
          var A = t >= S ? _.points.length - 1 : 0;
          for (v = _.points[A].point.length, V = 0; V < v; V += 1)
            s[V] = _.points[A].point[V];
        } else {
          C.__fnct ? N = C.__fnct : (N = ai.getBezierEasing(u.o.x, u.o.y, u.i.x, u.i.y, u.n).get, C.__fnct = N), E = N((t - x) / (S - x));
          var F = _.segmentLength * E, B, j = e.lastFrame < t && e._lastKeyframeIndex === o ? e._lastAddedLength : 0;
          for (P = e.lastFrame < t && e._lastKeyframeIndex === o ? e._lastPoint : 0, b = !0, L = _.points.length; b; ) {
            if (j += _.points[P].partialLength, F === 0 || E === 0 || P === _.points.length - 1) {
              for (v = _.points[P].point.length, V = 0; V < v; V += 1)
                s[V] = _.points[P].point[V];
              break;
            } else if (F >= j && F < j + _.points[P + 1].partialLength) {
              for (B = (F - j) / _.points[P + 1].partialLength, v = _.points[P].point.length, V = 0; V < v; V += 1)
                s[V] = _.points[P].point[V] + (_.points[P + 1].point[V] - _.points[P].point[V]) * B;
              break;
            }
            P < L - 1 ? P += 1 : b = !1;
          }
          e._lastPoint = P, e._lastAddedLength = j - _.points[P].partialLength, e._lastKeyframeIndex = o;
        }
      } else {
        var X, mt, ft, J, vt;
        if (c = u.s.length, m = T.s || u.e, this.sh && u.h !== 1)
          if (t >= S)
            s[0] = m[0], s[1] = m[1], s[2] = m[2];
          else if (t <= x)
            s[0] = u.s[0], s[1] = u.s[1], s[2] = u.s[2];
          else {
            var st = Bi(u.s), Y = Bi(m), w = (t - x) / (S - x);
            _i(s, Di(st, Y, w));
          }
        else
          for (o = 0; o < c; o += 1)
            u.h !== 1 && (t >= S ? E = 1 : t < x ? E = 0 : (u.o.x.constructor === Array ? (C.__fnct || (C.__fnct = []), C.__fnct[o] ? N = C.__fnct[o] : (X = u.o.x[o] === void 0 ? u.o.x[0] : u.o.x[o], mt = u.o.y[o] === void 0 ? u.o.y[0] : u.o.y[o], ft = u.i.x[o] === void 0 ? u.i.x[0] : u.i.x[o], J = u.i.y[o] === void 0 ? u.i.y[0] : u.i.y[o], N = ai.getBezierEasing(X, mt, ft, J).get, C.__fnct[o] = N)) : C.__fnct ? N = C.__fnct : (X = u.o.x, mt = u.o.y, ft = u.i.x, J = u.i.y, N = ai.getBezierEasing(X, mt, ft, J).get, u.keyframeMetadata = N), E = N((t - x) / (S - x)))), m = T.s || u.e, vt = u.h === 1 ? u.s[o] : u.s[o] + (m[o] - u.s[o]) * E, this.propType === "multidimensional" ? s[o] = vt : s = vt;
      }
      return e.lastIndex = a, s;
    }
    function Di(t, e, i) {
      var s = [], a = t[0], o = t[1], c = t[2], b = t[3], u = e[0], T = e[1], C = e[2], V = e[3], v, E, L, P, N;
      return E = a * u + o * T + c * C + b * V, E < 0 && (E = -E, u = -u, T = -T, C = -C, V = -V), 1 - E > 1e-6 ? (v = Math.acos(E), L = Math.sin(v), P = Math.sin((1 - i) * v) / L, N = Math.sin(i * v) / L) : (P = 1 - i, N = i), s[0] = P * a + N * u, s[1] = P * o + N * T, s[2] = P * c + N * C, s[3] = P * b + N * V, s;
    }
    function _i(t, e) {
      var i = e[0], s = e[1], a = e[2], o = e[3], c = Math.atan2(2 * s * o - 2 * i * a, 1 - 2 * s * s - 2 * a * a), b = Math.asin(2 * i * s + 2 * a * o), u = Math.atan2(2 * i * o - 2 * s * a, 1 - 2 * i * i - 2 * a * a);
      t[0] = c / Pt, t[1] = b / Pt, t[2] = u / Pt;
    }
    function Bi(t) {
      var e = t[0] * Pt, i = t[1] * Pt, s = t[2] * Pt, a = Math.cos(e / 2), o = Math.cos(i / 2), c = Math.cos(s / 2), b = Math.sin(e / 2), u = Math.sin(i / 2), T = Math.sin(s / 2), C = a * o * c - b * u * T, V = b * u * c + a * o * T, v = b * o * c + a * u * T, E = a * u * c - b * o * T;
      return [V, v, E, C];
    }
    function q() {
      var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      if (!(t === this._caching.lastFrame || this._caching.lastFrame !== Se && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
        var s = this.interpolateValue(t, this._caching);
        this.pv = s;
      }
      return this._caching.lastFrame = t, this.pv;
    }
    function ct(t) {
      var e;
      if (this.propType === "unidimensional")
        e = t * this.mult, zi(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
      else
        for (var i = 0, s = this.v.length; i < s; )
          e = t[i] * this.mult, zi(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0), i += 1;
    }
    function _t() {
      if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
        if (this.lock) {
          this.setVValue(this.pv);
          return;
        }
        this.lock = !0, this._mdf = this._isFirstFrame;
        var t, e = this.effectsSequence.length, i = this.kf ? this.pv : this.data.k;
        for (t = 0; t < e; t += 1)
          i = this.effectsSequence[t](i);
        this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }
    function wt(t) {
      this.effectsSequence.push(t), this.container.addDynamicProperty(this);
    }
    function re(t, e, i, s) {
      this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = _t, this.setVValue = ct, this.addEffect = wt;
    }
    function se(t, e, i, s) {
      this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = s, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
      var a, o = e.k.length;
      for (this.v = at("float32", o), this.pv = at("float32", o), this.vel = at("float32", o), a = 0; a < o; a += 1)
        this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
      this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = _t, this.setVValue = ct, this.addEffect = wt;
    }
    function Vi(t, e, i, s) {
      this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
        lastFrame: Se,
        lastIndex: 0,
        value: 0,
        _lastKeyframeIndex: -1
      }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.v = Se, this.pv = Se, this._isFirstFrame = !0, this.getValue = _t, this.setVValue = ct, this.interpolateValue = ei, this.effectsSequence = [q.bind(this)], this.addEffect = wt;
    }
    function qt(t, e, i, s) {
      this.propType = "multidimensional";
      var a, o = e.k.length, c, b, u, T;
      for (a = 0; a < o - 1; a += 1)
        e.k[a].to && e.k[a].s && e.k[a + 1] && e.k[a + 1].s && (c = e.k[a].s, b = e.k[a + 1].s, u = e.k[a].to, T = e.k[a].ti, (c.length === 2 && !(c[0] === b[0] && c[1] === b[1]) && le.pointOnLine2D(c[0], c[1], b[0], b[1], c[0] + u[0], c[1] + u[1]) && le.pointOnLine2D(c[0], c[1], b[0], b[1], b[0] + T[0], b[1] + T[1]) || c.length === 3 && !(c[0] === b[0] && c[1] === b[1] && c[2] === b[2]) && le.pointOnLine3D(c[0], c[1], c[2], b[0], b[1], b[2], c[0] + u[0], c[1] + u[1], c[2] + u[2]) && le.pointOnLine3D(c[0], c[1], c[2], b[0], b[1], b[2], b[0] + T[0], b[1] + T[1], b[2] + T[2])) && (e.k[a].to = null, e.k[a].ti = null), c[0] === b[0] && c[1] === b[1] && u[0] === 0 && u[1] === 0 && T[0] === 0 && T[1] === 0 && (c.length === 2 || c[2] === b[2] && u[2] === 0 && T[2] === 0) && (e.k[a].to = null, e.k[a].ti = null));
      this.effectsSequence = [q.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = s, this.comp = t.comp, this.getValue = _t, this.setVValue = ct, this.interpolateValue = ei, this.frameId = -1;
      var C = e.k[0].s.length;
      for (this.v = at("float32", C), this.pv = at("float32", C), a = 0; a < C; a += 1)
        this.v[a] = Se, this.pv[a] = Se;
      this._caching = {
        lastFrame: Se,
        lastIndex: 0,
        value: at("float32", C)
      }, this.addEffect = wt;
    }
    var Q = /* @__PURE__ */ function() {
      function t(i, s, a, o, c) {
        s.sid && (s = i.globalData.slotManager.getProp(s));
        var b;
        if (!s.k.length)
          b = new re(i, s, o, c);
        else if (typeof s.k[0] == "number")
          b = new se(i, s, o, c);
        else
          switch (a) {
            case 0:
              b = new Vi(i, s, o, c);
              break;
            case 1:
              b = new qt(i, s, o, c);
              break;
          }
        return b.effectsSequence.length && c.addDynamicProperty(b), b;
      }
      var e = {
        getProp: t
      };
      return e;
    }();
    function Bt() {
    }
    Bt.prototype = {
      addDynamicProperty: function(e) {
        this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0);
      },
      iterateDynamicProperties: function() {
        this._mdf = !1;
        var e, i = this.dynamicProperties.length;
        for (e = 0; e < i; e += 1)
          this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0);
      },
      initDynamicPropertyContainer: function(e) {
        this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
      }
    };
    var Ce = function() {
      function t() {
        return at("float32", 2);
      }
      return we(8, t);
    }();
    function ve() {
      this.c = !1, this._length = 0, this._maxLength = 8, this.v = rt(this._maxLength), this.o = rt(this._maxLength), this.i = rt(this._maxLength);
    }
    ve.prototype.setPathData = function(t, e) {
      this.c = t, this.setLength(e);
      for (var i = 0; i < e; )
        this.v[i] = Ce.newElement(), this.o[i] = Ce.newElement(), this.i[i] = Ce.newElement(), i += 1;
    }, ve.prototype.setLength = function(t) {
      for (; this._maxLength < t; )
        this.doubleArrayLength();
      this._length = t;
    }, ve.prototype.doubleArrayLength = function() {
      this.v = this.v.concat(rt(this._maxLength)), this.i = this.i.concat(rt(this._maxLength)), this.o = this.o.concat(rt(this._maxLength)), this._maxLength *= 2;
    }, ve.prototype.setXYAt = function(t, e, i, s, a) {
      var o;
      switch (this._length = Math.max(this._length, s + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
        case "v":
          o = this.v;
          break;
        case "i":
          o = this.i;
          break;
        case "o":
          o = this.o;
          break;
        default:
          o = [];
          break;
      }
      (!o[s] || o[s] && !a) && (o[s] = Ce.newElement()), o[s][0] = t, o[s][1] = e;
    }, ve.prototype.setTripleAt = function(t, e, i, s, a, o, c, b) {
      this.setXYAt(t, e, "v", c, b), this.setXYAt(i, s, "o", c, b), this.setXYAt(a, o, "i", c, b);
    }, ve.prototype.reverse = function() {
      var t = new ve();
      t.setPathData(this.c, this._length);
      var e = this.v, i = this.o, s = this.i, a = 0;
      this.c && (t.setTripleAt(e[0][0], e[0][1], s[0][0], s[0][1], i[0][0], i[0][1], 0, !1), a = 1);
      var o = this._length - 1, c = this._length, b;
      for (b = a; b < c; b += 1)
        t.setTripleAt(e[o][0], e[o][1], s[o][0], s[o][1], i[o][0], i[o][1], b, !1), o -= 1;
      return t;
    }, ve.prototype.length = function() {
      return this._length;
    };
    var Yt = function() {
      function t() {
        return new ve();
      }
      function e(a) {
        var o = a._length, c;
        for (c = 0; c < o; c += 1)
          Ce.release(a.v[c]), Ce.release(a.i[c]), Ce.release(a.o[c]), a.v[c] = null, a.i[c] = null, a.o[c] = null;
        a._length = 0, a.c = !1;
      }
      function i(a) {
        var o = s.newElement(), c, b = a._length === void 0 ? a.v.length : a._length;
        for (o.setLength(b), o.c = a.c, c = 0; c < b; c += 1)
          o.setTripleAt(a.v[c][0], a.v[c][1], a.o[c][0], a.o[c][1], a.i[c][0], a.i[c][1], c);
        return o;
      }
      var s = we(4, t, e);
      return s.clone = i, s;
    }();
    function Ee() {
      this._length = 0, this._maxLength = 4, this.shapes = rt(this._maxLength);
    }
    Ee.prototype.addShape = function(t) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(rt(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
    }, Ee.prototype.releaseShapes = function() {
      var t;
      for (t = 0; t < this._length; t += 1)
        Yt.release(this.shapes[t]);
      this._length = 0;
    };
    var ze = function() {
      var t = {
        newShapeCollection: a,
        release: o
      }, e = 0, i = 4, s = rt(i);
      function a() {
        var c;
        return e ? (e -= 1, c = s[e]) : c = new Ee(), c;
      }
      function o(c) {
        var b, u = c._length;
        for (b = 0; b < u; b += 1)
          Yt.release(c.shapes[b]);
        c._length = 0, e === i && (s = nr.double(s), i *= 2), s[e] = c, e += 1;
      }
      return t;
    }(), $i = function() {
      var t = -999999;
      function e(S, x, m) {
        var _ = m.lastIndex, A, F, B, j, X, mt, ft, J, vt, st = this.keyframes;
        if (S < st[0].t - this.offsetTime)
          A = st[0].s[0], B = !0, _ = 0;
        else if (S >= st[st.length - 1].t - this.offsetTime)
          A = st[st.length - 1].s ? st[st.length - 1].s[0] : st[st.length - 2].e[0], B = !0;
        else {
          for (var Y = _, w = st.length - 1, M = !0, f, d, $; M && (f = st[Y], d = st[Y + 1], !(d.t - this.offsetTime > S)); )
            Y < w - 1 ? Y += 1 : M = !1;
          if ($ = this.keyframesMetadata[Y] || {}, B = f.h === 1, _ = Y, !B) {
            if (S >= d.t - this.offsetTime)
              J = 1;
            else if (S < f.t - this.offsetTime)
              J = 0;
            else {
              var R;
              $.__fnct ? R = $.__fnct : (R = ai.getBezierEasing(f.o.x, f.o.y, f.i.x, f.i.y).get, $.__fnct = R), J = R((S - (f.t - this.offsetTime)) / (d.t - this.offsetTime - (f.t - this.offsetTime)));
            }
            F = d.s ? d.s[0] : f.e[0];
          }
          A = f.s[0];
        }
        for (mt = x._length, ft = A.i[0].length, m.lastIndex = _, j = 0; j < mt; j += 1)
          for (X = 0; X < ft; X += 1)
            vt = B ? A.i[j][X] : A.i[j][X] + (F.i[j][X] - A.i[j][X]) * J, x.i[j][X] = vt, vt = B ? A.o[j][X] : A.o[j][X] + (F.o[j][X] - A.o[j][X]) * J, x.o[j][X] = vt, vt = B ? A.v[j][X] : A.v[j][X] + (F.v[j][X] - A.v[j][X]) * J, x.v[j][X] = vt;
      }
      function i() {
        var S = this.comp.renderedFrame - this.offsetTime, x = this.keyframes[0].t - this.offsetTime, m = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, _ = this._caching.lastFrame;
        return _ !== t && (_ < x && S < x || _ > m && S > m) || (this._caching.lastIndex = _ < S ? this._caching.lastIndex : 0, this.interpolateShape(S, this.pv, this._caching)), this._caching.lastFrame = S, this.pv;
      }
      function s() {
        this.paths = this.localShapeCollection;
      }
      function a(S, x) {
        if (S._length !== x._length || S.c !== x.c)
          return !1;
        var m, _ = S._length;
        for (m = 0; m < _; m += 1)
          if (S.v[m][0] !== x.v[m][0] || S.v[m][1] !== x.v[m][1] || S.o[m][0] !== x.o[m][0] || S.o[m][1] !== x.o[m][1] || S.i[m][0] !== x.i[m][0] || S.i[m][1] !== x.i[m][1])
            return !1;
        return !0;
      }
      function o(S) {
        a(this.v, S) || (this.v = Yt.clone(S), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
      }
      function c() {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (!this.effectsSequence.length) {
            this._mdf = !1;
            return;
          }
          if (this.lock) {
            this.setVValue(this.pv);
            return;
          }
          this.lock = !0, this._mdf = !1;
          var S;
          this.kf ? S = this.pv : this.data.ks ? S = this.data.ks.k : S = this.data.pt.k;
          var x, m = this.effectsSequence.length;
          for (x = 0; x < m; x += 1)
            S = this.effectsSequence[x](S);
          this.setVValue(S), this.lock = !1, this.frameId = this.elem.globalData.frameId;
        }
      }
      function b(S, x, m) {
        this.propType = "shape", this.comp = S.comp, this.container = S, this.elem = S, this.data = x, this.k = !1, this.kf = !1, this._mdf = !1;
        var _ = m === 3 ? x.pt.k : x.ks.k;
        this.v = Yt.clone(_), this.pv = Yt.clone(this.v), this.localShapeCollection = ze.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = s, this.effectsSequence = [];
      }
      function u(S) {
        this.effectsSequence.push(S), this.container.addDynamicProperty(this);
      }
      b.prototype.interpolateShape = e, b.prototype.getValue = c, b.prototype.setVValue = o, b.prototype.addEffect = u;
      function T(S, x, m) {
        this.propType = "shape", this.comp = S.comp, this.elem = S, this.container = S, this.offsetTime = S.data.st, this.keyframes = m === 3 ? x.pt.k : x.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
        var _ = this.keyframes[0].s[0].i.length;
        this.v = Yt.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, _), this.pv = Yt.clone(this.v), this.localShapeCollection = ze.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = s, this._caching = {
          lastFrame: t,
          lastIndex: 0
        }, this.effectsSequence = [i.bind(this)];
      }
      T.prototype.getValue = c, T.prototype.interpolateShape = e, T.prototype.setVValue = o, T.prototype.addEffect = u;
      var C = function() {
        var S = kt;
        function x(m, _) {
          this.v = Yt.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = ze.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = _.d, this.elem = m, this.comp = m.comp, this.frameId = -1, this.initDynamicPropertyContainer(m), this.p = Q.getProp(m, _.p, 1, 0, this), this.s = Q.getProp(m, _.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
        }
        return x.prototype = {
          reset: s,
          getValue: function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
          },
          convertEllToPath: function() {
            var _ = this.p.v[0], A = this.p.v[1], F = this.s.v[0] / 2, B = this.s.v[1] / 2, j = this.d !== 3, X = this.v;
            X.v[0][0] = _, X.v[0][1] = A - B, X.v[1][0] = j ? _ + F : _ - F, X.v[1][1] = A, X.v[2][0] = _, X.v[2][1] = A + B, X.v[3][0] = j ? _ - F : _ + F, X.v[3][1] = A, X.i[0][0] = j ? _ - F * S : _ + F * S, X.i[0][1] = A - B, X.i[1][0] = j ? _ + F : _ - F, X.i[1][1] = A - B * S, X.i[2][0] = j ? _ + F * S : _ - F * S, X.i[2][1] = A + B, X.i[3][0] = j ? _ - F : _ + F, X.i[3][1] = A + B * S, X.o[0][0] = j ? _ + F * S : _ - F * S, X.o[0][1] = A - B, X.o[1][0] = j ? _ + F : _ - F, X.o[1][1] = A + B * S, X.o[2][0] = j ? _ - F * S : _ + F * S, X.o[2][1] = A + B, X.o[3][0] = j ? _ - F : _ + F, X.o[3][1] = A - B * S;
          }
        }, H([Bt], x), x;
      }(), V = function() {
        function S(x, m) {
          this.v = Yt.newElement(), this.v.setPathData(!0, 0), this.elem = x, this.comp = x.comp, this.data = m, this.frameId = -1, this.d = m.d, this.initDynamicPropertyContainer(x), m.sy === 1 ? (this.ir = Q.getProp(x, m.ir, 0, 0, this), this.is = Q.getProp(x, m.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = Q.getProp(x, m.pt, 0, 0, this), this.p = Q.getProp(x, m.p, 1, 0, this), this.r = Q.getProp(x, m.r, 0, Pt, this), this.or = Q.getProp(x, m.or, 0, 0, this), this.os = Q.getProp(x, m.os, 0, 0.01, this), this.localShapeCollection = ze.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
        }
        return S.prototype = {
          reset: s,
          getValue: function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
          },
          convertStarToPath: function() {
            var m = Math.floor(this.pt.v) * 2, _ = Math.PI * 2 / m, A = !0, F = this.or.v, B = this.ir.v, j = this.os.v, X = this.is.v, mt = 2 * Math.PI * F / (m * 2), ft = 2 * Math.PI * B / (m * 2), J, vt, st, Y, w = -Math.PI / 2;
            w += this.r.v;
            var M = this.data.d === 3 ? -1 : 1;
            for (this.v._length = 0, J = 0; J < m; J += 1) {
              vt = A ? F : B, st = A ? j : X, Y = A ? mt : ft;
              var f = vt * Math.cos(w), d = vt * Math.sin(w), $ = f === 0 && d === 0 ? 0 : d / Math.sqrt(f * f + d * d), R = f === 0 && d === 0 ? 0 : -f / Math.sqrt(f * f + d * d);
              f += +this.p.v[0], d += +this.p.v[1], this.v.setTripleAt(f, d, f - $ * Y * st * M, d - R * Y * st * M, f + $ * Y * st * M, d + R * Y * st * M, J, !0), A = !A, w += _ * M;
            }
          },
          convertPolygonToPath: function() {
            var m = Math.floor(this.pt.v), _ = Math.PI * 2 / m, A = this.or.v, F = this.os.v, B = 2 * Math.PI * A / (m * 4), j, X = -Math.PI * 0.5, mt = this.data.d === 3 ? -1 : 1;
            for (X += this.r.v, this.v._length = 0, j = 0; j < m; j += 1) {
              var ft = A * Math.cos(X), J = A * Math.sin(X), vt = ft === 0 && J === 0 ? 0 : J / Math.sqrt(ft * ft + J * J), st = ft === 0 && J === 0 ? 0 : -ft / Math.sqrt(ft * ft + J * J);
              ft += +this.p.v[0], J += +this.p.v[1], this.v.setTripleAt(ft, J, ft - vt * B * F * mt, J - st * B * F * mt, ft + vt * B * F * mt, J + st * B * F * mt, j, !0), X += _ * mt;
            }
            this.paths.length = 0, this.paths[0] = this.v;
          }
        }, H([Bt], S), S;
      }(), v = function() {
        function S(x, m) {
          this.v = Yt.newElement(), this.v.c = !0, this.localShapeCollection = ze.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = x, this.comp = x.comp, this.frameId = -1, this.d = m.d, this.initDynamicPropertyContainer(x), this.p = Q.getProp(x, m.p, 1, 0, this), this.s = Q.getProp(x, m.s, 1, 0, this), this.r = Q.getProp(x, m.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
        }
        return S.prototype = {
          convertRectToPath: function() {
            var m = this.p.v[0], _ = this.p.v[1], A = this.s.v[0] / 2, F = this.s.v[1] / 2, B = Ue(A, F, this.r.v), j = B * (1 - kt);
            this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(m + A, _ - F + B, m + A, _ - F + B, m + A, _ - F + j, 0, !0), this.v.setTripleAt(m + A, _ + F - B, m + A, _ + F - j, m + A, _ + F - B, 1, !0), B !== 0 ? (this.v.setTripleAt(m + A - B, _ + F, m + A - B, _ + F, m + A - j, _ + F, 2, !0), this.v.setTripleAt(m - A + B, _ + F, m - A + j, _ + F, m - A + B, _ + F, 3, !0), this.v.setTripleAt(m - A, _ + F - B, m - A, _ + F - B, m - A, _ + F - j, 4, !0), this.v.setTripleAt(m - A, _ - F + B, m - A, _ - F + j, m - A, _ - F + B, 5, !0), this.v.setTripleAt(m - A + B, _ - F, m - A + B, _ - F, m - A + j, _ - F, 6, !0), this.v.setTripleAt(m + A - B, _ - F, m + A - j, _ - F, m + A - B, _ - F, 7, !0)) : (this.v.setTripleAt(m - A, _ + F, m - A + j, _ + F, m - A, _ + F, 2), this.v.setTripleAt(m - A, _ - F, m - A, _ - F + j, m - A, _ - F, 3))) : (this.v.setTripleAt(m + A, _ - F + B, m + A, _ - F + j, m + A, _ - F + B, 0, !0), B !== 0 ? (this.v.setTripleAt(m + A - B, _ - F, m + A - B, _ - F, m + A - j, _ - F, 1, !0), this.v.setTripleAt(m - A + B, _ - F, m - A + j, _ - F, m - A + B, _ - F, 2, !0), this.v.setTripleAt(m - A, _ - F + B, m - A, _ - F + B, m - A, _ - F + j, 3, !0), this.v.setTripleAt(m - A, _ + F - B, m - A, _ + F - j, m - A, _ + F - B, 4, !0), this.v.setTripleAt(m - A + B, _ + F, m - A + B, _ + F, m - A + j, _ + F, 5, !0), this.v.setTripleAt(m + A - B, _ + F, m + A - j, _ + F, m + A - B, _ + F, 6, !0), this.v.setTripleAt(m + A, _ + F - B, m + A, _ + F - B, m + A, _ + F - j, 7, !0)) : (this.v.setTripleAt(m - A, _ - F, m - A + j, _ - F, m - A, _ - F, 1, !0), this.v.setTripleAt(m - A, _ + F, m - A, _ + F - j, m - A, _ + F, 2, !0), this.v.setTripleAt(m + A, _ + F, m + A - j, _ + F, m + A, _ + F, 3, !0)));
          },
          getValue: function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
          },
          reset: s
        }, H([Bt], S), S;
      }();
      function E(S, x, m) {
        var _;
        if (m === 3 || m === 4) {
          var A = m === 3 ? x.pt : x.ks, F = A.k;
          F.length ? _ = new T(S, x, m) : _ = new b(S, x, m);
        } else m === 5 ? _ = new v(S, x) : m === 6 ? _ = new C(S, x) : m === 7 && (_ = new V(S, x));
        return _.k && S.addDynamicProperty(_), _;
      }
      function L() {
        return b;
      }
      function P() {
        return T;
      }
      var N = {};
      return N.getShapeProp = E, N.getConstructorFunction = L, N.getKeyframedConstructorFunction = P, N;
    }();
    /*!
     Transformation Matrix v2.0
     (c) Epistemex 2014-2015
     www.epistemex.com
     By Ken Fyrstenberg
     Contributions by leeoniya.
     License: MIT, header required.
     */
    var Qt = /* @__PURE__ */ function() {
      var t = Math.cos, e = Math.sin, i = Math.tan, s = Math.round;
      function a() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function o(f) {
        if (f === 0)
          return this;
        var d = t(f), $ = e(f);
        return this._t(d, -$, 0, 0, $, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function c(f) {
        if (f === 0)
          return this;
        var d = t(f), $ = e(f);
        return this._t(1, 0, 0, 0, 0, d, -$, 0, 0, $, d, 0, 0, 0, 0, 1);
      }
      function b(f) {
        if (f === 0)
          return this;
        var d = t(f), $ = e(f);
        return this._t(d, 0, $, 0, 0, 1, 0, 0, -$, 0, d, 0, 0, 0, 0, 1);
      }
      function u(f) {
        if (f === 0)
          return this;
        var d = t(f), $ = e(f);
        return this._t(d, -$, 0, 0, $, d, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function T(f, d) {
        return this._t(1, d, f, 1, 0, 0);
      }
      function C(f, d) {
        return this.shear(i(f), i(d));
      }
      function V(f, d) {
        var $ = t(d), R = e(d);
        return this._t($, R, 0, 0, -R, $, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(f), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t($, -R, 0, 0, R, $, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function v(f, d, $) {
        return !$ && $ !== 0 && ($ = 1), f === 1 && d === 1 && $ === 1 ? this : this._t(f, 0, 0, 0, 0, d, 0, 0, 0, 0, $, 0, 0, 0, 0, 1);
      }
      function E(f, d, $, R, it, pt, gt, St, Ct, oe, Ie, ci, Le, de, Be, Ot) {
        return this.props[0] = f, this.props[1] = d, this.props[2] = $, this.props[3] = R, this.props[4] = it, this.props[5] = pt, this.props[6] = gt, this.props[7] = St, this.props[8] = Ct, this.props[9] = oe, this.props[10] = Ie, this.props[11] = ci, this.props[12] = Le, this.props[13] = de, this.props[14] = Be, this.props[15] = Ot, this;
      }
      function L(f, d, $) {
        return $ = $ || 0, f !== 0 || d !== 0 || $ !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, f, d, $, 1) : this;
      }
      function P(f, d, $, R, it, pt, gt, St, Ct, oe, Ie, ci, Le, de, Be, Ot) {
        var ot = this.props;
        if (f === 1 && d === 0 && $ === 0 && R === 0 && it === 0 && pt === 1 && gt === 0 && St === 0 && Ct === 0 && oe === 0 && Ie === 1 && ci === 0)
          return ot[12] = ot[12] * f + ot[15] * Le, ot[13] = ot[13] * pt + ot[15] * de, ot[14] = ot[14] * Ie + ot[15] * Be, ot[15] *= Ot, this._identityCalculated = !1, this;
        var Si = ot[0], Zi = ot[1], Ci = ot[2], ui = ot[3], Ei = ot[4], Pi = ot[5], Fe = ot[6], Ki = ot[7], Qi = ot[8], ri = ot[9], Ji = ot[10], si = ot[11], dr = ot[12], gs = ot[13], vs = ot[14], ys = ot[15];
        return ot[0] = Si * f + Zi * it + Ci * Ct + ui * Le, ot[1] = Si * d + Zi * pt + Ci * oe + ui * de, ot[2] = Si * $ + Zi * gt + Ci * Ie + ui * Be, ot[3] = Si * R + Zi * St + Ci * ci + ui * Ot, ot[4] = Ei * f + Pi * it + Fe * Ct + Ki * Le, ot[5] = Ei * d + Pi * pt + Fe * oe + Ki * de, ot[6] = Ei * $ + Pi * gt + Fe * Ie + Ki * Be, ot[7] = Ei * R + Pi * St + Fe * ci + Ki * Ot, ot[8] = Qi * f + ri * it + Ji * Ct + si * Le, ot[9] = Qi * d + ri * pt + Ji * oe + si * de, ot[10] = Qi * $ + ri * gt + Ji * Ie + si * Be, ot[11] = Qi * R + ri * St + Ji * ci + si * Ot, ot[12] = dr * f + gs * it + vs * Ct + ys * Le, ot[13] = dr * d + gs * pt + vs * oe + ys * de, ot[14] = dr * $ + gs * gt + vs * Ie + ys * Be, ot[15] = dr * R + gs * St + vs * ci + ys * Ot, this._identityCalculated = !1, this;
      }
      function N(f) {
        var d = f.props;
        return this.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]);
      }
      function S() {
        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
      }
      function x(f) {
        for (var d = 0; d < 16; ) {
          if (f.props[d] !== this.props[d])
            return !1;
          d += 1;
        }
        return !0;
      }
      function m(f) {
        var d;
        for (d = 0; d < 16; d += 1)
          f.props[d] = this.props[d];
        return f;
      }
      function _(f) {
        var d;
        for (d = 0; d < 16; d += 1)
          this.props[d] = f[d];
      }
      function A(f, d, $) {
        return {
          x: f * this.props[0] + d * this.props[4] + $ * this.props[8] + this.props[12],
          y: f * this.props[1] + d * this.props[5] + $ * this.props[9] + this.props[13],
          z: f * this.props[2] + d * this.props[6] + $ * this.props[10] + this.props[14]
        };
      }
      function F(f, d, $) {
        return f * this.props[0] + d * this.props[4] + $ * this.props[8] + this.props[12];
      }
      function B(f, d, $) {
        return f * this.props[1] + d * this.props[5] + $ * this.props[9] + this.props[13];
      }
      function j(f, d, $) {
        return f * this.props[2] + d * this.props[6] + $ * this.props[10] + this.props[14];
      }
      function X() {
        var f = this.props[0] * this.props[5] - this.props[1] * this.props[4], d = this.props[5] / f, $ = -this.props[1] / f, R = -this.props[4] / f, it = this.props[0] / f, pt = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / f, gt = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / f, St = new Qt();
        return St.props[0] = d, St.props[1] = $, St.props[4] = R, St.props[5] = it, St.props[12] = pt, St.props[13] = gt, St;
      }
      function mt(f) {
        var d = this.getInverseMatrix();
        return d.applyToPointArray(f[0], f[1], f[2] || 0);
      }
      function ft(f) {
        var d, $ = f.length, R = [];
        for (d = 0; d < $; d += 1)
          R[d] = mt(f[d]);
        return R;
      }
      function J(f, d, $) {
        var R = at("float32", 6);
        if (this.isIdentity())
          R[0] = f[0], R[1] = f[1], R[2] = d[0], R[3] = d[1], R[4] = $[0], R[5] = $[1];
        else {
          var it = this.props[0], pt = this.props[1], gt = this.props[4], St = this.props[5], Ct = this.props[12], oe = this.props[13];
          R[0] = f[0] * it + f[1] * gt + Ct, R[1] = f[0] * pt + f[1] * St + oe, R[2] = d[0] * it + d[1] * gt + Ct, R[3] = d[0] * pt + d[1] * St + oe, R[4] = $[0] * it + $[1] * gt + Ct, R[5] = $[0] * pt + $[1] * St + oe;
        }
        return R;
      }
      function vt(f, d, $) {
        var R;
        return this.isIdentity() ? R = [f, d, $] : R = [f * this.props[0] + d * this.props[4] + $ * this.props[8] + this.props[12], f * this.props[1] + d * this.props[5] + $ * this.props[9] + this.props[13], f * this.props[2] + d * this.props[6] + $ * this.props[10] + this.props[14]], R;
      }
      function st(f, d) {
        if (this.isIdentity())
          return f + "," + d;
        var $ = this.props;
        return Math.round((f * $[0] + d * $[4] + $[12]) * 100) / 100 + "," + Math.round((f * $[1] + d * $[5] + $[13]) * 100) / 100;
      }
      function Y() {
        for (var f = 0, d = this.props, $ = "matrix3d(", R = 1e4; f < 16; )
          $ += s(d[f] * R) / R, $ += f === 15 ? ")" : ",", f += 1;
        return $;
      }
      function w(f) {
        var d = 1e4;
        return f < 1e-6 && f > 0 || f > -1e-6 && f < 0 ? s(f * d) / d : f;
      }
      function M() {
        var f = this.props, d = w(f[0]), $ = w(f[1]), R = w(f[4]), it = w(f[5]), pt = w(f[12]), gt = w(f[13]);
        return "matrix(" + d + "," + $ + "," + R + "," + it + "," + pt + "," + gt + ")";
      }
      return function() {
        this.reset = a, this.rotate = o, this.rotateX = c, this.rotateY = b, this.rotateZ = u, this.skew = C, this.skewFromAxis = V, this.shear = T, this.scale = v, this.setTransform = E, this.translate = L, this.transform = P, this.multiply = N, this.applyToPoint = A, this.applyToX = F, this.applyToY = B, this.applyToZ = j, this.applyToPointArray = vt, this.applyToTriplePoints = J, this.applyToPointStringified = st, this.toCSS = Y, this.to2dCSS = M, this.clone = m, this.cloneFromProps = _, this.equals = x, this.inversePoints = ft, this.inversePoint = mt, this.getInverseMatrix = X, this._t = this.transform, this.isIdentity = S, this._identity = !0, this._identityCalculated = !1, this.props = at("float32", 16), this.reset();
      };
    }();
    function zr(t) {
      "@babel/helpers - typeof";
      return zr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, zr(t);
    }
    var At = {};
    function Dr(t) {
      z(t);
    }
    function Br() {
      Wt.searchAnimations();
    }
    function Vr(t) {
      qe(t);
    }
    function Vs(t) {
      rr(t);
    }
    function or(t) {
      return Wt.loadAnimation(t);
    }
    function $s(t) {
      if (typeof t == "string")
        switch (t) {
          case "high":
            Ri(200);
            break;
          default:
          case "medium":
            Ri(50);
            break;
          case "low":
            Ri(10);
            break;
        }
      else !isNaN(t) && t > 1 && Ri(t);
    }
    function js() {
      return typeof navigator < "u";
    }
    function Gt(t, e) {
      t === "expressions" && ir(e);
    }
    function ji(t) {
      switch (t) {
        case "propertyFactory":
          return Q;
        case "shapePropertyFactory":
          return $i;
        case "matrix":
          return Qt;
        default:
          return null;
      }
    }
    At.play = Wt.play, At.pause = Wt.pause, At.setLocationHref = Dr, At.togglePause = Wt.togglePause, At.setSpeed = Wt.setSpeed, At.setDirection = Wt.setDirection, At.stop = Wt.stop, At.searchAnimations = Br, At.registerAnimation = Wt.registerAnimation, At.loadAnimation = or, At.setSubframeRendering = Vr, At.resize = Wt.resize, At.goToAndStop = Wt.goToAndStop, At.destroy = Wt.destroy, At.setQuality = $s, At.inBrowser = js, At.installPlugin = Gt, At.freeze = Wt.freeze, At.unfreeze = Wt.unfreeze, At.setVolume = Wt.setVolume, At.mute = Wt.mute, At.unmute = Wt.unmute, At.getRegisteredAnimations = Wt.getRegisteredAnimations, At.useWebWorker = y, At.setIDPrefix = Vs, At.__getFactory = ji, At.version = "5.13.0";
    function Us() {
      document.readyState === "complete" && (clearInterval(Ws), Br());
    }
    function hs(t) {
      for (var e = Ar.split("&"), i = 0; i < e.length; i += 1) {
        var s = e[i].split("=");
        if (decodeURIComponent(s[0]) == t)
          return decodeURIComponent(s[1]);
      }
      return null;
    }
    var Ar = "";
    {
      var $r = document.getElementsByTagName("script"), fs = $r.length - 1, cs = $r[fs] || {
        src: ""
      };
      Ar = cs.src ? cs.src.replace(/^[^\?]+\??/, "") : "", hs("renderer");
    }
    var Ws = setInterval(Us, 100);
    try {
      zr(r) !== "object" && (window.bodymovin = At);
    } catch {
    }
    var li = function() {
      var t = {}, e = {};
      t.registerModifier = i, t.getModifier = s;
      function i(a, o) {
        e[a] || (e[a] = o);
      }
      function s(a, o, c) {
        return new e[a](o, c);
      }
      return t;
    }();
    function Pe() {
    }
    Pe.prototype.initModifierProperties = function() {
    }, Pe.prototype.addShapeToModifier = function() {
    }, Pe.prototype.addShape = function(t) {
      if (!this.closed) {
        t.sh.container.addDynamicProperty(t.sh);
        var e = {
          shape: t.sh,
          data: t,
          localShapeCollection: ze.newShapeCollection()
        };
        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
      }
    }, Pe.prototype.init = function(t, e) {
      this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = p, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, Pe.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, H([Bt], Pe);
    function Jt() {
    }
    H([Pe], Jt), Jt.prototype.initModifierProperties = function(t, e) {
      this.s = Q.getProp(t, e.s, 0, 0.01, this), this.e = Q.getProp(t, e.e, 0, 0.01, this), this.o = Q.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, Jt.prototype.addShapeToModifier = function(t) {
      t.pathsData = [];
    }, Jt.prototype.calculateShapeEdges = function(t, e, i, s, a) {
      var o = [];
      e <= 1 ? o.push({
        s: t,
        e
      }) : t >= 1 ? o.push({
        s: t - 1,
        e: e - 1
      }) : (o.push({
        s: t,
        e: 1
      }), o.push({
        s: 0,
        e: e - 1
      }));
      var c = [], b, u = o.length, T;
      for (b = 0; b < u; b += 1)
        if (T = o[b], !(T.e * a < s || T.s * a > s + i)) {
          var C, V;
          T.s * a <= s ? C = 0 : C = (T.s * a - s) / i, T.e * a >= s + i ? V = 1 : V = (T.e * a - s) / i, c.push([C, V]);
        }
      return c.length || c.push([0, 0]), c;
    }, Jt.prototype.releasePathsData = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1)
        Ae.release(t[e]);
      return t.length = 0, t;
    }, Jt.prototype.processShapes = function(t) {
      var e, i;
      if (this._mdf || t) {
        var s = this.o.v % 360 / 360;
        if (s < 0 && (s += 1), this.s.v > 1 ? e = 1 + s : this.s.v < 0 ? e = 0 + s : e = this.s.v + s, this.e.v > 1 ? i = 1 + s : this.e.v < 0 ? i = 0 + s : i = this.e.v + s, e > i) {
          var a = e;
          e = i, i = a;
        }
        e = Math.round(e * 1e4) * 1e-4, i = Math.round(i * 1e4) * 1e-4, this.sValue = e, this.eValue = i;
      } else
        e = this.sValue, i = this.eValue;
      var o, c, b = this.shapes.length, u, T, C, V, v, E = 0;
      if (i === e)
        for (c = 0; c < b; c += 1)
          this.shapes[c].localShapeCollection.releaseShapes(), this.shapes[c].shape._mdf = !0, this.shapes[c].shape.paths = this.shapes[c].localShapeCollection, this._mdf && (this.shapes[c].pathsData.length = 0);
      else if (i === 1 && e === 0 || i === 0 && e === 1) {
        if (this._mdf)
          for (c = 0; c < b; c += 1)
            this.shapes[c].pathsData.length = 0, this.shapes[c].shape._mdf = !0;
      } else {
        var L = [], P, N;
        for (c = 0; c < b; c += 1)
          if (P = this.shapes[c], !P.shape._mdf && !this._mdf && !t && this.m !== 2)
            P.shape.paths = P.localShapeCollection;
          else {
            if (o = P.shape.paths, T = o._length, v = 0, !P.shape._mdf && P.pathsData.length)
              v = P.totalShapeLength;
            else {
              for (C = this.releasePathsData(P.pathsData), u = 0; u < T; u += 1)
                V = le.getSegmentsLength(o.shapes[u]), C.push(V), v += V.totalLength;
              P.totalShapeLength = v, P.pathsData = C;
            }
            E += v, P.shape._mdf = !0;
          }
        var S = e, x = i, m = 0, _;
        for (c = b - 1; c >= 0; c -= 1)
          if (P = this.shapes[c], P.shape._mdf) {
            for (N = P.localShapeCollection, N.releaseShapes(), this.m === 2 && b > 1 ? (_ = this.calculateShapeEdges(e, i, P.totalShapeLength, m, E), m += P.totalShapeLength) : _ = [[S, x]], T = _.length, u = 0; u < T; u += 1) {
              S = _[u][0], x = _[u][1], L.length = 0, x <= 1 ? L.push({
                s: P.totalShapeLength * S,
                e: P.totalShapeLength * x
              }) : S >= 1 ? L.push({
                s: P.totalShapeLength * (S - 1),
                e: P.totalShapeLength * (x - 1)
              }) : (L.push({
                s: P.totalShapeLength * S,
                e: P.totalShapeLength
              }), L.push({
                s: 0,
                e: P.totalShapeLength * (x - 1)
              }));
              var A = this.addShapes(P, L[0]);
              if (L[0].s !== L[0].e) {
                if (L.length > 1) {
                  var F = P.shape.paths.shapes[P.shape.paths._length - 1];
                  if (F.c) {
                    var B = A.pop();
                    this.addPaths(A, N), A = this.addShapes(P, L[1], B);
                  } else
                    this.addPaths(A, N), A = this.addShapes(P, L[1]);
                }
                this.addPaths(A, N);
              }
            }
            P.shape.paths = N;
          }
      }
    }, Jt.prototype.addPaths = function(t, e) {
      var i, s = t.length;
      for (i = 0; i < s; i += 1)
        e.addShape(t[i]);
    }, Jt.prototype.addSegment = function(t, e, i, s, a, o, c) {
      a.setXYAt(e[0], e[1], "o", o), a.setXYAt(i[0], i[1], "i", o + 1), c && a.setXYAt(t[0], t[1], "v", o), a.setXYAt(s[0], s[1], "v", o + 1);
    }, Jt.prototype.addSegmentFromArray = function(t, e, i, s) {
      e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), s && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1);
    }, Jt.prototype.addShapes = function(t, e, i) {
      var s = t.pathsData, a = t.shape.paths.shapes, o, c = t.shape.paths._length, b, u, T = 0, C, V, v, E, L = [], P, N = !0;
      for (i ? (V = i._length, P = i._length) : (i = Yt.newElement(), V = 0, P = 0), L.push(i), o = 0; o < c; o += 1) {
        for (v = s[o].lengths, i.c = a[o].c, u = a[o].c ? v.length : v.length + 1, b = 1; b < u; b += 1)
          if (C = v[b - 1], T + C.addedLength < e.s)
            T += C.addedLength, i.c = !1;
          else if (T > e.e) {
            i.c = !1;
            break;
          } else
            e.s <= T && e.e >= T + C.addedLength ? (this.addSegment(a[o].v[b - 1], a[o].o[b - 1], a[o].i[b], a[o].v[b], i, V, N), N = !1) : (E = le.getNewSegment(a[o].v[b - 1], a[o].v[b], a[o].o[b - 1], a[o].i[b], (e.s - T) / C.addedLength, (e.e - T) / C.addedLength, v[b - 1]), this.addSegmentFromArray(E, i, V, N), N = !1, i.c = !1), T += C.addedLength, V += 1;
        if (a[o].c && v.length) {
          if (C = v[b - 1], T <= e.e) {
            var S = v[b - 1].addedLength;
            e.s <= T && e.e >= T + S ? (this.addSegment(a[o].v[b - 1], a[o].o[b - 1], a[o].i[0], a[o].v[0], i, V, N), N = !1) : (E = le.getNewSegment(a[o].v[b - 1], a[o].v[0], a[o].o[b - 1], a[o].i[0], (e.s - T) / S, (e.e - T) / S, v[b - 1]), this.addSegmentFromArray(E, i, V, N), N = !1, i.c = !1);
          } else
            i.c = !1;
          T += C.addedLength, V += 1;
        }
        if (i._length && (i.setXYAt(i.v[P][0], i.v[P][1], "i", P), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), T > e.e)
          break;
        o < c - 1 && (i = Yt.newElement(), N = !0, L.push(i), V = 0);
      }
      return L;
    };
    function Ui() {
    }
    H([Pe], Ui), Ui.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = Q.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, Ui.prototype.processPath = function(t, e) {
      var i = e / 100, s = [0, 0], a = t._length, o = 0;
      for (o = 0; o < a; o += 1)
        s[0] += t.v[o][0], s[1] += t.v[o][1];
      s[0] /= a, s[1] /= a;
      var c = Yt.newElement();
      c.c = t.c;
      var b, u, T, C, V, v;
      for (o = 0; o < a; o += 1)
        b = t.v[o][0] + (s[0] - t.v[o][0]) * i, u = t.v[o][1] + (s[1] - t.v[o][1]) * i, T = t.o[o][0] + (s[0] - t.o[o][0]) * -i, C = t.o[o][1] + (s[1] - t.o[o][1]) * -i, V = t.i[o][0] + (s[0] - t.i[o][0]) * -i, v = t.i[o][1] + (s[1] - t.i[o][1]) * -i, c.setTripleAt(b, u, T, C, V, v, o);
      return c;
    }, Ui.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, a, o, c = this.amount.v;
      if (c !== 0) {
        var b, u;
        for (i = 0; i < s; i += 1) {
          if (b = this.shapes[i], u = b.localShapeCollection, !(!b.shape._mdf && !this._mdf && !t))
            for (u.releaseShapes(), b.shape._mdf = !0, e = b.shape.paths.shapes, o = b.shape.paths._length, a = 0; a < o; a += 1)
              u.addShape(this.processPath(e[a], c));
          b.shape.paths = b.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    var Wi = function() {
      var t = [0, 0];
      function e(u) {
        var T = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || T, this.a && u.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && u.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && u.skewFromAxis(-this.sk.v, this.sa.v), this.r ? u.rotate(-this.r.v) : u.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? u.translate(this.px.v, this.py.v, -this.pz.v) : u.translate(this.px.v, this.py.v, 0) : u.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
      function i(u) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || u) {
            var T;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var C, V;
              if (T = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime)
                this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (C = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / T, 0), V = this.p.getValueAtTime(this.p.keyframes[0].t / T, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (C = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / T, 0), V = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / T, 0)) : (C = this.p.pv, V = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / T, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                C = [], V = [];
                var v = this.px, E = this.py;
                v._caching.lastFrame + v.offsetTime <= v.keyframes[0].t ? (C[0] = v.getValueAtTime((v.keyframes[0].t + 0.01) / T, 0), C[1] = E.getValueAtTime((E.keyframes[0].t + 0.01) / T, 0), V[0] = v.getValueAtTime(v.keyframes[0].t / T, 0), V[1] = E.getValueAtTime(E.keyframes[0].t / T, 0)) : v._caching.lastFrame + v.offsetTime >= v.keyframes[v.keyframes.length - 1].t ? (C[0] = v.getValueAtTime(v.keyframes[v.keyframes.length - 1].t / T, 0), C[1] = E.getValueAtTime(E.keyframes[E.keyframes.length - 1].t / T, 0), V[0] = v.getValueAtTime((v.keyframes[v.keyframes.length - 1].t - 0.01) / T, 0), V[1] = E.getValueAtTime((E.keyframes[E.keyframes.length - 1].t - 0.01) / T, 0)) : (C = [v.pv, E.pv], V[0] = v.getValueAtTime((v._caching.lastFrame + v.offsetTime - 0.01) / T, v.offsetTime), V[1] = E.getValueAtTime((E._caching.lastFrame + E.offsetTime - 0.01) / T, E.offsetTime));
              } else
                V = t, C = V;
              this.v.rotate(-Math.atan2(C[1] - V[1], C[0] - V[0]));
            }
            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
          this.frameId = this.elem.globalData.frameId;
        }
      }
      function s() {
        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length)
          this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
        else
          return;
        if (!this.s.effectsSequence.length)
          this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
        else
          return;
        if (this.sk)
          if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length)
            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
          else
            return;
        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
      }
      function a() {
      }
      function o(u) {
        this._addDynamicProperty(u), this.elem.addDynamicProperty(u), this._isDirty = !0;
      }
      function c(u, T, C) {
        if (this.elem = u, this.frameId = -1, this.propType = "transform", this.data = T, this.v = new Qt(), this.pre = new Qt(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(C || u), T.p && T.p.s ? (this.px = Q.getProp(u, T.p.x, 0, 0, this), this.py = Q.getProp(u, T.p.y, 0, 0, this), T.p.z && (this.pz = Q.getProp(u, T.p.z, 0, 0, this))) : this.p = Q.getProp(u, T.p || {
          k: [0, 0, 0]
        }, 1, 0, this), T.rx) {
          if (this.rx = Q.getProp(u, T.rx, 0, Pt, this), this.ry = Q.getProp(u, T.ry, 0, Pt, this), this.rz = Q.getProp(u, T.rz, 0, Pt, this), T.or.k[0].ti) {
            var V, v = T.or.k.length;
            for (V = 0; V < v; V += 1)
              T.or.k[V].to = null, T.or.k[V].ti = null;
          }
          this.or = Q.getProp(u, T.or, 1, Pt, this), this.or.sh = !0;
        } else
          this.r = Q.getProp(u, T.r || {
            k: 0
          }, 0, Pt, this);
        T.sk && (this.sk = Q.getProp(u, T.sk, 0, Pt, this), this.sa = Q.getProp(u, T.sa, 0, Pt, this)), this.a = Q.getProp(u, T.a || {
          k: [0, 0, 0]
        }, 1, 0, this), this.s = Q.getProp(u, T.s || {
          k: [100, 100, 100]
        }, 1, 0.01, this), T.o ? this.o = Q.getProp(u, T.o, 0, 0.01, u) : this.o = {
          _mdf: !1,
          v: 1
        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
      }
      c.prototype = {
        applyToMatrix: e,
        getValue: i,
        precalculateMatrix: s,
        autoOrient: a
      }, H([Bt], c), c.prototype.addDynamicProperty = o, c.prototype._addDynamicProperty = Bt.prototype.addDynamicProperty;
      function b(u, T, C) {
        return new c(u, T, C);
      }
      return {
        getTransformProperty: b
      };
    }();
    function he() {
    }
    H([Pe], he), he.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.c = Q.getProp(t, e.c, 0, null, this), this.o = Q.getProp(t, e.o, 0, null, this), this.tr = Wi.getTransformProperty(t, e.tr, this), this.so = Q.getProp(t, e.tr.so, 0, 0.01, this), this.eo = Q.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Qt(), this.rMatrix = new Qt(), this.sMatrix = new Qt(), this.tMatrix = new Qt(), this.matrix = new Qt();
    }, he.prototype.applyTransforms = function(t, e, i, s, a, o) {
      var c = o ? -1 : 1, b = s.s.v[0] + (1 - s.s.v[0]) * (1 - a), u = s.s.v[1] + (1 - s.s.v[1]) * (1 - a);
      t.translate(s.p.v[0] * c * a, s.p.v[1] * c * a, s.p.v[2]), e.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), e.rotate(-s.r.v * c * a), e.translate(s.a.v[0], s.a.v[1], s.a.v[2]), i.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), i.scale(o ? 1 / b : b, o ? 1 / u : u), i.translate(s.a.v[0], s.a.v[1], s.a.v[2]);
    }, he.prototype.init = function(t, e, i, s) {
      for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0; )
        i -= 1, this._elements.unshift(e[i]);
      this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, he.prototype.resetElements = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1)
        t[e]._processed = !1, t[e].ty === "gr" && this.resetElements(t[e].it);
    }, he.prototype.cloneElements = function(t) {
      var e = JSON.parse(JSON.stringify(t));
      return this.resetElements(e), e;
    }, he.prototype.changeGroupRender = function(t, e) {
      var i, s = t.length;
      for (i = 0; i < s; i += 1)
        t[i]._render = e, t[i].ty === "gr" && this.changeGroupRender(t[i].it, e);
    }, he.prototype.processShapes = function(t) {
      var e, i, s, a, o, c = !1;
      if (this._mdf || t) {
        var b = Math.ceil(this.c.v);
        if (this._groups.length < b) {
          for (; this._groups.length < b; ) {
            var u = {
              it: this.cloneElements(this._elements),
              ty: "gr"
            };
            u.it.push({
              a: {
                a: 0,
                ix: 1,
                k: [0, 0]
              },
              nm: "Transform",
              o: {
                a: 0,
                ix: 7,
                k: 100
              },
              p: {
                a: 0,
                ix: 2,
                k: [0, 0]
              },
              r: {
                a: 1,
                ix: 6,
                k: [{
                  s: 0,
                  e: 0,
                  t: 0
                }, {
                  s: 0,
                  e: 0,
                  t: 1
                }]
              },
              s: {
                a: 0,
                ix: 3,
                k: [100, 100]
              },
              sa: {
                a: 0,
                ix: 5,
                k: 0
              },
              sk: {
                a: 0,
                ix: 4,
                k: 0
              },
              ty: "tr"
            }), this.arr.splice(0, 0, u), this._groups.splice(0, 0, u), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), c = !0;
        }
        o = 0;
        var T;
        for (s = 0; s <= this._groups.length - 1; s += 1) {
          if (T = o < b, this._groups[s]._render = T, this.changeGroupRender(this._groups[s].it, T), !T) {
            var C = this.elemsData[s].it, V = C[C.length - 1];
            V.transform.op.v !== 0 ? (V.transform.op._mdf = !0, V.transform.op.v = 0) : V.transform.op._mdf = !1;
          }
          o += 1;
        }
        this._currentCopies = b;
        var v = this.o.v, E = v % 1, L = v > 0 ? Math.floor(v) : Math.ceil(v), P = this.pMatrix.props, N = this.rMatrix.props, S = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var x = 0;
        if (v > 0) {
          for (; x < L; )
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), x += 1;
          E && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, E, !1), x += E);
        } else if (v < 0) {
          for (; x > L; )
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), x -= 1;
          E && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -E, !0), x -= E);
        }
        s = this.data.m === 1 ? 0 : this._currentCopies - 1, a = this.data.m === 1 ? 1 : -1, o = this._currentCopies;
        for (var m, _; o; ) {
          if (e = this.elemsData[s].it, i = e[e.length - 1].transform.mProps.v.props, _ = i.length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)), x !== 0) {
            for ((s !== 0 && a === 1 || s !== this._currentCopies - 1 && a === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(N[0], N[1], N[2], N[3], N[4], N[5], N[6], N[7], N[8], N[9], N[10], N[11], N[12], N[13], N[14], N[15]), this.matrix.transform(S[0], S[1], S[2], S[3], S[4], S[5], S[6], S[7], S[8], S[9], S[10], S[11], S[12], S[13], S[14], S[15]), this.matrix.transform(P[0], P[1], P[2], P[3], P[4], P[5], P[6], P[7], P[8], P[9], P[10], P[11], P[12], P[13], P[14], P[15]), m = 0; m < _; m += 1)
              i[m] = this.matrix.props[m];
            this.matrix.reset();
          } else
            for (this.matrix.reset(), m = 0; m < _; m += 1)
              i[m] = this.matrix.props[m];
          x += 1, o -= 1, s += a;
        }
      } else
        for (o = this._currentCopies, s = 0, a = 1; o; )
          e = this.elemsData[s].it, i = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, o -= 1, s += a;
      return c;
    }, he.prototype.addShape = function() {
    };
    function ar() {
    }
    H([Pe], ar), ar.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.rd = Q.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, ar.prototype.processPath = function(t, e) {
      var i = Yt.newElement();
      i.c = t.c;
      var s, a = t._length, o, c, b, u, T, C, V = 0, v, E, L, P, N, S;
      for (s = 0; s < a; s += 1)
        o = t.v[s], b = t.o[s], c = t.i[s], o[0] === b[0] && o[1] === b[1] && o[0] === c[0] && o[1] === c[1] ? (s === 0 || s === a - 1) && !t.c ? (i.setTripleAt(o[0], o[1], b[0], b[1], c[0], c[1], V), V += 1) : (s === 0 ? u = t.v[a - 1] : u = t.v[s - 1], T = Math.sqrt(Math.pow(o[0] - u[0], 2) + Math.pow(o[1] - u[1], 2)), C = T ? Math.min(T / 2, e) / T : 0, N = o[0] + (u[0] - o[0]) * C, v = N, S = o[1] - (o[1] - u[1]) * C, E = S, L = v - (v - o[0]) * kt, P = E - (E - o[1]) * kt, i.setTripleAt(v, E, L, P, N, S, V), V += 1, s === a - 1 ? u = t.v[0] : u = t.v[s + 1], T = Math.sqrt(Math.pow(o[0] - u[0], 2) + Math.pow(o[1] - u[1], 2)), C = T ? Math.min(T / 2, e) / T : 0, L = o[0] + (u[0] - o[0]) * C, v = L, P = o[1] + (u[1] - o[1]) * C, E = P, N = v - (v - o[0]) * kt, S = E - (E - o[1]) * kt, i.setTripleAt(v, E, L, P, N, S, V), V += 1) : (i.setTripleAt(t.v[s][0], t.v[s][1], t.o[s][0], t.o[s][1], t.i[s][0], t.i[s][1], V), V += 1);
      return i;
    }, ar.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, a, o, c = this.rd.v;
      if (c !== 0) {
        var b, u;
        for (i = 0; i < s; i += 1) {
          if (b = this.shapes[i], u = b.localShapeCollection, !(!b.shape._mdf && !this._mdf && !t))
            for (u.releaseShapes(), b.shape._mdf = !0, e = b.shape.paths.shapes, o = b.shape.paths._length, a = 0; a < o; a += 1)
              u.addShape(this.processPath(e[a], c));
          b.shape.paths = b.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    function bi(t, e) {
      return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e));
    }
    function Sr(t) {
      return Math.abs(t) <= 1e-5;
    }
    function us(t, e, i) {
      return t * (1 - i) + e * i;
    }
    function ii(t, e, i) {
      return [us(t[0], e[0], i), us(t[1], e[1], i)];
    }
    function ps(t, e, i) {
      if (t === 0) return [];
      var s = e * e - 4 * t * i;
      if (s < 0) return [];
      var a = -e / (2 * t);
      if (s === 0) return [a];
      var o = Math.sqrt(s) / (2 * t);
      return [a - o, a + o];
    }
    function lr(t, e, i, s) {
      return [-t + 3 * e - 3 * i + s, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t];
    }
    function Cr(t) {
      return new $t(t, t, t, t, !1);
    }
    function $t(t, e, i, s, a) {
      a && xi(t, e) && (e = ii(t, s, 1 / 3)), a && xi(i, s) && (i = ii(t, s, 2 / 3));
      var o = lr(t[0], e[0], i[0], s[0]), c = lr(t[1], e[1], i[1], s[1]);
      this.a = [o[0], c[0]], this.b = [o[1], c[1]], this.c = [o[2], c[2]], this.d = [o[3], c[3]], this.points = [t, e, i, s];
    }
    $t.prototype.point = function(t) {
      return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
    }, $t.prototype.derivative = function(t) {
      return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
    }, $t.prototype.tangentAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[1], e[0]);
    }, $t.prototype.normalAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[0], e[1]);
    }, $t.prototype.inflectionPoints = function() {
      var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
      if (Sr(t)) return [];
      var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
      if (i < 0) return [];
      var s = Math.sqrt(i);
      return Sr(s) ? s > 0 && s < 1 ? [e] : [] : [e - s, e + s].filter(function(a) {
        return a > 0 && a < 1;
      });
    }, $t.prototype.split = function(t) {
      if (t <= 0) return [Cr(this.points[0]), this];
      if (t >= 1) return [this, Cr(this.points[this.points.length - 1])];
      var e = ii(this.points[0], this.points[1], t), i = ii(this.points[1], this.points[2], t), s = ii(this.points[2], this.points[3], t), a = ii(e, i, t), o = ii(i, s, t), c = ii(a, o, t);
      return [new $t(this.points[0], e, a, c, !0), new $t(c, o, s, this.points[3], !0)];
    };
    function wi(t, e) {
      var i = t.points[0][e], s = t.points[t.points.length - 1][e];
      if (i > s) {
        var a = s;
        s = i, i = a;
      }
      for (var o = ps(3 * t.a[e], 2 * t.b[e], t.c[e]), c = 0; c < o.length; c += 1)
        if (o[c] > 0 && o[c] < 1) {
          var b = t.point(o[c])[e];
          b < i ? i = b : b > s && (s = b);
        }
      return {
        min: i,
        max: s
      };
    }
    $t.prototype.bounds = function() {
      return {
        x: wi(this, 0),
        y: wi(this, 1)
      };
    }, $t.prototype.boundingBox = function() {
      var t = this.bounds();
      return {
        left: t.x.min,
        right: t.x.max,
        top: t.y.min,
        bottom: t.y.max,
        width: t.x.max - t.x.min,
        height: t.y.max - t.y.min,
        cx: (t.x.max + t.x.min) / 2,
        cy: (t.y.max + t.y.min) / 2
      };
    };
    function hi(t, e, i) {
      var s = t.boundingBox();
      return {
        cx: s.cx,
        cy: s.cy,
        width: s.width,
        height: s.height,
        bez: t,
        t: (e + i) / 2,
        t1: e,
        t2: i
      };
    }
    function De(t) {
      var e = t.bez.split(0.5);
      return [hi(e[0], t.t1, t.t), hi(e[1], t.t, t.t2)];
    }
    function Hs(t, e) {
      return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height;
    }
    function fi(t, e, i, s, a, o) {
      if (Hs(t, e)) {
        if (i >= o || t.width <= s && t.height <= s && e.width <= s && e.height <= s) {
          a.push([t.t, e.t]);
          return;
        }
        var c = De(t), b = De(e);
        fi(c[0], b[0], i + 1, s, a, o), fi(c[0], b[1], i + 1, s, a, o), fi(c[1], b[0], i + 1, s, a, o), fi(c[1], b[1], i + 1, s, a, o);
      }
    }
    $t.prototype.intersections = function(t, e, i) {
      e === void 0 && (e = 2), i === void 0 && (i = 7);
      var s = [];
      return fi(hi(this, 0, 1), hi(t, 0, 1), 0, e, s, i), s;
    }, $t.shapeSegment = function(t, e) {
      var i = (e + 1) % t.length();
      return new $t(t.v[e], t.o[e], t.i[i], t.v[i], !0);
    }, $t.shapeSegmentInverted = function(t, e) {
      var i = (e + 1) % t.length();
      return new $t(t.v[i], t.i[i], t.o[e], t.v[e], !0);
    };
    function jr(t, e) {
      return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
    }
    function hr(t, e, i, s) {
      var a = [t[0], t[1], 1], o = [e[0], e[1], 1], c = [i[0], i[1], 1], b = [s[0], s[1], 1], u = jr(jr(a, o), jr(c, b));
      return Sr(u[2]) ? null : [u[0] / u[2], u[1] / u[2]];
    }
    function ki(t, e, i) {
      return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i];
    }
    function Er(t, e) {
      return Math.hypot(t[0] - e[0], t[1] - e[1]);
    }
    function xi(t, e) {
      return bi(t[0], e[0]) && bi(t[1], e[1]);
    }
    function fr() {
    }
    H([Pe], fr), fr.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amplitude = Q.getProp(t, e.s, 0, null, this), this.frequency = Q.getProp(t, e.r, 0, null, this), this.pointsType = Q.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
    };
    function Ur(t, e, i, s, a, o, c) {
      var b = i - Math.PI / 2, u = i + Math.PI / 2, T = e[0] + Math.cos(i) * s * a, C = e[1] - Math.sin(i) * s * a;
      t.setTripleAt(T, C, T + Math.cos(b) * o, C - Math.sin(b) * o, T + Math.cos(u) * c, C - Math.sin(u) * c, t.length());
    }
    function qs(t, e) {
      var i = [e[0] - t[0], e[1] - t[1]], s = -Math.PI * 0.5, a = [Math.cos(s) * i[0] - Math.sin(s) * i[1], Math.sin(s) * i[0] + Math.cos(s) * i[1]];
      return a;
    }
    function Gs(t, e) {
      var i = e === 0 ? t.length() - 1 : e - 1, s = (e + 1) % t.length(), a = t.v[i], o = t.v[s], c = qs(a, o);
      return Math.atan2(0, 1) - Math.atan2(c[1], c[0]);
    }
    function Wr(t, e, i, s, a, o, c) {
      var b = Gs(e, i), u = e.v[i % e._length], T = e.v[i === 0 ? e._length - 1 : i - 1], C = e.v[(i + 1) % e._length], V = o === 2 ? Math.sqrt(Math.pow(u[0] - T[0], 2) + Math.pow(u[1] - T[1], 2)) : 0, v = o === 2 ? Math.sqrt(Math.pow(u[0] - C[0], 2) + Math.pow(u[1] - C[1], 2)) : 0;
      Ur(t, e.v[i % e._length], b, c, s, v / ((a + 1) * 2), V / ((a + 1) * 2));
    }
    function Pr(t, e, i, s, a, o) {
      for (var c = 0; c < s; c += 1) {
        var b = (c + 1) / (s + 1), u = a === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, T = e.normalAngle(b), C = e.point(b);
        Ur(t, C, T, o, i, u / ((s + 1) * 2), u / ((s + 1) * 2)), o = -o;
      }
      return o;
    }
    fr.prototype.processPath = function(t, e, i, s) {
      var a = t._length, o = Yt.newElement();
      if (o.c = t.c, t.c || (a -= 1), a === 0) return o;
      var c = -1, b = $t.shapeSegment(t, 0);
      Wr(o, t, 0, e, i, s, c);
      for (var u = 0; u < a; u += 1)
        c = Pr(o, b, e, i, s, -c), u === a - 1 && !t.c ? b = null : b = $t.shapeSegment(t, (u + 1) % a), Wr(o, t, u + 1, e, i, s, c);
      return o;
    }, fr.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, a, o, c = this.amplitude.v, b = Math.max(0, Math.round(this.frequency.v)), u = this.pointsType.v;
      if (c !== 0) {
        var T, C;
        for (i = 0; i < s; i += 1) {
          if (T = this.shapes[i], C = T.localShapeCollection, !(!T.shape._mdf && !this._mdf && !t))
            for (C.releaseShapes(), T.shape._mdf = !0, e = T.shape.paths.shapes, o = T.shape.paths._length, a = 0; a < o; a += 1)
              C.addShape(this.processPath(e[a], c, b, u));
          T.shape.paths = T.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    function cr(t, e, i) {
      var s = Math.atan2(e[0] - t[0], e[1] - t[1]);
      return [ki(t, s, i), ki(e, s, i)];
    }
    function K(t, e) {
      var i, s, a, o, c, b, u;
      u = cr(t.points[0], t.points[1], e), i = u[0], s = u[1], u = cr(t.points[1], t.points[2], e), a = u[0], o = u[1], u = cr(t.points[2], t.points[3], e), c = u[0], b = u[1];
      var T = hr(i, s, a, o);
      T === null && (T = s);
      var C = hr(c, b, a, o);
      return C === null && (C = c), new $t(i, T, C, b);
    }
    function k(t, e, i, s, a) {
      var o = e.points[3], c = i.points[0];
      if (s === 3 || xi(o, c)) return o;
      if (s === 2) {
        var b = -e.tangentAngle(1), u = -i.tangentAngle(0) + Math.PI, T = hr(o, ki(o, b + Math.PI / 2, 100), c, ki(c, b + Math.PI / 2, 100)), C = T ? Er(T, o) : Er(o, c) / 2, V = ki(o, b, 2 * C * kt);
        return t.setXYAt(V[0], V[1], "o", t.length() - 1), V = ki(c, u, 2 * C * kt), t.setTripleAt(c[0], c[1], c[0], c[1], V[0], V[1], t.length()), c;
      }
      var v = xi(o, e.points[2]) ? e.points[0] : e.points[2], E = xi(c, i.points[1]) ? i.points[3] : i.points[1], L = hr(v, o, c, E);
      return L && Er(L, o) < a ? (t.setTripleAt(L[0], L[1], L[0], L[1], L[0], L[1], t.length()), L) : o;
    }
    function D(t, e) {
      var i = t.intersections(e);
      return i.length && bi(i[0][0], 1) && i.shift(), i.length ? i[0] : null;
    }
    function G(t, e) {
      var i = t.slice(), s = e.slice(), a = D(t[t.length - 1], e[0]);
      return a && (i[t.length - 1] = t[t.length - 1].split(a[0])[0], s[0] = e[0].split(a[1])[1]), t.length > 1 && e.length > 1 && (a = D(t[0], e[e.length - 1]), a) ? [[t[0].split(a[0])[0]], [e[e.length - 1].split(a[1])[1]]] : [i, s];
    }
    function et(t) {
      for (var e, i = 1; i < t.length; i += 1)
        e = G(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
      return t.length > 1 && (e = G(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
    }
    function nt(t, e) {
      var i = t.inflectionPoints(), s, a, o, c;
      if (i.length === 0)
        return [K(t, e)];
      if (i.length === 1 || bi(i[1], 1))
        return o = t.split(i[0]), s = o[0], a = o[1], [K(s, e), K(a, e)];
      o = t.split(i[0]), s = o[0];
      var b = (i[1] - i[0]) / (1 - i[0]);
      return o = o[1].split(b), c = o[0], a = o[1], [K(s, e), K(c, e), K(a, e)];
    }
    function ut() {
    }
    H([Pe], ut), ut.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = Q.getProp(t, e.a, 0, null, this), this.miterLimit = Q.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
    }, ut.prototype.processPath = function(t, e, i, s) {
      var a = Yt.newElement();
      a.c = t.c;
      var o = t.length();
      t.c || (o -= 1);
      var c, b, u, T = [];
      for (c = 0; c < o; c += 1)
        u = $t.shapeSegment(t, c), T.push(nt(u, e));
      if (!t.c)
        for (c = o - 1; c >= 0; c -= 1)
          u = $t.shapeSegmentInverted(t, c), T.push(nt(u, e));
      T = et(T);
      var C = null, V = null;
      for (c = 0; c < T.length; c += 1) {
        var v = T[c];
        for (V && (C = k(a, V, v[0], i, s)), V = v[v.length - 1], b = 0; b < v.length; b += 1)
          u = v[b], C && xi(u.points[0], C) ? a.setXYAt(u.points[1][0], u.points[1][1], "o", a.length() - 1) : a.setTripleAt(u.points[0][0], u.points[0][1], u.points[1][0], u.points[1][1], u.points[0][0], u.points[0][1], a.length()), a.setTripleAt(u.points[3][0], u.points[3][1], u.points[3][0], u.points[3][1], u.points[2][0], u.points[2][1], a.length()), C = u.points[3];
      }
      return T.length && k(a, V, T[0][0], i, s), a;
    }, ut.prototype.processShapes = function(t) {
      var e, i, s = this.shapes.length, a, o, c = this.amount.v, b = this.miterLimit.v, u = this.lineJoin;
      if (c !== 0) {
        var T, C;
        for (i = 0; i < s; i += 1) {
          if (T = this.shapes[i], C = T.localShapeCollection, !(!T.shape._mdf && !this._mdf && !t))
            for (C.releaseShapes(), T.shape._mdf = !0, e = T.shape.paths.shapes, o = T.shape.paths._length, a = 0; a < o; a += 1)
              C.addShape(this.processPath(e[a], c, u, b));
          T.shape.paths = T.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    function Lt(t) {
      for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", s = "normal", a = e.length, o, c = 0; c < a; c += 1)
        switch (o = e[c].toLowerCase(), o) {
          case "italic":
            s = "italic";
            break;
          case "bold":
            i = "700";
            break;
          case "black":
            i = "900";
            break;
          case "medium":
            i = "500";
            break;
          case "regular":
          case "normal":
            i = "400";
            break;
          case "light":
          case "thin":
            i = "200";
            break;
        }
      return {
        style: s,
        weight: t.fWeight || i
      };
    }
    var Et = function() {
      var t = 5e3, e = {
        w: 0,
        size: 0,
        shapes: [],
        data: {
          shapes: []
        }
      }, i = [];
      i = i.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
      var s = 127988, a = 917631, o = 917601, c = 917626, b = 65039, u = 8205, T = 127462, C = 127487, V = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
      function v(w) {
        var M = w.split(","), f, d = M.length, $ = [];
        for (f = 0; f < d; f += 1)
          M[f] !== "sans-serif" && M[f] !== "monospace" && $.push(M[f]);
        return $.join(",");
      }
      function E(w, M) {
        var f = W("span");
        f.setAttribute("aria-hidden", !0), f.style.fontFamily = M;
        var d = W("span");
        d.innerText = "giItT1WQy@!-/#", f.style.position = "absolute", f.style.left = "-10000px", f.style.top = "-10000px", f.style.fontSize = "300px", f.style.fontVariant = "normal", f.style.fontStyle = "normal", f.style.fontWeight = "normal", f.style.letterSpacing = "0", f.appendChild(d), document.body.appendChild(f);
        var $ = d.offsetWidth;
        return d.style.fontFamily = v(w) + ", " + M, {
          node: d,
          w: $,
          parent: f
        };
      }
      function L() {
        var w, M = this.fonts.length, f, d, $ = M;
        for (w = 0; w < M; w += 1)
          this.fonts[w].loaded ? $ -= 1 : this.fonts[w].fOrigin === "n" || this.fonts[w].origin === 0 ? this.fonts[w].loaded = !0 : (f = this.fonts[w].monoCase.node, d = this.fonts[w].monoCase.w, f.offsetWidth !== d ? ($ -= 1, this.fonts[w].loaded = !0) : (f = this.fonts[w].sansCase.node, d = this.fonts[w].sansCase.w, f.offsetWidth !== d && ($ -= 1, this.fonts[w].loaded = !0)), this.fonts[w].loaded && (this.fonts[w].sansCase.parent.parentNode.removeChild(this.fonts[w].sansCase.parent), this.fonts[w].monoCase.parent.parentNode.removeChild(this.fonts[w].monoCase.parent)));
        $ !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }
      function P(w, M) {
        var f = document.body && M ? "svg" : "canvas", d, $ = Lt(w);
        if (f === "svg") {
          var R = lt("text");
          R.style.fontSize = "100px", R.setAttribute("font-family", w.fFamily), R.setAttribute("font-style", $.style), R.setAttribute("font-weight", $.weight), R.textContent = "1", w.fClass ? (R.style.fontFamily = "inherit", R.setAttribute("class", w.fClass)) : R.style.fontFamily = w.fFamily, M.appendChild(R), d = R;
        } else {
          var it = new OffscreenCanvas(500, 500).getContext("2d");
          it.font = $.style + " " + $.weight + " 100px " + w.fFamily, d = it;
        }
        function pt(gt) {
          return f === "svg" ? (d.textContent = gt, d.getComputedTextLength()) : d.measureText(gt).width;
        }
        return {
          measureText: pt
        };
      }
      function N(w, M) {
        if (!w) {
          this.isLoaded = !0;
          return;
        }
        if (this.chars) {
          this.isLoaded = !0, this.fonts = w.list;
          return;
        }
        if (!document.body) {
          this.isLoaded = !0, w.list.forEach(function(Ie) {
            Ie.helper = P(Ie), Ie.cache = {};
          }), this.fonts = w.list;
          return;
        }
        var f = w.list, d, $ = f.length, R = $;
        for (d = 0; d < $; d += 1) {
          var it = !0, pt, gt;
          if (f[d].loaded = !1, f[d].monoCase = E(f[d].fFamily, "monospace"), f[d].sansCase = E(f[d].fFamily, "sans-serif"), !f[d].fPath)
            f[d].loaded = !0, R -= 1;
          else if (f[d].fOrigin === "p" || f[d].origin === 3) {
            if (pt = document.querySelectorAll('style[f-forigin="p"][f-family="' + f[d].fFamily + '"], style[f-origin="3"][f-family="' + f[d].fFamily + '"]'), pt.length > 0 && (it = !1), it) {
              var St = W("style");
              St.setAttribute("f-forigin", f[d].fOrigin), St.setAttribute("f-origin", f[d].origin), St.setAttribute("f-family", f[d].fFamily), St.type = "text/css", St.innerText = "@font-face {font-family: " + f[d].fFamily + "; font-style: normal; src: url('" + f[d].fPath + "');}", M.appendChild(St);
            }
          } else if (f[d].fOrigin === "g" || f[d].origin === 1) {
            for (pt = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), gt = 0; gt < pt.length; gt += 1)
              pt[gt].href.indexOf(f[d].fPath) !== -1 && (it = !1);
            if (it) {
              var Ct = W("link");
              Ct.setAttribute("f-forigin", f[d].fOrigin), Ct.setAttribute("f-origin", f[d].origin), Ct.type = "text/css", Ct.rel = "stylesheet", Ct.href = f[d].fPath, document.body.appendChild(Ct);
            }
          } else if (f[d].fOrigin === "t" || f[d].origin === 2) {
            for (pt = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), gt = 0; gt < pt.length; gt += 1)
              f[d].fPath === pt[gt].src && (it = !1);
            if (it) {
              var oe = W("link");
              oe.setAttribute("f-forigin", f[d].fOrigin), oe.setAttribute("f-origin", f[d].origin), oe.setAttribute("rel", "stylesheet"), oe.setAttribute("href", f[d].fPath), M.appendChild(oe);
            }
          }
          f[d].helper = P(f[d], M), f[d].cache = {}, this.fonts.push(f[d]);
        }
        R === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
      }
      function S(w) {
        if (w) {
          this.chars || (this.chars = []);
          var M, f = w.length, d, $ = this.chars.length, R;
          for (M = 0; M < f; M += 1) {
            for (d = 0, R = !1; d < $; )
              this.chars[d].style === w[M].style && this.chars[d].fFamily === w[M].fFamily && this.chars[d].ch === w[M].ch && (R = !0), d += 1;
            R || (this.chars.push(w[M]), $ += 1);
          }
        }
      }
      function x(w, M, f) {
        for (var d = 0, $ = this.chars.length; d < $; ) {
          if (this.chars[d].ch === w && this.chars[d].style === M && this.chars[d].fFamily === f)
            return this.chars[d];
          d += 1;
        }
        return (typeof w == "string" && w.charCodeAt(0) !== 13 || !w) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", w, M, f)), e;
      }
      function m(w, M, f) {
        var d = this.getFontByName(M), $ = w;
        if (!d.cache[$]) {
          var R = d.helper;
          if (w === " ") {
            var it = R.measureText("|" + w + "|"), pt = R.measureText("||");
            d.cache[$] = (it - pt) / 100;
          } else
            d.cache[$] = R.measureText(w) / 100;
        }
        return d.cache[$] * f;
      }
      function _(w) {
        for (var M = 0, f = this.fonts.length; M < f; ) {
          if (this.fonts[M].fName === w)
            return this.fonts[M];
          M += 1;
        }
        return this.fonts[0];
      }
      function A(w) {
        var M = 0, f = w.charCodeAt(0);
        if (f >= 55296 && f <= 56319) {
          var d = w.charCodeAt(1);
          d >= 56320 && d <= 57343 && (M = (f - 55296) * 1024 + d - 56320 + 65536);
        }
        return M;
      }
      function F(w, M) {
        var f = w.toString(16) + M.toString(16);
        return V.indexOf(f) !== -1;
      }
      function B(w) {
        return w === u;
      }
      function j(w) {
        return w === b;
      }
      function X(w) {
        var M = A(w);
        return M >= T && M <= C;
      }
      function mt(w) {
        return X(w.substr(0, 2)) && X(w.substr(2, 2));
      }
      function ft(w) {
        return i.indexOf(w) !== -1;
      }
      function J(w, M) {
        var f = A(w.substr(M, 2));
        if (f !== s)
          return !1;
        var d = 0;
        for (M += 2; d < 5; ) {
          if (f = A(w.substr(M, 2)), f < o || f > c)
            return !1;
          d += 1, M += 2;
        }
        return A(w.substr(M, 2)) === a;
      }
      function vt() {
        this.isLoaded = !0;
      }
      var st = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      st.isModifier = F, st.isZeroWidthJoiner = B, st.isFlagEmoji = mt, st.isRegionalCode = X, st.isCombinedCharacter = ft, st.isRegionalFlag = J, st.isVariationSelector = j, st.BLACK_FLAG_CODE_POINT = s;
      var Y = {
        addChars: S,
        addFonts: N,
        getCharData: x,
        getFontByName: _,
        measureText: m,
        checkLoadedFonts: L,
        setIsLoaded: vt
      };
      return st.prototype = Y, st;
    }();
    function pe(t) {
      this.animationData = t;
    }
    pe.prototype.getProp = function(t) {
      return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
    };
    function ye(t) {
      return new pe(t);
    }
    function Hi() {
    }
    Hi.prototype = {
      initRenderable: function() {
        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
      },
      addRenderableComponent: function(e) {
        this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e);
      },
      removeRenderableComponent: function(e) {
        this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1);
      },
      prepareRenderableFrame: function(e) {
        this.checkLayerLimits(e);
      },
      checkTransparency: function() {
        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
      },
      /**
         * @function
         * Initializes frame related properties.
         *
         * @param {number} num
         * current frame number in Layer's time
         *
         */
      checkLayerLimits: function(e) {
        this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
      },
      renderRenderable: function() {
        var e, i = this.renderableComponents.length;
        for (e = 0; e < i; e += 1)
          this.renderableComponents[e].renderFrame(this._isFirstFrame);
      },
      sourceRectAtTime: function() {
        return {
          top: 0,
          left: 0,
          width: 100,
          height: 100
        };
      },
      getLayerSize: function() {
        return this.data.ty === 5 ? {
          w: this.data.textData.width,
          h: this.data.textData.height
        } : {
          w: this.data.width,
          h: this.data.height
        };
      }
    };
    var ne = /* @__PURE__ */ function() {
      var t = {
        0: "source-over",
        1: "multiply",
        2: "screen",
        3: "overlay",
        4: "darken",
        5: "lighten",
        6: "color-dodge",
        7: "color-burn",
        8: "hard-light",
        9: "soft-light",
        10: "difference",
        11: "exclusion",
        12: "hue",
        13: "saturation",
        14: "color",
        15: "luminosity"
      };
      return function(e) {
        return t[e] || "";
      };
    }();
    function ds(t, e, i) {
      this.p = Q.getProp(e, t.v, 0, 0, i);
    }
    function Fn(t, e, i) {
      this.p = Q.getProp(e, t.v, 0, 0, i);
    }
    function ma(t, e, i) {
      this.p = Q.getProp(e, t.v, 1, 0, i);
    }
    function ga(t, e, i) {
      this.p = Q.getProp(e, t.v, 1, 0, i);
    }
    function va(t, e, i) {
      this.p = Q.getProp(e, t.v, 0, 0, i);
    }
    function ya(t, e, i) {
      this.p = Q.getProp(e, t.v, 0, 0, i);
    }
    function _a(t, e, i) {
      this.p = Q.getProp(e, t.v, 0, 0, i);
    }
    function ba() {
      this.p = {};
    }
    function Rn(t, e) {
      var i = t.ef || [];
      this.effectElements = [];
      var s, a = i.length, o;
      for (s = 0; s < a; s += 1)
        o = new Hr(i[s], e), this.effectElements.push(o);
    }
    function Hr(t, e) {
      this.init(t, e);
    }
    H([Bt], Hr), Hr.prototype.getValue = Hr.prototype.iterateDynamicProperties, Hr.prototype.init = function(t, e) {
      this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
      var i, s = this.data.ef.length, a, o = this.data.ef;
      for (i = 0; i < s; i += 1) {
        switch (a = null, o[i].ty) {
          case 0:
            a = new ds(o[i], e, this);
            break;
          case 1:
            a = new Fn(o[i], e, this);
            break;
          case 2:
            a = new ma(o[i], e, this);
            break;
          case 3:
            a = new ga(o[i], e, this);
            break;
          case 4:
          case 7:
            a = new _a(o[i], e, this);
            break;
          case 10:
            a = new va(o[i], e, this);
            break;
          case 11:
            a = new ya(o[i], e, this);
            break;
          case 5:
            a = new Rn(o[i], e);
            break;
          default:
            a = new ba(o[i]);
            break;
        }
        a && this.effectElements.push(a);
      }
    };
    function qi() {
    }
    qi.prototype = {
      checkMasks: function() {
        if (!this.data.hasMask)
          return !1;
        for (var e = 0, i = this.data.masksProperties.length; e < i; ) {
          if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== !1)
            return !0;
          e += 1;
        }
        return !1;
      },
      initExpressions: function() {
      },
      setBlendMode: function() {
        var e = ne(this.data.bm), i = this.baseElement || this.layerElement;
        i.style["mix-blend-mode"] = e;
      },
      initBaseData: function(e, i, s) {
        this.globalData = i, this.comp = s, this.data = e, this.layerId = Kt(), this.data.sr || (this.data.sr = 1), this.effectsManager = new Rn(this.data, this, this.dynamicProperties);
      },
      getType: function() {
        return this.type;
      },
      sourceRectAtTime: function() {
      }
    };
    function Gi() {
    }
    Gi.prototype = {
      /**
         * @function
         * Initializes frame related properties.
         *
         */
      initFrame: function() {
        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
      },
      /**
         * @function
         * Calculates all dynamic values
         *
         * @param {number} num
         * current frame number in Layer's time
         * @param {boolean} isVisible
         * if layers is currently in range
         *
         */
      prepareProperties: function(e, i) {
        var s, a = this.dynamicProperties.length;
        for (s = 0; s < a; s += 1)
          (i || this._isParent && this.dynamicProperties[s].propType === "transform") && (this.dynamicProperties[s].getValue(), this.dynamicProperties[s]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
      },
      addDynamicProperty: function(e) {
        this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e);
      }
    };
    function Yi(t, e, i) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i);
    }
    Yi.prototype.prepareFrame = function() {
    }, H([Hi, qi, Gi], Yi), Yi.prototype.getBaseElement = function() {
      return null;
    }, Yi.prototype.renderFrame = function() {
    }, Yi.prototype.destroy = function() {
    }, Yi.prototype.initExpressions = function() {
    }, Yi.prototype.getFootageData = function() {
      return this.footageData;
    };
    function Me(t, e, i) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
      var s = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(s), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? Q.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      }, this.lv = Q.getProp(this, t.au && t.au.lv ? t.au.lv : {
        k: [100]
      }, 1, 0.01, this);
    }
    Me.prototype.prepareFrame = function(t) {
      if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder)
        this._currentTime = t / this.data.sr;
      else {
        var e = this.tm.v;
        this._currentTime = e;
      }
      this._volume = this.lv.v[0];
      var i = this._volume * this._volumeMultiplier;
      this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i));
    }, H([Hi, qi, Gi], Me), Me.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
    }, Me.prototype.show = function() {
    }, Me.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = !1;
    }, Me.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
    }, Me.prototype.resume = function() {
      this._canPlay = !0;
    }, Me.prototype.setRate = function(t) {
      this.audio.rate(t);
    }, Me.prototype.volume = function(t) {
      this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
    }, Me.prototype.getBaseElement = function() {
      return null;
    }, Me.prototype.destroy = function() {
    }, Me.prototype.sourceRectAtTime = function() {
    }, Me.prototype.initExpressions = function() {
    };
    function _e() {
    }
    _e.prototype.checkLayers = function(t) {
      var e, i = this.layers.length, s;
      for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1)
        this.elements[e] || (s = this.layers[e], s.ip - s.st <= t - this.layers[e].st && s.op - s.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : !1;
      this.checkPendingElements();
    }, _e.prototype.createItem = function(t) {
      switch (t.ty) {
        case 2:
          return this.createImage(t);
        case 0:
          return this.createComp(t);
        case 1:
          return this.createSolid(t);
        case 3:
          return this.createNull(t);
        case 4:
          return this.createShape(t);
        case 5:
          return this.createText(t);
        case 6:
          return this.createAudio(t);
        case 13:
          return this.createCamera(t);
        case 15:
          return this.createFootage(t);
        default:
          return this.createNull(t);
      }
    }, _e.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.");
    }, _e.prototype.createAudio = function(t) {
      return new Me(t, this.globalData, this);
    }, _e.prototype.createFootage = function(t) {
      return new Yi(t, this.globalData, this);
    }, _e.prototype.buildAllItems = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)
        this.buildItem(t);
      this.checkPendingElements();
    }, _e.prototype.includeLayers = function(t) {
      this.completeLayers = !1;
      var e, i = t.length, s, a = this.layers.length;
      for (e = 0; e < i; e += 1)
        for (s = 0; s < a; ) {
          if (this.layers[s].id === t[e].id) {
            this.layers[s] = t[e];
            break;
          }
          s += 1;
        }
    }, _e.prototype.setProjectInterface = function(t) {
      this.globalData.projectInterface = t;
    }, _e.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, _e.prototype.buildElementParenting = function(t, e, i) {
      for (var s = this.elements, a = this.layers, o = 0, c = a.length; o < c; )
        a[o].ind == e && (!s[o] || s[o] === !0 ? (this.buildItem(o), this.addPendingElement(t)) : (i.push(s[o]), s[o].setAsParent(), a[o].parent !== void 0 ? this.buildElementParenting(t, a[o].parent, i) : t.setHierarchy(i))), o += 1;
    }, _e.prototype.addPendingElement = function(t) {
      this.pendingElements.push(t);
    }, _e.prototype.searchExtraCompositions = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1)
        if (t[e].xt) {
          var s = this.createComp(t[e]);
          s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
        }
    }, _e.prototype.getElementById = function(t) {
      var e, i = this.elements.length;
      for (e = 0; e < i; e += 1)
        if (this.elements[e].data.ind === t)
          return this.elements[e];
      return null;
    }, _e.prototype.getElementByPath = function(t) {
      var e = t.shift(), i;
      if (typeof e == "number")
        i = this.elements[e];
      else {
        var s, a = this.elements.length;
        for (s = 0; s < a; s += 1)
          if (this.elements[s].data.nm === e) {
            i = this.elements[s];
            break;
          }
      }
      return t.length === 0 ? i : i.getElementByPath(t);
    }, _e.prototype.setupGlobalData = function(t, e) {
      this.globalData.fontManager = new Et(), this.globalData.slotManager = ye(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
        w: t.w,
        h: t.h
      };
    };
    var wa = {
      TRANSFORM_EFFECT: "transformEFfect"
    };
    function Mr() {
    }
    Mr.prototype = {
      initTransform: function() {
        var e = new Qt();
        this.finalTransform = {
          mProp: this.data.ks ? Wi.getTransformProperty(this, this.data.ks, this) : {
            o: 0
          },
          _matMdf: !1,
          _localMatMdf: !1,
          _opMdf: !1,
          mat: e,
          localMat: e,
          localOpacity: 1
        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
      },
      renderTransform: function() {
        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
          var e, i = this.finalTransform.mat, s = 0, a = this.hierarchy.length;
          if (!this.finalTransform._matMdf)
            for (; s < a; ) {
              if (this.hierarchy[s].finalTransform.mProp._mdf) {
                this.finalTransform._matMdf = !0;
                break;
              }
              s += 1;
            }
          if (this.finalTransform._matMdf)
            for (e = this.finalTransform.mProp.v.props, i.cloneFromProps(e), s = 0; s < a; s += 1)
              i.multiply(this.hierarchy[s].finalTransform.mProp.v);
        }
        (!this.localTransforms || this.finalTransform._matMdf) && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
      },
      renderLocalTransform: function() {
        if (this.localTransforms) {
          var e = 0, i = this.localTransforms.length;
          if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
            for (; e < i; )
              this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
          if (this.finalTransform._localMatMdf) {
            var s = this.finalTransform.localMat;
            for (this.localTransforms[0].matrix.clone(s), e = 1; e < i; e += 1) {
              var a = this.localTransforms[e].matrix;
              s.multiply(a);
            }
            s.multiply(this.finalTransform.mat);
          }
          if (this.finalTransform._opMdf) {
            var o = this.finalTransform.localOpacity;
            for (e = 0; e < i; e += 1)
              o *= this.localTransforms[e].opacity * 0.01;
            this.finalTransform.localOpacity = o;
          }
        }
      },
      searchEffectTransforms: function() {
        if (this.renderableEffectsManager) {
          var e = this.renderableEffectsManager.getEffects(wa.TRANSFORM_EFFECT);
          if (e.length) {
            this.localTransforms = [], this.finalTransform.localMat = new Qt();
            var i = 0, s = e.length;
            for (i = 0; i < s; i += 1)
              this.localTransforms.push(e[i]);
          }
        }
      },
      globalToLocal: function(e) {
        var i = [];
        i.push(this.finalTransform);
        for (var s = !0, a = this.comp; s; )
          a.finalTransform ? (a.data.hasMask && i.splice(0, 0, a.finalTransform), a = a.comp) : s = !1;
        var o, c = i.length, b;
        for (o = 0; o < c; o += 1)
          b = i[o].mat.applyToPointArray(0, 0, 0), e = [e[0] - b[0], e[1] - b[1], 0];
        return e;
      },
      mHelper: new Qt()
    };
    function ur(t, e, i) {
      this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var s = this.globalData.defs, a, o = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = rt(o), this.solidPath = "";
      var c, b = this.masksProperties, u = 0, T = [], C, V, v = Kt(), E, L, P, N, S = "clipPath", x = "clip-path";
      for (a = 0; a < o; a += 1)
        if ((b[a].mode !== "a" && b[a].mode !== "n" || b[a].inv || b[a].o.k !== 100 || b[a].o.x) && (S = "mask", x = "mask"), (b[a].mode === "s" || b[a].mode === "i") && u === 0 ? (E = lt("rect"), E.setAttribute("fill", "#ffffff"), E.setAttribute("width", this.element.comp.data.w || 0), E.setAttribute("height", this.element.comp.data.h || 0), T.push(E)) : E = null, c = lt("path"), b[a].mode === "n")
          this.viewData[a] = {
            op: Q.getProp(this.element, b[a].o, 0, 0.01, this.element),
            prop: $i.getShapeProp(this.element, b[a], 3),
            elem: c,
            lastPath: ""
          }, s.appendChild(c);
        else {
          u += 1, c.setAttribute("fill", b[a].mode === "s" ? "#000000" : "#ffffff"), c.setAttribute("clip-rule", "nonzero");
          var m;
          if (b[a].x.k !== 0 ? (S = "mask", x = "mask", N = Q.getProp(this.element, b[a].x, 0, null, this.element), m = Kt(), L = lt("filter"), L.setAttribute("id", m), P = lt("feMorphology"), P.setAttribute("operator", "erode"), P.setAttribute("in", "SourceGraphic"), P.setAttribute("radius", "0"), L.appendChild(P), s.appendChild(L), c.setAttribute("stroke", b[a].mode === "s" ? "#000000" : "#ffffff")) : (P = null, N = null), this.storedData[a] = {
            elem: c,
            x: N,
            expan: P,
            lastPath: "",
            lastOperator: "",
            filterId: m,
            lastRadius: 0
          }, b[a].mode === "i") {
            V = T.length;
            var _ = lt("g");
            for (C = 0; C < V; C += 1)
              _.appendChild(T[C]);
            var A = lt("mask");
            A.setAttribute("mask-type", "alpha"), A.setAttribute("id", v + "_" + u), A.appendChild(c), s.appendChild(A), _.setAttribute("mask", "url(" + U() + "#" + v + "_" + u + ")"), T.length = 0, T.push(_);
          } else
            T.push(c);
          b[a].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[a] = {
            elem: c,
            lastPath: "",
            op: Q.getProp(this.element, b[a].o, 0, 0.01, this.element),
            prop: $i.getShapeProp(this.element, b[a], 3),
            invRect: E
          }, this.viewData[a].prop.k || this.drawPath(b[a], this.viewData[a].prop.v, this.viewData[a]);
        }
      for (this.maskElement = lt(S), o = T.length, a = 0; a < o; a += 1)
        this.maskElement.appendChild(T[a]);
      u > 0 && (this.maskElement.setAttribute("id", v), this.element.maskedElement.setAttribute(x, "url(" + U() + "#" + v + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    ur.prototype.getMaskProperty = function(t) {
      return this.viewData[t].prop;
    }, ur.prototype.renderFrame = function(t) {
      var e = this.element.finalTransform.mat, i, s = this.masksProperties.length;
      for (i = 0; i < s; i += 1)
        if ((this.viewData[i].prop._mdf || t) && this.drawPath(this.masksProperties[i], this.viewData[i].prop.v, this.viewData[i]), (this.viewData[i].op._mdf || t) && this.viewData[i].elem.setAttribute("fill-opacity", this.viewData[i].op.v), this.masksProperties[i].mode !== "n" && (this.viewData[i].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[i].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[i].x && (this.storedData[i].x._mdf || t))) {
          var a = this.storedData[i].expan;
          this.storedData[i].x.v < 0 ? (this.storedData[i].lastOperator !== "erode" && (this.storedData[i].lastOperator = "erode", this.storedData[i].elem.setAttribute("filter", "url(" + U() + "#" + this.storedData[i].filterId + ")")), a.setAttribute("radius", -this.storedData[i].x.v)) : (this.storedData[i].lastOperator !== "dilate" && (this.storedData[i].lastOperator = "dilate", this.storedData[i].elem.setAttribute("filter", null)), this.storedData[i].elem.setAttribute("stroke-width", this.storedData[i].x.v * 2));
        }
    }, ur.prototype.getMaskelement = function() {
      return this.maskElement;
    }, ur.prototype.createLayerSolidPath = function() {
      var t = "M0,0 ";
      return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
    }, ur.prototype.drawPath = function(t, e, i) {
      var s = " M" + e.v[0][0] + "," + e.v[0][1], a, o;
      for (o = e._length, a = 1; a < o; a += 1)
        s += " C" + e.o[a - 1][0] + "," + e.o[a - 1][1] + " " + e.i[a][0] + "," + e.i[a][1] + " " + e.v[a][0] + "," + e.v[a][1];
      if (e.c && o > 1 && (s += " C" + e.o[a - 1][0] + "," + e.o[a - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== s) {
        var c = "";
        i.elem && (e.c && (c = t.inv ? this.solidPath + s : s), i.elem.setAttribute("d", c)), i.lastPath = s;
      }
    }, ur.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    };
    var qr = function() {
      var t = {};
      t.createFilter = e, t.createAlphaToLuminanceFilter = i;
      function e(s, a) {
        var o = lt("filter");
        return o.setAttribute("id", s), a !== !0 && (o.setAttribute("filterUnits", "objectBoundingBox"), o.setAttribute("x", "0%"), o.setAttribute("y", "0%"), o.setAttribute("width", "100%"), o.setAttribute("height", "100%")), o;
      }
      function i() {
        var s = lt("feColorMatrix");
        return s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), s;
      }
      return t;
    }(), On = function() {
      var t = {
        maskType: !0,
        svgLumaHidden: !0,
        offscreenCanvas: typeof OffscreenCanvas < "u"
      };
      return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t;
    }(), Ys = {}, Nn = "filter_result_";
    function Xs(t) {
      var e, i = "SourceGraphic", s = t.data.ef ? t.data.ef.length : 0, a = Kt(), o = qr.createFilter(a, !0), c = 0;
      this.filters = [];
      var b;
      for (e = 0; e < s; e += 1) {
        b = null;
        var u = t.data.ef[e].ty;
        if (Ys[u]) {
          var T = Ys[u].effect;
          b = new T(o, t.effectsManager.effectElements[e], t, Nn + c, i), i = Nn + c, Ys[u].countsAsEffect && (c += 1);
        }
        b && this.filters.push(b);
      }
      c && (t.globalData.defs.appendChild(o), t.layerElement.setAttribute("filter", "url(" + U() + "#" + a + ")")), this.filters.length && t.addRenderableComponent(this);
    }
    Xs.prototype.renderFrame = function(t) {
      var e, i = this.filters.length;
      for (e = 0; e < i; e += 1)
        this.filters[e].renderFrame(t);
    }, Xs.prototype.getEffects = function(t) {
      var e, i = this.filters.length, s = [];
      for (e = 0; e < i; e += 1)
        this.filters[e].type === t && s.push(this.filters[e]);
      return s;
    };
    function Gr() {
    }
    Gr.prototype = {
      initRendererElement: function() {
        this.layerElement = lt("g");
      },
      createContainerElements: function() {
        this.matteElement = lt("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
        var e = null;
        if (this.data.td) {
          this.matteMasks = {};
          var i = lt("g");
          i.setAttribute("id", this.layerId), i.appendChild(this.layerElement), e = i, this.globalData.defs.appendChild(i);
        } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
          var s = lt("clipPath"), a = lt("path");
          a.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
          var o = Kt();
          if (s.setAttribute("id", o), s.appendChild(a), this.globalData.defs.appendChild(s), this.checkMasks()) {
            var c = lt("g");
            c.setAttribute("clip-path", "url(" + U() + "#" + o + ")"), c.appendChild(this.layerElement), this.transformedElement = c, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
          } else
            this.layerElement.setAttribute("clip-path", "url(" + U() + "#" + o + ")");
        }
        this.data.bm !== 0 && this.setBlendMode();
      },
      renderElement: function() {
        this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
      },
      destroyBaseElement: function() {
        this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
      },
      getBaseElement: function() {
        return this.data.hd ? null : this.baseElement;
      },
      createRenderableComponents: function() {
        this.maskManager = new ur(this.data, this, this.globalData), this.renderableEffectsManager = new Xs(this), this.searchEffectTransforms();
      },
      getMatte: function(e) {
        if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
          var i = this.layerId + "_" + e, s, a, o, c;
          if (e === 1 || e === 3) {
            var b = lt("mask");
            b.setAttribute("id", i), b.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), o = lt("use"), o.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), b.appendChild(o), this.globalData.defs.appendChild(b), !On.maskType && e === 1 && (b.setAttribute("mask-type", "luminance"), s = Kt(), a = qr.createFilter(s), this.globalData.defs.appendChild(a), a.appendChild(qr.createAlphaToLuminanceFilter()), c = lt("g"), c.appendChild(o), b.appendChild(c), c.setAttribute("filter", "url(" + U() + "#" + s + ")"));
          } else if (e === 2) {
            var u = lt("mask");
            u.setAttribute("id", i), u.setAttribute("mask-type", "alpha");
            var T = lt("g");
            u.appendChild(T), s = Kt(), a = qr.createFilter(s);
            var C = lt("feComponentTransfer");
            C.setAttribute("in", "SourceGraphic"), a.appendChild(C);
            var V = lt("feFuncA");
            V.setAttribute("type", "table"), V.setAttribute("tableValues", "1.0 0.0"), C.appendChild(V), this.globalData.defs.appendChild(a);
            var v = lt("rect");
            v.setAttribute("width", this.comp.data.w), v.setAttribute("height", this.comp.data.h), v.setAttribute("x", "0"), v.setAttribute("y", "0"), v.setAttribute("fill", "#ffffff"), v.setAttribute("opacity", "0"), T.setAttribute("filter", "url(" + U() + "#" + s + ")"), T.appendChild(v), o = lt("use"), o.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), T.appendChild(o), On.maskType || (u.setAttribute("mask-type", "luminance"), a.appendChild(qr.createAlphaToLuminanceFilter()), c = lt("g"), T.appendChild(v), c.appendChild(this.layerElement), T.appendChild(c)), this.globalData.defs.appendChild(u);
          }
          this.matteMasks[e] = i;
        }
        return this.matteMasks[e];
      },
      setMatte: function(e) {
        this.matteElement && this.matteElement.setAttribute("mask", "url(" + U() + "#" + e + ")");
      }
    };
    function Ir() {
    }
    Ir.prototype = {
      /**
         * @function
         * Initializes hierarchy properties
         *
         */
      initHierarchy: function() {
        this.hierarchy = [], this._isParent = !1, this.checkParenting();
      },
      /**
         * @function
         * Sets layer's hierarchy.
         * @param {array} hierarch
         * layer's parent list
         *
         */
      setHierarchy: function(e) {
        this.hierarchy = e;
      },
      /**
         * @function
         * Sets layer as parent.
         *
         */
      setAsParent: function() {
        this._isParent = !0;
      },
      /**
         * @function
         * Searches layer's parenting chain
         *
         */
      checkParenting: function() {
        this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
      }
    };
    function Yr() {
    }
    (function() {
      var t = {
        initElement: function(i, s, a) {
          this.initFrame(), this.initBaseData(i, s, a), this.initTransform(i, s, a), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
        },
        hide: function() {
          if (!this.hidden && (!this.isInRange || this.isTransparent)) {
            var i = this.baseElement || this.layerElement;
            i.style.display = "none", this.hidden = !0;
          }
        },
        show: function() {
          if (this.isInRange && !this.isTransparent) {
            if (!this.data.hd) {
              var i = this.baseElement || this.layerElement;
              i.style.display = "block";
            }
            this.hidden = !1, this._isFirstFrame = !0;
          }
        },
        renderFrame: function() {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
        },
        renderInnerContent: function() {
        },
        prepareFrame: function(i) {
          this._mdf = !1, this.prepareRenderableFrame(i), this.prepareProperties(i, this.isInRange), this.checkTransparency();
        },
        destroy: function() {
          this.innerElem = null, this.destroyBaseElement();
        }
      };
      H([Hi, O(t)], Yr);
    })();
    function Xr(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = {
        top: 0,
        left: 0,
        width: this.assetData.w,
        height: this.assetData.h
      };
    }
    H([qi, Mr, Gr, Ir, Gi, Yr], Xr), Xr.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = lt("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
    }, Xr.prototype.sourceRectAtTime = function() {
      return this.sourceRect;
    };
    function ka(t, e) {
      this.elem = t, this.pos = e;
    }
    function zn() {
    }
    zn.prototype = {
      addShapeToModifiers: function(e) {
        var i, s = this.shapeModifiers.length;
        for (i = 0; i < s; i += 1)
          this.shapeModifiers[i].addShape(e);
      },
      isShapeInAnimatedModifiers: function(e) {
        for (var i = 0, s = this.shapeModifiers.length; i < s; )
          if (this.shapeModifiers[i].isAnimatedWithShape(e))
            return !0;
        return !1;
      },
      renderModifiers: function() {
        if (this.shapeModifiers.length) {
          var e, i = this.shapes.length;
          for (e = 0; e < i; e += 1)
            this.shapes[e].sh.reset();
          i = this.shapeModifiers.length;
          var s;
          for (e = i - 1; e >= 0 && (s = this.shapeModifiers[e].processShapes(this._isFirstFrame), !s); e -= 1)
            ;
        }
      },
      searchProcessedElement: function(e) {
        for (var i = this.processedElements, s = 0, a = i.length; s < a; ) {
          if (i[s].elem === e)
            return i[s].pos;
          s += 1;
        }
        return 0;
      },
      addProcessedElement: function(e, i) {
        for (var s = this.processedElements, a = s.length; a; )
          if (a -= 1, s[a].elem === e) {
            s[a].pos = i;
            return;
          }
        s.push(new ka(e, i));
      },
      prepareFrame: function(e) {
        this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
      }
    };
    var Dn = {
      1: "butt",
      2: "round",
      3: "square"
    }, Bn = {
      1: "miter",
      2: "round",
      3: "bevel"
    };
    function Vn(t, e, i) {
      this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
      for (var s = 0, a = t.length; s < a; ) {
        if (t[s].mProps.dynamicProperties.length) {
          this._isAnimated = !0;
          break;
        }
        s += 1;
      }
    }
    Vn.prototype.setAsAnimated = function() {
      this._isAnimated = !0;
    };
    function $n(t, e) {
      this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = t.hd === !0, this.pElem = lt("path"), this.msElem = null;
    }
    $n.prototype.reset = function() {
      this.d = "", this._mdf = !1;
    };
    function ms(t, e, i, s) {
      this.elem = t, this.frameId = -1, this.dataProps = rt(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = at("float32", e.length ? e.length - 1 : 0), this.dashoffset = at("float32", 1), this.initDynamicPropertyContainer(s);
      var a, o = e.length || 0, c;
      for (a = 0; a < o; a += 1)
        c = Q.getProp(t, e[a].v, 0, 0, this), this.k = c.k || this.k, this.dataProps[a] = {
          n: e[a].n,
          p: c
        };
      this.k || this.getValue(!0), this._isAnimated = this.k;
    }
    ms.prototype.getValue = function(t) {
      if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
        var e = 0, i = this.dataProps.length;
        for (this.renderer === "svg" && (this.dashStr = ""), e = 0; e < i; e += 1)
          this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
      }
    }, H([Bt], ms);
    function jn(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = Q.getProp(t, e.o, 0, 0.01, this), this.w = Q.getProp(t, e.w, 0, null, this), this.d = new ms(t, e.d || {}, "svg", this), this.c = Q.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated;
    }
    H([Bt], jn);
    function Un(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = Q.getProp(t, e.o, 0, 0.01, this), this.c = Q.getProp(t, e.c, 1, 255, this), this.style = i;
    }
    H([Bt], Un);
    function Wn(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i;
    }
    H([Bt], Wn);
    function Zr(t, e, i) {
      this.data = e, this.c = at("uint8c", e.p * 4);
      var s = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
      this.o = at("float32", s), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(i), this.prop = Q.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
    }
    Zr.prototype.comparePoints = function(t, e) {
      for (var i = 0, s = this.o.length / 2, a; i < s; ) {
        if (a = Math.abs(t[i * 4] - t[e * 4 + i * 2]), a > 0.01)
          return !1;
        i += 1;
      }
      return !0;
    }, Zr.prototype.checkCollapsable = function() {
      if (this.o.length / 2 !== this.c.length / 4)
        return !1;
      if (this.data.k.k[0].s)
        for (var t = 0, e = this.data.k.k.length; t < e; ) {
          if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
            return !1;
          t += 1;
        }
      else if (!this.comparePoints(this.data.k.k, this.data.p))
        return !1;
      return !0;
    }, Zr.prototype.getValue = function(t) {
      if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
        var e, i = this.data.p * 4, s, a;
        for (e = 0; e < i; e += 1)
          s = e % 4 === 0 ? 100 : 255, a = Math.round(this.prop.v[e] * s), this.c[e] !== a && (this.c[e] = a, this._cmdf = !t);
        if (this.o.length)
          for (i = this.prop.v.length, e = this.data.p * 4; e < i; e += 1)
            s = e % 2 === 0 ? 100 : 1, a = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== a && (this.o[e - this.data.p * 4] = a, this._omdf = !t);
        this._mdf = !t;
      }
    }, H([Bt], Zr);
    function Lr(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i);
    }
    Lr.prototype.initGradientData = function(t, e, i) {
      this.o = Q.getProp(t, e.o, 0, 0.01, this), this.s = Q.getProp(t, e.s, 1, null, this), this.e = Q.getProp(t, e.e, 1, null, this), this.h = Q.getProp(t, e.h || {
        k: 0
      }, 0, 0.01, this), this.a = Q.getProp(t, e.a || {
        k: 0
      }, 0, Pt, this), this.g = new Zr(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated;
    }, Lr.prototype.setGradientData = function(t, e) {
      var i = Kt(), s = lt(e.t === 1 ? "linearGradient" : "radialGradient");
      s.setAttribute("id", i), s.setAttribute("spreadMethod", "pad"), s.setAttribute("gradientUnits", "userSpaceOnUse");
      var a = [], o, c, b;
      for (b = e.g.p * 4, c = 0; c < b; c += 4)
        o = lt("stop"), s.appendChild(o), a.push(o);
      t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + U() + "#" + i + ")"), this.gf = s, this.cst = a;
    }, Lr.prototype.setGradientOpacity = function(t, e) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var i, s, a, o = lt("mask"), c = lt("path");
        o.appendChild(c);
        var b = Kt(), u = Kt();
        o.setAttribute("id", u);
        var T = lt(t.t === 1 ? "linearGradient" : "radialGradient");
        T.setAttribute("id", b), T.setAttribute("spreadMethod", "pad"), T.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var C = this.stops;
        for (s = t.g.p * 4; s < a; s += 2)
          i = lt("stop"), i.setAttribute("stop-color", "rgb(255,255,255)"), T.appendChild(i), C.push(i);
        c.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + U() + "#" + b + ")"), t.ty === "gs" && (c.setAttribute("stroke-linecap", Dn[t.lc || 2]), c.setAttribute("stroke-linejoin", Bn[t.lj || 2]), t.lj === 1 && c.setAttribute("stroke-miterlimit", t.ml)), this.of = T, this.ms = o, this.ost = C, this.maskId = u, e.msElem = c;
      }
    }, H([Bt], Lr);
    function Hn(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = Q.getProp(t, e.w, 0, null, this), this.d = new ms(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated;
    }
    H([Lr, Bt], Hn);
    function xa() {
      this.it = [], this.prevViewData = [], this.gr = lt("g");
    }
    function Ta(t, e, i) {
      this.transform = {
        mProps: t,
        op: e,
        container: i
      }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    var qn = function(e, i, s, a) {
      if (i === 0)
        return "";
      var o = e.o, c = e.i, b = e.v, u, T = " M" + a.applyToPointStringified(b[0][0], b[0][1]);
      for (u = 1; u < i; u += 1)
        T += " C" + a.applyToPointStringified(o[u - 1][0], o[u - 1][1]) + " " + a.applyToPointStringified(c[u][0], c[u][1]) + " " + a.applyToPointStringified(b[u][0], b[u][1]);
      return s && i && (T += " C" + a.applyToPointStringified(o[u - 1][0], o[u - 1][1]) + " " + a.applyToPointStringified(c[0][0], c[0][1]) + " " + a.applyToPointStringified(b[0][0], b[0][1]), T += "z"), T;
    }, Aa = function() {
      var t = new Qt(), e = new Qt(), i = {
        createRenderFunction: s
      };
      function s(V) {
        switch (V.ty) {
          case "fl":
            return b;
          case "gf":
            return T;
          case "gs":
            return u;
          case "st":
            return C;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return c;
          case "tr":
            return a;
          case "no":
            return o;
          default:
            return null;
        }
      }
      function a(V, v, E) {
        (E || v.transform.op._mdf) && v.transform.container.setAttribute("opacity", v.transform.op.v), (E || v.transform.mProps._mdf) && v.transform.container.setAttribute("transform", v.transform.mProps.v.to2dCSS());
      }
      function o() {
      }
      function c(V, v, E) {
        var L, P, N, S, x, m, _ = v.styles.length, A = v.lvl, F, B, j, X;
        for (m = 0; m < _; m += 1) {
          if (S = v.sh._mdf || E, v.styles[m].lvl < A) {
            for (B = e.reset(), j = A - v.styles[m].lvl, X = v.transformers.length - 1; !S && j > 0; )
              S = v.transformers[X].mProps._mdf || S, j -= 1, X -= 1;
            if (S)
              for (j = A - v.styles[m].lvl, X = v.transformers.length - 1; j > 0; )
                B.multiply(v.transformers[X].mProps.v), j -= 1, X -= 1;
          } else
            B = t;
          if (F = v.sh.paths, P = F._length, S) {
            for (N = "", L = 0; L < P; L += 1)
              x = F.shapes[L], x && x._length && (N += qn(x, x._length, x.c, B));
            v.caches[m] = N;
          } else
            N = v.caches[m];
          v.styles[m].d += V.hd === !0 ? "" : N, v.styles[m]._mdf = S || v.styles[m]._mdf;
        }
      }
      function b(V, v, E) {
        var L = v.style;
        (v.c._mdf || E) && L.pElem.setAttribute("fill", "rgb(" + Ht(v.c.v[0]) + "," + Ht(v.c.v[1]) + "," + Ht(v.c.v[2]) + ")"), (v.o._mdf || E) && L.pElem.setAttribute("fill-opacity", v.o.v);
      }
      function u(V, v, E) {
        T(V, v, E), C(V, v, E);
      }
      function T(V, v, E) {
        var L = v.gf, P = v.g._hasOpacity, N = v.s.v, S = v.e.v;
        if (v.o._mdf || E) {
          var x = V.ty === "gf" ? "fill-opacity" : "stroke-opacity";
          v.style.pElem.setAttribute(x, v.o.v);
        }
        if (v.s._mdf || E) {
          var m = V.t === 1 ? "x1" : "cx", _ = m === "x1" ? "y1" : "cy";
          L.setAttribute(m, N[0]), L.setAttribute(_, N[1]), P && !v.g._collapsable && (v.of.setAttribute(m, N[0]), v.of.setAttribute(_, N[1]));
        }
        var A, F, B, j;
        if (v.g._cmdf || E) {
          A = v.cst;
          var X = v.g.c;
          for (B = A.length, F = 0; F < B; F += 1)
            j = A[F], j.setAttribute("offset", X[F * 4] + "%"), j.setAttribute("stop-color", "rgb(" + X[F * 4 + 1] + "," + X[F * 4 + 2] + "," + X[F * 4 + 3] + ")");
        }
        if (P && (v.g._omdf || E)) {
          var mt = v.g.o;
          for (v.g._collapsable ? A = v.cst : A = v.ost, B = A.length, F = 0; F < B; F += 1)
            j = A[F], v.g._collapsable || j.setAttribute("offset", mt[F * 2] + "%"), j.setAttribute("stop-opacity", mt[F * 2 + 1]);
        }
        if (V.t === 1)
          (v.e._mdf || E) && (L.setAttribute("x2", S[0]), L.setAttribute("y2", S[1]), P && !v.g._collapsable && (v.of.setAttribute("x2", S[0]), v.of.setAttribute("y2", S[1])));
        else {
          var ft;
          if ((v.s._mdf || v.e._mdf || E) && (ft = Math.sqrt(Math.pow(N[0] - S[0], 2) + Math.pow(N[1] - S[1], 2)), L.setAttribute("r", ft), P && !v.g._collapsable && v.of.setAttribute("r", ft)), v.s._mdf || v.e._mdf || v.h._mdf || v.a._mdf || E) {
            ft || (ft = Math.sqrt(Math.pow(N[0] - S[0], 2) + Math.pow(N[1] - S[1], 2)));
            var J = Math.atan2(S[1] - N[1], S[0] - N[0]), vt = v.h.v;
            vt >= 1 ? vt = 0.99 : vt <= -1 && (vt = -0.99);
            var st = ft * vt, Y = Math.cos(J + v.a.v) * st + N[0], w = Math.sin(J + v.a.v) * st + N[1];
            L.setAttribute("fx", Y), L.setAttribute("fy", w), P && !v.g._collapsable && (v.of.setAttribute("fx", Y), v.of.setAttribute("fy", w));
          }
        }
      }
      function C(V, v, E) {
        var L = v.style, P = v.d;
        P && (P._mdf || E) && P.dashStr && (L.pElem.setAttribute("stroke-dasharray", P.dashStr), L.pElem.setAttribute("stroke-dashoffset", P.dashoffset[0])), v.c && (v.c._mdf || E) && L.pElem.setAttribute("stroke", "rgb(" + Ht(v.c.v[0]) + "," + Ht(v.c.v[1]) + "," + Ht(v.c.v[2]) + ")"), (v.o._mdf || E) && L.pElem.setAttribute("stroke-opacity", v.o.v), (v.w._mdf || E) && (L.pElem.setAttribute("stroke-width", v.w.v), L.msElem && L.msElem.setAttribute("stroke-width", v.w.v));
      }
      return i;
    }();
    function te(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = [];
    }
    H([qi, Mr, Gr, zn, Ir, Gi, Yr], te), te.prototype.initSecondaryElement = function() {
    }, te.prototype.identityMatrix = new Qt(), te.prototype.buildExpressionInterface = function() {
    }, te.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
    }, te.prototype.filterUniqueShapes = function() {
      var t, e = this.shapes.length, i, s, a = this.stylesList.length, o, c = [], b = !1;
      for (s = 0; s < a; s += 1) {
        for (o = this.stylesList[s], b = !1, c.length = 0, t = 0; t < e; t += 1)
          i = this.shapes[t], i.styles.indexOf(o) !== -1 && (c.push(i), b = i._isAnimated || b);
        c.length > 1 && b && this.setShapesAsAnimated(c);
      }
    }, te.prototype.setShapesAsAnimated = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1)
        t[e].setAsAnimated();
    }, te.prototype.createStyleElement = function(t, e) {
      var i, s = new $n(t, e), a = s.pElem;
      if (t.ty === "st")
        i = new jn(this, t, s);
      else if (t.ty === "fl")
        i = new Un(this, t, s);
      else if (t.ty === "gf" || t.ty === "gs") {
        var o = t.ty === "gf" ? Lr : Hn;
        i = new o(this, t, s), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), a.setAttribute("mask", "url(" + U() + "#" + i.maskId + ")"));
      } else t.ty === "no" && (i = new Wn(this, t, s));
      return (t.ty === "st" || t.ty === "gs") && (a.setAttribute("stroke-linecap", Dn[t.lc || 2]), a.setAttribute("stroke-linejoin", Bn[t.lj || 2]), a.setAttribute("fill-opacity", "0"), t.lj === 1 && a.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = ne(t.bm)), this.stylesList.push(s), this.addToAnimatedContents(t, i), i;
    }, te.prototype.createGroupElement = function(t) {
      var e = new xa();
      return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = ne(t.bm)), e;
    }, te.prototype.createTransformElement = function(t, e) {
      var i = Wi.getTransformProperty(this, t, this), s = new Ta(i, i.o, e);
      return this.addToAnimatedContents(t, s), s;
    }, te.prototype.createShapeElement = function(t, e, i) {
      var s = 4;
      t.ty === "rc" ? s = 5 : t.ty === "el" ? s = 6 : t.ty === "sr" && (s = 7);
      var a = $i.getShapeProp(this, t, s, this), o = new Vn(e, i, a);
      return this.shapes.push(o), this.addShapeToModifiers(o), this.addToAnimatedContents(t, o), o;
    }, te.prototype.addToAnimatedContents = function(t, e) {
      for (var i = 0, s = this.animatedContents.length; i < s; ) {
        if (this.animatedContents[i].element === e)
          return;
        i += 1;
      }
      this.animatedContents.push({
        fn: Aa.createRenderFunction(t),
        element: e,
        data: t
      });
    }, te.prototype.setElementStyles = function(t) {
      var e = t.styles, i, s = this.stylesList.length;
      for (i = 0; i < s; i += 1)
        e.indexOf(this.stylesList[i]) === -1 && !this.stylesList[i].closed && e.push(this.stylesList[i]);
    }, te.prototype.reloadShapes = function() {
      this._isFirstFrame = !0;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1)
        this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
        this.dynamicProperties[t].getValue();
      this.renderModifiers();
    }, te.prototype.searchShapes = function(t, e, i, s, a, o, c) {
      var b = [].concat(o), u, T = t.length - 1, C, V, v = [], E = [], L, P, N;
      for (u = T; u >= 0; u -= 1) {
        if (N = this.searchProcessedElement(t[u]), N ? e[u] = i[N - 1] : t[u]._render = c, t[u].ty === "fl" || t[u].ty === "st" || t[u].ty === "gf" || t[u].ty === "gs" || t[u].ty === "no")
          N ? e[u].style.closed = t[u].hd : e[u] = this.createStyleElement(t[u], a), t[u]._render && e[u].style.pElem.parentNode !== s && s.appendChild(e[u].style.pElem), v.push(e[u].style);
        else if (t[u].ty === "gr") {
          if (!N)
            e[u] = this.createGroupElement(t[u]);
          else
            for (V = e[u].it.length, C = 0; C < V; C += 1)
              e[u].prevViewData[C] = e[u].it[C];
          this.searchShapes(t[u].it, e[u].it, e[u].prevViewData, e[u].gr, a + 1, b, c), t[u]._render && e[u].gr.parentNode !== s && s.appendChild(e[u].gr);
        } else t[u].ty === "tr" ? (N || (e[u] = this.createTransformElement(t[u], s)), L = e[u].transform, b.push(L)) : t[u].ty === "sh" || t[u].ty === "rc" || t[u].ty === "el" || t[u].ty === "sr" ? (N || (e[u] = this.createShapeElement(t[u], b, a)), this.setElementStyles(e[u])) : t[u].ty === "tm" || t[u].ty === "rd" || t[u].ty === "ms" || t[u].ty === "pb" || t[u].ty === "zz" || t[u].ty === "op" ? (N ? (P = e[u], P.closed = !1) : (P = li.getModifier(t[u].ty), P.init(this, t[u]), e[u] = P, this.shapeModifiers.push(P)), E.push(P)) : t[u].ty === "rp" && (N ? (P = e[u], P.closed = !0) : (P = li.getModifier(t[u].ty), e[u] = P, P.init(this, t, u, e), this.shapeModifiers.push(P), c = !1), E.push(P));
        this.addProcessedElement(t[u], u + 1);
      }
      for (T = v.length, u = 0; u < T; u += 1)
        v[u].closed = !0;
      for (T = E.length, u = 0; u < T; u += 1)
        E[u].closed = !0;
    }, te.prototype.renderInnerContent = function() {
      this.renderModifiers();
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1)
        this.stylesList[t].reset();
      for (this.renderShape(), t = 0; t < e; t += 1)
        (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
    }, te.prototype.renderShape = function() {
      var t, e = this.animatedContents.length, i;
      for (t = 0; t < e; t += 1)
        i = this.animatedContents[t], (this._isFirstFrame || i.element._isAnimated) && i.data !== !0 && i.fn(i.data, i.element, this._isFirstFrame);
    }, te.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    };
    function Zs(t, e, i, s, a, o) {
      this.o = t, this.sw = e, this.sc = i, this.fc = s, this.m = a, this.p = o, this._mdf = {
        o: !0,
        sw: !!e,
        sc: !!i,
        fc: !!s,
        m: !0,
        p: !0
      };
    }
    Zs.prototype.update = function(t, e, i, s, a, o) {
      this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
      var c = !1;
      return this.o !== t && (this.o = t, this._mdf.o = !0, c = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, c = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, c = !0), this.fc !== s && (this.fc = s, this._mdf.fc = !0, c = !0), this.m !== a && (this.m = a, this._mdf.m = !0, c = !0), o.length && (this.p[0] !== o[0] || this.p[1] !== o[1] || this.p[4] !== o[4] || this.p[5] !== o[5] || this.p[12] !== o[12] || this.p[13] !== o[13]) && (this.p = o, this._mdf.p = !0, c = !0), c;
    };
    function xe(t, e) {
      this._frameId = p, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
        ascent: 0,
        boxWidth: this.defaultBoxWidth,
        f: "",
        fStyle: "",
        fWeight: "",
        fc: "",
        j: "",
        justifyOffset: "",
        l: [],
        lh: 0,
        lineWidths: [],
        ls: "",
        of: "",
        s: "",
        sc: "",
        sw: 0,
        t: 0,
        tr: 0,
        sz: 0,
        ps: null,
        fillColorAnim: !1,
        strokeColorAnim: !1,
        strokeWidthAnim: !1,
        yOffset: 0,
        finalSize: 0,
        finalText: [],
        finalLineHeight: 0,
        __complete: !1
      }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    xe.prototype.defaultBoxWidth = [0, 0], xe.prototype.copyData = function(t, e) {
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      return t;
    }, xe.prototype.setCurrentData = function(t) {
      t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
    }, xe.prototype.searchProperty = function() {
      return this.searchKeyframes();
    }, xe.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, xe.prototype.addEffect = function(t) {
      this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
    }, xe.prototype.getValue = function(t) {
      if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var e = this.currentData, i = this.keysIndex;
        if (this.lock) {
          this.setCurrentData(this.currentData);
          return;
        }
        this.lock = !0, this._mdf = !1;
        var s, a = this.effectsSequence.length, o = t || this.data.d.k[this.keysIndex].s;
        for (s = 0; s < a; s += 1)
          i !== this.keysIndex ? o = this.effectsSequence[s](o, o.t) : o = this.effectsSequence[s](this.currentData, o.t);
        e !== o && this.setCurrentData(o), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }, xe.prototype.getKeyframeValue = function() {
      for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, s = t.length; i <= s - 1 && !(i === s - 1 || t[i + 1].t > e); )
        i += 1;
      return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s;
    }, xe.prototype.buildFinalText = function(t) {
      for (var e = [], i = 0, s = t.length, a, o, c = !1, b = !1, u = ""; i < s; )
        c = b, b = !1, a = t.charCodeAt(i), u = t.charAt(i), Et.isCombinedCharacter(a) ? c = !0 : a >= 55296 && a <= 56319 ? Et.isRegionalFlag(t, i) ? u = t.substr(i, 14) : (o = t.charCodeAt(i + 1), o >= 56320 && o <= 57343 && (Et.isModifier(a, o) ? (u = t.substr(i, 2), c = !0) : Et.isFlagEmoji(t.substr(i, 4)) ? u = t.substr(i, 4) : u = t.substr(i, 2))) : a > 56319 ? (o = t.charCodeAt(i + 1), Et.isVariationSelector(a) && (c = !0)) : Et.isZeroWidthJoiner(a) && (c = !0, b = !0), c ? (e[e.length - 1] += u, c = !1) : e.push(u), i += u.length;
      return e;
    }, xe.prototype.completeTextData = function(t) {
      t.__complete = !0;
      var e = this.elem.globalData.fontManager, i = this.data, s = [], a, o, c, b = 0, u, T = i.m.g, C = 0, V = 0, v = 0, E = [], L = 0, P = 0, N, S, x = e.getFontByName(t.f), m, _ = 0, A = Lt(x);
      t.fWeight = A.weight, t.fStyle = A.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), o = t.finalText.length, t.finalLineHeight = t.lh;
      var F = t.tr / 1e3 * t.finalSize, B;
      if (t.sz)
        for (var j = !0, X = t.sz[0], mt = t.sz[1], ft, J; j; ) {
          J = this.buildFinalText(t.t), ft = 0, L = 0, o = J.length, F = t.tr / 1e3 * t.finalSize;
          var vt = -1;
          for (a = 0; a < o; a += 1)
            B = J[a].charCodeAt(0), c = !1, J[a] === " " ? vt = a : (B === 13 || B === 3) && (L = 0, c = !0, ft += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (m = e.getCharData(J[a], x.fStyle, x.fFamily), _ = c ? 0 : m.w * t.finalSize / 100) : _ = e.measureText(J[a], t.f, t.finalSize), L + _ > X && J[a] !== " " ? (vt === -1 ? o += 1 : a = vt, ft += t.finalLineHeight || t.finalSize * 1.2, J.splice(a, vt === a ? 1 : 0, "\r"), vt = -1, L = 0) : (L += _, L += F);
          ft += x.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && mt < ft ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = J, o = t.finalText.length, j = !1);
        }
      L = -F, _ = 0;
      var st = 0, Y;
      for (a = 0; a < o; a += 1)
        if (c = !1, Y = t.finalText[a], B = Y.charCodeAt(0), B === 13 || B === 3 ? (st = 0, E.push(L), P = L > P ? L : P, L = -2 * F, u = "", c = !0, v += 1) : u = Y, e.chars ? (m = e.getCharData(Y, x.fStyle, e.getFontByName(t.f).fFamily), _ = c ? 0 : m.w * t.finalSize / 100) : _ = e.measureText(u, t.f, t.finalSize), Y === " " ? st += _ + F : (L += _ + F + st, st = 0), s.push({
          l: _,
          an: _,
          add: C,
          n: c,
          anIndexes: [],
          val: u,
          line: v,
          animatorJustifyOffset: 0
        }), T == 2) {
          if (C += _, u === "" || u === " " || a === o - 1) {
            for ((u === "" || u === " ") && (C -= _); V <= a; )
              s[V].an = C, s[V].ind = b, s[V].extra = _, V += 1;
            b += 1, C = 0;
          }
        } else if (T == 3) {
          if (C += _, u === "" || a === o - 1) {
            for (u === "" && (C -= _); V <= a; )
              s[V].an = C, s[V].ind = b, s[V].extra = _, V += 1;
            C = 0, b += 1;
          }
        } else
          s[b].ind = b, s[b].extra = 0, b += 1;
      if (t.l = s, P = L > P ? L : P, E.push(L), t.sz)
        t.boxWidth = t.sz[0], t.justifyOffset = 0;
      else
        switch (t.boxWidth = P, t.j) {
          case 1:
            t.justifyOffset = -t.boxWidth;
            break;
          case 2:
            t.justifyOffset = -t.boxWidth / 2;
            break;
          default:
            t.justifyOffset = 0;
        }
      t.lineWidths = E;
      var w = i.a, M, f;
      S = w.length;
      var d, $, R = [];
      for (N = 0; N < S; N += 1) {
        for (M = w[N], M.a.sc && (t.strokeColorAnim = !0), M.a.sw && (t.strokeWidthAnim = !0), (M.a.fc || M.a.fh || M.a.fs || M.a.fb) && (t.fillColorAnim = !0), $ = 0, d = M.s.b, a = 0; a < o; a += 1)
          f = s[a], f.anIndexes[N] = $, (d == 1 && f.val !== "" || d == 2 && f.val !== "" && f.val !== " " || d == 3 && (f.n || f.val == " " || a == o - 1) || d == 4 && (f.n || a == o - 1)) && (M.s.rn === 1 && R.push($), $ += 1);
        i.a[N].s.totalChars = $;
        var it = -1, pt;
        if (M.s.rn === 1)
          for (a = 0; a < o; a += 1)
            f = s[a], it != f.anIndexes[N] && (it = f.anIndexes[N], pt = R.splice(Math.floor(Math.random() * R.length), 1)[0]), f.anIndexes[N] = pt;
      }
      t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = x.ascent * t.finalSize / 100;
    }, xe.prototype.updateDocumentData = function(t, e) {
      e = e === void 0 ? this.keysIndex : e;
      var i = this.copyData({}, this.data.d.k[e].s);
      i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this);
    }, xe.prototype.recalculate = function(t) {
      var e = this.data.d.k[t].s;
      e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e);
    }, xe.prototype.canResizeFont = function(t) {
      this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, xe.prototype.setMinimumFontSize = function(t) {
      this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var Sa = function() {
      var t = Math.max, e = Math.min, i = Math.floor;
      function s(o, c) {
        this._currentTextLength = -1, this.k = !1, this.data = c, this.elem = o, this.comp = o.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(o), this.s = Q.getProp(o, c.s || {
          k: 0
        }, 0, 0, this), "e" in c ? this.e = Q.getProp(o, c.e, 0, 0, this) : this.e = {
          v: 100
        }, this.o = Q.getProp(o, c.o || {
          k: 0
        }, 0, 0, this), this.xe = Q.getProp(o, c.xe || {
          k: 0
        }, 0, 0, this), this.ne = Q.getProp(o, c.ne || {
          k: 0
        }, 0, 0, this), this.sm = Q.getProp(o, c.sm || {
          k: 100
        }, 0, 0, this), this.a = Q.getProp(o, c.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
      }
      s.prototype = {
        getMult: function(c) {
          this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
          var b = 0, u = 0, T = 1, C = 1;
          this.ne.v > 0 ? b = this.ne.v / 100 : u = -this.ne.v / 100, this.xe.v > 0 ? T = 1 - this.xe.v / 100 : C = 1 + this.xe.v / 100;
          var V = ai.getBezierEasing(b, u, T, C).get, v = 0, E = this.finalS, L = this.finalE, P = this.data.sh;
          if (P === 2)
            L === E ? v = c >= L ? 1 : 0 : v = t(0, e(0.5 / (L - E) + (c - E) / (L - E), 1)), v = V(v);
          else if (P === 3)
            L === E ? v = c >= L ? 0 : 1 : v = 1 - t(0, e(0.5 / (L - E) + (c - E) / (L - E), 1)), v = V(v);
          else if (P === 4)
            L === E ? v = 0 : (v = t(0, e(0.5 / (L - E) + (c - E) / (L - E), 1)), v < 0.5 ? v *= 2 : v = 1 - 2 * (v - 0.5)), v = V(v);
          else if (P === 5) {
            if (L === E)
              v = 0;
            else {
              var N = L - E;
              c = e(t(0, c + 0.5 - E), L - E);
              var S = -N / 2 + c, x = N / 2;
              v = Math.sqrt(1 - S * S / (x * x));
            }
            v = V(v);
          } else P === 6 ? (L === E ? v = 0 : (c = e(t(0, c + 0.5 - E), L - E), v = (1 + Math.cos(Math.PI + Math.PI * 2 * c / (L - E))) / 2), v = V(v)) : (c >= i(E) && (c - E < 0 ? v = t(0, e(e(L, 1) - (E - c), 1)) : v = t(0, e(L - c, 1))), v = V(v));
          if (this.sm.v !== 100) {
            var m = this.sm.v * 0.01;
            m === 0 && (m = 1e-8);
            var _ = 0.5 - m * 0.5;
            v < _ ? v = 0 : (v = (v - _) / m, v > 1 && (v = 1));
          }
          return v * this.a.v;
        },
        getValue: function(c) {
          this.iterateDynamicProperties(), this._mdf = c || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, c && this.data.r === 2 && (this.e.v = this._currentTextLength);
          var b = this.data.r === 2 ? 1 : 100 / this.data.totalChars, u = this.o.v / b, T = this.s.v / b + u, C = this.e.v / b + u;
          if (T > C) {
            var V = T;
            T = C, C = V;
          }
          this.finalS = T, this.finalE = C;
        }
      }, H([Bt], s);
      function a(o, c, b) {
        return new s(o, c);
      }
      return {
        getTextSelectorProp: a
      };
    }();
    function Ca(t, e, i) {
      var s = {
        propType: !1
      }, a = Q.getProp, o = e.a;
      this.a = {
        r: o.r ? a(t, o.r, 0, Pt, i) : s,
        rx: o.rx ? a(t, o.rx, 0, Pt, i) : s,
        ry: o.ry ? a(t, o.ry, 0, Pt, i) : s,
        sk: o.sk ? a(t, o.sk, 0, Pt, i) : s,
        sa: o.sa ? a(t, o.sa, 0, Pt, i) : s,
        s: o.s ? a(t, o.s, 1, 0.01, i) : s,
        a: o.a ? a(t, o.a, 1, 0, i) : s,
        o: o.o ? a(t, o.o, 0, 0.01, i) : s,
        p: o.p ? a(t, o.p, 1, 0, i) : s,
        sw: o.sw ? a(t, o.sw, 0, 0, i) : s,
        sc: o.sc ? a(t, o.sc, 1, 0, i) : s,
        fc: o.fc ? a(t, o.fc, 1, 0, i) : s,
        fh: o.fh ? a(t, o.fh, 0, 0, i) : s,
        fs: o.fs ? a(t, o.fs, 0, 0.01, i) : s,
        fb: o.fb ? a(t, o.fb, 0, 0.01, i) : s,
        t: o.t ? a(t, o.t, 0, 0, i) : s
      }, this.s = Sa.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t;
    }
    function pr(t, e, i) {
      this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = rt(this._textData.a.length), this._pathData = {}, this._moreOptions = {
        alignment: {}
      }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i);
    }
    pr.prototype.searchProperties = function() {
      var t, e = this._textData.a.length, i, s = Q.getProp;
      for (t = 0; t < e; t += 1)
        i = this._textData.a[t], this._animatorsData[t] = new Ca(this._elem, i, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = {
        a: s(this._elem, this._textData.p.a, 0, 0, this),
        f: s(this._elem, this._textData.p.f, 0, 0, this),
        l: s(this._elem, this._textData.p.l, 0, 0, this),
        r: s(this._elem, this._textData.p.r, 0, 0, this),
        p: s(this._elem, this._textData.p.p, 0, 0, this),
        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
      }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this);
    }, pr.prototype.getMeasures = function(t, e) {
      if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
        this._isFirstFrame = !1;
        var i = this._moreOptions.alignment.v, s = this._animatorsData, a = this._textData, o = this.mHelper, c = this._renderType, b = this.renderedLetters.length, u, T, C, V, v = t.l, E, L, P, N, S, x, m, _, A, F, B, j, X, mt, ft;
        if (this._hasMaskedPath) {
          if (ft = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var J = ft.v;
            this._pathData.r.v && (J = J.reverse()), E = {
              tLength: 0,
              segments: []
            }, V = J._length - 1;
            var vt;
            for (j = 0, C = 0; C < V; C += 1)
              vt = le.buildBezierData(J.v[C], J.v[C + 1], [J.o[C][0] - J.v[C][0], J.o[C][1] - J.v[C][1]], [J.i[C + 1][0] - J.v[C + 1][0], J.i[C + 1][1] - J.v[C + 1][1]]), E.tLength += vt.segmentLength, E.segments.push(vt), j += vt.segmentLength;
            C = V, ft.v.c && (vt = le.buildBezierData(J.v[C], J.v[0], [J.o[C][0] - J.v[C][0], J.o[C][1] - J.v[C][1]], [J.i[0][0] - J.v[0][0], J.i[0][1] - J.v[0][1]]), E.tLength += vt.segmentLength, E.segments.push(vt), j += vt.segmentLength), this._pathData.pi = E;
          }
          if (E = this._pathData.pi, L = this._pathData.f.v, m = 0, x = 1, N = 0, S = !0, F = E.segments, L < 0 && ft.v.c)
            for (E.tLength < Math.abs(L) && (L = -Math.abs(L) % E.tLength), m = F.length - 1, A = F[m].points, x = A.length - 1; L < 0; )
              L += A[x].partialLength, x -= 1, x < 0 && (m -= 1, A = F[m].points, x = A.length - 1);
          A = F[m].points, _ = A[x - 1], P = A[x], B = P.partialLength;
        }
        V = v.length, u = 0, T = 0;
        var st = t.finalSize * 1.2 * 0.714, Y = !0, w, M, f, d, $;
        d = s.length;
        var R, it = -1, pt, gt, St, Ct = L, oe = m, Ie = x, ci = -1, Le, de, Be, Ot, ot, Si, Zi, Ci, ui = "", Ei = this.defaultPropsArray, Pi;
        if (t.j === 2 || t.j === 1) {
          var Fe = 0, Ki = 0, Qi = t.j === 2 ? -0.5 : -1, ri = 0, Ji = !0;
          for (C = 0; C < V; C += 1)
            if (v[C].n) {
              for (Fe && (Fe += Ki); ri < C; )
                v[ri].animatorJustifyOffset = Fe, ri += 1;
              Fe = 0, Ji = !0;
            } else {
              for (f = 0; f < d; f += 1)
                w = s[f].a, w.t.propType && (Ji && t.j === 2 && (Ki += w.t.v * Qi), M = s[f].s, R = M.getMult(v[C].anIndexes[f], a.a[f].s.totalChars), R.length ? Fe += w.t.v * R[0] * Qi : Fe += w.t.v * R * Qi);
              Ji = !1;
            }
          for (Fe && (Fe += Ki); ri < C; )
            v[ri].animatorJustifyOffset = Fe, ri += 1;
        }
        for (C = 0; C < V; C += 1) {
          if (o.reset(), Le = 1, v[C].n)
            u = 0, T += t.yOffset, T += Y ? 1 : 0, L = Ct, Y = !1, this._hasMaskedPath && (m = oe, x = Ie, A = F[m].points, _ = A[x - 1], P = A[x], B = P.partialLength, N = 0), ui = "", Ci = "", Si = "", Pi = "", Ei = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (ci !== v[C].line) {
                switch (t.j) {
                  case 1:
                    L += j - t.lineWidths[v[C].line];
                    break;
                  case 2:
                    L += (j - t.lineWidths[v[C].line]) / 2;
                    break;
                }
                ci = v[C].line;
              }
              it !== v[C].ind && (v[it] && (L += v[it].extra), L += v[C].an / 2, it = v[C].ind), L += i[0] * v[C].an * 5e-3;
              var si = 0;
              for (f = 0; f < d; f += 1)
                w = s[f].a, w.p.propType && (M = s[f].s, R = M.getMult(v[C].anIndexes[f], a.a[f].s.totalChars), R.length ? si += w.p.v[0] * R[0] : si += w.p.v[0] * R), w.a.propType && (M = s[f].s, R = M.getMult(v[C].anIndexes[f], a.a[f].s.totalChars), R.length ? si += w.a.v[0] * R[0] : si += w.a.v[0] * R);
              for (S = !0, this._pathData.a.v && (L = v[0].an * 0.5 + (j - this._pathData.f.v - v[0].an * 0.5 - v[v.length - 1].an * 0.5) * it / (V - 1), L += this._pathData.f.v); S; )
                N + B >= L + si || !A ? (X = (L + si - N) / P.partialLength, gt = _.point[0] + (P.point[0] - _.point[0]) * X, St = _.point[1] + (P.point[1] - _.point[1]) * X, o.translate(-i[0] * v[C].an * 5e-3, -(i[1] * st) * 0.01), S = !1) : A && (N += P.partialLength, x += 1, x >= A.length && (x = 0, m += 1, F[m] ? A = F[m].points : ft.v.c ? (x = 0, m = 0, A = F[m].points) : (N -= P.partialLength, A = null)), A && (_ = P, P = A[x], B = P.partialLength));
              pt = v[C].an / 2 - v[C].add, o.translate(-pt, 0, 0);
            } else
              pt = v[C].an / 2 - v[C].add, o.translate(-pt, 0, 0), o.translate(-i[0] * v[C].an * 5e-3, -i[1] * st * 0.01, 0);
            for (f = 0; f < d; f += 1)
              w = s[f].a, w.t.propType && (M = s[f].s, R = M.getMult(v[C].anIndexes[f], a.a[f].s.totalChars), (u !== 0 || t.j !== 0) && (this._hasMaskedPath ? R.length ? L += w.t.v * R[0] : L += w.t.v * R : R.length ? u += w.t.v * R[0] : u += w.t.v * R));
            for (t.strokeWidthAnim && (Be = t.sw || 0), t.strokeColorAnim && (t.sc ? de = [t.sc[0], t.sc[1], t.sc[2]] : de = [0, 0, 0]), t.fillColorAnim && t.fc && (Ot = [t.fc[0], t.fc[1], t.fc[2]]), f = 0; f < d; f += 1)
              w = s[f].a, w.a.propType && (M = s[f].s, R = M.getMult(v[C].anIndexes[f], a.a[f].s.totalChars), R.length ? o.translate(-w.a.v[0] * R[0], -w.a.v[1] * R[1], w.a.v[2] * R[2]) : o.translate(-w.a.v[0] * R, -w.a.v[1] * R, w.a.v[2] * R));
            for (f = 0; f < d; f += 1)
              w = s[f].a, w.s.propType && (M = s[f].s, R = M.getMult(v[C].anIndexes[f], a.a[f].s.totalChars), R.length ? o.scale(1 + (w.s.v[0] - 1) * R[0], 1 + (w.s.v[1] - 1) * R[1], 1) : o.scale(1 + (w.s.v[0] - 1) * R, 1 + (w.s.v[1] - 1) * R, 1));
            for (f = 0; f < d; f += 1) {
              if (w = s[f].a, M = s[f].s, R = M.getMult(v[C].anIndexes[f], a.a[f].s.totalChars), w.sk.propType && (R.length ? o.skewFromAxis(-w.sk.v * R[0], w.sa.v * R[1]) : o.skewFromAxis(-w.sk.v * R, w.sa.v * R)), w.r.propType && (R.length ? o.rotateZ(-w.r.v * R[2]) : o.rotateZ(-w.r.v * R)), w.ry.propType && (R.length ? o.rotateY(w.ry.v * R[1]) : o.rotateY(w.ry.v * R)), w.rx.propType && (R.length ? o.rotateX(w.rx.v * R[0]) : o.rotateX(w.rx.v * R)), w.o.propType && (R.length ? Le += (w.o.v * R[0] - Le) * R[0] : Le += (w.o.v * R - Le) * R), t.strokeWidthAnim && w.sw.propType && (R.length ? Be += w.sw.v * R[0] : Be += w.sw.v * R), t.strokeColorAnim && w.sc.propType)
                for (ot = 0; ot < 3; ot += 1)
                  R.length ? de[ot] += (w.sc.v[ot] - de[ot]) * R[0] : de[ot] += (w.sc.v[ot] - de[ot]) * R;
              if (t.fillColorAnim && t.fc) {
                if (w.fc.propType)
                  for (ot = 0; ot < 3; ot += 1)
                    R.length ? Ot[ot] += (w.fc.v[ot] - Ot[ot]) * R[0] : Ot[ot] += (w.fc.v[ot] - Ot[ot]) * R;
                w.fh.propType && (R.length ? Ot = gi(Ot, w.fh.v * R[0]) : Ot = gi(Ot, w.fh.v * R)), w.fs.propType && (R.length ? Ot = oi(Ot, w.fs.v * R[0]) : Ot = oi(Ot, w.fs.v * R)), w.fb.propType && (R.length ? Ot = He(Ot, w.fb.v * R[0]) : Ot = He(Ot, w.fb.v * R));
              }
            }
            for (f = 0; f < d; f += 1)
              w = s[f].a, w.p.propType && (M = s[f].s, R = M.getMult(v[C].anIndexes[f], a.a[f].s.totalChars), this._hasMaskedPath ? R.length ? o.translate(0, w.p.v[1] * R[0], -w.p.v[2] * R[1]) : o.translate(0, w.p.v[1] * R, -w.p.v[2] * R) : R.length ? o.translate(w.p.v[0] * R[0], w.p.v[1] * R[1], -w.p.v[2] * R[2]) : o.translate(w.p.v[0] * R, w.p.v[1] * R, -w.p.v[2] * R));
            if (t.strokeWidthAnim && (Si = Be < 0 ? 0 : Be), t.strokeColorAnim && (Zi = "rgb(" + Math.round(de[0] * 255) + "," + Math.round(de[1] * 255) + "," + Math.round(de[2] * 255) + ")"), t.fillColorAnim && t.fc && (Ci = "rgb(" + Math.round(Ot[0] * 255) + "," + Math.round(Ot[1] * 255) + "," + Math.round(Ot[2] * 255) + ")"), this._hasMaskedPath) {
              if (o.translate(0, -t.ls), o.translate(0, i[1] * st * 0.01 + T, 0), this._pathData.p.v) {
                mt = (P.point[1] - _.point[1]) / (P.point[0] - _.point[0]);
                var dr = Math.atan(mt) * 180 / Math.PI;
                P.point[0] < _.point[0] && (dr += 180), o.rotate(-dr * Math.PI / 180);
              }
              o.translate(gt, St, 0), L -= i[0] * v[C].an * 5e-3, v[C + 1] && it !== v[C + 1].ind && (L += v[C].an / 2, L += t.tr * 1e-3 * t.finalSize);
            } else {
              switch (o.translate(u, T, 0), t.ps && o.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  o.translate(v[C].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[v[C].line]), 0, 0);
                  break;
                case 2:
                  o.translate(v[C].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[v[C].line]) / 2, 0, 0);
                  break;
              }
              o.translate(0, -t.ls), o.translate(pt, 0, 0), o.translate(i[0] * v[C].an * 5e-3, i[1] * st * 0.01, 0), u += v[C].l + t.tr * 1e-3 * t.finalSize;
            }
            c === "html" ? ui = o.toCSS() : c === "svg" ? ui = o.to2dCSS() : Ei = [o.props[0], o.props[1], o.props[2], o.props[3], o.props[4], o.props[5], o.props[6], o.props[7], o.props[8], o.props[9], o.props[10], o.props[11], o.props[12], o.props[13], o.props[14], o.props[15]], Pi = Le;
          }
          b <= C ? ($ = new Zs(Pi, Si, Zi, Ci, ui, Ei), this.renderedLetters.push($), b += 1, this.lettersChangedFlag = !0) : ($ = this.renderedLetters[C], this.lettersChangedFlag = $.update(Pi, Si, Zi, Ci, ui, Ei) || this.lettersChangedFlag);
        }
      }
    }, pr.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, pr.prototype.mHelper = new Qt(), pr.prototype.defaultPropsArray = [], H([Bt], pr);
    function Ge() {
    }
    Ge.prototype.initElement = function(t, e, i) {
      this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new xe(this, t.t, this.dynamicProperties), this.textAnimator = new pr(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, Ge.prototype.prepareFrame = function(t) {
      this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
    }, Ge.prototype.createPathShape = function(t, e) {
      var i, s = e.length, a, o = "";
      for (i = 0; i < s; i += 1)
        e[i].ty === "sh" && (a = e[i].ks.k, o += qn(a, a.i.length, !0, t));
      return o;
    }, Ge.prototype.updateDocumentData = function(t, e) {
      this.textProperty.updateDocumentData(t, e);
    }, Ge.prototype.canResizeFont = function(t) {
      this.textProperty.canResizeFont(t);
    }, Ge.prototype.setMinimumFontSize = function(t) {
      this.textProperty.setMinimumFontSize(t);
    }, Ge.prototype.applyTextPropertiesToMatrix = function(t, e, i, s, a) {
      switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
        case 1:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
          break;
        case 2:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
          break;
      }
      e.translate(s, a, 0);
    }, Ge.prototype.buildColor = function(t) {
      return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")";
    }, Ge.prototype.emptyProp = new Zs(), Ge.prototype.destroy = function() {
    }, Ge.prototype.validateText = function() {
      (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
    };
    var Ea = {
      shapes: []
    };
    function Ti(t, e, i) {
      this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i);
    }
    H([qi, Mr, Gr, Ir, Gi, Yr, Ge], Ti), Ti.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = lt("text"));
    }, Ti.prototype.buildTextContents = function(t) {
      for (var e = 0, i = t.length, s = [], a = ""; e < i; )
        t[e] === "\r" || t[e] === "" ? (s.push(a), a = "") : a += t[e], e += 1;
      return s.push(a), s;
    }, Ti.prototype.buildShapeData = function(t, e) {
      if (t.shapes && t.shapes.length) {
        var i = t.shapes[0];
        if (i.it) {
          var s = i.it[i.it.length - 1];
          s.s && (s.s.k[0] = e, s.s.k[1] = e);
        }
      }
      return t;
    }, Ti.prototype.buildNewText = function() {
      this.addDynamicProperty(this);
      var t, e, i = this.textProperty.currentData;
      this.renderedLetters = rt(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
      var s = this.globalData.fontManager.getFontByName(i.f);
      if (s.fClass)
        this.layerElement.setAttribute("class", s.fClass);
      else {
        this.layerElement.setAttribute("font-family", s.fFamily);
        var a = i.fWeight, o = i.fStyle;
        this.layerElement.setAttribute("font-style", o), this.layerElement.setAttribute("font-weight", a);
      }
      this.layerElement.setAttribute("aria-label", i.t);
      var c = i.l || [], b = !!this.globalData.fontManager.chars;
      e = c.length;
      var u, T = this.mHelper, C = "", V = this.data.singleShape, v = 0, E = 0, L = !0, P = i.tr * 1e-3 * i.finalSize;
      if (V && !b && !i.sz) {
        var N = this.textContainer, S = "start";
        switch (i.j) {
          case 1:
            S = "end";
            break;
          case 2:
            S = "middle";
            break;
          default:
            S = "start";
            break;
        }
        N.setAttribute("text-anchor", S), N.setAttribute("letter-spacing", P);
        var x = this.buildTextContents(i.finalText);
        for (e = x.length, E = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1)
          u = this.textSpans[t].span || lt("tspan"), u.textContent = x[t], u.setAttribute("x", 0), u.setAttribute("y", E), u.style.display = "inherit", N.appendChild(u), this.textSpans[t] || (this.textSpans[t] = {
            span: null,
            glyph: null
          }), this.textSpans[t].span = u, E += i.finalLineHeight;
        this.layerElement.appendChild(N);
      } else {
        var m = this.textSpans.length, _;
        for (t = 0; t < e; t += 1) {
          if (this.textSpans[t] || (this.textSpans[t] = {
            span: null,
            childSpan: null,
            glyph: null
          }), !b || !V || t === 0) {
            if (u = m > t ? this.textSpans[t].span : lt(b ? "g" : "text"), m <= t) {
              if (u.setAttribute("stroke-linecap", "butt"), u.setAttribute("stroke-linejoin", "round"), u.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = u, b) {
                var A = lt("g");
                u.appendChild(A), this.textSpans[t].childSpan = A;
              }
              this.textSpans[t].span = u, this.layerElement.appendChild(u);
            }
            u.style.display = "inherit";
          }
          if (T.reset(), V && (c[t].n && (v = -P, E += i.yOffset, E += L ? 1 : 0, L = !1), this.applyTextPropertiesToMatrix(i, T, c[t].line, v, E), v += c[t].l || 0, v += P), b) {
            _ = this.globalData.fontManager.getCharData(i.finalText[t], s.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily);
            var F;
            if (_.t === 1)
              F = new Kr(_.data, this.globalData, this);
            else {
              var B = Ea;
              _.data && _.data.shapes && (B = this.buildShapeData(_.data, i.finalSize)), F = new te(B, this.globalData, this);
            }
            if (this.textSpans[t].glyph) {
              var j = this.textSpans[t].glyph;
              this.textSpans[t].childSpan.removeChild(j.layerElement), j.destroy();
            }
            this.textSpans[t].glyph = F, F._debug = !0, F.prepareFrame(0), F.renderFrame(), this.textSpans[t].childSpan.appendChild(F.layerElement), _.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")");
          } else
            V && u.setAttribute("transform", "translate(" + T.props[12] + "," + T.props[13] + ")"), u.textContent = c[t].val, u.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        }
        V && u && u.setAttribute("d", C);
      }
      for (; t < this.textSpans.length; )
        this.textSpans[t].span.style.display = "none", t += 1;
      this._sizeChanged = !0;
    }, Ti.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = !1;
        var t = this.layerElement.getBBox();
        this.bbox = {
          top: t.y,
          left: t.x,
          width: t.width,
          height: t.height
        };
      }
      return this.bbox;
    }, Ti.prototype.getValue = function() {
      var t, e = this.textSpans.length, i;
      for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1)
        i = this.textSpans[t].glyph, i && (i.prepareFrame(this.comp.renderedFrame - this.data.st), i._mdf && (this._mdf = !0));
    }, Ti.prototype.renderInnerContent = function() {
      if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        this._sizeChanged = !0;
        var t, e, i = this.textAnimator.renderedLetters, s = this.textProperty.currentData.l;
        e = s.length;
        var a, o, c;
        for (t = 0; t < e; t += 1)
          s[t].n || (a = i[t], o = this.textSpans[t].span, c = this.textSpans[t].glyph, c && c.renderFrame(), a._mdf.m && o.setAttribute("transform", a.m), a._mdf.o && o.setAttribute("opacity", a.o), a._mdf.sw && o.setAttribute("stroke-width", a.sw), a._mdf.sc && o.setAttribute("stroke", a.sc), a._mdf.fc && o.setAttribute("fill", a.fc));
      }
    };
    function Ks(t, e, i) {
      this.initElement(t, e, i);
    }
    H([Xr], Ks), Ks.prototype.createContent = function() {
      var t = lt("rect");
      t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
    };
    function Xi(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy();
    }
    Xi.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, !0);
    }, Xi.prototype.renderFrame = function() {
    }, Xi.prototype.getBaseElement = function() {
      return null;
    }, Xi.prototype.destroy = function() {
    }, Xi.prototype.sourceRectAtTime = function() {
    }, Xi.prototype.hide = function() {
    }, H([qi, Mr, Ir, Gi], Xi);
    function fe() {
    }
    H([_e], fe), fe.prototype.createNull = function(t) {
      return new Xi(t, this.globalData, this);
    }, fe.prototype.createShape = function(t) {
      return new te(t, this.globalData, this);
    }, fe.prototype.createText = function(t) {
      return new Ti(t, this.globalData, this);
    }, fe.prototype.createImage = function(t) {
      return new Xr(t, this.globalData, this);
    }, fe.prototype.createSolid = function(t) {
      return new Ks(t, this.globalData, this);
    }, fe.prototype.configAnimation = function(t) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var e = this.globalData.defs;
      this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
      var i = lt("clipPath"), s = lt("rect");
      s.setAttribute("width", t.w), s.setAttribute("height", t.h), s.setAttribute("x", 0), s.setAttribute("y", 0);
      var a = Kt();
      i.setAttribute("id", a), i.appendChild(s), this.layerElement.setAttribute("clip-path", "url(" + U() + "#" + a + ")"), e.appendChild(i), this.layers = t.layers, this.elements = rt(t.layers.length);
    }, fe.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1)
        this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, fe.prototype.updateContainerSize = function() {
    }, fe.prototype.findIndexByInd = function(t) {
      var e = 0, i = this.layers.length;
      for (e = 0; e < i; e += 1)
        if (this.layers[e].ind === t)
          return e;
      return -1;
    }, fe.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!(e[t] || this.layers[t].ty === 99)) {
        e[t] = !0;
        var i = this.createItem(this.layers[t]);
        if (e[t] = i, vi() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
          var s = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
          if (s === -1)
            return;
          if (!this.elements[s] || this.elements[s] === !0)
            this.buildItem(s), this.addPendingElement(i);
          else {
            var a = e[s], o = a.getMatte(this.layers[t].tt);
            i.setMatte(o);
          }
        }
      }
    }, fe.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        if (t.checkParenting(), t.data.tt)
          for (var e = 0, i = this.elements.length; e < i; ) {
            if (this.elements[e] === t) {
              var s = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, a = this.elements[s], o = a.getMatte(this.layers[e].tt);
              t.setMatte(o);
              break;
            }
            e += 1;
          }
      }
    }, fe.prototype.renderFrame = function(t) {
      if (!(this.renderedFrame === t || this.destroyed)) {
        t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
        var e, i = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1)
          (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        if (this.globalData._mdf)
          for (e = 0; e < i; e += 1)
            (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
      }
    }, fe.prototype.appendElementInPos = function(t, e) {
      var i = t.getBaseElement();
      if (i) {
        for (var s = 0, a; s < e; )
          this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement() && (a = this.elements[s].getBaseElement()), s += 1;
        a ? this.layerElement.insertBefore(i, a) : this.layerElement.appendChild(i);
      }
    }, fe.prototype.hide = function() {
      this.layerElement.style.display = "none";
    }, fe.prototype.show = function() {
      this.layerElement.style.display = "block";
    };
    function Ai() {
    }
    H([qi, Mr, Ir, Gi, Yr], Ai), Ai.prototype.initElement = function(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide();
    }, Ai.prototype.prepareFrame = function(t) {
      if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
        if (this.tm._placeholder)
          this.renderedFrame = t / this.data.sr;
        else {
          var e = this.tm.v;
          e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
        }
        var i, s = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), i = s - 1; i >= 0; i -= 1)
          (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0));
      }
    }, Ai.prototype.renderInnerContent = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)
        (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, Ai.prototype.setElements = function(t) {
      this.elements = t;
    }, Ai.prototype.getElements = function() {
      return this.elements;
    }, Ai.prototype.destroyElements = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)
        this.elements[t] && this.elements[t].destroy();
    }, Ai.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement();
    };
    function Kr(t, e, i) {
      this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? rt(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? Q.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      };
    }
    H([fe, Ai, Gr], Kr), Kr.prototype.createComp = function(t) {
      return new Kr(t, this.globalData, this);
    };
    function Qs(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = lt("svg");
      var i = "";
      if (e && e.title) {
        var s = lt("title"), a = Kt();
        s.setAttribute("id", a), s.textContent = e.title, this.svgElement.appendChild(s), i += a;
      }
      if (e && e.description) {
        var o = lt("desc"), c = Kt();
        o.setAttribute("id", c), o.textContent = e.description, this.svgElement.appendChild(o), i += " " + c;
      }
      i && this.svgElement.setAttribute("aria-labelledby", i);
      var b = lt("defs");
      this.svgElement.appendChild(b);
      var u = lt("g");
      this.svgElement.appendChild(u), this.layerElement = u, this.renderConfig = {
        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        contentVisibility: e && e.contentVisibility || "visible",
        progressiveLoad: e && e.progressiveLoad || !1,
        hideOnTransparent: !(e && e.hideOnTransparent === !1),
        viewBoxOnly: e && e.viewBoxOnly || !1,
        viewBoxSize: e && e.viewBoxSize || !1,
        className: e && e.className || "",
        id: e && e.id || "",
        focusable: e && e.focusable,
        filterSize: {
          width: e && e.filterSize && e.filterSize.width || "100%",
          height: e && e.filterSize && e.filterSize.height || "100%",
          x: e && e.filterSize && e.filterSize.x || "0%",
          y: e && e.filterSize && e.filterSize.y || "0%"
        },
        width: e && e.width,
        height: e && e.height,
        runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        defs: b,
        renderConfig: this.renderConfig
      }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
    }
    return H([fe], Qs), Qs.prototype.createComp = function(t) {
      return new Kr(t, this.globalData, this);
    }, me("svg", Qs), li.registerModifier("tm", Jt), li.registerModifier("pb", Ui), li.registerModifier("rp", he), li.registerModifier("rd", ar), li.registerModifier("zz", fr), li.registerModifier("op", ut), At;
  });
})(pn, pn.exports);
var al = pn.exports;
const ll = /* @__PURE__ */ ol(al);
function hl(l, r, n) {
  return ll.loadAnimation({
    container: l,
    renderer: "svg",
    loop: n.loop,
    autoplay: n.autoplay,
    path: r
  });
}
function An() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null
  };
}
let kr = An();
function Qo(l) {
  kr = l;
}
const Jo = /[&<>"']/, fl = new RegExp(Jo.source, "g"), ta = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, cl = new RegExp(ta.source, "g"), ul = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, co = (l) => ul[l];
function je(l, r) {
  if (r) {
    if (Jo.test(l))
      return l.replace(fl, co);
  } else if (ta.test(l))
    return l.replace(cl, co);
  return l;
}
const pl = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function dl(l) {
  return l.replace(pl, (r, n) => (n = n.toLowerCase(), n === "colon" ? ":" : n.charAt(0) === "#" ? n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1)) : ""));
}
const ml = /(^|[^\[])\^/g;
function Nt(l, r) {
  let n = typeof l == "string" ? l : l.source;
  r = r || "";
  const h = {
    replace: (g, p) => {
      let y = typeof p == "string" ? p : p.source;
      return y = y.replace(ml, "$1"), n = n.replace(g, y), h;
    },
    getRegex: () => new RegExp(n, r)
  };
  return h;
}
function uo(l) {
  try {
    l = encodeURI(l).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return l;
}
const ss = { exec: () => null };
function po(l, r) {
  const n = l.replace(/\|/g, (p, y, I) => {
    let z = !1, U = y;
    for (; --U >= 0 && I[U] === "\\"; )
      z = !z;
    return z ? "|" : " |";
  }), h = n.split(/ \|/);
  let g = 0;
  if (h[0].trim() || h.shift(), h.length > 0 && !h[h.length - 1].trim() && h.pop(), r)
    if (h.length > r)
      h.splice(r);
    else
      for (; h.length < r; )
        h.push("");
  for (; g < h.length; g++)
    h[g] = h[g].trim().replace(/\\\|/g, "|");
  return h;
}
function ws(l, r, n) {
  const h = l.length;
  if (h === 0)
    return "";
  let g = 0;
  for (; g < h && l.charAt(h - g - 1) === r; )
    g++;
  return l.slice(0, h - g);
}
function gl(l, r) {
  if (l.indexOf(r[1]) === -1)
    return -1;
  let n = 0;
  for (let h = 0; h < l.length; h++)
    if (l[h] === "\\")
      h++;
    else if (l[h] === r[0])
      n++;
    else if (l[h] === r[1] && (n--, n < 0))
      return h;
  return -1;
}
function mo(l, r, n, h) {
  const g = r.href, p = r.title ? je(r.title) : null, y = l[1].replace(/\\([\[\]])/g, "$1");
  if (l[0].charAt(0) !== "!") {
    h.state.inLink = !0;
    const I = {
      type: "link",
      raw: n,
      href: g,
      title: p,
      text: y,
      tokens: h.inlineTokens(y)
    };
    return h.state.inLink = !1, I;
  }
  return {
    type: "image",
    raw: n,
    href: g,
    title: p,
    text: je(y)
  };
}
function vl(l, r) {
  const n = l.match(/^(\s+)(?:```)/);
  if (n === null)
    return r;
  const h = n[1];
  return r.split(`
`).map((g) => {
    const p = g.match(/^\s+/);
    if (p === null)
      return g;
    const [y] = p;
    return y.length >= h.length ? g.slice(h.length) : g;
  }).join(`
`);
}
class Rs {
  // set by the lexer
  constructor(r) {
    jt(this, "options");
    jt(this, "rules");
    // set by the lexer
    jt(this, "lexer");
    this.options = r || kr;
  }
  space(r) {
    const n = this.rules.block.newline.exec(r);
    if (n && n[0].length > 0)
      return {
        type: "space",
        raw: n[0]
      };
  }
  code(r) {
    const n = this.rules.block.code.exec(r);
    if (n) {
      const h = n[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: n[0],
        codeBlockStyle: "indented",
        text: this.options.pedantic ? h : ws(h, `
`)
      };
    }
  }
  fences(r) {
    const n = this.rules.block.fences.exec(r);
    if (n) {
      const h = n[0], g = vl(h, n[3] || "");
      return {
        type: "code",
        raw: h,
        lang: n[2] ? n[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : n[2],
        text: g
      };
    }
  }
  heading(r) {
    const n = this.rules.block.heading.exec(r);
    if (n) {
      let h = n[2].trim();
      if (/#$/.test(h)) {
        const g = ws(h, "#");
        (this.options.pedantic || !g || / $/.test(g)) && (h = g.trim());
      }
      return {
        type: "heading",
        raw: n[0],
        depth: n[1].length,
        text: h,
        tokens: this.lexer.inline(h)
      };
    }
  }
  hr(r) {
    const n = this.rules.block.hr.exec(r);
    if (n)
      return {
        type: "hr",
        raw: n[0]
      };
  }
  blockquote(r) {
    const n = this.rules.block.blockquote.exec(r);
    if (n) {
      let h = n[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`);
      h = ws(h.replace(/^ *>[ \t]?/gm, ""), `
`);
      const g = this.lexer.state.top;
      this.lexer.state.top = !0;
      const p = this.lexer.blockTokens(h);
      return this.lexer.state.top = g, {
        type: "blockquote",
        raw: n[0],
        tokens: p,
        text: h
      };
    }
  }
  list(r) {
    let n = this.rules.block.list.exec(r);
    if (n) {
      let h = n[1].trim();
      const g = h.length > 1, p = {
        type: "list",
        raw: "",
        ordered: g,
        start: g ? +h.slice(0, -1) : "",
        loose: !1,
        items: []
      };
      h = g ? `\\d{1,9}\\${h.slice(-1)}` : `\\${h}`, this.options.pedantic && (h = g ? h : "[*+-]");
      const y = new RegExp(`^( {0,3}${h})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let I = "", z = "", U = !1;
      for (; r; ) {
        let W = !1;
        if (!(n = y.exec(r)) || this.rules.block.hr.test(r))
          break;
        I = n[0], r = r.substring(I.length);
        let H = n[2].split(`
`, 1)[0].replace(/^\t+/, (yt) => " ".repeat(3 * yt.length)), O = r.split(`
`, 1)[0], Z = 0;
        this.options.pedantic ? (Z = 2, z = H.trimStart()) : (Z = n[2].search(/[^ ]/), Z = Z > 4 ? 1 : Z, z = H.slice(Z), Z += n[1].length);
        let at = !1;
        if (!H && /^ *$/.test(O) && (I += O + `
`, r = r.substring(O.length + 1), W = !0), !W) {
          const yt = new RegExp(`^ {0,${Math.min(3, Z - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), dt = new RegExp(`^ {0,${Math.min(3, Z - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), Ft = new RegExp(`^ {0,${Math.min(3, Z - 1)}}(?:\`\`\`|~~~)`), zt = new RegExp(`^ {0,${Math.min(3, Z - 1)}}#`);
          for (; r; ) {
            const Ut = r.split(`
`, 1)[0];
            if (O = Ut, this.options.pedantic && (O = O.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), Ft.test(O) || zt.test(O) || yt.test(O) || dt.test(r))
              break;
            if (O.search(/[^ ]/) >= Z || !O.trim())
              z += `
` + O.slice(Z);
            else {
              if (at || H.search(/[^ ]/) >= 4 || Ft.test(H) || zt.test(H) || dt.test(H))
                break;
              z += `
` + O;
            }
            !at && !O.trim() && (at = !0), I += Ut + `
`, r = r.substring(Ut.length + 1), H = O.slice(Z);
          }
        }
        p.loose || (U ? p.loose = !0 : /\n *\n *$/.test(I) && (U = !0));
        let rt = null, bt;
        this.options.gfm && (rt = /^\[[ xX]\] /.exec(z), rt && (bt = rt[0] !== "[ ] ", z = z.replace(/^\[[ xX]\] +/, ""))), p.items.push({
          type: "list_item",
          raw: I,
          task: !!rt,
          checked: bt,
          loose: !1,
          text: z,
          tokens: []
        }), p.raw += I;
      }
      p.items[p.items.length - 1].raw = I.trimEnd(), p.items[p.items.length - 1].text = z.trimEnd(), p.raw = p.raw.trimEnd();
      for (let W = 0; W < p.items.length; W++)
        if (this.lexer.state.top = !1, p.items[W].tokens = this.lexer.blockTokens(p.items[W].text, []), !p.loose) {
          const H = p.items[W].tokens.filter((Z) => Z.type === "space"), O = H.length > 0 && H.some((Z) => /\n.*\n/.test(Z.raw));
          p.loose = O;
        }
      if (p.loose)
        for (let W = 0; W < p.items.length; W++)
          p.items[W].loose = !0;
      return p;
    }
  }
  html(r) {
    const n = this.rules.block.html.exec(r);
    if (n)
      return {
        type: "html",
        block: !0,
        raw: n[0],
        pre: n[1] === "pre" || n[1] === "script" || n[1] === "style",
        text: n[0]
      };
  }
  def(r) {
    const n = this.rules.block.def.exec(r);
    if (n) {
      const h = n[1].toLowerCase().replace(/\s+/g, " "), g = n[2] ? n[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", p = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : n[3];
      return {
        type: "def",
        tag: h,
        raw: n[0],
        href: g,
        title: p
      };
    }
  }
  table(r) {
    const n = this.rules.block.table.exec(r);
    if (!n || !/[:|]/.test(n[2]))
      return;
    const h = po(n[1]), g = n[2].replace(/^\||\| *$/g, "").split("|"), p = n[3] && n[3].trim() ? n[3].replace(/\n[ \t]*$/, "").split(`
`) : [], y = {
      type: "table",
      raw: n[0],
      header: [],
      align: [],
      rows: []
    };
    if (h.length === g.length) {
      for (const I of g)
        /^ *-+: *$/.test(I) ? y.align.push("right") : /^ *:-+: *$/.test(I) ? y.align.push("center") : /^ *:-+ *$/.test(I) ? y.align.push("left") : y.align.push(null);
      for (const I of h)
        y.header.push({
          text: I,
          tokens: this.lexer.inline(I)
        });
      for (const I of p)
        y.rows.push(po(I, y.header.length).map((z) => ({
          text: z,
          tokens: this.lexer.inline(z)
        })));
      return y;
    }
  }
  lheading(r) {
    const n = this.rules.block.lheading.exec(r);
    if (n)
      return {
        type: "heading",
        raw: n[0],
        depth: n[2].charAt(0) === "=" ? 1 : 2,
        text: n[1],
        tokens: this.lexer.inline(n[1])
      };
  }
  paragraph(r) {
    const n = this.rules.block.paragraph.exec(r);
    if (n) {
      const h = n[1].charAt(n[1].length - 1) === `
` ? n[1].slice(0, -1) : n[1];
      return {
        type: "paragraph",
        raw: n[0],
        text: h,
        tokens: this.lexer.inline(h)
      };
    }
  }
  text(r) {
    const n = this.rules.block.text.exec(r);
    if (n)
      return {
        type: "text",
        raw: n[0],
        text: n[0],
        tokens: this.lexer.inline(n[0])
      };
  }
  escape(r) {
    const n = this.rules.inline.escape.exec(r);
    if (n)
      return {
        type: "escape",
        raw: n[0],
        text: je(n[1])
      };
  }
  tag(r) {
    const n = this.rules.inline.tag.exec(r);
    if (n)
      return !this.lexer.state.inLink && /^<a /i.test(n[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(n[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(n[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) && (this.lexer.state.inRawBlock = !1), {
        type: "html",
        raw: n[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: !1,
        text: n[0]
      };
  }
  link(r) {
    const n = this.rules.inline.link.exec(r);
    if (n) {
      const h = n[2].trim();
      if (!this.options.pedantic && /^</.test(h)) {
        if (!/>$/.test(h))
          return;
        const y = ws(h.slice(0, -1), "\\");
        if ((h.length - y.length) % 2 === 0)
          return;
      } else {
        const y = gl(n[2], "()");
        if (y > -1) {
          const z = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + y;
          n[2] = n[2].substring(0, y), n[0] = n[0].substring(0, z).trim(), n[3] = "";
        }
      }
      let g = n[2], p = "";
      if (this.options.pedantic) {
        const y = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(g);
        y && (g = y[1], p = y[3]);
      } else
        p = n[3] ? n[3].slice(1, -1) : "";
      return g = g.trim(), /^</.test(g) && (this.options.pedantic && !/>$/.test(h) ? g = g.slice(1) : g = g.slice(1, -1)), mo(n, {
        href: g && g.replace(this.rules.inline.anyPunctuation, "$1"),
        title: p && p.replace(this.rules.inline.anyPunctuation, "$1")
      }, n[0], this.lexer);
    }
  }
  reflink(r, n) {
    let h;
    if ((h = this.rules.inline.reflink.exec(r)) || (h = this.rules.inline.nolink.exec(r))) {
      const g = (h[2] || h[1]).replace(/\s+/g, " "), p = n[g.toLowerCase()];
      if (!p) {
        const y = h[0].charAt(0);
        return {
          type: "text",
          raw: y,
          text: y
        };
      }
      return mo(h, p, h[0], this.lexer);
    }
  }
  emStrong(r, n, h = "") {
    let g = this.rules.inline.emStrongLDelim.exec(r);
    if (!g || g[3] && h.match(/[\p{L}\p{N}]/u))
      return;
    if (!(g[1] || g[2] || "") || !h || this.rules.inline.punctuation.exec(h)) {
      const y = [...g[0]].length - 1;
      let I, z, U = y, W = 0;
      const H = g[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (H.lastIndex = 0, n = n.slice(-1 * r.length + y); (g = H.exec(n)) != null; ) {
        if (I = g[1] || g[2] || g[3] || g[4] || g[5] || g[6], !I)
          continue;
        if (z = [...I].length, g[3] || g[4]) {
          U += z;
          continue;
        } else if ((g[5] || g[6]) && y % 3 && !((y + z) % 3)) {
          W += z;
          continue;
        }
        if (U -= z, U > 0)
          continue;
        z = Math.min(z, z + U + W);
        const O = [...g[0]][0].length, Z = r.slice(0, y + g.index + O + z);
        if (Math.min(y, z) % 2) {
          const rt = Z.slice(1, -1);
          return {
            type: "em",
            raw: Z,
            text: rt,
            tokens: this.lexer.inlineTokens(rt)
          };
        }
        const at = Z.slice(2, -2);
        return {
          type: "strong",
          raw: Z,
          text: at,
          tokens: this.lexer.inlineTokens(at)
        };
      }
    }
  }
  codespan(r) {
    const n = this.rules.inline.code.exec(r);
    if (n) {
      let h = n[2].replace(/\n/g, " ");
      const g = /[^ ]/.test(h), p = /^ /.test(h) && / $/.test(h);
      return g && p && (h = h.substring(1, h.length - 1)), h = je(h, !0), {
        type: "codespan",
        raw: n[0],
        text: h
      };
    }
  }
  br(r) {
    const n = this.rules.inline.br.exec(r);
    if (n)
      return {
        type: "br",
        raw: n[0]
      };
  }
  del(r) {
    const n = this.rules.inline.del.exec(r);
    if (n)
      return {
        type: "del",
        raw: n[0],
        text: n[2],
        tokens: this.lexer.inlineTokens(n[2])
      };
  }
  autolink(r) {
    const n = this.rules.inline.autolink.exec(r);
    if (n) {
      let h, g;
      return n[2] === "@" ? (h = je(n[1]), g = "mailto:" + h) : (h = je(n[1]), g = h), {
        type: "link",
        raw: n[0],
        text: h,
        href: g,
        tokens: [
          {
            type: "text",
            raw: h,
            text: h
          }
        ]
      };
    }
  }
  url(r) {
    var h;
    let n;
    if (n = this.rules.inline.url.exec(r)) {
      let g, p;
      if (n[2] === "@")
        g = je(n[0]), p = "mailto:" + g;
      else {
        let y;
        do
          y = n[0], n[0] = ((h = this.rules.inline._backpedal.exec(n[0])) == null ? void 0 : h[0]) ?? "";
        while (y !== n[0]);
        g = je(n[0]), n[1] === "www." ? p = "http://" + n[0] : p = n[0];
      }
      return {
        type: "link",
        raw: n[0],
        text: g,
        href: p,
        tokens: [
          {
            type: "text",
            raw: g,
            text: g
          }
        ]
      };
    }
  }
  inlineText(r) {
    const n = this.rules.inline.text.exec(r);
    if (n) {
      let h;
      return this.lexer.state.inRawBlock ? h = n[0] : h = je(n[0]), {
        type: "text",
        raw: n[0],
        text: h
      };
    }
  }
}
const yl = /^(?: *(?:\n|$))+/, _l = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, bl = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, as = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, wl = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ea = /(?:[*+-]|\d{1,9}[.)])/, ia = Nt(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, ea).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Sn = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, kl = /^[^\n]+/, Cn = /(?!\s*\])(?:\\.|[^\[\]\\])+/, xl = Nt(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", Cn).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Tl = Nt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ea).getRegex(), Bs = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", En = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Al = Nt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", En).replace("tag", Bs).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ra = Nt(Sn).replace("hr", as).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Bs).getRegex(), Sl = Nt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ra).getRegex(), Pn = {
  blockquote: Sl,
  code: _l,
  def: xl,
  fences: bl,
  heading: wl,
  hr: as,
  html: Al,
  lheading: ia,
  list: Tl,
  newline: yl,
  paragraph: ra,
  table: ss,
  text: kl
}, go = Nt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", as).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Bs).getRegex(), Cl = {
  ...Pn,
  table: go,
  paragraph: Nt(Sn).replace("hr", as).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", go).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Bs).getRegex()
}, El = {
  ...Pn,
  html: Nt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", En).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: ss,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: Nt(Sn).replace("hr", as).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ia).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
}, sa = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Pl = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, na = /^( {2,}|\\)\n(?!\s*$)/, Ml = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ls = "\\p{P}\\p{S}", Il = Nt(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, ls).getRegex(), Ll = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, Fl = Nt(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, ls).getRegex(), Rl = Nt("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, ls).getRegex(), Ol = Nt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, ls).getRegex(), Nl = Nt(/\\([punct])/, "gu").replace(/punct/g, ls).getRegex(), zl = Nt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Dl = Nt(En).replace("(?:-->|$)", "-->").getRegex(), Bl = Nt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Dl).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Os = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Vl = Nt(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", Os).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), oa = Nt(/^!?\[(label)\]\[(ref)\]/).replace("label", Os).replace("ref", Cn).getRegex(), aa = Nt(/^!?\[(ref)\](?:\[\])?/).replace("ref", Cn).getRegex(), $l = Nt("reflink|nolink(?!\\()", "g").replace("reflink", oa).replace("nolink", aa).getRegex(), Mn = {
  _backpedal: ss,
  // only used for GFM url
  anyPunctuation: Nl,
  autolink: zl,
  blockSkip: Ll,
  br: na,
  code: Pl,
  del: ss,
  emStrongLDelim: Fl,
  emStrongRDelimAst: Rl,
  emStrongRDelimUnd: Ol,
  escape: sa,
  link: Vl,
  nolink: aa,
  punctuation: Il,
  reflink: oa,
  reflinkSearch: $l,
  tag: Bl,
  text: Ml,
  url: ss
}, jl = {
  ...Mn,
  link: Nt(/^!?\[(label)\]\((.*?)\)/).replace("label", Os).getRegex(),
  reflink: Nt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Os).getRegex()
}, dn = {
  ...Mn,
  escape: Nt(sa).replace("])", "~|])").getRegex(),
  url: Nt(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
}, Ul = {
  ...dn,
  br: Nt(na).replace("{2,}", "*").getRegex(),
  text: Nt(dn.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
}, ks = {
  normal: Pn,
  gfm: Cl,
  pedantic: El
}, Qr = {
  normal: Mn,
  gfm: dn,
  breaks: Ul,
  pedantic: jl
};
class di {
  constructor(r) {
    jt(this, "tokens");
    jt(this, "options");
    jt(this, "state");
    jt(this, "tokenizer");
    jt(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = r || kr, this.options.tokenizer = this.options.tokenizer || new Rs(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
      inLink: !1,
      inRawBlock: !1,
      top: !0
    };
    const n = {
      block: ks.normal,
      inline: Qr.normal
    };
    this.options.pedantic ? (n.block = ks.pedantic, n.inline = Qr.pedantic) : this.options.gfm && (n.block = ks.gfm, this.options.breaks ? n.inline = Qr.breaks : n.inline = Qr.gfm), this.tokenizer.rules = n;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block: ks,
      inline: Qr
    };
  }
  /**
   * Static Lex Method
   */
  static lex(r, n) {
    return new di(n).lex(r);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(r, n) {
    return new di(n).inlineTokens(r);
  }
  /**
   * Preprocessing
   */
  lex(r) {
    r = r.replace(/\r\n|\r/g, `
`), this.blockTokens(r, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const h = this.inlineQueue[n];
      this.inlineTokens(h.src, h.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(r, n = []) {
    this.options.pedantic ? r = r.replace(/\t/g, "    ").replace(/^ +$/gm, "") : r = r.replace(/^( *)(\t+)/gm, (I, z, U) => z + "    ".repeat(U.length));
    let h, g, p, y;
    for (; r; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((I) => (h = I.call({ lexer: this }, r, n)) ? (r = r.substring(h.raw.length), n.push(h), !0) : !1))) {
        if (h = this.tokenizer.space(r)) {
          r = r.substring(h.raw.length), h.raw.length === 1 && n.length > 0 ? n[n.length - 1].raw += `
` : n.push(h);
          continue;
        }
        if (h = this.tokenizer.code(r)) {
          r = r.substring(h.raw.length), g = n[n.length - 1], g && (g.type === "paragraph" || g.type === "text") ? (g.raw += `
` + h.raw, g.text += `
` + h.text, this.inlineQueue[this.inlineQueue.length - 1].src = g.text) : n.push(h);
          continue;
        }
        if (h = this.tokenizer.fences(r)) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (h = this.tokenizer.heading(r)) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (h = this.tokenizer.hr(r)) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (h = this.tokenizer.blockquote(r)) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (h = this.tokenizer.list(r)) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (h = this.tokenizer.html(r)) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (h = this.tokenizer.def(r)) {
          r = r.substring(h.raw.length), g = n[n.length - 1], g && (g.type === "paragraph" || g.type === "text") ? (g.raw += `
` + h.raw, g.text += `
` + h.raw, this.inlineQueue[this.inlineQueue.length - 1].src = g.text) : this.tokens.links[h.tag] || (this.tokens.links[h.tag] = {
            href: h.href,
            title: h.title
          });
          continue;
        }
        if (h = this.tokenizer.table(r)) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (h = this.tokenizer.lheading(r)) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (p = r, this.options.extensions && this.options.extensions.startBlock) {
          let I = 1 / 0;
          const z = r.slice(1);
          let U;
          this.options.extensions.startBlock.forEach((W) => {
            U = W.call({ lexer: this }, z), typeof U == "number" && U >= 0 && (I = Math.min(I, U));
          }), I < 1 / 0 && I >= 0 && (p = r.substring(0, I + 1));
        }
        if (this.state.top && (h = this.tokenizer.paragraph(p))) {
          g = n[n.length - 1], y && g.type === "paragraph" ? (g.raw += `
` + h.raw, g.text += `
` + h.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = g.text) : n.push(h), y = p.length !== r.length, r = r.substring(h.raw.length);
          continue;
        }
        if (h = this.tokenizer.text(r)) {
          r = r.substring(h.raw.length), g = n[n.length - 1], g && g.type === "text" ? (g.raw += `
` + h.raw, g.text += `
` + h.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = g.text) : n.push(h);
          continue;
        }
        if (r) {
          const I = "Infinite loop on byte: " + r.charCodeAt(0);
          if (this.options.silent) {
            console.error(I);
            break;
          } else
            throw new Error(I);
        }
      }
    return this.state.top = !0, n;
  }
  inline(r, n = []) {
    return this.inlineQueue.push({ src: r, tokens: n }), n;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(r, n = []) {
    let h, g, p, y = r, I, z, U;
    if (this.tokens.links) {
      const W = Object.keys(this.tokens.links);
      if (W.length > 0)
        for (; (I = this.tokenizer.rules.inline.reflinkSearch.exec(y)) != null; )
          W.includes(I[0].slice(I[0].lastIndexOf("[") + 1, -1)) && (y = y.slice(0, I.index) + "[" + "a".repeat(I[0].length - 2) + "]" + y.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (I = this.tokenizer.rules.inline.blockSkip.exec(y)) != null; )
      y = y.slice(0, I.index) + "[" + "a".repeat(I[0].length - 2) + "]" + y.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (I = this.tokenizer.rules.inline.anyPunctuation.exec(y)) != null; )
      y = y.slice(0, I.index) + "++" + y.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; r; )
      if (z || (U = ""), z = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((W) => (h = W.call({ lexer: this }, r, n)) ? (r = r.substring(h.raw.length), n.push(h), !0) : !1))) {
        if (h = this.tokenizer.escape(r)) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (h = this.tokenizer.tag(r)) {
          r = r.substring(h.raw.length), g = n[n.length - 1], g && h.type === "text" && g.type === "text" ? (g.raw += h.raw, g.text += h.text) : n.push(h);
          continue;
        }
        if (h = this.tokenizer.link(r)) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (h = this.tokenizer.reflink(r, this.tokens.links)) {
          r = r.substring(h.raw.length), g = n[n.length - 1], g && h.type === "text" && g.type === "text" ? (g.raw += h.raw, g.text += h.text) : n.push(h);
          continue;
        }
        if (h = this.tokenizer.emStrong(r, y, U)) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (h = this.tokenizer.codespan(r)) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (h = this.tokenizer.br(r)) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (h = this.tokenizer.del(r)) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (h = this.tokenizer.autolink(r)) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (!this.state.inLink && (h = this.tokenizer.url(r))) {
          r = r.substring(h.raw.length), n.push(h);
          continue;
        }
        if (p = r, this.options.extensions && this.options.extensions.startInline) {
          let W = 1 / 0;
          const H = r.slice(1);
          let O;
          this.options.extensions.startInline.forEach((Z) => {
            O = Z.call({ lexer: this }, H), typeof O == "number" && O >= 0 && (W = Math.min(W, O));
          }), W < 1 / 0 && W >= 0 && (p = r.substring(0, W + 1));
        }
        if (h = this.tokenizer.inlineText(p)) {
          r = r.substring(h.raw.length), h.raw.slice(-1) !== "_" && (U = h.raw.slice(-1)), z = !0, g = n[n.length - 1], g && g.type === "text" ? (g.raw += h.raw, g.text += h.text) : n.push(h);
          continue;
        }
        if (r) {
          const W = "Infinite loop on byte: " + r.charCodeAt(0);
          if (this.options.silent) {
            console.error(W);
            break;
          } else
            throw new Error(W);
        }
      }
    return n;
  }
}
class Ns {
  constructor(r) {
    jt(this, "options");
    this.options = r || kr;
  }
  code(r, n, h) {
    var p;
    const g = (p = (n || "").match(/^\S*/)) == null ? void 0 : p[0];
    return r = r.replace(/\n$/, "") + `
`, g ? '<pre><code class="language-' + je(g) + '">' + (h ? r : je(r, !0)) + `</code></pre>
` : "<pre><code>" + (h ? r : je(r, !0)) + `</code></pre>
`;
  }
  blockquote(r) {
    return `<blockquote>
${r}</blockquote>
`;
  }
  html(r, n) {
    return r;
  }
  heading(r, n, h) {
    return `<h${n}>${r}</h${n}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(r, n, h) {
    const g = n ? "ol" : "ul", p = n && h !== 1 ? ' start="' + h + '"' : "";
    return "<" + g + p + `>
` + r + "</" + g + `>
`;
  }
  listitem(r, n, h) {
    return `<li>${r}</li>
`;
  }
  checkbox(r) {
    return "<input " + (r ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(r) {
    return `<p>${r}</p>
`;
  }
  table(r, n) {
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + r + `</thead>
` + n + `</table>
`;
  }
  tablerow(r) {
    return `<tr>
${r}</tr>
`;
  }
  tablecell(r, n) {
    const h = n.header ? "th" : "td";
    return (n.align ? `<${h} align="${n.align}">` : `<${h}>`) + r + `</${h}>
`;
  }
  /**
   * span level renderer
   */
  strong(r) {
    return `<strong>${r}</strong>`;
  }
  em(r) {
    return `<em>${r}</em>`;
  }
  codespan(r) {
    return `<code>${r}</code>`;
  }
  br() {
    return "<br>";
  }
  del(r) {
    return `<del>${r}</del>`;
  }
  link(r, n, h) {
    const g = uo(r);
    if (g === null)
      return h;
    r = g;
    let p = '<a href="' + r + '"';
    return n && (p += ' title="' + n + '"'), p += ">" + h + "</a>", p;
  }
  image(r, n, h) {
    const g = uo(r);
    if (g === null)
      return h;
    r = g;
    let p = `<img src="${r}" alt="${h}"`;
    return n && (p += ` title="${n}"`), p += ">", p;
  }
  text(r) {
    return r;
  }
}
class In {
  // no need for block level renderers
  strong(r) {
    return r;
  }
  em(r) {
    return r;
  }
  codespan(r) {
    return r;
  }
  del(r) {
    return r;
  }
  html(r) {
    return r;
  }
  text(r) {
    return r;
  }
  link(r, n, h) {
    return "" + h;
  }
  image(r, n, h) {
    return "" + h;
  }
  br() {
    return "";
  }
}
class mi {
  constructor(r) {
    jt(this, "options");
    jt(this, "renderer");
    jt(this, "textRenderer");
    this.options = r || kr, this.options.renderer = this.options.renderer || new Ns(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new In();
  }
  /**
   * Static Parse Method
   */
  static parse(r, n) {
    return new mi(n).parse(r);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(r, n) {
    return new mi(n).parseInline(r);
  }
  /**
   * Parse Loop
   */
  parse(r, n = !0) {
    let h = "";
    for (let g = 0; g < r.length; g++) {
      const p = r[g];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[p.type]) {
        const y = p, I = this.options.extensions.renderers[y.type].call({ parser: this }, y);
        if (I !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(y.type)) {
          h += I || "";
          continue;
        }
      }
      switch (p.type) {
        case "space":
          continue;
        case "hr": {
          h += this.renderer.hr();
          continue;
        }
        case "heading": {
          const y = p;
          h += this.renderer.heading(this.parseInline(y.tokens), y.depth, dl(this.parseInline(y.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          const y = p;
          h += this.renderer.code(y.text, y.lang, !!y.escaped);
          continue;
        }
        case "table": {
          const y = p;
          let I = "", z = "";
          for (let W = 0; W < y.header.length; W++)
            z += this.renderer.tablecell(this.parseInline(y.header[W].tokens), { header: !0, align: y.align[W] });
          I += this.renderer.tablerow(z);
          let U = "";
          for (let W = 0; W < y.rows.length; W++) {
            const H = y.rows[W];
            z = "";
            for (let O = 0; O < H.length; O++)
              z += this.renderer.tablecell(this.parseInline(H[O].tokens), { header: !1, align: y.align[O] });
            U += this.renderer.tablerow(z);
          }
          h += this.renderer.table(I, U);
          continue;
        }
        case "blockquote": {
          const y = p, I = this.parse(y.tokens);
          h += this.renderer.blockquote(I);
          continue;
        }
        case "list": {
          const y = p, I = y.ordered, z = y.start, U = y.loose;
          let W = "";
          for (let H = 0; H < y.items.length; H++) {
            const O = y.items[H], Z = O.checked, at = O.task;
            let rt = "";
            if (O.task) {
              const bt = this.renderer.checkbox(!!Z);
              U ? O.tokens.length > 0 && O.tokens[0].type === "paragraph" ? (O.tokens[0].text = bt + " " + O.tokens[0].text, O.tokens[0].tokens && O.tokens[0].tokens.length > 0 && O.tokens[0].tokens[0].type === "text" && (O.tokens[0].tokens[0].text = bt + " " + O.tokens[0].tokens[0].text)) : O.tokens.unshift({
                type: "text",
                text: bt + " "
              }) : rt += bt + " ";
            }
            rt += this.parse(O.tokens, U), W += this.renderer.listitem(rt, at, !!Z);
          }
          h += this.renderer.list(W, I, z);
          continue;
        }
        case "html": {
          const y = p;
          h += this.renderer.html(y.text, y.block);
          continue;
        }
        case "paragraph": {
          const y = p;
          h += this.renderer.paragraph(this.parseInline(y.tokens));
          continue;
        }
        case "text": {
          let y = p, I = y.tokens ? this.parseInline(y.tokens) : y.text;
          for (; g + 1 < r.length && r[g + 1].type === "text"; )
            y = r[++g], I += `
` + (y.tokens ? this.parseInline(y.tokens) : y.text);
          h += n ? this.renderer.paragraph(I) : I;
          continue;
        }
        default: {
          const y = 'Token with "' + p.type + '" type was not found.';
          if (this.options.silent)
            return console.error(y), "";
          throw new Error(y);
        }
      }
    }
    return h;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(r, n) {
    n = n || this.renderer;
    let h = "";
    for (let g = 0; g < r.length; g++) {
      const p = r[g];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[p.type]) {
        const y = this.options.extensions.renderers[p.type].call({ parser: this }, p);
        if (y !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(p.type)) {
          h += y || "";
          continue;
        }
      }
      switch (p.type) {
        case "escape": {
          const y = p;
          h += n.text(y.text);
          break;
        }
        case "html": {
          const y = p;
          h += n.html(y.text);
          break;
        }
        case "link": {
          const y = p;
          h += n.link(y.href, y.title, this.parseInline(y.tokens, n));
          break;
        }
        case "image": {
          const y = p;
          h += n.image(y.href, y.title, y.text);
          break;
        }
        case "strong": {
          const y = p;
          h += n.strong(this.parseInline(y.tokens, n));
          break;
        }
        case "em": {
          const y = p;
          h += n.em(this.parseInline(y.tokens, n));
          break;
        }
        case "codespan": {
          const y = p;
          h += n.codespan(y.text);
          break;
        }
        case "br": {
          h += n.br();
          break;
        }
        case "del": {
          const y = p;
          h += n.del(this.parseInline(y.tokens, n));
          break;
        }
        case "text": {
          const y = p;
          h += n.text(y.text);
          break;
        }
        default: {
          const y = 'Token with "' + p.type + '" type was not found.';
          if (this.options.silent)
            return console.error(y), "";
          throw new Error(y);
        }
      }
    }
    return h;
  }
}
class ns {
  constructor(r) {
    jt(this, "options");
    this.options = r || kr;
  }
  /**
   * Process markdown before marked
   */
  preprocess(r) {
    return r;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(r) {
    return r;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(r) {
    return r;
  }
}
jt(ns, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
var wr, mn, la;
class Wl {
  constructor(...r) {
    Yn(this, wr);
    jt(this, "defaults", An());
    jt(this, "options", this.setOptions);
    jt(this, "parse", _s(this, wr, mn).call(this, di.lex, mi.parse));
    jt(this, "parseInline", _s(this, wr, mn).call(this, di.lexInline, mi.parseInline));
    jt(this, "Parser", mi);
    jt(this, "Renderer", Ns);
    jt(this, "TextRenderer", In);
    jt(this, "Lexer", di);
    jt(this, "Tokenizer", Rs);
    jt(this, "Hooks", ns);
    this.use(...r);
  }
  /**
   * Run callback for every token
   */
  walkTokens(r, n) {
    var g, p;
    let h = [];
    for (const y of r)
      switch (h = h.concat(n.call(this, y)), y.type) {
        case "table": {
          const I = y;
          for (const z of I.header)
            h = h.concat(this.walkTokens(z.tokens, n));
          for (const z of I.rows)
            for (const U of z)
              h = h.concat(this.walkTokens(U.tokens, n));
          break;
        }
        case "list": {
          const I = y;
          h = h.concat(this.walkTokens(I.items, n));
          break;
        }
        default: {
          const I = y;
          (p = (g = this.defaults.extensions) == null ? void 0 : g.childTokens) != null && p[I.type] ? this.defaults.extensions.childTokens[I.type].forEach((z) => {
            const U = I[z].flat(1 / 0);
            h = h.concat(this.walkTokens(U, n));
          }) : I.tokens && (h = h.concat(this.walkTokens(I.tokens, n)));
        }
      }
    return h;
  }
  use(...r) {
    const n = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return r.forEach((h) => {
      const g = { ...h };
      if (g.async = this.defaults.async || g.async || !1, h.extensions && (h.extensions.forEach((p) => {
        if (!p.name)
          throw new Error("extension name required");
        if ("renderer" in p) {
          const y = n.renderers[p.name];
          y ? n.renderers[p.name] = function(...I) {
            let z = p.renderer.apply(this, I);
            return z === !1 && (z = y.apply(this, I)), z;
          } : n.renderers[p.name] = p.renderer;
        }
        if ("tokenizer" in p) {
          if (!p.level || p.level !== "block" && p.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const y = n[p.level];
          y ? y.unshift(p.tokenizer) : n[p.level] = [p.tokenizer], p.start && (p.level === "block" ? n.startBlock ? n.startBlock.push(p.start) : n.startBlock = [p.start] : p.level === "inline" && (n.startInline ? n.startInline.push(p.start) : n.startInline = [p.start]));
        }
        "childTokens" in p && p.childTokens && (n.childTokens[p.name] = p.childTokens);
      }), g.extensions = n), h.renderer) {
        const p = this.defaults.renderer || new Ns(this.defaults);
        for (const y in h.renderer) {
          if (!(y in p))
            throw new Error(`renderer '${y}' does not exist`);
          if (y === "options")
            continue;
          const I = y, z = h.renderer[I], U = p[I];
          p[I] = (...W) => {
            let H = z.apply(p, W);
            return H === !1 && (H = U.apply(p, W)), H || "";
          };
        }
        g.renderer = p;
      }
      if (h.tokenizer) {
        const p = this.defaults.tokenizer || new Rs(this.defaults);
        for (const y in h.tokenizer) {
          if (!(y in p))
            throw new Error(`tokenizer '${y}' does not exist`);
          if (["options", "rules", "lexer"].includes(y))
            continue;
          const I = y, z = h.tokenizer[I], U = p[I];
          p[I] = (...W) => {
            let H = z.apply(p, W);
            return H === !1 && (H = U.apply(p, W)), H;
          };
        }
        g.tokenizer = p;
      }
      if (h.hooks) {
        const p = this.defaults.hooks || new ns();
        for (const y in h.hooks) {
          if (!(y in p))
            throw new Error(`hook '${y}' does not exist`);
          if (y === "options")
            continue;
          const I = y, z = h.hooks[I], U = p[I];
          ns.passThroughHooks.has(y) ? p[I] = (W) => {
            if (this.defaults.async)
              return Promise.resolve(z.call(p, W)).then((O) => U.call(p, O));
            const H = z.call(p, W);
            return U.call(p, H);
          } : p[I] = (...W) => {
            let H = z.apply(p, W);
            return H === !1 && (H = U.apply(p, W)), H;
          };
        }
        g.hooks = p;
      }
      if (h.walkTokens) {
        const p = this.defaults.walkTokens, y = h.walkTokens;
        g.walkTokens = function(I) {
          let z = [];
          return z.push(y.call(this, I)), p && (z = z.concat(p.call(this, I))), z;
        };
      }
      this.defaults = { ...this.defaults, ...g };
    }), this;
  }
  setOptions(r) {
    return this.defaults = { ...this.defaults, ...r }, this;
  }
  lexer(r, n) {
    return di.lex(r, n ?? this.defaults);
  }
  parser(r, n) {
    return mi.parse(r, n ?? this.defaults);
  }
}
wr = new WeakSet(), mn = function(r, n) {
  return (h, g) => {
    const p = { ...g }, y = { ...this.defaults, ...p };
    this.defaults.async === !0 && p.async === !1 && (y.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), y.async = !0);
    const I = _s(this, wr, la).call(this, !!y.silent, !!y.async);
    if (typeof h > "u" || h === null)
      return I(new Error("marked(): input parameter is undefined or null"));
    if (typeof h != "string")
      return I(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(h) + ", string expected"));
    if (y.hooks && (y.hooks.options = y), y.async)
      return Promise.resolve(y.hooks ? y.hooks.preprocess(h) : h).then((z) => r(z, y)).then((z) => y.hooks ? y.hooks.processAllTokens(z) : z).then((z) => y.walkTokens ? Promise.all(this.walkTokens(z, y.walkTokens)).then(() => z) : z).then((z) => n(z, y)).then((z) => y.hooks ? y.hooks.postprocess(z) : z).catch(I);
    try {
      y.hooks && (h = y.hooks.preprocess(h));
      let z = r(h, y);
      y.hooks && (z = y.hooks.processAllTokens(z)), y.walkTokens && this.walkTokens(z, y.walkTokens);
      let U = n(z, y);
      return y.hooks && (U = y.hooks.postprocess(U)), U;
    } catch (z) {
      return I(z);
    }
  };
}, la = function(r, n) {
  return (h) => {
    if (h.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
      const g = "<p>An error occurred:</p><pre>" + je(h.message + "", !0) + "</pre>";
      return n ? Promise.resolve(g) : g;
    }
    if (n)
      return Promise.reject(h);
    throw h;
  };
};
const br = new Wl();
function Mt(l, r) {
  return br.parse(l, r);
}
Mt.options = Mt.setOptions = function(l) {
  return br.setOptions(l), Mt.defaults = br.defaults, Qo(Mt.defaults), Mt;
};
Mt.getDefaults = An;
Mt.defaults = kr;
Mt.use = function(...l) {
  return br.use(...l), Mt.defaults = br.defaults, Qo(Mt.defaults), Mt;
};
Mt.walkTokens = function(l, r) {
  return br.walkTokens(l, r);
};
Mt.parseInline = br.parseInline;
Mt.Parser = mi;
Mt.parser = mi.parse;
Mt.Renderer = Ns;
Mt.TextRenderer = In;
Mt.Lexer = di;
Mt.lexer = di.lex;
Mt.Tokenizer = Rs;
Mt.Hooks = ns;
Mt.parse = Mt;
Mt.options;
Mt.setOptions;
Mt.use;
Mt.walkTokens;
Mt.parseInline;
mi.parse;
di.lex;
/*! @license DOMPurify 3.4.15 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.15/LICENSE */
function vo(l, r) {
  (r == null || r > l.length) && (r = l.length);
  for (var n = 0, h = Array(r); n < r; n++) h[n] = l[n];
  return h;
}
function Hl(l) {
  if (Array.isArray(l)) return l;
}
function ql(l, r) {
  var n = l == null ? null : typeof Symbol < "u" && l[Symbol.iterator] || l["@@iterator"];
  if (n != null) {
    var h, g, p, y, I = [], z = !0, U = !1;
    try {
      if (p = (n = n.call(l)).next, r !== 0) for (; !(z = (h = p.call(n)).done) && (I.push(h.value), I.length !== r); z = !0) ;
    } catch (W) {
      U = !0, g = W;
    } finally {
      try {
        if (!z && n.return != null && (y = n.return(), Object(y) !== y)) return;
      } finally {
        if (U) throw g;
      }
    }
    return I;
  }
}
function Gl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yl(l, r) {
  return Hl(l) || ql(l, r) || Xl(l, r) || Gl();
}
function Xl(l, r) {
  if (l) {
    if (typeof l == "string") return vo(l, r);
    var n = {}.toString.call(l).slice(8, -1);
    return n === "Object" && l.constructor && (n = l.constructor.name), n === "Map" || n === "Set" ? Array.from(l) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? vo(l, r) : void 0;
  }
}
const ha = Object.entries, yo = Object.setPrototypeOf, Zl = Object.isFrozen, Kl = Object.getPrototypeOf, Ql = Object.getOwnPropertyDescriptor;
let ae = Object.freeze, ue = Object.seal, Rr = Object.create, fa = typeof Reflect < "u" && Reflect, gn = fa.apply, vn = fa.construct;
ae || (ae = function(r) {
  return r;
});
ue || (ue = function(r) {
  return r;
});
gn || (gn = function(r, n) {
  for (var h = arguments.length, g = new Array(h > 2 ? h - 2 : 0), p = 2; p < h; p++)
    g[p - 2] = arguments[p];
  return r.apply(n, g);
});
vn || (vn = function(r) {
  for (var n = arguments.length, h = new Array(n > 1 ? n - 1 : 0), g = 1; g < n; g++)
    h[g - 1] = arguments[g];
  return new r(...h);
});
const yr = ie(Array.prototype.forEach), Jl = ie(Array.prototype.lastIndexOf), _o = ie(Array.prototype.pop), Jr = ie(Array.prototype.push), th = ie(Array.prototype.splice), Or = Array.isArray, is = ie(String.prototype.toLowerCase), rn = ie(String.prototype.toString), bo = ie(String.prototype.match), ts = ie(String.prototype.replace), wo = ie(String.prototype.indexOf), eh = ie(String.prototype.trim), ih = ie(Number.prototype.toString), rh = ie(Boolean.prototype.toString), ko = typeof BigInt > "u" ? null : ie(BigInt.prototype.toString), xo = typeof Symbol > "u" ? null : ie(Symbol.prototype.toString), Re = ie(Object.prototype.hasOwnProperty), es = ie(Object.prototype.toString), be = ie(RegExp.prototype.test), mr = sh(TypeError);
function ie(l) {
  return function(r) {
    r instanceof RegExp && (r.lastIndex = 0);
    for (var n = arguments.length, h = new Array(n > 1 ? n - 1 : 0), g = 1; g < n; g++)
      h[g - 1] = arguments[g];
    return gn(l, r, h);
  };
}
function sh(l) {
  return function() {
    for (var r = arguments.length, n = new Array(r), h = 0; h < r; h++)
      n[h] = arguments[h];
    return vn(l, n);
  };
}
function xt(l, r) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : is;
  if (yo && yo(l, null), !Or(r))
    return l;
  let h = r.length;
  for (; h--; ) {
    let g = r[h];
    if (typeof g == "string") {
      const p = n(g);
      p !== g && (Zl(r) || (r[h] = p), g = p);
    }
    l[g] = !0;
  }
  return l;
}
function nh(l) {
  for (let r = 0; r < l.length; r++)
    Re(l, r) || (l[r] = null);
  return l;
}
function $e(l) {
  const r = Rr(null);
  for (const h of ha(l)) {
    var n = Yl(h, 2);
    const g = n[0], p = n[1];
    Re(l, g) && (Or(p) ? r[g] = nh(p) : p && typeof p == "object" && p.constructor === Object ? r[g] = $e(p) : r[g] = p);
  }
  return r;
}
function oh(l) {
  switch (typeof l) {
    case "string":
      return l;
    case "number":
      return ih(l);
    case "boolean":
      return rh(l);
    case "bigint":
      return ko ? ko(l) : "0";
    case "symbol":
      return xo ? xo(l) : "Symbol()";
    case "undefined":
      return es(l);
    case "function":
    case "object": {
      if (l === null)
        return es(l);
      const r = l, n = Ze(r, "toString");
      if (typeof n == "function") {
        const h = n(r);
        return typeof h == "string" ? h : es(h);
      }
      return es(l);
    }
    default:
      return es(l);
  }
}
function Ze(l, r) {
  for (; l !== null; ) {
    const h = Ql(l, r);
    if (h) {
      if (h.get)
        return ie(h.get);
      if (typeof h.value == "function")
        return ie(h.value);
    }
    l = Kl(l);
  }
  function n() {
    return null;
  }
  return n;
}
function ah(l) {
  try {
    return be(l, ""), !0;
  } catch {
    return !1;
  }
}
const To = ae(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), sn = ae(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), nn = ae(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), lh = ae(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), on = ae(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), hh = ae(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ao = ae(["#text"]), So = ae(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), an = ae(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Co = ae(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), xs = ae(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), fh = ue(/{{[\w\W]*|^[\w\W]*}}/g), ch = ue(/<%[\w\W]*|^[\w\W]*%>/g), uh = ue(/\${[\w\W]*/g), ph = ue(/^data-[\-\w.\u00B7-\uFFFF]+$/), dh = ue(/^aria-[\-\w]+$/), Eo = ue(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), mh = ue(/^(?:\w+script|data):/i), gh = ue(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), vh = ue(/^html$/i), yh = ue(/^[a-z][.\w]*(-[.\w]+)+$/i), Po = ue(/<[/\w!]/g), Mo = ue(/<[/\w]/g), _h = ue(/<\/no(script|embed|frames)/i), bh = ue(/\/>/i), Ve = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, ca = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], wh = ae(xt({}, ca)), kh = function() {
  const l = {};
  return yr(ca, (r) => {
    l[r] = ue(new RegExp("</" + r + "(?=[\\t\\n\\f\\r />])", "i"));
  }), ae(l);
}(), xh = function() {
  return typeof window > "u" ? null : window;
}, Th = function(r, n) {
  if (typeof r != "object" || typeof r.createPolicy != "function")
    return null;
  let h = null;
  const g = "data-tt-policy-suffix";
  n && n.hasAttribute(g) && (h = n.getAttribute(g));
  const p = "dompurify" + (h ? "#" + h : "");
  try {
    return r.createPolicy(p, {
      createHTML(y) {
        return y;
      },
      createScriptURL(y) {
        return y;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + p + " could not be created."), null;
  }
}, Io = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, tr = function(r, n, h, g) {
  return Re(r, n) && Or(r[n]) ? xt(g.base ? $e(g.base) : {}, r[n], g.transform) : h;
}, ln = function(r, n, h) {
  const g = Re(r, n) ? r[n] : void 0;
  return g && typeof g == "object" ? $e(g) : h();
};
function ua() {
  let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xh();
  const r = (K) => ua(K);
  if (r.version = "3.4.15", r.removed = [], !l || !l.document || l.document.nodeType !== Ve.document || !l.Element)
    return r.isSupported = !1, r;
  let n = l.document;
  const h = n, g = h.currentScript;
  l.DocumentFragment;
  const p = l.HTMLTemplateElement, y = l.Node, I = l.Element, z = l.NodeFilter, U = l.NamedNodeMap;
  U === void 0 && (l.NamedNodeMap || l.MozNamedAttrMap), l.HTMLFormElement;
  const W = l.DOMParser, H = l.trustedTypes, O = I.prototype, Z = Ze(O, "cloneNode"), at = Ze(O, "remove"), rt = Ze(O, "removeAttributeNode"), bt = Ze(O, "nextSibling"), yt = Ze(O, "childNodes"), dt = Ze(O, "parentNode"), Ft = Ze(O, "shadowRoot"), zt = Ze(O, "attributes"), Ut = y && y.prototype ? Ze(y.prototype, "nodeType") : null, Ht = y && y.prototype ? Ze(y.prototype, "nodeName") : null, Ue = y && y.prototype ? Ze(y.prototype, "ownerDocument") : null, Zt = function(k) {
    return Ut ? Ut(k) : k.nodeType;
  }, Pt = function(k) {
    return Ht ? Ht(k) : k.nodeName;
  };
  if (typeof p == "function") {
    const K = n.createElement("template");
    K.content && K.content.ownerDocument && (n = K.content.ownerDocument);
  }
  let kt, Dt = "", Oe, Ii = !1, We = 0;
  const Li = function() {
    if (We > 0)
      throw mr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Ke = function(k) {
    Li(), We++;
    try {
      return kt.createHTML(k);
    } finally {
      We--;
    }
  }, Fi = function(k) {
    Li(), We++;
    try {
      return kt.createScriptURL(k);
    } finally {
      We--;
    }
  }, Kt = function() {
    return Ii || (Oe = Th(H, g), Ii = !0), Oe;
  }, Ne = n, Te = Ne.implementation, oi = Ne.createNodeIterator, He = Ne.createDocumentFragment, gi = Ne.getElementsByTagName, qe = h.importNode;
  let Tt = Io();
  r.isSupported = typeof ha == "function" && typeof dt == "function" && Te && Te.createHTMLDocument !== void 0;
  const ir = fh, vi = ch, Ri = uh, Oi = ph, rr = dh, lt = mh, Qe = gh, Je = yh;
  let xr = Eo, It = null;
  const sr = xt({}, [...To, ...sn, ...nn, ...on, ...Ao]);
  let Rt = null;
  const ti = xt({}, [...So, ...an, ...Co, ...xs]);
  let me = Object.seal(Rr(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), yi = null, Tr = null;
  const ge = Object.seal(Rr(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let ht = !0, Wt = !0, ai = !1, nr = !0, we = !1, ke = !0, Ae = !1, Ni = !1, le = null, Se = null, zi = !1, ei = !1, Di = !1, _i = !1, Bi = !0, q = !1;
  const ct = "user-content-";
  let _t = !0, wt = !1, re = {}, se = null;
  const Vi = xt({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    // <selectedcontent> mirrors the selected <option>'s subtree, cloned by
    // the UA (customizable <select>) — including any on* handlers — and the
    // engine re-mirrors synchronously whenever a removal changes which
    // option/selectedcontent is current, even inside DOMPurify's inert
    // DOMParser document. Hoisting its children on removal re-inserts a fresh
    // mirror target ahead of the walk, which the engine refills, looping
    // forever (DoS) and amplifying output. Dropping its content on removal
    // (rather than hoisting) breaks that cascade; the content is a duplicate
    // of the option, which is sanitized on its own. See campaign-3 F1/F6.
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let qt = null;
  const Q = xt({}, ["audio", "video", "img", "source", "image", "track"]);
  let Bt = null;
  const Ce = xt({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ve = "http://www.w3.org/1998/Math/MathML", Yt = "http://www.w3.org/2000/svg", Ee = "http://www.w3.org/1999/xhtml";
  let ze = Ee, $i = !1, Qt = null;
  const zr = xt({}, [ve, Yt, Ee], rn), At = ae(["mi", "mo", "mn", "ms", "mtext"]);
  let Dr = xt({}, At);
  const Br = ae(["annotation-xml"]);
  let Vr = xt({}, Br);
  const Vs = xt({}, ["title", "style", "font", "a", "script"]);
  let or = null;
  const $s = ["application/xhtml+xml", "text/html"], js = "text/html";
  let Gt = null, ji = null;
  const Us = n.createElement("form"), hs = function(k) {
    return k instanceof RegExp || k instanceof Function;
  }, Ar = function() {
    let k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ji && ji === k)
      return;
    (!k || typeof k != "object") && (k = {}), k = $e(k), or = // eslint-disable-next-line unicorn/prefer-includes
    $s.indexOf(k.PARSER_MEDIA_TYPE) === -1 ? js : k.PARSER_MEDIA_TYPE, Gt = or === "application/xhtml+xml" ? rn : is, It = tr(k, "ALLOWED_TAGS", sr, {
      transform: Gt
    }), Rt = tr(k, "ALLOWED_ATTR", ti, {
      transform: Gt
    }), Qt = tr(k, "ALLOWED_NAMESPACES", zr, {
      transform: rn
    }), Bt = tr(k, "ADD_URI_SAFE_ATTR", Ce, {
      transform: Gt,
      base: Ce
    }), qt = tr(k, "ADD_DATA_URI_TAGS", Q, {
      transform: Gt,
      base: Q
    }), se = tr(k, "FORBID_CONTENTS", Vi, {
      transform: Gt
    }), yi = tr(k, "FORBID_TAGS", $e({}), {
      transform: Gt
    }), Tr = tr(k, "FORBID_ATTR", $e({}), {
      transform: Gt
    }), re = Re(k, "USE_PROFILES") ? k.USE_PROFILES && typeof k.USE_PROFILES == "object" ? $e(k.USE_PROFILES) : k.USE_PROFILES : !1, ht = k.ALLOW_ARIA_ATTR !== !1, Wt = k.ALLOW_DATA_ATTR !== !1, ai = k.ALLOW_UNKNOWN_PROTOCOLS || !1, nr = k.ALLOW_SELF_CLOSE_IN_ATTR !== !1, we = k.SAFE_FOR_TEMPLATES || !1, ke = k.SAFE_FOR_XML !== !1, Ae = k.WHOLE_DOCUMENT || !1, ei = k.RETURN_DOM || !1, Di = k.RETURN_DOM_FRAGMENT || !1, _i = k.RETURN_TRUSTED_TYPE || !1, zi = k.FORCE_BODY || !1, Bi = k.SANITIZE_DOM !== !1, q = k.SANITIZE_NAMED_PROPS || !1, _t = k.KEEP_CONTENT !== !1, wt = k.IN_PLACE || !1, xr = ah(k.ALLOWED_URI_REGEXP) ? k.ALLOWED_URI_REGEXP : Eo, ze = typeof k.NAMESPACE == "string" ? k.NAMESPACE : Ee, Dr = ln(
      k,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => xt({}, At)
      // Default built-in map
    ), Vr = ln(
      k,
      "HTML_INTEGRATION_POINTS",
      () => xt({}, Br)
      // Default built-in map
    );
    const D = ln(k, "CUSTOM_ELEMENT_HANDLING", () => Rr(null));
    if (me = Rr(null), Re(D, "tagNameCheck") && hs(D.tagNameCheck) && (me.tagNameCheck = D.tagNameCheck), Re(D, "attributeNameCheck") && hs(D.attributeNameCheck) && (me.attributeNameCheck = D.attributeNameCheck), Re(D, "allowCustomizedBuiltInElements") && typeof D.allowCustomizedBuiltInElements == "boolean" && (me.allowCustomizedBuiltInElements = D.allowCustomizedBuiltInElements), ue(me), we && (Wt = !1), Di && (ei = !0), re && (It = xt({}, Ao), Rt = Rr(null), re.html === !0 && (xt(It, To), xt(Rt, So)), re.svg === !0 && (xt(It, sn), xt(Rt, an), xt(Rt, xs)), re.svgFilters === !0 && (xt(It, nn), xt(Rt, an), xt(Rt, xs)), re.mathMl === !0 && (xt(It, on), xt(Rt, Co), xt(Rt, xs))), ge.tagCheck = null, ge.attributeCheck = null, Re(k, "ADD_TAGS") && (typeof k.ADD_TAGS == "function" ? ge.tagCheck = k.ADD_TAGS : Or(k.ADD_TAGS) && (It === sr && (It = $e(It)), xt(It, k.ADD_TAGS, Gt))), Re(k, "ADD_ATTR") && (typeof k.ADD_ATTR == "function" ? ge.attributeCheck = k.ADD_ATTR : Or(k.ADD_ATTR) && (Rt === ti && (Rt = $e(Rt)), xt(Rt, k.ADD_ATTR, Gt))), Re(k, "ADD_FORBID_CONTENTS") && Or(k.ADD_FORBID_CONTENTS) && (se === Vi && (se = $e(se)), xt(se, k.ADD_FORBID_CONTENTS, Gt)), _t && (It["#text"] = !0), Ae && xt(It, ["html", "head", "body"]), It.table && (xt(It, ["tbody"]), delete yi.tbody), k.TRUSTED_TYPES_POLICY) {
      if (typeof k.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw mr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof k.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw mr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const G = kt;
      kt = k.TRUSTED_TYPES_POLICY;
      try {
        Dt = Ke("");
      } catch (et) {
        throw kt = G, et;
      }
    } else k.TRUSTED_TYPES_POLICY === null ? (kt = void 0, Dt = "") : (kt === void 0 && (kt = Kt()), kt && typeof Dt == "string" && (Dt = Ke("")));
    ae && ae(k), ji = k;
  }, $r = xt({}, [...sn, ...nn, ...lh]), fs = xt({}, [...on, ...hh]), cs = function(k, D, G) {
    return D.namespaceURI === Ee ? k === "svg" : D.namespaceURI === ve ? k === "svg" && (G === "annotation-xml" || Dr[G]) : !!$r[k];
  }, Ws = function(k, D, G) {
    return D.namespaceURI === Ee ? k === "math" : D.namespaceURI === Yt ? k === "math" && Vr[G] : !!fs[k];
  }, li = function(k, D, G) {
    return D.namespaceURI === Yt && !Vr[G] || D.namespaceURI === ve && !Dr[G] ? !1 : !fs[k] && (Vs[k] || !$r[k]);
  }, Pe = function(k) {
    let D = dt(k);
    (!D || !D.tagName) && (D = {
      namespaceURI: ze,
      tagName: "template"
    });
    const G = is(k.tagName), et = is(D.tagName);
    return Qt[k.namespaceURI] ? k.namespaceURI === Yt ? cs(G, D, et) : k.namespaceURI === ve ? Ws(G, D, et) : k.namespaceURI === Ee ? li(G, D, et) : !!(or === "application/xhtml+xml" && Qt[k.namespaceURI]) : !1;
  }, Jt = function(k) {
    Jr(r.removed, {
      element: k
    });
    try {
      dt(k).removeChild(k);
    } catch {
      if (at(k), !dt(k))
        throw mr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Ui = function(k, D, G) {
    try {
      rt(k, D);
    } catch {
      try {
        k.removeAttribute(G);
      } catch {
      }
    }
  }, Wi = function(k) {
    bi(k);
    const D = yt(k);
    if (D) {
      const et = [];
      yr(D, (nt) => {
        Jr(et, nt);
      }), yr(et, (nt) => {
        try {
          at(nt);
        } catch {
        }
      });
    }
    const G = zt(k);
    if (G)
      for (let et = G.length - 1; et >= 0; --et) {
        const nt = G[et], ut = nt && nt.name;
        typeof ut == "string" && Ui(k, nt, ut);
      }
  }, he = function(k, D, G) {
    if (!G)
      try {
        G = D.getAttributeNode(k);
      } catch {
        G = null;
      }
    Jr(r.removed, {
      attribute: G || null,
      from: D
    });
    try {
      G ? rt(D, G) : D.removeAttribute(k);
    } catch {
      try {
        D.removeAttribute(k);
      } catch {
      }
    }
    if (k === "is")
      if (ei || Di)
        try {
          Jt(D);
        } catch {
        }
      else
        try {
          D.setAttribute(k, "");
        } catch {
        }
  }, ar = function(k) {
    const D = zt(k);
    if (D)
      for (let G = D.length - 1; G >= 0; --G) {
        const et = D[G], nt = et && et.name;
        typeof nt != "string" || Rt[Gt(nt)] || Ui(k, et, nt);
      }
  }, bi = function(k) {
    const D = [k];
    for (; D.length > 0; ) {
      const G = D.pop();
      Zt(G) === Ve.element && ar(G);
      const nt = yt(G);
      if (nt)
        for (let ut = nt.length - 1; ut >= 0; --ut)
          D.push(nt[ut]);
    }
  }, Sr = function(k, D) {
    return ke ? k === "patchsrc" ? !0 : k === "for" && D !== "label" && D !== "output" : !1;
  }, us = function(k) {
    if (!ke)
      return;
    const D = [k];
    for (; D.length > 0; ) {
      const G = D.pop(), et = Zt(G);
      if (et === Ve.processingInstruction || et === Ve.comment && be(Mo, G.data)) {
        try {
          at(G);
        } catch {
        }
        continue;
      }
      if (et === Ve.element) {
        const ut = G, Lt = Gt(Pt(G));
        try {
          ut.hasAttribute && ut.hasAttribute("patchsrc") && ut.removeAttribute("patchsrc"), ut.hasAttribute && ut.hasAttribute("for") && Sr("for", Lt) && ut.removeAttribute("for");
        } catch {
        }
      }
      const nt = yt(G);
      if (nt)
        for (let ut = nt.length - 1; ut >= 0; --ut)
          D.push(nt[ut]);
    }
  }, ii = function(k) {
    let D = null, G = null;
    if (zi)
      k = "<remove></remove>" + k;
    else {
      const ut = bo(k, /^[\r\n\t ]+/);
      G = ut && ut[0];
    }
    or === "application/xhtml+xml" && ze === Ee && (k = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + k + "</body></html>");
    const et = kt ? Ke(k) : k;
    if (ze === Ee)
      try {
        D = new W().parseFromString(et, or);
      } catch {
      }
    if (!D || !D.documentElement) {
      D = Te.createDocument(ze, "template", null);
      try {
        D.documentElement.innerHTML = $i ? Dt : et;
      } catch {
      }
    }
    const nt = D.body || D.documentElement;
    return k && G && nt.insertBefore(n.createTextNode(G), nt.childNodes[0] || null), ze === Ee ? gi.call(D, Ae ? "html" : "body")[0] : Ae ? D.documentElement : nt;
  }, ps = function(k) {
    const D = Ue ? Ue(k) : k.ownerDocument;
    return oi.call(
      D || k,
      k,
      // eslint-disable-next-line no-bitwise
      z.SHOW_ELEMENT | z.SHOW_COMMENT | z.SHOW_TEXT | z.SHOW_PROCESSING_INSTRUCTION | z.SHOW_CDATA_SECTION,
      null
    );
  }, lr = function(k) {
    return k = ts(k, ir, " "), k = ts(k, vi, " "), k = ts(k, Ri, " "), k;
  }, Cr = function(k) {
    var D;
    k.normalize();
    const G = Ue ? Ue(k) : k.ownerDocument, et = oi.call(
      G || k,
      k,
      // eslint-disable-next-line no-bitwise
      z.SHOW_TEXT | z.SHOW_COMMENT | z.SHOW_CDATA_SECTION | z.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let nt = et.nextNode();
    for (; nt; )
      nt.data = lr(nt.data), nt = et.nextNode();
    const ut = (D = k.querySelectorAll) === null || D === void 0 ? void 0 : D.call(k, "template");
    ut && yr(ut, (Lt) => {
      wi(Lt.content) && Cr(Lt.content);
    });
  }, $t = function(k) {
    const D = Ht ? Ht(k) : null;
    return typeof D != "string" || Gt(D) !== "form" ? !1 : typeof k.nodeName != "string" || typeof k.textContent != "string" || typeof k.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    k.attributes !== zt(k) || typeof k.removeAttribute != "function" || // A form descendant named "removeAttributeNode" or "getAttributeNode"
    // shadows these Attr-node methods via [LegacyOverrideBuiltIns].
    // _removeAttribute() / _stripAttributeNode() reach for
    // element.removeAttributeNode(attr) first; when it is shadowed the call
    // throws and the name-based fallback element.removeAttribute(name)
    // ASCII-lowercases its lookup key in an HTML document, silently missing
    // a case-preserved event-handler attribute (e.g. an ONANIMATIONSTART
    // that reached the sanitizer through an XML/XHTML parse). Flag the form
    // so it is removed wholesale, exactly as for the other shadowed methods.
    typeof k.removeAttributeNode != "function" || typeof k.getAttributeNode != "function" || typeof k.setAttribute != "function" || typeof k.namespaceURI != "string" || typeof k.insertBefore != "function" || typeof k.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    k.nodeType !== Ut(k) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    k.childNodes !== yt(k);
  }, wi = function(k) {
    if (!Ut || typeof k != "object" || k === null)
      return !1;
    try {
      return Ut(k) === Ve.documentFragment;
    } catch {
      return !1;
    }
  }, hi = function(k) {
    if (!Ut || typeof k != "object" || k === null)
      return !1;
    try {
      return typeof Ut(k) == "number";
    } catch {
      return !1;
    }
  };
  function De(K, k, D) {
    K.length !== 0 && yr(K, (G) => {
      G.call(r, k, D, ji);
    });
  }
  const Hs = function(k, D) {
    return !!(ke && k.hasChildNodes() && !hi(k.firstElementChild) && be(Po, k.textContent) && be(Po, k.innerHTML) || ke && k.namespaceURI === Ee && wh[D] && (hi(k.firstElementChild) || typeof k.textContent == "string" && be(kh[D], k.textContent)) || k.nodeType === Ve.processingInstruction || ke && k.nodeType === Ve.comment && be(Mo, k.data));
  }, fi = function(k, D) {
    if (k instanceof RegExp)
      return be(k, D);
    if (k instanceof Function) {
      for (var G = arguments.length, et = new Array(G > 2 ? G - 2 : 0), nt = 2; nt < G; nt++)
        et[nt - 2] = arguments[nt];
      return !!k(D, ...et);
    }
    return !1;
  }, jr = function(k, D, G) {
    if (!yi[D] && Ur(D) && fi(me.tagNameCheck, D))
      return !1;
    if (_t && !se[D]) {
      const et = dt(k), nt = yt(k);
      if (nt && et) {
        const ut = nt.length;
        for (let Lt = ut - 1; Lt >= 0; --Lt) {
          const Et = k === G ? Z(nt[Lt], !0) : nt[Lt];
          et.insertBefore(Et, bt(k));
        }
      }
    }
    return Jt(k), !0;
  }, hr = function(k, D, G, et) {
    return k.length === 0 ? D : D === G || D === et ? $e(D) : D;
  }, ki = function(k, D) {
    return k === D || dt(k) !== null ? !1 : (wt && bi(k), !0);
  }, Er = function(k, D) {
    if (De(Tt.beforeSanitizeElements, k, null), ki(k, D))
      return !0;
    if ($t(k))
      return Jt(k), !0;
    const G = Gt(Pt(k));
    if (It = hr(Tt.uponSanitizeElement, It, sr, le), De(Tt.uponSanitizeElement, k, {
      tagName: G,
      allowedTags: It
    }), ki(k, D))
      return !0;
    if (Hs(k, G))
      return Jt(k), !0;
    if (yi[G] || !(ge.tagCheck instanceof Function && ge.tagCheck(G)) && !It[G]) {
      const nt = jr(k, G, D);
      return nt === !1 && De(Tt.afterSanitizeElements, k, null), nt;
    }
    if (Zt(k) === Ve.element && !Pe(k) || (G === "noscript" || G === "noembed" || G === "noframes") && be(_h, k.innerHTML))
      return Jt(k), !0;
    if (we && k.nodeType === Ve.text) {
      const nt = lr(k.textContent);
      k.textContent !== nt && (Jr(r.removed, {
        element: k.cloneNode()
      }), k.textContent = nt);
    }
    return De(Tt.afterSanitizeElements, k, null), !1;
  }, xi = function(k, D, G) {
    if (Tr[D] || Sr(D, k) || Bi && (D === "id" || D === "name") && (G in n || G in Us))
      return !1;
    const et = Rt[D] || ge.attributeCheck instanceof Function && ge.attributeCheck(D, k);
    return Wt && be(Oi, D) || ht && be(rr, D) ? !0 : et ? Bt[D] || be(xr, ts(G, Qe, "")) || (D === "src" || D === "xlink:href" || D === "href") && k !== "script" && wo(G, "data:") === 0 && qt[k] || ai && !be(lt, ts(G, Qe, "")) ? !0 : !G : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Ur(k) && fi(me.tagNameCheck, k) && fi(me.attributeNameCheck, D, k) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      D === "is" && me.allowCustomizedBuiltInElements && fi(me.tagNameCheck, G)
    );
  }, fr = xt({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ur = function(k) {
    return !fr[is(k)] && be(Je, k);
  }, qs = function(k, D, G, et) {
    if (kt && typeof H == "object" && typeof H.getAttributeType == "function" && !G)
      switch (H.getAttributeType(k, D)) {
        case "TrustedHTML":
          return Ke(et);
        case "TrustedScriptURL":
          return Fi(et);
      }
    return et;
  }, Gs = function(k, D, G, et) {
    try {
      return G ? k.setAttributeNS(G, D, et) : k.setAttribute(D, et), $t(k) ? (Jt(k), !1) : !0;
    } catch {
      return he(D, k), !1;
    }
  }, Wr = function(k) {
    De(Tt.beforeSanitizeAttributes, k, null);
    const D = k.attributes;
    if (!D || $t(k))
      return;
    Rt = hr(Tt.uponSanitizeAttribute, Rt, ti, Se);
    const G = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Rt,
      forceKeepAttr: void 0
    };
    let et = D.length;
    const nt = Gt(k.nodeName);
    for (; et--; ) {
      const ut = D[et], Lt = ut.name, Et = ut.namespaceURI, pe = ut.value, ye = Gt(Lt), Hi = pe;
      let ne = Lt === "value" ? Hi : eh(Hi), ds = !1;
      if (G.attrName = ye, G.attrValue = ne, G.keepAttr = !0, G.forceKeepAttr = void 0, De(Tt.uponSanitizeAttribute, k, G), ne = G.attrValue, q && (ye === "id" || ye === "name") && wo(ne, ct) !== 0 && (he(Lt, k, ut), ne = ct + ne, ds = !0), ke && be(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, ne)) {
        he(Lt, k, ut);
        continue;
      }
      if (ye === "attributename" && bo(ne, "href")) {
        he(Lt, k, ut);
        continue;
      }
      if (!G.forceKeepAttr) {
        if (!G.keepAttr) {
          he(Lt, k, ut);
          continue;
        }
        if (!nr && be(bh, ne)) {
          he(Lt, k, ut);
          continue;
        }
        if (we && (ne = lr(ne)), !xi(nt, ye, ne)) {
          he(Lt, k, ut);
          continue;
        }
        ne = qs(nt, ye, Et, ne), ne !== Hi && Gs(k, Lt, Et, ne) && ds && _o(r.removed);
      }
    }
    De(Tt.afterSanitizeAttributes, k, null);
  }, Pr = function(k) {
    let D = null;
    const G = ps(k);
    for (De(Tt.beforeSanitizeShadowDOM, k, null); D = G.nextNode(); )
      if (De(Tt.uponSanitizeShadowNode, D, null), Er(D, k), Wr(D), wi(D.content) && Pr(D.content), Zt(D) === Ve.element) {
        const et = Ft(D);
        wi(et) && (cr(et), Pr(et));
      }
    De(Tt.afterSanitizeShadowDOM, k, null);
  }, cr = function(k) {
    const D = [{
      node: k,
      shadow: null
    }];
    for (; D.length > 0; ) {
      const G = D.pop();
      if (G.shadow) {
        Pr(G.shadow);
        continue;
      }
      const et = G.node, ut = Zt(et) === Ve.element, Lt = yt(et);
      if (Lt)
        for (let Et = Lt.length - 1; Et >= 0; --Et)
          D.push({
            node: Lt[Et],
            shadow: null
          });
      if (ut) {
        const Et = Ht ? Ht(et) : null;
        if (typeof Et == "string" && Gt(Et) === "template") {
          const pe = et.content;
          wi(pe) && D.push({
            node: pe,
            shadow: null
          });
        }
      }
      if (ut) {
        const Et = Ft(et);
        wi(Et) && D.push({
          node: null,
          shadow: Et
        }, {
          node: Et,
          shadow: null
        });
      }
    }
  };
  return r.sanitize = function(K) {
    let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, D = null, G = null, et = null, nt = null;
    if ($i = !K, $i && (K = "<!-->"), typeof K != "string" && !hi(K) && (K = oh(K), typeof K != "string"))
      throw mr("dirty is not a string, aborting");
    if (!r.isSupported)
      return K;
    Ni ? (It = le, Rt = Se) : Ar(k), (Tt.uponSanitizeElement.length > 0 || Tt.uponSanitizeAttribute.length > 0) && (It = $e(It)), Tt.uponSanitizeAttribute.length > 0 && (Rt = $e(Rt)), r.removed = [];
    const ut = wt && typeof K != "string" && hi(K);
    if (ut) {
      us(K);
      const pe = Pt(K);
      if (typeof pe == "string") {
        const ye = Gt(pe);
        if (!It[ye] || yi[ye])
          throw Wi(K), mr("root node is forbidden and cannot be sanitized in-place");
      }
      if ($t(K))
        throw Wi(K), mr("root node is clobbered and cannot be sanitized in-place");
      try {
        cr(K);
      } catch (ye) {
        throw Wi(K), ye;
      }
    } else if (hi(K))
      D = ii("<!---->"), G = D.ownerDocument.importNode(K, !0), G.nodeType === Ve.element && G.nodeName === "BODY" || G.nodeName === "HTML" ? D = G : D.appendChild(G), cr(D);
    else {
      if (!ei && !we && !Ae && // eslint-disable-next-line unicorn/prefer-includes
      K.indexOf("<") === -1)
        return kt && _i ? Ke(K) : K;
      if (D = ii(K), !D)
        return ei ? null : _i ? Dt : "";
    }
    D && zi && Jt(D.firstChild);
    const Lt = ut ? K : D;
    try {
      const pe = ps(Lt);
      for (; et = pe.nextNode(); )
        Er(et, Lt), Wr(et), wi(et.content) && Pr(et.content);
    } catch (pe) {
      throw ut && (Wi(K), yr(r.removed, (ye) => {
        ye.element && bi(ye.element);
      })), pe;
    }
    if (ut)
      return yr(r.removed, (pe) => {
        pe.element && bi(pe.element);
      }), we && Cr(K), K;
    if (ei) {
      if (we && Cr(D), Di)
        for (nt = He.call(D.ownerDocument); D.firstChild; )
          nt.appendChild(D.firstChild);
      else
        nt = D;
      return (Rt.shadowroot || Rt.shadowrootmode) && (nt = qe.call(h, nt, !0)), nt;
    }
    let Et = Ae ? D.outerHTML : D.innerHTML;
    return Ae && It["!doctype"] && D.ownerDocument && D.ownerDocument.doctype && D.ownerDocument.doctype.name && be(vh, D.ownerDocument.doctype.name) && (Et = "<!DOCTYPE " + D.ownerDocument.doctype.name + `>
` + Et), we && (Et = lr(Et)), kt && _i ? Ke(Et) : Et;
  }, r.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ar(K), Ni = !0, le = It, Se = Rt;
  }, r.clearConfig = function() {
    ji = null, Ni = !1, le = null, Se = null, kt = Oe, Dt = "";
  }, r.isValidAttribute = function(K, k, D) {
    ji || Ar({});
    const G = Gt(K), et = Gt(k);
    return xi(G, et, D);
  }, r.addHook = function(K, k) {
    typeof k == "function" && Re(Tt, K) && Jr(Tt[K], k);
  }, r.removeHook = function(K, k) {
    if (Re(Tt, K)) {
      if (k !== void 0) {
        const D = Jl(Tt[K], k);
        return D === -1 ? void 0 : th(Tt[K], D, 1)[0];
      }
      return _o(Tt[K]);
    }
  }, r.removeHooks = function(K) {
    Re(Tt, K) && (Tt[K] = []);
  }, r.removeAllHooks = function() {
    Tt = Io();
  }, r;
}
var pa = ua();
Mt.setOptions({ gfm: !0, breaks: !0 });
let Lo = !1;
function Ah() {
  Lo || (pa.addHook("afterSanitizeAttributes", (l) => {
    l.tagName === "A" && (l.setAttribute("target", "_blank"), l.setAttribute("rel", "noopener noreferrer"));
  }), Lo = !0);
}
function Sh(l) {
  Ah();
  const r = Mt.parse(l ?? "", { async: !1 });
  return pa.sanitize(r, {
    ALLOWED_TAGS: [
      "a",
      "b",
      "blockquote",
      "br",
      "code",
      "em",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "hr",
      "i",
      "li",
      "ol",
      "p",
      "pre",
      "strong",
      "table",
      "tbody",
      "td",
      "th",
      "thead",
      "tr",
      "ul",
      "span",
      "del",
      "s",
      "sup",
      "sub",
      "img"
    ],
    ALLOWED_ATTR: ["href", "title", "target", "rel", "src", "alt"],
    ALLOW_DATA_ATTR: !1
  });
}
const Xe = 12, Ts = 10, Fr = 200;
function gr(l, r, n) {
  return Math.max(r, Math.min(n, l));
}
function Ch(l, r, n, h) {
  const g = r.width <= 480, p = g ? r.width - Xe * 2 : gr(h.width, Xe, r.width - Xe * 2), y = l.top + l.height, I = l.top - Ts - Xe, z = r.height - y - Ts - Xe, U = I < Fr && z >= Fr && z > I;
  let W, H, O;
  if (U)
    W = y + Ts, O = gr(h.height, Fr, r.height - W - Xe);
  else {
    H = r.height - l.top + Ts;
    const bt = I > 0 ? I : r.height - Xe * 2;
    O = gr(g ? r.height * 0.7 : h.height, Fr, bt);
  }
  O = gr(O, Fr, r.height - Xe * 2);
  let Z, at;
  return n === "right" ? at = gr(r.width - l.right, Xe, r.width - Xe - p) : Z = gr(l.left, Xe, r.width - Xe - p), {
    left: Z,
    right: at,
    top: W,
    bottom: H,
    width: p,
    height: O,
    transformOrigin: `${U ? "top" : "bottom"} ${n}`
  };
}
const Eh = "ecoflow-chat:", Ph = 24 * 60 * 60 * 1e3;
function Mh(l, r) {
  return Eh + l.replace(/\/+$/, "") + ":" + r;
}
function Ln() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}
function Ih(l) {
  if (!l || typeof l != "object") return !1;
  const r = l;
  return typeof r.id == "string" && typeof r.text == "string" && typeof r.role == "string";
}
function hn(l, r = Ln()) {
  if (!r) return null;
  try {
    const n = r.getItem(l);
    if (!n) return null;
    const h = JSON.parse(n);
    return typeof (h == null ? void 0 : h.chatId) != "string" || !Array.isArray(h == null ? void 0 : h.messages) || typeof h.savedAt != "number" || Date.now() - h.savedAt > Ph ? null : {
      chatId: h.chatId,
      savedAt: h.savedAt,
      messages: h.messages.filter(Ih)
    };
  } catch {
    return null;
  }
}
function Lh(l, r, n = Ln()) {
  if (!n) return !1;
  try {
    return n.setItem(l, JSON.stringify(r)), !0;
  } catch {
    try {
      const h = {
        ...r,
        messages: r.messages.map(
          (g) => g.fileUploads ? { ...g, fileUploads: g.fileUploads.map((p) => ({ ...p, data: void 0 })) } : g
        )
      };
      return n.setItem(l, JSON.stringify(h)), !0;
    } catch {
      return !1;
    }
  }
}
function Fh(l, r = Ln()) {
  try {
    r == null || r.removeItem(l);
  } catch {
  }
}
let Fo = 0;
function vr() {
  return Fo += 1, "msg-" + Fo;
}
if (typeof CSS < "u" && "registerProperty" in CSS)
  try {
    CSS.registerProperty({
      name: "--ec-beam",
      syntax: "<angle>",
      inherits: !1,
      initialValue: "0deg"
    });
  } catch {
  }
const Ro = {
  thinking: "Pensando…",
  tool: "Usando herramientas…",
  usedTools: "Usando herramientas…",
  calledTools: "Ejecutando acciones…",
  agentReasoning: "Razonando…",
  nextAgent: "Consultando al agente…"
};
function Rh() {
  if (typeof MediaRecorder > "u") return "";
  for (const l of ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"])
    if (MediaRecorder.isTypeSupported(l)) return l;
  return "";
}
function Oh(l) {
  const r = l.reduce((g, p) => g + Math.ceil(p.length * 3 / 4), 0), n = new Uint8Array(r);
  let h = 0;
  for (const g of l) {
    const p = Uint8Array.from(atob(g), (y) => y.charCodeAt(0));
    n.set(p, h), h += p.length;
  }
  return n.subarray(0, h);
}
function pi({ name: l }) {
  switch (l) {
    case "chat":
      return /* @__PURE__ */ tt("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": !0, children: /* @__PURE__ */ tt("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) });
    case "speaker":
      return /* @__PURE__ */ tt("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true", children: [
        /* @__PURE__ */ tt("path", { d: "M11 5 6 9H3v6h3l5 4z" }),
        /* @__PURE__ */ tt("path", { d: "M15.5 8.5a5 5 0 0 1 0 7" }),
        /* @__PURE__ */ tt("path", { d: "M18.5 5.5a9 9 0 0 1 0 13" })
      ] });
    case "close":
      return /* @__PURE__ */ tt("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.4", "stroke-linecap": "round", "aria-hidden": "true", children: /* @__PURE__ */ tt("path", { d: "M18 6 6 18M6 6l12 12" }) });
    case "mic":
      return /* @__PURE__ */ tt("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true", children: [
        /* @__PURE__ */ tt("path", { d: "M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" }),
        /* @__PURE__ */ tt("path", { d: "M19 10v1a7 7 0 0 1-14 0v-1M12 18v4" })
      ] });
    case "stop":
      return /* @__PURE__ */ tt("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ tt("rect", { x: "6", y: "6", width: "12", height: "12", rx: "2" }) });
    case "image":
      return /* @__PURE__ */ tt("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true", children: [
        /* @__PURE__ */ tt("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3" }),
        /* @__PURE__ */ tt("circle", { cx: "9", cy: "9", r: "2" }),
        /* @__PURE__ */ tt("path", { d: "m21 15-4.6-4.6a2 2 0 0 0-2.8 0L5 20" })
      ] });
    case "reset":
      return /* @__PURE__ */ tt("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true", children: [
        /* @__PURE__ */ tt("path", { d: "M3 12a9 9 0 1 0 3-6.7L3 8" }),
        /* @__PURE__ */ tt("path", { d: "M3 3v5h5" })
      ] });
    default:
      return /* @__PURE__ */ tt("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ tt("path", { d: "M3.4 20.4 21 12 3.4 3.6l-.01 6.53L15 12 3.39 13.87z" }) });
  }
}
function Nh(l) {
  return {
    "--ec-font": l.windowFontFamily,
    "--ec-fs": l.windowFontSize + "px",
    "--ec-bg-window": l.windowBackgroundColor,
    "--ec-bg-header": l.windowHeaderBackgroundColor,
    "--ec-bg-bot": l.botMessageBackgroundColor,
    "--ec-c-bot": l.botMessageTextColor,
    "--ec-bg-user": l.userMessageBackgroundColor,
    "--ec-c-user": l.userMessageTextColor,
    "--ec-bg-input": l.textInputBackgroundColor,
    "--ec-c-input": l.textInputTextColor,
    "--ec-c-send": l.textInputSendButtonColor,
    "--ec-c-footer": l.footerTextColor,
    "--ec-button-w": l.buttonWidth,
    "--ec-button-h": l.buttonHeight,
    "--ec-z-button": l.buttonZIndex,
    "--ec-z-window": l.windowZIndex,
    "--ec-tooltip-bg": l.tooltipBackgroundColor,
    "--ec-tooltip-c": l.tooltipTextColor,
    "--ec-glass-tint": l.glassTintColor || l.buttonBackgroundColor,
    "--ec-tooltip-fs": l.tooltipFontSize,
    "--ec-tooltip-pad": l.tooltipPadding,
    "--ec-tooltip-radius": l.tooltipBorderRadius,
    "--ec-tooltip-offset": l.tooltipPositionOffset + "px"
  };
}
function zh({ config: l }) {
  const r = ce(null);
  return ni(() => {
    if (l.buttonType !== "lottie" || !r.current || !l.lottieAnimationPath) return;
    const n = hl(r.current, l.lottieAnimationPath, {
      loop: l.lottieLoop,
      autoplay: l.lottieAutoplay
    });
    return () => n.destroy();
  }, [l.buttonType, l.lottieAnimationPath, l.lottieLoop, l.lottieAutoplay]), l.buttonType === "lottie" ? /* @__PURE__ */ tt("div", { ref: r, class: "ecoflow-button--media" }) : l.buttonType === "image" ? /* @__PURE__ */ tt("img", { class: "ecoflow-button--media", src: l.buttonImageSrc, alt: l.buttonAriaLabel }) : l.buttonType === "text" ? /* @__PURE__ */ tt("span", { children: l.buttonText }) : /* @__PURE__ */ tt(pi, { name: "chat" });
}
function Dh({ src: l, alt: r }) {
  return l ? /* @__PURE__ */ tt("img", { class: "ecoflow-avatar", src: l, alt: r, loading: "lazy" }) : /* @__PURE__ */ tt("div", { class: "ecoflow-avatar", "aria-hidden": "true" });
}
function Bh({ uploads: l }) {
  return l != null && l.length ? /* @__PURE__ */ tt("div", { class: "ecoflow-attachments", children: l.map(
    (r) => r.mime.startsWith("image/") && r.data ? /* @__PURE__ */ tt("img", { class: "ecoflow-attachment-img", src: r.data, alt: r.name }, r.name) : /* @__PURE__ */ tt("span", { class: "ecoflow-attachment-audio", children: [
      /* @__PURE__ */ tt(pi, { name: "mic" }),
      " Audio"
    ] }, r.name)
  ) }) : null;
}
function Vh({
  message: l,
  config: r,
  speaking: n,
  showSpeaker: h,
  onSpeak: g
}) {
  if (l.role === "agent")
    return /* @__PURE__ */ tt("div", { class: "ecoflow-msg ecoflow-msg--agent", children: /* @__PURE__ */ tt("span", { class: "ecoflow-agent-pill", children: l.text }) });
  const p = l.role === "user", y = l.role === "error", I = !p && !y ? r.botMessageShowAvatar : p ? r.userMessageShowAvatar : !1, z = p ? r.userMessageAvatarSrc : r.botMessageAvatarSrc;
  return /* @__PURE__ */ tt("div", { class: `ecoflow-msg${p ? " ecoflow-msg--user" : ""}`, children: [
    I && /* @__PURE__ */ tt(Dh, { src: z, alt: p ? "Usuario" : "Bot" }),
    /* @__PURE__ */ tt(
      "div",
      {
        class: `ecoflow-bubble ecoflow-bubble--${y ? "error" : p ? "user" : "bot"}`,
        part: `message message-${y ? "error" : p ? "user" : "bot"}`,
        children: [
          /* @__PURE__ */ tt(Bh, { uploads: l.fileUploads }),
          p ? l.text : /* @__PURE__ */ tt(Nr, { children: [
            /* @__PURE__ */ tt(
              "div",
              {
                class: "ecoflow-markdown",
                dangerouslySetInnerHTML: { __html: Sh(l.text) }
              }
            ),
            !y && h && l.text && /* @__PURE__ */ tt(
              "button",
              {
                class: `ecoflow-msg-tts${n ? " ecoflow-msg-tts--active" : ""}`,
                onClick: () => g(l),
                "aria-label": n ? "Detener voz" : "Escuchar respuesta",
                title: n ? "Detener voz" : "Escuchar respuesta",
                type: "button",
                children: /* @__PURE__ */ tt(pi, { name: n ? "stop" : "speaker" })
              }
            )
          ] })
        ]
      }
    )
  ] });
}
function $h({ host: l, config: r }) {
  var _i, Bi;
  const n = Mh(r.apiHost, r.chatflowId), [h, g] = Ye(!1), [p, y] = Ye(() => {
    var q;
    return !r.persistConversation || !r.chatflowId ? [] : ((q = hn(n)) == null ? void 0 : q.messages) ?? [];
  }), [I, z] = Ye(!1), [U, W] = Ye(!1), [H, O] = Ye(""), [Z, at] = Ye(null), [rt, bt] = Ye(null), [yt, dt] = Ye(!1), [Ft, zt] = Ye(null), [Ut, Ht] = Ye(!1), [Ue, Zt] = Ye(null), [Pt, kt] = Ye(!1), Dt = ce(""), Oe = ce(!1), Ii = ce(null), We = ce(null), Li = ce(null), Ke = ce(null), Fi = ce(null), Kt = ce(() => {
  }), Ne = ce(null), Te = ce([]), oi = ce(null), He = ce([]), gi = ce("audio/mpeg"), qe = ce(null), Tt = ce(null), ir = ce("");
  Dt.current || (Dt.current = r.persistConversation && ((_i = hn(n)) == null ? void 0 : _i.chatId) || lo()), p.length > 0 && (Oe.current = !0);
  const vi = ce(!1);
  ni(() => {
    if (vi.current || !r.persistConversation || !r.chatflowId) return;
    vi.current = !0;
    const q = hn(n);
    q && (q.messages.length > 0 && (y((ct) => ct.length > 0 ? ct : q.messages), Oe.current = !0), q.chatId && (Dt.current = q.chatId));
  }, [r.persistConversation, r.chatflowId, n]);
  const Ri = r.voiceInput === "auto" ? (rt == null ? void 0 : rt.stt) ?? !1 : r.voiceInput === !0, Oi = r.imageUploads === "auto" ? (rt == null ? void 0 : rt.imageUploads) ?? !1 : r.imageUploads === !0;
  ni(() => {
    if (!r.apiHost || !r.chatflowId) return;
    let q = !1;
    return il(r.apiHost, r.chatflowId).then((ct) => {
      q || bt(ct);
    }), () => {
      q = !0;
    };
  }, [r.apiHost, r.chatflowId]), ni(() => {
    !r.persistConversation || I || !r.chatflowId || p.length !== 0 && Lh(n, { chatId: Dt.current, messages: p, savedAt: Date.now() });
  }, [p, I, r.persistConversation, n]);
  const rr = () => {
    g(!0), !Oe.current && r.windowWelcomeMessage && (Oe.current = !0, y((q) => [
      ...q,
      { id: vr(), role: "bot", text: r.windowWelcomeMessage }
    ]));
  }, lt = () => {
    var q;
    (q = Tt.current) == null || q.abort(), Tt.current = null, qe.current && (qe.current.pause(), qe.current.src.startsWith("blob:") && URL.revokeObjectURL(qe.current.src), qe.current = null), Zt(null);
  }, Qe = () => {
    var q;
    g(!1), (q = Fi.current) == null || q.abort(), lt(), me(!1);
  }, Je = () => h ? Qe() : rr(), xr = () => {
    var q;
    (q = Fi.current) == null || q.abort(), lt(), y([]), Dt.current = lo(), r.persistConversation && Fh(n), Oe.current = !1, r.windowWelcomeMessage && (Oe.current = !0, y([{ id: vr(), role: "bot", text: r.windowWelcomeMessage }]));
  };
  ni(() => {
    l.open = rr, l.close = Qe, l.toggle = Je, l.sendMessage = (q) => {
      rr(), Kt.current(q);
    };
  }), ni(() => {
    if (!h) return;
    const q = () => {
      const ct = Ii.current;
      ct && at(
        Ch(
          ct.getBoundingClientRect(),
          { width: window.innerWidth, height: window.innerHeight },
          r.buttonSide,
          { width: r.windowWidth, height: r.windowHeight }
        )
      );
    };
    return q(), window.addEventListener("resize", q, { passive: !0 }), () => window.removeEventListener("resize", q);
  }, [h, r.buttonSide, r.windowWidth, r.windowHeight]), ni(() => {
    const q = We.current;
    q && (q.scrollTop = q.scrollHeight);
  }, [p, U]), ni(() => {
    if (!h || I) return;
    const q = We.current;
    if (!q) return;
    const ct = q.querySelectorAll(".ecoflow-msg"), _t = ct[ct.length - 1];
    if (!_t) return;
    const wt = _t.getBoundingClientRect().top - q.getBoundingClientRect().top - 4;
    q.scrollTo({ top: q.scrollTop + wt, behavior: "smooth" });
  }, [h, I, p]), ni(() => {
    h && r.textInputAutoFocus && !yt && requestAnimationFrame(() => {
      var q;
      return (q = Li.current) == null ? void 0 : q.focus();
    });
  }, [h, r.textInputAutoFocus, yt]), ni(() => {
    if (!h) return;
    const q = (ct) => {
      ct.key === "Escape" && Qe();
    };
    return document.addEventListener("keydown", q), () => document.removeEventListener("keydown", q);
  }, [h]), ni(
    () => () => {
      var q;
      me(!1), lt(), (q = oi.current) == null || q.getTracks().forEach((ct) => ct.stop());
    },
    []
  );
  const It = (q, ct) => {
    y((_t) => _t.map((wt) => wt.id === q ? { ...wt, text: wt.text + ct } : wt));
  }, sr = (q, ct) => {
    y((_t) => _t.map((wt) => wt.id === q ? { ...wt, followUps: ct } : wt));
  }, Rt = (q, ct) => {
    y((_t) => _t.map((wt) => wt.id === q ? { ...wt, text: ct } : wt));
  }, ti = async () => {
    var ct;
    if (yt || I) return;
    const q = Rh();
    if (!((ct = navigator.mediaDevices) != null && ct.getUserMedia) || q === "" && typeof MediaRecorder > "u") {
      Ht(!0);
      return;
    }
    try {
      const _t = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      oi.current = _t;
      const wt = new MediaRecorder(_t, q ? { mimeType: q } : void 0);
      Te.current = [], wt.ondataavailable = (re) => {
        re.data.size > 0 && Te.current.push(re.data);
      }, wt.onstop = () => yi(), Ne.current = wt, wt.start(), dt(!0);
    } catch {
      Ht(!0);
    }
  }, me = (q) => {
    const ct = Ne.current;
    if (!ct || ct.state === "inactive") {
      dt(!1);
      return;
    }
    ct.__send = q, ct.stop();
  }, yi = async () => {
    var wt, re;
    dt(!1), (wt = oi.current) == null || wt.getTracks().forEach((se) => se.stop()), oi.current = null;
    const q = Ne.current;
    if (Ne.current = null, !((q == null ? void 0 : q.__send) !== !1) || Te.current.length === 0) return;
    const _t = new Blob(Te.current, { type: ((re = Te.current[0]) == null ? void 0 : re.type) || "audio/webm" });
    Te.current = [];
    try {
      const se = await fo(new File([_t], "audio", { type: _t.type }));
      Kt.current("", [{ ...rl(_t), data: se, type: "audio" }]);
    } catch {
    }
  }, Tr = async (q) => {
    var wt;
    const ct = q.target, _t = (wt = ct.files) == null ? void 0 : wt[0];
    if (ct.value = "", !!_t && !(rt != null && rt.imageTypes.length && !rt.imageTypes.includes(_t.type)) && !(rt && _t.size > rt.imageMaxSizeMb * 1024 * 1024))
      try {
        const re = await fo(_t);
        zt({ name: _t.name, mime: _t.type, data: re, type: "image" });
      } catch {
      }
  }, ge = (q) => q.includes("/") ? q : `audio/${q === "mp3" ? "mpeg" : q}`, ht = () => {
    if (He.current.length === 0) return !1;
    const q = Oh(He.current);
    He.current = [];
    const ct = new Audio(URL.createObjectURL(new Blob([q], { type: gi.current })));
    return qe.current = ct, ct.onended = () => {
      ct.src.startsWith("blob:") && URL.revokeObjectURL(ct.src), qe.current === ct && (qe.current = null), Zt(null);
    }, ct.play().catch(() => {
      lt();
    }), !0;
  }, Wt = (q) => {
    lt(), He.current = [], gi.current = ge(q);
  }, ai = (q) => {
    He.current.push(q);
  }, nr = () => {
    sl(r.voiceOutput) && ht();
  }, we = (q) => {
    if (Ue === q.id) {
      lt();
      return;
    }
    if (!q.text || !r.chatflowId || !r.apiHost) return;
    lt(), Zt(q.id), He.current = [], gi.current = "audio/mpeg";
    const ct = new AbortController();
    Tt.current = ct, Ja(
      {
        apiHost: r.apiHost,
        chatflowId: r.chatflowId,
        chatId: Dt.current,
        chatMessageId: q.id,
        text: q.text
      },
      {
        onTtsStart: (_t) => {
          gi.current = ge(_t);
        },
        onTtsChunk: (_t) => He.current.push(_t),
        onTtsEnd: () => {
          Tt.current = null, ht() || Zt(null);
        },
        onError: () => {
          Tt.current = null, Zt(null), kt(!0);
        }
      },
      ct.signal
    ).catch(() => {
      ct.signal.aborted || kt(!0), Zt(null);
    });
  }, ke = (q, ct) => {
    const _t = q.trim(), wt = ((ct == null ? void 0 : ct.length) ?? 0) > 0;
    if (!_t && !wt || I || yt || !r.chatflowId || !r.apiHost) return;
    lt(), O(""), zt(null);
    const re = {
      id: vr(),
      role: "user",
      text: _t,
      ...wt ? { fileUploads: ct } : {}
    };
    ir.current = re.id, y((qt) => [...qt, re]);
    const se = vr();
    y((qt) => [...qt, { id: se, role: "bot", text: "" }]), z(!0), W(!0);
    const Vi = new AbortController();
    Fi.current = Vi, Qa(
      {
        apiHost: r.apiHost,
        chatflowId: r.chatflowId,
        question: _t,
        chatId: Dt.current,
        streaming: !0,
        ...Object.keys(r.overrideConfig).length ? { overrideConfig: r.overrideConfig } : {},
        ...wt ? { uploads: ct } : {}
      },
      {
        onToken: (qt) => {
          W(!1), It(se, qt);
        },
        onActivity: (qt) => {
          r.windowShowAgentMessages && Ro[qt] && y((Q) => [
            ...Q,
            { id: vr(), role: "agent", text: Ro[qt] }
          ]);
        },
        onMetadata: (qt) => {
          const Q = qt.followUpPrompts;
          Array.isArray(Q) && sr(
            se,
            Q.filter((ve) => typeof ve == "string")
          );
          const Bt = qt.chatId;
          typeof Bt == "string" && Bt && (Dt.current = Bt);
          const Ce = qt.question;
          typeof Ce == "string" && Ce && !_t && ir.current && Rt(ir.current, Ce);
        },
        onTtsStart: Wt,
        onTtsChunk: ai,
        onTtsEnd: nr,
        onError: (qt) => {
          y(
            (Q) => Q.filter((Bt) => Bt.id !== se || Bt.text !== "").concat([{ id: vr(), role: "error", text: r.windowErrorMessage || qt }])
          );
        },
        onDone: () => {
          y((qt) => qt.filter((Q) => Q.id !== se || Q.text !== ""));
        }
      },
      Vi.signal
    ).catch(() => {
      Vi.signal.aborted || y(
        (qt) => qt.filter((Q) => Q.id !== se || Q.text !== "").concat([{ id: vr(), role: "error", text: r.windowErrorMessage }])
      );
    }).finally(() => {
      z(!1), W(!1), Fi.current = null;
    });
  };
  Kt.current = ke;
  const Ae = p.length > 0 && !I && p[p.length - 1].role === "bot" ? p[p.length - 1].followUps : void 0, Ni = { bottom: r.buttonBottom };
  Ni[r.buttonSide] = r.buttonOffsetX;
  const le = { position: "absolute" };
  le[r.buttonSide] = "0";
  const Se = Z ? {
    left: Z.left !== void 0 ? Z.left + "px" : void 0,
    right: Z.right !== void 0 ? Z.right + "px" : void 0,
    top: Z.top !== void 0 ? Z.top + "px" : void 0,
    bottom: Z.bottom !== void 0 ? Z.bottom + "px" : void 0,
    width: Z.width + "px",
    height: Z.height + "px",
    transformOrigin: Z.transformOrigin
  } : void 0, zi = Ri && !Ut, ei = r.voiceOutput !== !1 && !Pt && (r.voiceOutput === !0 || rt === null || rt.tts || !rt.ttsKnown), Di = ((Bi = rt == null ? void 0 : rt.imageTypes) == null ? void 0 : Bi.join(",")) || "image/*";
  return /* @__PURE__ */ tt("div", { class: "ecoflow-root", style: Nh(r), children: [
    h && Z && /* @__PURE__ */ tt(
      "section",
      {
        class: `ecoflow-window${r.glass ? " ecoflow-window--glass" : ""}`,
        part: "window",
        role: "dialog",
        "aria-label": r.windowTitle,
        style: Se,
        children: [
          /* @__PURE__ */ tt("header", { class: "ecoflow-header", part: "header", children: [
            /* @__PURE__ */ tt("div", { class: "ecoflow-header-title", children: r.windowTitle }),
            r.showResetButton && /* @__PURE__ */ tt(
              "button",
              {
                class: "ecoflow-header-btn",
                onClick: xr,
                "aria-label": "Reiniciar conversación",
                title: "Reiniciar conversación",
                type: "button",
                children: /* @__PURE__ */ tt(pi, { name: "reset" })
              }
            ),
            /* @__PURE__ */ tt(
              "button",
              {
                class: "ecoflow-header-btn ecoflow-close",
                onClick: Qe,
                "aria-label": "Cerrar chat",
                type: "button",
                children: /* @__PURE__ */ tt(pi, { name: "close" })
              }
            )
          ] }),
          /* @__PURE__ */ tt("div", { class: "ecoflow-messages", part: "messages", ref: We, "aria-live": "polite", children: [
            p.map((q) => /* @__PURE__ */ tt(
              Vh,
              {
                message: q,
                config: r,
                speaking: Ue === q.id,
                showSpeaker: ei,
                onSpeak: we
              },
              q.id
            )),
            U && /* @__PURE__ */ tt("div", { class: "ecoflow-msg", children: /* @__PURE__ */ tt("div", { class: "ecoflow-bubble ecoflow-bubble--bot ecoflow-typing", children: [
              /* @__PURE__ */ tt("span", {}),
              /* @__PURE__ */ tt("span", {}),
              /* @__PURE__ */ tt("span", {})
            ] }) })
          ] }),
          Ae && Ae.length > 0 && /* @__PURE__ */ tt("div", { class: "ecoflow-chips", children: Ae.map((q) => /* @__PURE__ */ tt("button", { class: "ecoflow-chip", type: "button", onClick: () => ke(q), children: q }, q)) }),
          /* @__PURE__ */ tt("div", { class: "ecoflow-input-row", part: "input", children: [
            Ft && /* @__PURE__ */ tt("div", { class: "ecoflow-preview", children: [
              /* @__PURE__ */ tt("img", { src: Ft.data, alt: Ft.name }),
              /* @__PURE__ */ tt(
                "button",
                {
                  class: "ecoflow-preview-remove",
                  onClick: () => zt(null),
                  "aria-label": "Quitar imagen",
                  type: "button",
                  children: /* @__PURE__ */ tt(pi, { name: "close" })
                }
              )
            ] }),
            Oi && !yt && /* @__PURE__ */ tt(Nr, { children: [
              /* @__PURE__ */ tt(
                "input",
                {
                  ref: Ke,
                  type: "file",
                  accept: Di,
                  style: { display: "none" },
                  onChange: Tr,
                  "aria-hidden": "true",
                  tabIndex: -1
                }
              ),
              /* @__PURE__ */ tt(
                "button",
                {
                  class: "ecoflow-icon-btn",
                  onClick: () => {
                    var q;
                    return (q = Ke.current) == null ? void 0 : q.click();
                  },
                  disabled: I || !!Ft,
                  "aria-label": "Adjuntar imagen",
                  title: "Adjuntar imagen",
                  type: "button",
                  children: /* @__PURE__ */ tt(pi, { name: "image" })
                }
              )
            ] }),
            /* @__PURE__ */ tt("div", { class: `ecoflow-input-shell${I ? " ecoflow-input-shell--waiting" : ""}`, children: /* @__PURE__ */ tt(
              "input",
              {
                ref: Li,
                class: "ecoflow-input",
                type: "text",
                placeholder: r.textInputPlaceholder,
                maxLength: r.textInputMaxChars,
                value: H,
                disabled: I || yt,
                "aria-label": r.textInputPlaceholder,
                onInput: (q) => O(q.target.value),
                onKeyDown: (q) => {
                  q.key === "Enter" && ke(H, Ft ? [Ft] : void 0);
                }
              }
            ) }),
            zi && !yt && /* @__PURE__ */ tt(
              "button",
              {
                class: "ecoflow-icon-btn",
                onClick: ti,
                disabled: I,
                "aria-label": "Hablar",
                title: "Hablar",
                type: "button",
                children: /* @__PURE__ */ tt(pi, { name: "mic" })
              }
            ),
            yt && /* @__PURE__ */ tt(
              "button",
              {
                class: "ecoflow-icon-btn ecoflow-icon-btn--recording",
                onClick: () => me(!0),
                "aria-label": "Detener y enviar",
                title: "Detener y enviar",
                type: "button",
                children: /* @__PURE__ */ tt(pi, { name: "stop" })
              }
            ),
            /* @__PURE__ */ tt(
              "button",
              {
                class: "ecoflow-send",
                type: "button",
                onClick: () => ke(H, Ft ? [Ft] : void 0),
                disabled: I || yt || H.trim() === "" && !Ft,
                "aria-label": "Enviar mensaje",
                children: /* @__PURE__ */ tt(pi, { name: "send" })
              }
            )
          ] }),
          r.footerCompany && /* @__PURE__ */ tt("footer", { class: "ecoflow-footer", part: "footer", children: [
            r.footerText,
            " ",
            /* @__PURE__ */ tt("a", { href: r.footerCompanyLink || "#", target: "_blank", rel: "noopener noreferrer", children: r.footerCompany })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ tt(
      "div",
      {
        ref: Ii,
        class: `ecoflow-button${r.buttonType === "lottie" || r.buttonType === "image" ? "" : " ecoflow-button--shape"}`,
        part: "button",
        role: "button",
        tabIndex: 0,
        "aria-label": r.buttonAriaLabel,
        style: Ni,
        onClick: Je,
        onKeyDown: (q) => {
          (q.key === "Enter" || q.key === " ") && (q.preventDefault(), Je());
        },
        children: [
          /* @__PURE__ */ tt(zh, { config: r }),
          r.tooltipEnabled && !h && /* @__PURE__ */ tt("span", { class: "ecoflow-tooltip", style: le, children: r.tooltipText })
        ]
      }
    )
  ] });
}
const jh = `
*, *::before, *::after { box-sizing: border-box; }

.ecoflow-root {
  all: initial;
  font-family: var(--ec-font);
  font-size: var(--ec-fs);
  color: var(--ec-c-bot);
}

/* ============ Botón lanzador ============ */
.ecoflow-button {
  position: fixed;
  z-index: var(--ec-z-button);
  width: var(--ec-button-w);
  height: var(--ec-button-h);
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.ecoflow-button:focus-visible {
  outline: 2px solid var(--ec-c-send);
  outline-offset: 3px;
  border-radius: 12px;
}
.ecoflow-button--shape {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--ec-c-send);
  color: #fff;
  font-size: calc(var(--ec-fs) * 1.4);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  transition: transform 0.15s ease;
}
.ecoflow-button--shape:hover { transform: scale(1.06); }
.ecoflow-button--shape:active { transform: scale(0.97); }
.ecoflow-button svg { width: 55%; height: 55%; }
.ecoflow-button--media, .ecoflow-button--media > * { width: 100%; height: 100%; }

/* ============ Tooltip ============ */
.ecoflow-tooltip {
  position: absolute;
  bottom: calc(100% + var(--ec-tooltip-offset));
  white-space: nowrap;
  background: var(--ec-tooltip-bg);
  color: var(--ec-tooltip-c);
  font-size: var(--ec-tooltip-fs);
  padding: var(--ec-tooltip-pad);
  border-radius: var(--ec-tooltip-radius);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease 0.1s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
}
.ecoflow-button:hover .ecoflow-tooltip,
.ecoflow-button:focus-visible .ecoflow-tooltip { opacity: 1; }

/* ============ Ventana ============ */
.ecoflow-window {
  position: fixed;
  z-index: var(--ec-z-window);
  display: flex;
  flex-direction: column;
  background: var(--ec-bg-window);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.28), 0 2px 8px rgba(0, 0, 0, 0.12);
  animation: ecoflow-pop 0.18s ease-out;
}
@keyframes ecoflow-pop {
  from { opacity: 0; transform: translateY(10px) scale(0.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.ecoflow-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  background: var(--ec-bg-header);
  color: #fff;
  font-weight: 600;
  flex-shrink: 0;
}
.ecoflow-header-title {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ecoflow-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #fff;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
}
.ecoflow-close:hover { background: rgba(255, 255, 255, 0.18); }
.ecoflow-close svg { width: 16px; height: 16px; }

/* Botones de acción del header (reset comparte base con close) */
.ecoflow-header-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: #fff;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
}
.ecoflow-header-btn:hover { background: rgba(255, 255, 255, 0.18); }
.ecoflow-header-btn svg { width: 15px; height: 15px; }

/* ============ Mensajes ============ */
.ecoflow-messages {
  flex: 1;
  overflow-y: auto;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  scrollbar-width: thin;
  scrollbar-color: var(--ec-c-send) var(--ec-bg-window);
}
.ecoflow-messages::-webkit-scrollbar { width: 6px; }
.ecoflow-messages::-webkit-scrollbar-track { background: var(--ec-bg-window); }
.ecoflow-messages::-webkit-scrollbar-thumb {
  background: var(--ec-c-send);
  border: 1px solid var(--ec-bg-window);
  border-radius: 999px;
}
.ecoflow-messages::-webkit-scrollbar-thumb:hover {
  background: color-mix(in srgb, var(--ec-c-send) 82%, black);
}

.ecoflow-msg { display: flex; align-items: flex-end; gap: 8px; }
.ecoflow-msg--user { justify-content: flex-end; }
.ecoflow-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  background: #d8dce6;
}
.ecoflow-bubble {
  max-width: 82%;
  padding: 10px 13px;
  border-radius: 14px;
  line-height: 1.45;
  overflow-wrap: break-word;
  white-space: normal;
}
.ecoflow-bubble--bot {
  background: var(--ec-bg-bot);
  color: var(--ec-c-bot);
  border-bottom-left-radius: 4px;
}
.ecoflow-bubble--user {
  background: var(--ec-bg-user);
  color: var(--ec-c-user);
  border-bottom-right-radius: 4px;
}
.ecoflow-bubble--error {
  background: #fdecea;
  color: #b3261e;
  border-bottom-left-radius: 4px;
}
.ecoflow-msg--agent {
  justify-content: center;
}
.ecoflow-agent-pill {
  font-size: calc(var(--ec-fs) * 0.78);
  color: var(--ec-c-footer);
  background: rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 3px 10px;
}

/* Bocina de TTS a demanda, dentro de la burbuja del bot */
.ecoflow-msg-tts {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  padding: 4px 5px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  opacity: 0.55;
  cursor: pointer;
}
.ecoflow-msg-tts:hover { opacity: 1; background: rgba(128, 128, 128, 0.16); }
.ecoflow-msg-tts svg { width: 15px; height: 15px; display: block; }
.ecoflow-msg-tts--active { opacity: 1; animation: ecoflow-tts-pulse 1.2s ease-in-out infinite; }
@keyframes ecoflow-tts-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
}

/* Indicador de escritura */
.ecoflow-typing { display: inline-flex; gap: 4px; padding: 12px 14px; }
.ecoflow-typing span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #a7adba;
  animation: ecoflow-bounce 1.2s infinite ease-in-out;
}
.ecoflow-typing span:nth-child(2) { animation-delay: 0.15s; }
.ecoflow-typing span:nth-child(3) { animation-delay: 0.3s; }
@keyframes ecoflow-bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
  30% { transform: translateY(-5px); opacity: 1; }
}

/* ============ Markdown dentro de burbujas ============ */
.ecoflow-markdown > *:first-child { margin-top: 0; }
.ecoflow-markdown > *:last-child { margin-bottom: 0; }
.ecoflow-markdown p { margin: 0 0 8px; }
.ecoflow-markdown ul, .ecoflow-markdown ol { margin: 4px 0 8px; padding-left: 18px; }
.ecoflow-markdown li { margin: 2px 0; }
.ecoflow-markdown a { color: inherit; text-decoration: underline; }
.ecoflow-markdown code {
  background: rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  padding: 1px 5px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.92em;
}
.ecoflow-markdown pre {
  background: rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  padding: 10px;
  overflow-x: auto;
  margin: 4px 0 8px;
}
.ecoflow-markdown pre code { background: none; padding: 0; }
.ecoflow-markdown blockquote {
  margin: 4px 0 8px;
  padding-left: 10px;
  border-left: 3px solid rgba(0, 0, 0, 0.15);
}
.ecoflow-markdown table { border-collapse: collapse; margin: 4px 0 8px; max-width: 100%; display: block; overflow-x: auto; }
.ecoflow-markdown th, .ecoflow-markdown td { border: 1px solid rgba(0,0,0,0.15); padding: 4px 8px; }
.ecoflow-markdown img { max-width: 100%; border-radius: 8px; }

/* ============ Sugerencias (follow-up prompts) ============ */
.ecoflow-chips { display: flex; flex-wrap: wrap; gap: 8px; padding: 0 14px 10px; }
.ecoflow-chip {
  border: 1px solid var(--ec-c-send);
  color: var(--ec-c-send);
  background: transparent;
  border-radius: 16px;
  padding: 6px 12px;
  font-size: calc(var(--ec-fs) * 0.88);
  font-family: inherit;
  cursor: pointer;
  transition: background 0.15s ease;
}
.ecoflow-chip:hover { background: color-mix(in srgb, var(--ec-c-send) 10%, transparent); }

/* ============ Adjuntos en mensajes ============ */
.ecoflow-attachments { display: flex; flex-direction: column; gap: 6px; }
.ecoflow-attachment-img {
  max-width: 200px;
  max-height: 160px;
  border-radius: 10px;
  object-fit: cover;
  display: block;
}
.ecoflow-attachment-audio {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: calc(var(--ec-fs) * 0.85);
  opacity: 0.85;
}
.ecoflow-attachment-audio svg { width: 14px; height: 14px; }

/* ============ Input ============ */
.ecoflow-input-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
  background: var(--ec-bg-input);
  flex-wrap: wrap;
}
.ecoflow-preview {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}
.ecoflow-preview img {
  height: 64px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.ecoflow-preview-remove {
  position: absolute;
  left: 54px;
  top: -6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  cursor: pointer;
  padding: 0;
}
.ecoflow-preview-remove svg { width: 11px; height: 11px; }

/* Botones cuadrados de la barra de input (imagen, micrófono) */
.ecoflow-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--ec-c-send);
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.ecoflow-icon-btn:hover:not(:disabled) { background: rgba(128, 128, 128, 0.18); }
.ecoflow-icon-btn:disabled { opacity: 0.4; cursor: default; }
.ecoflow-icon-btn svg { width: 18px; height: 18px; }
.ecoflow-icon-btn--recording {
  background: #e5484d;
  color: #fff;
  animation: ecoflow-rec-pulse 1.2s infinite ease-in-out;
}
@keyframes ecoflow-rec-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(229, 72, 77, 0.5); }
  50% { box-shadow: 0 0 0 8px rgba(229, 72, 77, 0); }
}
.ecoflow-input {
  flex: 1;
  min-width: 0;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 20px;
  padding: 9px 14px;
  font: inherit;
  color: var(--ec-c-input);
  background: var(--ec-bg-input);
  outline: none;
}
.ecoflow-input:focus { border-color: var(--ec-c-send); }
.ecoflow-input:disabled { opacity: 0.6; }

/* Anillo de "esperando respuesta": un haz de luz que recorre el borde del
   input mientras el agente procesa. Se dibuja con ::before + máscara para
   que solo se vea el borde, sin cambios de layout. @property permite animar
   el ángulo del conic-gradient (Chrome/Edge/Safari 16.4+/Firefox 128+). */
@property --ec-beam {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
.ecoflow-input-shell {
  position: relative;
  flex: 1;
  min-width: 0;
  display: flex;
}
.ecoflow-input-shell::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 21px;
  padding: 1.6px;
  /* fallback estático para navegadores sin registro de --ec-beam */
  background: linear-gradient(90deg, #38bdf8, #a78bfa, #f472b6);
  background: conic-gradient(
    from var(--ec-beam),
    rgba(56, 189, 248, 0) 0%,
    #38bdf8 10%,
    #a78bfa 17%,
    #f472b6 24%,
    rgba(244, 114, 182, 0) 34%,
    transparent 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.25s ease;
  pointer-events: none;
}
.ecoflow-input-shell--waiting::before {
  opacity: 1;
  animation: ecoflow-input-glow 1.8s linear infinite;
}
@keyframes ecoflow-input-glow {
  to { --ec-beam: 360deg; }
}
.ecoflow-send {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  background: var(--ec-c-send);
  color: #fff;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: transform 0.12s ease;
}
.ecoflow-send:hover:not(:disabled) { transform: scale(1.08); }
.ecoflow-send:disabled { opacity: 0.45; cursor: default; }
.ecoflow-send svg { width: 17px; height: 17px; }

/* ============ Footer ============ */
.ecoflow-footer {
  text-align: center;
  font-size: 11px;
  padding: 6px 8px;
  color: var(--ec-c-footer);
  flex-shrink: 0;
}
.ecoflow-footer a { color: inherit; text-decoration: none; font-weight: 600; }
.ecoflow-footer a:hover { text-decoration: underline; }

/* ============ Tema liquid glass ============ */
.ecoflow-window--glass {
  background: color-mix(in srgb, var(--ec-glass-tint) 26%, var(--ec-bg-window));
  -webkit-backdrop-filter: blur(24px) saturate(160%);
  backdrop-filter: blur(24px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.ecoflow-window--glass .ecoflow-header {
  background: color-mix(in srgb, var(--ec-bg-header) 55%, transparent);
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.ecoflow-window--glass .ecoflow-input-row {
  background: color-mix(in srgb, var(--ec-glass-tint) 12%, var(--ec-bg-input));
  border-top-color: rgba(255, 255, 255, 0.12);
}
.ecoflow-window--glass .ecoflow-input { border-color: rgba(255, 255, 255, 0.22); }
.ecoflow-window--glass .ecoflow-agent-pill { background: rgba(255, 255, 255, 0.1); }
.ecoflow-window--glass .ecoflow-markdown code { background: rgba(255, 255, 255, 0.14); }
.ecoflow-window--glass .ecoflow-markdown pre { background: rgba(255, 255, 255, 0.1); }
.ecoflow-window--glass .ecoflow-bubble--bot {
  background: var(--ec-glass-bot-bg, color-mix(in srgb, var(--ec-glass-tint) 52%, black));
  color: var(--ec-glass-bot-color, var(--ec-c-bot));
}
.ecoflow-window--glass .ecoflow-bubble--error { background: rgba(179, 38, 30, 0.28); color: #ffb4ab; }
.ecoflow-window--glass .ecoflow-messages {
  background: var(--ec-glass-messages-bg, transparent);
  scrollbar-color: color-mix(in srgb, var(--ec-c-send) 72%, white) transparent;
}
.ecoflow-window--glass .ecoflow-messages::-webkit-scrollbar-track { background: transparent; }
.ecoflow-window--glass .ecoflow-messages::-webkit-scrollbar-thumb {
  background: color-mix(in srgb, var(--ec-c-send) 72%, white);
  border-color: rgba(255, 255, 255, 0.16);
}

@media (prefers-reduced-motion: reduce) {
  .ecoflow-window, .ecoflow-button--shape, .ecoflow-send { animation: none; transition: none; }
  .ecoflow-typing span { animation: none; }
}
`, yn = "ecoflow-chat";
class Uh extends HTMLElement {
  constructor() {
    super(...arguments), this._explicitConfig = {}, this._shadow = null, this.open = () => {
    }, this.close = () => {
    }, this.toggle = () => {
    }, this.sendMessage = () => {
    };
  }
  static get observedAttributes() {
    return Ra();
  }
  get config() {
    return this._explicitConfig;
  }
  set config(r) {
    this._explicitConfig = r ?? {}, this._render();
  }
  connectedCallback() {
    if (this._shadow) return;
    this._shadow = this.attachShadow({ mode: "open" });
    const r = document.createElement("style");
    r.textContent = jh, this._shadow.appendChild(r), this._render();
  }
  disconnectedCallback() {
    this._shadow && Jn(null, this._shadow);
  }
  attributeChangedCallback() {
    this._render();
  }
  _resolve() {
    const r = typeof window < "u" && window.ECOFLOW_CONFIG ? window.ECOFLOW_CONFIG : {}, n = No(this.attributes);
    return Oa([r, n, this._explicitConfig]);
  }
  _render() {
    this._shadow && Jn(/* @__PURE__ */ tt($h, { host: this, config: this._resolve() }), this._shadow);
  }
}
function da() {
  typeof window > "u" || typeof customElements > "u" || customElements.get(yn) || customElements.define(yn, Uh);
}
function Wh(l) {
  if (da(), !l) return;
  const r = No(l.attributes), n = { ...window.ECOFLOW_CONFIG ?? {}, ...r };
  if (!n.chatflowId) return;
  const h = document.createElement(yn);
  h.config = n, document.body.appendChild(h);
}
da();
if (typeof document < "u") {
  const l = Na(
    document.currentScript,
    document.scripts
  );
  za(document, l, Wh);
}
export {
  Ps as DEFAULT_CONFIG,
  yn as ECOFLOW_ELEMENT,
  Uh as EcoflowChatElement,
  da as defineEcoflowChat
};
