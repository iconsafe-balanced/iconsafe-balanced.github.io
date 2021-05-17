(this["webpackJsonpbalanced-network-interface"] = this["webpackJsonpbalanced-network-interface"] || []).push([
    [6], {
        929: function (e, t, n) {
            "use strict";
            n.d(t, "b", (function () {
                return x
            })), n.d(t, "c", (function () {
                return v
            })), n.d(t, "a", (function () {
                return E
            }));
            var a = n(5),
                r = n.n(a),
                c = n(14),
                o = n(51),
                i = n(0),
                l = n.n(i),
                u = n(116),
                s = n.n(u),
                d = n(172),
                f = n(42),
                m = n(36),
                b = n(173),
                p = n(294),
                g = n(280);

            function x () {
                return Object(m.d)((function (e) {
                    return e.wallet
                }))
            }

            function v (e) {
                var t = Object(m.c)(),
                    n = Object(p.b)();
                l.a.useEffect((function () {
                    e ? Promise.all([b.a.ICX.balanceOf(e), b.a.sICX.balanceOf(e), b.a.BALN.balanceOf(e), b.a.bnUSD.balanceOf(e), b.a.Rewards.getBalnHolding(e)]).then((function (e) {
                        var n = e.map((function (e) {
                            return d.a.utils.toIcx(e)
                        })),
                            a = Object(o.a)(n, 5),
                            r = a[0],
                            c = a[1],
                            i = a[2],
                            l = a[3],
                            u = a[4];
                        t(Object(g.a)({
                            ICX: r,
                            sICX: c,
                            BALN: i,
                            bnUSD: l,
                            BALNreward: u
                        }))
                    })) : t(Object(g.b)())
                }), [n, e, t])
            }
            var E = function () {
                var e = Object(f.d)().account,
                    t = Object(p.b)(),
                    n = l.a.useState({}),
                    a = Object(o.a)(n, 2),
                    i = a[0],
                    u = a[1];
                return l.a.useEffect((function () {
                    (function () {
                        var t = Object(c.a)(r.a.mark((function t () {
                            var n, a;
                            return r.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!e) {
                                            t.next = 7;
                                            break
                                        }
                                        return t.next = 3, b.a.BALN.detailsBalanceOf(e);
                                    case 3:
                                        n = t.sent, a = {}, s.a.forEach(n, (function (e, t) {
                                            a[t] = d.a.utils.toIcx(e)
                                        })), u(a);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    })()()
                }), [e, t]), i
            }
        },
        930: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return u
            })), n.d(t, "c", (function () {
                return s
            })), n.d(t, "b", (function () {
                return d
            }));
            var a = n(17),
                r = n(33),
                c = n(20);

            function o () {
                var e = Object(a.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background-color: #2395aa;\n  border-radius: 100px;\n  color: ", ";\n  cursor: pointer;\n  padding: 4px;\n  outline: none;\n\n  &:hover,\n  &:focus {\n    background-color: #087083;\n    transition: background-color 0.2s ease;\n  }\n\n  &:disabled {\n    cursor: default;\n    pointer-events: none;\n    color: #27264a;\n  }\n"]);
                return o = function () {
                    return e
                }, e
            }

            function i () {
                var e = Object(a.a)(["\n  background: transparent;\n  font-size: 14px;\n  padding: 7px 25px;\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.75);\n  cursor: pointer;\n  transition: color 0.3s ease;\n  user-select: none;\n  line-height: 1.4;\n\n  &:hover {\n    color: rgba(255, 255, 255, 1);\n    transition: color 0.2s ease;\n  }\n\n  &:disabled {\n    cursor: default;\n    pointer-events: none;\n    color: #27264a;\n  }\n"]);
                return i = function () {
                    return e
                }, e
            }

            function l () {
                var e = Object(a.a)(["\n  display: inline-block;\n  border-radius: 10px;\n  padding: 7px 25px;\n  color: #ffffff;\n  text-decoration: none;\n  background-color: ", ";\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  user-select: none;\n  line-height: 1.4;\n\n  &:hover {\n    background-color: #087083;\n    transition: background-color 0.2s ease;\n  }\n\n  &:disabled {\n    background: #27264a;\n    cursor: default;\n    pointer-events: none;\n  }\n"]);
                return l = function () {
                    return e
                }, e
            }
            var u = Object(c.default)(r.Button)(l(), (function (e) {
                return e.theme.colors.primary
            })),
                s = Object(c.default)(r.Button)(i()),
                d = Object(c.default)(r.Button)(o(), (function (e) {
                    return e.theme.colors.bg1
                }))
        },
        931: function (e, t, n) {
            "use strict";
            n.d(t, "h", (function () {
                return c
            })), n.d(t, "d", (function () {
                return o
            })), n.d(t, "e", (function () {
                return i
            })), n.d(t, "b", (function () {
                return l
            })), n.d(t, "f", (function () {
                return u
            })), n.d(t, "a", (function () {
                return s
            })), n.d(t, "g", (function () {
                return d
            })), n.d(t, "c", (function () {
                return f
            }));
            var a = n(9),
                r = n.n(a),
                c = new r.a(0),
                o = new r.a(1),
                i = new r.a(1 / 0),
                l = (new r.a(-1 / 0), new r.a("1000000000000000000"), new r.a("1000000000000"), Math.pow(10, 6), 4),
                u = 5,
                s = 1.5,
                d = .001,
                f = 1
        },
        932: function (e, t, n) {
            "use strict";
            n.d(t, "c", (function () {
                return f
            })), n.d(t, "a", (function () {
                return m
            })), n.d(t, "b", (function () {
                return p
            }));
            var a = n(5),
                r = n.n(a),
                c = n(14),
                o = n(0),
                i = n(172),
                l = n(36),
                u = n(173),
                s = n(297),
                d = n(302);

            function f () {
                return Object(l.d)((function (e) {
                    return e.ratio
                }))
            }

            function m () {
                var e = Object(l.c)();
                return Object(o.useCallback)((function (t) {
                    var n = t.ICXUSDratio,
                        a = t.sICXbnUSDratio,
                        r = t.sICXICXratio,
                        c = t.BALNbnUSDratio;
                    e(Object(d.a)({
                        ICXUSDratio: n,
                        sICXbnUSDratio: a,
                        sICXICXratio: r,
                        BALNbnUSDratio: c
                    }))
                }), [e])
            }
            var b = 3e4;

            function p () {
                var e = m();
                Object(s.a)(Object(c.a)(r.a.mark((function t () {
                    var n, a;
                    return r.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, u.a.Band.getReferenceData({
                                    _base: "ICX",
                                    _quote: "USD"
                                });
                            case 2:
                                n = t.sent, a = i.a.utils.toIcx(n.rate), e({
                                    ICXUSDratio: a
                                });
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), b), Object(s.a)(Object(c.a)(r.a.mark((function t () {
                    var n;
                    return r.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.t0 = i.a.utils, t.next = 3, u.a.Staking.getTodayRate();
                            case 3:
                                t.t1 = t.sent, n = t.t0.toIcx.call(t.t0, t.t1), e({
                                    sICXICXratio: n
                                });
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), b), Object(s.a)(Object(c.a)(r.a.mark((function t () {
                    var n;
                    return r.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.t0 = i.a.utils, t.next = 3, u.a.Dex.getPrice(i.a.utils.POOL_IDS.sICXbnUSD);
                            case 3:
                                t.t1 = t.sent, n = t.t0.toIcx.call(t.t0, t.t1), e({
                                    sICXbnUSDratio: n
                                });
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), b), Object(s.a)(Object(c.a)(r.a.mark((function t () {
                    var n;
                    return r.a.wrap((function (t) {
                        for (; ;) switch (t.prev = t.next) {
                            case 0:
                                return t.t0 = i.a.utils, t.next = 3, u.a.Dex.getPrice(i.a.utils.POOL_IDS.BALNbnUSD);
                            case 3:
                                t.t1 = t.sent, n = t.t0.toIcx.call(t.t0, t.t1), e({
                                    BALNbnUSDratio: n
                                });
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), b)
            }
        },
        933: function (e, t, n) {
            "use strict";
            n.d(t, "c", (function () {
                return E
            })), n.d(t, "b", (function () {
                return h
            })), n.d(t, "a", (function () {
                return j
            }));
            var a = n(51),
                r = n(17),
                c = n(0),
                o = n.n(c),
                i = n(300),
                l = n(998),
                u = n(20),
                s = n(297);

            function d () {
                var e = Object(r.a)(["\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  z-index: -1;\n\n  ::before {\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    z-index: -1;\n\n    content: '';\n    transform: rotate(45deg);\n    background: ", ";\n  }\n\n  &.arrow-top,\n  &.arrow-top-start,\n  &.arrow-top-end {\n    bottom: -6px;\n  }\n\n  &.arrow-bottom,\n  &.arrow-bottom-start,\n  &.arrow-bottom-end {\n    top: -6px;\n  }\n\n  &.arrow-left,\n  &.arrow-left-start,\n  &.arrow-left-end {\n    right: -6px;\n  }\n\n  &.arrow-right,\n  &.arrow-right-start,\n  &.arrow-right-end {\n    left: -6px;\n  }\n"]);
                return d = function () {
                    return e
                }, e
            }

            function f () {
                var e = Object(r.a)(["\n  display: inline-block;\n  line-height: 0;\n"]);
                return f = function () {
                    return e
                }, e
            }

            function m () {
                var e = Object(r.a)(["\n  background: ", ";\n  border: 2px solid ", ";\n  color: ", ";\n  border-radius: 8px;\n  overflow: hidden;\n"]);
                return m = function () {
                    return e
                }, e
            }

            function b () {
                var e = Object(r.a)(["\n  z-index: ", ";\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n"]);
                return b = function () {
                    return e
                }, e
            }
            var p = u.default.div(b(), (function (e) {
                return e.theme.zIndices.tooltip
            }), (function (e) {
                return e.show ? "visible" : "hidden"
            }), (function (e) {
                return e.show ? 1 : 0
            })),
                g = u.default.div(m(), (function (e) {
                    return e.theme.colors.bg4
                }), (function (e) {
                    return e.theme.colors.primary
                }), (function (e) {
                    return e.theme.colors.text1
                })),
                x = u.default.div(f()),
                v = u.default.div(d(), (function (e) {
                    return e.theme.colors.primary
                }));

            function E (e) {
                var t, n, r = e.content,
                    u = e.show,
                    d = e.children,
                    f = e.placement,
                    m = void 0 === f ? "auto" : f,
                    b = Object(c.useState)(null),
                    E = Object(a.a)(b, 2),
                    h = E[0],
                    j = E[1],
                    O = Object(c.useState)(null),
                    w = Object(a.a)(O, 2),
                    y = w[0],
                    C = w[1],
                    I = Object(c.useState)(null),
                    S = Object(a.a)(I, 2),
                    k = S[0],
                    A = S[1],
                    F = Object(l.a)(h, y, {
                        placement: m,
                        strategy: "fixed",
                        modifiers: [{
                            name: "offset",
                            options: {
                                offset: [0, 12]
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: k
                            }
                        }]
                    }),
                    B = F.styles,
                    U = F.update,
                    N = F.attributes,
                    X = Object(c.useCallback)((function () {
                        U && U()
                    }), [U]);
                return Object(s.a)(X, u ? 100 : null), o.a.createElement(o.a.Fragment, null, o.a.createElement(x, {
                    ref: j
                }, d), o.a.createElement(i.b, null, o.a.createElement(p, Object.assign({
                    show: u,
                    ref: C,
                    style: B.popper
                }, N.popper), o.a.createElement(g, null, r), o.a.createElement(v, Object.assign({
                    className: "arrow-".concat(null !== (t = null === (n = N.popper) || void 0 === n ? void 0 : n["data-popper-placement"]) && void 0 !== t ? t : ""),
                    ref: A,
                    style: B.arrow
                }, N.arrow)))))
            }

            function h (e) {
                var t = e.show,
                    n = e.children,
                    r = e.placement,
                    u = void 0 === r ? "auto" : r,
                    d = e.anchorEl,
                    f = Object(c.useState)(null),
                    m = Object(a.a)(f, 2),
                    b = m[0],
                    x = m[1],
                    v = Object(l.a)(d, b, {
                        placement: u,
                        strategy: "fixed",
                        modifiers: [{
                            name: "offset",
                            options: {
                                offset: [0, 2]
                            }
                        }]
                    }),
                    E = v.styles,
                    h = v.update,
                    j = v.attributes,
                    O = Object(c.useCallback)((function () {
                        h && h()
                    }), [h]);
                return Object(s.a)(O, t ? 100 : null), o.a.createElement(i.b, null, o.a.createElement(p, Object.assign({
                    show: t,
                    ref: x,
                    style: E.popper
                }, j.popper), o.a.createElement(g, null, n)))
            }

            function j (e) {
                var t, n, r = e.show,
                    u = e.children,
                    d = e.placement,
                    f = void 0 === d ? "auto" : d,
                    m = e.anchorEl,
                    b = Object(c.useState)(null),
                    x = Object(a.a)(b, 2),
                    E = x[0],
                    h = x[1],
                    j = Object(c.useState)(null),
                    O = Object(a.a)(j, 2),
                    w = O[0],
                    y = O[1],
                    C = o.a.useMemo((function () {
                        return [{
                            name: "offset",
                            options: {
                                offset: [20, 12]
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: w
                            }
                        }]
                    }), [w]),
                    I = Object(l.a)(m, E, {
                        placement: f,
                        strategy: "fixed",
                        modifiers: C
                    }),
                    S = I.styles,
                    k = I.update,
                    A = I.attributes,
                    F = Object(c.useCallback)((function () {
                        k && k()
                    }), [k]);
                return Object(s.a)(F, r ? 100 : null), o.a.createElement(i.b, null, o.a.createElement(p, Object.assign({
                    show: r,
                    ref: h,
                    style: S.popper
                }, A.popper), o.a.createElement(g, null, u), o.a.createElement(v, Object.assign({
                    className: "arrow-".concat(null !== (t = null === (n = A.popper) || void 0 === n ? void 0 : n["data-popper-placement"]) && void 0 !== t ? t : ""),
                    ref: y,
                    style: S.arrow
                }, A.arrow))))
            }
        },
        934: function (e, t, n) {
            "use strict";
            n.d(t, "b", (function () {
                return f
            })), n.d(t, "a", (function () {
                return m
            }));
            var a = n(51),
                r = n(115),
                c = n(17),
                o = n(0),
                i = n.n(o),
                l = n(20),
                u = n(933);

            function s () {
                var e = Object(c.a)(["\n  width: 240px;\n  padding: 12px 1rem;\n  line-height: 150%;\n  font-weight: 400;\n  font-size: 14px;\n  color: ", ";\n"]);
                return s = function () {
                    return e
                }, e
            }
            var d = l.default.div(s(), (function (e) {
                return e.theme.colors.white
            }));

            function f (e) {
                var t = e.text,
                    n = Object(r.a)(e, ["text"]);
                return i.a.createElement(u.c, Object.assign({
                    content: i.a.createElement(d, null, t)
                }, n))
            }

            function m (e) {
                var t = e.children,
                    n = Object(r.a)(e, ["children"]),
                    c = Object(o.useState)(!1),
                    l = Object(a.a)(c, 2),
                    u = l[0],
                    s = l[1],
                    d = Object(o.useCallback)((function () {
                        return s(!0)
                    }), [s]),
                    m = Object(o.useCallback)((function () {
                        return s(!1)
                    }), [s]);
                return i.a.createElement(f, Object.assign({}, n, {
                    show: u
                }), i.a.createElement("div", {
                    onMouseEnter: d,
                    onMouseLeave: m
                }, t))
            }
        },
        936: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return l
            }));
            var a = n(17),
                r = n(0),
                c = n.n(r);

            function o () {
                var e = Object(a.a)(["\n  padding-top: 5px;\n  text-align: center;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  color: white;\n"]);
                return o = function () {
                    return e
                }, e
            }
            var i = n(20).default.p(o());

            function l () {
                return c.a.createElement(i, {
                    className: "label text-center text-white"
                }, "Confirm the transaction on your Ledger.")
            }
        },
        937: function (e, t, n) {
            "use strict";
            n.d(t, "b", (function () {
                return s
            })), n.d(t, "a", (function () {
                return d
            }));
            var a = n(17),
                r = n(33),
                c = n(20);

            function o () {
                var e = Object(a.a)(["\n    padding: 25px;\n  "]);
                return o = function () {
                    return e
                }, e
            }

            function i () {
                var e = Object(a.a)(["\n  border-radius: 10px;\n  padding: 35px;\n  padding: ", ";\n  border-radius: ", ";\n\n  ", "\n"]);
                return i = function () {
                    return e
                }, e
            }

            function l () {
                var e = Object(a.a)(["\n    padding: 25px;\n  "]);
                return l = function () {
                    return e
                }, e
            }

            function u () {
                var e = Object(a.a)(["\n  border-radius: 10px;\n  padding: 35px;\n  padding: ", ";\n  border-radius: ", ";\n\n  ", "\n"]);
                return u = function () {
                    return e
                }, e
            }
            var s = Object(c.default)(r.Flex)(u(), (function (e) {
                return e.padding
            }), (function (e) {
                return e.borderRadius
            }), (function (e) {
                return e.theme.mediaWidth.upToExtraSmall(l())
            })),
                d = Object(c.default)(r.Box)(i(), (function (e) {
                    return e.padding
                }), (function (e) {
                    return e.borderRadius
                }), (function (e) {
                    return e.theme.mediaWidth.upToExtraSmall(o())
                }))
        },
        939: function (e, t, n) {
            "use strict";
            n.d(t, "d", (function () {
                return E
            })), n.d(t, "g", (function () {
                return h
            })), n.d(t, "a", (function () {
                return j
            })), n.d(t, "b", (function () {
                return O
            })), n.d(t, "c", (function () {
                return w
            })), n.d(t, "h", (function () {
                return y
            })), n.d(t, "e", (function () {
                return C
            })), n.d(t, "f", (function () {
                return I
            }));
            var a = n(28),
                r = n(5),
                c = n.n(r),
                o = n(14),
                i = n(0),
                l = n.n(i),
                u = n(9),
                s = n.n(u),
                d = n(172),
                f = n(36),
                m = n(173),
                b = n(931),
                p = n(932),
                g = n(294),
                x = n(929),
                v = n(130);

            function E (e) {
                var t = function () {
                    var e = Object(f.c)();
                    return l.a.useCallback((function (t) {
                        e(Object(v.d)({
                            depositedAmount: t
                        }))
                    }), [e])
                }(),
                    n = Object(g.b)(),
                    a = l.a.useCallback(function () {
                        var e = Object(o.a)(c.a.mark((function e (n) {
                            var a, r;
                            return c.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, m.a.Loans.getAccountPositions(n);
                                    case 2:
                                        a = e.sent, r = a.assets ? d.a.utils.toIcx(a.assets.sICX) : new s.a(0), t(r);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function (t) {
                            return e.apply(this, arguments)
                        }
                    }(), [t]);
                l.a.useEffect((function () {
                    e && a(e)
                }), [a, e, n])
            }

            function h () {
                return Object(f.d)((function (e) {
                    return e.collateral.state
                }))
            }

            function j () {
                var e = Object(f.c)();
                return {
                    onFieldAInput: l.a.useCallback((function (t) {
                        e(Object(v.e)({
                            independentField: v.a.LEFT,
                            typedValue: t,
                            inputType: "text"
                        }))
                    }), [e]),
                    onFieldBInput: l.a.useCallback((function (t) {
                        e(Object(v.e)({
                            independentField: v.a.RIGHT,
                            typedValue: t,
                            inputType: "text"
                        }))
                    }), [e]),
                    onSlide: l.a.useCallback((function (t, n) {
                        e(Object(v.e)({
                            typedValue: t[n],
                            inputType: "slider"
                        }))
                    }), [e]),
                    onAdjust: l.a.useCallback((function (t) {
                        e(t ? Object(v.b)() : Object(v.c)())
                    }), [e])
                }
            }

            function O () {
                return Object(f.d)((function (e) {
                    return e.collateral.depositedAmount
                }))
            }

            function w () {
                var e = O(),
                    t = Object(p.c)();
                return l.a.useMemo((function () {
                    return e.multipliedBy(t.sICXICXratio)
                }), [e, t.sICXICXratio])
            }

            function y () {
                var e = function () {
                    var e = Object(x.b)().ICX;
                    return l.a.useMemo((function () {
                        return s.a.max(e.minus(b.c), new s.a(0))
                    }), [e])
                }(),
                    t = w();
                return l.a.useMemo((function () {
                    return t.plus(e)
                }), [t, e])
            }

            function C () {
                var e, t = h(),
                    n = t.independentField,
                    r = t.typedValue,
                    c = n === v.a.LEFT ? v.a.RIGHT : v.a.LEFT,
                    o = y();
                return (e = {}, Object(a.a)(e, n, new s.a(r || "0")), Object(a.a)(e, c, o.minus(new s.a(r || "0"))), e)[v.a.LEFT]
            }

            function I () {
                var e = C(),
                    t = Object(p.c)();
                return l.a.useMemo((function () {
                    return e.multipliedBy(t.ICXUSDratio)
                }), [e, t.ICXUSDratio])
            }
        },
        940: function (e, t, n) {
            "use strict";
            n.d(t, "g", (function () {
                return y
            })), n.d(t, "f", (function () {
                return C
            })), n.d(t, "b", (function () {
                return I
            })), n.d(t, "a", (function () {
                return S
            })), n.d(t, "e", (function () {
                return k
            })), n.d(t, "d", (function () {
                return A
            })), n.d(t, "c", (function () {
                return F
            }));
            var a = n(5),
                r = n.n(a),
                c = n(14),
                o = n(51),
                i = n(0),
                l = n.n(i),
                u = n(9),
                s = n.n(u),
                d = n(116),
                f = n.n(d),
                m = n(172),
                b = n(42),
                p = n(36),
                g = n(173),
                x = n(295),
                v = n(931),
                E = n(939),
                h = n(942),
                j = n(932),
                O = n(294),
                w = n(303);

            function y () {
                return Object(p.d)((function (e) {
                    return e.reward
                }))
            }

            function C (e) {
                return y()[e]
            }

            function I () {
                var e = l.a.useState({}),
                    t = Object(o.a)(e, 2),
                    n = t[0],
                    a = t[1],
                    i = l.a.useState(new s.a(0)),
                    u = Object(o.a)(i, 2),
                    d = u[0],
                    b = u[1];
                l.a.useEffect((function () {
                    (function () {
                        var e = Object(c.a)(r.a.mark((function e () {
                            var t, n, c, i, l;
                            return r.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Promise.all([g.a.Rewards.getRecipientsSplit(), g.a.Rewards.getEmission()]);
                                    case 2:
                                        t = e.sent, n = Object(o.a)(t, 2), c = n[0], i = n[1], l = {}, f.a.forOwn(c, (function (e, t) {
                                            l[t] = m.a.utils.toIcx(e)
                                        })), a(l), b(m.a.utils.toIcx(i));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), []);
                var v = function () {
                    var e = Object(p.c)();
                    return l.a.useCallback((function (t, n) {
                        e(Object(w.a)({
                            poolId: t,
                            reward: n
                        }))
                    }), [e])
                }();
                l.a.useEffect((function () {
                    x.a.forEach((function (e) {
                        var t = n["".concat(e.baseCurrencyKey, "/").concat(e.quoteCurrencyKey)];
                        v(e.poolId.toString(), d.times(t))
                    }));
                    var e = n.Loans;
                    v("Loans", d.times(e))
                }), [n, d, v])
            }
            var S = function () {
                var e = Object(E.e)(),
                    t = Object(h.g)(),
                    n = Object(j.c)();
                return l.a.useMemo((function () {
                    return t.isZero() ? v.e : e.times(n.ICXUSDratio).dividedBy(t).multipliedBy(100)
                }), [e, t, n.ICXUSDratio])
            },
                k = function () {
                    var e = Object(h.g)(),
                        t = S();
                    return !(!e.isGreaterThanOrEqualTo(new s.a(50)) || !t.isGreaterThanOrEqualTo(new s.a(100 * v.f)))
                },
                A = function () {
                    var e = Object(b.d)().account,
                        t = l.a.useState(!1),
                        n = Object(o.a)(t, 2),
                        a = n[0],
                        i = n[1];
                    return l.a.useEffect((function () {
                        (function () {
                            var t = Object(c.a)(r.a.mark((function t () {
                                return r.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!e) {
                                                t.next = 16;
                                                break
                                            }
                                            return t.t0 = Promise, t.next = 4, g.a.Dex.isEarningRewards(e, m.a.utils.POOL_IDS.BALNbnUSD);
                                        case 4:
                                            return t.t1 = t.sent, t.next = 7, g.a.Dex.isEarningRewards(e, m.a.utils.POOL_IDS.sICXbnUSD);
                                        case 7:
                                            return t.t2 = t.sent, t.next = 10, g.a.Dex.isEarningRewards(e, m.a.utils.POOL_IDS.sICXICX);
                                        case 10:
                                            return t.t3 = t.sent, t.t4 = [t.t1, t.t2, t.t3], t.next = 14, t.t0.all.call(t.t0, t.t4);
                                        case 14:
                                            t.sent.find((function (e) {
                                                return Number(e)
                                            })) ? i(!0) : i(!1);
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function () {
                                return t.apply(this, arguments)
                            }
                        })()()
                    }), [e]), a
                },
                F = function () {
                    var e = Object(b.d)().account,
                        t = Object(O.b)(),
                        n = l.a.useState(!1),
                        a = Object(o.a)(n, 2),
                        i = a[0],
                        u = a[1];
                    return l.a.useEffect((function () {
                        (function () {
                            var t = Object(c.a)(r.a.mark((function t () {
                                var n, a, c, i;
                                return r.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!e) {
                                                t.next = 8;
                                                break
                                            }
                                            return t.next = 3, Promise.all([g.a.Dex.isEarningRewards(e, m.a.utils.POOL_IDS.BALNbnUSD), g.a.BALN.detailsBalanceOf(e)]);
                                        case 3:
                                            n = t.sent, a = Object(o.a)(n, 2), c = a[0], i = a[1], Number(c) || Number(i["Staked balance"]) ? u(!0) : u(!1);
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function () {
                                return t.apply(this, arguments)
                            }
                        })()()
                    }), [e, t]), i
                }
        },
        941: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return k
            }));
            var a = n(51),
                r = n(17),
                c = n(0),
                o = n.n(c),
                i = n(938),
                l = n(33),
                u = n(20),
                s = n(956),
                d = n(955),
                f = n(933),
                m = n(946),
                b = n(295),
                p = n(929),
                g = n(174);

            function x () {
                var e = Object(r.a)(["\n  width: 10px;\n"]);
                return x = function () {
                    return e
                }, e
            }

            function v () {
                var e = Object(r.a)(["\n  flex: 1;\n  width: 100%;\n  height: 43px;\n  text-align: right;\n  border-radius: 0 10px 10px 0;\n  border: ", ";\n  background-color: ", ";\n  color: #ffffff;\n  padding: 7px 20px;\n  outline: none;\n  transition: border 0.3s ease;\n  overflow: visible;\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n  :hover,\n  :focus {\n    border: 2px solid #2ca9b7;\n  }\n"]);
                return v = function () {
                    return e
                }, e
            }

            function E () {
                var e = Object(r.a)(["\n  line-height: 1.5;\n  margin-right: 8px;\n  font-size: 14px;\n  font-weight: bold;\n"]);
                return E = function () {
                    return e
                }, e
            }

            function h () {
                var e = Object(r.a)(["\n  border: ", ";\n  background-color: ", ";\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n  display: flex;\n  align-items: center;\n  width: 128px;\n  height: 43px;\n  padding: 4px 15px;\n  color: #ffffff;\n  border-radius: 10px 0 0 10px;\n  transition: border 0.3s ease, background-color 0.3s ease, color 0.3s ease;\n  cursor: pointer;\n  pointer-events: ", ";\n  :hover,\n  :focus {\n    border: 2px solid #2ca9b7;\n  }\n"]);
                return h = function () {
                    return e
                }, e
            }

            function j () {
                var e = Object(r.a)(["\n  display: inline-flex;\n  width: 100%;\n"]);
                return j = function () {
                    return e
                }, e
            }
            var O = u.default.div(j()),
                w = u.default.button(h(), (function (e) {
                    var t = e.theme,
                        n = e.bg,
                        a = void 0 === n ? "bg2" : n;
                    return "2px solid ".concat(t.colors[a])
                }), (function (e) {
                    var t = e.theme,
                        n = e.bg,
                        a = void 0 === n ? "bg2" : n;
                    return "".concat(t.colors[a])
                }), (function (e) {
                    return e.disabled ? "none" : "auto"
                })),
                y = u.default.span(E()),
                C = u.default.input(v(), (function (e) {
                    var t = e.theme,
                        n = e.bg,
                        a = void 0 === n ? "bg2" : n;
                    return "2px solid ".concat(t.colors[a])
                }), (function (e) {
                    var t = e.theme,
                        n = e.bg,
                        a = void 0 === n ? "bg2" : n;
                    return "".concat(t.colors[a])
                })),
                I = Object(u.default)(m.a)(x()),
                S = RegExp("^\\d*(?:\\\\[.])?\\d*$");

            function k (e) {
                var t, n = e.value,
                    r = e.onUserInput,
                    c = (e.onMax, e.showMaxButton, e.label, e.onCurrencySelect),
                    u = e.currency,
                    m = (e.hideBalance, e.hideInput, e.otherCurrency),
                    x = e.currencyList,
                    v = void 0 === x ? b.b : x,
                    E = (e.id, e.showCommonBases, e.customBalanceText, e.bg),
                    h = void 0 === E ? "bg2" : E,
                    j = o.a.useState(!1),
                    k = Object(a.a)(j, 2),
                    A = k[0],
                    F = k[1],
                    B = o.a.useRef(null),
                    U = o.a.useState(null === B || void 0 === B || null === (t = B.current) || void 0 === t ? void 0 : t.clientWidth),
                    N = Object(a.a)(U, 2),
                    X = N[0],
                    R = N[1];
                o.a.useEffect((function () {
                    function e () {
                        var e, t;
                        R(null !== (e = null === B || void 0 === B || null === (t = B.current) || void 0 === t ? void 0 : t.clientWidth) && void 0 !== e ? e : X)
                    }
                    return e(), window.addEventListener("resize", e),
                        function () {
                            return window.removeEventListener("resize", e)
                        }
                }), [X]);
                var L = o.a.useMemo((function () {
                    return m ? Object(b.f)(m) : v
                }), [m, v]);
                o.a.useEffect((function () {
                    var e = m ? Object(b.f)(m) : v; - 1 === (null === e || void 0 === e ? void 0 : e.indexOf(null === u || void 0 === u ? void 0 : u.symbol)) && c && c(b.c[e[0].toLowerCase()])
                }), [u, m, c, v]);
                var D = Object(p.b)();
                return o.a.createElement(O, {
                    ref: B
                }, o.a.createElement(i.a, {
                    onClickAway: function () {
                        return F(!1)
                    }
                }, o.a.createElement(w, {
                    onClick: function () {
                        F(!A)
                    },
                    bg: h,
                    disabled: !c
                }, u ? o.a.createElement(s.a, {
                    currency: u,
                    style: {
                        marginRight: 8
                    }
                }) : null, u ? o.a.createElement(y, {
                    className: "token-symbol-container"
                }, u.symbol) : null, c && o.a.createElement(I, {
                    selected: !!u
                }), c && o.a.createElement(f.b, {
                    show: A,
                    anchorEl: B.current,
                    placement: "bottom"
                }, o.a.createElement(d.d, {
                    style: {
                        width: X
                    }
                }, o.a.createElement(d.a, null, o.a.createElement(d.c, null, "Asset"), o.a.createElement(d.c, {
                    textAlign: "right"
                }, "Wallet")), L.map((function (e) {
                    var t, n;
                    return o.a.createElement(d.e, {
                        key: e,
                        onClick: (n = b.c[e.toLowerCase()], function (e) {
                            c && c(n), F(!1)
                        })
                    }, o.a.createElement(l.Flex, null, o.a.createElement(s.a, {
                        currency: b.c[e.toLowerCase()],
                        style: {
                            marginRight: "8px"
                        }
                    }), o.a.createElement(d.b, {
                        variant: "p",
                        fontWeight: "bold"
                    }, e)), o.a.createElement(d.b, {
                        variant: "p",
                        textAlign: "right"
                    }, null === (t = D[e]) || void 0 === t ? void 0 : t.dp(2).toFormat(), " ", e))
                })))))), o.a.createElement(C, {
                    value: n,
                    onChange: function (e) {
                        var t;
                        ("" === (t = e.target.value.replace(/,/g, ".")) || S.test(Object(g.a)(t))) && r(t)
                    },
                    inputMode: "decimal",
                    title: "Token Amount",
                    autoComplete: "off",
                    autoCorrect: "off",
                    type: "text",
                    pattern: "^[0-9]*[.,]?[0-9]*$",
                    minLength: 1,
                    maxLength: 79,
                    spellCheck: "false",
                    bg: h
                }))
            }
        },
        942: function (e, t, n) {
            "use strict";
            n.d(t, "c", (function () {
                return w
            })), n.d(t, "k", (function () {
                return I
            })), n.d(t, "j", (function () {
                return S
            })), n.d(t, "e", (function () {
                return k
            })), n.d(t, "f", (function () {
                return A
            })), n.d(t, "h", (function () {
                return F
            })), n.d(t, "b", (function () {
                return B
            })), n.d(t, "i", (function () {
                return U
            })), n.d(t, "g", (function () {
                return N
            })), n.d(t, "m", (function () {
                return X
            })), n.d(t, "d", (function () {
                return R
            })), n.d(t, "l", (function () {
                return L
            })), n.d(t, "a", (function () {
                return D
            }));
            var a = n(28),
                r = n(51),
                c = n(0),
                o = n.n(c),
                i = n(950),
                l = n.n(i),
                u = n(9),
                s = n.n(u),
                d = n(172),
                f = n(42),
                m = n(36),
                b = n(173),
                p = n(931),
                g = n(939),
                x = n(932),
                v = n(940),
                E = n(294),
                h = n(929),
                j = n(174),
                O = n(83);

            function w () {
                return Object(m.d)((function (e) {
                    return e.loan.borrowedAmount
                }))
            }

            function y () {
                return Object(m.d)((function (e) {
                    return e.loan.badDebt
                }))
            }

            function C () {
                return Object(m.d)((function (e) {
                    return e.loan.totalSupply
                }))
            }

            function I () {
                return Object(m.d)((function (e) {
                    return e.loan.totalRepaid
                }))
            }

            function S () {
                return Object(m.d)((function (e) {
                    return e.loan.totalCollateralSold
                }))
            }

            function k (e) {
                var t = function () {
                    var e = Object(m.c)();
                    return o.a.useCallback((function (t) {
                        e(Object(O.e)({
                            borrowedAmount: t
                        }))
                    }), [e])
                }(),
                    n = function () {
                        var e = Object(m.c)();
                        return o.a.useCallback((function (t) {
                            e(Object(O.d)({
                                badDebt: t
                            }))
                        }), [e])
                    }(),
                    a = function () {
                        var e = Object(m.c)();
                        return o.a.useCallback((function (t) {
                            e(Object(O.h)({
                                totalSupply: t
                            }))
                        }), [e])
                    }(),
                    c = Object(E.b)(),
                    i = o.a.useCallback((function (e) {
                        e && Promise.all([b.a.Loans.getAvailableAssets(), b.a.bnUSD.totalSupply(), b.a.Loans.getAccountPositions(e)]).then((function (e) {
                            var c = Object(r.a)(e, 3),
                                o = c[0],
                                i = c[1],
                                l = c[2],
                                u = o.bnUSD ? d.a.utils.toIcx(o.bnUSD.bad_debt || "0") : new s.a(0),
                                f = d.a.utils.toIcx(i),
                                m = l.assets ? d.a.utils.toIcx(l.assets.bnUSD || "0") : new s.a(0);
                            n(u), a(f), t(m)
                        }))
                    }), [n, a, t]);
                o.a.useEffect((function () {
                    e && i(e)
                }), [i, e, c])
            }

            function A () {
                var e = Object(f.d)().account,
                    t = Object(m.c)();
                return o.a.useCallback((function (n) {
                    if (n) {
                        var a, r;
                        n = "day" === (null === (a = n) || void 0 === a ? void 0 : a.toLowerCase()) ? "yesterday" : "week" === (null === (r = n) || void 0 === r ? void 0 : r.toLowerCase()) ? "last-week" : "last-month";
                        try {
                            l.a.get("".concat(Object(j.c)(), "/api/v1/loan-repaid-sum?address=").concat(e, "&symbol=bnUSD&date-preset=").concat(n)).then((function (e) {
                                var n = e.data.loan_repaid_sum;
                                t(Object(O.g)({
                                    totalRepaid: d.a.utils.toIcx(new s.a(n))
                                }))
                            })), l.a.get("".concat(Object(j.c)(), "/api/v1/sold-collateral-sum?address=").concat(e, "&symbol=bnUSD&date-preset=").concat(n)).then((function (e) {
                                var n = e.data.loan_repaid_sum;
                                t(Object(O.f)({
                                    totalCollateralSold: d.a.utils.toIcx(new s.a(n))
                                }))
                            }))
                        } catch (c) {
                            console.error(c)
                        }
                    } else t(Object(O.c)())
                }), [t, e])
            }

            function F () {
                return Object(m.d)((function (e) {
                    return e.loan.state
                }))
            }

            function B () {
                var e = Object(m.c)();
                return {
                    onFieldAInput: o.a.useCallback((function (t) {
                        e(Object(O.i)({
                            independentField: O.a.LEFT,
                            typedValue: t,
                            inputType: "text"
                        }))
                    }), [e]),
                    onFieldBInput: o.a.useCallback((function (t) {
                        e(Object(O.i)({
                            independentField: O.a.RIGHT,
                            typedValue: t,
                            inputType: "text"
                        }))
                    }), [e]),
                    onSlide: o.a.useCallback((function (t, n) {
                        e(Object(O.i)({
                            typedValue: t[n],
                            inputType: "slider"
                        }))
                    }), [e]),
                    onAdjust: o.a.useCallback((function (t) {
                        e(t ? Object(O.b)() : Object(O.c)())
                    }), [e])
                }
            }

            function U () {
                var e = Object(x.c)();
                return Object(g.e)().multipliedBy(e.ICXUSDratio).div(p.b)
            }

            function N () {
                var e, t = F(),
                    n = t.independentField,
                    r = t.typedValue,
                    c = n === O.a.LEFT ? O.a.RIGHT : O.a.LEFT,
                    o = U();
                return (e = {}, Object(a.a)(e, n, new s.a(r || "0")), Object(a.a)(e, c, o.minus(new s.a(r || "0"))), e)[O.a.LEFT]
            }

            function X () {
                var e = Object(x.c)(),
                    t = N();
                return o.a.useMemo((function () {
                    var n = e.ICXUSDratio.isZero() ? new s.a(1) : e.ICXUSDratio;
                    return t.multipliedBy(p.b).div(n)
                }), [t, e.ICXUSDratio])
            }

            function R () {
                var e = N(),
                    t = y(),
                    n = C();
                return o.a.useMemo((function () {
                    return e.div(n.minus(t)).multipliedBy(100)
                }), [e, t, n])
            }

            function L () {
                var e = Object(h.b)().bnUSD,
                    t = w();
                return o.a.useMemo((function () {
                    return t.isGreaterThan(e) ? t.minus(e).plus(.1) : p.h
                }), [t, e])
            }

            function D () {
                var e = Object(v.g)(),
                    t = o.a.useMemo((function () {
                        return e.Loans || p.h
                    }), [e]),
                    n = Object(x.c)(),
                    a = function () {
                        var e = y(),
                            t = C();
                        return o.a.useMemo((function () {
                            return t.minus(e)
                        }), [t, e])
                    }();
                return o.a.useMemo((function () {
                    return a.isGreaterThan(p.h) ? t.times(365).times(n.BALNbnUSDratio).div(a) : void 0
                }), [t, n.BALNbnUSDratio, a])
            }
        },
        943: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return f
            }));
            var a = n(17),
                r = n(0),
                c = n.n(r),
                o = n(20),
                i = n.p + "static/media/balanced-logo.8d12c8b0.png",
                l = n(934);

            function u () {
                var e = Object(a.a)(["\n    width: 75px;\n  "]);
                return u = function () {
                    return e
                }, e
            }

            function s () {
                var e = Object(a.a)(["\n  width: 100px;\n  cursor: pointer;\n\n  ", "\n"]);
                return s = function () {
                    return e
                }, e
            }
            var d = o.default.img(s(), (function (e) {
                return e.theme.mediaWidth.upToSmall(u())
            }));

            function f (e) {
                return c.a.createElement("div", e, c.a.createElement("a", {
                    href: "https://balanced.network"
                }, c.a.createElement(l.a, {
                    text: "Back to the Balanced website",
                    placement: "right"
                }, c.a.createElement(d, {
                    src: i,
                    alt: "Balanced logo"
                }))))
            }
        },
        944: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return l
            }));
            var a = n(0);

            function r () {
                return (r = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c (e, t) {
                if (null == e) return {};
                var n, a, r = function (e, t) {
                    if (null == e) return {};
                    var n, a, r = {},
                        c = Object.keys(e);
                    for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            var o = a.createElement("path", {
                d: "M16 8c0 4.389-3.611 8-8 8-4.389 0-8-3.611-8-8 0-4.389 3.611-8 8-8 4.389 0 8 3.611 8 8zM8 5c-.357 0-.688.191-.867.5a1 1 0 11-1.731-1A3.003 3.003 0 018 3c1.646 0 3 1.354 3 3a3.007 3.007 0 01-2 2.83V9c0 .549-.451 1-1 1-.549 0-1-.451-1-1V8c0-.549.451-1 1-1 .549 0 1-.451 1-1 0-.549-.451-1-1-1zm0 8c.549 0 1-.451 1-1 0-.549-.451-1-1-1-.549 0-1 .451-1 1 0 .549.451 1 1 1z",
                fill: "currentcolor"
            });

            function i (e, t) {
                var n = e.title,
                    i = e.titleId,
                    l = c(e, ["title", "titleId"]);
                return a.createElement("svg", r({
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                    ref: t,
                    "aria-labelledby": i
                }, l), n ? a.createElement("title", {
                    id: i
                }, n) : null, o)
            }
            var l = a.forwardRef(i);
            n.p
        },
        945: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return p
            })), n.d(t, "d", (function () {
                return g
            })), n.d(t, "b", (function () {
                return x
            })), n.d(t, "c", (function () {
                return v
            }));
            var a = n(51),
                r = n(115),
                c = n(17),
                o = n(0),
                i = n.n(o),
                l = n(938),
                u = n(20),
                s = n(933),
                d = n(946);

            function f () {
                var e = Object(c.a)(["\n  color: inherit;\n  font-size: inherit;\n  text-decoration: none;\n  background: transparent;\n  display: inline-block;\n  position: relative;\n  padding-bottom: 3px;\n  margin-bottom: -9px;\n  user-select: none;\n  word-break: normal;\n\n  &:after {\n    content: '';\n    display: block;\n    width: 0px;\n    height: 1px;\n    margin-top: 3px;\n    background: transparent;\n    border-radius: 3px;\n    transition: width 0.3s ease, background-color 0.3s ease;\n  }\n\n  &:hover:after {\n    width: 100%;\n    background: #2fccdc;\n  }\n"]);
                return f = function () {
                    return e
                }, e
            }

            function m () {
                var e = Object(c.a)(["\n  &:hover {\n    cursor: pointer;\n  }\n  color: #2fccdc;\n  font-size: 14px;\n"]);
                return m = function () {
                    return e
                }, e
            }

            function b () {
                var e = Object(c.a)(["\n  margin-left: 5px;\n  margin-top: -3px;\n  width: 10px;\n"]);
                return b = function () {
                    return e
                }, e
            }
            var p = Object(u.default)(d.a)(b()),
                g = u.default.span(m()),
                x = u.default.span(f()),
                v = function (e) {
                    var t = e.arrowRef,
                        n = e.text,
                        a = Object(r.a)(e, ["arrowRef", "text"]);
                    return i.a.createElement(g, a, i.a.createElement(x, null, n), i.a.createElement(p, {
                        ref: t
                    }))
                };
            t.e = function (e) {
                var t = e.text,
                    n = e.children,
                    c = Object(r.a)(e, ["text", "children"]),
                    o = i.a.useState(null),
                    u = Object(a.a)(o, 2),
                    d = u[0],
                    f = u[1],
                    m = i.a.useRef(null);
                return i.a.createElement(l.a, {
                    onClickAway: function () {
                        f(null)
                    }
                }, i.a.createElement("div", null, i.a.createElement(v, Object.assign({
                    text: t,
                    onClick: function (e) {
                        f(d ? null : m.current)
                    },
                    arrowRef: m
                }, c)), i.a.createElement(s.a, {
                    show: Boolean(d),
                    anchorEl: d,
                    placement: "bottom-end"
                }, n)))
            }
        },
        946: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return l
            }));
            var a = n(0);

            function r () {
                return (r = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c (e, t) {
                if (null == e) return {};
                var n, a, r = function (e, t) {
                    if (null == e) return {};
                    var n, a, r = {},
                        c = Object.keys(e);
                    for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            var o = a.createElement("path", {
                d: "M4.87 6.5L0 0h9.75L4.87 6.5z",
                fill: "#2fccdc"
            });

            function i (e, t) {
                var n = e.title,
                    i = e.titleId,
                    l = c(e, ["title", "titleId"]);
                return a.createElement("svg", r({
                    viewBox: "0 0 10 7",
                    xmlns: "http://www.w3.org/2000/svg",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                    ref: t,
                    "aria-labelledby": i
                }, l), n ? a.createElement("title", {
                    id: i
                }, n) : null, o)
            }
            var l = a.forwardRef(i);
            n.p
        },
        947: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return Re
            }));
            var a = n(17),
                r = n(0),
                c = n.n(r),
                o = n(1003),
                i = n(33),
                l = n(20),
                u = n(301);

            function s () {
                return (s = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function d (e, t) {
                if (null == e) return {};
                var n, a, r = function (e, t) {
                    if (null == e) return {};
                    var n, a, r = {},
                        c = Object.keys(e);
                    for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            var f = r.createElement("path", {
                d: "M33.293 15.645a.708.708 0 01-.466-.175L17.002 1.648 1.177 15.47a.704.704 0 01-.469.178A.711.711 0 010 14.94c0-.206.089-.402.245-.536L16.535.174a.712.712 0 01.933 0l16.29 14.23a.707.707 0 01-.465 1.241z",
                fill: "currentcolor"
            }),
                m = r.createElement("path", {
                    d: "M17.002 1.484a.704.704 0 01-.696-.7c0-.384.316-.7.7-.7a.699.699 0 11-.004 1.4zM21.253 31.223h-.002a.71.71 0 01-.707-.707v-9.915a.713.713 0 00-.708-.708h-5.667a.712.712 0 00-.707.708v9.914c0 .389-.32.709-.709.709a.712.712 0 01-.709-.709v-9.914a2.137 2.137 0 012.125-2.124h5.667a2.137 2.137 0 012.125 2.124v9.914c0 .388-.32.708-.708.708z",
                    fill: "currentcolor"
                }),
                b = r.createElement("path", {
                    d: "M28.336 31.223H5.67a2.139 2.139 0 01-2.125-2.125V15.645c0-.388.32-.708.708-.708.388 0 .708.32.708.708v13.453c.001.389.32.708.709.709h22.666a.713.713 0 00.707-.709V15.645a.712.712 0 01.709-.682c.378 0 .694.303.708.682v13.453a2.137 2.137 0 01-2.124 2.125z",
                    fill: "currentcolor"
                }),
                p = r.createElement("path", {
                    d: "M17.002 15.055a3.676 3.676 0 01-3.657-3.658 3.675 3.675 0 013.658-3.658 3.675 3.675 0 013.658 3.658 3.68 3.68 0 01-3.659 3.658zm0-5.9a2.254 2.254 0 00-2.243 2.243 2.254 2.254 0 002.243 2.243 2.254 2.254 0 002.243-2.243 2.256 2.256 0 00-2.243-2.244v.001zM29.043 11.397a.71.71 0 01-.707-.707V5.732h-2.125v2.124a.712.712 0 01-.708.682.712.712 0 01-.709-.682V5.732a1.424 1.424 0 011.417-1.416h2.125a1.424 1.424 0 011.416 1.416v4.957c0 .388-.32.708-.708.708h-.001z",
                    fill: "currentcolor"
                });

            function g (e, t) {
                var n = e.title,
                    a = e.titleId,
                    c = d(e, ["title", "titleId"]);
                return r.createElement("svg", s({
                    viewBox: "0 0 34 32",
                    xmlns: "http://www.w3.org/2000/svg",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                    ref: t,
                    "aria-labelledby": a
                }, c), n ? r.createElement("title", {
                    id: a
                }, n) : null, f, m, b, p)
            }
            var x = r.forwardRef(g);
            n.p;

            function v () {
                return (v = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function E (e, t) {
                if (null == e) return {};
                var n, a, r = function (e, t) {
                    if (null == e) return {};
                    var n, a, r = {},
                        c = Object.keys(e);
                    for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            var h = r.createElement("path", {
                d: "M36.199 29.339H.805A.808.808 0 010 28.534c0-.441.364-.804.805-.804h35.394c.44 0 .805.363.805.804a.809.809 0 01-.805.805zM36.199 19.308c-3.53 0-5.122-4.777-6.662-9.4-1.36-4.08-2.768-8.3-5.136-8.3-2.37 0-3.777 4.218-5.14 8.3-1.54 4.62-3.13 9.4-6.66 9.4-3.53 0-5.12-4.777-6.66-9.4-1.359-4.08-2.763-8.3-5.131-8.3A.808.808 0 01.005.804C.005.363.37 0 .81 0c3.527 0 5.118 4.777 6.656 9.4 1.361 4.08 2.767 8.3 5.135 8.3s3.776-4.217 5.137-8.3C19.278 4.779 20.87 0 24.4 0c3.53 0 5.12 4.777 6.66 9.4 1.36 4.08 2.769 8.3 5.138 8.3.44 0 .804.363.804.804a.808.808 0 01-.804.804z",
                fill: "currrentcolor"
            }),
                j = r.createElement("path", {
                    d: "M18.499 15.93c-4.87 0-7.24-3.791-9.53-7.455-2.154-3.446-4.187-6.7-8.164-6.7A.808.808 0 010 .97C0 .529.364.166.805.166c4.87 0 7.237 3.791 9.527 7.456 2.156 3.445 4.19 6.7 8.167 6.7 3.977 0 6.011-3.255 8.167-6.7C28.955 3.957 31.325.166 36.194.166c.44 0 .805.363.805.804a.809.809 0 01-.805.805c-3.978 0-6.012 3.254-8.166 6.7-2.29 3.664-4.658 7.455-9.53 7.455zM1.617 28.535h-.008a.804.804 0 01-.8-.8v-.805c0-.441.363-.804.804-.804.44 0 .804.363.804.804v.805c0 .439-.361.8-.8.8zM6.442 28.535h-.009a.804.804 0 01-.8-.8v-.805c0-.441.364-.804.804-.804.442 0 .805.363.805.804v.805c0 .439-.362.8-.8.8zM11.264 28.535h-.004a.804.804 0 01-.8-.8v-.805c0-.441.362-.804.804-.804.442 0 .805.363.805.804v.8a.808.808 0 01-.805.805zM16.096 28.535h-.01a.804.804 0 01-.8-.8v-.805c0-.441.363-.804.805-.804.442 0 .805.363.805.804v.805c0 .439-.362.8-.8.8zM20.92 28.535h-.007a.804.804 0 01-.8-.8v-.805c0-.441.363-.804.804-.804.44 0 .804.363.804.804v.805c0 .439-.361.8-.8.8zM25.742 28.535h-.008a.804.804 0 01-.8-.8v-.805c0-.441.363-.804.804-.804.44 0 .804.363.804.804v.805c0 .439-.361.8-.8.8zM30.572 28.535h-.008a.804.804 0 01-.8-.8v-.805c0-.441.363-.804.805-.804.44 0 .804.363.804.804v.805c0 .439-.361.8-.8.8zM35.394 28.535h-.005a.808.808 0 01-.804-.805v-.8c0-.441.362-.804.804-.804.442 0 .805.363.805.804v.805c0 .439-.362.8-.8.8z",
                    fill: "currrentcolor"
                });

            function O (e, t) {
                var n = e.title,
                    a = e.titleId,
                    c = E(e, ["title", "titleId"]);
                return r.createElement("svg", v({
                    viewBox: "0 0 38 30",
                    xmlns: "http://www.w3.org/2000/svg",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                    ref: t,
                    "aria-labelledby": a
                }, c), n ? r.createElement("title", {
                    id: a
                }, n) : null, h, j)
            }
            var w = r.forwardRef(O);
            n.p;

            function y () {
                var e = Object(a.a)(["\n    width: 100px;\n    padding: 5px;\n  "]);
                return y = function () {
                    return e
                }, e
            }

            function C () {
                var e = Object(a.a)(["\n  display: block;\n  margin-left: 50%;\n  transform: translate(-50%);\n  padding: 15px;\n  width: 114px;\n  border-radius: 20px;\n  color: #8695a6;\n  text-decoration: none;\n  text-align: center;\n  transition: background-color 0.3s ease, color 0.3s ease;\n  font-size: 14px;\n\n  &.", " {\n    color: ", ";\n    background-color: ", ";\n    opacity: 1;\n  }\n\n  :hover,\n  :focus {\n    color: ", ";\n    background-color: ", ";\n    opacity: 1;\n  }\n\n  ", "\n\n  > svg {\n    margin-bottom: 5px;\n  }\n"]);
                return C = function () {
                    return e
                }, e
            }

            function I () {
                var e = Object(a.a)(["\n    display: inline-block;\n    margin-bottom: 0;\n    margin-right: 3px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  "]);
                return I = function () {
                    return e
                }, e
            }

            function S () {
                var e = Object(a.a)(["\n  &::before {\n    content: '';\n  }\n\n  margin-bottom: 15px;\n  margin-right: 0;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  ", "\n"]);
                return S = function () {
                    return e
                }, e
            }

            function k () {
                var e = Object(a.a)(["\n  width: 100%;\n  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.068), 0 6.7px 5.3px rgba(0, 0, 0, 0.096), 0 12.5px 10px rgba(0, 0, 0, 0.12),\n    0 22.3px 17.9px rgba(0, 0, 0, 0.144), 0 41.8px 33.4px rgba(0, 0, 0, 0.172), 0 100px 80px rgba(0, 0, 0, 0.24);\n  border-radius: 20px;\n  padding: 0;\n  margin: 0;\n  background-color: ", ";\n"]);
                return k = function () {
                    return e
                }, e
            }

            function A () {
                var e = Object(a.a)(["\n    width: initial;\n  "]);
                return A = function () {
                    return e
                }, e
            }

            function F () {
                var e = Object(a.a)(["\n  display: inline-block;\n  width: 100px;\n\n  ", "\n"]);
                return F = function () {
                    return e
                }, e
            }
            var B = l.default.nav(F(), (function (e) {
                return e.theme.mediaWidth.upToMedium(A())
            })),
                U = l.default.ul(k(), (function (e) {
                    return e.theme.colors.bg2
                })),
                N = l.default.li(S(), (function (e) {
                    return e.theme.mediaWidth.upToMedium(I())
                })),
                X = "ACTIVE",
                R = Object(l.default)(u.b).attrs({
                    activeClassName: X
                })(C(), X, (function (e) {
                    return e.theme.colors.bg1
                }), (function (e) {
                    return e.theme.colors.primary
                }), (function (e) {
                    return e.theme.colors.bg1
                }), (function (e) {
                    return e.theme.colors.primary
                }), (function (e) {
                    return e.theme.mediaWidth.upToMedium(y())
                })),
                L = c.a.memo((function () {
                    return c.a.createElement(B, null, c.a.createElement(U, null, c.a.createElement(N, null, c.a.createElement(R, {
                        exact: !0,
                        to: "/"
                    }, c.a.createElement(x, {
                        width: "35",
                        height: "33"
                    }), c.a.createElement(i.Text, null, "Home"))), c.a.createElement(N, null, c.a.createElement(R, {
                        exact: !0,
                        to: "/trade"
                    }, c.a.createElement(w, {
                        width: "35",
                        height: "33"
                    }), c.a.createElement(i.Text, null, "Trade")))))
                })),
                D = n(5),
                M = n.n(D),
                T = n(14),
                z = n(51),
                P = n(28),
                W = n(42),
                Y = n(938),
                H = n(930),
                K = n(298),
                Z = n(943),
                V = n(933),
                G = n(934),
                q = n(52);

            function Q () {
                return (Q = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function J (e, t) {
                if (null == e) return {};
                var n, a, r = function (e, t) {
                    if (null == e) return {};
                    var n, a, r = {},
                        c = Object.keys(e);
                    for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < c.length; a++) n = c[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }
            var $ = r.createElement("g", {
                fill: "currentcolor",
                fillRule: "nonzero"
            }, r.createElement("path", {
                d: "M41 42.963H3c-1.7 0-3-1.3-3-3v-30.4c0-1.4 1-2.6 2.4-2.9l31-6.6c.9-.2 1.8.1 2.5.6.7.6 1.1 1.4 1.1 2.3v5.1c0 .6-.4 1-1 1s-1-.4-1-1v-5.1c0-.4-.2-.7-.4-.8-.1-.1-.4-.3-.8-.2l-31 6.6c-.5.1-.8.5-.8 1v30.4c0 .6.4 1 1 1h38c.6 0 1-.4 1-1v-10c0-.6.4-1 1-1s1 .4 1 1v10c0 1.7-1.3 3-3 3z"
            }), r.createElement("path", {
                d: "M43 20.963c-.6 0-1-.4-1-1v-8.9c0-.6-.4-1-1-1H2c-.6 0-1-.4-1-1s.4-1 1-1h39c1.7 0 3 1.3 3 3v8.9c0 .6-.4 1-1 1z"
            }), r.createElement("path", {
                d: "M43 30.963H31c-1.7 0-3-1.3-3-3v-6c0-1.7 1.3-3 3-3h12c1.7 0 3 1.3 3 3v6c0 1.7-1.3 3-3 3zm-12-10c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1H31z"
            }), r.createElement("path", {
                d: "M35 27.963c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z"
            }));

            function _ (e, t) {
                var n = e.title,
                    a = e.titleId,
                    c = J(e, ["title", "titleId"]);
                return r.createElement("svg", Q({
                    viewBox: "0 0 46 43",
                    xmlns: "http://www.w3.org/2000/svg",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                    width: 27,
                    height: 26,
                    ref: t,
                    "aria-labelledby": a
                }, c), n ? r.createElement("title", {
                    id: a
                }, n) : null, $)
            }
            var ee, te = r.forwardRef(_),
                ne = (n.p, n(114)),
                ae = n(174);

            function re () {
                var e = Object(a.a)(["\n  :hover {\n    color: #2fccdc;\n    cursor: pointer;\n  }\n"]);
                return re = function () {
                    return e
                }, e
            }

            function ce () {
                var e = Object(a.a)(["\n  cursor: pointer;\n"]);
                return ce = function () {
                    return e
                }, e
            }

            function oe () {
                var e = Object(a.a)(["\n  padding: 7px 25px;\n"]);
                return oe = function () {
                    return e
                }, e
            }

            function ie () {
                var e = Object(a.a)(["\n  max-width: 160px;\n  font-size: 14px;\n  padding: 25px;\n  display: grid;\n  grid-template-rows: auto;\n  grid-gap: 20px;\n"]);
                return ie = function () {
                    return e
                }, e
            }

            function le () {
                var e = Object(a.a)(["\n    display: none;\n  "]);
                return le = function () {
                    return e
                }, e
            }

            function ue () {
                var e = Object(a.a)(["\n  ", "\n"]);
                return ue = function () {
                    return e
                }, e
            }

            function se () {
                var e = Object(a.a)(["\n    display: none;\n  "]);
                return se = function () {
                    return e
                }, e
            }

            function de () {
                var e = Object(a.a)(["\n  text-align: right;\n  margin-right: 15px;\n  min-height: 42px;\n\n  ", "\n"]);
                return de = function () {
                    return e
                }, e
            }

            function fe () {
                var e = Object(a.a)(["\n    margin-right: 15px;\n  "]);
                return fe = function () {
                    return e
                }, e
            }

            function me () {
                var e = Object(a.a)(["\n  margin-right: 75px;\n\n  ", "\n"]);
                return me = function () {
                    return e
                }, e
            }
            var be, pe = Object(l.default)(Z.a)(me(), (function (e) {
                return e.theme.mediaWidth.upToSmall(fe())
            })),
                ge = Object(l.default)(i.Box)(de(), (function (e) {
                    return e.theme.mediaWidth.upToSmall(se())
                })),
                xe = l.default.div(ue(), (function (e) {
                    return e.theme.mediaWidth.upToSmall(le())
                })),
                ve = l.default.div(ie()),
                Ee = Object(l.default)(H.a)(oe()),
                he = Object(l.default)(K.a)(ce()),
                je = Object(l.default)(q.c)(re());
            ! function (e) {
                e[e.MAINNET = 1] = "MAINNET", e[e.YEOUIDO = 3] = "YEOUIDO", e[e.EULJIRO = 2] = "EULJIRO", e[e.PAGODA = 80] = "PAGODA"
            }(be || (be = {}));
            var Oe = parseInt(("1", "1")),
                we = (ee = {}, Object(P.a)(ee, be.MAINNET, "Mainet"), Object(P.a)(ee, be.YEOUIDO, "YEOUDIO"), ee),
                ye = c.a.memo((function (e) {
                    var t = e.className,
                        n = e.title,
                        a = Object(W.d)(),
                        r = a.account,
                        o = a.disconnect,
                        l = c.a.useState(null),
                        u = Object(z.a)(l, 2),
                        s = u[0],
                        d = u[1],
                        f = c.a.useRef(null),
                        m = c.a.useState(!1),
                        b = Object(z.a)(m, 2),
                        p = b[0],
                        g = b[1],
                        x = function () {
                            return d(null)
                        },
                        v = Object(ne.e)(),
                        E = c.a.useCallback(function () {
                            var e = Object(T.a)(M.a.mark((function e (t) {
                                return M.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, navigator.clipboard.writeText(t);
                                        case 2:
                                            g(!0);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        }(), []);
                    return c.a.createElement("header", {
                        className: t
                    }, c.a.createElement(i.Flex, {
                        justifyContent: "space-between"
                    }, c.a.createElement(i.Flex, {
                        alignItems: "center"
                    }, c.a.createElement(pe, null), c.a.createElement(q.c, {
                        variant: "h1"
                    }, n), Oe !== be.MAINNET && c.a.createElement(q.c, {
                        variant: "h3",
                        color: "alert"
                    }, we[Oe])), !r && c.a.createElement(i.Flex, {
                        alignItems: "center"
                    }, c.a.createElement(H.a, {
                        onClick: v
                    }, "Sign in")), r && c.a.createElement(i.Flex, {
                        alignItems: "center"
                    }, c.a.createElement(ge, null, c.a.createElement(q.c, {
                        variant: "p",
                        textAlign: "right"
                    }, "Wallet"), r && c.a.createElement(G.a, {
                        text: p ? "Copied" : "Copy address",
                        placement: "left"
                    }, c.a.createElement(je, {
                        onMouseLeave: function () {
                            setTimeout((function () {
                                return g(!1)
                            }), 250)
                        },
                        onClick: function () {
                            return E(r)
                        }
                    }, Object(ae.e)(r)))), c.a.createElement(xe, null, c.a.createElement(Y.a, {
                        onClickAway: x
                    }, c.a.createElement("div", null, c.a.createElement(H.b, {
                        ref: f,
                        onClick: function () {
                            d(s ? null : f.current)
                        }
                    }, c.a.createElement(te, null)), c.a.createElement(V.a, {
                        show: Boolean(s),
                        anchorEl: s,
                        placement: "bottom-end"
                    }, c.a.createElement(ve, null, c.a.createElement(he, {
                        onClick: function () {
                            x(), v()
                        }
                    }, "Change wallet"), c.a.createElement(Ee, {
                        onClick: function () {
                            x(), o()
                        }
                    }, "Sign out")))))))))
                }));

            function Ce () {
                var e = Object(a.a)(["\n  z-index: ", ";\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: fit-content;\n  position: sticky;\n  margin-top: 48px;\n  bottom: 24px;\n"]);
                return Ce = function () {
                    return e
                }, e
            }

            function Ie () {
                var e = Object(a.a)(["\n  z-index: ", ";\n  margin-right: 75px;\n"]);
                return Ie = function () {
                    return e
                }, e
            }

            function Se () {
                var e = Object(a.a)(["\n    padding-left: 16px;\n    padding-right: 16px;\n  "]);
                return Se = function () {
                    return e
                }, e
            }

            function ke () {
                var e = Object(a.a)(["\n  /* disable margin collapse */\n  display: flex;\n  flex-direction: column;\n  max-width: 1280px;\n  min-height: 100vh;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 40px;\n  padding-right: 40px;\n\n  ", "\n"]);
                return ke = function () {
                    return e
                }, e
            }

            function Ae () {
                var e = Object(a.a)(["\n    margin-top: 25px;\n    margin-bottom: 25px;\n  "]);
                return Ae = function () {
                    return e
                }, e
            }

            function Fe () {
                var e = Object(a.a)(["\n  margin-top: 50px;\n  margin-bottom: 50px;\n\n  ", "\n"]);
                return Fe = function () {
                    return e
                }, e
            }
            var Be = Object(l.default)(ye)(Fe(), (function (e) {
                return e.theme.mediaWidth.upToMedium(Ae())
            })),
                Ue = Object(l.default)(i.Box)(ke(), (function (e) {
                    return e.theme.mediaWidth.upToMedium(Se())
                })),
                Ne = Object(l.default)(i.Box)(Ie(), (function (e) {
                    return e.theme.zIndices.appBar
                })),
                Xe = Object(l.default)(i.Box)(Ce(), (function (e) {
                    return e.theme.zIndices.appBar
                })),
                Re = function (e) {
                    var t = e.children,
                        n = e.title,
                        a = void 0 === n ? "Home" : n,
                        r = Object(o.a)("(max-width: 1000px)");
                    return c.a.createElement(c.a.Fragment, null, c.a.createElement(Ue, null, c.a.createElement(Be, {
                        title: a
                    }), c.a.createElement(i.Flex, {
                        flex: [1, 1, 1, "initial"]
                    }, !r && c.a.createElement(Ne, null, c.a.createElement(L, null)), t), r && c.a.createElement(Xe, null, c.a.createElement(L, null))))
                }
        },
        948: function (e, t, n) {
            "use strict";
            var a = n(18),
                r = n(111),
                c = n(51),
                o = n(0),
                i = n.n(o),
                l = n(966),
                u = n.n(l),
                s = function (e) {
                    return Object.entries(e).sort().reduce((function (e, t) {
                        var n = Object(c.a)(t, 2),
                            a = n[0],
                            r = n[1];
                        return e[a] = r, e
                    }), {})
                },
                d = function (e, t) {
                    return "number" === typeof e && "number" === typeof t || "string" === typeof e && "string" === typeof t ? e === t : Array.isArray(e) && Array.isArray(t) ? JSON.stringify(e) === JSON.stringify(t) : "object" === typeof e && "object" === typeof t && JSON.stringify(s(e)) === JSON.stringify(s(t))
                },
                f = function (e, t) {
                    var n = e.start,
                        a = e.step,
                        r = e.disabled,
                        c = e.range,
                        o = e.padding;
                    return t.step === a && d(t.start, n) && t.disabled === r && d(t.range, c) && d(t.padding, o)
                },
                m = function (e) {
                    var t = Object(o.useState)(null),
                        n = Object(c.a)(t, 2),
                        l = n[0],
                        s = n[1],
                        d = i.a.createRef();
                    Object(o.useEffect)((function () {
                        var t = e.instanceRef,
                            n = t && Object.prototype.hasOwnProperty.call(t, "current");
                        return t && t instanceof Function && t(d.current), n && (t.current = d.current),
                            function () {
                                n && (t.current = null)
                            }
                    }), [d]);
                    var f = function (e) {
                        var t = Number(e.target.getAttribute("data-value"));
                        l && l.set(t)
                    },
                        m = function (e) {
                            var t = d.current;
                            t && (e ? t.setAttribute("disabled", !0) : t.removeAttribute("disabled"))
                        },
                        b = e.onUpdate,
                        p = e.onChange,
                        g = e.onSlide,
                        x = e.onStart,
                        v = e.onEnd,
                        E = e.onSet,
                        h = function (e) {
                            x && (e.off("start"), e.on("start", x)), g && (e.off("slide"), e.on("slide", g)), b && (e.off("update"), e.on("update", b)), p && (e.off("change"), e.on("change", p)), E && (e.off("set"), e.on("set", E)), v && (e.off("end"), e.on("end", v))
                        },
                        j = function () {
                            if (e.clickablePips) {
                                var t = d.current;
                                Object(r.a)(t.querySelectorAll(".noUi-value")).forEach((function (e) {
                                    e.style.cursor = "pointer", e.addEventListener("click", f)
                                }))
                            }
                        };
                    Object(o.useEffect)((function () {
                        var t = e.disabled,
                            n = d.current;
                        return n && (m(t), function () {
                            var t = u.a.create(d.current, Object(a.a)({}, e));
                            h(t), s(t)
                        }()),
                            function () {
                                l && l.destroy(), n && Object(r.a)(n.querySelectorAll(".noUi-value")).forEach((function (e) {
                                    e.removeEventListener("click", f)
                                }))
                            }
                    }), []), Object(o.useEffect)((function () {
                        l && j()
                    }), [l]);
                    var O = e.start,
                        w = e.disabled,
                        y = e.range,
                        C = e.step,
                        I = e.padding;
                    Object(o.useEffect)((function () {
                        l && (! function (e) {
                            d.current.noUiSlider.updateOptions(e)
                        }({
                            range: y,
                            step: C,
                            padding: I
                        }), l.set(O), j()), m(w)
                    }), [O, w, y, C, I]), Object(o.useEffect)((function () {
                        l && h(l)
                    }), [b, p, g, x, v, E]);
                    var S = e.id,
                        k = e.className,
                        A = e.style,
                        F = {};
                    return S && (F.id = S), k && (F.className = k), i.a.createElement("div", Object.assign({}, F, {
                        ref: d,
                        style: A
                    }))
                };
            m.defaultProps = {
                animate: !0,
                behaviour: "tap",
                className: null,
                clickablePips: !1,
                connect: !1,
                direction: "ltr",
                disabled: !1,
                format: null,
                margin: null,
                limit: null,
                keyboardSupport: !0,
                id: null,
                instanceRef: null,
                padding: 0,
                pips: null,
                snap: !1,
                step: null,
                style: null,
                orientation: "horizontal",
                tooltips: !1,
                onChange: function () { },
                onEnd: function () { },
                onSet: function () { },
                onSlide: function () { },
                onStart: function () { },
                onUpdate: function () { }
            };
            t.a = i.a.memo(m, f)
        },
        951: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return d
            })), n.d(t, "b", (function () {
                return f
            }));
            var a = n(51),
                r = n(17),
                c = n(0),
                o = n.n(c),
                i = n(20),
                l = n(934),
                u = n(944);

            function s () {
                var e = Object(r.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: help;\n  color: ", ";\n"]);
                return s = function () {
                    return e
                }, e
            }
            var d = i.default.div(s(), (function (e) {
                return e.theme.colors.text1
            }));

            function f (e) {
                var t = e.text,
                    n = Object(c.useState)(!1),
                    r = Object(a.a)(n, 2),
                    i = r[0],
                    s = r[1],
                    f = Object(c.useCallback)((function () {
                        return s(!0)
                    }), [s]),
                    m = Object(c.useCallback)((function () {
                        return s(!1)
                    }), [s]);
                return o.a.createElement("span", {
                    style: {
                        marginLeft: 4,
                        verticalAlign: "middle"
                    }
                }, o.a.createElement(l.b, {
                    text: t,
                    show: i,
                    placement: "top"
                }, o.a.createElement(d, {
                    onClick: f,
                    onMouseEnter: f,
                    onMouseLeave: m
                }, o.a.createElement(u.a, {
                    width: 14
                }))))
            }
        },
        955: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return f
            })), n.d(t, "c", (function () {
                return m
            })), n.d(t, "b", (function () {
                return b
            })), n.d(t, "e", (function () {
                return p
            })), n.d(t, "d", (function () {
                return g
            }));
            var a = n(17),
                r = n(33),
                c = n(20),
                o = n(52);

            function i () {
                var e = Object(a.a)(["\n  width: 316px;\n  padding: 25px;\n  -webkit-overflow-scrolling: touch;\n\n  & > ", ":last-child {\n    padding-bottom: 0;\n    border-bottom: none;\n  }\n"]);
                return i = function () {
                    return e
                }, e
            }

            function l () {
                var e = Object(a.a)(["\n  padding: 20px 0;\n  cursor: pointer;\n  color: #ffffff;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n\n  :hover {\n    color: #2ca9b7;\n    transition: color 0.2s ease;\n  }\n"]);
                return l = function () {
                    return e
                }, e
            }

            function u () {
                var e = Object(a.a)(["\n  color: inherit;\n  font-size: 16px;\n"]);
                return u = function () {
                    return e
                }, e
            }

            function s () {
                var e = Object(a.a)(["\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n"]);
                return s = function () {
                    return e
                }, e
            }

            function d () {
                var e = Object(a.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n"]);
                return d = function () {
                    return e
                }, e
            }
            var f = Object(c.default)(r.Box)(d()),
                m = Object(c.default)(o.c)(s()),
                b = Object(c.default)(o.c)(u()),
                p = Object(c.default)(f)(l()),
                g = Object(c.default)(r.Box)(i(), p)
        },
        956: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return d
            }));
            var a = n(17),
                r = n(0),
                c = n.n(r),
                o = n(20),
                i = n.p + "static/media/icd.1838eace.svg";

            function l () {
                var e = Object(a.a)(["\n  width: ", ";\n  height: ", ";\n  /* border-radius: ", "; */\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n"]);
                return l = function () {
                    return e
                }, e
            }
            var u = {
                ICX: n.p + "static/media/icx.4baef6c6.svg",
                BALN: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAYNUlEQVR4Ae3dBXAbSfr38QxIsmRc7/1zy8x7zMzMzMzMzMzMzJjbY1jGY2ZYZr7EKMmCmXm/9dZTVV1P3VOdSWxrnPSv6lMzAi/lt92tlsaKNm0KOfTjWyIOdTRQFw2RooZYkE05MvTRk+MKuuggx26diP+om3ajxKijhSkxiQmMYwwNUXNKlYhUxEjkGKFAhgHaWMQ2XIWrcQ0WMMRukRS7ciKnRDOYxiSazmgUu0UROTIUcp6IDEOkqmiJU8Z9UHf+2hmWsRUX4wKcgyvQD8XaOEkxJWYwiTEkIkKBPnKnVLlTFnkOkaNK4cgRyXGIAgMkzog3g+viRojRkWL9G3/GvzAXilW9JBjHjGg5I0aEIXKRCKM0xP9YJKxEjgK6cHUchRviEbgaf8Mv8efRliwUK0ITU6LljDY5MqdIkSpLoc59j/kSeejn5Og50+reOAQPxhX4BU7C3zEIxVqfxBjHtBydtQzhXERIUDiITH92qcomsu/zF84ZyTKk2AdPwmPwV3wfp2IhFGvtCjXhrJliFMhQqBJJ5Fzf9j9vNcvlO9f6GKKGW+G2OB8/wPdwJSqfeAMVajP2QOpMc4VzhCoOjOfo50UlR6/CLAmMskVKbN/mnJA2OjgUr8cP8VLsFYq1c2liFlNIkNlF8pdIH0s/xy5QqRJ5pspYn2MFC9gbr8XxeD6mQrHKpYZpTCB2CqVLYN/WKf+YL4W1iPfcVvyjnVOwHualYO/Az/AQRKFY/n+eFiaQqDL56AU6vFMgVmtdZZfEd58hRmzc18MCrocvYwuODcWyR6lxOfoKlZcpmefxwmTHWyLjecRTIKNMxnM66OJBOA2vRBOhWCRGA3WnNPY6R/gf8+9N+Qrkfwx2IiUuMXLFvnO1yJ9HC+/C8bjp7l6sBDUk5UeR0tOkLlqu/nqxehumgTFHUxkXTefN65o7unheOcb+0Q46dhEHWMAdcQKeh2h33MdKnWLnenfcOHdHtEjdFxmvEGOjZCkAQvroYoC+HDNRqPLV0UQLk+pN7ik0nZIVdiH805/i/VksYhofxa3xMly5OxQrQgz9H12PVjHULjlUgTxFipyjlILI4hdtLDtrlb4odvDtpUnMYC8cgEOwPzbLYxFyQfQ0B28B4Z4TXTD0keMxuCGejl/vDsWCHmX0uY5/mhM5dKGGWBaLaGMFq5UCHXE1zpb7I0xLwY7BDXE0NiPBEDmclN6OsJ5XoIdj8SO8GF/blYuVg6j361TU6OMtF/SUk6GDRSyokWi9UmAefxLfwF64GW6Pmzq76H1jfRbro+ZZ+A9wHXwJ++PdyLGmSWbv+/BN65gxRMjcghkLVuNo/l+dyHkPc7gK16CNDFVIgSWcjZNxOi7BFPbDhFP+xBF76FLF6rxAgrtKkU/FcKOPWNfDA3Bz/B+6OBs/w4kYoIZIr7nc+8z1lUQKtIQuclQ+Uqqv4du4DR6Ke2AP9e8R2Yh+jor67/lM7IlnYG4jfuZ9DK/Ec6VQOhmOx8ukaHXP/k+szhM59tDBCnaF3BhPxAOkYB0UeuRCUmbPS7g5EY/C/Ebax2riC3iTUyqdBPfDSbgR+igUYt63gq3YJue7Sv6MF+HB+BZqmLZeDTpiddR07oktmNooxWriM3g0ticH4POYRuaWyTDEkrMg31XzVzwbj8AvMI2mu6hX7HLZuTveshGKleJDeBzK5CZ4it4NN0apJfSxu+QMPBgvxQJm1Yjl+eiON0/HjaterLfiGdiRPAxNDKGnviE66KHA7pYVfBx3wfedT9HqTVZte9LCw6tcrOfgVWqkKZOjsFmvrTBAD/mmkHOkBM9HBy1sMnbmy+SmSKpYrPvjfSA7XIBJjEOVSu23hGT4GO6Dv6Nh7LyXySRqch5VpVjH4JNoqlKVHbk66II4F0lYCfmV88ouFTuanrrKKRp1sfbA57AvMs/nony5DFtBQqm2M1fisXj3To4252KABJFzHFmx3o5bY2CMTmXKdQIWUS4hQ7wKz0MPZZPju2q0ipGOqliPxrMwtD7xWaJcV+OTCNnxfBxPxjLK5EScrrcwdLnWq1hH4L0gsj2gke0s1wDPxfkI2bl8E49HG9uT8/FC9JEgUlLE61WsGt6HfZ23UvIdLNcAz5CheHUS8gM8BP+BGXIm7o9zUTf2w2I0EK3HpxuegvujA4n5gT03kfqIb4aX4ktY3YSchLviibgPDkETi7gIx+ErcrtuXVUkEtTRW8tPNxyMs7AZfd+nHI3zRI5vxFsQsrZpYLMclzGHnrOG8l81RMgy8rUasV6L/bDgDJUqenRS54R8Fm9DyNqnh0vVn03dHAwUdSHx8loU6254NJbUJVSRKBDLMRI6KU7GS5AjZH2SIPZMeTEKxMaM08AAvdVcvDfwKiQY6MW6UxL3fr37XsPFeBaWEbJ+yUC80531ocpIjCNezWI9CrfDklMkXa7MOdfPSdDFM3EBRpNQLj1CaZGiH6ujuVrFmsTz0UMmdHlAOCqFSPFunIjRJCTH0CgQ9Ee+NRAygWQ1ivVoHIW2UajCggxNnIX3YbQJyYT92XhiTIPuqDW+s8WawpPQU0XKNWT6MdQwjxejjdEnpK8X9IgV8yIWZxZLdqZY98cxWFYFyq3bqoBj+CD+hGokpMAAsSFxj45ExGhgckeLNYbHYwW5SS3YneMY/oAPo1oJ6SND4hutlMgxjXhHinVHHIu2p1iZ0Av5Au/AAqqVkAJdXR7NuhrbGXgmd2SD9JFIzFcSRN1fOOeT+Bl+iGomZCBaKBAjKiHGHlgoM2IdhVs4+1aZhlwfRYQOPoQc1U1IWy3khboNPXI5G6atMsW6J6YxQGasqXJDEyfil6h2QgboITXWWYk66oLVMLu9xWrhLugi86yp9KhVYAWflPOQ6mfZGbUUXSSFkGmk8K6xro/D0XHfCjDoNzZbOA2/xkhy3nMeXtVCL+Bi/Bo/wOnoYdTpHfaJ73Q5zqAw1s/ubf3YOCYx5xux7oAEAwyN9ZTmbo5uAbdDVKZxAzwTx+MSvAR1jDpLiJDoKVCk+lw9Z9Y3FTZxK3SRG9OdNS2m+AdORog/m/F+/B5HgYxslO84a63EEXskzmWAdZjFOhr7oIdMGWrq8RQ/Lf3WTcgN8CvcEqPMojEypQ79eCxamIJZrJujaRQrB9Q5EGErjkdI+eyBE0c8ci0hd8oTI93Ot31S7GEVK8LR6BlvNuv9K1eKv+FCVDnROmrgcDwTp8KXaWxBbUTTYZ9DBzUkFqTGK8ZZt0+xmvMPQxeZWrxbpRqKAqeA8xBJH+fhM7gb7gzfJVnXxwsxqszrKU9JjfPI/aUuulhHYwo9Pd1h6B4dufNS+newE3IGboEzQcy8HGMjXGdl+lWfQ2+c6k88zPyvYh2Iwtpa0MVyJPgn/NNgyBIe6Bm5NuP+I5oOezId1o2RKxWxmhLVOsu5IgNHYOh7X1A9ZwhS4tvWQxbwZBSwch+MKguqULpgsfG4vCnNUW3L74ueKo0rU8cBcqzgr9j+hPzGs6C/2Yi3HSJje0GY66wpjOlitdBHZhgau+3XyNAeUi5bYGX/EU/XQ9R8C3jE6ryFcbdYe6HhKZZayIOQK7EVIeVyGqxMj3AXfsChjbouk0eMOmbcN6H3R4Sh8VUasbqdO+cXYoiQcrnUMx2NMkuomft/xDimmHaLtRlDZMYP5Po+0cfZCFndXFaBYiUoPF+gpTsR62JNOtOg1Ua9PRGji8sRUj77wcjI9wQ7IGrUso5SQDGBKHW+PX4AXSzd1Fx9lquNBYSUz21h5WcYZbrI0ERuFkqivrpuHGOp82XZUiy3fcQuWoylUKwdjP21MNfixxhlVjDAFLJSX34ufYrl1WAdQ5Gb+1dQz5vDEkLK5Va4u/HYe7Ey4s9nDTmAXtj7V0JvPdAnpNKwBEPVTj1y6bbWMBdeEZbONL6ACDp/x4dQhQyQohDWwt1NjBStVBZbRHbS9ZPteXVY+mVxyCR+iKOhs4BHYIAqpI86ck+Z9GMJxv9/u5zpT5ppJhIFhqU/LRqmvy/iKOhcg/tV7B2MPmrIrK8BNvpRw1gqrcxEAauN+i+WwV4LhIxjf9weD8PdEUHnz3gwLkaVMkQiIqNYhb4fKeqp86uxhyjMkcq+2HEjpUBVciXejM9XdJ2ao4YhIljRZUtl8U7UiGVFtXQoti8hi7gYf8RP8ZMNMOKnwom3WAmSVG0v2F8AoKNHuBBfCtHDspxXOTFqGBjTn9WTFHGsL+VybxuG6vNYIRv5glU7qagZl4MlJiLFskiRbDFCNvIFq3YaTqlqulj6tjKMZWjWIxT85UKCjZRone2JO+GDWK74Bas6TTUyuaOXkMf1UYrVwRC5p1z6fIAUdkK24Uy8BIfjGxW+YFVn0imTLlhi3iZkJZZNzn6JaXAgx36p9UHIVXgs3lypC1btTDvF8dEXVXRiKciKHrHskUqPWCWnw5A34WtVvGBVZQqx503oRKnJz7ZjKVbXKUyZkauGBkLK5UWYr9wFqxJ+X9YYhxk9YqEmdMFcOTqxLN47yNVopc/1cYAYYwgpl634WpUuWFWZwLTnd2QJvXinH1KsDMt6KvTsaw1EhCZCyudHVbxgVbInZhGhJpwimRev1tHGcrqJqGIVIPbROa9hAiHl848qXrAq2QcTaLs77J4u5KhjDnmqfhnEUP2g+os4iHP1a0j5bK3iBauSg51RqlAkqmiyeMc17lU6c+gjN/8iinN/C5Gch5SZbuxMY5Q5CBESPbB4Rq9IF2sJK05BrB/U92cYQxMdbH9Cjq3iBau8IpzexAGFGrF8BYvkeIVbrC7aGEfmKZO+L8FU6WKFPLCiF6wejr0wRKq/mln1IHJmuRoWcJVbrL7c2XKK5S2V0+op8BcMKTENPq6iF6wegZb64lP3usFC6McauALbnGIR7sBm9Zv6fMXKxRRiOQ/x54OYqdoFq0yDiVxIm4gyA0xdipXpYs1jgMyzWNcyNNBEGyH+t3QeD1K5C1b/D0ci0wt3HyQ4B5t0sRbQRYrcLhSPETVqJZiBXayQvfBePQVW7ILVW2AvLOoRS62x9H0xlvDP/1WsFSxgFplvtFJyTOEKcDtEMovr44F4ut5MruAFq3dDKtzi6ItW3cciNHAJrnCL5WYrZpCBOCOUaqwe1UpvO4SrdCp1wSrrq/1lx3+ARBWn0OBmDH9BzyrWPPq6qcIslojLbzuEVOiC1btgP8whURdPWCKR4Y8wv1ZuCcvGtoNPhgkkcm4npFIXrDJa1WW6zpCogcWnhqvxT5jfpZNjGwrr+3MU/VGbGsYR4s+VeBZuMcpSSW6Nm2Kgf2mtEuvbaOH32KpHLJ05bNbTnUNPh3ohN4mlsIjfUBesPhYN9BDrF2zI9dQoj8fil5DYxWqLMT0d+oZI5KhjDN0RDetR6HCp3Bj3QM/YFNWFcjVwMX7j/05omQ7t738W9hRZYBIhGyPPxCwKJEqsqfub+BUWvCOWZB57Qm85FEpujGY1Z2itdsJo9UB0kKBQWwwcuU3UsicSPfwAKvaVzD0sGot4V+7Q948jpNp5AWaQ6xHJkRj3j+PP+Kdxfb6ZebXt4BuxtDSMWpXOXfBQNVrp2UmPVpFzO8Vx6JctVhsdNMyNUb8x9OW8Oglp4Q36laCI3HNjUGnhbJywyUgMKwUWnDIJPWLBPo/RQLUS8gzcAR3EiCBHqNvGNHgcFkH8I5ZO27mGP/dNhYYaBsgQMvochVejj1jvTemjOne3GL4FMzGImRyLxreu5g5dND2C1REhZLSp4YPYjL4eoQz663rH8RVcCzMpfGmjaY9a8G+iRkgwRMjo8nzcCyuI9ScYEOsLJNQ6q4ULpVhk54pVYBlTyP2FMl9BJshFyPrn9ngDMhApkRz1t7zpqVC08ClcU65Ydrpo2KMW8RWOqJe1IeuXffBpTKOHSOjtBX3dgvu+4Tj+hC+BlC2WfyFfmCRm8QiJw0J+XTMmo8zRGKiyqOkO7hQpcdZX78LSahdrgBXUVcthngtZ7IeMIu/E/ZF5fvuxTqw+dn4cfghStlj+dJG4DTdLRsgQOWrYB7Po4BosYm0T8lK8yPM9OIXQt90R7794I4q1KlaBFTTsNRYI6aOJx+FROAIz6ONinIbPrdnHcUOejHcaX1dD7PvVQr6B1+FfIGtQLMkACaCKRSR9HCpz+92gM4sb49F4Kb6F1UvII/Ex1PRopI7EfhwtnIaPg6xhsSQ9NPSurBjgQPwIx/hereBrmMRnEbLzuQ++gJYqjFEeM3WZAl+KLkolRvlIgYyPsMqCUUrlT4JP4qUI2bnsLSNVy/OdgvqoxeK1+AvIOhRLkgn96u92eBjKJMH78HbECNmxPB0HQ2KXS1P31/A1NYusT7EkQ+hPkd4bNexIXoMvYQrlElLHXWFmO79EPsVf8TIUIymWZKg+0nrkTl6l/Hj8CEcjxF+URM73xOHwxx69EvwXT8PVIKMrlv6EYQuloqbSIe6I43E/qISoUkXOiNUs+fO6C308F38AGXGx1HuCc9jRFKKPA3Ec3o4JEElIihpipyBtbCtbTtWD12ILyOiLpfPbsmUyPp3acdZdP8OtNoXEaKCmFtwxtpXdxFTl+ijeB1LNYv0I18KXwuCWbIBF3E7K9UZcZzed9hpoIYV+NZcgx9dROvJzr8CqJZm978M3rXLmUeAesGO8eW0Ur4sEd8GdsQ3/xu6QOlqoG58icUedc3AzHIbtzffwdHQqWyw1He6Lm5QoVY5CHfXo1cFeeKD8ta/GxbtwoSbRROQb0UQfv8SdsBd8+T6eiGWQ6herwPHYCzf1lAreT6a6z+ljgCOlYDfEHC5Hjo2eBqYxiQRFyaXNNvwIm3EkUugs4YN4MdpY9USHfnzLWr96eQ9e7F1X+S8py5A7hojQRAe/xHdwBhaxkRKhhUlnysuE8d8DzrkywCZyG9wHx2IC2/BP/BB/xZolxVpmiJdgAW80vhrFHqVMIGTorOluh1vhbPwMp+IcFBUfnSYxgRpyDOVo7ZSD2J9UiJy/1q9EhBQDeFLtqVDnTFyGu6Ou11M+yI3bmXN7BX3MSsHugZtjyrmqO6vAyNTEntgL11W/Ix+qNE48t3UixGopsW5JsV75vJTrEzgEfatA6mhPk0Q/3ylQgpvhptiG8/FX/B0X4pp1KFrsLMInRAvE+R5IKZIjRoZIU8URqjT6GgN5jqeIFV9j+XMMPok7oO8M/eZoJDJ3rWUctSEytWfXwRwuxUXiSmzDIroYoEwS1NDAGCbUmilFpr6sPSvxO8f0fwtzFNdvsSFzbu9SI5bOv3BfvBXPR4plY8vB/x8T5kgn0V87jBaOxlHORSLLWBCLWJL7euirkkZIROqUJ0HklGHgcC8oieVcj1KFcVs/n8h9RN92npOPavpPMYos48X4Nd6DA7FgfOuFMVXCWeiXKGXulsxRwyxmkKsyAjLaKANlKDJjmgNRRVJlEvoxiS6QRC3mh6NcU8YYZbbg7jgOE2gaayjvN776vwHUWPxCjTA9dNFRxxXRc7mjmfFqzjk6JMZtRUXuM34uR1+VavcqluRcPBLPwJXYA7Ex+njO1X0eRlHNPzwdozj2Y+X5fl6PZn30nILvvsWS5PgC7ozPIsK4Z2qz6IVq7imVkOiy2TFHjhJi49y5zRGev8YQbQwgCcVycwmejYfhTDU9miOT/RhUSTwFK18qe40jt+3znRypEmRYRhs5VEKxdE7HQ/AcnI1pNPUIZBdGRy+IifXz5RP5RzF9bj/Ps0aLkSDHEhb1KBWK5c8A38B98TIp2CTGPa8EffQoplOoc5eOf2FuI+avadRTYCLnGRaxDV0UkIRilc0ivogH4SX4E+qYQOKbBn1Tn6dcEUrHmNKILo7ELmciBpjHtVhGjkonxUbJIr6J7+H2eAhujml0RW5vTUjKrLtIiYJF3r0lYRVKjU4DtLGwNmuoUCydHk4RR+BuuCMOwRi6WDG3HiTGfcbI5Z8GPfdZu+Sxum+ILhYE5zqhWOuRc8SXcD3cFjfBfphAHyv6iu3yJSv3ylCfGzvtNeTOW0oLoo0hJKFYo0wHvxMtHIUb4lgcgEk0nJ31ApmnZKULJfR57BxjRFjBEubFEjJULKFYumR/Egk241AcIrgtRQMy9EWkptByO9/O/pKI0XPe5N6GJSx4XtWFYlU8Ga4Uv0CEKcw6H7S7jtw3jgZSxEgQIVZFyTDUb/g67zG2sSwW5Njetb76JRRLp8CCuBBuGmhiTM7rqCFFon8NgOhhgL4DIf8PbwL2wT23ym8AAAAASUVORK5CYII=",
                bnUSD: i,
                sICX: n.p + "static/media/sicx.f8905c14.svg"
            },
                s = o.default.img(l(), (function (e) {
                    return e.size
                }), (function (e) {
                    return e.size
                }), (function (e) {
                    return e.size
                }));

            function d (e) {
                var t, n = e.currency,
                    a = e.size,
                    r = void 0 === a ? "24px" : a,
                    o = e.style;
                return c.a.createElement(s, {
                    alt: null === n || void 0 === n ? void 0 : n.symbol,
                    size: r,
                    style: o,
                    src: (t = null === n || void 0 === n ? void 0 : n.symbol, t && u[t])
                })
            }
        },
        999: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, "HomePage", (function () {
                return Nt
            }));
            var a = n(17),
                r = n(0),
                c = n.n(r),
                o = n(42),
                i = n(175),
                l = n(33),
                u = n(20),
                s = n(5),
                d = n.n(s),
                f = n(14),
                m = n(51),
                b = n(28),
                p = n(9),
                g = n.n(p),
                x = n(172),
                v = n(948),
                E = n(930),
                h = n(936),
                j = n(951),
                O = n(934),
                w = n(52),
                y = n(944),
                C = n(174);

            function I () {
                var e = Object(a.a)([""]);
                return I = function () {
                    return e
                }, e
            }

            function S () {
                var e = Object(a.a)(["\n  flex: 1;\n  width: 100%;\n  text-align: right;\n  background: transparent;\n  border: none;\n  color: white;\n  outline: none;\n  padding-right: 4px;\n"]);
                return S = function () {
                    return e
                }, e
            }

            function k () {
                var e = Object(a.a)(["\n  display: inline-flex;\n  align-items: center;\n  text-align: right;\n  border: 2px solid #0c2a4d;\n  background-color: #0c2a4d;\n  color: #ffffff;\n  padding: 3px 20px;\n  height: 40px;\n  border-radius: 10px;\n  outline: none;\n  width: 100%;\n  -webkit-appearance: none;\n  transition: border 0.3s ease;\n  overflow: visible;\n"]);
                return k = function () {
                    return e
                }, e
            }

            function A () {
                var e = Object(a.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n  background-color: ", ";\n"]);
                return A = function () {
                    return e
                }, e
            }
            var F = Object(u.default)(l.Box)(A(), (function (e) {
                return e.isActive ? e.theme.colors.primary : "#03334f"
            })),
                B = Object(u.default)(l.Box)(k()),
                U = u.default.input(S()),
                N = u.default.span(I()),
                X = RegExp("^\\d+(?:\\\\[.])?\\d*$"),
                R = function (e) {
                    var t = e.id,
                        n = e.isActive,
                        a = e.label,
                        r = e.value,
                        o = e.currency,
                        i = e.tooltip,
                        u = e.tooltipText,
                        s = e.editable,
                        d = e.onUserInput;
                    return c.a.createElement(l.Flex, {
                        id: t,
                        flexDirection: "column"
                    }, c.a.createElement(l.Flex, {
                        alignItems: "center"
                    }, c.a.createElement(l.Flex, null, c.a.createElement(F, {
                        isActive: n,
                        mr: 2
                    }), c.a.createElement(w.c, {
                        as: "label",
                        htmlFor: a,
                        unselectable: "on",
                        sx: {
                            userSelect: "none"
                        }
                    }, a, " ", i && c.a.createElement(O.a, {
                        text: null !== u && void 0 !== u ? u : " ",
                        placement: "top"
                    }, c.a.createElement(j.a, null, c.a.createElement(y.a, {
                        width: 14,
                        style: {
                            marginTop: -5
                        }
                    })))))), !s && c.a.createElement(w.c, {
                        variant: "p",
                        ml: 6,
                        mt: 1,
                        fontSize: 18
                    }, "".concat(new g.a(r).dp(2).toFormat(), " ").concat(o.symbol)), s && c.a.createElement(B, {
                        mt: 1
                    }, c.a.createElement(U, {
                        id: a,
                        value: r,
                        onChange: function (e) {
                            var t = e.target.value.replace(/,/g, ".");
                            ("" === t || X.test(Object(C.a)(t))) && d && d(t)
                        },
                        inputMode: "decimal",
                        title: "Token Amount",
                        autoComplete: "off",
                        autoCorrect: "off",
                        type: "text",
                        pattern: "^[0-9]*[.,]?[0-9]*$",
                        minLength: 1,
                        maxLength: 79,
                        spellCheck: "false"
                    }), c.a.createElement(N, null, o.symbol)))
                };

            function L (e) {
                var t = e.disabled,
                    n = e.percent,
                    a = e.text,
                    r = void 0 === a ? "Locked" : a;
                return c.a.createElement("div", {
                    id: "indicator-locked-container"
                }, c.a.createElement("div", {
                    id: "indicator-locked",
                    className: t ? "" : "disabled",
                    style: {
                        left: "".concat(Math.min(n, 100), "%")
                    }
                }, c.a.createElement("p", {
                    className: "label"
                }, r)))
            }
            var D = n(220),
                M = n(937),
                T = n(173),
                z = n(295),
                P = n(931),
                W = n(114),
                Y = n(130),
                H = n(939),
                K = n(942),
                Z = n(932),
                V = n(294),
                G = function () {
                    var e, t, n = Object(o.d)(),
                        a = n.account,
                        r = (n.ledgerAddressPoint, Object(W.d)()),
                        i = Object(W.a)(),
                        u = c.a.useRef(null),
                        s = Object(H.g)(),
                        p = s.independentField,
                        j = s.typedValue,
                        O = s.isAdjusting,
                        y = s.inputType,
                        C = p === Y.a.LEFT ? Y.a.RIGHT : Y.a.LEFT,
                        I = Object(H.a)(),
                        S = I.onFieldAInput,
                        k = I.onFieldBInput,
                        A = I.onSlide,
                        F = I.onAdjust,
                        B = Object(K.b)().onAdjust,
                        U = Object(H.c)(),
                        N = Object(H.h)(),
                        X = Object(H.b)(),
                        G = (e = {}, Object(b.a)(e, p, new g.a(j || "0")), Object(b.a)(e, C, N.minus(new g.a(j || "0"))), e),
                        q = (t = {}, Object(b.a)(t, p, j), Object(b.a)(t, C, G[C].isZero() ? "0" : G[C].toFixed(2)), t),
                        Q = U.isZero() ? "Deposit" : "Adjust",
                        J = c.a.useState(!1),
                        $ = Object(m.a)(J, 2),
                        _ = $[0],
                        ee = $[1],
                        te = function () {
                            ee(!_), i(!1)
                        },
                        ne = U,
                        ae = G[Y.a.LEFT],
                        re = ae.minus(ne),
                        ce = Object(Z.c)(),
                        oe = re.div(ce.sICXICXratio),
                        ie = re.abs(),
                        le = re.isPositive(),
                        ue = Object(V.c)(),
                        se = function () {
                            var e = Object(f.a)(d.a.mark((function e () {
                                var t, n, r, c, o;
                                return d.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            if (T.a.contractSettings.ledgerSettings.actived && i(!0), !le) {
                                                e.next = 21;
                                                break
                                            }
                                            return e.prev = 3, e.next = 6, T.a.inject({
                                                account: a
                                            }).Loans.depositAndBorrow(x.a.utils.toLoop(ie));
                                        case 6:
                                            t = e.sent, n = t.result, ue({
                                                hash: n
                                            }, {
                                                pending: "Depositing collateral...",
                                                summary: "Deposited ".concat(ie.dp(2).toFormat(), " ICX as collateral.")
                                            }), te(), F(!1), e.next = 16;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e.catch(3), console.log("handleCollateralConfirm.shouldDeposit = " + le, e.t0);
                                        case 16:
                                            return e.prev = 16, i(!1), e.finish(16);
                                        case 19:
                                            e.next = 38;
                                            break;
                                        case 21:
                                            return e.prev = 21, r = ie.div(ce.sICXICXratio), e.next = 25, T.a.inject({
                                                account: a
                                            }).Loans.withdrawCollateral(x.a.utils.toLoop(r));
                                        case 25:
                                            c = e.sent, o = c.result, ue({
                                                hash: o
                                            }, {
                                                pending: "Withdrawing collateral...",
                                                summary: "".concat(r.dp(2).toFormat(), " sICX added to your wallet.")
                                            }), te(), F(!1), e.next = 35;
                                            break;
                                        case 32:
                                            e.prev = 32, e.t1 = e.catch(21), console.log("handleCollateralConfirm.shouldDeposit = " + le, e.t1);
                                        case 35:
                                            return e.prev = 35, i(!1), e.finish(35);
                                        case 38:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 13, 16, 19],
                                    [21, 32, 35, 38]
                                ])
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        }();
                    c.a.useEffect((function () {
                        O || S(U.isZero() ? "0" : U.toFixed(2))
                    }), [S, U, O]), c.a.useEffect((function () {
                        "text" === y && u.current.noUiSlider.set(ae.toNumber())
                    }), [ae, y]);
                    var de = Object(K.m)(),
                        fe = !de.isZero(),
                        me = c.a.useMemo((function () {
                            return g.a.min(de.plus(fe ? 1 : 0), N)
                        }), [de, N, fe]),
                        be = N.isZero() ? 0 : me.div(N).times(100).toNumber();
                    return c.a.createElement(c.a.Fragment, null, c.a.createElement(M.a, {
                        bg: "bg3"
                    }, c.a.createElement(l.Flex, {
                        justifyContent: "space-between",
                        alignItems: "center"
                    }, c.a.createElement(w.c, {
                        variant: "h2"
                    }, "Collateral"), c.a.createElement(l.Box, null, O ? c.a.createElement(c.a.Fragment, null, c.a.createElement(E.c, {
                        onClick: function () {
                            F(!1)
                        }
                    }, "Cancel"), c.a.createElement(E.a, {
                        onClick: te,
                        fontSize: 14
                    }, "Confirm")) : c.a.createElement(E.a, {
                        onClick: function () {
                            F(!0), B(!1)
                        },
                        fontSize: 14
                    }, Q))), fe && c.a.createElement(L, {
                        disabled: !O,
                        percent: be
                    }), c.a.createElement(l.Box, {
                        marginY: 6
                    }, c.a.createElement(v.a, {
                        id: "slider-collateral",
                        disabled: !O,
                        start: [U.dp(2).toNumber()],
                        padding: [Math.max(me.dp(2).toNumber(), 0), 0],
                        connect: [!0, !1],
                        range: {
                            min: [0],
                            max: [N.isZero() ? P.g : N.dp(2).toNumber()]
                        },
                        instanceRef: function (e) {
                            e && !u.current && (u.current = e)
                        },
                        onSlide: A
                    })), c.a.createElement(l.Flex, {
                        justifyContent: "space-between"
                    }, c.a.createElement(l.Box, {
                        width: [1, .5],
                        mr: 4
                    }, c.a.createElement(R, {
                        id: "staked-icx-amount",
                        editable: O,
                        isActive: !0,
                        label: "Deposited",
                        tooltip: !0,
                        tooltipText: "Your collateral balance is ".concat(X.dp(2).toFormat(), " sICX (staked ICX). The ICX value of your sICX is displayed, and will increase daily from staking rewards. You can't use it unless you withdraw it."),
                        value: a ? q[Y.a.LEFT] : "-",
                        currency: a ? z.c.icx : z.c.empty,
                        onUserInput: S
                    })), c.a.createElement(l.Box, {
                        width: [1, .5],
                        ml: 4
                    }, c.a.createElement(R, {
                        id: "unstaked-icx-amount",
                        editable: O,
                        isActive: !1,
                        label: "Wallet",
                        tooltipText: "The amount of ICX available to deposit from your wallet.",
                        value: a ? q[Y.a.RIGHT] : "-",
                        currency: a ? z.c.icx : z.c.empty,
                        onUserInput: k
                    })))), c.a.createElement(D.a, {
                        isOpen: _,
                        onDismiss: te
                    }, c.a.createElement(l.Flex, {
                        flexDirection: "column",
                        alignItems: "stretch",
                        m: 5,
                        width: "100%"
                    }, c.a.createElement(w.c, {
                        textAlign: "center",
                        mb: "5px"
                    }, le ? "Deposit ICON collateral?" : "Withdraw ICON collateral?"), c.a.createElement(w.c, {
                        variant: "p",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 20
                    }, re.dp(2).toFormat() + " ICX"), !le && c.a.createElement(w.c, {
                        textAlign: "center"
                    }, oe.dp(2).toFormat() + " sICX"), c.a.createElement(l.Flex, {
                        my: 5
                    }, c.a.createElement(l.Box, {
                        width: .5,
                        className: "border-right"
                    }, c.a.createElement(w.c, {
                        textAlign: "center"
                    }, "Before"), c.a.createElement(w.c, {
                        variant: "p",
                        textAlign: "center"
                    }, ne.dp(2).toFormat() + " ICX")), c.a.createElement(l.Box, {
                        width: .5
                    }, c.a.createElement(w.c, {
                        textAlign: "center"
                    }, "After"), c.a.createElement(w.c, {
                        variant: "p",
                        textAlign: "center"
                    }, ae.dp(2).toFormat() + " ICX"))), c.a.createElement(w.c, {
                        textAlign: "center"
                    }, le ? "Your ICX will be staked as sICX." : "You'll receive sICX (staked ICX). Unstake it from your wallet, or swap it for ICX on the Trade page."), c.a.createElement(l.Flex, {
                        justifyContent: "center",
                        mt: 4,
                        pt: 4,
                        className: "border-top"
                    }, c.a.createElement(E.c, {
                        onClick: te,
                        fontSize: 14
                    }, "Cancel"), c.a.createElement(E.a, {
                        onClick: se,
                        fontSize: 14
                    }, le ? "Deposit" : "Withdraw")), r && c.a.createElement(h.a, null))))
                },
                q = n(83),
                Q = function () {
                    var e, t, n = Object(o.d)().account,
                        a = Object(W.d)(),
                        r = Object(W.a)(),
                        i = c.a.useRef(null),
                        u = Object(K.h)(),
                        s = u.independentField,
                        d = u.typedValue,
                        f = u.isAdjusting,
                        p = u.inputType,
                        j = s === q.a.LEFT ? q.a.RIGHT : q.a.LEFT,
                        O = Object(K.b)(),
                        y = O.onFieldAInput,
                        C = O.onFieldBInput,
                        I = O.onSlide,
                        S = O.onAdjust,
                        k = Object(H.a)().onAdjust,
                        A = Object(K.c)(),
                        F = Object(K.i)(),
                        B = (e = {}, Object(b.a)(e, s, new g.a(d || "0")), Object(b.a)(e, j, F.minus(new g.a(d || "0"))), e),
                        U = (t = {}, Object(b.a)(t, s, d), Object(b.a)(t, j, B[j].isZero() ? "0" : B[j].toFixed(2)), t),
                        N = A.isZero() ? "Borrow" : "Adjust",
                        X = c.a.useState(!1),
                        Y = Object(m.a)(X, 2),
                        Z = Y[0],
                        G = Y[1],
                        Q = function () {
                            return G(!Z)
                        },
                        J = A,
                        $ = B[q.a.LEFT],
                        _ = $.minus(J),
                        ee = _.isPositive(),
                        te = _.multipliedBy(.01),
                        ne = Object(V.c)();
                    c.a.useEffect((function () {
                        f || y(A.isZero() ? "0" : A.toFixed(2))
                    }), [y, A, f]), c.a.useEffect((function () {
                        var e;
                        "text" === p && (null === (e = i.current) || void 0 === e || e.noUiSlider.set($.toNumber()))
                    }), [$, p]);
                    var ae = Object(K.l)(),
                        re = F.times(.99),
                        ce = re.isZero() ? 0 : ae.div(re).times(100).toNumber(),
                        oe = !ae.isZero();
                    return F.isZero() || F.isNegative() ? c.a.createElement(M.b, {
                        bg: "bg3",
                        flexDirection: "column"
                    }, c.a.createElement(l.Flex, {
                        justifyContent: "space-between",
                        alignItems: "center"
                    }, c.a.createElement(w.c, {
                        variant: "h2"
                    }, "Loan:", " ", c.a.createElement(w.c, {
                        as: "span",
                        fontSize: 18,
                        fontWeight: "normal"
                    }, "US Dollars"))), c.a.createElement(l.Flex, {
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }, c.a.createElement(w.c, null, "To take out a loan, deposit collateral."))) : c.a.createElement(c.a.Fragment, null, c.a.createElement(M.a, {
                        bg: "bg3"
                    }, c.a.createElement(l.Flex, {
                        justifyContent: "space-between",
                        alignItems: "center"
                    }, c.a.createElement(w.c, {
                        variant: "h2"
                    }, "Loan:", " ", c.a.createElement(w.c, {
                        as: "span",
                        fontSize: 18,
                        fontWeight: "normal"
                    }, "US Dollars")), c.a.createElement(l.Box, null, f ? c.a.createElement(c.a.Fragment, null, c.a.createElement(E.c, {
                        onClick: function () {
                            S(!1), r(!1)
                        }
                    }, "Cancel"), c.a.createElement(E.a, {
                        onClick: Q,
                        fontSize: 14
                    }, "Confirm")) : c.a.createElement(E.a, {
                        onClick: function () {
                            S(!0), k(!1)
                        },
                        fontSize: 14
                    }, N))), oe && c.a.createElement(L, {
                        disabled: !f,
                        percent: ce,
                        text: "Used"
                    }), c.a.createElement(l.Box, {
                        marginY: 6
                    }, c.a.createElement(v.a, {
                        disabled: !f,
                        id: "slider-loan",
                        start: [A.dp(2).toNumber()],
                        padding: [Math.max(Math.min(ae.dp(2).toNumber(), re.dp(2).toNumber()), 0), 0],
                        connect: [!0, !1],
                        range: {
                            min: [0],
                            max: [isNaN(re.dp(2).toNumber()) || re.dp(2).isZero() ? P.g : re.dp(2).toNumber()]
                        },
                        instanceRef: function (e) {
                            e && !i.current && (i.current = e)
                        },
                        onSlide: I
                    })), c.a.createElement(l.Flex, {
                        justifyContent: "space-between"
                    }, c.a.createElement(l.Box, {
                        width: [1, .5],
                        mr: 4
                    }, c.a.createElement(R, {
                        editable: f,
                        isActive: !0,
                        label: "Borrowed",
                        tooltipText: "Your collateral balance. It earns interest from staking, but is also sold over time to repay your loan.",
                        value: n ? U[q.a.LEFT] : "-",
                        currency: n ? z.c.bnusd : z.c.empty,
                        onUserInput: y
                    })), c.a.createElement(l.Box, {
                        width: [1, .5],
                        ml: 4
                    }, c.a.createElement(R, {
                        editable: f,
                        isActive: !1,
                        label: "Available",
                        tooltipText: "The amount of ICX available to deposit from your wallet.",
                        value: n ? U[q.a.RIGHT] : "-",
                        currency: n ? z.c.bnusd : z.c.empty,
                        onUserInput: C
                    })))), c.a.createElement(D.a, {
                        isOpen: Z,
                        onDismiss: Q
                    }, c.a.createElement(l.Flex, {
                        flexDirection: "column",
                        alignItems: "stretch",
                        m: 5,
                        width: "100%"
                    }, c.a.createElement(w.c, {
                        textAlign: "center",
                        mb: "5px"
                    }, ee ? "Borrow Balanced Dollars?" : "Repay Balanced Dollars?"), c.a.createElement(w.c, {
                        variant: "p",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 20
                    }, _.dp(2).toFormat(), " bnUSD"), c.a.createElement(l.Flex, {
                        my: 5
                    }, c.a.createElement(l.Box, {
                        width: .5,
                        className: "border-right"
                    }, c.a.createElement(w.c, {
                        textAlign: "center"
                    }, "Before"), c.a.createElement(w.c, {
                        variant: "p",
                        textAlign: "center"
                    }, J.dp(2).toFormat(), " bnUSD")), c.a.createElement(l.Box, {
                        width: .5
                    }, c.a.createElement(w.c, {
                        textAlign: "center"
                    }, "After"), c.a.createElement(w.c, {
                        variant: "p",
                        textAlign: "center"
                    }, $.dp(2).toFormat(), " bnUSD"))), ee && c.a.createElement(w.c, {
                        textAlign: "center"
                    }, "Includes a fee of ", te.dp(2).toFormat(), " bnUSD."), c.a.createElement(l.Flex, {
                        justifyContent: "center",
                        mt: 4,
                        pt: 4,
                        className: "border-top"
                    }, c.a.createElement(E.c, {
                        onClick: Q,
                        fontSize: 14
                    }, "Cancel"), c.a.createElement(E.a, {
                        onClick: function () {
                            n && (T.a.contractSettings.ledgerSettings.actived && r(!0), ee ? T.a.inject({
                                account: n
                            }).Loans.depositAndBorrow(P.h, {
                                asset: "bnUSD",
                                amount: x.a.utils.toLoop(_)
                            }).then((function (e) {
                                ne({
                                    hash: e.result
                                }, {
                                    pending: "Borrowing bnUSD...",
                                    summary: "Borrowed ".concat(_.dp(2).toFormat(), " bnUSD.")
                                }), Q(), S(!1)
                            })).catch((function (e) {
                                console.error("error", e)
                            })).finally((function () {
                                r(!1)
                            })) : T.a.inject({
                                account: n
                            }).Loans.returnAsset("bnUSD", x.a.utils.toLoop(_).abs()).then((function (e) {
                                ne({
                                    hash: e.result
                                }, {
                                    pending: "Repaying bnUSD...",
                                    summary: "Repaid ".concat(_.abs().dp(2).toFormat(), " bnUSD.")
                                }), Q(), S(!1)
                            })).catch((function (e) {
                                console.error("error", e)
                            })).finally((function () {
                                r(!1)
                            })))
                        },
                        fontSize: 14
                    }, ee ? "Borrow" : "Repay")), a && c.a.createElement(h.a, null))))
                },
                J = n(952),
                $ = n.n(J),
                _ = n(938),
                ee = n(296),
                te = n(945);

            function ne () {
                var e = Object(a.a)(["\n  padding: 10px 15px;\n  transition: background-color 0.3s ease;\n\n  :hover {\n    cursor: pointer;\n    background-color: #2ca9b7;\n    transition: background-color 0.2s ease;\n  }\n"]);
                return ne = function () {
                    return e
                }, e
            }

            function ae () {
                var e = Object(a.a)(["\n  list-style-type: none;\n  padding-left: 0;\n  margin: 0;\n  font-size: 14px;\n  user-select: none;\n"]);
                return ae = function () {
                    return e
                }, e
            }
            var re = u.default.ul(ae()),
                ce = u.default.li(ne()),
                oe = n(940),
                ie = n(933);

            function le () {
                var e = Object(a.a)(["\n  left: 66.5%;\n\n  ::after {\n    margin-left: initial;\n  }\n\n  ", " {\n    width: 150px;\n    margin-left: 15px;\n  }\n"]);
                return le = function () {
                    return e
                }, e
            }

            function ue () {
                var e = Object(a.a)(["\n  left: 53.2%;\n  /* text-align: right; */\n\n  ", " {\n    width: 125px;\n    margin-left: -140px;\n  }\n"]);
                return ue = function () {
                    return e
                }, e
            }

            function se () {
                var e = Object(a.a)(["\n  font-size: 14px;\n  margin-top: -10px;\n\n  & dt {\n    line-height: 17px;\n  }\n\n  & dd {\n    margin-inline: 0px;\n  }\n"]);
                return se = function () {
                    return e
                }, e
            }

            function de () {
                var e = Object(a.a)(["\n  color: ", ";\n  position: absolute;\n  width: 1px;\n  height: 50px;\n  margin-top: -34px;\n  background-color: ", ";\n  z-index: 2;\n  transition: color 0.3s ease;\n\n  ::after {\n    position: absolute;\n    content: '';\n    top: 0;\n    width: 10px;\n    height: 1px;\n    margin-left: -10px;\n    background-color: ", ";\n    z-index: 2;\n    transition: height 0.3s ease;\n  }\n"]);
                return de = function () {
                    return e
                }, e
            }

            function fe () {
                var e = Object(a.a)(["\n  border-top-left-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-left: 3px solid #0d2a4d;\n"]);
                return fe = function () {
                    return e
                }, e
            }

            function me () {
                var e = Object(a.a)(["\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: 3px solid #0d2a4d;\n"]);
                return me = function () {
                    return e
                }, e
            }

            function be () {
                var e = Object(a.a)(["\n  display: inline-block;\n  min-width: 82px;\n  text-align: center;\n  border-radius: 100px;\n  padding: 1px 10px;\n  font-size: 11px;\n  font-weight: bold;\n  color: #ffffff;\n  line-height: 14px;\n  height: 16px;\n"]);
                return be = function () {
                    return e
                }, e
            }

            function pe () {
                var e = Object(a.a)(["\n    padding: 0px;\n  "]);
                return pe = function () {
                    return e
                }, e
            }

            function ge () {
                var e = Object(a.a)(["\n    grid-area: initial;\n    flex-direction: column;\n  "]);
                return ge = function () {
                    return e
                }, e
            }

            function xe () {
                var e = Object(a.a)(["\n  padding: 0;\n  grid-area: 2 / 1 / 2 / 3;\n  ", "\n\n  ", "\n"]);
                return xe = function () {
                    return e
                }, e
            }
            var ve;
            ! function (e) {
                e.day = "Day", e.week = "Week", e.month = "Month"
            }(ve || (ve = {}));
            var Ee = [ve.day, ve.week, ve.month],
                he = function () {
                    var e = function () {
                        var e = Object(K.d)();
                        return (Object(oe.g)().Loans || P.h).times(e).div(100)
                    }(),
                        t = Object(K.a)(),
                        n = Object(oe.e)(),
                        a = c.a.useState(!1),
                        r = Object(m.a)(a, 2),
                        o = r[0],
                        i = r[1],
                        u = c.a.useCallback((function () {
                            return i(!0)
                        }), [i]),
                        s = c.a.useCallback((function () {
                            return i(!1)
                        }), [i]),
                        d = Object(Z.c)(),
                        f = Object(K.k)(),
                        b = Object(K.j)(),
                        p = Object(K.f)();
                    c.a.useEffect((function () {
                        p(ve.day)
                    }), [p]);
                    var x = Object(K.g)(),
                        v = Object(K.i)(),
                        E = Object(H.f)(),
                        h = Object(K.d)(),
                        I = c.a.useRef(null),
                        S = function () {
                            var e = Object(H.e)(),
                                t = Object(K.g)();
                            return c.a.useMemo((function () {
                                return e.isZero() ? [new g.a(0), new g.a(0), new g.a(0)] : [t.multipliedBy(P.f).div(e), t.multipliedBy(P.b).div(e), t.multipliedBy(P.a).div(e)]
                            }), [e, t])
                        }(),
                        k = Object(m.a)(S, 3),
                        A = k[0],
                        F = k[1],
                        B = k[2],
                        U = Object(oe.a)(),
                        N = 9e4 / U.toNumber(),
                        X = A.minus(d.ICXUSDratio).isGreaterThan(-.01),
                        R = F.minus(d.ICXUSDratio).isGreaterThan(-.01),
                        L = c.a.useState(null),
                        D = Object(m.a)(L, 2),
                        T = D[0],
                        z = D[1],
                        W = c.a.useRef(null),
                        Y = function () {
                            z(null)
                        },
                        V = c.a.useState(ve.day),
                        G = Object(m.a)(V, 2),
                        q = G[0],
                        Q = G[1];
                    return x.isNegative() || x.isZero() ? null : c.a.createElement(je, {
                        bg: "bg2"
                    }, c.a.createElement(M.a, {
                        bg: "bg3",
                        flex: 1,
                        maxWidth: ["initial", "initial", 350]
                    }, c.a.createElement(w.c, {
                        variant: "h2",
                        mb: 5
                    }, "Position details"), c.a.createElement(l.Flex, null, c.a.createElement(l.Box, {
                        width: .5
                    }, c.a.createElement(w.c, {
                        mb: 1
                    }, "Collateral"), c.a.createElement(w.c, {
                        variant: "p",
                        fontSize: 18
                    }, "$", E.dp(2).toFormat())), c.a.createElement(l.Box, {
                        width: .5
                    }, c.a.createElement(w.c, {
                        mb: 1
                    }, "Loan"), c.a.createElement(w.c, {
                        variant: "p",
                        fontSize: 18,
                        as: "span"
                    }, "$", x.dp(2).toFormat(), " ", c.a.createElement(w.c, {
                        as: "span"
                    }, "/ $", v.dp(2).toFormat())))), c.a.createElement(ee.b, {
                        my: 4
                    }), c.a.createElement(w.c, {
                        mb: 2
                    }, "The current ICX price is", " ", c.a.createElement("span", {
                        className: X ? "alert" : ""
                    }, "$" + d.ICXUSDratio.dp(4).toFormat()), "."), c.a.createElement(w.c, null, "You hold", " ", c.a.createElement("span", {
                        className: "white"
                    }, isNaN(h.toNumber()) ? "-" : h.dp(2).toFormat() + "%"), " ", "of the total debt.")), c.a.createElement(M.a, {
                        bg: "bg2",
                        flex: 1
                    }, c.a.createElement(w.c, {
                        variant: "h3"
                    }, "Risk ratio", " ", c.a.createElement(j.a, {
                        onClick: u,
                        onMouseEnter: u,
                        onMouseLeave: s
                    }, c.a.createElement(y.a, {
                        width: 14,
                        style: {
                            marginTop: -5
                        }
                    }))), c.a.createElement(l.Flex, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        mt: [10, 10, 10, 10, 5],
                        mb: 4
                    }, c.a.createElement(O.b, {
                        text: "If the bar only fills this section, you have a low risk of liquidation.",
                        show: o,
                        placement: "bottom"
                    }, c.a.createElement(we, {
                        bg: "primary",
                        style: {
                            backgroundImage: "linear-gradient(to right, #2ca9b7 " + N + "%, #144a68 " + N + "%)"
                        }
                    }, "Low risk")), c.a.createElement(l.Box, {
                        flex: 1,
                        style: {
                            position: "relative"
                        }
                    }, c.a.createElement(Se, {
                        warned: X
                    }, c.a.createElement(Ie, {
                        as: "dl",
                        style: {
                            textAlign: "right"
                        }
                    }, c.a.createElement(O.b, {
                        text: "You won\u2019t earn any Balance Tokens if you go beyond this threshold.",
                        show: o,
                        placement: "top-end"
                    }, c.a.createElement("dt", null, "Reward threshold")), c.a.createElement("dd", null, "$", A.toFixed(3)))), c.a.createElement(ke, {
                        warned: R
                    }, c.a.createElement(Ie, {
                        as: "dl",
                        style: {
                            textAlign: "left"
                        }
                    }, c.a.createElement(O.b, {
                        text: "You can\u2019t withdraw any collateral if you go beyond this threshold.",
                        show: o,
                        placement: "top-start"
                    }, c.a.createElement("dt", null, "All collateral locked")), c.a.createElement("dd", null, "$", F.toFixed(3)))), c.a.createElement($.a, {
                        disabled: !0,
                        id: "slider-risk",
                        direction: "rtl",
                        start: [Math.min(U.toNumber(), 900)],
                        connect: [!0, !1],
                        range: {
                            min: [150],
                            max: [900]
                        },
                        instanceRef: function (e) {
                            e && !I.current && (I.current = e)
                        },
                        style: {
                            height: 16
                        }
                    })), c.a.createElement(O.b, {
                        text: "If the ICX price reaches $".concat(B.toFixed(3), ", \n                    your collateral will be liquidated."),
                        show: o,
                        placement: "bottom"
                    }, c.a.createElement(ye, {
                        bg: "#fb6a6a"
                    }, "Liquidated"))), c.a.createElement(ee.b, {
                        my: 3
                    }), c.a.createElement(l.Flex, {
                        flexWrap: "wrap",
                        alignItems: "flex-end"
                    }, c.a.createElement(l.Box, {
                        width: [1, .5]
                    }, c.a.createElement(l.Flex, {
                        alignItems: "center",
                        mb: 15
                    }, c.a.createElement(w.c, {
                        variant: "h3",
                        mr: 15
                    }, "Rebalancing", " ", c.a.createElement(O.a, {
                        text: "Traders can repay loans by selling bnUSD for $1 of ICX collateral. Your position will sometimes rebalance to accommodate.",
                        placement: "top"
                    }, c.a.createElement(y.a, {
                        width: 14,
                        style: {
                            marginTop: -5
                        }
                    }))), c.a.createElement(_.a, {
                        onClickAway: Y
                    }, c.a.createElement("div", null, c.a.createElement(te.c, {
                        onClick: function (e) {
                            z(T ? null : W.current)
                        },
                        text: "Past ".concat(q.toLowerCase()),
                        arrowRef: W
                    }), c.a.createElement(ie.a, {
                        show: Boolean(T),
                        anchorEl: T,
                        placement: "bottom-end"
                    }, c.a.createElement(re, null, Ee.map((function (e) {
                        return c.a.createElement(ce, {
                            key: e,
                            onClick: function () {
                                return function (e) {
                                    Y(), Q(e), p(e)
                                }(e)
                            }
                        }, e)
                    }))))))), c.a.createElement(l.Flex, null, c.a.createElement(l.Box, {
                        width: .5
                    }, c.a.createElement(w.c, {
                        variant: "p"
                    }, Object(C.b)(b, "currency"), " ICX"), c.a.createElement(w.c, null, "Collateral sold")), c.a.createElement(l.Box, {
                        width: .5
                    }, c.a.createElement(w.c, {
                        variant: "p"
                    }, Object(C.b)(f, "currency"), " bnUSD"), c.a.createElement(w.c, null, "Loan repaid")))), c.a.createElement(l.Box, {
                        width: [1, .5]
                    }, c.a.createElement(l.Flex, {
                        alignItems: "center",
                        mb: 15
                    }, c.a.createElement(w.c, {
                        variant: "h3",
                        mr: 15
                    }, "Expected return")), c.a.createElement(l.Flex, null, c.a.createElement(l.Box, {
                        width: .5
                    }, c.a.createElement(w.c, {
                        variant: "p"
                    }, n ? "~ ".concat(e.dp(2).toFormat(), " BALN") : "-"), c.a.createElement(w.c, null, "Daily rewards")), c.a.createElement(l.Box, {
                        width: .5
                    }, c.a.createElement(w.c, {
                        variant: "p",
                        color: n ? "white" : "alert"
                    }, t ? t.times(100).dp(2).toFormat() : "-", "%"), c.a.createElement(w.c, null, "APY")))))))
                },
                je = Object(u.default)(M.b)(xe(), (function (e) {
                    return e.theme.mediaWidth.upToSmall(ge())
                }), (function (e) {
                    return e.theme.mediaWidth.upToExtraSmall(pe())
                })),
                Oe = Object(u.default)(l.Box)(be()),
                we = Object(u.default)(Oe)(me()),
                ye = Object(u.default)(Oe)(fe()),
                Ce = Object(u.default)(l.Box)(de(), (function (e) {
                    return e.warned ? "#fb6a6a" : "#ffffff"
                }), (function (e) {
                    return e.warned ? "#fb6a6a" : "#ffffff"
                }), (function (e) {
                    return e.warned ? "#fb6a6a" : "#ffffff"
                })),
                Ie = Object(u.default)(l.Box)(se()),
                Se = Object(u.default)(Ce)(ue(), Ie),
                ke = Object(u.default)(Ce)(le(), Ie),
                Ae = n(929);

            function Fe () {
                var e = Object(a.a)(["\n  align-items: flex-start;\n  justify-content: space-between;\n"]);
                return Fe = function () {
                    return e
                }, e
            }

            function Be () {
                var e = Object(a.a)(["\n  display: grid;\n  grid-template-rows: auto;\n  grid-gap: 20px;\n"]);
                return Be = function () {
                    return e
                }, e
            }
            var Ue = function () {
                var e = Object(o.d)().account,
                    t = Object(Ae.b)(),
                    n = Object(V.c)(),
                    a = Object(W.a)(),
                    r = t.BALNreward,
                    i = Object(Z.c)(),
                    u = r.multipliedBy(i.BALNbnUSDratio),
                    s = Object(oe.e)(),
                    d = Object(oe.d)(),
                    f = Object(oe.c)(),
                    b = c.a.useState(!1),
                    p = Object(m.a)(b, 2),
                    g = p[0],
                    x = p[1],
                    v = function () {
                        x(!g)
                    };
                return s || d ? c.a.createElement("div", null, c.a.createElement(M.a, {
                    bg: "bg2"
                }, c.a.createElement(w.c, {
                    variant: "h2",
                    mb: 5
                }, "Rewards"), c.a.createElement(Ne, null, c.a.createElement(Xe, null, c.a.createElement(w.c, {
                    variant: "p"
                }, "Balance Tokens"), c.a.createElement(w.c, {
                    variant: "p"
                }, e ? r.isZero() ? "Pending" : "".concat(r.dp(2).toFormat(), " BALN") : "-")), c.a.createElement(Xe, null, c.a.createElement(w.c, {
                    variant: "p"
                }, "Network fees"), c.a.createElement(w.c, {
                    variant: "p"
                }, e ? f ? "Eligible" : "Ineligible" : "-")), !r.isZero() && c.a.createElement(c.a.Fragment, null, c.a.createElement(ee.b, null), c.a.createElement(Xe, null, c.a.createElement(w.c, {
                    variant: "p",
                    fontWeight: "bold"
                }, "Total"), c.a.createElement(w.c, {
                    variant: "p",
                    fontWeight: "bold"
                }, "$".concat(u.dp(2).toFormat()))))), !r.isZero() && c.a.createElement(l.Flex, {
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 3
                }, c.a.createElement(E.a, {
                    onClick: function () {
                        e && (T.a.contractSettings.ledgerSettings.actived && a(!0), T.a.inject({
                            account: e
                        }).Rewards.claimRewards().then((function (e) {
                            n({
                                hash: e.result
                            }, {
                                summary: "Claimed ".concat(r.dp(2).toFormat(), " BALN."),
                                pending: "Claiming rewards..."
                            }), v()
                        })).catch((function (e) {
                            console.error("error", e)
                        })).finally((function () {
                            a(!1)
                        })))
                    }
                }, "Claim rewards"))), c.a.createElement(D.a, {
                    isOpen: g,
                    onDismiss: v
                }, c.a.createElement(l.Flex, {
                    flexDirection: "column",
                    alignItems: "stretch",
                    m: 5,
                    width: "100%"
                }, c.a.createElement(w.c, {
                    textAlign: "center",
                    mb: 1
                }, "Stake new Balance Tokens"), c.a.createElement(w.c, {
                    variant: "p",
                    textAlign: "center",
                    fontSize: 19,
                    mb: 3
                }, "Stake your new BALN from your wallet to accrue rewards from network fees*."), c.a.createElement(w.c, {
                    textAlign: "center"
                }, "*Must borrow at least 50 bnUSD and keep your risk below the reward threshold."), c.a.createElement(l.Flex, {
                    justifyContent: "center",
                    mt: 4,
                    pt: 4,
                    className: "border-top"
                }, c.a.createElement(E.a, {
                    onClick: v,
                    fontSize: 14
                }, "Close"))))) : c.a.createElement("div", null, c.a.createElement(M.b, {
                    bg: "bg2",
                    flexDirection: "column"
                }, c.a.createElement(w.c, {
                    variant: "h2",
                    mb: 5
                }, "Rewards"), c.a.createElement(l.Flex, {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: 100
                }, c.a.createElement(w.c, {
                    textAlign: "center"
                }, "To earn Balanced rewards, take out a loan ", c.a.createElement("br", null), "or supply liquidity on the Trade page."))))
            },
                Ne = u.default.div(Be()),
                Xe = Object(u.default)(l.Flex)(Fe()),
                Re = n(991),
                Le = n(956),
                De = (n(992), n(954)),
                Me = n(298);

            function Te () {
                var e = Object(a.a)(["\n  cursor: pointer;\n"]);
                return Te = function () {
                    return e
                }, e
            }

            function ze () {
                var e = Object(a.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  row-gap: 15px;\n"]);
                return ze = function () {
                    return e
                }, e
            }

            function Pe () {
                var e = Object(a.a)(["\n  &[data-reach-tab] {\n    box-sizing: border-box;\n    padding: 10px 15px;\n    padding-top: 0;\n    margin-right: 15px;\n    border-bottom: 3px solid #144a68;\n    color: rgba(255, 255, 255, 0.75);\n    background-color: transparent;\n    transition: border-bottom 0.3s ease, color 0.3s ease;\n\n    &[data-selected] {\n      border-bottom: 3px solid #2ca9b7;\n      color: #ffffff;\n      transition: border-bottom 0.2s ease, color 0.2s ease;\n    }\n\n    :hover {\n      border-bottom: 3px solid #2ca9b7;\n      color: #ffffff;\n      transition: border-bottom 0.2s ease, color 0.2s ease;\n    }\n  }\n"]);
                return Pe = function () {
                    return e
                }, e
            }

            function We () {
                var e = Object(a.a)(["\n  &[data-reach-tab-list] {\n    width: 100%;\n    background: transparent;\n  }\n"]);
                return We = function () {
                    return e
                }, e
            }
            var Ye = Object(u.default)(De.b)(We()),
                He = Object(u.default)(De.a)(Pe()),
                Ke = u.default.div(ze()),
                Ze = Object(u.default)(Me.a)(Te()),
                Ve = n(299);

            function Ge () {
                var e = Object(a.a)(["\n  flex: 1;\n  width: 100%;\n  height: 43px;\n  text-align: right;\n  border-radius: 0 10px 10px 0;\n  border: 2px solid #0c2a4d;\n  background-color: #0c2a4d;\n  color: #ffffff;\n  padding: 7px 20px;\n  outline: none;\n  transition: border 0.3s ease;\n  overflow: visible;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.15;\n  margin: 0;\n\n  :hover,\n  :focus {\n    border: 2px solid #2ca9b7;\n  }\n"]);
                return Ge = function () {
                    return e
                }, e
            }

            function qe () {
                var e = Object(a.a)(["\n  border: 2px solid #0b284c;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n  background-color: #0b284c;\n  display: flex;\n  align-items: center;\n  width: 120px;\n  height: 43px;\n  padding: 4px 15px;\n  color: #ffffff;\n  border-radius: 10px 0 0 10px;\n  transition: border 0.3s ease, background-color 0.3s ease, color 0.3s ease;\n  font-size: 14px;\n  font-weight: bold;\n  justify-content: center;\n"]);
                return qe = function () {
                    return e
                }, e
            }

            function Qe () {
                var e = Object(a.a)(["\n  display: inline-flex;\n  width: 100%;\n"]);
                return Qe = function () {
                    return e
                }, e
            }
            var Je = u.default.div(Qe()),
                $e = u.default.button(qe()),
                _e = u.default.input(Ge());

            function et (e) {
                var t = e.value,
                    n = e.onUserInput;
                return c.a.createElement(Je, null, c.a.createElement($e, null, "Address"), c.a.createElement(_e, {
                    value: t,
                    onChange: function (e) {
                        return n(e.target.value)
                    }
                }))
            }
            var tt = n(941);

            function nt () {
                var e = c.a.useState(""),
                    t = Object(m.a)(e, 2),
                    n = t[0],
                    a = t[1],
                    r = c.a.useState(""),
                    i = Object(m.a)(r, 2),
                    u = i[0],
                    s = i[1],
                    d = Object(o.d)().account,
                    f = Object(Ae.b)(),
                    b = Object(Ae.a)()["Available balance"] || new g.a(0),
                    p = c.a.useState(!1),
                    v = Object(m.a)(p, 2),
                    h = v[0],
                    j = v[1],
                    O = function () {
                        j(!h)
                    },
                    y = f.BALN,
                    C = isNaN(parseFloat(n)) ? new g.a(0) : new g.a(n),
                    I = y.minus(C),
                    S = Object(V.c)(),
                    k = !Object(Ve.a)(u) || C.isNegative() || C.isZero() || C.isGreaterThan(b);
                return c.a.createElement(c.a.Fragment, null, c.a.createElement(Ke, null, c.a.createElement(l.Flex, {
                    alignItems: "center",
                    justifyContent: "space-between"
                }, c.a.createElement(w.c, {
                    variant: "h3"
                }, "Send BALN"), c.a.createElement(Ze, {
                    onClick: function () {
                        a(b.toFixed())
                    }
                }, "Send max")), c.a.createElement(tt.a, {
                    value: n,
                    showMaxButton: !1,
                    currency: z.c.baln,
                    onUserInput: function (e) {
                        a(e)
                    },
                    id: "baln-currency-input-in-baln-wallet"
                }), c.a.createElement(et, {
                    value: u,
                    onUserInput: function (e) {
                        s(e)
                    }
                })), c.a.createElement(l.Flex, {
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 5
                }, c.a.createElement(E.a, {
                    onClick: O,
                    disabled: k
                }, "Send")), c.a.createElement(D.a, {
                    isOpen: h,
                    onDismiss: O
                }, c.a.createElement(l.Flex, {
                    flexDirection: "column",
                    alignItems: "stretch",
                    m: 5,
                    width: "100%"
                }, c.a.createElement(w.c, {
                    textAlign: "center",
                    mb: "5px"
                }, "Send asset?"), c.a.createElement(w.c, {
                    variant: "p",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 20
                }, C.dp(2).toFormat() + " BALN"), c.a.createElement(w.c, {
                    textAlign: "center",
                    mb: "2px",
                    mt: "20px"
                }, "Address"), c.a.createElement(w.c, {
                    variant: "p",
                    textAlign: "center",
                    mr: "30px",
                    ml: "30px",
                    fontSize: 16
                }, u), c.a.createElement(l.Flex, {
                    my: 5
                }, c.a.createElement(l.Box, {
                    width: .5,
                    className: "border-right"
                }, c.a.createElement(w.c, {
                    textAlign: "center"
                }, "Before"), c.a.createElement(w.c, {
                    variant: "p",
                    textAlign: "center"
                }, y.dp(2).toFormat() + " BALN")), c.a.createElement(l.Box, {
                    width: .5
                }, c.a.createElement(w.c, {
                    textAlign: "center"
                }, "After"), c.a.createElement(w.c, {
                    variant: "p",
                    textAlign: "center"
                }, I.dp(2).toFormat() + " BALN"))), c.a.createElement(l.Flex, {
                    justifyContent: "center",
                    mt: 4,
                    pt: 4,
                    className: "border-top"
                }, c.a.createElement(E.c, {
                    onClick: O,
                    fontSize: 14
                }, "Cancel"), c.a.createElement(E.a, {
                    onClick: function () {
                        T.a.inject({
                            account: d
                        }).BALN.transfer(u, x.a.utils.toLoop(C)).then((function (e) {
                            e.result ? (S({
                                hash: e.result
                            }, {
                                pending: "Sending BALN...",
                                summary: "Sent ".concat(C.dp(2).toFormat(), " BALN.")
                            }), O(), a(""), s("")) : console.error(e)
                        }))
                    },
                    fontSize: 14
                }, "Send")))))
            }
            var at = c.a.memo((function () {
                var e = Object(Ae.a)(),
                    t = Object(W.d)(),
                    n = Object(W.a)(),
                    a = c.a.useMemo((function () {
                        return e["Total balance"] || P.h
                    }), [e]),
                    r = c.a.useMemo((function () {
                        return e["Staked balance"] || P.h
                    }), [e]),
                    i = c.a.useState(!1),
                    u = Object(m.a)(i, 2),
                    s = u[0],
                    d = u[1],
                    f = function () {
                        d(!1)
                    },
                    b = c.a.useState(a.isZero() ? P.h : r.dividedBy(a).times(100)),
                    p = Object(m.a)(b, 2),
                    v = p[0],
                    j = p[1],
                    O = c.a.useCallback((function (e, t) {
                        j(new g.a(e[t]))
                    }), [j]);
                c.a.useEffect((function () {
                    s || j(a.isZero() ? P.h : r.dividedBy(a).multipliedBy(100))
                }), [r, s, a]);
                var y = c.a.useState(!1),
                    C = Object(m.a)(y, 2),
                    I = C[0],
                    S = C[1],
                    k = function () {
                        S(!I)
                    },
                    A = r,
                    F = v.multipliedBy(a).div(100),
                    B = F.minus(A),
                    U = B.isPositive(),
                    N = Object(V.c)(),
                    X = Object(o.d)().account;
                return c.a.createElement(c.a.Fragment, null, c.a.createElement(w.c, {
                    variant: "h3"
                }, "Stake Balance Tokens"), c.a.createElement(w.c, {
                    my: 1
                }, "Stake your Balance Tokens to earn network fees."), c.a.createElement(l.Box, {
                    my: 3
                }, c.a.createElement($.a, {
                    disabled: !s,
                    id: "slider-collateral",
                    start: [r.dividedBy(a).multipliedBy(100).dp(2).toNumber()],
                    padding: [0],
                    connect: [!0, !1],
                    range: {
                        min: [0],
                        max: [a.dp(2).isZero() ? P.g : 100]
                    },
                    onSlide: O
                })), c.a.createElement(l.Flex, {
                    my: 1,
                    alignItems: "center",
                    justifyContent: "space-between"
                }, c.a.createElement(w.c, null, v.multipliedBy(a).div(100).dp(2).toFormat(), " / ", a.dp(2).toFormat()), c.a.createElement(w.c, null, v.dp(2, g.a.ROUND_UP).toFormat(), "% staked")), c.a.createElement(l.Flex, {
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 5
                }, s ? c.a.createElement(c.a.Fragment, null, c.a.createElement(E.c, {
                    onClick: f
                }, "Cancel"), c.a.createElement(E.a, {
                    onClick: k
                }, "Confirm")) : c.a.createElement(E.a, {
                    onClick: function () {
                        d(!0)
                    }
                }, "Adjust")), c.a.createElement(D.a, {
                    isOpen: I,
                    onDismiss: k
                }, c.a.createElement(l.Flex, {
                    flexDirection: "column",
                    alignItems: "stretch",
                    m: 5,
                    width: "100%"
                }, c.a.createElement(w.c, {
                    textAlign: "center",
                    mb: "5px"
                }, U ? "Stake Balance Tokens?" : "Unstake Balance Tokens?"), c.a.createElement(w.c, {
                    variant: "p",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 20
                }, B.dp(2).toFormat() + " BALN"), c.a.createElement(l.Flex, {
                    my: 5
                }, c.a.createElement(l.Box, {
                    width: .5,
                    className: "border-right"
                }, c.a.createElement(w.c, {
                    textAlign: "center"
                }, "Before"), c.a.createElement(w.c, {
                    variant: "p",
                    textAlign: "center"
                }, A.dp(2).toFormat() + " BALN")), c.a.createElement(l.Box, {
                    width: .5
                }, c.a.createElement(w.c, {
                    textAlign: "center"
                }, "After"), c.a.createElement(w.c, {
                    variant: "p",
                    textAlign: "center"
                }, F.dp(2).toFormat() + " BALN"))), c.a.createElement(w.c, {
                    textAlign: "center"
                }, U ? "Unstaking takes 3 days." : "You'll receive them within 3 days."), c.a.createElement(l.Flex, {
                    justifyContent: "center",
                    mt: 4,
                    pt: 4,
                    className: "border-top"
                }, c.a.createElement(E.c, {
                    onClick: k,
                    fontSize: 14
                }, "Cancel"), c.a.createElement(E.a, {
                    onClick: function () {
                        T.a.contractSettings.ledgerSettings.actived && n(!0), T.a.inject({
                            account: X
                        }).BALN.stake(x.a.utils.toLoop(F)).then((function (e) {
                            e.result ? (N({
                                hash: e.result
                            }, U ? {
                                pending: "Staking BALN tokens...",
                                summary: "Staked ".concat(B.abs().dp(2).toFormat(), " BALN tokens.")
                            } : {
                                pending: "Unstaking BALN tokens...",
                                summary: "Unstaked ".concat(B.abs().dp(2).toFormat(), " BALN tokens.")
                            }), k(), f()) : console.error(e)
                        })).finally((function () {
                            n(!1)
                        }))
                    },
                    fontSize: 14
                }, U ? "Stake" : "Unstake"), t && c.a.createElement(h.a, null)))))
            }));

            function rt () {
                var e = Object(Ae.a)()["Unstaking balance"] || new g.a(0);
                return c.a.createElement(c.a.Fragment, null, c.a.createElement(Ke, null, c.a.createElement(w.c, {
                    variant: "h3"
                }, "Unstaking"), e.isZero() ? c.a.createElement(w.c, null, "There's no BALN unstaking.") : c.a.createElement(c.a.Fragment, null, c.a.createElement(w.c, null, "Your BALN will unstake within 3 days."), c.a.createElement(w.c, {
                    variant: "p"
                }, e.dp(2).toFormat(), " BALN unstaking"))))
            }
            var ct = n(116);

            function ot () {
                var e = c.a.useState(P.h),
                    t = Object(m.a)(e, 2),
                    n = t[0],
                    a = t[1],
                    r = Object(W.d)(),
                    i = Object(W.a)(),
                    u = c.a.useRef(null),
                    s = Object(o.d)().account,
                    d = Object(Ae.b)(),
                    f = Object(Z.c)(),
                    b = d.sICX,
                    p = c.a.useState(!1),
                    v = Object(m.a)(p, 2),
                    j = v[0],
                    O = v[1],
                    y = function () {
                        O(!j)
                    },
                    C = d.sICX,
                    I = b.times(n),
                    S = C.minus(I),
                    k = Object(V.c)(),
                    A = I.multipliedBy(f.sICXICXratio);
                return c.a.createElement(c.a.Fragment, null, c.a.createElement(w.c, {
                    variant: "h3"
                }, "Deposit as collateral"), c.a.createElement(w.c, {
                    my: 1
                }, "Add your sICX to the collateral pool."), c.a.createElement(l.Box, {
                    my: 3
                }, c.a.createElement($.a, {
                    disabled: b.isZero(),
                    start: [0],
                    padding: [0],
                    connect: [!0, !1],
                    range: {
                        min: [0],
                        max: [b.isZero() ? P.g : 100]
                    },
                    onSlide: function (e, t) {
                        a(new g.a(e[t]).div(100))
                    },
                    instanceRef: function (e) {
                        e && !u.current && (u.current = e)
                    }
                })), c.a.createElement(l.Flex, {
                    my: 1,
                    alignItems: "center",
                    justifyContent: "space-between"
                }, c.a.createElement(w.c, null, I.dp(2).toFormat(), " / ", b.dp(2).toFormat(), " sICX"), c.a.createElement(w.c, null, "~ ", A.dp(2).toFormat(), " ICX")), c.a.createElement(l.Flex, {
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 5
                }, c.a.createElement(E.a, {
                    onClick: y
                }, "Deposit sICX")), c.a.createElement(D.a, {
                    isOpen: j,
                    onDismiss: y
                }, c.a.createElement(l.Flex, {
                    flexDirection: "column",
                    alignItems: "stretch",
                    m: 5,
                    width: "100%"
                }, c.a.createElement(w.c, {
                    textAlign: "center",
                    mb: "5px"
                }, "Deposit sICX collateral?"), c.a.createElement(w.c, {
                    variant: "p",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 20
                }, I.dp(2).toFormat() + " sICX"), c.a.createElement(w.c, {
                    textAlign: "center",
                    mb: "5px"
                }, A.dp(2).toFormat(), " ICX"), c.a.createElement(l.Flex, {
                    my: 5
                }, c.a.createElement(l.Box, {
                    width: .5,
                    className: "border-right"
                }, c.a.createElement(w.c, {
                    textAlign: "center"
                }, "Before"), c.a.createElement(w.c, {
                    variant: "p",
                    textAlign: "center"
                }, C.dp(2).toFormat() + " sICX")), c.a.createElement(l.Box, {
                    width: .5
                }, c.a.createElement(w.c, {
                    textAlign: "center"
                }, "After"), c.a.createElement(w.c, {
                    variant: "p",
                    textAlign: "center"
                }, S.dp(2).toFormat() + " sICX"))), c.a.createElement(l.Flex, {
                    justifyContent: "center",
                    mt: 4,
                    pt: 4,
                    className: "border-top"
                }, c.a.createElement(E.c, {
                    onClick: y,
                    fontSize: 14
                }, "Cancel"), c.a.createElement(E.a, {
                    onClick: function () {
                        T.a.contractSettings.ledgerSettings.actived && i(!0), T.a.inject({
                            account: s
                        }).sICX.depositAndBorrow(x.a.utils.toLoop(I)).then((function (e) {
                            var t;
                            e.result ? (k({
                                hash: e.result
                            }, {
                                pending: "Depositing collateral...",
                                summary: "Deposited ".concat(I.dp(2).toFormat(), " sICX as collateral.")
                            }), y(), a(P.h), null === u || void 0 === u || null === (t = u.current) || void 0 === t || t.noUiSlider.set(0)) : console.error(e)
                        })).finally((function () {
                            i(!1)
                        }))
                    },
                    fontSize: 14
                }, "Deposit")), r && c.a.createElement(h.a, null))))
            }

            function it () {
                var e = c.a.useState(""),
                    t = Object(m.a)(e, 2),
                    n = t[0],
                    a = t[1],
                    r = Object(W.d)(),
                    i = Object(W.a)(),
                    u = c.a.useState(""),
                    s = Object(m.a)(u, 2),
                    d = s[0],
                    f = s[1],
                    b = Object(o.d)().account,
                    p = Object(Ae.b)(),
                    v = p.sICX,
                    j = c.a.useState(!1),
                    O = Object(m.a)(j, 2),
                    y = O[0],
                    C = O[1],
                    I = function () {
                        C(!y)
                    },
                    S = p.sICX,
                    k = isNaN(parseFloat(n)) ? new g.a(0) : new g.a(n),
                    A = S.minus(k),
                    F = Object(V.c)(),
                    B = !Object(Ve.a)(d) || k.isNegative() || k.isZero() || k.isGreaterThan(v);
                return c.a.createElement(c.a.Fragment, null, c.a.createElement(Ke, null, c.a.createElement(l.Flex, {
                    alignItems: "center",
                    justifyContent: "space-between"
                }, c.a.createElement(w.c, {
                    variant: "h3"
                }, "Send sICX"), c.a.createElement(Ze, {
                    onClick: function () {
                        a(v.toFixed())
                    }
                }, "Send max")), c.a.createElement(tt.a, {
                    value: n,
                    showMaxButton: !1,
                    currency: z.c.sicx,
                    onUserInput: function (e) {
                        a(e)
                    },
                    id: "sicx-currency-input-in-sicx-wallet"
                }), c.a.createElement(et, {
                    value: d,
                    onUserInput: function (e) {
                        f(e)
                    }
                })), c.a.createElement(l.Flex, {
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 5
                }, c.a.createElement(E.a, {
                    onClick: I,
                    disabled: B
                }, "Send")), c.a.createElement(D.a, {
                    isOpen: y,
                    onDismiss: I
                }, c.a.createElement(l.Flex, {
                    flexDirection: "column",
                    alignItems: "stretch",
                    m: 5,
                    width: "100%"
                }, c.a.createElement(w.c, {
                    textAlign: "center",
                    mb: "5px"
                }, "Send asset?"), c.a.createElement(w.c, {
                    variant: "p",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 20
                }, k.dp(2).toFormat() + " sICX"), c.a.createElement(w.c, {
                    textAlign: "center",
                    mb: "2px",
                    mt: "20px"
                }, "Address"), c.a.createElement(w.c, {
                    variant: "p",
                    textAlign: "center",
                    mr: "30px",
                    ml: "30px",
                    fontSize: 16
                }, d), c.a.createElement(l.Flex, {
                    my: 5
                }, c.a.createElement(l.Box, {
                    width: .5,
                    className: "border-right"
                }, c.a.createElement(w.c, {
                    textAlign: "center"
                }, "Before"), c.a.createElement(w.c, {
                    variant: "p",
                    textAlign: "center"
                }, S.dp(2).toFormat() + " sICX")), c.a.createElement(l.Box, {
                    width: .5
                }, c.a.createElement(w.c, {
                    textAlign: "center"
                }, "After"), c.a.createElement(w.c, {
                    variant: "p",
                    textAlign: "center"
                }, A.dp(2).toFormat() + " sICX"))), c.a.createElement(l.Flex, {
                    justifyContent: "center",
                    mt: 4,
                    pt: 4,
                    className: "border-top"
                }, c.a.createElement(E.c, {
                    onClick: I,
                    fontSize: 14
                }, "Cancel"), c.a.createElement(E.a, {
                    onClick: function () {
                        T.a.contractSettings.ledgerSettings.actived && i(!0), T.a.inject({
                            account: b
                        }).sICX.transfer(d, x.a.utils.toLoop(k)).then((function (e) {
                            e.result ? (F({
                                hash: e.result
                            }, {
                                pending: "Sending sICX...",
                                summary: "Sent ".concat(k.dp(2).toFormat(), " sICX to ").concat(d, ".")
                            }), I(), a(""), f("")) : console.error(e)
                        })).finally((function () {
                            i(!1)
                        }))
                    },
                    fontSize: 14
                }, "Send")), r && c.a.createElement(h.a, null))))
            }

            function lt () {
                var e = c.a.useState(P.h),
                    t = Object(m.a)(e, 2),
                    n = t[0],
                    a = t[1],
                    r = Object(W.d)(),
                    i = Object(W.a)(),
                    u = c.a.useRef(null),
                    s = Object(o.d)().account,
                    d = Object(Ae.b)(),
                    f = Object(Z.c)(),
                    b = d.sICX,
                    p = c.a.useState(!1),
                    v = Object(m.a)(p, 2),
                    j = v[0],
                    O = v[1],
                    y = function () {
                        O(!j)
                    },
                    C = d.sICX,
                    I = d.sICX.times(n),
                    S = C.minus(I),
                    k = Object(V.c)(),
                    A = I.multipliedBy(f.sICXICXratio);
                return c.a.createElement(c.a.Fragment, null, c.a.createElement(w.c, {
                    variant: "h3"
                }, "Unstake sICX"), c.a.createElement(l.Box, {
                    my: 3
                }, c.a.createElement($.a, {
                    disabled: b.isZero(),
                    start: [0],
                    padding: [0],
                    connect: [!0, !1],
                    range: {
                        min: [0],
                        max: [b.isZero() ? P.g : 100]
                    },
                    onSlide: function (e, t) {
                        a(new g.a(e[t]).div(100))
                    },
                    instanceRef: function (e) {
                        e && !u.current && (u.current = e)
                    }
                })), c.a.createElement(l.Flex, {
                    my: 1,
                    alignItems: "center",
                    justifyContent: "space-between"
                }, c.a.createElement(w.c, null, I.dp(2).toFormat(), " / ", b.dp(2).toFormat(), " sICX"), c.a.createElement(w.c, null, "~ ", A.dp(2).toFormat(), " ICX")), c.a.createElement(l.Flex, {
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 5
                }, c.a.createElement(E.a, {
                    onClick: y
                }, "Unstake sICX")), c.a.createElement(D.a, {
                    isOpen: j,
                    onDismiss: y
                }, c.a.createElement(l.Flex, {
                    flexDirection: "column",
                    alignItems: "stretch",
                    m: 5,
                    width: "100%"
                }, c.a.createElement(w.c, {
                    textAlign: "center",
                    mb: "5px"
                }, "Unstake sICX?"), c.a.createElement(w.c, {
                    variant: "p",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 20
                }, I.dp(2).toFormat() + " sICX"), c.a.createElement(w.c, {
                    textAlign: "center",
                    mb: "5px"
                }, A.dp(2).toFormat(), " ICX"), c.a.createElement(l.Flex, {
                    my: 5
                }, c.a.createElement(l.Box, {
                    width: .5,
                    className: "border-right"
                }, c.a.createElement(w.c, {
                    textAlign: "center"
                }, "Before"), c.a.createElement(w.c, {
                    variant: "p",
                    textAlign: "center"
                }, C.dp(2).toFormat() + " sICX")), c.a.createElement(l.Box, {
                    width: .5
                }, c.a.createElement(w.c, {
                    textAlign: "center"
                }, "After"), c.a.createElement(w.c, {
                    variant: "p",
                    textAlign: "center"
                }, S.dp(2).toFormat() + " sICX"))), c.a.createElement(w.c, {
                    textAlign: "center"
                }, "You'll receive ICX as soon as it becomes available.", c.a.createElement("br", null), "Track the unstaking progress from the ICX tab."), c.a.createElement(l.Flex, {
                    justifyContent: "center",
                    mt: 4,
                    pt: 4,
                    className: "border-top"
                }, c.a.createElement(E.c, {
                    onClick: y,
                    fontSize: 14
                }, "Cancel"), c.a.createElement(E.a, {
                    onClick: function () {
                        T.a.contractSettings.ledgerSettings.actived && i(!0), T.a.inject({
                            account: s
                        }).sICX.unstake(x.a.utils.toLoop(I)).then((function (e) {
                            var t;
                            e.result ? (k({
                                hash: e.result
                            }, {
                                pending: "Preparing to unstake sICX...",
                                summary: "Unstaking ".concat(I.dp(2).toFormat(), " sICX. Check ICX in your wallet for details.")
                            }), y(), a(P.h), null === u || void 0 === u || null === (t = u.current) || void 0 === t || t.noUiSlider.set(0)) : console.error(e)
                        })).finally((function () {
                            i(!1)
                        }))
                    },
                    fontSize: 14
                }, "Unstake")), r && c.a.createElement(h.a, null))))
            }

            function ut () {
                var e = Object(a.a)([""]);
                return ut = function () {
                    return e
                }, e
            }

            function st () {
                var e = Object(a.a)(["\n  width: 100%;\n  appearance: none;\n  background: 0;\n  border: 0;\n  box-shadow: none;\n  padding: 0;\n\n  &[aria-expanded='true'] {\n    & > ", " {\n      color: #2ca9b7;\n      border-bottom: none;\n    }\n  }\n"]);
                return st = function () {
                    return e
                }, e
            }

            function dt () {
                var e = Object(a.a)(["\n  -webkit-overflow-scrolling: touch;\n"]);
                return dt = function () {
                    return e
                }, e
            }

            function ft () {
                var e = Object(a.a)(["\n  padding: 20px 0;\n  cursor: pointer;\n  color: #ffffff;\n  border-bottom: ", ";\n\n  :hover {\n    color: #2ca9b7;\n    transition: color 0.2s ease;\n  }\n"]);
                return ft = function () {
                    return e
                }, e
            }

            function mt () {
                var e = Object(a.a)(["\n  font-size: 16px;\n"]);
                return mt = function () {
                    return e
                }, e
            }

            function bt () {
                var e = Object(a.a)(["\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n"]);
                return bt = function () {
                    return e
                }, e
            }

            function pt () {
                var e = Object(a.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-areas: 'asset balance value';\n  align-items: center;\n\n  & > * {\n    justify-content: flex-end;\n    text-align: right;\n\n    &:first-child {\n      justify-content: flex-start;\n      text-align: left;\n    }\n  }\n"]);
                return pt = function () {
                    return e
                }, e
            }

            function gt () {
                var e = Object(a.a)(["\n  display: grid;\n  grid-column-gap: 12px;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n"]);
                return gt = function () {
                    return e
                }, e
            }
            var xt = {
                ICX: function () {
                    var e = Object(W.d)(),
                        t = Object(W.a)(),
                        n = c.a.useState(""),
                        a = Object(m.a)(n, 2),
                        r = a[0],
                        i = a[1],
                        u = c.a.useState(""),
                        s = Object(m.a)(u, 2),
                        b = s[0],
                        p = s[1],
                        v = Object(o.d)().account,
                        j = Object(Ae.b)(),
                        O = g.a.max(j.ICX.minus(P.c), P.h),
                        y = c.a.useState(!1),
                        C = Object(m.a)(y, 2),
                        I = C[0],
                        S = C[1],
                        k = function () {
                            S(!I), t(!1)
                        },
                        A = j.ICX,
                        F = isNaN(parseFloat(r)) ? new g.a(0) : new g.a(r),
                        B = A.minus(F),
                        U = Object(V.c)(),
                        N = !Object(Ve.a)(b) || F.isNegative() || F.isZero() || F.isGreaterThan(O),
                        X = c.a.useState(0),
                        R = Object(m.a)(X, 2),
                        L = R[0],
                        Y = R[1],
                        H = c.a.useState(new g.a(0)),
                        K = Object(m.a)(H, 2),
                        Z = K[0],
                        G = K[1];
                    return c.a.useEffect((function () {
                        (function () {
                            var e = Object(f.a)(d.a.mark((function e () {
                                var t;
                                return d.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!v) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.next = 3, T.a.Staking.getUserUnstakeInfo(v);
                                        case 3:
                                            t = e.sent, G(t.map((function (e) {
                                                return x.a.utils.toIcx(new g.a(e.amount, 16))
                                            })).reduce((function (e, t) {
                                                return e.plus(t)
                                            }), new g.a(0)));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function () {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), [v, L]), c.a.createElement(M.a, {
                        bg: "bg3"
                    }, c.a.createElement(De.e, {
                        index: L,
                        onChange: function (e) {
                            Y(e)
                        }
                    }, c.a.createElement(Ye, null, c.a.createElement(He, null, "Send"), c.a.createElement(He, null, "Unstaking")), c.a.createElement(ee.b, {
                        mb: 3
                    }), c.a.createElement(De.d, null, c.a.createElement(De.c, null, c.a.createElement(Ke, null, c.a.createElement(l.Flex, {
                        alignItems: "center",
                        justifyContent: "space-between"
                    }, c.a.createElement(w.c, {
                        variant: "h3"
                    }, "Send ICX"), c.a.createElement(Ze, {
                        onClick: function () {
                            i(O.toFixed())
                        }
                    }, "Send max")), c.a.createElement(tt.a, {
                        value: r,
                        showMaxButton: !1,
                        currency: z.c.icx,
                        onUserInput: function (e) {
                            i(e)
                        },
                        id: "icx-currency-input-in-icx-wallet"
                    }), c.a.createElement(et, {
                        value: b,
                        onUserInput: function (e) {
                            p(e)
                        }
                    })), c.a.createElement(l.Flex, {
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 5
                    }, c.a.createElement(E.a, {
                        onClick: k,
                        disabled: N
                    }, "Send"))), c.a.createElement(De.c, null, c.a.createElement(Ke, null, c.a.createElement(w.c, {
                        variant: "h3"
                    }, "Unstaking"), Z.isZero() ? c.a.createElement(w.c, null, "There's no ICX unstaking.") : c.a.createElement(c.a.Fragment, null, c.a.createElement(w.c, null, "Your ICX will be unstaked as more collateral is deposited into Balanced."), c.a.createElement(w.c, {
                        variant: "p"
                    }, Z.dp(2).toFormat(), " ICX unstaking")))))), c.a.createElement(D.a, {
                        isOpen: I,
                        onDismiss: k
                    }, c.a.createElement(l.Flex, {
                        flexDirection: "column",
                        alignItems: "stretch",
                        m: 5,
                        width: "100%"
                    }, c.a.createElement(w.c, {
                        textAlign: "center",
                        mb: "5px"
                    }, "Send asset?"), c.a.createElement(w.c, {
                        variant: "p",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 20
                    }, F.dp(2).toFormat() + " ICX"), c.a.createElement(w.c, {
                        textAlign: "center",
                        mb: "2px",
                        mt: "20px"
                    }, "Address"), c.a.createElement(w.c, {
                        variant: "p",
                        textAlign: "center",
                        mr: "30px",
                        ml: "30px",
                        fontSize: 16
                    }, b), c.a.createElement(l.Flex, {
                        my: 5
                    }, c.a.createElement(l.Box, {
                        width: .5,
                        className: "border-right"
                    }, c.a.createElement(w.c, {
                        textAlign: "center"
                    }, "Before"), c.a.createElement(w.c, {
                        variant: "p",
                        textAlign: "center"
                    }, A.dp(2).toFormat() + " ICX")), c.a.createElement(l.Box, {
                        width: .5
                    }, c.a.createElement(w.c, {
                        textAlign: "center"
                    }, "After"), c.a.createElement(w.c, {
                        variant: "p",
                        textAlign: "center"
                    }, B.dp(2).toFormat() + " ICX"))), c.a.createElement(l.Flex, {
                        justifyContent: "center",
                        mt: 4,
                        pt: 4,
                        className: "border-top"
                    }, c.a.createElement(E.c, {
                        onClick: k,
                        fontSize: 14
                    }, "Cancel"), c.a.createElement(E.a, {
                        onClick: function () {
                            T.a.contractSettings.ledgerSettings.actived && t(!0), T.a.inject({
                                account: v
                            }).transfer(b, x.a.utils.toLoop(F)).then((function (e) {
                                Object(ct.isEmpty)(e.result) ? console.error(e) : (U({
                                    hash: e.result
                                }, {
                                    pending: "Sending ICX...",
                                    summary: "Sent ".concat(F.dp(2).toFormat(), " ICX.")
                                }), k(), i(""), p(""))
                            }))
                        },
                        fontSize: 14
                    }, "Send")), e && c.a.createElement(h.a, null))))
                },
                sICX: function () {
                    return c.a.createElement(M.a, {
                        bg: "bg3"
                    }, c.a.createElement(De.e, null, c.a.createElement(Ye, null, c.a.createElement(He, null, "Send"), c.a.createElement(He, null, "Deposit"), c.a.createElement(He, null, "Unstake")), c.a.createElement(ee.b, {
                        mb: 3
                    }), c.a.createElement(De.d, null, c.a.createElement(De.c, null, c.a.createElement(it, null)), c.a.createElement(De.c, null, c.a.createElement(ot, null)), c.a.createElement(De.c, null, c.a.createElement(lt, null)))))
                },
                bnUSD: function () {
                    var e = c.a.useState(""),
                        t = Object(m.a)(e, 2),
                        n = t[0],
                        a = t[1],
                        r = Object(W.d)(),
                        i = Object(W.a)(),
                        u = c.a.useState(""),
                        s = Object(m.a)(u, 2),
                        d = s[0],
                        f = s[1],
                        b = Object(o.d)().account,
                        p = Object(Ae.b)(),
                        v = p.bnUSD,
                        j = c.a.useState(!1),
                        O = Object(m.a)(j, 2),
                        y = O[0],
                        C = O[1],
                        I = function () {
                            C(!y)
                        },
                        S = p.bnUSD,
                        k = isNaN(parseFloat(n)) ? new g.a(0) : new g.a(n),
                        A = S.minus(k),
                        F = Object(V.c)(),
                        B = !Object(Ve.a)(d) || k.isNegative() || k.isZero() || k.isGreaterThan(v);
                    return c.a.createElement(M.a, {
                        bg: "bg3"
                    }, c.a.createElement(Ke, null, c.a.createElement(l.Flex, {
                        alignItems: "center",
                        justifyContent: "space-between"
                    }, c.a.createElement(w.c, {
                        variant: "h3"
                    }, "Send bnUSD"), c.a.createElement(Ze, {
                        onClick: function () {
                            a(v.toFixed())
                        }
                    }, "Send max")), c.a.createElement(tt.a, {
                        value: n,
                        showMaxButton: !1,
                        currency: z.c.bnusd,
                        onUserInput: function (e) {
                            a(e)
                        },
                        id: "bnusd-currency-input-in-bnusd-wallet"
                    }), c.a.createElement(et, {
                        value: d,
                        onUserInput: function (e) {
                            f(e)
                        }
                    })), c.a.createElement(l.Flex, {
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 5
                    }, c.a.createElement(E.a, {
                        onClick: I,
                        disabled: B
                    }, "Send")), c.a.createElement(D.a, {
                        isOpen: y,
                        onDismiss: I
                    }, c.a.createElement(l.Flex, {
                        flexDirection: "column",
                        alignItems: "stretch",
                        m: 5,
                        width: "100%"
                    }, c.a.createElement(w.c, {
                        textAlign: "center",
                        mb: "5px"
                    }, "Send asset?"), c.a.createElement(w.c, {
                        variant: "p",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 20
                    }, k.dp(2).toFormat() + " bnUSD"), c.a.createElement(w.c, {
                        textAlign: "center",
                        mb: "2px",
                        mt: "20px"
                    }, "Address"), c.a.createElement(w.c, {
                        variant: "p",
                        textAlign: "center",
                        mr: "30px",
                        ml: "30px",
                        fontSize: 16
                    }, d), c.a.createElement(l.Flex, {
                        my: 5
                    }, c.a.createElement(l.Box, {
                        width: .5,
                        className: "border-right"
                    }, c.a.createElement(w.c, {
                        textAlign: "center"
                    }, "Before"), c.a.createElement(w.c, {
                        variant: "p",
                        textAlign: "center"
                    }, S.dp(2).toFormat() + " bnUSD")), c.a.createElement(l.Box, {
                        width: .5
                    }, c.a.createElement(w.c, {
                        textAlign: "center"
                    }, "After"), c.a.createElement(w.c, {
                        variant: "p",
                        textAlign: "center"
                    }, A.dp(2).toFormat() + " bnUSD"))), c.a.createElement(l.Flex, {
                        justifyContent: "center",
                        mt: 4,
                        pt: 4,
                        className: "border-top"
                    }, c.a.createElement(E.c, {
                        onClick: I,
                        fontSize: 14
                    }, "Cancel"), c.a.createElement(E.a, {
                        onClick: function () {
                            T.a.contractSettings.ledgerSettings.actived && i(!0), T.a.inject({
                                account: b
                            }).bnUSD.transfer(d, x.a.utils.toLoop(k)).then((function (e) {
                                Object(ct.isEmpty)(e.result) ? console.error(e) : (F({
                                    hash: e.result
                                }, {
                                    pending: "Sending bnUSD...",
                                    summary: "Sent ".concat(k.dp(2).toFormat(), " bnUSD.")
                                }), I(), a(""), f(""))
                            })).finally((function () {
                                i(!1)
                            }))
                        },
                        fontSize: 14
                    }, "Send")), r && c.a.createElement(h.a, null))))
                },
                BALN: function () {
                    return c.a.createElement(M.a, {
                        bg: "bg3"
                    }, c.a.createElement(De.e, null, c.a.createElement(Ye, null, c.a.createElement(He, null, "Stake"), c.a.createElement(He, null, "Send"), c.a.createElement(He, null, "Unstaking")), c.a.createElement(ee.b, {
                        mb: 3
                    }), c.a.createElement(De.d, null, c.a.createElement(De.c, null, c.a.createElement(at, null)), c.a.createElement(De.c, null, c.a.createElement(nt, null)), c.a.createElement(De.c, null, c.a.createElement(rt, null)))))
                }
            },
                vt = function () {
                    var e = Object(Ae.b)(),
                        t = Object(o.d)().account,
                        n = Object(Z.c)(),
                        a = c.a.useMemo((function () {
                            return {
                                ICX: n.ICXUSDratio,
                                sICX: n.sICXICXratio.times(n.ICXUSDratio),
                                bnUSD: new g.a(1),
                                BALN: n.BALNbnUSDratio
                            }
                        }), [n]);
                    return c.a.createElement(M.a, {
                        bg: "bg2"
                    }, c.a.createElement(w.c, {
                        variant: "h2",
                        mb: 5
                    }, "Wallet"), c.a.createElement(It, null, c.a.createElement(ht, null, c.a.createElement(jt, null, "Asset"), c.a.createElement(jt, null, "Balance"), c.a.createElement(jt, null, "Value")), c.a.createElement(yt, null, c.a.createElement(Re.a, {
                        collapsible: !0
                    }, z.b.filter((function (t) {
                        return !e[t].dp(2).isZero()
                    })).map((function (n, r, o) {
                        var i = xt[n];
                        return c.a.createElement(Re.c, {
                            key: n
                        }, c.a.createElement(Ct, null, c.a.createElement(wt, {
                            border: r !== o.length - 1
                        }, c.a.createElement(Et, null, c.a.createElement(Le.a, {
                            currency: z.c[n.toLowerCase()]
                        }), c.a.createElement(w.c, {
                            fontSize: 16,
                            fontWeight: "bold"
                        }, n)), c.a.createElement(Ot, null, t ? e[n].dp(2).toFormat() : "-"), c.a.createElement(Ot, null, t ? "$".concat(e[n].multipliedBy(a[n]).dp(2).toFormat()) : "-"))), c.a.createElement(Re.d, null, c.a.createElement(i, null)))
                    }))))))
                },
                Et = u.default.div(gt()),
                ht = u.default.div(pt()),
                jt = Object(u.default)(w.c)(bt()),
                Ot = Object(u.default)(w.c)(mt()),
                wt = Object(u.default)(ht)(ft(), (function (e) {
                    var t = e.border;
                    return void 0 === t || t ? "1px solid rgba(255, 255, 255, 0.15)" : "none"
                })),
                yt = Object(u.default)(l.Box)(dt()),
                Ct = Object(u.default)(Re.b)(st(), wt),
                It = u.default.div(ut()),
                St = n(947);

            function kt () {
                var e = Object(a.a)(["\n  width: 100%;\n  align-self: stretch;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);
                return kt = function () {
                    return e
                }, e
            }

            function At () {
                var e = Object(a.a)(["\n    grid-template-columns: 1fr;\n  "]);
                return At = function () {
                    return e
                }, e
            }

            function Ft () {
                var e = Object(a.a)(["\n  flex: 1;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 50px;\n  margin-bottom: 50px;\n\n  ", "\n"]);
                return Ft = function () {
                    return e
                }, e
            }
            var Bt = u.default.div(Ft(), (function (e) {
                return e.theme.mediaWidth.upToSmall(At())
            })),
                Ut = Object(u.default)(l.Box)(kt());

            function Nt () {
                var e = Object(o.d)().account;
                return Object(Z.b)(), Object(Ae.c)(e), Object(H.d)(e), Object(K.e)(e), Object(oe.b)(), c.a.createElement(St.a, null, c.a.createElement(i.a, null, c.a.createElement("title", null, "Home")), e ? c.a.createElement(Bt, null, c.a.createElement(G, null), c.a.createElement(Q, null), c.a.createElement(he, null), c.a.createElement(vt, null), c.a.createElement(Ue, null)) : c.a.createElement(Ut, null, "Sign in to use the Home page."))
            }
        }
    }
]);