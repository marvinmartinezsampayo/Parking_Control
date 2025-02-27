/*!
 * ApexCharts v3.19.3
 * (c) 2018-2020 Juned Chhipa
 * Released under the MIT License.
 */
document.addEventListener('DOMContentLoaded', function() {
    "use strict";

    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(e)
    }

    function e(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
        }
    }

    function a(t, e, a) {
        return e && i(t.prototype, e), a && i(t, a), t
    }

    function s(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    function r(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            e && (a = a.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.push.apply(i, a)
        }
        return i
    }

    function n(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {};
            e % 2 ? r(Object(i), !0).forEach((function(e) {
                s(t, e, i[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
            }))
        }
        return t
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && h(t, e)
    }

    function l(t) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function h(t, e) {
        return (h = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function d(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, a = l(t);
            if (e) {
                var s = l(this).constructor;
                i = Reflect.construct(a, arguments, s)
            } else i = a.apply(this, arguments);
            return c(this, i)
        }
    }

    function g(t) {
        return function(t) {
            if (Array.isArray(t)) return u(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return u(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === i && t.constructor && (i = t.constructor.name);
            if ("Map" === i || "Set" === i) return Array.from(t);
            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return u(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, a = new Array(e); i < e; i++) a[i] = t[i];
        return a
    }
    var f = function() {
            function i() {
                e(this, i)
            }
            return a(i, [{
                key: "shadeRGBColor",
                value: function(t, e) {
                    var i = e.split(","),
                        a = t < 0 ? 0 : 255,
                        s = t < 0 ? -1 * t : t,
                        r = parseInt(i[0].slice(4), 10),
                        n = parseInt(i[1], 10),
                        o = parseInt(i[2], 10);
                    return "rgb(" + (Math.round((a - r) * s) + r) + "," + (Math.round((a - n) * s) + n) + "," + (Math.round((a - o) * s) + o) + ")"
                }
            }, {
                key: "shadeHexColor",
                value: function(t, e) {
                    var i = parseInt(e.slice(1), 16),
                        a = t < 0 ? 0 : 255,
                        s = t < 0 ? -1 * t : t,
                        r = i >> 16,
                        n = i >> 8 & 255,
                        o = 255 & i;
                    return "#" + (16777216 + 65536 * (Math.round((a - r) * s) + r) + 256 * (Math.round((a - n) * s) + n) + (Math.round((a - o) * s) + o)).toString(16).slice(1)
                }
            }, {
                key: "shadeColor",
                value: function(t, e) {
                    return i.isColorHex(e) ? this.shadeHexColor(t, e) : this.shadeRGBColor(t, e)
                }
            }], [{
                key: "bind",
                value: function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
            }, {
                key: "isObject",
                value: function(e) {
                    return e && "object" === t(e) && !Array.isArray(e) && null != e
                }
            }, {
                key: "listToArray",
                value: function(t) {
                    var e, i = [];
                    for (e = 0; e < t.length; e++) i[e] = t[e];
                    return i
                }
            }, {
                key: "extend",
                value: function(t, e) {
                    var i = this;
                    "function" != typeof Object.assign && (Object.assign = function(t) {
                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                        for (var e = Object(t), i = 1; i < arguments.length; i++) {
                            var a = arguments[i];
                            if (null != a)
                                for (var s in a) a.hasOwnProperty(s) && (e[s] = a[s])
                        }
                        return e
                    });
                    var a = Object.assign({}, t);
                    return this.isObject(t) && this.isObject(e) && Object.keys(e).forEach((function(r) {
                        i.isObject(e[r]) && r in t ? a[r] = i.extend(t[r], e[r]) : Object.assign(a, s({}, r, e[r]))
                    })), a
                }
            }, {
                key: "extendArray",
                value: function(t, e) {
                    var a = [];
                    return t.map((function(t) {
                        a.push(i.extend(e, t))
                    })), t = a
                }
            }, {
                key: "monthMod",
                value: function(t) {
                    return t % 12
                }
            }, {
                key: "clone",
                value: function(e) {
                    if ("[object Array]" === Object.prototype.toString.call(e)) {
                        for (var i = [], a = 0; a < e.length; a++) i[a] = this.clone(e[a]);
                        return i
                    }
                    if ("[object Null]" === Object.prototype.toString.call(e)) return null;
                    if ("[object Date]" === Object.prototype.toString.call(e)) return e;
                    if ("object" === t(e)) {
                        var s = {};
                        for (var r in e) e.hasOwnProperty(r) && (s[r] = this.clone(e[r]));
                        return s
                    }
                    return e
                }
            }, {
                key: "log10",
                value: function(t) {
                    return Math.log(t) / Math.LN10
                }
            }, {
                key: "roundToBase10",
                value: function(t) {
                    return Math.pow(10, Math.floor(Math.log10(t)))
                }
            }, {
                key: "roundToBase",
                value: function(t, e) {
                    return Math.pow(e, Math.floor(Math.log(t) / Math.log(e)))
                }
            }, {
                key: "parseNumber",
                value: function(t) {
                    return null === t ? t : parseFloat(t)
                }
            }, {
                key: "randomId",
                value: function() {
                    return (Math.random() + 1).toString(36).substring(4)
                }
            }, {
                key: "noExponents",
                value: function(t) {
                    var e = String(t).split(/[eE]/);
                    if (1 === e.length) return e[0];
                    var i = "",
                        a = t < 0 ? "-" : "",
                        s = e[0].replace(".", ""),
                        r = Number(e[1]) + 1;
                    if (r < 0) {
                        for (i = a + "0."; r++;) i += "0";
                        return i + s.replace(/^-/, "")
                    }
                    for (r -= s.length; r--;) i += "0";
                    return s + i
                }
            }, {
                key: "getDimensions",
                value: function(t) {
                    var e = getComputedStyle(t),
                        i = [],
                        a = t.clientHeight,
                        s = t.clientWidth;
                    return a -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), s -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight), i.push(s), i.push(a), i
                }
            }, {
                key: "getBoundingClientRect",
                value: function(t) {
                    var e = t.getBoundingClientRect();
                    return {
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                        left: e.left,
                        width: t.clientWidth,
                        height: t.clientHeight,
                        x: e.left,
                        y: e.top
                    }
                }
            }, {
                key: "getLargestStringFromArr",
                value: function(t) {
                    return t.reduce((function(t, e) {
                        return Array.isArray(e) && (e = e.reduce((function(t, e) {
                            return t.length > e.length ? t : e
                        }))), t.length > e.length ? t : e
                    }), 0)
                }
            }, {
                key: "hexToRgba",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "#999999",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .6;
                    "#" !== t.substring(0, 1) && (t = "#999999");
                    var i = t.replace("#", "");
                    i = i.match(new RegExp("(.{" + i.length / 3 + "})", "g"));
                    for (var a = 0; a < i.length; a++) i[a] = parseInt(1 === i[a].length ? i[a] + i[a] : i[a], 16);
                    return void 0 !== e && i.push(e), "rgba(" + i.join(",") + ")"
                }
            }, {
                key: "getOpacityFromRGBA",
                value: function(t) {
                    return parseFloat(t.replace(/^.*,(.+)\)/, "$1"))
                }
            }, {
                key: "rgb2hex",
                value: function(t) {
                    return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : ""
                }
            }, {
                key: "isColorHex",
                value: function(t) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t)
                }
            }, {
                key: "polarToCartesian",
                value: function(t, e, i, a) {
                    var s = (a - 90) * Math.PI / 180;
                    return {
                        x: t + i * Math.cos(s),
                        y: e + i * Math.sin(s)
                    }
                }
            }, {
                key: "escapeString",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                        i = t.toString().slice();
                    return i = i.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>{}[\]\\/]/gi, e)
                }
            }, {
                key: "negToZero",
                value: function(t) {
                    return t < 0 ? 0 : t
                }
            }, {
                key: "moveIndexInArray",
                value: function(t, e, i) {
                    if (i >= t.length)
                        for (var a = i - t.length + 1; a--;) t.push(void 0);
                    return t.splice(i, 0, t.splice(e, 1)[0]), t
                }
            }, {
                key: "extractNumber",
                value: function(t) {
                    return parseFloat(t.replace(/[^\d.]*/g, ""))
                }
            }, {
                key: "findAncestor",
                value: function(t, e) {
                    for (;
                        (t = t.parentElement) && !t.classList.contains(e););
                    return t
                }
            }, {
                key: "setELstyles",
                value: function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t.style.key = e[i])
                }
            }, {
                key: "isNumber",
                value: function(t) {
                    return !isNaN(t) && parseFloat(Number(t)) === t && !isNaN(parseInt(t, 10))
                }
            }, {
                key: "isFloat",
                value: function(t) {
                    return Number(t) === t && t % 1 != 0
                }
            }, {
                key: "isSafari",
                value: function() {
                    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
                }
            }, {
                key: "isFirefox",
                value: function() {
                    return navigator.userAgent.toLowerCase().indexOf("firefox") > -1
                }
            }, {
                key: "isIE11",
                value: function() {
                    if (-1 !== window.navigator.userAgent.indexOf("MSIE") || window.navigator.appVersion.indexOf("Trident/") > -1) return !0
                }
            }, {
                key: "isIE",
                value: function() {
                    var t = window.navigator.userAgent,
                        e = t.indexOf("MSIE ");
                    if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
                    if (t.indexOf("Trident/") > 0) {
                        var i = t.indexOf("rv:");
                        return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
                    }
                    var a = t.indexOf("Edge/");
                    return a > 0 && parseInt(t.substring(a + 5, t.indexOf(".", a)), 10)
                }
            }]), i
        }(),
        p = function() {
            function t(i) {
                e(this, t), this.ctx = i, this.w = i.w
            }
            return a(t, [{
                key: "getDefaultFilter",
                value: function(t, e) {
                    var i = this.w;
                    t.unfilter(!0), (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), "none" !== i.config.states.normal.filter ? this.applyFilter(t, e, i.config.states.normal.filter.type, i.config.states.normal.filter.value) : i.config.chart.dropShadow.enabled && this.dropShadow(t, i.config.chart.dropShadow, e)
                }
            }, {
                key: "addNormalFilter",
                value: function(t, e) {
                    var i = this.w;
                    i.config.chart.dropShadow.enabled && !t.node.classList.contains("apexcharts-marker") && this.dropShadow(t, i.config.chart.dropShadow, e)
                }
            }, {
                key: "addLightenFilter",
                value: function(t, e, i) {
                    var a = this,
                        s = this.w,
                        r = i.intensity;
                    if (!f.isFirefox()) {
                        t.unfilter(!0);
                        new window.SVG.Filter;
                        t.filter((function(t) {
                            var i = s.config.chart.dropShadow;
                            (i.enabled ? a.addShadow(t, e, i) : t).componentTransfer({
                                rgb: {
                                    type: "linear",
                                    slope: 1.5,
                                    intercept: r
                                }
                            })
                        })), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)
                    }
                }
            }, {
                key: "addDarkenFilter",
                value: function(t, e, i) {
                    var a = this,
                        s = this.w,
                        r = i.intensity;
                    if (!f.isFirefox()) {
                        t.unfilter(!0);
                        new window.SVG.Filter;
                        t.filter((function(t) {
                            var i = s.config.chart.dropShadow;
                            (i.enabled ? a.addShadow(t, e, i) : t).componentTransfer({
                                rgb: {
                                    type: "linear",
                                    slope: r
                                }
                            })
                        })), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)
                    }
                }
            }, {
                key: "applyFilter",
                value: function(t, e, i) {
                    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
                    switch (i) {
                        case "none":
                            this.addNormalFilter(t, e);
                            break;
                        case "lighten":
                            this.addLightenFilter(t, e, {
                                intensity: a
                            });
                            break;
                        case "darken":
                            this.addDarkenFilter(t, e, {
                                intensity: a
                            })
                    }
                }
            }, {
                key: "addShadow",
                value: function(t, e, i) {
                    var a = i.blur,
                        s = i.top,
                        r = i.left,
                        n = i.color,
                        o = i.opacity,
                        l = t.flood(Array.isArray(n) ? n[e] : n, o).composite(t.sourceAlpha, "in").offset(r, s).gaussianBlur(a).merge(t.source);
                    return t.blend(t.source, l)
                }
            }, {
                key: "dropShadow",
                value: function(t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        a = e.top,
                        s = e.left,
                        r = e.blur,
                        n = e.color,
                        o = e.opacity,
                        l = e.noUserSpaceOnUse,
                        h = this.w;
                    return t.unfilter(!0), f.isIE() && "radialBar" === h.config.chart.type || (n = Array.isArray(n) ? n[i] : n, t.filter((function(t) {
                        var e = null;
                        e = f.isSafari() || f.isFirefox() || f.isIE() ? t.flood(n, o).composite(t.sourceAlpha, "in").offset(s, a).gaussianBlur(r) : t.flood(n, o).composite(t.sourceAlpha, "in").offset(s, a).gaussianBlur(r).merge(t.source), t.blend(t.source, e)
                    })), l || t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)), t
                }
            }, {
                key: "setSelectionFilter",
                value: function(t, e, i) {
                    var a = this.w;
                    void 0 !== a.globals.selectedDataPoints[e] && a.globals.selectedDataPoints[e].indexOf(i) > -1 && (t.node.setAttribute("selected", !0);
                        var s = a.config.states.active.filter;
                        "none" !== s && this.applyFilter(t, e, s.type, s.value))
                }
            }, {
                key: "_scaleFilterSize",
                value: function(t) {
                    ! function(e) {
                        for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i])
                    }({
                        width: "200%",
                        height: "200%",
                        x: "-50%",
                        y: "-50%"
                    })
                }
            }]), t
        }(),
        x = function() {
            function t(i) {
                e(this, t), this.ctx = i, this.w = i.w, this.setEasingFunctions()
            }
            return a(t, [{
                key: "setEasingFunctions",
                value: function() {
                    var t;
                    if (!this.w.globals.easing) {
                        switch (this.w.config.chart.animations.easing) {
                            case "linear":
                                t = "-";
                                break;
                            case "easein":
                                t = "<";
                                break;
                            case "easeout":
                                t = ">";
                                break;
                            case "easeinout":
                                t = "<>";
                                break;
                            case "swing":
                                t = function(t) {
                                    var e = 1.70158;
                                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                                };
                                break;
                            case "bounce":
                                t = function(t) {
                                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                                };
                                break;
                            case "elastic":
                                t = function(t) {
                                    return t === !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
                                };
                                break;
                            default:
                                t = "<>"
                        }
                        this.w.globals.easing = t
                    }
                }
            }, {
                key: "animateLine",
                value: function(t, e, i, a) {
                    t.attr(e).animate(a).attr(i)
                }
            }, {
                key: "animateCircleRadius",
                value: function(t, e, i, a, s, r) {
                    e || (e = 0), t.attr({
                        r: e
                    }).animate(a, s).attr({
                        r: i
                    }).afterAll((function() {
                        r()
                    }))
                }
            }, {
                key: "animateCircle",
                value: function(t, e, i, a, s) {
                    t.attr({
                        r: e.r,
                        cx: e.cx,
                        cy: e.cy
                    }).animate(a, s).attr({
                        r: i.r,
                        cx: i.cx,
                        cy: i.cy
                    })
                }
            }, {
                key: "animateRect",
                value: function(t, e, i, a, s) {
                    t.attr(e).animate(a).attr(i).afterAll((function() {
                        return s()
                    }))
                }
            }, {
                key: "animatePathsGradually",
                value: function(t) {
                    var e = t.el,
                        i = t.realIndex,
                        a = t.j,
                        s = t.fill,
                        r = t.pathFrom,
                        n = t.pathTo,
                        o = t.speed,
                        l = t.delay,
                        h = this.w,
                        c = 0;
                    h.config.chart.animations.animateGradually.enabled && (c = h.config.chart.animations.animateGradually.delay), h.config.chart.animations.dynamicAnimation.enabled && h.globals.dataChanged && "bar" !== h.config.chart.type && (c = 0), this.morphSVG(e, i, a, "line" !== h.config.chart.type || h.globals.comboCharts ? s : "stroke", r, n, o, l * c)
                }
            }, {
                key: "showDelayedElements",
                value: function() {
                    this.w.globals.delayedElements.forEach((function(t) {
                        t.el.classList.remove("apexcharts-element-hidden")
                    }))
                }
            }, {
                key: "animationCompleted",
                value: function(t) {
                    var e = this.w;
                    e.globals.animationEnded || (e.globals.animationEnded = !0, this.showDelayedElements(), "function" == typeof e.config.chart.events.animationEnd && e.config.chart.events.animationEnd(this.ctx, {
                        el: t,
                        w: e
                    }))
                }
            }, {
                key: "morphSVG",
                value: function(t, e, i, a, s, r, n, o) {
                    var l = this,
                        h = this.w;
                    s || (s = t.attr("pathFrom")), r || (r = t.attr("pathTo"));
                    var c = function(t) {
                        return "radar" === h.config.chart.type && (n = 1), "M 0 ".concat(h.globals.gridHeight)
                    };
                    (!s || s.indexOf("undefined") > -1 || s.indexOf("NaN") > -1) && (s = c()), (r.indexOf("undefined") > -1 || r.indexOf("NaN") > -1) && (r = c()), h.globals.shouldAnimate || (n = 1), t.plot(s).animate(1, h.globals.easing, o).plot(s).animate(n, h.globals.easing, o).plot(r).afterAll((function() {
                        f.isNumber(i) ? i === h.globals.series[h.globals.maxValsInArrayIndex].length - 2 && h.globals.shouldAnimate && l.animationCompleted(t) : "none" !== a && h.globals.shouldAnimate && (!h.globals.comboCharts && e === h.globals.series.length - 1 || h.globals.comboCharts) && l.animationCompleted(t), l.showDelayedElements()
                    }))
                }
            }]), t
        }(),
        b = function() {
            function t(i) {
                e(this, t), this.ctx = i, this.w = i.w
            }
            return a(t, [{
                key: "drawLine",
                value: function(t, e, i, a) {
                    var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8",
                        r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                        n = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
                        o = this.w,
                        l = o.globals.dom.Paper.line().attr({
                            x1: t,
                            y1: e,
                            x2: i,
                            y2: a,
                            stroke: s,
                            "stroke-dasharray": r,
                            "stroke-width": n
                        });
                    return l
                }
            }, {
                key: "drawRect",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                        r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "#fefefe",
                        n = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
                        o =
                        arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "rect",
                        l =
