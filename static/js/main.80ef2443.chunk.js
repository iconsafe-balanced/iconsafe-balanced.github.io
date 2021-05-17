(this["webpackJsonpbalanced-network-interface"] = this["webpackJsonpbalanced-network-interface"] || []).push([
    [3], {
        114: function (t, e, n) {
            "use strict";
            n.d(e, "c", (function () {
                return o
            })), n.d(e, "e", (function () {
                return c
            })), n.d(e, "f", (function () {
                return s
            })), n.d(e, "b", (function () {
                return l
            })), n.d(e, "d", (function () {
                return u
            })), n.d(e, "a", (function () {
                return d
            }));
            var r = n(0),
                a = n(36),
                i = n(58);

            function o (t) {
                return Object(a.d)((function (t) {
                    return t.application.openModal
                })) === t
            }

            function c () {
                return function (t) {
                    var e = o(t),
                        n = Object(a.c)();
                    return Object(r.useCallback)((function () {
                        return n(Object(i.f)(e ? null : t))
                    }), [n, t, e])
                }(i.a.WALLET)
            }

            function s () {
                return Object(a.d)((function (t) {
                    return t.application.walletType
                }))
            }

            function l () {
                var t = Object(a.c)();
                return Object(r.useCallback)((function (e) {
                    t(Object(i.d)({
                        walletType: e
                    }))
                }), [t])
            }

            function u () {
                return Object(a.d)((function (t) {
                    return t.application.shouldLedgerSign
                }))
            }

            function d () {
                var t = Object(a.c)();
                return Object(r.useCallback)((function (e) {
                    t(Object(i.c)({
                        shouldLedgerSign: e
                    }))
                }), [t])
            }
        },
        130: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return r
            })), n.d(e, "d", (function () {
                return i
            })), n.d(e, "b", (function () {
                return o
            })), n.d(e, "c", (function () {
                return c
            })), n.d(e, "e", (function () {
                return s
            }));
            var r, a = n(4);
            ! function (t) {
                t.LEFT = "LEFT", t.RIGHT = "RIGHT"
            }(r || (r = {}));
            var i = Object(a.b)("collateral/changeDepositedAmount"),
                o = Object(a.b)("collateral/adjust"),
                c = Object(a.b)("collateral/cancel"),
                s = Object(a.b)("collateral/type")
        },
        164: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return l
            })), n.d(e, "c", (function () {
                return u
            }));
            var r, a, i = n(7),
                o = n(28),
                c = n(3),
                s = n.n(c);
            ! function (t) {
                t[t.MAINNET = 1] = "MAINNET", t[t.YEOUIDO = 3] = "YEOUIDO", t[t.EULJIRO = 2] = "EULJIRO", t[t.PAGODA = 80] = "PAGODA"
            }(a || (a = {}));
            var l = "44'/4801368'/0'/0'",
                u = function (t) {
                    return "".concat(l, "/").concat(t, "'")
                },
                d = (r = {}, Object(o.a)(r, a.MAINNET, "https://ctz.solidwallet.io/api/v3"), Object(o.a)(r, a.YEOUIDO, "https://bicon.net.solidwallet.io/api/v3"), r);
            e.b = function t (e) {
                Object(i.a)(this, t), this.networkId = void 0, this.provider = void 0, this.account = "", this.ledgerSettings = {
                    path: l,
                    transport: null,
                    actived: !1
                };
                var n = e = e || {},
                    r = n.provider,
                    o = n.networkId;
                this.networkId = o || 1, this.provider = r || function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.MAINNET;
                    return new s.a(new s.a.HttpProvider(d[t]))
                }(this.networkId)
            }
        },
        167: function (t, e, n) {
            "use strict";
            n.d(e, "c", (function () {
                return a
            })), n.d(e, "d", (function () {
                return i
            })), n.d(e, "b", (function () {
                return o
            })), n.d(e, "a", (function () {
                return c
            }));
            var r = n(4),
                a = Object(r.b)("pool/setPair"),
                i = Object(r.b)("pool/setPoolData"),
                o = Object(r.b)("pool/setBalance"),
                c = Object(r.b)("pool/clearBalances")
        },
        168: function (t, e, n) {
            "use strict";
            n.d(e, "b", (function () {
                return C
            })), n.d(e, "c", (function () {
                return U
            })), n.d(e, "a", (function () {
                return N
            }));
            var r = n(17),
                a = n(0),
                i = n.n(a),
                o = n(33),
                c = n(20),
                s = n(52);

            function l () {
                return (l = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function u (t, e) {
                if (null == t) return {};
                var n, r, a = function (t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var d = a.createElement("g", {
                fill: "#fb6a6a",
                fillRule: "nonzero",
                transform: "translate(-28 -29)"
            }, a.createElement("path", {
                d: "m37 47c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9zm0-16c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"
            }), a.createElement("path", {
                d: "m34 42c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l6-6c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-6 6c-.195.195-.451.293-.707.293z"
            }), a.createElement("path", {
                d: "m40 42c-.256 0-.512-.098-.707-.293l-6-6c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l6 6c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293z"
            }));

            function f (t, e) {
                var n = t.title,
                    r = t.titleId,
                    i = u(t, ["title", "titleId"]);
                return a.createElement("svg", l({
                    clipRule: "evenodd",
                    fillRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                    viewBox: "0 0 18 18",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: e,
                    "aria-labelledby": r
                }, i), n ? a.createElement("title", {
                    id: r
                }, n) : null, d)
            }
            var p = a.forwardRef(f);
            n.p;

            function b () {
                return (b = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function h (t, e) {
                if (null == t) return {};
                var n, r, a = function (t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var m = a.createElement("g", {
                fill: "#fff",
                fillRule: "nonzero",
                transform: "translate(-27.79925 -29.786)"
            }, a.createElement("path", {
                d: "m36.549 47.295c-2.338 0-4.537-.911-6.19-2.564-3.413-3.413-3.413-8.967 0-12.381 1.654-1.654 3.852-2.564 6.19-2.564s4.537.911 6.19 2.564c1.654 1.654 2.564 3.852 2.564 6.19s-.911 4.537-2.564 6.19c-1.653 1.655-3.851 2.565-6.19 2.565zm0-15.509c-1.804 0-3.5.703-4.776 1.979-2.633 2.634-2.633 6.919 0 9.553 1.276 1.276 2.972 1.979 4.776 1.979s3.5-.703 4.776-1.979 1.979-2.972 1.979-4.776-.703-3.5-1.979-4.776-2.971-1.98-4.776-1.98z"
            }), a.createElement("path", {
                d: "m40 40h-4c-.552 0-1-.448-1-1v-4c0-.552.448-1 1-1s1 .448 1 1v3h3c.552 0 1 .448 1 1s-.448 1-1 1z"
            }));

            function v (t, e) {
                var n = t.title,
                    r = t.titleId,
                    i = h(t, ["title", "titleId"]);
                return a.createElement("svg", b({
                    clipRule: "evenodd",
                    fillRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                    viewBox: "0 0 18 18",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: e,
                    "aria-labelledby": r
                }, i), n ? a.createElement("title", {
                    id: r
                }, n) : null, m)
            }
            var g = a.forwardRef(v);
            n.p;

            function O () {
                return (O = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function y (t, e) {
                if (null == t) return {};
                var n, r, a = function (t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var x = a.createElement("g", {
                fill: "#2ca9b7",
                fillRule: "nonzero",
                transform: "translate(-28 -29)"
            }, a.createElement("path", {
                d: "m37 47c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9zm0-16c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z"
            }), a.createElement("path", {
                d: "m36 42c-.236 0-.473-.083-.664-.251l-2.933-2.6c-.413-.367-.451-.999-.085-1.412.367-.413.999-.451 1.412-.085l2.214 1.963 4.201-4.374c.383-.398 1.017-.41 1.414-.028.398.382.411 1.016.028 1.414l-4.867 5.067c-.195.202-.457.306-.72.306z"
            }));

            function w (t, e) {
                var n = t.title,
                    r = t.titleId,
                    i = y(t, ["title", "titleId"]);
                return a.createElement("svg", O({
                    clipRule: "evenodd",
                    fillRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                    viewBox: "0 0 18 18",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: e,
                    "aria-labelledby": r
                }, i), n ? a.createElement("title", {
                    id: r
                }, n) : null, x)
            }
            var j = a.forwardRef(w);
            n.p;

            function E () {
                var t = Object(r.a)([""]);
                return E = function () {
                    return t
                }, t
            }

            function k () {
                var t = Object(r.a)([""]);
                return k = function () {
                    return t
                }, t
            }

            function S () {
                var t = Object(r.a)(["\n  margin-top: -3px;\n  margin-right: 6px;\n"]);
                return S = function () {
                    return t
                }, t
            }

            function I () {
                var t = Object(r.a)(["\n  align-items: flex-start;\n"]);
                return I = function () {
                    return t
                }, t
            }
            var C = function (t) {
                var e = t.summary;
                return i.a.createElement(A, null, i.a.createElement(T, null, i.a.createElement(g, {
                    width: 20,
                    height: 20
                })), i.a.createElement(B, null, i.a.createElement(s.c, {
                    variant: "p",
                    fontWeight: 500
                }, e)))
            },
                U = function (t) {
                    var e = t.summary;
                    return i.a.createElement(A, null, i.a.createElement(T, null, i.a.createElement(j, {
                        width: 20,
                        height: 20
                    })), i.a.createElement(B, null, i.a.createElement(s.c, {
                        variant: "p",
                        fontWeight: 500
                    }, e)))
                },
                N = function (t) {
                    var e = t.failureReason;
                    return i.a.createElement(A, null, i.a.createElement(T, null, i.a.createElement(p, {
                        width: 20,
                        height: 20
                    })), i.a.createElement(B, {
                        flexDirection: "column"
                    }, i.a.createElement(_, null, i.a.createElement(s.c, {
                        variant: "p",
                        fontWeight: 500
                    }, "Your transaction has failed.")), i.a.createElement(_, null, i.a.createElement(s.c, {
                        variant: "p",
                        fontWeight: 500,
                        color: "alert"
                    }, e))))
                },
                A = Object(c.default)(o.Flex)(I()),
                T = c.default.div(S()),
                B = Object(c.default)(o.Flex)(k()),
                _ = c.default.div(E())
        },
        172: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return T
            }));
            var r = n(7),
                a = n(11),
                i = n(9),
                o = n.n(i),
                c = n(116),
                s = n(13),
                l = n(12),
                u = n(3),
                d = n(19),
                f = n(5),
                p = n.n(f),
                b = n(14),
                h = n(77),
                m = n(441),
                v = n.n(m),
                g = function () {
                    function t (e) {
                        Object(r.a)(this, t), this.contractSettings = e, this.actived = !1
                    }
                    return Object(a.a)(t, [{
                        key: "viewSetting",
                        value: function () {
                            return this.contractSettings.ledgerSettings
                        }
                    }, {
                        key: "signTransaction",
                        value: function () {
                            var t = Object(b.a)(p.a.mark((function t (e) {
                                var n, r, a, i;
                                return p.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = new v.a(this.contractSettings.ledgerSettings.transport), r = u.IconUtil.generateHashKey(e), t.next = 4, n.signTransaction(this.contractSettings.ledgerSettings.path, r);
                                        case 4:
                                            return a = t.sent, i = a.signedRawTxBase64, e.signature = i, t.abrupt("return", {
                                                getProperties: function () {
                                                    return e
                                                },
                                                getSignature: function () {
                                                    return i
                                                }
                                            });
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }]), t
                }(),
                O = function () {
                    function t (e) {
                        Object(r.a)(this, t), this.contractSettings = e, this.provider = void 0, this.nid = void 0, this.address = "", this.ledger = void 0, this.provider = e.provider, this.nid = e.networkId, this.ledger = new g(e), this.contractSettings.ledgerSettings.actived = !Object(c.isEmpty)(this.ledger.viewSetting().transport)
                    }
                    return Object(a.a)(t, [{
                        key: "inject",
                        value: function (t) {
                            var e = t.account,
                                n = t.legerSettings;
                            return this.contractSettings.account = e || this.contractSettings.account, this.contractSettings.ledgerSettings.transport = (null === n || void 0 === n ? void 0 : n.transport) || this.contractSettings.ledgerSettings.transport, this.contractSettings.ledgerSettings.actived = !Object(c.isEmpty)(this.contractSettings.ledgerSettings.transport), this.contractSettings.ledgerSettings.path = (null === n || void 0 === n ? void 0 : n.path) || this.contractSettings.ledgerSettings.path, this
                        }
                    }, {
                        key: "cleanParams",
                        value: function (t) {
                            return JSON.parse(JSON.stringify(t, (function (t, e) {
                                return Object(c.isEmpty)(e) && 0 !== e ? void 0 : e
                            })))
                        }
                    }, {
                        key: "paramsBuilder",
                        value: function (t) {
                            var e = t.method,
                                n = t.params;
                            return (new u.IconBuilder.CallBuilder).to(this.address).method(e).params(n).build()
                        }
                    }, {
                        key: "call",
                        value: function (t) {
                            return this.provider.call(t).execute()
                        }
                    }, {
                        key: "transactionParamsBuilder",
                        value: function (t) {
                            var e = t.method,
                                n = t.params,
                                r = t.value,
                                a = void 0 === r ? new o.a(0) : r,
                                i = (new u.IconBuilder.CallTransactionBuilder).from(this.account).to(this.address).method(e).params(n).nid(u.IconConverter.toBigNumber(this.nid)).timestamp(1e3 * (new Date).getTime()).stepLimit(u.IconConverter.toBigNumber(5e7)).value(a).version(u.IconConverter.toBigNumber(3)).build();
                            return {
                                jsonrpc: "2.0",
                                method: "icx_sendTransaction",
                                params: u.IconConverter.toRawTransaction(i),
                                id: Date.now()
                            }
                        }
                    }, {
                        key: "transferICXParamsBuilder",
                        value: function (t) {
                            var e = t.value,
                                n = (new u.IconBuilder.IcxTransactionBuilder).from(this.account).to(this.address).nid(u.IconConverter.toBigNumber(this.nid)).timestamp(1e3 * (new Date).getTime()).stepLimit(u.IconConverter.toBigNumber(2e6)).value(e).version(u.IconConverter.toBigNumber(3)).build();
                            return {
                                jsonrpc: "2.0",
                                method: "icx_sendTransaction",
                                params: u.IconConverter.toRawTransaction(n),
                                id: Date.now()
                            }
                        }
                    }, {
                        key: "callICONPlugins",
                        value: function () {
                            var t = Object(b.a)(p.a.mark((function t (e) {
                                return p.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!this.contractSettings.ledgerSettings.actived) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return", this.callLedger(e.params));
                                        case 2:
                                            return t.abrupt("return", this.callIconex(e));
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "callIconex",
                        value: function (t) {
                            return window.dispatchEvent(new CustomEvent("ICONEX_RELAY_REQUEST", {
                                detail: {
                                    type: "REQUEST_JSON-RPC",
                                    payload: t
                                }
                            })), new Promise((function (t) {
                                window.addEventListener(h.a, (function e (n) {
                                    var r = n.detail,
                                        a = r.type,
                                        i = r.payload;
                                    "RESPONSE_JSON-RPC" === a && (window.removeEventListener(h.a, e), t(i))
                                }))
                            }))
                        }
                    }, {
                        key: "callLedger",
                        value: function () {
                            var t = Object(b.a)(p.a.mark((function t (e) {
                                var n;
                                return p.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            if (e = this.cleanParams(e), !this.contractSettings.ledgerSettings.actived) {
                                                t.next = 9;
                                                break
                                            }
                                            return t.next = 4, this.ledger.signTransaction(e);
                                        case 4:
                                            return n = t.sent, t.next = 7, this.provider.sendTransaction(n).execute();
                                        case 7:
                                            return t.t0 = t.sent, t.abrupt("return", {
                                                result: t.t0
                                            });
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "account",
                        get: function () {
                            return this.contractSettings.account
                        }
                    }]), t
                }(),
                y = function (t) {
                    Object(s.a)(n, t);
                    var e = Object(l.a)(n);

                    function n (t) {
                        var a;
                        return Object(r.a)(this, n), (a = e.call(this, t)).address = d.a[a.nid].airdrip, a
                    }
                    return Object(a.a)(n, [{
                        key: "getTokensDetails",
                        value: function () {
                            var t = this.paramsBuilder({
                                method: "getTokensDetails"
                            });
                            return this.call(t)
                        }
                    }, {
                        key: "getStartTimestamp",
                        value: function () {
                            var t = this.paramsBuilder({
                                method: "getStartTimestamp"
                            });
                            return this.call(t)
                        }
                    }, {
                        key: "getAirdripDuration",
                        value: function () {
                            var t = this.paramsBuilder({
                                method: "getAirdripDuration"
                            });
                            return this.call(t)
                        }
                    }, {
                        key: "claimToken",
                        value: function (t, e, n, r) {
                            var a = this.transactionParamsBuilder({
                                method: "claimToken",
                                params: {
                                    proofHash: n,
                                    index: u.IconConverter.toHex(t),
                                    total_votes: e.toString(),
                                    tokenAddress: r
                                }
                            });
                            return this.callICONPlugins(a)
                        }
                    }]), n
                }(O),
                x = function (t) {
                    Object(s.a)(n, t);
                    var e = Object(l.a)(n);

                    function n (t) {
                        var a;
                        return Object(r.a)(this, n), (a = e.call(this, t)).address = d.a[a.nid].baln, a
                    }
                    return Object(a.a)(n, [{
                        key: "balanceOf",
                        value: function (t) {
                            var e = this.paramsBuilder({
                                method: "balanceOf",
                                params: {
                                    _owner: t
                                }
                            });
                            return this.call(e)
                        }
                    }, {
                        key: "swapToBnUSD",
                        value: function (t, e) {
                            var n = {
                                method: "_swap",
                                params: {
                                    toToken: d.a[this.nid].bnusd,
                                    minimumReceive: e.toFixed()
                                }
                            };
                            return this.transfer(d.a[this.nid].dex, u.IconAmount.of(t.toNumber(), u.IconAmount.Unit.ICX).toLoop(), JSON.stringify(n))
                        }
                    }, {
                        key: "transfer",
                        value: function (t, e, n) {
                            var r = this.transactionParamsBuilder({
                                method: "transfer",
                                params: {
                                    _to: t,
                                    _value: u.IconConverter.toHex(e),
                                    _data: n && u.IconConverter.toHex(n)
                                }
                            });
                            return this.callICONPlugins(r)
                        }
                    }, {
                        key: "stake",
                        value: function (t) {
                            var e = this.transactionParamsBuilder({
                                method: "stake",
                                params: {
                                    _value: u.IconConverter.toHex(t)
                                }
                            });
                            return this.callICONPlugins(e)
                        }
                    }, {
                        key: "deposit",
                        value: function (t) {
                            return this.transfer(d.a[this.nid].dex, t, JSON.stringify({
                                method: "_deposit"
                            }))
                        }
                    }, {
                        key: "detailsBalanceOf",
                        value: function (t) {
                            var e = this.paramsBuilder({
                                method: "detailsBalanceOf",
                                params: {
                                    _owner: t
                                }
                            });
                            return this.call(e)
                        }
                    }]), n
                }(O),
                w = function (t) {
                    Object(s.a)(n, t);
                    var e = Object(l.a)(n);

                    function n (t) {
                        var a;
                        return Object(r.a)(this, n), (a = e.call(this, t)).address = d.a[a.nid].band, a
                    }
                    return Object(a.a)(n, [{
                        key: "getReferenceData",
                        value: function (t) {
                            var e = this.paramsBuilder({
                                method: "get_reference_data",
                                params: t
                            });
                            return this.call(e)
                        }
                    }]), n
                }(O),
                j = function (t) {
                    Object(s.a)(n, t);
                    var e = Object(l.a)(n);

                    function n (t) {
                        var a;
                        return Object(r.a)(this, n), (a = e.call(this, t)).address = d.a[a.nid].bnusd, a
                    }
                    return Object(a.a)(n, [{
                        key: "balanceOf",
                        value: function (t) {
                            var e = this.paramsBuilder({
                                method: "balanceOf",
                                params: {
                                    _owner: t
                                }
                            });
                            return this.call(e)
                        }
                    }, {
                        key: "deposit",
                        value: function (t) {
                            return this.transfer(d.a[this.nid].dex, t, JSON.stringify({
                                method: "_deposit"
                            }))
                        }
                    }, {
                        key: "totalSupply",
                        value: function () {
                            var t = this.paramsBuilder({
                                method: "totalSupply"
                            });
                            return this.call(t)
                        }
                    }, {
                        key: "transfer",
                        value: function (t, e, n) {
                            var r = this.transactionParamsBuilder({
                                method: "transfer",
                                params: {
                                    _to: t,
                                    _value: u.IconConverter.toHex(e),
                                    _data: n && u.IconConverter.toHex(n)
                                }
                            });
                            return this.callICONPlugins(r)
                        }
                    }, {
                        key: "swapToOutputCurrency",
                        value: function (t, e, n) {
                            var r = {
                                method: "_swap",
                                params: {
                                    toToken: d.a[this.nid][e.toLowerCase()],
                                    minimumReceive: n.toFixed()
                                }
                            };
                            return this.transfer(d.a[this.nid].dex, u.IconAmount.of(t.toNumber(), u.IconAmount.Unit.ICX).toLoop(), JSON.stringify(r))
                        }
                    }]), n
                }(O),
                E = function (t) {
                    Object(s.a)(n, t);
                    var e = Object(l.a)(n);

                    function n (t) {
                        var a;
                        return Object(r.a)(this, n), (a = e.call(this, t)).address = d.a[a.nid].dex, a
                    }
                    return Object(a.a)(n, [{
                        key: "getPrice",
                        value: function (t) {
                            var e = this.paramsBuilder({
                                method: "getPrice",
                                params: {
                                    _id: u.IconConverter.toHex(t)
                                }
                            });
                            return this.call(e)
                        }
                    }, {
                        key: "getQuotePriceInBase",
                        value: function (t) {
                            var e = this.paramsBuilder({
                                method: "getQuotePriceInBase",
                                params: {
                                    _id: u.IconConverter.toHex(t)
                                }
                            });
                            return this.call(e)
                        }
                    }, {
                        key: "add",
                        value: function (t, e, n, r) {
                            var a = this.transactionParamsBuilder({
                                method: "add",
                                params: {
                                    _baseToken: t,
                                    _quoteToken: e,
                                    _baseValue: u.IconConverter.toHex(n),
                                    _quoteValue: u.IconConverter.toHex(r)
                                }
                            });
                            return this.callICONPlugins(a)
                        }
                    }, {
                        key: "balanceOf",
                        value: function (t, e) {
                            var n = this.paramsBuilder({
                                method: "balanceOf",
                                params: {
                                    _owner: t,
                                    _id: u.IconConverter.toHex(e)
                                }
                            });
                            return this.call(n)
                        }
                    }, {
                        key: "totalSupply",
                        value: function (t) {
                            var e = this.paramsBuilder({
                                method: "totalSupply",
                                params: {
                                    _id: u.IconConverter.toHex(t)
                                }
                            });
                            return this.call(e)
                        }
                    }, {
                        key: "getPoolTotal",
                        value: function (t, e) {
                            var n = this.paramsBuilder({
                                method: "getPoolTotal",
                                params: {
                                    _id: u.IconConverter.toHex(t),
                                    _token: e
                                }
                            });
                            return this.call(n)
                        }
                    }, {
                        key: "transferICX",
                        value: function (t) {
                            var e = this.transferICXParamsBuilder({
                                value: t
                            });
                            return this.callICONPlugins(e)
                        }
                    }, {
                        key: "getICXWithdrawLock",
                        value: function () {
                            var t = this.paramsBuilder({
                                method: "getICXWithdrawLock"
                            });
                            return this.call(t)
                        }
                    }, {
                        key: "cancelSicxIcxOrder",
                        value: function () {
                            var t = this.transactionParamsBuilder({
                                method: "cancelSicxicxOrder"
                            });
                            return this.callICONPlugins(t)
                        }
                    }, {
                        key: "remove",
                        value: function (t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                                r = this.transactionParamsBuilder({
                                    method: "remove",
                                    params: {
                                        _id: u.IconConverter.toHex(t),
                                        _value: u.IconConverter.toHex(e),
                                        _withdraw: u.IconConverter.toHex(n)
                                    }
                                });
                            return this.callICONPlugins(r)
                        }
                    }, {
                        key: "getFees",
                        value: function () {
                            var t = this.paramsBuilder({
                                method: "getFees"
                            });
                            return this.call(t)
                        }
                    }, {
                        key: "isEarningRewards",
                        value: function (t, e) {
                            var n = this.paramsBuilder({
                                method: "isEarningRewards",
                                params: {
                                    _address: t,
                                    _id: u.IconConverter.toHex(e)
                                }
                            });
                            return this.call(n)
                        }
                    }, {
                        key: "withdraw",
                        value: function (t, e) {
                            var n = this.transactionParamsBuilder({
                                method: "withdraw",
                                params: {
                                    _token: t,
                                    _value: u.IconConverter.toHex(e)
                                }
                            });
                            return this.callICONPlugins(n)
                        }
                    }, {
                        key: "getICXBalance",
                        value: function (t) {
                            var e = this.paramsBuilder({
                                method: "getICXBalance",
                                params: {
                                    _address: t
                                }
                            });
                            return this.call(e)
                        }
                    }, {
                        key: "getSicxEarnings",
                        value: function (t) {
                            var e = this.paramsBuilder({
                                method: "getSicxEarnings",
                                params: {
                                    _user: t
                                }
                            });
                            return this.call(e)
                        }
                    }, {
                        key: "withdrawSicxEarnings",
                        value: function () {
                            var t = this.transactionParamsBuilder({
                                method: "withdrawSicxEarnings"
                            });
                            return this.callICONPlugins(t)
                        }
                    }]), n
                }(O),
                k = function (t) {
                    Object(s.a)(n, t);
                    var e = Object(l.a)(n);

                    function n (t) {
                        var a;
                        return Object(r.a)(this, n), (a = e.call(this, t)).address = d.a[a.nid].baln, a
                    }
                    return Object(a.a)(n, [{
                        key: "balanceOf",
                        value: function (t) {
                            return this.provider.getBalance(t).execute()
                        }
                    }, {
                        key: "transfer",
                        value: function (t, e, n) {
                            var r = this.transactionParamsBuilder({
                                method: "transfer",
                                params: {
                                    _to: t,
                                    _value: u.IconConverter.toHex(e),
                                    _data: u.IconConverter.toHex(n)
                                }
                            });
                            return this.callICONPlugins(r)
                        }
                    }]), n
                }(O),
                S = function (t) {
                    Object(s.a)(n, t);
                    var e = Object(l.a)(n);

                    function n (t) {
                        var a;
                        return Object(r.a)(this, n), (a = e.call(this, t)).address = d.a[a.nid].loans, a
                    }
                    
                    return Object(a.a)(n, [{
                        key: "withdrawCollateral",
                        value: function (t) {
                            var e = this.transactionParamsBuilder({
                                method: "withdrawCollateral",
                                params: {
                                    _value: u.IconConverter.toHex(t)
                                }
                            });
                            console.log("Tx withdrawCollateral=", e)
                            return this.callICONPlugins(e)
                        }
                    }, {
                        key: "depositAndBorrow",
                        value: function (t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = this.transactionParamsBuilder({
                                    method: "depositAndBorrow",
                                    value: t,
                                    params: {
                                        _asset: e.asset,
                                        _amount: e.amount && u.IconConverter.toHex(e.amount),
                                        _from: e.from,
                                        _value: e.value && u.IconConverter.toHex(e.value)
                                    }
                                });
                            console.log("Tx depositAndBorrow=", n)
                            return this.callICONPlugins(n)
                        }
                    }, {
                        key: "returnAsset",
                        value: function (t, e) {
                            var n = this.transactionParamsBuilder({
                                method: "returnAsset",
                                params: {
                                    _symbol: t,
                                    _value: u.IconConverter.toHex(e)
                                }
                            });
                            console.log("Tx returnAsset=", n)
                            return this.callICONPlugins(n)
                        }
                    }, {
                        key: "getAvailableAssets",
                        value: function () {
                            var t = this.paramsBuilder({
                                method: "getAvailableAssets"
                            });
                            return this.call(t)
                        }
                    }, {
                        key: "getAccountPositions",
                        value: function (t) {
                            var e = this.paramsBuilder({
                                method: "getAccountPositions",
                                params: {
                                    _owner: t
                                }
                            });
                            return this.call(e)
                        }
                    }]), n
                }(O),
                I = function (t) {
                    Object(s.a)(n, t);
                    var e = Object(l.a)(n);

                    function n (t) {
                        var a;
                        return Object(r.a)(this, n), (a = e.call(this, t)).address = d.a[a.nid].rewards, a
                    }
                    return Object(a.a)(n, [{
                        key: "claimRewards",
                        value: function () {
                            var t = Object(b.a)(p.a.mark((function t () {
                                var e;
                                return p.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return e = this.transactionParamsBuilder({
                                                method: "claimRewards"
                                            }), t.abrupt("return", this.callICONPlugins(e));
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));
                            return function () {
                                return t.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getBalnHolding",
                        value: function (t) {
                            var e = this.paramsBuilder({
                                method: "getBalnHolding",
                                params: {
                                    _holder: t
                                }
                            });
                            return this.call(e)
                        }
                    }, {
                        key: "getRecipientsSplit",
                        value: function () {
                            var t = this.paramsBuilder({
                                method: "getRecipientsSplit"
                            });
                            return this.call(t)
                        }
                    }, {
                        key: "getEmission",
                        value: function (t) {
                            var e = this.paramsBuilder({
                                method: "getEmission",
                                params: {
                                    _day: t && u.IconConverter.toHex(t)
                                }
                            });
                            return this.call(e)
                        }
                    }, {
                        key: "getAPY",
                        value: function (t) {
                            var e = this.paramsBuilder({
                                method: "getAPY",
                                params: {
                                    _name: t
                                }
                            });
                            return this.call(e)
                        }
                    }]), n
                }(O),
                C = function (t) {
                    Object(s.a)(n, t);
                    var e = Object(l.a)(n);

                    function n (t) {
                        var a;
                        return Object(r.a)(this, n), (a = e.call(this, t)).address = d.a[a.nid].sicx, a
                    }
                    return Object(a.a)(n, [{
                        key: "depositAndBorrow",
                        value: function (t) {
                            return this.transfer(d.a[this.nid].loans, t, JSON.stringify({
                                _asset: "",
                                _amount: 0
                            }))
                        }
                    }, {
                        key: "deposit",
                        value: function (t) {
                            return this.transfer(d.a[this.nid].dex, t, JSON.stringify({
                                method: "_deposit"
                            }))
                        }
                    }, {
                        key: "swapBybnUSD",
                        value: function (t, e) {
                            var n = {
                                method: "_swap",
                                params: {
                                    toToken: d.a[this.nid].bnusd,
                                    minimumReceive: e.toFixed()
                                }
                            };
                            return this.transfer(d.a[this.nid].dex, u.IconAmount.of(t.toNumber(), u.IconAmount.Unit.ICX).toLoop(), JSON.stringify(n))
                        }
                    }, {
                        key: "swapToICX",
                        value: function (t) {
                            return this.transfer(d.a[this.nid].dex, u.IconAmount.of(t.toNumber(), u.IconAmount.Unit.ICX).toLoop(), JSON.stringify({
                                method: "_swap_icx"
                            }))
                        }
                    }, {
                        key: "balanceOf",
                        value: function (t) {
                            var e = this.paramsBuilder({
                                method: "balanceOf",
                                params: {
                                    _owner: t
                                }
                            });
                            return this.call(e)
                        }
                    }, {
                        key: "transfer",
                        value: function (t, e, n) {
                            var r = this.transactionParamsBuilder({
                                method: "transfer",
                                params: {
                                    _to: t,
                                    _value: u.IconConverter.toHex(e),
                                    _data: n && u.IconConverter.toHex(n)
                                }
                            });
                            return this.callICONPlugins(r)
                        }
                    }, {
                        key: "unstake",
                        value: function (t) {
                            return this.transfer(d.a[this.nid].staking, u.IconConverter.toHex(t), JSON.stringify({
                                method: "unstake"
                            }))
                        }
                    }]), n
                }(O),
                U = function (t) {
                    Object(s.a)(n, t);
                    var e = Object(l.a)(n);

                    function n (t) {
                        var a;
                        return Object(r.a)(this, n), (a = e.call(this, t)).address = d.a[a.nid].staking, a
                    }
                    return Object(a.a)(n, [{
                        key: "getTodayRate",
                        value: function () {
                            var t = this.paramsBuilder({
                                method: "getTodayRate"
                            });
                            return this.call(t)
                        }
                    }, {
                        key: "stakeICX",
                        value: function (t, e) {
                            var n = this.transactionParamsBuilder({
                                method: "stakeICX",
                                value: u.IconAmount.of(e.toNumber(), u.IconAmount.Unit.ICX).toLoop(),
                                params: {
                                    _to: t
                                }
                            });
                            return this.callICONPlugins(n)
                        }
                    }, {
                        key: "getUserUnstakeInfo",
                        value: function (t) {
                            var e = this.paramsBuilder({
                                method: "getUserUnstakeInfo",
                                params: {
                                    _address: t
                                }
                            });
                            return this.call(e)
                        }
                    }]), n
                }(O),
                N = n(164),
                A = new o.a("1000000000000000000"),
                T = function () {
                    function t (e) {
                        Object(r.a)(this, t), this.contractSettings = void 0, this.networkId = void 0, this.provider = void 0, this.BALN = void 0, this.sICX = void 0, this.bnUSD = void 0, this.ICX = void 0, this.Loans = void 0, this.Band = void 0, this.Staking = void 0, this.Dex = void 0, this.Rewards = void 0, this.Airdrip = void 0, this.contractSettings = new N.b(e), this.networkId = this.contractSettings.networkId, this.provider = this.contractSettings.provider, this.BALN = new x(this.contractSettings), this.ICX = new k(this.contractSettings), this.bnUSD = new j(this.contractSettings), this.sICX = new C(this.contractSettings), this.Loans = new S(this.contractSettings), this.Band = new w(this.contractSettings), this.Staking = new U(this.contractSettings), this.Dex = new E(this.contractSettings), this.Rewards = new I(this.contractSettings), this.Airdrip = new y(this.contractSettings)
                    }
                    return Object(a.a)(t, [{
                        key: "inject",
                        value: function (t) {
                            var e = t.account,
                                n = t.legerSettings;
                            return this.contractSettings.account = e || this.contractSettings.account, this.contractSettings.ledgerSettings.transport = (null === n || void 0 === n ? void 0 : n.transport) || this.contractSettings.ledgerSettings.transport, this.contractSettings.ledgerSettings.actived = !Object(c.isEmpty)(this.contractSettings.ledgerSettings.transport), this.contractSettings.ledgerSettings.path = (null === n || void 0 === n ? void 0 : n.path) || this.contractSettings.ledgerSettings.path, this
                        }
                    }, {
                        key: "transfer",
                        value: function (t, e) {
                            var n = new O(this.contractSettings);
                            n.address = t;
                            var r = n.transferICXParamsBuilder({
                                value: e
                            });
                            return n.callICONPlugins(r)
                        }
                    }]), t
                }();
            T.utils = {
                toLoop: function (t) {
                    return new o.a(t).times(A).integerValue(o.a.ROUND_DOWN)
                },
                toIcx: function (t) {
                    return new o.a(t).div(A)
                },
                POOL_IDS: {
                    BALNbnUSD: 3,
                    sICXbnUSD: 2,
                    sICXICX: 1
                }
            }
        },
        173: function (t, e, n) {
            "use strict";
            var r = new (n(172).a)({
                networkId: parseInt(("1", "1"))
            });
            e.a = r
        },
        174: function (t, e, n) {
            "use strict";
            n.d(e, "e", (function () {
                return u
            })), n.d(e, "c", (function () {
                return f
            })), n.d(e, "d", (function () {
                return b
            })), n.d(e, "a", (function () {
                return h
            })), n.d(e, "b", (function () {
                return m
            }));
            var r, a, i = n(28),
                o = n(9),
                c = n.n(o),
                s = n(299),
                l = n(42);

            function u (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7;
                // if (!Object(s.b)(t)) throw Error("Invalid 'address' parameter '".concat(t, "'."));
                return "".concat(t.substring(0, e + 2), "...").concat(t.substring(42 - e))
            }
            var d = (r = {}, Object(i.a)(r, l.c.MAINNET, "https://balnmainnet.techiast.com:8069"), Object(i.a)(r, l.c.YEOUIDO, "https://balanced.techiast.com:8069"), r),
                f = function () {
                    return d[l.b]
                },
                p = (a = {}, Object(i.a)(a, l.c.MAINNET, "https://tracker.icon.foundation"), Object(i.a)(a, l.c.YEOUIDO, "https://bicon.tracker.solidwallet.io"), a);

            function b (t, e, n) {
                var r = p[t];
                switch (n) {
                    case "transaction":
                        return "".concat(r, "/transaction/").concat(e);
                    case "token":
                        return "".concat(r, "/token/").concat(e);
                    case "block":
                        return "".concat(r, "/block/").concat(e);
                    case "address":
                    default:
                        return "".concat(r, "/address/").concat(e)
                }
            }

            function h (t) {
                return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }

            function m (t, e) {
                if (void 0 === t || t.isNaN() || t.isEqualTo(0)) return "0";
                switch (e) {
                    case "currency":
                        return t.isLessThan(new c.a(1)) ? t.precision(2, c.a.ROUND_DOWN).toString() : t.dp(2).toFormat();
                    case "input":
                        return 0 === t.decimalPlaces() ? t.toFixed(0, c.a.ROUND_UP) : t.isLessThan(new c.a(1)) ? t.precision(2, c.a.ROUND_DOWN).toString() : t.toFixed(2, c.a.ROUND_DOWN);
                    case "ratio":
                        return 0 === t.decimalPlaces() ? t.toFormat(0, c.a.ROUND_UP) : t.toFixed(4, 1)
                }
            }
        },
        176: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return r
            })), n.d(e, "c", (function () {
                return i
            })), n.d(e, "b", (function () {
                return o
            }));
            var r, a = n(4);
            ! function (t) {
                t.CURRENCY_A = "CURRENCY_A", t.CURRENCY_B = "CURRENCY_B"
            }(r || (r = {}));
            var i = Object(a.b)("mint/typeInputMint"),
                o = Object(a.b)("mint/resetMintState")
        },
        19: function (t, e, n) {
            "use strict";
            var r, a, i = n(28);
            ! function (t) {
                t[t.MAINNET = 1] = "MAINNET", t[t.YEOUIDO = 3] = "YEOUIDO", t[t.EULJIRO = 2] = "EULJIRO", t[t.PAGODA = 80] = "PAGODA"
            }(a || (a = {}));
            var o = (r = {}, Object(i.a)(r, a.MAINNET, {
                loans: "cx66d4d90f5f113eba575bf793570135f9b10cece1",
                staking: "cx43e2eec79eb76293c298f2b17aec06097be606e0",
                dividends: "cx13f08df7106ae462c8358066e6d47bb68d995b6d",
                reserve: "cxf58b9a1898998a31be7f1d99276204a3333ac9b3",
                daofund: "cx835b300dcfe01f0bdb794e134a0c5628384f4367",
                rewards: "cx10d59e8103ab44635190bd4139dbfd682fa2d07e",
                dex: "cxa0af3165c08318e988cb30993b3048335b94af6c",
                governance: "cx44250a12074799e26fdeee75648ae47e2cc84219",
                band: "cxe647e0af68a4661566f5e9861ad4ac854de808a2",
                sicx: "cx2609b924e33ef00b648a409245c7ea394c467824",
                bnusd: "cx88fd7df7ddff82f7cc735c871dc519838cb235bb",
                baln: "cxf61cd5a45dc9f91c15aa65831a30a90d59a09619",
                bwt: "cxcfe9d1f83fa871e903008471cca786662437e58d",
                airdrip: "cxaf244cf3c7164fe6f996f398a9d99c4d4a85cf15"
            }), Object(i.a)(r, a.YEOUIDO, {
                loans: "cxca3583ed5c2577c35fbc5d6018b7acc53b371dbd",
                staking: "cx6008e00e91d4d54c0f111140880ccb0f50081714",
                dividends: "cxbd0cf1843ef952ba4dd54eb5264a0fd0c2a95571",
                reserve: "cx4d9bbd3d23117faea8bf5c1362fb11d5ebdbe2fa",
                daofund: "cx59aeeea3f025686dfd4ce8639ffa24f421726b4c",
                rewards: "cxde0d2b42b55b4e9305affc21dc4e7a4f01acf014",
                dex: "cxb7aa0ad52cb09407f7730bc24697ee46a1afc16a",
                governance: "cx231678864e72135bae7312b4b59c9902386b4987",
                band: "cx61a36e5d10412e03c907a507d1e8c6c3856d9964",
                sicx: "cx53b3346dc782f26c4a686d537ef8fb38c4dba291",
                bnusd: "cxb0a005e7741cd17e9b2e8afad3ede43001084727",
                baln: "cx2d525581c442b7f885c289fe0d13db30c6ad2f58",
                bwt: "cxc578f12080cf43c54104fca3d9a93f914d5d0c78",
                airdrip: "cx8ed4fbee9d6497f91ea90933db288ff4b43e54ba"
            }), r);
            e.a = o
        },
        220: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return S
            }));
            var r = n(18),
                a = n(51),
                i = n(115),
                o = n(17),
                c = n(0),
                s = n.n(c),
                l = n(293),
                u = n(453),
                d = n(134),
                f = n(170),
                p = n(442),
                b = n(20);
            n(746);

            function h () {
                var t = Object(o.a)(["\n          width: 100vw;\n          border-radius: 20px;\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n        "]);
                return h = function () {
                    return t
                }, t
            }

            function m () {
                var t = Object(o.a)(["\n      width:  85vw;\n      ", "\n    "]);
                return m = function () {
                    return t
                }, t
            }

            function v () {
                var t = Object(o.a)(["\n      width: 65vw;\n      margin: 0;\n    "]);
                return v = function () {
                    return t
                }, t
            }

            function g () {
                var t = Object(o.a)(["\n        min-height: ", "vh;\n      "]);
                return g = function () {
                    return t
                }, t
            }

            function O () {
                var t = Object(o.a)(["\n        max-height: ", "vh;\n      "]);
                return O = function () {
                    return t
                }, t
            }

            function y () {
                var t = Object(o.a)(["\n  overflow-y: ", ";\n\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    background-color: ", ";\n    box-shadow: 0 4px 8px 0 ", ";\n    padding: 0px;\n    width: 50vw;\n    overflow-y: ", ";\n    overflow-x: hidden;\n\n    align-self: ", ";\n\n    max-width: 420px;\n    ", "\n    ", "\n    display: flex;\n    border-radius: 10px;\n    border: 2px solid ", ";\n    ", "\n    ", "\n  }\n"]);
                return y = function () {
                    return t
                }, t
            }

            function x () {
                var t = Object(o.a)(["\n  &[data-reach-dialog-overlay] {\n    z-index: ", ";\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: ", ";\n  }\n"]);
                return x = function () {
                    return t
                }, t
            }
            var w = Object(f.a)(l.b),
                j = Object(b.default)(w)(x(), (function (t) {
                    return t.theme.zIndices.modal
                }), (function (t) {
                    return t.theme.colors.modalBG
                })),
                E = Object(f.a)(l.a),
                k = Object(b.default)((function (t) {
                    t.minHeight, t.maxHeight, t.mobile, t.isOpen;
                    var e = Object(i.a)(t, ["minHeight", "maxHeight", "mobile", "isOpen"]);
                    return s.a.createElement(E, e)
                })).attrs({
                    "aria-label": "dialog"
                })(y(), (function (t) {
                    return t.mobile ? "scroll" : "hidden"
                }), (function (t) {
                    return t.theme.colors.bg4
                }), (function (t) {
                    var e = t.theme;
                    return Object(u.a)(.95, e.shadow1)
                }), (function (t) {
                    return t.mobile ? "scroll" : "hidden"
                }), (function (t) {
                    return t.mobile ? "flex-end" : "center"
                }), (function (t) {
                    var e = t.maxHeight;
                    return e && Object(b.css)(O(), e)
                }), (function (t) {
                    var e = t.minHeight;
                    return e && Object(b.css)(g(), e)
                }), (function (t) {
                    return t.theme.colors.primary
                }), (function (t) {
                    return t.theme.mediaWidth.upToMedium(v())
                }), (function (t) {
                    var e = t.theme,
                        n = t.mobile;
                    return e.mediaWidth.upToSmall(m(), n && Object(b.css)(h()))
                }));

            function S (t) {
                var e = t.isOpen,
                    n = t.onDismiss,
                    i = t.minHeight,
                    o = void 0 !== i && i,
                    c = t.maxHeight,
                    l = void 0 === c ? 90 : c,
                    u = t.initialFocusRef,
                    b = t.children,
                    h = t.className,
                    m = Object(f.c)(e, null, {
                        config: {
                            duration: 200
                        },
                        from: {
                            opacity: 0
                        },
                        enter: {
                            opacity: 1
                        },
                        leave: {
                            opacity: 0
                        }
                    }),
                    v = Object(f.b)((function () {
                        return {
                            y: 0,
                            config: {
                                mass: 1,
                                tension: 210,
                                friction: 20
                            }
                        }
                    })),
                    g = Object(a.a)(v, 2),
                    O = g[0].y,
                    y = g[1],
                    x = Object(p.a)({
                        onDrag: function (t) {
                            y({
                                y: t.down ? t.movement[1] : 0
                            }), (t.movement[1] > 300 || t.velocity > 3 && t.direction[1] > 0) && n()
                        }
                    });
                return s.a.createElement(s.a.Fragment, null, m.map((function (t) {
                    var e = t.item,
                        a = t.key,
                        i = t.props;
                    return e && s.a.createElement(j, {
                        key: a,
                        style: i,
                        onDismiss: n,
                        initialFocusRef: u
                    }, s.a.createElement(k, Object.assign({}, d.isMobile ? Object(r.a)(Object(r.a)({}, x()), {}, {
                        style: {
                            transform: O.interpolate((function (t) {
                                return "translateY(".concat(t > 0 ? t : 0, "px)")
                            }))
                        }
                    }) : {}, {
                        "aria-label": "dialog content",
                        minHeight: o,
                        maxHeight: l,
                        mobile: d.isMobile,
                        className: h
                    }), !u && d.isMobile ? s.a.createElement("div", {
                        tabIndex: 1
                    }) : null, b))
                })))
            }
        },
        280: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return a
            })), n.d(e, "b", (function () {
                return i
            }));
            var r = n(4),
                a = Object(r.b)("wallet/changeBalances"),
                i = Object(r.b)("wallet/resetBalances")
        },
        292: function (t) {
            t.exports = JSON.parse('{"title":"welcome"}')
        },
        294: function (t, e, n) {
            "use strict";
            n.d(e, "c", (function () {
                return p
            })), n.d(e, "b", (function () {
                return b
            })), n.d(e, "a", (function () {
                return r
            })), n.d(e, "d", (function () {
                return h
            }));
            var r, a = n(18),
                i = n(0),
                o = n.n(i),
                c = n(42),
                s = n(36),
                l = n(112),
                u = n(168),
                d = n(174),
                f = n(90);

            function p () {
                var t = Object(c.d)(),
                    e = t.networkId,
                    n = t.account,
                    r = Object(s.c)();
                return Object(i.useCallback)((function (t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        c = i.summary,
                        s = i.pending;
                    if (n && e) {
                        var p = t.hash;
                        if (!p) throw Error("No transaction hash found.");
                        var b = Object(d.d)(e, p, "transaction"),
                            h = {
                                onClick: function () {
                                    return window.open(b, "_blank")
                                }
                            };
                        Object(l.b)(o.a.createElement(u.b, {
                            summary: s || "Your transaction has been sent to the network"
                        }), Object(a.a)(Object(a.a)({}, h), {}, {
                            toastId: p
                        })), r(Object(f.a)({
                            hash: p,
                            from: n,
                            networkId: e,
                            summary: c
                        }))
                    }
                }), [r, e, n])
            }

            function b () {
                var t, e = Object(c.d)().networkId,
                    n = Object(s.d)((function (t) {
                        return t.transactions
                    }));
                return e && null !== (t = n[e]) && void 0 !== t ? t : {}
            }

            function h (t) {
                var e, n = b();
                return t && n[t] && n[t].receipt ? (null === (e = n[t].receipt) || void 0 === e ? void 0 : e.status) ? r.success : r.failure : r.pending
            } ! function (t) {
                t.pending = "pending", t.success = "success", t.failure = "failure"
            }(r || (r = {}))
        },
        295: function (t, e, n) {
            "use strict";
            n.d(e, "c", (function () {
                return a
            })), n.d(e, "b", (function () {
                return i
            })), n.d(e, "e", (function () {
                return s
            })), n.d(e, "a", (function () {
                return l
            })), n.d(e, "f", (function () {
                return u
            })), n.d(e, "d", (function () {
                return d
            }));
            var r = n(450),
                a = {
                    empty: {
                        symbol: "",
                        decimals: 0,
                        name: "empty"
                    },
                    icx: {
                        symbol: "ICX",
                        decimals: 3,
                        name: "ICON"
                    },
                    sicx: {
                        symbol: "sICX",
                        decimals: 3,
                        name: "Staked ICX"
                    },
                    bnusd: {
                        symbol: "bnUSD",
                        decimals: 3,
                        name: "ICON Dollar"
                    },
                    baln: {
                        symbol: "BALN",
                        decimals: 3,
                        name: "Balanced Token"
                    }
                },
                i = ["ICX", "sICX", "bnUSD", "BALN"],
                o = n.n(r)()(i),
                c = function (t, e) {
                    return "".concat(t, " / ").concat(e)
                },
                s = [{
                    baseCurrencyKey: o.sICX,
                    quoteCurrencyKey: o.bnUSD,
                    pair: c(o.sICX, o.bnUSD),
                    poolId: 2
                }, {
                    baseCurrencyKey: o.BALN,
                    quoteCurrencyKey: o.bnUSD,
                    pair: c(o.BALN, o.bnUSD),
                    poolId: 3
                }, {
                    baseCurrencyKey: o.sICX,
                    quoteCurrencyKey: o.ICX,
                    pair: c(o.sICX, o.ICX),
                    poolId: 1
                }, {
                    baseCurrencyKey: o.ICX,
                    quoteCurrencyKey: o.sICX,
                    pair: c(o.ICX, o.sICX),
                    poolId: 1
                }, {
                    baseCurrencyKey: o.bnUSD,
                    quoteCurrencyKey: o.sICX,
                    pair: c(o.bnUSD, o.sICX),
                    poolId: 2
                }, {
                    baseCurrencyKey: o.bnUSD,
                    quoteCurrencyKey: o.BALN,
                    pair: c(o.bnUSD, o.BALN),
                    poolId: 3
                }],
                l = [s[0], s[1], s[2]],
                u = function (t) {
                    return s.filter((function (e) {
                        return e.baseCurrencyKey === t
                    })).map((function (t) {
                        return t.quoteCurrencyKey
                    }))
                },
                d = Array.from(new Set(s.map((function (t) {
                    return t.baseCurrencyKey
                }))))
        },
        296: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return h
            }));
            var r = n(115),
                a = n(17),
                i = n(0),
                o = n.n(i),
                c = n(33),
                s = n(20);

            function l () {
                var t = Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);
                return l = function () {
                    return t
                }, t
            }

            function u () {
                var t = Object(a.a)(["\n  width: 1px;\n  height: 100%;\n  background-color: ", ";\n"]);
                return u = function () {
                    return t
                }, t
            }

            function d () {
                var t = Object(a.a)(["\n  height: 1px;\n  background-color: ", ";\n"]);
                return d = function () {
                    return t
                }, t
            }
            var f = Object(s.default)(c.Box)(d(), (function (t) {
                return t.theme.colors.divider
            }));
            e.b = f;
            var p = s.default.div(u(), (function (t) {
                return t.theme.colors.divider
            })),
                b = s.default.div(l()),
                h = function (t) {
                    var e = t.text;
                    Object(r.a)(t, ["text"]);
                    return o.a.createElement(b, null, o.a.createElement(p, null), o.a.createElement("span", null, e), o.a.createElement(p, null))
                }
        },
        297: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return a
            }));
            var r = n(0);

            function a (t, e) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    a = Object(r.useRef)();
                Object(r.useEffect)((function () {
                    a.current = t
                }), [t]), Object(r.useEffect)((function () {
                    function t () {
                        var t = a.current;
                        t && t()
                    }
                    if (null !== e) {
                        n && t();
                        var r = setInterval(t, e);
                        return function () {
                            return clearInterval(r)
                        }
                    }
                }), [e, n])
            }
        },
        298: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return i
            }));
            var r = n(17);

            function a () {
                var t = Object(r.a)(["\n  color: #2fccdc;\n  font-size: 14px;\n  text-decoration: none;\n  background: transparent;\n  display: inline-block;\n  position: relative;\n  padding-bottom: 3px;\n  margin-bottom: -9px;\n\n  &:after {\n    content: '';\n    display: block;\n    width: 0px;\n    height: 1px;\n    margin-top: 3px;\n    background: transparent;\n    border-radius: 3px;\n    transition: width 0.3s ease, background-color 0.3s ease;\n  }\n\n  &:hover:after {\n    width: 100%;\n    background: #2fccdc;\n  }\n"]);
                return a = function () {
                    return t
                }, t
            }
            var i = n(20).default.a(a())
        },
        302: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return a
            }));
            var r = n(4),
                a = Object(r.b)("ratio/changeRatioValue")
        },
        303: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return a
            }));
            var r = n(4),
                a = Object(r.b)("reward/setReward")
        },
        42: function (t, e, n) {
            "use strict";
            n.d(e, "c", (function () {
                return a
            })), n.d(e, "b", (function () {
                return v
            })), n.d(e, "a", (function () {
                return y
            })), n.d(e, "d", (function () {
                return x
            }));
            var r, a, i = n(51),
                o = n(5),
                c = n.n(o),
                s = n(14),
                l = n(28),
                u = n(0),
                d = n.n(u),
                f = n(3),
                p = n.n(f),
                b = n(77),
                h = n(114);
            f.IconConverter.toBigNumber(3);
            ! function (t) {
                t[t.MAINNET = 1] = "MAINNET", t[t.YEOUIDO = 3] = "YEOUIDO", t[t.EULJIRO = 2] = "EULJIRO", t[t.PAGODA = 80] = "PAGODA"
            }(a || (a = {}));
            var m = (r = {}, Object(l.a)(r, a.MAINNET, "https://ctz.solidwallet.io/api/v3"), Object(l.a)(r, a.YEOUIDO, "https://bicon.net.solidwallet.io/api/v3"), r),
                v = parseInt(("1", "1")),
                g = new p.a(new p.a.HttpProvider(m[v])),
                O = d.a.createContext({
                    account: void 0,
                    ledgerAddressPoint: -1,
                    request: b.d,
                    requestAddress: function (t) {
                        return null
                    },
                    iconService: g,
                    hasExtension: !1,
                    disconnect: function () {
                        return null
                    },
                    networkId: a.MAINNET
                });

            function y (t) {
                var e = t.children,
                    n = Object(h.f)(),
                    r = d.a.useState(-1),
                    a = Object(i.a)(r, 2),
                    o = a[0],
                    l = a[1],
                    u = d.a.useState(),
                    f = Object(i.a)(u, 2),
                    p = f[0],
                    m = f[1],
                    y = d.a.useState(!1),
                    x = Object(i.a)(y, 2),
                    w = x[0],
                    j = x[1],
                    E = d.a.useCallback(function () {
                        var t = Object(s.a)(c.a.mark((function t (e) {
                            var r;
                            return c.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        if ("ICONEX" !== n) {
                                            t.next = 7;
                                            break
                                        }
                                        return t.next = 3, Object(b.d)({
                                            type: b.b.REQUEST_ADDRESS
                                        });
                                    case 3:
                                        (null === (r = t.sent) || void 0 === r ? void 0 : r.type) === b.c.RESPONSE_ADDRESS && m(null === r || void 0 === r ? void 0 : "cxd980b489783b63660f9e10fa4ecbb40e30a30330"), t.next = 8;
                                        // (null === (r = t.sent) || void 0 === r ? void 0 : r.type) === b.c.RESPONSE_ADDRESS && m(null === r || void 0 === r ? void 0 : r.payload), t.next = 8;
                                        break;
                                    case 7:
                                        "LEDGER" === n && (m(null === e || void 0 === e ? void 0 : e.address), l((null === e || void 0 === e ? void 0 : e.point) || 0));
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }(), [n]),
                    k = d.a.useCallback((function () {
                        m(null)
                    }), []);
                d.a.useEffect((function () {
                    var t = function () {
                        var t = Object(s.a)(c.a.mark((function t () {
                            return c.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Object(b.d)({
                                            type: b.b.REQUEST_HAS_ACCOUNT
                                        });
                                    case 2:
                                        j(!0);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function () {
                            return t.apply(this, arguments)
                        }
                    }();
                    return window.addEventListener("load", t),
                        function () {
                            window.removeEventListener("load", t)
                        }
                }), []);
                var S = {
                    account: p,
                    ledgerAddressPoint: o,
                    requestAddress: E,
                    request: b.d,
                    iconService: g,
                    hasExtension: w,
                    disconnect: k,
                    networkId: v
                };
                return d.a.createElement(O.Provider, {
                    value: S
                }, e)
            }

            function x () {
                return d.a.useContext(O)
            }
        },
        437: function (t, e, n) {
            "use strict";
            (function (t) {
                n.d(e, "a", (function () {
                    return P
                }));
                var r = n(51),
                    a = n(17),
                    i = n(5),
                    o = n.n(i),
                    c = n(18),
                    s = n(14),
                    l = n(0),
                    u = n.n(l),
                    d = n(282),
                    f = n(438),
                    p = n(172),
                    b = n(164),
                    h = n(42),
                    m = n(134),
                    v = n(33),
                    g = n(20),
                    O = n(296),
                    y = n(298),
                    x = n(220),
                    w = n(52),
                    j = n(443),
                    E = n(444),
                    k = n(173),
                    S = n(58),
                    I = n(114);

                function C () {
                    var t = Object(a.a)(["\n  &[data-reach-dialog-content] {\n    width: 320px;\n  }\n"]);
                    return C = function () {
                        return t
                    }, t
                }

                function U () {
                    var t = Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  cursor: pointer;\n  padding: 5px 20px;\n  margin: 0px 10px;\n  border-radius: 10px;\n  text-decoration: none;\n  color: white;\n  user-select: none;\n\n  > *:first-child {\n    margin-bottom: 10px;\n  }\n\n  :hover {\n    background-color: ", ";\n    opacity: 1;\n  }\n"]);
                    return U = function () {
                        return t
                    }, t
                }

                function N () {
                    var t = Object(a.a)(["\n  width: 500px;\n"]);
                    return N = function () {
                        return t
                    }, t
                }
                var A = function (e) {
                    var n = d.splitPath("".concat(b.a, "/").concat(e, "'")),
                        r = t.alloc(1 + 4 * n.length);
                    return r[0] = n.length, n.forEach((function (t, e) {
                        r.writeUInt32BE(t, 1 + 4 * e)
                    })), r
                },
                    T = function () {
                        var t = Object(s.a)(o.a.mark((function t (e) {
                            var n, r, a, i, s, l, u, d, f, b, h;
                            return o.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.transport, r = e.paging, a = r.offset, i = r.limit, t.prev = 1, s = [], l = a;
                                    case 4:
                                        if (!(l < a + i)) {
                                            t.next = 15;
                                            break
                                        }
                                        return u = A(l), t.next = 8, n.send(224, 2, 0, 1, u);
                                    case 8:
                                        d = t.sent, f = d[0], b = d[1 + f], s.push({
                                            publicKey: d.slice(1, 1 + f).toString("hex"),
                                            address: d.slice(1 + f + 1, 1 + f + 1 + b).toString(),
                                            chainCode: "",
                                            point: l
                                        });
                                    case 12:
                                        l++, t.next = 4;
                                        break;
                                    case 15:
                                        return t.next = 17, Promise.all(s.map((function (t) {
                                            return new Promise((function (e, n) {
                                                k.a.ICX.balanceOf(t.address).then((function (n) {
                                                    e(Object(c.a)(Object(c.a)({}, t), {}, {
                                                        balance: p.a.utils.toIcx(n).toFixed(2)
                                                    }))
                                                })).catch(n)
                                            }))
                                        })));
                                    case 17:
                                        return h = t.sent, t.abrupt("return", h);
                                    case 21:
                                        return t.prev = 21, t.t0 = t.catch(1), console.error("Error from requestLedgerAddress():", t.t0), t.abrupt("return", []);
                                    case 25:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 21]
                            ])
                        })));
                        return function (e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    B = Object(g.default)(x.a)(N()),
                    _ = Object(g.default)(v.Box)(U(), (function (t) {
                        return t.theme.colors.bg3
                    })),
                    D = Object(g.default)(x.a).attrs({
                        "aria-label": "dialog"
                    })(C()),
                    R = null;

                function P () {
                    var t, e = Object(I.c)(S.a.WALLET),
                        n = Object(I.e)(),
                        a = Object(l.useState)(!1),
                        i = Object(r.a)(a, 2),
                        c = i[0],
                        d = i[1],
                        p = Object(l.useState)([]),
                        g = Object(r.a)(p, 2),
                        x = g[0],
                        C = g[1],
                        U = Object(I.b)(),
                        N = Object(l.useState)({
                            offset: 0,
                            limit: 5
                        }),
                        A = Object(r.a)(N, 2),
                        P = A[0],
                        L = P.offset,
                        z = P.limit,
                        X = A[1],
                        F = Object(l.useState)(1),
                        H = Object(r.a)(F, 2),
                        M = H[0],
                        G = H[1],
                        V = Object(l.useCallback)((function () {
                            d(!c)
                        }), [c, d]),
                        J = Object(h.d)(),
                        W = J.requestAddress,
                        Y = J.hasExtension,
                        q = function () {
                            var t = Object(s.a)(o.a.mark((function t (e) {
                                var n, r, a;
                                return o.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return n = e.offset, r = e.limit, t.next = 3, T({
                                                transport: R,
                                                paging: {
                                                    offset: n,
                                                    limit: r
                                                }
                                            });
                                        case 3:
                                            a = t.sent, C(a);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        K = function () {
                            var t = Object(s.a)(o.a.mark((function t () {
                                return o.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            return U("LEDGER"), t.prev = 1, t.next = 4, f.a.create();
                                        case 4:
                                            R = t.sent, V(), q({
                                                offset: L,
                                                limit: z
                                            }), k.a.inject({
                                                legerSettings: {
                                                    transport: R
                                                }
                                            }), t.next = 14;
                                            break;
                                        case 10:
                                            t.prev = 10, t.t0 = t.catch(1), console.log(t.t0), alert("Inject your ledger device, enter your password and retry");
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [1, 10]
                                ])
                            })));
                            return function () {
                                return t.apply(this, arguments)
                            }
                        }(),
                        Q = u.a.useCallback(function () {
                            var t = Object(s.a)(o.a.mark((function t (e) {
                                var n;
                                return o.a.wrap((function (t) {
                                    for (; ;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!(e <= 0)) {
                                                t.next = 3;
                                                break
                                            }
                                            return console.log("This is first pages, cannot request more address, try other please."), t.abrupt("return");
                                        case 3:
                                            if (e !== M) {
                                                t.next = 5;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 5:
                                            return n = (e - 1) * z, t.next = 8, q({
                                                offset: n,
                                                limit: z
                                            });
                                        case 8:
                                            X({
                                                limit: z,
                                                offset: n
                                            }), G(e);
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }(), [z, M, X, G]);
                    return u.a.createElement(u.a.Fragment, null, u.a.createElement(D, {
                        isOpen: e,
                        onDismiss: n
                    }, u.a.createElement(v.Box, {
                        mx: "auto",
                        my: 5
                    }, u.a.createElement(w.c, {
                        textAlign: "center",
                        mb: 5
                    }, "Sign in with:"), u.a.createElement(v.Flex, {
                        alignItems: "stretch",
                        justifyContent: "space-between",
                        mx: 3
                    }, u.a.createElement(_, {
                        onClick: function () {
                            n(), m.isMobile || Y ? W() : window.open("https://chrome.google.com/webstore/detail/iconex/flpiciilemghbmfalicajoolhkkenfel?hl=en", "_blank")
                        }
                    }, u.a.createElement(j.a, {
                        width: "50",
                        height: "50"
                    }), u.a.createElement(v.Text, null, "ICONex")), u.a.createElement(O.a, {
                        text: "or"
                    }), u.a.createElement(_, {
                        onClick: K
                    }, u.a.createElement(E.a, {
                        width: "50",
                        height: "50"
                    }), u.a.createElement(v.Text, null, "Ledger"))), u.a.createElement(w.c, {
                        mx: 4,
                        mt: 6,
                        textAlign: "center"
                    }, "Use at your own risk. Project contributors are not liable for any lost or stolen funds.", " ", u.a.createElement(y.a, {
                        href: "https://balanced.network/disclaimer/",
                        target: "_blank"
                    }, "View disclaimer"), "."))), u.a.createElement(B, {
                        isOpen: c,
                        onDismiss: V
                    }, u.a.createElement(v.Flex, {
                        flexDirection: "column",
                        alignItems: "stretch",
                        m: 5,
                        width: "100%"
                    }, u.a.createElement(w.c, {
                        textAlign: "center",
                        mb: 3
                    }, "Choose a wallet from your Ledger:"), u.a.createElement("table", {
                        className: "wallet"
                    }, u.a.createElement("tbody", null, x.map((function (t) {
                        return u.a.createElement("tr", {
                            key: t.point,
                            onClick: function () {
                                ! function (t) {
                                    var e = t.address,
                                        r = t.point;
                                    console.info(e), W({
                                        address: e,
                                        point: r
                                    }), k.a.inject({
                                        account: e,
                                        legerSettings: {
                                            path: Object(b.c)(r)
                                        }
                                    }), V(), n()
                                }({
                                    address: t.address,
                                    point: t.point
                                })
                            }
                        }, u.a.createElement("td", {
                            style: {
                                textAlign: "left"
                            }
                        }, function (t) {
                            return "".concat(t.slice(0, 9), "...").concat(t.slice(-7))
                        }(t.address)), u.a.createElement("td", {
                            style: {
                                textAlign: "right"
                            }
                        }, t.balance, " ICX"))
                    })))), u.a.createElement("ul", {
                        className: "pagination"
                    }, u.a.createElement("li", {
                        onClick: Object(s.a)(o.a.mark((function t () {
                            return o.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Q(M - 1);
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))
                    }, "\u02c2"), (t = M, t - 1 <= 0 ? [1, 2, 3] : [t - 1, t, t + 1]).map((function (t) {
                        return u.a.createElement("li", {
                            key: Date.now() + Math.random(),
                            className: t === M ? "actived" : "",
                            onClick: Object(s.a)(o.a.mark((function e () {
                                return o.a.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Q(t);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))
                        }, t)
                    })), u.a.createElement("li", {
                        onClick: Object(s.a)(o.a.mark((function t () {
                            return o.a.wrap((function (t) {
                                for (; ;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Q(M + 1);
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))
                    }, "\u02c3")))))
                }
            }).call(this, n(44).Buffer)
        },
        443: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return s
            }));
            var r = n(0);

            function a () {
                return (a = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function i (t, e) {
                if (null == t) return {};
                var n, r, a = function (t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var o = r.createElement("g", {
                transform: "translate(-135)",
                fill: "#2ca9b7"
            }, r.createElement("path", {
                d: "M233.5 31.4l-13 13c2.8 4.6 4.4 9.9 4.4 15.7 0 16.6-13.4 30-30 30-5.7 0-11.1-1.6-15.7-4.4l-13 13c8 5.9 17.9 9.5 28.6 9.5 26.5 0 48-21.5 48-48 .2-10.9-3.3-20.8-9.3-28.8zM165 60c0-16.6 13.4-30 30-30 5.7 0 11.1 1.6 15.7 4.4l13-13c-8-5.9-17.9-9.5-28.6-9.5-26.5 0-48 21.5-48 48 0 10.7 3.5 20.6 9.5 28.6l13-13c-3-4.4-4.6-9.8-4.6-15.5z",
                fillRule: "nonzero"
            }), r.createElement("circle", {
                cx: 243,
                cy: 12,
                r: 12
            }), r.createElement("circle", {
                cx: 147,
                cy: 108,
                r: 12
            }));

            function c (t, e) {
                var n = t.title,
                    c = t.titleId,
                    s = i(t, ["title", "titleId"]);
                return r.createElement("svg", a({
                    viewBox: "0 0 120 120",
                    xmlns: "http://www.w3.org/2000/svg",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                    ref: e,
                    "aria-labelledby": c
                }, s), n ? r.createElement("title", {
                    id: c
                }, n) : null, o)
            }
            var s = r.forwardRef(c);
            n.p
        },
        444: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return s
            }));
            var r = n(0);

            function a () {
                return (a = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }).apply(this, arguments)
            }

            function i (t, e) {
                if (null == t) return {};
                var n, r, a = function (t, e) {
                    if (null == t) return {};
                    var n, r, a = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (a[n] = t[n]);
                    return a
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n])
                }
                return a
            }
            var o = r.createElement("path", {
                d: "M349.17 15.335h-183v245.6h245.6v-181.7c.1-34.5-28.1-63.9-62.6-63.9zm-239.2 0h-30.7c-34.5 0-64 28.1-64 64v30.7h94.7zm-94.7 152.2h94.7v94.7h-94.7zm301.9 245.6h30.7c34.5 0 64-28.1 64-64v-30.6h-94.7zm-151-94.6h94.7v94.7h-94.7zm-150.9 0v30.7c0 34.5 28.1 64 64 64h30.7v-94.7z"
            });

            function c (t, e) {
                var n = t.title,
                    c = t.titleId,
                    s = i(t, ["title", "titleId"]);
                return r.createElement("svg", a({
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 420 420",
                    role: "logo",
                    "aria-label": "Ledger hardware wallet logo",
                    ref: e,
                    "aria-labelledby": c
                }, s), n ? r.createElement("title", {
                    id: c
                }, n) : null, o)
            }
            var s = r.forwardRef(c);
            n.p
        },
        52: function (t, e, n) {
            "use strict";
            n.d(e, "c", (function () {
                return v
            })), n.d(e, "d", (function () {
                return g
            })), n.d(e, "a", (function () {
                return O
            })), n.d(e, "b", (function () {
                return y
            }));
            var r = n(17),
                a = n(115),
                i = n(20),
                o = n(0),
                c = n.n(o),
                s = n(33),
                l = n.p + "static/media/tex-gyre-adventor-bold.76bb4f17.woff",
                u = n.p + "static/media/tex-gyre-adventor-bold.444db04e.woff2",
                d = n.p + "static/media/tex-gyre-adventor-regular.5ef0cb89.woff",
                f = n.p + "static/media/tex-gyre-adventor-regular.6268d592.woff2";

            function p () {
                var t = Object(r.a)(["\n  html {\n    color: ", ";\n    background-color: ", ";\n  }\n\n  body {\n    min-height: 100vh;\n  }\n\n  /* ==========================================================================\n    Slider (noUISlider.JS)\n  ========================================================================== */\n\n  .noUi-target,\n  .noUi-target * {\n    -webkit-touch-callout: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-user-select: none;\n    -ms-touch-action: none;\n    touch-action: none;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  .noUi-target {\n    position: relative;\n  }\n  .noUi-base,\n  .noUi-connects {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n  }\n\n  /* Wrapper for all connect elements. */\n\n  .noUi-connects {\n    overflow: hidden;\n    z-index: 0;\n  }\n  .noUi-connect,\n  .noUi-origin {\n    will-change: transform;\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    right: 0;\n    -ms-transform-origin: 0 0;\n    -webkit-transform-origin: 0 0;\n    -webkit-transform-style: preserve-3d;\n    transform-origin: 0 0;\n    transform-style: flat;\n  }\n  .noUi-connect {\n    height: 100%;\n    width: 100%;\n  }\n  .noUi-origin {\n    height: 10%;\n    width: 10%;\n  }\n\n  /* Offset direction */\n\n  .noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {\n    left: 0;\n    right: auto;\n  }\n\n  /* Give origins 0 height/width so they don't interfere with clicking the connect elements. */\n\n  .noUi-vertical .noUi-origin {\n    width: 0;\n  }\n  .noUi-horizontal .noUi-origin {\n    height: 0;\n  }\n  .noUi-handle {\n    backface-visibility: hidden;\n    position: absolute;\n  }\n  .noUi-touch-area {\n    height: 100%;\n    width: 100%;\n  }\n  .noUi-state-tap .noUi-connect,\n  .noUi-state-tap .noUi-origin {\n    transition: transform 0.3s;\n  }\n  .noUi-state-drag * {\n    cursor: inherit !important;\n  }\n\n  /* Slider size and handle placement */\n\n  .noUi-horizontal {\n    height: 5px;\n  }\n  .noUi-horizontal .noUi-handle {\n    width: 20px;\n    height: 20px;\n    right: -10px;\n    top: -8px;\n    background-color: #03334f;\n    border: 3px solid #2ca9b7;\n  }\n  .noUi-vertical {\n    width: 18px;\n  }\n  .noUi-vertical .noUi-handle {\n    width: 28px;\n    height: 34px;\n    right: -6px;\n    top: -17px;\n  }\n  .noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {\n    left: -17px;\n    right: auto;\n  }\n\n  /* Styling: Giving the connect element a border radius causes issues with using transform: scale */\n\n  .noUi-target {\n    background: #03334f;\n    border-radius: 4px;\n  }\n  .noUi-connects {\n    border-radius: 3px;\n  }\n  .noUi-connect {\n    background: #2ca9b7;\n  }\n\n  /* Handles and cursors */\n\n  .noUi-draggable {\n    cursor: ew-resize;\n  }\n  .noUi-vertical .noUi-draggable {\n    cursor: ns-resize;\n  }\n  .noUi-handle {\n    border: 1px solid #D9D9D9;\n    border-radius: 100px;\n    background: #FFF;\n    cursor: pointer;\n  }\n  .noUi-active {\n    box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;\n  }\n\n  /* Handle stripes */\n\n  .noUi-vertical .noUi-handle:before,\n  .noUi-vertical .noUi-handle:after {\n    width: 14px;\n    height: 1px;\n    left: 6px;\n    top: 14px;\n  }\n  .noUi-vertical .noUi-handle:after {\n    top: 17px;\n  }\n\n  /* Disabled state */\n\n  .panel-parent [disabled].noUi-horizontal {\n    background: #03334f;\n  }\n  .panel [disabled].noUi-horizontal{\n    background: #144a68;\n  }\n  [disabled] .noUi-handle {\n    opacity: 0;\n    cursor: default;\n  }\n  [disabled].noUi-horizontal {\n    height: 15px;\n    transition: height 0.3s ease;\n  }\n  [disabled] .noUi-handle {\n    transition: opacity 0.3s ease;\n  }\n\n  /* [disabled] .noUi-connect {\n    background: #B8B8B8;\n  } */\n  [disabled].noUi-target,\n  [disabled].noUi-handle,\n  [disabled] .noUi-handle {\n    cursor: default;\n  }\n\n  /* Base */\n\n  .noUi-pips,\n  .noUi-pips * {\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  .noUi-pips {\n    position: absolute;\n    color: #999;\n  }\n\n  /* Values */\n\n  .noUi-value {\n    position: absolute;\n    white-space: nowrap;\n    text-align: center;\n  }\n  .noUi-value-sub {\n    color: #ccc;\n    font-size: 10px;\n  }\n\n  /* Markings */\n\n  .noUi-marker {\n    position: absolute;\n    background: #CCC;\n  }\n  .noUi-marker-sub {\n    background: #AAA;\n  }\n  .noUi-marker-large {\n    background: #AAA;\n  }\n\n  /* Horizontal layout */\n\n  .noUi-pips-horizontal {\n    padding: 10px 0;\n    height: 80px;\n    top: 100%;\n    left: 0;\n    width: 100%;\n  }\n  .noUi-value-horizontal {\n    transform: translate(-50%, 50%);\n  }\n  .noUi-rtl .noUi-value-horizontal {\n    transform: translate(50%, 50%);\n  }\n  .noUi-marker-horizontal.noUi-marker {\n    margin-left: -1px;\n    width: 2px;\n    height: 5px;\n  }\n  .noUi-marker-horizontal.noUi-marker-sub {\n    height: 10px;\n  }\n  .noUi-marker-horizontal.noUi-marker-large {\n    height: 15px;\n  }\n\n  /* Vertical layout */\n\n  .noUi-pips-vertical {\n    padding: 0 10px;\n    height: 100%;\n    top: 0;\n    left: 100%;\n  }\n  .noUi-value-vertical {\n    transform: translate(0, -50%);\n    padding-left: 25px;\n  }\n  .noUi-rtl .noUi-value-vertical {\n    transform: translate(0, 50%);\n  }\n  .noUi-marker-vertical.noUi-marker {\n    width: 5px;\n    height: 2px;\n    margin-top: -1px;\n  }\n  .noUi-marker-vertical.noUi-marker-sub {\n    width: 10px;\n  }\n  .noUi-marker-vertical.noUi-marker-large {\n    width: 15px;\n  }\n  .noUi-tooltip {\n    display: block;\n    position: absolute;\n    border: 2px solid #2ca9b7;\n    border-radius: 10px;\n    background: #0b284c;\n    color: #ffffff;\n    padding: 15px;\n    text-align: center;\n    white-space: nowrap;\n  }\n  .noUi-horizontal .noUi-tooltip {\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    left: 50%;\n    bottom: 120%;\n  }\n  .noUi-vertical .noUi-tooltip {\n    -webkit-transform: translate(0, -50%);\n    transform: translate(0, -50%);\n    top: 50%;\n    right: 120%;\n  }\n  .noUi-horizontal .noUi-origin > .noUi-tooltip {\n    -webkit-transform: translate(50%, 0);\n    transform: translate(50%, 0);\n    left: auto;\n    bottom: 10px;\n  }\n  .noUi-vertical .noUi-origin > .noUi-tooltip {\n    -webkit-transform: translate(0, -18px);\n    transform: translate(0, -18px);\n    top: auto;\n    right: 28px;\n  }\n  .noUi-tooltip {\n    display: none;\n  }\n  .noUi-active .noUi-tooltip {\n    display: block;\n  }\n\n  /*  */\n  #indicator-locked-container,\n  #indicator-used-container {\n    position: relative;\n  }\n  #indicator-locked,\n  #indicator-used {\n    position: absolute;\n    width: 1px;\n    height: 20px;\n    margin-top: 25px;\n    background-color: #ffffff;\n    z-index: 2;\n    opacity: 1;\n    transition: height 0.2s ease, opacity 0.2s ease;\n  }\n  #indicator-used {\n    margin-top: -5px;\n  }\n  #indicator-locked.disabled,\n  #indicator-used.disabled {\n    height: 10px;\n    transition: height 0.2s ease;\n  }\n  #indicator-locked .label,\n  #indicator-used .label {\n    font-size: 14px;\n    margin-top: -20px;\n    margin-left: -23px;\n    width: 60px;\n  }\n  #indicator-used .label {\n    margin-left: -17px;\n  }\n  #indicator-locked.active,\n  #indicator-used.active {\n    opacity: 1;\n    transition: opacity 0.3s ease;\n  }\n\n/* Risk */\n\n  #slider-risk {\n    /* height: 17px; */\n    border-radius: 0;\n  }\n  #slider-risk .noUi-connects {\n    border-radius: 0;\n  }\n  #slider-risk[disabled].noUi-horizontal {\n    background: #2ca9b7;\n    border-radius: 0;\n  }\n  #slider-risk[disabled].noUi-horizontal .noUi-connect {\n    background: #144a68;\n  }\n"]);
                return p = function () {
                    return t
                }, t
            }

            function b () {
                var t = Object(r.a)(["\n  @font-face {\n    font-family: 'tex-gyre-adventor';\n    src: url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'tex-gyre-adventor';\n    src: url(", ") format('woff2'),\n    url(", ") format('woff');\n    font-weight: bold;\n    font-style: normal;\n  }\n\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n    line-height: 1.4;\n  }\n\n  body,button {\n    line-height: 1.4;\n    font-family: 'tex-gyre-adventor', Arial, sans-serif;\n  }\n\n  #root {\n    min-height: 100%;\n    min-width: 100%;\n  }\n\n  input, select {\n    font-family: inherit;\n    font-size: inherit;\n  }\n\n  div, button:focus {\n    outline: none;\n  }\n\n  /* Ledger Wallet style */\n  .wallet tbody tr {\n    border-bottom: 0px;\n    border-radius: 10px;\n  }\n\n  .wallet tbody tr:hover {\n    background-color: #2ca9b7;\n  }\n\n  .wallet tbody tr:hover td {\n    cursor: pointer;\n  }\n\n  .wallet td {\n    color: white;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  .wallet td:first-of-type {\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n  }\n\n  .wallet td:last-of-type {\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n  }\n\n  ul.pagination {\n    display: block;\n    padding: 0;\n    text-align: center;\n    margin: 0;\n    margin-top: 15px;\n  }\n\n  ul.pagination li {\n    display: inline-block;\n    padding: 5px;\n    border: 2px solid rgba(255,255,255,0.15);\n    border-radius: 10px;\n    width: 35px;\n    text-align: center;\n    transition: border 0.2s ease;\n  }\n\n  ul.pagination li:hover {\n    border: 2px solid #2ca9b7;\n    cursor: pointer;\n    transition: border 0.3s ease;\n  }\n\n  /* Borders */\n\n  .border-left {\n    border-left: 1px solid rgba(255, 255, 255, 0.15);\n  }\n  .border-right {\n    border-right: 1px solid rgba(255, 255, 255, 0.15);\n  }\n  .border-top {\n    border-top: 1px solid rgba(255, 255, 255, 0.15);\n  }\n  .border-bottom {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n  }\n\n  /* Utils */\n  .alert {\n    color: #fb6a6a;\n  }\n\n  .white {\n    color: #FFFFFF;\n  }\n\n  .actived {\n    border-color: #2ca9b7 !important;\n  }\n\n  [hidden] {\n    display: none !important;\n  }\n\n"]);
                return b = function () {
                    return t
                }, t
            }
            var h = {
                upToExtraSmall: 600,
                upToSmall: 800,
                upToMedium: 1e3,
                upToLarge: 1280
            },
                m = Object.keys(h).reduce((function (t, e) {
                    return t[e] = function (t) {
                        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                        return Object(i.css)(["@media (max-width:", "px){", "}"], h[e], i.css.apply(void 0, [t].concat(r)))
                    }, t
                }), {});
            var v = c.a.forwardRef((function (t, e) {
                var n = t.variant,
                    r = Object(a.a)(t, ["variant"]);
                switch (n) {
                    case "h1":
                        return c.a.createElement(s.Text, Object.assign({
                            ref: e,
                            as: "h1",
                            color: "text",
                            fontSize: 35,
                            fontWeight: "bold"
                        }, r));
                    case "h2":
                        return c.a.createElement(s.Text, Object.assign({
                            ref: e,
                            as: "h2",
                            color: "text",
                            fontSize: 25,
                            fontWeight: "bold"
                        }, r));
                    case "h3":
                        return c.a.createElement(s.Text, Object.assign({
                            ref: e,
                            as: "h3",
                            color: "text",
                            fontSize: 20,
                            fontWeight: "bold"
                        }, r));
                    case "p":
                        return c.a.createElement(s.Text, Object.assign({
                            ref: e,
                            as: "p",
                            color: "text",
                            fontSize: 16
                        }, r));
                    case "label":
                        return c.a.createElement(s.Text, Object.assign({
                            ref: e,
                            as: "label",
                            fontSize: 14
                        }, r));
                    case "body":
                    default:
                        return c.a.createElement(s.Text, Object.assign({
                            ref: e,
                            as: "p",
                            fontSize: 14
                        }, r))
                }
            }));

            function g (t) {
                var e = t.children,
                    n = {
                        colors: {
                            white: "#FFFFFF",
                            black: "#000000",
                            text: "#FFFFFF",
                            text1: "#D5D7DB",
                            bg1: "#01002A",
                            bg2: "#0c2a4d",
                            bg3: "#144a68",
                            bg4: "#0b284c",
                            bg5: "#021338",
                            primary: "#2ca9b7",
                            modalBG: "rgba(1, 0, 42, 0.75)",
                            advancedBG: "rgba(255,255,255,0.6)",
                            divider: "rgba(255, 255, 255, 0.15)",
                            alert: "#fb6a6a"
                        },
                        fontSizes: [12, 14, 16, 20, 25, 35],
                        space: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        mediaWidth: m,
                        shadow1: "#2F80ED",
                        breakpoints: Object.values(h).map((function (t) {
                            return "".concat(t, "px")
                        })),
                        zIndices: {
                            appBar: 1100,
                            drawer: 1200,
                            modal: 1300,
                            snackbar: 1400,
                            tooltip: 1500
                        }
                    };
                return c.a.createElement(i.ThemeProvider, {
                    theme: n
                }, e)
            }
            var O = Object(i.createGlobalStyle)(b(), f, d, u, l),
                y = Object(i.createGlobalStyle)(p(), (function (t) {
                    return t.theme.colors.text1
                }), (function (t) {
                    return t.theme.colors.bg1
                }))
        },
        58: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return r
            })), n.d(e, "b", (function () {
                return i
            })), n.d(e, "e", (function () {
                return o
            })), n.d(e, "f", (function () {
                return c
            })), n.d(e, "d", (function () {
                return s
            })), n.d(e, "c", (function () {
                return l
            }));
            var r, a = n(4);
            ! function (t) {
                t[t.WALLET = 0] = "WALLET", t[t.SETTINGS = 1] = "SETTINGS", t[t.SELF_CLAIM = 2] = "SELF_CLAIM", t[t.ADDRESS_CLAIM = 3] = "ADDRESS_CLAIM", t[t.CLAIM_POPUP = 4] = "CLAIM_POPUP", t[t.MENU = 5] = "MENU", t[t.DELEGATE = 6] = "DELEGATE", t[t.VOTE = 7] = "VOTE"
            }(r || (r = {}));
            var i = Object(a.b)("application/addPopup"),
                o = Object(a.b)("application/removePopup"),
                c = Object(a.b)("application/setOpenModal"),
                s = Object(a.b)("application/changeWalletType"),
                l = Object(a.b)("application/changeShouldLedgedSignMessage")
        },
        755: function (t, e) { },
        757: function (t, e) { },
        77: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return i
            })), n.d(e, "b", (function () {
                return r
            })), n.d(e, "c", (function () {
                return a
            })), n.d(e, "d", (function () {
                return o
            }));
            var r, a, i = "ICONEX_RELAY_RESPONSE";
            ! function (t) {
                t.REQUEST_HAS_ACCOUNT = "REQUEST_HAS_ACCOUNT", t.REQUEST_HAS_ADDRESS = "REQUEST_HAS_ADDRESS", t.REQUEST_ADDRESS = "REQUEST_ADDRESS", t.REQUEST_JSON = "REQUEST_JSON", t.REQUEST_SIGNING = "REQUEST_SIGNING"
            }(r || (r = {})),
                function (t) {
                    t.RESPONSE_HAS_ACCOUNT = "RESPONSE_HAS_ACCOUNT", t.RESPONSE_HAS_ADDRESS = "RESPONSE_HAS_ADDRESS", t.RESPONSE_ADDRESS = "RESPONSE_ADDRESS", t.RESPONSE_JSON = "RESPONSE_JSON", t.RESPONSE_SIGNING = "RESPONSE_SIGNING"
                }(a || (a = {}));
            var o = function (t) {
                return window.dispatchEvent(new CustomEvent("ICONEX_RELAY_REQUEST", {
                    detail: t
                })), new Promise((function (t, e) {
                    window.addEventListener(i, (function e (n) {
                        window.removeEventListener(i, e), t(n.detail)
                    }))
                }))
            }
        },
        770: function (t, e) { },
        772: function (t, e) { },
        780: function (t, e) { },
        783: function (t, e) { },
        83: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return r
            })), n.d(e, "e", (function () {
                return i
            })), n.d(e, "d", (function () {
                return o
            })), n.d(e, "h", (function () {
                return c
            })), n.d(e, "g", (function () {
                return s
            })), n.d(e, "f", (function () {
                return l
            })), n.d(e, "b", (function () {
                return u
            })), n.d(e, "c", (function () {
                return d
            })), n.d(e, "i", (function () {
                return f
            }));
            var r, a = n(4);
            ! function (t) {
                t.LEFT = "LEFT", t.RIGHT = "RIGHT"
            }(r || (r = {}));
            var i = Object(a.b)("loan/changeBorrowedAmount"),
                o = Object(a.b)("loan/changeBadDebt"),
                c = Object(a.b)("loan/changeTotalSupply"),
                s = Object(a.b)("loan/changeTotalRepaid"),
                l = Object(a.b)("loan/changeTotalCollateralSold"),
                u = Object(a.b)("loan/adjust"),
                d = Object(a.b)("loan/cancel"),
                f = Object(a.b)("loan/type")
        },
        90: function (t, e, n) {
            "use strict";
            n.d(e, "a", (function () {
                return a
            })), n.d(e, "c", (function () {
                return i
            })), n.d(e, "d", (function () {
                return o
            })), n.d(e, "b", (function () {
                return c
            }));
            var r = n(4),
                a = Object(r.b)("transactions/addTransaction"),
                i = Object(r.b)("transactions/clearAllTransactions"),
                o = Object(r.b)("transactions/finalizeTransaction"),
                c = Object(r.b)("transactions/checkedTransaction")
        },
        925: function (t, e, n) {
            "use strict";
            n.r(e);
            n(459), n(469);
            var r = n(0),
                a = n.n(r),
                i = n(9),
                o = n.n(i),
                c = n(82),
                s = n(175),
                l = n(36);
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            n(664);
            var u = n(42),
                d = n(928),
                f = n(301),
                p = n(32),
                b = n(17),
                h = n(112),
                m = n(20);
            n(665);

            function v () {
                var t = Object(b.a)(["\n  &.Toastify__toast-container {\n  }\n  .Toastify__toast {\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: 10px;\n    overflow: hidden;\n\n    color: ", ";\n  }\n  .Toastify__toast-body {\n    font-family: 'tex-gyre-adventor';\n    margin: 5px 10px;\n  }\n  .Toastify__progress-bar {\n    background: ", ";\n    box-shadow: 0px 0px 15px rgb(0 209 255 / 60%);\n  }\n  .Toastify__close-button > svg {\n    fill: white;\n    height: 24px;\n    width: 24px;\n  }\n"]);
                return v = function () {
                    return t
                }, t
            }
            var g = Object(m.default)(h.a)(v(), (function (t) {
                return t.theme.colors.bg2
            }), (function (t) {
                return t.theme.colors.primary
            }), (function (t) {
                return t.theme.colors.white
            }), (function (t) {
                return t.theme.colors.primary
            })),
                O = function () {
                    return "undefined" !== typeof document ? Object(c.createPortal)(a.a.createElement(g, {
                        autoClose: !1,
                        position: "bottom-right",
                        closeOnClick: !1
                    }), document.body) : null
                },
                y = n(437),
                x = n(52),
                w = n(18),
                j = n(51),
                E = n(168),
                k = n(297),
                S = n(174),
                I = n(90),
                C = n(294);

            function U () {
                var t = Object(u.d)(),
                    e = t.networkId,
                    n = t.iconService,
                    r = Object(l.c)(),
                    i = a.a.useState(0),
                    o = Object(j.a)(i, 2),
                    c = o[0],
                    s = o[1],
                    d = a.a.useCallback((function () {
                        return s((function (t) {
                            return t + 1
                        }))
                    }), [s]);
                Object(k.a)(d, 5e3);
                var f = Object(C.b)();
                return a.a.useEffect((function () {
                    e && n && Object.keys(f).filter((function (t) {
                        return !f[t].receipt
                    })).forEach((function (t) {
                        n.getTransactionResult(t).execute().then((function (n) {
                            if (n) {
                                r(Object(I.d)({
                                    networkId: e,
                                    hash: t,
                                    receipt: {
                                        blockHash: n.blockHash,
                                        blockHeight: n.blockHeight,
                                        scoreAddress: n.scoreAddress,
                                        from: n.from,
                                        status: n.status,
                                        to: n.to,
                                        txHash: n.txHash,
                                        txIndex: n.txIndex
                                    }
                                }));
                                var i, o = Object(S.d)(e, t, "transaction"),
                                    c = {
                                        onClick: function () {
                                            return window.open(o, "_blank")
                                        }
                                    };
                                if (1 === n.status) h.b.update(n.txHash, Object(w.a)(Object(w.a)({}, c), {}, {
                                    render: a.a.createElement(E.c, {
                                        summary: null === (i = f[t]) || void 0 === i ? void 0 : i.summary
                                    }),
                                    autoClose: 1e4
                                }));
                                0 === n.status && h.b.update(n.txHash, Object(w.a)(Object(w.a)({}, c), {}, {
                                    render: a.a.createElement(E.a, {
                                        failureReason: n.failure.message
                                    }),
                                    autoClose: 1e4
                                }))
                            }
                        })).catch((function (e) {
                            console.error("failed to check transaction hash: ".concat(t), e)
                        }))
                    }))
                }), [e, n, f, r, c]), null
            }
            var N = function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    fallback: null
                },
                    i = t;
                e && (i = function () {
                    return t().then((function (t) {
                        return {
                            default: e(t)
                        }
                    }))
                });
                var o = Object(r.lazy)(i);
                return function (t) {
                    return a.a.createElement(r.Suspense, {
                        fallback: n.fallback
                    }, a.a.createElement(o, t))
                }
            },
                A = N((function () {
                    return n.e(11).then(n.bind(null, 1001))
                }), (function (t) {
                    return t.NotFoundPage
                })),
                T = N((function () {
                    return Promise.all([n.e(0), n.e(1), n.e(9)]).then(n.bind(null, 1002))
                }), (function (t) {
                    return t.Airdrip
                })),
                B = N((function () {
                    return Promise.all([n.e(0), n.e(1), n.e(2), n.e(8), n.e(6)]).then(n.bind(null, 999))
                }), (function (t) {
                    return t.HomePage
                })),
                _ = N((function () {
                    return Promise.all([n.e(0), n.e(1), n.e(2), n.e(12), n.e(7)]).then(n.bind(null, 1e3))
                }), (function (t) {
                    return t.TradePage
                })),
                D = N((function () {
                    return Promise.all([n.e(0), n.e(10)]).then(n.bind(null, 997))
                }), (function (t) {
                    return t.VotePage
                }));

            function R () {
                return a.a.createElement(a.a.Fragment, null, a.a.createElement(U, null))
            }

            function P () {
                var t = Object(d.a)().i18n;
                return a.a.createElement(a.a.Fragment, null, a.a.createElement(x.a, null), a.a.createElement(u.a, null, a.a.createElement(R, null), a.a.createElement(x.d, null, a.a.createElement(x.b, null), a.a.createElement(O, null), a.a.createElement(y.a, null), a.a.createElement(f.a, null, a.a.createElement(s.a, {
                    titleTemplate: "%s - Balanced Network",
                    defaultTitle: "Balanced Network",
                    htmlAttributes: {
                        lang: t.language
                    }
                }, a.a.createElement("meta", {
                    name: "description",
                    content: "A Balanced Network interface"
                })), a.a.createElement(p.c, null, a.a.createElement(p.a, {
                    exact: !0,
                    path: "/",
                    component: B
                }), a.a.createElement(p.a, {
                    exact: !0,
                    path: "/vote",
                    component: D
                }), a.a.createElement(p.a, {
                    exact: !0,
                    path: "/trade",
                    component: _
                }), a.a.createElement(p.a, {
                    exact: !0,
                    path: "/airdrip",
                    component: T
                }), a.a.createElement(p.a, {
                    component: A
                }))))))
            }
            var L = n(111),
                z = n(4),
                X = n(449),
                F = n(291),
                H = n(452),
                M = n(58),
                G = Object(z.c)({
                    popupList: [],
                    openModal: null,
                    account: "",
                    walletType: "ICONEX",
                    shouldLedgerSign: !1
                }, (function (t) {
                    return t.addCase(M.b, (function (t, e) {
                        var n = e.payload,
                            r = n.content,
                            a = n.key,
                            i = n.removeAfterMs,
                            o = void 0 === i ? 15e3 : i;
                        t.popupList = (a ? t.popupList.filter((function (t) {
                            return t.key !== a
                        })) : t.popupList).concat([{
                            key: a || Object(z.e)(),
                            show: !0,
                            content: r,
                            removeAfterMs: o
                        }])
                    })).addCase(M.e, (function (t, e) {
                        var n = e.payload.key;
                        t.popupList.forEach((function (t) {
                            t.key === n && (t.show = !1)
                        }))
                    })).addCase(M.f, (function (t, e) {
                        t.openModal = e.payload
                    })).addCase(M.d, (function (t, e) {
                        t.walletType = e.payload.walletType
                    })).addCase(M.c, (function (t, e) {
                        t.shouldLedgerSign = e.payload.shouldLedgerSign
                    }))
                })),
                V = n(130),
                J = {
                    depositedAmount: new o.a(0),
                    state: {
                        isAdjusting: !1,
                        typedValue: "",
                        independentField: V.a.LEFT,
                        inputType: "text"
                    }
                },
                W = Object(z.c)(J, (function (t) {
                    return t.addCase(V.b, (function (t, e) {
                        e.payload;
                        t.state.isAdjusting = !0
                    })).addCase(V.c, (function (t, e) {
                        e.payload;
                        t.state.isAdjusting = !1
                    })).addCase(V.e, (function (t, e) {
                        var n = e.payload,
                            r = n.independentField,
                            a = n.typedValue,
                            i = n.inputType;
                        t.state.independentField = r || t.state.independentField, t.state.typedValue = null !== a && void 0 !== a ? a : t.state.typedValue, t.state.inputType = i || t.state.inputType
                    })).addCase(V.d, (function (t, e) {
                        var n = e.payload.depositedAmount;
                        t.depositedAmount = n
                    }))
                })),
                Y = n(83),
                q = {
                    borrowedAmount: new o.a(0),
                    badDebt: new o.a(0),
                    totalSupply: new o.a(0),
                    totalRepaid: new o.a(0),
                    totalCollateralSold: new o.a(0),
                    state: {
                        isAdjusting: !1,
                        typedValue: "",
                        independentField: Y.a.LEFT,
                        inputType: "text"
                    }
                },
                K = Object(z.c)(q, (function (t) {
                    return t.addCase(Y.b, (function (t, e) {
                        e.payload;
                        t.state.isAdjusting = !0
                    })).addCase(Y.c, (function (t, e) {
                        e.payload;
                        t.state.isAdjusting = !1
                    })).addCase(Y.i, (function (t, e) {
                        var n = e.payload,
                            r = n.independentField,
                            a = n.typedValue,
                            i = n.inputType;
                        t.state.independentField = r || t.state.independentField, t.state.typedValue = null !== a && void 0 !== a ? a : t.state.typedValue, t.state.inputType = i || t.state.inputType
                    })).addCase(Y.e, (function (t, e) {
                        var n = e.payload.borrowedAmount;
                        t.borrowedAmount = n
                    })).addCase(Y.d, (function (t, e) {
                        var n = e.payload.badDebt;
                        t.badDebt = n
                    })).addCase(Y.h, (function (t, e) {
                        var n = e.payload.totalSupply;
                        t.totalSupply = n
                    })).addCase(Y.g, (function (t, e) {
                        var n = e.payload.totalRepaid;
                        t.totalRepaid = n
                    })).addCase(Y.f, (function (t, e) {
                        var n = e.payload.totalCollateralSold;
                        t.totalCollateralSold = n
                    }))
                })),
                Q = n(176),
                $ = {
                    independentField: Q.a.CURRENCY_A,
                    typedValue: "",
                    otherTypedValue: "",
                    inputType: "text"
                },
                Z = Object(z.c)($, (function (t) {
                    return t.addCase(Q.b, (function () {
                        return $
                    })).addCase(Q.c, (function (t, e) {
                        var n = e.payload,
                            r = n.field,
                            a = n.typedValue,
                            i = n.noLiquidity,
                            o = n.inputType;
                        return i ? r === t.independentField ? Object(w.a)(Object(w.a)({}, t), {}, {
                            independentField: r,
                            typedValue: a,
                            inputType: o
                        }) : Object(w.a)(Object(w.a)({}, t), {}, {
                            independentField: r,
                            typedValue: a,
                            otherTypedValue: t.typedValue,
                            inputType: o
                        }) : Object(w.a)(Object(w.a)({}, t), {}, {
                            independentField: r,
                            typedValue: a,
                            otherTypedValue: "",
                            inputType: o
                        })
                    }))
                })),
                tt = n(28),
                et = n(295),
                nt = n(167),
                rt = {
                    selectedPair: et.e[0],
                    pools: {},
                    balances: {}
                },
                at = Object(z.c)(rt, (function (t) {
                    return t.addCase(nt.c, (function (t, e) {
                        var n = e.payload;
                        t.selectedPair = n
                    })).addCase(nt.d, (function (t, e) {
                        var n = e.payload,
                            r = n.poolId,
                            a = n.poolData;
                        t.pools = Object(w.a)(Object(w.a)({}, t.pools), {}, Object(tt.a)({}, r, Object(w.a)(Object(w.a)({}, t.pools[r]), a)))
                    })).addCase(nt.b, (function (t, e) {
                        var n = e.payload,
                            r = n.poolId,
                            a = n.balance;
                        t.balances = Object(w.a)(Object(w.a)({}, t.balances), {}, Object(tt.a)({}, r, a))
                    })).addCase(nt.a, (function (t, e) {
                        e.payload;
                        t.balances = {}
                    }))
                })),
                it = n(302),
                ot = {
                    ICXUSDratio: new o.a(0),
                    sICXbnUSDratio: new o.a(0),
                    sICXICXratio: new o.a(0),
                    BALNbnUSDratio: new o.a(0)
                },
                ct = Object(z.c)(ot, (function (t) {
                    return t.addCase(it.a, (function (t, e) {
                        var n = e.payload,
                            r = n.ICXUSDratio,
                            a = n.sICXbnUSDratio,
                            i = n.sICXICXratio,
                            o = n.BALNbnUSDratio;
                        t.ICXUSDratio = r || t.ICXUSDratio, t.sICXbnUSDratio = a || t.sICXbnUSDratio, t.sICXICXratio = i || t.sICXICXratio, t.BALNbnUSDratio = o || t.BALNbnUSDratio
                    }))
                })),
                st = n(57);

            function lt () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return 0 === Object.keys(t).length ? function (t) {
                    return t
                } : Object(st.c)(Object(w.a)({}, t))
            }
            var ut = n(303),
                dt = Object(z.c)({}, (function (t) {
                    return t.addCase(ut.a, (function (t, e) {
                        var n = e.payload,
                            r = n.poolId,
                            a = n.reward;
                        t[r] = a
                    }))
                })),
                ft = function () {
                    return (new Date).getTime()
                },
                pt = Object(z.c)({}, (function (t) {
                    return t.addCase(I.a, (function (t, e) {
                        var n, r, a = e.payload,
                            i = a.networkId,
                            o = a.from,
                            c = a.hash,
                            s = a.approval,
                            l = a.summary,
                            u = a.claim;
                        if (null === (n = t[i]) || void 0 === n ? void 0 : n[c]) throw Error("Attempted to add existing transaction.");
                        var d = null !== (r = t[i]) && void 0 !== r ? r : {};
                        d[c] = {
                            hash: c,
                            approval: s,
                            summary: l,
                            claim: u,
                            from: o,
                            addedTime: ft()
                        }, t[i] = d
                    })).addCase(I.c, (function (t, e) {
                        var n = e.payload.networkId;
                        t[n] && (t[n] = {})
                    })).addCase(I.b, (function (t, e) {
                        var n, r = e.payload,
                            a = r.networkId,
                            i = r.hash,
                            o = r.blockNumber,
                            c = null === (n = t[a]) || void 0 === n ? void 0 : n[i];
                        c && (c.lastCheckedBlockNumber ? c.lastCheckedBlockNumber = Math.max(o, c.lastCheckedBlockNumber) : c.lastCheckedBlockNumber = o)
                    })).addCase(I.d, (function (t, e) {
                        var n, r = e.payload,
                            a = r.hash,
                            i = r.networkId,
                            o = r.receipt,
                            c = null === (n = t[i]) || void 0 === n ? void 0 : n[a];
                        c && (c.receipt = o, c.confirmedTime = ft())
                    }))
                })),
                bt = n(280),
                ht = {
                    ICX: new o.a(0),
                    sICX: new o.a(0),
                    bnUSD: new o.a(0),
                    BALN: new o.a(0),
                    BALNreward: new o.a(0)
                },
                mt = Object(z.c)(ht, (function (t) {
                    return t.addCase(bt.a, (function (t, e) {
                        var n = e.payload,
                            r = n.ICX,
                            a = n.sICX,
                            i = n.bnUSD,
                            o = n.BALN,
                            c = n.BALNreward;
                        t.ICX = r || t.ICX, t.sICX = a || t.sICX, t.bnUSD = i || t.bnUSD, t.BALN = o || t.BALN, t.BALNreward = c || t.BALNreward
                    })).addCase(bt.b, (function (t) {
                        t.ICX = new o.a(0), t.sICX = new o.a(0), t.bnUSD = new o.a(0), t.BALN = new o.a(0), t.BALNreward = new o.a(0)
                    }))
                })),
                vt = ["transactions"];
            var gt = function () {
                var t = Object(H.a)({}),
                    e = t.run,
                    n = [t],
                    r = [Object(X.a)({
                        createReducer: lt,
                        runSaga: e
                    })];
                return Object(z.a)({
                    reducer: lt({
                        application: G,
                        pool: at,
                        reward: dt,
                        collateral: W,
                        loan: K,
                        ratio: ct,
                        wallet: mt,
                        transactions: pt,
                        mint: Z
                    }),
                    middleware: [].concat(Object(L.a)(Object(z.d)({
                        serializableCheck: !1
                    })), [Object(F.save)({
                        states: vt
                    })], n),
                    preloadedState: Object(F.load)({
                        states: vt
                    }),
                    devTools: !1,
                    enhancers: r
                })
            }(),
                Ot = n(454),
                yt = n(451),
                xt = n(171),
                wt = n(292),
                jt = {},
                Et = {
                    en: {
                        translation: wt
                    }
                };
            ! function t (e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : jt,
                    r = arguments.length > 2 ? arguments[2] : void 0;
                Object.keys(e).forEach((function (a) {
                    var i = r ? "".concat(r, ".").concat(a) : a;
                    "object" === typeof e[a] ? (n[a] = {}, t(e[a], n[a], i)) : n[a] = i
                }))
            }(wt);
            Ot.a.use(xt.e).use(yt.a).init({
                resources: Et,
                fallbackLng: "en",
                debug: !1,
                interpolation: {
                    escapeValue: !1
                }
            });
            var kt = document.getElementById("root");
            o.a.config({
                FORMAT: {
                    prefix: "",
                    decimalSeparator: ".",
                    groupSeparator: ",",
                    groupSize: 3,
                    secondaryGroupSize: 0,
                    fractionGroupSeparator: " ",
                    fractionGroupSize: 0,
                    suffix: ""
                },
                ROUNDING_MODE: o.a.ROUND_DOWN
            }), o.a.set({
                ROUNDING_MODE: o.a.ROUND_DOWN
            }), c.render(r.createElement(l.a, {
                store: gt
            }, r.createElement(s.b, null, r.createElement(r.StrictMode, null, r.createElement(P, null)))), kt), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (t) {
                t.unregister()
            })).catch((function (t) {
                console.error(t.message)
            }))
        }
    },
    [
        [925, 4, 5]
    ]
]);