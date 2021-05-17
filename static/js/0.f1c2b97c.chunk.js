(this["webpackJsonpbalanced-network-interface"] = this["webpackJsonpbalanced-network-interface"] || []).push([
    [0], {
        1003: function(e, t, n) {
            "use strict";
            var r = n(0),
                o = n(989),
                i = "object" === typeof window;
            n.n(o).a, t.a = function(e, t) {
                void 0 === t && (t = !1);
                var n = Object(r.useState)(i ? function() {
                        return window.matchMedia(e).matches
                    } : t),
                    o = n[0],
                    a = n[1];
                return Object(r.useEffect)((function() {
                    var t = !0,
                        n = window.matchMedia(e),
                        r = function() {
                            t && a(!!n.matches)
                        };
                    return n.addListener(r), a(n.matches),
                        function() {
                            t = !1, n.removeListener(r)
                        }
                }), [e]), o
            }
        },
        989: function(e, t, n) {
            "use strict";
            e.exports = function e(t, n) {
                if (t === n) return !0;
                if (t && n && "object" == typeof t && "object" == typeof n) {
                    if (t.constructor !== n.constructor) return !1;
                    var r, o, i;
                    if (Array.isArray(t)) {
                        if ((r = t.length) != n.length) return !1;
                        for (o = r; 0 !== o--;)
                            if (!e(t[o], n[o])) return !1;
                        return !0
                    }
                    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
                    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
                    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
                    if ((r = (i = Object.keys(t)).length) !== Object.keys(n).length) return !1;
                    for (o = r; 0 !== o--;)
                        if (!Object.prototype.hasOwnProperty.call(n, i[o])) return !1;
                    for (o = r; 0 !== o--;) {
                        var a = i[o];
                        if (("_owner" !== a || !t.$$typeof) && !e(t[a], n[a])) return !1
                    }
                    return !0
                }
                return t !== t && n !== n
            }
        },
        998: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return be
            }));
            var r = n(0);

            function o(e) {
                var t = e.getBoundingClientRect();
                return {
                    width: t.width,
                    height: t.height,
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    x: t.left,
                    y: t.top
                }
            }

            function i(e) {
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function a(e) {
                var t = i(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function s(e) {
                return e instanceof i(e).Element || e instanceof Element
            }

            function f(e) {
                return e instanceof i(e).HTMLElement || e instanceof HTMLElement
            }

            function c(e) {
                return "undefined" !== typeof ShadowRoot && (e instanceof i(e).ShadowRoot || e instanceof ShadowRoot)
            }

            function u(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function p(e) {
                return ((s(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function l(e) {
                return o(p(e)).left + a(e).scrollLeft
            }

            function d(e) {
                return i(e).getComputedStyle(e)
            }

            function m(e) {
                var t = d(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r)
            }

            function h(e, t, n) {
                void 0 === n && (n = !1);
                var r = p(t),
                    s = o(e),
                    c = f(t),
                    d = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    h = {
                        x: 0,
                        y: 0
                    };
                return (c || !c && !n) && (("body" !== u(t) || m(r)) && (d = function(e) {
                    return e !== i(e) && f(e) ? {
                        scrollLeft: (t = e).scrollLeft,
                        scrollTop: t.scrollTop
                    } : a(e);
                    var t
                }(t)), f(t) ? ((h = o(t)).x += t.clientLeft, h.y += t.clientTop) : r && (h.x = l(r))), {
                    x: s.left + d.scrollLeft - h.x,
                    y: s.top + d.scrollTop - h.y,
                    width: s.width,
                    height: s.height
                }
            }

            function v(e) {
                return {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: e.offsetWidth,
                    height: e.offsetHeight
                }
            }

            function y(e) {
                return "html" === u(e) ? e : e.assignedSlot || e.parentNode || (c(e) ? e.host : null) || p(e)
            }

            function g(e) {
                return ["html", "body", "#document"].indexOf(u(e)) >= 0 ? e.ownerDocument.body : f(e) && m(e) ? e : g(y(e))
            }

            function b(e, t) {
                var n;
                void 0 === t && (t = []);
                var r = g(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    a = i(r),
                    s = o ? [a].concat(a.visualViewport || [], m(r) ? r : []) : r,
                    f = t.concat(s);
                return o ? f : f.concat(b(y(s)))
            }

            function w(e) {
                return ["table", "td", "th"].indexOf(u(e)) >= 0
            }

            function O(e) {
                return f(e) && "fixed" !== d(e).position ? e.offsetParent : null
            }

            function x(e) {
                for (var t = i(e), n = O(e); n && w(n) && "static" === d(n).position;) n = O(n);
                return n && ("html" === u(n) || "body" === u(n) && "static" === d(n).position) ? t : n || function(e) {
                    for (var t = navigator.userAgent.toLowerCase().includes("firefox"), n = y(e); f(n) && ["html", "body"].indexOf(u(n)) < 0;) {
                        var r = d(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || ["transform", "perspective"].includes(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var j = "top",
                E = "bottom",
                D = "right",
                k = "left",
                L = "auto",
                P = [j, E, D, k],
                M = "start",
                S = "end",
                A = "viewport",
                R = "popper",
                W = P.reduce((function(e, t) {
                    return e.concat([t + "-" + M, t + "-" + S])
                }), []),
                B = [].concat(P, [L]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + M, t + "-" + S])
                }), []),
                H = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function T(e) {
                var t = new Map,
                    n = new Set,
                    r = [];

                function o(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && o(r)
                        }
                    })), r.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    n.has(e.name) || o(e)
                })), r
            }

            function q(e) {
                var t;
                return function() {
                    return t || (t = new Promise((function(n) {
                        Promise.resolve().then((function() {
                            t = void 0, n(e())
                        }))
                    }))), t
                }
            }
            var U = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function C() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" === typeof e.getBoundingClientRect)
                }))
            }

            function F(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    o = t.defaultOptions,
                    i = void 0 === o ? U : o;
                return function(e, t, n) {
                    void 0 === n && (n = i);
                    var o = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, U, i),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        a = [],
                        f = !1,
                        c = {
                            state: o,
                            setOptions: function(n) {
                                u(), o.options = Object.assign({}, i, o.options, n), o.scrollParents = {
                                    reference: s(e) ? b(e) : e.contextElement ? b(e.contextElement) : [],
                                    popper: b(t)
                                };
                                var f = function(e) {
                                    var t = T(e);
                                    return H.reduce((function(e, n) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        })))
                                    }), [])
                                }(function(e) {
                                    var t = e.reduce((function(e, t) {
                                        var n = e[t.name];
                                        return e[t.name] = n ? Object.assign({}, n, t, {
                                            options: Object.assign({}, n.options, t.options),
                                            data: Object.assign({}, n.data, t.data)
                                        }) : t, e
                                    }), {});
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }([].concat(r, o.options.modifiers)));
                                return o.orderedModifiers = f.filter((function(e) {
                                    return e.enabled
                                })), o.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = void 0 === n ? {} : n,
                                        i = e.effect;
                                    if ("function" === typeof i) {
                                        var s = i({
                                                state: o,
                                                name: t,
                                                instance: c,
                                                options: r
                                            }),
                                            f = function() {};
                                        a.push(s || f)
                                    }
                                })), c.update()
                            },
                            forceUpdate: function() {
                                if (!f) {
                                    var e = o.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (C(t, n)) {
                                        o.rects = {
                                            reference: h(t, x(n), "fixed" === o.options.strategy),
                                            popper: v(n)
                                        }, o.reset = !1, o.placement = o.options.placement, o.orderedModifiers.forEach((function(e) {
                                            return o.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var r = 0; r < o.orderedModifiers.length; r++)
                                            if (!0 !== o.reset) {
                                                var i = o.orderedModifiers[r],
                                                    a = i.fn,
                                                    s = i.options,
                                                    u = void 0 === s ? {} : s,
                                                    p = i.name;
                                                "function" === typeof a && (o = a({
                                                    state: o,
                                                    options: u,
                                                    name: p,
                                                    instance: c
                                                }) || o)
                                            } else o.reset = !1, r = -1
                                    }
                                }
                            },
                            update: q((function() {
                                return new Promise((function(e) {
                                    c.forceUpdate(), e(o)
                                }))
                            })),
                            destroy: function() {
                                u(), f = !0
                            }
                        };
                    if (!C(e, t)) return c;

                    function u() {
                        a.forEach((function(e) {
                            return e()
                        })), a = []
                    }
                    return c.setOptions(n).then((function(e) {
                        !f && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), c
                }
            }
            var N = {
                passive: !0
            };
            var V = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(e) {
                    var t = e.state,
                        n = e.instance,
                        r = e.options,
                        o = r.scroll,
                        a = void 0 === o || o,
                        s = r.resize,
                        f = void 0 === s || s,
                        c = i(t.elements.popper),
                        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return a && u.forEach((function(e) {
                            e.addEventListener("scroll", n.update, N)
                        })), f && c.addEventListener("resize", n.update, N),
                        function() {
                            a && u.forEach((function(e) {
                                e.removeEventListener("scroll", n.update, N)
                            })), f && c.removeEventListener("resize", n.update, N)
                        }
                },
                data: {}
            };

            function I(e) {
                return e.split("-")[0]
            }

            function _(e) {
                return e.split("-")[1]
            }

            function z(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function J(e) {
                var t, n = e.reference,
                    r = e.element,
                    o = e.placement,
                    i = o ? I(o) : null,
                    a = o ? _(o) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    f = n.y + n.height / 2 - r.height / 2;
                switch (i) {
                    case j:
                        t = {
                            x: s,
                            y: n.y - r.height
                        };
                        break;
                    case E:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case D:
                        t = {
                            x: n.x + n.width,
                            y: f
                        };
                        break;
                    case k:
                        t = {
                            x: n.x - r.width,
                            y: f
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var c = i ? z(i) : null;
                if (null != c) {
                    var u = "y" === c ? "height" : "width";
                    switch (a) {
                        case M:
                            t[c] = t[c] - (n[u] / 2 - r[u] / 2);
                            break;
                        case S:
                            t[c] = t[c] + (n[u] / 2 - r[u] / 2)
                    }
                }
                return t
            }
            var X = {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(e) {
                        var t = e.state,
                            n = e.name;
                        t.modifiersData[n] = J({
                            reference: t.rects.reference,
                            element: t.rects.popper,
                            strategy: "absolute",
                            placement: t.placement
                        })
                    },
                    data: {}
                },
                Y = Math.max,
                $ = Math.min,
                G = Math.round,
                K = {
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto"
                };

            function Q(e) {
                var t, n = e.popper,
                    r = e.popperRect,
                    o = e.placement,
                    a = e.offsets,
                    s = e.position,
                    f = e.gpuAcceleration,
                    c = e.adaptive,
                    u = e.roundOffsets,
                    l = !0 === u ? function(e) {
                        var t = e.x,
                            n = e.y,
                            r = window.devicePixelRatio || 1;
                        return {
                            x: G(G(t * r) / r) || 0,
                            y: G(G(n * r) / r) || 0
                        }
                    }(a) : "function" === typeof u ? u(a) : a,
                    m = l.x,
                    h = void 0 === m ? 0 : m,
                    v = l.y,
                    y = void 0 === v ? 0 : v,
                    g = a.hasOwnProperty("x"),
                    b = a.hasOwnProperty("y"),
                    w = k,
                    O = j,
                    L = window;
                if (c) {
                    var P = x(n),
                        M = "clientHeight",
                        S = "clientWidth";
                    P === i(n) && "static" !== d(P = p(n)).position && (M = "scrollHeight", S = "scrollWidth"), o === j && (O = E, y -= P[M] - r.height, y *= f ? 1 : -1), o === k && (w = D, h -= P[S] - r.width, h *= f ? 1 : -1)
                }
                var A, R = Object.assign({
                    position: s
                }, c && K);
                return f ? Object.assign({}, R, ((A = {})[O] = b ? "0" : "", A[w] = g ? "0" : "", A.transform = (L.devicePixelRatio || 1) < 2 ? "translate(" + h + "px, " + y + "px)" : "translate3d(" + h + "px, " + y + "px, 0)", A)) : Object.assign({}, R, ((t = {})[O] = b ? y + "px" : "", t[w] = g ? h + "px" : "", t.transform = "", t))
            }
            var Z = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function ee(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return Z[e]
                }))
            }
            var te = {
                start: "end",
                end: "start"
            };

            function ne(e) {
                return e.replace(/start|end/g, (function(e) {
                    return te[e]
                }))
            }

            function re(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && c(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function oe(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function ie(e, t) {
                return t === A ? oe(function(e) {
                    var t = i(e),
                        n = p(e),
                        r = t.visualViewport,
                        o = n.clientWidth,
                        a = n.clientHeight,
                        s = 0,
                        f = 0;
                    return r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, f = r.offsetTop)), {
                        width: o,
                        height: a,
                        x: s + l(e),
                        y: f
                    }
                }(e)) : f(t) ? function(e) {
                    var t = o(e);
                    return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
                }(t) : oe(function(e) {
                    var t, n = p(e),
                        r = a(e),
                        o = null == (t = e.ownerDocument) ? void 0 : t.body,
                        i = Y(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        s = Y(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        f = -r.scrollLeft + l(e),
                        c = -r.scrollTop;
                    return "rtl" === d(o || n).direction && (f += Y(n.clientWidth, o ? o.clientWidth : 0) - i), {
                        width: i,
                        height: s,
                        x: f,
                        y: c
                    }
                }(p(e)))
            }

            function ae(e, t, n) {
                var r = "clippingParents" === t ? function(e) {
                        var t = b(y(e)),
                            n = ["absolute", "fixed"].indexOf(d(e).position) >= 0 && f(e) ? x(e) : e;
                        return s(n) ? t.filter((function(e) {
                            return s(e) && re(e, n) && "body" !== u(e)
                        })) : []
                    }(e) : [].concat(t),
                    o = [].concat(r, [n]),
                    i = o[0],
                    a = o.reduce((function(t, n) {
                        var r = ie(e, n);
                        return t.top = Y(r.top, t.top), t.right = $(r.right, t.right), t.bottom = $(r.bottom, t.bottom), t.left = Y(r.left, t.left), t
                    }), ie(e, i));
                return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
            }

            function se(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function fe(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }

            function ce(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    i = void 0 === r ? e.placement : r,
                    a = n.boundary,
                    f = void 0 === a ? "clippingParents" : a,
                    c = n.rootBoundary,
                    u = void 0 === c ? A : c,
                    l = n.elementContext,
                    d = void 0 === l ? R : l,
                    m = n.altBoundary,
                    h = void 0 !== m && m,
                    v = n.padding,
                    y = void 0 === v ? 0 : v,
                    g = se("number" !== typeof y ? y : fe(y, P)),
                    b = d === R ? "reference" : R,
                    w = e.elements.reference,
                    O = e.rects.popper,
                    x = e.elements[h ? b : d],
                    k = ae(s(x) ? x : x.contextElement || p(e.elements.popper), f, u),
                    L = o(w),
                    M = J({
                        reference: L,
                        element: O,
                        strategy: "absolute",
                        placement: i
                    }),
                    S = oe(Object.assign({}, O, M)),
                    W = d === R ? S : L,
                    B = {
                        top: k.top - W.top + g.top,
                        bottom: W.bottom - k.bottom + g.bottom,
                        left: k.left - W.left + g.left,
                        right: W.right - k.right + g.right
                    },
                    H = e.modifiersData.offset;
                if (d === R && H) {
                    var T = H[i];
                    Object.keys(B).forEach((function(e) {
                        var t = [D, E].indexOf(e) >= 0 ? 1 : -1,
                            n = [j, E].indexOf(e) >= 0 ? "y" : "x";
                        B[e] += T[n] * t
                    }))
                }
                return B
            }

            function ue(e, t, n) {
                return Y(e, $(t, n))
            }

            function pe(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function le(e) {
                return [j, D, E, k].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var de = F({
                    defaultModifiers: [V, X, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                o = void 0 === r || r,
                                i = n.adaptive,
                                a = void 0 === i || i,
                                s = n.roundOffsets,
                                f = void 0 === s || s,
                                c = {
                                    placement: I(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: o
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Q(Object.assign({}, c, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: a,
                                roundOffsets: f
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Q(Object.assign({}, c, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: f
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach((function(e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    o = t.elements[e];
                                f(o) && u(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
                                    var t = r[e];
                                    !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                                })))
                            }))
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function() {
                                    Object.keys(t.elements).forEach((function(e) {
                                        var r = t.elements[e],
                                            o = t.attributes[e] || {},
                                            i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                                return e[t] = "", e
                                            }), {});
                                        f(r) && u(r) && (Object.assign(r.style, i), Object.keys(o).forEach((function(e) {
                                            r.removeAttribute(e)
                                        })))
                                    }))
                                }
                        },
                        requires: ["computeStyles"]
                    }, {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.offset,
                                i = void 0 === o ? [0, 0] : o,
                                a = B.reduce((function(e, n) {
                                    return e[n] = function(e, t, n) {
                                        var r = I(e),
                                            o = [k, j].indexOf(r) >= 0 ? -1 : 1,
                                            i = "function" === typeof n ? n(Object.assign({}, t, {
                                                placement: e
                                            })) : n,
                                            a = i[0],
                                            s = i[1];
                                        return a = a || 0, s = (s || 0) * o, [k, D].indexOf(r) >= 0 ? {
                                            x: s,
                                            y: a
                                        } : {
                                            x: a,
                                            y: s
                                        }
                                    }(n, t.rects, i), e
                                }), {}),
                                s = a[t.placement],
                                f = s.x,
                                c = s.y;
                            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a
                        }
                    }, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var o = n.mainAxis, i = void 0 === o || o, a = n.altAxis, s = void 0 === a || a, f = n.fallbackPlacements, c = n.padding, u = n.boundary, p = n.rootBoundary, l = n.altBoundary, d = n.flipVariations, m = void 0 === d || d, h = n.allowedAutoPlacements, v = t.options.placement, y = I(v), g = f || (y === v || !m ? [ee(v)] : function(e) {
                                        if (I(e) === L) return [];
                                        var t = ee(e);
                                        return [ne(e), t, ne(t)]
                                    }(v)), b = [v].concat(g).reduce((function(e, n) {
                                        return e.concat(I(n) === L ? function(e, t) {
                                            void 0 === t && (t = {});
                                            var n = t,
                                                r = n.placement,
                                                o = n.boundary,
                                                i = n.rootBoundary,
                                                a = n.padding,
                                                s = n.flipVariations,
                                                f = n.allowedAutoPlacements,
                                                c = void 0 === f ? B : f,
                                                u = _(r),
                                                p = u ? s ? W : W.filter((function(e) {
                                                    return _(e) === u
                                                })) : P,
                                                l = p.filter((function(e) {
                                                    return c.indexOf(e) >= 0
                                                }));
                                            0 === l.length && (l = p);
                                            var d = l.reduce((function(t, n) {
                                                return t[n] = ce(e, {
                                                    placement: n,
                                                    boundary: o,
                                                    rootBoundary: i,
                                                    padding: a
                                                })[I(n)], t
                                            }), {});
                                            return Object.keys(d).sort((function(e, t) {
                                                return d[e] - d[t]
                                            }))
                                        }(t, {
                                            placement: n,
                                            boundary: u,
                                            rootBoundary: p,
                                            padding: c,
                                            flipVariations: m,
                                            allowedAutoPlacements: h
                                        }) : n)
                                    }), []), w = t.rects.reference, O = t.rects.popper, x = new Map, S = !0, A = b[0], R = 0; R < b.length; R++) {
                                    var H = b[R],
                                        T = I(H),
                                        q = _(H) === M,
                                        U = [j, E].indexOf(T) >= 0,
                                        C = U ? "width" : "height",
                                        F = ce(t, {
                                            placement: H,
                                            boundary: u,
                                            rootBoundary: p,
                                            altBoundary: l,
                                            padding: c
                                        }),
                                        N = U ? q ? D : k : q ? E : j;
                                    w[C] > O[C] && (N = ee(N));
                                    var V = ee(N),
                                        z = [];
                                    if (i && z.push(F[T] <= 0), s && z.push(F[N] <= 0, F[V] <= 0), z.every((function(e) {
                                            return e
                                        }))) {
                                        A = H, S = !1;
                                        break
                                    }
                                    x.set(H, z)
                                }
                                if (S)
                                    for (var J = function(e) {
                                            var t = b.find((function(t) {
                                                var n = x.get(t);
                                                if (n) return n.slice(0, e).every((function(e) {
                                                    return e
                                                }))
                                            }));
                                            if (t) return A = t, "break"
                                        }, X = m ? 3 : 1; X > 0; X--) {
                                        if ("break" === J(X)) break
                                    }
                                t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name,
                                o = n.mainAxis,
                                i = void 0 === o || o,
                                a = n.altAxis,
                                s = void 0 !== a && a,
                                f = n.boundary,
                                c = n.rootBoundary,
                                u = n.altBoundary,
                                p = n.padding,
                                l = n.tether,
                                d = void 0 === l || l,
                                m = n.tetherOffset,
                                h = void 0 === m ? 0 : m,
                                y = ce(t, {
                                    boundary: f,
                                    rootBoundary: c,
                                    padding: p,
                                    altBoundary: u
                                }),
                                g = I(t.placement),
                                b = _(t.placement),
                                w = !b,
                                O = z(g),
                                L = "x" === O ? "y" : "x",
                                P = t.modifiersData.popperOffsets,
                                S = t.rects.reference,
                                A = t.rects.popper,
                                R = "function" === typeof h ? h(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : h,
                                W = {
                                    x: 0,
                                    y: 0
                                };
                            if (P) {
                                if (i || s) {
                                    var B = "y" === O ? j : k,
                                        H = "y" === O ? E : D,
                                        T = "y" === O ? "height" : "width",
                                        q = P[O],
                                        U = P[O] + y[B],
                                        C = P[O] - y[H],
                                        F = d ? -A[T] / 2 : 0,
                                        N = b === M ? S[T] : A[T],
                                        V = b === M ? -A[T] : -S[T],
                                        J = t.elements.arrow,
                                        X = d && J ? v(J) : {
                                            width: 0,
                                            height: 0
                                        },
                                        G = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            left: 0
                                        },
                                        K = G[B],
                                        Q = G[H],
                                        Z = ue(0, S[T], X[T]),
                                        ee = w ? S[T] / 2 - F - Z - K - R : N - Z - K - R,
                                        te = w ? -S[T] / 2 + F + Z + Q + R : V + Z + Q + R,
                                        ne = t.elements.arrow && x(t.elements.arrow),
                                        re = ne ? "y" === O ? ne.clientTop || 0 : ne.clientLeft || 0 : 0,
                                        oe = t.modifiersData.offset ? t.modifiersData.offset[t.placement][O] : 0,
                                        ie = P[O] + ee - oe - re,
                                        ae = P[O] + te - oe;
                                    if (i) {
                                        var se = ue(d ? $(U, ie) : U, q, d ? Y(C, ae) : C);
                                        P[O] = se, W[O] = se - q
                                    }
                                    if (s) {
                                        var fe = "x" === O ? j : k,
                                            pe = "x" === O ? E : D,
                                            le = P[L],
                                            de = le + y[fe],
                                            me = le - y[pe],
                                            he = ue(d ? $(de, ie) : de, le, d ? Y(me, ae) : me);
                                        P[L] = he, W[L] = he - le
                                    }
                                }
                                t.modifiersData[r] = W
                            }
                        },
                        requiresIfExists: ["offset"]
                    }, {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t, n = e.state,
                                r = e.name,
                                o = e.options,
                                i = n.elements.arrow,
                                a = n.modifiersData.popperOffsets,
                                s = I(n.placement),
                                f = z(s),
                                c = [k, D].indexOf(s) >= 0 ? "height" : "width";
                            if (i && a) {
                                var u = function(e, t) {
                                        return se("number" !== typeof(e = "function" === typeof e ? e(Object.assign({}, t.rects, {
                                            placement: t.placement
                                        })) : e) ? e : fe(e, P))
                                    }(o.padding, n),
                                    p = v(i),
                                    l = "y" === f ? j : k,
                                    d = "y" === f ? E : D,
                                    m = n.rects.reference[c] + n.rects.reference[f] - a[f] - n.rects.popper[c],
                                    h = a[f] - n.rects.reference[f],
                                    y = x(i),
                                    g = y ? "y" === f ? y.clientHeight || 0 : y.clientWidth || 0 : 0,
                                    b = m / 2 - h / 2,
                                    w = u[l],
                                    O = g - p[c] - u[d],
                                    L = g / 2 - p[c] / 2 + b,
                                    M = ue(w, L, O),
                                    S = f;
                                n.modifiersData[r] = ((t = {})[S] = M, t.centerOffset = M - L, t)
                            }
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = e.options.element,
                                r = void 0 === n ? "[data-popper-arrow]" : n;
                            null != r && ("string" !== typeof r || (r = t.elements.popper.querySelector(r))) && re(t.elements.popper, r) && (t.elements.arrow = r)
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"]
                    }, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                o = t.rects.popper,
                                i = t.modifiersData.preventOverflow,
                                a = ce(t, {
                                    elementContext: "reference"
                                }),
                                s = ce(t, {
                                    altBoundary: !0
                                }),
                                f = pe(a, r),
                                c = pe(s, o, i),
                                u = le(f),
                                p = le(c);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: f,
                                popperEscapeOffsets: c,
                                isReferenceHidden: u,
                                hasPopperEscaped: p
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": u,
                                "data-popper-escaped": p
                            })
                        }
                    }]
                }),
                me = n(368),
                he = n.n(me),
                ve = function(e) {
                    return e.reduce((function(e, t) {
                        var n = t[0],
                            r = t[1];
                        return e[n] = r, e
                    }), {})
                },
                ye = "undefined" !== typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
                ge = [],
                be = function(e, t, n) {
                    void 0 === n && (n = {});
                    var o = r.useRef(null),
                        i = {
                            onFirstUpdate: n.onFirstUpdate,
                            placement: n.placement || "bottom",
                            strategy: n.strategy || "absolute",
                            modifiers: n.modifiers || ge
                        },
                        a = r.useState({
                            styles: {
                                popper: {
                                    position: i.strategy,
                                    left: "0",
                                    top: "0"
                                }
                            },
                            attributes: {}
                        }),
                        s = a[0],
                        f = a[1],
                        c = r.useMemo((function() {
                            return {
                                name: "updateState",
                                enabled: !0,
                                phase: "write",
                                fn: function(e) {
                                    var t = e.state,
                                        n = Object.keys(t.elements);
                                    f({
                                        styles: ve(n.map((function(e) {
                                            return [e, t.styles[e] || {}]
                                        }))),
                                        attributes: ve(n.map((function(e) {
                                            return [e, t.attributes[e]]
                                        })))
                                    })
                                },
                                requires: ["computeStyles"]
                            }
                        }), []),
                        u = r.useMemo((function() {
                            var e = {
                                onFirstUpdate: i.onFirstUpdate,
                                placement: i.placement,
                                strategy: i.strategy,
                                modifiers: [].concat(i.modifiers, [c, {
                                    name: "applyStyles",
                                    enabled: !1
                                }])
                            };
                            return he()(o.current, e) ? o.current || e : (o.current = e, e)
                        }), [i.onFirstUpdate, i.placement, i.strategy, i.modifiers, c]),
                        p = r.useRef();
                    return ye((function() {
                        p.current && p.current.setOptions(u)
                    }), [u]), ye((function() {
                        if (null != e && null != t) {
                            var r = (n.createPopper || de)(e, t, u);
                            return p.current = r,
                                function() {
                                    r.destroy(), p.current = null
                                }
                        }
                    }), [e, t, n.createPopper]), {
                        state: p.current ? p.current.state : null,
                        styles: s.styles,
                        attributes: s.attributes,
                        update: p.current ? p.current.update : null,
                        forceUpdate: p.current ? p.current.forceUpdate : null
                    }
                }
        }
    }
]);