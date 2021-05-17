(this["webpackJsonpbalanced-network-interface"] = this["webpackJsonpbalanced-network-interface"] || []).push([
    [9], {
        1002: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, "Airdrip", (function() {
                return P
            }));
            var a = t(51),
                r = t(5),
                i = t.n(r),
                c = t(14),
                o = t(17),
                l = t(0),
                u = t.n(l),
                s = t(950),
                d = t.n(s),
                p = t(9),
                m = t.n(p),
                f = t(172),
                b = t(42),
                g = t(175),
                h = t(1003),
                x = t(33),
                v = t(20),
                E = t(930),
                j = t(943),
                w = t(52),
                O = t.p + "static/media/airdrip.b26a0357.png",
                k = t(173),
                y = t(114),
                S = t(294),
                A = t(174);
            t(988);

            function N() {
                var e = Object(o.a)(["\n  margin-top: 15px;\n  margin-bottom: 0px;\n  font-size: 60px;\n  line-height: 1.33;\n  text-align: center;\n\n  ::after {\n    content: '';\n    display: block;\n    margin-top: 20px;\n    margin-bottom: 15px;\n    width: 125px;\n    height: 5px;\n    border-radius: 2px;\n    background-image: linear-gradient(120deg, #2ca9b7, #1b648f);\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]);
                return N = function() {
                    return e
                }, e
            }

            function z() {
                var e = Object(o.a)(["\n  background: -webkit-linear-gradient(120deg, #2ca9b7, #1b648f);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-size: 200% 200%;\n"]);
                return z = function() {
                    return e
                }, e
            }

            function B() {
                var e = Object(o.a)(["\n    margin-top: 25px;\n    margin-bottom: 25px;\n  "]);
                return B = function() {
                    return e
                }, e
            }

            function C() {
                var e = Object(o.a)(["\n  margin-top: 50px;\n  margin-bottom: 50px;\n\n  ", "\n"]);
                return C = function() {
                    return e
                }, e
            }

            function F() {
                var e = Object(o.a)(["\n    padding-left: 16px;\n    padding-right: 16px;\n  "]);
                return F = function() {
                    return e
                }, e
            }

            function T() {
                var e = Object(o.a)(["\n  /* disable margin collapse */\n  display: flex;\n  flex-direction: column;\n  max-width: 1280px;\n  min-height: 100vh;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 40px;\n  padding-right: 40px;\n\n  ", "\n"]);
                return T = function() {
                    return e
                }, e
            }
            var W = Object(v.default)(x.Box)(T(), (function(e) {
                    return e.theme.mediaWidth.upToMedium(F())
                })),
                D = Object(v.default)(x.Box)(C(), (function(e) {
                    return e.theme.mediaWidth.upToMedium(B())
                })),
                I = v.default.span(z()),
                M = v.default.h1(N()),
                H = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                L = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                J = new Date("2021-05-03T07:00:00Z"),
                G = function(e) {
                    return "".concat(H[e.getDay()], ", ").concat(e.getDate(), " ").concat(L[e.getMonth()])
                };

            function P() {
                var e = Object(y.e)(),
                    n = Object(b.d)(),
                    t = n.account,
                    r = n.networkId,
                    o = Object(S.c)(),
                    l = Object(S.b)(),
                    s = function() {
                        var e = Object(c.a)(i.a.mark((function e() {
                            var n;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(z && t && C)) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.prev = 1, e.next = 4, k.a.inject({
                                            account: t
                                        }).Airdrip.claimToken(z.index, z.votes, z.proof, k.a.BALN.address);
                                    case 4:
                                        n = e.sent, o({
                                            hash: n.result
                                        }, {
                                            pending: "Claiming airdrip",
                                            summary: "Claimed airdrip"
                                        }), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), console.error(e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 8]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    p = Object(h.a)("(max-width: 600px)"),
                    v = u.a.useState(),
                    N = Object(a.a)(v, 2),
                    z = N[0],
                    B = N[1],
                    C = null === z || void 0 === z ? void 0 : z.claimDetails.find((function(e) {
                        return e.address === k.a.BALN.address
                    }));
                u.a.useEffect((function() {
                    t && function() {
                        var e = Object(c.a)(i.a.mark((function e() {
                            var n, a, c;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, n = 1 === r ? "https://airdrip.co/api/v1/claim-detail?address=".concat(t) : "https://stage.airdrip.co/api/v1/claim-detail?address=".concat(t), e.next = 4, d.a.get(n);
                                    case 4:
                                        a = e.sent, (c = a.data).success ? B(c.data) : B(void 0), e.next = 12;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(0), B(void 0);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 9]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()()
                }), [t, l, r]);
                var F = u.a.useState(),
                    T = Object(a.a)(F, 2),
                    H = T[0],
                    L = T[1];
                u.a.useEffect((function() {
                    (function() {
                        var e = Object(c.a)(i.a.mark((function e() {
                            var n, t;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, k.a.Airdrip.getTokensDetails();
                                    case 2:
                                        n = e.sent, (t = n.find((function(e) {
                                            return e.address === k.a.BALN.address
                                        }))) && L({
                                            name: t.name,
                                            address: t.address,
                                            symbol: t.symbol,
                                            totalBalance: f.a.utils.toIcx(t.totalBalance),
                                            distributingThisWeek: f.a.utils.toIcx(t.distributingThisWeek),
                                            distributedAmount: f.a.utils.toIcx(t.distributedAmount)
                                        });
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), [l]);
                var P = u.a.useState(),
                    V = Object(a.a)(P, 2),
                    X = V[0],
                    Z = V[1];
                return u.a.useEffect((function() {
                    (function() {
                        var e = Object(c.a)(i.a.mark((function e() {
                            var n, t, r, c, o;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Promise.all([k.a.Airdrip.getStartTimestamp(), k.a.Airdrip.getAirdripDuration()]);
                                    case 2:
                                        n = e.sent, t = Object(a.a)(n, 2), r = t[0], c = t[1], o = new m.a(r).plus(new m.a(c)).div(1e3).integerValue().toNumber(), Z(new Date(o));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    })()()
                }), []), u.a.createElement(W, null, u.a.createElement(g.a, null, u.a.createElement("title", null, "Airdrip")), u.a.createElement(D, null, u.a.createElement(x.Flex, {
                    alignItems: "center",
                    justifyContent: "space-between"
                }, u.a.createElement(j.a, null), u.a.createElement(E.a, {
                    as: "a",
                    href: "/"
                }, "Go to app"))), u.a.createElement(x.Flex, {
                    flexDirection: "column",
                    mx: "auto",
                    alignItems: "center",
                    width: "fit-content",
                    mb: 50
                }, u.a.createElement("img", {
                    src: O,
                    width: "175px",
                    alt: ""
                }), u.a.createElement(M, null, "Air", u.a.createElement(I, null, "drip")), u.a.createElement(w.c, {
                    variant: "p",
                    fontSize: 22,
                    maxWidth: "285px",
                    textAlign: "center"
                }, "Earn Balance Tokens every week you stake ICX.")), u.a.createElement(x.Box, {
                    bg: "bg3",
                    maxWidth: 700,
                    mx: "auto",
                    css: "\n          border-radius: 10px;\n        ",
                    mb: 10,
                    width: "100%"
                }, u.a.createElement(x.Flex, {
                    alignItems: "center",
                    flexDirection: ["column", "row"]
                }, u.a.createElement(x.Flex, {
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    className: p ? "border-bottom" : "border-right",
                    py: ["25px", "35px"]
                }, H ? u.a.createElement(u.a.Fragment, null, u.a.createElement(w.c, {
                    variant: "h3",
                    fontWeight: "bold"
                }, "".concat(null === H || void 0 === H ? void 0 : H.distributedAmount.dp(2).toFormat(), " / \n                    ").concat(null === H || void 0 === H ? void 0 : H.distributingThisWeek.dp(2).toFormat(), " "), u.a.createElement(w.c, {
                    fontSize: "16px",
                    lineHeight: "25px",
                    as: "span",
                    color: "rgba(255,255,255,0.75)"
                }, null === H || void 0 === H ? void 0 : H.symbol)), u.a.createElement(w.c, {
                    variant: "p",
                    fontSize: "18px",
                    lineHeight: "35px",
                    color: "rgba(255,255,255,0.75)",
                    mb: 3
                }, "Claimed this week"), u.a.createElement(w.c, {
                    variant: "p",
                    fontSize: "18px",
                    lineHeight: "35px",
                    color: "rgba(255,255,255,0.75)"
                }, "This drip dries up on"), u.a.createElement(w.c, {
                    variant: "p",
                    fontWeight: "bold"
                }, X && G(X))) : u.a.createElement(w.c, {
                    variant: "p",
                    fontSize: "18px",
                    lineHeight: "35px",
                    color: "rgba(255,255,255,0.75)"
                }, "Accumulating BALN...")), u.a.createElement(x.Flex, {
                    flex: 1,
                    flexDirection: "column",
                    alignItems: "center",
                    py: ["25px", "35px"]
                }, !t && H && u.a.createElement(u.a.Fragment, null, u.a.createElement(E.a, {
                    onClick: e
                }, "Sign in to claim")), !t && !H && u.a.createElement(u.a.Fragment, null, u.a.createElement(w.c, {
                    variant: "p",
                    fontSize: "18px",
                    lineHeight: "35px",
                    color: "rgba(255,255,255,0.75)"
                }, "The first airdrip drops on"), u.a.createElement(w.c, {
                    variant: "p",
                    fontWeight: "bold"
                }, G(J))), t && u.a.createElement(w.c, {
                    variant: "p",
                    fontSize: "18px",
                    lineHeight: "35px",
                    color: "rgba(255,255,255,0.75)",
                    textAlign: "center"
                }, "Wallet: ", Object(A.e)(t)), t && C && "unclaimed" === C.claimStatus && u.a.createElement(u.a.Fragment, null, u.a.createElement(w.c, {
                    variant: "p",
                    fontSize: "18px",
                    fontWeight: "bold"
                }, C.amount, " BALN"), u.a.createElement(E.a, {
                    mt: 5,
                    onClick: s
                }, "Claim airdrip")), t && C && "unclaimed" !== C.claimStatus && u.a.createElement(u.a.Fragment, null, u.a.createElement(w.c, {
                    variant: "p",
                    fontSize: "18px",
                    fontWeight: "bold"
                }, "Airdrip claimed"), u.a.createElement(E.a, {
                    mt: 5,
                    onClick: e
                }, "Check another wallet"))))), u.a.createElement("div", {
                    id: "hero-background"
                }, u.a.createElement("div", {
                    id: "drip-1",
                    className: "drip"
                }), u.a.createElement("div", {
                    id: "drip-2",
                    className: "drip"
                }), u.a.createElement("div", {
                    id: "drip-3",
                    className: "drip"
                }), u.a.createElement("div", {
                    id: "drip-4",
                    className: "drip"
                }), u.a.createElement("div", {
                    id: "drip-5",
                    className: "drip"
                }), u.a.createElement("div", {
                    id: "drip-6",
                    className: "drip"
                }), u.a.createElement("div", {
                    id: "drip-7",
                    className: "drip"
                }), u.a.createElement("div", {
                    id: "drip-8",
                    className: "drip"
                }), u.a.createElement("div", {
                    id: "drip-9",
                    className: "drip"
                }), u.a.createElement("div", {
                    id: "drip-10",
                    className: "drip"
                }), u.a.createElement("div", {
                    id: "drip-11",
                    className: "drip"
                }), u.a.createElement("div", {
                    id: "drip-12",
                    className: "drip"
                })))
            }
        },
        930: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return u
            })), t.d(n, "c", (function() {
                return s
            })), t.d(n, "b", (function() {
                return d
            }));
            var a = t(17),
                r = t(33),
                i = t(20);

            function c() {
                var e = Object(a.a)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 50px;\n  height: 50px;\n  background-color: #2395aa;\n  border-radius: 100px;\n  color: ", ";\n  cursor: pointer;\n  padding: 4px;\n  outline: none;\n\n  &:hover,\n  &:focus {\n    background-color: #087083;\n    transition: background-color 0.2s ease;\n  }\n\n  &:disabled {\n    cursor: default;\n    pointer-events: none;\n    color: #27264a;\n  }\n"]);
                return c = function() {
                    return e
                }, e
            }

            function o() {
                var e = Object(a.a)(["\n  background: transparent;\n  font-size: 14px;\n  padding: 7px 25px;\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.75);\n  cursor: pointer;\n  transition: color 0.3s ease;\n  user-select: none;\n  line-height: 1.4;\n\n  &:hover {\n    color: rgba(255, 255, 255, 1);\n    transition: color 0.2s ease;\n  }\n\n  &:disabled {\n    cursor: default;\n    pointer-events: none;\n    color: #27264a;\n  }\n"]);
                return o = function() {
                    return e
                }, e
            }

            function l() {
                var e = Object(a.a)(["\n  display: inline-block;\n  border-radius: 10px;\n  padding: 7px 25px;\n  color: #ffffff;\n  text-decoration: none;\n  background-color: ", ";\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n  user-select: none;\n  line-height: 1.4;\n\n  &:hover {\n    background-color: #087083;\n    transition: background-color 0.2s ease;\n  }\n\n  &:disabled {\n    background: #27264a;\n    cursor: default;\n    pointer-events: none;\n  }\n"]);
                return l = function() {
                    return e
                }, e
            }
            var u = Object(i.default)(r.Button)(l(), (function(e) {
                    return e.theme.colors.primary
                })),
                s = Object(i.default)(r.Button)(o()),
                d = Object(i.default)(r.Button)(c(), (function(e) {
                    return e.theme.colors.bg1
                }))
        },
        933: function(e, n, t) {
            "use strict";
            t.d(n, "c", (function() {
                return v
            })), t.d(n, "b", (function() {
                return E
            })), t.d(n, "a", (function() {
                return j
            }));
            var a = t(51),
                r = t(17),
                i = t(0),
                c = t.n(i),
                o = t(300),
                l = t(998),
                u = t(20),
                s = t(297);

            function d() {
                var e = Object(r.a)(["\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  z-index: -1;\n\n  ::before {\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    z-index: -1;\n\n    content: '';\n    transform: rotate(45deg);\n    background: ", ";\n  }\n\n  &.arrow-top,\n  &.arrow-top-start,\n  &.arrow-top-end {\n    bottom: -6px;\n  }\n\n  &.arrow-bottom,\n  &.arrow-bottom-start,\n  &.arrow-bottom-end {\n    top: -6px;\n  }\n\n  &.arrow-left,\n  &.arrow-left-start,\n  &.arrow-left-end {\n    right: -6px;\n  }\n\n  &.arrow-right,\n  &.arrow-right-start,\n  &.arrow-right-end {\n    left: -6px;\n  }\n"]);
                return d = function() {
                    return e
                }, e
            }

            function p() {
                var e = Object(r.a)(["\n  display: inline-block;\n  line-height: 0;\n"]);
                return p = function() {
                    return e
                }, e
            }

            function m() {
                var e = Object(r.a)(["\n  background: ", ";\n  border: 2px solid ", ";\n  color: ", ";\n  border-radius: 8px;\n  overflow: hidden;\n"]);
                return m = function() {
                    return e
                }, e
            }

            function f() {
                var e = Object(r.a)(["\n  z-index: ", ";\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n"]);
                return f = function() {
                    return e
                }, e
            }
            var b = u.default.div(f(), (function(e) {
                    return e.theme.zIndices.tooltip
                }), (function(e) {
                    return e.show ? "visible" : "hidden"
                }), (function(e) {
                    return e.show ? 1 : 0
                })),
                g = u.default.div(m(), (function(e) {
                    return e.theme.colors.bg4
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.colors.text1
                })),
                h = u.default.div(p()),
                x = u.default.div(d(), (function(e) {
                    return e.theme.colors.primary
                }));

            function v(e) {
                var n, t, r = e.content,
                    u = e.show,
                    d = e.children,
                    p = e.placement,
                    m = void 0 === p ? "auto" : p,
                    f = Object(i.useState)(null),
                    v = Object(a.a)(f, 2),
                    E = v[0],
                    j = v[1],
                    w = Object(i.useState)(null),
                    O = Object(a.a)(w, 2),
                    k = O[0],
                    y = O[1],
                    S = Object(i.useState)(null),
                    A = Object(a.a)(S, 2),
                    N = A[0],
                    z = A[1],
                    B = Object(l.a)(E, k, {
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
                                element: N
                            }
                        }]
                    }),
                    C = B.styles,
                    F = B.update,
                    T = B.attributes,
                    W = Object(i.useCallback)((function() {
                        F && F()
                    }), [F]);
                return Object(s.a)(W, u ? 100 : null), c.a.createElement(c.a.Fragment, null, c.a.createElement(h, {
                    ref: j
                }, d), c.a.createElement(o.b, null, c.a.createElement(b, Object.assign({
                    show: u,
                    ref: y,
                    style: C.popper
                }, T.popper), c.a.createElement(g, null, r), c.a.createElement(x, Object.assign({
                    className: "arrow-".concat(null !== (n = null === (t = T.popper) || void 0 === t ? void 0 : t["data-popper-placement"]) && void 0 !== n ? n : ""),
                    ref: z,
                    style: C.arrow
                }, T.arrow)))))
            }

            function E(e) {
                var n = e.show,
                    t = e.children,
                    r = e.placement,
                    u = void 0 === r ? "auto" : r,
                    d = e.anchorEl,
                    p = Object(i.useState)(null),
                    m = Object(a.a)(p, 2),
                    f = m[0],
                    h = m[1],
                    x = Object(l.a)(d, f, {
                        placement: u,
                        strategy: "fixed",
                        modifiers: [{
                            name: "offset",
                            options: {
                                offset: [0, 2]
                            }
                        }]
                    }),
                    v = x.styles,
                    E = x.update,
                    j = x.attributes,
                    w = Object(i.useCallback)((function() {
                        E && E()
                    }), [E]);
                return Object(s.a)(w, n ? 100 : null), c.a.createElement(o.b, null, c.a.createElement(b, Object.assign({
                    show: n,
                    ref: h,
                    style: v.popper
                }, j.popper), c.a.createElement(g, null, t)))
            }

            function j(e) {
                var n, t, r = e.show,
                    u = e.children,
                    d = e.placement,
                    p = void 0 === d ? "auto" : d,
                    m = e.anchorEl,
                    f = Object(i.useState)(null),
                    h = Object(a.a)(f, 2),
                    v = h[0],
                    E = h[1],
                    j = Object(i.useState)(null),
                    w = Object(a.a)(j, 2),
                    O = w[0],
                    k = w[1],
                    y = c.a.useMemo((function() {
                        return [{
                            name: "offset",
                            options: {
                                offset: [20, 12]
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: O
                            }
                        }]
                    }), [O]),
                    S = Object(l.a)(m, v, {
                        placement: p,
                        strategy: "fixed",
                        modifiers: y
                    }),
                    A = S.styles,
                    N = S.update,
                    z = S.attributes,
                    B = Object(i.useCallback)((function() {
                        N && N()
                    }), [N]);
                return Object(s.a)(B, r ? 100 : null), c.a.createElement(o.b, null, c.a.createElement(b, Object.assign({
                    show: r,
                    ref: E,
                    style: A.popper
                }, z.popper), c.a.createElement(g, null, u), c.a.createElement(x, Object.assign({
                    className: "arrow-".concat(null !== (n = null === (t = z.popper) || void 0 === t ? void 0 : t["data-popper-placement"]) && void 0 !== n ? n : ""),
                    ref: k,
                    style: A.arrow
                }, z.arrow))))
            }
        },
        934: function(e, n, t) {
            "use strict";
            t.d(n, "b", (function() {
                return p
            })), t.d(n, "a", (function() {
                return m
            }));
            var a = t(51),
                r = t(115),
                i = t(17),
                c = t(0),
                o = t.n(c),
                l = t(20),
                u = t(933);

            function s() {
                var e = Object(i.a)(["\n  width: 240px;\n  padding: 12px 1rem;\n  line-height: 150%;\n  font-weight: 400;\n  font-size: 14px;\n  color: ", ";\n"]);
                return s = function() {
                    return e
                }, e
            }
            var d = l.default.div(s(), (function(e) {
                return e.theme.colors.white
            }));

            function p(e) {
                var n = e.text,
                    t = Object(r.a)(e, ["text"]);
                return o.a.createElement(u.c, Object.assign({
                    content: o.a.createElement(d, null, n)
                }, t))
            }

            function m(e) {
                var n = e.children,
                    t = Object(r.a)(e, ["children"]),
                    i = Object(c.useState)(!1),
                    l = Object(a.a)(i, 2),
                    u = l[0],
                    s = l[1],
                    d = Object(c.useCallback)((function() {
                        return s(!0)
                    }), [s]),
                    m = Object(c.useCallback)((function() {
                        return s(!1)
                    }), [s]);
                return o.a.createElement(p, Object.assign({}, t, {
                    show: u
                }), o.a.createElement("div", {
                    onMouseEnter: d,
                    onMouseLeave: m
                }, n))
            }
        },
        943: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return p
            }));
            var a = t(17),
                r = t(0),
                i = t.n(r),
                c = t(20),
                o = t.p + "static/media/balanced-logo.8d12c8b0.png",
                l = t(934);

            function u() {
                var e = Object(a.a)(["\n    width: 75px;\n  "]);
                return u = function() {
                    return e
                }, e
            }

            function s() {
                var e = Object(a.a)(["\n  width: 100px;\n  cursor: pointer;\n\n  ", "\n"]);
                return s = function() {
                    return e
                }, e
            }
            var d = c.default.img(s(), (function(e) {
                return e.theme.mediaWidth.upToSmall(u())
            }));

            function p(e) {
                return i.a.createElement("div", e, i.a.createElement("a", {
                    href: "https://balanced.network"
                }, i.a.createElement(l.a, {
                    text: "Back to the Balanced website",
                    placement: "right"
                }, i.a.createElement(d, {
                    src: o,
                    alt: "Balanced logo"
                }))))
            }
        },
        988: function(e, n, t) {}
    }
]);